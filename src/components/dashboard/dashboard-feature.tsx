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
    "3DNP3rpveQAgRU74D9GqbbXjmpsbLwAyMxLBKzECdFRveFpH1YnzBZxETe2jaGqcvdCZvP6hsWVtcfvA76vbEcf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ejVLTq1346kMkLJDGYHkt9YKDvds4RYKDH8SuAMyi6mFrCN7LeTxqXbNCdqHkHdgMCFRtFkX2Z8PUc4MZUv3RNZ",
  "key1": "3JkbVvbimJsh6wZD2kGLM83zKccaLZxTRS7ZuNMSWDvfwo3wykQiwWa91XF1ERa6UxFk7CWiqUswn213iLSed1Cc",
  "key2": "3VYN1QP5ax2BaL5yioKEBYqyLkZb64EAdvkEpb2TEtnpmh8jFfRo4niywfxSDMBBLjUVaqeRkT1cPU5Fs8tNSBev",
  "key3": "4fjD2si7Y5RamLQ4MyH9Vz74J8jKHRZLRyW5mHkRTZba6dRH14WNsF6rvEHBB5fEvHA1euw9h9vYAWFShHzyo3gr",
  "key4": "55acX5quj2vCxVFbFkRybfeZ62jXRudLkzDhP3eDXfSbiUhVMMT4WmnQP7ekihTc8ErjPDn4nSRapk18tV2XTARn",
  "key5": "4UEFtA1c95RGirbfgkFNBhYiSXtgfhKMJurCrdB7oDzryjrpA5rwh2M1jDHjJp4LbzjB66vU61hTXERY9QSrWejv",
  "key6": "5j5c5nbh9JA193ZkXs6pTFF8FEU1bYh4SPSpqAcHRAskdfGjqEosr3TEpvob9m34yrUZZ7t58fpfWeFZVVgTDire",
  "key7": "5JU6pEdHTuLq7mBf4MsXpRhuDTMh8WPSJzJHUKTwME4ohFpCWknAeZSb2ZKPT7xBm5zC8rTSrRy4CZzwk7Zhjv8o",
  "key8": "3EKutf1AupuQqkZiPkcUJoJFJ3fmMBfJag34bEZuNvF7iXTBkG4UP6khSFF3ntehvy1W5MXyGDxfCYCnpcBMgLxN",
  "key9": "49h3ZR6fpADGpb14YMhX7BXm2mz9E3oC7RumSB2Va3oVBzWQdGi9GuX6RzhmZHukPr92DkxMDqRHEZCKLXyGB3j3",
  "key10": "61epKgtG8K2oQ73QgqHC3GLg7AoC1zX7AeUDAbbZtBmemB13d1mosSmbXquycAuZhJLVBwKW8hrvvE6zXYzBp9oP",
  "key11": "vAwevihFj8rCcSXuPZ32k8TjehcpSkJ1MWtfLuUeos9ZLUxAMgVNbPEw9HW3xKHw7uZYfo2CGnKBEX92qgBKxxi",
  "key12": "3TaCpcwido1o67g8TPVjGHLSUNE9QWppdysgWYsKqXfR7MRbTyebGhmxUx8ghZCkmgnc3zMMjnqnHYtJMmWyK3rU",
  "key13": "4MXz9tD8VGPYLN1GhBfmoGksLM7vAPzxEi3tkAV7mkMys5NDeAURnfg17wWwjcRq5PbaThfdjbhvqQ5Br73HKUad",
  "key14": "2UHQaVTKWPdTXeh7jggdhF93XwscuEXNPSVHbUwYdncoWwQ4Fi8jBPCvzBRWN15RHzMqWepsLkdEm53rFMdjki3f",
  "key15": "3Fw63DbTBgVc3C3C77L7wjM6ykgJtzbqMXyxqFGpER6Qr4eQwGq1iNdXVwwa2mZ1e3QrJx6DZaCcXiJt1wWSBNL3",
  "key16": "2Pe4mzoM4M3Rx8itb8iA7KxqiiNALXtzxyu8ACxSKmdJ8ExuPGpNpyBXHmJsaMHZiH9dpBnx9UHV1E5jzWW1sH1N",
  "key17": "5Xp1Fc634ax5ihnp1BPokTBjsKDsCMjoRa3QAKPJtW9LyZNndwgVQWNhh7q6L3KY8PzjyZbfk9K1wFR86Ybg9ZR1",
  "key18": "293LdXGwE27Y4LEBuW8eo2zmyM6MVTuD5euVn6A81YYP493CrWRwiRsC6PgBDcAfrV8Yxi4WcdMSiEEz2mZsypEW",
  "key19": "3ZTqFt99E69zY5khxpCvTn33cDAkBCiWrtNacm92TmsKYdjEcsUWcZ2XQof6rDDh57n6KWdyiRc1XUxcriUMLmNu",
  "key20": "5YTsfJDx653aMbGCDiJtSifyjgasC5ioVixQBFnwJxSPwKYShFiHfTe9XHEb1paTffuuw4BcgZ4RbDeQybBFPxEv",
  "key21": "3CBhgsrMz4E7mfTtUDDagwm6HoMr1nFrsbz4LBjtAvRLoorJnNjzRaZ4VbJAKKGmB9RpAuLT6RCE1x7aaswL2tKr",
  "key22": "NL5Bsr1N4TrQNVn3hkXdbHieKnk8fGqdPVw9pS7D9e9XgbE746uTUmsvbHT6vyH124UAiVYBxsPvxJwdAKkMjZF",
  "key23": "3RJA2VFcjU12VBqC1VHndu1re41GU9ZjKZQU6SDn8oMRCekgAhPv3LM5WzQ7nP1xVw4XVQhkVQPkK5qAi9y21en5",
  "key24": "3Q9prBXDkpYNsdyNg1qqcPTtyNPwfHwjS1rnSveLZt9K76X58Dc6c6vkGCdExwGP3K4xgCmqspKYVaUytL742WLV",
  "key25": "4Gsw38EkXG8ktBULAsbJWMyfMVDs8nqaw3PRdM8eCipfnNej7pnToY3PdjxmiES5Mdc8JRxS1yDJ4s1qFbpoUMGK",
  "key26": "CtUGU8wLGEjwJN5rbfSdSJKmyHVwoHZtSAxRVgfsLfRrz4Hywdk1Q8WR2XRLz17dYv11dAMCQVrpNXypZoo96kT",
  "key27": "4BTspcXTMogiWpzxWtmeyJRH7kZSFCTiL2YJkaHXD3vvqpKUEeXjJZrxMQbgDUZvkD3BkgxRVRpGQPeqkVS1nwNX",
  "key28": "3fsX2Uw4dXxJSrd7bWLyLAH73YgJYcvorQkpsoMMpJRc5Gh9mBLvo8u4dJtYeqcfaoxuFkJ1sQ6ASoKXebD6BAPB",
  "key29": "3TA6GgKVJ78D6PowV1uqBk45txpZsQANnX41GcxCX787PTcnCksATpwJSyJkKeqUwGg4fBCnMSaZw4p6cxD4cA3D",
  "key30": "YNKf3NSzugkz6nDzd5dXSGXNMmjHkFCFtV3BzU5Qitd32Gz8eYzPj73WZEt34G982jsPScFGutnYNLaTsS7k8Sq",
  "key31": "5Ca5v9FKUXjPrvVFohc3AANqPAE5TSP2pQ5DkphGSxagSWGG6LgubSWBxbnvmWWnRnFDhU7PNFdy71Dyzx1HcPxx",
  "key32": "3viZPqXi4NFqVC9a21jLyDEtgts3SxgLGwCucmAUACHingepnDSfYBUuFp2EKKdH6MDpnixQF14KoqXXzS9QS4j7",
  "key33": "2deCw4N6867rmviJwWQJKHvfnnBxff7EVJLtXPwXM7MwxaSFS4SHi2znoi24vwP3aFCUfTqnRbzRjPmecNaDRXxT",
  "key34": "5JodTaYJ6DMokbmhs7Ch81bpPQaWSQomwWZQzmSPptZCPXm62jimerH5LdV7y7QGQJZsbfNymBugzbJ31NryDAvU",
  "key35": "2GJsuqGGb3hFz1ZAVmG7gUfPVnvkCWFjuiUAavJFtH8x8Dit9owuzjjNn2JiV58khvZGA6FMG67bigPVftYrP6wW",
  "key36": "49Dc824y5PrB6zqn1toBDCpi4wuX2Qsk1D1SPNv1EDKN6S4KfBYtDLWhmNxy4Y4ocLd4nXWcR1a4T3bp3D6a9iCz",
  "key37": "4JrNX1u7gTZimRMGnY72AV4B6xcUcwJbNKzAf16HfjpRztxiXB7cijBsoi56V8BfRSgzkCfs6k1eC7mj9iqkJSsv",
  "key38": "43KNXDSFE15Ewi7utjDQ48WastGHB1VzMXv2rsRzRiZxnwKHD37BN9u3C36ffurWJ4r9LVZGs6LjvQXSFsyFagY4",
  "key39": "63WuXeMxaoyv6vPWosrA3r5r8PiwNzAxKZ6y9ATLgrdMfCa1TEr3uq2fpAHhU3E4tj8y7NtpTXn41bau2rwUW4V9"
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
