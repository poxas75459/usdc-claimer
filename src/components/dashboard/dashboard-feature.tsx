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
    "2WmDPUAprhJqGZLrHCMy9YXbDRE9a7Vch5vDivEhwp6NzQTFZMG2tB8RnowK9vZyfPiJ6uAWxj7K4iMBZByX8evW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9Q8M5Rj4tc5x1H6yNXLoWozKFXW5xzn8Pj5uH9fpsphPiTUD5WBVYEvNEUvFc8zvpH93aUvfiy5UBn5vcTHtG6",
  "key1": "4AaepRdVQC6wmkY6MVBHxSzLS5kRG3jTXW7DFuNHmTczZ4ijsaqZ1xhFaKxjMwvpTrao2TBxG2syDyxvbXbZmPUd",
  "key2": "ubHLSGsqpbcb8xHoK92XcThYcThKtoEkmUVwHFAjzt5xghkBRBxNkFymeihGPEqe1DoQ4S2vXYq9TKQoCmqByrT",
  "key3": "85Sn6hN1Lcq91KpiitK8ToxpUusz7NqoifcQ5NjqBPNHhqcPiugCrESRbenSDDP58Pf63w3bL2pV6PRrVAqHJDF",
  "key4": "2MVdwYoxwfqm1FkRb6aX7xVWBuPXXGoUvdyVCJrhqWrfPZodwKBUTCsEruUFxNYJqH22o6aQY2NEjardLpZcCmsk",
  "key5": "4yMgazQ7wifcgzmZNUFwkAfT4c7wfpD8UyGwE4khhXRLW5mxHFFwrXnF4Wdmcu6gDDShV1NQZCeCrBpGsL3HyBtb",
  "key6": "BNDZfHpVsV63sZJ6EwfHxahjyTX5LpdhE4Byur2tGbpTDF36twaFZrfFD6wndMoTVYdnFSdouETN8jbmUyZ1nZy",
  "key7": "5VrTS4zzwPfLvGhEKwWBE1xgyRH2X6pV8tNGSbi2PwF4rnvhRwhfGrLgXUGE4sFuvEkHSD1paYN62LXRvsa1QrVL",
  "key8": "64Pf57Yw4twXaQAMiTrBB93xsfYKFPhuUwRV1XJcCqwbFe1izMwzSjnPboakeeQxvSAKr6y989duFcru5HCteKMU",
  "key9": "3QYE4GSeHBy3dajji5Wrqb9hwyWok1Rmv6hWz2kUyGFwEfT6PryUWsyuq1KPuRdbLxeTdoPcCTdLibTkUbyhX93S",
  "key10": "29buF4QDf1vQaGdM6t4f91f3prkCDTgpskeaM4xtggezkyecibE34b8Y1Z5UfM8AJpsBaMbZNqrgeiyvdBEw2Mew",
  "key11": "rLnpdMBqPR5NiyJuLRDoXTbmrhyssBKCa6ZosEwBN7Cg21VZ1vfMJQEPpw2DV2dH1NcW7s59SiWcGqkRr2NRDba",
  "key12": "5qsb6ngsHmbEVHTVLYvm3qrTxSHNF6ZSaM6J9wHq9ARSYaRy4tMTZny8dUTWSmoY4xp9BymY6BFw2erUehrNSTxt",
  "key13": "41wnMXkj8tuGro5KnD9sEUr9Qeip5v4HFmquXuuQxxnDarWeiyKcpjJzf92ciJz6q6ETABK28eo1hZa5Y5QfmJ9G",
  "key14": "5SsA2Qagtt4Sk3tUf9MMqb12ig6d1Xso12G6gVRU51Jv7HFC12PbrcNMnzoHcVjujLeNq6QBMupDZcd3UNKB6wmU",
  "key15": "4px2yErnjcGHFj6ufpiEUEbLWERALnvD5HJm2U41NhwHcGK4hrqJ8XZA6hR6pwmmZPPJJSNT3x3k9xqVfT79sgem",
  "key16": "27D1HvSRE3jxsz1UvYxEx4JAAALiC9fUyJdeY61ySzgk28eTW7fMFNawT8Lf58AcbCDjqqnTBBMccbcWNktVBMiv",
  "key17": "fpZS7Tag6NQhvXBaC5qmE2bEsnrnvoC6dEVkEyQbrxx46KH2TtvuQCnCaLMHzpW1k8UErNCcDarGH8qUevRK1kq",
  "key18": "5wV9mMuYLuygeGvFifrBu7xEdAqtTvxV3e6YS417sqWWnsYDWFFZeHQpM5DR8PXEtyqd7q7QWc1c2BUKKiLrNXD1",
  "key19": "67M7u3zmYRE1xyGDqBQ5cixubn2HRGD4huJdd9NbBMEWxWisbh7w55w92LJNM4BxZ4Vu6aLEt8bU3NZ9TRyZ6AWv",
  "key20": "4JrEehHA56sY7Ew6H7rjcANRRSrfm1kfdzunnxPqHstx7BZHJeYqAMr5hHPdyAqFfeQS7Mn1w3U311wj3HSbW6TH",
  "key21": "EnoBXMD7btvpawHytWh4HBuFUyZWxK4PfRaWp4HpKu9dAuqEBMrZcKPUKyT24EDWgkjxaHcnxe8Xmy4Aazkd2Fr",
  "key22": "3J7z3iXnUq7cedrQHqmtqN8ywNg4FpwK79p6kVQ2RrLBZCZzVa9Npn6dFcbAXnuJo68zehvgojYfes9R3GGoCHVa",
  "key23": "63Nf74qsFPSfTViHT9x4XZFNbsR1T8uZiuwQcXKVcCPy48f65AXWz6wRZqE8vDVE9FV9xjVYVamgPcdHQF8VYbvx",
  "key24": "2Vc5bXPejMoE4JSpoZktMdnSwQcQFyXpUakK5PQSkCaKwzhS1mGCqsgConqnYNsdAPneB27ca6nywaSp5VNaWgYx",
  "key25": "e6qpQEPEKCN2HKipRkAFWDvJAg65V2Z1g4XRf9zRmNk5cFx1ajv8pChxkRAKVEaW2mYXAwnqZKdhdq5j9hLt5MA",
  "key26": "bYQdTx6XBRhEsATD7PS99ATMS31uGAqyAEQWrNpMFVRSbFYh38wqo4q1KbT2mWx7meBEpg9kSACxTELDkbQoWo1",
  "key27": "4PzbB8nSvz1qxKoYTcuVByfHVCvZ9fb9oHqBC94deirdMFyXNwMP2r71NTBeACJ9LLdHbZ4Jn5ujJaVzvQhPeJah",
  "key28": "3ehzRUE1yct363xy5SDot8KHxffbzqFqY8j8Ci6wm1vF59UahPrZczkRjhti751SgmvwLy6uydkaeNJ7zbWppbLW",
  "key29": "4EU6swi59kXvfJSsh9P77XMnZChbKUKDN9xPzjN23Sk5LfcVR2PVHCGHDboSnoUZbr1bP7g6HPb9R1LDV5SfPSK6",
  "key30": "4x7YPXHbQQS1efdicoPJhfPXPVgpyR9VEhT7aHvSSv4d5Dvr97z5i13Xr25ecX9dZw4v8aG9NHZEtEg1aZFrBPTk",
  "key31": "2ujYtQfLA9HzXtEDWaawNMEdzLz3qvTWNf77Fhfrm4yujpvNajWedEQCdp5wPLhb1TH48U9NtW33w2neoY79Fc2D",
  "key32": "2oxPMg7yHU7s7eAo7uEZp2TmpRJKX4wFso6tPkCTNAinBUvZCwMjMN2GRNE1ZZxyt5V1uDYD52n6DqQ85fowP6F3",
  "key33": "5MutrwTrMY4mwEeEC75PgjByZqwbjaxLTEKZsRUwyWYdfpMdoZXU12CTyWMY5WqxJfGPNDDre3Cn12c29sHYkcXP",
  "key34": "5zZNFcq3xqmn87hJFaeZhwxGkpX6oGCbeY7LZstzzBJiGuvGXvgw8zmtNxmoLitQcsZcM9UqmwHWYYuPWjg92z44",
  "key35": "5xV3kz4T9YdhuLZTJVUd85eHjxMq4W5BcKfvSRqV3112xMR7bhNG95zdmDqAJY8wH12Jorqowa2e1t55eL5MgTqS",
  "key36": "JxygXH7P9yWHdSKizW6yBXwuVdHunRuj5nJptEqLTBXgbRriDbd37xL5891ZzezHFftyKHPtNvcCKSy3suBNEMb",
  "key37": "5xn1zB87c4V32KM2qRzAnqAHLXF6G4HENiYqfVQiETNn443PFyZKL3Kvj4zMN1uiVkWwdEFKAw7KzNmRzBy2mne9"
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
