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
    "2Q8FHFweTd32TVdXGJT1JbSZrDsE5MnxeXWos1w9eWCr7AVW8RvBQrLNq3UZVLLpt3Fw8Pmqh7Nwe1rgTK4N8sjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6ErP3wP4B2fgSwKjMaV7hU1qPaFCqtwmUR7c1MsZXrbBGQV7PFQdg12a7T2zEwXwdteL8RzxQPnvBGt4e7KVuN",
  "key1": "25bi7zs4DcGcQHGXAq3v3qh3QcdZHnXQjMNHDye3j2xcwLTwYLzva7Ao581SLxgLyBnXpXCuTcQYYEonBMAC9NcA",
  "key2": "42VrAdaghTxM9KgUEn967ga9TLeQC1scCpoA6CZc82Uyp8sDbauXSQah4Wnv7LD8fXt6q2S8Z9d57hRch2tvioSY",
  "key3": "3ftPxHkYyKjHHfEK9B2iovn4wSjLxCHLhMB5NqzcmGyCcYuoZ6WLWonUbggj1zpco9Qw4Cukm46SWg9WQiKF2G4F",
  "key4": "4xKzu9WFeHWJydmx9KM5FzyaCwHnuGj6jc5dCmfqEedQTSAtN4YSNPcAKh3kgurhfnxpjLwBKgtzQdgHHV9NZ6Rm",
  "key5": "4GqV6GvPMq4miWobiEG92vCnAoxiT3ehaCWLLPhDNTRagQsnRKqqLDn7D5FC2EcYNCGbjB3tTrx6MNnEu8vC6Xvk",
  "key6": "3KHmEv8huvW8JfBTazXkD8X964Ue96MKUYMjGxyJU7Vqv2xCTrTSD1u3h15ZmP3yKGNyV8fnA7ishomN1BaKAjwn",
  "key7": "3Qp8BDvAvp3h67NvFJCySncb7i1Qt81ie9UgGbN9Bv6aE8b44zmmdSGMjCA6HQg72BGtJQJLYwD4VtHFvYUkibZH",
  "key8": "cs9jGh82NzUN6oJw9N6i5pSz7SVjDNtjCQVxLUMscP28vEHzNzk7EzanRbuB89bfKpKdzU4GvsELtbkkjaTCSU8",
  "key9": "2hThoezViWXaHTRXxe6RWaCpXwzbPzc55ZhANrT8snDS4zvGaSw9WBRBwkGztzU258kdCdCWk9xmKYC4Ugh2Yxdm",
  "key10": "5T4YtjsSRmxyPPCJMU1WhsbNLQG26NFhq3Ffte1Mnq9zmdEj3bCbsjQmRfapoViBxbH5TYDdSzzMFAEnvXBp4Eqf",
  "key11": "4ZFAb5Uy3hECyYWehGWqMFcSESTc1m3hyFqLJdNVaX3DRLb5fXMjQthHAd1s81Z2kqw2Q3WiQgXDLVZBgF8jLqPm",
  "key12": "2xVMdA1Lf2LDv9wd5A4GyomCkJ9UqPMcH9Z6FbDZ3S55g26gKGBkc1Was84BREsb1MkZJyTivAbG7JNn5EUeKz8E",
  "key13": "4iTYipy3uLZurBpjjPsNDQkQUzWiqmjQmthDCe7vFNXybvzVELUvd7wTNxFVQNLH32dd5doEbtsSBAywHaLSTcp6",
  "key14": "2oV3ZH9BGetdKHYim2GeygB7cXn6BpUKHADBgobfqZSUKyFvPdLypBnWURzgV9ZMvssUrneatSLbVw86yf8AomuS",
  "key15": "2mUr57iws1CfxMboQCTKjrrm6NWwDisnHcQatuxkD2Bv7Ab4xhr9uqyP36MN9pSf1HEqTG2U2tediFiwwYFrY5py",
  "key16": "4nmccSSzEzZkuRhtf6Jr5ZM4UcPDkoC7Sjm7A8CyTiBpTfCrgijCdM1cBb8ssMjwFMritYjyrjrhxYpmBV37g4bv",
  "key17": "23xDTcu5eAz1pvsgo7TQLhZ1EyvaxNyTMsBbTxPxQXP5QUUpb895ziKmW4GoJvp4rhahcg96StPtXSPFYAXgDxzd",
  "key18": "fTWhc6gL3Q9UsAPhKtbgnLYE9Rd6ioXwcjgYXrCCoHfjSwCYESHrT1yhSJbPEC2TnQTmJumDjmKPa7MbDfgrmdd",
  "key19": "26qwoQnGkm1HUqN597fvgs8mENu5BwJQy3XYU8if3zV3UGbiNskiSWg5dHrZwVFwr9G6jeCS9rw2pEsnLoZ9t4pF",
  "key20": "Ls9h1bwfbmehZKKnxBnEYA2xdnKU4DTqanFPf9DYrJwFggDz1dCEURXK6mXDPQZQadPpRscjc7LwHUxnJQ2Y49S",
  "key21": "3E8foTPDStkEhFvYuiHSNjXUV89ck38BfRaFSTGQgxPKFwwczz9HnXHcaLBocvPgtS5349g3iiQYQDjAjU9cqtSy",
  "key22": "2JUcu4snU7j3pesxJCGhyCt5EMZWsMyXPyZgjGWi2aMb1s69yZ7kruAB51t4Lr18FJWhzwWPXQKmxbiM2F8SiV4a",
  "key23": "3V2NzogPC5YzrKYJJr5NBwqN7T5zYyKK3XfmghjXApvMVHNJm4tRNo2RZfzTGAWH5tg2f1jCa9M6isha8n1cqswT",
  "key24": "53J1gPLF1At7p58Z7Cpq6mHxnts3aZ7j2yNDwcHtgkDCTMFcigDSLBkgqQ6zh4MMkdhBd9doMu1fKrM2aBr1V5Xp",
  "key25": "3DrcqvNTinSFtECL6qsnLp1dKzGmhyPmPz2459ckszi5CSNTHU3k8pW2J6eStEogVn2HYEmMNyVsMQ9foTMoU6Ye",
  "key26": "2V3K7koVVVyus9NVfjXnp5yn4BzRnhrxxVvzydWQof465usoihW3h3NgnQigonveKnLXnNd6MgdypR8pW4Po8mP5",
  "key27": "316C9rW4z5wcCVwYFKD4bRftQ8mAoTDGuiG89QaxWw8fxQPrwYsBZLEhz5gdqyu8EqQtfM4PLQGaonTfMh5TRiAq",
  "key28": "3aGZdKxBRcRYmB3Kx7KzjqVhdetzJUERWMciJs8ccKfoqkBq8f3FeQPHggCMJ55qxugSFQ3LiUuNv391XEJ5GJJE",
  "key29": "2UF7kj4UpUhNHgqygn2Y4DKhaG6Xrn1TZqrYv2LrrZwzoMtJk38yP2of42Gn9XN9bURee85g79MGZnn1gqiYueww",
  "key30": "2awW5NpXLdkyGEwwqpSTqsRvC47Hke8BPRgoy4EzAT4XFM4ZBStBo25wE7MU8JYgHgeJpeZcuE8UpTroyQ4CHFWf",
  "key31": "muazqXFh1pf5tmsWt9kGWbvuqU4Y5hszmBXYszU4jm8fwJYbXfPpcZAqW5uFbayfv5gnF6ZJPHQZpq6SkAktTHR",
  "key32": "utuRPymu8NfpUkahFT5262aZqDQ5jpqcJyxyRnC6Hn1vrdGwMKnod7w2xFazqR52JTWGunJsW5iE6qM4LaiuU2R",
  "key33": "4tSd6RG7odnt8G8UhhVU1zRQsz96tw65Fsmk7a5Q3MCjfcbLKU1mztoHHxb2mUGu925yhs6DfgKvRKCW6AfQ8AiL",
  "key34": "2ZhyiTyBGvSPcS7up7wWiu3QG3hoCNnfotDaCutYvxkN5oZ9hmnac7JjrXfhYDaCsY8m98ep8KoR1teHWm7W3LwH",
  "key35": "239zNCAAAGJ4MHizmNRT3s6vzu2cZR9W6sXDQdw6dz8mtgRavsLktCTW67gtWoQrARfVSvZ8nJxREb7k3E6yjwtw",
  "key36": "2aamLRxnh5xLPyxHPNan73bFN7phoNGNTxdSE5mcBM7vsvrYsNAgqDF9dC6s9LQondRsMW3obbX8KRZTMQomfRdb",
  "key37": "trtKEbQz6GeN5UXu2YNc67FX6snQaH6kb7UTii2eHdbhE8u83i8kVLyqYccFXhTBxbHhxMSu1fDMLpTyN4CN3xw",
  "key38": "2Gc5qvtbkGd5jnrRPdstwoSy59Ev6fbad6LbkeP2EzV9idkB7NKnxXm6eXQjpKq6VXpV3a6wovWMT6FJV5Bb3LLE",
  "key39": "3PikfbYrEJ69JjZKYFHMRbKWyzYo3FtSi4ML71yDfzxhp6DzdTGE7NUu4TEQcGAiJD9GEzGg53pmxenVNazPk49a",
  "key40": "33j2V4ezF8h59nd3oYurUFGHD3fLoo76p8yN14RSy1FrEsHkjXT3oSTD16KtR9A4ZqBrZuUVdufoCveQqH5EqmAj",
  "key41": "JyQBxAGJ7bL5DDFdGMeBgSbL4X4t8Bb5jWLymXgxNFUPY2Jvv5oBFtEfdsGGFATsqeo9XSiKgnF4x6tdCPAQ4Df",
  "key42": "3nxjW8aERp2QwLgydnzd2AvnopfHFBB1eYTHAfLhYZJEDwMk6yFqaapyjQ9Qi4WAWZiqmUvgJYd9wUXYMHgbkLSv",
  "key43": "2XDNMAdAyyDNzPtd5bS4LcZAqRSSWimhv2AWoEoUcuXfD6Y4ryrT4mcX5GLiYSi9o1d76ZaTpPz6qMk4xxaooUaG",
  "key44": "3msbaT248SkUycxStgLpJVdCcgbvGDDRBjjfZPUiFry37Fx5cGPFXMcexdAJtk6QGrZKs8kKLyRpQHhppr2MJZTw",
  "key45": "7DXWGnJR1BSeCVc7JXpWEL9SN6QDzvw5Ry7GDg5avrQZ4VNJ5qvz1uEUE7DMazNVw9TbQnbTx14Ds7aziJ9xpzD"
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
