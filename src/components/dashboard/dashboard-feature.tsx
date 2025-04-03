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
    "fPiUV6DFvWZQpBUJEsFNsceHDCWFDg8m7VdnuU56Hadsunyfi9ybpcCjrQkTszgiDW5cL2BmrVaBS1z47d1Sbxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzS6E4iTuuqf1VBxXTEru6SuTBrPszzVL5iLd4TVEq3NNCcB1eP7557XaVreDEr4rjMTbDf5EQVo6rB7fqsL48J",
  "key1": "3JMGxVY8nVQciAEsJCEJVaXMQra92AkBZ4E9VmbU4FrzkNNvkFe39A8N7u6bB74Kxa2G4eLQtBCJhugm3z3SNkEs",
  "key2": "3PfA8udhfn9HkUDU9XqbbdqPKduPHxW4AdxiXM22wDmwg1tb1BNesE8A2cyGgVAgT7fH3HV8cXXsbymYr7Me8pDQ",
  "key3": "5HSqnungEFRCnEyQs8xitJ68MVAzfkZcMLjg7dmtVt7UyFYKVF2G1exZaWcuhfZuFmYMn2iqVorAAx9bLLVyLcTu",
  "key4": "2LV9JzPvi3AYwa2BmHhupBADV2k1559awhrBcr4Gv6biMTiJNospvQcZ5bhXgFC5upxgevQtoVkinJxUd5kNmsBa",
  "key5": "5BGtHRpdCbQ6rGjbC6xU64JaKG3ZGyBbCpm6pMmzbtoPTjQWwhhALKdKanJxk5DaeGw8khYs2E5iVapfTvscHMDZ",
  "key6": "2GZ4ea1g7bTdozuY8k1gtZXVNHVk7ZLnbpc5bF3SjPtjYcZFVYmwBbDD5bsr1mWPL8QtDf7JpYtBwGRWG1cECdnu",
  "key7": "56n3y8JRhPNJP5yX3yJHWCjixr7MsYQWWixPsra5HSawxipMbAn23HifHBRUPFhDfVEv8s6fj9E69wE1iS2h4DNU",
  "key8": "2qRk7TYDsLvQ1nmEgswwN59akdk32vTKUb4PYF6WxLYUFu9Q6rq71VPLdPMKPgXDTVe9U5Y4VSB3krZGUQfcg7pm",
  "key9": "benN8e7WJoJQX9QDGHvd7iXkSHQkPyEniW5hpmrGyxjK4sUue21Ld5PdCyznfRispJCBWRp317mivMUnaZpnPDA",
  "key10": "62spcU8j1uY74EmcdcMHD76c2p9xn57hSNGy7x2D8DJkxVTk41mhGNmNN5paXDKTybRMKMmx2MsD3w9Be2xRrKYw",
  "key11": "2qdZq34i4WeGGAA1pMzHvMfyf4Xnrwpa7DD817Hpt8bLhLoB9JTGmR6k8Q9XPV4wWL8Hox3GuhiE6CatMihJPDfW",
  "key12": "5466KPx1HTUaNm2JKYU7rjRZrQJX84GzK6tGg2hAtDRkqRGM4ekpkZNKeBkiqTGShNHRGCTy6nE91VjhUQsb3YrP",
  "key13": "3FC3Gcno7AQZNPKobQmKxReySNogpL9sRVtGSKpf8pj3DTEhf8qxrE2GTeKmbpjuuNxxXC8JDyuRiMUHUn2FLGmq",
  "key14": "66yMzJ8BxcuYgfCmUixxsFVNdYtvcfT14HJs9a1kkUoBYpCWwA7f4CoVg2nuGojeRGRJn4FSnxW77oscA2FVuDnY",
  "key15": "3v8gsbdHTFKGvoXjB5Cua9dLB8ZLA3YP8kbfFziTiW1UBgTJM15fitcQgWQD2Hp8p3ddCTfvcWbAzGCXsgS2bFeh",
  "key16": "3Jj7EfCgj7GrDh86GU8K2iKvQocM2eJ7APayFGsoEpsMPi3TYhnRTZtxiDTDMf7H1K4bbYCQXoNy6Asr2Hn3pwfy",
  "key17": "5JkWmxqA7DEHEwKvmEvGThNGQMjiQrkssnibbXqnxRo42gKU89ZKFJmjKeVvpse3zv3yXwensRvgUH99FAorAsrZ",
  "key18": "62XY16zh6iczsJBmCo3w4xdx8nhyBLR95qsRENn9ZA2ky6guF1iFBSxb9jeKgCmmyaXY4nYRnJqPDdBwu6HH3rmK",
  "key19": "5ifwkDWFQQvCTiJfUkxth9YJLz3FWyrtgQD2N15JqXUFhKJwaVVV4yzBc65d4sXEPVP14ArJQixVkHJAp5QyVAFZ",
  "key20": "jdmLexNqL6iDH8njqhk5mveH8w3LWgi4otMdvJ5GkM5t2UUSvNgXFDmftahpXu8rA3CvUiSMrKHLuyPgHVvdrmt",
  "key21": "4hotVdEaRSqvvyreKJXkhUyxDHPyp9nHn8VU3iFsQcv1dSCZX4jLz5Hb84ZnvYmb27faN91NxdGx2WrQhfchxtGW",
  "key22": "3eQZMTd1WcVapzUptk4CT3ntkJwFUpt3RBb8scpw3u8dfP3GEgwxZKv66aVPRVLWeeGLicrHHX8qLqVRmEYiErpS",
  "key23": "3F5q985farCDGfz7BTedYWHNQV57AJs7w7UHQwen133wavkzw9iZbfAogHQHkhd5Bo9mkZ7sUjpvA8aWgX4APQc6",
  "key24": "4eNSgmnBaE9b55d18hjbGBYEzt412i4gj2FwmyirpiKgonknC65jBzVhGeb8iM3BNcKWRuJ8Pd1K85mQVDZPQdgE",
  "key25": "2KQRbyYiJrRkc3JuP74pQBbRaMuZGKhg5U95wYTFQqRCiTmJSwEWQ9Dx9ixDMJs3NpdVbnF6Z2RAK1voC4dYfxKj",
  "key26": "GEQdjQN1XwNfmPG2UrwHFGBHbawD2ty5hX8pPp9WM3XiC77jKHUuDRwVawNCPogX39eFCTU1VbqdH2VmdV8RiB8",
  "key27": "2nWmYiCDy8Z5DZ1uMtyP18qufkxzwqVFU7bX8t4cwjDBLJ5umyncEqVsFdYAkqdqnDELPKPxsYyT55bN8P7FDuy8",
  "key28": "61QCDzVm42LR24fknodPq6gUGr1e4mm7hrqGvi9QzsAsqbofsWFwbgWE7i3UXHAavX3hL94S7Uk349TK1nqS5yMx",
  "key29": "4UrdmFSw9ZG65E8hiyqBqvyGGyR918pAYd1Ur4q7Wik81zn3NfR5UoPZUTjAjTeAir1GjwUqpUkidp3UF4Zv2ScY",
  "key30": "3gE8gG4zFwMMKZvyUkYYcuiWoiiGLEiyukKsgEaGMD67RgYpkHHYJ4u6ttBSc8JySnwU7VX4zjxLakzWG7uHpzTX",
  "key31": "5YEfzf37BKB58Wt4t4r8zMDqEGFPy8wXsbYgdcr5qSgMQeXYH86nu3MwA1iQ59JMYywqbH67APGQwGdN8Ps7YqjZ",
  "key32": "2Tcyk99g1ieDtV6PNbWK9ti2cXRKcqnYhreJTfaMTyL5zWHzBVaUaqKQYXGeSQibSrmDu7UGYJe9U9Y4N8j7w82m",
  "key33": "2VXbT8EQjsCzVaKoLRozaCBC3aBBLvaUxjt6Lnq4GMAsaNesmgWDL6v9yScjwfY2NmRgjaK4ZRvW5xzKn3aKWHVV",
  "key34": "3TdiGiksjDekVemr9Q1U9D6bgfoYKK9SMBkvvLq25YwMNGoAtA63ymZHvqitfwEjTEcvbjmFWL35JkrvTE1jreHX",
  "key35": "9qHk6SBY4MjL93kVJc6KTyi5Nuc7vgjg2F62VueK6NFLtNrWpbVat63BcyNCPqqWaoxoCycQbz6i691X5isrq6r",
  "key36": "4vjUt95JFPR4uh8gfCab7fp6xBsDuG4Mo2HEtktQ2XYxiNCCjwC6ba2LSUuUN2LbN4GidekWCzmXZacshC4gAsND",
  "key37": "2FbnWeTcWR6iuJnBZs2feDeKFxTjihWXsCdYq2ZJemoupR4H98rQBbCBN7wxS1ihEBq3qaUsFou49GvvsmZtiAHy",
  "key38": "3EQ8GaWv4saUqJBwqgnUkeTW7qQT6X6DabkH5e7WHYo8MGATYmqYMw26ym4n54fqPqbTyF31dfmKnnR6Uv8gnw4n",
  "key39": "4yx5pSxKstmregWWH3GzaDDW9wn3oA45FE6rEtBLyHSNP3Bj8J1UXkLupco6fExcm8wbyUQc5gbxniJB3gykj4e"
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
