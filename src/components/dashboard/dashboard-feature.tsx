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
    "5W9mrqfWmqp8XhP4xFTAv41ToSHm7cAZbPZSPhuWZpLspUxTvFA9RiQCMFmHkEkCukLocp6gHZcSpF65j6kxFwUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MGUN9dwiJcavKseDkbZdNTiZKg6RmntWJL3e46gvdHsJxqasVg8z5XtvMvdrGMkzhRkW1Zz47gjYDdb7AqxJyQr",
  "key1": "1VYfVsw4jWZgmR1AZYxk5KNCcUwsjHDSR6YKu5LapCZwY44Pu1TJc2zRixKWQRjdRRzFy1ffDbQZm8z4P3Tjmar",
  "key2": "1mbJuZpYjH4kuNcA17e9erBYejRnCB215Seuz48Ei8oKmcFJqcRn1HGgBbT83dqCkPiiaG8LkUdfuAwDnATFPLK",
  "key3": "5tLi7kPkTmCiDfjq6wfCRwvNSRQc7ty7t9JZu53V8KjC15dabFozfqdfknw6ZH46ZVAE7GC5vXRH1bbU3x3Poxee",
  "key4": "3fjzzCD5uGxkyZMj83JnpUMRiMCoGvwBvCdidugYkvRN3FFt3rbP4aPTe8BRFERvpterScozx1RQ75W74RzMvfRp",
  "key5": "4uQXKrpLM6QJpzaPCTxhvCSP8uAf5GJiyhgUFmBHK7FEa2DJo1S2vQSnk7Qp6Gdby5nzLugspSERUokZt5hmj9TG",
  "key6": "5JfijYxEUXW2EmsmHWY9cFdrgdeU2JTaqeK3X3hc1eMuVErc2V4e71pAnUYUM6rShyc1nBuyoJqRi8jMTyRKMosS",
  "key7": "uoszJhQJ7GqpTkPTca4kTvUM8Mfr1Mv2pWq6aXHsCy7PNy5iz2jEzEdGeJMQ2fPtBgwKNSXgcbB29VZc43qxZmW",
  "key8": "3gaRrCDCjc8VrEb1GokjHZ5idwy82HJ4wanCBdPN36YB4Ubyr1yvcLoU1LnyeS8NwCBEv9DzZJep2B4bw6uz1a1M",
  "key9": "4BTNHe3j5XrcXcJaUM97WoLfXxXUwJkbLhTgaLKYd3K2XE6uiH5MoZaK392nW19tH7iYhbc3ZGjK3MrFCxq7SxQw",
  "key10": "4cT8WiM12DdHd2gf7aFv14jgXK7Mkg1C8qFuVkgKGHfUaoPYaZ6KTMR1LpeiPDi9huqAdVyqxjjeE2n8pqjG7zB8",
  "key11": "3mgoYrHKbmSPxYcuM3G5MW7bhHzpM28zm5g8iGFUHXehNFMeQVNsP8EiX8AoudBLUHmX81sRLFFsGqAGhrfxnZ89",
  "key12": "5f1sKTCqfGrpKU9RBZxzoEpnFg2ta5CdJYqaqcN2rAhMURuZWywj2KqAoxcCcWw8hiNEzMs7ihnMkPUgRH4KugfR",
  "key13": "UhPJXHvex1zYoMcgQawM8BrKzpzvBqJ2zbdRw1s4J2dEcLtPJ1H6t6GV4G595QpqYz1J3CWnX8FL8uoVKXyycFy",
  "key14": "63sV4NJXoErwW5GL2dVhbN84wmX3PEWKHw5ESzoQPtFmW5Ty4gA478o43upqKhRCL8MfQhr2Qdo47TSEVeJXzFWg",
  "key15": "4pCGXCprQqDZNwaEoB7hMYHViZPYSgLYdLTWR2YYypVc9UnLQTbFGxzymoFqbudHdvZf8hLT3EHR1zPXBBXo5nCT",
  "key16": "3MWmSt9dYymBSpb25geiz3gcPMUtDS5S1MXDDvtV1UFgPx33DoEpuZfUvtuSNMkBGw3SC5VeA5qiaP18cvSXtkvc",
  "key17": "rWQnEY31mhWpC7TFuy9SKenkwjVJKZxQxa1k71ykG39gyrRh6evn3zXAhdPxCXyUCAAKFof7myztnWRSCZunxe4",
  "key18": "3kd8eqAxKqz7N4FuGSL7FJDFn7FPjV1TQ93jseLT6wdY2rMNsffAhDhpBETcpMg6EMAW5fRkD2XvTBswBRLtWCTR",
  "key19": "2AZSEnXhSWc8mTpBf4ZXKNM2CtFvNdVTAjPsAgprw5wzPgZJiFGqBuzDHA1hdxotNeLyxuCuqfjax9AepXimxGAY",
  "key20": "e7Rqsf8VG3ZujLPfmeJ2iCd9d7R3L3GpCngKzZhwFW1wce9PxaZurJate14Vf2nf4V1CVmAcq1tRJuT53nmD3Dv",
  "key21": "AKaaB7qotCqYHQF4oZqRLpYP3QkGgbs9MdKrWtS6guhGnnETg6UjaoFTP7ThDX5x9yj2c67Z28pMiUtDywsGnY4",
  "key22": "3TVfAMSdPRBokQ9nRGoMsdzxGaKVsPLPDdmsq71meQhHPtGLDLKL2ZBNfim2Jxv35bY3FwpvDLoeMfgeoAcAiWvF",
  "key23": "qcgSM1HSzZ7YU1Qr5sv8ri9TJXGfUiPKWoiz1R6uMQPBgZTNE6GV1zaimo3CULnVkXhJLAmz4PWBnpsnEYDE2m7",
  "key24": "3ChfX6vqk2ABWuGmN1Cb4BtaH1KpAiQQ4LH4emUVvVmEj1QvbueDWxwCxv1wpeCvNL2pZCoLYkTfmo7USmSNZ3d7",
  "key25": "4HU64R2kZtw4tLiJa3A1UPhxN2YiXsVUthPuJVss3wVFUe9HB5rUZWgoEhWxPPMK5GoDrKki9Vgsvmy4LkniZgHU",
  "key26": "3cdYhrkHz4FDtvTA5nip2ZTrwC62FRKWp3fv6BZ3YuSBQ9CZ3Jw2vMp16HXJou8ufxgouSHDHx2AzaNy5eexN93L",
  "key27": "5dCMhM5sAHpkbL1HXMoDbsgVQL1vbSujJAACnrikpD7tdNm8efcnb9ixdm9T1JiysmXTn5Xdj69Sa3oQJJSc2hos",
  "key28": "4ak93udFzaYSs1n8naWeLmuHC2ErKh9MzVibWp2Si51juxqbiDS9wL5kPGHQnx3dHX5u4Y4puvYne3mS1AVS3wt7",
  "key29": "4PucQa8ubBDhCHAsoLbbe17KUVD54boDvqr2SFRaQLGFXTA7X7aGvRCeUMS96EfKJhH4FpBfbPMn4Z7XboKZdSvZ",
  "key30": "g41c94Ty5eF94QnhcsfNRKYGsg668tQRAiMRS51naGP7Jd16E5DxcTHNNWcm2hx1RLGGWoh2CnMv1CActDq8Z2m",
  "key31": "2eDeuedHW4TEXbSgnAbfFxwaxfYoHsCbSSB9mLkK1XiZGLXi1P6MWbuggtxWWLh9GeNs337a48MnC9QP9TaVqN45",
  "key32": "7QorWLJHxMH9RJMi28W7W8kzaeEK6YjussduAcieMgLgKEcMrFL6gGyYGvUjBvMPRcUMjJddtR7WM9J3WNb221U",
  "key33": "4Gc8wXB3hgkMYCzwMdvwLVQZ7yPcHxBMG2QdLKmKTJoro7ppm32DBbbLKezpGmWLKW8qNGcdJuGz4hBH8TCd2jca"
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
