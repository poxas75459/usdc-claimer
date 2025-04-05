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
    "2HUZb32z7CvSA7GxFgGT5TdX6VKcvDknk22VtsDtL6uC45sFGFdx6acG3trE5GVBbLJHfdkEXmrRCBoDQPCfn5yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zzkv3sU6zqhfMRVBjG3Ag89Tye7UtPx6vbA3WUwUXokGkPBq8Xr8yFCXe3jk74u8piPC1jAxJBThotuuKoJJ9Nt",
  "key1": "2Bpo7ixVgjqAJYbLeZmcNgsofa2VJR2yrLUxzZ5SMmvLA2qwDo6NoNZNxyqSkf4wGCyaC8me7agtBiRmrjqSUNxS",
  "key2": "557s6m41egNnFjYiKxohZkCrNjygYD1h4ooKj2u5DPXnpCCVjSEKfE2jKujmPrcNNW52VT9bVic8vpUxirq2zN6G",
  "key3": "5KTVNJa4LSyQCf2QpKXFvcSrVKQidgEQ9YRX28963JjNnSTNA4Hb9cMGoej53tkKjriJih3Devxc5YzBhyE4DW3G",
  "key4": "2MqaESxciAud9RT2dSwb17FK6oH4mojmyUPwi411Ea4dVmpZnWr8iHwKdtowYaqoJ7cjbaz2eALHpXc9i9HgRmxh",
  "key5": "D6K54PJ4YCJn9yQBabQrq4vBY9d3mMSjVYKXnLcq1Pc8sowpDQVaQ7WwAtnCyNBMNcLwC1a3Arr2LFWNrsWBpJs",
  "key6": "qP7s4HJpk9eFj7bYhigTmxTMqYzwcY6rNY8pY1VVWVAQrtb1wikL4wbgViUeR1EQ3VgexDKQcUHz9o6dCH7sp1c",
  "key7": "siJUxpdkmZge99nABhBgahV6ZbDHfmu2b94PoRqoZEs7YMd4MFf6Rh3fpWnRjVzdEenX5wf16294YADNQR8pyvW",
  "key8": "2XkNY5oS3oyFi8QDB2KDy52h9myaUxNeraUkiR2CdNHVUbnEdixMb5MgRRxNnM4pT8yi2J5BjxoL8aKZK16w5Gaw",
  "key9": "2EeyKVygkGaiMNcNsfJ44vQyV7hfxdxzU3dXjmsHwhj9qCrCYS3m6YBsxCmR6pRB8WezGzf2cFXHFuJ7NM26buLs",
  "key10": "2oNjCWjBKZuPcvd3MfD8T7eY1tW6iAgmszi7wCxDVBkd4oaK8sTGQ3vEUZe3v7988taQytbFq9SJHEWWSVEzamNj",
  "key11": "3ycQLJow8P5VmLL67GpBJSnkTv31DdPVAjTragFb5A9Rgd8JXH2MTUsHdBJXqSnZXGZCRwxbse1ejATVoucNQuEn",
  "key12": "2xyHZ39onCk6FXAn8cXaaUSDVGhhRT7JPCTpNTntxkM8dTgQAy1SaM2nBDG1PHzzmpQ5zEs26uofs8sKCBcsRLTZ",
  "key13": "3CVEXqP5NvGbmM7rA7SVEs8jAvAQgeprvTpcnNRba2UbNqmmfUrUa1c72wjxJnm7NbBegC1FgZARxcwqb24psCnW",
  "key14": "5ig2J8zxPgH9V6TTLoH9cRtXDY5jtYRcPHyQc5XrT3BAFvHiUJFgUm9oPyNefnVbGhiLSfYb3fuCy1aoEhNq1m5A",
  "key15": "3jBE8PPxgFU1uD1TR9QfzGgeXsBwPCo1A4r4myAfsQUdCn5HQKhT3AMW9Ag43p3BwGrR4Syoiq3Tmr9an8HZ4deZ",
  "key16": "Rtry9yKyJrLh1PRAE3namNVi8TUzzYpzcTMytDuh1BUVdF5E3o5a1coX57n26UoQ9zmbRn4Pk8nE2YWGsPyuzDN",
  "key17": "48qw2VZ8u1xEVmrLt4bc1jrEQSgioRbfQnH2eN8PkLN7APrcP9kg4vqJP4GNzzWn45jsVT16YW7oeBS53MfomdXo",
  "key18": "4DHAYipsbrwRX997LD47XiZFoGuPGSJTMyqf8birkrbyTVdY7R5u1hHov11sRWE1yBHs8TCK5fGS6kaoarXKXMqr",
  "key19": "4sSof4w2ntsTrx6C3wkPxjzqZTVtWm5vd9iodd4xjdWaZngy5zUZM39hkwfXsD41HJsQTPwqqYsDECsoYBxSgm2G",
  "key20": "2cDX1q2KyX9dudm9Lv9wURhE2BsMqUeR6zJ2HaLdMYo2bpvUYy3ZmYo919d7ZRdGL1uTmVxoCe8nKLUhxWY4c7cR",
  "key21": "5ZFtwfgH7DUfM2AhiZFnWpFYfQt4KhsgXegfFYu9zSw3UWfRjjPZEGRbHXywhwUBp95Dh7jipafhjEoDxFDQENso",
  "key22": "3E4MGNZTLsqZF3iKHkG1Ji6HZ2RtH4LgRgCyEzek3AN7N8A6KPBPs61eYh6vnzeKdzFM1w7UCeCaygxgTmyH9asi",
  "key23": "4hYTkjya98WzyQL7EN8URbikZWPbTxSMnzK7sFRG16bk7128TU9k2znfGUZqegCPoDBF8RLZHqeSC8Y2gVzTfgxq",
  "key24": "38gJh1LEnf5BATqWRCoVn8zCRXaPp1c6gKNmbXtDuQzvdCtisZT6fzMagRvwkWDmmgB9WpBzfY83oh9wUeUA46LX",
  "key25": "jYGYpMbkCB7WXqRR1ZSwk97MnkZarJmrPSF63WgD8FXoiKBjwo1K4mvqEehba5RTBQLyFujtFpcx5FCUDk47S7H",
  "key26": "3iZwwCAsGK9jubvKp4k4PH6QH5NVEr1t8MWq6F3orbC8Cyw723UoJwTxt4v89oLqYs6hX9KPUqdyTC1EQDp1mMfD",
  "key27": "64zk5Ec2wfvzWLyACKi7rcMJGEVAnKp2miZXugGqpMtTJ6nACoNyY1Yv33zMehDk54g57DoSAhgeF2UbQSLcyEsC"
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
