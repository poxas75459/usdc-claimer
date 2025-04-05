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
    "2pnfccJCTQKFJQABgEog7UCLrMuTtPoWsEgV1Aoa8Y9bmGmKkXAk3RnwM5oxJ7jzhrdQUtXy3faGtCV2XSmagKhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMW9krSHiy9rKoVaLyUtakrwnSPNTdDRh7TJPoTbSEfDkegy9kNcpgNwzBnNhZttxzLmQy1AYYyVHxrwZxZDmjQ",
  "key1": "B8xwH6MzFDENkZFWx8CF4NpfQdAgeqh4odRyUBto9mZDpwKXSaRipzWYqtogq3LKPsbKHGrhYd7qAv7cqDknfH6",
  "key2": "mSQ9Rvd2vtxvwy4kDgtnpRR3UbNqrrefJEqKiGW9k2afB9zVKtRgcvLD26MvT42LPaWbSwoCnN53eKoWZhhjTZ9",
  "key3": "3zRXSCVYsC7tvkUhtT3V8RToyRpaRmzYvFUT7KmadvGf6jgiq5yGoCZj485uJiM223pDfdya3KFd6P8ESxfgNvh8",
  "key4": "2rj7487B63C64wjssHvyteoiDFSaiw35uahf7DMF96PX4WoBVrD7xqkYNXKEaoUXMh6vDqvS1igLutMDjbqzeXAq",
  "key5": "BBqL8RHFzgPAojviPVnHE282SA9hZ2t67wGXxFHpaYMYhXfCpwFhXxm6heGyQwyQGMZB2YYyu9YvEpnZsrThm3G",
  "key6": "5TrKU91wt7bpPw1EWnYJaeE9nPp2nbY23PPYM14piyv6irCws9UFU3hZMqsiY2QjgxG1nyb8wkEvZws1AVvVxDNr",
  "key7": "4Nhd9Y2ksjkxvaQuyyX24PhSPuyKby17Doxgy3onJsPCn9vfJHxVGCqfgrWbhv8QnTYxm7e412hjJnD27MVHCrVA",
  "key8": "4orp42Kt3Wi5QMAD7T35i6RTL4RSzApM42PDoLQnoWY5oALskNRE9GAgffuBUvMGTm5Yum3eNgJ5e44pbNEPB7bX",
  "key9": "4rAR3G9brsMjnbfigrnZPZZdUQn5z7FwjuBuMnY6s3UdP6cCajDFHnB18BZh9heMKHL4HT3M6HTe91hd6oC2iiwn",
  "key10": "4E6BYyzMjchPvv59zpK653subg8xuzdL4UkXPwm7DiX7gtqBUn7LuYkgBpKE5xrCFh1DZ7tcss7gV2H3Gd9B1jXj",
  "key11": "vQcKdDBFnoLr1y232KnUapCVdKVUprNhP7qgTSN3L1Z8niPrHV8En31LVAHWCj1Bn6V5PFR7vEUX7MmMGWabS8W",
  "key12": "3V9PzJZjq2Z2gbmq6DLgFeqwP2ZhY9sUJ3oryKpvBhq6s5j5phcEnABBgH7W9EzjZeTECLFA9EdqFqXbLraZVVHx",
  "key13": "2PiJAAYnufmNyswv8Kk2PMsD3ohACoRHvy2vX2EyASSfPD41WTTwB7CkL4zmoaVmgT8WUCLkxdpSwgeaE64P4Tj6",
  "key14": "BQzcPQqncasE1n4ATzThyeyHPz61npRwkk8KXg8crZe2yAQerdkRGN1d9aZuZ5t3ML5iGieppoFs167CqtQDbjm",
  "key15": "3R2W9Br4yuJsxcogWXnMwr8pbPPTjHfHvu5XyVTXXMSQo9Fyz5pnzaUfqWssE1igzybPNHsZsUcfQpLuTrUqVNLy",
  "key16": "3Vs2w4Q8BJC4dHAXgNgVJkf2kXoaB7BFR8CQvaE79ea8VLnWojXHdtpA66XWNDJUsmc1yqkDaGb4CtxeuTDGgam3",
  "key17": "3MBF7kbmfnjUS7ZJiu8YE64sHhruciDgWVbwDPajxY8h37nDsbKNrSx1XsxW2LvdejrJ8QUoq7MEayAjR5uXk4Ho",
  "key18": "3MRH2tK2TWe8ALpYDA4yANyNHuJqzHULQMJYo1ZYf1xYRnTCvnbzeshyLb2hVYxNMzkzqusV1Roq3fNdXGKAzpwf",
  "key19": "3K62BgWGCFqhmGiBCdDYeMuB82WdY6vU19fASYYYLN3NPdg25wAhCfeJJForCYesXTsNvPzS8ZHViDbdD57cgat2",
  "key20": "3ULxAdbt3PBDvC4GYn6t8vFeXiRFSShUuPk3cFvvzHGAdzni43RjEGe7et92j1cgULSgVVDD4QP8Wn7Uf8YFbtar",
  "key21": "42GoZ5vCehmsr9cCCFFMnNX1oPuevuVjtrC2PrsAsgXHCGjhaP2DKmuo5caBkLVwR2QJSRaPpNYV94XwbnpzvaiF",
  "key22": "59SZtetf62N26qFvf8iPNXyBWYbewYsRAqRwy7tVcyg7NHXmAk596LpjJeP8ERiW1toEQK2cGsGEnfprnMvkQ1fP",
  "key23": "51oF1niyctA6HDLYTSnsXDkdYiKHKFhBs3nex9U2kWxFFTa2XrAxhWvN2wTsRWf3s24rLzPWSvv7C5x6zzcvxhJm",
  "key24": "kNVNF9vHGx4uVdE36hGjE5yYgSf3XaJq9E3DMsacGsDdUQy9bwppQEgzQDz5STVuXJ6gL1bccb4cLHSzi9vV4CC",
  "key25": "2kqyFAydBketAHK3cTQkeuxjxA6mL1xW8Q5hShjxHJ6odB6UgxaJC6mQasAKchb7NtNQjCoWC3hzb7H489mmK8HV",
  "key26": "1YgFMrQcajvyqsAsKdA61fnsuVXfG3tR2xMCro4yXMDpWoXLanPvCysqw4VEjSmMnoRUgGffTfwqL2N3ScMQnLq",
  "key27": "4Ak3TeAdb8mtEN2u63brxoLUxfXdWfizFMPvEX19EHcVmQ3kC5qYiiJ3gTmUWT7RYnNLDJNSUQftFNBeVDToHkZf",
  "key28": "2iztJ8Dza9sXrwZJkTYVgS6MAVVUGR8jyUF6LHy9UAwSPCMhamfK3dccY5tFEv66QSVuex9wz3zkbXNk3R712Ygt",
  "key29": "5UQvg7Y8PZj5fy4FUCgDD8TJbwpvr3phSzJgfLF4w7ejTcbPyYhBUC1p1BfuXD3ESTrU3JBAiYRu8ezU9LSmeJCC",
  "key30": "4mB3JZfXFg24eNDdmRXbHe3Z6WStu8Pw9M9i5EcHce9fhcApVGesXKRgc9RQB6SG8Sc2YBXauMZiZ4aCeWBmkDd5",
  "key31": "2FAS8Lf5ahAYWXT82ekxDWqU2gMbMidGkWwZoNkw7uD9tqHLFyHEYwPdkR5KE9yMTzoFjQk46rC7b26g7Xnj2jWE",
  "key32": "YrSQEeLnZsWnLmFAfZPi9F2ki7ocgHhceoVfvtXf3yxAKwiMdos4aenEFsmgLZAn3XpfTVMucERXkRhtPeb2TA5",
  "key33": "29rGu35AH7moQKgsTuYRk2Xvdgf6PN54jCipmVTPS4ikhAdfsomnu54dSFYy6hXbSASnXy12gyTUeWKwVJR7dYcU",
  "key34": "2UZQT1Ed55R1sww8EQHCTXiGQ8SCEm1H61r1DnsDCbeye1MwvtbnqwoH4DcyThFqzctiXig1enR25KDYvWosF2QZ",
  "key35": "4pz6HLEYqLh8Zsr8MvGEbaP54JL6LMVNbe3Sdqi1GbZiCHVWq1dTqibpsZu96L3SkopQRT4oCU6nBNeqgujS9M1D",
  "key36": "1uC2xgNNjV8KxqqsQUyJyDcVNajKrmsKREwbVvvQQp7bHhZGULEypu57t6s7Sq4T7eiZWyCDejyBeigndsxhTuR",
  "key37": "3XPeSGdnVJcxHDUanpaK3esoLbmUQeGFZ4cF2Jch2AhPit3wf6WLia1VQA6RKUj8Fn7tWNc1Kanjm8z8tJ7PgS3v",
  "key38": "42UKrtimDhBdGfxa6GUSgDsHkmvhtvw5j75MFJYUE9VCcBxHDWmRpA6DEJ2dETJ19ti9fpJS63MuQtGC18vQ1JBi",
  "key39": "vXynj5Go5614i9tBn4qPWBphC1WnEQrcRy1qvnazTsj9i5S88BBNgnwfYV4jjBR8LCENmrdCxiRDidNF5Wv1bsu",
  "key40": "5UHV5PkfSyVDufvsJC7WDDbJ9UH3Wna7cN775GDfGt5xXQxiVXyPk7e6Htiq8uxteNWmVAzEj5NMDZujfPFi2xPJ",
  "key41": "5gvqyWzNGNysvekYDvVfyTo3ugHxUktJnscJMgzEAquoCHkfJvU7mSkVrXyTPt8BQSFXuAeeQz6VKegYCe6h8Cte",
  "key42": "3BzpuYSgtkmFcYZcjmqKR2JxVsLmyU1YCdhSox1oBhtvqxjcFp4ct6at9rLHWQ39iQ7Kc2561KXS3Aisb3VHb9LK",
  "key43": "3ZMwVkfvs4mnKTJzcfNLtZsA5sD2vRDWzAvxTVvocUTRXCESdk6woB55wYR9Ty7cqJetL3EYosLc9VWG526meqgZ",
  "key44": "3ekpNocpu4aoLDH99qy6vV7akD7jphdH587cZjoMPWE36NJ1GYZ64rNWYMLrNz1Bp9sk3gSq2jGtEnRwvbcjmXrP",
  "key45": "3PaQ5my4TqESnFREjq72ojnXrNVsPphNDiDUbv6na6ypYSocuLWQUnPeprcn1294L7cWeBTApcCC7i36vp9M2bCf",
  "key46": "4z67aKrFRLEY47uLmLTZu8kGAtZnE3WXn83zCLaP42qAbJRgJkZsh2R7CVDfX8RwfnGUTzvqm8fmcMn7GPhaosxa",
  "key47": "5xDp7meJE2DAyqtf1wTbFWPhz6juH47KVh1oCh8fDLxRXKkmoKRDRWeTbvKguExwmFnZjVf6rQ7bWhyVpUQ6bqxM",
  "key48": "5wfwPt11v9kTj6tXdr1mK24ChLabodSApfkyTj42QPyLEcKJ8y1o4YqXgXKYgnqLmEg7aZWarXcgfL5MzTuP1jZ3",
  "key49": "5BDLAN9LEM9mj3Q6KATBp5BrvcnyCZ9VZBVUe6TLpSkaExpMbV1dpxmacWh8LJidvisYLPvX78EBKYzaGK3xonFN"
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
