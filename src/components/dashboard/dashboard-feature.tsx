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
    "4tgveagw4wKy3eXWvB8eCj6KsknDasojbu2AmwDP5pDNxsZfzPvug2H5Vi9SQWsPf5uEbSdVoAfhTsMyB1aiPjZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nq41t68AgnGCvKHiZrC1ohiKNoVm35i6bFtFUyJDFLYyVr1TUcEKwJcZFS6gMrKBxcyUCxDVjc7bztod52hZnSX",
  "key1": "5jf1thvd4Rm9mEED6bmDgJhJKJyoMMwEgVGVNn9honpMu1gjaTpecWH6cF7U9gSdtZmHigqUWytn7oWqbJFSWKQ4",
  "key2": "3dehY95QcrrhiQcjeWb3QjnpkQ6h9Gp2hRNEd4pFsS9HmBxJpP7HSrf84kqhz33kWyZ5uY8si13YVDoq6sW7NTdH",
  "key3": "4gAnUmv1uDp4mA12iF1EmUtzxJvmJ2NcbYQgfXCrHtGQbeXPZg1exFRoCUA8Kb6tH3C2wk1otmvuKuX6xVKLou3B",
  "key4": "5YyM3jykmLoSWjc9Ej3KycjCavJ4WS2SKqBdM8XUfGF7AogEwJFWmMxFkGjsMtiK7vp6dtySPa8VamLKKpprfZ2S",
  "key5": "2tyXnE6BeTxMooQomJ1XUhy3cAawvWyiAx28qcWmcK3BkWVMNoGaJAzKqD6mudwmP2GUMVpAPSZd4fScpr8cwUe4",
  "key6": "44MtgKoRFAohhZ3mX6xtkvQz9BkauehatiAgEFMkSXprJAG5MkcFSZGqfzAmMZRTavmLwTaQvt9iAvPXZUrdSzRG",
  "key7": "5XdkCc3263AP9fTZHVwELALByAaitCF7WH55N367iEFUbMmddv4aRqy1S6mCvM6L5ALjuNTBLmsw9eTGuXeL57UT",
  "key8": "5CcpJt4WuqrjUtjtrFwW52AsVnfrH8qmPMuL3tQubqEdkaGqGEWyHWT6CFq7obrP6hMubPJsdU98x36ngEdBLoYH",
  "key9": "3b7YmaSpkzUwwpP55MePhxp9GnixbXmhyRwFg2VwwhcVyFwmVfX3UKbWW49Hphzgnbr5KPd4uVGXgiQuiQAQYzJN",
  "key10": "5XAVRBpqvzNnxt28XsVY9cTaTT6Ux1wv4SREX4Kfer3U4XMPqWAYguY8oLK2DB6Bn1vFShDDijWBRJ1RRgMM4Gf2",
  "key11": "5DYJ8Qtfarfg2vYRkiZXuu1oUWjc8f9kvBzsFSycwqsLWkiAbWzks2pJnWqRd5QeBtdTGCX6kpBbNVW1w2uG75jX",
  "key12": "2L9j3M2YRUa1jYNExwskDeFBHcEmgwZXe7fWfKPLRVDYqqFLB4FRRjD7UvGgSVUMNnST15nSyAk2cQxokizEJte7",
  "key13": "62ezBj8K2bUoTMHcXtw41uPXHiSMomnP6LA9uez16wVsZogZkfc62ZUogQGhj8LoLJa5yNjR93MsPe8kmYCRfReh",
  "key14": "2acF7VS5xqENV7prVMBxaLy22KtrABbbT2HbzWqkkGhCWfBPQWi2ySMYGiY6osgdGWVQNJaAEkAf5xDMeZk8t8vG",
  "key15": "5ZQG4UvdysE8jC4hFHGSPUaWMys44dhcJvYZdHtQwpfQ7xfakK4bVGVYPRiTyMs6HUyKXbAXEQLrzA3cSVuQmmef",
  "key16": "3uRNSndz4MVxaD36PFkqfNU4Cp1y1Nxut6egEhMLYPjf9k2rGgHEXpGyTQ4X22ugvjdSghVFY6SYZNQ8bGdJuZwe",
  "key17": "DiWQX23juVzJ2H4j7AFer77kvoBHBc9Gexmkx6LGmAS8H6UavP446yFntS3XBngr61JTaXv1MA1nuWFE4Eh1GUN",
  "key18": "3C7tnB41iSwsnjy4KY1vEo2Cv9fmxrmgrCEpzNegQsmYPmYMSWVMfqr99TtLF1anmkb3reGaoPqMJpHcH6cKuiZ3",
  "key19": "5FYdnBoPgfcYFxv8Shgrxh2fsycqJ6m7ftwvQHrFVB9kuno2U5C3AjjnDFTgduKrpR6JBAfkmp248D1CFyvEb1E8",
  "key20": "5w9ThDSGyKTt2w1THPmtbG9W5gkYroRjyBAA8Af9w4b1Emg3CgGwxZGN8ciNHY12gDtdwg17qHhQmwq3NYJgK61P",
  "key21": "2ppyYYGNe6nPmnU4aGnyL6xgAmiGq8vRoTjLfhPZKntd5dja93s5m3z9L1dq9zQV7WKUwxTbNSJTPmqznbhgRzsk",
  "key22": "2kXW94icLMYbsPJmPDE1EwjyXUHCDZWz4fm9qAAWpsnYu5yzwoHGwMdSZM8eDDwu32Xm7v7bgZ2ZoPkdtToZVLah",
  "key23": "4ddQBZhcsVp5F73n66xofFnh8wQ8kmT5iXSk79mFjyEAW7uVkb76vbr6RZ7fXSgSiWG9Q5y3GSgSBiQztadx2H2C",
  "key24": "4PK1F4zZmJejrPgyPvN3XXGAiaSBhxBvWXfPDqDBpa5orf2AhWJ9CskDT6SpT4uuBomCjXsezV9nHKWAchJ2iMAF",
  "key25": "3jUhv4AJmhkeENEbiLHWP4c6A7QftQWuY4pjTLogXVDx6yuxrwghN1dvAT1muffuvAYfi7wUCHGNa1DkrujZfAbw"
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
