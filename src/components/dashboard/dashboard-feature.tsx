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
    "53CGVj3UiceaoV1xrdTRF3xh7sWhf6ng3aHCQ3jHYL5xSvmkWdR5atEH25zeXvk9ZWW4dPGDareWjazRzn8yhenL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wfv3RHdzM4pPiuJM8cXeyGY1UsjwSxEwB2xsSeQTCjApXQdoLLh8J9EzBqro8BRizb71R2NnABgzsPmqeJ1p1za",
  "key1": "56ZxacH4Bv8dffJmZgaMKkY1bMMq7YHUpt4AfMYbT63W7tongnKhY1GJtUFDukJTe1o32GKNwxKxbhhBrjBAeuKM",
  "key2": "y8W8rhkZJePgQz6mcRGRj5WT7nTKwRg5SLQ6AHztj6jRkp6riu6oia2Pe5xTQS6VcSzYBDM5ChCDRihiiGpir8Z",
  "key3": "TYxoVtVQ1Abs2HePY8wzXHAEUJxV6HrrAYgQSF1rk6gBu8RZKoWPBbSZXPjGJmdajTwm1z9YuJHqV4rHgqW2f7g",
  "key4": "4CWbYVkg4VLyX96DzXXpEBRrFde5TBTmUtXv1QnemhDbCUJNUdryuSyCBwxPdD87UvZNsAtZTKNHnxFxb3GnSFcy",
  "key5": "5FZjvj5f3QTPydEJYvCSEFK6uqZZVk6y8s3kDXDNfUn33wcGzEU4bemsmMEGnLxasfQGw3UgBzhxqzito8VDSGUD",
  "key6": "2Cx1LeB7eKvLexxaedCfDmfndkXqVnqxXFG8PTynFncMAUct3YjAQhRCpYReEx998ZQTmrLeZrExRTE6Qj8HNvmy",
  "key7": "5zv8QJXXfAEmqAeKJWMvBqHHYWv736NrKGwoDjDMdtg2FcTngysdxWKLvaznrQ2ZFgfw4bxNWpzCeVG3NbfMS2EB",
  "key8": "9WLM1hLs2GFVoYHPDFLTRFUJKr1bAwM4YdAeo2Dm7qobgKBGQwpXg9zN4VCTY3ziaKwREB6UPmEGqckru1KNbVB",
  "key9": "DihSXx1CNELBxggUyJVx7CVofHDyq1uWY3aCrdkhxH1m7NM6Uxcxy2zkQNGPuby46QMdT8YYDQyecJqJxCNpTcW",
  "key10": "4pSk2RRJoaYLsFEgisUXiAS3C7FroQJbiMpLKH4xNVE56zC9VLNHLBqzJ8wdkpr3Uy7vy6wegaVjarRvcfZfMDCX",
  "key11": "SsGbwrqLZBfjpruZcgxDMuSR8oZMuhrwPnKyWCfBsDezpLVEN8NwiZdvDRzQ7BAiYbUfEsM8weUSc8oyaM6iU9q",
  "key12": "xvsHBXPFvRAu62Gcy3JE7RHpGwm2eSND1vBcDF34r1haBtaW1VzXeXkyFj4NQmgqJrdvxs2usMgAEpzYdtnbBmv",
  "key13": "4ntdFVviGi6AVosmwgc3KzA33iv1ZTAz4XYy5xfbvzxVgEknT1ptoR3SFXq7cUfWbm8WZxMjWfKGkx2pADpyMH7q",
  "key14": "5vKPTuHXAb1kHEpCgdF52VvuhK5MYCBk44n8D1Qm4UbR6sGuw1yTzrNmBj7Fb1VUefyDsY2areXgu7MWpp1Hc58h",
  "key15": "2qNG19r84dk3PatQpqrxZQXDa5o2ZEKB1ahacEqXP79aL7fjpWTpS8UVWD9FbDqyrve3bmZw9uSeYiyW5BsUeige",
  "key16": "3N7ZcKUcbdFHsqLREo1Gv52q1v6qB6KVwTmxpeBueie6EEG4PjHxw4tegUmTDnBnsgS2D4rH84ZGrHNpJkzRX56c",
  "key17": "4gLSUwoJQxd4JZgTRXFB9SaJHnwqp4b3nLgbrxoaeX5coLqycivxipmE4cSL1aL1DaK16NV9ksxRYhN8unVNAA8E",
  "key18": "9exVogbbLhW1zRYd96NZeyCCyCEZ37njmdvEV4aprTXTfCm2QU6muQzS1YWmz9ZkiRpABiqqWxybdTbBCYUiYdF",
  "key19": "39bNyJ58A6sUtHWSGSy9ThwGErXCfpjvjeLyiv4MdWk6WrTXuernXwFnEEwUMrHyoqXhMMp6CUYWAhcVmuCwyp2Q",
  "key20": "3YQYDxtAg3rLwP3sxwELsLZ6fofPwRwhHrxQXzpBNY1eAUgDR5pF8FV6op3VPgt2uhgjHtLd1bzWZMHK18SkLpmp",
  "key21": "q2XU5E5WXzdjcGun9dD1dsyL6cSrtzt9ywj9zLQhSY8LQdaV3wwDunzKKM8BXXcqYbBg5R8QoMpkh8ocgUKvKzW",
  "key22": "YV18QJWJdjLRAqN4PA3uZVvodPd7H5KDvwFjhkWAGV1pXTNfggoN1iqvmZXafMo4ctwwrgYoe7eggrTJZ2Wq6jh",
  "key23": "4me14mVRyT7JFaxXZuHJzqiu2NgJZq84KujZ57VBynEtFep2nNZqFiPX6ZhUpshj4jf1LDhi8egsTbnzpcirCgXC",
  "key24": "Tvhf9Zfg8mZDZoMHgF8QgKJhmzWcN1jUX4w4VKnLu88GhaazEZsL2DZDVkcdpfxE95jmkaHhp3WDdKaYy21yS97",
  "key25": "XVRirHGe1nif7q7PTe9rL4JWBGdu2ZYPhBb4GrbSQS18utEBazR13d5Pe8u6xxm9RMZUZuhdxxWQ4zT6Ny9GKmy",
  "key26": "27eRiVwfM9ZU78JxJ4smrYhFiDr78djT1gh1iGzGN1R7m1cjYCDuQk6uJdptyrUq9nZVXcW1PTntwAQSfaX699X7",
  "key27": "5L4mJwUksDsG5EGMCPDu9zsefy27C2JWEYrk8SYZYqo6P9DRVzMYEpw9R2BcJNiGTZhyVZ5hJWDizRoXK7zWooTi",
  "key28": "2zt3SEjL1UzCk4jM776GKFHr9tLxPnfYwCrevVnhs9qpk2yfYz6Vcktcio2dBbB85MEaJMM4xYKnnYB3yPeQH5Wo",
  "key29": "5vPVjr1PzhsAEtFRLYqMfPB2xH1XXjNxGqtnpcrMN5L7XaE8mK4nJRp5MHBsvTyiXn6pcN71FZ99gz8nEn8aGZuk",
  "key30": "2arrPShFatiXxLDrEXeWtax4GuF3Wymo2QKWAgpvm81Vjatcoafk6g9Uawi2rBSQkQVxHs9uBTZHo2m5BMHdaTQH",
  "key31": "2cWcEnfqDYjywuFMkyAAJdWWV7w5Q5V2GkjjYZacoH5GeqcUnXzCXtCXFowFiFprEot5etfaARnbUFGRW47yCQ5f",
  "key32": "47QyCgikdCCT5EQfN8EFhWP8mhBSVJCQ3oD7WaWkanZytrBkAaoPXjGwBaR6zeLHVzWqQui1oZi95phbRumkJzNd",
  "key33": "E2HcJzyMxtAC9PUR1UTPpYqYB4AbN9dWrxqthLeD8WrmPg8GkanEY7VGqWdZgyQnv3cke6NfY9s7MphurcyGEQH",
  "key34": "5f454bBMkdgQtocFQNWe8FvMUZk5LXhk8639hfz28hg2WzPeXdQd2XJkoSQzvZjqxq6Vd9UYLgpiogDKeGrNyV5x",
  "key35": "3vztpnjBeDquSfvPZvPfbnfEjKd1j91U57xtcLu6gT9EbRRoT1gkGMQiULYDGcwVRnA7aMMFiXQ79D9Sx4rYwJ1Q",
  "key36": "xZ44mj8Pk5xhfmCWgTYHDaMtqwN2egNwn7cEHuAJ8fLFphT6cM8akhxjbjyx9qTHYKACbcEThfVBdM7SowgoznR",
  "key37": "586aQpV8m4VYBCkvwaz6gZWdMNVPqZQQ5AxHSGzhRLcYXDx61VpFJKPVagKQuPbtFtjAoXnytAwVEMnK2wUDm7eP",
  "key38": "XRhpxGgwLnMthy6PGeBCDbjMRvD5P3A1MXh2NwwMCKQtq8Pu5Rrzr5Zjp4RwhvhZc6PJDnCy7SdEjWVtU7m5oPZ",
  "key39": "99tX6qAJ71dwjCdd4rRcBt7gswrSN4hcbT1pUkqdDrwANwFGFQpkSkGSx3Nm6apfG6XKbr1ym6DwePY6qwSFvLj"
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
