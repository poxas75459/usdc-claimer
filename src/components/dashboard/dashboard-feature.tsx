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
    "4ppGKrf2mxMYdsXvqGooZTnDCToPb4L8nTc8RCADi7TpETNmD66HLXFM3EDHCsu3MvFeTZqDXWykcWdcbBkYRUYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NeWW4EceFSvKB1nq8trfsMSSPNkMnrU8d8FF82qpcRCcUmaeNhGdjnEtEYJsaof82WGgh21QNiLsEFchumvhqcv",
  "key1": "4Y3JqQ6XTZ3UPY4Sad6w44gKtotiUGNj9hLsjpFCVnoznqsHJXyYZneCKmzJWDPMWdYJkcrtBJvyA9T8K63TgQZ6",
  "key2": "6K7CJb9FDEvLddu2PRcVHVGsrEDQEcVWAHe5JBw128DdsbST3axqNZpcashkzEjeZec46XuUeD9rRFEvsKYSgi1",
  "key3": "5U5SEPKG8rZ2HLFb9Bx1jGsdBPbYcVwMpv8QWWLkdx2X4T8Ps8RVWfAwZMXUFQHhVKJWMArBvQDdnUz9hWC8j4XA",
  "key4": "4vYJwWDDTXDZqxRaxV2Hr6PU5jp1TMQdpWJHe2hPiuq6aEQexTjM3jaQgVuxFKaHQeKvPZzdF1mq1q4y9LM1QT3i",
  "key5": "4mAvXBGNY72WrmiQKufLULbUwfN7ze9WekacuzC6eSrGoYuoJwkfBSyYexDVo7x61ods4ouLvewiAsJb8nM77B9v",
  "key6": "4S57f5yxu6UqKX9qsuNLXHxrJ3y6L47qRTmVh6tJjTxWTWsdM9RmkhXFwNjcKPUKXuQNqgFQUVUfPiFHTSKoTuVQ",
  "key7": "SjT2WBBYmwgMQPeKnGTo3Y78HGe8zjoeNxdmadxn1mickpXav3SJCqEyTmP6M2XvAQLvuJN1FjayKZEoSrXWSR2",
  "key8": "74BzT9vYe8RdwcYpSiSQ855h9ksXgApKaLR4dc1qkEm6GjV2Y8MBGmHHNEKwBMdE3Ywd88mQoeD1o8ntSSHCB8M",
  "key9": "3x5p1nBm4zzKgRbxY71fvzVoreGnGQDcoW9WRwQ8iedtw1iDTNiSaANqL2Y28U8yXsBHSXkqzWPKkpemDPaBNbCw",
  "key10": "6pfVhSwYLbmCmh1nSJbD5czw64rADPkGf1vjCS66LWNjjQj4x19syTRkykJ9PYYscEJ9JkwWP576RFZSGSmGYca",
  "key11": "2rNyHBaCRQcwgmuAb6pfiTK6MGkjnY2S964gmMGLZjvECKxAkWxp3PgN4gg2bNRAStD6TSXWK8iY2Sp9CDQgBidT",
  "key12": "4rwS666ZtgEDweyHw1X64v9wARpQKDRAa7j6dR7xkC3pHzV9A48xzynWBPE37wqTkMcHEpvMXCBurWy3yGEH89if",
  "key13": "2whLLXApA6GwecN3s1CgVPUKzyfWPnAuW4dqiWHabtUZkrBdb2y1bXEWvJKQLuTCDJLSWUCP2KDc7jQ2rLmPaJ6z",
  "key14": "3siCJDBr3kd9whpx6JpHT1ym7YvJ73RFjozPGsfthRYj7yFxxhqJ6rHCuGorGLJzvs8afETPbGJ92c1NspjXEYVJ",
  "key15": "5t78GARYd3t2kSPadmmiytWBp5dzCNu9pPiajQPqW38pioK1bnuhDGiGS9tjgqPNGVmhqtTx5urWP5iPzbAgQMdf",
  "key16": "4pJkGZxndjtvhv9ZiQWyziTZdvGEgbwd6oyJAroJiijwPMUdEZxYHEh2MGtW9RBhgbXS7kPUDTpxWLJ4ZpKqrkoz",
  "key17": "5oQskmv71F1PvNPuebsfXJ7UmUb1HA5xJQtwNBLx6mvGL252oFPSdrcTSzBhAJUvj84SDuJjUyJapBHw5g1UdpNq",
  "key18": "4U2FZXZx451E73cUDZGU7FJW24ernuh3Mbw1ABEJ6N336ZhcxnQW6G6rceRyNtiejXJYMsHrgtL5r5Ab1mjKzeHx",
  "key19": "5vfWZwvZFQHTz3zKpm2RRW9TUCd2CNDvwqi2Po8t3TR8JjpZFirQwxAo1ris1B7oRZJj82YFzWCKn3o7QAYQbpEp",
  "key20": "2ch2QMKTR1MZKuBHE6XTiFFqnaf3tc78KKkPg1f7RbkdFQWx2N21UHq2iT6DdXuSj1YFvvgqd5i6DSHofDe8yF8K",
  "key21": "4uQJx3BLqnKUysfdDK7VVx2ndaqSRR6tn58XFQeBEyER2dpr9PznAqDcYATsioEJXh6SZiYW8fwJYNtca86DJj1A",
  "key22": "3bqAXQxTqshUJmRnYM9x7o9E5Ngbg5SVEw5rPHUhUkHbFbAWkBzDcpoUDzDUTVE6iMtj1Njex41Nu2Cp3MDVan78",
  "key23": "4ebtn3TSsWsPqGMbremfgkz3D2FsqAS41r4sHfTB4ZqfjRQo58Ehst1p444osepHN8ryNaq2RqjZob2x9dS2bPND",
  "key24": "59Bm21Wvc6RtH36YCeS4aAqnXmosSxWTz6XhKdJ24Wm4of7dMTa9pTUiS5WxKGVQ6VTQctoZovH2DqozQ4j4Bavw",
  "key25": "4KvZStfdtYxgyvcLJWcZUHMZbLqb8fBGbZrzjWgpzbwfxUK83S4c6zNskLqTZym85kokXWB8GDRfirUwSZPrsGNx",
  "key26": "2isVRBwX9P81U3Yzy2m9ahK2rwzGMEsYGAmaTv2oBcVJaPUN391XRXKytTEKEBAPo8XvPLWaL1PyAYJqcVWLmawS",
  "key27": "4GJz1y6y6hzP1cWACiaLtaM1WioYeZq7esJTZEeANrkiYD6BvRv5wYLBVvDpbjagAsf5pLGDAqPDJ3tDa13Zc9m9",
  "key28": "58vSQwWbhmRtfFp7eCjwhnnJ1SNtJWJvkHX8xfoNC6cdJ5w3LqyHhiedg45Rm6UdYGa9LnYXgnDr8avDZou6iuFo",
  "key29": "5gn3QdKsSiAtPgBBo4XFyDshPVQbe8u8uFsFeiWWbjc5YKnYtQeMwNSxSWJSu8xyv2hegQi7DyE5g1WeMfHzy1Px",
  "key30": "5W1ySqKaGxRYkChfrLHnY6ytEmyoSCFDDZJ4GKkgEpMeAUUHiQiPhhtj3oVm2vGeJSCnSeMPLki8mooYH7BvhXQW"
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
