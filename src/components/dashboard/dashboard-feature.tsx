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
    "2zGMXuPHaT4yMReLUvcesnfqmdVM8sPCsSG864QUhvf2NnihY7Q6HpwFk8sASatuTszHu6rHknyQuRo3eXdkCKs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bp6MbDtCEDhQQMjfBmSMtyvVvxGjjCFUXLDaNvfmHDrjSpiLKWdUQM4q4E1y1aH6WkSDRnPBNxVdpdfesAQ88fm",
  "key1": "2jyg6SDjoNUjnvfo3zNTiYNkYnVifz3NLLm9LszxPjDqjCFNxkiFzbTD96vC28DJxvz9xsQbHwPWPgTRswxxb792",
  "key2": "4u8e643JfwAEFuBKaqo3oJP9JVCp7rCNMgRK6puiLQQtq6php3ZH1S8P416rBHATyk9WNPEYLnp7wwMkdL8NEkte",
  "key3": "T7CHjKZ2HWBS6dgmyfLxkK1iMUxc5NPb29ybzSGQtgrBMwRoV26o5w1vh3mbNY5Mepw4MLH4truTq8sv2FpmNpV",
  "key4": "3r99rjUvsGKkh9JfefJyetasgrTKzhgUHbBu7cmsscZGXcdzA3jTF6it1HxqdbtMo7t6wBsceC4EhpnAqgphD1sP",
  "key5": "5A15hHgYLMoTgttEADhEhDmEW8UdVqLqivftiQAY7n7SF5n4JhxwoUqBWxKq8dUsjJ8zFojEDoarEE9TZWPrWD4W",
  "key6": "33SjAHa9V18K1Z69VAfRxXcS1nG73CdcAWuZVWmx4K6XepF8iqpi8HeotStj3641WgTuQhydp7hJ9jask9pXhbEe",
  "key7": "2mfJNRbjfPLAgweC4uhAWzgf7djNcp8VfbYv6LAVQ8F96vpZBRoP2bdQNpKGD1mJvCRv2DyGBtTEextJbRsbcLyL",
  "key8": "4Y8R48zMopJ3b1fCPXf1Dqwncx6b1qptdccrvp8TbGZHwXEVEL6FDXZ5fCBvUJpVnjSKtuBhTjadjHkh2WxkEZpm",
  "key9": "w3LdWCwUNoK1nafzFgied7rF31ZdhXjgnMNBFxKobEovUwMVLK4oVi2JZzabMqrThrtYfTxYf8CZFbKT5KYE1Bx",
  "key10": "5NYBzNdQQWCUrzP58JX4mXw1Eu1gffes3SKCuTGCyoa7zDx9eHk3EWxKf1s5JVrPNo1Eit3JHyKqNhc11NsshkP6",
  "key11": "26C4NiFq8Vx6Q6BMDL3MWWF5fJ8ELmK7eaBpX6V6MUNUXgcwD3KrrnWR43Jq5ZmfCXFTrMNomKpC1zUbYWZpq8wm",
  "key12": "5KVsa2dKkuqN4r1tj3AWHHu2na6R6iwc3kXBXFkxFZ86uysdZZTuVD794bny44PNMu5QeGCizXz43Wzyigmg8F8r",
  "key13": "dbMeu8AMsm8mKzi2wrPESQFFDKZatUPJD7SJZQ4Lu9odpcNGmzUgNneTv4UZDtmgp2PUs3475xbcGXBLjqMfzfa",
  "key14": "58qjUDeZns9VDE41iZLk8L2nzjM196DkecwMTZKXC3NUKEm9EEVuctuYSuoydng8evb4bcscPoZMqyJqcyaGbU3Z",
  "key15": "4T7FsYwtTbRtd7xnmPbDBPBEodzL74qY6uhcP3Hb8R6oAmVbpE1SLHL7aW6RV1CRjZXGfzTzp1AfdLdCtcq3ESWJ",
  "key16": "3tEk4kWQv6QdyZuh2GzUG4Wwer7P2cRBsVGFDMGiAznHyFSmzG5MSpEuD9Hi2PdtLhr7Gd5N8jTq4N5U9Zx33bgh",
  "key17": "NoeAWix5yNiAc8q7yD52ZatU8UV6VatyDtFPETJy1gb7PvUUBTP96ZCwi5f5zDVbmeRoK4xg24fHGQVhRnpwguo",
  "key18": "2GRuEMQUh8EPSLV49KSFmBDNEqCbq2ZvTGk3oGgDBNCZwiQneQpeb5xk2jKwzzcPMT47YHMMe3NYQCMwcDoWW3bi",
  "key19": "4Adu42fBCykBXs5wTo14NcobmbPQ8MgBgwKzRY67XH5dtPhgH42RYfrmYU8nn9jxBz55G5bFK2xk1Z9QRvimUHGH",
  "key20": "2Yv2wFcBr3pw5X8n8paxhves4krrM6qyUxzumJc3jbc1Eth5Ly2DkRFTEVV76StLFqbuTFwm3Ss5VPF9hVv7pmi2",
  "key21": "4S28D1x5qDKsDDAk56TfeiZciT69vkktYc7Wv8cZdWFfkdkpXo4Qt3de6bM5L5U91i4zmGdc4MuEFxivvBt8Gb54",
  "key22": "gwoyNdLRTBNuYLLRPGYiPQ27v7FXYSwp52QevYShgEYnP1Dp3t28YDTtPVU8Uov9akez8HivMtdjAJojnUcECZn",
  "key23": "3BCMHquxVdn96yDb7j17zSrGFgk6hxBtvDSvFtfSunBWJKo2nq1c5vA5qxQy8yDbJXEBB9jmQz7jmtUaibsNVSvB",
  "key24": "4B5KnBh4tr9h8mV1jAT8ymZha5kLc2oxFCQZfWoFR4sh169w7u54K8cy6a8YEWMyefAJziiN21TV2idUs4LZnhBq",
  "key25": "2EVVi8vmvxCkGpu6KnwNTiVLLwTpoR8vjauz3Dxgm9RVAAhfGNBTNfCcULwUb66VrEy4uhBT9Tn8pKV2UzZBWiQd",
  "key26": "5GHqEvMjtb82qzahsJg2LYD5eTn4NVq9wqY1CSWKmVdtJZdF5JQ9hqJEKJ39kRJ8eSo31op6mSpkCGLpZm4mp1Gj",
  "key27": "63s5Q1zpfzyCUK7F8ppDpZucgEweJGFsV7WdLYEhTNvBjyuDnqfFNKpPQzQo6PJ2DPtLZvi33GFjhv5pFAyRDj3S",
  "key28": "4eNPSvq8WUshoK5mp8fZkdEhTFbEAnheAXxzcJD5YJrEB3YQ5PZfdj1TUV6bJtNZJHQYGntNAt5LpmWK5WjW16EZ",
  "key29": "kwR4RWp1Yji3xmDY3ZzwcKZuCvUR9gBLaLE49oNT66ZkrdDRf76ukgRMeKxzMwxoYTT71vVvRDYDHQtxwJHXCoB",
  "key30": "3pBPbHXMHNTWxBvZf9MMd1Nujv6vUG1Tb3DKqJRsZi9XvFTHbuGq4pZAtgBm8b2gJY9Sz5735cFrLyKiDQCXRqLC",
  "key31": "637LT2iPD3iDvWLfxwVSRrqmGy6kSQcQRjSqDy42juauGwy7qr7JEUbLEDwvZ3Fr4P1UCfPxnyurv6mJA8G7p318",
  "key32": "67VMSStmF2BR9zXhYcEjoqfCvnpuzg6Koo97UcZuV4c6kxh1SRF9o5FobhRrip6gnCYEb3bhBUcZKBL4RDYfpm4z",
  "key33": "56pJUyUFhvFTN1wyPeKpCXtTRsW1oohr9TtUW3bvH2VZueSKUaPojoJ1Hw2PnVujJgEaspLpyR8pnUeJoCTzxU4s",
  "key34": "2baDSH5troVo56E6BF2EUvWpnmJpTQiKSnKx737Gukzn97oXPGuFfZeY4UKty3YryLBkbX2e2RQTnyqE9sm7LKd3",
  "key35": "n4qn3Ww5eLkq6WrwqEv1G6J8W7DThRf7CjDcoxd5zhwr1Fw7CfLqubh7U9pcdTvAv26K6Zx7tCzbodVzrSZNYqA",
  "key36": "424Km6ymuwpkQraTL4688dB3MYdgDrtSfApZBX6pUNsSCL7HAhoCM3eDECueUGx8JgmNYbJKZ5PGiP8pT24ssXB4",
  "key37": "JfAmKArsAFSL5P2nsHKsSV1xRRydxBjsXLaSBW9Mo7mJgG4Jeu6VxRaMd313kvoQt5tkrxXWuJvPUgQBJz4rrV2"
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
