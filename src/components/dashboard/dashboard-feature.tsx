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
    "2tCgwGyb8hLVCRV4wMwqa4urbkzwwZpcB9fxBoeUvFWpv4Y2wUuURnz4hu38kVFNxskhjEd8rtFbeUFTc7Z1R3gX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdzSChPxHaZtDLzMeojVkdLNQ9dQ4A2w7q5GhUjoQ3n7eRaejARnxmRr9L2Ye95unhKVxpDJpu3Y6ePVenEHEY7",
  "key1": "56ySv83S6grosrFyv55J1Evz7pHqnp3eFyoaQn1YBT8XBDHiEeFbtLJ8TqQKa5tYfN5ZhctQ32P23Er3T9uUpaE5",
  "key2": "7K7F9cdGrWxvpe7mYvUrhLUnhMmXmU8qRdsxze65mRvgEyqYzSmw6uEBjiib9Jer1EVrusQJEpw8N9b2nJrFvg6",
  "key3": "4mxVovYNL9sKWekB7ujvy3sMUNSc8NeUmHr4Ze9q9jpWAUcRPHvpwahZ8n9ii1B2cQd5DdACxMWApZWMjCrvwKf1",
  "key4": "2zECbsbWVwvpgJ9Gi7KwUHgg7KUpjpd5TBjSCGqLXQcoTrmrexPSJTMmvfE3wj9HKTF6LidzsHLrvuW6niWEDRX5",
  "key5": "3FuNbZTZGTfYYMPyG35NvVuzSMrxTgaJ6dgDAFyzUs9pXWhSMzrsnEcG9wCrUNZC2CTiL3AJjG5pWQJQhQPnMgaj",
  "key6": "uEUXMAmZGjwujAJ4tTpWuLAMKmYVt2oBCao2HiWYbfhXeZNce4DYq4Ht1moun7um38Edxqv1VbrTUCuHfQ1MFkZ",
  "key7": "2b45uzHyeYP3BK4gWb1L76ErZwFUiPbLmLhyfKwvfsR7LoSs31urgXbARb6gEVvKzN8AwvjcFnqvEaEu6Awtefp4",
  "key8": "58uBwsbNCQj5feXapxnrZ9egeWtKXmVMV2s3AaDetkUHyeBSjcdC8mGv5vaNKpR95z9NUPexqgbCEKU2KSEDfy6B",
  "key9": "32q9VkuKrVPwEyuBh5BDLYozm8GwdVfQ3TnUTnep9SYWVUvzTfvbshZV6n8W6G5TkySV2WLaCXUBWVbtBoLYZLZf",
  "key10": "4CTJMkokT5XEJbgWwsHueMcbvbFA9SaEATG6wninJuDC2a5KUagQ6kjz9VfBaFfhLfpM1XyrNRTHkDxRj2JWjPtH",
  "key11": "3JEwU4B575eKMYHr16nn2KdgLtoU9PXGV5s3t9MDs9AmuPuSSx1aMGsgScBsrvCUKz8QTV586tk3ymPQHzyksH85",
  "key12": "3djbFeUdvookNVoqKmse4yW472REvJhphJ7rhHw2z9wSSFheJmeYayooGuXWTteqb6PeCtnYp3S4vngh12QRLJGN",
  "key13": "42Negwn9Dspu1B3nMxyCQDZnGcFC7ZMEdkR6uoLzFxTt4qz26H68kxV1hKuE6ocmi2yU5dAriXehp1AJ1zAbfvL3",
  "key14": "58ptL6RHooxcV3QoN5ad5npjn1LU2n21G3u7mynKZyxhPqNU5LtEnRsSbFTBy7s7fnMvEeb3Mv8bWe2bqZpfZbDr",
  "key15": "xK3eK2u1u8wsTjh33j7NL9PTYSYLzx3Djid7iZr8neqo4XyDTznneD8uUdLrW91p3Nt3VwTB8drsYgpSX5pLDfw",
  "key16": "2Cm1tJ2Kdyt4gM6vjAtsispNj8KzVDJMntjKqP2dzKNBaVaAthQoAkPC6xp1G9CqJCkFgkTUZbeLqJerZX7QXPL3",
  "key17": "36tgi78YGMKeJfNB3HZw1KQgm6mXvrHR14s2fHeWvhJfmZrXZajK5dLHCUYu7PQL7Ye16RBDKskYceoECZReRE3D",
  "key18": "38UwekP1miPnEzHR4U7GQLMAoJUHBoBSfBnjoFW4cp2dqf5audKCV8KB6ZhtKEwXMSRgJe5JZV8j96MTycGrs86S",
  "key19": "3Hwr952a6GRSmMCyCCsfKcbtrqjC6Vfm1uYJurPM5PsTwDMEr3MpxnX8YzTirunHtZmg9mJtsZeh3EJ3XS839qmN",
  "key20": "3TiNbeagMMQ6x9ZidHb2GdoWrk5UcvLwfbPoctdRKbaTCJJK71NXCGVm3AHy521FbNFpnB7gv2mWiYAUX1FA1i5D",
  "key21": "3LGcrJCwDkEcY54Fgg4HfyaUupsz17qRAWPpJHueNMp1oetjdkjPS44i2tER7U35V3JKrbM6RSeK2XSNkCQYJ6cj",
  "key22": "2iRajeSjbwLzvLc4fuHgKK6vxLF4XouvLcHHB789WCfxmRWaFVUfWbKHB1FuoK8YdrwDb8sEfoJmneKRwpNhSmiV",
  "key23": "hJQtYmRcWqyKhzTDgbgNjQM2Z1AkZT5L2E1natHF9rCew5XVpzk7fg1r7J27fCtmfh4oEEtWyzozcjYX8fXbpiu",
  "key24": "3uAtDsFK1r2FRwNqGAr91Vdc7J4gBoHQ7TjLxttaaCYkG1pgJL5bSSmNN8BTrwqKCtszHmsKYize3Xtb2Fwuxu2b",
  "key25": "62D9hFAruo5eGqQeavmzMDMmy6Q5UXucLhbKQqydaKKUXJ8qrD8PSRtVvyLWKBZ4F8F8RdHJqEtKbcSaXqsgNpva",
  "key26": "4s9Xk1ZYniheNXJyc2c5oh37m8XHMtAAEkrsBJfdXqkduoxFiw7eUMo2KxcWNfuYMFNSjLuuHHe5mA1ZWkynhit1",
  "key27": "5tjXNKwh24TBrRoD8hHejCjBu1kn1xh3QKqVc7SwwxvLXbLufhkxFqjq152pQdRKhJSZ6XnJ9zcSDMsGxc7bA9Pw",
  "key28": "64XgnnGa7pMdkDd1wciYbQnPbpB7UrD5B7BuqGhrGpxyW9niiFmeazkphVYG3oZySrDeMHF6A9L3GaYVSwHxECcm",
  "key29": "48qEcAZHWUuxLYjxcM53pJG9eJ6T4yXJyPWwhE9Lf2EjkXF16K8hN8pNhBKW4Lzmwt2UCyWwnVJhLKPQ8JXbTbME",
  "key30": "4qakE8SByj1pGnz2QvoyhtiBfWziS9wCMrLSer5vzJwXLRtpP15LSNRmQCbopQkME3Z7S6qdH6wkg4Rmhw2DJV5i"
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
