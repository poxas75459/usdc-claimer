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
    "Hhp46Ft5XYjLnaUpNBA6cyn5ZGtKjnLkhiemEc4DwSAvq3FLTMZE1KBpFRSenPZmh9oD3XTrypwM6Apbe4hTUiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jpoxT6Z4fiYtPMMDNWXigb4QZpd9AZ5aWj3e9Wz8QCuHGnPbZrbuJ3Q25A9ydn8SiECDbb1YyXSDfyZiZ2eUEpX",
  "key1": "nqorA4pKVu1waJx1xV2g7fQ6TMnFdX16NA768ffHQ7Q2e48635adfeSf8LA6MnvgfuyCq44doZ57xvSkFXwFFEx",
  "key2": "3L923a6C1arDby2xfkgAMSwZmmvPu8ickC7fszVxt7CDgVyKnAapRixgX7Ahdiw2NVAj3YarSrmyWkuWG2BpnAty",
  "key3": "3XNDF7wfAcpMkpavBJ9TTiUKbS1PtGaqELe7aRFRgop3a49GJ3FeTURVj19UHebooAJZoVJqw2LfkATwvDivAk7u",
  "key4": "2JtMAARuVxGpmPS64YtdSP9Saf1mocJg8hcq3ouuAeTJ9hWT8TER569tDJuz5KuG12Jrv8Q8hwGcRehA3cwSkd7R",
  "key5": "4T5gpHJJwtAA9ckKP4PakLnebFDckKBqj1yHK9x664Wr7CEWFpnTzCPwaKTs67WwKEhvgkjZ9WzhKuV71RjsjY3X",
  "key6": "5NzG78En56FBRnRDVVCtQebjxeLWMgagKmAZ7mSADjPiTCXRUH2esck2CYZtggHeDhZFaewoE5GLYhRyZkdSzorA",
  "key7": "3mKZCB7fetHZjpVCh6a56DsVvcoeaFC7RtfUaDz5WdRjB26FPDzHWpscuDpD8tBJdeRoUh5cZjFXtdJpr5j3zBhW",
  "key8": "hAH8wX3WVF9hZLD47xTXffpfYuDMf8m4NzN3nVA3Q4LR1e2Q9H37hCJe1MgvpvPGk8zXWikkZaamWnzFvRrcxde",
  "key9": "4svi8kMUiU4trEi9CcHzLtmvpEGnp69kME6GFWTb7ZwwyHzpCdw1KCcm4fCXnWNhzJQre3Cw7XtrYWjKRnHsnkT6",
  "key10": "YuEQGaUZRNw21xv8tjYeFiSinWRH4jxQkp9WDy8ZtFqPVPPQLjnrG6z8eQMHw4QTd3nbLkgZAPipWbTTGr7uggm",
  "key11": "24e6qyVAZBQRssG6oTUJWaoXh8CEWDsNTAAarnj8TpxohxYDz7THAsD29az1pDzQuiCTwk4htZA6zh2qAQTHBeVL",
  "key12": "3U3VmKCexgyxeUYhCmKhK1Nr5SF6X3tMQeYqwXz3MgXSSqritn4onNPHJMeNFkfP3BkkwZjzqwBGQbQAPNQ1ivXU",
  "key13": "2TX18neA97ssS3a1FN3s4CDyasXSkmu4xtFxo953MX2bDhTGTxvSwPgS1gXVPHvF2SAXKNuxdsn4noG6PuMYStY6",
  "key14": "5RNk8jBtBRwZjs3QvCBeaS1bXYgN7i37vMCzhew1A8TcxasbwdT5a5zHmUEKebqy3PLSG4VpTpEoxwrVfuGf5Jd7",
  "key15": "ZmwS63vrxsvwNh6o1chRfERjfLWnHjkPA5YtwAeDpsNLQ8TToapAs7kdBBTUSZL7yvKhtakhNCET2sphknXbGC1",
  "key16": "RcsHK5GgjjH9TH7aFQZpWUzkUVbwCcrfP8yDa8ZeCTyFsQpQopqECA4noFAJrT4Paf3szrDF4XmMKKM2pQJ5Yet",
  "key17": "6551Ypf1p4v5k65dUj3bp1wBAGqhT9kqdnswAprdSLwYW3DLnH3cgwZmPz3hd4qbc9LLJK6WDxxQs6Gs7HjwaivA",
  "key18": "4PXdoEGuHRVbxhcAUHKcgSR5y2Mb37miN35dyBi5u1STJKiQaa3SisxKSxfhZWfcSmthjmwdXQR68b1EWh7AKHi7",
  "key19": "34TBswcbhmK9U5RwAzqseDggHVoDYy4sqetHTszM71JrQ6Qe8BwwDZS5cauGWfkFdHyZBN8oBcfkqcG5jZeJVh4b",
  "key20": "3BRa54xmBC7NuShVxEtEsxwtWWUTgc21wfHo5DidecaQ4L2xbSuXYYiGPVjjWZhfJWMNNAAkKsSzDf8xDviuqzjz",
  "key21": "4CLnLuEak8FsjM9YKoHnRjrmZPnaGNVLEzr5pNArvEY3ZeMXv6HpBe9aS3NNZ16V8DCrgyMiwKLnAhJ9XVFJ34ZK",
  "key22": "RVqEochK7ktvsDJP8qzn7UVSNZ7foS4mnjNgPquvMX4kzMefwBzzYpwsumC5fpvyFYW97PyvvrmmEat3xnvcehe",
  "key23": "39gDKCjUJhF6eYzs2RuJjTFWvEP7DtGzwztrD9orS11MzCNCXVs8mfZUF2r2ZHhuRVxC8UeWnPUYiJtMqQGEo6gG",
  "key24": "5b3VbudcEXyHh5YYX7AxuUkNQZnjjTeTdyYojgjsJj9mbgTFvZZBacUSaxS3ZQHGJ3k5XS83aPiqACwTTC1fqU1c",
  "key25": "59G7mCxTbHwAGqDfkfCt1SsPqhCEFq24GM5ky2D4e3vGpFxEDkGjhkKEfsvyy9XXpPDseChQY9ZEhiMjcNAfDra",
  "key26": "4HKumsV22pDzamsBLxUe3fBF9xNHkYzR8EEkXMhZqFP6ZNJwyhTMQF7y1kJLJYVdc3wZTvrx56Yv2hh8t7XGJ7FW",
  "key27": "4dRNDn4UzZ3zvhiZx7oNmXHUafJimeAUCJ1zL8bARSyYjjvBEjPgcdMFqYk2fdXbHhtPezmVnQiyUTnUH7mxUDmP",
  "key28": "PbU4kKZMAUGwF9qywRDzYJoYSGGEqwM3nyhZbWqvzmVRVRh3CeiDuGt2eXLMABWX3fRujTzgBkNwS4tq1fhP2V6",
  "key29": "sM129hBAez85kDQtFHqkLinCFrBSbczsGTdCYpLf7bn1EDwvcZhCqiKQayXxjeyBLWu39xNJFPwj1sBKdA2uspA",
  "key30": "5CRHmewKrGFGB6vDGAFwzruEvigzSq69oDif3xgLbboRoHWkLgBhXd2cBuMeq1cpZdicKEajVcszrcYJCB5ZAFwZ",
  "key31": "43WZb7RZCjcyBWn78MEMUM93TsJLpMfbbUivZRnb1VpUmYJV6PtsC4pV5BguSQSDC2pypbSgahKDFLLhyFVHzr4X",
  "key32": "5E48KAMffANGGymEtC3J2rp7X5QXY9SKGVALoigh4aK68Yu6yBCRgrHzsRdAhhgSpHhaAdZ2e2vpM6c4PoYiKjzN"
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
