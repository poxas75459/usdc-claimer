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
    "451VZj4HYApw9rhVtmBB2LSHeiFU7ZG3c4srWGt61FnkRjUmzZv13dKA5dvRnFbf1ErHv2yrVkRTXbhaMDDc5yKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BaoGdbBBeefF3CZ2ZcXEGpxQaM5TMd4ZfaXJnZz9W2EwrWiviX9hA7ndMMpTrDvZTeowrqPyXEfimSVcugVzqR",
  "key1": "6cHjMEHFeY6F4BzmTJizvgyuqY8Y5AZSWVSfbRPTAufro8FtPFkJYGtz8M1oMEzDN2rxSDwTEv15ungfybCRBZq",
  "key2": "Q6iwS7dCRdiYPjdnWFQT5rcqaDKecWUz8GWFataBTmk2TKeD7PkaRUtBNBMGxsVBbABMud4HNPNdWoZfbenBiBb",
  "key3": "3hQw2EEGX1dWBwszKmAbgViDzh4cixZZSXu5ZRCXQqd2kxDgEXQ3x3Jb1RTSCLu4n7G95A4n94UDnLdKs9hbeqWz",
  "key4": "5M9gv9VkWEbShVXJKwjdGqMQEhbVFpMTti2yHNgmJhyCd4K4yEnWnK7o9YXUCbmx9cHNF7a9huPJotz5wPTZXxM7",
  "key5": "zrKvspB4etLZ8ZVpUwNz2viEBPBoctUQi95wtk6RNo5mC8xgWnV8Md4iGXuqy5ToHz57wRyrcdjiokCZD6HCtwc",
  "key6": "3VawELedbuZ9boo1QZAgdMcPGshiD4etD87mUsmsuNy91csZxx1hjTahZrmQcG6iFPG1ZCTTJHvrCyZozWJYTXbD",
  "key7": "fxLihw8uUfka2DpJZ9j5yn4fuuDk3KFYymFnUHhDusiJas8qSUoDxgNao3zVqZzRcDaKWxBzDYHqQwVxrFu1RHr",
  "key8": "5x19yKnW5qikoxWWczkCa1JA17zW1g39VhYBanXk13wDryj1oMn24f2FzxeJKGTNMSEppwWRYAApPJnfBbhvrExk",
  "key9": "5CwbCskVXy9cc1LBNjnFcP9rBqTdHidpoD8JRMPL78Hr9i69nCXRf1J8Q7T3Z1tetxRPDSSpccJSuLWUzuBcMadf",
  "key10": "3j5DTWs3HhxKJPDXvS6xmufHigmJUniVckHiu4gii59ieN2vJe6wKCH6bv7ebfuoZF8cPxuEyXGcnaDeVBqCgwTC",
  "key11": "4u2zShG7xeeH9Eqb9YLmVcfDrfw27LJpuUGtf777Cg6XHsCvWEarC7Ky6U6Mm5c49tiG4Cb78HYYvkAibriPUeEB",
  "key12": "2Fk3hHW3v7JFTFPjr9aupE6Las3aNpUCQkMrdUogxXW1vjoYHcDBTtmrETG6wf8AhPSQqx1B6XGWx2utvf86sgBB",
  "key13": "4js6gPTqsd2mGMrgmnkqhn34nAhXs71nb6XwVbKHgthvs5wtdPLYwugCoEUR3bcaGhC4J6Bxzhh7gpYAJXnupTL2",
  "key14": "65EhkkgVS6RwEXN4fsLPd4ZeHrqDEjQjvtD1REQ1pSQxSB5rgVQvA8cQiY2kse2qNx3B8brKKmkUf3fE58ifGadS",
  "key15": "2QtT22g8UcuJ2Pn4wu817nHUg9Y4J5rb7YHxpniiX5jz8QzYsVKEoTXQoSLVTUoHkp3GFAoE7syaeN3tLAMnaEJV",
  "key16": "AyDkhCvBHHqB9C6vEcmpeCD7USZNJBzVANTvFsxwoMVswoJ4NBjMKDW6SDe6LwMMxYd24hho4FcmBk8AD361Umk",
  "key17": "5FNpKL1Cgx9U8zmkZoCkGTomeGWtQV7tqv351GxCPiYs6eirsrJygxUBrmkw9RFCcd6g1ZeP5r3LAz1CYLybnxWB",
  "key18": "3Ex5fVohAEiSkJUKTeivH2SibMZi8bBMHBGVWLttXAmbfXAUSFrFKQgaadomonrbipKeJX8f3hGfuLVQjwbkf5eP",
  "key19": "gTzYjcnracJQsLa9pU86AcPuJzegzSoiDLXgM9Ju7uWxnXCc5UGZ1d3ZW8NtZf5WDGz7zcrT2J4phiJe2gzD32B",
  "key20": "PTjDMt8td6oxHT2Rgm9Y65rbTdUyB3jSK4Cn3JK3vmiRzn5w1wVjdRe4YT9muSadU5NfzE5Bu8kBQKdgbFmgdK1",
  "key21": "4CXzTgrwB6QPJpahqRifaB2qVptGDBtJJcBBf4Y3ypeyx8oTKXsACC6F51WFuxfJyEjDjLkPaXPurE5GQgzPRYCB",
  "key22": "4AMJvgaVJySXL7JGLCUpgPeMJyodEgCMyXgqNAFSYbbxptw87uJx9bKMwkhPvNweSb5aGZHVTsidiaL3zMvSNtmr",
  "key23": "4XJhvMwfnRWD8XSp6UYjeoftCutr2KKcUKCwyiB1veQUvSJR1rik2Q5vLevysi8efFEfFbJTkxbTb8557CEEMHvg",
  "key24": "2dnkuqQ2USdySJWJbE42Bgic5RELGvUb6ht73LrDYrT15Fc3WvquLW7udB9Qtkwj5tc3VFTvxJaJTVpEZ2jHZTyi",
  "key25": "2nkX9Lxu9duL1rhKC7iB4c7wqUhPhY1BEokYQxs5G6ehNdhmepzYwF9VgaCqrVPZ2cWY58PceDj5p7VphdKEzhVP",
  "key26": "5GPoMaGD6pctxQcwxGT3D4NjC2bdRudVADG7agfL68goDNN2p2cdv1EpgEb59kUc6QdaSHoByuxuk7xq7wTLZZ8b",
  "key27": "3VkygKzh5en6bGdEeXuZ1GhhYtGrwE4788v1ThuP3UTQEL8kWxDKE8W1TNxiMnYgni7Q4NDx1nmZE6ckf3TN6GE5",
  "key28": "4wJrXirsUN2y6QUPipVEBqHk4Qm5Pq2k2w4LcMTCi3mvGKxAQbHrDNVTJavxDPzbZLqJURPaqyrTM2X6BWCctaMR",
  "key29": "xfnzLcNMBixPYfAkniQsUDAn5TZrppnJjdY8a7968DFeCSwC1dT6qbMx1unQoj5vUMSETgqQraqHnFX5svofriJ",
  "key30": "63QtYdiAyM62hbQEUVcKoJBUd1Fzkm1nejELzBgUsi3Hh4ikEUsjkvKMiwB5gpRk3rSvTARsSQTFmjfEvDYNt97R",
  "key31": "krSJ2E66i1Ne1yvpDS98LKtJ2roTSqrLmPmcaXEts6o9g4tPvAbc2fbUdZFCBhRtHTAaSrkx8WLdF5zUxtTbRzF",
  "key32": "5QPgF44KtDVZ1swevuGTzQ3iKPcG6wNdKkRN3zn7BkBUjVeQFXLE6Ye6xFiphyTaYtAFZsVnwNHEEaY6D1SCUmMs",
  "key33": "3HcBBKKC5NpDsRgp8AP5FeZgTFs42sFTahciDz3cUfuxTFSMWB1cXf8bdBvL7YsxJ1bNc5iVJPmj6GhgiqtMdzXb",
  "key34": "3phWRcBCYEoXCKenrHCcUw4dQgephfcUXf5auXFzdcych6eCGRcYpW7Nxr6nfEyqphvkKs32stvi8NZm3hKUkEVi",
  "key35": "46FnQsEBYjaTZFqxev6Zdqw2Cp49mTo7rr5px98EJcPKNm6cigt1dKLLj2TJmFwfAnEbQ4gctnHVXDshgmMgPFCh",
  "key36": "ywiqwqcguuuRbRdD21fkJQdq7RfKMg9PPu2Cqr6MRLboRHYjRrUZttdsLXMoLhWjSQFCmhjAHiL74tXRzJ2awch",
  "key37": "4w5xf7MsZUAW3fi3B9zCTX9MYrARaWctwFJNfgzeMJUoXH2H4FpHLj7UZBvfxVZoqtveDTjSep3wUXFLrkoksdgc",
  "key38": "52Trkg4r41RzZCGFnojovTUE6kSySpsNbxPmFd181zuNMihg5REkL5tnq8YA5cQfUCFRXQo76ACaHJ5EpxqH5W2k"
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
