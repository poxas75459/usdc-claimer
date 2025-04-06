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
    "Pb3bXmEz7uFCx3AZUFLcfPWXvuZQjK9hZDMmGGVhiAcwkGoMt4gs3jZGj5qbxzJbMYfvyxZqYfUo6XdSGN4xQuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKfvKojZSPSMFrPGMCyWCrCv85rsUyDpzjWAKjc4xw2zzpBhqrFxVCoDBasS7989xP8KbJ59igo4hUJ9nqGLTje",
  "key1": "36j5imQacHxBpSwkYJ2uuGGECi6yuohQzJgKzE8Trd8QJUaVJWZP3D2wtEmgngpdqc49o5BJ9Dg5QLJfkzxST6yA",
  "key2": "633GVrKqe1owQVhqYin54SWtitcUjzFXV3VygSWAcnnSkvDvxb4Xe8AE8UT53QbXkBqDC9oaXuDGK2RooZoE1FQ",
  "key3": "5x6dR8ffbipzHnGGQcm4ZhmgbZeXcNJ9k2FGtGAYP94Tf9D914WhR5xdDKe3pERfycPos5Z5tKVk7A4c8vX92e2C",
  "key4": "5waLeX99pEAWb7ghsBvdTsrrwvtMKNRovCJgMygXeLAc4W1SoNw3niaP9QLs1bGf5yh7nX49QswWKpfhc9hFENRF",
  "key5": "4EGVSSt5bMBdUcvQRFjdiyukVBe7asgKNmUd6KmCzipK3nJKANQzdRk56hb3mNLzWgmGHYRwmvrhSgxjPoMSTmW5",
  "key6": "4tdqng7zVW8VQH4Fq6caiMCbRvzGmCRrpqVuxsGPR6jnZRS3jAUSPFU5WhKnYD33YBYYXLJ3TouTuCGrjmkeBUgW",
  "key7": "5P7fFjArtpv82iayDCFmfDMECjKc4ZxnvHdJ923gGPctKH5de9ecD5dQB22Hq1h7YaACiEnT3fxrnfCjcZRfQgu5",
  "key8": "644BuJfJhZhb9mtGuprSD9eMCcYpoSyaoBhUY5XHrfN3CSgsTwMNwku6aPoVqUaHTF4dKmLZMb19GysZePxeZzBb",
  "key9": "5Xciy3KS6mJGT6e8DpEPMLSxd2v4xT9Jr2i14SnUdKc8DwNQQ81tBiW7cW51mequGgzD12R8Ga5mREBKxZ7WwzZX",
  "key10": "5DKBRXygxj66wbs4VhJXd3EEpbnsmRBngQ7QuWKxGdSntiE4y8ueYFGpi6tVrgkJdUiXWNk6z2MEC6GaYkFyihFv",
  "key11": "4gfWkm5NP8vWeHj2NojJZnfgsZZ9dTB5E9GdiC9xGj6iCuWtyEDvHEqfTLPbdAA5jUEhbJwbTD7KEbke5ihmRwDQ",
  "key12": "5Ldtnmf5avsG6ket5r3bAAGcW6baV3TE7eUTN4vexoBErmfRy9k96c5tfNLD3ys998mApgf3u3J7Eb9vcdzmSwMA",
  "key13": "4pfRD5anGum8miEcgvLxUDJVY36jTrKdWUX1Cb9WktPUniGnBKtAAQsKxCUJjAGkDZPoEnKiNAAbq7S1s28ri3tG",
  "key14": "4WSsPApmMKxMXMRQkkJu26kLSTWAQtx59sknVB2qG31xeytbNgCu8VbjqAbaomvhDY85Jw6NFHHL4i8NESs5ZnEJ",
  "key15": "2MHYFPS4knitgyrDoSXVkboRT89apRf75gv11UuyKpWacsonrYTNHh4upMPscvYwTcx6E2o3vyzuDS7n8eVqHRDW",
  "key16": "Xo7DN8aAV8DbLPDmRVZFHWVBPkhRnP4fV9LnFDZBw9GRPrshtJYrATbEERRv6NncsjhQHFx9t4jAMafgg7oqcFh",
  "key17": "2p3WkkwTkKu2x8cd1NcrhNy69fBNqqKR7yiWu448AvnsnZZEPyBwKeaVpZ1VVsgyqnEcquP9TVRHuEF9TyUYqEnY",
  "key18": "5vCXfPYUoFaKREhvDKnvKBdfVGEXMHGUMbqDg7w91cUkFRfWtJXpWdEukJGErTNVcKBB7X7LfdM2KW7kzW9xuKYp",
  "key19": "39NoSCTz6rqmMKxWEq8MTobsY575HaT4Rkdz6MaF6b2UeV4d6XZ2qcyntvf9UTutEgNSHXp7NThaBH3yq2szcKfj",
  "key20": "4JRvQjgPgijHdch1m3og1UMmYwpcSduFvNZPwLZ1XjSFnKpDjai1KGBMqS8pT2FCCRwGrCUZKyzEjofGfPFYiuW6",
  "key21": "34eKiPsn7kBAFLohqZSnAkgyEVRakC6jQJt4mQYWsdXoGqH1xqV2HtbV5moN4ZDoNmxb8E6Dts4dJq5qbofqsN7m",
  "key22": "3BohALCYbCw4L52Tg2eBYACUBf1ExQgRfN4kvyct1HYCcuqPCeGwZugdBf2DehoNV88yD3VP9AKtKzPSnJDjVyXN",
  "key23": "4iXNifAmp32HB7fziW1FQ8KJxySBR8JuSVCECdKBChXevSFW1s4JYdrAmCWCR1DSvx6KD3oQfCnku555Qyu2iMFz",
  "key24": "3qagXX5wCJBrvuRfXc6WXYYaKaYkzpGtjj3Mhazo256DG934bpgQ9sSPugzt8Eg7QYvZBtiW1Xyf7vqMfWv7cJKA",
  "key25": "2nyKiPNw1rcxaYgSdh7PDR87uSFYTN8LBJDEMsYNTB2sucFMwaex6J4EACVs2wysWA22AxyNCMprP5wD7Q3DnWfo",
  "key26": "4J2QikfCNi6GPKRZWte9XiU5z3JX9AQ7Am4jyzv66QKo1U7omtu6srpvQr7eifcEUnBJxjAwq8qEzPgp4P4jYd53"
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
