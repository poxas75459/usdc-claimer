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
    "2VyWg3o2mUycRm2hYXJrhBteskuxeqHVuBmUeMiC1Gw1cdiHAHcTcwnVK29kQgoiYycvkGyZ7UPpjxarwVQMHb1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfCX95x9vfhXEHnEyo9u5qHbLaWnXHm4q6FenjLawNNKb7BWEyKR4v3efV636AyM2uuxShQKhqDtEH8QcEj3ASU",
  "key1": "4d5PWMQhyztkLimNuWDeBvef6PaVyprS9nxNapeoACRZpRs9sMeWx8KGAeoAweCeeHyQNwzq7TA3cymPndnQPdPV",
  "key2": "4ak5LhFwJx9X54p74jQLMPdMUWigSN11y5TQyjFwHgdEnvCNv8ai6B8LhAiffVsaX3SEwKyMuoj3rBGuYXtub3T9",
  "key3": "39WNXTLJuUNvFFjYNA77P3S8rzW1ehnqQ8m8o1kNAsqUEZ8GBnXDaKNoJoJipm5q2gR1qB9DZB4ChAUjXvR2iqcJ",
  "key4": "qNKPCMmQjntG9FypvT1Mdx2hAPLdepJayN7xgcJ6ysDe86cHuj5rDHSbPR9nbeiD95DnjWz94BhL6m89o5KpYYn",
  "key5": "3s41Xa83HW5W7iTEgBd1mipDrkauu7oDNeYbHUy4JRRLNodm2XqtxCmiuaUQ9nGG8KswA1Y2gfNZLXGvbGpdQyA7",
  "key6": "4zV4r2WVsxwWCZAWb2uAK39oV8P1XeEjkeC8Gejvxp3jA6hdTnZhF3DPwhvbKbLUvUh1qKaiGnYVhrT2Q7BK3vUx",
  "key7": "dwYFM3hC7BZMPUnPYhDo4cjetvn4n7fFDnX611cZCtUfXh1bG9tAkQRGsxMdPK4tvKyxcyLfasH5oscCvDua317",
  "key8": "3kv4xt3yi7c92eqLdze36TzhiwSwzVdy3sj3QzCQ2ctYDWWvQ9td2yBdpKn38w1eEuwFqrd8Aw7v6Twce9dbwLhj",
  "key9": "4G6gtgGwxVRYwh9myWZSN4sfQ7iZdmsv9fZuYMDGFwXuWvZ7yqrPLJt5vcrkzDm2AvWvDcLNSXE6FW79MYbx36r5",
  "key10": "MZbn37bh1B25AzFfPBZtVN26HEf9BaPHr7P5KLmnEL2LSKyP6qn5ymh9bZb3DrqZ2MVeCvJDQTf7VDL2hRnNQrr",
  "key11": "4xWSAsQuspJ6qjCTLRYCK1HUZN276aHjxaESFs5oPmytjTP23SqW5SGP5vbNE5Gq5G6X4jkAmMqRKBduFnrGXkUA",
  "key12": "44ociL1o3kf4aVjtEj4p1GVDr9AtBaEe266vK6PZCHCB6L4jbYnHRbyoArzE7d5xFVjwmw4JcHgJ9BkbaMnFke9v",
  "key13": "55bqMrXu4cC1DHP8osPLxYZbcHT22kyQKAA7eYzVkvwSjNht82avFz9JrNniQGx4gXWwuAjQKx8n8UHSGTygifud",
  "key14": "2fn9fL5YJVwa5DSA7YoCA68jWqRMmQRFvqmnuzSGCaP4oG5bEBbdiAgFtdNUTo5qUT3Go6T5z9MBLzZP2mkzRzvF",
  "key15": "3rn3cGMKbq6DQ17pbkmvwy6RGmnnGqgLz5Wk45h1XWnHmsMdDiJoP4ZLpyyDeHHYgxh2zUjj9KxpSvtknb3314Jk",
  "key16": "4UtYsCdnyevrqHv1oZbFASgx8GFXKvs2M9sjBFxvmy14hRm7peBckqtgkmh1bE6UAW7TASxaeDNna2rXzXjHQGNf",
  "key17": "HvxsG4j4E9BvJvS8rcntZ8xmmhrFGH2grWmrTgh67LiEJmY9DNzVZC1gqTzEnC6a5pd7oBwJG8igBicnBcVdwWm",
  "key18": "4ibwaNhBsBqmpWv9mdy6pGTg149tJFNnj18YbAAbEVvF1FwQbaG64qiAYUuptaXLWoKnu9XRwFptXbfeJWGh7FUd",
  "key19": "53eUdQsVbPJi378dh6KDgTBgQ3vCT25WxJZVY8o8MrRykRemtbSo1q97FXcr3EGgxJ3Sj328RFb5vxHLezzbxjHF",
  "key20": "3yqK2xQ379iSwJvPdAepUqrdKHbYb3cpxCjp3uKvJUCsGrqrnjzmNRcF7jNLdFnY7Kn6N92fodSjvvwcee7vek3X",
  "key21": "38T4TPWD9wRL3NHY5uewYuWygnW3oGv1HZYbHbQZ7fKSzrowmCH8RTp8Ushi9Hj5zRV3zcCgKQqpbPTmjJadU9hN",
  "key22": "2qAPjgwYmyFXdmAp3adX84SonNAVWsSF8NTbXYxkcozNuWpbdv5i8GXQpjGB53KCUmZ1sKenigrGQE7WQwoEP5LF",
  "key23": "3LhsCF2BPALpRRLRa4eX2KTzjdvRruYra6ibqBuKwxPxY8Kr21M7wTQE2nR9H6Yw9KcUHdUcwtzhD2N1kDTQn9mj",
  "key24": "2TmPVoQv4pAewDVF6vgdh71LXLcd1bTvn5zcuYokcx5T1wU7fPAtkGc78NZrZf75ByYnPEyungTEBL3ZRyt9wtdX",
  "key25": "4QonGQQvdPmrLsis1bEkm7CpFqHtzRbGY6dGFq7P6cJ37e4L2qcD4YzCxQWxU7JrQHm1VZh4tYadwEp57tVquFyB",
  "key26": "2PurpbfHFSwqnbrMeayV9wGiXpq5pvVE5xstjEXBUcwzW4C4fVCffdTW3XM69TFhEDQRVVZyMwynaTjZQrPhSgbr",
  "key27": "5AHEvviMmMyhBPce1PdRLS7Pxx6eQYP77mh5mC3EXJeoJ3QZGyvm6Mgix3g7nxLbRMNVRqgFv9kHWgZ1n1bfWn9w",
  "key28": "5MzFG9ncqCYSkiNYp41yQH6Gt7jLccZtXK6BLYr6ESLa52DkCfDmRr4R2AD1QdfWZJ1EHXmioRR4AAJoWsHkubGq",
  "key29": "5MmEhE1xro3d5ojQ2JeAeHCiasauoxy5B1sebv64WmhedPg6AWXFpYB4C543Dao8nSk1ZX9ApkAKNQM7zT6rXytJ",
  "key30": "4moiyyU8RVARrEGeWJSmCMJsb7svFj1AWKv1HiGQVsQ8kyJoe3ZwzSk8g2Xw7RHRJJhHtN3VDFn1wYNUHQ4ixrmk",
  "key31": "ed9WXiEzzRPepQe8ZjBN64wnnxDTvUAK4WKHTmS8u5dp96QX7Xj16yBfuUYrXohX3VwscV3jnEwyJ8FMns3VBkw",
  "key32": "2ge5yDAfARHTbHTqfut7Q2j7JCuueggnqSwehbPnETMiHDWEUGtGDmBKbEhi7YKYK3PhmUT4iBt9XjfRCYS3uQY6",
  "key33": "4mETbqs2HrxutQC4cWnJNkvpnMrCPdNqfKNDWf21vvc2ZhvXHAfjgkGiGRZJbhXjRpEmQqg6tFS3nuEmSe5KZchX",
  "key34": "392HZnxfucxk9JChsvWSs3H1Wim1N2yj3REtLFKEaCjEvywGDaFAsrdwGE8H5DfBd4M8dyWPcQdLtuiNxTMbmi9J",
  "key35": "3Ko15gUBzQhq9M43G61j7bfPEDQNGoPsRKsCpNV5VzSr6DyAQ7344A6Txu3LHF5T6ZoFwqUtNY8KGp1KV2WzzBDR",
  "key36": "4EVLvbxKNQesLkxgNXtWvfA2DZpikyXwZhcZ22joyJSUJi4Q6NdULgFvXkDXyy4YKvWzQ1KVUsuvCcTy9GgM6G6v",
  "key37": "4QQqtkVMv8eHMpKv473GfhUBLU4eAJ5kCaVAM6QnGsxWiHeE2kBgCT2e6dFFt51xRbpWbnQX4QhL4xNn9ReA7NzZ",
  "key38": "64GwJFH7piJcGMGvDL6d1EY68ecJTvbazg6CDNznA18Yraj5UcXWonWdUdpFLf4suGChWwAHCqgBPsdzKDZ6FiPb"
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
