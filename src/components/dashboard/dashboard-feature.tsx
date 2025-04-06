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
    "5T3HLvpFM5AG3hdJy42X8wZqtLaUkpVRGtPA9KX7fm2xJFT9ZzdxP1JpJTRZBpQ2d7F2BU1KguwqaVkKDCBpVHig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YL3odBJyhqK52erPT16poLscCChjRiMM2gk83ZpQ7zb4dwYXmmD4Hq13W55xeDbe7gHezXYoohbYwGqCGdqd3k",
  "key1": "368owMDsWFeivqozJs6tvCK6fJifpL9y9wy5CuUCX2r3YM3mJTdHn7FbszZKVHHjwzMJB3LFBQHc6XWq36n4Lx19",
  "key2": "2CLA9Rh54mMFgeLMLqouevr9QfB9hhvWeXoCeUGRPdjV8j72ktSH1mQPoU2CU2SasNMNcafvXQCBGnNRhT4QKavU",
  "key3": "wKLfkuPYvxfzanQaMnGMdg89oNYmDUrnL3ND8KUctQshrZpxhoSv5JFwFcSPmVYB8BYV3kszf6xYgoWnVtD83nA",
  "key4": "5Y1sQxMuLHTewqFRavEba2X4opSQBtCK6wSHU9Y9ka4fTBiEc3UhzU95HKdqWjPropMwx27tTH4EpAZUxBLvDgKp",
  "key5": "2RT9XTkinfGmxCEHKgQh91SmghmKNzBraiXkpeUdiNZtDeSY4Aky3SmhQwZyofmmCtnptbPCrY9f1t43p67xYmFh",
  "key6": "3emN1KZ45VzYWryEcmQVScsa8B1Cvwvi531WVmpZJxLaaMyV4eopzSooZee9P1PHwrKt3bZLGwQDG21AoYm7PEYj",
  "key7": "37vFgKtb4bipSuc8Li1qp69P4VjGbK7GCW3dxqxBG9BdRg7XxsWxLahSNNRKzm3J4BWpTDJusgmg7tCSfut5GQ2t",
  "key8": "645m7TP1ejodtXiyZrK2bHfndetTT7B5Ea3J1jPzLhU5m8AeVE3y9CjY2n9vB1e964wBikkMbQfokoXBA3BENRFH",
  "key9": "2iC3JD9NKHVbfA7BxthCBQmXcD5MCRAXdLZwBkWy2et6Mqhs7Fmp8CBKWefEXeja7GCiFaHwGuLadB1mtLU3fiHb",
  "key10": "TTrfoMiQU4pXBKsZL6wvYCNMZ2aSv7GZCpXTe46YHhtTsKpDUY4KUKKkBcWrnDXkhPkJQiCVhSFQ8YKgqhm9XZd",
  "key11": "54F5ADshStgBnrgHgcs5CtxAuJFKpBNeu1sHo3y4DDdzv8vTccJppZk32NUWbkeERDCNeMyhEmWyGSSa1tj8DUQP",
  "key12": "2iwKBARtEqdM5Y4VWU2snkPe6wWk7dfNFvygLfi6VRRp722QMoD3BcmDqy5a6Cc9QPyZiUKt6dYG1KTdYEhsGP5D",
  "key13": "3rZHyVoHWXho7DGPkSYDdTiFSpBzmxFHaCTeoeA1PbdKgukXpWtA9jLhDcbxXDYSAtNFqxWcVkWcvfKaPU1bhZTJ",
  "key14": "46BiCVjL3j7GdWnDt3Bw4vZSYsN8MK17zZJx7CxGzWZEqzFnGJivJi93mNUmh6jRMwrrFngT1piKDV96dzSL42mZ",
  "key15": "63DRcL7yepPAuKQsesvvTgM7pVVCj23jpr6sLUcNmMj6Q49E4KWYA96tPLfPWCqqWLYYhmNgdxhmhSSjs5s1ejQ7",
  "key16": "64GLa4ennsRFSMKJQhLMzXKGKKWDB8MPJShe3icgbQco8qx7jRDT9fHReWkFHniT1QT9VjRXj34RwTNqoU38YfW6",
  "key17": "55RNGpC5mmDmoZcmphmArLivdJgLVYemD6waqh5SbC6mhwn6e9n3ANSN1Ykmy7Kc6eJBx97eSisvuuZxWVDbBQrC",
  "key18": "4vxhraotNfx53ax3Wn8R8LNkPbuvPT95VMvm8GFGXxDfw3HwCk86hFyd3KKyZ5o5ER4wqLb2Fh7gorj5evsoZktZ",
  "key19": "4u5DQ63S8uL7p2e7AnmqR6BwniUmcQNmLVcJ1ZRuLsPLq4vK4Au3kqjPCDbjNG81zXYUrR5tAYNH2xKbBhWtnMY5",
  "key20": "4XgHuNX4StrZnr9xi6NfD49NipbrQ62TfHABDuV6U1MHFgNqvgUdQ2Ek9HFiUhwBUeVCB3ki1MmPH46SqyQPTwXf",
  "key21": "5LcabDF1c85kNsGb83qvAQLXrjAaNw9am7XWx9NfCWCjN5Whrkfcn3eaC6mrdcpDQRGJWHFU38U4uiLykvXYbzFN",
  "key22": "4g74EoYtg6Zh2JC9dapXiFQgn8qoYfV9KJZBd4adZZZazerTNbEve6uuTFxbnPXQ2mGvioyi6ou91oRDFpNDJ28V",
  "key23": "4gSazbEizChWE9GUwG6goPS7GhL66Q2S7MoEHjCkUsiRAThH9ERgUFi2jJkksXQBW6hdWafpmzWoYdkUpRBbWfnu",
  "key24": "2DL5JZucVGYgsdRHgWazrEThUKHeTtzQqwe99oWcSLyZsGYh79chomey4KBpXpb576nz1Q3VExFqrAwLyp7CJigv",
  "key25": "4ACbiu7rcfDMJAPC2nqXyKBUZR7bGAJKZJcy6dVCLwwNC5basFqSGfRYAx5o9EsdrcWXxsw1hcDxyqA1ugWGJ4Zn",
  "key26": "zs2yZjwQD6qD21CdvsTBsTAumRGGQXxmPTTnc31CnZKgBacM3dWjaPn5eAsztyg8R5SuwGfjsacTC5YzxwZ1fn7",
  "key27": "3y4LxeKMr4F9JdjWG1SRiMU7xkgHXDGccGdxDDauJXS3EaXrSDbLLVTfkdpdrgbB4d4dUfskctH5WiYhQpNgRDM",
  "key28": "5rJKoGmh3qqkbctp1ast3Rp2Gbzr5mw1MBZAaWemMQX8BG9d2NuqhU4priKvjq3swhHEsHeqi1PHU8HkUcyR8WSd",
  "key29": "3QD6YSYs4Tfarur6Ss7fFhRYGTPKBm8TpMiRPtF47wSy7h8PQ7kXhd31onYCzvAHbFR99SoXFYwxJctm4e9zN5RB",
  "key30": "4Qf8GoE7eRSnHvh3Nsw37uUC1sD58CmYTCVMCuGewT6wg8f71QKK6QVbrcroMmqp6g2WSPbYNMkisTf7ti33nCWP",
  "key31": "4H8QNxNM3Erp7cvWT2xEU2TREUEGh6nZt2dvLN3FPGV2DMnETrYQ6MQCwQEk615WEBma7LTKezPqhDchvTJrJCW9",
  "key32": "yYyJpFHD34Vv3aGFohfzUydWneopwnN324KNf3rXgmfXWfH8xsvLNqdG4rtwi2Y4m8JChbbQ8zzqzD42Sss4hoB",
  "key33": "4Ps5x3m42kpZxiy8jDYKamAKu3bYoLb8xfC7iSy3DdWRuGaxcH7tt5Hp3cmtiMMkEmw8gqeQpNazaMLZ4Wf9H5sH",
  "key34": "rnkdhhswCM14amQqLV7qP7Mn5kz2EcyBEBHtaEAZ1w8NpBkTkZBdDheZBupyhFGngdTAppro7RuLHbrnsbW2NGF",
  "key35": "4UJbpUxtRPUA9fZUts3fnTA1tSEAxD4uXp7TAooCjdmsgY19LXe2Y55DgGKabmcua19ZmDHuZEzppTwoKLaCRBWj",
  "key36": "2TiaxspJg3gX7h55vgKYDxcgoK3CgFg2YQRuxUgfhbaTsZJhnvyrBSmgPDS2SwrD4ijqaRwsNEdoQb55bGVKxAuL",
  "key37": "4vN56U7MEHDfvjGVSojWbGtHswjPAywDfNSKQ8KY2MBgWBgmZRE1MyTQXFJjGvUqv9VaWWRQambGQWVR7fTUpom2",
  "key38": "2ZgZoRx299HbYiT97qajpH9oeP2owduTjQwbk3ikspPBx9qEpbNkkaDrRxPYnCYZ4M7dBsjuURFhwcbzMdh1aFeC",
  "key39": "2aJGsxcEyt1AfHsS4cD7isTjsgWXfWNDdwLzoyH4JniP6Aacp4XEPHbTkQiFLT3fAR26jmy7YAkR6ibhNgDTtbBS"
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
