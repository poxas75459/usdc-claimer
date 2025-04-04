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
    "bYTTWV5NfPdY5UpW9vUb4mzR4ZGFXMAnbXewTcNJJ62pBYfgQmWRbDHc8ja9wZCoSgHhN4Pe3GkdLMPvVtY8Hic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpfxZYDqCPxAy4Q2Es6LofdgSGbNX12umrVnhJpwz2tvhr3RWmAfmj5rKgqxvENuqQx4746wGCfb3U5HegpYkP2",
  "key1": "2YEeaZpjKknFtJifrVSmpAmspSupNTRYCx5Vm7JzSVzd1nfvTrtBFPHofFDoc6d5twb4nJmHnWiCwrgzGbvuyPWi",
  "key2": "3Gs4qLgScbF7itsDmEyHXiSWfq8su7zzDdtdKb5c68LqMafpq12k3WktTi8wYVhqv9habEYBDn4Ur2NTAQLqG5iM",
  "key3": "5vqm725nooPyE2KyYmNFjppPkBi5kvDXe5E99x8ww5KwamCAyMitVP2bX587CTqTdhcnbJxJpwPccEMDt7jvCm2z",
  "key4": "38nfVCDWUx7osHktQ4GfrCoQ38hVeo6bKomkbyhoH2XGVBB4nacSnHry78F9NzLq65ko6bHWyoUKbw8xpE4GfLBb",
  "key5": "4zzESbcMQBLsokpxm2GkysUpyvqHVLkC9NPnBG9SdFADJCaRc864aznQSFNRiWoTWwek1LMP5qv13iw2oyawtMCM",
  "key6": "3HXWw5JEt3TMd9vtiWCjZyTPPtfNdbiapzNcHPaUkkELPhziFRgvBNak4UwJyCXQp4PoETjuKupaCf8BV3Cfee6e",
  "key7": "y5FsFiYAthKrmFXtRTbnu9CkTwxvAdV1Ae9geRRjcEq7V4bHgVHNEHaFKckyu6EYax3KaBydnWc1iLbt64NX9LE",
  "key8": "5wPSmZfFvtSSweJKYfBNFGVv6ZYNHoMoNcWFiCXoB3wFCZNpNkf312CyG91BJZGMqBVi3L7HGnNYzUyC8VcFBeH9",
  "key9": "5FncX1pySJePxFEZ76PbTr3pFjoQxoMNwWcAJxLw1455F3swh9PA8KdwYFbCy7JeEGeBx98eDcAA9A5KNd8SEX4z",
  "key10": "3T1grjwCwrMmzbsda6bNGwJnXrSwdYdzaX7tEku6oewajSfDkX4KqDmGrgCv7q4pYF3SMDVJGkFHZtfWaXpR377D",
  "key11": "2Umz7GHExVFMF8hhBcvgvYo3hk7TtnpwDmQDacdTfban1HrxNhMFDRhGc1jgYAX4k8pZfz3nfpV9rCN28y4ZDyW5",
  "key12": "2KqhPkgYJ7uEJSHe2K9doH1q4PqfHgeTwGoZiCxFmndZd8gc8S1ZehXUugh94m8UVB4zsu7U5eKdLW3txCmukBBk",
  "key13": "2AohWrHWCHN9qph3GqHSoTEt3Hf6CgECbKMSaiqdFFz7w6hbX2K2c84irdBuMBxCMgLgCCEbAdWGFLUvhLeXJn7B",
  "key14": "2FdZxRWgbDRV7NngLGgW2VhZFnZPDQCX19ESboSxKdVSAxUPkuWYZm1PoKHYu2VgukRYymCixrg9jdHCG4iaANvX",
  "key15": "2zMPGhAZX5Bbfa2zuXyTqptYS6XSCeWRwCf3iXmEuXuhgzKn2DFeThkMFD4YoRhrMbwkb1pX1Z6XdvFnBaDEM895",
  "key16": "5M43Bm7h7jXG7RzowrWNAmD3p3X3EecPuL3PF4oewkezfRmagXJcps6xfRZRRLVS8qM582bCz2k2o3AfxzMUPZQS",
  "key17": "X7r34d3ep4se8SuEVJV49aFSFqnZZh57nwCHkDMJGS9TBcPS1UBuecZYFpPs7pcfAdddQFeXioYEVC32Z8g2oBc",
  "key18": "xZtnR2rctJJiL8bdgTpHAYNYTLEA9NdwadiMvNX9UVjedDh1tgWdD5dsWdVobQt18Q8dZFSB3f2Qnhi1zRCnN3i",
  "key19": "4v6NEtAbJneNSeo2fiDAYJajMqPQJHyDicdimkbn3LRH8aqBDuaqL1YG37cPw7U82uWfdDBBYHKB1X5uuQyrriyD",
  "key20": "53UUvbUX5gXJfG9rVPBgYm3ej6wN8URHTkpnESDGhdC42agwL32HfMVcxrbxhgaG2WRyoATAXPoPpCwXM5cHJDc6",
  "key21": "43hjWmQ9buNYcKjXdcA2ZmPZ2CgwJT2RJRyXgCwFeSPWPANk8jFyHPNDFrNyJkppNi7aMHk6M6JNDHJr4mDVhSwB",
  "key22": "3gGEGNqrxPVHQNKWYxP3iJSsz2d8c3hCiAKXaPqtef8MEfigGtrUi9roQSQ4r3nTf663W7wqp5V3skZKYJPqny3L",
  "key23": "morFRFQqnLY7XLR3fDHooJKFuN67MquA2SmjE88ErSwPgi3bK7VdJvWD3GCr9rtZp7YYe4cN1sio789QVQsJ9XV",
  "key24": "5jh1EBrFJpwX5ZQ1fJQYscMX6aeqT8Yj6JSyMPm4s5UaDVsV2oT88KLS6oaRjyE5VzWUERCG6HsYXa5YNyDCJZ58",
  "key25": "UAK43HWMgBFpeemUrXneftmSH7B3oVcuLZFnGnzEH5KxRRBEi77ioNQzNnC5fcojp2LsVDof8iBx3zQw4TRLbzG",
  "key26": "4dZSz1wzDQdJZQJfVBgBNuZEbJgFoWnZFVqGdzHkF5rzNRkWhCkHFrBj52LoxnCCyUhakF5iCjqzMpa9QgLApTWT",
  "key27": "2UFKjzTdvHAAzgL7sxCqhiDPVitAqknwAhXqd1RpWmJa4mz17ARaECF2RK6c3bY6QQPRBch5Mh8cKKUYTj2ZBM5C",
  "key28": "3ZedKyueDvn3iYJ79jpCwAxEwUErjcum5fuQVNYhKHQnzHCgvz3MVchwNhm7DEpn2e4Yz84HGA245sNgtxfS19ik",
  "key29": "4oVTtr64CTxgPSv6ESjaxXPXd4SSvjH1KjuxQjkRaKuTBLjNLXgubTK295v1MirJ9m5JzPPwzG2TR6GCuZnKEpoT",
  "key30": "54odAGn1NS2WzFSeWk4H95T9aczpdTSwNAUxgQJv4EzJ6Lo5f9sHbWU5JXmQXoMuEzes6UUpEy4mzVo7JB3rYPZH",
  "key31": "nUf3PPbsCfQagqWaNW8vuC3CVRFWqvisgpmRHCgDhECZ6Jd6Aq9Qdv5suf7JKDfVwneYvPWnDoKqHr28sX5Buaa",
  "key32": "4BjuMRjHLyxDsh24u2Uuf8AYN8ez6rJSuU91RVm37sB9vGiTVUXjhUrhkpJrVQpBUV4Prrvp3s2vuPZfG1yZ2HJJ",
  "key33": "6zmprDEndK4h5qQVhmAkCStdctSGkeXvVi2wJof7kSsJKppzyhyep9htjGLWwnzBV9GxSsu94kswvWi72BASSeh",
  "key34": "5S33A4M3KS1bt54uVUX4KxJhMzJurxzsnExeFhyAHzqNTHbp4b4m9pQkMDzd9dKAsXaJVf5Hh6otsXQjKE4RVRQY",
  "key35": "42FLKV5BruPx3LVyGxYoBFmV2TZSAqHrsJumggg78HbL47MCpPkitZVkouDxbSio5Bf4egTd5xbUwYY9ZjmKSrhN",
  "key36": "66Aj6miwkY3nTcgsrDkQKqHJDjJCunCPa6Mf3hJB2y5pUZcpzu7DbAfj7Bh4CDyhLSk4t3dtEfQX5E214YsRwqrh",
  "key37": "2xG8kABgYYY2iR1Qtd6sjkYZg3mqXaAMrtCqc581Drroww8EN13sniTBdQpd1X7HfJh4oZ2Qi3WWp3xYJ5F6N3gP",
  "key38": "3YZUvQKHg3YEkdh7jVRU2981uPLu8p8SawdK5gUUDGwSLCqSoyD3KpaLYvyGtyPr1T7WGnJLZwmrH7KZoB7pmRRi",
  "key39": "t1npQrR93TDpVXHid93BiHxFrxrkApy6AUkSKqhmFKaqpH7BQXc3YQDneneAkDjT7i12cEVepmvtWhkuD2nYYUT",
  "key40": "66hCbmHVcfX98yjnSiiDRer1W5V2YddHLaSaGn9sFyGYtSLrq7Jnn5NPqVHXisEGiwWWmXWHPP69hnXK7cJGPMNg",
  "key41": "2VoyQ8e9PjSRJwi22PrFUQrx17sdnQVhVJXQtAJd2RJE2JesbzfYR2eGSwQdBwssSyysaeGidvSkwhttJ8dqRXZk",
  "key42": "27hnb2sjdeY19RVY7GHAnbYY7avUNWQkeUkf14G3nxhuwcbEV9LxuMDKgjDd33joUNhiQFZ6NvyD2Zzr8VDAwSt3"
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
