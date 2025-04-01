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
    "MixEBqURJqgsgfRFZ2gXeFztt2Xbko8uxFKrtcDXevpYje4Dq9u6HKh8aCthH9UGi21SCHFsPpA68SgtwCQkfK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27au5BEG6qnMc866FCytHGXgY3yGN5xQ8z4oLsmxBDmX7cCyJtr82mSjLKLtuAqc2MGbc74wq4vGMZE69pFdjs97",
  "key1": "2zciToB5xYMRz1k3rWBdgKJ5R8qmhJKXoszCvYVX1VYXcxNLffZuXahUgMcwq9jKNHUsBSZn2BXA9mBR17QsEk84",
  "key2": "7BAK7wnmBhwPScvFYxNKffth4v8M4Sy6sJR6wVwnZx3hAVP9mq49RBpY1T1TQimEr6Ynt8VnNit9cDF9Ls3NRiq",
  "key3": "5eh3Zju5gLxuQRm3HcZegvxiRPJfwjXb58p51kurj7nUZ4ozaC5FuwawaAmDz84iVCprkkt7XA3rchQ2fby55GSi",
  "key4": "z66QYKonz4jvvzN2vuo5Gte3ihPtnAEg5JbjuYixrY174GP3T6jYDmonCLz6yCNG3TJ5iied1Wsxp7XN19pq7Z9",
  "key5": "2NeFzZv4VwqxUEVQwFur248jTotJgRPNBFpdLJeARezCX452VRwKMNfkLq3TW4BkhNpRLxMWUaqSuSeZ7aN84HV5",
  "key6": "5BdJB4yrnPgPDEmbUuPEqq4SepqFCyvTprs7VkxTYv9uwYo77xtj939uoan1cbRtT3yJ8awMK1QA9qZpmDyfzrQz",
  "key7": "4JXhxGazo9zP12AcvWbTW7bPaGuAumCwXq3NedYEKUtiKTwxkH9anZhCaoi1AiqR4hMVbQZ1B6XP3LNCp2Yyff7o",
  "key8": "5hP1LPMyzvxmnbCfiLrJBQpwoWfBYaXQKpRy9cvHTvCxGWDeRP8d1TtZMbgNCn1nba9gHQzXVBHf4diEJkedXwJf",
  "key9": "6151Dh7b6fqoM5a5RDsupfdMVwBHYYT4GNQNGDZLTb4AAr6vHm83FT2qHRNEGfn6Z7DNAbzDFnDaJabQRj2hy2we",
  "key10": "4mLKq5k5Epf9fz2nSK3pgAyu8T9WdEXAubcoxFAejQHJRzy4HPCc8CEkpVUZs8RiDq3y7ZiL59x4jMd4pVooLNdN",
  "key11": "Uh9NMMak8vqUD5pnKHnedU3xrxCwbakQN92CExUD96wHN69MVN4WmYza3cDxpRuEemG3SQ3PdVic2qrAf5aRT9r",
  "key12": "2MCE2EFmpTv2bjc9hneFLN6kBU81BLqzmix6CgfX1q1eEpECYXfWKUKZvAAA4JFTJqeifZC5Lu5YakByUMjJczqS",
  "key13": "49tUzegFpBAkk9kFUZCNU46tf11TZDKa3MEh1R2JcQJkC1CZmjD1kV7FnTwmFBwiVtGnXqK3319Jr29cEwXEyTAS",
  "key14": "4L2gRGnPJ33TjtqXWnJZdYJwEmevjA4cTom1MsbZXVfp97viXRFaibMxggcnAmQWVZ7JV1in6ctzfxfDAeHTn7NP",
  "key15": "3J4qKrYo5m94XMtHLztQFixdhYPgiRvsKyBaQaRXHQ49jUB88bTi6het9RjWuQ1kesPxf4Qg7hMwSqikgrBVRPzs",
  "key16": "32BcweMhDJnwptuUcVXjD8UHHHHpmTYguEgqkRu1F7VSa2CTKKYXXUPkrFg3kARxhh9zpLiFfxDV7N5WBn1S4RhX",
  "key17": "3ZfwoRNvccDSFJiaF53TBVvNXUeu533vGsT7HARycBjqGoZ89uTaZP52q9xS8wtY6gorxPiH2MgKG3GkLkVuFHKS",
  "key18": "3PDrx6ZzpmCEjjFRBaDohmwvZYVfJbu9XM4y5yesegNYXF4CRtuyTaBeKUwbDruBuD8M1jTXZswGLESbUPdkhBqx",
  "key19": "552PkK8BW6YvE4S821r6AEuzMLbLU4JnZ9bi2NA4MsdhCWmHY4NJtitQsufKFWm5yf3Y9sHSffoT5Rx2RBUJsKKN",
  "key20": "FMmKNBBsqee9WdT1mDpR4ZXRjgN8DMVmqWvSPjwLFzi91esyxT2usBubCFSHwGFiAnGiXLdQzhfqfhSq9Du9QDx",
  "key21": "3PQLZbYNRuNAxPrrYwMuZyLAwSZEuRNX8xoWFkuuANHmVhw3Vr86KeiERphR4yrhDf1Vnb2htYZFSZ3BJAzFBWh1",
  "key22": "27kf3DdNau3kScz7fG1VeKLDuRH1p3158nNC1PqYKfhnDEafLeEfDR4wQLGnstkE3vqeSibgkEEtTJQFCURYfpu7",
  "key23": "zJirrH2W6H9mSYRys5fDxU5JnKCfn5dPYKRGPt9g3BE4ZLEwzAX4iag8Zk4ap9t6f5ppZMEb6yxuiMcdqVS5PV5",
  "key24": "bEaXYJBXBohS89zAAyaYZVR4Zaz7t1DCTYjPhi3RAjbCdkaAYGfKEK2NznAT99g1i1iPg8XdhwgAeGLSRwjRUww",
  "key25": "XjaMUc3YSRs7gPg7sDu8in9gWBuC1dPWYNYw35AmKJdbX7dWQJJ1aGv1iB5E7i8jKNrsjDh33pQUauiYL8Jz6UT",
  "key26": "3a1uCuW62AebtQSqWweNtZW8q7CnP1hLuoVV3u9hy9Mx4iCHgqFjZZcr7AVLr48FDYYwovzbcvgQASgb3qScX2hu",
  "key27": "4dwVPPBAhYZ5Lj4Xcnnr9E72dWt24u2hYBPnWNHjTAk2GKq4p6dYJ7Gn3VfxAyZHJSiag1QYoYiL6jbimStUmL4q",
  "key28": "5jgJ43Kc5ePHaacXUS6C2S1BNDsRbcNq6HfzB97kyLVsYjkrpZsafNZ59KNRPRqtdCAM9uZpz9XPUyc7aSbxKvH8",
  "key29": "5kc5NhFtEDV8Y5goEMXeRW1xdx76xtKAGuYKGxmSHVt7f8UcUZafJSMLTLZXx5TyUvHpedsMzbt4rJ7LsBxXVDiD",
  "key30": "5Mh2YN4uJ9RZjC6ZcNvQ27FWBVyCEQ1DMdcgxLw7zYLU1fcbm2gfQALtgov2bYBqCzRERi3BFw7SjNA7adLa3bqh",
  "key31": "5oWGzt5oFjhpJQtAWJpXgSw14pTRKWt33URWVcWpY9g5zHTygk6ZZnUfULabV6rq2baCkzu7Zu6HLE4qNQb9WKPT",
  "key32": "48BEkwHKaKKKuXjxASXKxjMoL8C3Fd5Zu6pVBgvkCP7JpLrhMbE2jLf9DXcPyzXi3rjvWXm52iw7ZkvMv4ir6Z84",
  "key33": "38B5v9vbqY6SYgqKeZr28E3Ei5SMciGUXwsv7jYpvUaa4uRgLW29mjMfPaJjKhv9X3qPWbxJXQsRX4nKqCEztVDv",
  "key34": "4vvobaokUvHENEumvbkiAdQZNNVkATwFr78xbTJPED52mU4CybeQjE5Nhcjr479XHWFizSrNFZJ3PqLy5ZsX4CgC",
  "key35": "4wPr4WApVyf9KdEK7BxZqfEZ77jdt1YM91Q7Lqs1ZNjDAWSC8Yf673uJH2GBhf2rw1vmnG8jPofyWYEwnRKgjhsN",
  "key36": "52PsSBuqyVKS6vJRv3brhbyiCF9XQVThxGRr88MUNMThLYVqLHWJQygk8tFmYRUkbpzxDhXyh8H3Jn3mtfyibd4t",
  "key37": "4kdvN78XCbgq2ZG8mkGB5pw94d1L3gWcqTTgJKgP2W32n7YEgbnTXRbK1uGJCeSLLJoDDXSBrFMAermdSfH85uAr",
  "key38": "5yKGy6YM1ZrS8KbiohAkTi8z6Ec35fDB7HSBTjWAe6sa7Pqe1uNcyv5Q4UXVQpijHCe1PYq5wtoheRvmGowgS8Gw",
  "key39": "4BoL3BoRDK268P85DGpi73JBFnD7vnHEJ2NPVmkPsq7PBYoWxjXZxFheFJ6x2QqEHv26FjCFkPRoUtLRkmfvwBpU",
  "key40": "4fD1T6XAkqGrFksd1Pgbh95iptGbEEQqwErJZA8nGQzifLKcZAr3tjZFmfzRDiiXGEZ1vw4N3tA658Na1kP9kcvk",
  "key41": "5MWZrDM55FyJemxhphyKmDTjiinN7vdVA6LCDBWFP4xS6bo5d91S5EWP1QGYtweRPBt4XJrjtHMiMkmoaTDLnV41",
  "key42": "3WXyFfg5H7UBdFrNCSApVVhBpMasru9w8yeTUHXoWMCL5f6UgJtoSCS4sGsNMUy64YqwYbFnAoEeqgvNyV3B3hQ7",
  "key43": "4ojvQupsD9TuaUNbsxphw1uM6Qh9SxHJnqDM9rXVw5ptjUv42rzZvtm4fPmcQSW7SNZ8bJKdCQQZqJ4DHB3jZ5bN",
  "key44": "3AG3DVK8cy5zeje4AX6Hvqpe2ZdtTnnmX4FpubehAVBuqKUdU7JZCAjry9CEGgnkhnMikFBUDizksuvn9xehQiDC",
  "key45": "4N2N9WgUG1Cf61JHUjCHLN81PvxQLvWV1EHkxSb36v5L9v3GiANisY5P72kKXEY9uVabBqoqSWpT72huSMDGA68E",
  "key46": "4B6pmLYQdhTa3cMm7qou4uJB5mi4Nm1gSYbnUdXWyHM2GEezbxGVNUYibsjsrUiTk2kgSEBYyR7p3i5AugqYyC4x",
  "key47": "2H2updkhgzULhZAg4khDiVb1Jy1ffsUfXoZKx6vfvibGt2C5AJMdFn2Ar68ehNHiuuk1w3sC3vEWTp86jn7ghYyZ",
  "key48": "2jQDF1oNQQQowZ2FwzCtNxqZtUz9Uzxk9A5XuMZhdTUrGYWwKqyZD87usrpPbSZdA81L7gf9g6C7d6CMqKBytJfT",
  "key49": "4iEeLHGbUBjD4s3EixTRt3en8MEYtzy5UewsUHsPxv8TzVNFsgctDyMhnTVJeoW25RcfV6CCCWgS6Xujdv1cynWr"
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
