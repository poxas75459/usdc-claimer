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
    "sqBH5LjqXkR4iPb24C9XYb56wHh6j7firqPeyHmxsZ7f8LAtdWCYv8WyyZPokmyGJcobpy8DkEZnQgPz9GhnxWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Z1UoZHw2nP9NChk272MJ6EGLxLT4hCg6pnXYu6PfEoCceehpV9jM3cZCoh82C8tJX1EoUFunjksDxaQKi31RYH",
  "key1": "4nYSzk2WCYDiMhEND64LfhxsWxvMNm5CKpHPVMmmQr21WmSxYhpxuGxstDCgB4LwNVmFyGRLGCVUb2JoGouH1HwN",
  "key2": "5YEuXD6mV36iUpQpQ3nW3anrxv7cjRZ5DPA3droCe21Gq9uqQd4xG11U2C38cxTZAgYbqFEeSz38VSgaEWymz5cF",
  "key3": "w2jF2gPVk9uqxtgieLAkbg7S2HH3cMgbT2SQ16kHWw8ttAUNsani9uoL46eUXv2G4tmfcjDCpFGwSN1qh3grvTv",
  "key4": "3nDPFDbxR9RfLc2MGN6CF4pFpSXTzXwaAcHuYYndta9ScJQAq1omi8z9e28RHiNnuk4RYBkDp5CU1akQZC53uZpa",
  "key5": "3pGCP1Cy73UfrM6YNAw3E7Aici7Nce2RjUfTjB6oepmD2kxAUNEvXNeuFYCXjGMdf7SxiXHPwQ26vCL6h4dcr4q7",
  "key6": "5td4vDeTxbeFchsoJjgGEpjfEEFQFNvt7TAe5KRGruKuWuHD1u66tygvMNBBMpuRfJoFwiEPmQNLDhoTiE91nd7",
  "key7": "u1cFiw154un9urc1AqU5n4KdbJyS6U3oroUsRardGxohwSZpd6nNs8vUbnzcNww2qjYbyZkX71FqStU3JCKJCBw",
  "key8": "4vpPjjdLygEpLCJwf8U1zAZ3Pn1iv4DH2tkF3D3eKLKczn8ida4jBP6QNpkEbSoHyo6YxMGWRtFYydLDip7ihFsS",
  "key9": "3RsGHe6kmVbVkAAFTRqyMMriBk4yvoLShzyrQaeYxQVLcWK54cnYa3Huv6BUMUSE65tDajGzo9cjMiaCcraCtzYa",
  "key10": "qhp8zo4pBRWRSQdiEN34dCEWQV1KFaerS8VZsHDTfyANMJzDFtUpVLzPDgEQtvX5oFReZShcw5scDFyoDwGGLcV",
  "key11": "4dj27HmxNwaEYVFrSqoZCdivx1sB6ZuRS2JYUkkQDL6DD6nZZpyTyfhU5ckJA3KeUvYu6yLc4Xpiohg5gyTitGoP",
  "key12": "JHj9B25R4KY6dpfybySSEEV1po6mk8gGPHCpDv6grnyGqrxLMbXw76ouQRUgrmRSye9nkgxcXG6RpzFAcoc16pD",
  "key13": "yBvcN4aMLpSn16PC2YyooHZc1YVpbchzptDvvFyqQvXzQ1YutNzacRTjBE6BBxd2UTaCai62rctQqW32E2u8BxY",
  "key14": "5b8KUkd1JyxxPsrLpfFVvQGfBXKUsstmMDmuQTQaLVwTbsGupiix5XkYgjn7tHj5YzzPU3HzWEP9pFowWhJEzJAw",
  "key15": "4aK8jMHgNBRFosQ6i9Zjpok93SXbTpcidm3pWoBmLECfKZJt6w67aaAJtJzAfX5otQckAi4xP3rSPoz2eQQXsfcH",
  "key16": "2iWacSAkyBi7VyegVh4pZ9QQxaghqCeQeSWp4WTji8ggHTWacxgo3zyQJaS2wdZthUWbwie4rxD9QdX9x8gtaEoU",
  "key17": "5rbxsoPAR6HCppjNU8NhDmgco1TvcKKBxar6LAzyWiQmYGeZfh3FTDvEfguz4S6AeuQ1jv5jZfPp4v4yBVk69ec9",
  "key18": "4K7QfiLUPY9vvonVaVqaA32ohL7iRpJ8oP8Fw6RGfZ7hJWbJWPmGDPDd1X4fM14XJo4JFQRrPHq3rP9HUuJN1naK",
  "key19": "87CWacybNZg7Wt1RMr9TpsemXYiEHSTajQ2yyvhuVcjwkQRGgTchPnUGJkpmr99F6dbePiYVa1W6wc6jbCAqYBz",
  "key20": "3uS7QJWKDLNoHZcMYXxmFLyZJSU8iRrjXeVnaFcAa9sJEKsqduKARQv2AofXVSopa7h9fN8QKGn6tpcAePULrbmC",
  "key21": "rrYdHPaBq6hS71anRKGfzXy1hNQbJp8LRi6VrfL7wa6qR8GPNVu3PuuonpzM7ah7NKbkvST2PB2tmJ7WDbXfoKd",
  "key22": "4FckPEnPLYvD1Edec5jbgxbXo7T79YNNffZobMtDjV4mJDMNPMofkM1sKX3ienR64A9bBK8jCFLZhuMtxunXB4tZ",
  "key23": "3nwevALZ5CuJKWPtDc2wwmtwHtCbbGqVLDYz7hKCsvwDKWjL5EQtqVDmhtHZFbdsLX7bH8cjEKuzzoEyydPowfMS",
  "key24": "4eXpLHMjmDBC2G59eLw3tTLfKw8ZG5jbbDyDtJ8nmZen5kGJTvry8C2tCLk2SEXc5TEkAT2J7KRXpPfRDsdC4f26",
  "key25": "5xf2H9FSnHit5HYAoUEmpio34qufT72rJ3kseiaeU7aPYAHT533taEufLp23rExXiT8pnjR8LQ1qtDprFAsDkXtZ",
  "key26": "8a4bhBARAePFF9N48VURjb6xxtymrKLbbaKSz6tGL2pL6wAs6cwZS5V9txgwxMDTGdCwjXzHYpmMXxStbrjyB9N",
  "key27": "4XirT8mgVMSDPudgf88tvBqutrEi7WQ1oeqoFkKMxztNHviZy9MWpBgG7pajnex3Ka5qXXhZCni48zVXwDybXw74",
  "key28": "55qdXNiXNKXR5ebWhk2oyGMPQF5jtqeizisM2budX1C4ZTMt5RFRaxwUVqRyxPQPw2gTpkynLCCfL1ZFpomqFft7",
  "key29": "3Ayi59ywtGsEtiu4BeqV9ma82TVawMbUPzsTQgckftgqsLJUgXHaX34hre83wLsd32G7G9374VmJefUKFAHuiXx2",
  "key30": "5P4F5XwXSGUeqae371iejk8kKiqPZykuhrmMazEYSW9ranCYrDry6RxvAUaDBsWHwBqz3z1iQ5axWrpXHyS64iAU",
  "key31": "32YMDCSc7iMxbEMe2MqbzwinNDphMQHnJHHzMQjPMMtxP1WwZV2rmRERY6MuVgt8xSF3jfDSET6R4f1J5B4zubnS",
  "key32": "3pABqSF5cv6e6g8QooQMVbH9v71sRn3znT2QsP14THnqTz3DASzRBJ7HYK1nn2cNkQ4pgrxW8ueZMxsy6Vww9qXi",
  "key33": "42VcKhpXqs7h1LTmLjtUvUdkcGDhwjC2ejZ3a5qGJ7KUHsaJHCH3FRvcXcs5GXbuEbDoGFqqYaKA2SCZL8TnLtrm",
  "key34": "3vJLouWk2oJ2B49zto12wg7Ez768rGV7rRYae4UMbaFbCtPSQyeKTnr2Q6aANrqfVda9jr9zt4v8G7iUzLM46Wbd",
  "key35": "4vS9NYoiL6dtrAyAuvHvXZpNd69hadik9BJTcHzcRPpCfbmaW5tncq8nbQksd3SoFxjVKyPqmPbHEfEevBkYGeEx",
  "key36": "2k2Kv3FYjkbwxxqSG8RipHSmKomkNUAUvzANXgVjfoZgfJAaUuNPEyE2QYrNVBacMuq5uvRNV3GJEMZUuBSLAvRU",
  "key37": "4B8dpXFZJPmTqHWqZFw5pSV65AapPHBg71YGPsvfN96r7PUphVMY6qHwMS2AFJuheFMk1fD3AZJoXLsHTXJVjoNZ",
  "key38": "4AW3PFyJq5XM7UpC6CzfdyeCr2XTqRiwxqcS8rZcriVXiPprQHaTDwsGfURj1gsxTFPTVHxjqwc4vSCraSSqxFfZ",
  "key39": "5cvPaQqMZ4mkc3EpAfb14SxrXbo4HNPDRvvGqi4y3yewpLfsfxMVCd8Ur5EVsMk9msKgAMjV4EXbgyu9o6aPwHzQ",
  "key40": "5eGeFFmQpuNUCxzLH3274q2gEHoT5iqRYAXt5Dyi5jw7V1hS7uTMi19VxJrSL2qbPRn83Yrm2e9A3nk3UXDctJdV"
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
