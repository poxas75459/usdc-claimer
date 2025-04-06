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
    "5KEeyLFRRHLRLom7oGoaXSBoPVS2WWLfTCJXofbSNzwWr5bqTGT8ESn9vWCEyQxsd6djSUzfdAGJoJbUjAbVESRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXDaKmFLufXZ4zuna2MP9rfDuKXuGhjjQVtoSnzpiXjurKMpDmeJCjUHog2J2HWx5ZGVDwkYk3QmLdCNua8AZGB",
  "key1": "4prq5A8HTpB8KF5F7BnBnVSRkjyXYkQUHKPF7r2eYRCD4mLZFhZ5YtoCNiqVwRYrPZ2sU3KX2JnwTE7gpMmwdpG6",
  "key2": "3cKawXzUs8HXcuAkpAQ9wVMJKTmGB4SyrhLXfF2z1dmpfYF7cWX5PSqMaJvvmJhF5JZn3fTUjZmxRRsmewmurPHH",
  "key3": "22Nz29a4MsKuGBr8U3prbKjFHapKZ23MVG4JjaLWeQBzuCDGJor9MaFDvNNik6Sdf9NnxHUCNr3cPX17vXAwcxbD",
  "key4": "2tUVyWv4jAQei1fU9nHPWWUYgxBdX95yoZGLNu2VbfDCUdSVL17nsxpDUAcH1uWf6EG2wetBMyhQPtTUCBdVrQwH",
  "key5": "u32oimvLNUTp7KPNBHMjWZvbcGNMzEft2qQPkhCLm9uYSz8NKSc1PMsHKYEuF7MxRA7T1hpDfKYGRSwjVwCbiVN",
  "key6": "2HeMjcLQEVn37sEsTshqhrvg2KyYx75rSNHxo2U6y5dJizxFJFKkmEpCGqC8BT1LA1f5zgbnhByCTN2xvgAT4mrP",
  "key7": "3o1x9tbET81hjM3zhaYA8VBVp6kCZtZskgeDDSLRbv8rBVz9bDzmo4PsbNTKFZ6zDPZB4SfztSBhhJbDym37mrsb",
  "key8": "54vsUUenyHZWNq2GHKAuznxevP8TXpvagXgNjdQH3p2DLXkHqJBvBFehhXsuKinb4yeaXvV7LtC6ecmPd3ErtJnk",
  "key9": "31KPSe2sQeqWsAaoYfgGHbry5zso9jshihjcgKHUjF9XDKjtTJaW46ESCv3zzDphRmENH5dLSqmenNB2MzUL3g4m",
  "key10": "3xyLWv33f683e12LGyjRTaZ7CV9cxVyQnYYdKZ63aSb7tYiXRRo3ZUaKymkJLKMVPAfnM3yh8f15kAVeVtAAus2A",
  "key11": "2kWa3vmWZYkxLMoV4fqaEVguhuCRXNfXfBqcz83JuGLZRGmAg5ADNBVKAmybJRkP233ewFMDjdb8a5cEJLv59tV6",
  "key12": "2Xb57cPi96QKPUdnh3KmqbdeWczgW3cm9R8ZWHbcsrmNbeq5GHRofPBb2phynFZJRfduFaZgnBVLf5Go3wcNmW37",
  "key13": "47nrwkfSh824Mm5Y2y1bABrumWHi9Wm3g6h6f1pyuiEQRUZaL6cEoSdFi5eFxqg6kE8Q4VG6eWPqFW9462HJpXfN",
  "key14": "63ibacdEJLaghKkp7vVrpzGkxekDSj31MCMT6u8UDhhEzeauCsdHVJuYTjMXwM1fh2Zfn2G4c3HHZ5jdXMc2nKaY",
  "key15": "62xpwxiFzkMts9ZCEP8mgzXCm6aaLUgSA6K5kGxtSZauTzrXyK5482XDfDJFAW6tf9dAjPTHDropydN3E5zjvHH6",
  "key16": "67KnTTxFD26TYa625wmpKmVyHkc6AuTaDZw95U2gYaYz4ub1Vp1BgCBzAsRBZzPXj6WFUZG1UbdNoknFN7qFgCT7",
  "key17": "YRJWm4GSYqfgdt8BiYA3CbPDPbTCTod84dpT8ZvgiEQtLvnLLvPV48xTpirSFHG1Fo6BuAh6VWW7FQAarzL7etM",
  "key18": "5f74Tvcxc9wcASJisWdFsDeAVWGqUfTYyKyqjQscJrT9DQ1BQuaPKfUBi4koao1Yq62iR66MzHQd3ifDBaGmAzg2",
  "key19": "29eHqY8r4ngszg7i6dMW5njytzJgpoaLyXtgHdo7wNFCm2ty71hCbVMRd1gEoeGNp8pZTUdi9nXpZgE73AZJou4Q",
  "key20": "dc1zSg3ZpuZTRDJWAQcU4mueDfg6jvFXyuckcDbDvfKGF3KgHt6RaJQPUvR5iosA4g2GGFc6jdAzogQDepeuYcC",
  "key21": "3odjsLjzjoiphTvgAEPh6MtUKHJSa9JqLTShJG7k5CGDTm3L8bEZcQU5aiACozbxpqFqE4mPW9DfRWVPYMJkGeRh",
  "key22": "4qDDV5H3hW64e56ZPT3RjzwYtVAZYY5Ngpdipxq5UXKqDCqzwAf6d8mLn911VMLyFXi51WQ5U4Dau1jQF6pVkVoJ",
  "key23": "FRVc8h9PNFQJ5Eo4rTsaPaTkPPmUk3WyNTvNKwERQACJrDo2M2c9HvWTWhkaVyAXChUaV5FBDjmdofYWGdpFvpS",
  "key24": "2TTZNzRrt6ahy7ZbnEHB9y65esmrq8gsaWWURPLrQz4J3knmnhPZGosTMkxmK67fAuQrXbX6jhaZhmzRaRkdZsnJ",
  "key25": "LjCQQtCXVWkbjprKjHLNpJMEcYDeQSaUkHA2mCBRRQXnWJDJFid9NeafhNAfTJaykZfj7hihuN3RoXDCXKf7uLz",
  "key26": "5sPbVRwwEPvEYvs2iv3YWPdyeY2pTvQt2kSXroZ8fm8Meq8GYhXcU19dNBJ4XHAUcS4jD8iGJmUQvUzNz8ysd7sv",
  "key27": "7N4xgAnsEsEMdLmcMsBcgYcBLzQUSMjNVuQKCFgt3EHrmjMZ27psaFcSePtnanECne95s5hs2YAkHJgaH6ip8h2",
  "key28": "2EMqjdSwXaeBcd41x3muxQNadLAXvnoF6uuLjquzs87T3DDezRQAKNGjVgQvHhDmhU6oq7DvU4UXRz6vtSQxRYoM",
  "key29": "4FWfdsPDPLsNyW9tPk74cpBBNUnA2ZD62Qg9aprJnuj7sVA4jyBGbT3FTt6ybHfNsxGApvvM2D9wGF5PmExwsukG",
  "key30": "3AsDTJaq53ZWbTMwLgKWjqyyQbXG1FVkqsbMrdKwwGK2Zih4W8v77RVP6dZkAUueJA8QX3fB5iG4FTcuyZp39Xq2",
  "key31": "2AsTyAM8Hak5xY8YJhY4ei3kvxHCg6E39qHG78BNeUS9bridXERb9xJT5rYVAoSCdBfKtzuWW69cvTfejH8WPDky"
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
