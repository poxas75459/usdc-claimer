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
    "64Q352VBuYFYpVNpFsbnnKJ933sFuaQc9aCmfCmEpSjtv9MuVnX4Zdbmxz5ssRBpArtSodmndMFqe3EJQoGn2TTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tbJCyjs7oJG5j3Ejh5aVyB4mYkdZGRhPFPZaNFxcLCpAZVSqk9zwQHsUxytUFg8wyEHz7FtT2A7NairKJ8hr7mE",
  "key1": "64L8cZc5UKjhyM6ztYn5KNA833G41T79L4o1gNJ7JME4RAtcAkn5Kp88CPGzjeg9XRPamABukdpkdKE1572ohovm",
  "key2": "4MMA2qvK7c5optfphJZZd6nRhAbRTaw4kBefuxABPsok5HfDiKeKGcuXALi3Q1DKMqYe3NpvGdcVwXkor5MSHXsR",
  "key3": "fcQp4qKz67iqrwJKUrwc7Mk5j4DztKyfhqC7Mxo1cdWLxr14hCZPu1dS9pW172vL11GxZUrjZ7e891WsNNEqERY",
  "key4": "5TuLqPxeL92yD6YNNaj8N4umGtJo1qTau32LqttUUa8qjE2kn3cKsKPFR1zvdXtTiMzApcRh7MuNpayq7M79jBzd",
  "key5": "5LFCX7kBJRij8vbittqi96SUHmQ8ZSXBZQAG3sdmKLfjahcuwTjt6a3iqBrTm3e9psnBxP9zzpx7EjKsf2Ri3RGH",
  "key6": "2p13J6z2Ku6W9TwzriW3KVyYpb4QRefMx2dJ5Q5UJ9iATbCNdjJxe33ez7CEsnPkxsa4D8GYhcatCRRgUfC7v1zi",
  "key7": "5boDvwJaKd5nS541tAmwjfWZV3cP53NBQUQk22Sob5u566EkBcMCkVMmLarjTdVZMQoqHdCna19oGJifupXHAVh8",
  "key8": "3kJppvLk9VQ29E8KmxjL6zWb1W7khiCQX9twUpEHvnKaUuuXiWQiuXHgWV8F7CvEqKTxRujdUsKnrCYVqmnk89jb",
  "key9": "5LnkS8obKCuSHERwDbeBzGyEk4UXhAWhW3TzYZDE9AEcyhMFLYkZuFcHMEEw3ZX4MwJoUuwbW9Ci3VncfXpS5y6s",
  "key10": "5NCHFWSKBd3LWkCmJwqU4HKbTaiqSp2czk6E2qsKTK3cZ1UX9ss2djbPtoQLKKZWF6iHdGZUo2uvADTwV7RbJWWZ",
  "key11": "5TNxS1iqKCGQhymmF9DpmuqSc7HEzu9L9pk1BkBQ2p27kSH2pBvraXLpYZkfHGArSp3aKLNXankoKDvbSpFzUbT",
  "key12": "3V4sx9JtK24HZZQWi8QEAynNaZoTQf6PNJXSjMKnH7JkoATDRajvCSkZpUKTd9vuqG5AfrhZpptP4PJHnerofnat",
  "key13": "5nN5F2fiWxhAY4Sjw98DcuyqAQvUJBdZEfSXLsZFKjvYgdpWM56yHreAzMqs24rUi74JYSDJh9zzvTe48roCHLqZ",
  "key14": "HZySTv4BCnw973hSNj4sJDsa8AWeRsefLden1iNf61dT7DYMpgXzPqK5Jv7GvZdkoMcCWrYfnMnEnv7KrbpJCHa",
  "key15": "3dFXrWg73PhTWkHRqPFCN1qYPsu3aovydTFSC5tuqZuWZgneyyj6DMKzLnBWnncgZcyiZSTT96eszvwyPqLceqU7",
  "key16": "5zmd811EtzLXP7u7ywKijUUpxtF3Ge2v2athKyMaK2cjztcQt5T8842pxui6BcZzMPamFNgQftSGvhKGRfqymicu",
  "key17": "32U8VFYUYbWY3vPE8pqgtvCoxC8RFHbDvAEF7k74U23jG3cr5hDaRaojFyS6CZMMXZ7a5SRtMBqKH7ZTRvQr62Nq",
  "key18": "2RRfEPKFoyUuwt85S5qhj8dixfwbETaXQqAZME9Hqm1e7pPgPecXp4fXPFj3UyXxhMie4eS76nMXP8DgRUhwVcej",
  "key19": "fLdFmPVNQTjavFDo6zUU6NDETKotUPChoxzo51zTU3whyr95XWFLs1gSV2jrZyXef4j6jjubCWT6FzrS9yahkHb",
  "key20": "5jKibh8qz3RkAwdvZee79jAEUdnmTxR4ZCGUAgfaZKuoK7T5hLcwxyp17pnZbXRpdf3xwwmsN9AuBcAznCa2f94m",
  "key21": "5bvLM92E9GQ1suVKo5qHbPBS1nj8A32nn4KHCFymPK9byWosKcnf1hWXX2dPcjXydu2BmiSQRC2BUoH8QvCzKt2P",
  "key22": "4bvFzZwVqxprEcvDmwLRjesCYtirkXvUVBvGoQgEPW44SLc2pCz68dQrXscUX4bvuBzTX2kGzQnpPYnThJkwVCXp",
  "key23": "34Pv8nZZJuaMjcNvhKnvd2VnrnYH8ojzSHupu7vfGqMJHN1Qr2UJciSvtUj7g1oBX4VDQQXtt1ZxD4hwayf1dMZt",
  "key24": "HTcjSYi5Z6KE74PAYTyQmH5DDpkShV13hSfyP1QQdrbv78a2DHTXCB7TP5MVM9XPkDb5ZgHckMx5R8hjzYy2Bmo",
  "key25": "2UbREsG1GgUbKkaQaYVQ93rPxjAPwSruhNGbRwnf19LsEXxrWx4CZnCTq5XLgYJR4c9KVzJDkgUTadyV8n3k4XMn",
  "key26": "2yYMMTREoM8rgtpSkD6NKQDLpcSzUhRKNxzCUjsfQhEj1tMcEbVKWTy412u6aJJzwEhkJNabkxQxjfViuTcVMtKs",
  "key27": "2Nbc9zwDKrqoYnheFiDi7nzTQ4QhfxRBRYHYcNkpz6ffg2dEn8EbAC9bsomL1h4K1KBpdTzJTPzugLzVkyi9oqbr",
  "key28": "3kjtgD2WvpxPM7LGqtRhgp9jFScneXVHn6ZHk8VxuUKP69S6mYkxyMymqBuWcmZsiiyWLCh1xmr8NUsRwZztqtbZ",
  "key29": "5YFCurHhn1HEMVp6NXHoA6pF8df8ChNbwumVaDUdm8niHDcZb4inV6CUMh8cu1vUG5fdn1tz27aiDNDbo9aiptXw",
  "key30": "434nZw8nZRwd56KcfSdSMxias58K9TAudN3gHF2AQwnGsjCmHUbhDHEWgcLWRXy7L2MM9LEp8DChH85Kc3abAjPd",
  "key31": "4bthcDQLbUyT7og6HEf5hr3jhUGVceoZt3NycfxuZ8CMsFLTyt8ZM357wG2PWti55LigMaakKLQHNUDhA9Kpem1F",
  "key32": "2HXGZpdb3nFPMUYfmyWh5RBg3gbUFWsxiEYA3D6Xfwm2pk4Ykc6zEmKCMaXJrycQessE6eAS7BVDFFgujhFexSz",
  "key33": "3JyVriVGLHUjhQidkPhqCNnDPx8dCBRTLRJLJtQEfmMg7CmatTux9ZmPFQ3Uu1jS5dT8QcwN1M13sUtnmYv6duva",
  "key34": "2Hj9iF1dKrbtU55yoHnvFTd1W9Jzg7KS6bmWjZwHk2UGW4AHDPkYgbpCAoJLiM1GnogwirZ1n54Vs75jNpGFLYdE",
  "key35": "4tPH9tgy4ZtQ1rktjAnGrHf1DqeZTkV7HwzXMUpTyJjLDce5cCZgiTZWXqof5m8WXZt25wktXX6J68jKvUPeNpif",
  "key36": "2BkMnwkRrwEdRuH3G3YmX47ri3GXcT8FHADF7qsbJ83HZG75QCDtnDRN4X5dNRDz7w653JtetwP9da3ANd32DtUN",
  "key37": "32rnGtR14Hww7YgpV7fhJZZsmRhP3QGJ7RQsJutiLKySzxXVN5oJEZ8unoPwtQ1N2fg2bwkgartMcoW9EpeAvFrD",
  "key38": "66yjPzr8SR481CLe1ELqGwnEhuhjiu3hbNuKARg8rx422P97WWQzs56wmxW1k4dcxUDX1JrRR638xEaqrEMYA4Re"
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
