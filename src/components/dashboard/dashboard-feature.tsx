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
    "2k695vAKfqWRY91ZmVJHYS5cJjmcLmW2ncNRgxNJjJqw57b6AYbuSeJeSHmcaGVTqq22W8o1NvQd3tMD4qxmmX4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDdU5DF2kAahhvQafwRvKvfWfRnNCuqH4DW5VfMSbt8AdrgQMW63djuCWHKgUagMEJVwzyAeamv9MVhfCnuXPHr",
  "key1": "3V2pPXsdXiyeW8tNvfuDCoyF8j4MaqVszdGEqCvk8pcQgT2jfpXeLCN8zJeRDPhrT4gW6sacJf9RDLR1vYN1hynm",
  "key2": "5roQW6orPRUJ1YrJfpKUzHijCtAZUwJxM2RP9HQ778PMbnGzsRSNmA3MbXL2LZtYDNhmqvgyvuh7Hdpi4WG7R3mV",
  "key3": "4L9XNPHfkSGmP51J6Ho7PKX1yXPVgJL2YDN4sUg7vWuZXgRwjKje3VskSFoUihuUQ2WQNK2WrZT6H4jD2zt835eW",
  "key4": "3kuGXwswLoK8NPMiNxa5R64CSqx2c11BEfBr8eARCthAQeFnZfXnLBniGuLS6UUnJAC8MPUrsBZEmfLCxdBiworm",
  "key5": "3PhAYfn5H2QNF4QkagGNCU3M35ziNiDCDFUtDbLVoBy6ZDpe2enfPbJihuET4W8UwvkuXr98dJJtZHif9p2o46J1",
  "key6": "3jzPNfb96hCSiiJ393MxLaEVqeqUNhBqxYQDi15jyjfWN7tc4UV7ggXwrvAmgPt69qbpZ7ajyAx7a29pm7MwdXEr",
  "key7": "51wqBb5hRNyDH3x1wGzsm7sSpR5Cvp3VjgXDfgy4NESxAJGLXfS4aUFvBgxBJpVHuUfteoRktXyVbjMH8Cm3QUNi",
  "key8": "4JfgfXUooxPBCbzKPFKNFmcMFfuZNv2w4wRKiMzATVskcBMU7sTLZpgKz5m3L7wZ35o1jPeYv3QovRhH5WRK4TWK",
  "key9": "g7roTSW7n4QYNcZDVDh82HrwmJGj5GQ2wdP85Y8MpF4xtv1HAg4jcw851V1xzu5dmCcvdCCy37nDgzcfM7cimGr",
  "key10": "41FVnupNsKXfFBQS9LK1SjCvWyFgot8ANDsh6B3QttEerGfdznVJ9MYet5eyiRaQptMSWwtgDKF45NaYyaUBmTUj",
  "key11": "4yMsw6UqcNPMkYvgXQzxAxUyhTeC648ASGA4GP7trZn6pg6KBm7W1svPrA4KPDmjAvHQHt7bimn5nbA8BAZjonie",
  "key12": "2oUL8n6Wbt6u1e2oqVm5LbfDMp7vJMKbgzDXPhh2MfGmyYv1CWtahNJ1mRtEHC9c2rwgufJ2zuEFrTzRfGRS27BR",
  "key13": "5kEzi2yADn5qhkDG2ZjgrJfx41S5NVz2hejwYiYhA6QTNXwZFBELLSLjRYW7xQoZv5hcBLAVaZ23pa8k9TH9y8iP",
  "key14": "4S9MfhijbJYgTuiVvTDfqzLsUhkVyLNSfhyn8w3VVK4XYvnRE52biLwr7A4YLmy7sHjw33mG1xTnB3oNyFjMZ25h",
  "key15": "3gS8P6TA9XibLgV6aJy9WSpPpGSU9qhbFS7wabxd3Rot1QFggaNHnKG2GFyoeiTAPz2ytfPJv347Lbz357oYHpfp",
  "key16": "BjUwkFXXcDJTaR9g2pvnU8dFuSi1cJXFVxFCtVo7Z2TFv31P7YdwuQEK8PAn5GTiGogZ8kpY3RvqPNsj9Q5Rnaa",
  "key17": "4YJN6dh7v597EjCBEK3E8qkWKh8cqT57sabCP7yshW4TnfwJ36dkN287u7t4KdDJMtkR82oBtjF2EjiX5HLavmPV",
  "key18": "5B2pGvQ8JteVVVTBbjc3DcWAh1Pdj5VYPZePRq25G7zbEiPJyUKyv6xG8yJGoAJAE9EHixj8ErCWbTnH56rYb7BL",
  "key19": "2FKupdQrJfCogFDgd38XrLxUpcaUJXStksQq68SPhvq5HaPYA5842iRiwU8DRKon9yWVBBBKZY7a7vfpokh7rhUe",
  "key20": "jA5rDmA7TLQTRjsRmuX94eF89mjrFXkSw4zbtkEeDYvAEN7GBZqn99rHYzM9A2zMp38z4iKadgAuQpVNTdaJGSx",
  "key21": "LbFgNeyZWgWybztcMYmEihK7rubJGaCe6toLgxatvaH1i12DyELEEi11uz5yS3vYwWovqetqVPXyUT7TYkREK9H",
  "key22": "5fkVCr2TXr5UdS1pwQkRYp4kt3XL7g4xtUBexFE4N6GKNom54KkdRpLsEcJRZH8kxtLe12dqi3GYnSkmEZnESUpC",
  "key23": "Uo4NcE8uGVXhw1zbzku6gvHTEoj7p4c6VQF42cLiDmkaPvR1hn7Ch8kNDwBs58FYjVHWd2oMvcWSnsKbSmYB85N",
  "key24": "2dMs1LJkTksswBnNb6saixT5okwJZLqRsyHJ4HGXHM9M7fAAoVMFneUAiA1K1Tns1Ajj3BRG8KcBbRTSDcSiawBP",
  "key25": "5xrdp7Q6kGZfcCzDknsr8Z78Qzy3kkBfzbXE99UtXu5Cgrvbene1TbXpJX9zdgpUZhAECWteeFQiJYY4TMfXg1G9",
  "key26": "Sk6UUMmet8dn7StEXmv6hUp8gvy6qKreWGqMgMPG3g6Ecbb7waJ2mdBr9R9Skx3TkXoHeUjhKPwp51w1dxerP5x"
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
