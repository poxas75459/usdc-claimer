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
    "4n1j1ByShkaYzsostC4UACanxnG6fZed9zhdmLhPv5ztY2B4jttxZt6ByD8pkQw1euzRLnQAV5MnUgLZXE4Hoij9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MsM4HUP1EyDMgakSfYpPYzRZ96LMEb3SbBJmxV4e9qFC5S1zpFHo3TQaxrkVnQTaZaCD7WmiiGFSodeAfyukazu",
  "key1": "4B8EogHWRPiPK5dRz9MoWSFPu1uB1NoRHyAWDdY6J5d6GvMdkQpfSvkn1aEtg5beg4xaAwX7DZjxTdHNsrRUYRhf",
  "key2": "3Sh7vNksm6fE9xq2n7RgkAqzf9s1QJQiLn61jyt9hF7cXd88ajjc6Q6p6rYxCBksbwEQ17jL4LBBDJ4f7ZrKgfBq",
  "key3": "4C8QvwtbJmj8Rr8L27iVgMUuJviS9EotKubiwPPFbwMAdbMEfhvTaxpsp3BEsJYcXtx6hRYXBXQuY9zvnBHEA42Q",
  "key4": "3JuSBgKNtigxDSJuDBngzXhBqbRL7BQdVUhPZCtabFwv94k2vExeohGbvTHyUaKoDmJfUurGxfx4k1sWcHsvbrk6",
  "key5": "4Aik9A73EJuvYTHZPNcuC3YTXu8S7V22raQCcmDWz2AcVBpyNCSNdBqERFe2aHiZXqnNo94rSupkTZohf9ZW1odE",
  "key6": "3c8UyWbaLiPrnQQ8PQUg3RAedevEJLaFRuR4RMCNG7Tos26xzY3uGEQuNeR5k91DwNuHMPKPPWtkXpjFzN5EZVez",
  "key7": "4kvFkBNkfkNmmpTfSQABw8R9LPqHyjNQTSHUyTpoVHpaH3UH7YUFKgeY3ipHcb5jnEMmdeRUkaxe4864iTN4sFTG",
  "key8": "PMQQ9vym3AckUKvpwpfJKBed6wXauBJNDtzQaJiqWzSoxAQYT9JBq458jMH1SryLsjUXjJbUYRNVaEppj4cUDvy",
  "key9": "3fvXxwV8VBxJ2hj6fWjLxLjyTWyZGYbvzXVuL7VdnKanHPoDLV55LyEQYyLNQmZrqWgJ6SAKhcU68i6JT7k3zoFU",
  "key10": "4mBrESptvzJZdciMd2ahk4uvozszEgiAp8Rue9M3oYJesCGjwn44kLe59itaXWzVP3FcyQLzet2n2Dfxh7C58Rc1",
  "key11": "67UFyxf2hAR3SY9Vuq9FQiLLuhH545z5PGGTBbVJ6RpNAXHcSf5YV475Cwu9PE2X5VYusyYHyEnZEPEDcYkDjdJY",
  "key12": "4VnzVHyhTFcc2pKThenj8f3doXBv1LYNGCeGruWt9TuThfXYs6xmQroEUq8kWmGfbAaHionKVHaGvus2tRSirpXW",
  "key13": "4uCNtMTbJf96Jkx2mgGpWq7gNoh6wmTsLeyktjrdKPvQBbNoTpvAQnm6VauwJuMhxyLk3wakVWhnBJ55FN3siS9L",
  "key14": "2zzBkHA12bU2VQEM6VyZocamgQZbazKDWnqXnH1nwKcG8HveGktxaUQqcmvg3RhJLrVujj9ewrnfCbaBAx6DRMya",
  "key15": "4BGBTeqtRqge7AfnMyxE4AKm5cn96ugE1dkunYFRCX85QHSJyXDDF3PDz9Px2kSxqcjrETZSsLtpTpH5oh6QtDba",
  "key16": "woRVuLYZBNNJQQq92M92UR9bDjY7hPMyvG6vnFDWemNxd1r51c33mai39pFEX1NcoXcgVj5sjT7SfbujrufD6Cb",
  "key17": "2mqZEUd9YyKKoQUq5PMCwmBQc8pXAfMBi2o9wzx6WAzJg198qsLEBe7AmKgDEN16xMc6tGwMTAnv9ZyHfsz3iquf",
  "key18": "5V5axzndmAzkLSnqgoYexCYB6V2Xn3TUKnnegf9voSLShNjFfTijMfhDHBcJggaWyy3pcmaSXNPTvpCMuKhAgNJP",
  "key19": "2oKLgANTDDFvgwoWi4KBJ8z2AWiwUVGdLCiBAKnnFW24dEEHTx4TKkHtaZCzRe7x7ZKa3kzBZ9gXungGvGQuPZfe",
  "key20": "4tUcPpoVHTwZ7Nft8Gz1g9fp4JFSqafu38Nz22Cepiw23hJXyotBiPVrFfMsjjH5ZDDwF5zCiVA8m8ppquwNmyHy",
  "key21": "48aq44YB4QsnB3zoaknRDL4L6uBJ3gEwfcTPfCD8KAFH9i5uXqYaksBHzpVy7wSUP3tfTqphqKvmem8D15sKajUA",
  "key22": "5yLRgJ4e3VXr3Z5jTkXiEU8S1SaN6x1zV3CtZuAerq7afYr5CzoYGbfkEmUhJoaVkRbEzgBmXpa12cLyTHR94bty",
  "key23": "qz45AENe2FfNBLiA5DkBidLoVMxuonpT1n5hw3sprbE5GdDGcE4X24GeeK5RDNLpsZzTznDeumXe5o23fW5G2Am",
  "key24": "3KY2Q6dpEssYi9g6CbC9T9TxcvRFjdiG8DywftWg9ZEvCkLadBas3U5Kvb2G8QvihgC4NA2YZzsonXmF3d945ygT",
  "key25": "4BAR5RMKNeMDUytqAVhoYermWoXAV4qKAGqmAwmfDYpXjUTTMrV9uixUs7LUZDpRvBURPtTrbDZgZiKUyQQNJmu",
  "key26": "5VRBjEnAWQP6GWQvNTxUuFD6ekyqj1RAXSxjrWKWjqYKSP8jYht9eYFdLfiUa8T3a2BakWz27hEKCzASjPEaZjGp",
  "key27": "E1QsBiJ63eJ2uDZXVGb4YDYncZxM7RC5GmcVCroMUupiodmW2sfHxNde2MWuZEfG7EFNCEiLroHiHA6jWDS8fde",
  "key28": "2JT7BZw44LKNBFmjQgjjJDBCXg2v4LzBCAcRZPMDmr3bQY5xM3PXUCJjQqqFhK17GizC1PhXoYTXLr5ZjvKxnGbH",
  "key29": "4kpRdUMYGvbXGaiaNuHBPfnw3NirhXFSa8CsWwXYMmHqXtLjgsH6xKcmbKfPKEViDJxQhS1Fz2znZcRic6FfNtfw",
  "key30": "2qBrNujs5ZxBNXpE1gWpk6tuih37GfjBWLqZhjftwTqjFH65pT9vhGmta2H1nqSu7hSjqLeFrk1HL3VVMkmTRJj9",
  "key31": "51kMXfmG6RpXCdpU7icFKxAxjStYU8JDv6SrQtXkQsgw1aJgW9mzV2NEoz9aEWuojcn2AyRdfdVPbdNPR2dhSd3M",
  "key32": "4vrmU7qoKgjMkcUnp4BDdWZPN86T3j9X2vPyB8rRwdq1GSbWz81DHXnp5kHvVpTW9qfaNcyBDmDiknguXHUpwDYC",
  "key33": "3nPbnBE2fFK8VsDas9tHFAktvxXuzsmAVHMmMhfdq4vdYSKgmYfh8xc73umYW4fV49dmxjsj7PQB7ES9kBsLvPgq"
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
