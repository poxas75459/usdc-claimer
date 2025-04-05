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
    "2Aw1Gfuz1w3NeetrJ9mkirqPQG2KP6TwHXAUVwum23DPp2cSHxtAwcC6DHVqRcSw4mhJKnMMNiyA4NBjC9jE1mQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMdrasF2AymW7zW5BAgub4CT76oucQUFgvSZzc4aUJXjZHGpxYJCozbMVGpsfFkozBQ2oQhWsFEDReBpM4b3ud2",
  "key1": "5PRnCScL2Vu7xxjreS3Mdj5wstSABzbEXBhSVkHkfhwvSYu5nYrk3kENfkG23Vnc7KrHBLVLqLi6PEz88mJu6cKf",
  "key2": "3z3qhc6u4pvKSFgit1dGpi5ADvc4CsHcEzCb2ZUAm9hkxUt23XQryQikFTeRXaHXHmTBeoLb4nfPZodKu6CQrREA",
  "key3": "4Xc7DQFovKhvHEMbFaCfQ6cQvwyejC1r5tgJNJEu3Vu8NKCNyW5GkcBgyobGdR1Y5GNZYaJPDCnuFo67mqQyRZAp",
  "key4": "2Vw9vMFNN4WmvofndbiroRSvE6MJi3m3tsYzvCbDUdxS8DRgP3XnTEVqYmZQahe9hW72THGLnC7Z6mjiAgRMk3C6",
  "key5": "3MewouHtqTENEZ35HwzquZ2VMufiQrB6a4HYBPL1gqTSX2c8keZzv75C8gwTQmQMoSNQCUc1Gy7XProkTCJCU2Ds",
  "key6": "5SufvEJnY2G62zjwk4fwK7ujvnmrH3fHQzaXx2mprBn18NK7eZuyzdNuMGthzCBUcTEk58coZTrbzD5qJX3QLGDJ",
  "key7": "65SiqwtYrkFvywQb4jXmVsZLVUMEj7HsZZNngetn6VcpbqHjhoBnHVA1GQKg5vtdaCFjYSkm3AzcBU3WAAkV1NZQ",
  "key8": "2jaMXXLwZPr1tTZa64YxQ2Mt6YSaZ7pCevv6wJMrWbjAmRtjnmYo22JjkA7X9wkhne6i6pmAKbdN9wpUdg8emYzv",
  "key9": "38bhK62PJsWACpRKFbT1HJW2jeupnzd5YydF9xAKUjcihbkM6NVoDAULCKmh7YJRyjar6D2f4wyEdF4tpXvUtQrh",
  "key10": "33UPaZ87FEKjxxMgWU1ifMSvDyLvQtCSipznepyaub8E2yniAEWFXeEydCEWNsZdc1D7EiMRQdPXSQ5CKh8muwUA",
  "key11": "iGX2i1cSADnZpS68MgvxeP9m9bzsx1kETLSjmKsswJZyXh3EuXyakty5h5UctnxPyz8r8KguDpPfFSpvUtmH2m4",
  "key12": "3rhxxZcEPgJxgPZG6wh6fTJdmDJpomcPQgn1Q45u2PrDLgLf3YHDQhyakZhzrT4QMyTA6u5Vb7jiZvXXN6oMFyF5",
  "key13": "2aV6PQDpTzSfFNCZNMokKkzLd9Sa4Wz8WgDKXsDYpJPdpYhxpjvCsDL5TvUTyrj23f4513Ww19BRSS17dmCPCZMa",
  "key14": "3esPaPvnAMXVe6fxE26ucCEMCV4TS4eK5ugwet5kT99BFxRfmG5SzNzX2NcEYXF681win9Ht2kPwgXQwDLcHwEPh",
  "key15": "3FxsMGoAYdJLvQGar32V6vBJVWSSG7fjTWM4pqozPeJ7sdmhifjLzqy5oUQGoqPT52piiWhXuzsx3WNTWamxf7aq",
  "key16": "5ury9sDoNFBNdMfHMy5pRTn1BYUvUMdFyMmbGcpvkpNqqAA5hyQhBtLvLfADpuSiCnnapm5YUHBhwEWPhRdwonV1",
  "key17": "37nGGuCace1FYrPQfQ1r6YXFUvQ672tp2Cey9bzMwf3E8wLCxqZS6ivAxPXY8VeGv3GFnPBJDDm6D2kaiwVeKMcN",
  "key18": "3A7J32JhjMaXeewLkgvpb2XKVawfTNkM86TPQMBmym5pX2QPJj2ykSfFWDWNntt3cArX4LHePP1wNxXnErKgiFK8",
  "key19": "25q3j2VU7N59mkn9ufk5VtpdPWhbuA847vN84LTPNpZ727qN1hSj2zjxtH8nDU6fEnj24cfvN3n7GK6y7MEiUtDa",
  "key20": "22GyUMYvxikwvg5V2oDhT78tJMcjUPPq3i6MhEsgiyuFp4Xwwskx4NGTdMqXUAfatF88f4tduhGjawxWsWH7AaRG",
  "key21": "4juzhSQJ7qXvTpEmwBRPEM4ZuxQPUw3bFSTyXxScvcKTx5qS6ria3XsrK2aLCFEKNVijvUBwUKvXE9ngLcjeCPrp",
  "key22": "4RmhNjzG4tA64LHpdBRghBLewTKxXQ9G1mppGH4xJsqktQWvqymjv81MmUTLFUuZFGAtpP6LU6cyVL9f5fDoywjB",
  "key23": "3SU7Sp6QghThf4Y5ru6K5sSzi4tFSAG29oHfUJ1vQeXgLnaBpcMP6tSah5QmRsbohz9eQyvz9NTJZyy6hoPqZxZ6",
  "key24": "5A7Fs1XG5RDqniLPtMPyi9EvpBE6UM5o9X8aJmyKsg39xgn3pYgLzAfaX3K5XymogQmjNkJVD9UGMFAE2juNJgFg",
  "key25": "sPS4AL831TRatfKoz3zCTPLvNRkZho82fD1EgwEvwy5XtsB1uoj5zP5MoFKm84wK49Yy1LyfDxyhFonnpfZpEQM",
  "key26": "5991CdLpAGfhknFnCbpSmTJTXpkaQ4ck3fWMpQ1RgyTBYyrGZEpEsKXnzX7V7kybsx3cPJeV5MTcXoXmeNj6dB5h",
  "key27": "4ttCaMBVayD1HJHQbQev5zyM3sPB1geshJDAS41mxvu11orsdMdKzH8Xsd5faSGbzn9wbdteEsaU3vUDRUfsvWdN",
  "key28": "2oow1tbvxYQjgswXEFPefbtbXhxEevH54tkN33XY4qX65Hp9Ywbs8mfXHCCouWVetpHh5Zy6AiiTTCSmP2iZNoDX",
  "key29": "3Namv84DvvspWy8KDK7y5zx9fJ9fmtZFLs427mcFaygaWpjzFdCf8K2oGMHXvWTR3F4qmBRTU6Fns8ukMs64A5p3",
  "key30": "2RoDWgXxDShVtTJQ6t1zkSdZ5icY1nYLXC34WTGSaf3hSLWhLo3DuVBUqJzESUu5zikG8eXeT94Ub6XxxedVDAUU",
  "key31": "29VdD3WpCFrMDwFQtuUQ859AWvVaEPEAy6YqWrS8zYYpBmqDrCQPHZ6guFMujJVA2Rzi8rbimXMLeNnyjRpKzWLp",
  "key32": "QvhLq5Evj9t79Bv5mZAf7sm8w7cz8W1jHKWhgNgDuyEgmztHoi5jg7Ynd6y3VT2FFKRatnRpvcroqtGe7eqFWNR",
  "key33": "M6tDFuT47YVrqW6Y6bJ9jtsbwxQwe9wfkMkH1MHsvWVJhSmsdZ4HJNQJvoT2cEvoC8LAd9kGSc1m5yt2kVxH6Yy",
  "key34": "5ivUbnbNF3jk9n2MzKDMpYXyoZpx3ogru9h3aGx2vawJFUZzFDKM6LdPpLqKqHMyyYsXRNcgfnY7HdRAD4iKqhdC",
  "key35": "3jJC51bUWTvLoKv9r4efVfteccjHehNEeMPUJ54YmyPHtwXpo1K8kfZLgTRgsGe9ru3XwX3foCAWBxaUPypDNuPa",
  "key36": "5D69rd15KFa67NmymB92DiejGzZ6qS2qxkvvmgo4Ri5Ww6nQA1TNfo1HUX8ofzw1wJPZ9ZMt9M6R4LBis28o23hp",
  "key37": "2cze7fQnstmY8VztCTh7TLES84MVU67fzh3PPyXAG7Db6WzuvtGDCE1NFFCNZ5yRAG78obbAo6yMBC3UVfs738Uq",
  "key38": "3hd743D3CZ3GMvzrb8mXsRWrgisf2FqN1AsdvsDU5LzBFPSuLJoEBQ3rDcRgHcTkTNTMQ7LUhmRXiDE8xSJ7eh7g",
  "key39": "rgbd9dAE5ZhiHPF9Rt18XJMwUrumtAhpF6ys8AoYqr3H6V9cAhVraEVdDVb4TyJYCRTy6ka7q4MYxeBhVUbERbZ",
  "key40": "4Ei4Qc5sshoYbSzJcZ3Mi6NamhEMAAKRTewf8nVJNe4DiWGvibZUZ4YCqgntj7TVxZsUSJtYqiXjcXG2NfwcdRED",
  "key41": "3rzgk2gSs6Y7nfwakVUWVeXa86LVpmjtXRTkcGHBiMXq6D9yBanGsfbSTtdgNGUjupnRyF1H9LjwLJhPLZLqm8EP",
  "key42": "4bkf9h6FPDRqpEyoY9k7f7fHgfwPjq51vd3bwhz6X4FXMpq9xpeL28LqWfWNJJudbS4jgErVfZGVYBi4VeKmeU7s",
  "key43": "MxT1afA9MkoWq6qWBrTLxNBJfTTnH3XtJCkb2qbSPNGeAeKPE8r1X1dvCjUtYXoa1Tz3UP3CEC7Bn3Y7MoV25iL"
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
