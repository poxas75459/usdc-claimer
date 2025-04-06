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
    "1HmndP4anuJ6wUdZSmt3h2jP5Q9wMtpxBcZCacfAU7WcvxFhBNfk6WdmGFowtL1R7yacNfz3kgEjfTwRUQLjJVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDCkB9REWHBnTATDN5MtU6vreWxSdvbRVL9ug1hYoRNc5Dxq1v37hMyAs6gUNkE2RgaQJqdWFVKJmJpQup71QRU",
  "key1": "enZ3SVN7DdJHFH4Yj7LDWQ5hnm4KPVb4deH8cmHvToQLYZ1fBAQKVDkjfJkTeawsHzQe6MXZD9H1S3mksDxzhrX",
  "key2": "4zcGwHTj4hNtTbMoyPN8UUVihXLUwvnwvL4EYXBrRE1zdVe3H63BT2jXZPN8YvgwZyTjsgz7S8TWr9K5wfBw3hzq",
  "key3": "2Z16Q1f2M7EAsczQXrNcivLQWGuhSWRRmdexjH1k8gASSvgMk6Kmw2d3PLSPYAFxhCfAaMRjVZvnLzezAoUJ5eaj",
  "key4": "4ASpd7ihshxtzcz7VCEHxmErGb3jJgVN4SXhoaABwJDivYaC93jn8Y5Gspt1RHuydocwb8Y8eiikBFQ8S9XkmzMq",
  "key5": "65tbcfH8s2R8TwQ6eQ6qaiFLmQHZnNHBgPy34XhPtKabH1asW3ybhPytA2wAc73HgVwgNjvyAHiywi1XbGcmbVe9",
  "key6": "4FLMyoxxCBNNhmMNm4coUSoDZQEXeh8xpJUidQQMSmjBbWJ8h9mgWnAAUcG1ygoSZgHHVuY2Bh7af59T5oPKTuaR",
  "key7": "4zNydz3V8rVcc4xDmHC96oLzG99xuhNye9f2TVmtP8m7QYnXAzeNooFSotYyTdKMyh4PNjjggty8oU32W4bnNRxr",
  "key8": "aFrnmRVenVRUu2TZsDDqK5JQXJAzzR1DZx5xe4JEwm1verdm9AKDiPQXBoosoXjdQu2X5X4KGbsrT8vX4yfS4ua",
  "key9": "xeCNrYhiescz5a5XdcygTvtpyYWmEzgK2SPYhDpJRxC8Ha9AJf71FR2sV32x4LdjSPwDSXAYaDJBtCJcdEPN7yK",
  "key10": "5Pe5yApH3mc2Cadsx8Wm3HmBZp5TbpPGivogFruv86wgU3p3tT3F5z98vcvAxdJiHsQAu1Fphsi9iMns82kqR1qx",
  "key11": "3oEwAHVJ5SW2VgEcnDKzrySJhRhLaB3UMAHQvXeuWiEecPcnTi1zw9nV8kbPmh1jUPtEcr62AsxWaEpW98o3NPsp",
  "key12": "4aJ3BYgwpwtoguoWHAkHJm7deU5JwhQnZmvU5yxggP9Rhgyp993keyjZK4PyozRcwX6kqK98yneHbwb6D19fgD8Q",
  "key13": "2drSUTkDPk8HFuKpf23HJJoX2432nRrt9ZPZcpg5mLzXsu2UAkhRYUPyucYLL9UEk3XELrTda6Axoyhoh91RFphp",
  "key14": "28ofDS6V2rVDA9tgUUw7ii1VwVM1tsbww7e8P3iupjdmbCyoBiA8uKH3gTfU1QPX4Edfcm9Hr7sRxpmqfBBshyA5",
  "key15": "PZGHbBUjUzxDK2fGJdAnBmgS8fvGXCwyyz4baRsHkh9FitpfSWkCUjBajNpp3KgvuxFFfmkBF7L4dPPKurodiQY",
  "key16": "2vo4oCEzHZbgVQpiKnw1WqcP26vUseDYiu6oMmbak7Gmj1QVUz7e1kjwppux6v1qrrhVkHGuudo4TT3tsvaPYTk1",
  "key17": "4E4fSUephjWQuisgSSGFqyAwTUs78EBxEmq2hSn7aGaf5jLUHxPQi5Zh4aM9VETocnusXVKBeNLtkJX2UtFkZA2E",
  "key18": "46F1YM7ZVvNfQFtTS8Hwyu2imEBB3fHMY3byqJc7F4CR67Aofc923EPzCiUxDACDrvFiDuNRB58ypxGSuBPTw4mZ",
  "key19": "t6ELSxGFiaQsQmKJuGa8YKbRxg62QHc2kJWDWnKhvsQou88ejQGZk9SzVENPLDVKQGuwxk3bY8tXhMrkF2Zjx6Z",
  "key20": "22ESfxXq7NzTFcyQ28pAvRvcEbb2r3HBY6TVcFw785ez6j23YKVdQtFq85aLhcFBSDd6agAJNAhLpNeX3HSDjAxX",
  "key21": "kNscLCCSiS3Jj7cc26qD1Bz3hxtJeK1ffPh86WwjSG6cBeQUZZL8wLyfjkD6M7ENpcqWQcWM9R6mq78w3pmMRtD",
  "key22": "32ABcGGRkJmovEg5sCaH2UDRCSrQjxhRvCoL1rvnMv7cmK7UKda7JoEHju7K2W8Ep2e4TKHmr1wDZx1763pnQULh",
  "key23": "2gXBViK1t6paSSvQggf1nFaEZhiCEMkoujG84sVCeCMr1xiuv3Jj93noEie2vLRo3z6wAjZMKW83sLHZaipX1f7k",
  "key24": "42JrcY9gswZvKagepMVp1YHnngMpL93vhhNz8GT3N9u6JTSFqTTQDgHd5hrE6jAmaogMQTEooLjWsDRA3yEBpMDk",
  "key25": "35bJ3SqYFmBnvCtVi8cNZHZL6wh5dLysG3NHd1t74gHHkPai767DRQsJWAnGUYUPPajspzaqfbbDmxVP21D3Ky3W",
  "key26": "5bG5WPcatb6HV9Smy1xAzyDr5zgPSHYt7gdDacptbryVSQnx1eHNLGSyWseHyxQeKKnwtvpnEvjT5xpv2gtH3kT3",
  "key27": "3HH7j2idjuufKoAQpFHzuBycFv6KvvGNntX9FchKEvKjHdakycvZ6xbBbBUid31Gmy5xhH9tSjanVZKFmYTsk5L7",
  "key28": "2LUZ7eqfZ9nWnRzr8A819PUErb9Fv4zLh1dkrd3h9aMwSE44AGt9t9SgPLbUh7UfMjYcQsqb625umnyMAwujM8qg",
  "key29": "4LXtdrWWeesJ8Uovnp9cf8UJ45CaUfpTZ4SrqPunccQL13ZMmMkYCioEQtSxBDQZsPaiEtPGaFkUUhaCiqegSbhj",
  "key30": "NF5sb9tmKWvoi92o1Ny3oPRzj5nwwEWJS7aUovaN1CsRVC3EK3PRtnwrvft4yK9X1u2PWYkgTqiqwipE6d8VzA7",
  "key31": "3P6WoH1DpDPn4AwNBH8LxGWZW4FvyHzPTqP4YrZzAFAZCuQvu35brTuRhzhQZYj1YV8LStE4LfPtgGqHNBbHPJiB",
  "key32": "5mz9jGTob9MM2BeF7CSPz3p9JaBLU8AstjMjkgjBNxFLaWoSMywFxtJj9NU3W64ikmbe9qp1x2hP8MzDeJAmUe1q",
  "key33": "35WSYZ2Lyk66xMoDPw5suh9kj8kQg1aUG7NbssEiGvhe8JmUkxfq6CHEustSaf6vkW31cciVykGXjJNq137f9vYa",
  "key34": "2XVo3xiiJxJ91ucpZcUu2oCq4LYRpBvWb6zFuS2hG11dJMomHwDKeTMRMozdpS2FJ3cimdpJCgyBNjvHrfrBGUWK",
  "key35": "3XHWFkGSDnjnZeZESzEaupn3japYJnhCWEjpJZrtBSN2Z3C6tF4HLiLzsoWnGrY6HqhcWZVmMCpwTAKYHguZRTed",
  "key36": "5sUubyXjGvXAM8AZKbFLvQxv9FfCZJjW9EGVh1qXrcJDhDaiASfYmorfTwZK7v1xY3QvR15nLaVQz7z7viL7e7Kd",
  "key37": "2D8bWe5fRvh2WsQkkeHWTrQ4WQ7UQXrBP19E8NqDLtaGANNhqXDy1zLCezBL9QgupWhgTiBxzstQkNkb8xb3ZfxH",
  "key38": "4kDUat4TE6q5dnSKaEK3ziv6Us1wz9CDbqL8DBPzYpjLQSrrnYRMCrQh1tyo6f629Y2FtwDr2sHRB1ivGyi8bd4w",
  "key39": "4E6omx6v7bS1V2ZTSWGmKn7Qhm6T9hTioL2usQjZhJKAV3rfamHRAZdoTjoD2EH7eUDcj6yFkyqTDyHiihMZxMey",
  "key40": "Pq4yaoxuK3kcmx4iSdJM4PeVLW5dXNhDmDzaXrQ9XNdAEGoAFuR3FZK9BhhVKrQUhffAvULqAypp9MZmUHdjT6F",
  "key41": "2pLx6VpwcGn4XGfTLStunMm3bxb5YuoNzJfWUQmde8WADLvGQcFYMCyByVTdN5kzJfiLmX325Pe7AX5pcsEvsSwF",
  "key42": "2kVu1DK4mHgsV6Hb5amhRmJjGGRLm6Gt12kSoZwAzhtc5DFm9MzhMU8KNduX2Air3aM3YGzrJZx61zgoTNYNkzeY",
  "key43": "4HjRj9DbwS3GN78NQGSeVEhB6nh7dsNVYTfsq8L52h9t3iGBkToJaknbwSL1nscRk3x3T5s5NRhUrX7pf5mkT7KP",
  "key44": "31mFMESgkCFbdUDKLxNNe8w77h5tcs1afPBkv5VLArJ79oJBTsFeu5QkV1hw1HK2gWhv3vw4iwR2opwXTfmt9emr"
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
