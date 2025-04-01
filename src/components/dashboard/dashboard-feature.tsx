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
    "36wFByWXccChnnZAgvw7kqUckTMPuAwixWAVZVH3xkrkd2LKaUGQWDsLp46CzGjAAJT2XgwW7bEqYtYh4Sciuav8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDRZQan9QYaLdhkjQJ66obu9KkEGsyZQGLvsUPUZvPFe9agGbrJtjYe5PqLxjHoCkkviGy3nQvqFQatUTwZkZME",
  "key1": "3aV893wgAbFXCrvJS2zotaCo28XXTsgXqnfCSfRnVwJrJDiRwRkfScVuV2g5yvGCxYqAyJVx5BhsJtj6ucRcXtE2",
  "key2": "5mRwqY9KmsF6LSToDjqBocg3CfkPneoxGzvBL7y9Z5oFw4vswTUYakt3RYrWnUzStfxBihUadguWVMQtkHBzqotJ",
  "key3": "5TFxRR6mpwrM3doPYa2Nf5qFG6CXvESAHtZgQUba8rdHyk8fZnsRBzQNALjzUidhomznLU5sUtSuPDK9WYRteVry",
  "key4": "4KvH3eyd4r4A3pmYT8jSqD7JsWCT9rUY5y7yNn4UYgxQb4MpoLg24TumU3H862881EDLPRfeYm4oFt6tsp2gYnxj",
  "key5": "5deTAdq8Rv4D2oBB3RG3jpwjLJR2UZYgUf23oxiCqR7wWcFT7D7mbP7xfSZp1C2ZpHCrPkvVoc9AA2HfPS5dvYxf",
  "key6": "2jpzQNiJsBH3TWTjSGvCJe6a3qHmaVqegL8tuSAavZta7LkMPWtbV68D8bc6vbtVb2AabjPfZenTSPopPxgeeAmM",
  "key7": "4iVACvWqYUNSwH1WopVDVNjWfcLHB3k6CKd7NaDbjLZn8vHRv1xLeqD4tcpwFusfxAfGaWUEjuXhhytQvpDf9XYH",
  "key8": "34uLR5kiGxP3ZBtfcrGZDRbCBZUfU9hsPfSuLoooeuiFW5SEpJCgkbRASVZ2k6b9gKq4Qz7YQBJnhJjAQ1ASCgJB",
  "key9": "3okt5GaR9QtgGi7YS5RvCY9BhdABxU935EYC8wSoZnpFwqfqJQoqQrz9xzy5Q5SVTcFikBGEo5esSKCAKWFoU9Bv",
  "key10": "2pnPsXKiKCY9CouFkuXxVrWaRJudQUAzUskJCnYYBa8rsaQr6uUoYGhjHXbMpLjmVTNRS4iXmyvC32sbN3u18WdM",
  "key11": "p5jEsNWqSoXgDjVjkrUmQYpzBNi4Xu42bzMfpoatLzicAgsW1DFyYKRoK46hurUXM2ZmQxX7Ud6h93GdJ2SxhkU",
  "key12": "5rLcyVZYYLDg1qVYVQQKiop6cu8vedTEAREhZmEr9Yskvkk14qywE4DszER6KQgkMo1H2L7eGbzPDf94tvcR8Rg6",
  "key13": "3qJxgZ49mzLBjaHk4XkgJaRwwb7wksGF2BfckEB6VFvDwbeRd5HdNabuu1zWT938za18TsYHoMcwXcCW8kkrLsPF",
  "key14": "4vMioXQc2Tq9QEVW29zimDMtdXR5EoQDEvFsfuQ4GydeoVWHB8dS5yoQe9gzr9FTnyHHtHKSA8gqUe3VZTpHVE4i",
  "key15": "3DJVkpiQEZdytimckFADjsaypUDw63jw91tFJL7Ubrm2T7SLKuLhwFnmut75xqkPGBqHPDXsxSebh96ZazwbGZQp",
  "key16": "UYLCAfc8mEEHqKNYYKLXA8PdmDrCD4W69LsXhvQFYvt54YHEHKrSWqAfSfp6Am4nTP1jKieQKu9TkPT91ZoeBWr",
  "key17": "5g3VpiQckG7Ef527NYUd6pUpmrK9NGjhitwMcQpt4vY78nMDrgFGLNqG6qieSSQfri7AEp5wrW3VD3EUVVshuhBS",
  "key18": "2ooLekBgZFbd4kBCnz7JYHNYdgtoAYEFXk1fnUStpwgEJLe2KhkjPp3qBS5MEeEw2HdjtiqF1xRobHomeYRbu2vP",
  "key19": "3XcUocPeLemoshaUBB6DzPLmpndiBaBHh4S4TAFr9aWPaMuhSSP3uCuMoSV17NGeEUiTU7wG4WwCUP7mronZXptR",
  "key20": "XQseBs5pR1pvjQc8oKv1mVfsjmUNtUEZPMLfrFXnWmoAnM5teGQUpQ7rDmMfMv7U5KzzNxunjDJLbvmJb5kU5am",
  "key21": "Qa7BLxdwiEgKapAz1fDhBo2iqsMZ8ZVxd1qwPH1b78fWMDY7qtWop7eT8fVrYosBzieKCuueAi5d3MaaC9xrXYs",
  "key22": "3R3EamdGR6erJHzPHcxJHdfNFxmwt4b2RSh1jysgYffQsT7uWoiHkDbFegCdwYGq6by4o4Acr4Nqq4JA8uizRrqh",
  "key23": "LdK1pDbeRY49WCcdrcUjS1Bn9nzqYuEpw63EP4oyqQcY1d6bgJkVuggDJ8VnRxDrCpXj6kwUupqmA6FXmhuG5gb",
  "key24": "2YeBgAtDrFMkBFHxCftEWFt1gVMoUHT9zypBhifjxoem7JdGtYTHneKX7p6TUaTa2NK6B9R9swZL2SfAFF8tchKN",
  "key25": "RakyGUzviJAWEYEUpFXSRJ8u9JWari69we6qLzX8s4HV6TuwN2wbk6L1dVFeCDYa8mwTMU6qBhmuFBuP886LLgY",
  "key26": "DxBccrhwq4kfKP9M9wYjMBGQzamQUpunXQShVjaW6i2Vk3bsR9GLycVKgpCv75ZpcuBwsNhKRFE5aJ4vsXA9nM1",
  "key27": "3jrcZKmMKJNAh3zVeZqJTTAHT5JZpaCzC1Q3jegPZxHTwuoiiQuXimmzxJwhsthsmVnXM3hgKHf8FtZ3da1rmETn",
  "key28": "3q18msKk2QZdEF6kmp2737vwajSaarqMfQWqDyGfyyuM2VcabhRpdk6D835jNZXwn2K93gWLgCZPzaEpfcKHJ5wN",
  "key29": "4RUH9iZAePGKYAEsBiHPUDBmnny1f4eSDtwDo2TiyobjcLb58G1p38T1uVihQ44gwVzYRo9zHQTfcNk5Q7eXm7dC",
  "key30": "3ZcZzdBL6ehEG2PsyVF6fEeeCCbj9b6wfUDvQuWVX3kjkzEoPeuG1dUDdSFMsyMD7SGhEpNZE55CZY5FiGevzQQR",
  "key31": "2LoASWEcfxCyAdFE1VaGwTmMNG97Li3CgbKHQt4TwcQtq6uEDW3NpfXo6BgsaWtC56KTbqK8Lmm5CCcAvhqsu2Nn",
  "key32": "3Wqf8bobCohq3SXMfcGC4d7xyxCDVxL5qeUcyPubJ6suGSG91mpxbjSDjrRDvFhj5NzFDicAYXaM25wTAwSmB3Ft",
  "key33": "3XGt3UFPFwwVkm6V3h3xQHSR6EsY6vMQu6PLbiacmtiRvpj6tF8F8MmBGHbVVX2WGRZAAhxRjT7dNdwcxqWDNLwV",
  "key34": "4cpRVcW2FPiQKv3zoQmXAB3nom5UzP2tho9vySf2EkDowJwueBZm5jM8Q5GWzK34LamPQX9pLWcuinEfELL9963T",
  "key35": "4mrJ8uhikyAa67L3hC3bDyyDxeAnv5V2174wdKvzEpibiG1UzLRVEeNzsYR2x5ieruWa7rWi5qXwQmpgwR2VH2XM"
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
