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
    "cxf9QGTwDWeUQkPiJodW7WUYnr3z8ASokPEAgp5A3QRTzA1SxvoYcw8C8ah9Mhj8XaxkvBRpDVP1FPbuGLYvgXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZ4W6Xepn6BgTDNFHYxtVgFvGwNQspn8JkR8e25fPWLQpiXzkYQKVdRNJLHRixsA4tTQ9Egm3oKHiEXdkP3GH5G",
  "key1": "29v54HbN3vftDdoXeYVsFXjWgDdrLAMXpoRoWvmw6xW5TUxvijBjGEHMY6WhqrDQCTXP877fqJJyZ22bxHwAVPch",
  "key2": "MKDxsUCmHzuj5DcYjXa4hLd1ed9Lj45rBWB8W8DwtQvmZCgFgJngfExc4qK3LS5TVa6K1MT7s4YyKbYAbvxQWG3",
  "key3": "4JBcyGAhZpcm85n4EwbSMLbCoVsGuswukUAaA61zEb4ee42UDdbGwn2wXSvHQVwmDucLoZ5PHDq9AnjPXr5SRttJ",
  "key4": "34zGmMykbtyJNqF8iJkr2jaNpNgUAothQqKShXB6764uLK7RMGZjM1oPLyo7EZUoPL4qFCPudykWNPQLAcEnvXgv",
  "key5": "2vH5cBWKA3qVN5RyWABo58veW7Vj41b8rUwR6RYh25Lf34NKsCzJ6LNyjhhHbeHZKE14AKbCSccL7Cf9CZUsaDb6",
  "key6": "5cJxUiyrxtS2yxXjRbrQ1RSUwJERs2aDt7W3zBva5SF51XximhSCuH8w5GVRsYo61L7drKXkBXSBfQ4HcghFZ2Bn",
  "key7": "2w39q22Sau75eETCpgUeUxRGTLfcdFs6P4UXHGA3pUT8Tjzw6h5RsnoMuScofcED3wLCAoaPTi36azxpbykhai1u",
  "key8": "fMh98fELPywNMJMfh2NpS8g9NtLPftwDoWGhjR1kddL3UxS2H5kNBfd1YbrofKHc1VwUG3KrfCgB96tVfJk6Bhh",
  "key9": "5zDAz3oUxpxaLg7zfFJwTczjGfhLPQVs1pffDz578pQGT2Sz6HGns8trrBscfQftbd4WvsSSU1pJt8fagrVDwgzj",
  "key10": "2qxGEakDjE3AAZLyh2Xhp8MaS2XaMcQikUnbsPyrRC1X4EpdbpDovJWQea1j5fh6KHx18eC6f43iFxBZSpgZDxA",
  "key11": "7NtQ6VFStoC3pXwhADycR49zqxuarWGxHNgUgCsYpd4Lqij8h1tZcGhVtZknKEextXgDtvfdVydi2mQ11GvHuqc",
  "key12": "2REdvPCUsqBxnKkZx7dPCGEVL3SkX3REZDtTHaH9QsN9xdhnCVAVUHn5RXHr8FAe7pB47SJxbmoivuoX6H8XUpQN",
  "key13": "5VLKZQDiR2FZmZrsRP7igvQU78FtpU72EM9V1nsCaA2KMS87EGDXh8CsXyctfXEAwS54BxT9wsMrnErnGPLKhgLU",
  "key14": "4y6TzJeSBXgKWXbGiKnCeDig5e8Ju2tLFoNAtsYUauB1UKumECsUYBL7GkwmWjEk1p9N8ejUhoDRCsq89mT7FgAw",
  "key15": "478WcbZKVGCtZTCtZ4uZdc5npm4JTdkD7i7Q2hwNDSBnHk5h8BBvGUZnCC19Tzpposez7DRxENJqHkfwCgFr33tL",
  "key16": "3EpKghDzZ6YCCVX5pdSDEgzAA6QWfvZn1wyD77FaSuZuEnQLuXTPTHkdrYSsJd8f8NGU4VB4azgAgwg4g7BBZiap",
  "key17": "3bvjrQMy5EqKaGs16g73u2Bu8Bbhs8evc5KzaZgPaZ3uVxodJJ1mGPUMo3MYtqdMHTSSM8xKQ4ELDGJ8kBaPkEM9",
  "key18": "2boUQ6cqBhaHbsaYZGv4SYS5UXAPFcJD2SuVbkY4MtCCnsxqCyHEQLQvG9BmCX1JLuJEwKU9rWLCcA6Vzv58P8dS",
  "key19": "26bhMNqZc1AjmkDNgw2c6Mw7ShGV3F9Vdsqr6vVyZFvdhg77o7BFK9o3dMsgWJhgJ7WEX7ea5hAp2vq8AVahiJC1",
  "key20": "jFn3C4SUkG3NFDZew6Tn4Y5mtPHYQTqbz26zTt4MqegVJ9QjfcjEqxxnAHJ7Pkz7Rx7rjDqnkBabaBzSA9Sut4d",
  "key21": "4kJVq9KBjXt3LWnCHkKPDUiwVAef9bneQ6gkEbuyVoUmPxAhDc6oMfy7CHmodd27uZbQjmRk2GZbGEnwJanoimei",
  "key22": "5gXZEHjeNs5KrHCBvzrW2GPK2WR2qhx5gQ1YpeqMeS5iiv6129pzUGxCA7vUbfmKR3QTrsKHCWNHFRaiXP8GEjst",
  "key23": "24MHpVvNkFUthPfY27f9wmSgZuPXcLrHdg4b1pY12aXyVQoHLc7tNpJZpCPkjF4A3T7hQSBiEjgx9R6Bx1DC53kk",
  "key24": "3ScaYYEaw26t3Fw3WqC3ucM2Ka1WNTPRtqVVRJ9PHBzyTaN5n9pHQGj9dF93gjuTb4n2rJNqZuf46d5NGYw8ffHM",
  "key25": "2G1t3qquCNnFjAXbmfSJkNKRkCNTfPFopbk1qs3ninFX1Pu9DsJpsGEiDTHZu9jPmqBXiELacV2nkNZHQLnRsNr9",
  "key26": "KJsKgczCCR4effpX1yhZXZvCXWZAuKZpHCFzj8AHLE9dQeZf82ddn6f7UbSBaEA65fMWZg1bK7tbTZoJY9u5kQi"
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
