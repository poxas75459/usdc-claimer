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
    "4YHmPp8SSs1EdKQswSRHuSZ9Q8LLAxuGqoASdwCf7EcQknevkbCZq4nDmTozvBnnYJ9FjyagpwN68bnFrykWzGJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sccsDeq4UmHGhmNL4Bnewapw4rrhCdWD4TKZyvN29QT9Y1AgUhGTUYNbUYdR6NNaTWGUk252A9iqyhokKwiQLbM",
  "key1": "3HXpWjxx85h7vQdnFvAvwgXLWcpbAHMyRaaqPYYoaKmC9sufPEahh74uSm8niTd6cvNzGHXuvk4xPBsJoBL1AsR1",
  "key2": "Wf2h54SYgkEaVvDK5NmZSMVd9XgEmunq7wMwA9a16q449byFN7PmBAcVqwm331Tdznt6QMYDgwH2DJh8pvWCy7q",
  "key3": "5tkrwakBKxMoiAX6ToHAKJoCxArGwvCYAdNHyUffu6Qx2fL4tpZxDBdqShy3NQ2qEJKRnu3YgtkGPQee5BrGgyUm",
  "key4": "41ing43Z5AnoaBMvzsebRzEbWXHxzn5gvEfLuWhqm9Fb6RFGB6xf5wyAX6Hc5CHebEL2YBekXmhrPFNUfpbyENXw",
  "key5": "5dNLyM8Xtu534RBWqToAMw3xYCAGEAP6C3rvrQ5DGHNJWatUu4F8e1Q8eEGvij7MLbKtTp11i31FzBCNHT9ggbYA",
  "key6": "4in9vfGBFoAsq7o4RrWYq5haFUsAWYxfUZSiCreEskJFs5jmCVBLsLN9dc7SJ2YALwQBi1b7afyyKDW4u4DFiqsy",
  "key7": "3ubTARFLXfZgwk17yi5FCTEdCMP9vqYtKJxsCMg4EjpXynViCysVCReZZLPLYqH8c6QqwpFej6qsDDtu85EvB9hk",
  "key8": "3oQ2By2vhhcbyYHjHrQCmRPJt2kTTzsgLNbvPcRnpaJn7SfwdJ2aNrBFZpLqoVPCQcxK5q7LfjLEd5QLd5Ux63to",
  "key9": "zkP7M6pLJKtkAn5jemrePrwkuT71MWvnqQ4Sd7prVM2G91yP5GAJRrwJYCdGCj75djDJRB7qDCADXJpASxXiYZX",
  "key10": "3aT7uuM48uf4sAcN9rrnJsefy7Y8BV1QjF2rX3oUc1Jz7rgHzQ9sxEh7nEQkjvYgxet4z6SqbXXwQv6qwWvXreVC",
  "key11": "qtHxuYWXoCeZkFJgoWqXkhC3qShdmDYhNZMGSrNsExa8R29CCgLSomFxS5GMCfZqcuLBbHbXkEbCdZ8h1LbeB6U",
  "key12": "61iVcSjBKGFuAf3zrz7KqYwFWFTNULKGwKVt74oQpFbmr6MELfhZkRiWCqPRKfqshYkJMLvFJZb7ZWCoy6HjApYZ",
  "key13": "9ZDLcbFJjws7ETXXhdNXdqjXwkWKabvoDTwGor8dEZeTGZqeuaWBAU3wW1E4zVdwL9owz18hjpHDK1cHFdjjSp5",
  "key14": "3pjEfEwNmbVvntM1g2dWN5sVUoHMA7XynXuVdJTfdptFAfMrd8vV5wMExhRtTNvHXYvDZs9FyJ4Yqh4eLHbbEioC",
  "key15": "4zV8srpGR3Ag4xKJVLb9kdwgmEGwmo13LRFp52VCNsF5U1GEVyDwCn6ZBGx4pmSMyrQKRPWvmFcsGkG2SpNHybzL",
  "key16": "2it5K6otuYF7sYeVx3uYVLJRTVKGwBM4anesHLm8qYGVvhyjVHFKnvgYX34rYRSPVznPNTLfLH2T9x3T85owBeE6",
  "key17": "2agZ1JLpFsFAtX4k9ZT9Esfg4Q5HiJj4EGpRnJV3AnQkq8jEuYWUicctW5ga2njTYMqgWxgfcy1Vu15TCvkobimS",
  "key18": "4aE58rbHgRobpwMgQ4CYfqXJG8mYeTD7A6aPb2vQkRBC2buent7bd1bA7kea8JoDL1qgJFR66nyB1weMswpZpdeR",
  "key19": "K65cK2ZK1t4M5BoV5Dmw7s53KvAG3jjM9ZQmxSALQQsmzFqN8u3KKg75aau99AynUDDbi8k53MJzYhVnAkNLXiV",
  "key20": "3KyAxpbLYVUTfxwMZmsyFEMkgdDod2GHCgk8o8tA67iSeA4LMnjzqhmTzvc3WLcLfitt4Dz36Lqv7AqzKqa67NEe",
  "key21": "3P1whLhBzH2QtBZAajX1LmAGsvtwXgcXNCeYriBjS7cEN3FNEV9xXrB2bMwYF5tPopTmri9Xft2ibTK6nNceSgB7",
  "key22": "5DSSyLxgs1PddYgGuEVFohqs11hVT5Kae2nqkXjmnPhb5vA3kjycRiMbZN21ZEM9KA4c8YdnPNxvQKdPMJacs7x8",
  "key23": "4LU4g95JKQf6wxMZjNtB6krCvrXAFA8iCYdLrQZuEeFwkmmCKZPBbdCJS2V1C344fdTVYG9n7eyH1XVgKt5XZDG6",
  "key24": "5r17242pdc2eSVEst99suh9nGCjtCSLG8SiniPCDZ2zwbTvbfAWemLXdfsfXzkv43wNA6HrxDv3Ne2pET996h1Fj",
  "key25": "45EY2uTXRscXU4YrLReVHfUHe9to8qeW1aGrdMPDmzGoKTcPmmV9HSLWViaVgkd3sfNe53JUsunJ2tzfJraKoGrR",
  "key26": "GuPSbfpub4ZHFTnyS8k2iVvmjw9sPExY8pJZN391bTzMYiaW782apzrq4RiRHg2t9EwP7GpuGJuwWJQkU5i9Etu",
  "key27": "37UUeMASKCkVvvML6WQ2U3d935CdnDJq6sRATwBWcGBAb7yidacsAPFtUS5REU8TM2msqsKosnxkkie1hQReATWC",
  "key28": "4HTVViCKAgDd6Y1cDLMdUGbKYQhHEzDSrd2YXzSLjMDPY93vPsvtS3u66aX7hS1ivSLBAYTeu1bCCfcFu8mGNfbP",
  "key29": "4xLhJ8N5SLziMDGAy21pyZ9Pt8bXAexJqEnj7rs6rWHVL3sFD8GfqV9hfgYzU7gPo4nEZihe4i82zPvcUDs7Vjwf",
  "key30": "HmZS4iGyXbzJz2EupfDNbqC34YkZVzuqjCFHJyUXANf84geqiDhZPnhrGxzf8Ryp5awcV2SsWGnhkCey3MYrDDv",
  "key31": "3ycTWCz1vBJ1iwLsQXTEYzUbaNRB9EJpfkQ9Dx4o2rUZkUmPvCwFFubcUzV6bonnXscPeFAAbSiW8LUJwNvr33E",
  "key32": "2KEZKZm9wVzo9FTueApHF1c9zmtvwhTCTriKJwMxLhKau7Kv5LUXSAjDASc41HJwqW29khvHSKoFvzhwezw5J5hV",
  "key33": "4tMWwpYfavijFAspupRNs65SPwZGbPq7MT8SecvHvBfuwufuTEp4R7d3YF9XuLRNTsSoMWiwFCnjgDCmsLx9Uu1W",
  "key34": "5pec55L9uMZ45by5PTr8wD3uf3uVGwGeNazBpkmQTdoxzMLFzbZbEmYpSMTEnJtbYQyySS9ZjHr8EuZmqt1bSrhB",
  "key35": "2K38hgNjDeJZme2LcL2MKj71HRCdxJ7T5hdgdoG29qwz3SQab2V634epsthq78vEfzvWuR27HTKUbeehW73yKPpR",
  "key36": "4Dj6mgMRKqFPnaZEDgS7Zcy1dVt78CuvwphLFpbpA5N8taQkbYQnBPqejDAaK72iUkxQremruVqu5PrkKCPVNVVM",
  "key37": "4gUZjkTrYkFY7HaNKgqNqnV4fmH7uvybAX4aTrkZKAtU1iuQuqo6B7wMxJA2AK1fCb5qsRHA6RnPNJERc3hKYMKo",
  "key38": "2S7V6MJGZm7g5pcZsjS4wozNe2okrZTahfvSvTdqMm4X5LEaN5apySSLMpxXg3PN7r4mPnEHeSKGhofQCkcEjNTN",
  "key39": "W1QZVpNsea11dsgbHq8D2RQ4c5iRL2yu23wScePdzTp1MqiMkduRJFe8rheXt1njhRdY2Rm3GKrwmZNeP4vTq5b",
  "key40": "63cSvv13EXGRyUZy6J5gyUEUqBeumcSFFNgbBtWJBxPrhRLymKMLeToUp4cd8QwaoG6skTeD5HyDwWRvh1z5hqkL",
  "key41": "2dSy1VQWFNMhYhYRcp2Bi63JcwLHpbPDnzzBHzehDHJur88UaqJFTP6JmoHbFk7anpmUdQ87R1fkfpDsQVzBLuj8",
  "key42": "2xohb2WoHemeas9KceCBGCk7aBWLDCFRXpFNudf4eekYooMxMTKNTct1z8bsofiUpWGoU2mpxbZ9WBLgaxMMx2sz",
  "key43": "3MQsvWyLX4TmYppC6m5uSvoAZkTarQNEZT7aV9BjLUiGekNYW9WQ6zhxQadRXz1j2TPE64zvr3cCMPmUKsJuZdV3",
  "key44": "4D5t68tdoCiX6Kc4sWVjTQhPqwK7ifUoJS3ThsAe7KiCr43AzyD2wCo1CbSjRPnSEq2qUpiWAYJdgcVvrj6eQBAr"
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
