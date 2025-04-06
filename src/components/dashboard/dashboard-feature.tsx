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
    "5PRPa6iZz6kGCwyE3fAt46E2932bXqRczhx6uDaKJeu5myFWZvbUaH2LXKgydBbUTLokF3ahtyWZQUifrnDgqVuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKfLyD5ewwNSxBSxZRZaHfWQJ5vBNd9AeWrwHpYJX7Y9oZwD5LohpRrqVno7Kk3bfAr728NmRf8M1RcDqUN2HWe",
  "key1": "RiQPUsoaFs4HVH1pmwynXs8HaGFY27zgZTM5DNoZUsnUQr3Ns1ua4mbmLJXMFUZiUM5aWU55287FarNEMtyV6UR",
  "key2": "4sSygrUYdUdpr7dKHxtS6TXP4nFCfi7PbAyP1GVjcywSqD1ePRTahex7uPSkzDomyeGHToX1Yyo52cDwg3YXnP5c",
  "key3": "iaMMN29z297JhpjzfxRzrU8yYzhrXkuUf5FfvyeRsYELxKGPApesEV8WFXPQY6GAXtQxC7yBthXFPW8rKG2Funn",
  "key4": "3uXYnkjCFGBpsKaXpkJQRhQa29x9HdJUtF9x81d2DHZ34HNmprDfxqcuvvZRqDa5PzH3YK5rtkg6DNRZUq13XZka",
  "key5": "3fyEHkNPDceBdCrfzgQysmv2pk23diFfFzDxhxQ8ELmgQDrJD7Fk3wUEyUNcp4sPixT9ozbyfvTCWJTvsSVZY6be",
  "key6": "2b6NAw8sdsWphgG9YaAsJMqzduN2KT7SWauKmcbrW2ghjkEGvWuQ3u4nYKU6JhacQqCqAadWtLF4RiNZENHfVJm4",
  "key7": "5JUKupmC1UhoEBUYQ6P8yQWZD4N87gPCQscKq6uAxoMjkgyurn5xLz1kAFJJA7Kvoz8JXhsBVZqMCr3hSTdRpHqU",
  "key8": "5KhXyCqNaqxtZ972ZSMg2UjL35zX2VopXxBmCWorMM7sm42X51upmaPmtrdW1451Cv9H1NAbwLpSSWAjpT7R5uhK",
  "key9": "5R7BSQCJjjmSdRitiaHuEdLybXcrJin6TeqazmCkdBS6nPiGdntkzJeqk26nqLjFTHYvjQYhyeSDSV5j4pZrd3zE",
  "key10": "2F883tZH7Pf9BUbRkmzs89715DXfY92kSmjuBgoZN7bctH2TBHyaKQGbvey2oj6vSQoh7C5PpCjHmAJVKoKLFDnH",
  "key11": "5Ws1q1fWftRufCrNEfnTivxG9BRqeBN3poWpFrUekENELZb3R2er7qMRzTUrhU1sAwhTxSQqyTcWQeUXokyh7KkT",
  "key12": "Am6ShtqNCkZtUXisdkCW7H9vPVUQAAzXEsEy9rUmsibp9Z98F3aS77PxvA4N2v5STexCsg93EcNG9RkTQc9vodQ",
  "key13": "5jKWBDg8RCXquzBnmnasctZiG8mTkBZekVE6VpRKseV9PA5zAR13cdFGnqCCNXTSko7y29DQmTzmj6oMsNcp6etC",
  "key14": "5By8CfB6HDK56YAuD4YMB1m7L27TVtYyyFEKSNaXbVbwQ1hc6syH4df7STeXXxqtwnfSTwEEEDFXHeDKjV5p3Hpa",
  "key15": "53T4coytayHUieApD1YTnCvPcF5YarsaWAY13x6msVzavquv5AtcLzgRZCwPW6Kg3N5XvRAgAWuCYwcS2BvkzmRi",
  "key16": "4CPbumjhYMKiNaDdwsVvNMyNpqh7TeWrVi44b883EZQ6C9gQTmu7R6cS6SDCZthZkUmFegNhKGsUAKysdLZK8fqH",
  "key17": "3QKP54ynPFtJXBVTvzZGp28DKzAC6pWLWQeNZs54Rh8C96D1XpkVMNNAvg99bYSdJCen4qnUhWthFESyw7LxFRPG",
  "key18": "2KAFrkkasDYE38i7LNJrgSrqFBTeVz2FekJ6qzcWQ2BTgvHTkGACrUruAcy515L125yUPVwrRgeEE2ixRLsrh2X1",
  "key19": "3ffiTE97pjHBXNmigFQ9KoqymhXiBZywQffPPXs5fLytPdbqsPk2q8cW6k3J2rduc6Nzc36zwXtKgBfBMZZLHojd",
  "key20": "733kbLbh4XaeNapRFEmo7K1mVvMtznM2kpyuUBizV3Y1kqJRJgzkH7PQETWiLyqE5vQHyfXV39shiQdDJkBe1Ye",
  "key21": "2ZKMMVW3uZJPW4Fy1sU28PahBu7HbkSMCeiEQ5yzRArok9VW7wrsjEQk4nbaaZGwGFoFY7ZUtufY1suQinC93ocK",
  "key22": "2bPH6BoPg3D8WhLEFnkzjC2uTcsBZneiF6pHowkrJ76PTiuMHNfssqSjRVV8xtw2RAaZoKhd5HymvCHZiMiQr9RU",
  "key23": "6143rjngXh2aMTEth7kPGDaCZavCp72QizSNUCUfhH9DjS2VhxqdCEjWdzzJ8Z5N2eTBwc2dWkFnkitgSM1ToWL4",
  "key24": "65o693KsnjF4dmGdnmzWDY9qvnwhpVQXRiUREHcLU71kdyXn6vTxfEXssRUnygFJD1Lfmxd8S7J69M1xWPvkRNRR",
  "key25": "2z8wTK6hR9pddX4x7zbMw9tKGvpV6PH27A5ka1ito3D3ogUe68UyqQDHsA3Cz4f3kWeqybx9vhzr9TJTa8vdb6L3",
  "key26": "5n4dq8HUgcnuwewKwkA87EoZP41wo3FjWk3UgEqqj1S1ASewkaZ6gQ3KRF4jCVpF6ZrLFMwUq3h82HB5kSNooFM3",
  "key27": "odADdbMrtAF2JGTei6zm8WaWJN3K32ZbXVW7jzAUe5dqR2wRB9w1qDxYEXAxiwwyjtN4akiKpZzs4BYNW3LqoRd",
  "key28": "5d5VEML2amg56jFLmNNPaCVNpXJgXVu2fygKHjaYu2TcFR6xGztDemtRGtegBZhY8vVhANfXwuT6BfGP2jRfnGs6",
  "key29": "5pwc34zDiLKSnxwLxXL37Jeiq5bBr5d1SodwVjcP6GpDWpisPhdG6cMzbQAPKcepUeTCFAmLTtxaQ2kazEjqRrrW",
  "key30": "3FXeRnNBHKot6bq1NYKatzWYmwr7VFEjys72NCqqLUrY72Mze7ZGpRvJAoNEwDND6uq69aQ2GJgCTuggpdWBS73v"
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
