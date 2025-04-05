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
    "2E31TdMPnA5cm7tScvg9yD6UnP5VsX9VfZULcukVb9uxxwkvakzyduASH5or3NRu5id5vgye21ZpmshsNK6sDJky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQLz1ePn7yFAVPHhY5uj3dCx6g2eqmooUsLtubyR9oTW1CydfXcsg8nfBiubbWKrj1KCXPGfzUzJAhDxAyYjRmj",
  "key1": "66gPKMY5YDE6fB1XMW9B4Zs4JFHukiYUbaHLps2Q2WXTEVUt9McV578Fdo5M9kqmpzYoLnVHi1j7k8qLc1JeJnCt",
  "key2": "5EfQ2Z3R2QmmnRHkR1upxekt5wwLzMRLdxYjpg1upGDu81Az7vfRjPd5kL9m2jymZWqenL3pR2B835u68YHQo5Bq",
  "key3": "2FoLXJreBLd78SKUoNeHEQoVn6NcExsmbXCABGQ7zVdMdpYTr2w3ewECtybF28cdQHtAiz19jKSYVaFf5bxfPBRq",
  "key4": "u12UAvGKJRmgz1pedX9vyQkcuMJzbnmvaXjvXBHbBQx46CftZju3piDpKemLXgkUVrNwPCUFXEDWtbCLeHZ9yEF",
  "key5": "3a5YbhY1oo99yVRqzkF3XYjdwKBRmuBt3tqP57DepRZ52wMgQABecd1tPKacTkRtbG9Kf4Aue1mNDi5boFCsBta2",
  "key6": "3JGUjiiB2ewPH5Y4yC4331WzeqSx7kBpwutp1NjofgXdZrPzdbosUt6A2bKaypBUcWV7QNCwt1P2i8PXButXcJ6y",
  "key7": "2qg5Ct2EVCeDtYTFSovnNpXQADFGQQ8Yo3FSJSdCEMbucTkGijadv45Qpm84tt6AmRUnfNBVQqvWVL4f5YuYyGkJ",
  "key8": "26s9ZBM8VHrFy61KTzkfpkRZEwrRRowRUZXticEb1Mh6krji9tRsRxmni9hKmpbkWGZyMQ4z6CQ9qoxKNGNzBSSK",
  "key9": "3fizxCeB3TDyCPUAbzqJCpJMda7jdYE6yCHjj6fYjJcYQ6oHBXwcM566MzSbkSkrNyrQ3PqxdXwx1XDrGuqJuJi7",
  "key10": "63DeCuqjAJ9i3cvK8jA6hYTnnLbkoNcrvVcxhqySaj4ZYxnBupasrC3vmf2Hiukuc1YmScYB1QoWkn4hUYJTYoF5",
  "key11": "2wss3vrz46CFSe7GwFa5FtTfgXMT66Qs1rLpSsR63SnD4xj1TzxAd7iPTE11DwDTnTDQfotjQH3gMMZCiLcXXTqV",
  "key12": "3F9hvmVMBjcHJtTxZhty5W9vb4gWoE1WPRzKGTZC2cmu4Gmj9vXqernVFeSE9c1FFHmsnvucswFeoDzmSFhF9dTo",
  "key13": "4vkVQBSgKRJRpDtTXjPvF2qTj9GNGSdnDFwciYGML9gq1rB5jr2jdgBJjjjYL5BXAHJBRfhGT4TkbhGDcXVyZcq7",
  "key14": "2YNeYtwHtqmK6YhgzfYGpUPoJrfRMyYtwmS8aojrCsi1KMRTbMSYHPpc2ZQxvS9oYrAjUZJLc72KxznHVk1hLkGe",
  "key15": "2ho7xWU4pLE5KtdPuNqtMKVhREAHj2TNLawsQRDJYf5Foia1qEsxTpTfoGsyhMRFjBnAuyYcPwodDfEUJqdcvNWB",
  "key16": "2ZK9nXphmAPVaHH1NNaF1S6f44q4mwBHo6NktR6eEd8HsEMabWgwrfT6gN7jgzHZgBVYBpCJUVr7CHDQcxSXtgw3",
  "key17": "myoWBjtJKhyCToU7zWHsFkqvs58K6ncuPHqAcJHBWsSVt7z1phG2moKvbaaugSL5UVH8vsFEMKCenDWyuNoGgrb",
  "key18": "37tkzzSyR99R6MRvJ7uYKvRRSykiZcMAJuLxjRrznWY7K3NUDWZUkVSmK3VaGtmgBUDGF6Lq2gCr9hQ3TcifPkTk",
  "key19": "4HJKmegvTGeSML5xNZXQ9j1ExX9Z8ZhE7vWCoHBAmBCUZnxBWAxzJw1WgXCXDJcD6GKVdBMmP3UHTqy1hBFm1Hm5",
  "key20": "2idwBC1i39UuZYc5i5ZfFnTiFXsNXHUbQhVT6377ryTyCr1ccoLjxcXwQuiapoyeVoLweoaw9YGM3SCrb6v2XSSm",
  "key21": "3nNYzg9mwnccrUPsQvcreVL76gDvNTsVcz6RRPssVeZQQGqyW6zBSq6kNiwSjfiaVMmVxQ1maKBV6ZQ27i4pKGRE",
  "key22": "4kwKmnpYqozewrhpvGV1m3QzNRxPGs47ympvmiFwMq1pYn5tf3PyKGhHawAxE55XhKzkfAUuy6dHsCkTToZTYV5n",
  "key23": "4JTS2RT54z5KNRaxCvAi7emHRtZPV8yDsKbnqxKSdSsLiKdQT7akh9FQHrR2g5Xnk7xprKMA8Peaa1pzBfu6rNd1",
  "key24": "3LQHB3zuQtnCpx5VxZ4ctDwysWokWeFvaZqhSQwUuhfX721taM9f5fh1JSCAa5mZSQ5L5TbmnLwjeyakm6fdWSGr",
  "key25": "XY21eaCcKYGtLavfxfxMnp8V3anjTLzujjsNXMktwx2mBFUBe9mhwdY157xsDwHMttFEEMMFuy6dAUrpMNDsd4X",
  "key26": "5Dad2npPgbcaF3rTXARMZ67hf3UFqdtXFZeqMLoJgSzdjfvajurZTPAh4VtZN2r3AoXGqdDCzUNVqzPq7b8oJdnU",
  "key27": "21FDgGCjEpTcfYR5qTXAWzYtxbfmEEa7aghXTrtDLYgC13JGnuYbMEF56EfxyhnQakhCzcx3ncu2pFU3kFevbJFk",
  "key28": "g7hRuz17dyMc17Fg9xq4gLphKG7ksZyrm4G2eUz7csY5DMoQeEbiospQdwVQsCFoRLerGkr9u3pJFuztEpfYarx",
  "key29": "2PhkBnMqUfw4QYEP49UHvbX9Jp4xn6nudghMoZYp2sQr7vAvK2hvaJkkpvPdoLSSWdXeKWKFewrwauoDc6Ka1aB6",
  "key30": "i3N86QaVH5kKXgN2YTfdrZbPuBogwEwcRA6vpqu7YHA99UGb7wuuCceGfA3bzJDZ4aBk6d3iburLE1a5Gh6aLnh",
  "key31": "5iXVMEpidxT8q9S2ZLSgc6K2hcJfcdR193BoKn8tzNdWvbMSaitmsRwbPYuuC8wmGa9DstiQj2ZoeTAnWUERFK3M",
  "key32": "2dwsCqJV1ysdYwtM1vxRVEBuBDfXTm6pdXeBrF4yAqnTfgu6WJPBwsfG4eaoEWrLNnruwnWx3ShzcmruM2XP1d2R",
  "key33": "D9zUgjhzbHim2Fp682kjx9htGWfV1xurKhmjQuAxX6krBDcAfYBsezvxaFiozBfuLHMsx2aU3eUVd9ZyDWvP3NT",
  "key34": "58epUWWfYXB4Fh84PZnSzocaTB3E6WBgqUe4pEd8nLH55VaJGbpECfjDrp9KnbaRywpfjB4iR3VaFh21ziT8JdUr",
  "key35": "49To76iuqDGdBmoJUkFi4MubyhZsAi8Y5FjE4B1tpcp9nN4WUermnhitMj75CAq8cPnJVx3gtFcP9rRft3Ch71kx"
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
