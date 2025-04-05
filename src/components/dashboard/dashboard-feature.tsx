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
    "UL7ArTFjsc4GZFcRCy9oqp923g4HXm14s5mSCEm8XW8Kk6AunUqZniC2XCrN4pmZH3DXH3LiNY4ZBsSezmL3KBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsSkXkn7GzXyeFnW6w3AVzmNv3CxEhPzcwW1B16jie5wEkRnFGkskdyrBr2vzFLWVjE7o1HPpYLatWoSykZXjLY",
  "key1": "57PYgQBzY1qeAMhUmBKyjmsjS75QPRrn7JgaHtQqqKtagCsgy39XFos1wcwrrYTqHMjFydvqzhB3U81LyVWkFfP1",
  "key2": "5DPbgQ1hcYUTMzH3s8gPwQXYKJqNdEZ35wkguZNmPyF8ouCrGLmDrygnQvEaKnJdQfwHD3KmFLsfjSz8ameP6iR5",
  "key3": "3tUikbFhoNx7kKTjRtKvPjSGnnHYkcxeUpGUvBC8hnDFLnxPVA7NhsFsZeHaSpo4FR7ZMcJWFn7W4WEo2BqipEMu",
  "key4": "3md8zo8NpvLXw6rAPNwrypin3ewySUNaccPCLgHazDzS6dzZsvoSwo2J94Hv3qFfQ8XgcJsSkumkwq8mw2avWMYW",
  "key5": "57iv12dHd9vwdPk3on7WVFDRzeL94V1Dg151NxW9SdPV5XUDJb8y7FKyrQpyNTdgXm3HehCoYs7PTtEyx9ZrPDYt",
  "key6": "3oJwWutRqvj82yEBTRUyDxx9pbYqUsFXW96QCEapDdyR7mVNqMZZWBuKgLGXJ7PHjev3zX8ia6iFDYaJwM26PxpA",
  "key7": "pxZtANC4p6ukc5pNDX971PELS6ECMwqYDsoz4ikj31F6zogcBTuhSCkMiWWy8MWe9N9symy3JLiCpAu1dtHhhjP",
  "key8": "5WPJyN3iSy5AV7EqA2GpUH6SPsiPmbmbsgqJvh15vv6g7uLSX2mk4dQujH12sKk9md3mTr87mGVw9Nzaq4EWavdP",
  "key9": "5WJyr3sfJocLj2NbWJyEuqibQ6Gxhm5r69ARJu9nFSDsECYQVDw1TmJWaBzqdcBF9wJA7tsBuRA27ohjWkKWFX9v",
  "key10": "3qEc68fSDw1o9FduzCUFz3xqWqBPTcyKrhR3cMgMY3iEJRy1YY1xZJyZ8kebgqW2G7eyaDArX6Kz6LnYUGjkMD8B",
  "key11": "FwWyT5WFvJtEXP1tD9rZLkrnJcEhDGTG3zTsjC6tGpBozmNwHnYDcbsu8BjnjWjK9RZjEB1syjhcnL4kQ7Pvq74",
  "key12": "4GTnsLTFsV2spTSGzxTuoYpMzZK5ER9hoFiuptdbLEhTvdV1ShoURi6AFBe9SixviYsXKYNj8CcMnwixbH2VVdwB",
  "key13": "4k6M5EEEbMuVx5pBdFaAoUaPjqPeKxnUM9sGvvh1W5pH1USQPpKzaqjWASYezUggCwoHsYzFRFb8gcfC5FpHPZ6Q",
  "key14": "5XCBeZA9ea3AhF2ua7QCgWDcva16mqhQ7c2ABEDVMWfVv9E8JzqKhW5fnforyFPsLmJ8U82hJh4GxQAwDcHbf8A6",
  "key15": "4ediSNg8cR9tUzKD6cL8nJYdvr86Pg65u3MifEzMX7tK1kLKXMGZ9gdPzknhDnng7wfUyPbrpykzStWvgqmPGTM7",
  "key16": "58XBRBd8ZG8Vu19n54Jv2FGmEu3dvN7RHPRTA3EUgbHfTq263XaoPEsAcD4rTTWEZBBZR7MhhefCU3pV4pYAYQdK",
  "key17": "4Yninq5R8UDMmc5q58rry4uQVDuXTcKuzzGnXwAmyrtB1C4qS4Wmzq7wvdFA7FJk3AnHHxezpGRcJ2ZgBMjhd6UW",
  "key18": "2rz1du2A2VVFM3vFZDnz5UWzHsycuX2bonu61G21ojUmZF2Qp9JpWEa3aqqBAMBnz8eo41bUf4mjGuXimoHBeq7j",
  "key19": "5WmrkoZWscpWEKANt4kXVAFWeNWho6w4ZVCXi4o3QBTAtELUYx3ME2paGMrUru8pPXC4BV3zmuAuQ82jw43aJyvx",
  "key20": "5ki1LMsRFM8refUsyNunZ81LTh6Qb8xKeyAbNK2NKHD9NQ9hX1AZ6tjdkGMXiVy2LoExEwqk1mZ6L2kg5d9MU9Jz",
  "key21": "4DwyGL43JxGtT2g6YvmgGV8exBL4ARZRVsVYeP7r1TgF8CVxobH1GKtXY3PUHiSaqHadq2EnYucjufGMhEkGr23U",
  "key22": "5sc9WxuMuJ1T9FafRXPDr2B44RtmsaMpzcPXF9K8HTZ6T9XGKCmtbziVbmS3vuv3FAPi37MXN5Pu3oM3ZNJYxBp5",
  "key23": "28E8rhZJ1K9kuqNrBHXppqD3jVCcGPQzGRhtQEeJ76nLmkxccsKVBxVMMJ3iqzLNj7YtWGuqAoEQh6RQvAc5r8a7",
  "key24": "5Ymahn7nmBxNq3Gw71G3361DXvMd5Ui9vS3ugiuH9knL3456zNo69rS4B1mirjvVgtmBkt9ZHfDvSBj4CXEb3Mtr",
  "key25": "dBPHJpAFtEWJtMGwaafd2c7XfW7wZW8aGJTeD1aWc4ioNSb2rhws5e6ZW9VicQQscbMUTjT7ECBtnVuwDmNbqVv",
  "key26": "4nw1CfNsqngBZUYYMNbdWQEJDhA8rHBYEZSsVDU6b79yth5qKKbzdGGU6FtRk4HEihQmQGibLidBu1dyt5hkwm9A",
  "key27": "G4SacWvaCkLjqmSo53y68TYtvvDH47U55g5yVAqQRxRctD4QsRQ6X2vH4WfxigjtefKStHoHXoBM6mZMy8dizas",
  "key28": "4BrU2ung5EufXYa32uMZrn9jvbY8cWVqi5jQAm7THUt1BJQQqZmWL8HcWmpduRxm9UBZXymEXMf2XnWgMt7BcBUe",
  "key29": "W6RTaGVKMF2KyAsgszoSv8QGcrhiggJF59rtx2tMC9Bde6XAxGGehfi89ePmyYHSMSFtXHwmiwo9N5neiTcEdWs",
  "key30": "634inr543hVsyW4jkXDe54Pj3KWP3JPP1vMNzzSCTQTMq1rrVrTTUe14HNPnXnDST5nJMZr5aUhVRL8wvPzy7C6E",
  "key31": "ZPkxt9qhVQkVhTH9PKYWoR8KrWqzx262hsHbLyTJtGFVi5SkkuVaPU1fEQVrHUbZ4AZcMvSpKbR2EMGULPFFZ25",
  "key32": "FLka4KeA81JfJ8a6p698pYxRDoEC4H4A1yEgP6kmGjj3xtU3dgQrRHaiDNbagc4DSGtyzvVWvtzmbmXzJhAKEM5",
  "key33": "cZCHpmPyFDqvzKrZKz8pvACALmWKZAYKLz9wQaP7hDDmFtNJzoVtmWsLiqtmEQqcPR2KmhPbcnL6VhaCsqjYezT",
  "key34": "51m7gUXE43tAb1mvSHD4MW7sAhrzsdThtDxRtrefDsCgiQV6xXkwoZGPyg7MK5JMYMgqbrKijEUkh1u4ksdip4yy",
  "key35": "3qU5n8FiDSoRCjywgCyzqELQKr5JXzyiGfQS97jEGxDkwHQxicmBGHdYyNv93216bbksmLHCVM52uW3RfPbNDZJ2",
  "key36": "265snBW7LJhfXhedWZGhPYcKxAQ28hM4sRyvgfm6MTo4pQyr1JfS5bGWzevuMftpwvHEhvb9VPyQ73dbN1Hpid9y",
  "key37": "MN8sRNyF5Tu3J8MxebzRpKTFN87xFtnuTQCJSHkPCdxza41Dr8JiRF9Z8m8CfipnL5HqFTf9GmM2gG7Pgy5X38Y",
  "key38": "4cjqGduk6wV3UNp1xrSDhMMZH6QgRH5u2Zo2X6E5vDPVY7iLP1KbDA6appvXuqRmNDuMc6tvusbNE3xVtUTXgXKc",
  "key39": "27Xz3Ynh93Y6Vma44qEsot91LhkLg7QYjNZBHaK2YJsewBQCsBhm6hrTqPkEi8TE4RmvUmKS78ytHWuhLTEsECXy",
  "key40": "5cbGniWPHVfze7PJTHN148Hur6eqyGMhChxGEEqzTTpfVm3quHEGBpZdJdnWaRjpxehci2GZk8ufR7qxQcghRzqz",
  "key41": "42iiGk8kU53mzBrpwKadHWARF4omduVtoHs7YZuGXXh3zhnTxm1Yeqg4iGi1pAc7vqtxp7ZAVc7t6Ns25AkcrfYK",
  "key42": "2XycKCsxV3xjmY2ZTNrnSK2Tg3qq7Az2nVLkfJGJbxGqfrS2eCphhEY2DYMiqPZXBmHLrwW6fjMYGbCFQTyHbAZH",
  "key43": "3QyGqcChSd2j97viVv6qU1QuijWLn5WiWAdAjhxjXfCGRJ4P1S8JgZnSk5PmnNvvx4q6fJjjR5zpG9iPFJZbG2gx",
  "key44": "2oPXXRfRchFVTcwakLZ3BbQBybEuAMLtxn4W8cZAMmnfcGkDwSYq9N4seyBmsAWK51z6bzd5iVeFXyMVg2VR93VE",
  "key45": "4pqUMteyjADYzB4XhEiwsmTubUqvhwF625E8UJSnAts3rGRkgZJrqhLYZpWiuJB9BRPW2euaGRZnY8KR5TyEGsMv",
  "key46": "4miFpxGfNAqJAMTG2V4Wvky7ptADegX5dJsy75fWR2XXTXyYxbkjpyQtkybDcAgt4sodTj3ZifZHtzGi9yimyHAU",
  "key47": "2zLBB11sRYeGGCypGorZqNSbyn8DBqto71t82Wf5mvxWwn3eJn4Q3GXqbZNsKKUXi2SfyA6BoyCVa5NENE7WiE9P",
  "key48": "3LLLiMURepGKL4Evou4brD7ueZ4V6kovKGsFb7cxR6pQgtVLUQkhre1t89tAJsQacVCLYSk4Z3vqXwfeCUn9Z3Kc",
  "key49": "5S8g4ZfnfUpwxXHdDSrPV5TfPf8HFY2CbERJiny1EzzMLUdaAs6DePzxseFzjHRJLVTcqCDsKLkhQWrnhXFbCGGp"
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
