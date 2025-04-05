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
    "45HKGp7V8KZev2cHpiJymAqSdVBqAmpD3PyuJCwu5wgeqPTZfc8vdKKk76hduSF1UE5J1kT744KMJNd942VXFy23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43PrpdR9Mc11YUegr6RiZmoxJLp6wLa64hEpyqE9bYhCkZLPR6qcSiU1srjv57W9xWZtBA4AMm8PCRTzHExTSGku",
  "key1": "ssooJPH2p16NPNvEjSawhC6Udwha7ri45ugBRQSyKGdcARCqgRuFrz4QL5iC3MC1R7LeZ1awRfJmYNBrJqKgFZm",
  "key2": "66MVbqHD73BmZ39brgrafEYRg7zAjtf4g2v2bUFaZcGvqDtGUhvruaTcadcFLC9qo1UYbxwmaHEhbgLxpEq2WeGz",
  "key3": "PCA1p3BCLeD5Ptof74cUQtnFT3yivrkaLVjpGXXdz8XuXjjE8iQtnNUhzVFZPiU8yuYdd7Q1aGh3eY3tVVpVhmu",
  "key4": "586HqEtzCfWe9MDpKJpntJLPJRfX6MXXCVgrkToaEwNxot2xzUupff7jBtG5tpgf3L9e1C2cpJEsHGALM7p3BQab",
  "key5": "5ANXtnYxUgsDdG3MuCxE4vrotxp1pJG3Dvews2DGVT6hqzqxgC2efX8L3P8Q58qmUS2LMp3QpzaecaQAcvRzSGPG",
  "key6": "33mgzQ9KW64isYC3xbfbzSAdCsRwvjFKHJnMDFPX9ACoMjuWvvQT7fdGkDNXoKeAy5BQqtMnmgWEXA2jBmYsQcys",
  "key7": "UEyM3jbXXda9TciZLQtwNxnY4Y4fvYofQuPYF9RSG7Tr6rzGFEoVxNYw53pYSW2tofvfyuo1thoy2vMutuqaKtH",
  "key8": "25SPvwk6xUijmTTKmpFaX16U7sQ5YAQgbgZxP9SKm2LhwQeGo3G5sLRxPGx9WU5zHuHvrczsVXQTDtUuk84csZ9i",
  "key9": "vxbtd5bWak58h17bfpME8fPJyr8Y4VJtNCMrxWRsirwF1ECUPg341CiTeMTL9YABG9HAXEg2saaZ2th9mdwDdtk",
  "key10": "5dF2nHjAr23WrxSCXzx7fqhY9xrhQvkeEcGFx5yLCh15LxhqjxbCCL9Zj5NbNdL5w8b3JKaRXoFvy7fvL2kxEVoZ",
  "key11": "TdcARHBKrcf9yv6G9TBWPKuESNxR2nNc31G71muPsSjvn8CMfPxVw2FJNAm3v7Be5cjSW954yZA8HypmBnAdHH5",
  "key12": "493xCNBVxrPAirRkmQ7EfCBpSXeyhGmebHgd75gytoYtKSm7i3A6MWhHWECDQonsi77etgDPVuQMJ9xk58G3AUq4",
  "key13": "3Jjf2g5ABXzbReuotzqW5eYTtbbkg1zPzwKvbiqpD157R8TmaDiPc7Kzo6g24TuzLVhdTeBBSLPLBLLymi2rSg7Y",
  "key14": "3teEoGFgTDa1SB6G4wMDaicEAzjGAGoY91AGyTqDT6WPQZvJ4nHw8Gay7J3iKy6acKcjGEAxiMbwTauCRGtaJ7KP",
  "key15": "3HFPes6w3Rtz8315Twkbx9FHvgFi8kxPq6CR2JVuki4AVCaPy9u84J3LUFQN5g1iiAXuwwDmiUaDHkTsXbv98DDp",
  "key16": "2ji5m21pLvu5dEQAMnH64VvzhXPcuWhbDQwh6HWgmHkie27aLkFChSp7d83x78MxhA55NyhiWpNkcUXRczJStYQh",
  "key17": "2urBj95ZhnYs9p3D265H1DCUp6MwqtXzFWrqFcWjSTt98KQcbLULvPbi5EXfmdipTPJZy5GzDf5tKtjf14ECEgeB",
  "key18": "4D8cZtMoSm8v8JpNQV48BGphfdcS8Qox1Xj8LEhaabGS7ZuWWkixMaXBVoDbJWPfpFP87MXLWdpNnpY2JicHToxM",
  "key19": "3byPgfyxsZpSQq8PpmP3AtWyTgC5sheR6ctHuxBC6DGrNZGkLqiguayCzuYhNYN5toqM9wDLtJ9n9DAX97rSKz4z",
  "key20": "NLkvyMwbpCtKGmj8bUxb3JcNrD4nUHBFr66nuLBa48Dw4iNUMHfNCKrDD8mFT5herKYvvRaBRqP3e1hdGXjiyfz",
  "key21": "3YcUz9cSr8ySbbPJ2ioMvbUDgU8PLf3igFnDcJLHs5pAAHYVD9jNmQTZRPUvv4Cn7Wn4iC786UyBdG4sRaTSenuV",
  "key22": "4Dp2DFdhDsehKFF2sjGLeXumVPZSGggdwkmptEZwsd9yge4dRnsXiN762Tx2RV3fy4vXoaAwpLhXdvmXf62zStbk",
  "key23": "31jzYy7UNREeCdAMGpjJhFxYXzpSib4trwir99f8z5WUqhmLNsyfMQZHqQeiXNeCXKYJMx911XsfU91ATEgmQuc3",
  "key24": "2SUmEtdwwrdVCcTuNeP73LzNSBxWkyJ4qTJupQq2qEbLBdNXAEGww5j7LAH3Wc9RuKHhUktvDxx8AUx6xST9vdAn",
  "key25": "2taqgo75FN5Yr6miz9Woo9pfPLwUxtb6b4k94aRcQz3KogCP8kLsrHTd1XYcw7mAEJRNQZrLKTxMUSjNwnTgtHgc",
  "key26": "XTirRp2Y98BmhQixLJtC1DqLqUTdQ4S3mumTnSoRB86pwyBAGbnYu2UjeFGP4wGtgYZdM1NM1GT5NrjpwwUecgw",
  "key27": "Uwz6h9AqYn5RY6J328K18oov851cLdTb11UE8YryEjzmZjrvoYC86ecMbwhVBrZqjb2vaYTxzhAbueM3M6RqGR2",
  "key28": "g9C7mcmw2jxYyfDM8mGBe3BdVa4iYhtCuQeKahoV4HdDXqgsUmxNcig4fkqM91pnGYNMD8VtR3UEh5NKMVHW7Hp",
  "key29": "BuaBnaL9oBxLCf71yhwrpK4vgeVToKTUcDm1tPH9UYZvLps9irj2Qgnkw32srgUppEQFDLSnKj6SsYN4rJSqZj2",
  "key30": "3gTCinN8GkjyCqsUCiq1QX5prew9PxU742AfXMLY4XGNMWXMRzUThFhCfuU7GUjE1czahgqSgZfy2hCYpuWkKNRH",
  "key31": "2JBieAr3cKM5NzHqoDjFTT2ebbT3mWERu6piJQc46u5HwqkhJbVxP3KLEkXf8Uivtj9RR8qUjZsr7SkWYudTroGy",
  "key32": "qm1dtTN2qfVzdqNzyU6bkUrt1bWnTsCxbCtTci2aHwzLKCY3pABXk4ssaZNLKP71ZvJywffcumTVWtmt3CGp4NJ",
  "key33": "61ZZC7H9B8DCL8iSPPVPVqQwPbSgT3J8seGjs7CR7BqbA3ftEP3fyEBTHFf3QY3NsrVxQDk5bGeLCdGem5BXuDQg",
  "key34": "3zjJWpoJjKi4v1gAKTdtFAe4UCXPZnZ9PaJTfX6T3DwW369HuKhKeXwjhuyRDhAJocxRj2ViMkPhtUMma7gYQwES",
  "key35": "2sFRj62Fdahf4eBo9WJAPSzx7N7Bbp7vQeU7iygcNV2PAAv57DR9SqbChEEFmsdRH7fgTPAv5sSDAqJFXDQbxE7j",
  "key36": "4ZugLAQRxpLgDj8BfUwGRAbJWGwHvpJaLXLmDxwRXodCKWnXU4C4JFNYXLpq9hHP7v3dvaKtTDJRKHTeMjK9jPJY",
  "key37": "5W4cfeuBbvm6v3NDaXsUizUKrBL2SongVY7FTvCZsjsSzZMcPcLzRfXYJ72RpPsVuKxTfbQ2KsDQfLS6krws7Z4U",
  "key38": "5LbJaDHSZ6y5nBa6tXE5rW5QrpPMGKLBFFVV9mkbb1PP4dd54CV2TYpKiiGdMzQ247XRaDJvTEwozNFvf6SdaGmx",
  "key39": "5cxn7SnzibntjYHUyEwdAJuNv4mMMRb1GaJFsyR6oN6BTxRh1Rd8wb131RAkkPBBbFycAnLfZx5YR6XChsaamEis",
  "key40": "4KF11hh3Ndpb76JZHf4icishp59EArneeqepQZgvuFAvPttyLCjprm8UC466XuX5ehs2KqwTLk8JMDfx7zDA18bG",
  "key41": "AMHmWV9oGj1vZHzmarPGbqyLWVvz5tznQr1BUnU1n7YdEoe4cuY3ccTPWhmSe9NgkyArK9vbZNDf16kauGXKTHy",
  "key42": "4hvQ7Nk2zga44Szr5LYrEQdgYxQGfuX1cDyi7PeAo8u1hKTVqzysH3FkKLuLezhnYZ52Lhm8Quoea75qoX65f73L",
  "key43": "21f3igjbLsWmjN9xNWTuHXemvtyvfaeb9MnQpAD7Rvgfa5BwZsgAkF5AvCNtQm5R41kDLtbxkvTEThVZn519tShj",
  "key44": "5mzWcqqof5vUjgS6v4kMs3moxjNWcuhf8PdvoS5pGHEyri9HaLG9b8NkLkRzSfyWCEguWzCYQyF11wdmhRcN6St5",
  "key45": "bbyTtSvTG7JGpRu9FMEZhqE5H9R9q5CXEah8oBqGUa67J2astu2ptDVeqVZXn6VHL1vBpv9BA6PTwWAZ82NwJ6Z",
  "key46": "FesJ5juvmDMzs15bXee1hfkwcK5tAvvnubFNn1Kv5mE7otnchBK52VtaDYfUTredSnwgrqccKuSD6oGneDreX69",
  "key47": "q9p1THYA2t9HbzQVSRBZDywz6pi823Jx3UdG4uh8EchQLZiybTBbRf1EGGh8ajH5Eaz6uHiZtKecWcWZnLN4wjK"
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
