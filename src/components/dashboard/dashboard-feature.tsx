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
    "3YPNvqrzanmWW3zs1vqZ8yDXzXwKhcbc1bt7ysekeABZ26og1EwVaDCXZBbMxV85b9FpwEo1EC6KYBLffAg6AFFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCZUbuDMcxKT3obNg2KscWYhvxhitkaQaXZzbAD6t92UzQayhApX19bmHa6RDdGwP4btVpkeFHQKeC3KHzJFJDg",
  "key1": "36RE51UoY9UszSgv7zN6HqJ7AMku59ZyJx5tUVMKBsovHa24P2DE4fuYv7gsANjnPWMhs7HsrjBqwSzDnCtaj4Zq",
  "key2": "4DGX6G9nLcEwhmsKd5wyRD2pqVNb1jNkosEq1tFq1Zizakc5tThkG4ZCxt4YZsbj21s9KpShYzLRWm4JxfTdeDiS",
  "key3": "3RrjEgJYxaLmJqHzLyJV3hyjtjij68ojGoa9JiMaQQVzWKRL3u49C31BMMWEuKyxcW24tbCaSNZpcrYFkr4ugvaG",
  "key4": "5aPTPgw89BZWfxXvdW64xgaNkGBER7wg7JpEQh7kzRHXNeeogpDwWbZqHfNAoa5vVjAE8vtnYFuSQKvjFP38rEoZ",
  "key5": "2UogKvkkdXnAcPiQsWfaxyWRzXtjLJuWG8jmYoCgPUw3oMEP31MT5TDPnnVtjyzxj8tjXEwYiobVysCvvkXAFz7M",
  "key6": "5PPGMZaQXUVqzeMo5zzxEDo1NUSowkTJgeVyUECjZGfsXZ2AbJspAEbCwXf8rWUsFPspbQK6E9E6hDc8RmLgaaxo",
  "key7": "2t7k6WD5VcocfP9ahymB76NEbRkzRFsMPZUW9VxbXEfCoZNBjX9KQmQCf6qRRi6dwywnM8tad3ReePkBc4vdJWwv",
  "key8": "26xswGyyAjUZacf52bsG84f42CXQEBpuR9Ps7mFsZaKPCmSWQEDT1dFuKBygKu34XrsH7fG4zyYYVkrMcrNQYarj",
  "key9": "4w4smRmDeV3KAXnRkAXMEJJEFQEv6hNkTYCn45N1eubFKozhHWp52FA8wktJSAke5gha36qcxhkBiYxukTtaKQ8g",
  "key10": "3c6DkSur27NJhjeZvMvdn1BQsNM7RWpAHM9ssjm81cddLsz7Qv58r6G4R9CQxyqC9GCmS4LfeqQJgumVxLuGYGwa",
  "key11": "2q6XkDhEj7nhRCbC9gW7vtbPzineyHPFLS84bMrxCzzMiyvLoA2KWe3QWGFbBjQphVXt4zpGuAWPBS1VBmb5eit2",
  "key12": "4oNDpvs3bSgrPXZUu6byM8uyf6e6YZJMPE637aTyEXE7AJjasLN5GZ7scGaiNp7nxXH8nZhkJ8G7cC3krrbHqx52",
  "key13": "4msXzhtVbsuKdyxuzS7E7LhdyKpBXEh2FodnYTvN8qrmCExjfCGDcbjkt7HR4E5iNPHc3SoKQNhqSeoSwCAJCTjT",
  "key14": "kqZjRnzbGK7k4bNogP6ViiJ9LtQH8FKXvi3vE2n42VwqkdTMeHMsaeYaD9o4HVyNJxukadhFBprFLw7gPVxukez",
  "key15": "h8nKfGDjdQQHmavJhFCMy7RL2XaVaYbbKKN3XHXw3ofLdYT8FPm2UECxa73bcbaonjUcCVh2gTHNFGm3MeSSQwy",
  "key16": "4pFxa69K7Qz1mD75NKTwZi9EvDUvybd5kWt9tGGr71y12bWK62MKF4B2VtzBFZGezB3z72eBSCs46WHNRDWhFuGG",
  "key17": "QppuF5JTED4RnsKgjp8ifB36DfeL7oEBxV59CJ4uMPLQpfp2q1FAt133ffQLHrvsH6Nw6RPAvEZRrhDrF1armBt",
  "key18": "WYpXtS5wb99vsLixzhBVUwkcLhHJjAkSYYudupFwxrK42woemAVMuGjzfPzBA7YCKZCuWuDd9QBdbcUvUXa17GH",
  "key19": "23cx5wMaDZ48DwzgXQk7khXTtEWxtenFpiAhwsWkVRBfY9EXcajRCSWHH9DvfPZHGz8bywpfM5itDHtZ6PZQ9dAi",
  "key20": "5wfCAw9s3K8wdn1gfY7tgqCEu494ZkdWxikfrB9UE8DPh74gXB2M4ieufEJDry2MgareKHnHxgWHbZ7L3AGjhCH5",
  "key21": "pv8vTzR3q8zQffqffE5j92bRTiesCpKxjYhTs7uF52iD1S94DE3hLSRvsE4AV4nfbD6PxqPBoob3id9gZfHJonX",
  "key22": "4Pn5H7vTp3g8LGZdShbsRGHiXF7z2SbvsteKf937wNGLBWzDqrczedXhqoukC54ynn7HrLmDJDJDR7rbYu9ZD3mB",
  "key23": "5dstrVp9W6zi1YvWD6HTdQtJr64bvuc5VcKzbsPcXDjR8fJUquswX8pt5C37bbz1ZKpQ5neGLqG58amkbrynKFMH",
  "key24": "2ZjAJx5XP5sFiu8ZCieWSEf3gGyqrf8mJzGkmNTqqkihz7ogCpYWkZHmSiGQmC7KsF4FDhmt1UV9F6GqzTYyxGPi",
  "key25": "5WC185o5Ae7qyCd82uvBtpFkiZC3B6619DfgmdLTbxXsqEpTmVrQQdEPimpU5Uo4qDLtvor1YsEMJq7PFuKtTmJa",
  "key26": "33WwarAttfMGbqQvojCjK3c6cectnNFipqCaLMa1UAh4BDV8sFm6ajpgy98hifCjPveGvgMMvTtw7BJg4j2zBxr8",
  "key27": "4qdX66vQptRNyTM7CwN5JKvCf2UqPxkeZzz4c93cQGG9ga5tgw8kgMq5eNzES7xCbkoSEVGGFJR8nq3H8JXpvCUj",
  "key28": "5LJMeLxFwCsC3a2pNujGnHWyp9MXZBX7YhmBQzp89JiYoHXoaBRoDQji4tuxQzB3dCh2kuXLLUFmrdaYhCbDjuig",
  "key29": "2s5CHdPEKVBDbNrrQafJrsfES1WLfZZQpC9Bn68NetP1KPAyeRgzZYAZ9nnUTmVUoDugLtPnffPjRdBFBabj7Ny7",
  "key30": "XT5GdMFqPTiWLkxp2TqgoCGJvZnaXsjfCiUWpwQhB7KqccC7Ao3ZWpkD8mEuxT6jgZgVoPwxo6EAR4TrAjgkehr",
  "key31": "vPEBsfDTNUiSvSQzgmRuYiZFRfHHc82PHVBtCcpgU3o9Z8EiEwM9VKtik5xL4JyKWQh2ArrEXxUJUqftnsyU3wm",
  "key32": "2QksEkGg4fjSewn5Z7CGk7PxbQdmhi4sN5e2AoQfxVcMxARQZyBWqCtvJ4oLyZqndoRHdrwcDG4ygkdYAGd9z6Np",
  "key33": "4tGVJUWcM2rJ2bWkP8xWua3VGKUg42puqy3Xp17TkpG5ZJkJfwHVomZN5n6b1oCKBT9DcbNJ2n8rJFSbKq8skUL6",
  "key34": "f9xHSGHyH5BJxUAtgSeb4YBHr2rmpQqHTuYuRvy6TuUFwVm38nPEyZd5uBejTYJGGPyCPg71sPvhjtTV3gjvWHx",
  "key35": "2fenx4CnPqbASzZHBpLP81fuWgVd84Mtq8xs8XVujDFpsRCXkX9qat1wtPnTwnECNmHRjGz4o1z2edeYeFM5LsuL",
  "key36": "51qUCz4DxpXshAvKkYMXDdhKyLtayDe5BUtvCwXpdfTWWanKRP6gddZbDPPBbJNeLcQifG42K1R6N374PUBTxSeo",
  "key37": "4n2FsPbcntVZP2wpwwfK6S53V3h3g7PNLYKd19J26WcJB62f6zaFHF4AZWZRFq4ifAvC2n8hPu9vkA1L5P4q4aRT",
  "key38": "3dK5FfkEeqUJApZM4W5sYydZTDFuzkbGgiF9HckRgHiizzjvvF6Q6rR3GYJxSfq8CT2JAVtjSMDCJz14kQ4UFgqR",
  "key39": "fEQkrKgXRGssiexFeqVrA63MVbWVidpEkow21hNoupixxkQDG2qNaHnTiaGJudTVDdmpDsiXXEeBnJ1wZWmnihe",
  "key40": "466DfMAow9rce5bg8ekDGpWnkv1CRmN23iNueNYw4GAhXeHq2HdusbPTPakkiCSVft5uvz9rVFAxMDXEZWm3oeBq",
  "key41": "5SADameFGhahknzF4ARVv3zSdsdrGZNaFzb1f5p2N1jRx3YmmErLNzinWzUmoHA8rz4gr1VyWBRTh1B1X3Lg3XRN",
  "key42": "2PYXh3SWusYN9S8QP4kJ427QxECXVQRqLQvTipEd423jUEjt7XHhpQtgoppYsQtCzUwSgejeYmNjRudizQ7YsyiD",
  "key43": "NTkZVBgeQztJwWwyrAiS6WGDYVsLC4SV6Lx3wtxMG2BGiZvBWUjMTAJQFize9eF5ggUvgwXnqLh1sKxugJNDXSe",
  "key44": "4E7hTfStWgGyzg52vm9cSrFxQEtmW1rWbcH9KpTdNau7XFLsohHyGct1jEZyeTxRb6VuUxNwuAYdeojRU9NxRP7Z",
  "key45": "3eFZfFfeYLPeGgy6SCwYkNXCDVyTY2tuSVNoJ6DKD9TvNd5eeEcwYNkA8mX9TEEr7AnsWNEc51Lg9KTJZFdW4QPQ",
  "key46": "2DH1EGB6RR7TB7rvaL4r5nmThT5huTKauB3TauT7yXWtucJCrd9NVWsHktc5vHbvfeu1KXHq678YySpSwfXxizYB",
  "key47": "3EpAwhjxfUhtyvsRTjsz3BuLWeWNJmdW4nCeUQbxFRUTAervQezbmbJPBjiJAJzLL1FyNxg1J3975ykwxnsryk7y",
  "key48": "Z3wKf98bWDzNaQZBptR6NWAGjYvFZUo9qTP79XhupHqhMc4qfjwmfRrwPqJL1YYfFeNbgvGqHED2ZUUeWRxaocp"
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
