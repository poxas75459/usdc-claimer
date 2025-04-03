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
    "38ErFrp8MU23EqkWoGUZq9NJBFZkbry5CMEsqsQjoXsAEaQLooMv6cyxj9y7izXxWL4K5T4Rz8hrjBNXMCv88WZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHvG5nQ9fBJUkNTG8iQDfr4yxn8jXynJeFn1t6cwyGiUR3Gshe6vQAsGQh43QcGcQPLrsbPkmGMojwVP63JA83G",
  "key1": "2n17MhZMSzZh2tyPAA6SMhjT91FsKxoHq62719qXV57KRy2X75cdcqp6YrpfUqQgwScjcvqmE1btw6xDEhTMbb5u",
  "key2": "2FispnpDMb5fvSaU7WnNVr2pCq9aozvw9srCLFnz3569Aze42cVzxPqRQtqdB6u12MG454L37QBsuBaxWbSFdnn",
  "key3": "3X7oWRPim1ijayfQ8WYf4zEiz7V1PtT8ykCxttKubYpVZqcwA9LN8cQF8EBZSBWriXDWsjWekKsbbpXND1BU6yzz",
  "key4": "12wuYk1NxT81muH3wesb6r1yDEANWiaE4XXg6vDgUjVz9e8ADmERgBgqJa1rkLptDTrt3m9tnsZtoUXKztsTgbj",
  "key5": "4jK75FbrksbQ6UDhGiU5eyqnEi7ZNgXETknaBQ6qZssQYVSHPcpB5UGqUFDJL5vWv4Bxu87vEubvj1LyzjvnQwpU",
  "key6": "3Qj2vLheBHqYGK9gQgkcsMCWt8daAR94jeibCuvwvrUC5Q38Ubd1TFBwsS4asLEJZYWxJ7EbzsmgwYsqpk9eZQX1",
  "key7": "2XijQbKt3fFs9YaCXC25W9Z1UvxW26wwQsw48QdjeFfXMP3WJ8dFv1aWo2A4W6p15cXyZ3oeDYAx7W7zZ3Yajgj9",
  "key8": "3rJrPmLJin2mNH8VzCA5pmeV5M85gEAzYFiJat7dmUiKcUqMA1UiRP8KVJkQHGynGUCdkMUmGdxXrPJqLWesXmG6",
  "key9": "3UXtge5BWT7qRpret1cvzHoFfErcPoxptGwXFZ7USyxZPsak5WrRDCeZZrVniX5ja54LWqK8oTP3mMf8jSMm8zm",
  "key10": "3Tg4DegwB3fU8zRsU2KUnWomQj2f2527UR5Ts3TPNdtG2dNn4ciatAZumquWVg9azCxRBpj5itbxAQhgycW9cRTn",
  "key11": "4mGWexv1gPWF7337JoLE8g8VBu9WUXZrdu2MWEmHpMySvqoBcGY5Q8baaxJJgLv7ho9z8YWTBwrwD3Gj5BqGrzRK",
  "key12": "54Sz32etSS6Zz7X2CHtzTXnm1wGyzkycVo1YUJMXbiqR2xsze4vwmToLq6MKKKGo9isoXBr5Gr7mhmE8NX7qtiNn",
  "key13": "4QngpzZ3fVQhREgEVDSeVrvBD31i24fJ2wBzF7J3QNAZXRwB8miW4GjtLVndKYVBrqHYfqLyunWKe9h8zkD37f3N",
  "key14": "PHn55Yn7Q7kJFPWX7H4My5EKve6Wcs1Q4CsoFGJVmBQDfD5Bpdc94VfAnx2TYZT9YCa98tmLLyMkpznYd6sfqSd",
  "key15": "3e7Jr7hjxw1MHwqQkgAb5NbrQ6NzBhsZGkkzgeUEJuSC9qHMtz8D4Q1bt5Xjey3qWaHT6twpGtwLm7QLLvqD7hB",
  "key16": "3HAQ9DfdpQZu8U63w91xqkqNCQwT7dFAVUL8BpvYoTWQQFCTXrSHkN2E1MSRKiMGQBNi19rcgXaGsn851EhZ86qL",
  "key17": "264Pcy2yt5AnNJUSZQzZ8iipAqpEepggDwRPuDfHwcSc1kFMqA7aPBAqqzQ3fykcp1s9ZRCMmnvKuSHquXcsi6jL",
  "key18": "48J2JLNpHz6osvAbogQWvcJpDgiLV1nwow9VWaokkcH38bEuctpcFszA1pM1rMYhXbQNfjLB1FaqV422HvrjRTER",
  "key19": "q6zggSR3exEHNskqX6ekNg4r83AWbAMR7WcgytKDS1f62bh7CKgxM9dpjM2oFLXcxD2ZDDBLPpETk2skv8KHw8n",
  "key20": "5V4sRbUy1icVKf95fcF2KkhUgiCCkTxCDrUMm6Cgdk7s1dWz1eRdg5NkshKKttUCM1YaHG7LP6sPePCbPa8X81F",
  "key21": "65LmzErpQtQFiX1drUJdbNJFnBwm3wzeRSqaVj5ZfmbtwKSoBgBfxXMfEFLtKTwiGzQT32afCoxjbLGuj8YJaH67",
  "key22": "3rRJVCdDrpM34nURiSbKELkXKNCv5rU4PLX2kxxJvPFVYhrJjGqG6CBR55hbMBdKnoBFzpwnMjPiXTEd7i6HQGt9",
  "key23": "3Ec4qVdpvtC9xu1fhcSPTsmjKn1J34mHam7o1XUAJDvhyH7Vy2VD6FxJGqSeFTkUW1RKyXsATeW3VvBvpzX3c8Zx",
  "key24": "3RxR8GB46e1uMWz6b3Xq9PNDvAfAR6gqgHvV6XeekbQf5Zx8hXC74PUbdKKj386an7SoQzTcGP4ybdnU4gtfXqDB",
  "key25": "2T5TkhLNVmhcyhBsrTZQjjyBtXdscN71aWEXyjV7THt6d3biej9YKdz5dDfWA59Y26deE6rL4h34jpQrFSBWWqF4",
  "key26": "28ZnD9Whr4UFg5DNZuwU51uoffnr7E8AadZHP4amNi7ct3jEZMx5Sxhk4JVBYmUxT4xHWdhrqA65SesrjzEPUpMh",
  "key27": "48aYK9z5kpyhBpXbKkhsio8zZCC3N2uXJaEEtEYu5foymx7f3mRoayrgeGzdBcWir2yTaKtWQDgTmCDdrfuaE4KU",
  "key28": "4ymUDW4v6MitpXkeoKde8FSU3yUqhWHW41vkkWEQxwAQk3HWiaxY8GNfZqGyh6r4aUs682uNtUqECbQV8A26dTas",
  "key29": "2FnMW38zYqcPDHtQXdHHco6Hk6E3QWaEC2FSZ5J4gWqEihhPhPRJebJuMB8AD79jkqRCnPnNxYpDzcGwAeoiwuyd",
  "key30": "42yV9zJpKEbH1M15Bk6h2oUGJJEU7kKekNfkuV1bQ8Y4pY6CexQHaUHt3HCgJX8RH6q5wSWgmrzTwkBKoQq51Jsc",
  "key31": "35tW4ywAHaRmNbB9BhWu5zqbwwUvH5h48YybWUU3Kmf1eMwUewMCk2HuFTvWcmFKoXZX4iQ9dudgJKum9yxxDmpJ",
  "key32": "3qooVq5TLsgMvYk5oQyfJmQk8Wz11WTpq2mF1kXn1wx4stTsDYuR8FNpwTDPwscdiXxykn9Q2JarVhRUm4qSDuTq",
  "key33": "66VnUcsL6N4K88aV1eSFTDi6zwCohzMK3ocr6gxxqZS5b1vc3rP93YKnMC9FA3B351nbyd1sMtxBiGatJ4pVDNmZ",
  "key34": "2B56RMDvSpxjvyd384DsBApq2Hss7FYdX8SCjQwyVr4fDakmzskfqBo9Do36BnUNpFMHQvG2DQj9TBj4KZu1XCi9",
  "key35": "45hmoxPsXgdHziwkBBzGSNWypMKNYPyPKU9eQhZoR3rGH1yH8Nixf71cZmcKd1WHgkyg31tSXGEWSVLygW6qudTc",
  "key36": "4T2shtBr8ifwXGxnERwViSiZCoMfzby6Z97U645EQqDeqPZsBRTqUVRkddc3X1k1iw49Ru8PcGvzYhHi7hX5WEfG",
  "key37": "61JqFpRaLLMZnLrst47FThUwJ1Z4r7Y5WDd2FsFPZABCRRgV2hRi5CsiBZ3PskxKXmoyLAFVLL9vxwiJubsuLu45",
  "key38": "3JNokVp1SwGJi86ZDy2FhXGyFiptWNqtXQX6aNhTgJghoTLLS1Mwex27mFV1bSr1nLuUpEUjGhxCDZ5uSwuC5Csy"
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
