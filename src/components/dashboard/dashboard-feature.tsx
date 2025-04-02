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
    "2564nG6sywkarFHHpwqMcxf6T98cmhtGDGusqhukSn8gV3cebruzsunLPQeiFb31rYSKN2pNfGfSZwoiKQLLdgog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKepEgY3EHSB9aGN8TMBr2q1yTid314NJUaotcnZ7AG6RoVKcWiCnBKihEcyAgPRNeqWWBtx8anyTQavd8eaQtc",
  "key1": "4u8BuVQyniZ3igzHTE5amTKathkZ3m1Maf8QfbSRiJMJcKpfzMzxuUNHExGcQhB1iRcuEfrb4HHPVYroYiFsoLo4",
  "key2": "2yNPe7Yf7NdqZ8qxTibWi3cJK34ZwSttMYdtT8rWudCtWRbMYRgW3vuCsvKUz4b3GGtTauypYqdKKVPdAHtk2pUm",
  "key3": "26J1qBMMQvVa8ucvxrsfxPhyDvhTKEvbC9P9nGkax4sxZ1CU4uy8ndbgP6bKQe4FX7UT5GKvxFLyxzGdn2HpiK4T",
  "key4": "4XLK2bNfTQaRUyvWiKTfmb3mDEtnAMsuByvwKzeAhWCsXuMfsZVAwWFkSm1wmAWygeS4FvWHtqWYEP3JsLvoBjWc",
  "key5": "5gry4JmhuxUmE3jGvXa5Yp6tU5F8xsap4WzD1j8v1pGNpLcPx9pdujgTWt3shF2jPiqJVLgHEPLnUak1d89u5D5s",
  "key6": "37WgyXNrXcpj24rpSjWs4frYfepimMAwriBTX7ZTo9zk96QiNMHmtvkG6iSh444TJh31R4DrWSevHkU1kRTfwjbq",
  "key7": "37x94tF7breXnXzoADAjKVdbTihCXjijzaAGveMXjNox5oWbc4iwXWnfmUacKWRG96rbCQeqzPcMSc5qLuGqGgn3",
  "key8": "jePXzW21z5QWMzTAVX1VS5sCsk9HbYmtqafoNe1P1ymqBQUUNvW5Ls7gvLmdcNAJSgYxYcpUZf7dfjrNPEvP1RV",
  "key9": "5CyrL6vfvqb83WvvU9DjaadrxztFgJ7qqRK5sArHdRAufZLD9w9xEAxyD4TSAXwf5o1NaJtk8766kF6x8skTqxhs",
  "key10": "3XfG4P9eS8m3F1RKwnayosYkA93EQMr3MKMBej8Wz6aXmn9hrcXums7piMA6me8ZF1q56CsPFFFQpKhfvtYzLRXZ",
  "key11": "23XdK2eev3itCMc5MbVg5H1fBNMCgJCMFX3RksWXuuLyMhYfEvmhmm2v3HBoFaRkfHYm1wVNfe4ZghGycUxqEjaD",
  "key12": "2AEGMFqbk3e3eWJv6yTfgvynskXsUX8kGJkKDP7iqGRBXJojfxahGrciutrMeaancwS5S7ja2gDiW4ftkwfXPKgS",
  "key13": "2cBcYCpWQUYAHoJxjNZUo8bvqhM5c8BNjm8ctKn6nY3cHKij1W5weWYHiqVLA8P5A7RKUnJkY1ECTrqrb41XnRAy",
  "key14": "4kpWzz5z1vqbrJfp1KQMCcbaq8FcHqjwFRrhcK1JcidhcngR2KQKyJDaUK6ieP7X4oBAi1WJdc9vhnyhAC973SMd",
  "key15": "kKRd4qSqtuiWaUsmVVUTx2u2CvHv4qHBSNE144QGpdBYpTPUmGPiozMx8yL2EqsT8kuyGtA9DvpCnmgqWzu4tch",
  "key16": "56SqehzRTWin5HAXNKvL7CF7qq1uy3maH9TbJ5bjKARCeK2jvRd5YSySQQop2puEPUp6CE5tXN4bYPECy7bfFxNN",
  "key17": "TW76Y9jooVHA3AnS2ePAHbeRbFiFZTjSHGq5DDuAtXNKa817Eboo9FKLnwdK9tNyTn9HbUQnWyP3dGENFb9zWNm",
  "key18": "4SxHVFsq1hEjm9pw1xs31X2S6CQJb42P3A36Vvj2icqyzgQAHb1gtJcNzKkNLVkxJsZYJA5Sdh3nMCXhUbf6NiMH",
  "key19": "3y2NqsY5nK8oP6buBSpuuuaG9bixAdkBkvCUQdaaTRzBpjzJZ86mu57FmA988Bevn49wkUB4AeZngzhMH3F7jQLn",
  "key20": "4nihwv2LsUAXd5apKVxVjedZrbq7cwmMABm7kyoemfMjcK9FimrQup5ft6dPLzP5owTzqpGtXNJfJYCaZTLQ5fk3",
  "key21": "4WLh7mXjaEzYn6Pz556aV58sSJUqPVY4EdM5gSDULEnR89CngMNX8EL2uSnXQYAEv3MfDMDoAniyAWag6hjKD2Nz",
  "key22": "QbQRQMTTBrQsiCa59pK8MaQAEbEh7JSfnZ5DNnHrbEwCAxyhkPYwWABDxPWefHCyevAh4HPorjM6vj5Gg2WkMyJ",
  "key23": "2zCzqkNacpYZM7JXBWSGQsi5XuB1gkHm9u2e1xY7tBKd7BawJ4NBs8m9b2RJ7MCpLvwZQwUpuQRqr9tavCxXJmrV",
  "key24": "2kMtJyTFrCfSV9b3YSAvmbB99UMrXDpzceNVrNArHtXo6EsL5dSQf14h19n8ApLRvYPBAPPk6bCeaHKjRspnCwBN",
  "key25": "3uoUYuDVU1a6LT2zhn4r1opzEB9BWdgwN2ACr45vso4zXA95d8fCZQqgmEuqLxGVERiRQciJ7UN73haDTo6LknNY",
  "key26": "3BHFF97Hx6BLoWKy7a9hyqofybgAYmsrkREJuxvEqbAC8JcicC5qnBSkFUbVqQjmY9pLrxnsQdorn4QKLGfRjrse",
  "key27": "ghQN9VDkTJA9XmMzxatqEJkDbyUvRBohi7c6sMWNxqqpAsjFhgKA4seHMkQrWuheyw4v2hacUBE6ic9HaCorSvi",
  "key28": "oELtsFxcp3XViP2STGmxTda4vE4dKhN3amaZukgcj2oTF4eyxDZJLZWM2gDeaovcCTir39Mdxwsb3sAmcQY6sgp",
  "key29": "2NVepErcQs2btg5HFzdnpZxR4VwceFCpFqFCepZwesYkupimKWtqbKNCUTVEN86Ymesy75XkYLY9UofgDBcu8TTM",
  "key30": "4KwXAWuA2heskHehG5zszNYPo8itNMqQ87J9U4CSBHgZF82Tchnt7yW7AJKiasiPE3HRxk5Bg2oru8EWvGjR7abp",
  "key31": "5cdNeQsaQ5eSE8HBxcneNiRtRLq4bQUZRkU8RRfPJvPanVQd2V1LSKhiqCvL67Xy1QtfacTJujMQfnHzyhJGzUs2",
  "key32": "5SLe1f3tGpSkp1mTe2k6TJt2wFirkckEs6VZso3BnRinY4XjoHVC3zAuepK1T1GYRQUjt1Y9CmGzZtmurfJLT2HS",
  "key33": "2uZiuN4tNKLFqMMtUWc2PrB7pMEGkx5wfVmNdkhqiL5bABzexciVaHj64H2dBN77bBhwMm12eeouwmhkHYd7C6MB",
  "key34": "gXaVBwomgUhyP4tswiKAAtQVxtZ5SYFg5VpECcvMPTDnAqshzrgUfnPefpmKncWKsgg7EffzSZsjDMFkBjBm1Wg",
  "key35": "3JyVoVJ1y1H8t6igkz57oZQVRAHFTRu9QidQe4ShJ6odXvowAU4X867cx4v4xD5sLZDoFv3BdhaSnXwfn6rJLx7j",
  "key36": "3vQo9Z5DYBNWoofAJZbjoAKPAT7PuSKyYAcjFKeFVdyRQ46TXAhj2kmiQFsHjtREXrbvvhPCZTbHaTY6w6AZc187"
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
