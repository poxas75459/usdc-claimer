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
    "waoEo6STyzr6oReenXgcn4tF1gNoPoKc2AsR47E3sh8tLtC3uJuPK4A7zeNeS46CdYMg6QmGYTwpoe1mSgrwDHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFr3CaqMoa1Pmfyes1C2bYxuHavEhidtjrBHSnYfbaCz6ZsDfU4iCWbsm8cYHzcpCTDybMwdYMRuzdhf1Q5ud2U",
  "key1": "5Q2FGRpDEE9XRqussnbFGkd9BfLjXmp1ygtopQs1DA8TcoKzkvHgS1UWa2zCG5oZyQzBPrQP2oM38V2hBoPK7Wrd",
  "key2": "5YZUZK8zSx3eMe2tBVZcE25H336VccjZmniA8NXrrdr2eMc5gD7voJrppQ1q1BAK35xbi4q5bcvpkZUZEgjvsJtz",
  "key3": "4ejfeALsj7HDaC9AA9pRdtFp1UTymacp7TBeH8eVB3R5qiMxejte5i5Vpxkht4E1PtnBN948RZ5J8ZGADdfyyz3b",
  "key4": "3rZGd5JEL5T4VuCxEhTkxsj9rw9wxxYyhxCXPz6ibXTuMZWK6FHAhPuSTjxesHXpi6aLXB1PnnnPHE4MYcnnUyyG",
  "key5": "tosFWaBSYimkgB3bXQV2QYaCSFQRTeCkV8T6r9LXmNsDMj95AZ1YwgtvavoZtePhDXaZGcM2Y8tZZ2UcA3FVvPm",
  "key6": "XZMmavBz2GLj81uHC7QwQP87fAaGZNYDsdbYzcg7GTsZireVSDmfVwRAfa4eb4h4PX8rnqGNfWS3Updn3cSnYJR",
  "key7": "2oyBxMAj2j8PWyRV8D3Afr8D17AXZmm2JyNmtV3VageQx43ChbD8qGEor2wSr2MnrxECdrg92ZMtNBcqp7UnG4e7",
  "key8": "3WAbG3FwgHKQTCcGPhoePLJw76dghF7pEMawSm4fTWvjH5fZAKxixWhhGtqqZc8CEErMtADignr51Ng62CcC2Ahy",
  "key9": "2HqNfn7LpHe7f11kvyn22ztGod9TXQgmfnZmTcVAEpEtjeTpxE216zHhNjAmTFBC9RDTJTaWmvBFFG8oi6KNzR4c",
  "key10": "3aAiTB1nJVcnPyZzwFbKQJne1c5EHBNFPX9EbkNMYjkFzWmV93oVohfHMCtzd59a95z4xP1pSe3pu2uG5RTi3vbx",
  "key11": "61934MyMDZaNK24bcUG7dxsV56Eu7zJeUASb8STHCtbLQPTE4b9AWzJ1r9aT4tdAWDsGRQFU5UboVKYM5Q98HkLn",
  "key12": "2tnZTFxCG5LyPBhg3wkwHhsyB8rQtKgkBUqLVVQ3mjC8x8quKfxoPVyxDeHoXdHsJEa6P4CPJDtUVWSJnDKVTT5j",
  "key13": "5EmAQUWjYUMqvLAyCJnny6NkFjfQdgLnViJMqBLfjpzTYzHMW9EqC3exVRtjw2zrWc5f83apCxUwdRkmmeKt9F1E",
  "key14": "sxp1tVrMnEvLZRe5WiDQDgskirtLWTTcBYXPCkYj124FpfPWr5WX3jsuhsDW7XsqA18tGPU8y7RV3YYcyGyZ2hj",
  "key15": "kG6QSA7MQvpmshSTJqH4Muf7FYy4X7y6vnwkHDnKMUeaH5eSsBXLe8fJKcYWV7iTumhHYrTAb1LAgsjL5K5PwMQ",
  "key16": "kBLnyo5Aq6g22YLrksHy7ENc2t1cPHTF2J2xsbnttybM1Kq6Z9GQ2j6Cfn8ykCwymRH1j5iaK2wjkUfEcQEbTD7",
  "key17": "3Z7sQevefkktTGXxReaxRzHqgVd7FcMbhX79sY1S19GazH1GUUW5fTgcdjQFW7j42azto546K1FSr3urHrTaDF9a",
  "key18": "5gT7kG8vu4mmGnZYpLnS7n49U2QMUhVAE6yxreVLLMU2J5nQMG4UxwDBoH82kdWuqDbdtVbjTnxjeh8FHdbkhsoU",
  "key19": "2XoUrDeKqD8rvE4bsPhoTEx8YMA3YzK2A3sjXkUDYjMdfaugoRfRYyfraD7NP46iZEE8CtGHWWQUQPvgpT2c9GE8",
  "key20": "5mNwmSrCjuACg1Yyb7ykMeqCGFGV4uy8d4N3TqkoQPo2ETPjNiZb5yu6ytRvbCe6Z2b6su5zwWJd2kDMXuGeKNjn",
  "key21": "sj4mt7DqDy4JwZg2aRmfz7iQNjXpwamakytoF3yKDEZ2nfUpy6qjbRfSxkmYeWNb1HXgzQ14UBYx3tdkkDxuFa4",
  "key22": "4ZGkx8FrKaMyrZjSbqaAx9T2dJRP3yREDJVZVjkg8foDE3aThQpwK7bxeENx6hes9p2NxUhwFwgy4XoZseMPThF3",
  "key23": "2AKbh5tESTKmzxeJPmLkmXkDbGeK1JRKe9w97gxezXQ3n6RebVTw2c62dSakm5XoGLkNYkBKYnsRe9aE9cpTQ54W",
  "key24": "5ecYPQ4rcLAwBEndtmN85eF83x6rFWXEWfTKHRCTZrrbkp6vyeEDw3xQykN2iDJMM6B9QGuQJ2hUFXZumHQhk9P6",
  "key25": "edNg4KeRMV4pYatQZjRwiDwXFZZzd9dL86tsA4yzy1Y8chxU9NHPfc5vtM9jG9kjhSZFXCNBYQmMG1TsRsP6TxR",
  "key26": "61PDFxTQoum3vZD65H6H2f17sHV59MqvQJeeqQhWhAade8r9GtEcKD93qLkKmvud8SAn5yMc8xpWke712hP6Bkug",
  "key27": "64U7jjC2qCfMNBxuFyoP8KaTFUiEscgCRjxhYSCKjKuAAg1EqbFN988KQK1qzowzUfpMNXFEjmGPPam7bShdBcoW",
  "key28": "yZRS4mbFB6TNC3ypuvEuCkpud1mvzACrqnGkQjyYfcN3zjkMA7e6iKyH4tswrtPa8U3CLm5owmJnLef8J9pv1cd"
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
