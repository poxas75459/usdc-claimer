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
    "5GfhqL75yJG4hNxtRLkurcwv88Y9aqmtpyZ3pUWQpxCpS5SgmvsfgcKooEBAo8emAKFvYnbJY9AMVVZg1HmUF6f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgneH1drh2FR9hGLUYDwqK9idmNitAvFP8NLnTdTgBAyW7kCj2Earkwrz1H7xtV3vuuqUMoZX9A13G7T1KrTpd9",
  "key1": "4KFL4PRtMibJuu9FZudmy3xynYuB2GWgtKTuFdLctyBrUgLurJqvKNhXzKaPxzUhGEFFCbZY3RuZBg5c5Rff7pkN",
  "key2": "2CPa4s4nXvXFfiuG1vYJFTqGV2ySF9MHV2gEk6A7WJ2cSNG7rfNq7D4RVN9Podgxqa7Bg5wy9nHgG92Bu1Ji1gKw",
  "key3": "5q2ncfJ6jEaA4uzQHf4WZXvHkjckuhAy16hRvPYSZ5oBNdrzrfVP2o65RNj2pbqJBAvDW87VA9nj3sHSh5fko2fE",
  "key4": "3zp8F1vR1DKswu6df6DvU4d5pV8JoMjwkaYKhJwHagDpEnb7uZvpfaf5FeqRq1aH12JmRu9dbmX5uVb54UM91KT1",
  "key5": "jUnUja5J1ocRmRGuKycYEDF4BqjcgqPArCeCKo1rx6nnS4QezZE1bmBoKn99SHxd5CPtg3Zx2r9DEAqMAaE4NfF",
  "key6": "4XSGWmr8e3Uz7Y7pnu88hLqfwwY5HKAPE5V3shrKj3N3iFTJkTRh1S6Mps8FAnPggEGyv7SKxRXZ88utrsJq6C9B",
  "key7": "44XWa4pWrmtAhE84J2oTCj62fMiH9EchqEyomVijqUiBRPgfkik81eVrfdHf6yGJtEXqW8ZfbADxPVroXxE4TJ7y",
  "key8": "2Dhn7qEricwvZVrffkNBc9obWJf9W8bx2qwPGBpaAxDBTJgDfTuZpWV55BuSQGDwr4KNaqwmHAtW9hxbSEjG91Ai",
  "key9": "5ARqH5UqqE1pctXU2HepubH7Nabri8PSQeL9HurKwtcvnKzUCLUJfffJfN931LPdzGQRGaJ5EwcjTE5r3K9fN5Sz",
  "key10": "2J3eyE9NPhJQsd9rAYpZZcAXVRdX28nW3FPnuufzNWmkhP8pKaALCMwdVXmdxb5NpuQzxv9CWJo9Anpa1WQpBx5M",
  "key11": "5AjXNifbtw5qKC2drymoie7FmtL3MBdhX1GdTNhA7RTqUfLpyi9ARK2BF331RzqukL8uF2k1yg4hvEHCDo6e3vCi",
  "key12": "4A3HWsNUZmVshEbkDWBxyZPR2QjkhzSuJL33eVNQotjfCfoyiAGbJmo8VL3vkMmNHabwYUgBVdfUR5QwXHmMUgB4",
  "key13": "5SaRNH4tkwQ7cr4f6Hd822aZ8XU25331byTcziwafo9z2jPCmSiR7hMhBCLW18tKcgJK5vu4kyq81UBB9EbkhkNa",
  "key14": "5AcErB37DTh6SL413R9xYGD7KNGykedhe7bPZ8U7ubw4ktm5EbEfJ9vypLibKwAmno8A4rPMyhzPEo6PRquM95Cs",
  "key15": "4MF8UCx3THfJtkfVGimjtMpH87uoQHBmJeNPMS5aLQgZk3Xx45wfAijbPVg5dzVZAACQbAdiFdmgjZXJCfYVxtwq",
  "key16": "31ksSikgotjGwxq8haqsKFRS62PbNxMkaMvRtsxScsYD3YNFXeEa5mMGxbvNkqTpzy4ZcKJMj7dfXdvMkf3ikvDk",
  "key17": "2oUtwVTakdDKEdLmoYNSyf1Poo5gnswcT1kPGXuKikbGUmTC8jXhWNMb6DDiLvGVubLVQDW1t5pZsqHBN73VGYe1",
  "key18": "2kd2qpK147BydQevTQ1mXTP5WzCS7VJyunBLQWe6ijzrmz25FMkUhWpYdm54PW2o41TduAPHXFoCapbgwGxeMpej",
  "key19": "w9yg2Bsm7AEqm52CsCSqD5bUA2BgjzcEffUMhtShTjzYUJ2bWfuepYM4c2hxpZ6cbfvxR7PGSPm4Rf1NBoUHP91",
  "key20": "3W9A8omMuUBAZLgGBd7zGbw2WitAdZT323aSZKdqxEWfchVehE9g1kiRrH7cjJQrBJbRkcZSPEWLcLrdMKejkVdM",
  "key21": "2DcBoqvx8oMcC8Bqi2obGMdA2NtaqvffTicWvxJtkofRcjYorPw5u54yFz7papkoz5AD7sEazXdbp1jgm8C1193Q",
  "key22": "4PcAbUaJxZB9bJ3wX2WhUUme477oMGh1KEmhp8mK93Gsm9NsMwAnybQtcpVtvPNjuQAbyPSYoxYYKYwPJYn7b2Us",
  "key23": "e3B7RL6uzS4ZttqDqQDcNZHMJJr9ZmgHsrowuunS25s8vJdK6ZJJnMQVuK9eGRJeyfabD874C2tEvjWELM1h7no",
  "key24": "4oT9NuheZEeKMGp6PiwAdVXBncuA7hCFbCDoPWzwctr7dvxm3uYCtdvs4RLrE2d4VUESxcPZABPupYftjkDVB8d4",
  "key25": "3aahtByrhBGhRg6cQxjRWdcWnmU8eLo6fsZwe6UseJxwSKcoQfwz84uociaBr1BJaC4NYxzziaP1bsJfQgDko67C",
  "key26": "5c2KANu2HZrLZkPtiw3oqmMrpcWnmrSTQN65ZGgyZe66QEyUG4rgz78XgJ6byyo8645Ni36fnG5KaAjeyGvvkzcz",
  "key27": "xNeGHdsEfXCiEJ9qiixeZPLSsE2kbsV1JNFAst1xspafW7d9M1U9DP8aWvGN4YMHCqzToiyC7BMeUMBzMsVktgu",
  "key28": "2pHoKbcdnZpgrN995gKUDoS6zrZuDFWDgesPeiPeZWVotayG35aRa9VQnha2PFEYTJ4AivmNJzpEAHKQv6bqeFHV",
  "key29": "zoVHn2cBzaV2JQocRDLMLtvyTNyqgEiBBu7Lg2dKpYviNKHX9Fhq3RDxm76KYctp7qV912kHi2VePzE3onJ9jvv",
  "key30": "5gEUEEjgbbKwkjbYZtTcLcxDfZ5TwEoXtuKVMEM382bccucVEqZQS3VFVGNSNqFuNGVEwtodm9DwHTbCsjM9W5E1",
  "key31": "5Hvipiezb9UBGsHK7APWNPuBuHHpPjD3VRwYTtTkef3vSKkJsAFv6Qzod1mbLgkyBf9WfSN77JuMT36us7oEQ3Qi",
  "key32": "5USJmNCWTiGq8PN2pN54QphmL1B74NeJyYuvFr2qygrjXTdu3FXF7fafLy8HGJBkGUV2oSRVPBrERKnLDrRJcAkT",
  "key33": "57NkBSPenBeowL5XnMxB8nXtQGZtt7mGvroNZEXStTazeoCfKhADkKtDsPgy7GYRHYVbPrmHhfZPzTfraYk5iqNn",
  "key34": "43H9aF1FAxUZyDBwCpNmWcuhETdCB1epkcyEK4H76KFUhRbJ3tZWVordKr1KbHGSyKXEzkwMZ8GmvaRLYDAyuMqZ",
  "key35": "3ccRVdX4zEkHfbnsdW1NHrEm8qKJm9FNKXerGjiVc4Dnf3EUeE8HMSf8puJRtV95qfHLqjkeEMfbcitqiAiJbPzn",
  "key36": "3k6vD8aUNkLUxb9QiksEr1Lu2GKd6qKG5FwdczMSmk8QuMT9dExFB7bRRZGgGLppcdkxeUoYv62Gu98ATbA2a9Pu",
  "key37": "4V7sbRGCt23qGfCWk2TygF533i5kvbnEq8FKN1e5Yjeee1q6GWpX6UhQ4Wbp9AQSKVYuPqvFHvTPEyb5Lgmf8V6y",
  "key38": "2XQVwWVmb7uRBBjsP3C6j2e4PFGtkPLfTR3KjjoKPw5ccogu5ah9cEBNWWcKfpRMC4Lt9g2RaeiizVAQiiB5DbjA",
  "key39": "3TsoNeanvtLcZMLDUVpJuVCYNwLaAQbJfkBjz6jLu97jnfK72YoqLLQV3T2EiNdN7QoQnW5dxxBwCcTZGquR9QhV",
  "key40": "27AmjGT5yRCi87naUaaJKVsG1C7k3RWUvyEb9dWoNwoM7WyQwwm2Yb1tDA3sMYf9BVJuzbCkqULAWqSUk7kwJkbs",
  "key41": "229S3r3juzCtpv5ghS2KGXrrTCWCiX6eyKQGfrgH6WP4ECNHNyMk5gbqThQF7o62AzTXkhjm1trNukYU5GbHDPJ5",
  "key42": "4oGEAn8xSBNGRh1Tuj6jNh5ScDhGkneC8usWvqDg9YzWB8kemjfkoHoJX3hWTqhAYuYYE2r66hKqsoeumJrTAVd3",
  "key43": "23zLzrwz5Q5Fw89DNhrvE7WCwbWNVokAibZvcWmTtN3dJCnyBPkAvAPr6NeGs9Z8Wgs1evkCykXnyXJjfYvh4pEX",
  "key44": "3f6BHyD84xWg99hdTqSQc7VBrmqaLDLdxCc4is2wx9GUU2L9BnKT4VS1BQcAXhZvFUCeHaRANJ2ADCzobCZJ9uuW",
  "key45": "65dSb1LPmwCaL6pp4hrZGWcY36kVwpW1RjBAwx7TfEmU5JGgECZ5UGKdSxuynCigDi3tVTHMovUzE2XV8PKaZuv4",
  "key46": "5oUNKSy3E9m3PoDPx19RjCqjShLUBBFfmCsneEtnMqRfgf3Z9dxghyU6mGGr3sLUgmn54WFy1wZRv27VFXaCDhce",
  "key47": "53dj1aC2WEWRaZugkiJamZ7DaT5CmaenwLgAAK9xugfSYAw2tPdEohv7gUv3ZNnujNvyga9cmKkhko6WRNojvpku",
  "key48": "3KsKWzpfC8w51VRmMmGGpxCMmtbb2mcwfrK1fL8oMXcBaq2j88DMbr6X3xCg4U6AV192Z7jRWgKg7rXruboaZFEe",
  "key49": "5PBa5PdM8NpAzkPgkCMdwNuB7wiWLAZ9w64PXa2Pch9MY75nvroGxUTZUECQ5sUCWvowDEsDowdDxM8hUidtQbWN"
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
