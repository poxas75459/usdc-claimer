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
    "3iFbarYqrLqgNFMoCiVG7CUm6UgwdKaaK6B6zqvmLRKoFqUGsBujpMppRLoGjih4A3Q9uqzCh7wRQz2XuksTMS6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C3zjiaxqKYLzRb3c2TMgtraUbh4FKWiSnvLVLbiCjmuaWZyXKgBshZcpjwYUP7oHK6VsMqSKsCEyJuKKEeq3E6z",
  "key1": "4LY8gJauzHGR4QKN5t1NhdLKFcedXPzuSFBRNabkwKVuyWRDKntVMzUnB2x76ZdrQa95yRJj4YdB5ngEea8zU92d",
  "key2": "GeGm2SDRWjZHJZSAy5KsJVKBn5RGECpKVWAAryJVK7g27KT8CEVmq5Gqfsks9RkWHm6QZZcv9SkXzWvhFVd74fk",
  "key3": "2ZUiZezN9wYPRBCEAGEna6bKiZtzUhe1TTeQTD36dPfY1af3dhs6LCHHgjQoYnYawDBkqpwTjGY4t2SbeQ7eqAcw",
  "key4": "5LprQ985PTJhcBPBD55svRuNp5XjP2rtPKKvprXhjZ6Fn6H38PUtNpAcQhcr78sqkWq8BEH4q9j6rW7d4RmV9Vy3",
  "key5": "5f8GCBuA8bqSGZKUeP3cxtLPXTyNiLJYW4AxiLVZcJ3ErT52P3EfgYPZockszhdYisDZWw9VtAdjWMpxJqwEiwPK",
  "key6": "3EGAmi4MT35jSd7V7MMSHm2AdJjTQ1uSdarwdxqVcr3QWWbpiEhcTpXVKXxmeid2vza76F9qkNpUAzRaodGKbPpw",
  "key7": "AqxjhSN8E1uzd1eDmwtGYstNfp7kc84VCkrCnnTsxnSEPrvWtaV9HJQR6eMUA2zg4yKVJKmUaDwwSh4b2NrMt6o",
  "key8": "2Wnxq24qdJoQTxMpJMvTMWywGMF7xvKtMRfdsooamqBc42xeeKUb4RzacPwHYPYie63aV4sKbviG9GdMiRkpuS61",
  "key9": "6q2V9cKqzkzXa25vF9K43sj64ru4Fb1NmeDfyqf91MTat6FMKKtqupTxhm14MtMjaYDwZ7nmpV7jb8ZfAChAw9k",
  "key10": "3LszixBjee3KHdtrZ1vKt7y9PqRZVBE9hbRMbNDbg2s6s6GoWCF3jQJzpwmmpbNzkdCmco6ZKCAW3ydL4GqTnHEH",
  "key11": "4FAPz2dC6NKHyCk2zinQnHYVHRTwSdRHXHGWmD5ZqmyGditDxPSGCHDtpWaAcgEsSVQ7bm5Y53PBebrxK4LgMsdV",
  "key12": "5NjPi8Zy5bzz9ZDk44LPQ7psutVbgsbJRheRVAo6MnHpGdyNVUXumq7ejFdqV5eQfXhPbW2Tcw317uiorkRvtyJn",
  "key13": "3psbnHtCQe4eRJ1rop5ZJVEXgT8SnCSyoQgdfGd8Y9yioCqgGCSHJzHNKQn7CNKec7YtJWve5m5FR1wMFwTtnwY9",
  "key14": "14GxR1ZY1Qx3EDY98KxzsETUVrTbLezZL3an356yhrBFgDquddRCzY3tohTQTAjmv4CHK1KynhSMqv5PAouswRG",
  "key15": "2EKekuhK5CVUb2iBxBuTXrBMfuFSsZ921yVg9Z9mvBLZYvwKgy5GCrCG9HXfdWfyJkuNTHSuBxbpC5TzjkVg6gCb",
  "key16": "uPPzfqveBk2tvnBVSgUmMMP11CAisCg1bsJMRMpqjZXBaK5QxDgWsxk3nRW7kFBaxBNoPfjqFuwDDkAqCM8hrsj",
  "key17": "4aZZgDfaJMsg6SUZs7wnzq3s6QTZEzbz3a8B9iMrrMeMTriQW1cJiwiaMUgmVKUsAQ4MEi17hTYop1asxu91zFyM",
  "key18": "bnknEr7Z6GYdGSCcw766c2R6tr2THUvwLW7enyEgMogn6rmXwPAB7FzG5mzgs6smL1HA5s8ww3HgGCMu4cXqZvw",
  "key19": "2iMz7onXPcumcQFBbGvJwpaMXPnpSXQTNLZsejSGCroLseYbHYie4yjGTp37UzRJXAVQ2WxqYXafRGMGbMPYDV4F",
  "key20": "66o4haCRxmicSWHcXn3QRRw8ndU7yCZrsg7dAjscaQznLF7UkW97CkkP9BWBWX4A1DE6B1EoKh7CLKbqGqqVQptc",
  "key21": "sXWmmJuXCFLcfGuRqQeV9352D9iqVvohn8kkGjSQFUrsFcArPMeAxrzcpKv5xV7uP9N8LrfA4vCZYNhnPEsrXXf",
  "key22": "dWfCzJ4cDj5Tp7tXXzT3Lc59BHHg5bmeBAEXorWvjiuQtXYXPupwK6uKRqEAm11HHgha9Y9af2Syg5ArLPtch2J",
  "key23": "FRnpPrd35YfG7RbiFc6zuU9VJDv9Yyk6sMW3ksVGi8JH8Jp1FeAaoPgWDinoykw4foWmFKUrp7suiB4TpUTzPg2",
  "key24": "2y8qPj9j7Z74ZUZYkigsZhPRkyqxmz6K9kL78k5wgMgiyvAnAmAMaKwb1c5PMfQTRJ1atnvdhReHq9kuyGZhvHKM"
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
