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
    "hzJpe7H2TMQyaQNrN3PLrRFuVsU3avsvtqBQ2MqZEWnhjeBBUoLtcFBj51EGSxLZnEtt2TKtpeCAARxaXWZ8euC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b76cmJe7AxpwFtaRhTMjRQs5usjkxmZvarrkAygt9uSKvaPi9p7myBSoLZ3boNhWRebsbd8acYSqRvAs7xPQ2Wu",
  "key1": "4Je5Vqmmq7xtFESHfaXjgSwXuXGDRc17iyQ6SJMF23qPrey9HFLgX1XemQALPSTzpkgo3Zmo9f1WNB6uACdkXtfU",
  "key2": "2PFbbFW94aF2FqiYQdQZ9BGeCUm1NkZCh9ch4zb6pHamLV4cGQB65P5nkR8s2FKugoSQDLEz2H6andLxJQkXUyt1",
  "key3": "3g6Hc9WCwxjXYPamn75wT4R92dbBerzD4Y7Dg6rYwFCSMZfvXf8nMSkvmqyyw9ejXHWR8CCqjp5pQYRy358mDaBJ",
  "key4": "2MFGfTjfrHcQa3zULecfF1UZu25saoZy4yEW8bcdJVfW7pbKexhK8cnAnVV9VwShJ2WfKFLyXv7Nt2r9gxdNeZiy",
  "key5": "3ec7t8rpGEmn3aaQQcaZpFGdALwSiykpjdTcrKsV2RLAphy8WhwnEYZxbfcwWhBqmW5p8TSvjftvAsc7cdE7XpCE",
  "key6": "5WaFiFWXBBpsNeEZVXXsDdNRShvoSusGjMxwN1sUMYFe2hSBYSjHqxvV8gwg5sNQkjBoX1HbJWhJ79buZFkZwsmf",
  "key7": "cCZFXNL8JyQySePzSH1E6bziqqQHoKiXPvBECRbXYKJKG3NQMz2DVUoBvBojPGKLjw3T2yipBNsgbv3sBcK497B",
  "key8": "5yDUKmya9zqciizdUe5XTkoQ46tgeaQme2otpcSjKuKDHCFpnG7Q3VVjtzstsQrFfe57ngmAFK8irV5ugd2DbdPf",
  "key9": "2czt3BTp2mAe5ubcEzBH44ihbHrxDSSMc9jeUGuEi9RcM6zgtPCfUD3nejhY3zQL1QQV5a3MvzWCBT8GdAJWqyAm",
  "key10": "3Nj9onc441Yqd1BPKCL5MuEnRwsgNcWKzj21ZYz2Y45ynrByn5irZiENKT8U5pvtA94v3mmzVaESbBD5obhUnvbZ",
  "key11": "4frv3WyNvxz8zEWrcWZ6vkYfBu1jZxWCopkfmuAJ2rWa55Md3BMUQXqL6ECKbTXqHB5o9qBJZ5zi8r4JiHP32ZRz",
  "key12": "5tWw2tCitPFJgqShoWcaqGehirmQPuoiNt2LLizE3B3jpogZSrZCM32JcHsgxidLtfXPw4ksuaNyNx9Ug86AZydR",
  "key13": "36zCrz2ub9Ff1ZvfrYuDsbxkAYVzAMqtFg6AHAqtzX8NxwragizQxteBdmA65ft7HWSus9VG4LQpQoRvN2tEpGPC",
  "key14": "2dGAv8gkWUhX69GAFci27bgWY2n4mExq4kfd9xeMYzEeE6CuEuvUwC6sYt2LDjDsKkcAc8UeVQyETAX1qmVYDXPB",
  "key15": "5Qhq3nth8tpfWccLBJipXb2yPuNZyZUC6KjPkwAvEqH2xPBWRfKxxqeNhYQerfm9TJ6tnS6DaZtTbDB7th3wq8eT",
  "key16": "39Guy5V88nG89qzAcr9TJfhe5Ach3jicYqsJNRk4QMN62dEoynqmibHYfgcR8B6HL27r8Af9QCH5tgh9uABp9V5B",
  "key17": "QFpsMSSsRczciMZmVu2KymCX8r1oHTvHFcXYnefsB2zEHBiHK9uhbTmbPmdxqZipwuAKWUitji1V3qA2ww9sU2f",
  "key18": "3LRAcyRjYs7Goe63irLMkTPbWnS51Y7aueeqnne99VKdUfjU2nhHM7qQQaYEca6oWCBhVdVq3CpaebmtNYW72cR3",
  "key19": "2HPUtgZCMmrGxjBRgoUa4zaZ5Hn5YHiXQd4DB1RH8gcCdGYWWpoMaZrMH7Yhzc5dhjy6U1vS4A1RB33gkuXwXw7e",
  "key20": "2JDcSv84ErfJMWnKiPQwiCEd6wLD6sh8x3tLqwKA7TP73S1jcSkWk9brvnWgkas2tApSWYty7JYN9T7XczUrfF6X",
  "key21": "32AEdVXjECA3AnJ3DtbrcWfwcsJUSP9NUnKuk46QKGUE49Av6bqAPccqQcP8iUrm7EwiZBs599Hu4XKTcfsxaxy5",
  "key22": "42YpDadDVqWMxvQhxhusNHhUTEXc5XXMt4c23XdPhGsUGs5JpmmR36catjWNFuPELF1rXSbXmXcup7vYD2MZj2Rw",
  "key23": "G9C2UKYLL8R2tLX6oSj2agui7RNfKSG534VjeGxjbb1ifRQ5QVPwKPnR2uWy2M2mU5EwwtUS6EaHBZWzxEbBSJ5",
  "key24": "44ofKEDcucR4kTqDXAvBE3fSZH3TJ7FgmrZUGexvbE4A3SiHY69dRRDbvihtp8pJYvUsiSeCUbMp155dbp6ngwYw",
  "key25": "5Ei7C1xpunpc3JhbCjVW92L7zevmjhJK1xdFyMgg1mNcvnyVWg1KE37VrBZ14omHbW78EBTQqQETD7wGxrnLysZ7",
  "key26": "44UXEdEmPXqCZWz5rpZGPCNT16KECfP948ZckJKUZgRAiBgj48Kg6gSAiiM52b2bE3ou56Kja84QEn2bh9xspDLM",
  "key27": "2YxZj1KDaFDyMVQHdSKR7fF4UrrPWz7d522cLpbpHCmbop4UWWQ1bupXypKJTMRNydcpcvXP6y1dokQXEF66ZfYT",
  "key28": "5GB6vSWYe6wJwHVbbffPAzSPfDnpHVLGzGKEdTPuyp3dhK9N2LWZuq5FL5oLJ67weBRPh5J1x4ZgaCizLYCrgGS7",
  "key29": "4qQKWSSDciHxLFtUsg4wuYEc4Mf5B7cQ7oSzkK3GiD4pGMKzKR7Pc4Qc1CnTu6sBEnYWw8T9KMPV7RJxTfBkFuhg"
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
