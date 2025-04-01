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
    "3S1sfUMi7TuD5XZfkrSZRUsvJXEHJhfw3MwwnEx5gmaugnnuMajFJcgSSDmMLRvHkYxMKMK45cMLUFyhGywPUVVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w1nPJBVXzDKhjh9LHa86q16HKtuvVJXA7dwsFnMrcQ9Cu3SE7Shi1aMyh1bHhKAquoHrwnTihe7ohK7zWXfxw1A",
  "key1": "55UkyZXxSBZwhTWCEghZL83gZb6yhrDPKwzJwNz1e8TX9dijHUBcnB2Zd4afP7uAoLDMRP2au4r5cyfhWkrZjpKp",
  "key2": "5CNqHhrbP7RTxXnBVBeJ1jG3oHBq1q4iTdT2XFSmfXiRBkYT6b89k35CqbCWHonh2yYNEwXFuGNnEj3kAQHQanUh",
  "key3": "41vReNiTTdB71TmqmWEoAM6MmHSfmQjN9szoYTzZgCm2VWGNKFq5Pt5CoAgaPExPSeiPG91wF2zcSGWoQ3S2QekE",
  "key4": "57hpspyrnnYhkAczBRjxpXpmzTas3cMBYhzsSVKsXSEaaMTx7VCo9oK3p1wLi1VppLgnpqqFM6kzP3uoqrYnmmbk",
  "key5": "2kZ56BaQZwbyC88YLBeWhKecAtjEREKyziMhTdY9oiv92WnCtTngA4vTwWRrcSHYkpSTV7kVQ6ygmzCbswwZYMbE",
  "key6": "4S6zvgBaNUjoJn59XM7qm1YXBJYcNo8xFy35iaosSur6rNcnyKDPScTDQGcHKhztT8HE9XgE6Xjurj2pegRfKhtf",
  "key7": "2e3iAW9yQcnC5QSvXDeq6k6XwtpZCpzwtRXU6Y5qEiEvLU3XMH6zHETZJdt64Uk79oV4pyDveqKZe1DKKTyRQheV",
  "key8": "5ZxGiSfMrfDKV4oB9UGEyTzgNBarrtM4bpTqDhJCkVyS2yZmGQQVYtB3m1VoPFBFpsxZvRQDWnLAcFB45VgbvLxV",
  "key9": "5zK7T9AGJe2hB9r1kTsGTFPT1oAM5N4cxYGB7cZmMKfsz5JMdDbHbQvsvpW4jNcUKvGcMHUayaqGdgxhwkXWycSr",
  "key10": "2C9oaRZZue5MeBzc4oKKTQRn5ohDtaJVST7AkxjhWGz9AKGoQ2jBdZc4EQatuLYpeDEtn9krARpLsyhqjrYgoRcN",
  "key11": "5Bwr7vmCJdcRHY1yWYmGwTbXgNP3Df3qcgnNPFwx7UHdb3wCHx7ad8nSuuhTFe6hA2fyxT2r7ZuGVE3PBYDUAoCD",
  "key12": "3jovUA2ohFcSxZps5kdnKQ7EWNoa9zqVLX9pS9LgWbVt7Ut4vCbCFRAjVheGj7gc5AmBTbN2rW6uLUePzdwBGZQX",
  "key13": "5BP1RRXkSoT9hF6tz9hKSEmmuSY21QqruL16N9dYHgicmDJM8jWeerRB1n67BeU9SdC8ctnBcWE3QxEv6bHH82hz",
  "key14": "57NdSfmGLVQsyM2NPYJ66whzG1pSziFoPqwYG8hJpmbGtMMyTB3KauvjwZBevw15rD2fZgeseXKU2NTB6UB8QhGZ",
  "key15": "3D5eKdQZneTkAmdxYoSoUpQczLVntVDdJmATG39Y25igiExqdDveV35nrP9pykr3yxRQD7kdyXA3EHz9ezqrwfMB",
  "key16": "4dMuKeaZhubfLLtf3T14GvZ56nAibrbuYELJMR2EET4zJW7qhiTfxfzfLMLXegBPhGNC6an444oKnv1D9jg9gi1g",
  "key17": "4vqpzSY5aq4o9MVCstrTXi529JCeK4XhgvG77FcC8uALaWoRhoNeWacgyK6rnc63Zg4Cs2PS3ThSFdactUrVPL7f",
  "key18": "3ATSHMQDStjNsKKDETw3LuDB17ZE8W1Kf2TDgAvKW9XVpXZFGZH677MzvRMQCa4nBU4NXMSp5RghDueNoY3Ktpii",
  "key19": "3SCt9s2HVHuoknk8VRsRH9JQAGhG2v2NJMfnQSm8dH3Pk3vjU5PTVTTHAvLNKfTzhoZskmd8MvCwBxADeFQgCB1i",
  "key20": "3J9eM5hP6S78cGqV3MabUva2HR3hBfm3ckoCWDg9xQvjUx5taVgvMTzDjPjshZk8A6CcTfwPggKoMy1LYyuDU7nW",
  "key21": "4s3Cy9vfk71Hw9pN27nSFs7d4HryjzUFrDbZAiNUPefH7wKoVmQ5pDaGAdMsdHcruUXuUMmkFZQQ1GomidD9aHwf",
  "key22": "5U5WKjRx5uxTcoiFKahUs7yYYDxp1aBzEUjsGQguZTPqnv53huPoD2aVsZcFPbaqjcc8zMysFPzxZzCndHTLBemz",
  "key23": "3wPTAfMhAf4WoqYq7BLP6HUn7BMe13PgMBDQYijz92sWkJidLjVvTrZQwBs5zbqxLHEdzuV9G86WxQtxU4q2ykj",
  "key24": "5h6MecQG5vM626CAkeNN5jzWyVqadwV5T6ao4TDvJFkFYGo76xArHaauyhaaLz9sSm2Vef8yuFcksokfUuJBzqr4",
  "key25": "8xs6tgLjwc1Hvuz6mtrsmCAMSfBbPVJhqFJ2h8RTAcmHi7wFuX3oGTgcb21pKw6cmeuQPEXoQx33pePtFovqH3A",
  "key26": "4gvZzmwYbHCT3ix3AkH8SK5VJqfvyQLJ8yVLaTipawpj1iTBvuu6FRzyVjnDndYGkx3n7eHKdMUxW2sHQQcRNhAx",
  "key27": "5DL9UJhK1AejHHHqZwRvnP2mWVirAmXdcWtvCP8VxX258w62pQvu7bt5NyVSt5zM9mUjWx8FdVEPg4w3QHrLjgtN",
  "key28": "31SuHjMKBBMp2k7ExxaSD4KkNhRQWeNn9mV28dbtmLMQB3TY6gkxneZg8a6xVcJYiyTJxtiePHbfRDAUQn9k49K2",
  "key29": "5c9aMRKnAFqBSHaSMTvfhMnzJCDnHe2u5KCLx9SSMfER7iMseqhpHhepRBPXBma93iQ3ja8mZccBYC4Ai2hTD1vj",
  "key30": "3NaJ5uar3ZKisNZ2FTs7pHjyR5cN5bf5n8SBQp2NJ7GsLpTGnqB1hYuaZzWqFX8UXfAvxcfwMywwZoJfChViwjsR",
  "key31": "5tv2mhdesZzQdnyo5SDh8Lfz4Xr3JRHTuuD6o9Sw9Yecr2nxu7jN3VQG5DuZPQ6SjBaRY78dstkiYfyuWFPdJJqC",
  "key32": "5SgsyGBr7B9dsbXGSP2gfvVDRoJN9QHQxsSYX3Ck75vFn2RCHHh1mUFS47MEeSNp6eKapBSXbhG7P6niTwBDUD3Y",
  "key33": "5N48V5ah5uPCtsWca7ddssncteTfQKfkdH3X8kK8AJBRs2wkWfkZ9Uk7JAXzsKMPWpzGunqyBaxYLXomnQ2Tq4rC",
  "key34": "2S4rBg3WZMWyirCWevof7RRgCT8e7dZ7NuF4d9JjPVwKjmYX62CYko5kXnjRwQ7kgSsUjuS1RxRMrJuANxrrXNJK",
  "key35": "LyF8vdtj53rs8u8jrjjbUNwgPcZdy1Sz3369QexMGgJt5RL2NiJueBfpbFQ4ueiHUHzpaQWd9Ydpxt1SextYmEf"
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
