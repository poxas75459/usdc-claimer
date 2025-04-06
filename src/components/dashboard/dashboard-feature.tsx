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
    "2zh2cjr8jWXZG5NtjhpAi8rC2NEVekZHbVDJ2GPnQNyQQriMJhRDBbeSZvBnS7mFveUjFnHgPnah3cWWsYNWPHvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "noxYUFcAHsWzQUbGGLChndeeAAJtUGjeCuCgLFKfUKJXH3P9SKxHnXDFYRM4QoaaSN384LUwsy3uhfBmhBox9bQ",
  "key1": "aCYwvzLebGAx1W9xoUUp1pieE5nYWUfwY13D5611UqL5AG6uyLgUkk3mgPNoZbyAb44651YuFbFuMYYe8ro4ksz",
  "key2": "2zkjPn92LHi21GEVjuLWzKwFmpmQzKzJ5J82TgviSdvaLo98Mu2wyB4LsBj2VDHnYgcYvgNpoRMx1KAXgSaiWhFH",
  "key3": "qtzb97QLBLYeJ2g4wiNRGiQwMH8E4g2FVDo2PzeuhzaJpd5cpe2xcmGQJ6U3yy2TUeiEauaHcMxr1briRF6tTVQ",
  "key4": "3CaUxGnCHmzB8oX85ahN7S7pPniGxvV6xRRubjqeiNkZcVdneWkioKHpuPrLUkFRp5j8i91CSVK8LeYJM9wEYM5E",
  "key5": "45SuqpQMnXLDXzxPMHqNYEE7gWNqXPoEx7iRQB1kN6sYgHfx2NmXEt3utp5LD7iitu4tkRHU8PNt2jq3qZVsH8Rk",
  "key6": "47Qcp5CtVjoSneC6bmDqb2iMcvv4QgZ1BaisuQjjnBBSBnRWucH26s2V1U9RUdwgMgXPedVoLUHGLuoCBTQBqr2Z",
  "key7": "5Pwd914vn7VV49vhL6rx4UYtn5cBVFvnfY1ZyWdfFZYEM5jimGwcTvB4ASMKGWx8LMRHtnU1wAg4yN3Q4hgap7ia",
  "key8": "643owapc9UhE1NT3pFDNTiqdtJRidaUjaGpTW12Hf4r1tbTGFcnjKmsAjyrRJfBSee4tjQe3St2WTqR67oBhL78L",
  "key9": "VPmQmVxUN7zrcsahvzoikrkVcnjuwhNqjWL8wSRkb8T8xMKjdhQtpxCW1aWUroeY5wepud92EjBGyenmQQKYN7W",
  "key10": "4Qe8uQFxJMf3ViyxgXeDn1uvHxqnd2xEXmix4nzCZ8tGDNgpi6vhupqe2uYVcAWuz1qFH7fRwUugSZoMNJQmYrEc",
  "key11": "4AAqBcWh1cJrRWjzE4xqandJi581Yjv7b8bQ28rKV6AhvW4RaCK5BDNLPqAFWiNiw9Wn6z4r71hKv5i5nEtXS5Wq",
  "key12": "2RxB9gL1DCGhGmQ5aj5fcgTWedzZPi9L5KNZ22D4H2o6gVYKsdrbEB6ZV5qmQ67cZz9JZ5JXkrsLmdan2F4ZMAL",
  "key13": "2zLr9j85LLXc389zQnNTpfBQehUoNvh98Xdu9PgBAKLcsZAbXDdU5Z5vJdXCrpzFsznr4T7wD1sf82Cb1QHXjQb7",
  "key14": "54myxmyq2KgtksQVNiPWpXgYdBjwRqKKtzTPJoYrD4yTRRqFGrwVxnqsdjLcdfYeHinDeYFFwbBfL8wUPQTQ91Zy",
  "key15": "PVMUzhpdujXhoERK3Jq4uRxPPwE3d4qstpQrSD3VYEpxhEzo69HjaXHnor1TBYmRJJ4LKksiWCzyYUL5Dk5phRX",
  "key16": "3nYkfqTUYhtHoVpR6RNWJuNhSwkaAMjqGYwQD8dNTtqQQgJGFD5Q3eZpdj11Nq1mXH8FZ3wC5gWqjHCmGWaYeZ7T",
  "key17": "zSG5cChGr1NFixXGhK43tVVvQV3b6VGW5UeHz39T61yGjq34jpQh3KbTiZr1S9gaeK9VpnoguJZC2c6ri4AGUp7",
  "key18": "Y5LpphWhHkWHoKiR8HoXFsKY2sQH34Zf7wwq8gyxAzVgoyWeaiSXUshjRgJbwhtfp3Lchi5BYfciYUvLzvUbHxh",
  "key19": "5C43vPFwhPiSpgdFtcukQ8JTdVbsQWS975hRAdj6Sdvjo3Z2o1XDF6bvZm2tso99w87hvKxgDTuPEtjeN3Xor16y",
  "key20": "27nFLWb29fxUXNDkH3xWCKVtudVn3Br22f7SXxAmZVEPQpwMKgzbXUjnay5zhWsGyvdo5uPsR2My3WctjkeKAmdx",
  "key21": "ppuntKizorrfivjsFKFxJkppNStKMcACmf255EiXwsKbTgMiR68RYhKk5twRtioStCX7o3KAEnuftE7oWH9ZDyk",
  "key22": "3YPHLUkth1M6FTyTp8jgUnsRvYY1WdePpuGsjb3JaoEYNNxagV7HwtdXQkaCiigyUTgkQEoozJ6rPmgxcaaAcCpf",
  "key23": "3Z9ZDDJP2u1TfvxRmyap9U9TBRQtNpc4hFGuuJzAhVWiKoxudJN4LYGnQnkkae2HVqKTtMKURNieUybrfF5DwoRk",
  "key24": "8bCv3ZroLWx24rCyoSmdw7aCwoEaBXHQWWXmscoPguCbTNdjxEXDSFVUg3cxLaLKmgMs2ZtqUTafL4ryYbwaJTm",
  "key25": "3b4iicYxrHT4TiwBULGBhMyxarVUemVLeRDPw7q5UdPDFD6kmVF6iNn9zRUZgSNSJ7LaMEMRGuw5ZE8kGVRDvpTA",
  "key26": "2PnoktQh9ARGUBPU9vDrTVGQXabFuVhEf7QxFCXeUg3CcyYgRSB7F3GNVhq8mKzVvM7gQmNyBYY6W5w8JNpcJsxK",
  "key27": "552DdbUdgQG2qwFdr2YJ8yrCY1StMTD33tY2v6NMsdJV8K6xoKpyez979KJ1CjY73bvB6ATQ35AmoKArod4rsdfg"
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
