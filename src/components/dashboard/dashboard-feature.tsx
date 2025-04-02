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
    "4sAQehjSW33bPkHKvdtyqPY7paNSKpJh52ijUhNAjwrp4naSVDZ3WcSytuTveLPMrp9LEKLgZSykBMVHPrimt3aG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "schfSADsNn6ccuS1L2obbhwwy5tEqvrPUDP7rMUaW33ghu7LAqGGVY9Ajw4DTsedsuKViP5wmdrRFDF7FeLqeEi",
  "key1": "4zEXnzuZPxi2SVUQXeXKrSpLcaGDerdydQEPimdVCV6ENPvqwyjwGQZxU8VFvrFQJ7xmpck8gWdZJEG1Pq1cXKTd",
  "key2": "4kXsZ9Fa3uzyD4WfJNWzapofGJhawarvgpaiZrKuHstcubh4nfPvU4XFsT1A3uuXj9Uwg4y67CKsRojuB3bEUQvp",
  "key3": "5p2BF1ZC893FqPSBUaJxhWjrL8bnZpTDpP3oERMZxDdYSrAqo2XfGSpADFaozQst7XWk5qD2x9pD9inGBMesGYgg",
  "key4": "4zVptfkFQfHFL6dpdXqLpYyh7tyBBTvpUkSS3WBtweCVSjGaMUwQkGbmje4xZxZkB5dwn3nb5TpmFEKufd96sKFg",
  "key5": "5Lx6Jg75fkZr14fjgwfCCcGy1CocPTCmc4hoi9fD5qhUsoj5BiEXHQSEDeCPHWq91iz2Gvr3mqPgPnb8STe5ijLa",
  "key6": "5BMnZrRp5eXdnj3gE1pkLMYobcWtMuyoe22w3popVwzEX8Hjmi6Z3PGSxGmnEfU4rVF1FenVvfxzbRzQSEM326W7",
  "key7": "2iPdjsTTvszR1Sioo1HWmZhKx89xR9XKMXhSbxNb5ypGWx3eXdpRuqsuQgn3QJ9in77NnFk1jKUQwTWNWFPALmyW",
  "key8": "ZPxg1P8oHzPGTJzjJPoRrTr1urBjWTtQGQ9j8fnazM8vLinRvstMjtytuHqAJWvUtdypbqeCiXSpVoWZQxc6sHv",
  "key9": "57742nEk44uUdVgtuotF3C4VkW4CGg8S77kHADbjWR9ak7C4JLx7WzLjvYvQiSsfE7NqfcVKMG8JmL7M6kcszYSu",
  "key10": "3oKTbNmb45bbJjhuFXqq6j5fHsRQmdxEajEFwUFZL9bkWxFxHpQ71uDRt2nsEtbF1KVT7YkgxCJr8vW68Tv5mNBa",
  "key11": "3fd5LrsNhUtUYMApynHwJ9suSy3YWYDCX4wh39u4T3gBmbicvhN9wVsSLXasF4caTC99AKFUSiJrtRSnc6VzPhgr",
  "key12": "5UwQw61WWEuY3zvL5Gr3SXpjumcaLJkformyZM8QxZzvfMSC8u3Xy2HKpbg9dQsQHgJ8QVd8EMJPWCx96L5bNaz3",
  "key13": "5dcpaUENNGfdCPBfhznhARy7PYeXgtJTvHv63vgCriF9MtcrUNbfZdEAVGxdtngadSt5NG6N37jGFbWoCRZtUaZ",
  "key14": "5twUoGaCzwkfiymtB6uDYf4n7cDhtfq5P3Ltkj2M3CbeWNUZgApy7vNnrVX6P1D1mkWomJNuNtjELwVkefBRe4E1",
  "key15": "27JuLv4B7ZAPimRdZzihCxNUG4G45w1XXFtHYUWUP7vCaAJa4h9aqjuEjfH7f7oTDbMZPJ57wvCJZcrQSWnyeR9t",
  "key16": "3VVbzWkThUDvydXaQzhNBu8j94bdZhAVp45Q8Z9UyCXbsR8b43RFi6mfwrc4XsDSwg7vJjN8ToAvdGg5mnJYkNL1",
  "key17": "2WDjQkkpuEiP2vdfj9vAjUqBn64n6B1XYfK5L7CoryFRyAccU5rXzedt2eDNQWkiZrDDJu9neSPuQDjsdffRsWoL",
  "key18": "3zhRX2R5kDMCPrX8WNEo8wMSJasWZivWgVpyuVPXkywPXTBKDJCSSgtEauw2Ro2v42buT9yRCNUYmrX7uTeQaSw",
  "key19": "4dpx98f17NEJCpZhJu3LBjz2RV1E66GfDQ68oqxXS7QMkRaYfzv245a7MxJsjbM8FfjM6WAddsqYKZLHHpQU3js5",
  "key20": "3k6B5Yx8WAS69XfxMFFWTE5sUBEfcuRF5pDiZYLKLgJev5hQNJ5iSEye4PFnkySF851cZQyfCDQH6df3jvAvMAoV",
  "key21": "3CXUyau3eeQ6QkdfuXxynsdWt5kdx3hibfmBYfBK9jS6zwhRbe25QzUZ1osf9hmZA2n4421S2KTvhEgQ97kG8A3t",
  "key22": "2xtVqLszDoUSeBecWoFWVkDEKXbPJNzAYNNK1s4Xzg4Rw45nhUSL5wb39JnwbYnBHEhGKWvryJPC2CjTitBJJLhM",
  "key23": "4cosGWr9RPXnZGS51N9jtrqyjuUkCfPFHGUv4igs8LtudrxTxf2LQgGX8Q2z27x6U478Jv3WGqegEawjVA5BqhAB",
  "key24": "kmCP969XTHshugyGxHyCas1UUjjUxbRqPcdRxrvsF4CQ7AmrFWXuLcF4hbFGd61Le6cXDaNgcpRY6fwXsANk2QX",
  "key25": "4tMSydiYZdzWstEY8CLaMdHyb9Vz4Qu6XZnxUct3yrS7NpGYDcfVqqX8kjkrkWRzPYoQ7ucy8dNnuX6ZJtsKVjQw",
  "key26": "3fh1mqbwXfrp5mCuLqzq1f4BSWRosLmbr3YKkCtg3kif4neeb9ZPebfszN4UtEiS5ubgxbp4X7ZmA6GYgbF4xYsy",
  "key27": "noahkSscnR9fz3VoBKFqTHpdzQiT6Cn4bZ23chLbqE2vJ52rMtYnVFWgPPgbRBZAC3L6cag3zPphK59FFvjMbLp",
  "key28": "sogquk98g51pcmRdmWLSAGGvdzBCmxLFKixcHE5yiY4hAqExyh2Vuh5BQkF7wvQ8GtYZZeZLyqSFy6Npdyy9Kr2",
  "key29": "3d6P9BL4RCorhUewWx7T2XhoM82jwiJHrBwMRsXQuLCroFpMCvVyWQwMGzubeKq6nzrqva5cNrE5fwgmXZ4Ayxui",
  "key30": "3LZzKxUfuoTWrc4RqeEc3By8cnnLiUjkPrD8q76ebxNsfUaX52Y9CHr5erVfJ4MLphLiUgXnPA8gvBt3iByZpeKC",
  "key31": "2ez5t1fQdZRs6m1A1mxakgm9ThiRnCMbgANHLivx4nkmHVByz4boj7MeyEBUekFoCBzM6EvWuDyF1prR8uP3Xo1G",
  "key32": "2NW6Z58XrwZVuecAqeK3yByEfw1oGb6p3CisWE35ko3kb1c4NeSiojKsh8CMGCsxkgDUBwZ2rSkfrBRD8MRvBrNH",
  "key33": "4ypfmPVnxbijrBpAa7zhBuLLFhbaqnAnpep1N6t88jSf8sXEqRS5QPi4sXV1vrDB6wd2VVDfpmbsZd6y5fNh8z6T",
  "key34": "2a6ms8ZArTnnqZafT8wJYoab9jq7sAsSefxe4dng5hXTPTcTtqbFmDDSsECMohWXCkSx5wLV1GWDVkMh53UQmWuQ",
  "key35": "9krYKPgcahFmvKRdp28cybmEeTUnfifz1NN8Ly6vr2ubAMJUgcku3A7EWkEtPSqUSTCSgkU3q2SPaJXG6aSSuoZ",
  "key36": "eqZGZiYuKANn3vXBGbevhbBFm1sghfNbAu61QhT9KfXcpfYurTk6XospLTHaxhFp6mY4rg8bmPTwWUcnCrqFVgZ",
  "key37": "4NE2n9HNsnbyr8vZLXJVThtSWTqNzumewEhq1KQZJiaLPetFJqPgm5pe1S3482kLC7cTXXKnLYSYzwsg9CcbhgzH",
  "key38": "3kJ7pzDVuoYsY2XGKKvd8CgwQU7XCmwKEkrWpVfJkfxJQUVJtYhDdHrHB1mU3g5FmHDQx9kktPSccDMmyHGyEX48",
  "key39": "5xXUEGFrdM8GE5Dn4GLzN2GuanGWoWNSthxWksEJDdL2hqTKXujZT76GcwY8eEDFN2xY6WNoaMjeJVBrUJkUV2Aa",
  "key40": "5rVYyiysbjQK2G5rWdahcnakuVS7Gj375sFho1G1NFy21pShC1nCe4qWswSdF74yCJfXbgR9QFw5WcvNEAHVRjYm",
  "key41": "4PUYEnNVRJdtFuFNyhcJusj3q4nKp4hgscXHPHE8YTUzfA8iwP6gyYs48AFPFY7jG5JnQtJ3pMj2ZgRbYQKc8QsZ",
  "key42": "5KVggDu5UcusVc2uM5KndavPMRe8YDCKnULFd6hB9u5TpkGNiHLNbmJqTdszSGydzKXtUNGzeTSCgQ9tDaAnPkjD",
  "key43": "5Cc13Tr64tWGH6X86thxLr1SmsuK7TWcdF1jLycgDZb57jaqYx5YxSRuQsiLPZcvDQdeaBLJWzMUb9R7JXv2ntFL",
  "key44": "533kVzqFfsAfssXfsnQBwRYuMWXhRc1AXfBh9sJWBNtk12HJwVSBwS1mSd6ZSD5JvsGBkxqRAjioCkHXXs67dV7z",
  "key45": "4Hu31fyQCbqccD8gZz2z65UrisYfBfoSGTDbuf7ogn2wzWk6QsJPGYUYdWovaZMF2ZWqYqfft6isKUtt6gvmuVWX",
  "key46": "3Du4p5KfMwC7Drrizqxjn7mBM5A86bu2piQExhzTKDdbo5CZxMgFp9XXjsTxmeyXH9tG5YwwbwfnxXVmztdbboBq"
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
