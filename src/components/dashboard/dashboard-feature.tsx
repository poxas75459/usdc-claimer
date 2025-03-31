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
    "3vU6irwBu6VbYQ1DfkXbwW8V9MvzYGXke9H68cRKg41MAtff7Mq4HBK4RGDUYeH5DwM6aps4gMypsqfanatJQZSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GkMtZaXWEwoc9XCKFGQmYqxWvHXD9WSMVqvHR1pQCXcmizXk6g4FTW68wNFF3N23yaKFrsNAfmC2eaxAk26JjW8",
  "key1": "5f77E8LWchhn8nm4VKP6QZkwNxvr5gKab9sr7JUkgTbJA1tEUJq2MrBh3BdzHiWWpsKXKY2bjgW2HZsJDBvvawUx",
  "key2": "4GYqCDpcq72t663snkujjXAfvau92Vq4Hq73Y6Lt3B19z28fbHud6AZjppgq1MnJvdm4YiZBSzLDwBWJ9YMsuFx",
  "key3": "va66ZL4oXbc3SLWyNL4eTvhyyFbc9h79z4aPvZVavStsmGGJA3KFxfRbCxSgjZFwZqdN4b4PdFA8akrcWKG8emo",
  "key4": "2sMojwhRozVzbKs4py27gAT3VBaTZSLZpZwQm6WYz6CirMLkLMH5nQ3uENFsc5JAgvVb8JDT8L9V4bGKAgV3DL4z",
  "key5": "2mupp1mAvdZf6S5D17vVGGdJFxXD7nuftyeNJ2Hc7Au5KSAMevisWY8CCAnq4ePqovGefeL1dXC3CJe7p5iVMBW7",
  "key6": "hkZfvvzwqQiTguBZYezxz7PnwHB5oYPtk9PczXrRjWjw7KovDo8DxvFqfdqzxbL5zGkQTopAPN1USAiy8eVFFHC",
  "key7": "5Dk2XP18m8nAkhXX49kb1wot3WmPGwKBtJY8u2eQhfitGYwySxRKQWpseMHDNjDJegGPSkpQc5H4b1f2zC6cRfwZ",
  "key8": "5HgFoYMzNCv5714Hdpy15sb5EvonBZjBmZwHpHk42aTHTtijSurFW1tYsDqXVStzaBJWdhBzjpKuyTZetwjrnVUD",
  "key9": "YRQUmLB2LmfjqYi7JDkjN8yRebWR1cwpFgt9bhm68Q8ZNU3mkxoNrSfzvC6qdz2TidsVon4ygFetMHCcfnXBBoy",
  "key10": "3PnuJZ9qCgFRYK4HzoGtBoAsWhDyEmZMwkQP3F3wbhw7fRAZ1QddFgWbdhQXosoivnp5XcJuqqTn8M7qV5XXxyDM",
  "key11": "2QpjQaqS1BfAGNPEXNmNZYMVg5BRcSL1ehWQ9DXpunPVEUK5UBaLc5hvGNSSCVGmZy8NJcKBgk9ZJfRExUEeUtyy",
  "key12": "5S8UnTSKtT5yVeiM8yeuPJ5ePtyqv5C5inpskoGXhvoiLncYdRdPP7zFw7YBL9rHPXfYQoPL3z9kQr2U9r7Diqgd",
  "key13": "NeqPMZa8H8bK8wfgPExPaMBDcTgWnJYiBvYsgxRsXFYzeDV3wmWom7vWzVTGNsaZBXf7iT4rXWDW49QdtixAE32",
  "key14": "2w8Ps751tuo5yTpiDVSy2vCiY6jpYzznL8xwYbZoN46ycgxCsXX58Xxte7FyqbkNSEtjzoTjESnudmDxKu5npdn5",
  "key15": "54YBKKGqwMPtq7WMeASfHkMKdzVdwieXcW2FKSc2FK1VsXg981SJ7y3KHNtjMyMDa3qCXub7vitQ2mNs1Woka5wD",
  "key16": "4HKv8mRd6Yz7Rz5LiRn5q8oVPzBvAUZDUdEaTXRQzgKGLimE7MENZKuH1UBNRfH3n87YS2QhryGUJcv6zoQWzrwF",
  "key17": "73e11py5CvUumewxpCCvJpoah8mpzuacqS6MiWVKTUk7KAqCju8wm72AqMJpCtTmbKP11a3E17tZ1WHW4fpjijN",
  "key18": "5xXdPoZfJcDJjCngGUpgXKkTtndz2jE46BaN6c4gnPcox2nQ25x1BnbCUmmPqUCZMz7YrrgRUJNMmVc55aBwoqDV",
  "key19": "25LAzBQyK7Xftu9MsKRSse5HDjrXL9iAmUy1TsKkvuuhFvc32Vv9TCh9Hr4dg1zskSi5Qp1LWfaUHbUBfrFVNeh8",
  "key20": "wut3xTKCVAKx89eShLYr8Mzcifsy3zkcYvePekSAqRf6vjwy3jZ7TzZjX5a4zwrqJKAX7epnZiVVqwewb6p9DEn",
  "key21": "4J6ZhNnZFaKnicEMq8npyiaCg3R2sNFH3yRnNHWowL6F1sGcs3XrifRUxYE7NoRuUwMj4Yjf5iS1H9FzYEZTboYZ",
  "key22": "QQDNobx74MnigyV8Fa5NyDwX7vuz7MxnpmtkhgoJNTiLYiGxkHGuGTmTsLhFwm61bZMBCk57wuxQXvnAPwXECvH",
  "key23": "3JSXzdWvgX7Kg8ai6GjCd2dRXzhZsVTjEVozqxCxmvj966Xb8tVgQHaL2yV8RX3mZUz8VzCZays6qFtvVcJRCGbf",
  "key24": "5eL4Bzx6NsaRy7CKED4S7GWxKoqqEyqyJfVnd1QpKtu2KHkMkDikcQNigz8BCk4pYZhTzJNd5N2He4ywNnt5B1Pt",
  "key25": "43KuUasYyjNN6pmQXQaRRhbzAZRedQCvWfP9aAEHFUCoMaiPRoMatvdZfDAStxEqNv5kvHSp21TBfPUr1oQNkqJn",
  "key26": "5ghNJRYv6qNsVskJ7hZrV5Pnx2ED3mFmguVVqRDXBzoKBgMVP4UGBFnTcWNtcWEFc1KLCuGRcYZ4eadKRD2GoHR5",
  "key27": "qFboTvFcxQbkckRhZStvjMWAGzbjFtPFDQJ9AU1QC7AiQ4uvDGjBjQ7u8WA28QDiWSu6Vv8vLbfn7kpTPpHgMyJ",
  "key28": "4rm9iuwK9sVGTd1ui7Lhta5j2yXjdq1WHb6bspVFVwjjWmQ2a4qG5DPAppiKCebaatdQKg9S4rRZC4dberHDpXEE",
  "key29": "yQY3jq7SSjDeUzARsSN5FCWSGTQTzt4cHSPF5zsXRYSt1ThJqWNsf2gBMFDgjBN9QfY6bdRCAFaeGVk9iiHGMKq",
  "key30": "5bXi9CJqfMRP4oAvbfEjmpTK4yJWf8twmd8KrnvdPg89qZpBVZyPA3ehE27yr5ujC4RhCRBaUyQnNqH9CJh5KDWb",
  "key31": "mFoF4PNqfM9vrassf1RPVxKUeo4hWDPn2uA4F6zQQ58isqvSUnjjo1HgGx4whFnjvF85GSKDve1CBid5Lnnsgq3",
  "key32": "2XuepciQXThD2z7JoZu3nWVqoVZjkBEf6pebXKupNByLwn9MguswjzdVFTzkGBgubXEUfEtqk2Yf6ELz56Nz45w4",
  "key33": "3rdp4zzXDtFCzKDzUFfQ1MXnPrKdkuPQ7PJtp5WXDhgN3FwGNUmfzQ418xutCspsT8N91NPznetxiHxdedBqPrq8",
  "key34": "3DbPLm2AAzi4aSLbuwSPzz6TX3SP8Qhr8vTTd6SGhJpMaKwz1So9FrGvvKWCPnh3iTzWxpyBiQRw8PeMTC87FZ5L",
  "key35": "3SkiXPMmAmXbrbcTfYhJVoHYndFeRxry5aer54n212sh6Z7Z9BsUGGEsdFuBi2o5Zf96tg7dbkX62veUzpmNBkzD",
  "key36": "2iXsRcgw652LF1tN6tZLZhCZMqPYQeh6ozjJbNUx6cxXH78A4xjGWZQztfQAzvtev99a2WvKfsYMqhLnPmFmXgsF",
  "key37": "568SpHrwaXJQyCyu4qBXQ69D3XeVghJQP3ZWM3k1SNkcmY3VksnAtpXgdKgq6Le1WHZJQfDBvTy256MSbyjaaQew",
  "key38": "28hZMyVFXExFrVB8VXXJHgvESYirqsvvu5BrDSmdDCgCtaKU4cEUN59rjUXCh4fN89tT9AZ61ekGAiKsfpJQTK1M",
  "key39": "uSMjd1Dmyj5uv5MvaqpYsAcTFz81gN32wGgHsuRipgTKCrawQ4Ar6Ts4zo4LZprYjkHrL1dBkYxUD9cB4iUsSmW",
  "key40": "5zhassoZYTagCZzFUm67cch4Vsp1dKsq2HzfCsSE43SNVg6VgrJ1ye8m33m8Vu3mgbnKy4GkPEZ34ps2pdLXD4Lk",
  "key41": "3wiTqdYqrXwEZ1b5MECvq781VroLnyid1w9obw4MuppmPbszPqaPysVZCu27n9tgoMY9WrBiKqADgH7HgjoUzTyd"
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
