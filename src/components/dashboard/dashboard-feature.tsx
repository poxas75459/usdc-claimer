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
    "jvzTRTLoDmLbrhJSPRm8hnFSivcQfoxLjrGYJT28N3HbyxFmQ28sGY4iaX7VmsyRkGccdt5dSm927jCAwjnAbCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpNtyex5aXTGxUiJ4VgoykPJ3GNaABNnCP4fBvkL37kfdK4DdonSFhviffZuuVmM12rTXqJU68ed8ttFyqVVZhc",
  "key1": "3skHgjHx8j8jcGUphTLy24AY1b3VfH1ZMYGkbQ7gS42maaJ3ULzwtgYBYYRSHgNb39MVCRsRadK4UAMUghHwYJmc",
  "key2": "4PQzDGvgLJ2g29JfTr7n3CzWqWwyJnubFSKQP9gFRNhvs8Y6gFFuGDrq7M8EhQLHdqLJYVPfd7geVwGfSJ19VBha",
  "key3": "33PEJenKih48b63Ba43V9p5r65A6ZWVgcDZVBDWB5udNEbd1rCPitikfDmXJ9wjHbmHpHGxhSjnLXDnQGBx61gXP",
  "key4": "2xvuqBJ1UZ9SYRwSfQ6gKfnp3f1Ne88kqXHcFwc88SQvP4TsuQabQxJaJZHskQqHzMFasdCSLpucpPgNLthHium4",
  "key5": "3tCiyq5ASJs2Pr6dthnnALhEiQH8TB9L9Kv51RiyGkc98SVdrVoEWr3ZoZLr7ujJv4KfXbPWvD5SRrDKAHWPnCtc",
  "key6": "22XK8fWxEt3ippRYwK1RcPRFRGfLyH2wBjckbzcUe1hXDMCxMKUH4WHz9XXwcHYGWbKwHBa5CxWBZNBtDKUrBjen",
  "key7": "hZdhG4ZhhASmJBaFCPDgSkWvDkuUSH9FDNTSEntFLpMVRtz1HhGiup79LeiAjpMD8oc73w6XuCNuruv5JCJGXH7",
  "key8": "4n6AkxwQJukZH1fSBX2jqbKoZbqRi38bHqs5EZJYoKbX3k88626R3dZqdarWFsp7JCPNEzbEQx3aQLJx6FBzv92L",
  "key9": "2ATowArmijQY4tVwvWveWUbAypq4jDWptixMGLBLLRk5tvviLrEYQQHJWfUZgB7anzvKSPniBuY5B7tNhR5NtJHZ",
  "key10": "5DkUPkMQpt9cNVL2KLQQLdobSfLiwu8ZyZYAqDag9Fd7eSKNVHec7nmnwwJaiic2RPABQY5XYsTNfyFv2us7PVrQ",
  "key11": "5rktgjEYiX5ZkwE854xxf94CydXS5DtN2F6up4YNBsKMa2UPjmJQdysKS56bX5ryXC3R83BJiG4bFXSuNXworBYp",
  "key12": "2MBFx4qoZ1TdiJxKGBi2VvAHBEQSuJWTNpPhB8jDRCebfD8km7J6idSiWR1vVbKNBBEZDradwcoW8ZLaqCJc5xET",
  "key13": "24YEZYj6uSh2Rp8VRCrKeNU2GLcuC19p3oDR4ALtNkzdScNUD1tDtAGs9bEcsUjUciKDEjPLToEXBKGFJMY9dQWa",
  "key14": "YdEat8xjpi77ZMhdbDBSvifbgJr85wbgbq19i7SnZowjCgeAXDMhoC9WwvBp144xnYw6QK9xFNBoKy1yRZ9n1pm",
  "key15": "2sWeNnPbzWr9uCtNM5npu9fBqHFwAqkUiPK7JCyWHMszepWVNV6VX6VJsxDKmyo9HjC8ZBoiuhZ468rvsFW7YhCL",
  "key16": "3mQADCMCPnuvVPRBd9NejC1iHuZgdnSZHeCGPKi5Ao42rVm1gsPhZNbKhmdkPkC31KB7ufGiDQdH6ounqmp6o6tA",
  "key17": "4ZxtkBdCjdavry9xxjZgUrGcVKLfshCvH4A2z3yYZXaqza7Tybd5svmC4YnYJA5zdyKgqxBvZpvcNjMFJr4YtSoU",
  "key18": "4wt9yuRFN2kGj5P4dFK7HVF6TUJdStfANgj3NAvP4BKb2FtMaksAfYxL49SbQiVMCijekWLb949Hoebd5ARQa5GC",
  "key19": "2fbq7PHmyWEPmeMSgM42H1A3ErnCsMrJMjfWWxMU6ZqJvmmqUp7bw9RVQqWJ4ehnkMb1azTf8UMmd3bE7oc8dDQ",
  "key20": "2tgGr8WP59iK1LAMjzEmN3wwBZN7Laq3VWjtboQky3LXh8eEZrxe2B6DX6oPdLHFx7NZWBv6GxoLb7WhqUte87Yo",
  "key21": "2hPmLCDyFczeJPsw6jQRssq72eZaegesWq9cyakbGPBVus7vhQf8skV3AYz2MTJuAkUvWpFpKEFW8hx3eEYgLzK6",
  "key22": "3D4fL7Gfjc2bUC4AeTQmAwYZRzdCGEu2zgS6QmqQh5a5KEphm6HevHEZyiWDU9gxksVwVvqDaAXBsrRZqMrsorRq",
  "key23": "2DyqmfYNJ8yedFFyrPmB2J83zQyKwi2z7SFpcVFMqZTSW1VaVxtCV5MFp1LBeya7xiKwX7JoQcyqZMP7CT8KqM21",
  "key24": "yRajE2e4BAJqQBMDwVXQnFfXvv6835yGsGbsezt35NcGEpXRQgdGBDmThPqbsmmyxaCnf2ScV8kuy5NsVZf93yu"
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
