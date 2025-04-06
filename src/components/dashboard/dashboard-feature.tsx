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
    "4s9Vf8t1Ms9GVZ6YrchUuHpThV1iDhYQcWCJedjrSqXCpePGuYnCbPB6AkA33DZmnyNSwSgoNqhPwtPPixqU3gMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8v8YgyeSTj9xJnLgiu18oNu3nZGuDhdpnaYpWCLgkzpQUpLvMLFyZqoyYMjUW8fMaGYmsu6JePbr9HbpH75ejo",
  "key1": "4tYhXAniZyGJkwzQwpLNQoExrCJhpMCKE3RWCqz2Gkub8bSjQXLxU4NwtNgy833tGtjuXoc188XpDLkfLgpXFzCm",
  "key2": "5ofbptyrMqDPAmBzRJdJx5E925yHtNhVuR9Sd1rnfdHZGV9seUc8hafLK6oqNgnRwFWRQbDZRwdT61jtteWPb9mT",
  "key3": "LJCjW4CagGKStoTPYLr8eKtcSyZwF4swqFQDqtEMyh1yXAMH9FBST5LJfUgjSm2Ks5xhL59wzero1kXNJC2x8A7",
  "key4": "4pHME1BXXdVARNGgLipCGCu5F19HDELqDJcC7VZFJ6vHZKPPucRSAGNvDwfmD9nesLqsnixkoDSC7DyUQrmiDXeD",
  "key5": "5LyTFvKAoUpqiLBNKCnN5g5V1G79JgzBNxiDL9doZQJComUhCf9zsAGFwmqv2oFaamWMy284QicJEEXSDBMA71LL",
  "key6": "TLRifWoVbemVp9cqq5PgMoE15dan6tjVGMpujHtk6KZBmR5UaAnF5Tq9YNRCenTV6nDmK2CPpxzv8pRSrqGPgVe",
  "key7": "4X73YWrQYEmMtPTPjwLFZjkdFqBMpdWyiEeSjLCh7QBc6Y8sdES9uqg186BHyTYzohRYusjqcuSt1AiYvQQkcSAA",
  "key8": "5rLgncTMzoGAqi4tZHyDww2seWzm86SwepkUryxVwiZD51WiZfNiBvwxTK1UTwAVZw3W8SrQQKGXZJSmHeRHpbJw",
  "key9": "2yMQ324QxTKV4fq1ux4Z9BMxycjVSeTC9mMfrvpkAMcfZ8wjjXLuj1t8vRhaXEX8U32n1rhYaGRsiZEdZwu1qSab",
  "key10": "Svx2nyyVKitox9iYXjvuo5i8VypxLEbZdjrmaDbXzyWM2nUKeZcRqHSz5ZQQVmctf69K8PFsuMvd5Hnnrf8HqbK",
  "key11": "3NNDD9pJjrHrt1V7q62Co5S6qzWSatcxzY5RZDuMqXg1tLicTSMGXadtLRB5vZ7x1EYVHfk4cej1XfTBz8YjE3Rq",
  "key12": "XZewQq4SLpKNkx6NMS4LXRJPss5PzqaTuafdZLKhVXyozxAfg4szuZVq4Wm3hfodvsMR5NosXCueTWFvPjd5jEP",
  "key13": "5hwCjdVTmhNCGRV2S2g6Dt2M7EkCgoqYUVwegQXNK4XEsNFWEticEHbJ9bqenniEXvjxykqsuKTJDSKwF9Tg24nm",
  "key14": "2S4YoEiuTTHrLZ8LF5KsyKKdb3SmwG5K74zqzpMtMJPnXv8Lo3Dzr7J82rgzqzUjQSd4LEFuTEp4fWK9a7FMP25A",
  "key15": "5Vg5d83oJRsVYX8DxjTXewPbyA11KowDagqW8DDS4nvyB74kiS6Lcr99sr344cpT7n7qLsuruVAGHij9NufMCay9",
  "key16": "4aFsKFa1WrCJANDHN9Bb4DexHS6QPSCXa4yNvnDpQNVUGMdrDc6D2UZ5Lnwco95E5m2gvkvCu5vQvV9KB3ivhQaZ",
  "key17": "HpgGmjE6aJC7ggjQXyRpbGDi4w7NYwf6vaJGohLiVMjATEWZ16XP41wem1ajRPHFToLL5N7LRvXaeUQoDWidwPS",
  "key18": "37st5X8eW78GSKMiHqrh8W1LEGh9eBm2hkv5PqXihrGTFrVmox4CrTV1mfFoFc8nP9RCfryWCtEfUEZf7vEfMvRr",
  "key19": "w7Yd5wwZwdKeFf1wyFwwThddUqjMZR8BnLMv1cY2Xex9X7NmHvm3BsD4NCjVZPzFM6WR7sRqyC4qRBQaJN4ToWf",
  "key20": "3P6KapAfgAzKJtD71jeQctoSHegzuyp8LW6coK8rGyx7G3fCv4LJjBn8KSRiKL8NPAM8aP7BEcqqg6u7zuGDxXxG",
  "key21": "h389UM1vPmNL8FBeHdisKo1Wrr59bjEMXjyLCKBP4191wg6nEosUYne35BPk27bCRfcEN1tZb7V5acqUja5NhU8",
  "key22": "MjZvQEkL5uZU3VZBgwkf9DNtaeibkTqjTHVdp7AnPWLBGLdP248sXiyvEYqy6H1togL7dbNpwduX2oAwbZy2fKV",
  "key23": "65cr1QiDQKdvrTJoM1TymopgnbnX6rAbYcruPyPH3J1YhVkhsz2Wrc6Pxb1jUY97oPtgcNvftQkg3yGwQdKRtWQc",
  "key24": "456Rqki3NwKNxz4muceUZuPBigrD743hHmCqSWEefxhUGrFx9qy75b2wwyYvA3JBn5tL2tCFYxKGJHtnSv3qoham",
  "key25": "L7w1Xs5FkuDSUmjtmNSaTZYnWK2yZ7n9rM3uNQggSmM2JvEsaNnjR4pqE3CxookyXpgpQdLRyBpUhxbEgk1tjNa",
  "key26": "5Ur6MXFXTzQ9rdbqvADRf2SBeUfFsrWKKCfuHaHrHzKbhVZSRC9spAofrkLwghQaHm4LfQm2UA8Pvfsa87MqVWVs",
  "key27": "4ss97oudFJc28CH4iJPqmSxwHzqKWpMFf36L2RcurZfYrKcmpzkECyLNs2nu1JkgopiV23zmQfygkSJFrPF3nxsB",
  "key28": "53uibv8qKRdSyJjcKU6E5hJ9LpqMfwVVuF2JkA3vAQSuxyTGkw5kUySwr3dWFHh5EzykVceEbetF9NW781gKHDxe"
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
