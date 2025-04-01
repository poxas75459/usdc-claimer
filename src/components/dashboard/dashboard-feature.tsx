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
    "5ZaCNKSfJAUdh9ciBWVdHA48h4x6eAAsMeNafbm5RgfxwdUxNauwxX1yWTbb2cnme1KT9FYErGBZrByHfZteDbmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3Qd9mbd7zLGFAZdc2ByuoG7TKvS6TJ2xphN8vvEn6Ed4V4pe8p4TfK9ErLE8Liqqyf7ynZtJVz4oa9KLYGdwDc",
  "key1": "1KVd8tjuuDZipZ6u79GMs6o2eGTYdkPwvAcmagm2Saetn9HgUZrCF6gYniCoGr98h5jiiaV5AVKCcAsHq11Q8fb",
  "key2": "DCHXWViokf4JfftLo14ewjVSAVXvtrRhoqftzdZz36V8kVABWSkurNRjCnbo681YaFBy98Z6cJgdzxdjVBEXn7r",
  "key3": "65hfS1NyokohLZuY8GnU2LzPENahbEnfF6gRcNVXnRKtiZ1YndjtEFq6N7Hw6HFuhcmwHxsCvfFsN51wbhB1YDWk",
  "key4": "3G46utz8C7QQ6D2qSBWL4YDNfCP2eu1NbWCMR8pFz9N3gjfk5ua1XZQP4dukS3peVswVNcCQJbpb1LcjBnFng5RJ",
  "key5": "5q2ENNsP5ax6AVmj4fNiYuk4hbGfd6r6auqVyPVe5sUuNuFmCA2a6NGgVMyijvGbdwFDJZFqt1MrUMdK97G4QbyS",
  "key6": "nZ26w8q8KaLe2Jjnt6LK4aGGNBBNn4jJhdz4PgADnUZbezMSZ156MALFZUmsDxatApsyAHVuRBjH1pqxhW6FjP7",
  "key7": "5MAZCcEVcWLqRZWFRZiAfzSHwPzsm2YR9eK26AcoHTYfZSepUzbeS8MkHam6dbWVbUEGo2XQqHyeDEybsSxUo2Lx",
  "key8": "4VmxDNHBvSRoNz3eExUP4hRHYKwa5QfM4MTtMAhvFUnfRRdyQVL4QfESVEWqFHetunwJxDwM8f6Wq6QoUULUwDKB",
  "key9": "4ubrgHqttYw6A5qKFuWE3xtRxDcn1EENG1ZeYpmhVuwF38SnZWTxe9KnXQy53Yt775a6zsyMJ1VBJx2aRrfNXhbj",
  "key10": "uk62BCSJ5bKgmSxPMgz6BGv36rfMgFEWmraDqcXfdEqGbYuiJiChqEBf5FnBndrVNpGd3xp6rTXnK8evQxLok4N",
  "key11": "47F4DzqVdUNcdtkwAyiKy7VrQPUkXA8UAvuCMAhNjgPaX5xrdomkqimK8QMHGfNRKMgdR1sF2gnjrV55nvRL9HFW",
  "key12": "2hfM12geTjvd4CzHXmEcA4XbaRvqntmGheFGkCmkNv2nV9WrNcnUEBAYt9GmvtRKhnSnaeb6zXL6p2r49aTCkztA",
  "key13": "5JSYVcCJSjaoQTq1kduXsArREaUtimaudA1ugeQfAByVdn1mVS2cjQuHRP7idKJGC82BqLn9RhdwUtPe8HCMhKeB",
  "key14": "3nrh3qZEoG5gtEYJJHgRFvexsPt96nGqXmQFTxFBEikmKNQAw5ksz33DArEyf1KaxrRFwqBV9G3gowZ8gHokziVF",
  "key15": "5ehGz2PJUtnZ4CJdb5o7d8w2cjYqxVs3rSmh7RoLPPVxucgNwKeRPXpR3k9w2VYBrbvhPGHqxUGUS1yeG1kzmDCa",
  "key16": "5aiB48nPLTEaGxWZYYitpiREZNb1hNw9GYywWydGz4fG2aD82CQPtXGiC99mdz7G5orcYX318arnfsnZ1y5UYAyA",
  "key17": "ZrbCiAx5Ma69zeGF3dmo6Abp7y1NUpaeNeq1scyMx6tcxJQ3f4FksKaFewki5VGEVnv729RLqtBMjQ5dhr89Rfo",
  "key18": "5xLZnUPFZunkh9Gvgw2byfpmMiYdNsCFxfX9xdF3b3VhUgFbvuKTPGbvhhJM5xdeDmB2uWj5uyicKtndiYLoxtTH",
  "key19": "4aHQdC5QYrWAhNcnwoKR6aZbefXYWcPSEVgcsXxepedhMsxbM2czXGG5buvHmVFrdKpTMiu9DysbrGa36KcZvnS8",
  "key20": "5QLLCk2ajXDgFiNtRJXdFMTaoUbyF7R7pxpDovJgTw9aTbYrcY1ZYop9s6R2W81dZg7xu45FrWMUyTmk82ngvj9r",
  "key21": "UU6DZJXKabcTTb1cHthMHxAxSemx6j3tDHoRzQnxHCmsGSiBokzXxNC4txZKkVjxdQsq7bAok6fCYXTBUVfJQqd",
  "key22": "3pLx37KrTMqJTgoShTedf3hV9UkHgUk535yGZeRw78P9m3BTWQjmtEsi15NK5HDh7DFod4c7W1pM3GcShfgQeUVi",
  "key23": "EhLbpQUq3QYGod7M3twMzx49JwEiBwWtQ62YMgRvNM2zsFDRYdM55Ah6mKcexyjhjY3dKg8xuxnCWn9HZdEmrLE",
  "key24": "2E1E2ZqR4yYVXSPP8TtP8NhVfCBwgZk24FEBQkj4JQ2DJtFFB3gToTKpsqgXJ4ezJMcdCenzbT4e7LGcmNqWLPmE",
  "key25": "4PFTGkrBs3WoEMUs23qHqz9mXAY8otGQKa8s9vWpvk9YecxkvuyLYonkQuqw5SeV9GTpGPX3WJta9Tzr9qSVpmtc",
  "key26": "HZVsakNAPJPTTPfXzJkP3QfCk5WS4CSsXgveayCgMgaigei2KJvjHTNzEHt8stubkSAXEYPBQjhH8r6TwSsW17R",
  "key27": "5pLnFv4ooMDreyo9eH7XikAsZFXwwHySQLwaz21fiWfYcmmGPZEQMSooXfS5vCicU2FQcEWk4F3ayEkDznTxc6nN",
  "key28": "3GnCMiYw3otmhuGQ6mNrcJSPNvvrWnRB3P1qCwUNE6oBL77qKt3crAYdfSV4hntVNWLA7uycQffo58ELrWebGE3E",
  "key29": "CC4wCsK46xCgm3vWvUSHJCnZvCEFDHDwHJamMnWJ7r4fiaevgjsCTvH8uqpnW59ugoDxfywHLp9YdcfhzNyPnnP",
  "key30": "iMqZR3fk88wK7ucUDgAH4yXbttzoUaTBG7jkaCbAzYXWAktshWJfruv751QJXDnuYqWEp39erAxkvvQwZQ2r4Fo",
  "key31": "3XwrQwFvcgPMGF4gkRkDnx4mQZ59LrnfNviMYRa6vbw9pGVAtNbEF1TPSoTFawdytPu7DfnWmSjDmbLk5DeRneYg",
  "key32": "5pfHLjR9z6UxxCRBiPt7JVwShVa21hS9gcG49dUi7tcH2mHJF6eG7HCaq9gf6oQE6ufDxg4JQa33nGmvjjdJFGWo",
  "key33": "4M6wfSx9G3jpUWU11WAJ9jK53NAZKQ26g5UUPdBWhrxQhGKMxAw9ydDiJiu8TfV4pPcyeR7BR5YnhbyHChwvsys"
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
