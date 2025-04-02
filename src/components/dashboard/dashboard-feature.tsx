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
    "2kApwvCsCdXcAp2mFnoUABdfVZZyy8kNEEAYCfGMVtrjwxFmXzHErqor5bZ433vMEtV79gUqZTAyu2fibnfs9w3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FS4BkukbKrGG6kGWrzJy4nSWzvTiMuyPGXXjePGMJgH3eoeoKtuim2DmKSHRACSqF9ccsbjwp9cLcQWErHk3DEf",
  "key1": "3DAR9EBoh1vUDFiY4XTqq8yau3EMDnaQKPHApkdmwzMtevBxZw3AGDwdBnPwchsFceBXgpfkeyLFcn1hK5zZDAsY",
  "key2": "HZkwePLeNUMnEgwEcpUAB8UzaiddDPJHonnwKvu4htAysfz2yNgafTjUV2gdMcHTHnCR1doEAzTqh62J2838fsC",
  "key3": "dGHc98LLZg2ihhtj8ND4PWcWpD1ud2CP9dzp2jjnM4q3wdBV57WTHVhXwLT2r6zb6dqpANQB93BsAywvgovu4nF",
  "key4": "Bypvvr446WwMwuF4fPk8oTPha9fcjhPUuKE1nWUjWHHseMHAZy1vn9oGAcxYRgCcWDWH4pmwtrDztumZJfhi4mh",
  "key5": "34D4owQ1dVVEYk1ggppTGEHGZ4xFmGQzHRPaNEBFF4L5u2xA4hjCfvbTzXa8k3dUnsiaYMZ18xSxRZaiJg2ZyHSn",
  "key6": "4nwMDYk7FoZavdZtZvY1gjYiMhcB5wTq8zwXBqSRUCQagaLbs1C72WQ4vF2YW69MHHzdnLxMFiJSGyYnuWxv4uGB",
  "key7": "3D4p8A59GMBjxXfbeV7QE455gsrThpqbzoA2A9hbfbxdrCR8s1xpxFaHW3HGUVe5bo368CPphmvZdTvexXTzMjgh",
  "key8": "2TjK8z7WgigaY18vAPKsWNdVwBN5vAhawDX43Jm12X2FwLg4gYX7aijV5toogmiSR6HmJW9y68BDKR5QXTyu16gB",
  "key9": "3HL1Uf5emUv8Pwoe9433uQkjgGvFiMHyNCLCeCQrLLr3nS9gLv8SbqNcJnNHKYCH3L8b17bjyLjBgfsCyQirD4pR",
  "key10": "GfZbTv4sm3wjiLSNZXMYnZDKwmaZ8Z7kH1wE7Tt9ntCgTJJoTHaCweqEYLmSjQEKpFwGGQEQPwBtiMgZH7i8Wtu",
  "key11": "4mcU2xykNrpPJwTs5Fa1bpKGiuLjRNpkDM2zoy1HkLPcKAXCnbPwZEhfzMzfnwYpibNnEj8zFKWfRNxdpF3H6dfh",
  "key12": "5adSN9s1pogBEAwY3LR4qNiKzihhD6izaeBK3VqpcDqvcZimhgq75eYiHViGDJ1A5ehm2hqPakzHRr6jUaJGchTD",
  "key13": "33DeR1ZxJdbrTQEtHxmLDASs5dFtFrvbFUD4LXdzjUGZAnLGBWD16WjQW9mzbvmtFPk6JkKTBuPYjpp18PCLj345",
  "key14": "WRFTqvPVMyr5sTB7xauBCAutadXZeMG21sPo1TooW9nGmURRSXyy1Kp9pPJQd9gXuDNQ1F2QEvH2MKPmLYdUfC9",
  "key15": "4EyNJeRBtzTk1bjMLeqbSydsa7hT4EK8f5mZbXeDLjA5paFAzLyS7d1fKDzxLY2VZtmRsVzg9snsRvtzECPcVyiV",
  "key16": "4JZ1yR1wJihgTB1CYRbBYXztmDLviGJoMtJy9UYBxNnJ28JDWEBxw9bEKELwerE7PYfd6LreCQxTMreAcaib5HFj",
  "key17": "6A9cHpMy8fKxz4MjNKr9yqxHfjpBttFcveeYbAPu1t9Y7LnZ2CREoueQLzva61PfKa3hKLRSo32pd98PmL74DpX",
  "key18": "4r4X6DL69heh7FrDjABSW1RJuZr5BSzXWZi6ma2AMXLfMrF4oYxeT6FMfH5s5CoSm38R73zXMnLFkj6TBnCNy2i2",
  "key19": "4Z1TkFrTywfXLeGyEK1drwrnJSuMjmUfg6TwfokYZrWS4svqxyVFAEMUXxo5gMiEsWcmaMQSeiJvGZ3oBajk5AfP",
  "key20": "4j8bnfrSCR3J8VvjdQ7cEet6b3qik72V8HprF9bFV4rPsFrfV4FgizrSZWf5UHiiqbWFDXaRBsYJQUWP1uVcmrmS",
  "key21": "5jBDUVK3w1vp461dvSW8HBonhkhZWnRg9yeefiHLArTRsiddbzDC1x32MEgAqTQbTNasNBAhCp51FAC9AfDXNLYp",
  "key22": "3fSooLZKGisaSSSj9wnn7HtkowYBD5Gyuo3s9v5N2Z2vP8eapiBGH3JLGxTcWM85ZRGxtvc8J8Dd5jCBC9yRsNAi",
  "key23": "oMUEd5brMhiwQTVab1dHaBcHry2NkN8u6pxA87PvqRC9KJUcdNvh5tMYVXmt6YwFZGjxptQUoyXLi5zuHHHuTPF",
  "key24": "2yCfQPQNadihbiFiJJ1e6geQTqVBEYx37B2r7eM4V7FWK3KZ2C32N3ULyffdkufbLJM6L6T8ZFqM9UJr3WaCeQi5",
  "key25": "5py93aJnnqoEeDH85HqwfHEH1dyrcin36GqQi3MsUqzDZyt8EhK1acZwNB1VFzAwfg4HEBCKWPNyLe9i7dRNNsjo",
  "key26": "4HXSTzX154BRZHeV4P5Jd3djCMMfPoXVHUaMX1qjDPhE7JB6b8yWeYuUBb94Cmb1RbXXLUgToCQpKHfwSdGxSoUp",
  "key27": "37RTDMtezMXgNXRmGRvtT2Bgc6ntbXKJWmJReFvem7ySfPcxagc8UP6grZCiztsJdv2JfSqB3uANnu7JmqZjMcBb",
  "key28": "2oHGjfV1UmrzEe2vgoUYdwVesF2rpurQkfePWz2i33AfAu7UyyUjmzkTsCnCsDb86CehYrDwjbmVjv5DQkMaPYzF",
  "key29": "R3DnVoZsMZ4NRNe2RZpgpEXRp4V96HYRe9s38SmDGkDzP12FuRhzMsjCCQxPyWRFPkBo7jBDTKtBspKtruGxNUk",
  "key30": "31nePgWEu1GBbgPfbz57JbYVpshDnty26zNkm3uNRb1oW1iAXBTakABozYqd2Epb5RNMp2Ejw71VB82jM59jfFkg",
  "key31": "4zhSKeghHXL318my98LvvUUL2b743S84QvJ78kyqLsao7jaHBMjVeth1L6z9q7WZG8Ys2ib9sXKQ4p2SdvFwU2Fq",
  "key32": "o9Z7ERZdL5iroobYWxkzuHoWz6fMM8eQnrmdjMJx4MNqNQR3dD4DYuHdDQoz6ZmpcXu5JrKjBgiSfFwStJi3o53",
  "key33": "2ECKiYtTTXFuzW1McRyTW1dHpCKuKPABoHmQeEQZetbGXgGWUogo2Wom5NGqxqpWV8x7trYffWzDkwAb7zm9LdVZ",
  "key34": "59AE8YMqhowMiohs558tM6d14uSuCTT3u6UmLSZaeUFcsavofmcAZks18gJXyJnfNUEBpFB6wyKEGR4ZqCB5SVhg",
  "key35": "4SUr6CsptE9LehFqsAVFpAMsfis91fBQNq2Kjdz17CD8uRyCuXf8qsu833e46iwBo1xhzjmQsNnPmv5VNC6h5VYJ",
  "key36": "2WBrqguAV1u3Zrm9hZuPTb22KDQqcody6fp6fKKWNmVThxFE111z3bBXVwbMVo2MKkNShV2yvciazoKQQZdHxhaz"
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
