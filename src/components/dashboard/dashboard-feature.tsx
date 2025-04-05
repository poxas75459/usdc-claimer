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
    "h1YQhGbu6KdpN2d9kkw6AWdbkWXvpwGGF9S8GcHaEJScZv7ChiZQrwR8RaEveDMkPFFKw2VZ9U2AmMnVXLShQHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28diboMQPCFoZbwDxWRHPGDbed7nWuWQFfJXUXwvM4YfiCUsuZZVVeuCmDHy4GNXGnddejKgdxUW5kRAfAhkFQ1W",
  "key1": "4MHLZeGsF4NkbDB635A85ZVkv3M3X8sJtUeEqetb9qER6RRrdBiTf6K1twARTy4bVEWUrX31xnAvMYr1adgMqeum",
  "key2": "4w4WpdhfXitWMjzC5s79EwwoLBoYPDys34WiAFzFmTmDerzdTGbQ5t4KJkr9HtB6r5C2dsiM6o9eN5dvmZjAQwC3",
  "key3": "3obem1hhN7YAsxMAXFiXFgy1DBkuSgiaK294LnX8zrCk5QNM1f1roNabki1mmKRkqtPN582PR6uGyCwrPpEsWuZy",
  "key4": "5FcgeEDmxj5VDJjXVpe7H8PKmBUVRYGyoLyovpogzGFuEvq66qXFT3zDVturA651ARn7LWDuGqPseQ4qr4G1WGpa",
  "key5": "35DUuG6YKsEtxzGxwR46heJ4z4sjg6G6ZtRgEFcCmz3t2aQuSJT3Mh9hZDyFhA2JVXQfmFiz1iV6eG7MFXgzCPSQ",
  "key6": "3chEETgXkqEtVRT17UxFuDzi93kHHvtTC8ZpXuNUeJ2HtJghjuxzW9XL9e1axvcTG1R6zwqgsVyUrGhpMTAjU8e6",
  "key7": "2tvTdw3GTgxvDchfsBU7QwQpxoCT9WCsBTDXqW85EkDb5ewqZndLL1rdaVQ1oHmzL4FG1PoZQ3CWGU18bA1AaJyp",
  "key8": "5P7XwVSiHS6mB8vJ7Vo5iqdKWe2CXpThmaQrAgVPHP27ERKEzD9LqRyrgktqWViW8U2rfKna2CJRwnjpzBEzufF3",
  "key9": "5ciZnV2wi6iy5bEZnDwueQkxh5R22Cj3M3MGs3puBk3yYcHmxmRbj3MvyXy2Qzs6V2K8DpQHExT2NBv8ghUDzpVo",
  "key10": "ArAZ7ZqHDGETsccCHUjTysj7etRrCG7oiYrnB1oof3XHJbxyWwAEfm36L8pB5DN41x6pAFE5QuWDQoFUQWYmUAs",
  "key11": "4RqHhKStgw4of1FCfsLTFgXX5o8dU4HMXY9kzT1YvTihF3RSj4EvytegcWju7pncHpXf4dVB4E2hXjsTQJtjiTru",
  "key12": "pHVJGixizV6gqBdtfc26A1sG9TnJFSkgLVetZCYaDaQNyb1enUZn4wwAetBMiuRZsPzRNxjgDY1hjCztekadfGv",
  "key13": "4x8eLnbPZhjX8PhnTqwA9h2bj3bdLknos2152McTbLL3XvDNigXzUBheQ6nX12GwXk7idwK893CpgMsz6A72ryZP",
  "key14": "5TbpbP9F5kPFiVub9HFgevYJ4PC1oNczuMNnRKpAfNH7yxornnmxPJQBXiKyPKamX7phsuChBUiup7RzUfb3gfUK",
  "key15": "93apQH5oBmc6XVoghDYNrt5oevdeqtRyGGp64k88YQbhdh3zZV2E4aUvPiEMNhyyjqTK7c2q9razmkzFUdbRsyG",
  "key16": "CGVpcQXWchMFN1Te9UryGjRJn4EwXV53FirzLT1EGq6FQXm2AAhhdDsZh2c5ocFVToBbkAGEmJNbjkX7cajxR6R",
  "key17": "3DjXm7Rui85iTxmwLe5kPv7kzQZWw8A83SCEGKVF8Yi4u5HfxXhDv1uoKEEF2BbQPz9U3ocfHmB8kAQH3xdPBhCH",
  "key18": "2s12zD2sLDj8yYZazV7uJW8ZA5dyFGRAL7zEPd1gPzco13S4QnhBgQz8VWhcitsuD96rvbxo6zxzbBajhHebmvyz",
  "key19": "4b9RiYGnp9XCBnFQRNLWkmHbVaZUHHMeWEfKxC9hRTfeknCj11QYuRAsTEHqvrJaHCz1av42LfNwBgdspEaNTHXk",
  "key20": "4EQVWY2dNCj1XAEDf2AoNwayD3AKHPGa3czcxP2bCktA2y27h9voXZH5YYwqsepkEwZNiqGWBb1ZmJBBSM3CgdMq",
  "key21": "5P7d5zhB7myf3Qadc8wMtGG5Jfdk2aMmK8xG5f2rEL2HmogYTKfeRCHsW6d5WiqjgLVNDkwUggZY7dK2kug7MvZL",
  "key22": "2qY6AnBvNhn9Ksx5bvSry9mW6cn2X8xc5Vki8srJa1LSYWhsWsJzDHumbo861YkBEPyzdSinHDoGh6cMiYy9mGjo",
  "key23": "5eRUDKQRW4CN8bimMW1e2jiC8qMcmrjez7Mccpo1MCwC89vDw66ECc5dYEvqHmxUrMjiY7jNMBwFhmQiJmLwoK6B",
  "key24": "6phpBJsZtKCJ5Cet4Zk5SsusWiDsmRAg5nrhKoZmCdNRYUUd8XRUuMv6CV5QqM8gf6bheRx4wkU2joZ2XTaAvCj",
  "key25": "5eh3fQ9CJLWEFdVu8ziDCErGdLLEupuryDYfweuDWZy67AE2oU68hMJqVTGBsjSVxuV6VMaX7DFoBmeSm7K78F5X",
  "key26": "4gRp4ZPug5eSJerV3jx2q9otEBNmxsVsUDcE42ccHZ9hvrVVPj7sonutWZB2S8zUXce74dTfWEFeZ1pUckKngLBX",
  "key27": "3crt5YEtHZXokvmDBnjNAo4pD4Dx2Np6dDD9958oGbUj5gGcUrHcaAWoKiUSYJny1nHCuCxHduw619pNoGRk5aBh",
  "key28": "5S3Whr7exUYv4K387yvpE3xv6UZLNPRg9cdp74T7Pu5YdUAA6bg8FC11Y4r2TxuvngpP2hbC42uwHeTTmfKYEf9j",
  "key29": "567HMGKc6eQTMYLcokCwjR6uMgvBprwDk2C6GNELzPxaWr3TxFnpnALqr892yrxhwPPV4XWaZ7hGHHouKLpgp2uY",
  "key30": "4TBLbcaeaWWT1tnhQEoLgWanDFif4WGkjjGMwWzoWgjFWxknBaCbyh18wKf4H8pLvZupApo2wYSnJ45RGaEZkD6e",
  "key31": "4qRN952Kuaj9mVbaP594Ne8sPwU79irQK4qtjxmCrnwb8kM3bYJpawoGVMpGjDjuZzuUzQwTnh6CNY2mYzTAsM91",
  "key32": "551Xy9jqJnTwxoDwu7J1yZAqeoScL7DMCP7txVUrYNQRDuo8okdwdXGEqcgnWy5SsGNnurwupXMGBq5MNmXVj1k4",
  "key33": "3AtLmQZ9sstbVo11XT5zrrRv58xDp4n7fgZ9pPsfv5L2dj2X7ayq1VP3hmHFyEVJ2WhWZCdzsH9nvXsmhbQZ87pY",
  "key34": "3Pawwt8h2Ethh7zFsA9T8yQAJcDmpS7nbz8CjxAJjcUZhTfp3FmkjdMqXFweBf1fJbkibbgbcn13azwiufbks6dj",
  "key35": "293oPmGCMXyTWWSgforchGAbcG6cmcRTgZu84jhDKMzfTWMp6if15DUfTsMwtWkLe4Byr3Tcp6QnHq1NzX35NhvU",
  "key36": "3p8yyuAF6hbVU5hSWii3Q4MHrTSnzNeUgsfSXUKbkEyebc9Wggue41W5dwCGdYcsb5hovBMPjX7RSxjZT719FUvk",
  "key37": "4Jc8Mi52XdXERMkU6TvcZQXaPo8t1vKxfutKM8hz3NJyhwyFyuDzFMkfSXfhCPW4Ur2CckRQ9jvE75nZcRM15EUb",
  "key38": "EUXTsckjQD688Vbrazvucm878wFvT4aoEtAWgfTNGGQjEDfHKc5TAyLYVBnr44cWWeL9qTzrgaBcLYLJNJr9qqm"
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
