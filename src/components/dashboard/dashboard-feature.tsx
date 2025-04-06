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
    "5zNeMkY7J7dgaMfzp3Fc9MjsAMpuPPQ1wd4Pxt3JkGGvpsQs6EAqaKDbD8F9Uj2NUQxutgiitNzkGAoWMnr1shDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kN2QmgzFQNky1HtrGBZc1mQeGKuzWXCDp9t2BM7jkYt2RmZyzfp91A4jh11SjKjvFg45XfG2U27mceQsPxLxmBR",
  "key1": "ezpBxSrbSrM2wXGEUdK251x8wHg169gavJrez37rPrMNrzXP8qqurvSva6kbCkeSqvpQZ2nVyRS75otLV2uzcJs",
  "key2": "23CZgNJ7khYhyZvKxEE1KFSMAAF7fvAVJC4sWyxc2ponFdFocbX2oXKVNnEqwUFP2MMSUhJkUTkddGmUbjZhSZd6",
  "key3": "5o76JjE8dYuSJsjVm5D5PqAaR3MpqWVLW1igRdCciiDpiBjRLXEQNqKaabtuTG2BK47CHxGDdNFuhYPWKDHxcZou",
  "key4": "5KVR4CmbKB3F2NseX12X4wTfn3vMW1tEBqLEADBKhG7Sa7HttwKfFm72MpLDiS4BAPDuoQHhEaXtnTkkuKRtXuF8",
  "key5": "5G5eWgFiTnA9SY3VQARuFfFPUmxsNcbyNJu1iV2DbRTfjfepvJzxUZm93hwts4CjTLKYxHb75ZowFscMjFjenuvX",
  "key6": "5PT8odwmJjs8ZmTrzsh7vrhQGMsHAmmKdbFexDW4QF1nwrgdEbM51Q1Wyo36R4c25QwPrvaEtgx6SeCMGG3GYnPs",
  "key7": "2RmUBXDp4L35nYqTwdKdxNFHhCHJ6NPkBVAauNpXhr7LumoFNGgkjF2QQDZSFSE6kRdVC46cWQ3RxuLHmp5QuyNR",
  "key8": "42B9Zoc4TG92zQNTszHpEP4ATn4BdVXeKekNbiECTgHExACxYmu6KWGTfgmH61PJWzypwjAuGbqGAD2Qh5fqGMss",
  "key9": "5AhGtTWB2HSH1Mju92dDbZvNZxrmSTdqJEYHLmdmjACwWr1uVTPCPuX6qCxMBiZRExmCznqkF13ZydWV5533kzgH",
  "key10": "54GmunaD5HtMwskSEsG9cg5ZQbFmHQscmjEivjGcGEW9bJJuMDyr3bWzQC3zyCSWyH25wgvNdVahyxE8guxCiTDH",
  "key11": "3peW7iUfk5QnA99ssLTSmF3Fnbm9axuRkSrqt8GhEjkCeD1tKmGQHBwTSiSCHA6uCQZpZUk3tGbz2gfDPBusvW1u",
  "key12": "2Sa9tbN9J8P1ASCyEpPrayKQpQ7XPzEUuBrqN78y7b8NLE2FHm7ZpykNn4BWx1QavbSvRTg6xoH3rDnobJTaGp4q",
  "key13": "5SijaP8HyEirENeHeuo8UekCnnNPrFnZuTK6nAJb2CoTu9WcsJipobnMAAcyAzYhnjUuJFVQrXKsD95SoQoAm3sT",
  "key14": "uoxWY1VFgxBFvD8rfCwveviwa9iaEJ2oPhDMtDJVWqv2FvMKbm3vdeoza9d5K8VKbNV2Se3z2dkx9n6Rb9VsHdZ",
  "key15": "4y5ZgLzi9XotahsgCjSDcCcNUCakHF1dgsGDCcPquiHm7qgzFNR654pgrenRnPLwXTGJ44iSPqCry87LBPtHBN1p",
  "key16": "4f2V6TUdteEcy3Rr3xufxnwVsa7jwgyiuS9CppJLJrcWPm4wxjQSDKMKQTkFeUcFKWuBfUwbuAkbh7oJKCVRPCcY",
  "key17": "5Ljh5SA8kq8iCuFAn3n1oREyvqyABEN2A2fKA6RVAM7Y6tfokSWFqxmpjK7EBZXtTHSSKmK7p1FSrws3j5akxwVF",
  "key18": "53aAG3FFBbQ7D7QZusCKtSWU5W62iavzf3vLVxEZEZvC1HKcobgSPcg6Gc23qxzJi3dZZYso47K9VEu2VDArm1PV",
  "key19": "5xvA4xNT9kYN4fM4XJVuxjfXCD6MvW1g3acj34x3w7egvpkLqdZJ6XHt2ZSh2jiTCVJrDAZ7Qwmr8ASxU11T9MFa",
  "key20": "2rhd6zZrMvxw7bmPdo81ftzFZKZn5xd13sYPVzENGj7wfbkMvGcTjUzVoS9iEdiGwpHnCMmkSupQTSeUgwhiFnp3",
  "key21": "43PpJEFgGVZE4j6pUMUKCkKh2X9JRNytTwieSpfFpPQQJu62rWbqePjpFZmBqaDpWcv51m5nJfWNApWPjinnJ3F2",
  "key22": "5SEWiGYtgKBt3aHGUM1mSknKtHD8JrjkdbTXAYZJqoXnHXwgAcVmPfMw2NE3UttBr3uAbbxQf1q1rGcv41HUA5ap",
  "key23": "4Jt3kvFYk1v1GS5aJ6u9Y9Kcti6WBNDDGnBFj3EjeWXNxXRWAwFojZKqP4QpFdYGoYzENTPpFvb3ZPnfL9gknNYH",
  "key24": "3h29DqCvjNXdemSHTEirALuvjtsJoMLaMg1sDbeo8vorAA3F4EUqE7s5gnnLBtjXzjGLAdNA77ataZzxa75E24Rx",
  "key25": "2hMUW3HyASSk9xojLwJCNwdV6hFR61mzvg6d8ns8Rv5mDYgq2ETp2DzFufQpYXQuAddJDawujwkPrtprXEft5TiY",
  "key26": "yorwgRPcSJUAtDsfJ5DK3ESjdAVYuzXZcv9vPaGcb52TAGzHehEA7HtSRkxLrRJr6yLbH6sJiCET4f92WVdoB8t",
  "key27": "4zHfWdtnf7wWHsuNbi9kwNtfWVLJrGL7HiD1nf6CMesJ6yCwfKVKBbVAJxMsG2i3eYyZXhKqu7gB4jzBLv7u8bBj",
  "key28": "4fkTVah5W66Jq6PD7WmBepqaRfjYUnCgQDCcQByRYgQcJubMWitWN3XVVwjZjSCSZLGjUaHsNjdU5LVArZmvX4fv",
  "key29": "2B8gfCWLK5SzihgrbxWDb5mH2EEm4QApEJQEpeXpF9ujmcjiPcgZhqwCmdkH6qGpYwdzT7r4jpwwDcEGvxTezNiX",
  "key30": "q73mB6b1MpyNTXovnPKYxVKByaaNJiP519Mn1dBoycAJysZNPA3WSERvG7UnkNV279FRiT7zKrv5app7JEXyv1B",
  "key31": "5LrPakVVwbpqfZ9N55HNisLXSVLr9oaWE7vB8qrVXMhJnfVz7cTFB99s9cCAq8hukLQgbw5v67EBw83eKBLr2XQW",
  "key32": "3v4FV6PD4hXiRcdRwC3Fpr7KmCgqJPSt9JyHMxBcdWKvbtPLCRpFiWit2E7dRXxztLPY8xhkg75Ld2kGAi2cc2yA",
  "key33": "53kMPfQYXnSVHFs5kqGGnSiVuJX2UzoUrpAN7ZKGtqHD8oLQQaR4wZLNjhJd8dsQLPXohBn9UuGAAjBR99QyWefR",
  "key34": "3QVoNm1sX997QRo5LSaDefCZ7w2CegRzuHNYsskJcjBFaeDd4vw58mW4uxRLCFLaTJfEHXCEmubDLVdVi4KNHAoc",
  "key35": "2RWT4p4DiSrmYFcMy3naxCW5gS1gxzowgifqDarBNFTGUJe9jZSB9CLFPgKzvL2uju43Jm44caUHrr2p6yxoUwo2",
  "key36": "4rfFGgXcaTH4qwRku133tgapY5sHpNNzYa1BHzUcyLYAfxUfzD8pZ27emRwwEArU3cWsVjteGxQzLUr1bpfJdfRs",
  "key37": "5bpZkCeDDWpkVCoSDon23aQ5AHE2txGohNUg4vd6Czw8WZiQYtRE7koKRFrAW15HMMosGtakKYBuCihqGiVD2Twp",
  "key38": "24vG5RSZCptKUzAmsX5F7FHrSUbHN83VZMMMYxkUZinrkzdK5TVqdNKRxDSGtsQHKU8ZbBeey9y33QiZcFHYKDAc",
  "key39": "5khBkyjPGVfkkyMszjPvFPAsb8QEHrmVnvYHHWXREBjxo4fX6UQ9L53Dd2xcr3xTPyi2jwJSc5VmSHWe4ryU62gB",
  "key40": "Nsz8Uis6HUFW78Y3qu8ZfGCm5HNFzx9VbvUWSVLNDHjkXXmc9ssK4325PnUuNHFGXgXyEgkebwWiszATfxMSkiT",
  "key41": "4RixzAvtMPRYV6AM8pMngBuvQ3HVfS4jdrKcSV7kyittRUftarGdxRzjQscep19iVx4tCouj8QtZzS2b9mhmF6vQ",
  "key42": "3BLxPPdU2JBovbVoSwVtFYhvJYGwCQAH9b8qR16fXiPKyXDTeHoBKGnTHAVt8pnSUJZnkBWgrXRKbXztp6w9CeUa",
  "key43": "2bodyKHSjDrT5wpwNMM3LfJRiHA6PGsWPKHheVsKTLFr3qtuApdnR7uCr1MRm7TPymkuZ2yyvewzQ1XCNMhcBpq9",
  "key44": "4XrmWGhLuYC7ZjVeTbx3zzUBzmb5Ah7KThmLsZDirdvoNFW9qpdaUoJPbThuVdFf1DiTTtFJ1Bn4yawD46cjebfW",
  "key45": "JNv2YW1UptuKPZ4SHaEZ6rzXhMFNn64UM6mHXrHxMjhAdv7ZS7LNSAmwn3cyZyhw8baZevtFUiNc1XRvFvzfw9n",
  "key46": "48EdFtf7SAvKfywF3inNguLepjQJdbCRkGiP242DHKfAydbUcoURH5yT3ctdnNctohB6DGPmJE7L9JDUno7kvoVJ",
  "key47": "v5GsM8pmA7NtjZsPDtFFaub5r1JB4rhtBjxFSjR6gfE7L9WofdZpxGmMumdbLvHJJaj2zW3muZjUhoT4DY8gKdk",
  "key48": "4zQDdacBpDszQRNE6rSsGySeGYVMqb5xPeU6SFj5Brh2fukGAJkUCqE2KQhhW1znzVVABeZXkRE9A6RWjHciDaph",
  "key49": "5WoXLcybah71dFGNMSYLdwPt5sjXVKc3vSiYLeN2rs9WtBVpQdzwtrXxHjSYeZ7jU99j3PEMMUYjKxAL1momjHNV"
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
