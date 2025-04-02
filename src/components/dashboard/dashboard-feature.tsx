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
    "4AKFsYzoTAH5ckHCn2bkxctJVP44pWtFahAKVuQfZVWEHTAi2TeojtNmzQDWvTLAByAj1exZYxiB1tXxb6TbAXT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUyL7JJ39xCdSptkSh1ZwcScAAozH9NZYfZCZ83mfYsnThXJEcFio2HrXodvY9VFN4NYwhCP2v8X533eJLTDUkM",
  "key1": "5Y3ox8P7axoimdjLBbkN5hSkgwagYPBS2TR6Rgw79j8hWtVP2qqYsVhEgEd7QevcbbMfyNS5XXcaR8rvDuU9q95",
  "key2": "2AZM8FBy8zWwUqjBqgZTWg3iH9mZ2oNGjkhqXJct9dr7vu4e4CpU7ZE31gHkG85q78bRoEhw9NqyfUNYbKbxxGkB",
  "key3": "N53FDJkR4JKRv66zPcRhAWVe5QivTFvUoyMSzyzump4My2dQFX7veZPLM4bwV4PGBDvxFwkBEn17p6QdQVUjkfe",
  "key4": "5ZpUHw75FqRyqLHkgMcZbgZPHUW8RYaYX3ozHDtMuJ3Z1D1H8ErTSq37baG728RA1wzounKq8Gc2yvHVE3rD3sM1",
  "key5": "4JGnsRK9xhRxuyEBTsN1fLJqfVNV56tG4pcKCrCqEs5hTNZccSYKQtWamLWYDY3V2Mr859CbJFETRNRZMy9fcoZJ",
  "key6": "xwvfM5kg3UBDCnNswMYyoX1fYFKaY2WEMZFdHvGpuQ3mzrxJQqDq49ghhPSLYPRkzPEvVrwskv8daGXpNZVtKAA",
  "key7": "2qQqbGKJfudXMa1KJBu9WWpNt6Pv3PDMNMXwNRLnrtAPkVd1ZEBqjM6QCDzin9rZHmMeo1UvskWdYmnoTwUAKWL4",
  "key8": "rRkWi5E5nZ6pAZE8CTyjqsxAkUoda8ZmrfixAsi2dsuDoecR4WjhUP1ibSXEZgEnYgjk9X3Ge4xxCRHThatGziM",
  "key9": "4Av1Mf3iN1Z5ZrDUTaWVA78ALxVxsPPFeWyTHiK3XJsz7yLPQh1AgTYiw3ythZdbaWVNmUqSr73zd46P93D2MwXi",
  "key10": "63hePjWtNwr9PUbmDgG2NYuDAMnmECS7qPDUkfMxBxeWRmxj2D8W8J7opbbRHgHPFQms4BXHxsQ87jDkQxLf5YHf",
  "key11": "3pReAMMWVF69mCYsWEpurWt8cBU5g8T8hwd7p21yWpHxu3rhRQ8in2rhdfre3YSb4ke6DG31CgKDefeMUdNrPTyP",
  "key12": "5fVSeTsXrEa35LzejAgNjtvaoKjFkdGFWtX2U7FjVk853vDMRF8t9G9qykvuQoyVfcykjFbR3nouwBuJPnJJRM6Q",
  "key13": "288jjBxjTRbaPksK58XQ2wGvzq283fTKQ4AJvq1eLZ56ELQBaYxiCEkuVqyygzPnioZ6cFp71FrEDWjcKgTgUpuo",
  "key14": "4p3336a6zpPRfYWKfachiPLxDXMWt5oaNwDPcjbtiCUSvaywwPQmmt8cDPu5VLJ6sRYeM4Ygb92Jrvu9VKVjHKS1",
  "key15": "3yE5RKb11Wd8FdBSJjusBH4Kx2bu53ySDEXaY8Nj7L4mCd6Enkvgv8PvZCsGsGvirqPTdNSZFZuLTCXTviTZkVBB",
  "key16": "5BirLRDyGoqDjPeyJcbZ17ngxFniP3wgCXkER6nQVrw5fXdmnCFnozykYrXQRR6vjq3VdeMsqRGJ86n7UGo8Wrxf",
  "key17": "5B8gCuWhbXaXU9D73Fb7uNxYRDyAqNV44WL43v9oNBfSL8a5PzHvSEK3PEsYPrzS9cDudXBpUFa5tfYiXaBj4jEw",
  "key18": "4qsT4UvDL9aDw22HXQo6g9bkuKVi37Kqtg6vDxwpv1LZBgQYXveTYxoR6EBZWeuEhR2pVCSKyEJhQWBCoRdTe8rj",
  "key19": "2PB6R6cdgw9WYrbTgao1xnxui3UfDh2Lto1p8s18wUN3h2MKdxSJmrru3FZexzP9pM597RytWuVyZMcA28tThfHw",
  "key20": "5DtzFhqgWGg3xYTMgXznQMA3bDEUBd2sWWukB6jVCrf5nw462srXneefkEjXNB6yhVjyvCUyBSqWbSw4VPofuvp1",
  "key21": "558RaRKdvt9yH2TodxfRsncBGyz9tjMGf7YtgUofepzBMdggQaeUvMNkz1C7E9LzqYawxDQTgo6QE67jvQrnN8pw",
  "key22": "4ytrEKcUXmc16bn46yZPTPWjXRmwetju7yEqCndAqXMZ3rCNmGjwoEinfsJjFTE7SWTunKHnJwWjZfK5LTmBHZi7",
  "key23": "2vjx7NqMgeW6vYGnGccUxFhVzFjU2Gn4rNgXJXsjxvAW1pKCv7wcVsteAZJthRTr68FgGY17dyuAboyCzWEzApmA",
  "key24": "2gYFfp2kRDf7Wm39G5DkkahGE8zahhXxGiPsFsn8Z18c9Q44agPEJoQdwTDRWtQ228Dut2AiHamvMoqwh13NrT9U",
  "key25": "5pP9PJTAGCKpDBjeKYDxUkvkaHPPLUzpV1BcXor6fhT96nt4siKNJHXT3B7nZT1TKC8dss2RqeUYFWZKKTvpvBGB",
  "key26": "3nrJximXyb798pdMbTUxiZcFVuRy9Bsf1A1Co5Mhh6cTnQk5qvdJiEgyu1XKuPZJ5LsuK31obLhFMMP3ZfWQ6hXR",
  "key27": "62SQGZyUfFW7Wj8vh43zjTJLHuxH12FtvZ2NP4dj9zAtwxhkUTJHgSEhEA6MShv9LesvDiRqH72rwcGXUTN3vcRM",
  "key28": "75FMsUHbYyRYCUz3M1H5uiSPXvc1rVpbDZUQCd8hGHC4oC3TZGtyj2DwmFwq5S1tnn6qnY4jrW9D88CMwmBaqqu",
  "key29": "4RbETBwvbxmamDWjrizr2mY6AGHBLVtVZsvLc68CPABnNp9MBy6xQ8pQZcJbACgLXrvz3ypBkwvYPTCq5mVUuUEG",
  "key30": "3kJTXRxGyRGxCgjXp8CdKNCQH67ncyjqn3um8Y52i9f1LYmNE7J4PchWfiuRHbyhnVsxEbTYo7snmkECKZ3X5ngK",
  "key31": "4Akt3ahTxraiN9KrtosDGb9imzNPoJHKq91tUQ2hGheSpGCVabMskdYV93ST4GAjLe2cB3oywRJw8hzjpRwSwDzS",
  "key32": "qYfSJPQLKnfz4YwZPqFbV2eMfnw3WY2opvhknd2TaiSjEi2cuUa1HTE9P9nizcwFiJxpKbPfftxngEL5VNzivNk",
  "key33": "467bvnaQr4m7tco8JqhgJwroM6gryvA7EGf2R3iWPBaVDVoiywFrKCAdWeFhgTFQ8YJ2cNYDm7N91cGz4ZLzgek8",
  "key34": "4giMHJDZP7Y46zmcD2vwyW18NC3uF2C2xq76ufRR6Ego7YFSoqa4ZTnBAFfckrp3wT25dRNEm2RBSgnoVk35h5Fn",
  "key35": "2FcdhEqvK8hdg8rjoRkwMZJNpJk5HfdoXEFMxAZUKBamjZ64SAzTez4Hj9wTxyKKE5jBywFYvye5Y3MkHkgZNdLq",
  "key36": "3jZD81uc9HpFyGoR6VamwWBwZ2cpEJZdVz7hvr2Cxatfqc8wkCHDQwrKvyiV45ExP6vQARkP9wqE6A6nTRY81iVn",
  "key37": "5HCpaCEfM2x7K4tNQN2vuD5uk526cpWoLzbTBRroZXDtt1CuLgq6AMMieRDcKowgqtv7gEcGNVMzSu5nwnoYPkk6",
  "key38": "2N3bjPDe89kBBuTgaZ3j3tPbadE2WCcX2LLSKZYQAMjJiCor6rYu1MjKiBwL2xR8zkuAAWcBStHhgxPskFGFxLgq",
  "key39": "4EB1RrFKjhuDqBuuQ1vyE5n1rYgtuxZrrYrdJSxRYJKgd9UrnVZAZmPU2R5XFbpmHkLvG53gV1BPUExDzMsrUr34",
  "key40": "5qzGkLj6SEy9RRkdqMTLEtTFCNtmeyHUujyZA423VL6JbMoc3ZnrWpay2NsEQ7vmK73h6krccMYQiPNYH1GqeG38"
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
