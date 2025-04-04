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
    "3hpj3UQBgeENwnB4kA9itFn5RqBEn4wyscycLXs48Qztid7XNKuf9UPi4gukah1vDhuc9CovZNpADsGfMbRWthth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CccqtCAYnRA5JmUxrmVg7ebXELRjZtn3iX3FrnyBpRFnHmQeHWFQb3joR8pQ2ZhqiSKp2p3nP2Am4H6e6xwtRRh",
  "key1": "3t4rruCVnMsV3rYi7Cjwv7rZ4kAMohx1yeMrYvrZwSTED52y1NSrGdHhw6nydMGk531G67nyZnbDemDzarj8E6eC",
  "key2": "5Gun3X6pTJcVEi9D5BPdj1qACiV79L3LawkXHHAwzLXMbV9q9oCgHNQUhkTTrrpXnhLBQEVvhXFAcThznNm6UEmL",
  "key3": "48kugh3Vhncs2DkTmz1mZUoPm5QguZWYgoJXjsox3pUH255jFm6rDfXqZy6aE8vQf21PJkgixHrSEWCauUR5ndku",
  "key4": "2BSj1U2WLmdNe6GRNKxHjkD8H6aHmFVByRCEuQLm51WaPAuv929iBnqyxWwJoiAk3nXA63TDA3hYYGvWEhtw8dd8",
  "key5": "21FQzh3WGw5tzSduAcHwjfngiM8yxQYVyM9QQkjLNAms9JxZE4HKaF68yWo2mDiWtEdV66ZLF2wY1RKXZxHNshQV",
  "key6": "5xWssTgR54uEpz3r1KbhPxfWhi4xtrMtDEEvn31TdDUFVgp8KUJVcP9Z4SQk1p6sfev8xG5e9SGNDGqEwQH8r294",
  "key7": "5pQioUnQzSSsApLyjaTjbMTP2WUuhFAbdLFKYs82yfHUKrTPD38zACprUywr7oNjmbhcA2KXzk2Nw4KYSJvKwuh6",
  "key8": "5xNsRifFH7Piq9A8MRjyrSvqrzCWnBUtjamjFfZHXTF4im2SkL2ebZpD9qT5x3sYi3jWYUQ4xGq2KQAWf4pLjBDr",
  "key9": "2o2EVLEmB9qboLKGe47adTLPKATR3bL4S4MRP4MAbuTS9winYtYPmj37RoqYEWXLW3Tw3W4Wi3FH2qAnCqmDQKVM",
  "key10": "22xCcvcm9MeGQoMUJP8cQwFTkBmG1mhiC5hWEYFZhLwLzk59A6y7hsYW8yAt9QtLJ3wJ8U7nvKCD8MSTgDMMt2PM",
  "key11": "qtTUnpDCx9kyN7YKhy4QjtDqnsMVd3VbWjXmmDT8Q3G1s77itxMwKe1EicaXZ5w1wmuDsBzD5nKFgT8mMdSGQoW",
  "key12": "661ViLLrb9EpXt2hL2cCZTvAUXttoUwbjzFN6uPXMoLgfhDF1W1xgJRgBsnugMwQ7j6wjE164ffT1b3WALcBW8eC",
  "key13": "2cHLx3smNkusJPWAMrqNStjBTDzQNjkiHYSW3dLB9y7BgXzJUsmFtxgH1YeYnMgqUjUVhE5mUXTQmdfgmxW5uwx6",
  "key14": "rMKa1LAfp5jiff7DnSWx38o1NiDv4vTi6aceGW45Zo3hWMt5GyAe22uMbh4GmtPvKYxUzu9yyB5qj5PSzKLjeGm",
  "key15": "4mAwPZ37JH7cKaP9ihZYyzm3CSsri4P6CLmmdzVrenVGnorcJ2vEcNfpp4QFi5e4WHcdpD2Y2ZGegpdpjgmfUZFb",
  "key16": "64cEtaV7cyFyZXUc5232e6tMMaMr9vMPGQ6QhS3rxjb7KdtxgaVi1qyVuhk9LQAss6UkBjrodn3hz3pzBAknbZEK",
  "key17": "4Yj4ajeABuH9Rthim59Lz5bgww2xENsGYiHuF5QAU4Mvbw2CQ2rsEKFd728FEbPwY462U61jPJi3XYLkpbdtNd4F",
  "key18": "2GSAvZs84bnYHYxNQd7FEzDbqchxEqt9ohFVfB9zYXBoyJQQ3JGRxemuTvnEnqaHXHeGg3Pogcqtya7NXrr4huNA",
  "key19": "2i4htDu1xG2bmTVioQbu9yfesBVGrLcVEP6yoPBu86yM2hgYWZLW8bKpb6J152XWZytVp3JXRSYSGUT5GUXE6zQn",
  "key20": "3eAp62jB1p3V5bdxhLYB2Swz6iAu6R2id9sK5beH6bYGJLdUEysp4VFixMK4ptqeNZyhpmWUgKz1afnePEfkeNqJ",
  "key21": "37h428SqWwixWvvrvD1pM1b4zzvzURHoszcSZCrZ4EDDWxjcbogikVLVkseoF4BBDTq8LH5GUTMhnWxj6WZ6gDWu",
  "key22": "5rF5MCfg3SXCctkm59VRUb7Yr9yiGJJ8GfHKwM4hrHZ6ue7enWsYpeQzqc1gh2H6vzbWjDbzDmxN67JZbRjL7s6n",
  "key23": "2AGnLkURDYNLj4zJer7wCYFTmNZcsGtPNVXVNdMwtyoqBumdn3yrtkwLvauYUy8h6G2a5rtGWoHoxAu896RmFXYu",
  "key24": "4ASEAauWs4vmiBqEWNtuWEFhXgtuhid9Ue4p7zYEbuxqAcHR4NR59KmSqevUwvRXW5sjW55EpFwMBME1i9b7qnWo",
  "key25": "3i32tiQ6cadTpoJMFXEupiKMkViWaBsqKkg5M4kuWc44AeDKaJGqWNTjp2AM9iTZEG6fNnoamTJkMghwcRFxXRrs",
  "key26": "3CxP19DFposWBFzf6aHujTj71YBVA6XNoAERpBv8xeZp58ifY6hAEPATRCVX3Ks9yFqJQ9BaZYrsTq3PQwNeUtox",
  "key27": "7mbdTQAfYvCgXWTvxs7XeEk8KaThbsMHU8rLF3G1ajXNERhwAoNzAEuaHD5AC1KrGTFwGVg68YvmAYDWvM1Xje9",
  "key28": "4u9U8QU4aRB67pmP4MKNFsCnfQ2BgJ5WPHCG1cpHsFnCM1vJQQbdUW3EjRA4QLxBPBjgX34dbo7N74A4Dib1y1Ey",
  "key29": "2SAMHrJMxCwmESpiMcVHfckKq5eLNANF3HkPsq7Z43aKuMQSqxRgUHkk41dpNGAxoHTHt8wi5s1DYcsaS4ttjkb8",
  "key30": "4x4CiYwvjCowm4Qb3RcjR1kWQv2Vwtxv2QuDZUpnStX3DSdbH7wJ2wzFLrj4rCckYjGwYSZDZ3NEAzwyA2QERx6Z",
  "key31": "pYxYgqRPzt4gprZAzDjrmMj9dSUkLHnJNqhnhKoN6RSqHXVzV7KDF7FDzuDUmVkxC62dpPq6MCXSvGcF6TZKjrL",
  "key32": "4r6rPSXRKuwMtcAJt88gZaFLixGa6o8XUEMZBPoVNzQufi9wJuqyGVsZh8e64PjPENNHmoq4J6eyxeLbTuj7SSqH",
  "key33": "SyEgzgC77GuojD4JNpP77Gkv8BbwsA4TeuMKoD3y42rH7hRMNXzHvTLqmxN65t7gCvF1Rh6Pgq2SjNwJAX6aC6a",
  "key34": "3tuKuz8s5iPGy9nFemVnsfrthmFNTmbX3RSr47QPchdfvqjvEsr7PcYsvXi2GF4zYR8tJTwr1RrBrSx9dQ72ZP6B",
  "key35": "3PjkDs31u1YoNzqVqNWpkRDbib8xKQhas2WsPV4HG2PnP9gqcXfKAFz66NKbC9myqzcDV6h6hs66tdgFf5eJXG6B"
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
