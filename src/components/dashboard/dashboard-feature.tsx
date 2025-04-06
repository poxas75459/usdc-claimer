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
    "z3v6ote7vp2c2CvkcaPrfyvdz4v6gmFXPNaa1jcPcLzrmR68J4pkTgtgzTiSPAv6H1hfNwKfv6AsABuNoGTTJmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hEuNtK5kdR6KMBQfr8RB2xswQpq7VQ6tpo64azmsCqrb2pJ3gDG2a2DzHX7t19MpuyznWvzigtkFyhTXwh3z3uV",
  "key1": "4vnfM9Ltjb9fDRgqRGHp6kp67kLp4Vx65ewmDdxfsA4yrfrqZ6q5Tj1uSw5AgRwYoJm5SZVQrwnhQYRwJLufrX51",
  "key2": "3xQygfRRLtojNLPDjs2aZPcyC1d8EDrv9w5tmKUJMci9XLGxCSCL2hFt6siRG8utWHDLMBXKQLeG6iSd9G58MWve",
  "key3": "32oSQDdUkYPMho2YvHbckArCtGhUrsmJPz5dJBmhzm1cgdYNYJz174B1ADuqAVq1g69iKmx1FzAwg9c7hiUFFcpe",
  "key4": "4XWGFQ8bcgPVtZZc4Ggs31i3JFLuVMoSSEjW8a6rN7EerzFx4WZX13v6bzvqhnxASM9L5r3iUuJ1amZwk3kuVv7F",
  "key5": "3dh4QD688n2pDeXSTUeeTvNKeV3rNfN1KTEigHMmw1JmWSG38jRGHzqkFGECLAKF3CozkX9QWxSzcERRJMMwiXhX",
  "key6": "4NV1jZMABGoZhtEohKMJZy1ewyKRt4PHS7L4sJ1CxPqGKSnHfyjXPTaUgHLRPdETLFNX69LseBA2Ppfa7cUznJ7u",
  "key7": "4tc2AE3SKDhyf9VeCcgK6iRZQNuNFTzUUVQSTtGTPJ4HTwfgAk59xqDVhMsa7ZApbhQkMnygPDddqpHFUSFWvadg",
  "key8": "wMu3Z9o71GSL3cPokyt4na8v3dN7fz68UCmTWDbZEzm7cxfNtx7AYB6DpT6nSMbojDxVLpK4X4zE3mgxmaohvMA",
  "key9": "4Vha6mfzudCbYkNJe8Won2CxcKReQJbgB2R31KwrzXoHybuRQ5QpG5xiew8eXmnbo4wVZtLQXU4Ld1xxZTpU7eoY",
  "key10": "PK8QAtSzcJJSBRnKEexsLWQHpAzDX2RSPzagBicJ3rp77oGz3YGxWXNCaAcrFfwAnT4zrsrfPphDf95nMgB6J6b",
  "key11": "3qTdj3ot4kDJ2Kn1NNiScR8kmCzMscovunVZ3o9XreLXYh9wDqdcLmb4Svx6RJY1zP1VrgPRtRRYxkUhTvu2kgM9",
  "key12": "4xQ73dt3hDqNpNuNFYUaC9JQLrSnv5yMFaknYepLY25zCjFF6LPEBn5BZ4CeAh9wLmWfokMJQcnH6E5LNzRY6ZqA",
  "key13": "6527HfbHoQR1ZKpyNJU2zcQJT5sLFVzj2kBtg5xbz17n4ExLW2VQ9UwtD8BprvkVsv1PfcKWGpEFQYpSFV6Supc3",
  "key14": "5pqeN1jjNRQxNFcwos5YBMMGpeBM8GWjBo1K4XhhmyQSyeKNVHTZtZbYLumtuJseVwpFLHXoF3yK7CY3qzLgiUz4",
  "key15": "i7szDZvGUwPNN7hebDdREo3YqpjyRuVTdCLd97vHmJiYUPcG2Gtpix1Q3djhX1pYM4XReZFQoYk3meQphjESxd3",
  "key16": "2xFYw8WTrUnEdKBJCffia1z6eyU43hVdauBM9z2C1rckfR8m1Q92oVvqu9ZyxUTFYFj3rtFNo9Qk7RTyN3f1ksXt",
  "key17": "3zGfa6ixXbEdBFw2HqDSe6mjZ4e3afYUuUJHE2bSDECbYiSXjGN1NeUJ52JDGB81X7mcawUKE18YKzjG1H4Psdvf",
  "key18": "5FeVVWGBYqFHZCTRcvChcELSeUJdXG3SK11A7fzGRkN7CnodK3xTvAJRLoDThp98wmMpaL7pqfZGULdvHbyBTzke",
  "key19": "eZAUSXcvZfLt4GefzKE1coFTfPUS5km75aPcHEk8HMJg1fSgPo8hSJaFfMSiNPfdxNz33FdrJdH6JBT82KT2WhM",
  "key20": "4QLyfZGmveu1zAz2pdkP29GXRcu8Xryaji34xRo68jTpYJauYt5UT71eRDhKyYvnX58Ze5bgcsDJp63jFfYU6Xi6",
  "key21": "uqt7DBwnfSsdkYaLPYNKQfdN8y6hF1X91VQ3X3eeiXibQ3Vh7NGmdUPWhxPN8XUzxvqFPiA7VJ8y5ygrZy858on",
  "key22": "4Xtp6WHbNJtpLhx7ePrgSoDeNVG2FrGEidzvZjpwcUsSGsTAwaJUJojusGmZY74vXp9o2yTb77nN6P619xR7iVkW",
  "key23": "5TBKgDd9mMe2NqYQS9DyGfxfcepCu1NQW8qve1dkLuhkfnLJyK4PveuwgGShw2TQhFqrzCM3edfPh6L3yGeKHtFb",
  "key24": "5AdNDKXP67HtFK1DUGhLLqb4XmhNb4x7LC7BQ1Ea4kS4HN9Wv3KSkZfXQ4EvSR27N2PK3egixd7oiwSn5PYqD173",
  "key25": "iJo4AhT8nLtFgWszA2mKLVKDQac9HX5y52cezvSVs1ezzwcCuuvuNgP9KeSXV9idDSXB72u451NQt2HVc44MXQr",
  "key26": "67rCt4BKKSbitPFzgCGB8KxzfVGz5UU2WJnNDvpBCyfKAo2m6LAVd7dAJPV8PEsxTgD4mNgjP5hw4FaK5B5xQweW",
  "key27": "4AhtRApvVDrQwvNqveMiZPMunQMVhERnch5wYS1mK8kWso6R82csSZdqg1eHqkhspxJAaHwCqP8VeBHsu5DJz5yb",
  "key28": "6XwQ55jBa5dHPUYuKSrdggsv6gkYC2DPWGe6mbkvFi5hmD1SnSLq6zqUSNsZmvMDuLpAjJmFB9dh42NVPquNxEE",
  "key29": "4vGg5ghKnBiDeM8LCRs6xT7o3hE2Jo3eX7K6nM6LuHY91z7homytrVVehYBuGkfAAExKWJPQ2LapP6rbsyR6CbNF"
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
