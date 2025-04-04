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
    "nzp36QqNHjKJFh4kKqkuGhQA5uwRADbM88gAKmSSgdKQTxF3TyyCRfYDWahVyx3dVjvDoCVV13yVnGpMKdkhze4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjYg4JGFfgURbur18VpSfb5QwmekAmLKpTRsfmoXjHyy9EpVLPeJ9tVpLD5bXnEsoL7pkGbhjjzKLgv4p4Vujia",
  "key1": "4ZMdzAQT4KmNLvnEE1oyg1832o9zxEL5Tiw2D7B1zemsa8xeZaUyGU5AdAz2fTb6jVMkaW1sb3ur4u2GA22rDV7r",
  "key2": "4BVH5UAppD1235XW9L92ewVUa2NpM3aVGXD9ynUZk6jovFK9fFc3rhPD63PHfhRi4Tumao3dUzgdBu72hmEx44cw",
  "key3": "4D85kpu7xnDaABvncAS2SyjEmQiWhHWcCHdC56QzzZCAHVbKLYDUAzGoYsdrU7qhGAr5x3NGChGyqngn3zNHKq3Y",
  "key4": "2DdPazn21hheinbwHL3HQSQeGjexRskRGN22aNFXTr5JswpmYLS8y7KePaKBnprPZato5yddkoXFuY4t7oJ2GaLi",
  "key5": "4tSiaLKkbQ8ZvnE8KeycSqoj3vB6dhb2Kr4v2UoPYwc68yt6MekNJd8VmVGeRrBcUGkD57xXTo3MjdPts8oXS4dQ",
  "key6": "5PttfmiDYYunpQDM97UWmhqJpcEk7XvBEfKbJWgtoiEDMBEuiTaFoUpSYD9Bp6npWJRdwv8EiBXQqn6WZaXddet9",
  "key7": "qTsynHcGvtfDT1e7dcq94zanQVuTh1Q3T47b1xvDBQiGTfR1UL77MUHTb1N2aWx94Rd38XN2pEMrMTicgNnVPtu",
  "key8": "KM37h5uYPb97dckadsenCAhgGb741wgNBzxqucDzvyp2tp6et7vJBVhAbHjqa3NM79fbuGaNDgWkZSYpvsySo9T",
  "key9": "2WAW6TeuScv6qnZwVZBv3jQxnj2n8yCSbVbmtbjiuQaVqexYn2BvBHAYDpYxYSKrK2zpjCMm4QpviV4xdCuK1VHX",
  "key10": "eQxD7gE4JnEWP3MnVeesHJWJueRH5R7LfCLhpL6mVGaGoFiseLnbyowcoNDoBu63y1jWpPz8wDvwkpJoxDZxbCZ",
  "key11": "4NFVmUuBb2mNzhna4ftuET2ozmAjdes6nr48cRdf4Uf48vS8DrNNC5kypVKaS6mMNjeYnaMPgLtb4PFUCDwVNnCr",
  "key12": "XPKVMKbgF9dzNFyCPD2TvrcUJGr4Ccsou87Z3S6LF3w1vZJaKVMAKAfHEsBc7GoNQbJYqReRcGVqkLYCnFtATER",
  "key13": "5T28hcFQiiVrsfcfX7ZvLXDe7BiHvVCMZwi7YUrfd8stDaZzVaxqpi1HxgBDogb2Wy4atzdzdon3i9FYh7EHiSqo",
  "key14": "3Awxsh9Q8t9nb3PdHTWLG8cXCpL2UrKDCjk3SL4KDwZotjjh9ncnxHgfeE9x6tnqKkCoKTRsRbTmg7ZcjVAVCHgH",
  "key15": "56H7ySYEcSgt21aCABMhsD9PNf9W7MXXrMza2qCuPDRpgqhkwwHtyEtaxZqeXzi5a3VT747H8a81hWNsh1bW5SEA",
  "key16": "3921wq7B6aFVtQdLAFt9E1exTNkFCQpQVSGPTzsc8Quv1LHfncZxGzYc2cMvUAJsLMzoRfSGQZK36u5xKTP5suor",
  "key17": "31cm5VjUJQiAFZEQvgXJgzuxZC1DXdMWkgbocz2PtS39LC7rhpfT1saFynRqogbMBZtzytFVmQ2Jiag4pPtLezmU",
  "key18": "r5JFUBifkmrHgXwML82GfVicjj2LtkinJdo8v5cGAy9nMZitjV4FtP62F3QpfFJpk5DzYGG37VwR8nrivrBjhnc",
  "key19": "kxLxaeZhWVTqnZhY7ngVJa1utuSUz13QF9mWNgYzqfzvaUe9w66zbQ27HNm8crQkhSmc9QAVftF8B3gbxVKz6jV",
  "key20": "42zqNRxxLwwy4Ljt6sY81wQyUBrptuVbDocmX2pWkU6hgei1sRTB3EsQ4yT6K9ic5hNzDTWA2DLLLkmGnYjpuVGo",
  "key21": "2m89Boxd3Dsx7hqBZAFyn4yCmKNYWw6xxFAmJVuq6uRf6s2tnGYv6i6bgKzyPXsp7bJ6kJcjxJomWKYCjnyDjG5o",
  "key22": "385Gck462YTKFEo96oXQSjqDNGCH1YFnqxgrYAs49Eanq4G81wHnLnNViCgTL895WahDjfwDmuZNua51WebQ2iTz",
  "key23": "4KpLdp3kdPTsoBxCxBeYsYWgpdZTA744ADkRk7YEqWa8veZNgGojkQAM4wcn7dMHZSznk4TRiFnGNxTddP1o4sVG",
  "key24": "3ZUifeYprJ4gyuSXVbUh89R4G8aTjyNAEVmYhKfskwwpn1KMbnSEFCsw2vuKnRjDBVqRkKSDVqx4eWjUc6Le1yZA",
  "key25": "2AV5PKQcWDhy896EwpXp6QnmGXq6n6MGA3RCTo8BmYXhXB84DBv7ktvUGTiYUwawk7axSWkcw3dmv2QUVxXk9DnR",
  "key26": "3AAjVxcpBKuPxqgoY2aUBsXkbASWZJYFX1LpSiKDUYspiBmmqip3yAV6y6E3dVwHZecv9qe6W1w1Ws2ybmK2pifJ",
  "key27": "DSwNA9U8WWmK9caPdmQkECa44Eudun1TcNf3DTmFHS5ZALsbxGNx5i6M31Ee1nBQrCmXBfdo1EDkxnjh7ty7Ds3",
  "key28": "4j8t9hqpgc9YiQgQfCyq223vFjFXG1qeX5X1raYE4oSP7TXzh1o3t7wX2nYzMVTJPhNJP443QZhwBHDH1sNUD5My",
  "key29": "1Wd63YFTN3iesLQhKRZNzLasqe1uhgkpRMnkmB4NjinQL3QBAWceZBKK79c16wAVVR4qHBdz2WBbFnc986obSTf",
  "key30": "2kVhF6FYTQ4SZEDgN4aPtg8Y37cLeRn8d59DgVPnNjXwyShzcAq5hBvfYR1cKkuZiFZCMdQx4PuPpgCYttxFUp9t",
  "key31": "3RS2b468RTxrs2KEnxTXH1zSRYdnxb4UFF5NLThrQoDHr6kaDJC352NDu7dnYQ9a5q8JLatgKdrfoVy28vQGe8Vk",
  "key32": "3EYycMtTrYWG1Jg812TDRq9LNffF4zGJGkG2Vxvnk19imZvodRp8C3GdhryXkzcPHfDSuCfcXmBJrRmTqcb3Pvcn",
  "key33": "KRirysuaELdY3DWd3gwoLChnVoRAJEhudey4Q4mcmXpaSzF8m41EpZXCpsGJ3RKpFnjgEpct2mGc79gq88tp6tV",
  "key34": "2c2Pua9J4LtfQfVRqqMV4AhhVjb8CJ1RxwxBr9J9tsgfFGfSmHtW4h2dj9GcYp9vB7mFtky7BnQT6zWbeFwLHTkd",
  "key35": "2iipte5frtP6PBQ9VZQoRtjuw4E6feNkBk7diiYNH34ddM748Ndnvw9y1Mu1gtSVYg4L9D4pdGS8Phu8XXwyrBta",
  "key36": "ESC9er3Uivik7jcBooja7rbT8hPiqmCqbuzQQMdo2RrFs5HT5JAG3Bd7r9oMSEyPokX7XuapBDC5MFrgCLVFH1R",
  "key37": "5pPGyWhN5gTAeuQ4j81c7ToXWJjzaHsfUnjYPZq6cvTRhBK4eNpZQS4wRVXSUosPBJSV3J9ohHbhtWSB1TQnbohg",
  "key38": "iDNRE9EjQYyRno7qgaVGXmp71aw3MBNjbTMWUHjL8w955qTkYHzBqE4EcghaNyagZyq3TwygHa2FqrnWhVRDRaf",
  "key39": "4Jr3LZkzdaZ4WnnKJguat1Hghw6dyCUduov2X48saiq1uUZjZi3hN1akNZkdeBbdYD3h1WYRmEgLhuYkwW7FtnQE",
  "key40": "fJEvE69Kg89cZDvLbwEknwYj5Ly6PnqfQp2VYx2FtGKXV6CwXQuGHYgpxDRnDvESRaNrjj6vDM2UjsDT1bTV1Vo",
  "key41": "5a2WNqEfLPHcANjmShyAMB2DQZ3AhA5sSh1U1wGT8ENY8ePxFnnU94hhk2QdoEHqnYbY6iy19r4889u3rjViJ4KF"
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
