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
    "Pizv8ZJBvKhZQcK7kGWH8csyhmvhgQfzNBNK6Ee8jY5Aa2H1NsF5Teb3mq3sNtjpWcaYBiz9Rwxo1WnqWdn2iEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31prnB5nfQk8PkmGfyo2sPcEyDHHoXUWSeSSteV5KrVUmAGLhjWTbhNig3ffzD6UNH54BjiUqovWgZhuBrNaf8os",
  "key1": "3ffHtJE3K6k1zVVUk1oEY65Ee3xGrFLh1NvRBQkyYEi8Jn9Cf4RVb3LYetJmsYPKRGexbHuZQT5roFLa9gZttFQb",
  "key2": "2gWTHFs6tbf5NP8rUadrh2L1PyFV24P38kY29mKidfjfE696kHkpg7D7g167uMqVRGEdWrcA7Vf4Rp5jvKtsLV8C",
  "key3": "34sTuDLgFSwbJgxovGeZn5xEnZVcBcFdQK62Lu8vabcjWVfhEKPP5TC8HVgKMZr82cdALiG6zrupQpqJDEG2eoS6",
  "key4": "5wTb3pcZwpWcHjAtjGALDVsx4B88WngTQGwVVjVqmfpQ8tfHA1voWwoTy6Ji8z5SnJdca2menrJjx5JAAuU8PZCn",
  "key5": "3eDjzXHnUxkAUHxpfsRCbaJZQj6Sc5Bm2Ld7wjRP29uYgpNTVEvXf8RbYkywUh7T3RxeXNCnwSHdSQSbSWtM3YhF",
  "key6": "4cLynGGc3bggByJVhPuZHhzcAtFNtg8vuEu9uPr8kFruvzbTFNgXLyPtzav95DKbTAtdbUSQa3J7vDwDBFLYfUHX",
  "key7": "5yVCmKKstTaC5P3LgZyVKSfL1SQPHYcv8pwKbeJWSytkz3hRdm3xrBu5MUBY5EcFGc99h2qNrabmb6Ja4eF6C7Cd",
  "key8": "4DyZoL2xWFmEoewFGLfoRUiCgqf6S4NWVJN83NR62WdY3gws2j5yE3bJ3MS6bqvwvR81x7zTK1zb6EbaBmAMPvCA",
  "key9": "5puENRNcpnPxJY4RmAhRcxc77gfHoafq9wsNnE6AUfF9jyGRrbF9D89bJKGgpVV7BzButPPzn1rUG18MjVdXjsdm",
  "key10": "5uZQqESZya3e7u6Fsg4Gdu4zMoG4gdU4M8KeaXwBk728V78iVxLQ2DbyVPgKAmvxaGWbNHaGoJnhUxGxndKGf6iV",
  "key11": "APjwJa8X3eFvNbVKV6ryXEqHjBoSQGGnPdw9Vt8zeDSP6pHJh7btfnyGFAKv1wxMTuxaSC3L2FX7TZVxiHMi7F8",
  "key12": "533sY4GuZepKBaHmTkSY4NV5dVQoc97UZBzyu6dPhWyrtqa1zCW9sdCXdwyhDKbjFU8uUTmwAeZrYxtzVSVYQxJA",
  "key13": "5xHiqMdGVL6Y6W2o8p3d63oMcXHgqAZ1Ws9T9rh1hcCXiNocvKWmgXXGCgTX9p8XTLan5HNwKPad9SGmBYFnMXb3",
  "key14": "3uFgA8bHytPBDfQ3zxGvoTV4sw9d3YVT54roFQ4Rgmc9vx5JrktCaYmuvs73f63pqymJ4mWARAhmT8jxixMFsyhE",
  "key15": "2dzfztEBdTjWFg7Hpg8Lgg5a1MRhGi4JA4LhV7TXkLL7FQtworkrF3kFUGsR11n5wLy1U4bETdApQraEDJNJiiok",
  "key16": "ZK9Nqf2F4KYZn6CRVypriyjW9iDEsYTX3zzGKGRrEtqgrGV3XmLA8jXvbPDwSRDwbPymBCgtQBqkpfEhGzxZeyC",
  "key17": "4a1yq4wskeh5tKGwDyCMNTWxJBTtq7QLmHkPoPYfUKfgSYCkCRmhFrCLyhYCYUP3hQ6g2gMvFZMwwMgQNd6C3vFy",
  "key18": "HLvTE91aMNGnM8ohJAgSanno9qfEPnEqZjDjJLPwUSWPx8QfpttfTQojjZjmd1SQzaALZCbZAvyig5L5wPSnPsh",
  "key19": "5iHsXA3xwqe2sXDsVAKw6i75Fz4Q2XcgtnboCQztfmSCRHUt347RN2G5RfkhFEsa84gXbQWCb6XDkBNBWCRi5TPr",
  "key20": "3XRyUMCY9DtKKCqn3SajvEyTsveAokz4F6R1PJvE4tPkARY4BREH5XwRTUeG8gut4e41nunAbdgWTdv3LhWkuSUZ",
  "key21": "gyBPAZX99pdBPYEs2xyXk1akXesio4Pt41JvyCMvm6njfd8KqJCvn7cAFhA1F5oct7kHxhwyeV13jRpdqNa39x5",
  "key22": "4CdLBUs2eQDqMHMVoPEYvygZ4GGd8Qu6kHCta3A6YbHTjbZbZ169kvYj22xRjMMzYnvBbzsc7pNeEWkoUXFuxUGz",
  "key23": "rwiVVkXMdzcoVxGsM5MmgxbVCYYw6Ei4udTc44RtoTSH5gxkgmzXxsgytddYdYQoLME2cGGfzgrfPdB56P5Zhgf",
  "key24": "4pdntSBH8MbYebAgjdTVqdXfEKi4uheb5C4V9JiiDwqw2xHLVw8VcKGE7A7TFddMBabCfjZ8PQPQWLBySKM5JBtA",
  "key25": "xqLHyRppRUi3fU6tz2ZrABZLXb8X2g5CkdiGvPYcPefEBcVAwhoo9YHCJQjKYfp8c8nZpZoJHxypq8DXSqMq8h4",
  "key26": "4sm1VwJAke1KMXABPbPjFrPy6WzkM7bY8xVTUvYfbqEQpyR91jE3AorxVxVHrJSg2Lk8RGwcMUh9q9qkBdee6Krw",
  "key27": "5FB9Vn8p2ASNyLJpDhxH5hR72efTxoWf2ML1nUaHxsngA767yfiGxG2a4xDJVKa8M39h5C1KBXfdgVxG27n7ecps",
  "key28": "3GVVGrwLQxjdaThfbUEKk2h4GvecQLp3FhHx6Kr78nK7zKtUyBX88ULQrkTXzsNJaSHtHJ7sUQ9kTVFrmYSu3USb",
  "key29": "tmUGtxut3g9EeCPHvFxumkc4HakTyKb41RgbgQT424MWAHjTXVbWeWt11XCZXzLemr56nMmLusC3buDyZ1hiMbU",
  "key30": "53ba2qzxh81eMrnY6Fs2LSX5aUjuc62uWZwufR9E55fiUGzBp33UFYP6DTNtxpgmGcYQW94pcCuXg85YuE7CHS4S",
  "key31": "4YNo93ChNHxcoiHZtSxQkGcizonroZw3rZa8LbwBKVNJ1AnNT1Bo4CNTwcbwTp6NAddxqoBAxTeQJ5rTEKXAqDuX",
  "key32": "4gdFkjhe2TTZVbRWcTKYwYMdGa1rK3yDtxoFzDGDUJubsuqzHyvkTXh8rk5YXiTqHfcbCZbKshL4SbEV88Bdkmvz",
  "key33": "3Nd3CwKjS7qZgGAYw4VmE99CjYJ96vhFd9Aci3gDsUXrS9G7QyrhdPTKNSmjAyMNwzptkH8AaKsfu24GdPGYcDo7",
  "key34": "5ht8ziqyF2Kd4XSRYMsApo4XcfNYdYC1qjdejqXk2z1FAzDvjhxbZ3dXtMSijQdgRyzu7iQ4TxYYcsj24pv7J4Qy",
  "key35": "usPjtwT3cJXegnsfxHHHTRFour9zm92P4quPRQX5xKHihZsYbVtFWrXt8BR3rPcCtnCWpzZZ5nCQYV1SxSsy3Cm",
  "key36": "2vRPUjQjo6an1gxHwAyHMt9oaoy3Qs2W1p499Q4SjLZDY5hFVBAEioRwfuzjJYJa5vQApK4ZN2qdN1p8QC9C8N46",
  "key37": "5as85jPzaWCV1hqBZRvBKNwKKTy1P1iwwEXnSq3jWyzvK5K5J8mHr3LUVX8epFgd9pDCCPpez5TqijbHZSDRTpxq",
  "key38": "2jN3Hy5knobMM9p4xzf4XA2ovgpHYBxsEE6JhfAKcAFADRWQcqUdxGu4fhMVW2C8Sm1ZwQ9LRbrqZM1XLXagENRk"
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
