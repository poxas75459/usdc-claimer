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
    "3CbifKKGWm5waVBa7pmp3mS7KLEmSAbC7SPG1vqLrWsBzdWWbMNYheuCE4erPvz7ME62tejXeAWa4UecAUiMAbaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfGzY2BxKjJxoqkURTaWygwDooJcZyQmkj6uNZ9pBV3hPZYamJnTB619C2C5KAvDFD59Vw6hnf9onAfHSNqVoio",
  "key1": "3AB2X1XF9Y6xYJ4qwe4AfKso4WsgShvXHghr5TiddKqVT5o72peN1P1BxPKKqGma23RE5HFfBPmMZDSsE1yrU6Dm",
  "key2": "5GhTzFXQ1pWMpp6egp5ss87mF2vggoxnW1TVgtwrShptZeXgMG4bYzvXxYYxV16k7MQEiERYR97kKBvugRYKp1vi",
  "key3": "61RptzY58hjZFp3NPFsNbLQDuvsjbCoZHb35yAWryC5zmryope5FsAefy4eUY6FJZaDcZUXxYAgEL3ijc7cqYDbk",
  "key4": "4trWZAYjF8C9Eb4CH1Rm2FxjpisdM9HWdnQhirvsM7HhhoJNnjQv3DsvURkEVojQrRJ9sjSG83utraPCki5crRGH",
  "key5": "4jzw9cCstWmiMGuJqe6uVZD1tAnpFytzYQC8XNEZVX2w2Y466fsmey87DfdBmcGueGp4L9gKq5jHEoWzLGVxecFV",
  "key6": "39mhonL7oFpnMiFcjTt5Yo8Jz4RegLM1byRJMCyAXe5zxs9t5achvBXH47Y4Bz1naz1nkLB9MYrEvJDyRunr8AJp",
  "key7": "RySr5jPzYHdpEabdGndGmJrs33qL77ocKuRMXb2X31vxYKDdEBJn3BsZu2A5Lv85t8S8oAd7yG4NHKox4vFHCt6",
  "key8": "4x2w9b23Ph8DECtMFcRSMYJm5vdfjWBJgPE7S2UZPzbU8qAda5ypKzwuDyvyV1YFA7LTZsNGV7eXdRkLKGE9QAPA",
  "key9": "2AXoyhMh1AigW3wghFq64UtiUJ8rZk65TzMuF6xnEermbPnWsynkoxwZxdJYvT5t4c38gr77CXEqi6xdwocnnovF",
  "key10": "dgiWZU6RKuc4RRSrQqP2PG9dDHmAJXYBi1B8R3knXrFdPKGn9Shogcz3iwtbFB8NgM5jFbgXh8fwGweNQY78xic",
  "key11": "56nokZ64VGcBhESH5uFRJMFMU2wZjoMtAhY4oYNSJGFJna1tZvNjZ7n4XReMC6rD46uhGdcRtB7DozJhFfFYYZkA",
  "key12": "4wXCtR6U42eZwycyTCPMmNSDyaJ55M4DhLSvbLuH1bhzwbsEYsPR2hZ9tDtVNrRdbj2FvAGz76PDEXfuw1ihNqz3",
  "key13": "R5fo7DJKbbyzugLbvnSh4Lvs1MMgiZtNmDiEn6QkNGBjuxXu42CkCCRbpTA2RCBdJ5cwJxn7eXTf2nBiPZBjMvM",
  "key14": "2N9A9H89bMBtVpFKg9zA5HGAEEWd6vwy1yxZBwfS2pEiwwe7hN3WcrSE7huYHrVcP9gp41VDD8Fg4deEcZTQfLpg",
  "key15": "ibU66fRMj5phdQFaa5c1UKaWFupNoDN57R3HK7GaAg7JS7wL33aZdBNRb44Q5d9kRrtzKHr8qePbWHcsWJhA3TV",
  "key16": "Rne4P8QLqvSs5fMY45QQpoyeG57m2GjYjNbNbpzhZ61Y2qvdQSqRvFH6m4VScCv3vSaHrRqozShtEUi6ge262aL",
  "key17": "Mw6TgXEMF9fz54GZebGRUHi9GCoCNzubpQcbdPU6ErjnK5zkmFTayMSiQQ4HVhr8hs4nwagdkitS9xXWoUNAxbq",
  "key18": "w14ipk5nzzE2Esd4pZWYYaDbG9m9FL1qBtQ4BkwjVCVSeeVmSLatk9VXnsszcQ1ZEDMPPaAKEen263grik6BBu1",
  "key19": "2hiCaHLnAVJWZdrU6HhaEtHr8GMSN1U4VcF66vQRKTYMaZoXZqziaJ7tKCEXd87D8WwFQBB2vdp89V2jHoutYrhE",
  "key20": "AFMCHbj75Vz14wPLLsL9ziab4ADgpGWYqpyYmt4Jt8uSHoWsyDYHR3FG4JCHqzWwM6tQ76TxADMdvk3but7JSDi",
  "key21": "5Uu5ni26rbFVtMdctgSsgNZWQ3zmed6EXJRDFavTD99mKvipBxDm6sE14K5hvTPGHWSAboj1217oRSGCim1r8N3L",
  "key22": "5WEEdTkGHWATTdvzFqu8EZbCTL9AjJPyi3qgmXTaFSvpxvBFAt7Y4rerGtBea9qRrW2ChGJ7X3AYEG1sFGrfAw7g",
  "key23": "3QbPcrAPq1s8Kd4XaSo3QhAycLp7WsPDVU34qU4XmZWfyGv5YPoPeoa7SVBDiibR9VoLpMdubUwpQrpxAZv7RFoR",
  "key24": "w4BAfBWnvAH9qyePk7YpfnVwaHDRZ54DdcnuaGYZMi9JQMUUBioSxRYHaLzp9bAUdUKjbCqGF83hFS7UAdWHAX5",
  "key25": "57bUEFeoevE4LodA1bmDFKCouZ1HZWnxCW58CVhTwCqJcDba8S9xjoXYPjKQoaPD3M9voxSsyQdPGMwBdHBo2CrR",
  "key26": "2vBf3Nb42nqzerYi2M4hkJT5Cx9hK2S9UCoMpCWBxrr4TWg7AQ1fLh7cfFoNcxxY1dF7mBTXAgakmUFP7TMEPKhD",
  "key27": "2pjC32Qk8JhLLUNvophsmX8v4fJYKdzQTqFWniVMgaVNr7UrvVa6oeicMFkhsnYJFhXzyHN2Wvf9iWVzPXJQBkYP",
  "key28": "FuP86h7RATfMqmoVeD4bJkci7iB5c3csniAQK3YodTFkKySrnCBZNt7dYqUgUCmHZrvtPPYUopNLhA6ibwKfFHm",
  "key29": "4ypka853C5W8TeqfwLVkQjw22sAbBC91BDGML3c9beeVdpZP1HY6j6XkPsBupVbGDYUpi4TzHWSuNF3XEc2xFicp",
  "key30": "2wXjj8syADxUZig3vPzgZGwtYGMHXwCWpeMHQaSrzN4XUywNycq6gFbW5AbSJQkei7KQNqzTFJ485ZZdm94aLZAX",
  "key31": "62SxbzSf7HnUASuwnsZt1e7xZvjPPg3dHG2vq6nYnZEvthEeXBMDM9MziRNZnJXNLrWQBwPCYHWAZCWX5ffKmG93",
  "key32": "3Yp3VNPu9JWW1ZWoYHbqwgaShQkHLwDBysDQekRscMcMe8LegkcbF7FxopcrD1g4AcFL8V6sd7mhgFTFzDRmpiK1",
  "key33": "5FhwtSWrmrjcY8iQi4LvS2vuy1QXUme6WsW8ood9KTq9rfbRjzffK7xUuag6D1MjKwHH1ifZUc7epTQKvnHNR5Yt",
  "key34": "2SaSYsPmLGrw7qMkgvCGs9f8mxxZNpXZBC92nUNuL32K5EpZUEds7z2qPeRMnzPtDPdHGB4wEXfBzgLEXiDyD6uV",
  "key35": "3ufFSNsxQrcDXTM5P1AYeYnsVnGv9Bzoc7HVhUf5HeqwhpC8gFPnGSMKR2yAhfCRncFfUXCp94aJuYgpo5oJEAcj",
  "key36": "5tewvjgFDhzr4L6B3K2dz6fqugETZ4RHmPiCEoYLjHBUeZquvV2xQ9Ubr74gw6rgybd1WyKrC2Urho2E834U6xnv",
  "key37": "3AK4Wfm5cPN9g6JXEq5THMXE3dMLHm44cHvTxRAWWEJpPmcAPsWUxPanGJBJkJP47Upb7zvz4NoPQMm49aUzgbA6",
  "key38": "2jrNhCP8dc45uRG9JLRChCyi61pcLD8gi5nX7Bf2Cyt2cGDUgvoTkscMYb9GPkC5zq2XDHjUZbYhEANAjgbEKzRg",
  "key39": "2oGEdFMgQ19A6aiFsD6CoQsXAxnKCBFzn9Zkv2hjJ5hBbnPf6SwhcABWmVfGZhX46Fo9MKiuGQPdFuts4qnpBLbp",
  "key40": "4ZpqkfpZJzv3WzpF7oexKxQoBW9D1vpfZZ5y2sm2gjXft8MqfkB9p5gsowLhhaMJDKgUj1rfuwAnm724XY92G1F6",
  "key41": "5ubaWkfHkqmPqvHXaGzT65jDrQmoZPMSUamsBENiki8QeDNRtetQhPzZtQvYPJK527SaChDxSkrpHqHJV9AHCnGQ",
  "key42": "3tQ7RGY7WYUVLWAfDVgirsDYBTrW9CDYSBSa5RmWFegziPNowqVtur2rciYm7rHaazBU7oyC8C4RXKSgrmBgpHXV",
  "key43": "CNrB89Zy4rTzqgoYy2VPar8owtjiJwatE6WFkqvt3BWuEB3WQHBuRoWYSfzQFavfveuwb8MosT97yFpAKDArC9A",
  "key44": "5MysTzTkgHJatSEMXJzhggk4VgGMgVBNbfhRUj9sDtj6Fr4Uxr9HwaQ3FhxSBydvPFPo6ESxfFcjDebTGzkM2UcB",
  "key45": "49TUqKFJWjuz6EoGxqCjujhQm6u1frWb1E8b6mbbztPikg6WgzV5Gjh4GSgr5pHPT4D921LZ4CrQixQyBadPnZrd",
  "key46": "4ZC3qZ43BpCNACayoFYSmkr49UwqJGFvsx7vq9hACy5xvF6jgXAj1Z9BZmwwGmLt2x55sg8jjNwLaYsX3qtMV1o4",
  "key47": "2w8Sj8ufu4QW3R7mrXk1sC1UVPLavYd19Q1qYUbReu6oFtPDvYiDBtu4r9URbojbyqxmQsGfaaQf8E5uPrxgL5CJ",
  "key48": "46V2xupGcYqQcRSq8G8aaSkLe5whxF1AVkeLNvwcdxBWWarZmymk8bwL5JzGMEhr4SstDkK75NroEkaj6QSgMQ63",
  "key49": "4C4VasF1SLoAbBJPVi3biEZtGKsDRdAqyhGGDjiVW93s52P5x8Pmv58UBAmeB9oNkomt5GysceUEgM7muA2dmJGm"
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
