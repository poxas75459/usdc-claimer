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
    "618ffscKFPx545K2o9kdCQVrxSvXpzSJMcAtZYeynuSzkzUSHMi6bHUYxE9qbGwkpoBRDmXvnsYfwj1pM2CjKDL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2AvmpdwjHoBCWefYqyJhPqisCLSjcCJkeT39QigJGMsBSdRsSCBGcgvzjD4eDrE5KXSCfKFjB658CkT7SbWf4q",
  "key1": "DoFoWWytFwwPwhwKL5cYmmSDMacyH3kzN1Y7MREdo6tvygpzZbRQkiqMnvCXKBxKTWE9m2c3uzf8pXLHsGWpSpW",
  "key2": "2uRfXNgncFDsxyrLeww45MKwFVJ29ZuoL7NV2NDADx6pymcgwU7MeF3QxfNziKf63Eqz2A8Kbx2ee3e6QBCocvGK",
  "key3": "5XVUseQSoum5m7hQezMgZKPEL8LQzuZARhCDWaDBBQU9dQErrzC1cawcWUHHMEKZ3geUhAmQqFBZWMsgMcbt5em7",
  "key4": "WXrnc2aDF2iVDXg1zijEvUj9ZdYVvFFowQssJiBwPeZM9nVu7uoSvoLyDuvRDBPp9hxGJKjjx7cKxmieNg9DND2",
  "key5": "28qoKNEDBtpj5szo5V8yd6RxJTpP3yqGPNTXKLwVVb1vQ2VUSisvKa28vNotfEEf8NwfYyyx1sr5hBmXsXFjHNvZ",
  "key6": "UfbayzJvPeCDNWiFBdoqfj7Szok3UmcjwNLzt5HpKUQeWQc6Lb1gKjDjqika79wWK8C2ToohzWnVCceFBuJiNjo",
  "key7": "hDrdk5XFQiQ3NsgNgjUEKwWiQmtahZbNdpdy3tnr9e4tJWSLBkq3pRHX7AexwhuzMBXquLbsjHzen7tjL2zc4SX",
  "key8": "2XZkFhTUGcPERpg8wAej8Cfidqc9TNoM5ubRFm5X2puhNcyX6tVe1eogVaPPzFSUWKd7CBNfNwCSmauLFs5Dv6TQ",
  "key9": "2yvB9mdjCidSuT7nkZzEcbWAH5M1WDnjiBHVYw4Ca1ABcrgpom9BKYL6oNn35kbVpZmANZhY1KkpS9FHz7xPzhGb",
  "key10": "3XpEguZFBVV7wUJBj1kAQuYkR4GUBXD7wUgF3Ziy1m1azhuCnU2PdxZ3oCwGyQ4djN87eNehsngMQbndkjRA4NWu",
  "key11": "2ujR7Fw9hB6rSDA3SyRxK8nwzerNaN3SXkYTTERuAjYoRtvizoSL7879tFxzALyquaSbwehTJS1vXdbUPWaf8TaT",
  "key12": "4iRy6HGkZ77ERroaMBxhBWv7eH8jnSTQajH7A35GeZ8sjQDhibPwvBzH1xyqW7dRakcdbS4fjvjQGv9K3Tkbv6P7",
  "key13": "233wDfS1JD1hZ1Q2r9rhMppdpPkdvVyhLhev8fw7HvTrByuD1vetEq2p1rNqcaZWFAJJS8avpUG4XNHgq1NW7sRS",
  "key14": "3YqAmh5PAnTcH5piNdXgwufyTDnhpGbeAGiETngsAkCiE1nhVMffn68TbG4sFrZi2kBySJYrs5AZPLTMPWwke22x",
  "key15": "5Mgg3FnaPejuEoTuhwkDbHByfKQCqqBpxy7yZ2DfvcbEHMnZc8xAbQWah6viQfA5xoRTqbByfFc5GioRAnwT4Gac",
  "key16": "5mZwAteQVoJiDT1rUi9ufQt2ZZbjkehE52cMx6uuJQ8tbTJhG7wd6vezj4MzsmNtSB7Vah6Nv3HQtsPjc6JELGoL",
  "key17": "3cMmGd1GZAk7gzbkwxYrGPHXYxBCQqU6ESt6yaVqxjUs8peXsm4EYoRnFVT6fNX5xy4JVqQi3QCi6DJoRfKo1RR7",
  "key18": "5sTaxvqVxzaPc8BkW97kK9Lu3wZ2WW2APAqnrjo8ggZkrxSw5WPeKdXfbkYN9v1q3F4DLF49pwNgYxNMaUMufjqt",
  "key19": "56UqPTWQDKLYoPPjBPy11SJJZoXcQyqR9hWUf7ZKtifXLQ4rYE1RACjhXnnv15ggWpmX3kVR8TRHFtuZNSAXujFL",
  "key20": "4rYweGpJaJr12iuGx2jKd9wusccsbKBBiwczCYSssQ6No9VSZarKSRGEWKsB7oNysZLrqNbCSzZnFw3ibWCJxW45",
  "key21": "47134JUeHwthobGGeYTTeEo3GogSV42tqrbiDxVTfM2BsHC2o26SAA6zu1DKqpy2q77wXafepZHhEUkXseiJvYyf",
  "key22": "4aSJub3djbLce89wiMxsNqKat4a1P4qXjzZxUGkWXbaP3a4YqjFrRmNY4Bt8ebXGo5bYvv7jBQDcjCQRFN39YyK3",
  "key23": "2h2RJPgMRgXdGkBwVgv49nd8rhUyVMgWYNJoQHbUoZQk1XF9P39YMLdU1SytVnJhdF75fuy6XFXsB6jFGQZSGZLh",
  "key24": "2swfywnq7kJ3jswkJdXfheaKLJbvV5HpW6e1NLDVy2tG7Ff9yKx56v9tzeKUePoSYUnzKiqSmmHrd2M1u4FtRgTo",
  "key25": "2oYziLGa2xBSqBQFU3ReAi4YYGuy2yHhauajPFHojzsiw2FTEMTA6CU62yina9WnXNh1mfQejKiAv1u4kbnRAX4x",
  "key26": "2VQGhN5cov2UtD8oytWJG2fC4wFmbrXk2WjjXRQ8PUdyuCGBQ3mbin1jtmUVGFJVysGSCGYqWsqWBe4s1zSRwyuB",
  "key27": "5QtEXkCqcEJYiNrprBQjzpm9XFsF8NwREsXo6sGLpLQDEnpBaVQyrhG24AmFmBHKeALzRuDfDKQ91syGdhLJZbo1",
  "key28": "pXXK4s4Kfsxoy13ZqdMKQY1iTwYG9AvsfmQAUWjGPGSCB8batKf363DmTSdVoDKa1xy2TN8L6jYY1yAhdTiSpds",
  "key29": "3Awj6A3DroZfzceXcQ4MBL9C4DXegKT3M2V92BASkcQS4MbFLMKev6jEWfVpmo5ACkTZqo7vtHrzMDqSvKfxUxsb",
  "key30": "5fJNTSe2qBVPudU1gXTwY1a49xRCpQyQuqRSNFeckbW4dtZs5L9aWh2TRwWcVMCTSpRn8GgrC4qoRRk3rk1Y5f2B",
  "key31": "2hinQa8bjFDLpwKF6sMiU7zZfi4mbEB3XeBKAxfxE8f4qtPNuRoEoTUKSyDENRKQTGJtws7q25jpc3BzzJqUzXdS",
  "key32": "2Nep4mNuS29hF2tqaarR6xHpoU2Pfvpu7LfGsUrPWhkUKA19dJHzZSzerGw1obGcJYvrNNnaFSxePLyJCujL7YgW",
  "key33": "5CRsTGVVMtAcKoAqVGrEyw7pB4Pj2hRJdjyvLeubmsn185vPZSAYT3yfhhaTfAfndCxJMTBtxoMUiLB77KzoFaNs",
  "key34": "4hibDFS7eznchu7gtkdyuqMCVbTRYc1TXwqrfaUXfrY7AjUEwmFGXPKQkmw7BKtwwV9F5iEbgX7gyqtdZZby3GWd",
  "key35": "5GNZp8RcrGsQxbyajv2ZVEhVoFrxo91sZZHCspdowkbfckrRgBo8UKRauRjHfe6PUs1cMdzgdmC9Evr3XpRG5EYX",
  "key36": "KdJS5wXZBDvaK2NL4iYPhhcSxp4YPZ1W2rs8nf2R24VrQZAhnBpBtNdnZKD5diWsmQu6LXuy3EQCHxg7ythwFda",
  "key37": "4ByqmUfnMnXW2Khk6DA63ATo6b28FRWJCfAvTqh5rmVHbPLZ4xAdAtznZqok9fqvqGmFwQ4ebd5MSxBbfV3TZuC8",
  "key38": "2XpZs1H1M3iT3B8bKSTJ4jDjaYRp7vFGFk5BgXDFXGUH24NnNNkx7PS5RWEBHH9Hx6aDVx1LKuimXNZGShWonbM",
  "key39": "2T4bUBLHL9DFcRBAEQtZu7ERDFiSbKLp85NHg93UfkvNZwseWiAT8LDVQ9unV5YRMSvCVjVPmbSrA4QHKTasRvxF",
  "key40": "55brTnT8yqNuwPbrvZLS8c28mnz7oQJ7hCdQt5MgGoBWzTcGSVGTbBoV4hbVURLZdWYTkybvQ3faaXChca2XUc1k",
  "key41": "3QVgGNMPjxgiJDQs5VEwkrQPhMryXnRoJqudE8aXd4KVjPSB2jDu4bUZy2nQFxBdJ3LsGxZ9mCtWPZ3j1LfJmodH",
  "key42": "31nfW88qNXAN3Lj3ZfA8wQ73Kfaatvwk5MfW7KgkG6EkwM5NpjvDSGkcdU6CEVQ7Bap9eJzWaRXTaXk6QDz2tHeh",
  "key43": "3neUo5Ke8J5XG2Dwq4zsjYjMdHpmWYecQVbPWJev4RgscuEaLN3YQf5NNS9ZapSMC6hAMTYzE4fQ8e5bh13ThwUo",
  "key44": "bPnxqXUHx6aArNHvJnFFFJrPWYoV88DG5j5Jt3cHfEg1wLM3AN12V6DEinwsrYrgtU4GAtSrFSwWp7Qnjcbt9Di",
  "key45": "51fmt3o6txonSLJwDFsoRhnJeyPJC19PKRNHCmpeh4jYRYMgaPp1GsQh2PgN77spcYdJYWLK8LVckaub9y6ontJu",
  "key46": "yGCcpSFyvJVueDvgNhQagcKSobs1SoGwYGXFrkWFnQgkQzPmQqrfe3gLqUTjU6KujwdmBvzJUxCbGLzWXy7iton",
  "key47": "3bxokrGJDJcymkBUqwjKe5Gm4dyAmy2Dh6LTzxtwKgRYj45oGTTfWPSdW8qN1pN89yLSMrmQ43M1ZaKxCWWmgDxR"
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
