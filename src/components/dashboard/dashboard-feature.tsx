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
    "2mX2oxUtGpVpTWW61nS4tr4J4WGkxE8gjeWPtfPk8sMFouKdCMN7FNtWwqmfMaM56wxEf3TStyznDmivQvLQ3pfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lvre9qMrgiJBaaHiUPPyXrAaUbubzZnb7EhbfiSXKCm5isMvqdA94YJwmNznYTtbdw2ebP71XRMSbPkHX1ZTZQu",
  "key1": "5FhzNJ6RimEiWqFod328eyE2SSLwJFeZKxZxkGGfKSUeZFpoQ9CzjefeXXAZ8oTdkRb5gEnWzh5H1uWZFzipJVJL",
  "key2": "5hLkCbz8jdo1EvcvCLYbRryMo1st9BA8hFu3sTgW6uuc28DUiyPJJ5M5dP1SPz1Tj14tVa2umwZjff98NSeLsJJs",
  "key3": "5nPCpCAU15u5YS9DWmuLJGgw6TryXT3D6rpYXTMW48Z5yRXdvtsckEqjB6FTBydbFCKB9KUBzLQnnrqMw5mJTyQt",
  "key4": "3cgd6on6QkfhbA8TXWZxKHmYHauxNTeWH7iHz55z7vSoEndhCeWt29PsAccx974i1Lw8y26C7Qh9tUHPbPcDEF6i",
  "key5": "GRgteMydQMW7b2rSwEss3jWDxgeiUPoJBkbWjYiWwp44a19f22JeSw1QfccUnvqThJEbzdkwVHZ4EtdUsc2sjEY",
  "key6": "EzKT7KMRCg865AGCRktvdiUFNzwmJ1u2gF3fXHRREkLgjiLHRSTYfferKm4T91sZQp7df7VYCBmf458MsbLr6AC",
  "key7": "3XC6LHQnnMXmcAYN1MWVR1U6N2tgQiBpFYoidkf6zxXG64yTYjPp4fAv9sMxvBouKg6azCRoQrQATtWyCmvfy8wX",
  "key8": "3gQwHEWWFKCxdA1ShC1CuqjcH3RbZDdE5iNyEZT6zqYAcbXybm5tDkkWu9iQdtPX6sTLpgHJNEr6Em8hTJkGZkkZ",
  "key9": "3QxjRtRp3vLuUQiomHE1wjQsU6Cy2E1mtbFn9rLsBLsEGbx5RKR2CwsvpxUMhTS2Mp3yHmKbSmczRKYH5VxmNXNU",
  "key10": "3zeYJ6bXfNtiKCAVyePfa1Lu5fqCQVQdDFwi2mztD3298uLCeXLyauQTcBqFTmT9A1eqcUB5t45qRndLYzY4BkKd",
  "key11": "5HRagUUYaaLHcXgsq2jxoQxKcbumo8A1XoDD4k7ksJawEjE8bEg4ySGD4m8225LC3BJGmQfAL6cLViSFmoaz1B6o",
  "key12": "4jrnERkk9Xe8fzi84mtorSMDkZYkgiZRoqDTYBVH3yojpJzVtiL1wgnv9VHWNsw1QCZmHZH8vQwhQjAXXNjLGGBh",
  "key13": "4b9RsA9YcSK5ihL9AWX4zrp1J8zxxqDEefkw5w8z3Kxg3JXWUqk4FJAPGyvy74DLQJizoAu87BwdBkiV8FrCjrf5",
  "key14": "54RQ1jindEM5BVpNCMamCcFwRLWz18m8rCZfhbu5fvTYWo3UBtYReoaZ96pBB9QCdji8LTmuBaWEDqhXeUvoneh7",
  "key15": "2ssWaVKZsD8Hn3xHs7ei2hqqsDTvmQDvk7pJKDzFUNnV9tzympTibEMS5GirK7JPXm8WZDNVkWzJytq6UTyNVcU9",
  "key16": "4y5uTBkY1wxos5zuRpNT8tN6Sd5BR6Y2SntQVcnwUHPAUAP4N9eUt9SLcMH3QjfPgJRHzLkH6Jf9XkJytecdFfJa",
  "key17": "2FGLHwjtBLvpQcje8ke4qNND78gmvPGxMLETiTtM3nazCvQdTvYmcg1CtHHhDLKtikCNeeGmK2mVYVEXZWSsoSzT",
  "key18": "1BVV281m3d67SRRpEPPizxakJ3ffkjQUHYbmHGm5HYHFzNT8F5HVTraUXrG5vxFGSE6LHk4S9mNNb9LjsSUiWr5",
  "key19": "4VCi1aN84SPy5nv8i5rxmEAe4LFvgvuMwHwjHaFSSsiV1nqZacNw5YMrUWUb6HbN6UFBpAc188k676AurooPb6pq",
  "key20": "F99nyW5ECg85vW5ddtxumDva6K5GAbmFAs52M3qwxJ3qBMihsoj711o99bFVzHPLaxGgstyerwWZAW8Z2qrRYp8",
  "key21": "5GqCVBxVqAh9MFBpqo1vxb3j2vmVArkbjV4mk8t5WKnhuotLYPHscxGMbpAJsZRGKoxGbg52nnH3a1qXtnKN3oBD",
  "key22": "4N6maH7XtmaQ6TSBXZSTudU4KLUWLaG843zXxsyjJGYQGGfvD6zKo6Lh4ZXEPpfYXj3hGFXtaa3V3gpUVykcqEcn",
  "key23": "4mveTE8LMyA6PFmeEU9L26MUZykc17PjrjQgbr6m625HGiTA1VZiHx3bYD81tBDJDL3u4hGnWY66pXU9VRsk6dWb",
  "key24": "5Y8sosW2FXR5Tfx91N4ncP4HE8KY4VGdteLfMW2mRXX7iubWSdKqRDCGXF6H8w2PdMutDuJFQK29yNYFGHeHJDS4",
  "key25": "2vQfHyJfVvotKvWPNg3yrZNFWP5fgtEuRJeG1MrVxcS8gZUqBFtjaPdFn5PZdy3WaEWdthUCmBKGJkWnhtMHmf29",
  "key26": "3Z2U6x84VchMa7iRwzfc13g8L9WyX2M4MNU3jd9SsXrnoTaETbGRvyGuMAmEdpwSQMDGQ99hnt3cB79yEBvcGZXN",
  "key27": "2gLBCM1WAUiNyL4QeyzaLJDKQuspafrDoD4R8mk9ihbL8KiSZrtG8DZaihWzpo4P2EHfMJKKuMF7HsGEcVHpPRUn",
  "key28": "4CFhqduT4Q1gouRshtHb8nP2uCiS74SJmSegzEjVBiqXYhw1WTigDTMjFdi1C29mHeTrNKKE24EkvSYSECmBGimT",
  "key29": "3Q4U41VHQvKFgnMEXFGK8n5UyVDDSYttDr2bGicZ5cQEDHJjXWvV8CcHCe5Y3UNvkeZG1jV7fYM853z5rErvcz9N",
  "key30": "4EFuLqrVBiKwhe8Legtv6qZqLSSpFzwAsEaLCmwyNTNXMWvKNbKk5SEBqSD5BXnvhYKA2yhiG4j362dQcKeDhkeE",
  "key31": "4dF9FaTYbc33rJgbt6LsiC2eaiiNpzXtzqomEHDYMCFoAZzh3Vx4GPqqLfP3NRQNCmsGuWdoDLFbc8Zei7M3Z9jt",
  "key32": "2CTeMmdHM55jbHk8HHxgKGg2Rc7veykWBxUMeCVn3nu19829512wCsTWRa42NEsDFYAEqwaPrzKgnMiq4GnwcFPa",
  "key33": "3bQqX3kSYPtrbFeqR9LQDPTvcxYqLL7ALtFa4dWxfDDLWgUKVSd1E3LFhZrqdBvtJdMVdGa7wXwUqyvUrZ3N3Qrs",
  "key34": "YhVyfzpCVCmwEJKCjAi2ijwZSXrVH4sf7S7bRBe3ofbVCoBFyhdF94vdyWVsucKS8R9UcmoJnPsvzkWvyFVf2ur",
  "key35": "5hq8MYR4kciRSgHey28xjx3wuAT6aE11z6HYvfngy2NcFfcVJWJMk9psW9HCLmoeTr41z4i13pFwTHeLqNZUhFJw",
  "key36": "65HKSnNf77e3e8rkS4fv7wemGztc2Fi8Vk2i6Qm8iRjD636atWBBVrGsnY5GcfTey4isANdq8TKsJZ1w6E7MjstH",
  "key37": "3Tq9BDw4skyJaJnK3Dzq4HJvVq6hqy9uGMubs7hRaZwDh5C4vTnYA7ioanhsfZT4iYhpkNy3aSTXDGhDURenyvx7",
  "key38": "3EAPUWDAqUbfQZKRdz8N3bfocZ9XwjgFv3qGdmhfgqmLRfHrFDNeyqzZU9KmG858ofrMskQybDEy8457ByHfUbaz",
  "key39": "3upDEN7GmYf8eut1L7rubBhR6tXKH6SDvJLQhnFvwkh6PfEXJZFRLVFmwEzXPBZXnWs4xfhFyjKJzqmq2svehRzU",
  "key40": "4zJGkPYtMdUoX2FEqqGT8QQWkMsLY6XXLaRkDEbriDyGiBDBwLKUjxHFqm4F21eFwfKDXhZLbPtiZ6LGuMULb7a2",
  "key41": "5k8eRm5kMiS13rLMsANtsMLP1TnHZZFsvs3BwEF5qiES32CBLpNirgbsL4aqa3Wz91KRUQbLjXdZ2TdbKhoV1k4h",
  "key42": "7W2CkNBQjE35qUz24qveiyLB25FkWPh6M8HPLAD73tqLB9iQMyZSr6ayE4bEuAhNAj6vuDsYZSqBgDTKPZePRe9",
  "key43": "51itcvMJEvhimSRp9sQcWfmXxnwCyj83tZNXYMA9m46uLkrDAsd1DqrRQDfeMJDYCA1t8hh1Fq63jQafjTXukoVE",
  "key44": "5SYF5nv7yLeNkKaxuCxykSb7Hnd17Rgg8fu74LW9cJBamYXhapck7xFjdNu5upaqcC9wC5Wo3oFotvC6pmThDX3H",
  "key45": "3RtdcKrAUiPf942sfnELxcJg9Z2JQJvfwCmXRqXQgcYTnDpAKvLThWivQD7rEmPwPiieMAoK7VUkVVnrBp7k4Gq",
  "key46": "62cbyk34VMHrBwwbddA4edzYWVs3rawWM36T6P7TYG7FUHwc2vDpKYtCLYXjiKh4ZccrEQTACFRfwV377h47jy5i",
  "key47": "2qtDnrtoikQPK8NbsHRatH5Ko9zw7NDq5oeVqo7wjbtN8N7Q6P6UxJwwDm65vw1XJz2iNx9hQG7qpbrKptRaQDtd"
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
