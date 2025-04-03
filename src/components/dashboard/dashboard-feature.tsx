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
    "37yjexDjdUopgQjW7ptwjSNDMjEhRLs75ZMtMpNPPmv8CmYa2bRnvm7ns1cF1vnFpzcNXCNaTqQXzhCRa1Q7VcoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PK4emcdHJV5gXfjiP49LrW4N7xYFJVYqPq8XwkeobbwFb6RhqdK13tkGQvciRixfihzrzaqxTwQAtLrm9d3r8ts",
  "key1": "3dNttMpGh3pf1eaj19SPowpeBMZwtAMLVeNQzxTstbnGrJoh2zk3uSPU1q7J1abHjJsCHhUEqKHZ16sCJXbvxkcK",
  "key2": "26xuQR5mZWjrin8DFmTLSRgr4m46yi56Ka51q4AxpTDT5FosSztNe2JGHKe1MLaGKfyhwMWCZFa5jB4EqwL2gsoB",
  "key3": "bKKx5EAcDwsSxYjakXa7dYMT5JtaZxwCgWvgStDMSTdMLxtzXTGkmx6fS4c3AxndPLFbfQcQo8wa2MPoP6x6ZMA",
  "key4": "2KWXVjCqby5hg7AC19cBJNyux3YXqdwzqT4gGtHyKsEsJ2Drxwrj88HMgfcK5EPqQeyvNjijTct12kbT7CtwAnZ9",
  "key5": "3VRZ2PJ2R6YDMtbdAzA5Qto2eY4JwzjD3dpQ4RUMiadSoM7F8fzPH7F5qL3TQEjoc7M6U1eF4V1g1jAd6R6p9Mbm",
  "key6": "4PxYaRPgsB5KMSU8RbGQXpvHVEPyJmYxphYkByrhNKctSqTyqYq7cNyFhCB3wEthLP64WmVTKrnwAXtERYcHKGaj",
  "key7": "euDbSc7xfJNwAfsK13xgogfsAFWZzh1z228P7bLcqnJ2RgfSoAjFfvUUu9SUBoKjNcQNTGpWfPvuRTh8ezebK8d",
  "key8": "2LcxmAvMzPS24qoy9ewCPnE67QJfdnLqWff6VF1fSZAU8uC5arQGAgALqAfbgJFmBmyDAmf4tq6MV2FubapD6anx",
  "key9": "4Lw4HuHtNXBBG39rpTrSBz4xymURPqYq7kg3rfTSFkF2jHajSrEZMvxRECQwy16aYx9AcXDPUzUXyibjystYznFt",
  "key10": "2ya9fWiFTTa9wS1ZW9hHSYPVdLgGvx6wPpjNjuMyJctVZDCznoUqciTMAwFQBeMKpJuhfZxwfs6sSqG29hrzjAJR",
  "key11": "3fUkXhqqzx3FxQkpKkRakiJTTXfBTbKuLm9T33mbxop6wcBV7sjaRg4ha6xiPDzwBe6cn8ZFeEqzaiY3Y26w68uF",
  "key12": "3xuYZRL2Fk3NMDX6aQwG9aBP4T1Va83Yg4ueoUpRD4UfebBJh4sT6N7JNDyGsvZit3wQwMc5N5M3rXG5yjxy3JCW",
  "key13": "38GqbhCyEz9s7eKrKeEmT5ZPyz8RRYNxBBqRXvojqBYXDnDq6MJL3yZNmwFbR46Ts4GL3NyCPJXyJRZK561A1vFH",
  "key14": "2SqGA6Jg2sTg2Ma7A4ciD181Mktf6SUyEa6jBzVXxjPz2cuVL119hGVozckpc6cKo1xLMDpM8GCG71qguMjhmJkF",
  "key15": "48wBBSxXRnXCwECZ9TS6L37rz7fu64mHde9zGfwjK5rJRH6X59JwgqFS4CtxRmD3QnZxLwSguhptZ7RtnPUoBSo9",
  "key16": "52SuTD5voV3KPTFHNBR6dUT6gbpLB54Cuc3y7vM5a9cDUmx95XDkgtWnhLFYjjpMePFTA23fqWKvPpZRwEHrE3W6",
  "key17": "31c5iNK8arHeZpoLT296Lry614GEHFCwW7438oFvNkpw7snShkVU186bUHsNKRSsrFEjgsbjASuQqEU47N8yqUeC",
  "key18": "2UUHL3vZsTJbM7z92h7GkLYZn7cuWBPms9GCts5Cc8vweo6Zyk7tdV9fmhy2Ao1Rf9xGaKz2FaFFY36cHGaai3mP",
  "key19": "5XNHc27SofQTpEeQzsaZA3E53Do6i4rXLZbRd9A8KuqZmz2cQQuspjdZ4LYBjPARuRVVt4ccbJk1kWCDprPqGxPV",
  "key20": "2YBy9njW5Tib3ANGexRZSKbxHapHLwuhxdHAqspVZsYFSWzibSaqGRHAKDvfSaasXckhRhdA6JvMT1KJFZkbAbPs",
  "key21": "34GVp6vCGmjHwYuLK4BX1y1n5KuZtzeG547o7zTZhUCVki9hGKWmRH2T8711c3d5n4vcYWPhAV34SChJyQG5927u",
  "key22": "S89iB1MQrx2usVy3yi7ApQudndt7dwticU4mFKQjAgC9ZBfrNtFENDc5xL9Spqewgg4U9ZSrLn22tikowaWDLma",
  "key23": "Ass1BozJQC4ftRra1j8QjEq6NxQ8UTkmxjzyzMZskm5uaUZ9zpdJdoCf3CBDZp8XDx1UkV3M8HzG6cqhEaTL3TE",
  "key24": "4zkUqu4bDukc9THBr1BjLmiBTtPcebAruDuPE6FcGmDH8D3a8PHq4YVuVcNfTNeFXw87Knc4LGWBpVNuSW9UjWei",
  "key25": "5GqwbR64TondkHQhHudzyS3QXco7uSHK6J28L6Ps8RA9RyUfRVa9AM8K4zx8YeDPaw2DsKGRnp2M88w9kRCqY8dF",
  "key26": "4Q7sPD7YNBVo1QhsDcQ7BA3MJjV7apn7wEYMnzjYVjcJ74eiF8zNLbYfnjibHtxva4GRAwoTntNMc7h3RHsKy2Qw",
  "key27": "3wmmkPAxFdZMhXs5fPrfH1xLEiD2raotjQG3Rq73bTzQwDBbM4MQ5GstprKGyGDzX9Bw6N6ZBtQW8GzSognf16mL",
  "key28": "3znZGiwMviCE3u79Mscdpuri5PSpWKijjRxfQVkY2HK9nddZHiuvE2WdNBhBYjdmepgHgCd7FguntSyt6vHVaZ4m",
  "key29": "bZTGv2xFd8gnYL1bT2NywS7x9Txe9mPgoHLh57qomCTUjTPn2mVgf3J6Be82ZCHPQbour4iDc3wFawsr6gzKmgn",
  "key30": "37rVBaxEpP2h5yyqGFSRZVQfdLVYua7GQGtDDEVvQsJC3a577quvbCmUYkkBbomo66DX1iZjwzVsrp1dJ9ew8ygb",
  "key31": "3P6Y3FBQBLqXwMUgMRxX7idW6isnaTxTghprseoojrf5gUwXV3A7Y5weUahxjb3ySoBsj1nnkQikiT481KLKebwa",
  "key32": "Dk3Gnqzx6yBLnZBBipZCmCZfVdQrptqKpLJQxJdEsfxpKBF2ZCbmcfgDgnPCqAvGqTnPwC6S3UKmUPyCUSVujaJ",
  "key33": "5yLbx4dsdC11S2xbsjo5Eosjz86mB8rRukw8S4WUYPZqAjByqarD2kpZGjw6GxQwaGBmaZPQCjthDy18KtSUbp8M",
  "key34": "3gkvA3372jkL8yatJ6iERpWFpn8fs47nYL4StrSUAc95e61dCkgJrKEn3r8xi1zN9i4FD39Vh2A16tUSpyswUtUd"
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
