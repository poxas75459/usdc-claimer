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
    "4sKUcBVA8JEEwXx74Y13R7vDsZiHuB4zrMCRAvyPHyY5ZMUwwxet1vLLVQ8zPoqyxCkyNRDe8oDzMA28d8NH83zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axXXLbFS6xmvYsXVMBR21W2s4zjGMrLJ1sxmCJUQoTAHDgZNebGfq5GemzN8E2Cah5du4C9VuaBv35uzuSm1eGd",
  "key1": "61or4K8dg9sb2e1YRdD2nmncCfmooSiCwfp9xKk4dDXdb37XvxBsFXx8rf2E5X2NWCsg6LjtequwzZWKSDZ1eRba",
  "key2": "5ztnKkPfyMqs5oSNSndgWwphMcFL99mat7LeDqY2bNGSGeG6HGmrQuwFGuNsPYb9dDAAuDKD57XtrR72ERbMV1Br",
  "key3": "qkrYrbrZEBwjoHDMJEoVQYhDYgVqsmgJ3Uvvc5AbUF3jwtor88s7DwVEgfSdvAth4LfPStK8s8bxuUyCpWw6HP6",
  "key4": "5Qbckuq7JmqdyqmbBMRgcNY23gd4jz9NvbmLfSiNMXgxaiLpwB64MCo9pT8Hm2d8Uu97eVv4jLup6FMqvqqJP7GF",
  "key5": "3jQDjb1FUnPM2GY5rYAt6su5YQso9kMQYCrfs8Bf22mmLpakFWMnbeJfNMUAuLRJzVLoAqh3bBDBbea4gckKJH3W",
  "key6": "tDbYg5QgewrGiKrj7QSsx5oQKQ1WD5Cbhc6YMnQWwPLBD17t3XavdsDLWwkvmRH3q5YQkt9djS5TMiTPZDHvwq7",
  "key7": "2Kat7sjLZo9SmMYNAWqCSjK8FCEJBckuJaLFcUMaU5Dj7bPh2PpHSispshKkRfTATb7HYpDp6t1J753B3WppzeXC",
  "key8": "3HDsXvL2XnuDuEjMRrCjK1xxhvJiWCwoZ7uzPG9JG2HsDzw7qQNxqqXbPBaDETBNSHG1NcDR7ENBL2qaV7mMkNfA",
  "key9": "2moN8nSwtVXAW8tQqPzw5cPESmN4Fw17aAZpYTtEktwY5uzuPosjcFx8VsxgAkkDvFMieG9jo5utZViPe7jdRPAA",
  "key10": "5gYwtjmtSyyBikUnMUzpDNvpRAdQzfoFcFFNCpjCRgA1aNMHx6rLcEgyR6jQr9yUFYLNTXTkjYenyH5XDxYtL4zN",
  "key11": "43Z7y5JrztSsQ14gi9pkPMyn9CWr2BeuGYcksUhnKrDm1s2CfuNzTWjYCxZS31xRTiALXB7LxjeUTatqVCDMBE8A",
  "key12": "3wXRRtEGVRh8RRSWjswX9MNZgSybVrfiK6Ha2gw55kXihZxX452wqLzmbSvq67yGPBsYG662Q7kedL7UNAPztZ1C",
  "key13": "Yn8xTTqRngnCnAWrTgFkNujosagMLPuEHXHoZt79NVzUPyvAGf946XMb5nAVq1ATCtJ9APidrSbbhjErDoY4SVv",
  "key14": "VGfcF22g9mJubEQs1txWCir8gYWKq6px8gTF1hB23kTR5BecdhxAcMgSpAGuJLBcNRQzLQDQ4vtWB7bwvnTvXUB",
  "key15": "dz9Q9LFZDHJVipYFZRXVCM4XXjmT1sCYJqx4eHiYBNy825nGetcL6HgFfZf66jbE4CyGGQbtD9jtJmxPvgyG6XW",
  "key16": "3pS72poSstnJwPeEDfNZ4sX1XwBaaW4TghJvuVyGzXuf7Q7vk3Civ7cmbVbGEwNhhT7zTPX68azqtd1LWwy8owoe",
  "key17": "47QCBxcPcf3ft9FV1yA29Kp9hW4i8ZSFpUbtvV2MCjfscFY8ZXfWXpnjsEBCKrnSoJVUdD9hJzF24U9sdGMAmcPE",
  "key18": "5hywa1rePmosU96ckVvR8xRavf7EHuUkVatmBgj38VbKmtAAvai4Q2GRT5MS7E2DZjcZ9iqRYPa4cPJ2C78gyaJ5",
  "key19": "5ajrz9HyYoeZLYskviQU5iHB23pm8XwWGZ4bfdhKn2GVBnXWurxguBQyWUc9PXhqTEddgrFWNNeZjxa9gAkEoeWp",
  "key20": "ntFYd9bDEcw8MdeEoDC5zzcz4HBqxLdrPU85m61TQS3M9wXSPcKgAdHq4hGiGNB7ypwkzPuLyLVwL6VR6Rimw3y",
  "key21": "2vK5b5kUa224BYxv3VUJP32bqPbM9B39aJjrWwKTSuSSZiVZRe6ekxWb88ddkgbwy12YcbDtP1km3zM9p3eY41Ln",
  "key22": "644MvmstoUh3HepmVZ3c6z6XULKXguPnXoJdUvxjqKd8G2yAU1id6fodddBfJudEeq3KgeHBxtHsLPVJBbGUvXgh",
  "key23": "61BndfsZKR2YtAs345vLMxJtsxPCQy4x3hdQpZeWG8Xn1z7dg1RRBQmC83miNE9Kh7qnRZ7t17rJ8WJMWuhDhzdp",
  "key24": "4wP13bzJRj5KbQENkEXLyeda3Pztr1LEfY3zWxdNFcsuMKvNUMab7McVgjX9SME2hiaLxUDvC4LAQypD743PGVWp",
  "key25": "tkzdN61UTnT66fRDJuNWN9tUHdCcyfmfwAbHWNDzFjLhxPnxwazVqqpb7FAHanXz2apj5nZjFoEpSeYFSugcH4v",
  "key26": "5K6AaFuR5xDUbtQd2EoVJca2od83SEYnPGBVwJ8H4dfevcjMjZtYwitzF369SKAiMKBf86vGcE7RbiGscqCtc1hi",
  "key27": "VstqmhY7h7m9ZyzdyoG2XbbQeqxzB6DWt1m7QYBobKixp6ZJDvCSq7Gbm6GrBiVMaggrECmULtf7pu7KSxcWTSN",
  "key28": "2qdf8NPCq6S28s71LetYz37KBCgTp5J5a9cNrdJJXSeYXDJnrhYYbFmx13eo14Q8agsSwhgEv5EKcyKv4CPFxGSP",
  "key29": "4BPwzYp5d1KHSJVPKYZbrpstzAAK9iHV6RaMgkt53K8hyWzLe3X59wVHibm4vjNyNX3zpaJvWzigJH8Rf9S8SXct",
  "key30": "4mJQJgqHrF8jBtFYxdNfEqPcu2Yh8CsC3R4ZpNkkkEtVEptiDpHJUTqp6KamzCVELHMGCe9retf54DM6ovPTGiz",
  "key31": "4WFqBSQeuaNEhFtDTKg9iN1jsecda4Vq1Q3UdYP3MvdXDdPhKm5H1jdBq9q2LVGcxWaKmtQ7kiPNAfLswKeQhgDP",
  "key32": "4TAAU9tsFxQhTheFPWKQ4bNfeSieqLGvYL44ZrdZjoJ8NnWBfA5zcHF3mfcNddtUfAJ1ojtnJnJRwEQLB6b895rA",
  "key33": "2dm7ti4bBdvRsQH7QUxYvMhKkMZ5uWeEs7NK2DdPa43CMNhWZfmqvgeNtTVcbxUzaLxPik82vgBy9cKnPTQv4zq7",
  "key34": "4ccvxDgWjWPBHC1q1Am2MgJbh69iwPqT283pXdYuS1oJMDdzbq1mUBT8PCNzJ6XJF6yvbDXwpNwVa2aSSZvwBgyV",
  "key35": "297XsZK2Jrd2KhKwKsysvNQLHoSVR7A27Bg4NxJ18DCANjztywAMnvfAFZcpaT3YriN87FxfyqbpjpKnBeM8U2TQ",
  "key36": "66PKC5zax9P3HEqCYa3vY9fA7ZHnJxB8wJeQMSyxGrK8BvbhFm7nM2hcDfbyRZfdkJiEzyxnfx137MxhHPiekH61",
  "key37": "3LXGTY2R2e4HgcViu17LzU3hh1d5BvuxLMpXokzQkY9kBXdhfqYLJZjMhqBvw6ZiXxttjsR5RhPywr7drgdQJs8m",
  "key38": "rxp1Gu18EMULkyVhomrtuvKeQhemxrfY9Db1ZStop8MjEEV153qAWn3ZPQ7RaCtG34Gmqg3kxfkN9i9od7VooQX",
  "key39": "9wJBxNzKsToQXLWFp9abkU9a5svzAFsvtgNzPxFkuMVEvConN78Kxwr6DGC95y1pxwz6mVxfSkq5zLtQ6fyyJwF",
  "key40": "5QHjXkFkRLMvPwabqwVcVnSZoYACvvsfK2wkbj6avBatfPqqkWeC2kTnezcxzGHxEGcmSnab7zjhymMSpptzMNDb",
  "key41": "5wMnFfbHLin7bNvxkeUZF6iByyUqDvLwssY18CLqmZksPhxMVzenNtZKCEA51zcRn4SpmupgXkV7Y7dzLdwuYC3r",
  "key42": "3mf1QBimK7nYav4zwAFnrYM79raJdzHJWcKBcWGqdsZ4XbPn5WbzGZSRKsh8jJXvSZsHGQCqPoc2kWrZY6jbh5LX",
  "key43": "4fLDdvb9GZzVAyHb82q4KtLZqN2X5kHXYzRNzLkTs7MjcnANBknJN67sTMTC5oX3531Vot6G9DTZHuSwBSExaxRE",
  "key44": "2bkADoBRrZdUNiZCRpR2ewV9HPEXzTDSE3fczVBZrHALoK1xsu2DhBmKKwneqaC7uXYg9twXbigMD3tx72yQyafR",
  "key45": "3xwVNK4vsF8k6WE2aiudJkg1cDcVQncnwV99QxJeJusSJXMD2Wd9UYpyXXx2n8A8bpda6D5H3YgT4fMJ32W27X8Y",
  "key46": "toLGSaWHvFZV4ypuyi3QGGbj7g66iYMptr69ahbPsYvV77U6APhsxmY1z3ZVNWNTfYK4P8YqgicCuAT6mdjaENZ"
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
