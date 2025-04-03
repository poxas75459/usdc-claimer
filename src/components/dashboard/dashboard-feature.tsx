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
    "3CAvcSS3tWkxRq4jFbqxHsjHccanZ97gjtJ32nSJtHzvXC5ptqR6QLRSFpYotw1eHgrV37te6uxhFgd16ERuXjEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sbe3WJ7DqEpVATRnxBbGQtyqXRzPQHoen5bidSWgue5N9unamg5GenbemfZPTkNs2cTAj73WPaeQRD5gj2rRK1h",
  "key1": "2pavKz61V8oxYGdGAVNRebYhccwMQwd8skD6qRXFsbAWKwJz38s8HC1MWuJtTkJp6mBMuSpBPfz5Z7WFbB8q4sx8",
  "key2": "4jepvT4aP8vDN5a1g16J4yRQNLVVgDQW7WEDDbAQzLAFMDAffCH21kiih8YmsDG6YTKGJyqCEfdE7Ccm2wHvJH2j",
  "key3": "3TUjqQsKGBxWmonwRR5BNrgd7kPsqLXpwdUgby6BjJPqgq44ZjZAMhGsmNDsXERK7U57CuujkpNpVeERSG2NJUb5",
  "key4": "y6dwDN82PtZ3hWDDZDzzQkR8Spw1Qo8NdNpVkUxQ3q71DQXf8oY2Zt8RDh1FwdEFHBnoTRAdFeTJJBBmKYPjX2D",
  "key5": "5zbvb3fmrjaYKioXfpNM841FhN8cfphnwmzDBF3bcrGRqNN2nbh8SUvnqaepsekyeFZxY95AFrPJSohsMi9MXuGw",
  "key6": "Vba218kFJrGXusJ5EqZavUjJE4zQ9i1neT2wdfV5WNC84ZKvytjU5aEKz7dWz6wnCmhY36Rg921Pot7TfgrsLqj",
  "key7": "35H2NqsSsgQPa3G1FpX46CYsi3phfYanXieN4N7fuAZRF36kzbac6c5zcXzqkpH9FX6wtvPybxjhFkf6kjS92vmW",
  "key8": "2K2eLteND9nMsW3uhGDdbG3XL8ME3D7QNGJKBCWqhtqu65kSKMMQs54yEh9ZVGWQSS3nUW6Jgkwfjtb39Rygcpeu",
  "key9": "52vFoaTZxfU1sgY8iLHmKY2ipZfzEKtreerF1b8ZpJ12LSzWtJ9wsDyujwHdeR6z2yKGJJbWmU8WoNV6t1zehyCX",
  "key10": "52Ck4uu3kDEuWR9sASeQXAQQsUwsumHBsbJK1NLAhFC5q7V3hAsZLJDo79XLbQQXroopASfNxXYGGLVDdLTdA4zH",
  "key11": "2aV4MBAa14FjFrwBR6oZN6Xs7hGYe5K176EgUb47rmxCTd4JBwV1HataPGxLLsDmuDGLqesDy2WPKvd1g7GLVRzm",
  "key12": "49YiMzjwSZR3qfVNfmuJC11VZ5MqJsydzqDdbAqNhhZ769Ks3m8XCwjcXWdKpHRNrG59btYhcaMn9Xcn2VrQUYjA",
  "key13": "2eiSNMVuXKyBTHer5xdwtmacKZQp4R8qixhyT4rN9TfAGYBHaMRAE5B1fevN7r2JYRhQuZE9B9cWReFhUJwvNDWb",
  "key14": "5qxwjiXgQ8HbzjSr8ReUDQ6r31VzBpyGnuXLEKV83b51nEHEnRK8E3pj9AJrqLhXKQosXW9PyseYHAPVvY4uYzwK",
  "key15": "5xUqqFDZGnvjhPuC3mU7PqX19V2HwJ3s4LmRxXCf1J4FUHccEUXU2xw5BgeqkWdiiSFTUn27nGMRT9tFCnLjWrb9",
  "key16": "24U6nC6yvW5UNN6HF8MRhenVNS1ushxWty2JbTZNL1HPQ1goNsLZHU4VxdhWrK5A9zF9AMod1fUvw8MKgDT5YX8p",
  "key17": "2KGV3opQXApxkSnoJQ3SedVhno4zXaoU2EKsJZdQRo2EDHyhWnHzPuuCrpi6G8Q4VL7ghkTR6cXb2UrmVw9xNNaZ",
  "key18": "4URYaLQPf7gT5GxXfDg3zDy11noNeGRShBGMRTBCV8D6HP4CfBhTrFZKp3bkuCn2ZYVgSCNeMrxfucY1XXmnkuyV",
  "key19": "2TddTDjquTmXtKXEsqeCt9EM71ygiJg3gAkfgoW294E5p3StVB9rsjsKHEXHn1qqL2ULhd4ZSaKcLERhvVcgjhHL",
  "key20": "24woEsAg2DwYvaKsvMTeJvE94ANdjRj1hCT7UJtnSLwyuSoe2g57YKR2YcgFn8FtWQPxHvPqb6AQwPmwTu11Uz9Z",
  "key21": "2GEQU3g4qQumTbtEzi6EfjitCgjpRvEXfkgGxQqe42JuZW8tuj8tMzWyht4Y4vADvTMSRj44NSWo8g2wkpYte1kb",
  "key22": "24LTMSGANyL8ALg7U7owdF3tR25NyPCh2JB5uzokVGrp7B6hEc5T8VfykpJ1xDX2ySyy8kr81qNN9hmLg8vfXYpz",
  "key23": "BFr2SJQj9FbJ6TMjqu8LYfnUvemxqs8pGthcPaFZaMiW4a2vPExDF2KJCW7cPqPqASn769U651FXtcWdCD7EVqr",
  "key24": "2HiVuRa9Y148tv49j796Kn5L1mCSJV96so5kKXWUoKQtQZRnvnvdxAkLnjquzsLn4MiD5xoosagcm9rVwWMraYSJ",
  "key25": "3W7DLqwy33e3qNuRAiwsR4EebSgT6j5xFcqGff9XGu22cE8aKGN5GzBAo6Qk6AwCStm435Ab7mcSiwMowPHDXgVu",
  "key26": "aqjst4UJiVDjLfVAh9vejrdnSz931XvbPqrFqZ1LdmqFrhVao63GmFDyW7JxhbTwSU8qMac9sP692oWe1pWJt32",
  "key27": "4zVsvGrn25w6t48z6cSZjAwA68NzkmD7N6GyWeqjhPHfWyntFqjzAaJZhKje1VqNK4yinZKRau7NVEvHnvfGhhS2",
  "key28": "WhhRqVEp9ThpqdhgWZQD8xQ5DLc7kecj6sYP5FU6QdyzyWDe1bM73cgT6eDkbGPsqGQ629whtWtJpYWLLMMTJ44",
  "key29": "46KCHBSyKY6joRser3koEWpSP9zf81S9pHhiJRSs5NVX5Zek59hG4fvis4tFQz9R5YgyBV9oDCwKyVpsAcMeDfTs",
  "key30": "3QoKuAy58kVmRHY4hCWQaozV3TvZNmivJhm2KVtGqoLX3NvWRBfUCxYCDBB54p4mgNpSQKrr6eCQLaD2gxCUSmQ1",
  "key31": "5zfsFsDMFASnv8P365A7pyCzXJSoL651D4iyzjK9T2qh3Q6hrQAbmnBBe9JVMvL7bgd6EbWDzVP3SifYfRU1eqPG",
  "key32": "2WnLu4RNGcxdRW2TDAGyGMEtpYVP36zNSor3qBNXD7JAPDNbnHEjd3CrASPzKK6P88DCwmR5UA1NSruYkB3mRSsR",
  "key33": "CbGdmNETB6otpecAMe9GqQo5AVYYq8Qxw2xVT1o5zKwDqWz4eBAsF2NUCMdbe5aDuTXSZv9YmgToF9e3GfN7eEQ",
  "key34": "32QzU7ihcKoz3Y6vjVpFEjRgj6XoniYhAWo4z8vU4AX926K17N279usv1Kbnkd3ZqoG6Uxc29aA8Dtx6xk5Vbd7P",
  "key35": "2SF6Q4MkPnAkZJcCXJsGo2RMNVcSKbBBod6MJ5GSKxqeV4NpGFR9znAqx8eoEydJCjgWJVosGLn89919GJwAD3tk",
  "key36": "KjQtnNPP87nuZ12qoPGu8N5DyXt5xKYd1jWpEVDbw3mjPzLH1kpxQE9UnyT9MNRT67FEdYcASwTsP1EGjVzpjKL",
  "key37": "2im6163dUSRT5M9fn7Y27HnQqNHKFAGDfsECg4uqscSWgFE8rBp1mvvrKzaCMzQxXAdHMamvrAJTKEzFUvuMmp7n",
  "key38": "21fkwufkYLzjn9GpoHZnseJYJtYrmSS5YzPqvw7hVgyRhqYm6ZyQ99E3CrPgJeFoaWyQj7ezLAJeQXbekgYJxz6U",
  "key39": "5BBfoKncA9sUHhcXBE4kgDJ8N89k7qaGKMKVZKJvFiAYXxKKzHEGrYbgV6CXZ8JkLSkY9vmhpfUJNfp7UGx27Rut",
  "key40": "5X1ZQ3ff2XUXXniqbLdVQ6tNbUfE1sJfeceCJmF6jAR76Kv1F77uFmF1FDbtAH8KhaAe1dmmYGW4qwRitJNm63jU",
  "key41": "2XBArmxGZrrCH8KDoyBpZe1b8STbupWd6R36WWBvjfWG9HPukyQSA4T7PWuqpk4CTRVT7P23DVhaJkjAvMfTswEM",
  "key42": "5H5qNobMerYvRX7uPCVNKYvcejFZ5eY3vFBL9dbTvpXMHVZ4hdZLCV7wqcDcVTmbaSydweea2nCbpL3TfsRx6FbK",
  "key43": "4GQZZL3y8PagsMxxPNzCukzEa5M9p5NwXMdz67u1ManNkb787q3e9KXB4rCwHpitJ5ouGfmh26frcf8s6uNvoczy",
  "key44": "2TEUknAijcLe4Y4wJrc4BuoLfnaY2xJThcaXqe8DX2xHt1198W3QABpyWLoCRWCh3BeyYsVxeQx2VMbgwDiDXXeH",
  "key45": "5MnQ4HwJwX5p4Fkx5wEAwbVDjZ1ynTRdcfNPQew7RdWtw8uDCwCKmXqwANh49kGEU1v8ppmbMgPw4NQx7x5w4aFH",
  "key46": "3G5bTGsQ5cidpWqPiAopKPa1PZtvLprGGwpvktZ4Zrx9P3XJdU4AmXHNhwLiT92QAdqjjGWLiPpKjdZEHPLiwWaA",
  "key47": "3r3Hy35b6GxEPhNah1Vv6bkPrev1p5cnoDVG5nY6qRx9q1syYKmj3E4RbRFkJe3hkMBdjFYhCN8SepNnHuknG8cv",
  "key48": "4ayXYZvytCaPSvovXRbEePY2dkWZQhsT5Tq2bQgyfpe4W1ksuLcxdGUUcA4WGzwQzvbanwLhyRg867RvpxxbDJJ5",
  "key49": "2yj53JBx2pVPkqfvJ8Tnz2yQP11oDtJ5Eu4KXNT64o8GispUNAouce35UWsnLcSPqE2VXDxBRH3EVzbca5hNZvEG"
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
