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
    "323H5j2eWJadUKG9wCeHdSLxmj7vT29VN8FMehci2e46MjprLMWMEA8bXBWxzf4q6WBRPh9P6ygGfq7QR7Fvmjc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nixNk1uvavZ2wQ6mXMA9idGHL45aEmKAreFCFZNq1o7ushP4P3FnCMNQQPTAQhuuzKJWP2j65dgbw8cjfFs6bJR",
  "key1": "2YdNV8Ko1ETjsM4gsZMdLye3s8iwV9FAQ875fFmgJPqW1zzBvhZU7QLqM44U73RMssE7KX1mKBnqq41rYjcFUX5n",
  "key2": "3CGVniNbornHASw1oLUS4D1PQxiAJmoAsb81b9TuMLZi7Y5Y36Gn9MDnuDhnMhkEFPhsG8m3PxTDCfxxGhr8Qf49",
  "key3": "3enJvpWgUEaHjmJM5asZ3K88xD2oCymuKEW3AC3j6xxYDvzxFHKioMwAzuNYb2fSFqWd6sR6c9uc7uxy58LwVyNd",
  "key4": "4ZUujVuWuVN5DnTn4VHHaSZ3VAZcTjcAHaVPBC11kJZfJdxp5SprTrg2RhiAiUzT5UwbkRMKkyvacesGaz442W2R",
  "key5": "5d4UFzSng8CQzcNnWy7qz5oJkSrcmxLj8g7RnoCn647NNJG27y3GMPE6ChqcWLftKxqYU4gEa7JWx5TcJzzBcrDq",
  "key6": "5YY2uHvXtxAfGHA5Zaeyek33u8fXKGW6E7dQo7eyaLtAwnZQkVTpdWoTQrkUAnoRynR2MgRiFSLNCLLqdwauNfjE",
  "key7": "5HyKbuPHKBctTQwLMqGN5sw4264CeFRhDY3MjZADYKdg6YCtS59kuiU6qdvRwvLdyZeNPFyuhnDKMtcwpdxPTekP",
  "key8": "3qPegBVwkAvmTJPFWNC8x8i9p89N7jRT5oGZuBfkXpgxJic6w7YE76j6QMpuHdrYVzQukEZDufnDPk58QDtoavsB",
  "key9": "3YS3rVkbm7gcDM3iYDutXDRNWSV4wjY7mLM6djaUADdFpgrAASfYMdgFFf2TWwPLxbuVG2jjkarLMjv1QyVAVhhE",
  "key10": "ruUCzRgQfopnxogJZi4WrKqi9jH5hqngH5SfymBxCB5K8jEsciRRY4xddnLhfzAhTR38bExkFubBc4b7RcwTUaH",
  "key11": "1HrmxgY164UA3w9aj8je8ZqyFvwg8ECdsTV5NfV8X1rnBjfvm6JpRjRw8cogeh7VN829VcM6zHvxYcuse15jZgA",
  "key12": "5XoPoEhpZHUKPr1LHmt928f6gjYsWX6KogqxZwLzBLrpZ4UHsQ6woqN9ACSqrLB4Scs79kAeRXWFmhjPhPr5FNsm",
  "key13": "VseAGNQJdqzkpaVzhBZ3s5BNKVh97hwB4P4s5yp8MFtsRg6A1q7RDu1ghQc17uSjmRZUV5pQ6yMP8eaw2oaqdbS",
  "key14": "mh3sZevqorsrq2qx315fdByCS1fSUXq65GPr67dmEDGznEZeZQztcnHVon4UeWfNmvSgTY3XD79HffGLzi3XsJ6",
  "key15": "33q9FPz76Sok5UK29NfwUBJ86yLWgkh8w83SVuzCPscaDymGHkMHyvcSbff4AsLR83N5d6cneJMc3td41qvXWXox",
  "key16": "3EVgJbdeJQTX4Xw6EUD4zy4qQ9qLHN4NviPEo3E3a7qsoS7UXqoKt7SyVBzoTqDVmBo1rDWQnfuqocoRPT7taURF",
  "key17": "4LAAzYEcTAV2UR2fm4xobusZCcUEuxPQWKtkA9RtaZMarZrBDkYApjDf6fsfvjNFDkR9tyfLALaLAcfvLCtCCZA1",
  "key18": "31CuVEQnWXb9BjRi7iArtAErVYBwtozU5qruMms6RFY458exUKiAdnZBKMsUExW84HK2SCyjb5cbUBKrCHWdVd8E",
  "key19": "2LjCDLs5x6mQFNXtfbFwa3CVHPCcp8Uagzk5QsaFFKecULSQAdu65iTVKXxue62NV3Zb3MTzuM4xtFpmxGuz7QZD",
  "key20": "5C9R35Nnp3TSvCHpt6momJvzDW2hqJscJW12rxtEbbcH79mUTvk9QHEfpHfG88PgTpUxt4573bUe4aw2odRYHo4j",
  "key21": "aBe7cD4tBbS7gBerMrN3P1iTY2X9eHV7mzwaHreMQA5UAmkEPnVvyPXdgvwc1gmX54gQM3UDB6HZxDocU76Q1xj",
  "key22": "4dXFFTqX4NS9uea6FAztEwvTsL5kiYp4KJnC1cgowBTdA33tagcXoP8NuPdGoPeniiV3mYC4MwgnHkMTHM9F6LW7",
  "key23": "2ZZ9niScQGkK3voYa5HyxyWm1TGDmpDFStiiPQWcRKn4FKQCP3Mgu2N4FkbYDVem3cE3q7HnUgGd9sECNgXS5cd9",
  "key24": "5yQUxCPxk9RwkWBCDXyQePAw5Wfd3MZe7rV5jDzP87xkoifKxyFwJVVXi97jJZWeBcv4XA68RVj8BSoMRtjgJt8E",
  "key25": "5yKEiVatv5LV9sb818UQPv4T8Z9HGU4rLWxhPWcUFAQRDqLsdUPJkqd5ks8cqBvrkVCjbkV6xUPs4WtLzf6c3S82",
  "key26": "2xP4P5RKNHbL2pDByog47uTPLYtqobehwWTnAeBRHFnsvRrbVF3zeBvNH9tCq5iPnejB49qbMsWtv7eSXcwatYkq",
  "key27": "2J6tkTuLPoXbz3oHpBmYkJEYrCe6FoStcSRDmxF91a1EeePV688Bah77qMGrJomSeSLwYsAdtUkG7TzWxee744AS",
  "key28": "4VVAX4Rh17kM6cnCmyn1YRQebehfSK6XgWd5U3g68YSVsy5g6rsy2jM51keJbNghg1Y8YUBK9Z9Eo2W3tm24cDua",
  "key29": "25hWLfGZ3zT6KMmJcdJB22W7Gtu9hiMnzu5SDqAsDFkgHStfP3GdzfhYobWxtVhTzoj5PJz3i7w4DgsyC2uHREqC",
  "key30": "5MMYuwLU6nP6fT2dT9d4fommeNELvvZMBuoH17ZxRdSEpgUbXQV9L9gbtAktYSRS6iYv8uZwEsc4UfjwMq9GW8Yv",
  "key31": "4uTNjjJh6YnuyE3tWbRdqnC7AZatUCJCKUFweVP2AWwxup3dMoUcmS7AAUQmt46AgAFcFsvRJaWxaV3Q9XEJygZU",
  "key32": "2SpXYtUgJG89ubKH9RhGgVvh6mWcKZLLC2iM22WCL4LBwf3JJBurHTXJ5tu5u21xPLsfJZskkKPZGRZ12hB89mgu",
  "key33": "K6mQkrRwt25PM6mahRVhECvHtaMbbhYW3SZXDG3GE2MTQ6Zv4jQ87vy4AP1Q3Mkv9wpb9sk1HvUeQqWGEMTteQp",
  "key34": "5KSpa896mT9ZGvFu5YzdX1xjxAitfrvf1EnJFa1nB2k9KdjDuKENxpTroHxt2qn3E4Zg2WM2jMgy7CXB37BcpgJs",
  "key35": "5iwk5RCjLd5bmKXAaz4C7C1d67m9YNcQC8kZd2HVczkNZZ2axFaKAGaAADQAHBBmV8DL1v9bV6szwWdTXov3wxXG",
  "key36": "3Yxmjff3dYo5xxY7bASR2uMDvZfa3CWksku4FB4U2K1K38MRMBHSDAiAAv6D4Xxt2N7T23Ksmb2zLfCLcQPbfGQG",
  "key37": "2jzfEhvrtkXb6BKSN2JwAz9JTr1aqo4eoCwszkryQ7iaT4qeNL58fEE48Q55aS7oDEZL72wYM6VFDgtAaCPafpUk",
  "key38": "ESdsQYn33hdiQADUY6W5KrmEUSf72aoyv2MtbsnZAW6fpaoNdJwhfYDmhJdyvmPTzsDwJKXQVon1eXkqoDYxXgs",
  "key39": "4iTjhthcW9msgh3oCUgF13HPvPBmwcTW7hvJ8HavAXBWa7E7hGjmVtpu5WFMkWEBybj968gJ91o1Nyxn4wK19ANv",
  "key40": "4g2tK1pzN9ynQuM2ZLR3uRAALkAQY3hm4C5RW1K9ftevmEuxGP7F5rTFrMeS5ps13GEb38NNmpaZV3bNx87154JQ",
  "key41": "3USYY5gGcHTXwJjrMN1myY8XvPRkiXg4LReJiyHL1JgNbVVfssBCfxamrhY3aMecH8g5YooBoR3xbxr86zTqx6Ct",
  "key42": "4xfeSX3Vi4t1rLREjj9JzG25jwa9jAoSUQiFNsiyLtnZRtJfE4KCifGjFc5y7Dvrqyi5PRsBas1KKZmNQe9vGC5y",
  "key43": "5EzaK9WDt6JdxHJLkSZoNscLrjYQrs52xXYXPhidYacBAcaRkmG5Y4Uh1UToDLVHYPspKsnSTVaYo1AJLKaQ3AZe",
  "key44": "5fN3QXYgwsjH1rdJEfgE3uP4Qbof5mzU2o82ikcKAJxXaYN6u6qFzfdBnGReDU4rCJ9JqhNXkWet9gz64VUHNvSd",
  "key45": "GYgdaWmBdUqWngLJBmgX93m28zsZzzJKtFCzT8uV6XS9Vb9QzfjrjhzYwPPx3bBFuQRZt3UtXyhVcnUtR8DojnY",
  "key46": "5ToVhQ4Mo4sss2eQ2tsWfZfia2yBzTpeypYuPNDwZqHdp382dJ1W53h3bpB1VrRncFBqZHCz5CAqncyPQnua3JEg",
  "key47": "5KyfFEUYj4nniMvpf9VKo1Ga2T8YKk3fiQe4eM8sWamofVjC9j8SYBCHsKU5LRoA6TjFWiEodiRjtRY1erpdeneX",
  "key48": "3yJGbGutcv8EBR6rkZP62W95YW7HBqVNnFCECjCQNL6T3pvAdNwCZXUArpiSsjKioCFiQyatEGSs29YUC1FdVtHH",
  "key49": "3M3RWr4mTV2kUbY4MeCxdAQzcWnqL2ovLMC9XJCm9wSXhx2ZG1PykWXxYqdtVLKUqGSgqgqGmEvcYSXchZtqQZUb"
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
