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
    "4Y4TeFax8WaZhMRq7cTuDqiY5QzhG65uZU622z6g8fCopyXDGVU14PdXpg7euRdu8wcogQp4GaxydVDkjV2YzbEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtVWSpsqiZ3Ajefpsxhto2UmuzGborxH2NHsDJp9DP4icGU5nVDsVp7tUQrJ77L5hEajtawHgdc8CzCMrs2cxNi",
  "key1": "5ajjMacLSpdMHHeDj3CiQhhVH5JJZF3a2rctFM6X9DGzXkM17aPNo8uJVoabcduJnUtB5sjeMV5iDoYNoT9jx8H3",
  "key2": "2KpC76FRzdU6zxGsrNiQkP6KPMSFZRUNUykVEq6My5Ynr3ZEt2wBjPtz58QccnEZy7ujajanizpyPFtyvtaU7kbu",
  "key3": "2yJU97bmd7CKBtvdYKqKKSjrqTHfxwR7idYaLbgak26s8nHvKucomLCgQkVYT33dWit1QBbVPqDPBr3mKk4bk2wG",
  "key4": "4tDWibiQGxjBSjwTr8aGVwCrLoB6r4xfezWh9gdQngY7bbS127B2JZdNrkNAub5Vro5j4rHuZUYam7ysdTa4b2ML",
  "key5": "5LgrBvLqZ8U9QFTW4T4Zm21TbDjW47ZF6w1atRV2KsukMjmGFJ6KLSQ8meoTx9uVvwYBL5gbDLXBLAEnoT375Pje",
  "key6": "2szBMENbpZwnk9gc7MXxYyZdsTnjuWYFMMutR83zawaQmAtNrXgrcPx7VWyZxaWE18biqw7aWpk9pRru8R6jqAiN",
  "key7": "FwVh8rsL7HSWiCzKsFxZZSpBdcjiuGqUptrhLhDjBrVJYtaX4Wd2isEprsZsC8SPzQwUHwDNzVSoUjjd7EvZdDC",
  "key8": "4t8vNwdnp7tYB271yefeqwwdro5tvgpxqRHc3V2imYSiABLc7TCanMqwphvoDDR4edg3gfB1Fuon4fEyGo11GYd4",
  "key9": "ZAEFEa8E6ZjowxBNqzUHeja94WXCuqf2cshoWizXyoiX1RBNyjirqMaU2qjbPg5pT3twrvWLtAFjMLe2MyrQqGy",
  "key10": "3VbGUH2NdaWvsKG2mR1XMGoyUdzoFkh6ryayGKbnsBMmUbiR2sMacUYcsWBX2V5qE6ew7VTFdAz27mqer6613XV9",
  "key11": "2XcUfYLzij6hMg8PNnKjxKwGfijph3kpeE88tH9QvBKAs32YNrXBv35BwPqhy7z9zsF8zT5WrEV8iDTRJo7imtL7",
  "key12": "42Mued3MC4ERTF5UoM3Kh6Dwh1MuxEyAgiVTBYvKvYEALwTKDBeW1yCDvzVz5Lm6jhLo4UKuo6a5uUJeBhdpGBzP",
  "key13": "46eCaJJGRMZYyKBoRURezzzEBycYMcGxwiPzLyZsDBLqjzqjaBPQyXimoXuwqhfru6VeiiyjT7mXgaccD8s91kFV",
  "key14": "5bNN5mrYRsUUieLysALSLWNXArCD4MkiS8ja2hUpQy3smnfFsfeTaMxtXP7kxcP2gEyUTLkEWnuxFhNJbvYvd47h",
  "key15": "5NWXzw3oQhxKNwUFggwWXRHGDctysdzdXhJuiE7cbVAnSZpLkTkXiGtgf8WQW4wEjLEjZds36gEJAXFaNK4i5MeB",
  "key16": "62NXvMxYsXVU3LxXg1YCLcSM63ZTdVGwU6Wt68NL98Vfnu6syfszXHqCFyHK9gWbdVUrgzMbJCghWmQMU1s2Kcme",
  "key17": "2SphXvbuycQBaU4juQrkGGPgmywmugnW5XyybN1U5bufZ97KLHLu3JiPY8Fhyj4VVVMSxfUUMAr49h2hUpzyAS4S",
  "key18": "TdHXJtTU8UcrfTNENHxpwJ2g2pniM74df1qz2LFkYK8ERyZfxTgPECHXzsoGN6tz2u3CZJS5AJfEwsboamv1NMT",
  "key19": "5bfhzWvEPH4u1kSzXm9MUc8atSecAXiFD6EWaon2PM9DZUAjfMcUB5A6j85QL8dM971GuT9TQhoiYXWBLSf5dLP4",
  "key20": "2bpdvSjvWeGbkgbs2uG6tecYtA4XT3fPpgvLpvCk3HFaJxHfQ2iufxHouuwvMf87h1YfSVt3DQ49Zoqkgng9PbRf",
  "key21": "kGqdNTfdNcRhVXh1PQwNGZfnx18LoAmjaAE2g8u7Gbc7xw1AnwehtxdUpR2PehNpZTGDooZxG8oJD7rbFfZvszz",
  "key22": "4wMqK5LyFQv4NkYn2MmG21GxwcNofL6NKQFTmt5MEvmkqesZD5V8Qg2JPFMsFyLyq4oUN6q8QsZ8sZNMaK7bHbWJ",
  "key23": "3u1EqjnZdpBQn2UEPwiqNkZeVTYn974Jo5qFKeBag6kxseMDSjMaJz5rBoRH9DC1eUR8SAMxU2wKm3wjownWTcJ6",
  "key24": "2FwyK4nh72PtSMF1yB43rRaFc7Nmu3Jmu4gy45ayfQRWa8arPuXyrFzKM9nhmfzyXHtgGnBwueY7jaPhXA9XqWGf",
  "key25": "3XfEPMF8HqvqUKz6jGijmH3RmaTHf6dLmrzXLfGghErqbEe8tNtRbqd2MgS9o3UEM8LKduA5EGjim4MjK7vsne2M",
  "key26": "65Cr65CRAZs7Bdkiax9Ff5YfAn1iP419jR8JwmqQtubW6Gh2h6dKdAPbxNMngidJZutEfgiNyQkowe8JhUwLMnxH",
  "key27": "2AirmE7VmX1rsmv1ZBdCuWApaHgQkEFyazLf73Mc94mpR81G9FX1CFUWu7BJmHtkzk89EH6NraeQTfabjYgmBTAH",
  "key28": "2BETeqhkmxvN2SmyyXLzFzB5ids7nDaNivu1nqgqrdxih1BU8GT2n6KfcK6z156ubwkkExrD6ytxRKLtpie2Dwiw",
  "key29": "3oubssZC3bwLaPh9iv5RYFGwxXE6dtUvwCeTauHwLjfNeiRM2oB1sC517gMsJA7h6DktLC8GzwMZGtzM8wsQWqb3",
  "key30": "2gXt8fSoFonhNAESnqtBPWgdrRYQWQMjnWPUCWBkghgGwKStEFVYiat5EGtVDtyVEnFvcPhYSbvfMrFhwHKmaQak",
  "key31": "i1fpYJ9TpTRK6Ej4nmpRfF4jtFKo6ZcozUSY9HWiQ2ksWkWe2M6V1DWu1SeLh28n6n3G471H78gH5hUjCtVfxS2"
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
