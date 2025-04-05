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
    "5WjJbX6rxsy5P8zZBN1GKXYiqJud9tiTdCNkedb8Ka2ZAzLc25g8ombtpwGp3ZnJ4WENNTvQv2VWjJ1enHRmYe1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vvj1nEcxoTpnRJxMKJLJEmpn69xTJy2vZog4269HkPsRohtpG9NG9FiVXZRCjZPnJmpf2MUerXgrYQKwi26bgVP",
  "key1": "4X6y3RwApqj1R62JTAizseehiWFmesrcKSoXKmxckyrTBf444xExho5Z7f1cfu96h9zHjEef35CWwJzkHn9Ryerm",
  "key2": "2kLPLiyhJaf3cmZ34tQqacGBBgN27KibgrUCCQYsPTzcXuvyp59CFyGj4iPrkAqKveTUncAjk8KYBVCmbx7Vuynv",
  "key3": "4UaWisCPSP2qjHSChV3NXo1cxqa4YJMAbKfUD2NwhwbP5aM3gFexVCaagykjfKgDiSj9JereS8n52GQNqnZY3pVS",
  "key4": "2uVa8Nkvg3ytTuPfBzX5hDew6aX8AJsxG14GQJGtxLDxoumaseDq4NNw8wDbYPctYjnZMbYxXGiRmCY9L9e4qCVR",
  "key5": "4kAHMZCLr4rcxum7ryabMBNRfKDPoHje4PTM9NH4YCPwwFqqmUryMfFu96cbZ8oRZ1sJdVdtuYmGNM7EQrytWRnK",
  "key6": "2NCCynH7Z6MMtbG8Gpd9F8JFCyi6DDhKCTMjyhbVCMTMhoLdRYS2aXjGKnxFGB1iWG9YNvqiKNJLKwmmJ6XhZjok",
  "key7": "2XnCeyu3nxBkUdEyNkWPVBZSq3t37RXDwhNrLzG2yjXwyPrfFbZ2EkWFN4LfRQXukcru4ESYnrbyHZanrvixUQ6X",
  "key8": "zKe8V74owXm4hCddojiKRvGEdHDXwni7WAvJgnFDjzHcsCAS3rHYnQDc7sT5GAW9HFnNTGXj6DBAgjuFRaz3kcm",
  "key9": "2x4fkSksvSaHbz4p8Rk7UAf1HdAQaabsqikB11UctpcWPZzdeLDYLBxH1KvvCdz9d6979nZeZp2XqT5MLKQxXX61",
  "key10": "2YUk9JkM5Z1xAzH4QXEzY9LeyUK9WuooWo55jZeZsqRXq6kpwjjp1CY79fTb8oYYnfCQMWwxQagzajda8eWmpM3b",
  "key11": "5KLHVxXdn1UgeidD8ACzQVJktD1FHykkMHRDCp8NrQgJbeNkgHWqHHd4YzCsYBpAn8jgmT9q9sgBmHQ88S82hErj",
  "key12": "4222iqC4XHHyRcyKAiMjTQhc1YSGAdihKpUg1EYR2x5x1j48tfJf3FFNpuKGo26jUsczYByPkHgzyyieMuGAYa93",
  "key13": "ArsUPFdAeZeThEU7gGjNB4shwpqkgQxPVy2EkdGxhgYEhYEGMFyJXJm6PJbfzsKVH7oNxMNiguXghj1t2MoJi5P",
  "key14": "49NsgTfjtSFES3oUufJAdVjycWmqDuvTKLgtaW198px5EC7vJQzQCRsZrdPmGP145WdRBPs6RZUpoJCCnvQkFSuj",
  "key15": "4GuNep9w4wLPt4yE9AmU4KgLgJHpTRDwnc64af7H5U9R9oQmUhDxj3scQ26j9TQ1wEBSLHL6KL973Js8T15UJC2Z",
  "key16": "2GtcXoue75RuVbA56Lm47oVftNdeLUdhsMszjydT7HWu3ZHSfhjRYpnjkoKNCUvbciReE9mDwc9uDri6Tf2q1WAw",
  "key17": "7L4RPjMTrxbSc9RpYqDSrpm45Uyp5mUjnyN1aHvhiWv2AqPJ5h9gy5UAA6jrpYwWPwWsUp14TjRUVQYTY5C1m7Y",
  "key18": "3zPfUgpgZdBz8JeLY6vdK9HWwbbpnedVzW9uAosreutLzLLFvioQH9ETrkkFYpRsm7YKX76geh5CpuQ65B2CekQd",
  "key19": "2nRJ5huno4Kc7TegHk7vjxWXgcgQRwYuFbKMcm6noG5UnnCVkkiRov2LnfcidL8eTSyAJYh4ugAq83nv1D9SHfuD",
  "key20": "UmYFNaFnRgmr1z92Rzs6aJCNbRnCC8HLbbUvsvDSLgHARC7ofLNqNTAeKtEWndevkyKqotyRmCxTSfaahyT2kor",
  "key21": "34ox6tCmu7NZRXqrqFMKeGcF4ip52okFDezBH6m1hpoYBYZpMxCCdJHsPwN5teqnXL7ZyJsgZ9o7oxrWHjie6GCi",
  "key22": "4Gt1hkNPx93Ur17RwgmZVvYqmCVoB3RQhDSLo3MxnQRcis96ZVzw9gkMsM3YdrxwuUK276x23M2grkTJGHwFHfX3",
  "key23": "2xTvRg4wPfCETjk6UWRwd6n8AmKuvd5uPY1YamMgyY5WJEMwqp36VNx9jvUdquAC8kWFNbcxmq8EBn7W9DGc55CV",
  "key24": "5Cfweh8qCp44iBgviLchjq7d818wgwrmsAUdzCGtSPuo8MtQVRgg2JMcY4ffWivFWLrd4ox2kvM9PfR5KxtLTGtz",
  "key25": "SGRmFq2LvCidPTsKWpCfVPwDzR2qfaykF9iKaL16boTvoWsbJNUuwQp8TqdA1JtmCPBaEV7mg1L9FBUokZUnoVc",
  "key26": "qzWZvr3Bx1uAvMqFw8CSpGFjUQsxZ2t5kuW6XVFsiUpzC7pu1b1qqJeQ97HLpk4C5nPbDPgbMVFNFFogGhxKURo",
  "key27": "4RhSoAUh6vjH5z5KD2G3jZt1yBsfTEQQ6ifhfp2dJoV4tz5F4XcdQK5Fyw7tzVHVH1vfxtNr7HpkisWnMNgBqAPp",
  "key28": "44Z7EagRbeMKfkRggcSk4vSK9jc3C36BuCB4fSJRyUzAKcZh17BbKWxfCGxXs4yFpFfhP2jjudmTJMWSXcATUPmS",
  "key29": "3A7QNzupSDiKr4SVuU55aXWndGNZeRGHpHNfEvrn5kMayWgytSskeuEKbhfcxMfTB1VDuZf9ujRy3hFiTvaLy5jy",
  "key30": "49DCFfJq3gH1aHAYJUzjjSZSSXcMZS1DQArSRoNjeFfFPiSGVJaxCdaJwsCkz4L45ruHTjpVSJnyZhdKTNJc9B6K",
  "key31": "3MMZnbU5KRhJzfttTKWZMbgRJgkz536Fp535kQbu92e3L1rBve1WJpLSRihR6sGuALurPuX94zNKah5Q49vKejis",
  "key32": "2CLPuM6VYXgXw7KXuHfCEKea2cBzYM9bExmCqHsdHWPa4FYxtUhd5qiQrUTyfWuyXLFJHnp9mTxRGDTWFLh1UVUo",
  "key33": "5Acain8PUwvoVTNHNE9HBHmga9UqYdGNM8aGkAHdP52FAmwDqbC1SVrovXwbf5ZJjCA6amsQLnoV5TURNcddoeXx"
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
