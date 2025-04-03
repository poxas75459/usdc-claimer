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
    "5wje3hMBBDnfNTKKvYoKNuPbcS5T5hzPLncWAyFCJtmzMY26pDMCyt2Ndjzz2X8iL8p7SHCkppfLrTWeBHw1B5iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tzm3foX4jopikZpjKULxa3XN4PppezFhDBpraJnczBDSrZFSfrJdcmJohu9mjXVNeQD6auuaAUt691dccRaRVbS",
  "key1": "3W1Ya9GvK1hkWqQss81Yj4wktB8g7TXZgGgkGhSAgikbknvHuf4ccTihA1e9Q1chGDFNXFgXjWhqvdSzyyNef7CZ",
  "key2": "p1hH1LBn8Erc4eGdVgyd3XhcLKGaPkaU6Ci3tjZJBhZzrRjKoBg4ET5AzWsMjbJurFNWMfyFb4TUE6XfDoiKMTp",
  "key3": "5RDNBe9gQwNfd285pAQSfZCWYGbLexg2qGGfTon9LUc53vpGFhnX1a9q74KhSGe22cdbH3AugZnoc9zmdGJhE6CU",
  "key4": "58N9NudhQsk9sWFsgHkse32UTZBXc9F6RC4VBH3FBssW8WCEWX9NhNcZ7iowUzfQPy3Q31TgsjusCT8Gz2aHwH53",
  "key5": "642kEvKhvM5UP1Vjmympux2BZy7LwdCZXhsYEUwUZ7FGhZ1ss1f5vXF4paDVSk5wr8YNb5CXdyWwNcNSyeAVupvL",
  "key6": "32LfdXhJgXcj1Q5VyLbxzhWwv4rGvZXxJ9wM7kAiokRv8S75ZN2g38VCdyCgqpwuRrVL6nCn62PEXdzFt2ALntTB",
  "key7": "4Usa2An4uXUUjXC7n9rc3kytVBp8XgbEEzAXBMgcJ3aKvqiPuwLHU6hK3Mqd5csC274BHexnDN3T75Erx9RLoABa",
  "key8": "5EZstnp36CmKSDzjiQT33iuRrw74Sfs6jM5vCtiNhJzDRvvQgPE46qx6pfsgz7KcBYqpAb4Pf6fiR9VE4KU38EoZ",
  "key9": "4kNNHVDaT6CrxsiZtz1YpPUkJfBEyahmSXBMfaZ7nFb4XeBpTLcCTv8v15hTRoqbV1vvV18DpLwf2XHfs7MRn4QR",
  "key10": "2ZdsQqyYZ751acxLhii6SfnH2AyDe1H1jWFyi1o5JDMRUndXF9cqYbJq6NQ8oUcZgLHoMPW7H5D77hua9WF2uUyw",
  "key11": "2sUfS1tUdJPJNcyKaktKDJ7EN7MUVqWQd3y3n2CDqwwhZHF5dnf2f23bZE5rJZxPkVAA3zpKMrx9EEJrxBTTzbdr",
  "key12": "9HMiMz189wXBy9wiPtLLe5zm41ZcCEQc8QwQrdw75rqPUHCvRGT4kNTUmTvMsZDwjCwaKghNCbWH9neMZwuj9vm",
  "key13": "2GD1XDigf1gHcMnGVZeGWfpVshMHP8p4PqEVxSUrVEU5uqP9b36r7LF7cFqXCDsEJjp6Gxznsbf5NrYWNxLpDSMy",
  "key14": "4RT8wEJvuqbzHhJfYDimJc34TFBbo1Q7j8YbZbAasdpPFeeTKLu9AW3KYUFopn6eh56jukZGSySg55mCGv9WCGdG",
  "key15": "3b1K2uP6QgQMgxfLDD1qdT6th3cJKfpYPSe8dJRfrhcDogwBPau9NeHGxLBKizQGLWY29WS21hezQd9JaqT3SoPe",
  "key16": "eP2hsbZK45ufa8nApPvEiStefdhRQp7fvRXf93VfePwye9vdqSRbjsifjuDnjuRK7fwXLybdJea9XLyY4U9VmHi",
  "key17": "2GArh6jUSxM8TZxuV3JKdgDj8JdHe58jAQMuekkudpwCmJGRpeamp7VxvJHMt72NwpAZFx1YVSx1NySUetCrFd9A",
  "key18": "okTG6XV469UvJUWbPpPPVcoweoMdxArfyiKdyWFxTUMR3L5FwSifgfRf5DzerJsbC7tyQLQTnMBXyD6faGHzchr",
  "key19": "21bSrFtaquzeDyi4BdNeaMNkUgo1vy8xoLbekAHZzQcbMW69QEm1iVaqVH64vexUyTK9u6SxXuYEHCnFbhMfHcWM",
  "key20": "2wKDntpPCAmmYQNEcnD6JaP9UDugwmSmmUuM7eVGd9u7YnHdw97E7u27QbouJb1z6QozYCowKFjc7UrSeeUFBWgV",
  "key21": "3uxuVQxf3s6RD62cfVdYM86nCGEHMLNQi8jTeBWYyn7wSQoSCyGkVwQ1zHbdTfHL4oDZApvPrJZ1HwJNUHuwXAYm",
  "key22": "2qoQj3YkrSDew86y4Pw6ffTrqAi1hmzhLNS93NchF9uicTsztzeAEBeiJuBUqVdxm5FyCC9aDkvdAeVnAdRv1UE2",
  "key23": "5HEQxpWw1ycoY2mYF1ZF2QyLmh45mVWdj6DWANyPzDFdg3zo1roDtyKZFcq7CWPjGJncoPyqDFLLpnvWUFpSso4Q",
  "key24": "4ULxgw9hRwbBVkq9LoMs8USWTbmtbtpvdFxuwyM7jf3imrS6fn6ShCE9gQeCx42x4u3pzwUPfS6SYzxZso61yuoV",
  "key25": "36cfMHD9YTyWRats7U8AhnBczcbHKpB8iVWgFWm3p8Fg75w9sytAXSr5KxF8PhgUN2fJCnshtSeUq7cYh5LSNRku",
  "key26": "3eqrgvLz5X2dXKv3go4chtvwtP5Tkik8N388M5TSnf4zdUiDwjZ61xnJ6ATVZ5pKTffGAmZ5qJHkeh41c75XRmhy",
  "key27": "5DTqSSC8h19McP7SBTVpePb6NENQn9WuqetVc9H7wQXjtdUsEMpycR5TXwqRgrfipoFwuWB1YXHSjY9yBMdCPjr6",
  "key28": "22ZuQW1Ht7XiUoVhWGXgbBLN7kxRVqwUZ2b7tKsrkgkXym3uS9Drniv75Dkz29msQQ8fkdjKqoxbVUVJ4YV32yoM",
  "key29": "4TWGixewRchdz9nexxUSebEAABjATSGKt2tcGCCfKPmLrpAvYNrmZHAGLbYURPnKNT7oSuHz9jZBh48nGZJapgk5",
  "key30": "56ip7TyB3FD4kzTjDzSrmVHmfqsdnqrQdHfuFYHkS5t923t1TZ5t5kfUj3eU3pD7bzsh8gVx6NVd7Jw3veW6Gmeo",
  "key31": "4eEdV83tsB8esXxET9SPNDg25FWK9816AiFT7fng1MVWFrYuU9uZGGcFy9XTx8r6bSU52X274RCdpA795D1DgeRQ",
  "key32": "2YznLKaJFRnLCyjwD9CnJDpfVNbJATmZMFa5KMHX2vPDhW3o93PrgiBXMcLivMTtTqPt4earphFzgcaP9Aj3wNYS",
  "key33": "2JMqYjrZWZyXBiZKK15f9H7heRm5vYUsG5U4qAM575oBrrKh2fZijgbXg9Ci4dKQL7R1RsXGX6L8q4GiHSXkhK63",
  "key34": "5jsFcUYijr7WGxRf6guEq5XQweKCJpasyovMoxDbQAiX5FR3hSSXh8VoiBFKrZ3Q5sLqvFuvAL8VhXJZFS3nvt2F",
  "key35": "3FBneV1zqSh7kaGKCTpuZaZq26sX5SbPGGcmDyxviae5hf6pJHd94z7jHsjyViEem3ux2SfpcLQwm4grhpauVxMo",
  "key36": "odZWq1BmHqtfXEfpDBGniKDcVACMAMU4s4ZD4imfbLTn7UcBY2iwdpJ2xTwkMffdXCFzkwzgrPyn2RR388usz8Q"
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
