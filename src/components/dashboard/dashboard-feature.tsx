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
    "5N352AqoFB3Q7AspkgUW2DiXgmVmNwj7UkiFyN7cjjJyu51s6S25pBAgqXuH7pkVcw9qn42SCoCdTE385iGMUgzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iBQfGAaMEQGFLGsf3qFyabaLffKTJSEEPKifoAN8YZ2oPu7zm4PmVf7vWHytg1kaeR7sbzmzqDynn2pfkQFpY9W",
  "key1": "38rc6uQNoA1vzyReiHa4jfe4ArYQTKK5ZFJoqwrjKgUu496kq7kNeFhWRcZaTsiMdHaAV3A4AGbFyD1C2BoJQAJB",
  "key2": "5RRCYkMDFJmgs9ZXe28zV8nqyGsP1kqiEWqtee7SA2oaExVGdSqqw6qBkHfQTY89MeScAuw9p8tvnjtT4gZ2qKTa",
  "key3": "5reUSbKCmzRLdE16vceyF6aMAfhy9ccF2YSgrcqh7eNUYZtuMJsfsFZi7tkcnB7Pq9XC7QAt8czKxadSPrzv2xoq",
  "key4": "5xnjskm86j7GU9p5VqRJF75YFJwkknudGgY3jG27ip8iEhYeSK3osSadvmLFTEYd9t4aJgnxHkL2TeoffLw2PiiL",
  "key5": "agQDnfjxQ8pGcZmU4WGWMY5AQHxAcYmm7tiqqo39r6NNRSQZt5BXDKawtCHaZBMXUQBwKH2deewCWFBdEWuyuwd",
  "key6": "P6n6uYomW7U3KmSXqa7uFEdnycYSDHZbxUUrMsmG5mckbTXKxrJYsAncJJw7UoSxABECFvcArVmJ7vUAkbDM8iV",
  "key7": "s74qupGZoj2Urykiu1BbQb7394i2E5oZfuRASyCRwB3mgiJzKukdUpBKNerg1Uqt5zv7aXLZ3FEwjp3LTGQmd3C",
  "key8": "2hRot1ned5aJjdBbNbmprH7t1s1QSTGHGiG3MipSL8HDpvhdHaawbSgFxTTBN3aZMexd2yJez5jZDsfX5dpRWtRJ",
  "key9": "5tfJ8RnPM5kHfHj7nkjgtxn3jHMhGzaTegoQDqwSUtckFiSmgNrnJrsKWVsg3EE1iEJSHo18yJmWpWLcPXMTm5MR",
  "key10": "24Xnj5VC4AugVLvradrF9oTjrHPgAHAt1oCSzsnxQEJsqoBB7aWYpwTZZgBh8o1xu8UiT5ah4VxUeDqZcrAZaQQ3",
  "key11": "5yTVocEwHKHDo6BNWpf8NsJoLmhXJJ58egd6y9gEGvpqmkqTuiXcreppMMdr6rJiJLG5A81ijpy8mxrMSQ8sQJer",
  "key12": "47R3uw39QwGiXvjKhvEo77VpCW8GJj9GFpuTcVXiQeWUaj5gAasXERPN1X2wMy1GXtoMYooLSZMbqpxXvxk2RDcn",
  "key13": "2BPFN2fskHL3kFeX3woxvC381ZMxsbXAfuYdQCqHb9rerWNkcd891otGwDeDi4pRnHeixHAaFNC4YbYWETjBpsGs",
  "key14": "LA5fAn4fLodMg8UbDQtvWcFGcxXFdWctAcXhBgzk5QrTnq2mfFgd5wiscf8zzVfKwisc8A71WrMynNgmVDGVHuU",
  "key15": "33qfPW6mae5T4Qxh2MxieTG97UmVjUx9PY9CkRcwGpvz7dXRY2eTNXF2xJ1puwh5ma6p43KeAwQJ4G1YUoVRKUyX",
  "key16": "2PJNe9pk1Txj89HfVGhLd3Y14X7yBRgfyaxLEnzN6i45g3voWVNtrrSyQmauae7f4erQYn2U2Y1HGH7WzZmkBRCR",
  "key17": "4eD9MyosEnEtgHK6zaXyNUiSDwfhnWKxuAhdSsdckLwAgyZgzVCrYQ8VoAZ515PVqRHQETppWyTSGr4j5gNZZ434",
  "key18": "4aLPfKdd6xwD9aMrRh3fw3RXHJ7BLEjCBedQ5JfaeEpzvvxbyo243frfmZsM97aZBf2s9ehwiUSFRJ9w7TNsDbE8",
  "key19": "2iqDKVLXfTgtjy7J9EUfgferGMX6MFmcFPKWVDQ5tRDddHmUZnFbozoqSCgnfMna5ANPLzQjs4KY5GX8oBGyhRcm",
  "key20": "ewaoFaF5qPoDakqAgYgQozRKRSZyzrSxfe6Tu4FqnvFjkHyyvAWBDMBLd9tTTrBu2rfH3LemyLXjf8mPj2yXQYK",
  "key21": "5etgMbpd2K5X7iKAAvxesdXMjwHTiyiJxyYXRY67CuPDYH9bzDqXv7YasrVoSwbWLPx4p9GHkWzCnwGrCv5mwFYm",
  "key22": "M5iefVCbPrnf1q3MbBRLrM26bMeGzJrXFi4p9edchniWRs3ZPPBpvnyzAJ6JdJZXUzUThN3evwmKHPqjtRtSw6Z",
  "key23": "2KwJeDsiqA9E5Q6hF8PDCvk8FaK6pVfx4ro3m5tgiD9RF5bEpekSGMNJXwVePoCeeXLEXU9TMg7TAiQMpqyBJEww",
  "key24": "3CdgLCzghidueYBhbTFjLfj5GJ9jg7qFFyEaVo9nstxubWEjWEcjrqvZMmmy2aFuVD4caoFHnDJ4g68Vpt6zpCrS",
  "key25": "3Xs7MSzZmgtCTickW6PbUvmxJ6n8JPa5EuewcrX5Tb6mVycpdJPf45FdhNaqtw3VND1wRtEv3sH9Ua9epcjmr5ty"
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
