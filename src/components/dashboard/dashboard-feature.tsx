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
    "5o7q1G4WWQxmFShdQ1QmtycuckSQNA3AmCBGAdGNUBwEYjbv9Z8JaBLo7ZrhnHdchUV46cgpRu9TPJNAMXtRv1P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396tWN98CVVidBNCVGPqJY35igDCxbVRgYAxGgrvNLCtWiFPza7PXa2Pbtzt3VwHnWnK8bmEDUmKX5n11vf9FqYG",
  "key1": "4hqMoXtUBQTCNfh6CYmLUzTYx523rENVmqaQi1VZJ6MiEW61L9PZCqZUM3zgBaSuWedVAdTUaZMsYNHeyxs91KLy",
  "key2": "4rSfZYXrmYCg6e8fAY9H3gghuh2xfv4aj9J4c2qBs6qaGKwukEfEAGNefRTuzYu1uznJKvgB8qcTdxnFfStNmkg1",
  "key3": "475zpM59o9E4XWTdkiXh7hhydew7JdESb1bknUqSuvMHhDxMadXL61MUScj6fDopo6utYUNW1E4Ymd3dh1q8eodt",
  "key4": "27r9wpPS3J8kX8pefFePbdYd8SVwauEUwgHWtTNoCTyUfuvaRJSuynptjFfjdRXV5MfofdZY4pG3eKCiTsxqRCe3",
  "key5": "2K6dQnmPNK2YbtabGgV8bPJbxpQZP9kanCRyJMoTfKCMo4NpM3hhY5VHjFtqN1MXaGpcZjVrTvygKhJpRZ2PS5V3",
  "key6": "3cEugxN1tEkMx3fUkYAs79noyXRBUUC5KEBrmUTH5Njzib5hdCRtH5AHxRnCzdK4NNsBrD6c8zCHxcrNZxu3rmzq",
  "key7": "2fw3LqzRcqqzUsJntm8jKfXsfmQpe7iPDnNivgiT5sFF7UqJQPDZnQ3ufAweEzxekeVeEzJ9Yoxw86HQu2vdjPTB",
  "key8": "2ezsZnFpZQaP4UBrtYAMLLNRpXtWhGY8P7wYjC9Vu9GovWc2UxpuLUG14bAgj4tngty1Hpk8bJCc4Mq63QuuvGi7",
  "key9": "Voqbxk2BQNTj1bcjetU1xXmUGZzuGoexTn2s7mtoYJzAmWVV356QC22tXGCVYXxhsLa8FvodHS5zxuSABNUXZ54",
  "key10": "3K3o9wU8iCpyw94PxZ8cg5W2Uvm3NQJp8TYN49i8F42sTH9HtMBwdKcb3MzwCreXTtE3Fj8dVBGTWuWFfoJ1FTQh",
  "key11": "3PQE5opVx4bd2XyW9qQ7qjx6bQgT8n5fuSsrcqsdvBQc2PRksuimajAQ3odbNBHnTW55TqVgniZC3W2984x4nrbj",
  "key12": "BzgnrNCN3hnLtUDQ8UejNgquGZSDp8An4XEgTWHatnbi4GU6FRujFTo3meaaPAeoKAvc8Sdcr331EnNkcGDty5c",
  "key13": "444ypHunjqJgPcEcJ9sdPyM6w8RpeBACtV4H4PpWQg3XWgp7irKB3fwX87b9hoW957vVL1zCAhaMzWLect8S1C94",
  "key14": "cq1E38PPJ4p4MpKyGNRMLDnDbiVna3TCMLQCKydasK4rdjwamiRyiwccJgoiscFk1LeXENejbt68CokapfF1P4q",
  "key15": "3r1ih7PTE5bcKabXKxob5Y5Xppb51L9ZsdwRfvGfCEL8SjcchsRoWJJqTSJQ8ohB2kYLrG5ao6qedrESZjcT15h",
  "key16": "5SXjyybCMoCAtriXhfrAA68m5BEEmrGcGSKPo2i67hcqukCSfNUhZAsqF2nj9ThTbNMBdPrfL9TvDTjBzrVAbD2k",
  "key17": "46aNauZBrdbF5PZq8BCxnN4vceY9TN4Z1at7FALDNj9NGPFyqTDH9FTBHY6GPEa3nSDxZMLYpsgZQkwaNyryrvFw",
  "key18": "5LZWN3HXRzUWp6LhV7t87VGSJBke4FbNxWfW77aWdkXCJE1xDKpxet4iFWxh6uR9pCEMBnAnHJ2i3q67BiaQsN3b",
  "key19": "3RrzNz3ME5TanWNEf3tv3qB3K1NrrCtgCm98aPWqPy6tCg3G6ELRirEaZsNGhLQSzM3xTfmMkTMpGhgrHX2qWqhu",
  "key20": "62nfbwKMV6JG9zF5XQ6cSQ8jVMUuyvu77RVKUy5h8CkA2iU9Gr94GKxdgvbFeBD7vNMDxP8YCeVoqwfxj4WgDQai",
  "key21": "EUUuwAaePhNUWxeQ6QeU3RsbKdTvSVEYr1SSey1eP33yHVnbWeq3uMB8UYAyNCnW2KCdoxt35E8HwTbz7qqmGQa",
  "key22": "2DG7oCVXqrWxynfc3TpPpySdCiiDkyViMiZ5BnLo2EG2YLNkq4ZnSYv31Qz2cgmNEX5og8xUYh8CqLLMxt2uyqxW",
  "key23": "3GvX3hBCx9V2mY5U5FDdEYMRPz3CxrPqhXtgLU4iNkr5QszMfiFmGrJDUUAd47pm2VssRjPb2sPd672aaNaBi5pk",
  "key24": "5LKhsYfX212LfiAECUn28NUyjqdGpobGkFKQnP8TYxu2NzigV8aYF4F4unpnjB7SnXkfpPVv7yLTZFT36LQtHBy7",
  "key25": "55jDuu1GFTQZ4oXjxmo5XJ1tdE2cuBbDbY2zSTPtgLJCixzUEi4vpsEtr3RkHDSnm37auYtPwVgzEJiAhrLL85M2",
  "key26": "5CWMvTcMtYEomjXW2xafdEqyXm8xvm6faCfKVHHEDSfgc1ypyweiftHYkx27ekKKo9Y593bhZKM2JajMtvEAJzZC",
  "key27": "5ff18Z2TbPwxrCViKUjF9VYHnC7HoWav9JjwXXRZMVDkP1jC7tjJMF9rScFsVKjdhn48dAbCuVVKzYhWV6pwzuqz",
  "key28": "qvrdpadT4NJ3pkc7cM2VKurLcP9HmEbK6FiaiaKkQFZ3ijJiJb3zLQr1muukjDBBegNjHjZ96GB9Nq9wXBrQDyt",
  "key29": "AUpTkDfkEJqiyUP5K1916s9L73ffJfZRwpHARrR6UCLgTpVuktALDWeeDtMg6TiLqgwJcrSENsB3bghpKHCBLt8",
  "key30": "3aibvcdUCcvYQc15fQsg3kTtNJbUzUomrfaphKzxte7YkfA4BfVJAZpj7gBSPPN8dVUqpcjKD8ZaqtrwHvgTMwCL",
  "key31": "47TRS2JRFQRVdggEYwxCqtet9aHzkyA3savZcJg4xsP9dk48wdKmfRQPiGWCbdLznsr7CxsAEfHtwUwxVJcPQPez",
  "key32": "2VakAb6m1YqctQA3Eo3UT2Rexv16TsrGXvc22j24Tb5MDtUiUmPr22gKKExP4bjydnw5BbZbTrCKk1PMJJKoUEbJ",
  "key33": "5MqtPhFewrVLhX6286746bpMizyc68EjpF1pStVnqjUdUiFnCQqS1BSe6SJYKiySFMC6YMWKWHLLEpxRR65z4Qo9",
  "key34": "MvYKgbY3PtvZvqfWkzPBRPdLM4Bd6SxCYebbJ3t7AMVmtFcm7PG2FsHyWz4FXWfyLoK1cet4bL97T5Cb7oyi5Qy",
  "key35": "fdsdG8CxiVaU5zpZaSiQdrDMY9nVYNVPVy63Wedsx1Z6HemejUmYNPAvHtQEsyqNZDhzVCoig6o7PWF488DfC65",
  "key36": "22iwdiuX1UN9BZRCi2ZxG8Nmif32EidtkCy4Xzugho4A438gBP6ER4Rrka5jYKa37w1oHJ2Ya6cvdXeD5RyP6Bsy",
  "key37": "KbpJDBUjCVHyKHpqKx9fPwLm2dzHFaXuUcDGNLJm71hGYhiR2G9PMbiTGhSMkWx91b68hG91VXeaQYyBvyZ4vVU",
  "key38": "3uku6MV5HgF7Sc2ctS7KAB9fG4xV1oUdkqQBXWgaB4vcBHtwh2iPSR7PoyZZyD7erQ7cC2eJMSYNG82SKg8Yx12e",
  "key39": "W2TLpcJnmnvSD4xc5D6whf2bn8pEgEytdr6AsrPv5LBuTG4QTevv4CCMycmGrfU9oBkFb4FKao4Vu18GSXBSfDV",
  "key40": "r3PnpncLvGdzsdGmfNPy867LnfguFRmu2FFXbCTrTU7PawfVPi448dS3e6SkDkotM9aGiVJetyhx2nMp4JjVzxZ",
  "key41": "2cHdphUH6uRmkikjLV1ce6RZY7bxVpWqBJp2GV9nkz9A2BFaQfVNWoWNFDba2UmuWDEVH1ydoEK5hLEC3rH5YwX3",
  "key42": "4nQ8AE8puQXHMDjh5m3oWdLBp4c6k9vdG3oVQte4ssYy92iZ4fJcKTtpTEn7LUziBwjEojT2Ea8Na8MJNYHCrbZA",
  "key43": "2weRmrp8RKqx3EpKzfVWvyppD1ohALdm4jTSSzYr6jU6dzCNTiu9EvGfKiM3cEjHCtv8bxViRBteFzyL2SJ6r75h",
  "key44": "2XjdQd1UCUbEP2JmazCpqcQcjPWHscab5DtbrnSCkKHwTdgksUzzdBjchT6jz21ihsDah6nTQ1YuPFhynbCAmYKs",
  "key45": "34bWDkjKVasoys3525keWESjVvA2a484PrmJW6n7hadJYYS95pfZjaxdD48HQE6dmhVYqBGvZkwvYoPCeRgTycVS",
  "key46": "5gHBtqyHMPgS4kJdnHqv2YHSJLcU9h2U5RHCRXbuvyR6ExMM69i8dSZER72zekBUE3EUXeybD6BpLQgyX8Pd8dwa",
  "key47": "4S2WtiBYWG5ngsVBctAfsRiwnitveNmJk9qKf3sRuWhrG7yM3qqModeyFH6s3SDPSk6kQgGuvbZsZzPothK1ZxtQ",
  "key48": "RfyEJGWNvhkC8neYps46o7r5qcSV4dBtuyJ3NnhsoMDVJwC1Lnxrpwhppu3nG7VALeGofHnutuYpigFo4dBFi2S"
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
