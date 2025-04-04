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
    "43k7rqSLpTuiPwuLo1qki8CjJVXarK3KHpakn32on6eDgeihzy14vyRe7yKcCJ4Eszm15gifLZtFoToUexWN9MR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TxdfcUnEPJ4sPKNmBpcQWehxviNtVwgsjrEUWhJDuGZPJR4VZhi7iyqVa5zdGyQFdq4CsrbDnqekWRBmaG86px",
  "key1": "4wfrJKtJyWbgSaw7s8RzrynZx6rSFJYnc7EhpiprL3dWySnVzU9Dm26DSS2HZM8nWLFvbd9CGhaq5hVgaJWiZzr6",
  "key2": "5aRQb4VZebEh1gPrxexXCSXEU8fbZiqu7QPfL7rzJDQqv5tN8m5vFUityTd211iYZLQTMA3s9iknt9BxZ5U3xKjW",
  "key3": "49rCkRNpGWDdyQLuSAFR627cFyYwG3B1fP1LugtTsy6K3uGbtVeyZ5mNWdm4ALVusAxm8Vku2KnQFbgMNH6JhWDU",
  "key4": "2Graz6rRQV91PW9LzLdwJZFWzSiocUrF4MTvCp4iCh4FPDrTBx9gc27bKyHooURjYenCU3ECGafKfZdT61zSZvi5",
  "key5": "4H59ULRCssAxaoBtzWyUV36QQJS84krF6WAinpopcativnniWLJzSaKnPD5jTZNHB5xf5fSzSCZLkpqVtGiqf29R",
  "key6": "4VFKKmxPgP7AQnUiMatWyTdSQaVEy6vurc71vRYrU5djniLViMWwbba7q8i9fp9yYzisMpsUjbWJShVLcCBoh9yB",
  "key7": "24tWvsPnHiosynAfBLY7UtP7mGuGexvNdYX8NqtMpVp7t95eMV7gBD36dLSyyhSFPQceEoRpArPPfTw7pmZQjzPp",
  "key8": "CnMNyCYU46tvhHwqc4iW1hRVQ5rgv4idGu3AqHGA5gt5MLDDRqtjtWeGdGeWb8FDjpUguAW8yJ6xdxCZLKU6eZK",
  "key9": "3mB8XqnRzsbaatiQKFK3xCoeLmc1L1BgES4d4nsPsCjmB7C9MHJdrPEXsbLcMbw9UT8vQVBTCtzqxXKkTXPo1HNT",
  "key10": "5W1fRGAbgjrQNq5ptikgJw71WL87Lw65D2dDJL4Q1paMqMrUuGgQCAfVJiek3d2wadr1BmDSoKF1CvYzqWcad2fC",
  "key11": "ifaJZqjUPS82G9UPAdCTHTLFBf6AGT5XvEAYcZwHgB74QLgXJ6CmJqXHCfvaz1qtsa24goiitEgKQKkEecJAETY",
  "key12": "mhJzagRavrAVGmNmVnpkE5aVzrVqDAnhjGfFkrcvpMF5DNQ3m1fjsbFWH2ZhM4ZCMWPBsnABFyhnQJc4oisDw9e",
  "key13": "65CcFMeGHPtoxRUnwNRXt7e86sj5vNpf1Q5jXUVZcLLkJmaXRQGdQWqUCGgWbvmGzkEAv9RgEUNKRxv48ioEnAjo",
  "key14": "3a5R3PqgJXWR2jsXfeeaMW8HjJ7FWCAez44JHfo6RHQbJDfBz1GPwXaqi4NYuGqfhMFmrRtoWce7AM8RG9spfzK5",
  "key15": "94zcXRTxBZquJh7kikT7BQJ3JFb9xTrGWHF98eVSxcQhEmrSQkD3yhrpjgJanCufjnFMuEgNdr6uP9qVdFYKadg",
  "key16": "2PVmpeGZWe5J4o5SAjPaQa8SPikZ6vXqAG5jZrfMzgmDaBCbbifEJPcAr24rQkjBF4mybmdeKPkh6FUC5yGDhCTS",
  "key17": "oc3jm7QdYgTSqcAc6Gp48Ezswd1bRcbFA3K9kX8hKdnikPwjWqrnEDZ2fcjHbT1UiaYbKJ6wTbdKt7G1jooZnEB",
  "key18": "4JCS21w8wgJ2CbVQ9dyJtD5Vrv58r4LaRiQK3UQf69SdWMQEAtUL2Mitd9GqnRzSWfWN2vdpPeZaBgBjV9StFU1Q",
  "key19": "2mmdUd2rUGayaGWjX24aoWjkpo4o4Q2BDgSgLPmYT6CcXMc3TMa8JSUHZFg2qk99DG5NEG7bmCx5ZqUNaf1gVRpg",
  "key20": "2sAA41mESxfSRndhYqeUjo6ZX99As7Nfqfr2SMWpq1qDHUhJN2qAbDcdwgQpApYuLezW5g34TPJGsy986gKGf5uC",
  "key21": "4ejs4fCeNSvjthpMEEHxn9DB6gQui877Pu5Nq3n4PgXba33ktAai7ZyLRFC8o4yxaNjGPMLaMxbuHVBx4PTw1HAh",
  "key22": "526kL7UhwXW5s9PnbxtBfZhXzWdeVyiWJrT1nts4T1GMfhEhS28nNgyGZi1KmBEpn6MfdNAi6Y9oQgvBepm1McAa",
  "key23": "3A6AtUnDXwzgZ1FTip5YfDtZB41mvvsYVYsA22PYUpJanCqbg5V8HEJ4rjzwNWEt5VBgj2QSNJmUQ1ZLdMbNGo3s",
  "key24": "bYViLGDDpnTZCJxrvAFrQggFUtZ2JereLgj8rikeJNMaPXvmynfTgN9Q7BZvptERmSBBeJVfEfQUeLvueC3hjU5",
  "key25": "2eoGg75Ek4oxsJmM9Yhp4k9rBkbZExLzxE5TGTNyHL2HeTnbxhNFg43y9vxwMzcNoTBfiPEnj6vgzfpvEP6gP1rJ",
  "key26": "3pmSKPg4TwQtxY8B9aSExTsvAna2yFF8oPgR3TduoaAhpS3LmJsNDGuseqbnFJewnCWf4yqoPzPx6iZeJG4p1BCn",
  "key27": "2cMW8JYHAQUUT1bEdn6so6uVx6GrPiyHc9rZs3ZrN6ZSZeGjNab8QeZTZKJJvCpcTw4WiUytVGvyCJnheWg3PKaN",
  "key28": "wVJWftortRjYWLd5YNGF7N99dpyfPmeCwCxPW3Rc7DdjfLDrJAXn2M8cdFS7rHqjhLuxZFkzoWdX1b8Gth9cBpk",
  "key29": "3ZgfRAxaEsJfZrY45iWa7W1mVAHiSj3Pc76G7KDuqGAuNwnQVJ2jnxUhww14TtJ9ctK21BnkJ9xLRXmdrwSX6uUq",
  "key30": "ckDoK6GG6mtpvEEr4fqAc6XHtydTCuW1RAGWLT4o5Bu3pyAVpfd6C4gpM6yzCd1MAWRcj7eXYe5fzVEi1Vn95jo",
  "key31": "5MmHsQ8FEN1aBmJZ43DpJsL4PuSEuhehNVviS5WMvijW7akuqCt8HAgyw9wvW8PqRAeiGhqozipfmyYdjaMXRK2y",
  "key32": "RCMyKuri9oEdEk6ySt3HCvWxyiSY35A8Kc6ausHvKXTQ1BJdkPk1QrqfyKX1ysFZSmXXXq1hrLjjPuzobubPq7G",
  "key33": "4QFBkca5hqBZHo4gH3Dyox9XYWPEqHiJMfmBwLtTLiJ4y7sKuHusaRFzMCBqEbVANTnJ5SRiKmEc9cVMiFL7498z",
  "key34": "3JND3QpvrGiN1sj4u4wBQQru648MYsXpFvXcYcm2nMqJZD5kTDH25Pp96Z2wmxi8K62caVepdGLMiBKDzSy1opDE",
  "key35": "233HY3pHCwVRDw5dBYuQurNcgNZYH141h8mtkMNwLBVH5Lpvz6nvTEx74JgjrDz2EL5e15QAW6t1PuoAvMHxghDf",
  "key36": "4Jez4uQPSZP47EjENMdNycEQyr6f5FyAkYEmfW6HuTRb6JwJevQEmNj4LbhqRDkzosvB9jhxeb2d7v2niZY3KW7o",
  "key37": "3m14MRNDad7v4iZHVyN4ufZRKtnucKvixPEfZKXhGVXXxopqdy63xv1B3Dd5NjBq8UbL7gHkbCiuh1idn5P7k9dz",
  "key38": "4iCipoZtJEBvSc2cfyMcu7zK6i5iUgM5dmeBk4EfWrfATPgtySWeEmbjiedPYsrsNUoGp6suuC4ZqAJXCEyrtQqg",
  "key39": "2jCHRQYm7WzfPZaZsvhh1UwGEBC7NSfDmhUhfFmyLa2mAyV3QkdwXm3iHHwcm3LhxmjqLoYojiXp6ytpiR4sPqgB",
  "key40": "2tur7yurk7EcypyRUJrwia8LgGm6aa6ccY1wzuVt3R1LT44vw4wV9YQE12MGAKjB1Bv6sopiNdwjjN6jme8nMKEM",
  "key41": "tWK438Z9gzLUHD9MbHbLRKvETg1cj7QC8zNRFeG3aMYM1dN8UpmU74qpAdCFmiMPhKRzdrQ7EwvsfJSRiC6uzta",
  "key42": "3U8vg2NFXeoXxye2Xq1bktub5Jhgn64DMnDkBwCLVV7dWemMFCjCjDjobZr3sdTs2jemcHg1zk7FQdgKFLAfoHAF",
  "key43": "36sM26CsSd82t4453KoRWa4Hykecqo7W4LpJwmowMhqwcASbvohzkhEyPHpMP5mBdYjNjUTAgCXvA6X1S36LHopL",
  "key44": "4qgmhZ6ZrWFF2RrEjaU5C9jEF8a6MzXcnmo6bGAXm1MJFia4btx2r36QtL6cJuSFBqFfKfidei2Lt1VgGzq33CFL",
  "key45": "65YQA7tWji55u5fnYp4ksekVjhVqwY884j7SX19eZZoNNChHN3UqtVy1EWiGHJ2apGATP7nHd8GkBmVouksH47j",
  "key46": "4GpSk9MKugd3Bzb6gK7V7ZviuSQgyH5gXXLfBfyseVAyKXSCWj2LTNZ5HYdPZv3MP5JVtUEwAgtKSwYjsqgD814g"
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
