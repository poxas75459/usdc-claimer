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
    "5L2SRx6RTXfiPZX9An8dNPEZX8Hy67DWeaLx4mTr5necTUbuQx9dpiMuEMWGF82WVzMYdkVDkLyRGjsicxEGT6Tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuhKYNHh1xBB5p5k3dC3sgNN9GTnuRYtFaH5kXgtP2bzgYhpQsgpxK4jDSJB2Gd3XXDhg98sMtxLjCvBJp2MCxe",
  "key1": "mBVDG3Kn1QRtn3wauF9C2z4gYP579ixx1iqSh7n1U6BENzGvxZs3fERTwg5coRFGZnZDWX83wp8JUuEQTsH2XSV",
  "key2": "2taFCYK5qoyw1LRTMpde5RU3FgxGD8dTJLrJ56RpsQrCTWxUWXDgGPHrJWfLbUab4wgczWBhDF7B2t3n5cZ9yRiG",
  "key3": "4E8kPCVzrN2FLMhpfNV1LGGWQFC3tvwSWzKvtncYLskNgwnWoNKVyVDpeH6k2EJfM7BTx9ecZs4rRtQ5irbNZ5FN",
  "key4": "4Y4G9GLFMT9pXMFN3czaufFetp3W1J2sRS6fsMiUBwoiPFxbgSy4W6piiSf1CcLd7K3qGfrK21zkEoMAezHbyhRB",
  "key5": "57dnqtSQYup1KRcymLJd74jbqbKgjye64MrRAtEevRP59MeeT1xoLpafnF7mV2nZRCWJZ2CeYhupcHQqyRPoPXeW",
  "key6": "46NZcRcnb8tPfzDKJ7JntWM1dbCni8Km5kDjPAd4o47j7J91TaBScxLoV9brU3btMvXds1w3zpxEyVd6sbHKCVvo",
  "key7": "pLLdL9Cp1zoZUpAKJrMPDAwry9rrcjpNf4gHe4rYyZCtzombCGhtY7rtcDukXGkwTncy8gLj6RbScDEv3v2kzq8",
  "key8": "h5MYv9XwsjGVT6FbR2qNXfUqP8haT2erANboYNcYXwSzYyy4VWytpetqdkBB6xEh36egbnXmoE2xrLvKC6Xv4Rd",
  "key9": "5yZSdtXKS8CMu2XyADsGw4fWiAeSMgmoYuCaFVWN41rGPSqnrNpuiAmmh2dqcLUvXKf54CSFdWW3FBe5i4ggjQjC",
  "key10": "4nyYQX4xDayQGdgwW4FCnmtopyDS33NqYceCppcm6Gp3eTynCuRBH81mJm3Pf1ngyd7ypN77BmvQakJ1HYvqtU3T",
  "key11": "22ZRvSgTNaMXLyKhmWPkwtLTEgZrcCBSus5zu5j2mcuZYWL6V9b1dcyAmCN24Fzpc7wbUVKDcnre2ugm8LL1eXR1",
  "key12": "4VDg6zQa5K65jE2vPen4a2o7qZoSzBhTKmnTJCLF1iWGGyEeY5a4u4Rct6RQULVNNU3Y3anXKfKP8VFQ5Gy46YDa",
  "key13": "5aZpG8DgTMZmhYmDHGQq6GjwMgdsNP4SybmC4XcJYfjHfE2Eo4cXYTtcUjsurcNp7e6edo1aUdhd71K3VkPnxxKg",
  "key14": "2y6TmjMc6ADourWqpQEqzgfp89y1wKeh5Li9c5rumUHnuDq7ddiFXPR3eihHvwsWs7NzHkvtsPwgqyC6Txh9vATQ",
  "key15": "4pa7aovPnkFGBnQk6b12vtSjnH2A3nP7NsNZ2CAhEXMEfydb54c8rSp5euyvjYo8qxcHKA7FTGAioqvBuQuanZhH",
  "key16": "4sNKbNyXs2GPrZJiYUYRiXq1EAFBpMNHttudLwpKcU5tmNfD2U9qzKBeQaEy422PPzM7MAQpnyZrhZMb7Cjao5Hm",
  "key17": "5456KmeWsh2NP8yRWaMLKCbYH5TnzCFeYxvvAFEzLXon2Pc7Xch2V41qhEfriUZCi2EEN6VtzKHcrayLtF2Hsma1",
  "key18": "55weGDbYgLQe9mxn3F61W9dgWa29YfaBtF5kuyeRs6LZ7YNvBGNwpXSY8ZhaEnr8yyCZRt9mXT44n3wa4FvEYBA8",
  "key19": "5whywKQ8PjHNKH5HfiV11Mxgx95xBic8y3DKKdMUsQaMmR1pY849tzpHa2ZyER9DnY7fKwtJR7u8afzddAEDj9fg",
  "key20": "54kCiNBeVXbZCZ6Hn5mETWAhQyTNBKDW4E91wb8UuKWHEXno16KAf4rkWLQGjmxvJLkgp4VEMwXBknTeuXxUqwp6",
  "key21": "VBmxEXc7Wnyo9vv8SKM57hm1pjo8QQytsSouxYaQGY72amJMyFbpe8YWY8kXt8tndweC9u24nAsxAceevsYmVSK",
  "key22": "3jQfEUhpUrP4u1VJLCMCHyawT2hj1D1d2v9fBXxT7gxb56NwwpH5hXgvWwRjH1ZzkahxXk3MsgeBYJNzjfYTmngF",
  "key23": "3qiXd7sGQZzLUkuQzPWp8Qos3VQQzmvKKMBnp6Mfp2CyUWvWfcSiBEH4BDboaJVHxn2G5WHmME9SzQ9NqRvc9AAd",
  "key24": "5m9jGbyz5FEnFR2Vifyuh8HHPg59kZRVRqD3Fjs4sPfqvQGQq8JkoDefmhUTjVxcVvD4LBZubLLbL2WkDXek3QkZ",
  "key25": "5cHnUUeH4ECuspVksY382EWkr8L1WzPChsk3oKtF26hC5hfPTMMgSS4uJAsN1cRuJAkpskVF2eShFpT5PcWSuJRT",
  "key26": "xmDmP1TAyv8seDwKZ69v398FfByGkwfcSLDM4mhEjxpQkuf9xb3t267iroTwNvVAW17Gj74hvmfcbJ1bUuXBE9X",
  "key27": "YjrRyNteLEM7RJJuFSfGjyRH6x6BjDsirJESSVrPDDZNbYGgqUAJXjsH4c8ggrhriFU5kY7RP39MKkuu5XgjA7S",
  "key28": "4NLY7wZq5bBMPhvFrAut3NxYaw4WiVWPU6mZ9sk1dP4DwcEkxRUQkEsswFySVc1Ta2PZXyMPDHZcKEqkJRyysoPd",
  "key29": "3wCjMeqfMN3igPPFBDj8N7AtH5DbusWgE4f1VzEsTJqvqS9F6zuyU4SUmeFZWjCAHFmv5azXVNSftaJCJtbJkHfD",
  "key30": "2UPRaevzpdTxomf9uhXPDtbvRgGHdb56qZqdFkBYBebmy8Yroo3QZgNy8y64qJJChUkVirX6APphpbtgcPqA2DEh",
  "key31": "22d8EkgEv6rqfzZaFRY4PTD3uovUxUSCKVPNfyrFr73azHHbLwL5SKqMxYd6Ssu6n1ebUZmzUJq2dfeQjFHXVnFd",
  "key32": "LhYhBDxyYDguLB4n6X8SmueBpt84xE2dXgR8eUXG9MzDE6Sm5yE5NpAAyQHiMH4aqfVPDmEGACoNkcHwSd2J5b6",
  "key33": "61KkyKAg58Ycit7ML98tqvXaDVCqfAc9SGp2CNjragaDumzESiehEtMcpswQFGAyzizyLuCKh2exmWqJu9kyW8eH",
  "key34": "5jZL2h4WDG22eZsNtm4XCRAvmBwUU5E7GPeBaRHYSBPD11i4dHnfhoANM579u2ZsJb77j4mp4RQ1gPZrwUgRriDr",
  "key35": "4dV6MJHt3RFy65qASbTt1sQRUsMFgKEKFZ7XXr4XwMNEBjxi2qiYPcT38nbrqts21WAF6x1MXmbYPkNTqLQkKVoZ",
  "key36": "4cX9hSUq3QvNEUwnRsVqybdD7q5bv64iesVCnjizzJPsz8yo5ndTMii6Cpidufbucpm2UmnGcJSwHus6CfedhLUj",
  "key37": "u82g6zPTZXSyBeNpaxb3csqQR7e95iESQwtHfkshh2HFsCdLcLTWW5gWRHwrWedNZqKxPCsjGbvCixNzJttPReo",
  "key38": "2mhJkN9dsGqBWa3jkq9Y6Uhrpr4APEt3UzWfyHyjwdmG46XCmQ9BAx929wCavdxGEkFNuRsepLcLPnTnSG6fUXMw",
  "key39": "woycqohU2xvBZquhZ5T6PQnfBFRoZg5k2N3BU3aFmVJ2mmo4jzeXejuwgb1PyNWnygiuRMrQxXNoesaVWb8dCRx",
  "key40": "2zFAFTaYKWQ83xZBd67E7VWuMnGjUs5yf13fxg8BStDeMfBmgKAbnJD6tKciaGL1RyA7LVLg6F5sKYVQqcxU88gZ",
  "key41": "3duMz1b2VjnZa1aCYXH4uXB2Yhg72LviXfBv2q4XKJ9CCB8cBpqMYyapV1tcvRNfc4XqkgkHQwwsc7LjTrH7kbnt",
  "key42": "66afqwjhLqVPHvwvqm3B4LG9BsZAdvzPazRCbfXgDYsuk4QjX2JeQLmqJrcfWZVQS6SNKmgU3U5iFfXbMCxXUQwt",
  "key43": "2hs6t5Ewt5N4eSxJLD7DtYkka1xyeeY9hayqT33jzGCKmquzqJk6yFNosUcMe6yJdJ8pM6QxPgbaLUxM6e6c2bKT",
  "key44": "h7eeB1fDxipXNNNXV3XX9KT9RocT7TetP8rVurQ2Yk584mhLjpH1BZmKayewshAeTrGraVoab5qshRXogQvSvYA",
  "key45": "5w3VEnu2onftEijtazDmieajXSa8AuXiffLSCqqrkiHwZdLEBN33c1WkWRYrcravVYSUoaNg7LfThsGFfHkFJJSz",
  "key46": "5DAxA65W64erBAo2sQnNZvzasyXz1sJfT2GzdbiiduKxx8hJW8YghKaTmFnqxMDz11a6qZ7giFM29164EsCQjGhV"
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
