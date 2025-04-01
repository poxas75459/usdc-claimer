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
    "2KtgLhaZkgrdM6nA5pzY2MKuFGaGwEV9JWhzQFmFim8yUM3jHSzNeHeo5FmkZa9jbVzaGyaZ6FRV2cnkG1Qg9z2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXgGsKVRhoDWCm9dw94ANS315J3UjVqZkeQNNbyRarmsKZAakSRf6G9qiDxD6xqUphc1Tfpy2ir69eZvXtb8aQB",
  "key1": "Tjn6RQoMgdJnFBZ662aokts88FLW4X9fhUcxCwj7pjMZGFU85wo42g8SZyV3oKR4MdVzJDGPp3qLTGpmS5VNTPx",
  "key2": "t7dZLCkSq6GnZUiJ68aoqkHAqB3asq9gYc5Fa51jsZQ9Q7hfmCgBwTMbv5zCswVoeGyn1AjXfY2C6W88hiHzLGJ",
  "key3": "2W5EgLMLvKhqMB8q65Fd8fiYQnKRzxxK3LxNnojgYurfnahmrUvxxitYYMr4PECgsheQs6FNnWE1QoNdxys8sqWY",
  "key4": "3LFoaS9atqEbWxdCQGqtUHts2APjDHTEGoRMNsZqCVn6bVtB5LXRjUbPJ5VcijkKeC5YdDP8tTR3xxUZPFpmM4oN",
  "key5": "5B4HFoZLXV2kKiaSanctUPziXCy5uf8bGyFTdJx7kWVwrsPvZRbjBEnLZ76JpcCJFj3QFq55P9Xkf7xrVtJizxEX",
  "key6": "5PhXYKfVxcKa4Xxki5FL5TWHU1gcmsX7gt4mj7d2oo6cyDSK6nUyGLLd6e28FUzcAvgee7R1RgVqqFp3ZhYmmMus",
  "key7": "5bnxu2tKGWkPdwT6z7WvPU7pbvuQw5dSd1t1XLLqNydBqaMFja2bVzs5jMrijvnZm6xpc1cvGFiXn6kKpLm3oeqV",
  "key8": "3B7dWfgT3a9AxHMUVgnDzVsMrrU8Hv5Wi4xPBdJYNA2tbUiZ9R5gTkuDXmxToXVAWdcTFxkSh9BDnqrtnUY2i6iw",
  "key9": "2eSMtcyfjCXiuWqUS1kfhFmy7bVHZWLeBZtWcwMqtopgLjnB72HYwLupG4itR3DWkro9irbxVyXExyyRRM31CC6t",
  "key10": "3Xi4gixjVY244LvYTz5wnyNZjM6sARcnzMACSau7BZBANPkbDXHTztTHYX1Rw9PHe2ngT7quWAPwfAYvaxYgc3Td",
  "key11": "2ohvzHc3vj8Xe6katbczArTmGoQU75hgeU49pCTTo5j5WNsV7BJx4UK6m1JLtADhDNnvJFU1kQwVhvPegatfTZgs",
  "key12": "J5DnfH4rhAqnXFEzDWuYQu7K3JTKiGvzvARreUyu5uYRkRu16yKuaNk2Ee2aXiBvy3EcJuM8PBj9449ob9ZTv9U",
  "key13": "4jBDvFkvt9jhd8BeXoEuag3acSkaEsyvLso7B25vu4NgsX6axk2JbWHzTk7jgnyQeYkJMS6Y5VL94r44tAEFSx7P",
  "key14": "2txyALcf1MUfpEBV5oXjWbQa7mQrz5T4A2MkRE24CGf2tjoFMBXBY1Qm3XvktnkFjEK1z5t9RoAhnHBXS8AKxpXT",
  "key15": "5L4JZc3iviUjdc2S68AhsNN8Ui2fiSq1VVw7cBV79tKv3FRvRhStmGiDEWcexM1pZ7FbqpjtP4dqpGeF1AFj1EUD",
  "key16": "5PEaedhBWxKwxvi5MBSvYB2rPrmfu2m96DXB5sx9LbrqyNQMxun4ir7vY8EBa6poiFrjW1WnaUknaddLff1FcZck",
  "key17": "4sVKvxyQKNJjp4MZHapdLkW7R1UJjdoLdxfeUVEKGyi96Jjo6XHYmxRq98bXgzfgJmzz5xL1S1agPF6o14tPycj7",
  "key18": "2722WC9tYb2hbQYYsuY5kqVSWyBeHwvU86Q8NtT6G15CDQoeN7HafX9J4NpR3mQPVRmZeZQAznN7FD92Pe5pyeUP",
  "key19": "5YWup8kbxrSkqkTwgbW7SFpUhFr6wGoEPJMYNLvtmRqGBRcXk2xfMDxMHfFh8P7AFphJbNpwfrHKCWuQSrPc3YwN",
  "key20": "5wp9BVSkMogHUodJg9TrLjhHqACVrD1GoxmSvieYwTEW2RZ1qYJqnHS6vKC3bFm4jZmbK8JwafMdjoyfSmEdo264",
  "key21": "49b3C25ENFdixcssXUsX6BnAyKVx8nzg4v7HpQocwSj9XeTDixPW5yH19VW6YUgcqtkJzJEqPmVwfyzk4nF9Uydg",
  "key22": "3xfYNvsfofeqCq1geZXfpbJTsTAC92udj3i1VghPvM9Xu9DmYc14aHv3p7BhQrfAoD2sfRUxPEneEZgAASFFnPF6",
  "key23": "61kFmJvUUseMgusAi7kBJ85yBsYxGooBL1BHnV5TZ8AZLYyy3Szcv1vY5KFTQMemVYMmKUQh9vDFTo2VQ469vNBD",
  "key24": "3EowRfAf3kRkumXXqm6T3oPaPRkuW1Kyfx9FmB1wWUj5NKNqb692VYJaKCDzHwPwZTYca5MFGy41uMM3WppDVEsR",
  "key25": "3Ln5YQbWwghMAvkXaRSwrcP22tpkXHUc7gZZnKFbbhWnmQzgnhCSwZrhCApGG6JYNTcAz792deugHHjhSqMzwrj",
  "key26": "61tCWbXBkSWt6oSNSjzWtyx1LTodsxHTFTLCAQxU45o3d4Jkxd2ZdteKWAATUxhTUVugg2m9rxypRRNZoLDtKsfz",
  "key27": "58nHRbJDqFwg1LoqEE8nTsXjrzyNwQr4PzQVDN7S7ppY7oobNeUh5F1WRkEUNJCgde5Fc58qSf2d4QrRkUSNPfdY",
  "key28": "5avmLy4xgnrhA9WvQdU1hUhdmC8dfWWifgiEFYV5GzLsqwNk8gcCQHkUDi1y4sn9fi2CDj7o4Pj1nzKy25x1f97d",
  "key29": "3a9tTErJWiK2HjdYveS4gyA3fWGish1YBRGGbCgxkVSbQ3VGLSH9zsbX1DjdQkJ34b2U7TW8DDPkGbTUNs6FKrrP",
  "key30": "46NHRjStqnViFkecnRWEuUFt17cJFKG7J9ZeQCFrR3omioaPQKfts3cmywaXQL8BR6JWDr6r7yQ1NQQCKFz32dXc",
  "key31": "2Rt62zYtW7KSEApdkBpjbasspHN59K7kajyWo8FSg1wzKWXCigq5KqrmPgYugPwYJyhhG864z8itwtoRhBuPLbQc",
  "key32": "5t33bLtGQB9u3fLLajrZKqZAsowomNtFrQ3LhDJC31qsWfJj8RxCmaY31tqELbyo3nMXK1FMzkcTAzKjYZrGTXgJ",
  "key33": "KF57SVDLp6qgbryJC9ZyQLVNWXuc71ayypGkUbfbEVPbehpo87mmvmcsCw8bYpR6Nh8NTXRUpRM3sqkPV5jEQt7",
  "key34": "3oL94ABGDkpXrL8kiX6BVF8rgAo5irQgz4hpYgSVwFxRT6c6VHgrdsavZCAQgXRXPUtZ911RzzvzPwJbdJV5QbXF",
  "key35": "v2vEEGr4tgyebsCsHsb8shZCXGcZmL7KCd94ZSW7yPcNofdzw3zWRhotRkrr5FTGTipNYkxPLAJmieUFGVZ9Ncw",
  "key36": "KXAiY9xfEEPTpxvviQdePscYrArpFd9SHTvAJzPikWJXhBhayMHctTauDHTTBCUmhPtpfoQFYLmAPwzPxCMeeVi",
  "key37": "TaLKovtBEWGuoy1FrfsigmKco9Emw2e8KjQ692sUtv5Mnvhs4brT4JtnPuAHbiyHP32Umqhwcz6EqkPfiJgVsBX",
  "key38": "5frg86Hwzax3cXNQAmSAcF5CzwixQYGgDNzAQDMm2bQPVZnkMe2PVF3mimqir6jHN3GzaWWn6LQ3Rb4NoWVpF64W",
  "key39": "5QNF4Y5fYo2eAbKoyN4nJVcm1ni7DPDSPZjiaiVVy9m7sZtFAvhCjRuBFQMx6r8ca2egh7PZz6j45fgBfLNhe6tK"
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
