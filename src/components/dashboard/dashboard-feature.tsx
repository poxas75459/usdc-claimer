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
    "oosQvoG5y2816FriaaZpCFA7TwKAVusVmWq3ibq1AwBTqeaCMxgZj8h5epsx51j3SDLLvkbwxtuD3GgVFeqmaeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7kc6rph8p7tJbd28GAnjqpzBRfqvXAg4zveAvnUsu7HJGdV1TVfiq4tccnDGkGZqhaKPpncMxKr76e1Uev7iPF",
  "key1": "5jK4rRDwEE3VYEpnhaUdQxDuCEGHpGjeXsyZLCXZrzCUrqkDtyQeo3B7Eoe5DWPxrx9Lfsq5jVK4syfY21sYLfd5",
  "key2": "Ybh2ykbJ85ZeYUojaeD7zu2NkqP2qYjB68PmX4xSZ5Z6RRoYHHRreyx9vx67GWLuAAqpJPWvgJ2j9PJYANGAYrj",
  "key3": "271pgEsHAmPJNqeovLiBJcZYBAjFqdsKZWtY8M5pMHTByboQ8QGR39rUDCxPcX9DUaBi1gRSjMevPL5mufiGE7U8",
  "key4": "48FTU5JDpb4xsi7XUJUTq3FFvjfuSW1m8bj42iQXJzxkG3GQdEsX7PkYqS74oymc4gf8iWTYvN6uUtcdgwmzaKYB",
  "key5": "4jKjWquC21zA1nbwuNmuxvewRtRwfpFu9DUz5K3xSPtcQrRDiSitFiG22CPDvErPfiDqXCgVM4PU9jyd5m8NZM9q",
  "key6": "2nCWHfbUGwJUscZ9NWhAiJjvxnsbTBFJSqQ6c2PADiBbdBy8vdUFTTb1J4YZoV8N9ZXMMJmNocMfLhRRJEmTFtxX",
  "key7": "4CpMjT34YAh5oaYCoLoxEJ7hLG8tdk2FQPHhiZYBoCYWK6iePQLEKQM9fqz1oVG93QVgT8vSVbvKwoeZvUyipF9",
  "key8": "xTPErwZJou54wpcBPnGtRj8CebQtr8A8z3fjYCAF5gSqXqxMqGjKrZyXDuofuhy93zYbeyik66xtgB2KgssHHyc",
  "key9": "4bJWdLGb8eQjPaSWXAQQveVd7KnAgr7aYw42YsxNHrE4JHTn4ia3DJPtWSoYZ4GTFLULLzP2si6LGxoLcSsVLUC3",
  "key10": "vAAAu4hUCKzoxCb7ezjED3kUxECjiW4upxWVTFbv6pYt1gkQmivcoYGVMWoEsVEpYDTKSTDADYNW5zJZ1Kwj2Qd",
  "key11": "maSomPjohMtmtT247QFpuzE3nQq8rqwDUHWFa7T9gVpcLpKkRD97gQ3TXXy3DyaGv67GWYDJ3ChgHnTawsWiWGR",
  "key12": "3taX3zBDU2vmpRBg3DPtnmstC1XW3WPDwC5XsctcFf7PrqCd2vnqhK4d5R2HwF7Xb81MzRycRVU4TD34oQL1czQF",
  "key13": "ccuQLHwYJ4K52ceMpv7nBQk6kyDsTpGR5v6QzdkQAE6VPCbCqtDLKwWxDaAxi1UrV63rDmLkJogN2wbVEmg4WL6",
  "key14": "2cSYE6F16pjHHnTSSUUnxWiNs9Vvk3nQGLiJ1Hcgzh6nqWKqZrFwzoGP8yMuz5WMgVscs8Wc7RBe1BZGhqDXUMnj",
  "key15": "2urJJaHygMDpRHCGYQrt2wBZ3iiNoRYY9f4qEoS75RH2kTs9EgLNATe5uUHLTSjb26vCAi4VXY2CQbkqxUxpw4mV",
  "key16": "2W6Y1SsMdpZvQKggMRcF96355LePU86GoTCZNtCYVqPPBbT7ijVvxbgMkfKbxeYEa2RSA7wUhnWT7e4tPpXZQSM5",
  "key17": "2empMSGPNuJaZtNivyVy2PANboBUnWmN1hm1z217zYs1Gxyet39XRSZ3j51nXTzi2iNpW2vNQq4QgiQYAqHNUrTL",
  "key18": "2zA2kZzEf47ARmG9neXCmxmkenGYm3rbrFNSyt41MtKmGU3gXEfw55qbgZnJYjjPysgZRNJtKXFF7qvGZ8Vupihm",
  "key19": "3TBUZCoigjKAdzw2kHwxrsw9gyf1qm64WkrTEETswS5Vvfqct3pZnihngbmrpwm6fa3QARtvJtsiChCHGEGbkyjC",
  "key20": "4BCmfN2UTRcVLxDD82zh79TDbgWxPuNg9fPXTq4krvRy92wFjt5mqiWS9PMiKFqWT91AuCndk2Ss1Sveap9oQCKV",
  "key21": "59aE2bM6xgDK5keiVG3qGLkqrpzDsJqaYPUAKEUTSuBamJ121bLGgFe5xdmDKeDdS4KFVgQYd8gToBJsYvwB4tjx",
  "key22": "4ZpqoqzCcs8ZChAwy93Po7dLHBud4vrZyYMgni4N4e5CboDCR8gb75yDoPxvCk6vSCkzzPaMhfhDCDNMKCDbk2Md",
  "key23": "4ucUgSBQhuvzXfeKTVMpwsPmudEhh1B8i8fDWY2i8pkbfipLMQoWwdCRadM2EqH5DHkNuTtag2pfMxxBW1BEnpmN",
  "key24": "3ygaSd7EFzqqyNRcEvkPdBmqD2xPNoYArkpinqaKD9TvPAswjGe6SCWw24CcjmpMQ2pGLNKMC52PzebdNFuwAvNj",
  "key25": "3h5p7Uyogrx9YWc8yypQGVdNKXt3eUJqJDzYyunxPbHceDcNR7xk7n5naNLGajj2NpNrwXXkTqT3KiEn5cr5R5ij",
  "key26": "2qcqTVQ827HvHcPtKEBGsUTDhmv2hKxquiSDSVyTecXnHhKEWL3ps7o9zYpvxB1GUUD5imSKDdB896KmCXnKpgx5",
  "key27": "3o6aN3xp3tHHQiPtN3Qi59Qh7qMpbS9ouMGwL8oJq7H7WTaAKQDhXbtpcMVL1xPhJhVucKjaSR3FfHYEoEePxH6s",
  "key28": "X1dBGPdNRZnKcDExasmGh7ZXEzWUKMnCtuDWCSAAEn6TwNN1ieHBkd5NmrJHtiJs68JvAeqXhnAjhsRsb638ViZ",
  "key29": "4EmXNDm6PPWRStXDXv4LmyDSYdwiWNs7VoGX71RXnqfSrush77iqVtuf7J2smEJdaSeVDHKYbZ8N4buj7yxNLAeG",
  "key30": "2R5SsGbAsuZ7EZDV79uNSD7USwVqgYtNUxL13Q6AH4oRjpMXMd6Y8JJcw1b1oneRjaQLU5TCvG6fsh2ErfVgi359",
  "key31": "PYBEFpDwFPctiuMSF7uEXhA4Jnzsot5m1yARnii4WjCrSrKpw7q4kKjuvi3T4gbBHyp86fVzzaTEnpMHMKUuyqj",
  "key32": "RYg3B5Fkh8JacLrJK37PVvFDsLyGC5BcYzdA6aWVfY48Bhic6tWHaSn8Thccw3VhSeNcs3k1jnMv9eYphe9kGXZ",
  "key33": "5ihBM4JFTtxUhiRgCydbxGnG8owxfes9QiyieDLwM7ViKDTmXYc5Vm2BDTYiRcZZXi1bcp5mWhRphyR9qdyWKtB9",
  "key34": "4pupRbsyR3qH4MgGAqpr1tDbV4ZTobktRKan6YFZ1Phs3keRHWYB4Afef6Z7e517mYuvcVErvPHDKGuAxG4SYga2",
  "key35": "5L474f7i8HMuJdWCnA2ksAZ3cPfC6H9rFs7wVSzcnM5rvRXBA7sD7NhWh9h4S5Qtw5rEPM1P7dqqybmgER18r5vi",
  "key36": "4Y9Ja25JP7916PHcdzTGVZFeZSrSdNriHCusdVGgwpfs4SAiAa79Vr4cMfrhymKfxJK95GL56afidHPCu8fPsPN7",
  "key37": "3o9XHpn3JaaJXez7ecT98VLGbEWZyUMhjhZRe6i69tck4tcF4RSZ8kfvgUcRvso35HGK9DFzDcZdEkyVD5J8jv9b"
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
