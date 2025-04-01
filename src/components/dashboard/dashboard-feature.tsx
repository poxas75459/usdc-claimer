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
    "3DsFqgbycPtnXz6uzx72meTYy18TSwWBifUsPPSG7XwX11zJys79JrcX64fGegg5JPPrAonuaePUFd1Qoan4KBA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwV3dFE9Ei3QmZgfemXU9fynR35Wr7VghLev2NYkv9CXc1DNeVGr5CiFHQwP4GT5cYdLTWf7NBA9DoEN53Fg5np",
  "key1": "3Snfysg25veTRFPYACBjDDCR425efAdm1u5ceobboFSiufXwJRtyWXGw86bhHwb5ub7SUJ1owjvMznyxart6n54q",
  "key2": "43Z5JvyXzkFs1PjPtjczgaDjmDAAC3vkjN3JKzKJWHhcq9Hy5Lh3VFjaHgN5avVMZ7MqtkYQBi37PsdtH7aHQfE3",
  "key3": "2BgbyZkF7yNoQxHdhShNT1mFMnTyZgqmPncuNRNxa2Xvbd1NnngH6c8nZR1rTjnrvG4sso3Ch2d72k7Muwh59v3H",
  "key4": "5ezHXCqmGS5gg7gqoK4eoqEgL9XkNPRGpoMHr8EduRHuyfHJHmXMLhf9LiaUzj7HhSCMJWmXFCbRvDQviWNgE9rb",
  "key5": "21JtvirYzxQjanjFWrGLXzXUnxGJKeLAdQ3J9upgvjVGrNNM3Q9M71BJzeiYMT63hePNjKZnix6oLNmwEQharBeW",
  "key6": "3srSkDvvYgiKm9JKDzt8Zd8sDSr6qm6FF3bW8tbyj4jQmkXc34Z1h1XfcGf11XRtcNRDnXNJUv8UQVcZUos3TV1o",
  "key7": "XbXu4rBh47nGchFhL4FbRvaS91KiatpVtZicmJuwuhWuWfSdJCwVXLZV78HN6S26VbAzm67h8nLuECemTmJHfSD",
  "key8": "5mmK1vzXaYUN3d3mK9rMTwEQd7RySFU2kxWFcoYh3WBfLH87orPCidd3t1HPkZaP8meenLMdDFyT8pDtQEXYcJtM",
  "key9": "66nmZLbbiBV9LZ5rMtsFgRzcQfrWShb39CGVUnLbrGiT5boP2VTh5vxCigczf8hdBiwhgMMczn6ALvZVJvckcsAD",
  "key10": "3myXUHxAn7eMFNPMHLk46Z6DuTpnUGgonD6bZiNnxW1hBD8XCFXMdmN3Hh2xec3i8oPGmCoSbcWKXtkybRWi1eCV",
  "key11": "5qChgyJTdND8Kw8cND39hjxEpVpEWej22sdBoyNogVDFZuYueBrWQcSg5yHfmt376YBLcFQjBsqzPRAtyDKoKnZT",
  "key12": "4XroF9SGZzRhiMtvNeQxK4GX6XA4UWPDNwknpXW8gXiRK2ti87BhA5h5H4SiRhDhozKpPiJsx3sarW8LimXcx1cJ",
  "key13": "94hW4PmWQy7qJED16Cw76idvzB8fELfkQnhUrb8hKoTmSxAkd4sr6XFzMc4eunxurw7SqJDD4o49KYxpCeqm8XY",
  "key14": "3iLRJPpyuJXHnq57xQzqAXyyKfG3DEu454wBa7PGmPGAKv4ArLSp9t84GJ87KTGA5FPXLv4CemzHDESpSxAPYrAy",
  "key15": "94ZxC4S3XSJbLcJ2h83chTBbqzRiQgKhwiQViSXzRsRvyauTRKt51AXN5cvz5oVvdXk3HCfnb2kh7wwYmdUBGCB",
  "key16": "2t5qYcUGiQdUhef7xBf4iSxZGf4csoMaThCRuT8qBiXJoV7VVdrH9oBbYf6VGuC822vMqtWWTjjdyWoiCXrMPnhd",
  "key17": "jAzRUL3QM5p2JQQb8eh8hE89d4eFWfEbiVnwYTfJjtW4HSfSwcAWsraEaYhefh7KCVM1FqEbsXBmRCmK7kfKyLp",
  "key18": "bzsNj8k2MSEB5QgENomMjQDG7ssD3Kz5AFZr31X2FgLEbDt1gGiAb8PKiBbyDYLvfhAY1JbCyAh7fMM4xoRgbtW",
  "key19": "2GmAH2noXKtnSnFNytvtrydjCVLFXvRiUAMqZUmFkGhwnvCHAWxLgDMcqrT9iYtuCVvsPJuZHDN4N6mKkaFhZH8c",
  "key20": "2C9k4NikGpjreHoo7N74adyRQxRtf3eazW5Gsfk7KJotTdpCsybmMq9TASiA5Z941fEx7rrAfmKLUQqN6tHPxaW1",
  "key21": "3iyP4cnq4pt6XJh7wmR34bMrcJtxqAHiqynBfiHYLMPnQymHTwcwMQsmnZJ7YgF8kevdYX8xUHQHDWFkDD3nqTc4",
  "key22": "3jUFCcLiuFZCiFBqxzEzT7LSBXc3BmsrUufqP4s3MFbv5pY9MftPELGgYEcKbfDRFzJvTLgZJexXYPwBWpTuPxXp",
  "key23": "24QWH9iShs6C7GsDySBp8oq4v1b74MmdSU3sKREvxwAwJt1okeecfuvmCfn1nPd95GWCrk3ZmX5B7aDzeXKowffN",
  "key24": "2FYSCwTjWTNaPvcoYfyDHCZ35323hdNz5Q2YDtKJakAr56ntH9DQzwNCvnMbDMdE9j6p6xxeH5KPsySyZjQUBcKy",
  "key25": "2w3NqRgBfBKvcTsdpkrQY4zZRPy6vwkiHxEnyRcBio1NchunrwtWHXsvKwPHtVGFcZFm5Pp4ZErQT583hEP2kcDD",
  "key26": "HwbT6AsT8QCL8W81XYcW4qLbKFCjcdmF6e46etNfgAgmdve1MH6hDtssRa2ssGwh6qgLhMipnmZjZ3gy2gm4iu8",
  "key27": "2aZBPkh5DYgE2JmMMgJVgVM1exTHyYUEB9pKqASAoeNhRzE72iLjFL4RNukx6VbkPnKeuKpLDisEBoBoc6NuaYAn"
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
