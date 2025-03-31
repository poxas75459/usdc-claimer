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
    "64r1kEuEdeUccFJkTAiKeyuy8a6JWJ2T8a64SarzihGk72kAu7bUBTyaG5aerrJR8XRFU9XNJuikzRn32gS59M2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFmrz39v5Xu31T1nb7j6cZCC76TBeEMzS4QmvxYjQW7Ez68XwaBAXBo66C2m1AsxSDebrh14c1LUdNUVEexm16G",
  "key1": "34w6mxFfLfN1DmXKy83sJPPt5HNEa81CoPq5UC7HiN8CQkENToyYVNtZvmYe4n43pdpiGb1zcsex4dy8VFa9TNef",
  "key2": "4ZTXpxKHwMJ9rRrLFx68KohowWWNebfdVdvcSn4Poon69bNMsqVGPj8PgKsCKJTBXXviq4d7uNUTmFYF7uCUTRp9",
  "key3": "2M78Hrqtkqmmzvgd7Eqa2Kz1RK7jBUc55pMBTJtpNqZAWHidNANMmR7ditawb4H3zGcmobwdeiA3nFwg9WkMidwu",
  "key4": "4ao5QtTSTTv5e8pRPr71TK4gV61Migq6ayEYNqU2puF2L4qNiV42x3qor7jY2iX9pNWLKQib17zkpWwSVBnLqZrZ",
  "key5": "zj8AFq81YX4ncZ3SNgrda6MxXVkaKcqWv4vbutFobgWuBWuHdq82GmRCdnVsGir6DmdspjnwA1yZTnFohP6LGkM",
  "key6": "5FwhLETnk3EYhZ6CErU264cUhd93h3g64sBKpkXErYnvg7vueH4c7UAJh2wgjREYYwZADLxC8RBmaeuuPD9ByQfY",
  "key7": "49nwU5UL6vWVby6WSCnuwsh8sNdZ99YQdXp3vqENpweQyVjdzKWp8GRH1uXSw19LiSx7CSQmHZLRYr8CBAokRdgA",
  "key8": "2dMj1VMCSMZAiCMj53igAY58GRUAcFLmrCULC4ZGf2wpJTVx5AFssycwZUonYJSMCUYFmi9Q3V9hTN3dWvTN89wp",
  "key9": "59UM3d6AYZk9ejX6rbK1vCrfrauVC73Ln4qLc2aUoaa2UnJPmBT8B4ugJwZowSvpJf5NCF4CSQrWCBv3KBmqn5ZD",
  "key10": "24xR4c9TqX7qPELQJK5Uc8AV2eStQybwbczrwdLznU7GpCDrR3yypBYA5fb4B7kbaH8mN4RhU7mn73EVrgko9zST",
  "key11": "5tdFFnrd7fZwt9f3YFq6n4sjBqJzyk8fR5mHb5G6XJ2YWPpj6Um54EwfTfsaq9MQvbTydJYgyXtwWaJuf6cKELor",
  "key12": "58rstM6keNPaV2uodUfiW4KYUzz6nkCozXn42WeHEw2bkenoBmBF1DkoCtuhVcoa1qJtsBnyykSoauktgLTjP8qf",
  "key13": "3HAkAn6rhz1BfF25dac9zMvC6BKUHsJ9yo31F22VSUXwY2mjKvicD8WN1ECHiJ96PiF2Fq6fhcaLYHUtu7JLFHUk",
  "key14": "FAPGcSguAHUhMmFnLxoUFdXxePVmTxnTHMqwDwEpPKMcQGwox1BL4bdE8eAW8L9pqoehbNuCanc43irdJK5UA1Y",
  "key15": "V7ptaZH2Ypiq4S6YZ88R5YtFLMBEox2B5uMe7qUwzLzYYovN7oA3uQDjZ7GozSP8RJBjVrrQjWmejo7zUJZ6Gjd",
  "key16": "5eDfyiDNhy3CjnknvnHSLEbBwMJbxz97Ekiqnsv75vVRo2rfP93uYpvyieCXCSxt3pxNdyyjsQcFoJ1LUBM6qjWn",
  "key17": "37vnT9BFAUyizqzdFScXgU4aeZAUPR1Zutci1ZSyhgsi8GvFgLQgepN6aBLCEgjmUfWuqYR3Xi9iKCvC1hjXBAMj",
  "key18": "2dWuZVi4hbntq6xnSWDfBrAhtuy7S7V6fJdm48XRDXAwor6zjE2osn4M4mhN8TPb5p9xBC2fb7XaVA5UEf9oFrs6",
  "key19": "3YPvHmqBM7PdjE26KAa296p4ifWkwKVY4d2djTBZJMVyRMeatxajtKSQCn6ezmAJNZg2otwP4yLHyH4inaBFkGfj",
  "key20": "3NrbHuUYReLKvdNxuLo36h6NBLvwiE8ogg2HAi6K1UJAHJ8bAQiu9wpW8cBTZCuvYJV1aPSYumfRrTC6BVXdfM5X",
  "key21": "3Ac1dx4aGrtKcxQ2PhnUPk5HybzyZ3NkAXFkCk2XvRd8cXVWYTdFsu3MPJSH6xzh7mXjiaDsiqvRNKrBXNh5ZcUA",
  "key22": "gFSvfDLvLQT5SbpEHMXtvqUJEEe63ck2qyx1gRoLnw3PAsfmauxAuwT4EVozpZ6vnjLhbxs7wgsvhR6i2NtD3cA",
  "key23": "4As98sXj7BZ64yp1iKScwsyYFPXupqYEmmmTpFPMdyjd5HJcfsu7nHuxbbJZK5CrMxARdcDBQbgCJJX6AidgPT3q",
  "key24": "64s4LN7zN7zHitYCaxcbqmwKwzsdp6BQ1rthhe7WCM8XE5mdfVGaueEUyqBEc5bbcJt5K13CBmnXVYRob6EwFhGs",
  "key25": "MSFyWA6e1sFSX85R8XEYWo1sub9815oeraTQ291p14iDLewb9Azy2kfWbDYBNqNGZaeVNtPT7We8RBch26zh79L",
  "key26": "2bAgtTB3MuguzoMYenGfpQWrFJTpkogsnqBg9PdMyXgyBLoAWnCbHZQUbDga1Uz74ZB8UBJ7TutDTDchfuDXhyrV",
  "key27": "3Bmj51Vdumb2ThF6af9B1VQHiahtq339vsEnDWafNhTrvKBiBKrC4WDfzcpFMBa4gxsfjtX4iUMB1wTExwxQkLnK",
  "key28": "3jgBjtQ12hhzqksiyLzPn44GXxkRoPxVpVeCsKpP6PwXX5n78FQNTwsaMhY7hQDmzBPeBrurWBy5Z316SfzsaSkg",
  "key29": "5vBE9bK1y5Nhk9J6NnpugLCvC5tUV9iWEpj4HmSVndBA2Wpg6FYWhCqHMPQVeHKcqvysodzAvecsV7LYiMXPDMGE",
  "key30": "2qcFVqMoJQPwBCqVMTpGQZnCs2bap7PRE1QT7N5NdWYRBoTeMUZpCwXbBJ3FQrrbY2uLvzQuubrnBbtdGKGeAK7e",
  "key31": "5th6Mm2ncYGvnqoAudahXQnySYR3poqPTsE7LPNJTJNRFRH6AGwv53U3BDe5BRf35uzBda5teNtvNUGrcVZHQYCh",
  "key32": "5TkBgwYS1QVm5mhhkJAiaPMKJgYikrsX6JEGovhCNvK7y5nxLAXKGume6RGLwBNqKgX2ajecQo3E8mWy3xdUHNY4",
  "key33": "gjz2Q4oU4U2E7ryxqfEDj8FELSdc68vLCVGutKD5iCd9oL9hto6HsMtSJB2AU8KePuu9wqLDYWEow6B1uvrJmQZ",
  "key34": "35T8qWjpAGtG3v5ZgojNefR2KT8smw12ArUBd3U2yK4W2FBjeph7uCxSbBZiAjjwe63hCZ1w5tJXuEbDpC6oNLBP",
  "key35": "5xicWi9LXpZ4r6i7u2ECS2GPYEqeRZMMGmNa45VRAd4ekAW5G3vRsNLpoJcg7s53noe7Pp6i9QtwbT9ZDyzAexZe",
  "key36": "4yabtBp2v67H3iiQZYibf6UpHZDDQt4cJzUu3uj35miDQgdAjfsrNPyUSYqcc3kWVoESTEAjXrLtvvesCHWu2TsS",
  "key37": "31fqUPHihvtGDVybZwGbyAAiEhdch3Xod6bktmS5Kzh2YNG6Ekzjmd8Wxg6H9L9kFRXejwCRaaptEA6b6U4x6yqK",
  "key38": "2ir1bXsCRBWANFrJxhKYe2E7J44VedgLU5pobqbGBh9A4d4pd5yK3y7w12gF9Q11sxRQhBxAPP2pQiRrNSQbLoM6",
  "key39": "3Nc9HPHdqPB3QPLVPCJbbHzJXMVMmD4X8SFgcNM6Qm87KgtReKfBM2TmC6Td7YJT26bicrKd5HupxxAeYUtbnTsA",
  "key40": "2P67B2GAKCNh5dK2fjzrcijQymtuJkpwqMH6Q34GbusMnXipgbiqsqkbaiqf6v4DCcZvSWeUu3accQk8XkAGPSjL",
  "key41": "3RnRT3by5fEkoaJy2fhCjrADBnjh65Ldj4g6uZJgbAJXfmYdxu6Vi5haWZmM3PkTxYehpS7YLbWaTZ9L35p2Vq4a"
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
