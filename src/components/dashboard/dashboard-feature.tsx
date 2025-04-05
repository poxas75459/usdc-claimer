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
    "3J6mkgXwPzAd4vMq6XGx6f9XMvFiSJicVqpY51Q3eCmDCPB5rXKFAzeW2zGcamVHSnoSfodEbUtxE8219pwLpwmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UY6cPRiodPaDpoAbBH2gMTJUDHSf8b2T3n9fEWm62bGCfYNyURekozsnMASzte7jdzTDdt1EDhhpaYxTbpN6Jeb",
  "key1": "5D3ABpUeykNULkJ9Nqbortf95qQ9qbsy1nUkTPSasPySqm7HVURSKDj8nYgTUrAogyrTPY5D3LiuFULxfTK2gASb",
  "key2": "3uds7RUdw6rhYrkzvZvEZ9wubjviinh9kEWtf39MKfGRfrtL3FKZcqD9DbkZmJrmVkzCXPZsexdDGJSbytYyZjmf",
  "key3": "5nW3XCXgJB9ESGeCLcSW4yrTHN82FyDaeMF1SFadZ3Tf5FmtnApmrTyrqDEyVuyyek23K5J3SM1ApCq2EvrQFi7e",
  "key4": "4ehpZJ3ifUT8duNvWmqr7aPQxGaB7Ldqf8VM4h5awhCbkNRLDnnpB4cWuhcf2AdzzATbhemVdWz3SWub2EUYHg6X",
  "key5": "5y8sjHCEbXjySQGyiePNtEd9n231mqi1SwaXRdrPnjLHB9JvZ611wUdLXVcf5Xpc4WWrK7kGfdN7UAsjptvgfha7",
  "key6": "2nBadFrFerGmw3auB57TSL5iC6ZwcYFUwBF4R2iH8poBHyA6peaH7LqosfdLXHVYmvLk8JUKPV3WbXYbxbu3NsED",
  "key7": "j9hzavXgZTPrDkYU8Eqx6PgVcFatFscxmL1rLTeYx6UbcrnoU83fouu3N98bqHv7Gi8WjqLPRoTE8Ap7Lg9um83",
  "key8": "2TK9Y5EZ6vXdGTAGUAYRsJtxeKt3y5RVEC6gkXxgiSHhVtCFu4NDXkM4gTHyC3prDp9URK5UzRBRU5cQazm2xDsx",
  "key9": "67PEC2wC6X8gZZGHymoBMnzVhNSAuZCEWYauRfcnZ7JNBNxr6ux9qkq71cYqXp7P3937SdkjAXafB8Dk5i9BkPSG",
  "key10": "49dK3eywe8tGN6QtVYyFCQMrbF3f275EYzZoZ1cNN3N4dNXyCu6wo2dUJcBMPLrsV1yk7tgi1YUD31pukt1HmPqm",
  "key11": "GMSYMCukQWUDPQtkbGCHCXomLXPJo4xEs56S1uGGtrTQQWRjxH5xawbTcVBu5tXYAsUc3FAqnzj6scsboz3codv",
  "key12": "2VkBJnNEJr2JEwgigAoLNfLVSLWD9FTuKm1YNeuWQL2WaU7HebESTTrCXR3D3AH7AuU9qMfCXmQZxtvc6LtXkPbT",
  "key13": "4FuVuyqv6NnzCA5fQH5nd5xWBpavupk67m77gGB9qzLeT5kZEBCchZsFdRcct3fjbZhTjYDwpmkXJJ4MX51f19BX",
  "key14": "VjaLN4jwz59GrMdtW6EWNCGJVNtE2HESp28rnhsPqVSpXkystGhgQsxdC3ENXKJa7R3QVSV5gW6V3vaRSwp2ahd",
  "key15": "5sbY5dJFkcgHB7mjsjXpUZyYumpxRhQKQBZ3Xj1BbynZKTEeWD7JtaP2wgoCM9QZEPhVRnrMCBxSr9cCnRaZZfvS",
  "key16": "2dGXUU1wuaTLDaUG1A6p4wb1cV2D3JgszyQscBB79xbm5hPNbZcgsmrv1msrti7hkb6N5RayhEo6w82MX7bxeh6p",
  "key17": "2YNhExGY2ifhMUWTzmDSGa8UzeJYgmEfWT6UDZUG8abg2yfgMpYTCkwAEYoQzBBzrsAE6pbzxxwttQ453opDgS7Z",
  "key18": "5pwkGtfgNXNYSebscg5i27r3UvhFU6rvcGx4k55z5LDbPySYRTTBp27rt3KGaMe85aBSXS5pskx8civUY79t8HZh",
  "key19": "4EghLnsroQD2f35fu4bAUaw4to9DRch2BLoredpLie3wbyx9Y14Pirn2igqN3LzuUcqyxV6J1RhGbTUm2zTnBWNg",
  "key20": "4h27TkUhDUJJk4niAEXpk82QMYfeKtbNMHY1EL417RMMbRpRxpKu37wgYdMxgt4cPKGB3sPbWLLhVLbnJn4switg",
  "key21": "iRQMjWjCesmLVazQLziXaVS3QT5uxE8Yu11VRAueRAC5gpdJBHETvwhACuDmjpkZ9RApFkHUsBWAmRWUyPE7WQF",
  "key22": "56V7zVkGtNgU5gzLG5V61mNabzH7g8gDRUk1b7hwSrfUZTpyNJtLxaQK7iaPMPDZD431kGBeUaiFhnuk4pQ1ukzS",
  "key23": "28kkAs6SoJ2CbMSNSkNXNYFCBVhCcp2xorV1sdB5WTcGDbVRNi5JdG5GkPdcaeEMFiA9f9K9hPQ1nQCyaz33SY1b",
  "key24": "4j7E6PYwrMXZ36rrqMp5safLDDVBYPa34LLfK76oXkF2dRtmNtNsLwySAMrsj23VRMkWrzfFiFM579rxat9xuhkR",
  "key25": "nEpnYHsLAAUmcwMFmkNpqVoD9RzMxpTqLrbsNDJWuiR2kStDeVCy6tnctndgxMsxLaJfMDndvVRQkyjFYLgbTBr",
  "key26": "4v5jhoj8jAm4FuoW1BVLhdGMncqZDNuMWKb7vqiZpjD3nF79zRdQiFHTjLRQjbjgFDW3QuJjcz69wrt3c8U6NoWh",
  "key27": "49Vy6NGiPEtq7deExPXpeqKoUfubia3FqKmxkznPAX7onCq7snvVSkgYJkmxEwLJ4ZtbP6wdrekPskmWJ94XGeuA",
  "key28": "nVQuzACJaxumk5CqQMwwTeQhRRtb47GBoFcgrSLBGRnPXuEJVTgsF6E3ur7TRsPmqyX91Y5sv2k4cwWPqiWpUWM",
  "key29": "3GZh3Yw7qFByon3JKmcJPVTGZfAfPhk8vvzKdoWNnCjqUDLZ4FvPMyeTgxEBUcEWeT94wxkqvtmVQBRU8r2rXbGR",
  "key30": "2QzFJ7vRhP5F7bPoyroM4QDwoiUiMyMUXe48fcY5m5N5v8WiLtpJTL3WDtVqpvRgNKEST5vpbnjx6PE75wWnb2mY",
  "key31": "4Mzxki6t5MWoFF2vmFWNR88pZo47FhyCvWRkFu6iNRGzMdWP9bkDS4oA8Jsr6Vi6LJ6wGX2keGUeurADxVEJJ7dV",
  "key32": "49HpJBo7wFpTLpKLKh6axGyTRxcAbFiF6WyXytiPfeEUV4PCtepfFxDC1hJ6nN8epAmMNBeiFUM2XR49AptQ2C2V",
  "key33": "5i2PatYftFuNZhUdqEGKqW7ivpfa84uCvUf8i3sgm7zpEvKmAvqHMjNiAsYDomk5spiwPrpkwBVAfaH9VudjGNQL",
  "key34": "4mHSAQzDajSZDeNxFfiN8vmnPgyEpJ7vFDNaazRoHQFdr6T5nmVEqPQw2fADuvhXrGU1qnV73NHtN4wRr95Y9igM",
  "key35": "5VxpkaSdMfvvxLBRMWYaC7z72euXKp4XMrgcvd9QJXZBK9dVnUcp372ig9hRd5tsxgdHhScU12mBiRQMr1fhGxo8",
  "key36": "2wyk47zhbvaiQ9Kzfouz1oKgWTc6TRogG2p8nMkgGzDCfgVi3sZ15oWsGag95NZsVPM3iue8AbDF5yUfiUf3Tv64",
  "key37": "2RTEygAczRNRhSDXYN2GxeZBBvtT9DBZn5TRHXadqgaoD1hdYoaHA8JS4Psi52H2qyFt5UBoN4dXrmKwqCoN9zUT",
  "key38": "3fpY9gj9WHuKR9famZHUczynwkp7eL6BJm3HpTk5rmRohq2Rmx6x8ZJQz5GijujTpdjW9nLbpfoRL2R3BHKmFAT4",
  "key39": "4tLLXQCnXZVsZ5zoKzBLiDNEFaQd3j4QhYiB8HnrFe2hw74tfKVTwX54eS9yCwtYxAW59fmKdUEzqVaFc9TVqeDg",
  "key40": "5EwVyiuXkCY13DARLN3Ad6kBsh5WcpPJV3Z6UVVMte8WZR3cy3MaEZZHYEzEG6yqsUwLv9akAifvUoTUoQwRTUZs",
  "key41": "4Mk9EmSBgAQAgXTSEvc6TjTG2mWmdMpepx78RyBXsXAH7qXjnz6qqaeCG7FD8uvfQe4eWNAUB6P8FfSYeinxdkVz",
  "key42": "5LzDJkMut77mYUBeasPhnLPnK1GeLtmkNLacnS1jZ8yenNnGM3kL6wEYhXp5CaygiNvi7y18L5eQBoP5Xa5DyEeV",
  "key43": "26rtmN6uF7QCyoSUBv8jCNX9Uvc7ZaMbhcikHD95XpWgUzENfARB5JZY4QrN78T6W2HwSZPLvQvHDpngw74Liet6",
  "key44": "56WS5M1BkrnhWwaEAP4mGeCePDFDWAQFgjFgrdJ5LV1VGruAAswHH3E65XaXbhT5fd63Po1cSckeyK9YNir1VZei",
  "key45": "3aer4zNABdNUiV13ywJi5xA3rJDhNKUB9M49fxHLwQV9i1Rn2TuR23bbprhmPaDzzwjbpVF8vAxMvkufhVQ3pFDm"
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
