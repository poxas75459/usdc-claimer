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
    "53CqpYQwp549ZxkaLzyt85o4zTNWvSw8Zau9hRCt7U7B5arkeHyMDedAAeqTrfmZrVAiNakPt29RC14frnSGfrKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCPNkCvhnmrKgph9Tr6mLC27gPES2JdgVTCmeQUmvAEYFrSrRC9Koa1CGikuAK1cFXQXV69AVvyxjXHHa6xEMwS",
  "key1": "rNUoz7SY5BDxQQMgoNKmcD2AAhmWYeBaStU8PqiHrSsmSN3X5HLAggaHryknH1cqVJNhUBmZ4e2Rn3XRSv8wqHn",
  "key2": "4deAmyVhiyDHprojtpjqaScTCsJXfU26b38wMAUdgbbteJgugDNRjAG1dLqza36NaFS1g6Sf2NcvAaDrBjeqhu26",
  "key3": "GMeR4bDtSQ7AJreHci7WNza67qByDUNCvzhZABgnUdLTVynCMTDvTpsv2VCoaAC1XxNvWrXUXYoGBQAAM7F7csi",
  "key4": "5PJK1yNsfRjtaNWcpxyTNJ7R7Nj6jr8Xd19NJYXGaw54WtZU13e3ec7pYp2YK2A7XRuRMTxZXTeLDffZEMc45g4U",
  "key5": "Qy7wDMwSYLrujkCPag3hmwpB3k1e1HcmnxaaTfaEEXTHPWTPWsRBFTB4SG6b7X6RQqB3jN8Zbkc8L8J8t1DAPDr",
  "key6": "35zwX5njnACzvmTJsuf7fjSp5ebyZFGrVtFbsQLyHxx1XfvPQ8Brz1Cg7usLPh9uwmUaTS8MtQWYKKaxMAdsSzp7",
  "key7": "2rm9rE1trpjW4NAALyJr6eV8eJw1RqAhbb25zSYCdTAk5nDKvDcy6meguWhLRUhckEitXfDH3Uf68sVxrvkPq4mf",
  "key8": "2iHqNspbJCLja4aahujUHmQvL4h74LLWuALRERoLh5UoPaxwRiNmKbVaRY5YCY1uKujuDcdzpQmdaMKR3LEgoDjj",
  "key9": "XCWuZKJQAYheTn46EGK1xsNgekW7sgNasJufqeNxaHhN7oMp7t4jUA2nbvGxAJEJMaQiPnhkySXFuhgK78Jqq2s",
  "key10": "3zBz7jZMWC3rBeTpRXKa7z4TAWVFxoSWNBNzZ8tAQC8DJrtqJhg1CyFLQfUUme2YkWHb3HEqmwndr55yr775MyPi",
  "key11": "634vKuwYwZDsYxKpZNQKBbYkqVk9Hg1yQyHxmtpNzMJwZ78wfWcQCnY8UpeRgFUUJSdTyxsmsMQzb4HitibLvra",
  "key12": "4cGUt3TeTZGearAXxa6qBCYeyHXkr1kcNd48ZAeYEWqRLD36znfw33Yi81N9kjbFjXt24R86Y82KstGSFSwpU8AM",
  "key13": "41sHiaC9oaEhSNniwjNWqU6PCf4MoruJwR4De8Zz89x1ievcr4AumLUPWda9B3zXhLZn7qKNdYNEbdJ51oH4Jyyo",
  "key14": "3PrDWsMqB26FQaXvDRwgX3vX8rNYQ2BhUMQf7bLFYSzvJiDKPtTnGGRfdYGtpZCJ5s7c54iXaKKY3W4m1MVGRXoi",
  "key15": "28RHjcXXwhMsoduqBGdjU3Vgh7z34KbKAcM4ocmUEju38TUdYHWtS4M4xNGP3oG19gT31771YeHuZwKoZKyZowa5",
  "key16": "2Qcb3ba7qNKWM6SipvgS7Gi8TPUbeMkYs6v1FEZZcciF2evU2FQdj3AaLeHkPBNRoc73YLLuxae5fv4F6L2yWMqg",
  "key17": "5earV3WMMMVGKSaZGDZXDLVnEJjRBLi3vLaYM7eYFDr5LLsfBig9qRbhW4A62q1sa9xg8wKFwBD9DQjMqYpvg7Gv",
  "key18": "5paD4X9iWiNGQQmDv2gMGGQjif6fi3eaKBFyfKAwPPbozBLZn5ZADLUCTV1kfBVGYxnymub2PbX3Yp3KE2azpzfu",
  "key19": "2VdmsA1U2XspVt7p9sVKVx6rZgRrX9xXhMkvnva7ASCLYY8wFDjdsP2JQFByh9TZVoymkVNUMVy9C7A74Lv2YyH8",
  "key20": "56jSEM7woo5izPTkdXuoJ5Q2upA3gZ8nnt8FafmwLhQRz27jwjPbBGNYWoj53wEV8jM4hB6tQVg2u6g6rXT9sRB",
  "key21": "58ecqzTqAUvBC3pxNwnCmj18qPXXPjKYqfbj9btzixqVbftpZF2C5LrqcztbugVfXNxoVYurTFPiV7Jtfyf3d5H6",
  "key22": "Y2CWYLtLTcuPWEdsawToTTGD66rKhDh431VsCvK3fe3cbuHnMs5gDBTDNjKbFXEWpH1zp2ZELRVV7xWyaRje4q6",
  "key23": "2kGiaHdaVTfFpzW2CHrMGSzJkXCNCEL74yRZjsYtUSgLZ37p8aM8a7mhMJvwfXivdqRSEh9NE8U5uch6H8BZHYcs",
  "key24": "4GykcJoitb35nrE8B4thn6uZxDLmgeDtv6D85tD6cM8Bzt72fEpmwRExXevYiYdBZHdhg6L6Y5wZRdrcHxHSsp2N",
  "key25": "4wXYFm94nyqDBpNH3z54R3ByFfpqajeWTnwgmFQoCSC6uSN7F5UiSHXCmjrBqfXGfxTFDD7nLmuTGUBwfT7vaJpx",
  "key26": "3Rub6mH96wR8j3NwwsUEyHN3v7Vb5RTiFCvdG9zRSFvnFrY8NCYSeE8MBSX92ncMcHoMQrWp1rYpEVLGYHx7Nu6A",
  "key27": "quqwgjWGLaYRPFWqvVLxqZ96EH9KK7G66EqAjTLWtrcijNk2rDccp1uxEBNzcHa1CKhVtrFcHfnp2EnvnMdvfGC",
  "key28": "37fpcbhvr6hsf9nnggn6gNiYNRTTDoCk3UE51bdGU262JqDg5fgjKw9uyUMQLbnbsXY2KJJx216Bn48uCoGXpFXn",
  "key29": "G5G82tJU64vMtuHnTqiV4RQNLiQEgVtk5jnDk4xKfLtBde18goVMDNA86xHKQfQN4vhPeEnt3yv3dS9NTdDUSBE",
  "key30": "iL6vewiYd3PbC6fsFarqjYU5aiWWny6qpnWBbhyhJiJxaq1Tbqr655DAv8T9WrTVQx8Yj42VcX3RqzNEi1wPR7n",
  "key31": "5MYEMRyeaPhSsgTjAoLKZecsn4sj7rNMfcqhyTTgbVEvLEcNKLNz2UwisApcGogt7py5HYUozSMtjug8me6qSv1Z",
  "key32": "4LCMbUtVZHYFhR2WTAqicrUgpU8K1MTUmmy5xKqrJrF9SUVCMCDmhFnmqVs8o1Tr7QQ7MZG53AheztdRxGwJYu7X",
  "key33": "5RrkQvqvEvPccS22d6gvYCGLxnstXS2P37LGoavRHn3FCqMHHMeDupjfXaLRyhGW4eqhWCuHdrRDHQp7skqCBECK",
  "key34": "7qfoaBt9p1KbMFWoqgP8Tvry8XT9Bjwx4sBPhSeKgDhYefDqp4kiHKCz9f9ayeWwJNaBpAjY6zYEznE3tFtcuw8",
  "key35": "4ya4ygGwgdcNoSRgaXcvPKjdvuHQR9Hk8w4SbJF1CU5PEcYCMm8JbFRZFw6YjtVZ7dvFe7evV9ZcJG6KFk1kZe9p"
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
