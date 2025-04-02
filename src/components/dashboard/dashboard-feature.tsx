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
    "58RdWs6wQS3hqge4EpLT1ycdQg3jwiBVbZPZvGVbLbYCVAXmZSzf1rkei2KqbJPDZam3TB3x6MjpAon4KWUbsfJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WitZETiegiJcJL1Cc3dX86fT8Y1eEgJxqa5GJ6xvznDutcEv2TsFXhGC5xFUXD1a9pJ9ZeR9kwjyTKdSBxkWjg2",
  "key1": "4BqXBMreNCP6pyhnxR19zj1xmrYXM4SRUgTV6x8c634JiQr2A4uzqeDiFw8aLaCjUxM84LLoMSoavYV1aGc8xfXA",
  "key2": "46hYhAPiMJvoRaSybguVzmn8oq5dFc74QBVbcbSm4CrUFFmRcAc69spTLEwGtSH7iGtPukVo1JJmpQF4C7fteayX",
  "key3": "2h9YB7nGmARWWxCGVcpMUdQnHX4tVqjZP5NfGLTLmB84pifmVUWpfvbSC8fxUwKFWhq4jAAjJAaawWBnEts5VRxN",
  "key4": "23YwTkJvYBgPDitfvVfrAMZy9Y9dWJLRgXbVGATp1usKnuVnfSLcxtuw4x6aSDHLScZbpooDsgZQnvUYNkmsX39k",
  "key5": "55Jhhd5xMsMdsrwtVG1ZmQF2xZbh7h3gCkjFW4pSC1eyCr4GC9yrJ38qedVXPvKuFc11N3sMTPdBaUWXNsn4ZRfz",
  "key6": "41QqrD12hUggNLa1vPciUKm3Cdpw27YiekaXTFUk3Y3p4fJ1p6ezijDTTAWzrUzX2RXoGqiAt98zCV53esyyFiaM",
  "key7": "DbFJaN95uPgLAwNP3jrRcGNazgH2TTHar4N5CuKaAUdgSMU4XC2Xgi8imcqEB2y2anFcW9T24ke8CGSG3yP2iJz",
  "key8": "5vhjVTj66kogbjQTzwd61D89UMNhDLCqje4AuCs7BHSbHbeAAeYGVLgYGwgqW6FfqAPoHoPwLM2BwLqqUFSRJa77",
  "key9": "3PRqhz4G6HEwB8Z3fqJT55JNr4m7AizaMxW4k5mcxj9bePewTEh6sbbTVGPJhTKP2HnxTwBhqHjABcb95viNTFva",
  "key10": "65SchMHdaxbZKy47Z2hFBp7pmRdbA2pQs7yaQ1hfJs1aL8iBCxJspUz1qJgNi1jRVGhY3AhguSstmmhg7hD5Rebf",
  "key11": "2b2wjkn4eK6Lm7fFB8rBTyE8kaWZKrntFZ3HA6RnAdoD5PSmuc27BH5GHoHxrQz4pLAL4vCcMnUDB18LJaCQsVyB",
  "key12": "56vupwEsuWUSxKuBQU7uGyx3BCjc2vSH5JJjguv2vRvgBvJ7ahsRDU1hHLzUmFjK7XoUwQKxCCp3NKH8WMYTuGvR",
  "key13": "4PtfitTjFtpHwiS7FBHneiYrL2hFkitEbHKPU4s2rTXjRiFCj2cH9CczMCNjSSAbVXYd5c1Xrmzff8zQXhn3F29f",
  "key14": "5oXte3RdwwmeStFmw3Yn9eChmFhmgAWQWgw3EMZ85C7XZr8WmSLMrVG992xmU6tKyNKP5NrEN5XHkDcf444oKtfc",
  "key15": "5pbdxZLAKrCpv57BHaKzmTmyzPUYrQLCMQW25ELanA2RvbDbq1L9sHKo8zWKjkyDMWS2BFwkoViWfhFj5VPbhMBh",
  "key16": "59cQzY2MSdSX6oWGqErMkqMXURT4DLG2txsw3dZmpUm9h3jZRdviSQPGWnGXm4ZmqFSg4t62AnENFpiZWVEh4gcS",
  "key17": "yShqAnkCutvzxLrDEdwk3nQXy2ASGqVQecTwiDSRRxh4hdDeY71kzMQ31NddVi8NvuqFDYEXLe2kZ98ByqbXLNF",
  "key18": "4L8Xb4iwXng1Kg5SDqdDMHcj3PYpX9RxBdT8GCJ9yzNJj6aS5ynjuZLwDwGURzC9JTnDYMWbGvjNHut43p5VfRA",
  "key19": "2JoGfS34Lbokw9mviVZgCyeYBtqCNzeK4ZV6WZmY7JfxZjQ2NMbyMjL18NTAoeWsxjhZiqUSUoZHpknhTiwkW4jk",
  "key20": "2bDd48Nv7b7pFkR19zgQr27FndnDuhS2VLd9wDd97hcJGvhpywNuTmZNJw9qcQbdkYWCDAkF1CbBYqSjWKnqu1Ao",
  "key21": "5Qjnh6BEq5dmMzBapibZb1vKSsZdpGTPZ5ffesbnnhTkXg4qowxG6Y968idzF9z7gbx1SpoRSWcMG7QiFBTL8rRj",
  "key22": "4XF8sKQVrSz1dqpWoCU4kkb9S8BxzqTbPESAWwb8UhjCbC4f1NXAibw7Xqzd16dEbCfTMDvpgbg82RcugRsfEEGU",
  "key23": "33M47W5xpLoxPUpTViyPJwfMf9GnWdbN1Qcrwfqm1R82jXYtaEUT13RZua3HaSqN4Ht5ipHSNxbuNGpDG69eAJyf",
  "key24": "5LT3kqsSzT1g9Ead11oGQxM2Jgzzkw5pT9T7JTs2cs4TY1iP2XnTrSyyqAZhsFd31gsbJPXPjRKDnUfcBEvauEi3",
  "key25": "NB7PLyczjRPBKWc12fuLQbDfmuuNJ92RoUi6t5yqYtwVjyGLwPekiXCLdh95Upo9DGB3Ww4xf7VbXi5bT3myCRj",
  "key26": "5Xsub6EuZ939ZsJAc7GxGkMDzyAREeWarg4eqwuFSovAoZssiFjGziyRqzMta2zUM2nvg7gJwqfGhTFFhWydbFhU",
  "key27": "4cNwczuEzaWJvdJmfwqGnVKdt54Vxs3so3MWQZE2kgdRKDYBV22BfD8dS7MapcCZnPBeeCXkrxf4QMxv6reExUMD",
  "key28": "GL7ByocEyiU4CFQA3x8nvfqgz6fbxxNGKot5LyLZiSy8RbkWZoKBmzCpmFbKMSdctYN6WQhX3S1mhhLsNuKYYZr",
  "key29": "4L8H9xt9kdhmrbhxgV6ziTjFi7PcVkbJ2Th5sGPu7XNH3YHiZyUYSqKHfxhDJqwM8A16Jnh7kZ9WCtdNV7UKSv5z",
  "key30": "2bzkPCdMso3Xn1okEBE1Vs4oedUm7eCytnwLg8ebZAjgD3z72nHkKJvw4cem1gbejj67RKpVDbgrtUrWGgtGm5m4",
  "key31": "3fqAjG4awv51h86hukH8PwMRXH8cmLgWcxJmKfv3hZNi1SBzm5qbz1jRMnC9k81qfj8KoRDVJ8YE4TBqvX5SLfF",
  "key32": "3qCTirFMHMGnkrZQcwi53waddB2Puy7awox4VaQU3E6oyH7fsgoLCReHMGueS1QYpJQ7XSoDcVH1724Qyx7ohtGz",
  "key33": "2ftsJcmyRRe393nVEJ19sFnayPewuZa2YUk1Ag2LbW4uHRMXozyxGbqsFbjYmhWUJiP43dEvpNieqomsKeXBQoPE",
  "key34": "4LvF2po9sLzT2UWN1GrEN38yZPQfc4EkwK9ZBG4T73Fmj4ZgyuWy7HFbxXAv5VvxapBsWQfgMDoMJrtoGsWbGr3L",
  "key35": "4Je8Xqc97i1FuxC7NinSWBXUmzLk2Fw5NH6WpSz5ERLaFktCb1TBhWKbLcmjFUWScHpgHAWPG1nVUK65FjzL5YEB",
  "key36": "owxS8gGqSRAf8NPKfTnjTUbaxk6xqMaxtVNtQt83dxZJpWr9egZJW4msWM7bw43B6Kcq6CZzZ36fimGYK28n2W1",
  "key37": "2ApwZmabrYBdMtS4RAQ7rjAH7h5MVLrEwDAitDsTNx9G2yoRY5DZ8zhiws7bhv13rp8U6sNu2HoccNLhES4ks6cj",
  "key38": "4Kpzjv3gyeqD5we5kY8sSzVgVAjJWdPShD2foqVQ2oQspWz7siw9fnvm7t4ehkeVn3U4TCbyyzW3j47FC9kichqb",
  "key39": "5mVDFFmt6yeNzz3zRtjtKST9N5P9H25QVh6uYBdoggxeizCxo7dxgq5kNzTgHXZP5GbB6nQ2BmDj1h6qDUGBwcaY",
  "key40": "5P2KJdEhTqfX9GgB1DesbzJFKRKxRDkaJnosazh9w43AmutC7CyHxLHwW8jJjovyzbnc1rjfkeP5HxoUfFoR4UHn",
  "key41": "4iKbPHAkFZ2VCvjFdbzDJ9oeSBpvpTYRZJDVBqZjfafJ6AutGLZ5kxm1C58XZdnuPSbkNdknVcUTjfEzLg4oMiWc",
  "key42": "4sQ2Eysd4VSmWGCGQCxZvwzcWYY2zJ7ojhMC9tAWFcKavZXS4ZrE7N1aAs6T7jd853USq8tJt9PACe7kZbPRc728",
  "key43": "bZtkuUAu2f94NtAVaNvbMF42mPDAtwrLsz9F8tA54vMJ3Jd85PETbPFFWpVttuLhohb2smxQyWeyQzmGb8yZkRA",
  "key44": "2iNjRUthZoCSBZ35aKnFFAu3MC97BtegVixMo5WFu8CsMx9ikFmdVecuxSr7SKwogbC4v67tE95NmgxJpjiaLx12",
  "key45": "2r5EgY31nJKUUDM5riR6yL9Avw6hrYmGCuLEudWtoDX8HF79LiaYpu8R1Xh8rFb8suXf1JSp6Tzu9JTfcvJz1qq8",
  "key46": "3yajR7cdv2yRYGAj18stmpWDSL4yb1U5H1hjwTXky2dZm5Rtf9N6PziwST1aJqTgnq1pTbpc1G4JHsWDAZeVuubi",
  "key47": "2MgrFKYg8QuEr13ws6k7ErjzDqCviRzjvcGDAwdMnGFEjG2LuRnWAqPCEmqVrExhDtHL6QpC85kc9MMzySXnUbMc"
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
