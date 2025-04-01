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
    "dXuSJqTeSDvRqa63skBAfH1iNnQLFcHaPBk7zJYvFYkkziSKuNga6j4yh9s6Zo9oWLyUv6srpcxmvnJXa2z5siW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzJq6WhQ5o9jD1xeaj1ELyXdS8Z1AhX1XFdd2SfikjJxpGpvhGAPRVuSW5w4eus9PDv9LLY25J1kkY4aH8rrZRp",
  "key1": "3tnda8u6w5wiQKUFq68Y6Jfn66QavA1MCS4jv9hpJCGaGMb8VFKxpTzL6AnG69n1Qj5kbBwQX4b9AZM9cbkBAZM2",
  "key2": "2d3Q52YNzgrQ4Gp78eLYrad1VuhbmCPXExv5jHj9DMua8mKVmLC4vBiPvzqoT9EmwXjnBx6mW1xC4ceu8VPt5b33",
  "key3": "31Xe3rMGp88ArANyU4DY7DV6zeGPf3pShyJf5YTxuvQPcGmsGTTB9PwMW4CKXAGgb5ij53A3BBcQ5RXMhUqgUdfx",
  "key4": "2bqFhQwNwr3q23UJLrfP1cGEbaeZZEtKs4xTqoFEijJ6BmVQ8726nRYKqyJKLx9Unrc5BSSjse1ApYxJpNQu6N42",
  "key5": "3jSJF2TVyPw1zeekCy9fe2tPyXDdTnR3JzT7wYtuqHDHqsoXrPS3fCNJCLsgjp6XB8AS8HB5UzmEadyr51t4xXo",
  "key6": "3gmEankAXDtr5zvkj1mPK4By4sJT95Eot6bhNm1zvBaTBBKVrFY7H9AqC2KRn73CPFsWcTP6PNswPPSxZniuqFaV",
  "key7": "3f3dDdptN1xPUyYQQuo3VigQDg5h68HcGbV78jhDsRrPx2hxQhfd4vF7kh7nmMJyVqVdzwAXnWaRWQbpJkmStua2",
  "key8": "5PKxuMyU1HFacgfPm9sNomFeGxfBDLVNFvKNtt5pbRrgMvUJ2bH1jpNJh4fKgnpzbtbafBVBZypm51CgAWsgQQus",
  "key9": "4RwE7WH1QJPnBkCXrE57qkzuea78TPRTLWyQxkyLGSdNP5iayfWpBJsA3jRUgRTi2CNzVy2NeVWM5o9NHvFNJx58",
  "key10": "3JH2MdhZtfsXhXnyoXDoxJ22EN9F6YiKHKQMvsxTXPcRJ7tcwUCvScQZBVboADCsQmfz9ZMZGZm3q7pXzRKE2hwf",
  "key11": "4zZtxF3H2eJSi3GWHfEKbpituWk1wgofcG17ZPwiUa1UeETPpNCXe8VVQgomCaWKQaCmMXYMACwKaX5hR6WjKSrV",
  "key12": "5ZAEJaXRRKmLHGPjhgjDFZpHrF6W6HdxnsTvLZEMbZdHXbbtC9yiQz9heL3nH2zfngqM1TjJcfe9s6pByuHB8YCF",
  "key13": "5mrcyBbxqGRGvLzFePkkLUCQnKT2cgTySs2HRRVgBRRkiobKU3hNVHVx3f1nB4wJHJTSv1be3qDGh4cU7SyN4PJn",
  "key14": "3tLAGzCr32k2Ntk4wi3EeXZVorZwVsfWqLaNf4hT72iWZ77wfacKyY7vvL8Ls77sgdZrd3yCcQoh1aE1XYHePCSM",
  "key15": "5Jfk9VFjLuRdLCspmm4JSdQy7tEc1VwD6m6Jy9SML5B8iReXvTmj7m77sxpiqxNrq1hVUwUy3fqo2uZMAGtm4Mfv",
  "key16": "NDJQFf5EUxkPaTfseSLiTkppvBhmD9HjSUj3VnsZK6rhrAEFVsXzHH7uVq27PQMKgqgTbRxZ1y1ZfPbdSJE4PVM",
  "key17": "2FqbSnvyMQug9asCKMBP1XenrzsnSgYZQp2ruUeqaWCiTwk5AjXTgGCEspFucv5pYuz9TkFExjFXLY17gHwM6QiB",
  "key18": "2bd8xr3CjmNxg7RzcCacK2mbJEPZbASYYUMPDVEDtDDZMYTxKvfJ8TpRsRggFEgHbjnS1bMRJGbh9ZvQa14js1gE",
  "key19": "3Tmrkfrnm1X8zsAuPUintCVknyMYF5NCEofXALw1e5zVyNVWcs4xPTRybjZAwqYgGzyawvPfWZkDsYqvv3ScQ9ze",
  "key20": "54mA1CRvD6GDrWfKJh7h8N5WtMcUc25T9tUiS2TCkQdXXDUZE2f9yagTc887ahS1MnovitazaV4JHapY1c1TdmA",
  "key21": "3hNYaKaxsemZXFfCXt4XcQbi4TAfEEWB83CJTK4WVojD1KGMACcdYtpJvpLxXQLvaUwNSUMt5ediEso23DojLQEi",
  "key22": "3EY76xqRSebftuWiwhtVNavBdqr7WofGLoe8yJBLN93fDt1UgBkjvBctr8g1Xdif6CKQJvv36xWb2DWxLVUZZ3vA",
  "key23": "3vXQDoJRHQ2PZYE8eFeXPmgYUKNZBTDdGBDzwa6DMJ4arKpeA5SATE7JeoKP6KnrL8EDr4ZrQnPBpnmzRLMBFQVL",
  "key24": "4H9fxGLFAXh1cEq5DHunj1xAfXMnLmQNacQGyWkrx7TtktPW6924yBdPSQUh2Ru72RLGW1BAf1p9c9dr4RWnhX5x",
  "key25": "64vJXidBRG6HW2vmzdHYt4Sc8BUh2CT1vZrnZo46aufgv92jtCxtgbM8DcvDApNbQPtHCkGmYrgUZe1ExiMc3Cj8"
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
