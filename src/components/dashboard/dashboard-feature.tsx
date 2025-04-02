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
    "4sbDmoM5Jz1xjjRo5CDmBLzbG4M3dAs6vNuwxYwBtfp9JFCMFo9nGZ1LBwLmMcNfXMmYNEhKcwK7zDTacQgyRsdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSz6bCcpagfNyASYvb9Sb1n8kqu4pRcq3XoGFs1oxKJYhFydFacBMTDhinac29nKDPtda3GHx57iB7XZA53i2nA",
  "key1": "55w84CYsuX9qJJdfLUEa6e1CQ8Tc2wYLBaTrT2qecJMLVcmvWXPf85i5vwZmw79LEota1yd9ARQATo7jtuJwdb6M",
  "key2": "44K7uYLVSD7CMYHWxC8pGm1yaNNTeUCgc2ib8ujvozNptaVGxrtuEasdiqvWUXnf5U9k6xp48Meryi7RPqVFvtd1",
  "key3": "53GPNoBQRiQBKY89ivJrgC4YUzsNAPtcU1uBreVaYFjN3WXcE5JY9yWv81RhJT5xwBoat8Ac33jcDC4HqCD1rA9",
  "key4": "4R97pUGUeThGXWXAwh9nA1QCm2ppeD4C1kbGFRcJ3m85FkGqGjq7rnA4NzBCGcFp11Htmw4LqCNXtJXjV1sUoQwe",
  "key5": "5JSGg4yu8hLmfK23KcisqLtvgbTdyYQALaqFtdKXD9RGbr4WjrYR6258P5GNSa8gAKw2UzyHhjVgdHVzJ9qPf5jM",
  "key6": "2woE4M3yj7njf6sSV7e6T1d21ie41YPFECRMnJRKC9yPEyjfUj11BbJD9urz3k2mz7R1iseizKQEm29dyb2quuoD",
  "key7": "5rzSdKygRennGRB8Ks4WmaWEynGgMZyWe1fEb4tej9ezvtE8AjaSt2yQnnDpdHfjf5fmZA2VUzK6nrC1XpbSsWAU",
  "key8": "4gya7So2a2d8czSAeYei1kkejHvGhRMFg8ZHSogSz5xWmVHKBvs2jBCRxVSoUxHfPqrVcQZXZSUVy8GS6UtNa6yj",
  "key9": "kb6pSVS9MTrFWTQV9LyEG5454bv32aKni7gTwyrZr8QxHfVmYSMAmjhy8ZLe3VMg19uNkJUkMMF3NdJDVXH6mwt",
  "key10": "2NeABrDnNWPD3Qb3yzZhynA6XihePAgbdTfnf6ELkVh2ht1jMaW5SvB48LrgdMAXPXuAyv57AbZZExEW8EkpAowV",
  "key11": "4YQuA4FZSPWaiRSFM7o2xKnY4NkridDnmsR6NiuirMnEaqqcYnbeSzPKYSGVPmsybtrf46kxezNuxtuVvBsVwZ8s",
  "key12": "VfazPigKnR582VAShdkdUFiYvuJSMBBU64t3ybcqUJiyYhYUNGccmiLt2T1evh74cAeBMZAdksbTgbcJ9o3kAZc",
  "key13": "23UdZwWBWkAVZz3CyWrKT3SFYYs7VYtvvu9EuB12qcweRLNEAF5zJK6Mv6Q4Je3Go64sn6o1swNwRrGKXBR5V2i2",
  "key14": "2c5CJwH5UFNrinDNW5Put9MhC9yu4Mr2VpMjsS8V1yWy25sXbi39pKMqPRxiEgcaB9e5BD7EvMK8Aw1Ps4nW1sRT",
  "key15": "2VDuPMWqY6BcWoeDQFZ9NnnFoHade9S61ErhWbJc7ZiYJRQp3MVuw1ZzgCQzCdZCmPFe1a7SiHYudUudsVcVmwps",
  "key16": "Ae33AnNwsz5G1tnV3Pcjyg94SgVijvVS18XjDdjsv1dS6b7WKmuqmtRQEVnF2dx9MgN8fmMcErBoxQRkyGjpnQm",
  "key17": "5aFwadqSs99e5fEEuVMKWt3yKJAon1o43Xuwk73WJWpgvogJkogw5EoQ2uQUX3zMrkCkjjMMHxaJRP52uqBPWWRa",
  "key18": "iGDMGF3w4UfssjFRcjuVo8cyYX9J5YC4Qh2S4YWvLW49wKE1AxKuiSaEjRmR4Zgz8DJ2gmz3DrS9xZLAWqs2eHR",
  "key19": "2NCexRKhUgqn2C8PPU9dbZ9Fe2SRdF49Myu2iamQNd6Hry2eZ7KdCCxkKPs3qXqTbLEcAqYe3iDKiUpLqHUMEWkd",
  "key20": "2uyQYNxzuJ6LFSLc5bxwS6C5gT6AmHDc8zPqJR3iLqJBv47oPPmKCKijXEv9wRAKG3sosi736B5W1uonSkqyAyDf",
  "key21": "24rvgGKWGsysUcoQ2mq8W2cmvKmLgHJuR3wrkg2pvE2eVJnJJ2d3gAuXX1fnHpfKf73bnciTbXfxGNCfN6QMrSqf",
  "key22": "37VBvMwDN1UcruYtXfqRLRyJUxzHA9m7xK9MdQcPN7LfPBtkABoZNbpe76dYayAt2RbssoFiobLmSvaT6LeJV8Wj",
  "key23": "tMCs1DxLNtpro2TCtqvYVbQ39NVbAuCoy45pkfQWEejBZ8zV3iNiCpgndM8GZBDjvo4T7RfU7RybWyGSuGS5BjM",
  "key24": "GRxPfypAGQ9XKqNY85edM2GEs6yArzz1tccibkv1vpdoY8ucSSbRfgNMJFX4zEkEytZiP86vC8RtCgmfqgp6Spp",
  "key25": "5auwy3iLGaEwtXCs7Bp4XJdLn6VGinWbraJTqvzSRY7Ri9755gV9yDSZa1htXokJwoPVYHeEkES9Ub4T3peQf8uR",
  "key26": "Yb54f5BpSadqCzLXPv1LE8yDvaj9WSDNuBe3dGbELjoVQo21oexj1XAeujz3u2U8bmkz9dAHTVGWWWX2y3fvtes",
  "key27": "3fSRH5qET1eaPtMuPprj13meNUd8LEUaaDJRQrDJVyqxkatGBuLbax2txsQxqMhB5CUmia1XxG8dSbK342pvzMVj",
  "key28": "44gMmBCyai24Xr2MBQrSEFob6ZhmXVML4Rw3akJSRMCsVJo36bqoqDVnS24VkjCQpVCECYa8Ev3obYzqN6mUy8Dq",
  "key29": "3GhQZnvCV9ds37rCJPLLvCo9F2yyRTQjiJ1AYwKtYfCxH4Cc7rxFvkf8dewK2mbriRAYhCxjewk3gmy2eiamzWAz",
  "key30": "5nCMpgKQuBjcd7qiXsHg4yUKpqheQvRy7i6sWrnNELY2Wxg8Fgk3Gx31kSAWcopzCvzmTzBch8qiCRHAReKBUdhp",
  "key31": "AoYqge2rLyFRqPNje2TeLDHqq6oHHZnmxqmtLZmtBSi8iQughE9mCntzBAoZFHk9psv5k3My4r6tv3KpTbVLw6o",
  "key32": "1Cb8noVqDUcPUMuA4QcM2cZEGpCecf1CZYZPDYLnFBwqf6yBpVLcHgjfTgarpSKjmf3VT5ttmkp4PG2XiGGpXxv",
  "key33": "yA9SdD5LtZRFnWrYZ4UAnpXMuQdAB5szVfTWbCTxCVWaU6mtswqkwsX3UzHXCHTqDX7gDWLf5x8wu4awME45BF8",
  "key34": "3hafHoSRUgqhhgYQKcAxJKmdpZnrSG9iSqyQMWUzEowwz4oTApR5XGjcozogEiekJ9zwCYbHGBYyNxj21GtC4CqD"
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
