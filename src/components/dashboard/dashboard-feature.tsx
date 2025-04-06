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
    "4RucCHmQ2X7QAGGdjRRTxUS2NiQeNw4oxWRKoxBjjsCH1wcu7UwHrssMsBS35rdXJE6b69ZHUgBcuzSszokEcTQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJUhVLiN31dVCeNEkuyVDz4sodscrirdypFdv7QzTUjAvvpp5B2k7ybErQzfAyjM5ToGi35kDPezcRLLNCexrju",
  "key1": "2d1GX8guCqgELfBy13u3HTnijjEaVQ4waJX9hCxtefT1enfuLb5Dq8LmcVJpDPp272yhX5EU1272dqpdBCmdHHjS",
  "key2": "WvgbVkf7vnXx6tFXKFrafgZynW35cmsnrP1tUM8r2gJVaqpbNmytKkH25vpLKiV3ZU4zn163DwY66JEkSHRCrho",
  "key3": "4njEU1hTGx85sDS1BokgEfwDuURe7dT6rS7Ka13bLsPFFrbMePwQVd6sDWyBa6waPR9B5g3PrHbnuZGmkny1GGvs",
  "key4": "2adPFWq6jXVu1jZia5NrfvHv4ovLNzVaXF1TNEMjdMD2r3M7XdwMrZ4PEuGLkjXLhruy1p1LnNxaa4pkLhe4bEPt",
  "key5": "66j5AgNiha6joqQ2J9Fa1QQA2KskE6o6MQWHop5BNPhhNnGdGRqZZDSXtqM5b9rxSnTVRMnybs2J8Py5NF5hXKQC",
  "key6": "2ygAPhdCBSJi61YgG4e2mxAsUCyX5JgNHuvu2TuW413ziGCafiUZpRp51bbjoAjzrqnLSRjyADHkrjL7y9TR1xBc",
  "key7": "3zNJwd73RrW6SfHXHftq2Y4RGQkvTuqZrKUn5NBAv2959e8k7cDPZk9yhWLzZ513yvBK84Usdy7tXF9NJ5jZyyW4",
  "key8": "djA85Lzu68zNYjGCmogFQJ5kvYaLw9BofaeXt6yV2naZLH22qB7Hdnynx7GH623g1y4t4FaTitYeK4vCJtdmhBt",
  "key9": "5izEBzRg9h5zVtEtuVGYPH4u1spZuvCKNHKiHVtHE8vG5do181m5dGAcGHc1aXHPgsfrcVGFJHGwcqJq1PNfyj9d",
  "key10": "2z6vWHF1yaahxEEGQDACyNE3HHj6NwuV6pZMy6BwBWnFe3wyUn5TF2kua5YESTa3r4Jt9z98tgsLsoFCruPEKcNw",
  "key11": "2YYqrMmTfDPfz1XnXN9uJ31dfUQVenA7FzmbryWLv2C5n9MVrUDs7CFqV1MJR6NgtH2emTTntogvjdkXMaRs7WGA",
  "key12": "qcUB2XS9XtQzy1jV93Sz1pafhkhSRCigdHB3WQkFbG9An6XwiLASEP4HLZwtzZJhLvF97JmqeGA9biU6y6WenMT",
  "key13": "nLVdjBzqTbwoiuYc2B5Ss68sGEeYkUGLttEaws1j16tMX4qK2eF5azDrEvpWDYHLkuLkEVL87rvEQKgQfZW874g",
  "key14": "5v5ypXu9BDzWL2Qf6jhR5imM549ntXiUky3H3Xxvhrjmig5jQw6ahaLWoefdx1AkCVs4eYv2qz7x4gwPaN6L3crU",
  "key15": "4n3snGGjawhjowd4cF2ZESm6wAAWK35Q34pHpx7hNAtAGtNmkbo5XjWBKnXRSwUjf2gXuccaqi5WVyGhryLz6aUe",
  "key16": "2tjbhg4mpAL8wzYBaSXdPehurLThgz6EqVLng8tBo2GNbVBj3sy1vckuA17YaQt7YyKhbXSBtknCZB8d4FnPrk5v",
  "key17": "5TBFYWdoV9ouskVT8X9JNUDcN4HEEVMJFV9vL1HEAw7wvTDaFnSHfe5TBWVVFhuE5xN9Lps9cpghusdPxWkw7Vva",
  "key18": "3pmRsLkudWWSAdqJ5tcBYWcSntgHvsikM7mtgk3gTgW92VfJW5eMzj4pwZ26S1kvGP6G8fQcGpMcuahWKQqnYwaa",
  "key19": "ZgCwyBJphZB78Ww34sJZaMLXFgnrKz7CiSBvyz36akG6JGkNnSQC7JitYE2CVuXH5gEJgG5Fx4JHaDCagBJ74nz",
  "key20": "2NUtTLjR4KUnQKEjLEHrH6byT8TJkJvhBdrR4f9KHAj4GFdkX3i4dT4XmQBabn7YzXBHQrYG3CH9f7iqwu8SsyJ6",
  "key21": "XwNPCPqJ2tkHqPmJNke4UpyJyJ3jNhgW46VEffvoHWQdCcXe4kzHtHyvTY7NyzmFxWBru4xEgpKJjuDmWQKF1P6",
  "key22": "3khM2zkoF89DT8a9jgoi5hJcN3ekmqC1QwFcvxMuTRKmBBfmRBSr4AhuftQkagzEiBtyqZ7JWjPvHymV8pZkmfm6",
  "key23": "4dMsxjrV2Z2KQJHPFP8WNGZki8pujowJCWWmqE4NpULocbueqy5TWksfCJ6LSxp7WLBWPUA6M6D34irFGoTJbhJs",
  "key24": "3GuFRr3wkSVCnzMRRyRx6PayyFLAzhg6A2x4pBFHEamH1iUeow3jyT5dh7NxNe9ngpovmMHT7zJKsLRYCYiuhoQB",
  "key25": "2YpiBbLw6Zr7o1qTFhLBqKXJS35thKq5bJoEjQsZNyxa53dM2ewnZwsydaV5oreb2k26oBWCwUqgknefzy7GtAik",
  "key26": "yVXxNqTrW5y13C2nzBusGpa1CU7YQRc2htpCmQMrM9S34HnHvVHrwAzFHuw4HPQ36XyEvvwtMaYe4Bkw52WiDqb",
  "key27": "3kaNEnsMTEtBND3GjQxRB2Uu1B888j9Eco4EqP4Axfnd7DgRbiBVA6QJJJ18YdvvfunAWTbTdKkGK3Jp51B3uHZs",
  "key28": "36dVB7Xx6T1GkBsrQSft2mLRHbZHrF3Yit7eoh7EUkSo5LKFpnAUZ7EJbyCx6mdSmY8bVKkBGZGKqp5bfZXBjzm2",
  "key29": "3RcEYSHfoEawBwsGR9bRzLtPuz1qVKqPNw9To3auDqLtj1cKf26nS2qcdzvG2ravnkChuxWqNi7arSXJ845xfLtt"
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
