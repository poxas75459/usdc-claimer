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
    "2j7trhHYnE2qQCNhdhJhSxstpD4JsPienidigtYNBwS1ExgsKm48hTBtQR35dEB8JK5zF9QSpg7EstsxP7cA9WF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4yQuPFGFFfGCBoczAjeMtWCAQmPmgF5Q38ApFw6i1dN8pofJhpqqAysmCHN6qzHgSgzEEXSb6Y6NaTvRgTeUsd",
  "key1": "mXt3ZWjh9K2q2r4dX81sMysrrkx6ktJkSuW4UYya63C3VeGWoJM76WMSYZSPMFAwjErW1WJDgUrXCCRKFmr6SUD",
  "key2": "hkrFbBAzTV9kUB6DsdRfknMpbHBNqEPfdKwYGrkzxL8RWmsxTezG8FsKPPe8VJh8wpDCD322vyPpyFf2zPbVwwG",
  "key3": "5ttviADoCTqtLjKSpcQFgDRmeUF4BfkUbFJDUYgnAN268B6fmbyJuJpkLChMag5RKNKPXpSFd57fjMpNSphw1bFk",
  "key4": "4Vzs66ww49CRdEa9tyyTXpteCZd6tANsmnYPYjNwjpg8MCydsuXyC4JgrXnhZWh9wskYixCmitcPzFWkK46EC5Pw",
  "key5": "RuMpEVbRTAPDsvrLnJQVT5Vj7t2TgFZxv4tmgZ65KvwPfETeithk8icZewyAm4wf4qsBiPk9euywwHHB4P3cYNq",
  "key6": "RgCnfsrHGQ9J7Dketms8QeRQXTebSoFUs3HD1V3xp2e6NCNHdVVqMMH937Gy3ug13SHhKqm4M5bJDPbQ4nFFpE1",
  "key7": "5mpVGKrS32RojsLSFCtNNf5Gqx4iYnFKB1mezveEQXbDP7w1jRxJDjuvpHhSaV5MZCBPo3HkNUeSgnKDN413muPD",
  "key8": "BNG2ejgDPXwvLKXtVi9TSpNWZoTmSmQUHM148dCR8iU56MT9R971P1Ch47NTYR2u1QN24vREnK2TZeqJsw1TYke",
  "key9": "5fig9s6taVfeN57WAdyuQ5JXSVtrma7RthLZTDPVjWcb4FaGuzD94m8VvBm5nTEAMsWoJMVfZNh4ba6Rh4MjNGXd",
  "key10": "2HkGMAKka8nQhfZf34V5UerLPieKQmYtrJq3AY22v8SDBBKpRJmwWjxSMaxENnbL3sggfdjKpbKeLvTDo8o1stCo",
  "key11": "4FCPSnV72BoDMCG8v6ybgiG5M31f5zaLYj3bHv2oD6Zw6VXm3X8u5wP3Wn79Tgt7ryfNABcMFNWP9zC7pKEea1cN",
  "key12": "611YAozHEGqWxmk56VXx9JMjBXyCpMks2dKYci2EqqL745QezYtpeFdxRF99tYmPzbeemWUReht94LDQufdLrVmX",
  "key13": "2fgFpytprVFm1PFaEbtwdBFK9thpgC9cMEdhtC3BsaSZv8TeqFtAB4SyDSQHq6iUrrnP3L8mPiqQAf7VCRmbsRgy",
  "key14": "5Uk7yQRKkUTmym2uLj3eD6AVaQFE1Zb5PiJyCgQ7soSJ6ziBHLMyLoLTyjWgWRpVehmkR2jGRqGETnKuhe45SWgT",
  "key15": "58pk5yJsFZNQH7gPyQda5wZkpd1pFE3ffdSFxxzYZrgrDjg4Hysnsf9WA4mmw8YPKm381R31deETUGm4xi8VDenZ",
  "key16": "4XvJTmXrLARarEY2uQM7yH5Hy2tSgtCyag3nKty8e9vkxwshxEnoBFL97LhZ7AxpHye7sc99z6VCo3ZW5hVvxWSf",
  "key17": "5C9C55L9ZaJLV66bWenovsgbZxFSUUCktCSNkYLf3HJeVWykUaq2gGrvd8mE26eqytmua1Q6bknWz4zvkckGDwqm",
  "key18": "5CXDyaPAWNQkq3GaNRmRWbZjLKEZZJvToCD6JANYG2Ca4Ve4pMo3abS3KD1gXtrB4XFHhfGYXw4c4Wbb5dgMS8fX",
  "key19": "or6A8cJTmgNEXSfY8eS6SxoZWbxyftEP3dGw7eDb1J5us8QkFj5fdLPFT2CsPr4MCYMAMrTyqtHyGqbhjBBByRV",
  "key20": "5gpQaJx5gLotGSPKpGhD13j8F5ufW7SGBXXToxzqXvKjRb4e2nLLHrfQpiPsFoQRJQXLRMEW4R9A5sU2TcPBkKcB",
  "key21": "76qa1bpYM5qhvjjiKuDPzT5QAxKSnMTWSpsec7Hi4HyTtmYVHx9DK7pkPYMXZdUS7Md1266qRPXG77z6tULGspi",
  "key22": "5kvYcYdEstMfyqtR443DFQ8KAd3ajPdy3ch1cdabHGWuwR973YLrKaVBW9H1GttLzoVPSeHANNMe1zHiSv4pwAeC",
  "key23": "3hydtp8UxbyxwDL8f6a3N1kUZiabHKZgGNpaYmTCfTibTa6Br5ujRCFbEn8HQj23Ljzq1zjaggVbGtuKS5kW4rC",
  "key24": "3YP6Vf3n6rysHyLLc3PVUWTtJwvi3cRcgD69kd73XwowsWdGDzxyqcvfFGpeifhuAm48JLmmUBHUWon5K8tqMFrp",
  "key25": "4MJipoXsTyeSGa3M2koTRrcTvrZQUymSfHnzFURnCeZDSnMnSW13vySL6EZEg5ky11HJrJsExpytfL2DR2GuH89F"
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
