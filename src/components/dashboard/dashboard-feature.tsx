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
    "67BvARYbo7yvWuRsMF5Nh4HTdjHpSEKimTFvxuwvacMU1mADHGx2omFr2ZRxEDTvpRnxoh1QgAuE1GVwMbXfByni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27LbqcopB1opTGn5DCkMc5HCLoag44tKpvL8GSRn9yHdLMVouZSiThX1hKr8XXCprtnoVqWXPtHovmgiH7HK9fzq",
  "key1": "DRp1tWx9Ff7cvuMLQD6dL9WBLv3pV3wrgtk7WG4r5wwC1NA6PAeixDAapXuRWzr3NGTz7eUuFyNfqw9joQ32ZBV",
  "key2": "5AWmyzunHuEfGPGz1W68BCAtsLPduJ5DEfzqXfwvZpFFNZ2rmsU3CdjBzTT8YJ3Cr193Sx8FezJ3Co1ULDxyEeXw",
  "key3": "24BAgp4qTT5uZ4YZL4AmeL6mqUKzVPBv34KpffaDvav1rPC1ZaM1Wd9mb1fESe39S5jp1ptzjJ8Bci8WNdTNrisR",
  "key4": "UGmwARhXvzXw8X4omjz3sJS2r8GeywfxtXdGocBxkz6xb1R2nfedE2yApyuYFXL13KhjVmwozHyNMDxG5hRe3cS",
  "key5": "5Aa6ZjVp1XQQP7D3P7xtMygQpSPFhGwN4reaV1U3KGjdXPBBsciYzDn5oNstdXfA97qteEmk8yKPiPoH58BeQVTu",
  "key6": "n8wPzpNajMTVWPVctQCNhWjadyiXPrifx3vpZfjUCLKb3e91wpLscZAzKGCLxWUabua9yBQKhHn9D66fohgE8qN",
  "key7": "4DnJCJ1wdKDXdYiSaQ5rDCQfYR5eo7iQr4RirEuBJANaN6n3PW8UxJHcb4j46SReu61RYYKwozaCJ1Yw4u85vrPS",
  "key8": "4JZwocGB7qxyAndy8AEiaXSFu7yPLcUY59oXLCFRJuAf8akwQZt4wQnrN1zeeNW1nMwcQho71gDfZ5VS9zMTsTsk",
  "key9": "37riZ5nZGBsjboG6r1XzBQ5v23PNSbzfBbo6wTHgP2mnTyaioZk4jycshHifv5TEMuw9m4LZKbFXKAzuZyX4f2LK",
  "key10": "4S8JSQ5Sjm1pqQfYSrMarPk7qEShfmqZBKG6HGLygX5GHizLwqsn3PYihoJPtTg6kYTVrxLqsAB15XzxGjzaxLmd",
  "key11": "R4Ckw9dtdmEmk315Zd3Y8a1Wv3ZvWNRQMungvz4VA5yRaWZF1PHzfndkq3zT6oTMqtVbkfbdsSfzSxvp8utQ81R",
  "key12": "5pQhTD9dxDyXqJbUNs7cpPAneCeYgchgcHpyD4FKbuX3mKgaXnfwEzqSbPzZWETVPhJjjbBbkp4A79CGyQgAfhJ9",
  "key13": "4kNApt7Stb5ML8nQCXKk18WkPcQZ7pSLvRgUzkBucSWgcBp74myPC6aW6CmnB6Atvuvy2qnZLWAhdUeRrWoonoPd",
  "key14": "3UnCWNPNDP6SGXBAaFdv8tM2r4vaKBUSqndgm9tV7ue913Dp2LrJeR5evewmqpyNRo4wL1Eeo6VEFMv98JbZxbyT",
  "key15": "43zeoprz2xNMqmk4fNu6s4mm1uvz9LEvHPntD7DX9dGUQa5uhbzpwkh46hXESyKgY81KPof263t2gwJFURBPBgAA",
  "key16": "Q3tfv4MUPWKPJTefqHoJYSAn9chWZqz7vyQyCboLmTgbRa4cmrUNaCriDiWjkAWxj6G9spi7Lk9i1oWeUuQGJqP",
  "key17": "3s7PmZjsmCHmnsUvAA5sBL7k4My9x5Cn3GASdkA9AFARdZt6J79X5qFY6SMoHmpPvs3Ycg7kcPp2JzUWZThUME6x",
  "key18": "4CmUT9NM4X4gjkzqAWvJ2qgKvFJ7mctMncR5SChewJqLQ3LXAq5TLVx3aq2kPXcTMNbw7qnLYstFRGEbPxkaJ1GW",
  "key19": "5tZQsBsXBeB4faupWVHvBva6xvYwjbifMfYbo1imZQ3zf6B4CMkWNQnJ8ivQPNKccyoqPAeQZ7m3mphg5CuRgeGV",
  "key20": "3eBicaRakXzYAZ7STJW2CySfZtY1Fj2zhDdDgFZ7mDTtQ4iTwhaxjGmfZpQB8e9aGgdP7wgoiSycX3bTQrrqGsqp",
  "key21": "52Eskq7DTDBJ3c151HZrZT33AizUMG24W8S6DdoR1RVqghbUYtGkv1sQ6sL5ZXcbQgGytJnSP83yoZzp3bFjB9zp",
  "key22": "4AaAEtWNPFB6mD96X2M4v8QeoDPgVQVhgpsF91ZPtdNN8n81qKKgkXuEiQsZ2gi52jT4gSscVren1GwMKfuHn45X",
  "key23": "zpXwCCAofENGiYT68ednkMhyq1WyAzdDTJbtWCf22oNu2QTbeeoQnv3eS89ybU54gM5isUQ3BuP3QEahBLLGVaB",
  "key24": "47jh9LcZNh52wk489ipkQW3jcYk6EDxHC7vhK5Qok6N43FscRVkoQYCV4XxkZ21j4sEosJKDXurSfPXdkVLKs6od",
  "key25": "n9k9BsG4SdyfepkqF3BKCzDoneVzLVyc1V1R7PFmAEc1tUZxHvLP9dGHKZwnquQfoTDF3xhmwfUJrDd6mBJpwsy",
  "key26": "49tzfTC3YH6BZwuDmtKQR1qFqG4CV3UnyxKb9gQ33q9mxsSAV4Dh3U2FY8XW6U9dQC74bMF7j8UecoNkSbdVuMEi",
  "key27": "4tJRx3rSUR1QnCyeTyd22sfkRWMDiqhdfe8Ukr6ZYc96U3U4Gg7CKp8gYa5TLfKckxYCNupXk96GXpuDtoGnzgnF",
  "key28": "3SZbHzeTzCcAC1L7fjPvXx4B3ouhcpuTcoxsGTMAWPP56YxxdXWDhf4Ai7TWyXBT2JacVQkYreR3FiZNGSEyRwma",
  "key29": "uMfi86eu2JKXcAdGkyowvdqNzyCpQuU7smouGjTukesmT19fy2Jtp4XQVoFcPengpAkHngTSVmcaLhkJwcCqLpA",
  "key30": "2aEwxoxGWkoLrsNQZwzLBvXBocDPMXwq28UTVNJ1uH5ByynAA7kMFJdTaiBxLYtkgrtq2HQJd6ydkAyQsNz9ajRB",
  "key31": "27UA2iE8wvpWh5RJEdGXxpg7gfzwt5CSUMRTWc3rKCGZeg9TTt1sAHRkebdSJzSMKUTkgnCe6ZTr7DZTytKDBTFz",
  "key32": "3bvNkEvbA56uB2GVC99Ub7spVrrQB8h8vfbraWN5CFo9eB4zoB97FteWSQrDD6EzDAHJ19LAZ3D5tcFi59HPFhrq",
  "key33": "5RYdVgZi8rTqzAsWnXw4pBiRVqFya3A7RcJx6j94RGzRAgxeN2uMM6jPNjTcGiDo523NG3kcmjiDFSaxejMu6EGs",
  "key34": "DemE87Q5nr28QWfTdKPid3tJSGAQ5q2Y6rkag2BbXyEPLF1oDqNV8TDLmZtbvFVh6eHKN8hrYPbPAzcxcKE6gTS",
  "key35": "wCtUWYksBpEVqkYA2Ly8so2nuKAu9TSyLrUWGkbNTdEzemZtJPxxKA8t1XC3xeAASGh8qXXsjE1t3Y4UgH17GAB",
  "key36": "4dRwCekH7aPZ2YwptQWctzgMAsRVmfHogiHW3onppaWL9G1kEFY8Aoe3pm1bfDB7RSyeFWkofw3fkMdjfm5ySSuM",
  "key37": "etjeSYb8rtuJGB8XtMAkFzjTrHBwU3ToD7bdebwNqZ2bcDnc6Z4LFur6Kqy2QSVKyX2Etw14bkeYdnixJ1YcSgc",
  "key38": "imWA5RxXawaK3TqSVkS2Zr5jLs6FdQX4SikTzTkqnnwnc9H8o7bW42C8PtLFHux2JSMRoqTqTVg9vhXWZ28aZvA",
  "key39": "48oVpFHwvSx2HqV4Mx6kvjSAAtNcJoE7KzhTbzJBAMHFuqTVjDBBgnPALFpuDeFomr2nMrFJwLRNLvDH6rXBfWUf"
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
