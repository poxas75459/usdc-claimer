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
    "53Kdb6UvNPpMVNwZLNqpPLgkMxdtpSfk5AW6BGpbaQoVU2SaqB2d1YuXeveRWE58xj2k1xZx6X4duwWwuf6zP4ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2Mk7dfTD43Dd9UrJrNjthKZZxSdmCVmki2mS7ZNrzxxY1HkpzVC6igt8jgoXjpwrccr6e861bB6qt68J2tvwgu",
  "key1": "3MXqNqG56NvJnhGrzpp6LxaGkgDVYvqu5kiszwU6v51PKwH7NdcmbzaPxtgRA6ncorVY9tbEmpVyJ19csPpDVx9j",
  "key2": "38ohuyD2NJebb3JTXwGsCMncJvDx1poWh6CJzTqG5eYhD785spoH5LdCevTt8CUoUYcS9zGcanLPffGRnHzkfCnM",
  "key3": "EJ3oK3DWNAUq9eUY6VDaYnPgLhLv1PBhuLZzNGBsvE6PZDVkVAmeVqYwn3LMUbhHQjPJProkapgipdPEcVTRkbp",
  "key4": "4SGNYGnvT2j1KLixBuWPS99BzM93cepmjyHMAFuTobvPjJGbpCy6Dazcequ2fUEr7BG5AogmseijpUUypjCsao5i",
  "key5": "4tpMmxX26pfFJyQvRqtLTZVQQyiRUcNggLxeDBUNAVBvDhb9cRoyQWTTBZtg62Sp1MuN6v6ozGnDsuijEFvjG5s5",
  "key6": "5Q2z5emivRmquKcbd6f1Q4Guzwm14Gv1HuY1JGDXqMWoX9Z4HnDgP5rFRbfEa2tYU6rmRghjC3znsPZhqhSVshLp",
  "key7": "c3bjU6Uj73jce9mGaz4MEMR6Xsvx94Mt6axDrCHhYVTiPSbcyUhZqMqwhNTdNQzNQdLprWq4sjHkJtPccKuFj83",
  "key8": "VbDKxSuMuKPg9q9guREzR7TKKu5rET2mRP17K4whqkstQZP1SuWwDboZHeWzeLmkFKKezVZ1LmrVgW1jxHWQiGo",
  "key9": "SMeNEvEMdeyW9ihvtxS8vYWiqMEt1U6RW4zpGxo1Ng8BYnS8DYF9FmbZAgNonpBvWH5MiLjuvYRn72niw5LWp2L",
  "key10": "2kp4vBWKKXJesT9T6CEeY3ZPrAPCA19UCq4e9AX3SRq8FHatdmigtNokBk98oTfVBHxrpADxShmHQzdprPb1ECDY",
  "key11": "ETPbwQmCxY3Y77Kvo236XBCMxvEcbCifmT6B8RpWx8cBfgGqGWZCMNoXC6tcbGkCpBbrdhuPaPQkicz4mVHVhYn",
  "key12": "2UgfMURiAGjhvp8EYwYBZBKsTDJfraqd6ZeMDzNovr9HZXdXBN14Kdtr9oo7fm7VWYuTCaYmFe49cUjATChhwec",
  "key13": "41hDvG9szb3fLP34apSpLj5oemArkpPgYRWqGjPaPiBTaJ4sFkNC51d5fYD3eCThCh8ehkhWodJMmso5w9PyVkuN",
  "key14": "2ae7oHDoRsvPEFTdJwLc5rhGz4ucpU2LD2DJ31o8TaPGXreawDUCc6fxQjyeGeLmRyHDXovgfsh3f69K5rTvjpBG",
  "key15": "2Ar23uMPvQRLPkPtHdvBVLi1VeB6K4aYPvpfucQUNHEVN8cigNxqgXMD5ZYTJfRv2t2V6tc2T4fm38Tb2Gt4JdUV",
  "key16": "5ZU4Z5UcY8bcc2se1r1ekmsMqTBLSQkwLJzQNb5jvAduFKPhhXQwFRahABrRS3smWsnV5BsQQEVzWqyhPRNdougV",
  "key17": "2JzZCmAeX43ap6saL8pdJp82nXfcaHhRtPo1fyNJ7pAsG6867S7s1omXe7k4bUbYn4rYWbvukCfbWH5NHPVS2SRa",
  "key18": "3mBuMgWPFgwyKcUpYcceJAWeYiszTFb9FpWGxLhTZuU6qNddpFo3oW5Fvr4WdqnqsvisAoJBN3hFjHVf9KDXB6ka",
  "key19": "55V3dQYxhLvCWC8zGPxHrUhymvCPeCBdqVwUazQAVYo1ZLjBPMifSusN7wGSmuVDUiQgujWfVgo8GmpkM1fQgQA1",
  "key20": "3X1vLQ8HS4Uh4wPY9ZkjzqoHKEy52iH51SdFT57ZMBt7knQPSXeVtecByYZdp4YxnH37JPTCLEQA52KY56uKN35Z",
  "key21": "3BEC123GDFGA7xfB7rjK4g3PTYFHsNNDr9cvpnSoaLASAULrJSR8sNkFUHzkUfE4wmQv3Rwq96XnHkm4a1bD4NRG",
  "key22": "21JdHZTSobDxiP5Bz6A4iE9PqWAdNHVuLwqcRUG4mqN84vp2XFmeWvs1AdCb16crQis813FkKQFf5icKEXtEhynN",
  "key23": "451F8ghuTjM12nq1Jwf8DSsZL2Ugt7rqZ4tNMCiHheGBJ2gPmXP33quNcSZ8usx5iTMwwBNpJAenUh7rhRS1zGAs",
  "key24": "5i8Bkc3MW4ArynYoYmGavGnviZ7P6t8GK6qLoEse5MsdCa7pQJUBXM4niFvQoJzXm2LCLAenZRDxJgDJcrZNXpdJ",
  "key25": "4wHBtn8o55iZpfaGz23pvsv71WGknnxwy7EGrM32SdW1HZs11XX7qLYwr5Mn13eC2GhGv4EbCStDGV1GyBV8RFT9",
  "key26": "28KQJE7KWyNnbEVAG8u2xE7XWHz1kQYJm5VGYyup279iwcwy2kBUwLGyb7KNDuv9UAdHPNhneZ7MtQj7XJWwaayV",
  "key27": "X3ws2McQ7RSAfKFEgVSGtc4ZWtp8u2LKkVCN4CvwqJjp6BFmAqDZFgL2spGTMRqduTQByTt2pcNjrXjXNcvXVoX",
  "key28": "2MoqUKyJssjL6PfqWavdvV54tzgKo2h5Avjf7VGV9H83QLPcetvUTCBwy3WN1TVHDV4nbtea82k4YowVCtMxGU1a",
  "key29": "64DBw74yhCkoDzJkThaajCD6U65bF398vTaffaW4WqvJSggf5m27bmrfgkpztR1ojL9x1H2zedV9xRaFZyNoChmc",
  "key30": "mkaWKgmVWaxM5KKyRUV94EqZM1WV6wupcJ6wS1isjCLYTosT7A8qR3DwzW1ybu4qhfPkM5SUcyqenrLAvhRGtJD",
  "key31": "445z3QrrC14Enx4DVU8V9d7aHpzqeML3FdeMvHSUTJLxowrQmFp4YLi8yhfGiWwAQTaJFuKQGEXqhq3S3UNCyKZT",
  "key32": "2hpqm3FKUr2nKLCWo496BnGTYpSffccwTbfWHSLYx1pGcpE5j6w9RHQih8KC9ExVoLGEQ7gm5uSHZf1PVVpfrCc5",
  "key33": "3yw8fv8QBqNkgCTCg28gxvHZJr2bHuXFKkb7tfqcRH3q7pay6fzt9AmG89ykajuCYcceBC59Khz4Ddc6C62Rsekt",
  "key34": "43hYGMSP8x2LX6Bm4cWvnwqW9P2YJVxeezFXpWUb9UUie6hrwpYmqTTSY5FUEaJ2asW4siGQcZjDXQiqiFoVu2QP",
  "key35": "5iyZnWhnPu8TVG36wKqPoWW9aJqR8CAAwdPyyAzWqhQsHUyoFwoBfhTzm27RWStHWaZg9bV6w3JqPNSEG8RW565L",
  "key36": "33BxEhWNxba7bsqcmntLFLDsuZrTjbK91uNfDzqzMapX5CCXFP4SdM7NiHoCVFEDzuXRKbNoyVgGyfKnEo6AkShF",
  "key37": "4sJ6CkU3cuGpnSq4QcwKjEzZGvy1hNJPoc6xqSPSvGtTL3gv7RYzyAn1RkJZHN14P9NLXpe3B9yhzkNJ2YtHSXYH",
  "key38": "22WSvXnmx7ucyzjE8VaMgv8GRDeNjJzvNDgXAgmqG2vu8WMXp343nFvWBttpRQZS9TTLpDgtURZXZGfPTsXFwxsu"
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
