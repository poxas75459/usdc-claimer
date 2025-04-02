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
    "2VtttDo9bZGuNDnSbAnRbitDbJ9tki9uJRdEThQhq7QPaWgwV3j565UNbDi3kWGgHjRJAssjLybNBvxbZ1nBytMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u24BGtLBqfqEzZbZCKfjbDsBcaE1vnAi3xPiykWeFTNLbD5SdZUj3vF9uGSdnH68D5mqdKTAMwrUBiRtrdDU6hj",
  "key1": "4pbYzy9CADZDYSCrezLXJZYyhqvbGTjWcTw34f3vTZEJa95cszYxdE8WMeFGjBLT9PXM26dyEuJpS3TJXQGKdGch",
  "key2": "pewtCvNnm75eXAstk2iZg9smGseKxx1LuFzaysM6z3nokoxS1SaXAzArpKySioF8ZHzDwRp7MPz9CLm89oX8SjQ",
  "key3": "596iQzX9zbzDZTmTKBvGnGiawnxCxgfRWTXXfyyEa6mmSjLQ179yaAZQKpLBCUY3ooX5v9JWVMpNrrphXmTAikpe",
  "key4": "2cpse3gagQCbBR7UKiGfuprkhMkoVuTyyrWrCfJTNMTzLxuaCkevy8XayKhuCrqUy8ugLB7TJdM42N8f9UP3V5ii",
  "key5": "4HjxuGDXrXaZUZBPQXQdvbYc2sh8vcvmNerDPVH9VsjACDYMiLUF2LKTTXm9Y7svneh7dgJ7HfnBseWNgjuLuXrY",
  "key6": "4h8JspmyjnTD7PLWtjdTHCmYVja96G7C3EJqnqNesTNNvvBjxVHM7tDrrBbWuc9WgvPZM47W7x6TtaY8mrzjGDGu",
  "key7": "2vLTHAwB8ATP3j47Q5uLPtacsCk2jD4Wv2j259f1iM3V5DxeojdxaCHABSgJMpBR9fLqfdSvQk7fLzToPXspQfb1",
  "key8": "3tsPqT1EuZPxKRqNjuujrApQ7RzX1Yxymj5uH7X1wXLfxJyb6Ngan1Ra46eY1xuJUgdzKro5gJMpwn9Fy5A968aU",
  "key9": "2nUoQMDnG3hLq2k96ehvaFDFvqB2mJRdw5zDS7ou2yPco4t5GMoyu6GaACch3u5iFwsMtieU25aLJceVvWh8h1f4",
  "key10": "9axwyegnqtthcCNJPFYQZxvtwzVinwHURvvZvUQ8jfb2jdoJWu8TSsNhutrDbtcGzMLirDTZUJa6GwB64kW9TvP",
  "key11": "4k3bq2EoRgtmwthA88XBt88LgvPX3QnREzP4VJy1kaixuFghCLab6ox5No22wyiwS5BnA9qmLaJ5cYhLVsJjkx3r",
  "key12": "TtzN6dMcNpCuybggvGfa9hoEzS31u4VwrftpidWWqSgPxgtQBS4857obBXa1s2VdW5kuDqorEnJuZBJCgcgqRHd",
  "key13": "2kf1j9YxSPmYwsizjMFq4xrUUSqrQNzuwWpLyoPpZBLdr3iBmkn2P7SXapsCfNNCVFZ4TySkcdC1JmnuLymTc8x7",
  "key14": "59H4oU26wRvqhqMy25cWcd9dncKAhJrXpnx6UvUcs64Ym74fjjTCDeGwC3p4Xwvh4D8X3YZCKoM58pbkR8NS1WJx",
  "key15": "j1T4oNcQ9RrbnvFKMdHngaiDxRpojUXfEXwZGkNMqRyb85nHg9KEdz6Mep46SWm9s1whQJ6Y3TyLzCkyrAgiEkG",
  "key16": "2Kw1pVbc4egJxG4EP4f4X3wfe9E8EZM8FqWtjE5gGdAnL9kvrvSHRFsAVvY57xJSGFbbVtfc5qwM39VaD5WQmmWw",
  "key17": "4oDXHbmbhy5ihmCTSxnfeDbpmfubfp8f425wVNnnjzwatfrm1GnWzCXYundRhj91yiWJoR57gr6jK9VteqJkwC6i",
  "key18": "z6LcSNvUsjWpLsg8RAK5EDh1FqCqpcCB8adVoU7uYqJm7rj2cRTY5VyQepSfmT2fWa4tdyPjxoApouZNPfRWimC",
  "key19": "25aUxd4JYd8fYgi135oABvB6uA2mFLr2HGxJbhc2YgP6s7BfPdYkByVzQ4YpUmKWVF2KfuuDdzcP666QGPG9oWVf",
  "key20": "TFRRmvDNsm1ND2t3QUKjLkahTvHJ6j6faCv1eQ3iDiWwvp5h32kmrLBqriwejAyQ3DMWTbT9qxTywhiQHcnJqYj",
  "key21": "5TrZnPBEAFoHR3YXet2x3UJHCxC98UHsY8V2g5HpAFnyzHedzbU14vbNueSRChp5L31M7tx4dJDmLT14sHpXFygK",
  "key22": "4iFz9tiqJm44wJZwwE4AUtzt416RrLpmfVzgLvMogAU5fh48NFvjEmXXKZcf6CTkjWV9M4GbBKbQkKBBKeFTjjmh",
  "key23": "4mKUgbr8v5N3VGVzPDeJsgqLpZ2CYp3NQzaPGHydZYaER3amATYfUiaKSLFnSouthvWyPxvzwBwRz2CuBU8Lx7LF",
  "key24": "39LDqyuKSvZJeawzER5oKsoeWqXkhJFj8DLnKNs5SvGjeLrfsGZWWFibmiap1TEfkavumES4pokdKnbXxT1uWCHU",
  "key25": "mrpKFYTcnKCNyrvVX8HPmJi5gNUPc3riW1P1wC8UzdZMVSjzoaiqG3sL3E1nAs83JCrXcSthuYNt7zLGZA9xqP6",
  "key26": "3zGKYqmHZDq7SBRPpipCRvP9x44nVg5njsUT4uTQrwUcDbv7zHnkLmk4ja1Ry8HmJYBSdkJWAGQLqeQso5fu5k8t",
  "key27": "ySZvW15KMynSPW5PQmkV59wZNWP7HMo7Lv3rChVyEyNUPF2aGqRNQYBbDbexPjpdY6KmhCPpnahzPqcQvybNckH"
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
