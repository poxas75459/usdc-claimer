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
    "5Mx9ZG2Hgc8gcU1ydYHJNAGpTJ2qjuFsYbVTt43eJQgnp2TA7Q2xts2afYxH4nVaojY49GPtBjxrNHtQNRPMLHz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3g265Ygu55UarY9UkQBM7mpFPmYpucfMyuWs4US6e2hMfCqv5v58HCjqFNhAWT2niozZJ9RNAtvUXmCWZ2WDmb",
  "key1": "2kjwszuL2b8aNr3yhAz1pYj4vUiEZfJ7nVXrm9gaEEyxPBE1krQuc2s3fC9ygbn5abfACYiTJ1XMKgA6MqSpZpPM",
  "key2": "KHNv16jhtyRMu4rBGgrya7oo2y7ymF9NhUGYwTwWNQapH2SBQKvx6eDMoVuyuS89BA55VMiDjGfscEpdrgAfsaZ",
  "key3": "3Qjds5AbGnX1ktn4NcCfTmPqk9PSZDFn8LgQUmGmqUtQNeczVUCjF4psqDhQ2GN5usDpiwRfsmcmXbhyAyTkoFS1",
  "key4": "34nX17tezAWNUi36oZ51wHbaSVgBtqEu3aGJxttfLW9zztH2y2E88zb7Ywm1zuDQEi8pbPe1Rjba9xu66QJ2kxpo",
  "key5": "NEfbK4d9m5ktpcYMdzJtQ9mh72nnSBwdS9hD4Jztk5PCeN3NxQxhvXpQVNs7A4j3gF8ByNBusFDJpPwGZW1Df8x",
  "key6": "28zCka9Uvzt8TZ5GZcSuLFtMwNbw4nYNKPSBcEr65iEiTUEXJWKw1RD2Yvg2qd9pzszi5Ah2Yu8wcWLVNBonQJxE",
  "key7": "5wm9yU3kwdeEkAZCMqUfaEeqtqefn7X2RPzp9sAthR8csXrbX8Ye95pcDvrQx8wR34z8qHMceTDKyJa865z1wrVE",
  "key8": "2csisizzaMyCB32gLD89TiuyCs9SoAYEnatPLXzNq4pw5WFfAhZSypdy6y7rJiQy7eXCKhMC9FQVMhZhRypCT8vU",
  "key9": "5RGtT5m9wqRWFyxSFwdoaKoWCsfcSKpt7n22p1GUQmgSX9aTN9fZiJPC6EJPDxb4uquytjQYAGJrgevVVUmSrTuG",
  "key10": "2iCwMocAaFLWWQKykrS8xEBTkScXUADg98rB9THFzpguq6vbQGUhabPPSWbq7UzK36fXEzbwhGQxGEyLqQpBwkkB",
  "key11": "2k7CXacGszKDKg27JYirwuv9RqLLPunrEpqLbmBp81GNWihGUU1BQy15Aik4W21QszCREG6sJdzvodZUVXfY9D7b",
  "key12": "44UGbhgheoYfwT6V9uXVE7PZLTjKQp6rFX2oEF4m6UL8degj2iBhkNPx5oKoxThFqzwpPDcgM9vkBKYsrcihqSrK",
  "key13": "5D6wHsKNnbhf3H9ej5rqjHYc4sJh26s2vNUTTsDLvJZFkK4oGo2vjGMSvDJ8TNX6RqLcsNmxrHY5h8rLgnoHidQ9",
  "key14": "5khpDjXqA7jcvdHV1dUZundAaPZdy5z6S4DHeKnZozX5RbL2kD5hroSPEVAn4SKvvX1bDBN2Tdhvr6PUQCfWbHxw",
  "key15": "4Vy3Q6DsefUfok7j22TxRRJsP9VstBzdCBE4RLJqDT5j91aoFKyrfhBwvKBbuAqBdRzCLp92NYAEQ4NEZVBN977M",
  "key16": "2w1QwueZYo9zPSazmLzeAUZLXmpynHYKDWhX4vzqXCpnkiZsM8sVsXNxEANQUUYHfQNFmD3WnjEvgQxZ7RrndXYm",
  "key17": "3dcqSnR3q7JBuByyxV6pKXqEDcrbXPtLK89wDKWMFN1LGNNRzahPr1YxVtRzpmWZESiEfofX5eY99UdNdK9vSZ3D",
  "key18": "5UZ2ZCUvFX5TwE4rYVAL2uyPR3qGX82jikT5Bzg59xmTqxaab5rRfhW2x9fCNrLXqjFhqyxMztyqAo7LCaZwsFni",
  "key19": "4dWPuGiTpvdzYrjxhJmKLhxUxVtrCGgajNWo3fZm5JzkPDyMVbMbVR9vbxqXpUYShADiYY1ZRsa2xMKyEtf4mFYe",
  "key20": "2UhaiNRgpvaqRFYGeik5FmxhpFbthMP4BHyYvf5bVUNgfNvNpKyLMeQYc4BXjouj9zeqEZVmgPgFCNz3KTAF8eGa",
  "key21": "3yg2348UvigFKtQF5MCVsLudht8VThoiCEF5hQpdGKVoju8JCb29RRoiMbPaRFuiC5XkaGiqYSmmao5sGAqCjpz",
  "key22": "54kvuLYpPi573sLpeC7yCpvDqFxpRX5rZ4DQehLjSiTrdwFkFAn7883Rhgvd75CoKW59jFtALofnkEn5mGHhFjGi",
  "key23": "4fqtdsJ5nNJgbYw3WHcm4dywnnTsiEbsd9Kk1or1PHNbnw2vNA54BmthpPayFmUVFyeeMo3Zs7BvuJMUYQ6u33CR",
  "key24": "uT9iDyoMRYQhUF7pMMigDiSBvgs5Cx7Wt293s8PiSWVCChQ7pSaLT376qa6vkmvpwES8jAyhuMU7FFf2fQ1cVzt",
  "key25": "4DSUCAw3hSM58m8ucHG39kyiNiG4U4ryCVqCTFmtsu1BdLyCrcnH1e1gsDX38BKu37GCqChJcA8EQCqMXyeu6xQd",
  "key26": "5FpGRoAmaN1sJXHcyo2XtBPsxywACzTN496Y9fxdt9eM3gt8bf3PWSXoGRU4tcGyXBzd4MA7wTc4oidjo8YMx9kk",
  "key27": "2rVm1NMJQ69QSBf6gYC6DVuEUmEDwMxCXwSK27YmtzeMsAZjGtKWuzL8KsawzCjEfmGPnT7JN4UvktJNfK8hUva1",
  "key28": "UhkqyJuAwZGeENR4k1bhicymiM7HdyQHjXeW7vEXUacpYYFZKfVcro4Pf7uPqCiFBfk4WcMDc2c5Mzq9nLiL2Xp",
  "key29": "67BAy2aT9g74SYuic5R4wmcZjyfuGwK6Aj6c2iaH2RbhxkEZ1VNz64ha5pCqphtG2bgQ76tyf9rwFUZhf3FUnGga",
  "key30": "3Mw1YFPcr5SV73RAf9U8gQbetbyzLG1X7kcWz543nxs59zuD9Ctke2XRMK7EdZNcCdhHaWhZRFbNjyX6xx5UVH2k",
  "key31": "2nfGeuMwH9R9PLT3k9Nc3GHR18ReSHY3cJLXqnkybhShwTwtpoJ6eqWn7BcKpxk9Xy6du25yiRQvUuUD5WkVMdQJ",
  "key32": "5FvFjxdXfzBTXTUM2KrtYwucsJEAdmEU4ecVb6E1row7Y2BChz7KxbmCqveN1m3zmj8v1wP8RyM4XRoiBWvyVK5y",
  "key33": "5Qrdm6KGZLSwHLYxnjXcSQr29exRJnxZfqR954SCAK3THg8CB6WPTTgz6prxkNkWtFp365thh5yLe6BGKpadbLnw",
  "key34": "48E2RWCJi5wji8FEPc9DXL4ToSj3iwFKGn5kRiZUfAkghvwGHv2RcQuxud6qKfFGsJWrYkRpcpcDJbZcr5pG959m",
  "key35": "FByzx5ri8mqURmFHcLffCMPx3mSn5Zx7hLrHdTUNq7XFcHGZgjjzT6BgbH3Y81ELVM3K8mBg65notaXzhU3YGar",
  "key36": "3dhcfzfAjCFyLUfyv7DywigathZPo8m4AMeYkKCFsZpoeQyaPrQUqzoX9ACrFiH479dLfy2y9aBz1RDLuARsWHS4",
  "key37": "4j6r5yhcYyGdHiCBbG5dziFYJQGZDaiLioVaVS38AKYWPHN7F76zorBDWazVbLd8VDZB4mirEur6i7xqvLqzMyMx"
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
