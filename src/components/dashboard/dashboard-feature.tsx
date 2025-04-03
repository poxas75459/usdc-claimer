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
    "PqQqLLss7YaRGnP78JsfsTk9yQUZgwM3S3Hjvss2SjmQSTryBdusT5Dhi1uPdxUhmuGFnCKTUNU2HX47sAhBCqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32swrdDY3RVKzvkUQ1Y5XmaABHQ7BTxzWtGUhzZdpPGxsAiWwJYfn2PfSxE3X3YeSqopVs5Fxe994D2xz6H1cwvM",
  "key1": "3AouoM9gxHoVfRosXvF892VYPquCLoDWWRhwYbNfqCoRXqW6kFd86fjpG6f5ZHWKc6zJSrNBzyf9szzxb1n8erZi",
  "key2": "3JKvnBU6ct44WfRAt6GEpwrnx8uk4Xy1Qdqpz5mUtR9TsuqHorszVk8Wtku2ZwRmBBViCV13SZrqAG11GjafJCSR",
  "key3": "3Jt9Aa9rqaaFaSbsX59pyf6oXyzAjWT49cHURxyXDEmgb754DySUr85BUMWWQZXWH9pPieQu8dUHAJbnt9EsTbce",
  "key4": "5VYEZ5s1KDVcyQNnUGJpjNVmu5vhqopH8CnMWVNqTHP1nMNrzfmCKZXARWKJH3oHQW9DdmSM5URRDvSoVgF2Q9wq",
  "key5": "46P9FezLdf7Da3sT36eoXu2pwPkFNoSbFHVxWifSzXjxoMDjteBBEoPPVgkJ9nhGHJaXL528mGL2HzrUfaozaTJm",
  "key6": "4z8zqmGBWoti73knJn1dP5vuajxRxtBsbCuAgA6257WUbNuhSB9fBsfNcUMg6ckMyVHywFNXa9bfH7sYRtF2v6Ao",
  "key7": "RNvEsPQV5Vy4Ue34rLnQPViNQmcXf2QuNFymA9sQQLSQzU7ZjjKbBSWcJDGHLsLBsa8U2hJYK3Hj6sjAXqWWP2d",
  "key8": "Bk1KSnyKBiR2XkYucBiatBQHjZnpCHVRNEFJULZZoHMpkVnt7Nufkyn6wqL9f9bb3VbKtVcTxwoiieeBt9NZSxY",
  "key9": "3QYdRpYAwrcWbBtKnihzgZ5fpiPZJtehAtzdEQndmBYbb9pC8Nym3qyytTnN5GpUXWaq9E3j97ycLJW9ctbi9Y6B",
  "key10": "3Rr5ZiSfvYseJj3CKmXucnigRvXN5ye559qK3QJW5PWrUDUoTUiPxwAYRuWu94766h5wNKCsTwfUXqyTzdUPadp3",
  "key11": "4rgwqfhzPo9QMqhiQNDWzVmmuR4euesoJzBLznkKLHCkCJwdzHtKy1Um2XjN4x2tnPbUKX4xKbdPx3r8xEu13ztL",
  "key12": "39fHxQEgo23daY2qixKg9DEZETAvP7DXr5V3dFJLFkQS1EZ4UAhBVXc4V6i4MdxgCDs3vZ5uuDvSysroKwKHAUbg",
  "key13": "4wvRTgRg5MogNBmpiGeSPC3Zks2nPWDrLrcG2rdZQdJTeduwKfUPSJzxNkYwhaD9UesRi4RwatwxppPFYC9d3Wfm",
  "key14": "5SggPheq9ShEGqxTVBH1yCjNr5ZwJ8QueetfMdgA1ngK8dFBwb1rffoxpmrMkNLpoFZaWuBpgUx6fRdCvi1dJqhq",
  "key15": "2tKMKmimLdxwdv1frGuf4Zv1n8q2oDaxvmxMdDxxzm5iabUJzuSPcPU1RRAMfRyjEJuAGzG7HAhKu4xKWSjU1VXz",
  "key16": "5YzvjCf4MZFtQH69Gc635vvRsbhX4ykJaXpXJhUXLk2nQpz5rQezYpSBa7SbYnv6GHV4gMFtRd7PgKasD6cPbGte",
  "key17": "3zVb5vjbjBxbQgmJwoDQ6CzNyrBX8KvKpkXZFbcmg7RYDGqvFHf9ZLdBAypsFynWaYnyBW28L2fGKuScBhu9htYk",
  "key18": "2sB8YiyCxq1FeUxwGPXp5kwkC21mUpu791BA9kJCMM6G98DvBPGYiDFn5329ohuz1aQ8i25V1vCe768SnbyyyPPj",
  "key19": "mTA7zZzDfi318Lfuwk4fcx3GfyksmgywCFvRgeuBdauZETPz8ZaJQvEDsmQR7kTjsSUvhPpJxsohya1yb9Gqi4T",
  "key20": "5Y9Rj2gtk3aSLzUMsxaoLUujzyb3FiTN322Uvwyt3vt2AhEqYcwMfwaTKJi8gDLpe17SEvy2eqFZV8b1WANA3Bik",
  "key21": "5VaoGjDWTchE8TpzqNt1ph1hn1oz5h7HMrMrEA2bQ68bhpBwoqyUssGpDRe1DvRazz6TnUmZ2ZQ9v2m9jpKE7rmr",
  "key22": "4PD4V2x6yDgsddQNuk8ZbsqF9n9is1THXDQz1rqqFTdBBsYTVr1TY9mny6aSN3hyfkYws43CMNQErVNjWsun8iVr",
  "key23": "5s7zvkeZ9rY2TgJDLoHMVJNPYB6FmgkeiFQEBZhjhHTKGrrZ2wgEryzPLuDSBpsaGMCDE5T7oNioCfGmbNi2FEw2",
  "key24": "64DsyCd6mBwxzFSqbLMxrik4em9mxrEZuGx1G8SeydNqJ8BmyFepz3VaiCGgQZwGCMwGpTDqNKUoF7AZ4sG34jad",
  "key25": "4LipUJRMDJypRzs1ecyTbFhUToq6AfGMjK3T9jFJmtoai9q51sjFtUWuT8bzC8tjmbfy3q4NyqNvaCaoF41bhdug",
  "key26": "221VioDbfwCjY5zTmLbuuQmHdQZvWUTV4GeBiqbvnwYtkrdDUThtUG7r68osCBL2afxncPGYKpbVu9w3ybLTnRAY",
  "key27": "2C9TbSDnjopkAQrSxSQj2HnMRStvCFo3UQLuxJpcKE652ADFUpBdQF1cirrDrxfhTKYq8zGeyhXCAwuvgZT4ZMV3",
  "key28": "4hFCi9PNg6rg1WKRkaTGwDDvUvegqz5GKSEUv66V4nd12BWzxmZBCCPCSVGYVBytYWPymbJNLLickTpvNro2VoQf",
  "key29": "3gScH3YbWomieMMHFPnee4GPuvRu6CKH7Th1ZR35snMhwCVgQY5j7GZWp2ib9LQ4kYgEhScutA26vj5ETobA9iCm"
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
