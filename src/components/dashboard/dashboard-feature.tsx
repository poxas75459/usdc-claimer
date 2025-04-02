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
    "yGhT96yZJvnAKp2ntSLZV6tFtxoWoZFHFHdYJqmCZMQXhMTLpQf1K5c3JA2X6KnCRf7gYiarXEy6So9jmCtntzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GzUwHFTmJYKmg68hWGYpebXR3AKjFQWejLXvGBVDxtB79uyACLkFSemPgHEfYM2tgJbjzWszvG1kHxYQaKWiCTH",
  "key1": "3FKquf8qa6YCAZ5P1vUwZxydP6VMxcdcGEAShP8aAUrVeYU27h89CbzKRAyYY4UNb6RZ1d7ZJEwXPjfYXSME1CKE",
  "key2": "53jqhsSPAbntAbGfLBo1EnGqHN1Pdspckse38kvH38cCgBJUaifqZVRBiU8r7LbeNx7wAGgsBjZJumoTFSyic9S3",
  "key3": "4eZ4EfwAprWxcHGaqitfbyAjMn7jPTRnxmkmAB8qtq16GizKBCNjJAoZmC1FFbVmiP9hXvsQW2Ad3JoYLjh4mR61",
  "key4": "4pQTUAo5vHTC9nD9y1qyEbAuNQt5RM3DudgTrHHctGPXU6h6HhJneRW3pCwKzSfdiKT6wXC8hWRLrdJkdpo97KyK",
  "key5": "5wYTFQpZh5Ko8GbtPQBPZBTnk6UxWe6GK5ny9HWHmksAU7nFGZj3Uan7PPEgn6e3eyM54ZXp95YE39zexnaW1z7A",
  "key6": "uoo9dBeaPCaYaTWnMHgRcVrZSDRyW1vbmaZX1TLCUuWGroddZtHSuFtFKVyog3dDQbjJnPNUAAitN2avsi4wg7T",
  "key7": "4DyVec68daQsXg6KUb2XUSFcpixUZurpdNE17Es4yJghkARzeyafotAmmmdHtqj6rXwZGyZjJ3u2VBTEVbMogENP",
  "key8": "5zitQZEmr8ittACVvStDGbgvQzLVjyXJB4zUCjNSdksXimzLbSi6W5GiQTbxJkBmTqD7heyGAQwMb38qdRA7S5WB",
  "key9": "FKqLJv6vwqmmqNcpUovUkECJpdx7H9jJnycJweMtjFDs8SghhiSWho2mtbq6nkfhShHWLQQJFCLiT2hFrxabRT7",
  "key10": "323yzQYJQCJrRxstif9fxxFavK9aibZ2371KmD3gBqeMUupdtoA3dpZyvgp57QvCewDCRc5oePsd1PY8thdRWkTW",
  "key11": "3EJoTRVMedKXfjvHgy45ZZ4E3R8QE85pmSog7HCwvNN6Y2PzFECrQZM5irzVuE9sQ4c74RbFceDz9aCQcvjUWtf6",
  "key12": "hYkfNHsusTAwzmbEc9gbVByNnBZq3McN2roAd5ZVXc9e4NosKHcsugBU1dTc3s2E8TWS5ewtVrV5CtMrSTeu5bd",
  "key13": "3o8QWAdKghwaapdzFMYePXtSifBi5JqpCMBm8kyypgJQ7ePTAbE7T3NAAZ9mjpGknuth731DU1aKS8eCDnShwb8K",
  "key14": "4kbHHsTtmQW5MYdashfMKAqLyHVETgKpcrRNVqfH9FU4hTc7pjqjf7yqR3zEzYyyVtC9q6eKiMycE5BrHfWqSXkt",
  "key15": "3uA5XqYjew2Fy61M1cbkauCN55c5wyGNCWUDQs2UFecarRHDS9W8XWJevHitVjATeJruDcntESB9JwJ3KJ6DTDNq",
  "key16": "2GMcqMoA5qaTJPczsqvj5RP9pS6xsKzMpTNFkS3y6EECX6UBouQt9HhZRTK8tPJRtBkddNjnHPyAcH7sJrXdEpbP",
  "key17": "3L9RWGmWXhSVYmSFgjXyredJVF5xxMLBn6Ypxo5RDQAoDh9vDtY4vA6YEBLGHmiuRFh1qiNUqVBLRJ5HyE1e75sS",
  "key18": "2mmhwm6hfQ346hf64wmtazSrnpvyH7P34v7u9hEryvPMyuDe1YicVi96aTruGuUMtMqWTUs3nJR9aK6aJXWyLTP4",
  "key19": "x515a4RYuZcGMQqXuSr6jkdzdvYjb1LuPkKrb6JgoZ3TEM5tMGeiXNXwPEE9kKJe2LBENbS3nbkxuy5Ds7sGEAS",
  "key20": "4JdxhmpYZ23HTiY6vcChScE2VkPQniD4eKyietUcviscpWPNQwHmjF8cEz54AeFbjmp4DNZ6q6Mx7n7UTViiiT9Y",
  "key21": "WezGpUacbWuARrbDZkDL8xfkYGDP8hDhNjAhR4JfjDemPL8eHb8FQXdfJBunRGFrkEftmKZTsc1cac3hKczezEi",
  "key22": "4WGcuodoWxkZ6iE7PW7Cv7CZ2fsLiB5yV7EQh69jbLZYHRjeEJNnDzCN3gjE4TSw9RMGqbJ14AtnJuGaJd7LY99E",
  "key23": "4pG3SjjiWywwQVc5wEcLCWAA1voXkrSktUzbiqTRbHYgtHy4b22RQhg8Rz7sjhykNuEGdjEtSaqAUSCPZL2Z6Riu",
  "key24": "4ypfmQXpeKWRmpPh1pHZgMdZ78oD3hWSGbcwj1ZYswtaPwnr49HvVbiAFf4r7KEE48juhCBrgEkDMaKeGrnNTFm6",
  "key25": "2N2GSojQV6DPMEPFfkW86hgWVendYGh6ZBVxrs9r2s7xaP48pZG8YUPgEWYYjfsLsVooKjMZ89o1L7FL1QgMAgg3",
  "key26": "3BLa32kpBvxyrhxzi1vW2r6id4EpTYsD1AB8dgh2Lepbcf3xG8GZ6Rzwf4XbjuTVA9A1ucU7WzSWXJGvPe6uuVnV",
  "key27": "5VSGBmdwyFMdesUiiDhKEf8SK8oA5MRhinTZCyUaAejGPNnTdC7jc4ZcY32e2t3TqkpFNEcZR2bh7vruafaqcJ84",
  "key28": "5s1PTp25Q26j4WgRhyGWPoBnRfiMxbAEGSQ5uTq1WTnPZyqMexv9G5CYvhwdB3UdcZ9Ssku2aVD2sa2eitYSFErY",
  "key29": "5VcuRjFYNBLXCvELRLjMDvDooDH72gKLnUeaxmr8bxS7rXqyr9HY65X12d4qgvktjavnjGsz9QuTrfRUbAxgBZo2",
  "key30": "3PxxJdx82baxM9qwsoQnJHgk1uHB3Ca7AKeyGZDU2uFsBxQZa1gZgTazyVEgHxgbsGCXxwm6Jfu3RjDuiJeSfHtP"
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
