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
    "5abo2QA6KwfJpSxKvmeh16yuVJoRLWxQJrwVwpL3zA5qbjjdjKRMRypRDdo3uxQqvMBHcTdtkBcLJ584gtCTfQx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1Y55BwCCAYkfnNcip35SQwnhmzcFgau6KL1vuWoQZhabE3aeJ9CapbDt1NPdPX2J9b4o5FgcuFHN9gpptki4dp",
  "key1": "28iVyUrajWjB4j2QNjVueJ8aNux1Gq8MLE76H8HqYbLvXBqnmwox2YcBmbPLqgUZ8YfGvqrY7HJqmJDGv1zTcS2n",
  "key2": "2fuH8VMMV64nJapx4izRcS6KA7Uesb9mTYtyWUNxfs9LsrrXLMg7PDZCQwHksSRyq3QaqYSZLRFgP79M8tq3WGNJ",
  "key3": "5bee2QNKZBPgkbtnP5KJtu6PGojxbEFHaA5mvTRr41bEykTTQyZjQisYWaysfhNwKZmoYNnG5FDSDiLCA29NFPJE",
  "key4": "47KPygyn7wWAyYpPcVUTtMFrQ1z7ngbjT2dPPYKD5etAqH3yVRV6LSeuJ27GXzXZ8siG7FVfgWqM3boohTGmP3UU",
  "key5": "462qY8oq8zNeSETYPPcsScBoeyPpWvzTjCVYutkYhBoLYVns51QTwy4Ce6x42cWFsPUxDj4Hw6kjZCQLpMbDLmnE",
  "key6": "V9tm9dtmnRauBLcd1B6g2JHTuKwB1uTw2LFXxoNZVY6KMm6vy6SoVCeG58VSNdgbcjUU4kdjCDh8twyNRovvxSQ",
  "key7": "3cMTmhWJs9CnGAWJMeuBbL59JpnXTdpt6PaSSacyFWKqeEG4SaxYsEYbxi4xDNuDQKSf523keqXwcpGRSPCMMuzH",
  "key8": "4Avyog2evbJwajWEMFwarsh22jzoULDSJsb5gW4mMVbn6CG89Whp4j12UeiFfFK48kYpYjoLhJWSGAk9VgSBwTAt",
  "key9": "2xS5bRQUvEPQUennKX7vumw2fZ3h2zzptfH5Uaa3K8tS3xR3JuXtggm4s482aMT7VM65Vx52NVxtQGwgDbydXWgv",
  "key10": "2hnic5JC1MHVrT2ub9EX6Y6C9RqAVY1YDNyZ3z5FEbHLVZF5kFCxNJtcVLQAHWnb6UumBF9MocYE7y9gmhjkFDj3",
  "key11": "Rf4ByM6EdUZeUNqfBdQ7YwSJhYr1vuaU5mZXtDLf2xcZ3rtiLYg7NG6nKX5cixv8tQshQubQ3bT72f4JX1STwYE",
  "key12": "k6r9DjGzd4Mo3FF8PN2eorh2myxo3jG7zrk4ZERqsUrVMCQ3UTVV5TfXm9KYZUc4MCZayJvjHwmFY9uAfXirrRb",
  "key13": "5xZuevnqWKHtHUun6fuoE1BNt5Pa81L3659CW7DbUqjR4NjWLq9pP5RLUBUeqtkwn6EQNV3stHZavtFsP1QhBU28",
  "key14": "3Bd2dojVU1tdCMqN4QLUQngXAEHL2aXENye9z173BzvMy9kHcrXyvVxUsMU7mmbGffbxwVeyJyTu2aocRfKkGnKE",
  "key15": "26UBFXaXY9DortFRiPGS77sKnDWhW7eDCmf7JtYT4Gz5gQMASTN2vTFdtSskttmJoVpj7bVgbmNxYRKxrXyvkUSD",
  "key16": "KkJJxFnZRfhzm2ZDe3HcbqdoEBqq4JjxFABcTBWNp3fQjVKwBVfv5brvYh96LnwyHjq9WbHbsmrP1zn2JHux3L9",
  "key17": "5xMd3frq48Uf8QCCT9LDQJM1piH5deub2cfN8r9WwAg5rXvnLBoau5DvqiPGWQHU7wpptzyjg8wZAWmziLQdH2Vm",
  "key18": "DmW3veDVLVRnTiPNnvh3UWjJy6agmuoAEzNAcFHzzsfbBGxjR3EEn9hS8xbMKivUBVJMsji2a4ANPRngWLZuFWa",
  "key19": "4CwmLz4fK5yd6sdU8Qh4gUQWBW6LVUJATqKJsX7Y5Fti7bksPj2j8GiNfxCfGy7H4dRmDjLZhcXVnkQwRbeAwCW7",
  "key20": "5xEWY7AUC8vZtPRMRJ44e2YdiqUnVBK4FSEQ8zFjVvAc94F9YV6rEK7KayUeyq2wW7Ciq5rCviybV5uuvUiQXEyn",
  "key21": "4KqHKkvnuDKRBpL92jQySW6wjy46WdqUicPBy3xV1BoQig75HTS9NtsBX4rVHCRTYVmLASzA6737xrNVcD6PrcwP",
  "key22": "33BqxuQjLbympYkoWUaxPv7SuRaoCNiPtq7ad6C7FaFv5ZDAdCV9KiVSELseNkjT2AX4pbYai7TwScWXphwgBp9t",
  "key23": "3ALuurAF5DnjPL6gqQ73R9erouwTPw4VdknvvprAAEyuo2AWL5qyka6Zc7GHqgxeyCLTMe71whUFMBbMBHa6EgaQ",
  "key24": "2Jf1YdRe2yLbHezCj3xjxDF7W1RScj6uY4Yyep1DGadQH6LEx75GeFq9Hs9FXQkAutoLebswtn6FrDS2mkXDg16m",
  "key25": "2jvqiMjYs5EdFDiUnNHS1fezMEM8Wi7XLNXwXyg6tVAs8znZ5HbD2c174oJNBGhZiwjvh95v85nV72PZYC8aL2xT",
  "key26": "3sQXx3qJiQKpzR9MLEFD8V9CyZzLhgRhNiArtbf9H5cWv5ooCmRDoh2Yj8a1RFGRp6E8tyxdtJFoJgrZvMntKRmo",
  "key27": "2ZjrYvwH546cNYujevnhRQiZpF4sFrhcdVHaTtMokeEHeHLyFTqiP1j8zNyjkWGNcUu8LUrbyqgabq1HiBrrkFVM",
  "key28": "5yNggWdRH3dumMRVdzyQUUYh3ttGhJtuKVsQZh2uLhAiC1b1RZ87TuiuxmNoaPHzDjxJCQusUmq6eEKitdVUeQre",
  "key29": "5aRLEWuYZFxtNiU39UyzAEjUtax576xan1fGBNRtkySki5MAjR8H1Ez23MYe6yyvVP3GGy9tB7d8rHJPnvcQdWZv",
  "key30": "5n4J7emoHZmKaji5BZaJZKvNSEi9F2ptwWNBBu22PWq8aScFwFUhAeuVzUfSUFESWbUYSNUjJu9xiX5yEnDRuPsA",
  "key31": "4pxNR1BvknV3ZxDQAUqWJc5h8DuYfXNatgBgTCH3RTLxV6TEA2TAJDuhMkbc3BEByQXCnHhanfcyxNBaLVbWqvqZ",
  "key32": "3saYfWaMYcpyk11JpeYeMQkEY9BHgBiv2DyMkcCQc72sRuAT1o93jDD4DVAqGEMvSpBhzKzdcGozmWmTbbjv6hpD",
  "key33": "5MJMdMJhGc5PVXBporGFfuibGi4zzovu3r54rk9KfqcHxFHxkPB7pvYsJcmGhUWKjeXPetwXoJu2j1VQHGKB7nxj",
  "key34": "2oUHcCvvSh8T1QZdwMMGc8YtJuxYNPa95xTQjX4vQGs29BSjBLzyXCufYsjFRV9FgZ74gmXrtCDZosuGZKoqdpVs",
  "key35": "FibosrWTF9bK8c5oaV47fYrdYcSEKFDjqFtsypULQy7ZtyxXsPHL7xGkRSAghY8EWb7jwQ6YzcEHBc3Jc78QyFc",
  "key36": "uViKNHK5dzC1ytjraL4dbtd5mxJwarF7xm3gRW3uQB7rcTq2xiwpi4GiVDFckcrTLY38VYzFUYr44uAw3FRtFb9",
  "key37": "4xr5ipd62yXGkEtd8FRcvLE117D2XyqHFEb7GgFXy2SaaUQn41tJyMn5h3i3Wc5crNhuzi8osdPYHHPUBG9Wb2LJ",
  "key38": "3kqyu3ikFH6jDdJCoQZAZMXp1zt1xLp7vZLLyc14tbCGMkoDWc5U7jtG1diKcNfqB1av5FJfCkUqUkyKi3PEHbDR",
  "key39": "5Njezh2Mo1C7neYZrHohS9MXF8cHwbaiMHJ4ThMnGnhPfYKCCaV2a6fW3oQ8eAHuDMSpHCZAqCGkXLfCQd6eoS8U",
  "key40": "2DUdFdAkK5men1sVum1rrUkK3eEWVsU18kARcxyWjGCVFZbFFNyvgH6Q9ghi6LjLC77SvAtZG8EBecNcJJ3RBs9R",
  "key41": "sBwWLevpGJngh7mQPiv4HwoKQwj5eBp3cpEgQ4DVqG1d326JuvVexHUBL6FoCstzb3UvTn1MpoT9xJVu8cBumiP",
  "key42": "k7ynbxgS6Bvm14cLSYPrYwD4PVddYZnLHtk6Z51Ar1YxVa137RiJaKLYyczAmaHpA85tvuSXxQaP3En9noSwEYP",
  "key43": "2WVwjrb8D8Q2ThieXnF96fV7vFkzACR9Qo3t3N7TiXqUMYaL3JSxjS6AMuB1LBDHLPKPfAAF8vdNyrT6hCaiZgzT",
  "key44": "63BNfkyqtt1i1J5Pc3rxR9Skft1gz72s87wgLxEoBR4G85Uw8jiKNEoCTwftT3nHpPAU1v8Nt4veyH273LSMxYja",
  "key45": "2ahd1kmNodnAwu3Q3cjgNPK91Ntp9zQuFFArmmaCE7e2vz6q5TnwCDHW43c59GFvzQCEoNze8HNR5N8Va4asXj4K"
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
