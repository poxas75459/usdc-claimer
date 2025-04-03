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
    "4xbGx9ZV9Y12ARViCyzBzgh3dFFDFgMACWd131wGCMm6WgiwnZe8SL43uP8WnXNrkWLd2Fttk7T9n7uYDzjQUbUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LkbnvwYqcqyJRDc2J9vpeKs8piXDVs5kpTJ94rPq9KzTm6zPrZSiEBYFfavmsWPUEBGGWCkYuaKcSiZASiZ6QUV",
  "key1": "34kLtQZNCKPkdHEHzNwxJAigVyhrbbV87eqN17RQgMg7GtW6xHagzcc9js1pztpNFUKkQv5JU2NpLheAkREzfFMP",
  "key2": "zVu8XHbiscGDyBtJvUwcCGyqCxf1c2e7KRiiwyK1bwjuYspb6JLHpv1W96TpHBTPUmGTzCux3aNZME3ECD6Z12x",
  "key3": "QEwT4qjCrmpy34oWSJVjqVuBkz73haxzbVCErwm3A3YBBgMSYPFQoBarBomUaBRQyPt59KKE563qMD1NqRnBeGJ",
  "key4": "4kz7gx3zJ9i1JEeDU6FjiVJks16YL22xMAidRgXqYbLqz3raDHWefcX5AerNPAMc3fuXp9aG3wrfBEULBkrLNea1",
  "key5": "52U55SyHp5MayaetvxwQvqGBtiFJtuTyhhDknzDvgQd1uLAiKTTNvgP7fPPfXT4tUhouV9wPD7Hm39LachMA5QYG",
  "key6": "64zupyK59bPsecAgxuAEs4EiARZ4Xj29JV4zR9rfh2NNJxD7AyFEhjSt41s2fC89UkvaSQebZDZmBs4BxoLUMng2",
  "key7": "3EDd2JbaYjqxkuBohUXXdLRusbk35Khiznb7mgYyU6Zf4bei9bzLvrg5fujEHQCZ7sLkfzyfUpm3whdFLsqU5MCA",
  "key8": "5PERLbaV9qyefix1UNdRuzH4ccmkinnioyt91MvZ1Dw9xzon35dg2YczonmbxnaBKdqiLEhiEEpBaghwrVn8HUq3",
  "key9": "2ie8bSAjnaPkMrPrfzfxmsx9uwcBVstvHVPTkvFYAV9iJmTXeyTikazYVFyJiykFRCofq1wrdYsNAg9V6n3SE3Le",
  "key10": "2jSeAdmHboWu81LokqpSDCXDVwHFxeJLDGLNvX1hbiN7ovA11itY3b3t4bhxdJdW1ojJBjsZAJbbTXHg9pzVRD71",
  "key11": "2kiY8JZr5zgQV1E5t2XaaDvNUSSXpw9upcdAbbYqSHobL68fFBHiwGafoCFk5pZ5V24wRYuMtKnZoQbNE4N3MiHi",
  "key12": "4yAgbUX9R6TzHqf5Gro8SQNmbwCFvDQPq8F9rfTMspwJL7QRVREBzqi2RCTfTJFnnTkKp5qBA5yzhff5KmpySAzi",
  "key13": "3Hp8QPhQ7UNAo7Td23eeUSaJrdxQHYYKY6pdHZHtTZoQoN5q3cxuyYEhBVGKVkpk5f9Wf3GqmRjfZot7KSn78Qp2",
  "key14": "3nweJW4aMFx4ak62QV6Xja2dxEE5jfHfxThKHRPXN5B2J6yi9XPTYKM9kj6qiUY4CxcAQSnNx5KnoK27RWeTGQWs",
  "key15": "49QkeYAKdwoke3VwA6tE3U7BeEir6xALbNoxxvgMWifM5hGbQtZpVaSuwZUCSdLkmhErTttPGn6Jx8bfNFd3TXdB",
  "key16": "2kjKqWPyKj1KEmUbPS8oCjwbQZ72rZmbps3yD1oEYinjftfYjcYVRW9C9tQ4MnCJazFgevKksdh8VnqF9Cxsji8W",
  "key17": "5MrGtFRfySATxyy7SvvhByhK9oevciYm9x9ShUpyydSgdXyDtkYCt6pNTfkTB9gm4WHGCfyNPN6eHAcePAApebGr",
  "key18": "2A7C4N9ivBviWtc7ygZka4yhPGZunMi6ngKsyY34waPrqFFQCECBW17BZnWpE6Maw6UtLxkhEEX28XK6jmyTc76G",
  "key19": "2wK2ijiorqxGnyTFoCJGxnnyBD6CCtud4i1mPTFoYjAbfGXSrKBg7e1bTERfJ3GjJFdzB1dFdLRcbFvCUM4qtz3d",
  "key20": "8kqSHgxv9xWhVtX1Mqb3oH5fgcnd2CeAcDez1eQs5mDS8bm36iTsfKMNYdfVnqfW4jGTu1Ld4J9qmNzRUJLNysx",
  "key21": "3B2hYAscqjBUPnmvksSigXNocrthxbXTDy4wn2tkxaK3rJh6DDEQVHy5PKMqg5N6DiMteKXcUEpaKAfGX57RTecr",
  "key22": "2P3JMr6XTreNbEmKaVbzD89uibJjCYeRZWp2ibsTjdUohwUSVjZYYEXxCdGzH2GNN43j2mwvENWWbBCkJy7yve3t",
  "key23": "3rGRM8h4z9MVkncTAGYaWKRfo6XekmY35WJBFQGfgUgZkiyBkPNFc2myB9Ys9oq4KbaMLASxqyWSvLvu7iXr14uV",
  "key24": "4dQx7XzjpxwX6UxuENGsUhjw4PJvAY2U6t6t9LYZ1WMvn6QNjYyKSjNP7DUzXuN1PTBGJH4Z7tiM9exuYMkw4Wzh"
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
