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
    "5PrRBdp7S9Rh1cUtuYU3TbjW7Ek1wxJAdjvPiM3gJRCa6286JPgJDZLNwoLzo7jgq3YvuioMicoA4KvmB6EEgZnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33PKswsuNyahGUdW9cp822URWqqDQ4gtwAXawkQRAVRabzxhDSSeEmVfM4tDcbSHHGDXteGkjRtZ2KjcazAWihuF",
  "key1": "3ZGFNjXNnn61ifDWYehb8gVEGZHgf5jnQP1P9Umvjk8RhgS3RGKGhiD7vttR9Ya45n6BLfPyRqNszMUKeYGEgMGW",
  "key2": "3Po9FaBLPcZdrAkzqdosVnz4gCoq4e1DkEdC9WeB8uPkp4sZWorQXMqHyNDrKX5sm22x5EoKgWxJL7LWaV9P9odt",
  "key3": "YMhPrBSoaEsGKMSXgSfJGJJLwcDRXDhSs7ujyeG9DF9JuXnTx5iKExSZMfte9faUZZbdiTVGoZtEY47MvQ4MGQe",
  "key4": "3bpyk7eKa7G9y37wPuDDKDp42iS7VjprJ7oUr4rfdDsfrsWKTmFEP7UWxdkkvRoHzmRYkvT2gGw5BEcHQSZswmpW",
  "key5": "3r1bDECntEr4oaxt63RtJzCtRZfjcdq9AM1uYzfe3dLVGajUd1gKhvj9JUnfSo8Eq1cQSdjQuHmBdLz9BsZnAdaN",
  "key6": "3bfFvhrMXbGFjaLQ2LGCzRN2JrpgcR8EEuiWRJHHEAKnZAgftDVTnS9ssykupoJTdnNg2yXH7JtPcRcFCBGoEdQK",
  "key7": "4E966rWJQCipT8sMx6nN2LKp7SEXYrXj9AtGK8Dmo2tQWXrP8gXposv7G7tMT4FYniroKbZdERZoQrfyQxEnWN4h",
  "key8": "n94pdcNxGhnseUB3uNkcPa1LCLE9NQRsdtSvPSwakKX5yWfqPsUQPbo6HuTUHrndk4FrUuDNH326ATiDSAqrRt9",
  "key9": "4mSqFMyB8e8u5gyf6BfXqoMBGrR8ksZXn7ZrZBr9xubw1btGiN1JacafmNYPPcf5Ac8aJccG7FwfsKGgGrjP8ZVj",
  "key10": "7b6ewv63aBF58vttJ8pv9n8sRCPcxQLT7P2YoXdoyfu9ZAZzjZd1Sn58Sbu8LcXGMESFp4sdcTjm3d7KEsRWNxG",
  "key11": "BiFF3e1kJX4tEtRmoi73pAJLaSiRXjgPKZEfBKuyzX8uPFHbNMQy6yTMxKdS4gR7okg86vKbBBRXtE4syXxFMjY",
  "key12": "5Ra9adpK1jpChsWDw6SoAyB4LVvkU9idzoxtr63rHT2f9yGVVRnL9XTmKwcFgQyEzj3ds2rr4RdpgKG84FUS2mxr",
  "key13": "4bcRMYjQBDuYQzjwWg4a27DeK4o59sz51RKTAZH41xkwksCnNkcQ6Xx55pqAxgfd6pL5TQYhNTZ6PbzdApT6tnRH",
  "key14": "NeGvTs2bDkKG495sZe4TamwcfDJWTwCUnqEoVZN8A2g7hjfVTGBcohLDCyFgJMNqeAjQN31kFZP1cP3Xima9am1",
  "key15": "3ddtJDiDcTvw45rprS7BXR6fwsobfTFrM9CYzQhfPXcBmaFQ3zE7A1awqLcVaijPKRuUi1R4kNoLnmj9XoTB8t45",
  "key16": "2QPXsRxJRPyZ4kCkRHyubnJ2x37DekRBV2dfvenyfAVLASiih1HmSov8WzMXdE9qkkeiMokdBBHNxJERkE8udM7k",
  "key17": "2DGcZpgb4ycjuo5ZP9spuhrWfwEo9kS6Gx7NHY9XKKZqRs9uMev4PsEpVHJ5EZU7Lv3ASrYmHHVFCbke6Zw6qQHB",
  "key18": "yKo8DhjVzJxdDCbDtrA3TGKMYa7rkJuRHqys7fXikfea2CHkHZHRKCLaWnBcwXuXXbd6WchGdc4qxV5gT4ktTHp",
  "key19": "48iTEyyXnxRy9dj5WEhE8iaBAZJtrfAw3JEDCQdWkE257ym1gX8XQSfdZXJEqcRBkNekVFDoDg33TibERX5AhPWE",
  "key20": "612HPo2FRXmHpV2dV2n7VX8Zx9UyK4KFvu78vAJsqdX9T5iUxKsLfrH7ggj8EjUUXFVexNkJUtcuMLdVfT4TveuV",
  "key21": "4VrN6HC7FKB5MtvwiFaV1YER4UkYwzVaKWPPqYfiz9UmYv3Xd1GWUBzJxrSa4Ejph3z3KutbvTmWHELh7LrHZ6po",
  "key22": "51ZLZ4begEgo39iJtipjZi6o62k5QPtGmq8fEdMuuLSeCAFotSGNWySqniSTJQDeTjxLTtkbmnUKPHZ2r2frDDUw",
  "key23": "2CKpumVWFjHronrqjk2s6qUJo5QwdYYo4HjKjwvg3ze2uYwFFdwsxyDp5EzPPMLRasihJPL59GqpRWpHZxkSNDFD",
  "key24": "5YwEK8XXmbBUAk7fFXeprh2W713FsEe7gseUBQYbqa4RBQgwa1CAuBg3PykTLB3du2wDBFkQUsnkaqbRgCuWcnGd",
  "key25": "3g1yRZvS4AYAF31m5ekRQwf4YT7djh9jDmvp1yndhq7DLTXGcVSP9FqTcCnJ91UpsQaD2YoP4842MnieXr1eqfEZ",
  "key26": "5ENMWbd466XZcWCFtmR4uHcLfakM6WXddUFPnbt1oDpyfxT9SL6QBoh36aNyQjMPjcpzTy11gewinbyxEnXGohMW",
  "key27": "eJv72hPiDfJh6BvhRA8EMa1yETFjp78JmyUX22oM4rwUXDeJkNSLksWcP96cpXQe8NxRm8QHuU8YKPBXkPnfEug",
  "key28": "53nSGJnSyFFxjt6VBYeRqnJoa3Qdk6BspPWtKihkV4QFGW9eQxGqZQjjt7F6GvzQB5S1NeUALjH9gBGtu91Eqph4",
  "key29": "2cBksetSPnnBCLrUQqdPVXN7p6jMKLB8aBJz6xHEyrrjv64yR4YJ3SEARHvsfQYQYwMr5EUHKevivkLEkRXkJNCr"
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
