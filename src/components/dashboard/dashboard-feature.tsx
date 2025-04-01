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
    "3Twk5XM3hYtsSqtkXBiigWU4rtVosy5t48A3sZckQLTnzGzMuaXhERYahi1pKQJHEx6Uh66qvZdFcRaUPsE1p8Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNP4315UHwAjiM856gxTeSXwQzWxireqvWT6LF1o78nvd7QDYCEGWV3zHSRmBhdmB6QBepR6Y7DYKa8KzL6FsgU",
  "key1": "48Uu5eoymnqY3KK3SVKVfEXsvZGxrwSGn8vSZm1mNY26XZe3zGsbeJX7tWxpCXZDq7G24bctjW8fqJbKqeB6qNAU",
  "key2": "2EovFNf4Dz1jpu57zgXhDMZtSwCVipq7XAqwW5pWz9L21wrcBNvcqEeGBTaSfBYjwbB9rQFYrpR4cqPSY4HqVNS6",
  "key3": "2nFudmoPfPRatwBMVt4kZZQBve6SA4vZ3BrfNhe2Y7viKkFF1jFiTGrGyHFhK31iqpkvP1zVvaNnaaMHjxvks6Xd",
  "key4": "2AAcYa7sYhcyvhmXFFferuMvwFE1oaDfX9Kv5xXygaTFYfNsNYzf6dFfgsUrcFHthZf35YGdYa7tRYuGcYvJ5kSX",
  "key5": "2gLwa7cxXQL66U84yzxRsxHVjr7SpWTVGoVjJ1CC3m27V2PWybTgvkXpVBbwuTomjkLNT3Q8RSPCGUKrGkK3dKgJ",
  "key6": "8RkrRQ5sN99Eud4P6N3mNBeouKJpkpauLZZGgfFMvjs34tcGwynWkv2B24eiZsFkwUDEUDvwg2ZYtRVZWVsay5J",
  "key7": "2Y3JJwNBDPHiNsEFtKae1qWUc6nRKPNER1uEED1mPHMixNyMQgJRGaRyixot6c2qWrugYidzUJdb8ipG4zFCvWbH",
  "key8": "RegUzxNFKncHusKiaCUzhracshTdtBL1rm1ZmvW1HHKKy4Uo4QVsKcEinCTuCrkFbjEVGyihmSD7wSPdjDW3PRE",
  "key9": "3c2XV4bVRcrPCdWcXVvf1P1MD2NC5KkYrDPTnUCUDGNYrSBQwdzeTHTcGXcWu3LGZrDakGXkE99VjoUQgSsF8PmR",
  "key10": "5PRN6cAbEimD97ys1hE937zGcUBb8FF1dAaFyswrA6tPw2wKWqrSCZXi2f2gNGPngre5h2fzLoLiBZASqo3sY521",
  "key11": "5iUrcxhd56v7uQgVP8GAbFyue2gSrdquLwVL7vkGVZwrSWrBnUpnoAcgntp3DcNiUtnaP1AJ9A1TFxxuieLVBs6Q",
  "key12": "C2q7VL4FhYPipEThPvVVro2Tk1CMGbyjpw9akhbZBiBzsdDomTCnA6LEdYgennjVo9SK2jGH8EpyRDURM2zhhqF",
  "key13": "YsZANf1hATtcrppq6KDNPthDteK6geD4daFqJ47FxcqSR6SSrcnaagPKiKvP8Mgr1bmPhdEA9nURqbsfPfq44C3",
  "key14": "4JNhXHBPt2oiLj287YekNrdeS5zPX3JsUTqurH6FC92cqWU3M1YuU1uF94AJavWDsAqJXap8mVjw1yM9kjpQXDkf",
  "key15": "2ymJfpyhLYg8JAgaw26vXuhZHaTn9rkxAXCgwuS2aUMNtpEyGLFj4ugvehw2Bs8djTqcyuBsf9M8iRE9wMfidSTe",
  "key16": "32ze6rcSKd5dHW1CvuLTyR57x6XnLPu9ST6QT8pVJLkGwvme23r9R7j8fMxuFhTGfKodnrejbXwpzwWK3TuHPoJ",
  "key17": "63iZWNaVUMXvMBvP1WYAsh1Z1Do4xajMAYimRCV679R1w5DsmtpFiHAZeue1extwAG1xuDmbGVUZBDccZaWRD7sT",
  "key18": "48MmnTgJSpoJrnPKMbZHUmbLEU46hSSw5uHkYvn552o7oc7Z6tzNNnjN4dkKtgFXFcRw7QwbBMKZ7hzzyS7uF7zK",
  "key19": "3zAWHm1jVNo56VEf7wyApA2T6A49si94aVhoGrtX8w25imFmacdPS9GryqhHtKh44yyZm7JcstVjQKpb7Y1XqrSW",
  "key20": "4Rf9DGxaJQdjuqiXazaceVpcDe7X4MgiBZYx5erMPsFKnwQtLQouWibz3hvuhEg8XmcHGLFm2fcALVLkD269GZti",
  "key21": "3rF3GTBMRvKqk3QbPXidAvH5oTMG9W3mpgkbumdNe92h7CR1A4CM3YwELS4gt4hTnjnhkD4695zZ4hVKKoNeiV8n",
  "key22": "4vtTEK4A6byCgULhS3uri3cS3CcbJ3HwgdQH7qYYpGBM7VnS9NPT3pGRHHXCJtHY7kUpdydncMwMXq1NztmsafEZ",
  "key23": "5KZSGwkn8AYrHBfKxNbrus3SsmMs5Z5RZn7gZXaTJGWV8XsxV4jG5enyU3E5XWcodSt3NKtTRbVXud5Rbwnko6Vr",
  "key24": "2V5iZLJdWshCEozySVegrqFD6dNBjkm8sZqXz37bVRwBC6JTq72YLtxJnVvMAAzeaLFnmACcdRshG3mXCuSFCa5T",
  "key25": "VfrXWWqqVPfeg1LNaZrrQZSXWWobiePwQFqdhBMJNUk183CQMMmnkxU6PQrGejYsemURNzgpwubN9nmTiJUBfcG",
  "key26": "2QdMDXMjMoWHV4AaKUNfb2U5goF6h7wdRAiQArWdJCiCepCMNY1EMDdq6j12ckfD8VUWxvfPeooAmNAinuAgzzM3",
  "key27": "3Z4hJAqfHrVuVuidb3ZCLe9JFe4JnmEGc8vxD6ew1emKbWpahN6gjH3dEEKYPrzaH7YbKaR97aNZySSNftWPWnGh",
  "key28": "3iLdwnVaFDNhiYfiKwsSFB4ysYmzNmuRiR4BLmuqj62oExbiTJ117uEDEChYDu7T9HaA6ugLLXjW6XHpmfbCTNTx",
  "key29": "4EhL6DSkprjYUPmQJ4SkbvmvDNauY99JTNZTAt4PLwWxkqfXgaLavK9EzNqJpEkPKvGxwMYTa7Nffoh8MLQBHAuo",
  "key30": "4GkdLXEfd2JHXVb4qZngVWj5CVdXj5hTo4mAwu4Georbi6BYk2CT5y1yXzhGManDqmEBTf1TGu4wi5WhYGgk7i7z",
  "key31": "4Z4GAaBdyeTFxc84SN6vt1qSY2NNvg6mCaqPw6x59WcsvDH3k33F6SakXNHUPQDp43j4BFmJ3cSckH4bkqXY9tGp",
  "key32": "41x6L9kBUFLbV1T8bjJz2uDXtNv49LhpWNPZrDoHGmgFXYJaAKuXeqHMysYbq4hpNwgTfuuu2A4eX4AV2Hvqj1m",
  "key33": "2RQLbwmKavpfRDZNnuzg9qBgMk53H95mpp3uK6yvwH93FskCD6eQqEN4fJ4JUAY39opoX5fPsgHArA3KN6vxFhUz",
  "key34": "4FuvMngFW3Xq8s9drWXohG9nrbBjUx7x9YpQTjLMfAFJ5maeHKDXbX6WanDU7muqy5FWDsKEHSWQKB2ysQzKEcAH",
  "key35": "2qfhd9Jq8MfJWjT7YLJR6FC9w1SMv1QzqJyVgiY6wydnYF8oLjGEHNrCzck966dcNo3whVseCYRDqP2PjAaVTLc2",
  "key36": "GYu5WdZCV54qeirstU7AgJUEohsiyHimVxd39zDeEnpKdRWm1kva1PsewUxk1chcPDF9NYp1vWxq8TrvijntcEv",
  "key37": "66SAgDiT84JegPGe8Pe6DyicsBnRPGtf4Pi8BaeAsRm4Vs1RVCoXfwBKdQBoi4ZckZsMLRa7dChaKNjFQPFVrRdf",
  "key38": "2WQd6Jfb4VxaD78NRH51sVvKt6w4kZ4rztkCq9NKa15YRaoeDpzRGwjewfPgiDhHTECC5BKXGovWK2w7a2gzSpr7",
  "key39": "5uzeLffdwzaqCAXVdefQK4XR2BfGdySK3JRm6yeVsvfRed86vtM59saf6c3iBXZBGsSd1Z1uScekjrTJwSu1Kr6g",
  "key40": "5enMQfpgAZReqcuRkfLRsFPfdNuuzB2uCxHFXVTraxMf4arTruMki15hu2SnehLPBpu7UMr2jkAhUuK9unghqYLd"
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
