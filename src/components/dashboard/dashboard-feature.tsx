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
    "4Vqb2fgmDMhfRiKPbBeqamzndyjf2K28VGEJQEQV9yqPfJgsngvVd3xcPJNbUHVdEZisW2Lff3Eu3HzF8Gxhf1Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPpkKgk5Rp1Yz965UkRXsoPmoduTKfdXiahrASxJ9rsxEoodbhvwagGxzdjbjWTEG5ENVXBA6YPorpLWNq99BTw",
  "key1": "J1RrQZzEFuhztwijRrfpm2fP3zb2x73rAJNnbTfNUFHqVRKfqjK5H2Ry3cktSWJzAPakoe7srb9FUXf4fXLa4yV",
  "key2": "3g1KvRBH4fwxwhc1QRia7DgiLo2TwDJtY1Z9Jf1UPt2gpS57Y1kEfdf8SiBSFvWnugPeTRfQrVtL7nScNqBwVot1",
  "key3": "3jfSYS5SfwPi9iQS38u2RShFk4NTf2VtpRJo1Q9QSxdZeKTLgYrfpipKD1PSgDVkFA68PCjnk37ZTBcZWYkVrFtJ",
  "key4": "3T4tqppPTkXhA2Wi9dtX64Jdnyp8wbcorXaYPvBZmJzXwpUE6Tr1SwNewK3z7msrECCRUGg92Wc7vayFg3XMnonm",
  "key5": "5tp29Z6SzAzbRajiTnL91WeRQMKmh5EmrwCYZaE3aAY1qsk8DuBo6sxujKfHet1JPmVEPb2kZYswokks4hFKjX2t",
  "key6": "4ypdkGXnLw1t8Hjw4WoVLcqmdqXvYsbe51cKF4oVe6fWHZeZno4RQMGTFzjCLrjatekLXr4LWzXTJkHi47yBrFp2",
  "key7": "4QZ2tpTxKuXA3GijR1GbknbJ5HdbhnfuTTCYM5VnnW2czLr93UGt8i24JvBrJE1DnBf5zTLYNQxqPa1bNWWr1LkC",
  "key8": "iy8sZcptSyGFrCsEdNKKaMExQyiZBMT5aDJjFWLDDxQt5jaSvdvAmvc8da2VXQ1ph8mnHWs7Vzn4dfpvteYkaqU",
  "key9": "4YttGbmAM7ne7Beqawy6zK5N4ra7qW6Lt3hspxhA6TrM96vfTZ47iU725mHm9FYsR63b1oCy7ptuPNXtGy7Mm5n9",
  "key10": "5rEpdDGBRsow4z42hWLW42sn94gQgwnox6J6MC4iFEQhZiyxZjUtL9MXTfksQRTwZNG53gANdMGqD4zAsDmbFeSM",
  "key11": "3fFRLzLitqZrQ3VGWAUtA3esHAU32726oQ2SA2sHZfunVUYKpomkaioErbmgiufBn5krb9Z1MEuBQorzWL63Scv6",
  "key12": "2Vi4fR5XVCuKBFXiwbhfj9Vfmr3x3zGw5x67jY4LStKkNgfmvZGMdWc6zEi3DsDFafmCdiy1ccebG4yqdhqnEMJq",
  "key13": "52egnECdMLnsTUKicTp7m9uhZKuJsupXxyN4vN51dKDzXULTRiG9f4iBt8BRGtnn1irEc68yPNQLwq3Xp88jaX8e",
  "key14": "d1NKzERHeNrSeHuRnimwLbekcB8mQFjkdukg1KoCRxcLoQoPaxupxVj5kyTR71fjH73MNbt4v8mQDWVnyW8wYPr",
  "key15": "24JeLj3iJwfWfi4UVVwLAwEw1X1jXNGGSE3hYN1ZWayH1ePiZoepXHXqx4WNwx6it73CuhzoijL66ANx1aSy3LtY",
  "key16": "xP7jED45EuTZwBYhuL3KiXngmnngkXnDwvugynd6Dnji9tSJEYoL9rWQuSN2Jzju9BEqWZyLCubxe63NKhWJZ83",
  "key17": "3u15kFyfk4DRc4spE3noACSQ2gGGqhju5SWuidvYvA7uA5t58fmRgTcxPcZJDunjghoZ4MVpiFpbQj7YSFgSKrar",
  "key18": "25PpX5MWJbVFWFaSSVVU7KLX5P4UF11uDJfyBgCujEjA7GQHYQmhAdLCeSfhcAzFuBrSB7KsdKy6C9XHWeV19r3n",
  "key19": "4hxjZ7J5P71VSsG3czAykNRMfH6y67qRDRoePoaug3C7igofH1hMXvGQjwNDwi45GChJSvAEtSCsMMYK6xhP7nSW",
  "key20": "4UAFKDVLf1iGdDj9UbDNyN8tUz5oskxGpjiBrioTd9iG5s3zW9K3EUWWSnTh7qvdij6oFHPUH9zsXGYAeXQsTvub",
  "key21": "5w9zCzVxy51sriAWGSpHfJW6wuPbMWVYNaus586NJZHXPU2hvQ2kpqcwWADq69hxrETsz3RWNZ83WWLkqJSJM73k",
  "key22": "2h1SQSJN6rBpfjhaNBHQjtko2NLzLbCfKjiGFWQYC4rszE4RiGcfhePDezpPwgZAtSp2Zrwy6pBo4mwrb6DH3iuZ",
  "key23": "qqFByS1owtKL72QpQ5MzN5nWDgre5rH2kRZd4UKMnT4qvmB2brjq5G1cHtsYJzBoSChZurA5Ux2TNwxsbnGAujB",
  "key24": "2gaNaW3GSfSth58idKbHSFiFSSAAp6eEQoBCG57GkQvm79fiPdEm5ZeB4AQ38khpnCjjMzJAxPM8NNw8X3wGgy7E",
  "key25": "GAV21dtBMmrmNxXUq3r9NvYZQJK9nZ9PVckQmEXRnzsHGYYuPz1BSaQYWXYgB6GqTtVzKnLNvEMVGgLXPR3aRSz",
  "key26": "66sUvJFpy81yiueZQ1xumCnP98tXCukMankKLGPDEx5Kg5Mnd2Gtp75gaRdDc29ux5Vs4Jm1vSxpTTaHqpmY2Cm8",
  "key27": "5stQgsZsoBf53dX4aTdc14k43mgoDganAvfkPW5scf5aBEMBj3Kbx6vH4DERZ1roM5jN3dSqhxFi2PrCb2xfYiuw",
  "key28": "4CencJ63z2mMwi2HV5hfZGSFQcbdWuRvx9ZXALqd3srbyMdSgfHaSbHnAFyjQHcZnwGVToZbWS19M8hAzQnLdn1r",
  "key29": "2xMeZRkG9xURj3Tc2y9tDADEd3YcTnecuCT7D8bETzwzwSZp6GAC9hfHXZxFH4Wr9hQ3tXJWtL6YN1jTebn3R1Xu",
  "key30": "3jdLF6sjfje6bAshtzrSRsYzXy5fwascqJ2x2qNujiDdB5pAJLC6XhyC5Gu6grpoVsS6NXoviWYYGisaxFK3tuCn",
  "key31": "rce8aDoUEtjSHU1kHRi9AcPKvCsQrc6E28M6huiP4hvajrA26VW9VUpD7HJGaNjqwGvC4Cq5csf2b4NXeT3fSpF",
  "key32": "4qG3vpXgU9F4N69GbvesXjaBFRWEEhhSd5ybs7q6LUNUkKFSABjn1MW4e8QKPRnZchvsXCgVuUVeFyD7FV83CfFN",
  "key33": "2eG48DgCajAmMJsxXnqru2WWH9cB8AdMrrcwV7wMP8SavTt5ER5VrrJC5z4donx5SHfYRyQ9LQnRRdET92cGxgCv"
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
