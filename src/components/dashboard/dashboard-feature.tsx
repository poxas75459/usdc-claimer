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
    "3XegHabWn7XGGcb3Erc2AQPP45wt9ob23GHshkiVMhgWkZD1WQd4CoL3J6sbpuBvpV6oeGzeuNm33RJXadrEwFp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnfEdbB68pizfti5YRHEbGPzFGtt72NFFejFDA28WTc8y6n4cafiQg4dtceX684L4Su3mgw1wRXPRipGTt14aJ9",
  "key1": "3R6WrMCwKnra9QFxjcBk5zqJjg6SgMfawEsuvMxoCYDGNcgFAhNTQkXYgXXpbBsk1QdvTNYAVmULajr8uacwrPbM",
  "key2": "5E4VeHcMY4niwwgipv8VRnfiFzEqPkYEMg2oPhwTo884JezXuNMMmJfovuPhzTxiWZXgXab5bNRTGLnknAdyRyJo",
  "key3": "66kyrB1we9T7EFwvycQRT2hp4nAUBogq8otEWmfu2W7PRrrVWoEUsao8BDkXRz8keaMaDS6xjiEzUcPztPJrtctD",
  "key4": "2hwAxNEZGfTjRafMJkUJCmHWjXi7xFfq4yBg7Cc2MVx1WdJubq4FiSP4wb6vgWYUAiQGiuUr4TxgMuB8CbfrRiDL",
  "key5": "49udW1TKNiZJQZ7vK9BdHhrLFXNRraYXkLHbcNLHNRx8mvsYw4BK96QLFizaoFH7K2zADMXoM9oKm3yedjxeKyx",
  "key6": "5czaGaELj9xu1VcqQGaD3ScqxoRGV4ch8Bvq7kP2vS5FMq83PpG4V755WbD3iKNiRMgD7m9zZF5xjnYUMY5PtBFn",
  "key7": "3EYr3ZMMnuvq9n1WcEtDmEBHPEnoBAmjHSK8NyAS4fEFXAUdGL1LictVTewruA5WMUnMDyQuK1pu5RUDDDQLy5dB",
  "key8": "4VvP1oZXfQDxE9cMw7wBVwRj9BhtDxt6B4GGEJsHewwFV4c9nQD8egtkQeaEB6K4YaKp55SVsbJzXQ23CoDRnB7c",
  "key9": "ixbMaHr39gpUq2zDZmJ7DRRNVp2jNefAWNBfQNcJuoGJaZBVCD9GL7KY4bYSujPGPt9p58NJ1hU1UtdoEJT8ERk",
  "key10": "FgAA2mFLGcc9SFasxttjDxpen7x7yf6oEej1r7gNmxDrEuFuWDySxYhrbTSu9dCCfHRPVwNSeGjHnfVgBeFhDRK",
  "key11": "4NeW1ssaz5inzdqtgkkbiDjmzHXXEEdV77VSctyqnV2wzGCP7KDNCaKN5jfrCCpszgwV661pAE5cULRYr83KBfyT",
  "key12": "tqbLJpsfybyoTKJ9c2EpJB2c7MHL1Rch1MhDD26LfNYwZ1uBaAizRSzr2Qt9xp3PsayKmnowF9dW6QY5R4PHFp2",
  "key13": "3qwRs2qBreWfGMpFGauPkkX8nBtspZy9ZnzJUaBvX4LwzHNNDs6LqBuziWaNMqwvjqB5WpAoxKZ4cjpkooSRhShF",
  "key14": "3CPAscCzXna8RWGUkBAhLYHmFenQNp2nRoa7Fu4poagwY8DRRyYVK7hkuCh1wdnsdmeTJ1E5NnxBhTfnPC8m9Bbb",
  "key15": "3ubdUaUu3SpLiNdZFzTLKWRhcAHZUgbgeJ1KM547APNfGYTajrrzgB6uE6WCimvWaQHvr9eNCvkdMedcfkLzbojW",
  "key16": "3Wsfhep71iHRoZX8zMnYG7K3dzGrBjE2rqNri1V4wSVtfANxjhkE4FUDvDHNSjoJvLvu65x5zYC4tyXXweK2WpQv",
  "key17": "44CupLN7bb3EZMzYLJLWrTEYV2n5adFwMkE57LBe3KVRCqDbeWx6YEtFCYZkJzyX7YMPVcCrb3k8X38x7o2wauh",
  "key18": "3GeLPof7yvwmMg64YgG34Ds4NXRQmE7qBppghMRoPip9kzhXxJfRGNHVd4e6ibsauPsHgEvwN3Ay1uVjnsL7RyrX",
  "key19": "3fMRz2dWaBx9NDHiPmMFST1L4RwpzZpRpoFrQ1Q1f2W5Frymn8Ze9nbye7E28X5CHxC7rX6j8vvu58LCeCSWMTUR",
  "key20": "2kp5EWzwQUjrjEW9r8S3uW4ZUHc4MZF7TBZgMCquFeuXUXduqrmV1V4zf8jnHUjWKucy4yWDHsbeV6ho8Gym1csT",
  "key21": "2xLrYdk7vfbHJTMDoo5RHpwgUnV1MF3sXi2HYKnE1reghvb86B66SFoUiwgDzXaodwXhNbeg6eYVz1XhXHbmMU4N",
  "key22": "4AvsqPFQaRTq3fTJ57nyqqqKXPtKNXcHadm3mWwyKfr5iJttrQBESRuk7JVLzcm9GkpxbN4qNsNmhery42g7LpyA",
  "key23": "4wq8tvr2Dgc9mu4MEfsiHW9RmrgpB7v7pgztT9UNE8yw9qWbqq14d5Kv4SXPYdN2AbJW3FPu3KT5LxaEgykKSWid",
  "key24": "5nbwXsofoKfgkUQ5tjdNyZEyRUEoqsibdYE8gaZg6DT4GLGXfCTkLr859wotUVaZEuYnvvE6UVmq1bk3iEJBNAKu",
  "key25": "4gNPu3msegPFVbG8gZHtFhZ9KQ4cXekW9C7Ago5qpvbU9foe5QAdA4MGpVzLcVuMGRPt3eTbyQ6yiijgRGDD5tpD",
  "key26": "LbpgDtJxtAueNfCm1e1wmLrNwW2AaCieyqn8EWA5eG5CTo6H3NFWRkaRe55J4brH8hWik7x2PHSpLLuuAPSmN4K",
  "key27": "C9HENbfw8Wbsf2mBczjwhgZjz333CidJSMZDySi4ioxFcKG6GK8CwSzVtojrEVc9PdG8BnpGNp3CToyLXCWuRXR",
  "key28": "xXddDfrdmsoPbvFdCY4KkG9YrkirUCAZphAPsiHee7GWoJQ1tkmLWVCw5Ybt4Qtwru1CFMxsjE2vXT2sSCpSie4",
  "key29": "2CdpP6HDe5ubopa5NLS2TAXWP5wB5DGRondVXGRQEpcSn3RRVbVuqbyRLDp9oPg3QT136wqB6nhZhDeGVbwZ6Jc8",
  "key30": "47EayF5C2nPX32V111wjd4BLJFuhhHg8KbpJk6pEXbApy3gub8eX4hQin2fNnd33qVYH62TBhW1tdTwzu6WuSQdK",
  "key31": "bfwjYfF75DpyMWhLAY5LeSJAUs6fFdGRGe2gyamzVq84PshxgtNagoNoyhJwRLg3z4SRjMhSEKkDffKAfMuT2KX",
  "key32": "4uLpcRECQ4c2fi8rcew9bXJSKdrYT8SNYyC58Smp4xK8wWfrZPeRiZc7ej6vhzLsfTGqkuzB9KcLFKF2s9LYD931",
  "key33": "5kvZ3LwG6DL8JP1ZYi6dCMoPZYM1NfVacZAjAvwDbmBJuccZZM9pD2cj2C6Vdn3R6PEe24fJkadUuQJXeHnqoq7t",
  "key34": "4da85rzDFqXDCsJzu4JVWFUzmezXXdyte5KYrhV7Yj8yVB9e213T7kBMgWscSKLu5TFoxkcv4WrVkXWGLMarsCrP",
  "key35": "214nkdUsbfLAwQPFyEPd39samE8TMgZJaqrb6GQHy2C8drFVRp398JajsFXtDMDaMvrubd4BeBxcSbnRb1SEZ6ni",
  "key36": "2AQ31JyXwjbJk3PhZB41MZgc4G3fL9HsNHvHKMc9ZGgSvE8xdQVyWuViJb24EJdfdUpT7h9DZzhqBUPcnvp92jka",
  "key37": "WxpwLNvCQu6HDYGJjoTryksQiQjUJmAbfJL5TXMsLXivR4BJtfAD32FeNA4969PYEYCYYqjvrCPcKJmvTgbwH6M",
  "key38": "4Zp98ffgr9jCyYFuqecQTDnTW9LdBqjiTCkoX3C9CLtkqHNSNS3WLQMaTNec31G4uLnC1oEcZktZnCKVb7KBhdQJ",
  "key39": "4xWHFShJzHJVZKrLzdxnWojaJJVbwQXiHwnzpJAwTPTxeXktVKeXWcNH9xdRnpQZLry25VmJZWNPdBfbWjFgVJNs",
  "key40": "4UXE9t3s95wio4Q5vmCgZJAPk4Q8bd1zF21hgGQkpwyp1KVufTnmSFbQaVk6MessDqjnsUJGabzjEGf1cwyJqauz",
  "key41": "4fzJgsBNThG8314x5sMQx1vwzoXPanxuwwRnvwXuio6Y5EjFNELApiuTEgVeJym8xLdFyQYULQkVrXZmKpoSQaFC",
  "key42": "2PpwSuFYidb9k8USs8euUmGc2KdYQYX8x1mQ7pb9Jj5AafDU2zoqRm7wZCzYRRMNFmx4KcNiUJPZ454H1J5hjRoN",
  "key43": "2K3AzZAjpxTHGWeXJGBxpFhHpWMDoazxpnZsxxxwHMhaoR64AUmpPTJ4eTZ63zFC4yTaJ2meKzvvCc2jyCDvDgej",
  "key44": "24Fa1135nXpxYokLHTHXCKAAPGGGeo1BUR7LBZJUEi1HkxFiwPpCx9HHdVQZQe8539QvJUQHGiWhDAfrKKYcumzV",
  "key45": "3hNPsjyhh9DVwZy18saRiTf8pY3q5WQ8U8rFSYQbWwFDBjd9oCg4UWt7EMrojTdv2yr24ah7hbbmRKNzsVYpMwSP"
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
