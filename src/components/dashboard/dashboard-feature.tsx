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
    "3VDo4cu45ErQjiygLuLjp6LiVxguv1j1k1QCqYDUNuwmgirmXshBzL3u47a2eLrqaHFP7aZ2kFbqqzYwK6P1bokg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fo46UBGy4m8XL2B5uRrt5c5W24uzsWHukZi44WDkPtJmsW1qLqVajPprKbXmjDyNuCk8a7a47pPB1wMewy3K9M2",
  "key1": "64H8YxkPQCkpFSKeFmDfcAmgoNKmjWBTRQrP4BCP1FYjS19Ar17NW7zQk8qD1nkurYCHe5vMe8zQJFrxf9BPfU6p",
  "key2": "2qCGsD9fGY92Hj3HH4XEgPPsx5ZNnSSfeq7tRyD2n3H4sFvkKggUQJkU9VMYqVEbecvPAzRwidSFT27gh5oMPyuP",
  "key3": "4hYxDrw5dzNA1xcCKH4faVRZV96T7Demp5La2r9GLUi7iGLafzdNrurAUYYTRdf7EEJFjC7bn9brW9nb5N5nKG1L",
  "key4": "3152Ttn1sSFBPqDJymVYDEbagX9zoeRvCptbbKQ7VBNWLBK81pDMVNvn9xLxzmPt5TsTHdwg9dtbFMQ6sHUkxNxR",
  "key5": "2Qq1ASuWbFcjGGFxLHPgBhyNk9WDG5XnqPqG35Nvk8fbqazXWC1PXm5MBFEmDcni8QKAZF2Nabtu8zF7ykTgqWmG",
  "key6": "3wrjyYvAnJ88b85G3b3DkiyJ7iJdVwWgwcixD18r6DYYX9B4HM7VSs1CSftXM7ZbU9UmR62SsSQzjWr3fr7pQLes",
  "key7": "33Hw6gS55d41b1hDdx27XxtiX9uYGmnHpY2zo4UoLh1a2trYCdqUmDxTXqC5zR2rhQGVgE6ynHatevedzBhDFeaG",
  "key8": "YmeCNLk8t1JgKB9N5gHJF3zXeuihZ3b2xaykgwh4crA2SpdGmkntEmLaFcz2reEqeTmZJRvuzrPCzJjNbpmhxie",
  "key9": "2ds3cSPfk7EnXxjRsjgFmgeCvsKFTZt7QfK92UcxFMCSLzueLVdaMqmjno2bw1c8Pz3gvQDBRuxx4HW4tv7FzKBT",
  "key10": "2Nm6JSpo1xLAYtJ931fM2bzdNVoPb2YUwmz1NeMuoPQWSXoh82hisR7K2eYZm7PGn312qtyQ8ccyYjSSTEQEAqLZ",
  "key11": "UD7FctyvcM2nR7zJHgC2TsqnHw77rJwLfwWD4wC4f45UJF85zd42Vj85DmGtLJ57ndZgHW4THPT17CwySXVT3vp",
  "key12": "311uECt71dtkA45NnzBihGK9kLo5NnRBbv76HhZgYwvKJhJPHm75AiFd3noskdAkSsxakxbK13TmwUESZ6WTRFYQ",
  "key13": "4zCDVg2qJ2pb64eQrYAvqUstVC1JFSMdFPAwMyFrYRP5hrwKfxPqZNK2ieadHeCobeq5UnCepDUTqf5EeEmUtFgR",
  "key14": "JHRF4gMLdfz9vS3rxx8nNF4mcfs9GPUqEn96aaFs9dcJuxM1RWxFUjzB3yaHVWFRRFdGLCmB2d6C1eZsugeopM7",
  "key15": "2TjEPiT7ahbSx63FwywmipamqPSZ6dokb4tfPjkHwQwmZ3fG8P6j3BihcyRnwYSsWXuNWpG6b9Jq6MLHxGW7QgYy",
  "key16": "5oRALwCHoZdhJYx6PoNHKPf114saPH4m8idYLwcPzVeB6ngueNdEA4ZWgMsmMZ7cNM2SoUevTHTF7udDRGsPhgjk",
  "key17": "4u8BUs5Tq1QjWtacXcjkfZ7sAEA9NK66KMPeZThQAdRAEEWpC1b6ZWKJPr5Eh2BWJbC6d72zWZojjeKnssMeaJ92",
  "key18": "3dFn5cAtNZ67hX3DzcSmv9wyPyxKgqkbdpvFGeQg4wBZvgbsy1AVTM6CfKdxWMpdUP5T5aPFmGBK7Br9EQVmSCi5",
  "key19": "3atjNGJq1CFqnmi3Gf6L7iTmsbr1L6w6NWD2BvHTFJzbJJGL4rNbff82NYyhJ8iUDUdtrzYrEKubXA6xEjAxxuS8",
  "key20": "5TnXQGhDp4wPLoDsc53Kmwc8bXrZ66kyW36NjMUkAE1vBBpbBBkupfb7xF74wy3i25mAdWcee7zHsHDM9Y2yZuGS",
  "key21": "5Ry1ub56RXbhsnDRSFMtfDRzYYeHF7tyjmSH3xzipaRRNFZEWQxNW7PP6zmMMs8yv7F4FBJWQ6WcZ3CBkwECfEYQ",
  "key22": "4zss23fvrY9tsyVirXeuwZfF8Zjr8HpZqwe6DSxQHKyqKSPWwxPX66mv5nE4jQr7DnQCGbryjpnEvbsBPDa4Fhxn",
  "key23": "35G6RNSKH15tcb7tmZkH1yLdZ5BfCSH1EYcwzWX7pNjh4WoieW72xHjesTYS7aBoDSyY7Pf3XtADdRXEokYSodiQ",
  "key24": "GVmbpCDmAj1P1L6cDbxCJUviNrJkXpQ9YBRMsr5PeTYijy45Nvuw45K77hSRGsvEWidME7XoN7yK1c4Zs8TDMG6",
  "key25": "KVjdvtPpe41dY3VoYYJkKr9reNgQZBTDmUBwiAbzEaFoWRFBSsbERYJqaz4XjkrwHCgFXg6x9RDkueHWeoj4fob",
  "key26": "kewwhYUGJccUGH6yqf15VnfP7k7jLvLG6VAqdg8XvWmMf8brYW7xpxrjGSxMmxnJxgMoed85hNeRkqtZZPBzojW",
  "key27": "2MKNJkuk4jbwh5v7P3VyXzakbi6fYB5kK4KbCVpmvNscXSqgzV4xDLohUVZAwmX4c8EJ6nNKUFku51SCtDsQVRe9",
  "key28": "3Gr2XQV6oH5xRk2pFYnDtBCSUGxH5xo9yLy6TEtanL6CJm6Q4qF5AAqMwFJUxFAwx4VnwBKm71xXDbW6BDTPy6iu",
  "key29": "5DvYa6oU95Kv9RSpYUKpVXgR6pjWZGkSFuj4TzRhvepu3ZTRfrkhvPfN5GEeaykR9QWAFR4VXMNskDxGsR1roL3V",
  "key30": "3KbmJkudTdneYXv7uUvxsFgbLybwGpzjjV44dc46ManQpdVTJFQowtgBm2DhEbhApdyqBAsHdAJaDKGoriPeoy3Y",
  "key31": "3ePsuDpaQbsXnafJQmQD8gtXiiLMTuzpeyfJktdJyX3R7qQBSpYUjxeLbUpJp7kCzZjPcaLjJWZYzAC1rtE2NL29",
  "key32": "ovULdWr4tEvCqdKLwt2nHbp4Kg3oPRDuPRZC89DNRoUiFZ5cxAZ5ncapnCuCbwprBLudgsWDeHX7sahbWGcZLmv",
  "key33": "4QEyezsnsiu6wH5ymgaMZHEvnpYmgo5PsZ7bjzEFeynp8mwDHM7f8eAFNxxVRPjHmS9BqZ4WyuyaY5PPm2mgpdst",
  "key34": "48WiNLPB8DSq1CtQxT7dR6tUYwvCuinRW4SmBUpGJpq2zSGjA3vgNzGoNPquH7E9gURZNNzQpsfuJnP9h2wjLNt3",
  "key35": "2tDt8EYj43yayiRCf2KcsbhRtVTgmLKi8gLJxqd6MiJsuTioxUcccv7RMbsxSwmYf7HqqPF5omz4LwXL7MT5UpCp",
  "key36": "5krJCKAZ81JnApbUrahggH4U7AirAhpqLLrjPcBTpbXLNHnxzUfF35FQ7RgqPsLJwXqsGrYkg2zdJvbVTswdQEHN",
  "key37": "nCPZAwsN2hDVHKpnkrFF3mAjrXVbudpFgCEP6hF587G2zJ5WJft5xaa6fWjXwKrQVcrxsc9dL95kH1JQwrZrf26",
  "key38": "2SXkJDWC2hjVVYcXYtqUeHLdus41F5qdTK2Y91sBxGUaUgrEmk29yPDpuTYUffcSZLhLJwDU44TJe4tAYzNcGFuD",
  "key39": "3Z95Sh5uXPWMW33UvxKcRqKcMt8NKLFRhd2nGAmYVZaEVmhrNc5PbU49gFnH67fVCcXMwAMeVzhJ4h1gU81JoUi9",
  "key40": "5htayohWAJYxJu5sh49ZCrn5Kf2t9RorWXLXPoWhczCXXhF3P2P8tqHMKhZsNjvMGAdYSscfbnoZD6pgRpcBhFT4",
  "key41": "29JvEbvwUkURmPH4EKMNsvwcC8H13C9U8fmisfW6wsPaBbKAH9hJfoJyRqvt6WMhnjQYQH3rKbKinpaAvyHT82AA",
  "key42": "33yTGpHT8cauacCCatYLwpZemRX7uGnEhauauGXu163CypFC3bifBxb4ffpoAGXkgihpqPwVgv4Nu12ijUeteoFS",
  "key43": "3g84as35MtTfeoorT2PmqoSyCNRXhtD7Sj4FG4ya79YWxYn1hF9s7s4Haxf1w3dgHB1fJcdkbGe12cCxKtJK5qWG"
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
