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
    "4pca7Uc9ovhS5tAbWR2Y6hsvz5TAvh8XuKykrN8SAcUui4EYDmLwHybiiCNYRt1atkHo7cBirzF71TSry6pLgahb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54kGpjuxUgPWdRCbQXJ8j8RNpPiBQCLsj8dX5KZRjERU1NQq6g6N3Yix1bWHQhNJJTd3aY9nyJ4SBwuCdse27Ljs",
  "key1": "3gwNAUHhRwqSMSWGx2K9qeQ3yD2R3rX1vLWADw58pHD86vn3XmidAPmEtiJSQ2WBtW4xfV5uARnb4wfw5QzRPF68",
  "key2": "2VZUDohXmRqZXKxYe4juzkaaLyKhetX3UMrXBjKy8y5yiPf7PS1H8tj7DbceWbja6Y8u5tK9KcbHTBJs3EHiJtJN",
  "key3": "SX97aArv9phJUHtbnvuVbNHzzud8qLQRJX1edvQy1sp7B9YuHYodDnYeGgD2BZyo3yNkXzHhRVCG17UxsKFxvpH",
  "key4": "4qqVx7iYRidY2nVCBq3A47n8U1h2QmNhYGMrx1VZ3JGWBpHmmNcE19aMeBakXToUmYswcgHQN1wu79mkjnFsh6aY",
  "key5": "274iXceXwjxaLFTSyWeSaAHXLMzYHk6vqY73hUaDUmJU3fnHYczAF27tbW6FJ518AW1FrtYWAL97G3VKdWHi1UVd",
  "key6": "4dBzwUVs8RGjKg3SM4YjLpnCTgPGzcjeT4WCqH3WijhjREyQQHAypmbQJnXV4BAG3DPm3C42nLnP8qatDFhcQi78",
  "key7": "4363d83aPcinMU7UkrPDyfm5crBVmcZxZk3WnjczTqFHw7NFadcww9TzsP5U19h6A2M4C828zeBkB7cNSQ8U5kg7",
  "key8": "2kwH3R6vMEiQA7CWPNV39ziaTSpFBLmbRktBv5pSSq7yz45pZxsFKpNSQ6kEp3MieGK4BprdJ9jC9YceqrTZsjX",
  "key9": "2auWpifmvxDBL2SKbrmHsB6HwPrDg8PgDTYQvcr1EgYgm3SJqPcthMRVfTByyMNyDU7Zg23hMLEJBSQvSe66MScQ",
  "key10": "2ZU5P5FqCrMrQLSSQeAMNUbbVbp1aCSjGHJeXXEGXuHjSzeh5cWEQykofAPawpeB8GhMUsiM9CSnHe3hfeWaCFik",
  "key11": "3hY4x2BWX6ELM4Z2dQu5zjjMcZyctB29yB8GERwEgJPS6WgUu5TnimiQRHJtmWEhMLhB91WaxnK5bZqP6ThhxhWj",
  "key12": "5GfK6uqZv8bfdtZ3rFQUqRA5Lo5zc6eKFS5Tg2915w1cEgGswgAYQHEggwUd2GAff5mpfGyKqYBHfMVrKTjZqd4k",
  "key13": "22Fruwu3Sb57pPUY1CmqnwF47oMsG6mEpjrXvwMiQfhVmqdSXgYNe2P9wRYKWgkNwMHmWF5TchBa3F4oJERXzwoj",
  "key14": "28iRVWd6WMMnicEgrnHvAL3xFeqEv7PoXWCTvCUP75BH63SZpWkeCX4NrgBSWvv65fRyD3bQp2Na1Fo2GGf5tvRs",
  "key15": "5vwLCNpzbVbzHuqgWvLshi1aqkAdCj5Fyt3WGPwhiqRcp28zVoh5iwwssHxkND6GyVcyVoGBZTqLwoVyC11zD7Zf",
  "key16": "54G5Ket7D7W2rQD9rZKmTXZ7n9T2uVwY8NbUmk7WYbVcyuFqqzh7YXwLDPGcVqyFR5VqYJoFuDAdp4u6Ds7LKCcu",
  "key17": "JXjg4rfE7drXvGthkAyCDWB1dfJArhe5vQ9VRWXxBkEC9fn4LARH48sFWmPTeeZmPjACJrprndjgJZxmQ3Qqn2S",
  "key18": "4dKHXg8xNdNTT6ADT9vg68MJYBFfFzuwQ2uYDTSdR81bJrXTj9G9EbeaCW1xTs73JitusMhQ2sgq7JpqmKnohdua",
  "key19": "4xPEZRg3Y55YagkBD1iwRahtR6g4jWv9qHSD99hg23Yhkz9SHdDyyE3wchFTeYYAWzjNendkEpPrQSyuepAsTrdb",
  "key20": "5chfBHg3L13W9D4EwWCnCuL7iWgwn1FpEmpJKannjv6YQ8Dxs5BXNBK911B6uSJb4aqfds4XewqK6rdgjzxAFQbU",
  "key21": "2y3vszmHcAJ6NXjGr65fUzfeT8UkQwZkkqS6dnb5TjBHxWjz8kZJuxnhqt5cbcoZKkMZnKTxjmjKJXF6ioU2SKc5",
  "key22": "4dMAqyiT7SmV55UfQ91U6aaftDnn3pNi4BWc3s1JcgPshonfE6p6LhgC9iwUbksLjY4BfVU5y2qgDTer4dSBoM4N",
  "key23": "5ccamsHp77L7E7XMsBmdPne94hzKTcJQSsbXocr16wsPbuetp8vDjRZYVkuXU7aM1xxfgWorVAFv7rivfm8wJQtm",
  "key24": "4Z4FmZAeFHiJrQBXqJv9693tdkZi1LLZGAk9FbfUty7vAmMccRPtBL8TYNYrMRNcHzyaSiKZsn9XwcfCHnudc2to",
  "key25": "4gguacr5A5ycsoExpJ3ndNfdewDEA2JXJ1tCqLj5DRH5vgSfP6hdPyWAcZ4QHekDbN4FXxwjkddge7ppQRf42Y5Z",
  "key26": "3dGwneCYxJTfmhtEMT49EEcYDWZinELB816n8DZqWRHyHPBqQwADsxD8ZhN6Srf3m1iYM5f4Xeik3v8SsvERzre6",
  "key27": "2zsRuE2MpbaA6rh2YmW7rCU1FXb4cvufAHbCJzNM4NKtSbU6gPg8hPjwnK3Xujtgd7QBAjgCAWhkjAuQjRMySd8H"
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
