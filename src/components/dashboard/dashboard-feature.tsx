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
    "5XER3jwr87ay6F3ALxzgVFGdPRycMyjL32nRrnwSHsyG9tgv6M2CsWHEQDtfGiYgHyYphe9A4YSUaFbLRMi2oSKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJXXhRzVT3yec2AMTSok3x82nWTGeiASEDpR71fKtGq1j76Wpzam5DwAucrYEzmZZoz8xjnRwoVypbNGiyTssX3",
  "key1": "2ysTbC67DVit1jifpGFVRRS374PiBeiS2433DsNBwzHZprUBYd2GeWtsph5CmmwoyuFMCK17i67uAEVMcCz68gnV",
  "key2": "3Pr8DRcLbECBpdb88Rq34qAh7LyJmscTUrGxm6aFrn465fQEjB4pHec3UkBsds8LA6YcN9VQB6EKPFfYBzHgsGQs",
  "key3": "25rxDwfVwNQ8JjKSsTsZHXD5VjEXfTU8bv768AtJEbG1GWVjhmWC9u7h2DmGtU3mPRDzGBD1jETS17t5i96g8qk7",
  "key4": "5QAMEpuSm8e9ptWxR8aopJmYCQ54CCRuCyeNTEz1TZQZo3jb8XhyCCXRazRVyxa5L33xsNNVTtGkcnh6D8ChJ41i",
  "key5": "3NmvraLkXJorL4K2pho7z8XVTLC5qVPmjGKX3b4PGK6w3UrjmZBpMnRyo9uNdZGJUP9pZa1mpMDPTHyZtwPa1pqB",
  "key6": "4xHpMBhA5Wg45jYnbr3bqad7nKses42SsDg52FJ3d8otcWKtQHkK27tGMPstaHz5Szx3rzAspNhPfsjs2ES7EmL",
  "key7": "32mH7nApEfndqqjx2GbKbwHox6SBdTrfdzc4FjY4ndWuKPCQWbJTauV4UUZ6zievkmvZezKpetZPjH5UPP9zCu8M",
  "key8": "39jFTcfof2aiK58FpfkEPdU5ZEeNXm8ksBnWGGuwQCenLTzVBYsAUQ5KdE5r9FPMjU2eRnPXq7AftoZ6yFiDf4ri",
  "key9": "2dAZGWjFQPhhqzFyBBLrSeFn8xV3HriyqVmEZ2j7daKK7YMvqoGwKANRwfbmSYbW4eFZ5srDp771kKH4aTfhLtjm",
  "key10": "5kqUmcVUTXb1E2J8U1QkwAcfcHyp8d39xFgwfgxGajaoYsTwgXk828xVqGrRuCcFsicM1TbowSxCJnqxFXk37Btg",
  "key11": "zDc9UptoZfZY6FbM99M11V4RjrQfzkDXyvhvpoHnYRUdfUcPTAJfy7EaxDX7uizqBPAEsRe1Q4x9u9CWstE1vQ8",
  "key12": "38ZePCb2QN6mjgnLtspqdbK9xB3dSBZueTAPyUrduZ1JWThfaP496mXgLCvFxydhgMJ11nsT9U9ZyfWyJN3r82Wd",
  "key13": "78eMYPDRLeKtS3JgiVoGRk9tY476vRdGSxyvXfP6tLqb7C78WAiJ1jYuGuLt1qp2KpesMiM5LjMUKBF7buHySzm",
  "key14": "2Nf2BkUjqpHnbSqtAF84YzvMLNQvr7g6vRzTzQdhJPcGjbpgcrKLsaYSN1XE66QCd2hULCydwTsmzcxYNaXUk2EC",
  "key15": "k16snQskr22941trzzdoMGJDMhA8YfYPLrmXj2bvCpdC8pb2XoTPf72TKhdE2F2oJenPhxfSrCVCDaBRoNmRFqG",
  "key16": "3ny5GPwX9K5PXKRUazQVicQUxfo8sSFtRAsTZ5mVgLWGyPwNVxVyPEyScCmYhcve4LwvfsCr9Hra5fwo7KitNLU5",
  "key17": "5CcvLwXndGUJoYRQhagRrMJqw7irFvrHkyHFFgCorjpRvoRt5GFb6X2Ep5VdEsFCoR4wT3nNgFyY6eU5pQ1xSpDx",
  "key18": "42J99Q8MgRZzqpS1J4GikyyPJhZwe18L4Jy3pFu8wkz1BWycJEh5RZKspRxF1N8thw5ZDfR2CTvoSBif6iRk3u8Z",
  "key19": "5eoQwJFWZM5A2W4Zi33xHg9B1hS82GJB1oMQhWoLVWWjHNtzrHLhCMtqEdahHVacQKiL21WZgEvo7LW8LNyEuNx2",
  "key20": "2tnCzrCU6fDVJzrZMmV6iRmq1G1gyfRCHutYB8N8achzqr1Vm5LbjVVovttjZVPi2zvd18m6fRU3JwHPq9zziR6M",
  "key21": "5VQXEHFCVUpms8SJCQGwmHYQn1bUUq1eLUEatpmRNfQFWHqwfJotmv1ZUnSovhCR343NzesK3EKFrDoUcGEmuy6k",
  "key22": "Ge8vkJqhSsoNk9YYRbvgy6Ar1BWaVEPDczUubf8Lu4uzxQHFNgYQL65XDSyqHXzdy4PpoDu6PeByWACPbgEQWHs",
  "key23": "Bd535u2nRoLY2ZxXcjWb1RYSwLg9WhUe5kKrfAgUCK9DKznLUmBJLwBjse7KffG5XSVqJedBQEq3yfkRULUYu4J",
  "key24": "2afhVUgrCjrrTYAS2CSwkQQEtpjFK4ZHFbySLuN8YDXyrt7HyB1Wvi1UnjtuqFkqyXNqJvY4zZvb52AvXDVC8hu7",
  "key25": "TZK1iLm59SSHoV6gSmMdkZe1WwKGXSGNcpHohBGKyUoKeQo6r4uN8UAEzgi11TtKzJRaf5GbMhHA2JYmPtRUd6e",
  "key26": "2AtQGALcygTQFqCaGLYeayxiqCNk9DRtzFmLtTf3QT37x4EwiDfscwXE7z3DoRgVYWjwiojGTPK5T12eexwUhBRN",
  "key27": "5TM4LdEqQ3hg9PBvKget6pPt5g2xZ8BdqrLqk4QFAjTbnMwnLxKpPyWPesbVaG4E9NQFvSKcG4ckGzhPGeQYcL1r",
  "key28": "kASLTwz8h4CFwMvWNJPUvAF3pMmtk79wy5uySxpYqMNtR6nPpdueibd74wutQWL8BPGnTZdk1dyM94xrvzoMv7N",
  "key29": "4LkVRCdPnHQEo2oyTbwkyQGF92epmxrc9NDawozAqjFsBYs4nrW71DXR21CUnUpFBgrdftgocfSQyyGAfYKNTdRg",
  "key30": "3nGKobJszwEH6x8tAi8XKfPwGPubvswsxQSHhk6kpQSELdPxgRL6WZTgePFdNBvzZXSNPx7Ybfi6SRRGD4DANkKy",
  "key31": "5CZTmJ8CrhpqY6wg89vPNenPVUWQ1bYg6HitUQnL5iHm2JiyDsgpfKeNDDYf3X7wgxuA3bv7LBwdhbESjRtzJHWo",
  "key32": "4j5AHdWXEPWHBxMMEBzBfskMCq5kLv1NUxRQXSA1GNnvFyyDBp7CbmA5vdox6HvWdr4iNHMPZR4TaNLTiAcRDCRM",
  "key33": "gWpAz1kNqJMA5yGs1M9BwFKJ8TTCp5G6kFKe6MvQHcyfVMXRXr8qCZUvM3YcGniRqteCffyr2fqCq2KNn9219G9",
  "key34": "38p5c3jScuspwm9EHCKrbZbRW5Vr1UpFrqHoeBNktr44tffJdGPNhufeDXNfBScqd28UQnkmZFAfqKsK9FYPN6bY",
  "key35": "3JRPncinxFofr8Yp8s4tXdc9J9GYynH55QrsUjhKgw19GZzAXHB528ZP3JuKVMMBD7XB7KvFgzE1nNQq3amDE7vd",
  "key36": "5JcKSY7EzfGsbNrivExJzM41EP568Qn4rjgKkBsKDUaGNGrFSGj9nAznGaRKoEUhXzYV9eyBDuNNr5e1srzZ8PCr",
  "key37": "3pAR98Xv26sKJFEgNNzhD2bPwHr5b2HMG7C3g8AW3Z8rbCbXa4pKTh5aFaPb5nkWdgigwX2RYVqURVctv3AEktUv",
  "key38": "5yagt6VvL7t1bAjnno6J6vb7Sf5C33WovwsRLg3LYrycspvM1UY2fdxkgWKaByCvsfdTdjosrCiZgLCr66XqLLaz",
  "key39": "36Sfrc1gX4JkaHaWa4Ci4ecGhQ1mx6A5AfvESxxMXt7wPSraihDfoVoPmw4posaqP6oRoTCJfeXAt4iS9dqymKgY",
  "key40": "44zbmMJNDjBwmSJBBNTqeWkXcjyFiaMAmN7rDYSSj9FSDuU3RMaNLyPYHd86eojww9Xwjb9s6cCXaXzonjUmWtsr",
  "key41": "4FhFXFVZhx9JBUnyT9iXyt1GWJ8YFuTKz6ZPfh73tEWSUYmHzhHA9wKLEFpBtmpCBHMmW7vr4Fum1g61bjXp1oLV",
  "key42": "4fz6rqTCXS59w3Squ4LfrU27zRpUk3aYHt4AVb9P4h7YhWnJFY3vnv65EmdHo8VWBRNkuMtbpqNwMWcb4aiMhetK",
  "key43": "41fpSM1Y744WGU9U6rafPfTwt29dT6Jt6eszxsHtKN9LrJdEQWeSNqL7RkfePer2zW57sXEBPa5RU88XWuTfGAUq",
  "key44": "64qJxk4MssqsJtX2EqyS75BVMdUpqQvCtUF9zrKdmXAVTic8btPvLt3oxn1xqLVgdt2xKf8gpFSbSbTxwbN5TRp8",
  "key45": "53mXdAf6rUfyEBqcsakHbu7rUHhVmALKqmJ3LWR5GsEuMJKz7Ae6MT4RJ2YTQVD7hpwf9EQ41vLMF1Zr2NxigMfx",
  "key46": "2tdmyyZEV6Lt2xR6aou7gj28cxU4K9zYs5gxkhTYDAaaSTW8TS6FG8uP9MFK16KaH4MJmqajAqpqBmKZEduCHoXs",
  "key47": "NcZE6AnfCo447PderratH9dQyyaykNMuTbfPLvoAdARUvJ3mQ33QjGPwj68MLqXkSd1C2hwQjRUEcAodC9XPNVs",
  "key48": "RAJUAE9uQAt4btYtAZ34BaPVXVJsvTyzMkED41SAw4L12j1JquXNYoJEZGvY9rpL3ekZ2vGg6hZpZHYvCUnV29j"
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
