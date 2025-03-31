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
    "5sjBYcnLtaRn7sXJajskHR7e111S7sgBLixLkdocSKK5DywNrNA9Z4c78eirdUkx7gNvxLeA1UK9su6suT6fXXoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sYf1oD5pifgf7DpBeCF7QgDzyaX79pyvTRYhqTA1SkVcCJnucvqaGW6Wt4aGkphh5g5tBVmkezgccKK8uGoPouo",
  "key1": "42jVGQc8ddVHgusvCR1X2SNMweso5P2eF6Em66YH6qJFUNwaxdsuPVFU3AWC5VgtU2LUeMZCKZTuS7Xfe57vBn7b",
  "key2": "2VS6Gv9L5VndhgCxhnF6ApLPGVvSDVbEqv2YsVqZttVhpXqFTQVpTrxix8w7J7iuXs2u6eFmmHNCUzMc6Rghj3kj",
  "key3": "5Ng79fJvLeDjeiDAXW3ye8EqYnDvKBzWRyq4QLpWF8FaixHYJakRspEeD9M4Tks1paYsTQ6FqL18aSy5jwVVo4SX",
  "key4": "5ayZbHFYBzw862RyDsePxLLSdkQzVprkUfL8L17NjmxALmAvq44wCm9DrKctdnUJhPNzanu9ffZQVdPEDGH8JdKN",
  "key5": "pBpAdUJjFwD89aD6gf94ugxGbbib2uCiN6E2nP5qTZURUn25fLAiGs9vhQRmpNkZpeepvE213rQthJozTXbVVfQ",
  "key6": "z1YuZ2TPAkbvF7kCATpE3bTgBB8UnZG6625rcpXf2zmwK756kkjrCNBvHcciEWZgcP62sPR5DDmcA8sDgzdV97N",
  "key7": "5ib67ynF4ySVdZku6Gs9L3iztzMvNQ9guE4PfH5pHgQvULuKNuZfBAMzog6EV6v4ayBiXZMGGtM5LXov2tWBfsNR",
  "key8": "3db54LYvhe5vGXmZgP5cyNKU3Q3KN6reGEpjkwXV4WsUyaHHE3XsorPhzegYP4ikDe59uYwCXoGbwFoo3CVRm8wX",
  "key9": "56Fc7yLAtQGbj8prbk4VcXFq8yTTbpvqQGh6rfuJbDaGiu41EZPsTDQ4GGPpNx5tyvnKMKJQZsSKXhGFAQJVr9Ua",
  "key10": "2LbiSCyXCCk3Y9BP1e7sTyVmCJJrKtovc8z6EUP7vawdLTUenRY9LwbArUf9dWLxkX1482xuVcodHUvvDDGFZQrY",
  "key11": "NKXri3NXFz4tdqf8Rx6cmJy4xszdbmztyzN2igUPC9rGY11zCH3sDPyrQVewGDnHoGchd9TFurkFNba5F8YEbK5",
  "key12": "4vMVuqtPCt2cmbeHZfDnzuM2CUqcJ9RWepWYXseEsxr9JLTYkMxouRVjZ3uQZh8P4SU9VE11BAuY8mu52HFVt6Dc",
  "key13": "3EjdzLKT7jebBLMLNoDVbtyKiKDVuGxcJPmEHEJRQB75Y5hthKKpn7qoqP6uHH8zfk8oFXrm9uaq7Zm4xeH4sZva",
  "key14": "5d7oWEfjkCuNBiKN6W8WytpDEKgtF28yHoztUVtn44QBrWhaGVzH78KNMAmXywZ87wwdU7UdhBCPpBicTCV5wMqe",
  "key15": "4rtRyqMa6nvwyVvpyyEurzM1fYfiDRrbCrAmQpgsJJ8EJZSMaPD94ZzVKUxYncACgTd6jcdTE1KFpfS4s6HoS9Cs",
  "key16": "3RbYYPevCp5ekZYQmz4BgEf2YtBVyAo8SVncHorguGSVzN55x5kf3RXyjYnAWVZYv5RicFE6jBCuExBakS313wjv",
  "key17": "SKHUXggzJ1sCA4PTzTabCKMX3E42mpman7CpU1ryKn2KHH8Yfi1tdjAF1ZsgVKaiuUcuPMEz8bc6Rh9d3KDqKeL",
  "key18": "yxUALmMwV16v3XyDsGuXUcXKQtvB2GAjTHkZoNEgN3fdj21tuBPAoKeY4E2VdwKyd2ChenWhHDCtXaY44ZTB7hX",
  "key19": "5dQbbczpV225RE84zB5SqHwhP7h7SXTLMT6t4xhd4iFhc6nBUhw5XPi5k4SbodFCNyBdBYnrxDukxaQLvm3QwhYr",
  "key20": "5RNDofubDK6cMGAY4omieUXPU8ipLyj5reMyRXSZ8Eo7foaz2WmvY9bjcFyGevxtx4DjqazDUZEZ4YsxYvRBL8FG",
  "key21": "4BT7ARZos8fTmLfBf1khUB61r26Fhaxa6iZguJr9rvk1sLLTFouqr4swDNQnCMriu1a3M4YoJaJCB7HHR7Sh8m6F",
  "key22": "pveZmC8cnj7UJm2Hure9ph84DETQaKgzny7Fvah9qiUbuA2gJtT5sQAJCAhRoJHjNcNV5jFgzBQ6JkxSLe7dofV",
  "key23": "NK74iN5ek8xvZPc9aiicvaRUfiCgbKSStLD9781TsVJKkgJZqE7LSDMFD8sYGnZKkJmbZoVgjJcf1UZbr9TAbBZ",
  "key24": "5YEG4cjuw3Km6vwqAsDMPreGf5C99XZcj7ZjSt1C8Yb1F9rvT54ypW4WoWNF27G72fJ5yTvemTsDgWdkTYvGf8Et",
  "key25": "48KeWoDinNGTndUKCBwKJFdNL6YsmnHckscSTLjJV53tRENt6HBoL4W92prd7XruzkKXkGkWkF4XgKhr2Sdtx9T6",
  "key26": "2NihdfNNuqhtGDPPke1Rx9ZMRPDrBaYB2QmrCamNo7oBTHTUhBtqTNVYjmY3v7jnfuV6PyAn7ALCXTiQPeYWUSy1",
  "key27": "66YE9AhKfntCXJEVNei3GXK99KkqYZTZy5ykWhVjvmFhYhZTMRdthU1eeTT5gcAuvnEyLQ8FCNYCMU6nU5VgAr9n",
  "key28": "5hqJe2m2skfa5PExDXFd9sDZhZoYHJ14vSmPxcz1DNMw7QvrXM2B2EAfsQMQESmyTFpsqZjBSPitDCMhiaWhzTr7",
  "key29": "4qojg5W1oczp1BY4s6tKdZMVBNLxtsci2K9WutyexpefCnsSh99SAjzDJTLdZ26RTA3rcRYLVZBoJDDNcgFzfWfe",
  "key30": "4iga7HGqAQb6TcYN9bXVWV8JvmeUSAwvhnE7PWURevcEYEoQFrGRH1Li1Pef5ZNxRaVF2sphLwFGgYWhpRHAW7LG",
  "key31": "4pJWy1VU6YgcyV7c81iqNRfQAomupZU2N8M8pE8YR6E3MSKyrFZGRLy3fMqts6EWsXVRFXwu84mDc9gXvSeHt1u3",
  "key32": "4mYXG7tSLQsBr49p63NRAMrwEiA22Bx5kUEg1hhdyyAA4LFwgTwDRPZaiuoSZPFcVcaDqH48eNsL5zYjJDp1G7UG",
  "key33": "4E3nQoQzsFFYXkNb6e1eEqaFiUStmFASFECKHi1ActV7Lx3hmLWdWkQQfTV8v4Tve3jM9EQc5J6A9Z9YPEwW5abr",
  "key34": "2T1GFFoY4Jcn8q8pYc5Xsu4RPMguQqsgctiLe2gkVcFa24gF1vAcKkFquAP7rsH7YUxtuCKu2VBKQXdjSNYpagib",
  "key35": "HaVVHNjguZHc8rUyXtd8UwRM28Hp2zyQwwyomAd1gN9ei1o6G9YufhwpkWPeunYtb3RHjGKbfhe737kSuRsyKFe",
  "key36": "bmAixbsUP8Asru2cjupktZkQcor3y8uNxeHfzYGg58vfwt7e7GA4knjNkvp2o4VFUBw3JHfoj5ob3Yte4sactSs",
  "key37": "3G6qVDttx1H5YoWACN4JohYpceJNFipSirfSCDzuudhRV4KX5NB8Y6saE9bQgiZmbVk7rV7kQ99zHW8YtVkmHaCf",
  "key38": "5ZBi4qcrWRDpyqa8qHJDZPheopvuUZgze3XmgPzn2CWiTMG8jM72GYftxbka7tAgBJwq49KGmRoCtWjo6mddGvPF",
  "key39": "G1rKJaVh8NPw8mAkADyeo7rjvG7fyzSrtfaKbi4fYx9ocqZw7pMNKWLj3QjMGbGJdruhq9YFRcqFHPutBdCCVvJ",
  "key40": "4ZikKafdwXxrwBLZrmnq8A1Xqxx5eRnFqyaiQEuh41fvfFoRNwY512n43KsLJic3uRLCUKonCKvGGBBRL7P4eESR",
  "key41": "3GFJ965AtjphC1aPQ7yyEpxX4P8y8U5bWdgbDhVLDo3DPpENjC5hU4pjb4EzwHLJe54N4b9VegSq6ruGxX7uqMkm",
  "key42": "LHmY9sTUBGJTo7UGyebZvYu9wCQibbcSdv5mFZHJ84sVKpjhmwwAUCTSyq9ESsR1UUWxKMiNxG3qqoUUh5JGGuo",
  "key43": "nuXbPxeyGhRXV1X2fFA1iMsXeY9ELp1gaiea2n13j1VvYhpDkxrkpLXiwCXFigazMkMZUGeY5sgJWyZtb3VYFzT",
  "key44": "HhiR95GpT1Hp46wVwVHxs3z99ojE6SLgJkhpHBRgbVVkjAw16iKpRrvFpW7F1dr7rxuyodd6JDHpCypa8hZMVfz",
  "key45": "65vsGi2NVegJXTRaJd2yFR3UfTPdqEudVGKYSMUNQZwa6kFGZbP3yriSsUFULGoR7xVCzdWM7WgoYw1JKqYw5Nce",
  "key46": "2qQZ1yUyb868fxoUmJqGhpc4pRPC135PsPmo677DbtauBtBNu3SLkHJEWJovUa4ibTxsddcvBLKTjbge5qzK6gJ8",
  "key47": "4L21U53CqvP9VgfnGJgfgpmhePkg9fzkk6BWqCdiPPoddwPTJR5ibN44NVLLzjV2Zpq5UrsqGjVU2y8bkbBcg2Ak",
  "key48": "56B24xotm7ujoMTNNE5Rdcr3TTBrsWd8Utdve4tYQ9hXwpU6ADNQf8aBdBJ4odmD4WTA1YMYAaFK3vrcr5qKS3Vz"
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
