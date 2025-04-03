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
    "4spjENu8shmamDYCWzgHCvut4LskRG5MWfkyJ6VQ61m6CSzmfMxWtK9DFfCzzh79rGWeD3YnQJqSnvkXScyXnuUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xT6tsXa4Qqsd2274BtWcYNGu8QhzBdTmtwnhXKDG2AyHHcCEbYibn7FXbWuviJzW85BMcizJjBKyKcxv5QkhBi",
  "key1": "2TiqCHwkyVNgvyq2Gq9feoKKMYbY2FaPYmoYcZ8s3b2bXRxNeobTG8KDVnJBB8MYk9DLXDjdk9xQC2bSpcBuX14Y",
  "key2": "3DSP3VujbvgDLLWHLatzht1r4Mnd5EGBaJKbWrFNm4rcdJLGTf5ZfMS1VpnuLAAn3sgzsgDBBm2kfgqzropV9Wnn",
  "key3": "niMNHLJ3j2oarE526E6rAM7ZUmuSba1hvGpvxDwmKiJPW23i13YMrm64Qt4LypMwB9r2irwxsaPpuTj3eWejZr8",
  "key4": "Hg95TcgjeZLxstpXBosyUhnwCVN1LCoeyecvTJRjoAX13n6EoqbDzhiWMbVTgMnWB7ZnoGZp67NqTFFuwPdeu7w",
  "key5": "4YgDLrwgHTALPRc3cLnNa4W1iUHTSBp4dtFNsNygpR9Tqm7jdFyQjRdQAufKQcGWw1SJrNq2ZFaQNBbUDEGUHq8z",
  "key6": "wZDzxdnfQGZfZWrWZYKZqHL3FhLy3dC3Zg6ZXRchWU6nTiqYYWYyqMe7WPfec62tKjeUJ49F8oHNm1jQZwvg4rx",
  "key7": "633JLnb6C3NfhF3xDWbLWamK4G5oDYmGERAijfb77HWH2gRpM33Hik873fpUpEz9pUwbq7ZUJDDSMofXooKVKPEv",
  "key8": "5HELWrcAt1MZndCaLQ1CWJwg5WkbJ3DonA1nprpurKDyFUtf2A8Yf8URv29K2rQ8izfMmuuP6PkMGiSSkZvVewmj",
  "key9": "3UhPjYXURSa1vQduVMvLj2o36XkKXyupy9QjX79SE9Cot69NUhDHQRyZsXbXDS56cAYHQU72v1S7AeKddzJUxbKi",
  "key10": "5y9NLv5FmBZvGRaDDG9q8Npv4JWV2CNrM2SXfhmdyQiUkk97VxtXn1yy83pz8Qo9YnB7MStN1c2rG4hYvL25KLkV",
  "key11": "2GUEgx8G4ZNDymdRQVGiTcrubjnTLaRA2kVnijVeUhWZqqMUr5c1EpHt6g4ZBEKemnsT2piSULAuFFFnXg737vim",
  "key12": "5pGeBRZcki1wpCt4tK1HhgQDjknSiyCPiLSo6TdRx8dsjAMHVMLXhAzNRNmfKwskQyTfRPXf9ZijipNfntfk6qZk",
  "key13": "2mtcyixKHgnqTUYgDink4qvmMNgVFa3iAqoA8ra9wYrQfUQWaio24YsrLTcw8hyer6YqpW6AKYKGTZrpmCukJzEH",
  "key14": "4JkgbzPNy9wfb5neLEyxVxWfFKkegsPrGNpYHFFwTt3tcymKbGG5vQPc6ZcpSUhA4umX6v6qrnogBLJg4JqPNU9g",
  "key15": "4fygK9iRAyMpBywGazFdYSKzuHASuHF5HnbH9eWKZiZrEqyDLmtm2kvpkt1hFjmT1hmqoUqLgScarhKH74TERcpL",
  "key16": "5JeoGnukpRQyc3ahpB5ne3qSmBL1kgXBNpJYzLwH6ymGfzFKMxXN7LX7rateVJ53Wfj3rgq6ugYesR8NuNxgMcHp",
  "key17": "2NgcUEQE1aYkRSMTsy9CP271vC383FsJFUHm1oZB5v2mKZ9SLk6SiUmtwJjo5jgoUmiiBCxp4Bf1L2NhXQx21tC2",
  "key18": "4MnmK9MPU1259b3T8PqKYEGSjeGrqCiUpVkuLMYxJXkzQEMen4JMsf1MCVeD6XQ1HTvxDNJNcp5sdmfpbpw5p4b4",
  "key19": "4eLqtgfFWPUpahVgpGaKKs5Ks3vv3RpKFjZ5Yo1eRwNGBGDgtYXT19pzKT6KbnZAHJ2mUu58XDw8huRC68ZT28fP",
  "key20": "39wmGwLKFqPwkub3tqesscsiuMAW2osszcULBdkvyKffCjxt37tziGeW9CEpYxjrP2wShRvoanmmYnhDsCzVP5Eo",
  "key21": "oDnL1xU58NFC89FnQM7PsjxFe1BFucwEAJ9aCZvsnK7e3WDVRWubmG2PB9MtfX1Mb3A2MirVKsTTX3Zfx6dqvyZ",
  "key22": "8z4FQg3aezq8xpPRUKwpSxSmCAad7RPNDcpBQbuAoF8nwGnxQqae4wztWUipLXjp5pbT9RtiaT3jCkMjdC2MHaH",
  "key23": "3v4hi2RbmkyXeuFExkdywcaNGzFScknLF4tNmZfRKoZmDAkRL37oA4v1zA7jLAjXy4dViYAiFf1hQef1BrQDynEx",
  "key24": "3nku6VPJ7cu6skVVv1Aeeagbd8GUpqtWLX6JQUJ34qhbPN26aMDy9cx1nJub21Dcz3JDpVYjwAQmo5KcLv647evo",
  "key25": "3VeJsFTKC8zJyjfgXfLrJokQooXy1aGeaBSNr4sXC87ADhimaToGKsshNyyCMDEfn3BkRZqQYUcX8HdWnPfLo6Dq",
  "key26": "5PioPSi6GNLu9LRyuCMyFJNGHN3kNAKexUia8tPKA4FuLWARCzHbjkS4jxhRPcij7CTBm7AxAqTWs7BwfoekRcZe",
  "key27": "2CNJ3mQTehknSnmX5cpq6sTJu3GSZckBXpFMRzArC7NSDjR63jeK3r27GswFnp4TV6M55pdt2fyLKDKYT6ZN4q1P",
  "key28": "4UrSvhnP2pqSCDNvKcMkowkZWuycvatuTXXLFpc7rtndkQKNu6ui8UbpP1M5qUYSDsWSsEXVNHAaNBGSr2nxzW6x",
  "key29": "3vphkUnLBk4FXW8TR9KtPEk4oKXS2AvaifU9yMKWC6Ksi4HREWTcGHSgqobzzb43ZC84oDRVPFk8jTUYLvMt6iB8",
  "key30": "4LPwiW3r66U18Jb7C52wgKrF1kGJW9uZBoiX7sXEZfYbB1za4Xp8HZmFUzRch1bzvdTB6E5mZkKsJD2EiF3SbucJ",
  "key31": "ZhBkzaV776VdTqXtb5dJF5d1dgQJtRZU9KWcRvmTvAbsyTCvFRHsL2o7vbKxEieTF2cXjrubTeqds7YU8Gi78Rg",
  "key32": "5iAq2kef4gnnQv1MFKk9CMfNo9Pg98PZVef7CfmkWkYyDoon8wFmV4sZbyZ45TusaDnSDiMwjdme4dMJ9snkVwtu",
  "key33": "4NmKGBDXMwDwt1F1vb3EEBBpjXkpbG6sPeph9TeTbW26fUHncUG7VNJM1hkC9XVoRLTpbY3ALvZnvpdP6odZE5Ez",
  "key34": "45oMCLTU5DZQxAXu4DPgTjrDWzxGQdqLbWaKPHVx6ygBynnAg2ykMGmAup9peH9uc8YEdQYqQ9PhndbmUsDJWkG1",
  "key35": "2x5pXERfLYbREtLWUpjzTxkJ139DsKKnL8qNSkTUjN9kZywine26gHQBXUPVEC1kYuV1sJnzjEAhj5Vav3p5pCkS",
  "key36": "56LGkMQBhynms9VrdZPYKNfVTkb9UhsozdUYg6HZxnMtr4KLTvE69mqexjECpwwoHYmD4nvGQraPKzMr2WryWApM",
  "key37": "28HLwzTDeGWZY8dy3cEH4MZW6pZHVYBtaZgjqicRCL3oW2XQUMHiK9ecpkXHadzMQm5NxMx6geJiwDTKyxaDkRUg",
  "key38": "x6Lxv2QtUZrjcHUE8deEnpHLJNtGUp41JLp2wqSPjuGuqB5gGcnUzVy6657ZfYErDva5b478VU5Ak1HguBriCpS",
  "key39": "24HvRMA4iL9Jmbtq747RwHntoFPFWRedCbtwxb5V9X31KdAwh4Jv2dp8Gt1QxCKVzdkUQo6L7Hs2cufUJrNkuKM3",
  "key40": "5GcxquTZFvAc7eNyGi3TLT77Su8znaLqE3Avj86BMDRQSUH3YhvR2Cgzo6cvKgPbRqHYaDBNrXnRh5nXr3qCxNDP",
  "key41": "3KJAko7i7fK88eZc4Ew1H8DhGhHrSjwNqDEeqenAxFFySo95QDgBFKzfpkah32wKzc3TZJye5PeTx7814jgnARi1",
  "key42": "TG6j6HPEZN3d5tGVYS2NhM1RNDTEcGmGCobVg4iEfFwuz2PhWTkkuhAvd8aZnAd362CNrQa57knoGvNY7UCN84J",
  "key43": "qrgEHKLFEfDahEMX3PhyqGoW3eUxrhF9xadzZtb6emB9Q1djM4T1uxw3fpssEyUNJdoeD5JdygfzQL778DrrmEc",
  "key44": "5khv7BuepQbfW5sTagbo797be64ARdQukPSK2dW68ec5hdQVh81Ls1TvpDNx9wJm9uQRKvU1hbrBM69uXP7twqS4",
  "key45": "4eUMRnDyTuMvYmFVQyT4iM5MyTSui4SrrxRAwT9BJnDwc2WfZmCSzBoBxznX4b5Ps68e2CrwkgtcnWdRgF9UJs5J",
  "key46": "4qRU8N3QA2F5a5SGqVTpmJWBvyTt7LkQgULczr8ta7LkGmxd4r8CEA8jfk2qxSh4qeey8RhaB4wPUDT1Z1oiGU4H"
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
