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
    "5hRs7HmtJWH1iS7meHpnhNjKRA8TQuMtYm2eAmJeX1BjWaX4nJMbR2Gp5dVkrqA2CR1SxGW5kHifq7d3ESq7rfT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4419isWLw2XoS6Q38VXVRHy9Ybqm5ERLiKCXHJ8ahsVnyDEfPjAGrRhcY1vf4PbCLDJb1tDeUvTbZDyACLvKhHWa",
  "key1": "2C2Ty4L4pzv9fH3n3aTDJ91Y7o6iAGSkX8ioM3HAtVHZiRkFrbDjGLYp6aZaHU1VC3nh2BAUirCgvjdGcDb4bPy4",
  "key2": "TnqwUAerYyYdnqRH7sdt5mLw42JU47GkpoB2HbZvsHiNEzXgNmLFWSYJPJuCAuri1LxbcYstECWvNYDyp2uZ1u4",
  "key3": "3Be5kvrTUcgEPouB1RLWHhzUg58wKHLmeKYh3Rfch7u7ZqkMS8qL7kdwVY1Gv3dNW69hf9NWfbdF1uCYXesLtSLp",
  "key4": "5WwRWdUHrv3EmeMDRaRXynSt9B68FTRkUg8YaoYEpLb29aG7V2juzxSG5KqqWuTzx18zNyKdWEVjBLQ5LUodTVc",
  "key5": "4zcv7GurPHqrQVjvebEuTUcXyZDWUXaXCJQ96iaEhim5rQ9GSWPyaK2CkX5iAnatcHawNGLdGMVccnzjprVAgZQq",
  "key6": "fvCyduL22ULWj3KwzEBt2hvTcGgZp1kQXUSRDh8ThjBrgiY15JLVpsxf81KKmjKSUPjoDPqmXLf8hpSxzqYDs2f",
  "key7": "oDM8Za81aunSky7nKRAUjg6Jq65og95gpwS5ESbrD37LgqvNmjTimYj67VcCpbzgwY8M6Nu9JJ6mHAMRTNDkZz7",
  "key8": "5ZYqLTw5rELaA5kypFRj8nUtv4Pzg2MrDT6iNQxTpzcw1oysRtgULe9HUxHHsEx2CeQcWa8WBo47pZ5gAyK8tXXx",
  "key9": "5XN3QBRQf8fNVi9VRiMCDA81Hx6AfWyJPitJA9fHrB1LKJ6gm4rGqiayA1pqLHbbrUqhmAzB9fWfQNcjVkPPWyg8",
  "key10": "2pywUWqwAwYLHpaQ1vVnU8keteHKD45GkoNnxXE4o9V1FxwvtJdAFmjhVuuARBcijpzN9vuPLnvqgtj2b3u3EAym",
  "key11": "3isUH9ApLqfd5B1pPhWp4HEDX76zCiqELfAnddT6bKZKQ1zhqRwBUANN6q76SHuEFGeaZYHBmV3Sy6Rjp8sCHvjF",
  "key12": "zCPMrUkEmLNg2NsBJ6fmFz7RxrAy858t9KA6cXBLdbx2rASz6KVZhMWnN7FHXd7ZHDMyxW9Ag62ARCcEWZf3ZcF",
  "key13": "41sFL7XwcufcXyTvTSs7chgkyGEZZrUvA2feCha9xZ3t6FabaG39ppo3WPtzhSp1kUU24y7q7adhjnbixymz3FZp",
  "key14": "5nn3LTW6veZHf8pfUHKmfJWEk1Kur27i62pJ2krpS2qVXZZM2PZfBaPgAy5mCHwgzAMsxAZsUFoePXKvLiKS2YCD",
  "key15": "44ThaDwLaL2b2FatLWCbxYt2nHJXEfW2TM6TZdBYKxiBMyPzQeHAPfHMk6XbfHwMXu9vrRyd5GsDkwyYcVjDYbQZ",
  "key16": "2v1gdUGnA1C98Hnmrib7z7CAg6ANhp4yPbHGeYjoBZ2mVsMU2V9sXf36uNarAh5iSqVh6w9dnVbL4EettNCJrTKv",
  "key17": "48rRdH4fNBR7FZouM6zoQy7wLUk6YanrYDbatVni3pCGY2Gdzq55VHXYmTUZfsCGgn3WxhcNAMxFKpDzKeyQR3Au",
  "key18": "pP3F72R3stcDevYzYN1VFfC8WVARunkLnboZcFQzofPCsAdTV9JbK3L7yM5WSwtFoAe7GT2DVwJHTJ5PKxRkijJ",
  "key19": "MgYYTGpP6ru5caFU2LuerNoWr32drb7eBev4X4pZb9U3AqCfcfCPRwui46tmqhV7HzxZ6PnSNRj9JZcEcLDpXtB",
  "key20": "qiozQXLWWs2c1nWVoaJb3NDshj7P2btMeuU6ZnUYJSfswzE2buf2dFMvJkYWi2Gjh9oospGD7FSbgaPivQYABfY",
  "key21": "NjsVezdGiSwWcEKGitLDGn9KPfsSQ3rnjTXBqkgkq3mzEsnvC2UgKS6DJAGn6XLYtzS9SCepBFwa9LFkhF6ceQF",
  "key22": "5XyJjyxc2iPdT2GdbHyJpyYmPNDDuVwBoSMEgPUFdgAnMy48eqevPdpVcAAnPAiMNz4ZhJwJfBKScTpfK4GiJzPS",
  "key23": "3roUrDtgXJQH6ysBKSXM6mRGCGC9dY9RvHAuskmZU2CJBmZWZjqefDR5NnkL7vTRTrB6d2c7VJXWejg9jbvt4hM2",
  "key24": "4XiGoREzJozaANGP152eHXYGjioWeb1eVW12UAdsSF9aimq2Qgo897STUTHUHPA16jgjSL2qJuShJ7dHnBz83fC5",
  "key25": "4E9LpVeNMNw3YCDBBRDSXEbTm7rpKXSRnLoBNtPchUwH6UiRjzQjxiGM9E5KAjCRvYZh12XScqe8FqtQD6vEHpL7",
  "key26": "2DDNe7nxMPjSKyxZvaHTfakmaZYEWEswCQebEB6WNMoGaGRjc7WjHkSWmBj42DhEgQwYFxCt5sXHjbBmQikFUHYM",
  "key27": "42fDxej2iMGZxW3RhwmpuvSFJqDwGJgK4GKJPMZrTgPEXTfWVAmZ1T2sJWZsKFdy3JDS9uMWMzGEEiiLRx2EH8NX",
  "key28": "4zAdBs3vYny5z6V6j7e3qAoF5Hc2mSnvGybZZ1h22MRs8khNh4oirunemrfyn76fX34aEich6xfvWv17TXyAEtjw",
  "key29": "5FYe1HLsV2b7GfPTZCrZXy5RVvd3giQ1Vog52oS4kwNnP9ENKnDy7cMFwNB7JushrERta75Pi6VH8E8r4Pucrur4",
  "key30": "5HuyoUuB87oYoCUYDkJTJHmbJFcDE99HR6Lhf9ZkMGbMY7VSv4DAum1hcCARhgNeD5YZ8AXGV2Q8ZMSkYH3eUmNB",
  "key31": "4ueg9mvUVqyxRKgGtoXiBXmofp2xSGWDd8bLnThsFMWRkx75WR2C4rQfxydeDBJvqBUq6vK3WNmgw6Ne38vDdTBp",
  "key32": "VV23v8iMzWzcTaxfQwauh6bmqMUo5wJvNcA2hM7E13tahiqwyM2QrJ9ddzHfUzwNnPoGPyNuVS7f2EwFGuoXmeo",
  "key33": "5zutrDF33fRqMZEhuU9CkWWeyQDVgTYY4aReqPfUqKUf7FcspfrPY5dxUqZsdeacvrhR3ombwfHwmMK81zE8ZzYQ",
  "key34": "3yLFVETkJLxcbL7JH3wCg1WF42mHPSqunmrFF9MrpTouf5J7DJGDxUXFHFCNer5Xzu3rmvb7fh6uiUuYCsNyMeRX",
  "key35": "5NqRCVuVepjF1YzRRRj3Ca2wNZYiwMSpp8eezGeCi1xigpag6N46WdWB6Y7gYroDBb2ijDKKPoCh6s8ufexZw5bQ",
  "key36": "3tribb9fvT1douuLnbZ84hrdqALtuMw6ExVbd3ywjrEKmdgj9MBSEktE25k8uuQwLU7P1DyJAGCDppMU4DrA6vxb",
  "key37": "44Ai5koLyKZLfCRzLKNrRUUw48epPeAQVNdhBuBe1by9ufRFJTbd2u9h56WnwCrRNnDArR9CjDga6ACGi3oMaSLB",
  "key38": "4F7U2kD15FFwqWTjiFVaMfz7AcHTLXmPL4j4vSCNLcihMHuwfQENygF3E9HvYfy4F77xtsmac8adM34XUr3G3uR",
  "key39": "3RwqCZWn7jKwNtu1kAZDmSdtFpvQJUUzy9D6yNRbvrqX9ZJQsm3SsFE1bNKwcWaMECCszhUdqY4qXUkdMJ4d8BH4",
  "key40": "4327RmtSGyDSyJsmHfHPJTLkFSemwdDvrYpS7Yhr6DwLk6PXT72NB4Vy4yVEsyjNpzHS84ACxBUM7UYEDcEru3a3",
  "key41": "3YYWLVn2K7AuxEUMbkNNkDkr7dm9aTPSnM3KBT2S2axxKCK11si9TTuhc9GRwZBV3naY2G9vLaGr61RnoYJDxnEH",
  "key42": "HH3ekP7KEJH6KNM4R5iAErzbc9NJ1RhN6cC14tTqis5f9zWGSWZo5VWwQ3KqrpcQhHWUQYdh7vfsqrxAKmvRFH9",
  "key43": "2u5A45HUnSePaGcDegXLCXXhhR4qsrSQmsxDZbo7oYWjFRusD3vGeVvUk49PMgvMDJ9bT2abDjSwQs535tYLCpY2",
  "key44": "64sQyfk3Fc24NT3gKMc9hDRSa2iL5XAJxTvea49uKL92NxGYrPwLcQYjqdAMHfc6mPiaQhDBR12DmPzTwtMfDjKz",
  "key45": "5D37QotYt2dVPEjqkXGNqE4Rh7Lx6RT4qCCYcprNwNP1xGWPyNXGfih1Zx8dKePNM6Ldv9R8vwPSzPTwFD3dQ4m8"
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
