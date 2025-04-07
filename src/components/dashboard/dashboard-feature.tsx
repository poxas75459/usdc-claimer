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
    "2pBRnrDTG15LMwMntCH5BriZX7iKrUTiSYRoMMN4k84QG8s79yS2LSPGaAK6e2i57w71bqHq8gptDipnguHQ7Knf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53EVRsu4Yh1da6cr2ds1wedPRLFVnktJxXFhdFYyWjGL9x825m5vJBFMbBgKcwwBhZ9qUnRNM8BVmWkKr2Bsr4RK",
  "key1": "2pewcqmP8HKwdZpd7ERt2gqXNjYVUcqYwkUZYwxayUJg54xirzb4RHsJr1EVEW7ckEyE56r25jZcRUxqWfcjjV2R",
  "key2": "3T8r9Yk65e7J3AhVG6tTNZXPr64zmPXh4kn64EqoL8pgs54Qancf9Hah3hZyXX2egWrL7jZ65L4vftigBLztNL7G",
  "key3": "2LyUibu9PuijQrZvJzNKU8TPyvNManLQNA8MWkvmUTUKnTSNsdKdC6YWwRx9UrRC3XhgmCaMY2D3DrNdXs7v489x",
  "key4": "3RnYTSXbMqbdoh1wSw9FEqgskjFPavZhmdRLpbVoa8pegAWW6hksB2Ruek2UvpgfQXakJuxYtzzGJHW9htN7MxAG",
  "key5": "2KCCDM9PdQ5tg2kZdonPgYYLXSfcRVGWE6ZRP9u3gNpbt1H1ivHxqXE3yQRzw4WxPX9ZJ1ZCw67o3uxm691kRRQR",
  "key6": "2KAcy9AEAURmfA3HheeTBzvYaLEfQ2jSRfbqN38vZZfrw8XWNDJGh73kXezjo8NbwidfVfLqGsc1yrU8MWmMDDw8",
  "key7": "3hnTuB2gDrqnu979PreD5Kzzoc5FcPJZhrTWdLP54WhfAL1YnPAGLeteh7pXop4XAMjUz7HComMD9Sub1M4bocYs",
  "key8": "UTq8qcfTWcACrWFEDmDegaFGYKcr4nJoL17pr39QRcMARiZcAFzHmQQFHqEjrRmrAwMTGER21mWWkoaSviZydAY",
  "key9": "56kbHtACPQiJWpDXwPAW92KwNfrFJPw9VT8D2yvZ15d4drak3cUvxoZyPqxFB1ykQsdzFfQFt5CGZdJYGHLLTtdB",
  "key10": "46KNnyWLtyc8dVthau4cXWbzbtXW7RtN1cV8imGGbDPRVuKAjyNzNJTtdrBFToCA1xaJE2kzKLfwz1rNgw7y2vTH",
  "key11": "3i6ajVJ32oRqxuViBYU59Uc4hoxzGNuEFwtLfMfLzK2nH37MfWygrDjETuPbaDPvc2rr6Lf9neb5N2oBe2BbQ4gm",
  "key12": "4PfYHePRcjaBR1Ke5YibuhHfAuWn7G2nQ4fNA4APeVxGoo9AtSk9RhJhk2WNfj6ZfNy6Gq4zjPAQTsBgDnuNkUoQ",
  "key13": "5TZhkMqiycmfLbFpKX23qXJb9EdCZE9QGCL93UwxCDf6YUaw3WCYSXFtBjdvwNXjEAPcu9QsojW8ZQjVpJPpnEhf",
  "key14": "492BVAYLoE5bgtUjcdfNEx1QuoSxusiLmSFGeSP7bbTPEb5LjiKcFkR4YA7P39TZP3DJRviiQWMUXHRjEMhgrmPU",
  "key15": "45Z8KnrNWXiXCt36phAzXYtDaLMRBFkNUqSRvTFw9kSk5L7RS21SV1KP1613gbePycnjpQQnqSSxq4tpNfF7SrGe",
  "key16": "4WBtkTWJfCYMjNWMqFTJpLye6wvJGtiQwhxmLg1MFhP2pnwaNvpvotMHCG4otUFQJxQNcisofcsKi5QrkmjGK1ik",
  "key17": "2g2k2idEheTkJjpKSbDddD9vnnFuviiZikiCvHNyrmup2JCHQ6cYvgCNKz764kYxqnafbfwH6FMHtX2dac1B5fvz",
  "key18": "3rCwX4LF9UNswpxhVQFsngLjQM7Lhecd5cShZemZwCGPNVWUaWw19QzJ9CebavFux6Szo7mLSKq1yEBS7dmy9hbm",
  "key19": "23sY9nEBaVpCRFe43qrs6i4tjJCPr3kEzVPKCXmHf1R1GKKw6XwntgmyCjR1EdgnJwZFG5vPtbTe4cJ5h3S5sNUS",
  "key20": "ivdyrLtu6SCXmY38b16YACGRoExtvbj2gJDC2sZrFxEJZYNeqtbTxQ2rBMF8sboiAvXscE6sM27o9sR2jtkNxdr",
  "key21": "2UEWGYkm7qicVMZ8BY6cEPANYXhC52J2xcfcQQ2DNF6iGTPwtF8s9U6C5cbaT8rsZLzDaLWeeuEyXAsygpVR6yzc",
  "key22": "64CDtYXQCLUDvRdV6D5KzNx3ifgcbg8LJ1h7Ti3KTF3EPE1EVhTjycvhU6ocrB53v7BdsTsYXTSJ4i7P4FmFRvdP",
  "key23": "4Vs5NboyATmKMM5EcmaWrYedXnZwH9J7g9TeX6vHb3NrSm2LjRdcaeBtF6ngCtCDR8BbZs1DCXZLjHcYkFtUhGWU",
  "key24": "49t4MbMvJuAYPfv6jTQoyCTF44SPHMTXtdiWXNyYurfxvQAmKCqs2ftBeNs4xWLzZegrxXdEksEcEqSXjxKsWabT",
  "key25": "3CVm7WhRGTb26CCM326cERqYgbb9BE21L1wVBR2SeLXmT4Z5LqcrXQ7YLK7o9WEeS2CVnCAijLPZDzWpP8RMVJuo",
  "key26": "z8AD79C8Mqxnvq88zKiKffCDW2WRnPoHQj5knFzDM3sWGbzNC8D3zH9gnRD9nvdFAb1FHFE4CZSJpJXYdoAchJr",
  "key27": "289XzoR7pA7aoRCDzJKXn1JNnNBbYMSZcKSovT9SVEfRbUDY3haFCQgz3gLBFjQYVXGewPBAfBhEa9Hnb27XVDor",
  "key28": "TuwvmCciyTRJMh4BYFXJ3zi2mDeFpVDAHMNv2iEtVQ5UET54TQoHfxTAFH6Nk4KMcQPP7psxgCEBrdZSA9yFMB2",
  "key29": "3rY6nKmNGUyb8HYLjfxw76kCBfGNZtesdy8HtbUETUDuMEYEBdHh9qVsFxHF4pg5QppXgs1S3pxPgSDtutpzV1a9",
  "key30": "SMLSvc35rsNTcJnqYFqcc9b8aRoM6rTkEfbDrGq5G8nv1GYZLqMLL8VLvpxhkZHZWxQX6NugHYkhYYg8Yu7ysRx",
  "key31": "48u7CnCJh6dQ9eiD5ovEoaVcXHrymun55QzhrFSfQQhRvyYJee16f8vJnezQ4bvi9bmdPcjTCs3mSWNL8AZb58zN",
  "key32": "EfJkJ2rVnV5XpbkAoatQmxwpV9SRc6ii2Csno1cupGZmQt8ZAKzQe2uM8zDS53YRwopYoymPQvDBRExbjjgAFE8",
  "key33": "3fEUgGJyvcuYBVyAcjUogMNCnsWGGs8FyTAkZ5Epr2C4j8yijo8W8VGYm2Gusw8LfhbtSzQ4pz23is9prRxeXgS2",
  "key34": "4LVXXG8HdtUK18Ly1ZzFB7W8RFJkV6T6rhDiwGRdpaDEFFsoP9FvQm8BTG95UH2PJkMbiA9n7ESKMLMQNLn2BLPE",
  "key35": "5JJAGaXPrSKiiNM2JNAs7HUDAvpDRi6AAG3dey6AjZbeAtrS71R6NdyScj21QT4i5oEXmX7QE8YmgV6226CJiBwU",
  "key36": "4fhNficDT5E7tcs2jc6vaoTTUtc4yQSSYDpgGTgqv215e8ztYvkGS8zboVvBwXx1qwpAxCPEtjH5Q5EkgjCBZbdd",
  "key37": "2dsEcn6ir1kmnEhqADF9ack4hXkyUT6mQ3m2XnFTr8KT9hwGoGYqmHHKuhnGHiA9WCw4tHyKrG8noDDn8MqAMS6K",
  "key38": "3zzy93PkXoTgW97UhM7dzwRB796QdQRFunTfn3TCED7mtCCvoaEtuyA7oM1yfetug9ZKgVvqqCYggRj2pXzrSC57",
  "key39": "33SPy5ZoKWWzRTYfZedrAoqcX8aLRK1AvSTs64WLBkhDBHwLCmsXHEorpsxjHJKJzdzY72DjxYJSYindaTesn4sy",
  "key40": "653gccW29PbmAr1VRJmNjieiyHEhPJMsNxHJkwTLrD3xkR5AH4HkizRkYUWXYy1uBRwZ47xWvnUCgh6NC3yVR759"
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
