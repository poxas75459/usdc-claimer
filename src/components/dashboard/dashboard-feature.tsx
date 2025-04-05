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
    "3E6QcdJdFrfcDDiiciRueVb6NcgXxViWYW9aSBE21avQppufqsmam2y5yymW7Umk3Dz15YYVxr1YZUaDFfrSXmke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VxwKwsu1NUNXuiecpjz4Zx67JwysYhZqNUjbgGxScn2Sbv33yjh9y7ENLtdu7wRkMnerPwv2Hnn9XTYzq17Xf5f",
  "key1": "4J4B1sjZcEK7Kcb6dbBTo1g613tVjCRpV3A5LRChRotudAjYaW6hLuGsAhwwnh6SiiHfsmLPbpdnUA6f3CYRRijq",
  "key2": "38bTdiddXsA35MW5Y13AwMTRL4J5JQg2pPnarkhKx6Eof6CMTW8fbqW5PsXUwwsdV85AFRqJF5iYQvYuE1ZQyLCQ",
  "key3": "4mBkiFbV3zA83bhtSFZ1SG8G2NFtMUpYtC7suL6mJgsf64So6pZpMMNXiye3Ghx8fEeyY3rTBSnzsLf7xZEwMy5N",
  "key4": "Neqffw7a7vBCG3ze9nRFeNqYBd3BkYCmDSmsKFYrWxqzUDvDofbAAQsN7oePMcKmPDQWsdi1PAHcNuJ3SNVgo3B",
  "key5": "2XjHF6CT9jt1qzgwqq1tvTTWqZKcRhBY3AAX9BrD52VEQcPNN6UBaGiMpyHXjSVdELop5XE2XdphJGP7NmPBMpy2",
  "key6": "2iVJHCPn2gtsW2NQ8ee3vdy6bSTqwAFUfXkvNDbPsLarJed8NSdch433ytmkjkVRUiRS5UGFKprnC3CNpcivFxXW",
  "key7": "nNmWV51VCpzV6nVg5rjvoxxs8REDg19f8FzrtC2ERGjk6bvhDzASzeyQFGDfWbJ7KfvC63LK5Uez4nn29MCHiC4",
  "key8": "2CZspzoLr94a68vdv65u2csZ5EoiKiLiXvq95APAGB2ijABCy8GLJVKVJTYj67gjib5DtSbHkELD8AWypgw7uaW7",
  "key9": "9AbSS1vz2qPuXQjNSooenNVaP5p8Tk7nrCvvvbXMYefsd12VAA5jBq1cH6vQehANMCXy6oTTBuwsRVRNNpxrBw9",
  "key10": "2SX1nVgJx4bg44i1KjMqs7J3GhTY36hDRfXVUrJ8dPzmeVUd4KEXq8nie6DyTjx7tmaK8C5EPbf2Tkvhj1iSjUj2",
  "key11": "3fpdydSPw975reBaHMGYa5ef98sgRVGWnNmf8CwcDcmfiiihUkbLk8iwpcrpSuhoi5rdzr5C7BoXokYmUjdTPa5E",
  "key12": "4PWwKgzZ8GQHZFyHGB3MTCzKEF75ccARFX4Vf96oEniBXM57udmsBHEVnzTFZ7454Kv9rcqZnqCx7D7RAsTp5YDQ",
  "key13": "3AhBAn3ZKiAim9TySm4wLYA2v6Kgo3BqK6gZ4UzTrJMwqHhYbPNnhYxpQ6Rjbc6JaUU915RvuraAT1DhKbnvjDyv",
  "key14": "67fLt3wb1WTSV37b8f9s4uPUFefm7CW6VCZwqAtv4eFHTGDmmwCWJyo8tdwJA4QKcLULEnjRJADEG2xJkp4tkQnc",
  "key15": "3jokbUJeozvBNxC5TgiNRrv7wc8E3W9Ky2ccjZgwzdv7uvcEckkovxYktkks8qrBBqZpWM7y32rEVtWDNhaero6f",
  "key16": "4hgNraoEQfdnfq6XesSQiouz2buJfs5Y2HYb5vRrQqwPYm7wJCrokxAHdVPgeEvPkWBDgWZKtZtvJfDskv633Cd6",
  "key17": "45UMiMkjcjLZoigX6u5TenKKCJqiUjm12SHSwroDGTWJZex6uDfoNjSJXkoarjyDetNbqxUXBLbtetQtgTeDfsCA",
  "key18": "2i7EMfkmMowpzbazu9SDuAXGrQZ473oDefndDyCwUzeJ1cNT4LnhgXXFAxutQqBB9b4Qq8TeGzBajhwDUWba7opz",
  "key19": "2wvgMNfeEHVCuU3xqQnZCRvCpx3vNkvreSL8WAi92xZLfu6JfAdSM9b3Cp9Tnoc761z88tLcXu4duNWPkziub4Y3",
  "key20": "5MSdC9DQkMuHSjmZftSsbpj2GNAAbLaxc9MT8eD5FL9AbbZeSy8Yn8ivJXeJEjSkr56DH4ETwxrVfVUw6urD6FGG",
  "key21": "aQXdnQgE4JUjA1Nzc9nYStEuGYSmLbTzHt7NihW15EdBVPmzUJ7YfYxWHmTDnwy3mFE5sRJTmBMRFUsB8CHt8HR",
  "key22": "4LUwVpg1JX8U5bhHtUxpyhtJkKFNKgkYw68H6HdwANuAt1JRhwvn1TEitLtZBdqKFrFDDCLCF1W4t9RWdpY3PtK7",
  "key23": "4JW7SjRRwVCPfbCUktH1eHYnDL1NZ2kY9dqNByyNWrLTPhG3Cx5FBsN5xmZ2gkLj3WEKe4UFaUFzgsKQ1YhD5z8V",
  "key24": "5bTkyz1rU6Djy1kfmTYyb2fzJTtxgBr5N7ZXrPMoPhva8DySjkSdXYH5DbTGySuAqKkmqJE27Vm9mR7mBU4xfm8B",
  "key25": "4wVFkrkfgZJTo6e9YHhH3t689JjApiZgDP9ECeVwChjAJFaMK1QNACb329CivwnsL8rWXR7yf27XTSCdPb626xu3",
  "key26": "2N5dbb2s7KQhKhXR25sb8rwxo8cb7Gi6KgMwHEXMV3cCSPuQWJaoc7Lo5gpXFt4e4KoPfc7hj16xJCv5tQcuVD1d",
  "key27": "37zmtvBiHAyr2zqXjUKzpS1tDhQxb8xWZ2bH5htady1ccv92AHiVyqcKA8nocxRpng4zLVvNUhB1LM1A4CvxVNqY",
  "key28": "48ZjE7nPzLs7dwq35zV9rfnteKWyJ4xZkiSjx1JDvMGgKHXTPc9DsMHFmKNj8U4yHnAgRAwqqFb5jzzAq4YH3w7X",
  "key29": "2qbT3jf5qqiVz8yETeZoaD5SsZS4fNJREShuksyUp1gyjJApE9PDLdUH1pNKUiLbymArPhvGRPD4F3MZEeAHisfr",
  "key30": "5YbANFpfJ1GUJVUeJKdv5LhRJzyksCDDo1v2DCPyHQBnXz2aaZNP25gnugNzkBeNPBHmXXD8UBW7Yu87xa9PFdCZ",
  "key31": "2MRN8BbTW2hRVcC7EdN3fHCzGqjswMEtXAmje7oQ1mbxr9txJoTD13o9une94ZPmNbsTa8WRh9eG5mCjLhHGHHEv",
  "key32": "5tK3PU8V7KTJYuB186aqG74nXT8Cf2xM5YjKeJ5EHZe4PQcfasQAGEB1sgVcs82F9UYFKdosYzNWsm8suM91AQft",
  "key33": "2KguzTM17dossbpjbxVv2mehQs55pZhW8cY35xnWc5BnnoiVaqdSquwShN45dQHvBJdACf2dBb39ZkYCvzZEdGR6",
  "key34": "s4PJUeXPcYH9t7L5YTJrpbst8mzZfpeeVdKomJKDTimFummXVaMAgX5GYriZ8vxM3VvZqnLs3xCn81tFRmhFW2o",
  "key35": "xiNfEgTXLfJzcVSh6hUVX8wm7UnfCdFVR9UywWsDfbQc75TNtL7gVRUczhXr1r4wRDANwqjgH1uJkGcfpjb2QnQ",
  "key36": "VjbQh3vMzFMAtfrxZtnerEWZgn2mP8g34wDLYCRrdMeSzWpKJ3LXho96SRuWqTA7c6SETyvUvWNVwU8jpwh9K4u",
  "key37": "329HntGWrKdxeiB5cShSbQL4fz8vS5cGUpASRSFmngLgidcekyCfaP2qQUUEVGirvzhAZAhdLiThrADgmQFdxzHD",
  "key38": "4kkEoZtUmqzgCN9XuVeBMeCZ6YKhoiekjKfwGP6up2DGHowVqwLLtQ7fJtYrLRThZBJ2ifKroHP9u9Hrkbj3ifta",
  "key39": "Etu4GzTnmvojTMbmmsxwKCHeBqPMvd4Jrg3yQ7ySoHQpD5AG2heN2XxY4vih4DdSYi7k7zVjvN1pXTKP7r364c6",
  "key40": "2sq5GkpCCNK5gK1eQUUfT2yqnstQqo1whmzwor3GjeR3YhLxBjk7MpZcmnSS5G5rQyRHS3RFnN2sYY8LDQreTGCh",
  "key41": "3MWRXi7tYsvyyXuRUE4RrKAB2U2mFnCdnWs73rMwQJunMhWv6jvJ25cnNssr68iLQHPPpFzyEoefBWm7yuMSWmJ1",
  "key42": "66QieBqN3J6AGmMNRZYxccfwidnbHAxs6cDk3aSyAQYDbNUCV72sqPxd3tJA5Yp4jWmJBF6UT5YsNnqUa4Hd8iLM",
  "key43": "4W61DGsaMxG6GSjivdwtELUjLQvMxTFXMEKoQXNybgwUbDkLraSAoEn7H681k5PAeA7AjLJ7gtVhyDuBgy7T7Rwi",
  "key44": "YNPdRnvKtmzx4S7bBrJrgyWjyYcVshnSoCcmWfJy67k6Urk421hm9A6eqsg9B6rCm7DysZSGtZ5zQ873yV1CrmF"
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
