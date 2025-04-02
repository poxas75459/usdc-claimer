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
    "3vHKjazGHrwJqujbgFeVALv77ijbrWezxyqwT3Yu54KdwGsNT7vBS1qwNgX1YuaZfVy8RuhGyrQb1PkT6ZXXv1Xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1YqRMdT3ggomYpbfupBNuzK2WBmDZz1b5HKuSgecgJzD5QYL8pyfEXvPsJyK51o2XQcnnFx2V44gGUHj3eVBpfF",
  "key1": "7a8cgta4qAfczobSGKqc6DdTXwu2FWv9FoQGDSM3jH6TLMTf8d4v8wJe6yL8z9AW3rFwEZ2m96axLgfs46ejvii",
  "key2": "3Jwr9mh54QrUchuaZmG7SFACdcknto8FzPCjojxMDdLv1LRo6Qs7ffHmsf4MQcrEUrVakpXNeUc7Tmy3XwYaYsxs",
  "key3": "nyfFg2qFW7N8wbm8R3hTH4xVgwCU3qw3x1dfnPH99SBdK8BHrFs3mhLP1v476U2utrFgevBFqSp7MuVQsPAMUZL",
  "key4": "4J88CFS15braChnXT5BfHcobrNZ6ZLyvN6xbkTse9d4PotbQdzhujR1nXU159M2zSVx8vKrcafLXstE9BKt8u9Ae",
  "key5": "5pvbk6A8krxxuukLUbNUYDh7T3Y1hfRxGFHJH2tt68tPfxgHhuyUAR5sz2B27UPjJnVoxjAHDBkNkY8DTbmFFxPa",
  "key6": "53B4CRGGf7AuDpVGxm6crNeKUJtaEjDPhvcyyR6WQ7KR26GiYjoRfRaxGyCQqasUFuUgg9XEuk6aNxWeHBzjFkGt",
  "key7": "26H3p6wG6vkvwP4mrmZmKMuXpbugSQbDCcKehn74pNji9aG7kq5iAX4T2SNhbQTcwz7WJQkkVkrZXREaw3iFwGBv",
  "key8": "3oYzQddLK1kAqTjuCV2a2PbKEGcRNKv9vtGoYcNJkzJUkp1cfaJwCUHwbYkNc6LtjqEJYEHdk3MqZ5hLsZ8UuaHv",
  "key9": "3k7yF3XGhXYXVDAYvBtefStHn3L1ED7rejNtQDe7EuZ7hxFdbnx4wCJ4WyHHnHgiGamFTLJJjmTd3MwB5ZYNXb82",
  "key10": "2PUqbLXrVpzYPhXXW2wezdu1tHvhBb15KzRN7WnrB3YemYUbd45Bw5FmP4AhYxSwehTazLYf1NZNLLJgdcCqD6jR",
  "key11": "614etTPsuTUsQqofAVcaGeAhk5AQnwgk7vF4uPzeTnPyBTXVKZ7gppbE8vp5Qk39FvMAMsCuHnrsBYHpmotHz3p2",
  "key12": "4ahrFveNcX7rueVJytfZAwFTeKpx9LQdp4swMyR6qgQBdZB5jTFiEQQL6RZecjk4wDPkt6ukbPKwXACEd58givoE",
  "key13": "5oJfS7Hxufkj78fhzmiGcSqQx8E4SARraKBEA15V31Und1VqV5N4N6Zy2T6xyy8JyLfvcUR99VoGHGqTzisUDx8b",
  "key14": "UvyN194h7hEpXucQESsx99Qust3Db9PBYZA5dJCnxwgquaYp65dvzMmjfVQmJJNYn9nmJBpjsU94NX7LkfLTCb5",
  "key15": "2vGiKgHxnPWdB1wwqKuhJYzHm3oKrC9EZoVTrizeVxjtAUuRbNdowTkSdirBu4ENz7ea4vVT5SXJdtApFYE99LcT",
  "key16": "3iuoynNSRHzkZciqTo7cbKUQCD3fsthmFZoDrAhtWu5GjXx77eNW7WjaPnbde4vmZDosKHcz2uHYtBWfzULc75af",
  "key17": "3AfaT6tcJPfAioM3s59xsseXRELZJY7ZAXtzCAXwaKeiomEzs6WrAPmGJPwhfkW2ZE5fXyfvwJVoo1WxxjkCF3nv",
  "key18": "42rLNW73JbiLCxS3hZayTxhQczibfr2NsDZ8SU9mNDgh9Bf32SVTv9JqUZdsFXQXuNTK6ZABGi53zivqNSGp2wuV",
  "key19": "5LFtBSxCdBTeJbikCks9PFnW9UFwSaU2Sxdzuox9qqhisu22FrJPf5WAvU4aV9eGN9CrmMJfBD5mGSCYDi9WHPJz",
  "key20": "5pKqRaxsFSeiuXHM1duz8FnBd5QmggJNmGU5ArjHv3pegHdYCTvkrrgUfTZ9CuU5tKwb9ZZtvXRMmZMQLXe6bHhn",
  "key21": "4m3C5dUa4DX7Ne3FwtcxGAb7bS4g3KbhTdZKNELjRKbK3TDPSnZaKYkWkBiwareP1rq13t6KCwP7vfyZLwaVDXJo",
  "key22": "3dsNuEXxDyefcmE6LDx1C7fcgs7o7RrTCs3woqziyGg59F5zmf1vfdU6oq6AwXwKxb4EbRdUDicRvB9gaNJLQRP1",
  "key23": "9ms4ELLULbGcCLJQqtTWn6LFUVhHKVgkrAHzTG57iQe6R9AKFHRVd1tdqnXCjb2hfN2pfkrtmUhGaPGnswWChJr",
  "key24": "4yRW936nXV1gkt1Ar6CfGcZXobqu9z53kTmeoDMcTStmeKEdhDLs8KKV1jmGWX3oq5S46ixoeoDGYFLcSw1rkrVn",
  "key25": "2DtLgTwyricnJ1oXkyGrxA5un1sc2NKB8RSQCHMnfrtXp5BjTmYZK8wNvMN6QzJne2UKv2cTNQNbx22n74KzD24A",
  "key26": "4TqT41sU7aFUcoSKoq9kfL86FbZ1dsbQRuKehSGCRRVfHYGXSbDe79BDS9x3ejrthTNKWVMnGBoPXPCV4Qnrxppm",
  "key27": "tFRPKsSR2Nr763aoXrP95bKpMnPpG9i5KnGK6JKm6TEdTW8prEiiBkzk9tkCs72fpvmM5FZivyi2QC1KgRDcoE8",
  "key28": "2AdMyNxfYGRYFdEBTFqFyuvmr7rdn4FWC1n9j8Q3CgTDYrCkZCwuoqM2RytJ6x73pT4bWNw6g9nEstiGWMqmMNR8",
  "key29": "fytL9xsAuGUvEDpDXPEK8jjB6ahUb9TJoHwtJkiyhbW8mqG8s1Pkdn3ig4BNjKTzTerneAcckNVwT9XvzPzVKtv"
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
