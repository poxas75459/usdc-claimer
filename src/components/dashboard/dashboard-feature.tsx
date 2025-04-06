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
    "64xA2ZTvcQHGwjQcS39j15sMqDRsRdhRkabvvGFGdvQuAvmZXc6kwi5cfDH6KWA9w1Vzv7QVaad7xgvXwwMqpko9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46LdXt29NPzVow64k9GsgKkx48nnVELpN1CFrQXFNoMZFJUfUVi1xWTHtsNmjRCX4dxcsdAZmrmk1mkb6RGppXMb",
  "key1": "5AEk8CjzbVp4vQ3WnhERsHfaamheZ7Gn15X1fi4n9wrHPBw3hUK5DYAg9yAgKmns2PE8w2LhuLBYzch65aru95Gg",
  "key2": "4iDbERsopWM1wLWw3HxjTTaUx8ep6uSXUWQvdgiKHBn3LQ6g6YWeL46LjVpz1hU1bTpsWu52ZsxCGAk3XjqJJ6qJ",
  "key3": "3GXAZVuK5vtVdjcrtAJ8BapKWfnDsgBViheihk1JncUzGNZL3AcbJvT5DyfbT7ifs73kLm6fdGnQteF4iSPYLoSq",
  "key4": "29RN2UoFk7EmFNs7c4ni8bte9cSz54yaZffbgDfRanRBUAjYDmgTAAA5iEeh9uqfJ7ypqkWv5RS1YnQT9SZJPhBv",
  "key5": "JigZ2dgYusZJnKXLzxvDXcZndHQVG1KbwW9h91GEGJg8RErkwfuGKcaRPY2oooivTgufJeNpHsEifB7vkAkz7jA",
  "key6": "3m1vgPutZcHivSRbMcG646U59HGGxVCQ2yPXW4eN1kcvUJNz27LGh6R17euZC7s3kUzEnVGLeeREiA5bbaTLw2FJ",
  "key7": "92a7Cpf6kS61N11A3wJXDit1ppLWoshZPpswRkia4HGdqgGvAe76BUPJGYhzjScw4Qm3BWXDiarj9ubfepEFPrL",
  "key8": "31J4Q3ks7JrCTDaNtZ8vTz7ckt75wkCMUDQdZQ1TEZnoZnK89LWb7AN1pcBnZEbXiLm59UhznhrdwcLgdC9t1CL",
  "key9": "3VSv9g9BWtVsjHkghBCZy9UfzdJwrW3NMaL2wVDa8WmXoBviViEbU6BT1jpNNPF2DXbjsrxf8w83DsgTuR1feMUU",
  "key10": "2wq39pjHejtD72UzpMdxAz7ndaN7xYhdFv46pcmhU6pB4BKKsnn1ySZn97w5PQqhgLhv9gj23YGMse5MHWiw83Mb",
  "key11": "56EsV85o5eLeHiKA6sGJwuakdrhLwQDvkeF7gMkGtqM57jgMbUN9fkcaeg8SN9Q25eVQ3tv9BqLgmHUbiYnr8ZUH",
  "key12": "eAU45NLUY1ok34pwHzyncBkZbEnFKNWzRkW788r1SFtK3ctnaYtyewB1RrKGVJ9kZFqF2wf7o8ZYD11PxRvirq6",
  "key13": "4w7tU4FX1VeumhDS8327PdjvpwhNDeaNnbVvsi2uXVh8wKUEat4WpnvBnXjik2enPd6h3jkdV3W9MwVGtrrnqYma",
  "key14": "iU8XaPFKqeU2VJrvK5vyLN5UHER5hxg45PqFamuJ7cv8cTWWreLR7spE3irKXUGtRyivNrxp4xRZcqLqhoobXH1",
  "key15": "5xuYD8X9yXaVvF81MdivohPQc4ANLTUSbpDt46VQSs6v4dcMn1A7co5gc5mYCKYrGHfT2X9hbmqGYoXAEwSkrCJj",
  "key16": "2ujmA6YG5zPs8CPesPCfC5756gff3aVUd6f3YEG16nvLxTgg9iEtNNUwvXN4ZwewHVPmEy8hQ4E81ErwZT9avrR6",
  "key17": "3hcXfw9k9gGXXw8fQv9BYLsHfN6Nk1KkjyHka2Lxhhf7BsVmacmW3S2uHNimwXb4QRbFd6UM31SwVcuvC8D77PHa",
  "key18": "48KaptcKPtUE9mJCg8A5y9yRxNDrJkPoMf9QthNws1eFLiDjJoMMx5e3b97d8YnZzqgMRFtJqKXpJ6frpJXV5eHD",
  "key19": "5fLxUu3E2rcsHonx3RgCPgvybdWrANNgvhmu2ys51HbQ4hmvPxo9iXDH2mqihmcZancodHxWKtv3z5N53U8WCLTH",
  "key20": "4L9HbA8gnRtCDo11r6SkYUJdCNQgnYXasDCyx3a5X48bi8k91zkxWAWhuxeLrRPoiWpy75DLXB97Z1XA4pT7Ddrn",
  "key21": "2pLTq3UJfACFQQ5FtSKmydzzmUWdfZdCJZJj6qgEiEcouv6UGfFMhE4YnAetcutGazRy3Ene1ZMsHxoCfS9mpGxc",
  "key22": "yqHZwSVigjV76gmBsip3bupxTzKZTjbtVqk3epGykWuZs3zbh5fQNh3A1yrRY4mYUsZBRedFYwdsbYyMtuQDsDf",
  "key23": "3KUHHAyNiQPYivQUMrF9fFLmF6Ntfmoj3SreuHmR7rzYw5mWT42Rbzhd9jdSfzcPKuyttxvVuLEQagkuh9jCb8X9",
  "key24": "4fgyExfqFdnpS9PB9pi8149MA3A2DRZqryABJ7K8Mi98Ykn7c2f6Pg2eYkT1wy8GqHzC8Ph6yXa8ySWJH2Fdog6R",
  "key25": "3dPgLYkaHKFZPSQHBMTu9bGY3GUSX8ABGRabg4GdscDHdYWv5HFa2xzrwYSZAaSXfX2qBK9sNa8Ue5AjpR29Baw1",
  "key26": "4ztdpUKUuvJDbEVK9q455XwTYVGdQ9qgKKcaGQ4D1ZUMrTPtBRWYy1Fr4HmZumswksavjHPJuZm35KbPNkYos5Yi",
  "key27": "5xQ2B5b8LnWg7DbkY7Cs7zkLga3H63wbHwEfJxN28zdcVjjZjicjXPiZPN9HBhRWCj5WNRGVwntukPmEtvEp4xwy",
  "key28": "57bimHeJPjdcKErAa5dZXDTg8RcfBXNwdRAUA3Yw2ZzZW1gDksu7PVq7awp5TiwYFPfR759n3QbrmbQcWBtvg9PP",
  "key29": "3nVW6n1PQQ2QHi9aH3vWEciBYSGqNBXKTpSmGHY7qScVd29b1JpPYU6FFo8XBf6Y7VeBcLjydTQjgSgtYfwcbWzm",
  "key30": "1N8MTw4yefKyuPETKgXMqks7FGk1WSnHpJkghFChySwxZm59t4ie8Knn8yatKtftZLrFg7jjnMh83bdGabXKgvi",
  "key31": "eyQsXAq5LGvA7WF6NmcpDYq1GbmgthGxRWxPnaP6W7jv6jHqwSp1D1JVT4jh1DRqaZ4va5h53DyhBD74zZZ2h9g",
  "key32": "56fgCmuRDyguFTYm9nZAs9y38FovmbitftcdFGjXa4BwNQzGdgLSJpUZ6xyYS1g9uSX26jXpfizHmbM3T4PeK3Xd",
  "key33": "4Lkxr6Ee2qi3z82L32LhW6qNbLjhWWCMcf6cyJz3PqoFedka4LnwtArzXL9vBGtc6yCiYnoneBPiXjEBK5xLb2jH",
  "key34": "4tZMnRxo8bDV4vGUEoEDFjDaZ8rZttMtLNFV1VbVcWqjQbrg26oUrmSqc6DCZ9Vk1QpphmPM23QkHB8SK3C23kL5",
  "key35": "3SMD1fEUHrsxVeXitYosAL7D1xnE8L1fxA2fY2tsf8hnwt27LdhC5NL1rC5VmKWMjxpnsvcT776eDdRxkZ48xokG",
  "key36": "4316Cpm6Cme8J8NjdM2vQGdSbs9FFpMAce3xKxdwRKKUZYDNPx4uNkfUoAFxHQFAoutNd8sET3mgnyXGRqLHdvah",
  "key37": "2bkKBz4X7xKTkTjwdKkahzQcZw6vnWPNfCyFakbs8UadanmKZ8Uxv5nBojGkqCNoqrBALg3FK4JPvWMeuSaLypss",
  "key38": "5i9gkRoUBv6nmfup3QrFNgE5GUKPBZ9iUT4pr5sVx1buyy6SPmjwdrq1VYBPNZyGg4ixuVHpm8gChNso8KjrfvQP",
  "key39": "2oLiUt8LyzfN1NdVjfNT2t2LrspJNeWCzkiLnj1ZaHo7UYmNokmTDwwjNBrQT1W8eU9r9oCfbzwY5SyqB7913QLn",
  "key40": "FRZvhHgsjG2pAhfL7Y8KEDpvynGQxXdHTjSUrjNEBBNfvdkMC919hPT95QUJUsVzbCKGg9jMbQfKq9T53gD1shq",
  "key41": "oJTC4DGbokGQZps4HBXzgmMfw5EmKqTVY46HB19QNJzAaWD1urT7APZeCAvw1Q5kfaJx3HiKQnKnEW1tcsMsYdn",
  "key42": "2j2ofafZH653fkWjt3nkKdyRTCbqsywRMEEA9kvt6FQ5LiT3EcNmfkFYY3MZD47umhztjeMAYUMt7hWXF4oULEPW",
  "key43": "3n62czQJWa57nwgcWFmA4bM5z11gAFEoGgGqzxNpFydvQ5eprvt9Hb8AUJwVLoQ7oBY3Ez1scDod5ngMim3itxFs",
  "key44": "3VaYn9ih1pGW88CzZ9dZ4ZLc3M2oFT6KLZiamHV2GrK5fwpN51GUtgpfhL2SV1YJpsB8f8jdQehqaZ6mr4fwrxHN",
  "key45": "46P6nT31aGjtKn5E8JUUVyHyaUxaSsCXWPPnPw83YkfVY4pjnVBSGfK5SQbWutyeNYM7huFUA99LnGchqLBKuGWe",
  "key46": "3QPBA9pDP2ArV1MLkwiMERjuw3a2Gh16mWH1DaDtKMaVqy9Qm4KNj7xCgz2ptfbiA8knqyTGSm9e84xVp1C9A86x",
  "key47": "4xSJPqZYtWyFKxacwHWyjAW3XPYrPfLpbR9G3yBTCVLvgYFi1ZXBB5CDm69RFFwm7CRVVbfcpwBY7zGvBoiuJgkc",
  "key48": "5TfCCVZimRoXisq3A7RkhSnwJo6Z1RCojkJ1LM2JF8QVbti6Aby1jQM26mZU6zv66oZZ7WnWyLjepWeZASMawpS6",
  "key49": "4CLg3H5vHUqUJQyuYeywXTfG1b1eycLuoowTDxXgqp34whW7dsvou2rfhqyv4aADPEbxTwLiaqLyVWE1LRghy2xL"
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
