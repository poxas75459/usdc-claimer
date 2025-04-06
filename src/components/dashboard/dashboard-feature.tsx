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
    "5b4fmnmak595JpTNpDVfL5XxBPc3sDoPZLmaT46L31caQpMpBg3DzSrqPFgQoKsFcY6Ko13YvqWZjnnDt3wdpHxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GedivXUXeP7X6WCrq1NirTTSYsZRFrKq4G48mmybKFa6jgTwf451s4ujZMNFZNmMBwYZCE1UBdLiRdm8NyovEfQ",
  "key1": "3AYTFvHz9eRyv89ZXtCRZbC2gAcDDuVK5WPBhRqY4jtieSUrqr3EwpYp17ASUqhn3sYzVP8Ft2dEe9nUCx8J398d",
  "key2": "5bpca12FFao3Jw429aHRUZCHHTtwFxmQgCKerrnB8zhbcBqdvyNj5or9o4dcGkuixfrzkkhQxwbkbyS7c56mzibo",
  "key3": "43p7Yn9PwwfwhkY2Cf7a9Ga8SC6GV4Me8ZvzfdNu8hA2uc5RuP5SBmwX1qki76qAd6rdXwBAzQgjsYZ7vvAoJPQc",
  "key4": "23kVmZFMPFj96skP51fDG5hdiSXsYqqWeCuxzW42yPkpk4F84Q5ygueaLhjzzz68sdF5zimoxAz9ZTZZaALtkQMR",
  "key5": "2CYJ3wWUEnq9H8PVwFrbJz1GP2vSto49vTWUNRkKZYTkGCjL3LfexjkZBjpUD2KRLiLb6XWw448LjRr72MFqyx2T",
  "key6": "FxKJXfKRkLQXBmvancwkUfVEzvmDwTVvAWCDYQAgrnCPWhUxfKMXgZeWew1KRCJx8iHSybd8umcjhetGUed1u9U",
  "key7": "3FLCUz9qWKtMoDeVtfoKH2ZQvA9nWZL9Qobsi9GAHn4eehDvzuu2UwpLwaFvKPyARe459bBT6BYmCbn47ASuqJ8m",
  "key8": "32CEHZAdkBrDJJTbb2J8sEo3NhCKS7Du8mjJ9V9rQs1WWRq1FbkNfmFv4iN9DQck6Tvbezs1hRf26E1LtNHNGUDY",
  "key9": "3Nw7GFfM7R7Xu7tLs5B6jFgXxKpUE9wsGVzyrZvzMCK7yGwooo7oMzznodj4pRsgCgMchFbfBk4VCcpbo5tes4bC",
  "key10": "5t5TYsNaej414E82onarj6L6Vkappcddf1Hee4ujwF3dmU1LUmqbPTP5Mbp6dsEYY2tSifYJSsnAwU1eakTyspfu",
  "key11": "31oNnP5XvjSBToHEeZNZR4kTc2i4hjdwJT651icEZJF7uk75bJoXWDRfLQEjTmpmvAQ1P8tr4y1hGryYJ1zEb3M6",
  "key12": "3ch7n2h7kLR6ufGHabAQjnBX12W2YRKpFk5v3w3jXg9umfrZmUGL8XohbrYb9XF2ytCFSgE2GAGazamYiPXDd1Uh",
  "key13": "46hvmS7jaXtR6M1nS5QpssNL82PBoxygghBVFpSuRJ6uq3yxE3qWrd1MAMSgB166ERP3F5muzqs43zJ1ndGp1ewn",
  "key14": "26kwamWdGF9B3Tkx8e5UGf8uL9vCYUqo83z9BxhZdxJQzjCQLCSGXTW3dYe1saLbaw6MFvbufG8RztHsPq5biykM",
  "key15": "5sRSmqaen61B8LrS78aieQJk4GqUQb47NnT4nJstTHkgm5qBuoUdrYmpR4nFybWnsi5bxEL8ceU6mhBTRP8T5faZ",
  "key16": "1dzteHQV1G721iQeEasUEGB8tjCikCUjADBD4ytP6pgzEochec7Cadk41eC1bDtG6wJyeUn2jvD8U5wLyyAGPaa",
  "key17": "2Jh6jH7Gjme34EctBBzQx91HZc69M6pWiYAo7WSRuGzbh8LyZwSVNoQxNBL95hAaz84MyhV7rU1onK142M4B4tjp",
  "key18": "3fqA91YNt6bSXnZ7Mce24PfpWSH5Yx2LegaTBccvcNCNj1L3JUo7KHaoLgPzV4Sf8NBUhMBwNPyMsg86YrfYCmaW",
  "key19": "deFNQwBYwatrTffahxZUqZRxm5kQthp1N7XMuyxcAmfcVzCVM5Z3a21Qn2tbMUWYGtNNRavYreTevCdHDrYKD9v",
  "key20": "41Ap4GbxoZ9VibTf9MGHbPCBkna9nwwDZWE4XA81hvtJ9jSdnPWkwuna22eWDReRLjeaWB8amER6grRG9NZr52j6",
  "key21": "6KcjDe2ru1iw1MEANGMyX8BaSjcPGrfTm85dZNFnjp4vgAzZqhKdDt6RHsaNsBMMfEEyVQnKSXz8ZqD4a9L6NiD",
  "key22": "3FhbcrTV9LswppNdYnYKANCnYNichCkzwcUfTpDN3zL5ey13tTdG5Mm6UeViLC2WQ4dAUvU89KpyAGCLyDoSxCnC",
  "key23": "3b1RZanj2T5oNgPDvzTSL5671a7G8ybpjSYYDFckW38PGem7cYABwsW4o5ewJ44pkCXBsdsazZkkpNvjkpgp2y7D",
  "key24": "3x6cwRBD9y6BGeURENyFYq2tVwKFhwo37XaLJMy7ingPumnyKVYCJTNbFuT7vRzidG91adq5vodzbawPLM4RAHne",
  "key25": "2XC7eNWrKcEtCUa3DpeGQaSefynWsbLp9Q6Se4vjduMrCFypQqKTKWuLTc82mpYLRYMBw8V4bM3zdmFjXJ4TFdcg",
  "key26": "4dJQKRgToiyoX5SLQpX1LYZ9zzgtDKydi8ZXEFX8P1tqg19rw4mgC6uogNfaKsuazbrTuNuvDFoBugfrtXHTpbuL",
  "key27": "4jdvfXQenSWP9gTAAyuzuN4ouLh291k3BZBgCQdmmFBABA7f2miav7RTpdQcMqJmmshm8Js4N4Wgwk5yay7KtZFX",
  "key28": "616JXQugVasyYcSvMuL3oqvrJGx6VueKyBn1yJ8wVwUfCvLEfB6Sj6KFvmw3SfBJ112eiZSTb8phfaDYDuRSbFXb",
  "key29": "2g9w77shiJ3UaNXLzMxfK1tag3fWuJoRZuij1EVo7gQ4KUvEoXSuwF2tSa4WEzHtbWEpVMXBVbMJt6gzFUFa5MWh",
  "key30": "34fjQ88ZcVp2miUrmNScobznRJjdt7xCveh4Wzz4vuqNbVoQwSEDzhXDT8H1NNin98tfCYGNoF1W36An2iRoZC4z",
  "key31": "2XVV1HP2mrdybAGGvFRPRYNyi4uZPWAdDixM1cKTx8vs7jJG8pE5NHYQGeYVBj75pfywyENZDmGMsurwy1mfLqrd",
  "key32": "41jofnUYvJZRWCATcQCKCbB34M4E2ad2mGsxYdJUjp7u6AqstfH7y6erg6eeLd78M74xzvvYbUrvFp7WN9QH51N6",
  "key33": "5nPcDL62nxYwcTgoFEfvTgegzmDan6MtoXD2SQuSJbeiMkTWhkGTRS8oTKzxj91CW2RRYnbbQazVzp73RznWqR7U",
  "key34": "4vvN17kFp2eZD7pdGNkV7d2ZagQGSLRydDZhuvMoGsVCiBqEa6j9YAsC8JXwkAUwZ1CUm9dQg8Fk696tD9bAR23R",
  "key35": "3Vf4YnJUyYhSdgXPWLdfig5iCfmde97x6XaKgMFRCMHR5YH5raDjbo6MxV8pQMpeiKC5tQY4DxRtLE9g2TfR6mXR",
  "key36": "3uLf5qwBxDUCsKirBYxH7rQmExhDAPsnKnYtHGGysRc7VzejLrhjVmCci8TWkGwvU857Nj5ZbKtTuSBzhcJZP21x",
  "key37": "5i5kbceG2VHRwzTKfx2zQ5AGKAg2Ya3fshoqGZSQEJpsVMi4EA6fQpdT5Q1MDouj7MwGiVRd35kpXJYuxtYT3zhu",
  "key38": "616xPkZoFkmbe3YLduyVbuH6xTFM1QtiRuzXXZMYy3373tbzw99wT9y2hac633CPHFHDau3PCUcHvaUgb2TJs4Wf",
  "key39": "DeMYXbCXrULJeC2poNM3iLJUaPz2XCYTpcEbaSQUQsXtCccj4md4S26jqFCLSbRZcnCHxnidJ7kvApp2PNyFyVQ",
  "key40": "7prW1jWvjtRYTenbX5yoWHy7Xi2XXGpKE6QQTdLs75WmZ422BCnf55dA72uJNVU8uPD5oX8kbNy6KxYB3KqckWS",
  "key41": "bueGyDUyH6FCE59KJqKunctAH8smMavnX5YVRVDKSq5ToJKdwT2JXiyct1pUKeibh4uERZbbXG5NDohnhyv6JnD",
  "key42": "3TVV6iU9JfpCTGuA3sLy4ELQHednHEE8XQKhz4UViskK8NwGjfpbzKckFhr1csE6Rvw3UwbGUC41vRU34LGDKvhk",
  "key43": "3bFUjwjCKhtMrAogbDgTTRYaTUsMHwWSFZ8CXNKa6Ev4YTMRoVJxAZpPNxN3j22tvPVKzoiAhjPqjthXL3GNJ7XN"
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
