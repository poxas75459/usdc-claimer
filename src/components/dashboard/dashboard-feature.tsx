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
    "5G5JvueZGWKpBWmuNwktq4B6VmJAZF8S94MiYqqzEyHFTmEXqteWeHNqAqh9BwQhuYpa2AKD2S8CWJmYyNgKKQfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MoFkkRhx39HyseiCrbaP3bunJiQ8bitiba7APDbGRjSMGnPhtLByojENZuPspRuH9VCorAWZP39jAZ9mLAgUmi",
  "key1": "3xBjkrNMDrdodd6o2pTg6diS53ZQQoNWEKhWxHJ6xJgFjWaaJWe3nbobkD2iJG52GMUyvxJFbigiFKaPnw17eY5d",
  "key2": "Uci4zwoxwZiwPysSx81b9r6vZnan1jsY89EbZEvYgJ4pLCahagyYutvoLjAAdNyhsSbGZgdZaqE7npHZaTHN1Tq",
  "key3": "URfvqPpNwtsGRR5UbpJS4cXfpgXF6DNQbbULY4Kkr9QwP8AcH3rzCQJ3unGhYdebGxmcqhgByZJgStokJz8DCwJ",
  "key4": "2j6V2EPxKt1cihYnQzo1EScTn58wfubnb1YdVvqQNd3X3wzpK1MZm9Zxkw5FFm6VxHypacrjciemBwVJYNn1SAGS",
  "key5": "34P5AyVHJ3NZFBimyr7xdPTsrVcWaZDcFa1zh6XSQiu9er3HmNKyikEnt3bK4AdfxZGQ64L8meZs8GSpiPyCkksW",
  "key6": "4a9GWTR3wmHsEcNeCAXGBo82A31pTv6uiXTuUJxumWnBKz37Tpry4Nu93Mcy1LSw6wULv5Cqopv8pJWsXncnS9LH",
  "key7": "58ReuMJ9TAzU66jzYY6r4ZMt3Ji67Kap58r8sVqLYdhBSB3ttWdrwxQNoHinZk9quY6bVo8iNfco9GH5bv9yBWh6",
  "key8": "2jt6QKk1U1xwRJ1PpXo56ijwAjhHbEgmFgCumYNxL5vNKQfx4vsmBAp9WqXYSDJ3Jbf46NqhsJWEp5i84ure8PGk",
  "key9": "3zmj7Sy6nqqS8n8mUagouSAVp4fiMRSNpwdYaV9QCYtWQM6jrjYFfe8uTvgMMFSByxjxfocunNXATPSk1oFmsmgV",
  "key10": "536bzqzChh5gTA6RsKB7PtVKhHgjWqy9T5CamwnqnZKKvLRBbsfpWZN1d3azax2Tu9jK6F9md8ePjJdiMeZt36Pm",
  "key11": "22cYde8TiupupkX7cNikHcokAdYHp4vViuQDZfwGK8VV86ZZ68QdHxEaEFPbmze4CjqvQjEFmFeb1ae2cuCkgsZC",
  "key12": "v2awkGypnvUzWHZ9rqfGKspAfcTt7ahmP8cWyNLidB1FTQ7zQborrnyRLjrnLDD3v2feqih1KPRGVazcUraGrsr",
  "key13": "2Acri8EY7xHLi4KP3QwZQNRAVuK6iLxZoVMQijL1QbP6dMRjv4RGEzcXYy52KX8JtRYbH8DDwAPtUaC8184Ejw5h",
  "key14": "mTPdboE3i6HNyBXYLzhRMdwbF8Piz36T1vKXqhfNGxcnvcgW6Xrs8Z4PFB3FxqNo5Yj9SAkucVnUWY8NJEruKaH",
  "key15": "VLxYCyWoAfP8dyvgEAFs79S7ny8TgDNyzbdvpEDMQeawXHFTD2jTCSy3pEDHrD2De82L7S9RMd1C2HhkrBEWpn1",
  "key16": "3ZFz8P9HVn5eTNRDqJzuuG1qBZFU7gcbCx3tzjqaRb4CGScFU2tWxJhpoPZCBVB2beiEzjngp4c1AHWiyTjSQmD7",
  "key17": "3iFYSYkYNvqLTxJvVWyBqDr8XaXwTtSFVkqm3guWhxAxD6hQV4oFNqXhZcsULAn6gZFoHyf2v5KmQB8hZyRMuTwS",
  "key18": "36CUTcizwZNM67nU2NG4KYwEmZ5qCAUaGfxNcMgkyfwDYda8AqZj43nxSVt8BVSkQyBd8UDQhY8JbfaevfFRQepU",
  "key19": "oDfwi7MNzVhXddXdUBxVjdKoPcGwitqsmMMsWUU5rdmazEWfb2Puug5yu2fZJ5ZbByx58n53u5uHUi7Xadr6k7L",
  "key20": "61BiJqrTzw1ekPtTy4jdsu6qrm2NE3BATBueJUdbMyHrHzWbUD5YMqV92xDsYyTTKap5zPKF1gbJgPdcSSMmF4td",
  "key21": "51zEkaVpND36iqZqxGSeVQ9FQpBvcWLjjF2giiXRX4c6Thfc9sKqPEXe7TzyQVzufigJqQAcqCBkL38cXEm1A2Fu",
  "key22": "4oGGLhh5unU92nTrL5Nx6QgfSkYMwJBbqwV7vc7MJ2TruNjBsQYdGDgBxxgJNEpGxBks1YKsjqBs6p4zJ2dAnN34",
  "key23": "3P6W7P8JQ726ZRpHE87iqcqMEtQyF9i2jDqehdk5wxpthm7qRDFyiDG8jhEG2JkYKveFToXNL6b8xWMkhyZ2M23A",
  "key24": "4kfp5C8wRKfnEZxLApwsrbYBJqFMrhwoofnRjvxaQBKfSqyWfNKVHYF5sdeAPSTUvTLQdkWd7f5gYvezV4cEcJY9",
  "key25": "2tVhyTFPHvExHe28cNbhTZyqiD7hMSAQuC37k2yf6PhQ6G88m1KaH9aVBVBnbaZAXHkwuD5N2zTb85nLte1BgpHb",
  "key26": "5tXWwZwLwo4JD3t8DoqF4yGRbAgFnMWcEbNPNejN4RQiBLCRRq3kr4mCU5c1nPXXumcFLdqtP3Bhc77crfL4o9cn",
  "key27": "53DBCYS9WExs4xHGu32fjwrjXgKoJNgCNuWkEAjiGgmKxtehqTD4moMwBHvRC98KXSAAc53EFGxC1MMEmetKoM9g",
  "key28": "4V7xcz8pj8rRV5UheAeyfcEPv1pu8VejZnwSXGS1t1Q7NHN4de7nM9ymWkD3Jk5zoHswtfdvZjFzPyDYnT9N2Kb7",
  "key29": "56CDnw2nKnX8NL3dewvbdvgHoL6Q8bpXxsR1TareWDKzE1y697TvJjdUWXTszN6rbv2gJ6ro81Nj1vm6P6UGn3R7",
  "key30": "43kCRp62UMbZsrTDRTGAXYrBTf8NPh8Pu5Hd1Urr3ED4QR7wqChQC4nWAst2a54FnkcNbDbkrAA8QcJTJwgAjuqN",
  "key31": "5jTkz12mcuvGb89wAuzk3D3ypsL7bctCoNuqcu5tzitx4ueqEkfhqNut7zM2cAHnn8nc5t7MCThAc9aSBCAo5tSR"
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
