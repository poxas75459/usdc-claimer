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
    "3ehjiwseJ2vWhc3d44sXNxtQJHQdK3YeoG5pJfDwjr3ydAZQfxiSGBfiUPJcrv9RqmB2qhVuSANm8hpLWifd1HJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hkq75UhfkzQ75e24RVEJtooh5WnbhwwCnirTKDWpPwSumZRWqn4uBeZxhoQ1pK7MuVsateSVqvimKtTNU46fud",
  "key1": "5jryHyt6HJe58sxjLMcpRw1ao17YEtsYkQLNRNKwggL8T3UMFbw3xVHzwFWyrHBc1QycAVnDVHKaD9PbDLM1RZB5",
  "key2": "3xhEd9Nqqy3Wt3uQMuVLuVXR2uDFporNQy3EHoUHYceVoygcENh4KnxuEizaUn2fntcRF4so1pgvUo12zV2aWSuy",
  "key3": "5LdAfzdXELx6hzTbGzHUeCaC8maXJ27oyLEp9jbdXt8vN9C3ykNfrwZLZGMZ3jBGa8xtDEiDTriEcLwHF1L2okCr",
  "key4": "42M7swCGgwLSDg7TD5h68fgvdwtCZHjbWZYiTeGRBVCZnrL6YRvFoawSdzQvEWDrWQBPVho7P8kmbGAyq6MZZaSQ",
  "key5": "SaaD7yz2ULAQWMFzzM5jvT7kKuL1GKDAwgksKjnNjsrbsZD41GB5QYVqV8ZLzvebSMtZUSxAdeuuiT7RJa6Zvfo",
  "key6": "3h2uPjHSCfoSBxfzohzzLi9vWmhWYR3xGZMJqChy7TxRyoRGQU4XtGRg6REiPMwBYNuMAC8JWMLyyWGhPStWxk6Z",
  "key7": "4WrrNEQTvDdW1M8755gY8DV3JX6T7nFNyr8ifqQKycN9vS67aWZ2CxXm3gfdsomS76ihC1VB3zpYcy4aCKMh8Zor",
  "key8": "41tjVmjMuLu1TaytgUZVv3xhbvH9o2NfrP9an2zt5UdQzKmFNNmDXgur564ZtR6BjfGZP1gEWCMUFS1ApDsiNDiy",
  "key9": "4LSraCeg2RmRDMHjimmrnhR753QrY1iRCBcrZBP12GGxGbEfeatqqXwRTgzi8UDiYdE9DAoh6TiE2zs2BvEzAfsY",
  "key10": "FvvpK1yK5TN9zs86tQ4xNbG6AV4GcSfBS2EVJJNokt1eLay4WSbzH5EYA9qpCVwtSuyEH2NfmxvkEvqkkvzcgtT",
  "key11": "Pqvu4q7NLJ4BrjxBkBdbWmR3nZYABa24bueJA2PkAFnZuWsvq3aPHpRTNXGTy2Nm8c8jdW5aVMiNoqCpg9b6vFR",
  "key12": "5UEaygiP3zcNTmVBdnQJmznDK7V93H9xTwMEd9mts9aEjLmbfZTr1baccJgSGr7vxFwb6Eyfc2rjtDZ1M64VPRGi",
  "key13": "2QdnBQ6mRJbX6FL55JKnL1myXeT5nK4yG4dmt3ipNH7abCc1Y45B2iuELd9YFdw33YVa7e98nZn6xVDWSCz1WMNG",
  "key14": "59nDDoR1KSxD51iHNJKDQQZ6rGipe38w4K6uCUMxbMZypsNV22LBjbznXwKHsPXk6SxAoZouiFkDQWNmEfAbKc33",
  "key15": "5JUfpxXGLp8ZnEkucqfQd1wSG6JME8AhD4myJT7v9KwkaTfrhZP8GgfcWiZhbHJUqtWyKjpcGeKSgG1BJ9xULSsD",
  "key16": "5nU6TYdpHdtS9Uw5397GCAbX6fQpu8erx5C3SM9iURWFJYtcrZt2duwLZUswgj7SoaJh4xBvQ58EcNsDzvKTsgpE",
  "key17": "4sEDrENEb6HLuwggingg12zgJjKYCMo7ru6EXrNu3bWT8hADwZsLCDpvvWryTWa9TEPsRhxwPfS5ALDhpBjVBYpb",
  "key18": "3nbgug53ZfiJrStNg89TvmziMyrnAE8EG1X4i3wcoEgSw6dPEAF4Z4HmsfMtYRJeufzPzMAmKnKqRsidUhNKRHtL",
  "key19": "55oBvCi7JLCKVUwafnJGbM67DWiVmpgyMHMgyMrGYvY4NURWUYaqLBM3cybV9Qo3rLfWYudEwNAJhNj6SfFL41u4",
  "key20": "KH3RqZzT6errvfE2ExDUrfhY8pyhUnv2FCMQScbAUSXBj8EBE5ta2osgYQ9rq7PsJdjSL189RkJDJMrhmUwxrVM",
  "key21": "3658Epa7DzV23CuqcrcG2cUZCr3S1ErabiivCVsiLWAuarEL9Yp9JLSWwEadNUVDEFMdNmYYECQuU93CooSyQHc",
  "key22": "3EPj3bxfovmreCforiMGJTTzDtx63pM7RRAZJSyqjvg83jcPHnLHzJY99q1BssTSPyhM1D37CM7vGR4eVo9h59ZF",
  "key23": "5zke9DHXCDNmzUFb5xR9ePXFvieGeTBGdKw8n9BHV8jnBrW9XkeYFXWfA28AHxPzTHqeDL48hkmZpaChdLgpthkG",
  "key24": "2hoUYsdSjrfC5oKAwo5SvXqkDPSe8N4d5YPohSYm7EN97ENXseiHxJgZ2fh1M7772qFSxH1aUFyYZAJ4LBrdiNLn",
  "key25": "kimdJGTiXuMXioMg3EQXDmsWfzZ7ugqa4hVpq7JdeAug2TZb82Sg8B6JCxV5dg93gryGipG3t2a3Zn4aybBjJmZ",
  "key26": "2k9ja4EbnmoPTkuASWnkuzrLztS6ZCVzkp8ZNMxtfgENGQrWnLVXhzZoeH84LTVjt8RN8yJzdVXrztque8wE353Z",
  "key27": "56KRdCEruerWTFd47K8kC9ottkQa8uX2KnbqYoyaWJkpCuvbV3n3K3dA7XtuqGVaWifjJtv4KeZ2iJMrrsTwwCjV",
  "key28": "h532qppxoGteHtFDHKymKUAbMnVpJwwwRC3j4znDo8D9vbNvKJUoeQT9AfQEubA3cUCgojmtJKkY4c6NKW9FYgY",
  "key29": "5RbHC2bQDDVjHEJyAkwHFnd9w7Mpc8yY6Zst36rsMKBwvxTFmyMEj1ptTjPGtxGbNsUDrTTkWiWDcoV3w6kZTh6w",
  "key30": "3cZhRrhjWp4c9Ac6a5qbWn31o9GCr6wnRb1vk3EB9rcCAJWBgmdzRmNsDxFNWEYoTWMNAfXhgBM2gYVQSkYUsBeB"
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
