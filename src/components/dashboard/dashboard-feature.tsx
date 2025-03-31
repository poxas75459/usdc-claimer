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
    "41tj3v7A8HWBw56imp8n8VfxMM4yU9zdDWqLJtGUViAYYvncZMKFKXGUnhQ8rSxpyQNTunoJFzBJ8pdNB24E9bug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46zZRXUsjEh6B5j1LhYSGuYvk4TzmVv2AVb1xGBvFoJEKXFvEWLNWFBKgzJmJyn8U9qK94wMnoudSqUJJxkf5mq1",
  "key1": "3JHkwshXk1mgny98HHUmsCt6VJy8FYDVzdpcS6kedba1DJZiacRsHrhdYRty5d1Ny3hojsnRfH7VX9Mt9KNEd4mu",
  "key2": "5jS9gke5jwZKg4yp8Mgz7FwfFtXW8osR7bJyRdB5evBu1dW323BfFSC2TgQHKiib2sHgCRigXaUudESY4hWUK7i9",
  "key3": "21truUQYEhiUgUZuEp6MCbEkqVFHb2uSv22zz5C2HHmVfhgMe1pqPzmd85MndHJnyhnhAssHyozXUtiyXhexz8Tt",
  "key4": "4FUik5ti2nvB5uRHRYVJFv3kYX8tdfqJVb8Lr8keXLF8ZqUnwD1TghK5ywLUEiJ9LU8ZkV8gMjC9yGgKUXRn8XVh",
  "key5": "2vv1sNcpurpGSGFJVpzQKKY8eNtseGAyNPFKtgvbGqHNBo13bp1EG3DZgNWeSkA4V2e7JUyFGT1T9RH8Vw5mHSVM",
  "key6": "3SBKFf35Q3dfijFo6Hp2waGRkwPEViPaZ6McpiwWKNbUS5FghfDci4BMmcXMhy7tW3x1tW5RWCwsuYtDAKJZwDBi",
  "key7": "P4VtBk1FosNqPZShUrkP85uHC66Yxt5PFoEAPAtjm7zxoexqWtxNXLDcv2W3dVFpVjoZ1h15JBTAbHoKKZTrpZF",
  "key8": "2FDkWgSb8fH3snYVgfjHbX5TjjSTgVTjrQhvK7qcHWndxVHiKNtNXyvKcCkT46rPAFyjDNgM98W5TKec6NZNxQYA",
  "key9": "2J5CZepjENUNK9Fjt4FJfCM8L2P7BnUsryjqNuDGdzf9EMBKdGptZJGru13aQCP9H6Uxuf8fTPsrkzYfCjwHjBWw",
  "key10": "5iACVb52ggKQeLMjidPFfmLKiJKQZWXW9d64vVBUBN3an4JWnwxAZQ6dmuq5TVvuCa1pzTGgtoC3RTp66gg2iEnp",
  "key11": "28XzRVD1PiyV7REXxXymfGiReiSKaCbrXhe39uwGZQVvXRDvvXvdkUhTX25ifdKd5D8VAdGjifgxBf4oMNRTYJFk",
  "key12": "3AJ8XHFU6HBBZwcYZPUYKhSmYDB73oy2Cg8Qm8RDDkjedmTTESVWzuHvkD5xTpDNVKhL798QRQKAuryftPLrmn9L",
  "key13": "4HRAL2RiVtm4U9sAgHsrdWN2hu5e9TCeoEUTpAcaVwRBXvhq4oUecmVvDcM8sJGVQx6C6bwMVcVAKLMvenwkS5AD",
  "key14": "3aFRELH7Hgof5qFp888FQyRRSABCmvNxYFDv6sKf7yTepfTC26rCr7qN6QKda89A4pq9qrFc4zM3wprCBNT55GzF",
  "key15": "3V8Kfexv8eafFX1eopCLXTwToYJn7KPYhXHqfhFsq2p8D8GvEbej6raKAu8Rdk7PMePkZeYys9hUfpUbGuaYHyZ3",
  "key16": "9XTkgYBaDoz1nBrvScmN6GSWaun3QGBE7vKhKvUrSdbLcrEdWBhWfQzpdwgirBM5pTxgRNTNxBSNtmwSEobCzsg",
  "key17": "3ffZhK8PzD8F1yNjUxiaW57G5GJgaMq4KcVY4DztWSuyFmoJF3nbJZqCtrHjx7ATA9KCb5kwQPkWSFwzipgzBieB",
  "key18": "nfrqF9hmq9t3azcswy4TcMPGhuJQPuMszPpZMZ4L6Yt2JojDVKzdy9jLPaTjPSaraNydfHummEbh9AdnFuFNJ5L",
  "key19": "3A3ofZbjKt6AzmDRtepWqtVJUAj3n3UUSvKk9NmbPXL67dthHzmWbu7Fxg2iPKT3KTktMKaLEvHLfMFyfknVexsD",
  "key20": "3xWLMAH5kC924j4JpHkwZekkDD3rRdJtWaoEm7qyLAc7bNXxTSdJjnYaCdvcWX85aFi1arK3nKoRE3SfNY14pgNT",
  "key21": "5YKDXnyj5tSencp3zPmorp9MYb1SuyjzC3wC959UoWNPucSF5Zt5fyFdNGQGwmY6EV1WfCtGjpfUvBMdZo7T9K8p",
  "key22": "525Cnr12TwvmjgaREwVQsDwBkgC34kaxptxWcfDaa2wHMNN1Rg4f6bzGqVvjKXXFcbuty51uKGZkKVCGeqSBrfvN",
  "key23": "4EEkVHRKuRE2STN4dcViCgL4uJaWvBBU9hSshojpvWwBDa6VkB5Z6VwCWQ1kDjAw8iyYFovEbzHYdYpyTvrFiv21",
  "key24": "5dFomSk2zrj5qbKCp5WPqbYaNmwx24WwMnfFgNM3X5HHWwDnswza1mRaEGQDaqvT5QyRJ3k4wkB7nVzdxiKpSwYA",
  "key25": "3vVkh69R4FdPogiXw2YvQkz6AsDPn3bBzQ5uq6H9ZiPrjVcEviJudu22rVKTUiQwbLeykNVT1e7UJZcsGPnujiZw",
  "key26": "3sLhewZJX8Ty3LJ2NK8ujSx538ZgCTNFxq5zaDpMTwYYfbhqhhsb6LDpv5gz2HdyKb1i34GQqmfxxgz2FbFBEGEP",
  "key27": "32QG1xPTb4C47Nc8BeszorkPRwKCKxJ898pfMoRBeGvf5EpyK2QJquWRA5njMSmoBURHTcXgggD8yRJ1RKdzQYYg",
  "key28": "U1SM1VzXNrWFdDcSGQkBD6D3oAUg51a28WACnwLft2za2KnSyjFkG1bKTxutVVPs1nTwKSgqQ7pjFhiswi4mFPw",
  "key29": "45hYAWDSBYpmr11pGY7quyAMpQ5MoMVbQhTmzKCCZFEjDDYJ6YX3uS6pHuQHrAAtNahccyuvn2HPUK4918G3KCxY",
  "key30": "2AzbfdTx7PY71xNEg51XM2zwJp57cUrVcNCASAr3tjngpQ6xWwcbWH3jwiDtLr25JjJh8PaC3yaZX6yfXDBLxHjb",
  "key31": "5Ph7VC3nxXNqBWvBK1iSKCLu8y9bcDMkoDUhU3aqjCJ8oVKSS3kD1BbdwjHM8dfN2DqRW3xRpS9mnpheSv1Ttq3u",
  "key32": "5gq7VXpxdFNx1Li3yrsZnUi2odQ1x4brE2ALgFAg9SQa5SshJ1UtLmAwEfRx3tyUnU6n8cpkEj7WdwSeEFzftREf",
  "key33": "3bsNsNjBqSJzDBtPY5h2cnxGPv1Y4vS4tv8TkRScDFd8KSMgU1z5b7geYoUi3NtsGR9jCwpTANjXLYkpf2dE9JsT",
  "key34": "4aJrcTbscEc158GYxmmuJCo7bzsW6V1z9n5uWC7vusssdwhZUYgF47U9RB9RxtStPHaUZJf2UbmFskqEdC6kpzZP",
  "key35": "3FDawof5Zx8fWunTnbaJySPLwPXZvq5CnLW6wVWPnQqPZEVon4YKwvvu3zTNfJNF55yJGekB6vZy7dD2C2t9FWsg",
  "key36": "4WvpkZzq8SuDP254aQh2s1g8pEu4wGK6LxNwyvVvVm6gvZqWgFfG6jnZcumNhTXARkQKKqpLXYWo34UagkpCKDHc",
  "key37": "5BQhqdwmQWNDfLtkV3RVkSJfvDf4pje5cJt6sCoxLDx4B25ZGKAQebj6uyT38YLZf63YQVmpFicDDx9Tmt6aK38P",
  "key38": "5vjDFQJUsAssSdEQWJVQZpqyeyYLxr2nSRfXtAV2oXR76p4gvS6Akby66cZAe9dYNHoS3ZXhhG78CBPyhuBphinr",
  "key39": "PjwzhJ45YyPQFzzRGoLZfMTjHNEtaVo4Z99ncJPsMXR2JTCApdku2Q56E6ahLvXHaXaPPxeRADtwusPoobeir2Q",
  "key40": "s6bAsf7xqv4f1kSnZdeJkcJcSwX7Nya1W6C8FdFz9Jx8irh2hpjWukpEt3CwTgJ8wFnnmdxAA338UoVmv5wSgQW",
  "key41": "2pGurJAUK4MEEiKkvLt1nannWafcMq4wLK1KxZLpLuDqCoHes3zjqpFep6uAiBQepRNAaSneBSnwNdsm4HQcgvYG",
  "key42": "2YWEiDaBREzyEicBbjYJBvqinE67J3deHyopyMDxAADcZRqTMQzZnAcXssuVDyLdc8oJD5kzd8zobpQjZsk9SpSf",
  "key43": "2yVxbm5tAPrUfduagqYZt2NpatXaFezA8xcWX21Q5dKkU3ySSCAkBQ4Qf8AJLZHsA9Q5Qg3BsNf3CRnDWzCHQbmE",
  "key44": "3vqJwwoiAuxNhb3FT48JmCuEQqUcGmPx4QiMPe6DuqBDdZ1Ukih284DLmFBD2qoVPHRQDyYmMBbPM6Nj69ZPT1uU",
  "key45": "66wTHy6SFdH1vUbwJjdJQ5rbusCuywoDTUW6NQx2ZvNyzmUG7D2nkF5cCrrNkJDCZiCM4yQv3NYFLwc6FT1FgRZd",
  "key46": "62pb8RP1oe7taBffaF6QYXcJjuwN2XKy3CitoQAumVqqMS1rkpRiA6ZWGnptoZhA4RXvYsqeS4aPkrBLk7iWvZjJ",
  "key47": "kmPb35t73KR7NyriCPZG3T4Q9ZSF2yNv8bpTrVN8tUb7nRbaKywxT5hSzjK4afvnGNc1TuP7CxYBeoVrVCo3JJz",
  "key48": "4WSiJ6dnG9Cc6Zt6YJCCheGV9kfnnnpgr3nKj3XuJbfovaj7cTsfq3KQJvH6mBuDXM2MB9YsssENTUfmN6FxRoY1"
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
