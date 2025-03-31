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
    "s2wjKWZ5yZhwsNvKXjw4UYYKcAo4rEGgP9TTACRCXZUbieKZwczXFU8ixdEGm6PSTVbiwHakyTBimfeeF4iwuvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdqmhoVfy49KVcNXgfN5ems5gaw722prvpMRhiVXnzpfUYHTmCWzMLvDQsMj1EJn7gtrYdmCMQdE1BQhFAGjeaD",
  "key1": "4VtS6WE5FZMvzK8GqCyhjb2PVxga3nJgcJDumX7MoHqBYqpseHNRJxu5CTfveDg58Hr2sNLVNHrnt3ekBcUq6SoX",
  "key2": "3gg5aBJabA4xd1grTajCm1j3yZSDWP65PuowzD2A9AsCKHD3iHbZSSrezdHRndtKWhbHTCftn6FAuEAKKsmmMCRB",
  "key3": "3KgmkfFUQ74h52qZEBQ8VYjUgNisqqag6jqiFAyCoUuoeuZBUjK6gC7NLXMcCVigP7GzBcruZtSGm78MTTwJQTMN",
  "key4": "3zZKkYbTCj5HjAUEWmf1t5q7NT7vrEgZhLnUipGjwKQgAgRz4zQYpHHhp2vTStUoAXsi9AfqkomH3z371ZzVAjZS",
  "key5": "5fibDyYiVorEhuNjmDM4giNi8NMDgqw1A4SSozzE4L5WNEwmMUcEjcRsaquUdXu9761g1LPUZEBQFqpEhK3uNnVs",
  "key6": "3vTHkaeMVbTReoHrMEuR8EeYLfaUtFu9bH7pTX9fQ1PGEMsDitt6uJb5Vx6FnhzpCV4BvSq4W5BiexHSGvM5iJdC",
  "key7": "Ee9HiStxHbYXf9wV7f2vERuH6CjzUx1q7CciKfXssx6xAVTwjo7ZDmy9JFXgbMvwRRMPJNNuW8532sK21VMD8Cy",
  "key8": "4CohmiQzs66vKnYTXuLFJtXJNSARXcwGEAjM5xvuyfpBzG4Y7EjPr5HYAZNgZcKCHVSiYdhX2Y8k6hqv2Q84wais",
  "key9": "AG8aPZmH1wG8CqJbYjmg2yhzjvNNneTVgqZzzmtUMuzX2Mh3RJfDHBajwk7MPmTuJYH4P2kM2WEj56rEwE9arCc",
  "key10": "2iW7vKjdhNgA8FpuBFCnwj8Fwg9sepYTfNL6hCCsPa6vT3ZXoM3HXBmneg9gYRXGArxmaaV5prngbdcQLSDBtCFj",
  "key11": "2ESEB4TVbmKfadNza4Fe45N4LXv7o67PKX5pGinzfcHU9e26MRkC6bSnyiqEVvf7e4kVHSkH1nmq4GpcvQtbXGCa",
  "key12": "36WbRwRNDV2FzLXVAfUyJKDiC3AixetToaxG5hfTgFezXkwgt6nVpK1VjMGX1HEPar8y1eCfwmt8syWPomYStEDJ",
  "key13": "wJiDHwT49Z66fJC5q3hFoia9BsfohNSaoGnASMR3uftdTF4KbxpEfyqBxwBVidsdEDKPjHSRsy2ts6zJJwodrK1",
  "key14": "38pCqkNd6wVghq6iREBywFWbBC4JJtFy4PguPhG3EC9yrsqbuaw8xBJPTp6WYMdQdTsrDASied83mgjKvy8JmBii",
  "key15": "4uL3dx7eYLiQHirDyvDWuPKrNuPwXJzAytRfAhfSPYAQ5MwhSopbz3e187DeaadAW8oc2ZiYhNGpCoyS6hXbtnsw",
  "key16": "2NVut31viPmdYFqDTR5VeuZBKjsLiec1McfVsv4aL7wfS9gPaGgVPm4ZbvTxrYPiwSRAKMWMt3eJBGR44g2eA95",
  "key17": "2X2iVEKCXdPE29unWCQfRrT2hhkDN9kKTSmUpx8TiywQnJtzpdcbdLdHNZ2dgy8WRYfrHhYVfPw5JrjsTjpAUryY",
  "key18": "8T6kb3BWEcVoB827RjPSxSnPv3rUU7nS9tA4FYqCPwckVEcqoUVFBo3HNct5FrXqW8o9MuE5sigEx5QRMkG95sk",
  "key19": "HC2Ph9KNFG4fpaQio8pgRVWBZ6ciNz8J9aSiZLAdn7q4z6XDonqsKKevThK9vSX7iv1N4pPHL8DFzi1tzjkX1Gs",
  "key20": "3FdqQVZL9VavzeyKCzxcpuF9st5HSa4gsSS99223XrBZfzuJagyBuqKmJtxSM7xA4MmBqJsaymMvtCR1aX4sMzVT",
  "key21": "5QP42rvXP22jqxbEvKnMU3Qq2xpAjzVSjfkZX7M5yeN8bp9z8bxvMU2Uicb2M5Umm5uRXMuZddEGUQFxGj5hTjCN",
  "key22": "2TF4B9CkL42HmKhhytFKRvPNat8fF7QY8qvhANjzYa13ZUFbZhPi1wpyVamQjQj78bG3Nd4bkRbMkDNcAsTCuNSM",
  "key23": "5ujdezTNmDkPbu62gL5QRFWGTPwVJSqCbnfNd25PeiCgkqU3FC1VnLkiZoiCGMoNq618FmsCJgL7zZtCDXtY8eAV",
  "key24": "3ABhD9KftbohyeZKfFn2sqrauK8MFjU1wr1rwMEorVb6mXXmdvK5L3Tr8gwQUv39DHk4aLMnMEVzy5cwySYkRAX6",
  "key25": "48ZQvLas8UBcwbvPMRSRkiFEPgY93BvxjJQ8v3pAmFbuoKFRXeib7VmDSVckA728pbbE1pVdG35Tf16zEwPcvLos",
  "key26": "3vqVnhukJnLcXo8qRgefPb4wiRk3y2cAkEktSrh3CWZ1fWKEoWqEPspcw83G9eq37RjS6AxcJyecsKYSqHKFQxgj",
  "key27": "2MBdkuMurYQ6drENQfmSA5L6FLpjhExrqXeomNCMqnWjiFM3Muyz4nmF1AAVbW9UfKeUqWYLeWEgsYANLHb3E1g3",
  "key28": "2Cam96JsSckCdZ1sAnCMsDb64s3NZYWmtQ8tPuVRo42rG3h2vo8BwgRFsR2fF8KLubxXtSRE3NxrGGzg9CuCzZt",
  "key29": "2DjGbidkN4Y7BW2oD5xMmFT7VA29PA9rZkhuPJsGaG8Eb2uTrv9iEipnXLU3WC4FbJcT37E9vETxdXAdbtACBtP8",
  "key30": "QH7vVi63gJMC4adExghymUiGhYjVaCKzpgignuBqrpRJXEpA49ee85YbqxcfPAhtUXYTiyaCDNvEFQdJ1wP9rBa",
  "key31": "9hBiqM2WAbjXf1oAff2y8obEEpkwdFQQyeoLtcqXr3k3SkoWu7Ffw6F3iKxC3Y37ZJzWct7MH99LBojp2QWHqm1",
  "key32": "4LnrZj76fRV2zwNL6Nsy5nmBcSyVjh8HPBGzyZe5FEfV934zrs5VLTkpojr74Xk2RGd4kpWn9BHqx7ge3HjTeKTT",
  "key33": "5kYWTa3KzBUuypZM8vUKG7aiP31KhkCEcajFjC597JVZSoLMwyHijMQY7EoyrbmmxQXR2KbGQh28fQuuPJ1vCuy1",
  "key34": "2VR8t8kFEx6kCL2ZgteDtwhJFD1YMh16UhKkDBStWaTB6w7E3AXrrxrLhLUTi3jvm19MQDfC99kLgK31qrPJmsuk",
  "key35": "4NDX2KY3rYfDDTVDixGRMUMaynQi5jZdtvouk7c6p1ScGB2zCZ6FJAWuiyX5kuQCKsRMeXFD7Z1oLtF5pQFjWKSL",
  "key36": "28zAQhNSsQowCfUndTecGa639AbeNB2FFtPkVcYUCwPwtwMHqekPVCqbj2AX4Cd5TXJarjT17bK5w9LGJydTVjyz",
  "key37": "3xYFzCzCiJEVdEiAYE1DeYA7ieSWdjseSKtuwW6sndCZHGp8G8KhiZFGs7yftHAWFetcQZBk2gS6u6r3tkximv7G",
  "key38": "4HbhQtRFyzJRVQTZyfeYVJK6zgAm7RxfBC48FB74o6DUM4UBDTAjkDN2R4anQg7hWhyu7DKXmm4vHa17nECuzLwK",
  "key39": "z6CxSXRfavcS4zJXeFH3wxsv7fnjpPcig1Zy1prGnD6m3T7mX9YXy4BFCQYCWYZsgzsKZYxyu9aDRaMCXEJkJvE",
  "key40": "d9FryArsFSs5DHx9goHFZYa5Pg89PMb1yMr9bQ3pXf9eEYXhUD9tejtEG8zW1ADjN3Bf8J5F9Z2DJcaJy5eJYif",
  "key41": "55gaLjQMLfyZfuMcgUWVCu13jKj6nNxTCPPFx7iDKYFvkPSyez1Kq7gioYgNBr9DAziQyNKDW26rQ5pgTs4bEvhA",
  "key42": "3MfE44wWg7zDxSxoTWxQbkn6SxhXPoAJ8qNWE5G1GXxtL7kEhMmJqw4F4LRB3fPodKfTv1niN2mdBLJHJADKRP46",
  "key43": "4bj1uofGBbYEM2npnvzfjzc3JwTNj49MwxPamaaCuoHLwnfWFtrZJYYMfW2qWWhMjuXEdk2LiZg92PgKENBiBCz4",
  "key44": "5W6WsAZgm3AKcKs2Lir8ZRrs3cbiVAihPzSY9nnUw7MdpGJA6URdFV8QdAnvC5bN5ACeaz5rXr8wbrjkkgVEx6QY",
  "key45": "2hjQuVqmiTaB5EvDkxy6S21nFC9PQKTV8btyZ6JVkapLiJc4RrQZxLzHL3a2yhsS7y3Yi8oHjLf43GQ2kVHkkEXg"
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
