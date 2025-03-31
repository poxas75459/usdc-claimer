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
    "4ep4tDpW4AJZEz4TdYxCnQGiiRivu6NzRLZJNKUJgQpc32mcMGvrZFxRTfwfmW4sCRWS228B8CC7XAkfEC5ovPpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DF8mRaDuVcHjwMADkQovGxSdE3axx1DADDsbWRTQWhR9JcfVauLvk7bEefqzqkm5ntMFTw3XRhqPtkxpRaoE25r",
  "key1": "3UwfjqCfixtvcKKXj9mwYBFsY4kVSpsQSUai3f96N9amsWBDYAGAUHuBTUifFtapdjVn7Fj21wGoFxsMdC9Au51i",
  "key2": "2NRyT4RiRSdNy7hfxcqfTxtLqKQpoNRK31CcJRKrBGShqPf1FUrMyiQxX2guxXdHjMsF79SkoWkV14GEmbLuYQXf",
  "key3": "45PNiwhuSDGDjiw5wBuiUpd6Cdq1MsAxvTd8wZHi6bUwUUimZWXF3Ke4L243z1adjYRvC1YBDp7mEtaELuh1cMBs",
  "key4": "pwKCssegLHQUBQWvsR8sEzsceyctUdQ19AxYJRt5rJStEmURV4z2BCKbWptavp9Mt1dH4mRji6G4PJteuJvRw5p",
  "key5": "3wMPcwpiqHMC15r8NMTwNFqt1GrtoS9a3KnStTyfNcTqa3Vgs8j1udo6FHb592Jztp89ZCpyHBBG2kWzrPpmeeGm",
  "key6": "5NJycmN1wfo18J1sbjX12KACKhVG37F8NJxjtG6KCz6tbinZJf2WFSpdN3wRDyzmwBXbsiBUizL1h5tLLrDFFdwG",
  "key7": "47MpCJSLsJb3L44KgZGL2dfyZ3BXJUHdLHgd4QT9HKZN1JJirkusMdhtgP19c9X5hBmUUReSNhFs2ALw4YpAHiJ2",
  "key8": "2rDUjk25XxkiprzpzKKJ987SGA5VtW9NyimNQZMxTLy8EKMdsfEzUk5gJtYt4YJzN6x9whxasJradkUHA42LwT6E",
  "key9": "35xDmHdPRSFTpbpMdL2FNg7waj3YWyR4xnx5zCdfPzrKQUeTrCGfPan8bzCNFuW9W4noY9beszDW9JWifZjsZJgt",
  "key10": "57K8wHiXS69hcbqXSMKYPPTu81K3eGnkNzQkGZsDhVeJd7LJed6ZSPHgGsAZFKcKEYru4bwWZL4bGMNx44x25HzY",
  "key11": "2p8Z9m8Gu3zTKzWZQ1Q9R7UVAncXUToF5q2sbiE68TMQRfvpobyxz7nXX2oa9k2A7MHnEiBRvuhkYia9CJWZCe4b",
  "key12": "4ostKSkZQ2NXEJWyAH71GLrgH1GTBEPmcSKxLhtZuE4Trio8KhmE36tvZEaMBWVhfkdLWJ1fFf5LVFEXiZoEh91k",
  "key13": "2YMDbEUVFfgxAHaaJEQGUkqFhcMbumkmq6VPnmzow54igJar6t455XZCPoVw6WFb2YuKX67uDsDvW4JN4WWvBeTM",
  "key14": "2546hn448BqgCED4YFi7PAxf2n38aUXTtXfFb8rn4fGNw5tLeU8yDWfTwysjrbJBd87wxfAtVtGNxUrLKCmAdKb9",
  "key15": "3q4TCjVfjouGiYjGP3KcCRux5CWA6KZERQ3g9QdDd8iieyvqBos5wNGiyRwgG26diq4NPDy3B2mtJxA3gn58Lz18",
  "key16": "YVdjNqa7PExr4jqVaRBAU5AgJwBSjt8EBU5G51mxr5Yg3y9VGrxrw7qUEusszHUwBhTD4KyQLevjmbFJT2n96mZ",
  "key17": "3bpASzYDe6157AKKEswQF8TbUQ8rhAaVNi4z1tp4gVNuPZWXMoqD4axG7h62eZRYhD76MwzTVNmGuvL9TBd1odty",
  "key18": "5RKXGrvZqiCky91rvg9Z5D3QEf2KQAZhhzZGV2zTNL4EGRUn3bYs7vGJWVCkGfokBUCes97Wzt7RBbj3zkLVQNr6",
  "key19": "3rpsXuqYh13pVc7bKRVgKJdtgfu91d6qQA16oTooFrQCG85rBwBHsrnQTG5YEjkJDFEeHmvtVqGiMpeCoEM1E2tr",
  "key20": "5uLVLwnaoybQLL5he1GgMG6PJq1EDuG8EsXHU3hmR2KwhJUtYWGWzJvzbJR1FBFabSEhpSzQAiGUtcwThKDpjQsK",
  "key21": "2Wo1jS37HWLdFuEPsQwoHYCCAuBXbE6WG8uuW99nrfFZKPNjjB6F1s5kv7nAL85BmtG8jATyRMEZHX3eRhAUgqan",
  "key22": "gHberCV88JFQmc4XZ8rh34oyiwRa3iRNQZ44wtuLTvh8mtvRLjSGuV15MoAMRfVHdgDx93ciZzHCGgM8X8Mhu53",
  "key23": "3kiezhLQjRDXQ5zr4PgJvYDMgwhtUoh3K3W9Wy8tKV1oJrjTFE7FYvH62WcYB4Bg5vTFCeKubS4DvcGxxrcPHFh4",
  "key24": "2JTZAZy2YJQr3odGBhPmifR968FDqyrULpRoMj9qEzh31mR3BXx1tb6GMY1FUWvXx8Zx8x1VnnkMeesF151Fv6oD",
  "key25": "39qpLAyUJX3WW8aKcrjdd3krefyKZjcgASKMJVqejc1YjBik8pNCZGD1QidZEhfhJPkb1BC3DdTErt1w24QJb5C2",
  "key26": "i5u3VLWRAHgLprvVvsrnEi14jDKFTKYFneaVFNqMKsDeTTfWUgUvAqjVDDyQuhYoJxoHU28wpZwzCNwWXwDr9hJ",
  "key27": "54bQoU1TwnHtdDofUCoQkq9KA9XBohrhc4arLczXQdDr3cVvGGsN7qV5cyyX2SvLZ3HGZMu5aFxjhFqwKDcyAYRn",
  "key28": "2jw5pwCPoEKAkvGzg3c2Zt386mAjn8wGqZ9qk1QmThipiYTft4NFtHDe36R5fL5VV3BA37S2ZnXcHngXke2ieDmo",
  "key29": "2NKoDd53hZ68fnuYgZnJBZj9fnFo71B4vxARSpdBoBx34GW19EEnU2o6h8Y5LU528tt4jLExGBTh8r7uwR7jB1oh",
  "key30": "5ndWdneKYGGgLLEyFurZPsBaE7i21Vmf4A5HdhvYCNw9Fy7YN2a5b5WmgDMGN14QYvaekcFPTU8tfMcWpzWoYokd",
  "key31": "5KyrfBYuH86onShfMCqkGxY3iYpgJ8vyKU5md9VWLLNaMQjMQKzakyRbtRTvv8tuFUs8J2nUUoF899yvNMJDuNBe",
  "key32": "4WYahvanb6Aj93qoMovtVbCsdfTXyssTxy7FC7PiN7kx9MpZpYeWNbZRt5i1FXqD4eid2wW75onnui5XW7U3MEBH",
  "key33": "4HGDtH9pziw88fLhToNtuk56f7m8NrkkqWukjawEyb4P53vyZUeP4ASmSvyHpdCRBKkBrmvQD4BoveXEXGEf8kaC",
  "key34": "eqikkv1v5fxQwTS7ww5S2M8T86c23PJbzTCxnvDfKguig7AUMnJYBj6MFzBjqrvMPAWwpeuL3PPgKadqU3vM7PB",
  "key35": "5md41Gau7sGAjvHbo71Yianstw4PjjUPXUwkzjqTTwaTTpTGDMBSjvxuHjCm4ofatU6wAaVWsWxGAsxgy5Gqueui",
  "key36": "3bLVAPN6RhprEDKJmfD5siAdZQMJXkNUfGKpyKqqhZEnDzS7wJkNpyBq4CVyU66LvWN4CiVsqEsynvNfJ3mXGK2T",
  "key37": "PfavPCAgGznQTTumhjYkegVqEzqTVGcLBztBSAZzLkYsZN4Du6icf6xztsLTvzV9H9DzPMB8D2fQLxLLjr1FkQ5",
  "key38": "gSpUnUKx6J9v2pzRh8Y5QhfqdrNjkMkYz7AYrJgbdsoKT93PzKWj94YLm6vju3GikK4XL14N3CNpudjzbtC1V2g",
  "key39": "51cxNzA3GLRx9QLh93Dzr6dRtmaiaUYTiwpqJxwNannJfnjKNJMu1vy5aZhyTZnJMNCuAFJHm6yqECN652FnjDL2",
  "key40": "62NA6fWSWjVzWRYUfKMC5rXZjTfFDh1FXopWjJhbpsrKbmwfXSzX4XbPbLVtgUTPCwQ1rf4Y8LR8BT31QomwwRoq",
  "key41": "45yVdiMaaAJrUkxzKX3hSbZs2A9zbBE1gKbtvaYvHQWqKeHz9pRWAmrdFgpUuyXdS7gpsr3gWjSotwyRJ1wad2Tz",
  "key42": "rsCoRCGmrEyS7mkRoW4fzWUcnvxRkrYGyVM8ZYNZNBQ41ztdiU2TACfrTeyfgym7KnVMoAtJUnwgyFrN8U8yc3X",
  "key43": "2XmzGoktbgrMrJBFYo3bZHrUJTXbxmwGKqA7axyeMxdzoB2pdaL5XaJxoMyaXBfKkLydETNiwXTixnahmcoJHhGm",
  "key44": "SchvztSKXLMNGpX3zP2d18Nbr2mQynvJrNwmsGEbEXftxPj5Q8BVpbHwy4sKvWkVT9grgFgTLidu6WtjEZkFaNF",
  "key45": "3fUbRGWupJwiUyooDpHkG48bgycKHuMvs6skrmWCPmNFmvrc93HDSG83BubQ4LkKCgiBK3cm4XQnxK8pyD9XNe3s",
  "key46": "5F1UzxNcwvzh12sbmmwMdq3gqvAw1yRxkZKb6qMhwWwERCKDkGV2Motzn3u9gjYYYnBHFUxDuAFB8wXyA7sc5Wjf",
  "key47": "p6w7MmeiGVZq6DHX2YiBwtF19ReE3Thvu4BrxFccBtcgEToCYspXvYsY7oz6qGZQSVqWTw5WHR5KVSvWcKCfd1h",
  "key48": "5Pu8UvJ2HgrmxL7VqPyRrvzAjaPdkEmYjvYXEbcpJ3r5jdiuhmrwiAy8Vg2GULULWC8aWyUbVv9mkBqq7v3zGxHx"
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
