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
    "mm7HoTGuJFAHToShrgAuX7cLDaK522mm2hHvn7MNtbUhzK7Figd6qhBEphDzY8C9tVUJhUJhvhyh9oLuVdZYbaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SzfBdtyuUJ3HzRF1YGC3QASomX2TrTTqfZAYPbvgSUT1g7heYPWqMu8mDKH8ZvSHtcQiVn5v41cfSqxkxXGCjC",
  "key1": "59GPjZgiC3PMEyUSfBnpohpCud8yDdzqeJMFFZRCsBWHEmYgq93dP5UbtbvgAxxJsjvxFXh6njgL4VoXgEwKPtko",
  "key2": "kb7rvRDiTL1t37R2sYKKufyNqPCZgWuMMHDi9qsCVArgvc9j6Fox9YzRC6fY2Pzi7yHSAEbGtVeNCN8c4CY6N2F",
  "key3": "4URdgBEY19t1o5YWQPBjxPp6nqbxMXwsyWAJXosikLgyE8vTAuM5FSKVkMMftLUYwob1i3wfmdY2iqbSQYkeAhhR",
  "key4": "24VZPNnNEhWtQak8HqoNPQFS3TpenSZmCpmM2AoNAHQBXiuotyz3MfRwZ6nsEAYWt1f5tXPxmUpwekcUdP6YeWA2",
  "key5": "FLuXEigsRH58tbgJcT6cUfLG9bjomEw7rwJsPiweA6Zx27iBASBvpNNTDchPdxfe5nyNUWifYFGNvRRTVMFg5JV",
  "key6": "3KSPjrawW4c5xigzfshaCwoiELP1nG5ZLPBeGRE2g7FruGocTKtQkuJDaM5nGbVr3m27AHG2pcsjhMtpyyUTqoJ",
  "key7": "4veg31cpy34QfBkt4jopAqzJjRcQHTLFHk1fuTN53GChqnpAcm8tuSGucfvSEkLzm8dS1JjMagSapkbpW1Eshc4L",
  "key8": "EDYctjLDunZjM45BMajRF4NtLMZH8pRS2UamgywSFLdgF67avASJtxhiT3fYhTdPPdjbm86b2VXs32LZsf1U3nk",
  "key9": "4zynPqRLcJmLnTiDzxEnJWx9YDPJEZqw2W4Fsqf1P9wUhLeYdqboXywGcrcr94WvZ8P1EsULSbLZYq9KUjAWgjmJ",
  "key10": "3zaFb8zyCWGtAZyXZV5phYMTbh5hjcu1SyDCPcLCXN9sraxnTJEWJ6ojGm9Fn9rf7zWgTKVy5WVJXyNKiJNeGytu",
  "key11": "3hAcpBG7EjgBokRo2T93MAAt5RaucKU9rDvwdBdrjVn95w5vn2ysXBfusXr9HWeheVDyymCLS7rFa1knXd1zRvtZ",
  "key12": "5ub35Gt7L67YycYctFNvGyKrqVgvrVr1woRrERTxV81JoLrTK5kDNYprMVchxPtgrUqj3PiRbBLZMZ5iqvWoDVC1",
  "key13": "5PiwtoYUonTu1pppUrEqqLpqsLB8hoBgYcePuUHPrSrm1RY148r8vQj6hjXMZWQn5EzwimEGmoBRGGCtBTswEwqn",
  "key14": "4Q99L6NMRomiQEdtK3WWJZNTrZQeWe3856b6gzPzwvP9LMBSo9VwkJr1BxQTpkDhXAdKr5HGhAqRi2XyUBeKr2KN",
  "key15": "2dPVtK4AbMbah78tstBnzauz6EUpfPLJvh6o5TmXE9DUkRgwiG4kuSNSuUm9u6S4AagyYvSiACn52oY4hzk2tyrR",
  "key16": "5stCfwdES5ZDnzdVvtpJZoNjznHRWRvH1ibNbrNjZBMEioFZFbYnkgnW4uak8upn56LjsN7LAQ8aQ9tTa9U1Xr84",
  "key17": "e9ibsQYCJuFoVxXmN8eg3qvprjwMhRRaS41nvzMGxJUzNwkJdYo1XiwcZiVpNWUffeaab7fFc782VhP576u2X2a",
  "key18": "331rYn4aKwoxUBepbE3m8zeGtDcJzQxPxnhobd4DCEh3wkuhGiNQcQB6WE98X2L3dV7C2RU9g3XL575UuyjqSLuf",
  "key19": "5uKQGB4EuEMV69fDAxUb7s5NyXZs2wZegoVd79HsHtquo22XbiWrYMvaLEKtXthqRUEPacAd5BXufXWZQeufuq3f",
  "key20": "3z7h3cB5iaqgoPaVpozMohYApNawNMuKTTar3SCjpqQqiecKBAqnFLA5Do2gDvV7Fz3JobUTt4DrYoSPV5nvB8KU",
  "key21": "3XHxtCAc7Tsz7DkYvYezAXHMaPtXTrMEsnwxTDi3YGdeR4CtgLwBPPcA3v1Y46E1qpSiGQ3ydrP2XuR4Dktf8V6g",
  "key22": "48axhDTsdhB5mAd3FXvLbLDqdmtgqhTuWxvhCW12zaJusb9ipQp85PQ4Sw6m7LrdGwXpiEeQBH95gAyqfTmiz6iV",
  "key23": "4q2Lk1HDhN2QpavEohRyYyxjJej15JuznnkDk4PJomSsq3ooXx2c19RqjZ4vH48tKE4nSpnLrorhp9tkTswraQtU",
  "key24": "4Af73VLRujufW45muVu69bjQZM3Ai944nu9rkn5kvuauHVn3gsMAwnJcjP7ETgRKeCgvRaL3cBUtiGRCvy63Z69j",
  "key25": "4vDKqTrzeqFGtEa3vzuokXAcfWziqfT6h7kbohXNmJmsYgZXzaa471A7pqEp4BRnYNMfywUpzvtH79kVw6myjvgm",
  "key26": "3qpbW7ReUUfqVZy6JqL3E6KgYJ8b1mqkrrmw7eW5iEYgannUse3Q7p9mdooHrnwnSCEJcT6Mn57avtZJUTwohUrw",
  "key27": "4Bqx4hmy2d1JzBWhyNicMgamXfHYTVHqVLC7E9jSEV6Wb9zUHc2prvoDNzm5EJhZjaUWEh2mE7zAy89ktFsgP7xg",
  "key28": "55woDTRrUWWX7kLf9pXQRB5XkjH28hzgvnsHSf8rKQxEFTFrC6A87pXxSnPPE8nQ4hYjHFcUsSRrV2TZ3EBvmu6G",
  "key29": "2xJTJohVVtH2mcqcdno9SwN9ezZMZTWGdg4Uvq3mjGFfzgbqseaZ1aAyUWNNL2HTRecrB5W8czQZjo8GZkhnoRUi"
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
