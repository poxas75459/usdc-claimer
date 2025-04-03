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
    "5YMfaSPUgHLfZ3UmrrJPiXYiY7p377WfZRDi3mbcJ5EJHoPN1qEECZ43zp5xpnhvveLZ5quNeaqKX1y5NSFEuhvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341XjhSVThzBSZP1AT1Fvbu9eB8pR4rJjxStLS74iJ5YD3ZeYEzgeo45PgFZacqzPCs9uz9z7rXWTdagNz3kjGc7",
  "key1": "3VFUSfxJFrLfFmqyT9FEtoDCkQonYfkXqts4NS7iyxegGzCte7Gp9AFwGW4mDuxvKDhCP6SgTP8yuqpeicCbscyH",
  "key2": "4vGD4PcQiTGwiUN56KMsbVSJ35Y6hpxyvNrP32jQZ69qXuKBjzkhm1HMieDAdMG1qr7XB1YRn27H8HyowTwAbGzM",
  "key3": "2hriNdMnKGe64hZePAdgbMmL3Z5KtZajCVo75aq2NPKMZueXWgmpyVn1U6rHjPLVsobXd8KWb96cC19PWw6gpWo4",
  "key4": "3hU7tdaz2bPbpazUjAuEowR8KnCsKCnHRthVvGx7aftxVhyWcUU1rJ3yPQyuyaAn6FLdRGg3C2LjCqRRwdrVg4dN",
  "key5": "462poFjXS2ktC3WxUULVry22uXATjqp9hSWJfr8odTyPzxzhEHAsqRjKGAr8Asi3Xqkg6sUNNW7SNDBAp6uopv1z",
  "key6": "4SqkGNSSsMjUJHCLwLoBNbRKoUVPAuPBd8tCQ1wbUZe8BBYA7LJSU6n6YsY2Gjy9eiYcGx7FRaXiJBGNRFg3AeKF",
  "key7": "rYbPhNP2jW5HG5GgTcdtQ66kdJmBeMauAQfyAcw1wPi7d8C1tCjnM2EyFicjzJoy5VJLvdUwn2gq6jZtm8zwR7E",
  "key8": "SDh4bZagA8YbS22dPWqntcTzstoo82gGAURRZ6UUxdsg1do27uNtPA6Yi4Ch8tEZTu7TWWK1W1gcGaLrrB7MC3B",
  "key9": "3xdHP99cKaZcmRuvdTg3tJV9SU9KhFRgWyGWyrKLuR27rEqxNSN32pk5G8qrDLKxiAwZ1MneUYJp6s8N5TNvSUtp",
  "key10": "3ytppdNWnFVfkuFAiUMx3ykuANUim4GcpVcSwrcCRTyGpsHUHPogJZuaR8QPnDqwyvynCFCJ1W4pwEsuEpefnXyr",
  "key11": "5iFDoVGZY7DaZy2BrJAapvsue33GVqE6cShM1xs9fBcBPiv2MAvCVrX3EMfrbbm4KmbcfDvD4w11cs1JQ3hiEMgF",
  "key12": "42hbTsZewwPD4h2qVnfTY57F8kZnNqJmsXook9EUFNU8KvqjbLZ7e6ukBKN6Fg8ccFRq6XRR1inWUGg2ME672NtT",
  "key13": "3djgGn3mEKdbqz7WVYFSfWaXBj5rvcFXzgUjqHmQP5sNQJQQzgKD6HjN5ZmgRxHASVNyk2LtfAnBfZmiR3oqLFBn",
  "key14": "3tHZ9rGjqWB9FENeaJGQLismE8vjHPdRLL1pQ3fK78dK71NcQ3Uhpbh7kp2sRqUj3BiXgiihULUV1UH3G38oDKKB",
  "key15": "3kqcuMe36AZ1NYEdrsC2oxMqpZdptqaFPd4NVLbdRLMF3BEP6hLbE8MMjcSHPDvjatbLWzeA62mGDASaM981r8ZH",
  "key16": "36JWExbyzUvHwUyEuMpyzPRki6mnmNrReZXJvBsW179Q6QiAcDcvJiAMXm3FqCq1Mi3dFuJcg7GfkgLbchgC49LB",
  "key17": "2vivgpZHFSLm2RubUxD2KUVmaZX9o91m9Pq8RKFRRBqyFTs3721bsNwgwSc9RyQK9nXaoGaAeSSaFEpHyGJ7wy1v",
  "key18": "2CJUNMqzB5HYmSy1okPLgurCXa1otjfgb1atyG4oV5SpckqDRhoQEngnJ7qaVwJGsKRQ2LCgB3ex9T9W384pu3HU",
  "key19": "4YF1EHK5LHsWQfjfSxVhGkW65zZM3PjtnVqd4EPKQjhyfnBMmLUNYDkhLp6ytLrXoHXox2grEn2EmZSfPb8YNtG3",
  "key20": "pZuBk2jzVC8T7su5smxBqbGeJDvNwmZufDJz98hrUomcrFCQa5D72GmcPHEUr8ujrgD5kmaU2p7MysyAiDw4u5j",
  "key21": "2PpAyWLnzKNBwUiST7PDC6c4QY4gNfDCtFQfQHXU1jxhc76baqzptz6jAimA9jwNmcrCoyFHMVnHv384Ry8gSKJ2",
  "key22": "3JNhwcLQfRMfZuNnwzSJX9W3JgBzTjoXcqRjJFSWgmNaaNzJ8f7Rm9QZ3L3itpw62jCoSeUzHx18CwoSNajcWFfx",
  "key23": "w4rBnzz28xZ2c7yhNoV9ikyyGaPAABpGBgcU8eekLmYfkpVfbw3Fes13ZWeUSUNUrFbZxo1eayRhfN7KwwjNqSd",
  "key24": "XTi2jZLqnm826uT5TGW2JfidwYHXSs5M7j9H8B4dL7Sqm2S78YCTfJXARrS7DvEqz64SQqCCmgAuQdhUdzoUhCu",
  "key25": "3cpFgZsTVxq4fDYwwWXWyi3aEQf2axveBjdmmmQyKdw7WY9Ry45KdJy66RLN7tqjBZfdwkw1p8kYjCgkpdP2563W",
  "key26": "2ngQiGWWBWLS2uYJrPhCbZ4wBV2vYQAJhfjyNXbHUpxaETU9Qbq9Mdtr4hLssYDdpjnXisZL7diyX7w9fMVe7keP",
  "key27": "37AjbqZXJn5DxWAVRZBBtZv61TqQuVQV1Nt7Ynd3koMxMsbEBW3dCmeuzNiKKyXtWDic5RKDNDSjum2SbxkGex7k",
  "key28": "5V7WuehUnqRy4cDXwFb6ZQ2fHbgEi3HcbEv5htcN5vepEgioXwZt432EHLZ8TFXVSsScjieFVVFAv5Pnp4CwLRqk",
  "key29": "3hrHv7KpZZT93pxASGTPPTtafYwRiuyEFjm8AtpE9uViioNQ4LciqHG5RKosWFCYCrowB6YZavHn1psChz8miBXf",
  "key30": "2tYmab9s9NB9e8y1x4XSd66M7KdV81KMox1BkJviFLmJD3PMYpe3D1fL4hS6wA3CqusSiaYn8JAFqQNfoRd9j6xQ",
  "key31": "5Zg48uvsFz8WtnDSPnJxf9h1YqmyXU6tYkyiXbjyk4S5igbMKR3b5aUaAxJdKkydxccsgQeFzcQYGG25MzYwFeqE",
  "key32": "EcXV4bmHN4dvFStr1w2ik1jNFQzy38u9UBcN1mxMJ5MQNSopxKK1XtdGKe4V62NywkMh65oHUmkjWZN6Feqbx2N",
  "key33": "3ne2FXLoUjUBbKA5EiSGMApTrhnJS5k4ML9M3PRqo1yarGBUKWzM3ppLqDH5UT9uHXeKk2KM96zC6G2mPvp62E2g",
  "key34": "5H9aZPA7tfA3FK8b7b2zzAUMsPn8gN474jpnmm3ffHvrrtMBcWS2ganB2oW5t6sBP2hh4Vbv1tkYcT6djXTpGJTS",
  "key35": "2vAbF258w64gTeBLNTfe3LBJACchGW9PNCvkdNjoW3rZPrktsJyRJJTH7zT54DGXZ4ydh3RrsWNMh9VFyzBMnhsR",
  "key36": "5VRZhUYNXJh4dewU3WPxBnnezJTNyVZk5HGHaQUrEW2tXfjbFLrpdTLUQ85CYWXYS3gZsFKarhE2BhGkfix1USjF",
  "key37": "5RQbQNry61exwKJWFGGSTuqJdKY37HmLkpDv9SwD7jSS9XPFUoTshGj48CEAEbUXe8J4SS9PLP6MAMcp2tEJtpEE",
  "key38": "3Nbbg9cUQ17GoCfpskzZgAtWqWpD9ibQpH6N3qT2z86UMgku4EWtyLwQXZ9cmHQkTgFNngjmssZz3g8AQTU8r2wV",
  "key39": "2sZo5DmbfRDj1ix4rUTzAyZMyXgM9u86yMxheoEeDZHCYQfKHGktX1U3g3xavqsft85LugHYDkYzdd35FXJth7bf",
  "key40": "46bxzxX7tgsud6Nq38pEzHtE7GS36nCwLEWMzQ7CisMFEvVxiEHcWbKMxo49xDubUZRn3ySn7E9AvWg2e3CP5gW8",
  "key41": "36T2khxpHPnyvxsZWyaGmNNgM2dTa2ujGdjwSAGohSRbttP52eEiyHdVhKVxfmU7ZayFn9yVCkUsei2vEEbxjRje",
  "key42": "4VSJdopTmZnTH2CEWtPo1p7PwU643Me3SRV61SyYWfnHg6VTdHF5QSXiXFp58vP1nmLW5dXFrqVmBBs1peHezgTn",
  "key43": "DWmhhzdYDvqJZfhYBaEUrpaTKiCSAQNJ8eWepNLjA3uVD3hPuCk2bEa7UVovBjhXzaux6c3nvN4NuiSMqRN5BV6",
  "key44": "4Jg17arW55q36XV7hBvHabcyUFx52ajbZ8CzKQ9NoR3KVzXwSNBiRMjdnLBfg6KCqHLwpWsEkMdPikMzkfVtZTMj",
  "key45": "Y97umhRs1yPNS8YkRztXSoJLpHAuGs48z6A5XdchoeX5WcURvvMCABMm5y87fYrafy3seMS59QEqW5bb2Eu7fdY",
  "key46": "AzprMgtepsZW2WcVJecoLMFjMHucGJRt2mDmSAeZK6e1mFhWSu7i7j51dDpMLmNKD63rNP77E1XkchhaveYjvTN",
  "key47": "63GGDs8e7D5wGpNbj65Pii4ABsC59J6HMotGYtVXt56xf4d3KF7DDnWMRHnfQG6EAJVaoYbhBLanJfpv7N8BacFy"
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
