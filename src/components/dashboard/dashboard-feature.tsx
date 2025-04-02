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
    "5fs9Gbc46mZMEmCSNHpWkHuAHhwRiUjU6s2tKPfSoawYWDH8wBRQ3Dath6pLXhzMS2yb8hygHsSnrbpQqWdSYk8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ThUFBCq2FVLzXkMrX7JXAn41F8eRJyvHCDGiDjugowauimpvsx5JfEgBD2g7vzZk4vn7C6nS7z58iqRBkG7arvV",
  "key1": "2ZaLaUXnB7bHc2gGH9TAyXvUSzgqbPMtwF772JVvKwHi4iByBY2SXkcbjqkxGWDfcJ1NHF5nuftWpdxDbqA2NvCs",
  "key2": "5Tpo62W58Bw398qFYKNp4YuDrmmrVfF9sYhsHy5S4GzMTzMBH2YG3UXCPF6Q2kTQAKRN29UrE1rhosAh2hoc9xXk",
  "key3": "QhBSgzuUMy5yNrCJshJffD3cLsTcRqVEVGUPC1xQbdfukaCFj3eEYFrtsqsQKa1zK7RKiftdtkCJFd4iPokyeVk",
  "key4": "22XLTFWTRpMm7vqVbjn3pzq19zLtHdLUGTvPwKRy5i9nwXdHh9kYZL54D9a627QG1buNuCMwpfttzSTkukLoL3YZ",
  "key5": "3inycJrt7VQgHMWH1imUjLyDJ7kw7QYcqJMW5yAaVbJbkLDKwSfqS1LzbJbcsMttZ9h4t6gvCUBpn6YVPT8eMmTk",
  "key6": "eV9zh3pges1T7Xon2XRz69bzCVvdjCpz14ZmGj8nMQcKUDmmvDW6mHZrKGhPuWtUv1t24Zs48dgmTTWApuYGpgf",
  "key7": "3v6zqdd2Eufr1763jBQ1pDt7KwhP6y9yYhK5Q1aZaLW6bjwAAH8USerG9ZFZpR8dXYoXxpSrgNJ9euWhgV9m533n",
  "key8": "5x1GeJaM4uhZvqgkdKzo4h6dNtwVTZAptpwqrqFqvobBwhZbwiutsRhoRzpa2WHJxXnQFkegFBmScyoqMh4WmpBq",
  "key9": "ZEDji9rnHL4mrJJnqRN8j1w52V1foeZ9B5pSq57z22La21xE2iMA7w4SDtkogwegUBrku7KDcsiBBwmRH6EEypB",
  "key10": "4xrLRb5D4PBQmuE1XkPbar9D3RHXANJ6VvtHGHGqN5Db1vvLVqP2MK66W3mMLd24viwbkfgGwfHzLjSxZUHJn316",
  "key11": "7eHSwqEutSQk3P3ifdNc1Dcq3Q4V68Z8DnT8HQ7Et6V7tetRC8j13NsT6CzHrkfyjfkodSYFB3mbASPKXxKBFkt",
  "key12": "51jPL49w7XchMohPo6qtAo3HEqnL9dbmNi557kFNGz4JZz1K3EjqLFA3aY1bMf8ggeWSDdzdMetzxTQg3pLSahfm",
  "key13": "wWXbLZ8DnguXN3y8XFy8VDi2thmW1QRCFQ84bVNmgwRVCgwixrRGdb7pS7MA7F4Xtz44cjo151CMBCopr8FcsYf",
  "key14": "4nH9ugPf6DPLE53SwZe1HkCJ7z7njNL7aasSoS5Tnq3US8u48bkseaFVTJcwDUSd7vfirXsB87QLbJUPD8vAyJyc",
  "key15": "5LHy1F7FaUdxMvfvCQ4DutttggF7E8z9VmTJEGLTZ4o79T1PRWDDnn42vA6d9jdoq49Z978tpDQCuPSJh9PwYmua",
  "key16": "2bBU1tuakYdm3SdmXrSi9E5BEwvELPQrrKmmeSQd3DhkxX7q3MtgCcHYHSLfzeh44R1f7Pss4YWuWedCsFw4qFx2",
  "key17": "3Nq1Z9Y53VvVnTN21kdmuSQWE1F9QUKBuMYEuw1yXjcHdafHpoeNAmumQN5hN3mH5KQ7H3VQVH8oLtPECVnMN5Xf",
  "key18": "E6G4C44dxFvHgiGmAeUFnywFpDXbJP9rehdus8K4WZzwAqLgAK6PnJ4WZ1CAS5td38mLFQcrDM6dbiMBgwMY9Sx",
  "key19": "2m5cVCwDYziA3qyLCeAJSJhXrSMKV9za5L8ehEjh2LAPjyN7ZSAAmhPbRKvszoQTyF5FfZYu5jjoLc5GyTQUchmu",
  "key20": "5VHdCDad7BS9UWJtqGsAR2AD82K2aEBXXZkxLxbkYnTQNnVeqbE6p66uCVWdEXWmLZ3eHh5LwjWJVvCvq2yEgVgg",
  "key21": "2MJpcnkFtdMopi7R6aBkutFtccMBWo7frrJTUKLaByVBydrPV8XRRmKSpGaHqUV7FRnvFbaKPXbEtjL5KqtTS74v",
  "key22": "4wCRp1sH3K2uvkKAhmrThP2of6B2bTNDo2c5df13UEHDu3u4PZGHfLNA15iJdUs6AtDotr2nrofeqWnLFPwRbjEv",
  "key23": "7VLLW6YwBq7VZPfTdbqNGvxWujgDfB5wMbnymjsrfA6wVkmGWaxvnK7zLqotPkrx66jNz3SdxNRdeFeeSGwmKvK",
  "key24": "SCPvttpj3AJagsMbF6kwWan42acVsuzFN3AgYva9xUgkfhnNV5P6hZxjHmrUQimf2aV6PzRJW4gf1L9CnfnDF5r",
  "key25": "4HWaY5dzVuPEiAwG7rFS2yiGgBWAaFM56r3RjkZkRR6wYDJRv26CE7PiXdMJCgeneVAwqwCcgqW2uzf132Prx57A",
  "key26": "4dv6NqM44ouzXg66eqhspi6wsN2RDmGKWJC2VfqJegHon1i8JZW8ig4t9LtEZ35bJzf7qLSNDsX2nMc7deizSo8B",
  "key27": "4P2VKvE2pc8t3gQ5xfSFGLfWVcGSsPBMqd964b9UMPWT3cgoxN38k5ugYAkiQnCnykSL4wdhGrx8LpzVmYvoz5oA",
  "key28": "3MKL3PP3XkefRfwwumWxisMKTf3Tnh5dg2vJZc3Xbtp8ryptiz5TyycsEgHn7DbgjLGJ86zvW5R85GZDepBQZtWQ",
  "key29": "3WEhvtcY7ZNRgK95UjM86AMhGzEdT6rVMewMm9PHcxtnLepySCFD7UM7GSnYHmM2VM4Hq5xGdRwb5f6Erd32b2Sk",
  "key30": "3JYXbSoTTDPFXubfrZr8khoQw8ghqSqX1n2cMnFyB4jwREcM5AmVi2UczGqqis3PmJmb6SeKUY6jEbbyKx2KmiQi",
  "key31": "uwpLAJMXaE32BLwR8ESM6Ws1mGgq3DXNXv6GF4auVFBHzQEBy5yXjDURGoGL4Rj9sJWD9nVTtBW2dXevmbTHhev",
  "key32": "3yYd8VvPymLuby6UAfkiQvNGs2U6mHiVyb6NRgs5GbVRz9SWuqG9Nn4fuSyEGxm2M8yfyDRD3RfJmkp5vLnewKpt",
  "key33": "2yeNefkjipdLxfQfqt49S9z6RpPMQ2ei34HQJEco36jjiPzrnc8byy1UEdLNobCpQditRUtsAMZdyLMjNktyLshJ",
  "key34": "5e88Rxa9YYWfZcc9anDmiE3GrA6N1fkN3cbX7rBbK9annGGxnaQEQjmgJFjBQJwRH9m8Hxj1dXMY6rcU84fK1z2q",
  "key35": "T6b19fYWtXXBWLYooH5gZ9fwD58hG1zvUBHkCNocDwL1CYrqKXgmv1iDbas3HYJPDj5rWushKTioc6HjL1VQ2yc",
  "key36": "2Va1bCXRVJYYtekPrmmdBdkG7HRJmxAxtJyaLAkfaTRW3yhUVDi3Djc1QWUHcxwChLfWCRkjc1j3oDaJZnEubAjY",
  "key37": "3ocDnnyLY9JMnVfjB6QYEibJu49E9av6J9DCk7sVWXKiTPjeiQDAdkHfyhqCrdDBxpfSuMpCdMR76m82hCR3wFoY",
  "key38": "4MTtB7NRvs3yGZroSmJfUmNcWJ6gsrVnuekM49LYajzS1PLUy7hBGYwhSAh78zMX4jEYbBcVno1gdy3z6VENXGu",
  "key39": "5EdALQscACSa2hUxdQn1dAxq1ETcg4jfZPWFSWeQTvcchEZmMmUeXTnxjrESduTVtLRG2KaP7Mjr89b2pMcp6W3i",
  "key40": "46LV1QiqHvKRAjHaiUL8oD7937rEq5ji5gT9kqfbqZZwxoXQdZynbS7Z6ULGhNLqePAwKBcZUDFeDqvkTFQ9186C",
  "key41": "2XXuEi6f1U6ZtT6A6yHZ9eTEmRWZuUbmc9q2VDmiLHrwKVq1eA32ifzATeLsekuTGaUFY5fVN9unnfdnzo86NCd"
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
