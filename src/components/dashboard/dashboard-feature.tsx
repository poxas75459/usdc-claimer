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
    "2m2DYcG1k4TCrwne3sDapmhvsZ1pP2aJu3R5FJcVhL9ochhvduaeaDCK2ptuRLL1mUdjaNnhfZ8XVvA1ehr3LEuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NJNHfto4a8WVm5iva3XEFHimwCaftk9xZirXhPo8fSMuVhjLbgVaCqPs54NZphF7uUXBKFWRAzJKSMTHWJFC1n",
  "key1": "4CE9Yxbdkc9xrytEgCzXh7qnMjyA2sFoKs7HY5Crn4NLm5DjQYCFx8cbFsfTxhUM5Dzfkp7CNwA8pKKQTcXKTMgH",
  "key2": "4bCP9zdE6j7Yefeny2tRj8Dm2PJpRXDCHnj3LVYUPMbYMfaEuiPrHfzufrNH5oScWJePBb8c4Ks1FP2WtxGJcA8U",
  "key3": "5DCYWrzgoycbcV5vEmJtD4Cw2xdb14nV4WScs96u2GEojdAX48DJ47xZKW7MSKMi4xgYWFEosQquebYEtoEWM3io",
  "key4": "42qNiV7HGfpWFq2er7zxXoCVphYdKREVCy8m31PYZhaCRShdXocJXigYKmpU3bTrGEXaTxaJJrU5FL3nXqvVtfYh",
  "key5": "3y6osTDZp9tBEr6VCwQ2pF8mbrH38iaFMUVQS4zZjAqfufCBH5YJRa9tS6NfEyTN7eCT8inXDr4brj8wpv7jwtrB",
  "key6": "hmMULrUs8maNUp26RcN1a2jqnkj94eSSg5gf2gpXMosQQ5uqethxy15ZgMBMMBB1g8NZj9ctovXaqXFEsBM1ovo",
  "key7": "uNSwgKr9VU4RwYoN2EhP6pERsAXrtTTx5xMWN3hV8sbYYb2GYJvLuN72kpknGc9yH25e6oGEA9KgzPdhkjsGbqP",
  "key8": "3a4coBvtWhTCDwxYsQA6EdutSgdT1iZQ326a99exayVa9EzEfvYUiSAEQxisYCsH63K9vUrhHWUcV9EmXwtoTCaA",
  "key9": "5FBNyC8xgJvqtdMMeZYXUz4xMm13YHgyUiQs3y6QBHQocUF9CjMDNyXwQgKQeHsVcn59TggBWuyYUF9Suc9n4jMv",
  "key10": "suR43RuLJLgUAnYK1SbAmDQ389bonygGH1ABYWH8asYSQu3BRXD325516SDYuKJQmhx5isdV1q1ZDvJ7Wnt2aVJ",
  "key11": "46cbovpfEJHieCjMJpCmMxFGShvaYPr5sgGkoy93athyxwnz47hkcisVtAuVHFVAViqntk6oVSi7SWCWiSPwF3Ti",
  "key12": "2zBu87otmaGzV3YP5EivWMerQEa9RnuuZ62ow1iipZdcEJfHtKpFQdfKV84kG8mkt5H7zs2J9Ff9mny7SvrpQv95",
  "key13": "2i22Qz1JW42Mdso7Ed8gf1MZcrrQdQBqcG3YgKQXmgMKBYhVvoUN4t4tLmD6FTdpn89oFxZPMxJSo3Y8himmZxZR",
  "key14": "5RGrahvCKox1B828jTNtzyUpcyvpsAGHA2aDCDbkAgteeBmATADmFFUus9wtWqfeXt2EGN6vL91y52gkJ4LCzeyd",
  "key15": "wH1eRCs4i8PJ35gjtENPccQFNqhrHz7UziDKs9UzGv11G6e8myTgHWpLQCBeLZdrV4wYYtjCuKDNdCmNRoWnaH9",
  "key16": "32XAAB2KxmHcvKAo6g5R4RpvZ7rKjbF8zCppK1cPpEXNeAr7bCJpRH28HjaAa9rixAqPLCyxpxesqowFqvaLambK",
  "key17": "394BM25pahbjKhjHcTMiaNhMFZh7pkn2Ea8hu4MMyEtAq5Ke9CEkqt7h5Q7gZiymtFS6DsdqFUzxrpx3qWS8obEh",
  "key18": "4gPDW86up6KUFT4nXvpFNfnWQPPZJ1F3xsEQYSfZp2CLZBxzdsMu3cX8TxZAHoC9QY5TteuNTLQnW7kr782vSnmo",
  "key19": "4yoRXhLF6ixwSwKefUnyxzZyAjbmkyCsEGwjQG38pJVCVuvUjyZiVpppws7SfJ5EWmpAEZUWdWs7QWXoPvnn9JW2",
  "key20": "4cZ8NpUFTS4RXCZtHa4LzersoFaTcUqViVC4igfSjDaUsCNjKt29pzwHzWSEALAxN37hk32ikrWd1oHbiXnsdv2k",
  "key21": "Tsd5P3K6my8oHtZkGgB4zb9C7RjNvudKZjqvQntu42jHfqJ4wueTiCwxE4sJdswMUMEc7i9PCtbwmZbXakauK2H",
  "key22": "cKjckacjZujT1w1F9qxjBp9Hbvnbkmadc1QKPPDHcfY1fy3szEWZvUEfkYtyrJNmKUEVJ9fH69EvG4YpEvn89wo",
  "key23": "2S2oQeSUW7smyaznXkYvFjK3LgvrTac2WeKo6vpkMvhCMPdwA8zVLBzt8Xe7CWU5dmF9M58NKFNWqeRfJsEiUR45",
  "key24": "27Kvx91AqkBxeBTJziKGecfTJDYQ2P6sNd5TbPumxcbc4uP6HkjSwXd79eLrU4mpUMo8Ca2B7oBZRab5gMeUy6H8",
  "key25": "4Q5orXJidsxqdx34vtLQnBSM86CNe1Sj3pDpKid9kw4Bq6Uw2CwjBj81pdXAFy5p7RMGzL4k6PgzJ5Dv2rEPdDCJ",
  "key26": "5f8Zr3UMRUk59PaV6otm9hTwC9MGzG25tmNpito7UNHSLXYomVuPTgpxHtRZeqBR93P9jGpAsqZ6TN2zjEqe4dnH",
  "key27": "22z9Na59VXh2CJt9UZmNfRmqJ4m9nJUzpTeLyEe2NU365KYu6xyBJPkRkDJ1Z4JxntecNhCn4TsXazDeJKnTZGRH",
  "key28": "2JfXC5WHBFFC8jKjE1DMBnJZvuaZZv1iNZ3sHrykw7gAgvmm68dQriD2X17pNJ3J88Uw5azX5pM58U6GAdSUBnMN",
  "key29": "aVc9s1S9nR86Spk582ENLhGru7qGAoLjYMXq4af49qxUvUY5ionrYxm4xNvdufrKk4tQ68ffucgBGXvUcrquyVK",
  "key30": "2uJtvDjgYq1R6e1knZbAe4HLzpAXr9hnNCMePWNphPXYRa1n7cMFFvoiavyXgKQxAFM5ERJcLrXYgYGYhEAjwEu4",
  "key31": "26JGFxGm7Q4u2baDC4wFJgEoNy2fxsMkf4b4V7MwpeupELi88axF9jQpLynJscR9WTSymsiK938dfad8BPfggZuy",
  "key32": "5cpxC7t98221vtQF3vkLkyu3ezZP2VonNCgg8ur42zfQ9Lrvv3ecfkWxAnnMTmvVvSuJXNYjMJD8VKFgHs4qvUr9",
  "key33": "5Um53X3nsivMz4gMZhKgv4mnVCgg2KkgRM5Tqk4yuUwK9NdScJkNsHb52aveqTi6PTKVXas5LNN5PcfRZeGy3gKJ",
  "key34": "4a6GJBcYGZ8UPxAPR7ij1VySY5ABgQFYLf3Pb6nWFnDdrKG7DXzPo4XCBoJa9W51zhviHfZ2iAAUxaVZPwssoXWr",
  "key35": "aFEHZJK7gFEAEpY6NnzZ4KX5nXBqJ7yBHVR414ZCW9hF981LFLb9qirrcsjf7xdqTsjzQaj627ECLdtxgaAa8iX",
  "key36": "2aWigBmmU7e9Y3TQWvvYYeAMFudjtz6S7uNDrR2MLU2CRZCxNSfK7vkf25JoJevxCr8mm6RKr9DaarFhtxGyrYBu"
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
