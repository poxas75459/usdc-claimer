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
    "7FnKQu2dGsMrT2qfUDUrPwwkmdYoG4XQVAR46y7mY1fiS8cXa8y3HaEhE174YmfhyyHsnXgHTHFfGMWmouuKaoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DvJ5daoxE7q4wxVLHM1muNbzxSTGnPZDoWtiu3dgbZnw9vN8vZMdQfM8de6YQyT81kCPjB3PcWnaRY35fKiEDnc",
  "key1": "3g2V45L29VPUQCkVdCfskR87VxpvDsUFvZDxPuqae6e61JiyPgWvXyt65ss2fCq3S2yxFATUY2s8ia1B1fFmz3Zm",
  "key2": "3Lx7hoi8EBtG4FcdcjVyDmiHjd4cRTZZXUPrNCSBJkWTEG2n7yLWWFYJ4v7g9ahTDM2FQt9gMpY6AWcKXX9xaCmg",
  "key3": "3APvdBTQQUS5vho5kBE22K8JYaZ9Qq2tzKsEy7ASDYEAbTw4v1oCF4AQ6TxJUsvCUqPdztB1QpCTuKiyipNDmUR6",
  "key4": "3LkCTYNm7rVEvq3rSeLpmazQTNVb4pLBYL6XuKvrWxihEWd2wAfnkZ4t4ZyFci3VHzzYm9XyELEcFUodFX6nVPtY",
  "key5": "2HLkwr1o3nfrYWcrBywzMNBknMvt7cECCvchxqa9P5oVbPccirMXfsJ1ya2C1UpzzhSNk3wPdAM79u38qDpiw43N",
  "key6": "3qtabUw9ytUpQyfhjHDx67FqKEgXuAWd5mkqUkFm5uhaHQg2592CUxu4JDHLfAP24UZwhgvwfc6TbPegrWFzTR1B",
  "key7": "DZLXMJ3M38hRo1vDuYuQoBAhdLvv44dzEPPR2EmZgVfpNMneNUJ1ySTipQaL6EQrvNHaRi8TGm4Pbez3NGRs45h",
  "key8": "48p9brFCoXsf1YYBp7BSZbp5Pqt28p5wJfVQe5JBvFALGVrcFjuPgZCojNas1eYaUrn4CY38tbwaN27xaEtGHcyS",
  "key9": "294JC3JdJ8Sq51CKAaw65kpqsEcMj9cPJ38hFyeivhSrvt1MZpZmm93LZwYrr6uJ2MSDY2VST8sJgz9nEBUcPdBh",
  "key10": "L28mMSNGRS868sdQgRP9Xu85j3iM96SDbvagRZ7ULR8xuVSF6vdpZhPaH4RyJWcyHiRoEkofCBqCB5ToV43Abmf",
  "key11": "xE61ixzYzNNmmJtaGV4XXbSbbgFPHKmc3w1LvwYGGhXYoiCBFYjCNozVFbxddyAm3eGbKbF1NM8L6GasUagWhff",
  "key12": "4JXxjaUMSX23DrCpAHybato6ZrQvqwkQSkcg9RjzwtowUY6AmzmyM3TcGLcppAzmVmuKfVG1HA9QWUY1nxzJjkfx",
  "key13": "4J7EzjbbQ6e4LmxMz3s5AsXzJfNxt2J3x4fM9Fw5sUdAEgQrTEguZibz29HfV5Moc9Fgs4LwecCPekeXves3KqZz",
  "key14": "4e9ECy38uPpUYjtMezJBbfGvVsQ1FtN9auxzEF4NSyTUqXyrB2Kmvw4dMQ6fSrxVJYx73736SYWgjFLoWC5LX1uR",
  "key15": "u4DsLJWVN6LRQSVJFcxpGxocBx9HFfmisPoACS58TwzDEWLBgiCz1Ei1xSZcoMP7EAFrnCvPkrQscBGXp1emPXe",
  "key16": "37X4GdMuVTd7BTnmSJia68PZ99BUpAttn3WuQp5nce3xEEK7GxGZLAwaN2AWyKPuANGhhsufWs32ZyMw9aLFH1rF",
  "key17": "1FVjpky9UVzmaPU2wVFF659GK8Xk42bLC8eYyXtYUnW4mQJWhAWdzydstYTNCR2F91JLriMQeVb33gksjMVyYx3",
  "key18": "2SAsX2fKPKzQxpZLomM2Mw97Nmium4wWyS5QyJe9sAzp5oLV9P7tZJjCHXQsFJCx746Nrt82ApaHVH3pAx7CFdhx",
  "key19": "4ZHvsqppDP83Eq8qngnS7gqw7yUCEZ2sgnVBBHwq2EGwzqRmu82HsPbJnGq8H7hiRZ87FcR4in1qypsYdt4SQsM6",
  "key20": "4NJPXVcz73uHjXLUWUo5nU8qSpXbVGCkMWYQLj4ykDs9X11KqM1kpLAxiEh1y4CckEPhxxtmqbhqzMBmh76R8b5B",
  "key21": "2CzQQSeyk45TKc8zW6uEq7LrnLvvxTAk3gSQgfcxUV7f4UFMXPXHbwuV5bxZiyr1vbSH1PN1gxS8BkpGoUUhSfCM",
  "key22": "61xPbY5LBwTPChxeh7WxttPKLxgaVVofNFXyD8FyvGPKNPs5qWgHHb5W6v1RR48MYnDQWg3t7gtnxxVyYRwZkfp3",
  "key23": "53dYmAuaFLKMYYiYtbs9TobNwT7TedyMLGBdoUoGLKdep78HBdZ9m5QrxkdwktLNuxQQ8rQwc2xm5Z9tJxMuMNxB",
  "key24": "3pZz2k2UB5nDoih8CsBpWCk784neGaVD5YZEDkmp4yX36qN8fXTaJL61WpjzcBejjXFuParggYTJizvQLEA8cVkh",
  "key25": "49tXiLC1ne1ckAoSq3AMw4MJ3ohD1MiD7bqxp2zU3mn1gYKj8BhXuDbXbmcbdmyVRiqTBkwNakgwDV5Pqdc8XtRF",
  "key26": "3hEfnZSau1Xx7NhTSkJMYkZMT7dqhwQYaUq2pG8q1PatzW8wJzCU9tXzoR6qbXxswHqbmkgwHamh3jAD8FY2fqn8",
  "key27": "3yTp2sg5KpFcp4uRfm6i39uLXUkxfHGyxqrivv8qQg98GyTKKu9YbwfW1EvfxJd1cxF4DCTefqcQJYtKQgjzZYab",
  "key28": "399rtjr8vciQxnMkjVY86tqRGXYGG7WcxzGWgYSpmTyD6x78f6YnCHrMw2d77784reiV57F1PCyxaszQhBSwtJJD",
  "key29": "2CYDS3DhEessA3jzPbHETTdqGz39SNPmJmcWs27n87FgVtKWcbhGsr5rDSZsZ1XQJggNQ2FF2TaFww6ARtjDZhb3",
  "key30": "2in61VmXUm2JtYGyuGDC7s9wxzrDonfzLCwGxTHre1XaTxQRUHWrMBi3wQuqqWSSm7F6bVqsknU65odNs7Kn29H2",
  "key31": "2JhEBEuE1qzHQ1RPHzNhvLDAdJxTweJ6o2AqUTA9tnfxeDYwkzbWTLaY5HipB4JHquWjhNnt35SoGs92hX3Xbbz1",
  "key32": "FW6pPjuNn6yw6aAXgzVqBN5DLbhRiXJ2QpYPVsBMjfbYb3qH4UVY74MtGLGjFfg2WRSPpNizEUnvy5whZCbLZCm",
  "key33": "3h6Eb8nVkXAkdtC7LEGXH6pYFdwPCASWekMUk4wjDF82axjLiCKoXzkzrPkEbmk4rGtDdiAfYKrVRCCWYzR3UhdK",
  "key34": "3r536nXdGeGWVbbofgwmwuAkr8kM9YRHmNGjmNJZn1q7wcYCdUbdP1VKRSZPCG7unQUoo3McJhhYbXgwSFvS75TL",
  "key35": "4K2ACcU1V9qFBbf9CSWJYnns59w4ZrfE2MStQGTTWf1NuVKLLJ822SohKM2c7xSVpuv3nVKKVRgAcBRSV2GaErqV",
  "key36": "3kvnTCaPHptBqmU63qH2DH6imh8jBb4NRJmHtE1Q3aATFgchMcpVY7SSrrg25Pc5RFUsu2xdcV8keDnGFmkuW4QM",
  "key37": "44MMviiySUPgsCLxj7iwbXTJNriK6FLtcyvMqCLgweAevaYeuzzgupwXmJq3Lddrw6PV1TBzivjMW8vEJ3467cr7",
  "key38": "39DjCrpNyVaGTiYkEnAjWEbCkcPL9apF7z1LkbUSRKoqLuzNTG79D3eB4pJ2jYtDx3mjfuzXYGFguTYfpHEa4qJR",
  "key39": "4tcTgAW5R33eE1qQoYsYzeJNHZLLTU1Rg4i51kEega8HLj7z11mwcUzM18WB42ChxcBXpBPiYhECYQjV1b2BsYrP",
  "key40": "5aniQeeqSrM1UbeTv55tkq1r73uxUptNunuMi7yqfVt4CcTDHVx1WLv3dc1d6Y77WfkfSvzDBku3TfWgqbMguaSV",
  "key41": "4fviUAYo2tGhx78mTHX7p67GqBAHS4nw347Yo74HjfaLbypeQE9yPTxkkThv9TfkFAxpT2z8bQnF1yU3NQKQZubs"
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
