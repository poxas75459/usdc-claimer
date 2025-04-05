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
    "eqtqhjWgynTXgrUMNkHXh2r8CzYFJKfqhowM2UUCWv681ncKETTyXU4Nkmjts6i27K7gz8YgEBmGELNGtnaJSNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41M2r5sqPET9yXtAT3o7XQKGGyGbXvn4TGyAh9QaEf5AUv6Ha5wQz5bf44pZPPUe2G34Cb72ubUtgbfMpDYbDnfL",
  "key1": "5pcQHENEdrGJcBTPbzqsX9nX9eQniagG166pTGiTXyZy1Kh79LNBF78oCVU4CQCVLK1CQfPQKTh3MQLRvHAnk52E",
  "key2": "4HbGQA6BMCWxKzbVFUNwPB9Vtg66ySTd1SmK4Q4RvY3xiNnn8xW2z4Y9fryMPGThSf7McshHhxcVbjsy4FQZQYSD",
  "key3": "441c6MxdU8dtrcpuFvtXvcXfcNrCvieo7vBh6DrWhwfMCCmvvc3MmX9oue6zfUmFyQQj3K71KoXXZKVC8yvS8Ka6",
  "key4": "3jcWH38ReoA1L3vAKn6izcGd1M5BEHgvbzFTFk4ZHEgBJZNkCA8PpafY6tuvjPAChR4xtz26Mu645PMZZFHWnCfm",
  "key5": "5KdhbB1hfJXXQsCm7vFsRJKxp1YiNDWR1BoLUErdHHZRynxBDecmF5SHgx2E8Jqtdyrypsve1gUQiswD5BuKrKkE",
  "key6": "4my6Z9FJLypypmaZGhZkJinTDidKzaFToSr4ek9ZxQWdYTpzBepnTXsVLXYddBTLkwYzgLD17jiUgCoEMEbBoPP9",
  "key7": "3Hm96yAed5svWEgXTLPgERRR4kyaevAkktBumNUDEZCzwsTeF4L2HRmUhTkVAT95zpw3QprMmCD5peXFm9QBy2Ef",
  "key8": "5VrunKctGAPaN2pDTVgzHqBp6qLY1hE6THP7bMR12PEmeiBXE9oZQN5oj3dnRDGJ1HzwRjryngncMarf8EgNvp9x",
  "key9": "4qCxeH77QVCdbr4LtCJFZHruDkGRjNoXZFrXN2bTrgeykXppg1C7sGsq5gdaj58hwVZrkbmCoNiree4TXBpqvCF3",
  "key10": "2dwftRJHzkqu4fvF439gPZKKpt7Tumo8hEExjEYdQGmRej742v6rwnWAknL91XfCv6PsgbZCutpTHcG9gDcFxCNt",
  "key11": "33DubLmQeTa1DUfdenUKkMoDwd1QU6zExbhDWE83VSceGkaqnJzHiyarRtd2AeC5R7inGxxq5XSGLTpPW5hBN3Uz",
  "key12": "D4b8ozyEczM2sg3KBH1fnJR7w2GrAxnkwJ7bKj4E58TEHwHsU1YFajnDStMdKLc2ugLd8cuA2kYurdHL1BWfESj",
  "key13": "5L3ETC48r5qxKskap3h9ZiJTNZhmsM2uPZ2T1VaoeAhquhfrxWRPzfWLBabzzYHESCMwPcnHvoF7qsH9paFHSn4s",
  "key14": "4AaDMiev9sRqNXvKGYcsjpDi1Gi5evM2bLaqQfL9iDi8rkJhtK4SDaZXGZ2xVDhnh5ZrY1in1LmMBtpRPWTionYB",
  "key15": "428z1X93PUY768xNu3fHTf18vSyEKM6w8Qn42nr6KH4LNyVPuf267Pg9n1Zam3p72a3fb1prNiowta2q4Xi7P5hj",
  "key16": "2SjDtWsphaQGzWUxM5a8aU8kfqYtFMWQ74WmF78yCvAtKTVcLZeK7tM4wu8xd8mQQpXL19yRZgpSJV7Z93bWHepi",
  "key17": "LStPgcTzgoaJQY48UBHHZMVeqmf82Lj8NbzcBRchPTVY762vyiKLSWcsLMbB1CG76KV3i6SNXj1v2SgQm4edV8f",
  "key18": "2E3WLULAfYvSwpk13WWQJ6X3g9EKQF1hrzMSCjSQXUhvnx46kUhpKujFMa6ZEm3rZrCrioqkTyn7qoMajfSoHwE4",
  "key19": "3aCfEjj6PnNUaAvC9x1ZDfViZbYNNX2rR7hC6oAAkvLWffmuuTNXUDbZQRLcRYcD5YDezp1qAZBbBV9XfcQEuCAD",
  "key20": "2fWLmMeoKwwFskdnKfKxxg92WXXp39XqXsFh9nUmNfNJjbJib1wm7oTczV9eVPfUmi6g1xqvsNrQqeQW5rM6h9pH",
  "key21": "35bKgxdUwD7jp46MT5QRELToM6Z2FLeXCaXzSxVx67RZjL19hFp2dZKRUKFJicxGm7tsGCz97MwuEMQMJEdj3uNk",
  "key22": "2kgy7yUN7osSKauXLKSyoLyrRBFX4FYPjqED3UkdTWcTu4U8mi8C44nByGY9ogc33Ln5evXcaXVLDSym5tkxYp7z",
  "key23": "mebnde29pnQ19G94kHvjTN5k3aWKygRU5w9Sn5H3bjPV83k4c2XabcZ5F84AHyUkVyE2ZSJFzxW8q6MvFRMp5ic",
  "key24": "559fVR9kCRuShp7CNNag6aNa28Z5CivX8aNdbUPLefjjna581RUjo2Cn3Tihefhk6cyWwFG2BfT2mp8wA3zoGcvD",
  "key25": "3rH6wPrzcRrk5fg8PEWP6EZ1zgUtFV2iDCkAQu5E9QsL8P1TmaaJuYhGbtgv2PwH2xURzEhKSgHRd54r4wVs9Zqi",
  "key26": "2hwZMyoCLHULxgxg36DiRMmXwgXaYEddZdRdiUQjQ3EDupDrQF8vsAwWxAmbhDvRU2d3iAn529f7TBCbrBQKuaTC",
  "key27": "2pt6nJKn2ArR2T7fXvyRFsREqKzKDypJAj3MxhohRFmN9oygdQHLySvacbTvFm3VszJKXxupV8fDLGu3JmDc1gFP",
  "key28": "4rANYfigvQT2HuzHV93nu42SSS5rm3mXM5uJKndqT1VsQbxkT2F9nWn97EVHygf697cYf9M7HT6W5FfFJ1CQ1hAt",
  "key29": "EHF1i2BGcLoytqZaoucMxLtnsz5dmdMKkonXGgsy6tzJpvxwS2BvyxMxztQvm1h5iMCEug4jFct3AEwW5SD8Csc",
  "key30": "5s3mqHP4GQ5vRA9oZwRRZ4aDf2F6QqtwsYxZPhUBBUYLDQj6QJRPU7G8AGwAWgWedcRbNYMWRbf2Tb5jc6whScKy",
  "key31": "4BKSXC2iFAcrYFZe5tTALBfrCtqfrpjRAoAJAFUpUWdhBzCPtH98eckNDyPBUTvnAmzAKuHtDGsDBc12JxzxJqVH",
  "key32": "4Bh3JPAzrd5yNLy49YG6AJQHZ39wUV7exBsqg2kW7bvnvBJfa2UduYBV9TP3M6RPW6Pu7sC2YQdmdpecSoRf3nfG",
  "key33": "3hJxcvu36VYxnQkFogryzaFQMee5AYWiiQHtHuKVtmY8GR32ZL3D5ynmfZLfN74Lmtde9SaxRkEhT6RJKAB4y6f1"
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
