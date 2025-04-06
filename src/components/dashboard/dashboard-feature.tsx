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
    "a9sYuBQb6eDVNYHFD8xxBvhKaqk1h4FRVZN866RDNssyhjY7bv3AChLYUq1UC1ztFqvmkeKwy8YkXBBszTvouDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6HrKXS9dajdNd31BzPcBodx2hmh5eLS7XXEZvwNyERHCXD42zaHF7utL5TsvrxKZ8PV6VAHazsBrYiYafuv41m",
  "key1": "4QS6GnSnwLzrshuaJvJCnn3Nz1VZVwSMEBr1KkDTJ9v6MT1EXzHmeH9dvFQjd4V5wjPivPLAvxRktbKM5e9AneFh",
  "key2": "5QNx3tLcDE3nL7ZdoPcujGzuVUBdf1ctkbk6TuoQ1ebCFEbnNqevz42aGCTbYjXmxdRJ7uW7RLMviB6K2LYUVuGS",
  "key3": "2E37Ny5xjF5gTA3Vjd2CPxWrBEeFBFZwm5rf8aDXdfEh6LScYGjywxRtL2cP4yX1jqgjUfRFKQ9x8iBoq3kg6evU",
  "key4": "5siE3MQRfdm74E3uzhYNzdB9nsTtmE4UDvzEK7oay8zLqSffqCbftt8xwEBqfM6E2uSbgiPWq888fGehoMigsNE9",
  "key5": "2hhv9dVkDxFZ31mUeoPyXeoC6RjccfSAjEeLfdRdxdkGhPwajoYLycGb4KuvBq7v2wesJEYmLViDkGzMCXU64VMa",
  "key6": "4XJGqu36fVBorxPioRTqaCj38rd8PBw9XaZjouNKJSC5zN643xLz515cnxERV8oRgutFeh3nZn3me6Gc58SX4HN8",
  "key7": "5FfgKjdVFtxQdHv2Y4uKLf1i18McSgzs6u4UpaGe3rpycbNVx3J9hwGKBPgBZjhJwNLG1jwTmHwRepkMR7QsSjfG",
  "key8": "pMgKoFGdgj7sacKAo2PGitcymMgKcr4T7FMw4k8m95F2tEqBMctwmZ7uDxo64JzjyzT678Npn49Sk9cwLHbWeUu",
  "key9": "4Syd5obZn19jgruF3U2ti44apw6bLARMAGPv4nSYZKzji6Etgqdd1zjMFWczUdo4uRcKKztGYbjPnr2BwBAaAKYF",
  "key10": "Jjpc6AKwyq4MhypSK2agGdZf2tHhBjV9f7syCX3MfUctK2m7CbmbjnujvENQWRYn5rqKQnBBUFUtJq9Kpp9ij8P",
  "key11": "3B3wmUeCTE9KzH7UkFMatex3VC2rLdU53UnzReSsAVEPg4jViHyZe9NzfQUEZtNbWSpxEjdXpRv3GWDgdtA2LiBi",
  "key12": "4SPKgiZ7d8cQZYya7anaGHjrJz1s55B7d4WgZ6A6z6om8EvqwwDPmhP56bwj88haRZdsfkcyhYNj3cToakdVRH5d",
  "key13": "26i6cE8Mg8y9kT7rA3BBQu7gKBL6H2iGMHqMqGDncKcfzf2uNP2BcAQJU81CFNofQiGxGgYnLeiKfPQ8FJGnB5ht",
  "key14": "Ly3wxLJarjTQSRiPHSWfjmyWmRL3srTyxEGeQscxXCHWtV2adHKuZ2q1JDUwd192wpBon5gEagUgdW4r9usEpp3",
  "key15": "4VniQB9dMDSai7RTU96aziTM9bHY7VQYwjgzVsQF12pAteDDjj4jtZZ72VKttXHYjw2esWexzqjc1XQRwBuf7R7q",
  "key16": "52r7ZKJ6iZU5e4ejvwsDC1AzukctSAxZzno5Z9d1B6D7YTzL8KbMp8y216PLqGEaYVJQ5C7pq8ZwA4qgAeaMC9iE",
  "key17": "2msE4T5hEpP2fH4XfaAqT44uDVfyhwCcLbGbSW7BuS9Vo7yxrTZSDmvWUyYzYypPAgAuv6MZNnvY5pxaPZwNmw5r",
  "key18": "5wYg8BTPg1V54687frU1b6RA5worRZyp6eAzdzzjX8SwJ4FXZxmmAxNTJS4hT3o97iuw3MxzubvqTr3a6XMmSiQU",
  "key19": "5mipJaM7pasMEHjmE3qpwLotfk2zZpTBKB9DHFRj4doH1s8GtTDhPRQ5kPP1b2ETfNis2cLtajwJ3guD1FP6QgC5",
  "key20": "AszRdyhCRm87Hqzxm1qQrRV6nBZHhLRK6QGMzBffrvREtbFGKMk3L4ZnSbhGYgFWfaB6BtMvB6cBp9Fo6JGvQuE",
  "key21": "7Lxs4bZindZjk8js6RTxiDPKpmGrER1qV8P8kwF532ca75Qx9wHdDJqxkk6C2MfvxR2p9uMHEEkYbrAhwiqcfv4",
  "key22": "3oKbNu9nYvBuaXeyrfCTwBaArcoyXjaJVuSTczLDyYvHyTPvwsiA67PGu3WfaXGhxbFEV66Nte2BhTj9wUHuSGPB",
  "key23": "4QWAt5eP6zqJVm6UPfuhEmefMbhJpwTZrg9LtJ2iUu7ibx7BF8GQ3wk3zcxiKoLzubobVhT7AyKwvp5ruPBK486T",
  "key24": "5xcCZPMQkS5UTPxP9PiHwY7NDFqxsDCb3q6PE6MWTZh8rqgdcaXnGhUi7RqzsQcooZm2TfsQT5Lrs1NkwxSm6yEn",
  "key25": "3XfR9UxYWuiGnNXxDGyZJMQjcEd1UvmW7KtNWXJLX8WrZcsM1kUKCCFTqQGT8CuH5mdrtb9ksQHiL33JTwH9oZ5f",
  "key26": "b5zP5XTVgWZK1dDhFRrLsW75qhVMPpqxko7qWn3jeTQsCqgiFEZRWKyWC31fnjkFPappkabwcEwBSUyNeWUDaHt",
  "key27": "254ztyoizGYLts3bgbUK8SvKRdF8VXNBZzypstdVk7P69KUp7nXDixBA6aCeQiEEcz2fRVSA5mPSyC3xXp4obGYy",
  "key28": "vuHiT2y1srxvjCytQGVxXwA9DUqsE8YYfistfMTPWZ1vRNdRyW4QFNG1DZ257UfZY9EoJ6vmHNPVr7thQvE5BDA",
  "key29": "rW8HrH25T752x12N6ZsM9tUc24gBYSKTfAHX8iN9TpYGrA3eJqGp1cBvXCzvwXmKoMxEKjzTQ71nJZNXZQB7N1n"
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
