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
    "47DjZZyac5g785mPhMTb62NixJf7AxYfkWYFnPhBrwHChU8eb7iZ1QLNUmn44rzzHQpmoVD7WTBsMEhaefMiTotU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EoJPpRBns6vwG2X9MTaZvwzkcPN185Pgb5avRAt3dEUkbtK1PcjruBciAhNy16iFWMmXcwizC2YbdKYH5TrNxXw",
  "key1": "2RKLLLEAmx5b2zhmJP6R9whcR8FJyskYHJUSyxCvoeoUCDwKCZz8mwL46ovheo8gAAiCmsBJG5yX1YekiMUYSGec",
  "key2": "5NErXVphF7YB3Asgd57SXz4VtN2ppRbRR4eNvJzB6ts2q7pvC9TVQroRPApiEvCeR3QmmCvmSSFPMt25LtoRKsNZ",
  "key3": "23woYGb16cYm5rbNEr3ECwQRSyamgqRMEcJNcQGHHF5NAJGXWKCSCRKFoYr1rWeN9awDCY9VTvasEsgU4LDrjVXP",
  "key4": "3mYbChT3KccxxE4GLfmVPdLwGTvDSXLL38Zfx59K385ZZtbPKZS5EDyw5hie79cEJgdSYCnAPZn1NvnxfAbWTVxe",
  "key5": "2vv2qgb55uabuVbDirVtpmUYRjgo1Ks3PUHbfsU8zentu8nqg42cvexReLWvg6Dse46XAE8UjBFbKKcSKoKUSXgX",
  "key6": "3ngKU5EheyiXLzKZAieJ1pLCgxToPmvYf8SLNcZLRHS3tRtTbLP8TkNRoeHiFaNHrrJMmQrc4HxevT6hhFbVroqx",
  "key7": "fHkAnBMADjYovJC6AeqdkMtdVPJdsrikrjH4SP2e2y4QeZX15hUE7sTjj6HZMcHLnvjbfw8jU876ZyHkhHUC7jt",
  "key8": "3SpXaKaF4kiooMUkvFhaVm2rzvXrcZq3U7TJXcgZxxvmnkNw8FSjMYk8d26FKcVABwmehhscSe4twFmkEFasjTf6",
  "key9": "2x9bFogHag111XpTsdfvvtyEr5as7Cc6PikBBY1gbvi5v9uzxfe5YG4RP59qZwnqTPyWv1T178Eysgy4KAS5Vt2M",
  "key10": "3kmBs3GdVnSArR3GuXAW6KtMi8aXtQnkwf3GpahSPkSiawQXeb7AhU8Grnjt1opaYGc93eh5tf4rN19RYWtmAEuD",
  "key11": "FKhQQqgedNuV2vw2QNyWT4W8JQQogatNkJYUBCAZY1suivR7TCBcJDkQFsacHPtnMxQh1vyb9KCa5aHHUYHsn3F",
  "key12": "YJ51c6DFecvSatpmDExPpRFHaDHekuWToiE2qhW7W9xYQAU2TALmGSy9R8vJoYJEdD2vc8iRR83BJu4AckyKn3Y",
  "key13": "eRdaig1P7DJgtRiwtCdQSCh8MCrwoSLztqtaDwvSMCD1bYAejV44qvSjkWvkUT9SsuwGTyDBHYxU7pDcL7J1Z1E",
  "key14": "39LrzvouZR7XAcEm7C5YxeDZPGo8MuzGdwsU3MWVrYawm98rNqSEVqivrinc1817VNdv8rxCP7daiB9YyaXZu2kG",
  "key15": "2YbqNx2FAtfJwa8MNdC8R3gYGCzBxqEMNxGNvECWjmGveqY9eNpUYEyQRzDegyXUBg296xr3fgmQb44U77CmBeVo",
  "key16": "Q6YbL5zuBaPFDsHuqkXSUuLpuLkuWxwMsGCsNgqBuQzLmVJvrQCLRWhMG7rSryCrmxkUaGVrX98Fh1CKjeYKbtq",
  "key17": "3DajdHQRLFMEcNRrXbLygyX6eCi6KpAHwMFPFWNKV956Umx9CTueHjVzqABHt5rsRT7eg5iFXuqyzjHCGJcLorNA",
  "key18": "PnzJRpQeBWLC3ZXXhV6D9nsxDD4Y2VJK6tPjpLiGcpPa7PSCtftdaUAMqkk1E2F3vKjuhwUczvZ4MAw8FFxtzU6",
  "key19": "5yWAP3K9PKcHn9g367VZvv3vSoBjpUmjunz7S1kPV1uDWF3ZjoaN78EU9hy9U5SKjwmjWZpBC4RVXVgRy7xdcsxN",
  "key20": "KP8kLd2V9Zis8w1YYwQLxXTX8JtLoghDsqHE21RfSLRQYcsRdT9dC6usTfSmbmZyrf7DhpKLxxspcFo2Dm5riSm",
  "key21": "2wPY2h8182wbrSV57tDL6h7MfPyh2wNiF9Xp3hbYFY5iJDSo4ZZ719jpxjDRm4322xxtND7G8ezC6dMb1FQHSdeH",
  "key22": "3KJDS94GiARDwL7ecpFD6pY92p2PjkPBGa16gjcLkWtDuhAzz82i5mPUjMksLkqWaPv8Grqt6v3wT2rfzpoLQTEC",
  "key23": "5SqzKAzRpBcTJ1HkJfcAGFDFXrymWiWL3ewJtcrPiTK7fx5eXqnDE435PdnZpDXWkFuV1ZRJUJ8KcALZHHRcsheM",
  "key24": "35gAkN5AYc1SX8JYjUnBAvBo4wXya3dU8ywhJuEwfnvJD8MuJRL7pKzBWVNbBwxcKGDcNW5hBKDSiBHRq3adBUMp",
  "key25": "3tDRkrMZmc4tKa5jbDZGqkjJ2A8YRAshjcDpVL3dTMqFgojDtUJk6eFZtcwMt4yFa2ZwEVfsifV3AuuKuFufTfM8",
  "key26": "4B7be17VHAQEYrG1qm2ivGBAMErdUMRiUQBDpMs9MRTdMRMA9fHp24xkiDqQAA2YakDVsmiUUnq3pfpYbb6tukfZ",
  "key27": "tCVESWoP6o93AVsjm3iJf1B1Mg2HTLfycS1CpPKQfMc4MvFqM5TFkzWKTLti6YfRQAszft3FYiPLMbx9dLzZ6WY",
  "key28": "2WH9XJuTNQHr1NNRQQeJD3uy38HP7Qy2uHqYzwDKDCroWK7KGLQ3idVAHnSfjgJgePPnUbuETEWibQ1Xd5uZkmkv",
  "key29": "3RM6vAvR8152fgsBjTABVxSqzdWRG8mrM4CVh5mExaiUnCxggFLYJEMnW8qH3nfWgv78mx9585j81MmZ9K3igke2",
  "key30": "VeUor4Ygtj8tCiCVEZxUAy8zPacgah9b93FAaZwCaMd7FAQQ1rSNCe2xdnuRgm7Hjyi6oMUgME3fvga6A2Fbccv",
  "key31": "hknHCCQuCwHXUS5JDZj6ZX5zRbTdBPjCh5RW9d4hu91juDWDKpccP1f8b3zXpGJmTWw6HPz4CXigU4hnbHSQoh3",
  "key32": "3DX8WFdnDRm3AaiWiCEGNeHtipz1WQtnAKWrqh9BdR5AySawePf6igiy3aSmA96w9QYTwbsnMWUzPBCBZu8KjFVF",
  "key33": "4Hn8DHTwnxkCqoh1C4uK5Ufdgw9JoD8Mwm774nyWE1ZFqZMdipE77Cd91VFZxVF2TQW94DSs3tWncfuXJUbFGyvn",
  "key34": "3Y1Bobx6mEQTkGp9dBrzNQ19HeFZKDFPpE4xdp61pA8E4NoBbmnnT3vQMi6VCjUv8GEaCVJERb83YfaqmKCd4D9u",
  "key35": "3HuYZJCWejaSeGWQQh9mwMybzutf5vuPDvt581v2yowRoua7jRVYi6Yw6mxE7C8BpE4ttG6xAQUgBXMQVb795Kbm",
  "key36": "NapLiyRDRqSXjXHrtyEByndzdGeN45LUEuJuDbaD78HbjrXYvUxxUQxq7mbgiHyXEtobzxLUUKcKRtThRJUSPpg",
  "key37": "4CQR4VgJf1DbWiVa3PZJJL2TQ4PJBZVfJqpFrMyiy8rZNt8xhuLtszq6uQyXP44zSZ26yKDPzqj63HH2Ez84uAX",
  "key38": "2rK8NZGMkZiPyE2wQ1r1zwCXxSDm3JaFKP47j4Crma5dypNCoxkQoxs9LR1FVmSfycoTZnrFX4S7AXaGruMFSEbG",
  "key39": "eJhQ1LNZQJHj5BTGcWKXaJAx9A7SZaGSdqfSwGJLP1PHcRKX7C393rZ2zs8RGu94feUXQMHYqW3M3u5SPx6q3gR",
  "key40": "3BMx9NpBEj7TEeuG7Dwipryvj1XkdFH3ZRrUUR97c734wJURVW86Q8TpQjn1Ua7GzaVitwjDEew4ygwhk1RMBBpx",
  "key41": "2rPa2nq3BEAx6v8nWVTKqxofbSQzZxwBWB3YBkFMH8oq2NRoYM8566kSSVZYJyY6UBCd9PU8kASCzMWhy8PkR64T",
  "key42": "4RBtL8RZcU6euKbXdxfKmtupzxauCWWTxSp3rqEfct2asVUyq1jkvkREbPpSqqLK3BUz3Z847kU9smxZAfh347t8",
  "key43": "4HshBJ4k8TLbnX82VyFCZMiZiAztABTqbwwSpxQFrCp5qLhiTS7ag97kVw4Df6nWRHuthdeWBcujtpBaQRRNqidj"
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
