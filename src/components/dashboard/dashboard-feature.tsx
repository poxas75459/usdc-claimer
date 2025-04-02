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
    "BaB1ycfEkRUXu4SmUrzC3jnGxsdCq8yLUnBEaSra9f6ifJ7mEG4NmknwzVgxU2dwV4AfESLp5DyznVZbfnCgfpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31initD2dT6Ph4jGy9yigB4YTG8nVYEeUESDTnpXGJZ8xXfuUo9TC4FdrLrPhnTPLMn1xgmji99Xm4odDRbqBaYP",
  "key1": "3xZ9ynmaWLsE7c6DjQ5Bsw3LYsxStEKbixPSLNTU1eHJmckWKESvwHTBjSoAwYpXYJ2PJ3yX6jQfWC4WjhyVC8wY",
  "key2": "BzAjc7dT9oytegGm7NXn7Tmv9HUgZH7WoBxhWYrwcywtxYTFyYg3dQCYaW9Qu2MRJR6NCJQWJ83xthfPknPMwKv",
  "key3": "7b2KvUWCCxq4CRRL1UyGhZVXhCsRCLCafNEyyEoaG1ixDcjC7AsrG2kZGuFqJ2LMHYijJrYczg9DKG2A5Wg3omZ",
  "key4": "CEa3Fqw9A2uSYjm4kUtphcSdstnXEXzHgAAu4e8WWvyWCX7jQGcY595iczLZQNKzTJrMPqAg2QKDj7cFQ1yepJb",
  "key5": "2B3xEqTQ4Vs4NdZus5ZjwGetQduMz5FR727qk5S5SPPC2wpGds3EmU92Q43AsPJCKHKd12eQL4D27Bu7yjxR1KmU",
  "key6": "3NMXziNomhwyW6zMUfyHSC2DqDGNASFhLJsDcsCJXwTrAaMdw7Whz9AUMBtRTfTQQYV2MKg8DPoMAqiyh4Q8BRNb",
  "key7": "5couHVAUzPHk88xrdqyC6Y75F9CduSRmT8iLmiADuQHGNVAyjW1cUWUkwf5WThhqj1EoE2vLwrYKoov87qRvcSkQ",
  "key8": "2ate8dNrXioWg5zxeJWPrFeFNQ1V2844ddmxgecCw9DBvuhjm9hkh6N81vgqH5odWFH662aGADLTpRZbYVMZ8RAs",
  "key9": "5NpsPQ21yxhi9yo76bacEgbP74KcGRkheeC65kFcoZLXU7gc5jS5sXJxRiGCNkZVrWBnU9yDxyP5RoBEPCoT51GE",
  "key10": "4o4wj9Zmp3q2APP3tAq2wxAz2D1SNbjtf1WfDaDqzE2wUKqNVXhDuxTQKtmqZxrHEzgxd2eCp2EojdiiUEtdgtBm",
  "key11": "4L3C3yFdcFrFrqm5VVGsxtwCv8Q7NTGo7wY7rG8ZSMu955AeDTgZY8kdt7mTFrtpedWR5nqJYKq2nM85Bzh3Z3kL",
  "key12": "2Cn1jkRknXPpwLZUonmpcM79vDj65EwBW6d7fm94f1yBrVjecdwWtViecEb28LJu6md1mCuB1vUkJGdECKnUvkyK",
  "key13": "3eApmbB7zdACYRUpvJMkwLq1qxGbysvRShV6LGiyMn2nGMwiMXhMaZDkcMTF3QUZLc45eE3XdFRJoqCTX7PiKxGx",
  "key14": "43n7Wpyj6nDKoeYFKjAJdJmgofAH5i9xovPzdKGe6bM12CKsY5ggRLuyy9i6NhPnNvYjeZuodb4DqHLJSiRKhRSf",
  "key15": "4166d7GMYqBGcKVb5ybmmZvJr3Unwz5UK4ZZtKdnteQqJttBniSkVZJsjJzNzSEugXrLRBbsAZb98RDpMUYN7exo",
  "key16": "4S3ep9Nq1bL71eQMduxC3pPSMEwHFCrfGhSQtmnS7GJgJ77MGe9nSjEdmpp4CrzMw7smaBbkHBzi9nEq5pzwLqTe",
  "key17": "61o6X5p69giox8ntDL59LL22a9B1qvVeBr1u5jM3qcKFVqrtqJ9aGcFBJ4hWi6mLMTC874ZmUfVxTHrfkRDzXAmJ",
  "key18": "52BGN7Mi1nGggqscVCqJqxw1fyExnraVTnzo9XrrM7fysNKjUPSXwWHWUD3FkLAVFLkMLgJyf8nFr7xbCrCVccL9",
  "key19": "4sMFZaMu1YQXXbSkCXopQaN787aFxVpb43AJmmGoCkcRYPYRutQdpVYe9cFPx95c4BiCxyEiX7mx41W2A3iU9VVF",
  "key20": "3L3HWRB9E1SGHfH8bXKZYtq8hNytmpfoNsYdN2SNqwAprppgTNTioqyeyb2zoF6VbBkdVp4EY86n5WCRYXq6GaUu",
  "key21": "4UUMmyspVKzi2EUobMQ5LZbLQo68n7Vu1G9zA6SysxfHgNARbBCrZkoiMaqAQwixGtwLm7t7t5rmW8FkKZnxfR16",
  "key22": "ZDK13rWt1KFjzmTxFdVw7DpHr2oSChTvyiy8zaYTZhxfKzbQLGGDaPd5zhm81jNbc6FWYYgPcQpwZmgjqmJPj25",
  "key23": "3UVAgduukhJz5z7yhCHEBRoXnNuLCnhztUYi6qbzAK5AmcJxzT3Sofno8VjqGP5Zq6ef2FjZBRy9qBFB78WPJPU9",
  "key24": "Ze7fG9Vp2XJ4fqsZtZQjnXA7tMQMmNFT29ugrcmMqLbh5KB6KkLXjuyLwQinVg7DssJRRp392AbWFmNBw5o26Yo",
  "key25": "63nT2Gau9ugqZSJyuPjB9jfSMvapgEjLhMpo4Hq8ycQp5aq4hLyQQFhHHiC5MxPW33KsAH849YVwkzPYmAn3RfpN",
  "key26": "56FpfSZPjYcEdMdSvvjCEnX3Skjj1LhmcaFfVHDxWsHWrjL8HbFyUS5XWbVL9q4E99XkKFTgPvcDqee4Y99GjcaU",
  "key27": "2tmdAJFJ6WdXXnH69z1Ukxhqa7eAPczANpvAv2v3B8E1irvKgJiZcEz3RrubxNQxnzZbU5oztE7Y6Q1XVpmWHL8E",
  "key28": "4vHVGWGPzbHypiyT1fDwbYoZhJnHHeRSD79U9WEZBKDXxcgPJdT21gCE6SHFNsxsUPHvkmLuAT4TTWTBLB4zG2sb",
  "key29": "L7VMpVELgmueAxcytNctBZenhtSqLhutqfcnRdHu64dChcXB4a8FPMGrFRSsRhLrz2zpaNeEmUo7faX3bN7zDwH",
  "key30": "4wVP8adJr3WorDKvFaKe1iLHZBXcGoKJ3ZmPogpAG66mXHavTGvkrXbUctaoHrN7yuhAqT4NYn93WwoRKAGNyaab",
  "key31": "37kNxETRZ4KcWVuXCPXptsrzqBYfCsa4iL42Q53GXXZCC5kvcC3VDbXvRGSJfkiuLi3MiYMy5hkwievkNqqQSaMC",
  "key32": "2g1t5nkvc24VB6ufW7Qyw4jxH9GFK1CWqK2VTPxBq4KKB2nHjciGtow5URHr4epHgrh8GcF6VwQatPDHju3cLaxm",
  "key33": "FoATNazdjv4v6qBS49YjT2Dnphi2PtvBmvkApdpjy2MZhcTv3zGj7dJaKe1xfx4wEnG47HcC5RGXW1YuTE5pjoo",
  "key34": "4Jpko7pXQ7XXngSNSTWENWFR69xMnnPJx9HgFr4XX59cAk2d19pteRsR5kpumEKz6D1zh9kZUfdegpaQBKEYNFZD",
  "key35": "usyH8yMgg4g4TtmKEh2r1WNzk3k1ktesWRQDqJ6iY7tDPdUaoZe3RddLgziEyummSfunmMN48pbBZeAcNebjwd4",
  "key36": "2LM53gays9hSTQsrVWLwNJ5XbqL2ukskV1kFZRk2mYKxXhurm85sp1KG6CWxYjzxbYbMx6wWMsBDHgn1Zv3vb5Z8",
  "key37": "2tawWrv3iR8CqgRSuKy7ytRJ4cxBUthS3fsJbkXMWnq9ymDsWh2whUPii6z8LDgHwQrEFP9sBiuJD6mHykWwCPbZ",
  "key38": "2omcck455tMJvMq4uSuP1Am38jpR3CG7F2BMLFfmP13U6V3Sc8jMeJ54d8H8TmrvAeYVAXka6X7iKPVVqjeAcS5z",
  "key39": "4iN6D3ccHwXRjp4erEFLZedtpzm1RUPy1Cee4TAiZDn8gTNNCPMfCmE5d3a27WU22ghf2q623QY7F2MsuwTp4V2n",
  "key40": "44AmNJL5qUuXrmVh1k5UxhfzRVefoUAMEaNipEZMzzmNmrWD8hEYpi2AjjnfgoBKg7y8qXcpJEXK7NnmYrvc76zE",
  "key41": "2sossNVDa5U6a12U6Z6uZYso1AmN5tsasuQ4gvW6dGnRf7AutFcZAp5LjK7gzBkbTymkwCcP5G6N3CVM1GxsBXYd",
  "key42": "3a1NRzErmh1YyGn9KW6bZKUYQ68U4U9RFZjnJEKXwhG8ZKg8LH2qsyzaBwXFLqUjps7oSz6F7o32fPRajHMzEK38",
  "key43": "QVFsaaSd4HHLV9TfEjapeeCqT18Jb7yuSHiJwpMZwST43DyuaLVrqhzpNTErEYSfAPBXpJjPt34P2b3ueZovPjA",
  "key44": "28VJB6MYFbfQtik77aiMvmNdPbCVAnDrLGvZV8LYyoQ7dAHwb1uU5SNi2mgP9kjt2e8btNuJJ7SGrSnVScKuFs2C",
  "key45": "3FiHwQ8D6oELYzxUqVHU6vYwKLk3Z19enkGGroE6cKWHUoC8KX47g8XRCQzS1qKRBGHT97hQeLijwfnsxAQBnyB2",
  "key46": "2DENbvN4KFndtjg2krufT1AspgMs12RqbzJDDfSuxZ9hvMwjdt8nYt9hxGJA9CSK8BSk3qc2ytTASbceu272Pr6o",
  "key47": "3gPspQvic2Jy8qtjRkFJwg2D5YCiLsL6VnizmZ7SvfL4fKdSP1PsdWQCbUtGEkoXRdeUBZW1WhnBkcwQLUFX4X1c"
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
