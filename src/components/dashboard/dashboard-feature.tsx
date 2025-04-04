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
    "wPAh5rT7kqWhJNW5uK8Ba6NTtUkEqzNzibTFJa5dEnY3oxoYCYCq87xvcvssrYbCkpDxxiLquZXoUQiTLPBeFvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SEUdCv4JDDj9nRvAFn9efAmwGMbqtcMBJEhLkrF4HHhLGEziCzhh8BaexQaBrhcotpviErqALfYhCWuXxK6Dvoc",
  "key1": "5gjMbTeKcGZKtg8VH8haLME9KtqZptpLcPEQECPE1AGnu2xdmJpkLteqjgoqjU72A2Cz91qSrsz835yihaaob85s",
  "key2": "4yTBwLvm4EEkmdWPoBzBfyHCfBnZQz6TxLEQkMWnCcFosxyq4WtKfmrUB5CMCuCPaGpdyGjPFAs5y6VW7vXk6ME2",
  "key3": "2yNh5L2uCBzwJoopoDtp3cTjKKYdtZBuGA2eqq8DESMAcYKPpFAboLTsSRB5VF2C7b8N3v7vqq8Z8JKwuh2L76T3",
  "key4": "3eFbRQsJnBwxXNGFtW9atiYxePKVb1G6nPntZw1wwfm44M765Xzm334DrUttNyEvfoAGSioZqHPUg8qhKUDzT2Ah",
  "key5": "3WEhRgizPrcBDxtuCoJMp61xBiorVhgyzmP2mURUXmsJkEhV4bp1ZAaGJJEJgvBGfGMPVHU9ecWa9XnKdqxV7L9v",
  "key6": "mhvJHciR6m2paRB78ggCgPF5v7bKPXekcyWEpFGAF83yLEQcpMrGivf9CzJLXbpxZMMGRQiaoJDuQB4CYcmvD5B",
  "key7": "4mXN5PnTf8t8CEL7J5j78LSDhfwjurGTReGMrCUdmxaYq4xev9ydDkZzpmjefH6h1hHdu6Z7HAKvYibAFLFem4T5",
  "key8": "4fqFGjMX8HpMP3ErJSX3vkDm45j6JBsSB1eGhzYPyo6QnWvmemJcc92PGuadAkX21WMVmuwVNN5CZEexu7P4JdUv",
  "key9": "4p8rZdh67PuAvzZhbmZEGk3aFYCEsHmviWLkF7MuNip17aKKNjd6Cs8berkYeiVqzVdUoqyFSYkSqbx4NaSEKKyE",
  "key10": "2zwRZ4xQA3SBvJgdDDNFHQqQLGEMd4oSdY7CY697WJcmmoCLgpmehZv3eHeaUXoMkkBpmVzQqQqXjGDEf8tCF8VL",
  "key11": "2QH7LoKJMQwEScYWS4f6GwZ2CuB7bfGcjY5idi7KYGTD2ddWAYZtBvg1Yf7gpRn9bscmcevFMQ7Vb49EF1LwQpsH",
  "key12": "34QtFZfGsRktCnW8dKLuaEymB6dcPaHH5evqJXNNtAoCzrwpnEzXptmwjnMGZk7hXjzA2TH5AAsVXNH1fNy2troJ",
  "key13": "49Se4NnP7VxKUiR9S7yz3NqzDTHMrjmWumv3zbRvzU4FtrL6Sm5jVwLL3QSKFRxDhxWS1oZFhPrtPTzmaz8bUJyF",
  "key14": "2hZzV3PqgW15n2kE8jpuaoUA8UcNJxnQ9JFU1eRBcQ5DdJ2md638cjEH21kUeyshnBg3f3JmDgr4zLP4cJL4Gpqg",
  "key15": "YxTBKFEbi8GqcN21e7zjv8J75kXEmwTn5eYctHMgbY1ejT5h9Gps73rtpQ7qs4tpu7oGLpJr6vr7251NftivR7G",
  "key16": "4b7J8rSWQUhMS5WEmwv79SRtE9mN5BAaXoa9Tggr6qRdFjb4BCfkZRtLuTQNgaQ5JMcrMqx2KhHYqAVGnrBBFT4C",
  "key17": "5aWXX2QU6vC6jNLrD5BtrpBR8pww8UVcNjozWd6BD2hyJcZETkfY5c4WxDHp16iySR2sWVGHVZ1ZzbhEEC6wacpP",
  "key18": "2oKz6nyahnGbH5qgc5ctX6yJCknZ87BN8XW9pj4GMz7RYPvUoBoZV5EoD41q1QyPvVqcjm5btXKzQVaNFZommPsA",
  "key19": "5SRDRNqMbDT1FH6it9bQYFMTLajtAMYAWJLcxy8cVHyf7pRWPhFKaTiFfUwCEDAfVxgCW6EbhUcHjKcXymGLZ6fe",
  "key20": "67B6nFNfbp36K5QTMkcSsBPVAQQpmEuM4a5iRKFha8JgUBCTs7k2YPo5sCekVQihigXjtvkzC1af3Fr8xBoDmwxd",
  "key21": "2etJfGtPWQbC72mtYuBNCeBspjnmFXXx9X4TUCXQRuhdYFEQES1p5snj68E1wZKXx9uXgS5rNGEcd9R9xMhKNLss",
  "key22": "3NEcbErAR7ohaiFWxhoT8JZzN4tDunoiyt4uni9pXxEDr1gNdtmWwjdynjrL7mUC3onyCzmbacoDWxG18kRtD6bZ",
  "key23": "G3EWqh7i9ir2nNrRkPwLDsqUZwqXKwd5yDmY4bPV2eodLvjxeyLUw8XnvTPCNbhaiEY5cQ7PugVK7z2nTmki1Ax",
  "key24": "wbMmHD3QG2kbBytGr4PG4vUa5svvTs2qsqq1jc7nsr87pcy2Nszvt1n48M4GsFeaKrmYVCEh15jHA6CzZad5tEY",
  "key25": "3rR54359cHeT7c1AYEQJkrWSpHKnzHi8TrPm15xUoW1LjMF299SRKK428W4ghDTNT6y1csED1hDscUpqi3NioH6q"
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
