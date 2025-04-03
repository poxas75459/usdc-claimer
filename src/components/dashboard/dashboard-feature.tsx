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
    "3fYRnSVdeYJgHrhhoZyT6D9BGBA4PWbqXjEnN86iToNdm9fgtQseFWuG1cx2CA6upQgWXVzAmREf3Mn5fq3VMEoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJKQxv9dindijCtaB1s6NcC2ASjmSrk4hgt6Vk8xahUaXvZYJR1L2yAj75VSpUkuqkJyzmf8eDfsETvn3CSCuJ9",
  "key1": "6PxMAHzrmvwcqfzojKDeJEzFue59bgLnL3HYESJyrmq62Xvhim5SmyG9pf8czCggMNTzXRQ1E5yfX6QoDT3pisZ",
  "key2": "Sig9fdLdkYVoDEGcArA51CGJQ5SFkL97H7az1QGj1S1wp9VemARZbpBFbKbSbFUQU8JTtuZEa9JXA5wzXAVciUx",
  "key3": "5T6FekFFncrQzue7sLkmPxZR3x9Eq3DkPQZLvZZvmCoWQtH9Lur1BysSEP6Ne3KTuqhHf3m6ZZDeoPTiZWhzf33m",
  "key4": "KJu5V7e9kJ89k1SqVm3xviiXZbLRKdiQdyd6irLhsvCYgacPVEJk97sbpriLXHMZVr821FESfCiuXtVHdARwiDQ",
  "key5": "51dYD4CQ7DUGcUbNX32SkrCe9FwAr7By8fuGMyp7B7kvVCvyuU2zXiNjcBkC7pxXjS4Ag8zqveTgiaoEKFJYV7QY",
  "key6": "5Qt3N1pMD98ZjqTgt8wbx6tfBP44SYmeV82WZmtx2t11QL8JX9Sqt8KfawJhmqe39bbJg6GhL3WLDziLsDE9bzcJ",
  "key7": "5abzKwXDzB6PtECxeo9VMpDPyw7UmiJdmEGWqor48m4Lwgix6iZp7K69RtPtcAWHTpNro8zE1fTq8cEpXATRpaHT",
  "key8": "H1Q6gMuCJXZH2XhNdS2GY6Y74XZkCEHdKBqhoYhyQbXNjouYiCn4YVZWDTNN2nfyc8xc7QHY2bAencvPaXTypMZ",
  "key9": "3akRFn9JCZmKLbxUHkviMUk5KVKQULpJPUrG6vW7NCSZeFBD1R2hwG7rX7RrmsaJbq7Tj2a49NRDRPXStQNbQ185",
  "key10": "3jLJ4m5oZpXtkWjN42jTFVS6f54nRveWjQ4614g4mWKnYL26da44FPXXn3TGTtpVy4NbqELDCVV5axf1DPtMEriE",
  "key11": "5to6kpd8x16RmFLw17Ntdi7fz7nVnk5S1PdcqGLoBZvDsSvazdgbCaRGF25JweBnG9JZAkf1bDPjtyrtZZmearJm",
  "key12": "ibmuddJu1KRdfvFoeRGpfvwRJ4B4zv7f4Y28PXPqFVuCdKcjcQf9mggUBgKEdVEXUWHGkA4ZZZKpwXc2BMc8U9X",
  "key13": "4k1RDbArRZ2rPcMiGRSNsYRbWKTEBJnJ8eyzJp6BPBj29sWQ8MHRM87biiWjnqJuVTHB39dXBPnvtKwZM6oghv5G",
  "key14": "4cnUZ9KTzSbJchBPbTSbVUXd16DMYyiioc3T2Pgo1YoVqD5SjDva44DL1wteMtKLbp6cz4ayK2Brymhjfv7jmLeR",
  "key15": "3RRxahhoiSGf4k9wu3MpqHAynB2VDFYe8zsHx95fwa3gMYc1Dpmv6NN9EyM9AWvjFDUAyCH5YqMfDsMmQrhpfvMY",
  "key16": "3KAJfdfQn7gpJpbARM59eExHP35ggV3V6Q1to8kzd6SNGWs4Pbu9paujqTtjH7cVawZjAmFqbXp6fHGTpFcCuNzZ",
  "key17": "DgfWmyXrgPEWMkQYumkNAS2n8fcz4wZ5U1smKtySfY5HduNLcbauHtgm2zQJaUovnZWtYaVw2X6uKaqWpg6yjtk",
  "key18": "5pTd5VtaA2ktsMgRUMKBKyXNpACbfm4iBfcdLPTRqfCA32YNHYVxRZPt2ghgChqWH1YArd5Jwtohj5GwzdA1aXn6",
  "key19": "5rVQYjXzx2PVV8vDRpkrydzgSiK3Qgx7hdEQhj5gNW91hLhCVBf4hepta6m6bUCVp8ZaqUm6K9UsnLR6UY1q5ByV",
  "key20": "3MrdLHipmXfVMjZhYBjGgH6EFyynkpjtXZb9WqrHcmqfX7HPmzDDwDHGNa99t29F84Yd4m4LLxsDR2sozX8NUXic",
  "key21": "5cL8vrAXgMJXXDDQAg8S2BVm4m492r4Vx9P2nJakKprjqhZriPYrQAZNjVQB7gQEzFjfGPzHqoGzkdjyggjK4oU4",
  "key22": "5oHN7AGSXWtoMznNeKPeHxnv7JmH9hiNbibt9TJ1FnybqcKm6YZXHeurbwtdgLtnosq5vVwKjP27SVUii9PQ2uns",
  "key23": "4TkgrQ3J2BGrqDoSKNZ3U22oioxNpHjZhkPKyBBRUNR9Horosjc8wvJZFqZ3FhpC6rrrwGTbSdLiKZd5vpS9aFGB",
  "key24": "2Vust2TjmKVM8EczzzP99oomSVhoyCLibv4HUik94n7d1mdnfD1SgZSLNLouiNWoFnWByheEYjVnotskDY1gJmp8",
  "key25": "35j4m7WeSX6HrdnTjHcy3oGQ2fPugoTQN9EWfFeQnZnuZPk2qNQYjUQQJ5CD7ad6XCzxq3rrCU1pAUnsqus1Tnwh",
  "key26": "5TKmMSJu1HbsVbQpV2SF6TfBg6uUA467BGtSoSS6nyg1zfpYV7xe1h9D3VaGoJ28RewYeA2wVEmGox5joG3bziLN",
  "key27": "5Q1eUgLXX3g7EnGPkbY9mMDQrTiC5tavYYtNvraYN6hnaxjPQFtaYfDELjxii7nGFBHz47HXDgcXG1rdKqxi2trn",
  "key28": "2BrwTYQoByRe6TQjzFn6nCwJ4SZCaYfZkWked8hPkDrQ2indrPDXxsAm2r2T1wbfka7PsXK85QTF61vP4xymZpdB",
  "key29": "4cXmYrS2Tmu2FRAaY5EzZ4vYZrwqhog8jthhCKSPPVyrWg7oFsWkfemJ27xmbT1yxhgt6quoJpognCba4kGoej94",
  "key30": "2EACJqYGfqkuWuDZvhfqmf5avYSJoFKKg6rZWw5HDLC4zmhPeHYioymT7izxK5bGLw3ypo7mEV46he3s9KSrsATz",
  "key31": "3mg8twdiWY5rGZ3V4M9A5nizQjHZPTg5xucQN1uSMvoTsKSQaV6wJefHnmakqosVQq3U1ngkJUhNxNhp6aNpnyLP",
  "key32": "4JhhYi6DecgDVkeJFZc2VyJRKEAyW6pnznACzi516LBdRLhgdWcQoc3ziVw7Yk4poTi8zLTfUBtyBPM9ACCqbACS",
  "key33": "uAZjcgTiTwxPFrVfuw4q9AKoidQ3tAWoAiuvoA3MA76TjknSycMbZQcTGoHFGtjYAJxku3VWWAVuzaRRaR4o9S6",
  "key34": "5vY7cNdtGF9wXDJ1ePJq4tGHYNLdAAjqaW1XoVbVdr83hkrzK5vavP2wYKrbWMfD9FSdVbP8VfGT7rcjq5EeFsbz",
  "key35": "4GyHR117ADHGUtVjS4jy2pnb6U1NJhEcTH3yi1hy5j9rWspYftmSyigC8Vn1QhfLYGm6F9UmnCiyBYquViiWnrZy"
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
