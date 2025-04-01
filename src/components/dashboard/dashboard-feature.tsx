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
    "412g9o1MUYUEah4CRHHVJW5AshFecMH5dkj6Jwo6bowQRcE7QGXsQpoVE46gGpMJjbhyfCc7qxGvcMLH1bqXmMLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nf6vZbmHK2p37hL3sQBRkkHB5GzSFUJStQ6s1P49YTFAQfq8fgnB2KTUU5pdKureXwkPnPVdMMSMnyEeVGPRdGu",
  "key1": "3JEUDtthDMbVwm31Pr6uCG4PWYiJXTeio7MRpis4cWdYxB9mywBbNy8ampapGAwYDo9t3sT8b2kwD1AHvAaHfEja",
  "key2": "58tGaL3srmfkMhrtceWRXFAa1yB5VVWJo6AocEjCWPurV15rnTjtmezmh3UF3Bvg5ueYNhuGisjrvqC1cXjf34vK",
  "key3": "24V4igQvzsrUX4UeW96F1MGnodaw2n7koYNCRCxbLLJuBEndVE7WoGoCVv4bsYRtvoVPJ9x3qc53Uw2r2QEsxSAg",
  "key4": "67jAZ7b1K3G9V7RDhdpBPKfH15mBPzcT54qMHgw5bt4Sygx3wDa4HByE6VTzpro1KZfKBoHpVkV4m8E2NfXvouyx",
  "key5": "2mtRCETr5Sxka3m7DRjV6UBQReXk1K9qVhXxtPLjP1YhQPFGfScWize1MT4eVZyiRZ64NAXNgjAF6HBxgDe6XfSE",
  "key6": "5CJtnSAkpMFM1NQbVyfq4w65vHZpNL4DyV7ck87ZYjT9JbDzn1JMLj5B2hjLs5namzS92WXx9tUWB4sKaxKhkrhc",
  "key7": "4uz442hakfNJSEsW37kyn1YciiucHGamhdpw8t31koJUGxYe83kitzBcYUtBbk1F14WSw4Tqjpc9Sd8nxr5QQuWH",
  "key8": "2QfQBNP7B5DXHBR4DBcpDPg4tkXtMfEfZ3cvetCeBpgitigtGvmKpghRAA7hPy4x7VTEW3Lqa6BwpRXyt7xPuGo1",
  "key9": "tGpCqe6KBk9ZJcrxFZUP7er9TPdWT8pWDsa8sFnMsobQFukP7fYBzedvE5U1kj67tqjAmJviUnqo3wPajrr15V2",
  "key10": "3LtZmc658upmQzkGKDSHvmqNXqEPpvNH5c9DeGzBoD6kYeSqBgeHF89XQkMjntw8JpoypZfM4ixAew42WNSjhc4J",
  "key11": "gvZYaJcfxWtwRMTjQNQiX1dCrJDvtoVx4TCfc7mHmGjFuUtA8hcUs8hwvWqUZRbxb3PC5Fn46iha9vVfvXH65Tc",
  "key12": "4LvfE6rVxFpBaYrFYMVPvznVWeAsvMMEBk9hzQawp456kGZHwuiy3BHiFpoG3g1tF3eADYrcecE9Fa7DAVWLm2zM",
  "key13": "4e1tCNUypmBcoehVE35VkNwowaJKuvf5WA5jKXLQ6tC48mWcpeW8vLXf7haWUHFX6KfLWuy7HWZH1owJ5va9aEi4",
  "key14": "1FDHz8bW76yTLreEdtTm1SPpeLPgbj8adRoneWpnvK5q2fG6cqMGs2jxv7yGbv2gSRWcgEiFbDBbH3gE9zzCo37",
  "key15": "9TFHoZnM9pSod51fLjxs77N4d9N4swHFqYnrYHW78APdGh8gM5gaQsaNbrwkFBbgh412keK54JmLLCP5VXc7DkJ",
  "key16": "VNpku6f2nTS955wVMRNpv7KvXbBfs3Z7fK9KEqcbhuqfhqhe4e7gg7tAsXLZeaRavHykMSvmsQG2PxBbxkAiuNF",
  "key17": "3d26QnEzoQrRJT638YMhFQPjBum4WixDEQPxkYcQjWiK66AUjrwgd1UUJQZ64HpdUyNVMqGES45FKLye2htyPCT3",
  "key18": "3CaCopRD1BNDgBTPYLhuWVuuvfTAbGU8Jkn9wqCP4UYxRxBdCmT2xzv9MYXbk2oTJCx7BTVkFAPaqoHp1Xx3Bi3U",
  "key19": "3Zh7mZMypCZFp2wtkuLF8yZrbRNkccap52SzC1YoR8rZYFuHofJkKA3GSd4ERgLouCzt29CYb5SegBtQohPmus1J",
  "key20": "fwP2BVKGqz9KynVUTMTpQjonXApA37wNbL2MjquzRctHf6VJT6W5GWUwYdYyoAvoBqGCQ9Ku8A6JfMRMFjbwPAS",
  "key21": "2k1dzsUCvEG78s5oTh69pMJEtFDw7SLDdVtR2UftEB57ZitKwoDYpoAeiosa9k79FLkj63Hx4zJt9BoceidP2JVJ",
  "key22": "2rMgH2rJjQZ69eoPtmtKiiQf7cW3pNVLXRUEWgEQZunS5Mcp6ihTqqTbCzRBUPRU4nS9AaNCFMuCUowxUXsTBMXj",
  "key23": "3NEZ18yvcC2DnhTp5ihCszmy8KTktsfwADxQUMzSo2qmLTc8qbBNzmWyb3whXAkXqcArsXz3UgmMXRjDzppyYm4H",
  "key24": "AEysj9GZKhuXn2x5CYUGya6YjmcMsNFQemUDi2pvhXLvJ2vycgortH58e56fujMDc3nEogXZS6xiZYEAB4A8JtA",
  "key25": "4tkgHRDQQqVSP1PKyzeS7rTnvbswbeu961qaUevhAZ5musvEjTbrW55H1d2fdYJtJJuMbEHijtWwXTwg2oZv1RGt",
  "key26": "9wRCVhND6UhsjGrzAQshaEdLfuURbQV1EMmSoiYCPTedGQ5NiNPqHoqXaiUVcoBktZpQCUGaiQ3wGmLWbZ2zcDy",
  "key27": "3PhHZw6LeVczvNevxH7cQm6AHeogiERudaV6NctvRQL3WYkSd2b6zo6JvwLjqzc162fqtLK8ibSd8ukQbGdPzZp2",
  "key28": "4UkoCkb9pDxzzzJdJ8LLgwh9BJzfpEvW6ioZr3KMd3k5qH1tcZMRRUmT22fd1p8UDdmjHBUMeR23zKvtF2ZMPoj3",
  "key29": "2bKyxwCLu7yuuWFiPRo5hutcvJbdz6WfcKe8TUgPJacKBn8wspKkmicnF749bjgFZUomvwQH6nEp2u2cmujciDK8",
  "key30": "2uKcADagcS6jkVjXz8sZyLYLxLNwCPbrmmSzaFET22Cm9kBr23Qg3gMekbXfHDqP7JPvLfpJhaDk5M6GYbqqGyV8",
  "key31": "5NDnfTcBNrnZYBVd5QGF8NSbJ4QSTconvxgwJntgmd5GYicARSsdKc4v8JGhXT2RWPw45j76Cma6NuSwyfVjRWLo",
  "key32": "3WNHvgf7LChW2fYCi8cprquQpUyAUndzoECL9s5H8WP4NyLh3akreJy7dA9y85TThvx6S9kwsHLL2rmG9nzX15Qr",
  "key33": "5yuhHgTbzBmnzSBzCtNwtPSgpm8uVj1JbRgxngR2XwyXip59neRoFJjRWTbU2jZiuJTgah3EJ7MsMf81K7Xun6G",
  "key34": "2XdV5Df2jvkFaRGLpPLRyrN7esjudDUsodXYofjTaGP12CqVUAy2mdjaHKXBYYqLw9L6z74UFeSQmbrmEgxBmivr",
  "key35": "2zY2Qxk1jcNCMZ6mnTMq8uXH2ATcGmk5vFfEnG19aGiBjekbGtN75rG7pfE5po2uNNEgkRCVQM2sd1pGFjdDpsew",
  "key36": "4ep32ag2fwb7y6RLYtuz1dPF7swmX6nrkJAbc75zKwRenLZiKBkwiWDQeM8NkL1WWGewnaDCXisidPnQ8F5FAa52",
  "key37": "hc9ULHJXk5mSGYN8Qz6hxEyqbBDRe9BYXG1J5EJRHmW5qGXusuh1Brci8fUcubxUAf2LnPJUuELN3EuxLgnfALe",
  "key38": "RwyMSUhpSqVFSX6991m1J3tTwwgR2oAC36j4QdAPtwbWBrceZgyQM3F4EvPt3v8H3hjbtn3u9kyFvo8CMSDQ7bF",
  "key39": "2FHpWoREdPreU2xg3CUAGqywBtXUm3tn7gf6QiSYeBcfSdLniofLsRHU5HqhRczrNAazkVLjVfBKfjpT88XexwoU",
  "key40": "42KrjGjx6wj8H6XL6grbynMFpE2TrZFMW6ey9H73QKNU6hzLMMqAZK4YS5Bm2A9GufvS8EKRYd6aT1B3UWcryZGD",
  "key41": "5EF3UGfoBSQP4aRd7iCZj2obVqRw1gyTadTsoup25yyF68YRm3k2AL6exyGx6cacfFh7Doi4aiJPc5iBUJEpsu7",
  "key42": "4PaWZJpJru8T6swcK5YKfKFSVbefHEwumxhfxCv4VFnMA8pnbzGhLpedjixiKxS57CTeV3QwiraUTgeJqbzuvDJR",
  "key43": "3mqHXdqtrmGxRi5aqto1RiiwJcKzqCTqsV3EKf5MaqhwKP1i3WgEG1HAoKhCrM3hcrb77MEhcD55v1uH6dfEKB3H",
  "key44": "5EZ4KKaCkvPj6zKMP5AtgwJgCJetqiUmQVtKUrhBYmpaJRWKqzRnY9vDCnTh6WwiA28Yddrr5aMJDbnaKu9f15SZ",
  "key45": "58pabJQk25FhooZKHCPEaJdKcAaHLLhDd5foXaPYJHNefcBxKqgWRtKohf18nWdKWSdTShMpAgpTYRi7KZEjgm5C",
  "key46": "2rpAvmqSUBjAyL6WswDYUqkDJvBcnisumjrijW9V8dfzF5wSgyfFTYZADvy7M3wad4rPWdEdNGMHH3SSidBd1tN2",
  "key47": "4pa8GfKSBznuGw2vkQTN8csTmV8DBL82XTvMLUmwuKq7neURjiTmrrb9ENiAPQXmVQHEPQ1QEfV6qdowZ8FVHjS7",
  "key48": "5mDi8ge5xWTou4KDrkKBfKSvADv5UEZzW6Jh1AWcktjqN2Eir3Z2UeqzymjtA7RAfK684qQmsFs3sNDFbFTNfJNH",
  "key49": "4XdzeJ9PAoXCVep8uUoH3o3nMiM55CJ17hKRkK25Lcut8Uy1AJkVAG11YU7iCW4Mk975JSBNFEUAczYpB3nWZjCh"
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
