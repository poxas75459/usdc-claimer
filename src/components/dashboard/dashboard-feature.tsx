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
    "5mRdkuHKtBTkpAB8g5kAVZDqeXcK1eNLXgXfXoKzLN4J637seqKVvEC7CVC9HzjK8ovCNgJfgbhtaX146NC2JZ2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yBh2QZYQrg7CrhZzNLy2hqr5P1EASrv6b26hz8tjPeknBPRSHxKNomyfXoACk9Sft6TfRpLFgFqXmAYbEt2J2kr",
  "key1": "RYsfGZdTot8cqSpEycPF19HVuiTLzKb2pTmYJQLoriUYMvr37BLPDVmBprKPn3ifPtZbzwveNaT2ZUmkVhdan5g",
  "key2": "DHAnK4sSaYHkEAyt3ygZo7wXmjGa7azC3oGf3fNxw8RGzVB9SK5DU1XLom7yABAMRmhdqRS6NUmkGa1mWJXzdYS",
  "key3": "N4xuCKswEjg79Jj3SnBBktKXd3G6BAXFRYAYENtqqAHcU1LWFWpjhWqCgt7TBNjuwHQtH149DDNfBEXZvmq7oVj",
  "key4": "5AHUC3JPTiGQ1YkuEWWCKjv8FVMuvrYUBC2fUbechxxcpvM4dNpCBaz3pgNRAsZRY2z8KyMrhqGWaEYrbMeNMBSw",
  "key5": "3GU1NtP1vBD7FcvrWAnTee8hRcGRmCvWETGYsRPcLU2Q36EvPf1ypQr89yHDV13qjUss8Gyh5YxBJ94AbAjXBe6w",
  "key6": "37mCLQU6SRwYGFZHmAzrwmYngiXRkBYXXHSs12cCbzu4yXDt9ueZGb8dt2vLvEWq8jVrHVaU5JJfsr2nJcAoMRnC",
  "key7": "2WSJtRVo8fF9MyxaW9g5BtPqkxyzfjwPYNegbRQ9STte6V1g4RQZGJPd6TuMuxQRkaVeks27aoS4ik392kGfEJdu",
  "key8": "4LfiZ9LxGq69WcuypziAc4HxwDEKqVWJD3ogZA1D9hivgJFdNpG6T2bTSEmFTBkMyk6mSH3GL5Si2tKb1bKdXqfa",
  "key9": "2Z5Zt3uoxomdKY3rvGuY6azSiNuxFo8AWRLmog62a1RBc8dmAHMkX8cyGGwojdwee1PTSc4Ea2kyDneHbQf9XA8W",
  "key10": "N9mtgq8YcaaJUakynagqRpDw1s3Xj3pGGbfoJ6JcPtDdjK8X72fXPisiaA7q4KQQ6KDc7QashWrRb6YQj4u1jve",
  "key11": "4uazNM3Q7ArEFM8Ht2wLDQcEETi2P1wiAyCVoSXREjWvdz2St27RgP8uQau1ysTUxkeZK4PoSfcB86Vx3zEqJw7w",
  "key12": "5p5ESC4sup75sT2BF3yGERWpv2vBGHyBxzgBowXXubSz1usp4LpNKUrqnrqcLLpNaKRB2DkyDhGRHpmieRmQu7QR",
  "key13": "2VVTQ2Dixpw9aPJGrDYAKZLjiEFnWaN7RtovuadCrKCvboJLtUDZS1NYNaJdeuhY9JYR96uNtxnaHJVAX6ULxczP",
  "key14": "b9hyzA84a2k7u6Mrb1vYd9WZmrNS3xWDBGjiqj7QcpCHqQ5iBPm71YJLS7whpvQBjZPFCMrQEodHdaJwkvbW3KE",
  "key15": "38ts2Q7AVur8tNg6X8vywcUBBrX7fNwcXtCkuhLY6ro9rZNzcTH5JPVCfZymbZRf6JHsts1fcn8oTFnHkoRTyiL4",
  "key16": "wm4msjney1HJSPtgk6nyxXTgA3FBRpVEcLhgW6LeH5vpCFDuikHeBMZ8Kwu5yKHNPo4ZAMenqPVkv788V1jxwkS",
  "key17": "5HxWpYDitY65v2SGixd2MkkUffRwCamZzyu3m6mnMP6L2Uh634Jv41RDiC3EeWMJQkAFuee1BtAGDhLU73tbtN71",
  "key18": "2tenfgbW1eexitkSFEtyXdjA2kgU31E1f9rz59EFKNyfcQ15kywvYEHEJBqLtjcpaKM7qpPVzLrT7geu1v1RqaZx",
  "key19": "4Z1L4At6Mrxjj17LyLUW63vEuCZfJFeVTjQGqF32Rmetc6qv2jXVHpCvPxLjjMuN7W9ZSFh7FbLnQ14ViqizuTsT",
  "key20": "4A9Tcym4SidNmVt6nc5T95QHyXdGd4p56QLgWBxK88ScCQrHKRXXx6ZwuGuKES9yn42uVvYSvjL6RCQ1PVKKQ3TC",
  "key21": "38sLJyYUewc1j9ykneupTNdtD3Hmq2DEMpYRFRBEDbKQ17kVoL2xrpnPYLuVusUH6jcD6yeB8BCvd74M6zFyM63C",
  "key22": "2yrmuZcXt5n4tdn5TDstDCzz35gMvpv9G47JM4z8TdPKUHN1PMmFDFWWWh5US4CsppJAhbeJaWn7mkWVPZUbYfAw",
  "key23": "3aGKoySa48NPWcCRv3Z7zq6S6cBKyhX6CcRDZKGFc6Bb82fBrBe3qAd1embQid4pgmrk84tRxRUNyomrQRgvicry",
  "key24": "a2nXeR3tqcNyMp41AWWZm3E3s8VC3mjtMSdbog6APNMMe8rY1Ebbtw2xz9trH75rjoBxk6tRkrgLxSm1pEt2Z4o",
  "key25": "7jYi1tZi738zRRDbAEADf9YU5whsjpT4rNzqTmxpHE6LChs2cBwAWAPT111g6U6Acw5coVgT3xLvwEQUbSbqYQD",
  "key26": "5m6M93vkQKKGLFvvGAypnUpLN7shyzrWpZkWRFKspjD8rWpWW7ySCYJNyAj3jpJhfuLaLDURFPSTM652bg1GydCQ",
  "key27": "4VYxBgNg7R1CwgQJ19yCHgMGhE9a8QxHHSoDPGy41sCdzr5gHyvcHfABP886mztDFbhJv4Rb21rhKB2zHwrEmxHX",
  "key28": "DjMtEcqbLtAzgp4nKWiJyqHwC8JRwuxrZ3PzPE9458r4Y8ud96PPQQDQwzzCSedXCUdr7mKG5sX55oXQYhTqm48",
  "key29": "2qPV5W16DrdMKZCn9gDY7KWUPeVdWKCYbLKnW9L6ieUwsoGAtCARDdAiuZM6nQfpfcuMBhd1JHdFk5dMjcrhQugS",
  "key30": "21FnjHjCQHDraa4PsbeitkwnHQ8kh3ok7EnrnAHmwqMpuUcCX5upLxxz4aF6qMko7EKEn5P2UcSEBJSXa4ViahQy",
  "key31": "3i5MPrkGodiRtosZZUZdJEXsq2TrfnV4t6oYvFvNNUegCsKv3uGrhQAScDqsS54FUMWX35vL2LaZB33sffucXh8c",
  "key32": "5GcVu2TWTPiPFU2fGscCBaGJXQq4sjHGP2zvXEE9Ev8t5217kgP382FUTMi8Uo6N5gkPLJpg98SvRLmNrTQMQU4s",
  "key33": "2SMjL6eJvcDjbgYfHhjJ5Hegcm7VmqFDqfiwjZXgwVcK2UdJRD2mgk7FznMeFR1pZrU5gXBF79rPJF3B7Y4Ge9zz",
  "key34": "5G1F8EuCQooYnB8GrARrVQDDQd8xHLTonVb9PARSeTtoCj3GQsdKpUo7qNSsi9jxaGcRrQdzEULJafg2iKigAdRZ",
  "key35": "47nYET1Wx73yVtngTvuGpCbAQTwSCoxWgepPup48zviXCpag5RkJFjZ94P57GMJR75s7ZrdaTVUZskPyiRgT6xxY",
  "key36": "eKUWrxvWoj8w5r6pu4bJk8zDHTxYpDPjG92EebKfMvSHK1swFpj6xeAgYWdBLKYsR32fAYVsrn7A773RGBbogdx",
  "key37": "54nidvWjgtPkNyt3TmF7SRKB5kH5Hhx5ix3WjxX41nUSz7vxSUFVLF5nMrMmQ1FHMnAen8ggp8F8cFMwZoFR3VMU"
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
