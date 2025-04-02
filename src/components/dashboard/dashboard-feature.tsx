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
    "4cZDr5FKxNLzkSfWQgccsp9CiUV8SNfzD1auQCNramPm37EjFE38e2ofFKHtJtTLLdZmsT6a2J8kFUSshc56wEb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FuMLQL7jaQm2F5i8tq5uyh1aYpDoNgccggXVZhZzAYmuxZbFgeKwasnNjqnBUMdUvWzfbpfgmYJFwCSYtHQ2a9a",
  "key1": "3AxwWZp7bj3A8PRTBwo9Rg72juB2Cp4xa4vAYH4EVNfN5iZWebCKr61nBtrXKi7uGT8arnLUQtE1N4d92qFUryZ",
  "key2": "2mDVoFRbvvd4eAgFChxa5i8oUL6V9cuvHmrYEvTy2oY8nHKyYCvxiQKXYrzCaqSUVDDKzTWYtNHEZhgWCJCEbqD6",
  "key3": "2dgjqMB9ZFUYK3c8Ga7Hn1Hbo2dyT9o9MD8KKN2QM1KJCTs4dN4kApH2WHBf3H5hETw6r3G2f5NLm9zohGj1bByE",
  "key4": "5CLD3TDHW6o73Ad27rFZp7LiAEVihjDTv9TvDUXyPLfTPLwgPfcvwxiU7sjbxbmb7YEdqQ78HA1jyNA7KmFRnT28",
  "key5": "2JrdBa8jNJT69Aczu9dWym6dPGRhLQmopysGLM7Qg95CdpE3WWFVW21aMU11QKTRgxSKwotz9qxJV6bXkLb3PeK7",
  "key6": "2CJD3TodLXifxC8UH1vuFAE1yVarWxP7qobz8QPYoXJfyfzVgD55TCDWTUhKuSBRRzBKtnAvXHECUVnj4HeJqkhr",
  "key7": "A9wLJzBX7j7xbkkwzsCDj6gyZxSdmscx2RC89qqY3xS6m3iX3K9CvJWMffeBJRx52qXKiuQGsi6i7wsBVqH58N3",
  "key8": "4uubPLpsEPv7xmrqPZBHGAPUsqxW1yTvMKbVCvSPgWxsZ3FvUDz8CwCbKqaPwYoP5tkK1XYPc7yLvsbnERYwW5bh",
  "key9": "3JJ7mR5xq8h5eJYN2CLqY969vREzoFV8Q2wh1NZv1hmd531d1vmmH2Bymt8Q8usRdRBys5XeeVm6YZ9zNdwNsUey",
  "key10": "4ovEHfVGs9JSiAsoHqRRwPsnfH28ym7s4oGu8WiC3GgB4wvEb2ZUSJvw6wacL81YXnmYq1hWAiuVquY7d9j8GQvj",
  "key11": "2ibaEYJ6SJ7jG1jLw3kfc5xC8uT8PD69J2rrT6wynpuFkFuxSfrrbEUkNbxgnodMX2uvUos9Zco1ZY9JsvYx5qdW",
  "key12": "4EK3x3k1XNQqw1M1CrNZ5YPPnyWd9DZZi1whPz968o3TXZb7ogPb5X1mnyq3me4TH4tUjjvNxAGgvq28vfWmwtZ8",
  "key13": "4Toa225dkbyF3sJs2ZRRdAUScDeQkExhoxje8Ck1odspnBpXDEn9M5APsPe7pjzMnevmggx7yD7RnVMVPkvB7RwJ",
  "key14": "4fs6cp8DxQpHLKcuzmnsnawLYwH6cJcGgeNGkoVpNvFu3VwNxR877ibDiehZi5MuiQDG54evgNo9t1zbLZT56Hdp",
  "key15": "XUuEesWPDZy4yF4P2uXm5DyzavuXzEdaHsRXnHxHLE9qbPYr2p9SPdvp3PChP4kkzJuY13PihjNrQkvZVBpy8cJ",
  "key16": "2o4aT1gZ81eZWYktwCUg3FWUjMrxn7Rq5R6MdGkMSGyrukbpkYssgZVF68jE7sYrYJkVkEtJUns84SPk3avV4ZUg",
  "key17": "3oQG2aTbA4S8vbM12He4vmj63fDKJUJB4dZC96Tm3bxbK7KPqXrEWs9FABaKbrR5Z7ZoS5uTvGgF7qCyr4rHn8PU",
  "key18": "nPxBKsNk596gxYAfUWuWJMEgUw5wY63QXcnYQxLJ7bbApSQkkRmHo6jHAPXiJJqR1yKqujLFeKVL8MT2ScRtxrJ",
  "key19": "jisuDVjDd3L6rg6Dv48EdzPhRcx4yTVK4xyrqTfiNhYugNRJKnJGm1GDVq9dwXrAuquw9eG1vKnKXzQhCXV15KD",
  "key20": "2LrdRTDQ5JTwcwDkHRLDhWKy1VfmWoMG2XJbFyrZfPq52w9BF1bmormtR2bqkj58ZzhrBoX7nFwyQVjBupD2YZEb",
  "key21": "47Xk2pbsEaNnQpHGTFX4kXez7n9HquiCd8sSsGEXeaEDt8HbV4q4ySFsHXCuuxdMfuzVcozcAhS2Jy9feP9VDeMt",
  "key22": "5iuWcMJv2cBRj4pCM6SiqfU3cNepJDfspA15YosDTC3q7AJ1Mbvsv4TL774QYhtbWixciR83HbK74WR7S5WeMAx1",
  "key23": "3BzDUU6eTiui96XFFYvahqp36pb2cBsYkj74XsjGDYzyU7FDkYprHDwLU9KH7Nb4XhnYteEZah9rcqBiAPchJoWe",
  "key24": "58MDALcpDmwMkFnWyiXi3iGTmP2epRPc62cBTiZKdguYQ6tohgcYiA6RuCrcstLTFgefrHRoys8kL2f8zwPcjfi",
  "key25": "BDrYbgzug5nogxE2RoYN2sM3HaXeMcFdXcHrdZVoBR25JYpc1MBKYs6o5LB724A4yywMw64rFfmRtA6PyPM1d4c",
  "key26": "TUKW8GDm6WikMfPJ3v5GJDrswKhuMXqjd3otnZ7ymf8qvRn8bRNXiyCHhcXqe9ggMGjGBWxsR5rQJMeZ7etvSwu",
  "key27": "23MPh3M8hLqBqNfnJZRC1qtz4uqP7fAVkGrhPsNZCPfHtmv4LYZvXZYaizYLtcRZCKQANfo5o162FuwrsZ2t1JRo",
  "key28": "3r6F9jzgz5fiJKhkxLjpqYDK2CbUgagCtyDLbxEqV3qFE9ZyQrwegJKGECtGnESw7ikk18umZudXhSXkvcmco9Em",
  "key29": "3R19ygRL77jcnDZHSsnGBUfH33neWi7pdHRaTHuhSti1ph1vA3CBg6YX7JUZCy4W4PpRbTYCBgxrC3akN7jaHwKW",
  "key30": "44mCYTFCoP9CbpVct1jxo31W3WuMCiwwh7pVnFRTBx7kwY9PxfHhKjLfU6TdYtkLFiZCd47nKYDe4qHdsoHpUuCw",
  "key31": "4j5JUF2m9tivSmoKmpWR2DW5tDjHrYjWFDcDePmDbLVWZ24wkky6QSR42xC6wnJSwVTWRmeiFQhVcuDQh3UDQ14q",
  "key32": "4bTx5H8WN3cS4257BiZmAo72QGagLzzePCKiUfiUerZjDrSzFyGmanQCChybwX1uoaeXt6RTDGHbkehhGq8yk94i",
  "key33": "4SZUWmsYtYZvaofovzkMxRaLf9UfPPtUhyRSXGVrrsFcx49o6UYHmbNaErKS7LNtzY842ASuKVLPGoLdeGFULT43",
  "key34": "49TJabF2AVmZQYFrNuqiJoGzkrFHM2fJmhurdjNpexn8VMPqvjTLkBcZ4HHLKmKrehu96osMKJYYEeCNhWewmb7i",
  "key35": "2KJp3KFVWGm3fxrbv22BA1MVcWFyaDZpSPFVUpZFDwKirGf6YBnwUbbSpe7satwtThZ9gcHnc84PmKokPkV274Qj",
  "key36": "cXYRAvapavNntN1EPB2tb1xarkPNDST21nr3N4qQc8QNxx1348MJ3X7Dne4XPp2UGByZTck9qpFBJotudmcUqvv",
  "key37": "572WZd1GkDqyzbe1cQdM2UVrDunkFH3gWdUEYKUup57ZU3rFwR2UL59PgRkoVgnQqaFcL5wSx8ddYGgVr3KET3WT",
  "key38": "2H1XjQ2nsM4zEtkxqpFLe9d46xkgviUh4tgtvjUAEEVawrPq5uP8pzdCupz5Anusw2x7LuPrEdAFsVUfVABCqwEJ",
  "key39": "29Z5UTBxqLzBRmhWhVfo5afBq3hjbJeNRv9NdQRmHt9m9MPY75tppJXu8MFjvL46hwtz6ZcCHPuHorGeCPCyfYMr",
  "key40": "3HePeTTvd4pjnNNWfFPBxRuSs2UiDg1tNX48UXsZzuHDvhjwYdaamRDzKSR2hCTkYT3JxFw88HZr6Us4zc2tUbXM",
  "key41": "5dt7Adh4La24yn2tQSHDjpXGLhaqiniLiG5qsEzfPPTagNtHa5r954srAhrX2c5TVeActgqokxVmTBnuuNx8Sqd5",
  "key42": "2c8cPcEr5xAyocTz4ZN6PzQEkRmc4NHph1BKgXLHTnXEWDxBtuReoAD8i38SSVT8LD7YSg8SgQNJgjzzMTj8dEAC",
  "key43": "5eJGkdVdACw1d5FJsSfCKFSW8JysP6XKKMb1cCCAhLQFodS7rDiJyCdpiP2LDVjihGvz3NEcwq8jUn6gSEaqCUX2",
  "key44": "95A7jQNUBg552opYdu92vpBMcDm9R3yGdeQ9JFt5F5phPPZL4vVdn4ThCta3hwBo9hZAdYsJCYtJA2i51yyPPfM",
  "key45": "3c2MLedjxvYL6xY7uuZzpS9Fcpe4ypn4MNnJWzqPSnDEcVL8mNdKCF7bq9TmpukB2WSojQHNiznfQF5QMgAuAqjw",
  "key46": "BYVAMwpmevfk28h6QzxKVQoqHCGr3PP8ygorbwjUhg9Vby4uAiexwKE6wEn46SoSrV5F78kGdDn933Gk359dG9s",
  "key47": "2ab4684UqZufDAHXNX4jwgpdtgsg9xUwR3XAoLptPBVJy5Zz6CyQBmKezVSbAPQkfYgHWWiD1rtQ6gjGbS9VMFCs"
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
