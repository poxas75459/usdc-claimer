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
    "3BDugabq2wXRYC7eQuEkKvsovCfNyuu4ivpmorAYRg28PNAZnacn9eMUB4yeVpG6h1xT9xFwRKV3aC6Kyejt3Bar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PYqDqDPw2M5Y36jpCEBd4umL36h96kTjwqUypG8PkUkVNqZyi5a8tiEAKimqxrRLFcLwkM1hx5qAkJWF7QqzH9o",
  "key1": "5VUS9UFGQG2XSbhH1m9yZcv14ru1AvD54nJBU5QJuSgZCSnRHDynRMBstkhcRQmKWmk3DMNryp8vKppuzKeN6mW6",
  "key2": "3BTzEKXQSHqnJdkic2ic8wSEy9dbVgA8guABfawE7D8KchsYmbrg5DNmRRd4jF3sRbs9jpipmuKrVLdcdzcEHa8W",
  "key3": "oJSyrSsgMHkEfELNZEYeuTAq5tT9gHbL6mfNk4aK4NGqjGgBhLejpMEyiY4DyXggYxwddSSHUaDAnWTscjLxKD9",
  "key4": "3433fwee4QoRCtaBUaTZobcS6r28xf7pckqyc285RNxoahHT8ZUSu8Xfx78udFV6qBrgFJVQEnoxJ8Ecusa4G7sY",
  "key5": "5nQyz5q7WAwPyfRx28VLNAzvMWeXo79bbGwTvUzsNfKPqaYyCWDxXnUJurfEuUa1b8uXduRF4JxHEhqmTRGMJpGc",
  "key6": "3r28AGB6ShJBPxTVtMYiwjghBavMHnjQo6LTAACwdMZ5JWi3ogJHbjZDUR5j1pLKXqkYTdyfcD6PSXp6d9pUBjTB",
  "key7": "LXRvYiZXPqeQaP4PDjVzo78FgfDMqScU4djwxe8JQguEVg8cKzWX8noLV95HbjPHS5Yz5SsdMXcRUq7NAXUfaAV",
  "key8": "5pDJFQ1ZaMcQsSz36M137z8qdHUCZLHFzvL5qpbNh2ZX6BvuBLFHdvgtSznoDdasPQhgdjKgdPmo1kiSdHDgJsEH",
  "key9": "4eFFK6LeDThtmRWPTbgk7Lf5z2iiPmYunjrU5UijqAtY6cN5ZVLhqJNa6z74jQW1ukQ82FLZEJ5JXKjy9eBMoBbA",
  "key10": "4oCNgTbvHSAzzrvqua7wnj8XiciMeYb8GwSsvFbPmoDHKmPrej7kWsdFHCRWPC41Ug28ZzqqhtUQkPnsDspNRMge",
  "key11": "4JceRcrTjAHp1hf7sVbyWtHGHqgpoc6pdBfGCqeGTZ5D6MGYPLJA4km61y9rkHuTWHm2fFFjVhKvsi6nAhhHPQa1",
  "key12": "XEb6xffPSwmSYvYo7tqHk1fKqRZhkh17LZV7mKSD3pFUd8HW7Gp9efXCekRNsNfBYN1btBu7vtwsTPspDX98oNh",
  "key13": "W4PJWMqP5v113tdisxy56Q5gsVsEMUQwHNtcMAhJqdrJT1P22EacBtGo1927XARE6h23LgsqdgjHQjsdyd9vnVa",
  "key14": "4NP13eczqWKsxSSee1gx1mNDL7ftGt26aTitkUhJ2v45ZDaafno1N6XkDbKNSCVdd9HiUapm7Z9LXgeaBZ2MPU23",
  "key15": "YYj8wFmx92hnn2ja9NyHws9m19gaCBeg69qYup5qifCwMXty9t5KkKDZcgc56bu7ee5Frwvn2KZxJqMhdsVrptD",
  "key16": "YdXKe9rwjvVuBnvsjnSSNNbUwz1cW6P3eqJsgHxvgaJuoeLyrP4zA4SjsmcdK5qgGHeTZSqzqdxdPuJ3PTBvmva",
  "key17": "5LmZYvvDzZkWoJW8MNjhFDCBQtvrGmUNjwoSCW6RcQzCkqL31gCCx3SWPhaD7LH9cVExeQiWGmQv4aeUEUNQEkSy",
  "key18": "4UCvXpEQCPT4oUFyB1S5vFMAbiraFcXBauSsZTtyRCvoVpddLT5aM8qHoqKuSxfBWfinw4mw5jo5CaDyXq7oF8i3",
  "key19": "5Vn4DTvBHfZ7p3RPKqAiLkWJExVY5XvArXxprahhVu1MqTsCPwEMJAb5JkAD6KvFdoyLam8FfPtavC4Trcg4J1ZV",
  "key20": "49SSmHA3REgxYh42Hp9TPiUeKCkdXqw38qwN44hQJ36VqLe8Fy856d4EshMU3Lvo8AExJ4VMWQQXNdKinb5siDux",
  "key21": "2jnSAgnBMh956CWizhGZddiMqargZwPq37vrHUGZ5AQqrqQY3pV1uqnP5uiZxzA561JrWvrwH3dUGsm3Ho9DWU47",
  "key22": "5NnNJdUd1vnzWn2o3UhECoaYDP9hrLM4HoPJd6nNEybt2AJ37USbHC4qQE2Pi8z2QRztN8UiHAte71n3eAdnnRyZ",
  "key23": "64ka1BzSf6BZxG3nUZfEvctZhuPfHMn9k9vPod8LSuvsfCKhdkhyMUqwU7bLRN3nwuh1eVFFFLnAhfxPzynpyxDP",
  "key24": "3TL1nTnMneD2b1mEM3zY4XHRos8VuoGsbhpBjXw3EM7ABbR535DT7etKs2EbZaxHJWha6s3HEBqNbd9kbSoasFjL",
  "key25": "4EjALsHF5sb9rkhGtBDGc3tsBMfwBmZRzMN4jxmsEqeExhtUWbs65vKqj4p1QrNykNNFemb3p6TNv9fK4GQgG95P",
  "key26": "2E7Ki46f9gRCxAG8NMtchqWHc3EXsEUrSA5iBEoHJvVYjkZfPLMAg4yJ8totXR8CZ4bUVF3dbaYTfyAg2zPWjvfn",
  "key27": "489cRxapJv57Jttend4CcuMR6ey4LQJTUEz3KxbGZevaALWfByCV1eXzLqH9Pshe6Hejgu54YPdv3jmLVAJCVBuP",
  "key28": "3aSBokWoULjBt4Wg6qqa58Y1d1kiM8S5FasijAgjwgDeWZ1CazmdZd2cMuJ6DhziJRQYZSu9hW7Fr83SPY3AxnHj",
  "key29": "4Sn7A5f3xqoHM7b55QitCgbUC5L9y6aBuUFHET5KJjaJjUPWfQNH8QHWp5E6MpfDPX8GN6zguPBK8CGTYPigoZJq",
  "key30": "3qVc6RmeqF4EZhZbgqedBgpaHHgmmJmeMvdcbKrXGHtZMaEKhR5AZyKuiBgkYy6BTJzR76YJNv7xUYpoH9e8XrMe",
  "key31": "5L5XyrRattEadKtHwjEweCxMZPAgCtK9u9WMdCsFWv5ypoFqzBi2BLVrtv29QeNcCxqiunFr3WudMPtHVkgaNgDz"
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
