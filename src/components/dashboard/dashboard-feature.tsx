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
    "in9uWHbr9WBu6eqc4UWYLmw4RMdtKxFiNtZZdP32W5W5zNLcHz9ZrAi1B546kATjVQNQ1C4p2GL9XmGShXDUTwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SYLLKmon9JeXSEaay61iHdhEiD55Pgoz6GyEzZeNEUaGpcEUUrK7VywonTchUZpjDHm9fLvPkBUse5SWmyANQk",
  "key1": "2mN6S5hiSqZtQG9zMc1PfGXgaTgDc4Pq5PSyk5CPPbayicjitPFXbGmmFnCukUa91Se6net5hoppNx483XETyoNi",
  "key2": "JvxqJocdAJjwv2cn3z46t8THUxA1vZcnLKksUvFti9pAagRJgJqyWrMknKwqejkp7DC5tdcrxv4t6FeN8tTPg83",
  "key3": "5GJ5P5KfeUBek5u7ajn9HeoNSb6T55oeoGQWFfp9hUFN7M7jn7FFGWxmxeAWmti4aSyVSgSZfcn8adnBxkUzeEs9",
  "key4": "TbL2eQtxtQwhSwrKyLUV88FoX1AcoMobRTxdXummCb7idSYZCQzkUhQjZacViXjzDdg2bpJSSFUyAxPDoSgGnaT",
  "key5": "3F3PJGBFBWMmS8oqeQarGDRd5qTuucmqwtPszVhupxovbwNnzVg7kPpCMzgMnNsdLWWMK4zUn9nineAwLj2cSd77",
  "key6": "otkvEkzacPQBJxpo1PE1se4zsEDfhZqCZCD5Xfia35nkFeYgYurhQAAWV8oBVE9zCu1swEmsuadp9NKQqKK3bh9",
  "key7": "42GSpVRp7uteD5E5PyGfnVYi8msg6YWbaTkLji1yoM92SxRN4ks2CNRMLVwwpHkBaPvb7vbVznGkm5kzTtZviZWN",
  "key8": "arVU69Yb1EvPtWQ6noeUKFsrii8saBWyJnMAwXRkVULLzd7FWpSKkdrKVWXqr6zw3dFyc9EyfMthhG6PjMauWwg",
  "key9": "vwUCH6DpGw2wVUWFLTY5qYjWia8r5ea7qXawA3t4qjK1x41zh8xfbZMiP6aKq4RHBqssH4J2m6hcMehguPhqHmU",
  "key10": "3N56RRB3z4jQnugkxgKniJKFTTjzze4YXiNApr5FMoZZpee59SFEb7oRgVpG4YyPjte7q9oBTz7PTugi5G4PrHM7",
  "key11": "3of4qD28yh7GXTyrnpTfxVuZhp2xD9eGhY8Qz8QxpX54rnJavbzuFPdqFy6CLEjyv1HCFEPZxmYRJhF7HfkX8M5i",
  "key12": "2xXMt1djDNGiZBvPnJ4jER4t71Pr2BQD5XCXDbzmRUhVGd74rf7PV9mmrpzhbqqy53J1c9YaZPMyGvoCwnGiFAjH",
  "key13": "2srYScpMNg6ktu85kgGndS2zdEnvPLDRRCs3h6ija3dYUjaWgRJ3Ng2cFUtoP1iKJojVYZxJ1JZY7PhfZ1rkYgxj",
  "key14": "3CvAbdnmk4iX5d11vZzMhRNZ2PWXGZA1GzC5bCNEtET154jzz7AyWoNf7pA6yfyhPhBbcDqLaNMYPvbLmEVZXnU1",
  "key15": "3S6U8E6y2uchBRUDh95am4N4n8xgdhZ1XMXLJj9KC3Mfbixw1Ntx5eewtW8UnZTSADxhTaAdtSwuHGpiC4yyzPUd",
  "key16": "35tUbUx5eNKGgHx5fpfJxUdy6nDNZQaAb5E8QMTmFcMMyPJF1rTiqKa76V9GQemeVdHYkVD9VZ4qsa5pV6dcq1cn",
  "key17": "3Nb2FMhLEbS1y8dJTsnTYGTp3iiXDnVBEHNeEfAKRX3bYnf34SBtGjcu4adgTakCeiKeHxMHMx5jDGy3GhKepWiX",
  "key18": "3FD5BsgpdETFQYwHeK7SVrK8aGjFMk3v4Dso2Jf2dst7yTPsaRdj2ARMuu8UsuyR7usn53vAGGevwXKS15zA5QCB",
  "key19": "Z6BxPfrWdnMghewmLbdLSiMkSB2gmdJiuWw62f4gfAD4aWFuPBq1FDLv2GZMnZxQDzKWZadyWbpvobYXv4W7nbr",
  "key20": "zMidXz7DzeUkoaRTASDbnPyi2rrnBAERWTGSS4b9uZ2cnpGnUR2SPZkpasxPm47eQ5aVNgr8uUUYomQ75aGSv7Z",
  "key21": "BMb8geiKL5mZSLCnxdvkmfatfSFo69PVdktYmBQFYs8ufLXsVbxu4sxexbu8xjwFmek5o2otxvxLGynjqbnWZLL",
  "key22": "3tN4W7YFTyC5gS3sa4jqxwEduu1kr7Uzw6DKcLXmXcWQEuxmoNkjX2rNGszn3GNDNiWSksC5P4XdA3YphGRZii1K",
  "key23": "25UxgzcwTpswKbVVr5RAJCF3eazfgoxKN5Ng4yFXaJjhsRC3Kb61Ngcy7sJtst6QrDo4c8YtA6tnR8qEPqWXqt6A",
  "key24": "81jsDzYD4xZVLbNiMF8zXyE3PSWhL7276RVGqZTEwfzCxyagY4cggDpCarEyyhS5dKdX1MeV2UoCYmTCdYHcyF7",
  "key25": "4p7boYKceybSNAXfo94Ejw1yK2uGz16XA7qnuYxjB8QdXm8eo7aFFE4EXvYf1KMhEFWTPfeJ3CHrtJ57j6mahcvh"
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
