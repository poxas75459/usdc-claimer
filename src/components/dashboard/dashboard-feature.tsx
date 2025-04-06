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
    "3GeAyrhxfp9xwJrzwXs2xrtYRWU3FGgf4AC4TT8SwRHJrvSSZUb3tPA8drhnkrJ9ifxAx3hUdBJEBnXRWuiKs3Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qfvGrgEryic7TvnEi9cuWu9YGqRSS6JD4Uj2r8GviyUDUaM2BTdZ46WKoBA6oicGe1nSbU3Gkx2KjpAvjjzWqeG",
  "key1": "2myUCeM7CCSXFp53rgTds3Bo1mJm9PtUQnomaJJ7tMAwazvLbw7YqE9fBTBN7UtbYMGanRUc4zrk7JGESvE3WWck",
  "key2": "553nmxQwqCqGjDd2UVC7WeUTsJQYEVnmAagZz6WQdNbsUZBsEX6MGvRRGU8Q8CiCA78RNGe1uTbwMRP6zZhz72Jv",
  "key3": "4wzcZ76zdjTNZZUAYtAsPXA64LqfswxXmHc3L8UAbod1N2oyV9PcdZrq7M4C7kekWhavorzScEoVtvxY4Gs6GJB3",
  "key4": "3m5P3KpdbEyKSdzGSwKgLR3fSejFrM8wDGKXUDB1kivA9CLKoT9AQLsLve3FFNfBpbjoU1m8ZRsq4zmP2h2s69fm",
  "key5": "3cBQrsUUzH2tD1XtpCz5PJPY14zTEEb9gEf3rtVYaqMa2tVr3ETjugvdRZFvmT8AoeaxWmWRk6uLgFW6BngcyQGH",
  "key6": "2aYyB48ypJ62j9Vi3p5ThnY77ZeyxQSkEWNtzwCSxmN9W5G2ZpjYGA9xQNXfX5tkbaCi6bus6b5G9F99xSMQVtiw",
  "key7": "D8V1ZrWRqZoGhsGmY6fct14sZ4HAN47ZncFPbuKc7xcPH2oqWkdE7vFZFWcND31TeqaMKcpfu9nSUHni5b4P3RM",
  "key8": "2QkaCu7VRURkpySDwF7LU9hz8bT7eKhgTpYBVWP8aVNP6YvXLxk6QhziHiKDDLBeNeZAMCvyQff9uL2WZAf23XB7",
  "key9": "4NpVpFXd7bdm77u9jparE8gULKkoetzvDxNLwxFSwBvgY5tobP7C4PVT9hBb5dqi26EL75sT5ik7DVez5QMJ53Cu",
  "key10": "5QSez2gSV55xbtfbgHWL85Rc7AdZaUnK1JWs1VSJcEbZq9isepXWKaHPMcmtWm32xFYiy8AfoAGBL6smo8ztv6bM",
  "key11": "4cCtFEz3HxMSTLcsuq5mqFK4ncKiuzTyTxtatBPFvyzMNQxiAyAzQRG4RnK8wCaAv3C1EQfwKpirz9Sq1wruPys7",
  "key12": "56mPkTsoh3HSq2rY2VgSVrLwCd2G6sgM2Fc63Z3uPdv6YedVjhfztgZZZnorHKLpLarsJrUYM4XAhGiBxResdDkH",
  "key13": "j4hbHdkjpQ6nXrqdYUqmG2ZzhiAoee6Z19geoNb2RhTJtqRMA5XKt32K35pVae5HfpSeKn2L935kDhbm1qEbhJa",
  "key14": "xgVWpKfDKKpxnp6ZrDoUCtBN11gfduMYFCHnRgNKC1AcE62ZfFHV9S8LjL2XT9JeKUWJvGKUMJN831p54mbuPgX",
  "key15": "2HWA8CQpn8Tccn73iy3Nk4txpXziAttbBmsiw2NsvxLHUF2LQdpjqyR6WhkDCkKXbZJdeWn2J5yHB2yjLAEtNkVz",
  "key16": "5UbPesYSb1xMFMTT6BKCwov56MVJ7277oQbpzZkjx42oGyMudauJvhoTxp4vvDsGiRzGkc6hKpHa3do7NvLZB2Kx",
  "key17": "5rFLkd488UBwCSsR5Hjr89o6WTqXN4EAHuCphNVEi5Debjy1EMVjKszo8eVB3bSTV49NT6JQRj2xVXt4YqYeefdJ",
  "key18": "63TR61rE85RC4pAUzjF9dLAd9ATLjgEUkgBYcafd7j4rdVQ9gsJiZDPnHCajdK2eM9d3ZpkT54p8TX71WBPxDJyb",
  "key19": "4NF6NndaZDnnrbGQPLQDoyeLHWQSwQSjpVwXqhoXDDkd2QHKRLdCCP51v6M3vTD8bq5NRfoEHYdwfGNHp2yhQ1Fi",
  "key20": "55gZdxEzHsREVN2dE2rWrN5z3UJyRSX1gzkc2pcMPnTCPtgtYbuQMtvXmDRVpG5MvYCdkY15sfX62ro9rKP2AS6H",
  "key21": "3HUjdv7fe1ENkeDpQAKjN9VFGzMAWX42vUSPtD586cjxsb5ruy9bdx2Le4B2g7ud5kPmbxrckXka6d3zZ5CtVf2W",
  "key22": "4dbPKgKqmCD9HVcnRbThXE2QiQEDtU2rWsbicvBd4odmqBA14aKGFsHi6uTnKeMFz9LYEUE6WLPpxyLKg5dK4v5A",
  "key23": "2cyW87JiJ1uAxBnsUcoUBz1anpaY9CgqjcX83ddm8GXr4wwnkz6xXeYo1yYYa986rAv8UX63Xo3oWqqTpLM7jJe2",
  "key24": "5Mbr48p5vckkrUms1DXyAsw2SDCVwcrrwXvmMqrVT5GRQckkycr1N2AmtxJVHqM8A8U8cvZnvCsYG2qx53ZgBpTu",
  "key25": "2rUPh3x2QGGvKPDTyzhb5BL55PZSHuSGzfmJCbWayUSfFgaFLdNL4ZtfdnZE8yPVeVBfhDyPdh6K5E9TwAPbZwnr",
  "key26": "5QYeo9ynBMExtfbt6Jx5im5j5aRsYdfeD7fUq2B9mCjPoxdmTWAxLRpmxaTT1g9Zp9GFEBVpNzQSQbgqYEKdscsy",
  "key27": "5W37znR5GceNLps2xRErCtbo3UJbd6MCZodsy9xqsS77NrG1eVr9GNtcAyxZ5X5kTKtDYocyqaNQQP8kb7P63Ajm",
  "key28": "24Hx6bo9LBwP1C2fPNQHhdBKJDTHEsqr5dcAsfGpjoCnPdu2tSDw984goL9T87CfVAvGZT5oMbubtzxsnzDiNUfe",
  "key29": "2YZ38QuP4wKcUbquPsuGPahgTeGrUBoM5ZM1mHCS5dr1remNabpWeoHR8eZP9KK7UZ1umjqsasTfKT7Sq54axoyz",
  "key30": "4MgSwL53m47wKxXwEbi7851LqSM3xC4pXw3k3iXSESD8JzHSNMjBDcTeSwHNVXKnJzCCJqJvDSfgHwVWhF8HvRxg",
  "key31": "5BVTSaia44qP1z2s4GUV7qg4R1LzhaP8fmPkgp7P444pzkVes5xLd3rjZ5BDedZ7qadn5xs4AEhQ4zm1Qiz9ZVxM",
  "key32": "17nYCyvcYwpRHbjFvcjWfrPhDkh2zo3haoWQMvLBuUJpCj3fo7St1UJE6Zs76CzN5boAfmhe4PH8CVz9YSDhvjr",
  "key33": "3E3tsqVDYtuEtCrEVD2bkuE9nHF38y6BbEivviAoy1Uh2YjdzE9ba47SwZtyenaehhu9h6fibHbLgGc18pCXTWqU"
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
