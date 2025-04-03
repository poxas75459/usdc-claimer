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
    "5YUyuvwg46G8cqvZahgJzq5c5fbrPxVUTTZtK9Lyth69jXaDqWBEMmpFuVGKiVws6RCsPtUeunZwov3vY7auGsg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nv7H78acVFQNREnUAdmQfBfLrgXz4edWuK6XoUJtkXYK4yDeH2e75aX59A14XMg5godn6EKfQZi9vZwpoRxxKMz",
  "key1": "aCAGrbh5p2trz1PLjRJbD5cGRR2otL2MmRFcKo8AL4MWHoiJmBQfpExRKiDurtveDZTxpwwfYF78xChSuiFpNhB",
  "key2": "4ykzPeu2TWDW7Li83i6vjignXcLTwr1vTC8yFAXGHubfaVbt7bHdG8KxkTMZeuTi7pNii7X1FGzYmqRCX35Jfbji",
  "key3": "4YghFwsBzShZDdPPCygcaZFAvU781cnNsqY24sZywuUvrS5rs6XhtQaDrkyMKAUj3Q9BBjVndhkD55UfrqW5oGBh",
  "key4": "iDnkD3dMnVoU83n7oYrJrxDqH52BazKYVwt28WtLveDr56kNqixRiwWdrEZctqj9B4BZqJNCZ8FYxiQPjJ2xwwJ",
  "key5": "39w5WsBBeckxCZ3RoFLRwPRrcnht7GF8UPd32xp5MxA4ggA76noU4G9Y8wSSyYr4v5xuARNM3UaXQKFBbzVLCDsz",
  "key6": "2SGN2oYUiYxiufveRgRyruJLiNHbiW8mCZSyZXWa8DAgPoUvMHRBfrMGaRTJNBnqaoJM1JPppWLhj931SVWTjhvP",
  "key7": "63F1x63e8sDwKXJc3S61gCZEcZogWpokQWfAX1r1ucuW74nJgKfHPicqeancXuJsk44YiQbGM9PPfyC7eQau6Utk",
  "key8": "24W8FviGV1wurZ3Hfo3MAZDJ35A4iE4r5EPZDQsypxydySNwP6BvT84PqTr1j12DkvdcaHbTE3A39Xk93ecHS7Wn",
  "key9": "4tE3UogpL6RqY6mPyM53pC8vVCBWpP9Z1HjwhDa6GqKRTb2renP4ZYccNhGN5H5i6HcL6fdVMWma5MFjX6bPUChm",
  "key10": "4kmtw8yNkEC916iB2pku27Fe1fSr93q6htwzAo1yxQEJ1cekXRHrc7ief94Vgub6ypycFnn5gCC1X75ktBUaHsf9",
  "key11": "3NVSRVYeuzGuQeBJ2kJEpF48u1MScJutJ6ZBkum2R7ZK5wPiNbjziTQL2au64TyhRjTBzYhGjYndD1DvE38KgBj8",
  "key12": "j545K2Xo7b99wZ6ERLbzC9ahWnTBDYeqv9RuAhnoBEWB2H1RJXgSojXVFLfRe3FN7BKePbWHKYnV5XLxBV5gHk8",
  "key13": "3tVDmhEDWnrtyABch8cA2CP8nauhzTU9iEshYQvCj47weKNQkhUmLTeNZB62PaMqTm6vNM2xWKWrSfx6K5ehTy36",
  "key14": "619T4ZEE9NLm1p4pMrzALP8VEdACusdS8e3uxky1SSRwtXfihrZJF7sbwtc2St7M7CyxKMGbakixqBHBUtZrrBbB",
  "key15": "4Y4yow1AkFWQr1hXFzF9yRpKEbkatK2AK9qgcfYzyaCkbmrnJeCWkQdWLsvtmVRHQd9QpRAUppoUZdsLyJutRKKj",
  "key16": "4mwHMTtNjrMZpDmBMvahePXLgVfFSCawWB3b9vFqo6RhmLJ3b6P85EKBQ47Drtdv3Ue7pfkpc31kgPMVTjkrq9Ng",
  "key17": "2yVi6v3qLBa5Hyi9QgQKghHkJqF67QhVMDsntRBsXFoDLZfky8YT5TgViKvyVsrqyqGNqcgFjhLL7zpibK5qdpWu",
  "key18": "3ctSapG6vHP6g6w3GQxgaJXbhRC298L4jSvmxEo664Q6MPrKyDCZQyxQkkY3N97QsFZeVB9xT577SH8TSxjG46ib",
  "key19": "4MDiFFifoGtswUaNu2uwZ4EUgcFsNQ5DFsgCbjgBNF5vddptvUaSWj2X211gT5knmj4DM2Eyo8iAkrBnkUCfhxk",
  "key20": "237izcAJ3gZV4y4HHbGN21f43YkUE1bxfgcqmipmG1zaoAEt8zitttmBk1tUrtuKb27USdGLENML2cVqwrkEkAN1",
  "key21": "5anMjU4QVkWuQvjpGq9Q26ikQu3Nzgo9V3Sjvh8U61GqRqpvpS2cEqqzr5DZTqkWbLaTN2XYC9LVgyxT3Zh9kfxC",
  "key22": "5JZeDHSJaiUSJ7RooMnCtLXkSNS2RDxBeX5gqrqwKJbMqPMC4hikPuHyVr6kWEz6NT7V5ZgbZNQYt7vkJzteHiDB",
  "key23": "5q3qBMLyP8vgRzzLLXjFxwQ7raNpE498fx3zJ4wLSa8bRqP3bKthdR417ejcrJW6f548pEsvHtbMdWQuE8Uy6UuZ",
  "key24": "216ZqRFwm1wxXzqcYS8siX9fRmGFsgkEwTtBrL3FChYqyfZgJFU1yAQPj6pUzLofucqqf1oAQt36XMtzxxkhbPJP",
  "key25": "5dzPdsiKAXxnU2DfxjUzc3XWfVEicVpRnC3E6DFfSBdZqpFFai1oXiZsQKAF4Yob3bjNtarzU5iEhH1BBANu2vg3",
  "key26": "45aBFfSzRCYJqUUhHgPpKGLeUiPPrYEeVSyxjiLXTnC3nNaD5pyMsMcNwaEGDEGJn9gCcPoNpE1jf1pLvMeKBJi1",
  "key27": "2r4RM76UEUf4nyexPXQc2Vc1U1bfH3VG63Kaq176V3eKhppHgTFpSnT22BJ9n7xpZAfX3Kd8pbtXUZcnwZmEBbX",
  "key28": "3CFKNuAvv2Tch9yMPBQiwUYHXm7taUYFzBWsyQTZibTBRAmCJmyckQrYssnAt71tD2NteS1kM3npsvb6EesosNbw",
  "key29": "3BgM2v16o4vvLwiwEDx781iVZq5M6xWq8KCJW1AJnou62v5QqaakuZnKXDJpif7Qoo33AyjgMY2ms2f5tqKEz6qi",
  "key30": "38w94Gbga4Ufi81MhnBN19yNpA2bqzMf521J9tLF4WYJ1qv4wzsXwxHt4wDjjFbrgxt1audtW5cc871jcbavQQCq",
  "key31": "5ywUpkFZrMVuoB8cBDRYHAVpXKLN9Y8Kgu2TeCwSNNozq4tqYZyDHYuJLhYFt3fwFL1mYgUuZgUv68csAKi3qUpn",
  "key32": "2pVba6rVHGxHBxwopiSTD3a3hwQsEN5JFUFX52LXyru585yZX3DW16Q8AnakAgjZAfBq5Fp8KXuREzsPNmsbbv3j",
  "key33": "3a9xYuH8LpsNoUqR4t7WzSnuHe7n64qJpkeikU9ZRY3jCGSQZxDhDrMWAZcuyG8MHzbjQvVyo4vkwCGzP7kmDtLT",
  "key34": "xmp1gsbpb6927s4J8x8eMNAZCA38n4h6jdqALG1iuhVdpfhVQunt8MdyfGuS2FK1pPo5rAo1Y7LD9MCy53xokJ3",
  "key35": "2Zs4Q6i5pkGtVpitGTwa9NL7sT58oswE8oMaLNtPXAv6F7oFtj15GjZs322F2FxhuPvFctdY5iVbiFyTC8MC4TH2",
  "key36": "2RbXYHw3Y9ggBo4xjMP7KbMF7xbmRqnuFv8pCdZ9SvBJRskSFRTwYrfkF3c7ThMsPc2NdVGCLKqxNWnGcdqRd8TY",
  "key37": "2mEA8dDnaGhdWTmpwdD9BhVVwg84xMzWxcHYhUbn4UDo9n3DX5vTohDjsQwMiF5BbEWQpkL5RrAtk1kB4fdAY5cf",
  "key38": "5JHP1vBfMcdfqoVRVDN2hQEh3FRBQMi2wBFDSXKyGVi6ZgBDVq26UQHiuSkF3NYQStvtxqbLf8CpngMRoF6U183y",
  "key39": "4TKkL2cQarcQFL2xA6LzLUmv3sz2zKE1qBYWPp25GwVdA4s3WkR9RHrxnnjSoyRWSF82KerScQmruxhFrCRWCyAg",
  "key40": "47re5nskso9GAvvwDGiqBc989uC4dX1ogAVRvg2Sx9vHxhHVyu4eVq1thwsqGL476H1hp4cgqb7qKqCznH7DtWfW",
  "key41": "3TR82xvbft4bcHofGrSTevBhgshKL9ut1U2z7nwmmjwXmkpf6Q57QUE6Pi9t42ty35XVZAtwZCwJCbveoXHQ9nku",
  "key42": "3uEJe7HDzhhhqWD8oyJUrg9ygByj1vwTzsb2nomVcJq5Ka9EExeADG4RZBKHJNyCypRj615Gk2diGDstaiiTZbHR",
  "key43": "NbAw8ZkJkP5BCRijtBELWBevgYwxYgVfQSoiTRBebyjcL4GoS56myttr2uiigGaVHZywnZKTDNSiCLqQGkJWCm3",
  "key44": "afcQUKvgDYTe9CVDUqDAiHgLgNQcsSrEr43MH2724aaJ114L9XCqczzrmcdbY7aU7gLVu1aU7FNY7ypL3hzRc2M",
  "key45": "2EDpfgxBRvoYxfmsTBKPQTmmVY4ikFqLVGCAFYugs2GPJfF7fL3eQXP3koLbci3aAjSS665NQHCYd4CtcQC1YzZb"
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
