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
    "4tXJUfVdbkg3q1fkuSX4sZCV4YUgHX5wa9txKxZiE69fqT6B699s9w4ssV8Dixe9bDURCaX7QzWRiBYTQ6534mr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcaU6mmBeV7E1v9eZHRnkkJv44veuC6Zbb6A3PE6a6N5dzHQDS7P78HNeCqFCEci77opeJCJEiwccioh7XAY31Q",
  "key1": "2diRYu1swiGJTgNtuBVHuWzLTBU8jnCKwWRG4zPQh76mPQ3U5JC7iG5wpLYMUKm6U3ojzivSphQrgMKr6yJV9gxK",
  "key2": "3zGWCgfTEfbY47w6Tab1p3TJsSNMbYvQMh2D4epxXph3N7omR2X8YyciPjtSUWacbNSxs8RLn14B9UC3c4k27F4V",
  "key3": "erosUM5mcoKaVyGXhJpbtz4nu7w5oANus3zgzzH6UpEkLB4BNXny256qQTqFPH12iBgmQyGSGQtYnraeq1cBJkD",
  "key4": "2R6QjzpthWgWzNd63AUCYvXR4qggM4aJzZ2iA3DtDTP1BEG7ghJmnR2EejbF481VAJiJUyrePqFhLSqJdSdx7JGj",
  "key5": "5zV7BvEhnYCN9UzmuXRSkmMCCgq9bHAvLhgcYyEuDTCUw7bETVbsmHJwg2v2FWbrrFivm5AsRbWeiFa7J6wmxmsq",
  "key6": "5ZrzcB8tUUFTu6ohobv2k2zuqsSEThZrFPpfLDKhfoTgaUjgsvsdq3ApSbmXHnuYvBFAcubtngbHuJrjqepVYQ3W",
  "key7": "5sVRThaycPF4afg8dzEwUyA1KooTYesBsVnvSBiDuvcraHsSqjqEMdf8AMahNZnbTBeLk35RjXta9GgXRt1gxYJ9",
  "key8": "47Z3yji3q5mHJBbXsCEVf3enWLTuz8i5gnvRYaWQHHiBuccBDJV3eYGuFodoQeTCpjJqzB8ycDcHeTJDk91extiV",
  "key9": "5nKFX4JwtFEk5dwNHZX5tWWn3vMpoHhgfEF8V1XmHJp9LY5JGWDbp5YSj4Uuu29LgWXD7MqyMzTx4DWL59y8tbY9",
  "key10": "41fovtkT7zjY4vPxE4rdqYC5Z7MGCrMxH8jtYXQnD5Wr61LddFSvpqVXoaP3Yb6p12kVqGm7sv2Duti6NSCZTu4Z",
  "key11": "GMVVTvgnoFk56BuqyktuCSGaLKk9R8cwcyC8TugCA9nq4xno1qNtt5aXWprwkCskrM3n3ZDZBLeUcNS2f8f3nnc",
  "key12": "56mbjiD14swFJaT9X5hN6z5MowVCp7JAMCwM8pmiMGfKJ3p6RDoVKBY7yenkva8vU2sbZ2Fckfx1eqUpCMYxeaUz",
  "key13": "CyMgLBNwoErPA45gWWcsBDozRBBY1mReV6ZiF44L2gCpkwogixmdviNEnv2grmqmhTWTLMUVGB6n9iNBrv7VceR",
  "key14": "37aHPQLBHLszPdmC918rH6RUjkkuAcVy7WZw2nW1UejiCWKMKBDTip7AW7cevfhjrUCdWnMWr3hiy3ZoswnLjTqq",
  "key15": "4onDRLnGYW9998dz93fJHWt4wnq1LY3JWgUmLMz8bhnpNh6QBiV1c1bRMEgRs83EuuSX4cGv512JqZMvHJiA6GdF",
  "key16": "7xpL4iTruHTtBgRsT5Ztb1cU7LUs8qEpykRYFoD6vvBnhMmrQYj4rqnacHZHVm6jScPQhwLuRd1do9312MMZMAv",
  "key17": "3rWCTcq5qR6nQBney8uVYpK5CDb74BzsdSFqEpAnjhKMwEy9JaVGRUwMGmLnywdfvhXmZDpFKRLka5V8crQ7SuAP",
  "key18": "5rUj5xZpsWdQ8jJir6KfW2w8VPK4hFKXWCEATgMbT4nYUJmkJ1yU3JuajN2JcmbNgEmqsdfuonZEqVhGwk2ZsFom",
  "key19": "5p4uhwNZ2GULnPyBBuywKV7LghbhzckvZVizzTREmVonwqQWxMkeX2NVjmVML3Hsi4koxEHnBinHeNzCYgXHhUfC",
  "key20": "5WzWmUyWfbiykUZMSmUuVVATZpKUety4nVKcjf1ZwevJWd1Eh2jcc87SvQdS3qzbSa5kunEtFPmRaZLhgfSztRzP",
  "key21": "4anDmKm3iUjRRJG5Zd55BYDKvZ97e4VhR6s42XUbkCjp2BVhwYuopd8jP4uanemQjR152VtvT39zzV919TKw479",
  "key22": "eLoEfZvL3CBk9mBpC4fQLLhu6rEh5ovXjxvhB2cNhFQ5fWzqgW6hFquofoCmuL1Nv26PP1b74JCm6yuX3ee8kz6",
  "key23": "5uakSnTu6z3vinP7EZvSxaPryoq9t4cCfDFFwpJoLyKXwPMUKnnfw9qKqu7tSFNFkD7JrSzvhAVsiKPiZUVNnAZv",
  "key24": "grbBhNbyiv7QShUnxNxbaPrzoTGs6651TJmVo8kMSh57MeuppucLZ869BWZ6eXpzyRf9zPYEaaWrZY3NgLZHv89",
  "key25": "3YujrdDzJnmfcVMxpAAYdiyawNbfHNNWnBagm5XcKV3RVZ8D2QTJb6khXWYdH4ZiTHm1GqQiD9b5R1kVtyMRzaGZ",
  "key26": "3oDeTy9bTWbvebivzjz4qQpj4b6e1duEgUyuDuFKmjKFZTRHT3k31726QDJ74dxNVn6vsoRJ12rw1WwDih45BTij",
  "key27": "PBy2MP1Byrcj66KwhoydfvrgeaRMYGvVgrKnpw8rZeyeaQTyH2ydTNb3auFxA1QiAeiWrgRQtoXysJwP7KKyYgX",
  "key28": "2vkctV3r7ZHkn4yBsNHjSGVCQ23wGBdEmHM3aNWML5Tc3hU7AHbkS1rtx3ADEbjwmxd8qJGkattdBjvQFxdcjqMG",
  "key29": "mtHBMT1reDeroUJirb4sKLZbr3EzJ3dWgMhbtsY93p8sCQc4MF6Nzu5zG26u5nax3Joxcc4RY4mSptGYxAn9Fp1",
  "key30": "Q1L6GwyjfFBaQFKYC7bjLCdCQAFbk297XVgkMhgCXNYyc36zVNGCDQm6kNCpj2nDf27uMfztT66zKs8NxAaerbK",
  "key31": "2nMj894pa3kZFGxVAuEgSoBWtZYWideF59oiR4aec2QWre19v7dAyWcw88wcWMf8KWYBWgxRCcNpTE2iE5cV8EQ3",
  "key32": "3bZQ58TMavBqbJ7nJdm1o8SsahtyKRWzreoK997Rx3CpvHaYpLAAMZfYqybHmkxmGd8xY9xGAgrbaUf5yC9AwPKi",
  "key33": "26Ghv65cEZpJrPotQDnXNd619tpmgMu2W3rkjRsArJ3hckAF7Efn75TbVJGMhdpJM7KANS8XJgvnRUzat7csd6hV",
  "key34": "2EJ29k3gNjwnJKSyNxdkG3NRbsueDSe4cGTRvD6pr4DWU5ZLPYC3KAkNgAL97nkvXgjnsXcEfnpkJXEcRJs6Z7v7",
  "key35": "4Zr4UTHipJ6na3CrQdBUr8dgo5vzBsA5etn52vaKMsXTcrCCmVmcn3YLRx9Ew2PPMu6Lh752HxP3r9HbKRj9RFwi",
  "key36": "4r3da85u4Yztas8Bz5YvwxphAD8iY6HKBcVmuPVuT9GxbhrTKWLk9ZPeEvoaBNPMii7tWbvrdQmnVap4xn1bFaxF",
  "key37": "4Vnki8eYAxFkGAVWKdsPcx6WSCyAVZtSqP313F4FoQgm7btU16AJUYdApRKp4EochT1C3y8aRwrrSicf53PyDM1r",
  "key38": "4hK9FgExyvoTZNevQezXN635L9rAV1BHE9mmpAAW8iEZ6ewfSsGBGXkjstmbiWAALrHVRkpgg1WUMacXsL9m7iG3",
  "key39": "4WhHV7WJWYjZA8TJP82YFGWLA4ACgCLiCVtDFuPxnVVEowbBt5yKdRYvozD5ViVtZHnPLqjLHDnUzPWX9PK9Qexe",
  "key40": "VdKiP8t6eru4K1GcDWdUbrNoH6hwa7jx9SfU32xBJy6K9xosLS39D4bryf5eVvpkXWYfa5QHXzYEedyT7gpa7us",
  "key41": "5hUx4wGa6EEzg861dRoBs1FvagK4i7x9GPYMLEopLiK9YSTqJeoKJMhpMHHPzFdHSDiG5RXwUE2wkxfh9HnaPwhf",
  "key42": "52QMAq2or38QKigzQbk7Cb1YJzrR6ZW6hA9En8LdLSGviMaBKU9q3DNRi7Uc9HRtqJVSJAEuJXKAgLVN139by74d",
  "key43": "4WNH79fj6YJAXNKhT5vzFF87AcFbLDDbdFoWEwcsMgK7Kv9WoEUGadkd1xHeHz6N7B7zRc582aouJHtxSPnrZnLy",
  "key44": "4WZEbb9tEdTrerQMvzARRs8mEKEN4Mbr7uqYJkHEbr9Eg2Lvm4VLbPC8nC8iCvuJ537ownodRNepMSw2QwJJ6qUX",
  "key45": "2jZhvBQZnbQwyT5ShPFadSPeLSfSeYie8RPAgDwxq547W9Mosom5FSdKjRSbikNRMKQoay8zmM54vhKSop5xYwT6"
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
