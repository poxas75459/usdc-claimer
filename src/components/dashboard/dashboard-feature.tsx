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
    "5hLqQGuwnbV4aGCCA1rw9qNKVHaJJ1SyDpK2sjabP9bmXQYpb5mTuhxiFiiS2E9u6v2RW5RAW89uRxf5H329z559"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BgpTGqXyKYNmB8rL75aHxSaxXgm1qBbZboRbzNsz2w3qUiqCdHGHc5aGzE2Spbfm7j2AmSXxiRwDZrqxN5EdBAy",
  "key1": "44DfgBFU4TbmRsbbPyvTZ48tQ1PfdiVdjmdQ7jiw2ctkJYWR5tR3Gs6QVLbfdbBBseEmATwY1ZfNntUTFpxVCFVk",
  "key2": "2f6YJHEAKAyUecVytHKKqDm4rrtcqK7kskeLi4E2Z2ugmZad5bSnVuJpKRPQancdEcp7DyfiMKtggYfBWivzGVay",
  "key3": "3Axn1FUBtPxQcTvRtyzU38SXykmxHAaK58vjLdsPJMMhvF73WfiZbBhracFnTmswm28E7rGEb9UypF7dT5Hr93EH",
  "key4": "4q4Y6UCVM3bACq8bWfhhUKzXKQFg9T3Uvek3Cfm5iJJgtkoEqu8PQSGNR2xfPCrtR4m3rpNpQVMsBH6x45KhVuS6",
  "key5": "35gkZjEaCxW7wJxZTVWQNiQAeKJ35ekf59DptKp4b5ejHSeCQJgVuUtj7C4U99FN6gwFkHdGopUVtofpn39mhUau",
  "key6": "3GQKGjTWH24aT62D6RdbWUU1jCbJYtXpJH8eNJZuWJ6TSD1jMaEQg7Tsq2P7T1KkCjkpu5dW3gsW8CiqwAUYxgmx",
  "key7": "5U5htM9arayg6KXpdoLYdBxMBe32irEUF9Yh38wXhMtjz92RXPk8tyqCiXMdwCyxBAig796TLNSx3qoF3bF8Fn2c",
  "key8": "3SBaug1zMC8HHEG1Bv8mWFcwsAopotyaAKbiNsQ7Tjd6QPve1qSj66uhe96ikP6eGyLeQs5sM1TZaTa3qLuWhD4i",
  "key9": "3Ck8oyLugFos4ACk1KQgCpraf3uWEFFyaf4SUxovjEBiZGaJpdBDGVtt8jyn6PGz3W7SD1kqakDn4i1yw3VGmTPr",
  "key10": "5AJWwtsRTfdQjzg64mmtJz4WTcBS16qtpmVWNRLcsAs98gfH1Gd3fT2goL85y1C3Uvo9w6g7VWH7FNkaN2xgsfpu",
  "key11": "2CGPyTQNkdSaXPMKcaqtsTZ7DV7QWL2kMNs8s2JD2tY6V94vjEyEbPzso6e3zcB1GB9gztQeNCuKaodymTftRKP",
  "key12": "Fpnc9EYh9qScTU76j8yDudRQUXLBdWFb45Cvf5DxGHH2GHWxbAHtjf9edtjSTtBCy4yDTWJo7z5aMiQMd1FoudJ",
  "key13": "5b8AMiBZ5p9k9JkLewe3jS32ajkeREhug1Hm8LZ8iMATj11kTUDHPkbEpXQY224beXoi6Kd4KFDW7QxuTrqGLV7i",
  "key14": "Kb2qc4enrGs97JSJBTG5vqLPBFezX8mdEQrf3bCxLFdADoMG92tKjmv6ryR6hk6umRyNN4GtLzYMqWv16XSAQeg",
  "key15": "2SnrEXDqYSUp3GRXzM224pQSz9emSoQ4rXfReEZp9hr8NpXNVTtWvYaPga3yHS4G3pL4fxGrcZgkHm8N3QzF4seW",
  "key16": "5Lxk8Htb4nGoCGGUZs22JV68FGFPY2kbDenZYGnowpjW8LC4Hess4VvBshLWRDoLLe3cyuLAfByKn5KT8idvE58f",
  "key17": "2VXernsv7sXKA7kULkhr1Bd1AoWdjjwXfRLMg9jfS21ng58M7kCwvJPhameaoHQg8rRKFWFuQgw8iY3jYSypA6Sx",
  "key18": "3L64JYaDhS9bNkiNCHSmS1rtuMfqPmqxkp5r4neBicqWcEVgUtQiGMJhFfEXTmnz1VnsL1uDZyWFN7Svsw9ePaiC",
  "key19": "4ccdSuEthJFnoDcqp9NNb1wSobPh9vnX79vijWJAJM3Jm242khm151f37Z7tzUbT68EA7kBFxyCTpx3EXkAfLqz1",
  "key20": "5EBfEYte4pNa4MLatgufFHY1uxTKk3Hr9mdhQgdToi68JfeEHb5dFuKS8eJaDnQdFuKAjaXVPPLZggXQ5aiR1QXf",
  "key21": "BpNoqGNJvyzuxTjmi9Q883Mt2joMEqp8ZW942J2LrFMHWJnG97FVJDon5entWctNYjdgioy58fhnpZTBY3QmJGi",
  "key22": "2fNJvPCurswZC8Gte5VzBQn7pj7BPZZZw47Tzi3sKj4VPTdLjNpCjRb7eTdvrMPYVg1DjLY7v81Qx4bXHtBS95sA",
  "key23": "62cT3mEuXr8VobpyBWov86B1xYqxFqQLPk64wCmMD8XXR6wm6xEZn1AJ1RzUU1fQBXjAW3S8FFCCREm2n2o1iLMd",
  "key24": "5MQ3XBzaeptX6SvKDXZCf87CZ4NzoBWpV6BVvJnyoeojnx49JNcKmYP1yPwNSyn6BA8LMn3sYQPLfGG8hwXj4TXT",
  "key25": "2s8hXYhZdV63To7k9KCsgLKS8C8aAvh2Hjqb3QXnhPSNNPix3RNEsA5TXZfS6oinPq8EZyvmieb2hqDPgmYtH7Zi",
  "key26": "2cqWTpym9oJtr8o2T8gs9vRoANfCL14GNuWdSMmEHxwSbwb2DQ1g3ucQ4UULcF9cnwGa71qDX5bwPKsqzu3uG6Hu",
  "key27": "5xo2U8pRE8RopNwT5B5VHnoHd2CwAJsLdihLrCYTjpiqThaKeQxSoNDqJWHkYADiZrnjCtAVqGGZVUk7iWgPu9oh",
  "key28": "H8JABSX3dEBUF3FwpXHZKHd7hYtFRjij8vzQGeLAxgarB7ZAf8HQwmfKjJG4yVjRxtNAPcadEmCJXstiSoU5Y2g",
  "key29": "2iqed2D4XGtQr1Xxz9a9W2ZeRnWZ51773KUzFcAm76uUqtNZtcZEDge8wJtLUt2bGmDGd6nMYKqM3z8TpXXMosNL",
  "key30": "2kf6USaLfTikPuZv6aYwVAE8aGyjVXyCG5B3D9qojBCmWeVgixBJjMcAGfHhNBpfoyQ6fn93QfTSHzmEei5tjK9d",
  "key31": "3ZAyAnGQCSupCdW5WBFgCX7xn98uZPnJSBgavZgDk7P3zfzDwknMUL4ruBTWGd9DSCHd9YFaykxyHiNRVWDSdaUQ",
  "key32": "65napzTXqapfJUYFzz98w7VWS9hkBDp3GyJMCCxPWue4CwpxDSYXfCcu71V8rV66qT9EsxPStZXtgi44gQExtV29",
  "key33": "ttQCZAaAhUTyjZZo63weCS2rYw71x4q8U7gCGo5CsdiZ5ftEi2enWYtktRaNchrYvdMCUBiHKcDMdGtqhMweEJc",
  "key34": "2LnZEgq7qrDiQyQ6DUCuNkvwoiMgKdiY4YynDrYh9yybLTsJsiDqB88YB7Wb7ZznrfFogug7vbYMWaaYiKAMiVQA",
  "key35": "5CqToeg8yvroRfVFpxu37rco6xY4ARfDnsZyLXEtid7p9iK1H3Qpp6p2HVbi3xjTz698TCSWTKtGZE3EyQe8CtMC",
  "key36": "2V5HrqSLeZLnmdPQmyGiNVtoXfov3aik7Y4kqSgCGrunymupn9h4b9xTsSXP91oa6ZaS8BqWBAVcAu6vcxw3RDEL",
  "key37": "3eHs25eDx1NoYZASo3kyMwQMrp8QZqMyisepoZBhuroJJcsCTiYd7RtQa4vL7PntepekRMTuwfpGSNS7b6SnKXCZ",
  "key38": "3mHn1mUyZ8U16d1J4Putzh5Tz8Zq7J6LUHEwGbTFqmg55UXj9obZdt3JBcdYg9teHQo18XEDoeXRzgy1aJLGUwwm",
  "key39": "4bYajBRZHmuzXYrTq2QFLfhyonVZWwdNfNJqN9kaPTkkJrrbN8qQXrvxwgGC7GCJWPvJzFT3XdTkSsfwJozop8aS",
  "key40": "XMZKZ952e7BHdyMmNLtBSLv9kPfUiLyct2RAeWzyQunbtuBMyzCT262S2iXMdRUKbR1WyvPJ6rNgpAXFkKPrKcK",
  "key41": "7JKEu6g7Uf6JpB9CfAAeLCvAyp56SEtYkcwRki8kTqdDkwmnYCxaZs7crVPeCfGSMZ4gBds5sazjRcnXCKuixbk",
  "key42": "5iyLXfRQNqJu7XnNioD9mzueQuBzvSRdeeuEaH4jtmPMBqqdG7iGYe5mA22QPNcEPo4DxG1Vpmrwwcqt5G1yJGDQ",
  "key43": "3AdF418k2QgmU55SwS6UmHrU6RDg85djz5b2egCxAYRJZm5vXwMyerVVuAvjFu3SLnoxU93dnh6nWcQkkEs5sokU",
  "key44": "4U5WuZgKpjDAhroq4kZksZENgkps2EHH2GS9MbHuxDwBpbuBhGxLCjcaMRTGUx1yLvexkmHr98vt1ko52pRGs3qG"
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
