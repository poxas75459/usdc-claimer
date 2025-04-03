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
    "4HGPasa3e64WNjT8zGELP4nhBbGmXcXL6nYAhiXE7HHwwNQNojWRckper2jB6FKfpU3gwtuRUgPWTemDAy2KjqAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRobFahu1zZGQwu4dJuBnxoTefjYnZfGSTKXkJ4B1BHggig34CLkEMmEF89dqYtFmU3KL7Ddh8qR5caanbCnPnV",
  "key1": "2WSR8kTPj3DfLFMFc1zs4xjp8HS9RAK5iecQt51i2N32gVGeYbHrpHDvJ4jGjgmJ2cHpJLwABBe4ZFm7KQ2sr3EQ",
  "key2": "2PjwLXHGCssyE6ENNh4EE4TB4DfHeQAELdd8WYeoZG846gt1wGRAvLmJPdsy5E9CGe5haGmPr3ZvmevPhhKjuwnr",
  "key3": "2xm9ES1f6nP7SdpvN9kHqoC4LhCjoHKfnHiqiiLXd4k7M4Tq2jaPQNE3zMtBuJxbTgazpzH1PLAuCP6CpKTUB2ka",
  "key4": "2HVTuUX3iYtsbUM45GVEegHx3JAe78BNdTNyYqTgnubvHhyT2j2YMQ6Jaoj1SaFvVaYbCuQKecv3Mb6WobNWxmeM",
  "key5": "5iPL413j1GHM1pMnZKKWDpfnEDAiwekoq3PpQ65KXzsDdtNSyQVc3K6hiAk2hfNBnCMTnpmLWgzPYTqWzMGiQzRG",
  "key6": "3H1G4cqpG2ccMwvFfn9i6PvrSriG3qztr72PGhdpdHdpreg8h48nHUhYU1GLeFPYsWCnGPiq8mzQ2KSFN4chzMTj",
  "key7": "3aLUKoDerDS3UNHZ6WAM2KjBnFP1tVNAjgDhd3cE8arWBsNcFQTaQUsnzr7caEu8uNCr5HiXDQRKj6NQRgy25dpv",
  "key8": "4JFUasyN2q9VYuWxaL4vXA681Hha8925ejCKmbVQPfFxQFwx4TGcPvtjoCP3q8PiTv2qCPKpyZWZMBbQjS9vR22N",
  "key9": "d3QsPSczaouswx3ae48nuVHT5zaxYtXhCFRFZ5gSYoqtW9ryTJMHYMz5bAvdZNN4Pf2ycFaJy4MirmkbDyYEmoq",
  "key10": "37MN791J5p1wJ8Lz21oej6JxC8fqhibe4rBQbg3Xe2QcQthFLzDXos41KPba5sTHRmw7xuKGujGxppBAtARqqbRp",
  "key11": "4Arjms1xhigd9sXjPuu2Gy5z7fGHm4KpJWoR6kkFjnhqVMeydXPtWE1N8xHSgezq9VfmPnwesLhwzSrmEmdKRe7e",
  "key12": "65GkoDzRHpKngnV59LdjfVQbfpAzy1PBoj79aRZxTLpjfjPZZH3ZwKGEQis1Rn7p46Pvh3qmCFz1ZkyouJZ9EL3G",
  "key13": "kFwd6zUe3k1gyEaUDpNgqSqp3zioPvDajBJGNbXk2y6dfw2Z5bUMGWEgPWHvy89xfDfSnSruhWb6wtCrgkQfnx9",
  "key14": "4xA8FVJA9fryz5jEJhyrfYGe4n2SQCg9fKVBVHrV8NfghJBQUVuUz91jKo5wa5sX5JH6rHnaQBXk5uHKrnT1Gafu",
  "key15": "4snoXUUvhhjNy716THDRpjCi997hSxAv2on7GirJZ9LyMy6hWyDqMx4kBCs1LoVRraiq7QdGgUCfr7p85TwoyzW6",
  "key16": "nVfHU3mDAaamiRUz4SEzcKJ1chANEcafkGoZnSFtK8i8C5tN5fzXq5FNHR8ycMNHfTNyEuQcCn73hjHzCd7Lx7j",
  "key17": "5Ttr3MUU2N5dQaNzeNFamvN7GgogQdaJVJmHeh8rnok346dUvUXgpzK2zPWHsv3Cd37KRQDZGQY24zEt1wHSg5Qj",
  "key18": "4A3g1SgLpDHuxNWszdWEPHPBrT1KeFeJM1oU8urzK4p2C9VLnQjSGUZaSYnJgWRjihNmyk3RUrpErt2VTACRZacN",
  "key19": "rb7oG9YVMjwttvQMXd6jUX6ZV62J7Wb9P8XxaCdZzyu2TJ7moFcgMB7ediZDtgPpMf9MMe6VVfsMEZbXwpj6Zbt",
  "key20": "4HSSkcbwJD6A93ocqbr87Ab8TCw35mXYXAJfjcYvCdkREH9MpjTbn8BS89NLLteqfb7UMBhTMNA9DLYQWp6WjT1m",
  "key21": "5UkEDPHeAW2KReE3TkoNJyVVKuMb3Be4uv5R3uKkRNbL7SksXLRjhcAfsCrjukuJjYNRLtN3yxmxEsZQW4fepN2J",
  "key22": "3JvNYisvYne3qb7JeroriAk9jNyL8BN7Zr5fpnkPy8pbWt9hAGmD2PgS1oPCztZGu6PuhZhgzyF6RRCddPgVAsGf",
  "key23": "3FSti671ZA27m91Kfwni6UKi86aFHmXYPkkzE6wtazTp3UHfPTy7jzAi3P5woujrYyMws3E4L9a6TWXGsV432BRH",
  "key24": "2tWdEEEpX4nPVTMFB95qZAThCAucRnKGFeXAdg1ALTvrMfimvgPzin9xfLNv7Me5aDhL6s6KTrA7HsHrmkwvqAkJ",
  "key25": "3syQw1YjXUmikUVHB3VmEpT4rf6vYveJA4LnZv3w7FTkFazt5fZHgj4bGDSZ6Wr4XyLajnvmfePwGzBvNWinQjG5",
  "key26": "hqPB26sfPKWzuHkBQTfcccuEEbr9ynkiXtXeBS1gd8LqRRhH2hgXJC32w49ggJMmh7Fyp1UoFsiJEtjhaYBxU8Q",
  "key27": "4FFsCkZ9W8qEq7YjCWE6UTQDM7BwhUmG4KQ5gqHU3znq6rpc75fEqiLAEUwVqL6GJKkdCaV9qEx4jLCgFZmXu8Uz",
  "key28": "2bHT5PETD2Aybu4er3HA8PpJMarqKFqt3znkeEtvNCqNTwNPEspCrGPEFq1CCy7ozf3sN4piphbH27SN4AQxs9GY",
  "key29": "4rt3ShCYeQVJXzBTBCNVQiiQTtUp3xgsQPWHDyZkLxt9zd2bevpUSyiLb92oJuvXabAAi9NkjSFFbtuR95HJPick",
  "key30": "5zfEVYiuffQa4xGL6zwSwGWAaxR2S4eMLmh3RnyegWjy2zB5aH5ebGFCL6geCjCimDkebw9trTqjgdTu4V9EABrE",
  "key31": "geYngRJoMrC5D8o37PmTbUzXgwMf4ssUBSqqqqnBRkBM1hK9pCYr6yhmj2kcft4Fsfcm1zmHjLCtmKEGwuMqHKs",
  "key32": "ttSorrFU3jShwkMCjSBaGUyuQ3j3bGC4zSvkvU1qSHRJ2z8216Bf9WxwLnGqv5tHfXz2GiZK9X6McRxt9ZZjJyP",
  "key33": "616RiKfSGi1D4oJ8dTqQj9wijcRbq88zVtMtof53DoA5J8zMg1AANSSEagFZ4kuF7XuVMSpFHKWBU7Nc7Kb4ZDGk",
  "key34": "4tLyiDHQ77VXjin5vgWs5ip2gWUzyDdW2oP8nyd2X9dPA5bB9QnL6PNymWWCiQLaJoNkvDfw4jPntm61fMLeTd4Q",
  "key35": "4QjTgpb4jG8K3SJd6CiGCMVbCe8US3Hcbbp7DibgDVBU1Cb45TYPwv8x1VKvDqFzwdkPJXdgW736ZGozaQ4ETTGb"
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
