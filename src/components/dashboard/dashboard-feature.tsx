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
    "1q2UPj2sDWbfv9cvTXXnPnJcmmhCeBo3LvbWtzy79agk6rdme2YhpY8tEjsKaNigQJSzUMMuRvnXuyHbhTU6TSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBwBjNWtJFRWCLsqxmAWKYMXu7WfKaLfAmaQ7XaTcYaJA6asdPTdZ4KL3qeU89SADrqpGbzJHf5yJSU9AZodshq",
  "key1": "5viPgMJSGkfuFSVcWPyVzCjGkXagwDpGJq5mLStVghjYcj4MWBLcsEhej4N3NoEJW7Dii7hWWGi43LoosGkHEKzw",
  "key2": "2QX81U8CohoTDPZiv4Hn3ecGALe6vxBwxPiYbKRf2V4uFfNEdY2ywafAh8ZK93GQDgUdLySE2Hd8Q2pqXibgbwWN",
  "key3": "5QCbiZu3NXxi3quzsfLFxtkPB891R6Dq2XbAgQPvSmb9YtzvrYLKxn814UhrENRwuy3QBNi6jrHqQG6KXd3aTBMM",
  "key4": "2RyvyFq76n6J4i6ZNT6HXxCxJnNbXwYGzuigukQ68r4B37XQGUfdMMjyXgQwpPKcmWwetCY7gurfH9YxE95d89kM",
  "key5": "3SEB5hHMhiB5r2uFkz9kTcJuZxPHLTJm3CXH49X1hDaCJLtyTmaPFhR17H8sVVNSjWLFqFDsqHmutgFzmRXEzs3y",
  "key6": "4PXtgyfB6F98jniLcKwJ89q4PyHRD1Dq6FMoZGHZvCXrNp6DMFvyf1DMGYqdsSwExLF2pULiQN3PJD5WpGvk8kU3",
  "key7": "5hnj3myNiZ9NfnP9tHH8BBALNbLxxG69eNb4TYvC1ymqruCsCrioVox9BFZTqZXfYFs2xypjRk7Ykv7msaAPeUnT",
  "key8": "5vmJmEtT6Wf1dXoxqpcaj1nUaPcXFB8Q2PagKCb8aM9guTHUgep9v2udU4EoQYuDqre1CJQq1tPwYnrNGUC1HNVH",
  "key9": "FZZqzSYAQ1CngEvd7H3TJqFKzi77LJtk1ng6Ec2EWXphFwgSWT67sq4TxFR3GqonHGoxFWM3X47N84GcyL7mXRW",
  "key10": "aSRsgSPsrqSStW2WNqrUZRcy7YQVa4ZmoxBag2QBCtWviPwyDU2yjgVVAj1RnjNA5vtGMHiZbQF3JLjBygkBkqJ",
  "key11": "5EPfKwT8R3WbdbnTjQmvBqR89T4TauQLuVGDpUpyJLWKPnswNAxo3Gm16VFnWE7BppradwxRFnWvqYV4SdwjcnvA",
  "key12": "124YBuDdLvqba1TspGjVDqwsEtovGDmM6hAnvkb3rA6R2BgT3PXmMD6hPKt1msjGyVHaWEL1tSVVrw2rLe7pt4sL",
  "key13": "5ps3u9beAbTLtxqd6gDYgxBeRfa2R32LvTKZdYVZPvAtr1gTj4wHEZu8VzZ92h9EvZg3SrnZeHAJtbvorBq82b1W",
  "key14": "2k6PcY7hqGYj86pe5kWtzyxANvSQY5cYADPpWgDYHMRyi7LPwgziM52bowFoMy8FtiUBkm3gtwxhNvPB1jm3bpFf",
  "key15": "4YER3gKLTSgkpBY6jBDndr1KthxR3jbcLxgCohd6MiEwriaUGA2Po2XSefmTunBXrHudwsWYvLdB3aLApazp2Lwz",
  "key16": "2FuZAmidYTkLi31YwEcV71kCX1oL9jiStfQn6TEkpK8kWpK314RjD3nPDhzwwB2PmxZtFF7tP8r99GSWg4mKwLb7",
  "key17": "UcFNAysjh1FpYiwNSaACgTpr4FpCdX4SNGAU5LfkgpesavfdNDUzmV3FkotVubnhW7psv8Z7UVYMHz1Qn1y44HC",
  "key18": "2kg44MphfhU7CAvW2RSXyX6XYKhvzkYSTYx7iT1SCAUWwRvWatsULAr3YDAp8cxRc1KEGa7yzzjHwYfmkmjUh3NR",
  "key19": "3wyuz6XUHBo7zRBkCHm2ZBWz657phQrHYwbdoCqmMBjXUytnonWmdQmidmS7y7ggiFrMLkiZmYhmaWAkKDhuAbBm",
  "key20": "4eNCUD1ZwTbc56bgQ7nFbLmPtZFSVdYRYZjzXC1hGMDxWXuPUgs9PSY3nFSqA5SYgWh6ciaqH93GcaEyuuEBiYu2",
  "key21": "5jDJk9KMxguA7RsDvUuQk3KGKTxopN5BxdPWyGimw2PBbmbAy29h4KFt3hHq4MztTq3ak69daLbsxfmT8Vtnd1HV",
  "key22": "3JxHa7scMQ3sXKqxnc78ZW3WTpVRPM8sgdAhNZg84u4pAJnZUzTqxxDezxUbYmfqgNDfnKHT2hNnKkR5eXC9hYm5",
  "key23": "2ykqbXJJtqYHmeWbgcqvSte3TNbG5mbD91SWuA11Bk4DZrttVy2DBKDMjw7PdsJzyaUgKsdTsNtuCxC5RZHbqgSj",
  "key24": "5pLAEAH5kzzZJ8gspJUtKGvNPPYQsmyAaR1G13GkhzRfaV3VZ2YaHcNatQSdCG8xyd7T2wae8kgX4TdePXveyeyE",
  "key25": "3VGUVv7maRed7vY5g4555AzxVG4VLWT76yBVKRJmjC2NqHCH9xETDiaw96mpfBsubtfurtTkB7Qy9uLVEQvh3eoM",
  "key26": "XFYYunrvVpDYneMDhaxq2jz3BSRotu8QQ9FUGMia2Y6h879MsHcvnMjsJnhtVb4EBwfTkRfDk2qv7uqwhRV9ZNw",
  "key27": "5rcfscrLykCa8EheHVRTCupXmrrysmKNqjWn6Jj28izsJmosZpiWL8fC15QnmfcHc812SfWACsn8bWktBP8PiCvv",
  "key28": "5Q1K1Wo27r8bzJ2QWnLa6SLcFXavLyzK2ZLzt3aNsD7czSKwa9BdcDqVQJrMj8x4ufvUcwuJ9Rf3CkD7gsy2NjDD",
  "key29": "4TndqFB8eJryy4zWBVEsoSeWJ8eyGJTVg5ttSWgCFcT2MsJWn8NJTZrxRSSu3Xdm98MGYShHrbg2eRDzJzpFN9bJ",
  "key30": "3HXVLLndjn7rQK6qr1taqFHGXvBSPL9J4GLyY5p2zF3i5ixM1Q9UWQrVLDcKnd1MbTzsG4FG7adj23cAibswBsgn",
  "key31": "8ReGcQjQWqKmYm5pRqMkWKuwSb4ubcruibYDZfFfMU5s4CxDiVz7uYxshwhYwabqvHGX8hE57JdAf63L24N83hF",
  "key32": "3ymetB4uZsikwCrTDMgRHtcAtkLZPWU7vFQ6qVc6yFDCHNaRBZViN5qxrHZAhBMpen3Jd3gpXY5KvFBYtHfdz2wj",
  "key33": "22bEceBNtfqe15Ziv9FSX4JVjXsHu6jpZWsGjmctrb3uRbKL7AEe3BhAmHejXTFAGu7NxLVG2KdgtaoYces6eu1q",
  "key34": "3idNWYTPHEc7j1gimBky9PntDEpEc2gv4HiSfcR7LNhb27ctjfdoU8duneLf2SLoY43oDGzrk7esWf851tBRoHtF",
  "key35": "3eNStjzhh4s25vgRhK6fGSWb1PRuqM946UD2GvB97Xs3Wq9JWJ2LXyrTHjtRQNeDAnqtoEQJAVUzfcJrRK3AEZ2R",
  "key36": "2bN9xeKWY2ZnPGxN2RXkBhU99Aai1HmwtGjip9KDaZ21EMcUSUvKdZape6ZSdN9vnzNZxut9JARgErJn57SRfbJd",
  "key37": "3Tnz918Q6tJUCtNtJZaEKPGSYQxJSnDxo9kbWKcy6EEH3h1DydTaWthEN3bhjMGenQmfGcc9kEfCWEtzARxU852n",
  "key38": "3XrCW9H2MuFfaB5KTapXqoLBYvo1RdvvUSKoR8569GpF7iFsdmRPXcj7os7odbznuYy7hcnS5Lf76dVGMxiZV3XR",
  "key39": "3Rxh5z9Q5A1gSdMtKmTXZ35otahj9YtY9DN5kp52cjaJ2zwwNPWQnSLmPxTz1sqEZ1xLvCX59HmbGb2KPMnLRADo",
  "key40": "4sNJ9Bc4ii4uh9Y7wQbwg1XhaGEGShmynAxc7pgkAD6mgyA9eAwAoN1UiDpFLfy8X7tdvyHLKT6a9Nj12AWyMMRT",
  "key41": "5rg1xpkcfDn1yLNrTmSUWz5hVtMtGGiDZ76XdCSPVsVM2RtkDxyz18NLAHHmcEhMECpWuBVZA2UZUGQvqSah4Xqp",
  "key42": "Q6pwYEQcynj8JqXYF83fhViAbPCD16fBLWdZ7RGdGuG9wKJ2HzGXhhDdZcyXod1RGLZLSvzWqDJGTGu6ySLyduw",
  "key43": "J61JS8wxqx7YrihD5LbiypJ2Lvx1ee9bma412CdHi3h7cRtkZLEX2bWUTzNQZbupeUW8rmfENBi9EDWpuDXZKF3",
  "key44": "2D1UNMjYi8H8izvgP9QDeVedCjxwbydZJhjLepHmSKMPn324akWVyZiWQuEAKftA22xqT4tsjnkr5YGuFM41oCtz",
  "key45": "FTj8o2CNtrnZ98qiUevk5BpBZj7phxR4168uVLLhpoMExQTwz6LsHXvfRyJMdTRhYeyxjoE8rtz3xjSiXDEaah8",
  "key46": "1ysqf5GRqtH9L97RQVF5Rp3iTkBbDyyEgioqBGUDnwk51agekfN4AoRL1BEXsPqSgwkjaVmNbceawwYgm3gyGdD",
  "key47": "3Vd7dHcckweG9WLRKAWkschNiY91gx1b9N7F6YC9vnPdr6G9UzJaNa6MijN3JJmSNuySMvosz7onxunfVEQsyURx",
  "key48": "28iqiTpJmHuUUb7pKZwKkHGJrGaXY4JrLg1Pm71BhtWmyatmkiJh2deoWwzpMFp31xzgzqhFQSZ9TauQYSHgyD6H"
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
