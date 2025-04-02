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
    "4vozir3RH3HHAfcPj5pTUgEQnMm4YqGDPKGFkD4s2SD9SG2k6jin1JkN5wrgSuw8gKkzixUM9v71L5G5aYKTxQ4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvsnLw6k4Ww6vSBZjB1b5inCHWo47F1wCAa6dRJscWSnkK2PsCVG9xUCNfQR3ACxGNS4jCYwrvPfFzsrbT98UBT",
  "key1": "26S4Sg2786d5KzxCdhie3Apvo7NdiRAGPvBNKLodWeiiYMHkGKMhAxsKShqtSYqmtvfiSb6osU4GcJuFHDQgBuv5",
  "key2": "4TRAtJv9dFE2b4RXKfQQrop23VuzVY8AiR66krKZChcphbYm3Vbs7ALHAuy3YKntH4AGGCnnrP6sapQ7brvhAzvz",
  "key3": "4NXGfSb1i4o2cr4vAgM3eJW2mSaW5S5QZo2C3Gq3UqoxpaYCQFPofPVFsZze2SeVaveEFie8suwJx8No5hSQMfJz",
  "key4": "3fBz3yB3NKPGEPbxJ2evthaAT2XtMYWeLYBiFKyNvFJYphLDDS5oFJrTyeZQmpjtbcqx3ySk7tf5GZSDUXMLWaQw",
  "key5": "8FrQohdAuKL6txCHHiJEQBTc1NinWzcgsV1au8SksTsPHTHZiJnc1KUip4tcFz7Uc4wALpCfT8PZo79ivBdXiNM",
  "key6": "6jnp2J4jTBQYsZfXZb41sE4VcyeMYJojzc1ABKVpkgJeq9S3sYiFSvsg62ct4fd5BTybJQxmdNJdQtwW13tP5Kx",
  "key7": "2mMoEfNusYCWLY7dZPohNRSKkxcixEHP31MVtHQRLYfjZo7Fyc8eUSzeZxrfWNbm54bPUAGVQj139SfN2CTZBudv",
  "key8": "3DtNDxqhmL2FjqZF2vFsG3w3znnYFQUcWLiiqiatnEDZUZ95v8UhK98AFPVpvict2JD1fK4NizMtaNRkysStvzbx",
  "key9": "3BUEMNzebE5miFHvU3pB3kxRjNkKNXysX2ZWF5ThGQC8yVgaHKmvRXmNpRe2mxfqKzjVKeLP9oPTDic3xLbaQxhf",
  "key10": "oUSMj2zrrvEsNtPrWxadSSGTYZTPP7mGEiFB2DeGMwJky8fRPHUp9B2Ja3RELp5H1NtQ24dfRBDDVREwBQVEwFy",
  "key11": "3hxSDs76BgDxHH7GwzfgUTzhH7qhEkvECMMhZBnSq3Q8D2irhNfnS456h5AUvVdCTiaYoqHuM5nJ5BB8XSMGkuEB",
  "key12": "RA8REBs93aSCP1ATHC3mA1T5y6kYsqMTreCj2oJ4bXK9rn1Mc1xQL59UkpsoNjwQJDJFgf7HB2Yz7ZtXNmZsMMw",
  "key13": "5pDHz324LqJSoU1CwmZHan7Yu61bXoeN7arqojZyvkW54KJbmaQoKymJzrMgfo5CU5BGK51Xk9FNASXmq2uEJqe1",
  "key14": "3uf4vioqMXYTnpPfnbTLbRzydZ35QqHsMCzHTk5PRenULYUSnvvGCyeWCgSsSrdFQcZ8BqimT8YT5JAWtYGyab9v",
  "key15": "2AhE2wVDjy6g56i9rdR4Sf32LvP62Dqe6bAGKm6mMUXBq7MhtWTP7zrpyRxnittHN68CtzvZdFBzecohVmnju2Tt",
  "key16": "Psc5NTCwx8f9rXXmffAGERvgxN2QEmuQBbdmEQ5J3sEZKbZ8fQmVwx4DV1WXmknS1dt8UDmz6ojnsKwrprGXwW6",
  "key17": "5QmXrjDuHziejnaXtHBfsFoVMQkeaQV8ZLXBGEke3BzX8asgNMqhEE3pd2dt2ht5EWt8tsFHciVXJ64nGXtqTxSY",
  "key18": "3prWTxr1xU2hBVSbFQRhZp2LbFKozC7xFuJCENXBi7K1crMo2bb8pGat2cByVMtsxVXYc3JWaskTb1RBVQT3YeyG",
  "key19": "Foawy3XJqhNrGaJfUCwHvJ4HX5rT3quxPexcGhs6pnhnt1GTpMr47hSk1umG2GHd6eYxR5kj7LW8MtsQxBpotwQ",
  "key20": "NFndcEo68brVVchqBqHjMnU3bVPzRcabqnMHWvEgrRu4kN6ZovVJ46e3QfT3UF4mdu8WJhGuFsrxvgSTxm4ZtdV",
  "key21": "4ojYnRrpeY81YazXFEaCKvCrRAzQhYbN6cWk8keBXEn7GiWLMs4X3QNuKLRh3C6goao4XZ2EVRs62dJxGfaSQBXx",
  "key22": "5ySzYCwcz6P6n5xxpRWFXqN7A8ocoLi4dQSgS218oQiQYibAhbWHQ6QRgWZjDFwYcMSaqxQvGv5wD4gwXsThVA2o",
  "key23": "5mkbYikySxGNQJgCpndnA1RKF8WE88Fh9TJFxkHszDt3yxvf4ij5YgF8Hu7T3TXeGGM3CtrfGiqyYdfrrX1cHfT5",
  "key24": "2emGhc3RtMtvSYUWcDNhFRtVE7mZs3p7cvUfJ5yqFevPfAedjQDfus5jNqdgHRiDFeSRv65iD4GBJjX9zRDY2kiZ",
  "key25": "61BFnBx2i9gXSmmx8WY3iKsvcSJ7kFhDwN1778typ4NJXd4pszsfdEf93izaxDRPkY6tzeqj6WoHeSMMNAb5RuuN",
  "key26": "3RP6ereyZW1JtGwGutsifYZsA692ERu71rGTwZWi29SPrBYk9zTzWTh6zT47Ff4heSpKde6gfdTqowNkUFAcE1BG",
  "key27": "47CSPU4G1KzoBhnhoxh9k3y8veyuthNZwHbWJ44RKFF1DU7Pmts75KfcGhim1CrPub4hWLj54aboEn5LDZBs9Zj7",
  "key28": "5BEicTxJw2uqjFiKVzL8ByXg7hcBPkbgKcxDxK7mvTKu3cvsrKZUVyi3GRBkFkpZ84dWFpg48GEkm2VKzoi8AW44",
  "key29": "rSwra1RZUhyCSX9macbiJBnvhp1DTySGqsDZzjQgVJgwDaiUEWF2FdntX6rm4ikzzgTrx2xa6WKmJpynxZ5okfX",
  "key30": "2FguvZAsAtv4h2bJ3Rxzxofqyp1YAf5dZX7sBoSqWVDXsMji4WUqxYH4t1vCfAWafc2o8iEEVseDn6x4yvsFt9Er",
  "key31": "2X4pfLWrG55wsq3sbRNRHyoJu7uqGkTdXNHyPdoR8ccCaBTZwjEYRUGgacHtmu3xizrkhSBi9YUaPFa83wo7Bhc3"
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
