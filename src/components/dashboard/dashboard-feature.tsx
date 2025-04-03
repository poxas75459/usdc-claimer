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
    "4NfDNeBnTviJBSyRnvhrAnu9bETFqRooUnvhDtYNRxitUL6Px5tjmRjWDAy4XcvTP2WrWf4ThsJZYyUTyyA1RVPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQiqR9UmmhjQY5kePKPyqHzKxYmu7LR1xog54RaiJmMGojc19KSq3YEu8CV2j1a2KAF2LUd42RbjYYA5325hryx",
  "key1": "KyMYJPdvX5AUn9Y5Vt85362xHuP7aBx1ufCXtWJVR2DGqQvRBehCfG4KmC8NTbVYKu1jVHRV8YkMLx1BLNcb3uF",
  "key2": "26jh1bxexkpvdZCQTVA1VwAsuGLwGf9qpkDsAeXnwQJsooLTuvzMGFQYwWrsZGz2WpJzVoSc8gVPzr1YZugoncov",
  "key3": "3k288PxuMqMSbejForADvYgKMyphgHDzt43YWQa6773jA41Fo1Fwp1UmnrjPn7V35mXVBdi1w6bfBqZTVV7EdNux",
  "key4": "5n4UcLWzxhc4Gys8nNTeLioh27urox6XJAjKqGW7PnnwxAcEN7EPYaozDs6AdcrA1VBEF7zjXzjRsyG42eGG7BJf",
  "key5": "2Ao7tFKQcXTpVcRSr2hdJMYKqBJuE7JzZiUWg1Pvn4AghU3masUwpfJvH7AkGGHvBp5GyuAXYGNC3HJaSoT1Q697",
  "key6": "58emhSiNBk1fqgXBzPS6uLGfPxm3qbDNMwqtmoiekBxpeeAr9W6whKP6u6NAmpNKSxcSQtesazVKTTuppYJioeKa",
  "key7": "3mqVyhiysoEmXB9pVFFWWzUe28fN4yMH9jd4qp7CYuxNiNzTC8nfgXAvsVMgPCMG9yAr5QhsVFNLs6KmdTg5fAJx",
  "key8": "3zAkkRVeozZFen5HfLmdKmrb4Kyeuw7jJ1bRvXdspAAnMHggL8js1z9mYBJ3vRZX86rakiEzJz5dNLw9LVDHiH9n",
  "key9": "4AgoxxrjGFEL1d4GwLaevfGxsVKrVxusMTAofifPySsNjxFz2i3Xjynb8og1NbY82VUiSLm52Fg5ZiieYJh9pp4J",
  "key10": "2Vq8vmSxyhJhnfFycjAezAbjSiNBozZRgUHbJJnL8341gDJMAWgNCZanBVbGAgrtWvb4PGekuQv5JLFHvt2usLp",
  "key11": "2knMebmoRdZBFjuCCZSbjem1LmGmySqrrzbW72fanaJyupAVpZq3uC9HFQAhYJHuMZXhGqt63csrAwDdPxGME9e2",
  "key12": "2APhMj3jRBejsrDFRUmnpePBtDM1rScPah57HNjxhpsgut9APzRozzvevZLN2rKX79r6d9vaqDdq2Q6LfM1QF26h",
  "key13": "4WGVs5K3BUfKWeBeGuapzdWAGxFbJM71UfP6EdQQaF99ZpcHArqbASJSLAhx2Zuos2bckybRWNsKxUoAQa6Kgguk",
  "key14": "5obc4gW59V3SnkXSGRt5MYw8mZRCT6odw9AoNp1gQiKT9tacVYiYcncEUGXRvhHTd4awJH3nS1AL4iZhG1nZPXLb",
  "key15": "3JPn6z3EWqDAnFPPWvm2RNR8WUSqRbqQRCJAYHPUSxHTsmoTtUQajwk9aBeUPGW9qfg6Ragte4rU5KHqfT6pYcNj",
  "key16": "3nwwLWZUNiX2qmpZUegHu2Q7H2UTN5UxpBQjYJq2FfFAQsbZ36sasbrEeHb2gZt9Rx8gKrBDTuNatGTwH86Wffd1",
  "key17": "5c8oZ1B7PdkZfARENkKgStAwuLSEtqrzRkJ7TCbcHNiaukqdhhTDswcMF3BWXMRg2iBYmKUHrU72SyAymusqcp4j",
  "key18": "YxcfY78PvanctB5n8o1EtABo8oibP2uxo95sJ6bQQPho7sTQs4246HqYH1YU3SpNoDwp1q3nwTtqVCA5QDM2tcD",
  "key19": "58uAXxXYgEUN6QJi5DHbzTe234jHC5oNEB8v7G4XWMvRhKbZ6Ekfy4G2qEkY1ybhkqTWPr6K3Pgw6UAQk4fAXsaB",
  "key20": "5CMmJdyDoG68jKkpX5YPuTGkuqCpbcS39efeGkoAKdWxyAD7MxaMhLtbGfvR2g2jQsnx7JcV24TLWFrFnCAkRGcF",
  "key21": "4QWbCWCLtpSD384Atm3Mxj6v6Ac9S6cPKhaRxiT7agAADXfGFScz4WPr9QMuJyiuhnJ6AwXPSuYNQGSiH8we4r53",
  "key22": "4zigWEK1ogSfjdG2jxJccqwVmu9YniqxGre3V2wXXYT3WaAWpyYVBYWkhWeZMczgh5JVA7v21z3jFgd5hBPLiacp",
  "key23": "4ZBv9DHUR6aWrxK6LnwecMszXMS8WmDUdKTEQ5sJuq3sZAt8x41h92pqRjnd8SViax626eqjeQ13EDroSaUYJ3Z6",
  "key24": "4uTRtQjgtdXFs9EyvYrDKzSL66pC6gqbB6wE4edNARMQa9NHN41TWjaGu7DWhXLM3foXpJTqDWaHcJfh8JEwQ5Rh",
  "key25": "2zWb6FWhEp9cgtXoNVZKmfgvxcKh8TVFP868D9dSFmCLLQpzxvY6TpquCQX8huLHgYVq1hHLQKRsr8PNwddj9ts3",
  "key26": "5Ww3Q6vd1Kff9t8DV8wZXXwmp3xb4WRpqmN55HQWvDpfGftFhB67FbnwQniGVD5kE96MeWKdqeW9gHPEBz2okNEz",
  "key27": "5JiiQqHjCbYdwRkqmiJv2Y7LmbvraVKAdgakVw2ybUvPRcBzLg3txqHrWJw9AXyKoXjQwstbR6tgZdhtzfFufKZE",
  "key28": "5WRAphMoH8tFNUjUJ75xWaDKBt5SbVK85bxpDfPdk11EqFXJ4zwjbdhZVHRvzy4Z6EeSVsDwi8XkRKAfBM9nbdrB",
  "key29": "3JwfzTr7wN4ZRudy75wqKLvriEjqEuvQY9besjnjU3tgXPupWDDVJuc5F8vyMMFSM5efffZs991AgQLV2pxvpGaV",
  "key30": "5My7CTxbTb8iFVvuajPMZb3rso26YqNvBJP7HVtLGbMEVsWEUg7vb7DufzH22qaFXrNJtFgVUiXzXXQjNdibRYcZ",
  "key31": "b25THmvWL2KfQr1bc1bQ9JkQTBMk2thsV9CDLXer9YDKfnbGPf7TghwFoumyF54y93YP3XU4SGhKPTWPGXq6wgA",
  "key32": "5FME6MKd6fFvp68EYA1rXNfuNFu6JvsVYx7jBLw9nf7SUtQZGwyA99vjsUpPQRwKwyUiSMxjmoP4zfBvs42ZQMXZ",
  "key33": "CpY3pdGB6rPzNacB7EQ23HqTeEQsDgLWu3Hqk3cqYWHsYGcdPi1PciNQR3MkncpiBWErcbZWjSFz1ArsuoLnbVb",
  "key34": "5b3q62j2quTyRqM7GfoqjZqsxZLqJu3GfZWX8euptXG6a6dqBDf8GuQgq61ypQhJ77G6WNQ2pcdBtVf3j4cpYE7m",
  "key35": "2YdPB9Fquf7KNk7Xp5uxvBhSBBDy1Cw8WWMyNffwP31f2VaxvTkti2hSn5niBW6jrXuni8VvuopYkt45UTgcALZf",
  "key36": "5DzNywgKdjCwpruyw3dkkgeVhFZVAPDXhL73TauLrzHjL6UEa6Hbom8SedfDn6aC952SxEyXei87oNWmZVNsZorT",
  "key37": "2QnAZKe5xYwbhPyqrzr56nL7Lt3byDTgMGoyw3qQv52w8CVfjfA7wUiMFZSYxzZtnL5AGdh8GQWUkEP5PH14MogP",
  "key38": "5rB79AX3vV7xPvoKa34u4YbMYhc3VaYg71gfBfJtxhcR3XCShhsVUyaY1PTc6QrEh4NVft5DaHNaxhDpddowwcxw",
  "key39": "4HR5NHvpuUeEnGPcmEFa1c7FZez939y1g9X6h6motGsp4ZTRtUzmAcdRpKCxeFbUw9QhQa71qgRjWBkuuvzViyi",
  "key40": "3mCMpDGcamtyUk9cnVmAK7CPK9JMxD55rj165gMTnza4JxofZCAiD5AhpjKbZ6HnctQErZG5G1KCCbbjpySLioXX",
  "key41": "3V5HtdaqSZbM8zjevbkusikvd7xQo2jspUL9vVUeVtBSRhSujfXgiYZsX3anDTyPgDSSkRUbRaSayh4P6UxRLhfi",
  "key42": "4ayPUyzDE38Y9To3s8A52uALAc6yJYG6UQfoXxj7DQnKSPmBMVFSQ1oXvaWxfPcbz37tm2cf46ukxH2bD1QEAvmg",
  "key43": "2Sk7eVjdbWF5hJZ4AsfsWxckc3rXTM291MbQAvhc8rtY94mADj9mDLZfAy21qZ7Cn7KuRgBx2wRw4vLbkV6FifjC",
  "key44": "TR1uHxYNH6D13Jd6egiDzbCKoMstv3mTy7dHZe4kFks9gFbDhZhV1V9eEUWv7tECRX5mqVkZ1nNFy8QVAdy8VAn"
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
