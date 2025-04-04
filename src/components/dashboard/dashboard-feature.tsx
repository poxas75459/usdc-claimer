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
    "TQmSjAsTfHhUE6dBHZ9HGck4Ubth6tTe8bnHUXr83CDTxozaoe67v7Jywx7mDu7pLn5g4iiabdmtTLTgHfG9ZSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PvCrwi1ja6Z8H2M746zg6Dxrw3Sko4TBqyrvboGmpHJ7oK1P4pXU5yZFQ5EpSj2qTt1fNb7vCxpZtB1fFKiwa1S",
  "key1": "4tLpxadFLW6uySJagALYxeF6bVZTiAqi4ho4zvHbri5JWd54T3a9XPxcpvrWd9RGr33zPpFfb4jjv3X5gq2ScEDH",
  "key2": "39W2z9B3CA82xkBq2R8SACXbj3eUxSEBxxRrtaZZ2DTsFXQ7bW7G2xeb5geqXouqjejdMj4QX7dbASTX8hp1f1Ng",
  "key3": "3c4bv4u8ZhYUmRh7akfCN7BRgqdaLJJDnk8Pyi3whMXBVymZ3Zazmn95cZeQorzgY1pb8u26SKm1hS3Pt6Y1gLyt",
  "key4": "25sjfwkSnQfJcgjYYLscUqY3G8pRYim62Yk3i99trsjNwxE9iGtJaFe25AysLC2hXz9FtbwVHpLFVuSrtUFVWkiM",
  "key5": "23DWytXbYCiiyWTxNzo68uJj4oXcGm4oNY3APPZkFdbchQCv4tofRqgtfLH9o6XEDArB9tiRFbb5K9x4pP8EXoBP",
  "key6": "39PSz8XaZQVs4TquFqPYV4W84ga3F1p2h52rZbyo94WNiRFWev65MLUEse7QfxgwYSFNQiSDHN76YqDr4zUr1GFg",
  "key7": "2P8rUYJKF2RtZH4MbCrN57ucQN47g6f5Jna2WwJdzSuNb5kfsQvDPryUK8kpFKgmZ5zYp8yWFHb5jcyDtLExHFVE",
  "key8": "4LNga9nqWfK5v4BRX4AA7436N8em7CFsu5x7HV1kcRBu5j2pAPQAfWrrki3BBw3saquawJvDPg2YUpakxxPtRHoL",
  "key9": "5h44LAFkQ1fZPc7ySNsiecm5U73vmTATmiNQoGbKZhZrW3V3kWwd7u6Pt67BNvwpd7AabnA4RxuyBZ6iAqTkjVip",
  "key10": "5rotMzX3dmWV5BMf27EnFT3SMkT1LosZFGTvtFLxNAQLMd2WksiFugc7CAb76wWhiLfPZrg7sz3P7vT6mzw46CeK",
  "key11": "4yEmb65romqV7P6j4e65d8B2JtdDDRMhEAVgCuMu8K2Lr8WUJZk7z6tQRnAKuaNSLtiNcF4Su4fRBp5vpk4voQXq",
  "key12": "UzpoZYPy55fE4So6nuUEh3S7TeFVAaXska1NgaSVyL2AgXSWW9689J1fNN6tv457MPV8UZmb1x3gJYsBciqagn2",
  "key13": "2xYj34pVb2Y8JqayRvuwKVPmehWHGTy3kov6LogWJziT4wXg72QV54ZKf6YFQ1eQ2jKRDjmDJnSv61siqT2Zaopu",
  "key14": "4nzkUdrPjAfRmQryXYGiyHkE5kVXWi9kToU5E3w99jpUP8rdKobv4Vwh9n27sWBxLaeJLoov9dgUqwg7FQw86m2R",
  "key15": "3jD6jdw246uACXPfnCnyYSoQ3naiy2XKQKFvMDNi3iPwS7QzzChgFY6Tx7h2nfKebxURdBZGPtN56VgKJaJA5JoR",
  "key16": "4FXrCnPeqD1NvhFHtsWEryVUHARqGnP29Z7njYBs4kaftExkiFzfYWHV4f7v9ZkMeSP4pmNyqkyJ99P338Tttwgm",
  "key17": "4FsYDuTkZP6uYEdBDX4pEGhhMBUyFoFStBYMRfYi8q6AjHeRCyWBtwU5on4bkpAZKHazmqUuBdXbDo3T3kc8Wnsc",
  "key18": "5tz5XBUjRe5E4TyBZYLs7MPZVMcYSDorey7GeEDyAdLet7Tg3Dmpe4gNjz7B3rGu2cRQ3BDj4tm51bzi4Zw6G3Pc",
  "key19": "2J9wWas7jGCM5dsyYgWgXJ5xYyw3rXrTJgQw88Y5wUVPzt75pf1PFi9w4UTu8uxgcac9JjoPXZsDZhYGcMLiPzD8",
  "key20": "39f1ZFvkwV7HG5hz7NXCxchmo3rdPYg3Gup7Yo5B4ythqsK9xjF4ML3fNa4vuK88tbJn8uTSb17pF4KVYkieHCGB",
  "key21": "33h9FrB5zPkY48MgmFNACw8bF7qzAP3moW3KJQW1jEart6Bdx6jDEtM7yuAUyYQMEKTBkNqYeq72mZCNseBXsLsj",
  "key22": "vknqm5S6MsYSWysJBeXmAbmr7NVx6nzoYduyHN6jYTY98spcvmRc7rB86R5TTZGh9usmz8gbu7gwXNA2q9dWBXm",
  "key23": "5pEgToyGeEXav9jSSkaCzcitZxChPBE4Xj6ZNdtmWARsV2yt72ELCVEsUGFyx6CaAjjje7UDEFLKv1KgRPJ7CyRF",
  "key24": "29nniEERJk5gdupZTqoEoq1nfhpmrsAepFZf2VMTYEPRg2Pm1JJtKtuiYp38F4MbGwJUsZYU3aR9bSDytqqLDgMR",
  "key25": "5rgg4SYNoBfCMdgL3fBPdbihUknYHJgiTGbKWztLJRaVbmCqbZhiV58NYsWXsbYebJXrMpbDJik6we7rCdKCQLRD",
  "key26": "fRL1RGXdoPSLcfx5waUmocwFe8YhasQEEDucnJHWYEcuLTRg7tKQZ1AyJERgYH5HzFKmLB9E3jA2NN6N44a4fBj",
  "key27": "svn7VKdGC4JuqRWeUSnSSirbBnuxkLMndUrh5GFc24MJyLZ6CV7Wr92vjHhenQKufMUo31AeR6xUMAFD8t486vN",
  "key28": "25yaRHGcQGjWX6sSMfxk4oqr2QXDKFAbHRrbt8QHjAQZLA7nQmAxji7o1qHvM9rcpgFCy4PynzgvdWjuyJCiPZi5",
  "key29": "4B8aQZpmh4nV9ywGCE81WrLKWKxqBkNQsMJTrRYvxgmiLiXet3yUXvpuSRFYLVewiMdzXrX6EQtkWcp51XnBZfrY",
  "key30": "4qSeRyDsSCZVdSLWN8uAGYJAcxhraSp8uh9YvAKhVsfBPB93j5eq5fquXVnadsJ5CUuDbnE9MLncDz3ZzwsqgLmg",
  "key31": "239p3fetNjUznbfjyfzuBsCCp6UmoM7QsNXpW4RbmqmAS8XwLr4UPgD7jqBNSLthMJnQj1tSngqv2aspB5kg5NFn"
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
