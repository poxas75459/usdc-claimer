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
    "2S65Ysp4qcLtKwv98zXsybbGCWfc6cjP8oaPjb1wgQokpip6pQRQ7drfxdshwQATebrPprKg7k2pBmeMadUCcNUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BSVivcSjsPZL77dZ2PgDFmbrC2EjgLCsJDFZtBqd9ng1AvciWEhGD4bYpkYpnG6AwfWA2J4THgK4aXTmWjo3AuE",
  "key1": "3nCbVexVY7ryXXXHLPesodA6GQNSArENUAYebH6hkRiSFDnfNZrzBt9CpbAWLpR6sE4Cj7enSPRewbfidPdseQvJ",
  "key2": "4vjGdANfZtPDb5qdC4EahapRrfAgV28Jf6rs8frJ3kyXnfSv5L4818CuZpKTzCmBNtyiUyuCnKQNHnHzMdDuvdRz",
  "key3": "3yjbW5TKg3tm4t7j4W1PcVTXG8pjd4r22cA8WNSnYiKrE3bA8wbzVZw6k22fgUSSvrx1TaqGXzNbCAPmwQVrNvdn",
  "key4": "2EatmaeuFkeZQRa7PbQJWapa5y2GPmTnotzaspijWeV21zkMtXfv66DdEFu9tY5WjBosHPhkfLtMXoEeuzZDLt35",
  "key5": "3yfZoXUiT9skRwKvo66Ya4LjQ4f7pmv3dNMp1K5Uxmt2MVSKNS9Zu8MBtRtMbgxN5pLXnHp3wHgsSFee2LwSCFmS",
  "key6": "5u2aLkKzhqY4U8WkvMpNFt1PyS2FGjFqZ7MugTen7zzkd2GXkFndURPsiDt8qSfMu739yQUQomVUU1SHbdXAHjN1",
  "key7": "4YXQ1iBSesYj8EXSSiuhuLbBk3YcSLRb5vc4Qu6Ak2h3CNLFuEn9D9sMbueTjnoXgTjv7itQNy2811H5tWURuQ2W",
  "key8": "2q74A7faEa3rZaWCuYaVCaP9Ra7yX4qFuvZgd6yk6HbYxCPVyMjYBsvx2GyyjCiLhCaYB7QKZ7boRzyePNP1AtFW",
  "key9": "3h3hrx4ZFpxhRsu1kimvCVu6jaSmtZWPFNwknnb2Dr8nuZbosq8VbayqYwvnLrcq6sjrcEDscRAWrXXaP7i1tuRS",
  "key10": "Ay9HGcRaL5QfvH2RAXqFhv9WSj2eLHtd5bp1g5cmDm3Wt8bKDs2cC1m427TcrMChM51fQUufYa4c1bR1LHyTyyQ",
  "key11": "2jDh3C2t7WrTED856QN7VtEvLuC2hMaixkxaazjJsuTK5hnv6yaprF2jzchtjN3tZij9L6xAkimgHiSvAiMBW56g",
  "key12": "4ATEijsXBnCKekdHdDQyumJziX5ePYPMu8HkvHQny3GAMvFYG8JkZp1djK7JeY6EhfJtCZAbkPSTqfuezDYddY2L",
  "key13": "4DBMyXdLKkgPTho5MsLvsa5J5zkm7JeaqhvYJee1ah8nJyp8chun4apJ17tEeXfFCN93V3PNQyV1cdRY4ZuW9HxN",
  "key14": "5zEzJCrzKPUo7bhMn44jWR8m4LrKdmJiTsdpLwvgqNJAAX7KTgz2RbKB2bABEZ5HAx2tDrps1omg6LJZXnaCuVQt",
  "key15": "4ktqn3Dk6CDkNNYW6iF8RewdXrMCb5xukcZo3wD6kVCr788PQPXHqqrxChek7S56c6rndADx9f6gmzxPmKj3Mae2",
  "key16": "2sxVfTtB9n9GGsznwaJTXmnSX8R5BJRGzht8ZBQzrKDft2nRVTC6J7w6Fim8LhNW1YW8uNBtK3Txy9FS5BgcuYcF",
  "key17": "gNqnRMRq4M62uz833pmrJNh4htLP7mXwRz8RQcgraGPVxnkXscDMEVyvwha3KscPFy2f2FHjpodomWqr6PtieU1",
  "key18": "5qTqSY6EX7gX5DQF43pexERCS7CKwLUfr7hzLi5vJCAPfQwFVMJ9axgubjcBZHzQZWPUASH2CdcZKJRNuwL3AhKp",
  "key19": "3gVN5rzPMsHr8zrrLdv7hvGhKjXBXweR6Ga9911QcVBDdR5Mt2ajD8TAdBacxK6F3NK9ADdiUqx1CME5bbTt8qUK",
  "key20": "2SQPfwvqEsbcMSfeS5SYH3Dp6jtwSpEwikLEi5F7xnDaqD8S3hDraMknhxM7NnZ4DfT1wBNYbXGhejYKYsyvNcT9",
  "key21": "67m1VTTzau2k2C7BHnDLRV7W5xuGpMQ4adhJ67MbBA3x2SYVQ6HbNAXYhyvKyeaN2uM8M2KvGZT2HDiwcBBj6eB9",
  "key22": "3EAFD8tpuQRK6x8Fa2d6mSbL6A1ooeUHE4BzhwdpuC2QY8V7eYgAWAhcmdb5fvJc9Weq2i6PwF4ZW4kA6pFcbLgr",
  "key23": "3kh4cMQBDoQgdshEtzArCpuA1Lkaq7jwff27v5EBMTpcBchM7k6bLDJwuWsU3vntHm9HMHTGKNQMA1FVvFJRLhAS",
  "key24": "2TYMu3QCJMLWmC2hPyRt2eCjeD3a9athNNbhvB2rTHJYGmLWWj8P7M5cy3FgBHAMhEChZWBP85MKwCK9P5491Z3E",
  "key25": "2CojXxFZHEC2ghWUyQmX2CHTnG8o3dHLzpi8S9x2m8ycG64gTYQYvaYF1W2hB3hd8E7z55iVQ8Mk5pcW9kFzPqw7",
  "key26": "5tYEykuzBcyfnJv3MS5P3SeJfy8NkfYmyafwwtNfUEaqzGtvdppDqH6FHiWYi8dKrW8YQiyTTwQqutb1M6DMYmfx",
  "key27": "2rvcVHLB2gKHBqCGJwPkXWoc2YReuk7Qhh7o8tNME2iU5W8umLr1JcJ69dzJNHY7qEFAxdXUJkfnmaAa8Vd3U2v1",
  "key28": "3oxyNkLnSE14hf8pTyh6iDCdCrQbxod2EYg1wLSGrZfmM2UiW1y7PXRgJPpSw71bf5ajzNkSxoiWCzPrida7pY2E",
  "key29": "2RFG5rrTg74mXECkcWEwhiszXgYe92bXyEn4F5yQ75MmEkix6x9WPdW4LLN2zC1cWtEtwcSDGbTTKRJk4bdi65td",
  "key30": "37DLuZ8c4xrWNR7wUQt935NNrd5AsNnfgYhQSaTktb8tsaf6YZBMegYL5uK7ApuYmnZo8jZbhMN7sJVM7QB5DxHG",
  "key31": "3ZGJEPKfRijbkgL2n2Ua2qeMYDkjZ3r54o7Ye4Mb71d7BnwxNBu1iokFAEokPaxjjWxJhkpptazEpYGZSn9fThDG",
  "key32": "5gBi5BLgp4oHaET3DDjZYsZWZNwhPmAB1sD4m6mVC4QQjetSP4KPb4z1XVct4aotRrxFZwM9zBKs1NGVi6wKjfog",
  "key33": "3smnkcTdTCPKChVZBfeVqsuzzsAgas9REAguExH2V7whwnYmLWhtXKVijjRDH6G4vTW5pKUUji4Aw9WKTibSrgZN",
  "key34": "2SesPBcEjnvdX1sKzc5SzdRm8ew9KNxYAfXR7biHy8Swn27eZ1jkF6WmxqpFfE6hTEAvFW441vRURXyG92QoUprL",
  "key35": "3u1pzD9EXXB28VxR21uXwTGDdaKKgNuek27ZFn5QUrXNiULyW55RL4ixTjq8BgqYESFN4jRbBELWqAQwt2xg6ubU",
  "key36": "caWT1za7TbB98Gtef1QMPP9joYaMiXn5QsgTviLeJyxUtxfo1gJp1UTZUgAV8GNvMmdP4iXFd6pbmhEUwi36qAF",
  "key37": "4kX3rzVnPntXxY6GeCP9iiUCQvcWyBmzMBMXoYJG796jaStLRAHPJhCtrwacYynUHEY67Gi4bKfCXkttZhgQJ3Es",
  "key38": "4y835pnpSGafpVXbPcfwNZahr6MVbMKLbWJAdhJWQ1jysyX4Egifn52hT6xk4s5Nf3cVFbUFvE1zWMumiVGoSR47",
  "key39": "3Kx8qCG5pKPW8wdKo9GooyCPQkjE7WsbWWUYdCSqh5KfrXXkPps4iwyvnSZAxaUHUdTrdXQimEuAcNbKVuAYR6Pk",
  "key40": "4yYBZcenCHBCfcYp7ifm4Zmsid45jVERDiNzpfKkWJQSqKcBffvP8uzX6So9qoeacRded8HD7vFNTSMUB5snemmY",
  "key41": "2NWivPhXVM7CMzq7j4Spb61TH5UVEnYa5BP76Pcdt3QPeurkXSjwjP8cmvDSow6q2w5HYZinDteEgGweCyqLgUk",
  "key42": "Lj4NCcb5YwzF9ginb3Bb25FrpaRVj1H45fxoE6uPUrTMJyPAS9y8DaBrr4bXs6XzLG74CsXSSdac8PeyvKNgdjK",
  "key43": "vtzmGyprgLc8c7zS2GG2MbxUebCkhtaH6rihhwsJPRHEA5pgtpnJT9Utnetfvw7W1HU46YZrA9sFMZh3hadjrxb",
  "key44": "54zuikGzpiEXS6j1T4SwS14XvUgBHQtto7ZZ6sq5E465jGmyx7XTTEr9vW3bZQNKo7214RzvfeCT423eLTrwjSdk"
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
