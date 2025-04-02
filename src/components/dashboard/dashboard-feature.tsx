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
    "3uLt8qgut1hupbxRABXske3EiJBzriFfwRwte3VG6ZrfjbWPFcNghM8XPtB2n3naNoaH795j2pKLywEWuLAYJozE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fn15ypQEHqHjifyFpL8uDka7zuoi7mkPRZgTnZ93G1LWLykfH16QQL8QeqtJwU5NhDkwWQc5DtaAM5uKtuyXWtp",
  "key1": "5NowZveHqdtheHRmbG7qjBrbz43a46298sGb3gVocuhUJEquWT6E2eVKixvLcT2Yw14D7TqxQ82ZtgrN6TyppeUn",
  "key2": "5Nw8cmLkeRvcthSz7KhTa4wXwfafsFDeiMhwnHaWqyEBK5SLdpA2WsAj4oSk9sBwhiPiBobtMrMmXbetupy2Z2p1",
  "key3": "5Zu8J7mj7zUFFsQbt86AvVm295rj5TUUszbHBRkFkMiuRyz6ouYf7S3su1vEgq3VWcu7y4tzJQNrLS8XciTv1j4C",
  "key4": "3EHqXz9iqByyYveX9rbYKvYTMsyPguhL5XCtNiDGa8GzftmZn1ZG81QyzwXCz8xjr24RNgnZBaHhm3YyFFxivHoK",
  "key5": "3wEtfMZzy8aU1aMLg7gd75XyXyspaXw3wVQ5qmvenjvZWoifi18gAF4N6Kj4KbBeQd6a5zaHJtUWKCSVXHsbCApp",
  "key6": "e7Ls5329bT9RGvgDpLcNn1y7RVv7ZcFpNeuiidCm88wDuProWv7ub1PHQKHLtVJTg4iQH5jbQT96gQDcVUL2QpR",
  "key7": "4S5dwbbHTa92Cr3hbRm2XTBF65oBBRhRKUT6PqSuoqYmMuFX2YKEWSc72VeUkXXVdrS3P98fTAdJim6MUdqarCYz",
  "key8": "3QvGwRYdFL9rzVAcPRsb8kFv4HQ41JMavFJLgFtXdqtEdt62TN8XEdefNWKarFHLDToS4hhBixJT5bmUSjPjt6Tw",
  "key9": "5mjhtKGXv27k5X8j7ceTNvbqvjYHvQjtRpKKFc3teUn1UATGjcpQaBSUUEpYKck7uQuaRgW9NEco1NMMKsL6e3Jm",
  "key10": "4XSeTgsp2vQHdfFUTHGwshf58CukuC7UPhC59JcjfGs2diUWeKvd1rDck8DH2xguTFw5sxKsU4GnTdJmgV3YYZrz",
  "key11": "2Sb7VmQ8GhQifcJ1aXcqj9vtP3aLgbKD2nJT3vAa33tnHH3HgiZ1NtnvEjGvsRAYo2VesuP3jKvFgZYHhCMTsBT3",
  "key12": "evy8s74wg1WBJeKdAe294PE81bvcKm4N4QWJ75gxGwwEwrCz31uDamsGK5KSXPnwEC2kNquYaDLQKNoELNgGFDM",
  "key13": "2owaZKfvckZqznVDVeFc7WoJfCV9ynbK1sup7D61qD2jpLCF5m4qvNkkowceoFZh9B7B5iHjycZiAenbjoUBboWN",
  "key14": "7mm3S2pEQppbu8x5GDg6misLAZWTa14nWPDGCnu76gaBmCgtj75YyXZJLMg5RabfhFVyBEdxMmPEzcpMXPRAyrN",
  "key15": "WBUhrMi1jqw3gcrw3fu64YMMuAwyvbStNT9G1iw4HwbuU9g415BcWkWdzY4MbJ3TouThXLH3pZ2LC2pptT53rtZ",
  "key16": "5TuZ2fApTKvhJnCoe7D3oWbYzzYV74D2dTafWN59PQnsa5nxWXZtAJgF4Ls1eCihYCx8Gg9RjYZ1jDd1x7oEnGT1",
  "key17": "5H5QRQCgkCjbGWGRCEryFZzLDDH3Wy27VKF3vWK2G6k55WDuu6ZCwZjQgQd9UGGBqRtAvJus3Zz4VQLJjiShZZv5",
  "key18": "4K3cH1oNbnELC2k3v3bF76vE8W8cwy6DN48ZbPUxBwGtKf2o4DtenabQ2WzJ3ucFnoiGSqaBJVJYfpLVXta841g8",
  "key19": "cEHfraJ3hitQDfueSMByNYL7DcJTjZLLSy3dUKSCDAXXeiRm75u9U4izZkqApc1moccM9TG2R7rtQaZ4Ki536c7",
  "key20": "3QDb6a687xdU5uLfquMC32jT2n6Sqh6e6fvxsfaxgE33kchPYpSM9D1iokuNXuWV6US25z25izo2myDGTCT8bR8M",
  "key21": "2Je9AkijdGRV3bFiNw8M77wkXCXvhCGpQKUb5F2TMixdTPmRtErqp3bfRC49WgtKBQEqfv2ZLucV3pu5UoQhrBvz",
  "key22": "2ZkHR31XnfnNWnHMs84XYod4gFPrw5ECw41aFBK8bRNF4SbZB5XQnAfLK2s4tRSLJCATG4pqibaM3dumJYvZEnq8",
  "key23": "4f5cL4SucNrtdpvi3bmhKXcdTig6rV1nKdqkKabUhSFP3MVTqTPJvXWR2Y4bypNzwnJeeKxkEGi4SvVGnwrQpsxc",
  "key24": "4gunfkBvCua5MT1YLa5cG555yyPuyLuw4ghMzpTMmpGZXckbJw2Y7aAtYgjvuURLfHFvDyyttDXx7cUXmtHYtx1U",
  "key25": "5Pj7g7H5cPU1BZWBPAN5sXjmJusYdhchruta466cCjZn51AeYZqM7aeoHFXbwfUvmURDtMXvoTA2PyovGopAZasQ",
  "key26": "36imvwkR6kuoiy1dKBGPgMT6gN3Hv9gQNyuVEacuPhDWd3zhFV5kY9doGath68gzyJcxvVz1Hj1znL2NKaGmMdRH",
  "key27": "yFsnifw36i1bTmvMDJmfem4HdTRN3GJGUY6tgc5Mng3YBy2KX3UKe2o2asuqiS6xQtguUWHu5kHKiZ6vUibj4Ug",
  "key28": "NPSMWt2tnaoyoFSV7U8xbKUnD7XdV1wTykhMNVusbthbV9kuLALzrVzKFnBtNsuDc72Thexqdb5Qndu8nUieiVp",
  "key29": "3sqaBXnMoKJNEpfGdDeco9JFfm1GZdte3TUp8mEnH9Y2nxXfx9cscWfpQ6b6RYQmhsudykBk9mdEyic96HtEZk35",
  "key30": "2RbrRoA8tJj1hRpYwFRPM8CLBvuWyaamscBqev4WnCiM6zEADqDGdnm26QjpJc6jPswu5zyhVoY8VRWLLWspoXAh",
  "key31": "3AQT8SWwH735ZZpGSasagmfUsb95msxvrAs5U8dn49W1JBw27PZ9SEsKXhmypjXRWoqaH1nU3EsDyaVjXj8siHCW",
  "key32": "41rx3m97X4EBX4cbXV35wUfYcYzRv6JbZ1UZ4PTyMPPxBpYwnbtsq1xBDso88JXCuu7zbPMNpTVv2Artef9kMqFX",
  "key33": "3ATq8kAbH2sY5gvxBYFVL5AumjXJhnGVqQ7PXwpQaG82hWt4fQc9tYam6bxnqHvDfEPkWagzQ6ePKKX3smwdWdxt",
  "key34": "28nCbsGRadt2R6QRuLtQGr7wWCaFDdHcNPjaTHwnKdcc8HRy2CpSnCe3RtZxXYG3HbcuvrnTUmWp7d83bWbATC1J",
  "key35": "2QNYL81zENC7C4Eh4b6E5qjkEQFD7dgi71msEakrgJMqBzkXsveByMiVWT1LujW6Nub6wyKZcstjgep34CLU2Maj"
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
