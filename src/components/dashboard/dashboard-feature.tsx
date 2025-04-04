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
    "2cpg4c5iD8o5JDKRjCyYuzW9qf67W637iWVtPuxvMY4cSXiu6GruoaVisUJfXvx4Pu2fUEsyc9WxLYS7GBYc63dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5je9WHWizeoPF5bRyXLj3EVd1TobVfRJeyPvwN3DB2jRn3fK9JUksGVyZoafrvPnDaWp3nZiYPA4vinh8RBcsT11",
  "key1": "4Xzxo5QHPyYrNju4us5pz5azuThzcM6ECoLZKkQ3vucGbxwKf7UU1doB6egxyBm3heasJKQsW2VXhLrvPABiaB5F",
  "key2": "27eSjUf9hp2icaK9b6zbuAcQrDf4xuB1emYfFxjab5YYSfFZASuRGUH7vmhYSTH3BLoXW2twBYmZTXsGo2WfqdDd",
  "key3": "nHm2748WT3aRJ8ZfgsUAsDSoTUbWKJ1yZdizQGJDJ9xfC9PP5RW5E66byEJ3cMPorEgfcJtXkXijskScHwtFWF1",
  "key4": "335FQcgwXUzZtbXnVt2UwpXB85uia25VJtt7ugzvP2aYNkxq18rct9qs6S3WCMi7sy3nuQoHm27UHe1bDxR1PXkF",
  "key5": "5ysUVDDVzXGWVMJcQDzeNGxcsU3RDVFJdBAqGMovFQ46KyLsv3tv8VNhtwBuxPPF9WsVeZkfNSu7Zuao3XVPJZfL",
  "key6": "5FkRQfVs1SKsCHNPY1WqoZQD9LDp2mAYGqKREgEHLm559qMesCYio9fuQGaHAovohu2vTcdf7BKaJ4uvZgKS4uBG",
  "key7": "5tZbgQg4AF5CER6DxvwibGfFkKkt7X53W4wk18Fs1nxkZT6Hyqs6ETK6evK8BsTtvUkUHjBmfozxNhASr765h1AY",
  "key8": "3LKnD5QNYPmq5XeoWPiNxP6WqbvQfg2hWfq5BMRigzRGSmXPgmVH4XDQ1dmcqZFP8ZvVCi3P68wosPAuBghjALc6",
  "key9": "4nJGndrH8c35zJYgxtu7MYPobYEcKr8qnL4Rnjqf3kqaF1BAEsAAPeCSR3px2pRFgJzpTHk1Pea4w1Hwg8KEmKkA",
  "key10": "5aszVG27nB1HFjCThSE86TPVdTMJkfmeWuu9ATX29ti4DECkpsZBY8DDabseBrLZLWqaLg5oihZcU6SXGem23XeH",
  "key11": "2murWgnHMkxLKGDCpvd8xsDrf427qCmTRKVuLe1tq7LWAUTmRyT3AUx3RLY5Y3Ugop81yCgBwniG8MKNVnhpZop5",
  "key12": "7RwV7b6W36fBiG5WhNTX4QivxkKfDUT2pRZszbpUH7CMb9gGLZgQt1SBgZ1BxvTawbVVDyQCSdAEsdL1gtmHnpC",
  "key13": "4MsQM44W5RxEcGoJdmMg5XdKyC4zCVegp8qHpuFFPStuJDrgM3rL4weW2KjNtJk8CaNsN9Ehm9hGSzEoTKsDgbCv",
  "key14": "2VRqqmNahmWJ7uHP5hS38xEAWiQ2SjcXAte9PmfTL7ojv34oFSuX8d6g3GDqGaX6eQcb3tmnNUnHYMpyeRZ7dPG",
  "key15": "27oGxCLCvFKMzhUTDBjt4WgfNUHXQxNN8VPs1MURaCicXwPDDoFN1V7t1hFS79MHtZTjq3f8F4Y2dCX1LBJDzwpL",
  "key16": "jxPGP8YYJaTdaYBDT728ug4y48L1eKESqGTUjYcybGBpTSMvvNkQ7Jgb2dH4T3st59i4aXarijZWZpvGWFUqypU",
  "key17": "4PvAE2pj33F2h2DmubYiLAWntuWYogRGE8oH5uEgsNeAeeRQ3ACrDmjd8oU9cZwkC9SYY6QSy2r4hVLDDRiqEzDG",
  "key18": "3RY7mb64LwP5YZ5Fubu9tZQ7BskGX7CArLAJmjFyN82Xtu4B76oAqy5oPz1EHA9FDVQw4V7kNA5B9ktrwLsW6t8b",
  "key19": "2unTr56tMU8yMzpZfJHFvwhoo72aVyAVXNZ6DvULnw76QM2tL297MyhsekukUivnqqNdHoDMNHp4hgZyqhiXi52b",
  "key20": "2AX9o6V5eLivefKLfodU3dLkKW2CCtVtYumAQLo3RP4himSSRPKfLWf12iGR77aL4iDjKd1sWmmpiQKxocKj8AMn",
  "key21": "cctbxrN64gthvWrLYgRtCTPYimRXppXMswmtFhcjvuXkYZeSPqXokv8tsnxocfYiSbdZ9MUcnoLrJPo7XW4gAjf",
  "key22": "4p5VpEw6QyC9RWCDpiihLjGPukajGVu3y68ere5Yvcon7K62XGbJqpU7y9H3jQh8mAtJEKf3aByE4AWJarCfK2EM",
  "key23": "4oz4Ht5fjWfHnZeMkoabtcvZtQMH8uR3Qi2xR3yTwiwDdiDE6EL5U7wqLYy8W8qKYYews5WmWEWTyMT9aYgN1Tk2",
  "key24": "4e2EBFnTdcErM5aK7FZi1WyvUzh3GLk4KyR21YEK3SsJdvfNu4kXz6bnCQ33SoaYYn1qZ23XEYeRuoQjVKodupCR",
  "key25": "4tJWvhvupPDdkMoeQ1obVnqXmuTVirtW6zUaDPB73SrJ7wCyR3D5vHQu4sbFUA2rbXvGWwvsz6ynnbwUSC2B9DsW",
  "key26": "5yk5uGLssrpwMKdCrcdZjgNrRbEs1PXDi1cagTvPTkXwQ5m7fLUf9uR9CNXyYcNKawPNWDhj5hVmnoxkf9ryMy5P",
  "key27": "5dfTCYYDJThUZxMpHbgdPi9h56VzfPv3mKA1dar8FSVFHbpbQhJtQfPPJhwphrKXGJvxqvrE49Da5vhvHJsVoEgq",
  "key28": "2qJDy99yU7kRjEuJRfbXRvSAqpMNF8STHwKyzE7wtSFS15hNt7ymwaomb99dvc2RK1bTDtLPrJ1DCA9kAaUMVooA",
  "key29": "4GBpGJ78r5yRhYVYHTS6fWANYzqbtL2P9RPpewqdu2LLU1FZnD1gCPZhRcBEHDKr5dWPohsdsvLVkVTvnP291USH",
  "key30": "49LKA4Dors1iSa233jZPa8vr8A67M8sgvT1oZ16M5JKz1iuvDFHFVwriGFvq5prF5cpzzXVYiJDTNFR4DzCaAP2S",
  "key31": "9QW1u3S9h8rkQMnR5Ef5p8Yg8wh57sLnBkh8mz4CdhaSAix7wtt4PwD3NC4VbUMPtYRWeo9XVyTMBBPiVesqR8m",
  "key32": "5MtjMiJV2CTZ6b5drMRrzNjGzGBNPe8ap7zYescq9ukVuS96ro28R32XU8Np5dLStRWDePJ1bvPMw4ELjd2iCBbV",
  "key33": "t2bPYAJzeuZ4XHSDm2EJqF6jyWh9nSHJvuUZhfXLE7TXNDMAcmD38vZz1xkK6G22qcMJYA3ABXXAHAoBfqqKqDR",
  "key34": "2ByT66cMKEirvUtE53V3jdWwRkAjHi5QHvS7kgd5EKtrncXNyrBBWX54dxEPy7RXFeZFkSBZnzMpJn9Nq1PVE6R5",
  "key35": "3g8vFekb9FnoTifbVbY5ebB3sNtjaZUakbPjkMrmWETuyUw1VLPZ2U2jt1368md1u6cmbPvbSgoTCMU4CCBo4kHx",
  "key36": "5629x9FwkVejC3wv5NbGEN6ryJq2oQMuGX1jYHwED7PsjJiqjVQRPcpkM5TQTpAPKLdVhRBL8eravWyd28dAKQCE",
  "key37": "45cV8rXnCi37iU7XEBdxjd3LaXF232zFTrMX4c84q6ccpWeZMC97ZVsaVoCbiCBEoWJvSB2ZyhEf9akjZU32YjT3",
  "key38": "3YLyGCoPLE9Ppg3NMmCaoZ7iSdi5LVbQpr1oqM45crPVSpQkwNHx6SzT6FMRvZUNpCFqWknjigCPL3jxr24axvaQ",
  "key39": "2ntEGEYkZDxbZgvvf8P4GAkkt8kaERnBiPWLSa7MnPTgpqrbqYxegoA8MDgbWqJZzUgq6ixQik6mWYsDfDfWvA5s",
  "key40": "3EKu6sC5C74zg9Dtk9BcbwTkTibReSrske89sBJPisvLY8B6pkh3gjGFnEZfb6MVQR21ZeM569nieAkDYbUTFjW",
  "key41": "65YDTNMTUGA48wRBuJvYE6fHuJdoxkKoBYt86QP7AsbYxhEZW3NyZeNmPNDrYbLu63ejJAfTtdjZoubB7WEgVrNd",
  "key42": "3YrMu1e5TqQbYZ11PFHYP4YkBC4EaShMcrQKS25FKdTdrsikmbjiUHxrzsvB42KF7g2WgvFMkiqi8p8Ged9Gw3Uu",
  "key43": "5WwdL82euiFtQjRs2nj1ypqmTGcQffTgAp74ABnkx3R95TapuQFXDgvtgS5f3933Rm2Cu2dpppEFuGYh2qmc2wDh",
  "key44": "21ipw8p8nXkERRSxZMekH4C7xfbMwtpig1irruPYrFvRiC17tSWkjSg6McVqvMoavBYkwQL2RwwifD79Y1tYvHxX",
  "key45": "3KGkvENDcqD3UZXFDhhYwZYFE8KPXA9go8XWp3ZQFx71dHAkN9yiS9zrAPJSrcFbEHqfuwrHjnnacFzAvfvKfL6D"
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
