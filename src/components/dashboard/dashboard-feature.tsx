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
    "2cSF6DtMWQFBgwi6MfkLA5SfudCLyfTzTyy84yLAkn4BMfnLUmdvM4GyJw1S4KZ6fJNeEJTxBmbE7d83TXq3Gjvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1zCgThzULMxWURDGzs3YGRcZMj38CHieSMTPsJaC7SAtRUM76wB6SSzHMq7ca9m6HRV41WbiFdZKi8QK3CdFLU",
  "key1": "3Vzfk3AhyWBBSWnYtbB78s4ksvSELaRBaMVprwjugcb4mTpPr1CQcXAoiRErFFS6MSk6XrsNNEM8JvzXWX5i9aZ3",
  "key2": "66nm49HPocaVEpU1KUF2y6ZC3xi868F8TuszT74bKCdPXgNjk4qQ9dVjkvGzmwWquaaDm7qkBgkCNjKvB2c7YXtm",
  "key3": "561PTaV3sRwfKBGreBF9RYN1hzvQ6PiPKvZqNoSsE4kEqcYsYcBRctZTraWvu6Y36z1dcNSvfmjn4JjkxMBgeL5y",
  "key4": "5b2EvBj9dMgzFwr9pCUr6EPRRjjmm5cEaYMMXQ5yD72KnKMjdNSe3j7yMr2jCS3crTf4UJvkCkvyJGrjz8PSNZT1",
  "key5": "45KANuhVrmKX1GgaMgF1p4CUk7NwAaBU76Xki8Mgygr2xCXbTH5warYwg8ns2pbW1K43SZcM4MUHsHR9qDgj97CC",
  "key6": "2zPNrbAmUdNYV1xYZop4VysaPkeqKknzgfP4ToUBREJSB84CeC4DXuao7auXhHVPVPCJPx4vpi3NhHT1axbwBWe4",
  "key7": "3NXRdNaVxtL3vMuaweTb3PBGM5Lon74JqEGzXVL264JNMU9UWxkui5uRMMd4WcAQmoYfLwjTGD7wNLpn6YvzwReW",
  "key8": "3rhThLE8ZoZFMA61yinMhpxwhvULbW7dTfT9HGRkD25v5RqLHdBGSG5Zi1ieLnrFWW1P5bYrjKXfXAyjzKssSkvg",
  "key9": "48W8jwjtD8zoxjKGp4pQY8UjoafCwGQaYaJyJmCnZv62QZUC1hMdnVaPGWiz3R34bHC84xD9duo3NpbGWmYySUgv",
  "key10": "YzcDRt1GfnkMbcXSKTSLQww9mYBYuubXuDwBvzSrN9JN4PoV7QMYdwrcDEpdycTuzJFgQfsP9xAEig2sC6DA67j",
  "key11": "jDapPQpALufQ7S5wmiJuB2paEJchs4KGfT66jeHkAPTDyxzZxCGYcrpVzgG55YxWCZc78NRDSYTVqYmhyApBXDz",
  "key12": "2txf3DiiMSUp4uYsYckJGwsxE7Yc1tckJYh5FUS4qaEhEACgsWxHMjJMficN9kc6W4K71osG8fbkqeCBZcHrK3PD",
  "key13": "2BiV4bVka3496V7mULFNoR8pvJqiVvYevTSwupbeQabv9kE8N41W7pDWWNpjn7LaXE1V7TdVcCNU58uPMb8VDzKQ",
  "key14": "u1WMDyjbiaU5qHKVkVGVre5qC5R24mA1Ahm63icFw179USrgjoNhdKLyRv2SQbqLVwLKxLvaMXGvj2yJqcXescm",
  "key15": "4e7eQCKnP6AKg6mV1oX3zB28MZHrkrxHtgNFpPj23vF3BhFkVeh7rG1eNG6aVSA8FUqr3aPKMAVLdCmxQGD2vXzW",
  "key16": "2gJbznQ1hFcRrPyKK4ULFxaiF3ASKoagaNvffDgSHYPHdYhtAKQtK4xqyXze8ek4xNjBKwU5kqojgwKFP8Md2b9v",
  "key17": "nGggYr711meBPARjZLXCijBvd1FMjfrLxPvafWgESDZYjX4STKHct45k234eC9qKbUNexgd36ypsEChjWF3TNJm",
  "key18": "5HJFh5AxbGUANRJUk1M9j2Ur7WZSCJZGhpPKMz4fmcLoCHvLhKuyN2Yve4wRYuVq5ff83ZEyCnmGu8gbt9GR4pjm",
  "key19": "4o18MLRiEfrfLnPXKHhahSrRParRzc1wRV3HyJzp2hXeMXCW6vf64Mk8EnqTMm5pozKy4u4U3cc9242TETuWkUS4",
  "key20": "iLGVL5jPZzfJHYdkVdsYmDQegQuCyPFJYnsPNgPdzwN1pGzvAfg5MaNXewDqdLaSQ47qkMjk6ZAYhmhtMtCZu6B",
  "key21": "4mUzDbXTeJ8xBRuGzyRBpRCQD2fuLoYSyBuZxZrEU4vkNjnZS6N5AhxWjTNsGfsWNZynVCcTzhFmoMJnrr5jLugQ",
  "key22": "4FTJU6xknk2HWSaVoYKkayG1FRxARkfNvPs5BsbrtPeKu89FPg4Ur6eihk683LXKCLnpYNysDTuXgAwNVWU5DjkH",
  "key23": "2KgfWens9CHGVkyWRJz4dqd3dhwUznYqBef3zEC47bC39N3A4SAaNtn2RPHV7zaCfA7a5a5CPrh7PJwK9FRtdbeo",
  "key24": "p2UtHUDH8gcuECUgxPvU7UqxquCWzJckyiArFevDZDoHpWGkWo3MCmMBAj3AsHSFSjCdGVdC57AVmsjPK8BAEnk",
  "key25": "5vQXUjRe5WgqzDhWVUpXm5JWTKh3Ycb6cBBcNWs76HmoqLzxdySWHn9wywBiyEYbyDQPesCmri2xkor1EB56QoDt",
  "key26": "4EfG9gaehABYvSZT2KzvB72KC1AQRcyAtwwc4ARmxN5wdDTJjQKyQNceu3ZkEQVrTLsrtzRUbYKMwXy28U78Qfs",
  "key27": "5H3vn61UtFfZcSmBVyphL9My8xC6V6N4yYrtGqLquf3DtJ9X8rU72wDtRn26QBKJt4Za1ovZrpfBNPr38JBiu9eF",
  "key28": "2x6RFr44reM5ohvRdzkBME8LGA8YNH1q5rjXyB5xyXXd3fDatTRFpFJBTzXaB31SCkioPMXu2jZLJxxhafYpHkQk",
  "key29": "4qthWx8muigCvThQiZpo3Y9P47i7WEvHFW5JRc92xfMEuMnXko1sCEwdLBv9Rx5eQ82giwn3YMryaZKB8jjTLnZr",
  "key30": "2SmPWRjBBnJaBkepx422ZyzJoJjnXNnbfhBJvfm3JgUJn8AwsvLYTCpqpRQD5N7E2BdYGNm2NcJV8e7JFKfvZNRH",
  "key31": "58uDfdGEBurwuQPsGhe6n485CqwPAkMUXSWjeFY9eTRokwUf49DawnYWkp66pMXiRdqCYD5XE876aMxbGk345N3K",
  "key32": "2qFYQSqSLigUk3RKNcbLsxK3n2LBPC9zpTtV8AFVm4LKHSxXNxnu79Btno3zD2u6EXMr9FHe5bytHRY8b1Wj1jkY",
  "key33": "9QWT9CstCguH5DvqFinzoxixNSvDZu2EVirhfcrSAGE8xzxqV78kWt8vyqBDQJPuX5HdXnqgzkwv2ognvHup5Tp"
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
