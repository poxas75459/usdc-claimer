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
    "4R5u7k4wmKEiWhGKgTddTp2h5zWWCuYAZHNVUFUnR6SiSQkB8HhDjAEiRpqXYhvFciRguXeMGGuUeAZvdNs6peTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "joexD3ypZ6TPMKG6MDs62MxQSt4MfZFcjLGPx8jpc5YLhJk2w9kz7jmuiVFuLaogfECyW5CW3YYW4LMVYfspcWX",
  "key1": "5X4D7ECLjK3fdFRRXZoEJGWXqH1FqgpkPgkbxcyBPJxhyaJLsrn5K4ScfxYFe4qPWtS9W6BKL42evRqRAfDdjKea",
  "key2": "5FQfoEMktyKdQHE8dxRoJvBHQV4qvXNCSuE1bW2KxmifqY4HJ5AUL2vfDNA86JgFVAx6BcyHXxEvdPjfz7LTMvsF",
  "key3": "2YDLMCf8ViTjdUTaFCQY4C1iVB5JenJ2yL4Bp9WpHmEZLk6LrETqo7e9YTRXgiykHAFMCxoQPznuXsxebSipETxR",
  "key4": "41t6qgHgye7wsZB6LWWC4DuUKQnPy8oRzoh4R34M6HLmWKrbkFBhbvK56as8W7gDqFvT4434HrkMbfZGEDSznpYc",
  "key5": "NuQr6P7iTbuAB6bmjhfe7PeNFmQ9v24HvVYvV2AcVvgo7kMb54JpxUL9zvaSJDWKWxz1YED2xBDUu4LxMKCcCwa",
  "key6": "62TuyEinf7Bif81renmNDmA91Aa7rroa2DqocAMyMC3ULp9NvJC82eq7Fp29Ap8jGfouhKBzKitTn5tqKqgNChG6",
  "key7": "5eEoTCGAjBywCHaCq84Mw2B7ZmHMoR5sKq6d3YPA3J6DkTTXoGwxPPnoqDW4Q6tBY5TsGVgjVj3AYonWDwuhaoaW",
  "key8": "zXVPCkNmpF5RzFAjwQDvuwzinDwEbcXvZjtT7xBpKAWGoT7SyEKazT5eicjF95LEfoyghWVAbmcGXTLh34DQgDf",
  "key9": "xb5upfDdjkviK7Xigz75NtR5q57aUV92vbdC5tZBKEtZUn93rCr3eGyfdrkLFMUoDAYzkL8bAGqnZV39u6W9YYZ",
  "key10": "3nuCixTb5HAykp9tY82CqRLDhhLzxnzH8PVGwJgGUGNW6uSyHHnpVJHUuFauNBaKGL7jfNEYoTpDgefcuv9nx48R",
  "key11": "jmgU442i414jC5yr5U5bPEpMn3UKgcHWcPZ8gHijiM8hzEivshNm6KVxLKRkifiayH8fns54H84WV5XU1pHWzhs",
  "key12": "4GVioqSBXiioF9B9dGibcKshzbemPYrG9XoKBSxqce2gFet65oeFAdHXJKb5A3NF9zaoZupat1SA8Z7bUxDFCVnD",
  "key13": "4x47ZJJeY9CyTwybKWFLuibBgU5mYSpAa6R14RmC3Fzan2BAUjF4QSz2Up9CqmdR5KqkXhFx4S7m3WNYU1CiZwsq",
  "key14": "4nZvAMKT1i4B7UaHsP6ePTBKxNdhrKjb3t3amtn5Q14iJEPQiqDWxCHbZ93zxDT9sRjbVNY4ZEyipZTt14E13eP5",
  "key15": "5wCSZKL7H5VCSazuh5Uxh6pAXPMa3835CdKkrNzaDJRqEU9kGeZByhrJqH3gz4NMpJ9EBt8zsFG4xUenwVAwreWX",
  "key16": "3Uq9b6zsL8bYqhMyTewNKcKTEttbf9G6BDXvfmcqG6AMuTzEDzZ6bKyQYkd84HaFnA4dXaCSCxHRuMfotyTko15X",
  "key17": "4e7DHHE3qUDXvpXx8vh8Z5mUsispRmAEZJbdA7r94S5YQd2V2XbEaQvP6ZzV1dCFN1ryb9Qt5HRAFW6eMqrWNcpf",
  "key18": "54S3z626Hazhxc1xNVNwLkmadgShW3HVCyo845sJ3pRPSqsUFSeM76hBzYZPgHXegmP4xiBtqSPAy7MW8zMEg8jq",
  "key19": "QFgcy3AEMEswuM5MctVx4j5J6Q7h72QDjkZfyzx9G2rHaQ9Eok9TTvAXQ4iR8jWX2sjXnwx5oxQ2F6Vs9QTCGrN",
  "key20": "5b3pV54j33EQC7fSqdsSf7HQV7gQS6MyCN5mv7T9jZRLWK1DAVBtHzBLS5Qsu3PKQL8VGH4PXTA4MMXJsDF9AXNe",
  "key21": "X32Q2jBYaSeg7iUutGaqXfXTeaYr9iYU8YWRc4XSxiVNWfPj6XR9smTW9MZwBvLc4meQFETdCwf2PyBcW1wYP9j",
  "key22": "4Pdcg74hwQJL6HCLkX21ZBh8i2JfG8zUvjk1CoMv6az4xM7YX8U8n7BEyqP9tRqUz3eJAKAqpGmPujUdYioBDhRS",
  "key23": "34gZNmZ16ptfDKPi1oXVKimtWqjcRk8oMgrWM4GVe7M754ADLxZKbRn3M1ZuPqs9TMAwhbbHH6ZY4TRChoi3WjrS",
  "key24": "54eKASL6vvwE9V1zezkWNZTXEULbutPdeQKzFtj2PSjwroomSWNeBHcuTvD5fmJTkoGFPdFsWiABYpJTpfdtobPz",
  "key25": "47NKisvYAmNKBrLstzARNXWy9Nz9WHoiXQ9hTWAdRiRjKQQLzmLK1dpyGnp2SrBGN7woEYy1jtRFw95gs1K5sphT",
  "key26": "3Ck2DSsJKSWyWynWA7KyCvgXvEhHL8xo8t1PiC6BFXsz7WxgaYHtsXJhUcfUFh8ysqhwgYKKwadWBCfPzLWVmnxc",
  "key27": "5CUrmFFeBSReWdHfX7f5KL9ZSWegS6o99ZbK9Htjorbj6Bw3mEkK8HL1HtSG2wBkN4dbm2WaKYvd1wX1wz5teJuN",
  "key28": "zx4FpTaMJi3KtTLARGZt3cQadpLrJa5Xtu54esk9khthQeDuUXWynCRSixXKUpCY5h11akrpwutBKB9Ss9Njh5h",
  "key29": "2gkDfR9GCGCkwNAWLKfwwmSAJqoDkzYvAx8FmaLpXqzBCyaPQLR7Dqy3ScmZjTKPEpcDSYmsEAjW4MewD3SccXLh",
  "key30": "2GLfjmMLo3fwXyauah7TczHgw1UTpgvZzua8A9hz6r8GJocABGPYuqEToZiFM9SELDx5i189SxAPGyhvbZdSWfp8",
  "key31": "Lk8JEdCyJnV1zc7xVuegxRB9hnfcktN6ZC7M4wzP3w89waSX38TDzbLPqcDStBccyXJbFD7XLcGrj1LRMMd7PJw",
  "key32": "5QWHFE2FzPZZA87orkPdy31dz2WQSdDMcdjMS7X9Pqf3A7ghN2TiaV85eHGZvF21dSBtr8Fnm6H4sJ1DKbxmGoC2",
  "key33": "2WRRN6PVEQKNwwhdVEkjFeQj92mfTssSX2kA58Mr8LL1zVGqRCRWWY1RUQwV4W4DEZYyCqWbeuN7DGHCKTeNkq37",
  "key34": "4nqxZYFJhNLkNXsWgK1NFhRox3vRjxSAMhaUAcVyepiojTGoCqziLUYyoNiMi9EhCDH9LwgQxZUaHg4U8RLspH9L"
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
