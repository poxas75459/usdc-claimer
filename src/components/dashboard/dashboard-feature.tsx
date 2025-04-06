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
    "JRoWDwAYvUrmSGhCzdpAriFSEkDLvScZwLEdQRXdJLdaNmjRLXvrQnJXMsVJBbo5AV7MDYU77QVA4aNSD4tikNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zQRZJ4fq2aUgvNFTuwd3iA1VuncUHWmyHUtqs4KJff88y32e91Wd6KF5f9rocf2hJgRZdHgwFPcG94xPXbVTS5",
  "key1": "2unehKoNXcTSAJu2uSwcVfU5x7KLUzUrWzicqTbABazPKr1MKp8UyPMak6ptTdf53iEkL29CcMYXXzhN1QwLyoiK",
  "key2": "2vtdF68BBxqahLixvKqKrxPZ27gYgJqAY4oS5arKw6Xu1BR7KCdHPtGeUTXJPYtyJGjG6iqgzS99jD5Ntv9KYqzm",
  "key3": "45QsMME7cpsFyT27vh22A7ByBeDbenLAaaUvduBio6Kf82xU6ZFuCA4Kv8Qm7Z1QMSvUBZQQaJoxbkRixdhR2fNN",
  "key4": "pT556VwqhqDoo3yNpQcAUkJdM9VZ4EfcUL8GWrcUpu8u3ENnnSQHrzMXCbvT7XzqJq6nmB6wbAFspjNDKbgND63",
  "key5": "6dAs64FL5jQg3kdzLHeJZzQizmQjRLF8ey858dAJe8ZvvJDGY4iv9wGxM1aJq6WvET8xcXsoewR5memupPQoQ2D",
  "key6": "5Yx8FFDtHhaN8M72Y5HckJW2eaSDtDihTvsNcF73z2oXXibTjmtu9PM5rrCgQUDdWNkqYQTLF4TDcqrxunt68BQz",
  "key7": "42PJMfaWCAuJErcCu8KBJ1okgWVWNzWeEi3AyGEiVZYzbZTfi68J29wwVMm8J6C6vDa8MtH5xgKGZawQHVYNBSo9",
  "key8": "3eqdbKkSQx1SQF6TNxVN6SRD5uR5HrAujA5ZmBQvcMzax8DrP5ouFzNUgay2RMWc93mPj84x7MDycZU5X8372cos",
  "key9": "263w5yWiTmn2pmK79gzqvxt2o1MmwbTXsDAYUx8EpPkgFRj333EgAxBFHykUm1rrDhc1EDV4m15iG2vB5UZWWcrg",
  "key10": "zLGMfgxFM2yxHZNXqngWbjipbJxrFiqBSFLMj6e7BvBJWYfrsauh6E75t7tQXJeG5irVD1UK7PyPMggfpvTeYcM",
  "key11": "2uxYJgvoTqTVDo2Z5voKBfDx5xVGw6sRXjpkLt1QndWZGCqVrBQLYozz926xfLNzpYQU6rM4Bwh8428psEG856mL",
  "key12": "5jBTPa9JV8gxmy3Sog7bf1roh6HhZWyx1rzhrqcEcZJQJWaFWSZj2uy2SnisMvmFY7jiPRQ5u4jt7dftPLy2b4vv",
  "key13": "28RxScGySKKdcEJ5v961tWj8KtVnYv8XwjSpNZUyY2tZiysMuHtUxfcXRCnCM5dNozhKyaEPPN7geYhzp4mqCNry",
  "key14": "2ZMH5L9ewmUYbwJtbVhTXSV9Zy6sgfD3LWPLS386PixHEYQmnNepqXEMwjXR7xPYFadXQ7k9Hj685pC3xf2EXSLz",
  "key15": "3BBcxFw79UuXQr3QSWvmdz46DdaFrkGcEwMNDdVqqjjmek6M7h5FnZvBpe1xA6Mk19nt2pCa8mfP38CniecyQJAr",
  "key16": "2S3ywWNxfXBQB63jmNK5nraX8FY7ESo6GprdhWCZUULWKENbckbX7exJD3SU7bBbAxZZVx9NMzi62YAXcXaHCKrT",
  "key17": "BoFij95Pdg2TLPSLjVXfrqtsvbBYqSNGT5EGvjYtABYMW7qfCdKXzpKuQvh34GPTL4rq9bX9fM9m6nASQVsm5b5",
  "key18": "2Enb8vTkgpPfv35QUtXNnPdeTtBr9KKpThHVMRnXh4amVFZTAx3rHjwPK8BPNvrq6G2tKHTJPDrY5rzdkEc9P6H8",
  "key19": "5eNRtqiFRJ7YiNjDMQcRRAU4ATnSCn8NcUHM5njgnj22xojWgtatj2qjQT5fi6SUPS2UuhfwXGJUPJMNpvZtMnE7",
  "key20": "FqbTUEXXi7ipHK7QrcG3jzSFit5ikNU9Y7CZvJp1Nw3sEfX1rAbskoRVtgLfiK28xuA1HC1pJiedp78uajQEf5Z",
  "key21": "3eKyHGRjur441jpipHCWi7fB4b5c3M89ht6f8iaokWqEkTGzrvixqczCm6DS18VjtZSaJDfv1RCfLJr5wMsSFau1",
  "key22": "3LaavXBAoMekZmzhSpYRaV2gfjm9acYPumpF2EspT1exr8GBWSyj71qjQgR8S8xUFwgXEHGSCTW8YqDH8p95FUX7",
  "key23": "5nANR4nJNxdS8FdFWqykfYWce9q7SAagFWhzX2QMQFxxLceVrFgW9DyJ1Bi6GuasCpJt9UoQFCysbsiyFEWHsznN",
  "key24": "39usPTJckesX41LWUmPAnn3bftcEAyTruBWhTMHNtLvz4qKzwQS9UDJJr88t1VSMZCdExmh4oXJVZX4NTC92ETwk",
  "key25": "5dNpQowizQXXhrNbHgJdR4oxN5XHGCMcPaY2YyXJiJP43KkepBfz1KcY4HdxSLWcncUUBquuzckxRjATALQoix5Y",
  "key26": "4CU1ATBn9xvxLGj544vX9tW4DZ9abuqzX197VbnS24V5Yu2ugdU7MCpPY6mygf7pE96tTieVMbF4GX31z9BRkPvS",
  "key27": "5HpY96d46fHaYzKGZTipye1UUGXPKcDTJ1X3Skp6DSAyh6aQU8fH489A5JiSVGux1FsFYyh9hFvc8HMZBV8TGTH3",
  "key28": "4KQgjwYZKEN3khtgViaUC7hzQBjL6ST3xV9Yb9Tvo777S5U9RdwhZLCwmJgVwFgbgV1mJYCQxEVx8d128MLKixVj",
  "key29": "2wxPp1uDLkY5nsLs3z7LtG6L2HXDKbZNMhcVBdKtUMd6nyE8czvtz9m5tEWS6FFfYcicTofjybz8Rbbru1egYMLf",
  "key30": "5bfSkjBhG13gXo7rrwAxNbwBmRcQHy9TJX3sFKh8oKBD75xTyv4YbcuftrW24m7ByXvA4Qtn8Qea48iF5uLCGPng",
  "key31": "3TeFu482rUXuYYMPj1PAP4F3TBeBtA8usfKHxz7UuaJf8Ts7KfsphwJbCJKGMFfHdeMtDnDWVsyvCABfW7i1BruM",
  "key32": "aQD8pgqdH3ygUERNkW9J76tPwsBmfxZSA8NTedmKMaEhaK8EM9kxWxKopUbvZBgFiqrTKNiXpuHoP4HhEwigaXj",
  "key33": "2zuykKaaShK52hmzu1mY3k8Xah11aw6mXPhX6XCsGiHfiU4bpE9tzBg3cNBJVKwEKDwtKpxjfLQnFe41bPJpPoes",
  "key34": "5PDfEJSSqANu9tfr12JpUteRpTX9RGaTMS4Pou72LcYJV82cHji91SubimPBNHrJJ8Dt3qbmzLELccEs8z5Mwh18",
  "key35": "UsXZDq6ufwR6jiKxtT1erN8qYDaXjScXHyGL2rGQViX5YsCmGXDueyFsFFpFJ4ZqT2RK9qHRiGmXmb9BJNKjtjN"
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
