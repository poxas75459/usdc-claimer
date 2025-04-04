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
    "3AdcaBtW1GBsyvq4ZsMYxGnXSSa99tcGzz7aFMFGrqGykBDjAUpxkyP411AKTb5vJP1ozphReKn7Nqaz6bdQz3if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5is9HD1kWAdY8xRNnfaRczBY7aDT4swCnswuywjv8TQtzL6Va8oWS4ikTdbBxLiVK1Uajsz4bAU6VtMsSLJCM8ic",
  "key1": "2H7SitbfpDXfmh28PaNLXriNqUUqsT7Jjd9ssy31VSu2AfZVUF8HzQP1taFnic3k8MCVneJGbBKq81jzd3uuvTVq",
  "key2": "4DfDM3HfXmx66VKKZpKy7awyoJwYG2BkQmpgcJLu65g7ofejKm8ZNpb51zoTgE7ydeaYw7Yq4Xe3riFzSktDArDq",
  "key3": "UoPjEMHCSycwAEfBK1iv95bumMoPLaanzPqzRTsXiizo7xpce3TGPbW1hG7MdeoYsvebumUzv5AbxitHTXLQEmv",
  "key4": "FiqkJyUHuUTXU9mEFvaG4ci9BWyN4sJ4f5QFS3JYCmRAu1HVYdjfa7W61L3ELkZonQzNcLKrk4QPTtMb9YWChxE",
  "key5": "3XoMLXPdMUFdbNEjj6QSe62bFQS7hzjmAYy7EFEypV1TywhAodZLtsBbWhaNAzaB5tuf1KT2gCcsFT8R2dKmJ6gQ",
  "key6": "43zwq4DUahFMPLk69XkmrirrkkSvm2xUBhEueMTbVnXwX7AYZrVnkgGePMKGDfu8CBTXMZESYjb2D2R2U1WvbA6k",
  "key7": "2CsrJC9yejpxXYZGNLS34irBSbiU9Fv6VVWeEGWZwmWcgC78wXwUsVmE8vSDD8uKXgmkmtnJDbQG2SDXPvaGtpZ2",
  "key8": "7zQHgiwTm8hwF8dVmDZNKdynreqGRmP4CbisTYgP69aqxkfF8faqAZ1Yjo1z4yah9XALTTqjSxQyaSc3xk7jc54",
  "key9": "2N7BaZXBPbL1rLAwb8fkesHfAZtRu8vX7zpv1iRqXMXcoG9T6tgV51RC4nyt1TP6cYL2W1W4ci4c1yjxfZnjKE1M",
  "key10": "36TBExnUSq5UWLurC3Fq2xnWsnT1JFvrCUSVTJ3vRsit2frMaHqta311v5KgEfs3krbGWNH5keQ1p8583zNvoqpy",
  "key11": "3GPudfEhnxrwL9wDg5dXSJUQ65gDDiwZEPFtMn1MxKbHsVte81Exq9J1dZtaoF5z1epmPFYXiVRmfxDqhDWkAMnF",
  "key12": "2UhwnvoByb3CYcmua1Vgkkstd5vqxUVRKa3KWYmu6EhRuU3H9Y8MrYwFdNhFutoyedQS6WZnDzjcoBqWy266oGen",
  "key13": "65RxfAzEbnWUQfzMUhPfeB9LxN4FSA248jXvUQXLUTatn5wqhbmPKMVSGRvcb4xYagHN3jjQaehtnxzmC2ehcivi",
  "key14": "5oMoNsE7K2TQk1bFfXi2dqUoss5MLFxcd4kNrCYF5HShu3YZHJfkWC4Gfp737wbNTebNoDBkdHJWfKKwYsVNBAch",
  "key15": "235Aveq183vk9Wa1qb1eGiJRqLx2k29XheWhzFbaRCWHqFTrE8Gdsa2Y9aaCKESepBJ5z1Jt41opauFxnxx55WQj",
  "key16": "EnCQGt5Kgtu6FWcYUBvL8oCQkaWc7zMwYgFkNvUySJg1hmfyU78KvmXameofEz9PdtdKe2kxXy8jmjNgdx14foG",
  "key17": "o7FzgJkTioHRjGXVovfL7qp8Uyg663R7mmBCshiAPiCVPe7KC47FEA6CrnFi54EmmCEQ4wSEvoRMHpXkzm74Nv2",
  "key18": "5C6r3qBxQhpXspjicxrZnudGcV8VcijhLnG8t8TUTTprdUHBhaGdZLufbd9JwnJvbFw3HGcgj2wh9rfysU1RZs3q",
  "key19": "5WMhMdeyHfHAXbFMiU7XUjp7GKnExtgvfuDt9iPYY3u5VHC49ebyEa7d3ie6Zykj1w4tfMKY9AdpSwapeLeW63kV",
  "key20": "5XSnWdVRSRaP9wyhGWTQroNxXJo1Qes1yMDqp13PhNNU1VtTih5uwZZVgPfh1Hic1KEfpfRsiURWSRLPdtRsReso",
  "key21": "JT9EjiWRrnRk363e2HtyUZtqhSUnMb4An8vdXFW4XepzbiMHngDAUemNJkvUowXFGp8dUiT6Mu41mqVUuhNrKh4",
  "key22": "2VEFCE8ixLh4ymoSMki4v5E2xMsK57vW5jRmYTw9rj69XRboAZBMVEtJLzhpDzZGBNFTNLpmtGLDEgYXRLRbcx3B",
  "key23": "sXjzjXL7Gb5mrfKqwCUrjA9TVPhAFLdDJL4HQ2aUWK8BaYa2utKaRfSYjJC7P1JJHMjimmR2gubg2Wfpk2ERFWc",
  "key24": "4SxEpuoHd9ZX7ENB7zx4tMYZ2cePkscmBRek6Mi9yGvzoZRGi5NnkFVWKun1MKWrmo23nGxqdXscPqkZCrHChJiV",
  "key25": "5vWjX2N1cVDFHHDs2dDmqqBaXKCdvfR1nKdskt8hYELUTiGNdZ7F4trboARJ741RsCUKoWUhKXzvRMVMKhF8PYoU",
  "key26": "e3MTwTFHXH3tTQmipvz6cKxV78LmCGc47Lcqu4WiLH4K1XPkDXdLEC2ceZ9pY8nFESXWP8hUHc1AhBonsnv8xt8",
  "key27": "3kUhxfQBCFhgnv7U2cD6hq8eUNpsDMqFCa8Wok4wgM37qcwcNLscvQRaEZjihBtNXq4cJpZ3aEJCcB239KRJoqsr",
  "key28": "3CEHNr5VCwUnhHpg6a4EDFoRe4LRcJfx1x8qvaajz2gQqkxcEh6MzTFTwtYikUvUNyQQpsKVPtNUio3tz7GkCPVb",
  "key29": "3e1Q6PoJATV5RPtDpFmK9qpcEe1WwUhsEJTiRdpLJ45LRzwzRp3C11NsZUP8mXsNV2LReFsd6DRdaoGaY1fssVLp",
  "key30": "5Ac6wQTj33MiQL5yeG4g3iUqVbMTDfPvsiaf5mZkwBVMCBTSNLCzwwUQL5izt12k5GJWq3whL7KPsaSFR4iJkUw8",
  "key31": "51ynqFWexFQJCPDn25YcjvA64L83hnBa5cLRyHL32Y6UNazSKbK1qmM5h9PTaSWDqpE2XkCRwUqqAzchbPMNFUne",
  "key32": "5mass9SqWRiopM7ALWe3eiAusaiEQJp2eby7Mi2BUXH5ibAHMhETfjJNhiD2TA8MkuohDAq4b7SZzL4E916Ap7ob",
  "key33": "28jqMjCsU91SvCzWRrqKgTP5PRN6HUEbW7ZnHoFXsvL2ggtr3Nq6tnCoTwASbfdXDuEvcffreRiNwxALXa2Wmzwd",
  "key34": "4bYhJ6VkDFpHMdBDGrVucitUENQD3F36n7DvwkTJUnA7PJ2N4DWncDc16jBWmL8a6qUYgVqYmtBhyCoJq1k6oLzz",
  "key35": "5TMenwAYsaZx62Hyv7yMotA3kGKUs3qtZSUqZRZVCnpmRm3iUV4CK3kuqXjKw4WvxG525ToDwsuAuiWz5VVERCxh",
  "key36": "2p1ZweJufx4mohbzBAmtAdRKsCti8xAFNJpCaQGHWAKM6wrduRfJNLXSsFPo1xvPAQQnysuS3XpwfQMamCJoccpY",
  "key37": "59Xc8yY7fvRN3mGe9iikp2xWGBnPGvptKiVWPS7kts2pb5VW4QRkkoXBD4YLPxPsnJmYBQx8jBvr1yGTvgUnXrJ3",
  "key38": "xYVSvRhn8nFQyJh5WKhbBnUPYftmEv5DbfxXjqTcfmqUGU6QWT5SS8DBoWmrkBk5uUPrVk8H5GgCy1fS2xsydn3",
  "key39": "4EFU2gttMjeChADfXEfp8ToCGzgBmF4R7K8bQoNFqyMxGpEr9ZpGVcohngqQtqN1ZG7MyBNcKRGs8EbSWVXMCzc4"
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
