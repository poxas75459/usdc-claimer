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
    "4RKQwybeysTrgcPvoLYGztmWj5NXs2SVezFbv5JrDd4D9pYaQBWFYoWghwB5JgTPQ55KYC9fQ2Xvhk9w84BGx932"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJCaBiMdB1YM5RVLxkXgAvTggX7qYWwku4NKYEvAxnnksVTAzSoGWrmBfc557XYSdXe4Mm64j6sv5bbr4fdaeds",
  "key1": "4at4NPiC5ZYm1YEE68mjQ47M56JMc33b1ax6vyy9x3TijiULKMnm5uJLNqd4kFdyb39rK4r88sj2EvMEUcm43kSz",
  "key2": "4dVVH47LHr7TJfbck5VGF2f5hu54cAAceS3FkhfqDPPxaDAAuvH1jKBSVgxh7oPbg4YjEiN2RLJ9pjSyxcDXzdKc",
  "key3": "AneCeAGPPQoMcUJG3DYkJTzS5BFfbnQ92wJqr2PxxgimEWNP6P8BZW46DSKmS7hUMZjZMCj6GbrUT8QmPCygQiB",
  "key4": "2jo4ChxzV17W9wUXpDnmGTaHPDW7wpUDn2dEiJNFXzQS2q41km7PG7rNLQYejwFxoJ7Ca3gQ2ErarjJeZ5ytGUd1",
  "key5": "RRHe92cdQ18AGREk6u3Y3hCud1RxmAV3YU2ZQKHfmJDpzz7YQ9CmPiNod3e9Z1kYxj1oTXD3E8nfv6kPiiGLeq2",
  "key6": "3YyjVs2NGrMuNDaDGAix9WpZkLVyeckH2jsYEPXTNXwoJmUVZr2h4uuVbTgXty1rMKZwErjAQ2bd2nDQiMsjGXnB",
  "key7": "kDcCz81XpY5LSgSU18ewNAuPx87iRyZLx6uPTCw8gbhAArH7tbQT8Pnj2oQYZHop81e14owmBGqQniSE4uj77GW",
  "key8": "tfM4VUWKkwQYkrXwuVzUGxgDxcuEopcBYE6oRN2ErRvJkzhcAD88bFKtJ5NMTRh6gxr58TLjCmdtg7vASkrqX7z",
  "key9": "2itpdYvc47xpGnATwxjQ7JuNpujEoSeDMbv6TuZYozsL2izeamENjGj8cp3QqCiYVQcN5kWjM1zTyTTX2YgzWiA8",
  "key10": "S39dYQSmroTwixpfyT9BWkffR4JtfurS1QGZE5fFDpa2cxSEQHrZv1pW6ADDGGzvKYTUfrRvBXHWH5k8EgQ9bnp",
  "key11": "4nFkutkHLzQVg8GCcAx7SUdH73fZiJEGA6ACQdGmUa9mFmxAidNkdAsCBqX5PyMJMevNHVgeiMvVqgusu4PX4ZfA",
  "key12": "2gwcgajEkXvdGabxbPuyKtJimkizrXcAW9GBf1xe2HNR88JybhnQ4NuTn21Rr5rDVugM1wTRJz1pMcJ2RWVR2JPQ",
  "key13": "j8fn11Xnkba1fZhjXcEpt89a5ouJ8aTogk3bcZaogMSe2ZsgjDbovBuSCB7UTAKGijSnsxG2k1YuYLYsTiksGbM",
  "key14": "4rWRpdA9XrE9N6p3S6SyTkxdu1EY4Le2WYu9tG9XVdL2W6Jm44zuZrEcEdGpHwJc4kzkVjJG8ZEjUou5EcfevY4p",
  "key15": "66Kep2PTBZ6zNWiYVkgWdzoEJph5rDxCXVn6zxS51N7enkgjciskH9QgLmuXawFmpAiaUghyeEZP8ovGUieUi2w1",
  "key16": "2uqERsCJXis8yRnKopUwRiBUxNDjaYwTMFLtBUD8emg5rYNLGbEDnvcCDRteuDor99fpTbNUuk3yYoENKqXnMHrS",
  "key17": "5PyRZG97GADU3pqqrvzRWYqhJ2BhUi2zEMHnjTGM55fVq7YgkJfbUwuQqF6z2ePmgqDD5tsFdHZ8EsGZCDG11TTz",
  "key18": "5LxQr67FU6f23VarRojx9FBdfLv6hvHZKt4Xwq9zkHdUzqqBpCzcnmUwzNAeCJNzKT1LLn2ZCYUTa7X8xwVjt63e",
  "key19": "32AsTUCY85nAxQdpHQ82zKEsDs2dTqcWfP5a1TATnVTPtcSHdTVjDV9gFw1VUAG212eMTJzKDL8A4KtqEWKpYLBY",
  "key20": "w8N5FJwEKmC6C4nhQUePMz422brhbp5vXHsfrTXE4PBcEtJkMwfwQu8TBjKTbMwcMZMgHTqbg748Y4ySR2KeQHB",
  "key21": "2VGy941XcsZMGVCRjt4hePUet6VkeeSgpYVMPwipsvJoaTMwNA1VdvN8PDkGLeZyP6AZ1kssES48qg3KK664HTzH",
  "key22": "5dhVTYJxACKJp9rE8BaEswGRAaqTrsiT1mySjKfeCwMDRt7nc2aPN7DZqJVuW8KJmSyfgbA9rrLJLHuxrkafBAVq",
  "key23": "49eZ5bFcqQkX7P18GrvS5UyV6WQCG3693xs1HNv8sypS1dKYvFG58yCNANWp35VtWJzfiZnGRrcDQpLw8Qkj2iWg",
  "key24": "54tztF9M5k7wV6eXNwW9YCD6Rp2W7HbUpsaNRqfQZXD2xb7o7Y6cBWyVyxKk28Mwiyi1BRTExKqR3cYTaaTGKTd6",
  "key25": "QjQoUMjJud3pjVJS8ysmKzvQwG1ya81hinXXvr5P4JwXkvJxkbwtLzMjiaWVihebftoBbqNhY1VvcsdN1pdmuMn",
  "key26": "2zn8aXiUj2TDo9BT2e5EF5YGqCkYp25ALbrk7wCFL2aof92ypATDpM1XYcwRnS8KjuMpewj3eRpNqzaejNBKTK1Z",
  "key27": "5KNHPDQ3kqeSeUphZfEAVRrctvWCZRXJr3qHq93bBQqFHRJe4zKr9jy1t37nzGcnx4kmqKEB4mugoHvrzxnJ5dct",
  "key28": "gW2qTDWhkxywTFVJ5WdieW2bDc7qxCREHVX3cdfPQBwUo7YKKki1UEQxuinTraackJy5eqMwK3a5jzy7rGcGn5V",
  "key29": "22AsWnBDRmtooNqgusMNnY5FAUzVHCthF9PY4QwifYCdM9Z8JDpmnEhB9DFiGQ6m88tdx1CwkD7FHSJ2UMzynpd5",
  "key30": "41yCftUPCM88tVt6zbqBormpcGmm4uHjU1VuDvM45PhW88qsa2Zjrx2r5fa8gRbzfJ4DbZmQTsaPfFvqxyvUpBw4",
  "key31": "4tBFuKeVr4emnQkLTH27HK1RQDkuugYaFssaQZiGbiYZSi6nHMnR31Trhj3sk8ZPWjYkvjHXVRxprNRvQX2Urj5J",
  "key32": "2i5GznmUkVoWLqhccrviHMVqmeHKHPK3Em1ELhKhrXH2H1B2xy8mk8PCCHzsskGE9t42rDysLSP2CuGZK8ka52aS",
  "key33": "4QB3LR9tHjkjgnnHPAJaxBcMPbkr2SNCjgMUfZhWkTT1faQm9w7hojvM4yKw7WzroaS4PXzw4nqUnZB6NZmZ26Wr",
  "key34": "5Vqv4TvRcyS8nHe8JBQ7G5Za8J2xMsuLaZLtAjiothrYEkcvo5PZtToPiJkyL4WDx3bjB138hz5URMkikXVgbXXo",
  "key35": "Uj2q1MRRje9gJCXLUjAZyo3kTSfn3N82E2JnARYJr3rY65CdrU71aPTVMhzGXY4XjEqRj5tQErWWTmfEsPfS7aL",
  "key36": "3kR7BuapYsd9HXExgDEUXS49cHoV7Z8vyXeihSQKXetVgSKWNejvCArMgRcTqfzvmKtkgCGc1aRRA5o9ENZwAM3m",
  "key37": "34CtqmbUbBcxEo7ERw3uZKExcV52EfmrQxzU9X7vuoyk47QfbBHKe9v1PbyaQnSVX2K3j7uqXSZXr48jXYRXfsvX",
  "key38": "KAtf1K1ocfd9twJv4kqi4s2Cu2FFYJr48LLbz9yWufWznLuVJq9C86e26gJaFC2Rqk5Pq4YKi8anjFhwbkSSdJV",
  "key39": "4XYk4o6WfoknoXf4H6bpZFdpEF3rkedjyFTmUwybJNywXT75pAwosEPU9C9bDynjNyFDQmszGqHZmNYTnWmg1zq1",
  "key40": "4uZiGDzEfqJ89YbvXCdtuQEjfjKmjmhcTeeWdWJp9NGgCFNZCVCvEaeMtC8wbrwKiqwG5ztz5GAeKqPVguhdr5N8",
  "key41": "ydqoPMj2fWdoWiLnELw2vb26qC6L98Psj2eTVeGjeSvt6pp48fFxL6PjHCkRmYf45tKm2wm3bU7ehyFbRWuTm6b",
  "key42": "5uVojpkXYsMJhSnq4WgV8kFAZ3Uic6DPrH5rVncxd5pTQkXMV9xTGQR3KzfWRHfdpUN2uf13LCMFukCPEG5CBKZF",
  "key43": "27GSbmpwwavkNrhFQwTvFF9LXps9BPpoxubA8sN1kBo9uZQ1cdLnsL7EzT8YXP5iP8oRxcpMryLsTWDYd2AsWoMF",
  "key44": "4TMVupTNMWntqFVkVGoE6wBzwp32oGrm9jkrz7U1TRoMUR4obsNKRd3ZNBbAqDMD3gCypLVSLpQZ87vKTSjq42m9",
  "key45": "2vXoEhYkv7giaN1tWk5ugxC6wpRYVfYzePbzzAVyKqgmcXJQ5AxZgdKuaAmggc3TNnATQigqaRtRutS61Zo22Q3y",
  "key46": "drdoCsHhQwhnbtUrsZdt8cyMiwHPgcxmPdSYfwgNoeLfDqaLYLiciDeLbofPBbjKLVKszXPRcU552ekP7nn4kES"
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
