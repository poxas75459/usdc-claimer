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
    "66Le6aY1WCPXmrNpjp13QYv3pPDuqEKu9NsdnnFtcw3wi8TNJ8kU9q226ihC25mRfCW7qaos7KVwKhAAcdt9yPcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5617taF2k6rSoVQhq1J8VzBQ81WwBBV5LLXhP3x8h5mKSv816fnMyXekHAqsA6ma4TfZd1NNvhq4cPUkpNndPQ7E",
  "key1": "4yubxtGGSmRa1Zq52UYMBhqkjwWpctWCT6r2iC6JEwiebftDnhZwkyGf8XBvKwkdpQaKs8pHp7h2YgsMsx3exmwk",
  "key2": "4rPubTvh3mm48HceVGqKoK1bscDzp6SU2udB75qNsXjber48ycCy5Te3UuAqFatMhR6JWQAQDGzK3GynUdB42jD8",
  "key3": "4BLBZqQC4e6381SAeQrxb4GitqMGMGkfNnth4d9ZnySTkKZFThN3rbo1gNQujtRmmB4VV5sUZk1sQKUvJ1moMziJ",
  "key4": "5R8ZGpqMvd6u2JLv1e23ua1jc8zchThXsUCdJGaAF9e8uC41Ao6goiQvkAKqRVBS3fKNZatg23N3pFKyEjLcFyS",
  "key5": "3ErskFKA4FQT27Tj1NfQm2MbNbKy5jwFdDbYJhfpPjBsgpVM1tb2atwFNdBH5ChAXLfqRTsPevm1LdLUY39SHb1D",
  "key6": "3wGvGTzz5BwLP4dEP4WfeMQGV24QUDmazggA81HGc2TThDSYHTft2nnL6rrxsEKo8Dc7kKrSRv99MjWD1myacVHL",
  "key7": "2Po59zfHKjehk3THVjhbhPUuGmG9JUNAP4DdZveqK8T4GQSJ97fPtjxQFRUwQ5BxNuGYHEY3WnPCNQdFo1PwDBAh",
  "key8": "KvXAhADbT23TNcaw1yWHfqz8erbzeukjqiZTAYY4ysZTEJCZKp1QKzCrt2cnqsNVUYwkk1V4Sgsmt92XVRfw4KN",
  "key9": "HfvNVVgtraPtmdvNYbVkvFn4ifcE8VZG1WuNmGjDmyJP5Q94g3M9BMJNUGR9ZufYB8KStUZoREstWXPepri3ru4",
  "key10": "3zfRnEGZ3QUcQ7AXAFVQ33B1FFWJRGPYGzWbi5FU5rNNGoxvLHuneTbsLGUuxrhELc5szvMVkiAFm8ERsP6JZ11Q",
  "key11": "65ie6P4hB3YxBhYCKwunDVwdZQuBiT1QgMGnFqg1crcsPAGsMrvkP4XY3gyWUtkb6VbNKQv6GaRuEQ3PqQ41QKx",
  "key12": "31hyKRvVCyGxiKTVCgqxRqC9RNVHHvoPaykfT6w8Py6ru1WqoSmM2umcHBH8eLBvGyELd7GRMCLkAJZoP7CiPAcm",
  "key13": "2BBbZUthswA9vVSvCKUdzT6PoiwEQAdLmoayNPswoJaA7BXLmSn8QHfhgAe9MfUXBKkHNHgfFvdDJ5J9exCecb7W",
  "key14": "QHfxMy7WnefzfcJafJidR7EiQdcbmkzqskmiBHXzJEefznxPgzfPKYCq7DRsWdeCJ6uERKRbwox9DH3jMiZoxX9",
  "key15": "o1CpES5SNegXPwwAr6NqCnqddwPaczUrdsvRHFk8g2prVeF617Cpkg5NtKfTZ2tC5zQugPWptyGxqUBYoERDEgt",
  "key16": "57AYfpMwsvFtiqcCcDb92HAtksJoR7tPP5U1L245Qy2gebjak36xn7LJogiJsCaK7SM4kmjAH43mKJamsnxaCX3a",
  "key17": "67NtgkoXF9yWa1eh8oEJmnHkMPJZpW2QaHoMtUX36YsB3aDaxz7LcE3u51em3eSr69Es8mU5spX4zA13pJmVYqHb",
  "key18": "w7U8LVUk77Z7MxCoMKa828HaZ77yGrPpKpT2ZwXY7wm9LvdVRyAJ2WX9P5nnrj3e6cj1pQWhuTP3u3o7XhYHKwR",
  "key19": "61yLDrqxoFr1MUazwq9n2dqxb9rp9RKNmov58o9ASmtRWjPRo9RY9TPCjJXDp6wv9rzTTrdmHCDY3RrgdxSXsmXr",
  "key20": "4Ai5xZuKQhta9NGcRHgebJ8d534rjhJ8xaNC8JRumRpN3gGGYABksypuheLKpQ3uCeZkTJGHV5YGCHK5rPnaqAWJ",
  "key21": "3B6DUajLFKMRUSMtNcMesFtGJyLi3x6cmS44Ck9MXCZeTJqEd3VBazCeH2iN1iSpRU6KZF4FaRpH3cQKYvE6Ca3g",
  "key22": "xCUjpgo5VwJt6EVh5woeUoYQTE8dXHVce9Qek6xTgkker45rMuLD2N2BTSk577G8cH4BLJTCo1viFXVGEcaLAq2",
  "key23": "NmTctUM4znz8vTWaf7oh8ThNCARFPpjUCV3kwcqPJHMgMgRHHbEt9yRepjCK3QktnkHZpvYkiynhr3qUrgiTkMA",
  "key24": "5RpdzGg9eHGTpMirKHEFtVPfbYvPvVFwPbeQQ5zTEFv9XgkvZJRtiJz7ZCbtkwcfEX7PCW8eBZBPt85djXUXhoVq",
  "key25": "41sFCkX6X2WsZNcd7h32xF9jZg3yBKr1BTvMBWGdYKx6mCbkX56jtxiuDMuthY5wdYqn9jAauarBv76XVdkAEHzr",
  "key26": "3QAT2rjxFc5ko8e1ytd4mBuaa8iakzFV6HkiSqcSgeWDygKd6HgAkQJrjfM8v3AYaz23xREQeKaJehymZXMHk41e",
  "key27": "3tVSi3RykusyYd4YyKds49Mb4nCsWqKKht3ozbzvrc1xb67VrQCQxH1joM7eE6Z6WYk7XLt9N6gA6kKu7rozSqQe",
  "key28": "2cbjSc9Pb874EyxcNdias6L875J7fB8Ah4S6b1EP9KjEzy6F8JMcCfkQJGXAGRsKZ83RTYZwDv7EjHAY4RrWZhfZ",
  "key29": "2hjXQABDXNLgbZp3y8guM6X7QELCnPM18p5dvnHeT9KP5M3Q2483Z6Vc5dzZmrxmbFy76JBxANmuswDmgyrRTtDB",
  "key30": "ZrWRuqDzWyhJnJ7jAKV8CMCSvUboeeLCVzTEQUA38z1JHwe498erqwiWUpozCCT8sZrpQFHBRxT39RdHRb8DBnA",
  "key31": "1tWFgsqRC4FLE4yH3jz4XECkGsUFeh8ebJhs9MycDxgP8rGDe4bRLqXtaLXMydstbjH9PqZgzewvWJxc4VwXprQ",
  "key32": "3KM5AjJTKPV2PfyXAhm2jZTYQdrnuX9Bs3r7AnHmr8tKm66VDLD6pWTYJv76K3P7a7jPMXaM7pG9uZCYQkXn9K3r",
  "key33": "2t54XYo7GcL1RHB7zgLQjWSm4ASqn7UmTBMNp4HMZZCGtLrG8NUiXZrJVKNXsbumLmQcwXYkUhUSwNbCbX17dEW8",
  "key34": "3cd7rZBTNMxmbeGWN548sYUPqCmZbhBctjWcUpQuZ4y6gJ7YHY5AU8USCvQ6rZE9Ta5jTzvWZpT2LxTWJFTQ8hYN",
  "key35": "5gEAtNsQG22KTqXGJwGsVxqoZ3uoxaxy8K52smxNtiHyLa5egsBc4gU4fwGqyzK6NxgabNi8LHUV3ZocpJzt42GF",
  "key36": "4q4CnBRYYfujDmtxjwUhGRixiF8trsNa2Fc6DDfDCiPMNDqyaZzLe9jqNMFWukNJmexBSWY6WUe4Lks22BzqrLz4",
  "key37": "48JTxqUfnw5AAYTLsvX9i47YDjw59DRdNsMLmRfdmzPVVchWr3AFkuc1xp6t4y2qswihn1RvYkvZn6uw9wdEihai",
  "key38": "4D3AbfSRRDeVqnbu7uphgfYUU6MKRhDKL1Jja1cmVVWZwmJYzuQApmJ3rmEPsXq3UWotPr5fabHQcG9DTfkeraxy",
  "key39": "5JHBZtoeGDAgxZJZvMuFyU9sx73p6mitXHx1VfUBUeH1Td6a2BYFzDnV1VvwQevciSz1z7YEjgu14SatJKgiMmHA",
  "key40": "41Jh4myM9jhkFKzkaoK3bdE8LDnmyyU2nEX4nAygwwKR7TDeBPQiA6emmPPZfpS5J9gqgsYAo4pGpL1jgZsNbVV4",
  "key41": "3i6MZJZAQuvmUE9Z1G8AB5fjLAmLoYqjtD5V3jhJAVt9M2RoYaGZoPQht4ut4bip5JTzDxSaiZyNonLcw7kBMxkH",
  "key42": "3vrQMoHRYGiEpVJXHmsfsNRZgyVcEotmrRscnYPTvcMgAXiog2zkWdJhF8rmScYiK7Q2xg63uXcq88co5bPhCUVZ",
  "key43": "5k2piEv6G5rx6rHbk8sZxUPSR6KWFnA4w8hDSsisoP5JHMCGEUspmeKrgKNe3en37rrpz8ujNeqDKZsi6zN25sYn",
  "key44": "3GHzLFurCYdZUzRpKf6DTjkXL7gQhq1g3EBSQb3RXrLRH8GZ6fyyprQhNwxWwCPaAUJR6h3EtmSYVkJXobGtiLWv"
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
