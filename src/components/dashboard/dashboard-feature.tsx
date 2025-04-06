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
    "5L57Wdk8L7ioqyVbF8CvwU4KyhJHnkNCRsJhWPsLMzQWRTHEcZ4uVLiFaittPUuGGysk6QFbrGYmDksKDNzuYjdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VjR5fiEb652Vrqg6tyftAFxfc1BTFETyoHYkoV2z94ceTuFDoWTuy7AGH8obMFQhRVdf5nh9DiTMkA2bZm8SsQY",
  "key1": "22rmcjFU9k77oFEY6SdWNQvHSPMHVeTZQfEpAD4XJddY2fR6ya2C7xXvMEzPMFW1WypRr5rcuhifyK8fUBgoetZh",
  "key2": "43bADJ1yTjuq5CgngnQqY4B7e3fV2oSkUqiwV7NPJ34PUC98XW8eWGNiJndUwYMX4J5ASHt6BBzmNXh4PaGvioa4",
  "key3": "4PrGEpjCdv1Vzp29iGLaSFoZ4G3rawjCu1eL98yf5Ge5vNBLY1YJa74f9nUDpuxiQYqnAkSQHHbw6jSYigU5NScY",
  "key4": "62hN2jpW2EhKoqfFXSiqMwodAVsSUPs7xan8b7ad34PuFqNsgKRy9PidWjq6ZXYvcPbdaoLD4zDMgEFUoPYGiphz",
  "key5": "3k6joHBWVTHXybQGb8dTa6RqqrgYTqHDjZrMjo6HftAdhZjZUsimZ4HG6XRnsdyMGqpQbvpspgpFg5eRKy7HiMri",
  "key6": "4uhsrAH7UnUTgsX315W5q6fN87Tc3YLLPAgFRwLocfmgMXsF3nzKs2Bg3cdZPe7Zg5d1WCy4ZL4tmjGLA1krEGmf",
  "key7": "2odB3RhmUYxitvdbGQQoDGcmVfEuTjzcmJpmc2Uc7h5NsNs1gxn5DfT9okivGhroR923P7h1osvc9aeSu6fUYTaF",
  "key8": "2iURVEe7S34EDQZNSpFTGUHnMREjdkEVDCqxLVhWx1a7PNQ7FtHPNPMrbhPx1d59emNnYcqCdLN6h1HC86a9urYg",
  "key9": "3ywv3TXUNaAC7AuvKUNCWrRJzvUUmpqBLgp8f6dvf63pm5sSiVJHeS3ASQ9twTrh52FzLMiShGcPyynENwDfn5X",
  "key10": "2bGAdks1tvCBcmWWNkLEMzQTCw4tYs742nutL2Gbof3AuSca7sweqJCeNcax15Zdx6wxw1U6uFjRgVM7TJipiFpK",
  "key11": "24jijpmu4paezEEknxpjw8b8y67K8NSA3VUjCEdxXrZRomSU4GZZ2Ztkjn5hhW2qUvyFAEk7v5y6qRVy2usrq9jL",
  "key12": "51R7Zj7qQKKjMWia5y2BVB47Pdy8CqkTgQAzWZzxenPM8KJAemrEKtnZJ3VGpy3iZsoM1RKe92iVNTGyMWw4yLZ3",
  "key13": "2zfrsmbyfJQR9HmUdgyexQn9iAJfeHp1cmC8vq2V5RdFzrVAQWHfMtu1CYzcYk5Cmuz78tw6JWf2wPEw3X89D2Tv",
  "key14": "5iQsHxm78UWSFitY3XKVy545ijsqgf7AnfhNr2WQ8tzNBavp1mH91UV53qFpyqGdFfxgkyWweRA2eVBfDuPoeWMK",
  "key15": "3SGQdS26wdLqkBhEGt8z6sSHniw3kdTQEoTFK4B7yi7MkKejzqJ4TiaWd58BU537wvU1uoidjpFeoZpf8TS4Nqm3",
  "key16": "558PTTkLDHaVPN9aWS689spu7RCRuchQ1vHLEJ2CbETu76aUZYbtk2rEsFMzW9cLvbofZU13e2aXZTKdj3wGQ7qh",
  "key17": "4kCoYUyN8byDCD6s3zxuNsJ2nRkxWr9Jai96ndxpSknbF8CjRwNqkMF9sdskv64A3bYVnHk2szuLBt39YEQJuDmG",
  "key18": "xUbXFGftL9dewHjSDNnf2dsEtKvm1kgCS5ZhuqL63gxZUQhM4bEec2kJu6KdVgBm7G8SLRy5QMUHGgKCrpGMBB3",
  "key19": "3GfPjVkg46HS7QiBnkTgZEb83r9631jLCt9aVjRtTvm1NY7ene9cEKWgurZM3iQncYVpkNRCsJwp5jYcMXSMPkp1",
  "key20": "4aECMt4475QNrs6FtaWM8V5hBH4CLvf5g4vKFy2pxLqpxJh8XaLfyW6pqchzbGKWtQRE2ERxprKwqWhfbkNQJ1qo",
  "key21": "inACdMDiMkarTxhLw21TNNEv3MqvYCJTKRXRMUpY2cUPByQhwLwWtWd7XBFxRAXoUNthRrnmSv4iUfVmf65tqGL",
  "key22": "dMVSwpGan1qQkJTrpaMRwe3Hh6d8s54zQAVt2jnHbGUCxSAapVeE8CGVFgWKJvs7KbfLBkf75TbsanmrrwUo7Hg",
  "key23": "7SsuBHVTqdhQaptajDNrEAF9YS5f5Txnx4HQsRFu9ZpzpXeNmrejS4RZ5UWXmgh3MQNotrGkBck7Zx5fkeUgYRr",
  "key24": "4KQRiq3SyXxCteV6xVrjBaTKggsFUHhzLnXSYFYk6om35aWg9GWg56sJvkEVH11XoQPjAjqqudT4bnpTg6yhXznW",
  "key25": "3QMGG6QiBkwRwVjadiqhKZwHKsTrXG45kVWnVkum744FxXmBhyGzo9X8trcYHun9Ute2xjaDoTTLyVRfPw3iVPQH",
  "key26": "4H2bRkcci2np9Qf97nWVeUjPjE9kUoY4E8d7KNDMdSB1LuYofWam1yP3ewN3f3oGTDvdGnoUXT7o3KVsgDe4yikf",
  "key27": "2FeeaRCkrU5EWgxjL1yHBbBjYKkf4tCXinPTq1yc9uKc9UCqmPMCEpwgybM9AEkaMtbuhzquHgviZDTBEvUc8EqT",
  "key28": "23RZk5APU9trzTugRY8GiXXKE44syzn5L9dAxjwgpW9Vosk7n1UEUUTzJxRYLUnTmwqcuidgpRZBjdbf54SHmbWr",
  "key29": "5hJCjszsR2S3z9fCqsfV59wNczVoFWwwiFiMAYz1mSSWjhkX2ZX1nYH7gpfHbAsCYgG2DWYzqrxVDSgEGShqHRhA",
  "key30": "3L1MJecjnsRiuETjbLtHFNbUEgh44WX6g3vHPED8RbcRNh8eKBpgZDKgjVV3FGPawQb3fhhyyCCDBL1Fbnb9i2R5",
  "key31": "5dQDkciYTGUum2eveeWPzVSbf9rwp6LQVD49XKecQ4E9GFNv5r28YpMbHVHLJi881Kv7MTsUSmB5V9VcEcHgxsd6",
  "key32": "4WSoPzcKLenEq29abm6gamTbPtVD4k1fiHGnV5beshWiGfTGEjZGqQ7NCtdZrAeVZxTgFiPEQXt48DvGzJqEByVJ",
  "key33": "2kFN8L8GqjwrxngFykBRytyZ6x1Kax5GdeuA31uuTeNpjcY4qcEja6szMvkJH9P3heR2RPrEznDtPHNJnseX831x",
  "key34": "4n4F1SnpmJsPXqfuhB7wguwLaiDRGftGBAPc6gwWURZfs9EjMrGAo9kp7Ubd94icEaZM7W49VZhPASnYfiuUsZbA",
  "key35": "BhaVpZgDpVSopuhHbaAmhKc6bRqvEP3ZEA6tuUxAF59wfiZKZUqKaySQrak3GrPU6UGUXmtKnt9g5mXz2Bi5txe",
  "key36": "41dpRzKnNU3jDvo67jQ6CvHDJU2ekRcc2HhVe23ARbfav57uckcqsQuxmHvku8CnuWij7HnAp89ahy16tVR5tzhh",
  "key37": "2NSA1H3om4S6vZW34QUJPXGnRsapR4GxoxdmbCFxdXYqd5RBGarFw2cyAiExph4Qy2XeJpHFugqUCzkaiuXmGcYK",
  "key38": "37CXBWUQxeBz49eBGmCwxL7cfUPpqtLd9YAXQTkJ8scKaCtK7nGXMTwdJZbENiah1j15SeaQehgzncgKrEqSvixu",
  "key39": "55EB5CUwAhYRbnVFLke3B8L9TrxvvVV8gzwfkjCtHF15YKpPcmK7ugm2VvGGw1uKqL7iFd1X4Vnn4R635qaWmNnc",
  "key40": "Z4nc55gtVj2n8PEHjxi18jtVqX6Y8XcrJSpxFRssyRhZ4MJtfoEjqGFX5VKewZhW4aoEbpudAPwGSnneJmbxWxU"
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
