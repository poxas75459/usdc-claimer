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
    "4oijfwZifA721J46Lngx8VdQWz2VMoDFsgF9urNZYTetSYA3ZCzD66VDKizZPbRmnzggGbyFdgkDXTRN5J6guxrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RjkJaaxSdvianaStvamidRPEAjnS5Uw1waxjofpL1D8C4xWYmJHCnXoFt8JmdJV2Bbwpsm7xNWgFrqLNqZG32Xb",
  "key1": "54xypNFBUsq79M2LFdcRYfLcWTxkxrkzMKvmub5VuvraTnLiLZyuSf2v8jvqDRxaC61qQsKNoQM4RfuVeGpEpi9n",
  "key2": "39Wgxr1NY4foHi6WjqZnyLgectESjbE4xXLFrn3r7n3CdqS3ykTRgJVeURaATxqcMi5B1kPpQSnAgkrqADF2VNFu",
  "key3": "4jX4s2HHJjLqYM9W5jjvjPcyJaJtuRSSXP7ApfgYc21FaCiubcttWnbfmBUZJQLySuL9P57v3UYnc6aVzWFv4BKL",
  "key4": "5VdEdyAZyr5rmXBjmhrznY49znjJTQXXespunqf6PUYapEJg3khqgVc1PiDiiqBB1tNP31BrosMB2yqRcNyUQaU",
  "key5": "73v1a5izGr5o5wzTuTFjWD3DrWX4mJdqZW9Tj1wTWvLEdze7VpPfJr89Hn649CwPbSGdzycFA8WzeV3XjJySUMc",
  "key6": "KGAkaZWow4zXCYDXXoxactvDN7zq3mjjHputVbm2Z1a21xFTHcvAG8zvRN6MYBqhryTD3CSngBE69RythTDTZaS",
  "key7": "5U9R3YGqGBXpjA2qSFzbZCoc3Ygzfr4bBZQ6c52RiGhwJHac8Xkcrrr2Z6PDqSb69UEpQGpJNXdiM6xzdvFp8dHk",
  "key8": "34pF5CK6UYm5rrRLekV5g7e3APse2yHLrcEuTiMPTJtPd5vMd5JKfzREvojsYxG8edWMjoYQUjnoFoBcco4RBpwH",
  "key9": "63qLLftzX5BGkiVnDziWs1zATobNJLhC6uCZjDsP3dVc9jWAx9ZvadptkhRjgqBoD5Y6DfrvsBP4pAxeha8qMLU1",
  "key10": "3gAhh3bnjntDWFxVPguHkLXnXxDnU8ZfYnqY5EWMMjLmspJtecjX8TSKQ2E1H5DTvQnXjMkqTt4hRL1ULNXUde4v",
  "key11": "4AwwgoVxQ3ZshojxehbAbyBMoYUj4xxw9hhYEsDgEL1tAzTFKm8NTNVeX6MmgjDVMg62cJoXNP6jv8KBpDMkmP74",
  "key12": "4951chrBHoDSLCXnyBrAs5JCbAp9aNyYVcmxjwZhj9VYBFxXxpLgL637ukCFneJL59VVEZFhMShUovWjFuzawVps",
  "key13": "fiT4AbFkR7dqnvjHQfjSzCRi8QrCc91kqWHKrbFoxCsx5vXSCEDb98C5B1x5sMmF6VFHxcttRzbnkcjadzyq2ts",
  "key14": "CXN2U2jpN73pU4NQTaCVCcAVA79hwk3uZ56c69cgt2thk6CYEoKZUcvdYQGGtagQkC53s5Gb5QSadw7jMirU97n",
  "key15": "3ZMRq1qC6saEoWZRtbu23cffnN4c2V3wipYfxveZPAbQWG4zAuUYoopvpwGKVZdMwDTGVT4f3sSNSqkmY4Gva4Ru",
  "key16": "5pYcmGEyEXpVwrkGAgPJ9ESs5gRB8BxtY9rKLZzZURU92JruNwqt1LuYXxoSPaCc2N4xMXxhregUdiHmAjE6dJB4",
  "key17": "3Y3J4x1U28DqhWdPGpz5s4x6Swzz4m7AUgxb6rtP6zXjyMyatndeEJUNBX9T71kvpx3F3Rt6o63HdfA8DZnjZXFj",
  "key18": "4X6DEkB5VgKP5giaZjxBQWuhDyFg9bTpxeGAiCy2gJR3dDTsreabYKpzsvhRNV82Serwdt5Qn62e5LKSAp8JK3fX",
  "key19": "4YxL7o66gEKRXYZM1mjEV7dhpMqauHUf5nyszQvxMTLE1ERLvJkyL7RAFbsT4swU4Kg8w4UgWEvKqkY9yK8ticnD",
  "key20": "5MkZkoXbGxnjJN1RXYC86smxvE78Rfe8mLC5whAvQw4Z5MRQzMKRu7QsMf6jaU8ALhyye89E88SACj5GwKbV9dqZ",
  "key21": "48w1ET847dj5rM4eSF231NC4Upj7KnrVS4UzvqPjFwoUMcEEJAVsEsJ8NFccUqeRsyehhg1TsYSqt3dZTfVBLppG",
  "key22": "4eXPYWtrxYKuGEmsh2gjZfhTEQrpzKEXrYwQW9o4BQLvjNCbr4gjZqoyQq9Xj7djqXNgmG36kxYo9XwWjvPUupd1",
  "key23": "4xQjx1KrR3N2sNJxn41wQRvZCyJe83SqkNspAJtP14TJKw9dAS2Un2Uw3xrp9vxTPo8ravTAynS2jWy334Y3rMKT",
  "key24": "4SbgP1dMcpGLgiKtAeR7zECMQ8hSctZpsKd22XDbcfBY8HRRo6ntkastmeKGrXYk1ZsfDGJPT7GgkXGwMTZ8oH3w",
  "key25": "4LnkgMU2VFKnYBWcLnspqf9McdeVEo2c3ro4X4ADnKhDaNRDmuLDyz5tCS2Vi4bq3BiAv8zi1Rrx3gGZJWrkzyDb",
  "key26": "4JUgqThP3svpmdtnrRHgF38bH7CZE7brL1MG2EfCnDb6BjPVfawoAUGMrKHqodwnYwDS4j9gaXJ9vLzTyP1xgwvS",
  "key27": "3VnbmW1Bywxg8BFcjF1jFRwqGmmFATvwYrZwJ5z7SgPMRrS277SvDuzYsX1YsFx89sAveMLU3pLdDEaAoZKm17Fi",
  "key28": "5roTLMtfBW1X4ftQQhReNMbLWDVscA8NffeibsMbsjvagGWvMH1vYhfSQfhRs7Pwr65pRXULAZcXDwjuk9AokQ3m",
  "key29": "4NWbzJUzvnZi1h4hYmSWeEAzVH2emJQCXntNDo9KFTZTBNmMZxgqea74iXThyWU51strXFTV8cRjcxKk7T3LpJS1",
  "key30": "4YKy6LAAsXkShSaTAD9jCxL9SE3ijAK64JZqTJJfdkQVCbQdFhmWUqxNn8UdU8MpT8WyFtUb4Zg427ognQpPL3wJ",
  "key31": "566frsEYgE4pM73DWUb1b1B2yPqwaqhQ2UMtzTJkCBs6zwQ8krPQewZxsAAhVemmcsgNtnsW5bPvfMD2shD72EMW",
  "key32": "2X54Y1xhZxeLQzFHagxvuqo7W4jEdNnd5BVRAaQC9D1p6n9roxYTFMxFFim6JQbh1CVPbgf9n6FcT4zUVkpcgws3",
  "key33": "4HFcXVg8gXrYpuPabh6y8GTRLvKD1BCwuDHGuaunuVK7KsE6gjrz7yosahMLk3B7ygKCBdxYK25sNhPb4d5k4BbV",
  "key34": "3CJaERTk7TFfq3jzFJbahjscZHHwkCXCjMWu12kkkn3HiM6HxjvpQDbLN2hM7BM9ecewkdvZ8z75h72LrXS8snDk",
  "key35": "5dvETpNRKKCC9eeCeWvKneRMC9q7JhZEo5GD8ScLSpw3o7VYesQnZtKerT2KLieM8asVQmKikxNTyTMiz6DTYBeF"
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
