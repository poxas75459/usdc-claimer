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
    "3s6u8bJtyv9mkVuMDi5pa4Rvu1n1fCD1BieH4QEeG98mke2GYBP7oLTaUP8vScvZQVafrs9gRuDM8UGpE4pzjH3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54n5R7sLYW6XaBXcimMMGn4GAB2Nqgtayq3yrzyQsHm2ZBX8XTcSQT7VjsRejQpbpu1QQAC9F6kBzjavhYdiYKaM",
  "key1": "4auJHEhKrrxyTzUqvH1hTgQcuqjeDkPMH9tfKTW4sgh2qnBaLzFrNEppHFthrV7hktz3Dqpq1ynsHWwgnpiXWwBe",
  "key2": "3BEL4EWrVoRtCjBKjnw7rLKFyXQSSR59Vh8nFbwQRsHK87aKtMw6eYoYqKcWJZwvc5fxx4E8mbq8gTtAWZzKEE1B",
  "key3": "5mFbVk6DH2gEqLzDShsUkNSFpVgzfhGwcXizj58zB6SfHbhTmrPmQxKX3NQAC96i3RoXPZNjQRU4BBGA4jRZ8Dvc",
  "key4": "EedynneXXferhw56ebQ2YQ5SVwgGPFP63nTqxyZj1hhUpepW1RUtB8JP9dcXZNDnAYDoAcK5MzPmhzGAF2n9rHW",
  "key5": "2QL915VW5aYXYBSQc3VMVM8qeVx79vnxcb2uUerVQ981vykevmpMHBbeoRRfJGYdi5xPKTnjxsDkMExyM1hKSJEY",
  "key6": "4ibCjoqCioDnJVBCjnU6wuxbedLT4dx2bdnnqjD1VJWYdoA6Ci7aRDZf9Vkatj5Pz8WyGgk25CLQHYfveV3rZjSZ",
  "key7": "WTi8nnTTpgwuZxU1g9uererfzrGFgdWeiRgAzpHAY9TUq34pDdLgvXfdbTFeA8H469a4CAwymvAJ3g5RTdNmH1y",
  "key8": "3iuLTBe7KKyjX6XPCTL248i9ajfjDXHnCPCJB9iUkqrbkwb4h6PMaSycghiH9jaNZi5wsUgwoHsow6JMnMWvfBou",
  "key9": "52BZa3npkDoWAHyfUDMgMG3M6AFCeZ3AZ9dUfEGsfR6s2McjuzdngZWCruNNTHmBYKwBbPGCLcFT6vP2EvmkFmUN",
  "key10": "Z19vVyHXtaNsfR1qvT3wSWnP48iMiQdTFJ5BLEidcrX6s8XM3xYaEbTdfFMWcKDFn2JGG3Z63XmaqnewSyM4qdM",
  "key11": "4NfGygX8j9HhTiBtts37chjAmDLUc7afKzeCLunLirSxSMYHgheDnDaBuP7RH5fUo3QHhQpEg9KbsREvvrWKoSns",
  "key12": "5xDvmShi9CrjCV32c9n4DREe4xwuUwGzhWE3uqLM4T55z1EzATmjuv7zKbFHCvsu4Rf8zdExJNfufRd9oiu6v6sA",
  "key13": "5phLYw7XnifNXMusQgyShWXdLv8bd8U4P42tduDhLRi3mtrYN1JJPhwZbEyoE8p1NQqDpNsvsGjAdpcTWi7oBQvB",
  "key14": "4U5t9TQ64dVKMFUfxwyqZR82Uc9djpkmBLFJZqqtV1HRCtL39wxCa2B2mEMyzFNZ5jvwQiuyWgukhx5z6j3UnyFt",
  "key15": "5WjyJQe7DCR13p6Uuy3sRxqqNHmxBhzLi1dyadcxE67RZTMncM2jVbRuRYUJJAkUDVUp4S1Nhdw7LjbtYv6cnjZb",
  "key16": "3rwxFQzDtVeNtHhz78dHtk2nXfSFG1gbgdg7K5koaftvpjNaGvvt2xUqtLMe1DaNtg5JU8wEHFgt79CtASHQCoGu",
  "key17": "3jZnUYwpP2CNmyF94wDwPMbKND61nVzb7WrFaRtbEnvoBbohowePo3xmACsorUHaKfpD7588AckmXZ1xWK5mpkRB",
  "key18": "3eoi8hbjUnRUqZU1zhhS5qnQk8vrtxsCLoFMCB9o92s7AqRMZjXS6KMexKk6YKzUbZSYrBid1aeNXf5NjdYpHDJM",
  "key19": "4Smn23EXnxWTKTxeWipURH1F6rCng9EuqYYkSdpGuiExWc8tmf7Aj3G84wKPqtNfyroQUXBWc6MXc9NN2PoKH3yz",
  "key20": "5waZJamuaL7ZkA3xkJUtd8MEeNsEN7jZX7oHvch1zPDx1KSXTmNKwWT4QyLHDcBSXBNNbNL8WR4jRwpJwTk9cDEZ",
  "key21": "5kRYfXcBUzC6pvu4LXGBVyLbp9BGYYkFsMF22nttedS6NupQwj3SMk6tkQmgS4ibF7frSUcYvCoUrtu5Ru3a5GXW",
  "key22": "2y73YD57rq2c1F6cjiRvmkXsG8F3uhgfAA7ZArfarihBha8ZWsELpTa8ET7e1CrJbPGW334AZyHzMmMZQtAdGDfc",
  "key23": "2mHEi2YjPnqhyr2rYQZqPjXzGN9wV3De57muAsHuspC73FFjZZvLh5jNCMgVjVCecGJsyJkLmydVHJSMuKukTUTJ",
  "key24": "551ZGpbRXEbUGiXZ6Gm54GPHFJyGViWReqekLdA6ZTtx39kkw1yxB5RFiBZghwo5k5Qyqxjjn9eurHYBWCTKMf9D",
  "key25": "22Ka77rCmtMzi2Hj8SHCTzNZZgoXx8dUkKvGAXY7iWahZbQDA7bMXNhUrQBg6tcFM9xzQPGu84dtc4jRLKjvYgck",
  "key26": "6766vxfVEknaC9T1JWVMifjDim1dSHdFpeMEdpJRrx2J61EJ1q1kTTzgZ5wwuTESoSSMm8jgLf4A1hCguvmSt7St",
  "key27": "2g9un8kgNdPiqeNZKQ6TGKUCJBWxUZis5Kr96WkQJr6zkycGZfqMJF8Q8BcPitAAKcTfCocvHUW5BxXttCMmeQqB",
  "key28": "5apCH6eHQ5HeWcPDtst87xQGoLoiVjMFwFYsSzDggXphiXuT5vRfyahhPwEJBUHZr1v4xrVTVJVVEZnnWNgAAk8u",
  "key29": "2LZK4VkRZHFttdoNHajh3h9u2rs2wuJF1dW1xPo2hUuf75tq6aeARdmdR8qNyb7vX4qQDNfZukoJyUZwfDQoak8N",
  "key30": "32S5pM6t4BPdC1jty3B7HQJf5iEEYvBrL3Rw3Dv2oD3XbSq84r5BDimNtvRV613Zm6pUYzxdfufP883tZBmAFRN2",
  "key31": "3cFA62gqB9gVorNmRxKNuPw1WtLmv82YJJS3qu5oPxkEQAJHxTkhnbmdio6aNg37tLeY1XWF9EDpKDnG2omGojEh",
  "key32": "3k5ZNLZzgBhyKpe4N4btyFTWSamFVt9GRrYfx6nb6sbZshvea1ZoHoNwmbEQ9PRjBaNzWe6ZHCUot8C4vCMxs2NM",
  "key33": "A9iCRMu9RTm7VakDPjeo1HWvXVUhUk89UZ9xDELr2BV8kc6rbVUJdH3MPxLDZP4q6KZU4Fb184SYJYEb3XCrpvU",
  "key34": "2CsPeoiyfxDsLWb7wdbm4KyNWgfQ5rDGRDVAgTkCEEPTTth1vHzDzgmw9jdRYctXp9ak5YvZoQadNJ57RN1WCZv2",
  "key35": "fZvkMDYRh54DXqjiCjaBmyDDjX2yrY8xhuruaChjQHbbt7gitezjPLMsUPTza66mr4pdqPXZYetsZUvRSeZcQPT"
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
