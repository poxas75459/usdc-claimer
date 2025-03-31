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
    "2XXNFV88Hif8XAvVhC8x3QDL6JZnnthAb4NkJAtzeukm9BN6bxkD4fdkX25pbEfZdURcmzcSDAb15UnTqFLxc25x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23aPD2hmBcanJAp2AYKqwbXYg2YeCutB9b5rf1DrUTRsWSaJQcaGH2aSRmU1ZbDAVCdg6NKaUQrF1So6hDsKTKUZ",
  "key1": "5WMnhx5VfJCL6JcAjaqPFEABQyqyao71XeLFbecQDqjPDEygDpytb8zxXju3vUbcdu5dYhuQHM7sfE9mhzLwnWMg",
  "key2": "qTYTNcMoFqY23AcGoDi4S6kB2m2WsTrD3PXfvXwaLHCA2WMiw1KZkiERwqNuK6Bojfb8YaJjV2YmLmTyZzEBQ4M",
  "key3": "3TRj6B3hWnUCi5cxPQ1bHpvuyYgL6PYPw7BkyaPN9YdPkVVAVXbMbtLgbQo6sWK471aAM4ZPcqddiNeQJ8eJu1KB",
  "key4": "4mc3hj7zWMGSfMwDNjrqM7G38hpth7mvYz4oHK3RyR3ta2mBJTgSJwU1RuRAo4MzBSi6QE36abubvbBaDnovejpQ",
  "key5": "4t2XbpcMCUNF6MQ4e7te3xsLvNxMb8UsZxiERwyfZ4YHpkNdMxMxUy2zxBQhbNTt3ekZ59zW7XfmMqU4YBH59KsH",
  "key6": "5mGmMjZ3nvk1zGNDnjkipoXPvgC2v7pzkUcXsmTuE3XaQ9J1QBFJKdeUnu9d8BVuB498rcag144WaZ1f6MUrUKD5",
  "key7": "2JWDSrxPv6d8yVefNaGx8uMyTBywPbxAdmp4jPWPFQihm7apPvdBYVfT1NqZ75GLgPWXLKkCWrroesGgX7Bug2x4",
  "key8": "45EktFEiGvD8pDmLpriurdS1phCJcpiXPDBz4FNDd9WjQ4UEWpuxvYBdD156jamnEhKYZ5JvAPqxdieF5v6BwvnB",
  "key9": "5ieiuFGvkfPJLrw7MEgRFBX42GK1QZ3icwifjZiYTUT1upBtLT6A6cauPgJ5MeJjrjPonFMUTiC9JizEVDXYLU8H",
  "key10": "41NadKaToTVeHtV68HWP9Pfu2oupvUhgEoQo7nLSCvv1xTtmw6JT86pzxBz7uioJHipv97cmMAfQCf5ZL3oRwv6f",
  "key11": "GtbALbHXYbAZn7nc9wNNxxCMxnrw6MB6jDHE8szsEp9w7oQCyfytYgKDZzcju9vmUK6kqm8vR2ciE2FiCvtZFvv",
  "key12": "4KF4E3q3Q9tDbeeVki9br65R2uKj79d7yS6BsRmkqVV8NJ2cCkst38ajj2tqc1dPTd9af5RUZV7gG6PNqH9uuDd1",
  "key13": "3sVofrusByRKXLtyEo3frNMgvgYm5JAijJLmyWbsfGA8eXGRy9yEEe4RACHj5t5TUUEUqDDr71uc3UfDvHDAmqpP",
  "key14": "3Qh5a32myvCmWfNqEbGukEieE4hJgu41JyShJk7oJ6M3XsGJsfLpPjQPSVUyXgzExYVW4cLGRYEPtkpfioxemahW",
  "key15": "4QmCt1CPQisvco2uHHT5L3XdW5PTCzedoLYwnEjs5Mni1AowurSAAbANZCi7BGjqnAykorQx8iE9w8daPDXx3Qoi",
  "key16": "4gdPQMW6fqmZaQi2ezdeYB9R6n9Qkf3RY6DAF2xuCM3ivXNr7H3wpAUq1NVT5HgC6bZybGkjkWH3AiFTZCw9kXZE",
  "key17": "2iiCPANcRXsG94czqa8EjpcGsLcYP5rdf93TsVgxpcB5JChzsPNU1frhLiuXMEcwQKnXgahYeYyi5HcyN5p8zLcT",
  "key18": "4hqYsRyyAg7hNDkXzNDukAAtDWnyMEA37vgQouC3eWHcmKhuM1xgx25vZ1TTqUeQH17XXvmgBg3VW5JQ1r3xLbUX",
  "key19": "oTdJvJRmHUTVrBCfHRAkFPcsK92eCa8rqD1HaodybshR7muYJxvwCwYqSQ6EF5xfBqrqmJKrP2kruEYFECdXFpB",
  "key20": "3RVvK5SoxzJGbaTepgTCFpQeu5E3EkNw61ji7De1xdBjtJabnAq9gE9gpDs8XDkewBXby2aWwQozrG8g7cv8HWNq",
  "key21": "5Nd79m3bqVfbzY4jRKWEEeroJxEuY5UMY9BvBon5PSJkvqrHRiZ7nvyuuPGEVh8PaikMG7xj6UPo8XmTeysLE19a",
  "key22": "AsfDwSoFPRYK46dZ5vCCy4VfTiUE6WcVNTpYjz5VvFZzww4kZEePnJftpFQwdN5aouc4go6tMzdgrPuXpts6CRR",
  "key23": "48UQhjZmhYskdCDdFERGKQL53S3Fxg6Q74WHB8q1nR2uXbT82EsnZWU4Bw61MRZVYzDGj9UWhzBWr3dWtUb3RGEQ",
  "key24": "328KK7xReFyazZUSgpjy8B8cuiYb7KTEq6Vz6F9CFwXV8sHwqF9bVrt8Zf2voK9rPDqjGw2FPoxzz2VZ6H7gM4kJ",
  "key25": "2iMj2BdYZEXFpDFqigGztMw2Tv7gVhgD4kqi258mDytS5vAzkNELjj3awZpwC79cdk5Cmuw8ToLd5bpGB235JWVm",
  "key26": "2m5mbi6SFo7w5SVpJJGjD3WrZsXbnXN9UMj3cEs3m7SZ1RMjGYjBcd42WQN6zLmuPf6Cx9qEx8RzDLvwFvoQLxGS",
  "key27": "4DsMFE21hpwoDygbk2qm4Yn6vQUcSzD4MmDPuUZujLWxqokgzgt2rWWeuSjRVZ6MsyAq3WYzq4gdGCg1knT2qYeu",
  "key28": "5Hr6QzCkM34TFaPPnfzSfgWYkXdJNvLURUxq6XwGznBd6vW46HxDcHdX6vjL2qTPkRpBNanTqr6pw9YkE5SXud4b",
  "key29": "2TBERf4ohcz2cGtcbk6gmn1utEf4YFu3Qp5A4H2dMf31NJC2vAyXLePQqhUkn155pUPaieCPs29rRAgDaatXqFfv",
  "key30": "2tc5RdERb4arDWcL9dA4HakcjEcjQCwKYUL5XrjFxzxNwCP63tqwznb7nRXQ9ScyaA8V65JRsHSppRbJPiZAV6m5",
  "key31": "2HPP8da4sfuzeL8wE7uHnMpkRvJGALVfapLmoF1S9FzehZEDHATGEXvXP78KH3Na6DixM5GsQDuZj4spVs5RXS2Q",
  "key32": "pmX5NgB7hGLuaiKLWU4wHdkHasTWNre6uRfSGfDtiVhoNNw7DDkZopCTsX5JzwcdWrm8BxdUuQaEjUKGEF5A1b9",
  "key33": "zuuZXT2EX28sZhbx4w3xvVN1xDRYmmJeE4ZpHFHTm6f7eBfXtopVPiumxx8XXzDwSS3G8HjXeJg31soo7FbpHBc",
  "key34": "BHp6rRGj2MGCgzmpZXpf6DP4jZjayx1XTnij6iVrcMHkLM3trZPpfL95dWHzBeX9GThhgucvFUiqSKMykz28F1M",
  "key35": "24BofSnFLawU6FFhEc9R5KqNS6NLwERRtyrAoomgKwh2fVSdheDggoRANtJnKcabHk9J9aGQswnB1yKeASFxQHGY",
  "key36": "5zKzTG5Xz81NEMiDsLzLocTaCTyBXr7DBvkUzC1D2v2Yk5a3Ds2RwiFC9NUCKzXibTUEgs1mui6PonKN62wZ9krA",
  "key37": "2Rq97Bi7U4pHpPcGa4Nsg8TCa48Wxc63fggNLKnHwjsjrRok9HjVJgNcPUJXzMy19N6aigignnogbRwFqqJ3RvBb",
  "key38": "HVfJ196w7bpaUg7GpBFETJXofspNXYLBjAE3q4GJCNsSpWePicYqbtv7uM48oBNuwCJTmWst4fZZZJQmEC6f97K",
  "key39": "2PG5m7mdTZH26Ee9NBRKDYuj19w9c9BieE8QGzrEMwZXUvuvVw3wMDSENdecS8WPWiJoVTrJjC8cmYiPAE5i64v3",
  "key40": "4pqKaSkgECZxUm2u7kpRcsXK5FNCwjLJ7dREWaLs2kFdKDUfB5199CKo4uTrPUDKgMLdFCT4ovxEjLGsmKnPvWZc",
  "key41": "4itgEMs3UCiiTfnGdYwYEuBtXcy7TcCfZYhDusJtnw7Yhy73mCpp2dvGarPVcU1qZV2tXcH1YdfNTzgxbdWjikYC",
  "key42": "2gYZ5xDJn9HttveH177nc9gzkVyCy3oAgS817CbZkfYaWnv21mEKjASLB7DSWFKAcZVMrwTRKYv2ZMC49piqD8Eh",
  "key43": "28jJho2kUd9UZpRVomexfPJPCDhPnfPPTrDxm1HgHuFaSsaf35wrhQr6w1GP6qe4gMCvrG1Y5SYKzWz8eJk8e6iK",
  "key44": "F1tJZsy7inGnKjGh5c72Yz7A47nMhfUyjNnzgFA1Hec5ZTaiTYJvdVHkna7mfMvw542fvkCro3sEksh6A6W2Pon",
  "key45": "4QozWqWxdNk9TT4QfT7v7kvLYyLidDcqnxpc2JMmLVvjXTj4GvtRWDo2piEyDkLEr51wMZiqXfijs9TPTwwhvphD",
  "key46": "2rgq3WckcY7ee1cmqo9uqSFYahnD5sHZCLU1t3kV84hexKcgoQQq1t8b6rrQyEbGUUmoUhKFonkx8KGP7W7n9CHn"
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
