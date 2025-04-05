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
    "2XDdzwSHUrgoNJ413UdCHo7jQ1RwZwn5aC1YvTCRQXpWHjQW3X6Grk2kCFm24AppckRAmnoDfE74VXxfpU6NvDT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHz2CjrAqnT6Ufa6nJT74V4gqGudmm82AiWkbs5ui8yALXZVVUXHn5bQUdaXrqKxbGc5vJTfRt2Tu4umcfJHKuG",
  "key1": "4XFFGGmyP8vPtohQGzZ4K1m8LTXx6M43WwQkpLhE8NsEybfStTUuxgNFbevqufaNDdshcNYRpWdq97U9a8Gp8g6g",
  "key2": "LhPHooU2UeTjZjhCKzigAVyEatmveaE5G56ZycvStQfePccrjvdvNenENwYr85dhgtVoP7nzaYnwtb1EbiSSusM",
  "key3": "SHpLNarG2vcNe3Qfw7xKQnCRJ9ucxTzewrh18eVRDQAQU6jWknCPaNwTDEFBgeugojvK6AdXexcAVQYpEyqzNPF",
  "key4": "dvgiRz3yNovjD3Crgd4Ar8W3NpgRBUuxBEVos6bwM87gr6b8HHPao2GVdjygLTe6YMDXYxdbdHeuaky5gcgk2pw",
  "key5": "34wTshY4vQot4Sahz66Gd84kHXxQr5TnYn61eKQPSRCxTKpAjdFWTfCMMVBpBpLNM2zdjtkfVxv2DZWEtDyaei6Y",
  "key6": "3vCxzjRaKbKnammzSr9sSHYPBGWzNcAMUAVnmcvGUVjMzjoAJMLDq6wfmMm4QZpkGRWdj6TfoGuF8ThCPtTvukGt",
  "key7": "4DMbrKzgaNHseVNYUNUok96dGu4H3qDPdVHhBLYC95nuiJC2378BUSMUFq1mbT3p3WKCJQ5KV9BbKF9jzogoty1w",
  "key8": "3a58btd4rcxzhp3pyGYYi6tXzTv9XJX7KU2YUV2T5UyiyGpL9X8ck99T4YmSF1sEoW3QsZoJN449rKgPrpCFJsmU",
  "key9": "3U6FXuAaPdA9hj8fmN6R4KRi1UyhDwqg8fNT7ERsPFpPQnhU17iFQHsBcoHKMW4jkUGVZ93mZ1WDkHsXG4u7Bfyy",
  "key10": "4jCQfZ8JwJrsUPWHfATzw8y399qWhTJZ5HHz89VeEEBzJx9bSk5cqwC9XT1jXfi7XFJaHPgk5Et2kRcqkbtTG6oc",
  "key11": "2S9QGyUvxEcRTKWzA8jU163MvaYqZALR3PsMXP86tDXQRTV49FXyv66P9YiijhvsT3mtWcf2wnk2xRMp9dy5j85g",
  "key12": "3tx5LoEnAErS4KKgK2qVD23S3s5uSafTUVJkxqbaUfZJWkMAgwGKeSfvR2NziqZMmTuRJYbyEZYxgxL4Nwa6PGwm",
  "key13": "wyFbL6m8FEeaQrN2PccdnJEwgmo9zHZ8czG6jVLUiKbQGb5N8z4qVaR2YrNvviTc7JimXUGVKxsx29wGBpryK8n",
  "key14": "5WjzrhgAn5Tcnh2rz15irSUWcmqb2GjsicGrLhZqGBKMQmJdtJ3aZqdeTHPQH3Su8tGmvWSvwuNmzA3QBGCkitHE",
  "key15": "4Dw7afk2vomEGsTkCMF8F4EKgMU4MaXt5LhADGrpusE9zfV4EaoF7DvbC4ixHFQDCErpMcM8AbD9gbMSZBokidHr",
  "key16": "5PEtdZtwnPwxQkyweAa5Cr5RpW7XcoByYW9e9uDN53sWYjhWiNe3WAeTdxHMHkCifKUfjzS7gusvEghdrpLbUjkJ",
  "key17": "5eP6wHvexdz6YwcxUnHFsM4qumGXdUWsQbBzzo2A9ka46Ef8V6BPUdeK86qpU8wQi2X3AmN1saYvyAeBmYmEVcm7",
  "key18": "4Egx42TYQEuVQssMHztN8WTG3hkYuN515xViv3BXxh6LLmMvGs8NT7SjtvyzcBC1DWwtSpVvJhhVBw2hKvch9JEs",
  "key19": "5Qn7LBLYjqVy7RpK9cK5Sec9DNsvBzewgY2zCrv4SaXXjaptm2E4uBa4nRAiaUAfKFKbTbLtoBHdRgZmbTvrg3pS",
  "key20": "64mzfMmVup9VEEr1i4KJQwaX3izx7VR7ViahjdrhfyxVMRM6kxXoxTd1qh3uhvJJJMP6SFXUpjCdcyo4VXGCH1wx",
  "key21": "55SE699NvU69q2ptS5aVUBPzbsf9LyK8DRMi5WQ2UvnMbd6V32uTxyCox6gmftF25jJCcq6MXdHAvpFYDJW691VK",
  "key22": "CV4Js8EpYy2dhr9w6z6TgccEALdChy6fYwdrNDRiS2h1jny7KMDLjCspif25QT96dsS4iDNxjWgWTDcxgKQziPq",
  "key23": "4nfjRC1oj355iK2UkojQutqbgMKhaJ57h64idVEpHZPLfSZMftpqkvzdhDEnFcoiKvWs4QxFqNzx938pstc5PiuQ",
  "key24": "3WJgmaMfrWvqMrWY3QFmASq7TmnmonMh1kWUrrPr7pdVMkRZuWeXXiNYgwomkqeCe9WQRY3jkFkAL7NCwESpknsw",
  "key25": "k4Rriai9nWek7qAWYnHYtbfsYpzoGfUcdqPQE3UsmEtRfKqfdbkKRGtDpGcArezWX3avKmbwv27xXqoAe6sqmwi",
  "key26": "sP8YgNhpkqWUdAXEqKV1ustDT3TEZuEvNyhwTspM9KGZsPHwvjGFd1f7jP3pVjP6yARXMJCGWP5X9A4sy63DesG",
  "key27": "4twFEehnGTWrRr57Z9yewN2WDQT5sf2t5YrabVddb3RKzssX4eJgYsDrUboHceswA9ydNms6FouSxHGYi4f8yAJ2",
  "key28": "2PhSu5FWjwiF6W15VQu6KscSQ59XBcjgQPtghcB516nJm6BiS2P79quVSbQPNv8ezzUUy6L6RGErs9TmetAb4h9X",
  "key29": "3P4X9cwuky2EZVDNWyu3a8SNJb98RBFTB92tSZT4rZRh9eYz16dSLrXu2qs6boREiv4bekDjtSjsUkSDsN4KxaYk",
  "key30": "4a8yKSnyDi6beasxiYAvHCoFkkSPMCevSezuBC3xVJdu6aQRwToV7iV1LgdNCGZ84rUuR2pumkqiAr9ALB6f4RMi"
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
