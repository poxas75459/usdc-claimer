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
    "3XpExdCSBorHQNfcNNNyqYVJq6CmexbguncqJDvie4DxjDehDmQexxceQTDqymWDyiSuMSbfNsQr63qmZw7RxwVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzBiA9nSHao26D2nd48cxAmZAt8eCqCQk25z6GP8NUeR7Nxi7oEYpJ133uhPsPRwe6f76cT9p9oWLj5cUfjhxJo",
  "key1": "Geaoz7f3QVmcyFrq1LNSqZYh4kTZswMuWNumm4xDYuFXVxBswgY59rsediX5pY22RgppUd1t1n3BeaRL3Knu7km",
  "key2": "5irpSsWGybxBgK5Fp4xkU4kfQ59ZSHcWZxoow3u5Jc9T7YkLXskYzP1pfG7QNH6ATcQDjXKUSpALpEQUeRSHJhRN",
  "key3": "4pvpHTQFJCbtWbykgsf8MoBqmuy5unXdi8L2R7d1A1x9h4EXnRGcqCrDtoNiAhFyUTesCV4W57LuQpdUaCkwiDQF",
  "key4": "3R2y2hCAS96EtVZ5KaDvYEcXTACVStEbZrae6XvyAwLvNY51zo7REzs3CWN4bJjGAcnS71tUvPCGxsXHwbNFs2eG",
  "key5": "2Cuazzbm84ALYPCzYYQXhMBp75q3RvrvGjqeSukueSmHSQZEpXgxbrejx47ZdWkDU9cbmZdSYNGzLQkm6rxT7vwX",
  "key6": "2gK6SHj1aFUie2C7xdzoaaV2HeczNPk9bphQbqyhksPErQMAhUD6YWvsPre2aupaLdmrePJmw8ei2YV62xyF6xZz",
  "key7": "nwZF8yqXaBEqpxoUSTgnPPMwvKypHRCCqQ72CEkVmx6jwyVNPqQ867tbYADmCU5DMHX5GcWJ2CkkCvKWZYdL2sN",
  "key8": "nbBZ5NYWsSqxpWpKBhj5Ps9kNP2nKcLXichiTdUpwJUCK49dvnbYW4XhuowaSKcNWTJpYWRzwKyzoobwgQJ1xf2",
  "key9": "3HbhwtyMcetB8FAatZ3HGaH34eh6ttuPCTi61Xes7Twiq7JFY6ad5txpxNV1zufdHcVTNH1jgf2EqBGVyQyM9crp",
  "key10": "361qjmXvzvuWAgT4tHLrf9TdnPBdpiD48gXLztZ8rztem2muNNsGJD9rokkhSiaMi8B6Y8M6FxztPkkzAmN9LCDd",
  "key11": "4nZ38RbdngrYKGyMcRkNbqbqosa4PQ7BtyU6T2exCG9HK6jhE3jm6BFVTtES9NN5SP3J9g9hTa44Q7VQ1oFQbmx2",
  "key12": "2Ubf1qfsvxyMbvgZdW2iZY9xcPymk996EhmJyHvDSZJWFZb2JxrRn6DCY6ARu1G57hHrDrMekoBL4DWF6wxdUBN5",
  "key13": "46QDXER8zrA47Q19STprBvBL9fWSLfPWagdjCXtFE2pVYZMG6BrfaN7pkrTSbPr4pLnXRZqo8ycnY6PSHA1MPxUJ",
  "key14": "42Zd9Q6BxWcq39qwjmSknmy46WMAdJAkwzDpW6F2H1tL5LfBMbsLNu3fH3bwf5UWYRBd5k4rqj7Btd6cTuC6w59f",
  "key15": "24q3dpge18osVCn7eCh8mPYKGnaL2wEn3THm3TsT9UPsJgov5EWiPZY5t6jhNsBTbbxCjkD5hyQh6f6ueR4nXWyN",
  "key16": "38L5a3AciSXqEAoQuATZHDuvfgURqP5zfDt8NM8F3SgsTb9j7JzQym17Xf5zTAKzf3AzAA4FzhorcZBrmGc1n8vG",
  "key17": "2eb75MWybUKeSJys13y1Qr7yrrRg39PK5Yymh9JXbj1aeWUNkZqgKnP1baL9XFvUHHXNXAbyNs2ZTnbcDtK3v1rn",
  "key18": "cx7UUr6tDxUwzxkg14TtBMpmtdGg4VaWQh8soogTanUu86jFB1aCTiL49peCaZG9jfzkK1kf8ph3LpprBrCMBFf",
  "key19": "65dLX6iWkP3MHEkEtcy2N5vu1q7d9eiN2fGcNCwX1bKbm3QTeG7gXjsPsiuHLxrwXMmoCMUDQ6S6ob2YW2h7mcZ8",
  "key20": "536qmxh1xR3z8gHG4yt4Sjphx1hDgXpFZ6B3Aim4oKR7NictWj2a6NyAjWXvj1pjVZ4BrwyEeWQnuZGXFswhPcSt",
  "key21": "5MVBCNxsJb7VfEU4JVu7yGVCW3phGn5KuPeSbercVRkLAYGTkWPr1MABUDxqyued2RcAHAYi9vC6cSHCnu1B7H2N",
  "key22": "PW4jAUXjbm84rvYiHv6U2raJ5Xw42tEkAVBBeqh8TrcakT5E6WngfSeo9qhy2fU2KqaNC3CgSjsw85Ti2XHXMJc",
  "key23": "ZXeuLH1BX4ndTWNDCtVozmmQ3hPYnx3RpmZjWT3wCJJxEegierEX4gbn2ihLdWmd1hHEspCviZte7eLyybR3K1R",
  "key24": "7UBKjmXUR7jCEam2ZS7f6EuCq3Npd61bjQdjxa1tZ41efAFWhekYTdKgAQGP9mPqMPmMFGKTtdnTxsmVdeNmFaJ",
  "key25": "5ATro6kMyLfu7558nspdhRzWLmR5Gchmrj9TogUjvx4jc4zc1oTfSfNbQeg6i24PULKsWmwiXu6KmKAf5MSmVhRs",
  "key26": "2mfzMvVJB4xGAbuVLAgda3NVy6iHUE7G66HstkWRiknZthhU2VUWkkkK94XLnbA9SSYL8fGJN4WfpJX6qveF3kgy",
  "key27": "5BrBBV6Pj9udA4QGCzPdGYaFnGPctUrzj7wfmYxMGckdu4ykwzDqE5j5MYYbxjtsvrxHaxbd6NaQbH731LutWGC5",
  "key28": "meexRRQBVTqXi7Kse768RABGwMVFTkcLodmgHzDmyxCTuveYbhP7rKkY3h2EUNKi5jDzLpdcCc2gKneGj8gXkC5",
  "key29": "5QAo3VyZ2fEHPRdZyrphitUohLG4XVYaxgWpLYmPT5pmYsxGPhM3yyiUPmkZ4q5uhC9U7E5CixFXJp1Nr5rsHTHv",
  "key30": "3cbPe7RnWvpjgtqJ1uizQMMpNQe1UnJJp3gT12y5f7Jg3zgVDgqoH8CQdFvcWRu3ywmBS7LbEcKKhvJeX6nooUuY",
  "key31": "2qVMkvEyzJgX2LfmAkEnxMaq9sANPRWjUaRea9yqJGTYLbA6qC946X7A5H65njkMhRTt4CCqZ3esZveyCySzCFo4",
  "key32": "4tiJ82nhFmrm2xxLZfZb7rn31rEenGQpgHJwYJf1TYiCeVbxH8BwT5Nar4d5PdZFQC6Puqs5KuqbQQCpRxCx3dGx"
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
