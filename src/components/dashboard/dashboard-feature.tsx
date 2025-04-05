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
    "4a7HT1hPsLjUfQBS8U3THNjcPQnteAKqGi33cuz1eahY3fgGcRzJNaXMwxBFKpkwJU29q5ArtC7EjmQsmiNemG3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vLZJAUtRVivBuXdpPyPYYqzNFHxGmAxGXPi7s5QneSRABPEMxY47F5nMtq3j1898u2jpE3DQRxD86XAgahhYXz1",
  "key1": "Tg3DpfHXecKoYA1nfsMok5EeP1tSvjWdicWnx8fMG2jnW8AZNgTo6fgXzpywaXBmMcVUMugrpzyVuy8NAbA4FR1",
  "key2": "4JtxDL9ZYEwNTM1ZwYmM7hEN4PtuH9BHqxsRFz6X8RAUDw5jM4TMjyDB2pgybZXdVzNaSQ4on9uBenk3Rs5edLof",
  "key3": "5x72ZH1W7JrsyyB5GjCZazbw8CaqZncsT38FfYGsyRfnZiTz5JwX5fq3X9evAMtJAHK4Ub7EDsmm2ax2ETJfLVP8",
  "key4": "CLLeJ6mLmoHTbJFWs3mKzusE5cbfPM47ZnoNRmPEF83uDZ4pqvi862Vi33zY8LxJFGG23bDq4AQuQfXW9b51wuG",
  "key5": "1Zyk6eftGgVaZPyuTRz8FXjvZDUBnGpThhEBd4yFFfMsMLLAckNbv8wgjnCcDeLkMfE5acTQntFqbMQF333mwv3",
  "key6": "5uquxQx9Cm6mazPsgDXiY78WN2g1zsQgyUmH6rPPc57j6oSCnZaENLMLpxhAgRnnD21nNAKXzRuk6kr6NHDpct1r",
  "key7": "4dUvaJPTzZuLVwLHycqhMoeYKnPyPLXWfVSkfhvVKpkDXAm5WkSbUicAs2CntVB8DNhyqaapxFCXk4ihuhf9aGUW",
  "key8": "4B9jRsxHrNd3vbDP4z6ZqrLuiqyNLZiNe1CtisnwNXM7N8PiTm843vyHnWpJmcZoa1VcUEKUYSg6XMWg6fYtrJ79",
  "key9": "2rCRxpYmZ9R2q1YMzou8Q2LK3eiXzdYXrE21SDxZUx9Jzkh1wonUbX2KJKmduZuqmqhebuoT9Pmey4sv54K718km",
  "key10": "4Q3G5rmzMNZZ4XedF3Ux63bEE4qQN76tqe6iMeDY1VQcDWboRjAoZCGK837VDGDSmyXZwTQSnzY2NTM3uaCBp5ED",
  "key11": "5C2JRuPaXHzcVXWPfvaXvVsSYib3HxqmV9tBoThbJD4syAV4kWGdGsXyXJ1dL1w4VbgL7zj3Ktz1yS1AQqvjC1Cw",
  "key12": "Nsbd3X2kBQtw3TiZQF41LjAZCmSynAHoK4KBP7hP3vHopvLkfj9Ln9CZiYuGm1SHw1sYrLUv7zktLUXbqjwQ1tU",
  "key13": "5YBvsfDJP1dCRtSjfEndQo6mjj8wmdpAdwnKwQXoYGTM3JRq8AD6Dn1DncsFyfUku5Nnn7kDaPEEntKDfSyzmBzJ",
  "key14": "5TC4sYa9VPRgyCZWfKhJxi91dKNtWQ8RG7XAr8NG7dDCTkBc58AQpQMJXfToAoCx2a6DAeQ7FriUgk8DtzXSBxnW",
  "key15": "5LF2DxdNGqDb8krPsScpi7KAu3JWdxZSSFbdq8KSijbYqraaJruqrjt9YfesqtzgpBdug7HSCUbwDnKTypehWJ3f",
  "key16": "TYTqY4NwWU3tpBcjWCSaJnSNKaaVAZ376nbkEvUeFnHmHKS3qWvh7zbPksP8sgWdnXjVZwwU6doX5HG668yz9HJ",
  "key17": "eefK4Mkq1wh8u2v1n269fJM5VK2CcWkXtgrgjyd4jNBrCDxWge1VGymdoDpW8He2jNtZSD1LpKRfqVLXBXGpama",
  "key18": "3AMrgRu5yDrqfddPkqfVaJc3Q89YwLrkMKEixGwqUz4LN9X5xc3BezHmVtMzHcbGJgkAVHg4XtxQNtLVf7vGKFuB",
  "key19": "3NHoKQAsKxyG8QTKxD6xV7ThgeUAPtLSU9jhZJP9o8eSCwtYrHPdFS5dKy9vG6nguQD9eqyhDeuPN5SLXrZmhpc7",
  "key20": "5kEFa4mVBdtZM9aYjFcXB2hj5DQYdBH71fLQPUL3Z7jvThgDeUGqYfDApDujMucbsCrNvWet8UeWChUietCnLbJF",
  "key21": "tLNZ3nvF83dW6pHSxBTduQ3Dj5uaEAU4vrzmRFffLZNmYEDiS4UEmbfmMNXMdDzpx53v37hxFAqyxPpKTC8cJiY",
  "key22": "1zAhBvDi6xcZM1ooh3Zbfioqjb89e1UH4bSXxKoby7vEngnhyjMFM7NTkFmJiuwpxQE8gFQo4fq6Bf7q1C4dPp2",
  "key23": "3CYpTUpJwE3jEijr7qoiHq2w3dWFLNqjd8ctiEqvkJjoLDeEw8c5m7QbDBDkVWbe69pYSwQJJZWQZvt7NaNwb9JC",
  "key24": "2MtyqY4fU56XwMftGb3VssDq1nmQdVVo3U4XBdTPiiG9PitntAHnPbZamaZbL8gN4Byixrxke1s6spaLhvLtPoqb",
  "key25": "6JrpSCrZwQWMC3J2LoiHHvmKCToJunQ5ahYHoJpr4Ucw1ufLLUJntN3ey7oQoMmXMciv8B7efAMGJHzxreweCsy",
  "key26": "XqVCdmNznBm5zX5kT8xsxMV3ppRMFKDxkLgoXYJqjTpL9eQ9xfGCQw3makTmLTX8RHyH3VEe3pUEJDriGAGvR1s",
  "key27": "5YFwozZFs8hdDxzb3Gc4Mok6Bojv6gMf3k3f8isVmsBRQnLazXARpegFUv8TTHSkjArvKvKPiFf17E5FxNXfpyZu",
  "key28": "2Wbav5nZKsgLNrU9yQVw11wtrMKVq7Qt711FkftWgBZZUPz6i5dQXta2Gb1wVffXDAqbD2p1C5wCmhpdEAmoMVvN",
  "key29": "3ruZy1zfosRfnPF6UwEc1CF6kCRdRreVmHfrAnbb19VDHfK9XH4xfufMMoZQLLf736twmirEbRL7zbA6WkvJQB88",
  "key30": "4kpz7SGXH1SoAZV4teagavwesMRuQUHHPGwRBFRW2jrqunvq27phtzyyaoW6QKssnZRuWzKK3C3R4fhUa8ZHfPQe",
  "key31": "3zJXcz47f8a9iyvZZabr6BaCEKJeGKsmzsPbuK3E9dCdXBmXKddHahmFZZmm5rHSoLe4wFVvaVKWqyJd91nXuBDe",
  "key32": "4H4oQFEW47MJbSfydVnudf9m27ahcQMd6EfVX3vVkTZW3qCXUfB6t2R6YtWSu7ZUKwsSa4FubtYhYq1emKZqaSUX",
  "key33": "45v4s8PzCWR6vPbmbNTpD7kYRwQKXFq7aUcVhVCsoLksUS1EZ8NjwHT6baZAq4r4GFdhi1R4VRFjenMumYShmxa3",
  "key34": "cq4mRcGnsuxNby64fZDNYScVArmJ68w744cfbRyxk5Zyw4orgeUAJtGv25gaQyHy7GMuxFRzK7renykdCec8knD",
  "key35": "2fQWFuHWpcNbaKT7YqMFw1TGM1NvwqCEFE3jP4SdzMLVW5L1DzUccSg2FcdEy8mYg8M8qEjme13g7fp5sq7wdth5",
  "key36": "63bsFesXEFPjX4LYpFpDFXcdtM42ZrNWsG9LDbd7mUWubAYkrxSpuUWQcbB4GHpWcHHDy9te1W3WGG5QxzVvmKZT",
  "key37": "4EasEE2Eahq8GcWVHXBS7oWSjeAMffJAHYpWuWoMSLUMPcLpyVJQq4bXqFMthP8ApKYMjPHEMBCFevT2jRBoisSf",
  "key38": "3NzB8kLHQqC2sMNDB2CtkX6UeNVJuTiSLyVuTo7AFSjffK5BJxoDMK73AnrxDAAqYHrZLjeWMDotrie23FD1ate3",
  "key39": "3XDwkngwXNS44NJEqsD1eFyonUXEeeXNgG4yqs96aqVhbUBPAoZT9Z6s4CjnqJJFZkGYm3jYNq9hmEaGF9LVMwc3",
  "key40": "2oWj7mRiuT13KUfAW7QMrEoTc6cMWcoUfirugbhRovbCi2Qdso9bJ8sWJsjig6pvAsjtxhUKYEpVnHRWVahwuWya",
  "key41": "33SaxHUtUvPQz6VuBeextRHGAVWW1n1vHPhax4YU5BUDPQSKbKjqhbDRGKUYvRTnfTNEdXVYhiuoERts3t1b37V4",
  "key42": "33fTRY98wzfVRpKez972B3kRTUuwvMuiSsY95Pnp7Z3pPiCgzigSZRUy9DF2Ly2U7XSxnwxc9w7NpGC1vFJY5ScS",
  "key43": "NmbLNvDiHTfK3Bkoo5CMN9pdvPzEWJg833jwYiWGrQq7T7ocmj8dVM1HPR9ynvogT65TUqw5ZjZwVtRqy3g6aaF",
  "key44": "4d7ca1WGomJUdaqWCY4z43gPjoWAXXwiepSG2A6DkyNDVsaTjvh8d4A2uuzsF321juyBmkAbG7ZDK3Yvhf9JfDpS",
  "key45": "4pGRR2s4YDm2fr8Y9x824FcDNDxoJFq8aMhsoxXwVojQ1JdurnAPCBAr9d92fkAAcTaCNLchfv6f5w4Wr6tAshAz",
  "key46": "2Qaf3hgVMekwe9iN1yJCoFLux3weNGmS2ab174buEeRAiwk3H9bLhHo8m4ULzgvNCuWEkJ8xyZqEvwzgXoQsM52V",
  "key47": "2U8MAsztYJUmQs3VbqMfMcLUz7Rj8VVvEp9ohpryTagW4Xu753Ge366NBF7wJ8wDRuJB6rKqJ3R3W4mJFpdJauLy"
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
