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
    "2CaQPT2Hfv1eSJbB4HqUsXFrsFY3fDsoCeW6fPEksZVW8xKgTybgyy6pLjHwogeMuMN9Zv78R6W21Zjv65X7x8K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZmA4iGV69bwbccSdxNZ2whz28R4PVG6vypmwfT4WooYFdwUjXEQz9b6hHftWDkkTUYRdeKcB2My54LfYBJ9Q8u",
  "key1": "28gCfTnYoCkjtxCyR69PpxGtuLHy7S1RA2EGoUL7oLXs7gbRmKAmjRCED2tVtnGk26VRgbAAVhB4t9XpEmyeFH9a",
  "key2": "3Njr1uv1ja5Sgd1QtHTZC5zQvud5H6jHkG6EipnvXDXff9NUGiwDLkdqawAGm69abm9GoPaFW6N75isoY29RVvEZ",
  "key3": "vQNNs2UWbJEPwTJgiQvLxNFuvBKC8iG6vJQGfzvRkhSh9tSNv9LUHMJiaWVgF5jffZKfkXSKmPWdLiFLmpRp7xk",
  "key4": "4V1cesxay9j9rZ1KtmaF2h3TdnviSzUrapiELTgk7UEJHrD9CndL8DWbhAzgdnpbZJwAfpCA4c8Xrbck3WeG6UZM",
  "key5": "3Cahkp96q8c3gYZEt5jp5CG7PbhHpzGe8WvnWnFYSoFABAjd6s6M5haF2StWWmiFDcCDA86LrHtNqkMWoTwnkVoX",
  "key6": "4Hydm12aT5GM3PimeoPm574t7VLHXk86P6DqamsJW7pnNUUapBp76ha7PH4zhHXBWM499F9p5W1wnR7zY39jto6J",
  "key7": "3N3sHtCJzdQnLJ9zxmPbvxENzoT6M5khd7MWtcvUFv38j5mXHeQ29Y76p7CdDskmCY8JGqwgseCZx3J9GhiACv8d",
  "key8": "5CnAnpR3qCfUcxF2GMTHgrKzEJsRzjNUxBZWYT5fTuGogEeki3NU8i1cqamL2dZRSz2puA8bc4gYYNdnkeeyy4S",
  "key9": "jtMx1rtyqf2bqj2wMDydjMxsL3wJ5gZ5H8UUQHFpZ6sq9P8nijVfDBmoqDXndU9vfxAFQZrtrkdjBWFXHrXanmz",
  "key10": "4mxj9sYLgDmAoXZT4hMv8MLs7aShyFXnzEBorQCXm19rnCzBVcHvu1T9fm3pdW7eRctjXyKLNu9X4im3YUpBzuAs",
  "key11": "3CUgHt593FrFMnz1oGfnACKNFnaC8dx6jpaHP4xCteUwJjPCbp2CYg8dSX2eUWJv1RsM1dqEpJFrVLpLeaHW3VCJ",
  "key12": "o1qrrJbJAVaJJmyL5T995q9cYYA9XPcn44cSgr8y6gPWJW5mVSqpe8FyYinNthEiNVXpsHjvDQjMQo6tLwRnLhE",
  "key13": "5tZ9P59sWA5GUZ58V5WRcRPGu29VWLRWSzFLVRHUU22bNdEWkPn543jaGxjnTyu5S5LsXDHB4wVWJtBb5aWMdF7V",
  "key14": "3ivTSa1k3ShXepNGqtPRA5jGhwNuWt4JU7GZkihUaH8etjPnzYfGWskj4GPhZRDHAUnVf5Vcqace3PYGcAcPHd4q",
  "key15": "3me7SQVcQrsfXpsVqkrx6tHZ2WrYE8jP1wNmhdhLdS7vK87bAybK5FDGQNU9D4ZiiJjzvsZ4CFLsZzwoxzAYVrr9",
  "key16": "2jBifua68zPY9fuJfnU8QSnwwvSdod8GeGEDvXHf63tZtZdt5YgHGcHWZKdLG4AS8qbwPnNbPacVj9beMXiPbjQc",
  "key17": "3bKntRqZ4p6BH2GvAxxooeSNRDtt7uujRYFezmk6TPWRynRFCiSQhwCpwcXwtUsSb3pC4tftdadftj9rpsqfqU7Y",
  "key18": "4tH1KcRVj9NN93EFCWGXG1DiVeUAvVCEt13HN2xRC33Zr1kCmgVqbXPJpnD5jsJ34fMqp4g2u12jPNzbGHB9K2ot",
  "key19": "3FdchFSbQSWnWf3E3ukz5U8W5RkFvmSZB2A5ZyAAX7XmRtY7SwCCAWj3q2acB6sPeG1rEiFWctsUZwgoHzSQvRSz",
  "key20": "3DBhb5XNgsk8BG3P1og86uUsepwXKBHRT5W6J9MCdBvfkd39XtZPsUnKhadniSYiA25USCYd3Pi75UD5Q6rxGKT5",
  "key21": "2NVt4XR9oG38K69oZ2G5cGYZs8KzMZtgqQQaHsKZE9vrwCm7qUDh8DwEojqQmTBJaETQvgxFbuKLno7XTMTL1arX",
  "key22": "2mMMyKXQRdUVG3pVVcvwaPv75u6pB2KcxWdAQit7UFBVrLMsM2N3szfzMBNdwWkQGqfW6PzBDStiLk2bw7E8VyW4",
  "key23": "5hcDUKq9XgRRh9eGDEYiaMm7r55rmhZiDM4hb9UZJNtkSkSpMgkwDT5kvW8bbP4HsHTpYk6dCa5C1wRra4n1cP2P",
  "key24": "2i3jfpKj5rjgDsmv3yYVX9gkUpYY5DCA4bVick8772pBLhPmrEXGLvxy8PaMeHKKCymQjRb7tGAUguq5xxYPjoHh",
  "key25": "2HejPZshbNtKmyMo7oqjZ3hncoyFab8666YeNVYs3ayrVQg5iuZmmwsmL4TCnmR1YuoEDJioEosaajWqKQNrC6AL",
  "key26": "5VqbvuRgN78HzorB6UoHRhfkWaPE5zJom2k5iDEWqJrhBfhMaoi8yDqSaMRDKvok88CqbQHMXzkHfKf6kLfAhAvK",
  "key27": "ceZjU8rjFfmBdvATPiq3N4CjJwst3VwYM7Ted5irHC9qKdmgP5ifYa1C8okfqkuy3zM9hSTggExyM8968kU5gMb",
  "key28": "86z3DmaNnnzo6Ndybjks5CSZyeNzrswUjwRkzd1Qi7GHAFA7jpKPHUi84NPmSF4v1T9mbAkdcBQCz7Ff3Ai61tz",
  "key29": "4KwgB8BZcMxWPzy6a1KCMGraimELdsYoK6eH3d2YNrQpNGMQJ17vbJQTqu9vmPDAqzzuRKsM6wizeEgCHnVe2Tgs",
  "key30": "61HtkNLiYdMTT84PPFpQMayBYwLK2omYPxrycLASd34VJQkBkTT1GMEgyZco5KHAA2pyuWFJzWRghEvVdk3ADd1j",
  "key31": "63uFbAnp77KdZjckwyNrPUVd8kDBKLJ8wN9CiqqmNVBvm5CLCnXJV7EESygGrbXKCkfmtwK6p2Fw9fGkc9MiB8KR",
  "key32": "3rghd8Kje3yQbvaPnNXkhVScuT8TfNu6STuJBVMrCn6MXGwP3TCbSCq1EtPrvZPG87coLkaf9E6mvjHiwB4prqaJ",
  "key33": "2Lv1z7XF7CoVrCiG4QJFtoBXza5St7943k8uxef44LDXigXvjesX27gsHoKUFvC9vY5DHgb57RQKdi2nNh3YdatQ",
  "key34": "3XqRX6ejVjTqiwbnzHfb5744iC4FDWdc5p8uEp3gydtSbEppHYRL2GtHxhVkjxMZrNnLby35a7JoKzajqhBnvpKY"
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
