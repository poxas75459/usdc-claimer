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
    "MHnQW9iPiYvFYE8P3LQZ5tMUqngBXdLBby5X4j5TfV9JHJDks2baVWMnyxr5LT3zEhBypPHBkUgs61WMWERtvpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGQsaq98PxykyqqbxBqv2yyZYQ5phPwfqozrkYZExFHXZjpexYPXZLHCinKUeVSR5NX7oGzFb2xeFahwopHU9Hu",
  "key1": "66Dyfb8wqG1q5Lkw3qiBzP6ZzJNY3few6kM8AuGqqX6igLKSzXve4cwRV86yoPnLVrSce8SNrGASH1JJj36CpmPZ",
  "key2": "1T1H4LZULFYBZH5mHtwhJRyJKNVcGjwH51rrQ1sn1MtkzjwD1x7QAcn8yHZxH6H6RD4iMwEa81nGRovy7kTnvaP",
  "key3": "G6nzbcC92wYwnS7S2WFKxr52zQUhy11KPweMEjDv1h3jmYDwDNLdh45GZkUBEtkqyFNNE8AwgZj7maCujqD8r7S",
  "key4": "3xWHX4KFXxRKtALk1rygRy9MJa7oMVpoVmCUuPgQpvRXp6fVEA13qiENtBNoA5HhYaNVsCjFHL2rpF3o8sBqjocm",
  "key5": "5A2WfaMwmts8AiMWVBDwywUvTov9NiVEuLGedyPggfvL9Dz1HUL8X4acogqCpPVrRosN71hC3UBFp6SZ25v87mqT",
  "key6": "FQ6C5Zx3iiPXhpeohEEhhqhX8X9DhReoJMia7nZCDBEN6sNDk3RbMMi8Umfph8d8iZviCs3VLUFgYvExq3mPiiw",
  "key7": "4CJsNVrypPouVNXEbAwvjB7xyJpRUtMwNXoZLu2vSMdkmj8gqV3SgEG8j2V5FJys6CZiTU61YM5FL7A7jWbhLqVr",
  "key8": "52beG98jYEXhPtgPoE9hnsUhETwuuLQPNdiGB78rWMSnfoJWox9ojWFvyXFsFb1VegCo3ixi6kHND8a8mtPCq2QK",
  "key9": "4gdLMqn5NwguU7F9HFM8qo3ftKQYcWsoDyX6Y4qjfm6KxSyCeboSuYwJpr3eE4YRrhjB3h5MJUYzZoHbDdASk8Sd",
  "key10": "5joT7bBHBsiHY13CBrYBbvFQeEJW8cVW6TuVpGxY95XyKyJzRb3a3bMGGQAVTZniQ2z9Bi3bTzrRJBPoH2WGEX53",
  "key11": "5p3Y1gyo4KX3nZbrTjirYe6veMbd2mwq5LiCe6hZZSD2vtK8LxuNbdfekAFReFfKvzZvJ8XjYxB7RoA6ffXmh5et",
  "key12": "jTz7cNiYSLYt7gALL4iiC7kWifZgjHchXnHyi9oDGBPBgf8kuUBic35jBfEidW2G9VVcajDWiATxVkAHjSoXEui",
  "key13": "8MhLBef7boeg6yqNSQy6Rtqm7JdiKEFHYqiXWhUZje4HCTvcQ4fhmxDin7WCrj94R5utiuokVeFf5XTmboiL31k",
  "key14": "5kYyQAQUHDbzqewov4AK7z23FduvZmL5o5CapdZ2K46zaKcVjWc43spUGamgGj8p8BtVvxvUbZee9PtUynJwPFcb",
  "key15": "2XqMPW4rcXpFESXf2GotASFByhbDCZ6JVyUvrU1JfSeePpLEDVFFWov8mhw8wjdQEaSBtPKw9SuvDqDZaYvYJrYQ",
  "key16": "3ZedYSENhhYckH3LUcALaJtLx1gqvfDZsEyAWpQKeR6dZnhYU4CGR1wSJh7jgzZmMNaDEP7auyQfGXDT42nme8Ds",
  "key17": "5HiaAA18bEqXHT73AY28ENVnVDD3ozZZR9zDnZfwZHNK3qLDag8yysrQp9z798KCMQ8QJWvLEqtqaGQNuowowMsw",
  "key18": "i4Ts2XmPsf9ksok8y9N4yYdEwsFX1CkVMb3oZwtdGzgK9pYW9xouUtPbv5NZQg6LEx7fUQQbLNa8E95fqnKkZk3",
  "key19": "3QDoQ3QXHDf5GeVrvqCzAXTy6dYQ7WHq92dnDLHrJ1uu3oR4MgWjozJxukV7KvAoUejY1VqxQWcmSayjmGLnWxTc",
  "key20": "23NCZ7omD6UzosgQJ666wkD8bwQLEdY6NNLmiuLTpW5SQ2Lr2DrcNDp15B9c7NQ2TPR5iaetcZoC352iBe8mEuXG",
  "key21": "33wUzNc3V6njDQRsAfcRvK9oYCksVhm4vMjfDyyBZYtcdNBoFF4MzgLQdzYQtCjC3SzXfZYsKukQmufRp2c9JkB4",
  "key22": "56FeSopUfhPwPRG6xAEjK9Wxa76Wsb3gNLmTEzBAoLhy8poDuWnk5VtqLbX5pruG2hps3TNPpWkfBZabmRSqmVX3",
  "key23": "2CcMnaZ8RQLd258rZJYbGf5cSQmZ52M5LNNWAapea3CNmApnKcdpH67w8PXymjNbwoLGuAHDipESqVUNdk355vRS",
  "key24": "2uKE7VUbye6UTrGBA6EF9zt3ZRSR76QmDVtxCKY3fF3sWXXUuiHG4SRBE5cTwBWnLrNCrKpEcpJmWiKgcAX4uoBZ",
  "key25": "3RQqic4s5ox3Kb69efeqsbu9Ewsm4GJki42NemNuvau8EQy8bPCDZDA47btXAbTQYrrYR1xcSjtz2iUb4JU9TtGR",
  "key26": "2SSTpHTBuquRpfv7r4XGKkCgNoz6hQWjNv3yNY7Y77RvGNRQCm5XDHeeZa92kN7PFU7hcLWQASWRFujnqdicxbhw",
  "key27": "2zoSmVYxvEXevwmsTfkg5H2zjD2g3Dex93gN7GQcz9g9h3N5CL2nTAb79jqDGxBQB5SxKFRDek2ZqLkyjbNg9ojt",
  "key28": "3dHEC2hDuAQwxtsMPuPcSWDjc3GbCsagTnmPpygQDsWRRoSzTijwhAfXLXRHztJx9ekGtdruWPUsfY81D2EVrXYr",
  "key29": "62qqYbAieq3Vovnbiwvb1XCec2FP2XXBmB6VsVAGy7wM1hbHNMVyy8i3YGmdF5kpAiE3SJWiEbQQE36JRjQxa4kr",
  "key30": "5xZ7FpPPEiPovEtPAww5NUXbHm9KmnpencYPnKVxQx44K9NZ19JEJq8oo3cMw7qhgqVFTZfT6w7MC93GHHpf68K6",
  "key31": "3GvA3VJrRM9txvfM2VVU3aiXHvjuenZGsgin3k1kF3Guc28XS3dTDQ2TQiruWwuoy14KxxF5fj6PYKsdGK7ZV6XR",
  "key32": "39cmrnypXPEjDXMMbAuWWh4Bkj2QLf84U3mSudPFp1k1ZQ2kTPvQBmVNTdcyWRcQWTWKGP2cg5d4mETb8XAzTWbv",
  "key33": "KyrBocVvdGyuvn9WPvLg5N6q3nVKvdnUYwWhZN1oR7HnnyYUfLiWitRp3zPArMFk4iunDktaFGNWyoCdp1KWss8"
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
