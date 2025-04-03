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
    "5wP6aAGGxUu9ewFM9D7RdAg9x81JzSTkBeaiKTwEKtJUk23vHaJxypg5VaXtr8JDhPTb5wfQqzhQBd4dfWRwYcSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUJcdzMEpYhborK4pa3vbpeMe1iVn5Q9RCDy8xii6YhaEuwvScEC14USeREGKkaFtmyUobEk2vZYNBENBD9n96U",
  "key1": "3uQTY69B2NcKQWWcA5ccEZWgbYG4sgAMMA7NfY5WXGvh18FJwk9pu9VrYfHhAYFDP1m6kS16HVr1V8ktnxZfYXhD",
  "key2": "4NFLMf9FUVDvgrSSs7qi39DTP6aKU8EjV2CVG8UQrNT629G4cJEtbeojVCeryTjDLtQToNo5CCrh2S2Npj2QF8p5",
  "key3": "2RujRDGt1oVZhKCYu4yxkzpMjhyugLKB3uGDRW7b3urHSTwcVghNyhNfKHLXVm2zqgDnRY85dVgLUC2gVCf77iVU",
  "key4": "ksnEo2seXjTajUEotCfpMW5hGfPbw58AYRpn2CKurh2afpjWne3aFeXNQju2X4HwqLLqFMVcCmKCBBy7qMmD1ut",
  "key5": "2sqXX71XGxc2MVGryFdMWQV7YgjL6wUvbaMe2nBY54fBXVHPxmx4mtFC7mxWMwMeWU8pwhAiDbqYEzzXUDpqsBsW",
  "key6": "4WJAKNYG3mUB7wuvykNNVDCknGqvGwmCgntgYFKe4w5ZwiCHpVWeMnjro78Wju99JYP7CVx1UcB96yDndzdUw8EK",
  "key7": "5qxxAerW28BAg9qfKtnuFRmm2382sU4F78A59845at358X47dd3ESHxq5HFpySJwkRexFKzACT9Yx9wrZmEgHtk4",
  "key8": "3ha8iaRnKy5HVnT7uU9MrHw8rqTiJdJiv9oXpe62nGR2ubxWPW6VxZehiQqvm796hFZfv8JRqd7N8kfjX79L6YQZ",
  "key9": "BjczEnTF5Lcoj4n3PrkGur2CQJjKbHpRGNwMxU9YBJAGFhHGNPZYHfpHoBsYCfdsbv5HKKtkC5eZnLcd7NDfTvv",
  "key10": "5gLaESDzFJhoGmSkY1aU5tnquEYZssNdsdu7NuMQmjrHgdSNz5dFKM3dVrADTE3NgmY9HbMD9K9FeBHpJB4JyE9e",
  "key11": "4DWkZN1CpnaVri9GgDN6tBeNQTiVANexz3vHB6zZH5uB6QB8MogjyR3pgcyQACwc1w1vFgtzimhY7NPzbKoNqMck",
  "key12": "5QWLBf9fWnVU1i93wiDABxM7zvtrX2LWSBdXPvjNgr1wAjExhBU356wgzC4sK9h3aJR6J2WFQ8zdWKHnF9bKf94s",
  "key13": "2V51YbP8Hk2az1aNTedN5k7XwhHYAUY33EfodyjLy6Nwzn997qWMqvdBqbPS3uBhUCtTXJyUNA4MgQyKQfpQCYzh",
  "key14": "45AynNGPsBJiJyHqLSdxhhVBYnEPZNGo5s7N3deaokrdHN2RsA6Eg3bggpwXYFDcLTBQTD7mFDnU6Ztehz65zSHE",
  "key15": "2YMSfXKT4gmwtNTMEbQnS6ZJfFLgTk1PftCL6x7rkmQU2V9KNHB3SxkG1w5pyvr4XszFpGtThkfQY9WPcQ6cVPAh",
  "key16": "2DY1fGUXCEqjKkKqVTeRxzDA6QU5GTdWv2MsS7QPJWzCw91Jb5yuPCgoZRxvXtRThiUS9EQAeyipstu3wG1pgh2o",
  "key17": "e7brN6UicrrQJ32asek5CGdJeGgPV8RmGPh45h7EYNidmvxLo4F3qhn3ZKNgBuLpUtrRFoTDAEDMzZM1smjK7WQ",
  "key18": "2zfQoea56K9GN7dpzuyqYrQrLMAfnYeEFYPdMCh2EkAXksRisEjX34S7oHMTAuRLWoFxKhndNPQn42DqbDRkMr5a",
  "key19": "3L92hm8EHpCC9D6kVsPoZNb49zyqtHgwre8jS3uGPFsUqLicgu6tzrRLayLq7QE3yL4HZB3U85UJR8brrnZqDk2k",
  "key20": "3s1aAxcue8XtuzbLRTXMjrxxbi5PaMkNGjqvTo2Qqw7E8zzCiLiSztVGsvadKhrXM6FvryMjEoDXG7aYd21Vi2dN",
  "key21": "5iM6VnMasWvzUsTq6ZrRZh8H3i8DcWwpGrAn9S8PNuGBjjmLU4qJfAEJ5CTEkPbxMNYsd3CZtNxirmATsx53erpF",
  "key22": "3oV51Fu5yocLT89yZw4xJ5NVN2A2jimKQXKfWRK1f9FWnvY4i7zdxhzxwPHN3iCu4KemkodohZpUJrGiag4gkWGa",
  "key23": "61BHU4y8yBxVevd2iFSo9d8Dcd3kBcDQ9vL9uyY2seLtwH8S3JyaFGBNJmZ5FhyGm4uaDKqkT5pan5q31wQXBzjx",
  "key24": "5PCxSCHq6tdAWH4VcZUhptzpYqVtfeFcQYmvhLojgTaRSfiWdUeeZFSRSSRvVLUX7vR4DiQyRV14783Hci7zue2s",
  "key25": "4rPg7AufGL3JfXZbqChz5fYtMfjUhS7VGDCQhf5Qixhq7uydxwe6T12E6NainXXrCoQmtHPsq43VKbnNgXVWzTnZ",
  "key26": "cCpsNzSPckzCxiTgxZN7kxgMTbGZWP4fJ7sH1Z1uRc3cEY5VKeXu7TY7UCn9s8ibH5dQJocxudJQFVwqYv9j24b",
  "key27": "3k7H1VUnRWGLu9iCUnyUyS4Tky8FwZSTRQVD5DhhU9WDxBtwxcVVtzvE3tNk18nBv5sJ3pvxQEx1ufdsbDuQqSDc",
  "key28": "2GXF3bga1Bi7KADgkwTTi2AZXrxFFXawkUSSmyPuyHjdY72aVmFvt5nfSWrD6ocRcvp4zFGEphdwcrTTFBtYDgWM",
  "key29": "3SXPVHvyWLZwxb83fSxXiyoytzH4RJ8zSVB6GBzhtVUnATT6pcJyLiHWjZLJdiDaCxunyJTtDCcBkHRVd6jfELeV",
  "key30": "4Yr1y1BQk8eVr9gHXPpaA9wEdC1AyBcpaQ783fd2xPTg7hKn9PyGQMFx1kmci43boEhdgmYE8GxrzNUaF7uEqrJF",
  "key31": "3EFaaaoGJYRjfqa9Vh3Kx1pNAPuvMW4cxYAZtDLxNvZvrdE1s9soxMpoGUa3g9K1Sm46EGucSjkgug8kNFGPL9AZ"
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
