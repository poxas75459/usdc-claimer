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
    "4DkG2z4vX9KiMzdk6cAehjQGc9VhvfbxAgm4WWxk3z8DTMXUCmQAzzhwc9swnVX7pBgtj6qtfiTk4ou51VPinN5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caoRRZSBbVYNiLv9RzzXUmgb8Mww4iMVS1GCjy5YX2qSga7PDjShrW7FzYQoH6tsT6yax7pYf8j6S5VMooiL7y9",
  "key1": "3Z7tH2bLzYrb9g48CzCtSHZpwajoXmZhjqhjTtwKSxoHLFGV79tW3wCr93LgTgmmXb6hr2tBzk9HwdvVUGhedLo7",
  "key2": "JAgzKzQhjsk8CXWmcfGUZ5uFzdUwXwMqzDxXF6KwZFvR8kXAPxensTvHsJuNG5yEHSh1EM7wo86CjDvQzCCuyXi",
  "key3": "5TqQcjQYB4F4wsqWtfawUJsZcoqJQmSMZ1VVraCQbQMmEo397ZqykLaaX2YMrqdb32KhhvAkHKjy9zSSXXCGZXBR",
  "key4": "efmCQm1yb3qi7pG8B2ndHY2dMd2DkWs5drGAN1SMBNsD2eWLgVefammGUAL4Sh97wa8puK26UEsHhMkB8s4abzX",
  "key5": "45R2caaZRRdQXXTaUas4nGKUg9Q8H9SpRPzmideQyRTydiBjfYbUfJA3XUSwY3cuiazGVyeihW2PKCCMnEM2zyBb",
  "key6": "i7Bisn1QnMDWhczZzXV2QLRTX93fKSDvxwXTM8mohjWkPdXPZmw7ZSRPm8XPDUfPE2RxEtAD6Mm3HQGyCVart4D",
  "key7": "4s178bT6w8cvbJGR24YrXd1B9KQk1rETeX4jcHWf7rHpGa4WoJsHH1ZRVnegNmtzWzfR2pskQPRqDo19esKq8fJz",
  "key8": "61jWMkqUaHyMZd4UDcnW7D8V2x6GjpZ9SVrZLasr38gnfVBUinW6qeDhe3FfjmfxvrVsvASLBZ1E2TicqKUcL5xr",
  "key9": "RM5ZfDmgrvyFGwzRyBjC6DZf7X3oVjh3Y4C9oaj1Qhr4qKqv8EwcGnmCy6TkTrqyYSjKw3ZTLF1yTcLqgVet4S2",
  "key10": "3W2hBwbPDGygiB3EjaU96yb35WBWhCLd6xggDwrf38SkiL71zgVh6cQY9GxFwRnPsGKuGr9XyhEqf8Eok6yRtVhX",
  "key11": "4X3wSgxDayP5b4sQKY9HCPj4Ws8XAFZmvmh5L5YPuJeYmRYqoD27e8tYkdfskzDTerkVdG9ZNXAynDYDDELajv19",
  "key12": "35AQwKw1mxD8cozaMehwbWBuSH6ssYSXbAExxvVqjP7bL6TaXjbArqAYwwtuQ6chat2KfW2LhcH7o32gVLytKRcJ",
  "key13": "5n6TKbrGzcBJL9Hr4WGFCVxFqhdNiuULfmE9wxXWszbcai79b6hcxnr3wVLVwbRXKuF6Sb5dLYmLHknR13kV764H",
  "key14": "3XYA3muHrpHrkF8HtsSu6C7MnVaLFz9XvzWdRpkcRuD9gLouCezSzPvpzNPUEKrUKjnuDH2z73ecSssCHZM7XfBo",
  "key15": "5SC7hqFMBn3NEsnbeEuWwb7mcxBVXdBQjzXo2qmuXd42HXgak8ScKsPFqNf14iogK1wro7cLDXi3ZSjUoF1u3RRs",
  "key16": "36F1nrXDevpLj4QUyY7hv25eSdtcBgiQEnpnDhhhJENXUTk1gSUn1yb6oeWatbts3UAR8moutA9eLezbk43mnv4e",
  "key17": "2czE4py4iemTvp7bxVHz9thA2EbheWmi6CbLv36ngD4HB1upJBJ7WWGq8acJyPKk8oBR1kvvvtJ5aoBsahG9xKRg",
  "key18": "2GfBytbyHSV1xY11apssuoyqAn6M6tWpunyJBNEmcXhZvCipKLiTW8boqHJ5QjJ9Sw6EnZwkRsGGxhdCCY6R55yT",
  "key19": "ezV9vHAwgmn8eQJTwLRbk34eRYXHQREHaExhmDAUwA85KFfpUfsxjSXMv53J91zNMkuq79rUvFzh1JixR8gVavL",
  "key20": "khSintd3QyN69B6WRUsdcamAJrCpFyoQeRKYLcQvstoz7xsVY54RKTL7cGnPkwvdWTCPyiXMC4XSsWA7TcU7owF",
  "key21": "5istzqbNq1Gp2GyMZYgCAE52ykZywZEJ8aK5qHT91ZZjWm74fffyF8LgJk2RmrNm99mU9npwYRqGRR6sY2MqzoGQ",
  "key22": "4kf7Atbije6JDmbZ33X8dz7iigQ2ScV55woKsm8Hi8LQD8fpKqD6xogQQWyh2FGVhb8itpmqevirBeiAQmvESsCB",
  "key23": "3hWZALEV1zjYXZcafrsZjaSLUeaDok326PqHYVVQDq6o5Y1Hcz3T4e2THW7BjZeXznNbaUAci14t9zLybCKqsKQc",
  "key24": "5qz4NzrM4zxcUNDkqg6hZzgt5kuxCx91wBgBE8ugFnmDxytHrySrszYdXVC7mAknvkF53b75ApJ6sJL8eJ8fqJ8V",
  "key25": "3AEQ5j5BRJSvHfBviMEBBGaiFph1826pjEvgVjzFDm5AKYAytqTMVBzwKMctcdFwGKdgy6WAaEY2YjxRVkySur3i",
  "key26": "29iN4VJ2kpkSAWXqjgy72GU5uxXRv24Z8JSREVuxN5Cgd69ouVzEGjLxPwjBFwu2ozTdiBuskSzQxWEqAVUSvY1Y",
  "key27": "51qytUqjRR44ciTLUu5dbGeAWY1pcJPa5HQ3JEX6rn2G6qNgEv5AmVMJqheYRakDjdVAByxn1mYYMmMvYr4bayZE",
  "key28": "5a66apYTYbRWiV5U44TUzXTno1UvwKZs2pc5wZRrm1rLcoHVbUviFA5mCBZUvhW7AwP9aFCb3sWW2tw1Xtm5K36g",
  "key29": "4vR89YBYkXzLCYmi1pKtGzcJHFwZHH7RTCqi5Qz1NyigmQZUMMnwxAW9it3wgb3TYyUT5RH41YYDfndwwjtSy8qh",
  "key30": "4oa3AJBeh8yDwRJu4Wu5RZ7icYBtgPPGpHJt5ii2V9yvippeDqAiRUSFBrns3Wy7t2BKiFXM822AN1Hes2g1YzYm",
  "key31": "GXVZApJ1fr9GpZjJcqHEjacStMUjfuhsVhqeHNZrHZseo6sjhYXsnYw2ptaEPW3zj2NkkNp3EzD79wTFniPercv",
  "key32": "4L8S96r6P2Bi4sj2qivygmVgDeJoMDpwtAMsBf1X288M68XrCh2TJ6VMzAi5hz7omvJQ2HmPX169RwnLDsvGSNi6",
  "key33": "29ZVNXUaHVT2uNGQekSVDxYcPadw1HY3fM2JqjHppQqeeUQ81r7T9V5HYpDVjy2wauxuSmbWpqnauLXtBDV3nNCr",
  "key34": "2SGkjzgrtEHnYh6mAVJ7gMhGDnedefFSKTwnwh48V8fshSniW68L6z8ffavjwdsR4Nz4VHVA3gwaGRR3Rdz8aBwG",
  "key35": "57MxjonskfshAPxt4n8WvkRT8HLdZ9pwCY1hrSQ91HXsuqiKfvjJRYEwocwnfhQNX8gLyx4XbG2TQH4jWE7de2dh",
  "key36": "3HFpK8zHv9n8K8PatRUwaZzd6UNHDoGCuKPRQProZRZo3fDvWycdsBpUkSy4ieymF58aN9B9sAnNmcnvZXKeWzhH",
  "key37": "4KzjWBTqgvkzVCcY8kCZuyTZgdZP7Y926LfbrmBGCyC3N25Sm2t5agnHdLcuBKUPsnsEYjSS48ZL4rj2PeDP8DBB",
  "key38": "294DesMLHSU4y7NMCJD8j6f8gNbPqawFzaJQDJEyS2b1CGeL1B91mM8cQuJnuSjDXYJGEoMLG7f1VFqKq9HR1w5G",
  "key39": "476jCAFeYQo65FrY2exrMk5bnXFVxnTBnseeTWWqndKT51L285WHinLPbXuC9jNUdkeGed91wueV81LN7HHSthQ1",
  "key40": "3WHKvyVpj1ZsewKJLjmuZ74yVXy4Se5x89h4yzgFTPRthJo3svn2g5uQGaiTCzMD5hz54GQS6r66aGRUuQXuVp8A",
  "key41": "5QPc6gTu7tQLgKhgHia6kyzwty1viu5cgeU3zGaVYpNyeBq3rkxMZPLwYq26JZ2Af8jPhj1tdQb7RR9bWSanx8kv",
  "key42": "3RcrLieDjtm3XVACrm2AcW1tD7feYMRqfWfDTuXeBa5avVuG6iCiHeGSJmscjAukeGTyBs8K6eqhNpAqHBvJXymk",
  "key43": "5ocBQBeu2dZoU7bBneZEWf8epyNPq8jNB4ZzPYEB4ELW7kb1d4QRUg9iS9kNb8AZgo3cA9LRSmYkUs8Pcbi7PCCe",
  "key44": "5KUSZvqdiXTS8T6ifMmy6EsE7HzJgcTAwJfKHeLc1ZD4aAojj9mvQKgXkfYi9kFdrX1RSEV5yuXqrFMjb2eFPSmx",
  "key45": "2e8JdKusw114KDJfQJzQ16SmBDZScYiYZsK2QuSVoWmJ5ksX2sTfCryVjYa5q54HLzSWUJkybV5KyaKt5TK2gbGY",
  "key46": "35ptV2BZ3M7CCyhzam7XXLJi9Zu2PaDWaj9oyWq8ZNe1Fxvv21HfZhxsg3CDJgsLgAJYsCw4hthBrqu6bAM8KW5d",
  "key47": "3atPK9GCCDJ4qDHfyzEFodzrBPE9VYr9uwkZndE6GVkjAB7sfiwD1GvS1JVpdjRCir8RVPyebAEqBzmGyeoC7rTz",
  "key48": "YCfaqtTe1pGb4kKeYvmtKChfP1JBk4Ys9cWjFrxNPvCV2DiXEWsZp65oWTK3brD3DauxS3q1DhRQGVweYvL4o4G",
  "key49": "35A9MH3CtzG3fUiTdTUeFVV3BT28hRnQyCpREnhrMiQAFs1WNcULM2TGKi3ViXuMVFLunsrWv9mzxBSX72VweGGu"
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
