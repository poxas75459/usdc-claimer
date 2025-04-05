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
    "3VNzUvppvi1R8MSsrxvHYz8xxYoyyLsPR4pG38JqhQcpPZm1gWEppXwfK3fTFHnP3imv2muc342pK7BH6bbTdQU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaEz7Gd8BZb2AA2dqEq8wd542bhaW5Gqv1wxedfdazo4Aip6kNLs99VjjppHSzaCBJUjw87ZyuygHBDpCrGEuU",
  "key1": "4sCnC4err7xNst5Ns5TtwYnkRtCs8HbxmHfK6c61krgGJnCXERFXCsUQzVoLVQdRHjUpM8xA8itJAAwpGSpGHJdK",
  "key2": "5XCEAMdHJGL5fVo29Wu1wcKaDQJ7fEXPixkKdvmtA8KVovgHkijmDT3NpjPbfuRzZoJegQyrjnNNrFUoYrQduQuc",
  "key3": "5yMb59T2DrBNf4hf5519ti6uisuRw6BLzPWebrzwWFR8GeJsQp3gwS82KRNS2m4iRVqXTP127sduVD3jqruzMGPr",
  "key4": "3cV3rgvW2oLvzuEojCznogQFatopth931i14H7Egsko2quuSmqhNGGFXhFWwrvqDB88QfvxRqAG9Pnu1ro8mC3Yv",
  "key5": "3ALenBGD7RNXuikoM4NnwwnbhPjfmzmb9C6dyBuEQBFYQtzA6mVdszdbCtKyyGivfLsL4ZYiH7RdHXyugg1jKBRN",
  "key6": "3M3r5PAFisNS8NJVFgtSZnEXtfMp8Lio7avK5G1vwQJwQjtp9EAywqDqMP3dN5ZrFybw4eUE2hLjWnCSTqc44UVC",
  "key7": "S6ZUSUA7jZDzv9DiqNgkHZVLmRSFgGLZeGJB5rqQGdYG231ht8YQMyho2ABVrfBTKqS17YWKQnyzxCoZTE3iT2y",
  "key8": "3dCKfyGC3AZFCui62KWRBHaFUanLeXGioJXt4qnEpi6Syqm2NyJfcGjbcLT63C4PKvirszQMsUkdvKE1UzDDTait",
  "key9": "493Pp7UtNJEQoQgaFLxbPcPEmsdwjdsQpj7TfzeKSCv7sjmvDL8okKXw7vVdoryfLegqdqKnA1xHTfC1BHQUSDDM",
  "key10": "5ytJpZaGpZU5X5jSEgENWzDs1opXCQe9AYyWgV95GRR4QW9PQHbk1RcfsveaZoAbMk7gHENqwQ8s5RSXNp4Y7tH1",
  "key11": "2ZdrVDKFfsTkDFfy15WgsbUB8HczGPN9a1EiCGA89rLjVmAudsPjxHcT3b8sPyCFcDqvfvAZaYFb6QLGbcm1JNDT",
  "key12": "rhiRPgwWtYKk5GpCZk4aQanxT46NqUAYACVo95NJhxLfvzyoucFHDPiJRCT6krnLXa7APdH4arBbLGWMXERVsdE",
  "key13": "3oJmbh7t8awsGk6rnkAatywKrbzydryggSKdW182ipKK3mrEiyAi9oxrD7ZdniVEUoNgU7jsDBJiFUWZVMqU1eGD",
  "key14": "4XtxB4vHZrd49ewgEqLDDqx4D11YMV47Eqa691ZhcgtWv5nsLVWHLqPuu6Ns3qxkJC45ZyxkiGnoNi3jNjske1r",
  "key15": "3RoBGVcP4bzKba5P65hkrXaZB2Lhezrn6ACmTXEhu7BAi7NhJRAS685S8oq3CCakzW8Nvnv7odAPKrFBw8HVHXkD",
  "key16": "3MoL4N3RsfHjEFz3RMHGjxMTxELZvvTYgruGZyiPojuXXvPjJV6SKRmQxjwNqbrMiMAYYZLjh4wKxJ3JL4y1z9Jy",
  "key17": "XbNMznzobYcyJs5B7UDvmKcPEkLGqgfksGVT37GVn1rFJFUKGrHSafwyAGmdncG92GdirD4fpN5ac2xBUdwpDyT",
  "key18": "36pMFbFK5UghmvNo7ZHgs2ZWjCBbFLwZSmPZeLWftNWToS7Nsy4c9yC3NgPPdyQZj8s7NghxET3r1B2vqbnztDbS",
  "key19": "3r9iHiXBzEfwUhZJppu1difg5GPdoPe3C1xTRgu1k1TGJ1336uNygDQ4qp55VY8LMeq3KfN5Rk6BT8Y5qqk6wn1b",
  "key20": "5ECGQWJHV5fnunvXHRWC8EQksU5fbLgyLrrnGguxL63MfKNjDF6aRroHm5nLjMShkEVZFkxQk7xVCHKnh2MqW4Uv",
  "key21": "XmxfJ6t9UZtpST1e7HApXpsmcmXvasJ5x6RBF8MdouFRzTKtfqwGozpZdy8DaUeZEeQS9jdS6Y9XDtf9havq7wf",
  "key22": "4agyNj9N41wyjCjJzmjEZ5hhyFnbV2mEvAyE4f1pgkMbdvmSAqrJYAzkC3pCmaDMru8Sp5qz5uyBT9g9jbbKvmRV",
  "key23": "hSTw4NknQv8CibU9UyLNnvCifCmqs4sFgUq1RrcaboAvEjfSyujWT6fsR9Shn5Tt4DvJ4vgtyd7Ly32vLM7TTYX",
  "key24": "2u2kH9W89da9upKwFLoSNZTti596Sx1WMVM6TR5S9jWSLATFSiV5Wc3BeouKh4zfXCB2zHVjHcZVWoAJsNPv2YBm",
  "key25": "3NxBVFcdEQbLJfuSHS3H2LSLiMTeQHe9pZJkZ1DS6acDuV1Uq5sdkgC9xUYbpe64NUkkidZEWVfJKFY1jU6ZGz8p",
  "key26": "5hGafz8FqEL3KRcid9Db5S5wF72CMKPcaJipJWo9LNcVJ7jsx7QGPVgfbYQjUF5kZhGMW6wN29MW7EkjhtdtiHhJ",
  "key27": "58ZwDRrgFUZJohPBd1QAbSUZSTHHU3hBp34Ur7ztiJwvLG9Zd86KHMMn6kWP4h2aFZgEPTDqyhyqiB4S4vcVfZL5"
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
