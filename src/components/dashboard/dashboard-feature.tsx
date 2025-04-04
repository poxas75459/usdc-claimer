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
    "2mvWm4NYUDNxcMrZvCtnvMGMjtsccqUW4LWq4y9ZKH4N9EXBhhtaAUC5mbjyS33fSD61EF2LkuntkmjWbJJA3L8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65sTDZ5bTb7pRAbU22SVEBVnqdStozLKCBwVffmcRCCCyeVWffzzbLeAhEdYKqALMXR96VDNwAiXScSr3QmsmgQQ",
  "key1": "2rGV3kfn4rvPSVWvxsTQmJj26xcfDCwKundhqpGwk7TenoqGzbZ1aKZY1mz5Cb64Er2kFU7EybpHJBLRaBa1w49A",
  "key2": "5jS9KpEfcf11Xrb2rF3FyfV3rshvvjzm3JZtRqJYEosGxLMRBxvkEhpVD7Z2cZ6CxJjvxW67LxgVhzewQbUtQuT8",
  "key3": "3myhgQmg5ws9KMb93LZ9UgLdVQdRxs5Q37pxnnveA1dzkQj6Rpmv6zQxBUSoKLwfwZkaJ4ZnbpSR22mdFd73QTeq",
  "key4": "4srMG8WgMHh3wqTN6LffYiM1S1hgypWSNmAuY5R3gqcGYvkTRYpz6DXMh51xQaj3jq8TKo5AAQ76uhi2QguDZXzE",
  "key5": "5B25wmeaoNZ8dohZoBcLHwerZgHRNzP9rF9BRYt8okNjPuomKpukQcQDjvmickpJrKfytXit3hNqkKAyCKccUXeL",
  "key6": "3iFECvbHP7RzjTu4kmtjF2Nry911AQBeKjxBvivnwZDbf2mZPFg8QEWoAocnzDsZPqGhpcXJX3JgEdg5g4aNPger",
  "key7": "Abzk4reuUHCdtJvHgkw4jLimGJ1Ar2CnrTCQFQng4bQriUJaavLqatRwzgA3Jj484ffNWKR79cqXRgqWhpd8qsW",
  "key8": "426Nk37JLX7Yh8koCmw5Mb5P26NzMBHbV7cHvvSK4yZ5qi6ZKi8YWpVgi1YRaoQwHmLev62d2Aq7L3dyPTzM9gQm",
  "key9": "3r3wLYofYtLHTQf6WcLzjV3nJRgAdmmsjSt3wuPkLWos1dYV99dwCS1QcPP3zRw38p3xnJsi73uzC3g4Mct4R1xg",
  "key10": "3zAu3C2rvQjo7re5NhSBbTdyujSn5k3qJZxANKgD7e1N243ezpdhhZAAZ4REYEbJAarAvvmbt8di6M7qw6b9xKgW",
  "key11": "3WrCR592eMHLNekAL3dnpUmXddiMnatwmSzDNdz6KGEB69KV5JJyDKdSdiVBTBdFAnktVpWVSsq3b7SsDZQGmAk5",
  "key12": "5meZ4d9F9e3mhs4hWeocdszhvuF4t6WLXFw5XLkJpXJ2RCu8eQHddW2Ct21XD92rotT6TZSssgCsCc2UkvqtThe6",
  "key13": "67kG9CiMC7ofkNgav1uM39LKdCa7ErsbKc58VNZSSr9ieBdAWDFcRedHqDQopUTt3yLawAXGbu4ygwWGjge5daUz",
  "key14": "4c1y3pyGcTPoNcY6JJVq5fM4TVdRx9CF1qLEREdLWLrtQHCRPJFiSvaHsjAE9PHDXSjh6HKpJjRvXnSGeUPe8eRj",
  "key15": "5p61cbficJeZR44Q8UQUqdE7CdPXhy8TLDnNffamGP6EqFBBuiz24Yvxefvg19PkpMKTXGoi2BebXb9b8Sg1EUYL",
  "key16": "3KMxX3Ui6BQQgHMk7mEn8SU4PrPyXF654gbViUB1RJ7gg7q2QK15ZQS4nzQzqUnw1t5U2CS8wXFcVoA5hvvKrxa2",
  "key17": "2jFr2kbWEM1Gn1UZYbzzSbjocxhbf421n29zbARHvxmEgU12vXB6voAnzuVmVQaTxEMHC6FVLDFrF5xuaPNYyqpG",
  "key18": "3xK6aqnP5K3fv8NB4m1cDHVjngK3adaySQuegHCxKUu8K36A9aNvpyHfHMNwH3aMcQiaXVQyS1pvo6zvyWvRqbax",
  "key19": "beUpbmoZTKhYfTHLaRm75WPckuVhzUs156Pc9HUPiNZ3K7WpKBfjM5xeUjqAKsPfXzMXPVPfALf5ke4GkSFDJoW",
  "key20": "MWYvCm8uVd6NbdYwBS65CgVuhXY4Cv2BRkWgmqLDM962pX4UQ1nJYpJ6YtMvadffdwNX6KC52P7gmz8znwvWAqL",
  "key21": "4tGcHN3AbWudqyVcuiQk5obQWyrKuB7eAuYdgkdgiRSPSHLmonkpU5LMh6Dcp3skE7PmA7c8EKGkRuH92XPRLCVd",
  "key22": "23vUY1aabTmRjgHhxBiJ2jqni1BDfsgncQt9nRVSSSSwCRriQnEo6Ev1w6M3xpdWcYf8hADus6gAJVFuVQnFUj3S",
  "key23": "GGR34jNeYB6KEXFfu32kZU7an3HisWPsk62ppHmzgboWZ4ytXD7GQprSdnuwJ6YPrEzXKwaSutyq9j7svC3i2WC",
  "key24": "2nHr97rBRFsVJA6XGhqJVzmn7ThK49muY1ztWd9bs7UGPf8DrJL2ZRZxQgUMBCRCoM5Gw8FVL1hPsRymKaisMbXz",
  "key25": "4kUUGRU4JrMpeFi9jqyGjLZJ1ScbHLdA9LXJHb7V6RxHjJcJys2EvoH6Z4EgKWwJXaWTcffWn8jq3yFmbcvzuHxr",
  "key26": "5tPzuHV25TzvzhJ2umgBfRpBTKMf1AZN6HbCuaERFxTgt6p482VG1m1fVJ16LihydgN5WM91d9yFgzN8jWC9ZUXB",
  "key27": "3oEXmeWCerKzhKCG85cmxddL92d84j2V4MmATqhiYd3RbDGci8qHpi6N7cM5CCXMmW8MA2b4QH2a1MUBb8EuZC3o",
  "key28": "475ex88EjxxSdTJb8944dq1ZHC8yQ8HwP8riePZjQH8SBbQsb2oPEpVr5buMMMruJ9E1iR1meRHMQt87SExLgUsD",
  "key29": "65Cfoo5DbxV26umNmNPBHdc4aCE6A1wSTY7SKb9RnZRfPxkyXE4Kz7PKubA7Ndfx244oJAntzLX5cTuJbNrLYDXP",
  "key30": "2ydFDJjbyA83rNZmFK9Y25hVaCvi7y7iKRMkmfSLk3vXvqe8DgW41oVXydp29f417Rpch6v2EBq4LKqRUd6tWpK5",
  "key31": "2VsVDJ6Z3ZLVjCmUgnCKBAtTsqNFkh8Hor3W9tM8GS22fWBPTq6z1QhjvHxoKWwZ2b2aDVZjV45A579sjb1cSu3o",
  "key32": "vDg3cb4ssczpJu9pBfBEVeUubAD8BxC2jFW7LN5YnE4svk7ho6E1QUhRR6ZH9xtW7zhKX8rhnK46jeFgAkjbSYa",
  "key33": "5i2i9i8JMQCUV8JAfxcpmSZpJ3DvDLDfEswApVUvvwr4sFMd1paKwFosuqMuRoGbcjkMVytDr3FSi45eiFdSHLe5",
  "key34": "5zSy9TTEDcgdwjgLhqdmHYk8j2qcZCHsK4aKWd8Noc6L1SWfAf7UraU9bK23crFDY9J7EtJrjjxAnmRxgQedBDow",
  "key35": "4ZQtbEP6egR2ybnPAxxKmczJ4JiumJWBJM4mKndmnvPiqLWszPWakWVZnUdPZ98MrHrAwNu3hZT5jvdnzZxwUTcQ",
  "key36": "Cruyz8UvM6j4JnxQffgQE1HoXxUQVHt1jufsEKtzhbdid8tM7uHm6s8fYfPWJthNMbNyVv2XoAcM3XLuBiPQZ3F",
  "key37": "4QYm5RnLUJ5Cy99TSZqhWEg6XuNxY8P5nXnGxeEUsxXWrFae59YKGGENTGca5n21X1fr7rtoyWD4M9pBGqX4wM4T",
  "key38": "F7fpLAV5awHQHspyPJW27kCKbcGMx5fGFsCBi5BuEomG7udH6FerDsXUnk8iREipaibYbtp19s1VfNtgYtFv7rz",
  "key39": "2RxsW7BUX3tb38VMqxgUzjaw8TpuTUESeYhLduY8NtcEy655nZrkrS5s51fNA5n1CeKrAiBmKLL5Ly55AkyV3JTs",
  "key40": "3B1QqX3Ar6G7BYNcJxHmCkGYRZxQ2U7Vn7aTAHYFrJe7KdjCFnre2Ap8pAitif4c78ykfW5DqdoXTeJSRWzPm9d1",
  "key41": "412CfD69QoYvtxZUyErCr1zWUe7XBdjvfMEcCAaPNLiSPUnWvHMd5D9yS34EGGymMZdouyrRB7zKn94EXhpT9haD",
  "key42": "5jGi2KXNzbR59K42eLwriXsgDnJsjmVWXY3LXGhbVxxWw1Es57HzUmp7fWzEdTXaU9hLBxn4UdvKGsiz2GhrA9ES",
  "key43": "4u1GurkndA62XQTVAB19bXAZKbRp2h7qZ4yezKbPjYesUGWnQ3DqLsrCqNmCpXyvk8jsztweRMQBNDvy3Vjpb88d",
  "key44": "2P1a1FeBGEvNYB5qqa8V4Bp9mB3AWp2i6GxDWiFLCxmynRi6KXAXRpBEhfRyzQTVFgjTjSnf6uiRpFNtT3gy4WgE",
  "key45": "4prrq7fAtbajxQ4snRoWkQ6YDe3RAAdKMnvGqYaWopfHFPaEmMqw2B78GRg6f4M6MDwHBoJkEPwxfNaS7A7Kqc2Y",
  "key46": "XSDtC9xzq3UywL9GWonbfFEbYwDZvtBHpVmkGjfYubsfJajBhRXpBCBEcePptW7UaBZU4eY5v45bJu56Q7kC2s7",
  "key47": "5FAwH8uy7gwbbCdR74gcvbd5iRtXPYjeWeV5ndhfhmfHxMDGnXsicUnmfML5oxjhA3PdxJdaqLSG2v7MiGepQujH",
  "key48": "4qCqNLXAmjKbhd6Si4FFKduSeM4XpuDjFKjnypkp8viSxNAUnxDe8AceAAda9q8kcfEceGWFTKEH9FKfTwo56qsv"
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
