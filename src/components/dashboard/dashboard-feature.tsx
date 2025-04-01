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
    "2ZebDoBBBydAtsBXzeHi6tdTc1RsgFNtpSCAWnNTawC8YonjhUHxk6EaLPZS1wCubfzxt7cbhCvmzLSajvqjEgX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVuzRkUyxkXHgRnMHGE8Lkt1gnWcDgvxhEFvkwF7Tubtkc5b52Q4m6JDAHFbNj4yuiYQwUHiRjVMUzJUeWLykeP",
  "key1": "5km9gruzb1QnFvDPsDzDASS6dKiMFfa6ZMRQhSe3MHan1S83yVVG9SMNjqtHkLie9z2TdBuhujW78VPjKQhfL8mY",
  "key2": "25VWiakbkvhcnnw38ePHmmCWpVZ4GxjoegaHkHsb1zTeHNqM8RxptUcoQiL8Fi98RwGWPa6HSMMGe6L4P9kbinKT",
  "key3": "3xrBN8jNdUcFKsef6n53gweSYp4LjSzts64onYjnGGAQE8GmoKj3jtdoboLCFLbejVS75EcH7yTS8xYZc3L4ZUpM",
  "key4": "3GTBLN1bfHM9Srmx11Q3LUYMbFnE6X6e5B9tiQUhqG3p9FukEerDjZZZCiviY7HnXdcUYduA53wzd9dTaTx1bG2a",
  "key5": "3AoHKwAN54UZMKNuZaE5pgmz2xhhCeGpEDSR8mZWfdxYiZBi47xGkDoAZVz3DwoNMnbWXUhQDRHwinquQEbWSf6B",
  "key6": "48AZzZRyw7Pj62RTQHaQznaX2c3qnL7YGMbP9SfDniak6qMNujmmHRtLbDW5i9JC2Sqy35BfoAY6W91E47tqxjcn",
  "key7": "KaZbipkhBnNiQtuEGRmtcDnLWc6jNXRHofzAeHu1gzTiULaQkzvSdmx739q6ZqmC9joaUAU8fyyRLnok6Akfmy5",
  "key8": "2tpRujqtH1rAakTi3WMkt2z8dmndAEhZa8TCe4CKCPSgThXLNjvMKxoMv7sM6yrzmBAZyhcitMH3oi8Uxro313uM",
  "key9": "2s8mhQYTEMBWfgsMnxC2HxBRNaYy2V5ZqCyecVf2j7Gj1kDC3d7EfJ1xv7wEPYykFHVKGWVGcuowg2tBG9rTqikJ",
  "key10": "4hq6mCxEMZ7h1wX82dRivMbJBTUCu2Qwe2MEmAvTaHYtZmrBC8XPKLiepedX2tj9aUSM3bhvn1PbhNsUeFZnLrEH",
  "key11": "5MfZUrdtY3RVT7hB3Bno2dL2awFZCyzaq9gqW7scCwxf5tXy3Nqdv4fAadZhMf61TpTh8zVVWSstJe7LfPwZsFAT",
  "key12": "5DYs6kFBc4GUucqzPUYXypg7g65prmLP9XvaUFtqbtXDkcyBr78kK8NecPMCiK55aZQXK1PM55Lph6yKhwfQ9DLy",
  "key13": "3dVfLTdGYVFX3kwYUev5RLAMWGo3gru6xrxL82CXNGcZut7iWq7c3sewr1wqS8fi7ZjGNMzmWH8YwuZdSDwtrGL3",
  "key14": "3Zpdg5ojDNzzm2bGFM6y9HBysnS9Hxdnu5SmPfQWEm2GVNyoTzU6eFGgT35W7p4MxQAZCz2terCcooCXWTcAPhgA",
  "key15": "u4FN4eSX2PvPLTSZLBYhnGkYH6XJJaNZ5PbCmPMFtxNwvgw1WeWUxLKQSFr89eUQKwhTysrBATjVsEwqRPTGZQW",
  "key16": "jumT5nJxUpY8T1CcxYfKHktM29NR1dyfdwYqDuohGQEbuNK739FL2E6zcraSq2vy4Jr5juEKcTGZxZzLFdzsJNH",
  "key17": "3e1UcQiYZ2vpLZ6ayCeMGZvMRVqjh13bL66V1wBR4HqBFL4t7CRKDa88AG83u9aNx2wABnZAEAKYUZWREWtQ5ZY5",
  "key18": "51PmUxaJqwgrU8ZNpvVgDMeBjE6LVJAfBmu8Cv8Ewy7YTfCtkkVqtVgsKCSqAyQcn5cKHnCQFgsYV31xa5SDyfUG",
  "key19": "2dPkkRpwMVvUWshVMV4MJXKmRkaivDAcu6MwjWq2MTtE6xgYh7eL2Ya7duPZ6ihz3TFXmw4FyXGyEJFUhMmRkQvR",
  "key20": "5DaTYG3NqF81Nw5h99KaVtzqE6ZFb5Y51aW28UN5kRsUYrMXv74CXxSwuZEDLXkiqU2z3pwercJfXZDSuEeT7Hrp",
  "key21": "4MDWeVP4HEPcesrnc6LYPvZRMTXMFKjifEJDypn75fNxntVaCvGsw1jMcR5mSmngRuCXsix3BiTn6xChmxmkYMoD",
  "key22": "41hch6Prgd4naYZKof2L38cTTTtUeJft9JACfBVVsbzbX7K7RJFpbtyoGgRRCsHthtAYNndSrY8ezjLsQ4TmTXE3",
  "key23": "2dKFbjoE9CBPCoY3wJuX4QYfXnr14L7539mzZpuXChXpuZNaBeQ5HedtWH9MqvcpXw8U2R48U9XVDHjiCAfDMUD",
  "key24": "4zoHd2p2Rw4ZGiXBSPNcben4rsLtT3JoBLGWPjaNaUiHEJbRbtMnpEFwbs4Ka8yn52xahK59h6bbi3M7GiteNk23",
  "key25": "2rjB1Radb2jL1QgU9DphBJoRtYYXP2L3UFFfKfwZT18uNFFH8bVM8w4mCUwFHX4k9VpFYwjUxVersNg4mTX1Rkxq",
  "key26": "23wahAXzkympRrqFKs32en4TiixiLuagbm1RhJ1a2jyTfcKXUgsiiGUgNA7K6T7wxvd3fiDv9EZNGH8v5QRTB4ev",
  "key27": "2zyHAz7VR8a3p6roDNp3U5JSsKiXi6xcBXfW9GrmWdmq1ut4iwGXTorqbX2hxGTadyQLqWRbACnrkj9T84rcsYmv",
  "key28": "3p9uanguW1jz5LQzghasUJYsjiHzWyKQ5ZjNu4kfpqVYvti5z3SeeA7rgs2nRRUKuiujjngcfbqUB4j7VwRLJi3r"
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
