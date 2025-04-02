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
    "56u5CAeAEMLWjcEuuRoZ8vRuMFnow7cfeBMLwYv53bWtuxQad5j6j2EKYMR6CWZFSf4HezW4oqChkDYhp2uWJg41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiY1FNhWB7kHdMmeF4hzs2evuicXri7JWXirmBtKsCwgUTg5qpWBLTgCjzLGU3MoLP4A4BzgWjxF7ZxfzuXpDRN",
  "key1": "3bjWsTAnWFg8tSMCPsJfowk3wTex1BTJnoD1KLrDqM8uuQDzZD27aEDTad7DyV9jp7TQbPPFyRCtqzdJeSqqVZ8k",
  "key2": "4iVntLV5VoCziJN5YnPGVsHtMZXNSoNcKKd6PoghKBgENpjWUm3S2nscnmUhw5QQR69XZeWmgwFwVYZPyk7MWRPS",
  "key3": "2smbRDq6FiF4e9S3LqdE8S2V25jjDBw6gQ254czyQn2z67Zp9BK6NDPRSAh6UEj9R6SKU7x6GyoRNxJbBJnk5Vac",
  "key4": "rXY4GGkSe75P7C123g19qKDzGtvi8ofLxAanY1fSEe3Uk1Geh154aqnv7nJ9fjV6vUcZkAs9m5PGg8we92EYgBq",
  "key5": "5vvs3DxHScAvYEJGB4k5Jh1a94iJtxA9wJHTGTTaR4UdU2zX5ZBMXw8NK2jcJpWM9Z7uh7c9iJ6QboJ9JZx4ncPx",
  "key6": "2jKr9nQEXfMJ8VDpN9ptNKf1jbWNvmzhHNSwUydWdEi7FTd2KexskfQTDzMD2t2jBx1z9VBYnngwFRUiswiaq66P",
  "key7": "yUnLFdxJovo6z9cx8rgaMPZKCxv2oXRnLDrP1F3p3ioreUSmdQbgS4duDCXvAEpaXeB1btPuKqM23DJk3hbNUWu",
  "key8": "3aBaEeJHGbJJ3hx7KEnfVfccuxQVtGrFRGKb75zN92YBsWWgigqZiR6jyFGYofZLZTeTdXazZgd9CGLCa24VQrga",
  "key9": "NHVn1Y2F8N3BzaCMLyY2v7zEUvNSCrjde2qKdhbbtRRgvjFk7QdA2z2h4kKRsMUFRPkTJaNHunJeLrgz7pCsN1m",
  "key10": "2bcZCK3Ng7rzA66S2Sdte1dVRR5vcKq6xB7jynsnoFSqF8qC7cjzTteM4k6JCowmxCa8xgpgAyNGmm76BTZkNdgJ",
  "key11": "J8h6HSGz1PDmQQuyCL51wee2xrc7nJnvJyQ3YjPc791gBeWd9X5oJ81n2ESBqKGYSrvyhyC2vkXjBR6kEb1VJdi",
  "key12": "3hDkHeJveYTiLht1NK72nh1Qck1tyGMVbC82i48UaGo8N3Qgq32BcTZbCs9zVT3FKmjemK7mvVPSt3G1sARZC9vD",
  "key13": "5vBftWvVyYBDyHuZFjNDjNE7XV5d5cq2DozPCzqjo25zczVnbcY3jamGtVXXNLwXRgnnjEaXPyiCNoYgPP2bhkX7",
  "key14": "5aAbtK9osMbYnSpS3zCwncyTw5VJshc1pk2bWkLFwfVNxs8P5n7XPbhCzUxhGUAkBfY2EmuAx2zW4n3s1zVLyQRs",
  "key15": "3UUwpfybK1HATTYJDFQ3Pk2cD7UfgZ5MHg3Ja5apFv1N3J8QQZo5GDiHqqjGQZrdZQRuy9xvp9j9siy5wZhp8uf9",
  "key16": "3LTvfJf6YhcWnkSQgMKXefLTQhNAGCHzAUQWDUt4NWwPPb4gaytNoYvwQ4YhpWbBXs6BDRm6DMy2k6ixXZPrUABz",
  "key17": "55xm3TUoAZgWsQqetHULww2Q96bRqNdeR19CXuyq6fS6JXiCP1ek7y3gsTz5YhjGW3D3xhQsRHxpJD28KSGR2BQY",
  "key18": "2wFFGKzhs5eQrFqnbQEdxe5KV4WjEoUq9TXC24zfdnPDzS434f8m8TXnpWTvZjsQiXYqcMVnDrd9YZixew8FKptm",
  "key19": "65yhUBjTraJ1BnH2ZiiP6Ty2gKueXEw1ALRdU5iuB2775nxMq5ANgqudmak5z9pEsZLE4VyJeDv1wW4dHf82uDfP",
  "key20": "3Q4baJSBojtiMP2y2tvMdX2m82Weqchf9bwf4mrknhazHPWumjfFZrVycR4FFQvCzgh9ak2xfwjVSkKMrNuVfuaU",
  "key21": "Forifzdjx6ZGCnk2QQiYkDArd6EgGkfU4J8jKzP8Qczr3pdb1GM8MinvmcVqXUszp5rEgoQgGofuUw76yJ4fiJ6",
  "key22": "4T4QssGwTKreD4BuEg8BWqSwvLfQL2eQ8w5MUdXPvgdFCq2Qd9e7LknE5f9JhbuhANLvTWjRVwFe9VYAMJgP4Gdv",
  "key23": "4tPadHbp3WmXBH5kVzn5yX3Le2Ay7vcoqG6bvFAF5DApfLUCWfJVU9TaEJz9ueNw1wUhiGtFAEM7BhXQycqZnARB",
  "key24": "55n6b9rwh7WzoJHaTsMMcq3KyUWaACqN3hBF8uHwo7bRSeBeMhTAaUvwtMdQswr4ccAkX82suk93LsYWgF978SpP",
  "key25": "Fk9FERMrehV6k2wRoAPxjm2fZqQDS2FCozLq5ycH8Bng443cXSKAv4RHHRqxP851gpzecH5WzpjgmtCWBYFps1m",
  "key26": "5WP52XZD6HEqRiQBsQyyMJBG2S5wAjtxkYJYX3oo5HuJXvhBC9NzXLqGkVkv1CYZijqCAGt6yrhmqcfs7zT1BwDA",
  "key27": "3zSmBEGGkTXLtzNXJW4AdDwk6WBQbFQ44SGczaLGWphAmPof1ShuU3iAF11XZAMPZEi1zeD8Zt5MGsHybDnPGDyp",
  "key28": "2bEv76dvDk949VVyNVQ1DVtiApaMb4u4d9s93HaJ8UMaVRmryF5SmdfhYLsf1uDfaofCzmveZKmMdxSv4NtFTJSz",
  "key29": "3SvdHAVmL2KxPv1NgFDEDGsiXrQ9PaBwXyUifAj9Gh2daQLo1yNyQygPiJq6XMKCba9RgDBZ3L7cocuFhaXS8eeP",
  "key30": "2VqipHfDCtjVV6joMBknpu4Eum1BjWbpiG9JZrFfJ9MG9APwmtNxFczVYQCGG5WLRrdz1eTN1638P71zuSiP6WSC"
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
