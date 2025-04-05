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
    "61UgxWupiEUJ9aumnVSFNEkmcr2QBJmgUcWme1H7FiQVM4uMiMShZAgVpBhqqWN6mteLSaZ3DX5uJPKDwmswmVsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZPfHe6eHdkqoGFpc7PEgymAjjWyeCf66hpemNbLCRTeNtWf9bMrrRyV7uhpuTCMGsopEHLfm4h4JWmXayLcqm7",
  "key1": "2ZiuWdgzZs2Kd6NpJWykzLLfdMtUFatUKmPJFRvCRKz9K8M84HrPk3sDCa6BqraDkLZwUFVzYjLarJGB8bmu1A4B",
  "key2": "63xXtDv3CiFiVRyZEZ2TVVYUt6Zdseu1hB22pVttxYTiBzQ4v1KoWwRbadQ31oaJGL2xqY6rztHM5iaMNoHofSHa",
  "key3": "4UT9cY15APRJHpk6rwQeAkXz4mJDtkHyBasifoHK69X3p2ZEvnXV1YSA27HR6BvLj8zqJgwsuvt1PEW8ckumykFs",
  "key4": "3syMAFDmhtmzuMuwHtLU6LUgfzpHfhNYJfyUgdYaasFPRqu5NWLbgvtBrcUziL841grjPAfKrwtACALA8hNtLw5W",
  "key5": "4WRvwCQCpCe2mCCxm9zNwejsCvsN6NAQLTkKYzeg5Zd5NrB5Qhxr4tB6DhTLNQ756nC1ycacdawazzPtanhZmtQA",
  "key6": "5HyRdyhy1fx3BEe9yMhVDYg2rswaTwUHLvG2GnFwv4yhMXBy9h4ZxY16XDC7MqeAuFMtM77VdtoYXBg73JQSwXom",
  "key7": "23JfLrDY1ZE8yVcWB6DVaoTQbFVqH4H5KXaoxMR91EJ8WT9ovbTgTwPcbvWNnBcV1kMC7GytufCvQApbd5ruKnBD",
  "key8": "5rx9RoyCBcHaEivevsaRSVyMvh6aJSxbxkVp9kei5vYSHqvmCVJBfuB9KJkgeLk7pzgXkf9KjRzeVwWKTbK5Ms2d",
  "key9": "5KmHXGbv81qnErZZfBi9afkHA7K5YyjJ9rCC9BwQMUCNRzsJQryLqbDuz4FoAyGbXXwxpwBq5QFsoVLVeQN3Myfu",
  "key10": "4EQvcnSRHKizMavd98Sk3iafNrbqhkJJfzVvzNXe1rhNmSYFtP1k2DY5imCLTJSJcMEuwdxTyF1vdM2pzwMLhGmx",
  "key11": "66utsQNkYHXjcN8vfSJzW3jv49XL5WmwvA53Nf6yFN3CCnR5wjPcMLCDUDXHNzT5StkLSdajgDrvwmhDPqcBPCSn",
  "key12": "56FVDCVjnnpEpCEvCW9QKjQURULufhVGMtdkeBu9nEh7Cmf144XkP7dPum5PZdyjgrxXxLTwE4HaiNxsXNoLLy7b",
  "key13": "2nUN5aZzKpbAajgnuj46QwpoxfR3wfpfjcuJ3zTSKcnq5PiqDpua2nxxVrAZheRyKtJw18DKAhrZnx46Qc2n6qgt",
  "key14": "3EfdWHvBhDv1VG5oU3KN5MksyHQ3PDibrirkXZM26nVe77Hyb5hELqACS2kYA8zwaphBEoRzja5ZqqWokB4kpX2n",
  "key15": "y5jkTynZV6QN6K5Ha5vBKa134GxKhnC76tpS1cZCD5sP6rqjqqgZGSPVipB1NJcWEVckr4nw4iJbrnU7gm2vh8S",
  "key16": "2j4WBaQcAWQA799zPX5y3T8pzSEHCxKbSMSQBP5dUw2d56414DoKnFcTsWMEXJwyETSxTa7w2DHsQE5ipHJ8qMAS",
  "key17": "Ygeg3XJmhsKL81VG993Mfxv6AoBcWshKawR5h8duYnmg5Z16rT85Yt9tkv21cEmwHUqx3tz97PFPxdXTf2ioYKP",
  "key18": "3mb1DmSeyjBJZZquxAUQB2XSu4Zx3vE1BRc6yAA5bFtSkRmXwGSYCwRxHBbVHUKaweU4eR6jkrgBKE53AqHhQ1A3",
  "key19": "My1JpTVXLPrHmBpm7kQ57HecMHoFXooz5EFTuFyZSTANrc8EtwYFwSkuH52hyqEVJ3E5StqSVkK3Pq7sdj8U4yJ",
  "key20": "3EgkCNrwoq6PcXjCbAiH2t5yc5C9Aw9p3FTxBQxfiTTCYKUMmQbqMrHXz8t5kYppp3P9SDEobdum22aNazmyGkZb",
  "key21": "5LR4bzG5iEL7BpQTPNHGBrdWx5DeT1EqPVYG2fbgATKhwJsgohudquooHkLuG5Ywa8fTXAwhcdTFN9KaeypFoBfU",
  "key22": "3zbyNdUUsun2vwmRMfUkz6otVF13DSr4FYg4x2J54cJo15Fa3gvWQWC8Gmq8WThkGrGBWUMwNpiEUASnMRhDxqd5",
  "key23": "24UfCmzBWhsaCSQPakxpmngvG84hUAHioeBE1KWFHNfjWRVtBk7yjJkH1ZhNQjkeWaT54PEgkGb8f4XPyvgLufVi",
  "key24": "3c7pSrh7i48NnLeK3BSXLoMdRnNNJKr73DV2afWZ8fv2NqvBmvXvH9d97o89jFcB11iUu2uS6ve9giDKjx9afjWH",
  "key25": "6i6eRpocu3apbbudof8i2TgZmBLM1EyAe22Tj4r35A5sJ9tHgt6EFzZrSUaN8mEhJWenNLM4bcKJoi9ZYFu5rNW",
  "key26": "3anNNgneRXKq8aKhosjWQ6M3HXTYL4ZHrHPuvdPAje1zRkdkopvgnY6pEaoxvtviFLGcJjvnqVQkEdohY9hc7XGQ",
  "key27": "4bAcFhqPmkwZGS26Y3LNFh8gCaQf74hMaSZKs4EghZQfjPzLcgKEnwD7FZhBPtLy58neP3Usibi2WpdAZTJpqH6b",
  "key28": "4QtZppyydg9rDnEK1MZ9dBHeN2BsR7EkYgHBWHyKYWu8dBPNDn7dbLsYkJZ51QLj2RMSX5QWGsfiwotor44Nym6G",
  "key29": "3CATML5FaiYrdUzjniwm45QK7cms4Vp6AMuuw1c2dbJEEwaQLuJRxDfPyjmXcNzRe63EMhGruSANsMWVu9PHcc1F",
  "key30": "4tGYUyTZG8ha6ofAYSaU6Sa2rjt2QF9ymkCkBSFcbJGrtoUC6b75WMnxe9pB4CjSv3ytRc9fvYFxo4jzk7usiHs2",
  "key31": "5iVq8NZY8MdLKi7k6kixdPA6ktR3Dbr2P3H161GzgFZY2sLPcgBwNwfDaJ86sQhnN7JHLZgjgGJC3poCwbfzGAE5",
  "key32": "4KEgXRGmN8agjzK3TFVXkqMdaUKuPzA9chfSJSnZFW94GduJdswBjSa4qisreo7RGzUxthfsKpDnDCePeA48ax8V",
  "key33": "44HMcejyQ2PUNQp26pLThEvgYENhCjXB6MWgi7hUtXLmnVUMx3DzvJkQAFPRjzePvK3WgZyioFsfkrvn5tVHbMSb",
  "key34": "2NbrABMiAYDVyZxdn6UkFcDNopA3PPSUsZgFkdCrFSqxLV9bzpm1GJHmq2T9JUMGaqUgfgX4hYv6qZgveYNXbq6P",
  "key35": "57LL3TN61DGDX88cHvQPEQ9Kit9ChFqMVR235yEN9QNEYni4BKAb9nW4nNkyG1AKeFxYAxyhrj7mYxn12zaMfEZU",
  "key36": "5hZJwhYREybeVrL3Wff2KTCTgQ2mXzvpEHkykQvyXLaopmHxn7UNeJTyGYVde9A32jr5f8mR2W7Xiam1E1YYcAW3"
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
