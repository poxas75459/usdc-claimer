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
    "UHyrK6rKegcFJiY9KmLmTf7kaPeeLBvcfNor3iVpWovoS1g2JqVFvfVNvhwPsQauNp3FTt6KSDvRSeWwTKQ9xbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g71kQVwQAHbTa96posRzD3bJWnsdZcPWwGQYaZkxt45MiPfZBoJAH5phyCL1w8xmYDRvY2PyPUcu6YvYxMGuWqr",
  "key1": "58yrvjGCN9Qo8gKVKXTgegHevy8cLQU4b7jPAGm5aXEnhZQt1SsQs47uWPdv99WmzPWCbuWPfo5EbLd6j5dfmK5K",
  "key2": "4H8p4WEdssngysTNyjuqmxajjHSc13EpDukU3mtvBknUe18QG5uvur9maf9FBxuQoc1BFVpsYNZ7Ut3JEt8PBpxn",
  "key3": "57VsA2Hz21MRsHj2DZDFBVfHz6cbivQEmBHqq1nehZdRKCR81UNrNWkJGc59VssQECPSzH6eoGmbFrK6aaB3fCX",
  "key4": "3JobGbV2iXz5J7QQkmQapTw8mc5EDvv3jULhbNceH9oEiX5e8u9qZkZsQKR3UmmCsogfA6KtLnCwBzueC9BGuRwy",
  "key5": "2CTiYo4EDCfjuRUY2aCJyJQgnHpLFA7HrVEMHKY48D7EE8upBay6QKN9YKZYGKh6utwuMefyp4VSdT7PwYHeQbWs",
  "key6": "5VtTgUyRWx9AZqgUyJagvvdsv12ThHTCQft6sjFdRTdTP4T5Sep14r8RmKgR5L2cVixcy6feFoWJtUWL7fHB1UNB",
  "key7": "2KHhxfLpLBKt5kciHxwVc1NHohfzfsp7jbAvRd2bonRKVaqQb5aC8FvRsRyKDGHGoDYwTjMtnsqDcw3LqSnT7jhs",
  "key8": "x4rdoSFJxp9cwmU9tS98D6pDtrwxKmY9UAt5ZpjeXjxPUPzJTaFiAkQoMujL8qqXMVPuBNSJFgzz4R8zuuU6Hhe",
  "key9": "3RAWTnJ7MknggBBPqssZyrmpDmHhGYy6ArZzppqeUwe4cAZWNjeu6FLXHusYGPrtpqqeN5YmVVyN9C9GELpLGjR5",
  "key10": "4RoBSWoJ3DiA1kuXHdFUfE6rtghpjiSDPWVr5yW16tsgpCSw26QBwiBcMkhPq6sEHBRSN8wL9Acrmg1ExcykHLa2",
  "key11": "5caosdegcrFtsK7L2WLu9UxvRA8xahH1vScv3owjaGKMu1oUnpUm1ah9EuitTnXjysvCMYcz968CKj9acZxkvC5x",
  "key12": "dSaraQevbdpMLdbzzTzXKh8biNtf4Q4Ca3zoPAZEGbTH7Rur5AcATPxPSV5yWpquvcBigXMKeenWh5zg2eT333j",
  "key13": "524oPD4zf5CKJh5ofxhqNgGNheT77nVJ12nsmVsDkZdLRKS37nWMkheePZCWL5NQNdF5ENFk5sPnHSkmiM9WCE1q",
  "key14": "rcjUZwyoPPeudZA96mvTfxqFJGvzLV823kLR1xWCtspxUNjpotbPnJJFt4ZcZSd7XGybBLrHTF8Aj76X5F8NkGU",
  "key15": "5MaJ2ewwo3ezmRLNBqYoNyA4KGkaj7yk7fefCW95tRYTEjvxiZQsdWxmw4EEcrsM2AWsq4QvdiNnKE3Cv37wXwkH",
  "key16": "3nUDk2ZBuDb9Ai4Q1SDxwDFRx8eHgWLYrUxAaikZjDbVgEnhg4b8mVR3XLHgDjcvFiWtAVi7vf7dmbV94A9KTz88",
  "key17": "MHqEbdf5QJmbQnPVn3vxG3BFP7ngraBB7X5KME5GvFEhSCcNaDzrtAybPHEqVqUeSshqRwia4LaETGiPzAWrXVG",
  "key18": "57hVgU1HwZR76tMiUdoBSBKeAXwfJ3xaWYzDiYLAFk1BpmPbJitN5t6nvRt9WxXkPhEx72uLzzAHjesESHYU5PrV",
  "key19": "4qRfuaWsGPbMckJTnCQZKEuAh7Y5HTrHW674LvwAyryGGNWdMZD8RH96ZgYwmEoexUErz57yNVtmTo51EBybj7ZE",
  "key20": "2YpDde9EBmNdk7vXoa1zNsr7oDVfAJQ5FeD9raUyJjBFugEUZAQyKDxauUaPTES64RPytptVGL1tAaYuxpE4m9Mq",
  "key21": "2vASPEFXqCU97MZgLfT8yvbhp1cVN38q1xXkxuErYoEMK5ZkcLYptCfaUbwyXZaRpQgLUr3xCzkH5NfyqJf8R2p5",
  "key22": "53d2a7FQr86oiLXAyJJ6C12hxiDeZpMWDEufHsipNRijg8Uprs9f5rC9TGnH7QQydMfaZsciVoL14Wu3u2wY1ct8",
  "key23": "5CHnxrW1B28C1xjC8UEfm8Zc2SNcWx2WCak4woJUTwgas1yFfvxJQ1ZQRtkeD9yXXLwJoXdj9EGduNutJTEmcNeF",
  "key24": "3hyrLTvSbw7kA94vnKdguv17yWMW1TZPXHnwsP4VyoVCWhMK1VBxxgfGYNbXYh1He3wmUoRUpfW3uBmM2y42iWtG",
  "key25": "uhJELVv6sLw6e5KFT111p55jrFp4BbiJ6hCnSK2BqfNcSKzSVVZmKZ1jVP1yvvmhmPr4N2JXRCx32nFL2FTS2cF",
  "key26": "36hD7zsQ6dXshPayNhJAuMFtnoyi7ouFe7jp7tNFuBkTPVQnge2r3EXVnfdmyjvRjBAiqmaMDPMBBMFiZS4HegHs",
  "key27": "23nmNLpjwNffvHFHXfPZ9RBHqoi9xqQH3PAdt7qm8S8YeNqpPju6CYrKwgjAzX2EnndsBaF4DqsipbPtbpP8m7V1",
  "key28": "5X3dSU8xuHhZSB4q3itedd8sDMQq5uFreEF4bcJK1kBDSM1wT3DwYwW4kAzZZK8PhiWyCDPQakNT4Yd1vUi6qBzx",
  "key29": "3bDedFtSKcnTr298jYL59uK5M2cSG6XZB4vN9R9a9d6qQkt5ZjNv7Y8YJpU2MZasciAGAin5jcWFtDefdi3r9WFy",
  "key30": "3TyHJnrz8dzBEGtykVhmnyB4iVBs2WXhaKrFjJYqBvjFTtVFPMqQqMKj9aVnskCVf2PBjQ5maoFDLzqMp8ut8fpu",
  "key31": "2c4kMe3BiR9uJ4yJW4vReWrkvCd5v3qYjaAAdsAPVAGQ3ubugjopsaipR8Ztiqn28ZGntnxeBtpmbRnK2inV3Z3S"
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
