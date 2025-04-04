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
    "4vPm4gnsET3d1FbGMU2cLeKPBd45egedVAMhkbwRTqL9o1BApdFJR5j3rgJ1GahwbQw5t9WzSnFo53tgVBPqhw7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXqsPJaQbgs87kCupMCaahMiZDxkK6J9vJRQHk4GMfsnhn3DmPjfGGddZZztR4psuXQSf5AgVwGvDUAninnGNoy",
  "key1": "3se6k3G37qSuLpRWuHhiJao1avCKdGyr7aG5YSCCrafeNuHNb3UDRSG67cDHwNjSW9ffgoomTZJsWT5bDUFh4mub",
  "key2": "3Mqhv9q4FAFxbESTJvcaGtcmj51hUAWPniYr7HxHG1yK9VGo5Xz5QN6483p5wGBjY9QxCsz2dQZo5djto5W6rqXv",
  "key3": "2DDxqC2hwzTYanhXD3vLNYYLNjnt55ix5WCAaXxLK7yxevafdEgciZfZLxZNiSbLTvYYBiW9MWgMYcNyJXLanA4c",
  "key4": "bv1yKLBwPCqkHnmNvf7heumX7dM5kqU1DHpp5MKiDuiUh7Vmx8k3DqQt1D1bCTi37iKfgvu8FDH3dTZXf2WcGNJ",
  "key5": "n4rQjbT994zcqzN3NGj6X1xNAxHczeuFQejayWCy3r2zGSpb2qrDzqCftncmCSMs91UKvupHV3ujQx4vi3wxKJG",
  "key6": "3ACEPjmunHJCe38ryK1zWkpU14bKMZ9uNpf9k5SD9DoFvdEiNbqqAaB6TgBPacaw6L34XnjeWYFJh3ZMVDwMGUQF",
  "key7": "5foVdS5njoAajttuUVGYngnjWJrYVmAGrExLR1S1zZm1JZs2iRBNPxQSEXBes9xArEVRDt7bcLQei238An6uFxTc",
  "key8": "3aDvjxjR771oyUBYUtgUWpmxEs5WLZHgdGnPUDUqQruAiyvBvzv9wdeZLL5yJKgrawmjS5hj2EG49UN8BLKzLrTa",
  "key9": "T5jJWWxhcrkVrbM4924EYbUUDQrMWUzCiC86qdYFehUWWDgPmivmoC24FhJTxJcCTGdCGygbiyqQRueXRxZCx8q",
  "key10": "5NuEe5jc6pmjDPuAdZCSXkm1q3AZ9Vd1G7b4sWNkRrHbMF6q2w5U6GHSYXUBEn8pdQkb59kHaBSvsJo1cGhc92F7",
  "key11": "5jiEBBHqErfMjCHKgihA1FYS1JTosRAcFrib1x3FLuj3yN59mftJqJStzgdjNVMBNuaungzugYhdB7sGsfKAjG6y",
  "key12": "56WDFq13MLekPuaHYmh7SVEx3ZRxNvc8oXs89vij5yMpmw4gAC5XAFfUbqKpMhhapkwJFapF5tPnNtFKCvX2Qrxb",
  "key13": "5VQR2aSNFgbFYdxCoaAiRkeDWAQSDMs62T9GAVrAvShwMJpWMnhhwTuZG6G3S8aupvwSWjdfKgP2skEMgsQyxgE2",
  "key14": "2ZLV9fRWy57KTJrdXWgmts4SXBZVNK6rC8ddQnFyiuifq3VCqPnJqiq638TaUyvn9iHhBxt6pEmr4EVtqhwx9tpi",
  "key15": "4AYUKTD8jWDwbb3WQHYf478vGRuyzkzjwV3KSx8zoTNYXHmYR1GCVXjZdJT6SBKw7Yx6s82LxKMwSsrQZywpVu8H",
  "key16": "3VXhpGC2x4U1MFsV7gPsPwQfZQanV93K9GAGaYY3jseHi7T3wPkA5NTJ3RrCJXB2BsoaeFsnPEm9B3qzZc7FY1Cn",
  "key17": "noRznU1NiPk55oeThe2WHsQAP7kBEb7LYx4iwTm9U9c5r5CPYHE8ttUZUY2G72bUiEG84RT45Kq5n4ttSTMuY5f",
  "key18": "28qsh6mwpTB2TwA45YpyrrTnrRXLDo9ApzqR3s1kf9FGfwKJVtUhnXK8ZcBBxpEHoRQUBjPE9cy5Ttw5dHKmKWk7",
  "key19": "5obvLdXUxESXgivDTS2swV5mbu7RcN6wJhEcm7iozonXBeeerdV6xtefjQudKX6XRN2JHmWpmLefWFVmsHxxitb3",
  "key20": "5rmT1ThUvb3FPkgWrzd1xv65pQ84bKvqkqY1ZDJWZoZZhnxjVJutV68f6pCacgiJVdnBNXDgxna2Tg9vwXmKtbuy",
  "key21": "7fzJozc9vF8rgPvdez3sRAC8pE9yqsdsCzJCuxqLUN1sKh1zx96JzC2qekofWP5hfen6ohcJnjU4d85CSaDXEaL",
  "key22": "5EnxLrE6ZiVGYjMmPJtuvs89WdRg8wsoWGHvyKQyXNj8d6swUQL2HEhHAJ5QVL4bKczQiiXY3gzUvRs163EMLQ8p",
  "key23": "42usciwgy3S6HCZdsRRTunEV2ugHs3eggXFDQ4Eg2adT4vrsM3wKAP5uMG5sLtskLwmrhTh9Q29gWmA9djqmJcaA",
  "key24": "3bkULwmrHgqWVyAiGWhKGauYjifc3mgTNsM8qUFMPXLV6qPKo6sGQQphZ73VY5JfBvQEosznG1zsH6qPh2L2DJPb",
  "key25": "3oVriKFZM27HePSJ7tYsFfdWLXakJM6BUswcaGRdhjNLEMQE5GUYjufgP5KY9sVZcAZpESRTw6C8kjhd7iA4gUeV",
  "key26": "4dn726GxyFEaGnoC1Lp4mmG1SPR6gpVAozwv93g2gppegKguharHsyTsk9pgkZyBKNr9ecEqbLY9WK1EMMTZaMAL",
  "key27": "xkkWisyrq9BcCoTagxM8RfWWouCYJdWhtUVnxZS9zogLwXecuJh3mpsQUR3d76nABKgRy8eArXYw2RZ1Sfmo7P6",
  "key28": "faH4DQk6T9WMa4uVJVg6iAL4o8kn8zaeRNHo1sKzZgeGHP7Uvv1dxULgoLNyTuftXXB3vDedA67XExWTkuUUSJW",
  "key29": "4vSCrtk39H7DG7JmnkS5pEW5aUJGuHNoLNWDM4AWJEr7YCb5LVgLQfj4Um9uk2XGxYAPH6XyUg2nfL5tJMweD3qe",
  "key30": "3zeQLe6mwSTAcbooDW1oj98pqtyHeYZ1VdKizhgHXLgQQ4pvp5tVozd6c1YiFzHjSGxYonuYULLVPFjApEziL4ea",
  "key31": "6498YtgjHVHjuwZ6WwZSW73TkFZvuhaG6zW3HXPbfdTFCxrDSBdC3eM6YRiTWtdLuAGaE7WLtjNchiJWhZAanNNw",
  "key32": "n6rF1CQikqAtRtZF7wmbCmppwG1TKSmmqVamu22tuBdbcJQfEHZ643RqVQYzC4PwkUomVnwa788wN5qcH4dBqMB"
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
