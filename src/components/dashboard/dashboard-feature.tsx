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
    "4sdWSsCji3cHjQETcPQj4sXYWVmbaTc78HAXDbVMeq8gcp52AHeQvqVvGcy72EgBmFU1h8HH25JnbGwfbNVMUyLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTg4rigBTfvvBjoWiBdMhET1RyFWoMAwpWrF2wdBSCcjDWJ2G5yY39Np8GN3cWVreBpDvtGDFRcJ5RxxzDW3SFG",
  "key1": "4pKwsD3SovTVPpkGM1QnCp5JpWsYuxenaE8wkVL2rfHzDZdurMwFvUPb2ftk8zennzSk3imTwmTbwhRccW93KDN3",
  "key2": "2RcSTDR65Q7MqMhBKqR2r7rfhUE3V7UmjWiBdmDcx4o7q6ZubGJPQhtGkpprBJisDTwSEyzWwK86GSiNSkt3PzRF",
  "key3": "31uATB8cWVz7wUwtu7FMao2oRryjR8M8mB1AERvcDfCjdoi3TYSTavijw8sT5c3SACDG1Br6NGpYcNpNG4rkhMwd",
  "key4": "64zrUAAyRuXKaSB1sBVfvcrGVcJfYxSchhGzanwXHPxbb1ZMJb7EtbgWG6zJqthVppZUmMjSg3auR1B8XmMWnZtB",
  "key5": "3Ue2j5qZpKejTDSzSFiPWJaRKmTU3xNCrDkUd4iFfk97r3mUmJazZLTuGyB8JK6CBx9x7HrqN3k4EG1ZdgN1Ysvh",
  "key6": "EeAszVQQ9ZWF4inBtNMepzY4vRCj5KbwjN3tf6Bd7BqfVNKfiB5VuZRpzSzMLPM4TD5t1q35bSUegzE6nqbMxC9",
  "key7": "264kYWE3Dmsiq1aiM7RMZwKHLMG9LvCqGX7ebU2RUoTHiywxjENxUXT3FMRtFJyREgeaDLQRQPcFhxx2uWBAo4Qx",
  "key8": "4Q1qd1KcUVWHWQrJriTanD7MBToJtVVCaa3aWQcTpuQjVAegX2wQDd8RKDtUCuJgN3SEugNh2TqCoG5QiWgP235",
  "key9": "2iHQ21DA2pSy9x8Sn4HFh6B3nnGoEcns98bL9pSMDN73W94nZ9D19df5b6SqQ5kmPhSg44PqxPfJAMKLGKiriu6T",
  "key10": "3aGCmH1AYAbScMy5Ap9MqzNX2fzixm3Vykng1FJMCnqRZZ8nB72CcUCtfrAUyS27uSgjeeMgYnnrsdjbwj2MdC4r",
  "key11": "45XEjr5uxxve8GzDztGFbejdw2Dg3w7JnACirTjsEuBcReJAPdSH4Y7jJUeoTkY2wE2bKgCQTtV1aVxkJ95hUY6v",
  "key12": "5dFiqAb9kFb3DSiw2y3eFWVrMaCErR6bJaswdQQhB2Fn3imKnJrvpDws5LRnnkRtqusX6Cf6bB1pGaVr9TQyS38G",
  "key13": "zbkNy1ovDkMs2RsfMGSVuSkhDFgkaHEcJforBESyYb667pBwfvRJuUt2qcPdC7AKHgo9R68gfyZV67ntXbipE44",
  "key14": "42NssJrEpy6pHKypHKnwQnv5ov3Mq8Y5tQ2ZK7hij4ewLVDNTfPvMqvqUnZGLBtb5jE4TzUcUy4vcPVUE4ZR9y1b",
  "key15": "36juAsRNTPMhh4UCxbCUvUW19gVK5qmyEbqcW7Tw7MsNajnzfaZT3i9JfHjK9x1iAN1UERc5ob8T1oEoPoHcexUj",
  "key16": "2EL84Hk5YNXmJuyBJmS2WJybmx8KFTW1BLqgM9nzQnSD4L9Ap38KE9682HKMepTLEShgwGeTAWrPon1DCMo9DB6M",
  "key17": "2Hkk1wvh2VPihMjmVCRxWkcDEiqnPrgyG9FtGvBfGRQvdc6S8sVYeWcb7N9WpvZPcYdB1fMnovNJrv5m3tgWsfaK",
  "key18": "2e5xSKUkN2HT5XvyLWa9RnYXttxzBXVrjBTm9nqkosRSsL6khz5Wn2rJeWh24HTtuma1SV14AfgeqGjuv32DFngX",
  "key19": "3ewKThUprQpAdVHe16KQPAfMgPujkz3jTSUkoU57SW13zE6zMC4vFw7aC3rXceLfjiTvrWsDpj8aMK6KEYXCVueJ",
  "key20": "3BVjCaBpiXAUQcZu3H7FB3yoZs51a6ReEKv7Eo4WtVnyqXMGD33cVMjirJfscT8j3KiDLz5urLuXdYjDAyFMnVjw",
  "key21": "5xZedypaY9ydAzwATi8528C63PXHG3tRHhMkh7i2Txr79fYdDFxieNLeX5XryobpVr96Xim3JjL1NetQ4MfpGHES",
  "key22": "EAEJ9NYPKo4mp8gdr69ynRQcDWK2cNZq2yfoMzFrYXwmPhj3JxNN2PH8V6vea4ZY2c983C31V7KeKkcWxWw8Hgy",
  "key23": "27JSQxNPvdL5Nu47ZLLn5ERaeH7zxH8vid69XH2NMCa2G7AnbzoPCsVTi4m3ob8Tcm7KYEEUTrsRVo1BmfcMGk93",
  "key24": "LauLQyVvtUYEW7UQZPSk5K5ngHRkbpnKD3spM7ex8zM3fEg99nL5ZfATo3juFwdTcjCmut8ZWmDu4p6iRA56iWx",
  "key25": "2mbc62hKjXAuh6ZC1QLTg1JDmm7opcP1BfRuNc1skeTdKXSANbgy56sEHsrVAYSH9VrcrzMo5gAKC52SUmawGb7B",
  "key26": "3TUUNLeC7yfz9Hmu1D4mcFTn94az1iH3dKxAr7Fq8ifLSsVQu9D5xiLmFEYZ7hgwopqW2vnTNkmfpnVDFZzLhn8X",
  "key27": "47mbX4iYiXSpUuSG5bcG6EystegYEbESmYPtjhbiFkYkyF1RBRJYHRpLc4REDjR6UkHkm32RuxPda3ZvjkmSwsVt",
  "key28": "533ssFv2rjK5oAuRDwyLg5PXejB9KzWhZqwNCMTqi6oeiss524F3WrAtneKbnEybepntp6c2opQ7BjuPH8sfudqg",
  "key29": "WsTzj3WabMKTVHPBVuBfQh9ktQEsG6cyTiwzpuKp525qcLF4dhGYjW8koiRvBtzMFvdrMDxXrwYLQR9iHwpnfoT",
  "key30": "3z4p4a5T3CrpGyBM2aSqNFyg7qv4g5CMgFYqUaQH7VMVgYMV8x8R6TKAZPaBHg1e5cvWakuTZeuy5FwDwhWBvKCZ",
  "key31": "5XrYvQGBbAcShpFVLDkKSFbDkwMf3CPGopKQHa7KJTpVYhGBrjFVCtoRNRwLqqtuaPjux51xDPqVmw2JtEuajfVE"
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
