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
    "42RKSvfu38g7RJTGAPavpdpoYgux6F2F7p7otkzLjZkUJ5bbw1G8wqcjsk7dbQttt9NqW471wNMomgUf5vGo1La6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKYzAkrzJh1JqmDcSWHM4nBDvkTLzWwgSUiXqmbxoGqwN87QTg64pDmuHpWyDLPtH1FUYtiXqKJkoJUXJz3n5aV",
  "key1": "4q2oBB7gmGXfEJEpheTqkddXT5vGiksutTcam5FxcMCQVTm8bzujBW8Kr41tXJXNEQLYrpXyFPdCFQq9pdCHNzQA",
  "key2": "2XQfqUbV3gGBJUfvsoJBysMKbndTMn1UDED6CBjVgHZ2PRUGfYnDN5VRQrPfUGdfembd3g7ii3kzERcGGBgPcbSX",
  "key3": "4eqFd8inohXpHY3Bc69xo37S6Xcc3PgjrZyu3EpgAtt8VFDqHxjD6V1P6YrojUjAP3MeC78icwthVZqPSQmW8dmM",
  "key4": "2h7KFMqrns6Cg2ZDBurBjHxk1z4BSoLrsp5Y49TtmCj36zybF5uRV7ho5cfE1Uf2PvfbMyxyN9A8dRCPWr41JtGh",
  "key5": "7T5oXAxnEp6qyxCka2ZEGUvG4zuq9vVPticFg5PR7YKmYEUd2RyWR6MEBfKnU5NygDkcMAdgAm2s7vWWaLs6syL",
  "key6": "2U8eZrh7qFqfFhzktesUiprkjYdvRqLYnTaH6QrLVRYBWxeCJe91bUYNrb6sSHnk2PpKYqdGhUPjxxEdPt22jiKc",
  "key7": "4gKEneCQKVWuuK6ZycUdrSCdcfGFNtf8d2pQFHT8Tuw1LBEsVQLrFMrhAb2Rzwo6Q6cYkNdnQsq653LUd2NaZwhL",
  "key8": "3hMLssf6xdiNG4R1V8d2mdEsyQP7CyQbopv26oM7PjQgVfHgnkrtKLVLCyqbrPrxs1NGzGAhLyjPV3Cw9hqqt4HY",
  "key9": "2wByrpir3GJVymdyFrXupFrkrBbGpH7UFcZpNnugFWzvDFHRvQJLcjPSdX3K1kaF4UyLAYxYkG2HbuocbJYyEaRF",
  "key10": "QDKvDfvbDhchwY6oeMxRcyQCurZZfmGSrrW2Y879dKJNjEn1HdAWXSZ8jrGnqjawFDgzhrfMZWJPeW2br4mbQv3",
  "key11": "3DBLjx2vHc4sKQsaQ4e8KXTMRkeqaY7dvdXaKLCXiifCZbM9i8jiNCRn7Boih1FVaVBonoDP5A6vuskHc3oN4LuQ",
  "key12": "3vNf8pQbPAj3YyXt6SfjTcHnjMsTy6f2Cw6VsP7JwAYyn2nrLxniXhZzkS2mv3tiZx4pVZX3hz5uqfQUtXfQ1Hx6",
  "key13": "feE62bKvJ2xk15q9E8MWSsUgvJCvbBHZfND5J7rGfQTcDN1ckLTTMVfV8VmnfJsB66WFK8HAceiztewVaVVkpSJ",
  "key14": "3nExLSf8eY6zNTn26DWsXLyCRYiyRVyWwFDQZFrRwZUhPJoA8LvHgrhjgSxTarGJMTApwbyVuGSoWkWoRca9nwzi",
  "key15": "2yXPFSgef1y6Rneon25BvcY9G7mu1QMdFbfmyAFW39dsu6Yzf9MWfkTbQT1Ao4oTRxqFQBRqgfwUUvBT5DNaxv8M",
  "key16": "MtRNrLKkoGMDLy5Ww3EtTQq2C2TEUMmwHXxTnMZmx5B2XSKr56Qz6foFG6KB9g4oWqDLKYpxksmiUAawi1C3zbH",
  "key17": "4MikngxkoU7tU2xfZ2cE93Ngax9FbZ3PXmBweFWnHU3p7cVD2MgaqWgckVQWC885p2RkTPyF9LZiD6fEPwfzrpZJ",
  "key18": "4w6MqywDfApcH3kCXwVP5JK5aTQuioRwYfbVNdESGqoP3TyJcrpgNMgJ4e8cno4vgQYGa1e9sV1k1gGJoXfrmSXb",
  "key19": "CqVUyXp3P5yiAj15Q7S5uMFn9HDgvGNFv9B4ydx5gE5HiB8cjRAGEjhoNwvLWuqRzS5WbinVs1wS3bZEmkBXQTR",
  "key20": "3Gamisv6QcWxSEbg3UAaS3o3jjULdBdi9P5cr56xknZgia7UAJa441dn7enGKkBenLdXVNy1MHuHBbm4U6RUhEux",
  "key21": "rDmYbGjoxNNUHbXcX9EJFPFnHSXbyhekYirWoVsZQYQeZCyihYmGST3Zbd2bkKW8xfnXxRCuunXvt36JrD1z5Zj",
  "key22": "3L6odhpjaB3917yaQto6maygohDGxiQhaivkJG3ShFM3GU6LeZAyxufhLsSvXkewRhSus97xvuP76y3cdrRNWcyT",
  "key23": "3UkPpJPHrZCtECVHZoNqpWXsyAHgviz9G9ewiPEbbCbaqgvz1zZ736RfT5xD5fwrfypg9ggGMPVRud2y2kq77GTj",
  "key24": "3L87x1ukcqofTBf3bPVZ74tJJ7eRKBZNmBBHyvHhYosYtFc621mbLkRTftrnXzaotN5pfLA17i3L9i67cLDWkVdw",
  "key25": "yjzdVPBwndboBSqoELyxv2etULwG3eyJk5fJMiBQCXLRNzTQDePLZNd7W9XCRzmCKuhuXkuq69Nq6SyKwuZ141T",
  "key26": "2ezJ9tzsdBLvXinq3neKBkiYGkTT1emyksz3TJJgSZoqtsc2hr7yN85xUNHgWxNiAVo1ipVKJFxtMVSfrLdDV1ac",
  "key27": "ypFsZSQtdrxdwHMC1ifL3KsAvgcm5u9nP2ZSccJ2st2H99shdBmbVN7ytpApfw4VjFeeemwm4VYA6cv7BUyqcJE",
  "key28": "HsdfPSpMm6iRvnp6t43RMw8pL3nX4caMB682fsLXBSMBZv4JFqkKUL2GrnUuE618g7hvwiLkAfuxcHNbzN8pAWC",
  "key29": "2nC7xps4qQJULFbrqZDJv6KpeZoPrVnLesTE3cNwNr72ZALJKz4kV5R3Ek47PQAdcs8iRDPiPeWefMr4LesqinBY",
  "key30": "eBLn9DvAe8tiCG8mc2HKEkiwZtnpHjgifPV4U3Ny51KaRd7Rp9m27HaDMqBv4EcVwDcBweo4BVcEt2P1c1VxCS8",
  "key31": "LNHx9GjtEeDCJ9drwCkoCvnYiqS8hQ8f7b4DbM2zrxpHfvaZRxVqxnh8CVaaTJVq7eWWa7u3dWeeGJsGaA67V4N",
  "key32": "3CvPaXYbqdmaHa5WdbH2fgqvWixgKsrqKF2yQhuNFjvbKEJANcpW7kSJmAAgUjFuc3UvUVcsm2mWBZdT9DZDNRUo",
  "key33": "2WEBJkkJ71DZXaLvHY5YDVQj5hJuvT4EJRcXZSHLdxhAqUziNokdKNisRTRxzahFcjkNvk5qixjDCrrSHa6spRoG"
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
