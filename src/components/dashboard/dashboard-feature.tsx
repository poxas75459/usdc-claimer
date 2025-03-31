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
    "4iFf525s8Wk5ckK7VLHUpYNYdEAnjFhJdUCNHBkEb31mFpqHXtYe42hmqABcPNqh4JwHJz39PMtiTJMGKNTEPQyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKPSuWmM5TQkW6d7UGfdh9zje13hLHxdrJhAPgPJyVm6RsjbR5DYwXncPPcRLrBiZRRMmqWqGJrMU1iBvP3fd5u",
  "key1": "326G6FrfUrZRjPbAUv1SjgcPhPJyePkZ5Ln5SP5q8zTqzriNQDXsvVicTsj8k5Zve45CBFbcUMw5KAXfQM3Ng9b7",
  "key2": "376drbJSUjQVJ7HCyQXJVyAkARRYe8qeJLoVzSyFVtW7Nb7YocbuEX7CL6jW1kNNKf2h2jV7YxTD7mABpM2wWU1D",
  "key3": "4aM7rT3gidfDGYMKvMk51gS2kzZHA72MBdpLHwbuPerMk1W1vqViLZerFek6uUeR1CuftcACviTKa2nKqKVF8uq7",
  "key4": "4TrhtAzySuVGQ98N6bkfiQhrKj9SLLFrr84e8iJharBMb8RMfTooqNYiJ9XfYsZr2Qpapw57QNDv5RcAzz3GSBYd",
  "key5": "ih6yXURvS2mTavQs2Utgyk47znKGbF566AqA7vo6GdSciaDmrQqJAHFdscwvx6d64A2tiSWT7TgmGzbQa1PPgS4",
  "key6": "QUv6cavQ4tL4BEpncZawaGW12j6Eytpq2xpyBqFn6UbhJNmZVwkkZvSszPCCUxxXVPUzQLWPfspEZyXj2pQ7Q9J",
  "key7": "49N9A71iHCAXNmp6FLN675cejTsjJN5PVskdALwW1P2Zi1Wsu3vJio321QzWYK6YcN7sr2RTFpEA1FmDUykPQjaA",
  "key8": "3UBjLxK8P7pMUEJHBYVAM3Xjn6fiBB5rSajQFa1jseeFdSGizgtXQxu9EJW4G4XzWz2vVhtPFJzT7aDtVDFohsX3",
  "key9": "5LUT8BNWaRiDpXNWXaXunN7Nvu2mA6puJ9dJ6sWt6DBur4zKdbrNk43NAWnnh62chFUWsmMzpXtfuk4thrnTCrZ2",
  "key10": "4xQhcFzUUJTj6v9VmcwbhYM7UFJMtnaPCUWEqhG8RVKDZRK1NnHk6cCXnDnWwKCuzHrJq2t57d2Z9iPRQMPCw4hK",
  "key11": "eXCNRcWT5ReTAYb4VbccD1LiLTRAgM7t3eXFFGar8mLc1as9oFFhvDX5Dzc65n1MLErZrsoeQaBSJFR2B4mvENy",
  "key12": "cG1magSVjANp1GMB5gz3yHrPyxhwpiuE6JhQFWdhv6vts4Mxk7unkRQr4eo8ZGUg7awdBXadatYmPF7BZws9FGt",
  "key13": "j96JmtTiSkLW4RcAzSiH2QSCocQg15NQm8w5uw6Q8hiKEXNpMkXd1ai4nKNDFtoot9JPoqgjmAkpgvouum67qGb",
  "key14": "5Mn8wsnuuQ4ZcfQstZuCKVzB4spFmgHKPCs12FA16pHo5Hm9sqTMCgS7CabNS59QzgEcCj48XoRos5NBYwXoqNsx",
  "key15": "4FPAFMzQiWbB7VAHkFpc5XG4LuGceQYVdbR7pwZxVabLjcHJiXrcaNuYKqbEXDhnos7fPB1G2SjzybySvoEaL53K",
  "key16": "2VXqPBwJiW3rAdAiaBr8rVLuJKnzceMdjrdQMMz1hxDcLjs4k4XS6YnirkZZsr2Sqe6TbAegKZZYG84EfQ18dpyr",
  "key17": "3XDf5rD1Xv7fro5MpTk9RpvZFr2ZMmnqApN2nHhzm6QEPjnSdUXAVvqddqrxSYgrTdsSpXy28Pp3F2BH7rs59hV1",
  "key18": "39X3vBpQm6sVLbqwqjkr7zxFHUxYKEwjfWqspQWCRfRT2AjKZZ3Utj4TWLDpSQMG2WqvJ9qjZ8WnHNRABbchp9e2",
  "key19": "fjVhn2UeRrUWTexxwNp2bPxqpejiZL5GyY2DhQfgJriz4dhADb2Z7YjSrqfbVWanZySVhiqJNEqCX5TxANsbpBe",
  "key20": "3PqXjeux8WJBKbUtZ3XBf2LezuhJCzvu3NdYWabvQ5neriZvXkUMJoRudMctTYVLMdK12fpsc81QLLYDnhNECTGg",
  "key21": "59CnpRAhED7LFRpdJpQxVDiYS6vun6vKP5awSCXMT9bQcduRxmAJZXE47AWacBAstZprThvqizfFLonD3Nk4vi9W",
  "key22": "4AE6uhJZ3paS4gRgD6NnegkpFEsBgujwiwF1uUWuycnadwvufxgLR9rKHgX81aBocRzzeKVCBBsQtv3w3PNdgyar",
  "key23": "4Xeha55rNQR12Uycce7V4AHfxQkvpLp6aCXUDwAj75fMNZHoMUgwSyD9BmvbAo6KWpijUuzWzqh8zLrTYP5r7NbH",
  "key24": "4z8VYtzsV6h5M1EVvSN32KBtkPbm5FqaSSShdfro8VcqYh7qGypQ424cWmmLbQ6AHtwfc1ds8Uk8KKZoMoK5rZSC",
  "key25": "Ws3tNqAPq9JE2GQygYcZpvfULbcoj5EsM6bxcMudenxqhsZdFNDdkdp9oPLuEeqhTowdddoyN2rTP8jXHkN2CJ4",
  "key26": "Sn8UJ6Rbabiv3EKWwVgqm97h2QCdPU9ppxQgYbWUWX3YX7c8o9uhXXLvgq9uVf1BQFin8U2piUmzL8fKWvACPWt",
  "key27": "SeGnaPyREeCqUvf4MHs51Eh6FR12n3BngWfTp2SLz22P7tNPEez8u7yUYEknv6FDFhegEm3DAPxMsNKn3a7vGvC",
  "key28": "2oZ22fgqWvD9Hz1LKZdoZQNPK8Ht97hhit3KEXjuof4rY5hLN7fvEjTpsntsyaqzzyqqQoWWWuV2rQ1N2k2Xazcw",
  "key29": "4Hz359yBNqJkT7WLUadgmGYSUXjV8ZBm4TEkuoNqukoxcg5r2VhkcEz3ahgzgG7UZxQU2mWHirWpG1yedCUBvkm2",
  "key30": "3PUHSQ6rHzULtuteoK9Xi2tXSiMKsBLJmYcCmjQ2z68GW9x1fFnMUVACHHjyNvGFyzoLyjoHxd3iZG56g5XvFS6R",
  "key31": "2XHoyc9WBPzGFX73P4HMspdCrym6oJTNcAy99NGJYbCRuDgGLKxXYrWddbquTvbe4duvBEb27uwH3XzpA6bxT6sF",
  "key32": "2gJcy6YkJkoMMA3Yeqghbu4WHLUCNf3JSc4h8ouHHUwpcJch3mwrb4c1NnypMJhP2vCjtKhYNgMUS2JsUL6U1ZKn",
  "key33": "jxbwsqkJFeP7NPspopinHErE1KZ4Q3t623BYYh5wwq5VgcumCbesxwEeqvYCExkFVDZFg7G1JzEcQmoemB9aY4z",
  "key34": "2BFjyXK8MsMUhSwKtoKrEPqVwdq9hHE6Q4ca2ppea8DDEjdC6tqQEnQ3YezknjC7fLyCy6fJmB6j3HcEg8YFf6Ju",
  "key35": "ghLmJdewd1Y6vpN3S3ziysXugrUvHK2VC83et84qx99eigHiucSHLcuhSqSqVETjAoEhnejkt3zD4Q5X8b7BJE5",
  "key36": "MyYxv4dNeFGidrjUq9GhHE3H8LSZyMXDqMkiQnmUHSb7mUYz6RC5TtxHNoeer8fM54rDDdpgcNNyYcVHxuWZiBe",
  "key37": "4QGroJCscGjostfqQ2RPDB1tNecbBLkDAx6NZJV6josRwa3mjRwWrL9Ed9WvDj7GsfMXoAVHW6wmf2z3ghrSzxVn",
  "key38": "4RWkjFDxgw2t7jZAWX2CSwC4guRNWnj51JLP5SfBa7NHySDgLy6YwfZZ5jnSdgDxbQtjxnXLShS2ezH6rdyeygiQ",
  "key39": "5v4Zfq8spN5jqAigq8sNpNYVVJxLGnYsUgQvvCZMcSNDJXLdkt421zY1Vr9SsFBvFtnJUkzLH7dHX85FJ4JeW8vv",
  "key40": "Kr2cukYzBoaxYZw4fKwsDqVKLP17T4af5xZho5cCD7ZkzYUtReZrmTsjFBwA1d2yan5vWGSU2To56rC7bUQL4vc",
  "key41": "3A55vKWh7rod6eCQZYECJgNJbuz3smzDBmqDFPwZBUvkUVBzHou6Mk1fkLwnF8a9K7TkEAt11rVp7gMtKLRm71ZX",
  "key42": "32xe5QBcHSBGfBrf5k8tYUVBYaEeHJyXwJVh4aeH4vxr6DLYPCi89VLF1pw9DkpevZux4xLaUmScSG3fd7DhQy43",
  "key43": "CVidD8QMJJcYR6CMeb8RKGkFHQ2a7Utn8r3MRAwREooSKrDZuteTJq4fyRkEFXAfcwg3BVmekKD9jmcwARcZzWF",
  "key44": "gH7m3SLHDpsd9obWUAx8pfn8Fu72a2YGiidLk86JYmL4kp8e1EAQiJeusc3aZobacjq3TsxQhXcbh5kzGQWfuSv",
  "key45": "4yuA1AazDRfje5VekfEhmgFKwJYPVytBstKoiMQKSVN8KBN34uDRHaDfHiufgSmcz1DJKEjxXDCVjVQouJhNfuue",
  "key46": "4buQUAQf2DtZewmMWiJubvq31XVLC33gX3pmacThBeUKYE5NVvb5NJKHhnpQuHFAi5GASWrpgyQq4FByJE8Y2Y2t",
  "key47": "8ZfjPFEwUMx9u3M6MzPBheSk752nZS3duvwxy7mH1TUtrfGDWS7XKdGzNXdnwYiMcPz8MV2T4szRYBr22L64trm",
  "key48": "3a6AAQAut4HRpu6RSCdaJw2eQzEYsRDZ3McgjDEukGrptbmQW6CAv99RVhiYitWAtAkoHRVdQgJ2mrRavPMBw3rM",
  "key49": "3vC6DTt5Vt5WdCeRwF5ZGc3ajD6h23s3u7rz7DN9SUQuF3JiXGywNs9J5PRByoSabQnNAsxDRkzRRwfkxRJDytkx"
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
