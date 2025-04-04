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
    "5AYHbNzkJqTVMPmNT3ry7LtBy9v9YzXNwSacXm6WVKMtgdKxqKrt5ng7mbHoG8qoK3ktFBZm8WHsmpCAD6DddW7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RkzDYrZLA7FYwxrUV8GR45PfWrLLvYaEHhrJXz4GZzU9nKJsWGaQtvq9zLGgLfenyyHPxyJHemmLtxi9SSb2zYH",
  "key1": "2rjsYGNacCcR62EbzHcD6xqLpmXgWR8c8gjrPpD8g5ZxG2PLf25oGGc5d7jDJhRdUspLoYcLkMSPWcoLdAHZpF93",
  "key2": "5MNHm6PxFjJrpxC1JUuS5cNi7Tn2dDb82YpqVfSt67gBCM3iLBJDa4pHfpmeAZz399DoG1KV85kPsaCDY4JHifst",
  "key3": "2YvJMQXPv9N3CpvmxCP8tXfF6GksjSMt6wtJGBnb46AAa9NtqfrpNj5ozXaQvYPMDNwikQ5VJj2tU8CmKZaENfb7",
  "key4": "2QCyntqkQRHss9G4emCe5NrWXxc8jpvEuogPe33a9dbqRud21UXyHQjq18tSSdpkJsNVds67ZaDzWBXghWJnn9Hn",
  "key5": "4hPXgniy63GwPJkRgFWPSPptWdGusGoCeQ6WpHWzJ9C9fFfezphKgCSYRxyxutxkHURSd7pesM9GkquXn5HSZYri",
  "key6": "5GdHQvQsBxf423cYQ3WDgHgUd7RsMg5CkdU2e5i1CnjPBz3TH8wPzgNRoWCGDV6sXoe1CunGLLcE54wskEBd568A",
  "key7": "gZt9ee6WYa2U3RuKyT9E3p2ZJ2zTVNwyyUj9BRmbKFSUGzq9obigMKfS4ZnnFLb2Au16N3C4LydVLjDq5sv2cwf",
  "key8": "fhAnT63daFvvupcC33MVDNh5fuTKzLokdWGPc7jvXcUPoYreMFvpvduczT52baSEAfmo6Z2MpgcNQ8Pw3Y9gTMD",
  "key9": "43sAST3LV8xbRJ3eGK5CpkhFvC751PiSpaYemQz7GNZkvti7qJWchmmDWVLBrb2kPsmSALb7DxvCKZwSYQuPdAHb",
  "key10": "32WFH1Dqio7V97f2qbw6cF4paHMKMPLJTYY36ZnV6PKzV9fS8ZE4KDsztZQVLzR9JfP3y9uR4WpisSLBLeLa5w6d",
  "key11": "3wbCUNUDhTGGwnk7ibekq8Zy4BdLMFYy9G1sgbp42btxFbEYCpsNXwwDiJ7FzcqjpH284G2ETGZng4tkoyzV9M1k",
  "key12": "3UpBGm2R4pivaUjKQ197AGkX5Gqsq6po8U1Fr7zew3N88dB69WqMbJmJ54qEdgsthMoGGXU6dGftXnr1hnk35acZ",
  "key13": "CX2TMtEuVykck6RtU8gLh65fCF1Hyb8WeJyxjavmEQ1pAKNKE7uSDaVtygYUvEaVNkRB6wJjUJiQhYhYoapuGuA",
  "key14": "5FpL5dqH2SwFyTywFX8o5d1gw8uc9ohJoQbjgvPNxML6m1jYkT8hchmGrtPF81FWYQ9axykakR92tVVRNEkLZbc6",
  "key15": "4zjhWeLmDYR3F4qDaf6kqoeWT3FKaFaA1uLJePTkURGjML4R3fgGgEySyceRC9dByQkKB3xspvHqpknDiV2SBgYX",
  "key16": "2uRdxDHo1H9yG34Grp9VxvB99ioaEaQnpSSPYe1ckhM8UrriUD1GR4UdN6TQ49tPJFQqPkFZnumfsdN8LuPXg8mU",
  "key17": "ZLTLXLEzrSL8SLs3zkZj5rxTu5FFWodqEvACG499DTCGkbkQyX1h2cfo5But2j7Ek6E6XdVcTegu6mSFiHQrWZr",
  "key18": "61XtXpTKuWeag4c7ZMmVk9LcbQbdZsoe1cJYNVtjnppDc9kBDCmZsE4Mta17gUAuuhbvsrSHy7wntrs9cVdrHhF",
  "key19": "46WwVmoWdnYbcELQdWkRKShCdcoFtmAmc65mpCFQkgpb4VthHp5Hh8LRRcbwygY8vjfVpvbKJBScoBLXecQ3JZ2T",
  "key20": "NZLffMV3TpQwJBDECFTZLKMQfee1pxiMnfGQA7LXAA2AyF3cRQJ8FYu7cgHB9MG7vYrKXF2zQqGnvHd3JbpDYWQ",
  "key21": "4GLT8665rg9i3EX3BKdbdpxFaCAqrmbgUhsKdjPXPxrCwvYWf9PzeEHWfuGpBGKqrWEFtPcjDpiCamLMJwZJP5nw",
  "key22": "2E5mwUVcP7Ttax6fz2KZNfi6degcHyD65p9XgjhABLtUo3J5dMnLxz6pn9EgRYYvTqYwEEYdtmhhFP9UjRGKUqTu",
  "key23": "5A8JHK2g945paj6rd73EQk6zS4EdNZ77TG2igQQv8QqLiv5DjNfY6skqe6s7usZBto4xcP4WAm6UjzXrELP2euup",
  "key24": "2w2cXuy3bNRgmcVubF5Z3e21HHvQGp1onBceYv6RKo8Ldnx1pMCvBZkcHn8yD5DGknCUS8TbPkVsRoevGhsv9Gvb",
  "key25": "2TpmezHCD8VrzGajKfmjsD6MMiLQHTWpQuPabJQ8ujofuaRpG77sg6nmaXEAQdsTG5eqGGBHSJNgXnwipBBUQs8g",
  "key26": "4Qo6u3bKaKBZxcFdVuFo2zfjdLtRgpxS84XmE8KftX9jRSSoBNbnweXEASEyQMhEZTe8sfGR1Dww3NGKHfiU9nLe",
  "key27": "58cbHxMEyCHiL7EGiK2439QBdVBYCAYXvhynPZ1W8FPzv3jbfj6CeF3BmNaVNkEZt57DTQbvmPaxQ78MJKQp1wYD",
  "key28": "GMijLySXgqU8supwwKpRpEFLHkiFphQymu3fVF8oT6QttkTjxPtxHED2J9ehEDRF2okoogF95wmP1ck2pWmyLb8",
  "key29": "5T1sdrukc9fD3qukF3aU8iRUttfLYZmQFFJKMERFD2Ahqy4TYt536g1z5JskTSXdMB8bmc52oeR3A9FLRQq24zXA",
  "key30": "2xLX6zDAcBsPa1KAsCCqx2HRjjmEySEM14CUbKYoPfAQ47fPqp8RM9u11CJSDbqz8UhChaStVSBv16UrKUmxoFhS",
  "key31": "3G4LQkYsPHHntEyR5UJRVPzSGnLRdEWHzcbYva25LnN5PkHHxP3Jpks71J5K7rBDsheDiK5iphGsxMtDo3AmrmST",
  "key32": "3Q7aHBbuBRUpLZZdHnBJnuqQk37GFRDB2TiA8ZRZ4JYtLCzSyd99ocDi5ApPYLDCn7h9dWHzgqDGQGU8HSwY4vnr",
  "key33": "TsSL2NG2vopT1Wn8bSSPXuxSR1hrKrcjg1QAJECChciY9t1tDJX6JFSXezKGCuNQvyktpZWsnm1kQJcdU34d9cr",
  "key34": "hg6XpbQP4kKXQhxqjiSLzDbwzGbwoaybHyXWiMNCFhsb1ted3wbQujvCynKU1nxxw2NoCJygAmBwjmMFHViKWvG",
  "key35": "5JvGGAuyFShQfNT7GN8ztt3yfFxQUcycTv3FiADie8hgLcpDVZCMWFCsuFwMFbdFRc61X2xi185t4DngGAUb7Ltg",
  "key36": "5MUQATg3EJnNNwr1MWDzrRgn2soufpspXpb98VyFqAYv9HQbwiDPewpawz9xqUsqiCxH2saMqGfKd8XM5Xh1Wfpw",
  "key37": "66WLZj3hus76yrG9oCbgGUbcMvmjank3erBW3hCvYEf7vx5sjsBqM71vbQWnLmmoAPZB7kTkV6UeLAeXmEzJtXn3",
  "key38": "4b72ZuMknojJtJt3cE6Lxx6fb48hVZkr9htSHa22oxGD8nzBGyBUg4k1GDfZd8B9Vcgeu6mngwzsELoJHWXv967N",
  "key39": "5jKj43qiDnQi3zSL9Xi5kqN2DT2mSps5F5rT9Kq8XiyEuZPzuX1wAQMUsy8t3BvGUfq1ZnftCZtife4pg8jrszw6",
  "key40": "5hv1C2Xb5EgTpsMtw9XQWEwZmLnwv7P6UZ4W5tfG2NAEsDu6TWpZChbPmkHrwLJBzRjCef7t4uL4CZSi2AEEDC4J",
  "key41": "4gX9THbLJJSzHZoqFJpbnb4jQQrMM8nNq3errCmTZSRb676LJne89fT42B3XbZuw6LdEtLbkMSnchsuPB59JyVj7",
  "key42": "3CaHr2qTmzPJKQgboScK3QGB5dtZRrWzmYRNDFEkhX1eGCeMb8juvdbAFnaWdcdbjXj54kaaBq72rfpKiCetbcEu",
  "key43": "26iXj635QVrxgbfYXuYQ5W6si3dbhNmqW4x91eKN1kmEpJypXZMgaBptC5eHCT5bGtYKawFnZZLFnKXDg88XXeCd",
  "key44": "R7jB7YBZmaigYXALswNefeNRpGpqQDcMBvnXSqKWz2dSxBYkAWaKgSgwTahNB8XRYyeQjcngir9H3NwRBYmEnVP",
  "key45": "4fySAwgN4JVjtzY9kT99UtrQwZHapJzmmw8mB7ezPvxsxUGbwtM5AyQLWKVviMMxbcTB2jNhrap8GSgBcSnfzj89",
  "key46": "K8qmjpspwaYy6jVe25CAmfromdeHdM4AN3ZhBz6N93tAF8A9o8yCT89Etzaac57o5E6ocjYWh3LxqSmzXCkYHNr"
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
