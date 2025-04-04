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
    "sSTcv3dmrmyMkK7WYr3huezK5KiuPravGTvwigtkFgJ6JkRbUuGUm7dmKMNgv8LGP9NYCkVznMNSeg4MGQXR2RF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lx8EMu5hnMfwyjc3ioCPFaxd438m96TgHEEkadEw5X5rjjUBik8tRC6WgJTooqR1gjCmAvne2XYz3RfNAm6jfYy",
  "key1": "4sJ8feRrUxoSALsrpTbaS6S2EnNtnqxKX1t9MVYaZbWWR7DLDKqqmUKFfncYVs9b5CKcThT33ZZp5iWBRXxBcsSE",
  "key2": "2TApKMobvrmNbpZsh5NaDdrH4fK53typaCu4vu8UKG7sxpRyMgMCR6HXvGfhwnXuDuDGFDjTnFQsabgJ9CQFdKKo",
  "key3": "2duJCyRmJ9V2HPCcqGgKoQx7tBHfRbKBtk9KjxGbNU6E6YjSJJbvKPEnDMMuVxNEXuG35g7qQZkp1QzAxadMDTBb",
  "key4": "5L61KRPtPj43upikpdUkHFEsqmUEEQQfRHBrGgzp1HEMKA6nSVDjTYEg2xsRt7yc4cEXTqQXxWSjvom9XhTCPwuY",
  "key5": "4hX6ZFVAEg7y7rNTuEm3pCEax8TQsaF7Dwb3ZQmxrE2XGLy9De9vwCtxVUSEwp2LQXbRknay2ZG8Ppr41dAiyvb7",
  "key6": "3rsmP5137TrrGedbFraBMQg7zUEjxhiyDYK1VarVR3RaBCafTMXPzxF3xXL9fj2LsxVcrKVpkaEJ2XY81TdAJoxh",
  "key7": "2riBR675xxtm1EE4sKpo68i8ryd6QtkNgq5C6L359cmkajqJFqvsQLhTp7voA1iKGgbATC8p92xHv7KJnHLD9WHQ",
  "key8": "4bPjpj9bn92SxmXsoLaFVJMHt7GvVQ14X98nAM3efTmPnDdX7pue8dRZEmGfzKDXw9ixxzRUap84MiNg3J7HVLpW",
  "key9": "3P9p3Wq8EbrQCkhjd46Bm5D74jiMi6cLnumP82UEWhgNM63RJScCgkvRPcKxjvL8QkrMsQuJNEYfLRGwM8fS2FYS",
  "key10": "28PbcCECbhpuY2ijb7baYpCvycr5gG7bckDpb3FSyEw9wXBDb2Z1DzsisRF3Apsqydvw95Bztb1hrVnx5cbVcHMg",
  "key11": "5wRPbLH7JVdqatxMFSm8SLejYWJC7Zfig5MfDUQka6nNecJ2aKA2Cw9gLvLKaocsUtgTJWLmxnztrmougNCkn8ww",
  "key12": "4xkKrRMLcWFWzF9YNiv9vTGDkX4DRxmDM8U1FiEKMByq5ZCJb6KZQxBgHMEoxoQaHf66rnD3NUD4XPAPfkYdFoCc",
  "key13": "4bQdxQUF5EA59j6xKRuJz7AQb68v3eT6gPVphGCcZuyRBeyge1EvhGxzbbdrhPj2oKeTDjH2q56QRzQYW2TCS3dF",
  "key14": "2E1PorKMejybCyJfthVaG1e2Mmhwpsf7Zm5hkEqmPya6pGNQWHS9pDP4puMqrmm6EEkJakBusqotFvaBJp3FNuX7",
  "key15": "62y8BgBbG72Ege5FJXGDhvgQPS5AjUxeGWuTZ81CA8hkXtHwW3KrTM3hfWin2aJoSd27Qpas63QhoFARgvDWYYh4",
  "key16": "4pd1YtLsWbc5ZR9MwcKazP7sV4t9BLuUpskBMLVjzbQNEPo6vp1dvCa1vjC9sFpfq7dxGCT6WZX3Y3S2i1Atdwhx",
  "key17": "5U3x34H2PxKje3LAimmxvVw2ndXWRk1uD6FUwzjdZDf7AwqmAwJKTrkenesRSCx63ZBoP7eQdUc6Lg8nNRyokhsx",
  "key18": "832RpkdSEkYqmzB81yDiiNmqWcZjMhxcRGRjVghiG6KGyt7TkN6DUrdHe4QJZDyD3xmSHzrnyZLoNTR4m6nHARt",
  "key19": "65qRxZpvaCo7vQds8yj9NBqFZJWz4D1EGshm7MB6mqNxECmEnrouNiqb1vHp4jHPG7BY6mN2VcJbqPKBzWYBpFYt",
  "key20": "4CyfR2T1L1J5UnPLexqajnWhTirCJ9PjA6kY8ce5r6X9ZKh9wdPHRzqeeXiANUwzCLg9LeH4aTeSRWFrR9VPUFie",
  "key21": "5RinbgPVQhheUuGoTWM1YWjvDndexDVkzn3FRAJzTbi9iVhmMRVUj5aq9Hk64HeCPMH7vrfoppAoNZTPAmYniECd",
  "key22": "4SBQ4MsmiPBw9tB8WAE6SUnt95QRNzfR9joxs8o6ChSPiQxS692YWk1FyacgVDsZvVFHirMYsRsuQfMXDBLkYydq",
  "key23": "3MPa8cUbkUGUPdVDsAL3KC9cF6iB5J4QdBZu4nRMXC3CVURdExqozfzWNMQtBUPvaZBzKg8t6DxQheAZ92oJokGe",
  "key24": "4YputFnft6MrZ47jXUPAFvG4K2ihetXQjZ8VsjLnb9LeLxgZ62HpPxCtj1qh3VmCmrwVUogjZKagSZsG1HGFWpnp",
  "key25": "62mRFb826HeoWxaN8UbJ6r4btWtiYUALK768ERMV4xFj4m8yEWDHLua19671NYYEoZodhZgwnZy2it3RfAd2b4bZ",
  "key26": "4N8ABE8ZcKYp8CEs7EE8AcFMCMJwJiFRW93sWG7uKQMPmfak6uwQUuVAinhVQP6XkSeAMXBASG2eVtwKyidxWXXv",
  "key27": "2kjXk4sfkZpoB2D2fsLEvpyqZw5sssTdtzYyyvKgC6xL78hUewKdpBkSsdZYAtyLE53ybgDW3iRumvgva12dqC2y",
  "key28": "9G9amkVm6MiyCRGqn31g4F58N111m5xECJxJbfD7koNqZuCV89dGNXzwmg8EC5MUdttzZDpMT1eazUaURzuAWWQ",
  "key29": "3QemxEHHe8EGZ8yMG12BgWK8on5fBrWfKHrwA7Bxq3AiByeVcx2qVGD7MboNJkyQ87qD1KBeHn8UyjfhvY94EYfe",
  "key30": "nLsURgpgBipDHGMEF2JnFXfoHA5iMUj4AHGh5UK33A14tCJJbxdyu9Ywnsv5d8sNSrfSsQunZpbE58cQWTCwcJR",
  "key31": "2gKfdq1z1sBgDJixfkVa6o3phW8DADKhU3y3ykabByb3nFDtW1d6zHrYV7XCRpHCcX91SP8mMCG7Cc2tmLyxJ1fq",
  "key32": "33PaRmD2ztow1AvPJrkJX2sA6LC6Uhv71A3YFZ6nqY2jcKLWK3KoyxC5eu4MefVWRfzFN1KmTSv91ftP16YwZxgb"
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
