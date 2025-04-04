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
    "3yNP3YVeUoMxYkCApb39TVdAva8Uq1ubAt67PYj6Re9faohatd9zJuwQAEcFEv7qhkSHKZr7tmLPd8LxBy3owSxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q3iGsVrEEG4hsx5aivbi8dM2Q5KGCeAtuD2tVHccKfiUywHJmcWGgJktepYxhX3vBWi93StbAJZ5BENE7NSGwpY",
  "key1": "2eSuAZMG35qBKHPE6MoLC15UBa73WpE56BNyVjcepvx2tAPVwfyEXXovE9upapCfQ2AgCeFStv74E5fZjiVLnQHL",
  "key2": "4bHVbi2Ua4EQ5PCBjCd9nQ3maAYrSCAHjwg4s5WYpxGNPpAEeosurdJoLJCHKG6g1iLT5s4xyvJ3x16RB6v79DLh",
  "key3": "UxcNwH5ZUcfKYZmp1MjXyz58Sprwsi9WG9neavPFHoZz2w2kUEpCtyB89SBR9SpeVKAhxUJ6hRRNvgSq4KRrurk",
  "key4": "5ugb2vGhWhVPtmf2N5EYAggmhKXJS9axt9adw8vxLtgyT8GgsP8cDGpEs6Hfo8kbKSfZ3YbogLLgtQc3NVxkywns",
  "key5": "5GWEsULSjHBwbTCJ291tSEkgRHiJNyRWVKCe1drLjKdNQeBRAk2o1FkmiSHVzSxg7fVvsQsGu66pdhoeDU4ZNYqf",
  "key6": "26rm8FNPG7vm8HeQ9BgvWeM3hpyhWbTmviDsJTDyQXJ442YoD8Wt4gD6EPEG4zMD6VRDw6JDgHhZUKfRfEavKMNf",
  "key7": "3CRPhrA6zT6he7poLCgPwgcxZbeZoNnFjjEj2r9Mm5HLNzbW94jnA3bM4BttauFzBfuQFxsGuT8eXz9hV2FsUAAE",
  "key8": "3hQVu4pqAB8M2KXNdRKmcKW46TDesutpYxCXQvpYBH4dMuESd6TNnD13RYmkzZBzDMn4BUop3cjEVuZyRCYbiwbb",
  "key9": "34sUHqjYXgNLAz7Nsjd46B3tUsGtknWU7DBXqMUd6NDJvdBgJ1UkYXStpHgqUz3HzNyXRC6giL24AwCLJtZe7EGD",
  "key10": "3yzQSg2QSnBWeJFLXmsJ56wUEhSTcMx5MD5wxBTqrzYstk2tWVRNi9edW7zwDqNXyJwS3YeY4jWH1MWZpNc41PJR",
  "key11": "4qm2UTN9huJWb96HWFHdygqrV5r1cWeF4VGWeENF2npYU8HLe9ggbk4abb2zi7ZesyACZRkbZtuK36fCUQLARgrv",
  "key12": "5cNtTGpCjkLhb12Af81kKqU4tTeCS5oFuGp6tzrP3Zae1KTmfwC54xTVZ9EAncgDLoC7ruNh5QrXNkwQ7BXFhK5",
  "key13": "2KfJvtAVnqEZYxKE6K4e1L4XPojFBFg2ekoFf7r2z2cQnXF7eGrTadYChKb6wBdPMFSAoxr4TEn6aAws3TSVr6ay",
  "key14": "41qLXSdnaH1MAc6BDvwWqqNN6nPMbPKheSzFPyPunMdj1HQDLWmdQAy32RXjaMk6fCp2NmtbprC4v8JcE13ekpXU",
  "key15": "43sq4zuU4X3AuC6Gsb3zmmJy5XMSCe3XgkN5jyj6nhqJKpYkm9zHpoNK4T4X4F1FPvBGHMwux2RdFBYQh1XAjK5u",
  "key16": "2mquQQFEtwY6ez5BD6ukyBrrY4v46djZftzVs1Z45rtYVgceWkNLsMFekUBBERb8qkvuWU4YLvFbmSFmk5K9RtRx",
  "key17": "3f2y4LFXxCY8uakWip6kCzDUkjK1tHXgb3uK2U3PKmcKyNuuY3REmNnDmDrBom4S7LKtzrXnbS7KnKbX3TAXk8mg",
  "key18": "4WipKfewg7Bb93N4wnyniuo77T7KVRyFkpbk6ePveTeAYgrXhtzQ7aicKAaPLVF6RqCELQWkigvz1jaCw6rrPVKz",
  "key19": "4TsRWwDL96f9Mv946JPUWzgbgHHGWdD6cFoHtoYUx5mtgak6qnLQPuUTnYCH5D3xNReoM4QDFeDpVjQCAM9vHRRB",
  "key20": "2S1MP3jHbQJxX25B1kvhes2JPmE7H5fVvNGfCoeJdhbaunXPMsUF1eVRgkQAcpv1m5yYBJbaZvzggysUiNV89X9i",
  "key21": "sPBNfoLH3HSPEzSHPFHNEhfoHAcYHBx43A8dUR79jSFFLvFuvqbFpp8fLGjd1DdyoHBtnPH13BBhzVZ7Ljugpzb",
  "key22": "3azuFhTj8mB2iWsPcSQXUEPsxxpwVMHzN5PXujcridqYFnTjE3UybytmsanXzyo2PQYt8GbysBnCU8Vd4b25M6V7",
  "key23": "Pizww8zKcZ7wv5ry1UDnznXhBUssPmhN9nmaTfceH4gPAhAPCysNXbfYfodHCY56nCsMejMpCCfmmFNYFJxs4jS",
  "key24": "5weenEg4dNSqYtMWMwtWjaEupwHymHq4X7b53QGNsd7dX3nhW4BdwpH824XE2diucLcoruG8mwgNpCSGPZJWfqnG",
  "key25": "5ujL976MjWMiEvofkfVXA8DHc3ui8ND7Jhjuz6TrBLFUkmZ6y3uD9BMD9iAonrAQaTDHnRo6GeZAUmnwP8xbQf7"
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
