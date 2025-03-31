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
    "5zWp1aG6TTYwPT9Wzfaf3uLYQonsqzyYfCM8p7QASXrMg9qABRiUgYeC4XrQRymdGV6d3WYAKCoezAWytwTX4Vqv"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5Mc2zonZiy5tCELtd7fECPWSvw9PnDZFw6vmapjuDjq3ghJLj17ZsYd4cvyxsWKNDYPQqT2eDLSb87gjec1raFe5",
  "decoyKey1": "289oty7KMgUSzH3KouZHfKP9ba8c1X7kDNkqwJxRYZFLf7kuDCybhHjnDd6Jn7iBEeJrdQJTtkcfFCrEND95xYxZ",
  "decoyKey2": "4VxyQYq38azLsqHV4DFEq89F3W44R3DYm88ZiaThza7NSdqJeX31xQM55DD1YCmdCmWMdXbgCUvCHsZyXrCCZDaf",
  "decoyKey3": "3vwXqxyvsjHjg83pstdaAhttEUNsAYaRVjsCYohMpmpfbaB5x7Ad8xnNtuw1inHn5DVdK5PkL3TjGcCtUZgySrXf",
  "decoyKey4": "4WnoRfJW6ychPbFvgdYH5cPRCvooJAwdizdVZgdneYoFCnd4ZMmtNQCuiYnJt9dnNddJMV19YkSX7F5GVK2rhheg",
  "decoyKey5": "5uTW4hCmgnDUm5NofTKFJeJQ1kHa2QK1Pj4iFPsz3ioEEfgcgu9dy6K2iRZk828jWKXAgeth42Ub3EYTtoCEvDTR",
  "decoyKey6": "4fZjtiEVHtcgoGojytHPCasqtu92XTToKJrEgHpc2nzwneGvjMGwRsbaggB2jyzML8mQAgwZbTyf5XQoBkUTmCdZ",
  "decoyKey7": "2xk7CMPHVjkrJb3P7oPgRR7f8J9evVQVkKjeSFT1mMBaawyAhxJLcnN4HxGCxaAXdgimgSkgKDrEBTto7x5H9FKo",
  "decoyKey8": "5WTYAgbkUzmQ4vaNATU8a1DMqdQCtBCDie2euycTd1dXiquAoh4yuERme6AJ9po6wrbHTgHqTXGY8JM3xzseuBKW",
  "decoyKey9": "dL6W91zeEsFdREyjdxmgQMrPMhN4JfFuXWaNWQfmNu1nm7P2i6jVHuvzDVzPdw5ySjERWBnugjTv9EXnAwgRhy5",
  "decoyKey10": "WioTvmJDAjpVkkuiqECbiUYah9UV9vWHiku5yfWJPWdiatwUv99wkh9kU6wxz8K5iQBoCrhHBixfpsBs8Vjmisi",
  "decoyKey11": "eJP2LqzhXQMB3kfamriDaRjzxYq9tJko9Yhv8usMGWY9U9TD72azU3eK6RnwgG9iTNordCDuKRjaLAPaF8Jhzpy",
  "decoyKey12": "332jB2uu8K3HkCbLAhKayiPUNvHtpJurnwThEj7nqVLNW81vJ8VrH2kScruD3vKDxrv3o9GZQMYTGzorTmwdS5tB",
  "decoyKey13": "2WH9WfQSWJn8gKnTMt24wE5NqHrzWR74LFRAzCcMwAbCLVKqjxAKQSkK7jysCRktaTFBH4wxeQBCqiBx3j8YyKvk",
  "decoyKey14": "2qef5QQ2q6LSUqMS5ngRtEjq6kzQKpEe77JENhnnmbEU5nGCgzt9VbNJHGHcotPfXJaZxy6CLP3x3NFwHxNhjRYB",
  "decoyKey15": "2QAfaduagrJ6z8SNAyTrdr9oAhYgs2NiYWJDx1DwzwC4q43dophZ84hThcxTgoSf7EgKmFrJMhMjB9u5LVn9ifyK",
  "decoyKey16": "2v2hSPHp98DoPPMmhghpoXd2pbhCiNassYn4EcD7AkmUUL2f32kEN9mKZjecma7M8rygToKfCgVjK64fAokpVt8T",
  "decoyKey17": "2MhxnRNwKnfbPctRVewpY2QRzpSH2h2KbKwL8pPaVxnjEvR4fDZ9BCQ5JNz3HgQgjR7JQXZ54ZvnmMB3D4XhSCF2",
  "decoyKey18": "3fq9EhUddhmzqZpkPRN3ArhMxqubnJtwuuAWF7GTV8PRiURicnqAkhGXLu7hPqk4u5huqy5xv5EigmK5XvU2XqeN",
  "decoyKey19": "rs6nBQiym2u1Tqi7NLFhKbsM2kMKTMUdNooAqJRpsgsBTDrRoMs523UUhy8SBqg7KEAoVyqua8BQcio2gz4Dc8E",
  "decoyKey20": "4KVtKS5ZynYEb8TP3K765QWc3gcyDqff6S336qhTBhiHwvBi5bxDiJgwcNKqpjfX2B7b8paRWro9E31BiGgCmhN1",
  "decoyKey21": "3QeTi6F969L3a5Cjjf388CfiEgDK7MJjzZTUDgdNF2GGLwqevxu3tqEQPHYhs7y62f35VwQHaEzjtmWRfBte4HiX",
  "decoyKey22": "2XMkbEKb73Qzp78n3kU5oYre6pdS9Ej9TeFnXYrK7HK1JgvNVAUhgkqHJfbCKPgBkh3YwxLowmVUuPFbTNbW7iYq",
  "decoyKey23": "4wsj2tDpWrjNHkeeDL8cp5so8xgC8DZCpy7QonA3fq7TBDCnhVsUo4YD713GsZRM4Mjc63DLvfX6GMnfVPsLytnP",
  "decoyKey24": "2wJb8KWpYQfKn3LmpvuZF5BUL6tgQoGo7boZfDvcRtqtgF1cmTn5BrdhdHuxiYj7UMChVLgDMR7jrpbBhsFrLPzV",
  "decoyKey25": "p11QkZwVBqgnkZXF8cZbV44uUzGsJGnmrY8RFythj8K9U8jvh38TLkfiu5ERaZKTr1iK84RusWjVRABQ6yoEsEX",
  "decoyKey26": "4VDFaP5qGG26fP4UiMrCqutV2Lzfatppwtt7kF3Acrk35WR4ATUxiesX6sZsP4oKJT9x7sKETQBTniNSPWw7msNL",
  "decoyKey27": "3LjTae7qor1syPbdCXoajqzdDH2mxtTF77epQbWBtbSMBDY7tFmvHnQ5hYguUsfAdg8wsrzBncYo4XfcsT1Hk4zd",
  "decoyKey28": "5QVKukAsrXw6GLRSwfYnRo7L1SAvbXySbEZJYXyAiZt41Fe2vP3oowRUnMGW6LWbNgjfwPHJc5bnaFbuSbnAKAXx",
  "decoyKey29": "uMnQPUmZE8CZTMm6DTGesafGDEu94dyfkSLWMDzpNZ3qYWyqyBCmpfPkLatMuHDtavVU9nYuw5YKxV87pk1mtig",
  "decoyKey30": "3vVVQXuoTQeWatjkePS7hvk6PxTwhcMELUcffDCJ3E6NbFZeCQyN7eRDQ899ebQ6GZAM1R5TQUdZEhZJJvb2u1bj"
};
// DECOY_KEYS_END
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