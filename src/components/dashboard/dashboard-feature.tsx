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
    "5rLtF1iVYUKapR57LLjyznAWyHXjoJzRexs77GgoaH43zUpFr7nhmDfSiTUURwgWTNNH8sER16CQXHSsBb4P4Yyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzWUwarw4rXAthWtuh79GYVb4VtdrPXrSuNVpKLRCyMHcHyc7MgiHhrBSWZkH57j2UFrdj8SwNb4AzrMSBMZJDg",
  "key1": "vhYXVy79WqRUvno51zhezS3fdSsKMuezKiKYge4u929RSZsMewtZ3xDHCoCWp4bkS1f3LdgwiZLmGGzWrKvnzMy",
  "key2": "fP9ovfA4v2jUAmzhp99EdkfqwmckqAAkBkgSDoXkyc5FfLVMJvTTErSgqRdhzeHmrcWD4vAcKxqxkg19xBQpuoY",
  "key3": "37DZdStggNaet4HjAh4GyHfF2xor3BjNz8hHAyi6KALx5wTjhYfH8ZwD4r5HUFHvgGe7fQkgvcNpqAMrxwmZ9d64",
  "key4": "41YHeRixFmPxcCrdh8hWLZ2GG8z7m5jGKnE1s119Qk64nbrzzy7s7wPCQ94JkLY95Gq9gz6H1RxVxnp8SkVMQhRk",
  "key5": "3D26NiFhN1cizUveF8Gcs5NoaUMeotEdsWwKMfnppkgaqXftPqM3AtEzDJFUz2LmXZyaWrJ4jF12SeRs3HPV6VVb",
  "key6": "2t8FVHjUjWDqMuR6CiW1gia6zwjoNw3q3MkK3y8TrVA66RaYESxvW6W41girh22LLJ21RgTHniwY3KvNknVTYpMg",
  "key7": "2HjFZKhYUsjrgXGyS441DuX4eTQpAeLGuAEDSRRQDdpKwfratMAtLvQqmxX4pqHqGeUdxXHWgTny8i3PNzr6cpus",
  "key8": "4zsti4ifpQVeF4B4AMRQEgaZhPHadKthhQfg4azCZPQmurt26pm25Gcixb4yyR9aknRSy45rucZniSfub2ksqppq",
  "key9": "3EkYmVYYZ4pfZCHdB4YDDLyPvnvFvrdchYubmts7SYFL9qg8yKNk3b2RyffGAQRbQz91t1qhr1dWAvc2bNjoydFK",
  "key10": "5X3gfVCeTQtSf4LsZNTdKp8TMqJbu5FzYKuf38XdAmyM3HqJ4EcHJEBunSTEGeMKwrqxRMhkSUKoixoFAswb45Sk",
  "key11": "5ai3gAFn7AKYvbgLktv5nWFn7zz3tJF88B79KwALrzne6esZ7UmSQ7Me1zQ3p3iDy4RWeftLwUkX99A1GfujaE6G",
  "key12": "pRUXfsejWipnEFdCW4uHStUVzoCfpZAmgRGy1Nba75auMg64V5Y96kcdVES6uQtxoaSK18ee5CjiYqhQ76rBdE7",
  "key13": "5R9DoF2PAYKG6DycfTowFNCdwnd2d4wsNgeC1fFQZaxaTwo5Xwyr17FivZSgnQnppDAXTCjpdXL8yhXiHRHGh96k",
  "key14": "4JBcTBgeyNvK2ujAhfzWn37k6rz61aetJD7NGNE4qPfDLtCCqbzLc375AohsQPQ9eh7SyHVccLkFuMjbavVPxAYA",
  "key15": "D3TaNQjr5LgrPkRVAL7b7PzEAwuRG9yPn4U3aKWtmWkjy6DC22Xhi4TMKdo5zrjeZGdwdWDiKQJdypM8c52b8yA",
  "key16": "3gRbsiwgKkxdrBUc1eaiA3ieu6ujx1YhdMuGS32N8Fn7LnVH2bLxhaCVxNpLafPxhsP7cyTTGnqT4GPN96xccSrf",
  "key17": "4LsFy4cCmBHNdABo6BaFV1g6teqmBLPe79ccrf39rhdsJysPSWQAUzQCbzWbAgXYnA4j2D9WTugmDgC1PMKYF2Gj",
  "key18": "X3n9EMokEKeHaKNBB4hB1LMq2ijZd8LxsBVgQPr2inYZSLSrftXSgQxcwtjbhFjM689w1BPZHkxUPLEvxG3jojx",
  "key19": "2qYRUoKv8jFMi53D7512o77efKJho9z5ngynugG4FQrZSB9jMEdBquEYhEueF6UfMDrD7U1oEGCTKFbupR2ubPZH",
  "key20": "5rgCnuvpenDTmabA4dFkSbm92wyfKSSnFMz3HTkyqbfQ2pXecXmTfZdg5J36jVfTzWCaG33j2TpAg6AiT8pw9CfA",
  "key21": "5G6EkTHT8EAFiZnKW6iBtzpCoEdq1sZEMypr7EmGhvp3asCXMGkEi3Rg8K1K3q8RiBCBsabHNk5yoMdirnVMk2og",
  "key22": "2dyhZdJMrbDBPsdZViaUwMgyMdU299jesprbhkcUepjgJkwZ6cbyGjAyxYyz8fxtwcxgMaN8wzyCKRp86kMFY2ny",
  "key23": "296VcNkFi8j2QHiSWfKpqoHAtqg2bPoE6LLKHn925VwpDVHx6ZvxPbzgUC1B9Ft1F6D6gCzBnE7GxPyidRfpGKx4",
  "key24": "2CwFJVGyg8qhoyVPZjkwRyNetqaafUCB3Ctc6Bi6mcXivqhumuszjQe7zTp8NbXHmgpEGLYTq39MJSgBF2kLt9ug",
  "key25": "48VFcTXqUGPdRtj3LdQnv77aKpU5awVvgcyAnnJ5DnppQJaDGoeHhBHDcEKGXt2xkTaHE6fcye8NKZKXjvDnT2pL",
  "key26": "5n5XqTVASTpWbVNc8c99GxvFV2Uy7F6XGptHGCCnYYpiDGVhtbe5MPcc5NRJwacwGgoVpRzpEGYkFAWAsb9knbyS",
  "key27": "5txwar76tMJuijvYAQ7kYKL8ZjvNYpnv4u5jhUTXbfVvnf1qnzcwZJp7Zb9oKm9Bg7TqMEeLws81MiwsEMbUDZk2",
  "key28": "5j16dsDQrBYAzFnfVSNNEJbFnbPTwvxbj3s5Jxkb3wVbRC4xtiwC6rhn8ohh95UEWv6CESaouxSc7UNna1FNtriX",
  "key29": "4Z1vAKG2pTFsnFCui4czHjNPEMsMJeYQnFxohZ5YxE4H4PUkdeMBJ2MSda2YaA2kYumtBoGp5EMMD61e8ApAVSih",
  "key30": "5Q7PoUZWASFJiy7DC9bwjUmoK2bi8kgbWKCMy6kStSjFcvP8vS8eS5wKXev8UZHhvWJmLcRr7sEYtZNzAGwyq5jt",
  "key31": "2ewvc1e5vvDiPPnKF5S62SNFY8hyjGDq88kRKJLJK8JGsV3ysffASNexjMBFqPx6B7QLnBhfZusx9zPQCddyEaLT",
  "key32": "3AqZbmeDqA6KP96Ex71fCv11Qe6keAsF8r1GncjHrMdeuABZ8PDK9iUnwmCSZtDYJFfgYZPEjCEW7pGnQUL7EaXb",
  "key33": "4dfinfWh75nVCJQWCm1Fp447m4BZnGGH5AV192LhvAUdto4oj4Y9pKrXWracqn9LFhc65A9XAFaVi4VQEXu1y4Mk",
  "key34": "ENanXUQqHsRNKGV7HJFzjZvLJUEdi89DKV1p17Mhra3xe7MdoeUSLfgUYQeALF2sUti4awaj4EZ8y8HnMAUX8Bz",
  "key35": "XvKXjsJiKdLFZBVYyGzEKq7NrHKTErRY7Lw81B8PFinw7CQdhakkKqaQj3MQdMEWusMJTrUGpA4tHZ3EPc8GCGs",
  "key36": "4bXqhMkMqRYF8B3TAcmpix1w2dx3dMD2VTkjzX1YJpkPUyCp7oY6Ey3LqLc971Gwa72JftPyotpe8nZ7Wm9AbYYb",
  "key37": "62xR6PSqsAwhk8MgLpT3KbujCtKGRTUXyShf1q5m4MCZXWKRthLyQkPYh1sczJsG5HxKS434YDTSMMKV6Y2pKsCC",
  "key38": "mxCfiDGhbrtMXn96X79wc4GrnYdFn1vjhaQdB5ohrDFdSNWbmVqDRw4EE1aBmfiicCTUf75bLryhQ2x3jXXUJy2",
  "key39": "46tykz4pW2SgdZttxp4h3Zvco2dD1CWQY13zsnPVBD7LN7RVb6X5xc4ctMP2UCinhagWrHej4YL7p4FSpiCfKpx",
  "key40": "5uxDKmGPvPA9ocURwDiug99eQBi2FabDipnfPTM4GJsTFCN3RjAWwtNQP4eZrM8ix7a4XrvburpcobJo9bac2sSr",
  "key41": "4WQaynLmomFRXtMd9hPBES2hnczxeWVqg1c1J5Vck6pCs7z3ccq54Pm6rBQ7WbiApeM3XkeHKUbBgSR1kvbY7Abd",
  "key42": "3hHs5CdPpPuLeeT9aKysxxzGdmUTaxWkgSyZGbU9jjBPFRCeuQzkFFfLYwKj7zd5DCnuZymPdc9YXPCpDYqqALSo",
  "key43": "2R2dnd9mNhiZoKbaQLQdwfSPwS9iE2SCisC3m4yPSrmhhxpEPHyPXczbGXJV2DHPdCz9Q7c7xzfax5Lu26SakZm8",
  "key44": "31nV5yutMPfdYWPF4uofGLD41zzmihkMDwGhenS2QmyC5LicrMJJxQYKwAyTUdHojpCcKJKbpgEXktKZN8yYaCkf",
  "key45": "38HYb44aTqcDf1cZxZzFV3eXcPsL5PsVqihKkTk6QG724tpu8qqi5PtwpZXxPtuG4rqURSLjPYvdxcd3Ld94FyrR",
  "key46": "4Ak8g4RJeyAHYmRTgiPpVWVj6YRDwKbgcpRX1NRBTh5xJ5ofoFr29uPheiHQZQfHAPcxtyWJGSg6zhGHimjkmuHh",
  "key47": "5hZH76LWenaqiffLbR7UAxfD62kXbVg3qWiEh39yoZDrMzpzSWissY2uUcMe5KTLSYRRWzpnUD5fKY2ctt9Z8aPp",
  "key48": "3xfYfXq79wbPitKz1tCwV9UrSMxX7yp8krnnySFTaX9xk3ewDoRrPUVmkA9ekcJxmAxYD1rCGr3Z9kJfGcfJ8VS4"
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
