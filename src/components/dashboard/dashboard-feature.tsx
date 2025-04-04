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
    "39wNugN7mrCW2Hrfiago8JKsLsPbBhbzPF76aRAmdnD8Ryohvo9HJwTvCzafgqfF1gBswBxeQKc4QQ6fL7WGVtgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K56Uz8CjzAJ671MGiU11SeESh41yZA6bb3NSgBKoz63VoTMTjLCXPzNKWSupkVAiuRQTqWzqoYoM4CxCDajwbap",
  "key1": "2QC33o9LiBHwXMy6wi1us6hKFX9kAAzCtQLS8ipKkTbMM9DYKNyvrXm6VgWv236peVQTrUyWvb1WHWTPZQGzN33o",
  "key2": "3ZYeZ9gBy2b9QCf7BzDyA3BPt8DyHPxqJyqW4XC4MYiJ6p4UvMZTQRyDYdH4B6y4UyNN4WxaCr1JaynaoYPMyexn",
  "key3": "4Lr9njTRT9z3eWVAojfDCJr8o32g5m7KUQVe745nbFPTH3deofkdDEy8jmmx7Hsbehekw984hQpcDFaGKfcV8uem",
  "key4": "66KC4xkuvTpm2zwKUCLkRKvqt3agpNL8p31LMzkKCiqZqUra7C93m112CzJZMdnYFTtzSx5Eby3ZXxEy4qRAqcGg",
  "key5": "4mCpHUp1TDCdtYCsTe2wszBGNjW2dEDwGjjPsSeWm6EhmhGJeY66ckPxarBMkDyAfL6rVzuwRiZsCnT322GoKaJm",
  "key6": "2n3ik3SwZKNhvzGYrYoNqMpRA9LXcAQAs9NNr44PV4DVLXaqU4RGWxrsDEQ31jQ68ispHfgQ6CWhr8Sadi7gEnc1",
  "key7": "64Ww9Guo38VH4ABs89x1yYrsxVp7o6iPqn9XPgKH9MTGXt9yjrrXMfCCCvhZTk92PemFAct7gGsUmfGzfb6P7gDP",
  "key8": "2XaCe51qsD7ymSjjnZ85giXXsjpeDoXKoL6na7R8rrZQM14FH6M9oB6UQ9VFjN3erBtTU9wNkAdwbcohgTMfhteG",
  "key9": "3q2LzAZE1uRgWDqJzpAYyfEdf6UuEpGxyvxjV3krdhqYw99AbMhPkLwf7yyqMkv35Uj81hR9yFRBKVnnzAsYq4Le",
  "key10": "38kKPwRUMk5dxtgaqBZkK56V8jtJVre47H53pZxRTNnovmg62hWX8gEHtKq7SwCKt8fPku15FFyuc4TACLpLArxJ",
  "key11": "2po13SCYm1x2aLnYeWxuJPiZuVyUEvgyHCU1cdumHmYGyZhUUbZZdyXUN2qe7QtZQS6ELPPbrmzFdvE2BddgmwcZ",
  "key12": "4K2hQoxFQGMeZ5wFuxAKT9gJefVNW12duDTVWjLKZwY9NKAo8hEv3ugm4FWs6Y6AGczMEebrg2MqppT3aoXoBw56",
  "key13": "GRGeRL6LGeg57gfg69MXyAwAhoaWsjiXZd6iLG5Ya5EgjmFsBLd76kaQkQ9EaDBsbicpixjaEQp17URdbEEydmY",
  "key14": "MwYc2yAcPSZ5vhUFvTFrTvkQgmN2DffYW3X5wFe5hUVE6xP4CW63x9Pi8JLBsnYqHnd3mBJaqpiWxdD9cRLwgWr",
  "key15": "3q9cw2Srzr6YTZauHfRQspQhKyyGWPmGkidnyKxwz1Hv6WWz6T7ThyHG6HBiSprFBtJv42TurcbANzAn7D8TW75k",
  "key16": "4Rmzto4ST63uLxpcatBUNjBvHr1v29mZzKLz5TVBi66QfmNpooLUiEWqHo5uNR1a3yNVHN3ezb3hJkVx6JgizzJ9",
  "key17": "2BZiy6RdXbkq3SX2qMcBaDpCRtWfyqawgQw4Btvtwya4n48eMwmg94cMx7xc68gtS4ECxW7sc3EMidziosgtPHEz",
  "key18": "5Q5smEjPH2fkXicqa92G12n43M75rp2wpBBcE2imr8KJ1GGLhFfuADV4XBf6AuhztTDpEiWnnPuvHwJv8cqAmdTS",
  "key19": "67hRPQ3aFHVsxstdS4VyL3DVVf4DDgkfDSqWJHHVB8gSjdhkdRPCgtjijXco4HiB5ZRC9URZPTZPyKnUTwBtj23j",
  "key20": "3uf6Q28R5zmYTCfm4GUZx1DiQ1buPLKFrnMC2KYAxNzQZvFASiYVXCN7mrEbBA3439DBdnNML9SuZtgEsx9ATXKb",
  "key21": "67kqMsw45xG214FnPMjW89YFEWiSgYM5RvF1Yp7k9N1zHwtYawisuYwttdfm72QY8RKsGvo1BuC9sVXvcDYc1eSQ",
  "key22": "89GKi2WrToNceds1dG47hvWi5BuF7EnHBcVdFayNXkQDeyFZw3enmf7iDqf98Rj7MDEnNKKC92oV3Tychk5nEvv",
  "key23": "2FSiok6jjadP1JvQbfj4M3hzUYjecah2cNuvsDiLHrHmp1wvdDVD3Gh563q9DnDna6mp1wTqUWMPRDU9Wmg9BCYP",
  "key24": "2c19d3YtcqsAuAGJDFxGz3QzSS3zyUPbNyHTtcffxt9nkjuUKhDPW4g9akYMdEcU2wGms8kgFMqAmMQkHRw28Vsb",
  "key25": "2ixmpxHBSJVtZPUDNkZ8MTBzP8QCRYmbRUYXQcuQsgNJfJBRGCdDCh5VUri7bcMmDoeKMcWJRnbnoRxQMATuQGYh",
  "key26": "4QibWj5iKWw7fuNB2Efv2EkkcTcKRSgadmYHVV8X3dqBHk7W5bCH72T6BhQpQZLj3ydQ3CpbdBUrJsAAMVUGsGEm",
  "key27": "4LJYJzJ2xguoP7KbG5MFGLpNBozNRsXDXaQf4Vzh24Y3uuqrVnyW8QJHVMsUYZ9nAg8gFSX4S7iHWWsUvD4iDsLz",
  "key28": "2tWCWbQ4By1CeXK7nFfQdxPcCR8dJGYCvKZpnb3YoEQrSzqyYSBB1W79QENRw1pcXGePTQWGCQNAKsuEB9xuVATo",
  "key29": "2s7tuot4w9GLnZCiUZ9Y12hpvi4t7EV3a2cxzhrphcS45qVBCSQrHYVJaNErEHd2YkWWfNYE86iPQa38BV5FrDcV",
  "key30": "ZY1V5pbVUsuXZnGfbcxc7PA5gM7t63pF1XZf2Hcc6yHrZfscUAvpyrDwgwC8jDbrJju5kancMYAFEBWJCY5SDKi",
  "key31": "2RzFHer5evFNd85CXp26YP7bYMmkpctH2k4gALh28sF5HVtFh6ZYhzXJYEGzJwv6dWvKGszcHCTPpzZe7yFUFYD8",
  "key32": "21cfe1LzMufAmGNQCpUz9MnwZALzadKuKkbjVE2tMQ5LtjX6ryWRhYrLH6Jibe2x9EZaeJmgYEo3ktEUM13oGyjp",
  "key33": "4cAHVb1cvMRNZVY94nzKeodMpEsGRPmGJBJMiDzQC8HSPBT4o1Qv6sJuRhur8WdXr9miRvHeGPdbFtZkP7i6D7mE",
  "key34": "3cGp8mmYZX4dQrxELKXRPyY8LtbwbFpBwp5xoHjYVKWDJmdR1TfEMXNnwFYFtUXXQzpNwLM4Lby2QrgKkxjh2NB9",
  "key35": "3bZgnS6sYsdN3eQVVU18Yp9kzBHkCoz32ZmdK1bAYsP117mdg5813uzhfJ4RFRBkgZZ2pBcGF2FLkd33ZEv3MfTr",
  "key36": "4pZqjtTUtG8pg5cFkSCtzyzJUfJKb6RkNt34RpkEH8E9MMJqahau6XL6JVyDbzfR2v28iX7JZcojbmJR6CJznWko",
  "key37": "5vtafpmixcv9KvYBkv92D3uCNiwF3E1d6Bx4dopuJqNcktF8NCs3JuebSswozapoSoHFkeY8iLuV8ycvnY2D67ER",
  "key38": "g69v7gWpRgCDUr26C2oSKjSLr1NRcHN89bxXwximYhc88vgjdudtMvT5cvQiYHN48NRVXPxhQAjmBpygqZ6NvwE",
  "key39": "2eiDRterNtSg6aahrWMDvi5DuRGhJnTLuKjXicaHAR24EeK6N6t4u55LHXjScEhSGW4qvR4xP4Dxz4Ltj9DgCg89",
  "key40": "22wAP1GX9wGPQYZhQ2f4jWDA9ihBhH35vwHQ7nbgwehMfk7SFje1DAfY5XXE2UqW1EjY22nhrPz1WqWFbSNMEuJa",
  "key41": "WpDyXHxnEwUL1r8dfde5tCFNAFUf5EnCje3pF7niX7JV1yTtidc1Q1mJvihLGcoW5TwuabcCtv5DwSGWzb2omv6",
  "key42": "5BjUY3yBfo57uwFh7xQAWb364SEoj7BjFhAgB7hzgkEmX8wUu6WX5JJeJUnNXD14zanWcc1bRDGyAKMcacAceDqi"
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
