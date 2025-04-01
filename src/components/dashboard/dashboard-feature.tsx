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
    "UFmufF8e9LNHwzJn8qHa1C7VxNv8WJry3QsAtJ2B9bw8ZryNFwHSXN176woWiFinpgpVzqMBqzVRfRqNi4EZE4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qPgmdWPWk34jFhMxurnurtww99YMW8hKeNstPPBBHQNtYkYZY5iL6KVy6YMK6zzexfmGeHBqnzQreN2Vc5HqjF",
  "key1": "5XqQzWwz2Ge6uAPAZoUoeg1VdssV4au6NwN9GLxrbdRRBJafcnDM45DrBq8UhWRprEPH99ffxaYW8DqhszcjnRDG",
  "key2": "3dYu2ryVc96jXNUcr3BEdpMKDN52aquHVaLiyyzgQMNCMjFdC4yveXSK7sgxKJXaPRFUFxdCfTA1QqoKiqhstxQA",
  "key3": "26ypWK3Fsg6jdr5iRw7aZWaqKk3kmUxsYAD7eTgB1ygQBkR12hBsvfGdmJBq3WNJJdhffo1Uk3ASb4WLpVMzwfJT",
  "key4": "5TkHLtvbeJCAZZErCacKNSmZPQsJjeTZ3YHr6QD4y2BgM8MJTRk7huJKs6HuMW64T4xHxLec2uwRChxFkAETWcFq",
  "key5": "4ZJDhtH2ByeagvP63o8RTtBZVKFzi6wLqcgw65hRw9Ms6o1ftLCL9cAsz34reywwAkBr5ykwzNBKhvpuyQmC8xsX",
  "key6": "5uoepsgfVWHQBrSEi1NLe9kZCsGPCgvbX5M9Kx7xjZrhMwomDDEE9DqjkGHqfhkKvbnmX8hMnPc3i8U3VyYg3ZEu",
  "key7": "4W1eyyRXXHnpjnpgSFvACnGbw3L3PMGNzDYauYKWBmZ9dApfqZB8AgJKPwtKpo9K4fGebQ3cPGCadWk8qLzZuAN",
  "key8": "L7KBsXZNJ3ZarrX5MssHU9A4fTknFeihTFC5w9k3HKbnmMdeSLExn6RrafVR27mp76ehEYFzc8XTp3N4GuD5V8v",
  "key9": "4sQhzVod4PHxiijrVR62Vja7AhighPVEaEryGkGCJAB6weZST3b1KWXM1ri1PfUDCQk7KPGYFawNTZUnDBGKGvNH",
  "key10": "2WBrr9hSwj9LvAETKbK65jtijwWHbSykEwTciVkf298S6cQCcLrNTAWcSbxs5LnytyBwu5FAyhrZAutkJoWiaAAH",
  "key11": "2hmtRQVWjEDNeMCnHWrkdWdrEDDDXR97UcrQWRRA5fYrTcX5WGQynWb5XcQZSZfaAL6W5sD7f6FEv6TjNE7KzR92",
  "key12": "4ojPBm8JEVyvh8iTLRSRRVgpmwtqkvHmeJpKMimnTpeWjDo8WhoY517efycURrB5mSMrxXy1t7v8um7zWh1uZuFE",
  "key13": "vdYbVsWWYZSGqCbzbNLB1aZ6yyHFaQngMbv6vsR9sJnF9uzQfQf8gEbfmdu8B1nLyCsxJYJWeWYmqz9q8YtfVxJ",
  "key14": "3CbuabLavMZHgGbz8z7e6Aou5qAAYyDPywu8bAFpYQqH5Koz4taKinfvAVawHJqZAghs7DeD9PRhjvxKVfeeioD4",
  "key15": "29wJ6LZq6csjDh9ytRvY3RC83zPtVaraU57eYzzsCB8StXR2MJM3iQY9ge48PPUo7JacrpRgXN8uaQGz8aTQg8fW",
  "key16": "4kgo3cLsXRMESh3xcGyPuGoJcXAXCEs47DWptnwKV7g83tFrVMwLFq9k5Ud31gzBLhM8fX62d6zhp6k5s4Npom1T",
  "key17": "4tq6dRnBxhF61w9NtgJ246USxadPEeBRdmyqz9LPbBk3JRu2yK2HGmy4i4GpXaQDgQuv4bVzLRtn64iHf4LVdcN5",
  "key18": "rxQ7uPpYUEHA34Wtfjv9D5C2fziETGEa3bdSfR6V9QEKuDPrJmHmezaN3KEYzuGhAzWRG54GNGdwBx5NZ15NLi5",
  "key19": "5zeQfiLtxjpK5VhPfWzkZMW4XRYjgv11f8CPUnxSFzEEtJ9s4HF3NwBoUMakuBDWxpYYqYaVfHSnhAnCfHsLyC4x",
  "key20": "3PgbudfMd97TmxWhChChndPJf4DiEZv7RhQSe3wBsN89BtjVMzGUerZQgvV48z6i3FVcQVgnwc28xS5kPBF1vZCP",
  "key21": "2Up2cvMippBgMwjRSaPBWd1N3J7zY17YfcYyVA52qPh1YW7Ko5xTaoBcn9ZfbM3zxRKfsC5U5YRB8asHBY1xEgHS",
  "key22": "5HjbHRMyHnhvzLB1mVQVrMNkh9g1csdcRK3awdEAf4v96vQXA6vA1RTEKubMeZhixSPUpDpwYUSF7pYgs7NoiCv9",
  "key23": "43ENGhSQpiUyjEErW9eAHXEcAv3CpyGYHNXYZAzk11D2HfJpAkW8Dxd4pksY5uY9c9HxQb8xLYLB2w1qntBkbdRf",
  "key24": "5UNTuzLm8NykDfR3gyRmZxmqRtjLBaF2N4bmMx3XyqtF5gEpTBnY2pMbcWyyMfXsxfo3ZmkDnbTmxsYGzxb1kevz",
  "key25": "2FxHYhEXcZ69dT4JH3iuqs5UfaAV9ApsodAvLCwGeNeQNhku3N9VinNNQLGbSdhUCyRSL5a1Gr1u1r6A5tqTUnyR",
  "key26": "4tidyZu6txFjxqt8Myv5BbEhJ3WqxoWjfDZ95BYGgE7V9wvNsdxKR5F9YBEMc4rgVrv8H1e6fqbAzvQf1KZPW4cY",
  "key27": "2QbEdZ8tbv5MxChNB91CUr5qtug5cXgF8yxV1y1txyLX6Fxy56NxGcQDXHtZ2JNpeMfiKRRR4QamcscwVTYjzBBd",
  "key28": "4tUJtX8tKJG48bT85rwtdRW7byo9ejEZ6GrdXmc1cLLktr3UKsJwfshUJfnKGZuty4QhFKvhJnh7toQmE8rqi9vu",
  "key29": "sjrxvCBcdhpAdXVssWj6d9chbpLg9R2SK1oYimaqXW3ofteSH7V5J8bkDMQ8WCiYFEuVSnyeEHDFYqTo6Xdmzvh",
  "key30": "4CsHt4tD5FwtHJths723mw9578xfEfPWtsVet1pzzZ5JKQmdRw3cDtGtzExHxbAddcNgtXhFP61jmTaAXV72dUp8",
  "key31": "2jNr2cYrW3JYVYe9bshHn6ECefcPrH3dvopP9JL1Bup67ii55W3fxc5GDkhjmzHs7rhnjijhXK6ZdqyAMq4TNEqi",
  "key32": "49KQvUZignWDmpapbMFB1ebJDWpQ2u1LAebGwn6AvZpzxZRYzpsfbAUnnv7LQvE9jCEonntdQQeYvQW6Vjwu58LX",
  "key33": "Z9PkCtj5pj3cZMk8PR5ipmD3XPc5xjZ3RbX1yBzrtemDTZP8KjbaC9HstsypNDN1MG2HQJSr3pxmnSVtbrg3AMt",
  "key34": "5GmdAcjaEnYVH3BYibJHfN8KdrdFzhz3eNcwLR1TSoFpHrW7muMkcZbtPavJmhG4JbxpmKmknzocCaBw8ASubth7",
  "key35": "5k22Z1Btxg93dZSMqNMMDPeADfzSbshSB62FHcGd95dRmRTiEaXYbmTMoB9qdk35Srbx77WZYy7hQDhmEwnBFx5b",
  "key36": "gotQGDc4q5wRMUJmVJ4WzUWjD8vizY9abNMhCircNUckPmH2SGn2inZZu3zVkvhEibDwr3BdLQdc8vtFPQgZ7Sf",
  "key37": "48NXhYUrBQhfFRACTqUvt9obEZnS7nDbhZf4ywZ4tkVsTDY8fxE3kJYFrrvyoe4MZiBL4Hk8cPuMaANVdKNUaveR",
  "key38": "B2ZQWZFGnaLMm2RKVs56nNu4iSqXxxbz2PbFp8TswrGDewqAZ1iQCewMV3gi15fFZxNR93YzqKmZHokMgKCTZCW",
  "key39": "2VBF9V7zsMHpti5BmLVrN7vrcVBPLLSnN3QwYYBUcHY5oECN84rpgnPNP6WXYLGj7DeJe1GpscaeA6Ed1v2T5GKV",
  "key40": "3c6ynoysCbSkm2G6ENxRXrd4gXH8mULt961GvAgrHMW7nfKXz3mVxuhHauAbLqTNphzuqKLvpZnuEucWmYbbNZB3",
  "key41": "Ws18rMMD64pFFD6ztqPFhQQSS5NbbpDzGS3Nbrgd4C6cCeHt3UxwWhNhvsJTaUjx5N6SVnRcZYJGRyxAucQqXmQ",
  "key42": "2krZRrGvBeqBpmcoFmSSrjhxHsGQqVP249Akf269ZxA8M77dPKhZajM8xq5NBbhemKnQzMrfJvWoCw5iJEoPYLkz",
  "key43": "EfDKLUFpLVwgEvo3ETVQipWPjYJrADpfudXEQtwiButwYATVca3Bx6xEAGb8x79V2qSCnNm731aEtoGsVsmMs95"
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
