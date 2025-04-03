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
    "2TBDkzTbUEQg8gNkyLyg3nmp5waMkBTQJ5jj352Qz1RnqoHWRcW71cZFK1sUog2fjUXC7Rz7dj3xEUCKv1ke9ESq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvfSvoq8gijiAe1b5K34KQmMDog4C5pdDKjg6LBnNWk24ZvqX4EjkMv3MK36gp1BzYNTwS4fMKzaoAdLGU6V9jq",
  "key1": "2VPnUVvRBrMBs4J2Ye4fZ1BgonNGGhQnfe22kwgBY2zDw26LfFZRTvQZ6c6hpsXcwfm6VH1q6zS1KoJpWvfXwCXX",
  "key2": "3it5RKv87YEgPh8hyKSGGemnMwvucVNjaH5TCe6To6QzoH9tnf3dcr4r5qPQF97cKk89iuLxjXLyKvf5r5nPHdGp",
  "key3": "26YU7P9rrY5ooZaDd6jMjVptQeK2ZiWoovtSogxnFjrtb88VhnWa4MVUzQNTASwBcEEz5ywsdni6S3R8axXUn6rw",
  "key4": "L6FQ7Rk8tNjF3WzbcBAqgtUGeHtXbB8gZ4B11FSFoSHy6mmo1gh3bD1pwY5cokDrELE7RoYaeS22dhTwWpPvn6y",
  "key5": "476ZVtH8cwataJ2JevHcbwnQ55SkZT8rn3UenjZpsD8cvPxd4HLzLFSx3YH93DfAZ9s4Cy1kdDYcxxM7vdyAyYkA",
  "key6": "2EvkiB7mS4tN6xpXo76FbG9iJjXmZtUAWchto27E286M9ERKLjHGUCo66xDyXvu51MgKMvBsWAAYnTPFnXg9Cf9P",
  "key7": "217qnULv8f9gtTQRee1mfXoYxDs2GG5UQvtFzg6GSymwDatfxzc4ise4ZYJVQFa5Y4iwSBJggMkSsoLWVzAze2TD",
  "key8": "2f3ns6c9p2wPUhbXDj3T1VAUSTSVGerRQoaUL8csBZVcnVchoKaAHMq73mgqnF1s4ksPNuEc1XFKiTfur7dU4SmS",
  "key9": "5moVsmbkuuZkZD2WtWxEaBU4XrG485fyDfK4cRtrRumonE3qmoGmZ51SbPfWPZF4dKh3JrxKtKjBMqE5r1DqusfX",
  "key10": "3p17c38xXcYPniDN5ym3y4nmvFGqbsCcLZntx3zwsiXYn2bY9CJdDrf63c54Vwa3bcMn5cPEq4vR5xnCaTsebYhU",
  "key11": "2ASWzDv1DKmPY1Lj8Lgjk7Ya9YDGHdmZGLPsD1zAM8kwqb3TDubqjUDq7zFzgzZmvREswd8G4danD8x5pDDFdBZz",
  "key12": "2aDNFqFKj7uNkGsDj3L15u4DSTQLghbytYnMooXU5wCjbQieuMMM4VAsfpHKupY55eCdjAvCbHCrY5o2YNTAQPdG",
  "key13": "5a3UnqSEmC9MBdeqnJKweqi6G5xShHx23VcYdCShhXzehWGYTbddW3Zn67hKV1dxu1EW9qnMnLBJTm8SZyoqtLEj",
  "key14": "4vLFMqdvPHbgGJgxHJrUPq1Smc9zM3WFy4EQ4pUUqWLi8FonWS5n8rzJpuk4S159XqGXWJzoiLMEGfKVJxMNQQ8P",
  "key15": "3mwC7vCftV9KmiJJACS9NYXddiAiGYqwDz1c5zNYJWtMVJYTdtj3tkALFFtEyQUegYLBbmyivFjs1H8P57EUuesi",
  "key16": "31oYUqGMPFtiq4ig6KtAx4zXH2PpfFmj86ySJp2FtgtvWsWhygJH5YhdK587MTC4frzoha24qHRmgCZhaNRdVDzL",
  "key17": "59nUUzBp72QXyUFE5awVLEKDzETXA65GEVftAMvXUcfBRqPcE5XVS5dCgnM2UQo3dsPHwGLeh4LKGx9pjNuxHxTE",
  "key18": "5iqxJPJy6kYb4iwKvgLP61uFNmdyRho69x9qaqmNEr51XiQouvRU3Um8o7VSB7HxGP6QYaysXKRsi5EuxbRecBTh",
  "key19": "d2w1EgL1GTfsVqyrhFBRKVDFweyxKsgMXpMDym9bFYFEP4Q42KGXM9ACby7Utm1kqT5C7G3YFehEuRjMTRakEZs",
  "key20": "4qQcn8NFSbYFxicQ6eDbZoju2ecqneNQR9tDdpuJVwQpi17LbgkbTLTViY7Zhr8JHD5L9QBSz75irziXrfSVf5c4",
  "key21": "z1B2Gc9r6DLmNV6qYuMHyRB6mkh739ZaA5Tg92H7YNRCs76o2HYyCSe4NU89R8QCT1Q2dWn7jV5oMh54jrrzUtS",
  "key22": "5RpjA7utYEyRsRMM2uQwpTCi4CLNitx4NACLtaBxaJ84peq2qhKkrZAjmgtj5W6ADVRk5tTEBAd3wMaPc15fDX7J",
  "key23": "3zWUuu2HMef4fFWWVMTWuLhwaPsPtTwtwUwyGymFyd14mdW2AnFdLRd7vWQqoSg3k8W8fhFLnf8uTG8LYcUvcL44",
  "key24": "2sMyULR3Srwc9kNMqtMbjDCXDb1RdVJtXvKcRRxvi16ZUWuiYCfp2LywDFWPbL7NzpxjK9XQ18or2qXFSSmGLxxF",
  "key25": "7YEy5zr9aLQTCfhgtrEePqYRCKYcrD6TFWMKiDkeX4MbWbwUgXqDa382EE8uWdwp7yiw5pfRHQXBKNxDrtMKUXb",
  "key26": "4QmL6LyPAwpPGFKRiYQM4s58tKnsEh5UYfsvsiGP7adG8G8imVb5ret6hbn66NmmFUjrzfFgRqQnRwTn4GceRT5w",
  "key27": "widj1i9s4tRDeXYHHMA69spMb6BFPDVLuv6hub6j3d3unaQUHWajVnZqoMnBvXUPY3SrcBFdK3BbTpUbZbeyihu",
  "key28": "5X8pgE8fTvXMaKMzBTgDVBks7mHQYNdFK7di1CJyRq9AJoJCk3nB7n9f3auepcpV71wcWoeKk3EnYXTKrj9cL5Ca",
  "key29": "5dHxAeRgbMUPJfqA29mnEvn6ZDdfcPdLgTrHWVyDpwWv9q2BjekfNDQUW3LwuQBEmDdN3V84fuyeKgUXKg2DtAmb",
  "key30": "55K4TGi7FQ9UL3cAh9Q9RegHBn5nuuY58sWVXKwo5TEx11GSyxZ4CGwGfZyG7zCTS5ppp5fNkLjupMZZf8dSoQEr",
  "key31": "4se3TZxBBWx9Z7jeTKbxcPeCMfZYgd1UE9fLPdFLTuLQqFnkXZyyUZtFaNaKMD9vPKP3PsHtzAA3q8wqvkMjVJeT",
  "key32": "5FoZQ8GVfz6Yagv8shvuezoYpvJAZ8Tgx1NHCUYsDFYLaNFKhgtTdBYWK3gXcNAQZBfhFzk4LiCUHV3ffA9krev2",
  "key33": "32oohL6DPXYb1xy1GaGpmjGVQrg8d2iY3njEczDY21Lq42JVdfmMo8eTpZtEjLz5UcuwUhuZgUPFXD89kWqWzCaV",
  "key34": "eyYHvr1w5b9scDMaFkNWem15yCVjNDwpPN1BS8kiuowAAhC8zsxSGe4BfP9bM8XhxANMJPtDLeoaCABouu4ZdYN",
  "key35": "yD3Se7ZXUELuWKsuDSSWPw5kGhirDS7a4sojkXGX3bxMQhRr48Hqo46dQQvf96WpWkxRPqeKYUz2dFmK4YYJDWg"
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
