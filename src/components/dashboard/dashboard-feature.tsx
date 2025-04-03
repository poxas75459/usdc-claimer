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
    "54fZNN5NQMhUMWWXrkhikoBUxmt9ydf2MSuUAhsjeqoHkBPtrbFtqNodVdKuUqC2YmiGWM7L34ThywQFZzvNXHMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZTbiiiN2gtQKtbWCcDvSZFYLcoM7ZNcRwDu1iMVQBJq8Cs1atSNpR4MuHW2aLHevkCpPPHLwzbv62mxBgmCrMm",
  "key1": "p8Ka5x5hRsxgJpCGos1j7Un7ma1XwUjS9mrf2FZNo3GeVcBiNhQGrhmybeRo6w2WFGGhJna5EwriGoFbyp4G1Mm",
  "key2": "3cYk4WBLMpCephKQ7WCczevzPCSe9kepeQQYGfRYa9g4w3VTe1pQytVBXisFwjfqZc3wSNzeTqrxRQUWn77Fugx6",
  "key3": "2hGvcye2nmmu4bW99tNDGTCpD5MeKABe6XqB7LHho6WHUqXPC5FSVdjGSfKBPtFMWwWeUyVTGMzkiekmWJmxtPu2",
  "key4": "K7ErxXSFCjdHwPes8ixQfsyG7KMGuwKxHrpfSYN3kQ5HAmF3P6H14TsAKF1RQ9SKxgnbsuiMBW5ubYLiWoQKMDz",
  "key5": "2GcCzmSbBcSEdvWZ2xmpFgGVQHrB3nd2S5yKgYYrcmTF8Ut2xRG3Hxp31mswrE6UXDRAsLwxuQpLnim1eAjt53SW",
  "key6": "2TGAK3eHHtpiXKMQpzLdK7uBggE6vhwGJKY8nCee9UsrHsxntk91Hoy3iaSXqADB6dLTxfpRNFRdrotpKhC78jt3",
  "key7": "2Gm1UbABSGUviBmSPDiX4wckQchrmUzapbndj1bmVZk18CjoV9eRYBDpPukjWz89xdPS6o9fiaZASreUUtqe4Ark",
  "key8": "2PFEKwhaZvaqGSLpf1QGMde35FsfHFki4Vaz8qkiL2Ur7XYmg6cxZN2eYZ5aTpq7Wqe9qhjZJp9aAyb9xgHSGKL6",
  "key9": "45ttwuu3gsLU1y2T8L4BuuTEJRLicECfFMyqzH5uM9qfmHQXmQWYNdrDGxgUudEha7UVQEfir6nhSCPLv6qRxqnY",
  "key10": "49UghcC3zTgTn6hWLWawyVcqyULpixfsbxVtMtix8nD2PxBvakUGhEUACjn2YXgepMNZF5EDjU51JoHVrvppEwr2",
  "key11": "5AHGtsDQBrybP3xshmUyrLbxF1vtgaLtzwHf12sRG4i88f7244vtCtDRN4j3J19b9R8WEv8jy8Aa7njMT9gpvjTk",
  "key12": "ji376yz6TEwCbuk6nLuN5Uc1PDFBfJK54B3T5aGyKLTNxJ312EhARidbHdMMYXzvga1wWAhve3zuWf8NnhKThAR",
  "key13": "2cqRrmYbnK4exMRQzchFdo4MqZDoE1zajA2CfHapaKtFjg43VhwQXvq6kQfrfvyvk9FEmaqk5GmZGSsB2zAVEUBJ",
  "key14": "2CXC3ipz9UWfYAH6rLBhnzp6c98dnXnpKkLgFM7LuMnMVqAPYGfipFpgXsSvA3h5UCHxYiZv1vAV6rCrGovXip89",
  "key15": "27bBm8SnsNwDR4spgVJr5ETWdEZ1NoEtM8yx1GrHkYiwHsK16uqxjoyZRqpwgwAbFt53xnhDdcBqkkgxrd9i4QNc",
  "key16": "1wtb4PbkDNk8vdMEum7gcgQKp5gAm3MTYvDKE2efcLurMorJSoMLr4T8GdtTihs3daBV2Mk5FrCMzM5FADmAWPx",
  "key17": "5tb8CWrLHfS9VsYfJ56tVuUaDNEUq6JHYprWHPxeCNLsc7f1kaqpF9eV6CGGyXFXvM9iS3D2RKtdnS4u3vmXoxiE",
  "key18": "4QigQcjNnPpHtc4ngStnnEoRQrtBitnkzZFWsme6KYYR1zCNBbPnwsqyRgms8ibBhZLb7rZ91GULwZarjjB9V39R",
  "key19": "eb7m8bjdtz2YrUfkFwQMSgsyMhP8dCB2Mq7Qpkfu6wDTPK662rqJcPQzzEEKXN9sLf23sDj88Km78EKRXZBX8fX",
  "key20": "3sf82HE9jdcZ7LXMcqoGpHd8thLwx53zEpgAdiHbBxBSNrVYcWSuFGCDYKZXQErrJE1WzoCcNQTTcs4FZM64Xfdw",
  "key21": "4oArV8TkeU3FtWeHbVLUN51VfmzULDReheoXM7odsfHhuz9pkoqAjQLtzW1Qf7ggRDyESFyNRgjTH55fRyCfxDyD",
  "key22": "3GBxtkZpnhsFKWWtJVjngVdVQEB1nVDFqh5dsLD9dgg6x9DgQGzBGAznGSMneSyz2BpuUVMbYFWFjcm2dWsSscAw",
  "key23": "63v4RWjS1S95y3iCkFyLdGpvRne2CwikMc7LqkK54XYXNeNyhbYfidrD9rMEFc17d5J8aYEvLaEKtsJxXorqzGkg",
  "key24": "2kpvDqjvpiDt1zEB9wrWRTkPyRsaQbcbdMu9HpfnVea44p6YEcTZEpRJkwRGqF1X2J5om5aKrfN8UXtUezPyQj5h",
  "key25": "4mhwWfugpG3BZAgnxNokeXRx36CaUwCdk68qVUg4VfHXASUVaCzkqm3xsvX3otDgfpazKxBVM9MsFtsYCCNy4KU7",
  "key26": "3iikTEKK74nWKv934GmLuNAEXzahoQ2AU17PFvNEpEyH9oDQ298uQBY2t8Qh7LDt3U8h2G7b7mSmPejbRTVrgvzu",
  "key27": "4ef74xWA5rwtJJ67K3tKHbuEwNmAQpHbNVx4XXHvfxsWj477Js4KwKRrsSzDcsTTmm1abekt4BfMgMLQ24TeMbap",
  "key28": "2bpawYdSHxg715SS7g9YUFCa9HsoA8YEw6JYs1v5VXBEJu8XR1mtBev2VWwNRh5SVFovfbnM4uaySW7jaisfGq7m",
  "key29": "2bm2bv8ZwHMgsCUwK6zZJ4CzZqQaMbjsPQLp9e7MpkWgmPtiUpPZ4g42hDB1LBzfcFsyvU1Z9FmrapksfTHTPQ9x",
  "key30": "4FkBmk4sbsV3GCu2g1m3rrdbkSw133tbMBYdRiFUwhWg51Hz7qam7UJEZb9xwTn9K3gZ8BC6mzq1s7HLjGFY4PeY",
  "key31": "2jFrHzRrKCgfWNLEBKamX5kEBzHieJWELGa6WcBDNgph4wJNcTiGatcwHorwmvmkzPLR7dAc2AKRpighhNfN8pct",
  "key32": "3i2phHSGcqNjgYgg7PvxK8zqdz4rDY1ugFHRinB6RGxSnnTP2MH65yLWcHGgWqiM4CwiYcAWyaBWDqWbNtS5ahyr",
  "key33": "5Hnw9QEu4H1zBXbxQtCEVq31iCyX8KB3jcLDc14aJWUDPvGENTDtKPPyrF6GewRepbaHomZr9WSQZv5YA2bXR6qb",
  "key34": "5Vy8m3NjimUxCiCrpq1XBeDXQhfe2VpZ3wQxWjpgT4juLHoroPDK46QGRWyYMnNg435YUirRyHmn94x24vBatye6",
  "key35": "RaVEQxUCyKrMCmjNtJE2jUi1CZY29yWWspc4vjxvNgbrkxbpG7vCB89KmqQVgerib4rv6Rb2BDbYbdx9kzJt5eF",
  "key36": "45PsPsr6mdcjKQnkCwi6AgorPLCbhJK5Rbf1TdHefW5AjRD5yR1T7YBeSD7gtndEaWMBQajMnwie61c1PwXYR9Uu",
  "key37": "phcJCjswMEexsvqzWdYhr11UqbwFExWFXpYLRG5go9nLsMswZTCWCatC3iYtrUWWFV87mjhj5K1jAgtx5KR3Bcv",
  "key38": "5QwRPDRMvP1gPNS42esKepyDXVULwFCvvj3bshyYj4MPogvJUbCji2rsWKkAGgK3vhwytpYd8udhNaAhePQ1w5SC",
  "key39": "2Ek6UAPsiGbcZd2anfDAoLrWbzFvg8uVN2kBhXoHNpmAnQLkD9zHgoAnuaM1wz8dcuRwjQymoKWNFwhkz3bUSttA"
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
