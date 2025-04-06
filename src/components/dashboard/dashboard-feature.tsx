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
    "hLtd2f3DASQU7EYGEP4n6rCGS34vxVVnAqi8o4SGEBzDNzm1w9541ic3zsh5o4tG1aAK46BCSkgbKS4vizPwKhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6He2jAubn4mVvDsNvVJSJ761nCP8qAmCoxn6gxJJ1tGTuXcBv5Hfn1bVfum5EQfL8mqGoACoN5NfGBGBYBNRG",
  "key1": "89tp874vToV4T8woAhC7ncpmQQfDR4J9oNYa3EPQCb8H1TPevqREHyWKUx95F61f2vUhY7bvq5w6fuJ5F8HtTmG",
  "key2": "NpY5WeChHPkmCfzjJSZshXxNurhMe6ntyTsrSHB9KFziDiRXG8Dcgs1mnre8L65bagGNht4fTf36YfnnPqPQyQg",
  "key3": "3Fbi316w5ogck1As42UczGbQDseshTgowjB4teC9NtXHhDr8g8eSsvU1wJ3az5N6qj6NzqSdcjvzjUAUGkDz2ztW",
  "key4": "3aVzprBdZsR6E3uEtyvuiMudyM98PsBbEsJRLLnGipWFx23aiAHQuJW5K8ynJJdN7HEpwTFUv7q4MoBc1fg5GnXj",
  "key5": "PshdkSq7NDNoFnE8QkLL6R29WTgKJtShWnoyAk6nn62v7WZ1ent7rHGGYudaRDdHDaY6yE9p7RAM8q9dQMuB87R",
  "key6": "wL8TtmhTmF5yNXBSPhheXytPFhsfB7nTapkZqW6cqtmWBLFM5DVAVWehMU3LdBhkPRMoZmf3RDdbN3GWv3SKXta",
  "key7": "4fjiSC7o53pCaumUSWq4fPfHHWDygLAJ1Qjt2ZEUAqZukjsTA7f3F9izNWXDyUMxEmfZE5SveehbwAFbiPyBwKs6",
  "key8": "4tp8ZErJMuw7P2irCVrVJSikuKRhK7dbMajFoRQQD81SfD8CHaHBHRsfSToKoirrwcDVMVyKDkBTmqKWjBcGc9se",
  "key9": "2oUofLgXmHBHCeQyMPXFVNZQw9hgBTrAGXhVEkAAVU5MUexz1g8QphPRnZmtYKqoi6aiUEm3DXF3gn2KQLvWQiTg",
  "key10": "3HGTLLF4VWAjiQFTwezPLyLsNFuWnTmXSDC3mkRiWB2vX5NgorAaBeJXqxR7rUWXaG8jCkQ2pwiVPx2j4C9ENGKE",
  "key11": "1JTv8gGYpGBNJD5DYWCXz37ANdZWfAJUsVL4ysEChqU8MAo6YogJ1AtzMCM15srD6aGRyipKABSbrtE7uwoLv4u",
  "key12": "2Zo2jScCJQXwRxqUaP1geHC9VWoMHwkzkArSjXgi9FtmALpSyRnTNN4vXNjUnZnn4it4ubD3R24oUxPYAv2uzn32",
  "key13": "2hui67g4QdrxgWf2J8B4eiuh4ENsFQGEXpZdtdwB2twXnZkyTWgN86cEemkpm48F8pEAVe4taUra5jC9dEKMgZKU",
  "key14": "ZAQwkDjqwXec4MHZWcu5GoCRL6X9mmLd9zJZ1uMA6WbHXJw5yCSpuJmNoG2nbzoEJSyirtFFCmU252Mke7JZe2r",
  "key15": "2gBw1Mc8oks1Tifoy2ak1uQngwKwf4CPu6bHBC3BnofPJ8W7Gct6vj44r16o6qu1Np4Xe6YKpoB5ysxmeTcG7SRz",
  "key16": "2F6nGqEzLmdXfwDd7Cpbb2weaQGnvoc3mK3UGDTwrwxuqoeNi6nSKNUbyQCvi9XAhTXxKDEGtfFUySkgkBtdxDpB",
  "key17": "35GJ336i6aQof3vsggDfBSwzDYyGb8RkKipG41jUP5Ejiy5NA5XWeuuV6uKghFfBUtDbBpaCYAnXSxbgfoyZHuW7",
  "key18": "5CETawoEXjFJXrKz1RAwmDfnNKTsrJFyS74wbzSGHqfAM9bLiQGtzy48GY3KnCtrrKSQ8Yr3J1KYBpsp892ZPJM6",
  "key19": "4uvcFjDzPof7ekbumDRsspv8g9LwPZ2Qie3G5oCtj7TzhBsBJBkFLSwyFSYVStLcGHaoKgwoRPqkgGFoLPS7stHG",
  "key20": "53cr3MufH7Zf5r3jj86hmirarAdLMm7qSmS5tQNPg7iGrzLWJsxaKKD8bmh9yy6xVcTWz2MsVnrj93SRwCw8QvNG",
  "key21": "3m9ctjroy8EbcmVyWS61JzAp7fG7wagRTUKsCQpQrSEHetbEbncPgQVcpCBo3cTqLn2x5H4zJG6QDE6hUBtd4MF9",
  "key22": "2xaa1sguYYJKxrcH2vLJwprEvZ3GcYzTkDb5yXBzYfeBq51GMR2HxPEGMUBtWt6eqSDuYBxGFHmxwcqw5nQCPDBU",
  "key23": "dQiYBcWnviaZgmXNxXUpSRXhPd12kRzWwHEgvN5Z4Gh6qXnniybvfmg8Py7NxBUWRswVESvs8b2JE4wBZFCntX7",
  "key24": "29y1RuV6ZZsBNfaQKdS2TWiGCGkdyKnLuXxSnb5LddEjte3Kt9sGPpKVuaZfrEt7pdw9o81bqcWSmW1jQZvDFPep",
  "key25": "5fLMGRGgxug8xANwutjxtVWY1ShnWfUAdwf1ykSazPcBAtnrDqaD9y1d3B26eVk2ATB9ZLKZwXZDVwPFiz8MSshh",
  "key26": "4wfsS4axyx14umeX7ctLg4C1dTkbr2ewV2XEhcqcSZuEDnwhsQzU2n9sAHDXbxMjd532bkViASD6scZFpYtyroPE",
  "key27": "5yLFEV5vAqPqwkkEqW941RhrdqH3fvVH8VJZFAKxNFfuRpLazAw7kpPmoufHHqprwWNzfmfMU8iHCLW2SJUS6sqB"
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
