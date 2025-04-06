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
    "3zVP99X8RXCeJZcrH7R7pQyeASFFr2h1h2NiLCAjwVQHTWAaynkhMMmVGyTWfz7adLzYSHpfyKHiJ9Pc2f41H1WM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfvnCaXr7Nw46C7aFHtqGJEAigjCg5BG47MpgKbUBvrtNnam62gqgFhu1RPszGwEaHLRV4mVfHW8z66aSEdXsZu",
  "key1": "3hWBYMNANGkTcKqo3kR6yAj3WuP3pqwfc6nYX3BEd6LXgCnKzJvA3WHekqL2WhjFFMXm1bLAQa2WJaT5bKHsuLco",
  "key2": "4A4uQkDWpbGgxD3rAufpQpFejWvih2J87w5LqY11GJQsxP3W8pNg1kELR8Bci9XKsheSPfYoMWHXGnk2cuuEgC1w",
  "key3": "4eucoPoPzr1E8Boc1PwwrELt6jNyRAixMqgAApXkXFXqp31tGnZRezTVNudy6xtQYT6PeutDuTznP6HjsSTgFujg",
  "key4": "5uHWzJyQ5ZXqh6i4We5WVvCgTJo1CPnEpK4J11tspdTiabdV3iMNWboYpXwpHnLdTpYirDcajh5YSt4tB4et8p9G",
  "key5": "3btmReVFgqo4BQa5xsona8Gv3jyahBL8DnbuuQdKK7FjcsFXDGPteQuPMQ2fngX6mugopZ66vpLRfxPfifCwaZ1X",
  "key6": "2b7cYGNyMAJTjJL1QSHGWAYmUGi4BTLuDUSaXA6dQh6fbQHgr4XYWBZ3ifjhqg1VjRic1PagXVKGpBKVcR2CMuhr",
  "key7": "5nbF5VQogyZPyr7mtwoXnbkL3eAyR23JX8PLpKpJVHsVXXfVU7oooCREpRhLMhW8J3Sf92wrsQxDuZdgbEHKnspb",
  "key8": "57DADrUiUsEtEGAJwupsZCYXERhKfdvRTLmF76RcYpPvjEUiWanVTV2SdnTbraKp1NJdMaa4P7BhVA9DVkdAEzTq",
  "key9": "4SsDwn7hDJ2XE3xnYTEgKNc9kknuSVER5hwq4RVKMiYhUDPAjCtk7tyBVaKUMDFm1rR9Y3kyEpqt5CaDPc5o2AX2",
  "key10": "5ViijvQnnryq98LzEAkWuoqSYvqcuuDYJGLFKLBgXoN9n2LYxkEgyv5GUSug6feC5tmETTRHCbDyagRwdj6DxnhJ",
  "key11": "3VRjNkkBNEquWMcWM8JaBHFMfV773e6EBbJ3fJ3dALGZAzyjYJNDqQHWJmj8W8nGLUS7LZz7UbQ2YitXowebwfq3",
  "key12": "48kn1tHazcnaPSsz9VSGKhCywt5PNFDYc59QCsganhFz2v66es26irQgf3TjeZZamLYsY1nQu3U3eDXbMtcdzM2z",
  "key13": "4tYb1H69HFdafe9eoa6cc7TiE5X9YZa9QPPootuaEZspyvsy8uGYF6fKZJVEGZuHu5JnfcjLT78CzHTvrDmmHjV1",
  "key14": "qEzh6ZUJmtnRjQrB6YBMwPSpCJUsnCCG93U9yF1wQPdJGJkpPKF1SieGjVDSnmouHH1No7cYCrNeo7xLwdez2vH",
  "key15": "v8mGcsFPBwSpjfmTnApLaJ1xkcvJdEr5MbZybWhQSX1L9XmLnzGQcGU8Z38eT95wXAdQeM4cnFZqjqA5Q2ZZGAN",
  "key16": "5zFUkebVVKVaxofkBzfa5JtfGVhQ3iP17jq7F5nF4pFUcTAjHfGzuFFUzhcHarg9LMFD3TQMeh6XLMs9PnC7xLkq",
  "key17": "3c3AWdBpeFeN1q74G4PbDPdBCsnrsB7Khq1wrJeZTKXi6bsBCCdgcrygGE5BWGrL6GEvFmbSnazwQx5oCqNEck1i",
  "key18": "5Hmv5vNZ5YRTqSognpYoby285bZrUJtQ5LAN2sJSeCKnb11gMq1J26qS7zqHUZU8cqLKXXSP5NE4XD1njyPL8Vm7",
  "key19": "4QmUPMSBdXTco98FfjfL3ZgbjPFKtZV61SFiinJWVNuF9FgSc646GhsKfp7eS7fvXPm395KocjP2G64edM4jHTtB",
  "key20": "4QEgBcfXCSymSKFFndfRQK14xn7pzFCf8gY15EkX68AQLT2MANnSq812g8kYzZ6J3KMgbavERfBmeMHw511eRteH",
  "key21": "36vs2kxHuLiHtaiFhXgpwQUzt9bMi1JeQhFa1HSABRtCe6jdF9QgZuUZNm11np1oYoJojiaPxp7vAvG559XHu3J",
  "key22": "5g3WQrggzCmTuvAZS5NJPvJwcZWtncZE7AxXTvLwGRoBBJemC6NDy7GCKj54Bg1r9JxEhASk5ca8A4yxNNdURhzC",
  "key23": "yQYxW6Wvw29iE5wJky74qWrVsEWPBJK3VXpczpyyx55UnkfidLqEgtTZbE7jBD2Qh8LPc1LYZfwwbvkb1qXfLRM",
  "key24": "2UiPvNenPCq9x89S3vG1KnFwV18i8jmGpXs9ENM5AviwBBQuC3pCvS2J54N6nxmtK7PNs3dTpXUjm64qfzWqVDMF",
  "key25": "4bE8MdmR11H1dCq66TjJTjNjV2N19M8cSnZXnfTioP8ay7RSLXf1pzeWGD5g64HCq8QnNP4WhzDTo7sSFVwmTYsZ",
  "key26": "5tAgu8WATiocaLdSewaE39bPgTAWRnWc8QDJzXav1x7S2JxzJES2ECyMxiHL67zRQ1EPHjoXFTV7Fxw9yADf1CQb",
  "key27": "57ZEjv2NzNJdMHAc9GzUTTLyWRqfqBjyiZCae2wXswkudmQpcVMDHzBG1HhHFZ9HtzUTdTdTGggEoAZqqvKKMptE",
  "key28": "z4Yo5v7FiVrahaRJNmgw5um288AQ3fnwBeSELnnaVPJu47dwpvAkKrvcjoKuCS4Y1jWf65fCEHgVe1P9LG85aV8",
  "key29": "PWaKmypxznviYbMdQrYJRh7WgTnmkxKiL9bEi53eEHS689LBosSfpDW63jveFfbm3LhsazYX618FKk8DSaKRU48",
  "key30": "3FVF2ufKpMqsc7mWnSaqVVF9Vx8zgrNLLf3MiQ68JcfdPM2K444Z4ntrDyYupkXLG4U3A6PfPRnUfpEvs7oPfJs9",
  "key31": "4iPgLLc71b8fT7vhKyjnaF5W4rmoJvYtbA8GcefMhLgbNU92vTS9AYevyxmMj2PSv9FLjzcRVHfbg9mzSf5GEY24",
  "key32": "4YHSffhabr6YTBpHhmNDttZ853QyE5KgzgHNDZ1EzT6pgpZNW2oSFwbwy5fzDmrupPeT9Xwgy1fippFUXcw773Xc",
  "key33": "D9V2GBFRwLdwgcHvPFQ7DmYYvvxFCyuvRRpZnjFAsSYq95X7mbEbTHHh5LKbSY1fGb7HZis5HF7dVsQoZhoT2jZ",
  "key34": "5nKeUAqp1SBj3DfNtrhDpyjZR4Uvp9tw1uojxDqSQxXhu2sJhRKpD6kGioL4AaysPPRZWsKBS11UdyHKTHomvenS",
  "key35": "3ULenbxCwaX8V4khy5V7pK6g1ZCShUS7SWMJKYdAue97XycXV4QxwnstuWU37SNGNSVciHLy5vGFpPnXe5nxrmaE",
  "key36": "46dDzqm6qpUugu7BtMA7t4TYxsGikhAnq1go4yYYUWngs4BuFYpwZmv9Y6JCyQW5DcUA57EdAXBis2NZ1aTFc8AV",
  "key37": "5opN3HcfNnoQR3TykbBHNmvLVyzu5SJ63m7ENj6axk4cZqHTtBexSeDcWiGA5UNVMAh69bFcyqCcm2qhHC1HJLxz",
  "key38": "5uGjYVYsnCupqEW1nBja7Ri6UkDmynaGb64YZHQ47Zn3L857NLkoiVqGSE62uuMLuHZRYwAHtZE9GmMa4DFhEzws"
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
