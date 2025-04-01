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
    "3BPKFNaSPqB1nq5DtLu9gY1FH77zr4pnzcaM36RJn36Ydmk4ipne2hvpK1gbubQ1Z1eQkpFFq9njzkxQci2Wco2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22boja4FSkpv7snttJd8nAnZGmXz9Et7VhpumgdfHQTpWbPda9YnDQeQ7jzsfMNvJMGZvTQbtado6LZB2mjbszRs",
  "key1": "3R2b1awdnDazuwW4g14XZnMRNSVbcto2CCUKxBdgv68C1Kk5E9xY9tTEDkQeVwukXDF8xoZuY6xzs3yitizhWmnb",
  "key2": "5EkYXYHtUX7nUjHfF3kwyyoEFk41R7vGimDPP271o5vzYsnYs2wDJpiMDvdTNh8daopuAxeaVWpqqnhz7AJomCX6",
  "key3": "2b6SGLEqeG6Wyvb128BWFzebEyrDoiaLDAYQeCcHc6mzNUStT7Dn3uetGpiTu7R9aKxYgsn5ZYEGez528nLDujcg",
  "key4": "4fPSyt96mUrM1wwM4bhoVSHLW55ZHWWT8UKfeBwE6qwrXoHYHez2gQ24BCvut7JFjPVUNiLHL2m8VwAhExK1FFb5",
  "key5": "2eEph7JEQzbQaBXDPtw5AgcUjyzVC9PZFkFmTBA64kfxJWJxeC7HTktRpUF2qwvYePJXP68jbKB3cSZHiDFneN96",
  "key6": "MjEQnjZo5dtUaCiJtFP9qZgxfgYbsWBQaR4YkkKBt3t6kGEU3mtpVB33eJDmU3BnZJZjytWu6XQt2znzkFPU3Q3",
  "key7": "4WvNHv9c4TduDBMrYyvsFyKNEHEQTVbKRdv6M57hDh99PRw2bAsf4U7JRWeKQ7w56kMkLfdEYLVY2PFn34EsK9sk",
  "key8": "62KvMnPMhArRi2p51onhJYomsRivbCz6ffH7RVqncBMK5QsY5ubyonQRQ7itnMTTDgejNTQjQwgBUpSStUFcVzZD",
  "key9": "66iRKpf6h8SyxGrd7MAun8oytKpANW2DvhUDbxq1ggDmfovuQL5TQDF9c6KRnPBURAAaxWUdS8NFAiPJkeiqbF3i",
  "key10": "2KvF9JGjDrbT4Pa68wssyGbD7DVAJMhEjPwktxeD68sSmPsFW7ak7jNxf6FyZnbEfoYxEF7ZUt8LEGwzU8K9SvEU",
  "key11": "zyQUHdtQbLrLrj2oAPjvuzNN6ocBReGKC95p9qf7gV8TtnPnydwWmWMYYkUwuovpcKkv8iKnd7jDRimhJxdH7Ld",
  "key12": "4Yma2CYEurA8ceHkja1z2rDJ5bZhPXpfeKiFf1gfSpMHrsATk8JbEAjkMYcBxFWbbucpKWtoKwsZK6QosRVfoBPX",
  "key13": "5F9Zd3sZFK2ma9SNt8YsLqK4Hg2UR4PyS1xKdzbwzEgk6EzhVN6NqG2WfSu3ZdYdBJW5FTXyqoVrX47mvcmmseVX",
  "key14": "5cARoPjBa6dN1qRYgQGm8D9V6kBGsF75ZCNabR4k2LBnKx95p4qkMzQEEgrNmRaa681ht8bHm3MffaBEP2yUUBbT",
  "key15": "JGesRgyq54JHFHfzadXbgiy2ctDb6dWdiHoRXMztiKWLRkLpGBgC3zQJSmw5hfMeet3EnHP5Syfs6bsoEHL2P9g",
  "key16": "4nK9Wwn2tjyEwC1WWtQ6yxouEcmrHdNrndVR8NjgUD2k8JJuBXv5huJat7gKYiAue9RqzKHjWhwoijoBwM5FgZrf",
  "key17": "3p6mYDNkfFk2uB1AHeHw611ZrPzqXPscuJYX15aUDqLBSGgKZzJ6k2NUPJTUqGZfezh3Z2kNsyvUJitbEhPVJ8gy",
  "key18": "3NwTrGbDeu2ujWLg3TxauPLNEdzQjF39EkRkH3tVML78yMJURR8bvu6pyQn2rxqJateLzgnwUMcENQFmcF93wevr",
  "key19": "22EGrg9hmG6ThT2wogJm19KwZmVYw8RjXsnrDZ4Bi9CZ2fv4GUFbp5B6PrReEZPtxo39oa1yfdvxVBvMBFxyHzJt",
  "key20": "2ca2o1XpMMxHnSfUwGczPgqRYeecttMEGrtDqTYkTfEVcLvQsP2E4PhipKzxFZdHiTi28fnYoVBZLiVXr8vLDFXE",
  "key21": "fLqL7dyNMetnnKMbzgrbw56sA2BX7epHLrji9azXahgkAfu6GZap3hT4ZVw26bnxynoYG7tapixhvMWUVEQrnV1",
  "key22": "4NSqRYYmNy2hh5WFarw524zmmVuFhXHp5XwFW47PBHF2S3ei5Xop2oWE9TLCrgX6M8d9tRoK8ghMFSr2qSfYkTSE",
  "key23": "W4j8NtrjxBhNcLz4JXXayMtDkdiELTgzk1GYb5US9mo1qAz5WkcgkAPfU3v12Ucn85PJ5ZJsBbzeNKWAfYEPCEQ",
  "key24": "Ysdmt6j7KNG8DJ1dQLE3QVPidTNnstBz1M1RGdjNyunbDSPvzwJDWsBMjXwDiLV27WDPfQBhLGDGmoyXsdxEMDN",
  "key25": "3q1W5xWheiM4fayxhbkbKGcpUpDusHJjKsP73cmeesQ19PZetRfskpMxiM13wCUsTRqQEVgvPke69r6EWpjFKL98",
  "key26": "tq6MyPCCiznB6BjBNfNz1GE3o7d9gFnJsLnd8HpWdWiwz4V7JhfwoQNKuUhhFasd5d2JosVSHJnCcjQ24BxLWUB",
  "key27": "36f234svZ5zEH39RNTavJy2SbsCwjE8wKG7wuJqmzCTHSVWpTJqQu9c5uVuhMyFJouZW6Uw2UBhjMTFcsLSpoSe6",
  "key28": "5JpkYsYqAo8pWmNJTXoN8zZz5h9PrcqZ1KfG1MiriQhNBVsF8WZAxLDmWXrBitqDUL2wnB9TduJCRrKHtQHHW9aw",
  "key29": "3sQSHhSii9QxANMdMNyopBvHXBnBo9Y18wkrDfYX8nGVzi2TKUTAoLSc5hwvhKgETuaDBRQt4gGWbxkMPMi36eWC"
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
