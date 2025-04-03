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
    "oMBFcVjaozszSTAuyp5oZHs1qgzgkfA6Bpq79tU6BC6vHw6RSdzmF2SAwnXrEDs7VEyHmT8FGutjKKBaPu9RQNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xPVtEt6LJbNCGssdjoqRaCwiLQZjZxoBxactRjLJXzPPV3e7rEKrKgyuJcAKfoEam1xFxrhxnA4V7exZKNFg5Zd",
  "key1": "3Hu1Z9tz3Zzyat6BXtvM8mhQtGpVH913G4ExA74Dd5rT5uSHvwkbzQ9Q1HBXAbUhE7JY6XUGKs6GEdvDLZMz73xv",
  "key2": "2zK8qAuEdjU1S3ync1wgzGNtsekL8Th4xxzcFLPQzPNmuyN3PoZksLCB5epvVK5gkNtJNCEmUUj2RZ9Gr3XTdVY2",
  "key3": "2sdvrJoW4LFN3m968ej1mpEJ5usK6hLahAASFTKakusCpgNtb67eijEXoH3ZBVoi2YpCW85Wtd2ZGxAoFa8JmG2F",
  "key4": "4r2DHBkbJPBC1kqpqmCvZAnUUchCyFSZ1DS3QcE4RiQnsTs6kw5LBtBWsatXA57sdHR6cRsnxAtBpLDx5Yb5Ts2s",
  "key5": "4Qc2at4R4eYdjsxKPPU8o4Zf812XV2bC5pQ2FxBSADuhrHsMVRDxKs1KiDD4bCxXwP2Pyeh86cZPdA6J7bALZkxc",
  "key6": "3iUk5vxScGMdby92J2UA7D1pwUT5N7eZcSeekLCpWEfSW1yVBB2qFmJR4bkk24C8svSJvRPxL6GFAYUsP38MbS25",
  "key7": "o363qSjvdjQgKtFHywkTHx1YmRZnSbej3F5GXy2vySu9GXG4pA7b8G9Z3Mb6Z3AQwSLeK1cyLupzGowHDKbQ21T",
  "key8": "4Zh8oXsRh8RmaVusEf6oLfJEs1igkye2ys3qfFpPRAgTm6Y28DZTGicZWZh7JWfEVgX6ukZLcaPyFbkekgtQonHj",
  "key9": "5VCiWAjiTpvX8EtNqqXX2HLvEMDFGKDNbemaFJ5grTfq3D5QdTF6ygWKoNqmbh2aLZVuMcq1uPUw4WWjAWt1UCii",
  "key10": "3XabHRs8GL9MBURbymE4QGZU4Trdev3uND5FXNWbkLvPSPCc3x3RwsopwucBuDR7jXvR91oWUGWNLexVhJq8hvUs",
  "key11": "5bc7XpiGszAYbQ6hF34qSPhaJG4i74rhXrAcyhXjByMwZMoiQSaJZJcb1EGzGz9zWX8N32qwDhgrY6vkN6znxH1k",
  "key12": "44sLXP6zfmTRQ4gyJCRnSGMCdFkpiBrZcz3NX7rA6eyU9QCaRALmEep1ituhiN6oGQRbUaMCnvsxjeSf1PsdihgF",
  "key13": "3RY1G3xpdk3DDVorwfULQGH6f3FEVgdXGsZncx46E2WWFooUH4YUepd1Z32fcbeUYsTmoL6txbHQZDWtwTB9vkCd",
  "key14": "5cJdMty1LztXkyGbWBcxftpmzJkWKXMWi5RAh4p6ZYpD5YwxjDiMgPsLR11uVoFLdS3PRFmGkMAzSM68w6fyzY3W",
  "key15": "4brRwV3VmrZCEtjnQ3giKYvhgfLX6pymUbr3ykEVZuNSxjXFddhsqyEZc7zDEPRrkAawT18C9cpitVNPCpT7EWSQ",
  "key16": "2B5RhmXHSyMm58ho4K2jPkqL6Gjkb1khUbFdApZtSnJk4XKjJyHPyTebtmMmUpGs8cCRA7dqvvEaXheYbwo5jzAo",
  "key17": "32hz8E5McRuZdkWVb6Ev89R3KYmFMyoqh4x7dzJarp5uoyuntafQYywGaq5KMgBjsi76yDTKNys82LR7ACSTtjnE",
  "key18": "2NN5Cc4wJwytBQFjF2wcbQr7kmVyRqufqcPoRizo45SEUVqvCXFRgWU9KLQK2yaoRdA8nSYxYTNEWiTpuQphD7Kd",
  "key19": "5eMHb5N9AxF7ReXLnExBxhyAyRvUMGCG64ESrsv6Q4To4fnLFT9hKE4aXqRLaprjBKv3GPJJXXdnxnQNEszbvDrB",
  "key20": "3xc8iTGay935auEKXVh8B3wNZqNmeBYaU6f7EJmF2A1r8NH2q3SGzUBT54bGccGXx3HznhDYPZtVRB9u56ziXaCR",
  "key21": "3mFU7hP9ckjnJEbC7BxqH1Y6MnhhFfBbDArn7N3NaiQ2uibYnAAbrA4yFFaZ3y4cBppyJfwJVf1bwzLFwRTRPgjH",
  "key22": "3yEBuoocNLuWDnPgoVU2DosJEhiFFXUzTRaBGTSYuuzxzJ1G3HwZatQTymxLdQaNUb96HCJ5yJL5Um7F4531etEA",
  "key23": "3La7Jc2YpS2UgjcvHP35m1oEQGtsp5EJ1Cn4cVKrN4nGvKXU45zzbuVQZpnkiTmpXCVWAsFcJvHSKzpaQ57JHQMX",
  "key24": "4s5rywHGvW1qa3W8LomJaWsonsF3mc3PB5LhueLRFsJCSZuoS4ryVDWK48ASNbggojg8KQJ9gDen4aNHgWQ9FQWX",
  "key25": "KgyQJSsgbxFQ2DPn7MV7ZET17NS3d5D6zrKLBhTeKBoSEDtDBZoy9fCbVorN6L2ziNn8NM3iCdTUM25XxLGZUuE"
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
