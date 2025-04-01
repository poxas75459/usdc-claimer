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
    "TdH49m3AbWiSVK56ZrnwPruQuzEdGGVUhKpixKxinxmNgArPPmk3U8ARkdacFZmztEXv29dq8qs6ZiteKmovaRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcRx8zq1o5jNb5vPAtLpPdKEJ7BSNXMbUFDKKHhqF3yRgh7Bhhp7ZMFJthdFHTLWK5BPmX7jib1g9z6fAYF95Nw",
  "key1": "2LT98tmAQefUBT13GfyuT882VidT8hKu1vFBan3HeBNs63regRPzzCaLq1gze5cLVFcT4D2Z7PLju6UCtnkbQSPW",
  "key2": "4LtMRp3rYRbGRu8P9H2XMAT5w7QopwwqLLavnBfa2AdZvwiDjuMLKiyXsK8UEvH83oe1rHNd8bCxevwisuTMBWa4",
  "key3": "54m2B7S7xv5SokuygBsM6CTANLvPDSDJAY9RPTJMJFMqfZ3kkR3Wv19hpRTJp8yr3RtuUxQ4pZBruwFAPXGAypaS",
  "key4": "2Ka9VxxRhM1TbM84o1XxpR8twUwXAiop2q8mLeAnfhRQ2BXsGmcdswhFcwsw51TsqsD8eAKmXwWGP77xcmhmnr72",
  "key5": "5NLHMjTUWkpftmPonn1FsUDp1G4EU7nRJtx5T4v51u7Hr3v4naEsYEM1B5EpeTrbfpH1c4JSBrKftuMhN9ERYBEH",
  "key6": "GT9s346iBPyQJUYm3Ug7c5sQH3H3s2jYjHm2EtHgzamdfifrMTWrjgzxZocHbetH6vRWnU3Y6CwRTas9xNWuiPM",
  "key7": "xeV3XyRLy6janxXKqX6et6g1YR3njQQoQogeND7jkqb7MBRwSofpfEQY4xNZWqTrBggs2qFoqFSDFJNucNqmzzV",
  "key8": "3nbHrUkjDXgcob7Zfd1yNEybrtQK2T3KTo6uTF61WAUrtFH2Ed2rKuXENv9pTfS7UBQw8SgJr2WfW4onigeR5D87",
  "key9": "3v2A9in9nWuctkedNn73SMAuW6g2igznFmQQYCkJ9FJtt2aHhHxjRFVtSRusg46YwnZ9vPAAKTjU1wfZGfrubtD6",
  "key10": "3KUTJEK4FXWy14kcvk3npEfS6tUJUeA3TzYYGzX6xoJix8gx1Hwr63k1jNuRT2XGgBLB7QQ9rr4pgGQu7rPVWDHE",
  "key11": "3xeEwFWB7kWGseAWXQy6ewm35LwZEJFSzNJBbsTuWdzHZFDTVGrXppVgjoKMZpZg4tQ4Gk7Vwz98HJB5yPT7DpD7",
  "key12": "C9r8MPkrmMJFnCjaKx4qP6LmErMmWULKfY1ddzFmVWx5PpByX5RGpF6353zKEZjoHLTokRyB2wUdCQYa8CxdW8X",
  "key13": "2UoTUsUcVYg1DM4r85ewozCZX2vcn4KBrfrmch6XjKxBJFqGxvDxbDey34h9Y9QtnsDBbHMNnSm1sREbDUn1gVUb",
  "key14": "RKUodTvPc2QukL48Nfcf15C6GHv15RwcTdu7eGhvaujr1yMdXEPSqD112mmBFTshMsmJWhTQKmhCqYoFW6ibnAT",
  "key15": "55E57jVExYxMqeRKy6EpMu3F84D9nUm1cvb23A3NeQPHmFQjirBoaYmRgQzSxRZoDxgQfPgAp6VbtxqcnVArpbNd",
  "key16": "63CeEniF2txRSB9mkaSXxMeoCKzyq6C8UrqVyEawoDpJTbZYrNvTa8qP694j3x1D9jVfANAVajCbom1fVUgSk2yW",
  "key17": "2pR6KjNRL4qsa1LXuWBBJpByftoRRXLLqbgVkW9XBxYC8NzfJSrh6rztFMfasLSphqSYKEppLELoimd4ix2ZkPFS",
  "key18": "3zZbCNuyp1dwexNe6CzBgkk9H6GPcQPGBKj5pKVcyWsykcW1oAC63uCBkxosGCtPL57tuCnhbKB6hx4Qt3BEiJEx",
  "key19": "3NfngEntfSjoYcw3rMDtXZaiuAk9iJ5cYMtB81fA4jzBD6QJomwFM4YLunNjsn7FncKtJkFjPbiA37qVEKwnnKmS",
  "key20": "4eJrJ2Zef6AzsFxBGefxk3nE5FY81iKh4MRxiaWwVsNGkoRZy8x3Rs9e61PF1dTcbSGGhyH7CXcmjAFSdz6SyfEf",
  "key21": "58jCANRvugCGeBQjwrp3Zf2KnvAHUeJSdnZXiWdvX4VjLA5tRcigqo4v77VUpp1iz7inDpiMJuwy5VQ9zrYEdfLH",
  "key22": "45iN3HUjhiB66Q7VT7a58TxNWCtPc4CPpMc3WDEQqxMttKdnFQSRkdYpi2xc8akSKszJxM9RryjUSXRtVcGYUybJ",
  "key23": "HyWz3tUgt8bbMU461NA1mosFTnk96LDHjyGXgJzMMxZF83FbMs8f5rkXqgZUfnZswbU2zUWnVBYo3bpL6oub4zU",
  "key24": "2HkhUZMMs1FzK5ELpagQZnWmkD8zScgwFouroUcHVA4NmPC4BD54HStz2K9U3fgsaqqpXMtgEYpeVNEB4nntjtEL",
  "key25": "3iV1rupvDLSE37o3Rza1XAyWCBoS8XAvw34NYqBqa7NvrcLBf2XUsJtukSRBW7pGUDSNFeJDLK97DzeBcS7WHAMJ",
  "key26": "4icQbJYYdnpjJpWvFhF3bwCptGSGQkpwtTFHVtAV5EXhzaA7x9Ln7ufpsEpU3hZMvFqrQ66JWPdSGXrmFVkKT9Gg",
  "key27": "5DY5NxHPUb3QkFgspqjJdGk9skMeBYDEJxy3Cv1gEzctvvAsURBjt9kZakE3EPgxkExt1nyHaHH5fKiJYjfgygV7",
  "key28": "5qKRMDXKBfSQfomBXWPRCLbqjEpqjwZgtCaVNJboScVZE9fGjf7WhiCB8eKgFhrkZ2na97gxPg5xyDUCFmtaF3S4",
  "key29": "2p6Cc88cBmTGTcxdNXTP8wbw5eAJPvFAzNHw6d6h1aksLVa8e3MP2GfbfDHEPQGb481poreNygW1X2yq4bTwLyT6",
  "key30": "2NL5BrhjJr9R8zML5MuX3Q9LqJK5MJ7SV7XkUaF2yDkWpGsh7bpmcRad8RmjDzHFsAg8Rugw2jfQyeuybfpFDyxm",
  "key31": "2GqBBFixpebnqJsuc6e8Yb23sQBza5jdMLM7ns1Hn8HVvyKDPUUu6JX1uHcCH4ZUAFsgsNRr3saZsRxM29jzoMbr",
  "key32": "4eV4zrr1yU4hK7KbcqmWqKoeDSD7DVcYJ9kJ8UrXQErB7g7j9ki5u3VVb88GMMaLsnAmLf6NvXwYXXzn3sJDdLqR",
  "key33": "4fFzhYGgFPgKpxMFc66b74G3aogG1Rc3AU6HMzJ7JzmNzXuboxUnjxPz8zCKCcUPFBm5tcmzNL2zwa2ABFpphYdP",
  "key34": "jeo6qENFoUZs9BvK7Do4aYjz3kNjaTXAW1rN58avtwnXfFmgBWccpb8zUXfPhqZJ2Uwo3Wy9EnifQ5PZmzFZMUR",
  "key35": "2tjcWDysnWNxUKjUziWujAdmonPsqNbJJspnGiu5RJ7AyNcF9oow32hpQcRYrHNYWY6VfptPkkdJk1qLGYfMM55k",
  "key36": "5KPTMbu77RhAqpzGGHhardzrUdhepL6M1x8hJDELXoSebkv3fQvKEx7QvrooFsg7kRUar81ehBuuxzhXrpjosth2",
  "key37": "3YaAmjDoUTRgGkrNwTwR5iGbYsPsvrz3ojdR8TDATpGnztuXboyYkUMbfDkZa4QA3u6ZEdJzCr1fAPjTiXJ8rPpD",
  "key38": "3KB4YvwS4Y1egTQ8h2Td8524JAReo5CQUZBDRnH89R8Wz4FDsFLBardEQawBe9odTgcPfzippCC3MbAjFJMq7NUp",
  "key39": "4H2dKgpDuBEpMgiU4xyxD71GZC45GmCKyD6ndnU8oaU3zUNJVBYqF6SiL6Aq88qDPKVFfYABjsohnTbuS5R5vFEw",
  "key40": "3zMjBGmbFQCwgcX5289NaA1k1ZrWb3S6Q6bAdPJHuJhQBJkDaZ6vxKSADwugFE8Gz92PvAqyaNAUB5ckqdpeMAxV",
  "key41": "kzF98T6GJHtsXGWFQaFNskQdWtMdiSbs5pTodVoQtK9rn7m9Ftx3DzsU74khEmaDaZBAFEeQ9hevxjBEYyXGJ88",
  "key42": "4xAcAT5oeXD3M9UXeHyuzk2EqBv481LNi8HyvxsXMDESPXNgnFBTSFdUnjLFY1eDJNy37ePAJWsSfYXTUcqi8nRd"
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
