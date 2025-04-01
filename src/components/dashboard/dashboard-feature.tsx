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
    "2Lmiw5273oTYXPm2PDzQKSKB3HtQCewfQNvgf6R3hFmJ5jPrvsMY1dv4u8RqR5qCsRJJRpBXPi1nfhPosfUjbqkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43z21xQFrnXmxQUC1xnXZRYnB63Z9apVPa86Di5gGTxNKRzzahhiMmCSgnSFjMG4GTFRDnqAbsoodkvYonJ2bpff",
  "key1": "2SWs4x2tbKxY6ujLbGXtcuzq9NBw2PGvyKgheJBYPWkCs5VEM9RKtuTwCBBDmaMbZDxAuNoeMayBGVypkUYsaBvc",
  "key2": "66HPmu8Zh2mTWKQYA3STMjH2h336qYwv5eLkax3XD2ddrrXKFUUakSWLwcDcRnp3At9hMQ7AxophCo19VjtnHFZz",
  "key3": "4Jq7CiEH6ujn6s2NyzA4rTSLJq7tX6UvVXqSXrGt6v6pVGnEq2T3gUX4iwt1NhvPdXAMWSL9tm3mw9whXqf8V4n7",
  "key4": "56Fh1ZvFz594NRk1pQMumyCvW7ZJi52SrqCLWUUuU21GDEs4rEnWxgW9um3PD9U5nEnt8peQHLiwsDXwUM8VCF2b",
  "key5": "2d3ZiSv34QdpTJ4QoboivZEQYAsunz6Y7yseQrNd6TCFxgdecB26AETM8sAJH5o9x5aB21fbHJ1jMuqezyWCeNCf",
  "key6": "SjKcLySBRtD6KpRcswbf73aK4Pdt2HTSs4epPoZ8Ri84i3EW6UeQvd52pCQZVwRwk6z96wnP7MrhDXhL8gVNASK",
  "key7": "3wSFZhZy4jb1NArKHE3C7hWaR9gXkrEthKT77Wveuzm6pNjhb1wLhzVDyrHySQ2bAMiZo6LSCerfryV97p7kX3EL",
  "key8": "2Zcfy8HaHP9uAhXtBe3hBCRJWM2VeU7QVBAzFg6ZZ6X8fEbbVGsAsCxvmbaz72V3jYhfue71KQGUWkHQo3rPHkdX",
  "key9": "hsunqPRhkxWYLi7u8TQk6mbmhcJpPR2inGy2jaTqXH1M1ate8NF4XHdkZXpkWXgE5YQJox2A1zKS5XWZtYPyYGc",
  "key10": "uQtyTaNvsLA8QCDEm2E2N9GSGEb66jKG27iTaEq5i9HtwkZUK2Q1kb8Z16qUmY6sXASt8J65R98bfwKD5GQYBdL",
  "key11": "4Y5vZsyG6FZHg3pEbzLwQ9NJXBaUxqgXX2jSaoQqhz4To9KSpyH2cBdx76ziPbXo6aYQsTM6JZ9sebV2ryHXLmM5",
  "key12": "3nsyGvsLUbeZ1hqVZxZwggSZn6fs9c5wC7DAJorv48dknb76MiEkcqs2mbLyjc3feivagyMQmqXPKTkDS76D7p73",
  "key13": "2km2WugFQ6ctxvP9vbTLnf7LSNQZZzdHmiiyhjKPkHfMksVkBhf5fkhTFxb2zuHDZfZTUGBZsiJrzRvWe1kzKdjd",
  "key14": "3NzJD1SrQKXZHrJtBCtqkXwVQXgN4KGcTuyemz1oadKMFyMDJhsEnbgfdatXLiLSWTXQMFwBEnLMD84zJcp3byAX",
  "key15": "61fXzYjz4YZv1wFBorhdoMe48jR2rKMDFjWF1zWBaJs6iU592CxbB86dUvVpsykywc7ygaBo7gniYJypbUqRdEa6",
  "key16": "3c39PrufmZA3sephtZ3Yxb44Ne4B6uD1pnLSAcaBKNnNBWVnY63kd4ioGQchnGVkpkNTDJHg3k5VYbxeBNg1ZVVz",
  "key17": "5vCp1xwHTx3YY4ex8DTRqhc5x5TMb5xmDpq1LivogaXBywpiA4mSMs52bT4pCABwEjQRdBkB3kMXumwJAZPgk9KB",
  "key18": "4QCxnwUbBvWuWpTDxx1YEYTNneouGJYwb4qUJaUoneqMLeP7geEPpTnHVWfHoiPT97DujeNn8tJfjkaxZvk681DZ",
  "key19": "89NJ8ceXU7nmZXeBnseNni8KnfNBw6jqbmJC9AYiX62ydhkHnQPhMar5J2a9Z7anexTRtmDmVTk9ZFHyav8V7WT",
  "key20": "9Y3iWqG4dtSAvNLAQ5p6bigymmcHfYDQDVcdda35ieaTZbdiRquNJKhz7irGgqsWXbDdMwYXzJMDWs9EQoyBMQd",
  "key21": "2tsQ2qyznyUkwVd2SvTgCh1yE3aJ3vJ6XrjrdYxfBi4WMJkyrp6Fe4pqFAsNkhmUwfhQL1XyPtKjouxdbTJWVPMk",
  "key22": "4c7fNHz8LQNbiDvxNfZk8G7PEg31hN7PdAQyzrhomZ3561DWUPBkCm8R1VyKbHgBfNAursEggtNGpz23QF9Qn3VQ",
  "key23": "2UvpdMcpSmRDkmaNjDKW2TMdybnUx1PKeNbuxDbpdordTmttQGzWmzUs8FpbC1aE7eesKXtwbYtRuHp85u2YifUx",
  "key24": "31qwiWignnAPiWJhznPg6MNEtisZB2HBN4q76S6LKsVagrx59hcTL89x1jti8thhPFqaZ43PhQHEFiiAECVquVwg",
  "key25": "5HfCUFQGZBznHBhnyWRzaef4ksDhZGvM9XrgJUaqBrb2SCZpJGKeS33R8rDAdVSVkkGaNps1yUA7u3kuTipuKx5q",
  "key26": "H2QC6P5PcLFthftyBP2SQp1hz3KEfNh2FT73bacTcrWt5fED5gURK56dntCcMXGReLLBiedNyBuexjt8gcYNwsu",
  "key27": "5554sGBUpPeAxQLzdSantmVQPCCYw8BCvwJYjJBLB7GrJmaX8WxMMrSvedy6vb1Wqt21dU7C6uEDdUtX9n1Z7mCD",
  "key28": "4VoLWRR8NTAv9gvmQkkuB7LcsJVTjAjB3nmBwVwVeUTNsEgFwx5m31L36dwuzdRGpMotkMWFaJ2w2eYYoptcirUP",
  "key29": "2nKytofgLStByhGve8FiL3ShJUVbTeTPSY8xFdkD4TWF5BG8KBWzM3K723dGAUuzEGJnzwHybjswnjABuSkBntaV",
  "key30": "qLP71ePT6ooU8KoxMkL8pwNftdTkeApVUVdimnAaCY2iMHEyhi3E7frD8gC8pmNbtTW65M84wYqbrrt1KJ99aTV",
  "key31": "41TPwKMjUwkRdfyjh4DzbKsb482cue6RkXcb9p8A2tLA4nWUohLgTUE9WV69KXzA3RPCTBE5SSzTzNMB2ngG2nz1",
  "key32": "3XDYgCVmB4qQ3JLJrRHSE3BRWKpt1tHPzmTmDzgTDbmbY8FBeTuKxp3ZH5Rgw6yzy54J9W6khR8ZRnQUmF1S6oZp",
  "key33": "4LWiDdbYbRJxnX2odR86NkeW4hQ3CNEzuSYw2mYg5riqHMrSYe1uUTqvsJYJPWTQcP3MrnqormeNpALkYqe8BScp",
  "key34": "3yMRJKbWVdrgVrZ3U8nBPD6Dud4ksoYdoFh9RnjYhaHb6CS6krP6nnGjwW6b5AJx5sRZ6cuHx7finJECYtGZ523R",
  "key35": "3WF8dixHQFgdTnkxdcRqPn3A4JhSJeCuDSw4xV6vHTraLQSiMkxCtfmNeMGXwBvrpaREeVnBCLNpfHSnJF5gb4aT",
  "key36": "XuETmjVYHmqJPdFbDkpouNDnx7a3tA4Gu7QB7jEwa87XXHeAochJNABBdtgLvfV9TrbTBM1t1QWD4NTmYbjfnDt",
  "key37": "5WHGatare1f1iQx1KBGzQ5Mb3Dc5Vq7bUEuzAVe1n2J5AjdMCGgts79zSwTv5poDPQEcfH5RVjUtp1coAVurVKHx"
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
