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
    "2sxqNsJCq7xYUQmJSRLTsC5CiFvBE1Q1kTkjGZJdXCftZQvy7hA1qYGf4hfN62T8VbbAq4KLKsrqLBketfbsP57i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FYe4zcnSiGy7nhKXXcJxfnNSwqiVDNxjm6pMoWzYVPjwVkPb4Nw1LR86bjU6MuZ9RD2wvEbhv9taZbmckzUGFfp",
  "key1": "2TursxZigMrGFpBUMHT3RpAnWmSYfD5t9vyZRZ1xMp2T5CkNcKdyVm15FLZmjbWxua5kc1ze6EcrZEh6MEaE8sNt",
  "key2": "3qBQ8yucTFzq9c55QwTrEP479tDsMBRSPssMsNq8H42EZUcuDDSybmogvvCksWyUBudkf17BMmSLGTw21PpTr4VF",
  "key3": "2nngXpr1bSkKaEjypnhApVo2wwMVpJt9VS4haqY7TuCW7nbe1S74FFiyVf2Ym87cSsUZfSC7BKJvv1tPq64zfLtN",
  "key4": "2vLoVCuf3sKNfLZQpP5qEbTopUxPt8KZjJYFAZTCjJZWuwjqYfjxDtRLBwzaXmYMHMjyBbGkYjrykpy3LUpqKPGY",
  "key5": "2JPAnj9eyPXWh7AsSLuYDzRAdD16nTNpfnSNhCekr3zR3KuAwqXLwUpMzbWx4ZEWduD3J1s5LbB67cXrjLvX6U2K",
  "key6": "5BFXQYB2r1e8uv9HyYtpn8TbkWcJGdKETn5mxptqime4jJT4BoqyuZVtmtqfB4wrdCTmzCWfufTYvFhh6uVie1Pt",
  "key7": "4XyMjRRZvU541Zwwuo3M1m6ZsSJePFgQ7mfzaBGJKTFiKPZ8ravAESFrv4osWpAAa2hxLT3evhkfoKWwpFF7Lt7w",
  "key8": "2GYWRSiEctfgtB7eqJLfze8Qr67fe7gwQgNJdoruf1eK1Ht34Q8HfjmuDSmpAYn4QoZpE9ButJ7sgWxQvvDRH8ix",
  "key9": "2QygicLcQVSuYNzpNiBFRxAqR3abcpksx4mvFdmCcMV16vYxnS9eqZkKHX8g5jpn6DyBKy8wWC9w6s38XsyqoEDh",
  "key10": "2qbvswi6jVav4z42zB6g2yKaih3hR6YCk3maBNmrqCDafgUEN7SC1EWVDYDrzVHtp5sf9WcWsYMcLF4vQG9jQ386",
  "key11": "629oAeTe9kk66KfBo9mF3uHcUGiqBXXxrYiqiBKotnyeALJTscRxZPFcL87UQoiR4AFfuK3ttt37kS7cjrFm3P5v",
  "key12": "2sTfGMDDiqWy4LU2M8U1HDqag48FZ2rHHSsGzNhGpyTbooWczrWupzaiCmps6rtghZrtKKatudRr31q7A6Hh1eF2",
  "key13": "MMZpJT8ZRHdEkHYrQhMme3Zv3d8L3iK5ts6hqWq7vkciY6wUfngHags4WuhP1vs8j1pm5fhYhmxTFKtKspZZNC2",
  "key14": "3qEmaGUxCZP3LeJ2xg4RzvtyDjTg4TVTA43oZor1pAvWYodDdgrMc4sZ76HoEe1NW9xBn3mgQsDUnwSL2WmopycB",
  "key15": "355fWyAaDhpA9dZ1Lug3Ce15owEJZVzgt5aseBRMLyw71vg9FV5y55Qy7qtfHPgUsD9cZAHTmz7M8tPiXdMWcGwE",
  "key16": "5gRJetR23M3TJMFfsVXdKAMqj5qZCNAajEcrJxsRE3e2jjFtnZpweH9nWMTCHdNybj8yHxwXZdopctAT5vuSKBVo",
  "key17": "3S2WdPXBU5wn1BxmY4NW4YWmmPvZZ174eoCkqdHd6HUXyg2RXARP2aDV384J2dzxXyi3JiDooM5LBwVxaejUvcPH",
  "key18": "2YzQotyJFLtGXGJb9gXkazBECZ7freiA1XqhDrAgEFsGnFM2m9WXkTNvvXAqfFfroBGutTLUAM2JA2kvyRP4EEUD",
  "key19": "EDbAFhzmRPwQdxRPeU1QQrg3HhB5BU96fRGaxy4Rf134kP8Vx5HYMqDwRFXRnUeYuQWSiyqHA4W3thBKCeKNhpM",
  "key20": "T9YqSoauiAnWPYMVjpAymSztruQbjeivVTycaRXUgKFvUeGu32Xz1zw5oNoNhaRWEQLsz3v16TxXfqDvbj8MPy4",
  "key21": "62fZVxEFLronsHuLWVrEpRBxbQConfp9ASw8uHnQj2cc3Lfsz6xHxUtmz24JCbmaoFcDYk1BJpu5oSiWnYxUmCzM",
  "key22": "3kW5CndKqLmLDkRp7KjU6HhGw38879HogwjwvWCccypWZKpeLNcSXzGiiqJ7qRtqvFHWV9eLB5h3ZGGpAHtBEmHS",
  "key23": "24iULdR8nBNszBapuxLwuSXFZ7BK7gZJmthfXpYBLM1UpozfFFt6UhYdU8y2xpKMZucWPL1o2oAHvpErvuFr5sCN",
  "key24": "5UdaLgk1r3M3Rkn1dLTGoar7hoZQNL24vsfHEviPT5wjHJovZ3JpD7Udfs2KoZsFyE2auhUTDoXixc4dkF9VTMqJ",
  "key25": "5648QiDFFKt2pX5MsDH4UrHpjMW31YcHLfEp4ehBwuTF5PnTmgWRKQJXZZXikjKv9rpvUgkv94bkeZTLyt9TWNtN",
  "key26": "55JyXXzVPzU5uUQzzVhAGvgTKHDXewiWgtTFcB2MuB175ZDEjqw1Mr8bTxDbjeaZkmwtXQosSi2XL9yE59pYHF4Y",
  "key27": "5cZcwRuSiseR7Fqbsq8yYvN4EgMEC14XiaYADordR2GJmTMaBJ94X4f13qf9AB19u3KxbD2nfR7kBvyBbK2XDwgJ"
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
