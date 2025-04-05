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
    "5EHTCK7yUZn8PFoc35cXUnL9AsHkAHg9LvYojy93pdyNxkq5KHevLUX51BnfQQXZHhqkZCJzzwPQsFzkec8tBTYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4en6hXx5KBs7FkupL2ySt7gHMjsL8UWZfKSeHc5MTLj2jhcHwg1zbZQxiwJrjoTQFnwHALhtRiiLYuwNfBTwURnL",
  "key1": "4w74ChNp5Td6inNbLqVxiYSmCpDExHG3zgFpeEgr9roFgRCSG4p5PMKhszakyF8L3ZgwdkspMQA22ucutKWYNF5G",
  "key2": "4ipbeERMuUcAUTCpAsuMKJ93ZF8Te8HjaAt7AJEia2qw3b45UxNdKc6by7uWHKvsRoeQFiUo1eUTgdde85TyNpJy",
  "key3": "4xwZFt7QTrYvss1y2ka1eH2iMSMYathRtUEXfedDinBVKojgLmkf9Cx8wFRtAuvuYjz8672B1hBpt6pozrS9zifJ",
  "key4": "242aoEKffY98tzy5xUadLuYL56HW2oPYzpDMJBonVWuuZfYvfx67nbMv6dBw6gXFDDEWEtVqKYHMEKTuMqmsa5Je",
  "key5": "2kvYBcGkndgAkDQpZ635Ebjao8WimTBQTtgGxHaAwagJEtR2BzCj8jCFdWnoNtkHSgbHunYTyKUvJLTZsioEguQB",
  "key6": "63ePjWWD2qUW5DuR7Enx89EWmjBxnhkxLuSXyaww7d9mK7GU8FtwGxe6vo7agZHsjjPQb72in2phqeShAuPaEgoa",
  "key7": "2NdeaMiReCmTBzLpzxZWvNxAnqdftsaJdt1hydvyHo8FzdXqHfw3tRBUwRbh635WBBX4hzEBgHkAaHpDxeZx5E1k",
  "key8": "2r4YAgUThYavv5oVhvKVaM8yk3CDCmwQ98GA7yht98e1Em6CMtqVbGvJHp2wJYeE9ia5fZ7CH5t4UVbSeuxKQZYE",
  "key9": "2K88LvH56UGS8LD9GYSFmiSFDN6pDzhcQkxdQkNR1DW9keQgtHHjQiTAQAn1MPKDnkUWMaBLurC1XBnbyDw2znjk",
  "key10": "4k5go4yVpmwPErapEF44YXuAu94MU8mtpnYQiLxiUDnjFCpXgQRgspYQVTkyYv2row3bFERXTp9vuGSwPbq19Bzp",
  "key11": "2VwLjNEVVExsWVnmD71V6rpHTWKRfsDjNUpMZP822M7vKC1djuaFqN4sW5z9PPwMVaiRf9kJpdo7D5e4vP4PakUe",
  "key12": "4PwAwdXEywUrxbg9E8EpouAwfcCXRLsT9xoB394JVp1U41Dbvv4vyrtmDBFqVvp9SznQj7N9sKLf4SvyXmQot9XD",
  "key13": "57yi6H1t3WG1j9Q759HG5GPfvj1hdMt4s6LhnJLRB1ufLdtshcUCns6z5rfbH7YiJb8MohmHEUvJLFjz7xdfiUtK",
  "key14": "4f91y5vtm9cXKBYZYwonruP7aPNwThZXihJaPwdTLGRQ7knZXTFYjaG2c8HQrYFSxjUPFVMrmbUr1a6QcNjxGsjy",
  "key15": "jieWTQ7zKrkMat1oRCfxzEeA4oUjubuidmzbat2fipcowoCgdPSU8XLAjXVkzpKtjUuxCKb86WgBF668iAXAhpp",
  "key16": "5Dwo3ALDavVeJjspA2k4tivQAbwrFfiS2smDTfeEpcKcpwDL2SB7R3pbsnxHLTCwgNTDoguFfaajLuitHBUoGsCb",
  "key17": "4WPc895aNPPF8JLobeRkHfSUUcsKf4DWKifGfQ64bsMyoLf6j4dQe78KBk7azMMoA8oe26X2nxB38wpMw6C7guAc",
  "key18": "5LmKR4GZ2EzGU21eFzh17Z8s2abcjb1NuRs13i7MMi4jb96D7iCBDd86vr4p5pxXNMxpVsXcs1Sh3G1kSPjg1ACG",
  "key19": "5hKjrB5QuGXnW4Ui4fC4jV98bRp3E9b8ohD8HLwr6pzraNBTU9amoabRDqyjwa7HWUXXe7X1XQuSLVKYmAy4NbrK",
  "key20": "5uK7kE1unkFbaiW3nh4gYtbkpRzq4b2zGbgzV6ze7zNBKZ6R6FH6KUSMNpaoHu48iY6zmFRQgRTCkNr1oBqoXBbx",
  "key21": "34km61cKUuC9RLjFRTjTLy78E53pv5kbfuxsBg2nhEfiUDrbaptG858FWrpzJPJweuEaPzJP8wQZLv2kRa4YCokK",
  "key22": "5ZpsLMd3srRVV9bcm8aMLR6LUeMAy7rziEf3itm12nrzHnmyACNsLkrokupriS4SaoN8fsXUJk57hpVutMvZHLTa",
  "key23": "5kroLRNwMgHBwAYkqeQ5pRTyte7xBKFHyp17Js64UMwrppSBypAoZ8L3P7Q5VCB8g8f4wMBcnhGamKSGugiuCLKa",
  "key24": "2QZff2ezuMAd5aW78USmmacWPFZioZ12NZhpCGj9dBWMoFFApgtUdGrfehvF5PqD8J8dLC8xuK6beXGmkAcrvaju",
  "key25": "5R3P5m17TDiYKSYSvdxi9Ywk3kDrx6xW8q8pwWAYZ4p7MneqCGbebSgRsdrj9stM5JNdfbzz4dazAnviMYP4NLa7",
  "key26": "4KsQQGQRkMeT8v1HZAGqhoR4puChxb1mPSm9YHmqdhsGNfNjYSxKPjGF2w2mPeeYRhZUvgBHTVTJdnXAiNBUhk6t",
  "key27": "k9pcSeTMoRb9awbJS9UkubxfJ67Aj6kiCw7sExQqcMF4Drvoyix8sLTuJ62yw8H3Ux4r5pA8KwXBPRxRj49AzQ8",
  "key28": "3WsXsJPCHbDcUq5DK9JMLhU6xAtgEwHhvC2t3KbnueBLkpWiFofh74y93aSJC2N928o6tv5oqj6HJaSgyJkHN5ck",
  "key29": "5tjBNvcoPo9wZcEeRYx9aQvEzrer1EKR2mEEvFPYijsg6ygJ8vSR9K2azP7jyBvFD5m2K2k3dEzYA54euj2QRLg",
  "key30": "5HuBhyT6BqCDbZtKBtYc9xgRmsM4vmrscbbJBkSocVxG11AGB3vQEeHgtxcyCvpjkByaScumU4RZR6oErhzyJMq7",
  "key31": "3JFixe3XeRJBezDA2pMceeMW88Jse3MQQUd7kM66TfNwUpjUvWhMrykRLrXXv3xMod5yEz4d2bFut6S3aaMwuXWh",
  "key32": "2bnAs57ckm3CGEyGRYnZRfsKAXug3x5sF3Yo7NHxs23YsDT4JKcm4em8BNLZSrFpmDwndxAMXffsc7xJ7Fyoqtyn",
  "key33": "4V33bCnRKKCDdjmwQVKoy326GfVNvfEuhiBrHfsRsP2C2SKqNUC7uLYJECqUrGAt8YcvJRZ8mem4L3MAmEb5ZKty",
  "key34": "25CsZn6oNANxwBzvEdu97visA3m1NgioVcwJXWA3HbMHKfeZMtUiZ4NcnVFXJHSMchWz6e7xnGETFSSq9Fh5DeYb",
  "key35": "4v9wU3sW8G76xUcwCg3nxr743gU1gd4qzcTV6UfWG5kHrHZRbuEzVPHRSDcQvsW657YJUpDqU6pBkXtGAGsyRBpC",
  "key36": "2xcLZjGzHDB5yXyjWr5nokF55LDS8L6PH2tJYPT7CDCy2gNtmUZsQCgwzUABJLFvyso4j4VAfDK4N87x2nMxNnu1",
  "key37": "4FZiz6xPJq9rMKzaiCXKyD4kZGUn6ZDJSC4SCkAtxBdWtMReT5SdeKvhKkixeR57rTw9yWv2BT53m1tqxS7s9ZpV",
  "key38": "ibM1MrVi3h98Te14GYcWg5YZ7HVgmDKYj5jjURdo1LoSCRuh53gLJUkfU7TUT3nXv16ThcfCsiFoFrM5kc9PvE8",
  "key39": "R6NDnDr8GwzPj1knP8W2M9HABdwiGBZESDE5SJtS1suwqtjxdZH6KUgDm6oLKSsEyZV3vwhYehh4oYb6ALFe7Pe",
  "key40": "5U5roQeuypNezNaeJn48NcfUAsTVrX9K2onbfJEQXUcuZBVS5FrEaQYZRSu66reuN1kZrXsvF2eRpQiEf7oqjU1r",
  "key41": "5Msp3aaXxhtsGvk61irV7cAzGGxkx4XaezFde8c7ZWehiM16mimfThqDxG6cyiWVLyGhvTBaG64fMUtswgkqZ6UH",
  "key42": "4M3LpkW5WVAnGfVnwcD5CyFbTrDorx8iNyfbcwghVvevudKaePoV2dMo4aX39LcAePAa1dGBxMv4Vb8EWekwtgfP",
  "key43": "tNvLx8fgTd8mxbsD4oomGFdavj7kynZPSMCghwg9PKRDiLBBwXFkoTRQUYU7FjSmqLBPrF8vQZtwwoCp2KBF1nE",
  "key44": "2jbYVtPRXkXuumM3woGYXnwY5FN8d28yVwig7GfUhGk2oVRXktwBtqWphgsU93bjcSZx4Q6cDhnmF5ahKewDgCdf",
  "key45": "5ZiMYBrNiKFd52Hd83vXuwn9ESCCEC35B2nne7C3vducwhyPJSJSb4hmjszWUPy2hTSxkCty4ZHhU9hkSyfNmbEE",
  "key46": "26BX8HxA1NvHjxk2kgBCW1e6y3r9DJ9hUCXyu7FVfyFSpyVSK433uZ6QP64TJZ3YrbwqFFqNBHcngVVZfhRwoYLn",
  "key47": "3pH6stsNud7RSFwgNbKFmFu8MusLxLCTxqGzMPsR3m37Lyvbwze9PtZyFdQBfbTMjRgqLPQUtLXPm7dTokLCcG2p",
  "key48": "5pEaZ6Q8VJVjCYmE1evVqvZfLMWByQZiuz2fW1gfFWENYaibYsqwZye9EwZNkCadsSRWBfBr5DY81PtUFsxxQqrJ"
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
