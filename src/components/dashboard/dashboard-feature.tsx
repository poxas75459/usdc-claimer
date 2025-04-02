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
    "q4F3goEsBDMNScuZRStDi37baa8dxVNmzDsjmmr67ySMi3fpf5g5nTZyuzTt7cKLyu3u8yWGSADxZTueGjidhw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHGE7fCBsweNBEyvZxAvrv5gvmi4xhiXA5JGR147kEotJvEYfVEt3PhNjiHvAi1FvuVa9qaWio1qWfoRvPMhvUS",
  "key1": "4c2ffdp7yk4RkvBs9DWhmJY1z8dGCkUWV2MRdfMB2aXLfqMuMsUkfaoC9xwPWhcgKJuNagRHjiTNL2KNkkBmMsze",
  "key2": "4X2fnrQxZpcuSENq8t5AC4Wj2HHaU6zBYWpeEtJAS1nRe8C1cXnL8SL6yvkN8vuCmbhWyMFWQdxcEyrqcj6qsQ2B",
  "key3": "3Q1iwEPGS1AAt7LTHCGVKF6apcyZankG8VMqtkGMmeJ47eDtYWdxHJ8ba5PZY4gNqBqktMAaatMAaDpryHykXdhL",
  "key4": "3N8ZdW5FKrJTeokayjjLago11arW4s46GRhSfbxf3kMFDcuDtG1NwLmmXbxxETj9Sc7iFthzV7MYByMMXYfxQEag",
  "key5": "2fnEufru66H3hBvtFNgG4xmZjcdXCxLkETkuXMWHRrqmDPLAP7NypUXHxXBRVZFef9tMKCM1BNRQ7CXfXPsLeef6",
  "key6": "5xoFjGfYCexbcwWT2RYGgjB1Z4aPJ7UjbJoALt7ANLnTPxUGrXePpSC2aqs64aprzrsVBd1Cvz7GCTirdryLWs9c",
  "key7": "3vWpn5wT5DXqodWPdEFRrRKq8g2eD8fQdMPw5b7cT6JbCDQupBsoEKQXi7RjJ2bditcQvuqqrJceYstH5CXsxhkG",
  "key8": "3DBSoYTrrjyFNGroryukPTRHRuBs7gFh9eDYD7d3MVgduvFwcd65PmiDNhfDodmEifFwQgJzwUY84CLq1QXjZS9i",
  "key9": "4Qw3ZcQVafiHMJdWR9ZNtxnuJoLxoq7MfypAPCj5odvozuYyqR9xzkBEJttgUcMGHdayAM8ZgC2BMKDfVWWG5kzy",
  "key10": "4wtzhRPcY2neDopxf6mqCA4hikn612EUzVwn8pud2r77EBwH1ZN48FpQmSbJ5KsHzTGRz3DhMeqhuNUHiVxw6ENL",
  "key11": "3CRVjnVXF6GhoY9PJR9CFBhQtXsj52FhjpGbCo5kGRiCiDgpEFhiuMgwG847CS9Ke2LrLVA2GebpWBqS8zJYqhiw",
  "key12": "4nsETLgTsnLSdojM3wYoxt2egUo6Ppz2dbDKvFHSzY5MDfFqEfWrXeKpsmqc8aFWPC3gGEWu1USimFo3zYtHZQjA",
  "key13": "5fNMkNKAN37NwhBxsaPAFZ9kPhDcj9xHaUo4x25K1DdbnxoasFgsi5goFEVxJ2PWN6QD58z7CQCqCEy5bS9WzEEb",
  "key14": "5M451HRozLVKnh7rHzXAzETccP2iv6mdRN1yU9W7YJG2bXNYag8jy33XZdZcD4fUqEB2MQNntj9pPCbbdH7SkSe1",
  "key15": "krhgpdZpXyBpbkPXXdJ6GHFznKmJiAheRE7a2ZMNF7vK5q43aFNvVBQa47EYCEfbxuQRxAjrCW3WbgXBQ3D13jt",
  "key16": "5xPynRPXiwnSC3Ar42DjWopUgmuTj7woW1ERGqGG1QHPS7t1qBUtF2qkc9KwcV5PLTfVkUsaobVaek8B2RtfDQHN",
  "key17": "3H89zmzPbBB8cYtQUNEr1NXvKxJSRk1H95YkKb8S3kGyyJMDp9xjTLNhmRYexesM36U7vzWpSx28u8NoYDTsT561",
  "key18": "4EdGqpbx4GbREqnqFptVVGdwYUcNm9ey9M5bwwcEq3RoHKHqtTquy5ymJ2MDpzQM1JJV262fkBLFwbi8zc36SkjJ",
  "key19": "4PzJX43BP7Z4vMA3LLYzY9bzqaPbxZzDmLUkL8pcHZFHxeFnSHekEwmNDNWaQtH9s48tMbQ8ShXXwxYCktTtks47",
  "key20": "5qKqZsAd9Pqp6cpCco1qvsHAU3Re4tn1WZX5yBu4QRM29UnZx6f8sYucmGLpoJ43C7HSA6Fepvfrx8u8EMssV3o6",
  "key21": "2poE4PBJXYkN1GtEWywHVvjrQeZWkFkvVe4ZTENci3wz2TC9ZPFg2MCS6zKxBHTr7wgqsmgamKyiuDqMwEujYscV",
  "key22": "4FgcfY5Zhof57TZuqWyJHtC2faiWcnjx6Rzn4Ynp3ukwdZrpGJJJeaSec7VKg6cEbBzbc9E579MWGZiDhodFujBB",
  "key23": "4tn8TZL9VyxoLu7Cf3ecUiYB1kHHGAkMcpjneYmsUx4FsaEvJ6tuTqee5SAidoayGpBQob9KjoqPQVppC2k187bL",
  "key24": "4JDLwcp38c37nGDS51PThb2t28gL4TomdCjx37cCgSWn3EpN9UNFeB9dmErQdwNqd6F7qugPZCkAqb75XD2nythv",
  "key25": "2ijyhjJPNePLPF6C69fGhaa9Nf87kH6UEJJqGV75dT14RLNDwcYEz87687TxHtsmwJwivEC3NgcozyboAqc7AA2Q",
  "key26": "3TKacw4F9wLRNQGEVhdxqzphuY38kFPev6vPF8Z4L1G89SNuSCNPEYsGSUobXaQJbfbGA7E4GVyi4WvJVTu4jbg5",
  "key27": "3TMgi3jjxGV8EogkAaSuamuWQCZnqovXrXpbCAJ9Qijp8QaiZjFzUprxbzQdi79xvn12tfLCaU539qwd3Z2wtzGf",
  "key28": "4gCrbyHowFdsvnqNDjHc72cX7vMNMCvWBpmwDvLCUpDDs4J3J36H8duTDV6fgUUGQNJqvfWCh75sSsE8xtZG9JLB",
  "key29": "Tq6nLEmEd5AnpXEMWmmb9eyHpKhPPU8GT86JBmQLpNDU1TMMbt8fSiKUZo7M8syo92Z34A5mL8Updr4R9pSDKVb",
  "key30": "wFuMRptrL2YrC55dYbfT2Rzcfa8gBHzkT7AB2wo4xM2HAgJgy1p8WuSwq7GZ6aCUftvrvBS62Q1bhFomq6xQ99e",
  "key31": "3QwKULnv4HAsHLJ4f28ap8JD1QFPjJcSUTmp2wYUd5MEG7eUAiwogQyipuPCSMQUfE1RTXV4sGtEfbUXXDQ4iLMg",
  "key32": "5A5kYACK2etufvzjBdnbPyooHNjdKsjYqobrLu9yUngJQvB6eK8zdcBAWg3WbLUbqYQXqnc47YCGzTtAjkTPvAWs",
  "key33": "4QnbwAasZbuFUyBrcSXSDjRRQ3R59m5Wnzc8xxxnGPpX9XEd8oBqeDYLtnEvkSQrzo7auGbrFictBsSU7DPMcLjV",
  "key34": "3KbwdjaGCAFXHX9S7tGm9QnafNPHnamXFYy5TmqusfYAgFUH1dtiyPGDDQ8V8AugW2TfDVPhTZ3gvXrVo7MHu7pL",
  "key35": "4HihVCfNba3GXZswD2CaACyVyGANL2bMC9DbDcPSSd1SdYy8u3NUFtSquVtahNGANr8YjdQ7j8fLqhFccxeNGUEr",
  "key36": "64hSyTrp27D6BseqxcCqeYVzKsTCfK95h6mEpc1DQRaE6Hh5ZZuBnkDvZbdy1g4ExmcqPVNVBf8aebZ65csP2vq3",
  "key37": "3uS7WDXGAUaE9fFv8PVtVjfvPbKNQEDNBS6eM7c864kWittEsFpzfAgq3wMGLTwFX4C9oLeChDGwAAMsYv7GLfvQ",
  "key38": "22NaCzXh6Jy2VzRTs5yBKVXbLaesT6tjmapE7WoMa4T6G5uR1xANFgYo9SKeigTb45WuafyXd8DnCkYrusCaaAWp",
  "key39": "3WQtgaF5KSM11zseeRttbNMz6jiu5nBFdMvgSAXB43EiqcjMK426FfUSwXJNGUihHSXDuXzsRg6nPs6kAtmQvcdg",
  "key40": "3znfLLrtfGDdVmoDRzanxyQdoCobivVaA7ZRdnxsZWrqS9WAFDtWyMEVwgVBBCbxaKJwKWuEAR3tVLaftoxsZbdc",
  "key41": "Zr1iU7JRyVKQ1nMhmtFiGNV2Xo3rnmb852cznR7A868wokeVsEpPypXs97ePn4d6orTDcQvfmhoprMnm73qC5jJ",
  "key42": "6183t81cGkcnzoU1GdrYN32LV86rnXygsLKfb6UheTWdUiEozjQ6xgUUqMXwmBfjvuEWbA5PgTW2A9GzyuJDeAjH",
  "key43": "554oTU67rSSVUd7VbJqhHWQxMfSojUBVibtB3MiHibH6JXPthGUWMcPRjZjPGx2QSieavSqUwUq5D4doqtCHwi8u",
  "key44": "3jmFejcahYUT3mvXFYyY75YBfLSzPcQdNKCroq98iyaR7rCceAaif3AuvbuySDf7jYsyoiwjxq9BK2hHFrQZhPE4",
  "key45": "GEgNBs61RShBCghrXfqzDCakbdWSdDzXvinB4eDgFcA9rrZ5vxkrTHwUcFiJYoiDnFBse2MTMsJw4xnCE14qhAS",
  "key46": "4C5mYZDsWgpo5HNj9R3nabTqSayGk1Ana3gUnK9CW8LRFaxfUneaUTUjJPJvFFLM2GCVVGYjYV7LwdyjzxatCR6",
  "key47": "ZcsyEH2ZCDruYZeeiEEvoLUPMpbYhrCHRKsGUN3VL82VtaQGLpytJP82rkkSYLGPzvRUxtmSeJzGPuzAsc6jL8Q",
  "key48": "65qC53guihqiGJmJMyuoKpANr5iJ9W6HqTAFC23cb7WwkBE83bjTRbgCagwDRWW4HvPAVqNmV58EXz8GU8L2s6He",
  "key49": "4LeTUCTNro1MuNxQpLqZFayGhJce6iTN2jddF1mEXq7Buc3ETcecjhVh3U2WXiiZ9ug8FTNTS2nHBKUgU8xuMuRv"
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
