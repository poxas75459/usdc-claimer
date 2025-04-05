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
    "5kuPKzWt22PbEL5m92FXc9KVtkXVWKd8vQtAMRra71QoLCGVEgzv6WJuUA3pYa3mJjUibkFXF32j6V3dPFv5stDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57bvePiq18bTChwSnwCEdA8SkynSK719NFuPZP752rhp2PQbEStbf3A5JoScoTVfR7GbCLkEkmFGbvqECVRtBvcF",
  "key1": "3F5WjZPeZ6Fwodfi3T4vSxybceowMeEpaSLU2fGqNdVB5LZKFDSKySuekmH3Kwqboy51hof1L89At94Guovs1EP1",
  "key2": "5pE3poFJdSon7KbvMYxvLbziSXweomLN1rcw1SzsKMcKe9hJteoxzi9oimKttE34oKbf4UgWYorbhDgTXjxJM6ZY",
  "key3": "6FN7cTrPSZ1YMx94xh6c1SvRcjSWjM48LwKsV38YBHFzCx9rzcwVCMaDPnmLUBYQ7iRC7Vu7QVW5YtcgyzkeUDw",
  "key4": "2eo3uSnYj26EpGQK8TiCnRKQeazpXjyQqKMtNKEWqYdz2ySX6cMRhaLJhBTxFFV2dNWUpoKHgZNrm49VRTo68KS5",
  "key5": "3tSQxPyF829zcT8mncswPNLJYyRLrZM9agcHdN6g8YytZvAk9TcRKpu7wby6dY4ZRjqv7mVAf77uwmMWprvjzCgC",
  "key6": "4FEhXnMS56zjp6dCY53oex7pbi4NMzQg1CArE67kR9LUHDL3UnVYhBgKLNgmctJmihEjwvpt6c3F2WTqJJFDyEaT",
  "key7": "5Qi6UeGTyPiBScDqE7cD637DCCy4gApQpijKkJDxKq6yFSs3TmyLKNGRJTX7ijPztaeF5AP7cfPUbwzXrTTALmEw",
  "key8": "3iYtoDs6XhCdXYerMWbwejpJ1XAwL5ipygXGkC2oRaE9a3Y8fw34qWeL7LSnHtbnny2bV4mbW21ZUzQFJ2ixnbGY",
  "key9": "53CQdnaBmGqNR7FzSaRLQc2E8Mti7c6omSbB4xJJnLsH2Uq6A1WrV1GN8byRsFzV2M9p1Y6dnaE83ykaYCmURUbn",
  "key10": "5NzTVhtAYCExZ9jb3jpVLQBY6XDDUPJ9ezVo2Z3L4nrodX6tajJM1BJgS41m9oZh1nnvfG6cj1Cvrvkbt9ftCvmg",
  "key11": "3F3Ccmz6DFJDgniQvCAdakiMLyK2P9uKjvquL6L6TW9AHcqhFoMoR8Y2H6sXi6AF4nocd8SPhxDgzCvbeGU2FTfD",
  "key12": "2agi5wQ7SRQgejwuPMewCsVknUtRsbpk8CoTNENiZugfm57qm4T9Cat5KBaP37vFXwoF4nUdynFCvjnX9ds2Qs82",
  "key13": "2i4Q5npqCarWVVeDcYqGhkcT4Ap4a9379d1qPJyusxMSdKGEKE78Ecf8W4StG348FpSo1QRQTgZ8bCmX2hvtFiUs",
  "key14": "2WGWRTiUBWqxyKhTMkoLTpD8qdHADwjmBiTriUy1Pn4GaMv9vFGrojhUGHdF7oNyq6paZhMCXjEqZ9ULHP66fmqa",
  "key15": "3MvySyXBgt2ksUhExccRv4vwvsZqhujBEwdkUAaPjLdr5742wQ9mhTYVE14sDr4mS3NSQRkqzsGoaEFNZ7GtxzDj",
  "key16": "4U2q9sQycjc7N12nyCEY5QhP89GyhVLD7MaCLbWZjCri4o8VjEyMJxEXJN41JLt6i9pHDLKQq1rYejgqdGziByKF",
  "key17": "22mTG5DriinnfEYzhHkS7L2sckQ8Js97Gnx9pKDCC8M5b9RhR3qmyfZnSbR3YmE1TXiwFF9ArjXydk8YpZ68nXWv",
  "key18": "2s2eUorRi86mTd4wHUFNduPFK86vWVYuBKLQ2DtbKkCShTVVXpqMhG4b9Hz3NVKPW3QiCgu7bot281cMKjQPMbP7",
  "key19": "2LBu1cGhac2ybpnQbJAGZeeebBWhiM1FtVN1LMxo79R7atRbVqUY2j9rkw6LZ9wL9EykA3pKLij3rd4cgy8xviQY",
  "key20": "3ksz25XcqqwwJSeH6XdMn6fA22NKfh6XB4LV3uxKjMHoASmXbATrHUebwoscy7HgFbfCEVZJ1NQmgPbPe3KnDZ5A",
  "key21": "2P8HRWJZ7er2TtPrpC1P6nvDq4Fxo3CYAJwRdzpdAybo9wQiCnqx2S2eTZtqQpJ2ciUEftgoQgx5KgU3d9rhdwwd",
  "key22": "5Bj3LcBEje5aWo5bSCjP4ek7WHTTVBLJLJiriNWQ7Jab1RfBgFv3W2xwUChz9vHRbqrSHAuC87KNfi84WEwyTCE1",
  "key23": "4ogvvGFYPtjnvE8NTzEH7TDhky4EHK6SU3wpoqjTFLxSvdam7Co1oHx26ganTCT51mrbNM7zZ13diigX13A66MUX",
  "key24": "2E1xUMmAYoeKfDMVW69v5NxntkJsyyTjC2pubaVH4u7u1y5qdj5RgFpK1vahUKU6hUYqFVJ56739BkyFMsCP56Vi",
  "key25": "4XoULnRvwSE68ZhyV9353TGR4FfLXmfYy1hKt7qmHiDvKPaue5DYyroS4rqQTakiDiT4yabSV8ZqkTA7fQDRdhLB",
  "key26": "5TAsKEBmBZ4MdfkKdRhANAGtyP4jjYW6xPZnznQAXVALu8bDQr9PMzjB1Vwg6P4SVyencPT3zcMThftk9qxbF8s6",
  "key27": "51S2MLb6Tcw9hmwBzWb6RRggBCycU7mxdcYBkSggAQYECXTskgiiZacTW3VfJjpNAkjiBRRrXmoTLgTnGM2rL2tk",
  "key28": "3rvA4fmf95VfcZzhx9bZNFQ3CL9qcNi521mmhUAaksqHMWd1QXYTJBduBaAsthGz8RFvxBmDH7ovWh5AE4WZDueY",
  "key29": "aqyyxqTJvksTdosMEeMndzkQEfdNsiKb8W9NDzywXgWG6sKfpNopL7wtGNxbuoza7YVz54M9N7cKMByTdFX9vdw",
  "key30": "5jWbrJWiwwkTnDBtAdwQZHxrKCq8aEcoiiNtnendztCKWuJ3Xiu5ccDhcBBFzD5gFaH4Ng5jv3A2Gsu3cBsNMK5r"
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
