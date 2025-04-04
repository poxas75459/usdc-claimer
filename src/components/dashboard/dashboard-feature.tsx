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
    "hA7WDZ5kAZuaswDZqiqHjWaWsBrCbzG55ae44uMdMj4R2t7zG4iJqWeVxK673dDEMWbSTWBejTnhNfMtwKGRaSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zamEm3gdvow5MhbiBPdJKw6ojMBMNAF3TpgpxJxYkwuo1eowUAkPzb1qoXtyPYDpSxyrbrUj6sf3QRijxEiLNnj",
  "key1": "3Y4fzteFvCWpTbcnvmkyEgVinjxJy5ynUfaTtSZQxhsVZGAcMJQZU5TvDd2Sht4vkfQVRj1HiiJifFMoRegSA5mF",
  "key2": "5W6Y3y6Xupnez8619HatjrQir8pz3QBHo3wx6m9jNVpL2KUKv96kgcxUrNd74bDgqpvdP99JukCW4gybM88KXdPt",
  "key3": "4cydRVip33Xoa4ATnUbFPftxfTPph9EbgcL8WhY4p3tion4KUxif4iBjHn2VNtxjrexMoA6iQL1LVwddCJCTcHiR",
  "key4": "4fwmuv8LH9NFJhvTR2AA4EqXpRfHpjhtFWbt6A1tjrB6TEo61pvLwiuTZMRVfLSVAno3upU8FViQfBm2K8GKoDxM",
  "key5": "4MLq29zDVHg4ePn33qhAtY67H4tmjwAYZ6bSsYUVPtSUPTFrjNcHKXocQPsyc9BUz3jZvpGZSPAe7ftCYNoxG6Q",
  "key6": "FHz5qyy8mrW4USPpvTNwnot7MLJkVxTAz2Ha5ETnX1sXY2TcX1njVgR5euA1KHJBQKQJr5gRqH31XWtQWNfod6D",
  "key7": "3qnmGA5j48CQBbw5DAmUPv1j7MAUkQDvVj8QfNPvozUXwGMMy8TRL7X1sTqPqG7vGAoXpHUBExau5cCHv48rV2Yp",
  "key8": "2ThnRKgW4Azmac8ETriP1PSJhqQVCFtpWdVc9nF8LSTUK6wzUdRQ9LuMouRKWMdwgv1rrf1W9t4K1uBSXXn3oWFk",
  "key9": "2KVDLHv3PQbfkr8cQrBcv9snKemBXYGhn7QQGCCCK5gnKshWdH2TMVYJTW1pzVy6yhHkNftLYYN65DsZ5WXZjvVD",
  "key10": "3iDNooEVwmW6o7MJ6dAcUhmxmBEU36KhSP2NURdsG9LdLtx2DZzZTdWjQmAwsNVxSfj6tye3pjXhRgK69ppQ15xs",
  "key11": "4r4YPreQwydSB8nKVfbLNRU3xtFPCebCSyB91CdH2JBu1vew1qQYscqg9hb3ikimid2p6T8CtJiUBjMd5p8wvvzc",
  "key12": "5oQD1SYfpDD1jATCw92cxnGmPY8ZvYuecXWwe4amzbMtqXULvtupbDV3K2EhvC3aiPqDuf6oc1QryVs5zprc4o7V",
  "key13": "2iqYdsWEaJqqxyDf1Czmvg3roc1F9MHPWNfZz6UmybkuCAewTYVLyud8sGAm9v7fa4q5dpptUHBRf5BdB66rmNeL",
  "key14": "4ghmuCV1vhFQ5zZ6TzvGh6Gm6uoJhAy2PSg3cYokSVz424g22auV8YyPdFYtZ4sdbyACJLR4CxoSxnKrDc5ua7bF",
  "key15": "2nTra1UaowwR5mWYcPWzpWMPNpA48ihF9swFLS8mgJUNL47hQBUa6TWdaRr68Mfa7iAoJuv42yyxcr22Mfb7nYKU",
  "key16": "3G4oLap3BQVgPTS647XnbQdffcDEcRGaiwYwg5JtpsoPTubBuBXKN9PR5DbhULrkNhByFPi3gwa4udPrN9QBmVRc",
  "key17": "4UqSvCG1YAWYr1KmrZZDd5XWpnGHLW5A8K5k48Yv2bikCeBhRtaHEmDTb3N3w24tUSryFctXZwjyaRQoYC6gmYx",
  "key18": "45C2PXU5vDktb3Mn6WsNYqfWUShxMEJ7v6U7vZ3gQKhGFbEUDWR7orArSABsaqVP5W3buMMgsHSvxnLEhaomRf9F",
  "key19": "5PPYpPpukjqfM66SWTMprfiby3tcvztD4UeEq5ZpkVdfb2TqgQyZaC5ibegXhpXbG5nt9UVpFYLM4LGgaBQmt1n7",
  "key20": "M4aS9jBKKFtDxZAQj3tAAcmKmZoE7NsomyDJUo4w9z9LdQAZA7ys6ujifLcb9rGYmheJ2TphcrsAcgS7rxcSnJw",
  "key21": "2zcQEEYazP3n3ycVx998iFqtPDhw9q63nuddXoKguEZm7MQEGAyYvvaCvWrAKPgPNKHtR8eLEtsKtobcs5y1S5g1",
  "key22": "2RwZuMeWc9qXWvqkRA6UCSPMuKD1fDowv37GXfAnrbURbCts7RqCoATeJ5oKEgzTiA8yL9VhRs19AtQzWEE2sFZq",
  "key23": "49sJPt2nCZpo5LdB5NGitdrhKXuaN4BtSvsEeCsBYVazZ9TzXhtdrRvAdXmPUm9fGfqygdQvQaEDP9Wi3XKGG59t",
  "key24": "4nXyyWK4yFVXqj23Vcr6JikjzxD7hNUutKHbnTyJTcqDCmV4aMZTF3u1Byi6D9ggjVrm8nnCnkjYb3hvupAQtwza",
  "key25": "5wYq6V1mYLMy3nKoqMwKBHMyoguSRw5w3TAaUdoMkrE7bekBFPVuHtWyhLKPYNEPorkvHQuJXKy12zGmyoRY91Xc",
  "key26": "5wd9CeUdPmoYXAADzXLJnpFmWBHq68NCxLFKSnfA5FhAEScunGE375By4kv9PRNSzvgnx8CNoxgR6eyRGR6ej4ML",
  "key27": "5J71hw2VXwam1zEfdg47ARuCziv6mYLYKNa28w4hx6gb76yHtAwTA79mD4dYEQHaS8DJasgN1DFTGcLr7FwL282j",
  "key28": "3QVpJCFQyT3iEVA8q83dmYK1K7cpjmWbEgkt6pLc6HDSnZpx82HmH9ELiP2eehNgNm6GcT2aP8P3QQfgyyHq3MQR",
  "key29": "4tXJBBKw6uWPQZ8fMmesDAukqGSNYxCBUox5v1SmZPCznWFLFFJcZtDEeNTaSSB7xHsEn2ymvChFzzdCGRG5evnF"
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
