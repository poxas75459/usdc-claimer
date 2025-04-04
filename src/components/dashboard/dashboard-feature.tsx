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
    "5q7WDgpXEw6MSMMNdDV3K8HF7RVUFQ5i7D9wQU1uwCJ29tn1ncnUeTpapRrous6FsjtgswdyhFYmp2EzT2A7zaqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SepPwJXAdWa8DxyEUhqEJjcKqctptq2AUPf9XBbbL6bcyirViy3zD8ZkgFVDbGfJBoJLE648ashVEM38avxNPuY",
  "key1": "nHTFKWpqnZCufcFJ8GcEr7bvin4U1YmQ91FjfKsJdHAd7Gpjgq3VjnAj3zBDSvcQcCs2u4ieePnWVm8oqiFiHPk",
  "key2": "5TD5ND3xBpy3P8LBykRzhk6F7EneDmW4H18B2FVrBRPKxBRspgcD3iCHUTeEW5n6yCM7sU3WYXcqKvPf2oE8K1Rd",
  "key3": "3kk7HBeE5VenMmHNBkb2PvZUFo8ZVXvzbFHLSQHesNxwTYARsBv8NudK1eifcyZMPoUgbQCrAhe9jSN8rfb7Va8L",
  "key4": "2oamWNMUUDicHFdtwrnn1tDhyAqSDJySnbZEDL6FQ371sMNtRHyyZujGyuUnM9zxFrsF7jEoWA9m3HNfMd4icgf9",
  "key5": "VLasx6e4GXPc3uJTQfNfh7bXqUVWdWLnTF5w3ie12mezSP9R8ezXfC41AeJdVfZsDYYkaQRNdFMGDVBEj22sKUW",
  "key6": "583rHM9turvbUQgFsvdAnXyUchgNBcZ8c5AER25BHdncxmDZcgh4kJVVdyrWbE9fAZ1bUbtVapqfFn5StdBSYwgu",
  "key7": "2ttzr8F5Uc1s96XPpyrEd4sm7joAutXJLS3hefYkGSzwpNE4umhTu73ynmnRotaeHRp4RZmEyguy2XxhkxhBGQiW",
  "key8": "2KjFBLnSuHKDy7q34shRng458cAEFh4FsheniSZwquAoaWwGYW7v3Hmp1pmYRQUsp6meJbK2mdEf1sSsYxqS9ofL",
  "key9": "5N8qc3eE2tTzEsPTEC2xK1Dno9G3cZfCEhFJhSD5qu2jAvLC19xC3tDeP2UfpyFzRkuxTkyKAKLzZT3N3B8UqVwG",
  "key10": "3YboHUk4AqbZosxAr3BDRkbuY1kGXqBtXfDnN5wZ3YecVQT9rCiTxsBjuW3BDYcqcMD3vnS8TFj5SvtY2JxxeR8Q",
  "key11": "3H5nxTuXwAL3zPuGJ21oSGQX349D1K8H1pG45cYCZX1eKc73WDvxeiw8XJohDDCRUN33eJS44wMmEWhThFkBDBv",
  "key12": "ZNQJDFRKABr4eZPotjFuEuMHKnbEZH7Zt7sJ3YZd4UmUPVC9gizPHuKHV31NLVvQT49bFYKtbPbanXEHLCUAkgp",
  "key13": "3u4JXvpqjPk7Gu6sm2fnfE4rQoR1NpC7tYg5vXbJtVTBMadLoyk91bpEUX7NHRR3oNfThQYQZw4jvpEUvb3ZTa5F",
  "key14": "Y13KEqC4iiswGHtUUBYXM5euwhNoVbnt8PAK7KvDhtrhKYyjNAP7HkV9mDUD11koUgyAdJemg1FPbkGyBtKwVnw",
  "key15": "5CiuDrtGnz1KHovUY8AAWpCQoEwtAdit8hpUyWcTaWp2nSY1PVsottz8rpfjyw4h9iSmL6kAzSq94CTQSKB7tjfB",
  "key16": "4rCZtPEcR5CtHQXV48M489ds7oxxLdoyLsSepfYtP59JeuErcPuygDE2vrGJzo7dbx81R384J1ww2guPpA4hjZoD",
  "key17": "5bd6d9mX6RXjS6UkqJYrAVTVbJNgnNxuViDyBt9JAdfWemxfWXmkAr51qyGLhasV8f1rnjks3finUtgcScZqDHpw",
  "key18": "5ajvFDzDR9SoEEmZovwRtGnp4WnzFVVjf9ArRDm6K2XHEmeXF6ZPmpYzrr1umZohQyJmJizfZ3tCMKWBBJQh9h9h",
  "key19": "4z2oncW1jxZxwFGb8MKyNieXmiJDiPCCjBKpVhE7vDWjGMTdt15Ywygqd6bCbcJnrJvMZLzJfqK41eEj3PHLmdhN",
  "key20": "5uRbv13opPWn9zcs7XCFiR6hiW5FFGyEGTbNNL7jw6EPsXTdyiw8fmUVm7HQTKoVNGybsgxm5qpr4waNt7NRSi5B",
  "key21": "2wWgXJbAd18vfCYTpusdxVowbvArP3f9RvmZBpys3kgL9CHaqUiKbhUJywvKqvpLZE4Uk5rsCv7fzf6GNHuq8Z8A",
  "key22": "67bDeVijrrLq3oS8mEEKk8qRKjbeEschD2ZeiGo5tyJ25yxvGWHxWSWvfFrVtiAEfeaaJm5hRScFpeFjusAVWqYC",
  "key23": "2x54VNh7vE1XPbBuEdXfqcYsEcxvAAdBa5v4BV9A2ePdRFGWScaFSs9i7vd6u98SVffdsE2RhAq8oyFWxCKQ15XD",
  "key24": "8EDrJnxQj9bHPU4aEroUiWwRgDQLCFjKDDHTQUGV9hjToJBL3KrHdPKs3PbPTb8HL9t4gxwNXdzioUNcHBrBojB",
  "key25": "4JpnUsqdpuo7n9k6XQ9bmxKjn2y1RsPxsQ2EGHJYVFECkKEG26pNY6YcCQ5BWEtjKRTJozCX2FzgjPSQwKMRy39P",
  "key26": "3xwHNNrjZcYfrZejMXmeLRmjqu37eiEvPxx5ve61PqrsvZegUxF9XZyqnhrAsjtsFNKNm3ubF9aKJAXTw3FiNY5w",
  "key27": "3RSaxLSnmoMR2u8Rwxa69uW3WKmyKFxUthZuDuQTZ3jAawDerB7WJvbniddkMxzhE7cvrtLpUq3sSyrTKAk3vnpz",
  "key28": "3U4H1LHwnFqkcHYdn3F4hocb95wiuy4UMayRE92gE8gw8XaHhrwyVGaqRgifccJSxTSURAnhFNqwytVFGNjgpzjR",
  "key29": "ApRG16t82do8SSudQW3WuaZQiVEVCZ2j4YXi1QyQ8YbVvKM5CeCB4bkh94D7PEPECFKjWgCqRERkUJnD9gM78qV",
  "key30": "xMi2XhxzB1bCMsvL8o7UXSRk2WjSDaAtswuQDZvZ3duk2scH87Qz94KxwzfTgv5Dxzm5o4Gq8xiKDSidU7TCJr2",
  "key31": "5P9BWhpVb6z4XmHCgQe2uTqVWHYjYEMdCxmx8qUdfJKu1A92XpB1zbyEEv4Ls8HmH1QTdEndEmx36hZiK7WsQWh",
  "key32": "2KtbFFwc6kFeZya9eRLJdTpV5nvLj7QffnEGTdFTZutTg3yWk1dZc9heZdHvZQoQyCns92B4n3yjAffGPsfUEZdk",
  "key33": "425aVMAv2ztH69hWms8UamCyuRP3rDGhNzdkb67appY9RvyhuSSm4Lu7TyEEv5eC14Gy7w2MBbPrW4WG7F5d9hAw",
  "key34": "4HmKan61beBSwXuAdz63hoTzB9oWPz2RyZ2NSisrc9hdU4uAWNgZbJzHLyRiy2mkcUvek4BvtHc2ge6Q9DzNU1Eo",
  "key35": "2eHk1zG7BXK3QvAT546Dv9iwNLFtZLy95DYvE7ysowJcNPLihCUu7EAcDrVrBfVEvySCwjumeaizMEGrwPezkTiW",
  "key36": "276pcXKDJGGcxuvf3r7R7bFFFksL3SpnYqLSsh8DGWDoRJzRmk7eCwSCLbik6erm77nRSt1iX6iZ4jQYvcHgDM5x",
  "key37": "4ik8kPj1pr9HcXvdMLf2vsVpQHkLCe5h4xqLyiDETGFuCCDcLvwFBpf4LxwYfZDatXnMMp6na4JVJueCQDmSjbmB",
  "key38": "4xPGNcK6KUiw1KvCZ8ETjgYoosbkSkRsJKFz3ocVi1BuJuKGbF9Yah5Vhnoc175ZkVxxLFdVyMHVuWEC1r9yXRzt",
  "key39": "3cVgUrQBs9bS1WYQ9VmGAaGLuwsqpnc8GhmmMF3QQAamd28PZbDNFyLkamsFXHNmxMff6fpbqXcneGzHkwav5yvQ",
  "key40": "4mXMiRnaKyfxcCG23DWgmrjL2kF2HiuZJsdNdZgd9MWYSZyomaX4s8SLU5B6Ad5hLe9Rc9r6c1cYvJ3qdaCfvMpN",
  "key41": "3WKjMgfDx9Q8zgyjVaHzEegqmfmvF2QQFXnzx8Uzxdfo5Lz9hHVQr4VyhYcSrcBGKXP1HfXywEapnphEgmrnLDvd",
  "key42": "b4fXyCAXHKmYNpqbw69yDxgYCC7msL4eNN4ZxXnhakiB9AkpLHUyvTwEBNzbUPiqxtYfQfCagtaMKUUDUgQQaNC"
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
