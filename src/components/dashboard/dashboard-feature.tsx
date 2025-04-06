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
    "3VMt1r16X6GqzYZcWr8WqLXLHx8WSutgkdJqi4XLEJasEnMtqFhX1KGB3DGfvG5kpGDpwivNf3ScL6niQsFNvbS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jYfYPZgspGUY8pznKgHEiavH1c2qzFx2ASocN3xza9gnohWN2jwcgqktv2L9WMBW32dNiPPwyucdU3kdVnqzd2Q",
  "key1": "2fCG1AZnjvhChowfAhyCHVfCv8eeh2TcAD2aTaXNrzhbPEAWEMnqfGdKrRzG4NAeToS4NMYj197nLFEiz9S7toUn",
  "key2": "2jmRChdRoGP4J4dKzXaGgaS59FHMVQCsA9avAHyzXgpbEu1oGGDtQBw4W8BuHT4VYKuiHdffYQv6FSx4rVBT3snc",
  "key3": "4rFNrXJqpLVKCjmrAinKkhbSfBYRUs6vU24SwYHMGQwvtYVe59v3bY8Afci1icgQoFhMcdgo5pJx2fM97W6ww1xJ",
  "key4": "2e8koWXMYx7GX4gxzZa3uo4b728ikM2U8UNgipSgXbNqXKHKcP2aXWC52MsxRbVCFG2VLcF68HhvK7iJWFTDLBt5",
  "key5": "5vPSScTgYuEf5NsK6Ki2jsUYgQsCKNCYPRm4jeMiXEpcLK6T6pygNiLwCNP447gEWdZbYuBoaT4SaXMq5EXVkEGH",
  "key6": "5qR6UZX6LXhL46uKToNrnxpMaW43aST7geJ8sVTfNiyt8PZ22TELgfS23fAX4ohbuzEnr8P6FbTCYwNYwomQNiFd",
  "key7": "3hRC4RPXAJFiGMXD5WigkZi2FafjcuASLW8aokudSgqbQNX8yv2VuY13zHobekdD8Q4XoxPgvhGfdVWoVRuyZpun",
  "key8": "5PuXHVwTjpW9AH1w1C3FA6EpRGsnTXs7GJRavFLpt4kRKsDWcnWdXVXZdm2Wsrx5Ptg3JMb5DX5BJ27SHk9j6PfT",
  "key9": "3YQEWrjjRbZhMi5DpLDJBfXYJ7RRvnpsxwJR74gEaqoypJ4wAMT7LdCMA2nmQKXs5p1YiDActDoQxwAKH3Syc5zR",
  "key10": "27XFQ152jSSnnAVKZjbc8VYisrQuingSWZL51tJVvoVAvS9L4DdeqsqyAdbmGHnow9NW6PTa8WENXJSyertVv2vb",
  "key11": "3XRUD9PFu5775PaGe9HTyfsCrkQcvsburwBASi7Mhjbq5v1GCzrwCoPQ4j9RTevoawne9u4VyESqJvLcRtNAc8m",
  "key12": "2vpyQRMWXKmfL4XEcsaDhTA7vysorfGmuepK35dvohYKzLScmThN4aDyaMptGHder3YgK9P6V3gb6QgfBnV79pFU",
  "key13": "4ZMPgdJZpQgUSGbX8aKHhvqxb8MphwJhVydLsV1Hdx36HYwcNSmtL5LitYdPCsdp2j8KeU55Cfc3TNURP4uBEvpq",
  "key14": "3eihjKGQ9Lmmv11RVB6fMvNwcM7shqXKN289yHATF8gTEwRBiVKmCMmkbVyZinZVNusJC59tinNyUStppKTRVtx",
  "key15": "3suBy1QbSstNCSbtEWpkB4d8fD3ZhSoRHq5shQDf4aHbRguKRdD1xsJmfB3474v7MmaBFeQxYd9bWK8kCz6crEJy",
  "key16": "289Bm7Gk2ppmSRhLczjWq4UfacCTdu55uo2E98PrXNHfQF7cMfHqJQUodDsyzmpVVTnDFxNnpMNXgAUFqBznSUJG",
  "key17": "2rFmiRGoh8mv96NbwgoPbtfRSRqm8WDr6h3QccrBG3Fnpvh4KderpoLAxGuzEFQh6K8QUwYpsCdUcyw41CmLPZgd",
  "key18": "4Dzv2WCyoKKei4i53xrDKh7n65tjyHPKdM47xUjG7yAuS5Bpy7SUvQUw2r46Ei7tZLq6PKhr2uHPby8mJLsWhPe8",
  "key19": "3LhyP2qv8y8LxeAnhYisUgV6fYHn9z4iws4Wm3cPBRMF1dKfoWRXH579zyQUAbUEd4CZFirkR1njgKGxJfEu7iDi",
  "key20": "3yeqWeNHJuPYH5uCR2HAjyXMBv4EJ4FNQwdiTmz7chHkaJAYtfXn8EYcKa2SPcETfJUELSoDrf6DVfVaewqmcF6H",
  "key21": "4gxj2AsCAcrEEwjodG9gwPVxHS6pPcH5NwyYhGBvGFhQRFNmU8VMAHDMCsorRRwBNyNtCwUDKVnvqHKDNRtPRetj",
  "key22": "4ydWQhnjKxpEWuirY13dtfngKKcg3d9X7yTijTCkMFWdL6rh8GjJKx3tGaWBKkuiTNKMC8iVc8vHFNXvjuPWrVKU",
  "key23": "2aRDX8xyGerRaqPPg3oBeF3cxQs2mMps9K7t9SKg5wiosBviobJxigSUrXVAS1TrpdruXYmEF88c3GyWgXtgjQ6V",
  "key24": "2bfD7C3ix5mB5jH76rqhcywx1nryQmCqFFJd21DZCHwwGm4Bb1vXEym2CeyPad2i76WijHNRQmvXuHvXe7j24uh4",
  "key25": "HabXfikaixkb2jeWADoEKRynPAtVSpQmwKMvCniTtmx52Y6JLm9wM2d1j6A1dynTbzF7TKLo4pzihd2q2TQPiqM",
  "key26": "5SjW1uvLXLUqC8qKJA9a31RqzKMX37nbCda3vamRFWakFwrsuiQttmpgfuVeVaARc2bTFboL9MZcY2wqPGGxe7eo",
  "key27": "5tFzFBcPW7WgGnXUZcfKDa5rfxVrDZTY81An7EvoHhVsnCgzhaEfBPLeVE8pUe6bghmLMY4gbrreTWXSfpMerVRR",
  "key28": "5Pp22u55uwEdU9tCSG85KcFVd9tj8vQN3o85JBsQZCS6wtptHd6fyyENj1JodixM2yUuL7qhHhECLEYBn6ZA5mRS",
  "key29": "2YA63GoVjTdXNVqp8FJDWKdf1MrxX8GnCj7uWpyNWavqrGkFyDz7WpsR5Kv3mdv4gt9dBqa9jGfS8Y3Vopvbiajo",
  "key30": "4R4pPiBST8Q9YoJLtuKmqZRZbRgcgUsYKHEUSJ1M7xuhchg2UCrW3Phm2rFkrWfUZbRVAHszeRwm7hPid9VVXAq7",
  "key31": "5ZoygkSNbctofzSb6AKhFG9sRQej53EsQaCi5MwjTYUCWHdd8Bnac1Ljz1LFeCmuHoLs3VKznwNFYrCjZkzL5fLx",
  "key32": "4eK4CABMLYP2waAEx468vJue8imL4gGjpxsRUaVFXiVTay1caDjTmSM6CvnXreAjMki3egsqFPHXwQSB6JZxueFm",
  "key33": "4XzFgNYJRw3seELxpmkVFgM7ku23WQkSb5NiZ9QnXiVH6VsphpyQitEEvbMveAu7qmPpu6NGq5mj9S4JCgH2iFxo",
  "key34": "4LT7u4hR8PcwSpChTsc5beFP8zdUqbs8tDDoTeYxetbKQ7gaGhP3V2AqfqLAZ72YCrMhYXNYLtBhnQQhcuXoEXXo",
  "key35": "5ZTbw2NJ8qnUBxzzgjiCdzjzRsyhfG8ZsdAF2Jy9RNz5CooYmCF4cZCLqphKKAwxxtnjpF3uF1MaRzE1CU4JHpoR",
  "key36": "msTBkr2aE7mtuCjvjAmSqCSEhWxz8ZAFwQPKZ34vGWJgFxbZFsENAbsxzC2X88sykvATsS5vJ77kjF6WLD2WPTX",
  "key37": "4MNeRfxdRmvPaNX3buLNyjM5aAeL2naLG7gMPLgkPVXYUAfTBkwVqmCqJG2WpVptbGNbNRrvu3SWmorZ5BpUgzPN",
  "key38": "5VR4tvifDCGsXY5kkfyHTCiTSpiRb55viP2awVKve4cJCGjwSReSTDrQhehfT7z4BFJ4QNDiW4PGLrEnH3TebrLe",
  "key39": "3gdnbANQSdfibWv1QpsJK4JvAFtqKo79c7MrUdcsvApJSD4Buw4YEsg9XgaGT83yMXjtHerWeqkTKD7akysjzKH9",
  "key40": "4TxwiqRnT4SDKZ9CTgHT98uC2rFGk3uTJ7vdDnHvdgMQ4dryngUkVNRv4uHMxQsxSksVGpuUGSw5iHZ6vM9Z1gd5",
  "key41": "5v144p5dMgU1vX3SvtywbcHezacL5AtBopS4eMZ4K2j8vuSfZDTkZxheLZo5gSBioPvg8FMZupG3uXh7YXAf2BMo",
  "key42": "4uksd77TBFH6nQno1K4iocMGZDTDBQBQLW7ReMtc8LroqFySesonEwmL24CuKmCZ2UQ1ggDFqFwgRFwL7Zwyukue",
  "key43": "MHvLhwxQNuN8RoZa9Kdhaj6kT5sFKfKxSukYLW7Xp6dE8zR2o9xAuqJqdFTXn57aHRHHSUr3zPn2mZqPQ2boaws"
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
