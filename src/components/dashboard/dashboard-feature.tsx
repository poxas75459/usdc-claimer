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
    "PuUhMz49wsb5tBpM96hNHwiZMSTtjeuQAwwudAAdsSYERhLWsqnCf9mfbqGMA1YxphB7ykMr84YvpExZ3dav2bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zfq2kB5WQEe7k8oVHH7PiNsFkML82gkF5zEGtBYce6MYm95m5zyrK5d77VcxwkfriRSWrzRVcMasBwxidwiCwXn",
  "key1": "2k2h1qzm9WFA2x92RqL2NksmarZqaw2ve22wxScXGaKHv4yL5AqFwdGDEK6tLK1WZYhEpLuafd5RMeYfhCdKcLvi",
  "key2": "4n7QAA981aT6ZhLVcUyL9q39ZgKEJXA4xNMsY8w7xXoeUJFR4115kzH6AGnz1WPSe7JbcmZhD5VqftWFfjW39uwH",
  "key3": "4P1XbXT4UWjXAU9KQX8sXDyvatbDfCM8LnYcbDniTzA2KczXQ4Nfh6vNq5dvZQbJiMkJ9nJXV6KNZgJjYK24TWxU",
  "key4": "3H3sEjrs6g2fjvYPHTPKmDDXdLBrEtuMPmTA3omakqS5fvUDvAMfYAjA2KNmNqPMtvKmSGxsVXQCeo9yFUBvRAnt",
  "key5": "24PtkruuRhUbkz5EFyVV2ULNVG6eWAtYfg9DAuCU14DnUFwmzShp1XrXK3bLE5Y8vfie6gFqoNJeoLraQrYpw6Gc",
  "key6": "cJCW3WQWE3TQn5ZQdHvRWzofr8S3ToHThcjbsCdhfhPkgW2nTst9rSzYo4f58eNLtZSj1mytWLJhMsh9ruqL4Ht",
  "key7": "2aTupgPgdL3imZtnWKNNKNZ7gk1LTHidKHqc9novQyovA2oJmpP3dAJ6wJk1XnQooanddpveZwUrggcB4iMkmGgk",
  "key8": "3pHjoSQmjnE9xAdEd5AL6F344BAtvQ1YVfTF6QwSwmRPMGwTdsxhz1GPzQvFZLkfxRzv1HYqLsiNEt3gv3ofTznu",
  "key9": "NEkhBXHswDi6q9Gubq9fHKuBH5tbTEjo1Nj1Mgzpjx2fYEiLCDTAiwhNrsihWPZcFysZZby1ZEJWeu7U6pYfrww",
  "key10": "L4B6KR8PETMZS5JKJN5bq3p7AuVQQW2V9onyS61jnUimExsryWw6ow6zmCt74hXJo4omjYYUm927fxZNjApcvqE",
  "key11": "54NqWnv9FXeu3EaDSMmxeR1eNQYYSdXe9HZmcgC4bwcqGbyperFJieWUkFY4zv7FuWcWwNUCF8SWPevN7xwZQ62T",
  "key12": "uKUv1vR3Jz2777LTeMvQ3rKN85n3TmTuLBJFnvU9MWNNHo4KYFzFXG7dqmiW8MQMfxFxGFux7e4ZvKdNwHmMUcg",
  "key13": "5stmQwvsBUidCR2MJ8NjuunSM3AU1WUdmGBpJdWrQy7aZqTMpb5psCwiED9PvjVyrYWZsv35RLyBDuYjUUfX21j6",
  "key14": "4Jhubp3Y2d8Z5BbDd9VsSpghkq74YMHrKHvtL2P631gjUDVXdpkef9w69VXdbkU6gJpur7C89CdAoLrNf6sZt3wN",
  "key15": "4J1zq5UiSYNgcHfKTjamPzkyZwAdCgbukJXYa9gFVuGLsunoT3aB92s9zhozuAxVRrWzUHAiT8Gcwut177X2ve1c",
  "key16": "3CPNJwNoMxFFv25QXNnhZnRi5mZ8KbQsYcJgXRew4KjuHWyAYEMFqRXPVX5VXZnUc83BMztENF6Mzx6LSqdpsZrG",
  "key17": "eNVkegiohce3A6dwybxksJsYb5bePUt69qCJ7LvqfKSUCrd56avTgujFa2SxpHReFvMD3XnEvycZMDeb15X6Zr1",
  "key18": "2K1yycRg37fb6V5K9WsJdYByGZjfo8Sp1mVhEfhozp7s6mnwG1LfAviqaMvNEUqLBBPtftwnDAwvQLvgVTUTtqVL",
  "key19": "5wJwATUUsek2AofzsBosDv4v9pWBg7HarS2fy1GWpowTdLunv4rgRyjDeWnAVnP98UFRcbp2KEsLtdEm7MQGPpUS",
  "key20": "3fd2hm4X2ASoteyZ8kPzmNJNFdRuoiXstCs53ZnxxzKnMjwnXdTmechNe5S6x5GnqZo4LvDoPZa3LpDTSgCoy5dg",
  "key21": "5ZiYJGNX3AvV3y23pGney2Xnx6K5vS49HPkr9HJY5s53R5yx2GAB5s5uPMMPRc85G6QDuvkVgvV4aXTr8F2wZyBJ",
  "key22": "2zosbJmJUkdUZnb1fomUSYSjQ7YVA2Cpw93EZtqPUKTayzzUKhP4RuGyBReCwyKEyMHT6AzTxcgSZCQSutdPiEgG",
  "key23": "onPDzg5xV6CQtwHNuC86hSkcUmTd1kQfC6r41fAhS8nmqiK6TGSUL7tQY91kHZdx3nZPUbh8gSQ42uUwtkbeX5Z",
  "key24": "2hoE64DCi2nmhvywJM1RLtUXp825NfVVvr94b9hRFCkGxabrA2ySVvViyT75R4BwRRG8vSfxrUw4x2pRMsDGDwJJ",
  "key25": "ZE3m7mYekTWdDLKyr9RpPkHPRqdKA3XbKdjqDASixxi16pt3Y2b9yrQCsh2dcJ6dWprEz4rkyQkRr3utb61PgTE",
  "key26": "3Sv6Vs5DN84YXN8hyTGJqxhG6oF2NnTnKHwEWsNh7Hnq53s2HV2ebs7Scw1mYjpCeqogxbdVTbmMrDd5dFgVvQ6m",
  "key27": "L1xWy8MdDXNW6DWq9tS7SPuN4E7jJCSRrAqCmAXaLg56ssZFKe44VMtN6jBEiKUYnwKQfb1yqpXdyjEKMouD9Bn",
  "key28": "5G445L4jZLuEzTHMkcFPp5AqNAJFtxEy9VHaVJ3Ny9yGqEJdh8zbLp2QAUCQDuZUdGC2GXJGeCs9pkCd2bdzRu9h",
  "key29": "25TTxZucB2VhP8NCeaPQNxPQWuRafkGZw1z925vMwtFpkYwCq9SeNhXWtQgqLTvaTVcn4mqgZybextU4PFgUPgJv",
  "key30": "4DY1cUc173hxLK5gaUHGswBq8gwnv7JgQXfAAJ5WNYkY9HGCaZKESXmg95vpoNGS397w446nPmP5gXwHXGVCX7Ga",
  "key31": "44XuPcxVEujiKwvJJZHFdDXV4aAAa5u4wQkkoen9EnrxmEqwXroMb5emxgmKLbixxWCtdgsVcVZWez4yFFUfpZYm",
  "key32": "64QNNETVjqCySCeSKqnJaLmokzBdmqAnnCRTZhwJMHt7xCab2cVLLbqvoCRie3iF8ujmibNVaZt17bXakrESdB3g"
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
