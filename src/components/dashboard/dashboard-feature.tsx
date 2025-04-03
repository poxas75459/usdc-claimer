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
    "3VSMhE6xzKXiomQVUdNKHTLZEXfzVKrmTwPptKBuMGnpMkmGzdZWKGroP9XpubjinsvjQYGzPv4itSaKEyuSkxFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrXBUmawrFi6NCNfeSae3xGKVijFuCgPRFeAKEfp176nDzCQ6Dxe1f4ZodnYFMN1XYyxbgTvzqu2GhHBZg3K1AL",
  "key1": "4BjuBn7Ev9Q157YzzyNCepgFqF3FtAKiZ7Motxk8jeqVSu3h1KzWhE4gxGVMybrR1hAk4Pp3gw5oPudu24pXyL74",
  "key2": "2RHteqzNJtyyvTbMDbJsPyHSgaQ36HRheBubUfV25MjRkVmhPdHvuDqovLKuhfoSS8C7miGXFAfcsWL5vNfBgcjC",
  "key3": "28wZWxCd448diKxy88VBW7qzYANgWhwDZZkFsM6ecVPo4n4VMGmzwPqbFtSsLK3L8pfFBCAsEt6be25TycamfPN9",
  "key4": "moFD53USUiuDMw7vAznuf2nhNMKycN8Ln4rnKxgG7ENt4N1tWwSjRcqTm1fyy44i5uWzXo1c5kk6Yq1fDNUEv3u",
  "key5": "gYH1ahmLcnmx2XgR6J1FGcStKwLRprdUZPWhrj9J37cDTEZZkrMqeYxbJpDAXn1jv1hzdyzXQdwiwTMkYem61Yw",
  "key6": "53YtzKtougt7mdQ1xuFYcWoyQP74SrCi29PaJs3xiYZicjdb2x8cPosSwJnvpgfYRjnqbaSeDfUz81tPbPtNZq9t",
  "key7": "7ikufsEAKbNhW6bzaPgfHUaGR8eFrypGZeivg3zCqsA2A5YwsbgFLc5HWU2GLaEEKaQ4yudQcB3XLQgSTq1M8s2",
  "key8": "62phSyuPqzHGKsJYWJGoPxiHakQFQDWKTiEKx6jNytbLpZAocyN4aHf3hD7PF98aBn7Y4Yh868EVA6ogKiDHgzvJ",
  "key9": "24ZVuXse8RxSphkVPV6j4vzTPk4KmVuEabDLAEFQvMpktQwdB7X67Z2A8azRvBTRsLKe5opq52o1BayzMLjRw6YG",
  "key10": "3qGUK2SggSbMHsdaarCPSf89SgRNQJn5WBrYqEpwec9HyMnvDtHFV7wKtUGETYUdfdCdc2LkXZGMnZqea4Ct7sTe",
  "key11": "48rUeezSwmZDR1jSCbbvUANXZNLeinuNZX3v93PjUwogSKXfywdJE2GzMtvnWTm7PHCCggoQ9Fu6heMHcGGCmKwT",
  "key12": "63FVAooBdrni27qi2Jag6tyNFFvkW51CVUVQxSYET9sq4tABYbua3nqFoQxz5H3AjpBm4wsmBA8FnxuWEFvy76Hw",
  "key13": "2rCkcjQQ3my9NJmSAAmkKWFbmbN7ZUesn1hfv8WibLXcoSeyYL5EkeBhtDRviSjXHdBi4HFczhXA6hCxTkB3ebWg",
  "key14": "MYJos84tXSGxTfTsWJEsmvTo6VhB6fui6ymyHxiVV5Gg1SwGAFTL7sKuet4rf4ENwXfzPDuz7vKMD7Ahzp8CcFB",
  "key15": "44aVN2yuz7cGkux2w3HZpYVojLdSiYyjwVYvqbh3uNGrUNe9HbcYEeRdzadksypRhCkfx5cMjaEWdCR4SNwMA2TT",
  "key16": "2Nc6pRHVVuaRo9idGyRq5dMJcbqwrey1d9ZjnaUiNW8ff3CrTNt6FihXfoAmJF2fzUho5fhmK2wtdN5SUZFbfEpg",
  "key17": "5TBL4gxoVs9zvLa8TyoTmm38wpnziUymApy4wJAuyfpUuMKuqy891vbo1ivouY2c12rEnWH49C52sXegM81f4Bdt",
  "key18": "2uSyAuFih66spuruJqc8jSu5GLpHMZ6bhFdAizfpEVDqMxiAXiCyZP1X38eyGPXp4EK2q5T4A9tNjsyiwComL9Vd",
  "key19": "YeyRYGgdTTuuEABsL2vuFbLQB5E9RtdgDzPbEbHdxH9DioSX93LrYLka7VyvWR6j2ApzugHrGAtxGg1JcUwVNcE",
  "key20": "3nsNYHBN3akT6UfA82gHgFZ5TmVHNEuy3Nif5kmx58P3Sfiug3uhSD3oai7ZwVsJQzAuHBbXHC5AEuBds6Bxir3J",
  "key21": "5gq4yMwYyL7R3kSBvgpumA6UygjjZSNrJAY5YsNu1EeViyzZM5vMzpRB4VYPSQDv4MRZeZsEXozJuksSiRWsekir",
  "key22": "4fyXaJPdzo1U5MnBVQGPnUh5mvJoxeEvJENWbrz8hBEkSwMTGpaoPxisVsdUvHk5dVa2JdrDgTJFjnXcZXVmnD3H",
  "key23": "629xx3NBqBMNoEqMbRcDiBPtToyJB7HyAd16bJZ9SqGgiowY7wNugaSdtHkffukWkpJYRi7qD9S4GUC69pgpX9fH",
  "key24": "4fZQWKk7wgz2dXUBLkg8EKbtZi8f82c8DjGa2Xdif8ZBpMPXBbv4Pn9QVyqHQG97Dp2CVuttnitziJFtZACfBAS3",
  "key25": "1u7VCxta8W5p6pGhUWTqEHSFq6PB7hreHiinbZ5irj8nWB4FEKHMq5Rs3dRmy7s3PUm3RvA5qbowKrMehxPzWvr",
  "key26": "3Z7rQaDLpgpDeDeTqUEbwGdGotCLmzymmdeeQGkLuqpEzoAxzNXDAANj8ZaCWX3XMA6vk338VHPxPZAPPoD5kngu",
  "key27": "55BqLJ7ghNJEGLmrt46qMBYC9jpE798szFLtrjUBMqBJGDp55xSVi3vjGnHRwJQxSSWBzpVyFRWMaZwa43g1JudU",
  "key28": "3dNYSLXgJxdwKpkxqPJvRjdkr8qG64FDqb3WyUVprkgYaDAxKdv7i3sKnE7Ud2qjNrmXUnDvNJfxjgBt3wVPCZ2m",
  "key29": "2hnaujzmjCiuq2kgCL2u6S8e38f2EVBBUG1DddQUgxZdnH8sjAtEkg4uBmMEwbfsLvJz2eWKPPatfT98DX9FuaWh",
  "key30": "HqFJKFCfjpUENRrXKHim5oPCmD49Fy1pLEK12SL3a9wVVjf1A8JDZkhzN9J4P4CyjqFe1e9Vwi3e2BezeuRmb4q",
  "key31": "2xN9Erf4LQiGuLGhhAoBpYKYFB48PxA6KQaWcsieyFGdYjKdwuSk9zZtqUKKUgo1WE9TJTDADYtNvSXVfPxE5Aub",
  "key32": "3iDUR9B3qbsQkyYENp11UzQ67fiWYNvKKvRLXtBjsaZ7PCKoRY9yrTukcK5CDSXRTdas6FYHPAeuJy54B6JSTHMa",
  "key33": "2ydKkqbgvEdq3TFQm4NcufZYdVcmQEz1Ttjx41E2w7kTmMyf5dxTSsXa1wwvS6RGqJGcgVhtZhV7oYvNeTWvDNF2"
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
