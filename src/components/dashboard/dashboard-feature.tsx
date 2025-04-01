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
    "3sgXXoRkq7saGWZ6VEKUKLdMeXepTV9rB6ip77cxH6T96snSg5kVPqcc2DsJEhkQTFNgaKbhhryojFy3XuiwXbhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b76FYbLJQkx6wLdWpLoBojwEytx58Uf6L7DCPMG2tjFMTxuaD51wQhdmQVBQzuk48b8BLSuZjfjw3CtSMM96Lws",
  "key1": "476NcXgfEBi74QQKX61PSU13NEgVTSSadt79NLMg9FmnDWZfV1t5D1h1NnuAxjV6MKPKCSaUpY3PbiScqRNRBEne",
  "key2": "3DSEi1VChYahMgbQEZGdN3P8zbj8pJ75NEwYidS1KBdUHWBBDgcoH1NfeNw5yjt7AdkiHzHDDPwsutTEtBTiGviu",
  "key3": "2gMjsM2T1L6zc36G5E4ShwSzsjCgAnYQb8XideRKy1fnWn7vftehsmNbchz8yQBhgwJxqxZZojRh15CK5sZXyRdG",
  "key4": "SU2eyLNtWbTMUoUZnSiE3eg46eig1r3s3xBVyyjwjc5Uu2sjCyZG5rKu8HZL117F4T4RX1MQAukQNQfT3pHLuUJ",
  "key5": "Xtsr43ZGLAJnMgGyASAjm8MXyfvJyAvF94i3PmBvouc6fQ974R1mcGMphjcM4kM2R1gafBKr5vLZcEXDEjyNHts",
  "key6": "bAkMrAkKTbhHid5HAbSTYjDkbPyac7aBnESnHPQhWhkjuCoYipEmtEkbRjA2zHMV7T1TMz28pVuEytvMv6jhoGD",
  "key7": "5x3EXvETYoPXoMj4PAhTTXFv7fRHdae1rARdCvYqS61XresfiL3A9jSw6n1bnj6HtHkS54FqLPQz4jowcEduA3h5",
  "key8": "44priycmDS199Fx5mnSaak4gTjWthkus32cFhofDfwM2XDeEcyEGXUhqfbwacFV5buHfaUsLr3QcUpmrxTqNwvVL",
  "key9": "QvpLrzEfU42XDWP7XSyEQb6srzdg6tLhQTpJcKNRTwkhzZH31jzA1FGJ5AYkHgdYzEhAx8Pd3ToV2ZCzoZQoraQ",
  "key10": "4HmjVxQCMBHwUwXJ3sLpfR8tzrfn3duDRo7QEm1KN89P7iKse2gCB8VDnXajMu9UrjfECU6V9Knmc8YX5Ka9RxDq",
  "key11": "3xqobWDbMy4vY9Kaozi1DhpR9jNKfkiDj2UyoVjKGuqdBVhksZJpM8v8ot5qo5W7EoDcZxeYhA13gseG733tYWf9",
  "key12": "59XfKATw8DxHsejrMrGUqAGR9BGtameautEQCKNv3zfNwrs16gHtKwysm2hb3c6acZbDE2pEDc9BB9k9o5u6m9bH",
  "key13": "5JD8VoDaP7HNQPtSMAM31jZ6ev8LwPn7ZieM8vwG1xAp7dTFg1ALrNUJk16Re6x1Kr7Vu9H6jNY21dLNCUJKry82",
  "key14": "28NuVNhV59qz2ftt2FquJek19ZFHn8DKhM9aABWAFtBL8S6SAwN5kCxFWxgua7qyvfEP5ZtEfKLQ7wNLHuANM1VQ",
  "key15": "2YSKxq5SViDefvHCDH3krnSB4VAmfsKKz19rGbLu4NLjfUuAhBNmHXMQf9zJLRxQpuXuZumfpqjsgaFbBost3Ecs",
  "key16": "48FbUoc1k2YLD6GXqC5WrdMTxXHeHQaau7bD7sFACc2xMQqyYASQKissSa1S6YpYDcHyFxPkNFLMtATKKcCR1F4a",
  "key17": "2NnfBgcgF75oVJ2VpdsUKxgnCmyBVumHuL6nPEdmyPb5Uzd17cjysRG2AX8AJsaBg7gv7St8XWTGAQtysL9sFtcy",
  "key18": "4LTcbcuupTuuYPhdJecw1SaxDHcd2aiBBdBNnkEZifyp8cPYfd8jfXEBfrQcdZmqd2d7UcrKdUCABVQQjcDHcBkw",
  "key19": "5sUkH2Vw2Kf4fGPhKN9CGrzGH8fxrynsSu2enBu5WDnqEPe2kbGuicmc76LxkudAYe47WSGP7Ev3genRfLWx8Ffz",
  "key20": "5DnByXAJjL4od3v5BHs8JDxpZ8yFsKxwvBxVoV9aQZ3cbtimnyEh5FiZWCTHyf1Q4MikfTj2uAT3Tmn5RWbbPK3r",
  "key21": "mGJY53fd95Wwrk4VEG32ur62xCn7YuUFFB4XkrCPT2WXQ13vi8xFy1poc9FyburHvqT4mpjm7fx9dZ4NG5uAiPz",
  "key22": "3uqafSbf4bwNTLXNQgYMkbnWFBg3D5FDAmLQtHHrBDYceRBZCKrWi5nWRujDi1tTUJ4pgwsfCPf69xh4NWu3uFaq",
  "key23": "2WzK9G43ZskpJm1XSnUsBAvQRotnsFcYnoChGDAxRWzkzBKYEAgNaozSRQ1BiYHbPxAACM6chFyzgzqJX9Vuirkf",
  "key24": "4J9X2DL6XscKa9Yafbg54Bd2kbTW2hT5ahhsAu8dRSro7yav2JpvzPNhYuvDSJeKsyGygdBHKeYgqZ4ruxzMvNHB",
  "key25": "3WdqEP1ERAXjCmsT62e8XMG7xJWrRJr1dVAQnjQus2JREEgcRW3q6ic2C3fmbwxPt63hctePyjjz5es75CnwtsiA",
  "key26": "28Pcy6eCcCTErHb57B5KaRhFqtVZRBvMDYeSJxVZm6bEVA7ewHkLzqUXoaQ6Ds53uH6G1qTMsJck6PjraE1DCiDZ",
  "key27": "36m49bUFGnoR4gAeRr3u6rMN4N2nhFp5HkR1tfwZi8aTrCgDG9ChT3X9dPs8V9rqmHUx7jJF349ZYqT7iEAN5h5P",
  "key28": "51jjHgB9urhLT67bZkrq9Uzdhmsq2uishAvBXzsJWLrq623shHb2ZRGr2rHoXULqxozoUv2WHrR7oS27Zm77RZhP",
  "key29": "3nvxiHgAXSB6tqhQjsj6U5ys6NSgFVY2MPTz4ZEtYycCwYBP8rUFvSVG5zNDrceF6s1TjwGnFrgn1N1wcMu5Vtxe",
  "key30": "67JCVd8A5jcjLF8BCMYVx1G9jKUqhvMsw1Gb6v2efrgA8pnP7u3rkAjcPULqw3XzHLTuVSUGLMU7MHWKG66A2ZhB",
  "key31": "4YQZtMB5KP2hNTwg5m4Wss3c9TMd1KHoLNgRDFCuqyymp4rRtogGwiJvUZT3FzmSY21UMmq5vTc1cJUPJfACYshJ"
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
