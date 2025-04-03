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
    "c1kJ1BVQnMhxqXizjiafxKXQGdLy1TrHJSxTyyoQAGYhez3Z4NjDsCsxtxUACzr9meM6JbvSEaRvn9sFcfXQz4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i9RtiQo39N77dZfqyMXfy4n9oLEcs1eWT8XJpiNWSf3ewPWQojHFrCnvVXFKWDnxB6rQrXEEDAbfheAFwRUt789",
  "key1": "3nZPuNdrmNUnuAEZ2dPkRoFcEm6GofWsvdas3QwQfVu7GHDEVib3oQ3ErgqxcSFDfE7MXQiNjMbbtnhpY4h6jEhB",
  "key2": "w5ueAkLMMAXdy4FKKdwPeommKEzEPdpdCUvZ3KDCD1WNP9EPj95QLQAq89QSYpw8dVAwfNjzwgACzCyABm4TDRo",
  "key3": "52Ruvp36RBQbstY7SQezF2bSKJb9vNY2tCJFY7gNgKh746URtPAJTgEJ1CEzCJBtm2WKKAnUNJNbVTjZpQQ2ER8a",
  "key4": "3J16BPhpqWv75G8g2F47J3fYWeJ2dh5yyLVq4MJRHfrgWk9rKVqNW1jq25cMJoLrBJtjAL2MBCrXEafKXs8RhAPD",
  "key5": "3nrLQKdf3rvhbaZE2XNsX16gCypTxw5KZah7Lx9sD28Nff7of1Wz5i1sajtCYW2dYwEV68oVi8ryCDeF9Z3oyoPX",
  "key6": "4Jpmh1HJZsQS1mfZQRXjXk631C4SSuLcP4DGRuT2ZcWaYTXdH9o7Ui3cKXGyXmk1R8MBvxHHbKuoYSfH6xpusaSq",
  "key7": "3zB4snxam662FQFM9oDwHqQqVRsYgsr8FnbyWsxUfdt2dDhqSEqPRvnc6rTRsZbref1vCkGdWq4CySu9MnhtVGME",
  "key8": "psBQyMprt2UAKpNbjmwkdyJhPiPCkeDBvaDFRVyrLWgYuWajyiUBwsm4ELvH2Es3rYcwnaRnqaSHqDpNQeHpmen",
  "key9": "ti1j6zYSXWaTR9KdcpJZv4QTwog6Q7v2kJdF8qGWCrmEohDUiD9UxnpbKp9bzME4DdkwRYf1asumXCVtkTywf31",
  "key10": "5fFzqqjv9G7M2D8driyudG6vUNZK5o2kn8tn3by26PCHzKZFqidJ1rGF9SvA4FZnpCF89GwZxa5cj7p64iUYvBhj",
  "key11": "2rMyW3UMuxnPpfwot7yGRSMujnTxMMZQ9BVMwFvYe5G2wZjWhHpf9n8zscFQPcRLvc6tPbV6TsJ8d5gk3pWqFrhD",
  "key12": "66n5wH2tkVxQNwkrAKtR4NYxoZra8hDEg4UemUyauc5nVwHpVdZNd9urJRP4uXGi2haskEXypEmgpQkbseeZoCnJ",
  "key13": "2eNvKeQkwGAMQpGQj9i31ZTVtoRKs6fKWcPQhvrDxYnLL1cVVzLQASUnRm5xQSZcn2yJA44R1bniiL6A8SHx61Sz",
  "key14": "3EGxfCAgfeRUtetR1hGtP68JRBYUdfJB5fAT2cnCMaxBxGuXZwKxBF1p6dJTQQqLYWQ4jNF8CXrL4mvqqeug8PeB",
  "key15": "3m5UrG2JNP8ap6FNJN4zMNAeSEPnpiv2K2u2HG1kbno72dqeRwsTBH1WhbTZ3KyJTQ66dft7wW7kDqNdfdBUxZ5f",
  "key16": "4EfyQ1hinQ4T8dr8ng3MLUgSAwgJigDqdtbhoPKR9Qkwq5AsxpLyKSnSD54zrEL5CkomEXB5zCnC78z9NuJKvs9N",
  "key17": "2bga4NuBx2f83t35DekWb3Vhni34PCMkovjHzSt1wxU6hh2onq4WzTBU2zPJfAK9xvkLZkNyDmHptfGqnTiasJyM",
  "key18": "2WcQpW8owsiSxrrqA3tuFBiaMJ9e58nj7xyasVvtm9y76dHEb22uetDCsTrv6z3JX8CXMPrs8NU5FNaghGUKKttw",
  "key19": "3FCohA4dmExDANZZGTeNT2pNaLB8PxyyFuPSGboAxB8sk39WXW8bRgVp6kyfZTX45nvD9oXT44fXNfEkpoQzekXF",
  "key20": "2ymq5sfaRjw9JYH7gqarF6JtowHPF5AYacuA6ecNDxWkZV1NiYuCQw36cEB6Kh3t2cDfz3KcJQDS7hk1yqTHHxgy",
  "key21": "3bn165iXjVVm2t84p8H6GX6V3umC7wbLfhLKzDdsPixRqGBgKP4DsdGWj7ZbcpM3U2YAMuA7FDsfxdCjejkzP4Hs",
  "key22": "5pWi8Wv2S6YzK2CUpgSpH987jwBxtKuJRMYTAWQ79uGynLDHqAWniZMFB14ErfUu2BtmkHc5rPbtKnvu9axy2UcY",
  "key23": "2gpBWSzruxKx55enMx6ebuYSTowGfRE6M4tMbLA4CMcrQePBmNGvjFpqaHnDxW7YhQc7QoCbGUgdmxfiSHdfS3B3",
  "key24": "bWrkBJ7qoZtikEak2vCtriGbfbTeD2ZTkJ6LCTcsYcP2VpP6zjy2fbtZTn1nLh3J9TP3Z9a9ZMnoaepFkx2e221",
  "key25": "3JBvnsnZHuH6JahwUAqybKjT5cb2dAp6VTtUTgYcX59pSZp2Rf5EkxZQohPHs9MAkbbKK5yTH7hNSQTUz41VqF2u",
  "key26": "B8aQHKw6Get2E8yujB5ta7Ag1bgXy4X8CDKqsvPWkC5GReHdbzTo74pTgt1ERMBnxTQgqbQiTxdZA59MMUn2kQT",
  "key27": "3P9VVA63wwXbFjcEyBGziV4uh4bYefTqdz9SMFGN1NyptB1J4uuBN93LcWQYpF9vzt5qocJztM4fniaZiWb9BTcA",
  "key28": "37swjcGb8EomUUjyVTNLbAHvVr28RgZ5PTMfzqxvDK6pFMuUz7SECPegvzyRrXtiBbnpjq3f9dBqj3S4WyPWUrbT",
  "key29": "2s4U5Q77SEtq9PR4PUaJcrAsQDF6hMDtDqXkSeSMsewB5qiqcoKGcgqcHwvr5mjiRqbAuLUk8DnjbsEejmGEpFiB",
  "key30": "5u6UsJ1J5B4VwQz3eD4APiP7yZTfKjDdUtimDhEdrTiJdmmmthaXua5AXLBARnRQZpWUyM3UkEWk4nYvPfvutsQo"
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
