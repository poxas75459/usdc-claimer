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
    "56eMGsBRr11cUtqY8RmfQtcB8DxujvaDpdr4ZiHz1w2Fn1LB1r8EywinJtgGxTB5iNoyx6UyokA7U1sBUg5CTadF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XckX29Uak7BHcPsGHnWDD5FKisyC186rBc5zoTFcZwKyLWZQxNjS6b1w3FLHxLhoEWd7xiYNjRphtUsp5ceHYH5",
  "key1": "2j3UvEMpwnUvYoeWx6nRZXKpSVK38yCXvkJTtdBzBTLPCgDT2y9jJYiP2HpLKS44kPBYkMTG9aUd6RLXSN5Wyke2",
  "key2": "2x47qEy9iCGmLe283zL5RVnuqUynbeHY22MJJuTEQVqP1Lj1VughX7kLCjFhCoQtdoLQNsGQekYo5SG1YunWDk6B",
  "key3": "213FQ6WGYKx2maHvJnL4FAvAH6iDP2chDnjVLf7qi7J4oRxybXRDVjqpHxQbgy6Uro6npGonCc7nF3DMeEKUT9ZX",
  "key4": "1Mm4k1ocrqtTRUzUv9rj2fECi8YyRv2Y66M8psskRaGjQBVqJckd6upFV2FNRW4B6avLvVRbtFgNqeQ7FBNNu2o",
  "key5": "jW8tkNFsMS3ocbxtwoykL2zapwe2Fnno7pLkNduw3XAuRC8Es5wpwXmrqZcnnwhPVfuYYRf7CtvapX1pZKj52bi",
  "key6": "5JR4BSXCmpqqvraZgpAweowv526trN8QXV3cPCQZ1n7u84qCYSkZTd7m7pgWvvcwNDdotA2fNCvK9mbrLBHcz5ba",
  "key7": "5MPjeBADx6xFUi2zHnrddv793xQRhVV17U3S25GvFXxUMjBrRbBhZyjXnFLEp3h7rxjhyp5xYSQSoMdCGkCeZ652",
  "key8": "qvvD7HNXmptHRWUXka2aqfZFJoi1FaBmbtknAh6ZLg2mLxT1X4ka6njSoGTyDEWwy8oAcQZJt4bhy1uxypArGt6",
  "key9": "3yAY9pvASy2gApGovann1brWsbUU6JJHVizgefnH324U4icofXoY98ED5nwnTVRWe8BDBpRmP2VfwF56boq9UqPU",
  "key10": "2ofWxopreuR8DLa9GNyDFaVy1UgEPktpTXVooSv5BE76ESmrEtRfEYJzPePUWMzmn2FGdktXxrkEc8vvnpzkwWUH",
  "key11": "55MrwoGpQCvdCkhMxrBBR8yDxTpvrtsLPBkyZeuyh9Cf4dNBXYKnrvKUczJgDd8Za3nFpq7ENRCsv9rQBKLx1uGJ",
  "key12": "37mUagG9bbZweEUTGj32gCH1GpBa2qKNvz95zj7hENZo3bqmHnTejGiu84sfcGaYKqsLkvHzNBXmgLgPPcQgGR2U",
  "key13": "3e5JGR4YJaFdYyBJKyZB4qrSt32SGQu8tt2aeyMAdRTQUQcdF97y1YmKF8Ny5MNvNSsLUozA3sNf5ky6FRxoohpW",
  "key14": "deHwKQojmo8X3qR6acKD5q3oTkBVPuai9Dy69K6SAWZpT2B7p7L6oq5MuozEJ3TV4o8pJ82WjzisCHH9vwii4gJ",
  "key15": "3hsYYT6JjXT3udbR8hx1AA3dY6WKtcAeRHtAfbCYAFrvGFTrVT2cYua9g5xdyjhy2YayEg2dvyGqAf7zfoKRjioE",
  "key16": "zADUCCAZJfyqDVM197N3Y7vefp4z4tu37BprcRDD7gPUgXzcULcNVSk4SafQyEThQEU7mkrDeTkkZRNGQwSGbaR",
  "key17": "2wQjzgtRtbYNuaVwqxseA6ejpfyjGTMQAzB6RquVRBZn8xer59wDW8BykjqAdX5XpS2n74Ro4fkVdXnghujX1kvd",
  "key18": "xmPcwYQ9yZf4ucPGHWaG7kNCkYHZ3uqFFgm87eTzDGbhKffZaZ3CALLvskm4943VrQq6bZr9C7Q5zEo7Q3arehg",
  "key19": "13Rsn51H1EeagKiUnNqFRfGN9L5iuQpv4h2VQJWFUmJuGP6AtFkJzmQ6f6mXSEPzE5pvU9U2xxu3a3ddbtmfZ9E",
  "key20": "45jkiafGa8U8izu2t5kkXf3qVhqjS7EGviSefwPKiNmMrHJhMWp5CpZryKZbuRqSCQi8GoG9U95kn6JXXUFBp3kD",
  "key21": "5nbVcdAjmTbKQh5Sny2FTWd3NpBU9CJJAiusKRbsnazRRZg7FyVxzNW68WZrzbuRVeLk5geAsYNtVmBB6Fa2E1HG",
  "key22": "5647WNahfoUQQCDHE9KyZj8bHLR894qPXRxftrtRU78grktXdbbcP1Jqwa5t2NX4w9ucvHJx8syoTUZ526J6PUzh",
  "key23": "5H52f1QzRuaArJK2LXGdj5xnu81HznXVdvt1NVg5Q4JpCaCWjxVSU2VMDnZzf2LswR9HU4CsuRL9uS1raJeroQ85",
  "key24": "ALanpsXJ9BYekgr4WwjczrN6Syt6shUCaZubAYj4Sb3iMnrfptBLwK35aJFAS8BZ14CfDLairgummG9k7nZtDz8",
  "key25": "2xpB8NRp8mDZPQWRa3ZhSq3Vr7SFZxe1872eaa9CgKM2JcQGmmY7eUAD2HqsBqRJfQ9issjFFJLWWcda6Qt2hA3C",
  "key26": "2U1ZWVD62Jxgn4iY3kSHbbeqwY4sGvm6GU8dZpcxhVrLqyDHSDNvF9wxQtXC7NctpeFbXDom4tHxGY7C9oftH6oz",
  "key27": "3G2n917uCGmfjqUaswvwjgFm1d7t8q6sUAmUsR4DAogAEmLB3qhkkjFZBqmbA2m5KYamm7pkKC8TXoyfgnbnhk4F",
  "key28": "3YuE2QiCQWRQpuiwRAkVc3gKQqs1YqBWJ8PvWEhUbmNjB8dEZobC227tvni2SDAMHegwqtAtHStgnPuHQNZ6xx4R",
  "key29": "3GPUxL4PpLv3C93eXbk5983LXWTB9eCP8JBeqkB2paDmQzgVE34h6Wg5N7LLmQZXBcVBEwu6djqTChH6GvHQCsFd",
  "key30": "2Jd2oVsHWCnmhvbM4dyV5cNxtPcfU5QJA4TX9Dy3gEtBiUz3mdgSDePuNqSJr2r9aH3jgyutiyF4NiTusLRsukUH",
  "key31": "5LhCkZvuTXTtcvR5GsiC21Fq26kfWPFTZey2xCvxGiifYDeUUpWzpSLPFCa28Dx8MJSMxwwBKaiS8dD2SS3RR2W1",
  "key32": "52Dj8ApNePNZYXwJkvQbFbHtebRo6SXomtkkrbNcsekCpwSE4oDaL349WsdWdxWoL7ZtC2SkjaMD7924UBxJgqgq",
  "key33": "V7ixeC9D8n8A2VrVTDha7LrQzXygn9fDx3CGkdUPRfwczrXcaKeLND24UA6QswaMXLYw7oMfZvYwTBsGp6iKKbj",
  "key34": "53r39nXzBvQ1AEAJv2zK8NzhAbuTBumuSzA29puYbiRtFhHtm8fZKGZ8HrKT5L14HMcwe5x8U9hRM7VTJJNC8HcP"
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
