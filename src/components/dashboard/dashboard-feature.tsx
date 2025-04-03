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
    "3aGvdNdkZQu4ZUgmQVU2E5HFDutnzAwFoPJowVbwoy9QD2gkxeMVdeYCTTekgAezYrB62DLLUvgDvqcTaxHjnRzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBzvYD2K2BDwauVjUzzVQdUm6iVMZjjqPiyVNRpYMFscApD8sExSGEEjemcqPDy2WTDvMqFdJdW2scZZnzoWymK",
  "key1": "4ywChEeDEYYBuusvPKRpjeCaeWerX9G1uLemKjsv2q9xF3Fjpd47JWZ175Pr1YwmjsSRRz5cr1EHkZKfZghub831",
  "key2": "4vKWaZwnDWZ1A1a6E2Vq7GCNNTdSV9U75qBNenpHx1tj2NqfFTuvvNFtt92upnmqrkBUNFS9CyLNhe5Bd8hW8W5L",
  "key3": "5bv1TyquV7bBJLJTTo6LrRBuaVzyCC6LCutkfLBpm7mHJZQfrVWFYioyhhCZf6TPGEsXsF6N7eKQwb13ySTwgTTe",
  "key4": "36bFCtj92KxwD4qzUERF1Qjcux2UvB4Yrc2PcGgx212XCa7Khe2bVLnQvmjcb3DzFNcBgdxeF8QNxsjqsx8vc9QG",
  "key5": "2Wk56DmbNmSL3v61nBS98RT7haqN1kEHUjTkymkJpMmgEZ2Fog5vW7kc7tvHJ56xpNrrZhVArbcxw6Ka15nCuXq9",
  "key6": "51MjQapmDTEiKkCCXCZv5sGhzPwmyoKkUCC7EFft6vEwAcrUm9nK9NUBrrKUuiPV6QXVa6nL65KLny2S6e1weYtJ",
  "key7": "3QJUjoeB71gGUhD56QGd21D8sHsmjgEjvNpBF73HLy5kUArEn7a85bTC6PXFkGixWhfiZc99BcqYdL5YyEgsw8zM",
  "key8": "3EJ3ukuZ3wJffYhq3x2sDSwpukxH86iQcYjcZSkmnWcZRgjt2E935PktMpUskf37amRvwUjbxmKeRJXa47ZEiqcT",
  "key9": "5DKoK4HeHMwhDiLqSC5RfAJpxmPABM6rtiLGUsgEeT87ioBqnCVHmrfZuVvttTTH1r7Vggi398c5j57xCQ3tgyUy",
  "key10": "4Y7yjhjfM8hdnAoDgTVnE1jKuPgbuvXbvBKX2dR9Ua67c9itnkSceLQvAqg3Ji68bwNPZcz5pZfWCsgwko2kdLzs",
  "key11": "3HWw4Sf3aw1E8Qp2XQGwkNVSGaBXqpQb8PD3TaQ8RfJiPBAVP3K9zBVDPVugjVoqJMRqcNko5KWfBtXYAsHwN4yp",
  "key12": "5feDcwFWiQkD8d3rpyevFhmb9M4Hfzw3HCKwzHy81CUdqdhNioveJtccfriSZqneLfHBcMziZD8kVTpAby8oZz2Q",
  "key13": "4tw6WewQKHZRQGHGc1Z8qtRuYD8U2qRZNvu7xQzhcyq5DGpLvpdyd3tKT5WFapUrsDZg72wbC47chMWB2kNAqbka",
  "key14": "htz72pCizTVyNiKuszXqi7abpYjMPnwU4nV8azzHtWurgvCEgtayft5ErQHcxdEtwy6REQLuWR1AbVUpYuCSnC7",
  "key15": "51fcjWvJqGdz6Ww8GAWwLath7hQh952KD16ABiVjwZUPpGDMLtwdJ62aZaFrucBmYLeS1xxaF4nfaYypvf7X91DZ",
  "key16": "nTMTfChpH4YFfYKtCZKGEFiFzWEW4szGr4jXa322vCoMi6CgUxUkTxY7WssafbTQLFZefUCRmYTSH8xEV2avy8i",
  "key17": "3mAngrgASJR3wKDgyjzVmJtB17EwDKF1q79DfzTSiMrmQ7sqj58Sdp5FrfRGkRcnarFWYNbbQ8cJcHUzyv8XwZc1",
  "key18": "5w9YEE92kQ1AT4MRj9DehijLhq8Hwdc6tCDmYndKoyCdqX6beoajBUa9duboBrDHVjr9ZQtuT22oSPZZwauvWXNJ",
  "key19": "5oNkQfSkiJ8achsGm37WPJnborkVBQx9HDAoiySdeGiGugkeS2aPqRDuU1njdXp6Jg65Qdxyzw8RgdUnemQLGmaM",
  "key20": "66viyMmrrceWkQUtBqouSddMmaHEpjgjMGayGezPkYmYRiqs6mwB92f8fad359D36SCiqAwqkByZ4KfRTgP16L4d",
  "key21": "3yzsVUQxL6yZ7yjfLa5FiyJKdyk6P3JmZ5e4QG2wbpSAfm1mmMuZc8GEMAfJaGCRq5GqsP5akSYUBfPWWPvEcAxb",
  "key22": "5Zx5HHDe2X2EWNLJVS6PfkskankzawEBaP9wfiE8kp2QK4t3GonLi6mdCvxPspLeQYx9ofMTQty68m7A4JztLKKP",
  "key23": "3bZ6rEsLwL7AEicAxSNPTfPF3CxUh7CeJjXYHinof3AwY1fAZqpvxtFzM6KQXJX3cz6qnMX3pDDEVki1NSe3ad8d",
  "key24": "5WM5dYeG3bxLsaDe7g3bZqCsGMSFqabDbzRmvyawbNJNbZobKjwiXzXA3fa7hrmT9S7eJRr1SqYHxBDPZVWQJu8L",
  "key25": "64zCuSnmni1Byo5F7Txs5CfZaAXR8SwchPSGvqmKeG6uEqvBt9XTUzRsgJzP1hosCHeg84avxPB52xs13TyiWnW9",
  "key26": "3LTVPxh25vbRqutuBD3hQvniHnmh1ivbRjxPytqiBNny3LmP5SKWFnNKsqZKhUHZjAUJyQ6KHukvQkNn9dLWXfPs",
  "key27": "4xEzmadnccfZdxsqozg7L6Jd9WdGYYYnuMQyNM5fTDq2ajk6E8GtiRzkidddCbpHm7bkFPSe5iyfisA6wT8RQvDp",
  "key28": "5VGVh6j7xkukNgSbNeG6jHrU567hAczFxo2iQtioUr98uPz7t8asD3LTyX3Vd48J8HpsyEkfdbW2PvPNMDgHKk5w",
  "key29": "2bwKe2FXGKArofYpnMcRxDEnHf2m86jLvDXwHhixbyUbjraxuZd7zEhsoJECdTBJvTErxhoB5DVtQnDp1tWssCQJ",
  "key30": "35Sf3T2263SkN1QSjijdt9KKMHLvt9ksDaqe7iLAtc5G4PEhHRDesih7L2v9s7fU3EQiuetwaeNwRhAC5yUi59EJ",
  "key31": "4Qutnq4hN3KPUgovsdGKW1RURLZ6bA15U678WDA2y7AvafhD8U53tL41M4rNsw9U1iBKFK9GCxn6A26PiEYuBFg3",
  "key32": "3piYn9dD1HC77Ui5QaJS9Uat5omNekczQkMFxQbe3VpnWhdMBSMJ9yXeRTTbMLujY7vWevWiizF3fk9o8ZLnfm8J",
  "key33": "5cV4GyvZeJAwk2DHkncEtEkyDxFzW5H1KJB62PzYDZ8rbUWnFuvdyCaBn8GPGQuai9uVZCv7a3TySsv6bQnUgQUH",
  "key34": "2H6eLqm4o5n6uVZmCbBNmA6tJjE8xfeP4wS3TmrFKeRMHdqPBgiPJma2VkNcHsWDgwR1YZAaC8Ti3v8BqFZfQxKj",
  "key35": "64DwSKLjLwsdcpaWpYQzsYY4aBmUPgk8iqbUPZZdhwRgbc2gFf5oNacCgw75QRdxPpqHBwFfcZR9wnfzY5f3LV3C",
  "key36": "3J7KXG9dw1fi6SNJVGNjK7orgQLK8kSX3NMoV7U4CUubukJb9BvMSExi5d6EUN5hZVnV9h3jLAH7AcEHEcompdqT"
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
