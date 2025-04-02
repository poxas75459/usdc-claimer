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
    "4FyihrezbPcDX2VPNU5gqrfEjKWYa6mkm1fzEzFZdR3euspG67PJc5B268WtnHvmr3WDruRRhABhXoV6b49xhrjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPoMmD7ndfQg4J572vU7w46pApPQgDyk6stAZpPCKpXSwrm5ZYyFJXv9eQC4TJTXSRcm2W4KwYEwZayGaeKvNDx",
  "key1": "4afDJ2Re5xwKAFm3fXea8ntqfZosXogr2C9yvywxrfHELeRAGR83tHSP15x8bUUyca7Nmy3k12FFpwLtvKEXm7iv",
  "key2": "DhDQG6D7fELEaSbC6BcybDSsDUzDrh4iLxvbpuPBExUNyC2yz3ZgyPqJr72enRnkQvfndJP5j9fGUHsCgvrjXzq",
  "key3": "SBCbKyXJ4h3eMBvFAQumvsoVZz43Y6PLVfEdHdS7oRpM7NCc6ZyaYHJW75fd37kdtjdszqjSTUPthnAMwd34TA8",
  "key4": "emM7HZCakDK2uegz32ZYWDmbrFUoZJY2wkiebT7u9jxPEaUpVBctf7N44ND2C7aeXfuMTa4zuT4vr9tda6owoHv",
  "key5": "461ArqDbpyHzwg8PncaqWRffmVuo1bZsV7AzTu7Gfp7WNKjKLknkVym7qZ6YR6wVfFrYdKDwLndVvMqyccpHJ1aj",
  "key6": "584SHB5bJRfWEm3abRtRee8zfxHXokTdcCJfFpNMXcSMkyDbntC6YhgggKuM4dEbrGwNhWTUejFQyTWPZSEf3V4y",
  "key7": "3dWuSE4JhMNAJsvcRwSnTsP73YdQrg62w1JCgHGsEvSL5PAq4xxijFQ4aFAN7T2mb3sbpxk5SDpRfxmEpPrmv8eU",
  "key8": "2Er5k5V3K5SuHMH9d1ibsdtd6znpH7SXziagovyyFP4Q56GCyGKw7ydt3yRtY7DtWDfhyAnNK1JkJKHZkFCrnjJ1",
  "key9": "26nJy7fCFLYFuTpG4cbobu6Zzf7npNbURtAgMxD9gf6Zg4iEKjRzYxFcLXeECcXDgVaDYBJUjbUQE5jpYUi1nsL6",
  "key10": "hd1r8W8yQ3tARAMZwgtSTniMpRZyGBSXzxMhuTCDKxNAK3w9R6iQ1HyQJmGEJnhBm5Kue3D238LrXkMDPjab7ft",
  "key11": "2GFfrPBkTfUZbGsJpjcgUXpeoo3zxjuuezyScvcyT2drdByoiG6KRY3QM39MkCgrqFdQTZsoTyBMHu6aph24skwV",
  "key12": "4VoZu4CSLpwtVmTeLMtc3mhYWc4AgoSxNuuRJPFJMnskhycuiMtiPE7hi2qAEVSPFcPUi1kZg9DJoQRHkEGCUjA7",
  "key13": "5GQqQniyfm2cM5Lexczyr4DLwRZHuyGWqtFd2KSwEiRwFAW6nVGxCJDp3jaAS3LErxit4FfteP1BpA5ediyVJYhC",
  "key14": "4S9bgNu3T7JARreE5Vqqhk4GxPwh9W5Jrgay6NejgJt3xUMaSEW6aUojovtHGPpdpdHz8DVhsX2TEV1iYbpJmaUv",
  "key15": "eY3mkXLQbwkF7wm8LaKU9b11sq3WBYE4oPznV2wEryhhY5WNVBwAEZ1PN1FUYTcqeRrySE6dxG1iaWhCGBUQ7be",
  "key16": "5C3EJJSBqg64rnTBjToTnqB14dXvz9RA6YCajwsge78s38UtzSbwKaqamEtTL6tVUyED31S3gCPjvop9zMYH5X2P",
  "key17": "2ix3UGyyfVebJFpJCXxzJUQhMrBknhCy6vQbFL4bLQTviHWUvDjgr6eTPLSbGJToMJ1cPuq2t7UdLqwvMukNdc5y",
  "key18": "3hhPzEHveJKuqURBHmAZHaCAHJCrwEaePrXfcbF5X6zQwj77Wf7sDKe4PoouUcX1NLmV2HH5Ph7q8Dxg9Z3Ub4Kj",
  "key19": "37aXt7skebE2JGRLGe5oxd9nx6oeEM7AC2i4W5PupujXVfVfKsD1uKGfkjTmhSLhv3CUZ6CQ4Rzrnd66sMbLrAJd",
  "key20": "5HrMN9giYYPMPntRSF68mm6aQUWi1JAdpbQyx7KE3AfomJMYGRd2bRiEAcTW5fsbvjCfYFEWrB9ZfygMmyKZLHKo",
  "key21": "5B1Q3p37J7rnq8FoxedhZNEa3gcmgYAvanEC1qR6Yq8CWQpyw29gyKgkC2WfbcQfqJHxdZowf9LH7HhetguKni1L",
  "key22": "3fNCWLcaaZZeHRjDbVHd1h1ZYqYJFG1vWNpMuyQZPvCS12Tn8TLNzjC3fsvv4d23MNbzMKNYaomLLnsh5DKhRP6L",
  "key23": "3qdP2rCWpwTxoZHntfNYwzC6zx29fRK6DsnELEoirVEVd2o9zQxwDPt1aTHyYRxHAJPGmP62xjzBeaghhQWrzxw6",
  "key24": "28bXV7cBbrH9zMAcCWPxSHAk6FKhSpPzUQbjHP6Gb4XAJrqfqnhFZv1yz4DAS52AP6gedboYGuyPz5N3JvYSBRSf",
  "key25": "5c6E1YEzNfzgUtKXMnfUqHN4kTVNyj2Dqs441hndnV54V6XV1yNrFBuXtXi8SeheSXs36rSNtz8uNPp4yKmG5NVY",
  "key26": "3aNhQV7eHikQUavAvJRcyyDEQH1VYLcXSbaSwB3WNdqMh1J9Qe6L3c8QNFKLB5CJLQvSPMmVbcNtamZ3fcDz76U8",
  "key27": "5n1j299tmd32KdTeKqURyMHKFkueMiZae2UkhrWy1ovL3ghg5T8RKwLEpMWDwHjEXpC63gc7wdJnAg5p7TyjLYTc",
  "key28": "3WpCnRSsvmNh8vSoQLZ81uLH7okgwEjeKedqhNuq7dWidqkD4emhz8xB9FGds3E55LYB9nPHBjMkAYdBEyxTSkzu",
  "key29": "NsYDG5KpP3BjSBrDB13TU4kC4x42DHPFYyNV86h5vzNusmgBW1vFrcDv1oVvLSZHLdZgDGoJhgjZeWxsyZ1qCQ9",
  "key30": "4h2Zn45x6a14P9DaFURd4LXW2s6sEDLEG2QgmM37Aj7YwCXGJBKoVW4Zw5tKTgQbmGYVMkduoLKnHXXJZLWB1q2e",
  "key31": "2nL1oYwZ2SrSNdLr7MgHrhSvAJ2ZTagytYkaobzUvXnKArwCsHYxBrQnt3hbHpLEjn2K2f3hzyaweRNAGY963wSE",
  "key32": "4dfLy3sJS2jSfPVyrmAcXMAbrVjmLNWZAqS4XVLPM5g31qwYtDtjBvgfh9RJ33DPdVW9vFMrMYzAaAPSSjZn6j4r",
  "key33": "3gEeLVsLmTYzB6zV9NV3uMZTe1c37fbXXDca72rnMXRcf6Jnkw9NaBkZQY6G2qYmUEDQVxhyCwvFZXPiXroA2SVv",
  "key34": "BJXEu4q8P1MPwsobSKxmn8VZgtY3ZTmmwfkLpWTJDJFqvbhMrLw9YQJv9ztBSwEW2W38AJ4ubKsyCyfkUvZ98xh",
  "key35": "4KZG3jcEMn34smYw2mjaTjvNfKQ5ATFs1gHHMHB2yh3jTHP6AqpvWeYsHU4JFnPmehSMnb7R8k1UBSA4GM1hTVBa",
  "key36": "4nj3KNiBYtzFctXSyroXA97WDk3xM8u8mjqE7MWT1BRPiRZFtAmywuFtcTawJAqGD4d9sGLWnydUkzfMr3UAjLHC",
  "key37": "2ivrRwRoPUTZEGUCXqvYsm7xBUMytaHPAkePvTbr1sVcTkrxMwuTZJk2DH9BfCGrN1JVehmJUtvas6iZZNSLbUHg",
  "key38": "27Zw5L11G5nDW7yJ53k42Z1B7VBrUJYMda5XkkKz2q2xAyJNz8vPu5RWndSAeXgSpnbHWKFZPQFDiWbZbXKNC2GE",
  "key39": "mhrdVpTfXi1Hb3xvmB9gQk789aj5UFPD1AAa6GfN6vP1k5BdwC9nYJVzfEjPjeqgXn7ZJBbYykHbFd6TYJiZLST",
  "key40": "5qi7uhp9SWUnj7sueLbhYNtPPkXYxvY4odnuJe6Gf1ZKznu1MiW7BQXQ3f9cw1cKDqh2MXN6kLDaGgaboZbejR11",
  "key41": "4qNVC2wsXcz7QdHNRh7ZyBUDc3y2VbdsHevhanweFtwdyNt94wxGuH15FEh6QVdX2DgtG3FYmoW3DW3Vf8z9Qd8R",
  "key42": "4LsY9LgxV3vKjTgCk1FWVVfkFwy8eSDPC8Xg2Vziit6A5LPXdpccF85S9MY1cMR7QNuroJcG2cEbPLTF4EyMjNDf",
  "key43": "PM4GbgJqH5j9uzXPGvZprUU34yLufpdnsQZyVmye1h3x65HtmKLG7TVcQBEpkuhtEVqKTXEqmTMnjuWHfsUdhyF",
  "key44": "2pFHoLs3ztoDQkmgbbusG9NfHJA9GjF4YktHQKc1CdU1QuEzGWmMVddfTf6YLLNjeBY5PLsnwwoNciU1vdzPvmAz",
  "key45": "46w4KaNWku7mg9ea6cRs7NsAxZ97jLovcv7cmj6kmEZJk7vZe9JewqisEaTRjFGcJxt3t4FHquqX39D1nxujsaXd",
  "key46": "61tY8dYvL9L6bbkU3KgnauHwQodgwaPALWp9EPVBab36NtF84EbDf7PMDtu774cUiNNtwPtoHuqqZhXD7yyaqCT1",
  "key47": "rEc1rVQ3Y8yhkHJm99kaFHirXVKssZR8LkKjjGxvT6WDy3VzWchgiHpTBKDA7XhcNYyer2YptMfCwEfZ7pjbnC5"
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
