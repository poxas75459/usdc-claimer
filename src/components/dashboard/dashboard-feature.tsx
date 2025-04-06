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
    "5f8qMAJGoZiUHBaph5MQDabYQcuJArGSLWLUFqR7HAy7NEe3Dr6THYiykDKcKnfwoMEiDSgVftG2ujh3wdUwkqD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qK5rYrdWmpA1CCy5GFHVaWZ88hSsDnxQx7yHbbypyVhDACtUVkuJJgKQyK4cWBKvHf9R4TuMnRUpQeVdhBcxRa8",
  "key1": "2GrzP6KZUwQ13mYDtk4qdLsyNsFMqJpFsaPgEQDuYbmK3i1xahdwpPsS28VEQfw7ftjBrQJvd4URqfsaHPCVvHLZ",
  "key2": "5NdmFFokARpU9tAGBDsRBeiptv9L2hh9iuPLV5WijLpw8StegDm8YKvJb55mfySUDYv2U9bmQb1mYAhQLSJ8snmj",
  "key3": "2hLyfkLJoG8nM1GFFDWFki5uLu9rkr1krw6kHKMibTQS2P97juBf7HnXC3xSPxaUYH63t3PE1Fd1dcjAeT1SD5iN",
  "key4": "5yNYgzZKt9LPe5Lxu5fPzd5GYVnq3nMECmVstMBpiTS7cUH86zU4X3u6yUPXqZm2Y7m6yXBCzvLdtRqfLWDN8w19",
  "key5": "5s3yFJctAnLWF5iPjpkzBrN7pg8Pa3nHB6FKFRukvCFQVJf3UrEyfWd5RqDtLwjdKEMp5q6oGtKyasS9JkS5yX9f",
  "key6": "3wfa5rK44sk1Cnd5yHbz5PkxR2Vpv9AwgFNaMUsRDHRpxXT5Z6vuJXuK5aGoYkgVPdYyjqu8hMnY7HhWJJkNhc8Q",
  "key7": "33xfe4BjWHhBA6wF7HmM7MYYKcjLagSPd5mqTUowNZAKqCmGdGFvFjQQYeuFrmu7yEuRFJdpzRQNm99banoNUKpP",
  "key8": "3GY2SSTQqdrgVq4kDRzj9VjFMi5gyaYYFjeNG5gV3fZNCv8audGR6r7B5Mu8BCs6P8bQh6x7jAwingLAtJUhKeeG",
  "key9": "5QMgMUDvNPMRpqGYb4imrRXyLbLD9BKgsehKPRBZMAjR5rhTLwUFo9ztfVfp9fCEacTRYJJanBkyJ5hj5uEiV79y",
  "key10": "5R4Aum9wu3h16XHQ5em6ms9BbFkKwszY8N7gJw7EAqTbsMeSXRyhqh5yYJG7EN1Xyu7WWQjy1Nf2N8eKwNKhxMYg",
  "key11": "2vndcT3G9RRnmRSMajV9RXXWWWdHagXxQN9qTe5Q7LhTvKkXfvULaygicU88qMHveKaijzmC8gEvjykferN2Gehd",
  "key12": "5PN53KHaKFdCpr3yvgu2Yw2GEZdc1rQiJAj2zdq6ctUV2xr5vTs4YpCxZ3TcAMxPsaacQXjQRB2ZrEdNHDy8S3fv",
  "key13": "4StMWcDQTVRuchbv9xnNk8oju3HvhskkWGxf2Tqb3AWXBwY9tEkmSaJEFBxQH8NJp8nJawYagBhBsy9QXtXK7kZe",
  "key14": "5UqDbWueT9MkfZDzqrvUTRr3BBN3D82jepQ49nqGXHLfqVBUmVpmL5u59RNDTh3Lbjibi3B4sF337MPvSGBefaMU",
  "key15": "4AduWRn8nMQaoR4CcTsXkWSuG4pMRfLg3FUcdw14iUhLNj52gSMjN3akFyBJL5DRCWF6s9Z5he4q9x6b2FjqnUdA",
  "key16": "3e1gioKMALeU6BuswZgCFn8NJtPzhW2T4ZBG4ordNWPJmifsExGe5x4CFQpkHACsoyH96J5zRc2KjXYNaKpGuci6",
  "key17": "2rvWrNYPsAneKe1AuWKoAAdbmAC9AnVS6B9JRAz3PhvV9ZpwQ7ytKHrRDaU97iTYCtFhEkeD3c7ZgYV5gEckNzTX",
  "key18": "495TmFxFDN3zjj5z9oMKLDiUqDnSH6cnmDQoMe6fcb1cXmUGpkHcuLA6iuRzGCQH4AyBLHSrJAUvdxZBfQLUm3hz",
  "key19": "5FTAJQD3Bxhw9LEbhT4GzxYUn7N3eQaNKtzCochQwQsJyxZjT5s7s94wqHZnMYaddCYG5Y9z2DwA8wFPXYsvryv6",
  "key20": "2rsRgiVDcKsRLRLYo9bdBbc96UQf3wjSWj4SRggxwxBcv4kgMSqc9Ai9P1pdiYihKs5NyE8FXsqyKwEYZ2fj88d",
  "key21": "zehE3zvPunmSTPWhbgqoB4Da3wrwcnQrMNRhCSW1rcdwVFrt7E6oqMiH8go5heiqKaKBeurpVLrHNLD3smYU63v",
  "key22": "3BHQf9GqLaeeiCx1GJgTvgtHKWucHeVmpUg1kN9FB9iP8tYmo4pCh1jeScnjzSVBRMACtaUbXUr72TCTgEoEobYV",
  "key23": "2ME42q6QiQvqqZgvHnHwzim4TCqnQCt5poYnEM9WrtN9NcwJ7bn6fDzMsG1SbAL67VUHnD9fAEvQ7mNHa7UXeDN2",
  "key24": "3LFizL3CL9fGuzDvdWv3dcqr1G5b2vzFMKkmtSVsGhzn517czagrTyjvDXDFHD75cGyDSqTTzr4vFgnjQjsRZPaJ",
  "key25": "3mMNdR7D6VjE9fxCE78uxsYEfznmzVyWRua9vjJxnKkU9TwJoDjLPb9QeomktQeW3HGydyiQtpTX7PxArY8iktGK",
  "key26": "stdxXUds85qJEvZ7yUMKYjKdKfPfipdSfaAPHNSYWByNqYYSP7ben3JXKEA8iKrojBoqKg2AphTNrN24Cn55QQZ",
  "key27": "2AMwAJb6XkUhkTjWNuqN4iipaMwdyDKyGUpe9eDxqfjc3qSriT5K1V7Bo2g2gg2YcR5rvbRXzQBtxdYHKnShDZXj",
  "key28": "5dee5gvNhK5xBSstS1mQxrbTbuKfEvnn21fGuLMjHqCSuaN3LBLCA8shWoRd6W5roZH6CWy1NRBX3HgEcsEGkSPW",
  "key29": "4xSrz6RA44PViWpF8zhykifj9G7kUBFCmEXLWcYCc3uVdQ3GENq5ZyZ4GexyQnn1pQS8Lur8i7bsr5WWEvqu22gr",
  "key30": "4dEbGxFfkPb96PKHaaKwYrikXSHidSkEsBxJ9vgHUFZKwDYmMqMwLK1vjsYmvCu6bm5KEduPRFKDLPz7NDMkXTd5",
  "key31": "3mAjeimzrYzk1f8jb6vFHwVoWDcrXi6TP1SBgP8x83KVtSK2d6N9hmuX7ySJDSk7ST8tG8sgFibvVE5SC2Dj4v8d",
  "key32": "9oaefFfZfe6esi3G1E95qribKkJTEMdgJUW1ZU544DVHLbf4xsKaFnLM8BP3ccWyzo39LDrwsRX2hXJiPwsoPbs",
  "key33": "5Ws1Nxg2x7BK137yYJhyu7UZDzXG1aXPMHt5JZGrVu5zsYNfV8WF1wwHc65tyJSP4AYLcjfnNAHUVHwtLj4rUofc",
  "key34": "JmCdLa2Cdtb2Zd7N6yM84odG6xvBDnkUsLEuy34WHTHZUmFkeMxgBUGyH9ta6kZXNcoWeLmgswD4mQuee1N6tcx",
  "key35": "5sSkG65eKxn91jzQiBrEFd3CrokNqEG2XwhbffaHXGyMnghiumBMEPC9Mo4HHM32DmMDojSqBTaENrbmpbSoEfi5",
  "key36": "8QJsBWcTPifMATLLYCYo4zfqWbkJoXCwCEUHdTmegFgzWPoL6MhddTn8yiF2evDJxaNXnP9Bqu4CXDUqVJWA8s4",
  "key37": "GB2kbQgECJKbDvaUc7fkbVzqx6efguenDwwUreDvMuJ1ze7cEJGCfF4mpWAfJ3XpuhzykDbKhhTqW9t6rBNVdud",
  "key38": "44UdcFJBsfDm8a6hWGNrCWAtFrfHe4RirHqw7gULReCySdH1PbczPBxEp845gpGEJecEUrQYqWnEyd2RaynN2bnF"
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
