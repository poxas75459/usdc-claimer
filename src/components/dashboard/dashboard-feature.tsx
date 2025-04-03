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
    "5xn8ZpzNhGBTx7iL8G1c1XAzPiRf1a4WK2tmTgDgEfhq4U9SP2XMCKzCtNzQbKV6RQztGWeCC6YdKXcJLVWAtdFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3frNZQGdERUMNeMmhBkP55dPtp6xBEUCzmuoDsrNjLDKp12p92ZMYgFFYq5XfhkR9Jrx33axkErD7CMb8rAxAM96",
  "key1": "2pRPBLqHuBg3aZ13Utoj5FAPLD3qkA4NYdESTrcHKhk2cyfWLm1oLj7ZKH1U3bwP5Pfk4ffARhzY2nyqmHmCaiKE",
  "key2": "ASH7PZUSae6sg2gyhP3Y7fd3DeB5CDczzMdC5gLTA3HJsaeY3338cVFZQtzgYhcFthf36Jv5Ly47kGBVuDy1885",
  "key3": "5AECu9ehnr9Y8QKbFsvAEDUPrPfeoqfhaQwdS7zT34WoQmFgetdm1GkXVZH6oVHuwKKsJ63ef4fnrb37g9pXdGmj",
  "key4": "fkptmuMqozdZLYJXGRqcHCam2nxtkmVaEYbuFzoV27jBBuvYijXY8m2vzbR7DWBcknLjJgskXtKQCUpUfcDAunA",
  "key5": "3UMJffu7u2ohM3nFoQDqyx67Lp3XiLgXzdALsKPVKWybr4qSofWcWiAnFd1TwLo8uZTU1V9MmmqdeGqQrfgsgPRd",
  "key6": "5TDUmCitzJfpDS9xN72PvpfjeFf19kqgQHfDCZ8zNqVcJwQAEWS5pVvHX5NWB49qJDUnPqGb7iffvCDwT6Yjn62a",
  "key7": "3oMM5vavVAWDq2UPbfhzhdC9VyFoCA4H249KfEPX4uZwyRgQ9ZZ48km9U9BvNNNBrJ1nrcs8PHwTNFuB1rLUKdvg",
  "key8": "2thEuyV7Jr1pDGyQ24c6ZYvUHZEsbKBQzzXhThH1Wk6rAoAPHdovtWYdCdRvsmowhpVVWksA4RfbiekB67pHDmE1",
  "key9": "5MRk5oNQ8Qr4rrpViAeaQ3k7WQ9cvH95h2Sde9QaQBrpGDbFvhx5rHhPP1VZihEbJdWignzzKver41BjmpcBocrU",
  "key10": "5isGNWpTmrTPfrE32yoMeZfiyKCkzZ9FKWbbpA4uHD3GQbnQYtxzYfLjkpWgWDRmTdASioJ4hMmHRbvxbycZ3PSZ",
  "key11": "3HxAvotGnzB6UaKXP8nnPgw8nDtZmbQeaUVNmhNEP3PCoD8QVxwuhaBz612bxPqxQ76dDz25aXfHN8wNq5t8uxJM",
  "key12": "4hUWNxXN1c6AMkxHGyMtFMUjgBnJbcQra7JrDjFGqN3uEhZnBxX9z8hm99Vm2hgvRji4aXrc751Zb2bCyDcuWAtm",
  "key13": "2LxxouDYZzSm11PFiDVrbLFh8bfqD7bRE7ck4EV4MuEHDbwbM4oUN347QqsF7BBxkmE5MbwBHtBon8rLBWD16KKg",
  "key14": "jSVf3gtERngz4JkK8NziRVUnJXEsbjJvGeGxZXcZShAx5x6jaiW5SLTCHKouVkwm9ksHPok691ep2i9d8mWFFYF",
  "key15": "2dZcq5ZhWBCQ7vZhVRrZDqdUGLkkG6s432vLco5rQxHhWbHrDAU6c1i2aX8TizCKK1Hb5nFG2Wqyx1ZCaSKXNcMz",
  "key16": "4gbGpf6mRKFHzFiHff95XeWt2Ugo5cbuBBEJ5peyPmdV9YDE2zKtAUuWDHadL7QmLjcsNPK9JZrsoQjvgfqHUpQP",
  "key17": "62msfZhh3QDf6B9Kg7oTXjrRCAeqZUgzWdCV8aTKYZLjVAeT5bFeawQdcGoD6XrsHjq5vEwKDr2dvB5cuYqgEU5t",
  "key18": "676tJTEkuBh17U7JyWS8ohL2VcKjJi21AW5GnyrCERPx3N1eTcbe8AZ9EiUoCQLheBCYyZ6XCSEH3vVv81RJFgpN",
  "key19": "Q5wGoFBYHKffowK7igGUgoFUpxPg47Ay7MKwTyDJ4kArAAyeJm55xVWD4nGuQM19DsQnKGYiAVnekNPoZq5RraW",
  "key20": "2B7neGiybcshwpCiub5mWtKAfGi1NN3KXrpEVmv3Zsx9ni97FnmQnS65UiJq43a38kMrL6fEVFJHrr35jj4E9qbH",
  "key21": "5mzWACh3iNyZrsTtvFk7jenhiz5Tnhu37s1psjKsGY2smw5Dtms5WqbMxmMsFUsTzoNhQHMoEG2GyP5t7s6teDxD",
  "key22": "2RBaBTAKj5RMcgEMC6ciYz73jtMcKc3YJykdpZCjrRpEsc2rhB4LFxTsPn6Uq4EyCLvzZL1cb2SpJSu6us17JokF",
  "key23": "JTaadJRutPQkxLt2tJTuetoxetSPk58xXH7dAX4aNUkSWd6YiuMCr15QYeDrtVjczEv7okXCEkG8nHVML2Z2qYt",
  "key24": "3SEiWyTLEkncfgJ13rUwRfKgoDL5WRGxTANVH6VYD9V9Dc2KbD8oZZDfNxHXrMJWMQsFJXxFK5kKuUnXFgvuuqwT",
  "key25": "4EWehf4d4riDtgZcZzYjNskQHZzUSvVb77tzTa1dJxhk2PZbUSNSzfyZe59SbUumZu5c532WKJsKgcyxFF2Su71b",
  "key26": "32NhR8nTvk3Hg8BncbLg7tEUEEh24e7LbvJnGg59ub8A6mVvDJhH5otnU7nxDQepVy4NfoRzGP7Wt45wDwisMMXp",
  "key27": "5ixXPNGC1qPy2anjZLtaPHVMDUJg46Np9jiC75qEqYx7XjqKiyXwncqwomj9Bxb2pTEU3U5Autjg2aPB5tWr8Q4e",
  "key28": "2fPSUK26j1JwkuUkrMLTkQWZcMjuxDGjMN6SMHdzS5g7X2tsUbwbDxVER2GB3Rc1typQHJYyN8jtFiaCuFnyDrsv",
  "key29": "2fspesSPk8EkA3orEk84PdyF3y2VmkVVJJNXfzFonqdrwAU1E2T6BMVA8ULC5PghDSCB4Y4Hu6FRThV9LeRWM47n",
  "key30": "258UABVGnNcfJ1nZJLg6KTxZyXzrhWKEUJoMg9X653S8FZgj9HZHGk9jLJkWmhGcw6HaVku3EzKCqMP74aXGVeex",
  "key31": "3ypAGTftn1oyp4murj9py34RzjVVv7uqVkPhEkJMVpje6z6LymUaS6vcPJUmXCRKsPCDY1B5S8kMr79aaN2p4BHb",
  "key32": "iSKiijVKiVC4gCVNRbr4jzedhfzoFMhgFMAbRbNcD6qq1fvaRb4evatRHUUssjLuvqL7tpGWXPVnMQkXcnsAkTk",
  "key33": "285ofvDrBiYpRzdE43WJShi9MSiViCHLUCmta9TeyjY75zQSbRGwo4f8LsQNhSMCjVzFTJREcCWvWivnBCxRg97f",
  "key34": "3NuGeAUrYSEAUmE7GmnkPvUdQEpNei1UGeWPfWNcoEwbW3YQBi7ofXNbsi4DTLphPSMG5EeFn4kQabuppjnp5kFU",
  "key35": "UgMznH2tST8RfJuoaF2KusMzCBihh3MoA812Q3ihWprigZsQQWii7kZkxWmLqPu1xJjBgUNUXVb9Z7KNm8KjHxP",
  "key36": "63JXf1h1DHb4hqLaQtD2AhUjjmPLvJCEvpX2kCZxU4nQFLuUUUbPMd5iFk328kQtrh6EFX9J8bwzvB3YGc5bAKhu",
  "key37": "37QZmPHaYAVDBNi49M4iGDMe2JxixgJgfFAumienBXybWmgu3arDeqLgx78ZhWzrXmMZqJhwsMSA2TWo2MGbDvY1",
  "key38": "42rbjgEhwokiHsL7DpqjXpN7QURqZNbE4v37F88mnpYQLf5uoKVUcsNccMZJKxRXLr6X3dSJ9TQn6vc3cyruhcgs",
  "key39": "25tF9Rfocd5Z3ujp6EB5azPAtF6nLHPqJk8sGrEjFkjzGdknKbgdjYAAXnPKEEKFVVKmSTGYxmU2owhFPvPv39Bn",
  "key40": "3iSZom65Qp5L5J3YmU7XuwuJfbZMY4ctCUXQEk9PdQYJzuArq6HjCiKz4J4J8wNZicwfx5B4EUCVzH2eB8tZGgCA",
  "key41": "3SknCbZnDvc2FBaMQt2t96sXRAj6TvnCsqY5hKfo6kbUkqMSYrK6uYZJjGH261j9QCLbUxrxebeBDxSRv6SAX1Ty",
  "key42": "2FWsLsF41LYGKvSNHjEBgvGBYHpQFSgAJ4MR1pnkY2BWihyNvsZhBSb6FFQwAurqmcKL6zixPeZCCj7TsSo4mh6d",
  "key43": "3vR6nmiTuwxk1xL4kz5ahg98axCLiXJguG1SGeruCYSAWHmjy1rePwY23tkEjm6NTRYDA771kVNnN8U85N7DsoNX",
  "key44": "4EXfi4rPEVwwJt8dcSGpBJ5bCYEpXXR5g1v35JhZMMxTPX3AzC8mpTJuPcngpvRBqG1fAqEkTt1beXNbneP1njza",
  "key45": "2PyWdgQVVejWutF9PJZStomH9gy997iwAsJF44fndteHfur9XhK9GAoQZyrU6UtG15jmUZSQ2xF4JFgcadyJKnP9",
  "key46": "TcQqeSkPysWMGkUowSb17yFNxA8yDrVX46R7eMbDpxtsCUPosZyPziaGT63ZBAywbMTfq5vi2ZgyVt3KSmRz4Cq",
  "key47": "2ejcGtdjca9s6REXXL9DYMRZemGUzRjgAJEsoZLwF616LsEAwFcbQ6hN9g2fA1yhVcb9dp4qPgWnaQsok9j7tYiF",
  "key48": "5rCDoHKMTxVKSP6oyy3KzB1gPqxPzhjc8PHgTeNzUzSZF28UjAfP9uqHqKw6fxstRtx1vKQ1T4G2FJbJZDEyzZCM"
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
