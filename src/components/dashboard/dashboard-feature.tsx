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
    "2aZQx2Bc8BK6ei5MJeUxpdcLNruF7gi4wbQXjPQ3zYuA249Mc1gfcwzS3qrST9nxQ4YQxS1zmcEKMXU9wDpoQjfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2odtrvjB4JUoADNRWP8KQ9go62DB4m1jCi2t2P9Tq8ceeNd9BdTbJcNfMvbDNPpiLAm9CNfDeVp13vsmESb9PC8T",
  "key1": "3X1H4AEK76kqUfVf4yUaeJztJeQju7c8N2gcG76LJ1PnVFZmnMX7KasgiH6LmFVmWkv24shongojrPLRbKm2ZKz6",
  "key2": "3PaTA3SrjEfhZCFt7r6RirrMiHMZKCQ1JLRkZjG4gDXLxZXB6VjkGE9AFbkCUbD3y4Zv1XmZh8uAaacMNHv7JekU",
  "key3": "2Hay5jUQDB4nWekWzVZs8xjoTZvsXB5pPxefJV3ew99JaZTCAgt6L4f8AQWERqsLKquTCUQBtTAtbiBLTCz21Xef",
  "key4": "5rjvuLbjxfgo1MyMZrGjh5X2nC6kXHZcRYwBK8SRsaD6PXU28PfZjKhja2UuJuKpbSLf547CwZyzSwiqudVtzjLs",
  "key5": "fNosu3PkFMTr4fcvo4rbT2kUW5yhrTehHkjUauEuoHGp3Qc7JbwjEHttNHaMn46nPBEkyxmnXrTGaGH5k3L6XEZ",
  "key6": "3fXq4SSr1msKpL7cdacit46ikkDD9fLtca777AfsULwbFRxbPeGABXhxB4syZQrzZFMMhypgkRw89XM2YJC5AHCH",
  "key7": "2KeQF3S5zTrQfay6MHwzA4onFYZsoc8K3SqeL17Rm4wKM6xHPKxzGbNfwPYnh1usULuGmbzeYMKPB1Eb6jNifQas",
  "key8": "trYJ96o2Uq68bvYaM1LXex9qv5UK11r9x8FiZ2wTW5DGydbYc3ZrSU2aB5B8BVou2S63TiN6Kh6CokDQaZ3nhZ6",
  "key9": "35mQFMoBdXHs5PooTLEk2MwDNszzx3CDCpK97RnZ6vswB8jM57bYpCqLXinXZSHSZgUX8vN33fh8FxEngCZFT45z",
  "key10": "4AvRreSEuscCogrebJjpqNxr7k24yVj8X96d3G5JDiJBfoza2zcYXUCH4U3mEv1DiCHuajG4RCTQsGBowcFepnkV",
  "key11": "3c9fZzE5asAz8EenTGRXq4hJRAXD3eiQECoPiTarXWxbjFDFppQzmYndwEfP5LPLNfUSd1z1rBeEJzzm4YzPg9rU",
  "key12": "46tqdDS8k1ayaRmswbvdri2jk1UJaXpWry99s7Je9ddvfsy512qPmnok4Bn724q2izrwgupygFMFeSaxvsgx4SFw",
  "key13": "2MpKweCTgdCEQqLPYFx66VbfFkhAA2uFmpJvZDQKBMrKLmMerBLUyCsay959fkSyQh7arhaGACLyzcqoqYjcjazh",
  "key14": "5Eq2xNECrusZU15AQfdrB25GsWAKfHcymyAPLnxp46HVdcHQRd2ZWZeFXbSFmMQvL92zJhevUuDxLW2MNAe4oKG8",
  "key15": "44hv741XngU2wv6oLiPt7kEnhwZhydrKCK3VDLHgGkbBUWwJD91fxY783dsRRiEumFGzcn6oAy4fVnhjK25Fwow8",
  "key16": "4oFUJfekYBzetXQavgukHMZEYsaNA8T1jGr8RR2B1KDrd5VEFDFcGrBixhtQJWNAc6muwg899wW81DfbtyErKswM",
  "key17": "2pbntYbXpZYRnhgASi9sQBBG3CrtHdwcmz55M2fFHgeTVkzSphq8Jh8zU9xQ7itUVKPvikoiMoeZQonNwMdMgTyN",
  "key18": "4mJdPHgxFz8V1yyRgB382gMUTjC1JzQfvfs2ubnmZtfM5DiQ1zXdnijuDxVhynJdDYxAqemRJ9RPdbt7JUz7jtqn",
  "key19": "2t1pMthYPbKBxPFEKRZ27PgywyJkHnisTpnu4b9rx9kEh98zr4a4G4PNm1Zno3EW3bAEaJYcgQWKdAi14ygFQkbx",
  "key20": "UmsHtmxWFAcrDciVG1xkecpah1xzG6oDX9LYhvnUpyWgHRCdurXpn84cbLwHRr35NJQquv3if6asu3Y4xnUBs8i",
  "key21": "5WupPKDYspYS24q3Amr7GaWkbTDfZD6zj1nQgVRU7umzcX6KFW3qu8kDvLAd1YumqoDXGvaLVySCDm32Kf2xUmwb",
  "key22": "2BD1zc2fgHfHzsaPav7sMQnBcU7dVrSAYdvRAA6jaNq3EV2SE4bFRvhKzq3t7qEtii8mgKdADqJkrKUmVrVVKKho",
  "key23": "5UDiye9ranyk35VYqEjGn7erAfziKbcZYZvGgZLZ8xvdLJ1ojzErha5quHVYYSdMmkSqoWXMnpSyh33WCgGGsgxT",
  "key24": "Hy7kXrNTrAm2CwYQiJRPseXBzNzx2WiKdv4foeXYq21jBeovvoePsBPCyLGUWH3wqXyaPxQ9p9kbp42A3141nGz",
  "key25": "DvWCptZ6bvR2djAdjDpCfuvZbXVxrwCHxyWEi2RJFgAwhe7KaREZaFG8KXXZoAPUdYvjBoXPDcDd2HY7M8uLwiz",
  "key26": "2BCFebvnkPBfMdZRuk41JzGps7zyjsgEAQF61JGtjbk68oD9WPQWiG9SoC6a3b7trx9s4SvJnNU7GnT1XPwPSGRR",
  "key27": "2TWVDEKEqZ1FLnf5pP3QLHDkS6z5Sk7auVxiMaHHfCGyYh8KYEo9DzfPLJZjyJ79kfzV1eBrwF1CZRxXYqewN61r",
  "key28": "4xqhwYWEuQHiGJ6JNNJhAtqnuq1sQKbj1LojgGCSo8yUJJJT8LQT5r3ygmJjbihgKfkkDy7XGRmZePf4YhZRodgQ",
  "key29": "2d6FqGkezkdh6c3fLx4DhjDVP3yn4D2R2DKnaKAsTB7RCPB9HwEgGrtmtv554A26HP9jrCHy4yLhgiXTFHgo4KiS",
  "key30": "3QA3NEXzNA4kRT1s15buqvE6ckeMPbsiP6aKFS8rWiUE5y5UhP12hPukEy11efCqJQTvw8CWKrBsGwjiBYuXvudM",
  "key31": "2TPTbBjdYyb5crVjsDQRt7dKb3cUVrxBRDt477vJzBNE7JwUi1XfzoneqK51ACFDS2oeJpRkW8kG94ood99JXWMf",
  "key32": "4JvHhSU82JYYt6eZcAFUHzFJo64Uv4vxyRJMn4GitxjBVVG77oSqT7DXnzwvNkPbxv96Y5Kih6oonuVVsn7r991d",
  "key33": "57CXyX1S3Y82riKZnNqiuQxDxgpQJN2Ktk9pvrCC3pBtHvfViP9EcX3gfnY3uubQv3KtXFx998z5LpiwyJqRFCYK"
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
