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
    "5fKmbsWdTGkU931SuryEeqd2DHXrAZ1SoZQGmTekWXUpxWSn74HzbEf7GZ9EGu96KAMAuGFxq2nFxt7DjC9DtxEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwmXBPuGaZtLBGHQ8Gf4Aif5pYxdcZTqZsJJHH5e54J1nX8MCnsS5NyNqYxRcD1sARHVWQeCimJuqXGHgqEb8ic",
  "key1": "5s19rnCVehw1nKL491LtCvDpZdEESL3Mn6asJgkyVrpPLcVzBn8zphb6Syn8QXqQhWx2YxKW9WJtLJGdgPhYCJQa",
  "key2": "dX5JVSC2mMAfMMdAneWbMFRetmLY8MA8bgUPqapdseHrDCDmsqLnWaxWrYuQMUUkQVSxKrFrFUQNcg7Mx6V5Heu",
  "key3": "58nHozXJ43bmaYzvrqjJEpxJEBDTJsKvh46RmCV6JnedVsgDWKUXnUcUjJhw9DymbhjGpvrddiNu9kutEMKXnkxC",
  "key4": "3Hie2fqMDzwvWoHKxHmR828RePR2Xm34abD4EMfi5wu36gm46gzeemoNLF6ihLaeGPy7WgFoXfsbqAtccVdC9sCx",
  "key5": "2bF9t6tFrPwvgiRgKGNBUJRuMacNkTrWK7cmD6zY1sVmaNPFhveARmgsZaMbvcQJcgvk1xorPpeuvhaSZ13pjNB3",
  "key6": "46rahzhDiob5d17LvHLxrKCHTwGZgpaurjppgfybVtyMQEHpMNqMkEEGqUAzPJd4xJJGt1v2jxJP2iVgT8r6d4TS",
  "key7": "2RFxGYabXtgyVeRgyVxCRvS64eK6vrhDxxCZRrUyyUqbYN1SWyDHS4gUC4wnhqXYcUJnUReUaDMQEHMJdftXKJPf",
  "key8": "2P5z9ARieBncrRXABowkdVoQHoL5zcdcKym5LeBGr1MFeT6JafyLkYnPP1Z5M2sed2qJ9AyGVMgTxen9ZuCX1teP",
  "key9": "sRY9xi6DFLcitmSd8ivhVMD927AWJB1krWLRoA4wFrbj4SktG44tNzrLrfmZsGwoq6PBJWkdFpxAoa93EHBVmbm",
  "key10": "hW2uLFUmyAESV4iKdFU2rZdsKMhnTFi287vaPbkJN5Z8AsbquH75ezJEXX4uhZFbSYndMdodJrHZ26w273PNXLo",
  "key11": "5vtuMjcwLdyTKbBBHCR5EbbFimCJ6TRP1Sdvj6RcQ19BWiPnkUk8MySD6ubJmTr8zJfpYMj1MazjdTp99DM94UEC",
  "key12": "5UEthChHoos7sGP3m3P38WSv6Cicyhnkce1zaFcaQeaBheCWmJL6gytU1DuCX1od37Hw2abVp4yDaGqB9xKqWWpZ",
  "key13": "gSMZ1PoCFwUkTq2rW2fNe6P1V6pfyhpAaHhFjnieE1u9ZVZ68gKMsXn8ipnXF8ou4pWqvZ23T4bzwazdgfyts38",
  "key14": "bQS3Cr3RekGiaTyS2gN736VoLSDi8dPSi4JCjAFGoeGMoAU7TUFgazKhYSfKJ3hkFGCzTiQyqP2Q3hRYQY4Dacc",
  "key15": "29atuBxxgqEanQTjgBzam5Bi7dTA4ZhsnrypdqDLUbdGrWMEywWHmdZJNrMm4T1Qis8wYLFtZczCKqwrBUk9pz93",
  "key16": "442Rfeo4UaKhUpa32KtRXm1ewJLyyTRC5jjbNNYmWNWMA3oGdYb8bXW3KBRFzmtk3GmYmiphPYJ3tbW5e9WEEWbh",
  "key17": "3grTUSJVQzAY9fZcWuPjznPUGZ5M4mLdyaR1NMbaJSPETw1msQL8qyczSRf4EJp3ZCHx43HR9HiwGfAnfNkiJuto",
  "key18": "5Q2gebe2Hpa5Pee8siwXDPosZaLRniqFgJZVGR34bsskWteLBJjzmzYJ7V7AjwRBHZ7Bhkqoz4TGZdAKbj2mAZVR",
  "key19": "3ScLPhBNi5YGFc9cZDBNL7Jnmj58tuSJoaN4jzWxyRKoFRpsMvATEqSo5vi4Ejsd1ERqL5frA15d2C3JwK3UV29K",
  "key20": "25tVHUjLRYtUvxHeZr7ZX5TsHaZLbT28F5suBbGkK4uFhcZmkg1paneq5KRmaWbt97EP2zuWzD4yyrwixE1UecwM",
  "key21": "48YWDbWBiqQwJDiqhXQu7MhxvvuGJeRwFqzgTVEYgxxjU2yJET9qVxazzmKdTyjW4H56nqtQLq5HhNSE8AL3ihBe",
  "key22": "icM8dijfWJduTviMURfFoT8Gwgji8m66roDfJkYJ7gdD8K8vQERcrNjEGyqNWNGBV923Lv4PBzaY4NX1XTEVdij",
  "key23": "M2pF1qgY7q4bnpv2Mr1b964sgM3n4XiuYav5rbnbtimiwbqM8CJAj6UpgkaM1E42KGDuzn8PkjUwiwrPRkD6wR3",
  "key24": "4UgbagJfs5GwupsycnY9G6QXCjPwv1VALgoizaPaLgdBVXPVcyQvuBaxHfeqKe2jV9ipGEHZsGu5ap2YVZhgBcfV",
  "key25": "4xVvHKX2GumDyCk8gdzRSxADAjpXzkgHhx4ZmNEHt8JHs9cSGs7McEuXpuNbXy59F43vSL5dXM4XwgGF38hy2fPW",
  "key26": "yMh45q5sNivcZvQdhxDRWwx837BU5jVoNCAyGzGkquUeuTDFYGDt9JrpoAUe7GJwzxt53KeDSGgDQiN2qSoWzoR",
  "key27": "4LKG5BEU5WUKYEffGPAbLFaD9Xok8LFagLVovs8dGohrCTXagFSTyBeEQ1DNy4DyKE7YhZJG6JVGc4MeYtVdsdBK",
  "key28": "vjjXCoQaGZ5VjL4fT7UeXcw8a3kvkVP3j4Fk9EUE2YmPZkbSD5R3kaTxaimLbNCyAC2bh8gRX8QMrrd7j5jWRwb",
  "key29": "3QeSzsRj9GS2zegXmjGti3e16Bsr4wHWRfywUyfzK4WETqVGBUFwahU6KC3zsqkZdsX2fPopDe9GroAq3o29Sj5h",
  "key30": "eR3FVpdMoRB29mtv1QgKpdhcHpnGJnGXd3PH1e14DajTJnBGuR5d6tUE5e1AriHNh8xSfuyYNqAaya78crn5KnL",
  "key31": "He78eVvvSe5fuWjn9yMHp8XQm6jy8UbQH2HSvQ7bgKtU88MZkAamYNTjTU7prySqDL8nuqoKjdbuZB6n6rFWrCL",
  "key32": "4r9utA5SFS4Y2fwPKuU3DtTq3hWeJtmokiSNuKryzKQ6HBNhnZcsukgA1FkPDJY65fBH7A3Q5SVzHC65ch1G1cYY",
  "key33": "34TQKu9rWYmKgL7YAV9ytH3PxQLrS3jqfhHzxtk3GSvThUop9jZXqjFUPR4TCB4JwuvjVnCTfbjHvxZETg9ikK8P",
  "key34": "3QUUW1BiFc4Y9f69eCeEfrWnWux4B8etrxk35y5bZAKPpndLPCWpTaFyVk2MEi6dF9rimUGEMwQGtZG6G582SGd8",
  "key35": "5xAewPdNfvWsmeBLB2atPXWy2zW1LwNjudY8kmVDG7Zgxy3jX7mGJnovaGB6zyuoUzWn27JMuSzpJMhxn66yX4zW"
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
