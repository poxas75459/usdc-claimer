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
    "k9DAPLBywyoiKgPgovhwP7bGjxX16mDM43yJqHSLTgYf7rMLYY6EdgxupGHhpS1ATYmW2Bx3K7RKvp6iLEYkouc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54NDYDWqHeaxqPESqAPSn4b4BMJv5DipVzxpqCmDa7MuJZcRfAwHZUbgt2Gy3RGDcC3pn82LLYTN457FdZTskjce",
  "key1": "BUTH97XjRcxnuUfZqegdNo6oVmcuFU6whmujXasdEFpNejVcVU5edDtpeSaX8bZpxB22JteH3eJSL64HJ2r1uZi",
  "key2": "2rZGXV8623akiYMTooKHQk33dg3yoAJshLT1umkPSJxupqaFUugvoLuiFoxcxxNenomC99B6jfbbD8QbwvNnwBit",
  "key3": "zatNKsZYoYnbghhkYe2YYbnKzY5388UjHhhAq1mikzT83QRuNxb8XmU8HGd93PWft48QrxBKLW4t6myALWUGupj",
  "key4": "HviLTwvz9AjCCduZ2PAHjt623RkiqSSr6MJbJ85Mn1eCHyBwSqWpG65p7x9Xhdbb26JU52P5kSHWSFpTim6MxDY",
  "key5": "2UziaEiBZ4JEXomu3eocjHiYd1TJZPNRRLXMDedEXR3d8q2hdqjKxjGEBhg843YhFx5sr3bDFURJKHHnfyuS4Q9m",
  "key6": "3AgjPtNnZ7emEiVBYL9dSCiBYRhL1cUQ44mWwiYxvSej6N7QVxpB6qxfqn22d56MQbcZyD4xd7u4V3umkp3xct1i",
  "key7": "4LiXVKNFFpKT2GkpRTsxiJhy5TPaQuw3wRcqQ1R2tQdAVMhtiXY3MkZSqvKSdGWyL2unRzMfmFYbQNxZYKP8L9SE",
  "key8": "2i8sbQQzDo2TDJBsKfExipKNorJPXevG8NSP9M4DkVxiatg6JjPnkYV1kfJnKpK5zAFeL9c99keu71TYDeJ5YPn8",
  "key9": "5kNpFoufegbdsiVcnSXDS9kW699A1jqzB6kQTZkLUjwfTMWZwrqPY8FSJTVdUXKa4pj4cfgkbur22jfveccjcaZW",
  "key10": "4ATrQXMJyMsfnkwPp7tAUVe4uFsBpLV9ckZaqWkrC5PG88pfeRvr2TM7paGVtvEhr7B6qCMFZJAppBPP5PkfKdoK",
  "key11": "5qMQ7zDAP9kbcEvjZJd9cAEAV4dCHuE2PR3bdtAp5sE3DMc3jSy3XDBpnVFp8wr8wh6cD7fMM8HQbtp4y98p7EwU",
  "key12": "5HHfVbSmJ748BPvSXTtWndYHPQZWzRuFGPtYd8b6Sun9icKCmtnFemoLVGFdiyhw5XaAstZEwAt5YNmg7G6NGCE2",
  "key13": "axX3yqTRukQj4P78UytmTof2RYPkdkP8SBc6CKyQvdMpnQAFbnzppErpGGeraeAp2tA8mBK6YR1HA1P7KNispj2",
  "key14": "5VFwSyoymZ9nhGddshXBAQcfXcrbyJM4jwcuLBULpkkUT1FGZT1V5QVju1Qa62K3denwbGX3PeKAiprabannFqbm",
  "key15": "okA59qZmKKDcRcrGnv6Zz2Cn6cBgaE2zRhW8imp1oE1msKCoe9hu3CWijkqYXhYKrnPTiyn4Cexx8PeEwifu1au",
  "key16": "5n1zYyAh5c5zcqkXH9yEtgzNsTkY4nKpeh3gEzi1g5RrMseQVBcLHnqTv6frLtbrdMotBGaxRvAUSjJpcm98BJVY",
  "key17": "2fHd1CQNJkqppjRgFAxPZBTbMLsxUTAC1qHx2VqJ5WkHWbNtXp1vfyMpJMHdxt89rAc5ZJSyveK7Gu6DQTdBT9cG",
  "key18": "ZAKgn8iBEB6EybYdJmropDaQRZ7LaY8uALzmLHRnHxjneZhDNueieTS1ZCxh6FDFmGGTVYURXZuiKxc9pL2fhdz",
  "key19": "5uXo7KXaVKJkwfzk7qj6TN6jsVhC9dJKyhx3a4wyGMnGJ86KuAdtz8SWfoAuJBZHbp3XbkRoNYiNTux5LbKDxevY",
  "key20": "Fe5zgF1B666iqV2WeSDp2jSEWwF3UfzywQDyrJmnyA8fCpTrYe9o88id1J9f1HWBGgjCuspBNBag4yFiaSocHCz",
  "key21": "2ZV3ZYHafpNyXvkYNKd6i5Sprwr9iqZ8t3GgmV4YendBY9PwMhoVLRixLNRuBXpNPU9NfWBCkBf7ZsM4RjG1L84j",
  "key22": "25g7AsGDHmcCfR57jvEH7y4Mbf6xjrjRtzdbeBYQsDt7VRwS9Ze1aMR5GgYA1Lrgdq551We4Ghx52DMALafeZvkS",
  "key23": "ri8fnpPB9i1P7fJy21mJW3VRFAjPowdSNLu63QDL7SfvJCccDUo7Gfj75Z2R8qBCsi6P3PNy5zi76N8sdTfUDXx",
  "key24": "3mr8wuAyaZCFEYCTyXDRgtKTr1SxtyKz5iqNRJXmSPiHJqX7j7PdvaY4o1C8W6cv3EGsqcz6MdnVpeD22uQS7Who",
  "key25": "4frCgxxzRzdqvz5ZBscJKedFmVFhv8SNUfYi8GYBtB6qmxivYe1ncwFu5NS7rBgXRAM1YJ3XiQ31g5H2LXdV6ZRZ",
  "key26": "4b1EAUGYgk1zPuF4VhqNeZpCdyjx4BawDBcMnct3HtCMNFSfPvz4fM3LvCFwda6Ei4CPTQehzngDT2Bsvg5XbLyx",
  "key27": "5RkuQf3FEFijeGorGc4uxbPFYaV2m1dX9e42ocsJK2RheX4fsL3QK6esf5XYWaAjQV2Z3iLwKFhCaJiZCmwKKrnY",
  "key28": "3FxhMcytTQTYgkdHxLypPKmNe7N5qae4SwdjfU5Nfxafj6Jw2T3TVJMncVdCFxbxXBh8xzPq6C88CrHQ2uXmeKi6",
  "key29": "2LKTpA16UJvHr6rggLwoeUK6Gaw5RG2NwWqRdvxHxuSGGcS1wVqYu6NnBxsgWA1PoBmT6U2YPB4uVHuwehfo2TAk",
  "key30": "KrwSucKFtZEaLP4zfcuKiq2JWgsnVtj9godE1jmzLDRs4JxjzdMtQwaMXXV7cAnzToQLErGZhGWWoNswu8cwvHE",
  "key31": "4HpHeG3MYa5DJGaZPK3iUnsCvc3QCGN87fcsM22kQj1eZ869oxqShfTB347Ad9a6bRUffUHn58yMoi8bjaNEcUbk",
  "key32": "5hHDZrxs3hag1aDCZe2NcN3GjApTSuAfdjvN4C8hZLEMbLkyTAcy7XRtcPGqpNKXW2fA6Rkw1PGsXxNvuTSWkRvS",
  "key33": "2fFTeosBUSEdstL5BPcNmkAgJnjMCBTWPef6z5FKTRGFrpG2m4RksUgCAQ1DMMrxdFkZP4oyjBPKk6JzKTe4KMN2",
  "key34": "3C7oaBKvCkGmjro5RuouaXfELMV9xLpnE25QTTZ1XisCZoU86pRknbzwHPuNmwrzE31JZgX4bitVdpu1wEKjjCNx",
  "key35": "3cbt9ozYekYz3GMWtXw72MJbbj4fGnJVwYvsDCQHDhXcDEndyZS1DGx7w9AGJFrFPJMUsrnjL3D6JjBzMgasmWXr",
  "key36": "5wrkZRy2xwkUJvnRb8SrvDHKrakm1Nht5Z1YXbsAAcFzvsMYqXMBLcWbpXPMafWkUPjsGa8jhDA9gK69ApDiFtPH",
  "key37": "2k3um3TZSmtZvdhKnRp5ndY6B7eAVKJfzpd9v3NBUSCpXyTgwz2eH56Y8anAL78heNXbfX1ZkqJgWc7xD3wXTNzF",
  "key38": "5R2ASLqmyMFiEB1ajzaXJpbsgRXsZatF2EToT62tNKYS2jXzoQrWgwAMfXLuYfrm8op7EGLjvvomezcJQA5oWe6t",
  "key39": "4w2yZCKV5aje3DmpoptoTuidXeN6Nt4JjK7BbpGEXUWoGzs1DrvuJzV3Gv7249JqWTuVGh3zJDvMHKpwuk8iLhtL",
  "key40": "5rWPyt9aZV3jBRQSf4NtEmbJy3RYGjZoeHFV8RCSjsVgsXKSULzwMYP2hEK3ziTnzB7a791LScWtk1b44LUUzw3g",
  "key41": "gNgmdE737bwrhJ9QobsWKkD9FPgjgFgCvcv6yRt6vJ179Sp2uyjwP5HxF4BsNhsBtbDfyAfPhGzyLjwi7BUrJJR",
  "key42": "5gwkPeygUE4TGVgMdGV7f1ccFZfPC57EKXrweHpEjC8gq7ztPN6Y5U7HWPBBDmHSpZg21mGmURaE1DUEVGjjvDYV",
  "key43": "4V7YcKjcpgTp4oL5hB98SKys3dNohAETwDWBsCpkdbmxtxWWaELSqpgS88etREaRHPK98LhnXrWnZFboqN317R8L",
  "key44": "2FJLBm1dunBcfHMU8FjHVXAqGa33VmqyPt7PfgfRAjSGWLp6VyRF89not2FKYh83CX9d74yWft3BsR3chuCew4zp",
  "key45": "5sKuP2a74NjdfLn9C8DoC4THrtmGY7sszXajNQEDNhSYif3Rthpw1ESBFpW5WpdoyERXQETumxJcP9S9rus4CNxi",
  "key46": "2NgF8uZG5xP3PkDXiktY8QUD3Y6iG8YcPR8vdAFRM7nATUqyUzLfPPbpNH54qVx2jQwjr3dzJYgciRXVvzrycbPW",
  "key47": "2ZxemVkVTLXBSbEfSmnBec7wAwpSj2rvhFfutMTJ7An7LMFyJAPWf3jSPt4jfweDkEvnrC8caeitHuD3XrxEEJyq"
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
