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
    "3wgouFMsm2utvgRpza295QQZm3sBiBvFRndUHh2Na1tMYMjDsjEy2BTwGeXb1cpnDBjm2XyxCmU1A1pwg4NrNZAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33CQLgQqTc5wRWNfCfNvd3BbCUcyvC5GfE189sWk4BTYsgVzHviYLykFsmYpm5eoNZ5qwz1aYYqr1hcCbZmumxRD",
  "key1": "3BzzZEz4DKGV1iFHp42XkKBVnPmxBtaJqSaZ9gashqKwyXTX7AgSkUvYbhAabp8QrXEmUxLtECmFUBBEabhfzYAP",
  "key2": "4gBeb2RKCaZ5qxKMv24mgWGAX47XkekgMEdFEEazoAVyKhRNYH6iM35qwtBG2mKJuCm9V4ZocjoNvJJS89zTviD1",
  "key3": "4T7yVy7EBpT5KXMV8wbaZrFRxPT4QzYBswfJrgKgysYo1zEnBGtTQMMiSdTKxW4PtBYajARPbhrnWFbwrk5CC4D2",
  "key4": "5Qfdm2k1T7P6yAycPEN54dpXN3xePUf2hAbmUH9hX87kuhEA5nFasJiracRS8vKExgG3YSL4YqfJKHRudffiLT62",
  "key5": "FoXPZc9pBkcBQA23PiLniinLJKpyMhGkps5LyaTqvxxaQqssoDNe2miAq6RQH4zanvtJYPkXg1N1vxgA8Exi2by",
  "key6": "5jtbEcW1AWjRrqJT1ZwCuN9p397jKExuRpGRiS7zjGxQYW9ppqfYg8pYesqhcXZNG2bXnSn8Dfu5sMZVuFo9B6x2",
  "key7": "32U8t7sxy74EexLNPZ7px7uEpoW6qW28wXuaneJNqPD28yuFs1UxTgBXX59XRfwRApNHPd2fhmenEHXAiZFaLU3d",
  "key8": "5yALMSkdGEg5RD3v1wwYusSjakjWR7nEckN46tM6mx7h3SMVnfZJe5JpJBTCyugES3sgnzGXPHgmuiQ2chk1Geep",
  "key9": "yykuW2Z7D9ND9hZUAhvVcYKUdJrwtFhUxbEuVouDKnAMyBLxtrAf2AaDNgx3Q6VsqHJmA337sJ9CT1yBWJbidEf",
  "key10": "hq9ENMPG23XT16nqCroH1qTyMxH2AgJVLxcNA7dXRnCrpcKAnSET3LANjgkFyqANiWS3HNSvRLTegu4P3UxgfEj",
  "key11": "3bSQXLe9BTALnN3bcjK8LuJmuXJ5vjVijCxRKSE2fYVQZZSdMcfsZJ6168uYU21FfTFfTmH7Uf3T4J4QPPJLgZxw",
  "key12": "3y6gLVPxRyUB7csq3r56tfmAGLz5RyrFFEdNzmo7vro8JjwNXLGt8Bft31DBh7u2HFQS3V9mK156kyJovEUKChS7",
  "key13": "5p5UeMihgjrXbjXKCaDcc9thJWebx5t9qcy8y6i1Dq1bWQsuJpyX6YCUdN4TZbbXwoK8cAJE9XgbgBURduyjTCrA",
  "key14": "2svy59nMb16vrBPLc7LdTnUkVvH4pDpBP7SvJ414iKcwT5uDn28oQsfLS9naF423vk7ZbmU4KbTkgVBDP989Utou",
  "key15": "1VZf2AXfvdRDdW5doot2D5r6jVRiRNNYK3CnGunenUBbz19Xp2XVMrfvHC9bXmBxef3SwwfBhQP3Y2B6a2Brj5c",
  "key16": "59bRqx6qjZoSrDyBHPmnqteatZzXhZH5Mpz91j4dWHhKfNoMkVvw8bnE9fBJB7PspZzPHpY1FMcwvaGrotaKTtnE",
  "key17": "3TbHJrJCjJk9qk2Gj5Qf3fj39V7Gcz4FnfDVSB6rxhWZ9adu5Qf7ikCde6tKUQHSuHQ2s6t9q21wmPbSdc4ecqK4",
  "key18": "5bhvd32vgewMJ4WjMpRB9D2mE7Tn2b2zFvhsQfEFLFVvmx3aRMdcfn2NbVH11wvnCf7sqigEJwpgpUCRZZpEnqtA",
  "key19": "2j6ToBfuqMJRp3WnRZy9ZhxnMsZ36MMHTFzb9jmkdJQYKC8hVyjHoSQyazm5axDzPCutdZQwj63oGYwHjYx37uyE",
  "key20": "4FYbgq9rNSZ6MvGVhjSbhMoPtenzuuoTTjfbqmj5hLZCw31g9cyni9M4E33AhWa5SEKy4uWqKhFjJBFLCDPDRSP4",
  "key21": "3BP19gUGHPLov4hSVWg8k26S62Lfm6YSc9kCrmK33m4iPd2spLyY5YJzpXyGzA3JycRaJUsUHBhY23CJs4xdyu77",
  "key22": "2vh2LefaX8LVa7HxcEtnPDkRUfC9MtA8sYt2Y7ajYiHTqBUuFReJX5QK51zeDrXHWoy8eCScwgELEAUrbgDL1X1X",
  "key23": "8wggJgP93VzmHnYxozArC7GdypM6szt3n6bceaHgwJXSuegSrnpRrJVYeHELq3iazjTyXtza8aLoeuDz4wGAzkW",
  "key24": "L7MdJkcy5MuHzY58yJ9neYBQ6YngrzyuZmYMM1g7FkNHeHz2zKW1ngQjf5gD9zrWRLo5rhjT3TUd3ouLQTF4eRf",
  "key25": "48Fbm7VsY3SNnrYWzF8Bs29q2j1y4m2Mx361BY6wDFHrAEvxUpngK5rQb53dhwu4HMtXQNjX9M8fDGaYxCLaVcXE",
  "key26": "5rdzxxJyD6EvJfcJhnV98hgM2sYAPaD5PR7nQyfWWfAGExdVEf7xmMyujfiqSe6Qo3bQuovhVPGmAKhW4voajoSN",
  "key27": "5NbzPCd4VDkEWxFb8unt2utjnrJQHooPyzSUW5QLwgJXecPBhyVNDKzcrEkL12Dx8sTdN8fT7zNDbVPgyoKxLKeH",
  "key28": "2u2Bmbag3A52CEyWQNdfNwRVfa5hf2zKz2xSKb78hk8F2hngTfYWoDB5rUCddLthwpTxyqnJfswKvjKEvXXpUV1p",
  "key29": "4SDWem2J6TvD2ezyP7fv9BNp5eyYdqi6Sz32iZttuUwKAgwp5eATe3ELoTeaM6h4Y4pVCpFj4yrkADjppprbdyJK",
  "key30": "7vMxHRAGubXvBgW37ypywX4gcLAjCkSWZFRnEhmt3fcFRDd9t6N5G9dBYdTeyNqcuzj2t2TtvkmaMDB5NrEjWkT"
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
