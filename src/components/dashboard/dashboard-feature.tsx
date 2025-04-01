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
    "2m5oksbSqM4g3R2ZUyntAXRk1wj3vq8BjwpTtr8VZnoKzm39VKDhLA3Toe9rX1hERk21vKzUzNiqYvVWBaF5264k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8F4ZKTRMdJpGvAZnQGnpgvN3U5efyQv6uLHRkDtc5gB5PFy1SBteELcxyT16JcBdyWtJeDc3KuVCNL9VX82JTW",
  "key1": "2wzJYfHMJQVaA9i9ejForT7TMKACv8tVNn9nta174i8doy4bkGcW9rMzsfwfxf4ZLFm5v9VP58kXUS9RehsLjdQX",
  "key2": "qmT5QYzWurkxC3QwP74x3BfC3uQaFnp7xwT5jZrZqZiYVs7kJ5XfJV4hX1qikDGUrYrTdfq7QNK8tKXMbNJRYC4",
  "key3": "2xGD6PR4YnwF4uFWAdvgTdQFn4aetgA1J3qoZaSesi49YzVBaU9kt7R6ViVzEi29JGDn5wmUJhbEtt8aDXKUq9i6",
  "key4": "3HHxiTyY4cYHw3Q2pxxeTT9rxZDNhTF58fSNPNjNQRaqMAssXCV89yn81oMF1Z1NWPPBvuGKTQps9cFJA7Gw4nor",
  "key5": "5pU2esisNuKCYbAR26FbaN7oDQinCNLks8SagzCRCpX68ayw36E1ueabmRZxbrZwCdjGiYkCNrVtpxGbr6qsqwec",
  "key6": "5XPqFyNW3Ehyft6Vh4RvRd2R1XqTD2Y631avDkTAbvxfBXZcmrmxaTuP7BxnVwANAQ9Qm8BUjz1VUX56yG8zZxPN",
  "key7": "JvYq8kvTCinud6pFkfdESAKJhiArVEX3ALGGaqywBCQFZY5nFxWi88FuGajQQEiaCXabsPhcrL1rePHwg9ZWD66",
  "key8": "jxBaD6wstb2VbXsd99ScAxs7Eww6BieSrMtrs4QKf81Dio7aoizH42qKXg93zNB5CD8ZfLUCLs3RjFyXiKLshqw",
  "key9": "71M8fxq6xmJMXmDkx7UWdy2L7hAjz34uZ123QgP28e1TEn2R38LRjPFj43U6rEYQtsnq6bdeSn1Gjm7qqzNZAkT",
  "key10": "FVVB6hBQbsno99w8q14RE561YTTHjZeTXDLt9H1VXeWXPKA5CN2Pxm8i7ThMwnE8KCyJged4t1ns8ALnZTDNCxr",
  "key11": "5hossZeaHBibYfrVXm4R9wGE6pgRwLjfs8nejWRqWTtay9h7FQAF5yTqgtTaYjP1yPsSnpw27twwko1G1BkSKYSM",
  "key12": "37c4YFSY1s92Q9G6EFnVkdYtromQLr8z5yUcALsFJ2X6FwVyBP3AXUXK84pVTuGHXj4M1DW72SqkKWvVBSBd5WHy",
  "key13": "hkPaszkSPDjBmSofmwMwPq5ydq8fgiBiTgAFLBB4DQnoU2zPR9WodwsUna94LnFay7M9sDS5dUCLY5AjDT73Skx",
  "key14": "5xupQJq8gn2Ejuc8fxT6utiaxGwGYwgtWp87GUBtR3YY3pTAtiRfPdvg9fuobcpWqLK93kuRNsG44CSbw94M1kaF",
  "key15": "WtoDx9UMKkbGGgUaKbNxXSEa2R8cDZTjPShzHEDnS4T5n5uFd8Rf7iGWrbf9gpsvH1ZUxc9r7NMbH8MYED6i4tR",
  "key16": "3HpSXFyXadzCNjbY1npAvfhc2cZDztRnmpn7G2bxoXZujrfzdfrD4WAuAcbv222Y1KAB9BgSUFcnzbqqxCRoccd1",
  "key17": "4WMZXnH7uny5fUsJCgRgo9mkY6z3hkwX6wq7HTaJQZa87gSDa2G9NoTrsrjzGQCKWMqbThW9CCnrfw7jWH18gb8c",
  "key18": "5jhUgKwZdLpwgaq7AX8JFoiwqezJ3RQYmaoBJ8XAEE75xx7YGT1Vd9nbn5vDudrsSR7XwUYYegEVpoiuuAw2iC7t",
  "key19": "3P7SYskvnFkpwJRzueDoZCSk6jSrh6X9833LShJBgWJhySpKPQbCHv9pbSVbE7NHRwMZj9Ph8uX7S1MM7PhKrW6b",
  "key20": "2eZ7j3GdnmkehY6mHTxWZJY9PoquUj7GxqYGiJ9NP1FCiH6hCAVQPrLRcs7JkSBDWUxVh5bER8CHVW1FEW3nicti",
  "key21": "289CHX6CGkVHQnoFt14wjpx7Lx1AN7whcFjM75uZu3kcf9yURpiDdFtj8MEHDq9X12cGLTitQNSiGH2nNCyZxsUd",
  "key22": "318QXuKGpWbDEuJbiLU2XBcir9TfzXG64hVZ26YP6LTMDQBj6YdXBJE6czxWtC5z9Brwqk6HJqWAqaKu7jYBnf4u",
  "key23": "3Gs7obhjoAXEJFW5KxjVAaxR3Ui3eJjdwye8XBa5m9wheoCp6W3TD6WKkUfHkXf4jQiqB8cye7pCVZ4ZwMvemEJG",
  "key24": "2L8SvoLCWzWaWU24fTjut5esLKDuwnfkpxpceydaSu9WXDtqVepeAFTBfk4vTBsvx334pSVCC9TzGQBSWaKRMFui",
  "key25": "5Fx2jLQVetBdXac9rvsaSsAneCjLswPd6TERJzqUtetYHeEMa3PVJTzQpsJtCqEv6YCzGK9Hc4tUQxyt7W1WX1Ci",
  "key26": "2ae4QLj1vf4Vy1UKJnvd2fAExp6Lg3rr6s2LVuS4o8F2UBUJQ2EdUkMJWP91xV4Z44VeEoVWwt9H6LC9fKbifAZL",
  "key27": "J6vNFWEpTRgeTDTJgysxgh19TqTJS3cZmzxsJ228sAHH3LrGrFMU1TYjFEkPG1GjxRUQtuNoY57Cyysc1WGH5Gq",
  "key28": "v3eKurvmCnuYJ4rfCAZ8zPnWvqip5txaib9BKKSKM1JqzDTw9AWHxudSA8TWTLC9zjJTN5YBoazFx6N9DVcuwy8",
  "key29": "2vawRwSvSWk13XRezruobcU5VHnT6ofLMP1fz3j7eUZdD61oVvkG5EifaQgVoTNbatg6YRv3F7Wv7jnBtngH6x27",
  "key30": "ibvWdbAMbzwGopBUgbQu6hXP9HvG2AkBhTL9gd7hadnxYVchQsSuAHPsWqeE2ozF7E6qygUnVoUSh2GmruXfZek",
  "key31": "34kuykjdMV5DBa6FZDYCYSJ1pQomgWkragrqHXQZjTARxUGX5HLMyHh6hWSmJpo4YAo6Mqb6NKJkzrgMg2V6GtqP",
  "key32": "22g8Y5YBpTuydWC79MFE48wnXjxGcEtnAH9VSpaYJTQtGpEzbBv7nJP1hxfMXCk9M6eFocUt8uuKAxLpDKGMypWT",
  "key33": "5ELy8fLV9DhvNPM3kjxTNYKoxDc8QegukXmQmK5aQrSwH6fxb2uNJXDmMMB3qTEmb2ti3XncVVi49aoWs81GJ3Fe",
  "key34": "26xiujv8mawgrmhzetxL9yJdYg4VhKeTPFQ5Fm8AQQ1RALpDdbfV96ksgeT8fpofCXxpXqGmkrYdPAv9hMo6hZex",
  "key35": "5LdCU2xvxmG68GKQsLLaMqZv1YdNHXndwG3NVaK9LfkiRD1hpu2J4nNwuy9cmdR2K2rESNPXxRRKuLpqg2v3Fbno"
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
