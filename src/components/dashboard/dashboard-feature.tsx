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
    "2wJExkhJwmLpYKbADPopv7FR6KEbFjqv52ieBV4mXJTaoLrcwRVqqUa9hYNksGo4yM1tUGpRFHghUxUv3LRB8VwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UP6oP5Tz8jEQPhEgTb3d3ExZcRUtvh8cjaDKvmpzjBMyLtUY3tqZeje58DcrAx7GXeciHwcyVqiCTmFMH5qaDQr",
  "key1": "MgTvcLdre1ncqj8GoTYPPJXG7FgGoGhgfumhmmn94q8eMuMNGTNzKXR6mpK6y7Gwm5BLJ2CMbdUkqeiWUVYynio",
  "key2": "2nixUwFq2ke1zPpesE2NuYgu72GJZLaQgwLXwJLD23umMdW4LDqk55PTaREcYtt8v1QP4T8b853i886s3V9wNByr",
  "key3": "3EHXvFv95myLTgrzzHUv7RHQmBrWYDfHdRqn3viL3BaxVD8BuP1fUt64tEmbxVXN3PA96DCRUSuzLs8NdE8xdZdn",
  "key4": "3GAFqPVR7N657gm8kwa4zT8CukdEVedqzWrUAkq1scrwGRfV9XfpnDs9aKL1Dqv5Pubx1aMJXGhUweGSqEXDAUmr",
  "key5": "4t81JchVYGxYFSy6xrok1LBsM6GaYCaEHU6aKAzumJrw6JyuJc3Wmuere9nJkbephA8mi2Muj3L9nZwWTiNUgzk9",
  "key6": "2v5p5eGxLBi4Z53F9jKp3SNEoZsucs53wVT143WC73NTaS5jsDdxA1Hiyf6bhWhHzt1cCVeXKaobMyqpsC4Bme7G",
  "key7": "G14YL3jYSYt4A1YhFzECiJcF4q1U8RF3tNKLpmvvA1VNmcpLs19oaSzURHGSqQ1AsZzdVcn6JqjKWpagJtQQ2VX",
  "key8": "Aj6r3Y2F2eg7YPBRuvUeXbhcX3MkFkB1Jm3AVDpSU13saeZcCWgMjf3zp6QQJgXUKVHkdQbVz3RS1jUmREp5cDo",
  "key9": "5Teq5rTZHkTVkbQntsVgyBu3nxfmRN9xNxHuUPM2xWunaiHmkagi5CQmZVVhmBHXox6y3XamZXFTr6sXu4mNrWkX",
  "key10": "2SKuoGcyu4GUNuZb6iNyW5AuPUWs9NTVs314X2MXq8BJ2rZzTQ8Ss8psmzd6dkxB2UcQtPZA56kmnrvG1aUk6d5b",
  "key11": "3gQBiXicQDWfFUnSXq94B8eueh98TdmdPPwUPKXtf7BYNADDWbKzJwzyqKXPX3QrK28U15KzaTPNKWqebsc3vVPg",
  "key12": "3RaJ6VqaoRgVV2zDSqHKffBSkooZVtRVDh2L3XBmSGviUPzHMucAbrKdkPUqdtS9s3hkWELNYAJW6vTG1eZVKwwQ",
  "key13": "5reCQs4uzzEnuGnDopmnRNHzvjUJGpmjU81yVNsdbvQPX2N3V76FYxJ3tzDYQ8PH6VhAcafMyRXKuNZT2jLZEVuL",
  "key14": "9EYSqDMCgqNLDcRsTgUXWnuWGJgcaPHuHGWSi8vwBD5CjkEJSWzxgMuwtAfbpaJfEokQ6M9x1bqYixzUgYJEeqh",
  "key15": "KoKyTFbon5TwXx2ADZZQR2RuKSd33QCduqb3hZKvUM78GUSBVSSnxdH9FDs81Xw4fP3z9QTngcJHqBAHZyFpLJ1",
  "key16": "AU4BgEAnqBw3wGEjb81xpFrorq91AHpeUsbfGFL6F3NH7a8vycGopQ51buc3VNkZcS9WP948rWthQeVhHvjmDZK",
  "key17": "2FJXtXNweugRn1nUFexGLaPEFW1QRDzXbhsi5ykeTiZ1gE1aYdhLDK5xjw7zWJ2vGdM3sS9iwZxsQ4qVfyxYbBJc",
  "key18": "raBV3kfmmwwcBLukFqL2Gw9Hd3evC4HnxTXiAq3LGmXVMdFWyiDKyykTFx4mcPiUGp8PsdsXJ9S2UMJCBj9WNRe",
  "key19": "2BUTbuKt4y7ysFQKhzwfeMrHTCBs8tCBK4VAkn27Rf52qcsTdiuW8fGCM7rYKU8G7JEST9BZFsmUiAq6oR2sVChL",
  "key20": "54mWG83RD4cSpFEJnAGcRa43oEgpBDEVjwt5Xjjqv5bC8wC92K6eedbWNK1e3J7RXFWgLcwVCRKVp7SeTUaMTNhD",
  "key21": "5LoPk2ecyWzEXJarysvCmKaz5SNjQ8pqXqyku3bGbvKwH47pYjHa7oUKs8p4JndTMMqQs1vUtYeXS77JnFjSYCVh",
  "key22": "2PqkJ458RL4yyFM2cJa7X4PDqGCP4gry5fdWMjdaqZ9muosEMYjCchdZJGqvw6TmfxxKLMcnwH5D1ztsj6wAM1wd",
  "key23": "241x7wieeAhHZyUWocDUff9v2v393mMR1NKiWXg8eq6ZYxbNs1bGLkYaRCNsJ86Yg7jF48jc1aJtaWSKiqdr9pvz",
  "key24": "49UCUCXofAqPFyDZBfM3h4Aa7aUKQVCsrcyzLbt1q28oSF3YsMSkkUQLWXqeJWxyhiU7yhjipRPuSjLYsH4vYxUK",
  "key25": "2dCqSQ4f4eq152BjH2n4AskSTUZu2z4a3H5tzjB8t7m4NjpFp38WYz3wNVccNeHk4uzJ38Rhw3VWLJvEtRLFsQGx",
  "key26": "mn9Ly4uazy4tUCWPBnac8nvJfxLfNPmegJ46bNKE9rFTwGfrMFmju8vcGreZpzg6vuq8d4q1j7ZxeyJCRuPDKnt",
  "key27": "3EwEEpf4bz8v9LubyGUmTQxjcbQLEwGDcdLUWKta1mnvySMcEw4rKCyvX5H1YDKTRKTKEATAJmkRfXUHLu45bqAn",
  "key28": "2wy1ZCpm5ckg96uqKRHt4NEgKSAVWi35F87jtbmwgfA6VtVPFmcuuZBCxrcEc8ykaUkt6RD71NjW1wk6Tg4GsrGs",
  "key29": "BXuAyfmKb3hnjHxGUuZFW36V7BZb81UPViBHPdf7T8HjBkChX7GePoTdb3vFZ8qdtRnk6DsBwBpMtfmPDidqr2q",
  "key30": "5BiZsNcW3s5eJFTg1AvVatYUsh1kPRGjDKe19Ehn17oqHgKc9xJJKwsAUdM4VFHR7vY77ZUKxp96RqEhkqxaYHwD",
  "key31": "5wu4mhwWPpsXPYshgNxWDqi3PW7iJJJyMz1fziT3L77g64AxdZsgxny6eKTemuARVMD9otHVmtoLBCDAQosvDsHz",
  "key32": "QncyEhtnHTzXRZv4XuQaLB8xa4F6ybTgDqeo7aTShVps71t9jeW1qLGCyAkgKkVhsnqRdx4L95i1y8Gh8mJcVCQ",
  "key33": "2ayx3pJtLAku2Vxj6QbcZ3RRmNAsJzVuJ2X5Lh1GwmgzatwGuXz3ux6RiBNR5ZpZnjC4ydXbnaVwhTYhmJs5Znkv",
  "key34": "5QEbcCYhXz9UC4Cvj77etGcP13pqTzfGtjCHW7dJ65D7PBa7wsowgwDForF2ik3gGsi1t2Pu8iH8dcSf3qwZXxTd",
  "key35": "2TBkHwpzTzpdamkwvJtRcRCZpcMZRDhezRBF5gzedmXzotBS6RgLQxRVQZFgJPyeAsy3UNq9RmiPi3cgCZrgXf6s",
  "key36": "4XMkx2SMzXhqYEBFi98nPF3FhSYnbdRy4PDDRkvySUffNybE8DFQERKFvJdywc3QgqP45vQuenz2Quyeb3rzB3cH",
  "key37": "5f4bdKEckXUvN8LDoaBqHV1M9Frd9jxtP5uLphVNyMkvqZhkjD1FhQXhjFSuW3NLKrjDHdgX9RFSsBn4JKuCSSyx",
  "key38": "5qDvmVwN5NeHoK9VRmCvNirhFDp4chvtj5T8FCaqtYbGodDA1rH43xVQzVxSkXAjJF6osCDRbH3AnGsPYcakLSHy",
  "key39": "2HjS8zaL3NB7dShgtAtoRmo9AQgehrQhtBg5bKZ1nGjcNY9rnokAWExRfivHs5NML4P8AJ8T9XUZxd2tq5pPeMHR",
  "key40": "4A4m48tRzni5epUK3DiB47znbrLunQc2taxPnwKLy1NaV7f1vyxh1HJuNBzNdCgHxksdLZEVzM9fKeskTxVNA91z",
  "key41": "2FNVYqJ3rYhfuqhRLUASh2r1ztNFZe1x2MsP8doLQQbDXpeTyzsRL3Khqcr68DLfqQcnuSKQdgaBgK9r2FYJRofM",
  "key42": "oZBjySLSsJBhXFdtdqYwHfvM43WaZEoQBX7xNDvgSAhL9CyynuuqNFW1UcxCu7Qt4peq8CrirQAtZTPEBphRaZq",
  "key43": "4DMgkQRrCm1vNEu2qVaEjYgw3pwZbVqrSCGrzgSVSLJhEXwGoeUeNL2ZGV8RWhD16BrRczYTwmsFVCXAUuerCRzA",
  "key44": "21Gk3vvTqX1u34zsiVEJ5iWzPLYxkDTqfR7eR5hxUBhsgpXmKwmEV68uV8uwxbpgCVogXmLuxpn7qvHo1k4qdUwa",
  "key45": "34q6oMXAud2JATcJPmLxzGjxxrQrdYeRUUqu5avHsQ2iNie8TeSL4XYpu7wS2JCBkVHxoJS6o6vZKK4MEcr3JNUL",
  "key46": "LVwhYmAJg3jkmYvotB4tc662pnCtXH73HSNaM6dHyJj1hunMy19BN7sGRxSuG4snJDsw6QgV18DP9zMG1D6MbAD",
  "key47": "4mvPmXhX5KRpS6itTsQYWtj86NdkgNohzJbXNMwV7RTwhZD6YMRYSzmnHhbuJ2XAa8TWpggP2xtv3wuKzRzKgg9K",
  "key48": "3j3ws4S9XegoYSPNEfWQdAdRPrk3UA3vYjY6KcwYghVYexuhAXToyCYeSt6sZX2pgcUQaoge98WYKD7BLwFzvxyA"
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
