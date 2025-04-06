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
    "oHuJK8xALvLjtJ8655VoTrp664ytJDzGFMf4hYTpztU6wQM1uemuWkrQrU1gjNqTJszojWsWpuji18vtus8Afe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bHcQsRkwvEmBBzGJmZY6hPZP9aZGq1a8zfqGQhsK8ZbBpENbYQBoWY4wX6KcrpmaVvKmazH6XKCJK55T1d7BG29",
  "key1": "2AzFvguT7ePJwY2MAo8kGLJmLCVLK6Yc778LTEjf83jXtpKFDV6T2PGDvUM3rEMJNEZXiK5tGonQTGDPDaEeg9Sh",
  "key2": "8WezhDdYYKEh3EBMuJXikkpL9reM6YjCRBd7sDUswPvS2TcaXeD8FZMuxhCqyoJwQrgpCmWMEqZ7mhNjNLbgqXw",
  "key3": "3EFz5SNUepS3GpXUSYBqxzLWihpAG3oT4KF3Lkz3cJhUEMAAJaZDmGMzrbNN1JBqS8eebS6uVSQNGXoHZdS8eQDp",
  "key4": "3yCS2HeQYQzxKB6K8EbefB5fXmoKshNHzwkFNCxTMo9QaoBk5ZZyTGD3xVQ8SLR36HgUnqzVVz1AvfRTvkCTWnsZ",
  "key5": "4r9cVbenGnRnN4a4uTAeakDHqkyCSMhu5cG5T8uL94mwT9orcTAaov7QteTePG3dtr5CzRNVtnHbJ1kSuz3Z6S7e",
  "key6": "47VwNDcfUEn26wc3fufyZFduKoACLWVxSiYEH9KkfDeaRWhatVnre3XYQzL1yfhQiGyzmqJPVspdiEVpX6w35nK8",
  "key7": "677cA7ozFY85VPQRhKvyATeyYdSVLCuRthfn5f6ThxPpSZ8ESxFRTJDtV6Di5HRfUSYkwpoLa2RyQgsWsNorqARR",
  "key8": "a5PjmAf73yaaiHyQ3PU9F3V7eeUri5eNSCMcKoPzhvR6Zkhi67WtZsvKR4wbP5wswcpMsjFUmcRZPVSi4rMdwbJ",
  "key9": "2k4xGXi7g9FpLGcPtA586oJMMriZxRi5QsGE6JdAVV55xzScqxWZjesvvpMQUN6DeUXkR3xEMVqArTvC7bWBmuL9",
  "key10": "xia6ccia9fbTitdYedx9hExWKp8yHH9RgoZJUH4FCuBY4wzZHxnQCTEW8S9zaxSeKj5n13h7qT8QS2RR29WCfam",
  "key11": "5uSmoVp8i4rTPSdjJgARKFfnDj7rG3CjRsD9xYtPF7ecu8RRygcEvTBErQUNGfBT1Q4CWRs13xeZCiPTFJFMhRfv",
  "key12": "2rxduiW45158QjML6cHZwg6kT5f7puyusmLBrya3zi5AHugziBoCawvuwpQn1oDM8vM2fCZVKThaHHn5aqUrY5xQ",
  "key13": "R58bQZb4UABxonRkwbvYijXHLXxp9Aj2idfnwcF3B4xP7eSHKLDwcGCbure5fGJoGaFt3cMKQvUsjKgJ46EdonC",
  "key14": "3ycfZyukyCjqPyphspRkav65qZ1oYHBAAw7NGTScbkNzzUE8onjrf6CLiLd8m516Z9eVM95i1wQ4NtNyzoDdZ5Rb",
  "key15": "2ETBAn3t5DyZnY5DXXaQnzxdmHaUxC1Z5oAmyeFYRQbZt5kriJcjfJWuqCsdyPzBocsaHNctTq7LgpWrKXBuEfGE",
  "key16": "5GKqwPtMhgMDJcXPzxED2RX9D7iHQUnpFnuzTmhcVqtThPEuiDG6DBibiu2sfW9N3Ame5S54SnBtmmPcyNnFmLLn",
  "key17": "5RjLsf9KWEvhMJxAsKNavPyxBCs7K5imj8hkpa1jH24Wc7i3V2JwFsd7WeQcCCvu8di6wFYxG5G76zxC7im3Q3Dw",
  "key18": "ruLm2kitYEa1xV8w6VyPgkpGdkTYhUm8ssquq9XQf6jSo89xHQ6BNAPFqiV8q9tApPUSmeNj85DEZ9oiz97zDvw",
  "key19": "2MUFTWpPaQzmV8Z8foPcUo9zjqHpPzBMgvwMmkiaDCB81NwgWRVxxF4Fi6JV9zuRwcGwh4WADjq4V3Q6zbDyxoNw",
  "key20": "663XLLifzJFk7SwyLF3V2tbky7YMueFWdqpDg7D7r8heSaEy9rcYwPrNQeXhaE5rJof5x93R4BPc5p6Qj9PD1WyE",
  "key21": "33Jz5Totz5F7gXqa67PXJUyiXiMxiqVHs9QqKv7sN8xgLRWKYH1w13YwCeKHipy2ea7xf1rWfQhoYLBGqDFLft4L",
  "key22": "39nE57yw8unpuUKbtmBqaDuTjdr5aFf5phPCoyFVqUosKwsp3d8FQfCjtWVGrbPZ4ihdE7uuCFuevb1Xe7BFLmLj",
  "key23": "5avotR9KjXT5cTdoYbZgvFQSKwiG56wun7zDuSHsC6may2S3tyjZhNqDwdjgzii1RrXVMENrjCavq1EXrr5fqyS7",
  "key24": "4G5UYbCQmehChwPnmTqdHDEK1Q1aYxQQkVMypAdTaCatrLFRPWBmpkWrCg8amEcbWjDYCr7rYborgEeGNgVjAXWF",
  "key25": "5GysQ2YhrcMFzNKiBHNXAPCxWqCxXFcndFcNdHdgwthus3PcNS9UU1H2ABFyN2YLBaUBQjsx62ReWYsu1J7pYnVm",
  "key26": "5VZZYYF2XxH8dqWkgWzEAi2utJY3notrSmM3DoXPAi6CG4RdhZTXzV3aEwxFwbCqqH2HbsXYxnrWUgrzNEFB7kWb",
  "key27": "3vJcKTAwNkQL6P936eaV1CXnEWHViVS1RBKXEoUdEfpsywhav2tyeaheoJfrXrPLLnJ5N4kZNQ8uZ6JagCof8bsd",
  "key28": "HpPExJAPr85Uujpn3jGQYxpYLxBWgaEzrLkBA6Mhb9TJ2DJMjVxrVEK2sY2KtB5hUvLRmtpywga1vsktqnj1WWS",
  "key29": "5LJb4Phis5qCFuGyz6SbN2xHbXhbyPa2gipw9D3UBbv36dfCkUvgWLrbbjXGXnxiYHttASZCrQxAC77KGmkSgCf3",
  "key30": "5W8KECKX8AEXhGLZ5FHHDJedH4Ei9XDCxPvyXGgfZavE8QsMUnMx58Rnf9KXCeLGiA9rSFLoUkbXqRBkmczcm7Md",
  "key31": "2voALfnpL6LsgLDDgt14cRGsLPEtNJSdd4rz4sH9Xvxb7gk1tVoBwqdXLwDAVn4yAdGcZuxng7Nee4v3kC8yReKy",
  "key32": "5vsTAbtuEvVuDst59MEqNtR1AvJGZZ5vB8vGSZXnP6jH8dNn9CFtNakqcrirDhnNaaznTrkEWr6VT4dVdizuoGLG",
  "key33": "4W14PVU7sT8f6gxJUh8t8MozdpqgttiCyFbN4NZQ5iuGqrqogs6aDkWS5z9nqTX2F5DdzP67KAGEpjGEc7or88La",
  "key34": "4bX5wmMESCRWDf3rRry5JQ5iqqNrcZ3Fi7pwYEmC4MeQXeYU1FDKKcUeVf2b9ZudmpF2vNRM7C5NQtF9mpoMojrs",
  "key35": "4KoTRuMjAtuNW9FzastG4H7akt1axJ18Cpz3yj7wy46NQvoGc8gH2EjhiKAMfknqVVwvkuDg6ekHrCnUBEKYW6Yg",
  "key36": "3UBfZ3DZUqPNhBqghFioqPrzLFc3wf5G93rFfxsekuEpCkApaG9sc8JCkfJ7gss6QoHcqQFK2btp1jmSZKhyoRr3",
  "key37": "5tYEGPUVZY7ZBE9vasYXDaPRNR2hnSPWpFFVDvsWhPBrnhcHY2vQ4yWdLg7nrrGmnPnVaeaZ79qx1zfS5FjRZJEm",
  "key38": "4Q8G2uMe38xZj8sEF3uX93fL6MsPgFKKgYuHw9FDa1J5NQXB8i3t3ZPAmHUW5gt1sXRcu1yhFTsW4Gw3Jb4ZdrTk",
  "key39": "4nR1BShDMvMefVhGKaRqGvCkMBpzQapkEr1GeCn2hL3CkpJuvsQtnewn7eavZSeNDqonKG7XRaXJ3L9LEZsrKfv4",
  "key40": "5xa5NVjXpxRexobbMTy2AamNjNscmEbeYseEv6x1R7Cg9vnE7sChseCYL2jNLAMMByHEirR6sddJYfrsD9v3xb3Y",
  "key41": "3koUxdDWbDLTZ4H4wwC2Tkm1e1oUdj7XzYpmyqUbNV8u1RK6coiVm2FbfDqBanYSXzppn7MxwMi8sVX69DojSBhV",
  "key42": "N5mAD6zLf3QrZ14dhs8ZrDma3uLEouB45mzakpJW8o9PuypmMYDLTZnugxjzY8MMw99cR1n8GntouX15pjkbvqV",
  "key43": "5U8Td8gU4jfYPtu4F4kdc5JPjvqBVgwYcjhdPjZHJjuWEd4YTgXkvtt4eoYzxkK1EiKEsnD2JYVJPNRKnTcFK7Sw",
  "key44": "vKt4L35LhGdKKb1noQZmqrf1oFwwqPQCYFsWa1XMXLpdCQc3V6HB5jsozsDCZorVmrejmrT6QQnD3csTctJM4XZ"
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
