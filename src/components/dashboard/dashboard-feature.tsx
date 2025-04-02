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
    "51YEWRHo2AoBmk2qwUi1TAgnymS7THTXb8mNvNddRV4p1vNbLbqzVrmxrUhuD8bx24KLAnydUQn87EtrxeSt6stD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RAVjZjdmxBMPEVkncv3xjUbPuNSDZPSG81bBUumVHCfoHCMzWwamscAg46rA43jEzrkPZHU99aVocpu3HLbEnx1",
  "key1": "ZxPLL26VfUAwyeJpwERBxAVegQ7G8Tp6oSdo9qtcEkJVX6bVv1icVktMY47EBhpYK95D9dXexeDjg5V5NXL1H39",
  "key2": "4kbdbtdYYCYvkmQ2WY7NnBWfS4jgZrTt6yPdAxro7eWqhRkGwLKyyuyZ8Xxrj7qZXEEHKm1j2qYzEU9JdUhYHAo5",
  "key3": "5tkmT81Uankt3NBGf9qEWsmuvSmER9NPXQx1VMaHkFdAcSVMAE5qSwD18Gf3t4QHxGjiSGs5Pwucz7XsjRq82Jpy",
  "key4": "3BsCRdJN7zv2SQGmnsw28WeBuDhzVwM3S66s561nq3xvP1BRChTHfuX9LbyTa27hGKJTEicjsXoaj4dcAqfdwprd",
  "key5": "4eVQ5Bgbcmxak3iePLvLeZ6JQX3hzgeqi2Kbv27FuvUBAf9bnfXVMvUSgFkLqct2Fg3zdPAKQtKcfWm195YvFov9",
  "key6": "3P5q2V67mzS9XDHXSWaaJxLsGiwe9cuZoPtN5vftAUuk8ANbkStARvmS7ijcfVg43CzQEBrb8fxW4Fok3B6DhQ6q",
  "key7": "3JWhPq4vzoQgoqxdJ1aWsY8Rqh3hMPZ6ZwtMoNVv826vZbRLnZfexkZdNHAt7ePaaMtmDsGuSAdnsS7nymYvTx4A",
  "key8": "56jUC5TkAtrA6Hh9Gm1hLPWq5XxrEjQcGddoAg4XAwTMZEw7LLV7BaqgA4YLKy4euHNTewFAxy7ry8PR4mrb6ovC",
  "key9": "42wtVc98LMJRPyoefba3zzJ2Lh6G5Y6BJbCDZ4yFuVkn3F7RDXwLVnx6AxGVW6HL5ggAc5eDJrvorRM157k8GWFc",
  "key10": "3Qo1XiKdAugArYAZNcm1pegSp5AucjU7xBmTDoL5f37579d1HxGDR14QPvm6ejyqfsQNDEZD91Ku2qE2BRGT33F4",
  "key11": "5jyxe4ZSsmo62ZKhY3h17RiFUgbVTpntSBhEE6jMCjWT2deGmM4j9mRgRUHof2MCWjPArnnD3ArnNWFJDGEV6hTy",
  "key12": "3nhpRj874Ch2BWRpwTm7GZYyUP4bqc16GvAgwde7podizWK6ieLdZYi5Big2qoMcK1bEnDkToQVNBUztXQGBRn2S",
  "key13": "4rH31gQHTps6pMMzzfQnX1c9YKzpuqUcieMNKx5nKmj2Pf3wazMx8uzu51AG3mMoUVi4rx1P8VU6NXuCtZe6VLHR",
  "key14": "3TGbSBZz1HdEqnsth239zbCiWnTC3GfA5kiupzBcn3Ff7QCwiC65BySJuy7ZHhnarhSTEf3eVmcD1rW3LH2zXLDQ",
  "key15": "ksRNdH4jZddzb1anziXeq3hwk9eKQ9iAKMvEQuNCJJBbRumVP2UjGSHsVga8B6kPGbhtZbfR4i6n3qUV8cJGYnE",
  "key16": "4cxRu6dNoMfy4Fj4S5v8vzmwwKbZB3Do4ZPjJGFeibatd2Lv3NTrfphTgeEdnzYQUUndMZMX2EciLXvmTZMR3uMP",
  "key17": "4ddzYcoh4uFoo7RqZxiATg34uoHGBeVbJ3dvVehXHkzYRis111uiPqUPjjhSpEu6Pumcq9bqCbTLGH9ChmLb1ra8",
  "key18": "289etxNni2S5VhYNYkW2ncPnZrfpKqtXoWp6uoXA7iE4LZRXPex9dLi9R6updPn61ExvdReiSBEh66WN5beiqj7U",
  "key19": "2wL3GPC4wGkDkc6xXKszomnhmqDbMPVfcFgyPxkWTUMX9xQHivndnEgKqeR4rsSkkVVt1vprZ6UwVdxvkzaRV8av",
  "key20": "WStaWWSWumTKVeTu7Yis3mXFTGeanik74EaSkwqTByXb4SuTcohPmMYg5CTWUZUhmg6gA8qNPc1rWJojTig3WNJ",
  "key21": "2rHNas1tLzdvKr9XWHM3eDohEUF1eemWaBahT8XGG5YcjqgKrp2b5YoEmSB7fZ8wM37piSRADiXytbnny4D6exTD",
  "key22": "5aa9gEu2iqDLfD8byRrTstsE4DXzUpTc6VCowArEqcMVh53y4oAKqCr9UQr6qj1Lyk4awVkALEDrXRubWQAPDjVf",
  "key23": "5iRVhtvwGDcMpZUwbtsPfGcmk1WvJrKZ3t2TWbytKX6mVTUrqjzU9KZTsPJJ1QRi6Ph9GMvyTtYHUMLSiAZM96Pn",
  "key24": "5yUqCazJC6QhFnNvLJwrMfh4UYzd5NK2AE8vFjbmmhNo21AAYFpXqNV7kkaFdQbbt9syTArGVg8dYupDJnm6nPvi",
  "key25": "25CMWppBN7gTG2ycd1N38XHTU8HzAc9szSkboi1ERcRVcA4Zseu1ZSJf72rZSBnSUDedzCjWEnzTETzxa4tAQT6g",
  "key26": "2KGx4wwZvS9cy7vCzo6RJCPee3DSppg8xpa9zgMxG34NjZnReVVx6UWRj64dqyCBbmsEchAmcfybvdrUe8HvLomh",
  "key27": "5WEhVFqXUEBaEtUPTLophW5DRWXSQT5RBk1Ep1TnyMpnNkKdtNxueVvZxCbxNdkKVFWna5T24AAGdkkoNqTXjxiE",
  "key28": "2ALZxLQG2XnRvSw8gXUfe1fVpyfvaYL3poh9bFM2wuneeXMMNrhkaiLNv17SkmrUX35EjsyfaM8yZXGwPbvXYe7J",
  "key29": "3cT31RSQYS2PfHwrt8ECmNp2CZTfuaU1VVonK5vrUP7yxYSLwbJqoUxTmJMA6z8Tz8cdXS5xDb4vpu1KcnvNSUUm",
  "key30": "2e9WBSvrkx2anGStaeMXgC5KLaUJouhLYnWqXZc6sAMfaidnL8YHG5dGtghGQJtwNM9myHM9nJDdjtmvBWKdhCR8",
  "key31": "5Xuv3MeXXzpzstfor1Vum5xJ1TLg8rE8eQVCSeVi2nbPwQtaEmBpoiFm6VFxH7wNTa8XVvbct7eSyCGoNm2Z9XEN",
  "key32": "NtXRnGkDubzeRVX2zQc6DF7fndBxzia8fPgWQXqacJNY9zr2WKgq5hWBfYvrQbhayXz94FVDjRgZxKdHvnhbdt1"
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
