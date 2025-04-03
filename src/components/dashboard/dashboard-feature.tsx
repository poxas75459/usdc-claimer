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
    "23BU85t6EkQyekooZHvk1AqnPy1zJvMidBuoNkiPxAJz55qnHtZLeLvuoDrFKpBWRpHCicR8rXi6DUT9GK6ycAXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjHnt912yDPKFJ5p8K69siekgkPXDLChnk3J8fCRPKY9GdYtYJjYEonuxxf8BNwZSLUoediydZK4Gs3wUEBAKiW",
  "key1": "u6UQsphwQGuddHrP1UsWyc4eiWLzHhCTPpjKfa6xaAknqv2Z6tS1TFKFWkJLwEm6qccSqPWoBTKZ7pWF3GeN1im",
  "key2": "5ixTeRHHKi4QLrYP4cSSMV8DJmhkahbeCmWdUq6mTYQpGbyU1a39JSyV52CsWV5B4XprrhkEvCwCW2Yob7aCMwYf",
  "key3": "5fPp8jBaXwTX5jMjEgbZK6L8ybCGqNXqXE8DniFY66LyAXsGVgfyKdyQnzgRyGXyrjCEQxW4HyMvjuwJVxCBzTxq",
  "key4": "6BpqgyowuuAqMbrez1FperhKAStLtMADQuVLzxwPS8hB6QoRNWFaBnoTCNxFkq41ydt4vt9QsyXZ8NfFQrsQsrV",
  "key5": "4ovqYcqD2Gsk8xCLGZ5y4S7RTfykgb5PLS2pEAAiabeAmYk3RjVGmMoQ5N8eyxCE5yf3cj3QuxcQZBGeKfagVE8L",
  "key6": "5T9C55QjYY4xATj5Vpfiu6uSqK1hpXFRvJYtarKK4ZSLSvYnKV1L9bEk87F3ZfvvYnTHxzSVWXuhHLemcvMn7m5F",
  "key7": "5dQZBgikJpzwAfC7ub14kgvR9ioF9qUaezjyzNS3fCjVJix1U3iSA42oXHJuS3eeWDUpxeRR4rbPvyY9uf8cwZFQ",
  "key8": "5FKzUmBbPAbQC6RvkaCwyunW9qazgkZfkJFaXCAb8hoPJRw5fsPe4npiJMyGBxUZFe1xiYDoP9jiNQ8eREh3tP8J",
  "key9": "3srWAv4aD5x9MXpHc7wwE17YyMebArvSoXgtmN38uy8k5QLA4hSMjwFs4rmiL5MkoJeRTUKS3XgLUVkWxaEEEmEh",
  "key10": "3tPS4srq4oqeJ6Lp513F2pmwHSnK61ivhysE2cw3pGgiG5ynk6C31rgy93KmpdcDj4fi6oKsSFA6D4seSDSHKHsQ",
  "key11": "2Htk3JB83Q9pTbPwLoubrF59xUoJXWPEqs3etbM36qzXset7WGicK76gzrNFeL4BoWsPEpJHpwt4tn2BJsBpE3d3",
  "key12": "4TyvoMxMSR5V6p5LHsGF3jtGPXKyngney841kb3axUoAjEENhu2d9y7KnNh98ay1xTyGjLqPKS38vXoFqbRXLmen",
  "key13": "sgKfLcJH4QHn81fiJg8KbUeZ7ToyfXe1ioXoSb4omEgqidNiiN5bCaHCyDdsQYQqG65gsZfi4HnFQKtCuSvo6dC",
  "key14": "4eKPWiC6TXUGPvNvtL2mLPRh3sq7v6e12UXLWCrwHGBSG3iaRTiJ2h3t5VmSkgxGiqnso3MmgGcgZiYWj8M7XLXJ",
  "key15": "4n5n8hcen223GASdgKA7gSHXfhVEYfrcyBQirqfjBYEgzKvfwPgH521srDBtPyTZdLfTXmBev9D1cssLxZ2QPahf",
  "key16": "GLEvnVpE1UW2VU41k6QcxQ5PZyuyhfQV5jrPpNrsSAVzir3q3EvbhC33emJrxkPzxFMYbRagSx69E6MDXPWRcxb",
  "key17": "3xzwvJAkNnSgwN5Zak2B96M5Mo9ks9i86xjQVL3tmTqdrzWqEPykhmxaZh5hTNrSZtUvpU4U3gKqB7bTijNPLvgH",
  "key18": "61TagfaF4SumSUPWZLsA9vZoNdL2GRk9khbk9S2hqmY3KsRC8yrioPd7Y321e8mADh6mtX32vUx7BNGDnia3utwK",
  "key19": "2B2XzXA7UgvpqVkhGZZYbBt9WGp4FTrpfAHf36kehMvhgvezZRciqpnUdJceYzhpdsn45mDTvFhkbdieqREdzH2g",
  "key20": "4pAsVF6wYKxetjaBRgyupfs4sj5JMacKSUEtDxyJrPoQ9xTPPYBW74QqwPcnRVkGEfotxPcrJm3DgHzChq6X17Qm",
  "key21": "2z5qHPchKPpPtSAyoSmVXJWXN6RJZ7qhPmRQ9ZBJJJgriG5B2NovGxTEpmEVFM6f3K5pPxgcJ6DPLupZnz7EUMza",
  "key22": "22oMppy5Nx6WWuh8VBrjNbZR7DBNXN2qxyUy1NZv3fqPWM32tnVCvZZarZVs1vtrVeU7HG4rnrqvJjoy5qWkBY2D",
  "key23": "52h43F1frBJh17hTpnmdpsfuU1w6ty6Z9xR1JQq1EUt3vSFBVVWVuTM1Kq87Kxgzh5SwQFmyPcNrZJwUy2R8V4Wp",
  "key24": "3Kqkkz4q919syB8B38sBc2L2AnJtBM6A6bm2ZR2d6RybjkrVJ7oY6UzRYofDkEQoNrWVoqmtL1NKuTeK44AuunT4",
  "key25": "5GJdYibqaianLMU4ajRh7v4EAZK8y1dnYKCsYbJNcFMPEVXaPFcZYNaqVzX4uw4Uj3ZVRAR5R6X17Pe6HAk1JAC5",
  "key26": "3sikSWRMiRSe9pH9XPkjvhz9Xq4vy1NnfssB4ifMekmXumKpKuuE2gGkFBMoQmaDpV5VjUS5xfk4GjC1DLykUPdx",
  "key27": "m6rMx96LQ68LMK42kSydFQJz3TYrTiH9628tX6DMhuEd6sv7yyBrSz9QyAZC6cBim4mNsQBGSJJaQSTQvZK6qpG",
  "key28": "8Bq1k6hnizK3p8iKLa72fqqyTiQS72wfbuBU5gobgw1yfUmidhaRtBc6pzhf3fxJ4NLR39WV5zSraSh86Wc3Nso",
  "key29": "4sm9sggMBLW2kjuw6iKSAgfKTAsacBSaeJ9b286HsriMe2D2fD8EZAzrgsy1gSm41ivWR6XmJ2APXdGPEcYnT8TM",
  "key30": "36BPQzfJg48Lexidec82vbM7ZsvTLC8ME2Wqjak2XUEvpHaTtXh33ryzrVLmorGvoxF4iacFWVaXUftb67UteLDW",
  "key31": "i7C28JLUWS5RCT5hEEVvGqf7wZQZWQwqaqnt4w4YqY5f1Y1iMjSM7dxhpnjZNY3FyJxJAUiCaJ5v7U8FgFYPs6M",
  "key32": "246aCsuBccjZ9SzGgVJWrQ1VsiHwBEUq2x52bqV3tDMJcENs6xkQX9LAgj3RPw7cqdQVgW2nTKmr9oGa8NxYPmGu",
  "key33": "4hQwKii6nKm5j2edMLrmSMRE9mwp8fAEmCNiKzKgu3FCYE8EZRxfW7jTYEGpp8CkTnqj9Y16icU2wpqzKjSWjLzU",
  "key34": "rW9CivRWNZ7vDzDgUvARpZbw8GTXquRkGdfmeXftFhZneWquEGV7Z2dHVgCgLTBFDWfECb6DdAn74HifAXh1WNr",
  "key35": "2LZvX9FQxxFvQ39pbZdTWJdrYc49zH16evPAobHRPdMjbZbC6GdBJ7HGpMa9ytKEbVobK3GT4uDTJTA8hshn74nc",
  "key36": "dLUJtLhqgkxXtJGouf9ogGQXfP8EPWrYSZcVTsjR5o56Bg71BxBjPoGirkLbRzpm4R3S13LayqUyJhBePp5WAZa",
  "key37": "SsjmC42msSyVXsYnj9q4S1xDSpP9yJCwSyr7tu82fcEooV3tkEtdH1cax5S8qceJyjoWw6Fww5c23d8Y8Y27kvW",
  "key38": "2GpwyMUciUutWQi7tZht83Bx7VUNHJ6AD6MJb4JajaHxGxZXJpS9xbGKTCfFdepGng6AnnxbBPHbCYaJQeak7i3C",
  "key39": "25tgdbhmTWmH9XF5bG9SbkuY8SVRzqa9cfaEhimwxLWWpxcbmnibsdHp5B82bdZSjVPnPPZKwNMcef63SjJRLAxs",
  "key40": "2YnEC22M1HGoWzTQZ3ojnuveKXhY7jnGZ3g3untYESjorWBhNLX9YLdrdqaxq4p4TqaSQu2bpqJAcDw4afKGH7VH",
  "key41": "3n1Zam85wV8gvNHAdUenEVS2zKCCN1RsK5ZFLJCS1SzyzsAMJZdY9umdsUtmYUHoqiKRfeVhGedfTU1PJXuEPF6b",
  "key42": "2TNz4ZKnqPS5Nc212VX9MEHSdZxSS7yLxVbb5Ay7mGZ1NatsZJd6v7ppcNmR2xLqGDccpu8Xwgmgwe4RoNEFYCCQ",
  "key43": "rDhwmHowprZgzAzw9wQiqNfPAS9BEMS6ypnwZCK5FQ6rSJGcX9SeDsTNL8G57aSZvW6A94av1CDDo9LYVFLBw3J",
  "key44": "48Kv9GrkMnWnykVsmD39Nrq2vi5XHLauduJk3fYpkLtaqgDEFNsy41wivKqYR2Q4YwEAC2qtaC4PxhCP9ZEZ9f7g",
  "key45": "X1EtrNbHY2bXKGKhGoC2nsMhip8Uws6eZhyxfQ63SSJPvCwy2LvcnrQ9JxJubCzzzP4i3jH2RcWA2ejGEfkVKaD",
  "key46": "3AR9Sgv6jgkVurAxCLhxDTegshkqGCN1ek2v5YvmtxdGzrrmc8BTGs5D9LAKwKiAJNR8FgcNXttYjgbfaGp8vMHU",
  "key47": "fkEqkLJRQR4JUhvMEqkj7B6rDQLqwnSmxz1bS3CV9aj5cHxF7wFE2v868SoLH4ZMzp5JmbhxFMwXWiqomRmm22J",
  "key48": "3oWrtdhgoMMxovUZdRzWkdqY5UD1c8EeXoatkPgj1pgwAudWdxo7Z9MPKNoD1H8s3bt8uyf1gninKmN5dpj2facD",
  "key49": "4tjjYghFDr67TFpUu8wiugLnEnMCRLR2qQXUsguHaFXGaPkBTRQ8eHyUnPZvT8y9s8f63torJry2BfKPGK3KhRLL"
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
