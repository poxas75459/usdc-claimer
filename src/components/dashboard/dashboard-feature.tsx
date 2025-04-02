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
    "5ZhHiy22TiB6TVHHwxZhBX4TWFg12orB1jC89BT5kD2qQejB1tixtBKLFRGHaKsGRM4zua3V68JXwRzvHfY528HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28cihgJ16fXXe1DmPwgsKgFELdXhqFoYZarPqeP5eLkd5LarraFHM2ZXJhPwbbgvjAVxWRCgpRfLLmnECF8mW4Ls",
  "key1": "m6BxzfTuewVoLtw4MMRDUuZvFJVnpkZNnH92x1f7kYFuQ6YoViutd4KYDB42bNoFcvZZyVxt679CB8ttnHLfDbS",
  "key2": "3usDGZerz1EwktuBNB3UgBHjhTM8PKvt97eNk58nTeRjhvWczqH3LSWkM8kTJ31UtoLzjT9MR4A5VkoaSctWLhKK",
  "key3": "2zWtoUQCM1S5hcReKSAgykMsPoDBoaPLKPNp9oePFy69wwGHVhFo8wfPAva7yeoSeqaYpY9na6rVYNMkBSudagcy",
  "key4": "2TqH3rw7kTCwdTjhuiSTSykc9xCpeQvN8iiZ3fTw4WY7mqFNPBAUtjidzFg8ZdvA5DL69g12CHJFBuz42KmHuxjb",
  "key5": "53SEqn759BbqBdPgVBXi9L3U4FYrhQqP7zwBjWiYvPvVPKkQ1iZuZnskKvgmtsRmjXGTfhuSvJXc8G6D3r9Muda2",
  "key6": "3NWmMVvdfjNGEeCPSfQ3cPBnG6cedViaDZT68hErgEp8ABWs4MPim8iysboT9krXmM7mEc4gEPQQ29x4wQs5zf9U",
  "key7": "5NwzbvkFU25CwJX4Awcy1QUDVFzQKQ6SFkJHergwwpH1bEzD12hTsLJutWjppsvQMPhXdDPkdfB2Q3y4AXuzXWPC",
  "key8": "376SKUw9yh6UGTt77ZoAMDmPjmVzzGECevUgbMVQEun8nn4Yv2UApkD9Gzrb7XS91gW7xuTruFLL7FGKZi6z5uF",
  "key9": "3dfMRzpx1e98EHbM9AE2Vtj3auWxfepYFBxGtPgsxegdS8TqsqsmqBBd2U1vqLsKAEDhSkm4igWCsPCh55ABea6",
  "key10": "2ugt8dDsUo369C5vHpJSYZjTmcERPQS1EgPwkJ2YMjCZ48mLxR5HDBucotXRLpShFmZPtyg1TiKLJWeXDYo5EdLi",
  "key11": "5cyZufqNtnhxFS1oRX5Buz6cBmR7BLGSnLQGyXLPGdNLpXK7Vmnq2w6y7N8yx7Cvmi9fG7cjfFQ8F1Nbu3iiyYY7",
  "key12": "5HgkUAufcHLFMTonb94tZJ48E44PrtBxAYaDmnumH5hwUtMK5sLM5e3dCVTNEwuax2oQ3EweDfRiJdUnZ5XVjJnU",
  "key13": "5we9ZeNYYuPiZLnXRTcmMgm2AQRbAXKCUbFjgjSoYXFKzNnaf3KksTrmU1tCijux6jZESmr9fhFcLwyxbNg8KwX2",
  "key14": "yVzVS7xPNzW3W5jwhSQpJvhjqLhWvESZxj6qWj6WdcFz6DuP8SGE2YeYgSDHPmbwrWC7sSGw68cJtgYtCj5VPga",
  "key15": "2Zaq9dBfMST7bJxhLxuJTjvRTEjBmNCgGYcyTU5H5YCjch8iw7oJJYuND5jpHGgtTzytRAQSp3RspXRnG3QRjdk6",
  "key16": "56BuCfdFDGJDT26WCawrTBZtYmX5oSVtWbCJJCUFJrxg29N5HPYL1DRU5ucZF3F9ohUdVf8JGj9P2NrSkC19oJBh",
  "key17": "3yyQD8BJCKVjPtWP7nzhq6T8AhQjEtzC7Jx2g7nRVQBXn82ncbCNwneZBcY4WPCekEzyBqVyMbviXfN6PYhwX6rL",
  "key18": "4WhvLdEBq65c3fCRMZw9nswiCWyyg9bDyvUGCy6nTKditd7ZfHsNXYdZ6C76dKtnpuz1iAgty9j1yJNsanpRrpwA",
  "key19": "sndkiiMTeDQNTVYx3VJjisNb4qUcZtqrYHEihPxqTwcFw4GK4xNGwwSRb8saqCHJfvEowj9iW7DkcVjWqkjYc1q",
  "key20": "NBf9ie75EbsRzJs7HobpnjFBwZ1b8o1YAt9oTuZ8ttHG78pG15yiZBoLxsstpEzk2wWtb76DzpaAxvNEGZ76vKT",
  "key21": "3rHqZkCa6jRZbKyWcmgZB8UF78wPx7b3oDLYMCb2s1kjXmtW4ZkvwZsRVEESiq3Vs4QodS4U3nYMnv4J3qjLUz89",
  "key22": "4eHVF2qnnUgriNAQBos2dGHNYMqak6oK5bRxaD2eJETmSjMgVBcZVSoFuCJHE11KVMgtAaV5HNPrPRt8fgfPTCDp",
  "key23": "k4RouzstiJhKgddhWhU7SnvQ25emqtN34JkVkDD1aQEeURRL6o5GsDJYoEQpWJ3VMNqNkCqkq7rjVC3LPxw1CJ8",
  "key24": "5aF64xhxtpJxqGEVB8yCHfDzs3ohNAZsVCsEfv3npcVmScfbK7RcacaLT2DXoKA384gM2qD2NaJ2FvzQdCiqTet1",
  "key25": "4z2kCsjgW2BhYgq6zxNqW1zirzVPDeVPur1eiMqx5njyrk9p8xgsmMV9yGz1ZurQQJJyXcPd1smgv4DqPk9Usw9t",
  "key26": "37LydeuoUTh6rhNzv2ZQhcZ4SFGm3kzFBVnLaos93aY23LCK9x186TiiVvmwYpAVz78JaMb7Nn3kQt8vv28jRqvG",
  "key27": "5uVvahCtpS1uyvtt22fD46mNJAJUCMoLS4EyXMEqjKqXtUy836V2qQxCjiwcbAr1y56hvLpejchjkwxyR8giViJM",
  "key28": "zvtT9ESczADXH2tk8KbJwVFFSUVbVK5SacGFL2ied1M7NAufLayAY8G5kZa3L9MWEVez1QDM6iib2TDrQDqQkW1",
  "key29": "BLW9tGR9ddy3mFYbQZrQTmmoL9gWUmg9uw82UJYj3U16Ub4S9ARPhoddCxiQTrAXZEEvQo1B5B7TyUbV2iXtrJM",
  "key30": "2DJXW6KWv8Xs3ygJdAFe22n43WsBfdTkRo8def4nd25nDjkTLgsA6P7wfEuVvSm4YRxUb9q3HrQy88VLAyKM9WQq",
  "key31": "c9obhqZrHGFrT6eStJVPG6mhrmyacwA77g6TmYyrWdSGPdC2EkBnwiFqUrWEQ3Eru9EnBxfAhAEXzWCZKSH5pjt",
  "key32": "4LxFDZCX1KKTNcRcugGKKRC2burMJcapgTyDQ75TriUmKzuhzK2exdNMabZYvuQ7qcFJBbas4CXpSZrkcvZX3GZY",
  "key33": "h8LXTAxqTinSRSn3KPQQqYTXzwKYhgoV5FzcKD43cTHZYZYTrRMFSESBTZREiKSxcMvLuXCqWetPmUepTN92kNj",
  "key34": "3FY4bqY18SspTGCqH4aT33x8HMTXVjZyKjDoKRSJhZ5uYKk8qZACcsHoBmLdGJFeR6YMULDUjBxRQDm39UVqeB2z",
  "key35": "65dkTPjS5GosdpntQA8B35zsYJoAut3TPZsj97V2UHmrJeN47uAbZdqUxCduAnso4dhayRgZDc9g3X6eCAjUQ8vY",
  "key36": "3da3Sx5gPSbwPEukmAbxofTJTu648D54pXFJtWmHpu9pn1T96mtvbs7Xuo5ecUh4sNLDxLx4gBb4Y1UMy7wyg6mH",
  "key37": "2BQ1JadiuFCtP1ZkBL8A3CjujqdowTh3QuzmYAxAZpgMPycRhNp8o4gT55zZ6KMZLgMMyj4hZ7jVuK7nsSYoAA2c",
  "key38": "4PLTjzKgHmwsvH8iWhsGyszTTfXmHzFfofLUEQgkPWNFGqNLk7m1nrT3j8FadnQckn6PE6UBsRXWiaexeRxQ98gc"
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
