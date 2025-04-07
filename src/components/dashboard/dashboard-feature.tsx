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
    "65Qdi98XF8LugsHoAvagUXuB85jstJpFCmRWXrPipsgKC7FC8G1DQuqV34VsfkNvPLwYvuRT1qSiLoPe6eqHy1on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q22G714aP4mqxUdt1cgqQimb65c8o5hFWdAN2pcwXp5yF4UNN4mdxmMhv5BAq4RfWoMk6NHvF9hDZojkis6CAKo",
  "key1": "4ysDWYqt7MJ4DC527PqUhpdSFZUoy6TAMEy7zxFQU9ixw21SC4a56axcbZx6wwgVzKbNSgQCZWteDkbu8Z4Sfdub",
  "key2": "3cNf47rg9QCmHNqJhUR2z7iqpibuvBxncrQg1EVHxaS8NReMxysdUBGxbXxhMYwBRG6CEib2eAvsn2Zf2AQNCizY",
  "key3": "pPrkfcRf8jPXzW3USPRo773p8HziyUUvf3TwEsATjHrDQAGsJPe683U2kqYMAbwGRssxKsk2wufDB72EZ4VrZfm",
  "key4": "2sD1dtVYFExA8Qaw4ZckXKfF1A7Tza3fS1jjxziUpJEdn7bd8WAKWvuUcJcq2Bp5sp62ptXZ3ouq6yaE2y97j4EQ",
  "key5": "58VcKw3TnAGP9QXytdzV1T2ESt1hJ7xn438MdScPfV5UfYEqhdHg2whStufhrbwTobgJ7fVgHXVvtpvXAw1ShKyW",
  "key6": "3atkz72rMXDwtxQ4pfnZTxsH82LAu1Zzy2cW7WU2EcV32bRxjytSB9QhuCn4QdeNcbRC774fqNWqJDCJHbJt4w1a",
  "key7": "38fv4XEGAtf4kaw9HE6nSvijkq4eShSN5mFSVugiQkSVkhWKhYyz1ywuaoNSxZNx98cfs9VKjVQ2ide83oFvYyK9",
  "key8": "5M1zd2YMsiWyXpdbHEP2sWRiTwAS9T7o3oebExGGxHWhddzxx2dhEgaN4JyVaFs8Zekw6z9VC2qgsvfaKwvdJw5p",
  "key9": "2xDqNzEb86S858vPbFSaXFu9bxJnJXjSc8udxBx7JkqMPH6HyYcPgBWvTE69ppMMqABesjJNEeCvWYJLs7cw1ocv",
  "key10": "3x4sfFqn7EtLshzwB3AvzXDhv7Xp3nFfVhLaLQwjuGnFbR3CVgwY9x2UsBRk16wLY7jxEmDd2duSStVSKJyhXT9M",
  "key11": "5xhBn44RS1az5FAvdbahi7HgwMRX4f549LPVstZUL5WM7hrcxQruRf7oRYLLN1XYN3EcYYUDZ6omy6c9iQHHcunY",
  "key12": "5Amn1L4XHDduBvDMwEEErmVL21HktTYt5BuMNaTvaF3bY6fF8ZmYfVNZSzf2aF18oZDghkgEAG1uTMZYsHGPjQA6",
  "key13": "25KEwyhSD17d9DRe8aNtnQYytWx9T4qpCfaUgmf5eBqixsxeX4Wi3j8rUfPgqLNd2GaT9YU6rg9f5bE2Y6CYgnZy",
  "key14": "f9iirjxLaj3soVaJZoWhPZu6Fkiiq8pr8gx5Waq2ux4BdKT4V99FLEptvCSswhZpCBnLGjvXCGurkLKjUgMVaJC",
  "key15": "4UeMQHjDV9TovuhUcqDZAbtHFnkbE3dbfL8KS2vLdDcByZGbhUJmEttuWJV1FCbCwCXW8429yBdvSFQR3soJoZ2E",
  "key16": "8rg7FvS1y3Dz6bAbLpKVCQAQBwfZGjvPTeVa2ScX7tczJNxvZU6NpBJy2u9UQvFSH4CkZ3ZYbgDHXTpqKjg4yHM",
  "key17": "4UdsgVSQuYV2UTnb65275K8xGWr1HueS2WVs6nSsi7ymaAbyXxkePm4zzh5wuNBZXud8TzfsuXrewj6NW59u2UcE",
  "key18": "2jRUA3etvsx4X455ptWKYxoooN9fhMADWwQNWyrYeLNHqhK2MvMS71iZcW5swbP1wwrEozSEFKZxJmQx1fejAxWi",
  "key19": "2UcqqSd7egoSCirHic1Mhz9DS8MzreZqdno5pWGGK1Y86Hbsfw6KB6QEF4oa94UauRd8RtNdg4Lknarhh587fsbT",
  "key20": "41SmkeB6K1ogJdyfn1ELk2Vy4ZYxEXwdZ4oWr2G2yQHJxtmJL1PpkYabS3qmKh4REstauHnAVSh4SH9WS7SiC64w",
  "key21": "qgfCdmedD9VFwLSMy2o15fXGdG7B6XMgnkYKvRtkC2XteSEr6jrgsVrxo7Ncn9aY3u82jYBA9ErBsNANkWiNdZY",
  "key22": "N1BeV9rHgLyAqHVqenDuYzHAewjstSnDbUWfA3DeYAFTYwpEz5e2bKefi94cDAXTM56R6Z2jUMu22ymLP6oLGNb",
  "key23": "3nJKbeDjKt8x5H26LvdTyviXmbLqFM3nzbQFY6gPNVdjXwpWhhyySEoLcQieUVLNnijMni94aw4Wa7oby7mKdH9k",
  "key24": "3QJGyhSGAjzNWxJKuTMHrhnAvUWBPCZQihPdYApdYRdsn1zvh6iwsGADenF6UJ7fN2mLuuKVPhdYRuuzSNZjMskw",
  "key25": "GhWLftwFZ96ydhX8Vk5wF8X6SXXFpdRZgfitJhuLipkxSkfmBnDpBjFhudh9GntvWTXRk9vB3m78X4kQj9SNVyR",
  "key26": "4u2SQ8GJxpbX7q1Y3tiht8tmp5i9qyDLTrfdR1sKiYtAjtH8326XjaNDfFwDL8ViekPvCu9cAJKCe4UeXinB7nZV",
  "key27": "5va4HvXg41F3AJ3ZBsLDjXyGoD8xHaksEHR9Tah17zqGJcEcGH6mB9FgHDhyQx8Tss9g4pSqTF5rDKQujTq8nf5T",
  "key28": "4jmhT74EXZzVx71Qf5s8BvJqdJvRaoCTKf5uu2G4HDrxRmudzsGJexCNWGENw83dUP4YxxFqMViciMxxTHv8WRxG",
  "key29": "3fUFjZqAi8QS5L2r46VrNPc4Lf6uekFtk3e5cCF4VhAYCA7tzhcH8R2pe5rMfv2DLQ5RLKEpziBMqmxWxW61X8zb",
  "key30": "3RugYuuU4A1VZmwjtkeWCCZpYyy3pTCa6LZxEHqf88FL1RPnsmiZ2XSt6HQAwNMmSo7nsjJD4SEZE2G6bfNvuB2B",
  "key31": "26s516p1HUkFHkA2bKenBq2BZNCk4DPYibfWz1g71xwFEGZCrHonqf2ARxNKkknopUAHUh1Czb6jHn7LHvpZ2NbQ",
  "key32": "2U3zoBAW75Q6UsNfW57B88sdwwP4CaJTqSUR9U61hn6uWWzxbv3pRm7bqfRKKN17p4WZ5udbER4DtgGQ1Fc2WmJ7",
  "key33": "2CiukwAeGRnn2weFo89dcQgcLW6sKZJ6n44kC6Ym3uB9XnqxRNXU4QcxCqPBfmwvdejGvbN77JBRqZPUnRbCKKhi",
  "key34": "2ThpCF6r6reXwCSPaChGbgRx9XvdsoQ9VvwLdxWdmxSg23DeH6X3pjw4zyWyF7Hu21Fe9AUhG3rd53TCk5fr54Jm",
  "key35": "TmfoRtCnVeTAnUQd34wYqSFD65U1mee3y5zfNy99vVnxJLfMmL3HcNb8NMYgQFyWG7vyBwyDTGsx4pgdNWEu9Ci",
  "key36": "44mdfKBPbm5deDdgAh4yZvywVixFGNFKmWTbyFE1coSsscavjH2EvBx9voNqy7WFpH7HBANNTCbkwwK6YYLcKs6y",
  "key37": "jZis11X1YtCfss68pAhwRrjSPSPLTEceUkeuAScsVmj14HBNGzhti5WtiRQUZMW3iSfjWCw4gKnpfb2pWRX9cCM",
  "key38": "3tFJUaSN6T3KMLnQYDJhdvT9ABJP2n9YAaBhm9QsPkqftL3EVn3ZT8jeUi2BzQdsiyGSAdMwzraXp5aBhgzMEWQs",
  "key39": "5jAP3UzbWHDa7WYzJxUGGiKUrWcaYhs6iLMz9dVPB5FXVV9x2SzGtKVmkVdFEk3UVgoZ2LUS19gJkn8B4JfR7rrJ",
  "key40": "3mtZA7Uv3KBsDPQiBFD1Wi5R8LhCCizror5tH4R3J6mb8emMgyz22AuyvC1VknT98BheMYgX3j57mFUfHtGtTx8X",
  "key41": "2zUYakzQBjUcWPVmSkRA4CSjWFGSxiqyYxbSZSB334jPEaqWyFhozv41yM1Gp7nba2FvxTGiwJeUcmb1RbZQikkZ",
  "key42": "3kc7PKabE5zvxCtzQNt1q6LBr79BorHHzYnaWSs6CtaQN6B4PdzNroPW3chEM4FSkyHghUMjSUHEKK2JVvykAUG5"
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
