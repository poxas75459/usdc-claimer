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
    "JGggU1uCdri9fbmoTStqCjSPvMhsBCLarupjUuENY1yqiMKTrZPZnriQtaVkSJqQ48XW46SEbktzzToqxeDj9VS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LjEmMrJKMbw6jqhj946aT6SUZ4ARy3QE42HsoutJEcCeH5G8fEFZtJN6tz6HnKeNjgXbh5QmDf7g64NFhEZffQj",
  "key1": "4jXHtE8CMxoHiFB37qENG4rS6A2LeWA7KUJ4RfsMhYkcYcxwHD7RTqYufJssZrQB5S16XCA1hN2jHMRb6KLus82s",
  "key2": "3DdeHtuDtqjJrZuBa7Nf846TXUwrbHagwTHZsDuSB7Rj7D1hn6521jMqppDELbnV3fSE6XcHFSAGYH6pHDqdeQ1N",
  "key3": "4M4hR84w5BA8mHDhBPcRCy4hEJwtm9BzBiWZhz1PjxhqzgwachF7MmTG9v5W6AobvpyvQGGsstmCRUCSsvphEFVi",
  "key4": "3KBD9f8zPhZmRaB7JCtdsqfnRikA4X4t8JCVXe1wQyKCX6BtiHb4CTgADUmcHTL9ncda23ZbCn5Ah1BiDzHePe47",
  "key5": "2BBLbtJdu9A6pjxE3htG1AT4YDEAn9PgwC9rkvBXFLQWnwzyNAvgbJxofWRWgHySeqtG1fE2ejChw4ac6NZHDk7T",
  "key6": "JmrTqo6dSNoPrFsuhQJCJj9NoEuCZ8U87TFydH9SDM76mPqTrrmzvVvaHiVZ831mx8LJNNX4fkuhQnDfJEHj7nv",
  "key7": "2YJEMiNUAYchpPvycJUqjoUSWssyuoVYVWTrdqLgyxAEcVijQ3arhfYi58ULJkT6Abp9iupWRytxwzR8cJV6y7pz",
  "key8": "5W23euk5RzNGx29gXyMLwLZXjBgPK255rzsb8S6gurq7RRYKkmeGzwy3QrZ24Fs6w7FnSLTQoKGRDsu58oeTRhib",
  "key9": "2MqEY79AndXKRud3abqNP6tokp8znoxnKXCF59SftQVYC51bxDoLkp8zSt7ry2qVJS9jHm5NgDhbo4S9KN7P3CaZ",
  "key10": "51SngHNigYyXcCdcmi5YCP8ZPvLnjDQLbgx8k7MHw8ZMxBkQtFpzGeXoCFvz9XyxecyevEmHdej1uF6XB85btX4X",
  "key11": "5XHdFTtyesC5eQDXpAc46HpwDo2KVRuwAPvBxnQ9NHgPUPbBj3UbYJBSNqLotr6qhrefFg7rBZcPhkajaxB5zqo1",
  "key12": "QfXCqQUfzjosdeu5mSVjQwxmf8peJqjxaPy8uuu73bEQ3pjCeGVGKp7eLN5wp4zRJqbq7djKh5AnCrRscS4Vdc9",
  "key13": "61kifjJmWQY3txfsjdSQTqw2C3dtQ4aA5VSmvFFGk7X75gPd9SCFipTyps9zhCVtSCVURVBhmFy2nEcdN9YGuiyb",
  "key14": "4y5DPcoT28taE5ZZdYhMhRMssnAUq9CY5n56a1MKZriSRYxj2ZvduDKyyKs8aCcwSVTjhggSbPybkm35wY9cU4Xm",
  "key15": "2bPsP8kVZ8Quy9m2mAkVtch6stvsV6LPNTtVupJjXpjWg6s7S48ciNNaSvXXCcKefkKuMMmCgU2umvEvVijxiiuG",
  "key16": "62K6mSzXQYUqBumgYqAySiW23y7twUAfVNdoNjMJFcMr7QNJ6ssfnHiPuQ8bgfosyVVju7auSQC3RGQ5af1iXHXY",
  "key17": "3EzcHgueHSELrHRR72JeJRcauhKzNxPJQnjHnVHH1bZihiqfs6snLTRJCb6PM3NDTWtB4osGT11zttk82U1jKMbx",
  "key18": "4YVaxohn9DgSqQXZwXx9jEvuRf8jb9DMhZv7UDG4iphkhDWVpKyxF54vTBGS5A4uysNPYZNEvCrAc8VZu9xXNTyh",
  "key19": "2mMURdrrdzzS4TYPMMXn7GFbEv5gM45AvBf5WrNKNqWwoTeMR4nMU1uBJtULkJpVgTWMzU1CzKBQFdK73K9zv9cs",
  "key20": "52p1oF525f87SSvqCPq18in8JT6vkfHSjm9ceeSYhY4mqnisWkYzpSmF9qxyJ6EPNoMWrNTnkCF1ACCHCxJkEQ65",
  "key21": "jGnmMyuyjm3ghJ6MfFjb8sPk33mZSdKxCMeE9SxbweJCR9H1pQaSdiP4dLjsHVrucG9sV8AWmZFJmzcP2eP2JSC",
  "key22": "2dRpmtNLFS1jRjEGdzRyQuPxeKWqfmKZocWiTjhDtrHe32FGQK6xhGgCydMVhfSosbcmXox32m4VX2VQ4wZkf3zB",
  "key23": "3VpbXn9dYXT3t988rgx4oKRHpMDNGkZwGVTBeYwdUbpQevhE3ny4ZBYiJ4bM9Vbehcx1M2UH3Mi3AQmC4JJB4sXT",
  "key24": "2HFDaUt6ZqVjNku6yr2V3nSF6WgqSULQhsxgA5NYwbVF1D9ynPqkL6s2jm9fCYNVJ2MuZGUf6zmGcg2Bxips341R",
  "key25": "4HeAJpkzYRyHy5jjdwdPZXiYfjcmbZTJcxBMDv2Adq7TEXuJ4NRxq6QaBp4Dwi1CZ7uA5ajm7xmEVoCmXoLyLKoZ",
  "key26": "huFfYGKputsi8SFTSZTUmYbRb85iWDvmsTLWXvh2d3pAwYZF3HTM2on6dtAh6k1DYTGsmpS6LqqQBdLrLmNC8L1",
  "key27": "5ghRKRUyZjftNrzCnMV6xR3rekxBQznHiMyFu9NKfpmzYCvwbyP4ujWsKsifPTHjAJBeq91JWArCYwmtQ4Bq2L9w",
  "key28": "5LkvipREmhrszcRNaGEEBUemE7iLV5ENu8RjqjSMpifEjBZByq2fsGww7FFvS8qdWv82JYCjqKe8S31nqS9zrKDT",
  "key29": "2DnzMQfxMYUthwQWeCQJB9PLUCxWnNSmpkMZcc6ULpjzPTRfnJQzdMehVSVBF4vSDGULxgeNWKxp6pTNbn5tGBQj",
  "key30": "5qsx7kqP6wqbctyFA1N89MnAonzcczXcUGubTW2s9LxThppiu5h2adHy3ZzWvCAdVqSzy7ewteNVz7RDkNdSJ6ze"
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
