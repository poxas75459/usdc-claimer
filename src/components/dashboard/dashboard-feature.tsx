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
    "4WXmFiVSQ6ujdp5VhKaKi5mbLmRKybgfEXHsLNY8sHYKEV43WRRLz7PBGiSq2uNVeEtDocQRzTVxTXsbKmu99t39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zUDjYE3WooGK9kLojDv2yGUSMmpkKibjBwhhxi8nQs8YPJ9ZGmSnc49kDcFkRSBtDkvCy5GtpCWYEeXHfhnb5j8",
  "key1": "32bAUaq86MhU3zwqKGx5pajxAR5cbFm2LdumZQ62uTKKPf6oig6HsiQxQkkp5B7cPSRLfHU7Buz17uZx9uE6Czf5",
  "key2": "32zMqwB8ezaY5vGLrA8uzEVvccU6CtWKNm6Cc943vvfSerj9etmJccHz6dj36FbsAtFbAGfGWRZuwRnyqrFNQx59",
  "key3": "49smq6em7RyGxvCqDjkH6sXd4pRYdMhgroXeDHaJJLEqk6GLuLAoNL3WGhPYL87t41WzS9xx37Rs6qEWrdkkwSqj",
  "key4": "XRhzvUogPzqGeVfvpvBvnqafmuDUSxB6G8SPBuHwt8TPD9oBSgHm6F4TWhgjTFtgtQZyb9om3SueG2i8JBDCivq",
  "key5": "5YN4D36vtx8zL5kx6g4GsoqAFRmsRJv1XoeaXznuB5J2U1vAB9Nk623dQk2r6U3ioAMQscvCHvUFjjEtnw2ebck9",
  "key6": "2tbFkAm5i8xnWmzBRhQ8PxoUc6gE3KG1naduqnqTAM64r6tW228UVUSjH9AePmU6C5cRJxoHK4RBRz2HingBFq5Z",
  "key7": "UMkokgX4X9wgdKDPn8Yo7czbGoTVizK2ymVhqQ73oM8xTKD4wv7axkakCsuW8xyiLAnqh6kBDMHQLH82Zd2RNK9",
  "key8": "fLf4aodHsQ1kXj5Q46Y8GLsWkHndhYyBVMkHKyJRJB59GDaidQbp63zUF44Dm22xDeav8iSrojKgHL7bmVmZZnT",
  "key9": "3Jjt2VCNwsqGHAKyiGjcNQoDuL36zKCzDLnWwHCQzByddnxAQDufiTvRfjFXfUnpismrhL8NB44JVaDGt3qheRVS",
  "key10": "5riGNyPRD8RAF57befueXfyxsJ9weLNGsL3QySirkmj1hWRjRovQs6T9RhKSVJ4CCmzkjwtpyq5k3tHJjkr31a9M",
  "key11": "3ivZzvmbYQAjzwW4PTPV9DxTgEYUjFQENnQWThtNpEX1bK2HP59Pg8HUHEw155i6CC6xVYaXwSEnCDZdTD1YsXT7",
  "key12": "5U4U7NNekMKfaaB3oNKZxX6hgF1WJiLf66wntSHCGkDC1X5vfBxDXNabTo62AZhikB6MexX3exTSheVpP7rZBLJT",
  "key13": "ahsewPAMG8TwPyKqhvJvhEn4wCcaNDpp4zn2pCc6MraYzVnNG78f8ita6vDcn91eLTaGoNJAGUoJZDjBvZdAcLD",
  "key14": "4UhsV6qnCiWjear2HyvB5zPCxxXMyJDzeXvHGABgisNMNvTtKXuj4zzkcPtS7jU34iSnYyXDTfomZTREZA22faxd",
  "key15": "4Vvn8XB1iVe4qFYm7eSh8GnCeNtxaMDB7nYU5SqxUpE8zeyXsJguWndD7JhGTY7z3fSVjPd9XdTLG6f9tpUXRU3Z",
  "key16": "22iJ9joN2yFEwNuX93xfaSWGxCsMHy2p86WfEKcbTZyXPhrXBY4uorEy1Up7noVR45ozSNqZRiMJ3w4WQSRcUqex",
  "key17": "3CiuAAT8r9ncp6kZSfGJEn4ZZyRXmGVWbU65qnpBrw1picc1cVaZGBCP88CDFAjSR5Vzbj2xHNWEXKE6yJjhexr7",
  "key18": "5f2iur7fhCX3QKEqudpUpfLY84t8BcdGXWK9CTW7UABma6dXjTRCJazMdGcZYmgCFgwXi45uHUS5jwXxuxs5LD2G",
  "key19": "5RBL3Q17tMoFrwQvngvD5KxhaULj9TkgCQgcEHjMikJJCGSRnN8SzPmyf8vchga3iWYQCVVAGKoveTN4Mbsr5DGg",
  "key20": "7xhvnWLs82uF1Znq5RU3ALjpjt9W4n1vHgJ6ca13evF7eHf6mZuARxaRrgwq5dxpFVSj267G3DsHSWSu7yNCYXX",
  "key21": "5tgrxn9jrBnunpgC1QMBC76dq4A78K7mjVrcA4wPtFyDC4CFn23smPxz9RcJmfk3DoavtuzsTEWzrxWfhNHWxMwm",
  "key22": "7kTrwfYPNXdBAZarb7CxWy2FdwfwAGLmcAsCVJ1T4cY5v6UK6VnKt9SiiCyQtewbEGDio6Uh2z2oG46a9nuq1eW",
  "key23": "2ZRc5CSTDuhwo2XhxNgAsGCvo1YGck928DvgeYxAVNESsvVssb985XQtBj54tXWvo3QeKbSqq88yDXYHtBQWFYiC",
  "key24": "3A2hyzQYwbW8eTumHsfsQXSpok1x2Ron3hzF6Pp6MUBNVU9E28Egar4NCgfrJujnhSJJLdcXgEzvRBGk8BFoE9yf",
  "key25": "2sxLM4BWEsB8DL9LtuwdAZqepk9qMMpKRKtr4BY28aJVeUX4uwhYC3dqtW4ABcuJ9vUTy3mPp3uWGPoPoPynCM9U",
  "key26": "43MN4fDFNKt7jZwQobs2WUJPzfkDEaRMRhFeB27fiZSa3JudS8xsAUjeACYc8uE8QETPorqxDkwTh4RJ1P1vbGvP",
  "key27": "2r1BTdgM2xhpas5HWQxjLka9qiBifKEg6oTuDPrDzVwSmmEwpTjpAGwuET9ccTcPKVvzEfEDeoTKtchowWWiGFBn",
  "key28": "3TZYDCxtCeqoq51Zs45tLxuxbXGP3dydC2HQRnmr4FTUUnxssdUPsrr5KDajCqNxqrjwZqgaQB6c67KsWutpqhGK",
  "key29": "2uahrtug6MYdv3mJE2KZq4XCUtHmP6KSsf2ZfeswMDdyEkc5nDJSQub3NG9YWbaKYqqmTC6PtTeeeLAdgb4Jpjjx",
  "key30": "5ZHsje5YY4zFiygAcdPJBCdMnV8YHKPPgvX2eWeRL6tpAHkMCmHF46H8a7cHUSPKdE8wSzNm2TZzDBzMu8DKwUN1",
  "key31": "63GTRXf9Vum4P3ehb2FoFiMD486FaSktCyMwdinhXcPTdyBkGramiHFu3D3vTgoFoUHyTmdLDinHxN6puR6naDGj",
  "key32": "5MMQ5BpkDTCtyKKVtDGmK38z5d5d5PHprWf2gEokU1vNds8UfY4gQWFwCbxdeFzCyVPKVRi3xtHw9ke49cueFKNN",
  "key33": "5zZXzs7LzjaRgVMuC3poQRkj48DYQ33yUTWe2PQxZ94kszobECxYFWK8D3diwXpsyt7C45BWcdvVYun1MfxsBGiQ",
  "key34": "2Me5bnJ5zc5NNVZjVzDEmZXteDsncUPMhXSzTiuRb82F3q1EaUA78N5TcKu38MFj54Nr8pQkV6p2jwcVB61ffihB",
  "key35": "5T6BAZiA8qboLjkfx2ZRhRpMM7L97VV9xHG8XK61997NCo5Z1i1At3hBVPATb6GPXK4p5SkBXx4BQS63EDvDGeYh",
  "key36": "121kBRaAawfU34G6EgN58dvrHXCSXMHqbrxSjRs1ZtVTwQM8f555LJLsKVJtMswuLWo67R3h7JpyyH2TasBez3Tn",
  "key37": "4F666HQim53DvfnoNSoKjsFybCMw4GCDKcYxoCY4aS2U4gdWx3a4GiYE7m8ifZF4GrdjnNs68pxY83e21JWLHUDf",
  "key38": "4q7VrrdMw7KPjST2Xor9txbHCBPFvqnTWEWGtZLWrsYBPokXWDF7ZTSHqVQQNStr1vVXZ1vfuyregJzH43nJJPsA",
  "key39": "dQK6kWPQ9T3LEwqicNH7RvyWd3PSxNoZWLeowp5fMVhNya9fs1Z2bwGcy1wgki6URPaACf88dzA2MiWsjUPN8We",
  "key40": "3xuSjuXUXCtcNn6uuxdsnUTv5EMrdNdmyvxtJ2X343tSzZJZQ3GUkCw4WVjnoQng7QSGuxeZeYCvXKRvqrC1qfpv",
  "key41": "dfw1KJYqpXQzhHh23iAmkEj4pyG73EpB86tiTC4NmwzLZfV8QXV7S9BA7sDU9aXtM9DLLiw5N1r4RMMJYPAGtGb",
  "key42": "5A9njCrkqTrg3iXx31Bir4EbCnti2XDX9XwM3qJDCjFytC9LT5GCLVXHskYWojLsJhNfcy915UvZ4oUaCTgaPrWA",
  "key43": "KC21b7CYyt4m8NZrQnzb5vn3J6dfU3HcgMBerbD6SiDdDZN4VEwJKy5zdUrGxT1G6ZLoh2Yi1ceZmMUzUQy23rt",
  "key44": "5oBFQYyKE92RxnN1bN5J6c9r8Vo1TFYYrjxFBjmN1jp3A35biJzJoxbR2B84Uy4MdMNprxrnKzcsv7aEBs1yY3Nq"
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
