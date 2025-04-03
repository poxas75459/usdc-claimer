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
    "N2kGV1RVhZyoqjZs4ukcVWmmZeAaURbWS1va26fGXPrAG8hEo9bKfjsvD8KMbu9KwjM9gHahP36hLABFWxg3Mz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NTzb39LJJzdq1iev4Mfu6ZFk5bx9N8SBZHvsue5ub9Ai32NoN5yPES6xsfa6ksrds6MCncFkEQ5jSshuvga876X",
  "key1": "4btVD99vEQcVDZKZwPnciANikZdnm7eHCXbYEhoCQXzqZmbhpjTS7d7oj9gk9Vt1ytfay3xWx4sPTrhWaqgpY5Du",
  "key2": "58u63Wi9ktAW8LjtwUj7bCVYwsuWzzMe4UJVHc6jdgFaq74YuuPPJqzEPMAhWQis3GXnQhGcunPaTwWfDUGTmrZN",
  "key3": "N65Ua11epz5FkPcnGUErF2NkGXaLcQBEzJdizQmMtvEEvB8BwxaFZRtEbVQZdU21HCXFLFBX9sjPc1p2MskGQVN",
  "key4": "5pdFHMvbirbf54wqK6RRaEx6nUNvAYLCJHbVY6J9V2sWi7zz1sL48o8HzcGhwTVzQUc5it5jHRF1sEf21D2iUB7K",
  "key5": "4gkDgaemoZ299KAP3HZDuGMuKm3nhLdcJbRVvGgzzas92rJoEgJfTVSfEUG7Lbsd3prhFhg7bHkBbnLFZfakdKak",
  "key6": "3JPzHUDhT24yNztsBMTkPJiMSSLzbHqaGbNyr5DNxxsJGbPCngwRk4kA1KJNH47UxoF3Udq9tBKcbbzsnzaD11Bp",
  "key7": "QFTQRTw1svoPTHB88yEiumrMTZpYUt32BFjVdBQ8wrQV3CwaeLoKpwKuwERp3iU8RE4eKiT3QSQ3gX2hw5LjpPo",
  "key8": "tb4RJfDzzaGZosfqsteTgh5GGEVVBGZCznJ54skKCS38dSBz78EAs1DHdExYiCK55DijMqMQ8B31gdPP9SuNGYn",
  "key9": "3XRLtWLuUwDmS2jFnFzvRqkLm8bmavxWUtnxzNesXZcibcSYorC1eFUEL2tpeLbnpj7vHFXzrpQRxMAcrJ9ZTWqQ",
  "key10": "wgRTEyVxMYVYhKLfa2bch3cqN422kXZ6Lgu2t2ABiYSjXyyWsTFZwWW69Utm8iVFMBRNZdp6SuBxLE1kzmd9DKj",
  "key11": "56Hp3Kra7A43omsSdb4zSajhPQ4jbugKUUHJToJRTVdnDvXDtAzjQY22U1uQ8LRxxCWL2Jw1Q49B8hDNK2ajmjQW",
  "key12": "2aeNSE2b4H83oU1bfDasY36h89QaBF7EbXUw1oPz6ahraVkkFfCKDrnW5RqXZxiBcgP5ED9csabFtD1e2ztdQoYr",
  "key13": "5NUzcmCnVMwrcYJvzvcVNBfJ7takStVRbYow2pPJE9xHFkq7uWatQPTMQBve4Rs3TdHLYHtX17CsbmaVbUZnL6DF",
  "key14": "2RAL9kgJbDYMLEhhBRLjQZfGUTqVSiy8ET4Nj7h2KKAVai8xq4NAy9vwNAKumAUDotcZCBZV4o9s2cVcfYBFQwmi",
  "key15": "5hZE3rV41LngUrRt7w6CBn7L6VmDj1ctALmELdvvQise3nmcgzcuVrzUwG1sSR9FstbAsvi7Cm8FAejJ8bEhAJQh",
  "key16": "4cEa88ACfcAK6FVQeyhifgySTUdFVF6AqSQA7cu6P5phoPPyLQcGMwz2TJpTnxzCdhPB2xMrzfzccsuKjD4Zxhmi",
  "key17": "pRwYH4fbgYQrPnFzxu9VrDQ1QxowXVyRxfrWZwrLwHHgcAB48zMZQvxmQRs7uVPoHVKwUZrgX6TX8QADiAytnzj",
  "key18": "4abhf8BECSmbNNYiCDLEz2cVRATAYN5PNCkNFoxQSiMhPKYY2CgrMaoB8rnTYTQfus5gZyYyuwEf9D35k8q7Q9Sf",
  "key19": "3iL2nmn9HvFrUBccHPyTjP3urzzeEkusadptoDwbLuVuFrByPk4JBBcBiGsWFaiUBGFuYRCtetiYTZk23PkS7FTi",
  "key20": "3wvUcKpK8eVGhgpHVBD1RuLnfaCpJgCu2igsZKvjTeDU4h4iCMM5BqgTDtW5dQLiJWFmAbkxaV8FU2EQKdAmxsXo",
  "key21": "58MwnvqP9ZL8fFSqZJk77mNfDDnivzgzmEhhFAtVy3TeoJhpKaaJkqUrMoKU3K4uVurUuAP1HndiXBbADmGtBdCt",
  "key22": "564uFKt2XEaE5n8BuhB4QJomGmFWhidGduYwE8184iu1KMR8QEnpaUpFy99DmdQc8XXXD1iP3gsvHoDu73khx8X6",
  "key23": "4QWa3wzChDxhm4egnboL67Y89Cq4kaR8wMB5h8TuvTNbnbiiPkPWNy1sq66JJmqGr1ZDcJ5EiQbzGtabykUiX5XG",
  "key24": "66ftzipzUqf2gUDZFxCT9qesVX2QJWNxCGPFrFwvYdPA5sDqCNNyboXoEiZMfgKesE6kkULHSBTX6muDgNGKvmHk",
  "key25": "ifzX9d7WebS8sFtdun1n8MXcbYHEuYfTpzUEceEMJUrZHG2RTzGZvLkF2tTHPP8yGiHUxRhKwtfsKnRRqyaFGuH",
  "key26": "4Y3AoRuWNKeswALRAfxGxofbA88P44UVr8C7YKFt2edCUR2UMqwuageTfbaXViWsTSzFpitQckBKvF3H4VmV2pni",
  "key27": "2CNdFMCv9YqQWjQg1nTGqUWiMMzLupNdiV8CJkJCa7mtzUae2xRc4bpZnTYd1ohNobwwQb5a4nQkwhymFXuGWCNi",
  "key28": "4Z57SR6ExhezguXFwMESrPVNtwoNFFKeZb4ppTKvQ41vX9TKBTWaafx2LpjLW25QnAkQVya2DgxWia7xjgM5kxfS",
  "key29": "5kJ2vbJKYEvoxu4fD8PwVBMVaHoNfPCL3NEzHFm8RFSbxxF5pbEPrJoUVG17g2GzWJtN5njqu3rNB2S5xah8dkAF",
  "key30": "3pFfxrrkj8X64cTLAy4KxXPinhHjhYcKkNN3TtsVEWPU7pUgkHftEgBwrfSYonTUGvBw8krRbuE4nadVs2j43q9h",
  "key31": "3giryLoe8zBWfkttUDH9PckwXcbSguz5hm7LPspgxrxkuKhovkF4F33GwSkM9dZTYQmgnX28xxME4nagipk1fs3n",
  "key32": "4hywQjz3k3kSABCwXv8y7NPn7bCYv46WrQ8RFxw8jAVCTQ3HcDmx3B736doHjdgVk9Y68zWDDVL7kDzxcjFcR8Ex",
  "key33": "5oqmHBBx6esFDhExdvSuzqkYVbLoQnDqmpMyDCkgBDVoibgW9UwbfmfYX2QEPM76PgZftDLMRC2YrNcRcLJYC184",
  "key34": "2vdJBra5P47jPDdMVXAgNYhWQW4aAaeauaGB4tHX22hwLJWe2NNxXtGs6qUgMVaweyXnG3ZNmx8MvwqcZo9ejfDx",
  "key35": "DjYEunuXuLMGW6PYqArZruVpkxaRqfZWd8skmGf3a3Niha8pipRBYRcDqThg8FGWWmE5afgvUDs51HWniLZLM1F",
  "key36": "35KCbyMoS7ubh1zULG4oRBEZnM5RjJAG39qJMwj1xqnmFYT2y7msqAVTSubzQGwDLeG7wJrRumA7X76fdJJpFCq3",
  "key37": "4mQLsAe9DWQcmpaccJDshaVyd2iLoF5PJcVdHK9bbkGovAzheKwmRZtWEXSkkChqCbGR5zVevtbFu46mUYrgZj5b",
  "key38": "2NksneTjqw1tXkENhpK7ducNSNofY4gXZovQZn9RiWUGiQ2JcWrW6kM6wmA7d2j2MP86y25n7mT663zrSZcMmLG",
  "key39": "2SZRmtHjkyW3GZt4V1i9AzgUkVaUHzv5jWvi2m2rvEfnFwp4WVsSgZHkWZg1G95kyuuJfJ9qKtcBjJ6ETVnN4qf7"
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
