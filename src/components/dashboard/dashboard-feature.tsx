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
    "4CM35wT52YaiGs3KUE356ciJk43BNAhKSNzbg1BnMXbD8JPjnPfMgVgJsaWanKYymvCk8wX2dDu96bu3cEQiZGXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XyQdZwAiRfBgvs6jJnc2fswZaj7ZEjxwSsAAU2q5D5PTh9cdQtut7zMBZF3WUAqxF6ChJ5BX5BN3ywdetoKz8GN",
  "key1": "5wEonUbSUvcMJmDf62rnAhHN51KU9vhkuY86zb2ybjsDFXLfhDeW2NS5ZTZw8C2dUhVDVz4puc2ASwdSZpW7CibY",
  "key2": "412UNavstThJtCUS4WzYVBoWAJ1azecmkGQRcGF46NPA6eav4F2iH8MGQ2so9jMrGrdnaWF2ModY2wyPuJTXnGXm",
  "key3": "39TGPjCBDff2TceZc5it2wCxEzN23VoxhsZ3m2ko95zJc6cXLLXQtHFaUfFNtzTTutBYbV8j5PF8qXXuPr8afPxH",
  "key4": "3X52FwyyzF78pShtdcNbfHu8SjumcF5DrVA4gTmdVNrMGEP9QNkYKk1GfGJ4WA3YMoVjEFsMPA6bKTiCiN1Bs625",
  "key5": "3J2A8GCSHRY2cUF2GpGnFoA8Fu66gkrWmQtFAEswiChum11g8XExVpFGZ1gtQasut8CvvsMuHecVPvrvmPZgqDFd",
  "key6": "2etJ1qy8bvgjGd1QTctMz97G1XQbt73GJAPnHQJBLhFzz3gEEdd8vkqQCsLrr2TpTsTjyhX2vjEv14eWt541acHB",
  "key7": "4CScZGhUAw8iqrgUbSFBwEpjijAWLFGiUTbcrG9hMioC6dNGRtN8drHnoHcLEFtvjab5Vo32jmxJqJuar1jnTvyc",
  "key8": "5LjMsd2zhsCfPh7VUzLsmXWh3JbgFPJTuHvixZxuLznDkv9DQ4pZRJYDahfQqivVQL92QzzRvDk39pq115RKf3Kz",
  "key9": "3UzyNq3ghY6o7gsxUWavP34FD7aCKRWTJhKtXrzBm8YpLicyBpjYf2wvSiPcxQoTQwyVkw1cGBvjLrsd7d5EtPmV",
  "key10": "5ytmM5g4Eia2q7wWqyN7J1dfCRhVs3tXFgMCuPZFL7fBfrhnWXfd79BcpPZAtKufdhTCe1nNPdpfHRNvLn5rWLB1",
  "key11": "5TuM5pyjj4n5yViGxmBgWxJrRwpnc96dHRoUvnwkTGpnJJBtxJvPyxnfds4w665XaVh1zwQCXb1gmPJrqXRmGvyG",
  "key12": "5j6JLiQthy91ibTzWAJPtX4rLHeBLcUHzdwhWqou8HkBBRXXDcXMDcT6zcDz6AR4Miwq9yqFdTPuBqfAaeqP6nZU",
  "key13": "3tzMVYfr979j9kB1ZtEqtpvAzT71oJBoqZbdp9KCeQUrG39uC8fRYBtbfmTgPFiNM7qKF43UMuGyqRD5LSzuKJyy",
  "key14": "3UkxXoQFFVCcrEpCSRW1G7ZS5oRYtVRThK8go3fsFRWD8Xj2RoTD2tNhGPVqSXyaZr9ycniaA98DqhekyBk5AXrR",
  "key15": "64s5vjb4xCmQ195nrSaBEEeAJc4bxodahEWSEeZJcS847tuXJn485pSV635oedRrVSsFJJzpypwqQbp9kjdibXnC",
  "key16": "468aFyAaLKYpou3XMjerqLr9fGrt2UXk8HJ7DEryA634fo9Fpm9PUxqGVWiuDZS3A69c2shqf3RhSpmvJBAfEuc8",
  "key17": "42y2XwFsb9Gt62BEst73jMoY6rLhy7ArSFwYH8WERyK2dr8dGd3jqLNSzf485fRqnbgKfktgjCLvL4gAdBFzUZgg",
  "key18": "2GFNDTsDXXyVaAFqUL42ugQVVTJihxQ6Bo8kwzVmjy7f3yFpEDHBLhLC3VZihGPwpkDzJpqikN6KHxc6BRGhYW58",
  "key19": "Dj1q9CyHkxaVEEcfqPYRXuMXFTTJTs5YYZdUAF1nDa7fqKTVZsWYXpWheU1vaAabv87yoGmF5t56GgcgMfR1ceP",
  "key20": "3SfCEgTjBNZ2FGzg142eC43Ey7K1bhGtEFNvD9yDU23KwHd8Pp16Ku5mCAcPoZtZcuJ4LPXfzYJ3HYkTSg56RRcx",
  "key21": "2a1LyPyHJ2sjfaDTgKQq6Te5yx7W3w6g9futB7sEGZkEzd5A1p54cXVeGn5EFaYWwGi8donWaT2uHvDrJxbSRvSM",
  "key22": "3qkXAvBeRs72arQBdhAoNPLitzjyWqfz3WW1D2xdqKEvcXfDBD36F3UHvb7k99ppKv9Zdr7cJZDepkv9v3fVP3DE",
  "key23": "4jwPdBmNHbYbZQ1k9t32ebYDEjsfRhXmNdJiJEtwnh2ZdZ8TE3Eyq6gavzXJUK996WaMZaJWeZjzjWk3HvKZ1cUP",
  "key24": "oRjem34LZ8eEHHEGF1FRTBoJVYus8i3uqKFDPCjyfvf7ngzbesdE4CjRCXpVxPVy2QWReEJUe8pNPykfc9RHB2v",
  "key25": "4n7sgXJkU5k5gugcEkQk2wgzCWh2cUbzmXnKmqCzDyEk1aEsjPPCc576ju6MmSqo1RxpMTbCRgxY31KKFUd9jccG",
  "key26": "RHEJKkudqLzS72zCo5WqV3z6d1fmCJS2AXc7KAydCRFCDnantqr1FPgUDa4qvg12RZWZDq8X9posgv5djH8fg6p",
  "key27": "3saPwF6rV5SshoPVgZiN1v77WLqFoihzPhgUcnoFzCKcszfgYqCyVcbbniNPbLoeu1mCic6GQsn6wxERexxBQmW9",
  "key28": "5nEskp8uof2x51rVs5yMVVFYnGYwQknr2Lxdc81x9ABW85tPm3k41DhqgZySMBj9rjNBx1g6zz41zQUnU3azcG9P",
  "key29": "3sWweWPxfuWzRBiYXFeK6EeNQfc24WT1dBifXi2iegrxmno2UpUQLRQMXJ7LY5ZyUA1tvAPYD3px8XxaVdwkXAAS",
  "key30": "66kjdF7fXwtwMDwcuka9WKb3HxMSzfkXKX7Fvxz5ShsCd34wTHyCSTEwvpGZeQFNjNwkCQVXaaXUX2CuJcCnvHLe",
  "key31": "3nh5raGep7Aaahq1aHa5r3p8bUzBvGyCGNMUCCP5bXDkcC9hfyAKqjz4Y9rWyfiriviRwLTvZxTVuoAxQr6Gzitj",
  "key32": "2S4LhkRUNa1abDkNcvDDcamxYeYKkbQwFVePn3JNLK27uGiBVi2MQNqFxg1FbTjGTD61L8Vqtn28yWAKuhTnwGni",
  "key33": "5zmnEsNKv1A7FkxeNfUGMRz29agGUyxE1usxPiGzHJDop2EfssXBmQJnKQ3hbmSqSCK2yM5e6yH4KeZ1fYoEkZLd",
  "key34": "5qZGVEJXZhemDcGuEGqEozh8CycfjGgjCjeRearP4cNSQ7j6YUt1XYznCvqa5S6YnDNTE5DrvaRQkpqeMMo6dPLH",
  "key35": "2Ha8V42mEqk5L5CjBmd5fb4KdwAx9GnMmhgEzufQT1N6APN4yYVqrxzTbX5SBkyE5dyhSZiQtYDVexShaWwAYGRE",
  "key36": "4vHXEWkT9aqoiYEvwzZ1y6WHFr8v2iB39JfvtcDfM2tiZvvi5m227C6rDiU1UUUAACTsSdk4Jr4YKRDseQwRGxLg",
  "key37": "5AWN26bheku9gp36pxC8quC2woCbs1w64ZvDyikjmGo77vaesrhmXYSf5vbA36bHQuNrGvfiiPYnCi24nWgMjK2W",
  "key38": "5PW9j8UenbDw4t6jdhTu6iGNNuwW3fCUARKPtf4Sa9LSeH2bx9KrYMVZ4PWBymkRrXjsJuMWMpyeT5iNhYwXMoFA",
  "key39": "5iXpyiFLLSD9AafKA7c9q6g4XALFFu17yNPy6QrnM64hQ6pfUw8n9vDwLLKayba4c5b681hSgVmU9waCBgyXc1ip",
  "key40": "4wRxXruVaTt2RtXYfTkbZDWmVqw5T6hSp8ShSqNMHabwzrTgGK65Yq3AZtyUTLhbcyyrCGAdS4pYnpu1mF3sjoak",
  "key41": "5JAsid32SuE1ZRmLmMMXsuJK66QFAneT7GHWiCVN2iBTZPsMn2tHkXkr7akfwjoGZYqzvCZ4boLFPXXGLXFwoZ1i"
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
