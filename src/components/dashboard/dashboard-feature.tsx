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
    "2KdoviwpB4CmpDkAU1RGXHfRv5ibgnvgKU5N6HdqV2pk1ifvrC8J7sAbMJvQueZSYyYBSqQsRAaoaKvGXS3ZQod7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERmnPq54f948Ch1tuwDxq5jitBrNNuM3p1P1kyh3ZE3y5YD5SD6N9PZb9q6aPUw5YyFT4XCdM4yKMn4gpGGFRDD",
  "key1": "4ETSyuiB9nCC4RRC8FyJ2K8EtrxnBtaxG6cDgqp1b6PnCpbTAComww4sktWcVtXGHATxxNZtsw6D9EuYsda8n8mj",
  "key2": "3p7F3fjGT7tMAezjXmHuduLwcvrXfp6Abfo2uaKpTjWqxws62nb6pG6n879FCZbwcGJritn6ZzgwnjDc6qFLieMU",
  "key3": "2MFEkt3nQ6i5VZzHPvjasNUXBk3BorK5pv9FznsacUqndW163iykA1mBKq5CUaVkj7bCvzyFQmMbizRoL4exaKpZ",
  "key4": "3viRTUtmHPXDZ3Tjf34HXyQd6pFtc6iLMZToiexnbZBDY1z61ehJxrJjXGQicSR7Mkwrv62KpKXa811wPGMTVccW",
  "key5": "2aTy4K9J5QF9ga9RSGwaTtYj1J9peprdowkCv67pQBGirmr3XZrtAMjrN6YWdTzHjksvvToHFoE2tZmEnzmNMHMo",
  "key6": "5bHHrkN9vCTBDqw8fvErBuXaXHqrJ68bNW2AkgNY75Sjr38R2tyTjUH9gRRNQmS8Ww53XZMyo8yHf5zd2kKdwUzU",
  "key7": "5EfqrnWkHzkrVw86JDiJLR8S23xnBhJgCwcLeHyXmbRGUKC8ksN1XV2VM2AGTqxuVEWLEWMbRJRLNcVo8srhzxDU",
  "key8": "R5fiFYhuekK5WbPbJ4ofGqrT1zKmMgkeSWiwTSMQ5DjakPgmZKYoRcsiGb2s2m7LAckMDhHLaHVmQ2sA9u1e7d3",
  "key9": "39WVUj9XvP4hpACiZGZGk8gWXBs6E92xuZBsSF38qdNTMpPN8AT6f5JHmbLsPR8hTjKGqrM1kmNfqsr8dAqrQ9J6",
  "key10": "2G14exyKrn8pCcJPGdAuBUcKCTZju9RqFjFius9qyysrjQjHyMvxmQnpbpwTFPew5YBCySjSeC274zF9oHf4wU17",
  "key11": "s4bmwf6NxSu4ZhFuWfNiX1VGdzhPnZ9u8vKWthAG8XHeWj6tRXuasNZcVHqww8744DUfWvVKUkUHP8SYc9Yd5fx",
  "key12": "3Pc2zJdkNC2PXE6oZALTWEon3TunjTPnoR8sYxfdovTieKaQjvzq8NtN36D75ehyFVSoyRRjq1m9gqD5RQEhiKBo",
  "key13": "yUaFQB4cFkcQntekDHrRL1XPd74ZW3UPNBmu2xxzteGYkYJfKD1eczj1sbGta7RNJD5WPyueZpx8C9WerMahE2y",
  "key14": "KWvbRDE3oxeg86YtaP9E5n9AEbUvoRozARq5zS1KaZN5KtwGUMrosULhaMspuCHsjkJkyVajcuGa1Xgrdk6c8Lr",
  "key15": "QYjmmQ8euX4NmPi2sKALz2idWSEFPfKyFEh9aaDoCYdk5sAiKT7a4bkfFtyJHdtbnsqshat5v1GFaryeRvRBzYg",
  "key16": "2n5wKY5FW1oVVjF7kvaqL6pVikEEQSaNRxp6dsaL6GiiL6PFxGDZjorywRKtnDpkHZ3CfaivXJKdbDqKngHuekTB",
  "key17": "4s5SywpXYT7nA2rB3ZicXtVU4EWoBE9ijJYyFenU8T8TZXcLfXUqUiVaojP6AyiWuLahxiAt1CLcDhP2dwU8gcCg",
  "key18": "3aVSUfkUi3pmqmvJDnXAKUDoq5wGA8Ta4uBicpGTRcpxGeJwPQbLuyGCqtQ5VXNxPcgvU1fmUfcudmUTcT3sWPqc",
  "key19": "2wtWYDzfRgWRozYJeYa78bQGC9WvqTdgy3ufPAKtaUFLdU3Hg5FjUUQigVCcPYTc4rEp3gXy1ScnjVhJ4kb4jnYN",
  "key20": "3145yoc8xYjPud9eMoeQAieSi1Ej3FiggDxeWKNYQVBR4gKAsgtDZzrY2e9AH5hLDR1HUKsazUZoPsRD8x14RBoL",
  "key21": "2NjBi1J8hL1z2inRkQscfT27TLsce9CQc2VKj6CsBVC4bMGz9t49jnRAM5xzcZpQuYBkQdCmcr5CcR5V5Fr6eydM",
  "key22": "46LbyhLGk5DjqAUebFgXMGUhdimfKnjWdiL4Rx9cNwfr84dFnDd3cKbwcCsPcaUT3bMA2zzBuiMjppP1tVds2yz4",
  "key23": "5MzQovmfYQcraahj77qcKhpp6abEL3j8PJaaoCytdby6n83zPGgYiAQHqv2E9V31dARxAo6pFWB8HMyAExXdLaNw",
  "key24": "3erzvc4YN2u4XoYGwNPLJuNRuNpFR5dXNuL6Ncu3AWNA8HyymfwC9PABgrNKtgwyaeGJVvEnFoejAjGH7vwXu82d",
  "key25": "5PtX3PUohmm9h9gnwL4iGr8eEvKUyc2DSrYjCQCdmCdxUDnBNHFfWDkgUKT7bxeUxABgv3K6SxadbG9v4CQzH99Q",
  "key26": "mysptubcLrDKdL8xSXkWBkChxTBbwfn7TzjnZwFNHSctVHGpaLzbHLLsGsyFuAqF8n7NYHwvfpBAUSLYhrFYwcp",
  "key27": "3p4vt4xWhGLrLSNbeKaftSSrgGoSWDtM9SzGjk41VnF37zeZ8qk6geu3d4tXMaAPnRz2PqisqXaWfnaUPDFRBjS8",
  "key28": "3M6j3hb5ktSdPByKnyEDnYbwjZU5KJS5J9FretEmZa3NnSX1nqA5hhMGfFkZ3wdKFVsTBYL57zBfWB5zqz661DJW",
  "key29": "2C1mD7CKyLTCBYkLt7gS7bVD7Lq32QNSp5ATEiRS2gZCa75bkgcFc4RGCMGYaYdPbvfUjmTVqwmnKhHsJH6eNDX3",
  "key30": "5vsATQo7fMbLMmqvC5wqcDFLpBAV2UMeZq93AzikFUoXskrQFQ4abo72HJuAmg8ePgAEaKCq3QZvBZYmZjoySonW"
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
