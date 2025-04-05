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
    "pj1N6fUjE8sxJvwxFUeNupvNiwkC5PQfSZLGiFTajgRdH8dX7MCKpsrA8cuhXmXp11Q8e6rbocu7peZ2wRmB2nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aJwnaKzT5SCJ6C7KSEd7641YGeSW4a2AvTiECyju9AZNaE33N72zqinxGCdQfTymcA8kf1AcJtSDBqSGsLvp6ai",
  "key1": "bSCJ5M9zpRqH4AJFnAxjku51yMytL8KVdMoPnxAGXDcCUKqfJuaGkdtiveyJLorP9fDXbdviaunuoQrn3JMLmZM",
  "key2": "5drS6m7YdGNMTHuukRyoeuM8reyJqPWUnPThtVMEfLKedyBa4GCB5Tb4fo4s3pYja86ZfJf2iaFHzj3pJ9ehka7o",
  "key3": "5xV5W8VkRwFKnDw8aPjJuyiYvDDksyLtuKjChbqaFUjsJTwrmeMaQQShNSxBUptXeJgPQ5nawzFFdDvyppRveduR",
  "key4": "4YDkaG3gmt7jsnDdiGEkEBfM8j9nQ3ReSWeEs4yqNeh6XGUebuaW6Dhefq3LH6HDMhcc4oF7gzsJ7cmMzTdv4dMD",
  "key5": "2XuacokqsQ9FFpmBTPQiRsQ8Cjd1x8fmrZToirqBDu4fKdAkGXjwgBdt7WtLzddxVDNHdjVMrEPcTM2yBFWXxE2B",
  "key6": "4qX6DjqRp6Jkb3RdJMNSYbBNBCPJ87gF9AKfokfDKcF4GzNxpVyWMRayJj9wKCF6TQyanjZLjrXMGBTYiZGjqYE5",
  "key7": "o4vHGPJNDwFCbXGind3Y7qMvtkTr8tnk7NN6JKCF7Jf99GmgYRQjR4LNY7gXnV6jedQ61AGxAgNfxpU1zkKnsiH",
  "key8": "WRWsYPtX6SgxN7GGUY9K8Cj8vdHcQgbHpxZRykfrFrVYCfssajjWQas6fUoVVw6WAJmrTTu8c3dZbpcYwb2TRUA",
  "key9": "43bh49xsBmB8Jv1zymVaGupzwvqcShncKFK46TJzr56ENdhQbhASYq7h3qoYetGPTjv3MXPofmzYnj2xNNyMHxU7",
  "key10": "x6skXirQuthS22LUmpvaRbzi2xWTf21kS9DaFYBqrTDyGYma7V7E1LqikhkRYtt6QwE96JNmkiDmvwinqXA5EFT",
  "key11": "2rB7HBo1fytnaxLDVpNS9r7eCJAzZzL18YhgvByfjqzem5bVFFTnVaDAhHr8joGH7dof77Qucgh5A7VCxdtmRCPN",
  "key12": "2cyuJbUve94vBs8m7Zy68VkDPS6S7gWzUFibr88igqgorsLUW1hG7pfDK6UrdSstUgzge5GtTWvjyCv1ZvXXFZiM",
  "key13": "2REkNytgPNVdKi2kpTmF3z35ubXsJudr23ewAztE2WKdB91GLCLzVHY9hsunPk9UDH7YtiH5Mf2TjqaZgcKpiKu9",
  "key14": "DZWo2LNemyhnaDhnpDqduKxC9NfB3moDvtTjhdA6g4RETPuaM4Qoed7pAyMrea25MwXT4jP1akFGuidbUbXJCVT",
  "key15": "4DMDV9ru3YJsCaeVp7maD3gR523Y43GySJLGjtVhwdnxVKXN865K54HALgw8m2yvdPV7c7JKTxV3FcqMX6ebQND1",
  "key16": "9DZ3pYFmTyqtMRCMw4ez86wWAvN5VDU8xCEK7zmWg5RrKEmTp5wEfvWaMPRi8yW3mvyVr8Gn7JSBVbTzpZgYpGe",
  "key17": "4J9CVjXsRcHu7c3zv2dSmX6Hix9arLHVazKm25HVWJHii2Xzy8b3zaJpzjAEpqo6vtYihZrWAXwsWBYCAk2iRqwE",
  "key18": "48StfDM7JXRiMRfDL4QRJjTrbYqmV6wUNVTZNwk8psLhqbY6uGHnAu28FRjcojz1mA7YMYmpRe1YUBiMtL5M3DoJ",
  "key19": "4f4axecaQQsBqKfR9dtvycbjhjUd7oiduNHRZ38Vx68K4fgXRjwZa5RvgFTJtUCRHwhco8g7Rz8dBnePBMtFreef",
  "key20": "z7eYN1FbZs8g3chU5ysJp3fPyHsK56VuZdV2WQxu529yLADuAg9YLKhrzfiC7kW4nZSBMFkLAN9UH2EEwMrGZEe",
  "key21": "4LTJVKLMPx4t8DNfT8yJvN6Jzz2Z4BHAzes8KAFzyJmvLnyhkJfu5PbzuhiuE1R8nJ9RJmRssgcDxDu7E1E5EB4j",
  "key22": "2a7HFxCnGcGoSzvwfe9NkRgeTFi7tHkUjVSZChXSYAkG5e1Z4QB1ewv3j2KcvCfdvh6M7UV6JGkbjzkRMEvAgYJf",
  "key23": "5aRaPAvmvanNJNtpENweQ5bXZZRzGEUefZMWpgPo7PH9omjGc4Nq1DuXx2qAcjVmm7Y1yobkZFUcddybWkmc8TaF",
  "key24": "ju69ZfSvUowF9QXVc4qD6MpbpxkqYNHWKRoH3qZb9y8RmtA5FocUdMySsb6iwNNJQMRs5qyrtXwzsXksjsPVbic",
  "key25": "31mTBqWwF5Vr1GyGFKWgx38bNbRG4Ttk3zRJxWEghzKFgDz415EhSUscjzamkNZHimza9cBi35wxERthYcKu8TKB",
  "key26": "2sx4Jfw2CzgF4cHkmLDxCLHNJq2EDGL7pJJP3i935ULYMJjuLEgraYXw37qo3wuE2CX8Hhee6xEsp8BkoyyyYpSW",
  "key27": "2SXmsYm6S5yLzBfbhYpyqwn7p5Kjs5Um77nJ7T7mSfnTZjdKRcB2DB5Pj7JVnSRN16ajgx7rAipAdohjc64HnumA",
  "key28": "6f3XWVtQnwJDxATCKHAGCq37RNFgGo1Mt8EUXkU2FFHiRq5hZreTcXEbQR6kvsQfJcmVdUB4hCAmohgS1thY8dC",
  "key29": "5ZLq1HHetak4J77C2hwtcugfMZ93QFoLzWwB12e5d5tEX8CL4Us73yoKBpEnowsb2vQML3GszLVVpWHedVL3iHnR",
  "key30": "2jzjsvjrwr7W2tM3iFKBVwKQe6vz3b191A1QbnGUp7X85s1Be8JvXhGSLVYkcUayQP7X9JgTGnkXEMFN3nMoRod",
  "key31": "j6XoDN1JfLbwoXQWJRh4sn2G7rhpEUZoHyzGZJw365kwqjJqqpSynbRcoXymkGnTAyoopU6bbhdZy8kLN2CTSNg",
  "key32": "Ztg3nrxMKJv1X3Mjhk1SwFpux6npB2tPqZuN1wY5Yn6FM3hjV9Fc8xp1YNK2Nh73JncHsa3LxunzUriebUXqdtu",
  "key33": "4c6XsvmnTW4BJ2MMbN9MhD318egsFzHLxMD8xqsPDoeBKsdB8ee2FsFQok6iyovSaKygYPeyLZx1BmxnVetXQdDM",
  "key34": "5DbPNLLSpHVG9SkYVeZn1kgMz9LF1iasvgq3ArdiNshhiepXnx6SUFx8BvZk2H4rcwJBLweVbWHjWQQiK7UhVF3D",
  "key35": "Az73Tr83dTT9C2eFDoNMStoDivTAW8PHmULVNi2QZzL78QAH7jTS6KvVyAqwkDbS9KdE8qBSXgCG516aeVfpy71",
  "key36": "3sFDiiS3KpJXjMgvD7Y2fz6Bv9m9Vo5HREio4cZLEG8Lr6Ashso1jbvGiGq87SNdqdJV8tSBS4goWnUvSEaZFB7w",
  "key37": "3x3jLTYNhGa89kuFK63tG1mtFxmJzFcUC15iuXXFRQNkhQYUFBTERaNZQn9EXdv5MNYYuZDxhA1p5kxSrbgm6AxA",
  "key38": "DmEoKKDhZHXQS7eEvDgmQ35HuRZqNGb4Jva2EAm5hK4w6WJXB227eCEtzuewhFei3qnSqAcFSGbQyWunxxX1N9E"
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
