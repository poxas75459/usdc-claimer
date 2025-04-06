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
    "2RKPLzovoPN7s8VErVvuDD3SJLvkoY8kk6WLHRyjWFSK7QFbUSFMbenm5UzEiQWyuMojApW4gmRftPU8BDL5mLGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsMVZNNQxTcpQ7W8y9YePHDcYNxsUfutJK5FHGkNiTewWLb6oJxsUjVRcwDbPdjx7efnorKSSWyoSwsm6RdLSst",
  "key1": "3oZ5Gx8m5EM9rszKgjAijghwfZLwNQBgYoP6oJpG5TjYDD1puxCPT45K8rwcDwcFFyMcehakoCrywMNVXTYn3PBm",
  "key2": "vQMTswDCoPJBJCDrnsjgF4Do795BCWANQCLAQmc2TUdwpnpteSSYDTVqgRq3TeQDMNQgPkL4W4tKGEBKwKrPneA",
  "key3": "2e7b8FjP438Vk9pLbYmtpxuWQiwHzaKsF9AQJDnv4Dwh9XAPurJm5SA7PNdTrPYv6HurXKV65G8WvFhiUg1XXx9b",
  "key4": "3SPCJEj8Cz3KD9BpLtV4AtnfVRQ4hAC8tFScQpp77z1C4iwUPqzz9y2DPDkf9KoNndNnHzqHieiPBvywWYnh1JPM",
  "key5": "3C2Y66276xtwVvYQEYK31HWS2DZqEUsuvN4tRCSP6Y8etYc6KarsY1sJg2UXF9vGaeYqbZVZBWAxoNcAFAxtxNcY",
  "key6": "2nPogqRExRB4axU49Bitney4rEWWLGrkTZJTpY45oKWNiVeWNFsb8VF5hw3BMGJYLFYem2Yh6dEKTkU265MJFHKV",
  "key7": "3Tct9uQmXynDYXADTZyGjM1VUnTys9HaL8WdD5oB3TQf7Bqx2UnGULoWUHwXMFfdUKSrPHGLQzigsuZXFq52RHAP",
  "key8": "566MR6a6MY4ffmB6UKYrXhP3XWp9SnAvJzfZqpsj3EiGs8gqT4WkW4XsTfTY1uSVcrbf1taNgkNjVLS1hf1JkfDU",
  "key9": "3JaBKTzaDyxtgA7VLDriLHJLW9VoUr1eo7wWevBdFpcXwg3hdo44rfmQoHYE2Pf4q995vRStEf9DfsbwaWMN1i2p",
  "key10": "3Y8E2bfPTQ9Qx68Ezc1ErTY72CHySjaPBjEuhxRUtx1yzDcb51QBLw9qrzPqRdvHSw4LgqSCTgt1fsBMw5vJDxmh",
  "key11": "4WgJkaTdY4eRqupRFwaD2Z5vHv7WgUSPPM9A3aYXhoHg27HrfwbnNB7ksXQedXTZJhkkVCr86pWoaty2Z2TKiGE4",
  "key12": "5AhoLjm1naAztHZ9RQazXRaJZW4Pk54zbYV1YBy6HuMvo1WRFVFJYCr4HQYKv9hgpToLzxJxfnkvbhAuxHte5ux4",
  "key13": "3WwvfZkgA93X8FCEx4hYhia6DJJQUN4rFeHe1ygxaPekZ1QZSrFtivxLYXHk7mjaKY2quD1NUhCoi2mHzrBJLzEa",
  "key14": "2DMzWYYwWRjYHPaX654ec8K3caYBnNLaXfjwMSYg8hwmRyHpCM9YJ6CQKTT2B6QiSY7CskXgvrN8qoF1QgLQ7JiQ",
  "key15": "4exsJCBE1M6hGvqAPPkwu57eLcuGwfACAAcyTXnVBELfLzQyagAiK79YSoUJ1f3ydPnxo1Ay9QX6eDUmE8bRQWLA",
  "key16": "3Uy2DHc3jYqAiJsnkuAWXufxkzMRmf6ExLgK6EBzu53JXpSYNEHBXqiSV2NoDuB4PwAvJHhHW2Q2LwHz6cHcHwDM",
  "key17": "4VFTC4SHCFHAiJo6En7pufvFn1hFH8YdKhejVsZvWtUeK5h7gsD3WapF7p9NxAdaSbSUhzZ1XaJmxfcp8FS63KYh",
  "key18": "267S8aPDHv7v6hARyuhp4EaDKSryRLVHEvc3shpGKAb57FKf8QuJ6Kp6pWfFwwsmEo7VuCcgA2c2LZF1tdwpxU4W",
  "key19": "enYr2BcVf1QFP7QePib7GUGfogD6TDtkLwB5smavmRUJYn7U7xfYVncwXs8YrR94r6Q5iDkPYY4fKHn1b274xZC",
  "key20": "GZRroZGnagxA25tTffuvuPxrDxBC1Ha4QEiZ3yg17WJ9sasZpgDkvaHMqLC1MTZW7YyjMiDJt1UWpiTzLvVhftJ",
  "key21": "3vRryDvmfKaPe4bqqKdToUwV8WSHNGzwHg4ojQrMV2SyrHJ7fEJWA51jCxYW9WjLQKCgyZTYRQFRtkuxvzVfDuA5",
  "key22": "3et28Kk4u9cNUW6h3Kwt7ArRTKPpuFf2AVhLxeVjut2QPjCJrLWKaZbgb821WSuohiyhp8x14rD4EkMMun81xX8b",
  "key23": "4mRdVftCfTFCpm15VgmnZEpL6hW6p7Kjko17TkoJXEyMZLZDsqC391gSSZmxTEX3xATuHpUvtMaH2qBNy2vuy13E",
  "key24": "54zv9pjrqQ1Yc2ShC18KhPz565gjrLVByK2vNUmn9GcuECT9vHFQVTDvJ4t3it5X1bgHGigw4W6MSRzy9ASPmeFw",
  "key25": "58P654VvVtx8NVsF25mnXE59dwg7Bp25jztni43sZodS4a6RFjEUf3dw9NBRYcfBbjHknsdHBGcLXum3HLqkUFdr",
  "key26": "61LqSwLxSdmdPNnr6XzhG7TuSv5A53b21trcDEJfB4c64Upm9u4fZrNFxoZ2PyfevsbcvUopga8wsLC7YECr6Dms",
  "key27": "2QNBJuX3d8BwjUShncykkkwP6ih4FcpTL2Fi9xy63PYaTkj89NLVsAjLzXXvmMn3KC8SBExqWWnB5Ru8kr1D2v1Q",
  "key28": "385NAwaTZpuhqgFW6Ey2iWRipL3x2RZh3mhN19yLsbS8fQzSt97aGZPM4q9TxFN73hfQ49qxBryS22XhVvu826m",
  "key29": "486PNF2CMFezqX53YY3HucDTWD5BWiFTSZRSMUZiir4UchLi3j71bEtFMPNQHbkErEXD9n5U1tyZ2eZX2sqM35cH",
  "key30": "4ct4mLyuCz1KBuzHd5JGHYY4JtKdzyKP4sCP3rTU3onJN5UaH7MvMMy45D7PAJU3jguzn3bt9WrJ99nUZJs3tx6C",
  "key31": "248vwgQVSN8M3FjHV6NVhAXhh2SMT62GpDSUEMGSMzPNJJcoMrtffkPMEmuDofz9y13pqxwVAYEnN7HwXtK7ZVAE",
  "key32": "5iCaH74pwS1YpYjf1MvgoesKB1XMcc6naUcba5tqHYL1NvDh523tiCkHMTwrGRdDC77ZZsXXhAXRMbmrGP5mVPbs",
  "key33": "2eDKB1HeidWjtYDPdvThM8qZBEZr9dVF1HjEtAPPNLQPjeUTvCQKpJEZgguko7baSLnUfwqr8AiFoTTXqcFLdiy",
  "key34": "3tfjuQJVWPV9Aitt63kfjEEPXK4xE1DEdo589dc6aysQBkGHtfkNDU2v6fp1Ck95Ait5QDere9bKuDynxuXYNCQA",
  "key35": "58uSYT87Scz4e2SPvigfZnWmmqzBPHznku2XvtiFD9xZMGvRTXPucPortdwJGYZJXewtgAuTqaGUTm82MTWdrZ1z",
  "key36": "4SevAiQnPNdv9rad6iuDnK3NmcNhksYqbMJLB4WtESNxh59saSwdMYbSrdKkHwAfd5vLWJb574Vg1UrCYiRs6vaz",
  "key37": "3TnTV9kS73WFJcKgBYknD88eq7pbZvty3MYRHSj837jmDh1Tmp52vVGkm7xLQw8jaxqR6aaZyLQH4HNayTPSRsvX",
  "key38": "SxGmBMLkikNNrWtvPYgfBThE9N2RoRJjh1EbTqDWocZKHG5yjU4ugdBsHX5Pfcm9sKa4h973GKueDf9uarM3MSf",
  "key39": "3REocKL5MnJvQYDnpQCjGo8Gsk5R11LoqEnFsMZgjfwgYN3dAB3AUGqA2JmS5FYBxhDHKzuhiPf48ub1wHKzMVDq",
  "key40": "5ncoNGSqANqvUCdi91avpQpNGA5ABknsAHaAZ4hhUK1YBCrGzuhMigQT96o29BazWQE4iX3YrhY4yzMMaXVxi5eu",
  "key41": "2CotyrW7ucDEgAT7s1DJFKe4JfjgZYTNzy5rd11zoLQotr2XoN8vVSUGJhWK5D6sEsWor7pHB7UJWv26Dpx9ARrJ",
  "key42": "3JbnNUor2cVUkLqeDxRdYmXxGpVGqBWhrHVzj2dmsS8R1vcDviYG2uZKkT95Qvfnp2WHdjDUFiYZPFit7K5C7g5o",
  "key43": "57gxfmyD5yCBthjSkNwyh72ujxMJ4VDb3yF3YisiZWCFiQFy6ro912TN1r34i3sxzAkMTiUaMRv6LZ4E7VExSP8f",
  "key44": "2wzXWyZFA6QS7UdrJt7Vm2vcmWgmPodRsRXFUxnKWc8CtYGAZsnNZKtZGsaU9CMLJJq7Q6USt7WgWiEVyWRiiUbk"
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
