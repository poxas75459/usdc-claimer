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
    "yt2VaFyjdk6VL5SZQsYTgiqAMUqWHgzjpMeZEH9stJx44ybcgxRPJjNBjSYhtkhwkkBPrsuov1ZZANfhoXpwRFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WEP7somacNPNyM4nx3dhHjuH46XoDfomoWwWfYLu2PAhcyV67u8gyWUp636D4oZVzYBwvrM4vRYKEXwA2Ay4SjH",
  "key1": "4wcyrLdy8dxiNCZw9GeeU51DHY9vfEqzMauW45BW26gy1Xe7R66aqsVXK1gHGSwSk3TuCphXTLZqirVpphnMQZe7",
  "key2": "2cZhZUsFziJxXAxbTnBWAdehLqDCcnLLcJpbWrwUMjBWbJncnNLoa7xryCCSovgLisJyUKgRxB9KjXpC28w6sYHp",
  "key3": "354bUfPJKo5nWXSEfZDNtNZXnfWj5P8UedGUww4i7jaWCrDnDzyH7dtasEugfCaUtHtoDGA8ta6GFsxFGLNYf5jU",
  "key4": "5HYDas9eWPvL3fRh6ikThA69oMjUVWCFcTydZXxV7RQoULRg9N8KZjymsnwEPqA2gdK1NbrfjSrQ9HTu9FD6E9kR",
  "key5": "5PwuqbS66j3pd5kBCVDx7UTttNC5tAseeUpAKRR5V9HdivcYjKD8r9qxFf7benXinVLYMkihNMK3LG3xYDkT2o5U",
  "key6": "2YNbX342QWAP6WpQQ3pr2agAMNYJiFdf4WwDigxsP9vE8ado7sXVfZuHs7F9XNTJdUYxfri1EjbiBQyDmNccNrYc",
  "key7": "kR6WsZtpt189Q9v1kB1mtbo99cGtbRDq9bC6wkpZC4SMeyWu3BUmKKfSpw5YscUjkLzzq6Qd6r3mD9Ex1uS7Pg7",
  "key8": "3R5fNhWFggyvspyDgwsjYRQYZePFQRgjbd2jz5tCvE2VrvAEGKFkm7DM4x2TSSgqQEFGeNJqJY6D1k1pjjEaYQ9Y",
  "key9": "4gWNhu2jE7MzhyvR6Btonn4gc282Tzze2nh2doHMWnGAWKu4rvQUUVVW59Ei1idMfmddT7AMk8Qr1WNZ4cLaMQEu",
  "key10": "5UDPEzoXRTHuSKuHLk59ui5qkRCGYJqdTHGvHk3VNqdCf7nbXtkRpNWVJezhLybyyhq77EBuUPYBe1xaUGP3jxdf",
  "key11": "2ttWr75F3XzvD5hMAPEQRL5dkWDGtuTNFXoZPyr7FyAWF1L4GshePyvvdzLFrQSjbf1Vr4zS3nHUBjMX9pTJNJnT",
  "key12": "4GXTHnnakVzecbwtrRgZdM4kU6KxegSzv1iMEHcpE4yxqALyimDKRLeQcbjzJ5YQobuNh3XtjtFaEFWaetRapgAM",
  "key13": "4hMadbPCR4QBkdXsXnGqRp2LZKUrXqwvjCH9uYAXc4EBS4RMG2KtSNUo93gkrVAzZEGKRcipXMzAeUS1kPzGkWAu",
  "key14": "3mZ2H8FyaGZY2782yHtdz93DDZG371BPCvBkRiYXunnkv2fffttac4niw1idaFTdw2JFzDBi9y2jcfvuVsMMwvbn",
  "key15": "3DPreY9NLAgVcZzkAL3MYXc3gaBMiqVbLqsx8T55vTG2bU9DWgHqjS1bxhHZnpDeUoR5Kz68G9Tth8P15U7j735y",
  "key16": "H7qbwbMynf27Xc6m5e4hqK8EZxRTkzgoMgaCVqpAsojv5tyKz7x8WUQWcoXDKWziCGJ8Bhh3FvgaDPDZvoCxRzu",
  "key17": "65XubkBQbTrcukbmhiZUyvys9xTCBFifo9c6epQJpxeU2LFv6G7LfrcHX7AsFyAfzLJbMWhZSNcB3ga2giTVpp3o",
  "key18": "542o4gX4sWzDYLiuV25n1GBNvWxXag6Xc6Nrt8caeEfJpHMpKrrFpHnmWhdqJuVmnsh2N5BAiaoRZRfs76cJdZs5",
  "key19": "SZkfTTECHhrinPzndvaLt2KxppsFtsWcy6ityZPVxQ1mMyRuBsRwHry8b6ZA4CtcSAMXB3Mi6FDZ5UQJHRkYZ1G",
  "key20": "5K8PiD7VPMmpcovHLwjGBatu5DZ3W4fYV3dCNPWXkZvvVrQ3xUDQWdcUHBA1yFpiDCM6sgRipQo7wRBPPjAwWxBr",
  "key21": "3qkkMeHmCupFtbxVBpDU19uZ59h7NcAhz7F8Kn5rjxAaMFLFKsRN9DPqWJHK5s64ehVRvszxdyZRmjvc2Y8hFRZK",
  "key22": "63peeoSFNUNEA1nzoK4AwAmHGNd9X2Ly64VfoqaTvVv2XZ27sE955AmAZ5XNByyofL5NU2rKzqQubkR2YQeWzhe5",
  "key23": "5LLhhNAkqHqVgvSW1YNjQ7UzoYqQrZCk3PHwcc8DeRm9Q28e32RDUbtYbHDC41UixjDHCy3vEkD6cDWNiD6Youfw",
  "key24": "2bec4nJbS76TFRSFU71jevwv8f8E44j6XQP2dFaabfXX1sQQC4MNWahj1eaYWiJRsyycFP7REhEe7gm1yAabwzhQ",
  "key25": "5PsYN7JUvdeakRhFA5p9uuJnd1rP5ydEa2a8PKEhF73s8KFM3HTXV11zMAW69gynj27asdCjvKg4vvNcr8FagEWv",
  "key26": "3w28BWh9gLvttLf3UTwCzAkHH317DMiKDBE4FdVgxdjsTKaR6PMpLu1dLGXFMSms8Ahz8B821gqeeLwceiihKG55",
  "key27": "49Mr7RZqANBmjAahSK1XDoxo6GFwYQj1Y2TLGSxwDfbLRw2P1px7P5bn2fj52MWAohr4YVpVe5NKa9kHvPkpmzzp",
  "key28": "4ajb748J1h6RGLYGF7eosd6Vs4EciUQrSRFFySZg9LBnB2AaJLfEayJyGK48RrNPoDwwrfpsbaTNf1G6aAbtQdfj",
  "key29": "63fKoyDVuFRXdFJ5riDqPtxsbYmdRmdXueJCMBRFadxqYZMu5CG715QFNcSwhdXZDi1p9pCbhXnTHQ3xRDA35LfZ",
  "key30": "62yQXMVJ7b2S3wF2s1xhVjgUMdbUTqQFD3PSvxjecwi1FkX1xk6Wc7chzVWBYai3LJM6ALndfeE5ZAqueSFHEY1t",
  "key31": "2LGCHPVcybACucTYXR4w9UgvP8ugTUvtzcudyNdfTmH63ZGHvYkQ4o7KS5uNFmDNTQU1PD3vDkhpxJ1LGRK3dLcc",
  "key32": "5aYRbYWURMB2z1TyBfLxAkja3GUiyyAd3V7BCQyDghCREZTjvV2z5wLEuo7DSUemRX5nho5vuq1anGy2xuKkgh11",
  "key33": "2JhndDusH5kcocxXCncNenXZz189hqQ7D4agWmVvBJhYWaeeRT8AJhXxnFm8gaq9Rx29surRNURxYyw1nidL4jAg",
  "key34": "3LfKb7LuJJYHsWjWwaHsUMjiM6U4x45xBs5DSrfhXe6kRJ9qwBBF2oRphBoX9kAi4KAjsQfUoKc9UYTLG9byd1eE",
  "key35": "5VnbM97EDev5WjaH95J1GioPwa97LHnTJmL6cLDpARFtUuUz6yEqdK5gUrBtXM7N7SkZGdjhDNKcV3WXvfrhyveH",
  "key36": "3bKFHX3gxGrdMdxaLEVwaJESgaug2vF24f5gmH3wVTzcCotcV6yYWMrgqrSawPqLzuejZmcMScLqYYaXsXyVp3jR",
  "key37": "3S22fnMshhdiQSBnnLGWTCGdfDUxQRSCVbockzq6Dstt6RzjR739xVaVGFahtr2jjZPE3vtuc7GQNmcYEo3H4SPw",
  "key38": "2foxkSMdX9yQsjdJorQ9BS9Jza66twum14GKKWQgHtSAGrVGKxMFTCKVpVdD4NSekx6A2GRDDH2jAPSczfw37kGU",
  "key39": "3vMUQTpRaCYsruehvpZw7ojemqKVNsb1CrcvrAtcdPA4TGgZCJg3L1mzdRH1UqqB4VTxnVPZJC1jokMwXbaY1Ayq",
  "key40": "34XANBM6ZwNLhouuizfR4v7wiFuZRia6RQgFrn6Hk6B2fxAgtKjrFEtdHwDh6nn4oyU2KNeseWphd6zFuJSZsAAy",
  "key41": "2G1quZ9twRhoysK546eceotPZU5XjNj1MRTCVCvR3qKQ3KZ8JBdEv39JhjosvBS34AFHjWyxabe68sRvynqmCcNe",
  "key42": "32yUvdea8p3mdVK9s6suKaNyzx8QRWZcSD7SSPymv9tWNmUotRooNL8xuDaApoRNyYatTAynjsRo2NFN8h52Byrp",
  "key43": "41fxAEEap2oYhCYXZMN9RhFNQBD7d7nkrXsigKLynDoMJpRqwunqf6y1Yq1aK1ffKPevZWPWxoBb9o2kEvFYSHyD",
  "key44": "4xjPgoPzzS9AovmE6gf2jf5EBA5wHwKuByCQMRS3srETgLM5KDbAsL3eWGzgWTPsxLSVNmMN9h7EfY2oXj6vpq7h",
  "key45": "3q8FTnUZwCrVjZTpr55xgRdsA9MjAFE1kSEjW5bZAb1V6FUyTCykPzEWBobBAFrwiYyoPuWWoAmxPUYr1rBNCj7v",
  "key46": "5yQdmXRcTqbfsgQHgbWczijMC73PqBT5u2od6dPDA7FrQwEfin8zNS7A1uwU9DRqZNLgVMn2Qjbv2woWGUsADde3"
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
