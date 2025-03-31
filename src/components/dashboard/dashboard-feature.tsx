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
    "2eAPdsfhKPfxBanFYHEa1tN2ZV27PD4dKymFFf9DxDKMoZGjkiCD5XgeDqxPWqzWHkuLDcYempgqxViGnygmsGGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMgSQbhaAGLxUYphuXk6sHP6STyGiKXPQgCbdHtZeqKs9QeHqwZLEpx9B763quzeXwB1Pgn9zr95of7D3rKMzGa",
  "key1": "M4WzYCdRFNuUpYzannBA9rSg4aF73Wt9gQsXJV1fiRLWY8Hzdn9ZqMu1A6tZ82TukGLnoEDEi2V8LTRC5VnvBak",
  "key2": "5nt8rVXxgh6oBvFSV2Ct2iMmJsivL1wgoPc6srujgyS6JKoic7kPYYpSTs5kAuhuqSUcuKrPRtbu18Awfcfkx9xf",
  "key3": "5ni2DPStfmY4LZvb1RWnP3N9M98ujrJETuoHRLjcZVKRdYZ7C9MnDFdG55DYCYoG8ErYNwoa68LXPR9inqCqFtV5",
  "key4": "4BKW16mRLVECJmW9NYyceaz1gTVYP21j2pFasQvRRKZKsH1tFDr8yUDTCn98LmFBtF3EwVthDgZTaKqCci4NAvGY",
  "key5": "2bbdzFc1SfWZWjoPmZyKHi72q3LHmsqCrSb59ZNgc9jNhzUCwBQCpkwXmP8LDFeH9T9nBJsTvHpxojKKgsWXSZ3W",
  "key6": "5qDDDnqtwbKWkSAYWR9gqqtAAv3D4mJYW8CEbWxsesYb33aj3rZ2tgCTgpgA9XcRXiWMgiYQDdKGH9qKX5jvKBpg",
  "key7": "5PLzkyX3yAL6pazjpQrdTYCa9CsNtdZYAf4ZoskxybqtkXruDgdr2jVMzJPYpW91tHZcpTUXUv5kUzwk48egZj9X",
  "key8": "fXbVK8f4GMbnt68JeQ22BaeBT1gUXXUVzif1kn3HaNKcUAz5mSV7BWffRk6Wuh1zVmKZRewsnUGx38L1cxN5Fr3",
  "key9": "4hmsx6oNGSpgtFEi27MG6hRkyrA3Lv6hPt486Eye9B9BzR45EbJXxxa7WZLcM6o47nZWRtLFi9puxeae68kXt4NH",
  "key10": "2Xteb7FgsaUykjwHeVdQaGuvhAPQKgtDBjBf4FkJE7bvvZQHXJmuojYi3JNmN99CVnDMtjCzfbRS3RCgakb3FYyG",
  "key11": "3ic93ETQwfGtpdfAkpdiNaTCKkgsw7UBduR9xnCgsXVdG2ER5VnintmhhaZbJeCpmbqPyZQ1h5paov2vTHH97Yrp",
  "key12": "4KiYkABKYQ6qKFD7rf1i9woQNDs7KupJQedg2D8RH7uJwtt3GT1kjCt4exPsyCPFyvoUmYpDnqc6QGo1ma2eum8h",
  "key13": "4TLcJabSH2GKRNjB3kuJGMBySWdz24qmznug9d1UpKa6r18duMz3CW1Dhn79wDoeHpn7bQaFWgvhvfyuGeXf6DH2",
  "key14": "5wz2KGVxoMGJaCzP2cyFmYCSxD9hWXXavPb2SHr1DnK3NoZrrmGPfz54ZGAzUd7nJN7CS6vtC4zedPXgY3NYtaTh",
  "key15": "49wf9fwx5inQuSiai8AEsr3A9EtDU3JbaVrUAab1gw9EDh3tqfDHhrrFF9AN4mzB5XLGsmXb2qaESZFT6LDg8eWM",
  "key16": "55T2FYxLAYpvshE3tawS8e358ovcZb3C49Mvxdt1Rpx6cjJN7YyKUmED68VCZE3uyvpF8c66ksR1D22wy7jWEK7N",
  "key17": "3gpGa7wDDzpeLBJZEzaRCJY13YEDQ8ohaFjKe84fSm3H8uAUzUMASx3j4KDHy5rg9ac3t5dL9267YnkKi48R5Lxd",
  "key18": "42jajKABv2g4JozxfFRTLdHXsLcP8AMMQPAVMgzafgCjimwEnp6B1MMjKSmoxrNQkPqyLk1oH9sF9hrQEGATrVNi",
  "key19": "2x7fGK8nKZy9sK9T9JP87nxL4KZe2MnMYYnQ3rLMaxpY4B3JxxeH7iSmsmPdxNhzjm1Zok1a1H2RKi4mWaGEsJsq",
  "key20": "39j5RbkeWHaxe9LQFqzEZrwRZ7dKzTNPUqGWb1sqmtfEHAgrP7nvrp4jy5f6cyPJpF1p5w1xmF4eRPKr2e2HvBBj",
  "key21": "2Yu8vEeKGwGSQio13x7W9BnEv6NTETKtKSFTdTbLF6e6Dhu7rP4iAtdcwsws5ee4sRpHozZdyygBGoAQBXXajycc",
  "key22": "2hC2gGCWPxH2ZsZuYtMosUoDUskSuT7ovrbHs7uZT2ozk3SNY7jGNMktHdcgDx7bWAxtPf8cVGCFbPgbNxxLvZc1",
  "key23": "4oMc1S8tDAqQr43SwyHLF2s9tofRjLCjPLciPpPwF3JeyAZao4dPhQHbgwk7LKkh3F1hNmmywngazegG45SdBVP2",
  "key24": "5bJ6KQ8641XRmuS2YULSi29ceUADAyrJGvbcQgXHXQEuqDKyZWrpz53nyjeBsoGytDh2y4ZaUjQvtHZKpF2DHrqW",
  "key25": "4FYbnYB9A8KHwF7BxoYvNr4ctKtWBYrun7tFwrZsUW6EkifpDoUK7XzBSMyvSDJFt3g78V46T8bLi7s8zPtG1rXS",
  "key26": "NncWFjQTaTmuTaQ9smxuSNAyMj48scAhLUa8PAbCf6x77m1wCmHopPJZnBmJEScZaBHgaWf5SkKGejm2dPLzSXZ",
  "key27": "2LVXGwTKLvuh6inReqKsUFxv8vWqH4juTfXPguisU1XUDHojuqpkFB5Jw8ueuAsVvBDAQKhtYGwU4H5rxnomCbxs",
  "key28": "4ThJo2CdGfAE6yDKnmKbhLdTCapWq7M1NDPVYcGJ6G4w2cckxfhG5GTsuU5MDJWtANSxCT8mrCyZpdJ4MrCnaJMg",
  "key29": "47GHLxjCZpv3maseB253qnwTWs7iYbtKAXuRKqCK4Wn8C3WinKPUGnD4aTEMPBby1xKgwFdA4pws4eeYATXE99TH",
  "key30": "52KNFD72tiupZjMBmmvfU37YLJHEYNsjbSiHHLddzRuqwZk7fzPhswADviejBznyQu271ZsdD2BS41dkwjsVMVgf",
  "key31": "Bh3vRyWo4V9c2yx18r9RS3jntxRLecx7f7oB2ktUUUSxEQVHxKjXf3j4bgQm8yS3zm1gubs8U7WyXT8Rg8H7EyA"
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
