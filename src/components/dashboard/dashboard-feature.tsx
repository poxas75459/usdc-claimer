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
    "rSfgG7yL65V6Dro5TFikEpEjXmwV95PTBjwjTkjTHrd2xrJBDf25VEgY4e5NULu8KYyfKxEwMD9uG8UtkSeiX4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNY3v77RcfkcWrSUz4Npvukqawep7ByaKqUHRoVvMRyb7J2FkJK32pueMwn4zJjG61UJ9NxSiLgRAGMFdtmKp8F",
  "key1": "4rv41pmXRYxwZHGiXkomhmTXbrUHNUaceoZU4VuGLx6iaAG44QBuLd88PsCKreHypgKpcUaLpyybRBsbNdccCAYm",
  "key2": "2uD1joBiwVSPDfZRHjgZvC5CaBhWM9nr9h3fq1MaUoGgpq4hBF1FtzFV8VjjbdJMr2B7KvAhBCuUqSmjdXKQv1S",
  "key3": "3m7E5pJcmj1GAA9JD93R1EvkdpQo2teMbDtPwceFUipAbS3zRFX7kgkFPMQ9CxwNRrvUZCAunwLXpP516JyXmUie",
  "key4": "25n6wzku7NSiRc479vAbPHFwh3xBfaNt6Wt3yxTrVda6hdjYqjQJpz43r1tQK18C4omczx8Q5kqAHDKv8vfZ4nRw",
  "key5": "5gXqdcwcX76sSAHZnuwPp6fo5XVSuUpkUYzEsnaE9qFCHaPhio62mgn3FgYEb6KJ24MBMDxNxW6cDYiPWesdhFvn",
  "key6": "45T93T3u5Ut9X4LgZTRmsiCEgDw7bPV4oHEQ1TjGRBBQHTLwTGEGMY689SQSG3tkaggffbcG8EyaPrHHQgXK3Wmt",
  "key7": "2c9E9JvFxYEqt2azcrPEHLUFcNaFybhxMxCoj4Y7fqWNDxkTdfwAieLfz8CBGi1YiyWxd7MujfrsEVKFp2Fm6Kni",
  "key8": "4NKzeDLRTtbYTWvrazvrQXY7u5nyZJFaWS8D5yRgDBGfqufafFcJ2MEFMFjVfCrbpRCFHusboUs72HiJhLX9saTX",
  "key9": "5i6YpH4pGDUfmRrZZnmJjCFfAQ1wZ64ddoguoohQMC3hcH6b6XyUCkazojd8G7DqebRPNgqLVmKz1fnVZJHemJ26",
  "key10": "2UMEHjDvHmmnBviVtNKCea7i6P3b8gVREqqJGc4Yb4LHFR57U434X1vpWo3UJZVcUXispnGDZEk1AKE6GTiQmtqD",
  "key11": "3NabxJm7WRCTJuWdxRPbuzKWhuPUB1pUSSY3dSfYD2cGjWHRaFLCxdRXHeszzvznp5Ej9Fkcfcw9j7Tn7rNBK2LT",
  "key12": "4Xrcort9HPgAhGtdek3RhXsGtG6cTtj9XyJNmqUrLd26Z2s73iJt5jUXwDrNtHKW7SpJa21FRprnhm7ivPG6kWFY",
  "key13": "52Vt39aZB5xML7st3F8EB4W3MDncNhgB9KM6b18bXqa2L44hWWA6zMUaUSh8h6vx2VqAdFopUQnvuxTa1EWg2opA",
  "key14": "dsy2TCRWL1FrN5ukVVXMy9brJvenumySnEUgxqhBsiiKsekcfZeXQNMcJmZDTKJa8G3EFWeAbbDnNg2k5C5wtiM",
  "key15": "noyJ1GS1wMZ3UwkUDyDWiWntDYLfohyp17EHVevmVCoghwd9RrJsM6iasVJCBf6KDDTZxDfc5QiRCC3aJrLcGQQ",
  "key16": "CFsLybQxCnkqsaaT87vEAgwrf3z4yAGMKSZ16grCPm1YVuRqSMhzZeT8eTKgMGGT9CP4fMWdzxYurJZhhdep6Y5",
  "key17": "3pwRHircMBg1acBFmsR2SeiuyEzh7WDUjqJhH8oXqJrNGBzdzaT6sKvxaeXnj6NBPUM9b96fQ2uV6uCGGuimVAGt",
  "key18": "4X65xWxcECY1K2LuWEGaBKpAAh4xMLrNCDuo3T9pppXQzmU8ZVPmKo5cLEPYQHupraxw7YZLCEA6UbESxvEfcprh",
  "key19": "2t5Ek3FgV3AAiBjmchsYqfUWFL9xGjmqiRp9bVtieNB3VNVN2g4UiqNynZcKVfZKGc17Y13Lyiaj1ngmkspzwUZ5",
  "key20": "5SnZEWaGNXNcm5uLUER8pAe6Yx9ptDt4H73ZXeuCRxCQe66QSpKRvTyGTcpCqMGVi6Ar5k6uZ5mgvX7gv7TWN3qs",
  "key21": "3xru8McerWFB4gNJ7qa9WcPohC2jVJH3MW3Q8dfnaKJ1cNcYG5fygsy3E2YMxERjTcNiMLevnKbYJ7hZsUDHo54c",
  "key22": "5dNuEKGC6uZKZhhBBcrYwkQnPm4CDnkE3e4NymL2gNXvNU9a3hHxTgEWYRQoAdBdgo9C1djkfhSbvnm5HiGV4CP5",
  "key23": "4kidnfnh6f4evN9UDm7xK8E9gv34vxiGNk16Tps9zwQhdPuHR9cxBWwNzNmVFmzoydnHxgY7PkafDh6avENYwLW",
  "key24": "zhhGHD8tH8uqkQ9NhH4TzuQnknNoLQ8mhazu4fEsaCsJ4LDwwPaM112c3qSjzXGzQu99FS19PVmdFXkqvgsSbAa",
  "key25": "2jtB1L72VcizVnrkKjwYBpTgfx65ZdV8v9U74hJxGzCQMJu8FjqiH1bwxST6a5EQ1hNkfE9Y7NeDQ7oAupGLe1Cm",
  "key26": "v2GgtBdFt1ygWyTbthgG2f7VwH9yLsRRTdG2H5YYg5uK6MojkzSHroBRZoMDZsqx8PvewKMCjpD6EQcwoWvfFZb",
  "key27": "62Do37cR1Uy7iyhBDVjS9smbFFrnhsbKFaxk6Ui99UgwzE9axYtrfkVypyifan3A7NGtPTAzvCtgeE2aKuLhjChL",
  "key28": "4n1J3PWh5L9FQZ6gZUvMtysDGiHtuQnRViBvZEqQn1V3GGcrBRwbraK58YLnQUG2akWYXeozWMsvr5WYjsYYPzEb",
  "key29": "afWum2zeki6jyUqTRtbgowaxFo5RUWZAyeUQP8hAQCSdt5K1EVAusK2PyY7ZBJ8kMbihycaBbBeFAFtie2DMCUd",
  "key30": "KitHUaVdig6Z44sxtR9AdsY2Nm2Ho2hNKJVTiywCJkxRz1HRjXsbSN6z5cMRRJzRnAjqwvMuPLVTATiDisvqsYs",
  "key31": "6QsQMHYGgy4dXtxwXzMafQiFb4A5mx8XqMXseWjDA76BHjr7bEBa9grfA9n2PGwKzMPLqkgNUrmxBiwP5bim26J",
  "key32": "23DBBs4LW8ceMP5y5PwgacqtjcRGwjv7rh7GDfpZhLrziTuqAREuQnNF7CLx9nUjStEq8t1A9PbcXsK8HqN7NcQG",
  "key33": "66XGMzdrN4AXiutyRrRkTbGCCTHXiYhAmvCVq4H7krk8EF5zrpnJa3rjPRK9XQypmNXVRP3t4HMSPcRz3rWSUM9w",
  "key34": "9YSWAwQa9mL1hE87GQPAircCD6xNW7osZAqfvUVVTJjxxxhXFxn8aLkZtGRZhEbZRSppDuPihZhgfKVGfRHnoCY",
  "key35": "2nNDvXDSHqQ8J14Xz7mRhU34NM44ZBoppDRpPfWADX3J5a79BCWLwn3UVpyUmE3CmM4KHfXKuiJbYyzuQmzN8nMy",
  "key36": "4qvswCqkJET45YTpDGmmAkctYHbvpApL7jv6xQ2D9PgSBYWvTiCmF6FYbKWmsZnevK8JxQH9mBGjjVrdQY5iXWG1",
  "key37": "2jtEtas6aunEVpnpnLt1fJ6QLeL5MxHKFpKugBosNVC4RPZ3KsKVQwJdsq9hMbcFMAQ9KXW8CoJ9rRo1zpZMztvC",
  "key38": "3VVjb5p3YEKQhpKzGUAPkAzBdFxjaUHmPSfumWGvUZ116Qj8pVVB6nvSwcSacxvwNTEJA4fFy8H8rZjcwPSkBFpo",
  "key39": "knT6MQau3nvtUcBktRChuE4ZkBDrYJrAoCgVqn4kMpe1QcrdkapcYQ9czy49yPFofSo8KrLZjeDKDSDJGUU3eJb",
  "key40": "4rqZRL9YBMK9u6taXVDEyMkr6SQyhXZx29PWKEdbetwN4avtj1goWDPWWJyV5dNWHpdXdTBLcVvz3Cn2MvvtFuhW",
  "key41": "5p8k9cRZAEf9JBaBYM5p2rz9kdFaBWYg8aSm4FeTgeEfMkbZryPuWQ4cApJpXzovY4rRuySBTQkbDCLb5bgnxJNR",
  "key42": "3QQ8f2xZPK7W5MMH3MDEBs5dFUysiLYQiXH4Kj6Xiv3x8EKYswQsSdohEcv9mSjtMBE6H7NX3F8zo1UgDV8es1d4",
  "key43": "3QNGJ128FL8ciHJ9R41krQRqVkUnMgNZ8qSeQm7xqZjA1u8d4xA7nRhYevzVKF4VJcYzo8uUBSzdbNPVQ2nDccb9"
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
