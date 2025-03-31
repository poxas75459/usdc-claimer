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
    "2wHZVCMsA2CpQthkwT6JFqEMXb1LBHCYvzBgX67Xa1pBqmxkvJjx9AyAVtT6jc6jUN4n3dH9vQQNsuz6PGKCEQ5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62EZMWEadvmMHyGH8SjY5rF7jD8xEaTkJGFqKETBaMtku8WarXhzLdvU78A4z4fDXRGVxfZg4t2FBNAjPweAk4Mo",
  "key1": "sLT7zy65MWCoa2JGrVYJukyefd5n9dBEDBWVHAGAdMt5gi8r6ic3hREaXLKMM2WqVa1R3xthbxZM1SZ9UMq4DQg",
  "key2": "3JvgMHnS2BL8axR8798Dh3AmtCg6jcQmu1BG3vhQrEajEU4vePe3B6tWs7xBnyMcKPDaheTcmSKjQFwqZbo7MWNc",
  "key3": "2GMf4U3y6W6tPHZpdvefE1c2xQmydouJzeVq7ThkRrXWbojREh9WQyMHxX6aRyp93wYHrhH1LkbLGAVyQzy15pHn",
  "key4": "3FoDpkCMBUro4QVP3ujU8UNeu3W7AWJ5UovrZveey4oTUig4pfFYEi4RS14xWok6rUjVQUWgBrwEfqkNGuKWSuaz",
  "key5": "MiAyPywm5jhJYK6BeuFNTTVrYCoZTy6nppptggGimpvyiHymmFR4UehjwEBoiGxsh62g9LZBV2PThamMPxykAHj",
  "key6": "4iXtcjyjZHEevEWMj6qr7k74qN58Lw6HY6YSzUgzXeqj2XogdrKdtE3dw1bxdv1taoVjy7j2vzJiGwrbXY2YkJ3E",
  "key7": "5FaF5ZFKHoJfqf5AQpn8AGq3pmtuh6yJjXwJU5YGJKXeY3F79x399Wrtc1NhmNbqxXvTuTpaP6J7jUwhELcHzmJp",
  "key8": "5YzQwSe4sNtTGApcuPyJVGrRoAgUK994BpgHv3sAiwwSr6RvZvzjJeozBJomhEQ37mt6ZDth2DSr6j9H1yenygRQ",
  "key9": "32dBW1ywxc1cKsEyMbqhHy9wMSPJJaihMw2Eg8777MNX7G1WjfwSvr1uKWWh7GuiNXMNkEfmC6shrV6Hg1qLufJ2",
  "key10": "2xpASZqYkbyHBnsNt6uVZSJsL598ASyJ2HLM4uK6wZytXedgnP75WkRJRWYHFcZckBcwNLR2ideJqCbPEJBxSFTP",
  "key11": "4tsd4LuYuzXuaNttcTppq54qx74mcpoDojqJQCx9QbZqj8MLWEs6tezo3GyzGq6H4Pxq7yKbPM1oJR4fJeZc86tc",
  "key12": "5UtpvhrLEaLvxpXFqyqPqxnNmuUSs2oEXUE1daPMromorf1ddiyDhGaW6MoMc5tx2GmSggwVtXoho9obp7X3MUFf",
  "key13": "3dE5KLmkELgjq7NpLQm1B5qCxbVXsfA7ACmdcYSEBxYVBMMWiMVfPUfwKirswcqax68fQ1rtyPh8SU3tk1vgSBXW",
  "key14": "3aJK4sfg1Jqx8faSa4w4fqk3pbzcWEdYvYcvCs2DgSFMqcEtQz84gNrZUcpLQPtKC5FBhnSoBJzBuedkfzy25Tn9",
  "key15": "4zcoe5bfawPmR4mGyUMDrmkzZmwpHsqoZGeCBdw14XGuu9TAYeMNTi2SYHj3YghDWuvH6v5yPds5keP2NShbXkeb",
  "key16": "q5CGzUAttZbHt7kSWV6kqFa7kCdEqnQeee1SeJFy9xFJtt4Jtv9TVT7AXKp8ajYBU7Hn46KBo1arkPZ2PtNxxZc",
  "key17": "4y28gw8AgMrLfK1X62w4cfwNtegPifdRJhaQ1HSZTJTeefedn81fVK7oM8pu36STi5wSW6Ab3hYVFExB9rD4bRgQ",
  "key18": "2ZcXtyRUqCbfNgrGGUpoVQ8ENMbZD1VJDhQhuEVssCYmV337vV6vZ7YhaReMoM7xT9q96cWzEWiKm1NAmsMnSX23",
  "key19": "4ERCefK4iQdkXprArVRV3CTLj8FQoFbWtQBBHQLD2i8dpD55KbAvxdDkDBA5wkVhDgPxqDhqcJLVPH5kyUBFWJwd",
  "key20": "3mLTonQjRsJKJ4dqaVMnFjNVLBUhwEx8BhWaNjhUxV5zV6FGCr4Qi2mhVpaFD1Y2qVAJ7ZWoEWz1L8hGXbmBDhjU",
  "key21": "3s9r5fukgRftsThQ2Ui4fmBmt4qeAsecR2sC2LpXzSsAeSX1BWJJWLN8wJg8WQt1RjqLU6Y4ieeKaBDnVqtt5SRo",
  "key22": "3t95t6ToUWyPYPjZUNp68qnrnkrBkomLNZs23P1siedG7zmh4t9hNN2JnjTpyb6d8aFK45vm7gNSz46d1jiwKiVL",
  "key23": "2WMnMta8x9Bpat3X8omZ7pKPZBqPcY2cVRxE6rDqhHYxDMVjCLrA1qXfyGWYwA5QwVwcgSpMfx9bLaNdpXeaSHzs",
  "key24": "5SUhqduNntd9XhoeEFL4f7M8Xpjqa8fMix9D4QNmRkAgxuzNTPHcvFmVEg59aw3jGHda47CtdF9J1xw8pm27NhXB",
  "key25": "3TYASKYbMj9AQM3iZJfxg5wasACUbxhxq5p263eMCA1xZdXpu3rLMyw5GX1WHExFLDC7C7cg75q2fQoNYhyriaMM",
  "key26": "29xvJ2s22d3mv7W85q9DHrwBTzSs8tELLiyqvq291d5kvUYVLu1ontnnkt9SP1eCWXwGWkYUfH8PerAtWD6UCCJg",
  "key27": "5zZYx9s1db5DWVSJo6rXRt1ya9pPFkfoYcULG5eJcTo4kwj6nC6Qf4v51DWmdeiVpXm4D3YGG56UXK46wh6evgfV",
  "key28": "3GJcB58aReVDF44Gh4ecMH6hHN7abqD55GnpynXiLCucZtH5d42xNkUFoiTEKKwmtDfo4vVm277dpp4GKk16826G",
  "key29": "43GfrVtbpQLgeL4qeeJUKutdNhPXSVwFoqtN9AbACceDJ3973GzU4bRQHm5tH3E9gNoxbhaXE5KRXv7x2QbfQzRT",
  "key30": "4Xe6Vpyij7aeM7mQ7QtNDic9bQ6p5JNUaRBfaYkwJQZnj9N3uSNQPnoeAj7CiCfhms2XiYtioPAXYnqcvvbNT8fR",
  "key31": "2E3mPcCTfckDeQMzXyyQvXeTws17oABU2kL5P9RevfgvUi9hnY3XDpUscrFccjXvZDuvEdCkP4AF581vkAGaL6qt",
  "key32": "2dpdgXMc9kjJX45vR9ZVR95c6U7u24vnKiXWnQffKjXxyfumYook7R3gmNRw3MSk9YZygDftWzo9BDUNaUfY4mc5",
  "key33": "R84fAnMd5TBMbqiMkBoTvJNP2CPxWoCFy2h4EG1Q6ybymaV7FjvpcrTDPmnMDnawiQJAtvC2CnRyfx5sBQoA3fC",
  "key34": "ZW5mDEEQ979U9KJhpdgmKJ44HVU5XPddo9uJQU7HvuRLzs5i2KSvoHFYuWbvkk1nUcMNSjb1BBLEeUST5BFPJq9",
  "key35": "2yCoUe2kqFQmViAjrCRFQxRLjD6bS8XhbUTLBYjCde1Jq5J6yzbN663DT5dX951RkuMVHx4C8o17cK5To3nRTFyr",
  "key36": "u47LX9xzbaayac3WRvpn8XnLv1cUv4SwvMM7gZ7fUEytMxe4ApitpBLSTrQfeDWT6gJrUfFXH7LTR3eeyowoSxx",
  "key37": "5FZTccyWHECfaHJ41DCrJeJaBiKZnfoDvXxSjVorMPuoe6QUgmwx5QSFmvhbSoGQEzPoqY3A4tUkoZB7wYZQVYrH",
  "key38": "2t8KCRz5yh5pmWU9RwRnprPkaTRcNSsApDantzVtNbGazV841VqJjVbLkyN5yPjCx2NKH4jQ9iEDUZZYikWpFdMn",
  "key39": "4EQrcfh39GcypNwZvmmJJJ8Q6PbrmD6NeLhYv33esPDH5CPThkuyFEp37K9praak1E2u66inD9dV2AXKmz8bV4Lm"
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
