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
    "3TvvjEab8Kp1Md4WP2iqKFsnH3muaHa54VzHxbJhs77J635NMz71XSnGaCBD5Ja5QFQadHPWj3mcSqBuoNnYxiLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2cgom2ecUrEAkYsE954U1JkLsozc1ucoePRJknp3zjToXcrgkAz26Q2hEsQETdUfxvwygJAQAmYrPmV1qRM9D5",
  "key1": "3sGRGG1p5mho9utE1HLXfHvjoSqGgCViuyMUwLmkr6Fi9MYxYCJoLZnyQ5RfV2vpNTYicZjp99ksm257vATnnKL9",
  "key2": "WXsBNF4QcE5oEyMnZc9Bm6TSFRaB2FzVP36CTVjEsKsndrzTpMxytBUyUyx4DafRwMy2ksnwGeswZp9zZTfSkWD",
  "key3": "my4vG7mEkfJazsQzb3KLW4HGtfmAh3tAmuHUCTDahkeg4wbog3TKfKfR89HJjk2b6w1t9qXn64aX1KMVWZqXoZw",
  "key4": "2VBbC9c5TUErq7wxStyuN4KxAFbeaxtEVadzpFVQ4gLHQrdwgmDkQSxfvLSth5spPrs1YSp7XV1RxR4y32b5V5Rm",
  "key5": "33cxgPDJvFzMrGANxqA3FoMozJs4HZ9mstiCS85RTap4m46681fQe9rAcNUv7Dep52MkNcz9qk1Uj6bwkMFPrCcT",
  "key6": "4F2ab9Dewvk8EhY6A1Zws4Xh9s8dBmnLHnUTGFNgPm8Y5kuJ72PhTfHNB1M9C5i82Qpqu46ceuuKtFzKrz3i6A4c",
  "key7": "4g31S6zBN8UwBHvQvxXHTYdE77Vi6UrSidSWRQwnN6zgpQymMoeP6fXdb8MrfDuj7RE3uzqa5pcHwoY6bY8hM6K1",
  "key8": "26DRVbgcDBJu8Wq8uk3norS4ut9b5mYEjrSNv8PizojAjyJpr3upB1fHDVHduwHFRs7Dq14QUjs8d23E3GTQooGX",
  "key9": "3JCQVbNvPJyibe4skQxGbGfkdUudjUbmEg3DvfQYaB2bPH5CnVkvUpERKM6uUqbUkhVj4SZpRoofGHv67NckxoV4",
  "key10": "3KVqN5kjFT97mqxZQRjiyaBExXiqxEueLjwxS6XnhJnho7KsXAWr2Hg5shQsb9H2qLr9t6kv6BSivyJ4Tb9qPoY2",
  "key11": "5XAjz7yxantMKAXV25oyyvZTt2axtRNYFqpAHApQE6oaTcQHFg19Yv8Z17pfpjpggJM67y7eniY8ompoj1fVC4hE",
  "key12": "4qAAmruKopvzYm8bYnmbPYfQDGCCjApeYc2keXKA8wsbuiaMKWrS2eZfHibQsoKHtu9t4U5WHyZneF3Tg688ej7T",
  "key13": "3wfp5STNn54AGS9JDZ836Nk6ayvH5Gob499LfrkrrEFc8M16S83HNpy7WqTaaVMeKSuz2TsBdhKFqZgxRXXFnw1o",
  "key14": "iNwPccVdnzPeF2rVXS2arDxVnvkRbdDdNts5tEZ9Z6taAjW4YAmpYo42Zsy2gir7VATAA2z97cTyYiPibPjvTs5",
  "key15": "2hURAu1GEUQSBiMsVZmuadNNAnfdzdPvkeQZNN3GcHXp3oRmG3jJTrjXtnJjg87u78nzCfF5M72wD8vJAKu4vMmW",
  "key16": "3yMHFZkq3bwcYBY8ifL1eMvGZJHNRyuZGbscjWX2rRs89od4Y7zs871kitExZuU1uyV3PmTtLo5wAg7bCRND478s",
  "key17": "481UxPsuqLSRPbnMia91a8mTrniwVqvZEcKe46gFFuNf1kxxZ8B1Z83nx65t7FDAm9iwVmguypxUbgJ9DmRNPUXv",
  "key18": "3PBSnadzZwt9533w5D4wr3JHwPMWJCAnqmkQqMwRc5mxqUcfWUnL65V8wG4Y3jooTE4QfUq1VTCHCoom332HXZK6",
  "key19": "2FztpaNSunQPMKCjmeBsjUtFWRtmaNNHeiBFuBBYoxcQMFo6mFYuAzZVpDzMTWMZVDcrnd21GPKSJNg3Mg6RuxHw",
  "key20": "28UN7fRurH72hMrysYH8GG49aLtcKvCNkd3U6LajRjMpyRNmHNTsiTZMFCaB2nm2go1LRLt4VbUQdjGjArDiJpPe",
  "key21": "2b4rST3KHR3nkNDHLtU9SaqbGCg6NaWM6BzbyyUuSfYLpeMrMMM7XW9aJgoNv3jweHSnafQbxrjSJtUG6Wju2vgx",
  "key22": "5cWRnpk1TNGGsPW2YdHYANgtb6yLjp712XPCwPEhveo54BvNg47YchTeKD2FR711EbhGHtToiGi32MmNyHgyVg8w",
  "key23": "2E1GvbbtD3cSP4pL1ErBwehdrpG7FsayCRkpdf2PoJWPF4ZxNtz4AJeQvJKELzHcu79F7AEcuSfcFsYhnrvpKZEG",
  "key24": "5GB7rQkYU4b53YQzdi2MUVR6VgfwhCxcFnRnzutVQrQk7wu88TaUzE96AHPxwRqF4MH6pavAJwPDTaRiudDk3Krc",
  "key25": "2SVH7YgEidRJViTuSh5aaKb559UX6j7fy8xPdFRuoiwESqHoZLg139ANJ8j9QpDMULCRbnySq9MTThuWTeCqAPdT",
  "key26": "5TFgLbEfV1ZS8KUnHabqLuJWmhuhrwBG1bo3sGaQfCf8HsT2cRwKxjPrqgou2kFhT248FUgakGtkZWec7THxe5n1",
  "key27": "5NEYN2uNx6BcQxRkwBwBGmEjM3YaZtaCAapapxpE1BnrHG2qepTy3WGtVe4LSFsZ5oLfjdoxpusQsQZEXemdG4ef",
  "key28": "nWmXuzmzJoLouH5SexZruQKbojZn9ws1ejKUG5DGzBuYhq7vk3C3Xkh9MAf54FRyAhYNWhihyMk65k38MN7VApd",
  "key29": "3twJSLu6VMzC1e9YMB2ScbK84YK78aerzCLQAFJkZzhBLwWX155kGPyYz3Frw3dJVKgY4VvcGKgHDdZeUmDGhBCG",
  "key30": "2wZ27iuPrDQGp5bDcSYKu5tSTHzpBAGTuzBSbhx9EUu5ViJktCYJ3cgbiYsBA4GkaPAnL5dasegEEfPintRhgQB8",
  "key31": "4ST2MYKqToZFEPN3f9k2yu8VGt3ZgVJsdSpZF4997NKyR4TRGGEcth8jjhwYKwNduNEPh8BXRQxw2Zfq9wMVBLMr",
  "key32": "27KCGyKmi3HPhG8aaMpW2cLUb729oihVLNnsvETGmR3CJ5fr71fyQ9RAseE66GpES5W8UJYsVQ6Ex6MG59qPVGrK",
  "key33": "2W63CjiMEM6Nrk6dnm2uTETewA3zzsy7oicAunsb6TTKTWoQU9LpZ7vgxGeAiHeKa297qhPHdF9kU1FnVDXCNvov",
  "key34": "21KUxS6LpwNKcyrNoZhSUaNwjPdYjmPBmMetSunJuKMMReWeRPbrhnPzX1hLyMYYh4AF2fFXN1ttNXxAH2RJ6YRQ",
  "key35": "23JYcipmCgxCTQ7u2pfEeHxUPpb36XNCDmj1rGkUQkuY7sow7Qrr4k6hzqkAqTaBsN1nTtPYDgsgeJCGCQQEAm48",
  "key36": "54hSjFjwv8BMazg538VsAHDDaAsmodnZzekQTs2G8juuq3WxKG2EYekSr6KmnzQ12Tkx5TFTw7bEKWkLbqSJxMQf",
  "key37": "4UyV4XnuXVR436HB339wp93NfnPPxXVJBAxKc5BN9Ngi2vwtyBhXoyarnQgbpEqVzF6UkyB1r71FcRMU3vKeo1V5",
  "key38": "4NjRzUXbtCnnwF4WVLN6tfuCTEAnGepQDkMVqPpRU53djMrreexavsA5u4JyF1dfKTqNXUzbdFN3wR9Uhn2kPTpN",
  "key39": "3dExbJKwwc5UnsN8J3xVScQg6nUub2XxGGsWmL1t8BUSDs1gzbWEnhDE2ULWGoCp6qXJW6cVasfCoT9MPGqueX32",
  "key40": "5eFKek682nsFMmHyVTXeFuDfGc5k4Mc7MtffUmmtT25753T8aeWRrwsrZ56gKRrJjLf4v6RC7BoUqsiMATxEU9r9",
  "key41": "WqRw999n4ykZp1ZpNitedLKmjzs6zV1YEaBA64HKNDsEHACNEPPLmj81p4GAdNjtXs7fXLYkvYjtpPLpsKrJn61",
  "key42": "2FKDL8NsNnsgA1wr4dNGimhowohS6XmkjsXDDywZL3kX9rrsmXFqYHXiL6qQdArroTpPjFr6Ddq8QpW2xiCRQGW",
  "key43": "ag19rijchNJaXyD4jJWGti2iHEWmDhCyUjcfJNPfhqCdFUUdrVprygm8Vx2J7cEHsPoVjeVasRBy7MhTNxW8grb",
  "key44": "3UUY1WmQfXi1hsVmWXY4fggtEdZZiKEMURkaRycTpMp7JoZ3nBCGbKrPKUAjNAZTwBJVWWwctxAFYQkrshMKZiZA",
  "key45": "55ZeUa4FCDmLEA7a2uzwUpexeDPAcKaf5z73PbQJuDkzPM65yJaj8z8asKVyFd6qDuKnXXmpTVHWFcMUju6sn3vU",
  "key46": "4SvYmgpLzavHcG69FYsXML1LruUBurna3eT1yybDnHanGbhrqM1WNzHfjUVwSwBTvkjny2efvGTgqNhF5xDSfSWg",
  "key47": "4aknMNEQVbGQYF8Na6f2x47CfgoEBaFpqVbfB7vvyZNCg39i655sssGPh9SJwfA8rposzhskfHrW44q7q2BNyift",
  "key48": "y3HwY944gwzQYPubJ5DTwoPCZpknmDenEu5jLPHEGq2qgqUGAk7e278CYvuZa6XmwETyzrpHLY5eYDrQQimEGNd"
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
