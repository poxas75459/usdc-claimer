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
    "3AbmMXsa9xxyedSS7fhFgzRf4mPKTZAxe6KfHHtAewAxcnaqW2t9imNS8tyYvmPGVK59Ye7GP2KXZKV5vKbSC9hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFvsMQV6KR3b4Tkjj5FbaHpRZzQTkSaYpwb1Askgpr8tD2BxH6L8X77hy7NatGi6ff6yrNzKYRPw7afkn1vYY1M",
  "key1": "5R5av5QC7QyCd62hBi24JqtS48Gj9n2jhfXC2nbdgR5hoj3J1XGL9wHprHuiv5VcxEziXh1NxJMkFeT6S7GCDDdm",
  "key2": "5v2K857v3dtgzXj2GLvLETnbv149meo3wxjiv8TGhBGk58EUd7kL6jNnPuxaLu7kwauaDTnMs552EUtLeLCDJoCc",
  "key3": "DJvZX7ptW6Uvt7jx7ri3m3R1Yr4VChrLbcLGx5S18RHUgsVKzVa7fwxT3X4MHVKvCTBbQ32E1xHySY1sanhMTzZ",
  "key4": "3oMEEvgN6jckYrtswwCn2ePEnEU5foDnkBL4VdHB5pKrD74CSDpZ2tRov8UmB6PFPxdDjzkHtGjBJ8YZxPVA3ug7",
  "key5": "2iDpzKaZ2mA4gizfCRZ1Hh7KNwoUJV4FH62NxXdHjLkNxxVSpBwhrRDQinaPxTHBTjoE217a6x3Ks7ic1GRpe6dQ",
  "key6": "47bhQmHJrsSg6ZYCNnQpjRQvqPMYeQiWqwuEkTPR6UZzniAqoNoFZKzgT8x6puGTzFkJY7vsos4po6g1Z18v5DbF",
  "key7": "7qeXcF7YYterSFAgcgwgcGHtng4MBvJdVRKGEVRetQ8Fskpsbu37EZNMrA1xXZXKDk1411KBt1FDDY6hBkTLVLX",
  "key8": "311TU2KYBKyBLdiKmapSrSfTcHaM28ism3qX18MkuEcSRJS9qTD3pskrU66gMAf2RVbPXgERYeYT83mmxYrVKFxD",
  "key9": "2gYwpQn4ykRMQHdeWze9pdJz1AomV12wTURrjiJaYnh6HLiqMft6DNbEKLGcGicuZfxuWkq7xCSaVQercCGXkqdb",
  "key10": "4W9wHwpaZQe8YaeUfAJY3CQj2WniADSjRKne3C3A8UkrLuyyHTRa2nrXL9FSXKAswrZ3acAsCrbhHxBEsA9M1nUa",
  "key11": "5RiddiezPB5iC9EXSh7vTW1rQqEMw9yGzYdp8PjW37p6zQHzAzNEtrmF7CJXa7ohr9Fjx9toeWCvzgn1tduaTYRc",
  "key12": "2YxPjgUsG8r3m3v17qY1fU4si3KovTEwc2tgTfPEtujZMVgLfNE9xy1bQkF7JQvn2LXQDfemjfbfzpNgtGXYc4BS",
  "key13": "3ZtaGFyKtpYBEvxJfGEbavkPPr8UFuZSeiCG3zBYB4dvEFVPbwxW7oyCVZT5kbToxAK8waxYNRPATBSA58RpS436",
  "key14": "3tSELBFKFbUzBjTwYAAhsAAA1AGtzFahzDAvyNFeAxhaMDvk4fRJ96j1fcq8Jzt8zatKcCknmTNtJfuuEW1K1yDv",
  "key15": "4JqygRLErbMyyTACQQqh4xYJqxCkm5AVjKtzhBkEmFjBrHCbzQ8aNrs4RevfEz321nY3K3o3szcEgiiusBokT4VY",
  "key16": "jDht7jR8Gdax2yz96ZQeML43F5NkNu5DhPMvhXA7idKX4SQ3HKLF6mUdSTFPWHYEJ1cGijMdq88B4cy8Z2314wp",
  "key17": "5vPgiMSP9g25Hje1YyrbvvMRtMT2Hr1jUH7xSV9Rd8Xq8Bp1dp2ubVGUSXBfsSKb1zxK7MWmCW5YFdJZE6XPNM5s",
  "key18": "58MC5v1Y7vruX1debnYtedWKcyzAHV2LiE9xMPJ2uYyAbdkbe3sZFEScY5kRkL8C2wo49Zwqh8A8rKLzGSvkspa7",
  "key19": "4mbytKs9x9VPZcv3px4woeN8ZCg4QqHiaiifuHHXPjnaKaRZChAyvrnkykLMFYGXi2K7ij7nXs5k2nRHEJ6ANHt1",
  "key20": "2iQLYSqyNUd6KRnhqL2zTGivRgvC4Vw6Xu3DSD5BV3ZqBojZmFUJrcDGCGQjTL3epgZxczXqqipK5RVi7ViSCgbT",
  "key21": "51TyjBdv78A85RVNVLwCwNCacxjPGWurJBkZsJxCWymiycN8fEJZTunGJqAyC8veroGefkAG37pYTEisHNzH5idC",
  "key22": "QQhoLBUf3shykhtK1g23oL2DkNj3DvStvuM3oEqTAJi9dvAUw83yPLDE1ykXHy14UXYrikzRAqSwcj8srWQReVa",
  "key23": "3ABCnvUz6xJ6m829tDYPX24GgKAs23BRVp5zrXDPT6uy4xaEPTMjwbdkdysMQuqCQEg8gNuKrVSWKMi8E7BYNGa5",
  "key24": "JKbrZ1LZfnopjovRtFCaYqGCuyuYxAb7ZxhUB9vde8uaCTa1W7MuX6RTRW2JaXDwdMaTbasGVoSBMNad7PCG5rg",
  "key25": "2HvJGhDFXWmWP9Q79TdTcJaH6ei5Rt9FmKsE49Tu3jzGZVxzkutxJnUJjvGEta5HsmN78DNkCGkfHD93y5Fwy9Lz",
  "key26": "3C7pQQDZycMCCqTgSSqmJRpAZG4J4tebDyA2fcmEqz2QxVfvysogobLWRmrAh2N8ajNRiYUB2nwEba5RdYo27bdd",
  "key27": "5bmZ4nqTzRofDHews3k1bVcsyo9ZTyCC48ke1bFLG5PaNe2S3jAKt7Xn9UGURgWqRBaZV7J3BCfK4s9wYzt5e8xJ",
  "key28": "4XAdKFgKUu2aoyBb5JPNEV3qskWrCBBSC3sngri2VRWbihcLdvmjaeoV2cijhfABdbgdiWjCF4yuD6zSiajKhvtb",
  "key29": "5XMqSj2U1U2TyrHayAaaeUJMNzMwwTFW2Tknfybg7eC4rs46cD3QWnB6VLFuMxgAUzZvFTMkb2raZcdn7QG7akA4",
  "key30": "2oHwRJifjU9Hvh6H98inSwNQ9q7hLxFPzcfyuPLG7jZrGYQ94JTSM3hGMyX5BuMdULaSuSZJ1JpBhYFXyFeihKM3",
  "key31": "58XYM7Z44HkSMw5CMyzU7pketQXQyaCP5zwJFVV5EKuWAEhzRiVf9oA629rZTLBsHhbVx4pMRjwh8nB4mMQWJpPC",
  "key32": "5HwkDi1Mr7tLa5d1P84mDvM2nSGYi6kgrPHxzs7ND95PFy4YxmoCyH1vDgyo2ghXxWtS1TLqJ9vv1p5ZR7wP6aYy",
  "key33": "3hXhgoYssTix7Z1C7vNBbqKidcRmJjdU8JTCtAigAMNeB8waf3PUQ4g7kTm266FYFbpp3vcUE7TsGkeZyGceCwVS",
  "key34": "4pmA5UxgqJFt1wF8L1A78Qt2weLesyFhSnb1LvfjZVq7GczYrTrfJLES1N8M7ABHcnyB3tBCVWK8jqTRNUauqAGr",
  "key35": "53bNtLt2uTLiz4peMiZFrH7tRsq1733esM6HPyxBBo2Li5hTwSXuTRrRoEq4AVtoCgksa2xSJPkYPZU7akDSkcjZ",
  "key36": "5pfoVbZyZvaDpzZZ96MsNvtdtCagAwzpdhhCW2nLJqPPKcro2UdHUEYNMriB3J9xPc3XTCvUqiAsfMd7eLjbKbAJ",
  "key37": "kaTjMuSxaEgG5aKZ8pAWkWqZK4meu7zCQphLiqUVaGFwRNwiWm5JLcWqgpYZbTv38HVdtnZfuZgnX7wmDDtqPf3",
  "key38": "4XK632iv6ce4zWEXTjAPBcQGSMsiFErWQnj2EvkyppDy1s5MJDo4wmRLhZo1EtDh7UxcySeLDBDeYD8VqCF2UQzR",
  "key39": "NTee1L45Cw5vUCfzFSVYnhX8ReYSGZPtnE62fcXbyDfXgHZcauuN6hXfuzcWYEb1jTbh2hZmQdf1isRKtqrPYdi",
  "key40": "2dpJPEL2c2uYu18jU7Gu7m29Ttqkmj11pxcm9h8AQofZVsCaAtZrxS1tYkXT3r3VQZ1Px8vtbPh3pJB4RjwiJ8Xz",
  "key41": "kgfeZtJ7nBAdTWZbotBV5hkFjcUc4FmSPzaGkuqSbnDQcaCmkbpiRJuXUkUvpQ6TX331sxtec69WrXDkufneY2c",
  "key42": "3RHtZ7Z1rzc4EMWD2WtHhz4dD1eBD1igtFKftd6ESmqrGZnUi1PSQTmPYYCpRtHucocJkWnNgtTj5BFD73M2FbeA",
  "key43": "4fC13MqkZTwM3yS5Z4rge7E9tyzpszJXU1J7BTYVmcLjfxYU21AXB4djBv55TPD8gpRVHKxGEGN4cpF5pzM8LTnF",
  "key44": "5S6x6iSnx3rnsDTnvJ6PtFx4eWB4wnztPvk5yoYFSpJXn7LqavVxDEf6vfCmAdbcz3UgpztmTw3MLQyw8y3DaJbs",
  "key45": "kpKu7fRqyE785Rk2TeD1XsYF6woFT274UtPSEYxvpAwAFQrGhCGmoPz3kr9FHdaT1fmVwWdprsTRqkTFbN1GDii",
  "key46": "3ztn8q9vx9tuKbWwAXkFbXhuMARUvLUQrbjc6jYUba9zirkkzzSo9Xk8vWXXyxrEsntNaethfLiipJtfazCPZ3Eb",
  "key47": "5XrauynneeH5TkVNz2N5hmQXCGdKJFhZJwEocg4KSaQYQo1SCTAbrmhaLYu88aCFfGrSGYz9yGCSPA4MbtZLmAnk"
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
