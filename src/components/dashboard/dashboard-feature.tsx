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
    "2b1QxafGYg1oyXXoNMfX9pRRPKpn3fwmVoTqq6oFjHoYGX8G6oN98gBD1bUnMKVoYP9kmw4uwWMRjBD19hez3hcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFBsJ16dsDNQnw4xiNBgNU3NejxQs3aMUzzkhMiVvgcSFaUPAJ1UPRCb3VLUDnnUxSKtdM4LuPNPhaxqY6WGuqN",
  "key1": "2uDX72X3kTztGm1SXCvC5ryhcnojsvKo2uVWb3P4YTFjPp1MXYCWKY1VctrSkEyz4PjqqtFKugXcXtDoX8wEmZEj",
  "key2": "5qeej8joJM9VkhrzKDcaXnZu1czbrDbYTcnxca4UU125zyqtb2W85nsVJ9Bhx3sBaZa7zBm5ysnWD4rVNooH7PMa",
  "key3": "5wsBWn8FubGCpnuh4vDyqeCXpitsJBztnUy2URbNxo5rADHzQVBTYmXeYSaSmzDbe8aDxbcEr4GdwHbdKRpFYQ3o",
  "key4": "52N9UJt68vd3mKQFzHWKbNGFDyNvwaWsXTgkXLuFsRG9kC3CxMiU4oHiN9c7bNt2uxJJUCY9wFBaaTQ6D5V6YV3",
  "key5": "2xEodszBXnHi3oQjPevEKKUnnjnEmbKNZfxPxjrKtpVvXueESkDM4WTiHEEGksuC2PJ36SLer8JZ52MeM2BuvDnb",
  "key6": "5Qgka8fuxwYKLtFkhWwjmqhnTwuXhaChwhLEAc3YKVSZxdAzxiGD7Yf4FeqeGjWpQguj1qtHzghyt5PkXboyxRSD",
  "key7": "2jug1Kt8mKqgvyRcqkqRS7478pSusXn55XB9Do5A4qnAHyTu2DAqMo43GEBwjVW7ed8mkaw86G68t3VBZckWSVpq",
  "key8": "4ZMsmQ4YzAbCxM9cCRe9CE553MtbJ2sy5cs9wPGYKqCb49iCzkXFFYRdrtjGRw2EQTB6S1fdJVc9shtiVvaHrGP4",
  "key9": "5vfzsLqCTcAkCSa2fph7thg7ViG7VhyLTULqoHdaYL6Mav1SwpwWMjGidtzPuLqAmK9hGUTMbaURHW7rjRJF1fzR",
  "key10": "3zwG6iXFwxTxA3LJmA8gLT6UAbV6TTAUmcSnnLHEvdMhUeupvk7rQT6cG2yLydmjssy6qwrCdd2EUMHykvbtGQHB",
  "key11": "5191MS2b7iwZ1mrhnSZnsUhRUDfmKqEhWEihWFqXWcGmZynhwvgfZY8vUScVMCBYXoeGr3YRtEjcB3eyoBAiyAdv",
  "key12": "31D83tSK1BiqkfS2JjZTzW7MGBu3XhcfqrWmYUKn1EkwJ4vCnGnDakqR6CV8zJCyGNy6xXiQyuv8wc28QELhq2uN",
  "key13": "5ocju6gG7eiDZXAPRWCSJV2wgS6G17PvLh71DKimUnoH3tMkkKKsLrDFvEh1iWonKqSaTjf7Rx8fHuT9UEAE7CqZ",
  "key14": "5jjYjCi6XedjfpR6invBP2UjfZSLXBruaqTMgrvHg22sTXT7sNynRLDPGq9J6CbYMcJ3fj3Me79m5JAVVeTkKUMY",
  "key15": "4rbyEbV4Ct2kvfw4TLpRBSR27kASv38goNnpthSbkLS6eK8zo2TgLiVENrpTu7KzpMb7Qs4vwenS8nxiBJSks7CK",
  "key16": "rRTPMJff7CNBpchtMDoS9ZA3XAU8w3yR2ZTLN3L5CZsakwbQJp1qfqmRCT6mcCgByqXNWkBh1hhSeiVsghpc37h",
  "key17": "3emaBuvkTP4xnV8Qe2nYBdwLNEFPZ6dRvn8crbMg6gC2okErynSb65oL53sLvu8qoUU11DH61Va8sESkwR5Hokqy",
  "key18": "5tyj35aE74f2vanQtKWvbJtKx8DKPK2Fh4xn9kbnHgWZQtPm3QXGGPMRs75RvqKJnQ2myoNWBaATiwwkVWgnr1ju",
  "key19": "53NLBajjjDg9BGe357pyJ5yhejTmz3Zda5JLPiK2S6jB8kR6FqksY8Qe4o9wpUzVjGVhfmkuyusA76Sp9Yby1XHj",
  "key20": "2Ppwcn5UKxS1HNyt7sCXzH5espeP9jS37wBu97e6SZqY22aappkpyrtSNKCRvCBqmKUeK9x2JSWGgKC738kPE9Sy",
  "key21": "2x1sc45HCMwLYuZvytu6Sk1AQu7Ekt8RPyrHqv4FjbvKmvdvWKyco2UNJdX1hDR2ipwNuDKcwTuPNxGjZjicheeG",
  "key22": "qXSnrqV5mQQZMpbacygQnbUFXeG9pTyciY9WN1v2waVTLgfKXSr5ahGBp1iNctfJVvznmmWYmeZH6uf8P92HGS1",
  "key23": "2R33kzFtf2m3n6VgEpYfRcuzoPGCTFwTTNszNbwKgSfhALp9dxCKHYZNvKi3rZyJ5W1x327YfUcLbBHww75RgwfJ",
  "key24": "3tKqZpAut5QCnqeDeP4hkXvqUvET1HNUgu3GKaDVC6mLuBnDikfQNy8jaG4YpFp7Aq2ELpMqevmKSrLv9Sme5jzn",
  "key25": "32A23SzzSXR2GpV1RhNGc384BYjoHkwDqVECUe628sVUYTtJbCH8e4kFRmWdemTCc1gsiQp26NmRWMKj7Rq2B9y1",
  "key26": "5AL1oRd3Zsmx5WzV9kDesfYeQk8m3wtTwTUyeMDNreDL6kEoVgrturfBc2VvPNMbLVBvcxnHcfoNJwwcPUw69z6K",
  "key27": "3DoVjNwBTr4EMDM1q1ojMGJkgXpM5EaiRXpa8815xPQYGeRQ8RVPT3573tcMpFf3NCAWwx5rG29vjFm7zaxvTTnj",
  "key28": "3yS7T37qUiQgGSiuwyDQqXDzUxpU9NFjxHap4dFTP9ot9sZSHvJCdpSbuhuMSxxTKTnbkGCxtadW7uuQJioDAZSm",
  "key29": "22b2UCkUjvDNpMsVFgjUdbkH4PNciYrMLFHb2HoKYgiSJVJuoghvufCohpmLGZBXuyhjR2P6k22X2oYNLD1YEtce",
  "key30": "3oYxGF5HVp8tNGz8ra44kQd9unZwjKLj7aE4iFe8QpL75aooLAgfXadwbZVjsryJ8hskgk6etmwU9ydTNGnLXMhn",
  "key31": "2agLoFTLxgW7mTa4ecFtYj9tM2wrmVwEy5dgeqsJqn7LpAnVKA3AJKdfGVRfVFV73HR433AbM2EAW781TB52akfB",
  "key32": "5nPXNAFPyuCioNfxEXweYhB9FyLV13NYD2zdvHeKH3iQNrVwQDidf8G9eE8xb7UAqBkAwBUT7UtHAucj1pFLyzJT"
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
