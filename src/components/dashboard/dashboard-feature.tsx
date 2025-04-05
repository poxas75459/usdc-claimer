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
    "4mNgohL7Aa73YDUCbr4i3eg49FVWDr4qSRp21m271NqH6w9YTQWveqJ4HCyb9ruKTcGWhrMRYrzBERVr7HSVxeGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KJD7Gi8NJhVespUgwTjuPErQfaqQTLcFMPb6RSW2X4hmvrFsqCuMNm6o9vWYDjtpJhXQXvVmZxVnTdfscyMRd3",
  "key1": "jPKQ4FLH6Yx3HGwGjKTLtuF3MKHeCgPCFNe6TV1MWFH3QxhCDUHJMcJeBYQtGQVFbYwSzGQ1rXfoCyjueLvwPNA",
  "key2": "3DzSem38kP1brqcvtUthq6A5SshKtqLiMh6xPxxa8G1wdkjAaLR7eQoJnP3LGerq29vTjcpRmoAPhSWWGPAHN76T",
  "key3": "2QHLuZ8i756jTNbxPAhd7AT6quR1mNhD3MBpJFoq6Du9U9yeBhnMJT5yZ3P1KbWzLuG3F7QrUUvUCvhT1ZUASW7V",
  "key4": "39fnp2rzNQyDw7CTt1FKL7Ggv4JLzGcyULY1YzKTbokoZRfpc76HzdcVtu3rE4DcT1XmPjDXLvXEqt4gWhvNBL12",
  "key5": "4Xn2XQH8bVNhkDy5hNLye6yTaUjNu5dHYNRAGsGWtC21Fg6c9Kn2bqpHX9YsPmvkTXVBNfhSFmsdRznA7oS6NvGA",
  "key6": "iMYFLKoVcrDkVxSXRirQ3GgMpHZdyz2Xbwj4qVzwTdV7qCuDawBtJnGcYnq9DRnVGzDAHwinQQNRBxuNGXJeJMD",
  "key7": "2oDfejz1222g5bXX1ebW1XdSqKYjimp76w9sxGLquvCWBCZB1fkBkw8g6sXSELUuUrJ1iMtnkczf8wyFvjAxBje9",
  "key8": "5UGMsSBLYVtRZGT8Ue7DbmBffd83WGzCbGq4sNqeJi915WCo2vtqWSp6xhMktV1xYHzLndt5eTzYsgbRg5k1zX7Q",
  "key9": "2bs7LXP64uxAiFMS9dZjNVhGfz3cHa1a3q143GaLRaJ4rfjRSGcnGsPnQcq778xFc9Gw81BYPFDWdoNiAMPUP17W",
  "key10": "4YvnfGmaSySN5aTh3bv6EBFxqSwehjNEmoG3qy9oDU94M9j5oG8yKGaUKzhyfyYEMGYF3V3QvrTVnTwDHM6wBMTA",
  "key11": "G7ou7X8yWGvWL1A2WorQG87zQwqEeoBSMHNSAG9HuTwjSWhHZF41SusHCaXLJXejVTJEsNaxgJoERr2x5JwKhvg",
  "key12": "2b6PrTBA8qtsLmt2d7B6LQR19NMPHPWhc3JSgw8YvpHZwMFCAwJhg1tNe7cb4stBx2g1uiEBKg33cYBUCB8K4AHv",
  "key13": "5GPSZFHX4SzvR5JQ5tZtmzYEVwiGr59agw3Hn2EPVxDojVXxUt8pYcbjLdrfTtakitLig7EyST7MvJy3ahDzX49Z",
  "key14": "3hz2euzxRqGMLHoB2uz5kgp3TuruiBzbKs28DwkVvJ97vznFWbH292ps9yEw7oSBHfZy1RB1Fnirw7jz45WxGbbp",
  "key15": "B44AhVQt8Z81qPoegSek9EMg9TdaNgKS35X2ozQT4rZvdAdNNnkwUCKbM1cgNmjxUSGUZfi7DYgPZNJBzBjgfLj",
  "key16": "22fdvc6vGjXbYw9tEWRBJvhQQW7sQiPJAM2gPV6VneyXdgoCm33Vj1y6tdmkFTcAywjGy1QCURsE39Y3D1vMAZd2",
  "key17": "mrQVrZ7CZA8vXX4kbHfoN6uyHfRH7JzBeNXopnpyjg7WbmwNiFdd3kRxiF68Pxwys3ytU7afHwVwbFb2khaYxLA",
  "key18": "dacqxcS7JD5t8rEs9uFjJ8AqSTfqVk1vPTz2uY6b7nCmmAebYGPigApPSN1dMoNb4fzN5YUdvV9NsM5X65ik3Pt",
  "key19": "5n3JugAzb6tPjiGVAK4FutXuv4j7gVihv8opqdeqmqXeHfnfTeqAzfZQDqgfhSNoTmKEV2Me324okfztP6M5VY2h",
  "key20": "39xMzBfQz9tB22UpXXGRwETRgqSZzwrXSwF7R5KVVoKMGtREUHbsxFCUJR1Rzsn68YG3QW4p24wfkS19GCC3SY3p",
  "key21": "24nXhwgWkYbvNFGYeL55Aw1SZFf39uUsc1wXqrtAihQsnb7797PCH1eeWdqJEipr8FNQ3nbBP8KYz5gBmCocdKt6",
  "key22": "23EimXBuYWePUcLzJ61T25iMK2FBd9qXHwL5iqaLMEJwqj4gYqPjCnykvtKN7HsNrivW8wCrpirFjkEw5P8zawgm",
  "key23": "TesAVVhbKugcn2JZ1TH473iKkkNrtEcbKEUCKGeEud1ywL1p8DH2PQEWoKXKeTWKx5Me9d1rKcMnmG6dc2AGPFR",
  "key24": "2aYhFxY1SpDuBtxv2PrHA74c5wkz4cFXtYm4parWkz79AmyKHczssJM72FLm5QP3w4N6H3c9fiTLsqv8MXqouGUv",
  "key25": "3eZaHKYeA6scJqPM2KEoUVruakW2QAg2hVSsGCTpsWjB7khLDcYQAtpkEqMF8tSNPp9QNYAwpHcG7EoZ2dX9dKNA",
  "key26": "3yve7s3RriHjKxvD3tZt8u3JZjVb6qU6FQrQi1b44xrHZmc5f1KRwEdJ9Y6znjeZ9Ph7kwikNShUF37k3MeqtXpe",
  "key27": "2Z8Qqv38Yz3LkX2siqubxcwvUd7jwodW2LZ8wskhgGFeuMCHUrC8hPTaAR9PY1igRXPRXBVe9mMyhgXJrC72Rrf6",
  "key28": "2E5j9gp5yFQpcLET4nSZRnXjGSVyMVmW9KGypLH4bRRmXXTnvdEmtgbzDs1akiFo52jYn89H8FfmcALmZqcX1tg8",
  "key29": "39eimtUt7mfHUnCfFiD5VUjruBKJrMYKgsBDft1voQV1H1eyGH1XEVfMQYVSQ7g2jcKTrnmoBPBa8TdkAnmxpscq",
  "key30": "dxPxzdiqrtegGTQ22DB8wiFEDhoMwBhrinRvFbWG6vcKPKu3ga5Fj1wVncXKo9q2tFvNc1Fxa2fr9esn5tEY2JK",
  "key31": "5pjZrfKMi7Ha2phrPbc95LBN8Rwqie1hGxoWJbHVipQycRePK8EgKu74B4bWPQVTsBdbeDB2ZApaTd2ndW3r7xz2",
  "key32": "5sDagukEEsqz3RXaLxUjx6szTowjtC1Dh8bMff8v4HqVS9JwRDJrPjGayAUG7YTGZM8rfqTsPhxAEy6Tbv868G2Q",
  "key33": "3EzsraDPuQ95jzWKPiCa3EUjx96w9cqQw1nbdmT5mhN1wFgXDy1z5YJKRpyLWpeDmeRmtNxyaa1Tzac56Ystt4A4",
  "key34": "3RvVbg9mXz7wYA5N3kQiJtcdb7fGMiBkscvEv8eyDrZJjrXeNd8nx7ZyEvmWVdbnnFYVXHgJx1kMeyv7G8MjzDF4",
  "key35": "4kFtT5u3PmwAf8fh9oqAQ2XYD8qAza8kXgUDAuwxUC7PfqFwuxFJQXh1w5n4icvJJUaFohxkuL3PqFbSUzEMqPcz",
  "key36": "4d9n9W7ZRPEEB4rRZcdpr9Q1TLkZiFbckQgVLL8Kou9svEyF8inVhY2LULbSRNv8Zg2rZ48htieaF98pqCB4DPuC",
  "key37": "39nTf96oX6p2FyqfTgEuRk56qGRYRBAuLhHJkUwneBMUkX1ENyUKDAFCPr5HaxYFqLzg7d6ciPH8fX1vDNGYReEg",
  "key38": "WN3mfJJKEMswTwapWatZPzMJTSRuNz3ykFmSPHnhGWdTroksxe89fjTtjEoC1szhbYozXMaQPk6FmqdZsRXEGWH",
  "key39": "5dsDFBmidyR1kxot5Xy5uSKS56xXsQqyK7dGT1tnQUt5xF3Gy1Ap6pqFJxwvGBZkPwve2dRyg485mEQyAeePvPZs",
  "key40": "4d3sFQdss1PNshTDtS35ABkKfsmFpgV4i8aqb1Af76GS9hHctWRWXZqeCkBdcsWF9a3LXSEajQnevUoadwY8VKuY",
  "key41": "9tWPMcyMa7232Dbifwe63xGzoHH8YHP9pKPaYa1jpEHMYMX4wBB2yPMb5eoq9RaVaAMJHDmXogdmUfeDAGrFEeJ",
  "key42": "36DJjzsfpZx6NeL2Mm8PRxE1tLSwTScEwMwFwF16FVHyztpsqAsRaMgSvk8FULnnc5YopUXzG4iesShrF8KvY8Vv",
  "key43": "3GkLuPg3xWcxepBsDSzooyTMCabNSHBsXkdJCSaWqY5DXNYXnoD46cT9WhYQB58wKHBotFa6h2RcqrrerNMpDfeM",
  "key44": "3VqeNMaGxPjNscKdBeaxYX1SNjJiMB75xtXyGdK8u1ovvB6dfhPqqop9gqan2dyp1i6abQqtTtQ9H6Egof28Unj6",
  "key45": "nFy54YaU3UsmEJiciAFxYpFP9p9uAEcPvB11ZW2e3Za6Ay4DZryUWUYVsmwZCWtHkykwAePxS2gAWYhpeqsTGGY",
  "key46": "5CyznbryrUBgbgSeGiNJVJKzFnnAL2fUx8N2SSkMw2GVC72ksCcom3ax9ViKXBSQ16TzCxbHeP2fis4LY2dSDAr2",
  "key47": "49ETbpNsDj4DJEUYhLTVJpmu4gzgXZAPELB61sTgj43UKiAFq6cBqQ1VepikfzMKcoabU1nchJBVyvMRSySfexhd",
  "key48": "3zRvhSyJGVpUD64qQpbkVAc6mvtk8cuuGmkHr5wSTp1DsgiV47f448UcaLKzihCdGv3Xkf37aMF5kea9gSkoXyiQ"
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
