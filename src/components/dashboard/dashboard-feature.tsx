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
    "2brVqDAaXqwU2kxStTdoTteB5Sub3aHp8tYaonH4PQrhRF9DWeEdeNjSZpdb163QncSm5D92A6NmNMHDmG4SLw9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iwnbWzAffNaTg1yo56qd11X3rsWLANmfqiBdRLhcPxbxVJSQVzzegH2mN3NX6jBiaK1A7RFf5B5AtxD6ED5G7Y",
  "key1": "46ngdczj3HxX5MTVH9NhpU24cQkbGquL1srhEzYUY2PVsmwFbn6Ztp8twop1UTn9NHfmmjWXrGYujv89Qjprtr1P",
  "key2": "29Ycm5KCBMBUfNzjymt43ktPuCrA6NpsdwLCFb6MzefiJN8pacqBrGvfCkVynWKbdEKjbVtxACjcSD3htAJ3fzf2",
  "key3": "j7bnSKa9rVrzVrUiRJ2UBERFUnrP9Mm1mdcXScHr1FXRo9Q5GrYVpJcLepjS3SwXfzCFsfB3Wdvv6BrRoJ3gkUU",
  "key4": "2YTYYk5ss6jDFpFBHoBosGJeMmu1Jr22LTvB4RjX5nfp3LSXM1mJxDrqDoQbtfaU4eCpmzkw8h6m7nRxs3cht9Kh",
  "key5": "4t8zXp5uwPFXhS428B6beFAdALaLHNDRxSBYmG2Xq2Uc81gaMzTPoDciGsP2suUoVSLn6pyLjciHj1FsGv6NawNQ",
  "key6": "4MEKN2uKoTQAZwjGMNNxN3NCSGmLwjaCZ4u2n3u9U17jRj3uQLxccR8dD7MSxKEoTMvJVo4dZHwF6Scc7doZk2Rt",
  "key7": "55XavRi4Nafv4TfiGsBifkqwYuGEoXwBedSnVu2J1gH4XMvXrh9KuEvCDv8Djtqj7Q5trZqaBNME6Nrk1bhTjtKb",
  "key8": "21q2B62nu1X7WZwm6ZG75gyTnFqAiUqfYCohu2imjraHPL3MXiJMxKuBKa6oxtKZjSvjyZaP5gfE8db1FvbtwsC5",
  "key9": "4mo7qQHCxvZTAV3VkyW4U54imEzx8THn3AWtS4SEqg8DnXyfysfeYF6W7BMJYz1kLUmvujHYdLLdCohQRCJys4Xq",
  "key10": "3RGCtxpJ2eL27EcCmxvuha4rWyFiU2WHUMn6d7LypXigHE9PEUVRvLiDV8WeDSppPaNHNAdVxPbhdjbmFhZPEt3G",
  "key11": "4AEsMGHASai1sNn8wZ2Tn1gYg3x6LS27UXVYTL6YFW51QYqVBFG4zomsGtfSxU5Zm4q5fHgfMB6P7Gej1hgPznp5",
  "key12": "36aieDzvy1WMvtZgGegbWkMxftZfT7BD8oSnAdotGYvHjA2eAVKntQEddCgbUogDnB9sXxfTDDsvLJMbpMVhb3Nd",
  "key13": "3dwNyukz6UCzWwkfG4LZz3HKRmYhpaLRcyXhAi9ZBSf7MMmqJPCWpksZWTMAKjYjbWaZnqogpaKB6i6ayivW4FoJ",
  "key14": "63pKKaTQhyKMi3VjAcs81Jd8PEX4BXhNLQsnJv79ExotG8NtJ3oj9ER42CnMoiKNfKjiYrvU8Dm8GGogvAgod666",
  "key15": "YKJTcncMztTta9SjQuvsMALLrej2kwoAgbmRhbBJ8snBwvVZqMbCNNUaDvEPPmR1XpBPjebne4ExEWaxtUu6ESU",
  "key16": "5RZnAp1kHJoQrS7LdKJP44ed63EKTRyhMpANSZ33LwknXN61SQzovFZJXRTCbRBahCtf5TBcrkcYnCy2JsgRtdnr",
  "key17": "661bLcCWU3trx7taFyi86HpoS8LC1MsygxKfnLG4SJLx91GrMzj1qGC2AArQK8K46tMwe8J8ZU4vbygYmmf1KM2n",
  "key18": "2o6qUoUzkfHWyCzNFM9np5tF1gzzSV5z4efRpVSrNAaLYv3UKXn22YQGW2WrELnEz659LQvt2hqJ9Ub4Lns5Nn4D",
  "key19": "4PtAYtcEhZL4UghDsNFrELAirWwUPyE2TivPc5zD9LuD48wKeZuVb7HiHJWWrZUKwneA2PoVT56TjpCq9ai8az5J",
  "key20": "3mTVWYjTDy9owouXcT9dNAmXFYpJDyWLU3PyrdrKQRk5BYwrVNJaTN7HB1eV3FM4sYnmM7thA2xZ4QHUEWf7VHzL",
  "key21": "2oSQ4Ux6bLq39QwqhqwswTwb46QX8jAN7q4CjDpREqWTkcsQbJMzF6Vzk4eWN4U1iTtufM6Tgkep9oc6VSLeSmt4",
  "key22": "25ZKURnQQXD5moCDij1zkinVhJNVKpQw52Yph7uzi9Szujy1acVqQsT6FfJEQ4fr8GUijXaaKozqcDCFg4hb2YMH",
  "key23": "23EHqsQqArX9LEVa5joYJeJoFd6Xrd7jgMPmipghEjR78HqtCJZ1Zs9UTv5iH6G4HeFXGFENe58Yjnufsnusv5et",
  "key24": "3ActLTHC2bpDm6SvRnJEXg7jHD6W3qa32A5moyDwoXGqdU6wZFKob6jWJSTmD4wqebSgZmgWAA27oky4dPYkLGWN",
  "key25": "2JbtKzXWWzeMiH6VxwBDH1SwLeQ66tDTVL4UMSLoL9RYXxnggBzkSCBGSBwes6yPsu3Htxu8SLGfBPZLEzYPnDxV",
  "key26": "2BNUfDSj93tA6u2CvCTwsgzRKEFemm3HpvcPrMxvsP2SKMFqNrncQGa64TeXw4zBCURjpnTiiKije2B2R2ma2B7N",
  "key27": "3fAdF1Khfher5PuPnzYDhuowvdK3a4aBKWFNa2N9xMAaBfL4Bjhq3S6MoSHVZ8MNFdhtjUCEg3qAESHzZ1WKP3om",
  "key28": "3WJswzv8BR84X2mDKnwj29EjACz2s8PafPf9aHJBdH2RrUQM4iuTBHXHuCMkjbN2CLQ6wB86qemCZL4TRqaVo4CL",
  "key29": "2GUuKzXCiDznJ2R39kH4MYjY4Biu35j2QaeiGjT6h1M3kmzRoVghyggj2XC9aNRc6qrPusur4PfXnPefqBUtTRUc",
  "key30": "4scQ2UaRY2fJPR3yyTX9KfFrueM1eBeNA1nub77MBpGFi1d4RDWnBbhfFd9ajKdbySBD7AW9m4F6NWkrKZ2gd7jU",
  "key31": "5ZFArXu3CyL2LZtbnuwXvhnFkTGZ1LSXC2Lay2Kd7wpZK4TpvmSZZCyNKzdCKKi2odQeeZqUnQcxGCebr14FfS3z",
  "key32": "2T7KYvZEvQN6kHPfbEGTduawtm9Jxvn4zGJsrVvCf3wNzHKu35JriChbqKNQNrZsZVrfqTLnrjAU6piQoLkSMBN4",
  "key33": "vnhDbk2aHYNz9WoZofraY5vwhi7dP8B6ZeadhNT7RZFsJsAUB11HBUtTXYRpxssshBZQGsrrjBzaKGpDwFmWLoZ",
  "key34": "4G21afGfsbJo5yk9tWr6Lg6isJcDBVgp886YEPL7zSws8SgxWPRVHDKV2fJV7q2bgzbtjSt6vMbjmnKJ41x1BdNP",
  "key35": "WbV6wrxHWgewrWHRLKYeqeGeYhG5nrCjDrnE8MaewD5Z5mAboDn6WPWbZUUuK2byHu5Acq1EFaLV78begTbQvxw",
  "key36": "3AC4Vw4jhoziVsWQ8gdaPatvK2H3QL8DpTd2BBMqBAoniPUug1zRTYqevkYSVFMhphmQeuNsTptWR5ADzkc6fNUn",
  "key37": "wgDBV6hyAJ7n6eNZQj61Schqr5xXY2gTuwucy7QhAtud2HYSJrnccW6foLAkwNyih2zwVvjNsidbgktyAZhaeGT",
  "key38": "3b5WAaxLdShBRnWEAoGm3ZBRAobWqs1qGjXw8xpAjpJbxcn9XiF4vLABioCy4otNNgrQNxMispfAb8kxsvAQdH19",
  "key39": "4fBpZd2Wvk24uiVochSBK3HQbHFGkMok6FHjedHfQb3QaSi5gWmH33yLKveNuHThBu7PAS2dybeffJa7DZa5Ghym",
  "key40": "3r4TSQTVncjejjFQsd5WWtPBmvYYBtcxYvJgYNjnE6WGoNcDUbU7VuJpUBQsfEBGofviF5mgLbTZyYmUyg51M516",
  "key41": "2sdB9DtjrAQAuzbWktxf2vbbmtsF1AR8FtTRfA7jhaeCzvf1z29T24FqQxzujKMp79FfrhWdQPbWidU8uye3Quyr",
  "key42": "5BhyDrqao1QpvXFSNv5NQMsznAR2MJGUAnDqfDfqdC932TGcDke8jtMP57dbJfWDFG6Bc6bv2t12h8Y9jsxmAnZz",
  "key43": "5xRBppCD98njJjY6Y6Mzeu2tCDtdESHP4XTtGyFNF8Bu91fpERdkKKSze5mPH1G2upH3Ms4Wz4cHwqNAZkpbqKjf",
  "key44": "3cVoZdtUyLsjFNugCUwnpkK6JNaUCTdwS9dxDSrfayDDVmezQf9FtqfJ8VJQ8uy4WB6XR9F2W2n8CSUkZisq9GCY",
  "key45": "5TKW87V6875ciXq7a56KjsXkmy538QyRWJNdFHU41akHY6p7ZrJzH3dLvXNpGUraZZ7TiWv1QUnsyDWnyd3GtVwD",
  "key46": "4CmRXyJyK7FBB4AgyuoHv7RniZ6LcaQxggfWzakwgyyNrZGewPosF1YjeRb4VQAY7ZLi7avGf1Sj8Ws1dAcSpmtj",
  "key47": "452SdAL4ASMRSmfCnvGfeD3gQoJQBFmNcGrAsNxmSAeFc6ZyRA1sogRRPPAhEz5VuDEsNJc6j4MovZhbQAn5PRLr",
  "key48": "Qifh8X1DRMLTgLkSxKinzwNgw3HAFqgbcvufhjZh9ahi2Swt7Dnekbk8ZPMxrfRgHQwuf27eGsYL6qWRy9Gv5Ar",
  "key49": "2po9gTz3qN9X5LWADh9q9nbJTEUqNwaSucH1FBCJDaArHwFUZcnKPWpQW3bJpYA4NUXxBD24a7WjrF5f6mutXQWm"
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
