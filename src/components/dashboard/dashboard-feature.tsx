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
    "UQc6KjnhUo3FAVsnB8saLbzdYMgm6RTMqyKFCNTRPXFrysR6KqL5xquy4hqdPd4J256yesiA64idnaBE8Yd9jwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vof4kCZ6i8BVVCr85EMz23ENk6S6GgLWLS7rgEKkna5WpvhVwRJNXgfUJVezpCobxhwcSWgSdu1iWoUBsxZ4E4f",
  "key1": "5VsqVWYZWsHZYAATSXJWmogQjN6SNgBMsWxqs6F76W17sTYE6b7jgGEoHS8YczpHdCZquKYugqQ39yFPm6mpr4wN",
  "key2": "65bA6zya7LJn3n5G9QwmKDk9BidHEe1hRyVe37AY7v4SW1fqDJueZczYJ5dnC2QwRKtFwM2JHSvYtHytqtKhXvLW",
  "key3": "sURVpQ9gSq8m9ERYhm8GqDE25U7ck1WB9MmWfaKhASvTkpCHb27TWDZaupDTtwkNAKvrXJVdAq82tbAFhWa2vds",
  "key4": "4PYeNTLDRP9hEaxJ1LBxzThdKJEqhotUF7HALBajrWaK32b4U4tjDhMk7yWuLbrNyqVVbZ3cdZg7pDGuvDG56gCE",
  "key5": "5BwDXnWZYCwKPJXnPak8sWubDFA8eDF2pPEWadcDCtSjzikr76as3HDGTgXVHnhxDHXKBfVFaNBJcPvkVTwTusfs",
  "key6": "oV1meu25LGuuZq82VFqZ1s286dZbzDTBNidmv4xqWpqxqzTHVQQ3VXLSpXJNtMdi2sSPMqScLvgBoNHZRgAbEE9",
  "key7": "sNMgDPnyAWpEWFMFQtrJ11Ry3TKhGuofPWpMdbfG1hYCoWz48iunavRfpbhLhB8GEvpNiYuBFqWkHq2ZPjj4Ydf",
  "key8": "4pVtAYjRrodSPPQnC9sFwQ3pSZ8MsUGhLueHarQjLyC2zp7JtTcs82U5gJbUCViZuoCyD6GFUJGau4oUxAz5BpQk",
  "key9": "4WqSk9mxjUXbZmj6eRY5z17kjmW9BiW8mUAFbP4ZCAAFAdJdiDKrNoKEYD7PSFBH5FkZphJZQEFfYRy2amsyP7Nz",
  "key10": "5kuBMSWJ5Q1v4P7b5Qfhi13S1b6GudPg3fALEPGeWPQ5bBMDk8aZ7opzE7h5d2Yw9cnPcwHY86fRSFcgV4aLs3s1",
  "key11": "3BzpiDe99i7ySRBJMtjHk45fT7xxSc5KJZD6TMStr2dh1gcnS9tSuZWEcz3ZJ2YgtF8RCtzSocS6R8WK13Zq8jpi",
  "key12": "3R5ug3zZdRfU1n98NZA9E1ExCQm7BnGR4aXFuHP3F5wvztVUUREg7SXS8KsazgkKKWcAJf8dTqUxkoCfkMgSBG9F",
  "key13": "2vHa9jqX8TLzataGpuji4SL1FPCn2CXPjDKgGXn6aXM9sBtU3rAZNjQm7cATzqm1LbUKQqwVgQQ2cxF9jdxhcfxw",
  "key14": "bdbvNQNF4AMmqyBsm85PWjKoPYM5DHc6AF7AVmrYAuXQgvgQje9K4y4q4mQ5ut8yyJmSoUpJFdLeDvwtJvjbFUj",
  "key15": "mcxvv5wvynG36KaXB38eBwj6qBvTyTWjfbc7vcSAUrb3aDihzNBRJ2Suqmpr2bzWT2v7gBQ21Pxj5hkEkQYX5Aa",
  "key16": "2QHScn3tiFvRmVaoUcDeWEz3t7fJnPAhyk3hw8m8ci5g8aDE6B9u1mK7M9psAinchVHerQ3CyMw3dbgQsTY7sqce",
  "key17": "5PhiKdZTkSHZRRvDq3N3bHsVoj2rFKpov3gXbDEoGrd4GY6zAnaA1aRQyUJDX16G54m9ZX4oJU5iVyaRoRQw7Bog",
  "key18": "61uRCQPDetoKJKMRGJ7NoC6RpHnoxCxRY5rMqpAzkXFG6xnaPEGZWL6X48qSr7aWnSjqRaBQehUrZAfJUeQvebKF",
  "key19": "RyUftCydSURHD6bAvc5n84jjZFHxngmc8i58aZ9HVUwLXC1ZtYKQvuG4YUZ79vSLB3LKqB8UL4AC9ajpCsqhoxh",
  "key20": "3ypzD2oTDhsBwntLbBJihpYDus6Rp4kXuV6HbjyWhfwJnN8XzKWzpfAhG7eq6exqboSZd6eDUHGABy8rukUAKj41",
  "key21": "5fJKqhSYjLyWfpncktb8hvPSzcPZwYDhZVN6EuSaTbnBJAfDty9T9MZUPwrKZRzERSQssGxfkCHKRosxzatYTtUW",
  "key22": "5TrkHcYfNk3VAv2exkzydnrMACEJujscChjCFra9FdWTE14p9NHqDNJxiF6PzE3UeLz3uSkL35i3uNWjSnhxty4N",
  "key23": "z7MCZbvcYq6ps9Ef7EnkrEdYpgfeXpDkKfxsfdcBF7iYQWc8egw3pzec6tZtjLXrzFAtVihDxdXLt9f9DjDinXx",
  "key24": "3HQRSdr3xhFD6E6LgggaGXTz89ZxFeHHYJRt33JhsJfkwRMNYZdn8XdBvR8rbYUo4EyLM1szDmGiHZzbJdE2wKCn",
  "key25": "5fKuNoMgNrGXtbYWPwzqJidjcSj1zSVanHViTm7HSoWT1oPJSZFqzhQf55Koh1o323y2JHgbYMfv5jmqgdEXAG37",
  "key26": "41zZrNiRAHhsd7r5XuYSVqKQW3Qm8ic1nZEXQZohfkMGubfE5RbeRH9TztYgd4PWjturhKu2DTxUQ8rjAJbJdt7y",
  "key27": "UxB8YyJdxtSNBN2eRgyDxxbKH6c29UuymZyPwbbwjqQL2hrvHsmSH4SaNJyKJKxzL1g5N9HEcSMdoWuBAv6MAvB"
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
