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
    "5jcZPc7iysBw3eJByCsGagXUEegFHCGSMgvAoiocdszfekbPyH6dRtL98qxpEie58iAFvyq6ATjt6V8GjkiNA37x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRJ2rXqNvELywzsegNGFxz71DjKdUnPsiNiPZNgfRN1mpViSULtN333psamx2o3nFNGzCSFGJpUBPZenGtj6G5e",
  "key1": "2BBTioBFrCyyqS5WotxDNn2ssyQUUPRU4BqYwqMDQUhKXHfBix89ANhNJtgfkpPwBxJPYxSgEnCSDats2PCGDe5p",
  "key2": "VR8G62vhkto98R9bHsz6t85gADWBEZZgCKgLZW3QayiwWdLBCXwbY2Phe2VQgKMAhsidu1PB1B4PkB6PjRefFTt",
  "key3": "2vmy9xtbXdiVyt4YjMhJ3vrVgYgqPRvDwYsnvdrTA8vFFtWJGt68d2PpgZ9p5mvrmKGQb35Pu2FFJ9cXPNrmK3HD",
  "key4": "3aYwyH6XW82hFyseBkWZ4JL4jFjBwrzC6Ek82epNgqcrNwbpaq2DgRYnjp3o65xvJ767TWRUqaP3F8W6Uy3HH4Ut",
  "key5": "5oEdMEmyxeJkZB1tpxp1CedsoRMrRa66sEhmXijAX5JAQLX9tXEHDKCp61MUdvcaJhHDXVvDfFbcNHqw87M3hP41",
  "key6": "65VmDaH2gVACsDGCJBPyW6udrSYnAbExbaPorvv97eSjYM66yHSphCAEJyipwTF4ybg9x2HsEaYtHzvS8wKXbhUP",
  "key7": "2aoAm1GGKDBrwucukf3nbpmJ3pYZ9zV6nWiorfWaCJ1MJBmSEKTMxbiyRA8uSD3KBL87DJiJoJMb5PaMoShtzoWa",
  "key8": "5bfCAcpcNmaq6L1N61EkpvWoMDahRzDeR8MCMxqbU6v1cyxMkPY1HnS1Cs5tTNq1kZKGmEts1whGN4XziNm77Pak",
  "key9": "ScsNsi49RSPoW8euyNVULYSxoaUPjNxp1azHZhEbS2X8Gy2CvNCW7UeJFq8SSxqFwjgRKptFcrFV8YgMY3iTTzy",
  "key10": "3F1L72B65ZvpDKLP6RpEV86rzyEiQVhho5S5eyVFhDTtgZusHx9ahXPxQkxSocKfC9ftzKMievxuUTo5Nu6xpbHW",
  "key11": "55H6ou8xnVQfEkTC7jWtn1jZVnoPrzL5PjP6wjWu435gcFiHPRNNUKgVvTENgW6yZmC51iSpPqhPU5r2Sbc87xZT",
  "key12": "3T7Cgz8jKcFcQ2TpWutUi38hi5dchwRdvX9TKdSZYqysxpy6FsDY5JcNcmPVuu5seKyca1DNngSYuSZFQE4tigog",
  "key13": "4NqeSTMtFjVktXRNkB337MtytYtRmHtZ3Us8s7mVReyRb6ZeYYvvbYRtnCHe6sobQm6eENChnw3xmXXHD2onuiWN",
  "key14": "5ysZ6xVd5H98N5cF2GXPy5muP47GXHwUBPNCN9HBetagqYQKPUiyFKEo7oZYyKoyeF2Pjb7UdmZR78Tgdka1XP4G",
  "key15": "5nLfBo76EXqLd1ADm2AR9YowDaWhPuesyyTyAYREPJXGeAsjvxEqmnyaAbkyjomrWb9CwDKGs4keNuWBXpgBzqWv",
  "key16": "5nmnnBT8bi3zptPKLk8s1r51UQbR97Zw9eDcU4itHTNkmTg9wHgG2sbqB9bSsBs8xTv5sfAvwetFwzaCcTH9T4bu",
  "key17": "yamBK2kRfHhJTQRjZ3AqHQzGcJjs43abaYsric8BGjYFjxufuXCyw5xQEWjN2ZyC9AzsYdvhudEd393vBYL7bQW",
  "key18": "3ZR1PrFHBhNcVPysUe31tuRXgqEvcVmakfbfHxuaMxoNgKfE9ahzWwEGFMoKM5PhKi9XKZsL6YfPTVKTeEh2rAyE",
  "key19": "2j92yC3QKrXqKm7iyRWr6SGmQwVemyzUbRogQAq8JFpuLpwkkbMKin3z8fgxjBFpqLqYbiWBY8UkUFFDxQ7Bvkmw",
  "key20": "3HyMsULUziq9Y9XF7eyMCwQ91QQ3AVh6T5ZWwbsNAZT8zUjK7oR4r65FdKA9PBHWCgdCkhmdbpbkWFraMgxexEt7",
  "key21": "5jjFUfBQfAUAbUE5pkB3CAtrQG1QtioRhUQyGhZ1zo3LpWN9B2edgfaY4ncb1iUvmPMM7g9AJwunRvsdfNxxnCjg",
  "key22": "5tk8HLruZpgXpcQFvpPSrJzL5T8pvbKMbuecUrmWJUQ5oHqLBCogS516UDdcPg6LDY1BML5PGNJrbf1gQoZgTyz2",
  "key23": "o8SpatZTezdB2dvAvQadyZTUv21Z1sNyhSXi5dqBFnNwxmVhe67mmpdc9nqhiXtyh7oJVG58bRQ5P5NidTtPGmS",
  "key24": "33tW9f1qWE9ZQ3X3HEd2bmDe89XFtiS7amHja4EYZ6k2fHh2RKbEp4reeARDRy4USqtLHQP4s8f4xtA68w7u8nW4",
  "key25": "R8saszELfH2iZ1ZMcWgsCR5S9DgCmBG9ESz957iKZGmaNGQEbRyHrFWCAinkV4eWevWnzGQyGkEDPBBAbBGEBkm",
  "key26": "4pNGA5wVyCDX2vP5ns2NZF1ddtH4Boak9XnpNsyPixyYghMh4ucyDMxfkJ1DsuBQvQiDCmY1MBkWWRpK8x828CHf",
  "key27": "4g4DvPS3GeYsfTAbqcCRqtTA1awPJMiUKiHTRQUekhpK8xxjGqehMtAPzYbFKfyYpo8zaLySAc3taEvprj6vrVm1",
  "key28": "2h3ggzXs8aZdhaL1bcjsSszjwJ4LRed5GVBt9CirTUW7w7JpVKHEsJhGE2nmyEsYzYDV38dNgj4AC54HhVv56bH7",
  "key29": "4sKPFTjdbCPXUr4n5ENq2Ut142SAuuZqYzymLXw8cWrbLE6vB367gm1Vau9DacQ8SQMmiGAWYupQeHHS1fwZC3AH",
  "key30": "5cSoBTFQtJzq9qrx6c4oGqYW63WXvuSfAzoALJWUJr5BJRirh1CsgxyQJYfcFCd4U8nG8BouwQkpRxSpgFpQc3eh",
  "key31": "arEHdxsQUBMJnjMbb1aYreQM5BvJDnQu7hka7rQhpc9u65YmV3r5fUir6jjTSXxf1syXTyiaJX55eM7vKp62coZ",
  "key32": "Lw5AUP2GBX2RBv9YhGhiJYKwk7yVuv2MvAtzEkhGvNNUDBcUDDurJbUSFTdu1XnFih8nMoco4chKEKkf5sbVRTk",
  "key33": "2zxs1UrXnSB3dVUBdTqjW4nZ1vv5HW4AXyDxcXZ2iTTtUqvG9BLJWp4U2x7BBttQDHnBqHnWcbVqFrnb8AuJK84Z",
  "key34": "k56KDXQFrKxuFBE8E8y82Vh7DjtSRTM8j6j88tj3Tnmo9aHCmPTroQ4cWwWdk5dx8UnKvieBebjuHeqmkQa1Xgn",
  "key35": "2KwvBAq7twUgQDW8fdZhPopSQUESdTd1UDCAo2trMNZAZPDstCUiDEshzJbD636dj9g4nuoXRwoTRkqCGU7YEcDc",
  "key36": "3WMvopirj7ScVs95yaLUW6XRk9EdneNjJosgBkYCfE4rJT471ggsqiEqPdVNg5XCNt3eiQwpzHecsJpDD6JcHXvq"
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
