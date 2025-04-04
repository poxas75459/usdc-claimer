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
    "5ZkQztRgR7tmx7Lch3mRdjBQbM3wvrBpEypyxRgPFzKrB9b15Ae9JPRyQcNgrsy5PWM9LeoppuypnJCHfzwiapBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5udbfQY56EPXANmStHtM9ochhMxShX2yW1SEzMbpiomFTowycFfVvtevkenG59Hu6t3RrgCuiyWbGAyYGGpNTMJJ",
  "key1": "ALbKhT4jRyvcCFHZpr1GouaNjnX9z1m2wqcmDTqSUDbEDZGk3df3AP8ECKs14U2rokvZ8K9dzaC5S2e3cBn2Z3C",
  "key2": "4dnRvxpwUtaUCJHEnkoNpu9xncMkbQdW7gLGzsPD22LhkaWWF9Hyg5RW4SEPsm6ZuhkjBK3bJEucVd5atSRAjdoR",
  "key3": "3Fv7qnqKCRE2CAs2mFiMc8z3pmxtPGWa7Rmtqzif7KXjN9soERZhpS6Tk9sgwFi8yc5szH1EdacR8edGVZ8ToN34",
  "key4": "3LGYFY5PFLfQGXxggbLtsA32griS57wCTE7bWfivMZjBhKNQbuAZD4Pd7cDRPJRAEhdahBJujmFFFovwsVv2SP8A",
  "key5": "558z8VmRgyf1JEQbppLP8wk5SEQmez6XnyMsAzJ5JdaeFxui528X9VDJU6wuUtxT8qrRV5GfhYtNoFVs4n2QNYzs",
  "key6": "2qKprwCfL3tP3qCkWSejYSZpZsvMZ3SLUU311CB2QtNgPtBjiG2MfFC8hDm1jttUr7wGqmm9nbbX4vYhMysp5yBF",
  "key7": "4mPfqun8z7Wbq9fhsUiujtniev7yUGLHE9a4NpCbphpYHbF67KebuX72K57yCMh7Ss9XKtAnVNbq8jLYRAU24UAq",
  "key8": "2SgdFWD5ACmtteriQJSDQTHFCu8V4LKqWCBRxMvAZpV53EKTAh3bKtV44SMHCFGRKhst7xNg6EseQ9xKFLWipw81",
  "key9": "4vh2UJkqxk8NfUs2eUDcpCkQF7B4C3agKvNw4YMpuxf7q8UYZd5VCHghU1GhhjRbuidK9QFKa28cvhEQTadb4eRw",
  "key10": "452YR2adSQqsFnFvGBA2zi2R8CqreYCoooYAnzeWoQsMZ3P3aQ1YPQoGPkaC8FaRDVLBP5EaXJR7NoeBmpf8LKVw",
  "key11": "3LonvmGXsnMeefjhc6nqmpSMcNrXyhnKYvusyiD37fKfrwZrAGhd7UZfpkLvmcdF3jSYXLRjJUan3aiBzy6B5F5U",
  "key12": "4eYmwo4QtR8RkCziEPG4pViv7gr2t2Ye9745tCGy9XhSw5pB2AhscrKQrNbpiJigoXeoSYZXYihbifwg3tktU1cW",
  "key13": "5aGNEpeUsmz6f6x3hwwJvtve1grLRzY6cp6aN7fX4SaBG41NUZ2TpGbwY9uJFyLxnzxGz8sF7TY9bNNDUyNDZGGy",
  "key14": "3pdQEdHX2BA48ot6UBnCwzfnX35m9mKVX96K6GZSVPSAhSDznGs2QK4MAUm4mvLYW9m9F4ABK4XgiRpRQY4XsEJd",
  "key15": "35SeciJWMcLXPQz4vasL8nMrjMV2N2SA9cby7nVdQwzmkKxpzYCoaRdaz4DFs9EG4gzix55wGvcrmxGHyb6Pe1mC",
  "key16": "3LpmZSrCW11uwKkY8cMfEnGwsaaZubLwhfUkxttQLuGxamnADHTBMH1CAi1LMC614n4UWdTChKVW99p49kg2snxj",
  "key17": "2iZA14L4CzTfQuupGRoj6EJ74QidYXEG28YKXDuqZhUusFL618MRkAjz6jrf5DnXzrXRh6s9hPD3pMQ7GhdihAmX",
  "key18": "5rWiE3qPmJeSGFm7f61xzwVNn1kXyUhu39Few3J5FUmrcjGKq39fn58M7ht6pPSBwAeTQn9EfpQUAMTyuCGuvGLK",
  "key19": "292dsmZxs9ocw3cj3kQ9Wa2F6NcB7epZmP28P6JTZLvdqLdNyoozUrwNmoJGfsbk2SRZcA3NwcZTS8o5adYkGrut",
  "key20": "B2YUoew2oD9wcv54qiWQpV4K7nXzNFqdyvztJkikkZWYJezJodWaTkZ69gocendCa5fxt37qHvghRv5dCksS158",
  "key21": "4ARw2oQk4Uhm4oys2Mc7YFtX3A7uJoKhFPGnJEoZ9DGgpWmXijcJCGe7KdSzUHZQoqwdh7ygX557ZmKjTr1Zm64J",
  "key22": "53cb2odVzg2PN55tGY212PQoRJoxMRk27c52j9p9HWjQGqqD7FHEEVBp8spPc98Ftozh3BiBFsrTqUGFWTmnHNtV",
  "key23": "59Y2J3u491Et7EDgsRdQjp6YuL8nckfT9MiBZtW6yksfgHiSsAvTr911mhjWr5iaXF74kqYFkTq6qJw6J3wJCckr",
  "key24": "3brNLvBBoWq4QNGMkRgBVTm4Q9M4u9qaDGGbp3BzDJ5ezaTUxei4gMMY8qmnW7vgxXg5cKqPD1qKAytPYSwcQice",
  "key25": "EoK1iABcgMKwjVMLohsXkyoHs4ztTb8iCGBw9NnFhDDv5Kz6b2bwr8xGS6obwUhayPR6DFVKyfkVHSWeTqzG1yR",
  "key26": "uxXpfy5HrJWDFLt1VmK1QUJW3K1weGnpfPx9Ty5pJXrv5nnat1jVwSttZ2mEwBPSaSYJEUmt2txWsdd97mSmM6V",
  "key27": "2hCFQwzNfEWoNNUZWXfau2BqCpdJamBo9PS7kkdUn1ij6XPQvzJ3YBsHyBXq34AtjwjQgdPrsYHrfsiUYGQbWeXm",
  "key28": "3fPHqAHuEe67niLwhYNFBjeABHYoRuZaq5F663pkF6jCpUE9VDzZjssDcjQY2Mnr9rnwaUGW19d54AcyCzfTH2vb",
  "key29": "5J144zGwZQUZGwWk4zihNqamzc1NZq2Asc4GeWj1G6xrzzAxoCDEkdremeCmWuVqx5CYTgCWcoLGQEf9wQVhfVEF",
  "key30": "4ZVBY6fQysqrZRRdJgYSk5YyL3pp7zi99w79VkHVKyNhDG5A6NZbCZG5cmAAxRybA9ntrqQpCHjjQM79ANJVKxXe",
  "key31": "5tiDHYf2ibnNokj9JvKuQFcrFwvVfbbDWahXXxBXurbP1X4zTDcAaWcL1YwTnL5S32U4L5JBhP1fnbaf3xBqjUdV"
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
