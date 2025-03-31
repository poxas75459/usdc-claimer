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
    "3LjjQLYuZGtDJ5oU8nPNtARBYN7YiviEPzx7LNZvszWNzyFbwtSmyHo1j6twyPWxqnjpb4RNERaspvhmFJR8pYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umj424x7b8vxMh1T3jFE83p3TYcvoat2PmMxDSJqJfrBFQexvh5MGw9yntEwbQU51PmQfgHSXmY8yU2bryGeEJC",
  "key1": "3QnVJmuh4nMs8m93iRVLRuX56vVJMrYkUYQ5JAbPjCAjqyU76VgBP4QK1VUXv8bioAacn6FAt48AJwBbxtbYcoe6",
  "key2": "298st8JV4Bs7gWZh3e7ik5b4tUQQvbK33hcLLDt1zXdtiYcEg8Sjx8Rvej3tFQCfwXnpHcJ4L5Spr33qevtGSHaJ",
  "key3": "55Qi8G1mMUyTzVjRGpPHBfX6PAM6EexngTjAqFw4CR4v5cfSJZFUN971np8Eb1jym4oarFqS2B6qyMPQdY1dzM9g",
  "key4": "64DaSYxSXbobGRBkE1tw5iGFP75AUHcxnBPS3WdmzgShKKyBQCkdezGpoNUaSPXeSvdyxHayM2efSHnu3F1ea2gq",
  "key5": "2AkUsjWWPwQbJ8nDJ8CdWPRxfwESX3WgoHD6NB6Mdqy9iPRCwYfqTZ1BjtZpaT1R8jLQuRQWT6bxQ9WgVUedkwjf",
  "key6": "2TkEbv73DBYZjKfq398k15MGJF4Uk6ybTz9yWDK7XSAsNtn9mheAfW98qDQ1zWqw2S9u1SMAbFjPJJ8uZWDiz1Zt",
  "key7": "4vvuNUaAx7ZJxuPxoHyKVYxCCuY6TnL7fLZr9bBQDmzDG4byFouzfA63KR3XQDZqbqwDHMaCvgtJGoW2s79K3UKM",
  "key8": "eLmRqvpCcVtzsbeLCxQHWSC6Sc1u3Co8wc8eKHbjHfUZR19E3pZjQNVhXnKMnxuMzjQ8e75FnLPdm2iGTjS7pUN",
  "key9": "5FnRi6mv9EXxJ2AzoH3SkfUshXasaceCEG7yLfZSn5wNsj5twHnVpkBrrTmVX7PGAVrdwXj1PMPUFURfnsEb7R8Y",
  "key10": "iALHkmuMjHz6qcUpavvv8ALGYVJCKzH1WT6tVy24u2LBQXMga3TxRgztaxT4q8mGCkLehuHLueSvFPffYCddVzG",
  "key11": "2rpvmVn2c9GqjqLWqQdvswVc92rtYqh8ykVWJg15YdNGkwv64rPTGNFTM6vuBYBp5Nd2MQEtzHbYSU35oRxVXLXX",
  "key12": "3hCEUfFzfaUUHsxi5RdyPtR4sHeCQXRDWQMQb6BFbXrJPuhMYMHk2tQRBRkCpGvPMp7a4poJREBoUWDj65FSoXcm",
  "key13": "3xxi6wsTVp1HYUsswvyjdySznsux4YPaHCHxD5jU2AZM3hakcRvDUSxnoMqWH1p8WAnZ5VCEBDX8ofndhM95KcHS",
  "key14": "45UxeYkmyqQmu4mkgB57isoZJbvEvzyeuEBBta6G29CrXfw8ayj7F6qaUrCQpELYkmWc765Ef6JX1uUQDpCQDcRV",
  "key15": "4YLcMw6ZBrw1Du3DBqUfZ7rtsQM7ETuBEKDonw7QhPV2FBC75pjyCUZGnCkUZ91QWZLZPcZKhXFsTk1a7Hgxoyhj",
  "key16": "4QW4TPuDLWMvFU2312iwJxVekULMH4i9Ew5eWNsHs4FvAjvXxxEMUNuUBfB2zwaBCm9LTKhf2s8e1UniAtBgUvyQ",
  "key17": "4oCA8z32XEyQRktbduVFRqYTiUGABBarECb3njQ7XWkWe1iyncXVFfZYTt2KbCvemKf1yegUxGuoqst3qhZwfuzz",
  "key18": "5fKpfizWL3gzrP1yiTctuVC4pZYNSFmwP7UZYS9jYAQE4AHzpnJvjZYKEkEeDTBcoNaW2n78ujSTpjTW1mk2Na6Q",
  "key19": "33n2huD7WoGN4PJ4MDbYh6LGeH9RaYKgEGdKxpV26C1tKcCikmpEWRgPHGRScd7vvKrQW5Y6ZnkCigH2tgioEWw3",
  "key20": "5oPWkDdL85SBZnJEkpYpioQ3Mx1CWRk4D41aRyR1buUqQKACfuA3tscfTYCNPfoVzvUrd5XAqQLmAiTUKgrpdU57",
  "key21": "2og47xBDA39uaCryYsBUUCGQKvAuUWtLZjY1Px8xQf3oTtDmcNXmEL7aPJpXW3RX8UxXkhGo2rtWXNAm6aLMpNYT",
  "key22": "kmd6RUqVGnybTAH3xYw3W512ma7oHNKvCLeZ8pMAtB3WxPDW2FqzzBdsKNaN5mZyxhCrThNp7JFyU7ksSJ7ndXE",
  "key23": "2paozLGER4Xxa92uVzAViL88c6ceG9XC3zPva5fcBWh6BXgET6JwJeWfJiDejGtUDH8sE9ALqvDvfMQZEdCbwfL3",
  "key24": "2xgisUdE1s3afaeLYrPVo9oajqANNJdtykxkjsR9akDNNjyLAqonByda6uayZZRCbY3DvUcYKy1gWyDitBGoDD3c",
  "key25": "4encYUV5PEq3vE5epApZKbad6YkoL9DSeKar6EfsBDCJaHY8NW8p8adiEto3xQquYCv77HnqLdofs75cLmF5Auio",
  "key26": "3EBPgHrA6wyGNT1AEpLrSLBkuVKXdbaf3gtd1AnR86XaEKr5Eh79mbJvjcaVRRUkEr744zww2XwkrA1GYCXSbEV8",
  "key27": "4EnmBySAAnZ3UkZfoscanC9amhWv3VdtwgdSJh1AP8ZcLc1omyztEi9neLuJozF9w6DAXfaHBZJUM9sdGL3qLyAU",
  "key28": "2aeVC1db1RT3sqLfmB12QAG9L4R1qYTu2q2zHRQsyfLytSWeG9nf6KtdZsNAFVmYSrEREZsjub4KRuqVwPhU6b3S",
  "key29": "4ErGC12KaoFYRtTSxYKTS3236ufbGJpZB4qBPx4QEjr8uXJXKq3nDwepLxN3CVX8P1jtMrErBCaEKvb1yB7mmpM2",
  "key30": "47x1SDCjB5MzQNXSjArk5k2RrWj96ocCQf6boHTMQDkYPgkYFcEWQsqLhLXFprtTTYgBGEV9z1MXX9GDpkKyBLvM",
  "key31": "5jNPqtMN9uA34G1kyc2Ro5ikKwkxsj1iPLzTTXQWSz2qnseC3GaWqRGzLYFd7iJPgbQsTiU9z1nvatFyq3KLBrAe",
  "key32": "3ACZy3YaWDSgjrFTFSxvhHWb9W1B7GUmB2VDPJzrrCgyP7sg5QBk3NtKF1mVHVcdbV44NPgMcRrZYFHDPFxAA5LL",
  "key33": "YX384jascDpjvzTUsbPUhZmJuVGiQQsheSWdk9UZp3QJJg6KeP1DkgVHdyY4chyX82frWwHNornLH2NwGypBvRg",
  "key34": "62RoyEnYf2RhxrbLDk4oUSTeQgBR16Vzf8sqG564c72iwABJiQWdSrfdsa4mBuTeuYdqaF7jLRftTXNoQJbp9paK",
  "key35": "if3DiGghDXWo7oLUesRDGrBaB81Re85mvhPSR9UoKTdrXMArhZZamSVAQB44Ho8BDQ3nWsadbk1QX5oxmXD9r4x",
  "key36": "4KMxa32rEoXZ7a6gj3QsmbHTyyQ9675wUnpdgmGo7enqkyMTB1pg5EyWksmhErkA3ytGjVJAQRwSPQUWxFXY57eu",
  "key37": "tTMFrnrFMJjcjPpwFnoaXApwWQcRFSnsXmkxoJKt6kgfrJCbhoNGXZdsq4sHR46Bm5H2qMTaKYbet4jAGJcpGrD",
  "key38": "4M1BBhdvPjbNEKYSbseXN6SthyxmAuzNXGrGasSaycifza5ufNS2wBWGjuz7NPxfnAwWMC3FZzA2zeUAcAw99TQx",
  "key39": "5gESFFie6ZsVJ8aZhYHZ5usxSJYjpKfPrSt53LRYYptNAwpGMMNxptQYruYg2HEFvFdFL2VtunXadyc6LnSYkPaR",
  "key40": "5wu8sA12zPomoScUGpitUo94QCvvrMbHKSRHbPymAS5GPGrAzhh4FbaDuw2FsQ7odUh6X2VhYux2ZKKahs42Ggam",
  "key41": "2u3PFrsyxTdGUTmcTbzMAFKAkKRXAgSYRGv8SgHpAeSsxkCMQkVAmoZU2FfAcchREHvUwRAWaJX4B9oSLbNB2gA8",
  "key42": "4AoPkENGbS5q9TDSvMKxZQ7Px5jnkYJxF59pgKxvKetFVTgWRBSaTMCFjnX6vAsP5ZuWceGidZEASh3v4o2TAiwf",
  "key43": "45S9K3PyWpxNZXqvwf6FsqesgLfMseNEaMfo9FsynTsgT6hwugVm9t7JgFwgjfuPCTWRNUvBTrTYPDaPwVQGEFzQ",
  "key44": "cgBn7XctVp17ov3yzDysnumfgUkA2WXoFud6yM4HwNk23xp9HHE29syG1D7E8cnaRJkNJ7QSpZyRkZgQsq4GcXX"
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
