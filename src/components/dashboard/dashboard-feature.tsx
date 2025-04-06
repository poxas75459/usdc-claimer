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
    "5Rj4U7NbhfcHUA1eaxXTvCmxanBm2UosieL4VXmvYqs4KLtHcNZg1jARpFGyvz1J6Du2ogfy58xddWtB1H9CdtFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KfuWxZNyrfZQ4eTrs88dJSVF5rAQg4dwPzn9QGgaz6kNgfMDWv9dcj9cnYxYqBnNoeXEKcuGES4AodWGoc2yib",
  "key1": "4uynibE1CkEPL5fDvkc7HnD6jajz1ta8UfJYRh4Xv2eBf58eu3LUhA3WGkfDrhUqy6r25uSdSoXMfCaVLDDzHCJs",
  "key2": "4TWZFiBAtCp52KwwNqtXYxCPudeyLXy9mNbTtZqDzwKykMuKu4Wev7Jo6ddnBvRZLdWqq7YcVUq9qpKFDarVNn5w",
  "key3": "XuFS2SaKPgPWUM78SkDf5xs1AmXBrUMYUJZ2beEDj43s9D5ha2EisqVBYa6xVPCf1MnysF2zKnkKBLBpFUvYRbv",
  "key4": "2ey651PDTVT82vbwkSyZQU19idPsPJUDRCdkftjgUjXy5uXbgUPpW6i4nFcnyDHMXNPxB4tUivCDCSvg7wRwBA7R",
  "key5": "5M2rBBixdkT2ZX4rCs5BiSDSJGrTeZMfGLRUkzWkYooQcsLvYByubCAjUH2gUzC3SrUXHzzBmZVVhZSTuWHrHS5F",
  "key6": "5V9dqi7p9CKesWkmZrnT3sSBWTwR5pFS26Mewusf2RWBZ4V4uAqzVsh5RvwzWFk2FNQ4VudpY44Q8LxVLpPLsYR6",
  "key7": "5YVqnQiihbZQ1QURLEbfkDLNENyWP7uFRZUfVKvDzsaF4fd52HFLJTTbprWggKDCqKMw2WHcySd5ED5GtSuveK4F",
  "key8": "21wqnAXKjp4VxHM5hrTDyBgtrE9YjvE9nggzsuYxmyu1Wq8EUYxgq8tBdhRj47LGJfWAzUNYJTtcSzvQKyEdwBQC",
  "key9": "5UdrEjfi7mEY5J2qwhQnoh5U6Wg4YFsYdSgYGH7yrgGeapAUmFxjMHmWRkscoZGje5NM72UntGXMedNYSEjuMeHU",
  "key10": "5zKqFdHwoSuFXANXMbWa6SMU6V8ZJFL95LBpACs2akukvzXiD97rLccpfgfRJ4iB182pWu1VubUwsoJ3SpazHDc",
  "key11": "2vDQgXf2gexS36UrmUCxze3VsYEPFTrA4jSYQ1zHVVSfC3mpxHAhcPodZbysdscCYzAq3R7mhzyR2uP67vVv4GYj",
  "key12": "4CWHkJbZj5wh31moa8G4Rc5NoK47PjMC9sMKa6utoYMDW8xiMRoSDqyKJMtdLFDfH86cSMcrmFh1BxRpVCzjQUcH",
  "key13": "3Dqg6KUQmPDkRFxYXs6ACMviVuZ2p9tpULhYVbwgwGBM7aPfzrPP9nMHHCU8HS1r8XcZ3ah3xDF1cxf4mKteoUAD",
  "key14": "33SQkkePZnQ5h6A2nSh65yuhtuSAEUZVPB3zWCcV3rDdUnvV7SW9LpRQWBCRSvCSQwa4gHjwKU6H9HUhzBhV3pBo",
  "key15": "4LQqQRMp5WtBhNAmVVsx9FirL5jmqP2AmT4jLVywFHsSESW4t9DmhvV3r82Q5EUXPwi8SnWHjvsd4GYiVn8wKnjS",
  "key16": "Mta4RKYsppLV5gFdCG5AQSaQ4CzGFcF1pDWdamLLeRgVBhbpfjT9H2naPADXE8ukGYkGQZ5Ho6U8k7vigDo9UDj",
  "key17": "28ERMM1rKvMoQ8Jk93JEHJU8i2gjoRqFcJuqfGttJeyHahtv393aiyz3w43eUdPHw6CLuEU1VXageG7NsReTuBN6",
  "key18": "51q1jdLNy1Uc3mp4DcxdShvYszsHXv9vmYZa7BhvMpkCH2kq2BtTSo5Qiiqjz9AFsiiuBBjUsdCVVCRjzevhzwux",
  "key19": "4obiGWQAgzCxa967c8Mmj8NtNUKPxQGkTwdfzm8TWdTZdmSqxyW1DaGQZfF4ChF8wWpgbeGJYE2ctvUQuxgigkuY",
  "key20": "3evppvGrGKMb5JZ6w1rWWUMusuK7FEcgUwwBqsAgEi7tEg1zXnbLzi2S91Bo6sn8CRx5vVZGk7Vh58yYRGE1F9j3",
  "key21": "3h7fZBcXzbLUD8dYmfDZMEz5CJcgJ8dPSLtM3tGnqUURU8g81wSma3h4WiARoreHY8SnAB9uRn5jGuZWHDxEpzS1",
  "key22": "2NAXiDus6aUpsM7Dy2kYMan75qHdwCQUqqcNbVm9H9xFbsvZgdrVckAG4XPnuKLmmf6AN72WAMeMaVCqMtkMaz4y",
  "key23": "2SJjnE23ykXngpyZAiKUZknDGDLDN8RSEk2n1b8iZLiJNM3DETS3K7qiGcpJJpGpS2PP7hGHjyn3kW84135wmtwL",
  "key24": "4XtMtXUWBAiv2Gzjm9qoMcT4MSh6uzSiF8PzfdGxjZUE7QgC4ojWUGVMPUduoDDk7rQh72CEFXk3jCKVk8DUEWte",
  "key25": "3G7UKKV9C1JHubYZZTzpv81ZUsLoohuRaAQukK4dY9rEVffEMJZsEtMr1VpRwLSn7f596m1MUsfnPs9tKLTopnTG",
  "key26": "4RQaaw7BDCsX7VSN2bi4i9F3v7ev6TvhceiVKJxGDEmpChHQUjTa8fifyAMkayYWjd2bVhYiaeBJd5f1NSvdLRwS",
  "key27": "2GeaiUuq9SHFeNq4Za7o879ia6uQiQjnnCVc6kT5JWWaPxDHdktLiZud1r2v9GJFoDyU8pe2Ss8fgmSWUdgVhmho",
  "key28": "3ZUXSgszD3VBLtR4BgAfhBEcy2g5XawXjqA89XuCHa42SKtci4TbP7YES8UrLQakpx828MYjDzxWRFdCuVuiYdJN",
  "key29": "5JpsJSXTxMLjQaM7NcAbqMW6q1RmpKtPCH4pLjm8RSfYNDShziFi9dgZCiBs7iCuWTYxQvuyRnQxh1QgkawmmqNi",
  "key30": "2ZjDpbeWvqWuUDzuT57vucWcJUsknxyDLRBBqt2WqrQZNfhYRryaop6aE6PP7tBfaFQ7DziGA7mmatBM1cYEqT51",
  "key31": "9Xveoxs2udYqx5zjFNmJcACi6PQLoSyLJfrTrFfRyXAv6sHxEeM7cjBMoccd5u9Lc9hbQVDFg9BmNuiNAmnNtkW",
  "key32": "3dB76PiF1wesKykKePCDENhZNNdW8zahqBXvWAjX5aMLJVGgr6A4V3gsJF6fg1ZAqMBFGaGzP3a5cGeVyTEuG7MB",
  "key33": "2v2SzXGgNWq46ARh6wY2VoWAARN7nUWmEYrRXwoVh4Ct7ZDdLVXyBxtwPuz4UguZ46C3K9SvVPEKgSHCo5VyQHHi",
  "key34": "exBFrG5Pf3H6MRYGQBTrw4BPg3dinNMgXeQgYmN4z7HKCpMYmos9wqtLvbiNKVLeYQbKLENwqS3Knyn9dsaRdez",
  "key35": "3Bcz9tjBRAhFsDiwmwv8eR2vFXmVoxd17eLMVJTep9dP3pDWc6JDP4KdFEicXLCLjKd142UYPP6nERcyhzAPyFDq",
  "key36": "5jMzGcVxCu8dDkZudokMjkohNmFawh7jnAg34UrgjkbXAxpMRxvbgasXAZbreZ2xbQ3bd72Q848bqhnzUekerYgf",
  "key37": "t3iEn4qELm7p9eyhyKKf8ThrfQkeY281a32TRoXkNPKz35TEJMj5GE1ivTJ7iyhfSwa12TDpzA26KrzHFk4fCA3",
  "key38": "5DE9rLhauXdF8FCCxreMKbRwW6W8foDYXgBMzsRMZHgvUbuZcGZLWZZjQFAWQCUrne4jF3VdRZk8UmjB3EKZGXSw",
  "key39": "4ZaMcBEm1kHwNpjvvoD2cBrdYDXHt4H49eW2hVBa71hx5yVcLpno9Aa3aARjftn5GNojywvRiaE5ak1eMLzEsAjT",
  "key40": "4DhX5KpNYF1ZpguxpFW19NhnJQYghche3PwZWctBKn43ZvUr74cwtCuTwADKQT4kCAQnmUFy8WfcuemAdi6RAQAW",
  "key41": "3MrgDiznQCCW4q6VUU7QmWNigt3tuUkh1wAAUiXr6AUhKKfCHtwVbxLGBuNQUrC7iwvzVks9cKBAkaioZyg82qdQ"
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
