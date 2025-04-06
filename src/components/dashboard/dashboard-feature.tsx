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
    "3KWWRUha7PDFSpurA6cbjbG9Bj4tFNmPcYVF1EKRq9di2AJ5QvWLzZSY47MZEvtkcwzzQMuoBzvfVfmq4RThZj6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGtaRAtZWzw9cPAHUEn8nSRB9iHj9vSLV5sAoFtxEiAAGx1FsfGTBQ1kjjirWxYistfjbut4Xhf8qXN5BvoRTpN",
  "key1": "t3YfLRQpRNtv8WX1wDCrJzkCGApFCGdBKwzKLATEM4FVLC91bXpq3C8Z4CtJJJNvh9HL64uFJx7iXAZh9zv1xML",
  "key2": "5cU8xr6PnfJDWsDrc38CQkXRH1ybLLidzLx4DaMm6SwjUPVFfybjRSjGZ4mYZR6L7srvTU2CoeZucyayLbBRcUke",
  "key3": "5rxrtTQGF1kZfPk6UnqaDWsxVRnnPc5yMLnPVB9aCwWjpSgdTfCBrTfnzaffKTZxHh2e4QZK5AS9b7JA8YuWW6AB",
  "key4": "gHnZyBVSoy4k9JGgYFWup5NhoTHz8B4CQDdZjf8fHEscQV4Qpm9dDZy4DTxqFWkAeUbJ7h4bzUB1m9i1y97yA7k",
  "key5": "XXjc3o4RpSKmaJgkCrFDhXnM5ifr21hcEWzLKhRpgWMZLSz4eghZJdiZTjV2CxF3DjdzgkyaEMQ7ZJVE1aVUsm2",
  "key6": "5T9cpSu9bPKA2xpZnU774rNhjqqMC2yvQJwoTVC6J8fCWg4Xp7h5GEXJ6JPAgFXSQazArFX1Y444EUu2fsiQRDfp",
  "key7": "4qfnJn3TSupV1uigBoYbLfejzQkw9sMsiTgrFMSiNGN8QDeYji8R9xjv5JXvmemQoUDdYCYEFV1zeyHMLrst768r",
  "key8": "56J1KmmkqvX832Z77GUmJbofkaHRZEu95kmo6bCGMmsLZhaobdyfx2TKXLY4RT1GChaMeF2YvwzkidFwV8UmDafm",
  "key9": "29shQhFgsWp1DcGNWWJu9MEVkCJbum1JuJFeiXkB8XuBxKa8prV7Zthda3kguPzDvs8z3WQeiMJ6M9rJqUzVXWnv",
  "key10": "33z3uVf2XDUJZqpv8J3sDppSuYm4zUtmKKdbCPyvxdW5dkaC5SyXeHmQxEXaZJT6oExfi741xWJSjJxDSDDqWc8N",
  "key11": "2oBZJ1NBsKrWa7UVfFwc87kL3JqKrtdwyAVKkPZny7tRdPhAHqxJxvnMvtYCSaR9XQqrEANiZkt44Sjy6LB2q4Km",
  "key12": "36fn7VjhFEhcXtSR94gfh8gszY2jQmG9WT6PWR9TbgZABYma3TNS4gHCVNHkjSoApicww8WJ2daJ9iQTsY1g1GPh",
  "key13": "57UbJjRKqSTaNCGP2M7KbVLPAW4vwnkVb44BgdG4JHSN7m6Syov1b6th1aktMLZSNexAoxiwmg8exGUAbLHwEVNF",
  "key14": "4ZumMKDKs9ysRDfpPW9jSkPunmjQAose5Q42iMihsJfNE5XHBYmba95iaHpQqyqSMrqhxjHv7VohTBpLnXVKSHsu",
  "key15": "385RNLcgJJYQA1PTqUunSG6r78bzfuEmczugexp9mKWfmcjK1qovr9M4zeDCY368wUS8Vb6Qi7T9wkzSjGgJrag3",
  "key16": "2as5mwv2ZuYruVPqCFtjvAeh8RcmNWS7YwHZDvVJqbbPz2cjJ3Vja3nzmSmGopzARQph3QxSxcMtiFPhQi7cpKoR",
  "key17": "oEZgrJLC8kWGSKCQM1C6Yewkc6BNiohLHUZ9R35AHzHdSXWZtcqT8L9Ak3RktDZR22oS9b9dyRQjsKekFH5fPQA",
  "key18": "2eKGhvQdJtFwxNZt4S3kGCrnpfZkqj1MKp573KitohsouuKEZiL15FMBMx5q8VVB4g2S9CJHsm1c1gSYRFFNhWdn",
  "key19": "JW13DgmtaDfuwoRgVvDmKiQuwgeAx8f758RY4piuaL3Yr71kZGV21Ey3GzTN5bWpRWrQ2RuRNpHAe3cvwSww2UB",
  "key20": "2vuTeavwhRCh3HxwnzEhPc5zDH3SB6wCKmQNzvQ4LoiMAJ3NTFPkjJijEJKnn8tW1D1qLLbviJrynNapEAFWDeB",
  "key21": "3WAEyJUXh3vGyN1zVjxNuM4NWWcnqA5YNBiDyQ9xrd6aUBKtED88BJ6CeFQrdxcuigH2e8AjbT5EqxLkLWW9XPTS",
  "key22": "61ffagfVpLf3FLQH8nDwcEJmRbQvh7nksVJHJTpPe6x3X2UJmyFKzMBgpHuCd4naJCa8CzmBHubRRSjcWBJDVTi",
  "key23": "4ZoP1SBNzn6bRCTS4DpM9naHApdMUZiLKpbRFCYUDXBpPsQjuCsSecdQQXH3dLdzj785i23esp9hTjtxhYoGgmWF",
  "key24": "3Hiq3V87nSGscoKg8nr82DPG567xWMEJn3rKPu3NaxjdWgrGE3Nnc1mPrtFC9u67wSgBsju3QUzVbJhuAeS3SpBZ",
  "key25": "4HABuVQvnnpB5YziFbksU7mQbVgvptbCF4A5dP9VKFHP57N1QAL4z5u7yG7bHBikUULERpRNSCN93LKB6QgDZy79",
  "key26": "5jYeBDfGVFZpv9FFyNRMC5KwtNP3Xft2pLjh5tt3HKtVyJHaUvu41wVaiYDAP8vbNxu3mjgpgoeFNhmzwJoYnMoD",
  "key27": "2Fh76WyuFeuwXphPyLaWeGgxrjCu2zHwUzdApk5GfN3esQW26J8wPFguFLtN5yCdzRmWo7yexNhFZK7GrqbuTwdk",
  "key28": "4QLQPLcmNCukAJ9ujs4EVjay7koMegy8s4CdjYu599Vnf5dapGSnfTjVTrC1vpvkVeD7p6udQZ3FLNaZzi4fgp4U",
  "key29": "24BUShvGYQSMC7W6LrQB47uKrUo32Hn9d6WroibHFS5XU9KiUqEqVNxvEmbbNzNFsoNAXe5Wfwi6ZDrYgziddwb1",
  "key30": "kYkmtJLqY7GE7eweFAuypiHzEhKfbRSs7GTbxcVtH7oeCe6q6LR5zTndzJJReFYX1XkbtM46VbzdDfWkL6QpQDw",
  "key31": "4ivds4FCLFnqymrguSRJ8P88uNjKK5Hayjesn5wU8yy1B8otqU7a1C2Kyb7fXhBxddy88ki7Nm6j8rfBDuzdVBq2",
  "key32": "4XoSGwH5e1eyLMhtFFcez8QkxfYpUKKksnDZvQ4oWpfy2ZQeJTSmtznLiLiZLEox6oRm9P5g5ZF2YrxyfCppkiwF",
  "key33": "2QHDwmnzBf18m8zQwzs2ymN5oayzYWtpKiv5a6Qiiz3pqTaEgLf63nLUdyyswJRv14wmMZHmGCNnCkoFDTtVYwxd",
  "key34": "5CkWpSY67suKGENh7ikLtzCQfvu8C74kA9efRfwWR7XrBg4mn6CpXDkg6WZinUBBF8YMy6ShCbYGbeXWcw9NYDw2",
  "key35": "3T2kKBvHMgnuMYZ3QP8N54ujgRL26pMbEQngv3pxhu27wnmYptxnhSQ7bXgmdqB46KufqCy5BBFDPg9GgEp8nHC7",
  "key36": "25XjW6gHCiVq18Um7WSGijPUXG7VtBg9DSQ288YKyH6zUrvj6wSR1UwfQ4EAwWHKRF1YXmeCNJWTCKYs9zxNfJ2x",
  "key37": "3McsKK9WTNrnn1sbBqFYRRb2oD61MLznAQNJhDJGW7WAywFCmf9rgWnY7mM1ApsNsBg1icCKAbyBAcvnua6v5LHU",
  "key38": "4UXjoopGZQzAMm4WBKjUbJBYbgJEnDjApQDxqfAvNcsRy2h9rNRgQyzwGjpxZhsYpjCWPxbi3XcfkNpFkeSa13Hf",
  "key39": "65hM2bnKfBXhA58FcDxH4KaZRxgkuHrCXjtJawP54eY5pC95FdtXkreqrF7zyLUdpBgRtghT1JXbkhFPPD5b2ZMF",
  "key40": "3StBFLezZUsu99TCEpVnKjc796sVnMcD2pXXJdXNpsHZVbKS5x2qzx3TbaVy5xbkegffTmezWpW8A27kLLGnE9dR",
  "key41": "5zHm7CcTQgRBVf2EEJEazpZKSUoxtRztw8pNXJgAXQiCL5DgWS4akRG2grENbv9UFca9ShEEv59yk3g48mE6F2eW",
  "key42": "5jUTxn6tcszfAw6XH8WNyUa4cKSqSnzTYBznVAe8xenqiLGXanKZ2q32AkFBijbz94LnUPjZvKNwhERhDJuvn6Gp",
  "key43": "4UZonf4AxnD5efNDxKBMEqExTvZhNw9ESZwijUCgwFU2VMidoBHozDYGmWiSXTGuddTqkq3MtYyC9uRwBYLvLB3S"
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
