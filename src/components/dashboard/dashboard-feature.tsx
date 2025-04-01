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
    "31egiWgCt1obTRNxA3YookRtGm8BqEkojL5BsC32xLq6uddUyqJgUoAw1kq9npocTH2sz3j9LY7yLbnqma9QFKGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S8XNfXoaYJ9NC6pWnWnZs2zmTUyzCUnz96cxMR4mKqQf6Qkm2FCMFE1XZj7Cqb2z79u7KcCBdXHuRWH8HWnQ5ey",
  "key1": "p8bfq1TG5mCP9LZVhL6zpuXepukjjoJN4ANudM2EZTVrEsY5vGxHwA158Jgcwev1Qvusu4uUzLCR7JGixmr5kun",
  "key2": "3Xy8fgG6jAGVcqrno4a7iuymFoD7EkWTTfX3rW5M9diqcU3nr6yaNfaGweZZbFtJYaFEHwKAGxDpdsoYw2gJPtTr",
  "key3": "4sFkmUdyAw2kHigwtbMwM8PFGZCfjtzoKZLpkyfDiYDWMfemcad4455gzueoyGNJqRmSqc5SSz9kk33CQjS5x3F7",
  "key4": "3vu82JMHyMRLSRkzJ167EmW7qZwjdmNQks4NG8tQiRn4TK3PmCWCw1hDFFa3gKy5NR2vfeSS6qjxvz9hYktjyp37",
  "key5": "MVm8BNcrKZXg2qRHR7oRG15GNpPnFY6KKBn6fB7eVd52LmCzJ3XiZ8K7a6xEx8HPPT74w9KqysL1TsDs73AwkbR",
  "key6": "2sBLWFrDhwX9y7TgQpoefRVFLrDP5ebPJAzQ9XqAjpXduRKoG7RNNHagGrUzGXHqPuShn6X1pKiLa4A7hdW9DPgp",
  "key7": "2d4Tux1o7M8Aw7Ad9uMnMEsEvFm4Dwn737auKsCk8HDs88SthQpygDMgZBQbhoWhF33NMi9jvUELgjHQwKdeGX68",
  "key8": "2eNhyhz87PNpgh3pcTRRFXiPkYwMvWQvExQgC6jebJaMz6tojbxfoH2ez8Fm4UbJF9ErdcqvTbADH93PhYNQSRhy",
  "key9": "61GiJSFLemtFuY4DyTpbRqQxKm4kin6qX71EtVtkjg8eGUWoW85qHMG82BA1EoaiCUhtDeYGfRh7CU1LRscv8wrj",
  "key10": "4cL55w1psxCDCZeXdSLWx9B9hTQieggcD7tscnATD695t2Wh4QrWtKVxCayE565kHpdicr3AzYRUVHknYunxNHwV",
  "key11": "5qQLfPckaXCtL9M9H4k61DJxvEMoNgNk9VtMYeQQHUME3ffQVCBSFkZSFgQy31LeK5rrJim7GDg6noregVPp11Fh",
  "key12": "2hdYeh4Gawj4qnscWmi5vFHar61jqHZHmqzYdk2tPwVzoXVf8qhRdYqqfzKwkJ4DmpWTqQvBQZS8uymAH3WrnURw",
  "key13": "2imc3XYQV1aYgBee46jCNsy6KVJwPRiRQRNFAnWK3JeJGBJRsVnt1HGgEX9g2k32nvnGswe2RAtV7py3gbg4y16k",
  "key14": "Jc1be5653W2z8eXtcyMeBLTer8YJBzJkucby9RXoLLsKfWXXoVPhBCuL3Gbr4bEJXU7hEz5PpdE2EHSZhsJxUBG",
  "key15": "4vLXgiDdXDNUSn5Mnmn1MyFAUJNBY3PNHaMaSW9bgg3T6gBS468FDX2BR7P6NVSxdr6C8kf2UtRi4EBnKip5hS8r",
  "key16": "4sapG3e7oeQyEJ7XJufsZpDX94RQNiSGAms7oH73shF2AMSs5chJjTS3iMaG6sVUTTkjtLYBmYJxbCvTRAkZ7BTu",
  "key17": "2Dvmw8YNPqCCLCBh8imaT7MR64MuMtN7iikY6oznihKgCgbxvSenpzYj1XMiXjAULFSviCnQ4EgZdS4vLaoo7Ryx",
  "key18": "5o1TekRtf1tLQ2f1aGS7vPSkueDn53jjaHj5DZJX1HXAsWvTbn8hxyLQzt42e6vwkevJRuJR3HqbxCTmTLrr5o9o",
  "key19": "3NtiYNqYJWFRJtejPLXhapEGTj6DArWwHcbqazRJgco4kdQyHvo325W6TAPubGKxyicGmHMLyeXSWiQbMavKWEZN",
  "key20": "4Cw8ii2aX134QD6htXfYr6SubFNdWQPC6DhzV9um6AxdUJLtejZBiL2Zcwsw1jRvL3RjF2t9woWmMekhaiq6eV62",
  "key21": "Ja8khJzk4qQ1LekTNZGLKTfgUL8WySBeykzkX2wAo7ne9hYacnFEiYRQo3GtYW7pXoshxZ7f9aRhP6YMsZTSFn3",
  "key22": "4QxrbZCAay9FegV1q4FiSZMMztcc8Pm8uYjAJW3vuBBAKpCRsUkNCPimaXWG4jH2KgpKKHm3HFyWMQ7TMDbcCBX5",
  "key23": "4VoiKwQGntZDXyviMuqwbsBjAqJxPegZ95ypRGJY2WSJUriKqXDkiUMpkmQurBghfjgM6DNS7yNW25koUoXtGncc",
  "key24": "5D4enVjrZnr486fdbo5HD1rJGBrg7xB8JKv2G2p5Cq8xKykGcp7rvGtLgBhH6Ba2tjPNpmWpAqZyoTjqVGLQAxzp",
  "key25": "2Ly2cBiter9JNNDKWSUzvPB8p9p5Nw8R8jXJBMmkMzmWj9hnfKBU7LyU2f22TbpvzvwLHrgmr5xkCuu7qzeYJRjb",
  "key26": "3qxuNaEh5d4KexxNukAvtPorMwoWNZF5UffwUU9cD2mZZS6V5ErFyeAJzyzw7LBhsopFeZvvGgEfCqiAqmC654D9",
  "key27": "48ZwXtk4pYaNxPyKRRit2Kwh14K515PXLizoxBQz2faHdCKZBhU3XF4J7mt7CJbVq8Huz8Vv3bGJFmAmJEZRhUdy",
  "key28": "2e8K5yfbxa4Ym8EKtPwweJJFMMFP4JEWQKtQKUT6nLQ9Xk9AFDUBanA8YvJ5KWPv1g2brmS4CzGXxMhQ79GKcB8F",
  "key29": "4y2Y2EMCkssmpqe8aTjxq68rk1NGgFvGKXFJffxJJAd4NXmJcgGhGSZGtW2FLH5PYNhb3xukNvDQVme2FZena7FA",
  "key30": "3rHMc1s3zMbHfEX6WXxcNWEc6YK6A5zw6qeF9TNMUAamXouNGFGaaWNPWZ9GrBPhdTbkwxwK3R5G3KV6CHN3Bfej",
  "key31": "3ytHcHyNV5QGVUJAoTAatwajEyhLN2CZswC63HoJQvyXhnttqNMe999PSz3cUQ1TpxqeH5GpYWDsvkWZHpVEm1hE",
  "key32": "3XCb6VLtb8YBJ3qBrNhHqKGMj7QYMSun77uJ1iKPNFScEK3meMqZAECVsJjXyyCw9botovyLxikfPsXh1ET1wfnQ",
  "key33": "21Hekfg7o7bwVAgazXDxZCSgxnk6AeexmuASaeVqyEts422s9MQzQGCxx97TubVbEQLWTcTdbBkksGi8VmcC5XoU",
  "key34": "4GaiuYNfnsKzWcwTo1Nu1Gk1DuJXD2bQATHCNsyYp31kR6waqYvKj9FiqRf9g5jszJbipgxp3k7Vdh9ERSX1JtMp",
  "key35": "3VF2Fn5KB8FEGN9uZ17RwoMGC6SHp5DvASkfZCQK5KP3b8bdHjvsm6jEGewFY11aK1bBopwRSHX6K3mnepFkfgUY",
  "key36": "2aDXuN49qK3gLHtfuzFnj1znbQ1PPb4U1j6kP1MXCZUdDrDUFAPk66u4P6Ta2swFqKzZ1iP47JTozELwWHSaypN9",
  "key37": "4SGd6FuGsN2kV2DPzsWf8YayayNSNiuYPPeccAmZuxPVXRbuV1ZzYuhyZbTg5EnJdmtFoWLmRXchW9a2jPLU6zQA",
  "key38": "2vWCxZ4f96xkUKAMy5YY6Y3BsTUs598qAFrqdrgGqDsX93E9sKSQEfxboU8xY9fZC5UAtreMBGroZJH47zhfDtz7",
  "key39": "5sEP5oyWEjuHSNtc4JkS3g3XfM6JiXzRtikTouC5MMbLXxwfCy3hvrqZBckVqyLgkcg81Yf4ZEJbRQEbZFMX8jYX",
  "key40": "5UomfawxQ7uGtmw5RPrfrSbXUYyLZHk6Hbv3jFxxbmAdo8JGdHWJiaSchtEaVWdh4J8ZGXP2jpsbdtgKtNCwGaSw",
  "key41": "2dAXxp1vqpf2HhwgAK2uwrjC12t67djJPm5p7R5KWHegHujgSCUjPAYzTqJx5GJqyrk1U6JTrFYYLBLC9jFAaSte",
  "key42": "3QHdWh3nyrFJcYTeLMQ6LCRJws64TB6kNSPGb8Qf5pmyEY4mMxSv6KepBq62kQbrd6nVLeg84qEAZox2XoQX5JDx",
  "key43": "4D7yGN8oLbJZtg46pZiq6p8NNdytssMe7J1HEXucqsBByW3WmGKZVYdPkocw8EBUCLUCfreVg6dXFRwHUM73xrcS"
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
