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
    "3uytHoNEGeZ8Gugbw9jctxaFGNZUQpQcuAzW5vX7j28xq42W6Pz4qU3xzWdqKKThDkM44nWFyxoCDAQ2S3uBTJBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RshK33zSCXXC5PHfqTAUoz1VxSB34bbu7GqrotLF2RkaXUwbjqnKjWjaMoC536on9Ed4bfGCU839vgUZmjJr92d",
  "key1": "875V5bJ2zKKFYWbR7PJqgtPqRHH7fyVVwMEjfrLJDt65yyFEzfyqDgKv9ioHYKpv1SyfxEENSEmgaWoa6Mn9RAM",
  "key2": "2PA15AvRshFu74XrmeSpzsGLpu3LqaCB3QpUWLb1sgwn29Dfdpuy4n6MJVk9zeD7Pk5h815cmTbjf9XkMcforGpU",
  "key3": "CJyahHRHMV3dP1Kbe4kDdLr8vWtx8GZoBafP9iF1xfUqhXg5MrzqzxATubHUHTBJGchXUVFkjtZbMHymRPADMXa",
  "key4": "7do5v226YLqwU424ogU2qnTgfaWePs7cZBAXA1u6ByPdBoLisMqnvgdvM11gGKmd6pcbR5n2EyqjPUBA8RgKDSn",
  "key5": "3GnfkiDkVHhsimzRmkBQ3FgyzuXU3rs1RprDWWH7ZPy3ASU8LGivWRxzvzbV2r5UeavijgLebN7xUqJUor3LrCHV",
  "key6": "65ePU9BdCE92ULTNkrbHT6D2ZiY56mrEWhYgytDTZ92xVeEBy3jTRSy5ptkDDrBnNTHo8JnxnH8WTGgnZ71r2MQU",
  "key7": "4KWDSdGTikLJoAhd1LTK3AhftZ8NAd79ZQup7kYuwbFbgxLFSa4aBpYhVAm8Wgq3iCSKxeLbsBnvPu5KhxCFR3mP",
  "key8": "24uAejCiYyMRNVrVs4XArfiJ3XqsF3T8eyQkPvkg7ocWhSu919JrqPiFRtVe92FMyLPRL1NuJsbVfkgrhkxJWpkg",
  "key9": "21rw453Ld5TxZ9oN3mvvGzHEjRNRFp9Scv3rX4bcbbXWZsSULkxYqsmH5MZaik6xWQ8ZRheHjoAo1a9sg2GGivBZ",
  "key10": "5KLGvesJeXiZSkiC1yd5RrvBpgFpSejHnUTet69y1hAaqUEEP7LhA92ctRtTYaxtn9X2mvursCQ7C4C7bMZmSXYH",
  "key11": "3ugpJbmajDyU7mUsRGPEV4Kj3UX9eyTRCZATqGiT48UWRiFuL3vY4mpSXLYuyjqDHeqhguNyH5QoHeSiRHENAuFg",
  "key12": "3N1eoVn33JqG2e4q9xF49x6axKdY83Nrz5pjDGdkoy7awJoNC9zsd1zMfbRorg2KYWM7DywmLSK6jGQ8wbScRSWJ",
  "key13": "5UtJnXexnxbnbgUpeH2W61CNNij1Z8wTCcssepBUdMn3cgF9davwCHM3ZLV3CLE4JS1sH9mRkGt8TzXUFoBQPNmk",
  "key14": "2DAuS4H9C2rDXCjMy8T8DfijobwvxhZWGvtEj1UpKQ9cfFzhcfQLp9FhPEn7HQanwPQ1pYTUn8JDQiWceVrC2Pzx",
  "key15": "Sn3fWZ8wVURrHLEf6BUNEwh18dzfNdozZPmTJ4KrJoassjCkWB36Yb7UajwuvQgyJgSmEWfw6Je1PKQ8sKKZiwq",
  "key16": "62J21myqQ1JudRBXAstgbZcL5uvmVbMPNZPW7ZJv6Cm4FP3tZU2fytCCNZPiDHNFnNRu9VbeFjm4y3zNcHTg4RZE",
  "key17": "4GM4NctWkYq9EMJ47buvYEfb8udFmAG2LStEik4W4hi6i7pKdrqTn31KoADaPeyi54aRUFmae2ctpsX7fVCHXMyw",
  "key18": "soTKDyums2fhcec1RjW6ZPAiB9s4pVpnSGpbBryEBw7t9A7MJbUFTBc7GrRyc9kxuw66d5AFqnwUqh1kj7ym38Z",
  "key19": "BEQNDdJxWHV4pKYoNGeJnvw6tFZAAsFyi3t1fpvd1MBVwQ4osUEQK4FHCqGzh1DRNBja9pfcfAdyEcCMhfcZdgW",
  "key20": "om96Xn8YFWs6DqK2EsUPfdLGkFBugwZNtS968mLsETTRgLxVv2QtuwU6W9xjsXkvMcQ6pajQ4M2coHt2DqUVVba",
  "key21": "64pmRGNxMQycdRhC9E9p9zqXevGqWC5ALCmgA3NQETVpci5B7xcs42pwBc51eo9VJrJkiWqb15f7HDyHx3KRGgNA",
  "key22": "cktbs64paYyNUSNV5yxsKjtgCaHmyxg7f9fVA2n8V9L6ownMgASopXBDCCJBpDv9hCThZ7U83HxFG3R8juJWubD",
  "key23": "537L3w7qVn9P7KxVVPVyb3oMHnsUzCyzhdx3bHCAGDWkzzE3txeXdAwX8V1cheMbR7RDemXVkYjMybboz8mbnRtJ",
  "key24": "u3386wfYMZ8yp5WvE9jYUe2uo8aAiuu42qeL9F5RLeDxz8WfKC27ttc9HqPAN4v7m625eiWFdSNZWYFx8P5UVoK",
  "key25": "UaLM5N82LnibD9erU3vceX3VTkSUK9DVU8hZAqXW3XzaLUsXpEemBCWbk7TScmy4YZiBMtpYiQGhmka2Rw4KycZ",
  "key26": "3CJ1Vjn7aCVCH8Tz4JVFiXC1FpwnDcBjdvJ8hdHVwUeFXyyevVDPxXWNFDAapqsNjN3YLu7JCkxp1pV3R2QqQwuc",
  "key27": "3ALRBjZEUS44x7B2duogqsiN25cFVaRQTnHq3Mk3fDzrgkMJsk1mYFPFSZLyT99GLnsaD1pBW4DDfZ5f8L8dMQhh",
  "key28": "2DMCkXWgGFdhrvCxFZjEty9abbR1drwoQKHyWJu8hD6pTtRdcCiFvySS45WVTXfKsqYZn8t9275Gc5xEP7g8G1Px",
  "key29": "4Dgtn1DGMskiLdHxKwx1LkT9ixDYqZ3sN6gXJ4J2iDr4mcT4UJRii2TSkPhogoBypSx2DNZvN2BsC1VzGq1toq4A",
  "key30": "2qeiBNnvuh6zHYXaPAUAEaXkrDd2et7xcMyfXaRXDURDFB2DQPixTW2iuPprSwM29qVukjjrzrUzyASkedDc2qdP",
  "key31": "4Xs7uHRcKmdNQVvYmLNMZmjzzgDk5MA7sinC6fcPKWXSWM5Cxn7zgqQpvZU4TTsYNKSBQX7SnXYPd9bbZVwQzE8S",
  "key32": "22mxdbjmXSeXtnHK2ueryV8aLSm23Q6gAwCjwE2t9fccKDZsJk2BLrDEEPjLsXDj5W3PST2zUHoLiXQoLdewEEHS",
  "key33": "5wDdJQTvkJrivBmyczhMmmicyjPLW23F5Xdp6zqcW768JgniUGaJYKx1vSavwjMKMK3qmEd1Kpx5mhsThhofcp57",
  "key34": "2WCjdeStuFC5AM1ifqz43K2ZYZFvwyaujkXYG46qS9ZcbG8gsFmEahfWFUo4NaMmLZFy5nL72JhPj9boEMWwteqN",
  "key35": "2taJUPTPM31kcckMML2h8RsQCvRihrziFZvu3DZXeQqvJVj4LUAQL7RyFSDiTLdE31BsyHsMg9DEWmxzPcQeeVSg",
  "key36": "3i9MvGc2DNPzKuX3WdAnu9heCparneonrEdqWRqEL69LVNyBLqPfJudJDdGFMQzFSsPAjwYqPE1JcMFxYDjohaUY",
  "key37": "2KJqdq84Nwuy8RUeAeDv9TZJcFrxsVz8ith9TDeQP77KTS2f51f1Amuta1QtNenNYWf9SPmkcpzjzrPoVR6zDLRi",
  "key38": "5uLrnWi6r5YabweiyeWz5UT7vWnQidDiwsq8iGryG2UGMRpuVCAg3G4EjT9nmKMcWymCBBxJB9RQfSLkbm7ixo78",
  "key39": "4WQnez1AaaytwfzNpL1iQ9mBrdj6kVKC5QP7KvLMbQGxB6PF7fNjHuk7mgGQxwLJmaGDvFwqX1Sn3YPKihYY641W",
  "key40": "2a7jCs1sSAH27vYgV5ef9gSKUVf28wXGN6nrcKtHB9934K3fkLQJZghXo2XwtCKE9BraaZDPP143R9iD5hvi4z28",
  "key41": "5Fs9LCL8q785XZmiuiepykm8P4TYJkokXiXgKo49KFAHi9ofgNq1WBVQVpYM3RQ3XaCu2K7zuA3HbNgJ1PohKJvg",
  "key42": "3uMeci3fi9JJQfSBWfw6Hovu35th2ZrBUuKco9WU3gEmLtrnhwEQooDRQHW4oje47HYMwrxCSZJDXRWHZEJAdRjv",
  "key43": "5VWpXJDYUNdJftca2qVLpzF6jV5ifCjnxzLt2dqknut4nEGSvVg9PThkX3oVdPQ8D2LARcqPCRUqhX4Z5Jcc7smh",
  "key44": "3pxFStd4A6mruxErYUJ8YPX91PY2ZrSue7dkDzaJhTCKfX7T7gNzEdVHz3eZXVu1faRLCVKquXodBhCp11pEoFdB",
  "key45": "LJrEo7GzSp1pb3xKYq8ErE6NCUaRiZNP6XhaYDhmKzKfPjQycnDdUp8oUprB5QxnQQwe2ntCvMrqgNnxe9JhvS8",
  "key46": "3FCBT6z81vGQoR1Wej3FNZ9jbPrXCJLuZpVhSd5wuqMBg7N78y15bcvezcGkLsK769ChVkVt4hiSdAfJNy5z43Sg",
  "key47": "5oBYE8hHNw6VSU3WiBq91kZwhQzAHFKBw4QNiUktBb4PSDiEapEKMSBxrScp98AxGYvX7oo2HAHPiqpnfYBQsydf"
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
