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
    "4jJ4FwrTBtZGp3NAwpv2H4cWGn3p9zSjekbNDi5JPwY6WR3BXiYRopDS7z4QQGbm81yGZ9JB4Bk1fD7FzTrRnBhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xUpZqn21vp2uE9kErqEnHdvTYsydApSu8QwHgxDg6A8DYBKr3pCw7NcC4DRX93yyg5WV4ApR3nLfMvLq2LCGe8m",
  "key1": "42WgfZ3MYdoDhpfSKh14qLpfWgtGZMgEseNDM9eND1XHi5CeAXpxtfpqNSzTJBAoMSmCKLNMCAa3QbKWDhPxP3vQ",
  "key2": "4je2KeJmwwpmQYYvdYBB1b9m9A1YMowFAnTQxB8gVggZmpqHUqoPiCr1YtCnkALPveoXYzhahfLv3qpuMVFMQqTs",
  "key3": "3i9c9EYb1qTsC24M8P1KbUfj9uMpD5H7KDfE17GxtK5nxjbAnLEciL9Wq414VDDjkvo2h89o69oCTTJXgXakFqAi",
  "key4": "1YsRLFVV1zdoNPYuVMFpwHZDGp5eJFfw1DdjXPPrLko7x2FKLRWGjMcyM6Nc6Zx4xWLY5PnqfWufkiyFrfnsL3g",
  "key5": "2a573DhZ9syvivZL1tmR4N3YbsFJ5xY3sNWC8QdabERCJFYAJfUMWhGApqK6d98PRmpW6FG3tSdUWZVszp89zNzh",
  "key6": "2K9NyRFPHjsEX3nqgJLtiDdtNwR4pRRjVPdZGcvcrJkWbEwr9hvDxjffCQnd8pnU6ZYo3EQifoopdd9bicWFcDLi",
  "key7": "yMmLvG2gr9TNNKAFFqQqo5BhbaBHfSXpkvfcEdNU1cvzqYDtm8xsS3Futc3wgdmnYCGsY3gjh4Qo4MyNjPXJ5jK",
  "key8": "c2DQdHXRaYZZdYA1PYCC7h5QbbBKx6rPUL8LU8KoMe2GNjoYC2Dc7jB2VwQuuz5hJmPnCsPwhNArMckR9P6Zps7",
  "key9": "3DLSgkBLET2ZvnENFMjUmJyyPseHdsfgrL3fX9V5XNfAsE3D5Xuq4Fwpjz6Lh89D2vDyKbpG5Re1A3D222EA1djL",
  "key10": "4uDX4QRaSRMJxfi4eTpqqSrpUCdM27Xd1Svvc5eTJrbABAJ8p5T9z9udsdeExte4GeSC4mnVRfsKYa5NsU19Pd65",
  "key11": "46UPhKSkLeGAijsXqA7chMYQZofXjoDaf9Ahwe3kmhMYjooNjonhdR14yEqvhRhh1b8RuQXDJNcgcaLqaUitPSyY",
  "key12": "4qP2t7j2RFV4TaLJEStqMgbQCnH4PV7m7rBkJmsoTLRjAXtrpPhuJNvM1mkZZ4GpgsQrWGGbRxm4JfLfouERssUD",
  "key13": "4581DoFbpH25Sss9TJBCVQQFT6XaNCUfUNKgiVeDffRNk14QHAMhyNrMcuu9XUpkUDbtNtWbRS7ifNvCjuwjEm2A",
  "key14": "3qxHShLPPTMFjdj2PqYt6YjaQShYJog1B6mdbMfYrFeUNvKCP6HcBDBveEockYHVYdwJ3zHbg5y8edNfxQEDNjK8",
  "key15": "2tUz3r74BFwpq21UkShaLBNjKsU7c2ec4DkGMKQXvdKKLmwk4FATbxvvDSR7VFUXbGrFVy5JmV3JYkNjNQJFoWFD",
  "key16": "4pHnQjS7YVSGTm7YM4dqgZDckhq6wrVWdnumoC1PZtGJWmyrEUvYtjggVQSbrT96CRchBdpjNLoyDTX9LutuJiTp",
  "key17": "5Uwcdy8Y9Q2q25nHfBbLwAmw7HTECi5vTNpLMwUZgkAR7Hd3tgxYP3ztpxv2wTPdkp5pBJw771VYZiS2Ggznvst6",
  "key18": "4NtAhApGxZVLVG6264eqZVUuJD8Lr1WXr9B1hPxvDEwMaWPT1pUWPuqXK3ay5v9C2CVm5WipS1XYqQJr4zoJ4NM2",
  "key19": "5fZjVveF819m6RtsTeMrwJoipLDiVMrHoxwQzqVcn6q2fdn4PNMbMam2ZkzogrmRWHkPBvUaBtp1RiL5dXvwaJcz",
  "key20": "uVhzVtACjubQ6qKHYqn2JmbxQ13uAEHEvBGL42oRraeY2HfAwhMWJgLHshWKnuaNYz5h9wcHXGbG4yXoYKPXExV",
  "key21": "uprhZrZqeQyd4tEaPJdvgT2xDy6YkYvrwFeqqHTruVnM3Yp8P6ej4ZEyNxFyCjWwuv2GKAYjXeasEbQnim5UNb1",
  "key22": "2cwqKzx6XCmiGnfwPVkQK5eNukLiBfRRcypzu4D8DzXyWJ7o8uTBPLjfe4E7vqcHBNyQQiXyFVbHuEVCJaHAcnCu",
  "key23": "2L6nbUUGqvpbEUcTCqMfCq1UJnrMk8AmuMQau3BLt2tCComZB9Xt6o4RE755gRMHyy5auFRoDgSn24ePinwCqNYP",
  "key24": "52Fbv1aeqxYchthuYtgju81N58q8VGwnfpan5FYe8RTsFMWycijmWsyFB6SEM7qHNXfwX6rC3euLYX1ADLtfUygS",
  "key25": "sxjvb7zuKsmf6BoJ5Gw7MAz4tr1S8QncQ5DdkHqgjTD4Y1WUTXzMZCwEjgfSb2EFJ2ahmdkX5VmRRCUMfrUUKoS",
  "key26": "5t6rBooC5rN5fVYijeo1rpDx6F7WAKPTeWyrgYMGqcx9nDYP4tGsJvnfDkENQWN8zgAmGR5JTvjpFV5Sxj59PzE2",
  "key27": "2mJvkdMSB2nWoAArFjTqMtaqRx7XrksFEVxLsvvqGW1U32Wj5h8Go7LL6V9AziMpFJTZMu3mnAriQqNFYkkr95RF",
  "key28": "5MeAc1ie4ymbGmbJ3AgaprFzg7tq6DF16dJWALLAgwqYLkXMDVo8BuZNVx7CaUgCRd68ivApLTLTHBMacxGHvEzc",
  "key29": "p4aQtxr8rFZQfH7mZ2bYPpmGX2XUGVsubRnyJu7xzjNNsRuw3qReeoWi6AgnCkADTU3a1Pyjp83VkfSmKHZxTcZ",
  "key30": "426H7tisGFVd39oJtixF4BW21zRL9UfM2S7q3vXDqvFsZz8TbsRfsfUsogDbtFTjY5CWs4yXX4nnMjo5mF3qSmbD",
  "key31": "3ueae5HFQ2QwvxnShk8s4Ck48EM4xVTAqXvtirLSi2UWBbFjNajompJjTJ1fwCyia9Qt3JKM1N5G6whwDMfUp8oy",
  "key32": "5YwoGGjguP8VH2ZV67wcRqnRh4QVxMxAf52Eixf1tXNmWmma3SYtGqAbYLmgRCWjt4he4yncxFKuzgnK6VkXQ4uY",
  "key33": "5Cp4vdSkCQLNvsEM1dkyhUKsfcPL47XyFisBiNJDTUWj1UA3k7UBQgRcCJ2ZZdBn65FYNiGtH6JT8Fu9Ex91B4V1",
  "key34": "47Rn3XhBdJK1YbY4A91nnNwuAGU8u6D6iMYWhoSe67kTRmfTiUd2SS1PB8LdQG6JDof4V2e9WsK5zgfa74UZdRAp",
  "key35": "5VnPvuT2SG4ADEjfb9VooYoFeatdS1xH9BTz4dSwYpVPVuN87WmENWzrRTEYSg5iYxvXLCADsiJWrg6wUDyyFwBY",
  "key36": "3BHcdyu27zLGToXrB9iMKj7whhcqXD7s1eKvyWBRcq9zaNfaX9MTkjrJZcJURuQkk1faEpd7MEH6rauPEp38zpb6",
  "key37": "3Zvn1CCX4YrF7txRBDgPr7Bt2kkVfAqDYfsg7sdxbEw6crtb1tsZ5SFUcEVBuY4oZb994cyVFL4FqEnv2sJPHx4R",
  "key38": "39eJ7977CK21gN8VaATbAAzAMkdEBP6VEEBPeBdYDpU9zpNenp5RFydr52HM87wgQbWJ1Jc4Vbzr2sxYMcfvLf1D",
  "key39": "5LxQh1Jpe5wj1pWeJFk1WoyrHbtmTAV5MuYvVUiS1scEgUUW1c9E3xrPaaTKSh5eAjr5BJnjiAXCKfRV9LBVGPY6",
  "key40": "5p8r7ZCKgugfcoj6kZn6KDNsrVsZQcqXVXdtGZAzLHGEXipyzgxXbncWovq6SK9imLJkrbnoTgz8B1fmkiWAHMke",
  "key41": "63vgUrWNaqxk1gLNZWJhKNq4AuKhNNMNPeSuxhv4ULNMwN2nxjA7Nm4Wne23vC1Lj9iaJP3iXAjzzoEhfT68eef3",
  "key42": "17b444WG3mG2wvsjz6wamVyoRZs4XopW5CxcUN7Y1hYv7ruksQPFGAw96k9AWcEHoUdp6H1GTSgGgKVm4B82S7W",
  "key43": "GcE5wy4tebxzJ9bv2o2x25w2rcMqkgVD5nMYTJ9bLKojHm6Mnk1WptpkPzEW7yjYCw3q5q1win3ZDLGUA8z3GxJ",
  "key44": "5F8ypn3nAWfjg4rDzrUoUPr1btHb5W1q55aTVWafwuz1k5o7ofwhWTtHiiQRSxij998WLwJ3NbMfY7ubjQEaGDyF",
  "key45": "3AehWfuVPxFvxYPUDNJpt2EHgh3r4cgKGfNgWvTvW4vfHvRJFChtrHgPBBiNtSUsax452HEqwFwtSfGjjxTswbT8",
  "key46": "3bgdy9i1oC3ZspWjaQXC9FotTwoHQNKsgGw9LHLynpALwTHtqUdt4wcYf8Kb8TLf3jdCDFYxeX4zZgaRmPeMAKq",
  "key47": "3mMtFage45Uq7KtQSHbbiQQbxYg3WSN6nSdrbY3bDxWonmy3Y1vfRMr8h5uV7CWYwQ5YjbbPKWcCXZPzGS1Kj7TB"
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
