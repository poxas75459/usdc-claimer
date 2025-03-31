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
    "URL4MMHXiGWAzL4spdjACsXSBdWV99c3dUAVxbC4fkoLS6t4iJMPVYBe1KH1eZzfCAcQdzESxfMbT7yNryBCAd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxn7hRLUn6W16ZLZicD8jXXSVXhTqCC3DQ6TcfieLAE41ArHJKhCDtTH1tMAUwva9txjnYd3gmQpufVsmtiasnM",
  "key1": "673x3WiNPDLpt1FV7S8z3ekMPDWQ7VTdMLsDB6QX4PUyTfvdLVBy8gfCz9B7ZABHk9mTAnYwJi2B8puntZTGTtUb",
  "key2": "5hZEab1dpVy2QEQfaAvJyFGqgo7ntoAVBDYnWZuemNeyfzzCpSSDenLxJAPSCekB6BEJsipTFgWbcLjH1qQH76gd",
  "key3": "3AVTy42j7uoriQvB8Lhiy8toFfkzBMgnT1kYictTZdBi351Ts2bVqBAk1aGKZuveLrZ7Tb8yTuyLHTjS4Mgo6wCY",
  "key4": "54f7yqYoJMvbSSzmsxzm1H4qVXEbvWzKmjsfdMgPeFfy9pZabcaN8tt2fE9881WD2ihVPGkShb8zy6eimAsXPpsM",
  "key5": "2SCPkmcQcDcVENaebBKE3QjBdY9tHV4REZ8aNkvKcUzUiQrDLs4tPKDAi2mxzsPHM43mBRN1rS2eN92FhPWd3JCW",
  "key6": "3rEefBcCSaQHYdcsEmTTRMLLCQKryW7xM91nqPcAC9qG48Wb48f2jFJLy5CTp3uQCwNykzfy2HiNJLhhWrpGwyww",
  "key7": "4nrZ69UcTJW7vncWmuSKom46vLAqUecLfjwHmkHtEhfyjvuuYTNSANW1AHF1J1xbCTPfk5goeipGerBrKLTA8AuW",
  "key8": "569G3rWEqzcG3Xp1XhF5tYHK6NhZDTxqFLLQG8FQAEkojv6UapfMtVQUHsB3iNSFDWEiVFsEYxa3HkCqANfPaS5d",
  "key9": "3Q2m5oGCYPjCs2j2K4aEvQVTjaD88pvVrhgH8LZ94tkjh1ZwpuHV8jYZoWY9eUQXrED2oV2ZUSbfKe1XL4GP3TPr",
  "key10": "5HovigdB7yKUrfKnTkRQrTDiKMhjkNFp4sVi2T4d5GwHaaY9d7ZBfWSBr53GwwQVb1BfczX1d7yiiiy6MTRDMZEc",
  "key11": "48wvqCmtrRJZbVJmDWFNjbxyE6cSt5nDjQP6dZEtHJ71WHrYj4FtoNzRqP9g8SMzx6P1CHZ8SaKighGXF4QsHbHL",
  "key12": "4YShEfCDJN3UPgkeWrpGK1Na8L3Pqkq8aXVMrPpmHfuwvrVbGS9Vhb5o4bETT3xYn9aCJ7wrtmHmYpT3gbzTzfGq",
  "key13": "qD7TsdWTwLGqnbzFT7KwSGbDkQC9uxn1e829snoU5f91aTDpJ6Udpwfdxy7CtdoDjHYXQx59W5RfozgYg567Soy",
  "key14": "4tqHWo1HhQ794F5Nkm9qwZBnQSfkjZR1uaaiBka5pgqRu9jJMeBvQ1VQAzp24dcVXBKjSq2juKfMDx2BcKt6UomD",
  "key15": "2XwYzFqv9rUMczqMELk99aSjPm1EcQgE6Rz7rY3iUmCQAnHNbhCjGfMhX9JQ1A7sujLDcX5LJjvAmfcQEXrCkSjz",
  "key16": "2HUC3DkEC9YhZRLrkhsUCSB6SaCnA8bq9xmkVq21br4uxbkbTv7JLtV5awPkUC8y7PMmGLtv9f3DpVoJc3Lv3wd1",
  "key17": "5sXiC2XEFhaNUwqGrdT4DmE4uWP7x3ASXzVE649zjPbDqCjZzNVGJ5DcQeXePDqyhzwnYni8jCM57mSveP6cZDj3",
  "key18": "5M9YyhZ5zCom4xMHoDkPEVVPAY2UmUC5A6xjy8TN7FGVLV9xLaoLMsTzPfqRFPrbscnDaoPR7zGvs6xnKLuL7Wgt",
  "key19": "3ch5gkHVcfqBCaMFq27r48Y4zumiU38DYjPrwMHeTAmtw572oiWij13iYwqXX5NUaGjMaQ2ZDhBGfUu2RztMsemC",
  "key20": "5R1HbWMprTRBDFN3uJgddRyokTybFWJqDFqSQCzmgNcoeVW6UbngMEidr4rsAotX6SCEG9SA178BdQorSSccqiBg",
  "key21": "2kTWmmsMLTbMQgovX35jzkvSmWiDys9bT2Jz1R13jsd7YGZ6HvEpbrkEcKwSpUpfRdPtyGqENYZVveQpv2qgMsLG",
  "key22": "5Ru5ynDk7no2xfnykSsJgaEYedJYi2dVzJsXjX9byrMu2CnLaZxQr4PguGNuYeC3SJ2BKqWL5R3u7ESZiPBL5MCW",
  "key23": "2CK5iKA5a4XaeGJKXQVCbr5DQnbnWRoFuu2XLskWcDRyUXRhqjgVwzi6P3E6osbC27Z3cL46BWGVxYXo1sX2ifDR",
  "key24": "YUKmUnUndcw8bcEZvqdTCsMq3Tbj2zUFHxTQfcvREa62BAUEz6BYZjeS1J3tLrZ96cPKNpnFXDaCFB5VsnwPdCv",
  "key25": "5h9misqrVZF26jX6Zy8kVgzrS9iRJCX6XqDZAxqdq1WjnawV7jdQaex5XtFeP7PSU49FWDQ8nHJCtY72nfUgdh9a",
  "key26": "4Gt85WoHHKorJz4maQ7f8TLBWh6SPytocfeuGucmfvRMSNvZNN1EwTjHbMjqtL7i2UyCriXjrx6FmSerj5m8cHRA",
  "key27": "62EHQbcyitphFHBFuDbTLxNrGLuReTuRBjZfbA9q62vXHidyXgpvgx4J79aC2vkQYmySdepaaczoEHryrtLb1Vi9",
  "key28": "5XedJ9FuvYWBPbgbsf9nUzVPxVVcUsYKFswjmHghggDG6Ntw6Qjke9YuVf9qfrBMbdUS3wRNijrZUj5fA6nMb9v3",
  "key29": "43sNySEc13Ro7HTJow18aKdPMoRvKWQMksazm1cfXBVbZbdv8fMsQd1F85kSJsXf3yYjyQedkDURFPrDVKeBzk3w",
  "key30": "CQxvpAMaAYNuiRMBVLSAYuanMXVu53NhEZYoece3kBA29LHXcrVqh6gMR9H8mSbXrYQqPNbd9jt4gS4sAajfs27"
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
