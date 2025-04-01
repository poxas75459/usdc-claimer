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
    "5wGXbXDjfvtunTH4yAXtM31ppJeqLidT9cAUcM63eeoEF8m7ePVCcdREaeTUbfFmUb41ZscpnewHVfxXgjh5EREv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDrzSTEg5tHi2W3kQ3VX3sHvi2RqBVkizJyD8euTtpQhTxQiBnQ7HhGtCnSmdHavNNqX6C931JkEHYT1abPi7YX",
  "key1": "4jhcQTRv7V5ohjg6CmiYCuJb2NFkxJQc3kFzh1oQ8qWRtEPFeRp2EjG3RydfybbvpVenLjZW3RcRQxi4z5rRvXjZ",
  "key2": "4DfrQ3Hq2TVhyMF972UUG515yNLVt69fGTZumx3um2XX9hUuZ1XzcJiypaGtUH7wkjMQCncswBjaSAwmKT7m6QAh",
  "key3": "3d5f7Hf2LDVqbkpcQiL5hD1xRJTMDLiWCL8bL95Uc6EoKpaRt1qE58NhEdYoAVe5McNmTFPv6bSGzCBqQkmxyho5",
  "key4": "2iKFn5douY4FbfvUCS3Tsni4B699tTMevdkTzvHR5zyYY96zoxuNGdYRiG6c6H4kfCqCFZ32iKjMBTgaAb2RyfCL",
  "key5": "4FDZUFWqxQ4cg9NZbDWWguDUt4qeH76Liv3TtFvN8CCk7M6PPPx9GE4VGnLK3yQ3PJsgXxq88fxqbnbQCjitvdGk",
  "key6": "5NwGaeW7yuCviRnTv28EYBeUKsYY9WxPdp1rLkiwVZZCRYDgcMSsGGB4LxorCxLAhQ3Woz6U2T7LF929HvDBGYbN",
  "key7": "3VNZ1UbijFxMW4CpuFKiKc6GRdPFcfxNk9wdXTTgNF2HLevt3V5RYFN7CfRYWfhf9FJ1tYnatc2e1RfgxAap6Ykf",
  "key8": "4LnQiKTG2g1FTWr5JniTMrXrgd7XyFsFtN5FdKTWxSxF6zw2cz1Yf3eTHTLJS1MSUzz7PHZq9PHLxQCMiAUxffHE",
  "key9": "5NNagh8XjPM3AsJtS65K1Ui6nCyAAJxZur4tpqHtzATh54gqrT97az9G2a2GAA5Cx5bXbuFtKbAhMBjK6JT4aKKU",
  "key10": "2nh7DJejZafVH4Vfw4yjwQa1vmX7C1Jzi33MknMQvXMPvMSE7EiVoAyf3mT6zdi1bjxPcipjWiVNv3bJziYVxb9L",
  "key11": "4MrMbqCMokn8qEeYtg3x8dFNW3id2bRr8ucXAec4RanoWTiRTcQ31KaxKrSuG8yw66w8xbRtCUA3ayp1J6YBAHuN",
  "key12": "5PK6f1UndQYp5zXohgDnFZgLiqSbhMpSGHMzTML4LiAehJkS9BHVnprXdRAAvyGoLqrhHGFt6xFE8exXLXUJtWR2",
  "key13": "4YbkdgX9BEv49nCTrEyj8HyUyiEyFdUojZFto9C5CdVR5ybXCQVph2ZHmJonagwa4W1qDPAJCsZWSr95rnxkBzeQ",
  "key14": "2hDqsswcp8h4K7QaggxntpGwCdi958t2iTL5wrJqdmEvDwFUzCY2YpNn8j6hFddkkazSogr496Jrg1GsR9j6UhcS",
  "key15": "3tRsRvyYPszdw4SueSgJB3tqeVvmin87jP1rCUQCW8n3hPBHLyFKVJnacz8kKGggxw1noThkMD6A6KmYiSBZC8r2",
  "key16": "2gwknd1p9VdG7viNWr1MQdUpKpFGoFbLj9ZZn1bdNiM37iQgSHAkQP5bJRnxZY2qvcMpUa495AHb4MGgWj3326zf",
  "key17": "4zVjhCQtq42qtSe8jydnAis64aBZWL5ckU1mL7Qu3UdM1D3GRZtLWXLzB6JJbeZchMHaezwiXhVLjG85q2JcGvud",
  "key18": "294hBe1FDEVQM6QKx1YBbz531iag4BzZPQEF3BUbRb5Mgy85JhVwXKdUH2PJAVocYFDZfE2sVYuWrU43cvBfqMDs",
  "key19": "4u4DBujEF967LTzA2cGZeLau11ShAqX8Q8zK97N3f9QKdZ9E3a4FBogA52swLHhJGEr1D7kyv7gf6EhLBSGCxoDk",
  "key20": "3LUctESqV72hxVPcVZU1bU3BqhxfTnDnwEuTUjXLLXHmxxEJnNsbgyw59jkKoFgP3HgkdSjZV5SFBZWZuL8cuZY",
  "key21": "qKdMAa843CBmuDJtNaxYYWZRRSWJEeqyQbxdxWPuEYay2LdRfaax7K5bU4wAyMFMjc8ifxrTKt7EMSTzDURGgEF",
  "key22": "3XnwAQrBfPMVZsgyo6L6qxxVVmzamRpXnAtkWaMCWtU6pwSa9djWriwmuMZ7JRT43Ti4kU9bSW8wa52ntgJaZu2v",
  "key23": "4NE2tEWbm3Q43oGfKiTZ4qtVhedx5bx2HXYUiCKvZX9QHByNpSJBoa2ERLdfxXjFQ6MMnf76V9feLpsDh4t5Pp1B",
  "key24": "RMi81Hi5D1UJnMUwWHyBXGvkEocR4FocsHBty1SPVw84VDGEtDAsEwzZipa5T4bXGR56k16N2f21ijLvNdo1YHV",
  "key25": "4QCr5DnvtJAovjJoNoV7utVsYSwex9gTWuSVdmEnLdYyZCEe7EHZphBXj4nAKHNbsx5KS5VkcoWctjacijZp4C1e",
  "key26": "3GG4B6zYnSs9E7AKPtbbY2R1ijnDmFrxs3Ry9qVtPsMJfnUz8k5Fb6TLjP4TQmqHF1WrKMo66CXBaGcM6pLkgFqR",
  "key27": "5w4dF9rgoPvNm2si9meJwBWReiaazKEgp9cfRSyR3BSBZ14BYnQHVhYm47CMqzBqgD8E4AJMYKVgMSg9xjF4cM5Q",
  "key28": "xskdVDfiLT52E8yfhxoS8ucraT4a5bs6n1bpQuNYXJ47eqpVADYtGeVEkW4Af2c5J1yiehaneUAqHQGyZ3vLg2Z",
  "key29": "4TeQqm8feN61BYAr5z1KWbMHPEk3bThVs4ppVZYmUrAsQxGCKwxZjeoqKcUzWSEwsdzPUqQfUsxYVx7B7VWB1YTs",
  "key30": "62FUGpEg2TDXyAh9PZskyzD3jNifUN8YoJE7fHWtXznb5GBNHq9FDmTn6UQQ8PEHkkRJqzvBQaH31XTRDxYqqro1",
  "key31": "3evfgVpJGwa7mHh8cbUb2FiqP36de1dDmvPgoiPqrkWngeX6BYZkrP27XVZUdf4j2KCtYKajhgmBos9gbKGYLkD6",
  "key32": "iVkaHj8KuFvpCbnBgp7UVKb8GqCgixG52ztvqSTjsAD7WvGjDha4ER3vUrwfK1H2nGeKcRgRXTMBucDSQHQMoUE",
  "key33": "5mQVhC1n2jmnzwy4eJNHjYRxdiESwYjMnquLB4EKR72S4oVBemPH82HFEyKQPjcynj7ayNxjeek9Z4AuPHRU83sR",
  "key34": "2Pxm86GyigZ3GcmCJvTURsjrmYezqySphtaPzGSHQDpxE22w58g8TbYLDm4xW43FFvHE271pWQUEBixkkfBDNQPT",
  "key35": "2MQqv8tZB1Zkwt4zFfWvtvQB68KaavsWjLmYFQJiNitWcdXxsuHbPyg2WKFYv4qkA87QnRPggaBeVJZPcFAAZaRz",
  "key36": "2bTrhPH4DdLM1G62YhTrHR8BVaQ7mtDTsdSiZ1EUHy61kxcJ3nb3ekpNx6dGMmgDWAbXTSUMobuNqvm97L4BoQS9"
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
