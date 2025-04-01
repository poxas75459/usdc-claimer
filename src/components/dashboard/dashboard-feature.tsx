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
    "4pk4seJB78gbTJquBkCAicmzLePuEVfWk2njuk6bm275sU26jRoa6gEzj2KKiv5irGxAhAYiyJUH28QrYKCHEsED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWkTJwkse1JBbWQYXGrUsVmhRCqquqJZdLhUydhECUrzZ1kkHTg3u3i7NYGHvdaWxp77nKjkqvHxQr6xRArNxzQ",
  "key1": "44jgvQTGGm2ugQPxiryKu8rzWpSKTWLjmbdwr4Q9e6VCHpcBHsWkABYBz4H8wWsZwCPv4RTCMSM39pMGi2dd98wV",
  "key2": "2CYieNW49Fj9gwRzPc32CK7obppig17RLWx77wT5yUVt4njMi3vivKNaSvjFWx6upXUt8MEAZbyVFehAgFTmu3NX",
  "key3": "cvpHDYb3VdRGuDoTFmCFgcSBzYaUPHt9Uhk5yTV72fu7baNtCMwEQhxKjmsWiWCZhoWJyQGPikbwCooMcRHMe8S",
  "key4": "3SazL1KzwgavWakJBKr1jRioKTHTV7cdHuDT6yTJm4z7pPHYTaRiR12mCPd7XxDakRs9cJSDzy5WBiQPjgLHp88W",
  "key5": "66c3vvoXWtrEUERqC9Nz4RDL7d3pNFWLTXAhrpcUQzJHg3RB3gtKAPoCGaxVSfVURu8ngqRkH2tAnV124bfBv6Wm",
  "key6": "3YTELx9EEBvbfSX28oUkMS1BwgXQn8E1bLEcqWJjjqkH62MzbRSieifwQzfdTsJ6fbwx276KSbhigU1gWpwfx7r9",
  "key7": "5Nb5j3Pijr9bjd8r3ybi1jzNmSKivrmSE2Nv76aMx4QNUxFs8gxrqhGH86VF7FoHAwe8M2qhcdczUzGsHk58U5k1",
  "key8": "5RsZfEViBuQ51b7kQqBqFWS4hdCLCcuZTSLyYYXfR1EZZT97YHgPuHAetgdhooUr9GPVTojZyWQgPHuLBShXSWk9",
  "key9": "8rh2P46hoAZnEhjKKmEF6nayYAiYZnFRcp6UuzX7pag6trt6ARB8towTVAjqq6cRwqDcMJacsoexF2CwUDP9ZL9",
  "key10": "5wkSpkT8d6LdHtjaLYuYvbGhQ9afh5kw6roMnMjdxGt9Da4gQtWwPn8ABpkBxbWGHH9z14BFnpMsAKFoHQD7Kk1F",
  "key11": "3YfYJQ5SiHqU2Utq2PCpRfKFjNyZwiZg3TebCnxT8qnqC5vxBDs6C5hsb18mcmkML32VTrBFgThdh4Zctz4s8aZ8",
  "key12": "2XDNngsB3RgxRXp3Ut6qKzoqubpPdEs2GthKvW3SgQJjY9uNABNTMPas9uP2Tn9NbjmYUN5ramA6ERJufFJBktLf",
  "key13": "2ms5241himkunNDo2xSrosxu63ARnriaQmpUHSrm5iTcySM1ZktWM5fHWqmsW6TsfprPGrxscWbcoUadHTEDYWn3",
  "key14": "23zDvp1fbcKxprXKkfPaeeGKRBFwDztzNWpHUxTM2MLmAQa9EbgGscP22kPX59d46vKxbMxf6DL6fT2J7EGCExUf",
  "key15": "5H6Q7UkMj3xgoT7sKLLZA4roGe5r1vt9HC5988NukPgeTLnw26YdDoky53itYmjxVCoKf87T6rjFa3vd9GMwgDSK",
  "key16": "ogSXsZqgyU4C5DgdRw5szXPDLoxn45mufQ8hneJVGxLpmoYCdBAqKHPqiozLR8MeUpJc89nX3ScDd4fKR63hckQ",
  "key17": "3S5FY69iowmx3fU6wkvz7119r4XtSSb7mY41PNE1dBMtmKsAjDzB49HKEwDJtx4BDHTkrw3VJQXg39GifK4fDR4s",
  "key18": "cybTFyV26zTuBV3cxBfLB7GttS8LawipZgJ9HgqS1ZQHfnjMzT73R4rGCepgYpubDVRSyWs4dbKTYc9cKXkTD2S",
  "key19": "4AS37qChMPJxazTMtoCsK8ee5FLGkgeim56yXoGvtVhfPke7aHZkjYw8xRTBAsN7UYaVYjD5WK2mLKmCJbYUSmJD",
  "key20": "5npGxQW65eTK8FF7q5Zv1S6KZX9M5mqAsofGXvniXLc84jgiM8Aoqc5pFRZSHE7Vz2XfDxC8ee2TKL9EyWaAksvm",
  "key21": "3Py4HUVsMriBALVaC8kaCuVRicfw6H2wXNXGSiuskgjz3RLPtcq442ChjMiS9GLUCsNdN8ZxK8RCw8XWy3NppeFf",
  "key22": "wpSjabSiBuSK6fvV9BaKcqPVspvryFdbAgdeQvhcrDxvQfraj83yonCKXN6iL3giS47w7yaDsyr73HvXfqgT7oX",
  "key23": "2FruZ7EvY6aDnzxss21Mp3tVAGsZy91Yo74NNLwzTBxscpycVt49XG9S9oHCKn8yNVsvfsf4jghSGTjzhQ2BraNj",
  "key24": "2yBSAjjYcXExLoh7aMVohtrVGcvVGGx1xTZejuSWy44cuwUvo6c2GKh4Ugpz2nX3ANqScTtLnChAwscHHTjqQhZG",
  "key25": "64HRL7p83u82VAJS8aNByKrQJW8gupMtCezFsgpcMF4N7UEonmY5h7rkoarDT8TqUgVczy6PfXvjpYVabGdrY186",
  "key26": "4aMHuky3Eicjn7rFtzEZGW3N252pk5rBWofyxY6fvpvd6xQbjHyBjHUaZuJhfMTk38JuSgRvyW48sPx8yXyXDrsx",
  "key27": "CeMGhBe4hcHBDuLHDDm5dUtZkPo38A8CvAZBxpaMWtnizTbc1jsU77dJcEpjE6wp1NxsmPWfHS1E7pVWsK19UVa",
  "key28": "pYrTaVDHFr2itt1fnMaM6FDV2hBXQQf8bbCQYShsKjM8rbnb3yGEnKZK35Ny8gexdffozF1W2LPMqPejcxxqZAB",
  "key29": "3mWfagthcwZEZrYm9raicqqtnRyL2HJkN7N9XtG5xR9pmCPBWEjNYitBEnv9EELE9jQyVCRLufmwAh8n5mmfm2Rn",
  "key30": "3iPQueBjfDZAQh7AzGdiAEqajVexr1rFhnxjAaTK7VJr8ZxnDhZjXjwDgf4bsMQP76F2cLNRCpeSY1v9HW4ndzmH",
  "key31": "4h28dyYgKptiEk9ZpCSqxgUyufNmdvEtQtGTNnofguFC1DFcUv6B8fNATp3GxtZJJC7sHzkFoKsrTntiYTKTocD9",
  "key32": "59v37ZPv8n5Bzs9FNJiwTHdkvPYEfVQqgqoEAcgaK76z1zAbmGoJxe1ttCNwj1vKUmtUEJfxZk1nbwMLNt67sq5H",
  "key33": "2EBfEck7PvWLst4ZHLiicCWg8Y1VL6vipBBf6vWsKAHLMxqVj9oJPeJxpXNSKHP9Ru7VKAKrhApkFzeWPE6qtECK",
  "key34": "5Lh2Ctp7nW3Rst1W6H5RFswkZYjsftZNScwDdwsZzTtTT29ZdBxFVaHj1EW5znSrzWj35pVfsUxnUGhJ791yJ3S6",
  "key35": "62KGCuvnMXEb48Gi367b8jUbYpXfQvLrc7h4BpCggoe95eSsFoMHLQwC8pZXZ8gpL437BnZdRzrELYoZMQ6xtKng",
  "key36": "YaCVjU1NDsLjXuxD4TW8GEHQD3yuoqoXRCkJHhsi3ACeqBdqKno3DyK6CCt5CkWCyMsd2F8GSuLgF8M5qKUDddN",
  "key37": "98UfWoqoZzEYLc1JggkLby8Lo4jZ6Ypc9XCFPsxFwZUE1J8Q61qWnVVCq2fyZbaFyKxz3dWFbMezLHA6swC3Esz",
  "key38": "3rKWCvzSUvED8e52GhwzuZ5narKo1aUqNsU5NitBJqYD9XA6vzgPvRLzASNmHM294VK7GhzA34m9fLyW9XQoQy8b",
  "key39": "Axw5Q6xSB7hg2huqGUX7oFQfy3bk2ncCKtnbfohSvZyrj346zDSAqtEBUKoSwURNjnzS7yL2EKd3Xnz1zKHUsa7"
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
