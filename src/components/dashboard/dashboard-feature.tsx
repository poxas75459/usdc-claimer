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
    "2KKaSQaxw1S5DVprHT4DFRiRhtWRRrJ3rMKZDz7YKjNWWCip53beBAxbWgCwMz5JZuHw6oSNhXbvSqVnf79T1xck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BkGDzX4DfTY18ewGDfaLvrwYgpMe67NnUTWrdt4hX9RwAUYpoBvMCiMEe44nKCDSRReLbgqQirQ6DEdfTAGiPBL",
  "key1": "2SoaEzBJm9MukLVBoRhcSmxf4sf8eaYWBUK6XeScGpiNVEv2H2TvK8TEcXdLMWdUHL72Kd6szHxQ68QespQwT5ys",
  "key2": "2ztQ4FmfanVsuUh79bDxxxkrCNqV59k2S2Gn15jrvvPL2onNMLGSdyXj3ESQQpffYWrioqDvw9exUdqs99ADMDQk",
  "key3": "5XTGu5HnA3txdGohE5EHosq2BDXnxtH3HJrXkbM5v1cSgTHiEpvThwM1xktiwMqJHeWRY2xJD4aE6untURuYs7SF",
  "key4": "5MJ2QuHndPh43vBLnzn3RkiCqmfbXwrmuU9tmsF5iYM4zGMBD3nGPyjw6gjYKPzTXVKVhjPfHZ7bJ1KxczH8L5bh",
  "key5": "2qfw6eJgxesJnFvEW3cx6heesBCANiwY9ec8YeQNakeEbHxkrJPYvdrBtD2hEyxn2VrLGYSGqiEjckayN9ZCfyPK",
  "key6": "2pReiM1kPM5TF9qg67A9gi57yUdgwnVrN16m9MSFfLfVdMDz3uzaKLvvNFsPdBJFZphbjHun3csq9bpmeH6p2xHC",
  "key7": "4JjD8Q6RDd5Bd5QjyHDk148Kwhcz6e87a1jaCbpWaWyWrWKhAW8cnkSfMXMBdvJXRTP1bL1RcoAxqjRjt8xF82aF",
  "key8": "2WpGjW9AefgL9G2aw6qtktsLkEdqsQKVE3xJhi2J7EZ5TLjiP3tfQzGhcCw37UwyeFbauu4uKVr15NFp78hDHAKf",
  "key9": "5VrRDRCcZY9wGWYMyA7DP5vybat9riQLgqbSnHjkomMAFzg2L7gSiqpgACc4a4TWhB9R8yvFxJxcE4GmtVViBQig",
  "key10": "3bLpB46rHZGT1qg36Lya523btHYH5qtmSoNhDaH49EMGac1vSEqWSEcvBaBQsHCc7WhQQxY9VRo9xQATUgLQjR8K",
  "key11": "5MsDZykfchaFBFGRpEYuLEC2kmE8TaTpZE3kNgpSp5M9fbWPkqT9u2zkASofvi9dNXWhgMFrQp5SR6PCL8yddY8d",
  "key12": "5JP3ZYaHNYAmUMs8trNbqorKdbqaPxXeMB7XBxtSpbf69fVmw2n11nj1xeA9BbBu2SSaJ73cwu2UfrX3t5ZP1KXm",
  "key13": "4MXQrMQBewYw4FeCBL2TnJAtwU9t1sAKi3kwYG3j2Y6Qqmp9umRPxvnLQyY1qe9LGWB5WMytDWJvMaM78MTasf91",
  "key14": "3gs3HfTy1Bgr2mYBbZnppfGEivvn8AQy8SeYq1TcEdKbknxAW6yJFJhC3kiFwYGjVUj2CZjDnA53HzE4NP3raP65",
  "key15": "2rbfbmKqYjNCRn1HeofJ3mDX1UZcBbNxZWnLAVSw2sv7aZJo2mE7UprsDDooJcQenPKBd233BXQNec1W4GMvUwrZ",
  "key16": "3ivAknwHHKPJm9dyTp1TqH3qenKXeSTum1StmaKU7WnAJgGTfG4sZL6nUG8aLF5mJvY7HfeMCQZW7a3ULCJs9Kin",
  "key17": "3fMZvBvj3iiQzj7QjSrZvY6qeLhJTacHZzxPQPTp8y4FkokyVzzGas4MCUfW29fLDz34hAd2DekKLESHXcasPtSB",
  "key18": "5daVZdzsXRWPQKJKkXEN5Sypo2KJateNb5NCcuEyF8ZdWWfPQtuAnLJSaTtp72XzX9oW5gEiW4vawi3iKA7fW91X",
  "key19": "2LfWZzg95TaAtmWgtWHEKBm8ELj1ejKVc99BUCGzK4Y9e3aHgyAxEXmjCMeboCAaWiLW5cBgQiG6HZqiz1ToMSuT",
  "key20": "3zy68M4KCBYR38vF6kPpM4Z7xbbAarDEuQz9fztnjvPKZ8zL16eyQBuocTVrockRmbSmK4bR8acJ4RcPTfwp5EK5",
  "key21": "5xTun6vvmaLhzUT97RTSBKn7aHpctUYxxmrnZqaDDgygAR8yut8M4KsUc7oCBqBc6RmNHLyc3V7jSLAw6YEY4g56",
  "key22": "4MjXr4bcYu1HtBFxrCpF6FuYjKabtrT1SXB9T9zzmNCvFAFHg17qEWx8baCQ3vfmEquPDthMmfJuniw5XkJEekBw",
  "key23": "4VVUnk1pphxoX3sr66umQUvyDXSN2sMP4tHGUpEoqJoyaGQJ7nhmXmnzMywfcADeD3VxiSFJC7w7oPFxsxiCEXwn",
  "key24": "fqaupPSp689dA3sZ9raYnV7nF3XpaNmtWYPhAhR4tCqG6KnFENDJsLPNaQQ2LuSSwN52GxH3vZcB3YzGVTFpYfN",
  "key25": "28VGmwgx6uqtSZSr5d8YZftDpycgtXhgXvbW9YyG9i3BfDExkWPZQUxDzpkRDWgW38BcmiNGeFo45A84RFEuwStj",
  "key26": "4N3quSZwsFFm8dBM8xo8nR1NEXGhURosuFNVS6RzzjpyXDgp3KjmEp8igvv6MhHLEmRMh4rKYDg6Q2JBitb5VpiZ",
  "key27": "56C1D3k75CcXiVjGq2ToXYa1re6Ujn67ZFeXAEV7D9e7e9NvrSyvj3PapNXGt9vDT6tiDipKw7m1BxRZAZwwa8zD",
  "key28": "4VggmZvTUANDGyeADhtB8BJ5zz8GYiVp7gzCsT7DtwZxmWXXGhJ5Y2W3rXBbhGm3uZfp5q8SpLsoNaKXi1Gmu3bN",
  "key29": "4E4Tqxcz5VzqzKuGCerdicjToxzioei6CfMp7g9FS2sXqWSBe5pHCgGJx2vSjM94zdP7hrXbWfkGJKoLfrFbQ4hk",
  "key30": "55sWCikNGEsJxSmD66Byrm4EXgumYRVBjDyTfJvXpu1LTNkinm7ZBZH9z7GnL39PKwNawvxaCAeAPUKwRirWCmDZ"
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
