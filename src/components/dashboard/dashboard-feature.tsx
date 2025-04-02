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
    "4k65ueTNbx9SWpNxhSNdiGNVCdUhmb2EEtCTq1Lj4AyB7tcNQ6AeXAj8WwcWcjK9NMYHeiiWGWqZCd2AHMzFK6GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbxKnxdyrSek2m1EBTdKfjYP4XrFAAd5DMGH3zTGWhXfZuHJVVwsVkWFxSKRjBqmJGTV4njaWgFsjjWUUYPbvPk",
  "key1": "5Rvse5Mf8mmBQodMsPX6vcJRrkikv8MfHCVHTsZ6pxFxt4k5vufyzcNxvjHTPd6cJMDZyh4t6NmjiViKvFBFtHPx",
  "key2": "ztvEybzte7AFiS6emxrXx8PixSwBPmYrGxqCRN5wfkzAezia478RE9BPyZPsrMLXtbXizjYWoJUGWRvTUxq5UFS",
  "key3": "2voCTnyMxGFZ2cPUxy5WMMCHUejA3dKRRXNBeFyNgwm4uyb2uGF3VFY3ahTphnVxBVrZRNAo94Jk6tz9jQ7eV18h",
  "key4": "4CSyCbus3Xi8cSZ2JJKcZU9BkP97u54SU6WU8mVPrYn1opoqHX3pgJ8mmWRKWsLzG2YHpXVgJ4LCrA2CY1VziBJw",
  "key5": "5tT7ATeUxuc5tfhPMnTHKt1GaFNi9cvNS6QBfWSxvNLR1QNcYs1wDx99hzTQoKwLZMjWFxUp4ANBY4hc4o4uwXe5",
  "key6": "5B9YM4nwoNxrHC3mo3qJpStKSt8CUdoQpijn1bbjKo3pwqfnuKyEq1cxDX5tZjRF63GrSATMmFLkCNGmHVwy28vX",
  "key7": "kBQztmDnFmACzxUSJ64fA36M7zfiAWQR5GmjNqHGRMBqPsToj4XtvH8jAgUqQovfyqnDhm5amjKUhnU46y29PwL",
  "key8": "61R3xirFkHozgWdkV6KasUVPL6QmQP9rMgwQtjX2EjAv9d2LnDkHbJ9CXQpY9Vq1c4Zc2ECVGsmjNbYFP77QHfzB",
  "key9": "2WxVvfvnXJWu4Y7Y3ShszkGVnedMDecD7AAn29NQBP3aVves4eikzLmrJXY34zu97YjiSmGkuUrmh48o5MKaxftC",
  "key10": "2UEwxVg98htjtBzBH4L2JzbAgFru2qrFL1FJayokhHdhz1FGf2qCtJx78HZw6hiY2i9ygB4jQkp28ChFptE2g5f8",
  "key11": "5msUHsK2HaGVpNbTBFo5f5zjwUkkmEHjaxNRDXmnQEo278bVjqt87tMkStGS8mWXJs4V8dpAbstLpgBAQcKiX74e",
  "key12": "2mc6L7aewWWad8pAxtzjRxgVfq5VfcAGan7Qui45yVDgCTRCdhLdFJrRqtcnAzDDPwFWhTRHWCRtdYh62StMbnUZ",
  "key13": "2k3HBgVet2vnXi1UcSvqqr2tHh22xqC27vdKg7Va4CWu83eatx3AC3fpe6VTy7D96ufRNmkn493yaoLYJHALVS85",
  "key14": "YpUnEKY3DH24dCo3GK7A3ebwooi6VnDdaQCZ74yVYMLMntC9kgrnTXb9px8vMkQZiTYBJFv4TkkYsTHvXA9v9DS",
  "key15": "3xhq9y1EVWZdhdz1oEMUsPNHHJ5DAKzSvkMXDHY9XUR1cNXGFRiYh5pr7ipzpVuxtiSqgXo3jnpukc26mgUq1cg7",
  "key16": "q9B6Lzx9CgDT9iujPukk4GtyCNa68iRRJ8YZhojA6MLiXXY73dTjheHMVEQpU7S6zkAp444jkXcsoyYB8Gkk8Gx",
  "key17": "MAoWnSVMwcifYPGp19ihzTywVM6GtSGVsqT5AcGJEMQgB5ujeq76ANazs71LCH9qnxMHP3XxdbaNB2UceJ6uas4",
  "key18": "5HrfEJG9CDiTcUVQTPk2Bf99zkn1pjLkggDa2SAwB7sBKbp6pcPhmnkJ8NTP8syhzXi6HWrVvCT4tQipMm83czX9",
  "key19": "5ZLh3oyqL4LDEZwAcepAXSs6Q4PzhEs3o78fBL5QvNUFxJAXMZA9eyAwuEhmFD8NsoQHNzJjGab6eF5421gghexh",
  "key20": "2cFx2JMASkWevwhb7kDY1pm4K597uuhHj7pB3GErFMkwBpaCq1X2EPG2GdBp3CU4UAYPPcX2bbnf9pxjPHo6bnEh",
  "key21": "4ufKvHYPF5mNkDXLkenbRBBTUv7RDN8uiL6ZPLQ13PhGX9xJcUGdVpUStoa7YdUU6TeBtiUR3Tb4bV7marYp86PL",
  "key22": "4GzHk12HoY8ZpiXJaQPj3pBwedqxMDVEjLkyCHMzwK8mpqz2FqTgZmMaYZtaRZAwzunMKGq6wz5egBFkrD4Ytg3a",
  "key23": "28HPsNCeeUXQCtmnij87haWGenNT7zVuFpRtWZ6xpXzJ1ir33zi6jjFbaiF4Mr76sVxz7zBeCBGZ5Vntc7j7EuoW",
  "key24": "3WRuYXwXS7cF6BFjPWEz5wabTTaywdXsD3eue7Di1wCNbc1nYqctJMmxQfQLajDNPgeY7sefywQLwaL1orc7CC5k",
  "key25": "4ZgwFHucC8PwLrXirsY8QXzB8RcESzZtLi1AKxMxvuwH23Si3nsUsYjPkv3FKUWnhutvuU4CLUjooLdJaTnhkvDx",
  "key26": "5mEAu2dqKLsUnVX1S4KnXfTVcooHWxzkNHvs2hDVymwo2stAnYX1RqbduztGYkAPtZ9NizHirHejtsPksqhKunV2",
  "key27": "53HVbXxHxWn5pgbpRUPj5ZS9c31dGm2bDDe6CbgtdwQZdkiHuLKbm1GSmLRtci7KYbJmCMJt4ixpt6Kv9TLNiJJx",
  "key28": "NJ1esLxFwcnnBY4gqHeAobvYLMVZdnmTs2BDFfSyHNorayYADagmbkCJ7HfQhTCTXByDVPTrC1eeZoHfkkrnuUd",
  "key29": "kmZu6u8njD42qAuuXpKqeKjzGZ8n7QVD7AWYSvzBc5ViKh7X4wPg2DcPXiMubCY32r8vD1qC87ViaSScMF9fxam",
  "key30": "4Dg2jSUkdtgwjtqiAaWruVCmMqbmesZ5aKEuLXbD8shuBuDHoUF86JRnnSQKrzZaT3rCXKsP4yHjyC2cYt3ZzJ99",
  "key31": "4Xypg1ho99ghGkekwQjU8pTKfqLqkKHJ6uWN7tyzyAJNJYhdcePYvEed9GU6kirzwQQ3nUugpX28vsW6s4bk4Loo",
  "key32": "3NMqSXdaYbX9fMLboDSjckgaAv4dc63U9SdCYbxi6P5NvuRxYP5Kc3nfza3kvFRXPJvtrfSsCeFnUdNzJWRjApNh",
  "key33": "mmg7C2vWDcWrv7VS9jUEe1RmhUPyrE7eiQZpxUszaxbxUTMAiTLm5X5rDtUrfowsS4C7ZT8cKTtvS4Mdw6x4ihV",
  "key34": "3mcQCyiiZdKt3fKwemx79AAAL5kay4e1Xhue8MzxfUHT25B36MYKhMQmkLx8uLR2raTk4saRudjZYJBZinrvqD8n",
  "key35": "5JJZT5VYwH2Rx3WfuD2ACGefot2Bx1VjfP7dHtfezN9p7w6iKXQLPA8c9TisoPeyAEgmEWhcqtYUP6YBurSU5mYY",
  "key36": "4qJWLcDigX45Y7jwQSzWE3Xsnm8he7JZquBJBxXiNRnKFiqbMMa3UsSxqxGR2UyHa3xEpFecSy1VwyPHdawDeavD",
  "key37": "3HZkrobFQYKxR6ZUXj6yzaPdN9Sb53bUNoRsv15NqfzCW8jJ2X5d8QJxbBch92axp7BLVroL5bddPeoLCejzpHC8",
  "key38": "p4hEJpkEstpy9pJrR6MYXaRty915jepQ1RrfTXn1SrqtP3KpgUtATiMgHNeR6g7V1ED1qkxagRCx99JkKnRoV5C"
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
