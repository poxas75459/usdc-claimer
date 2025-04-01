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
    "4DCsBnzLz2MTRiDN9uV5J69UZJdW6uXxfT7hJypEY6CSkU4Y6N3Lh3mf5b4RihqL356YRm6ZiLEw54GMEPzTSNgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsR9Ef5JyzPb7xr3sT6zagTR4ZGZ4gqWPopmXDh8vJniujcgesyVRPbQgWCHt1W9KxvNKV3gp4XekmqgxNYkofE",
  "key1": "3Di6oY3iXjuKukWKVSm3WPnE8L4DUsE9wWaysgMctqayDxCW7Cte9tSQAPTwzeeKxMBhXXnZopojYSJiq5xwNGwA",
  "key2": "2AtubKhCvsPUWEFDkMVwPHqqHGuD7qwtQMCmwg2RE8ZJr1YuvT4d4nRatb21WoSMz7A7vhvCk842UV6YvFp9UvPV",
  "key3": "3tKPF87oKWKWKfQtRkwznRJupkZL5Ltt7549dwxJZaHRkmoeZik54uHcCqHmDy6HoNTrEbtzUAiHnhaQW3gp7EGk",
  "key4": "5ZsXAdZvLwhw8wCDs7bnPJSFJF6VLMFoL6YtSgWZUfGpGVxbKkn3i77HSfupFQ6YPY1sFeySNwMPBibr65GVdvCK",
  "key5": "3pWpTQtGc5yfXcMXaiUSovWTw7UtYFLDMqEKqbMEPK3FaYiETFcM8hbugF5koMWNzq14mdHviH5QKUGeDu3mvW65",
  "key6": "kYmyaDJNg1okn2dE4RexjWHwe2B4x5ruWABZwrmUFNVhaRLQ5fgMWtjv3mrE9RtPZy9EpuD9VVfus3VGWp8184i",
  "key7": "2Z5Fy7nyewBEVggDPAUno4wHD9qggZse2PhNB8CqyNVGhevYbjAWW3JxK5ZUUomF92fAf7dENBg8TRY8TbHgyDWE",
  "key8": "4yCnLaYmNiUFwHpkSQ9EDXi2MRcKeviz9YyNQubrqsB2EHuvvPrDGkvNu1rWGZ5bTiQABJZCY5im8frq3ohGLPEa",
  "key9": "2khoHajZq73HsSo5vPNAEgLTFCzPDPoSMG8YWHzG8sBYNcuRh6QiMNmxZ5nYwCeoEM7NHDrDWtftyfKnNtSnzYh6",
  "key10": "3YryeSL1vP6GwsLYi2HgkfTa6FY1HFH2DopRemQ54KdcRUYHaSTPpoFS8y7ohtrmmxoacy4rj76NfbvoiGh849Vh",
  "key11": "3okjkzLrZvoAV7tbzK1oDJJyvaMPeBzGPi12S9PcKu6kj5ryBDN9siWUDiG4U77XTneemUEAT7TyxmuV49ckonHT",
  "key12": "tAeyxnToQut4qAemz3aTNqpxUiC6DZyw6JbDsBNtzKrDMG3MtLB3aV1LbwGJmn22SxkVc6f1M5bKqj49x94ui7u",
  "key13": "k9KELWSWJc885hXbnug4e9HzzARRcBfeiJ642mW7LFmyDgH7PyBETi6nKJ58LePwdjTsnnjh7ZQ2xBCF3aefSqC",
  "key14": "2LGMjBzURXEPTKCyVQcEE3Jf1j6sGW6BxrerJ4bNrkmcaoyCozvhUWwCapjthNEgDWGNkbKnzixHfeuCqe8y8rMS",
  "key15": "77iTgwzYdgABqseJSrDGUpiJt2kV6psScEPBwmfwo8yopbLrRioreVUxgWf1M59mShnTBu77MMPxB8B4VG2W4QP",
  "key16": "22QawbL3d4Yp4a37TPj1vQucYbh7zgBPWeZVBLAMPDXo1KcVkue9yTNHoAkBWbn5qHh4BdAYdTxrXvJDsr2ga6nP",
  "key17": "5CfVUJyfAnbDSyf7fmvorjsWa37P9fX6QE7f1aw1WKb9Bumv9JXn4LF8W27DqkfNWaTurWHQpkYQE3uNJEbCmAYu",
  "key18": "2dqWCAMq7vKhPaZvrzCa8oSNA8LZ6EeBrvhXF5y41xi9WP6xGHGK2KLaohtXLjKLB6tTmGcnfdM8VZrew4xs6aga",
  "key19": "2HNXzwEBvZtRMX2wJooVWWnU2nnYWVYvb6woCs8N8TY2db7xzuyosQy1E76VwpzgsLk8RPX5TVxMbkPhPBePRKxT",
  "key20": "ggfGNYXaxbT9qUmBLpAikwNh1C7yCysuQQkeub1AEyztz4a3QBnPMpZAtDUY71qQJqBgCtTrGGB6itkWyaKpay5",
  "key21": "4qSMEa7LG7mdafagr9YL1tB5s3VP5ndscwsmMC4aSFNqYMG3heGz1kuJhUrA1AwJTWWJKy4aFd7RtdR7CaJEQaK4",
  "key22": "2X5q1i73SB8c88D6vHZ9ACqCWZJAf4fE2C84KeTcwbw11yDssmGvTuZhJTDWuhbNWeLVSVBHBnB9BFMUFni4j72x",
  "key23": "3J7taRthcmfii4K2ZgH9NdP42MAtz3o6AErFYXuL838kQL3JwbTQ4Q8qm6owkp4Zm19m2F7cebGifcJHPe2abExz",
  "key24": "zDAk9tLtZc6kAEq18TMXTWGfrYcoeTu8h72go9xrLHxe6QpPh7PGn96mjEdU78Qr1e9ptV2xomtWeBZHKXYRBLh",
  "key25": "5ne4Akoqi6VZFLTyByRHmxSXwDMUF2A1KV4D8h6fhyw4a9tg1aovYTxMt4yvNeSJzHMuM9ucUiuexoYK9UXpLHBu",
  "key26": "ceDHRDBR91uzKgPzD4xdHcHEUW22BHw5dwe5ckCxVPCpfkzjdtezUoNDq6zAZNae4ShMLa9HF5XnggBK1a2N6wo",
  "key27": "4UQcaqjbyMbyzRhurqPdoKRSJDq4dJ95rxDntoQkERdS1aNEFaHN5cLCfVMMLyZhfmsUzkVLXRScNpUqn9hBs8iF",
  "key28": "eJVvWEUN42HraWSGXYsJidiPsVnyHNcLwhg8RLmrd4JEBDTd4csmkbyzQzBei3oz3xqycwxENqfwEnCYm4BqUW9",
  "key29": "5Vn1FSNL2mn6r2MyP9oeZX29VrdQTjUKbCcJvDuywPBQU3chGLfDVpFC372po7PBiepFUCzyiTWsHnH7t7uANXVk",
  "key30": "qarBtaNTJCemkg5aSvfw1knpb1wsis3aqjHTvqES3FiSS3s5kQUXnCU9B9qRSoAuAoWECBE49MpkuHQyCk24AqR",
  "key31": "5SHzxHkcb6cEjwumwgagKRp5VfawmdnHqfL4V5dn8S6w7XV4LPW3r9yToQ7aJW4ED8an1YyUbJNfpqTCFkGBAzKp",
  "key32": "22nyxTuhfX4n3BLbezqVgGR8PqRW1qMFDR3bpQaqjmhA3QfBVCfUfXGoki9WK1UqnjTYwwoxmoE753GgBXM7oNdf",
  "key33": "5v6xket2XYL94q2TWpa2tFS5iB2viqy3dSjTFZw1DvmZgys8kagPHjzeUProP18YEvpXpUdjWFo3fGr2GvUJRZY",
  "key34": "vY4VQFJ9oeXbHig1bkZfsSTRaRhbtCn3HGUhLtzKwxFKJR55xSD6HTYnxePzK8d2vWKscWwtzwaVoicgdDGdLnG",
  "key35": "2DWDQuNzkLPzPbDGpjwQZURZxXAaZP8ZgakMaY9YbjPeDSkGf4UuSi1QniBAexsNcNpqTJh4V4KtdWG6cVfdjSne"
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
