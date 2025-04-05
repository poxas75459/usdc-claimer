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
    "4CFTJ2HSttuEF7qYeeBpKBdhYHmWvXkvRfWbvDWEDzQqAP3wq2jz7L3CpHWiSXhWTMZa1LjDiGpYRc9tR8mkupQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cuRTyg7VymapfrEUFagee5Shsc3EPZ7ZLEPAm1xZWhHGc9DZmYKXHFCDw1ncScJ6oncRzC8zMyGFPEYB6zmRQrJ",
  "key1": "3LnTyXUwhQe2Bgde4X6nYAumsYeNoRjbYio1Frtv5ZYZwer7ymV7KzqeeRUiQNaRpLjvU3tLZUxTM62H1xLoCVBq",
  "key2": "2LgBF5F28oWV1Pw3QgG7akhgVUBf6SCwAGTFNV6ap63QziDSVVQ6mJt37on1vDxoqN1exUHyhUXbgTHE6AEGLR7j",
  "key3": "3p3yfc9gWUaXaB277PGWydXSLthfWaTMUspf68fWpXkGJCm7wQF8xNoDn2ZXjetMDoBDuTcyKG5CoWGazP5UVoqA",
  "key4": "2u2KpignyZYctH9Tp6gdZyrh6v1g95jgqYWgCRuGmTBbB9U6Szf9m5EU3iov1TfCBzPgtbWe1F6NDcn8e1mEVm9m",
  "key5": "rU1n1hFC4RzpbCAsv92a4PhR13q5qnuWRpb6ExcJ1CsNgqCLgbG9KuECYooQiDxft9cXs6tyCKF6WefM3ZN1tEK",
  "key6": "5pp96Q9G1AZwjX4ykuJwvjvdSBJPaTsoGKUicrDzNksFG8z9VbVNwH3YwEkKiPSe4zZDEbReS5rnysLUsG5i71NF",
  "key7": "25cXs4tAmSYfHhYJ1mFEvFJHrX3BBGKhbFQK74jNAY7yS2WJqWiFzqLdpFAtpFUxVhWBNWd5VGFyz6uFtvmqAPfj",
  "key8": "2TinrRaV5gSTNtLVHfnUJnSPwxGYbquwcdUuF8MVWwj7zvYZf8A3zrzLb5fMHftQdXhLyveWLE19QyFgKNW7P3dN",
  "key9": "5oymm1NdGsE3fYFsC2wct29uqKoBf1t6wHTk9eJ8VCHykxuEGsNBvC4wc49xUvDY9knp6AqU6pn47NxW6n5tzbX",
  "key10": "nw1P1fhT5peC2YU98RevfA4LLYY8acVQLWwrVVbxdCQ3eMo7aCkNpnPEQtbkZKLv2faRQfwudGGEy6sdyAFEFbT",
  "key11": "4REcCDxN8SwqJJQSD9kBzV9PcvTaAsGMVcfWgVzYmh3ykmfbWPWyys75qQs5C2GikLTKxAMCKdVB5fnvQaw1xZzj",
  "key12": "4MqgtgxLByaRTxRPFjqGqd3gs1ZuudArJjWxhcqM2mkkGbLVjL7XrtJJMLuLDA8RS2wbkLZnhXWLPti36nti6MKi",
  "key13": "2gfXZx39Rgvq7jk9PsM38cyyjPMf151dQjLPVkk1pFEqfT2uVJL3TSHC4L4ixhM7pQALdn53gywEWZts5hYU5JQo",
  "key14": "q7ZweQccvX7LqaDhabiGfzd5CTtbdfAFQWpwpGvxNmXVVsSi6zuAFjxdMQoZ6GxeZcoigLfnpXkzX2XANT8dcK9",
  "key15": "xchMyhXesMkJeeUCzzkZ2agXFVJ9BjiX9Wj9rUJTzKBRmG9DHVKV1pwUKCeECCbV4DaHQeExvwNviS7RVWkcCMK",
  "key16": "5cov66nYXZYLSLokGJvyV6SgQEXtbLZp72jMub7NnUwjt5EeR4tVrnPboWoPa7uXkP624sXovfEtZLfxnXUYb64W",
  "key17": "3WimFP7uPxAfFsVNp7kPahDj4sm8rCziFE5krw59S6LePGz5yxu8qRhPcaPN9CM97EJ3UzTCj4kzfJC2TNzw7fng",
  "key18": "5xnbVsb4ymzJj8LHgcAT79d1Ga9fA2L1kWK1fULiuA6eksCADN9zZb7vStfY9wYwmYaKZxb3aAFxRvitU6EqXEF4",
  "key19": "7edKapHW32wSLF5L6uXr13Fdd8ocmumws6MG9XsZe8tF3ZqoUCGpRh4becTJcczHekvtxWCWhjRahEFAncjw3h5",
  "key20": "SfpDuDAnWT6DxoXnATwpAADjhmkXVbiLXPjpegjho7jcq96ReVE8q9sPe9WzDTLkcPkrPzuEpqF1tACxQaquVxt",
  "key21": "4tMXe3hh42fN3iotxjwvGFydMiW6dLTxASQKATY7RExSBerr37rmLvZBj3hZxViLWnrr8txrfQTYAxWutEzKM5cc",
  "key22": "2Ezp69R7BGuyiXdQfFkLVRkSxkJPh26kjwFSTpfMJvGsXiu4EAqXMyt5EpthqbPDv4ihwmFGnjgUNounT97zgBDF",
  "key23": "8itG4RwQLHwWpAZ4ruKRh4YAmhjpHSDpQgnkQSJWxosmidpLRuW9pk6eCG7GKPH4Hw7VoBHzaBybnqEt638yLFm",
  "key24": "2w4W5n9jbF358Adf5Cbtoo9FgV2Z68ngNXCsaAo5feUnweBWoV9AGU1qMiXYAf7F7oJSVQLyxEmRf54X3aZMiTsz",
  "key25": "2XZcKTgMRBAAsenxcbGFCQ4CnpnjegWMyXhAXTdao95f1gS5BXUh35EnbNAu5iqvHF6zitV6wfkb3YDuDEdKjUGy",
  "key26": "2yB7Fd2dc3geCQdopi8HmsAn3ZgPm1fSLMYqFtt1BfeNbXmPzmUH5kQKiNCYK31AMfNUcNEfdUpNcYHLvR4puubj"
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
