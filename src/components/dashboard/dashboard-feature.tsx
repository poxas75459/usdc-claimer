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
    "3TQFzZnFZCJi2BhtGCcUuZE6wKiH2xQ4PZSpFnZPWs1fx6Ewdmr2DsQizLNQyKbpTgYWjrYzsieSa35sHhtSj1Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xfcpw8rUaPHG2HbihhJCuTfH3UhSqMhGg4nor3SymAAuuvFDpWRQT2nNVv7tcNmNwNmUDefxru1qjRs6DevPXhh",
  "key1": "2paAXvqf4nC1PTgR2JTg52CBQr3YFXF4oY14XYMCJR9MvUWcFXzhJZLpFkNWJdcAWZ7TjYxm6BUf4vcb95cV48to",
  "key2": "3rpY1Z3TJTQsHy6zPViF3mdmhoq17cjLPGEaa9rruyPCw6N8auzYka5EkDTRree6UWeTCEhsqmRBcBNCV69nzM3t",
  "key3": "5Gizv3jh6xA5HidbgNyZ4wytjX6hAqmMpyCVjQqV7aGxCBsVyjT41GPGq8Hp379x6ZFB7ofMvoLmocm7989P3Z2H",
  "key4": "5KEq7ECKum3Yy1LnukE9gX7Ew48eqcSWHuAigC2ScGoRw6ufmEwx5MeJFybVDHQzuSEDeS35U52sJo4JrAhx6mEe",
  "key5": "4wfqeWhzwnyb6t9RmQpNKfUF97KtU2egUQmprk9m2Lsk7U65B2zqMV7baQy14RUoqsfsj4tZ7tAYjYdL8T4pqwgp",
  "key6": "2LxcneDbUbC96EYW97RhaYZypHXVh5f25gaX5jAYf7L51cKkAA6TRadRzUHMFYeh4qqeD5tdhBqtAczjNakyvf4S",
  "key7": "2b9GzxAdWhd1nFJuFX3yEWBm3cpAFYE6gxg8rXk6N7DbzuTnhRmX7Ff9PUANnpvoANjESvnifFzpBuA5F1gbiSDJ",
  "key8": "3GGLMp128PcMrcqHXr1Krm97qhcac6SXiJF2vJ1KSQctZ9E7K9wZvKxY87vkAwuwrQGDfLW94tK7zJrbsSVUzna2",
  "key9": "2ocZugaqQaWqXZs7M6V1U8PKQNoNc5k7FcosSYMZEdqLrGDqFBJXgsD8MUwQM4e9vvFc1mYfk1CovENYK1Ft7SuM",
  "key10": "DDEE7W5NQqGCkFmaarXmpdNFYCFarpFrJpJi5VRpNrttYkVNWXG34ytc4zwt7mQK9HwFCQKSjRubTYgZzz57h4t",
  "key11": "4geFmnSQnCKbu2uX4mBP7XCNx5akRyTfqqCNW9vSwceSQGD49jyPe5cKB6pjgmqBNqQDMUhgrK5b5b4sPKe5ieDh",
  "key12": "62MaJRxmuZddnG52hq8HYNkdeh3d3h3CSf3KVLegKXr3H25FJKiNAQATKvZggB4qVoCB4D15jubryA25eDYoyQJF",
  "key13": "2i1fh7UJoG1TFDnkzs1daxuhPjshYPkJdnqi39p6QcTv4LymcAeFBCKhf1i2WZ36J8q5n8ZbG3HEY2VZoFsXVr8J",
  "key14": "6274K9tAD9qJvzxuqnjvZP6iPPBtipjUsdGf2Q33rBfqWVPuTLa2ve7YdmrnJSfmqsbGC47eJ4bpGLCbNMPzsCcB",
  "key15": "4Y5qDCLV9JbcvcHvYSLky3tj43LPnpamEZ8Sqdp3JMGRREkdZyuFRpuGZ1uzFcK2DpGNP1vK4Mz6HjWHw7anJp2z",
  "key16": "54DvnX9YpUhzgjDVGugYs4hTezo6ymY1cHws2hm4Cp6spfRah3hcDSGa86TzHKdkAheZvpk82Tdp2UFf15w7vAx4",
  "key17": "5KsqR14LEw7QTkrYiEjBscAJbJ2Pjm6a8bRAawV1wAzgWMCQSWcjxRqvQL6k2W8zrjhJ3L35SeToCeuNoMDroUec",
  "key18": "62zbBHnMTyHfUrEZXTZi71KyAKY5vXWLeEbUchbKtY4HmkXEnCKoh5L2W3KPfQ5S33uqC5orzgxZKnNU898a4bTo",
  "key19": "32G588hL9EQBXsuxB7QDnmgM1ExEigtvrjq9mY6rdykCZWxgRUv4WamEag6bXNKZR6nCiFYMmNAcJRjZrCurzNiL",
  "key20": "3WD3iDtE5mkjyiAYmX7MGae4zqo8JZFWtdYhqTwkUx2JgzRgV2DSFZW7AEy7mX8fpmv7baK2SUP2VizuLiquZTuq",
  "key21": "bgqXHZLiGpF84SerJEF684vmLvbQ2UMQgocSEZrvL5Cdns8xXiThPDhYgAGhNC48jJL7E4LHEYXXYBg6di3TKqg",
  "key22": "2pwJkooFPGg1ZGe5jVANx9AB1XKhSUxVeuHkrSvYMbRe1HjRGbUqNdChKAEscu3EbNdtrfycv14xnvxJJJMP7F44",
  "key23": "611EjXtSiBdz8tboDsfkBYqMGu7CLNAHEsN7DpfuzW64obfdGAMvVG6Nf8N7gqZUsVuneSVswhe8zwG6DqZA7ggP",
  "key24": "5eE6q9z2uVvRxNVYLSeXynfhVYcU9qgZDyQAUbKUmKvhUiH8W62vX2ALYFu3ppJqUP4UHzEHSfTQAacLpXCdKDX2",
  "key25": "4pQ8sFQU79jTWt4ThaBCErCjfhQBFoEAit94t6w9k8Rh98oUQuFFihzTyGq96NwDx3SghkqoVG6me8jNLHdrzKWU",
  "key26": "4Fc1FuLxEpjfXgRTUUuue1fmqJh53yYCMKEoLuDsAovtH7ca4zJ94thT3iE2z7YMLScfCVrfVySeXf2orxSUN6mk",
  "key27": "2Ukb8zoEAFchimMuaZUX27SZUofvB91frUhkfQqHcBpMexAMVUtdriRcitZusdDCr6kc6WKCbua6bMSfx7HdWQBQ",
  "key28": "3QYD1U7U9M8pe6paM94LyPExkbHk5bqFFoGLFWwpXUW4MZKuK5uqva8yeS6s5E1W3KrQXr4PjDrBk57bUMMQ542j",
  "key29": "4XV98gqYdeCQ6BSoYer8Zqyou4Ea6x2iw2fRAMEQMg2KBkwZ24ZL26qk2xWr9ZAMb65Mc3zo49aprxWJy7FAnd7M"
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
