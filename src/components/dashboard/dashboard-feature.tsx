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
    "4DSPtYfGCEtR2dXCWbR24qY9QJQbkUfavyQB1JMWx8cuWBVDybquYExCyk9auPf3uSJkAmgmkJD6iMYRWZzN3PjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s783GGP1qN2X2qP58MqcWmz85M9PrhBaJbVnVewVhtWe1kNFj8ZFoWHbnsG9PBGZKftfACuw583LhJgG7cbWWeA",
  "key1": "2sYvX885qxJYmDKCKNb1kGTKKqa9mM3UEFima6MBR3ujVbd2NFLbkJXwmNHJdJ5LwFhH5wTznq1AAf7hTUYoiXdd",
  "key2": "4UCVT3firiKWyFBUi7A8Nxd5eqKZqjm8VU1n36EKQvpjiyqhw3uuCF9BC81qRjUE5YNotrEWvJ7LHpQPXGR51UqA",
  "key3": "3bpowQsNjQQUJgwuDF7S9aWnveJoHQNHv4H7uZfQhAVUcWAfdiLfxfjE7CkmuLE1kFDchXAwdoa9SnfH6zyUoXHG",
  "key4": "3iSf3BAh84pcX3bBWHwFFCJTCuySRzJhYKmRshWfDJN9yK2CLHDx8SMGkSsHZGJXejb6jstYBYWrU6atCCrocXyf",
  "key5": "4aBTG3WQYDmhtowGzVNWDLYdTAUqVqbM6ajXp3ohr49HP53D5FQX8XgHN4ucXChNUh7apZWADuu8Lew2kxekdsB2",
  "key6": "3RkPsFaLhkD59TwiHXgoqpJgLHcxpxBm98Z4DFxCaUCdFvQg4PApRc8DhVTm1mqFQB724WBu4iNxpBsMFec3mTPx",
  "key7": "5wTWa6M8HnugF6QJ1cwJxGaRmUdy2336GqCVXXPmTvPmK6q8j4ouE1q5pWHSbj9LpEx4YS9wkCs93BV4XqeZgbmV",
  "key8": "G92bFBqdpKgfc6VVfX6jWRbxXUbVycovaJKbssQq4XAZTdrVMK4rPABucgp1s45E1nYLvwSHNFPtTjrzZ9CsmCW",
  "key9": "NTSJnw5BhSMKZXuw2sYuE1NvXWwucYQdtrjHbrLsqmcQpYB1FGSv5dzhgeBvphpcohjGe1i8rPxiyNJZvfQGQHA",
  "key10": "2Y8nRsWNfZNvhK9XndncK6enAZXKPx4bQkiVEYMQonjwoNhzdu2tvo9iWbXcxg6DzhqSYpXf98qbng9hkhsUSSqt",
  "key11": "XS5ZjRTePGFVw6FwxQNnxhz5qao8Zaapp5MjsTcMqHRa5JpL95jdaGQyC1fFo6zVUGc1fbRjcKpZFJbq1C9931x",
  "key12": "NcKBDLxft5LcAmUvSM5GkAKbv5exz1rr434kNPZuGwMypfZwEeSZVVmgxtoNpaBXr4W7A9w3C2grHXXkmdy7J7j",
  "key13": "3RbZqJ6zRQ1h3uBksZuaXv2cYfQGXHZtFFWzBbCLWnhraLifrCGenJrzmFMR52FuE4tMTJmsjohbCpoDEdY4osHN",
  "key14": "4Vph3HNBCFmAkLogMchasryCWwxFtt6HArvENvTuE87cjom2iySzADYhgbhVj9n1M3rqDHigWeaGC3DJxskJQQnv",
  "key15": "4f2J2NxvtgA4znu3YF1BZ2eFDJREvkxd99pDmie6fQvvnDwLo2A2XW9b745J2V6ceFBcyF3gS12pvLo9vG4KLbbc",
  "key16": "XRf1qGkJ1NktCf3kvbjGr9dp2Ghq1Gvtnj3yPhi9v8r3kTxzyrbmz4nfPkrUBoD1xxyi6pmJhRwYVJBmao8fqbc",
  "key17": "41eRBTKF9NeeE7JRZTnENuhAnFahXccA2F6wzNoPcPxiG8j3pKyiAf6nVwVQpsxPyXiygkZVcXLcbeKzxLuzsi1P",
  "key18": "21LxMvwmM374baSgPuSws66HuT6GFnp75sBGDpc2TDtRyZ4UjE5xfNEdcxWdxx6xs7UUEX3uD7DhyoPD6K9tGr4i",
  "key19": "8Bp94wUiqtaU5oFM9GbavgjLBHRQdPSTbQ6bS9SfMiSb6q8rujQpe3NtvuaHpzTiLCUdau7VRRhe9n95XN3Hp3K",
  "key20": "3nJEPqUuB9aDibYdnYKswJj6S6B4Numj91abs6bVB8MYKscmcSXraUPYDY6omKbsBV7aHu1BwB2tVHhDvYtQHf43",
  "key21": "4C5vrj5R1usxLyTzxLPrWBVwTcsgpj1vWmG9sKyfusKQPEwPfeS4TwQnBbJ4rZbFNBJ2wVQsYvHFrXENer2miPpC",
  "key22": "SMjtYKuL6bUzQUWri1C8nobPbemZ7s3im4PJYFtuAovZMZ36WDe2uFZMzm6odi3Ny4TMAXJX9qpx61eo4HpFk5a",
  "key23": "3ymdskbtMovSF4WCeqhPKGp3e4PHTFMET7QVEmXEKsMrH1B3CPDYakEtDnyC6skTjTh8sgdJajzZnXUU3Gc5fmjj",
  "key24": "9kpJBEZoAhNMzFvHGP8RZVMpZDvTqKpSQ1RuBSow7eM3YCNS1MUMfRg7qTkhaYuUTvuGshYttEbFGaENuu7SJ4s",
  "key25": "3oSjpNP7qhQAwwaTdp8Z6aFbzPzxEvTb2Czmz3ejXmDgjNM2FrX6UfmKusry9JCJSB9CnqLQdN6yFYmCVCKF67Wt",
  "key26": "2GbSRs8xShLfqMBjXdGeXTGrUFtZXy4KK6VV1jaYFMjcn1KtCctH12fHy2kyFNU18hFUXZ3qFPNG7svaaKfBZVc3",
  "key27": "4ZTbNLy9hmC4LrgqTdpW9sSjuAZy5wCKtiR4ggpggCv3fzfTKBQb2PkWP8cPm8jxkM4EjUgZXNp3UJyLbmG3AR1N",
  "key28": "5ZrkeTZ31s335ZaHJWMgaG85JbpjrqiHKmncTzcftjEwh5wobUFXSbimSrH4KtKCbjiubzXXybfDoCLgheYa3arW",
  "key29": "29GYLTr1J9mHVn2pm18By7h2gfCduE5ZSDSw1okPEX5BV3Hf5SsmSz9kjDHWghnoLMXBKi6cDsupX8MenJKNFTpc",
  "key30": "8gVkH9VESsRTjpVSqKQBEWpiXxKZCtRRNLsu7sHASjrehdL1jqAMXDv2GjEGASSq6yPobQiku3sFpSmLVhhynNw",
  "key31": "YA6cXnrKYB96FMNSo7qB6Q9UHwp6Sv5ANuSGLoXLWqVzyJ82k6ReRqHqA3BpuEAYdZrV1S5K5kbF265v7anDCRw",
  "key32": "3ofR6gqnRXXuH12isM446egZBt8YQvtHqD5RYYMFFdH8Ce5gmUhk1VPYBUBYzXSBBi41r7Dnhh8uJ59GPiVdi6Di",
  "key33": "2jErKERSQvTgS21W2rpdZJem88YdQSmK5wX5An4toz2DZ46eMSRp4NmHmiCL5MZavDjMf9wcRscFh7azkofMFPVt",
  "key34": "4jvFag4jeuEwwNKSiq8vrwgwAvTdYdkQxMQ8PxjkQcLSQuT7SjGjKxdoyeMnsoXUBxQWA1CmoCZosavRfLvxvdZm",
  "key35": "61bKxi2sexPspBtrNLbcK3rt2u5qzgHewKr26NDqnBGsC1cXfUwDmp7TgaF7uyag4uQXtZx1Aqqoqz1d3MEANu9A",
  "key36": "daBcY4u4wHaZ6XkqJ93db15VrTRQwTCyYbKTmEGqpakce5ZEZpmsfPhYzFjtR22Sn6PFcxYpZV1d8GW9eLs6MF2",
  "key37": "47sZFCkY4ox7WRY2Cgh7X5h7ar6Tve2Wd2htJ84Lrp8cEhSRLx92fziFc6cBbZFkkbXmoDHK1JAf9mshi8Sx7Z8z"
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
