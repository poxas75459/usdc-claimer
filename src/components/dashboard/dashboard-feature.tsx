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
    "C6eL6gBeefk2MWay7kvE4Ng26rNZGsEZMrYRrXWLJs22owF95TJEmVsrWxXLbp8rqasEJEBN1LiE8FWNWc5ttxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUiDgoGkJMRUcT2uZdkuzJxAsWddrXbmSWcDLL5EohZUBTKktBSJswFGZPpkjAGMoLTJPekBcN4FcdwHkfTMVo",
  "key1": "5TZv2ZGFvV7jYwgbViZM9FBZGSK1p3BoNU2efieG6Lx7KvRTMJrhxhySLMPbnqbBXvt1Q5djCGjDntVeiGHnFr66",
  "key2": "2kj5EmE2ELhWHiBdPrcoX3CpCNm3AGSnT4PQbDyoUYKhK4ZDZKBgZobjWe87CoKEeUr6vmKB6mkXRXjoix9vbRRM",
  "key3": "5TJBFuFs3RroXYi9Ara6iY4wd1Xcb32GMAZaTxi7PQFmbV4Uc12LQYaugqnPXyzi82aJX3YJoWBtQzCR9BusKRom",
  "key4": "2rtp72kqHysDaN1aRU34we6ng6m4uV6ZDCF1jdgFjJMWTkBmsN4k5hds4XuqHLDB3BZXSxnByvj3d8CDh5QfY7PG",
  "key5": "5irZjfmxGwAfxabBRkH8tsw3n4uPaYM3NrvQrhU1q8282teR1CcSgGrM9NeMHfLpAn2tqrocWSg67hhRJ74gkRwY",
  "key6": "De2Z5qryZ2WNEncsyX8mHLu8Xgt39eomk1eY6S5c1CBAa3y8RstRZr4eQWPoW86jLqvJdzf4kqjth3dfopq5LhP",
  "key7": "3o6LSobTP3EsCKxV3jdTXRkVg8dYVYoJAib6Nc8q8eyLuWGw258KZsRYyZc2d6HnPa9Mg1qFpN4eXcKALzmjP34X",
  "key8": "5qm7YeqgVAE9wLJHMZYH3rnKriebajUmKepge9F5aFVFsM1byEY6czwNgQu3ZQ5QVCyJpkkaTBnWPWuSDaxAhG6X",
  "key9": "j77ZNvZqwEzRfX7piVrHwBWBkiEpZKWSRgEp7FZZso4GpYGo3zjaw7R1g8Bfj3qt4QuvHHGhLoqZvZPdxSr8fW7",
  "key10": "LtsmjmF68cQsea5tfgcwhFrqhTMehEgHCHskoYJgWqcTr6iTfaRaP9po2NTECDHeGQWow1TL2xToFytnTHNJpxG",
  "key11": "H7ePowvUk7fSyt6qy326xwgxBnoqZaPa5Jdxfj2KMYSYmtYnK7opTLF8LWwFAbRThtr4a5aE6hJwXmrVGpo2so4",
  "key12": "5CPDDKKPNpdBR5BFqHqJ478vteHMbeGP1T67LQjwW3ZP5ZvHZZ5Fjj2qxPhAhPkhStPQ1eBg1pFa1G5tBjGk8sgy",
  "key13": "qnrGpizkBBZ5quesGvHa6ZFNM1Q872htTd8Efsa8cKBio2XLvtsffjTVVygPvhGkjyo1ar9iEznC2a9PMz26eYs",
  "key14": "5aruNpavAbPm5YAp5u8dbytcGutkRHC6Zkv1YbfXwRRabYbPUPgrDk9wABcqqzXzof2za85kniaD76WUJYX7DsSq",
  "key15": "3hp95rEBjJDMSRHMhSNswjVJCQJzW8GPEJxmPeYbqRMVWb47DwqSgHNXZTXmzVStEemN5nkmnYTAVLQYWCYE98xG",
  "key16": "2UXZPtVhABarwSze9P6CZJFCigZJqLkndLZKzvfTQXdKjkNx2BGNPkVWtYy1YBwfp7tijhdRCfb41ssQii8gF3jJ",
  "key17": "49F6rq2tdQ3y5WeLCWqBJvCpS3wYog89JUj8b5JercPaNZsNJ6qcnny4AaD5JchLFGEPWeJBo5UNDRsshXSTXdgi",
  "key18": "C1ivmuGTp5N9iJwW7MLT7s6tmezppaEKn3sXnnWro9vTt4WYM5T5jo84Mj14apCbUb35n4tyNa4vumSsGgpGxTQ",
  "key19": "3BJR8SvwWUeZbBZfkxZnA7e57oUyEf8eRLQUMNDFqJP1dfs1TCEffgcYUmJrzVpCGtJdsdR9meEXSSnvEi7GaFKs",
  "key20": "3QYLcAA81Df6acTrU24pbXDtNu7fzfieS95z8HiQEPrF3ppHozQ2tQWqeRx22w3LWiqBXjX8jHYn6u9CGXc8G7Mq",
  "key21": "53JDUNETegEGN95VSs9pQL8CL4zaP26c53ywh7BpaZvnDszUabxjghamHzCaWySdjGye3yY321YSaX36KxQQd4p1",
  "key22": "3K7LQYKU65uKCv7oYaYkBg9fVLSpFjeUk8aPNQQMowcBW1HxTqbYbzj9AQpaHwUrzysGERmqS7b1yaS6iaCnX7Fg",
  "key23": "55Sa698fa67gT3LhPSyJ2xCc47NE8aVtQfZmx2HbLi96d8d41sx5opQNArMpEHx9e3xk7ygQuqU7AftcQgPdMu57",
  "key24": "2v8nQXenvF1Zta9v2tqwvYBqaVbehDV1STsQbsuHa5yQTi6F2kpGrq9TjzhxPL5Zd5PiQ7MmvEkFWokpJ6DRr2qu"
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
