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
    "2CA8m783qkotR1eXV1YsAvFRWtuiuoLUJUSLaeBs7dXjJZod7UU1fXwGPUtigA8ZpUDuR44ALXKyYWjN6RJtXAUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwSZ8z1GLZ2zpMXStbLMgyRq3K23HYbZf4uhmfaxaKLuwLvB43gYaAj5WhR7JESLhuxujKxrFjA2nPibnqexzqK",
  "key1": "57YC2pcTLPCF9gWEMT2b8FeP4s2dBV7WWqxuAmz6cKyZ1voKskFhZAZVvZB31UKEDWFDxo822VNh9qVoGyWg1vwj",
  "key2": "3GPCKGJmi5mdG2xQ5sxWb9hLYw4AinPVc25yWWYK7JTFhMZhHEHBuYneV5vHjzgFk3SZzWDFm8Z9BctBa1RNBLS5",
  "key3": "2yaASDB9d5ReuRPmGeGuTi33ZBipCMPiWoUU5TsaUZACsCkKAQZuniDgFAdxx3xRuiXoD4HPen79NUMkLRCL2LHT",
  "key4": "24G46aqsMZansxP8y2iu5HBX6sYJNkQN4KoWK2HSAYiKJMnUprpdYSbjPxiQYoFEevo78d2TacRbhuAQctfo5nMy",
  "key5": "59cwqE7fU6yx6rNxo9dbNW4X27PXQQbyAvi8bYEF7Nj4jZ44m8PAjpHDpAnPZLair9q7qRQZJFEcG1RV11A4tQqT",
  "key6": "3RmR6GJt6waXMDfvLrdvzCkpPAyqAaKzzt1X9tKP4YvBo5nQ8oM41NbJnqrqxst2qKWv4od94gb6tYgz9UnptQgR",
  "key7": "M6qFJCL18eHy8BuFd1uHHJMcscoM32bACN8Y3ZvC6WvqbuJWHHLULLbawuFDg6mwiMvu82gr4w9165m6Tzsewgv",
  "key8": "2z7bSxoVKKJpRsiHPwchLWppNinesqp2NTPLTYwTJvJLMLPJ5fcKJ4NYTRXGyR4ydpRomvjnNztbDXs5eGtatmci",
  "key9": "49cFssRWWUmRk41viPB82mmEkCSCoVT9PyDpQ9qDL9Acj2RSWwdRMjNQYDaALDPxbfCYYK7Sk6abSv4zsW1x6ev4",
  "key10": "bkZVZGvQg6giaJYmTzWER6YJiDeUvZZHzRAHWGfYvLzSGJvkgwi5uUBwuvczRcivGPnh2jcHzrjBh1c6KA29gka",
  "key11": "5v488PaxTJmUycawchtoF8J5FzEwWuaHx8eGh5sXoh7G4JtboKDHpvBLupEBED4d7bqjyJ7HWx3t1MDTK5KoTVQa",
  "key12": "4WR7r4juXH7aL998B3jwQ1K93FgeyuyjXbJLeuSqnhXu1ZWFXqSomzd4P6EJ5Nr81pwCBQSTzSnBR74arxdZncDj",
  "key13": "5XTHhTpJq46G8scuBcCdhXXvW5FJ1b9zR4c8LrHXh9TdV7ivtNav6bQMsHzHnqfJdCXdvJkQhu7kaz6NdAr5dJz7",
  "key14": "2W9tx6aFdKZxHrExS9V2jXzafdDyfFkg46ZrL292XrqdUake3DbuBREPNvfWaUzfF17RLpDwzx1An3C2e1ivUzn9",
  "key15": "Yn3Uis5wTNoNRbk2EGk1DQZLM8AvY9ZuATZ7Sg9g1iouXgtgvyH4AbkeWZc74J46SYNLrHvMbZfwnM5NPD5ywZe",
  "key16": "2uqg7edNgPzEKgL3VqK1uJfAiovw1iENSvmqnFD5miiAFBwwAjTXoZn4296bADc6WiB9iMfsNS5JhK4q8AsLa38v",
  "key17": "NDBHPW9wiAcrd9rT2y3c75BkCiM7H32Xnw3bdMt6UmZBrYuYBzA2yGimtopx3vRhtM1RERpVCvFCPusrjbQ4Xjs",
  "key18": "5uYyM19AEt9YNB296LoKqkj6R3CMjT95DD6WyAFJGuTok45AsoGyLBL25MsqUeLTYAcJnFLG3QrfedvMCcHuEgSs",
  "key19": "5zBH6hVXHAymiiJ7SWXUhmXqyJTuFbphK8gxZ3kC6ePVmrEFUcMEG7y4ehvcU6ELM3j3KhDt3VRB2vQFyT49aonb",
  "key20": "3v8ggSMk2dRyt3rSi8oSnUEAxGPMCcMNjnSxifky4XKGxEVyGZVGMdzPMk4v9BACmB422X1ByhMHQn1cfun8NVqD",
  "key21": "3BPHPfxBHN3tVhG29bPG3uBSypuXFyZ3ajCPsH2H6Sh3VPVDzkL7rG2VmxwZQZhZ5G3fqZrNUNnEX3KNFp3RM4Vj",
  "key22": "ajKEhUP82prC3VDGFvrMmJAFZrFRcGfBnbtrAgRNFwFRALWvybDC1JXwc2L22qJpbWF4bhLrxSCdSTw8tXULKDy",
  "key23": "5oSK7vRaJbrTXLhVYKP5PeAs9FVvf84UyKEpiqfXRqUpYtZMwe2TmxyD3QhLB6MpQ9dA4S8wpa7NVhtU53jfvoTN",
  "key24": "7wB4oCg26pSAbEUMCVVvidHDQDrj4rVaG6Qn92caAqqLBbHRFzvNWrqMz738s9kUUVWXt8tuNSX5Z27d4Cim9hg",
  "key25": "STaDMo5pDXj7rdvuxpon4UnEkfGb3aLCyonUz549mbh3visDWi4GaiPtQimtdVaaJErKXSkJQnUsdr6rheqsff2",
  "key26": "3ei595dyLxYDeiPXviKbxoiCwR969NMn7frXnhnyy9CqNaSMaW2aHrS59dcjhqhWfMG9pucQnPHGY2pRQYK5dGbw",
  "key27": "3nr57W6URjhL927j7zQdhdtCD72PRYiF2M2jWWtAwaLsW7qWA1J2L2wsjYo9eU2xwFQi3RkGFvuvgFdUUNTtvJTq",
  "key28": "nhJq5TTcERW946XXGJWSqMuyg9BZw9vr9rQQ7cADHoH6NhDFWWGbF2KSWv6UqEvCMFY6PCQ5EjJGjuNz1EdcUNa",
  "key29": "3sgcRgtfw3C82dDgz26vjZk735vzgZuvhBcrx7xayTvNjKooWhxvekm8PMHdGVeAxYzPWn7mo2QSx26n7uEaahJM",
  "key30": "DzDfQ6TXVNawanEqnuwm1DA4NfTuHoQA4xvJtRfHZJ2qYUZurVW72tu3zvHaCZFtSfJmhrxVCvrB7EYHj23jqor",
  "key31": "4MFhUxotos2rJLGCbQLkBTv9CtuEE9hTXKuVUfNaKpHKc673GyyaaNBCnrVai3U3W5927aUHEskTMgAUGf1hsbAY",
  "key32": "2wrud5naBskVyGKU8tHpKLPYj3Bq2tgBdLzenZDinhQyf5NWiHCHbjTMdiPSejCjdn7QQESrKTYQmPreRZT5hLan",
  "key33": "4AQBjtEAjeKHcc9tLD9tEqYF8Y5PM6J3Q9VVBLn2LLzHUMASr63TybUoboftE1ywWV1N4NtSzxRvgnZj9RgGAVRM",
  "key34": "3JSix5T7Nrt1TNt6YBmA1D44o9Ac7SszPvviHhsXaneoZP8x6Y9LCXnWcGMbYekCwoqoC5MSRti1qtg4gjFHJekY",
  "key35": "4voeckc47EkpEyha7crShdnAas1SAQ2oomZ7YEmmM1qKLHRyvdsr5uPXDPsta3eb56fee5A7MXJw6bvAhGU2U9cU",
  "key36": "5scbP72GpugN3vfEXC3eFwo5F8gEPDUJb156cPEjjN1K8GKV2SU8Y4DPbQkEcu3CcVit6BQVr4Wse54s7ea8QLwP",
  "key37": "5iy8ye6UsXKMH5ENvZATEvfZqbVXoiNYBBWwCXyD3dHX5zR6JUptUnUZxSC1LxdTfM7vA7PbajkcqLoMbCLkcydi",
  "key38": "4v2VF9XqLyYp7dvWhbNibruiVPdEXj39o886RLZcTPo1ztQ22tBrgPMMJipz2PDxcNJF3TKqXC52GLbDmqddtxw1",
  "key39": "5htgp2BhTgXX53fN1i65Lan1yFxRJKTdr94UwGdemwAo43pGPXbUbLpqqb31sdpsDxAmmb7FWDP2XsYcGHoFmBAt",
  "key40": "5vp4ZFDeyD6Ht2srzbUogX2j86kQXdj3Wga6FXTpLMjxzHmABQS5fMbfdm34kjeRpVc1d5QtxNt7Qy3DRvySS2kq",
  "key41": "3sZS2hBfGvQJqN4qH6jJQY8m2y5JpeYpUgF1GqC2YFSb1U7Vo2SnUJrZgjRWhTDfVCHxvmq4f2bJpT8jWydGP4Ec",
  "key42": "2TJpkVQwRDA29nthgpwbLAwLRarFJxPRgxNBLzcjjs6yYXrJbhY5cwePEwc616TCuEzEQr8J98Z82qHFTZZuoMVa",
  "key43": "3SiDbEWUKStwryfcb67xGFmDMYWMHZ3cFZzkkGKB1ZWVPKXEfmyodNJKETU6oa5193Eb1HnxtXHndbEo1r4VwhDz",
  "key44": "21uknGr33G3thDhYz1x1x93T2Db5EUDQc5RU6H87Vo4styXEXcqu6qwxLWtUMM4bSpcFUPL69ixZJ7hJTkiDXnJm",
  "key45": "pPcCSJxRf2U3uBsvLzbdwUUsidfYCfRWuHjU69KK59snWMrfpJzGG1JUZuSigsCof3jw8qKEhFCu557paLjpKSV",
  "key46": "5C1J8RUCsv9pDzEriKxH8PgTbQonj4Y45t6cUTjBU8JfSjPeG3kutD5PEP4w7d9KpRdjCbUdmkYERD9PSpEjcog1",
  "key47": "4mSXVkEZzstoUDaSWut73v185nhuvr8AKEBRyK1HVUg99UxYS6BSdNEidQzpJ1L7H8nKMj9RLrDMv98PuQ7G1XYs",
  "key48": "6p12scCaAdteGUYs7iujBXwBaLmkLdgW5DM2vFRcbzmXsgJDeYsEQMYV3S6MVN74U4jbtnVSVM3cUwKKzMH27td",
  "key49": "3VjoLmXD2YXU3on2RpqvFEBdvEwfrf1smh4M65Dd67ZiApfsc7X5iVFSek4TUwg9WzmNRz7XGfQj9Xpnv54A7oqv"
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
