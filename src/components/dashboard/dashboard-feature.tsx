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
    "4mfyiXMi3NS2GJoYNGTXeVgpLcGzkVLHYVahcwXHVyJCSrCmK9anwFBcUaijQYekY1R97dQkSqKZ5UYJt1gAhTU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xw8jrVdJnfoBHF8ZdrGqSJ8MYrsrwSu41tEGCLZVEpUVeJCGwdFu9Bqjz7ct1SyRQYW9QGmwepwhqEkZx7BcspT",
  "key1": "3wdTS4JCq6kTkdoXrzmCnjkREyxT4UqUnvSPDAobiaaBBw2qMHXPdHHeRZ4kVKyiYD3oGubZXfNjn6yvDXA3zqbn",
  "key2": "3Rh4PD2a16pjsi1AJC1ssY2qsoADWuZ6r4UD1uJYDjAoaLzFivYhh1XMBwKLM4Z5RCS9Ynx8wqqcSYUDdweFff5h",
  "key3": "5FTZxE6nwo5wUAmc3d9HfjXp9m4wrwxust3SgCSvUsa2aU1yJrNQZT4CiTpcm5qjJ4KDwgCTcXuMpxYY4gFVjp8o",
  "key4": "2kgUYWmXwMqg91FSdokYb9yqWCchNmJhg39iNUgsgn47n5eQokeXLdoM9w5cYWLKiAtCrQqKnysRGzkkPfXaQ5vg",
  "key5": "422nq9fSkYfyTg6AWstPspRZbPCkYZFMSGJuWAvqTY7EiwrztwmYpDAHpCVW3v17HvQQVuxLgj9iDgNiyDq9iDNE",
  "key6": "gkndf3wE9u8xic7CBpfxinJqMjyYC5PDNanNtYM2xcJWuvu2t9oLFXq1dF1hUThVH5HunpGxBVwCpY7zXWcmsej",
  "key7": "2RVA6hYzWSGwNzrkTx3AHCSpwiMQ2iejp69skyJF8DF8i67Zq1ag1sBVoKYdgMVPdXmvaW7yPRZeS1QZJ5Y7Qs2z",
  "key8": "544ntBJHfovCTZyaNDwAMbpbBWkT2n94du5YfmPf4E1QBNaprTmt1BMjvrDxTgVnjdGHyD4TxFwWr8uN2ZgDdsXZ",
  "key9": "5UePxBjGu2pxRxWzWhA3PNQ9fQVrj4VnSfpWriHjPqijKB79AH89PQivjbkxF3HK6TW43oFCzg59MmZgy3GsoaLq",
  "key10": "4hr9cRsfUREERZAudoch1RrU7VLBc7dmjUa4cQd1czx9cNktNe1rEEhAQfimATDenxtZ4Vtauthgr8Rs3h3aZGXL",
  "key11": "5NixqnZzXCuc5NvuCZiVXQr5gwhxNbjegbhG4hNcxN5UmHtMJBKHrkr5yGX4dAV4abfLyKUBwuo8Qbhd92sWuuio",
  "key12": "2KPYJo1Ek3Gdd1bu3nXXXhdaohQuFvHji54Ppbx1cVMbMLxqAXd8bhD8Mmso1NQ2bhW3d6mg8uxDnbyZTCKktRNz",
  "key13": "2ZDPPmCvjAT32z69VSSf3AgJZjff771Gvhj5KHF3hAsy9vnoQ26L9ADWP6jYBM5Pf2Bh9fNTtHu4CDgpN2bRjyod",
  "key14": "2z5Cu9kxrhHcBCoCLM5WmcigHouua7tV5Xsdct8eEQXoxHTHb3N6KQDyBcr7ZgzpqVjxD2pmqUzW52cH11ASmcg7",
  "key15": "3TX5gAmhfuFAWMjuBhdJzgmGXo6zeqkuf1RjByCL2YBkEFb3cc6iyPnbaSNKWbrd7WiLRFVzNSExHAtR2GyRH981",
  "key16": "2H64MbA4hMskmArMkGiL5Ecatx38a73AUcsAst7wtuMbNDpmrYGKCW7cYHKHKPqVMQuaoWr35MNPH7nNcq74swYu",
  "key17": "3CnUvxUpUinyiCN2zoXJ5EdrHtzxgfeGBa9X8k9GTQzSDdykMcvaHpra56wRqMoSCwkfBGDxnMga9MQchWzovTTt",
  "key18": "4eGfb9DCh3X3RzGWo786ZHXfbaeP59JW7T1JHowjtJ7gXVqu75HXhbid1mP9qn43vTp9kNiTNT8JdcmYBXTVMvru",
  "key19": "KMtzYykeKmPJvh1nFDn9qk9EknEhddgipwpSLFFHPmXA2Ri5aw8f1YfiwWEZ9sbKHfv3dkKoQvvY4Gfwp5B3kGK",
  "key20": "4RqmjzTMRYcCkeeJbtepu3MtyAiKcqJrf5tf3imXmeoScpjhvP9PLGmmmq2eJgLt2UU9EPr2XEAJXFjNxTTZpfMx",
  "key21": "2wwb2iYepfmTonvH1jkPB4ANACGiGUzvSnvCuP4konT1tE8R5r4kKddyWK8Ez4PhqDgTgTHAx9ExuqrS3UREVPp1",
  "key22": "4Pad3LcBVQFdxUkPFAvaGaudFU9F1rypBFoSWXCYgGbaxNne4iGryedUFVVkdidpeHw5NEDVfCLPJvKA7U7mNfP",
  "key23": "3H7McSq3ZFufA4vWPYSumv6hc1ieM1smjuQpfnCt5xNCAKN2mPxdAJxkAbDAWN6PhKW9geyzRA8vgadyLU4WtuYc",
  "key24": "4dd1FqesuFeV9tSZAoKAp7A8mJio9UHr6NMLUV3mwi4v56ao3EjiKwg8Ma1SFHKJNJY12xVE3FWuUb84BaVPSXXH",
  "key25": "5NVEYHy7dVZWWdvHqzmuPyQY8tZvPtFBKpSCfWuzbqQ7Au2MaNgP7yd47hXHcnr6iokvNW2tjEoL6T3DGQhx5Gd3",
  "key26": "cR1HCeqDKLHWqUJZTSEo3L9ovmoRwfRpTQpZsXL3rWexY51WArffKtAGZBVw4ThQ4SZwf5MwJ92SrVVrA4uEFny"
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
