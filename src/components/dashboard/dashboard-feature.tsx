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
    "24fCXrgj3QMyHgAmLwCFhct9Q2eUSKqLgdPaBP1xQUc6WKDEitWbu7Yh8tbqvX38RiRkGJMKk8J4zZUdADqHvPsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QP48iQjRWbeHrHsgLHXUkxGoekuGJvVeZJTcFY7KWbPMN2pQz1mo5j13V91Q5THMhHoD8TwZHvdec4G85pXsK85",
  "key1": "4mUcob196gJYyqp5FzgDbqfHAaPv5NFcaFin7EjwFEsPFhMXpiiQDo7pVx3dMU9RrkivQDajzZd93QrfbBNzUkLM",
  "key2": "4LtuX8c6SS3YEz2kxYtva9pU6emXAUs5V1XDpQYDcGaq8iysQPZEEskaCuj2Vexn8tZuxGEzNb7Hnhp2UJ6C5bNJ",
  "key3": "41EiSVbrRjkgTgXvmQoxP9EaiDibzcXqoYVf6NiAJCsuVVCBKeDHeKrf5m6QnVKnCBM2XXs3YMiHh11EB6ntxHKc",
  "key4": "48BFUS95KK5P3aQH5Avygix2kCGDJDkMcQ1LosNYaS1bkNxHKa3xYdYgVxJ9q7k4bybZ1WZwqS5cyo2cLpceAG2E",
  "key5": "7bkp7yLq9QF7ssn9ax9tkney6eXX32Xo8B84XMM7Gjs21cJeY9KYCE9VkF7N8GhZgkpoEFxKnny628a23RL3hyB",
  "key6": "65FHCawgapDGeRa35tDDxy6Rj5WsJX46b8BW1NfSxrEN68Q9KGxhrdDXVNd9FMq8W1h5EJw8RTKneYemdQLfGE3P",
  "key7": "3gYHDXSDHc7K1FNdUDPj3PxzMejCLoW7MTGbiH5N6EY3R8PssQPF9Uj8tZAE4AYKLYEiXgxKY1DNjQQ9f4ihTapT",
  "key8": "4ASRzb7NLXXEXSoddSaXXYh31Th3MXvfQ9woYoUYBhyCvYJAVPmCkzg238Jcddv5rWgnLD5sCAL8jxDwKKeUbECS",
  "key9": "29RpfHsDfQNTtzERqqRK2W6gwvmCRaC1yGbpKxCRCfoF15wSzmLbhWGLbrGrVGJhPov3WdT888g5z1i351zgbRy7",
  "key10": "3vMjpx6NNZXdy5onq6UaEFRSE5YtWbA7enQ7PZbrkJMdvRjz6b8rhnmNjwCpytcvQdrJ37yX4Gub6QQg3qt91VeQ",
  "key11": "3Hkkt8wytYqHoevrqHLeeNDiJSjceHEMHWU1ga3VLSysqEFDhFrzMc2P4o4v2eDpFNizjapwU4nyRrN5da4RtUXP",
  "key12": "4UoeMTq58JNsDEmWAuCmTgG6iSFpCqwk3tgTHrYtaiRvddondc26JbuiRjNViv22oCg7LJCgFmVhMrVBtMtzZVYj",
  "key13": "4aJmfz7rjABp8MkFebsH7MYv5BGEJpo2T3Q9nFnH7MAimVbcroCf8F6AwgZNxyfxH3jA92U5sfVdvhsXFu1zPrDF",
  "key14": "4eZDLLVocUFAhgtqdk2buHE5DWJXtmwwBrt4sc6Aj9rgpjdhesAdxfyhoQ9r8gdaAEmjyVM5WsMDsNDKFdiB1v2T",
  "key15": "5GmEonxB6xcXKrvbcUsrKrYAjAnfwwZJ7in2jSbhVq2JezMLFARa3yUJ9qB5wr1BfLiKRvq5TXQ6ZgPHM3uh8nSb",
  "key16": "4omdfBd8MFVK9MDeCp4NZXaoUQdNvsGpUAxjRCBexN1JZkRnvPL3GenjT2DTz6Kjb38kaivbgw2CctgKxYKsBLQr",
  "key17": "5EEepi9LrDMUzYguRcCWQFsMDqwny7Xz8QRQZZKgqNAgt4zoMEpMegdxz8aVpBkLQapTeNUJdiFNVg7HohiHwtLv",
  "key18": "3YpzoF1YuiVQ9rLCb9YDUrdzZeADnq98D86AdDz1gJ5XDBxqrQyMjhFWHSqf49Mum4Z9vkLJ6fNoP1gobMmzZqhk",
  "key19": "58JsCNbwxP4ZaYi1BPpiTiKk2QjvcmxXvsYu36GEQjLBBtaq4iTGxNCXmzTsuvWRU612Lxpr7HaRfsGTWERd66fQ",
  "key20": "7hj725G7vyEgkpLrXCJ6kxXmeNPtA7vhnZrrtVQF9UK6dtWbHCM5X2SVMSqAU1ZXMdVQoGKqey3ah1FFAqaLFQ3",
  "key21": "3dYQCscoMHtzDuzsSB9aefS11GsfCajDGuqxTBm4HNj6iiPh3CyM8n1ehGe4E7EgxPK9b16Yp5M1FCJjTEi8cMRs",
  "key22": "4TeNAMbpsK7LBDzEJgXMdZmXsPap7CKbRBb6gkxpfFUMS16v8TLmqch6siZDU9tNUneh3yRfLuTBVVHBoQGyuSeN",
  "key23": "4qx2HJWRbXg9yYE7oTaZWAfmpaBmyd1fFesyQN9V8TzEJMT89pvFGPnWtJ7RurPvgCQxrfVyv7gsmfyzJLgndi8K",
  "key24": "5DxJHdY2J9HpwZvx3d4Sx71eUYJZPigys8goHj1p9qsFLyoyVb39aYKJSdDAwTWybabhCq3GNxfEHmfvXzjffBUr",
  "key25": "5WHcHbxaYcNviqbBEYknbC8xLKk9LQLzWR74eApPGgE5D4AQ8wKBr3aQFKpaQ1t53kCedL29MYF6823giytQMHWA",
  "key26": "4kCATs3PLtowUvtLg2dzxZ4bJRjqtNbian94LJwdwcQR51KUvJLTjFjMMzBSD63wQ3ZNdnGopLgCEBCVZD9wxV8"
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
