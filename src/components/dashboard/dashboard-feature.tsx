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
    "kzhnKgDXd11S2NQQZ3xn8ndR1H43Dqg1byu7bWCPjhpuYJbXYDJNxLuGggq6UGWeVYRHABabDDjAZyjxCjQGqjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "avMWedVANMdcA5tKjt4LQ7D6Es5tt2wsL8RDEz6SCAjDevdFMSx6Wns46YpWEXnBzSc2tejkWS1q49gpkErvAPM",
  "key1": "VqCarZj4aQkjjn5HrENDbzHpUWQpRdZqsYRQnVHmRTgTeRQLsPvQRRzdUYasD9z46a44Jkun9hFqZJRqZgmJ5zR",
  "key2": "5MmaVn25KPCPcjTPY1pGT89xgwFnaaMgh6VUJ6jp98X16srDbfvdXtkeM5UmypmKWMxCnRt3B7ZWBDCZCyEpGCTY",
  "key3": "5xjtajQjwpFs6yYBGH6K9HEywydhZHoNcAn4SuU74vw4mauUfX1sBrcNbrRdQHD3Xgp4p9yzguYo9HpQ1rPu5Yym",
  "key4": "5yEEjBzqvXbDE4fAzVFRqFzVchAXc72sycUKbTWy3V8WUzWJtuicP9PUA6PJRzDy8BFbkrCgsJG1tacGvRWLFYvg",
  "key5": "Tbo6h6JMwe9vERGRimSaF4682KgdN46GtkPNryFkcFS4CrbjuS1sf2sxcABV8toa3h5kARYRx2cLyURqRiro2tZ",
  "key6": "5qatd3n1x4ZybyST1RZ3LXWSZ3Db48ZcC9eiRYkge3eMu2L5ZAkkpiUxuTR3NkqiGCVYRRn8ytxmdDoFYPaUBps5",
  "key7": "2jpUuskqQvwLzuPznRfEShAsxAhTu2QGoAu3p5XvQ7grBSteiRhrVMQwoWqz4a1ir1bEzUNKYJYZaqmFuKP3ShMQ",
  "key8": "65NGNjAJnEBEnPunWwAFGzGpN139r2tfZvWK2PTuY1ovABrUWFTCvoFuxcf2HQUUcHi3R8ZxR767NasSGBCqEsxK",
  "key9": "3BVw3zQLVi9jA23P8CwHQQmZxTixpdz2zjqqEEmzpqVZKaASqfspvsaFYDJjFPCDF76AvmQsxcYdUZK2q7vcPzzF",
  "key10": "2LbNzARSHPHKNaaV1B2w8NsPqHL8vuXFcxdqScGqrVsc1z3qLtisFNLHk5MXTyX5BWqHQsGwTUSeQhhEa1TZ6eoz",
  "key11": "2Rp8z5dZ4nuHh3peYDgCgXxsU2zzuW4jwaj6pMiqdiVUmhoQeZzALhhYs9Hwd8TvwAL4AiihecgX8EjVjMrsiqnm",
  "key12": "3YwmwnGHhTWHGoWpiFm76vebH6ZiRDV6e3svCHpp5YJegtW3JJJroJq38wc5HybCiKhiM69Loui2Yi63PNbgHa4f",
  "key13": "2nxUwH47domkPNxcySBJ5nRPGQcZdopagnZCXU63YJY8MY3PbVmCfWQquicFweW6FGiyS4xcUA7SrHzfSmEJJE2A",
  "key14": "3AxirLave1UXAwnm6fkfDNwrRsP6XwhitxF2Vv7fsfQJ4gwWR3oo4nDEw2AjKybgKcWrmGLXA6DqSAstqG8zNHPB",
  "key15": "3zdr3eeMYVS9nPm7smNdvTo39X2zaUeBmdi5e4tY89YLgg9T3w6kVihgPvUtxaNHGM2E5Mu9ir6a511T7WuVyBXQ",
  "key16": "4a117AuiwicsgHA3r7TZVn8xXthCrJ734whUz6HNF82UkGtCX3vo4v9nmcdimpGvt7hxQzVMSXeoGd13BifcemcC",
  "key17": "anK8PWmrxim8vRxSzjuHR5d3kXzGnzbw136bD3FHsiaRigydVQK1TSFB5Tthe5VpZiLiDFNENb4zaUpX392Ab98",
  "key18": "5Qv7qUcPR8qNznCx5hZZb6oGsWaWC5SSB9o3kGRcjoCebSyemCsYmowujFJTJqtRm72F3b97CLGyyVJP9Vs6CotF",
  "key19": "P5FmxnruuKP6pdVwZt96RM9PE36hPr3d9A5atyfRHXyV1aVM7QzTU5c7oRDkUChinrVcqrKfDjxiM1M8brbmTpJ",
  "key20": "4RpfcGLxPif3chhAbrdGPLGTnVGYPScncdTyyW1NCaX55U8KJo4QrFMywpUkEsNHEtJgtxZvuRQvwEihmgqoK7b2",
  "key21": "3xewddioYW4n1GSmoQQNcsa77SyWtQqftaAaSJjurQ8qbeg6xXX6wmhZrm6QcJtBnN4ccrgBCPvTfRYUgGjGKeQ6",
  "key22": "4uhix1iisPVKjF1dL9aew79vmyT9qY7rPdtSQvAk2BA23AS5t55n1rw88P4vHYGoLf7Hyp5RqMjnABvWAK9793Hf",
  "key23": "2R1X7MwvJijHVpRVdtMHdFd6Nvt93tQWF1Brs2b8mLVixJySJydt95CaqxcoF1r6UDxszHFdjEkumNYAJSVj74y8",
  "key24": "23zLYxMsnn348C3PhnQoVDp6SUKk9fVYxajg27vW8SFx2HWJyN6H81zgRyXSTy5utc36HM35TsFVr1vvccihiA9R",
  "key25": "5xSPDP8YZmTVqb5CEParJJnoH5RvxNfMWiG2pmrz2pMUhpN4R1buwRHSsVoFEmR9P2h3wUTSKynHq8VEMg8m92Rz",
  "key26": "43uV8UMTjJvztaeW6fVdXdJeacgEmMYYsLYmMgiYs727BMGYed9EYVJacBxULMjtPn9FF63BnEJVH2BUy9h1Ak99",
  "key27": "2MWAQUhFuhAHdD7aZuRjBAnWAHjCDQcpz1nPJYZg5iQVBve3yDn93SZswPfmtG38Qd3ZigYfy2qjh1u1xULaimpY",
  "key28": "3ZaX8RF6GxKMicWKqgJEdnnNhLQqJKND9KvXzAqFF8GA3cnS1N3Skv9NpbEnHLtDFYHhehn9XMYPcFyUCESmZknJ",
  "key29": "4aZeHnf6jxrqu6ddAwNowF5wthe3TzS2NKy7XbhDpeVKUGptkfNi4nmS4Sni6iPmrFoHNjcHNFTZmMqVLX7ccmbJ",
  "key30": "3ZatSA5AqhcscUEosFKtRbhMhorks1XvW5C6Dv2WUMri5NnSspnsWBxaUAdDvHYAhwkDsENQT72ecPpkRK64hGUy",
  "key31": "5nfcWUZX3WcjPY8po6cQcSnMTPLtteeTcyf9QGhpaL3e2fcWccYZckKiWDbxXZQ1tmdAqSMETTNe62YL42syiPav",
  "key32": "2RY8Q5D27LWZJN12pgJo2zaefhwwYHNKoNXs7tPAT1qZpPR2C5XFX1LfwE8hH2DZXoWe84xjCxrbBpDszuK7qXhB",
  "key33": "3N7E6xzT2E43i4t8R7T9qSWcRN5ibfDZvXxygeeJUayQp9uCc22XGoxyjwwBf4ymGg7bbLFeJxiGhwurD7T1SM1W",
  "key34": "565B9FNF6WgQ5XkMn4fqtbtKXDoNix7NK4VFgv47hEctgSEUNwwpfjLDax8urvd4HYt7XNUdr7FHv5M4PGT8FpVM",
  "key35": "467bUz1AqeYGUrgGjz19F7KaSc68Kqxv3GkjhjerAhHV3vRdsc2tUhw9qiSexJDi3HrSuFRam97Kw2Vq6gFgB9F",
  "key36": "29HP7zecnQoh2m1puT4ocGZ72atD4JiEDaAXutUCxD2BosEUVv6QZ2fYQo2BmF8djeZgpurA8WrdKvL2Xk5sH6KK",
  "key37": "49FiXb3KF2C2LHdSzRG3BgPwrQuyxwSgGSFj7oKvxvUrLigHmZErowAhzSRXUWzCB3eJyxnLQ1dzXyoRXkYxLdZj",
  "key38": "5TGFJ7LRdo21cKLBPU86gbPhfikqYXqPmBiXbLuiz4zXdRyYjFDzaeRMDE69pYLRXxPt9oBu5Drbp65en3md7W4B"
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
