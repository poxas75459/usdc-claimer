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
    "3etbbcJaP4HhHesBtAdJx6FW6DvFyxuYQHMu4mJB5Fvwaq56Qe6NQB6nv9k9A4uMCVCqY8znXxdZCd5W6F3F4rPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUr9VqUGst5SKkTG9jie1j6J7fPmKBMtMHaJGcvWdDxhjTDHaadwPsVuVn5xJafUxGGU5VRBoZCchkmQ5Hvv1V6",
  "key1": "4C42V7hAxfQwKfaGn5VpeXJDfSvj6p8ykBjjNpzCG6uuGznHcDahbnF4wJeTX2iGCM4vaGGM2bfvWZHLFwySRyEe",
  "key2": "5spv2sLY6e3t9TbZz5xMdYxyPGKaaefQjhRWnk15behJNNbD9wb8WfqnUDMBxiQfq2fF13exbN2GiAnJqZ3XbUwU",
  "key3": "3kzcKjujjkjUi7wx3fECBoj3EM12K2B1KtSaF7P4egDXgpMq3zKfdYUGnLhb1JAve96bzs9h9o5hUmGECHun611c",
  "key4": "sv8uJnCVPZHpx1KAM8pP7gLu9t9MJUGV1vY6d2kYzx8ZiPsn3Vvez36W7vmetyn6o6oTnsYmTA4yPMovyoeZ29k",
  "key5": "qwyU1rsEMJUxd5XufvKcNorUDSJzQdumDtyLgj4zZFak1kjc3L4TfTnFqFjMQbyLvzVQCc4bo43sXQ7jFSfha9X",
  "key6": "3y58BMhchHWpwvnAWVDHXrYTxNUaarNadt9oT2y3P8B9bT1yMwrrHqrWY9ygCBCungUeKMuguY8JBZryPjMj9awp",
  "key7": "pMWDhGPk6yPYKJ36fqR28fT2vaDJTiA8Xd9FYNgsLjnx8iuTkziqZ5JxV6t4WfHCDz2FzJqAh8kQgbcw8c8oMY9",
  "key8": "UJtWf9cki1xEzUHHT7e6qXvMQU7x7ZKyxcoi9RUF5VnTJuF1BduK1GXtdwuVBoyBAWxCRpdGjzbGeRCG6Z15D3m",
  "key9": "5zru262129MejCuSEvUUn258A8YSnv3XVrsQHhR5MFHdtJrdj9r2MtFfqFyfQSC6G2hKHZXqazVVLND58fdQK4sH",
  "key10": "5Kzs1ZmSfz88qCGZGb9KoxqWLxUsZsJbjnbWxQ6ZhPrBTE4shcUeSLZv4BFPMSJ13VXNpWPsc6bp7oF4CmD6rn8D",
  "key11": "xx1TMK3nAYw3u5BAbxW8HFxh4mFT3Mre9nEnG4AbRXyafB5xEVYUdeePj2LXGWN3SiBwn2vV5jFp81ZEyPWVeFz",
  "key12": "4eWMkjo8KTW4xmXBQLoAP8NDE4WcmQPQB7nUHFrqQdsqqsR98xCv4XRTJ9ancfdcK8KAdrb3ktfdhEhY9hwcmway",
  "key13": "JnLX48M57SpTTgwFfoshtgtw9i2w4rJc3XqZkKRySMgcEUeWHm7AxBAJ8UBCScwVuQw33hsZ93f6XLW3s2fUjBn",
  "key14": "3dsQcGsxEn3nSDdxqJNg9DwwHoxorjHFMFS4wNNJg5B3DEBEmQdKr5B4uDjJ3geqzhHgmGxbHKPFX1MUhiAPSbXk",
  "key15": "3NTUQWgBar1FtcQxu9X6aF1U6PA7SbktTyHrt1RBpN6zaLYX6eQ3YHB1qcBCA1MpQvyodeZqCPTHLEgfhMjNyLek",
  "key16": "2LyYpF7q3wxNuFPnUz8w4GkPoUNViZBna1NapYuRv3iDvFodLHiJUFtBky33pSdi2uFHwe9mNVgXFtJ4n8vA9FEG",
  "key17": "3XUe6JtcaWBkhHpu6m5AN4BR1cbvedFpWFbp2kCnHySaPbMEUSUbF8iURpyV76WvJNWUCbZYS3jcbyQgPuK4KcWY",
  "key18": "3ChQd2eqU1EN1P3bbQRgeUCD43rDkbUfKZVuWG3EL1ey1H56wTFbWyK6Dc8LjVzxbK2YrrTNow9nUBpGFbmgyURw",
  "key19": "2cjcVMfHiJBN5YHinbdyXNJzib37MP1PmNwYgN2ZfsRTfXd1gZmayfJ878yNxTFmGKYi1fPP91Qac5TKZVgQyhh7",
  "key20": "9SNGMsG2ooYfmavmSsvZXFGtXwLLpJVbg6gqKQbwHBrDMc5eBMS75fkNFZPVYAgx9iPw2eeKkpLMP6yQnsKfavX",
  "key21": "4tYQ9xEjyuf48zgECJchtbtDQ2xLP5okqAN1pHmPsiJkWEFVaqsoPpgw43Nps59dsrdw5AZ1SQ7uYd2qnEmG6sho",
  "key22": "5rsGAcLtBwQhoseDy1cVw8f2TxGaK8bziNcBG5jud6LQ6xB4EEaJZkm35pwkDEx5gepsxHEQqDt954E7uYkhhrLe",
  "key23": "2kMCuvCqse8eAMBsFBnYgYW2vLSDvyHugbEmc8Sf1hjxG3Y4nWo9VSKHzAZ1AWZMJETaAnmZrXK6nG2At1C3joE1",
  "key24": "2jMrCfnnSSaKUmZU4RRWyg7mYFSksns2a785aH3m1oBTvhZSL31CptsdDcTXYsswV4aaPuhuQmhe8hW4mt21L4of",
  "key25": "5wukG1WkAjZcAKqeS76vgNJQaQzxteCB5xQgD4ZycHaAidRFkrTSGht6d22RWwkk6PJtQAYSxKNqDSc1Pi2TNQhD",
  "key26": "NhfqvGdJkTBEyFnoEr4Yw2X51yx4A2BHc9kpeLJQ7NskfqYpVpECcDyzBHhBMqkWCHLeTXZEdcGZN8VR9cRPHQX",
  "key27": "3ZLyYBQMfH4JVCFHJ9RFLuw9QpM1qcYM55PL7apQqfdHCvCqxDws8AwULL88nC9k67E88zpRst3DMPA3wGt1ZseT",
  "key28": "3MamEtPhAim9viw88SJn4XQfNKpoPx5CJRMbNCYqqAUGekEJc6VhVBQJ6xQRgHwQqMLFnzvhF7kw8t9J2k1rYAu7",
  "key29": "3GxJZMV5T9dsA1DwP3XMS1kaUW3AoKddSxgiKH8aDmyGu5v4JpfuLX44Uh6D5nk3oQpmcUYBCSFhgFDgKEwVDF1g",
  "key30": "4NSubMGD2gQDNfw5bSZSbR4rafYiY2w6qJFwCo5p5QEHVQVg5buBipxFoJy3jGZkAqNPZgtQuvUYpPM63Tsfe7W1",
  "key31": "qHMbABQd59MBJ5MqwB8XT2k1s52hp3f6um7HuMFPTxMzA2U73iSvgLcirNB6ciq4DZBtgE6SSDowi67G7KgyiAk"
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
