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
    "2PdYHCSW8cbhUw158bkxsdovooPj9P757ezDzEsyZjqJmhthQPnfRWrNiLKow6h3qqkqMwsCd2PsaWx68F8ma1qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oNU8EU4MuP7mBwZFz5BwvDoohPUj682GHiEmbpvr9nQpykznDu5MLrrFci5m6j9k8FEiUeEJsS4ryYjM1pxXpNi",
  "key1": "4Arg94FY9N2jJ89nFNFsroXU9aDkYp8nR4MddNVTnmntfS3hZqRfTg7C5s5NXBQCf2UbTSC32M8jS7KMP4vGgmRQ",
  "key2": "4tYkYvHoiVFcPJPnrWwqzHSqQVJ4EvP4i2r72g9th3HrjCkZEjwBQ6kVGHnktSCTageSZAHGPJWQQn2X2VEqNg3f",
  "key3": "2K4spMbdSTomo9N1E5YB1ciMBNZy6Ys5tkqWCcnvryCotUZ9tYBHNWk8QXWER9qy912oWXJMBQUHknwbHX2WenFK",
  "key4": "UQmAwzh1PGAtNmB3LsESXU5Y2qDkrShUTw1piDo91fyk5aNgXo1oCkJGepZrsAVZYmNrdkexRSj5ECBasrsruCQ",
  "key5": "eWfzMX7e2p6ewqgDSoZTQR7E7Wn3FbpDEA2pTngRcFfbaF17wotBhnfurtFUxZbNbtBsazizkJNEVjDijScBegG",
  "key6": "5Ycde2ycYLk83e5WeVwGd7CoYtcXNzSF22gCziNBM9JFGKn7ofX4ZrBFR8UzmMDQpBXvKy1egWByPLDhiEcySQYx",
  "key7": "5mFWxroZmT2AvgpvEYLQbAEDajWWHQS3WQ1XKrpmTAWvFESiqzTvzqRAByfMtkuHnq5qf7t7wy6LwKeFvvKaRsoh",
  "key8": "5Jc5ArcqXF6SypbBrQ26EUtR9wHSHpZ6JLGPQcYRrQTBiMntpVi3MT96svdbpNmQ2EqphqAE6u2dJDc3iGzKoEyL",
  "key9": "aq5T3zkvUuN3MhL9mEfrTo3atUeYpBgadKYyXj5pcr7BcNrRg4gtPQ5FofyFrP1TqWUBLSvRazux8Txw8ZrQ3qv",
  "key10": "3MkTAeiGQRNjuA2ZGo57ueeQuUqVqu6MxNw6w8ViNpeSqmr4AnLdLfNsPefoHBkhi9kFS5Sa4G4GWeeMmbQpGiMB",
  "key11": "5Hj5rjb5RFhUsMdy4U1q2hj24dyV1WCkLLstWrYcW6ipgmtoFX7ggfznPf5Cv3HUSePPj1WSBJHYvbV2Pn2m7USd",
  "key12": "4KjsPezWnk8eVu7wNfUFP92s6TSNzggFUtys73xXuBTwxaJenQQLkXjeAB4AhoGnfnRSyhQmyqSoPHwQEkVWLGFV",
  "key13": "5qtYW8kdjPMFp7VtJLMPQFfnPfUFG1KrrcSZKXggcxEGf5Xog7oMqTGDYEGeUFJH7B52wwH7f7zgu11L5vi1gF2t",
  "key14": "5UekD8yvfYbv1awu9aPKspFCrtyynyNfvzPCJgXAhQ5j85J4xxAUowgHatK8bV1dRuu6U4DQXGd54fq6wv1ek5Wj",
  "key15": "2veDaeUSQPsVCHB3GkXbd7NWpeZCDfTtyuvbuG3pYJ4fUXV9qDTg9z3qScmNBe2h5keJz2anxXg9ksDxdaduDP4a",
  "key16": "5WpWwoRvFhUqMXpP758U45Fa58hMhUyZHZxsmSvN1ZaNSbg4eRzJjBYJxwkFYLgvzzJsSJH2NHuy4m4seo8pWX4p",
  "key17": "4xVKFHAW6MFD19u13BNiympmXYzLoqe7nwTMBvgC5BBPUMqJyXUfs4crHEMZdH5nguEDM1UCtQAKpcwcBjSxu5Rh",
  "key18": "4XkufLXm92BAsYxuXuZUeopfz5aoWDNE2zCF71du6uP1e752Hre6pkhk2quGua7ahrt21MtLWnHxZUCHEM7JViof",
  "key19": "5RnztpGSuBmtQQfaBSrK6aeErQYG4cC42DXB1MrLjfxgx29nhvceBasGo4QLahLZoukcYYTAvt1rs5nRFyGixPnd",
  "key20": "YZDU9fKcdQko51fKdTtBPcrbrPTR3vfXqRXec3WQVfhF1sjAw3YbukBX99iTb1GXc5ZMR7xtLJzkLVAaPTi449T",
  "key21": "2DvgwHtAxwYi23WfAr357ZqXT52ShfqZXeeX1SzHyMtb2YX2KFszyzmra5NyvyHXP9dej3DFthLnF48bFJUmxJMF",
  "key22": "3MdmzSWruE58mCCERMCbfLJ5YkhTPyVvV6ANA6ihfyAB3ocZUV9XzfMYSFQyGQBgxoJACTpTmuikZ7sqRQFeSCWD",
  "key23": "4ZE1HAUoqki42CgvNztmtZiMyN8BpFZ6AZ8e4RwBE3Q9i8gfzQsTerEbdnaQFuxuGRp5gKAFEn5zchrJWM2etFuV",
  "key24": "5mhsy4Z4vsKjtujcoDXMym4ZDvdtxh6sEcMThi5u86pEAySwFNWq43742ea1LDC2za9iKbb23uBHBUicVEx68LHJ",
  "key25": "369J2Xk8AG2hoPpGkhhuwZMxLH2uYpofh5zaCr3g3sG2Ttt2JTAtoifuEYqc9fXE1E3MvTDGhprXDC2Z3ZbcgLoa",
  "key26": "5sapRjnSyATevY9AzvoeSqKQZL8AyhR6w2ukkD2Zuvzy43RbhXsjbjrvmidsGJyxf3HLCovzmBTKFNEGU5KNX9xT",
  "key27": "2Ge919siyiabtbxtNV7xpcZND2u9yEyLs2QnrMRtMGwxcwitGoBDzCczfT1Z3SXBMAsPzUmmrbvF18amSE2GGcww",
  "key28": "3fBgvLkpz57ZtpZD7nmvzw5ixUURueeXhppsbsbormAH5Xscf8b6RsGJyyCnu571UFmaETkPFSuAw3EhCkbuzewj",
  "key29": "2RaTB4VpHCBcBDfX55XeY6pDuLWD6pKc3AkFzmCnWCRWFQN1vTRKSNTp2YJvMHVt4nWy914o4FNfJvkowp1fSvh6",
  "key30": "3VKMJSz9EBDtXqqV7WNHvffZf8VH7j6FuJ481EsTZkxfP7qb43xozP5Y9GYEDcBewcRAQvejcc31LW3eyqWhF8e",
  "key31": "31iGNHoAFwZR6WSY34GRy6AjgQTnesx3BsGWS5a6R94CZBUmGmH2QvCC3zCLsZ6XkDSNB45qi3FiSkHggGcpSZyV",
  "key32": "45NqDDiuWDx3mYARUyVfpBrdhqyHDjYMVBKAgxLS8bQiXVriWQLysMikxTotch4gXkJV7Ji4Kvkk9hqCbNGFPEeM",
  "key33": "2wZFcrAV9wNV1DcmrkCkhJadgSFWYXBxDzwQHEaCDAmVqr6pcJEhURmh4V4zzAujA6j8VvvrK6x1JpfyYaUdhs3C",
  "key34": "5LzZLQqgSwLDwRaci8LfF1i7DBdeUSqEQBTCFRaNH9or57CxcZS2Pyci1ENpqynfqyzYHTaqC8NuJx5VNMmLrs9M",
  "key35": "2vY3ywTaCCrdh8ehvA4a77Nfri5cPhcQjyCQTq9aXrDmQQTx2pGr3wbbfLoYASMqj2KL7q7RSnNPn76jrioLVNvc",
  "key36": "ViyfGfAWrXJyFHyjP1Ao8hv2cLjuJX2qzUcr7aAvptLJoP2bG7PDGc1YXAa3oGPxiHL39LwRu7KhTyRZrxsLq5m",
  "key37": "24FNiDKf3oidUgZwaqA7nugWojtCbni3wR83wY8RiqzQE74rvGAZ1F6yuagpBeZQfEgUM7queKYnTZJzi773nAbP",
  "key38": "59D9NeBJooxAcxB5KpvM1jNFJkQhvXSYzVLWWmxQGAScFe4T2FxxaB5EEYgFyGQiWgPwSSp6DfJcYDaGc34kJie9",
  "key39": "4KAvZWdv1yCUKqWYPX8ka2Nf97f4JmoBrZNt2xxvKVoayD6uqWyXy8wYFNsu55khoJ34scPFTth7PrFp41UgAYsf",
  "key40": "4iYyVbemTzuNLqvFCAABGyYPzsxYSoTPkBXNb8yuvNHQZQYvKwARrPoVFX96c57wG3XhARLbTVuo1svH36rYWM9d",
  "key41": "4YL5Ry9dzndZcfv96SRSJK61HmZfSGtpzeJcej9mXbRbvVFERUb8WLX1q9aSK7aJhAvWZR6GAusn5hRLZUqPXAeU",
  "key42": "2oimzzWyBWRR48AjJZcTBNqjV4G2JxxEqnwAT37AkGFUXacfanNb1VsGkqNcpidacJi8rtzxKS3hSF4wN2V7SrAz",
  "key43": "38M75j9FDeg6RvarNNrchVTb9scK8ppf2gthFyB6YT3m3yrqeGSjyhD3iFfbWt5JP6A8WEGAGGGe9vSeQh8SBLzi",
  "key44": "4R8oWBnaQnXoiGGQFKDzGYmvmGFPfg1BptUveR9WT2PAgRKX13XduUG6fJD8AA15CFvdjbA6UzjZf2oQ4VN4XDH1",
  "key45": "2zqwdmk3cW9cxcF7YKP8mEVZNUZXXcVAJFL8fgd7pBc5p2WHVKQBZ3YzpQYmpLR5zqYuBtVhSVyT9w9cWvwzzD97"
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
