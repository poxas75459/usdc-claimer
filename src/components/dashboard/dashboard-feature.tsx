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
    "4VPemWSKDtEPbB83h8zJton9JoMRVKwKLSeSZpLmYE3ZLRjKCCwgRwPkT7RXgMbibqkqpuiS37cqR9MaVdANGLL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ThA4aV2b28cZQUUEvgxjSoewLZyPD6HmjFWn6LkQpujvfbHxvkZutzJoYZwQUwAMDz9MW65Gb1jZxMpQchCP6pa",
  "key1": "2xNrMYjhB1rGWhA5mqboYvenyjyRMERjxyo8qbQGPLdqRSr9DbZpiB17Q8wFLAPe8ZYYZrq5pHpqM4QSQbAN9yGW",
  "key2": "2WTru2MG4e2UkSfeAozLoarfqA52E2Pfhy4VzTurDWFGQKKhwPs4TX3WgZTRiDsnU1z3LnpYdC2oezLQmu7gN7Xz",
  "key3": "3mzsF7ZgLpXLehMMmfvBPPSEAwvTve7bXZmuqZbeimVcZCNGHgU2Jsw3NmT4WyS3v4CS4Fz5HiUYSC5D251sEjkh",
  "key4": "3Bgaf13qmz6odr7jfWnQotyVggE5jwXK49oEq4jTDjpB7haompWqc8aJuuAgrZp43RnGFzqFAxodeQSBBVHHngDP",
  "key5": "5ZwPTTuAhftxUqPi4DkM5LBGAErtUbVEpFFdM1J1RqG8S6SGKWiEG7c5eGyu2XJq7XfRSZFWWonMavJE8Bq14UD5",
  "key6": "5safxSEauDmhdWMnZSHL2xuWWdxWGr8paAK4STU9w5UF13cDwezrgfeMbcz7hLm5Hf6yQfeWVz9Kw2mcU6zCrruK",
  "key7": "41bRLNFSXVuWiCAfYyQwsEzuzce7PkzdFzKSL6aHQDrXD1vPeMiXo5cDM6L5TYcRWYYubnrEJRhorQRs1qF56Ygg",
  "key8": "NPFoEkvs7bySJ84iKCjDNrNmgrTihFcAZcWTYJYWE4ZbpdBKxmoqHm6ZXvt7RbcgZfmHsFnBgnAooFrhCY2ucUG",
  "key9": "3eusjy7k35y4wLGM24MCtoQpSDZEuhvrYxzgFtMMMhh2U1cCfVhVjkfuRv8FYXkfoM7j7BxmL8NHkmnCrD1JkwZ8",
  "key10": "5aznFZq1cWMhTN8qJBKAzvMNoHs9YZE5MATPb7s6kEWSoBqPfmxSK9uLSJDrct4ggMgJvmLpxu67wtPs8Mun4wc3",
  "key11": "3bfYcMqcDGxUXiEPRpur6N8sZzfH8BnHBnUTKSH2oRsdSpbXvNCNPtHawjMCX1KAzTozr4Mchzs7Z4fccSd3wDzq",
  "key12": "3Ao8EShg3Wj4WaKKfjkgYTpPkgyTNNeQ1PGiaBqWasqyCFHYxr46ahEtKBoj1saxLVSs7egTrVyPptfrUkkeaZwJ",
  "key13": "4nEtMafn8bYngF1ao1vXNS86PXFJa8HfgRBhPYPEg64MVfxdrb45wfac9MXGEaGyVBJYs9yq67WVA29NZKY1e5xp",
  "key14": "4tZNdx3pcdMs8q2wdDkoYbCk5bYCUSweRKFXheADmRUn3PkDaxLX11pS19Z8PR3TiyNMsZTDUf9GQRodMJHY4pYP",
  "key15": "5eyRhP5E7nbMKiFrzXqiN3TofJMfUku834rsnhczHac7iZHWVw4g1VVp3pxYU8vEgpuiv4ZS7a9koBWx863em3bo",
  "key16": "2SGLGyCzKvaqrkJYHun1ZUfF19Z69YqAnP5WKbrMr9sjE6TskD6EzLb4dNdN5uBR2nWRtwW5Z1MHpsqLBe9kE8gU",
  "key17": "SGYPvbvFs31P88fyfmrp3EbwySKDfopicYDt87FfUWQM8s5jAjqm9UR8rQsqktDofuUVQggcEjpPWvDN1zY7PKg",
  "key18": "4nZjbXTKGurCshpMmqU3xkNHPShLURYjJQuFSPjaWFbvK7sfxff8XRqQHL33nsK7NykVcYM5usY7yTi17v5B2NYp",
  "key19": "66MaQZNUWt3Ny9Fc7vgeZADdHEzwvWBcA52NZho9aL7Z7yfgjVT8dbXgGLtER7r1FCf8ipRcEA5oZcfBAfyu61Wd",
  "key20": "24ubqEwrzNMJnfWTC9W4vgzEMS2QegpZNvE5PJBNCMEB2SLv3sobVHysj4HML7xtjcnJHhM2bXigyEUcAWjqoARh",
  "key21": "3JYatopxh7s4p5zNBRN3cJc3K8wuXwRpeNCDGogJ7gJYfCqHfmdSzT4E2Pc3JdEUpaQtPN95PHDgwXqkFFnoBEAy",
  "key22": "2BDoZevTgfV8SYWWVFQKEqow4a2gzzmbBFsabGGoMMB1jAcPHEFLnDmr1hEnQRz5iQrRHVryuJT2nbeKAW3cg4Lw",
  "key23": "2sBDZ6WZ8XEkxJWZB7SSe6JaKF71GrYAs6sTq4136yafarVdiAx6pkXvbCvMKBEinGNjzZwRfxNJtRX3TLyAU93D",
  "key24": "61YsSH8YWoLASVRnFctdmmJccncJWs3JecLZ6kkHAAbyFCnnPMFdX2XJhyvDNAFWgs3nMuq4D4AU4AWhQw64XMdb",
  "key25": "21mbCSVbhtB4RXaT7BxQGR8a5AKwyDEVaTqbRFxmiTwAQtrAYNsmZdKLyW5V3Zv5xLbVtXzbdhiVQyoW23fQaSjB",
  "key26": "5HoEsrw5Gk8JfXpyLEwLwzqM27WUdsz2c79iHsDAsHfdUpgcTco9wLdf9dcqbVUEw9X2GKXG7XZrcDaPcNs1RZof",
  "key27": "277WRnKpQLBKzdesnuaj9YxPNcfHWbVGkD37fyoPB1MhqEySihCthGL4rAK65QSTDVGixugyfEebnwtYEQp4HEK8",
  "key28": "3TR8XFyjTx7vae5FNZpgt2R5irj7kVvTKoFURLSNeHXqSDNxth24SsCqEVqpbe74CUs6MQQARW5qUzjAE5XRHZju",
  "key29": "33Mbh78xK9LLzpr2RpEzZb5cnHnkHkXcvsmkQXymTDkZc6es6EVuqpEzyymCeZJ7e2VhpJZhpunbrbAMiXP5NzR5",
  "key30": "4bVRxnMTNNdKyXp2zxUFR6e9RtkKYaF5F7VoWWqFHnRXYMfuPavLyJoGeqkRKkHfDx6E5h7c2WaipvmwQX3Jp9gh",
  "key31": "4zvnyHTFqCisppSeH9jb9fwvFJDZdHUWjPuq6BiHLKA4pwZBLwfK39Cjr9SQoL9xxXsQFaqQBacJhpiH61b1gget",
  "key32": "4yrx2qQbaUzaZr84u6gBpAtbf5uyChLLXtYiMyvfaBPpoyjEcykEfKFMUZw6zLkLCxR9VFJMUtEGqemrAQDo4DGj",
  "key33": "g52U6kKo1RPTHn3JwrSBtS5f8kPVj85fd62LiSkoV1dEVzCBtyoEeZpfmjCGKKJHtxs7qvwcn7BRAWVUpjA5oW5",
  "key34": "58QgsRmJmtPimJKuc5xEdwHwNLLBUgrAEZ1pBQZiHG45yzi5jMtngcfUY65ufcSuPWrdDhNDnAQhhNiJbw3bGC9m",
  "key35": "4Fn8H3KaGNhZrQXmBMWPTnKokB2ZWGKdqioA7BQ98GTRbEn8dSVP5eSQvB1FHUw8pHyNRhk29NJxmunyhTTXmetc",
  "key36": "2jUczZjuAscYXp1F8unjCTXPpickdjdT9pm7z1KEGo6Qq5YMKtYyfRfw2x436Lh9BFFQ91Qsa4m4f8n3oFd3wSKd"
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
