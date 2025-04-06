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
    "NTDKdACV7sLKMgWDEuE33bYd6e5WbbtbiWA84s956b51QbG3q7ZovnHUMYrWTnqUnRiQJg5bqBjbwT7x327xmXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxXp1i2ntskuBZbH2iaQ5eU7qaEfdR6r5LYmR6csZQJaMVZw4BgkTcGPriz45ikJ9c5ZonxhZbReyFJBkymwn6g",
  "key1": "4wpM1BwaTGtfEpYhp2r5jvV5dTUYHVkgMJAopnfn3HSWvm1HqRnV8CWvLFoWDu6dynQqNgsmKZP4eRJgPNVnSpMR",
  "key2": "2bATWbzah7wo82mvMEvozcvPHMkxQzyzkDQxGeBMQne89yPo6Rc7AeGoH6jxvLBVSQmvEYXVr9NUf887GSH498nX",
  "key3": "fbVceJk7igttfFqcwSiRPyUqCUjrXQy85xMTkesiJ63kcgwZnJ2N8aHQkwKXrkjMnVzt9tbF2g8UPNy4sY4Z8gj",
  "key4": "3E8MuqMvapxiavhkTZTYQ21DcTg9r4qbPazbBeA7MLpHEJqvQxcE5iJxeStKd1bjWA7kUvDuFKDguTkAbqV36mnq",
  "key5": "4CuJCxD6vr1neDmNJhqodHW13inwsrAzHs3qyUPGKAAxJVvxdxiD877DhrZPyrD7LxE7fmrrJCWQecu4ybEhK5sp",
  "key6": "2VnfugqCuuAdsDCXeoxy2HT4zDedTSCdABzbYvBJfAYUS5U8wtj2UnyoJWK9CjHeyTtoYWyQN6siSmsaq1VCjays",
  "key7": "2WK177SDnHDycoidXpBseetEmBT8p1KvkMuSqZx2CpKbJknK2R494ANesnukysXoHHQVr968Q6aHsi69TgE82NqZ",
  "key8": "4yJW3FX5KUVszaxoKHCuncRAcxxWAbgmy3b2uokD2kNWVXBFnoWUg3zaFDNTGYS6qXVTj8XxVAZSVtb8LrNZtbQc",
  "key9": "44bNHXMCryuyaji3DXBaN3Zr9SC3dVmHvj1GjAQxBiRArZJMTJiBTr2ALoJqckXikWodLNFgTinvzuv5TbigACaw",
  "key10": "2Cy3Av2kdkPZFh3xxuSV2CibBT3k9tremiaEAJqi8b3PQ9H2v6WAvoCuTNpPxskpFnDobnDAGdLkX5c3h4CUfif",
  "key11": "52K6rxfdVXJJmMxYdGt42e4ywwqN3GmoHvU2MH4fKwE9MRAPPp5oqJA1F4YQ9XG64Des7sULyPqmZrxProqLndHe",
  "key12": "Wmp1g8turY4AfeXi7VLqa47xT81Z9Qxw8jLZZex5cJEPNjjE77Mx1K3durg7ygNTaAzWCtsACHFHEV3GWukMKw2",
  "key13": "431r8L6uTj64CSH9DVgmxFPhkAC2g62mreuhjyrJiiq2GHCMTmxcMLqLBca4o2824Fz9tb2b45gBYwZt7yPKbk2z",
  "key14": "4MUhAxxwp3XSdFJvkiqLwVY1bon4kdZzw1etd2MwGmdMoYVSrPhWozqbf7gu689XtvfysmVJmX7QJrGFm4A9kpsF",
  "key15": "3VL6EWkhjVzhzNRTMQVYgNT5UHhfGjiUtGTvYsjtNLvCYxKHccvXHnab92pQTDU5GRU9wZYPZGTMtWewKYakcr8L",
  "key16": "3hbqKCAmJYaY9ejeaqo9jmW1VtByqR8JPZzLwcWTK4s6cSKhGP6CbkjwGvV54iUqVg7k8GyJdxJLBZr6oj91Zfb2",
  "key17": "3i44UcbBoxpKPWhyuyDWA5wD8XfnHM3bVhYRzQtU4bL4Z9HLDmVEXcbWb4ghRXwFukUGpq4y4Ff9tEe6tTMFFXTA",
  "key18": "4QpZZmrPgS51X2oGFFciCEcKP8od6dSQafW2AudNijVZeoMuLsshda75LG9FBz8YWYez71kxdLoAA6Ft1pSLtDdH",
  "key19": "2F5YbWsEJGJoLhAeEitxbwiykskRMotpi1jgjVZr6X69EYeC9qmHD6BhF3RxPvoX9yv7qcWeTAW9Vk434WpHrXRA",
  "key20": "x5vRHNx2w9FzENjaU1Y9Au6NtVJMei7curjgd4pnKgpS5oH4MK4e6iGXtd1vnSYCFsAPK5A3NejXMATLg16jQSv",
  "key21": "2hfUcFpVu7XYtkfsu5Aqj8wXLeJkEwjqfCBv52iyaGCWsiF9cLzUjmzZ36yQmibb79Bz1ufZg9dLfM3u5SHifJ8Y",
  "key22": "2UGdFR1J2eCA3sfLcj8867msGx1Zj5xeSKCZBb3KjfxXnG1k3p5J2g1wtfn4R6YuzK8iedT24m6KYDBDeamjV6wG",
  "key23": "5mUxEhNRqdJnL3RrrXXReSVPk4vsAsDWDmB1e2oDDyc4vkhLjgtQ3dMqdssTdrGH9taZTVgVntutfHzUvadVAmFp",
  "key24": "37BT5mUSnNoZoe15M3FWCV3NrkfYMC6kCZsX8gawG75pG9Tteb9s5PQYe81VNhCfTi1w7JzARZr9M3vzjrZKsn8u",
  "key25": "2WgfFKjeintnywbRFVE8F3jqu6oBs9BEcB28qvu3NEVY9TNpbwCW72Ra5i5RBh8CPH4RWTjmgxwSQoVYDbSjVMgn",
  "key26": "2Y7syLEESBNxSoiuM3A6AH2j7TpHZrtYFVtLuvrvc1j4kPMvoBD9SZRd9Bvf5umuuzMJWU3NWp446j9DSwtXtrCh",
  "key27": "EbXseQRjHvCX9puAuxvA8QPsQd6dhUhqZNBvdEjTXqxRVsenitbuqGY8r3fB3rRh1XUK3Gz2XyR5QThT89MdxtD",
  "key28": "3iGStHJzGPxPd96S1Xt3WMK61LVTs66vcVi6Y9wx6SznW6Vggfcf7XWpV8Mo99JdmGzQ1pPF1qyGwNWDgWqavNqx",
  "key29": "8YKaQBWDaz9hAuD2VrFdVHBm4ynsQ9L3UFQXP4dN8c75RDiWWtb3fU51JorMcogYFv91Lv3gSr56b4zMFKLJ9fD",
  "key30": "Z9fsHLDY4UxyeSmTDLeTAzPdi8JNbmyuLX9oXc8DW7p5qjJeA6VnP5UdK7kuV2y5HyXJWTUWVSaCaeFU9du13Sk",
  "key31": "4K5jtqV6nFioPXGVb4G4bFjrWPaMKXNN7TypkFdvoW1A8W4YvzkyPHa8xZixwyaiz85WQeH5UiTBwKTBLunNTmgz",
  "key32": "4aDNR3aFe8gDxBH2UjKyAeL1zjNHAm5V6uoFhL7Xn4hUnAN3oQfgWBrwQRritJyCovYw5ZgsN717mTGyj6HeDU4M",
  "key33": "4ejvchzmwnoZHKcWrY7hzMYbHjpi4CPzZstgoDxnTu6ktCkgUAShSFtfmkEMo3DGsoX3p5nvToM4JBYEMVDjiNCb",
  "key34": "2mGrBUQNMZcMXzaRWLuEA8z8DFaEtcTd9qB4NnbNeD1RmchnosJ5f3UKULi8qYG2uSG9GLepBELpMDnUVCmctTLy",
  "key35": "5y3Zj1WhGSScdCEzceMaxG3agr4WvWBXqg8Ma8aQwanSsntjbdUgMTDvxM2AUXo9cK7pfWg611J7Fx2hS9wvJWop",
  "key36": "381diABwEXpG9mZ23SzNFuQB3ZaXKTHSPcugTJNxo8oiVBNUygQ4S5cdsnMHDoESTsbsvKKuZHn7zoMx5Xjugkf4",
  "key37": "4kgXkAiZo1QEB6UDTkUxphXWrzv6jsciVheVf8mSpiUo3aDDSs7xeCw3h7zYLrid8BpeeqfwqnbLxGBPjnMJcJPH",
  "key38": "5zDj975KTVdKYeEWQoB7FpKw5xE1NRseJVzkhjxmoNvGKpPgMaowupwabSiacdueYuxdEt5Bp6hFtEkNc74AhU8s",
  "key39": "3195KkDf9Kzn9dw6XqGPzKnehwmVFiBoFibxk55CPaT2JL6eEdjD6K5vyuuTViVumA4Qt2xJym2vjGSbAGWA1kDN",
  "key40": "5B8txf6ELcRyTFhzDJNhx458Q3BAynFvJi9SKGhhB5p7FcRGq3GNJ4YKbQEtWViBwdgc9zbJxpvZyy7AwxoqEsj8",
  "key41": "5SSjwD4TsqeAGuoH11HF9yt8pvCWQqD4FwtDgvD76M3kXHdyMvcKKNJeopK1awC1oaXW7a1wn4W5hihJeT5M6wEk",
  "key42": "3kze49bwS8sxRkVRe2LULs1ExdKsUgQNbQcu9fQdSNeQTeK6FCzdwbf9dqgckbuvYAmuZ5qKREmChrUGNmFDRS9G",
  "key43": "2srZGukDXch78j3avquB6NBU5kG61uxPin4CMFZucv7PiMRc1o3J4TYCQucy3KPDTecTTV6rT6AK43wPfHHGjWK3"
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
