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
    "4n7XpgCqKGMn6bpNFCmqcAHRWSqdnp7mJBYD4HZiFiVZYbJHaG7xuQsyLw8Lp9xzFzy6kNMg3dcqTcTXBggXphsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Abfmv5MbNHHTnyfD9amwZxgcsrjrpd4Ld38qgWVoHJ8Wq2oaZekT689fEa38ugw6Rr1r1EMXVLi1w5SB7XMe9e",
  "key1": "VUESjFzG4Y9zVLrYuc4cFueE6eDSszweu7z1RKndTj4m3eSzhXuqEyd8bPKAURzGoY2RKMzre9dkhJ5564gdKzv",
  "key2": "2bwouT4EpirF5xkm2YT23fyj2ijZu1BGahyV77prR7uWakSDnvTxLHcJBCAx4wSdYUntLaPQ58QRy7QZd667bZyE",
  "key3": "39wAGV76qSAaYGaoSxRKPyZFqSEFqpuSBqFZs7RZt6D2YFoTkJFQXRUspfa1GTaGwCM2cbHtAPThNSA4EPMewG7q",
  "key4": "3i7rq6fVZnny7nPcLmWYhM73k4XUXmwPVhsknUBHVdehZ55j61Vgjj2631MQkN4NLVEbDga1sH7CSSYrd5MKHudJ",
  "key5": "3ZjRMZoEUC5FBa711YUD1cpaCLE8TV2B9MXS3M4ntWp8fayfkrcETeGLPJtFKY42wfBbe5KeFAQ5uLz9cuWhsza4",
  "key6": "juPERaURuc4U9VXYEGf4TW1BhwoE89uDimcN2Ce8oHYmWyh8ern9TojuYKPxdxMyDj7jkHDN7KXVKFWJn8D9NFu",
  "key7": "4aydJo2f8DuTnvb1xALA5eaa8RniJCvrUeNstaUS66p19dTtf8uRsSvoPX2aTS55eCR9FaVS8ESxuNMxgQaunuq9",
  "key8": "5iQZsL8ZZZHjeM9LDdpGyF9H5dD2wTkikK3h6rZaEpzh5bnCqT6KGfgq5ccn33o8GyBq32Fhv8X3B6Eik4Mcm7pB",
  "key9": "5REDedwT6H4e6NmMtADzSo5zmVeZ6LifqsMvpvyXckKKzDBanLgz6Vcbr8BRsvXBpYMVvhj3zKhCXxfhfSf973bh",
  "key10": "2bm7mBzwKNhbcKT6gp7r9Wx7yur56DhG2UDe1QVm3Ku8Vzvp1XZjgRwwrM5UChgg4NarsN7cjbKjmgHs1W45mnxC",
  "key11": "28TZRq1zVwE94CXdpQhg7CPTZK2XbKf2uGCCMhkrxvCwMmzPALF2fdZA3XDcuVSkygEmATy19qmDpNQMtNbTcUh5",
  "key12": "4rBCAiffTh2vkwNVqJSwRxY9QoBji54fNAjJEtps44ajwj6ycpV4aat3bpTqTpe2fqXM7V5gsCDkN18YEDbudKim",
  "key13": "3kS7xjhdbYfyVRLXLfZHj3TGCdnPCXYPMVn6FoPaCzydVnQquqsn6Q9uWVHNomBVksSY1LYnwndXrg7MSmA5dWmT",
  "key14": "5VJTvQCVcRvqmdQjyANoBtmiZD2AHZc666UBt5Ei2Pgd7JPiTruyfv9Ysx2JYNEa96n9DzayVhSf6NFNrhujZCFD",
  "key15": "4XtQCXHA3CMWt72aCiRxMBDMjzwBNEkcPA6W7hiR8NXzWDRn5mqjf55i5c4Y4fZGRomzJ9YTxUzEpDtHR2kgxFK5",
  "key16": "3taTfGM1ArL1CwcuWUAEXxwYre2khdnL3f2bHPFdHSFG7xfc4okbRum9oNouvVp1VifyaT3L7NaesorYSqBu6hC",
  "key17": "3NPYcwpBDmP8yhc8SrYEUHdvB1HbQyKZGxFkCauC4dbuEUW6qDA1C9noaTE498EpgG5BiNrEs14hLrdULUaRWWgd",
  "key18": "4NoaeDpKRgiYarUkVtcAnm765BqPDn58dwbFZMZ9nRtM3hNNyNjBLp5bikCXQaiR9C8H9iggrPdeUSa7SnvTT6bK",
  "key19": "2gxQe26qm1aURy8gHdbj81YBnP8k6wFjs9s5Fs27CeE8rcHL3xYr4p4F4mNcwzZv92XN79mvRAh4aUCWKcw5sed",
  "key20": "5jg1q9vfCkfBKXF5SaowNA4dR3HBszUTUJ27kYmVBhW2gTy3XpMYTqbfo17dtx7cXm5JSYiVgXqdATDW2DkSQtUU",
  "key21": "m2GCxjVGC2FDaXn4W7UNujRT5yAWwJkj6XRD1R3KTTfF7NSCJZVhRLGFNvLTfPAGSZUowQeb2FKNnNqHd4X73kj",
  "key22": "EEdGFZEMDd8vyoqRGNPJvsPHwEypfvf2KuFrUMNTp5S2GFWirBtjNFUELM5gVAHTEtp5cZnBMVr4yqqe7vZ3bz7",
  "key23": "dzvmTHLXXwBjEVCFk1Gnf5uJPTmrb6Hnr74E8yFRLw7vbdSaKVH1fN7LvMkYuY2dBzkMApL7CsbmNuKjCv7aR9B",
  "key24": "3E4EcE5VenKjvc1xArTeFYQEgyUnyHco18wcgKuhX24ghubeioQBPDhXihUfzAuRALd7DgW7d9vnkcbSDvxAPP21",
  "key25": "3JXXovAsTbdWkzJBueD9BbSKHg4b8ZGP1nthicjWoWfvUo5UFLfq9kBpzk71CKFrTB9gJke8W8V3Ze82JqMghuzT",
  "key26": "3roiVRv11U1nCiKXqiUu7TTRJon56Coxp8s1XZmAd7RWjLSDCx3nYJUSsPWpk7u2s67KwLSsw8guv37ZzF2d4VDy",
  "key27": "xCyZsc1ZZA7f6qG9aYkmJBawSRYdNoAP2613cBhhBHNZoYA2EogLSK452mjo7wHdcaSkZ6soYQBhJ1WkZdoq5Zt",
  "key28": "3JkVnJzRQNTo8S15HLqVezswfUCENees8m3PuA1megtgkWNfE6FZC5XoHUSrzhiQCbgczwSnQz1QRUzjmakaQW4s",
  "key29": "e5V8y4mG5yLxBtYjFVSrCwoNQgEGjdiS7jZbz7VkA8x1AtJe71f3hwkHHDPUaU3uBx4cPTpaSVhCUCkspPmEcJB",
  "key30": "4nmbyGdZcsvMLQGFm8JcTSmjyNXfurVNW8P7axDupzyHmKhryr2BUWKK5YknrwuK5Dcg1UWpjUze8Cpf2EBmaKrH",
  "key31": "2t6A3wEA4YVPsss3JnYLhrFeuKyWyazJhPNxnc4apTKN5x7ck8y3F9XKdek2EgZghQMJbr136ju4zdkYZ6At3ckf",
  "key32": "D4uxm9VLfpEpAbrAjX1sRnjZ3zAZ2R8qn3VKpKfMZGKeYycyJ9TUtqqTMGbcLt7sRWSi5yiK8RtfsQtehHfwvyV",
  "key33": "3HorkvU8iHQZiLwnGSZCcSi1ek6gZkUpzsmY97MxfRDFswB4uTEi3N56qRcpaVk7USiVMtSW4w3rELdwhYthHDU",
  "key34": "3BnyopwdJ87fxQBJ8PQZhTvsKPvXBN6NgXntX7oK44v5LPUqNmv9kAjmFqgVSrAAW9FBuw7Thjze6JrjCbZ3CDEb",
  "key35": "3oa9P6BM4cwDzFAAzUotU8wdaxYEDB5fxDj4K3RWX7ZxYPzFtxgPKQPpBgLTjhMsMuggcHxqeLXF3T6fAM9WTbv7",
  "key36": "4HMNwNf143BZERAwmnGGd9HudQ9NmuDpbSQXfrCfJq75MSChdKB77Qo5E6ALFZjmyBKEXc1rmHyQ5VStKozmch8d",
  "key37": "3LNPEgY26fexUPBRvBU6tTSvDVLsdwVv43RceAZHFDPH4nWWsz5SGKFxhRG88JKXjPbxXcd4EVZqCkDuGEKckvAD",
  "key38": "4cEjmHsYQzxYMR5aP3yxtTJwTmXWCVe9kBe64PWft8HCBVFe4uqgJ1Uz28Ki6ieSL45kjZt2MGQrDaG46QS4TXcv",
  "key39": "2UQrPMaBqhe515NL4vgLjZFF9dmAoXmR4AXuD9e9M4niVUHj55ZbwcPUSxZjJ2GkpatSy8dHocSZi6GjpuYZuoq1",
  "key40": "52dgcjvugUQrfSfeKQQcpoTXMZaQjpex1GYSra6Z783wMYWK8w2F1NGX9xXwrUaWLNcDvP8YPjqjhhn6p8S63nww",
  "key41": "2Y1UZnpbQFRC2Jdt85nNufygnfwsTHHrscwggMTRCahqDn82xrzssxuWJbetoBMNQSYttJB4ASMG89KaHGQnpvvR",
  "key42": "4jSZsHCtYU3Dx8fvXuiS5V73CXt87X4e3z3KUwkwREhJLMyvrJ1pAcbXeL6W4igWD1sBooM4D8eskoFyGYEQcN1k"
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
