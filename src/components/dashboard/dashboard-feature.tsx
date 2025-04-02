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
    "2o41adXEj37dbi6JAo9EjdFsBRKXxWfQH5KzZCv4gRLnzBFVfwRG6Z2VEtipPwdSeKASeLdDLJ4YUfipaLREnJj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNenUXsGJfKX5sRjFXUqRUqzPzXZbQTGcFyHYLo7A2ePzbU5pMmHc72uyhzwaPiqwWJLwMu7LSqiGxL4x7YEEJZ",
  "key1": "44aGUiSCMHzxM8VJKHiBtpanU4t1mRs7TqtdMj1nbKgVLPEmiBmrgwCUjgWk7u9GS1mqCLNvyhxyjkLfXtovUZoH",
  "key2": "4koqcsjcQdEZ2kJA6Lmz4kvvt5S7oRyxh3C7TvPcrNaYedoDhhWAK7Hezeq6ZkywfnfCac4WiB6i1TEqqvSYwQTk",
  "key3": "7hJ1BCgJ29iSoNLAjaDZvJU713o5GkraJJx75sMA7CVVfxCxQC9p9bnBqv6tAu29aPUtNqqaAohELJ8CATUfY95",
  "key4": "5BNye2gYaz3RbJb6cJYnZ6d4bnarRFWyizGBvJaGntxKWdDsZMvPYXuFAgiv4yRSpMHKdhEmm4ehXKvcWGU7W1yo",
  "key5": "5kSZkJy4gGu68g9xgrvhZNuLk4SUHUAGUiL1KAtVEnsp6kpYv9ZhJ5HQys16UBsgs4UbH4v45tAS4JLKRT8KGTwb",
  "key6": "67G3o5dbwifmpehySdnEQSAqo6x9DqAPtGvRuHNVkKietgh47bg4cWto3ikmNREhxErrMmh91P5YQVZBGvzbiCTY",
  "key7": "LMXRQoDkzuEHW9puPa6K3ir2EkpbgJXEPsVNsGbnEz27dswuQKx5EVNLvaGvog1K27dDsURzRfEqTGFPg7kMCQd",
  "key8": "2kJmMvAGDHwe6JmLUPMvYZ5tuizVphGqGSvRyByic1MMEZJ5mqC5Pj3pStb48c99AzpZ37p9ajCw7b53VfTgQZj8",
  "key9": "3bhftDeVUwih85gcKkNP9QM28VqZEZUPyESHDgVm7hKHpYTQ7jJZbuQMb1Aw31Zi7b6beTYxoDr9p3WJjb3zzEvD",
  "key10": "5nqYC5zLe8LvJoYovrEM1nJBCoMErrtLFeBqMGrZQPM1GMZvrUmuMGPtZS7jrg43UmDeJ8d6YLCfFxs4rgzAcTc5",
  "key11": "zGXgC4FJhPJsCdpjnR3u3hfqAV7biwfPp8yrMCXxQArob8r4dC1o19LukMbcM3umsb3mbTBZB1iuhhPxBPdo9L7",
  "key12": "4uRhN6HqdBc53ZyN4srttLPacF9u3Ed33JAWnJPe8VUMqBatErZmd27ZcYF27qn8LmMfcmg2nkdY1iwrihxvYxWD",
  "key13": "25j9gtnhNrep7gTxcQNRdrGAfsnvC2kk2E2Q7a2WZP8Tt6qJ6fNXaEwiteq5PFeR4ExSRDJxRzEnesQ4fvGM3t9L",
  "key14": "613iR3jh3pJQkehiZ1DWqqhDy6WVMkRo8rP2pxSNJvmQrzoRGW1RcWVYagU1Xi4fTTS3zCg3k3hm4w5dvfDvkhNu",
  "key15": "2q1Nw1dvQ3jyBue3o8Y4NCtkejZnDWPagNoXFrpDsed7Mgmne5s8AYfihwyAM31GmwdYqYfjrUxTVbgomtotfWxF",
  "key16": "5ULLmCNFfgtB2k5BFwAe2WyxRiixZ3JrGCauPABuAfYSwQ6K7D8ywaJC21Dixem2oiK7Z8eGxZ6Hc4zntSCs1Wbu",
  "key17": "2JrLt3NL5EiCqWwXmAGRxQtYSDPMBuAw15R9ypSb361gfxznnQu4LLqgTkqrQozXyYgSXRKt5e8iyMkC9rSnZkJB",
  "key18": "8sWHtftYR9yYmo1R5ub6Mvwi5tQyhb8cJmP8cexDBPJhJ41TggjFkzvA3aQMtZZuXQqkAyDrke2ZgNQCh7z6YEn",
  "key19": "4EE7SDEmH7UXmsSxm8LtMuYUNXPLSwNeiGRCUJpZGBxktzMk1vdpb1RbvNBVEXaep2V1YDTjA4NTHhjSZk9RZcqT",
  "key20": "TMyFmFYyb5R8Dg2d48BNrrrGw9yrsnFKvqe5QvPazwbGebD8t3J4kALnYre1SGo2Du6G3UjKJeXxdWDafPfEyvV",
  "key21": "5jMs31S6sHPnz27pTmMEZpjtGqBnFUW7nXaVh66h9cxLBhW95xHHVtWLxLYqtW3vFXtZmVN4gijYEFU5Q4WvrcN",
  "key22": "2AfHA7BBYxdfpq2d9AMF1CB3y9HjxNZ7YURw9r1bvUweBRbY613kU3aPVSVGtfDBoh3aWShRjQXiFEj7NWC2arXN",
  "key23": "4ArupUU8dgWsht7YFt7qcFcJZED3hwzQ9j9DQoAV7fz5kftMAG3PPpprtsDVGeXW2w8NvFzEvZcp5586iuickggM",
  "key24": "35v6dn5aP93PmBeHDjJHcfGaRKsM6THjEw8zCZ8KNVVSu9Snu615XRsqTyTLdXCxGsaqPhT7JCfWJHofxNRgBRFx",
  "key25": "34a4WBGnRYejvQNQQ8bn14q4JNHsANKdFuYfnP1UBYRotogjgtdirgQZJzVbZiv66EqUydSZzzUcRMPtimPg4xkZ",
  "key26": "2zwANAzwedmLv35xe7W2FtAkRj7aibbxGp2f2QAmJYKzAF1qs7oAH5utAArqZM7sfFeMU5DRzEsLMdcjyFv8urb6",
  "key27": "55iT26fZwiNV4aJkKKckB4RcPmdN1WiYsrx598r1PkgHpZPdfNRXWqNog2G1jFReyxphB2uLba1bRYN7yDVyPUfY",
  "key28": "WQ9BsjN8VUaAvNUjM7s8qWx44jNc3QTD9xuU4qCJN4WzyyS7GxQcxpp2BrSWBPr3TwZhnAGJpuU2QFGpKcSNtb6",
  "key29": "5wZfo5GDSYfV2MiLyug97aJrfcKdcNMPiELJveRJP1EswGq22JqAbUEWpByXqJY5iagfzmYfjh9mvcy4koK59xaJ",
  "key30": "3iZHhEeiF6CWZBDaUfrXYhQQV8NTSwoqmLcn9XKPLiw8KXgzGgLsHuGQmJyoyFug526jvF4D5f3kYD8yzdq3Rhxp",
  "key31": "5Sb6sz8Sk5o2Cu5hK5E5JvPgYh8KhUogiy3D7sBw1ncUZjndwB6H8YSs9Ciiq87k76f7NN6nyePpKU6saExtrKLc",
  "key32": "3nRFC8fmB1S428cBUKbfjxwy8u8am6HmDoebyQLirCJCKW9sDx7tBRGS29sm1qhswTm4MfoTq4AVjxLra7frMcwX",
  "key33": "dFjSGN91zEe68dNbLiAx1aDJPJSU37y2aq4N1ZDmYm2kpygLgXvYLw8raH1rESxoGXyXzdCdpkJpic9V6BjJfsX",
  "key34": "2UQJRNWZbd5kHPMSiTPuFbL9tbREXqfdWd8SYNKwUSTi7pSNF6nc7A1pd9ufW7urHFsyXuMmKdLeUrdY8WTUp9ZG",
  "key35": "2gPPvCYaay7jwkAeSqBHM3DcY9kXZ5y6z6P7qZqVp9zfCrMzpgo5RZUq6TT4VCmJkJg67mFd4VpErV89zRXy4ipz",
  "key36": "9V5LpPqArPFYEHj3WegNnkra3V3kg9iVug2fMd45VcLyHc2vDzp5b3Sw64HEV8khXAiCCDt8i79ysJuMZ3bKNtX",
  "key37": "5U2pEFA9LNTtiTkZV9VYFA4fp7ApB9ieCrgjEzBbH4a6jeCQp468MWuLonL6hR4vHZWB1q3Rzv7Mfi9tHqYpsrWB",
  "key38": "3N4JKojbN8Z4Do5X3ZBDV9zXxmtYwMFpNmHVArDMsVsw2pKmNAhfBTszuBTJsESs4NT3azDZPkgcvrE1kuY4qqTh",
  "key39": "F826N4u6rCzj1hQ3VskYikdSk9HkF528WwaxmsDEztZ7nAXcT5SKT5NdWDvQFwiuEE8Bdv7rAGMvv13GHaGnSK9",
  "key40": "3qaKhddSqyG1FJnDA1TcqNCb9MQ3vQto46BqMw3fMXJHX29NStKFjBMkK9T9s2Ki18Y9KLP2ALWM7eLCBL2RuQCq",
  "key41": "3qP9harL8K1TwmCMGGovPKgWuPETzSMd29buzrAPLHe6DhaBWhw1V9gbHMxvuHaR9Hrag3cDPyjTWyRgfgf46WVK",
  "key42": "5PGtc8vKNSsFRwnah4VJrsKytpnrTttw4jsM14KZJ4JdiswichnSZjqCCkJwfDJUoqmiPUG7jn5MNhj1QvvTsw4u",
  "key43": "4sPEP8Buhs8VAgV34eCkMk1GXZbZPh8PbChNEn9ZT4Vku2x11BNgDuTUSYhFmpqXP56s6rnf6QdMqEMRDSSwCrUU",
  "key44": "tecJtWPu8As7dHvcJkjLJ1esg4qSAw2t5QHBqwWVu9BqN6cbDmkztVqw9pFycXxvyrLuxjufRMhWi71hV27h4w8",
  "key45": "4SPDrfAsDecYnrqRq5ijMy3AEqpFer5Nj9KRJX4hD4NgKZBzK489eX16S54How736F9EL6gHxnPbf6pEdvHxJEpX",
  "key46": "EYRMw2bLB7PSKY2dS4ufRFcnWGw82mQ6CRAJmtbXYj9hYiSpSfynwPH4NqEyw7QFgnuwmYAvmBgzGw9sDt61fJG",
  "key47": "3MYbnqVw7qjRPQcwNaotbUmSM4FK7aZ9VywBcDnSeptyu75kNFUrosHKbaF6GjjkRVohSV9BFs9qMdVfBMeSvUAQ",
  "key48": "61PsmHnjK728erMeEFb3FXUMHNj26kgS2szV6mC7QKK6LQHMzZAC4wm3LTk9JEB2LX91gKm8T5mqFhis8WCsMzPh",
  "key49": "2uivkfyRb17cr8pB8j1QjZGV5yNkThUJjGoPshS1DcaFPKnsHK34F6vtmCNckcMSRRMvVNJjcpu2soCsJ1huF4w5"
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
