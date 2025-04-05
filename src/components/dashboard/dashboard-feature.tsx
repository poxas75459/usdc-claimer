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
    "gCASZ3wUQcFARoqcGvkAnscrQzhCskhgkyqWzvJGpoPAWHECrcH1us7jU28MWN2BHW2bSYvuR14u4uFgE1DrSYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFEzYVEnMxBTT2N1Ab5xLYUyVixBBdxSAdTAhQq3KXg3P315nW5jBF3YXCiuUF9WDSJseJ1YeRpFhUSn4NKuVGd",
  "key1": "622GgQBf6KQ2Pojau9gJBSWwqmKrrZFDqijarRJThgLLy5BHuPSKB38PncAe9RYm8fE7aXFkQSGVn84NUkqZg7uo",
  "key2": "63kbvtWPQqQVTWQa6LYZxcGcrUGfkC8ZVkmMBbmTV4eBhfzGKPMp2AXsq1txPYFn3MY3STec2ews84xoRdr36bx1",
  "key3": "2iisyRadp9wgbSkq1fJ3a52YZnHX8CUjMj4zt5sAgVyWZmUq3pDESVmmSBmxvD22hf6YUk1FgY2UngtxDFrjgTKw",
  "key4": "5mGWyJBRjNS29jrM63Br8n9rsSM2mj6fUGaayGK9zeFu3C8EAnS4S9BZejTJyttJYqT7vUPzG1bekKYviLKfpt4M",
  "key5": "25rv7ywgi8XpaojAAzaBDaPnExnwekLD4pZLsTQxJHdmM8sHfsynV4ffHvEJKxhuP9FagUJVAtL7Z4VDWJSpN31q",
  "key6": "3Jj4o9HtB77hXMqcfUUgJyfECDGxnCT37qpKD3Sfhfr7moCohYyfyTtBBEA184fpKDTPtpCdY8YVydHCnkaFywW4",
  "key7": "2LYTvHkuXTULi24d19ubrum7r1MYb9qxiSH1hiNgEVPPE2ZXGxPfom3vr3gQWrdLdQ84mW8sd53iwXaiEVALyUA",
  "key8": "27UpZkM3dKC8AYYCiKzRnT7gMe35KMaKjQPeNeabLPVedBry4gAqPKhX3Zf6pBQcJGGFe8m2RJCmjWsqAHf6uzuz",
  "key9": "sdpiajvQsodmoa6EfkMqNkMGVn4wFNkdPw5ZeG7oNAUCBK8kETRqgpBM3LB47cQZdRwxRxrUJC9VCNq6wwsaq6M",
  "key10": "3jkC1NQiuVT9StugS8x9ybEe3jcSPhaLuaXkN7wDmpgKTJt3z5wEvot3Vn2mJHHB1x1p8puuaAMmwhihwdHY1h9G",
  "key11": "2Ldj1vwjmhfgGWUrR9qQHFYVLkfspfQ2PXnLFXWAr1oa36H7ZqAUWfN5RdgeWPBBhCTt4Jzf4F81oghtEJHyqmgW",
  "key12": "2nY64kmwL5ZxYS7G6AGitSPEGg9UWGPc88rbkbL8YNQ6kxByPojnTRb9kthLXa9thVbBJjYNGvUtm34kCy9es9hn",
  "key13": "i1NLQgsv2NiEpLtWvGe9HcKA3vKdzquSsYmZLCqbmuMjgx7DNDrjXZd9FSbBtiYQRQVVLkqSs3A1kno2uG3xbVe",
  "key14": "3h3ExooQbgCR8Mhi7vGQyAcmu8Rp53bqF5URQ7hrG77Uw4M6gZe6vquFTXQgafqPwTV8herzXGwarAcz91PRrXT6",
  "key15": "51wBDpCZgTey1bbDmoGecp9awx5AkCAVhR2h6GeJtRgFnQC9Ho151NTXfa5YZCFzihwTXEGbYL121HSjFqZVW7zk",
  "key16": "3iyoxpB8j5cE1on6CFwp85M5Ac2SVcBh7bgXnjUwQq9DQQHJuJMEb4FH2CDuJ9jHjjf7rsCGLY1pUjf2NypmKtaL",
  "key17": "2EXZymk1uyKKPtpqfLCCxUFj4Abh1aLYuEevYyQBJ82eNAoj9ciGFTyKhxCuJBTWw6LGXGRJVdq4LDWNTDzoKQGE",
  "key18": "584umeNcPasvxfpb6DaqwAPbbHQSWhNz1GbvER64LaBuZ8fRPHR83rG4ua9G3eZfMJLmtNz37zjfRpGo6G5qrpv9",
  "key19": "28G76dTL3KAVbSwo2tR2sfVFMdqQXyV7t5i6VvEJyybHb3S3SdnNSy9T6gYxTGEEkcMhtLpFqR7uXVWYWMuUCMCX",
  "key20": "43XeH9d66W5dNhRiGyKM1Q9acN5qamCQ8YJXyHgXPfNgmTYnXVtHPTGVnbHkk2Ai5RHZLJNczQCZMTKmdF4i8e7h",
  "key21": "WRxrEQeNgxBmkYvFuUJ7fhA4YUy6R8eTN9DyDEeVYJafLrZSvHuedY8aiJEtPsuWYGYG4SoJXCCNYs3bafJTUKD",
  "key22": "iLKa2DsmMABEDUmAdT1VARmowmS27h3FZTLdqu3Fg4wQZXpE51354FVuGFtFebWwwfgoETGNyymtR4rbWLe9zNQ",
  "key23": "2o4g1xgd83kqr6Qc1CVjiynLTGNmq5ZPhe5C4ednN4EUTpy298R4ueD51CZshh36WLJevFTCJTbdAe2oxVGu3gcf",
  "key24": "4XRk8DUn2k7ygRRRDFju5zuPjAYb8r97esvwgjffMVyk7NX38fdvg5m5PzNppXL3FJAF2X9sAVwk5jecs349RfYu",
  "key25": "aHYhdQQ699gPPEUhVwpSNBjDo2Q4mFCfj42uVMyYteowxf6faTEnsqsMViMDorxfRPhF5KfNDGBLnUTAUGiu4yy",
  "key26": "589FkS8JhFPpiuwBLnL3wguCqSMhiNiwZWyX51onEXfRZ7nPuFmrHbwwGg6Sr458shKwqyFQ1wLBQ6xi4atkbbfQ",
  "key27": "3d4du2Q6ppRUWgrfkQs4cNEEu1hJeGtkEAzYSVUopbCyA1Tvmu4JfXcuakFLRJpYXWwSTEbpDQevL7S1PkpfeT8D",
  "key28": "66jdUhM9kr6y711uoRk8q4AXhECNfWiQW6Ea9nhUMs1ZDWyiT2Hndk5XNEEE5Z7gWM2ULPEVj4Xc7VutpT8xh41n",
  "key29": "27XR2CCqBLJ9n32D6FfuY7fF99cuUWx3VgGSaPfnw1wCxoPbKPSrebKaoD1pSVLf9AvwgeucwUUfHeYNUgeLFr7Y",
  "key30": "5bPWaoXQa5wHnneGgd7wCqVPPUVF83wDnddrqwb5zxBQZyU35d6qm4pQTrDypxuoea8L7ZVbCVxm4tECBaeLFksm",
  "key31": "5jUEu9ghtiKWFy4xwdDbqzpVD3PS58FjbSKrZvEtiGQE2cbGjMj2gRFeUfaR3veref7kGgQq82BBuUDJuGtzzbcj",
  "key32": "yZDqPVXmJKQxQwBua8dPPxF8UVdYMvhHNswu7sUM5prSXgKZferP3KwqW2onfXXcvCe2kr19HftcBfCb4vEH5ve",
  "key33": "ae5ze9EScuvM2b9nb5RV9JXJ7epx62jpRLXk1gw1vTvVqnDGmahJ1kZfjVA4e1rF8sfGP2Tq7neqvWmrZvyUfjS",
  "key34": "5WuhpUXaqETXGLy2uKHFLGc1uYy1nbETjZPk89mvAd4QjMjMzDZAU7mMEaLdnDMXQouurNT4iLLisgwJoxBtyFi3",
  "key35": "4A2Tdaor5hPoXu3z14sUMWYhNJigvn1AELbs2xvgt5ry7XhvBnvcG95QK6ec7SfQxugCbAyJeMxtuv1ZskJVEMPK",
  "key36": "2yvYZuP63d5wpGo1v6RGW6BEACeKGo2MLdVKjJ75dnqsYnXhaL71z8T6KakAxdij1YfZiUvy73fd3xHmRmf6oXzC",
  "key37": "65fSu7ny9Fu5qtPAbXvw7vBYFy7fr42fVsUHEEhBam78ZXqoB5sUbeUreMcUvGee3j8pJjZBjYU2gACfiDdB2fsB",
  "key38": "tGFTFrBtrhge6BK6swYQXryMttZMo9w9Z6prW1d5yLvQ5z1r3wEYR9FT24H334PqH7cB6dpmatTQMrL1cB3tLjz",
  "key39": "4ukCAZD8x4APFPDdXgKFZKtKjAfYwDdzwyeSYKyJSK3GW9SFYJhET1PhumAA69MbgaxtX9uZTtzkKvTeKWegGbfR",
  "key40": "5os5D5GNxP5Pe628jb6GscZ6hw94eCj2auQG7NjHPFab73GXJwQ3DWxTMDG6PrzvJ5feZpqqSkKdoc71XdBTvVe3",
  "key41": "wamMWdZhiAbWK97d4HsHBqcGFYP5sQWMTCE1wiW9gwAtRv17Rv69b7N7zd15vBbPX86ofKTAoxLrLhxRNu69RkA",
  "key42": "o5zwW54WvqUGSJeAvdoP1nx95Sde7nQV1PgJqkXZtxqhDDVUSbhb5ZDMXakXgUyYDRDqDsFzkEkz4uUDoFqqrgN",
  "key43": "oY5EwMVPpt2B3Pgw6p37iCpXXjQ9Lm9eAMKWPTjMwd52EcyrjK8LXQ4TgU7j38ncBdzwH4gsMzGuK1ki3mXe3UW",
  "key44": "hYCVdRiGFRV5o31L5y1r46JkQP7LzT4bbqtoVL3e9h5MTmZfTBLeswpSDqUSTB9TntYArbAHBL7BWsHRda2fnjL",
  "key45": "3tzkbvvC9GJ6yJ2YQdj3JHttC2RsarAJBHSdFm7H9DfTJLEki8fAKfmY8aewvKaHNWBCKrD9yickhT7cGLHwyxLn"
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
