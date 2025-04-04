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
    "2o7gfjJrqwEre6t86M3t2auU4q8H1GNxgN36xrj9pgqJjev74zkiJ9uNmRi3dTWBqu8zfhVRvTaUXDA9TQHki1NN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qEcXykLb8SA2GHNTeuwbDAEioesD48R6XW8qawP9U9GMbtiKbraHUukFQN3if6mXKni5rwSgZuzAb2gnfTDCGpc",
  "key1": "4k6wCAjGTK5RBkok9E5oR5YWM7KJHzTxWsfwYAEfkg5iGrfKQgjoYVYTbxqNoPvoHS8UPpCCaBFCpiZWAkFj9Kq3",
  "key2": "2Q7TkLNgXWaLa5VLG9CC3aPYTu9pZDzVmmqqrvdDrcw1oDCqCCZKFu5ya9QCsSbLxPgcYgN8BbHnShEP7vsVfWuL",
  "key3": "2btA6832mLnskXP1LBMThQXH2toH2yuxBrTTx86h8udvnCWMeRHu2xBLPqtZcEzESm6BpwYJe89W2n2kmapw7tUm",
  "key4": "2irmxZ3Wc71NeZtrPBgYDQQB8M2ZTZxJmqcbd2vnBR6hNa5xiquTgEz3JjYeCkob4Ypp4hkSHXPgD29aPmHan9t9",
  "key5": "5Wt97BdSkzm2qdrX4GoAe5bFvxHB2Lv5fSNCynY8Dn3j3FiYpgjsdEFss4adnX3e8z33v7T36PGMt5t3vTUNPLV8",
  "key6": "5LNUFgf24DUCaYHT8ziHcnhfsWyB4zgLxT4c34tc5wVZK4gcAw7Yb6AK3AGGj9tMCP9mcPuoD84hB4jJQ3bWAspg",
  "key7": "3gjZfArwk9pmUtcAoRUw9RDvtzeWLuLFxfQ6Zq3mJgCrtyapBV86KBCjLTZ3e92xptHBirT6qeUM5kq3fxM78mkk",
  "key8": "38xFzB5rvixBNp6eMVLrH4PdVzUkE9r7wWYpiKAANgvcjHHuVKrkHjALaDkgNUcQhooEvE1GaS5QBEKZq7fS6HDM",
  "key9": "4emhKUcSj3ns2fdYMGUrU4oGL8tf3Fk12dy2hZJ3xcg8UDcwmNx6xXhVYvJky4qRWwC5BWaoenkpVRyrmXkfzuWp",
  "key10": "4pxCLenULtB9aMefjp3z4WhavDmFEu4D7bErfJJkinhQmv3yuMxeDVtB4CaJ9v9ZBMgEQcLwYBMajsNzcwSBXYvd",
  "key11": "4N85NaKK5WH5BqxxhTW3ZQxqtTb3GWSUGo2PCUu7uniQtBUQEbrecTLVBpsYJbKjbNsksY4rdEx5KkwzZGmWw6WP",
  "key12": "5hQwLdgfKJ4G5QqTGaUHrkmpNHH5s1EQcJh3xZ6uwKmoWDZVPHFo7CUBFc95vJSnz8zVHv23Vd73XQKH2SCtXCZi",
  "key13": "5aiozPkjjhYv9XC2QvYTsJvn5uZRcB5N99wWhSxoVoPUj5E6YYjERye85m5VP5oR4GML4mh569F7qnJF6o4anM1m",
  "key14": "5MZ4Yhur2GRsRvAiVxToVNBGRC8dxnnmXGmc8x6rqxKnauMf9fyUzAyR2qE7exqQZx4exbZyGUdfTZj3cSqfuaut",
  "key15": "5zi8dNJNRqgdW386mQh9ekhxospqk6PPxuSHjpM9HsZojUy28EQwvNPqHAKGACqhtdF8TdjqFYxVKay2ETo8QkiG",
  "key16": "2UdmGco6C9NfSo5UYDu9rH6PWeDbkXmsSfPfPmTD6tbpajyryzsmwhhYk7fGSmoMPsiR3g1roWMEPuGDWqNFp86Q",
  "key17": "ibitTj9Wy8mCdDLjpMBrNKmr6MkaWxWAe3UrRSFriWQZzwN6m9ZHpTHi4LiWiveUXvnYETe8pSXEDd78DuJq3Qh",
  "key18": "2jEFuUZ71pNLf1Cvd6m6p7AUS6WkmQDe1n7btzrFoyV7joAJXSE33mqcf5AwUaBupFUYGW1R8ZegEckPhJewp8nL",
  "key19": "48YihTEdZSaMMVtRvaLgDMGCB9mdL8eknLbFAByS3BARcFUbJ2Hcvacmv2SWr2SJZ3bgGfnbgcUCENQCr8hVfdo3",
  "key20": "fkm5vAX4r63homavjws5M19jAwGDnw3aeWpFHbTE2V4aaeenbcMriKKG7Q7hYNPaNLeVMTVpwD7mXJg1ReNQ88L",
  "key21": "294tVVujVULAU5tyB4ZTC3HQ1cdjNZohMBZBtoKMLnnPGvNFCFrc8mZQVzvFshkFQPr7GEnQuu7uXJbXg3q3zdQt",
  "key22": "3qkJEReeXXNnCQESXGkNoTTLy5h8zXpJuQr4TnAq68Y4d6QwBfZyTN1qKTAeQfi84wVbv6jJKHB96aLrbk2AjLjm",
  "key23": "5aUpKwBavQyyRBT5Vumxo1GfJg3WJvfekuTvpr247rvob4u7hwMu4Eaxerkx5F3pu4p3CKSDoUFv3VkG4SKtGXpn",
  "key24": "2eQGE9iVN4DzsvScFBKAoWP521nnFQUwTPvomV5gjXPyZ5hr4bHr5abjA4VqZpq8kSErZu7u9myGfygbySyyf5mU",
  "key25": "5rBTFfudk6vssNEmibJLbAp7uUpdKtFvf5U3TpsQ8Hw5Z8rsFzBuaRdaaJrp7A2mK9H9trHdFCXkpv8tZQr7zMwR",
  "key26": "312GLST7c9VEZTQvAvZazbLthWHX3kctyqBQjYymeipuFwkg37QwxZpGfXCKxTWP1d6WXDejBQPPyW7rgjBtEwpr",
  "key27": "444RrV7ALsYTPXspMvhhnmAx5g8dMN2bQtXvwhDNzKwHFJw4x4VRDR3eh34M9rzLWKQnFEZPCWguFD2vH4EPygTG",
  "key28": "H9Cdt5csSDifF4N4mHawdF697Wj4eVG2wDyK1vvTdAqWw748hjnfUKntWyAH5dzrctwWCJQbUpanoN7g9RWb3qD",
  "key29": "wqHQ1RzTbesQfSPBtYNSzxYpr4WQZXicHUnGnMxLegwMwyZqXA1xAjhhMcaL11Q6sVvNDKWZkAferock9xXV9NT",
  "key30": "5QYWdJWsAveDXbyFiHC6dGsBCKNWwyJuqZos7gz7PiVJTvx5mjA9hdgb8oXWByRdDtAyy4jufH8U8JBX3PPNYQ62",
  "key31": "5bnSo3sdzwaggtjKqEfQuoJXaysct5cEBXqoKVFEuC4ExbHuSybTA26nw8vny2vVyVFd5uRjVzVGTHikDk8ZTfAL",
  "key32": "2zJPTGsJU2DdHepfyrUpQqac9iSmiRJbtLsYjz2v2WSiGPhyaPBZHYCrmU2maXeFLuJP78xx6mbNkwQceWLY5o81",
  "key33": "4fqzRHThM2ma5DyrhmkLnvavKEHxh1L5CGDiRj5oTdbfhkufXm3K944MAfBjyXCG6Meyx3Z1rDa13aKECpdzvG9k",
  "key34": "4wdtTKbcSGhxQjRZem7xjhAFEtPuYMZ15TYsZAfxtojLVtnwWLiccry6bAvmhq8T2wGhc7kuWoiMAkkBXdSB3ufF",
  "key35": "4pa5P3JKnG6jJ6pvX2KwoDgCsGdURnGRDZibu6DH71sY5Vtsw2d8VYTV48zHdPvXvjHfSMTsqNRtDZyX8SMiKyfi",
  "key36": "5fr4XxaTQohDwRtagyE2LRkFJ8w2dt46vBu9Ur283sFg4R48j7DNhTNy1HNV9yPafAnkMQtVYEESh5DGENdukD6T",
  "key37": "4YKUYBetrb1yamk1uvCSxrWLAUs5E7afdgQW1egMgcpePowLUavT52P64sdhDFRNvCbiiDd3EL5KSmaGdRoGTqrM",
  "key38": "2tzeVKK2DqQfhjjAgkH3H7u1i9UnSdDCVF725WzkbDZoQAw7BmZeA5dupJqEvX22MGjQ1RsDYi4v5bvU4ztiW3sQ",
  "key39": "3Nu3qCXAbpPD5jxTM921P6EcBw42gBsdJAW1bu3CdcRPWr1VRe7Pc4chUwVMdNuBsxvawZxMyuxLzqKLgFTN5ZNX",
  "key40": "2ee6Kwu6HrcqdbLTkWeRUp6t6DaAfrKcsxjKRXKSXhqYorvZqw5bDj71ZtJBsmt69r2xztBHxLX1tvnpSTiUZ2eQ",
  "key41": "5QpugbcM1qyH18iYM8VRXN73L8EtpeUtMu5Qnv2uM7BjX9N5WwLJWWR5AK9FHfLa6L6Ds6ShHrrAZpzm2mwLavUN",
  "key42": "3mujvwsrFk4ZCaMn1k8EKnfhTc3KMovf2p3yWxLzjDTAr24EV33qgX6NZzwgMyztVR3RVfi4kUqV76mKvc6x5HTR",
  "key43": "43d2fVGW1aFcCqvt8NNyroth7zRsYwh8U7ULkS2pLn71A7yx3tVr2ECXrs47xS41A9mF4ZRTkLjUJLHUmHiHpEVn"
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
