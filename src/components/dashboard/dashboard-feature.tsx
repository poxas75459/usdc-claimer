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
    "5fhijVQMoU6LNKFdEtwam44CxS1rutLDgHwz3AhQFBEaSatGf92kAUKNYgccMTytvvsnYtD6Q9vip92e8tSUjegy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2prvsHZCzYJnyejXoX51aZNEppzJzYmCAa5zKBqyjyDixqcjnGj8284GgTCp92DGmMfSxhwyS1X6DXRYREU6UTTb",
  "key1": "Pw2fAzME7pmPpiNBojFN88P1YJ8rWw9R4snKLfoW26gCujv5RPrjPydCX26TEBZ16MVFV9JR1rGiWNSXjQ3DxDW",
  "key2": "3kVwXPXaDKkpTz9khSmRAZKcjQ2cXwRrGPqUY7iw5kXiAe13QU8p4HrFMsCUW4Xxs1n6e7MbmWwN6ZewRpRtdZBu",
  "key3": "57QeKdL9yZ6ejimYzZeWjGgbbsJvMTrGaCDxa2FMthNeam42NdnDtASZxFSSLVG7hJqMMUkenBjNAuvsggU6zme1",
  "key4": "31WKaxJYfCvMyf4Yc8nYpHizUFBgd3VvR916X5DQZkGfSA2fJzUdQR9dgw2UiNkiHvUkjTnfD23be9RfvtfurhRm",
  "key5": "27MhXcPh5qUd4gKanE3v51FduGBxrUNVWxHY8UyAr2KB8eLzyzHenUQKbpeBG5j9k6r7rzpwGAUdiapNm2PobJWV",
  "key6": "2JysXTU7UuUvbDN5JwCfQAD4XA5HXiqRGmUC1Jy3DGgofUqLp1HEtVf8fv8UEU9BeVJgu6pvP7pgq2SJhjQRCVV1",
  "key7": "5T3X1as7ZFcSHx92Ttqz1BsBC11wumTZxdGqiq1Wq5QEHBTv34DnaBSigHb4JrY8w9Bs5sJR1Z3dNBA9MCBAJPys",
  "key8": "2HtnkxyjgPi3gmFCcqaqLNWmF9Qv1HxziG6HiKXyQHHpw8HKU2Fp91Twshdcbcwyi5PGjK1aBmjbrgktSmgrp6rf",
  "key9": "645eVzap3Km3BBDMy8kCpRvB84oqZPwuPgf9wLjMij7tH2worF48RmbrkRMow9xkhoLy6WR8Vdd2MhMVvh4nzyPY",
  "key10": "42NvgwzynKwbKomForb3WNLJjXCMR37xL4a9hXftDmBsHzyd5i9Aaigy9Ekny1gUUXi5RF6i4aV8eUwKkYM75J3p",
  "key11": "CX2vqENBrRYL9YD4UGhNrmocDMyfFBhLnUynJiGtxaQXUijZy3WE9jWpYA4tkzYC8FZBV9ukWYGhxcTtPb3x7aj",
  "key12": "34vm2d76ymGNVHpKBRN4C7A4CpDGKcqHLCJmQznBr7C3mrRcpCpvmgrc8R3H9DZZo75KTKUvN4oJTmPF37tMFJZb",
  "key13": "492xaypQnHXQsVTC6g3RNQ2mpVmzV9rMAKuctngZ8TCyZHSsd7tQ7nj7jSDr8Q8zejPLKqhMmeBhxPyBika4gaCw",
  "key14": "P7VxdBa95bAvxbPfESu1WpuMkWCqWqJYstuUetbjELgaggvy6bGEFbPGDrnhrgLgvTNj2BeqGsC68Ypu4vbgimt",
  "key15": "5ztGzMVF36U6FSF9xnHNnexA7a1fdpPtj4z1TkU2p6vVsGFo1DYiw3mUoEdqBTEh6ftqaP3a8jpqizy76jRLBcMP",
  "key16": "3xayRWaWiFMfL8FZ4uWrpzboJpwd59yUhHcvrqSwHqAN2xmWx2qdXfsjbHtTTChiSm372Rd1Q9n9Skbhhh3vPTSF",
  "key17": "3YGsM66pNE1V8J8BnCoSEp8kg3JkiXGVqzS5XaNcxquQQJFY5SUwSUcxWbuqb4W7vy95LqWUFdvXAtfvh5M6QpWj",
  "key18": "3EUuojvJjnVAU76vQTbKeCpXT625aQuR7gYNfWiMKw9qsQN825bCdWFed2XJ9nimERBX2oQ2Z1jXG3VaKY5NhcVF",
  "key19": "5KyCaUdfsvDq4TCZ2qK6gC5eckYwTNHT5PNSbeJ6wGwuGAUbrGzvF8jDyqHEXnhcZZuU6ZpLhfpQAHDYpnwRHUh2",
  "key20": "2ekwqXxQNn5AL347XPNjAskxYWTt3z2K4BYAkx3Gmc3VW48vCFhJZdcen4WTVNP8sFfNxQa74L53EzFwQHyn1E3",
  "key21": "3cF3BDU5iouUiEEsMyh4ghWMtKrUVufo5iNnZnFPZmjPtofxs1JTBg48rMq6QMJfG7xuHXy6vLt2jrZQWqCobHeY",
  "key22": "5kGA7nhTn71kdx8juvbwnwLQEW8yZT4TLiF9rAy3qvMzsY1oxuet1MDrHgeuJVsJi3kkQKZZmMD7QJinfobx5M78",
  "key23": "4tq4WLGkW93Fi8FahNTFMSwuUGMsiyoqEEB6dexqjDnKNTqbySbyMmBmtwxDeX7bDAe2oMXFiRyTosArcMYZcMm6",
  "key24": "suFQAQFGV8vGeifxiPBCY9oUU9nrAWnqfbPZoGhTY15DdRPKeSLyLcQJTaqqB1PSZMqwPyVfT7MJgsnmHe7mJAU",
  "key25": "8o7AdJUyJS5iLEnfz9zefCUxsepwtSxkMYAJjbeYEKtx883nwEgdCJAc1ohsXzv2qb1tnVHP2bJgQhpDEUVmwh2",
  "key26": "42a7wJrtAREuPqDQCcpgeSGMYCByXLtXk3ScFBT4c3tVVC4WBtqPDsGhJ66CitLspybz45Jt7Jo3hi3r1j4iQa5D"
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
