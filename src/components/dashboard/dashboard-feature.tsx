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
    "49vAi48fWCpNBUHAGa6Adk3RhneiyuTwL9oyEnzKGQozf3bj4C6c4YaoHwkx2z4MpdwwRAQ91LTiUNXEE4qxVDnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvyzcX7DsGiVMq7xJCCnvYFjPASNsBR22LFmc4tvSYne16CVcva6AMaQFtvX3WY1RPUzWGm44G3mJJTqa7WH4Xf",
  "key1": "2hDsZoUpLDxRsRDM17vYjCJdjv2LZf94YnYJtHyp1rTNPV2P5aiwH7JPq48LgwbkQsFuGjJdCmG884dLoJjJiNKu",
  "key2": "Z74aDkWqjGi6gCDVmLdVaBmw55fukF2EhBRsvkNKyNKWzu5qSo9DiMUqBjPGUxyab9YnRmsiD23fJbRcxT6XLST",
  "key3": "2S4zp74yW54cGoeSjKquFzjtJm23eJgUsZS2zjjyb99yW1m2WHaKuYVXr9uVp8TuquaeiYJ8X5GKc214Ch6SSs5S",
  "key4": "5Yi36HiZyfE7q5pnCCCxV6zMLBz7MNsvRKnFnfYVVeeKEceoDPXc3dzKYcXhVekZxvGz4Q1LgPp32fnnpwxDqzx2",
  "key5": "4ky5o6GMLJTpUurQQB1yN1wKQYgpPfoZVvwQSaWNAT5BZ9j8yAW1RA4tfZ8jU86Kpcv6kDrRrGtjMdJSC45hvFKg",
  "key6": "oBKQPPaCeBvMrHVxw71MRauzXfUQLdUwn7G7kL8UsUtepEo9ab18CYAcG4GW5mjE5rNMcSEjjM34tgbHrFGE6jv",
  "key7": "3ZtM2f3qmEiZEquQPYykRUfJnvMLQtFdifrEr4t7omdJ6KE4wQaqN12Gto8EukxeBLtduo7PFJYEBa1C2yUg5HM2",
  "key8": "3jtT4CGDpfPpW5BqHWhJvsqLCdEurBx3u2LKPmeRqfd6qAaNZPYx8bxkuNfkmRDw3YEPv6tiFBgiWYD5SzbpcnL2",
  "key9": "fj8c4o9zxim2WGf8jRD8Yi7wj6evQkvT2yL7GzDq7o4KTgMU8hvgXtMb9Qfqok2C43iykP8crS4XRFRsHe8dPi3",
  "key10": "33LZTTEyTYH3hJkk7MaWAAbiQuYdZNxagtXRVDyubisgqiXuBprwfGjqAdVFMTaRfA8Vbp6h5XEWMd1Dh36wrWmp",
  "key11": "8AaHRimUcMzR6j3qFsyV2hSfEAh9uoXGiHn6JaWSu2w2dMc5MNPaq1v7AcshcS3CthoVPTxCjEUUi4xd2mbWexU",
  "key12": "MtW5mNGrEEevi21G773aLiZaKcQVcLVrpboC22W7sD8BNhSpBd3eiuet4wmcf63qmAmS8FdWb3wRid7fiPrxHbE",
  "key13": "3zUMV9dkBYrfcHhK6HZiyjm4Zp4JkKW92WqmWmSmPaf9EgEkoG6n5FgMRHW4p9cD3pWq5kQ5q3dAabQjMgi6yrBc",
  "key14": "5mYVTBTxFSQfBgHWNRZwbXVx9M9B9quBQUrwDyB21TRgeqGRbizNVWE8WZfFsbZok3v9cmehcH5qkziPZa7mZ99T",
  "key15": "4aGcwEHvfzMHUjFxQQUEpZSRL96aWkbsYAhyEj1F8kwp8yNHrVJBN7o1w6EwRJfjyNP3ZZsuUJeDYDMJGoucZzra",
  "key16": "5Bc9T1oLnbKJs4xMAGhUnwCVPNMj8JdKRkLY5fPbVhwDNJrnUVe41c8VLcjAGLW4XynNUCHSwHf1rYmNMfojeUqn",
  "key17": "4jEdbk4ybvzhLjTKWAJ6g3AHZpCBvnGSwbvSgyfXcdJEXbojiYaRbPwZF6rGuCp47t8QqsbNVsPRmpyVk3nj1iQs",
  "key18": "2nBszGDZ4uy5WqmHfvY99tswhb1ZCsYxMd2u4reDGgHAzmmer1dTcwcavNhnyntaCYzH8yVSnJdYLF7FWvsAW2Lt",
  "key19": "2BF79o1QrQzrQB1Lrz5LDYWfE7BaMHpDRsUKLLFnTAU8tDF5ug51wzPq6b8aNBCcXFXPMkAkDn3JWbUc7BVqeyiK",
  "key20": "344Ek1G5qWQGeMBbDEXdDT9H31k2Prhnub9A1Kc9MMTKf5Rf6jjHb7ogVVuPPj3YY2xAGyc5nytLiY1a63AkFQwt",
  "key21": "4EfYZ1Y1CQzn2zm9GVFmBmYk4jVrGusozgaSjKhiqLtWyBXjrfXES5ZV179Qs7M8MHJxDTWJUtCZZhf5cPCJyEWL",
  "key22": "5kVCHyrEHPZXawM4GGWy1TUBhqBkbiArfe7MSoDDW7Rh44iF5KKKkUSeCbNzBdzxMRfCvbDY4Hic29jdryUNrCLY",
  "key23": "24oQTsJ5Pc3jekTdfhB1eLBEGFmHo7Y7R6PmhhySUzGFFAWgzUajEz8xDNPUfKkE6RdJkqdZo7ioLvDQWy7TioJz",
  "key24": "37Jgu9Zs6U8zFMpkvzexCRzKCaRzXY5jHbnWLnAkiJvwHJpxYcgycSCQJCtfaPkJr4uZU5W7FcWMcQkEf3UndRm5",
  "key25": "5vsoF6mV2W3K6jnvRE2g9yLF7xiXFnKoZ4DoDGgbHgQQ8ifpbSog5Q3yNv5rpWo6fx9adix21G51KQs6R3nyVz5j",
  "key26": "123PX6e6v4QvKxwR9LeonKQNZuU3Ge482SZfkePRmSNPhdsWNAs8cyRYemF987Bh5Ty3jR3d5ufDaFBb53sX4ubS",
  "key27": "ccLw3k8zFiZeL9LMmugAa3kkSw4VZKYpXF7VhNgRpK6VcPiYsdhVAA3VSJ5Sb7uB7n2cTJkUR7pHSSemmNFHpWv",
  "key28": "4PjA9dsLARux2wbP2KExYAmakEQyeXi8X7TRwR5B2nqAtNqdrcCp5XYYqowWQjj74W8KvYzHvw35JrPTtzc73VG",
  "key29": "7yVe7W1mJxPsQhSaaNVf8hEwxv5As32wv3faq7rEzn2x6SFHqoEw7QPJAVbG9ymfUJKWHZdhgFWnfQXWPX64pFS",
  "key30": "48ug9nBoJpdUcsigVzkd4E6qSdGk2qvf5H1dsxt4KLm9Z9GtPhXXeFwaqGjc6KTdp2TmhafccC23JzL1ek2iv6tX",
  "key31": "5gFXtKzv8UarRYFqqWLE5oLyTNXPAwqiAQn3xZZPovKu2U8Tj6JTTiRKnBDmmru6AmFdKa2CapYiPjKauX6uoYVk",
  "key32": "wNV6x4ZFfsEwG2ZXC1CtuNLpUrfzx6zjj7CgHcntmCdwV6gukDgEFEux9J8ZdAVrxA9RuBxVmoWNVkudy24uXJZ",
  "key33": "4CJhru2MZ5fFXpxaMzVH32GzvcuowFDkq76MRZnqbwRAE2ZphpLWvTMFQcrTrZqzjkudsg7N5P9EACq3CeaDzA8M",
  "key34": "2c1fdRMPmfGgtP5yErLobYbEgDrfSrDwrLShgngcewB3nWSzjb72xA4vPwUqexNNMhE7N899HZWtZgM6D8QHpZB6",
  "key35": "2rtUhLWpwSFs6dGHSgdMNP6GkaRhVVnxG4iEv5hcdmwKB1e91QcYwjgodRVMQ9n6oa1rUzuxzSeP5XD725ECUunV",
  "key36": "ve7BkD5EPYypKjWeMFnr2R9aoYHL9xjvFJPwNMTnyQpq9r9xEPwgNW6XKb2y3zTahG8fPm5qUQo2jKPD5udpTUD",
  "key37": "3dKXJekaDFiH7wGw6Q14B2wSQCxdmTVW5bEiXhNDqqNEtgDPkdZHmazvVgsyUnhSk1cZDdQuex78UiGH9pBoGHTt",
  "key38": "5WmzUQvzBgg6YbQAqfzk99MDj71SMgF3cuEQDvMt8pTMGeKtcSuNradQEnTwdKYhFxoUxh4xxDsDQ3ic3Qps9Uyq"
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
