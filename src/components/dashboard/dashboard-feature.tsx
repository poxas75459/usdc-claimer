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
    "5EYkjUM42DzN78PSbjuks66BEo2LmJYFsngYhme67XHHhH6hKErq3JMH85QMVL13KhmZcxDfLUKF1Wg3aT17mvwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U2ic9Kt4xy7TuMYp3En9daQP6cPEc87w7tECRPoGcWUg9V2y4hi4wgTFCiVgYEv1FiigT58CwhzjyDMtCy2Kg8E",
  "key1": "4n3ymG3mSECGiXpY9niQtvMT3mLFYHXfbTpuGVKBNsBpBWhFni93biR5BWMbzeQfW38h2ciS6A9cepzmiCyz1GCR",
  "key2": "4AMLvY8AvfZcwA6zBnpJPVfHjDtyNdL9a78WtLjE9jetPQLoVFEFM6wcpDxhocq2deWiYAxpMvG8f2mSr4R1XkCi",
  "key3": "5fokRuno5QnaiqmzLYcjZq1AbtDMvDoeiEEjPN6pZmYYs5fXfVpzPBEhJr4J2YQBPR1iBNFEwK9537p6wUxVtfdk",
  "key4": "2BC8rHAVHvyfMBnCSAYkVjFXzqoL2H3SFUQC4GmKeJUczE5C6LCi8xrECfkdLxgfSc8LV4xPjNaTCsHRAMtgBFk6",
  "key5": "2fhbY5nmWX8DNCzY7aiKN9fprr65qGf5LmUXFp9fm98dVNPjERJc6au1pA2bpexqSdUUL4GpwX4jsM2gyfAxqNTT",
  "key6": "45GiLz4rS9thHw7WK799kCTR72QZYYFh2k2CWtUDNHjFJ8wJuhvEmFSgxM6LMjNoe16qT8EqFhYTnBeEwP6HmziW",
  "key7": "62cy4YfYSWqqTrf6dU6q4LKKnxEp5rzHLNE5Nfif9noUdLEYFNn668Jyq2N5WGALEBBuUkY1Q2ZhUepEx9YdbFsV",
  "key8": "PCyRoVRJPTb4hG6K51kUoVATZPgVy5FrdKmfJQZkwDerwXt1cnKarLVoTsAdW398DDX9CdwqzH9ZMWRWpimemXU",
  "key9": "4Tbkk4oN2ztfM8ZdozthYVYTKMsDN3qRQyqzCyRn9iAJrAABdPg3mhBjUs5F5rUBia6V14FC4oBcHFLNhZz9JBbF",
  "key10": "5TCHCegwaBL4TdUZEjF8thLKxzjtMsqm7Fc7QEy3bPpbspaYSf5GGuhJLNbdfuDDXNQ4uX2EbjAxYfXkYKpFGQ7z",
  "key11": "aHds54Ch63bmBu3hZvqS9BYJS2UYnPthpygE17C8wf1BiFdV9rRU1q7H3G1D7wDVLet7h61B7rpxAf11qxDaWcB",
  "key12": "3nYXzfjMzqp18JiuE1DVSVbCdE2fAjpw7qangxXmAzzpNDTaEGvgV9GaMWndGS5M2Kj9L6WTyxt2UMajR1dtGppE",
  "key13": "4AkCNNGM2EoCDUgs44Tgqd3cBW2ztjcvRB3TVtrLf65c6jPAUGGtHhZyVSZVZc8Eh6MRqmUusVguLDDCsE8tuHap",
  "key14": "3wWfgtWDqv4qokrDoW4BLh4G8tsQgeiPHg1kjtRsDkV73sm9f77CdwPovUZQyUQSHkcX9QV8Fm9Lyzetix9PDhoT",
  "key15": "DZ3f6HoQmmppoi6kVqx4qvGZmcHU4rn2Tjs96XQYDPRgfWaGTHVBUuYAqv9C63qLjn35NZa3NxkqxpkLFHUz6W4",
  "key16": "3vZcdc2rc8jHvM7DK55ZwTRsasgCyc14XbX6XQNJ3GEHDQvRbqXs76sQyGoEDfRWuHnUCMHaWBbWnkNx8X79gogj",
  "key17": "FPcNuDJyq4ktcWn8Xbsxotqe95fqLY97s9jncCdyA8qyEVx6kE7jiCi5W3aT9HyptVnhAAjqpJCVxXpE9bjhRr4",
  "key18": "4vNR45wixuGM8fu4G71VUteKapQrUuzJGSvmtJXzs3Kzxq1B9pULDG1BrbJaCT9pdRkbefJ9ajSxLaSKnAgK59ti",
  "key19": "4PgJb79hjTEocVQ5aokLrZATs1uwP2TvgKfZUgrHXd7MfWJFXURrG1kb5sbtrwpcLLjgDgCBB68xFGjZBUyAwGQH",
  "key20": "2QmjoHzeK28MaGGGjoUG3CpfVkbdMq73sZVb31mKvPPkrxwNvzYUu6BPuguJsL9Dr23VxVR5AgGsRjMUb4ViFAfR",
  "key21": "61K6W8qgbbTQbnV1jHK7MVYgtB5s2SWwT549fiJjcvVac9mm8rGVrriu8DuC4HeF6Xg4ExsroXANSA5hnD5TGtgd",
  "key22": "32dpEDHpBcd4hTspcZDyN48naVNvRVZ7BU6F3SiZn7X1fR7z8BJ25gjGSG9UkhZ5d8SWDALwktLJSKNgf9tZq8Vc",
  "key23": "5RXTtJkV1uem3tEJQBmx1htiBMjsRwj7J7DSk6Rh9NnsGLsuQmxA27krRbRwiq8Es1iRWjhf9ygs8DQC2xF6UFHN",
  "key24": "5rGW7FYWgXXFXHK5Db1NYm4X6jyPb5jG353rxb91J1Y5TtQjfkQp3qMVgmt3tDm6ZC7dxpzg2B9Brw2E7x7e6QgE",
  "key25": "4surTvr9YG1zNoN1tJHQi7wVVv4gThQFmAUd2GeRUyiASHngpaNnozYGC18TkKcYJh4fWnS1yU48gunEVYKR4dyx",
  "key26": "iJyrjLbPzTQBdYXSJTXJ95V9nDdz1sNxiQJDEHrv6YDgfJEpUuF3dKbmTeRh1XSU2AWZfNJexaq84pinsNMNRek",
  "key27": "2LJXuy6xfHiFEKptpyHZr3oitooBnmANxXDnAb3EPtM4gS9NFkxvKmuTawrNqtkHm44prTTab6Vq9aUfCuyhUPuT",
  "key28": "2xMVzBQbntTSf7JiANhKufPwA67iktuornq26vLSU9nicPWnF9PV8aEpTpU3ooSGoJDvVki3epp4L81TwxwQZZ2C",
  "key29": "4RMHqCiNAAoUfzhyTPJhkTuSKNcSZna7xPt1AM8s6o2rqN2E3tx4RjPUKaxEUhgPDvqdE8pdzwhoFPWef8QRsYF5",
  "key30": "2D5eUzPdJ6utm3jzEGqMBRoG9gxL7qx4V7MrrSur8yLeGwTPk47ZfzbFLQup3mMnfRQhbaTn1CPAFhwLiCxpHJmA",
  "key31": "5y5V62bYKryj4PLUA5mDuqQmsPENjtWnoLtkEMDe7NowaE23iCBjcwTN8eZ9dGk9S5feAYcSEgofQEUrs86X4e2S",
  "key32": "2AcAZ94DxB9tQwtvgeu77vSuZGGAMXAh1nPDojo2NdA4RBC5a73wY7otT2dxSqMWoDijDxKEi2HkH3C3kEBp3d2B",
  "key33": "44rzZEPqkZHa9n7Gk3KGdb3QRfLRjHvxvXCVtoDKuusXgabsfNWH5WDH4GUc8RgHG6EGEXVHUUm9wc2fBXhNWBuc",
  "key34": "e8P7cY9qazB1R215MgrpbL9djwy3vR9srxownB9A9khzPRgoX8UVLg61BuBYRakYj7c6u52uvqnXaEFb8SCXZQV",
  "key35": "4a3S65FPKPmHdvZG4feUXvpEebk2zxicv6CfXApFzThMRsnsNZsTjUk3ZMW4kPsNcyafyXm7xYWeEjqx8BRrWU4f",
  "key36": "5wafsw4HKxt9dC4bv5gCGihB6dMhQhTX28TpqyQV7JZLEx5PNwqzG2mnnK74hBk1KusMXDk8BAr3S6d76fmZjYKs",
  "key37": "FFnCRiUFe3mFkqar993iNnrqiGWkwqtiU5nU8w1FqaQmsTT3M2kMh7tGB1LnGCotEKDZj2ajo1BeKtb8ijqDz6P",
  "key38": "2AxFYqoqv1YsJxPBFLYoNMv2VsJThN1uhuYJw9CZk3srLeVJvPFhP8GG849yKSFLNgULbpA9s4pZoLKbQ5BoReqq",
  "key39": "3uuhe4NM6uDHH8n9QM615xZivQ7MNiNjeFjb7sDrnFAqPQnWwiapz9V64T2Ss7VbpJtz81Kedo5ciyJQbcpTqf82",
  "key40": "3ZqoiYTsJvWRn1gmDDrxnGUANhxngdEP3NUCWr4tFjaw24SVSJPMFa9rr3rBrqrauSuUJArvjRM4sz3yLAR3uHPx",
  "key41": "2nZVRtMeFkwX4AeLwDaWiN9VA7XGDxKQDoVEt9hQqHxLQotAzgiYB9tBWrnkdw2kK8n3dHpsPZoSkkUgJmnLcxJR",
  "key42": "2KrL89K6thyRVc8zjy756Fo16JCwB7cP6PptBXs8DVxoB15r1dLv951gvw6nQrgBGYgQgGcKaByaV4RYftxJak3z",
  "key43": "2EtrwXeGsr5qj1TzUiq1UuARhtrVupsJhSpJHTnQYVhyBuVfBqckV4WXLJjZcwA1CxTSCtfSaWAJ3czpCNX78FZ4",
  "key44": "4LXyYJ6FLxdZktLxnJincjdt7JB4e1AEQwweNqN1tAxZu8XtV9ibWif8mhwWMDpmLPWkXP1ATBieDpeNkeSSJNGA",
  "key45": "673kQPD24LcFhkQ5gchWTEN7NzvXfh2gN16LCQmL6P3PVT2m8xQ8wewc5UFhULCzcLm1S2kYD42Uz8eCA77a7msa",
  "key46": "4jPWY9R2oq1LiniRvxfW69P3QLm49fno8npBisDBecf4dmmsDahSK2ajwavpzJqrbyEZAxxkzy8hYZhSNvfZinLr",
  "key47": "4dNr4a3R9pkLfSP1C881daNGDEiv3GqSeCErHy1gfBWBDocUAadpMgmDYmcXz3sSFuDeW9N1ewpVz5FRZtaA7RvY",
  "key48": "4wGyLsfKyXHQEPiM6864phBG3xEcad2DenuDexUZt2GP5u6ZTKPGvaPtkp6d7xFibwvCDtePso7uE4E2MVMTwMRP",
  "key49": "2jeYNC5iZ6M5yfQvjin3DXa6tZyeKufxKNUuiTFubMtVrFgadGQhUy5j6jLMiyd4bw8PBdTnmaEyAhqYR6Lt1kV2"
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
