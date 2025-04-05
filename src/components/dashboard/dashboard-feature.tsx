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
    "2raPzp6y9NZubQXeD7c3s4gfdHvQJgxtbN6VidCHSxfQnz7MwghB796NZHK6BVgyRS3Vie3jXL9D5qrvruWfT7T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3myRGsMSHBxafQpnLyKVUfuM4JuT2GKSixCcMMjWTqpSXNG5bZCimkrPk2qGfMZ8XZRNfkdgoXKqYSEfB9nSou1o",
  "key1": "3YL9s8bAkmeHgmL6mUKdjV8pEwZgwzxJkxCXrgQJUdeDGn8pazDDwZAQncgssoFNG8ufozrHYaS2ATty7fKaPKgL",
  "key2": "5RYTQWSi61yg87rzfSjtnTr5i2enDq2WdFBTf7iFvLvLB44XiocGJRniKVMPdhnMgLocQVkKYaD9u6vFkWfrASfE",
  "key3": "kirYJnSXNviWtBoMbaZEaY35jb8ZTpC4J9QqKc4Vw9BCH4JeR3bnJAgTHVd4iEWazZEa2ENN87HW9DK9qkYLBw6",
  "key4": "3shnSVHH18aM7945iv7bPeRnP4xFCjgyKuXaGkjX65Bj7RTx8bGeTN7srVB9PtGRUosAxXFQA6yDK8LWp7jUnypP",
  "key5": "2Hteseco8dwdCZs3RcZM36fwCPhDP2nFgRLt57N4fvHYkQc3W4ZTHmXGXbmXnwkkQgLJNyZ8Anwt7dPJ1VBaMVtj",
  "key6": "t2LZUACb3Yh3vDNPjmYgWEPidVLgF1iecZmwkmm2m57DiwWFqSuHAwcRfntLRPsE1KSSuaVos2AgpMoDk4WdvaM",
  "key7": "5xe8Lf8VBJtF4SS74ySuM7nVjcc6D2UtKcDaFL8gxRzuaQYWpJCXxBhKx9t8hGihoJ9oZTnoN7yn266uTxXrcCJv",
  "key8": "3pRNMaeNQq7y6Z2FX8WNthtUtsQHnfi7CRu1ZrvHoEk2WMP4EytDwiWBDWdri8i4hH2txjn7Do9sJ8odV3WT1oM8",
  "key9": "42ejZac5cfCZZbpVev8DY2yiNDZXTUF5wDDWsWRKR2Be9bePD83QrxbNKGBy4BRMjEo6uKnixyuiMkT1zTMgsyWg",
  "key10": "5jj113CwYYVp72USiBC3cLtJXweadoLwmJSRp3B74KQp6NAKGX8vP5f8LDQbrxrnN7YmqnCJg3Es4RBBEte4trb1",
  "key11": "3bub7ZMAJtco5YMiaDsbn75cCxaPq899BT5mXGfUAdz5SrzGLQ5soqa37ZGk89yH8sw2Tf1CKz6w244mhfNm9FWc",
  "key12": "3WwX4QwESuAn6i7viRoWPqFNMWAEaqUHJf3schVXeLYP93jw7AJjvBbV8VF4XsudX53eAWvJyFdRUBYHsjTgzWCa",
  "key13": "5oXSbxyv6fmdUNFJF5aVygqk7L4kt5MzLmhNUzg6DXXBSZ6CnJKHx1guJ4MeDxnjogv4ZG9Kvef4DdhBHajBsfvy",
  "key14": "4hTFcyNTfN28EQf83E3wCzENrcessn6jQzj5kfGzxTd9LkHzf5EQ5yGg4PEApCYDNNvS8VEeFuBzcoxZiqynUnDt",
  "key15": "2FXZpxoQ7fiZRUfsjRy1uTMb1VQ6ZTKJJJWvuTzddWxsEgLb8LRJHUtzN5cuxEPvYDB2ve639ZmFsLoaQbxiwYa1",
  "key16": "3o7gXFpBCa2dhH5ZyGkk3vJuPefipoh6pNu22aAbYUEQTDpvSLwVC7abfecf3X6Fm7266LmS1qDX8H3mTahFBNJk",
  "key17": "288s9u7fXWYH8XhZCFhBgFospG1rSXPCEfR5wF5jPWSChsvXcD6U6xTX6X3zDvG9womEcUNSu7WYgJ3vHBvK4U7K",
  "key18": "3bbHGnjkettzYZ1PTPgoxHLES7MubRC8vCy3CFDv4pmCphRtfZLq5NmrLa9KfWBNR2D9tuEtEmPQsqTL8ZrZRRny",
  "key19": "42Dt899PL4JaiKQeKCn3WmGCLaz7VBPncVCfeEApyUJy5zDoTtaqmT7ADGnBprdq6bjsNan9VEAQPt6UeLBGDXUg",
  "key20": "3rRVE2iWdYFw5S1ZXh7Pic6KjJBvK4tUy4JydavbLcyty3A9ovnKDScSC8bpsRhrPAEad2aMbgNqyPvmBeWCRWnA",
  "key21": "2PSkbaLhYGkAkzxFwpDwVmNDE63t14CH3QMRwtbdLVLpXQ8S3sdWtiYKRKv14t28gAcaktRvc9ubA6fWXS66tf4t",
  "key22": "4JR3ft1xzXa9uSruiQbYoLRVtTimaNmME2CDnwmnbzLcKdk7mfMcQY5QrZXD6hZfh4kK2XEYYxVoASesBxnLhUsg",
  "key23": "4BXQQQpaE9r51oMLvdH8REFkKNY5ZM2tsz6iWFSdGVSzCsSsv9LubMyokBrv6FRETE376fSarf36dSPckAPHkAnA",
  "key24": "5FkRKsMRjuQFoGvcR9wFKB99SbUDG9opgvaQk1EMYt29oAFySz8UdRmcxBhENLmGuPpuAywfZpAADUL94BPs3bAM",
  "key25": "2LgmFRxXR9yEZNcdPv4qG2Apo1HsCZgZJh2Emohc1V3e33zPzx9nU5N3BdqFB1xE5wmUiLJpmiZCEEo2TFM5r56f",
  "key26": "34xdu3w82VdSszb9kBUJH9Wc3H38PRQtyaYDPAxaRTwBT8tUi6MUuDxYyfWESPXeBufgpzB7i7kBk7SgUP5JCRMe",
  "key27": "35YoYScUVFcBM9pSxqJzts8sAQJ2ddvYLnZFaR5TeHhJ9A2s1oHkmo99e6qnqaaabnXdD85aF93DWqbu3m3XyZaS",
  "key28": "4gKgunXjKtrhYASokJ9CY23btXW6iQXBntUoyjdt7afpbLKfVmAgZAjaPnfBMqgD7XhMFPMVUCAzjGWW2D8DkXWL",
  "key29": "3UsssHjiggWovywDa9t8cFCNu8gw7bgiTxrSb6hD2iCNWsoeg2GJjmdNeDFmjrej1WkmehS9B7msGFLauLXhFTGC",
  "key30": "3Wt13cYHS15BYrgx8S3hCPHeixwynTRGj8Hk7vxtGwX4hBHVxTs6ymqFeutScFV5gTT7th67A5JtobwrVGBd1KFC",
  "key31": "4YpgcGu7znRwEBSnHwU9wsj75H5F7uBLQoTgJESUZTkePDmwQBovd1xtkehQAn7uiZmxzehekGXrjWhjBrK8nXtm",
  "key32": "V6X7sJZFiR1Gf4BC6gKUeKUZq76JFbqAZaSWjjQG361NiuPbYZNGrPqo1TAY1QJvqJgVXivxMsW8wTvwZPPPmZF",
  "key33": "x6yqULncUdk2SQFxzuUrNi5PvsPz7aEaCq7rKFtd7G6wNt38522mCDerKRom8pBk5QvW1RcXsMeWa2A1fnKH1W6",
  "key34": "3PoXyVKHEhbtEAs7E3sDJQ5RmUPffe91Dbw4Y9vYd7UEK4WUadjoGVKEgNowcD9tUzEFk324W9WoQ6az8bxQMojQ",
  "key35": "3hqgYtMJARuC5cdExarZ3nTZY2MGkyP1HLpGMtgMEAPGLpY65AKxWyCCoVzRnTWpSes3fiY3zrbLocEUy1m5mFGa",
  "key36": "WKo6DRYupnHHAmyJFhRjZcfWsRUEcWnH5yWtZcXoHRBqVpjmB7UUY7GAVoCD9MiDjeDmSPQbaHN5Zq6YeKmefdA",
  "key37": "2QTzvaSTEoEe6Tch3JVM3fz9MbnFKU3ugvnHgiVh3zPg1nX6qMnF7HXvfMrVHMuK8Bmmq91FN323vf3EivUcnpZn",
  "key38": "335nqqFonQpJuJeqS7kT8Fia16BcQVBiEm1GbUfboVKK17BEXFYhQEmgJbGFg3C9RL7raHmU9do6ktC1MKCGZJQt",
  "key39": "2Cb6ubaAekHAq1NZRFYWbgNPVRnFk8hCRABur7ECBofxjrbqaTiG45neNzhX2s4eCudMxZt3WuBZzE1UYTh5t6VM",
  "key40": "kFtxvudyNtUxTWCbijqXdHekFFRa5ykbgtHXjcLzuPKxjiXiTpGP6hFZweuBKFy4Fvk3CGpf6WQVcGbpPatupgd",
  "key41": "2ByizqvztGBTQUj4ffvB8yTMiCX8KrdMP6TwNyx5SNbD9ULNBriQfLDTocu6Sy8UxPqCZbTwZu74U1fVJarNsjGi",
  "key42": "5Tw45JQz58J3NE6ogfjiZarRxSbjyAZokVYCB17ESwgYxwzdvgjyYBT36dbftcYG7mGumDBjRxyGjvfZY4XBAaB8",
  "key43": "4kggVMV75Pp9JQ25735V6xqaZWGFnkGotkfHvW521SH7whSRKYDBkAYfWeSWfec6sWf9FQdL8EiQDWD5FGh1zwZ7"
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
