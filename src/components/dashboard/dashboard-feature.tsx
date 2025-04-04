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
    "3vPp2PgppcxqEXBxXaFCwFViDWtrdTeaiED9zKJsG52Gq3u9jtEXJAefn5d8pY3t3tRJrhRe8s6H4aFparJZRbvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eETYJsx1Rhe6RN6rjcbMtXA2erhAzvYMvz8UQpqtGZrcE7n83kjXLerpAsgnJS5YwgmULpnPjb2dLNz9YNXvJz8",
  "key1": "4QSdHxJtcR2zLmBUoS3bD4jSoLtTtnMYVnJbfa75tzaZWnyLSK3wLfM4qFk11k8bMM8pTuvPa82V5a5X4BSyGp7y",
  "key2": "gCNnZ21iT6Q44h14GxYSmuH7z2CnZi9eMcVX3KegGrhmjdM9AFcUcXCqw7qgdoK7Axu8GUz22CtDNvwX2gHV5qA",
  "key3": "EyJjZYcWDxTpYTHuyDJLkighUvrEKnjKEMJLxocQdFHcwrfvLoXfN9BJR85z2BpgZtTMvwju7bnYERQyrkuvuho",
  "key4": "3v6VaCRUXGsGsYuT7JcuG2kifuAjjEPmb1KZZWPepM6qxa1HgSQgjeu1SrHyY3DCmwZiucDoqDZFxUQz4UnqNTKD",
  "key5": "3nUtoF2hCcFHMK1x64Z7CXa7imVg5Ka5gaPi7hQE6A1s1sYmbyiaZkywyUT3dfvogqeVgJn7JaXZn5j7mifP696Z",
  "key6": "2mCtcKCAVhqTJYzV8ehjddD1WEkzWnv65YepqcNYzm3KXbVAgMCLi2Seth43GVMnPqnUZZsWkooavPn6qe2fbN4i",
  "key7": "3pk3Lo59fncXmhuqvV1CwjeDrBUJbMqBHuamfrCpRgJ84QTWZ7xmmuhWbGcozn86FeNVrcc5aGPjjfpfnfWYAZTB",
  "key8": "5tLqHxpw86F8vcrzSBL4hXAASmvP625gm4tS2vYMMJudcDQjeudJA2xgtAmXxsjEBtVrxH3K11oRmUPC2taWezbU",
  "key9": "2VHPV4SeN5h6P5eRMgsboLWpsfCZVxH98gYHiACrhuKskJ3ocb7pwxSA9Ke415GvnVWx42zm9Bp7vkNt8JvERdgQ",
  "key10": "TvuBooHtiKyPzTxo3i3A2Yhr9aXiBM8g61WfZLd1e44S8zKBfi7Jf9hnMWuNvVm6oXNgMNwSTri8vtfqbdBZope",
  "key11": "2KuTfvb9nNmBcpJuwxcfsGY9VYbn2ZJcJdaaaBMp9NbsoG9bDQaeSVZAo8iohQNCXrrdMHfF6NTkTGN1J1JDzxxj",
  "key12": "4JtGaQissgK8Gdek4hsy8qCXAYcdrb4tWwQDf3t6GceXJHakJXGVaFzr5TSKNYg2fdQFnaR9iPk2gQxP35kU2pve",
  "key13": "65sF7qrS47sJxvoWthLHLBqxpjH1whSHAmXewtwFtyX9BQih3DHF2j96HYRVqEMv9KsdCxPrBb9csw14pYgc3Tyu",
  "key14": "4fxuS4twWjZcG1eZvRyVWk55hBi1uLZLhEcyP88zMoT68e4V12D8dN4hy5VCd3LcSAzwejSgVT2DRqSwKLTUdDrf",
  "key15": "21XsAs8PVHdK1fCsUSp7xFDNyBwQSYqXXWiSK5wZXRrjWz6fZYQFPTvzVegXk2T9dnJKNZ9bnDAF36DtgkoVYrzE",
  "key16": "6393QoNJqAW8F7vw1wKtwqyaLgKUoCyL4j2Y2hxd6WHPRoB4tmv55iP6PhpgfPvYzynwqNx28NSnxn3w4JeBiPmZ",
  "key17": "3ViE5kuVkRum1o7AA9tFTUSJpKxxvnsDVorJWGahuojQhjXtSQBLbD9aaJ5xbx3PzwjLu2sXp5eZeAg8iMwVPp3C",
  "key18": "4YyXF7dFXVSJcBbVDCoBUdQVNYxmbQbECCvjXLSpiXVEeXbwg6YnNLnfaYryd5nHvT4gd2LYxZUDYLedjgtboADR",
  "key19": "3ZjfuhzPGnyY9zp8hwZ4TAcMCEKmK5xW6p2qv2HnCxsfH12qnwA23V3jVM9xi1L3WpvBpDmeuTkAdMky3LZaRXt6",
  "key20": "458BRNwvk574XFDHHWnz4E49AkFAMZjB7v4gQW64r8g3Hh9MVntj7deF4c7qHhHSGFWsgJ3zGLHBVpsu7Qc5uNfQ",
  "key21": "5M5UTNducbNV3jr8D4HCWum2v3vS9H9QmB4YmxEak86Yp4rD3FgvgddowNEVVUUkhp8CUfTdLwdZ3cj2Ji1ueYm3",
  "key22": "2sJQJbK3UhXze6XS8bfGZZiXbctBhEcUAiHxvmxPwYS8XwvHFW6cjBp7Zr3KQjbRdcuiVKf2FwEbVDNFPyJGQWnu",
  "key23": "3Ks1yKCaFy9av3ngzVJabzSKmALQcGqeYZapyXJGe5tuaFpvUfsreeUBUwqAJYDWwQyWvNdgsj49AQXpaR2egYqR",
  "key24": "4cCtR2doWgbYNBzKHU3E35AEfHDuCK6k9fUhPoxEcwRjtsLWDRnmM1T5RQSoUuJH5RZSQh4s7FrouvbqHWUxbAaP",
  "key25": "gu36TW4FmNXw5hx74bDe3QLR7hGqwmcnmUStryrerPoqEBnThwEeEowhtAjhNnD7gJFK3ejXHRPzN4Rkq6sSq53",
  "key26": "2x791VcsZ42VbFe43vt5FU2C8HXiENf6LPvRkarWRvXAd1Fie6dtJmM7GW4GAYVqawg784Sori6i9ESUhrZFinMs",
  "key27": "4Lngwx15ovoCaYa38s49ycN8miywemBu2sziPN9XBw2z78iQeipYMxqWEmTcVSWD2TZr4GwEM6eNThA6Rj3ywHqY",
  "key28": "2iWCpWstpBrZkGFRPHDxR4K6tdvLJSHVBqY1X5CRM5xqhDFKAJkyHFgXXXbdNwKQoLNtzb7yhKaGzgubXfFAWykp",
  "key29": "tTuF6G6boWHYZZgfXuqy7TSzrDbcN4Qnjnt9D5g8YjCr9W5bERzCCA8NffFfEND6NgZHQapgFZ9GSmowBzVExgK",
  "key30": "6toCntXYJn7ViX3uF6fMASXeKKjMyH8cDyrcFEqqGHZxCxUWaegnRXPjKGcanL4sdQpyHfM2XXLuFFK7saynZKg",
  "key31": "2issDKBJeNPjUsWr9iMMJbp3cKeaeKcEi1Ysuha3WBSivX7gVS6EGxPiGVCPddDXK4q9a16zzxJcuHhtQ6SgjCQ2",
  "key32": "4sLvpghceruUXrjExVQKYfs2FkGNWpPcU9Kjbf2KeCqjNVkaDU8GzojhP3QergwHa3XHSTAri6AaeyKsYSTdU27p",
  "key33": "56yGM3FJsSPJ9hJg3gsbqYd8QWvkmDhHvEPLXMZWjDX15HFmtPX1YNojCo8bTfSNEtdsrBynL1ZrwVuUGhRdyF8Y",
  "key34": "5JqGz6Tda3YRKuvgftg3uSaCQmz8n7dfAQadHWeouMQ3cjgNpvpzTiqF6JJECDPGkEZyzQqEzZpg1Dqv715a9QrL",
  "key35": "YTPhL4wrxWcyZcJ7pPq4STUwJ3r6n6ASKgmHeMnZEkucJKE6WXYVz5wjRzAW37r9VZRNH3fJa5rRD5Mxh48tFwk",
  "key36": "2cZtA4g8U2bZ97K9t9u9LCf36CxFNhmiYQLvfGhGomoTnYkSsMK7Y18BiNkpoSdFfEzAV7TKrN8NpNDmVxwZcpk8",
  "key37": "412LEpzTknYtCxGHi1N3CyfMoRH1MKDcJfWiAfE2wPMYxivarKbjJwHJjGMMqwuaZjZr6KecVmBsjg6WmUdai64x",
  "key38": "FeMvpyAQTTJmnyYwKzYpNBaJo33E5r1bGWkSc3WpwvbV62ZipcS1xRc4eu2RGUFHc4XnAfMuNQPdKaDK1nq56T7",
  "key39": "4z1hweqvMnuSbzAcX556GHqonWq5h34w2rU4kpsjsVqxwr411nALkeeuaUVb1jjR686ATN7Bn1aMUnk7nE1P7UCk",
  "key40": "5WR58AT5YHAKS2cXGvLzCsy5FZHGsNPqMxq1K5cuxHAS4gs5pz38XBc9ynurh6h1JC6wQZFmz9xm9tG2wn44SUWw",
  "key41": "5Q2wx1AHunikgtKhyGHqa2pQwwZxjCRLZbdJ8PSFhY5uWpXPH5PDnQUexJe2CKubBVvAtXeeWsNvGYesf3T6Db5L",
  "key42": "3jHEQ8Kh3Ru2WpGJnji2uViTxUN8BMmmQFgwbJ1T2vT6ARAt4yAqPcQ8r7iZLVUbky4Se9X4L46FMvUEdnrP7fC2",
  "key43": "5sBN2ZZgBkDkttGLXmHihFACy4T7Fz1cNEhJ51eZ7voxegsrNH7VmZHRWJ2pS51a2HnVRwVswvonmzha64o9ZeRp"
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
