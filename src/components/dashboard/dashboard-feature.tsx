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
    "4nCDzJ9A7qCTofbfSsF8Jb6QXU9i2S3jL6RjdG8wwE9qT8o7PoGJhVH3LLZRV8iUzU2e9xxMayG2CKp7Ae9WHEXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nG3X4BcqtZrs8UoxbqoAutcVxjNmwWDcmfX482CNqktbss7xosiqB8tpJ4am1c3fxhDZEs3ag821CEdF7oL14qd",
  "key1": "5wLNMM5w3mhxygY2Zr3CRonuaSsEGkeZu3o2d4bbCL3RLJGsyXXgMT79ivJv8Uz8h3X9AbbMyQxFwEEFCPM3XZTY",
  "key2": "4hxYX22guF8WAREhxGg86bUfECzCNEgmzjMsTaaUKKPbPR8krzb6N7RVDXEi8ukdn2PmHfYcpmw7swRHvpo98Liy",
  "key3": "HDEF1DZWFUTRA9pyXnKKCVfEcR9SSYEJgYHm8HeZvhazJ186z5jW1NNDPcdHPjHSbM6uDVV5jX2ym7rtivvMveF",
  "key4": "ezKgGujB5ZR9A6EfrMuXn55brHjnZS6xbqWpSQLRp7HhvhoLjrKs8JAoeu5cKRFY4CS5DvSxNhR9nPuBt5ap73v",
  "key5": "29LBaTRctXPQwtcKigy5mFPyfFhPEj94eANT8z8VREQbxe6zL3AFNXUqqTa5ip4wAkuVG9sAP12WVWpcKcotbXDR",
  "key6": "5W4sWHse42d4XrhP8RRhazyMqBbR4PvoF4ghtwg3gdqj4c1TQs4HWXfp343XiEQD7QRFeEPs9xN5Rjf4wuwwXBpY",
  "key7": "5ssauCM7wd8mQ2eoLBPUNqwmDUkRzqz42VoEe6TeisJNdaFXYN5p9K1ps3VwpHH19VLe3xhLdMVZfmj9GEXcrovV",
  "key8": "2cfDTW92skJijyQQ8Am71rotP14ce7egUNJgnk3d2SuZq79driaNd2cL8qQeFWk6ijqCpdLhL5YY2p1tBKwL1xvt",
  "key9": "4tTVaAyfiotq6TsvVsCPt38GNRBWfPnGghrnPS3VaYLoV1G1VJ9boVBXHrLW3NeCQbXGbJbbeWbHgWrmn8JbEqga",
  "key10": "5iztmrbqk3MnMeSMhtgHXgPZznWTD2dSr6yBCEgHgrbqkE5e6NroaVupURsmSmZZNcxFakignhTdsyQZUYhNzTAa",
  "key11": "2ugucgapuHCDwh3rMDjsKzxXqNJ1NxdMUdQFnpNNs9Q1CGxBpthpFagSmBCfXP3hQ615T6JyYCzp378APfmQ5Gxc",
  "key12": "5REx1Hf7EbLsCccVLpMnjEfenwEoCSpBnP6JhgG9Dm14FPqMsP6SfpAztxKfiDCtshvdA8HLHKPPQue9EArNWUGR",
  "key13": "2q8fgA4vw2W48LDFnSBoTavxUDPgSJFYkKJaMxeigVPffALuoXWtcwZqSwfJZ5RfPqzyA7wmyye1giJHvpDQWgoz",
  "key14": "2vDh8BKZkKqPFvJmuxSQZAjiiGN7h61WxFRebvbA6dHS3dYyS6D1z3FpjUzGCrPqWCYHQvGFXCf6nWNYFhqiemS6",
  "key15": "573Mgv7AWUSTKPPULTgwegEM9HfafhUirgafwAkW6fxNu5EVgWjUkKFeazTfoy699mmrb5o3bVwrzmDZdzLfCSo5",
  "key16": "5hLn6C6QNk5XMGt49skNNdZuXMwMaZrY6s6HMTyEiaN259uiBG3dyZsurhK4uDq7wPC4QzNo8QNkD1f3SKGG4QEY",
  "key17": "4xouwqsJfwLQmkpkHfATCEE3vUVkaVMFCBEafCm3u9TCnNdCamf78mnWitGzFwxF1vdW7nS2WA3BhQRPLWPjat5W",
  "key18": "4PZrwxZGxgj3GmGQQUVFCs81HnG47ENV3svESCzWVg46W3YRCQFV6udk6om5HkJz1eXrvbcGB9BAbhoV8ubzUzro",
  "key19": "7zgLu4BiNGn53WoyLK7w8HsEzEs3vTexWbDd9K4pXZXU3gcSyNyFST8PERvnXvDThJgMANYV5WgGV8MexEHz9P9",
  "key20": "3GsisbsvoFJmKZiYruurKQm9WEMybhQP6QuiqKWtUwWMDWieJb2YEWCNVRH4sdj4sFFp25zMHp9MLUPi1msfjRf1",
  "key21": "2LNyUiXPXuNQ87YqEfQU6kx3VZNCVpse36GYjFDZEhtY4DNLtzv7cSZGNBqpMuCxu3HJBfpyQ2h8SYZ8m5ryYy3M",
  "key22": "2zeYYXid5m3hwZ3guftXyCyWdXoPTemRV2QYFa1a6AfWSTVwUYDdLwjWQhV7tJ3tYkS27qf9xLQVxWUGaVj6yBjG",
  "key23": "5H8zPTZBomFSgeEjPiJSipVY6pMk1TgWBcZnYfHGFU7KC6UGMBMM8XNT8zVeJLm85xZrZ88yr3uatUT3NYxKCA5d",
  "key24": "9GeHZQi7itfqCCo6Lcoomvg6gSHe3i6qwfUAL7S4XTH9wTcSjNegLJ7CrjoDA8wiUgRChVtvhvZzcov8gYfLKa4",
  "key25": "48RUkPvuFc7KrKmuQucnp1mTE4kvebwdRBa67EdFyvhkSuTFqH45tcrHCRURWth8yvZkc4RKYqLuL7nehk455kP1",
  "key26": "3iBFGv7Vx2k8MP9o8kyzemmALsVfbAJqpbMoQcnrfVTrfFP4GS87xw8oFesTxiuGNXC7gRxCFjNKHE97bf2Vvd6i",
  "key27": "27FiEh4Xn47dwoJwQvMF4khjiC27VBE8neT6hhVqY9QDksJ89K8vcHgd4CwxSXdRVTsYK38yJX6z1VRc2vQtRZXg",
  "key28": "64AnqPVuTce7JkBpEFHx7VfZXJ86MzmQK115HDGeBosLLJCywYTrq6L1J2psoigtR7Mjg4e1UTbwF6nKSgtYaLme",
  "key29": "2cJkkdDoGgFzYxgkNJGkvkuFGG1DARwMcKRByYp8czTz2LQsLmB9etPoPpdZChrh53vtf1bMrqQNzPArDSBKHDVs",
  "key30": "9ZAqXGoMVj6HXQxUZ4UANHFeMoUEaamzXwpfC4oSQrc9pApHfi2Nyt5P71HBjr9in9wrrbxgjRLBtek1euKpVjn",
  "key31": "3HFhJwWQNvNAWwWXnYbsfLBnmR43FxWzDCNJMhRN17YndxnojyNQLejqimdvFYq2bhxeak4P5EHkFjtgZMjPWKiZ",
  "key32": "4w2oZ8UDZQwnTJ5koActwk4tJrbJoD6btXrNR2vbFpHTdbC58ZXYrFdD37BCdZ8wzCgJRtMnJF5p3qh3pMefXnUX",
  "key33": "4RvgRBWEnsuNAaAe9ZPTRRtC2urnh8GDcE5mRPLDcYEbzQs9HidX2NJCYAikjDQyy4utJ3yXhwaXmeHhxpAmcFNT",
  "key34": "4bzae7W9WNqTSdop9SFMXrE2SNaN634gyf6bziuGQAjTA9FZXWMmHdRLW8oktCu7e7KGtT8TgVAHXSt4UkyBASSi",
  "key35": "MgZCMPaxxq5kdRdnnDtniF62N36wfFf2cvzmMbV7ppX1h8AdvVLtuxKPqGBdPm6P34S4hbugHskZNfy2Ez5iSy8",
  "key36": "rUGgph4jaGcceXme1DZwXyd5ZavPN2LLEL6BoGU7rnCL6QuWFqsC4eZE7TFSwr6R1st3n7XqxmfeB2HNc66iBgd",
  "key37": "3A3L4CZMsQWo7zVp2SFFb6K5jvKdX2scGvnb1HCXuWBh7EJb7WjryHK5G8KSifRbPAG79myYLKYsG6fxqsTYiEsH"
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
