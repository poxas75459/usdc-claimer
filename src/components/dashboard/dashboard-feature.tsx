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
    "5oQiATR1yNm1B5bcLfYk96hy2ipTCjCDUT8Qud8Fv68BBFefeYnu4t1WxfYG5Ro5f6CBrDRrW1Fg6rGo4Rp6Wed6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SRzwv1FZo3gpNpuNDANaiNHGFDTN8iTphF3EeuXqAiV7y8QLAHEKJ6ABtUtL2ExrZmC67K6B5HaqddMQnBw5Nve",
  "key1": "3HYZRsy7VKv65idgtdkntsDpnYPWkkHDdVPw6XQMCBYRU18Kydg6HHP9utt224oVRVoknHYuYMHetY2AP6QEZmKT",
  "key2": "4d48GkPzgZc3FUeyraqHAuzTQF2bqrecgYurPe83pnt79rkX3aM2hon4XBSd9JWzVajdUC1ZDge9LCkkm6Y4nkBK",
  "key3": "az45yddWBsRoyfJ6cE4fszsBdS6ZEGDBk55XfKVzpJQFFmrHfv5vWZLsA4QEM2Uu9pxdssx3479Qfz1icpxc5nn",
  "key4": "5HaMX9URPf3k7YVN5BB8S4HeKaANxuF1eHSYu9BJQqkqfDEfebDtTGANEYvbCqHbwJJ6dHq6VHbN6HBBmUkfkTTR",
  "key5": "4FiS4v16rG9fnGNdDNc8FuTaYqQneXR6aEir2S4eBkf22uxgJvQTbGiY1Uu81TndM6EgHAXpiQNdQWq6JF4XetRs",
  "key6": "2kdTexEMjhAouWbovXQ5aPVRNAZJgZvpitLe35UFKtpysoaY4gs2SYL9eRgY9fWrkfAeUAmfN7dT5z2ZFoduyAZz",
  "key7": "LLFeL8ojg9mPWCBaVKx7g6qqHvGra66by8zLG7N89hQeDk9jNu2436dseBpKZ5RXYj3mffyeMSJ648gxSsB4X6C",
  "key8": "4b13Po9fSzQAMrPpgXbWyrXhd2Vc1yAiKhgv2vzTzpdPRRSW53szofj9nYx4ziLi8HpdTGhC9p8kWgMye8yRtXic",
  "key9": "2vkke1rb5UY7HcJmNK3QBwv8mtMKuYPxWbW2UV4FrVMQJSgwsf8mqx8CZ8mbmb4PZ5xCi8aucNVVMiv2TtpDE3qs",
  "key10": "3kTFrhcE2vf4AFSrG1DDkJoJ5W8LmcuGVi5MMpT3WpYL8QJjYk6iEDaqmk5HSqn3apGCScXzQEizAY5Py8SCzB6b",
  "key11": "2ZPprmgZ5RfDTt6sGAd9kuPG9MA2hbVYFraJBaVeFP1mEQtDsT7mThe8CKakZKGyQee5dqYv3BDhBBtaihFG5w7y",
  "key12": "or7758LdiMYpdz8xwbSDckW3Qdzn7ukXe2ZUF63qbSwbBU9pXErwjXxYFzQHwvwtvwr5F8hqL9uBbEdvBidsx7G",
  "key13": "To1YTEgZTr3zygGk79QpxpzA17ePXBuxgfHgYVL42q7hktUczegpTA7YxbyKVXGnjBgHWxpjkCocbk8zn1uxTC9",
  "key14": "iHU5o5Kx41fkGxXtuP6MpuatqneVujUiodfGWk8bAN8qkwQ6p5hWeZhBbeNs9DdRzAcbAXYhF8cFau3WntvQnTu",
  "key15": "S2ncg1hqVw9t8W8wDKui6cwFFgmYcYTsEkDafwDWhF76LpmRreX3z33eDTESGuj5wSDExCtH7GGvsksZYjLhJLh",
  "key16": "3EoeuwULeJwvyBqnxqrqisfUx9Y7gjLmQrG9tdtu8TQe7mbZE1YRrzBgxoodpf4KqiKnnDUkGeC6ZZysoEPFUTvc",
  "key17": "4vtjTWq3gMPdHh9yQXApFTpYW2ZGoT9oXYYdMFtpiPLdjmKJWKFkifUcvXd7DkwkeqMUsSL76NdVPs8ATxG4TkP1",
  "key18": "5BvXdf3AvVZWcMft38hSedwQ6vGJBvsKk8qLw5BS8d3kGWr5L8cuG4Mz3pRKTsPVWF3nTuZHrx6x6oXmcxZeRLaj",
  "key19": "4UKBrqVLQfXxSWKEcCrTEw183SxUKDAhC2L8xeavKPjY8EQoxSAkK1Zw7nBfJ47g2zj7jUdVQhBZFiWjaKy5PwW8",
  "key20": "2fpj5QXPLQux7LEyoZ89nviCeJ11rvRoXWiw7jVQy6yuKXUSo98NC86nRAvhnsZbQ8To58zzfmWX4achSrNtT1Pj",
  "key21": "3FSBBobgvPVcWCYZsn6Lj9JhyfVj73MnBiUphTqAg6ohrt8sjYEiuhqqNhUEz2z6VJVSYQeCu2CC1Msg1Vu8GTKD",
  "key22": "21MGBxeop2u1KF3kkveztqvqGRN1Hwb2HQevqqci118rtLZdaoJcgZFdosUA3BiwEXp3Su9BZVcnpGFv58W2RLss",
  "key23": "2PovpJ7qDrvL2jaeLCQNnteUvyvV22hKaeg1dKeoecTNoBBY3RdeF87zTGf8oSds6dHwhaHnpVHCqqKRPqCz4DLm",
  "key24": "2sz94J73diRZxVMkatounmVsEb9t2A1kHNmP7kXA4DKoV23ETfQLtHpyN31G4i8A81phu6S1zTgfY27cDarvbLVk"
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
