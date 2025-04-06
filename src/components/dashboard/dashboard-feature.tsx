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
    "4UWqJAjXYDT4ZXeNRqKqsCMtRjMhv7NTLAfxKsJPmXjJoNwYWkdcetWEhVfzVZ9qKWijfjQzYahhRgf5tujuCxLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VroLcQkjBpZ6TRwr5fccY2985gW2nAfAPPQfrV3SZPn7R35EDR67xk8sPhArdv5LZNVzMBLyDx8M6Q9jQASzArs",
  "key1": "2mxMLQ9moaXpkAkLoPV8XkGbCSQMw8wEQq4hVxTpnPFQKiR3KJeN4ZvvNcmm9AS9nAwE5s3zMR9aUPE3hFWg5Mpq",
  "key2": "4uCVnYy3SpnymFm7KmWTcPXm7yciVHqc48Ap7fQ9uqgieUNmj7RjpSiHHPNixUGDRom6DFFQnq4uobVo8QyBrkj4",
  "key3": "AbZnvz8UaBE4XcLuZ8zYQVPNrUVKBhy2W42WaMR1mQFVU7WHYun4gAq8QGvrfy5LSVyTn3vdGuWJ9baMVfRvX4A",
  "key4": "2xttzBYFhiGaRxnHzTZJWGqU4dXxZ9RCjcxJmARddWr787783D8cyxkxcW3qgMMyce2pBefpRvMLSe2W6uS6nuKk",
  "key5": "4jfhYohTFNXfayZrvngM5gSyCnJ3QDa5PCUQFhgCKyKv4NsnoEXeWkPNHBoqAGE8A6qgCesec8svoGL8ETiCG4ts",
  "key6": "YdCY5AxXYrqC6ZbP4EACJJVVEoy4Nm9cUoMRGfuxJvfJRXBEVYszxWy1soj1XmuzApnRr7yfUs9LjE3gDn4JZSK",
  "key7": "59DBVCVFHGsUjSfwEqpFqMLZhWtH35fxckpvZzkegrF8yqmzjknjjY6iFJTztDSWsvB6feErTGSBk5NADcRCULSY",
  "key8": "5xbtCjrA7GpkeBfA6VCaDmbBL4chpDQUf6xhnuFNiqtTtvvNGML9bJZnnHea31DjdDP2eYva3pMaBoV7uBvUVjR7",
  "key9": "9buFn3TkyoF4nS4oMkhHhYwVCnDA2AdAS39GT47mg9WQiRZSfg9pd519hpspHdQWh97hiJWkmwF1EGyHdkA5WRS",
  "key10": "2JWXDZTuyw72F8o34S2oKf5ZhhdB46ko39t35WEfmZ8kzkZtkqBWcViefRJdPgrc5qJ9rgvUxjD3HtBhCDCjhxfb",
  "key11": "4SBn9TZsie4FQMAoxTGkcDaaeHcdcMnHj887SHWuMLpsXb8Kyu2Co8DnF9DRKHyqmAXkbP1DLzBBNxMH4wMgdBXZ",
  "key12": "Sa9LxLLzrqV28FLSwrpHH5UvBeVBmDBT4GMaHb7eeyoCcLR7Mr8kpV6adJLwdWuFyKENRPdZ9UMrKzWQ1LBbjSe",
  "key13": "5Ky9NfLtfRNX9VTMEaAUPBuDRDAiaViaudUZr7RiZSLibB3Swg9xmN73eiUsy1rRjaHWJyn11JZ5FT5guvA63fBa",
  "key14": "a3gh4zMAHCFEnsR6qQyi95WVgCVdNqqRyM6oiYvyirmtvFVTKv8NmUeVV7F8wgbjLB59LU6sdKCMSebAzLMQSj2",
  "key15": "jcm1bphavtv7mvRYTu4AzzC8w1BXU1RkoPzZthYFDURL4rAPF9KxRLN1oC1tQYnUf4LFg6eDa7sx9KbN4tHYg83",
  "key16": "3E4TBhG3qqvYgsgdVzNMmmPkXR5ynSS6TdwRbtJZKzj1Ye1j1QiV77BLvcsRStD3eAXqaVc3evznvYqHJwYaoC1F",
  "key17": "5zcQonh6nzk8edUpHhuKX1CyadqBdHd7FA1rWu8MwQc8fw35tcgjNS8phLLBKM2FWEeMEhFbtVbVTfVmSoeqDSFH",
  "key18": "c2NqLBEPUeczGvF7UmhAmP5ayv1KCgRL3ps7qSzig4p6mR2x2FcV8BBCEDRRQvp9PPqAvy5k9Xz9fkzDDvMsoFo",
  "key19": "4wvCTr9cTCPrLzGwiXPpYxfDMX6neppDsrNabDz2Ay1gHu3asDMgt5Wm2N4g5hqDHgTBPhGJ1mSRTEMWFEAsoPD6",
  "key20": "5d27UKRvBqWZQrmw147LuCQ6aEMKkiyDbahFmX4iB8vTir3a3RTMsdFynjKVXyxpZGNc25hs8NjpkmuTES9UTg1G",
  "key21": "4giuC2KWHCMWV7R7WcTqrp38ZAxyotRhx6MLmYNmNuv221hiAPs4U6R5ViFj5mrUZB5Cqq4pSTHdzhtmUaqGGLhg",
  "key22": "4UyoQfH8YUZVyn2vXh2btzsGSfyyMVBz95iYKN1jKsJC2aw6iaXicQPJqyUvwGz6g1MSrqGQrLX91D776bgecrea",
  "key23": "5uTYzV7otv9PzrEEBUkxBdJeuAUs278R8LuG11nUnndoTqpaTve47EKyBmapGV9RuaGHTrM1Thp4F8kKqyeQTYri",
  "key24": "64mcyrP5YA2TCdYNEZUsbUdCTKp9sLJVQLuAbkZ51AzZfqcnkA7ZnC18PvgtabDhQnhYdN4JhBN5V8iD9JTuTapb",
  "key25": "2SZFeH59LUPxPuzoN1n7oyBW4TKR7VTFL1CSLKDXM9jNV4b2fVUjGjxW2F4MeET3M93BXuhF2d5R7G1VGrqhK5t2",
  "key26": "2Z1jtkj4ewLX1cE6GXaCDK4FjBatNATkZ1TU13tLzKnivx1JuE3NdKZLpDc4THkp7QHYhx14D9VDTJ9cVzb4qWvC",
  "key27": "4bLd6rFeUpEYiu6g8s3ZdLw51begeCgmDWjaFTffkFQd1cKKxhM6UZu6dS9gMdMFfXfChh3YFF6C3SRPHbzXMWVU",
  "key28": "59fxj6Bmwcm6432XJ2XMYziEU3EPEX4uVHX4AWGzVpdpS8owhMu8CCbMCZRs3SxCh4bGGRrWgLKQvMGELE6UQiFA",
  "key29": "5pkKLaa7aWWfstoVpXcv1ia8SLzsjAAPzpF4RPKmh6ALgD4yxce4GSvTVdEwwTcCcapb2FkvY1bZtCFCXNMLDkF3",
  "key30": "5iS3EjNSBuGgsKfq668x1GnAigDqAwsMZkFwmNaswMcmEPCy9cacwaaz2qHTabj6GSDFPBAHner2dWVaYZPX49Ep",
  "key31": "3ku258efhpDfZJZYqYr846EyyfcVEndbviTJyrsaFehMg9gevid9V7fuSbhWCsJeGQCVHPrkCSJ7Mw9HkpYjgjw9",
  "key32": "w3mzzgaiQbA9s3DQ6Tfgm1DMyiW3dqrf2XvmeibvzbuZ1RhFWxHKN965uo13K38u6AqU74KhxX5Tcpq9bcadzXt",
  "key33": "5NCa5QGy9mjWUSsmEaMZ7fLhjWn56DGf88Geer4czSwppvfU9eEt6CEYRdTeKth4XREztoJ733wmexF7RbjESUNJ",
  "key34": "5u7e49VjAg4m95k6oHJ9GXPSJL7nho1BsPHcmZRjPKDYgZh2uLYc4R2HAFzHDPG3MdPJzMFMFn21QAaur8s7NX9g",
  "key35": "225jZ2Njuekwj3XFCsG73HLEzXVHX1U8zXp3mgctHBFoNHPNbhPT8tsjioRNpk1SE7Qrh71uNQNEHZvZejNKUh9V",
  "key36": "2FufiujFFQ6uEJ2Rqtk5hCzecXkbFrVKdhk2d2Juqit7jes6pN5T6WRxH7rGesh5AFtmEHPKmBNoK9tWvDvcBrko",
  "key37": "4sxyQHHoMoKBGKQNiP6vJD2eRYxY9TTx5FtVSLbF4Admb8DEcDbgezF1QH8iQ2RHSVM2kgbrR1vmzmxYw9rT8z5y",
  "key38": "34BqCfMrJnbm1RkDGv3fgpKZubjn8VT3FE4qfh16aujTaJqgosFYiXWQ2fwZdy1edHubJ5N3nmiioohuzMRK9rRF",
  "key39": "4yvK3vgmGpS7hi7gPcHH7YUCTtPk8yHtUBZinizdG4EeE8Xu4eowuG3c7egJvco3odurwxKYaJ54j1qVjqAMGZSF",
  "key40": "3AQGBo4QhihEYCaVWELxErj52owjy9jL68kj5KW6ipBqQ35NH6CuKjJmotqnft3wi2wHnNT5bNYhkTVc1LrBPcbi",
  "key41": "5BcSUC9cuKi25m3fnXjdkMXFi72ywqmdwe77hThgCfU8V3Vs2U6gu2iuojWfFS1FgbJ2xgAjtNd8Go8imBSZ6c1Z",
  "key42": "3cQHWUBjKh69QPQSzPaK2tge43zEn21raRch6uVgVqR2bKNiAWma824GsX3ecoYbAo6gUCxdYzMbmj11rwjtYJRF",
  "key43": "3McGuhiARDTNairarAdKPPEGsMaCTmrPnB8bgJrN39PA5qgM1k6iBEizSqsVJPqVuJcisF3FpyTp3RxGmokqD86B"
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
