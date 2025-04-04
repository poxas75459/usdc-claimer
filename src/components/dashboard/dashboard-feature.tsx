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
    "2jnZMuvth7rgDLUDtMy3urFbJJ99evZMA1vKDSQ8RJBtxQh8ZMdSYLAeFTwCMDJ56DpQq3zUQpcXk3kpJbo57TwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsD5dk9reKwrs1wRbcESQocy7G3moJsRKcn9sUF3GngTUHp8kRMgQKNMuyddSMW8gdsArzjuCryKh3HpstQKiWs",
  "key1": "Fvwas9KfHZ67LmS9yKGNxRQVE7feySQoVdaaYMm32oaTj6JVAcKGBehbZHJF1VdqFcd61n5u2auinTLZb4wc62E",
  "key2": "UpJ6sgdNYJDjqWPzAxJA63Co8FbdHPbMwmVDD4uUYczhLZ2iaP6hinwaewzsdhHv2N1paHVE92V92Sp1kan7SB9",
  "key3": "4ho1M42CJXAG4TA34ogiNCqxnkCy5Sp8ZCLmvrBFmpBekBHKxNYLAhVCakgCL93vTP23PMaM5YNA5zHkys34uXJQ",
  "key4": "Ya6f5BFxXcn4MhVWUsrYKpw3oWcK7K4UQGLpmFy74vWJSoCHEKrQeD7VRpdqXYVm9Vxp5MCJJufUo3URe5xY4ug",
  "key5": "24jyHPo8zZB7NQ2zJjjSmFRwQpbmvuAsPiZwPQmhsExvkVNcWh4Hn4tWxif8SgtqaWsN8Qtrc1cD3fPcR6iXvBGR",
  "key6": "5aZhswr313V9EfWFCbGuXSk83tGBpDawU67r7qbAnRzxLwuqQoSGaY8Adzr8Xt85tt2ks96WQddF3fSHQVQajcYB",
  "key7": "2aNpB6hABmK9GciSSG8oQi6TXY1KGkzpfMtc6jpyHQWv2yoiXB3XtV3hcSYiZyPYWtjm4h8KmrBMjnFqTpreAGHi",
  "key8": "4SAX4vVg315ZZ72w7EMihQw5V9L4gjDiCxkmru7j3tyHZoqpKR7kwbyr2sfRqUjc9QY5sWvLZKZEXbuT2Wwgj61T",
  "key9": "4KWvMEVd4eGJ5DpifVbg5hQWnVt7QrxWdGy8XQe6o1s39CjpBy6K87NUymP6gxoYcAp2sHfngV1SisdbxjR6VJXz",
  "key10": "5QhqJfDrixCjSifnByQCwEN9xvxvWUVNvFw65RhSNBY1ETMPPKiNXrC3atRENhwK6aYTv96ctjEdhTkiq2Yit53Q",
  "key11": "5TPaBFbG4UKwof67TaCtC116hKToa9aKkbNWVymYWjb2S33pQBQnM8Fc8wqCQeTbEtujpGefT8qf4JxiBbBL7KvT",
  "key12": "eSa24J2w5i1kPWB8QDaWFMzfxRrENo8fYcyrYPauNKVyv989MkmHGsSjLePDV9QDZceNnYhR9KNZ1tThc3XnmAE",
  "key13": "2vagDTZpDFcjbUSzjYcdR5BCeaPoMMzyxcDznDHwZ2rshDNN5JuPHCanPa394PDGoQe2P4DZsNNtvkMGrS34cpCX",
  "key14": "Xtju5aYWGHBafxz1p4DZeHvY5zpCrY8Yvs7eha6YaaEW8veT4SrPdhdi256AywWkghPsqtGzAemnSs68CwQ2afh",
  "key15": "3cdKnk9hfbQyQMtEsLrzDZzDDQm34NrySRCENXAG5fGU6wPLCWzq4ZohkBiSgH7MQ51So3mwdgZUf8wqvDQNNRuz",
  "key16": "2svrbTnooCck3UUpq2Ubv1C5ieqWp4d7w8rYu3CgP4E7C6sKyiimcbGSqyzRqAahiceG6HhRX3LKXMFi4wuwbkuC",
  "key17": "4tmfYpTufWCxBhcDQXd17nqY9rVRpmVvVoMS4CM3WMXNpHec5q3Ki3AawvkUwx1fanJV5dtBVuJgv94iD1oP3Zaj",
  "key18": "4QRPBg6D8DcLpwyu8zYfCaiNQy7rxUpaqoge91PPHmHZQpiMVR4jMYSSnaT4Z3qcQ1zyboYAHkXYm1kLnwtcDSWC",
  "key19": "2mBmtcsXVAhXcUtbH3h6pJBvVDaPWuCsZ8DGyKAyNv4YNhkE6bFjuey3Gam475YLnmm7ef8dhGWQWwD6yWPBhCgC",
  "key20": "3hMDreUXMeYYjG91RDgbZEqdRF7V7Q3LGmdoTLFMQLshbaT2DNFj936dXsnx4YNY2gmya7vNCbU6ceQdeAzkqtdz",
  "key21": "2iYAxLH8ExMVXwhFSXqaAZ8MNJBbkGyVfFNWeAK7jtKjKHaXYZN236xCsKzfZew4RFyFrbVvUYgrQVk3AzxpYoea",
  "key22": "5WpRfdopub2oSwrNvzqfK3BSWw1xn8Zniyjq62itpU93u7VeXTw7M8dU9pY9v3qm43FL2jZ9xWdHLgoe8HFXh4kf",
  "key23": "471kYrKCLfMnR9V4RXJmeFFSizSeTTCfKiAnM2mBTYJekCB797GusPrkokXKzDWfUBjve9xh4Hnjyjj4Tx1BDqLf",
  "key24": "5YQWyLuhevLpXPg1R9baaWzppZcepTVAczt1f5Ho5SRoCm2HHSoPLY3uS371KoQ1UH2fYLigFePVUSa4by6k236s",
  "key25": "2yWyJyN7L5SEDeZLRWWf2AGtSGLA2UDCbjBXs8RrZmss1LbMc887HmJgsYeXeJVtTGge5ukVU1iihaSLgsy2fFza",
  "key26": "r7idKQRpfcXBC6m2iT3LNDucJMyT1PK2jBSvSNf5HoSUjC1d6HccnJKizkJFxRbwPpmRLw6UeXBEzpVRR8S7QTp",
  "key27": "E6Vbw48Ppi2QVWGZvmb3B4AtFLyMccLRAXeMs4N4SRGz7szn4WQTp5SmG1g57pqCZndfoC9wdkess9nNdE7HrHE",
  "key28": "3mrkL97KEtVq3bmChb2JWWuM63hW6fH82Ubu3u4Rt7eUU4XemSP9swEGCyShYaQCTxt73dPjzjEDgGxe7VuR9hoP",
  "key29": "3eErK7JC6q5h2UZfvmKz8WA9dmnHxpdineZnuSunG9h9eSTdktrwyyVTDfnLfezZnMJweA7oYzMp9Mr7YTfdGjpH",
  "key30": "2Hnwe1w4jCfnw3viDkQrn9PEfY5KeJnw5B2NkbtoLt5bUYhT8cacTA9vnWung1jon7M6Ar8eQRwDZHFYMnJofSDx",
  "key31": "dXcH1qZM9K2Mndh6qRFZJnFSnNM9oziGToc3kgHsqbvEUbrjuBgAR3xSG2X2NXJcnQpk6uwPyfYESsm6X6zd3un",
  "key32": "5GKphVDMZT54VTF9388qQ8G6kwVu5cEZNNcQk2ihF3AUS6QoPEmt8vxRFWW4tnr2bKsgSQ4KWcY5XjpV7Qtdj3q6",
  "key33": "5isssJd2SWCYyhZrAwzvQB5uY4Lmvg1Pt2VjKFH3Whz6opH9nc6guAMttF65G89WjWD1ncZbS8tcfjhoCbAnsTq8"
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
