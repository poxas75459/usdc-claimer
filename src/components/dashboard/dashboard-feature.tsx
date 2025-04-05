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
    "5gWuKjAP3gPUPmoBQfDSiACLjTjrhV6dpNxGSjra5ho8Ugpn8YjURmSYSRzfUtBQMVf5MiF9XCSjmvfzTZWeGnxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTyEKaCXdsx82G76AjJuKC8egKZHPCyjukdKSCkFwxUiVimaZXjAizzRaECpnq8nFPhs4fXE1zaVLvjGqXaMsE5",
  "key1": "5qefuinWwntitxqcYPqQ5tDyVAcbz55ZuXJJVDZvcxPJuKRwR7wej7VFZfL5YN2tXUf9Ay5SN9x8tECPFPfVRaVy",
  "key2": "Zib9pVtHEoFVM2LtPVbAVrPVwMh8YNWVuCUJjPXZhK6DTa99sy1YyUNAfRz7B6owDz6YvSjjUi3iVtpAYEdHWtb",
  "key3": "5iGBAvL7EN9bC8f5A8CVYB914KeNRqbhy1kCn46kehbBptnr67Gg9BQG63rkEP5f8hct2ejiV91ucnjZfLfN9cUQ",
  "key4": "59FernkYker9bbEChcR5DQdxZg4etqiWHyRVXBHCmtr2M4quU7zA2stKR3dQrnqBmz1YUXE697JGwX2n3dCeEJTG",
  "key5": "b8njYii7zDHwapkCBkN8UG7nfDoQsgtncJ1UricBKmVaXupZQXJkViCUN7HwLJnLeNhtEK2yn3ag1nsHS94rLig",
  "key6": "37qcFZcK5gN19rP4JJfJuBy3EkQinDDHHzt8twWvu35YUZFRwF8QoD4S3nNT1Er3fjDzwRyXjoe7UAy7sAQP4TDp",
  "key7": "56g7ntA665CCecNJoJeDozBJD2LWQ53yCwFewFx3tptkovtqD9tDysriasPB2uVtsBqezykDCGYs6613K8aBXdMA",
  "key8": "4awmeHrg7q1FhPcYnQq5EmtQcHceWpEttFH2Kf6zMicpAAtxmwKJHUTkTG4skEf15xHiN8A8dBubPiJT97DsgyVZ",
  "key9": "2FJq6iacxSCSoFswr7QQ86GbrK56TojcaAbH6F4jtai76618ZaSYiR1x9FYLPqdtu7124C2x11So1XJj7bt2oE6r",
  "key10": "4Yi4yVG75Xkga4agAziTez2MRM6JaAmVcNzeFAgVpPWo8zy3ogqq3G9QCi8wvv1SnR1nQ7t8RzLF7GBEe8QKs2iL",
  "key11": "yZCjpuGmJtYSihPMHD8WbaHMjW5YqPsxt51hPP6hxJZSxk4ULs68BKUFWn6nUTPqgX7rGi5D9FaB6iaUZhGjNdy",
  "key12": "2sCNUuXBYDz5jmMbWQ9EocurXDye8t69UsjeTBUTpiGktFknGbGysKrvvx9PUmFwbY2rM1cRhTzXipFnBHtF5uRR",
  "key13": "5ubXbUDZft2EsrnHSpKicSaKL8d2yGVwt8Cg1eTFVpwZKiN5QfC23LgjM1xib36an9b2TaL2iL11TMFYkb3hepNS",
  "key14": "2h7K6ffj6YFXNeE7ZxUYfFKaKYqnLpujfUTe2tUuXnerDBFyyhkfnwws68htBBLvfuXpw5VguJvSpuhiGc4EBa5x",
  "key15": "2TqNyHhXPC8jChL5LtpTDhQeJEfPvZJTztVuet94PkCjKVv63aPD1FHHSGrvmPHD8xrCJYWkFz7v43mdTLNRkgod",
  "key16": "ttDymbYn7PGJwLdjgHgVWnSkMKtaHgqF3YZSAYAc18pA62iJ7FFwEkCvRuA1Zca1jBAVtrxfW7KvrG9ckyTN9wT",
  "key17": "3GRDaC8hc75K4nch76ASjkwHFau8rWNmJSbhtqzhwifF3Z33CTpUcZ7b3hwi1DTi9E6y8QuVETLRXLxFmBZG7195",
  "key18": "5iNU2zRDKeM8jT4HLL4GYMkdjDMBbcgQpk9iZBUGqpRQKESbBGpHp8XTkiUPbpRRjYoCWBW1ZrZE6sAmURf84CYA",
  "key19": "3Uvb2JNiNdy7fY3E4SZVteQ1LSonnchWfn8Cc7kEXKrV3v2s9Syv18bj97sRYH5q4USF6mRyv6fmx7Xt842FCwz9",
  "key20": "ydymJg76dXLscwQ3dLndvraGh7iZuc1tq55zEDWqm3LT74CAyqkqzGdDdF4vPUGX6dfAv443RzguJa7DwGWqjXV",
  "key21": "5DRFBkryiGobRZK2SWihbNg3F2ga5dVyS29n7XPPHToY4LSDqisW6Crj1LP7VLbZwnKyg5KmQTMyZdBaaK5wATBw",
  "key22": "5xn9CEgC5Cb4zQcGYDKwqWb9GCndtLPkZemuMnF3yrC5D1kPr2Ad8mG7qfWBiwZx7mtfUYQHyEG7EEgTYAP22ukh",
  "key23": "dQubhuQtuBsRQ25JgHmoqEhGb2bFbFNnZE3WnP7GvVrgvB4e6f3mwQw8nU3P8hqrVcrgQEndgfaMqMwCnw9VKiG",
  "key24": "5Ztnazmyjo9wSRzQQhNfDGvKvitT6avKQx1ULXe2xLEBthXVhimnGC5miCiQQzqxdG7PWiekG6pZeRizkbsvtcsg",
  "key25": "2SN2SEKgCD31DWa5tMXUEMjQYzMKFHc8ue1xTzcxGgb3Pk99Ne3giaFacpHmWn2rsV4Y9NYoDVFoeaKcbVGeLiJD",
  "key26": "2FhuGmrym7xQqXDiVAwvEQaQ4eCydV7v2HzRg8GHG55G6omKjqH6iLgUdFJaFiHK8uV7ieiuyAYs6XnCheSi57R4",
  "key27": "5xbiVJJ3X2Kp9xb5dFWh1tvDLwoESB24Jq2cnMtT738DUm7SVrdzaGLp84VejaKEbMbLcx4pGqtMw9uTQHmN2JQU",
  "key28": "5Tr9P7QuGvTFAwg3N8Qu4EPtePcQySAazUjvXcJ8J3aBvxfCS8oE9V7dYFqPrEhapHLQSXGmobfCm6jtRDoDcn76",
  "key29": "2gcYDHjSjeoEHJPDpWxUzR8TrDgaVJuWrbKUYqhrYvtrLozDgmu7csA24bagmQUDxwmUwdgQPKVzpQ2pkuxPuyTR",
  "key30": "4DY3v2JnkjrxxEfndWv8YmfpGSdJDDsrcjSbQdDYkAxPeb8SUKCQYGtEh1BTDwziDpAAoGiT5DuVeUk78ijWBUXs",
  "key31": "5sY5pk55FRFqyPAu5xoYiGt6Z5aXgcBgBRwQmVW9JGYtkdgDQL7hA6j2tAj2xofTWSM1fLjrjpPbNffL77MQNgpp",
  "key32": "2LZLuQFkEftTKGteZij32KUXdhCcrWjuzoHGB99KMjo1VKuAHAdTdoLxxpVRcMK4tVq9t2LiF6ZEckFxUH1DHuVZ",
  "key33": "5NThugNbar9qr5byt5F3hLoLasQvcpdMz3VUPwm7MpXMXpCoQeY9Yc5Lg3bEVGmhXGkfTMvwupt2d7uUWXrtnUeQ",
  "key34": "TveuWfAhq1Cb3yMX9K4rvx35juPMmM5b6Y4csaDzaBqPWMEuj6T3HuveKYqxVb6tFxSYj6LWj8b6YEu7EuNZ61m",
  "key35": "3XK62T4qVFbcrDQioMAwo9fkNUvcaFjaSZ5NuP2oVdxuhLyatNobZavNZn52wJtxCF6TXKNyjKeUXNF6VGeApXKp",
  "key36": "4kehoNJzZWxtejEZbE34ibYLgbzY7Ubw3WyYLxiVcC2mCM21HXyvPxTpHUqXYgbPcQJzTGTdhNY6HPBTRPNBaFhJ",
  "key37": "44TBiR8iVAVHjdSa7aZoX8Xnxvqn1QkwMTvDEsZkvLyQzgsWgSoGHNc6Ho7o5g4RtkPg27C4zLeQjtLKHEVi8NSx",
  "key38": "26bbnyM4YTVKe23mRkVTbkXFG2QWoTj3dGYtm4WQzo1qKg4LNW6mVgoYtLJchcUoM3Uy1XZQWYtiAmx7bDKfYc96",
  "key39": "5LrU7SGhtsCJfFVqa119CkFK81Vzqy6dNCopbZK41sbZ7q7QqELKoJj8m8PH3HxZ1xrabph7nRAdK2ujBgLHMLUa",
  "key40": "HN1S6Yp6KGDinnQrCkmyxAjjambsbL7tbCqpVp3wXmRpPpseTfcnibuXDeQJn3otq8vHkb5KFyL5dZNyg1SUmyc"
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
