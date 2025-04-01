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
    "2Yu5XYqzTaefcuPzEH8VYxnPcw6sA8oSetysNYd6M33Us8GXTHNXaT1qnpaRxDhkkDCAo2h6NdBS4TmWf4MSdwiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5XNmadeztUnoPjfsniPUakhCm2nbtJrCFY7GrTvZBkfYa3xtgQaZzaTzgFTE56AVGir6g6a8gxWXJqGVqyktGF",
  "key1": "4euR1Pr351eXvZsisP8xdrfDp5dmmzb7HDKhMt7fheXFMDsaKvjct78ajxBQA9Q6ab5jKVXWby3n2qCb2XQYEmPZ",
  "key2": "2omKA67kXvCZiVrAmL5iEDonUgVjt3PoiCgopgjkewe4b9KZLGbnFEGmHtBkV8JCTGtYPqbCzeVbgJz1madFb9hh",
  "key3": "f6XTC8tTM4CB7WVDdywYYA7qfUKWoUEvmEVzzhwK9PTELA1GSFRfJ5UBL7GS6okekkVMe4twbFw6mEuJz7fg6m3",
  "key4": "2JvxCUWxTNn7KVyCsQuRodsdbZRABZsTVc2rbRteeqhNxggkcTxSZRu8wgjfinimA86xv9rDbrEG6hGAm4GXfXjk",
  "key5": "3SE52FSncJxh95Dv5F4kBYuPiJg5gqirMmBDdawbdaTfEmgC4L6YTNgRrrLvnft9Y5mrr9ZgaoFT7fq5L3YfxA9N",
  "key6": "5wRq3TLEECPPzQiYPcesbLLKKBWs3ZpdPpmVQ54SzZhKG112HvrAWnCkKmFBcuYKiz7ByfxjAiMfxJriCABK6cyS",
  "key7": "QrPkWPk6L7to3rmoaRpNkoMk5FNH7Yk8jKPeuJBhbAkbQXsJpag3d7hzPFcgfGrNVQgC2ARPJkNGMnWcx1AyhXS",
  "key8": "2Z5aKFQgmDgwskTvJMxCLKDFz4Quk1igvtPXmPMdvbPMeQ929iwXX3pz1y61C8hJhWyDbBhr1ZYYai2QgMndEoPV",
  "key9": "9uB4vHFjRLs2aJJjdehmsUeQA2SGZRT2ZzsFV2QMeMRf3Fbuq6CMoMsEyQZRGJsnFJ4UMgkDHdLu5VfmUvPyoxz",
  "key10": "5g8wxdoUxG4M46VGg55F3vNR2gzAvrihvSw1seJMjyrGippiNHjRNNd86JV1WSAimBLxguK2H286shPwE9H9CKjV",
  "key11": "45at1GS1NZ3wan4CBD7YmoA31F87XgLqYpWZuZLq6yomBwDrqjtd1iwfJzoUGGpbNEQu91egoH4oPpSZHwG5rK7K",
  "key12": "4J8eVQHVoBAbP9fNs1aSjJ3yofxvzNC8kq9uHcoNjm7GjDiWDehNJK3EVjV2aAxkbB6ptDgNZgH3Vj8kJuiXaYpF",
  "key13": "4bQAM1x3xfPjwek5atVhuPpGHFFtAHMKbgtpRCgfx5UUtrcdy44pD7j4ZXRyZzMXScNZZ5JVcjNaMrvP6Nduesct",
  "key14": "3j1AH9JcnUzxSFhKfMPACyiyKnu7CgwVc8FVT1R56gnaJhvqd6SGMoAAbvTUpsJ35Wxnc9zUh7DQeFoE2k92hmsZ",
  "key15": "5CnHn8MURjS9aSiL1uxE3waVWSv9EpX9UCEvnvBSNvkKP6mdBiYxsm3hudBTSLMfaCxkx2LygdoTWGWorjGY8nbG",
  "key16": "5ArFNeCdns9fymX1FTAnMCQSMyXQgVuKnCayiNFZCUWzddMhxjASEePKeEGJip4aVe4hzKZNy4Y9LFe1qfUMwtt1",
  "key17": "45X6PgJqQFTpHKw2hkwrEUnAxkHaTa111qJEtLBjTRGi1f16tRacqL4TY2dcCLJMbNjeE3WrDwCSNUQfwddea7on",
  "key18": "49k5YcZT8kk86UoNaQReHcUH8qF4YbVzfLmpLu4DgCBUypLEGCfaUfEtrMAEniHukoomx2aWfKqxPW5CimjEecgA",
  "key19": "FdT3mfq4no9oLKBsufSSEM5ECV6fehxojKCo7zWSLD8K48DqixTKDK6dC93C18391ZJRywpzeYW3C9TVS665uU3",
  "key20": "2hj7mo2mquYSg9yyPJwGRbGf6gpaVFPGJX3Xqd8GAnkAqiNuBMLRhiZ9pApihezj8bLVUMjzMpkiUFrRLasjQuzv",
  "key21": "3KfvRqQ3kvR3QchRJk5k6SbD7m3Xsav7yjM7fWMrVrDBifQTA7cTui7ZLe5X3D8yirbf4dNSpvUEkRqSviwWFGpg",
  "key22": "5PDqb14LRNt8R6TLxESpRDZ1uc3cWDWWR6pRc5GUy9tsszVPn55WaQYi5UUYsVGS9sz946SQ4oAKnaWGepSmoYUP",
  "key23": "4BLLwTNRYButZuaH2xzy4oHLe7LERsfztv7pupywKSzUwDj9omCaPxpmQBCwJv4n4x9BZyjPXBmkvwGjN2sa1XSd",
  "key24": "3Jw7ZL7QLdYmWwrgQd7FiXiEmJ4vQVtjWGWLRe7eBrJLjZTmys35VwftwCNGHaA18zBLGxNgAqjQzxgdp11d7KEK",
  "key25": "2jvWYNRkuJJMoqziuFRuLqb4yknfAnzCaTwXVQh1yAor7YUKuAt7X36KheeqrwP6TCqJbE4MzNmjUUVM9jt9WUuB",
  "key26": "3M4X75d1rb7SdQxnjkh629MExgbw3gtVTBnpY9SVmf3x9iJt5xsEkbvjBZz4kEXbyK4KtU2cyLWbVXZa1YrfnBYJ",
  "key27": "4aLNefmegc2cAuTsEe8zbMtv9dHsNDuot8ostiX51N4DDHUzn2K97MUnHDyaeDRPSURkXGkyfz465rqp8orftGkF",
  "key28": "4LXq2YRdPeHhjojAPAwy3r5C4uLpfoGrkLFvzy3NER1y5PAizagD5P8ct2yv2JhhmjhYvWkp7XUSqUubaRynWJpm",
  "key29": "2fFWzkTHWxNjBCpW2RVTcBt7WFJRudTcgRQKyNgXETDaFrZE76EAkmNnAMutWqf2tdQsXMojBSwmftn5yH24eBSo",
  "key30": "36uPFxUwDBatJcs9cRUZUU2ytRnenmaNgAfbASPghp4YL7aXuyk6z3PCtcqBADR1xLTTNeV9b8FBdARDH53LejrN",
  "key31": "2qSEJFEknn6rXsk3YyDLupgiB8FEALEhypXiw9nf4H5te1XbiZq6DevV2M1P1qc18hv4z4UWoJwJVoVXmKuG2Vku",
  "key32": "4CtodHFqmm7dNd1fcU46X1dvvvcvQgrGC7jjiKfa7rHznwZeEdu8V2gTh9XgGe3UaQ7VUqv5X9VZwiwhQeuKcJpV",
  "key33": "4jTonYk6xsu4gNxkeH5jctJpt97yYEthBWsP1n18o7bRr7JcMGNy7m7UU2f9QVXK2KLyMFFx6eRhs7AqA25cWbsc",
  "key34": "5FFZf4aEdcYiFrAbMCt8EBPvP5jnvaJg9b3LKsnfmxgisgXEu2cmog1KzAsovBcsq65Zt6L4omqeKhgtgf9FjfTK",
  "key35": "5YS4umNjf8q8icMU5yFyY8eaPLpAAP9GDLLJRYsxmLGySnpYXw7BoQncaNFRq1362Xu7Sgc4P7RSyRp5jjDh2Xxc",
  "key36": "4vWShhfb2SzKK5JXENRdA2Tyif9mirmo7iQcVGgAuy9imuPAbiiLNwmpV3v6x6K3JXwxTi3Vz3ekUDYgcjAK37nb",
  "key37": "k3aB76fMsR86H9rz3w19McGu4kpqHc1s5g3C3YCgYQWUBjYbLfg1iz4M5NtUYRERuGUcWDgWi7Rdd8M9v8UB8cA",
  "key38": "1Rza3qNQnH3ZSjfk5sKRYnV8cDUYn4AmqprZH353LSxUWfwru8cJEGpfqzp5KFaz1jvyVZ3wiAEU9agvbAz19Ye",
  "key39": "4sENLfa7EM6nLM29xWKSwKN6QmSLci6WRRoKW21oYpzUKffDKjo3fLuznhrNk3ku96d6q8PDXwXZcLmVEAAENJor",
  "key40": "zTSsPNGjjiaDTgV1omgXs1g2i8Fgg4bBh82D3wQQGkDtVSPLKrVeRnifVA88CreuBeJG2sN3Uk991T9mgaywdgo",
  "key41": "5SqFkpqAWtQgjXzpaPPovYd8xRLWD2mEjPk6KsSSbKKaaTR1NCocRmNRG4SUWkV4gNZZhSEBRJUBX7iTHebLDJUs",
  "key42": "UJ3Ns7z1TayrYtBMASU2HFqhmfyc7Xweo2zY1r879Y84oJWCNoLYgbet6MHivExmFqxVHTvsbARiG4Y7r3CgXXL",
  "key43": "48uiMETky6uDMBbxJHXptFpe7zfLmQC8hvxRsfy5721AgaBD4oW67WmfFSWFrRwA4jBp8ygs7Zbr1VKDbNAkbXCw",
  "key44": "5wT77kUzBHsa12y59ydKeTBj4qQdZmMTsjzZfz99CtrptwmQ23fpZqcDZKyCGU92JuAUBM5Q1ey2BGec7kDPfKgx",
  "key45": "2nLrVMrJTDjBUyAiVCSqbQ8mLTLTipznNKG4rZie9yJF23Wmyt76XAtyyvJvacfRhk9A8uUtSkNSAZugi6CSKUKg",
  "key46": "3cygNK27N9Ehy5wTKYFfxCYwzxf5VpJ74mqUpUZ1tTAyZr8QZbqVxRSeVcn4oXhUZuaq4m3KdHhZSG75EMAM4vZM",
  "key47": "63NeQH6wGK2yd1CPLGP1E5aVpWKYUgv2FzMjKErbGozdrGrmHMGfboXvdEFDfj63p1ZJ65GWkE8jGbqtvwdzksJx"
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
