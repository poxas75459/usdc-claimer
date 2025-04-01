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
    "3erUgAjd6WRzXwGje9yKXCS3vLxp8EoVsorb9xd4R6MxeFQoJrmryD4rQg9o821uZf9yHYanb3csZtH8iqGJNRXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1Qpj2sw8n6u3nFb9EuzbaiJ2KAgo6Tc9mvTzDFHGnRuPCvmxGChmQSmBP3YUneSUYSikeLPzBrpwNUMAwzJUp2",
  "key1": "2eaBo1pQasLbwVvQn64swWG74pRVzfioGqw9hRGPC7azN6GhrLqBdinwntkPyqdtN3H3jpQpi68AcjQzyz93n9nu",
  "key2": "qshqHSBJnjaf9vZQdBVMJ22bsHqrBf2ZmdtEeKTnFFegorZ1udsVc89t6svXwUdfMbT2AMz6itAru8nLsG16BRo",
  "key3": "3pSyBmVoqdeWcm993h3PEUL3svM4iWVvQvfFpG9DtSFgsGrqdRSPkVesciUqRp68Uu9knJZS8fCrhCyfyWTVaHNF",
  "key4": "qsWxQA8cGQQMQQo5nFNbfcRQoiYWoNaVPVSy6aLmz7x8sRBzvvShQyGLdWDpvK7B7CZ89PRLoZFR9bytVKD1Udq",
  "key5": "2MD11XLTDUuSCXMytjJM9HN76hBGywv18HjA3CiZtDTTFKqBEpw78XY9iSKpHHqJ8JHPJzhvp1CALeh82p5YMR8k",
  "key6": "igWNQV2CGszTgyED6Pz6cgBwzgf4GYDNjxEfAmd9tErAsUCkwwaAimshGtfUwZjcV3wwicKZJijYbrpvWGPUJnS",
  "key7": "5NuR5dDyPNLWyg5sWLxTL5JpZM9HNdZoN1zqtB5YBsLTakWSciaGwsRDiouBZqunrdRYeCc639xMyxNQgg6kbPZh",
  "key8": "35xooFoj9EsUmPNjZqMvBtWMnpwce9SmPqHvVdn4breNK9Wuw7y5yaQ4qQrBuBspv7CragGDk56ANMXGFrWvG4WH",
  "key9": "2Auo15eRahoyqyXhwC6VvFkFMwYddJY9SKybEL39HFi5n3tmRuMKJDLXfytAU9SDbnuK2RcHJUSagzwJswVb5Ymh",
  "key10": "iB1iMBWuR3g5gjwh87hckDTh6ogPPH14eZVKZPdaa2ggPqatrqvNFw7NFyvPSsJTGAea1k1cGFZqgvhtxPquS51",
  "key11": "2gQpriULdT5WyGsPu8vDEV5gyoojbN569PdffY8DYFMrNBE7VP2DcrpfxaYWJ7t6FWiEDg5LgtkYXNoLBrnCF8eD",
  "key12": "3LSNgBCMLmH3wR5HUsoJgfrg9JFFrfkMJoXsJEemW8i6DWsngwWmjwacP6CUzW7fkvmckY3kRG8x4DVuLhThNEEb",
  "key13": "JT6RSg4WkXsYY5SA3TFKN89TBdxZATUkyv84J1bp3TDTEpZe4p38CUb2iry6414H2hJb2QjjpiariVrPVuy4zuo",
  "key14": "4WHqQ2miJLKZxHTN4L9wQRUQPoWHhfKKGY4sqLo8YcVDecGGfxukhRqd2FeUjwd8Pr5i237KcK8wrQ37EEc4YQYx",
  "key15": "3ydA7mCkJAjNRBJrBQWqmpqHoAHEeoHcSPaYYLnQN2tkPtbMc6jLih1QvpjjcQ13XcPfHZJGiS5rNFjqaQmaLkA7",
  "key16": "5kYaBzh6qtUN1z6nd1Ge4R8F1uL8euXVC1NpbdKJ87C3MF1X1Suv4nnxWNLJy1wUr8k8KQjq5Xik6Qkp3JgDUyzd",
  "key17": "2kGhyETJu9drKgBuzeMWQJKF2p3JrAwRkZXcsRpCUAPMeMf4GivuJpXKT5fj5ZGwkoGqnr65cfzxfFjwjSaxTH9a",
  "key18": "KqYvQNNtDnBR2i5ziHoygAWUPSgx4sPvGm6oWTmkQRXgSwWS358usVznPbg61wxeFJbenq9GiDqoDHVE2HM6z5U",
  "key19": "5mhwd6fBFYLJ6XHAEwAX2AbBXdyY5DHkWA1t9CAenxDXQWV1tavqUuPSrtK7RDAiUz8wrV6xe4mnhUqLCYHvcR34",
  "key20": "497kirV31siL4SS16gs8Sj1e5XS41a3AWeSWQHM4jWmyMmZN3AMky2rdM7bRetEkbHzPf1VywGsFfZTND1fLnCrC",
  "key21": "2uUa7pcAjKW3s1mrdegscnDCtkPrHEvtMNtZw6s79Fez1AeMJzs1KonahoteTbjc7xQ3n5NKPPJX7ET2eQMb2d4L",
  "key22": "4L9172fCDxbXhdb3HJ3txPSjCjUej7dXjPJPth3nUGQhzsJmjaEnaW95dUJEKvpwCKi8Cuj8g4pzSfLRxpyTgJJS",
  "key23": "QPdjsuG5jgFd3eRoALoXk6jE7pcHefC5ZemqdBHWXEy2KtiSPiAgt64z3JG3ZeCHo6AAXouvSWQwqjBJaJUm8ts",
  "key24": "5BvC6xJu9ZKzeYMGXAfVpj1QCuC2z3GHnYGrdm89Ed6yCpQ8UoF8rbFrBnwaXQPnbEu8GE7ouFdeijQJG7XthKwx",
  "key25": "3S2HfA4Th5YwFw1UUS9fREfSWn84DnY6NSd5zpu2Nb6GbRar9TLJkogPfkvu2hW8vdpRZjFdAmLw8UkeiaLjrMk7"
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
