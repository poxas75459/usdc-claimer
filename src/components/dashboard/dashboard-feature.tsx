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
    "4xb6tJQuY7ftDNM21xFBQnCAVpab3Xx74GPqaXZCNNyF9MfGPQDKz8pL7YRj8xm2BXfb7rXxDtPjmqYRuvXYts7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uyLatHSvyDJEw5rgNXZQVkAJVjmRatNmYf7NGHyDb71VsBeNXLFi1AKGnC8X7mcXo9t9vUh5kQd1Wu7tYqqUG99",
  "key1": "2dZ7tbwdvTz7fdRDPkwJZFfkRLxS11zLVSVQNcmNEzRbuLGSoN4U9LVrMsdkz4trtSeiuRf6bbzTRpVkZxj3C7eG",
  "key2": "3WsaoSyEBZkxpy9TEgjek3odPjqB6HAuYKNME4AUag9mTnn7bbSbY6s9X8Jnc7EZPQQw7yisu8sVEkvgu5RjgfNW",
  "key3": "4D7qxspGFFxiMvpnuQFaB4uqyvuJBmLc564Gd64FsjxXAe8XWdMZmcsbBEjqS934poBmU8at9vv3BWzfGN9TG9EK",
  "key4": "3HahUvSjaCso2VvrwcfimCmJjhEPPJe8fbpZXB5bixi9ffvpHqTkwwbjXCDzpaKWv8jTVm6sFJeYHupeRSfkDLn8",
  "key5": "5Ut7SB81ccXUq7X8Gs3wTxYtrZGCyLDKZ3CgnzXXMb7ihZw7Dou4kv1mHbMJw4DqcEmxNCHTUCbzq7ue6J2qCua6",
  "key6": "4qNYnbTTD75RqeUZzANijCWCQ9vuRgAxEaa1DhSoRoU1oiz4isFv24P1vaXqQBCV7wqt42yJgqYuagmzqfsDUgNX",
  "key7": "2rzGt6baDyR2NLVSGHFciXLqQQRd4oicRBrijDqJctZGD61F17w1Tgv5VMcDa67n4nCLCEwDcoHN1fi7hDRNbUjX",
  "key8": "3YNFfCnaMLnbp2txYLUNrqgStpzdnCWB7Bh67Wjuv4GXZqoj9hX4oH7iJ3GMLbCMpDx6xXtYzBugk7s7EQiyfXWd",
  "key9": "23voynVkXZY5avPVRRMRZza4vjVcksVh855GSUkXw5QPjZuvo9NsaT9ByNTkgzBtRX1NwVyuEcLNuAgnPT4QAZkU",
  "key10": "2o9iJcATYdRXVneQKBk9yfXmqC5j15S9e4GSiLu57xWQYpENFCExfqXHVUrqkv8FQ44SbYYj4j7qf9UqGVNZZ7SW",
  "key11": "5H3aZMECT9jLDToJS8LacqnEo8bMqUgbepfAP4TEoBqBiK6rixPXQNxeGhLGfBZzpRXYQL9fLwBETpxtPDsXmcjF",
  "key12": "2DZfgxDG7c3LMmWF3QRBnPKftpQLiMRtL9UJy4HTyx81zJ3APuy76jwFN784y8GUvzDFKKeSVTUqvQgAZuvXkd7m",
  "key13": "5Lo49kV7AeNtrPDrdKuxg9pvqRH4aY1geKcP2s7wP7CBmTscmYswchv7JayT7ABnGe1QNaMSMguAZjCD8rNPsDJw",
  "key14": "5YMjUNqyxvXCqN8DVtAE1d5Mjt6xQDE5nbS8x5bsKbqciV9ckq685M4mmhnoLMpzzJmu4TV52hUhSZu8HzQC7RqS",
  "key15": "FvYjEdm2fchj9Jgt4McdjcwsK3tJwRtZFxgURdbvgsWAajn84NLciRXTpmGKiPZsbskTsgZP3avqzXUscBTRZUv",
  "key16": "22LZJCbgpoeZeNxEepBMDcLT9aEbPyJfJe6H4nKeiJCvtWTEKSmwmDnvjRTCphuwCdBjh7hbB8pLGXKBHU8UyZP5",
  "key17": "5AnU7KSXcmJRAJTxKPRLwVCxuRiBTjVqqtbuTNWQHA5QPNYGtW8jhZXi6xdi8f48xiBXx2GANMgFpQ3Vn5kRMDCb",
  "key18": "31fdN8E3TSjjW8LeBPUK72b2zfgFknvewn7KpAPLKHb5E1F2Wr4fAzsK5GXtoeaWaHTAo3bALf8U7WmDGKcLucWg",
  "key19": "2L9Gudn6Btd86Po5dpZqAUFxkArV9WZjeTdrfztxKZZY7Hj9phJ8TwxEqhgs4M7CkwoNi9ctUWLBKBcCZC87bGk1",
  "key20": "2EszHEJ5pvy7w8Ap8jXPjE9BLD7WHoZuKcta6687QB5aAcTgQ9wiSA3xunsyazrFGqtgBX19q8Db1BXreaMwSX7A",
  "key21": "2yDqkRwzh7NSR49xhRHe42LbJMfTvQgV4ucx5JZFyyiXwoWqf4HZTzq3d6VVaj2vE4vLNvLsiwTHgiqmuo4Cg1Jp",
  "key22": "5t3nXTikifG65pd42SvXKk96jFJ5GMAsGfpJPk7QcKAqpdcEGovjgijwrHvqZ9f2XhzYoYF3nJQqG78gvNjG9ho3",
  "key23": "4A1xqF4qZgRYvtkR2ByeKpqebCbbwajiSc3kNbfNphPvd39k8bXx9i5Vx2nM3aEJhDGdmDozJk1LMwqYZNsnfK3D",
  "key24": "4Wmr2Xe5PcTYFbFFoLhFWXhGpgb7fMgh8rjWPF6845BsBw3kPADa9v7TyKNnPVjEEbWUuWHJxrmG7vzeZdQ77uKy",
  "key25": "53vpFaQx68iAB8JirLYcLVpa5kgi83BystG1ZHu6tV5h1QCXJchFgp8wS8JNznh37gsbjysByosbZNKpHtLjoJ1c",
  "key26": "3weYRyAquR9Cd77ooDobBVbSijDQqeVMT8LQoZ6iFLfEMp9tVZf58KD2tksa7fVjuBnsMPK6VMLN2XpfDGiNFssC",
  "key27": "ZTNGg15RctApQEV89FFuqhBRrPDkVRFZE9xfF2vxncgs5oKuBcQCJfVQ3DrSruu7bbwhCJCbRtQRBj7RvmsXYpx",
  "key28": "5Ts7B6cb7XsDGNaxbr5LvijsFTjE8L4CTwvDmMqf588acmQ7Dx9yMv7NGPVuTtCTRmxYQfDp83FduGdm4pgUyANs",
  "key29": "5MzyC18x2zrxfjci8C9ozwPXt1yJX5HYEHb4Y74edBPmNTSrm16ZFh2KXUvmf4dVWmzHd76raCYDs5Lf4RUVxzD3",
  "key30": "3gChF4NEprBneJY397zZ17yc3KAi7Z2zya9G4ZCRm9G4xuHBKsTtsA8xUDabizdv8rjiZx7iqczNEzySESxkUA8a",
  "key31": "42M92gQcRpVHoJV4h1CeGLGoBYabpZ1BjiTDZZntxBDvjdft1BsngTHi8Jq8PNvNgqUBQEBtu45EeYTktmcfXSs7",
  "key32": "4PmjabMe5WSee1mBzTC2AoW8rDMr4QDYMv658Ko7UfRscdMddsZ53GKdnweWaSNRZvRxKj1S6W7Zdj4e5TrvPNFM",
  "key33": "5MneCNfFGpBthAW2sck1v1x98Gvh6BWVNfAYxVdkAUZbLsQaQj1JYRY2GTTaAfTgzCq82yC7S2jjkFdGFrykaVYR",
  "key34": "5miF6U31UpT1GKwzGQqj3kNFpNcu25vhicRXjTQSpgaNXCCqfNMpZK1AU9AsAnRvVQ4PLHm7VLNLQ9TBGjm5Atug",
  "key35": "5qpiEx5fMqaMvpuhoujEuBzoWD5wr7wHT64vq6167QBzhhw8FGRSD8CHihvAz2ZswaKu3wua4eoHT4HuLbmbk1Vc"
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
