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
    "4WfdKCdH5dtyTsPob2tL3zbu6Sa9LTq5wMcPHH8MDxw3vmpC4EcPHBrtK1oa8J6zhY1Qw14JjPQPq3TD7vzBtCSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qw3t3wDpgimkTDUtcKNb4iVMUeq1LkvfAaNast4uNwNimhEojVQqYEQARPEZbQvhjYW9uRX54bW8ysbDawzbJB",
  "key1": "4xuziwiiGTYxvQiqBBfWbWXxYzbH9u4CLzHmADXG5MbRbm67kBgtzb2dmZPFUTcXXqeTph7kvRsDgx2aT1i2THD5",
  "key2": "2BB6CjxsGYhEHzP31amsh93mJBRpN6K6BAQVkw5uKvXZuKjSkuuiJRJrGuH4c8bddmKpzZnBuHGLmsQX3zGR5P4X",
  "key3": "2nb7MFSuf9ETzq6mQYjieKcLReiY6tbFrqcjCCBPREToReTqS7Fm6i3taH52PeCVRxwsuQ2TYXCtEtBYmjVE2Djj",
  "key4": "TfVtq1Zp7oe2HTtNmiYCU7RFecipzKVmF7qRKXqbJGvmVCkz8oKQoUeRz9dThTLwj75KP1jnupzJknLo3cF8M1s",
  "key5": "56VGjgyChwGYzLsaoPTZis7NqvggUrJmB4mP2FQVJ781xn73L7trx96i1dii6CyfKEUFPvCe5KMATJvMLk7NRsX3",
  "key6": "47Z98KZUchwr11TtXeypmMfEjCURXay8BcctrBQ6GXfz42cLBx8XNdkpS6pYzvZAGoJHqEe3yL9Vn4qjNSjuzgVP",
  "key7": "5UXhZ7eVL3Z5tVSmaUwxz6h9XHAa1W1qRwF86cuPQ5tYWzaZmfUtvR3H9rf4dYYgwPkNsYL8AuRZsWc5K7LzHNjU",
  "key8": "z521gGqrGwpP5s1PacgLmrbkBa2rAeBA3Du1ivYJ5qwKpm7a3vZNHbB9gdmoZe6vVQj3Fxem4Jw5SQt3sZe1PiM",
  "key9": "2NNMimhZtFJuYzKofgFRf4RRbQsLh7brSXscFmrLskeDTBv5G6zHvSq1bSia3bCK2CgGVqVJqCiLJjpVDohTSFCQ",
  "key10": "5noieATVwH37wos3gPwXj5bVWr4eEvDZLRoRQrMMh1BHgwMadSTA8MkVfwUVforzPd7V354TS7wdy2V5grbfTKJn",
  "key11": "b3xainkcrPR42bCamUKPxQrxBCV4Fs6An4ac1tfdciNBpTEBTdAMjc6KMRnmc2Tc5hen8B28pPx68hERc5BUuKZ",
  "key12": "pJDtwSLxBaZLxW2PMY2Y1mpSmGg3C5Etm42s8GHaogd5b3jVuAX8aQQhTK9gkp2GDCJjrvnCVusFnkPWK6CBaJE",
  "key13": "2mpcu23meMundcWAbdScemori34dfa8Rr7fhx1WPrBaaJmhSasgRfg5K5eAcLn5CLnRD6fEVVfLoeVmozj2F9Mzj",
  "key14": "3YumjyqYbi1cfs7p8UJKTPvVpBf1TsLnRU8FJMNEMATPFq8HFYveEimZb8w9GmGSHMpqkzgxen1hPfaYCsWvTi1U",
  "key15": "7ZoMZ1JjCxzmcAYLZDZeBary5DNTykPt6jHycozRbvpvcDCnaFiH2BoYTGxu9a1PiCrfBJd4dWELZgXP4c1Uhzq",
  "key16": "2fsuVWQvw4fjpLtR6THXp8VMUa3nzGJXQq3KQr649smJxfnU4TCZhM22eq25Vv9fRrTzgK11emnwLPyBkcQVQarx",
  "key17": "5C3higjfqHSzE6k77RTVaCHkNEnZcZX3nkeChyy8hemoryTAXYsqswo6Y3LbrbZQXuKtyJKnmdASmyabbXFDZ6Ko",
  "key18": "2WU8ZtNdeQtm2VNFVwV6dRb5ChfzpiwRCeZkJRBJNVmK4QPHmXhq12Y9c5hn7pP3i5DR62A7aHkJPpZzJuATDz9p",
  "key19": "2tqD4VwtC4bwAx3UDqRoVPAx9wzCB6BF5P5fx89xv32nQVFkpzFbGjRLpQZG4T8vwh2GkinC2R5LcBGex1ripo1B",
  "key20": "5eKr5yZgdsitFXsQACQ9BwZKznQ1wxkZZGi9WZss3afUDNtghVZb6FDiyT1gbWCf9cKYraNaWVoTUb7j5QU2Sdkd",
  "key21": "3KVXMEBe2Rd9iSji64eQee3QJcan9JHo6jFHs5wtdsL3hdqjyNFZgj46nhDKiSPF8Gk35vbzVwrbBYKjpTpyCroh",
  "key22": "2X9mfKWvAytEbAK3aQKZ4YeuiwtGbEBcWWCHCYzPkWEX4Psx96EU93pAXUmCSygTwdSW7M96ZbbyzgNYLnCc8JfN",
  "key23": "3fyEUnWJGZ75a1s3fipUpQhgtG95GDVNb7ZtiT4y7Ku5jRULHxyPKZYKTpEZncfxdWWV9tK5hxk9e9AweMLQh2MT",
  "key24": "4nkuKbPrs4k4CwxCVeVrxUg6n4kkU44frCH2hbNMYWCiCF4HdXNMmFDn3yeTjX2yPRADv2oQsbbkhDSLe16nTx4G",
  "key25": "5U1B1qh6GyGXHAmMsYBZWBHbNowmncyUNkfNXKe7vtCNxST7FoLz5KfYNuoFCgYL3KaoQnV73yoC3SuZCYNxrFTD",
  "key26": "2TUzmaMvJsttHVvnpcJeK6FWfXNcGZqCD4iBwvFh8zM8UthFmy1kGt2uNqtHDLCgbiGjUq3TKW8fAZq9Vd8PkqWj",
  "key27": "4xSmXCDqLCTx2hBxuR8K8ccGwqQVPFqAXYfa3JQjJmYRzJny7cVAFWTQu5bjLtNyyvXDya6unFHFASS77uJQd3cL",
  "key28": "5b3pHNwbwqYLXcyz9JEUr19sH5ZFroTYfEoQFtx52ZU9BL63vqVnU4thvpUovmQJmSAcbVj13cKYKiqNTTabVSxk",
  "key29": "34HeDBWx5R4nQqeSQDu1DDAndeWEHfyGdYqZ8HFxqtzEbhYERwHmkBoLmgKnLV7WzfEsBaP6ttzaGie9rUNWZZEF",
  "key30": "Dt3UTEkeM9GHPkzaHBajYkgdAevb1sY2uAshWbhaRN4nQ7JWS9uUd4kGU1auyq2PWVsJojSAAPfuYFCpGt1wzmq",
  "key31": "54aqaSugufuRmbfseCFUoq3qWuEASdpLLFoTtdqk7prcrhmZV76W4EYHzgrrVnyfNdDwQSEWdbkYuqrYgy9hDprg",
  "key32": "4jZkNC9uhvoKrbozYoWioV8LMY5K8sBg3Qdb7hyz17RvFgCqbrqpf3ceAP9h7X8PQndTwAngGFT1HgbSDedLCSLX",
  "key33": "4AhaJtfETRTTLqDpk42AtFCf9Xnet5gnYe3p6rDJ6faZzLnHBKEtLY4hnPpANeU6GZddG1kEVzW6Wg9vgSvnZxGC",
  "key34": "39judMDgxg7ng3px35JPgPJ1ez67JkieXxCWfjpXBHFhHL1p55N7Diiz2kGM7jTrpdHnhvk4RmTgBqZ53WVUwKED",
  "key35": "3gcDNHUPx5ir4YFps5crqYjG8hztEQeJRp5CbaxjXHC8ZB6iPif9Gkvdhob6GomZB2YHbkxgR5utELBLj4r5f94L",
  "key36": "66ZaHwiwpmzCYLjcRvVZ4Trbe7hWVpguuTidcdvMDZGeoBFNanUeL1xSTD8BxGesq54jaF1Qs4JzxKYGrZf4yxA3",
  "key37": "QFDJ61MS1717A11Ljok6SeuSin9w347DQR8ffPavYHPnh31Xpgpab2BqtVxp9DeLMWXzvgBDePuS3jnrUirYSoe",
  "key38": "23LnKpBa27yYDo68FiQtV3jkqQBZwwD3iCvDSenxUxfeMJdcBDf5cHwGGZTN7qRSf63LujQKqqhQA24hdFApSFAU",
  "key39": "3uS5NmrUsLdvz89t4qc5XoybGn8ttHkDVNsxRSUVqmfALhFfcBuNpzukbGBynsxdmfAsFGGhyuxJFnpzdMuFQm3y",
  "key40": "t6pYoDCwjShhoNbgXSgfaT9j8aHHayyNoCd32HPVpai8cKMijVG8xUcQNMavVGYPhnLVtGF2qHgYXFy3Da6a9j4",
  "key41": "3joy5PMadgwo1C4WwN62aGKkkeoScdkefBuLNcG7gmvCzwsmwAFPgsUyVVQ6J2DMEUt2RhD13pVGmhniZ2qqVdgU",
  "key42": "61SnfzWgEtPSy4cQavd2fNDTSXW4WhYfqprELgGYKWDyXMhPYa4nnhRqspAkuF4Zhn7LhXH2MSD8AUfb4UvKDNz",
  "key43": "6njK7CAnRSJUmbfxuAqGfMEuRgco6a3wB1VNGB3RNE3KfyfnWimZZE3G6JNJUprMMsLPzsrKtWnwfFSUxrVz4oD",
  "key44": "2Rn2mf9ZrUEa8zD3ByWSX97f2ryFPLkUzEfVQxKom2Sa7zMBj7jnESuKLoCSxunQQEAPKQ9U7NPScULPxPUJu6id",
  "key45": "tfxLGaqpaJKZrGC6aSq86vxdwwk4tzKuaGiUY2cUXjjdQYJRSgqC8RKrCqigv1DMM1qpiq3mSc2qvP6WyfobCxj",
  "key46": "4pctCvUn9rLGSsk1WAfSe21G65TgUHL9Eye3Hy4MHchKXDqFmV5XsW68JsBYNw8ru1vhVicYYAMSUZfwy46w72w5"
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
