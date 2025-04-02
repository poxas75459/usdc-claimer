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
    "43s95YCETBgHG4eNeKyHyzqx6Fpyur3hMtrPcU5b5bi4mBwHsXYCJ8wAhaHcNCTyxXKviCQ3z5t1DYqYvs5qxJ9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UEprumHvnxHMmJZf9L25PdrD52c1Ekf1sH6jekJyXKbswBXRcM8dUrfatyTVBfwiEyvgwy5bSMg2ZJGTv4hurt",
  "key1": "3aAbjviZgacpU13yQ9L11iUH3RLSKqU6ojtPyocZWTUHF5b8YhE4fm2ESh4jLubS2LqM27uCQ4qqS1Qj9bqTe4mZ",
  "key2": "649jAn74p1gXmxfmmHcVVVcVitNNS4bZL34p9tYcmxcBViQhsNXLEvkqXsvStLZk2GCbm8GrX8ETf2x8vsDUtAxn",
  "key3": "CiTogoaoV7nH6RViXEe7fF2rDfreAaQJv595UzdA8jkLHd89U4KRMZijaQGL4ZBHe5vjQKueyKLzYfQ9uj5FGC5",
  "key4": "5RZkReC9xNpiyYkjHatXpYsTKdFq2q7gQC6BgUxrAyRDKTPySooUypUruPwua7bbgWh3sJCX4ToShArxS9rtD6cE",
  "key5": "4g7Mhvb3FenLnFN2j9a43P3DtzCqFuyXqAkRPHbZPuNRjnMc1WDRJNP2SbJkcBNmB8Yw4McbQxwutAXorJ3U7Bqg",
  "key6": "426BedVxKhekqhqR2enM57CbDXvowWMguqdu2R4CQ5nmYPGxJcCoaLDS7M4RSXokJf4G6b89GXBFhVrW5qvA6Fg",
  "key7": "5DHN36haiiWVBPEpUWtoc29ozzwuzkgBrb14VwwohpQyt4oFZfrxPGxBPj9bfkWy7Hxq5V6nzARp8czZAn66pirM",
  "key8": "3RFCPvcvnFSbYBjp2ybKafP437dn2wScPPBePCXpsDbhuoBy8sPbxDBDJDu5MczTPR41up2VRRzs9ZPdMfhBS85W",
  "key9": "5ANHvfA5M7eup7A6523qmVkjkpLkA3JWkwAkv6JVKtVoBdMDKcM7PAfCcDGkeMBU3k8LyYoTkST1pVpQ3DAoKTyr",
  "key10": "3VSujuMDtDGMrdcWEyrmh4dMYmAEhzN8zL5VVXhRLP1iwRUTbJ7x8ac4vQCRASakXUbjoH8ugs5hzwNL15ukwT6P",
  "key11": "62oPabvad3dra1zyEAeCoMHLQycBMd4fhXi9NywSbmzJpQvoxeEuFxKCxjvvzosbyLb7cMCd2pqYNu7jQboABf3z",
  "key12": "5FoPq7Ry8rqKZABXLG2WtGVyqVkjmb85oZW9hfa9F6E2Byv8QZmHZxTBZjxBVQKbXkp9tuw6CUwxboWpbtSPsY8y",
  "key13": "2745NvM8hVjWUT79P1mA16gbrnXFTDjrxv2WZtB3Aw6TH2pgYCbd73TNyfQSZn4Hu4kHViZBZWoNxgQEg5se49sK",
  "key14": "5Xeir9pg2cWEt6sRMBPwH8E9FbUoPNtqbDcaEvrtXWym43E4xwRg1LEV6yJwgYfWH8xKoegfAZcMY1LwjyyXP5ev",
  "key15": "35EbnckG9FYGYh7DELwMqK4dr6rRGaJcVbTNV3yARRrqDB8gT7Y1t1BsaMSTJ2yVPEDanSYQwWjbyCfW9NhuJ2th",
  "key16": "2XUKiGGt3W4jDUxJTxs2fJvBresZZSe9XgfkEabActc4i7517LnmS6NcE5CCooXgrBbYZwZC1Wx5zfvjVtH2uwvB",
  "key17": "5m4B3atgWKT4UBXLs1b6oe1tTNRZnsj8KP8EMw4zqeucpqZ8rv6jioyVZtu3u6V5sJGoQNWRSpTnWA2jjUTiLNgT",
  "key18": "dR2YSabjCsEiVuXwbqwBn1ZEaUiPVMffmaKfzXVAfRQyyF7sBH52K6NuBFSiGSvyemF9xUxTxevm6fv5saD9u8d",
  "key19": "iKkM1Ts27CfZSifMDGj9ycQiyTGuku8b8XWPVjXG1CZhmgrsEqCrxFU6yJMA53GpEMvNetkj5uMp9eiRWT3zEBf",
  "key20": "5npuU1P5XkQ1vXrHpYZ6Mm99cM6JXemFdc4KBtbs3qkotSU8rpuZZzR6Qd3DKywKdqmAmDwsutin7S31xKsMr9bi",
  "key21": "5iUZfFCEJKBjqbschELdjn8adLLUmaQRiQdPLAc7MFk617cSorBbTcNdj2qeCns6WMLQwqxkE3oN8LCFQrYqHJPH",
  "key22": "yQv9UCtXizrmn57j2Yr4GfP6FGNaBAG8pWsWJy2JqE8hatvd9w48mBEcydFopz7TGJQZS1eXUk7SPkBPzjEzqRh",
  "key23": "2N2xv8VsPDqPtwL9XULbykNFsjR3k5RfqWCFB1QRWDxkKxkuLxpCc5UPQX9TpDwUwyPhjS6Jb7hKTAe4GUmrSte7",
  "key24": "4EHSVtnQpf512ngw9NRUpCaMF4mGVjpzyhtaDK7NDsYb45kJiaLXgcEstu4Cr9CZDEjRujLUZNifTP1s5xJFX9md",
  "key25": "3J3Xu6wVuhMiUzVz5i1CLELA1WUhYN5YzAW1hpSG2mdb4fiRiUcZ7EamNre7quY1ZckE3dn5kjMRfAmEuXhteoHb",
  "key26": "5REqgjGwifrZWAQrLP2Ads3NoBp6MCqw8qWZS8hsAGyzUxV3kXK253ydj5hpjeQ3eFC3E2RMF8X1HMiviCZ5eAPU",
  "key27": "3xJYBsZmsr7JZ6X9YE55nZnHLLp1fJDncSFvXA6CaqkCvVjAsKAHdxwvxZeptMe3U9ytixKgrX7tKbBexGk52inN",
  "key28": "3oXVDQycbENUL3ATUvR8ST34N1AC9nPyZKXkdiCUpKwkaX8DuQjm2o9VWBUdDEJKTtFUBSrTYuoPADmZ1C6x1hXw",
  "key29": "33pXgsMoRVBHbptrCx7kZi5hBp9aepN9Phau26DbAbnk3CSNbpF3Py8DNZvo7cnCd3H551NYSxTRqEk8SaVmgT91",
  "key30": "tMU9DahiNx8edkW5DQqdd1gvPajxxFCjWq5c91KGjBnqp62nHaMjDvrrrouWqfe9Dypf5FfWnHd6RdwBt38q1FM",
  "key31": "5z4yUFz9euL3bCbctRH2oFpyL2WEiJK44UAd1Y4PYTapqAnYdN9Kvrydum7wfYJkW9KuUNR5zut88zsh5x81rb5x"
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
