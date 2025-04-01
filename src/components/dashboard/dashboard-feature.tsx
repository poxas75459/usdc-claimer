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
    "4b57pr5Qa7p3gWBmx7M174rzHibh5cc5HCQqHNVTicutA6av9EtEm6R6JvM955MfPzhLkhcSmTwoXLHZUH2BpqSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kuCT5Q6n5RoT3TR51y91Yhb7t5SKiyksjQfeoSnjKW4kPXGPYR5Nf1yjRWWYLKaKTWNcTsxsJM3qEeYbqinvJEY",
  "key1": "1ThENMj2kDLdKKjXzWJ8hpXb3oqPEtmPU7yYDBYF174URSkKGVvt7x4JCtHLyWdTepQ7csyKYxEnNp77xvymaoV",
  "key2": "2u3ytKZ5RxoDKPgqnM6Neeior5j6VZHGRexNqdNSxwdYR5prWNtdfd5avbFHTY8crdoPhoZ8SG8DWiG8yQwJpUfg",
  "key3": "TF9DWfYtRXqRXSbvkfrTwxeYNvrrH5ka44C1AxbzPCXLDgwJqAZWB6rG2xVmPzemeNL6ejsK5kZmYDCZFtn6jDs",
  "key4": "5A5gtiJBG5RsSAt4QbrnqqraAswSJDhR8FkyfsfyCwg1kFvjNE87TCa9UAYpRqr7wAMUeopSUHK5ivDtpCrTAbQv",
  "key5": "3HthmbdYcA2uCPwjpvh1E2SMB4zcih2TvWU68nASGt35FYPFivQ5uZQh52JJNERfawsvnLkGzNF5mi7PnLvMt5Qu",
  "key6": "aCgKUJni1t3DBbpqSSX7ebBW9qzAYaFYddH1Agv2B1oSV9GdG4J2rgvBs1mWT5RoLVvGgGXNvqtuQVccYPZwdpG",
  "key7": "2BTw7bSRvkbadMCGoLq4XP85p9NB3DBmhqgRvEx9PssMoZncp84BY2GogggZeo13yvCMDQhsVyRUFgggha4pu8uH",
  "key8": "2HJoMtivr9S4KmUi5zw9no3ekgnaNBe4e2UihfCGdtAefrNUtYxuhU6nsSueevqa44m6BCxJj1mXfiWCCcYyDYh2",
  "key9": "4aks7qxtv6gSkRiCU1YNyZuTwYnP9n6hu7DFMpc8TmRSXY83BQrQuawPmuSaBw6jwKkAdi8BTDPg7ASfMkV4DPCj",
  "key10": "UAEdYqvtW5jBhdreeQiCBsDrBpJaFpAoEAgmywJ3R9n3Mpp4BeES717NGSNvCxdz2uDoVdaFfnBV3Dr2bLdCXiE",
  "key11": "2223MgeizEmtNGmSV42gpAGz9NLr7h3QEYJk4HWtmQdCmP6fA89JEUSxxHysZoMFfqMAz5g8CLZBZ2fAvoteQpms",
  "key12": "2eUT9kMUFnshB7aEKWFVEYBaKN6gKAKh9moydkVfR7cqZAtaxR2PDumhuunx3t4agmTqHCzWAL7GFWTyJzjLiJDk",
  "key13": "1N4FQDmj4cpRR7vKkRrg3Z2rZXPPxYkiGB1stPtmDdqfG2H4HXxaSKzrCkZ9xABfBBQRqCJ285w5uR7ndCSqs68",
  "key14": "5tdiqXRwbgTe3UNeLg9ZLkyBNpjRA5XejHpTZyYuZFqEHVAsegRPbHesUTYQHcj8s2W96DPvV2zrcENyx66bBXsB",
  "key15": "4qgiHKb5g2CmwJXXjKhUvbYpGVMGPedcyow7DqqyCt6KvpVnCMmCTHru3U3WdttdYmJng1JamofB4RSVRQ3bCq7p",
  "key16": "gMCyn1yWu6dQzFmBeysx93yd7V2xVyAGjMCMx1mxSUdTxksXUdK1aL7gGsCrqXn4jcqwkQPq8k91xGawVsPifFf",
  "key17": "J96hHyeBeZrtzqQKFLWcB2dTBzC6jRFpSgUSokuRLkxtU6nwKXiizz5cnjYeKtzsK6DpyKSHZrvwyeJWewMTpmM",
  "key18": "5We3fNhaVc6PsWDbr69gmqUagDweaV23K4Yw5MBAEbBuesW7uej3bTg88etj12MdQP8jRopfEE72giXz5nidL1MP",
  "key19": "LS4d1rPH6q1px3SmiaZAefrQNFsWVHeeEDErkHr7LcQcxjYaPSAyuPG1TtYCUTg2cgFjWagENrVQH3JtTfH2Yvb",
  "key20": "5wTBFhcAdTUprh8ZHpvpCxkVB5pS48RrnQ1eRKgcKNEnR5pgvJu92hzPnMse7ouT4o2LqZRLNBgQeKYuKkuJ4zjR",
  "key21": "5wi7beoy4EEGaFvDRYKueByKir8EgYQN5nVvRDDyE9JDH8ji1uocBbF13d74vFu3Y9aKem1D54KVTjYQzFbmM6vQ",
  "key22": "5sRVaqV8tmebr2iWxH7PvsTvvDL8aEVaFxpXR2a8wz6FPXp8FXYirXZmr8bsBP93KSyUZBeQZ3Q8rX1tGMKL5ZWa",
  "key23": "rkhQ94PhM7CEWxEyEK8Qvb1qqYyZqFyjZDc7L1zcGwsfrjqctZMLp9bFQa7WqCZBZRs91tsxB2jaEorR369HQgt",
  "key24": "2CZKZ5h3omVZK8WMyBEaQwnt93JpMGziFVMuTvHjwQNzP38Gm6jsuoyyxm59G8x7KbyxFWVBq8duuv9y4X2aGL18"
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
