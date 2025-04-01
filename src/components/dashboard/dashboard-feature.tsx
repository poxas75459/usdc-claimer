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
    "J8sbqCdcTu5sbZtVWxVkA1Jz93BusMAT7EtmwUgFMy2UaepcLQ49T7ji3ME54w9JpBKfCvLQturhvaYkVNNKnPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFL2jvrb1wZXUkmz4c897a2iyePVaT2biZT9uaJf4y57y1TthZ54t8s3QZxi1b3tgCm1XXsHezBabNNAfKsxLPY",
  "key1": "nsyb1jDDSrAeTneXTKL7ngq2PcbrQbQ1YpWXY3FM8ZGcNLH8g3K72XRPF1Rpq8LaRFFqDggG44uA7aiFrW5aFWp",
  "key2": "5nEDyGGeg2hCiUjJdjpsxBYCsLJzSshbrynog4KXRRejJv5uWP6HWnfjkPkzs8yTXzx93VRHpHL33YYeC5sAxnnb",
  "key3": "2VnTJmerQ7Zh7jBUsinzP6BceZjQRHTmf127o9uXcjB4c5qzvMbRoWyGGuYUXi9xj6QvuGjd7fS9JGdkhuPUGmkU",
  "key4": "5d1imaaVqt7Ak6TZjfuKdkXW9dRpFCL6QzyRLyZrNUixWAXkxVJJy8HvzPdMHd89qyXZE6EyVWnTrs7C11hwoCcN",
  "key5": "hGvdyDk7AUg1uy6LwRvwfFT75EBGcCh8UY5oW6JGTmmtrrGP9rRXyrSb6d5cUU3vztFGQWLHZto7Ct34JReEvw6",
  "key6": "2KPr4NzersHR3HAfSYMB82eLGdXADPnFMpX4scq6JHQx7swCviaMYyEpKf15EBgVACBJEAVFJQjbVt1u3JWXsHGW",
  "key7": "21oFvAb9HPmtsEtZKHx5JX6B7YJSKQGmKfmvdzUwtg6Zt1uDHh2kF9nahxwPqaqbjTkqPk3xT56EWyV5euAa6YRo",
  "key8": "5cy51TnjNQLS4jrAbbSTDgrc4vbsn5R98pw9m4pus1MxsiXScypE7Hvn5HuW19zwcojG35ubcCJAJzQ3jeeM6cqN",
  "key9": "2BKMECKwingRj3AC6UinRUuxiKvoJ6nNgsVhnyoKiJ5yDP2NqkgdCDTFqzkgC9CmQAaFKnFaRzSc9yZbDVhsafmS",
  "key10": "4P3LzHM4eBvXWw5v2KT5FaWr8wSsdma7NUXqg6iskp23yav9TFd2JK1fEkZj8NitLZNy2R1R9efyiioAZomYUBBx",
  "key11": "2CuUyNm737NswtqxzDuNs1Qh8nrL4r5GyhzHWk78s4qpuCER1Uk5XPzfUaH5VdXmMoNRfdaS9gV4fSUgpDPzMBWB",
  "key12": "4mFU41UrtKNFghmJXXxVhEZjUvtePjbQqsLXwqkmcsLRNZYUpY92AUkbqE54jBEUSPLDY3PBY3Ty7pPgz2v4UsDh",
  "key13": "22J8wSUedvh4M48pKh3gMPisVVxpFnS9CJmxiq8QK7gD5VmVn4rE4YNPvnhdQWbzc8Xv6RsDRLV6GRvCbrhmEwqE",
  "key14": "22aamkdQbqgg6UARin9QhqkPZtTVRzSpYAEkjdsXSzd8U96LQQ4SPRRcW3euDAwUCrRs8FSGjL3GqfYugVAkFk86",
  "key15": "KaML3yTy9fcXncJGitZJMd3VUaJJCzRPnjUV2mUTHNgDU9cNFUFAq3DC5JNrkWP9GN4Pvn5TSFYDeESYwqAfi7M",
  "key16": "4suZis5zLpwaRhaJRPvycqrT3Hi5ug1sZJE3XBaeJqG4MSczJKrxE43kxDUvqHWq1LuSzH8XZ1p46fcKf9Kt1jLa",
  "key17": "4TRmv4JJETKQizgmk62DivtKfMU7pGphZSVvjJe4YZBPJJnUDAW8nvKB14fmDT71D4ds8U8EAkqiYeabwg4mJatu",
  "key18": "4uKA2GkBZvvFrZSf2mw6CPvYJatfrcq2B6GAqQQm3JRcZd1LTpyiFAjQCzHQzXs561SUGgw6ewDSZiLMiL6Zm5Ju",
  "key19": "4d8B78MZqMkpPU82oMjY7SdbUxxpTcCWXiH1dmLEf98GYtuQqGaJvofVFMkjGYhU1864oaFS7RJTNyEAkKHc6ZB3",
  "key20": "64dKmLV8RXA3sDug95uhazusx57Jx2x7JtGc1B3zS1aqbvmM2Zzjxud3hgoC15Potv8yvq6LhiMui5Y9tuja2aXe",
  "key21": "2kaGGy31RiEqpGzjcSUNLYZoe9zomkRTyDejhGPcMxuNSqGFyCBsVrNZ5RRfq5yvdgXWBk4hy62FSquwiumprFth",
  "key22": "k5jwaARhRSHU6SdeQS5tUzwcPGWCqQ3djfbciNx3tw94baC6x961MS92CD8EXadynLiRJG9nG2nGKGTxUViafAF",
  "key23": "y9uSDc87SEd8a3jThiq8oAjmZm5uVmVYPrXZtK4xR4eygYRNkyz5WbbVZXSWmTHKQmGURGT95YVACA7tCPQTavv",
  "key24": "4gdEQYHZNEP3KFvsHDo1cHT2zHRpfdECxQD4TRpNihc98dX6oowJHmzXqR7PvtAXQH1jNSgM8QcQ87tdYaMUED96",
  "key25": "3Lt2Dn1k8yiahhq7MJ8BzXp7LMTGzNFfSLTU6xM9kp2z5CkFzuqqWUBMbiLq3aNKVYXRaz5Z9j1mhUbNw1ypozqW",
  "key26": "syFbCiqK5LPqKwwgGcfQ8DQm2aQK16C6WrZniN4nLayHZbPfYgvHVT5bpM1XJyBdVmigVqwZn7s5TubFYsY6sQQ",
  "key27": "2zd6fJsvjrLPqfTfxttvH3sWQBmzKLkhCGCRJnwR17aKdBnuG53yckYcx8dVYyc2fLbgqS8zaCLvYRvvFk6f2bAW",
  "key28": "5P7jqhg4BEHQ29JugVd6CoiiMNBMbXyijasxbJ735TiiUB3yi7u2yhbrc6iem52HDW7R8T25coo9xnNV4mNje5nt",
  "key29": "2nnyAunGgNJpRxX6KAdfZrT8bExrJH5jEMsFpdJFfXUiTzvG3xQdkaVgDGLcfoLMH67QiGe54eDCG6tRAJQt351u",
  "key30": "5CphTcdcBZF2JqNrkdVMBV4zXNVufHUE1NFHQmhobdjmqLufmBKiMv11eXrvZ1vs1HMQqgH9HD92hqA6i54Zkux3",
  "key31": "3dQNAtN5TsrqLj8yTmZKiZMVzYzHrnyJnXEEaFEYVm2frUnFWwc5A5696thx7pf4h3AArnuDz69tMJWhWKgGArgs",
  "key32": "4KCuQfcC72qxH9Lht69ofX7iQScszHW5dKHHf2GB5FxXNk4sZtqHKaayoP1tqXLwd1wXh7Qyqj32k6nvkRKtNubk",
  "key33": "2HFFRESPA9G4RVvNAVqX6vAv975J86TfqB48Y3wpzhBSFNaPUAv3u9Xkj43nAJMcdgZuhAwJTY4joeAwnqNxWkPK",
  "key34": "3Puwfeft9SYHeSpMqMqeGHPXPnoipBDtCgGpTGXJwFgXjQocMqKQuxnS2WESPt9vPF1G3yPchJf9zA7hybC8y5C8",
  "key35": "sbQKQGV5E6Ui5TpSRNcR2N9XLFamurBzSQ5hgfZ3YeErhrKW1SVtDcEkHBeec1EzFt7jHC6GnLGnVJ7n4iMSeC5",
  "key36": "5oSMAS8NFdVY8uwohnfjuonZWkcaVShbsVFxRGKM35ytenjPPziaD3byKJqtZTzT9C11r2cs4SJyNVzfKoV2T91h",
  "key37": "3ZkhRiU4LrTDnEdNcJGFpV5f9NKjDDnrt2Hg3bFNWMyp4n6HDMujpkfEbUMXQXiJDrgarw354vqRiq4kuNAPUpNE",
  "key38": "48JSnbpfauiga9Ahau99z5jTUkuqba4aBrP3dtSNuHZWuFYbm1cYHiX5wEL17XEgjJxSPZFdyCyMZd93qDrq5qDa",
  "key39": "eT395yiBWibMEUU33bcT9ZZRaPbugaYrbt3mHE2aVPPXEoy6qPf22VaAXhm46KqJLxKwpvznNuWLE1NrNrreZqc",
  "key40": "2212XaPwhP3F44iz8aQUpwwQ9ZvuF89ETKrPiTFyUrv7agSZvQiFMoxVsc1S7s3eGQsbSJUQVkYn4MGK5vsn9xAM",
  "key41": "3MSyRxb5pGQnEjjHwQsPyRCLcPHj4Jse41NrzFvCp3QBRBrRm1Jt8PKYAqjp7sCPkLi6aqojxxinTLrtBRPTWAwm",
  "key42": "5phNtQEqEcVGNaA4MewAiPDCa9qddjQQsWm7gAc2X1ZzcyddNajC8XvpsBAXg6hnYyYSbWNLz4PkpLoXqvrb5jT9",
  "key43": "3uXviWBsjpc7ENjwMNmT5pKoYk7gd6NAdyKZmaciJq7ExkoXwa3Eg7VTGLBYZiRoDCVE2w2jGqRz7yEUwePr4sKT",
  "key44": "3kHfcK3kn492SUFQNp7fJ4XNjZ3ru2GJW65CrJfEg17N1dCwsQhZtepccXCNxwXib1eR7uxxEFtPSZMtw6GX9FdL",
  "key45": "2SRu13Ki2iCqUwpMGP1hJje3L83KQTkvLGiKPheGPf27XCUrMycKXXJJeqHzoZjKL1EkLxL7RieFCnFPDTg6Fvp2"
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
