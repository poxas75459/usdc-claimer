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
    "5oUB9e9K7a4UeBuSuuAaJ1e3p1NsBT5QgP45w3DbkCwYSU519aSBhJQTKB61a6s5oDMT7fzpU1c2Dcm5SjoGWxBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ZrTWdzC3MR9cMWHEoLfXWbxXRYWHw9igwb6cuAo3qc2DvjDVAUN5kxLEdG41pvPJzQdWoam3EybEwZXZwGK95H",
  "key1": "4FRaz77zysx4q5RfGLDDPKjhrswP4XoaFhY2oUMaHghZ7V4PBHbntHgmozuH4mLM4iM86ynjVoEBEWchGYLvTN26",
  "key2": "4h7R8kFr6jvyGsgCoZd7kdoZwREUVm1BWCfbjyhp4yeKaUR5Ctbdn8AFzcMwAjeMwmMbFCzUUxcJUTFQySxWSKZn",
  "key3": "4M7Gd5KtZPfwenpaNHSZHP1Wsqkc5JsYJxFZZ3EBUC61SUL33faFhT5PNP21e77FNnbR8gR4wYEsnfCiMn84PYFF",
  "key4": "22uFafWyfSdpY4jq4nneuZdr9h78pFXXafeHHTYc28csqo5Nc2NoDgKb3r3R2vRwc6m1Q76doJUDFZAW6zmdmYyX",
  "key5": "58oUwS2QGbfoBM6R2arLcbVhgrbsEMEkWugiiD6qzRcjrcYtaxJ3QnZEaKGunp88QMX3jBsXsq9bt6qVoM5QJL7y",
  "key6": "2efwztNDrM75q6GwqJgCYfNKGoHF12T6pMSDAWT8R8YiSxr3cjA9RXrWuvjESZVXkjEqh7dCKvKD4KAwwDC5gwRw",
  "key7": "3VtZEwkmJSEaHeb4qWfYtvsHvkqqomVAcHaYCHbBxhJehqYB2M6rpbnLRdUGh2v4n245bDk2VGAMnh6PFQwwHQoZ",
  "key8": "5tds4Mrn86QLn7HMCmFA5WyFGKKFjLnFySGrQMTn2UxeKZoYaQHGxDxjhRPxFD4E5tpSsnLDjkb5CGgV43gqe7Xc",
  "key9": "3kTQYMuKcqqFAucDKiEmSMA41CnKZN5zzuvDDpjBR5Vk79s35PHZ9UTsCLtr2a4zivAZmmeEMgFZtrdnti2QMak7",
  "key10": "3KZAhfUqoCYEa6sqp1FV8GpMSRygceD9v34K8zp6pme1nr82ByBaHwbF6R2fHVRAWVzYRN7qJAT7b2rBWvJ7QCnj",
  "key11": "RWkiLFPwxZ1u1RvM4fbwtecugWzPrsFFQfS6684JtRaSJYmL7aTd1TWbuWtx9kzXHHhMfKKXuRbw37Hvi4QR3dQ",
  "key12": "5gPgrNAJKqLSKX18MqxeZfSZG1S2nTQL1FRZrTMS1ZgFiqfY7jhEb5FLxbX24yodFWzKgRFyqzLhWF4wxbPzFdTs",
  "key13": "3h8SnLRF264x4LqtCqSyFvw8BUjiTCvzGjzeR8ewkywHacfJmTS4aBkYcwA6wJJeR4x51JcyagFrg8KKfsPwuavA",
  "key14": "5iv4YbxLoQtkmBDwRBpXr8NTofHhZ84pQHjkHLbAFVnu2ajgEoLiWMck7YjDKUGPqqitSXpwaPx8ioUFJVzy5P6m",
  "key15": "2EekmZcQ1ZNpRJnHHVxLnwhazMNV5pBNwW5kJGrxMCfqbVXUqNXX7K1eSCpUHCX9znv4A3dsfJZBW6kFqTCVEeZa",
  "key16": "336EWM1eDiemQR6wGs8zzxU8kC1UGrNRjdCuAbQLLvG48n3JaupaUZqwg2DDATyBx7uPadVRYv8jrMrXhsoXqDJu",
  "key17": "2TDaMwCmQvYBuVaK7BsSbU2vXDhia5aHBbthoN4VNtUYPP99DoSeEUGLNnr2WPbsvjPWbdeZGQ6vEjgqZ4zBVVBr",
  "key18": "kgGSNi7VF6fckw5VGUwC4xw6q2Cz7qiwDoCEDmU3Yfm2dz1UaT2upbYCuQ8iHMM6b3BADUADyb73Sj4de8iq13w",
  "key19": "gSHWsvpfoSUjAHZ1xYTtzhCSoE1aRHMsXdpaZkJzWttgBQFGNotDKeU9GViMEGZbxooaKcnjP4wxyuHbiXU6VVW",
  "key20": "2bLnuW4RTt8PRWwmGiNwtj4JfoBgdJXUy3tB2vJPMmzTSRvWYSrGi95WoimaAdmf8JkzwbSpJQuxnB166Qec3T2v",
  "key21": "4zSFWKf5CgAJ9wzjmCJjrF4JDSufrw1sWKPv3Kxga4CaSCmzk4WjdSvc3ccD278UKLCQeo5AufNwNnUnSgo1gZ5i",
  "key22": "2pAU9uGH4fqAXtieGUbXinEgjEaLnMWC63Dt2Tde8eXtPbs9M8GBzNkPFvwjraxW493ps2wWZfzK9Ahb6fMVQozm",
  "key23": "2EJDSXH1TmJwoZPAaE2PLvNSnhLgNnyQuijoksmntZy4h2aU2cDEK7Wp7brEZrhNDWcPUgcCQ2zM9ebjGYBAnCHR",
  "key24": "5mE7meoPGNAhWEDph6Sja1o6JV5isytSiCxUN8gV82ZQREKJBaCiB53LV2yzdefWJeAwpGCq76xspZr6GNewi1UN",
  "key25": "4igr7cCsfQs5htkGefDmWUEhsvdz4o1GBk1h7qhGgtu5kgNV5HrUb7hhtA6BMMcPsofyrHMwDR7qRLpAAyxN1wKK",
  "key26": "3xUo72Z9anqE4zqgKfp2SYZ92HbsQT34CRU1DtsSucmorNf8yATEp49nFciZqwgL74WxKKoGknzmFMtwbN8KQ2qo",
  "key27": "3jnVUvbNeD9QEvWcwVtkzW5tpZVFZnj2RDCM3GZyHiwN8ua9gqrfpHZRfEX2uqxqPRkWBVhD44a7LwRqQrvkVLze",
  "key28": "5eyBDcT2LQnME4UVGRQstAryKAkYQUEm5PQfHCXYxt9YuZqsKDs3A43M28vXuzDmQMSxZaH5d8D9ozxCpiiPw72M",
  "key29": "Xg1CEknbw7td1G7A2EedRy6fLwr6e3MbxDds2UMfRDEsEDfvRcHLMztexmo2EX7VAAUfKFZDxAF5e7adjfH1Gng",
  "key30": "36JSwtPn5LwoZAqGR6q1vqTW6SRQZpmp5Y3e8SnpPGwtLDbFRSSU661bNvghP2UrbLeFyBibuoVEqSWrMRX4tKzQ",
  "key31": "5WdBE9cZGXgQ3wng9GmWtYxMLVDN3xgcXL91psb7YNYEMYFhoETZsbM3NZBdBZ2L3n8sdsUztUjH1uZV84yB97AD",
  "key32": "31DS9Q7VUkZMtr8CPbJoWrS4vKeKh512WSodySENd13bY1VuPHhdWUbtYpkhAVcUm8XHpd11jxhUHU9dB7h7ETU8",
  "key33": "5cLbDmEP7qXJGJ94rPQeuTdmVofWuA7G8R5D6DMYVQDSF8A8YckNp3cMd9VPxaug5bKbxtqDF9RBtLQEw5ArtbYZ",
  "key34": "5wsoTJpQcc4BWXEDkGeDzZbPBDnawnWPjN2gjGkswrF6gS8HqSxpdP1JdUT6jf5KZ3VEZhajsXBXQy4GpPsVfrjm",
  "key35": "zHcUNbt53Q49XDExxRzTQgv5GuxH8MEH4dmXNbE4XPtKaork6xcCuoh5o6TuFCfx93bRyCdeGCVZTk3rhpp9yd8",
  "key36": "2oQmtdMLar2XhPiQLoRX3wtkG9Vb7gcLjixCb7tjFpV3raie7GnBwgTYFqLXHBQJoMWjQA2Bxcqnbc5sxvD8vFgi",
  "key37": "MEWTeY3v6T5Nr3eW2Rwidqhaam5AMrGKdLtTio7cofi2Mc5FZvkWSLN3aUmC3CpXU4kGyrcHm6F8ioCnYz1FjNb",
  "key38": "4mmHyHzctv5pmvyQxaegfwHCUEUTHaHKAUnzEUZD1S51C29AYw8Ng4s1JtH7HSzHa1pEMcGyWuRpbNs9ZazWeKtG"
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
