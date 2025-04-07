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
    "8fFCkxfuf7FTGUaDVkCexPjN23jSmQPXgT5PeQh7iTzxKK4AdfPszYy1ydeFqxsMEyzkRLF7RGTssdEsDrLJ1LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fkJkgUqwmhpfYk3vDMW99YMVJrcUSCjYgEbSfMKyQwxyGVrNMt7JjuCYwy8ypj37NVuvbKxFyLJTd9TFpN5NKdk",
  "key1": "5Tfu8ubwXnkGFduX8rUhyRJdbXW8YKWwMUWF9fAAmew6LKo5rZR7K8rLLXhmKmevbgnBNaGXSkPvixyeTqkLwLce",
  "key2": "3jW2nb5QtbsqMd9onjD9UC3S7goeHHkYQYANCBMrR8edR4amPVedNqQNHbEhyWDD9pwcVee1S6QV4khR1nFBhrwT",
  "key3": "5zLqxzkfiN9ewTYhS55m22b1E6ZY6N98tUeMLZMhQQ7nDLewekXFNpi22dsEXRgv511vzgd9iMaKz7XwZ6XbCD3o",
  "key4": "5bGdqEFdHT9p9grqF5ioSL2prDDTGvyjVkSkp8kGchooogwpAWTAuGpLjjFp81cC1xeMDEyvyUZaNZyZL6MQrGWd",
  "key5": "5LFhzhr7D1TzibkYxfQDqPXQPTYZrU5U3tog8HarNx1tkLexYegQmbFaQMCWxmKrMzfvkPJS2SJGsaPaq612EWLA",
  "key6": "35pv49nAYd9ePK4ZukqqphkwctPg3fJD4WgLVHiEaVUbqqHivaB8pLJooBePJXu4JHwSBG33XdH5k62u4gPCE2Wb",
  "key7": "2SncKKW9vvYAeESboQp88Uq5kFpnwSD3gyggoMSyJonpMNQJFdx5xvmjCPvQQzbs77MFmvmzG5Hq6QgswGubtGzE",
  "key8": "2XXmdYw7vwEe1wHQifEQn9SBHdQYUmNkoCHD3EVCEYaG5Zb24XDahnJ5Lt6HCotawgEGQFm9vbfU81Geher9UjyA",
  "key9": "2ba6k9yx2hhpj5pdw2oPppKKNiRS9hGHt5aJDKLshHU8Ef6xiNAg1pyaNv3CGyLzaLuXkHkEphfBRfSMRpQfikih",
  "key10": "3K4dStKXabb5yefyYtqNopVw4fm2SXt8vs6Mafgs7DJRjiay67xzu8sLkgxE4RPWFEgKiPwqknoiF9gSgcYBVyHn",
  "key11": "4C8BPTMF1CLTZW9v8tcu3459HaKvYiPRfcsgkxqyXQdpc9BM7tozDroH3m1X6KHyTAKN81eMpkTuN8hWHZme7Mty",
  "key12": "63ieT3A5J5HtnzKKx2yawEQpFy7wjVPjmwK6u8fYWoF8nNonTNj7u3iKPSCnuH8KSxPjhqFT1h8SDrAfJKCT9Hoy",
  "key13": "4KSffK1djhVvdN7F2b82UKr5Y4QnAKD9mbbym2xeuTkYDtBT5XbqjA6UhKMGioAVbgqsUu4YZABKnvromdZ1SuK5",
  "key14": "2URVHL3h79GCbGifcZLS29hK81dW1HRExiRNqgWUu83bxJ3LNG1ausscQ9yUP2t7MBZfj9NATS9PyorwrfqTT2wc",
  "key15": "2PMP3WGkoWGATfG2C6VBX2btjysG5LKHhJiEzDD5YDyjJT9Uc7QsYcdbyr82VfF4cay1Vrdv6cbR9kQje9HifwJM",
  "key16": "5mQr3rM7hcVgbVrjjai1Tu6UxwGubT77WLDDapd76LkmoYwfaLZzLfSAFgwmJPGGpEhJyAzvyhGbxbKRRNV62EL6",
  "key17": "4okM3G4hBEdE1ULLTVWeNWPd8vwxarX73NmDVi4s3dtw42PWU1ErwZrTmXkppbTo77LCsQQTqvdtUXJxCVfYB2cn",
  "key18": "ngeAa1tP57eYiQLGzBSLHeyGgJkH8nPTpsxFbdD54i8mQXRiKBb23nW2KjFw538xA3F6JnmUR4YDYQ3j8a5G1wt",
  "key19": "4mRts3KwRuzjNzUTMt1wWJ54uEGvgfZ9c5grbgU3G2pYFnosN5bVbunjGYUxAbDm2M4awpjFv7uMrKG4setUdHwU",
  "key20": "2BnZE5SfxkzjyJHCUm86SCSnYGda6tiMbiR7zTmU75vhaUnX1W282z95D7FxLUJYJxm9opf9ycbLiMQokc8bMwX4",
  "key21": "54Krog3He4iMHzCRsdHZ8QbENcbu61aiWQ265y62WLLaDijwUh55hEXiMkom5XaQs7vj1he7Uy4voR515UqsCaNs",
  "key22": "2aAuMxBfVcA8XTPbvy3JFsnWhwXHV9RaxoSuQ95y6mpCKYGjmWq3nrPLr8NgmDKrKHyRcE495XVtSSajigLwQKbw",
  "key23": "Qqh3ZvoCQJNic2qdzm6AWJGhipEbrQugh4CEoBoYRHubwN9hUc5MbsG1vU4QUeJXuSXnyNAKNwPyenmE31Ggq7r",
  "key24": "5ux389fJypfBAj3hDV6WquyJuLsQvjg7eAhpBV5nhsJyMohrduoTyY3eraM51sJWWPZK5mxW5sGn3vm4haS67ZEA",
  "key25": "6uESeoacKkyS6xRLFN9mz28Z6Z9mFYWLGVCCRZattDRvWhQacioLEM7YKse4gqKKnHXe8BkRaeHLo387vDmKgjr",
  "key26": "463Mbjhe4urjBKeCCDWmvXvVbyExkkPD46tqRuLBNBfdaVYnsiaq5Fs7r9Hbcs7yVV9t6vy2MGKWxtVZBYXXrUeg",
  "key27": "45ko7zxQyMrtPvEFxUH5VZEdjJofYsRA3LKddY3dNgb7SR6MJLfgb7NyADpoNYRBPJ2Rtj4uSEb8f9GD6ewyuM7F",
  "key28": "2XtZH9rkn4Ueatqbo9MrRALkvafXxUJpdF9dZtM8FrkRzQ6LJsxyuwLJvqnV2TVFj8Rpgbnzye7qfX7RTpXQXWah",
  "key29": "4DhHAuZLcHFfdMQ4VYmMndFmTRQKTwifR5JGVfW2jmhBwaFjo5Yis8o4eaeBvoqfxb4jFfa76RqATGg3xga1Q1L2",
  "key30": "2uL8qLnuNmMSw7ji9vwdiGWGzEgJJkAHVCuxhdeWY9joV8SyTjhD5n4QjSLQvhMz2CXuqyiP59wAkFGPPaBFDCrB",
  "key31": "5WqqYkd9Zu9jPsPYN4NMGkoqdNBNy9coMAxk6GjRQky3QWWwtvyvSDFrq7624cpPGwyhFfjPVBKVU8Zr5XbWEooH",
  "key32": "5ZHJMU6MTmaiPD45KXtndkZLBTqkhXWUzydnWt2AnTprdmxcdcouGWkcE7isX8UDn5iev3NkiLrPWGWNJ9ExdFvs",
  "key33": "4ksNMd99ourzkWZm6W5YJHQXtrpoHEhr96SYGyrGVVhWDAKXLyYyewu6Hoh9PzpdmKvPhgXuigy3uL7SJLfX9LW5",
  "key34": "29VoWsyhwhnrQn3NBrKAKZ6TCCynfVUHwhC3SonAJuRoVxJt7A3RNF1E3pC7sCWpMucgpP6LtMY7sSSTmGB2exna",
  "key35": "5q7qaVKSYiu8nGiEKZgyq8hMALPES9k2qzKnsZxKfhQrfAtYeBMYVFJB2GVjhWzdyHYMiCJN9C11cGGMmNaaygH5",
  "key36": "2kHm2Ug8DGu7qHer8VWxSEntVAU78ETMndhFfC1HRymh3Utieqoq3ooLJc5nT41zxq1EGRTwajciVEQAaFfB6dLh",
  "key37": "2iBteWUkwnNPrSQNg4FEci2eZdS5sbkz15QozZoFpZJDpqB2PC3r8N1Tc3BkjEdBHUhPYQYtfEu4DEtAUsd6YUQJ",
  "key38": "3y1c45x86bggVpxKXUT3S6eYxCWBgUwkysvyjLBJSCHGtB3A1KTagbntgxoW9Z7QprX4HE5xy3wxDwVynrq5TtQ5",
  "key39": "4xkMTjPq3UPF5vejNGBvVF7JyjFUN54fo9Ldr6SHSS1H77bzFV4YzvXfYuwm6pNhqibfQp717MPbPVwhEXxtadri",
  "key40": "zApnryHFZDNjfYLEMba2Lt7bBcaznN8dyEV73ryT6AGC9FhaDJRVDrKvALbdUKDkqbpPM1ALFus1uxqmJcucq5J",
  "key41": "JJvfYBffnHgeDp43h3P8ZhrfK7fzYidEREAXb7T1UDWi2FmqCzM2bnvijRaVU1E4n2ah29roAUvJrndJBLHn5kd",
  "key42": "2vZs4UVTA1jM5vxVzusCRYoUbBEfduBVKVqV6Ebazk4Uqi46kdQXXBPeEcUiZr98wUp9su9qsobqV73o8xwt2P7P",
  "key43": "3HTyDFSXogYycU4fzN4ZcfG7goGgf2TwkYTDbdYaL64XH6rHgbtKGQgLscvUaj5jVAv7Dq6bDshT71gHcr7BYdSe"
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
