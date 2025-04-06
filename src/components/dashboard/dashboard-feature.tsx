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
    "2anP118qK5nHLAfWdcgvYwCsveVPV2d9rmFkbZ8Ton7kvHUL8krBW4mYCzyGZRKEck8qHWxssJxjcAdc78mwYgxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27TDAT2obpjPWA5S7hLJVD2XFgPn4dDi1SsvLe1pFDcddfpC39t44Cc6fgxqvCUuXccC73R4EdTLrGGKbMtC6SLr",
  "key1": "4BeYYSSWmo8nEgpaEP1jPju3BreQFqGfSX4c3Q9iicxkjGQVU8yVxnNpr6Aw8ZdS5ZbcGzWhGdd6meECRCvNNMko",
  "key2": "2CztmmiS2kX1u8LGsMwTz4YpMnYhMPNUJPSPWeZENjLCZMwheCiczCELoB5XVSa16vmj3GT2hbF8bCsJcBSPPiaN",
  "key3": "MHmKsPgBp21fHGSvbwfuPiABd4GWFUYAg8AR7LWTucrFFjjUa5A3JFzLCMVcgpEefM7Gu5K4yeetJPvGf9trJak",
  "key4": "3p2TAFtUehQ4euJRDgj5nXMDFVsCVJAiVvo2s2ikNV36Tji6x51Kr6jfBkxH4KQq2jpn9ggPzoorZTxSoFHWZqt1",
  "key5": "5FQcCYz8spUUNQNBVutHcBLmB8MGZS1jcJ3kqUBkgHx2oVqvET5X6nRSaf3gvnRv1fbejJJS2igPtbtHF92s3Dxa",
  "key6": "668DaUyD1TpZAzrHz2CYZ8zdh8VEqqHBVLsAeehkbpTZDrYbsc6mUox5dmqnFt7VF5CsKUkuvhHG2RB4bJEhCRwr",
  "key7": "3mmtcqcDLjKtmWDmEbFeLGPuv9woV9HeiPjYjQmrkrzM3y1JW8mVnsrHAkoKcTPwGANdDPFyCssk3rTdF648g8Pa",
  "key8": "3UKkzqvdZRoQGTVUM2xXaNTQqvoZR75nYiE798R1iNSdvWJj6VPoidpCBDdVYr7pqm7NomCPvVEKYbt7PwwTrBWG",
  "key9": "4WSqNSembTmvXoet6QGe8GPzxsB6xADzd6JG2ZPLGeqsES4X6QWA4WZvwdGFqwsvTqotQbS8g9xYHnmowJQk6MhL",
  "key10": "2K51HvVycDmbjgV8SkkFEUEoVs4vEQTyuonPEyQFdrTeiKaCCGXDdijRBTpoe7SuHhi1nY1YMGQahpv856giB1dk",
  "key11": "4Csw9Hi9XG3JhhNuvRbxZ6nUFzARaUSUkmyGqvEEftW6XDX1YUALFGoDQzVvdi3KsRKuULxc3rhNgtcpUfeHJBju",
  "key12": "5W51htHAghKGVyHHTxY53hpecfxXsiH1ixFT1gkramL66viXKhCrHGtFooibEbRsHKyVKQqZWkDLs2RAxqWb4TbZ",
  "key13": "2v2g4nCokVFxmaxDicV6bUKgF22rd9TQ35DTYESTMhmkV7piJL6vgxaaA7qeorWfZejkVmmbXhW1wS8ZNVoGYxEx",
  "key14": "4MSuwxg9K9jA7YYyKkHSiuYg6r2YFqtMH2pDPCcPeQtQnZbgX1R1Je1trhLkvXpTd3ixsSAELELooQd1Vtvh3DAK",
  "key15": "4SbN5PsVY5wRgjzaQM7JcFfj4i5vhEudAs4XdpDgC1Z3KSKUWpez2CEqEf7g5ucWHMLW3fpa3hVjoQu2vQgk49V",
  "key16": "2eyJU2jV592o8ZCKWSXnHRUeRt2yPGB61KpzMELNjBAAFWjfe3jikm39Lzr5gfkZ7t2W2DSeWzknVjaeCLchUowH",
  "key17": "2Kk8Dnk89tJu2VcEmrU2R8sJdHgkMqAcJ8xJoe92rMcbCpFS7STCVGHtqpKZTwm6suFfGDqtNLxFpHjijgoCabxd",
  "key18": "5U971d2QSXGDKQYKv3RHzijPog6fmrUT77q29kTGtGsksqVJK3ceeYUkn2z4ni9uNKWFGdCivFcwqM5ndJqsrSzS",
  "key19": "2K4N26zq9cMMyG9yRbxNXDMtvw7rWeoGyJ7n2ntn5W8Z1xarf7LZqU5Si6mX7Hdwq9DuYT4hh2dJU85bJRVkMMT7",
  "key20": "65kBs53zY7azJHD9LLoES5KfHWrJZqbMbpLtAzqCeBEtnDET5LVfa9TCdk8Ex2jnGiPujmapyrk1hesEupCPwhnv",
  "key21": "2Y3oyXMULoMUBKumnvfuQk1SuJrGVGx3wY7p1qG9G7ea8g7TYJgmYLZtv2Q2WMpajVfDePAm77jCZsFwbbYx3G6R",
  "key22": "64ySPcHVVgKj8MYLeVumyiPQN1C6vWvu5RLZcTcRoh2UFDvKumdfsuyKwYYqgNNZx2AuZjFYKogLSsc5BMehsBS5",
  "key23": "2t3aajgm6dziTnyqAHSXkZBP17vHSquSQpg2SFEAX3KATE34zf6Q4YaFoxRbmCVoZTnYQafFefYZLktzeV1SWcqf",
  "key24": "5nC78nZAHTTvBrk4harUaE4sP1DjxTKUXjmHBhjHkrSJe2p6pN8L5NDnbPHftwFvYS9iKDvVC3ZXiLV9h9TVhqeM",
  "key25": "3mDFzsw5dzxVu6wJzxDgDpgNMq2oNDyVDr3dAS75pyxCy6XMZPWTkcPLXN5TyMtoKfMiF7TDrnCj9d7ehebxNkco",
  "key26": "5AgJZb7XAL1XhWxLnwK128czFsnr3vfpY8aVDyp2otT1ZESwykzYJCrybaL2GRwbi3ANzj614acU6kLebxFQbse1",
  "key27": "2zbGFwXGAXk1sLGzTsnhSJBAykTvBcUNA1o4nrpHMFq8q9RaRvg8uQfFsESEPcfwVHxVvWYx5BWyUA8yvP6e9DsY",
  "key28": "3x1ruY2uKPecTA3tEw1YM7vxTJn68eYpQXFEL8Gds422dJZYuNZBqRka8xMXBVy46pnQECnm3zruqXvPAr8Cr5Vk",
  "key29": "4DpKdkvD27wJCV3Rv2tzKV3A2WnQBh1DRw7XQUHqQnr4NFoMfXE3ECw4HAxnMMSAoXRZ7SKuFMGnvKA1kc2LDAVK",
  "key30": "5qb9ucPKk7kumMWtYxMrccCY88oNwdXMnDfLdg3dj6Y5muTcLyoX1rnnvDcJQWQ4tFcbyopTciwJPwpnRTnzUKVR",
  "key31": "4eQ1hfZibaUYwQT5icUa3fDaxoGmAm9RMoE8vDvmN8pBnfWrxarKc5HbC8rUa7UcgDteCRT1E4xJrnGv93rBkJAS",
  "key32": "5Gh1sZomfQHaBHcsQW7p4UC2m2cFHvKjyex468ak7nVcymqKuy7zGMAkJqnwvgzK7QpYvNruAdFW8kfnTCYYjH3c",
  "key33": "3QXDgL8BjGkyW3HeixqkLzYYhSR8feon5KyaTMJKwRxZY6dBbVVGLiJ7sxD4TKG83sTaWiaXFSfAdo4FBB5cJHzi",
  "key34": "55VHtpsoHmuH9P7AwrQPpNFmqTujGHiUtUdL3FHhxdL5PMcXrn4RYRBNnup4kHs9S5g8zbWXigZho7QsURggxNoe",
  "key35": "3FfLRoZpg2jxnCwedURQnAGeGun4vEHDKBh6VompEvJsU177oehM3K79HpJnMiYPbkQ8hfkhWff5sX2UfjhiF5iu",
  "key36": "MM3tRYQ7W5dtZpqeqor4qg3CCFkDiqkS5BPup6J4ZfWUJTxUfxshh9ge3urfd2qSQ3VE38qkT4y1ZPN9nrZC99R",
  "key37": "129ugwxQRjzHDBoR3xUyG8x3ECdZAp1R9Jge7RVGPW1H9a2eDW7anE55D9dmNatptJSdjCQbvikxHJ9CxHDCcMwZ",
  "key38": "42ZVWheoGdWADSbap8Ag3rpUmda57fbmgrRA8Y4TJJPdHQa2Ga6CG3tUorbqUzQJdvXyCirmGP7cLFLwXjhP7spG",
  "key39": "4AvTt7MyR1UWDzdyFvffKcinHY6dNLtMWgMR3yiq7MsQTwK6TrhA9p8rFL4SLRdwcYNWqfBFTEHEouTsDDopcgLK",
  "key40": "29ynQKabMwxPR2ELvWPV6LhL61kD7z7FdQ13heAU6sBQkBHRzLzXwe77JEdtynL9CttS2SeRyxyVk4Ugp2cHpk3B",
  "key41": "24buoNv21GEZ6gKrVgNmxoeZiyJPrd9CuHnyNRECwMZEBwTEs1u3L6L23NyW8ZRtSNRGCao1GgyJaRAdT3jU1jGF",
  "key42": "3favdZMc6jtrEkFTaG1jhKVMeV9zyAVrGdVWnu7MMYYwXmr2DugYBN9Y4ZRWFamPcUnMirFg6uxRkSvobGC6gqRE",
  "key43": "5YiEo99bW4tYygc9QFqcUqoE9fwGa1RStunuNySBvTYLYxB9unC723ygaovDVGQ5SfHxpffrwLnZPdsX1QrNHqo7",
  "key44": "5gzyTF6h9bSmqjKaqPQfhpPZzeqUKKyHMKwqXci7UFjTjpSjfveKm1u12vQwGpDtyYAy87dFirEYe1FGfYPvrmb2",
  "key45": "5BkCdoW4jMrSAj5Y9jvyp57bGhYS6sEcTjFUJvUkNUtBEtBGtexMVth8HCcPfFK4W4CXQHd5QviPswy1mzrvD8Hm",
  "key46": "54wxqMDBfkcyFodANoGJ6TSQfod9Y4q6rfJtqUjbreo8MnqxbYzjotKqmsGVRhyUM44RBB8qrUR372CW4P5ehk7B"
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
