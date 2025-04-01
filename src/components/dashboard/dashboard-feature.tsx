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
    "4djrgc1xMEmQWiF2ViSD71fiH793GfoDb8Pt3oYkuTiJiQR9Ei7pNYdqoFgSEPogDkgVaiUCcMLoJ9ZH2sCmYWzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qh3YswDjgiSLXBixX1Y1dWCHmPqa62ezycHhKj1k3gURbg2EH4MqaLLNFfTQUHqaqkw4rgmtAfwuxaK4gVgrQzD",
  "key1": "5UfP9joQv84kHUmmUNarhpfJieRZtozPYdzXA2nMktjMc9QHrVeJ4S6LegefdkDBg96hKeFrggAwyuKmYFKkBM9W",
  "key2": "5M7NAtL64ZxiJHKSL76DKQ3jNbSL37E3MK3LSfamWUAdP89TB4oQ4B3XeBXSshcSWQw4M8FPdiirvBYBrab8ygoX",
  "key3": "5aEVVRKBUY7tW2kYEDX9Py8KUKRPnuw2rxRoNJa68Tc9ZUvj6m8NkB6aSLVdUDpVH7sBVc7zP8v3pRM7YyDaoatx",
  "key4": "4zMmxvrkShyQty1eCVK2pv3wzwAaSv7V6xi93yeumiwf5VKUMxxZHTb78gP9WzEGsa747DDpGbzSjL2skmTCF42T",
  "key5": "5HDPvN4RvV73kL9A4fbXj7dsJMRJUNXss9nZUZWshSXdx995iyVayoQUq1B3yMXLMC8yPcRzQmJ58nDmspLNv5VE",
  "key6": "2X4Gj3ikWV7YJFF2XRDgRsoXeE5WJvQd1KKyu5WYAJGM3ZmHFhzEi3NKbFWL9AdK35AYcpGxnb18znNWXi1eYB5T",
  "key7": "3pjdGAY26PicGTNFFVrShdatmXvdiF1qtDVoB2THsvY2hKiGdgYgy1VbMZVxz8qBZct8uuUSgNKTADjSpq5DDrrm",
  "key8": "3YfuU96gZqeuhDQnAiYZM2ziTMWgsevkW52hLfQxRQJd2S7zBPD8i6w1gfgXKE9R5RfSVFCZFFZm8asawgmajEGS",
  "key9": "5RaETs6k1J1x3XcAcctd22xnfeEAuWejvkJixG3BSD8fDLorrqcBqvTorUqM4R5koDVaruSbB6QJHXTwALJKjKJh",
  "key10": "29imHgsrc4bpZM5YXcZsVvaJw2u5tmuXDKGYBphdYCeVr92JrAb6EgYedH8BG2grrPBSyhviYyMmAesipsRwoz64",
  "key11": "JzS669FeNK5aSooj7bocfBDQQvYQfxig3ei3WNT72SDPcGhh1TAqxVR58dYU2PyGdieudXeddSE6Lupwk9RxVpE",
  "key12": "4Fjv6TuUPwrX2XG2qJSL7JWFScpfGruL8QGCjqub6CSMSLV1DcFScCUHRsZq1rc1jyuSSH86WYE1GoztZmBpwMhy",
  "key13": "5vwtR7GnUmBdjsqkK98q9UfVzoawnZNsGjRfLX8CyFmdXrRNpZzxBcShV7D4uFDDCHXTQi51dgwhwTzLgsbV3iR3",
  "key14": "28DXG3KYbjxzimJhuoDE5sexULjfCvsAntQweZ43SFBG9aKcCzsaY1uJFBwZiBL7yUr3eRTf4ChrghMxhqjYsjKj",
  "key15": "2nPUzbBvrskJNMHcbfpGcWtm9s5exXZQecEU2VsEuF2VYTkdykuwHKVzacudXmNfdFRMj2WzLEcUkvwynzoPd9UV",
  "key16": "5puvA9A1uUdfsZzSzKgYyfXKGBqMrKvm2ZPohPvpXzFZAe3QzoLLgRb4HSwAq9dgy6v7GkvN58qPqt1FzPrJe3yg",
  "key17": "4TFBpWQk18akqWUVXMvAH6m9f8GXtt7p15iLhNApiVSZkuL2QoLDJ2THSRd1viwEz1r8F8vKkyKoDyAGdjBhL7eC",
  "key18": "3RwxGGkbePYbUDCnedWVeteCrybUvdCwrQEsmpti7cUTP4VKjqepU3LrEWJfnu5fXDFumFqUW4RgMh4tHdvxw7ug",
  "key19": "5AN4zQtGt28EYjFjYtBEFjmuC1DRsZF1yBXdE72tbNyitqMzY52Yp1UQE2dbrib3xEefuqvH6gu8UTrqtkp7ht4i",
  "key20": "9t5USqPKqH1qbX2UrPeVN9QLPGSJFHSUmjy3vKvSsJX4JwyQDyEnyLWKpkzYqsHLBZP9cv4wKxJSheaRxyVttB4",
  "key21": "4aTGDoTExrRMAYkZSSJAnEXBqRPtLZ3aPLekdGVrMHEdq9URxi2NbS2W9MA383aZDbB7KZaG5VVtUUKJrnKXTSTm",
  "key22": "5TJtipjWZr7QE1ZFEJEZTtS8TUVd4V4Jkm72Pr1cLWUj2Qg4CWBLuCauAA7H95n9UjuyunYSWn6aXnZLAzNYTSJe",
  "key23": "ygw4fy3Ucuyj46P8h7PYnHPKv95qg3ZqpJentez97oXKcByts4YFrsMwTXQSe8C7ZYgfkXHYLUKt3wKzbSurtBd",
  "key24": "5eNuzLK9Jgk12Dv3hCKKUbrCPi7pT1ByQoJo3XvTgd9LJQdHK3kP3HzefDvi8QhwP5kXxe2K4jrWkrvbDdYjAuVR",
  "key25": "5Zp19SV2vN8QT2gxwV7rgG6SoPU17x1k93aH9nJVDHcytGoJK9VwRKcTQo3bFrgHZdG2SKeSyHPoVwqJM1E3FG2F",
  "key26": "34rYy8mxsCbp7Uaadum2hQFPbhy4RdzkjdD2JK8CfKJRSp2haqq9EUPdNtrbEE2baDoGeMBhn8NqGTctKZUfxGwA",
  "key27": "B7M1VGDa84EABgDChByKKjm6vpkVv6REuHaVV4HDSEf4zPF5JLNZMQHrJgbUn46AUAMBqWPepDjK9Ea95PpXhcf",
  "key28": "65XiifF2AMd78iJE3RPqnqJSxKXWpLeCd8o9dxe1TQcrzdTiLssraywuSBPdhXnLJGnGYheTr1hbJP9bevavWBdF",
  "key29": "4cey3tuM5dgBhZrXdU8FxUrzB45pBVuZmVWDPRNBeypRUqoauZDLc622XitbcqpCUbM7tKDeEkMor92X3mvpd2Rj",
  "key30": "5Ap9KpR868DTZQT3vi2WTAhtcQBSfjaS5a3V7cG4FKTqe1CA7kwBGzNit6ok1E6qaeNMkdbFQ4K1hTUgggjN4dhE",
  "key31": "hjooK2L4QxHVt3tpG5TZU18K3F9UUjgKaodjyZ4PHsGzJBf1dKycpNv6KpkYu1dHz5iUVbUhCsmA8wYLDV7uHsF",
  "key32": "3UyVxDUfisjnE73atZEpAhYtFMFVSJwpkGKJTvPSW4NtwQ7BRzW7Mii6AnwowF8QbKwsHZDCaaoaDpQxU68ZKaww",
  "key33": "2G9Djr94CEsQ659Aa4j7qo7ZdjM4JCjkGAsJNRHRJTze2P2m5a1C9URT1SGNkBob1EWSuFgHdv823cgStx5897hD",
  "key34": "5Uo7T9F2ck9wfsL7MAb38XmHLJ8zh7dY9WCBBaXkeKww311naer9QHm1bMDZYb8AoHU8eF7ZP3upDQkjCphAtCjC",
  "key35": "3AFpxjezdCuGSsoMS42C5ZnefZpvCMecSwQWsEp8iS871QkM6CnqVUGU3z2L9gWVgykrXn6WbsRpmsXXG33WXPr1",
  "key36": "5kyHqC9gisC2npUctcxyUt4KbmXcyuaEeEKWDYBmUGqWr14Z9raRHYa8CyAjqcvpexxVA5YWw5jRUbyr5cCojstz",
  "key37": "mrUuANC21gMP1SsCSEmnbuNo5xnYGMWkFsajn2QVLsbSvC7jJ4bwCMHqNfaPpv8NYwkjJgMfbSQ9RR9WUgbRmyj",
  "key38": "kmpe6DMUTMWFWbzRHYXMMX9qDm2hcu6QCPjfzWXkVfVahmXiaph3iQFTP1vdpGmSm1kWSZvhFYa2YgQuRV69Jxv",
  "key39": "4AubzsCxAdD2PDrYtZCUGsokri3CJfL9yc5Zs1ioWB4JoB7mnY7MmEYyZwKUddS6Q3LNDNjEUTzQzKV364pCpYR5",
  "key40": "2fzmUArRczAxFKFPBtVDWZDP2KYc6J8rCPLbWHvAxYBQRG3DwgcYkWEqGRXCGPcjGueYSswg4bfb8z7sCqnRurPy",
  "key41": "51FGM9qphAen7JDZTThNBBRJYMBqZ5BHLeyMYqHaevbUYjqTHd7qC8KR6EebYB3nxBTbWsS9Zur2zUA6gEqhcrcZ"
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
