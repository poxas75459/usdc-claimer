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
    "5xWiVDkJRWLz8geCav7xu6q1K92aiSNBh2g5MQGcNTdFFU6aWfobK3ULPLfGNpzqxLaAF7kkWADzh3jifa9HoXeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5EavPfidcRYMdbKdMBwjNqaEpp1BeM1Q6aUe436jVUpVopVTgfTNG61mf58UNLUPkro7EuCTCtYkePXnARADMR",
  "key1": "3LoTtNeCnPszT3G1rMEfoBKjGAu5fcQboCWyFrmAaayBexo8EDDBMdpSv5ewdNcTHDxrWMsCDinjYg2VFg43s69T",
  "key2": "5osfg6BhYTnj54HHb6kqgtcNurLwzHFdzRfiY2j8VcotbFQCDGetg3hEjDnspNZY3KB9HMrjpvAvp5E6eoU6SESs",
  "key3": "54fPL5LhkWtGKgH7iN26XG4r3CVFAoFuvu8KtHuiVTNCbafdGv4NxBVxSDzt2bYdfHBzaQfys6qhsqo2xcye892q",
  "key4": "W3grcBCSksuEPtaUwftXcL9ob7UqJ1LE5icYd6kw1eGRQZuxHkPZfngN1Qw5vegKfNvUqhMnCofz2ZiPuekBvCK",
  "key5": "3NbiwUgmVMnwuyu657L9UqGQacLWuYEyivvKLEK2Y7qZnv9bvar6Ao3AUxUoqHsdVbJefjVHMRNfyhVGmmvHix4j",
  "key6": "5zZrLVQK4m7MPpezC4R6KGPARJeQ3aDKCjMd6UAS3Se4EzFu5awmLBBFuvNfkpeug36BpfjDKcetTS6rRBLjkjhN",
  "key7": "4JLiQodi66BYWpErsimDoJFSJ2HCZcuZQqjMyAvhBS4wLXnuguD7SrA5Efqqq9yK7DucrbuFbADKCQ4frTuLqiHE",
  "key8": "2UNUVJFEddzeyLDYtRfuzLMQtDPVdGE9pnJojc4TL88QFxVoqy6DSMKf4kVzLU1HaqnweZhmT6MR91ZHy12kmCB5",
  "key9": "5ZtGb6ZWtTLNAe2QEMqzRpHYnTDuVMz58ewTgg7HLSNmHpPhKwa7mTk8GUeJhgCoEmULBD7nE9DStXvfrWCHKpHn",
  "key10": "qcxDK7wpDzNzB4fAxWxHN3tH5Q8Es9vrcTjfa1SSHRnoMfVk51vxBjyh1YEXFthKpgc7yF6qoJ2NajWTWN1z5TK",
  "key11": "57FQH9gCpyRoPAR9tK9z8qi2hzrbHs8LGiFe1MZno62XBZSjZerVHs5twt7n6GjVr9M7Qi9z7Q8rcxPSgRnNWBYY",
  "key12": "5gwSjKZFJwnXPxhA39j2PePWofw5zZLuzwV4aibE99DmZf9Pp7wEpiw9qxG5rL1TZX4Rx4kotSQKzk9bNKvVgjmo",
  "key13": "4QyioBwCByncaSYrkF8K7DGD3pMQqFqu1JJGSDGqwt9VBEFTWQdCY8zEEshGdzcALMYHHfQ6QURiMaQevHzuAyCp",
  "key14": "5L5VhgRJHvYNV49rNrk2N3Nei2Yts7hM8Kvbdddy19nv7zvSU7iU7cUesyCcobYaJw94yPV1sLHsgi8te6D4M46M",
  "key15": "2fKWJ2bny4VKwh6UtVvYe5jTZHAKMP8ZnHJT9MH7d79Aiz2W5yvUyNv7bBySJshvurVfniGSrTFTRQqRFbWULe5B",
  "key16": "2ByspNGt8eGTMX8DJCGFiQ53V9E3RszdPtSmoFLiyH4FSbBhDqsPG2Qxcgvtpu5Y976yzvV9A4GfEBs3SiQMnziU",
  "key17": "2XkvNGFQCPSv7o6YzXybM5C1JnRFTMmxmRdfHPbiqiQAbRL5rB175tHXLznMHr1ZEoygWrApVFbayVNjsug1MuuJ",
  "key18": "62YJwBv4Kh9ryvcQcXntTLLWQtf7QgorRuPpCzUacRYjik8EYETvYhnaYLxkuzUTpNvRe4tnfsYNZdytb4TLD5SV",
  "key19": "5uKzp1UoEMkLbPaupFZWq3tE6DLvzdfrsQCh1WFUCnz5xWTbsHvfK9FdN3jHaEedAgC4oXmZVU1hrxSiUduwidLQ",
  "key20": "4kouMj7ppA2LBPgw9shkmhzap3UGdfZViUsQawNvMxrimqLkPsPu1DTtkF9bxBEqoq6EDtiznM7RKUyZc3S9ALVx",
  "key21": "5Zrb6khyfu1MJXGP1QfRuBHTJNBx4QHevMsvLfSvEwLEcvdddYQRAWgtQY6GDLozYyANbPNRCpfrxeVecCAcR4cD",
  "key22": "2QAGBF4RTpdFKDrWUhBeMuJKL1SsP83ajQ8SLG53qKKv3G3Fy185NfWkSiC9vPHxmsy28Zm8twKonLTjGswsbu91",
  "key23": "5YcduaZ5V4HynPuo3JxGnWA9rJEXLSYSmvUpRVLfKFDrqnov6roNCQPDVgagTRoyDqmiaGRfEUF4gBzqde2ekkf5",
  "key24": "5vJq6bAbuUEn4eb4oUjGMtdm4cmtb9SVb6wogGs44FxNxPoB7pB7XCn57hXKK87mQM8RXzQeo2WT8sSakg5Lm5bc",
  "key25": "5sqPAiL5mbLGWaSV7hNCXMvAKsP2CE3XDHTWiRUwHyAjKcypKyMHxEjfYJrYZ3XXMU1634zA1YQiJPUvMUu3GwtT",
  "key26": "3LBjrWx7y5yXCBmkmHSPjKZHSWB2bdrZR56dxbDkLqzvA2tYB6mwNZPQb9BTsR8dbGn7NETvLc32fzp6bnrHZxVF",
  "key27": "3m3YcFxPzNwRt1MsQYuiNMH4XGtUtdrLWKo287H6EAMYZ1jA7Mv6U6b3iAj2YndQdfi67kHhHGKw3ELA3QyZoDK6",
  "key28": "4UgsdTLtRWGUcAjHJimW81tD6hXPvkJxf1EHSTZCZgBz7PTSQB8EgZKyVdwSzKXfdzf354wEhTCBY3UtLTNhQrag",
  "key29": "49XmHa346MVyetZ6yCMDiDBgQWUeZ9hkdCH6C1WtyydzzwDQuU4aybQQxphoPazCbxo1jtDdQjDupP5U72jFPVnb",
  "key30": "EL7uxDPvvxjqb8qxiurDVQ1rWGoZoLCwxQisbKX5r4f6pcs8RYb1WWj87QkKuZCsMJhaqbDjmirWF3ufqbP3hvX",
  "key31": "5YiZSzQfFnazoNZCpwctwNHDAqg6Mq5Nx6DJwyPYmn3uqgVZqa8cjaXPUiJi47wjFjGHCb1so1kxjhMgwJs8tp22",
  "key32": "rxjs3Cmw861r17usgS4fkZwUWcrEX1X7nMLSrsfWkWgwGwTkZ5WWscGSkhWWAR8XLnw71LVsBnxFE98xWV73oZh"
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
