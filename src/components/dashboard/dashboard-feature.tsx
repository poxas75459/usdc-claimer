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
    "W5xKbGLYUQYVShUBRhRehqwCyif3ETUeUGPiXeX34p8GsoTzKKfb3fzMnk61rpabiZepDeQaBZuXQfWEuaMncHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgLA9ooSAcwUJhM2PKSavs8X4acCfr7kiE4SrW9mviBeLc6F1AKDbBkow5tX87dJX4nbKXSkxmdHt5T5odfriWG",
  "key1": "5SHKjcdAGjkCsxK7tXb995ALU3ZxfTiFguf3rkVpWDSrWuPcn3tmuXbE8AZQ1CqyJon9PXEUqgzfWhkeTmAPvUVk",
  "key2": "GDLMszk1t9JNaoJKKoaEtBs6xLwYBPSsaubeektVqnKD3e1CEWMYhYw6rm39oQqG7fRxmC5vWd1zNpycrofQMGG",
  "key3": "5wZ6hdso6jLc3Nu2pHbSH821Gbd1Rrs8wbC22Qo3tSWzfbafPiPd3JypLjQR3DNVmWXuA7vr4yThmuM7uXQ99Dwg",
  "key4": "4YWENUVXqudWtb5wDTsJT8aTWxcmV4vFrD8NwXSyb9zuSEwzPREWR22bas5SwswKNV8bVK6sta2tsmgGmQnHnuin",
  "key5": "3DgwT65VPyiXQhDVbT5QXJDvf6xDdbtEefMDYZvisxPgRP8X3CDtbrLvJ46LdDEEiLEiyLUysZQBEQ66EN1cRuqK",
  "key6": "TiRuoeWp1vDwCpnskFoJG2ucZZqhQMJ85ukEtAuZsVNNgqbxkCvMo6hhnvpw1Fw5gFfP6T1RjSTSiQnkuMUWv9p",
  "key7": "zyAAgYQo56dFcerAFdGB7mWLYSpVcRVetrkpprXTBKFcKGCSEVJN3fUcRDseEJ5QVRDjSVL4Mdgw9s6zkZU3uCh",
  "key8": "2cKM31M37G2Ju28UCbSEN6wDtoFEJyNaPMrjnxHwfBcLFKa2mbhzd8M8Qr12E2zAfcxZkvGNbjiEn1fZbDBqYJ6f",
  "key9": "4nV8KXetpwFiDwtigT3u278ye3DYKjr4ZbMxHpZqAGw2G446NGm2ehrF3vw1rDQQbTLcT6Yv2WHvQt39Wqd7GVxo",
  "key10": "31qJKijz2t4bGw3hJV6bpLwLnFmC79wN6mA6fQXjtMjQoWzxQX7E1FjMUoBieXLtkczSbA6LrU3KhpuEFy8MrAG",
  "key11": "3cGKPGNGYdtRKCUt5mqcq61nyYodG5Z21pPvWrALCCtJXSpZ9Gak5rvwhmxivV5rpqe8Yu1Y5o2SiWFvKsMyDrjt",
  "key12": "3SYxrADC8qPgFK4zbdwxKwF2gratzkDfyBoL5L8c3nEWUpqsjpCkXPX5o5veoXH8KbWcnrX7brwNrZPS77MacmWj",
  "key13": "3QwKH7bU8qQ7sxwCfVMsDPWqkPhdEqz9aT3jJE1jERUktstcC4imw3j2WpGdPVPvJgbf2c1jLa3h2NRxB8vBxZiT",
  "key14": "3CmtEedpqfjneDh9BLEGUK3kqpkcdJ5WmLSaCyX6tB23YfajAoEPXpoXCK5Pof9u5Zc2tUFcAuEy3DPj9EKsFnfX",
  "key15": "62zjbNmpHPndGup3ADFv5gQCpMkhEUvtsNRv5bDr4b3nWVRTnNsYp7qQqyGAJCKdF3afuxVXa97RXEfmMGAieYhN",
  "key16": "3SUJJoSn2JDsJPpCec4potJGkE7j7yKodg5pgNaRVmDy9ZeiWwkrMT7gb73cjwxhtRFfq1sZ8k9X899W4LERcunN",
  "key17": "3BxNjYkVMsss6A3nUXj5YLqQTWXLwUfrQQRrCkUD4uQrcRAJNwNBTjZnJWqNmbj95r3BxZfBb666nEdVrjBkibMQ",
  "key18": "3f644gzz4cTUv9hyD6gP15pquTmd5QswS9J8DouDwJkRaVzTSLu7a2Wshs289ihMm3LeSApqNAKe5vC2LBnsfK1F",
  "key19": "5m2dVkos4vuoCfkwvfx9FpJPVsDxkYdLDaR1v1PPLYrcZELfoNGGWGcjyUvRfsXMU8Cdm354Ep45dVz1qYaN78xQ",
  "key20": "cGR3boqCKHweEZHEjSUcbbKXkh5MwBnuyXf5YPEv9jsrmTFEJLNPB5nJAVmogoLhMKbg9qBb4rqVRyqBQnrzbGu",
  "key21": "3LwbTjQkjKux4ra7LgkvRNLpKKJk4n92J6ZLP91aPoqLux4sjhgCJDY713abRSjfrrQPKgc2yxxRyZVsRqxCRawN",
  "key22": "RJUABub3wfJFi1gGukzA15qekAKMJpMVG6xwBxprCpqm16rcrqJzdZvt8UwbjoqnR6K7o4mpcwkVfUX6wXZWPC6",
  "key23": "3g2vLhFG1TYf7YNWZC7x87yeZ8PRTxZtDTDMzj8FunANhd1ek9s4sWNjbY1jfQJwtMxfZKbG5eFYFSKHqGwhmSwG",
  "key24": "5mmX9ptjit2YHnm46jYhegF5XCMVCMQNKtPRF4VK2WVD6uE5KaVFkwCVpvHkEHWTG5L6rrevYkAuzrgQfFnBMK6n",
  "key25": "4zqvsAnpbtJkftgK1PCUM1tMsaaddygV5vaUMcYYS3fgicpmk6PCTFN2mXC3f41EsruEEjwcbTuLxDSYgvXSy6xF",
  "key26": "4eiRmNKFs4P7uBwCLNrEnaV4UVTaoeCxffuMDDcJpH8i8W9qCA6HyywAcVUhQY164KUUwvMoeiqijzr1mH87Mu8R",
  "key27": "2zr5U4KS4vf55JYUP7bUmkXDX44SUjGjt3HfZeb8mG5qx2mxLS4QaLiQqQuzCjUpGC81dMGnhAuC3QUA8CoF2fs4",
  "key28": "3Nujf9otaG59MRV1Ff7AKCvxRnWL3DnNYTTpggwLyAz35TGTKfWPhTdP31prKNyQkTCjSCyMt2jpbg2Jku4nXodh",
  "key29": "KV8X766RhGUjPShAYCiQHQLsrvNDSnkKd7ZxF2G256DswTCMJNqCExrdo9YRa61NHyCgJTq8xYt4nSZd7fVr7gA",
  "key30": "pzem3TA6efkX3eN4PA7gSoLkZKoBm3y8s1zi4wA2XcyixeHrXwyxRJYRUDBdkVnASMxLWQgdcRMWTWphEzxfRTy"
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
