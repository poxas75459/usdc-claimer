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
    "3wQsKm5RqYomNzqv2ZRzcEZuLbUECKSCe1YUcuMkKr434CFxcrr5KR7SyVCLK9NBHCp413gyshk71rp2vPbutfCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cAHuPm3LzVzxiDfUMoGvjgrLTmHY3bkonaRD2HcpA7dLnaa3YeNiamonPMvfQUrmxpYoLwWa8BgMPUuanZWvp6M",
  "key1": "2RjVB9m2BGRNWgyTd5CV8fbE9L7pJmLk7tpieTH4rJ7hWwJWGyfUvhq8UQPiVj166x6GThFZEbwdJPjo6CbiNrLr",
  "key2": "2mtmJbBAZFp4C46nPJRn5HpgECsrw8UGsUsLCSeLYPF23kvuBtRk9LTkYuvc2q88XkFgLJrhvWfZ2sobqtskkJfn",
  "key3": "3bW4ggpkeAdkXnWYaBrbFaJRmX1bfZE2x4Exjxs5KQ2c8Ucb1pETQwZzdWmNCQrvMHV3dyZzi3MoD7ehqv5JTHha",
  "key4": "2hh2uzMrhTL4X1hZY5sGsE1hg2JiVnu2DBtppd6Fg72kGpk94KvCjBLG3PdaxQ6mtRhfdme13DUNekfhD7Rdu42B",
  "key5": "4ez3WxfyQG84wDhtjTwtDYkL9tqg6B6BZfiqsnJhEUdzZRhSt8MMKnjDkVDTfqpuFVJG56PTsWxMPNuge7ucDn7W",
  "key6": "2fWAjUPh2RcSAercqzKvQLKEjbgLng2kuUsnLZyyRUKFxHGUp6JpejpqwUCKFBJKSZAK1JFr1nGLEZLGZiVfcwXr",
  "key7": "3kKRhFRjGvZJuGDdEN15xABJU4N3o4ApWrsUBsRU8saMasnnWLjK9KD4VdKqbWJGkUpc8hgJJd2mytMYLEJe7YPg",
  "key8": "n5zaa5jWTbMjnaGHvTA8HC1VXRk1c8vNLGVyn4N3gRNpyFd6MATS1BH7vMkxe8hYvHeuJb4bvW4oFUJKVzpNinv",
  "key9": "4Gd6qs3HWJvcAD9dkmNmckCCvWJtHSgiQ3sfkukognUXpNpZyGNq5FuT7fN3YsTizK7QV4d4DJyALzx4KG5E8Qbs",
  "key10": "3n6s1XJ7ds9KyHL4WVcG2ng4XXEavbXfz9WET4V3aG3i2xkxWJyXbjW7JbdKicpibPjVTGYPwodgNJqjsxRKMh9B",
  "key11": "4beVhWgieUdUfzfRRKpF6o5z8w7VA2LCJH4xj8eWPnN6WNpzSeZ71H5kV6oebVqfXef1vEpSpbeYUNfiRn2YniVP",
  "key12": "3uKZfvKXi4nPcPcPZtiqF8gTYmBGuTAJqZTc8LuKwTVb4Zj4gwVMSYbHfEdt5UoeBwharpUdXQSMhUegdU4pVfp6",
  "key13": "3kCCpFn9vf7EJyMn82VCzn4bvLBPd739KkXT1hGg3qkKd2hMU4FHaEGpRiSqv9mkircUxNZa3DwuKsYzChwRuLoG",
  "key14": "2tHCRvyjdiba1p81kGVvTAo2d3UvypJMherzqF2CmRWkBRazZg5RHr1hSJ7cTXn3yVs8qoGsMe3eCxS5xxTXAx4T",
  "key15": "3dzMrhUJVPE2Kc7oNibQCpxaw4FjLXHD5SfJzdWw8kJNa7B1mmwbPhxZqvkgfHWvxABwyd6vHASfvgqUz2ZeArJE",
  "key16": "4okgrkVLU4StQWQBMkP5zhdAHnuF8tF4Vuk2hYRKwzPjqukeNVtuUDrCrdyykKfK73DjKrV6MZmiycvX8xw7jEKK",
  "key17": "23LmQ7haRiPtqzzeyFvcCoysDUcxsyUCGeqAWy4ZWjCzsPkRwBvPJyU5NFyHZfAxSracU4Tprh1KWbmfpwAW4Kbt",
  "key18": "5NH85xFkzARQWCXDr7oMqKkCPzvmYKMnVwoaGNoLmnixmYR2dCJh8HRZg7Aq8PmMQyQEstqAsmP9RYcuuEshRNtV",
  "key19": "633tLe33CNJDv4XGBs1Bqj2tTkuLpNaKn2i2XjbJNQnjs5sFnkJBhfMzshQwFCSFwBzo7At8xYfajiveEoWmJTwq",
  "key20": "5YQEoCRiCz4dZnUob6aTsQeE6Cgtf3AzjxwsT4CSG2RRrkHp7AwKdgdAjBvbF2qM4mQy8H5ZdteE3BPTjhe9TWXh",
  "key21": "4EYRYvHFMea8cuEEgce2kLCH8sRe8N7hCxAkgkT3LhVgG1pw66jzpaakd5PtspEfU5gLN5dyxEf6F46PE5iU7Kj7",
  "key22": "3PtiXVcNLrPPzBbTmQT3iYrGz7K3yQ7hgxmQKVk3gNmW1LLbCVKtJPcVXwXVTvFkaQVsAUwCDbCpzWX4tRjTPnQN",
  "key23": "59VVnxyeLdf75K24L3U8FBMajG4px7rsL8Gaf6vRjCEY8TewevgTiFCsAuaejBiDPVtiAdTfvQ5XeemYCfR4QGne",
  "key24": "4u6pum5UkFFR3mS2mEwxVRHS6T3uShhddt4wSPZ1aXfKeFGeZxSLZLAURDAh6okU9QCNPvMDfXhhqmSM5PBqrdfX",
  "key25": "GtoLjKWweASWEBUZnW5m4GXRw5UupHB7u7FoSH3hgH85f2b87ovDkMuC7YY3Ypjy9p7bMNSgpPfWDp9bPunQDL6",
  "key26": "1Siss8W7u98aDUrNNkXnyXZpkqqjA2pyBhmPsdXehusrqs7JduU2AbS52nVHBJ1tUfjVSAAD33mBxDN9AH9AASF",
  "key27": "46BF2ScJoznZ9UKvawVNmdD33e5eB7KFitpCfNJZymFTzgLwPeQ3SgwzM5NHkduWfM9qicqGwf5HBvskdYGjciBV",
  "key28": "2MZ51T6djqn2hnR33FVw2xG3w6u5HiJvTJ6155LvWHGPQRdKDZN9de3GFiB9Jacp7RNenSG9vDdULrRZVFf4FgCA",
  "key29": "3L6GfbNKeR8La1U2Zu4etLBc5fCEn4rMRnSBNdYKKHwjCAyTRmxyNW5vppACsHxtozD7dC6FS3YnQzihJyLLxzpH",
  "key30": "5ie6LvNyre5x7Mz6xYQVzseqBvxesrkmqgya6AdJJSm3pQcivKiATvQ5UYShU9QqvgRgsdiawSfXfV9NqiaVecoN",
  "key31": "r6qfqBNokzcNC12MWuWMPKqDLRogYeq9coFcVkFKgTtPRwkEW2WjszLMKQGsfCmaEHXQ3JUf7UEPE1EPnAeSwmo",
  "key32": "5yQ7CibRR2jmgyAESRZhrUducaSJGos366kQM2BydMJ4qt5EnwqL9rRv9q2VwgAHdws7Y1S2A7Ky3UznqHB2ZAhS",
  "key33": "2CW3QJjBmidkxZNqibADusKtM7Koe7Hq8JV1H4fC53m4uqb4V57CYaj5qNCL8gofW65HFRnRzonQBFDEAUrFv56b",
  "key34": "5LpEujHKE77N5ZMGegrv1o7M42Q2vHncCffHtqHHt3V67GvJe1wwX4qkeBqf3UhGrNZj8BYrYfcJtUMbGeH9MEbx",
  "key35": "3hJcR63p7HkUvf4YhW5DnS6x4wyioU4CpKqW4uXCRZfNs6rV8h2a6YFS6KzuTuQKejNKwdvHAGn9Aux2eQt7TM45",
  "key36": "41f1AejbxRizbRezu4q8jf1ci1rDtXRp8nBAZEXyhGEtaHmaN8SraAhs4Pk8RkXkeA2o3KRHjoGTZYX5BD7hWWYp",
  "key37": "4ygGVyeoyV4mUCj193kgihX63xN8h8ePXjcJtQFHXEB8kw5WdzGcYXaVyRuA39U4g8ruRNN6n3CeksgiugSpmUjC",
  "key38": "UxYj7c2PRaAPgrvDmnSaQdMmNeSV1VNuroqDyrauBrvEB59w7JwTpAuznFfTq1Zs8mpSGSkcgtqM7xP5D4KXB5B",
  "key39": "4Rw1YsCHH3eyLB8RtqjMhU6Xkg2y4RxNyo7cgapLefQ1QQtxSDE9UYsfuZTdPzC5LJnFs8LGNdce4y3xrCkNvH6H",
  "key40": "2ZKYWZt3gsDmXzj6UNRbazuKxeiTA5QF7mBM2PEi3nC5Bsbenv2Y3xXWYvmFQRpFKuJi3jCVCkLjXgBV7H5tStL5",
  "key41": "DSpVexWFLYybMTbnpzMYSYRGTXJAgsCac9JGC1GkcnX9uJYMHMbykXtd46bdPizfabc2jM9e2qoWtmnTgKNRmgL",
  "key42": "678d9KJ8uVeAesxbLE3pBQ5CRt9BtvfkKZq81MSq7enLhSyigFrYsznZG2VA6hYKEoGyqqxw9qd9ugL5BcMxbRgp",
  "key43": "4MKLsbXZLtANNc4RVgpeVANkvdvrBPVD6u3JX49z9r3dbbdcMdCWcuXQbdfYrFA4DmZb8FvK56iPGzBo5UqGM2z9",
  "key44": "5XEXn9mg9WjjNzarMoxaD2kYoAmc2549Vh4X9yauV1LRcMQCBNbbHNgZY2nxuEUPuueNSDs1ENmW1npeeUQuFSCq",
  "key45": "5fGU6hAgdT32Evx28igdeRebKDVA4QiAwe82Qy9xU7VDcUjeU4Fmfdct3cy5aB8XHB5SRXU6WgAwTB8GJKBDUx8M"
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
