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
    "5juk7Emf2CTSaXYT8TZm7ZyBzu9Cw2zhBjQgZCD7TBGzyxT3wwTGGJVNPuvZfMH9rcRtb1pTUyAGBYVN2bB2ajPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTv6UBSqGHwgwLd9frhfrudUYEj7AH7Y4zt4Fsm1RCuxpxo7Q1FkVJtEv7tXqAM1i5CnQXzTCQHmtGnhi3sueBr",
  "key1": "3nwVWgDneKTcqR4Hk4berw7a34sc7X2qSLZkLd2c3w1giqN7Vgu5V6wzQfzQc7J2J9EKSW5GG9p2qqmMXNsBzAf1",
  "key2": "62PNbo3HmfTtuZeLUWaTCcNSgZnFj6d14cQfg2ojCfQ4g7BJUC49PibU2fGBD7UMeKpvmDcS1f3rcZ7meJTfDVgu",
  "key3": "3mjKtJaYtxBaDTkKckHeCzzm98YkDAD9qaQRtQYweDrFjNAi6bjFSX1gpZsh3UfpvBJJ7477vTeHwceXuBc8wuie",
  "key4": "PUGTrkbWXDnnEnXDNcGovjDBmN1EW3Ue8t3avdk5orHDyMYNsgFj3HPwEPGvBbc24Y6BYjQTSsg6vNWMPyJX2DT",
  "key5": "2hzQKmN25To8x6yGxr2QBzRMHaBSa28THjzcT798Lp8r6MEfVgciAntu6fqjXudox3bwdyeCYFL5MCScHSctz1Zm",
  "key6": "3novHZ278QuvbHQdFn87PoKfhgzZyrz86QU1ps1Y1syJUQmHNxwjj24bXZVDM3iJn8UHrzvLTL4fnP81eJ6mwdZE",
  "key7": "mcmaScfpXzDb7NGFGwWo7DPpmJ7EszxqdbjmNjw97mpCd7Sd6zGcrf4Jim6xMTMf2kjshx7TfXkyBXzpiPBohi9",
  "key8": "21BsjT861YtNaqyDd7M42T6B9UKg43o4nYEFokHmeV6xccRXKHdjMoA9ZQ1SbW3e1hLm3VKJ8MFvQWWpeGxts5DL",
  "key9": "2MPbhz6e7Sc6JC262rUpmN9mcvZtyujnrXNe7ydTwC18ngerES41StuWCyzQPFYt4cputHQetsVzhWe8uSRcpxsH",
  "key10": "3MqbF7DtkwzL7jbFx49XmP7jhT8QT7zVaXSkvFSQtEjrj5uArvMD5N5Eqy31cnvEWPi4RsVApUAJQ5kKygq9UkvL",
  "key11": "2aqnxkHgWrUuC29ZJdyj6t7w4u1V1BHSeucCVkRRchJCm5ZXNUEGmtqGpifJ4dgu21r4ufo1kFXswG33uKiLvShB",
  "key12": "33zAJBVUmRxtcNLPrXGrZaHcfTz7qK3z9Kz9Waofzr2h38d5VhdnRHE8TU1GhZceySpUcvoQrYNvhnEfrTWUabcT",
  "key13": "2fyj7qS43hsCL3GF88gKBrmrhBoaRyjtUadxRDs6kX4ERpqFqKtezWMqUUe62Jrap2Z9hQH57BbKAmhEKUUd8fMW",
  "key14": "2TVi9T8rpobiqSjjw3sQjq5NZbgjY4rYjEfi7HkWP88ynwriHY8C25eoziC8UdFJmCFyS1MYDBzcK7qgjzjrUe5L",
  "key15": "52aXTUarFcbNmVLKgkL3wxdaNC9Rw7nLiKqwi7E92b9M6Z2RWuAGqZEpsaErdd9KueY4iPFaCZ7uGDUfjbMsMmSL",
  "key16": "wt39U2grnPi1iK9gdQczKMKoZdcM3soYBQxLnYZGTk3esYifiy8eYFuy8pMvkG8rUebr358bYjk2YTgna7nCNCg",
  "key17": "5icUqnmADeJnGxcmq48Q56tjn5M8VksXssV3WkLToctW9Az43mDLf71CCwiFptNmQN5A4PWw5yk4Ns8qzzMAy7G5",
  "key18": "3ZY5h7ReexdT9z5jp3GStAKbZbhYS4ZkMMTckWiV9xJjxRCWpQgNtSghXydnLYPU8C7LyAYSNrsew6P4mdZmtd2K",
  "key19": "unMVeeKsAa1Tn3znTMu57minoYFKysNMFoNzhoD7xTCFnjYG41uSU7t78aQqPfXVWrLHafiXpotXK6t1DKFSphi",
  "key20": "GnhywyySqqwZgGFZyKnCVnZNCSdiXnpGFaLUBBcQBzh7UTjs59cnvZ8MNj9bdSXNYj9VUZnKjaKMJVrjmsAT194",
  "key21": "5X69iNLGd5bWWamRXqtrW4fyCDxNtagDPsNBXGq3ohQKa5hw8LnwAcZKQnEGbMp5RUVG2NoEAsg89rcBtMtx2hp4",
  "key22": "5wf1Lfw25os8GNRdSVvS4NfhJN7zJEkzzegJXtrLDgvW8sTeQzeeSwYSzoe9z6cMyn8412omxhRvZr4Cedk8yxYy",
  "key23": "2pTTVpCZ1fJCqCauLFRGYMrBdopASo9eCFzDG45BpiKGRy92ZTpVGZmeoz8DznRZsWSFHzSZBhFwsnCKMFPEY95e",
  "key24": "4BftZmtktjJAdEFzjSsxVFt7M8jSykGymPytoiouJnoD15QQEncCFQzPkECbPQt1rx6Yht3UyDAzSckiP6HbUdHY",
  "key25": "27kKG4iNtLwCHd2AyN5s3RSSFK86Ju7hLuZw7d8uxFMrfjbYPDM1Ve9FSoen2oPRnQtQpPPEyEAUeii5aLgGUZQz",
  "key26": "56JGVFYghzLmJH2yKjbiAumVRHVfTaCdUrkgj9uEL2E5nawUydNf3rGy996hYC5qq4gTuKa2MxcURPvvC6Q197Y6",
  "key27": "5PpVxVCrsUHL84H8cHqcHgxecwspYmCfAM4rCS1iS46vYeuMxQyjZFdzmuqhtVLcEHEwbui88jsssB9Zd8PRcNxk",
  "key28": "22FSk5YGQc8mi7n3Ti8Xcn6xZ1Jf47EcfaJsc87wEiWaaTf2D1jVj6b57AadMH5vCyn1akP7k3xAZCfEEiEcEgZP",
  "key29": "2xqj9dz2Csmmd2rJNYEbnVkdqT59KNKh1p8eyEoArcQAnhmC621UhVumDs9mtbyws3dcxsfZk5m6Z1U66J9HBrwi",
  "key30": "64YKGX34B1DoW9Zz32YfBX1EPPs8Qg44EhWWVhA761akcGhmD8bZUdqpeFKEL2rnQHVF6RG1Yg1529Hbt5nruoy",
  "key31": "2z3ShEp9GoNhQpJ6QUzx1irg1xSavvL5zSD6WidaeFGiVsEijc8VzbAbp3dCu2B4N4grN6sdEMVRpy959ArCEZBB",
  "key32": "35ynyAG95hY1xNysAwzS5DqCh1TdxmBpXk8a5L9emR2EbXvg5MncTMeHAPQLd5G4NFkQ6CSb4NUjz4aswbZG7psq",
  "key33": "VCRqdbj3kHwDGsLyfubreyu8XoTNgfR4bffSFrkiVsy8NNBxSpjH48t2C1YcPkMPUTLWrrZmJSLzvau32gtbvTh",
  "key34": "6i8nFKQPXt3Q9QpFsMFjz3r1Q8R77QWkG3GXViDFZF8VfxELUUUz2SmbBCeRxpY1o3AKFfCfzoBJJMQmeQTpuE3",
  "key35": "67QfCwCmRHcx2JBhfZuWTZRZm9q4mU1ohm1adzeFWK5CLGV8mX3N9hYVmPkN6jeLSL3m1xTaQdBEZdjLUTHs3tQn",
  "key36": "4StxPu1XVhiHzBNQCib2e1PWFt565oTRSJByXcPUfDxvvjwLg3kDWc272g9k6hYDB8Pto8iXG53e7SALAwQL1wsZ",
  "key37": "3EMRyoSKGM9sUsEVNZpjHDL2acXSQivQ5u6Q8HCjHahKhmwSRmo9P6KbFUZKvksz5WXsbyMBe92vKcQCLd5eUubt",
  "key38": "5EcwfZyPit6GfXARphTUt4bVzRbmCwuuWZbgSuh77gkg6XBKhxbXy2GQoMd93eNCDxZNtvaQGJcXg8tSrLeGtqc8"
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
