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
    "63XNewGBPBnsqXd3mBhGQDmRtYamuNwF1nnejYahanu9CaV3E1vjgRckUrRqZmj1j17gD745aFch9uvwc9S5vsAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMnaETEqX7hGjSnp8LL1W39rp2qKXndzazUjUsAakfzrs9zqVJ14pdUGJoj1ZoVf31a23z6kq9i33G4Pcgcqw5t",
  "key1": "5NWxXYn9GSA3GAsJczEyEe6oUQp13465e19VduFz1bL4TUryZrG16hmGieBCJJRxAgNLukPmHyWtT7CPQjY7sPDr",
  "key2": "5hhoMCeLgEWxTWvggx6bngpX869Cfg6KNJv3NFMnfquzUUb4n49D16JBsB32erw9FkM6SX4RF3LxaCYvft4Abc5k",
  "key3": "27ib11ZBQgNcBUfpJEVH5PVJB4ZTMSJga4KaiUkgQyT9e3rdXuL65StxZuzQiK6M4ZmTyXSJgBx1F1prvcuguK6m",
  "key4": "3WeoZfJbb5jAh5aPort3JfPhyvtJdCG1NfuTs2L2uu2mHzPjYoBWXq2xaWE8z2xxKzWFfenJ2Tf2k7Bd5YXBtsxh",
  "key5": "55jA34N8rKNbcssxQzphU7awPb2NV5g3XsJJm7PfB9epyA9SSq9RHq9tvhU5dQKTMwt3aJksYKVYVvroFcfBj3DS",
  "key6": "kE2KuXWtxWY5vpLfMDeC1zGAxxpEftVcU4rr93k1tQAfLmSTsSMXpt3eUG7u1cGPtYZ7ZaM9yDm5xGHYHBcPqVv",
  "key7": "Yseth3uVrMku7LcCWaF4SJWUVXCsVUCt7GtchGYR3piEZ6ANhVsJRkFwKjLBkCUgMheZscMjGWHbczXhpCdiQ9Q",
  "key8": "5V5jhn5huFx7WZk5YMv3ZkizEMf7BKom8LBAegJB9uNUybzD49jn4eSP2A6J7x7sa8Atka5xxx2uZtwMqbSx9aKJ",
  "key9": "2nQZ8ksghMkT3SbPGGBVHm8wXjjjNGGdZnUsqB3GcYE1j3n4rBtJQ6c8VTH64E9WQ1GdzaJUtVx4awDiwNAJUDDr",
  "key10": "uqD97mcqunVxRQZH9mUrsqWqG1AjjwNDLx9xkNpJEP6rK1LnrfYxwwLJDsjXLTu3mhQBTGUAu1Qttmi63opX9nJ",
  "key11": "2pnkNaVdQguNNxxXRPsXeWUY9JEXzvGPwbUyb1B7PqwgyGZ5AjhpdttuyDr35khUQybnbfyiVjVYwjWs3grgmZHU",
  "key12": "3c5T38brs4jx2VrH842bR7vjH8KSp8YyKhVkhx4m96uvErQWQqia3Bu2KVGLVCuPSfAijcZErfwhgbR6BAuC2Gm2",
  "key13": "UDsKzbQbGrbmqMtopCkN7pF6AitSue7A4XvYisPJnAJ9x2EhnnoDMkhQVs4MgxwxwGyhZNQi161ErdvSn6X8Vnc",
  "key14": "4cqHzr9SF4XnuPPzyaX5GtMpGk8TqjWpQSXGsscBfvoLirfAekKCiEZu14MEjM4PYEEY6gS2FG6BBjM4XjzezZhf",
  "key15": "pqWafSgVGWuUEGb4My3YhVtLHichZfohNok5ta81kzrPDjzgTGqdkcF13gpysabW2yzDvKRJQPZYTRYov1csmf5",
  "key16": "2Ezqja6bJBm3jZvtKMMruaGg7VpDBwTTWJXAVHys3atpdXWV53zZqmStd6M4A3QbAyuuavg7zVi8XYoMYyJGDNtg",
  "key17": "3bNMLpm2vvtesy9pSASnphHiHhMVKmrmoMECf2QYS6zVWbpP5BJS1HfBJ1EHQuHEmBnwGcTVxaq9q6PcmUjNutGy",
  "key18": "2X3wwf4nQqBJk28AuNeohY9Kupc8HddmrLtPMg6L9APnHRigJsV4fisdCheCVjF6A56b9jvDJjoon7VkypbbCyB7",
  "key19": "3v4Xt5FQNuGWV2tYYsDJDsnm2hNeKUDyL87AJEE2CQLZrN3RimsDEojGjyTN1pZnwakcDfNhGHoGYwjKaS86gWfa",
  "key20": "3e745XB4uoPtC7f8DdTdUJNWWQfUyZxQu7gxXCi2hvEoBnRU6MVhV4vXym7rEQ5vz3FFUjtgDM2awZS7PBSuZY6m",
  "key21": "FaMZ5AUdd3BMqj9Fno3tw5T6EtENk4YnhVtoH1NtZTD2pMhpF3tiHikdCaP2KAgCjfgG7fHMekJL6xftHimcvZq",
  "key22": "4fDKSHqD9RHF7Vkw4VGzEPvzsvyTQswaudg3iT3KSWA6TDK2mSSCwuZAfQdSzxwpPdKwxd8fdJFxVL68ptsXXPJt",
  "key23": "2P8bPRKy2vvK9Dc7qhgXQJmvPSfGeKFXCRMHY9CfqieLAgRqiv18R2SkYddgUPQ349Jp8pA9LbjM8DV6pJPfyZZ1",
  "key24": "EvQzb81YuFKfBNUHNcnP4gFut9tdSr88q4BFBgfqB5N2vrW4ateAnUikWYU38qsDLXnLo1DEeAGYf6oTTwLkcZZ",
  "key25": "5kT6q1a1d5Tc3C7GUYt2dkxjgWuh4pUL324pBCtgp93S2BZrGzftDZUaS86Df8WZrqo29efiCnQzYujqdzmncZqM",
  "key26": "5LNV7WGbioHFm6s1PjRYMfhP5oBj8JvZsA2moU12VWohzbct1UpDXdBEbbZXEkFUhSj2WLZjRqAATBtddmQcz2gj",
  "key27": "2KJqPtDNVjXhdovdHUAtxKRresQknqEmKgWrqyqPFoQ3v1XFm5TCM7Z1tifaSmLqZwXu5KVZFgPJQMuDxvQTaKkQ",
  "key28": "4RvNUiPmJyH6Ly9ro5REPXGy4LfU5rtNhnRUrNVpCwqywpYVwDpbHQ3EeQdKzvHnGrLPiHKTbSqtGz7NYsoCW2t8",
  "key29": "3Cj1aZbrCtVwkVssbukfwfk1fTm2Suy12ojw36tRoFUs2QRLJka5hrCujjBMqy3CbrefbCw1z8ZHWzfpA2qoyqzG",
  "key30": "3ncksJk3rVzqFaS6eLdwUDE63HykBXkuXPHG9TFkWYbGyS2eGa14pZEgESLqCpgGmzQVDeMHsWtoUuXudGUmgyHS",
  "key31": "3TGoEdxwtN4xeNk8tJYWnRNCbLKsFjvFCczhvdh8cyb6zn9qUBE2XRLiKG7p19r4q18J2KsNU64ECna5RczftfnF",
  "key32": "2dwTtQ1sXgidDzWv62gfx8kaBYNXDYgDcuJ1thPb2sTRaAgEEKBvbvtyzfc7d6cqdGLDx4EKfv5RmkYvS4VXrdNt",
  "key33": "3ZBR1Sr4PNvGnqZCBqfvnP5kuBmuewtPNvsZwVyisF8QF2WEf39QFdSzKG6xrtr66BSbCY9hiFB25j4tkN5E4Q38",
  "key34": "4fiJRGD8gTZBP7XrdsgZTmsVk6bxSF5irrWSLEB5T6XiK6znM55cn9wz5tyawWYR7FhtebcVN7HkCjx9rZsZHspX",
  "key35": "4ZG7Ygz5REs1u4bUKK35zV2SnaS13cr8HJux421BgkRSLP3RZkev2eFk1rx7Mj11hAEbJ4U1XWBHCTrJaV6PPrJt",
  "key36": "4H6rj4AX1u9cVBdd1khqQMqdmtw3xXpQpH1xoD6j4vkbb7jjN5jWjjboM5jLdeoTTz9cj5sTkSbXvBL62whZ1URK",
  "key37": "3VqhWuhzitJVv9VtjkPMLCCL8YHBnF7pRYpG7VdV5BBuDW3S2JBWAN2YHdmyTFoXaWBWU7RX8srRtu83khE6M7CT",
  "key38": "53Fif8vxrWdrKynzfWwex2fLHfJ1i9rt6ibTsMcusGSaYirTN3Z19wkQTUS3TvBTVV6ibjihigDENtPm73DUkL17",
  "key39": "2jVRkrJrVnW2Sshu3mr4wG9xGFHZd87jDn6PWzarPxwquPJAxqwZNnbQyFTQ7zGNgE9fobcmQ1FcvZCsyH7K4t3X",
  "key40": "2AYftDPTaEHWfrX8RTotqd1iiF1Uv1S8NUU4Hj7hAYH4HAzc9Gt3wsLbYhv3o4n7DhVnvBqsdMmdK3KyFqgDFzGQ",
  "key41": "5NX6dJQTSDYnvnH9XrpYu5TM1hQoa1PL5zLWJULXsTeYHUTErjdY2nQahFn96oWPsZ2yQHUy9nbkx4X3owUGJwPg",
  "key42": "5PMUbHgtnrCta9F7XHfSsW47SiEGexeWmfEMqcNCLEgK7Cft3MFL8LyrC5zjCRyoW9DpEXHyGm3SDjMMc9ASKuBp",
  "key43": "3uR6px76M5MbPv1yqf6JJd3YY1Hs4pfQq9xwPWnCJPYpWzMRxPgdKqjcRC2ENQusfufyB7gSZE4s5nYM1yZYoLrZ",
  "key44": "48ctmJpFW7BjEzjoNB9tqrZPVmPiHpGcQGMtQPPFLSkbWF2anwSQkiDH6QmvBjgNWsJ5Dgk1f1x1XZsG8biKJktM",
  "key45": "4vifTpythdmJVF2FoHKMmF1tmbFyRWiQG4aFLd4ZrrAud5r4mhxWiXGHKrutpQWcxJ1MVBKHNsm5qXhwarov62Qm",
  "key46": "etWFLnxdJgKYDeMR1a2Wvasj7QuU6egzMDm9EXxrXDtEdFSYVoS5ycGztGHzCkKgAcZzxgZDgCimoENVfDrhfDU",
  "key47": "4iJs4AGx7CngNByC33St12pHApWgS9r56VCk7Lu89ZdBLBqNp7bucikMhf8QD3XMRTTM1b3x6h6rhnV7Nxx1Uydj"
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
