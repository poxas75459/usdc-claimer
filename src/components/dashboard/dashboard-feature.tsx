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
    "4dDBBzXCLHh3gvkow6R4J4ETbFmGXsfjCVDpD3xPPAJkLF5qCoPBtak52VkTGyzBQuxvFjuixvYJsYLoLhKdr7cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wcHmLaTDzPeic8cTxNRAncP3n9kEwRqEcrQjeYCaDLVJHbu9g5KGJ35hiFM2Hy4utc4iiSnwDN7EL9vr5QTqhCQ",
  "key1": "2ZmQ9TzUG3vFjiqwpgMY4xm6HiEJXg6f24WBG4umFG9LrgnGmy66QyJzHdkyAS8ZbgePHYvopd2eYeeUFgJ5Dbd1",
  "key2": "5fZXAAnct7d5uA5juVXoyWV5reEC1RM4BBxtG2PncVjHLTNkNxRZKhNDB8Hk9tFUQMLwaPAVNZPgkUt3wyVTWFk7",
  "key3": "42Zfek1qrAKTwXkXawAK8F5yecXg31qJuQpvabvGkFFTARufi8i3cVGW6vHZnttRi5XViWz3w3Uq467TEVY8LMPR",
  "key4": "5bfUb27L6CZTcjgTp327EhwdXzUfnZxruRZKFhcsfjtoQV5tVS4bMKmxaheuqoR2bZz9Zbxsyg2Ls8u6AiTXgxa",
  "key5": "5dSWcjYhLL72oUHqyUpfDZBc2HExMV2kkHcDBRNTze6oJ2CxsEXvYXUUkvpeNmTWaYTLtKSTuKctVomdhD1vffNH",
  "key6": "3ULQfCa8D68Z7R7fyp4WW82Y7t32fdXSrVVerMHYdedwxYHcYCNioKFn5c4SigaDLKTyeqmFrqYF35wujcLn4puQ",
  "key7": "5UgnvobhNRwXiDNiqW6Ah2tY9cZk9wxCkuqNtqNuQeL4FZf1DzjywSFLynEMaJ9nwe8R818qp7pR63sUwtchibTz",
  "key8": "5R8pBckNWhagZbL37THvpr4JdAriAbY4gR8JXRtDm7KFfJfifSQgg8sk2BWwetBdypbnwkZgYxF33mywPYFf5BJE",
  "key9": "FBQtLBcPWiB2ru9NyJ7QwZq6bZ681nm6NPrrkkvtpXCShNWqbLu4ZrGeq3s3dkENH68cDoMa4jZCkwzwfqqVctm",
  "key10": "U72Sa2BuqH32KTDT9UwDWx4Gi6Wb4zCaZHY4X3PGDjj5ggbDqGoPAnv6j5ZaLSxM5NSi6jDhXPF2xzefvrrm6gr",
  "key11": "4qgTy7HaAXgorCFCg1569Wbr9XSbEzeTXC4oWmqgQisGf5cxT6FjxwK5qkGZZD6WiDw6XgRTGx4fVsJUxAnrp3Yv",
  "key12": "2YCRMJBvon8ifhfZyGh1bPK48UmftJZTRJ4NYdxr5W8jjsYryyCcsp1MWaTLCuoAK6xkhzndMa2VtHUZtwwLUTNW",
  "key13": "2inNfcty2xZxVGQNxWvqc8TmmunjRyseczdQoEAW9xZL4bbDCNC8Gy6vFBds81QzdwW9LTGaVvVkr8A9jwuB2h8F",
  "key14": "262212y2FgfASb3FK1SyP77tLA15k6i3ENC7Goe7pNGK9xKZnoe8QePeWypnzdkeorEnMaxdFNpK6AWz1hDsEF3v",
  "key15": "612HpxG1SEJU4WG9Fsqgbh4M6BCKVGB5gmNG66c4Kx95rPTiT6waCNP2SNYHDBSVreMTwMqwAFioF47eiiR95h2Y",
  "key16": "xJtM8c5QnZJGSSyEXhq87HeN3Kg22oRsspvHA2Z3MAt2WSqnqQJrtedLxCYubeVNSw48NEZvxuySiGDDD284GyX",
  "key17": "628eTGnwfQ7MyXfu8iKB63keTbERTxoftGhRxX3oHnGSypzidykHw2uKvoEvpgF8FVBwV9DrdzYAduzABDC7BiZa",
  "key18": "3uvvhBceDKqMh4u4Qssj7ZPcGRZJXje9tmYirdBrHByYoaDXVfZeT4ks1WoTgp5Tz9pdqt9jvcLfdG8PtrkCe9fu",
  "key19": "4mPkDJgknAvjxwZRQe4RxqZrmax6nQkbbh7Q7bPmD8Quy1TtVGHSHaxBaNrA31ReBw2vQJRKy9sZzi6fXpRq8uPA",
  "key20": "3ZeNaxasLikchwPTj5uWZnk1XV1XzpzggmgEbSWm9PRLGhkKUVAtpyejGgr77KJWrBEG63bqsRCWAHzrypCyijnp",
  "key21": "7mvQyNkYXBsL12JU16wW1iywMyVjunQt9pre8bEP5vAY9fxzr6v2QrwSvYFde773Y6r5qKzbGZsCHxfSK2QmMTq",
  "key22": "5TtU7TUQjJBDnW9yKLbev5Mh7efuA6fPD6zMzWnuvMxZnq51mK9SRz8i8tXg9GVsP6Z96XdvZYnqevUDkjhnhpvM",
  "key23": "5tRTp8zytvUJLLjH6ZD5Fw2gecRiZgB35A3PXXdiHpFMtM3ew4jhST9XqHkg7ZAqWXP6eb7yRgRKTyce5ZBbxSfC",
  "key24": "39DghvYz7ydUfoTsHh5nScwm7ctPspeKUot9VVG3LKcVJR5jefHkeixirG5zHMNq6XLaozHqSJ5avZevuu4gUX3p",
  "key25": "3yU1L6KWegAd4tM2JKrBL6NqsWnUvsNwoqYCBsgpPxgrR8qgmUY6n3H3Y2nhDu6QPrwKaMqjEkJJajhumRwdXXsS",
  "key26": "51n6Zveg8QznV34HE5Qg3aTYX672MNbrfA4S2hAaRwjxetSGXCHR3pss5vjydPRSYq2GFQvUaHmpxEzwrVwskYYj",
  "key27": "47aEC3ywy8KeipXEd8Ng1LWxrBQwDPngwn3FJriCKeXRKxzAFk4RBWdVk4hDkqQBKGKcFnRNVWe12sVeg5AcUCaH",
  "key28": "PcGm4eHjQaEg5ZnehuvdspQaiTdgBJpX6ry8UU3eyighJdyvmLVqb4vjKun8EeriMpWfUAYJXKmDpZixrW5auGX",
  "key29": "2F5DN1itQcfRmPb52U7oiyPV3n9ydgHrrj7Csut1YFQWLiAoXBuZ6Qmemo5zgc8zY3kGCLweBMsEpo3jLR6vgnQN",
  "key30": "55FHGN5D6brRQdWR6vHeiE27bcy6i3SbFiyQSk6w4APBCLT8zM4ZcrwtTLpL9EfDqyybqAKQGPWEUhYPnn4zzfir",
  "key31": "21LrsejKdfkdyNECLxHqDEswhEhr7Ge91MtGJHv8oaQFSQR4UjMbjBJeaU6rfPZYGGq3LzL2H5PypaUacPsrQQbv",
  "key32": "fLdLExwC6bk4AgeAgYaPcb2Mec8BWYC2VU2uzTS3Hsj4Ef2xPChwfVePjCLPhu6PaEEazkJtyYRYUPtugUVmiko",
  "key33": "Cam74p2R9A7VnNyCmSwYGUUbWRmFn9d4vqnndsCUEeFNVVTFWgDi4mXTzCPFkuxBmaEV8wRyH7DReGKc4rXgZSo",
  "key34": "nCgbYEs1nUqhqArdBXJjCVTXEsqLA8u5Y3RfvXeAbjcvoBQCkREocULAvHoeCfJUxej15EihQ89hUCixDA1uijM",
  "key35": "2cJJGZsjStT51dVhLzo3zAMYTxrCcEYhZztZmM3mDgy8mhiwa7GFgrFyV851Utq9ZxwvWk2wWFgZJGeKN1gikkn4",
  "key36": "5mySVMtdDh5DjtrG2pT7TyYXY9kuHMiUpEYtHkfv7UGR8dMfv68rQck2jgw38y8ywJCwXuSMgAtMAzSBzkLi81hs",
  "key37": "5c5S8JnY3QZFnmYPoRTVB3L6Da2JKD3dvzcJKQ9NxL3uyH9m5Cqu6TjzKcEpzcu18qD4qAvSTdKunCmtsMtgUAgA",
  "key38": "5DFf47vPnetTVVDLYwb3VqX8M74t3p5yhYWQS1oSesZqphKju7eg3S6GBAXWZmRBsq82tLLhpRWC58Zd6zUHetrP"
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
