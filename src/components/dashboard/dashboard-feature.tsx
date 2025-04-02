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
    "5WN29J9Dkm938exec4kECJMnsLkoLPhGxzDvWBB1jHa6P7LAfaTisDdiVfNcju4m8k966To3tLGchE8p1okuSnL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "395JaH9aHe9SvVBmHk1xEeifbcYSp9iyMdtAwpHuwmhvSAxjBmemqT7FUgdbpy6zJzp8WxfhRnYmXUV2Vj4K93HW",
  "key1": "21buhKEnKr7vYV4uVSMwPmPi7ZfoUGUM2Nw8873GCrUroTMEnRrUJvGg64aND8YqeCtfieKFWZYrcNHWT7HAFGT2",
  "key2": "23bJ7jbVHU9fwmTkCnHLzC8FsoMM6cqqG9aVaBs8HJAQfffgTWmHm3SH7Ea7i35B3MyaUDu7Q45VAakgiidr1Gzx",
  "key3": "5uCgbubcUWJSX31TTpoomqqR9acoV223wvg3hHDb43J4XRH3B9ks8yi9NCEvYHpGUxAMKWEH8LDJUcnzy537RP8j",
  "key4": "4VYbgZ48v2jyFqAfP2xpTDYZUVB9GcsECRjq95rGBQ3XaH4cTJcDbUpfDG4dJBmYnCJWpfDid47UMnmohou16Gux",
  "key5": "3tcrygPKCXW3jLyMKagwPH6g75T4HLXCfvdcCuoz6vd4LW7Bexava7ZPzrbq1jGGRWsnFWmgFrsdUjSef9sdYU3Q",
  "key6": "5k7hjAGs1SNMapccbCnwL8GGiiCAzNnFe76HU1jHk9bwTEUmsndMyCzFsnt751JHzDfD26GSXqTSBUpJrJkh1FWF",
  "key7": "3vBpcKeyD6jWUmWWFv1EPWmUzNkNbaUsRqF2NreB9rQkeAmXbJFuz2nHXewcC2HaUfb1yrYqHqd3hT1o5XHY31yu",
  "key8": "3MNPpWBHEAwTSKN6V2Bin7JWyXdzcmQnAVEez8DQ2VJxUpVDEJ8FUXNzACtVNudTw4KmMFihaMUsYoU3xW1t8KxU",
  "key9": "4kooHc8NiL9qwHiWBCCh5XJLsJ3xcn7iRBZhrSMmbPeFNMAbkc9vDPnQtQtDLa2NxPc8KMYQuZhrh5YZBXSBVCPs",
  "key10": "2cLpxwK6EiTtYSzdV3zgZ1f5aJzeZpMVLfJn6Y2PsghRLn4Y3PYNTjm3CiSoBiX6D7HtePC6WFD92hDDAmYv8Ldi",
  "key11": "3Nbku683TzQ45ammUSVf9toiumFTDgWLXsZQUHjLkRZJv8eFg6wp5hHihfw7xc6WC2eumG1mYWkar7N9zf8nkLQf",
  "key12": "4z5s7zjA83Cn8qa26BH4KiGGRaC83uckM9vzkqUNpZAzVRTbZyyWsL3uCUkHSZgJsQNQFpHny5GaMjhPp63CDgJ2",
  "key13": "4KYiTtoaFBRmZdK4TeJpo29maq2qku644M84UN8KL4dZZtieTrmV1BCMzzPxNnXxvhTTpvcu4mj2nYPnbfrc7MzK",
  "key14": "4nhmm9TbVo2MWvrqVkvyvHJYw1qM2oMXqjjbJwBA8NhydcfKFZHQagEpAHPYBvr2Qckp7RdMzGajq6UoDR1hJrMP",
  "key15": "3SQHJrKg5bF3XVoWAcunNfMBGmwDULJQs1ENJmku8TUmscJmsz1HZYzgqArenRbAiUkR2ed9a2BQeeZDXo4TwjH7",
  "key16": "4AErUgvFA9GftjNVaMNeS2meks4tVT7SCALPq5tpXtNDVg5GiQMBeMPEDSB5hhfcumzT3gzu2xjxnyXG2wRcc48F",
  "key17": "5gF3huMQ9YJJMWMgSE4vWyCsEm4qVdBuVDXpkgSM4Avaf19vxaV3imR7HCDTquHbKumos794t99gYi7VKiLeubtr",
  "key18": "4ZRtNR74yqZJpoSpjbX4bf33ieoe4LNCeW3sLJo3nr6gm6Ug5q2vHigMBf2HXYyNNa54JCyJFceZdk7nMTMdcXfh",
  "key19": "2izhTsrCGbRkFQ3NFVDFJ83CTtMgPcks93SAaZSaNWwkjzMfteS7SftKu2Yo2SZ2wAKFfv4NYTiz1DC7vXef6m4t",
  "key20": "5G6qjXrGQvG3G4KkPwx8hgpM64MmwR5LM7aMb3AVfmPrzG7cSYrWpBUEErbjrVpLLDNrptUa3BdJfCGcptQnAPpy",
  "key21": "rEUffVZFdN8mQyr7mQRyQKyP8ypZJ6BohgtFHacD1yqe2XJndmoV6rdUYUhQEg38Pk31SSQG6uSpSVkYXHCCQKk",
  "key22": "1HMtput766duV56Yu9YYmTTw46iJEp4pU7hFk4dz2YkACFZs3BJEAXHCYbiA4LUZvaTM5L3yyAHzYJM77HAAmKX",
  "key23": "2qspLHfarjXihDJw9oaEo9sZ78UoPbdig4ErKfWo7Ko19EmAH4uvagkVpP6CxgwpiRp3X9y571qtiKJ2LTj5APz9",
  "key24": "2Z5YbnMu3QiJXj7iBkwk7BApnk8kD26rieCrWnmk33yCEGGdv83shSBDiEF6xRwKNwRgMFgjNp94mWeVm8agsXqT",
  "key25": "2FuwXNYCEnaEqG6KxKFYhdNYLwhGWozuvxkNGg9dp6shzWoYov7ba54wkqAS9cPqH4rQDxLAgeLEDMLtwrNN8oRn",
  "key26": "2StnZmtiNNkrX4fh5zU5vGWFaeQFKuCCXGVqQGTeWEccEAsFhieJh49dUhf9gQzhnrfPU1YXzdSssKj6i3Bktkjs",
  "key27": "2JgVD1RVLdQ5cGdmJ8sUdQVTGndVb4yvHJTq6UDV97HcwXts9Cm2JLHPwFmu2hwu7HUkjqwvMBiJgqRrpkbCfJ3n",
  "key28": "37KCX2jyokMr876fpuCTvfBeJiTaUupnkw5q7LYP7j6vb94FnUquNkjmVk9tzSiPVAfQttbEsXNr5qaUAvgAG8K3",
  "key29": "35U2DkDuW7rRAuPkhYQc4aFfE8pv4MLt1VrEhQbhn2TYFRZAFWt5nAiXRsfZFCrZF1DhKseUdgc4MmmELrR1qePz",
  "key30": "2d3VfU7gawPVB5SGtXgDnYWW4LYuQDNUVbSEEryqvH5Et9rZ4nytKn1rDVz85qJ85G5rVn5tRW828tw9GZBo4tPw",
  "key31": "37oVUBidEemHHKnYB2mM7S6Pc6mChbqmtgZ1oZcU5voMKUe8zCMguoSn1zabzrNVVTJTGwpK3DbEcpxpehwhYgrC",
  "key32": "3x8z8bzoSCrx1fWdnicwxP8qi5xdKYMyqYi9mBhFMfevLqhe9zFyoQYdAfWMrKS82RMT3TQVXfnCepPkmnMrXXka",
  "key33": "ag6CTu2hvt2YByQMQcHbYRB4rKmYyYa8GYiSidTLCiH7uFJfPfhTLjCaJbj8cJwTpkdDPVweutKenDxEpjcaDCY",
  "key34": "4QFxBMorZf6xv86z2Rb1xtAADfq6PkyTYkC2BCozZQy8kYNJXy58JEwudmUrYkwWrgPwEq91yXmNHWR4qmGTG7oQ",
  "key35": "3tyLhThXhmPJM85ABFSCt73ZxLpQx23tvhUqCLNUzRe1SBfDxf9ECv9tLFXKFiwvu71qj4VvnxDhLtuEK89qZtrL",
  "key36": "3SuXZUT7gJpXHqBogEdUzmTLyhXV8iFKSwBCZszn3RQTa7oZnojfsh29p77ht3Ca4eeatwV31e1rK4nBQjoY3zad",
  "key37": "654wy62roxdC9e19QXZsoRqF2ttKKhYtjaorL68RKzFacnG3wdKnaof64s7N7K5N4HejmSZ33Kc48K1Yr8MG8F65",
  "key38": "4Bb3b4FvqGR7ESx9CpCfgt8iak8ffxk7A9YqJvWPHPkXMN2uW4EsDJxmuPEGBohe5wVMonwnq3JMF4TEM9phreMk",
  "key39": "Ci57aPCBHdabjzxBJdCDzFoVCBsEaH2Yvhrp46wWaQCaBEAK9zanqhr8bgazfNEJK84RK8Ydy4UPA9UWEFJH6NK",
  "key40": "4JeKbJ5bMJYzHoTBt295vuSPMGAGgLS5MrgTzVzCsxzpx1mgu3KWDEcNjwWrfPYezM9sEagTatCVtRJo71EgDEsg",
  "key41": "3M5oJT4r5iyJ9PetJ4ZQomq7m5F2bMfohxRUfETsHqY3jHvEts18R86jwnBu7NdyyesRFMZbChH4SKK4aLmgV3LX",
  "key42": "s2QKSvK9Njw3pv5ircB4HmJeopHuHtHHeGbTrVVjmzcQebNCtR6V8u9McdVXafsgB79zC9eYgBDPhQkdCwiyRRg",
  "key43": "2EcvP7K4TiGU3tBEKxNdgERsBxMmPxMBksCFPeRRAjXR9WUAU7WmVuocj4tvwzEhaN5YYTpxQd7soNRvdmSGmSWw",
  "key44": "5ZeKgv7xNo5fATtemQWLAiQeAUowR2zSoX8rm9tswDzZZr8YkDXBfNtcwyyAx66QZ9PFoCTxsPsy5vNYJ6shRrSJ",
  "key45": "5qQZk6n5ZERADCN1u9t2mx8fT8GyQoBcSErDcjEUWQMcPyqgV3AGgmJPfE7KPrfMLeZ5ZcqTDLCAiQcdQJrPfRLn"
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
