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
    "YoR6ZMKEuv6XarB4WWjucWKzhgz7UkXC3cw7G1rsZz8RGTb3mQPLosPYcgdr16YRM2DZpYHLGybUcc2dcCx5Cyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RpHBDkPBeb9YgcKsDaDgZFaSsdruPojKFTL8UZ1WkMbrY9GzrPCMNGuwC8CKveadpcZH6xjoA4RTBVAqnFFzTF",
  "key1": "2EcCiTgxSqqCB3UxXz9Awekvo7sDGfHWhjE2Gn2ncCBUUKCGGhiHRXKLohifTg2bwrcZFMLMk1T6g1GkJBhxXmY5",
  "key2": "82fjUHUZJnbaNjyN8kJFJdrhZQwVTWfTmdrRYrRoQjg8UfA1tarQ1EBC7w2PuUeetLhpDqkgFXPvwv69x6zup6U",
  "key3": "43RtKgJSpwYGXJDx4RUNjtoWbCAHLpDyBPN8bxC9LrAoHtQ4VExUA2f3DjLH6ByCE18kB3dgdTki61PgYuvEUwWq",
  "key4": "4tUNi4nConBjfQ858XqyZUoPKPtgTxbpCdEoThgrg5S38sNYE26BbjDmYnckgdBYoABsUdsaH9qso5kMHmFMWPAA",
  "key5": "fjbxuTYxuR6jZkUDbwvEkBh5jAEZFFdxMAPNcaAuGhfPm2FjR5PeNrjLV9SaKKCqUao7AiLRVRHm2naeA1iEChE",
  "key6": "5ffyzSDmqS1VRgyFA88q4UXMDGNUV3C5LoUZDiM5e9yRNoCbWfVMhb8hCxKkruqy53ViuZe4zXh4Cf4jgEhh9ZEK",
  "key7": "5ScQU4udjAueozeNeqGbJR3hBxTXcYYaEtAZivkXKAb6gBgSrrwPv272jaG21qQnadJz2eEqqsSygJUfPhAfnZ7K",
  "key8": "2Dvw7NM7bLVzFPu3jQ42m7WRW9ZBomoFVLy2QdFhr6AzjzSD1baGDpUZY1yL5miGPuturYaShSStwNFoqgYvaZ8t",
  "key9": "2Aqtx6Uffbs1jS512MZmYiZF7nGAmi5u8962QC2QmnN6ebTV3eEgFSetQmdaEnQXMFsNPvN9smSWtT97JY3FvqKV",
  "key10": "3u9wyWfb2yWSaXL2JHqvwkawbrngyEGcczq31y3tzuAnQeCL8SaJbpVySn8BidYHgchJJZEAbh6bTDPmmjg3PvTp",
  "key11": "2rjw39YrAeCLjBib84ADd7gQbAcRAgbh1Z7WynSYA9FHi3YkRzmxwRa7AYqpdGPxWT1FgvqYnjRGKpVGk6vgyj6f",
  "key12": "4pp8cq2PCuDEnGV8FWtdWjpztQ5HvF5Vyc51RuLHvYQAAWiYSeecGSY5CRRYJgWdLi6sTmZHM2Uk9Zcpa6FLdF6X",
  "key13": "2G55vxD6oqmVtK6P1oLyqjkg4H7HaEirbZk5a8yicWgwuRDx6fhr4vZZpEpA7yY6wFhfpuoRcg1EnTRVxucCno4C",
  "key14": "rV8vBry1tVzvQpYYCph8hcCdTnqpmEQZhnsrkLx4YnK6B93K48KHgRhKntFf3ejeYB9Uz8PTgM3CsrD1K2JdQmS",
  "key15": "2bGjSwEybnZHnrKMgZHz9ZKyy4SFna5zdtFzz9Dc9Yy82vqpNdskQE893XK4f9YuYv92Nj2sVYL8QPt719mrD2XT",
  "key16": "4HP93JXFh7eRqi2m2VLbLUGWEhLF3jtvtYPPqwYDGz8SzYBDHEYeGvyw48WKmFFdcY3WZtQPF4GiAsFgtTyQakBF",
  "key17": "4LEcckYzhCnKqpmuZfdH4Ks21bkuTVPKX8c4CdwRcdGWvmkXh3DkwtY4bPZr3jz5jBvtxjvUbLcKpKH7hcSCnvww",
  "key18": "5CBAawMac5XXxA4WwWbDTAGA4oV6x6kLvyWHYi2x9NDQhiagyxf7Vm7WuAp26XVMuWQe1FDMKFciVCdLWqbpWyCQ",
  "key19": "3TMCvfuPDJyVUKL2sLe8C2AeNhQYTYtRVqB9yg331F8q8eFM5D59wvbMDzd2jT5vwtujWagKMfxA6WC1hkL3QkaA",
  "key20": "5ukvLnF6nRcoW3nw7UwmCWZDxQo28YVtYChozzkbrA5x8PQpgVQbH1XBrTGmCKja4v3NCu5BHTaXdeDNSQu2DR5B",
  "key21": "3jJD2kRMuBDowxKMppzkTNtb28h3uVbftWHj7pN2QbhQgATZ2GvB2uSt8Gr44PjwC3Re7V1kpHqXpnwBmWBF9aLc",
  "key22": "2ZEWfr4CSXtBMimUZfxTHKKeKpmU1pceP8kpwFun2URiFQCG3BoqJFA6dxUZp67jZ4QVJ6UjwWXzmbrm7cPFUcba",
  "key23": "4LWxUZPAr5uX4nAMaCeDSWNcD2dn4nFUT8mob6Tyc2sM7SaPLY3SJZLTXn6ACQpviMFuoRQcWHwnTDd4vZfmi3Gm",
  "key24": "327MbdS6dQTVQJCwTNcEh4AN8Q9JepRnqDPLDGimri6TmFFA39dtpxd5SRxoQWLPfXp2kUWAi9v2c9MSVtRNnTLp",
  "key25": "2ZEGQQCjomjiBZLyJFqadwDnwFQtxvpSeXQuGV6ipdpJpe47u3giVNv4hnVTNasepRQBiAB4aT4GbFTqsDzEjbrG",
  "key26": "3jsf6eXFYon2TK3KQZ1HKwutgVbmjpfU3LA7iJyYbxfuPHEeVyR5SZbytAsuMmtK84bkvchATHXSsPG1w9mxxsEY"
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
