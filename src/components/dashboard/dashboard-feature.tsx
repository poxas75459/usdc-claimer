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
    "5jyZ5S4TTJbN5VbQLZ5V5YuoEiapJqzNnVAHVnXbLQWjCrLwNv2TRA9pbkhs8kDGKTGLb2FWuQUBV4SJ3EN9mTE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p3fAxhS3gUMSYCmnEHScDHKUH3Jy9nBPvqPWQ2i7ijpymFQhcM8rRiNARhtmAcCrFEEUrdTkZBS159Nu68bsRaV",
  "key1": "3r3xpdn8nhDom4MvTz2BrJwiSbnhyjgKxUGAcYBZejteV67ymmrVF2gKpGZBQxJnzGj7k7dMJFdwcuF78YiU9fcD",
  "key2": "5ex694pmVmz9pXDQ5jrJfg2NokZsmH8HfecnVMGmA8aCuVwNVsxdR2bD4R6ogxJYAQL6vxPXNg3pSvcr9fd612c9",
  "key3": "5QAZUrLYC6ngsTYHAfLkQ4f9HCM2VLbXF4LnyhjkWK7QVYPJ5vTUaHMRTRDdsuJ2UBUWudCuGnFyPxCXDbpHuVc7",
  "key4": "3qp3SZMeeEoH8mfFzsaBYwDzTwdwWMspUoQPW5iMGbqKrV7sxPYUvHS5zxcdWmCMtp4wteKi1UcriFNxBGaKZLc2",
  "key5": "2wfCN8vEQ8riN3BtL6eSxd7dSLRRmrv9uSLLkyNUEEiph6SphL2fvBtz2Jrwm81aKSQisC6YQ2JpyvfpkmdQ9vv2",
  "key6": "51HGuZYSsAsUKwZGM69vXoz7W3CcY6NNQp2gaqQe2yYpmjuGQ11w3gxAHXgjAoMQPzhxcejdZE6wSnFXC7oRjptc",
  "key7": "3KvffU2TWReuAXb6MN8LwYFTR9GcgGDQ6yLA9piK1eNtiokGD184ChMAoF7tPcV3ktcsjGMqkmMpN9r4CDKunjr8",
  "key8": "3Rav13krdxgwNT3wVboERU3cxKehQF5zCYd4qFcYPaJKVxeh8RunbzJdru78WTH4oNeEXuv4ut48yFzgDYKMKBvM",
  "key9": "fLvi5T6NXzfPH9zCZLZXJCSbcK4fy3qSFyNPjvqrB47y8wWberDAQfFftcDR8W1yiT2Qq3ENEn1EBd8X9mXE3cK",
  "key10": "5XWj48dRNpmmPVo9RQpcpcvDnP3s9mCx8pDAz1WGZ4j4Tx2vo4pD5165CopVc7tVjiJB175JpVMamYzNgT6WbcaY",
  "key11": "3k3P7AzmgnzMcxycguh45SG4zoTebvhYjFvs2NmFNyNRWNjSbxoECPKZzTqjvHjfzaess8oCnMkZecqTcKRwYQhD",
  "key12": "4NaBmA5LWCXgvoNxjb1F6oc5CYmsSVhwzrKR6u61Cr9tmW6MxUmfdAmsvqJDjgWQyNQcAgqWBqqPAJh5we1oE23S",
  "key13": "2LTMr4mNcQwqdzqgf5a7i2JBrqEHbygW2Vt6cT4vwEBg3ELZ6t3S7raVBH7n5JC9sbXcEet3FBB2H4UFwGFv4i8b",
  "key14": "Z6jZmTJz59Ekp835fjkjiU2svWxB1BBBv2gyG1tvtHbzsr4xw1CDqNNmCUCBrQDwPV8i8ZyE9PUBdWHv5nZ3bCb",
  "key15": "3HhgLcKpqMVthJpPwKehEt7sFntso2Cf3SvC65KQ5wfnN4EhzQvUrDFR6mfP2gtdNwN53RgJ4SAcGTfokKciyd9B",
  "key16": "5xdirzoiewWYg4VUhsBXZMikBEzb6E4ChZPRaRCBYWLq74nXpeXmuZNZR34G58jtunEGuViyHpixfG8yM6EbVdQC",
  "key17": "5YY4Kaz9Eh8Z8mZ8Jjxc86SfAB8NHCiUi8Zqaq3JvvfJTiie6uu4bvVZiMhTsMAZESJfLdB1oS3MxdcqQWGorgKq",
  "key18": "2bZNeh63GSNYp5tJSQQYs3TM9Z7kVMZXTRA3BrVTeT32YP7HrD4HLEv3mPeDAM6PkXfAKbKCxLuNAee5qstVbRjY",
  "key19": "4yhmyGyTKjFKFKwJh1Jmp9dAtddZyTcdVW9ZcuVv6PqCU54gw9nZtSaU4JKofqAu34UYwv2iJYkCKyt9UpEB4P79",
  "key20": "2Zcp3iLViGtHDuqJgxG1Q4PiAuHCNiNkngomwCXMRe2w3RTSRcLM3pzeusiSDBbqjSzekF9wzGdhjp71zYtk1CRe",
  "key21": "4HrEMSzTUnMUwenqwYcpjiZTBCcpWbwRodemTiHQuVn7JNxnTynoQFNA929zD2k5x1YUV7DzL76Q1tdYx753DYDz",
  "key22": "2V9qNnQmd3PmDud93vJfjwkwFYgcVdNMLQ3tXXyoNZRXFiR61ycjHRzFWyV3wZ1CX9zAgp1gb7psaFqp4x8tLJxG",
  "key23": "5X7SMi3NhLZmb5oDkMRpS2xD4goverx83uYKMpH7La5fRTzk8dyhXTdu2XJqE27m8Hr7B3xGZA4gbjiE6pSMBcR5",
  "key24": "5ortqdodiGbN2FYLNe7V2ydGDv2GiSeJUkm5EGJ8denAwo6PbRH5kWU1FqAyvoaYFwomuDjBKsbU7mcBYdQTCQzK",
  "key25": "T7VvD3U6QMs5ZPGvGMPFHT7cn1QDKWafyd3KkXT45dPNZMysb1dTwT2e5LmXRrMiVKk8AhznmuWVzPb7pxtpxi5",
  "key26": "3wCwn1dV3nHFPvCauPgPxDTcmLA9ZMFB6EQEFtfEKSxscL885xHVa4Zw9omxqxTDZGdyhWcCsH4PijVQenY1Pex9",
  "key27": "zbemBRutPp2Gxm17J8omiDWvHYHK2EaDctPN3fjbxEikFhhjCW8U1mRxSage88u3gawNqM8pEeJLWd1pcjuj6HL",
  "key28": "5Gz3Git6eeX8YtDzdaHShxwKaMsSAkLKXhT3CkyFUYd748DzRoyzCmmoS6LQyuanWH6PyeDBXjQeb6ZWYgKHGEe6",
  "key29": "4TmGKr38oV6m7miAWQSic7ieYA1CSs345YSAkwyxSw3y8rnDJjaPBLpXfdeUDvFSvQkLVerru78taWtmmqm2vpgp",
  "key30": "4eTHjjyftE8aieTfKPAUSTt6Zto6hcYMeeDRXgdhv1sjPGv7B32QMjwZJxQesyzG1juUg2jvJTAU7vZ5prMFLjmS",
  "key31": "4cBiZS84fDh4WP2JughsWoTWKnbmyKmpheUpsdCYCEWsswEptGPNHExKucjPh2hDrcRuhwXYdgsQsjVQzwsWgRSk"
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
