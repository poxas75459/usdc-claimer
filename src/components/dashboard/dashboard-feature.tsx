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
    "3FLopyCBWfsJLyVNZrQZuSG87x7NVm6k4E4f9jRQLEi3LfUSu2toHJAuVXGu2jTEKTrLjD8RnrBDYC4AbxBhKnpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6jxZdDHeRB4h6v4FC629ywLr5sDMZm3jzMMVH3NkPtZkfYouSTdZHEvM9HSinrJxgE2feAdMoY1bvW7pXpeRqZ",
  "key1": "4qGGhrzW1eFQA2aj25oFDERhfCid6qDgMv2mxQizGouP2GEmd1Ztr7kNeuNcF7nXdqAJ1YwgrifYwkKB7UcwyuDh",
  "key2": "4tZZiAPiXdnKTYK5VSwhstazXn2oxteQ5H9q8vf1CHHNYsKiqXykJjj7dwks77rgfcvxFjDECnbuocrNbe38GJnv",
  "key3": "3C9RT8upE88H8eLHaygqU7aBMrJ2Xi1L8C7CbgTPgxgbvHjxZ4Z8QSYZ377475GXQYJWfw7SRfAoRtpHNFkFfKhU",
  "key4": "PBjPZ7BHdTbeVpzQxxh61UsPGzmQkZyZR4hGW9gV4uoZ3343F5WvHNzdJLDWB8zTDzXJLK269S9g3WnwCDRFmvS",
  "key5": "5s6dXdCQSKM7irE8fCeHPXG2Ty68nrUy199rCoQEnhWZNoxFxAvUms3d14VnvvoYnLNLo6e4Bx2u3JHwmGRChDDd",
  "key6": "EnqaJRPjBNgaji1FC1vXHMM8sLqkp2bMkezjZVEcPAkKCLm6va5NLW4EXvdmE1UtVmiqfBwmQkv8CMPgSPy5Yii",
  "key7": "2XtP6QQjBiMcGXaChS9UEDeaz7FstnnYE1sFiavU7bFMC7UPPpnKsLutwLXRQe1E7pwJXoXuoGwPNhqSYmzyHJAk",
  "key8": "3sBSEF4xsVt4Sr8tZkm5x2B8ajTkW1Uk8etRz9AfwSv2MwU6uipRa1srUTr4e5xbBN5F9u3wKLwDPW62YHQosuHX",
  "key9": "oadTutCnc6ibVd167k9bjX5Q3CY73Mt3xZ5ASweadUMT1GDWEYvnh2djRaavWWZiJDaRi2oyP2gfzEixwUp5dxg",
  "key10": "2TAgDvRbhf8byiBsudY3uuQ8kdjhvfZmUasaYfZFdUXaxLLV4qgFXiJD9cCwSvuoB11LyQiz2zf7MPyzM3iRYaDW",
  "key11": "5z7S3XBTdgtMnvbTnMSiAME1qL8UPYm2Rk4HKnCB4r8hAcB2G5JLctj2Cz7myGj68ZsKtpNTreSmFL93vopVuy1K",
  "key12": "3P1pZ1TNVLektK8d8d5G9FfBKokt6KuU9ZQiJYjVFSbiLDdTEe6VmPqBZGqxSvjCRr8NQZWfta6BVGC1rJXfmyns",
  "key13": "2fEy7xYt2hQueGpCEx9L6emwUr4pDDy4f1ZizhSQG6sp8V66K295x2NHfcDBSN9FDts6Rux6MSG34R9eMS2ArW2s",
  "key14": "5GVuDGNdb3FTM7yZLhTU1RQfNLPxcxYSA9Exd6jhdVvuS2hCXttj1w7nUM3b99CmpseKJeTqkdGxiUV6Q8fc3oPh",
  "key15": "3VrzWT4n7jbEUgDK2p7kdDG4UtD1Vk39EGQNVCCt3gZ9FjJrTNkj3mseQ5NY2FnJVijt1dLBSuKn71hsCrtykAxj",
  "key16": "242ZsDpKZaj8cywCAjGjedB2d49Z6kaYV6MqAs2EPg5UBZNjjQL3QXZN8Gp1X1egwrDXfkPW8D1bpiCyGnP2Lofd",
  "key17": "2Quc5ypmW8gX4gv8v8niyTYiRcidaUdrhjyWteFwZCKo59VLc5UqBNccstt5nhF6H8Z54CwckRrhi3tmxX8Jicpq",
  "key18": "44nULgEnghKUYErKWUie4PZKtuqfiZzWvAabUyeNRvXAbSKNStxJbwPvi2hMEaiYPMnX5s4MhmAcFoxScEM5KzhP",
  "key19": "Be4wpRnYRVJKTrDnCY7XnSBhGZp5GdjPQCykCXqp4cYWN9pkCpn3S7HfoSszjjuVVw375qpt6A5sVgJHm8d8Dob",
  "key20": "BS5oQBwAX3AQUHF131UMF4ebCFR2Q6GF9kZMpXv5XBfStmJRU4Vzwh8M4kmfdaJdcWnSr1MmsYztXJCfJV2R9jW",
  "key21": "3MqRbyhbRcMXBiV9YTUCCHUpZqTxP9pn1GgxC1QvsaKgLQtGDGufLxm1FaJB9vjf17v27LTHzoEwtt3HvRpT5HVv",
  "key22": "5bPERrrph8hQ5KeJkzaWxYHUg25SR6QC4q97B4QytKmf7AwykvMvdrG7ovCSL3a9Ec3hfhJyoSqL9VHUcaqSi6w6",
  "key23": "25MMqYQHCucUNC8RHx9xbvA9roet7HtYy2udAieXntbx89yexZDk1EVDgAvjMUXkwdVKHtyyuRk8YGGWumc7JWRa",
  "key24": "5j4vfg6CzJdZGKFW7g68fZrSSVDi3oQNkcpb8RTvWVCP6BkndouNJsxac5spjUZVNTXkxgM3u3aPZjpt1bDR1GiH",
  "key25": "PZGv4gaZkeo66xmociwAL1AfoEh6zjNtzLKpWLX2u7VWubjos87d1dKAWStYt11zwvb5aKTwexgitPJ9HWFJrye",
  "key26": "hm6mPfqUFoPBF7u1SHiTN8L2zgnnSQrtuzWYmjsJe9qMCwRrtZdaekvGXhhnn7tgX1Nz49LV6L2Ajoi4bNEZmBw"
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
