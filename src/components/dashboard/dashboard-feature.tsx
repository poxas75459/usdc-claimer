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
    "4fRkpogZd47NqCK2qXeDDQewG2MYKHz5zkYE4ZBMQtiTTs6fmTS2UCHL1Pu6Yyykd1LAx5FNjMBkezhshh35sNnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpiTu37Bc37RtSRvDkjCQT35FY1vJWdyA6Y8jenMwgjgEo52TTyYodkm3epj8qte6jPXeFw551zDw7EKqiMY4Ru",
  "key1": "5SbDtMp4od9DNLhywgxbxjzMxhV1BgaoSFMsDct3gjxAdqsHCqMUaSCZukeKcMp2gNbRGYTgqRRWk3UecgvaNxZ7",
  "key2": "5RBdwANPXvkoRZZApBzBPwFoPHyb1YPgapfc1pk9MN3xVvvyJcCyeFRaJTCEMbymreYT9eZ6gA4WLB7qyNDkgdwz",
  "key3": "3aoXvNVCWk83AYhuvzLCKm88R5DnPJVKXUfoQWbMQJngi3ZAMxrCjpDxyBhpkNXtBQwaRJ9GGL7ntN6xKeZrnE9e",
  "key4": "2HF62XomLdASP15Bai3Hq9wCDRwuDmHXCRhg3SDwumVHs8M42rz7KSyZMKmBHSbgR4XkJ8UaNT8TDLkMw1YA1Vnc",
  "key5": "57sreUQwtwcLWxLAXSwyD1xcDeRAKZNkdjQENLYkMn68EUz56BynW2HpW5vjQHKvEhKjBVgMgoCEbbo6s5A21CdL",
  "key6": "57mNRnsMHjrFXZRFPYTp1Eb3hR9SnBjrMM3bd7YsoYYg6WrkAjxae1TLzKFZTReDqz2sj5qaufdrwdUaWCj2gmko",
  "key7": "5SUZpfEs9qwJDBYbtXjPEnuaSGaUBC1Tk57ut8jBpp1QBrCR8DEv2terSHJ8DTCmCL63R9sM3W2kHnSQuR6suDNq",
  "key8": "5TdcjRrhTYjXXnA7rH9xyBiF8QzXHJZdDTMgfDcxS7pqQAzx7QDFKpJioyN9Amn2ByHZkLPycTYCPXu6Vs1Regt",
  "key9": "4oBqyK4PeuFzwUA7NRnNtYDYa1WPuhPr9pAYtvNAiUBwkAge7PannNacoYYrK2KdeCbkKUYSf7wDarBvbdc2FB9E",
  "key10": "rhQdPDYuBkdFjfH9TNwrx1zYJBVbvc74cS9eK8hWMjkYZPoY3A17Rg4Z1BGsRJLZSqqka1oW7awhi7Xg3VubEnq",
  "key11": "5VBpHCA3VejMZJcStBvYGigeX3aAQegusa8eTknPLbHANRqa2XPgrPzYVSya6JeJup343aXtq6xpkgpa2GcFpcCS",
  "key12": "36F2jQsqajayEfzbub5mD64pUt1cGkDX65zcSd1AP9rQevuM5PiUKUAnTPfXwPCKSEtRSGkTTixk5EeHhBPEfm5v",
  "key13": "532RepTf1kyXk6wB5pknV8abJWTDh4MXgb2nkCheKW3VTSHqvsVVTuPaX3Vtg8HKScxZKpvrEbBrc93UGAATr6QL",
  "key14": "2N9NvjJ1CZUa59MVHmG9b6z6b9U3iJ7tambzUdqhgNtZhDsRH93r8CZhoE7erhjaep5YvzdjjcG3XjsmfUC6Bfc2",
  "key15": "3oNwXJGS9aXZDBEUJrDXEwZhdfAskoyzHpfAwozPi9PcNxQj72LnETdJPHcZ46Pb5scXV5qYR6YdTupGZ4KLCLSg",
  "key16": "2wM2i2fH6atCYEXLFTFuJ6pah2s5F3N7EZ2yMt6dkgUDKPTCkrVrMzLixPy5e8MKnUjSP9gEPzSxKFQZs9yTamSm",
  "key17": "os9Jr3AkcqJHhD2wR6n6LLywssoY8KUPSdM5fDkxx2W3qNze23nJJy8vT2cPM1PgYRErTPX18RodNusGXhkK1AP",
  "key18": "3t1rUJZWKGwBD9EwqXMtW384CBvH8LjkU2jTtZGLUjNz8Y3bKDDevAW4txNqRyFMfuQgz3g7RXgRpEPCMkBp5GM9",
  "key19": "5Lyxei7ZVHfMjwAjTDTXLfKjVnAFATCZSrGA5Ggn7ADHngdMK4CsE2UTENe5YTod4cZrN4V4trhfZejq3xF6i1DN",
  "key20": "5cTUEKHMkPfyJ544edpz9xKMWx59gdkjUMmg7PieGgCUZj3YC6hHSeTdrm3fdywgWfpQb1xTtRALPecrCotP9k2j",
  "key21": "52XsN3raewQ8yG8CY6gpWtBDRqwoomGckKXBqHxZcxrPa1j7oQ2EG5ZrXc7BBEy9J18rcGhiSSb6uZ9Tf3KuSV3L",
  "key22": "276awMRNSmBHtg6DTCLtTjDAsUHxVam5GiCgLKc22pMG48N1D7AJW9paZDbqgxSUc9JZ4r1fcs2VVkyYEUgPwMSE",
  "key23": "2xtSVdXqzpwVs96nHwyQCL3p1NSASHa1U3E8pa7ZKeGkSpXdaAUMteAryS6ai6EwwYtzRXDq6saZ7cd8YWCfQEF3",
  "key24": "qTErs6FEHbi6fQzwzvbcu6ALv8kX9EybLQD7tMk8SnKjA6j4FfVBQX7zhBCoCJHY2T33QPFnyXYj8fN3pZWA7pw",
  "key25": "tXDkVLikaKJC4aJ2XvFdnscu5qB2iYMB2bB8WeYYBwRBrKDVtDxZXQkjn1SmSgam1ETis6mJ3EuEfqwGj88KakF",
  "key26": "63X4j9qb4voZWMEGE4g4hgcsabShsyN29BRdaWPet7VQryW8pHfcfWTrK6khrmefgDmTzNRXvr2QSTCinzgn1HTr",
  "key27": "Pz9Rg32XMG3qswoCotbrPFnHnW7pdjEt2E7U7TdyXEdoqMNda6zX7oLwKqNu4TSnArxnAGWkwC4THW8U7RrvFq8",
  "key28": "UJN3xqgQb5V1FyCNJdXmdDpYgMQEqKuuF7D8bhGstS2T6uSaKBVqQnhjmbbk2aSJRJ9M2hUrLwfbC9h6woidFd8",
  "key29": "3fJkwD6hwAeiPM5nxEQbcSAaN4Yq7efXJm2ybQdGeRoryzcMXM1Dta4nAypSP9NBWmUHsQnXFEneCXB1hTs4ABP3",
  "key30": "XVPFyr2TEq1Jbx4b9RiJ3VmCEvCRLpjKAYJmnBqqyHm2Y5xQja1fFxHmjwzeR1gD6GB5q7jhCCeR2AMFW1sXArh",
  "key31": "48krfzSAmD3G7VZDHNioGY8LS5U7m4BxMi6qChFR39Xbjj9RRJ4SQ3oxCUVuXjZp8MZRch7WwW6yPVDFCk4SFp56",
  "key32": "5sNWUgnv5XiWgYRCY8dfb8N6NrQB96VeEw6Q49gTmLdmKdDbu5zEYrRWtasBi11EKV5XxsR5n23d5DUevP6HZsdE",
  "key33": "EiDtjRdjqRn1TWgLiJ1TBQjzQ3yeMgXDqdtACNLnRV1vZLUBSniCdhK4VvuUVA9J8bGzkCNRJrRJ3Pzi66zPJtV",
  "key34": "2v9gusoLH7eciU8pyrbW6tLnZX8zcRiwETLN1p5zFBdV4w3cLhsvHVyevyYtiMinHZMB31zthuBiSPoEqk2Htqdp",
  "key35": "3XMFzjrEYk3RztpPmchJcbHUGFs4a9iCPD9x8ddKwYBeXbuF23JkMhctKbwrytf1bKuaDxK14niNnLngo3Gvgbkw",
  "key36": "3jC5CWaRSWMRSL6JTBxCbtpmgWYaa15CFXftPoiK5PVETAzAfaTydFJ4Kt9xCMm7qmwaL4whb73vF7wct1Fskfnj",
  "key37": "FE4dEJ5Rb3X3Zg3YsHauJJtqYZKkAJH9psNBp58tG41P3abbHcL9ebKo1BZK7yAwzg6wBWsP8vJ4YcRfzYTCizH",
  "key38": "2NLTGyXQhhSiCGZyTysSQLiRvbM4oo3QhXYhLkwpHqxi1K8BMMpcRbyMyLkdUpeyX2zK46LhbwtwG83Y9UDCnxS1",
  "key39": "GL9CUh3834V4U9SVzx4xQPztLgtNT2sPWSCo1W76ZqGPm69UNm2E1jTtNDF5f4hzgv5cYMT6Rb62WGeYY9dTjPD",
  "key40": "3iPighkTyGkY9MxzQgUBRMr5mnH35JkxGhMBid7fkhfdTvLHK1LDCdRBv74hfjAGaBVGkVw8tTbxFTt61WSUSwMB"
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
