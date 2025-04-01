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
    "4YpBt5fDS3yXHELB2MQJTfXxwC3GjM4cXUBjYdfr7JB1qsj6922kp49hN7aM5EXBZtptkdw3VpmxWNhsdyCdjNMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "629yWQrQNg8YmafmByfwj3XFiQRGgmsAiUyzV5hrtMJcmpkqaTJLAxdeCkCg6xcvynhsAmaL1bg5vYjb3HAgRuH5",
  "key1": "2im534JVQp5sQ6GQ4WC77W2CBPb5JVMetMfLL5spc4cWivVvbqiqYGLwbB3FYj1KQNhmzn2S91EG4NmJBSSZNwD5",
  "key2": "v92oYrn9JnefCvuTp2TzSsKRJ651LDkG5hpAaVzuJgp6vWGK9SiVquR7Hsd1pjNi6xpkAQjd2EpysvoJ9jRadkN",
  "key3": "63AYXUckWDiyrB8Hz8ihNqduxsPmf6fhA753WUjERn5AHNsgGK6An5e7fBAC18189wU7ejdmgNzhgM1gTh2Epc1A",
  "key4": "3LJ4Niredjig3mGCXA7y6JQvRjCWHZU9r34mKfLAAzVt5FKXNFjaPa7aQJKY7fEZgxuZ8XwRPu3iyLQFgw6fWGr5",
  "key5": "5vvDUApfweRovQrDxSTkdLnq3BJhfgMmhXG3HoeuK8UmQzgq9ucqcnRC569xHrjfc51fkKoKqzNyYBR4vbprsSJD",
  "key6": "49E54iCYY1EKRECbx3bfACyrwyVuJMqTMdbZnoLBGidkRBcXP9Y9bfe2mCpFHE7YokNed8Yrsdwwjk3R8yTcUHia",
  "key7": "5DpdSTGUBywjr74F2gy4pQMZ9Kb4wbjRUmjSSPvPnUgnnVBL4deda6VftWx8o68828osUhRwnN9kWUsyD9SEAN7i",
  "key8": "4tN3nUZaQHFqP8hJBhA7bxkvSyCXzNhBuVT95SWrr1EqStG8MYS965zuT5Wp3ECyb5EdvbhLoHjJGVdbfvg2EzQZ",
  "key9": "uwNDaDddZc5xh18epyGhXYpny3J1CRAAjZM8w7oruKmNpxMc75aRdJUC8ArNvaZZXU3fi8VsapwFNyKsEGo4An5",
  "key10": "3t33K1ySsJRhbYvNEYPxaGVPy5zqvZG7sZKWotN7tjzoSAKbq2PGWx7tHuhSWwG6EGrQgEZHmR1uj15E8craEQvB",
  "key11": "5ADSZyyW9obLrLD5dKcmsLyk2Z6pajWpGKzV4wcevbTDTggU6uKZ1Ueeekuf2fTVmizD77ESCWMe8spJWDBgyUcW",
  "key12": "5hmLc6ipwxuThy6n3be5BY15NGj69t1oLeuWDkDWLNi4a85B7DarmxYQ9GyuChbGXbnVLkJjgQHw1TRmS3nKZh9C",
  "key13": "57GZbUPB9it4zepHiBvY1CMLwLPLCNA8B83hqqYzqKVjUzh5ujkjH9QsTtQg6XdY3DiEXKhzoQnFZuymK1UtKXr2",
  "key14": "2dfU2TebzSNru88e9uopnWdboGaz66d4uJhEB2jH55wZb2Bk8DeFeLWHdTP38rmPrTmXqXHU9wHPvVJ4Zs6D7jBY",
  "key15": "fiCrLG4FUK8GkhjAgR6HLboHrCVxE8GW2GSb5aNM7Q9JmS3mpLq3FCp3fgCo6KM82bQUuEBAsU9rSfa3RF7pAi2",
  "key16": "5AUghM6vUhxeCDVTgUHFXZ42rCU1wJF2y3Wj35CoLBDqyQtNecchuyu1zYNG7vZQcS5TFzyjyYpRhu64WP8YkhL2",
  "key17": "557Cex1FfZAKT14tnyLvnoPHoBpMp7qbFr18vyr3jXpnB1bBVc2cDiYQKdrkDnoy9yKVNzZm7SbAkjvv5A4M7qpL",
  "key18": "43QeH9wcCCmuTUm8XYCsZQtDcBZnELB8UqNPQWJqj3ZTx1owZS9TEfkvqK2S5PUqnaq47o9MQqWekw7RGc4cM23f",
  "key19": "57V7h4esasQQhPProaUrFAZ6VB8iasXyK93AGgbVJdSrvGYR8XcBPPm6vaQFJSp7kuDkqurpFFX1aq6FNGioaAmB",
  "key20": "32eaBsJw2HqMQ47JbazBRZ4tmwACb9C64meTiNwh9P1Czhwujb5kWaQDEgAXBegmLzWTGwgaAyZKq2QwevME7FFq",
  "key21": "2UG3M9nCSYVXAoiUnwd2gEuP4nKGVUF2SFc8BhLaJU4DTmQAE6Wxe8S2rM8Hou6XDhKCD8tjwh96pY29qG8pf2fi",
  "key22": "2n2aksJNQtG9arSo5hkVhDjfe6F3ecUk8iokkr1XHCZ6Go7Nm8DbSyq3J3ZR2dWin2r5B8Dv2DRSQQVt6PkiUcAz",
  "key23": "52gZ7WC2pn5hZVL2As77ZJVANDpnKkybbfkjCZKCoFqZ1n4KpZVSG4BwvmiXq7JzoDgnQAmkiTSa5VXrSg6MJyGz",
  "key24": "4CGXWRdnfkSavdTPcRTZiZid5JCdH8Qxj3s9ab3ybA3MsDZCiKfe6regckKjfA3ZrgMrthooV4aKrDGULodD4dmB"
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
