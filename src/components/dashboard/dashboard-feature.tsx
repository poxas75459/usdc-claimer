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
    "3ncAL9JKCoofZcsoDWPeey3xHwwLXviqYP7sJhUAotzPcNDf12dm6fY5tN97kWx2TZfga3AtPjRiV2x8ucUSqsvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqW9Hyev9do9tynnD9xFuqXF2WZLNBzwYaNMSeTaWMfjjKRPgyp9wGS43b3BKvH6T1DiUSk7KPf6HJyXSedo7wA",
  "key1": "EwFT6KTrHt4Aqx8XVpSf9HXFYuoQHHxnTtHeQVMZyWaA13as9LMuQrETaVF9szFJkLhgbD32jkkXf6BaQqfazJF",
  "key2": "62FDKrRgGfDdbMFaCPSgC7daadY5oGTFskoGwcH4QExS1JurvVXnPH1KGTk5661N923ZTGC7yMZyCDpFJMwgT4qD",
  "key3": "5VErtnssYc1sPC73ouXJFPDrJf1WdoKckU6D5W3M1QXjH9Y9ePnjwmrRAQqjUywnYdWwqUd9vyyxnmNCwzQB1T5d",
  "key4": "4gy7re9ebjomaJGErHP74TDFHmJ8TNPSrYfAkQiN2RWTrVcDUaw4rbxeQeGyB4azCdmwZBmLEZ4zYSxTzLRybeAH",
  "key5": "3XRgq4um8E55zKYRzQn559He32gcm87kqZ5pKJVWCDDbr5igQhPKneuYACkcpkHX5rFydNo42HeFcFUbaoTng4CB",
  "key6": "LJ6WrUBkFd4yZEeoZsmViFkKsz79iSosshGn6oLERMPrexbrzR6xRRv5z77VoRgMsB98qjao2HX1xsMmH8vVvMJ",
  "key7": "5Q5keFivaNLxrx75FNJh6aHEJg7nxUtjBBAsg33Bnshae5fv3GVE251nc28Cf1zDeE3v1FKnasb3hnJT87AL3UjX",
  "key8": "z3p2Jy8UNnMyqpoCApFcpFCWbMgm4J35B6FsC6oQveBTTkrjoi4LmZ8FSmPR29MNCirrvgi9eWMBk2j7FHuQx1q",
  "key9": "4PyMWNGZhXJGZVZ6ajfyy4qXKee9ZghvkBceGbYqYgvNkDd3bquzgEEk78Dsc7Jtj3UG8ByboSyCSjUwfiGmvTB1",
  "key10": "4t1xsbAT5YA5AMihvVta62mwQVa3Jb9jEM6pJy6iAokbZk3Un4eyjZzL8PTDFqTt1LrorYeLVLv54ZKATDFVSn8u",
  "key11": "yfUtX4SSsYHxxs9p4EgWPke1eWuHJ9Ynoekg7WcuEZ2hjUEVYxrVcySKsjhuGX6aoBbKArUVepL9NMsTRuCPsQ1",
  "key12": "4B6Qv9qN3dDxqC25m8feyDKANctonULK24RWNNzyJE4snbKud7BJqrXoc9bfae9EPT4BjjHafx4oYksSCAEEuAh6",
  "key13": "5Y1LAdarWV98WfQbXdWrEYxPEUKeXhSHYwwF8nmLxAurgMkdvsCwK3WrQQfoYRzj93aaS8KevodiJvHnPKis9TBL",
  "key14": "3dKtzdKvH8Uhrg4SajR1uABeU9DRpnWymVLUdYVjakSjTV2n3KMK2CuxuwZmaAmuGEdEnk6yRVW5bPX9uv5tvMku",
  "key15": "2azWDhafYirLGgVWf7qrmufhuUy3SpNvD3vyykRB4JDZdQkCuGksZFKdar2xdviC8G34TrmRbyqphzbzTUxAxqUv",
  "key16": "3atTGqaJ4pFuZBaUmkHTitrjFpT1FTvf5yJGc7dMtvyD1ZbgrXZ3U132Eb9g2VjS7G55n28TP1KUbbD8uqaaTeiw",
  "key17": "3arge1TVeuLdcqfzsH5iZcfvUWKbskWCJC6FvguRKymj4h914FfdXBRkcHAEBtwDjvKTUkpy8nefULNkK2kT87e4",
  "key18": "4iu9mBp6mJarbKoxNqmpvRkSwUijm9ZeGJ5z7EvD3UVoWY7ipVA2oT3o2oREuwg3CEscWD3zWVQ25YuQNVnE3w9e",
  "key19": "22V46A4DZ6NTzzVDyn4peChBzBuSwMZVY9UX8tE6yXg1ipuCNEWPsPmczUpLMc5LhT4b8kqX43zv7Fn3BUThFMFw",
  "key20": "2nxW4YpQmMZa2j1q2W7Yv6ywjF9EmGGS1yDW8Et9fP1AqVyyV5ZXiftLCwc5iyfbSrxF7PYtTPpV1yor4NLtFCPm",
  "key21": "5fhKbnxquQEZwvr4C8yr7AK11s96Q62vUk9Dax991Kc7iVmXxHzVb1JHJUwQJm5D1a1cXXsvTt5yfcKBKoMKSn8j",
  "key22": "5YJb2GBFfsioF2C5MYcQ9pAWUjVnJvbKABffbKf2Ndwgsu9T8L71uCNGJgyXNLAgS72AaPDhKtb3XcZXeSx2p5m3",
  "key23": "4f9sj3xRuf2ozWvhAf13PePiz7zWbedc7kpnmJNNAZ36pSuxqt2dFxWzPNdmUKgoRjjtXyKjVeC3rWhhY31C4tuH",
  "key24": "3re2bUThn5HqR4sMSmyqnttdoC3HAJBsGUujSRDnzQNxLmSb99XTJcwJBskCfUmnEWxaCuSu25BXRTYFRYaKWFo5",
  "key25": "3z5rRAEsUvMvirZFqNUH7cxBik8dpfsdAA49Zi4MSVGX4t7ru3gxaP3mgHThUnBUGKfkEp9SYxm1e4oiG5C7szV6",
  "key26": "2ZE7nY7LHQcdCHU5VmbAKT5rzjfwHXg9RyREGUBSA4AUE2soXCqS2K8q3pcN77Ca63bmGxQoxDigsRzjk9Ef6EAw",
  "key27": "5zPdcKdipv1ycSukh6ornEQEyW23jYcFKuUpJF9etxgdiAyUtXhkPKcghHeF6FLCbDU3fcBjtEcq8AWhy21rM2Lq",
  "key28": "2Nd9JSmWV9Z83NaNXvwuTGrge9gAE3UMr16xw7Uq9BFCwLR87WmfKcwDrav16VSE2FwPmJaDDBtYRpcE75o4qzhs"
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
