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
    "4eKqXNCFccMVEb6oQ5br8duwLc45jDP14KMrKHgVWPvsDgTPM1knqTRD4816HQf4EeNFuvr6jCwkWF5JrZRGuhAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wdZwG81BgLMpu3w4Q5ctXLjr3qfK5y7D7XJT9EhZz5ENPXZCfXXoRXmunm4N21KSAvufvgXcxAqRJFqtb3x5wjR",
  "key1": "3pLFe4bKoT6eeK5L8AnBK31LzB6doDxNDeWsf44WiSsrk4PBgEu9xfUh4MPn9wHF3CefnR52zYcgtHw6yn5jxc79",
  "key2": "NsPv2WEwYznbYiETz2TZuQGbCesg1MavtT8pNnLvqM4iyRMbvtwFN6nhzjxScRsHLqZGTwQJBuwuEe33eJmcavP",
  "key3": "5zouXHGm1g7xRDHgisNFU7qJspCprhNKyY24Se8B6GRyaNzvX55XyCQu8PXwJMVAJFvqfcVn23Da4a7dv68tmXQa",
  "key4": "2DNru9fKSC3iduvnVtt6rXGku5tTTQkqPXnfXZ8jiUADCYc24sEKKoRippReuri2W5dSsgMfk7XLZNigRXJbiDu2",
  "key5": "4Koag9qEw69xMTBQCnvLcsMMkya7Gt6FSQtWNZuwLTA4sdEc9tAohK7nBgYGnk6LswgwVDkk2CC9ho3WhCLta8qk",
  "key6": "2VZDERQ1bUXcFLidG5sWpE8AkGaQBneq9ZwBUgbQYK3Do4Ht463iQkX6dcdRNAGTdUVVwhkyqTkG6JwpzQBLC1C6",
  "key7": "4GvvdQ6fpxBSL8mCxg48vs2tHS9jEfEQRZsdFuZSiJtguHEbEpvK71iwdHvtti6TXYBBmrRWpgcm5ua7e1tGM2wa",
  "key8": "32Gn1BJe9FGoo9KfbPsdekQ762bUDadP52vh8Ly9MzBAmv2G8dHfBp7CYqHLCFeTKCNVraUkhDib7uKzXFAKpJe8",
  "key9": "3JYV5zKpKUmACHid1x5YoP1Mht9gYhVq4k3Lz3fTz3FqqFWprBjGorkrhjfdj2bgjCJVKS16i53En6WPjr2P4ZCc",
  "key10": "2LGdMDANTFAWb2uJGDHCVYVEfz1tFmQ1g1F8zHhFsdKnpJ258BbFCVaDQebhAdKaQ6VDGxU2SkwNsUAV86rSzWsf",
  "key11": "4d6YNVPQWmmMvpeVLuXWhJpfFAxCJUPTekmJ3Sn9JHZFK9eS6H4yeMm4Mz1Ro5MEfx6AssRzZVno3qSxeqEyJDNL",
  "key12": "2ho7x8iHLqGQQeJvAVh4fWk73a2kmsWFFDuBzTvoJ7bNMuXCPQVvMWdB2tjT1SneoXzKp97fApGVNPEBxv3H7XXJ",
  "key13": "r19iFzpt6prFGgNGX148KiXFq8eFffh4PyVPMgmAWBPTPpFBgHCKwBH4AXV9YZ6hWGAcunz6cJmQp2dhHdyNZ7p",
  "key14": "2yKSGJPKrjEG98bGQEDhHmL471mkjFfXHXzrYxwdPURisnPKNhmYQ8aDZWVVkSpGNYvrfYhvqGTugdavv8uV9ZLT",
  "key15": "5c7krBqAUyBD4pzGCUavKQKXLG3RgG6LkEC3RRfWWSEAMQdzuQ1MbuApwzCveuhZukvXWRdcMu8QTqCCgbaSy4Hv",
  "key16": "2aZfGnFbW7F5YhrgPhhSdaMrN3NHnZkqMcaZdCndBw5MvUqM9ek1AUUmuNjnTQJsPwE8nHux2m7rqrF7s13paw8N",
  "key17": "3qWYqUrdjXycGRG9EX8tiCvqskhYuperd7r841kuENtCbnF6AKFF1BBDTFywqvqHEgHgLMmSZ6AMF4WByv3huJST",
  "key18": "f2FtXXV5hJ5exsZF9SGR4xZ68HPiVwtNBaz4VtDdeLLrcE5zNW4m8mL1kwywfrWqs6LDr5cQibnkyN3qhJjVzAD",
  "key19": "2eFH34G2uH9Wn2MvY5bMXnkq3VfweJXDuoaZMC2qEGKdRrEctf1dJpecWsUpA6yXGwgs6f2e7bG2LqAiUdCoaiZW",
  "key20": "52nnJmhZGBfh58FwaQ1KBuskfdPZaz5AFmMNBumT198rXxRnZCGxAsC7ZdvRdTB9DuGi6NNKrDZCKW1dxAFa39ip",
  "key21": "436CRsQUF2PaaAbwyi67vRFS8Af9mKzVQehDoBFp5rrG5htX4rcSwz7wzpU2wnpHdFCwYXNgxPbkQ8Ahxzfbc8eQ",
  "key22": "64kdNauVvU5CqMs7mTLmCio9LmMvfLBtbN5hEzwJ8XdfXp8m1k6vaXh3hKepvXf6wB98iWTngyS9T6LXvNVK18Ub",
  "key23": "3aGpdrypFJ8vHjt1mtrEGf4P6Nf2r2imdcT9j9s8snK9Y46CTLj6PQWqo3fSEhG7d6aaVKG6Q8v1Nyf2bxR1n4qf",
  "key24": "4UewtKaDFEQSJJ8prjC9JhxR8Px56swtJi6HMjZHu22b5xTA3rZQ82hQPPcjNoRc72Q1WhCddVgk4PNXPU63iVmE",
  "key25": "Mz5hYFpJJAsZvzJa1nrbex1EfsbGMJifhoYgakqkDNcYYRnwcWwAdiFY3HegCy96A9J3Z5cF6BTw98dW7XGao2P",
  "key26": "2hiw8i7chXMkGrJ7pmt3B9wRvqpxuwoj6Fdgr6H64qrAm31GGzXMSjVY1oj9b42JRXkyKtFF7wkmhwQNS6Ravxvy",
  "key27": "3QZbxC8u1NEWHkbarV53MPmq3A6NJdUF92x35vLgacPPEzMUfdajoxsqjeC7hqgunDmUy1xGNyReKgHYdsqzbcQp",
  "key28": "2Q5VUVjJV3cpFfoaSwYmSJQXog8BFJwxhDC2HcZxmigQFsCtWTguAo4bqnJzCFcR1bwU8JNu2eiwWR94CZitT9bR",
  "key29": "3PXRxNaSykqa6uTmHHvQWFqdKsfEQx36he6CDUDLjKbdSjNHKDPJHKQXZABW5nhJFi4JwDurFJNq9Wxhzft1S1Vj",
  "key30": "48YEN9H4oe8K9cSbsMT6VLx3GbBnKBz7KnKeqPuWeArX1zCKB9oEMjQsGXfCFreZ9efMHQBxG3rxvvRkSfjPsKwP",
  "key31": "5atXkiyxj3yDWz2jZfC7865ysVoK5ugZXizCvA7gPDPMmgFxeEexbWmS8uE6DxjaXdR4msYCRWNXZako8jz3XAGK",
  "key32": "oWtvfL1DbV9K822wonEoYaQPGFGouCg42pWXcCpAiNrG7MSX4CbHycsAvUjSVrhFEF6XbifLKAthWTdBLT7Uu5Z",
  "key33": "4zbxNbLRzSn7oTEUnKuPyrs5SrQQyhDw9fA85AJ5ZACwnCiC3Rq76TDSMGUMPHY7rwrT692YSkLdDQfvxZSPUZdR",
  "key34": "3wBHs8mxpxUEwwJA81UkydSTj3y9RFFrUFY7sqjAqKzP6jgNTgvCrB62Dts98i4mLPfndRsEGtt3jbuKRiu58Kf5",
  "key35": "4xJEJTPVB5aP96xTaYvhAMsr5YkuP7wC2xz65Gfy6aemAdHzoWz1VDmREPqfLZEkuS3b1WYCEj7aVPLbFexoQ38i",
  "key36": "4F6BfQPRpMinBacsRHFi2CxXnmufwaa1sCKy7gBWMCicj5FyGtHkHnwDxGPvVK1SLUS4MZVs7vxQMccaErRhzqd4",
  "key37": "22nJwiovVwxkLz2gDeB3qHGQLDFwm4c7homPXeJbrPeto7gFSP4oPrJ9czUmqHjwWQsUuY8eLku3mNSbSrhqFtAb",
  "key38": "45No5MNN7HaooKVKJ4j2JzFy52rArWfyL5KiwMU3WpbCu1WtCwxaDWmRnVDDuYyzvKYJzkEAQAkibsCLw6v5KYN2",
  "key39": "3EK5CUdeBdt3CHRELQNcotjtx2FVnnGKsG7zbJFj3VS2dESyKfwEoXGvNfSLqnJVemQhzx1RivvMb72RpUTToNBz",
  "key40": "37cAmgrdjsXFrEDyagwVDHQcpg5B9b9wvbS4hCvuiHXnng9XoZPcuCW6pm2TqS4J8prXoaMz5ZY5KNuPUsnaWrft"
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
