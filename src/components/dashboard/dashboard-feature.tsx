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
    "5LncLksLVtUwrfDwSAQ1Yhg4xrrR88Tko7Kb9vmpfXBDqAiqbJCR1MkJRVvjvKXdFo2h929VLbR9qmyhVkWrcdmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNmnXaaeGndMLFbcnr9j4gdxE41bAz2NqBZLdDwsiCgvhUi2cbhjwSGWKWdpjmu6PxfEecBhiGM7qKGU1tdckyu",
  "key1": "2Yq1q14M17wvcuBBEHVJ7S4bzeMc73fu6fdD2UiqdR4U5PUhrvAubtbzZzHAuvtrUcrupuKJo1Rk5vTZNAK5Txqq",
  "key2": "3HbaUhHAmK1DySzyBNpCHCDjGJAzYxerjtHDMg7iLXasFathn5dFmEz6qsUNKGcnu42hnA75yGYMdMW6wYXJ8LCw",
  "key3": "2JYnm4HbNEj5MXV53JhAr5poEPysAEuHys9CK5hNnwpVauyUqD3oLjbYL1QnY4pVg3taRAwzMf3nb5VJn7mTaQSo",
  "key4": "3Y6Nfbi37RUKkcPmJeW4U96gyqER7NkYW6KUHxVo82L5hy5SXe44d9XJusvLryaoxRMer5MBU3yy6qRjiTdnpmUw",
  "key5": "3a68WkBgqWeDq5absMkjNu6zKvoY75dcmmXW7APYttdFxHYuavdtUJ5nCnqsh6bfukZdAVxSEm3jk8aA7T38oS44",
  "key6": "3mDuGszHWWBi4YVFNHwEdWzGJUtXzNYuWpbcLvgTmjMqqdoD8ADaHcR9YCRjxbU8NGGssayaYvvqvTCXLTqSGC87",
  "key7": "2TenBGF2brWjkELh428vNxofXm1hgJCTcUaSvKGfQ713xiruDPYqEnPhxug2oaFk75fWaqv8Dbm4kCx7B3bJpp9V",
  "key8": "uAx92zZCnZWerqVw2NyoeVDzfBHTV8koP6osVYtiU2Ss7JBkH82k2D2w3s3ywnUKY6U7ZLdQGmEe8tZH7wUHYgp",
  "key9": "3x7rd4zNmBnaQBuDqU1V4qQWspU3WEhsNqcUXyrxK1psRzxYQ8BpHYgBtWfVyBq5gfLaWCJpMiMLNdaNe4PZVuSw",
  "key10": "3X63BsAZT4uNvTVLYaZKW2AMLD6fApVdBXqBvKXkmd4Qr9yqekK1ZrBxAD1QdUA4X74zWaddAWGrrstU8d7Z4fKb",
  "key11": "4d7qrVk1uBne4huMpi9d1NP7Yb9fP7ZRgdu6LX84Koc2xTvDm4G2QpDCPybsG4LKUjxEv9suUQs1Gj1BR6LRch2H",
  "key12": "5wDdpWRdbpnvyCzN4x7ndFhYbFwiE35eLkJRNYCkEDxTC5uqXdd89ZrBYyDBYpbm2txjkXBUQfoiVM5D5eX6sax6",
  "key13": "35axdJHXAvDWefLT4g7vX95xdZi1edofmXgB6MjmmHuVisXvmbsFVppkUjGf3U3SUHSCoV2oV3pGky55k9oZUeRm",
  "key14": "faezdhrYUjNsuwjy2UE6Nd8CMZ4QjQPxmnRdmkxzvKuXK5YPkLgKSVeAQCQr3uZFAU9vpbZjBZMG5KsMvDmWAZY",
  "key15": "4qGhhfxSXDQEB3pbJhvCJx9vu7dCjE9fzVNTpooYaPqNWcV2ooQUQT2VK48gaWq5msBvymBH3ENnv9SDveqJ1fEm",
  "key16": "xFQAwAAozySPPXtNKBvaSiuq9UdhaWHi7XiDDMbCU2E3sKys5SMZZxVVUwDryektK3cX7AD3D5JeV4Ezx7dJFJx",
  "key17": "VSjP4gymxSxkAm6f7qv8EiDMGF5vsU3K3ZsDhCEQoiTs6MmPhsu2UGxrQwTZiwr5CXmit6gvE8LjhmkQ7bSRhNV",
  "key18": "2B3SUTRL6QDixEJFyA9Ge7rJn2cxwALC9NCDuCQSWK57akBgsms4hvsLLYUKPrgTyMP4RuZVKZcPdq9DQbEt7rK8",
  "key19": "5kRoSjXLL8KcAnRcH7QHRJ3ThPxzx7Z7Dv4ZnLJJ3TxNedrwFJdoDKYAXR9koP9T37duWqqxoCJy4Thfa89b7UT5",
  "key20": "5qv8GT2HE28fnrPWQxp6BvoHnnrMdEt2uhhxFAtijCBe5f47XGmgQP1btQAwPeKr1dKEXmzR7xYQ825NVhn5RAxZ",
  "key21": "fUfz1rywGheR761QkHaWKoMv4gwZ7zCYJVnBFfbjMwF49bvib3Db7FjpDE7bkhP17jsrXJpEBhDuVW7joERt7zr",
  "key22": "FwB7gigdRsDbuRY2E6D6wvCDWFSZuR8Q43y6p1fXpNJ1iFE8ywV3VHazkMAC18AuoENtDYTEUmpRdqJWZM3htgK",
  "key23": "2oYmhZrsx3T4F3xgCvWK5zFPzjifYir3wgVqhYdccbSEgggjFhs7ur9hYkyYeuwMZvWJjoDwCcxH77RiWXLUtMNX",
  "key24": "29d4Q1gmAyo7UZf2paXsjdmMCaYPFVBADs7Ry73h7BWqCcTMy8AzLatkh12tUasmKKqA6ikRCXiGUhzYuGiCyfay",
  "key25": "5nuc7LdFho29nd9rnAKwGmwrdZcUEjorKNqPThfj8NyZHb1qTRsnyPCBwSgQq4FkVpqopx3cDoicaQcfGVwEGwB1",
  "key26": "5wvTg6VfSMWaEMhZiG15J2zhGztm9dpazzbFQKvhEjALCijy5oZyrkNkvuP4DJpNFFyhwjuJ7zLdi5VJ5XBZfX2y",
  "key27": "1rQypc2wgSZ2WxeR6YLDvHXb7bBkVeNUUscx1VfTi4s1p9AyXMnDvg1PMyWrAiwSod6uknFp6Vb7stV4d1cEUjU",
  "key28": "3LRLVaT7AAyS8D7QeRzYg165NMbDZcNvfL7zPjime1uQxvZVB3ydgGDpYENXCQGkV7DBaLGPtLStfp6YE5dbrJQy",
  "key29": "3hY9i88o7zyKyXrsjKaaHrquiCpsXoFh4d58yVfb2F7Fr4MKeDRC75PjexEPhKyMrGMRCnqoYYyWFmysKyQ7YG9c",
  "key30": "58farbKooNcwuLhFX2RM9HVMGkFezEUbnfyMfzVGGKRehgYqP71Bykmu7ZScnWm3uS6dqzccKDtupihrMwMeRNiL",
  "key31": "3TnKckLeoLnSUXbZDqjnFEBV3bUiWH6zvBBcMQj7FsRQB4pNxUgPGsWMRMN77W5xzXUyoTCSKUPHTgXM9Ck2R6NN",
  "key32": "3NVi9etvywGPmHo4icUtUrysEdhioPEMUD27tt6nJzHQztpbzerhSpbevJZEzmCuFhM5zt3VdV76gUMsYGFBNn4M",
  "key33": "ERFdGRnvHFfkDJXE8JdVutPW3qVfs3QHKTnGzEg5Ggzqe89dTkXo1PSjSQqaS55EBesjjJJzNZbcJjjhLStJagR",
  "key34": "4Vi9vCGy21JmhS4UyPMHXesaSmekoL3zzGs9egtSdDXWLFKeiHiVRoaURBoPuGzd2dd7kbQhRUJh9cKRyaD8tU52",
  "key35": "3U5v2MkrYC77iVaJPEvLkR7FsAfEK1g4VbJd5MZe3QbwcVsudzhzYX5LUd5MeeeRAZZZGfVYQgz21UP7JxQWq4Jh",
  "key36": "a9B87GD1VB1pSvjqDpoKM42CqrGY7QmFPczydDAQq2wZjGswVQYcZu1Uyi4WavHQmDHcZqf1h9F2f3D1aL5T5Fu",
  "key37": "5ZUgEf2U6dECNQwo6yyMTwrhGRzjAWred1gtonhsuoHEBE2M1kgrYYAUz98J1FQhNCcF3s5iY21ssPu5Lp1j8EKw",
  "key38": "5dnvFK71Ge1Wt1pUHUmjzoXPS48jCXqGptnkUZ6Up7xJ96yFweHsmaqnfNBo2ykwdEwV1vbaNgdpvXVmf7B4UYEM",
  "key39": "4oMuKyEZQ5WC2ra5M71MVpGUUd7o6PDZ68vGvC3UbG57fTAfbuQCuc2otWSueW7sYRFqEgfSvbxpxEerCtH3ogvR",
  "key40": "3iXC1R7E37YushPker8b4bJ5owm2atpjMf65K3fg57geNQqrPSdoizevCv9Hk7asJps1Mw1zPWRWd3SBFFpNdUnJ",
  "key41": "3a3JZZJb1bmnwrduiPB2b8mkDNQnwRxsW7mFn5jabmLd7aYbCuqkQBX8d2LytQQAtTfH99kmpdoQi8higmtRjCDw",
  "key42": "4o9K6Y1cr6sGRgWiVbRxBP8aykGCHPnQ5MakWfhsu7PZ8EXsZMbr2nqCrjckHdA4dmRKRogKA8bkujPMhH3v7wBG",
  "key43": "4nuoGoC6FDuq5Z8shJyJyGTuvvTV5rQbK39pkEH3qzEuwLnmCuZNHbWdznFmM7o2EXpRNt8JgvinjepceKdPuo2C",
  "key44": "4Gb2Totf3GH3ovUdbix7wCD7Bho69cttUxnpfh2ppJZ4iiF25QmW29hxSUTLDJQPjuzGK6x2YXyMp3pU1GmxHdZ4",
  "key45": "3zbSWVVTKfGpZNEoySj6BhwgoDniNXGB2VJSj1XBdDPqHWGp4GqAETkeUHgmyhqU83FDQj47AXXRviKbJaMQBW27",
  "key46": "25wFsUGQszuzBZ4c5SYjgK3Y59KXDyK12ZwV12E4WoebAbqpC1Z7kxBc76vB8J4PqJkAj6i6j3aiRzzN3tnPhDXh"
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
