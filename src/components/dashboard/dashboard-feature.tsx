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
    "2FM5HMStFetPKn1N8H7cKW1kuvtmwXQ9DGzZrHRcedhL9MBnCvmgYzGZ1HoByVWHNPHJrNKnEcPNT9pcMMyvarNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gs2i9pH6L7VJeYJjTZuJZQ7X1vf8rcYnD55fzbFV9dDsUwvcaDpqsGWyrSvDrgoaxF1ECwcMGSUEAz7TmAZquuY",
  "key1": "DuBZLsdfCgeGNsuotZbSAPHp7MpXH5WiD6RqLak18UbV9aqQnUVWRFe4tnTieqoPSruhC6wfcDTUiAmkiun7upb",
  "key2": "qZikohQMEpKNJqbWGTPHkhPojtnkUcVLgmA436xPykV1hGqn2q2HQvjE13RfqxacfpDAeoHHnKjHvFasw2zFC1B",
  "key3": "4XSGLmT9M3jgbcGoCX3B3DvoU7N9ZZ6XeWodHaDB6BeiHg7xtAup2hJkWhzSWLWzeoCwsXegJKAotSAtnvMsG7ZY",
  "key4": "67kiVz8UZEZ1XHXeCaic99eMHBfC1yJu8jmLUkQYwDZzQtQWBABhcc1hfMAeRbDpXxX13WeGdDoFgHsJDVYYq2yC",
  "key5": "4sw3Cdj19tg96uH98hgqbKfofnYHGRGmpCmdUQnRz1cp2YfwPypWhrrmeXSLs1LDBun2V1do5rTCgNZo4VoFhd6S",
  "key6": "2Z3S9cibVBrrZm76hUbcC8Qandak9aF6Ehp3j75YvpLHiRDQ3eDoxb7z1AVS78L7wMwNBGSMUndhfynhqZABgJfu",
  "key7": "3WtB6dn5R4r7stYmCwngh5twckbnVMQBNynBxrwNG4bmHWDyABEMMrHA6Ep3GVNGK1dMAT99m4FtnDSSDC13qHqZ",
  "key8": "63vsCLcrDhtFYyaHqFzfFknaJWRmfAWRLnEeRQWTnUoMQCKbAwRSBi7vaK8UCSUh3Qc8Lg9gGezaA4Nj4CLUajTt",
  "key9": "3LQzyrE5orsE1UsUhY91QpCCMjDAGQV1dEbjFj5N1KSQ48J2Qkf2GQaJWzyjUckTTpxgd1b8v4Nj2zUHHfNEZ3Mm",
  "key10": "pAdDUnSojz8Yd83TmpHnCzVYXyBKTpVpjk3S4e7p1SU75ZXweyNnFSYVgWAbB2sLNgxDz4h2mxCvNTmnHtVhEAz",
  "key11": "3nw44anEXzJocD3M1AnwUqzjDxMHFvtozczKRXhWNaw1V5XjpwpHvBoTJUbV9mEGYcECVs5NhBwVGMTukmSQFznj",
  "key12": "4SN8kduSkVey2eki2mGcy4Nqeeu7JRH5aafRb6fuBuZEvE6oLpgkVQdh1TV2cVpYVmCXUNaudwGSrrVmeegpEnbN",
  "key13": "4nn27Ydp8YyXVzzSo4FSavcxxV4ouvh5YaGQKxaru7RgSVXb5VpK8cXcEi2eZWrBjecLjLTVffdpjYytiKnZxzUT",
  "key14": "mZ1X7L6Zeuu4uXdsvQa9EuReBTeomDp72Hs9oPvwti4MRnqpQPPq88gJ7qimWyrzAjYkLbx3a2BCCfSDkd4aHiJ",
  "key15": "2yHpxct1HHguR6hMJEZtFWQNguqvoyVCmqH1Mxbmgj44ujAeczemmceb7GfidXBWix1VvkUPGnQFP3CWFW5eff8i",
  "key16": "Bav6axiMUnQztFEhLvZ51RUvfGdn17DSKxZwcKoLtv89U71KPTSjAo5N23B6W9VzFWnajoj2ztCg5yEDpZ4EP8V",
  "key17": "5B7nD3tXWNwqYqm96NbPAKHSbPU6eZkAnwa9R7R8VAq5xAx8eEyZTYDUCJfSBzozsH46XDZVHr8up9LvpvmFzHQ2",
  "key18": "2copFBLLv7DT2zPaBuq9kqAD1rAS9NmDZqB4tKTY8GN9cN75Zzy8UPKra5ivCYvcrG8gMTjC3upnrAuGDqeWLwsG",
  "key19": "2Tnoro6M97fc6BP3RLHs5ah1k1HH5Vs5zGcMcuh766heKysxbN8PUnn4ep5XGKxiwpptZBQBU5rHrWuTWRBBHHMu",
  "key20": "4orqUh5cEZeMnyFxXYaVtFwjtrBz2tRMYUDf2DgSeRWM5LYc23ZA9pLeRTagmTcxkeEnhzjSP2ok1nhZaQHgbJDM",
  "key21": "4XJ4uDZxAPCYiBKGk2xkKH7ywfhXXkstQJzLZB8zi3E1yx9ocSc3CLHp9nHj627n6TeG9PMoesPJA7Hb2zmcwUHM",
  "key22": "3N53ieXsnLzX5KibgsB2LPM2dsh4RXPBrT4soUxLwLRAmE2mSaE3rHD6ZBVTCgHfbNk3F6d8miSUMGDa2S1r2JiT",
  "key23": "299wcbEJWS8dH5dgTm9J5juXzBisU3wVFq2H5vw6A3otFjN7AUGKMdjQD3KHqghwdwJnVVRTZncaYhMLPmxrCkPx",
  "key24": "3VXUDYXJaRJt8RgoCuDPEFvujtJsoY8nhz5S36QM9fiFmGbp9HoWdg1JwU3k7p1dm3VMMZLF9XQTN97FATa335CE",
  "key25": "56EzRuSWZ4Vmb7sksvf1HwrnXo4PNXs5LehgjdoJLepcN1GCdWUf5cGDraxH3SkHGCLFzibxPtvmJKavUBdTHbyu",
  "key26": "hEvyuq3vsVSx1i14HLPh1RcwbCX1jw6Pie3GEgRmNGxqY3WhLNnfsWXGHb3aCKwCKPvaq1qmo1oqdApGzcLxsK2",
  "key27": "5Qis8ZZbUTaLi5to3Tq9srt4nRrDfTKHbN1ujYZZM6CQW2qAYfgFDjtikTTtf1XXDQ7aoyADVX6WUA2tCCyVyaUW",
  "key28": "5Gz3nBt8kpxigBRBm7Lqxn5wbJPv6HnzU26Whjkj1BiEVYrSCETcTmyz2DPRLfPjaa9Z9hGBikDzoGgsN4fNLW8f",
  "key29": "36rU2HR6qN7Av42tc8zQucZyAYGwMpaK9Fto4u8Y6RzJE43UBJH71QUDjYPP9975CeJe8i8N8rrA788LNHLJCpBu",
  "key30": "FZdaZ7hKnq2tWzSkEwA2QkBpVM9EzYcfbRg2Anum5w39tP4nw8TynjQQZWrZw18CUJuEnuQxA7RrbE7SdeqEMpy"
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
