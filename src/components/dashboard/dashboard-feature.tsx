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
    "9qS9UCznoQFcUx4XCkTciPeKFkXpfpw4VhJ3HNBQUM7WVBv3p3wUvbKefCSUkh7NxMkUnUB2VBe1sZGeP3famoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DpFXiCb252CcMw7yApKTRFGd2i2i4p6gnJYoJJFENvLCcxTqqCXECzwJTZ6rbrXdHJtqVcEH6Kpse3QcVjqkmx3",
  "key1": "3H9HpZGxYmpQfvLAfkGnULZRTrcGymB18ikLfhosjyP2hBRTEDkHhhVLVAdA4JkJLjC3X34areCv7ojvnPYw2j11",
  "key2": "Qn2NJtd5iGYAUuxmyRHMCPsWByy8JsTTXKKPUkD78Uum33GPpzpe7p84B5QNhpihMK6TEEjoJ32ePmUHQXSpdES",
  "key3": "wQs93BX2hb2ZQDrsaaT1MiQrD6sKLBxDKxFyaHhtHN8EXA1ge9WqbKk2U78i9aRBQKNGoeVhkNY6gqFpKHSeeUX",
  "key4": "4XrUAht2WyAXpctkUmakGmPpWaijsbyAJJGK1QXNZJkteoLAMrCNeEWNhZgUQ8wwYH1WaR1AE7tPSB92n5FVQ9KN",
  "key5": "2HcQ6KHe9pasLew7qdfpQ1PKzt1ZsKWFDzADoQoSGeQ1Ke2L89tEg39n1vs3aKSipK4E9puq96Hm5f4wAAWuMQq8",
  "key6": "4juJWX7FApR5doj1KUhm1J1xNWL2jEsEy2FQ7tDmXBjzZhTPegAzyoDFSGKLFZBaTFdWQaUXQdLWSmpciygJ6SH8",
  "key7": "rssL63KZbzrMQb7nzrZ82BydH1sN1uKszZFvBp4oFymygvfpZdEJNCWv2cmWPojDqd1gZQEQTpp39oU3jR38w3o",
  "key8": "oqqBvsX7ZMbTWCy6hCcBgcjrgFLTm8a9nvxmttuSvqjniVYZvipX6rGP8ufeuhRoWxybpXMvBhygFAivAWMMb25",
  "key9": "5jPrGKuKu52Ag7Gs7gadSuVfxMFMv9Wx24NQ3puXVZwRVffDgjCmjyFaGk8Fjgr92x3XDeyuHRYRa1CRuRHrS7qn",
  "key10": "528VuhZPH2JUNohhLrtmVE68jbnUz6aLTvWhZi21LJpALAykok76WcPAP19yyzAFm4JtQmXtYh38er9wfze1ZRis",
  "key11": "3xRfzvtwHhoiSsDUh5hqW7KyBbZEqgqUp4QbJP2rLGm6QqXTDsXs8e7gZZWozBPZAGhZrJE2Lotosb8YHngk5qkc",
  "key12": "1sAQ1YYb2kzKQn8BUq5XXyWWL1kbbZTuZHsTo1UWZi41EYExhrq8TYAy4VUaDoo2eiARu6yrnT7U5aGNNZ5sypx",
  "key13": "5YXVA1yL7J38B5dhRviopaZfRAvP9YjMRkUky3SjSjSybU9qhTZa6XhM2ThmpJ1pYazZ6S2wt3bPNnm9kMv6bvyZ",
  "key14": "2tfHfmcnFLM3YNzrFpdUJs1xrkC1x9wva9aGJKJuP5PoLHQMfJ7ZgHqWwHAATncDxtCY8ipNhuehYA6eJ9xt69wY",
  "key15": "4yubmXxqQrRKqrVPnEE3jPDG6CGf1MF1vVwrpbJGNum4fejcFipZNvCh1eJvNmnRkUf59eZrN9AKnRvHHFigis9s",
  "key16": "4sEkhaDtuRfP2yu9TYFeSJrJ7H9apQK714cRmhPrV1gfWf8QSAHecJ5nekheUPPeBDuWzoAezmB1wZ2L9sKWCFyk",
  "key17": "2q37CW2BgkzNPgWfBddeCjhzDtrJjhmFPFtE14rUZQLn8YL5Y6djEFArEqwZyv5qEZKu1k1gPG9SM1LmithA79Se",
  "key18": "5kwFFJLubmzX6WMME5pNaMk3AMsYQ75dakKLbfca9CCjwVqaKvpkv7WhVDebyVYSkoERDznDQvyoMeba2SGNzuou",
  "key19": "5qd29Mzb8gjeDCu9qvbiQxFYSDKG2jqiRwxB1HcG4RumK2KcGb2twg5YPACS9t5vqaAWYBB8q28dynpb19aQxYJT",
  "key20": "5NF2RtTZoWHyqC71W5PmCmPKfZmsU1bNumkW35MWeGwestaLCqDGzTVEFyW53mYYfdmc81etcqCewTEibTCWTLn3",
  "key21": "BhcPNHp66ddUhD5tLrLniGcG6RSQL1JYJhuoVeq3vFrX2GfA9fmqphPJnHRh45Dvb1GnGroFxEguhrB4gNR8SpY",
  "key22": "57H7rkaqkeMYAu9xg6bTr9PU4kVPs1qBZCd9367iwhoczuHqupq3GzfEEv9w1zfY75dfr8MbeXSDGgYev6u8nAiD",
  "key23": "4vtKGMLTRdTdUKseHQNmz2tq8zNjSqVcVqyLZSkFdQskqrpbLC6A2oFaP15AY68jnrQxrS2rKAkmb1bcFnb7ao2e",
  "key24": "3L2r69gf5gcRaeYJubvFBhkBhdiGBxho46yjFJBX4jwVYuFwFRJN3WwrTjpz3mi5nkbyGqRLMecn9W2cQQWSqpnm",
  "key25": "2JNUHwvAkqrWSUQaSHWA919NZszaYnUJD8Sth4S9BAgK4WuEhdT7QvvwztZ2jb7fDYpDkph1NC7tX7mdUL2r2Fg1",
  "key26": "4g5rE9npVbcCMCDuqCPETyUTyo3kjjVPNUG1co5NWKELgGspBk19h9ZFChi2xwBvwuZvXShbtxgQRnGxdxxL3oNe",
  "key27": "5dKU3MRAngA715VwT84PWoyofMsARnzUMEmXwbF8mVNUfoRoLGfMGTbCdpTXvDmeQWixQbed6H7dyG2G8rTgYcbf",
  "key28": "kLGbkYxcnGC48t2YLBwSc7HATkXz1x7fzT8pEFzcoFYb8JJj5j93jb3oqyZNaaYFYTe166nWaL7STdqmXUYKLBr",
  "key29": "4dLpE5n2jk7YEdaYQgJzcvWF78u4RRPYHvcRH89tJusB7XmWCmwvTEjkFWawFQfHwmjqqCTtk37HCG4ix3W9JsMc",
  "key30": "65ddZxigEWRCj6o3z5evGpQNgbfj1nUhghX4x5wp6Pdzo2mzvzjupVwMXMiJ6zc3DUWXPbRZpUXZhpz6U9t5zuuD",
  "key31": "5imR96xgfxyFHF2wcFh2r4vjBuUcbEBuxgRvCQGuJqL7592hbmvuegiBmin5eXi1kVXZ7mVyYgQppRXg1tQAp9kQ",
  "key32": "2bgP2GNWuQjxaMEV4AMwZtGVuUqKbpw9DWaQx9zxffntU4pmF2Xqx6hg2wB9UMQm6ZoAXeqpTw3acgdLRWErhZFb",
  "key33": "5GxSSTsu7hgUp7eh7moCTVcxwLvuFo1XDMpEgxCWjR4tPST7WNGF5nisTxhXnq8A132z69gRdnfa7EWwSZ3ECJ2i",
  "key34": "HnTiq2aCLqRiiFVb72856aZF9ooFz5eAyNA2U5ezXKxhmHQ8ifqDX63sUUy6PqL3WDkeR6jT8YNU7rtkBgdHSsH",
  "key35": "3RRadtvdrfHMv8gJELvHRtAcaFKY7i4fdwXrSV52PL5skz6w92Prw35EmGcbTHrzZA4tFGJBurMsbJpgfyknozKa",
  "key36": "2yujreBKsvXkAdmWmmbdy6A8DSjXcmcXpDnRbCrPKcM7msQTRjPm5bo9PhMF85sLfdQixi1nv4YGY49UpHY3s5jh",
  "key37": "QeNG8qHhMukcXX5BdhfDC6bUDGZSWf3M1MaNjSzEVAWNXgW3ERHDNtFhwYqnViPeLmjfriQPxjkw8njD4RLpCDx",
  "key38": "5t6dJShH7Bzo1WdEBo2xDG1kMz1RBnCZqPXUqKscc7Z3tEt5QR97Gug6UbKwyFU4sQQ9wapy2UVn4prdnstFNkai",
  "key39": "3w4jvdockJyZjMRLT219KnYT7Mx3oNXym8JmYF4y2ZTNNvEw2JwRKRFQZgBywaVndbAMyoiLV2gXcxxHQJFN3xFj",
  "key40": "5x4xxBoZwE8gd7ydNMjmx681FvDA1ktuuvpnDkxAyGBsvozgWv8FpRWZ9q25g6vhtdrnoSkdLkCERzjrgn95h3hn",
  "key41": "akLJjHKDr1bpwPAbdTrYt2po5m12Um9HPeQ9jHLbaBjkDchwD4hLY3e55jWqRTA4wpA1kNMAix6XXqLmZiYKvkb",
  "key42": "4daoW1peRA5jTwVrUWkv4aicerDBbmvoVp8KMyXZobKLKJMbNkba2PDgKcrF9QVveAYGk9JgTqMv2EvwBtbEDPAT"
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
