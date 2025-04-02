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
    "n9e5w8doPZh1xho9SQGooSrPV73vf4zgh4cgJTekWdpRgtuPWeJwJqA7aQAThCjz89Y2cZMHJVj4m2Zdakiq5qs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22KSN9iyn9NYjYxC9fwXs122nB4xpzR2RQhVXH55paBKxANCbK1xhHgiwKwZZydFVFPCPD9TuEYuKMDfBoPtLyfp",
  "key1": "62nWkCLK27wFL9vrefQhzmxWCD8M5WEcJKqandpidCJddYuS1p4eTWKk9iEmfakcxhw6f9Mifv6JmJCGtDSd2KvK",
  "key2": "3YZ9zMGbhWSkfgiEi6e6K38s576NNHcDecmtFMykiug4Nryz6iU3N4Sk52zkdTZtG9L85fNQMaS6WVD1DWNLHeXh",
  "key3": "3uSnTaGs4zzweau4b6kccF6kQgt3nRwtPjiV1H27BMdMwy7rjs7NjjcbHadVh6u9nFTpn1mRvivAtQXAMA8zQPEc",
  "key4": "3mGCNcPnUw7UahBJ2eEJGkLxGeKtvrginYPBSFZ5N6UEwmX9BS55Fg4s7iBLjFS9f184CaydVFgDk2T4k1YTRXF2",
  "key5": "3TVuKieq5xhv22eZzAq6FeVt8jDiz6RXUNvvoGuRhzKtyrZ5xbpQWPjkzWrJWsXJaiDZLrZMRWE9Yr1tUo4N33kP",
  "key6": "321L6iCDu3wq8A5L1aievkn5Z63RbgJe9nJ95mVkzuYxdGr5jLsmJb63JkGX9KhkaHu2hTdaqWU8czJdmKv3LBSs",
  "key7": "21CiZkiFEFRhMrhUBDVrEsDC9sTqoMRzdhhezu8NiLHEwPRGTpE4F7Qh1WhwotNbJebhwd64rxegRoft4Et8Ti7Y",
  "key8": "223WPQebhzeAyWVhLoN5DovAncgNh937pC3tUaNtCWjVnnQgxcpbGk4LXssU1w46qDCtNvTZdAzaDKisvf2KmC7y",
  "key9": "2ABBRBoJEyDjPbMup3zz2snEdBsvnTEM3F3thZv9FkERAqBnn43vbChJWnqy58zvYH7LjLkHBLbdbHYzKVxd6uWB",
  "key10": "2PnFzqzn9kaan7bQTApHtkps8eeennSdAFkqXwmNDuahV3wYpgz7Tbj3L3328TnKN6HchUcJJGMBnVjAwtFUmd2v",
  "key11": "2qSBPudvs6Lo3YJAVGUpRqS7P5s8iWcziwS613vy3z5GVJSiJw5e3oayJom6mzQC1oMFiS3rM4vvQwD5E3Th3pj3",
  "key12": "m4ZntPNYqfSpYFESYZdjydMyLvfh1a9YpjtFT8EA314WD2Na5aJuPMfx5jCej173HbSk58JFc5aEFyRHbcnYjtU",
  "key13": "2zNQAEPwTr8emoZH8e6XPWWEW8AVfPAMMKH8sQWxD2N91FXSkgk7jQH3mM5nF9L4ticTR56hb3iaS7dJGWyq23yG",
  "key14": "ck2wkKBBX3UVZNovRF2z9NQMNdxDXnNrCHRDswhjSZizHA4cFtRxJVLwhzymRg9TAvNyW9XtoJHwTKvyXGPgCJD",
  "key15": "5KKop6Aa68433SGqHaFBJE6WfEDwfvuKmJj2a5DtcPGGnS1YbJ9DKHSpmBg5brMB6bF1my81UfSJqmeDhZfBcMZy",
  "key16": "36axo4dSpmmDtnrJRLzzCKHkJMoQjKEEGWH7sia6tMF65KjJ2DoQo2x3euPpNoVEv7f1bPkGmwosa7ESDjVQETSh",
  "key17": "XmB9VTLPdG7C8QmhXdu3v5YLsCAXahFyBorv3irENA7xN1zHBEsJz9T9fVEF5EHqtpKGEcwi1qd7bdHWoddMbRp",
  "key18": "2G2DsacVbyXVDMAykTNhSwZGk9dwTU518JTqJeudF79tMHtTGUBTF3D2FvuqWXnAafKbukTrBmqEKn5JqM8nrjeM",
  "key19": "7mhkofQALUBm15fULmPNkdREicfbqKbjtzjXLo4FtbqhscqCdau4ntpY6vCusMHbW14MQuxEBoNwJTSo5P8kZE9",
  "key20": "3upYYzAJj1Er7JSSxeACkt6bxbeJ8CfbhFFzQkYiyDjpxJPTkDmVKUtad2q7iefGzgF9qfJnXvMrKeX8JERkTW7T",
  "key21": "4Dw6s5NMP9kb749qx4eesnKMpZXtXETUpCp7FT6fxbuNPBuwMz7tobxVCrEK6Y2rQnve7ktyBiUbEfAztix3f37j",
  "key22": "4KMvLceZDU6Smnm4hktN54ri7bEofdiCpu8ikHMQoHGQ2JWUN5jdKVzEsGkZhWEFituBQSCjbJMLKPubyXjTBUVX",
  "key23": "2FA73DvDmAR4W65WzMXANf9Si4eXaiLrY921Sm5BUN29a4ZyazpUyqtHChX3Hn24HGGmCUbkDbXzc7ukGbfovsjn",
  "key24": "5ea9Ee6Gavt7E2EBV5aorKqMRzyF6FPGYJg5K2JprLBd21QgKhMcSnHRmXcYvKw3sA3GNJ9xUfpWqeUDDHPDBTkQ",
  "key25": "iSSbZEY8V57boAy5zWdywK8MzqS2rKGNjRv1i6XcwkfEKr8q3U2pfutDeiKHbudUuDay99YpcUpFsifdXg21Lye",
  "key26": "5Aay4DFoGXRGCQyf7PgKpqeLqJpWoEc7PKnw4xCVrFvDk8rLHi72zrYfTo34uwf5J7XkkujnowSWcwtCeNAxjEh3",
  "key27": "2LnbNqQ2GSzrMgKvGm192aSnP6KYA6xBCVmg4GtsCNoQZkibuxCUBEGf6aYjGqFw2HzWgQ1GhCyFidsSMP67X1ph",
  "key28": "5xWLqSWHMaiTMQGuXBUVwnwVeh2RMkQZxcH3PZHZh2tpLd2irTyT4bKLEBWYDkazoxg1mqo9zPoPfzjXp5ziUHXH",
  "key29": "EuivUpcXDYcdY7JqmEAWiksEphvHbvE3BCNmCZZ4bCzyvfpoU5Qo9g4kr3r6QjMtxU5XCjK96BbcCr9VnVDDScN",
  "key30": "3jWjUrNXV8924w4QSJYkqxN3757pMxHQ5unZUnPTQYmGaEaoaHoGJCLnLrE4ZrufFcMhtcQpdwgZiitZ9P3DPynD",
  "key31": "2zfG4wWMPoMytgsXrv9btnRm99RKDXHYzPGu1n9MBELitucvuLsMeAi8KRFCoTqpHEmPDSbzhY1eQ1jpupnw7aNF",
  "key32": "2L5PbWL1JPqMhFjt8r4UH5Kh4W616ontYZDW7cWQEwcJzWQv7eqPPsYi9vAkMEsJkAE8Qj6wzsgAzCSkiNcJveEc",
  "key33": "56QBb6eLBCjY9ptLiLGzKndKbDjKrWUCrEYFw737YVLcopkqQGUWDrB3L4n2dxq9Et7zkEXqC1PCtb6K5YXoFzW4",
  "key34": "5uVATtXQ6SKCSiWRjgQhZWy7fitBLJeXkDUqDgFYmhqbDhM4mzYJKnXbJ4nLi6g89sdEggTi7o4qpq6a4McRMswJ",
  "key35": "3boUjTzB4DzczYeipLPsgVJj3p5bg4iH8znS33tNmVqG3nnudcx9i4HbeSkePUNt8STo8MzK477gUVW8Vav4vzxe",
  "key36": "ZE6NUu7eZadYSgN4XTfZVAwfkA2zpPGuvaWudMond4L8Q1xa9Fb856PpGuj1CKszcTA7PxFmXFCAz2zQ2xcLmvG",
  "key37": "DRhty9b8gY7XUfc57PYXp8ADKgUZpXBEzSpf4YiEKasvSSJpMteDMAXDSzBe5CYMwESfuoLGTJYm2jSzZAPhHqf"
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
