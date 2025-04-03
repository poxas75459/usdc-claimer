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
    "3jKJ7EH7nPiD71BM7qcHPmWgKSb3YfANgswKx9jAjHLDwe3dMip5D3SYYPi4coH8KiMDD3vEmpSG9WZZfSX9eK7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62cdZ727CfjbpMiZzzmQD9eFt4jsgXpKMdzKMqo1FxJ4SD1RFcn2XpEyC9iURX5hjLE8FjLEPgcx88PP6hCReHEG",
  "key1": "5Jrg1bdhxoJQHeQSm6QegVn42yEW67ynZLaDPZu1wiVdv9vyNAUMatfViMhWL1kg6DPgpuq8Pp7RNTGrnc6nLc8W",
  "key2": "23XHhexdGXpdvc8UtBQyj8g2meFFzbsjDhQAynQ2AcgUJpNavPsBRsHZRcnMBALmT9KYj3RZALXxobcfNYbM83WC",
  "key3": "5V87DCTqh5o1kMPqLCPQVWppiofeyn9CmVAJuSACJUYnkMbMVUa5u4JJBgr78dLZoXwnTxBSC4taDR6iAJLXegxe",
  "key4": "2da7sUaWoFgiw4bDTXXoaHAEs47csGSv5AWMLFCv8MZ6a7VdyM5s9otMsv5vT4ifq8KVQbGYkEM3MyuBxy4UgBxW",
  "key5": "21XiZQZE6fyHMvboDcg8Hj9ns9yBVie5Gk9hEaME7uwTQHtHs3UZEUe5L1PttX6iE6Mc2jtAbddebg3zrSPfzPpq",
  "key6": "fL3pqpuMbzNbJumRTPw1F9XzG4Jq1pYxNigKcrSnwGXDniLkYp786Ap9mxcVfyMHVPqLr55TUpvA4zRYyfdaYRR",
  "key7": "3Qa7NYQvNVD8DYFze9kD8qmtNmYWDHSGYKvPYyN51BGVicYAVcGpYApDvayZtr4J1Jyx6sca4PbXzD5LXkKZSVUV",
  "key8": "3QwkLBTF1yXBqtVPuJQuTYXMySLzMxLjB4ejqt81jCZx1icQQoE5RgkWEjQ36aXEUbNaMHYWnPvkMupR3sbEPPxG",
  "key9": "5nbqXdifCLeqEBuhc65jc8SW81PnrHQhjKBArgkMmRoKox5cT5ou6BLhWttAmujdVjeY2pqWPe36vL9AQA2Mm1D6",
  "key10": "2j9Jwef7CuMsLxuRC7mfSWi8VWQb2yJGWZJJejpeiSDMC9S7gZgfRWVpFS5Hahw3Zb39jV9Vb9tPDxHRKqHExkyr",
  "key11": "4LqzXLAhqHdD8ek13VbJU7FzocZf6dTk5TAivZZLXrufmHpqLyvB35dp4pxxVps1bQyn5RiGpKZmQzoUUo9XmuBG",
  "key12": "2s5NyL5qbRUMZ4RFzmFWXAVzEzTkqadsvc7NVgcXsaQYSSHmcUAgftCz2wxvrwa7WrjT4raSWsMXsDWdb7ku6Sn",
  "key13": "3ccZ8RHszo4xBtFfA9RxZwoBRVxdZB4KTBBenaFWuvPm4DxsgdMKkY177Am4W7HDCHtBuh3uxMim4Y2aKQd4vTkt",
  "key14": "43W2d878ohsNdH4b6T2DtoD6LAkT8opCWVKBYat6Ud4kDdEQfvHjTDp2MEgEaGnMVVCoMeLMvrLoZ9KDTUU34YpF",
  "key15": "3vjrcvV1Z9m8BjtaBZePB4tmhZXcHiTgU8MAuuj119hQjuyTaeXHP51WD7L51tBXcvSVbm3nJ88Jh7QzAkcbNBKb",
  "key16": "uwLbiDYeAAyAXooJTzVM22vx83GZ6iiB2ZNe28g2ouhF966GkoGa45N2PKx34hTCv94oKonHg7MmXHsmgUrg1EM",
  "key17": "2Ciwd6pAuMkJ3a3VAeThoQw54wra4EFkTvhme7p1ZmNQWSBHLdc14RbpAtSFcSKK3oa6dsZa3PwSaP92GEAAXHLq",
  "key18": "5yBpve5ZhJf2LdygPCpV5YZF1P2MaqHMD3dsgvNT5BR5osYGDjrSg3pG1HqymYRYgnErmcHtDS9YVXAtkfkuuCBe",
  "key19": "3khAy2U8stRr8vAqELGtUVJ6E9h2VobX3nwjPorABTdL7od3sA2pFKk8XksNdiwp7f9r6b1o9eMQ81gMAJXYhbV6",
  "key20": "5AEET4UwPyFi2k5He4Dg2fboGoVqM92nwM83WG7ojNVtGjdzKroc1iNnCiPuHqcqGBTuSWbUT9T3WL8sqeFR3DtW",
  "key21": "4AFXJaWe5NnUfN8RcyXAQUadwpto1Hi7AaeTM2gZoKhcTV7gZq5w4aH8icDowYebB1yvvTCdQQr3cUspUmRdrMBm",
  "key22": "ELsMSuY4UgonKLxqaShYxNJGcCth8SCDdyjnrjNqzAM6BjfEFL3UxVCmQfxdEYWBP3ypMUkH78fyE8RKLXzQrDH",
  "key23": "JBwBj9jTYHnPp42S7RRBNoNZ9ipWd85FeKJphpSEkkK4CLYrXCzu7cSUTa3TcAaE41M4D7PHpDUd6RP3vRmHPzn",
  "key24": "31LKrGUpd2ozJhgf9qePx7MSeaTs9NmZA2VYRc3qgq2CUQ9bajWfL9xHzWLUDYcLXyYLXKW4tVWF8JztCBGWisRr",
  "key25": "3GBxtDwbTEBuNmL2u2hhGGGkWJtvndU4aFJPP8WamhfJzZuGyPjaAAC43hYBbW72STRvKGhrgqWtVbp81odog3tW",
  "key26": "UYhWhF1Nf1QEoyq5UuYSjYz1SEmVN3BiTtDYCM21t3RNqtCWGitZwtPDZomxBrfBDuGmkbHoKe3vZFWTneD9qwv",
  "key27": "2m7FBeBopwGNJ3FGW1oh4c8SXTjuBbav6YJgLDCVM6uKjA7cz7kPwxUJTttU5LxMRB9w9i1XN1TkQhsNCwyGXDE8",
  "key28": "38amKSvMEtrBGNEhDUw27MmQvnhPJpqcmBcgtsqK6hdLWfZFwbEtAJ4o4JzUcRi6Twk7RjFJjt9EaanQdtBKzwzt",
  "key29": "3NeaK7oFZRUUQzGqfs2FbnPoefA9LVdcBnBLxeBWSgV7RHkQ1NPBnbnffZn5731iQiKcCnt9gZRUztVbmWZDUqPg",
  "key30": "37tTdnNyXBGEaNsgyPdT2JQAe7rqmrwihGUxXQEDaLEhTt836Jhgz7nigs5vLC1Vsuwx8QyUReFjqXat1bkeDV6n",
  "key31": "5dvjR4mB2Zn3pNp7YFPXWGEMUrU1EaFdr6ynxYU6CmKEseHLL98argVaPyTKtxKoWQmHybnXVGMYAhRabrnwR4vb",
  "key32": "5gyGhQkbaRjJf2AnNSd5PK34EBJYrWB12c1cNkDHDRiKKh68T12FsSftrnUoBqacER9BbE9VNKLBXey8YYJrsXnn",
  "key33": "3hJQsQwcyYDahci8iuLPRNxyC1qaVSozeMqFELHLs4moTMEjdCBGMfRLC5nB3FaLhWAruWpwLeFSHGyG4J96J1xp",
  "key34": "5Q1rtkLRYN649Diz6JVX9c6tcRn2mQktNDToTo9b2WUMP9jtxbpz6VEfLQqfBWu1z7FD3u63AD4hNdpzF3e7GPK5",
  "key35": "4YqmT6UGPHPxLZtR2dX49K2g6srQn6yE5oujh3ZZrg4AmStjz93u6camgfN9ysV8h5G6gbzYhBxS3YtByRhaKxkP",
  "key36": "2CBAYM7fHTdaGFaKV1vkW4htSMN6UHW43WzFXirzmfcmHF2BxJY57sVkbnKj4as5CKvxybPG1SReuTP5gK5XJ5pR",
  "key37": "2W3HrAkoSEpFWBVyVHKuwDjttqQvJRbjs8uHgzxPqBJ5cuAFXys8r6P5vEwcGcJr5o6xs7rLJKtmyGpc3qHP4CG9"
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
