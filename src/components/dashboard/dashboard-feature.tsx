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
    "3q7gPa24QxVAMaXFef72HsQUwLEBRNrzjHa59PHbQfrRYiEUVggia896KvU7F2eHw4zKpvL7trfrwSRYDsYtynZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbCSAyhoqJtJi57jsJucJQeYNFGtD7xMUGwhrKVa1F8EkbP2bYZVrVFETNun4MLLkXZjhnvnsTAdj8Sb63VarnL",
  "key1": "4KyGZPDEyGwK1bzqvYestfLyF51JPk81uTqUiBAhkVpTmYw8CvWeq3JoLqZkWuqukY2srkqpmvoMo2NjSQypD73f",
  "key2": "AE6wHhCKG5XJEuNqofrkLSFd5vt3KqNtQqPM16DNEQ5xLXLaeUNv3VQCDnNLL8FCEWb59Ev2RAwmssKqP59jKk7",
  "key3": "5AyBpbr7qVT7cUSYwjf5yvMLzTNAG33JuwC5JdzdB6ghAZQvGm8teNJSHbzmfyPw6N1agMdHiTpHmBqTQUhVqva3",
  "key4": "vWfRv4rMi3H6fWfvaxYa2WRebqhM9hxr3v3MXMcKUTfgW9PW1DY2fTQSYViRUHaGDcaT6NrSBSyMcXAE4ztVDUb",
  "key5": "53LutUdvsrpS3BqXdZ6itFLa5xuPKB1UkYj3E5794w76ZrQP4Eudjkw4eQwajSh56zW5uXhy9hLqytKDazz51MWi",
  "key6": "54U5WbpZGU2nuS3xswyvFNhEgPf3iHikQ2odxJ4WeRdJmCVrhv7gPh19waAX1fKaUJrsZdJruHLSKS1EmFXyxNSM",
  "key7": "2FiNEaXaVtB4twz9hxJ3jzX8Q5JuPdrWDTQ4QfCb7rkuBgCfRLemVQCWmcs8jRMCnDYRiVaR4uF4cBFCiHVqHo3N",
  "key8": "3Gr9uZAxVK1iLi9XP1Q5V9LHWvTP5yDgDL6towDv9EwU6CLKRCiXWsJP2wCAXPUKwmBDT1yQh8pcq6j2y8Wpwydm",
  "key9": "42SQLgfeDxteHtmiENViBNoqm1Dz4fmNFA2BW1diDrbbpa5PVWvfacxjWdbF2WdpKW5DTYv2Qoz5rnzX5Zta3UD1",
  "key10": "3v98qDdLeh1vqh5YfSUhR8nFJqaF6LVMKZ3utbWzfhtCxZh5xMgistsqyzdbQJGAiNPE2E25KWit7qZUynPjzVXm",
  "key11": "54Dm8XK7oWEY8MU8Hy8Q1pnHdweE8crHyqqkVPvjyvLvJybv7T5XfCWHMis7bjAgbjkGVA2GDLPuB7R7DcWTQkdN",
  "key12": "5pAHmjjJZeBZEW2pJqJmXYQYZkmr1G7WpNAhj5MJq6nzhaTjYEwbd5XtTtomd6UpwiRE6aAVRajwduYX3G68UAoc",
  "key13": "2YctsNsu1oFuaCeThYPx6btQbaGgzdcuiVBH5cquV5fARuLot1gYx9CJiW1CYAsPiz5LySiZZkA5j57a2yXHpiCu",
  "key14": "3pxpKdbAAdSF5TnbY3Qt1oVztkWUj9T8TuoYwUvj2r1Q5vaCVzHMwPr8DUWGkuEQU7unuVzdtE2aDSdZwDLwFLLc",
  "key15": "2JVB3dT2fu1h4RyVkna7Z4JkbNMQMtsMeuX73gyju4DYpVsNA9uukDUcwK4EskbHyfnieEygDJ1YjUAhtEnGcEa6",
  "key16": "31tAbASR85MBqLH5xNpC2VzNkdBZ4JuJARESrj9cBqmkWp3z1jRf853SREs6gunEbk9W8FUMXJHzVaHnjW78uWZN",
  "key17": "GgYCoZCLD7RkUvgDbY79ZdRRxSNq5F2jx5uyHmQgGRbWxEyr1HzL6DqrZ95mAHu6t47KxzyXfnruncJJxZ31Qtw",
  "key18": "3kE7UMrg1GLP9bXYSmR48imXsnC3Gu8uMarNDZfuTsM4i9pR2vm5t5nfvapFChUkSV5JteUGDqZSvZjarFnp8hZv",
  "key19": "33WafPSBgVfX7tcjud2bVJcf4LSms7MnHWEJpYSK8ji1sDBuRqKch3GNjJmpEa2cT3e1ciaqBrM5jKDscz9RtD41",
  "key20": "3Jp6RrqgJhpc87nkhppPwYPMKzXvBwVLDrHayB5pA4ZNtfwtRt5MFDsvBhhtLGWZzqc2yZn9J7PB7AAo82FNWyWA",
  "key21": "23kgckL2rcPPi9W2YwNd7xpPJJvLs8fVuu2YpzE8KQZjbbzzv15EDJvcDAV44PwESVe9WafAeDX3Lwnjq3DxDh7j",
  "key22": "2b4F5Tgzyh6ugPy9edZ4NhzNqNaeRu2iXbtLXhnKi3q8SabbYV2mMgJswJkAq9qGvkvNDKnFXFTDkke9cxbnA1LW",
  "key23": "2t7omnxtBZbeMBcETRULaQV2FWevJ8FhWRnEf55tVZKNGweaQrXKD2j9aQ3vkotoGMByAiKc1dFaMeeVjM53V9WQ",
  "key24": "2Xf3BBuH8Gs1Q1CxXhTfxpB87i5PXTvbv4wER6v6RsKRRSn1W7QEoY8pqP9MqmTya7wyQ3cDND3h4vg8RheCr3cK",
  "key25": "S3pmsaEYs55hnRKzDUgVbYuSgWgWAax4DKrtCJBjC1VbJyXLgMzBhwuDvHpiNAH8gvhYGoa6kEH9JGhJbm89Wpk",
  "key26": "3DH9UFCQXZwwgpQkpwiEyYg7jdBrnQcXYUs3ww2cqKWwZ5JkeVZQiYxTPtQApb8qFUkDfiUSM12zJD3bn6eAdEpc",
  "key27": "5FgtC2TnzoRXZFCFFRvKQtVU8JexTu7QXJN7q3pejKC8jNPpUq9StN7NMEeGmqyHdWfn2ZgzhKecka3gnDkBtqS5",
  "key28": "UaCJpZasw3HRh9ZYmyMZZ9hB5drf7PYEUEPS5zYB3x8tue2tbebemgxkHhZYERDfRhVwpmRUYKA9XfXiVpNbcfh",
  "key29": "4jC6W8JKmWhVtYTYAMjpDtjUWdm7PXt7XjoY1xHf3N4XdCpG6PdDiXSTZQxd2aHH57WvdAP2LXmLenRDAZNbgPB",
  "key30": "2jAYB13TY2yL5dERS8gLJjrsSPWBLBRM7aswVWLrk6iEziUpdtRyV1AXnr7DnAuiPJ3BLDuKKQHDmbADTUU8sgsv",
  "key31": "3uybRUvCEZcJpqHBX84sPtWmNiTN3tHeBW1G8qcWgiBDBfmN144YAT5zEMen5Afn4mnNFTivtFmehRY9WjSuPHzj",
  "key32": "43iVtSgitowWRjakMwF6ri5ggLB2w6KeyKbLy31P7VXawe6RS9KKsT4wJcuimSK77Gh3WqroUwRXi9xvEroeLCew",
  "key33": "4XRet2mRgLpwx2VduiXudS3hJDsZ2sYERpiC679CN7yj1eG8VxySU8gHkfZ2uB9TxBPZw5Wy4xWEEmLXPuA7hHNg",
  "key34": "5aXrAuPbc2p3CkSDetAiMXJbaY3RxTDFCUEQBaHrAgfBGzvjQQ2xL6g2z4C3goUFH7DYi4skPh4CzhkKsTJB7eNP",
  "key35": "2Jqh8Wa82xzcuHDnSh2BGE5crA2xgejBrFGQnVDvQhWpTcYfCAmv7Y29B8mE5ENR1kN2USAfQzw9gSt3Z2Wj1Ago",
  "key36": "2BdSgZamiin1sPKsJQzAkF1bP52u6Q86t32U1Evuz4CF79j3RRr9vTa52EZSssuJqaKEVkpEqPHY84jUi6jzurdd",
  "key37": "YNaRecQf4UEaLpvipukpSDMwq1zr5BHKvyzAJRzzLi3jXvzjxnwnM95nfWafUZbBk2tr5Q3sVG5J42CjeopkQuS"
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
