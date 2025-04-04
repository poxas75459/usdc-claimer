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
    "5f51n6cGTGjN3ceWvXaJnBiKh5etUJCWH18XV2UygcFk38HKCrNzM78AWdZuiSskvGAqfAzCtJXkiv9cJKNz5kaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MszhKHTigRnZB9GJGzcNaHEH2PEMCuzK99SMSGjKLorRCBxbXoDpjpRsq4aEaZG9g2aiunerzjgzzqxZ9j8rVst",
  "key1": "3hiC68zaiGBXXjBBAtCBC3ucbXjkqxkkNAJFxP2yDGPaq9khv9qFn7wmxb6coCQ2vUe9F6fXpQwywntQCoaE37sK",
  "key2": "5oe2EefxC22jWQf3GYg4aLVyxG1DigjnmeVrRhSfMFMDrG5LvAcZsgFmeqTFBerJgG7t6ZHGZa5YfhDcc3s7XxAx",
  "key3": "4oX2uKDSpooTmJpL4hqpXLUcXkTMT5sXsNiAEgCLbd3KyhafasQ8WTsN2uXzdJja5tJwEasQEfAM35eb6aUanuDj",
  "key4": "5L53GStt8VDiKT71s4PRTha7bn57uZbauuKqo7EhBGENgwQax6ckEiUt7c117o3dRqRRXBd88LXNez7eATVP9yb8",
  "key5": "4e5pZZxmY3JQYf7pJ2BT4ashePEkFoJxQ3JmUMpSSmnJscKAJG88ssrw2rs5PxHSBT2KSjg54CVN587RDNqGMV54",
  "key6": "59opZttv2A1UUnvYnCsapLXmHPXhjpfdWKRDUfAQBFEhXzdwki3LW44mxYXopV4E1X924vtTY9GLVmFrQm4X5iFo",
  "key7": "3smPcTbejYAkWJ6Tewv2SDBAud52i3LwhdPfYiEEH9TAACmL1f4s9pues5wQ3na53obx8tfj5YxW8bmWTKJTZPZf",
  "key8": "4NxB64Jvm8tun2qgUWKtz1GMpwoRSNhA7JkU6tY2WevP6vn9haBhCa2CrhdmtaGfKVizqDR9jRYkfY9aTXpgzwyh",
  "key9": "5sdvaAMBEHFXxpfTvsx3kJaCDq5o4frhkXn1iTifmN9Ft2KvYS7jVfit22TsnWkstmGZbCgYt56a2aVWSarj8SB7",
  "key10": "R56dSQxosZDGzXfdWFoU7o9umL7K1Wn5YiFA86WdNw8KTPkur9w28RUUsKBxPPK4oXno7p2FNd4zBaQyFHd8Vxa",
  "key11": "321ZHJSpFWVyTLXPwSuQUetTuxu8XGBe4ySR2ynXe9CG8KfwFNsnVdoqJyBSya5CfHt9gbBwxaXpcXBNtNToqQhz",
  "key12": "2kNtKtW13uGNu3K5zBfFfHuRwpDjg2Ui2d9uyc5gPrJFJgNcMBWia9krixnVJJQveyEMVe7YNE94ULbZzNduef2q",
  "key13": "3E9yHXMDhYjw1w725pM6RHWUnQXE1HdsJTMbyTaMX6kS7PS2vgx3qhL4waYArkCkXZeK8yUopTf8BD6ZWmhB2g4P",
  "key14": "54w8JfYp3epufp2gVWERboaoHwj8NsRbWHmHjmnvFekL38zGq4WVfTJvhUHPHEUoHoKrJUxGsgroL4PS4sYvMF4f",
  "key15": "41jEpfEEmJyDvxbwGhdKnaxbWHdFJGmrFNoYUco1xtQmZE1yUXk1kyfzvtWSWJNhA4HN8e8k9YNW4MMFxL4V1y2M",
  "key16": "5nUBTQxMro8QCSAHwswncv4aN4sYRoTYhU4NzHM5GugHh7Gzi51vZQw91nZ5ksQuD7fA9YLGcTTuJHZM27YoZ1kD",
  "key17": "4vkecLu4EAyhqRXDxqaE34HoMoYa5rze538izojJRUCShwYLWvKfb9rRFGf3JX68gRvj8DSK8YuXAdxrQFmF3gGZ",
  "key18": "7hJiyqCYrk2oskrdzARnfJ9eSZBhZLB2yP6eSjHibB6xccBWcDF41DtuH6wDPRtKrd4mVZbbNf5v5GjQebScZSc",
  "key19": "2qz6SvG3rTjDWevigdsdxVWy6SXhq5uYNhFJhAn6hMnrZyo9aYz65szEV14Y5qHpp3Ln9G14A1siJQntSXWA2jdk",
  "key20": "RX3aLUsHunikUeYJ7tAn3FW16dypFnL4xrrZGpncAufaaDr7qsvjfScqLwH3GCGCY7jjE8aAwTcsaWP5w9fXFpJ",
  "key21": "62NhKeCGTEdjTrkF9pg7TnNCN7Mnsgd5EhHsoRTDUaCoy6JK6nbvCUkrrCeB3RSA853R1Kw2zffAUxbc6zoyVebZ",
  "key22": "2ftUFbkfawRHYM7p7tg5JeCnYzf8ep8fic3JBuPw4R3z4PSrgwoUH6YvxiEqnac7zfjuBgXFSdhPKmb5rZtVRJbz",
  "key23": "3QwfhGVXzYrtNuRbcXX6ub4oWsKTYoySYS4PceDhZnEBr5HciJzY2HB5WpRyLjMfKdW4MKrnEAYia6NuissnbHHA",
  "key24": "1N4TbZPZcpuGf7zrnnmaLjimBnjXdb9vRfRVak3j7jJZg8XCdvZL6N52XMSJX5aiTotTK2NJqdEid7SMbrP5gib",
  "key25": "3Teyrc1xFkZB3X2ggqhZsnxwpy3HGk9emsMPQcVk9LsxNpmxBemR8t3YgUNcriEshPSNdFdhrJtcDc2seaP7Ej3x",
  "key26": "5ockvMzLbfuaPSxJ1XPE8Q9SDKJkwEboRmaXHN5e4LgnNFGF5Em42s4fpTVyVMScYCEi5frDiaXQugafNMz9myEh",
  "key27": "49yQJVvFdY43iQ7Dj6vJspqPNVhBbs2rdw8wTeSMWudnLkzevvyLhYyZtJsaMvy11iZBqPF4Ci2C5XJj5ybiKmu3",
  "key28": "2JJzs8DkF1K4HrAC9NwW2hiWYuoZS1rvJ7w5eM1aXtXhkHnzDtta5cA52vsRGdwcJ3R3HwwPmBwGiU6FBE6gtjBL",
  "key29": "2nr9eqdurpZdh2XmwEHfHQxH9QbeQhbmP2qWx5auESypzPvEAGWjoW3i5S4T8C43caiCos5hdd2YZEbSYnBTnNFd",
  "key30": "4e4tnjsMecMbjAj3fGVN9ycihvZ4zfMGz2v4ET9CRJphftmT7Cmx179ZeNa7DwmTwRJqo7aaAUh8L3CFU9istWmB",
  "key31": "2ztyiZ3F8RzE4dv7hdCtP7JBFwXxpdu51fuigNEHwfh2eZ2pgaH4RbbbMC5j5UhyxA6iN8fo9DfEnwfLq4Dk3vDy",
  "key32": "2YVRP8HZFkgZqwqRE8HVADMqosdmuPrAx9aC4cTVbApo4i2xYtwG53p4ZtUEQ8E6jjN1Ao4u8sod2UYSpBLvaw5s",
  "key33": "23L2xBLVKN3hKmK4a22tRTJeRw1N49ZMtBreZAz7hiuxKJ3c1aFa2X3BKtoUoj712iAW1378tmrXWrgajyHtcC2P",
  "key34": "hCCr3275QJBEnKKxLVyPzwxX56TRquvBsqoY55zKNUJntuvGef72j7Xa2jEGTryHGxJt16BbfPv2Lvtd61qbmgE",
  "key35": "4PUKqi4zue7KJ3S52rvWFWMgFNr5wfCkCDomfet3cB3tvCjLkmL3EWiyb9tNCPT9kFyCd2nmS7CKYmD1cpe1Wwnn",
  "key36": "5E3gFjRpXJdyc7Ldt4nDfiNVxQRZjiuwzd9fcj6QYGkmHSxHwgToyTYRdfveWbhUJifhsJB3DNbfT13BCS8GbhKL",
  "key37": "5Rr5HtMFsBVQ2A7uCqQ5k7eWDVHfkix4UWsdsJaP5hLSZPQeryga7DZjVBf2KQmWbWAbVKX1SSVfWb1MwQDvSRVP",
  "key38": "jhoYdtZ9s6poa8TfQbMrt77LuBFcmw1R2Kq8NXXE7gqq76GTsmZVrzVP1tQPvfxUec1a5ar9TEczJdk3Erv7DZi",
  "key39": "2dJJFFmYgh9SgtsThBV6a6NzhrqQPo9e83drD6d6nVHrx6e7YgUzdKySXvUnmWXKBvg8okq9AECkoFJV6bfJCice"
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
