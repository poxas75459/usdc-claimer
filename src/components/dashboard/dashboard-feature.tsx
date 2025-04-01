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
    "3xD9zTMfi6ATcpCiKn5UmAKi47MP5T3dkxhStG8fixk8voSnVinotha6m6hm3j5YmQwATnCdu1MuycvW6eiimVSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tcNLeFEkAH8vmkcAbXtVR3ky77JKwnSybFSja1Rd5cE484TVZHieJkSanhddPUsoMjwBzYFDstsSZX33QpxuomP",
  "key1": "28nJZm9pnJTaDPXkr8VGKUd68PDJeGS24S1m6YLbUX6FhyqB7rdygfTnUUtKfRUnFeYsebFtjF7PFVyNHi9NMixh",
  "key2": "3gq7jWvfkYqKucobT5Ww51hRpu8XwXEhrTfcPpczvvhDAtFcNQGKPXF8B2NX4ukcXDDLExfNmPL4GdYUjJAYnnbF",
  "key3": "3u48QnnsNij9fz5ZPb16ATEWZbPaMvsE35KHaTrhNwctmK2GbeozDrREKVxeeSmaKvMLg86sCwQzdnpTps5nfGjx",
  "key4": "4oHUX3BheYxme7rbRgNgoFQ6qdfmwh8BbnHGntdV7tYovP1see486Z1GoPNWyG3BTAwKf8bV38WuGCPPcrcXaB5i",
  "key5": "4gz9Sv8H9uNkZHC9pAQzBZitkkqEyZ73ga6w2kb913iQHvnBADoutTbdeV1KkfgGxDh6QLTT6cqrZyvxCA4QXawr",
  "key6": "5QWZJHhGA4B4suD3JKJxsLTt6pkB768ojBATQBE5ZUcf6CNQ3XZQg1fFjzUC5BoRr1vKsDe4WXCWBmK6Jgv16ZWp",
  "key7": "4iGrewUyzkBExxLm6zQG5SCkJ8jkySDJShnzH2kSVieR6ZAUAM4XNNiLMVr4hS3fZis27FwEJMQ7a77xBdZ5FTrJ",
  "key8": "4A4V3g6rRDKEbzgw6pJLtw3SYBReB5cmFuatGGsLmkgH6Mh3HgxEpCFZRNCUJLvSdeGpqp2d6qb78nKNR2KaGr57",
  "key9": "3NKgA18nVDqMBY2HzWHTuYBm3ezCeisnE8d2Hye3TA5AbuunUe2xB2f9vJ2XxAtpb7WqYhdw5vb3KM7j3TgkKUi9",
  "key10": "5rE4RgzPHmJZwavB8vKed9cf1wbwiE9v5jqGamTUqfpxsAPxGFwALEBAWfEqF7exWuStK5aA1PF98z9T9o4GP66Z",
  "key11": "41a4JezG1F81Y9oMPSFuVMd8C7HYFZwMegss5sytguEh3RH3Fqzz13571SeLLvr6QdN5A9R6tFE2hyNBWXxmPJbn",
  "key12": "5mH8mwVbL8QsdA69BuZAdw9n8S7FHLX7AuAA2q7uQ2iiiaSS1RauhuUo4pMGjaJ4YboVmDEkhxTrMVRBQw53P1pi",
  "key13": "2J2r4E2n8GqTzMXhj5Epo9tTpgBdd3kDct7ozHBS5GTXiFmxR6foZ22ibuHXeA4hp9DDwhnaFcveLtfXZuYs7LhD",
  "key14": "3g9Jr6kBB9D9saLifQos4Cx62z5YgEdqtAvKAeDuw3XQvPStsFsqWB4vcM4JzTVig3hooZRBn1yshqqnDPuabbZX",
  "key15": "4Zpxr3He6tbmQAofgZfUEVJJw9EzFxd7YKWZdfndVSpKVf62U15xR1hg7btHc7DhvUwJFAWhVAHVQFyXp4jxG8N2",
  "key16": "67LzCRPDNCW6KgbSSuHwDtzLNSmHxJ53PnFs6Fmw33zEy7Ahs8zo3kRCN5KQyUuDZjdqN6rHVVimjf3rVHyuZiQq",
  "key17": "52yMJuwrMf9odVJVDnPJk4xBZBtQ8mdAa1PvyPgVfSQz92bX5SViMry341KR23yx7ZtRFJuy7xdY4DEAFqTW9Cq1",
  "key18": "59bdNUD14PqHWBbWuYmDkgQkLBpEGe43fK43GQ4uab9qpwTvFCe19Ji9Y3HE77bqbq62mCX4PSMsFSDSkoymDY5g",
  "key19": "2uRi9sVtjVAE6hwHUR3RnpaxFu9Gsow62XAAxefi2876C9kaYzLpnwMrzSZLx2uoFDQC5t8XXamp6SEqcoLJpdNQ",
  "key20": "4HkeEkeTPrximSzL8W8s83D3RqEjMb4GUbQG4SRbccX9h7Dxt53MeHxXzyih45FgxVUg6k7WareWuy8uN7ZwSGoK",
  "key21": "3nrc1nzWJJ2WBDTQewJ13E2Y3egkEejZGEXHbMtSWoxPUPe6gDRR58QDnn6ZbtVUHAa6T1hVxcqu8e5s2etCdtBj",
  "key22": "4CkjgAQhLPJsqzxTzgxVL4crsmsbHW9KEQ3tvgJ2aU8ye8ps6zRfGZGqcHHPKrd8eZ8uYquPvXdox5kBZskzFudj",
  "key23": "AETqDXWcQhkuAan5EexDqK4qnYrtBdAorGgSAndiZsM8oJnarBFA2E3tLfkgWFWc9skGKcjhoXeQLgPcxeMsmzY",
  "key24": "37whJ1BiFiaM5v6ZDMBGMtHSNLcH6bWgaxVZKz3wNkcRnnQKvEp8TA7TSiJ6cbEj2jqGAixPZWVQKoZ4T3UYw2uK",
  "key25": "5HyzVNZBaXsaeYyRbD87LwR4sP2ispD1Bh9bg4FxVCRYDn93SDdc4NjT5zkPKtZ5PrPHSgpA8JgP25PRrz3hsfoX",
  "key26": "3XCipHjQ8mUjDqSARL9Yq5p8obymcTiExu8GLLpEHHCr1CA2Rwv7wzc3LSK72wMjk7Ksmc8MtfmDhWbWmtHo55ji"
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
