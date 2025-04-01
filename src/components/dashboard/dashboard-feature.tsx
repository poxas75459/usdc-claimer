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
    "4JisDnAPUE6xyE7V3uShGM9sKR78z6sPaxK6usXugMGVLGsw453tFD1jEp9reRabHF1JT9VHj8kSNt3GstRfHN3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBd1vmndjU9TgMwbgR5EDLj79CrkknxcyZesirD4dJyoqcv7YW8Wpcy5jeAFtDSQ68atESWVxVQYDW4uAE8EYY1",
  "key1": "mvv32UgBdgpa6jHNBNVLnmf5cTNmwqdJD3nXiXjfgNcySFYcsov93zMKsjUNoqY2iQqaVe8hCuHsXyqUKQUdVZZ",
  "key2": "42RBaeRtJD9pwMk5WL9VmZHBHNNvTeZcsRkwGsTpGhRwKW2WX9imj1uQagbYpcL8mEyz99mXq3Msy8Kfxom6UZZR",
  "key3": "5MKeCTKxqU81u1APWYmqQ4YEMZn1u6mcVxZpcqRP4bBBktkmVMB5qhXDgfJ3J6bqseZ9C7WvDdYqRu3fXNjggNBG",
  "key4": "3VYA2MxYvKBf8tHStwaTfib95Aj3ghxno4s9aK9sRmNQQK4NNdieSfGNsbSZrLjY7WBFHRbfdg6798pjFx96GKfT",
  "key5": "4GHf15A6sxSMGDNfQDp6NmzrgwRvxquY48RhX6AN1EwCkeyADka8kBWUA2rsBUeQ32hSQSGt7owJUvJf7nPJZD8S",
  "key6": "5WWoAxQBBTAKZcHFrZyfJ5qsTV4dCUZ8csrgBNGabBj2iZ3EUyhPT3rcrb9X2M1wn9JGiNZsK7gw39NUrPUnZtin",
  "key7": "2K3BDC8BUxNj6B84KkCc3ASGowDQtPEofp1wrKJ21torutqVdcmd8gLJ8E4iVPNYftqGCLm5h2QPVV1D1EJx7dfR",
  "key8": "5yKrJRM8ovjNJAQPZ3FhyaPmpKjpeqSHhPjeVVPmRQDSagSDXARoHeNCtXZ5k5DPUoyWN4PeRrXDyUgWUk4AquDz",
  "key9": "57oLdczU5Xe5WT1RdrH3D7AET5g9NVai6EKgnVU9WCVPSFie8rKmKHsakgRpnNBMK58unkCW6zNutdnvaiAM39hF",
  "key10": "486ushxwfEAj6jXEeqyGCjmXhRsu4fqpaYsdQjoNXxbxZZaQqV5qi3bnVu8TNRvswFP3aogpwQvz134wA9uXhQR",
  "key11": "465kn6Jn5ropbNahK7U96DgdLQjHkpcyBs1vwR2rXYvBXxJ2jj6qRdUCWoKQtCcVkAtthGS7Pz6FH9AyRaDesH2U",
  "key12": "2q8ZeiRdoQ7FjDBhSZFmGToS3eHfUkArvdL5v7CUzQehbyuvUB3YTBcMAY9f5CXTiGurSuJxELHPMVQ4b9AUYV4u",
  "key13": "4Z6utrFCVbEShuqGueR1yPX99rb8j61926Lt7FHGnybcFzyQ7VDaLuxkgaoKAHJr8nHwvLfWEjQN6mHBMrkGVJcP",
  "key14": "3ncUmCRQqWZ67q4rTm8wmMkW8Qpku2j9vDj7DQA99zc2iQrDzctWXMb6rszwaWGW4MPA56W7kd6RjYUqpQnXCLJo",
  "key15": "2eCRXVFpzuc8VRP6sB3rPoGTXpjMr6ifJPULbiYdHrZgtKeCUoZYPYc524Z1REDEn61AxwLH3pGcGeCUu7CeW3CE",
  "key16": "4f39HQ1dso5wM2VshFVBCzKnB5R8ryxhnRE8987ogY2Lv23fD3HzXVT16qYT8TUWVJ9ptYdXWkJUe8q4kF5VfFSE",
  "key17": "3NS9p3ujZyuycCfUmu9NzfTC3ZaexFWfQzmkJqz2p8V2Tb2MHFySEbdGaBUNgXeWYuJinMjkowPNEX2nNEDNrydr",
  "key18": "4FMS9B6NA36SzXS97tJbz4rJFPWyaYqEFVP5NFcGC6Hv8R1agAbkDxGrvSWEfVR2WkNYfeAEsdn1VkoQnCKUWA1v",
  "key19": "2UT1atuJ4Tr4hASsU9H1NsgLR6rU7E9ZZZ7oSEQYt5V3LWNsegELYQJZiaXvGZiigkLogT3RRU2rKWAvySfPR8XL",
  "key20": "67aZrkJpR9m4QDCBJJnetMeWrsdPLhzi5sirizf3wsq9WWvjducdmXrymdV4kjr6cdcYRr9prWNEYNpqH4L3mK64",
  "key21": "4kX54GhCakMLKESuU3du45JTGhThjv3g5KL68X9mozDh7ErJdTtdMDBYCWJbU8ziYqyYofzPEsw8cxeHpi8UwD9p",
  "key22": "3qkpQMbLbbopsmmtx6zpjCei372fQkoH13h31z4kqx8mhSVZEDxdcejQJ8moeDVDbSMVazRzfNZPR6hf8orCtpaw",
  "key23": "2VhNFa5SSSpVNvBgxjEgTK9sARXH933pQrpazvVGSCvUZcNwygG7ADcPPscQYYjqM179d9kPp9sjRXfi4HUQSFre",
  "key24": "93yNvvwCn5MogjYU24QLZvaVe6WY7DZHQMMnN7Jgz1jgxR8bpgGitWXfhGjayHvehEWBrpdkoq5wGswDkVoA3kV",
  "key25": "4zRXD6yf4YSNXyCyeostL9roHmZMQHn6KdNKPQooQ5LGbF9fDN5cbBCzoVcXCbSMEa9JVaE32hDezo9vGkXdNHqv",
  "key26": "5qKhaFiuqfkYrZJSPXHA5vDRe3z713FJxchD1Sqj3xfc1YQkczjeihU9FEzfTngWV94JBQy1kRRfJD3hRVX8UKnh",
  "key27": "2EgHqzHTxeG1QrTscwT6ssmGfKdsJhVPHVsSZcUkQMfTXTVjNUL5bUGG3ubFPJ4gATqNacm6pwybgZWFS5Aujkrn",
  "key28": "4458MCtgZh5jxxa4seMRx3d9mKB5jQfCvxwDtARFAzwAAjANx21RSvs4ivZMbMLUGL73YRvrcpDwjPH2yoWNNMuJ",
  "key29": "4DchfiYXpicxafkEfzpgKZ35aB6iEQRVLcgdNDFdQDsRZ9zBTtcF6kY3Jy5yGBNJCHXfoh41Q25bAjBCcTgZzbef",
  "key30": "2Q9q76NeyaAVyKVj7nUGKo1nvv8va8wrM9WhMQMXNyhX7u3yFEEjwMVQbZxCHSDaMiTXq9LJ5aKGMiJcHYwWmpAz",
  "key31": "2qZcjFFQEWtfKpgCTLYRSjbHnrLsYr8yazw1afxwc8JwQDwXHsAH4NZWcvSpZmX3H1A11N8idHPmSy61oGhb3mGm",
  "key32": "2tTucW8czcikhwZ5zCSFgfov3QqDxB7fmTA4rw1nS7b2nNa7GxRGHsQC8vYHrXY6eecsUyQ2bkmRpzR1FU3adMZK",
  "key33": "2tgq1wkhthgtFNthZ8UgdJqbBQcJiDH8QeP7gZoYwXLjph5TMVLXKMoRwzoXZeQAPyDyPyUiBCaTdssKSb9tde82",
  "key34": "53sT2GAzwQE8p7fC8irNyJpTFeJ7M6yQSkwwTuqQbBzZEFm4a9xm4oMwqQgFBdJhnYwH2gMqVdnRscDBHpYUorEM",
  "key35": "2YWnt4YJ1S7VLS7he4ToqeGpqFrhTAt31dE4nwa7CqqGr5FqXK7sPUMvgcKe5VbyzUpTWQ8qdjiNqt3m1pBMfstt",
  "key36": "mVawexE14Ph13ekKNYpCzfVewQV6HJBf54SyUHgtCNys2kfznD6sVwNxMhv8nbWs7Pvqv3HMGvHJNcQN8WVLjj4",
  "key37": "4AR1g4HYioribsAU9tgb5G4uLpBVnv9SHgfuAcYMACAugVxetZeCqcNzbi83u4Wmc9j4PozLwmCZe4EiNs4YNMQp",
  "key38": "4nTUprUbyD5xJt2663j2WwQZHHA6hjHQhNNzKE5ixCiqG8ihdeMiQDga4bvjVjk157dn3hSRFXkwXirp4BCVCGpp",
  "key39": "4cahacGvmsgdXkqRHhev5p1D7ag1nnD9j5wcgzQhiHFR5guZPmkDyHeg476H8z6nduoM8V8jhJGZY55iCpSBgvCE",
  "key40": "4J3RVMcUtmymqFVaNjp4isB4r54NrLZktdQLgRV88q8N27UTWxnTFdhM29i9LN79U3wansMrSwUNmhGCvUYAeaTP",
  "key41": "3LuXZCBWpRkrJ4EqB7avtG3T6fg4W8TMRc1GUqvNqgFGu5oFvyiKXhX2yHV2femrivrG74b9ikHg1raAYzP5RdgR",
  "key42": "3LNNwSFfGjY4A3wnRW2yWap6fi7iHS4rNRjwoQiuzrwwggsY4achm9WNpvupjj26fUombFbX2Yp61PHnzg4BkspF",
  "key43": "3yEGVioFyTrU5BQ2DLwXe3bir9YX7gBQoKi6VE5y4xPZkjGSpABuDDNC3Se64iCH3KyNC4JUmioK9dxYHCot5t39",
  "key44": "5L1iEdxa6ejv24MTHU7pEDE8GmKMgCDjheAcdoByCmLijni43ePfDxcNYT9x71Bk2zf7AMHMyoELtbD2m9GKnwVZ",
  "key45": "323YNG7mG6Wo8H5xVjdh93aovM78JNKgj5GGBYGhj11snc5ZjvpMPs3VtaMz4sYxXoPsqbPo1xtFRQcPKTFeqZLM",
  "key46": "3feqj9tMjoAjrGVKaekbjNm1iLio7ajzW4QGqpQLGrXCCAKrmkRGWDxYKbgi2EoJahxKarXi2RnpYHkDrokv31Gt",
  "key47": "4CxB4Shwfn89Y1eqXefoSDCAeYYox6gtqc3Hera3ERHQS3TDmQYjVqLPdyJzmX4HEC7yg1cnBfez41MqYtc8ZrQY",
  "key48": "NcC6iP1mzarQNtQcixMiRq9Mt84SwohMEAwHJDwBqobhnEhBuUomcVzkUu7x3BubErgTdWZYg53boEbdYrRTLeb",
  "key49": "2BSVmFXfw5qfR9kyy1dMjFTqQqVhK6VHqgHzh7xTBdkvFe2Qdx5Mswt9gMkDZLv1iM43B4yPyg7oFLLYqhHFMiuz"
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
