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
    "41Pk64tAbLhURYJCf4MTPEVCSBvE1jxm2vXwHrmdCe7jnvWiQ9rUG5aoXCvjaWE7jQBM4UDXGKCYo2LukGXK4kvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCZbUf228rDApjhWzb4S4adoKddNbv5oRr6JqavxXvSYE9gPhRMdp9pcNScJzpWt3cCKv6WyAtBJ1j2JwvuabeH",
  "key1": "5KMvCLaxrSxuDo5bEdVXkAD1ZjNg6U2EA9Gto1vPoTWrTZcuEjtsWGtpes5RRgDvoivv4JXDpVPngZuAkZ5gWPP6",
  "key2": "xHV9CtD36QDg86Hw1wmgMsXeMeMzvme84vCtbozsuTfgLfq76oXdkHpSF8Zn2m1PMTQesXwKfkM95urPhgDWVdo",
  "key3": "2bwKcrnTEvLWXSupcp5Jcjphi2iSr4nUWTWBaiqePu9G6BUJyWenysDoBmiETdZrdm6AoicQouXsGaN7nYVmS1e2",
  "key4": "3MaogPXVe7GexYg7TLmHN3Z5g7RCdmUgJG1nneuo6563P5qdAuBuzU4NioWSkCy8zhv2ifYiUu4QV9bZCM7RMsoY",
  "key5": "5d8sCc1RbZx83oFFzrCg93xDg4f2DTpa5UZQsKUxDnk6y6htgKGup8wN7GTsUUzaZCCzpJBBgJDki8EXBQFCcJ6x",
  "key6": "2XrzDzYEwm4vkYGrrVt1PDgdj34N3kM8jrYkRsCKQe4xWxMKCqz4LX1MrAnh2ZwVEEDJSkB2QgHUTdb3jgEh7qjB",
  "key7": "5oVMHtKJBDCeoQpYf5g7WXSkEuVq1ABwywhTm2RWX6PSxhCy5RJHzWfHUTqpPz3zQMwQE5U6ZoRw1fPbiDvd6wxn",
  "key8": "4emh2XHGmKRHdh1muMJm95LJD2npwB3cKNFsMMdrBbEydsMPgvtqeyxPgkYAvXCYgNgVvVNwEq2fYWMmwZ4EwnmD",
  "key9": "3cpvm7Edat4qWXXStD2apynHbzSixitKsg9srZebYKWoto8991Kkm4tMVVpZtJHSGEydZTyaDGFf2RGoSXm2yjDp",
  "key10": "3JZBL3eJmMPppja8k2duzUfATMaJL61SU7EGdghs4gmmQwUECCizf3uo1EXo842kjJn1sFF78Rx6gQwAu926YekB",
  "key11": "5K89Ba6FTWc1uuPUuvEfBUTU5wDXYcDzjeCU4DVYhmNEeK76jhBAvu7G7RWBRnnw7ZYcc9k1jB3fkGaUuQNqyMGs",
  "key12": "67HPCite9fZgJrDP4jR6hHkcT6YNrxS979pKjGCDMjvGXxEFDUmqDsh3LSKn616SSpEdsinaN56jSM2d2AWpT7j5",
  "key13": "33s8qdajFfzLAtiRHKWyNbcKC5YSVPr9CJ1G6SbU4xcyNP1ksoytZZUNNysgHXdkUS6PL1FUum65n7Q3iTUdNK9i",
  "key14": "2WkBbCTS71Xuuikqe6Ty7iMwjyNTUcecaDcSS2rccwUvt9ASCLSaLP8RDsYdVmeKpfYicLCwR2iKbbQAxY8ioXfC",
  "key15": "4RstvFVXaxWciZ4EWoKqFX5YpSqMmFb8ZYtmnVRasRmhP86tC5yu7N2x74788Xd2rCKZAo7uRpUbu2kuy5CczKyV",
  "key16": "3Bwx9TEuzF7fLZjyuNZULaVqCzDDdXZ3eENYyxn1vnT1yytcc7x7q5YYji2V6fP43daVUhv4gvQ9WX9ekjmr4MHi",
  "key17": "5W6MVfHTvD6ZqN4HAdrE9ZtZU99WJm73Dh9dVPt7eBzWwbi953xtVtEiQufGjAETgrNCY4mH24TVPkEDxEMiRLBc",
  "key18": "57Uuhjky7YRYFRz4rZYrSf9KgoHPVv1h4GVwySGu2Xvt3nfL6kergoZepqzFQZB2nzDVgq82csAWWHFRgroxu6EP",
  "key19": "4ZFQQiNhBgs8hk8PfuMKJMSrFarCDXpVqDG4b43eqxCEnU4woXfgWHeKbyeHSjVEU3iEytp2FQ6fQbUT1beLBh5f",
  "key20": "5mem8LXj2aFRy3m74hykHuGQir5mj2qS5nDwxtJwrFpMGdS2t8WCrZnd3xvPb2Yfa3a5hKtpTjbDLMgjwRPUxWjN",
  "key21": "wcLXMUdsk3wdFezYWb4RSSugCpUyeb5y8pkhCtwXCzKiw86gseDne5hNXqyxSwxm9HTPZRFNabbft7Tf2SyVjxz",
  "key22": "vLDKiaqxBpjhZ3PY87FoPwuGyaHiCyXXn3L72CkMiRjpwttKS7WeHiQEwQUS5XagrB2Ho8tQ16aVSgSWK5948j8",
  "key23": "5wkJHz35etNzkYXsjTHx7zfrcbNLwLaqByen7Pfq2AgNWsZMVz8sJP6PSkHm1VdJcjV2qCfqzRwzxkxHfZqdVRv2",
  "key24": "PRjuA5Xx98MpKVBoag6nVF4Kr3qciGLrsR1cnvqopN3ZTCZCWAJmSKLbKyU2NFJHifR8VeURP4PbR7UNm6WCT2P",
  "key25": "64vsR4b7GSNrYYgZo5hHw43dBZwCRGfB5pVuXctWvC47F2DWtnL5tWKyQ3hRLQaSPkLPqsWYB27ubDv77Q63KuG2",
  "key26": "66eMb2apKzqVVaMQ7rwxanAdhnDA6fJkmTQCcojvqTSLxeUhUkZ23v9kX9qavEfQJoxVowpzBpSDUzKqGv6m2kK4",
  "key27": "xgR9q12B71kBQh2xb8BV472bab2iXMYT3AqnbsPpmcWqG68VidJ4VMBv6cUnojoomGDNkNVAbEf74DCTa8P35nS",
  "key28": "4GyuvXCV1NuaMr4NouzYczDVXaLtpW8VEx5jqFreBGgLRmYSNyxC2HTQYzxPqXfk3rTykPGX9SFU8cQDGbMGCkAh",
  "key29": "2LfyagrKzGoxJKax7s3V7ePope7cDSi6UAjUo5yd65whpprqjhnYLnmKm8j49qxH2NvcXf1LjKkWzsdHHyZvE9n3",
  "key30": "2jGJPQbxCY72FZMmfdTauVzLg2yftKj423UXcje5JKFPvUyLNcTKajxzvSuEeGKDibV3fYyy6cwHeNhaxVUYGn21"
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
