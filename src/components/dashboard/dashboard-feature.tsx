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
    "338hGpWrNRHGafki1fSfw9N58cm1S9TtMMJoUbgxnU7CmxzuJRgYZGnRUMpUkRMxfDCsv6idHrcU2TJmc4JhG6sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6pSYfen9u9ArqX17mLKN5KtB8Fvxxd1QJtcdNHJuSWKojHs1quMJyWGCXK3hreFXtkAUh7FJkFd5cz9u6XfUha",
  "key1": "RzoTQzgtZGzYt2MUsaAjE9GyPRZeC4QZszBqoQLbfEgpGsoJvGaA2oyhFzz9z3LnVfeHrn8afydjMVXAXoVE1q2",
  "key2": "5Q3spa2T5Tm1iuGz8tN3fNWTZTyqKRQrA41JhH3UiFi5aNsXVztjwSYdLmfU8h6bLxMDh7S64aGFisVqDfXBz518",
  "key3": "E68DGQTuAMGhL6bMCfi2FPHJTWWit4RqAt3ahkTvZteRNHzS3LeFF58fj35bGvBoQSXSjrPTDnUqvSuP5kch9sV",
  "key4": "38Z4yLGtKB8hD5EvsAqY11SMNAvoBpWaDd2zwdZMyn74W5rai8RczEMn88cLdyyqnvGtL5pquFS6HBLsN6aj6cGx",
  "key5": "55hYbGWMQx6u5kjppt99aDyVyfTNgoCuGPLKdav37zBDETUvjBZTcBjGBdSknWyhserwtjybj4C6br3Ejtpgog8e",
  "key6": "2CiMF2WzsV2Fqg6iLkfgDVtZVgqC7z35T56jFfetQgfA1ddQJ2fsYTRX9tC5AjAp8E2MmFjnwM1UfVSgbBQ7Cj59",
  "key7": "4PreYx14sN6NgmjAoAxdcjL83bQUAo2rQzv6GsQu2W4HtfcNpaKf9zGd2GKUHKQsxwAqN4ATEVvDxVET15uotyoh",
  "key8": "4rKzC29i6Q8npjgLQzsotusteeySiiodKikGU2UjH3tmQNbUSoNPgzx8dAnmrDChWhJPo6RVtvdiSLbhA83WnSCr",
  "key9": "4n6gkc7WM6Y3gdyLB5JfV5Pc7yx42Aq2NaciD2VkJDGfRrn2xYRBRU6HS5Yor2cKhC2AQxxBtjpy55fz5mVwn5mA",
  "key10": "2wZWEfYAbo2SexxDhZUzv89akMus9xSuFyasCfSxE8xhwGzh3rS4i4HxLKUFgpGDB8H9ueYVLVjauA4oSmG7uh9g",
  "key11": "2pzcnEJqcKsuuJKrNffnV3JwTTmpfg7MyzDBkjrQ7n79MBEgycaxaViJiGio5Ro3QUWnfqjQBSVqmUnmpfePNWnx",
  "key12": "4UojRkHr94FtictJuh89UqeJuiBE4U9SBVW3tSW1FAFqF6ZVxngQUXXG8hjAFMw4ff8srREaqWnnTVxV8EEDmTAr",
  "key13": "4H6R4cBAvhV8sT7axE6PswhnBUCZ9UvvUcu2QDibob2Zbjm7wGssXJoD1LNQ2hx2TmAgbhEctsU8MSFktyLpWxeA",
  "key14": "5gzxpPLqCXq78vRs8K8mPDFv19hZGyGcPhuviEuqa8d2N8CENqCQEpLSSePjqxgbjY4DdGUQdio7C5sbsNHvDxWf",
  "key15": "5KudhWxTiPqGY7pBdqLYr3jfuE7Fv9xMCpMWPyqjUEkwGrzXthiTWsvcVCxUYzFGc3XTtVxqsWFTre5fjYHBWfrw",
  "key16": "4uBDv7gt84WTBnsd3RL6oovLF8PTENbm6kBMrkZjWr6npbUE5D11ETML9HCbJbDu1xQrXm5yZt8T4M43t2wPnWEM",
  "key17": "4CBQsTzXQKH1KpmFgb6EpwsiD1ocVNMiSd9pVdBZKNbKrpEnr68LPSjFfB7k3B9Ga7aVjGZ7PJ1iRpUhriFY6Vo3",
  "key18": "4w14MmxcwezL2Chmu1bWyDsE1wcxBK9KGkEBLWtk2F3NQdeURrZhsbGAex1p2Vxf13TntDcQDuMJGgaWrDs9PhDc",
  "key19": "5jiRCw6EDawJBmm6Uv7a9PVAiuRtfUViXNdaVRtPJxV3rMJU9XT42mRkwVG6CxcLhMk9KYz6CjnmmptcugLrhJDn",
  "key20": "5mHSwa31QT5FgA2414pbBmwcijcNsKEyenmLwW6cDxVztQUVdZgyy5rGz1mkoWFQ2S88tv9yqpGn4QrbLJdQz4oS",
  "key21": "2QKuJFUMtRbePG7GUzo8YRWMnYfWhrPbY3Hr42D891B68VYXMkUc9oGezBHEBQRZTts2QJJbwgR7LsFZc56PRgKb",
  "key22": "2x9R6NDUb5tmysi6QHWWwpFZX9uVH8isxw5ANHY7TH4gZbY1FuEXdSkpX3qTi14uiB3FoxBGQ8CkobyCwJh1sZZS",
  "key23": "2UhoHBZaUTtULvRgPfPFd2o4AMTpLzR52iGTZpjTitCARU4gKouvUBwzJUHwDmrzTzvRsbmRTbjSX9DtMsY4PFc3",
  "key24": "41tyYqfqH819UfjPHiwPD6PSBxwXbY8Z9RFXYBNdJd8GGHTVDxXqnviokKPQgJpLG2gzEA1DbFPEWVLEutTwVboN",
  "key25": "2iJmPFFFDMtaFXG6z6Nav6AdE9WM6RwWyfZ2iP7egaVACpBvb1ZjMY35qAmeJn1NMCGZP3zWTBi57iUT7abJ8gTJ",
  "key26": "2L6eGqYqNHm6S8fGooUqNTphsWU7CqUEcqFoBSyxchSYqUWMqP9ksjeAxPWFuuxZrrcBgmw4PT2uo2QV78hufoeu",
  "key27": "yfn6a67tEZjXUEqHxEbFjKtirZTDwdeAEkKmww2ARNdV7xLovKJr2vH1Fvr3cQUbd8QmZJDZDT1chu5axi9xoef",
  "key28": "58w5iVPu2Wp59orWs19DZBdzxugosdWVXXaCkEJDWUGDxULA2nWCpaH34vqLio4dWLVWWymoCTxCtkfJQvAkHLxy",
  "key29": "prgF7WrFHSwqE2KQKonthdm4rR9EukbX3Q6vRLPCMpEgiCEtwLLbk92C43wukufXb7qgZqfkCFWUJ6GU7dmcPhM",
  "key30": "4qBzCb9rJz6yS4PB83s6qyDoy8dumAixMp8bzr1g57wLRh6MuBH2wPQPnMykXkQCHv46gorxTEDNMpci16WwFLVT",
  "key31": "CtHWcK6KyrHy6d7VJGgaUFytcKxPEM2vnfkqpdNr3Pxwpm1QLo54YLBvW83KcqF3VPt6Avkc7tKDYcaEuUKoBCQ",
  "key32": "pmh3xCUBqnZg2rqsPPjo43WGaecDqj8X3577KL91aDyTXavzYgG4zeofAiyzGPuW6aRDUZPnxzRGJ1vwQD93Q7g",
  "key33": "G5prEXpiR8cy5qVCSskqZtz1EYbYx5QfUZwnSz5zho6PVZaJizwYqvvvDod8uK12hWpWmvRck5izGhVS9imQs2Q",
  "key34": "5hJSDAa2r8ivKoA9V52QVFecii8ADcKmHcCRvkEKmfqyoMrQoS4CLy3fkm2onG2w3kPFpJg3jdx1VNqbv2CXLp3T",
  "key35": "j71u1Khv6vGBtSeHy3ri3bzi9U26WrAZirCTvN33Rs4M7oYF2HdiKf3op3HTskCfMRawRZe3k7NBYfHBAgj45tT",
  "key36": "2SFx6LDL3QtYtvGsN6GY4Ei7ed65hXAbx7y1KXTkLrb9J24ETtBjAhan4TXVRBX2hVNzWBuiKwrmRymJvdi4nbo7",
  "key37": "2vRFSD2gKsb3MNmvfmUAtvfDdRccVXePxmzFkxGN2bqdQs5DUAaqEpW88pyxPfrjKV6GDw12LutnwffWHyp5NXQL",
  "key38": "x3H8P6ShWcb9KjMC55eFxG165ssh3gJHdEaQ2bHQcfzZtrsnRFcCjkjgoPQZ7gC1uvE5fV9BswVDf3Q6SsPd6Da"
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
