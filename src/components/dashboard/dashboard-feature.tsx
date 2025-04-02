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
    "3HzhLyziZSd3JdeySCMTAKbQU15xAfbBPfdJ7eaNUomq5fhB7vPijLnmJm5jhRYcJmq48te3LMxBK1yReQEV3s6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5am3M1gSvQxoWcv36N5JkgFXcsFc35EesCwW7NvDgXxmrDL5R5xvCunyrTSAZNihG4a8ZeE6odcnGLz3drvbGWfR",
  "key1": "2Wfqud8kpoavHMzvpVWR3Tm1NSAaQ41vwavAz5Yp4NWjTTchKzM7e9N7Gs9ARGC1yXZyUM25BD3s6Ez4Sjb2tDGz",
  "key2": "3RBdveSrwjGSZjdgHMVxv4YusrcP1ghJpWv3W5Zes34iacAsy4CixKp7zGZzKoq9f8jmz1DfJYdoD7Vvqr3m6aHo",
  "key3": "4LM5nTTCGVQyX1jBkjQTicMTcBB6FZhjL7Fcmse3FdJyN3n6KvohnRcNh4jgipiyJvNp2F2CCuy1pwUStRBxQnbJ",
  "key4": "4FgUzxZR99k3mPJ3SBRVZjdYU8SUuo6i7HTn63npNJK5kihLha5x14qABxqqqM4iYmbceTcAbyUmKqomCLmYZbCR",
  "key5": "TnhF9ECafDPULkaY9sDKQK1yq9VQLLL2sA9HPHp8Jwy2nLXRGKwydAf3hT5puAptCKExw8poGTcHnBZuMnXCS18",
  "key6": "47iewL5m1GHLCbrdavgsrMizFGm4MZT9C8FJArGCdvyThvfKdcyNhHz4QF3xnwhLW6ALzHDDCFwHJ7mGvkYsgRN6",
  "key7": "3FstC715Gnw32xN9zbDHQTjKANnMsUrARWe6BYtsVUv1ezZfTVQrddAQjch1rTmV18HKQb6Xn8wkH3eoQGGfGn9n",
  "key8": "5G2PiCGhZju5VDq8XwsgheicqTxZvmAN5vWiZzSpzAa9FKqcQX2LvVYsAk1pyEq2Zo7H6NrRVporxRBEjJTZCDqC",
  "key9": "4K12EDp87FhqnueFV2Hq6jeL4j6GrPuptAEWBWf7AnHmUgrXEBKGs1RNhDJMouge3BPLGzU5v8pSn3GVrb1ksk4o",
  "key10": "in7nRi74MBGYpSu9wSKY37Y47i9aVLyFVRGbA6D2pq183x6w3UyRDYdXRL6HoXbYH6A7bQqv1scBmMoQcpmiaih",
  "key11": "2ZhE9YjdrYbB5aaLfVYyT85pkHbxhXPsuqHLdQEUJXeMgeEZyD2jvKau33BBC7quoxKt8nDWnePV1PDCtxfenMDB",
  "key12": "4GzZaoMAfY3PT3af3QfHePDEra36W1d9aaAMMPn7qsUBp5Gj8KUqBkhAZ3cMA3ywYVFjRsaKwkoeXzGkgzrSaYzh",
  "key13": "5B3FPu7Tq14338wwKkWzoZnfr5mxbBaN89tAGjZajCgW5P7UHCSJ4i3UbXgbDzAsQjuLzJ154e82dXzCnXsxZJmT",
  "key14": "21z42a3gqwXuEkKfJEsr4egsVDKAc5jzWN2i5beaVZmkAYWzctkW7LNg4EiiwinpxqMjdGs1QjPYSB2wAmREoxDB",
  "key15": "2sS8MSN1RYvNdNmFEQnyLqc8kLnJo5RtfcKTXbAHCuUnJrDy2TGrcnih8CtxvMzcUmpKoHgsVLYCZ4UrKyZ6Tg8V",
  "key16": "2ArGapDpYHdw5TxSMS2vJ3yYXuQqPbYvdw7hgWKhEEy5EnaQHWRY9PPkReg54o4tXPxugz9SkS7hUfr8u6kPCjzw",
  "key17": "5jRPicrddcKitLZP3mRusU4by2HBLsG54M7LAbpx1nttdGRGpabPzmCGgDeRZi2PU4FeADpfjnThUXCbZV2ZQBNi",
  "key18": "52QLNqYm5k6ZX2hGdwjL9yKrTHJ6etBg6DbTmodjdtxmDPs275vc9cbLM5QAwr4vEvGUDZsTha5HggCbLyx6ngXy",
  "key19": "VWMQuFN9MHBedso1h2yJ75V9pyBgWzhGaA68G2Xmc9DMseg4A5HaDQzYGGqGasx1iD49Znd3L1UUpT5nFZbSPAC",
  "key20": "VVafCeRxVQ6ypd3vr3U32YBbqVhyj6CSrj6utjGX1C1fMJbswfDqPtqntFkAk7yndxQowevocBW6DbjY2SnjSi8",
  "key21": "XdHS646dPECMWuMMWFiYUa7c3Z1gEyQE8BpwLemZCWNoB21ehitk8FzyBCwXYPzR1xg1axPJs7gbD78npekZCxo",
  "key22": "5CUqKp9TdG2PuJnAH2PDGUSLUuYfd1eBpkeUY22Jn4bBfr4auwnsciub6hPd4ZYUwGEwuk4KE2uUEYZRPfeHtJo5",
  "key23": "2gvAMoa9gXwUodtXdQ3RjVwzmUZrM6MMR98tGZmv7WNagTCb1ZbZfs39BinKejUzHJBE8gJVZUH4WqmSDvtPYBRB",
  "key24": "3xAATHJc8hH5FATsZ2p8nqyVqH746qc7TfJLmsjMadk6MBGn85LW7NonAp46UmBEgbESd36kXppXdb5gaUhowWxw",
  "key25": "55as2zDLbGmUeFjgQWcPUKFqavBnHTtt1QLZ8kFS7R2AEpsspwmghzNL7ne4LdqLC8apUQbRoe5G1YQzg4B28XZj",
  "key26": "4Ts7ZgdNLPsDPYZVGHQ5JyfNCs4GgazQoScd3Po66d66xNp5rnKUnbm8VmgV7NJ72Ex3HBtAjYVwpWTr1N1pMZWY",
  "key27": "4L1B6fgtoQMmztaFfwVchv3BiBPNYq8m232qHHU8fuXyXxxsue9qa2NyKPVD3FxBhCEtnRvaRt29i7XzoPyAgJae",
  "key28": "5jbjWt7bu2dphqdYzkY1qRzBkKWmRnqypBdEDqUybUpKN4ZdgeZ75jwvZTDsnhGCyUCic9Mv4h6922iSRApgSFbW",
  "key29": "5KaHmmvup7F72ejhqFW2Cp2gxe7SYYrAGVCiZYq5kz9cd9XAtCRJ9Afo4Zo4rfLQtL3gduKy4CFHFodBsqd9uvSe",
  "key30": "2E3o3R8Cdpk95Gi18T56VpPA73th8YMaMhFq9RyfhiBf53YTLrmn9q2U9nfB7oDYxk662PHnnM9AqjikH8h7qiWC",
  "key31": "2dhAGokXe6tN9HkKuFUzyUBbDmZPpSV8w6KE15V5ua42S3aURNeSNjcJ26csfasKpV1jRD9jPvTirSWuFFktjUAA",
  "key32": "4PHVHLTCXmQdEVQD3oSRqjT83tqWAyNf9GC6yQf13k9C6qxSZ7hQhhAgwUKgaFGfAszGpb1EjuT9FfoX1KL7V5m1",
  "key33": "vwoJBRnTiJFFemUAng7uVT8srJp6NpPyN7o3tsTJymCRtGTWkVvUntCopENcMqkaJBeHNKC4FQHMSbAdr8988wb",
  "key34": "2BykmHVY7AXvv9AKVMnUGyf8SBz8y8NsCadZ3HxkGqkLyYB3LgqBfHNZjdvY2DKY8aGBq3SZbWAwnQZoLoFGFX2s",
  "key35": "56a53DjoSV2FYrGBu2hrbeqpFTou3Cr3gMusmS3CuUWZJuKhU53SMwvFDUxBZ3z7CeTbDgjv16CCcA3SUKMDT5AN",
  "key36": "4UsSaMaKgMZEZ8CcRdPHwfK14aVz9muWsgVuFziwze1TUXNn27WgDPmxDEzE6BQoyCsJ6SuZ7eSZbvSsprTiG2pM",
  "key37": "5hn9VVAqJdP7x7v1H339ZbNFALnYrpc2PmqMW3TXihpumxDvKkKnScr7nsZDWPfSJqgs2QGQLtg7BiG5guFNBkC3",
  "key38": "4Fcux12tD8MJfPqRAckXBr7hXyoMAYHgXQqAkVdkvH8P4hSWyk6pTQiaQP48WhMNBDtA2ZQK3SrJxBqNTtqheKkn",
  "key39": "5YvUsLS8pfASVyqqz9e7ghWqeHASZYhHr9WkkNvmXvn8AYp9X3mmue2yTzHDrqoEGF1n37bxsTgX21YZsgi5WhTd",
  "key40": "2Sw57RpciYnMRfuwAGKQsWqXxmjkMLrzCFipeCLnyFVfBng9ouNJV6TGoy332e7ZVUFeg2KAaPTuttN7Ygc5qbqc",
  "key41": "yNSaiWYNPCDKuZMbm9GZcKmZjCY2dNBX5fvppULCuoJHLEJQwpNWai4DunKzFALsSAER8G718KGdHBgh4T9b2a1",
  "key42": "tvhY8SVcoYcfXvn6BMKo3arELq6NVM2UcRhNHsbe3r62FV1d3d1E9Ctzi2gP9izQURK4yz22sjBCHVxnaceT9LV",
  "key43": "5rB4y6U96ZghA2t2FtJjEXxfFyzr5DWVDa5rF8ARoeFb9gKgn8H21JZv7NQzSjtNAQ2zcRFEm4C6DymMitEyXtom",
  "key44": "3fnSJ2gHxjhT6wVf8WwPpukeKXXCPL8rogromhAn2wWtmQnbjhosgLgBgF7m5QyWziqLXEQ2e3Ty4w9CaCwghQLK"
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
