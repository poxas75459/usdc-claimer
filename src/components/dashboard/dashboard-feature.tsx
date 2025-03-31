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
    "2hNoYdwHiLRbcycCxbC6CZBXXQRLpY7wKg3i7YQTKK5cgsn7mXWrpcbWrcrxDZmkFhHzeXDMk8g6W4zPZdcsKcok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Afke6fUGknchGCP5k8TotNpworHVGRc9eycHjDXJCmD78kHF33tryRgnpqpU6kTfwQ7uso7Ti3VPnkhk31mHrpP",
  "key1": "2vGrYME2AaCyUyFWkgSb9pF95poFPJsZrbz7WNnSaX2Sath9XqvYqdw9Xx8YjDfhjN51zBpyxzXL9j6MdJJjeg1j",
  "key2": "5tgr4bQV5KHB5qw7NBCR32GG1TxFeuu4xwjwu5M5WkRkcK4bt49JiFXG19HbkwcVFnKZSAvkhQryXSrrNGUrifpY",
  "key3": "5JckJfAXJHqSsoVrN3pgYCaf7JVEohHjYCsNkbVXMXyrxZAAZbt8kWmUmraAJFbVrZZ8upN8PpwQTAZ2KghfRzbC",
  "key4": "4gbvez5ZdKdRg8H8pGJHWFkZ2DNNniHrjackwrzvqYwk2TX8Mq8ztgRnSCLsLuKehVbytqgSbh9nMeHGcX22fqtG",
  "key5": "5TzYodePgJ8vEKBwDeAiVMQ3Snerh4Dn77Yv5h8JygazprHiJzFz3pguBs6nNFQmHw4FsX4GWLHjfi53tfeDMYZN",
  "key6": "gs9jSEXvsUUyACLuXEz7486W7StX3K1bQxPSJCwzapQYNCcVBBfQTsS716bzY2A4Fpj5jfGiSLZWM3CGuU3ACSh",
  "key7": "3mQVNW1LWfH8P3P1F9GV8VAVudNipw2YcFECNUeXyEHssWoWA6VkNa8cRKJZFexiGP37PnostFNozEjwpFMYjG5B",
  "key8": "4ExsYCjLd3FagYkLv3eLxNUupBXjGgEpBTupRroG1ndh7f2AVL5NXPFL9HxuQ5eTB2k6f7MeSmLYLUWwCdgC5H3",
  "key9": "3tsAtVuCHjUnN6dA5jdwTv2ZiRhzvfS6Bgu1yDxeywgs2J6fBaXUMR68nsxNZDDigo8LTxqTz6nfwyToHZvGnaSF",
  "key10": "5EdgvXzehdXkJKff7nsk1TedGxHwHdxMzVvpKcGCirEtXJekDeZWH7gAvBy4sBbVcRv3Tw34Z3p2Grq897nDPwyX",
  "key11": "4D5jfQ77vLsbBHVFsAa5BXhRYrkNg3yWnX1ftdoN2gw8mNQu5zCDptCqYiYSxNHsgmPTr4pCy1XLwuKjzwsjeo8d",
  "key12": "LrStzrJynXc7Po6nrhvJuM5i1JUStzq3QFFY8ojPZVXNQprLoAbomYqVYEwughLRxweeiJ3hrn5TQQbeEBDtXfm",
  "key13": "5byWiYAxosM9K1TubNe7CbvvVyNjSkX7Bw47Tponz64jgUvNHpQzvLj9Wsw6ngqEitzvTB8f1BP5JuSDNEDU8yjX",
  "key14": "2oijB5mK4MeqfzvkFsx1pkcHHXomNwKTK9GBi5rsnsb5yXCKWTZEb328TBx6TcwtWd6viMNMfqYju7umYxWQPi8p",
  "key15": "3dFrjXHvKnt5dtEGhiAvB2d2czjiRXy5nY5Xp1ASskaWHDPPSmiBT9zde2pEDZNkyQ5Q9e4RXg13Hddh48QBEXXK",
  "key16": "5XkyLVoBkasJUkKj56F7RW5tBLJBntpCBELSVtjLj2zgxtQPiB4hV7ub1ciNQFHsqemEK5BJy3wsXfV8kLqycyx7",
  "key17": "2yAA1hxxhn763AAtAvzYryaov1iHMq8djgGhJZ1k33jz4dRxH51nuNqyjVZeJJbWWYqtym4EoT2e9T2JBxPLQ5rh",
  "key18": "MfkEietJoe9PfHE8vjAS15BzW4PYzEngPHCRtdEPMd7hHpZqkmFuKyFwumhYfvQhAHWjGZoscueknzaHVMVkDps",
  "key19": "2okVJHwNMkmpk1fj6RTUJg8PWvXNvYv61v45RwrW8rMw7K6SuJ7dUBZYr3nyg1Y1nSP9AxizhmtapgDuDRzEHQoz",
  "key20": "SouVLXriynLZCvMBJzVLXeQF57CaqFfFSJJTgAA72bXSt3PBziTZ1dUuPCEwo1oksKqNca18ULokkZ4TCpzNA8w",
  "key21": "5ST519bYLgFAe9v7wL3x1XwWBkRGqHqSeNSZyZKpB379ELQZRAATdaQkuVSVPnEqiXaWtRFDgpEWCYWJtLfwsx6z",
  "key22": "3aGSB6fEGxDbjuVgUvyfnQuEu1G5YvVSRzFyaforii2RJLF2pjb6yPZzFvSaFDQUvdT8KoTQDCEpM1beyyr6UGbP",
  "key23": "EKbApP1LfUw1cvoKKCrH6j7p4NRQm9uQP5xzbeq3Em8oAWPrmujjRnu1NR41eY96WLoyewJ14Yi6BCNEja5Bzo1",
  "key24": "5C4A1N3yrhKJMxGJkkUeyPr3wzrgYJAdU6TL7yzT3VLkkKb29QeDbwZytsxbxGVuZ4nzLxibdmMumGecKpj67ML9",
  "key25": "43JfkCKMPvdZHYFDyqdSouLiuAHumjbjddSTgAsXatc23jn2BSMrDPXrxPj6aEbMuR4hWWSpjFqE66G7hPDboedW"
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
