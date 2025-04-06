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
    "5nTb4RS2i8TPAqpw6BbyoYHSgihrjC99Lhk7vdopp2Dj3edUKgD7op4yNKPontTUfLYV1SEvnxp1cEyHpkUTJGTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SZ8WvB3taxgZ2npDYoieXgRtJbSVRCtEKoNMBH4vVXurBeYM4wK2kJ1P7po6ks3PgDjQeAtnAdZwiEbS9CNqFC",
  "key1": "4UaWDjTwG5RKmRRojrMiDUBPrGNuzQQ5K1jPJFnPNTgCS2bvBThmNA6gUXKtXasE1YDddy5d8PAkgytMLCe4wmQV",
  "key2": "wcwYN8FH13evfP1nMcQ8Geo9iDPECNx6pJc5YuyjTED9sh1uj1YR7XdXWFEHGNiATh3sx7TZERRtHNZQKHEpw5B",
  "key3": "qhkmY6BUzuoqhtQCPDdihZrCrYLG6mvniZpaWpqGqhhJPyJ7PaP6BM59qboCtV7SgL15hhhpKq5FrvmuxfpMmYx",
  "key4": "1211NYgtobK81cMVfs1Y1CqhRqeCz9aRaR7XVwXhuqDDiNnfiMPACiLXmgUcWYUcGuPetTJ2UEx1opWvSCK48Mk9",
  "key5": "5xy6XUrbvigSUQpYjvijSfdVHXV3ksWe5nuwLsUsc8cUXmmEEAcGzLsTpU1UiMTUwQ2AcG4RzPvvYWfzyPfEzSm4",
  "key6": "VUBz7W4ShWFK89xcutJPttKuSbdgVc3EqNUJj3iZSi8niEmC4D2oCh2erMnBrUNuhep5uWVUG6xWCZSYePUUBn8",
  "key7": "2qA5p2QAnK9Z2ASnrteFPjEfKcKPLXEdTFc5bTtT6Dzdzo8gZFG8YVKXEYWddbqYtDZKbMqYBTeYUQD63Krq9phv",
  "key8": "nES4k65i1AKrqgVZzkmfWezsFzUwhmWmTikjypTW5iYCXjEtHwd61o6irTWCarx3TBv9jowSAWVLdHD9dskDXCY",
  "key9": "jRp6iEBUjB3AmFm1qbvFW6ExRACX8eUmS51ZCb6FgBnSHkRWvYixVHji7sf8oBCdqNTYzSiTEC4orkB3UyoKLqG",
  "key10": "2d5B7vNt5DbP6bNKHJiLxRf9R4jaH4LKQ2zjRcqWKbNxbdjdX9yqwQVrzpTmpSLnxon7MHLoLUNUcJuEatTo6T5C",
  "key11": "3NRdJ79kD9KVTFKMA6y9CW2VftXaMAGAcfZPT6GwNk8Wf1PnFKXy3dEvnVRD3FsNGa9fpsgBQ3X1xTT2iJV5gwPb",
  "key12": "2LB4x4ixuFirjXakBkQoNoXD26nM7KfajnogvA7cPwrHSd7ZPsfGaRVkynGJpNKanAR8vaCB21JQWrXpEpdWb2kv",
  "key13": "52BKusR9zdW4sfRmmcbr4pwfCtucJMWw45ZvSXgAXdjWXbdzAqENqqvXz2FF76Wbs5WTXGkmyvmjapQtebkhdd6F",
  "key14": "5b1ZQzpZU5sQwY8E4Kso8TeL5VcKEFdw7oqVQcgahLyfiK9vyRgJLRiEfZtyiezcKD8kLCLSKVdcHzLKfJ7PzAwa",
  "key15": "Fupmh8Mvi9o576QUd6f7zy2chx1cqT1RHapdz5kjs1h5mcKFhfrT8cB457L8zaHuVruzRwG1UEsdNUBQVMeXeix",
  "key16": "R3UM5s6TUsBhKf3UYZrfHvycYvvsKss5V6yGw7NknQW6i72UpE8V9ZwB5c9t6myd9znn9zGyMpuYWuuwGH9jH7S",
  "key17": "3TsvQpELXHQjgmnvujd9x53eGAvz8f9JmLassNb7knRVcdu3DwXyAjiaxT3YX2KJ3LQcMZuwTm92ukBnSCtHnpVX",
  "key18": "Uw5sCsvTCZz9kQaQ5hWcYSD1pBTcL8rkUn6ReshL24cQUyvkMoJdHWs4gDwiE9dsQ7xWn338jvvUrDUY2CmTKp7",
  "key19": "LaeyAZGYAoiB7YcQsZBKCu7iDd6sDHpjG3NGBX7amezTJmJGDgCkRTyNyMgG1ovAihLZfM8rWnJbbgnR3UUXbUN",
  "key20": "5jWfH5xxZcjyEoGeXTs2cC5GbFN47urGUVEtHNQJEdWH4TkPVBCp9caUygxaAfCtkP1WoAGZfHUnttPj4a7Yr852",
  "key21": "7WaWjqep2a35q3rADFaXGbfdZerTApPGQkd9D5GwGH4Tc6FoGqStv17zGLjPoGQrJJrPkLtDt1zWK1imnbshkoT",
  "key22": "21P2BaNyv4MZPxXxf9XAj34pqAqrSxaTZi9q5yar8FZ4hhtm2tZRoN5GQbVTKsfWxhe7ztYy1fnC2Wwc5s9br4oZ",
  "key23": "2zhB8D6d6wouschAGBah3BVPU8dTzPzk28QGDF1nU3WxitpEqFzVB4riLhMzqZ3gFqpWz2ASaGhRybA21BP3GWdZ",
  "key24": "3acWuVLd8KtdeeVPMB5xQfPBeMFUCHtbK6W5eo1FhkbwWDfC6qYUMTh3PEUQfHyY49hKbaCTLdp4BJeNGKBHEncA",
  "key25": "5hAbPeWNyw8HcBYFTr7JMuNG3GZLe1Nx47h1dbE7GtiwRgp8NAiYosKzZyYRRigfac4TKNJNfUKYzVVxkk449m3n",
  "key26": "5ADWeZogyQN1Q9UtfdQJha1XV4Pi89F16zcmcb8sMs51vR7gDMibgG2waHHPcnosJQ8JGxEPDUihuKj3sLHC8xz5",
  "key27": "4G8YJZR28Eth1PKRZM6tN29pnz6jha5cnuommwTff1h5dk3jmWQDwXrZhmR7fMdJuRmRjBLfjJEjgCX64N67Kuv1",
  "key28": "4P14PFpvfZBjBWBFj4ZETkfnJsiVBEhDh93ZpinSQXyTTU9NstqvCsAamzaz5PXbsb3pXT8QGWsbJdmEgucynmqA",
  "key29": "5d5VKdxidxFoWtdxDKHwm7VVj9QMdMSMZFFUFkjpMMSYmGBsK3mDmAMMaVjyyXeHKTzaKxM65FWZEpE5mfvKWr2g",
  "key30": "3tYzat5r6396jTCWduwcjwWEq99sMmpqHwcnQsNHqsLBj79f7C4rMHPm6iMinBkPCLbdzoGni5CHQg1bw63mnNcM",
  "key31": "4pSTH7cFVxtJUVtfVMQ89YoA262EjpDuvTU4SuQbdqCKsimMPE8ppJGXUKvX9YnmQVLhTcr8hGot5zsA3d1YFbKc",
  "key32": "5ouDPuMVTuBeQRjvExdE1kAY932An4zoy4JhgTCiRg1C19TR4BQ2dEDCdrszLFiKn2vWrcPyRZaKnoXYcTrqz2W8",
  "key33": "66CZji5rYwsTCd6VzFBCY58Q7R6n8gLAS5oZFUALMk6QYNnHePiLiPPiYCEZ7r4uuqrfep2t45U2ngc2kiLJA7hc",
  "key34": "2qg4DDNVJFUHFQzwke1uCfq133fW917NYqfcPRgZDVbYGtmGkXZcnAszyE8yU42visXCcdG7SgpdV5sFvi4Y7GBw",
  "key35": "4hY3iMdoNkF626PTMXYaLHTvdvpQ9wBSzHL7p3tQeFnjSqv9157G4CSkcrKr1GC7a2XMFqjWDrskhkfwSzNi43ss",
  "key36": "5uDqsnfgBBf78pgL44uLzEG3ote46jQkvNEYFfY2KH5hE7QxQcSrP3WMmi5WmxvJngMuQh7Xvte948he3X8AvZjV",
  "key37": "VPPHFauUXEVrDwCsMfbm562QXYxxK7c6qFQwY66Z12oKn41DnU66GeGsshELKkjCgU3Rg5M1YVhSRzzHT9ESUy5",
  "key38": "4pmnbR1BRcJKpzXjQuw72DaGM2i1aNkyP2eB7K8QRnaCzurGREpjXWxb5FCEWSmQhYu7noWFrhyYareW7pQaQ64G",
  "key39": "5VGgppiQUxpevegmumrgbkCLBvefF9iEgPTDxEQJmbQuHnzANHM1zGfdQYWMNn5oxyJt2RXShjFZAWggAeaVhRRH",
  "key40": "5f1a8i2Lwo8XfqWYafFTqCiW4ge4U7RkyT8838hedGnXip4ncAyEXqprFKQTfTnRSJiLP9tLWSdbcwCB2dwr7Q9A",
  "key41": "2h7nb8GMuqSX1vyEb6t7XXoML9LH5w3bjrvPBSmoHsPqtRBdJWNj6FiKm2XsudVRfSAEspuiY2H3YtdKd41VZUGm"
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
