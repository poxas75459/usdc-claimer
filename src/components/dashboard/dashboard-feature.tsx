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
    "fGcaNiRqC4xoiZy5J8o2XCzvm2EW3fb8Zf8wsTchZtMSiqVPi2LcFo1x4Rb94rBSWf3xoi1D9DdTbtqKCAwGbZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddiDuDm4xt9esXscZEHW2PGzsV6npU4LDR16tpkSF34bpLuaELmr75VNeAigzh4PQwkr3GZhbiRksbVwkZMUjbV",
  "key1": "5XiCNUynJgg3Vnt5J1WsFNm8PJVJiRMhfmzJtKFNxdRJzaVW4bX2Cmw1TEycGr1EB65auW1R39NXb9SWpHFyUNXG",
  "key2": "48tN5dWBZVA14oR8hspfp6tEB3hHaoD1zfCDJQXTkx4xBYGu2G3rzNi4BogpnjKbKvS8cgDg5vYjqo9ANFyaiDPY",
  "key3": "5a5L2qm92Q2PvEU5cyPDThgsz2AeeygonegrtiTnLQavxDZSsGVfg9ffqUFbAPJD2a1pGJgQTBnURnUHgUWVp34V",
  "key4": "pgpCSiDZMtKyKCovBBcq9fQJTGPySmT1LdWUUknctupGANzqe55NniZzr6pJzbDmVCQi3iDU9JBsmKqRGsNEF3X",
  "key5": "2jazsB2v4teCxsspQDdP3xFzGGwySctYETJDemVsLjX9ST83nLYCHaBZweRyhDf1fWHiAsGLhFqXuPbMDeyKrrAC",
  "key6": "3DV1kvgG6zyr7RfCag427SP6PceEqTVUn1FhRNQnxq3ot2daCm2hruxj6bsDdAr7hEpwnC8QapyG7zGXfJeuwQaD",
  "key7": "2KHD3EWeyAVMFwpdNLMCKACe2w8tcmiiis5ZaKLa4E96vT9ip5MZ8dvCKduFkXKuvc6Gpc7mVUkDVBu7KNzECV9U",
  "key8": "4bV6h3LNjbLhUTQGL3thvb3tdxfqZv1SPb9AzbWtTqif44WMVD6JphX1VkxRHWgahrYWDTNAaZkk989GwmuYHcSo",
  "key9": "5FTdjcobyyhwCeU9Pm9d2f8uVgGkHJJFXNz4h6JyWB4jxAaVkeuHy7DHWJSoK2GyPtUGy68msCEF6cKNLJvWob1H",
  "key10": "2iTjydErgeGPNqwMTcUAPbZgsxAgHBdGXMU7Aoq5VmQfg5f2MgSBQ7RqJYuAuuryMoKpKJPMkXK9V1DX5wkR5iAi",
  "key11": "2oNVTDeob9enR7bbaJsuJpAtmLbYD79JungFfRjV7EhiirtzaM8cJBXojTxV2pAyh5LwvueZcjiW1d7LM7pnFDu8",
  "key12": "2eS2AoQn3PjRyHKCW4NeanomKVWLWJWQD7TVEBe1GPiuLz9nxevvAouxRKr2xY7CcixaspatZMy5Uj3pHADzTjhW",
  "key13": "2Tqm3XorzjPj6kbjmR7C3c3epWGYvrWWexeZyrfxxzJkTEdD1RDFhqFpABqkUE46A9j2Ur86i1efzttFRQLHe8Vg",
  "key14": "2kjKL4JMEvY6cgZCLqt8QXv3Z5vSqpfovgu2LYe7Mxb7TkSAiAxE7XkRb68iHTDS6Q2U1yzCv68c1Akh2jNYhMaK",
  "key15": "3CV5UstUzG5zirEQmkwTcsa1HGWHr7HTENKTSzr5F6HJ5ALfYbbavwDp9GN97u8jDvustyDHJiH8NYKRYER5vd4v",
  "key16": "3iaJtYbQUCFvccBB2duwEVQru3rccgPMkTYXju2scBDbm1YBogGA3jUHidwRrtTmwst8wM442TcwB6zW1GbBQr6d",
  "key17": "5YYopm2pDXjvsTTtdeCMiywfhLRYUSQtj8Ks6PEyymegAn48g9qroYWnwrtci5iNVgnu2yZGjaWi628dS3TacKvK",
  "key18": "p9wL4t2f9PNNGa3Pr4iTB3rNxP51oDxeNCi4h65zDVqi6R3cNA4Yodz3MtzsyYukADnBpcfmpHzbhfVqnC9JdWS",
  "key19": "3UmFfyXb9FNH3sfeVe4q3LoxtFN8PrrFzFk68xxUF3oo48XF9fFkryuZQ8prr4dBppk3ZYwxULFLw4ycXDUuBeKc",
  "key20": "4BMBmPoe1cvHrsZQCfsS2zpGirNAHihh8F713ZxfadfPX5QciD4SAWXwxWjRPykyE4qHC9cn5weX3oNsQxs1qqGs",
  "key21": "3veiuRE6SEX8VNQbwjKkmXaqDG8rwLBL5J4Poo3H9vwjKvUPrzRLgeepu4Rzwou6LmWxCNhzJB42mF1SSz2cPrSk",
  "key22": "21kwwG9smtz1m5mjeZTfjqQRaJynWqpAn1ccbbcwVAg8CjaL7WuKWCoce11WTRx8ejcHKCPBKw7P2HTdvStxrGzC",
  "key23": "4ZDHPi2zDcmvaa6sW3n8GTVQBvkpGZidiryH5rwmVhxgdKkHjJXArcC52PSokYtA9Q1bojQBPnAqW5BZXnGPgfsa",
  "key24": "4QVZg7WThb6ii72gDB1tkmX8VHeevGyA5Vg3nh41cAaH7da6vGByVrw3wiKubK6FC7u5Y17GpQz4Ajd7KJHNuf6J",
  "key25": "2n11NUQDz86863dJevDNNrHkEGj5HLaCxnUN6yPzReHByp6iTTnyb9yZ1CfBmYvgzdxMDCNeXzbmViiUeDPrwKZV",
  "key26": "2zBkZERoryesCCsb2p4LPNRGjjXqNgD5dNh57wfDL8nBZShtpKbmYgAsEScL8dsGSrwdzLQqb7RV2MU9MXccQzRw",
  "key27": "52GWh9onEeCB3iGR5mVTGGT8czZZDsQrZen4n6sFLyheBz5MpBwiggMDzjwJK7ZPMaTRH2XRZcyEepKTow6vZint",
  "key28": "47p2vfT6raFaWBhDCQEKEitav58Vwwn4aQwx8U1CTCGrMhoH8AmsesSubrPaj6TnLC5hyVqhnARU8xV7AFh4LJ21",
  "key29": "3LMrQsxYJJNS8LujuGNfpMNDu1TFm3jGdfVGeftFpBitayQQK2MeoxbBsm61cfZPoMrV6ACMcBrNK3SBzUtm1EXt",
  "key30": "3qEVd9MU2cgDCeV46q4wKMhTVPbKNQGHnFjp43MyfucHEpjQTZc7eqNFxBAsD4cfqYx5vzSkpVnpYfqgTkfFuzVh",
  "key31": "4mGGot4HbPnTWQX44mw9jsL4ejZuuDpsMYLbcy32VGthBoCMkMiv24XQoeeYigC4ZvAqbcrXT6A6qaC3Fgw4Kpyx",
  "key32": "2xyrMGqp9Ca4UcuHXC1hXuQVFntSb8vWxz3XVRSBGXiVC95WQf1sbUNE8Nvo5G8sfvW7UYgnF8zyZKwvksVDsrKq",
  "key33": "5L6X5EbhMd8HjGSsnUWuopUPSBDhnvcwY5jfxyqz2RgU1Apis5pcd8Mdv4EKyJGKjtTaE67BiVdHYhFMXkkLvnUR",
  "key34": "5zBYB1jsgx4D2YFM4nbYefu1oyS2DSH4nLVYMRT9mcRbKiPVDnAHD5x98DE6pKLbJVjUTjhB4s2hsqEyKPUtvLBB",
  "key35": "3FJNvk2XPwnSvmPkv38yx3xnNanG1h2knYo7R3Ri9Hp9funqkVzfu3yPh86h5SmuMeuEi86dFoFY5YKK9Hb8czPQ",
  "key36": "q78yKhNsMNEes5qoMLbx6RRyNESbFbcHNRf5tKHkiomoc1ckyev6CQhohCYMwtGFdsMz3hgwg9cpgc7oPoEKrbq",
  "key37": "yAHhqjHfJLd7ZN9oTFQohmQMzArdpar1HPSY5yEMaaqYMCn2bft33hWFA1nfJvB3AhjSdrjo5M4CtL1JBL4bW5a",
  "key38": "5ium8dx6Z79g5JU6RLMqpR6LRqx5mE2EEQRpjeNuSxJDvsY6EQVPUkpoDkPqraQHE33e2V2z5TUKNEeW2m3ox5N3",
  "key39": "8sWbhqH2N6r4hJEVeEpRTTiV8PGfUv7HiWSRNjtY39AsJTtwcTFLbQHws8d1q5kBr98aEQc53m8EeqsAYFEtZzT",
  "key40": "3yZih9fU1AQC9nR44djTWFmq1WfifKsFhEfH5oDzpEjHFiUDjrSvpfw9UpRWzFKEwmVGt13esobaLHNfW28RjXLW",
  "key41": "4JdAZjmZoqSFXDCNYRK7Mf2WFAsT8P7gUou79CXdJCsMmYMPG552Ldw1W5U7hruRQ9gmBg1T7nFKn4B9jkKzVnib",
  "key42": "2zvnyKwJ2UwmTgXWiEDsfhpnmc4hJumXQozFV3BJRmwnTAr5qVphAUX3UhY1sXobBQZPGwnvmGnbff5s6hFaBpFj",
  "key43": "52ZC3NT6gZqQkzT3zoEWTZG3kKzd7N3GB5HPViZRJGrtYTAvNSmEirHKLPsPLKNBvaAQH7DXq7uCQqVbYzukwekr"
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
