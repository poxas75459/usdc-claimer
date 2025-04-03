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
    "4Eddq79dcr3jxx5j2RpxyVsHq29XwkdoZVUj9tu854vZiqJU59bHh3nHXtZcv7THZYFJJZN1PMQ3mjx8P7cKksWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fG6YgkEcr27Fm1NMMVu5otcrpvWdDeN66tDstruSorT1ts3CwGbtKwxYVm6E6pNQEErReVgbLsPGHVZkLwDBHCk",
  "key1": "4p1A6r6WKN37gTkfZypYeS2qQ7Mt7WYm3yiVUqmZsbJZqZmiNqeuSmvprF29ok1FFaYfXeFpgNcNu4nFbdYqhFER",
  "key2": "48MjWFG6cgbSkLEep1YPqzEGz2yGABv2d3r4rVEcgfKbF1s37GT4Tq4BQJe2Z7tkefXmJCYXY2cgdaAsUW8TSBra",
  "key3": "4WSTZHkMZjRG24tpRAxKjKDjH4YVm86CuECDY57rjiAWVjc8mmJioRxd8gZT6nsETs2pY9jYfxczNBS16DGvYnHs",
  "key4": "35wXgHwSzWaSRMZrBzLe5rFhsbEvDo6azR1uVYxgn8FDp1Rtj49psVmdVZHBaFF7EaGYHtFaELJuYPBWAKpddu7u",
  "key5": "3a9UUEDDCJJynAgfY36Mz4113hDPpYX6CBTZC3gE74rt8deLejv1iH9QpWkqJDV2o61HYJZn7c5Scx7MCmEJ2oGn",
  "key6": "4MFFMqbBcypYU9mGGhBsfkvzo4kK8mBDtwTErvkwWGygi3WTqk8rsiy6heRTxvej9TNhQznijs88kDzRfBety1Yd",
  "key7": "5dBPMwpUezveaQ8qnotX2imh2DbN8KVRNnojd8mJsMy54nDA7aAoj3AL8UUSX53Pk6Njo5HPrXsNxxHL14JgG5wh",
  "key8": "31rCJ3ijA9jsTtU1D53tWAHJGVaZD1JBftdC51zURt34RQNtRgvtMnzEESLy2wSzcvTHtAe9CuRs7DCAbMGxzkhX",
  "key9": "33d2uZkCnhvJqQAKiAFz91Gw59VjAm39629ZmGnUxgnk2bdnAKHC84XpBjCQcenmcVm9X6By3w3HJqDBmVjDSB9t",
  "key10": "5xAqXiT8QzrFiE8QQhGuwWxZheD38uR8kYUorPBQ1Qx5k6hAHHXeXHzDnN5bB4fypoxJMurzyeAYGYjVFPuCnMrj",
  "key11": "9LhszPWcBkM1UzjGMAGz8kPQ2VwaRPW4GqZyiGUjybdtqPnywdvmCbL1UsBWXqQYc8W4b4NxtZ2cPUAW33zaVn9",
  "key12": "4PVZ39zFbYFL8rGRbkAvHx1FvJHp5qv4GszaFB1mWD3z944bto4oZtiLNHxQvXcS1PUAGEa3CpSBHH7qZ74PeQTF",
  "key13": "3c4Z3oHDEBnYZpy5rgiTPmZxT8KX9sNHitsVtnErMhM4DecZXL9kMT48GzbEraHYGqSwTsUnEHx2AEQXfDirRvUQ",
  "key14": "3dPqj58HRhhQpz8MEuP8HcbTUxY7kkXwwoUxzMmyuwx7FZSrQh3HcmSchjVfqkLg5vy6bmBBQJFDmCG5NJTGWiwv",
  "key15": "3bpUmEZEK9ECKSWLnYuyprAGuYbSB65co2wcES25HHHLyfE4pUDtA2HWrdRzqsZEm5JFkzvGHt5rJHXRKPEbPUbd",
  "key16": "5kv3g3K2q8XjLXJSJtDXwZYu1TvdQsB35PVWxKvm4H59jSGfkxA5kPqZNrQAoMU2B3jVVHrVgdmbmXsourWuhHen",
  "key17": "5CkRcVy3yHB8AZuhAnbiDwFwAqjfWSuMkKqjzgsfjK7QW8p9pJZA3FvcmBR6rcMaQmFPi9VKoqsFBsGHAuLPsF8d",
  "key18": "62uS5vat3U7RC3Gj4Vr6MijsWtNZfbowZ9qGrPFcwbBofDQbcqfGG8RqTdrwnxwUDvVsnN6B71tbCH9FK2jkemUu",
  "key19": "DumfKbQxcdCALv25CuyNUFYt1mos82mLwPpD3EBa9kSU5MutewgzPUS4VhWMJoGG5xBwNDGEhRio35V5SqKSYDD",
  "key20": "4twnoGKta2rww2ovBomqEoLEcJY6S7oPfdNbbimNeiq9Qag7yYt6B6NHiabJ9DGkLrVFF5111WXWMqmgXNNDu1UY",
  "key21": "51RSVAtonRPGauoXJnkjgngrSVu1iEauQ1uYNhuZFfnUrVdWf4Bj3NRjwDCVNhZt36v3K7eB8zgPtgmJxbf5kuQt",
  "key22": "5Nsp874NFsedDKWuFKd67LA2nosAMk34HjFLa8HspsswC4AwrDiAyiZk4Ca6YnVDEYGxxRED6y61cREAxEacJRv5",
  "key23": "55jfKzXuY7Jpu4VAdoT4LVYHmNTcPQuZZD8BQFyeGkAmxFtx42C7TUvKWfQ6T74vabMHXTt8MwyEgWXsVeD3Lweg",
  "key24": "4ygNpahzm4BYqkMBdK3t8zN6aVT2UrtYtKGdvd6QLZqA8FbWsjYPNowvVoceZ5iDyxvScc3gH9EUZtBVv9EXNtXD",
  "key25": "49ocwyF2ibswfzfTn1HgA6PkQtStbUKWmPGynVpTdPRrpX8GAHKpMdtW1omGTzvWpcF2ghxaNWLGEYQAZiXvUYeT",
  "key26": "5KF53TwukvFmonsLxFASJtRGTyoD4dnYFDzsUN4oXv5TjmFKHa5K5zV3xtFGeXiQ2sKtuNDWEmoJvMsatxcgJm9K",
  "key27": "u37JgC31wVtTRmDJEpkiWJQC3wgN1ifmRGq9tBwUeioPNc6THiCayngzhwbDcrDjoegfKM3imhyAceyPva6SyS6",
  "key28": "54xbjqxDcpmLo2B9L6CwutsKTctxtSAMGN4VAizR3krsUuVwa23tm8JHKG7nEDfpQCrfiCwrkfYkHMu1FcibS2Bu",
  "key29": "5RFYQUA2QmXgVrATYhriVePDDGv7WJaLbB5LhoooY6iCt2bYQbPi3GAr3E3RdjATsYdMVbjZSGYngmbdAyXBmKaq",
  "key30": "5bUUazvdDbdHJty8EqbgHZ2cpH9i2MJEizZStoZnjep8cuxfidB4wrGr4cKWeEeFNYf13yRnNQCjxmWykT7GWpNV",
  "key31": "xt3EHPUUk5SLcSUh7Sicasj6vQ9oKr7hTLgMX1ZWrFKoVr75JcdQ9wjmzE73cgwfY2Up2QXLyfF3qC5Dihmgpg3",
  "key32": "4zBZp3KqYKUxPyy22JXijwYg1uFmF3ZnS5URS8zK4zzDTyvfdpXQreFTS8DQuHkV9hPDLHDioT54rPPBzx1Ru2YY",
  "key33": "DCHonvhYtsz1AAZ2rW4ynwZs21kQiovQZPciLY3q9Hd135wcRBBDmBQVA4EN84SiLqryywFPpQz6Bz7bgYBNLAW",
  "key34": "dUct2hR2eQFR8TjBBN8Gsu13g1zyAQXLFMgkbVxgqZShfeRVg22yuoHjYBYAJD73qsEnauvm8wX7RvtrgffSZfw",
  "key35": "51hyKmgxntXDupFgGqULvybpSzp6K8utcsXjspdj954ayv5K3ueGq1pQA3tsMSBDB65bBMG2N3AJDmCu2Juy4Xky",
  "key36": "4hKhS5TQwSmun8YG5oahT9sQBxW18epJSSE37CzpTUi11jx1wYUtDt6vqAFmFvC9BKkHk79q5JASToQMvmehdoAk",
  "key37": "2Awz7BJ8z1NKtBDvYkciN3zbCJ7zvMpy9fJTTh9gESvxvPSpeEBGD2idWb7F7i4YLdNkGAQ3hVE3inkLrY1hzgt8",
  "key38": "ufqxjCVtRb1ksh1fq9kQiJSL3Ygfeh8qRiHpWhtFzkf6Ky8paFpfStgt5TFuie2FH8AMJeaSr7uB1H4jQRGSFbg",
  "key39": "2WVnvVuwGMkdoZxoZbHzaZCU1ckiQdGMtEEdcL4VmSVL2tT4NhMgwu7XzXsrzZGE2QpKYa28KAvjgCP5CiLNrzjd",
  "key40": "p9eurAKuDVtcywoDc4JW9BHXGFYbrpXV2bmsQ5znHgdWDig7Xg3LkVgururJ1mkn5PEcsXsMnubnGcg9AQZaVjM",
  "key41": "4D1tcbwRmk9CUgvz9E7fVxTnjEKzQDtRm55iJHjJb8AaGkoVQkREEZsYuYDEhxyFtAYEAQx7gAmeZK1CmztySXvy",
  "key42": "5tX8G5LkpmQVJogSx4H2Rbs2BijBv3KLjnDNgVopPACekzyADNngYKa5pkkZ1XuSnqBxnj2cGc85KiVdY2zjYwEV",
  "key43": "5db7QMijDzCg4JUfDqU5PrTZvn4xziuLafAx3DfQTo4u2ULTsWrTsKQEhFBwFRRno7CuETiNnPmDBVF99WVEFBfz"
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
