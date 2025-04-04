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
    "2kcPNfzHRLSaL1vv5Cy6VMp354fsZRJTMPRsgYR3ryDbZYD7ESZFFtqWQ824eM3iY2vFhiFDtKZbG7pV5tSAkuzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJamqeXCJpeaAqzLjRnMEuMoqt52ouGmbCQ6fyfc8nXky4oQmDfxbYwjihMAcKmQ9oEvNJmnbL9hTbzked7757u",
  "key1": "3rz5seSR8cKWiDF97watuR8DtsF3aGcndujD9datuxyGF6rrHhD7BxVGyvVrXGB41npSXtiwPAvUz6hVhCTB64xk",
  "key2": "4u33wbc2wCz9itFRof6FTnL3qFF2QpwqXMahCm1DLHJE3C4DMjeATC5mVdyuirkoZ59RNy9JaZPvCsFsuCbM7jk7",
  "key3": "4p6XUBYnisFbQCqPN6MtggoNuoNkCgj9cc46WAgFHrJ2dRc9BppBaTK2ZkXzWQZJSYyuCCX2FXeD7bUEqSXmUgqj",
  "key4": "42VSyQbazJWTdZxiGnyQYQd4u4AmCdC5LyqhHbniaCqoDLcsouBQ9dd61KPwwbhJ6b58N2FaJDuAunJYZu3LbAe9",
  "key5": "454hjxFV9P1A7qMACpNdw1rAQusbwUYDCrVT2fcA7VBQftYoZxs4X9PGpdBMcD2aa2o4QTVDqw7rSS9orytiut3S",
  "key6": "3KZLYpPXMGYdT3rbrgMocwVTnbcrD2MqzFzyfPsjREdtMWYvM5YzCFPp2XjY4dAGgYak26wrqA1FEaJ5gRWhZ6yH",
  "key7": "4SvFiW7sk5GU2vRFLV65jSbMJy7ZDpznqYET3EPte5ADEuRseKBWttDquvHqTne7bHnaLAT8kJoLF4fkzHJv4JWv",
  "key8": "5eCA9fSwgcT6L4uxRY4tnnJNgGAAdnZPyyoSjv3scZQ7yafgHd3iaQWvkspZAYe9wgPByWCoQU4dT5yndumAVGu",
  "key9": "5fj4GLrGBKQ9nRbDgw111bowFUb6VT5y7fW8bhhJy7QRgYnKxJt6S5Hqw7o2RKyzCpojN7bHCeBH8QjxetBnnyEw",
  "key10": "5jnvJaNCFrF7Tk9vr7KHqApV2BNcTEA4VwWdF11uHJjJRKUSPRM52BCcaqQ5PvqAKFaWr6nYbRqXEpqGQmc1wPGV",
  "key11": "555Lh6jUEw6kAsaN61faYNK18hyac1G1xNmZnsCoCozj6nwXskLdnCpxiCyDFSS3GUCNRqHVTVoHVs3WanqPwrcr",
  "key12": "2HP2TwYR11aiQBMUHCDp5MTa7wPuK3hoCH6fm8bM3ahZSq5XATJ5QvCvNiZTuapPGVv6ahixePzzR3ihDihNNPV8",
  "key13": "4ps2AFQj3ef5bWpeLpVdU9Rb6ri5FjdG45KsZWieDAgtgjRTextLY5BEPdXQYagZ8LJfBaKZkZVgqpdzeh8XmdsQ",
  "key14": "2zHqGdZ34sHdc4b9zVUs2bCamvDKB3YPpTdv2SXhU6amsWEUDXsmWw651YWs8EtXYMh7Fi1qjkNMSxuyWG9tabrx",
  "key15": "2QWLkU3toYcUzgJ4qPpoWxDXXNctsFCyBLyxkNBG7J52m1ypGjBYdtyf1eUx653JaxMGJNMYR46avENCDWkBjk1U",
  "key16": "4LFMfxQkByfCMdoEEajZAfhA4pGV6CVE1dYAkVZvNn4puNmX71iLtnjHqm2KCupmbTzLaeRtwLhxhyjbyN6xnNeH",
  "key17": "3YTucbUB1izmuzUvCqmCZWZu97MqBPWVsubAb42orQbdY2ETKsHq9nPv88upGTsuSyZsS552MG2XyS34AtgZMmji",
  "key18": "3pjciohWaa8Z7mTjCk8ou4FrRPjKfuHDuRPLPnmvHRkm2z6oQ1Fm7H7m9BypSkPwXxvBcdWqqHiFfGGkvQN9XYtK",
  "key19": "4KAPp91kwtpQuTKUNFCVY8VHt4w5owXhZr368ktXgJ47ByDGSpmwSMJLKVGJkP4icRgvhmgKHSDBT1LYmSMnJzdr",
  "key20": "5NWTmAiauJidvsUdSfJqT8kUW2wZ4KFpYvWFkxLC3YCB6x2iU2qbsuDVGznt7XUJAwtsgiQmySeYrYxBSRJXpdi",
  "key21": "BD47CV2bAYeLn3bj5EdeiEAbDRDgT4Ca4Md96359cz7ZUNoP5oByMB5fVaTwJ7pLtXhqNyBDKWSENLc5YNEacqz",
  "key22": "cGzY8YN6BfPKV9xKHWYKfXSWthtWpBvt5GvvmAfoZYXzBz5uBc9Zbftn3QeFNgRv9XXBucv1oTLKu1C7U5MFECX",
  "key23": "2PKXTtzUjJH9PNsVbuXaGYnVK35iASXw8wKhehhHRnDwZD5iPhonv38gzVbfNPdgAvN7g4TD8tNVov41k88W6ekN",
  "key24": "27Af4cULgmuh7KNDmqN9saAeKRmAfLKSVCBUTusfEZYRkRXe8Qjn1QPvFQQEpgpBngQoX8sHW7SnQnYSWM52mCEb",
  "key25": "gqZGPyENBK434nn6RscP5Yaeoj6xM5kA4Lmu8zueUwdRoAirVV636dvGYHij29mtg7WubG5GrGRAddfMqw8Fjcd",
  "key26": "31t44ycNzcBtBfhJVgEEhZn2ukaVxx4p2kEgrZWTrPpwps89uyEWcnT7KNtLy3MQJCTc7iyV4n7zKc2PoAUUL3Tm",
  "key27": "3MAFZbQVbJ4ygSPjhBmHdSU6VfhY1tftkx18WR6S6boTBiS3fJcdDaVCKHXTdgeP2cS9EDPbprUj9PcejbsiMcJW",
  "key28": "4h9Ei9KwsjzaXXTVaa3moN8b4CZFpedg5Y5RpaFdRHLieB3iiqA7y63tSRfcCgkeJRj7wshurHcAWbsAwfWv8Hwi",
  "key29": "4jeaVYNNVFLrcnWDFZTKC8fYB7hDJKZ5dDV6rBC2HFpX8KPp4n3NVWLkTjyz8JHHnhCZX59cws9cTG1SCY8cS7Q1",
  "key30": "53fAaXy6K5Z7nfKonghVLKEd8Sb1xNhiGg7GRhV3LmWJCcXeHx7utk7pMoqe7NVcQ6anSZ38AUhkNeZGfv2H5ADB",
  "key31": "5xma6LbAKPcTcfk8wdqZ6jR8rb2XWHGJwFZVW9JR7y5v2rhvAoNqUEM1q3PskneKCxUYybj3FeavjfsH1GnzXAXF",
  "key32": "CL2q1RZsMV4iPnX5q3ELY9MardrFttnni37jizjUG8vraBwb6x3wc276dkaxfzBDaKNSPjL2Do8Uwg85AYk4K3M",
  "key33": "3TjLhG84uXd32EvL3Jr4T3To9EFXXBFnXTKCFqRrCHWnBgHCCecuGJExJvaiVwE4piQe9WDbuuBH7Fb57QFMb7Eo"
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
