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
    "2AzYruWcym4r3sVBuHfydSYb9LMNe2zGivSvqxd49w6fQg9etBMWjF81aGicU6xbYXDaaNVSAoqHXB8LxZcxLkCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pEpSR1NLZZ25A5ucUjHgkz1euS8W655B1wLFM2mdadoYFL51m9vpQW19gGhwjJ394EnTMwwr5jkxGTNYpC2mzd",
  "key1": "yWvziYFcgpLubYnLn6yCh9qWT1y1o6PXqeEE3QwrpU3zncoSejrEgW2K49Ei3UB8cf2GEp5NgmESWaTKPP6ob61",
  "key2": "JeEifjTygksbYJrVupXweFgFxo5ZEApUw8yds2vSPexHM5eHFrf7neGioGaHu9nZgiNUXEGtuG6ti6wqAKtsf4h",
  "key3": "43ab9pMNfJe4Ug7i8HEKGT8aJdrHoZFL1NKVY8oHVLHTZnxeNZXxusRiVPL5JB9MZURa7VLM32PUgb1SNCHA9598",
  "key4": "VBs8pVefaHCqj7XeiDhWJJR6uJhom4rG12qMtamyR26UmxZbCCVsyDGAsoUWDQYLuQPNQFU7jsRKBs8Vft44ewZ",
  "key5": "34L6Bwjttwj9ftY8AbVkCvwwZnoFt3yxBAAHL4tcov6EpUNetTb3sorcFmU7nkaNAPc8obj4x49ybPav6uLzJGct",
  "key6": "4AAbuqimAK2ywy1xx5tuQ8gE2MC8DpeuECPJAzzabdhVQ9uZSto5BSua88FyLwVGXNCuF5y5fKPTT1oisEd7yKra",
  "key7": "4c2Q21BaqJJdPDd9RKp8v6iWghhZ5zyVjJbZETSULKXu713ttY2defWsi4kjhMtxn6HYRw2XMvfXb2V5mn3Kiz9k",
  "key8": "41xr1YDYZhqzMAMrh94dUQ82iyNTwwbGp45aqyTKoo8djiDDxvvc7edaaqdbevAYKw9GQieKRFXe22L2Xi8b97Bs",
  "key9": "3fcCJHf3452Q8UHoBcHP9DCJr7s3qDymLv44jTiTvXBBMPEuEZW4JWLegTjXiqgL4mzxyq79GNRg87V5dHWnWaAP",
  "key10": "4gc6poGMU8uZiEUeZLYXMEeTBVBS5GY7TfmDFnEW6Apw2KK6fKwPkhRg9sYF4NDHqbYX6XxaQSXbJHAsyS95GAPT",
  "key11": "2PaAfEzjWFdexeVADeCjjmypdtChLjvWr6Y5Gcb2w3L8r3fPND2yYCpJPJpAFFyP87pmnGEgR44HAWvhf5FqwA3b",
  "key12": "35c1W3t8Zx3qBrQFJEeLzBg6G7ugw9uEEkSx6k5Ux1XVKyWpwpRsBrFHcybiSKxbrdwrjhFNVxVTC7uogJZMD3uG",
  "key13": "4NsxisPH3ejNFw1iTZXJqHkH3gLd4JY1rC9atdNwV8cFiRJhbRsZ6k2yXxEURLad9wVUkEhfpzpJLfXTx9TeTs9w",
  "key14": "3HfT5u181AbshJzfkdV9VPFgpDD8uiNJG6bDsdrM2eyrkxHzs1zdHJcZ6MWNf5kA8dLiuHQ1fkXquw7eJcSEDMZF",
  "key15": "h2PA8stDxxEhR68yVvN8N7ZghYBDbYwd5vMC9m4qpkbkyPwLFNm3KcCzySzU5SgBXz7QQf5NKkJbEmzAoTiNwsz",
  "key16": "Zw9mhRhLaqrMMdYxMXN6yo3CCVJEEhxXohMMW91rEbBit2p25DpLBUZYPMdMR5RxGJhmtPBy5JaFw8nguwZnVWH",
  "key17": "48PGw8KkowzdUcQmcBbsVgvzTeQvQP3gZFshJNPhKRzRdGrfs2ppRD3zmbabk2CPYnTXDKpoWJ6okY8uew1f6LZS",
  "key18": "3PHQ1Fx4tESVfpNbWh26fP6qRExvbuG3ofZcRyVSBTvp16t9fBCJP65FdzpPfbnp2P3ZtGN7hs1JrNTfXMWHi9s6",
  "key19": "3vSR89Gy9WP3bznxnfYfeoanPByLJ49FqnBJtZeCDKoRoi3XqHNQmcLaUxvrM7Afw7WpVkXAFq1FpjtiHYQv2uyM",
  "key20": "3c6SJ2i4A2VN53vhbfTh5o7LBofGJsgnhHEDm1CCEZbZsNWaDwgG7vdCLd1YsHU2mUZtuoRbwAMSDmTjNzx4px8w",
  "key21": "5ZZfi3d1uDkaUwf1mYhV9da7R4SVBCwXhaNNWo58tCjX3se1i7xDqW44Edf9A4dRueXg2m83cr76wCGHFkRC2XPn",
  "key22": "3b94oJggSoh8uYwmAvbtionSDVcxBu44szHSHhm1SgssFYY5hJTFyMWAXpL4xY3DQE4UKXbxwH8PxVaGqwK87XzM",
  "key23": "614gPQ4XKehS9tGJaY1tGdSChby5n5ndwCaUoh2qdLyPYWz4SzRDEcVuwx8qX2g1phWnFPbADBBm7nf1jqV7yMNf",
  "key24": "2feV3BrNm3B72QMbuttNteVx3wZZtvuSLsphn7newfFxgER6Sm96vzpgpGXb663WbgPWueQE4phF1snj3dzNg1Ub",
  "key25": "49ECu3rNJZMz2ej3TUGizWyxiHRYP9ycpqR6fwG3EYsSP8HVm6APEuFPqiizweYA3oYccy5PTiGK9NQtLzrVH24M",
  "key26": "znvSpwk6wyKvx4v6qhAG9mG4TKRkMJDyH4U1smjwfZK6xGs2PTfczgkvND6AE3CPVNuRduncs7prGzoUgAA5d5G",
  "key27": "2gzWGNTDZ8UAAM6CHFdCN84uA1y5h63AH3aFkUV2ep8JEjV9n71ub76XtwAxqpeafLgsXb9ybZrVoMTKJ6cSY3ic",
  "key28": "2x6HWADyhF6gxHNos57iJhFxoEWjteLFTmGCEZHZUUTLddZ1zk4v4jMYkaCenqguygdi8qf6yBdhnMkqfSfo4ZhE",
  "key29": "2tFFDxb2o4VqvRjEhWUstXLJUSqU2rjaTbVpkPJdHY582cvvK8zFZzYnph161tZUrwiVQR4bL48LSx13KndVifEw",
  "key30": "5AjmCX73GHQEZesVKiMy1ic7qmRtCwEMqoujqEadQGEAxLbitxYpHMbxx2WAzWvFuUqwxep2Gf7cEriFk7En5LFN",
  "key31": "ccDjLLRmZS44PpvEjb7MdiQjwk4VJvEVTRQXQERhHDqrbVqwN1GwrtG8a67iGt84eUMKS1oXYGZjx6yUpsxU3tm",
  "key32": "55CYaagpYaL8tJcmbLatCv21MqXaovTms98zTe2kWKmc9PG6KR51ZFEhoiAgefT4W5RuZo9SMKD9zAGF8yrVfad7",
  "key33": "5Ww5koJVuwnhj2xW6TSpzTCfkXonkCdESGgqz8z1RPQDMgwMatjrqJN4ZM8tC2BaBTbvbBne8ridsDz9sEZX9uSU",
  "key34": "4wyYMzZDYR9HAVPLvf7cwVna92nyGtJVP34hcELRd2dXm2kDTc66MrUZKn4kxjCVN8JL6Ho7frs21h6NzDTVrcyF",
  "key35": "3AqSC1yVoQVMG58DhUYSst7ufixxmbHpKt9Rdr2wwp51ZMJ19GLfDzo55w4Kufe8A7b16zUBNnJ26bU3k51nnRk",
  "key36": "45HgFK1atiJYFEZbpu2KQRvkWavTnVxiJRrJrwTcvwXQkVXzZzHjnLMSrWy9rsjLakoX5SU9VXCgLuPD49DA1L6V",
  "key37": "4QTvNnLepyARz96ppTTFKeXhXcYmKb3wNZAeS81YmTNNcfxme4iQJ9KWTuVVqexd96F9iEwPXhxfbuVxGhvQAiKW",
  "key38": "4W55e8LEtqXfhUeSHTPDaH5XZxaANFbVwtzKMWGJevELKDzbioP7G6wsk98DrENX7AgNnc9io2Awph2DFekP4si8",
  "key39": "512Zd6hBUA9exwrsbSRCNSK1bMvkUbFTLnc8KSPv2sdb4yYvCitP7b7TNmh1zxtechdtk8pBzn2vbgeCYUBdqQ5G",
  "key40": "5c1bNE8E6nQHtY92EtcgBxBecAEtkRZp5RdZP8kRb9383Zr2fvghJGBA5rT8zdjR3aBbZ2p82HS4A2XjaM9Zdh8U",
  "key41": "56nEX8uVM8BiEZPWCuUkzh25tKPrcRDtDx5GZMw8jcJiNhEppeKxLwJTjRuxxV1bB1QA2vpUNVCzoprB4VgFFJBQ",
  "key42": "5TfjDK97uXw59zFwV7MJpCzgkGFcJuCSpKdSwqj1Zh2YvURhN25fJaz7MHenesMhGqUKPBqG63CEBVDNecbuDFUB",
  "key43": "6GitwkdcCPUGjzZTU8VhKUEMvgvVhG7xv7tTUrM53wAoq1r4y6kFNyDV8WmBSnhWkun5xGVXsZ85xKgnKZAtsBs",
  "key44": "4gJBvtj1ZpE2TJAirP4jhc1A94A9znhMW3A4iVxK8L3tWHAaovE4XKYh4DS7H3vAubLms3cctWSoagpwvivCiCdP",
  "key45": "5oe4eW7WH688ihSVUmKaaFsEnXxccDju6TeJBqpgVLU8vDwAcvU2jL7iaXJns9YrNT2HTSEuK7ijF6yAvifXS3qf",
  "key46": "4aQeraJJS1ezoBLiFKwWbNhJSwuTc2GuW12mBCFPsX1LxjTXCscrYvd3QWPorGnCWjsE5GN84LvmDdmPZZxjYXDg",
  "key47": "4zyGzjwavxrqr6sh29Z3Myn5BoZVbC1M5ExBRrKVT4Dgfp4csdgNn7spoy6grTcfHgeCzc56mf8BjJH5b5uNgJQz"
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
