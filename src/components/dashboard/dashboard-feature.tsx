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
    "3Y1S9F25QffWefvhm4wvk8XjLzhYFyoPQ7R3RgWTivuKtVs5gWehxENsG66WbGNS7XY42A8EPd94hhGuh7gTaNwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xjrRXmMJ8dTWPwCfVy8CtjNzjT3Njq4JaDnV5TyJgwrK5MZ9ZnSVAUREiyGjyeGsYfYP1aVYBT4sd8gToKwDAJb",
  "key1": "5ZF7zubUSgbh4SMZMri4GTgivSfRqJm7pAWw6BHNUeQanA1NnGfU3yjUFZyemhTfyi1NzZnkpM9ZY4mzxE4HBwYJ",
  "key2": "27yYj2GjCETYZFbxRMkk9pMNz3F3eJtD2ZjF3ti2Tw6hkLRHEuVfWhxZTQBXeY61ZHk5rPYtqJavnnetnXWC5dgL",
  "key3": "4a7JfvKf2JsGCq7eigp953wGR1e7wy5A94Tdc3J4WP8UmWAFRgL1GnV7xbeBNxGG9DuWH1mqpSdo7tUSm95Xde5i",
  "key4": "2ug4Gimni9YbqoKE2g4tSxUf61aK9q2KZDYB4ZN8tWpShBnKQNDt77jZ1x6XrUT58GrUVCrwBVYUtCit39uZWfXE",
  "key5": "5AFtTNTdHPWP5F9RBjFDSQrFsjcjrcmqMPyuDXtnwTkF4r8GYxX7LGYfxN2in8LaRkmq8AjMSvvT1Ry72ebW6fDj",
  "key6": "3P5GqUiVjokPWS4Z9CLugtrmZjrtTPbYksyLarrzr1gTXKthpuveKBWJhtPEVLVGb4UbJpUPQhUxwWgmYoxAnWhR",
  "key7": "2WoyXSZo38sfimD8UUve7wjAMzRJa1cdufwx8okvdeGY3Brp4zfo1eLR5UAWwuGKmw6ejsFD8tcJMHnz8DgXZKkn",
  "key8": "2ouuvSkB28V68y4KAHLKEWidhrYxhmLHCLM8Lk8qsrvT38cg1FmvXB5aumKJRc86DLtehFAuaf28ReZ4oS53sFNk",
  "key9": "4HnNadzZ48huNbcH35EUXsXRVpE9rmPkmu1WzVqAZyU7kRXQHNrafkLCBkeBvPE1nk78QuJ5U7bR5XNFhSGBTv74",
  "key10": "2KJe1eJ4Z29hrso5H9WAU9AAxwnWTLM9DDL7gyHY8CgfjKm6SLS1q3tGexvyrCT7DT8SGdD6kTraMseQfZeqW5rE",
  "key11": "2mkb1ZU9VBC3kVHD6v5ryfSkNMnoUipFJsniTT89z8WDj152nMcyadA1V3E1o2BfHQGsJCMb5AEgPzQqRAWSxzQV",
  "key12": "2DoMNgBHt25XVkrN24QdU8EZ2C4RsMkBPw5Ki1FgRpni9b8nP2H2SxmwM46bYUW8j9hM4d8ofWpUeJy26DS4pwTb",
  "key13": "5VRYUwRKbQDp76WENGR13m5EvxRQ56psygjwMgBLVpcLKk4QU1JVDyG2HmUQao5NuBW3xA1oggjMbpFGhXEczgrS",
  "key14": "5iX6bGxc8CXcrWVktM8KBRXW8qJjrZZPjUTorzroPmZg1PcnYzgW5z6iydRNfrmWKS5roYqWYeQH94JW8HeoNVxy",
  "key15": "5FE19unWgVYFBBVZKtuxNC52Vvyfj4oD81awS5oZmJTXFfaHchUxDrpPJtNAckwAtawMnFzensWY3rnV6Jmq5gs5",
  "key16": "4pY3hTuZrrr379ctKYy9CV2LLtxKujmBLpB6xWNDhbyze1JTSDiGEME3wQbzbm65e3Z7R2TCqPFFBGv2FGsCpH2h",
  "key17": "3tRHZZtbKtaoER48xWwRLrHVsJrutrQ5gDEDCPLvjbhCydTy3fFUbiA4Ljf6QHtNYhyHArsgBST5sVpQ9rFUJWsM",
  "key18": "3FxVjMm8rc1oxjXW43w7ocNRgKZ7f3tYBzLsFd9z4eP3pN1P6e898dw7M23eA1H16RQjxZBBHqitoWxAAt3qUumL",
  "key19": "68bEpj9keydgM8CiXPDM7pFH2SsSFRqFu9egvAcVs5oiTgPw8zEoEb3DAhYVsdkNWRrwDH5KQNGc2T6QfaxtT7D",
  "key20": "5tg8sgBvSwn2GhrnVPXQT9Y9yEbKCqre51G3KbGV91NpQGVHGYb5trkgmEAdZb5qt8ed5JEUVf8AEqGyN7ju2aLw",
  "key21": "39K6HjGdSNN3KndU5e5vtyF8csvfVwGhxsAw2qmrQtG6nDAovRaRJtHkfiRmQYTxXsWyVU1FRVYMGhDsY7FVG46h",
  "key22": "5gcUHbV9e3Se7WEAuMqTcQTUgo5z5r3NTDH3TyPFDxmVtrUaTgbFX4NDhFjGWsbTqtdnTyrV5jvUQuvLeS7StVUN",
  "key23": "5F72Z2PW6xHLCBRVMi6uTzK3Y94uct2ZbK9EYw6siALzaKx9GiPQ4qzvfdWQZdUf5t6v8R6KTXZsvkfN3dGAeQ2A",
  "key24": "2LEpbJ7W5FHDUcvCKtgR3rvVwGbQKC9n2NospiD28tDtJpkSWgtrY6xfqfV9eTasszudiZkHt4MMuk4yPhhnG98e",
  "key25": "2hEJy9RtwrEqZBEAPioD7MWBbGwi54LUBS3WvYXhtwTQYrUUk69muJjZqdEYkztMww3u85SFgAi8yRuWrRkYU8zN",
  "key26": "4YkoVDaqMdPTx4bYAoHdpUEH3gn5g2B9CAcLzCrKYg9CuyVeaceT1gbMV7pSf8e2E3uTtNrcGQXGCrRv1P2MvotG",
  "key27": "3rd9rn6ZGvMASSXECdFYtTc2Pu5w17A8Rhcge57vzfUTjvW7hubdXs598qhneAg4nWZZHLYRnk8SzuQ95agM7FXM",
  "key28": "2yx64h7N9xYRxuFN3J2F5FqtMWqHyMU6pkbpbvEE8vNycqMx5Ajxy8CZmk9SxdfHqgzJSeY6htZpCdFTyj8g2jFR",
  "key29": "5CrvmHoibp22nr72erqEhNVatV36uyaCEVmXKRPY2QqvFzkhZUoZrVNFMnDvNiTtc1LBzpqr9FvEMwpptevEGJHB",
  "key30": "5VuirGrECtfS3Q4t5Je3AuBt8o7rYQny76whzzMehdGydwRXcyjrw8ZaNkNELgLQyxnzzWu1bUZYwP45koPwbKm4",
  "key31": "2ui9gSESJXuzMDhLXjnxLfjbpS3CLZSb4yfh7zYJhokmpZ5L7uiEvxAvEo4Xr2dnjaaSGpmvVZY3yoJ98XWMGtx5",
  "key32": "2QgCHgh76atE2gDqgoAmp6P2TLAfyM5r6tu2jJWrNQbfDbSEiovDKYzCD3tCNgL3L5MqeQ5uxtz2EJk2hwQdFPZY",
  "key33": "4FXc2VvN6ExjdEiipqrnyVgGPZL2AvykrvybshZkz38J64ZpCeuPXVX2sUJMYrgac2N3sskxdShVHZFz7LXy7g1p",
  "key34": "7dAGkuNwGiYnaDQjv9Jd1GF2kowXSK1bPHQWAu9RS2hZogUDV41YoozzK3sByGE5tDPi9zpXVprPPZiEZdT1JYk",
  "key35": "4Ef8T1mmadmwW9uNW33aapgkg21LwdDStxHMScCMGKoP1p2pPZQCScfzvNffz9H6DsVQg5CUNWxx2sr5GWpxHF9n",
  "key36": "kdvuN9pnLJh3HjeT7ESnPW8tZ8JsbZz61VqPXyoSBGE46vnSFrBE4E3gUHPvQydge1qAxkUrYW8z6kjgvvDWaxL",
  "key37": "7gXM2iNJ7C5LUXW6KQGNGw2U7mCCPWgqVZbJ7TNZrULuS7CH2EUkG4wHKff4RT64tzJCqWrNLqysJnqAj3nQxig",
  "key38": "K24v1WzgSftn6dLBP92PBvNhd3vu9FCTDga8TcSDaRwqanRbSRzNtTxmPBJRMgYd6h21tpRyEtLL18USYQuFQGi",
  "key39": "244Y34nCaChnbZha3iiF99XDzgXe3CRqLtP7GbfvLMK6FGK4vxMeJcac9gZ2aAB1KD8Y8RyhR233bXY7WAsHNvwP",
  "key40": "4x8up6XNvQaxfdCbsTjw2n7HtFqsXyzKFgCYBMcK4wjGwtoUkrEtNfYwwuDvAVSNKPxUMRpzVswBGyTCwNFxGcZZ",
  "key41": "2o1maMAbZmUcRJBRAK61AwXm4q7vwwNLXAKZV3hLdSj9eP148tEuaQm3Xqs3bG3S6LFGxkK9FiVyLURD8BvWy187",
  "key42": "5KhNqTTpDJTTWNjUm5prpNpx8tyo3ZKPi6SqLQjatEDmSaypfHVtZJubd9PfmusBgcqmxuTN1wbyLZN8kzRFvUHv",
  "key43": "5QQFcJQyMbinBAkCB6aterYoovNf4RdAZXm3RPTKUWipnH8sataqfmmzrYXEzEq1mk2vxpsKtz9c9W5EVubQUR4L",
  "key44": "AJF7fHLoVvNPBacQ2V6NBb1zbcw6Pvorx3fxCRdbPzsjYMQkK6LU82RCNDJhtZjxhq3avt4n9udevDpKbM6yBPn"
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
