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
    "3nFeSP21P17Nt5GdapZAiK41u77VKDi7bMn1SwkrkYN2UsQCNXN1DxgZnTQxvaEX3R5SwWaokqHCciLNaZrCzxw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1c7sfhNYDmgjYZQa4VvBL2qrDPbacQWjuRXJPtgyzQVJELAqdoHLH72BRfoiVi2tqnqVYpfLgNVDDENJ5cKwvK",
  "key1": "5KM1sAkxMudxfn36ZHUGri6vNb4hJCbHR8fnhNrENyWzFHq91Uk3h55bnfAmvbd36cGBCG3X87V47kUS74h6tt4Y",
  "key2": "4vCQ8vEGtMiPfLYg3Yg5x3u4jvgWG8R3JMF7f6VVeDTGsA2yJJHhSywhxdfL8fydNcMahmadyZmm75SEECtnDoyQ",
  "key3": "29SrpjgFfJjza1LyiEdJNMcudvd4AKqZmZgUAkKaWH3vSaLbE11XvQx4PQmaaSrdXMbQLKGiLBZFp8pFJxPcXQNj",
  "key4": "A3xvndGdtz98jY7y1c59Cw2cFNSLYJQ5LPVrYRmuXP3UmAyjo6E6cA3nkvvLV77rqeB2ZmyggHfvA3bwSZP3HuV",
  "key5": "JjPvrbuJobhiGwtJt936zBfuh3hHLerzbTx2yXdtLGX9TUqwRcz7vsrS568PqqmyvCSC2m6WBKGmqjG2ZqjYA68",
  "key6": "5oDnZPG2zrFwjMR8ZPcYLMemn6zxfoXkxbYb5vmBL94g1PyAWBFDRZszbhDapsDNFxfPJBnvRHUp7nRQPU4wfNnd",
  "key7": "56qsL4iEWEqoRArVekhm3H44QuW4nxz3VgBAWBdXkuAYnu2osWh7exCy5Scm1D4tRTahAVpij9gEJ5ysznxfhpdj",
  "key8": "65zvmLirGDYFV4iNVhkNfRDR8mz7wsaNiPZW1Qz1dEJBRTPNG2JuKeMrLFMabi9GLceD1MrLKuo4pAtHqqRKvi4G",
  "key9": "2DzXvdAHfMWZVKNySMPbqjSUYxjWn1LoXMwLxwCyvH55n7NUYfV4QUw5UX8xTTN45ibnXKL77r9zwGGhvNNL2CWc",
  "key10": "2Yk7Zb5Qqt7EvpHZhJzqQ3vHhXxBLcuV6Jsc43H1mTMxJ6qZcFKyaYo9oHsQKbttFV2E8N58Z6hR4DFhtU8CBaQr",
  "key11": "AT6umbNXtAwtCYbLixYSGokj1CcEDhaMr3HFyacrMfeK3KyTrtX4FMiuaYKJB3PFL7bmztgqz8XP7wsu5RpnXkW",
  "key12": "cRGsmEYYvcR1Dzvz5VHXY5LMKuUBYJAivozprvzDZHYSkhu4NVmgKNxTw1Ste9oSLytbD7sygkwbNwKh6UjDmJ1",
  "key13": "mjT2WzfiK5oovHTt2BCp5fCCnXnHQmGhXtQRaqUtLqudeVcarLYFT9t1sNhSUiyUXRQwsGEnAMzsgQraJmBBhit",
  "key14": "3dhDzBF8HPSidcXmskLjW4EGZaomGgHn2gzGtJ9q8x4akMqqmhVPfciKaB47Y1FdhXXK3f7vzmGtbDgUWTwuXdPp",
  "key15": "3iETYP8U27Kat6NJvMtPjT6GzYWYXZVAtciF3oHNSkRthq4JN6rz84JRAuc6uq6oELpKQPMPQmyUJVUSBCbbtMG1",
  "key16": "3Rm3yAhSzfT5fkAFQyY5yvnu5Rsjd35u2s7o4gi1isYnmStQ7b6vkJQMbq3PA36iPE8z6bx3eC8PqNAugTb5gL5G",
  "key17": "3NLPpSBM8EoAFiPBNH3Ce45ECWfnBJUmBWzMgBBx1XqH83J8xaHCfyfdVCe9cmKJeVnHXbQ6Jd4B2ZNv6EYtctKq",
  "key18": "3fYndbJd2mcjaDPFu472VGwbH9zS4hqrF6R52pN9yhwxdnpguxqzjdv1LQQd8nLUM5ZZkdXh4CVYoGGaYYG753rK",
  "key19": "4uHZFyrQaGqKeFXEFC5VT23UNrnK7ADHE49F7R8J6FSkTDvCYTx1hmkUE3U5caidcSmerwXYv6EPgncfLcZHDYcY",
  "key20": "2Jaf5RetYxAq5rRuuTaWtMwGCwdhatD6JcJEZndqRJZonUFtB1gPCENShrKVjG8T4bSmzXgRVM4zuroZ2kC3mjgF",
  "key21": "4MG3MhLEEbqHB1wdB4GLBYWv4XYFdnd2gbdw9REsp3949bhbQKR2Dfj5SdcZDqEzduicdPGCVCDxn6AjaDJ8SmH7",
  "key22": "3vrNwaNzjtLjYJcNwDp4uMtscFzXKxa5FWjrfBw55yHP3hfDWyNh9uWKHxHcinDaWP3fxc2m9AhYD8JQydP3U1vq",
  "key23": "1prqqsjMUoc84R2rNfER82LqSwvMtdVEAWdjHemf4BtoW3YcXBKJ96g3dope9gZ9RniLNDLPubuUFvdVRTirnss",
  "key24": "RfCefhELBuyAvEUQScWxZ3wf6k3o5NbfPM7S8mUMYYU4TcJecFRypxYXUCewr79b43Xntgrg4xVvV4SbSgDBv9E",
  "key25": "2M6vPdTbFqkAZ2ySJmgiYd5dfdomkueMNcCZZeprD7oSv2bTjEdWrCru6goYWRjepD3TZRyYN3haqAodAi5YaVfM",
  "key26": "55SzLHwgMx6XeUUDBm52rBkmZa5ymgtUd58vRP6s7RF7rQArQXjyCVuhnMgJFztHKeujrVPPn5CGyyYfpeM9w3ZL",
  "key27": "294JcVNgjxbqT5sgvnwfquuAJxnZgr3ij436qtDnjuMoXN7LmzK1WpRSBCm5P55hNqVsWKXuhSyBEpyDcBFRkT9B",
  "key28": "4tTmUpX4PfP6S86YAFhSmZEpaLaLgSJhLEftY4vECVRdhYdBNpRSEQaxJEUnLrLTjWyNagEF2cU6s1E8fWH4gjB6",
  "key29": "2ngEVXkXQRKbxz6nnyKDw7td8MjcRMmV2XYXp9C7iWFJSQF1s95AmXpvK9WGfStsbC9xBhfeWMLc4yQ6EDWYFMB2",
  "key30": "24tZW4UM6eszrDHo5S9q8Dax511Uxg21Tmk22azPhPrS4CRTsh7G6AhqqTKYXX8RiPBvaYFnH9TqQhn7cke4cYHt",
  "key31": "2DGgRVXQBRBTk4JeaoSBywGi78KQWuW2QnsyhNHXsHkCWid2ja7bfc9tnwb9ZNBZjaxzCt4gCERzvfdbDYjNU97n",
  "key32": "4zEaJhL7WgqCmBLdtqTHBk1J82PR5AofzB7Du3Sxui9wssDSbauR5ySeGbdQT24YDsUhsBWU2to7ktPF6r5xbMt8",
  "key33": "496veqyGsitUBQ76usqm2CBBkp7fmRskwDhZJEf9fSBW7Dp3fZL9FMQHoyu4pMM2AwdKiTwY1ngXsJeyHUn9QVPW",
  "key34": "h4Jaxjdy1jgiPpkT7KXfBN9KFftrp83HJ4749zamKx9GM7qRJPmtibcagQjY5rSd3Jvzi36LpvpZzVq184bVbUw"
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
