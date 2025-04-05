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
    "pDiczjMzyVdxnvKe9heNg4rYHYfAR8B4vbd9tDotgsGrydt4mw1BEv1yZgz7q5CNRrNSpH98kKD7YMbC3Boqzkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hm52aGBoNJKxx1NwDNhPwQXY7vKEMhYzduKP14UBcqTnmjsx8MbKLADDKgvCeuU9WRYdbG7MUfAsU4U4MqvHLMA",
  "key1": "4x7MWRn3Np7k5SAmFxZssMFkSHEFtc9oZ8K8xYVAXSv6h1n287xepewUjBrWNmRMZpZNqEgZRjw98aCTtZTa7L77",
  "key2": "3oPJJ52gEADntGeuBRfDLs7pBP6SyCsmn1MqiVWNF9oh5SagrRAWbpohV4kK1v1si2FFhAnASiXM9E6WTAoEGq6F",
  "key3": "3o81SLbaYFSBut8iVMaQRvRJngnY4ALDQVw8PiHoSEZhpe4nuRNQkmixWTNzoMQsPRtMuLqNWKR9n57D7o2VeRoA",
  "key4": "S2WgyiCoL5oFgDQmvudykA9NzvEZfUaHdhyA6D87EQLRECBY8mqGWUsDEDGdA7kTHYJ5GZr3SW8PfsAd2eh9VG6",
  "key5": "3eNK56idu3itYD5EU4mNfYCFvSrXxGjEzDixVhFpbsqHt6HhqxfShAqQ4HvUspsjSzemWL6YthA2qRfG8a8XLaY4",
  "key6": "4rWds4rMTpAHkzjgGrfiyDRk4zMdsFw63FPfoqFWQuLSjnwYygUcDVWtJ6hSqb5zzgGjkZi2zaJeae35d3LqwbN4",
  "key7": "4iPyAVcesa2YfqEowMdQVX3A9yX3bZFwpsV7uWKgudRNWFwmVvxus1WqcrZ9kmXTp5jRKKgd5bz8K8L6ssrRawMt",
  "key8": "4aX5tMpKbmhyEettkp5WkCvg673H5GYx93oTMPKbzaNc9GLJu79VCAP4kgNKr1Va33AZfAFpsZ1z4VdtQFdEi54",
  "key9": "3ycGAmT16cY7Z5Z8YYZyW3dU4ucgfdqQUrkPdkA8MerUMUk6Z8WN1SpQiEas7UabraViRmSDN5vFyKKJLewhV7eZ",
  "key10": "5encTvbEywBx2zX7wkyN9etf4xhxqkkHngh1XDNWhAbxEt4UMHoh97Ano2bpVdV2BJeYwhL1yB9tqXQkqJytT3ht",
  "key11": "7vNggRDYxqKuEifpgZvTSDGhmXpAyVtaaA1VZ29gtJcaDw8wM4JgbAWPPmBfKJDNYKam1G5WjZz4GRc65wJkvZT",
  "key12": "4NK1AEHbRS3SE3WQSN19vqySFAdRbrkVPVpoXcnqBmE1UEF8PgewviAS5Qd7TAH4yLe5S7aJURXzWLR6ijUwQeiJ",
  "key13": "5JDMFjqWWt8N9WjTssEFd78CE4MScM4NhbCHmgSYSsLiSqzJ4BnrfoeG1RVfYXSCph45yCUdkZaVNWVWm2Unw4bS",
  "key14": "4FpkjAd9PwoWzv8TbMdfUy4mzTXJvbE46z1QZC5TohZCmvk9dUntCoqzLCsF15ViFiK6GDC3Limd8SBkkaqfv62q",
  "key15": "8WGHgmRhAhKz8VVwmbWovm4h3Na45eVzii2SwthXvgnwA1QwYp8kayy8jKaGEgxmhv1s2QBEwdwSybyjszUXKfr",
  "key16": "u7s5BUuwAQkFepMKbpjYRVVPHTmsam9wUjyvitmuT2hMVT5AwTzwkxB2bAvXJLvyVjwU4R54heMX7GU4YSqHKut",
  "key17": "2suMU7SwTG6sNZGNy5CoRcrHbQekK6TpGssSyVP9A71JzkQXYEABPJBM5aBYkP8pqVBshiTC2xfipATFCQtZEZAW",
  "key18": "3yqDtrmPyzJHmWd1UZiDwim4eYzbo8MHTHCfKAj2ZnQEftHCJL1egyFDficZ8TKsLQ6xfhn6X7hH7YQg89z5q8kd",
  "key19": "2cZWiKRNy6AHB21hhsLdZaAd9rseXUKj3HokSXdjb74d28yvWeVs1783Eut82Bc3RRVbzaXSsN3ftvRFpvFzeS56",
  "key20": "4QrHsboxK2N6Nt69QqytJW5usAm2vsb9Ba8a5WNqMVERinBEn6NYTJmkrSmFPeK1SyHRVwWiZcR1yuSWg5RverDc",
  "key21": "2QrDkY24cambpydiaNyUs6KoqkZYRZmhNZQudjww7HGaNQy9VJVF8SfwAn2h8jShukYP152yudFb79w93tbvcTry",
  "key22": "43pxtrzN1TRdKxq79tBSUx2B8QhKFDzaFLuECsQWTp2ts9Cs68cAWD7gAwy5V7bFcpeRtu4vZdEpqQwY8HF5jR5c",
  "key23": "5ADAvJwyKxKBDwYb6WpPjHBUTV6FHzEQN9HWxoXFf1Vx5bQrbABrhxTYkEuYd3eL7GaAEQ3yFLCMjkz8569TT6er",
  "key24": "3cwdnboqXYzCPu2yYZ1wFMLPRgkm1H4QdY6fz3jXbdCsdr6218hKbnCXktHDnd8m5bnE1kbTvHKHkH8fPcFhuhth",
  "key25": "34VPwjAYoZ9qL62NQMarjnNL64avkhTipBbkACQzM4PJmhVTWNK2vCP8ESYyBgPJzAi8fdZQAdsc6HJqBcJURzME",
  "key26": "2j7dxJCfCz9sEyasc742JQPiYapDuRbVPd7bQTfB8XiPuQSYQxbeY98NahRWJgcNk9aANrMyXt4cwCeLq5n3hJYC",
  "key27": "4q5gsJEzo4cXm3tivXpMvG9uAZXXEwjm19HVzqxKrhpzeepqbhWJJu7jE83Ddo6ZFrBwUQ4gpyxJJRiTTKnvXGCW",
  "key28": "3ES1k6E35QT18TxpLLm4xDvEPBdu241SCwwEokb4HD4RyhTSdPx1Nb4njT1BU6cWTYhcDdQZcsvJ4wkWjXsmADEo",
  "key29": "5yriWqMcnVzp6ytphW9wFhUwAtqjjaZwn6iCm3roxY3rWh7H2oL6NADZkemEbHC13fcW4DdEyenFonRP3Rh8hr71",
  "key30": "2tsQizacRa3UopkBk8PGCCyu1PXK2hsiCCSYARdtqiiB85Ssmwe5aSHjzWhaJ1bs44iW9TYLELeTrwKcuuQPTbKj",
  "key31": "XWJj97eh3QM9HZYFEJe6eityBijNoffbiquerBvCPLFgTkoHTiLiZvMjhebRGyxKAxQ5UjH5qR4n4LNsN6TKo1d",
  "key32": "2mjsyGzbbJyMzDy4eDJKPGZ5amSqwbVfxi1b2D4YVkUQ3NGngrFoojyUBN6PwJR2HDfbtrttiys5JSi6BXddCrQK",
  "key33": "5boqKvHdQvDH68vDtPoNNq1gQgQNfqiKpoF9DHr3qiHX45d113JxLcmHfvBh5waTYaRqVjMco3Bh4uD98H55epoU",
  "key34": "1r2BaoUSPqBLR62oRvg43DaQ9Tp938iYa6PTECZn14EkNvgEekkgLfJBdSddVNpBJbDx2FJLoEKhoBuepYFpB5i",
  "key35": "4V6YMasG6vn3CnnZmUKF4KfXidsDfNAMiqihjWX6s2mDw91onZxKGGA5hK6GJSSACtaYQcmRvCxs1DnKpcGwZ31z",
  "key36": "5an5eHicFo4gx4hE1tG7VF7N9wMAAJ819KA9eqmSs25v9tuzerweYrLoobA8vdZniNVrGZEs8zYLMkrg1US4Xyse",
  "key37": "JpqpaXLt9M6oiFN9S6L7SWb23j3heBDxkGyqAfDEubCtLxCam18FF1yPs52LpeeXrzxX3U49p9QQF3UEqjQfakb"
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
