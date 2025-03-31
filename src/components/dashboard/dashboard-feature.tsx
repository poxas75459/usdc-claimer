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
    "3AKaaASuZNzqoiEg42cHJS8z99h5cF94NjbJrKwu9zzykQZBF9GtLKcVkHEbFK6MTigDZKv4njQr1KYJ6yE2mxY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKhX291PHTU8wfJxLEUinRMEmECN71ehiCSwpzW8X5so1DEzH95AbRg9dFE6FVrMiXxHTv76Vawx9vsxL6vBdur",
  "key1": "o4qgtYmUAaCnZUHYtaVg18CSCAzs4yoYVpVrNdk2BAhuGR4Vxr4M2ckuzvGKDd3NotTJ9UiJ9vhXXBrYdBACaSN",
  "key2": "4h9dcvw1gCC7Ep8Udm55Un6vqXHy7sWr4BgbVEy1k2zTmUTpXqscGvoqj4futADnSYQ1bgiESvifPmyK4sxtDbZ1",
  "key3": "4QUsW7ijA7dcy5piXjbVyXqnb2GnvkWREYADFhBT5zrY5LA4TfSD2zHUFqzCy9ngTJKRWFbhGzJCmtMxYDyzaaWh",
  "key4": "4zWW6sTJAgmR63pqz2h1ACenGyphZvBsLwQVC1Y2wzBWN8xa4sGDtcWbc7iShnbjzt34B8HwuyVxXxnW5YpSERjJ",
  "key5": "25CYZDNkNmu9ZoEs1vMmbyWWF6JuSpiMg12gRfy6qrUzXtLDwzzLRdqZ4d2WKynDrvpYSoqGkTCS8YSJ7AdgT2Fi",
  "key6": "5g5m7JSaw6Q5GwSPTnCzmywf3usPiT1FTY3gz8GdHXjmxB7xDyZu9wixKyF5pi94TS648AipybaHDE89pLgTgEx8",
  "key7": "4GrBoWX9YmwpbyhR3jcge1TLteRPLnfoNc382kdco5VNsb7Dr4Rd5C5pdSMr1RJE3ELdyscnhwrYujuWSsgQLnrw",
  "key8": "3eMkLftjFfxWmPEdtinsYv3agG7Fqcad6eEjHYwFwL4znxHW5DUu1edyLdAocy15gmRyTCypsVfPtgM3Mz93PGf5",
  "key9": "3qqYK5WHkzJVcSJejLisWQ3F79Mb7BdFQhjp6Mp31L3RreJFkeuFBpr7AbRW7JN5aVxkdZoNkSHKs7mn71W2AxUH",
  "key10": "4znApGsxftnLEZHN1AwZHhbeKE6QYSyHoRH2cwRLpCEvFVj14YPwgPWg1Nsf2KcoQ8pfScey5fmHexNh7sVkDRe",
  "key11": "2tx6bevXaEgAEsbgqndBB52sSYPbidFJPuTTBw2xVkXuRxS1pPmFyGKYcPgR2ZJ9Wa7LAEwgJ2e5VjVSJpB53bkW",
  "key12": "4Gg5Sy9meiFh2rkC5eeooRMTKGkcnPjd54WebiimV2h2x9si6syUV3Pyff1Jt2FAFHeb7DygnC8z8MP3wg5gkCVE",
  "key13": "3RJa8dqsUjUFYFdHBTHUXqHeEwfZZQ2ybhfb81fhwvvwXFTZUtbUFsWo191DkBfjW2CnuHUGPRVKcWCx2xPaHcsP",
  "key14": "55F1j6HHcun3LBJo43ZjYiAQiNxpX8kUgn3mbqPme3eubQy3FRaC5M18Wcfjc8KYQnXcC4L8WyLxr2U5Z1uDHMgW",
  "key15": "9M7EAcjufN5raCCPb9powqmQxnp99SKRWBJfnnJibg5Y9mrLxzeQND2qNhMgywuek1avWiY9u83czc9brCEFPK9",
  "key16": "4o1KfxmUWkgnekgbJbqEQ1LTk3C8tBfMs9xVpFHfZD8fGSZX1XvrZBtSNkdJBcis2kC9o6Sr55PaUhFamBJYy4c1",
  "key17": "2LUTheBNpCkoqiML3S1uKiE3ByWQKi4UnQzxVM28STXUXT8pnLPjxvTMsN1StHDTreT7k12hTrxyrQ73yabTRGHn",
  "key18": "4uTBxwykHkCSpB92UfQsA54KuaipeWNdb6ZYcVuqRdktNb9dRERDBqFUr4i9cnquJ8nXGzFPWvLgi54nVGCnmdcM",
  "key19": "5FrU24GchRYNKaQxgofbehWAhQeiBiH2gR16ZZw2ViJpwV7eDXsAgpwJbrQ7HNvhjBVwhV3LsNuzP3PguMY1toA4",
  "key20": "2fqqYFAWbpfvei4VjVuFnvnPe3noCoHzH9Efve4PDWdibpBzxMQAoHenorsWfv2HVW2cMewjXAqpuTovc97PwX3S",
  "key21": "44no3dtcYjgwhb16bwGcugYKdpESK7ixzvrtyVVGTg2La72cv8d22HgbUEZp1MRVT1L1JQ1NHTvM3p6xBjdj4a5G",
  "key22": "2MfK1crucpuHYuW1BtyWysZKRZXDgk5ynS1r6HjKVt2DC4Fg7bx7iDsELqpqYVKEt93E7PjnrVqNZ5qxcGM2ouNE",
  "key23": "3jjPUjc75MckhFdHf9gmKuL9frWRGhhbyDvvGsaFTkv8gpaoPDMJzYQ1o5nsqH947zFiUPRS3u7yp3swA4HBheo1",
  "key24": "46Uj5fp1SwvXpEfUrWz9wpUo5rXH6Kfj7W5VwznvagMibwUxYHrCDxUJs9aEx4HtkR4kPwYgyNFpix6uhcJectWP",
  "key25": "35Lqrpe1AanQj2Uj8tjptmiPzK5mwZbWJ1D55dy79jAvEGzjeYC6AKAoZioYTa8KxbLy9uB4RieqRJNH233boGeM",
  "key26": "5tzKo8QsCu4rePRkMYtP2oAKSm5XK4i4aECzAZe9Pzcr8vFJdqWBChtyugpy2vxjT4bZk1u1sLdjK2yAKCrWCzFu",
  "key27": "59Tcx7RBypqywJWWSCzekDSiyEPXaMm3vu8965ewuCXFHoNYRZGXGoLz4JQoRmw8tn6vpvmTtPBnC8VnmPLNthJT",
  "key28": "5CLfJy9t9hmbaGBhDW7sShajQG5A6WLKWW5mkB5c7C7wYt3z25AnqVSq1Y82MqzK1b1KwQYWpd3GfCu8qHGRdFzy",
  "key29": "3H8X2EfzUDp9JyW97sDC9AvYcGut3U6Q1MV6fLnJU4ovEuiw4dMSSpgG6BbYJGByQ6XvJVnDQ48c9CyT87VnTdLZ",
  "key30": "4YkcFHMMZ9NU66asfeGgDGiy9kmUt7uEzmEfXPb1TGXWAAjz4FQm8FSwAPjYqJxATU623UKiTSbT3kciETdTUbVj",
  "key31": "5XFaX9tkzLeQaMynFNozMgZDa8Vo4Gwfzoo4AYjaTykSWmQigjJGVPSAFLcX945iPDbrWhGSa5DRfe6PTVWMqYV",
  "key32": "3Gq44weuwDfoUrSS2kK5UspZkHeo2eYiA8PubAZ9xdjK5FNdRH5X8NV44WRPfDcfw5DmJtoSieagHBTJ17ueaFs6",
  "key33": "khHfoWL9EMfHgodBbsHgY8qymGrM57FoJ9sgSMnjBdxHDLwaqgubxhGXWUVPBWXCnw52g2hqgudbmMhXmf4gecC"
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
