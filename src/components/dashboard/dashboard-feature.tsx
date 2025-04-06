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
    "4VGEWifbc6ftzzDxX1mwZABGiUYZxrpCLkLSshn5sh4XK4oCpV761zguG8KQd5BebsDKiMAQ7Ubz5vzvNmghQVsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2spodwMFykBJWiyGCrWXiTAQWQGVG9bn9wEXmTZyrp91q58XykPHbmpuYCCMwUDrwkGWPYpUBCcUuek3t5qrb5Wy",
  "key1": "3gwmFwHJCeRz9o4jViSJW1DzVBgWMr8HYkCzMPNWAf9Kg5vdc3fScbZkywWj75H2S3tiUNGceQet9fepBb6d6vRY",
  "key2": "5xxq9eqdnb5pcDdNpbGtmmBh4CEQ7iGBk91isFzjvhLoxMsCsFrcneTwUvt2TRmHRWueKLTtVDAUjMZcSbS6QhCw",
  "key3": "4TmM8g1rjJpfmdmYnU7Pz2oyeJ9yRdCu14bWofSWLkq9KA2nsPXHTaXgadFfdpX9w1AwGoeRudFGeReaJdk9RmB2",
  "key4": "2YeGhbgut9u7PUgVtA7oq1b29HKPrHUp44tk4Yh8bUU6jvSAYDFJRwMsTFcbRWXTWGRnGVCK6ivp8zMGMQHpyuZy",
  "key5": "41VnSLAPrciQxXc7Tn43LDNYEyZQaXK9cpFecv1bkFN5YuJmY9WZFg5FvQVVE13DF5qZFfY5C4UzyS9YbxZxjCXe",
  "key6": "3brhRWfjLEWEin53MQyVFFExifLSE4TcLrnEiUEZRBDX4swhHShwm4xasBpeKRgs5cgwZSGc2Vr6yczhtciXmuDs",
  "key7": "58NNswncnzY8bNwZRqLm4DNYmyvdEqZhcWiYXTmFebPg9parKQE2SadbtiTvwARRPX2DpKuN7R4izKom4RGm79Nw",
  "key8": "535XSfA8heYLgkQVBoHRQ24xXSe9fJVhuJW9QERbVPuXszTqZGqwqwf4gJnuvBf78u3fBxMpGcqdAWvrAmVuBiJU",
  "key9": "tYiJnCPW2dKD7z2DzA42T21p8otZPMocb3HPZfYRH7hCxaBBnoJuw7P4fZNd3XPpAXYZuBuHSH8sUYM1N7mX8Bk",
  "key10": "5e6fEzqjYovsHne2q8USjA5stxkqwRhPzugTwRbDqxrKo3oR2svjiRrN3wKU5GVXmbb9diduv4KgDN68L29CjgUQ",
  "key11": "5jBjxVhSMp17BwQvpsHsGJbvRktHPMxcgKH97mwajqFvujuvNihQtAdfUUgKArvmEPJ3MDPAogj6zP7yEsQU6ETq",
  "key12": "5UGYfvmBXJ9H1KjRUQAtyqzpocaHbFHznJwmB3YhMJjxLUK2f6tfdwZevpgxasNeLASy27YojYku7MwQdr1oG8vH",
  "key13": "3pAEip542HyvGGkT6rsGCG4NL8pTmZcagbLN8RqH7VJTCpjkHQ2ry7qpQWfAdAu6vdmNvXpKqyV9ZQZDLNUAieEV",
  "key14": "5T41ah17nmTrpk7zamk5z2yc711hRD9KvoNqXuLfdgsSekgv4MFKqshyLpzoCd3S4FHKyvGAbfNPcSY1y5h4HYsw",
  "key15": "3nqGDMHvVcejwc9shmLYNWDwgLRe11aKsWPmMCbqnDvtNuSMN1ncW1sDFTUfWJSKo7cABiSpu3EKfm58tbocAbWg",
  "key16": "4UYf6b1wfJyZ1bnm7jhzHJGZ29YudvJhGGNjFmKEvvaeavxchnW7NPfJC44CMdrrgQrDzHwYjmb1pvLwfBWRM7Cg",
  "key17": "gkZPYVQhWJHr55N1yZY2CEGLqFXoTDbh5nRMHW99QhN2tXu2ViUQvDPKdGU4A7pGGAewQccUgK4TNxCveTyNdNV",
  "key18": "6385Q3NjL3Ar6ycMckg2XV2Fhz5hCvLC8T1Rp4uiuwfRsZxDe3pgUYLq5UzRGwPxYDnuyGPJBBZdyKTtJVug28Zf",
  "key19": "42rgUP3LjdqP7cUectcb9vKWiSiMVXNGCvA3h6N5uZRtcL5SgfniFJsXxi1BqsqtXuVu8YHFx7ykJNNW5hXecA5E",
  "key20": "3Ac2dzDJgW5ywgmpaXNVjLEo2B27gB36QyZNT4QeQRDesLQc1iM6dsBCXZmCKzeRBCsCmgsgaWd5cQWLVADANsQ1",
  "key21": "5o5seJpLM4uLnHY7X4F925vao38mYD7hLD9hCRVvojB9Bu6F5wZtesaQmDwgLHMvmLx6TuEEK6wwMkuyCLbetBwG",
  "key22": "2NnZkdYxK99kgwn5DjfmZFvapRxRQB4itPnvymA9wKeE45fVCcafAR9taLuhhHUGJ7SX8GhbpqdPLByh7XNHPXU8",
  "key23": "341C13BHM6r7r4Rq5Ybq2TFDmwPBoDZNDdwuhqr2SwxFWWP8XTGugVdyC8Q6XCPNi66t3zqaoTbUgKfzw8hsmgTB",
  "key24": "2stJ4CZJMsBwVXMFpp2rovTf2cbAJBgvUCb2SNyQqFHRZk6HLA3KWWNMTWRzoEdX57GWwrmwuv5zow5abjtzk6KE",
  "key25": "3bFdqgyP5eBh5GyVdhiMXEuh7ytyiH36JwZmJBQgJFB5LyEn8Ju3QwJ3qj4dQWs8tyPWRyC9Xz9ah9ZrmQE5sWRx",
  "key26": "3beDmFnPAmc8guKMdygJeqSySTU19cJbDXoReZyKdoyFfRx2Nh9b8jf5z13FcdpzCkaG8CdqbBjoViEfHrwFhFfW",
  "key27": "KiFo1K8sN8Fcx1z4Tt9WcSYNSfdpamuYjcx3do5pJsQCezQVEjxnffa7VeUyT3coaS1PXXNURT4eTBmFciniCUk",
  "key28": "57P4yfpnN8aUDApLg8FDyc3QkYMnNEhrFBYu4ZAKmLJbAuPrinBxz4S8J1o7JQ6CA1Da3QQkwh2UjeSZJjbH5Hi8",
  "key29": "fQf2TCpixjSN8pNE3tP48n1XWe9rgCJCuyL761GgSWbjhxfWrn8WfQcog5wdrTv7ozuGYmo9EoGspDwtXB1vf8G",
  "key30": "2YVBw9Gg71MTdTTRbtZuc2roa95PGmbiYku9gaMhtrJTc7z1n4kH2cn3voM3dLWCeVFmQFWdWYi6DrYE9oS1Tmoh",
  "key31": "4AKccAbXG99yJUyKteyuYsXVih6Y4QQHuC98mdQAg5iRitLjSGMi4XJaKx7NQnsM8idEXgyQLb1zEkicmhKMbJXu",
  "key32": "UG2vQDBAAW92ryJdj7xTiPg2PKwkZSa68M5bVWcypmZiiqpM9dLD6zg8hDvWuTrvRawvTQL5y6EsEFHJnETiXyZ",
  "key33": "UVTtV9AJhVbKkaHQBQn1N8AU3XRKWUrCBqp3jjPbEyXpEchksrhqrupMvG91LHvP8FtqXKpV7LAFAxYitcGxT3p",
  "key34": "7LJkg5shYVRy68mDQVneNr77HMzKEfevisQaXzyXCq4SM2pGirL1gMKKCJetURaikZaBFJgQjKVN1sf17A8WXuz",
  "key35": "4Dsw8v9fLYDbTEZKgT26U6FrGgWP2v9aGw77j8WbtGtBWuVpJtAnsxXeKSmp2GwEdV3NrH7irVWDvtgyDRXKy9ta",
  "key36": "5uyAS1BK7CWQBZSjaK5WXHiw44eHZ21yjaNcX7iab9gJBCWp3UJiyjAoVk9oQS3FokMtwzZTcEwiSLVgHX3xtAtn",
  "key37": "Qm2emaov3g5R2jixFcdMk4VhjsCLqpjPjFbbbBbuzR9PLbj86ResA5KqPZ1zY6ohAJBx8uUidoi5isjorFHCsFJ",
  "key38": "3TDFQjbwtDCkrgP13uJHJFQXTPqiB2cTw5P9a1PHKhcskHVqjfmyZS1dCAZxrrFimd9419dW1VGN9VDh9Lta4JCG"
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
