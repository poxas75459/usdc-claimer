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
    "4YtuhRD9LVtrw4GnUyHP2NTARxAFymvs4YvDoLM6XbxWd9X3W5RsNNYeWh76HaCgJ5SoNgrXMbigjXLueVChcoXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2vBK54skyF5BWJMwEg2LyG6Td7jvwxnxPkpAg2LngXXTCHeRe85FxMPwH5kWQ8tUA57V9zun9vpadnLA6ryzE6",
  "key1": "4EwkrgKYHNHPxRu16D8zCZD5besxKfFZb7FkAG4VUUR7LPZAHsDjxoThqpfoDrNP1EB8cAUHBPZtATh2iXzwLQE8",
  "key2": "C3kyqKM3CV2JT9F3tPMoJuL6YNptMMQ5CAbNzV4BbZaJoKrY8uX9pDbTgSo2KYgh5u2zFsSFqPTYddFXbWqZjHT",
  "key3": "3nn8qp297vh4QrqJ5GyFLVp4ebND4t8XGn1HWeBYUGFabw11tA7VXaxMiaShtJzA8hESftP7bhoXhkPdn4D7dLhc",
  "key4": "SyG3eyi7y9qMpEmujfbv5zRtrzaAAxNxxbJJB6f1GU4j99BLDVs3fosxQnLkXNqG6d9utsaobC7Ph5c1uRBd2Qw",
  "key5": "41GtNowajykFNhRgjFnT36m8UZDGfoRxTYsEZ6nP1cQSVUEeeGGchCXKdyuR4nGfiLJmntE3VYCPR5H8mAKrm2dF",
  "key6": "2YYdc7VCKchCkaHprbfPTZoyCWfYasvTVUXsuU3Jc5E2wWpssUKAso7G1udzMJDxavsjZTBghCzu2y6q6ZoTt24A",
  "key7": "49U7FgNxkKdhQZ8hLmgj4DvwRWBsCTSujfwYB4DZ7H7gF1MrSyEALHnji26dcjmG4B7scCrJFPBYSRJaLGEV9K3f",
  "key8": "t7TvfsCURB9UbikpK7tcdAYvpe57gzmhk5PLBxavTTErvFViDQGhyHAbJ5Jf3Ba4dGwri3fYUH7KJzojuToZqmG",
  "key9": "4J47YJkdZ2LHUU9EiBCDtkb3mtPRxxHhrCTXdKkBEzRBcPt4nkD1RE4RMkvqorYHK3zZ4JtZpx4mCKy3p3oRS5vM",
  "key10": "BP4YptTaDutATGGgQKLmNvSu5ZswTLrcM95K5RaEcDPXkrRavc2kNTXdq68eWu6bAit3omKau6T7EbuA3onJ32C",
  "key11": "2F8J85yqEzG4XdR7jzZcBkjCbUJHNiwnBepruujQu6ibhUDWhYt3CKEe6JNPtESbmw7r3vMjPFerk6XfAfN3B4qX",
  "key12": "3vij2eWv8zfGcwdwqdM16mDgZU9vq5kMW5FoWy2bv1FDw9Yk9o4BZ9ButpEk9H1DuzWK4PKjTERrTbt6kp7iwPcy",
  "key13": "2W6yXkSwvKiHPKyDqs8UpY49AMyeEpQu2o6QesvBFXwgUaFnFBqtHvPoRet2dBc4RAoNc8dRoWj8bTbvaqD3RF4c",
  "key14": "5N2npvNRB2SVjF8cGzrHLMsz3fY1gKarmYi69YgXFbxJbMbpJfCAYYkGLe5vPHrohrhcfHSJ1bt63AzTxZRf2deN",
  "key15": "5G5MDoc7p5dFgACxh5iU377NvYZ5JncGh9g1HCxHeZZgkmfcXKon4cd494J914VLSDj9vWVbj6QdacRejv3iyhg",
  "key16": "2GvfJbfgAUykNRA4kM3WqWPCu1TxYNadk7ziX7E3HKxrkR6chwYNtxFjKKXLuFN2LtHJcLoLomTTFd4wXAP4MToD",
  "key17": "dhTBuKAAy45U6J6sWRkgMpEftysfDrDafb1Ne6rW7QCACzMdrGpZubjSXB9ong3dHBfAciQZcZFohx1JK82WShg",
  "key18": "5KuJzJF6TTb5YiyyAunjPP45EW2qQkJiGWfhqPfnh1aPPniN9CVPTv4G9CgpSbCs6DKD1ygKEJM2cSifzYqt3pkn",
  "key19": "3eE19p3kTRc3xtJ5AiH8yaNBNqxKPdnTA8cdoPYDxtpW31ZWB3LdEU1w2DBc5vtfdBfYinFnFs1noJeg4jSUgfbB",
  "key20": "2DsjULimyYdcTHTjdPMAqoAWHxV7YgXVk33PY2V8Byu3sDLmuhThSYwmtabBQykkwq59HSxVxEpRURT44prn7tAM",
  "key21": "3JyBFW8Qky76kX3nVaCAq5w1GA7yxMZSZShp7gC32FSy5jFmNgcQRr7HAaK2ZPVpuJSAGm8gAErHywZnKcPdue9k",
  "key22": "3AMPdRp4GyKgoZr4GdVoC1pqJinMTbm3ZBcdab699fq3TqgSF8m8McWkVbe6TNwbxRcmm2FU8peD5GJrPojNx8P1",
  "key23": "5R7SkxeWdpDesMPZYHNRZyQ41gMWqeoKoDsEShrRRur12GK8QwsyKdXJFQyyPSvPPwXHxEbntdC6uvtuLrDs4jh2",
  "key24": "4rd7aEsTmxjFU9Dazctao7ot9SUNFRDGZYBiYhrGbHr2sy4nf37wPKaRfYZrFCUjfpcxQTL8RAt2aWrEhEFXhMSs",
  "key25": "51yYaZ1XZm3T2okvnr2h2N1j42FHtjv8Lr8ULN6e61hNQ5LcZt7pgm4aJbTawsV8c8pZ3uBfsz3BpA6Bay13kGC4",
  "key26": "5EUX1nPksfencGmeRywfDp2SKiPMVZepnPoKZCEzbFXYWdGpnonSfNT3WkG9XCppZbJ2334hVdHNwkY8uRSMCtdr",
  "key27": "4soRiVLfkjeUYmCGJPic13sn8f8quMAh7J6eHm577wMuS1tpuSRDFZ25AamN2NhkdxpuMq4gjapm8BvA1bRBCx8K",
  "key28": "25g5BhhymVkPdqVSQuzW1juUXuUvbUmeETTxdCR2BEsYp5zPb8d1kNANqtKi5ZKAT6jzdxLbVnnYQ9uXJ834qHDP",
  "key29": "3hym9EruMCQjJYmSJS9E2VAUHNJff6AjwWNM4GVhtrYsW98MPB8GuarDGLNuF2dvHrNzFnWfLhuHYNAyCkhy1YZf",
  "key30": "3kHnTQCVVnPksdi6i4vPCUm8d1DdKrY98rD7fzPMrwzMRRHUZMgCgTHFKHXwnWLXRXkSbAT2G6dnReNWndvTbkWA",
  "key31": "5F6Js7Yv2pTnsjBzSee43xTGjmG7ZKxDYPGfQuux4FANZQuZyVeYWpqZz6UpUos7p2yhHSLxsUqTGrzWcoJpzbjx",
  "key32": "3nKaPNP7jbzgFYzj7ZCaeBTyFir3VZSne1Nob6JfAFFsj6n9MMumaYbiv7Qo9pqtjRRrdyWSuyaVQ1yoS9Dhu5wM",
  "key33": "Lkh7eDgthgpwoyBiKZXaRcg1FxA3PriwcAcGgD6PU1yAGaqe61uRJeGto2XPQZgnvaD9V5iXZMHBeWsF9RAiCpH",
  "key34": "5kc3wobbvekwXYUPLieMDppgkctmEMbNd3deDLUwbrksu7H7VMzrWyWoW83cEyCLmC1qYe6rS8Y94vTifxpT8mVs",
  "key35": "yRiRQ342vHiLcTqUA2SMdEnkfivcee6LZbGypXU7dHqEkCMWkVFRAQqkbYaiQ8AzMnNQWxZSZsJa5RHHpikCA7p",
  "key36": "5Z9AGya997gwLMyaVBtzEYNcVvdVCbhW9NsmDimKw4fopSjYgjggFU81sWQpJFpqtJwbG787G2xJzPFGGuyn9pbB",
  "key37": "587MKECPTwbbPrAUeLfxhuiDYfVxauja4QYVvrnyDenwfuimsVMeVC7qt1NECtYttDMsJ3PXHykh1VHV7BQvkt1c",
  "key38": "2N9GXJSXTzizKxtvaiG2nPikvY2BMP6UirbYaMBPfvc5pWjQfqVMuLJAVvw6CDyD2eMyfYyvvmYXVdVqjmwtmnFY",
  "key39": "63FoHHEeno8FE7FtcW1kmmTwfu3d5ekrGqbgBoookgAw1tLKCbDxn4RDLPCLT92K7Fik73eAQK4JUsBn9icecnM2",
  "key40": "44ikn8Ek87eHZ66Bw9JQyiwfP2bCL65F2Yw1yJjHULnHbf6CwyNqS6RUcjr86ssMwSKzXv98CQZS1yXzY6LWcEWB"
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
