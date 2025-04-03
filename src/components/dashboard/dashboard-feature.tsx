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
    "YnJ1i6bXGjh6mMYZaPo8C4xMpkMYpvTMr8afukUH4ivC2pRfAmEntLBCsJniZwgVvd65ESRLRjfDDrWUBaG272J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38w1n7HusAGboh647VhfZ25kYwTW37rWqTxv7JXJTGTJ4ff63WBRmGtEWtiArKtvo37NnvpAJHqpvNYAyJPZN9m7",
  "key1": "4M7R2LjEdEviZXWpqoq4yjixhUERbF7BjiFHHN4qGjwgXmsB7yNscr9FgTkjowGH5kXnuG9oVQXkdAvphutQnENM",
  "key2": "2PLUkDrFsSFvfFB9a7bBTjb28Bf1HgzsfuieRkcQjQnoWthKmb96x2zgXHijejAMGZphW1m36vNCoNRhGXYZz3ri",
  "key3": "4VWLnSSFGr2vz5M3Nm3ojvqfTBUWTFVir3HpkVTwYcJh12BxCBafDXtCnRWhaFqyr1acpyyZF6oZojfz8mT8no5R",
  "key4": "4aVe2dCrLyJ3d44mvAatG5h6geXQyGSTqAVrp2oh7wnjduBkH857KhX2fn4pUJVV2NtfigjQApiTcP3uZLAHDnvZ",
  "key5": "2Fkxwd7aRGEk5MPT56prvBrVf7bQDsmSuN5Kxkrh4GhqyXr4T946Zw8sSQKgML2DSNuQwRtQjNceuH2AqAM3bVhc",
  "key6": "5SwzKpLAgaT8imroNjoHuydAHYDRXPPUztG4HH8U2P6N8AwZtmMkDzevEU8nZKwdoNBxFQAfLx2UxxX3M79dYz5h",
  "key7": "3zzpbMgpevh623RCfRjtruq5bovuabteK36vow5Svg86BRPZEr4oDoYLzscxkqsW6i86TnwoFjsLQ6imrGBXVAV6",
  "key8": "2hQxipvQZBq9qz4BY7gMUguqn5WCgCW6nCaZsxMSCCQ7Ks2dezhxDSie85eH2EMiz9TBqJc7HvdoMmYSz3jsRvdi",
  "key9": "2qVeYhHeCHnmmBapByWQjN6gN9xJB59gzTZmws3Gww5Ag71dvDvq6kdRizns3aEkPcRSQKqzgy1WjDZG7bL3VW2T",
  "key10": "5w67Vz18p87XeD5YkPxFBgn72rpHsnJ5ksBT7shifZT5VQouKiSED13wm6B5bJgh9NgSMg5je19KNwSaK17hx6br",
  "key11": "7SGpXCi1BSvrthzajKDTxXrCsVGQo1Th62ogne5tnFR3fqSmEMCxH38dsbx3pjuCd9EVFHMus1uhtKYhZ97tTHt",
  "key12": "4RFLwZ7C7nEdoNNPaF1RjUTp6QUS2Virw16rzgwQo1uZLxFub5HuHWTyY3bU1CNYkw8GisySxpUG8Wz8xJZsK2Lc",
  "key13": "52L9KVsTWHbaACweoBrC5XdL27zcpsXm9uUfYY2rxBpoAAcNqBvd82oHtAnPtNcEjHSBt8om3ibCA9ctAWtkMj7q",
  "key14": "nZX5q2GprS1L75c5EywMonnNeBq8uqPrx4FnXMW2F29iZ5dssCQsAiSMX38zH2rwGrPyodJa2Ae8gYQ5sKcbpym",
  "key15": "3vPxbnrw7Nh9UiRDw2KemE9oYFEcAfjti69LKpJNFVti4vH74d6SNpS6JRSefC1fynAxvYdirvum5f3vDY88Kn9J",
  "key16": "2qCyLVhF36kPuMzBVJbTixYsiFk4BpUdGeaUJ6J9uxdn82mKQAQj1n99mCT9kcNUAb619oxspwAJNf7GhQKEbw2K",
  "key17": "4cQrDi9QfPT2ABMRN3pm2Ljf4jCKT5HpkXoYMJv8AdEzwujmjqJYGrE2yKKx5rBcSjkQBZ9qoHkgDBnBKyvUbNYT",
  "key18": "6XJ4GVkn8t8u3BDXXEPpdJh9Tvjo9L1mpRUMg2GLXRLVjhvsdso8ztwttUUtX3Qw7hRNDx3rY9vhwt3ADrPDBNC",
  "key19": "2WkNMSZ3qAsTt37bVb1gjpn3j9UHJKjjxAnYkQx6NK1eLcedRBfwiNGz3ehHK9YsBe5uA2p9DSvCLhX9oe44Rfka",
  "key20": "xLL6SjP1PXtXGNGqkLZ2cxX9ZQxsP989dicM1z8DA829VJxwjJoyh6Sytgzu2g7mU4t2sPwGLMzwHJ8RwLdt9Sq",
  "key21": "3YXfsSKnZFb2Heuhpp3mxvhZM4ekMnxqZEQBbEEvyaXZMkbjgscnDNDmDP22C7yNmtWCgqQVvrfPoXpmijQrpUMT",
  "key22": "4HLPCmvBGZyTLYtt5SkLLyBG62e7GwBUDHXNZ4m71coVGSER8mf1hZTqm9ChRnofg17CrD92cq6d5WH5hN47TXyW",
  "key23": "wDUPMuNVfzuEtBNqc5jhMbkcXdUwunv7CABqz9CaoyXkARK6nbJsQ1cJ1os1NSRDM6NH6FS2MFq7v8uu18NSxug",
  "key24": "4KfcnDHf1bsMLj3FLAonqbrv52byjVv83jBZ56xF221pxKyJGod6F2svPPK9ZKorbwFM5YHkq7i6ZkEUEykQ4TWr",
  "key25": "4tETAAtPx4Lux4f7Uihwq7Xca3TTbCt63Z5W9JVpk9V3DkuwUUagbWzBxMqUjBRgXR9dHFJFHDeNk2BMQ1WKLcU3",
  "key26": "67JCRHR3XHd5ymDKh3NN9upPVDdfPzUibJUoPvAv72y7gc5ntVmxpUMKU1pTpEbk8nbcandjzW2ZSRxU2K2FZapc",
  "key27": "2m9rNcCxnZu5hdyJh1g1521pg4ozX9et2mGr4MJgvEMEuKGXrEz89GNhDbHEnNwNGsA3CVWL9gMQitGgdbVFWvA5",
  "key28": "49iXAL8qvLtj7E2C2ZVac36jgxX3GsE8pi5pB82auq8owe8UEaE9UTGschTCYUneEUXLXhD1g4PtMSBxcD2rpHD3",
  "key29": "bSwgRQTv9nQMmLAnsRC1GfpQvE8qNSPe9VACr3ZobkgjTUGUtTHAahMbdPro9DFY4o2HbTAn8cqxeBAKfcg9BqS",
  "key30": "5MqhePSaVccKkocRNfChLNKz3Vuh5h9Cwkyu7fwSSXgjxsbpzXMzVyEDDze2mY34J8uetSiBjwQW2rkeL7vkctCC",
  "key31": "d8bfWWi1mf8Hi4aMrMNWWuY1eFCGPo8ds469Wb5zNsc8aZEQC1dgh4WMvnS62VBJbQiuFF7ts4LNqeg8S9w2Mi3",
  "key32": "3bfE4vmSM4tqNSpyGZgFHRsJrUQLWTBLzGaFZAtd2AhMYwp7vSiY2JSbffecVnabRZEjHacp2nQuhvv7sQRXzBGX",
  "key33": "5J2zwKegSrNFyf6GVjzEpLhFqRi9KsqfeyX76cdFpiVLckyxLeHYh13rw3Wk9wf4mhyzbu5no5LozDC9hf8f6Rtd",
  "key34": "2RRiS56AdxFfiBKQk7sqsPmtNW52q56rGfS19qmuFggSvBTXimeYusmoMFUYLYzCXMg8aCbxQp3CH1EoecLTUBHm",
  "key35": "33MUBjenJW5qidG7z6WfAEpG3bH5PKQYjbHjkHe3mgM5xsmGjPkJgipcE2qBRUdqjj9s4AEKkqr6teEMSLrVfoJ8",
  "key36": "3y8HighCGVNHHMRKqWCnRV36daZciFLTUYKimVHujBRBSnVFKpxCTKV5fU7B5x7P8QjhenxAckWJh4P84fEaqQAJ",
  "key37": "4owf9YS4S3sZV3JAFr3vGJbq2HRMT9n2zL4rd8eWvtGz72FtMz2owMdNWDuhWkHRsDs4LoS92YE6UopbwEYoTPQ",
  "key38": "5j3otYZTkRwa7gopFaDmXHYKiL6gwmbHRuLpe4184HijUs6Qn7wtyz8y3Zd8nmtdiUmMY3qXpQzko38n2bgs1WEj",
  "key39": "2vcsy3HDHgYAVRRjsmN8wCifWC1avQsJ92NseVqSxvcekc5Nn4nzfHkxpSPyreCp3fjSqFvLUN5cT5hgK8kjkzaA",
  "key40": "Mhii7fwnMVWR19Z9D5VAa5cnVjhrRp9RSrjbaAX8MegmNTFbUqsbn3356rkxHUaCkztkkc6NZ6hCBb8bdw5SjW7",
  "key41": "2PsnxYF8zmcpksHWHHnpVWnqqT7aCvf5vAfBkEDwNYXDEqH6t9LbYPBfWXBzvq3PaGPkRVNfywZjY5UdTymEdXeQ",
  "key42": "5dS8fK81siaCH4NaBPK8kjvkQLj8c19TE4rzkVJQVhEq52XEXQoYLm1M7mQiUegExScZFNTfFoai9vPkpB1v5SYo",
  "key43": "5Ds6kyDamLd7zR35SJ5ikoRcxARorHgGEef4NxvHdcBNa8Wg2UAKiVCekFjVxrz2mrWcxb63bsMhQVYxCcqWg25A",
  "key44": "4RFDoo9BdbCRip6vhc6cuh7V8Yk4CcSVz3KLp1Rx3AGRBwrt1mUdvpnmwxfN7Vsg2sr3JwvYiRv8vAU4HyDUcMpX",
  "key45": "5Uc3uW1etfG4JJ5yEdjpH3ajrMBjLDztSmjPgPbtmFsx1QroYQkX9BGepfuhtuNLfx7Lse4CxqRjisZMsZz7f7A2",
  "key46": "4M1UWgMKYGQ2maZ9MW6Qr4NcicGj4JTtDgSsNkXBdECZxE17aZd4G9B1qLE32Hft22wmjGmqRQdK3Wn1PHdB2Qhc"
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
