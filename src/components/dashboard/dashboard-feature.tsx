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
    "5yaHbL5EtRM9Q1vHz2SfXfTHBtYvGPNUnc4MRhXvnPzB3Y2A6rqZUHkXAtu6uR3zE9Un85CAPWVBVLoWFWdp2n6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MmSnv6S77TKE9myYY6Ra6tW9a2BZnKzGxRqH1tXYQxapwAuZfb1oW1a9YSPjm3Ddhz2GBXRFyDHLf7uSYPrKbL",
  "key1": "4wondXkSNQQaiK2yCkhbZPvGpNBYUZP7WqSx44c5sh7S6N8SbjPcXyxkRA6dnvvJfLWha5MZt5q8tdvdV4vxuLmQ",
  "key2": "4KBQ1JgfZiERVCMWSacaKTiN7hYVn1Mm5HvB2jMFrJcjzVWNKEJqvks7yrdzax43pgdtcc6Sam9FQc1iPS4Hd2Nr",
  "key3": "3BVPDDnHRsTNzA3TCiQpEJXVLjP65VxyPe9MRtm2qNybfQMcdgPwm7rV6YchTmh4sU7HzuoQZzYtq4jn1KNACJmg",
  "key4": "36jzmLVyDHJ8JGTF9LH5BJLVLbZ6y5bL7f7PZikkfAUaLDu7zbSgTrnWUjhE6yHSKy2a1dZMePF2tCkYV7SErKS8",
  "key5": "5VDvTo1yG9jeQ8Q22eSbAtqt4Vfn3c2yFT7JSTxuqVtgd6SwUQ7UwKrMLRdHdj1htP73kCDsRR5y9qFFqrA7GYvN",
  "key6": "4XLqu85i8Mvr5QEqBcMWvLGx6EKemiSx5jekifbQdqkY7hGJD94zGraVjNnke9bV1WwoSMve1YvGhvnJVFW4sjtc",
  "key7": "4QBUWiMQDS3kaYTjYK4h4LtaZrAdz9DHZWYttkj9FmTwbS5kdfPHshCqdozMDq9pvLFQgoszMysBvHQyHNbQ7J7z",
  "key8": "34dgZtDmnuhGiDu8Sq4evHAZB2L2rcBKnh6tqsN4JStdz29JLh9BnSDHo6qkNPeqAEs2ySxhaT5ZJeJ21obcUoNz",
  "key9": "2B9XeLWgBCFREaQ7wZRa3QeiNGCTta4ED336SRSq7gM4N8igQ4xiSDo6KtXrt2hYwa2rA7uagzfx3ToWyUU8uy86",
  "key10": "4AWdGGkq7zmkKVvC7vnakGPNZFV6j4AHXAdTiovjmDw2XNZo6b84ofF6S8Pi5xyiHxtiujHEdFDGvq3mgDqyXu8f",
  "key11": "4huWr6T9WTX36ETEnWwLAspWDQvBhRLNXzTJFPoVbV1GptWQTHXMXeEnanyqRemPc2KFzfUV9b1RMWDGMwtr78Jo",
  "key12": "32VaHNAvaUZCs2nXXa8e9vkTa6MrAJo5H1cuyCKZApPzPLWTJMbe22rzAGiekpRmLczJs4RR2t2pRLt53aaMKQXb",
  "key13": "4cspnjgJdA4VruFGtLc9Ns3zCfWNWP3RDEYJ5eBZMWmCRkQmyWWHZw4vg68MPowJP9yA4YKPT9d7ZR3L2DezY7q8",
  "key14": "61hoZfvRqpxbAy61uoPeYWUFo67dcRvi7EfeboBaGwjaU5JsrEpFaiaNRz2bhkUsLFCjgVUFLCRKsiPr6Psw7rkt",
  "key15": "5AWWTvrougBBjCXqpNJxBo7XJ7giW33BqiQUw8yJ3R8Ty2aGZ8ttdfn3UfeAzSoLrGajbrHyK8oCJDATXqhztufV",
  "key16": "532iSMwyU6x5rEiAhNTCQa9LHZwpcB9K1pqyNFW6bnxkv8gwvVUeF15CPGhakBDWaeDP9STwPeCoNxKfjyCMKZGS",
  "key17": "5uyQZZJogHo1EwqYsauMveynphiMg4uPUqM62NudvqjpFp4Rhf3sQgchYeCeHRkRbUjQNF2f7k76GUcWqNrd6BhT",
  "key18": "4ahsifjrrXCbGoim56VbDNTDSjJtDQQRw8WyPxFLjtixbken6kphv3AoqbAmC4VXdSWfmfEHxmGu6GhH9TmX3djN",
  "key19": "21bEpXHNWiYAJURr47RvsDaFmaTa6jbZEGGioDcgSJ7XNZihtonUJMs81fvBaEAEtCtXU5jJU5raNSFRFAhLzp3R",
  "key20": "3CSkAaVgZwuDJAfFi3LqqwDbAFFTn7iKZtkY4FpsbzNGD1R6BdLRpRabVrNZuKPxCtjRsUS28iVXXWRMnxZdx4nQ",
  "key21": "2hPaNw9Y9Aa2gDhFZ69yQoqYJBCtp2aXTwhapsFfXsjHzcRnYTKF2XPPzep9qD3Ap59NrctSyaoCPA6oVo9gVqPh",
  "key22": "3jJzBuNP3UbYPcry2htkmcKdf9CrYxEqz1hM9HfLGEWdB8PAsvyehQEHX4QGzUEMm8oEszvAXQeXnQkamsMSyi3T",
  "key23": "5pLBfcXVJYcmWfn2r43B9EtTPzRw8Y4WBMaBcjuHQcSs2W3n3ReMx7NLVeKoWFem6XQ9aynkzFD9vubhw4rn66ji",
  "key24": "4U3nGvmsNMTkxzGJGNdwGpimFrR8s8m5yxd4Bif2JiPY71XmFDmZX8fDCg6NQHwALwAr6Rqga5om264MAz9puGm4",
  "key25": "2o6SDxNjm6h36TqRGRwRhuWBpyqTM7B3MMHXAyjHDLisxtP6z9XhHJHBc59HJY8xGHpwGrfW5xH5NBZbV4tmin7u",
  "key26": "5uZaLEDFkzjaLWATWPSB7PZr4i25hJ49HWKWLZ4QB5zunN7jfoLYps9id2Akm8mjzAKgLWMZNxXcF9ZZ5z17sbcc",
  "key27": "3QkSYLy2Nkmhso4N82y9N9exFweHVe4UxCXJ8bbWwHm5dX6eVmXf1AajfAk59TimfyjSMph2RMuiuE5sumwrC55k",
  "key28": "cDmFLzYufMnYmzXLxfZiqstiB1YqbA7SzbJMZqTbWre7jFu7emYnD7842gy1KaxhT7Zr77avPByPwF9KVvYwghe",
  "key29": "4oviCjx7hRcVDB41pCMEy1w32rGeKoYaLCusCCEKpLYy7XAMyd7cDpeha1Pr43R3iqxTCRKkcq22cgD3z2yYhYcP",
  "key30": "3iB812C7XJMpzcpPKm3A2Qd9bcdmGkW6HWmRjWdtRqssEeuu4T4NqUTYYtGoh8kHQrVosVE8mJdRTttscWBdVDmQ",
  "key31": "yFHYBwnKAsLc6ffDwPJjiRh2KwhAt9i7TNMVz7b2v5g2VJBfGdfUm2ccppfRGxBVz5BxeQcP1FY7AiVbavpMCgi",
  "key32": "4k1E7Y3EStwvtNgpGG7YKtBd2mdbXEGN6PL7Fz4RURbNTECxa9xys2f5L6XnhVHQ5mgBsUTGoBd9UpH5yDYwgqWr",
  "key33": "66nPiCW9WbspLxejxGEKzkv3zmJY6CgWCh5NZmGQPLp2UJzVu99xQMyF8UbhphTryZ5PsNZkWBmpqvx1hzGK3rCb",
  "key34": "3T7uVHJNBK1mT7JvghvxRMRWScKT5B8XVr12ZSUMYA4VDbqZtHA77JTDCZxoVz48xZwB2PXFYSicQM1SdUH2hn3m",
  "key35": "454fgWxYMpyfPbvZLjWz1krhJfmivCukbRUNm4hWFHudCt5ax3WXRD9SfDMZmBM9Hmfr5tdbQSve6WeUPUwxfZMa",
  "key36": "4sE3iV9Sdt6b4M9YLXHmv9YtqVbSCR9xGtK3TabtbuTsU3FQUTkAjwnzgbUA14MHvUy9543UAmJn3o49zCGvyGid",
  "key37": "2S9Gy9g8fj9F8Y3jHY2bGVoGeBCY8JQJu3CJpswhhUmB7stdd78DQsw8RvKdP4qcZR9jezatkbWsJkLR7jcV9PXM",
  "key38": "3yQn7arh1n2WxW2Wk1WJau2H7mRa3RXmZv9zhTwvv37bEgMzBYGrELNiwY7DmoXutRBbab5eTT7zKnJskAzyA58q",
  "key39": "2odHViNYb4nj4fggK6gbrJCi8J729jovKuE7ktHeRgRza2MSmr9PyXbvUMDhDXCW1q4Ywfrej7CnaxdDv824Q2JQ"
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
