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
    "4AyZmQQRxGKsKvyCnaqfWBjT4PWvoZDuA6mFSYpt9cHkzzLeBEM2q5EFhg9p4ZoMUQCxs4ccuqUGJMse2xzgPYxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kurv8xFFBvo8DuHXzuLouSeBmAfFpnCWKzCBmDQoCPTLBPe2LXd3xySqmDBEc6dPoq993GtQ2tdtHse3vzxK7ig",
  "key1": "2A74y5uYQgkacCHkBRLanDXM5b2LwAPy6gyuf6u7B7Me77LVKfPqRoR23e3K9xCaPTxmHwc3hPacTZ4dPyfsJtp8",
  "key2": "2oNSoBJv1Fys6iydEdefAUevsiBFFQWE7YwwfUHoiGzwENdmTx8X9WSVZdNoWvpwQdqpF6HbxweqBmPWDApefJCX",
  "key3": "3QARB34hrwyg82LAMfdnnfTkstA1QVxCwk7PvSQgn4em18paZW9h96kC9ZXhBs3Cr7VotpKdoqY3rkDDEjwWdEsq",
  "key4": "5MuNav5Yeuewx9HjFHykFGMxfetXPzvdwozjM2WK2FZP2h6bvE7P87TR9rJZsi8Nq5djoeRy5Aq43BhC3F3Yzd2h",
  "key5": "2ZRL9G5v7BC22RcvZhPZ1a4AXfALfhrRsHuvTh2ECnaRmdbs2tAPh4p9j8TV2z9n6n4tCYYwbEGeexSFiSEM3BAt",
  "key6": "3o6Rp6vAnCfNRkSR4SdFkSNzL44ugP2zAK5fxqVRk18wsxqkoVwuL5ksmdm6eqGFPSXMoEKUWpWUhMjXcoq3Wzyb",
  "key7": "2ZEy4TRidfYLZ1MDEbZtYjRv6GnqbirpTFkRJGNH4GYT2LqERmqdbxNaHxJEeTuJeMBCdcfAYRmdvsTMHsUmh6HQ",
  "key8": "67cjoVsfCB3V3koPPbshFfPsV4yaab1E3r45bFWHckGeVpsbYfdU6qA6auqvZ6NRfzLy28aT5iLiR74B1zYY3cjJ",
  "key9": "3oEpNmdiKFPbpub7gfipSjFDFxCPkUMzF5fvJrtoqXCb8UbDHZzrp8ARaVmAuv5LRwN4BkM1LkkcVDJA8E6CxjMT",
  "key10": "5862s4eMLEJDc8E7gdsgUic4wiSRshwacW8ExUamsNsYKdDJNp6aBayAo1dU5PDkgZymDreEje5jxMUXPA1SzNCH",
  "key11": "3ZC4gR7m66hVKAkVKwBFDobQYjpnn9mdK6nozkFSHB9fcNLmHR4J391SDeS8ENDP51fJ4YBmzGFnVnX7TeSJohoG",
  "key12": "24QXRgviqjKFiLKV3GMjupRydCb2piTgE5Rjf2nadegsW3tDwjZoJ3Npiin2bxWBjH7b6gH9f4UPhzttaCx6iEH7",
  "key13": "4g5XhjUbhusBUn5aU2ttxfYzUiH27h1w4j17ovgmuZPFUrsYbgvSdqwhWPAKJ8PFkA7Su1sYkwXMMx2FKqMEeAKa",
  "key14": "5vDZAHcU7JbRiysXDaoAMtnz5PHhiNYaH2RmsM9ikzAo4VCTn8RVAoF1rBbe8MdcbrPttRGv8Q2pjYRJrLa4K6py",
  "key15": "56vtkVYq3VVis2NSAJ17SqVnjGCouxJt3x9Zq37DSzEAS3JbU8ekdZS3fT47BEZYnxb6QBf8ed5ek4fX7rbooeS2",
  "key16": "33AjvdpcDsnDpJmA9GCDhErqSLtegbdSPn98mrW9igbya8iRLSjsJxfj5o6ekGRQBEbHyxaBLxZtz3sPhxeMQtsa",
  "key17": "wnpmrfZAzJmTkbGzBmeXY6pAfxYJufpMDEixFYvEBdMBSRKyiP2CDnmMVochdjgKhfV6EDEdSFPxujz5GiFfMFs",
  "key18": "24zGN7SnckSpFpH4eDYiqpDngCYfcxfd4YpbUXMSrH3xQTGd1YUPxUcDGAVQRy4cWWtwG6dDmGCYjMK1F4Dqb89L",
  "key19": "2dxdH3jXQMbuGbkXZRRtnwr6AgFRmBwUXAL3J7NFLKtHmC1rWxc4Vai2TmFFU45stmJadTppVY6kDTRp6a9RiNPE",
  "key20": "BA7ffFgPVHqgvfsyBCKFpUmwYXQZTondoLaewH2hEmWU8tsfCFjY6w8r9HuuXUMYNmX1VrHgsznN7dHVDRgrtCN",
  "key21": "45uzRYN8r43MBXC1ZHwPdVdZpTzuEuwPCC6FwY3j7LHwcRufVAdqB48DuZQE9z5gytw2YXSXzMAWQas8zLdGbWdH",
  "key22": "2eYDPMYRFYD4JNAVtsTSBcWDRQxMiKomZG7gAKRqERN5MJQV4Xqw3AuAGRUGNHj8GZP6mQKurpJBKGa24MVpdqbe",
  "key23": "hsRfxP1SiVdiKJ1jY62dkBy4VdBsSAqiNSwfRo6SfUviedCWUgvsToVEDLaHeKsD6HgAq8rfeG96Aq5chftjNTo",
  "key24": "39nZyEm2az3QEf3byyxbKSMFccvrcjLcopXgF8oTDmi7n1jsQGQuqJRhy3wX6MFmXANa8LQzoSXq7To1vPVkYDSZ",
  "key25": "R9yLm3gCEN1Rkz1E4R8KNLv5beuU6knMJNZ1JTw7XbChi7uuPtjTJ4eqXBMf18PyT9GpHoDC3YuUV84s5UFTcEt"
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
