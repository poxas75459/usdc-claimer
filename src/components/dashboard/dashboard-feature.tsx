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
    "5Dm4ns9qV66HKc1kHbaE3frFMsyH2MV2FPSmhk81KAE8XQnDM4gxxAmdkapnHHRvnoojUf5wFngxEskSN6zDNQrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iyLCFXpTsgFJHr7RmeECZf4YLTSZNDEYfzFE8HWsCFc2jLzsG9ZvESUuCVGA7xxWx35VagYBZ6kKvc7McZuCjo7",
  "key1": "2tPh4fN52tSV2bhYa39cpRCJzjHeYx3fis2HERbKV8x6DGqZ71XZJstMdYX7UM53KtsAtWXUa26NWV2opEmUgE3X",
  "key2": "3GHDvVFkJJq6jyTqu74XkxTPojreNWhfiv5TJ8UjRHBp6b9CRu49uv8CWRoaDSSs5i7odeWBKJLbP8aBRPCqHy9i",
  "key3": "5Lq66aHFnLTMgr3b4KKiNEJnPNSHYyXR8vg4QswGZPoUNzw6UNXgz3m84pouW4ThUxHGi795VJhv5tC1zdU5Ax41",
  "key4": "39GLdeQnSzAqLARUMdwKsRTyaSKzNAibrABohAKR2ELzBAyKmCCCKAKeLrTPouypU8t48aonjtMm3TipTJYzCZdp",
  "key5": "3xMY2rA4nhkGgst11Qwgv8uK2Fx7JrGs6qgPWDkukgSfUn9R1kbknjeQ8J89VFFAt4aU4A6MJjKuwSmbEyY5a3CH",
  "key6": "2hzF8QocZkZKxYanBWftimcKQDMjigwPKGi9BtiTpsCxZdoo8qUmC2FX81WQSWqyQCzqA79QsK5mMdicLegQqTHh",
  "key7": "4257pbjyRfirPgfqyhzxAa62TFKzDuip9btmoP4s1CvFUZbjmaYBcgkKq9yuDoPLUGF4P8UpwA67KjaP1u2KZFCN",
  "key8": "4yp2Nqq3uFyp6o1WAisP8Pe3fH12vDjWZ4PddZ4cyUJr7YyHCZTS8BScLvfXZ7bL86XPzV7skHF62uD2wXfXYPpi",
  "key9": "5iGXUKDcqi8UWPieT7uNnL21ta1BGwgvVH4zNPSECN73tfrNHyNiQM5BjaVXanSbE58fPehWPmGSzsG3CKDLSbyc",
  "key10": "5u7JwWU6H3VmyKJqHiQNMQy6JJRVjqjtb7BiomCKi7j68xJTDFmLiC4xE15BdvEktJ3LTMTCFacTjShziu4Foc6A",
  "key11": "32LhZsq1vyiZ4cAUix2tHuXvBtCrnrszs3xaCMne5GGTQG1Tfh6cfPX1rhXpRD9BmQYDNcQMhP788kn3jVND5auU",
  "key12": "5VxJxr8xhnNTG8pZ8qnuPiBKaR6oC7StShnchejRbm7w7RsRLFxj5xHgox8rHeLLemk2xn8YEGbyrANnSi3SbCNT",
  "key13": "4j1ccQd3QnpVtnUyUknpurHC1hcL9M8V9gnhz1w6RDdurxuFdUn8ChjymU8KrKoJsmVpy9fiMhNafEYocfufRwkm",
  "key14": "KF6kdaiZTR83GbjRaPGVzBjhNjaKNXifQ1Gm3hTZk4P6fSfoumuL9XNxyUN3AfaB4qfgXGD7g7i8ATE6QBErSkp",
  "key15": "3Ju1chETu7kSdLjpfDNdueQQDLTqfreJBxG1VB8Rjfp763cmEKmMLwsjx87bbviUuq81hL1PLzMDNwYBCHrQJQdn",
  "key16": "59BTug71Jyw8pKaAWVPue2LwTPMqA65Zm2Bt1JUPv3KZrvCaJQ1CPPFM82vZ51zZo3J6qMTiAb1zwcYqm7y26T4y",
  "key17": "5u1YouBkCdaL71KSzhm941eSYeJSeFP8khQcTj19XkkL1sQ1hBhfk9XUytVHbhJSxHfRkMZVdhHLsngRrEQC6QHG",
  "key18": "5t5G9UZ4DA1mfgpXDpwHgJL4wAzBnXT8nPcuwen7PH4mxXWNWbeFCaUzTeDMuWhg1nhToEoHLgt3ZdSAm7wDSDXh",
  "key19": "hHs3Z6yjMyQ8KZokcPBxAsVRQu1ppJVqGSp3gDqFwLnwNYj7rec4jxGugTzmGTqFJuR7RWtLPtHLKweu5LXnZMj",
  "key20": "Hh6np87vQuFXKdBgxz3u5yqmet7FgSmaeNNc1mFzuH6HDjE4B9EM8edZPvxcNwf4WqjwkqcGGqMFHFKGvM7vyL6",
  "key21": "57Jo2v4MhE9hAsvbzpUHPpGeiz8f4DoBpEob1kCzYJa6GU5j2ENWFS3CCN5ZEaFhvzD3TaivRa8dMYzivURgCtXd",
  "key22": "4G1t2f4MdQju7RBi1UjV8umqnfSUgh4YEfAQ5NdNWkzV7r1DRUA91gueiYKjaKaEMy8WpdtrGeVrY9NUJQuR2rUn",
  "key23": "5PYqevas4qQcTzci6wbd7MJJy5r11PYSz4MZRvg4dvaXUd6S3QJDGUcQDoihdBegncMBpL2amQKmJqh7JiB6W5sg",
  "key24": "4UbuWXLa8kYCekkU2R7dmm4spenYizEYANV2MWnY3VmQt6ZtTT93fZSHDVHbnqszFri5FxLS2fyG1qLdesgWGb57",
  "key25": "3QpfztaaLp2ZPyzxNahU6py5g3zzsVvUaunaCLxoqc8TVXHtUnPvPiNzfg5BfJyuc3tLT9PoTRpPrG3oFocXEiGP",
  "key26": "47jGznRLK34K5bpvU8AbcURFbeFzMAhK9CKfxqh3Lqz7k6DKJL7c4pJn3TigE1oZmEALcoWF8dLVLXfru3HYTTzg",
  "key27": "2Nn6t8Cr1ouiM2d2Vxsi5UhcznDbQkJzVJ6LNFr2Z7BFegUT7VcC9FeBg7wh6oMiRuw4MSg1Q8Ap8RygiAv3UTZu",
  "key28": "2kxVE7eznsEkMNMDf3i8VJibNVkZ2NLnMtoTCMSvgkxXQT8atUKLVD2Srwx7TmQzEoHbWdFR2GcsggxZgzU2Fw6f",
  "key29": "iiuxbBq8oAttZsod5gTsTeBy3umRosH4LdkBxVmkhFwrSUJrEmpZCATni18Gbg2nWeTy5KMHMQ5WjXYFps8W1Yt",
  "key30": "5r4nnjGqfhiHL3R4kMxcC5BMrGo3w1ny9YDJt6cc5cQXPzVfX2yQvEEUdqkNzVrx7t2MDsa64MRTuRAY3FPEKwYH",
  "key31": "3j1FREHRfBd75nQHDf9d1263Qk2njMo12bjb4551VZQFyphzBK68HjLUzABq9AV1THfvH96Z3qFy4jCbdjuaRkgS",
  "key32": "4mEhnEgwiv9PzFHGT4FeguQoQu33G9Ti1kHaArmXVFL7t1Q7RWEZLqpXarqiHCmH5kWQiRBYwmLrXPtXGPpokY3D"
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
