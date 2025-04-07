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
    "2NiN8W6wir7S5an4tHEkvr6dWKSrx9ZWDP8cwU31rxrXCNFBratGRdJH1zRXS9UwCN66h6484XQmQcZY2bwy2b3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8UGGeb8qLN4MmXoNC9W4EdrnsjRHSmdmYmMiq8oTi2rgDS59DwAjbshVrMYrNXQHR9ynQNyPUMA178J5aykzFV",
  "key1": "29BYJvg3JjckHecJvSwBgwwMT8vEudy3Eu9a19ZKENo9KAFXyXJ24p2qwNnmYC5Nktbtq1SJiXsSEx8E3e8Tvka1",
  "key2": "2C1TESE6nZPqtR2sNZx4e1mPEH9RRMnTp2fRRskRXwTow7kdoeBZsjfb2fcGrxpQmDuuF3dcn2NCsbvjrcPHFANT",
  "key3": "2ReTKa7fU9L9z2kb4eDwSKs2H56btmFU3j4fF58ELZWV1sDECW9hFEvqmmRBvE8sKSZLMXbHDUtqudeFxzeMGg43",
  "key4": "42bfDU7NyeedbHMV6x3Z9Q4jUmwCByqU9BayKwsZQULfL6TwrKoNJFSwJBGVkStaPj5AAxH1umDDu9S3sNp9MMyo",
  "key5": "33tR6qpbKasjDnJFAMvJGS6MrjMEJSmFNAPGcqp3t1wzYED21tsJHyfCPvqdAhE2rKbB7brmW6YPy5FpCU8KFCdn",
  "key6": "26uqzFmwv8M9BiZqfry5Sx1hjBoCDNZ7ab1LTHP5Gk1Ai1ZeQnSeSo562MSSWK9XuWhJPg9D2yBMxzuvbcXVZURN",
  "key7": "4x5V7enYRAU8iAkDbGvpPkmPsRJXYUyq4dvRBKpZq8pENzQUasEQKbpLHpFPvLHEupS5Uem8phhCMyUbJ7ZkDqSm",
  "key8": "4bgrTahZJu4batYXSb7pbwoPFHKxSndbyHGkEYqsAsMwk1mv8aM32X17YH1HsEUR57fxc7inZS3zmjCmAsR6ULie",
  "key9": "3ioczQ2zKsJpvHN7fvpZvZgjuWpQihCjEPFewQjFeUEfyz2qJKj9icL5SkHHifkyJij41g8iYF5iem4FpAonEB7p",
  "key10": "3ewhMCMxy9SEiJ6jkgZMBK5BFufEFd6pMh4UTZJ9tNVSG7D7ksDVMEL9GLTmoupUqqPGxoW9xURBmdmzzSuocJZh",
  "key11": "KvU3ybfQJZao125YoVX3L2WXzTrWHfUP4Ud2ug8U3CvcSJycsJF9b6pJsZTjdcdLnXBYpAZR9YA6MquHQpomcQd",
  "key12": "36DTQiG6wxwDCDyeQH3gx8MBFnWdYpM1swDS1VxW96Zjf3zk6a7ZLJEDJUrqzbQADcy5hKxyfdgqMwsmDf4WXuuC",
  "key13": "2mkmmVeobxiCQDUybqo3rQqw4i6BQC8Rpf7pfL5VGzMiG19Razu2Ni4YZcLoNHmvy4YE9DS1rJPV77xrZjuB7a4B",
  "key14": "4L8hpDhzDycPfYrHW79AFkabhAbtZFrNq5BXqokkbo9PDKAvRUN7fitPWLCEiKLq6Fy9eo6R8iaj9w93X1sJXUEu",
  "key15": "3tN2pcBzGuubjasPPzPTUoZcWLMrSHA4DVtzXUqJi6bEM9Stm9Jy9X55yfaQ2Pf8HpyK5D4EMvndRAoLsxuVERHY",
  "key16": "3badzs51Wab8zmoUrEEnyiYveSchR1hzCUEPHWj6HTUSLDmjmxbf6ZUZdpspf6yA8yEE7yaSrXewsrEsS1yUbUs9",
  "key17": "2QQ8p8M8EX1PVDqSJbZqd2GnBc1k3s4BdZstGQaGDqJm8GqQcmiwDHXPzpxfq9rooD2y8VaL1VtiHvoNq4EHn8Nj",
  "key18": "5jpVxRfu3BQ1VCiLumynyiQXMAbb98zZitUBD2zJocyvxmHRwzmx8t4CSoyBWWcSP4PVfb53TejoEZ9XFoxFekLV",
  "key19": "5hejAdKCxa4yfmjre3DkMkwSB1QcSus3DGJtEb6ypwd35ms39mzEd9uj8fPZ8VuY16EXikxmXgkBGY188y7wGevo",
  "key20": "3aEnkXPHoTgzQW52Yrw5RGZvaqGPn7QKwj7kHHgPkS7TN7ZVH2NpScSaexrh2T9dFQmxnLXr5gNmG7we9GDgXfsU",
  "key21": "28kbN8NBHRwSJVnGgTcYgx1tDoNLhTc3jpieJWeRxoH2Q1pGFG8ZP5ZPEQ2X8egxWULfa94z7ZfsGuyUkWMvDHn6",
  "key22": "2GaFmGwV1aFLZ1qKE9ZMrK9zZZhihsKbYPkbzLa6UXvpvo9oS1zGKkTf9wGoiVRTk6CvNULkguBoLpbZ3F5tx2Jb",
  "key23": "c7XzP6fzQ1pP3Ji9azrkZgH3pwv5rbeG9GwSdYddAwmMWgLQkAT48X4RakfN8HffJpsYJEdJP9RdZAQuKvR81fe",
  "key24": "2kr6RvUMNtrAAYAWWFZMr7mpTsmLRUCwp3SmAe1y9awgaCWDsfDGSA5PF5DjkHVDzwLkr1xUdHCctvGBiJncSqnC",
  "key25": "3UFymM7eP2hJj3yN1MfrEuYKZfePcWog6zCz7uW6ZxZvQKPbDXdXtirVpDUdFkpexnjLAQGZ7BSzt9je7pLkKB2Y",
  "key26": "3XTQkgjjD5D6FUoWdevUnBiVAgrbb7Arh9KTvqLvD3v7WpTVdGtsKmViymmy3RQoUVFCaLiniVCKvg7fZWL5j42L",
  "key27": "7V1dv7i9R9EiTUyTsWBdg8if3PKsfc8uMySfRTvPibjympVZcRyFs2T5Ei6gMjPoFEfs1VzWzYknMkQNeLtycNG",
  "key28": "2jqopBwR89F9R2uZRbJLqsG628FYhiaEQ3Tnw21F2Joovk3hLfPepdNZy1d25DXVrTWQaWT2sSrdSWFMSE9hW1Qc",
  "key29": "36Bzums1o9Jhnd1HZGXAEcorhW8fBhwUjLvZcmcpnqvJV4H8S4uw2NdHachghCcY7unN3v9hnMG5rbHFUhhXC5Ki",
  "key30": "2tcDfQ4NxdrkASJvNpxuip52xYXET8yLf9DFXh1cckmyAgUZmXvPwM7hKCwCfBShB8vFcLyXDME4g7WBnnjcmJwC",
  "key31": "32ZEDejeM7pxGagBLt5Dx4AozYErkZJCqeQ7VRRq53qDBLV7ZQxRqzTPDjrfmnSXyfaxia1bY4BD1Us6uC3f7wSE",
  "key32": "7kqfcwTimksa5a3rM3rRWGvTmNMyv5SwScFzL4af6wECQEugA8Y6A4LzwxcF31D8JvCuTWgrCeeCTatcteNPRas",
  "key33": "5bJure7Tzjk7xwQYcmJm3JfF2n2t64EyhXWCFPcphiZDcU5MwFvsmK4Pn6dKvVL6uN37rs9Jj1V3dp2AL7KJbCRg",
  "key34": "DwLPXyVvTpBRD58j6LuLA1UBHgMJAnuL7iocw3ckAFxvNATT9K7v4bjPA3aj1n8vKz1koCWHtP3f9iWThW9Uph8",
  "key35": "4JpjuS3SSR1HtwMyn5pNaoSubmjbbvvw1rBz9i6YbVpsURzvfbtN3LU9y7zM4KzNL7KK1yGcdbu9vJxz8VGr5mzX",
  "key36": "4Ab7Ma3fdUAAKA7gqLgzfB4BYBBSNgcBcrVgiq7Tw5MVbzwEs3KS5ttLLxQa1TCGCEiXcNSBDo31Mf6StZ2T8oek",
  "key37": "NHJPYLRYnjpRCCdUHvWmkNjkdBfNTT96XnM7efEUxVa2LD7V6C9Nr9dBqWTnjjSdUh4sZnDWWtUpoeGrgz3H5U4",
  "key38": "4TTYXWuE294x5QavxXA3Qnf5TdHXT7qi2k4QvnVm3rCeLLFsB6xav3vovng2xMRhPEEw9SzDC6P1t699k84DAsEc",
  "key39": "PzrqKHXXkF8CdtFrRh3YLCUCs4MhovfsGUDAjfY5LU8TnBFPGw9LCuFydr2TUWSBWFwt8U1VZoTfhUMtLVH3MuH",
  "key40": "3bpDM4JT3AYCznAUccDH2i2JFdRm4qwk1HGcXmyrdarHgNeYJR44oTRabkoPCWW1DWYZ523u5VCHuLX7XUgF1edP",
  "key41": "5bwDHN6GbErSicb6AZfxcJrbhwg3ZbB1vJBmMuzLcTebdyw84kuQdA5b2Ey7hoGmmdtAVGXzwSDwnVBik6Z11yPs",
  "key42": "21nUAbyRGnJVHDhJHULuyjR8C6J15cixWjNzGdTGqvYAuDZogkWquWZFRxT5KS47VTRqgoRKmYHGEcaXKeXaiDJj",
  "key43": "3XEPXPjnSjc1aExF67AwSRykkep7Vc4vkHJCKiYmnTNHdFwaxssReDrQqymU6DMjKLGW5TBRm13CCjjtRKUW1dZy"
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
