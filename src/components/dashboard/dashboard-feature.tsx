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
    "2wcxgyGaSYh4n1eJ2AiQUhDbgSLrQ8Jyo4QadUEyinn7mLiqbEn22jr6uk22mFABueb1Sv45jghXk33AxtHoRo4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUHQ4jzi6kHSF5tVyhc1CHPToFrVnmSN37DJ3Bv6h7NrcMCAoaiqmmoCrNUEAH7gqh5siDGUpvDdPVwXfgWgt8K",
  "key1": "4U54zY5tV75pVigyem3Qr4hnbqhaZJugtMwDShZn8rvYJLdf4raU1QqQxtvr7vysoG5GJ1b9LGtyf9HPvd9XNnqd",
  "key2": "3TX6DHtmFBbKfMVpyRnvhPudqWoHkhL7t7845d63LnZUjCosGTPUfiBLQMHHmkYKrDLPyeEDXvoU4GqsUuesNfms",
  "key3": "4QR5tmiZ6vFXx236CnaxbqnevMwKJECH7NqARdfawSEFcC18YmKVkepXbUm3KeHho6xAKnMGdxo8TKGqH99B5UGH",
  "key4": "3K5PbFwS6eU2syECsSS4JAjtSBw2HK8XGjZDuu7mACWsBL13KLJbDus5Pd6YSp5tBy5NVpRCcaWJorxgQThTPRmy",
  "key5": "5ZGBbz5QZKQgEaruDaABSFS8daKwwBE5WBSRnQS97LDDRbUmo61oodcWLAKrgx3cqqQ1691uk4CaLyi39iKaEnZT",
  "key6": "3vi3ZqbiD4MoGYK6hcZwytqcb4Hb6uWw5ergrnYFwHbWASrfSSN7gMa9ae95Pv1dkP6drKVB8Xb1BUM5NENd2zL4",
  "key7": "2fDc43mhsN9dmADGnCwLAqC4K8RN43DzbP18f2cNtZFuZZMpvLjW1zTn75is27AnmASayZJbMxTctC8mkPys48gt",
  "key8": "5K6qsZDXQMDWZY8Le8wYmupGG5bR3F6D5NCimKLqyQLkKCb934zR3SJ8P2WKwdeyJ8T31pvzyB1HjwaJwehUfAQU",
  "key9": "akMMEpCjFbvjagWcVqu1imJbYFGAYSFJuEJgvZQzTDn5ydxD4jEhJJ9m8UD3dpDvTHDG9bAouoh7eLs4WVN9jr6",
  "key10": "5M3Z5iPdHbyJdBDdBmc87XvuQ6XYuwQ6wFUHpLnhZbWRchYP6jtD6drNhJVgkD24dVz45xqc8m6rwB4LBJKxntkf",
  "key11": "3X6c3jaFVeLFwMgksoNN4uEfW1Ek52AxNhXhZgXY1tVHJr6dsL5fo1Wgia6Pf5onVYAKeSeut6FGJr2gG8SVqCf6",
  "key12": "5SXNqUDyZxYzccgLvezeFgMRe5gAiYDo95Jeqkfgtxtzkc9LZZ2utiGncizkVPZGfYd9YW75La2ZozbCFrKvuMqL",
  "key13": "4SQfVfQqFCHSSLECp9rdN5ACwsZGjge9KHNUdc8zoVb6mF8WwbU32sEJodeSdC9F6wqiAkAbELvWbUMFTUKNgNUh",
  "key14": "3teJL66b4jLciFEc8CVRtrLfBLHLMNVa9RvwQdv6TgLHXgTVvshgwQUabvBbjtfho4gv7GGayMvTK82722xm2ipA",
  "key15": "5rP2hFvEjCrkfitLJfN4Se5JZYJHdroXnZY6bD1QmKFMzWVjiYnJa9aSZcaJAwfC5ertE6GTiyQ76tsexMDxoD4w",
  "key16": "3CXmhRdL9esgeWYJgXehysAj7WLUS6pj8B6HVdU8g24eAT15eMrqrdQWkDWZCmcWniCdFWPboWLy54zbfJBdd6j6",
  "key17": "2sMnSbAHZ7oBJx2MCTG1ztvuhKzNioQKPNToTbQte1NRPvHYYJHWcFzNzs3vdtZa3zFXrhLuo8zsNEj4wVVgZHye",
  "key18": "2jf37QQs17vVhgYcqaS89gHgnRX5N5Pmo6U57xHz6W7fAy7Yxx6bYvjMf5XP2idRboUzoCgxBAhQe8wDxR9cKc8Y",
  "key19": "firCvEb86vZhzieqiP3C2mZ8xa9BiLetp9uAuAWzWkRPhXfeNCz1hN2f3jZHzfU3mp12pteMnCZpRfpKmdJxMek",
  "key20": "4Tv3PpWUQXLAQReTEdY4nfzYKSVLRDqZ9eG1kMd8uVhtDGuwxBYjdAQE4Yp1Nb7emAymCeFWyy8Wcjox8HZgUDrm",
  "key21": "5YkFMiRd4A3h3E1LnCtrnV8bnBoQFyVUZT3GUYXoesB8CsEa9Lz1DEbuec624Ccr9PBG4GvnnEjLFH9ZTeGo2mf1",
  "key22": "2w2KWuWABtHdUzuGmDonCj2C85zctAnD31R1ERD9hwgPNkmZf9UNGT5P69ZwowqS7Jpctz7ub7jdDgkqEmovLyqS",
  "key23": "53GAknczXn1qNjhnHqtEYsLFKrkZNEMw1qnUpPi8LPMy6G6gFgUJAnVnKAeRrWSfwYMaCLXrNWHuVbefJikzevxE",
  "key24": "gKECVZFTdDg3sZB7Ymqnmpsoqm4me49m4taL2QLak3FmSxurfwo4xzb1JTanpTXSrxZtuJsdhowmoxEQ4KErR8J",
  "key25": "ima9wgf1eJjzBdbRWdJoN2Ue73wzW6DaTP64mwdigjMJqZBTJ8PrescrHfN2HNL3yjxz9YN2SmJf1gwLkaavsqW",
  "key26": "3h3vuY8AvjZpwUgQPdPXyFG49GwNZszb1DGoXKZagxgPQgWQCLuhvzkwbPgPEr3FfjLjuR9bwWts2nYSSm9hnbVA",
  "key27": "aNebibJkV9GC2S6pMRfwTX3fPBu75LNw6mep4YofYwsVLSuJFqj9g8WUf2PHc2aTpxmw5hhkYqQfDbi4djzqoLt",
  "key28": "4jN56R5ia6A4drhH9jEBXVgYQBPcX3LSMuqJ55poj82UBDiJUnVJwvgMNhpoLPgbC6voDrfemBsxfMHVUWLdoabg",
  "key29": "4C9Jbsmn6VzW8k5uMBRMkuVMY1pV61hrrZqg674ZGPThTLT6xGiPgCxnF9S1knkwZFDfQCBbs4pKRVFdszc4wYFy",
  "key30": "55V9a5taVMncDq5HMp6ohfoiF49bvFQdVqfVa8wCf2SnWNPXCC9CodRjndy6aK2f89tB4vsLhxYyq3DNLm94ELvc",
  "key31": "HgZgVt6WyjrgcrNKiXJ3PXzKebQqDa9MsZZaANYn1VqZqdKZuwpMrw36ar9eVovPw1xUtnkZ5S1vThBL1Zb5UUb",
  "key32": "42dfoqqK3qst5Vujgh1NT4b8nxHB5pfkiR5T7K8PyC7dHRWahwbuCJk2ChcZSLMTxGDrLhdyjG3T9YZU7doSeRpF",
  "key33": "5Tzm3NVsuPDeutANWkbjBAN6HnGkFNS8tWeQ17iWd9ii2kJe7pn5z6greydHvuR4Eb6yQcd3ZRATGXRieehHigsw",
  "key34": "8bQiEc22EYCPZ1vktnEfwbnHcRcHjYUL3nfBdfLydTFMwHhMyu6NFuoDJE8KsXPHPGxC516X8aegSbdMcany2m2",
  "key35": "32Lm9MKiQYaZgjDrbcgoMC4NJPU9pX5y4k48vTBBkvhw3UhRRhTMLZcamvujuscfk35x7y2D7S71hKzZDM8CSG4r"
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
