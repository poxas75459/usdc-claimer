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
    "2x8rz4pu4GVFkKrEw6Tjzsx7HPzKf2sxneDK3qxY8ErS8LdN4p5JcAPrTXXmkYZgK6CiEc4JL3LaNpUrT4chcDx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66R9z9h2oRa6SrUTbozHpnkkWCCnffz57zURiYFwsLkYBzSVTr58KzDGzZo8Wpb88kXiJ1tTCef52uCfGz1WNHjH",
  "key1": "2T3E1JLadnFwptKQe62Wugk12NcRhiEiBj2cSdoX97sdreKwPsmEoyLew9QF1hiZKR2DUDW7knTuJNnjySevfW6Z",
  "key2": "4jZ1TgpQPdD3KaXYngmaBZGRchHSMNMSx8Hh9xWjAtQ33Bvrwr8VLPfJ7jgV6MonnJPjys9WgWzdkyZKomxivTPt",
  "key3": "NgdPyepXZZerE6BYMHJQBXTCQ6j2umeoXGL4Z2no8muMF4wkMmzrZbvksR4CYqVB8hzSPFBtrZs5h5DFcZ5V3fA",
  "key4": "5nGKcQBzUtCjMXSYDMTJDGADesfYq8iPxhPQrJjMNFyNK8xaUTXnr5tTxgSjfVMgUsH8xX6y2hdCUouMq6i9U852",
  "key5": "8jv6nM8Eji1RnXCTeCufWrhiyryNvTtEh1og1GVWe9Q19tdvU1omoBhe857bJ2U4NmzSd8MGZomFdJ9UTk57ptc",
  "key6": "2zQbPvfKmf9BKumL2G7XUZqFfh6XVcdsH33daPeuvTv8BQMj8cEKrKutcu95euvDadjUFhTguwoB1JMk7nBotpJq",
  "key7": "3pLCbFh9mTDYY2Te85kPCGaBwz7VL634vNjmvfyqcrYPCZU7UhbUpXGJYVxaZoAW2DpgwiLijJpoKi4VPfjLzXxL",
  "key8": "cFsT3txA97EnCmnD9U1ZdJMn9PyXZ42R43F9PsPaWKQ7izEdxK4c5AmGm5woc4XaHx2TnBqu6N7FAqSnKkrTtN6",
  "key9": "nDnDCRgcVEBgeEf5bCECyYiVXp3JY1k1WFHt1Sh9BaXZeyKMbhNYgx6G2tMPL8PGSt1SDQjK2E9EVK7vaNSJ1bQ",
  "key10": "3veM3V31tX5v2YcxBx2hcWQnHMyDxq2scm2q81h69ZckWmtARQxn6p4KKf6ZXKe1FwzrGcLoBCxqPtM8FApvP92B",
  "key11": "5FEiMuxG1MZWqz1wVcMpqCvMD6sLXVkg7Xws2sDgzLuymZcSo57uVHLz6jbtZrkZ8U4V7KkuwhywTX8AeAYVrXDd",
  "key12": "C16TNqUTxsRVacJ9bC2eSvp1q1TtThzkNGxKmuZUNZTimdNrBKmroHaFRbrgabEfiDsvBr6eaHMN9hTnNivX2Lc",
  "key13": "5u62PLiBM97TiV9ShVxA29uznuM46bfTzwxMEqNRFfa8NkRqRDrRyJgSizQFL3FX3ZQRGhS2Gv1Fb1R3eq1dVfvy",
  "key14": "3mNq6HCvc5BD7VqjQU3JugTg7dgWtTdC5j8RWzgeBHqffgVNrQ5sEj91iFhaEXcaCzzbnm88c9cLrEq6wTu9T9Ws",
  "key15": "3d8nsGbThvDC2LUBgSE7sByDfpzfwtJLHfT9t5fr4reh1iXwFnBNDXtXFmuCJWgD9kimqUKSKwPUPi3sMKkefoUb",
  "key16": "S5hW7698xH4S4uRKjg9vyq7LFvfQUBk4UFm148y6JwSSYdcgRwkawYBiZJXSzTaK2EaEZnusoC7DKwZteJ2YN6q",
  "key17": "4pqPrbnQyaousNZQFajfuJMZ86CTkpkL53AmMkoext9RjCBuX3qjbCiSU7Ux3TaRMvGKLFC5KsvrynufNmftiBAz",
  "key18": "4NajKcQQ4m6pu8mMDyRfsrr3ynVxgaUpAMetdtE78Nm5y9Cog8U7VD2MRocrkJpQN5mduCZZ2mDxnMFq5hX8V2UW",
  "key19": "5q6dUnF185qYGfe9k5Q9nTDmryB6fUdmJ2uw646HTzBRtDVFeVEJSwfVUxEkfpkasvh4cdBxRZ6S9UdYnTPkxvVd",
  "key20": "4wCLgMWVxSDYyDT9sUbYXcCe694Ss8KUFCubUh78G49wnDE2kaWMbo8MNt54r6EtE7cTSNQTdbh5icr2yRUT84gC",
  "key21": "24xgj3odwEoa2Fz8uBmsu4QBZorJDN8NzttBjrB8SCHEx98xP58qP4WfHSipXWbaM9teYtTAUpAFGTKDUJkcQH7u",
  "key22": "43AB9kXXYQs3yZzZXPvB25Ho5BQRHNTHJsXFEG2GUmgZ8bAfaZWqawZbhSVd6bo68pxTXHSaYEbfSgbPHNstXpQS",
  "key23": "65QsaBAg9zzTcF171sStAVzwtzaZKZis32ZpsP9HUFuSdDsqHXnUtsSPQJQYQJHaV7dMjnMwe8MgQk4jE1U28R5T",
  "key24": "5SjAVMbpotJouyKZiUZ7ZtD3xYVgqpgRzQN9CUWEejw22WwNyVZnp2ooMS7YSGgfrkH1dsrV2uiBdEhJn44bPbqH",
  "key25": "5LG9e7Zv9FvtY1u7vYeAuMJ5u9pZLp9zS2AEA1nLyJkh7ji368vDf6pZeyzpenvGaxWFu3KAurEnVnYHoDxYigwX",
  "key26": "WBrscHUbBQKW3pWoi4hDubYbTEWGCsHk8YjjdCsjcLo2AU7aKEi2jQ2XXPt4vDTXhJ1wzra9UNCew2uvqpnZKHH",
  "key27": "28tGmZGgZUP3ZjCCVw7hSY6vHnnzY84jza4bWPKEggFNHjXyHZtojLcQpGtwBeM4mnzukyuEF3jWxK5MwHZSER5M",
  "key28": "HsEVGwgC5bWwqCfqcmwuQvwd26Vxt6oRovN51QkwdBgyrVxVoAf6Rw8KRTdebpnXAnN4bKtZqb6Q38itrgbdwPg",
  "key29": "5oXXgGJ2LNdJ2RsHh6y7wjgLxpGabtqQywq9bE1z3ngbNjaSNVQK2DivGsDEpkhrdxERbvjRTj4bXw5pyYsMWnc6",
  "key30": "5RNg3LpMjLHLLGsKVQjxtYmBN7u7nZyoXL61U5npfuwd7VpxbYRwdAAvvxD12BRyq4SKR6AiFPGNbNmoBhC3HUtS",
  "key31": "38RqbRNkLxBRCdjCpZxhBDXBpZN8wXgr1FvW6iqVNmWK4bQzDsFZ9coST8Stjjm2VShvr5Ucx1SeM7wiQETsKXDY",
  "key32": "euoeg3kEC4KDQj5CD1SKpMgAafrFnPPwxovb8sULUaAcbcQtxFfpjtD7SpKmNEULfKejKXYzTF64obAwLbbekqf",
  "key33": "54A6Jx9ELnC4mmcyt1mPfaeKAYFuqzTZfQeVx6tVXidB1e2jL57ZqsSjo61M97Vo72H23LoXvxNqMUjvRqq7BU96",
  "key34": "3bKwSZq9i9vzCQRVq5kEUmaAtquyAD1thB5FfKFj3fAoPMmJYfzkrFCWAk3MTsB3mFzfidxZJiy15qYPmoQSVRma",
  "key35": "NQ5VcfhYitV7om3BzcYiuhLN3WPrgFpcownwj4ZtZPdr7tHycpebxKmSvNZvDbAZi7xv385RqpX7nApqwXXQZ5u",
  "key36": "4bwvHREGBxCassG9HJzU1yYbvhWoro47CbnH4f7j7JT1UXpE7JPLaMrfEYjmnWoDX5WfC2TuzYzFy76T1Gspf7VT",
  "key37": "4QxnT3t1XCVJuZ3L4rgsjp85hQcX7W96WbuXhQhJ5mjvx2fVhgrQYbw6n6YUKwBk6SHzGfXniZbjoXwBHN4CL6dR",
  "key38": "4TjcpkoX3deNk7oTkpK1Rg3uyxw5sTgNTQ9Z7583p2wbmmuY7sJq5kbSXesE9LkSWoBh1vc7xVgn46fgsF7NubwD",
  "key39": "5VN5jVfq1XJFJta4XwiNG3MqH5SrNzdBmFZ1TgPoEeZkV6EoK1RJhy3fk388dgWmfWyMx3e9RMEQQc4fsTc3h6aY",
  "key40": "35X8KYgKLfEoxUbJg6YhXLZjaAxukXrf8YGVwcU1pwUjWMX9V36kWdbu673J51TxxtuByhEqFEoSNt64m6Qd84p3",
  "key41": "39vKX9NYLnKQwHcknGBPNn1chmnHCt1kPtM8XsqoVt4YYSFrCcqhCD3k5Y1UcivdxofBiyHmT8jUHxoPorLTjBxs",
  "key42": "xHGKG3KJ9xLDSHRxcpsc4mvYXi8FVKNZekSe54k2byrEHZ4maup61KkLfAQzg1HY7qWy447D1UfjzwVzfswNqHW",
  "key43": "5Jaa1CA7Kn2eaPbApGWpLNZ9q6a8nWwoWJk4dvHFPFBNcnPwX4PhyoxstZSWhfbzmhKXsfcvQfaWHQTzLuDLEicM",
  "key44": "rD7iQsQQjKGA8vcZW9YWCyJ9ZuWyfXPVqDTndjqyb5k1gpVV7ahNLx4yX2x8Qqm5aRayeRGDAcYUY65fJLGUCyf",
  "key45": "47MwMdtMvkGixCkVTdwZvcDyKfvqTW9L4pSxzZsrAMVwoNuRJ7ftSsD7PpSGBnMJjX8k8CtB5bJRdiW7MdVkGtrS",
  "key46": "4r9k7TR6zRgv8BmB6j3GkMQUkWW6NvSVDuHC3bvwbkUocQXasGUy9p78F4BPMWhAQMPyTRsLJikRbTbrrD697gkw",
  "key47": "34DtuRuqKsiaVDf48nvXd184LUrnCY1CrbmGN2dk7U1ZKYSFJkqoFf3ZtSfm8gBFGdFHZ2smx8UAVdNR2VgCjQSx"
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
