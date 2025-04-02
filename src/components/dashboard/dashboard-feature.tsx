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
    "2LQi3hLfr1S9p7w4BiFjM31zrur91VjxmYBQL32FUE6WCWGQRraE326FtoKZJMomyA19C7aBk91KvQHsGvPAVKoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K1YgzLQ7yf7jNXynHUwCAJaPLKE62e27zpdDYFkNgA6ibshcUwMgpMy46N4YUtRWaDHEHyQhsY2r9Csc9XPuMq7",
  "key1": "21HDrbytKMHPEZu5t2EUyhoB8NCPLyVmDUz89VS8fmYHdzQetxvQNsv96RbmkUoynGPTQs6iBTFwLf6QkXWCCJ7f",
  "key2": "M2XgmzYcszKd8FWtbWDbQdrDkF18FWnEsn3SwijrtNfmGsgKiqXSF1swFxAtV2j4pyZ8mGcdmv1GjL94jQ6k34X",
  "key3": "3UHFhKr9UzNy3UWvH9exsfJnmrWmMr5X6ea6K3RMk76X14VYueEes38SHJtLh2WYpnau86Bz6uyVBjW5XPLs6kgu",
  "key4": "4fM21Y1vd3713Y2d4a3qNEwhkGfKs6Edg3T4Rq2i7uZfFss3qouK4bSpksuxGB5UVyrzw5oc8sRGqEH8rVneCT6X",
  "key5": "jqYhM5ocNm6pPqvnig43spGrURXpzYSDVDyFtDdsZ6PTursX1GWtw4sboNe1f76PdLv3fL9av5D2p983euiZh2t",
  "key6": "585xUr5DL3mRb3LNETQQBFZDpnvqZKpGQZFFHJ6b8veVyNXWPikj9Pa5kwj1AVaFC6eMHYcU3BMnMw6fRHVpaGzi",
  "key7": "4uD8zCTcBrt84PL7hV18BXfjnANNMBfLaGkGv4MavDQiZpReKtBTwSD6c4k8z4H7kRpzY2d7HnvG9YDLxosNgg6w",
  "key8": "3g1fgK6ieWxtuVKNyax7MEFiubqRs9qaApCeYKVKMXbUH7TPyTsB4vgQzwfToJW2zD3eFEDLFJHxXFtZ3anKnFJZ",
  "key9": "5CFW3zcnSRuX1XfTqLZQMBNBReXgCaJVh7dqRyrqbBVce6uwUATKqBSw3rcEpG6eBLrDJ1XNJispxY86y5nrv96B",
  "key10": "3ZAxebzd9TBg18xuW19a3ZmGX2Y9hwferXxgP92g1n9LeME1eXq54TWX1eghy9Hu66p7bYSHJ9QyuSKsUGHxpgsR",
  "key11": "3UmaDrzXs6GW3js55aVXmYvqvqNw7b7bpfWVoYZ1nWJiLfYdmcrsq6YBxw2RVSTL8GgDnYCYYAbKWgnsH5cLzh8Q",
  "key12": "gsHpGAFNVQhzaR9q5Z7MhK5v6kYwdMrnC7n6exDBe9JtuZUSCx4Ndo6BmuLwQLGRdszSE5MCd3oNskYbpJDJnSf",
  "key13": "5w9NGxR13e28KEexvTdX4ACfeti4jkNoqmJGkgXNuinsNxkYPoo9bfGnw5FFYnpFYCB2JNQsyVcDqPLFodKatnSb",
  "key14": "SZquhwr2yMYvnwH1mD12DhGaBtZ1WaLqg6XNAGYMUwthERUPfQBVzdfkx9knjxu5kP4t8LT2jr4ygCWKHzsA88j",
  "key15": "2dXqrT6BaDxsnq7ZK9JjxLPg9JZZLrMkrPsgaQgxRqe3neJnPFUNLiraCVQPH4qwjrc7vAbrrYFwWYpPVfYf6Qih",
  "key16": "4N955JeBMcbQaGFfo8M15zbvFGwN1tc5w3zUoVtReEzACehNHTfnE5tVMCShnaSj3dAvWUTC5K5MV5F6fAbwNP1r",
  "key17": "2xSiTZefQW6vK2Bsj5HxUZnCRSqv3bXLfmxwhfUTAYnK7qnbp8f3tB67matV2nNMSs2jzU6Me59QdgypnPh7WF6e",
  "key18": "5N6PFqpYr4jLFt7gvi2RPMr1forvB4wJSEcYnx2B5yxjqpTrsRsixdtzGg1DxvtFwGUJxAKtRNCkcmWq8hpL2Nmb",
  "key19": "mgcCzDtwJf72QivTtLkXZiFqTqCG1KQ9tSADPkd3rKfxErXQ74qBZDUfoM4QY72CVko3pfjjVKSQAJN9c1hzxeo",
  "key20": "5XSQNwuuZbFUmkxmzPnnGbkzHsdw6qAU6wfE8pQdQjNuqh3hmBmapeoAPq7Z1eCcriswQ3BirrNVX8ULcMnMg4Pp",
  "key21": "sujTBVPqU9hfgo7goTDUvejmgXiQQcLFYkVJidaLpzssqnAFJ8rBpdnshLBwtjXe3LPGguFG5VDMPUvrAsYVj4Y",
  "key22": "48gvnvVSnaaLueTqkyzS6jmBDtHELH1jVXGKigUeJKU4wgwZyMUTbv6cdHz7s3u8kAyE6fjpLt7MExiQ79qzqAuZ",
  "key23": "4EumXzBYsjdpfJGQZyoPDRTaWG1xXhJ7wmPP73BbVKvFQLpYZ2BkMKHM1wwXWhKLFEKzV649nbH7PkW6ByPGDeuP",
  "key24": "3BFJhoD94NHq41RC5TRgsdafHWrr5LcDR11GhfoATGK2e1t4tpc8Lg4dhfZaGLGh1nxc3kr5BmzGFgBZ95P176zS",
  "key25": "5eWQs5fSCx4DyQGFtX52Pde3d5JY69PGYXtNazH9yJH2iKTiptc3B3jmrsMPER2Uzg9DsbktTobKNu6yMsmWraZy",
  "key26": "3qFZpfoMZEDWD6yVe2cgCdWD5TprYtX6jW9Uv8qVAGMcCaZEoMTqhiKnMoEUdWQZdLoZVDHFDH7DxxNenWHFwqom",
  "key27": "5mUdemqiJMGkKFikLQb8kgUbLxii8c7NkK3u5Xd4JC1fnCLd2FFwWiW1dM4U2o3Wm8Wtpm5s52nYFvcSEkVeZ5yq",
  "key28": "63ikydx3PRCa3XMHVmsr9rgcYLxEuU3rUn5ccGkMk4MsEc1xrmWoBKsp58BgN8puk78qASdpiEmDF1ciWRFfNXqv",
  "key29": "59yyvRf8FnUM4YW1D4apeQqbLngCRQgoLRCke2QoitVHfiQjdrZn4o45oKRDXPGcV6VyNRsUTavFTepyGeSGXbgq",
  "key30": "4bCYGo8V6kf59WJ8ri8paZi3tk9hup1fmUu6T4xhSvJnfUeSy2vBK2iERM7Wrz4cRVyu7m2LGY9jXPwpqVMh8zcN",
  "key31": "4c17jMBh5FThb5teMSSvGvFRCuWo3ZF6dKRbo9ewkYjqsR9HxpzhNf3x8e2FGoBza6c6bDrSkHJhaasMMTuCp4Nn",
  "key32": "3X17TD7SHrZsrj19DwLcHPNMeSVRJBp8u5ghNeoiaG2jNrjpbLV6G4Tq3r623UcqzZTQyks8eE4PYdPpem9VQgnC",
  "key33": "2wMUNdqsv7tzJahvwuxHnMVrrytw6FtGk7bEJQcQxLzoGTZX5YdR6DNhXvaDu6XG5x8ZeKusqBrzHZC1FDjt7cUM",
  "key34": "5DyaG65kabo6WYnSqyM9d48rqEUnXpvS9fqerWmd2jorubMTpbgBWoxAY7bSNQuLVwJ9sCvfc5qEwvvb22HiSLN",
  "key35": "2ap3XvwfyHzehz25d7BQZZ1jn8SSdHNsFAyKN2WcnaGi1gmo6LVEkaLnqfgESriHVc9Ht122jUhLXh9Umr6pk26",
  "key36": "4Msvqv6XM8TaQkX2td64HctnPhBeyGqnuty2rWfik9PNv93qzVRoRgLg1wVSaoXVEdJgru6fHM5tW3g8qaRdvTz5",
  "key37": "3CJKVNw8Ltq76jNGYCCGRDdR6F15G8C6srtJwYGLd8qNgiF19vheLPK7nhzFDAhmKarpGqMRKezBxnVNLKZycNpW",
  "key38": "3dr63jJfjc5SQFdX1gVP17fbrksdzZtR5MhnRN2LZHLVxHsep4zW8xKBhzVwqGp7LFMErLVgsoXbdU8EaByHsYcK",
  "key39": "3QbmizQjHyv2FiQsg8TdPJQFcoqUDRtQF8cB4G3yUYjGHjEmqKPcs4ioWfTcJRCRRS19BFnbdLpqkBTrQv9HXETw",
  "key40": "yvp1vxbzWA51Jm6b2GAp8bTFYyHafMZ2A6vZDBpS4rzzMLBdt9zUUUoJXh7Bdg9E1pM8aFwmQW4uSya19PeU7rS",
  "key41": "4mnbMhWPrMTBrq4VQBAPNHxvSuPT1kW3wxjVUsdNsXoj5vSgfzFbP8BX8ByYctYhYYuDVHdnt3VFvBXErB5gaz1H",
  "key42": "4JXoTEn11H38V6Fv9X9N8jZcnp7b3BhsFMRVYnR8WTGBsRefFbSJH1WfqCSzZGtiKgg9RHsS7TSN5pba6kCUh1Us",
  "key43": "2NoCu2wUUG9tQwXA4YugJ1MXT861QBBPicctYwHd59uCtJHzvFMt6wDfjDXpxcmPHR4ajFxsD3JXCtHuCWfJsVKw"
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
