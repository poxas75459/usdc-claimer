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
    "37ZrPdV18airiJqKSz6TPrdJ5CgrYsRu2wPX7RA1HXyFK9Ejnw1zYMuV4D2PPATHeD5tN2Z7qSFPtCBFFVaDvKRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vyuaMWDtWm74Ps1UDdekyki4sceuW8pXDHkkgmAj62h3aDjSZww1GbPyxXBg15AZiKtPjsBDJWP91K52HA6y78u",
  "key1": "3YDeYwcLLMxVPUJRfnf2rKhpmGWmRayvZc88DqSB66NXPgnXZxRZPx1yamX1AgFAKxxxDB859yqSCR6mD4rn9m2S",
  "key2": "27KKMD9caiRTgL1rc3g5UfqqFpTvHqycEMewGbNNz6r15HYJUX39dYef9mWv4i1v7iaaLwDaxi4YRBK9MiH5mjhM",
  "key3": "4sbL3T7Xmk66HKcHEoHuSjraaDi2iK1Rmz1fcinKaWY4wiLWb7J3WMcVE2oWPoBuZfCG4BSMeBbRQh83SmrNe4EK",
  "key4": "5dpCR8qLbVEopSJ6z73yRqi9YBvS99RzQohvSUpZgb2zWtGfHM4pnNRXCa3Py7snRNBuWA6unDo6uYkScwgih5mo",
  "key5": "5hZwCW9XptncdjzyiEsRPBk2xxYCXky38EwF4PFFwzKFTeXtKDfSzbbpdr9h8zQtzNhDkMt1BiGsu32YAEA5NR7d",
  "key6": "5FF8kLF3m8z7k2h2BkJNkBMKRrvZ6hyfVQjvo1YdmRURjjJvFbh1RhViz5S6R6cfXRKXZNHAaPdSH2gdjj87jd6E",
  "key7": "3KyoENzTR1gvB5AZjwbgeZpSafNYFdFNsx9aWzawe2B1XHD9g95JSRQR1tkKdd7C71DhNdp8ktaVRVnSiNbVjzfc",
  "key8": "2Njkev2S1GujH1br8FSdTGk51CatpRcy6oEafmh9Mod2v4tL9xfpYuUsPPA6SUkC41rRzKXvsKu6A6qxpTCcfdnq",
  "key9": "3tNLb2mNe22z7TQAiszLJtfK77XmW5oLbbPGHBArZuUjsTzw1BPfYkq2r7FdSEz5dHBK97SkhAnNq7haDFjNTYVU",
  "key10": "z9C2CURgxM4QWF44yQEXKSTwuHFj6git4yKfmQftvLzHH5gNF9Wm5ysKgyoZ5AEJNSiwYD87Ef8GBq8cKhLpNhB",
  "key11": "5tn64qy96E5e8XormQiMhq2rBaoT8Mp6RfHrq3GvtyCz4Cp672ieSU1onmnPoMMoqBbLDawuij2yfdYvLcJtrmzx",
  "key12": "2GRY1Li21abmA9fHswALC7Zd4w1PRWCt3G75WsMJdp8Yf25ywc7jgUz4m3SzDzrWroeajTiKpsusoJrDAwoCqXyX",
  "key13": "nzcYsykTqWWF8naTxEoomS6E9pt419yR7NDFuJM67oUZuNzLWzhcMvSHRYoJiQ3w2KW7FePhocGBZoDyMVvwX9x",
  "key14": "54CostngjvBGRqqxH9Y9e2VHmaH2t7Ky9gUxC89PPyqRQxL5UwLJbgAq2MMNaKLcRmWG95QBu1NBDxndbK2EEzs6",
  "key15": "5SLiTHPpKH1ZBXFY2ps6imK5mmFTqNVuzQzjxFJMNVfyw35RSUcKaimCCvc5tm18sUFTZYZHa7S8RrzJhrBkpKCS",
  "key16": "5WEFBYwnA2knngyrcGS7Hf6CG6JLTpazCXqoB74k1rRkzqU8Y8jBJFSpv1KbiQBWZj7jvGBdYR1XfP9Wki9D2UPd",
  "key17": "5EtE2Tp8B58ULz1EfBpWHWxx7ZK6dn6DA4DrU81CurDCzzmZUvRHeqGVHRiLZgnJpxTAB4xwPYLo8smbjL3WS6yr",
  "key18": "4scy6oetDDrtBYL2uZipMyWwjRAR2uiGBCf6rRbGYSutuyiwBqi3dQbRVswoQLXfqwTQ7czNK6FzjqExL4gRq6AM",
  "key19": "45k4yMP5WuGJ6CKsp9SjTCS4guzQ8wfgyxejCKrjrjToUNhpCpoqm47hdACbKY6kx7NQ6TpaTnyFfykiH6JbQiAT",
  "key20": "67gELeuJpXRnmzhcCSavofNGFaUXyVhTXrdkMkZwvKQ5xzeDLg7CAjrjnPvi3Hr5tdS5sTMGPraGhpaAUZDHSVMq",
  "key21": "2oZU295AJ54sn5SbCoEpYQ6ETnrwsFcgJADVEg2K8ijQGJ2Cs5xzVPqVDTtuxssuY9HdfyMpnFCMLV6Rn7EPx3UJ",
  "key22": "45x83obBnjktoznfuSDdFZqeKakwCiNkTfdhAFyZ4HaE8GiVtjHAtEAr9V83GPjjAXd2Hch5ar9GyGn86SsFUbHQ",
  "key23": "5maT7A6jKSrULaAfm7AtJDfVFNeQ4vRqH3EqHbxrP63Je6SwSh2XpPDyHHqHTaoLgYAkVbaSnkyaammREqworvtp",
  "key24": "2PS7oTi3kwKWmMHmfhr6JbBiVaUt2MGHvF3YiFHtJwmssWtPiTKoF3mg58Kpvropv2RV8f3JE9iTaF7nffQ1NEFJ",
  "key25": "51QS9wNTD2iEGVAQdp6jnwFLKox4NxWEof1mwDKXWMKLCUkx5r8igWAe553RDxBiAvqauURgesKRpJTtUq4swPCi",
  "key26": "eAbdHVX1tCj81WN9G6hYJ9jsz7ZZcPR3k9wNLoSV1VJAo5xRXSJahPhCHdePkFKAJvds2xoqzXsJeDcepFHcvyM",
  "key27": "bmR23h9PHiVrtGYXox5REK8eqNVNhf3ywWEvyxyxK4bhdqBLuq5EwFeXJJLR6SmjnZXy55VHZbeRrp8T5YXfWHU",
  "key28": "5GShekBSVYFzxYmnqm83uBpF453EkfbFJ6XFZuS1HQjtFr9Vsjc5Y19XvLLHXvXAQuXZ89MHooMeYhQnRxUWEC21",
  "key29": "3rY7ArZXrGN7M3X5oi6NKckXaT1U5pefbZEaxo1gntv7z9iWfQzgxHir3SsSavN3okvW5aB5fBc5HBe27xpG725v",
  "key30": "2NFjU4x4L3Zo2sb1fdbUvU4ptdXBV1nqcit3gehrxPVvSHNGxD3NMq3nrZGsFKTQociQDYX8ATHReF4dEPH8zMqp",
  "key31": "xcLt6KX8sxNJ5vqTjNX7cz2rwKFK5sL7XXoVgT8vB3A4DbFTnHyisaUex3VUkPQrmwJL4DzceWpn71Z28kwvcb6",
  "key32": "5kQK9a7RYsWyHThYqyRPMFbXXfGLG1VdVQDYxC1QmKjmLHq1K5CNhp1Ymi2BPh5j8JGPXGkWaJ3Ukm8QdhiB3yTf",
  "key33": "3ZkMa7hrndnmG47oJX1hi3cHZfSGDnQvEarGnuAjHR6NXbCvhfaGoRae7TVL7qcFHwiptwTed4yCSNeu5Lr4JMpF",
  "key34": "sEyVsEzNr2QZexHQpE2Pfoua7yxJfknn1ETr8D6YwJtfmeqGsQAAcMfuxVZvi5AL8287Wyzds3U3WVDrTM3e61c",
  "key35": "5Vyo5bnjWBQYuT59Kp11DT4Lo7Mx8gGM7dfcT1VYSxA4Ewo7imYPUs7DJ9Q26TCKSP1hSSEZzCdTrF323Q3hBp9S",
  "key36": "2js4RXUiJpoMkPcdHGDqk9LdRnCddCd2kRXXaNFWGVLhWXyE4aXjh4zK3dDC3gh9Utsjsk88j8G4QRhTHWZo2vny",
  "key37": "4ftCrWTGzLfXo9BwiBhrDCWHm93Fjn6epVCB5DXeMtcuuN2otz6im7x21VnqhSrgMMGqDZXr164CGz7oxd444QsF",
  "key38": "3oBefMVPDYisdpuoT9EAMPt3fh93qwHCFS4Ljtziz6BEPusamSevqgAuquqtX4cMu3jvW6WRCfh81aPc3HWpkv2r",
  "key39": "3DDdEsgDvRwXs5743dzL88rJqfoZD15BV1vazDv9FEa6NWETZcQ6jiMo5V1zG2TWasiHdAqfZFBQ5bg81fhNsdh6",
  "key40": "22Tsp788crrs98rh2VkWZQopAzUpHiQomhd1CRmNtP57wWhJ8LB7MucqhoZFDgfXEYLKJtpG8QCmjDEa38cxGjSm",
  "key41": "9FojpbhnSVjSWewyAJD4VNSGiVDG532WiqM2zSMDbppYPsEbQzzwk2RbDpj2gcsWH2HSGQGpCNtoa45iFsfFPLY"
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
