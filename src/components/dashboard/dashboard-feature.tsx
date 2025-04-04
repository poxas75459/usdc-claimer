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
    "3Z1WgJVbTjHfwpLc62hguawuv1KF4PuWhYvSAZ3gt4vgQWffVhap3wFbURLTBvBtnb8iC4zff8e7qxaxLYzkBRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KTu3rRRy38y6A4k4N6Ter32DCaZabMKQ92acMWoTA33iQNDjTeHTejGyGYG44ocUH9DCS3ASMUciinFbK4CasCb",
  "key1": "3RsEb73LVjgtuoW5HDEDvVNetPxJVz613jMJYEqqb4h1nbM4U9m7sT3Ue6o2VAvtAMfQtPEEMuUPkax2aYqanQ33",
  "key2": "3Hj8oWT6qLFThqq9RsniLqSfcwf3K5UAmxZuFcdgWzwfA9MQ2PtKgBUJvYH3eZDLAAf7UX2BPbNSic65fYzeMqZY",
  "key3": "3vzixYuLPHNcGPuTjRE3rXV7GeYn1FL3VztcsSMHgjSc4gr8UByWwU6U4kk9das8FAq9cCjGsiq6u24HYYf9hAKj",
  "key4": "5L9AeBFSZoDikjF8sNQ4vpnCQqcHWUTjn6ZFpsD2tZagqi46UYAqsMkDxzmR4QmWSumaxwUC4ceZvzHugqfnJnSF",
  "key5": "4aUQNcjya6ktqewGBVA4DcU7NBHpUaSGb4qFBBT8bGXsDG19eaUtXAgKrTXQDarNS3uLRRr2mWNsmgHwYEhat17a",
  "key6": "5A2bgGeZcSUaVjQJFjPZp1QcBqEwsbSrmeyCoYdrnepoKrnHHgWTFKa12yj9krMHf2DyACbeyb6pji9RxuMMWkWJ",
  "key7": "GdEjbccwZbuLKvymdBFsaWgs6WZvogoprqdtrW1JiQF3HcNwtTuYf6eavhTr2Z3F7pRFdA8TQz1tcdywnn9tABx",
  "key8": "2L65DbQHLzfsDx8qqemvLfRFgdhcBojtUGGm2YmS2yndtTMoye31vqtCmbPqC3d9EJLBfmT3a8Hd4KTwPb3MaVJE",
  "key9": "5Fq26MseKvbkeDWJkJQXG8po7BoHJeiPhYyqX4qzx1dwY9jLHUQJSQvWz6D82nNHKc41FUDmUXbdJrcDPMCxcH9N",
  "key10": "2CqokZDHzT4fSjHUUiuhhnZLvQSqNxPJV7qQsmSYu1q4jm6Vorx6veihwe9YzVYESyinVqVe8wEo87N9GjUHZx2S",
  "key11": "2VgSGkFr3sVraUCrLNRYkxAq9zAmjfAKHSw9YjGAexj4AnEouHdinRS5riEaU8tSyeJHrV8kCbqtDS96mN6k5jdk",
  "key12": "5NerTLih7UuXtF6RfViqPqq2jUmo8eCXSMPZQM2kCWBD5mpzPQmYEMxnLwXongJY8b7jLRZGotstXQB4pG2jXeiG",
  "key13": "1XpBqCwPmvSLkyF6fFaQzZkf3mWBcFK6eD9W1R5z3ERAk2yY1kEMPSsowBsFG9WDowMBfFG76WWGMd28aLHM9DL",
  "key14": "2N9DAVox9QfMNWK4x1mVyCjRiHWE75wWU8dAsEVpawwzV51QhiimGQY7gLCfSsL7pQKHQfSvKdCvrkEQQwLF27xK",
  "key15": "3xiM89wLK2K42UUUrZEyhCyc1yKM4AEyTL11XBqAbX9pFuujjVFrVPKJK3iZn6ZmmvPNRSG2XWTjtgtDoKqfqFK6",
  "key16": "5xbTjKnVCUThf1zhyLxu5L7S7E9yLxNDEGSgwoaoddF8uwBakfLaYmdgc28WzHbTh5pyXt6nu8vRyHajgiUWvCFW",
  "key17": "59QeLxXWf6V3t3kdyWEe2jy9fuMq48U2BuxnXz1xVVhzcdVWaZscTyPXVCThjzBGDw5GHC3qpw643AA6WhpzTo2B",
  "key18": "5sjvQbByMu3JtKrM631qMT26BNqo5UwgejrPNTavnnyPsC2EXComyW2ht425MLfAZDSHQ2AgTk6njv1qJteMHTUZ",
  "key19": "4jtczaefemacoKFPoKe6m5CsiG85cPFCeX8oGcj9DBBigKnNFSrbGMqvMYa5Md1jHtYhTeM5gRyDVD4og1ykGJKR",
  "key20": "wEqvPYujGUtkmWRWd2GEMZn6Z6thyoFR563AyEQdhXA88jA8PzekFyBXoMoDrdMqXsotWPw7nrUS884NzXqxMha",
  "key21": "5gicV5AeieS5QLeyMtc1shsLNqvoppzKhjtzBTrijXn68oeCUoUm6ajqDbpgpmvPrS1MVpzgkokZHxApwDfWoUc6",
  "key22": "2MnjN4s3EJn5u8y9VrnWFUmAauh7sLxCA2VJ5sUuZnHuRiDYENZs1wwqxo7q4CqKi5QAcXebr44HYMcneC5R7SQH",
  "key23": "5VwKGVfmcUGihVkHEaVNrENZC9JBE74uwHX3TqwTPgUUTZpzTHPFdgE5E1wsWCo8atN4qansnH3Vx4rSeU1HiJuD",
  "key24": "2yPf9ydQhCdyVjU2hjVhxcsMoGQ1at1RxdSVX2Qqj4GxokEsS7LuVeHPW4tWB8Co7UNCJFYmt5MMceGCxaC1yo52",
  "key25": "5tzKWuKLnCfCXvGhYBqG8wUxct2Vsa3GtZmmc49RNdZsyfRhZ3jZT41eH8HuFoYMwTA15EDiQ43qrdpdGYgRrWLd",
  "key26": "X1sMYsn6cGA6CpWk94P5AhwnXt7ABZJ6AbEgiWk7LdfME8zKT5V8pECHTfWWr5dEBwA9HCVFHfmtF4Z1B7veEKE",
  "key27": "2d3xuwUNhFdeR6KCSv9ZfAxYbHZZLB2pLUoiKjdo9sourUrCH2DK117yHXk4z2zk6Vqb1iCsKopKAsJYP7urADR",
  "key28": "58AwJLQ2cqkTk2L85exWgXzAdGvVhoToummKTpynSF8AnWoEiMq8KCA2j4fCZokVAgDDMHRPD2DGctZ561sYsUG2",
  "key29": "4N2sarkYTFb7qtTMb5p1JNLqA7UE55QUwx7vw6mpKBB7ouUAbJeej7ewpAzkLDkazS9da7KZ1yVv6n12Jc5EK8p6",
  "key30": "5Di9pUuvcxPcJvGwV7YpLpyBRdMbkeJ3Jap9XhiKMYjspczspsogJ5ugbT11JiP1xepBCKvjJG7jXZj4fvoC3Zuj",
  "key31": "3uRV3RSx3zV6p33FYnyDHQCib8D18q43KM2HtVzQ1it3yRvcHGFdrF1HCpP187jWSKhrt8DyX1EBowQWD5uF6njV",
  "key32": "4MNBZ3bw1BVebwPUzYotf9hj7Z3sc9tJtNeGiBPJZdhwi638LuMRYeCxitfQRAWQY1DMprrbVaJwk2LqsLE3FvLj",
  "key33": "3hzybwqoJyk6JMd2moBAEpbcjWXDYgjUYewm8PyAfQr4UXJnSif9Lru6beuMM5FzNVJvv7LVDMNYWXHo6FTr46v1",
  "key34": "8gseiQkZzr9XzTZz36L8wPkvZ7bVHxHG1qN3bCcFjX3PhL7yt3HVfArwSN4Kwtp2Axk9mG2H2gwmQCiz13RRWXD",
  "key35": "3ZL3EoevtUtTvTFNALd9yAfK1CzM3VcwWYAAvJX6jmHzqn1JFoQs8S2LZ1G4PAg4nwznXuzvWNg7TEawSWsxdTrC",
  "key36": "5t9XPPoHkbViPpj7pbB7zBvRbcDH5EBDvZbHPkweRCWBrq3DH6BPxK68nsRzgL5iy2A7zSMj4wjqzL3V1BTb4E27",
  "key37": "5knvcaaPkQ9KfqR668f4ZuFSuRKgNcmfESsS6mKXNYxyKtad3Uvq6qusKaGBM9b8dChWVGAbCr4cTp2hJP1KQxgS",
  "key38": "44Sje2vGQgWpZ5XGDavM5E46EEzmUkJLDM19Q8pTfM4C8jdV6obCfL3BYMfoiCCGwjJUcdeMxJ78RTWL6Dgffoia",
  "key39": "3KnjKL1QMKr8zzcRgpF1eSAoYQ5eSg7LoLWyXKJjmrUq3Xd7RmQ2TFikc3BmBk3MU2pbMra9sdsEZXcuFvRZnkUP",
  "key40": "5MiBp9KwLRQA9kJG16GwrrCFsjzd9staGJACYjf7dN4sC77hUuBqEausH48hLB5Q24bHzLfahDEQVSK1dWfsokjc",
  "key41": "26pk2XEVds1y6SGxKWSGJDHJE2qcrtucidJXSnjYcWPGQbpmLnchMt6RFmX41zfxTKA525xR8gLcHbdtdQnqvxSM",
  "key42": "61DRzRD1hDJAhSCjuqtzPNYHQzQ4bJ2b3hphaGComyi8vDxSXpuK8v28x2LC47CnfUSbXYd845kG6BZrFQsqPnn8"
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
