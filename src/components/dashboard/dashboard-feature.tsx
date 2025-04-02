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
    "5okhJprSzcAWAHZB8CDUAQufZorgeMbP74t7UBcAZP6UwMSYEfpVwVyPaF1EWV3GhTZWyN4J78Vu4VLgpwcCvAng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F9sdB9F6kkh35Cno3SVcETajKkW24CRNTVKD2rgB5DdyL7RUxtgstweQCAhQjpRSF6Z1QwmCThPjuMWD7cuop4T",
  "key1": "dcppm45Fuio4RHcXukCbmdE8UAGdKgbcX5pfBpvYEE2zEAfiqszuMVwigtDQD1ECVAQosRoVuvDSfdMPG1uHWBv",
  "key2": "2rNsKqb4Wqx4eE5RS6PnMkBUN8fxJGw5zFNat79U6cBcPymyMzZ12hey5pf1F671NZGRHZRjghkEPrbdebyHUeru",
  "key3": "WpMEQtUMD2kzZqCQsrai8dKGXGfRoESwRVodiP27dyYJTQKaq5gg46nyT6Ya3TMi3cQWMKRvKGKJsWBD7LyCzdf",
  "key4": "4DRAYFKu8xi9smwLpD6UJ7XuJEg9H6rf8henCLMXGkonfpB7t9Gtz2UeTd8qdvuc7xSFGwyNaQrNULtJ7QRq7646",
  "key5": "WpfZokzodUPtFkEmiizF98JayM5oNfTk8R5giuPMe4KrhUi39uwbi4x8sHtVmFFvN4QqAiSSopWdCxpsuU1CRE7",
  "key6": "5f4pVj7QA4i8HbGkMGznwHL9VsQDzi2KTqYGmTgPmtczdmNnfGNXjGgKzBxjBDLmiREZPpqvSK2Dr5fjiWGXmMGa",
  "key7": "2PMVhycygVJQcXYKjNvQsXCEV452GmTUtXY5PV7xYbF5MwY51uq44MtKprDtfFykKU5YLijnJSFBnUcvX9ZKhukF",
  "key8": "2qS54cuj2TVtxfJJiuDKTCGxTV3QBqFwA7zekaRAyKng76bqPpuwgi6Y7KTEt4EpMUwVSFA4yFaTYqSuHSZxbvLv",
  "key9": "4ujA1z4qd3XjjV8M1aHF9MjvyHMFFjeESd3jWGSweERsGL2LYzd3ds1ehzRrkrzHXhCPtrdZafDeKxSizqfCb5QG",
  "key10": "435a4hsgEVEMxjqMzA8uEQAqoCqmDJv5ZHTPAjykFXPzJ2qW7W6SaaBTK6SYvivct4GSoDNYBj9DtFhBUjv7YTvU",
  "key11": "2RJdUUAPf3qgoT1q81H5iixZXTwQPVS6fQxKJ3tBGyQD6dpjvZ7VqGBrmxNj7X1m51cXByNunQcJj6aLRrTwTHmU",
  "key12": "2NbEDd37Zg11KC128GJaC8RX6rmQ8dKSr9WNUJZWZxJm7mTQmKXqsupnFZrkrgD5nXFGBdTiFLUS3UG6QyfCGdpo",
  "key13": "4FpzKiwjSBrVvctRZ1PuyzjMnaq6i7c5G6UNB2TAcuJ7grz14KWZGcdtoGhjspRwdwxw9JnNffCqNYiG5M4xEyRn",
  "key14": "4V8ScfsJHmcbi6SFMuv3usghge1kyUWSdUhDc4mqfutyJZqTJcSJS43pxswVFFi36E65sb3qsx5yBBNPcZrWJXJW",
  "key15": "3VYothAMjefBeP4n6pFHDYNACAMU8oSbU34cvgqc1ibLoyyMgsspYkBb3CJiCWGyC9knL7YzzeMsaeX5QEpJt1Wr",
  "key16": "S4wyMY5bfWJFmCXpfjusM8niYovUGW5ME6qL7bPVQnY6jH5Tnsgb4SySsisqKFBU4ivYCpgTkfBafQPDpyP3jPS",
  "key17": "5f3deLqyZNmw51BoYpN3CDWqeMyg8bCKKsNj2SX6QBmumafDFY1X8Nv45XfMLWGEESKPyo2UpbRKEFFa3uzGUvRF",
  "key18": "4AoJunorpfQJ8jW7oL1EvTAuBkPzrrztn1d4pyCyxjvEbHsd7khMsDGQSdBY3RKEAwM7LhBPHEKsWLS7AKUZpbfY",
  "key19": "3LUnQfGAWVfSJupZa7L1zohPKzr3Y6GXv4paQsneP7WVKpUBzCcoHXMYSEUEmA5y79SkTJ5hbkTPMqp29uqCfy1N",
  "key20": "324ty6MzfbgjVagLTodhhCYtWmYk5BCPXk2ofKT8htg55czN1LbrTLyHie1EqrkieDjMe9HnLNZPkKWhhc9tWPTq",
  "key21": "4mePDmx3A8Jqc5HA7y4TR8h23a4ggk8ZN7i5wV1HzmYRmyVQALBo7tJmvxDnCWNiau4zb871Rahif9mW78ZZbLDr",
  "key22": "4hcVubU822qoyDYakz99WBs5B7gq9rJu7wZL3Lhgt96ykLA5veAdJYyJdExHeCmwJyjWHCfffz7QF2vJKdbvL4cf",
  "key23": "Mu59UqeAtqBwH9nydEhCYgyeioVPjohWgeBghEE96qXr1EsJDf8PMtYSJS6MJ6F8hua9zV7CiVPDA7yvJPB7naj",
  "key24": "355MF3puyDGXxPuTzrLsy4KUH1Br1YDc8ZjgBYminzkWLTGfHMb8p312evursrCsPpekaaDL8zDAou59NMiEgok1",
  "key25": "3xfL7WgmE2ybdSb4vt4aF5xFdq5J23U5ydLPVAyTrTk5atv4GJHBif89LkJ2saXAgFNoD4Np7FCnTGW1BHDsXkQL"
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
