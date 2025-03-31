/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5S6ZgLEUu64cJqcrsbZ1xqKerpMNKVL9RMz45RopbYzJHAAYttPPHYgjyp4MsdR82BQLxz92wcC1WSDvtoxvvm6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqKb2uXY5dGydNh8pwu5caRpQKaFZ3xJkTB8Yp8qtrD6Eua51jbV1YCsvDgPh8zECvxyPwCmcexkhePf7RqHGMT",
  "key1": "2zBQVpL6GzuEakGfpD4ct38vh7MyyMLmKqaR8g1eYPaf9LqrprFcasWUsyjLB8F2TqyB43JTARvABsTxazNUtKjd",
  "key2": "m6zRfsh2iyfpbM11WomztQJkhftHjdwUXifxVeiTYgTRnRtQZ8pTiEsATxNJ9p4WU6ZpM8Ckutvfju8um4gBPa5",
  "key3": "65pnxNdKKq1cXpF6Dee8U351haGxA3YrHM716F7TmkVt78fbo9x8LiU18ksrPMYvX4Gsy4iiPbrH8pPhJtoMJNWF",
  "key4": "gKEsPt1NGcr3H7H6uvXqfeyFzpshu7B6R2CweHMu6w2LpgUB6bTJaThj8KeS6vpBvs3hcRPQeH54esY3PF2CRHm",
  "key5": "2Gq3i9tZhBFMQkn4WNhDGHQg48fcxwHNDPx29qziteBDx9DUWGdfEEpFESmP4fy8iVHcA6PD2GQXcJjMiCR3fQGP",
  "key6": "W4yyVPr9yPbzy1Uvg46jQtqF3XvJ4g1M8ASVMkYr2h48ovU9JjkNjEzHgUw6zym6HyvbGBpSgRiTa5E955wbkMA",
  "key7": "5G3vwjvc8pTCPp4GSHxv2L4c4dJni7FPPJ1KeHPLZpMi4FMz2AGD4A1BTShH6behs3SXvYkp3ypanANUm4ZfUDFC",
  "key8": "pVxPsMxPXBXaT2AvF31PXar9cq1rCERrDNT346UAkcV7qBngSwhN5RfWev5KdSKAvQEjXPsDhMpCv3xRW3qfTtb",
  "key9": "3KgJqESG4hnwe31ipcZ3w6WD2bbT6jZtP9DdAApia6gYVDnVPfYSzGf9hBYZR1VY1rBTezeQx4yk1mbot3FZGTum",
  "key10": "2ojThGZS7i9kfeBwAECBM5XgyTBSSf2t9qVKq62F94UTG8AphqgZXEWM2FjM4vNUQS484kvc626zMpfqMsS38Gqe",
  "key11": "HbDexentLsBf6C8jvmdVDX9DT4U7fbuAJVVCQuxXgKKwhJyfqFmfX2WoqydMPpHJX1HzEfwo5GXhbM4YfQ7yPEn",
  "key12": "3Ti6F3Bc7zNkcfkMpXkFwjmFBDR8biY8sESbyNJWBXjzeim8SvpvXiBEySnxsR4aZQBdqeKDfg2X28gnmQXGAmd4",
  "key13": "3YcFmYjz5qRFJRLFEKV9wX7vBmSa54gemaGjzoMNxRnvS3FEYqW7SZLaWsnh9SDwfaseWQQGP82m9koCZHJWzg6M",
  "key14": "LthiF9ssqzqwr2w64DyvNc52SaH2BadX5E19xQboTBiJJm4NVHnDdaUxatEJidZ8VLs6zCBpGQwwwvSFnqVwyvx",
  "key15": "57ZNwpgQStavdtzfYAyr6Yv5gQ18kF6MrzQUXeAxKmBGLA7Yv49TDYZ1vXDkjp8F34cS7qGrdidWoKv8L4PvPeUz",
  "key16": "58EwVaW7i14Rvh1VVRaViYM8UH6ag1Gxq5uAvFNmuH7EZfwrEmKuK4LeZfVc4z9D6XcWuYaJW1qVdcMeMqQT8TFs",
  "key17": "3CmMMscEsY9nri9LMK7mHhRmeJ2mKb1sVyuoqfT1M2iLm1DNVm2v3FCoNP6Lf9YnZP3J18C4urNJRcByifsWX62P",
  "key18": "rLhH2iHEe2Ghz5A6Xh7X97zuo94w5HHr2aV9yxCrSDrbi8HgaZrLDku6suSf5BN6kh2jCs1yx5cJubKe4P2Nqso",
  "key19": "5xpxVPuqQmiPkQFG7ccWqqWWro84AAp76uKqAqriF9Mq61HzcPc1uKeRoooRJgg3MJ4gUeogmtpkXJZD62ezvbkh",
  "key20": "3S72Pim9AyZez8juy5K9jvpzXhkvmkgsG4GDW2bEjJAy9RAEAy9YgftxZS4YfGKkTufkeP6LLM79ZVG5m7oV9Cih",
  "key21": "2hsjSGdJsHJdsmFcxcFpeNMPHA1dabWCXhg9MiBAkBJcL28X6yEwhneMDFPuxeatfFcLpSmrASBr7LDLoMgamSoC",
  "key22": "kuPLqtSctyfpopkQVg9gv6edKxQkTaH1Tc8ykCwfoacwKrs4wSFAY5hVAjes7PUQHPkxZvorpCRcUpam8HLh5nq",
  "key23": "43onZquM1oJvkWyKono1L2J1E64dhmBt1Po8YPfB9mKRWEymwHnBoJJL5DVTS9LxrVtFRFYPAMqjcz9vGCpBEnbD",
  "key24": "2jJeAcy4Za6PqcWvK4U9n59i2zpwHFssfVfUHDNNvn9e6JqVQgEub37vjcMxqZcHTpQLUyyX2ZRPTojbQhHZ6wy7",
  "key25": "5bhezt6M4iNL9LoNsphxAa7wdLvzhRDPZtUxrzqG2HLeo13SsjFaXoA9gf21QfQR3qepJ8NSFvmXUdCBzJCnDj7B",
  "key26": "3WsgmWLveRDFBPNQZVn8rbS3gk3FW4c11MKi2K84SsJSi5EuCeDjnaXXmU6mhm83abEpu1ciNmPSAAPvBeJNFWQM",
  "key27": "4jd3PD7dKXKc7pMo1Ek3CxAY2vfaafRpQ6Qv4JZs9vsLnQm4PetQehR1sACTCffrAXy7D1VqAbBPJGNMXaPpbAV3",
  "key28": "ydM748P71gGfyEziC8ifT7ha2XckH9sQrLdFnD8qBoodAPDcYMo8uHKA7Bo92EYEc3EuDWXEkuqhk4KAEa5uvfw",
  "key29": "2w67Wds6YTtADAiieDQiYLtkeseJdxXK6d3yDsTD7DncbzrQ4JqXoew3oCVdUoMw6nckeugLxzrt1eUzzVgBGvCS",
  "key30": "5BzcKvRhAJPNfq5CQEnvK28bbcM2BdTub39GuXXvoFJbmyY5HayH2mWJwyTa4C55V56rKDecsjyu53Wp5q8akKb1",
  "key31": "YHiUF1WWByeXxh1GzwMqrzMQ2bWNEgDvpqabGNdKyTt8oW6ynh1cJh7psBCg2DNxGcAXtBdK37qADSFMt4i1bPi",
  "key32": "2zoqrFmkGEMnJisbXoysBEkhDVHpJZUpCKtt4baWtWCpLLoYMAcdJ2VFRhsB3d6xkXR24Kpwr7Th8pkcACcCE8Gd",
  "key33": "3J9rGXrECS5hwG5a54EkS2ViC4ncFmXpYwe952cqnpNw1VmEfqBKn6Nk65TMZvE2xyu129eQPDzVLDedaPLQV5Vm",
  "key34": "4XydZ8WcdKkvfWWbc2RD3bg6WF1qrwHWCzctM1vgtEtJV98oov2m98xqp349nCoSCW4G3K4BfgbYczfSVTXhLeau",
  "key35": "67FdzYVcwkQN5tuJChbD8YfHv8mHhwSDb57vFp5HZywFgo1XuWSDGes5keuPo9X988eHNaeBdp4XhYKiZa6TmCpq",
  "key36": "PMbYwcYzCwCgFYFdohjFpgWmGh1t81W5ySMpxEZX7WQb1abS1h6KNrBhz5jn2zZkp2Sh8JqSL1g2htZYyRmna3Q",
  "key37": "4kQXrmZit3DHScrjKbFADqkApTYBjdzy4hdQu6CtwyCSbRYfscVrx5PgD2FWbnkmoujD2A2m4qhMS3vMupVz7U9m",
  "key38": "3hTJkLkvQgCxFwESPrG9CJRcfv4NyD5vgTvEwTzHpLSraordi5TLf1bbcMq2THUDbf57JzTHVE9KyLbdUmgucYKf",
  "key39": "u3oALX4oDqmQKWcBcUxsAnALMPuMxLHFFoVLGj4wX3RXMt1pLwkNMudjS2rRGxhhVv5Xjej73RkismeT2pkLbLK"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
