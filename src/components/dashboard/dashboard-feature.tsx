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
    "2U9UG6TUJ5WbPC8HNWV6RnN1MhdLMpeU2RcZrBBjKELV6pGFf39TdSkbUFZkSNKbhzMYYxoYFC3CmS5n96AARaVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYybpArqEW3ymWTZNi7YHhkFWx3FnejdMFCuK3LTe3dYyMWykLWVeBQJMmkCiZFNiBTHvwviB7Tm2x24vraQ3UT",
  "key1": "3qAdY5ytqKTxo7BXuTRuefEqgd7N6i9HnTH8G3jj5jLTkDk9TZUr6FsWAPF2uiVxHoeRasycpyuYhozN7QyoEWyb",
  "key2": "2yz49iaNL54FUqr7urHZuFYGy8Le2TPjoKv2GWYU2V9AZtmntd9tiJA7LVz9pcGXWB6F285zn25oyDkywHCarGJU",
  "key3": "3468888SBTE2zqjmUK9kiv9wEJSVxpRQaYSeRcsVjsm9kRG5TAPHCsBmrWjfMGn3zsZyiS9awf9FGVNeDMjctigj",
  "key4": "4dZ3GdPERi4bamqb8Vj8L7Zpmn3EoM4CLny4YRG3hdihekwFkEkSz4cpJB6bnoh8BNiA7Yr9yYqyYng2Q4bgSLPr",
  "key5": "qE7CNmY3d1qGUZiypdQ36946nXvXg4kneQXx2nZVRDeaWwpW6afu4kfpRsWKmTtQLTRMPjfpLjUu4DVxXTmd8dR",
  "key6": "3dL3jRMgMKg3n2nu4rP2Yx5roAPfMGvapkkBKnc1e1Fb9yFHKxDxRQ38pzJAxeZcRJmj6BRBFwr6bnrX8hVYkQQJ",
  "key7": "3WEXtDTa6WWdw4C4eQptAVQDuNmGRquPy6BQ2TGUkaSS5oqSVvpXSuPQz114JAiq9bTup23nXSVwLKRqoFvUXPgv",
  "key8": "3kUq4DWEDV3DtGzRm8KuBkygzM9R4NC8BpxMjESVYYqF8JXogNydoZHCdZ1Y23eTbsKWT5MAygDjnUwDMQoLHQgu",
  "key9": "4iaPkZ6thsyWo4GjoNAAVy1o7MP46oDjGui9pU6abEfuY6SHYt3NW2vYAb2wxMH5zPNuYaPoXLrnoXhKWq2eVm3t",
  "key10": "51QK1HYu15bC7iobUP97C9QN1VfKF2KwTZE4RcG5RDH9nvZcjYiN8W2YjhgPZ5oaxAFzvPuMCjR4xetCdcfCKw2n",
  "key11": "63eqSc2ksVoDiGLdo5h6XJrGLKiY1DktHxqXRyHFHBFJTfDBeTb5Uoc566PFhqJrRGpKsye6o5q7PcNJej8xhNoN",
  "key12": "2dLw2vaMut5vzmFBnMNB9bAsTDJxkjY4YxCTnUPhWZAgrtxiFHhqwucCWVMpiQCz495jrQ1ZGdHDQC24Qu9taYPt",
  "key13": "43cEd9xCxf89fkN4ra99C9cfD2zBXTz4i178UvEard6pnYw1i9EDXA3CRHu6sEfv12aYucxumJ91HAVUM3PbpLBY",
  "key14": "1intkkNDQdf17rqdXYTHMrdDjnWsLDXJgsxTqS5Radpq4U8LgFLCN6FGqu4d9zPc57U1tHeNJEfk39nmE3pAuzS",
  "key15": "3LUaBK4uvLduXio3eJ7CkRo1L7iCEDyk1WXnNph5vkgnm6PqdQUChvWdUVg1UpowbeejSYeY7Ar3bR2HJbKWdWLX",
  "key16": "2PYHR2kFTCBGdPeviRtj2YtGzLKHdWk8eKTgDxMb6r8U6GaQLAcFxDXbCo9jX7hdS4tSC5iyf1rDYkhacnVPE4G6",
  "key17": "2TjZd3m9NEtTQJDMdzzV2gBDBbFSC51AQ22g41fpirwzM8YdXiY67s2CKUowKmbLPEWP9QQpwmoxN9T9BfWJLfbi",
  "key18": "57FsQWpf6hkg1W3fGzviz5pVdFpEPhvSw8CzJDMpgXAHnuJnEkKrkuKvYswL9bWrUVDbUztHZps4Jj9KBUrpdVNs",
  "key19": "3heCHVdjxowogQ27r6i4dwTGCoEPx6Rk2oHQMYqDyNKtMRaFuJ4BtZZk1i1BcnJET6tFyxqE6PxD29ypDNq7Vt4e",
  "key20": "3AeYsyEVed7wtq1XsFPPRhy4x2CNfA5p9ikrZwzbSzuVLakik83P3g2bMv6AxvWtPpWbdgYsudGthRZ4cHMNxpFX",
  "key21": "3e5DyzuPJnCmLjdyY4XP2p88SiDavQUMqCSPgj76k3fWKLXxSo51SAKjPeh1vF58pvxfhPzRnGPp3m16gpSi9dF2",
  "key22": "3b8gCVwDojojRpkfTZZqPCmbqpJavKRjhCkxQc1NScyWHMcoc7mtY5qmUuimhRHnHTCuCT2BJvcwjPa9nhqzGGVT",
  "key23": "5NUmVyd5SLCK6Bx1nFcm6FWtRdEQCFDvgjTxTuwL54uf5HFB22EMY5X1r842ARxjQXAjgtLv9nLZNH1BDxr3Xjv3",
  "key24": "5CEBmzUWtX1SU3PSSZAFzda3E4qydworRGVSTsK447oTqnfQqxrTa4cCuerRVwo9R1YwSeBfoFyngV6HvLQGzg72",
  "key25": "5r2Kj7wUsF6tobGuEBeMXLXbFF4W8wY1UgivC7TpzSyXMkCneDsSitjbukwWfvFuP8w114hxh8FkwfMV95fASwoZ",
  "key26": "62mFTDHBpixYyBET3KwSnjJvzazWnEn7fBYxusovVJTFFVmZPvSgRebe4vJoB56gnKPkA73EyVhPwH9tUPfn1w7P",
  "key27": "3DEqGnKDLQRAksj8kvEeYFeDZ25PDn37Fife11jHeEDX44SGiLmLDYdQEx3tgVjT31MBz6bNKSTu32usSqQvwSjj",
  "key28": "3w6c7VhjpsB5senb8Vp4m1XqRQeGQ4chEqJY8ppg6jueZKDEtrwMAwiGV2A8ku3D8GVVcav3t4dp3PatZrFVBbN6",
  "key29": "AAFJi5B9srA2G8FJ1FMxgMF7dseccUYRfrovfkkMTYZheELx7TFuqnGg7HQCnEgfA9cEjeRR8vmrACk4iYzTupr",
  "key30": "5zQgcbxq57LafSVFH93JU5aRxbrDarZm3QNbA67JgbEfZ6f3s3hP5x4xZas3YFcpQhyRgHYskhHYax3K9DsCjvRi",
  "key31": "4Zf8BJFUU4zq4yEMUjt67r2RLzDSr3PYfLQ9quY9aZSU993bf9uNfgb1CyqRqQtabh3w3MCuSfHfafCUYSEpMBFQ",
  "key32": "3jrGUQwcLK6jZVLR9pyrbBFK9DBx4Q9KfhM7nmysweZCnRBqMNdqt9T3uQSE7EkaJX5wRPherUzAXS5w5Jf1ELkC",
  "key33": "3TjndVjMHeyNH2T3v6M4CMnf6jVcA36aMWMxDwzAf4qrJEAiUwcF4igu1kK8XSSWHfY4bP3VL7eha3GcYcybMA1p",
  "key34": "4muNT3iiGWQZqqhpStR7TWTGz5NAuzGn4uKdTqoND6ZbZFBJWKp6jiU9UvE9JxTveMMT11GSpKkQqPnGRWWJfUqx",
  "key35": "4MnDvJRST13tm2iEFzb4ej8MYSPk1MpPQXXeQdVXUdJxyG48Av49CtzpWvJgCUoN7pFTmQPrRvrwTYXdyfen3McU",
  "key36": "5Jd2UnL9dKym6MizhgwA26sGRD5QHqDnEBFQZ8G3gdotnrxG6fpVQFokVxmGiRw7czcvwQ9EiK5mzuD4S9wT79gP",
  "key37": "mtcwh5qfv6y32vW4qpdwE1XcSJuC1bHGC4gViMYtd15tvXqJjhoiuSJ9yLe3qkMGcfbHowcFKE41ve8KhtrzdeP",
  "key38": "4M8qwje8jEyTYvSy4bcwvXjmaPF2WHq5gGnsPpL287CCKSGwzsvmSyLVSGsaHseRDN2MZ671iG99KwatYzNPH6eK",
  "key39": "9VX1kopK4xAXCqtFeR79VkYnWU1wdryvJqZUUCMv6aSLuwjNEvjt42DRAzaPgd71M9FErF41Ypi8Tu2Kj4vtcbx",
  "key40": "4RzqnC3PnAQHbhtpdbd6C313K2eHaWZ9LpX8ZcBZW4sSHFQKpBdtsJ78Szr2pjq7VjmSugWwK7SNUdRoTkNLjxoV"
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
