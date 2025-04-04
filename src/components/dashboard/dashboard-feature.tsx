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
    "3AESTbBLN8Zyh9SHdM2Y3X1Ru3WW66wjtsbuWDFkQNR44rMB7P5mG8wFG2HWKrwkf7GjA2tqLjZorh5KGPFxLuUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L967LmWKJVz1UNACHV7K5agzNEbjiuyV51FvosVEVj41k9NweKWMU4ffYw8RskZ5UHXLm1G8LsTTV3TG3NmMiXJ",
  "key1": "3NwaJy92YKJDuAcoCS9Nq4xAYwQxTZALFEZYV2AHefvonw3DodLJysxpvxpK7nQu5iiQ4jzUDNxYSXXyprcgSQee",
  "key2": "uGd2mWecVqRFL3eASTgpDNuHsFDz3KzJU9hk9ZSum9dd6VeagQBK4QNzEGqvwjCR5p4HqCD4nyrvM5geEuen8mJ",
  "key3": "5tbxVELwMVpkrj2MPSxQZQx55rGURQuCrjAGh3JUwdVbppHD7EEKa98BCfwft2WHsJpJ7X6TAFSVQYdJcPGBMeX9",
  "key4": "2P9ih2uMCWcxBRgdrN1pLAcmNasuaXa4v1PcUquK8PMT1UYXqTtqHTZmwRP29gwbbYYT8T6q9MbjCeYHjDX88E7m",
  "key5": "2xtEYiJmGha4BsmY6rP3bqnGRZyhvz9TwzKkvdRTd7bgAQ2Kvjya7ofspKKwS3nfBDBkN7k3MZZZ9eLfpjYnrH2i",
  "key6": "ya1dDdMZpWun5VrN8kr2v5rVYXftd1kg1avfwM275WJv6iBqkkaxr9ftRm6zYcVuD5r9sCNcsdp6QD64nft2vXN",
  "key7": "3gS4HEuVDuoz51XvAeTf3zE7tLtFT2fpcRRJWU99vrkQeNVoTZJWezaDf6Py3tMy3Kgoqb9APiSRifrRsJUsvnCS",
  "key8": "3Czbaz4d14eXfDwRgfeoxhqPrve4g72GFsH5C8yw5ZKoLVYjCUH7T1SfdSWP2YqCums4MrEV3KAN75AsZtiuqGEa",
  "key9": "3gafFAKxXT5ChDW8Ws5Ri68xH5G652emaEFvuiRE6bAG9TPCcDXmMPhG3oFhuBsGu7zSHLYdY2mzfsA3MFFHv7bq",
  "key10": "3tQeqbRrvkZkdL6WUfVwokLrES4zZuAPd8kFgNuJVZkWYQF4k6aqUPGHeyrLq8iziazMPstFdVZVDN86aegc3E7D",
  "key11": "D5ZpauhisuwQmRJktGYaHcuALELhkypfdzLpr4f7pXeAMzY2qFsp6S1NSKDj6FWMeEzoL2z5vtnVrRBKoZp85u7",
  "key12": "342vwiJsgSXpBQfNzrYoLiBigozKDQgyJ2Ahw2j1cRC32NJsYVJuWyLGK8pwUceR9F5fYVcwwNtdheS4NxbMfBh9",
  "key13": "2AMpiTT4iDB8M5sZQQADzcM4x1PK4SVJQ4cKe8FRb87wxaxHtua6MLXZYF3vp6KczJ8y2NcD49DnhjhM3RspZVRQ",
  "key14": "KaMJMypnwgkFgZMkJFbXYdwsH1nAgdwsEf1ja2KCQ3ricJEs5ouraC2xkB6vV1JuaoDphR9pNF1VxFdQSU7xQsY",
  "key15": "4mXQWV5YRZcMDNKkJxaCF7h9LaoGXwQ4RaD4b6auh6sb4ba69skg6nLU99fCfDkV8M6xzDRVJ2G9sAbNxxemTCBa",
  "key16": "uCN13z3roDRGhknC2NXiiBqnAyuHTDXtNt7EarVgJ7jJ6S49K9atRD8LNRkRJcX7MYwdhj4fLRVtjt8XwANVq9B",
  "key17": "zMECb998YMz99GFypjEVPQjPmeVxWDZZXVZL8VCEYerj4qAUeHah7LXpG7c5wuQdRWbwCL2mFBbe9aSrJhHU7A8",
  "key18": "4rwkhtRYVQ7QYGjz3TgsnoQBw1yzV35QeEo7BU4EV9xrh9UmW4gDdh2vuG4qpcTcDaBR7DKcVWi8jKDVE9Pb3shL",
  "key19": "sgf4tZshJAXp7HL8UrjNXHB7viJ5yAB2Prpz68CWgw4ECp7JUBa7ocMcVniLVyy5n9pPB8FN91wnjbPudPjHDRh",
  "key20": "3UacZpnJoQDF16CakUmB2zsAQAiAL4BGAfyEnVNtgpm2bjiRACnEwAgq43uDWNXEDduAdAifjv6mToTYXgggZ26D",
  "key21": "HRZ9zXaAiFQR1x6wrohUTkqLmfQhM3FJgdP4zbj2pZEbtUrgNpNRkExVv6vKJTXfAFysL9jMwnJ5WUfXM4BYFpC",
  "key22": "5WCovdx6VCqhPCngf4uMSZZsCjYKeox16jMzGSRbuzRgvMRJtjLHNoqgWT4TW5XbCt5vrEigP3Sa3eZNLfcqD4SL",
  "key23": "4SAAdG5kNZKsTbHuqA3JWUCA7czxGcsXGykeacsvFp53DNV37voLwUain1y71ht1JNPdebFSpzq5998wYLmk8YQm",
  "key24": "4STGoPP6aKR48YPyV13miVnxtWA9rLQrGBbMzSRkVqTnzaEKibPG9HwU6Wwd8icuqjC7dmdQxUSXa16CK7MJrfv6",
  "key25": "5WPrKwsRPkCS6vxgHS3RjekFpUgTn4G171ko28SGg2brBwVzkaAfkBeLid9hjhU8CXCjwK2iZuuU2awbLLDRW5FV",
  "key26": "4Bw2ND4a9sRNKuaWhJGnRZy6ZoxwR3aPuGHNnhmKhKHFzjaSnijmPfg13yW36RCJTHWXSC5jVQwFtpBPqfQ1oUDv",
  "key27": "4AqavCgbsfDsMvsUVXVEoy5Am37jAXnyk1uL4YgfhC43QCQdzjck8phm872RngxAQWR6tmMdszNUtoTUjbnrTCKt",
  "key28": "31nPBh6tHyrcAJAHpBhF4QtRAmZwQvYPY8FxLrvF8M3ePaMAse4AWhzGVhocQodsDSRRy877zwivi2WXEyQ81Tcx",
  "key29": "3vYXXaMVskUKyXHvdmcBB1UrRsTcAytELyYTmm2fZJyTu3YHD22gpeFgjSpbipHeRrT4BFWkr1W57ZyqwZeUCtC8",
  "key30": "65qyvaXctqGezcR3pQ75PGfefh6vjVuerK4q3Vj9ci1yCwc1MZgmQon2Q6TB2fYLNnuYZRKakUgKnDxu2tH3VvgH",
  "key31": "5V8uQ4sQgf51BuxSY6XzqdKHSCRQjxibuGXmwQu4K5swCbiAi4TXcEjogqY48UBQ3JxoNBtcbbZMGEDYwkV2jhpm",
  "key32": "5UGF3w1o7rEXUnautmxDHkTHHTdinBeU48ftWCwYFu4RCn1tinRtfZ1TYsDZjVbRwKQaVaairCuKSiQQ6b87kVhj",
  "key33": "2t8DzpPAKyDBtuBXsFZzAWU4mDzczWsaQL3faiieHswqebCjLcPBSHizUgLLKsv9Yc3KE9J3QQF8Uw53a2JPQv1s",
  "key34": "2oujkMwmqpXvvXRG1YV6v4VwKNdJeF9YZb7hqmMtAxsG14aPw8QSQU2aNn6fMsjLVcPM1rBnRj3kenuUPXduWfDx"
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
