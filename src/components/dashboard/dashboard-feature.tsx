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
    "5MMGWo5DrSXMQm8HHGscEDHShonNhdauHJdDTtwnvRznEKoQnC3TyPRLExSb4AFun95N8zLCA2SsWMawR35gMym3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tUyZrkLzQTvb5ev4zuS2Rwd5C6s2rSRbnPHW2RzkphWGG4XZt52u9tuc4SXjuUTxrMPNi58U8uJmSA1X4zNsUNx",
  "key1": "4eDfotMGGfsGZbhC6BE3hskc3vsLSaLf2rAkJSSGr9Lo95aDJYWDGQwkrst87pmEfPWgTDevEvwCXFyFawCz26WQ",
  "key2": "41t2QuaJBq5oBEpVkfCiru6JnRC953Vu5WKEBa2PcPuwq2PcCfM7CVF5MBUfJnChxiDb9Z6yFS6naS1XJZrJe2cb",
  "key3": "671oVuooYT5oMinCZTvUL8EPuL5Xh4g1mfHHCopfP4WvWMbJ921neB1PTf1oZGsFgT7Lr4ygoQAXSpE5cHemEicE",
  "key4": "4z6SR7UsJGyWPAm8nxL9fwNKpbaSmBsYZBEFyRZWcjUTX7ua6oT27v3KxN6qRxrHSbNUo3kFuw2MmLhXnwC8Y6P7",
  "key5": "61HxNeNf6RVHnQPYh9CQw7BbXmhrLdnWT4c2yxGStFKV3F89T24FwHmjRKgqb8DjPy3KxGY6e2fgN13mCvwEf3Tc",
  "key6": "3de4YtUPrNf4pdMnLD2Y5WNj1raq8GixGzvH5RrYvY5kQzMRURjiZ82cvUiJQ5RTcdTFYqG3buLQp56JWKi223Y8",
  "key7": "66zy148U1USzmbTazRwZR85p2N5FCJZLpHSEhXJX2SMhbGReiceuH648Xii84VpNH5bTMrJ7vc5Gj2BrVXfDS2Er",
  "key8": "5b2YobwcTCFQDhktrJGgkaUS2c28enrg4TAMNy14si8wqrWXexZbrNbCpNSurtvNvE3GiFTWpMtDmYFxGXfAa7jf",
  "key9": "2s1mVDd8uNQ2S9iwqXAqwokz8cTCsfHUcsaXmveMP9EBi8vFT5gbNaMsr6EjuqKZzhxfV6tPVWXZYSecrupEL1Ym",
  "key10": "5SjyW5ikR5uwuVgcsUng5Uzr8kws5i9mSTjJ4W2UqyN1CBUCrcHQ2XRJXCzkGS4QPk1ah7PjSzvsbFWuof1EM5n2",
  "key11": "3VmJL8XKVC6dkabExDbdyJLkBhzSAnjun8H8vPyoLpC9GcJvbi2tGn8zvU4uavAdm3AjTUvW5B7G9SXtKQ4sVsd1",
  "key12": "2tWtfYrgJKgH53sG591cRfEVEtAiC92a54KWdG58rU5yZi9tnfQtz9K5urSWpRjdp5APYdLg39d31f6p8FcC57o4",
  "key13": "5eKpJkLjkCHGqKUoUjhnxSFWQDwmZq6kayRNwKgEk1gCJXv6X1QDgDN3GTfjymuazSwVWe8kHvt2FTXunu54Yovy",
  "key14": "3Kp8Z11Dssg9Jv2nhd5HQzgoo3QNCdHozki3H5mrSQd56y4ESCVsUShfyUesdVrg4Ef8VHxsQAqookEGBXJ7jUhw",
  "key15": "4xyerF2LgrdUZZUXUZWGNfGoWJwqKhnuFVhKGmVQyUWHqnv6ddiM2CzqxKe75CixKo1wvE5vt6HkjmyuQaEgGVsC",
  "key16": "32k7pDg4KPJm3W7gHHWBUbDcSCwJJxSxEwCMnFY1QhdhR5MJCR13z5Q6PiYM3dh5d6awrHgthFJ5HjqGLPPx2x7J",
  "key17": "5tfxrtVEvo85i54wYX26qeeeiD5mSqgw5rzrQzvTHG6wcvfruELKkokQySUgHE2MMnAr8JViUiyfNz4AqGn31MZV",
  "key18": "2Wk97TkHG2oFu6EMSThSZuTErzWD5VwKEgEj8uYDapToWW8D8GjzSWBUSZzPiU4ERgChgNmqmdwwKQL6oG9CNcKr",
  "key19": "e84eJDgPp8M3uuMFQ4HzsaPwn7uMiuBKY3tjC5K1UEuww43BCFPpzb2PQGhi7HRCuVz9Hh3CT1GqC3L62xrAniM",
  "key20": "VAuyPwAkdxc9QhrDdvbKyo6c2stqas5Vv8nxeTj2kyQD9Apv8gRUvJmsRMXMauPjLFxi1zAAFboh911WtBhThkD",
  "key21": "27yYZAqX6xvYpv87ct13rsPYXEGegPhxUhGhuU5No37ALF1UarRjUN2Br33oidWW3o6CFHimbF5jf4z61TXpGjhK",
  "key22": "3HTwtgmhjTm2oV5BnLXNLWjFiTfP6JVRfF8DwmzzmaMhWSWXh7mZ747125BwsBS8UDmfL8nnMSnWo8xDhnCoxmtm",
  "key23": "xFEuU7fzM4JC3MSVRwN67MSZciKhb8yZUFh1vA3mRjmgqsse3BUUhSqntz4DG5gf2mRqXjzak2PbPAV4hcPfER5",
  "key24": "2T6kx8WmbuKz5eJcsKDkMH88uGPSQeUsA8uBPxh9WDLoY8XDi8M47Mnfeo78e2J4qao7ft6hwXFvesBWPCAE63Mz",
  "key25": "4AP5BrttrWjC6L2fjMnpJwckyA4BjuTgy6hraqHqxqscjnEWFTsqguY9mHcNLmUz4PgFAC2LbJxnDbCNSCRgxt7M",
  "key26": "5W8CAnaC4JARyYWS9yVuwYGba62bjuv6NQ2g4Lgqb5tEfUYEAjj6dc8gDayspZmP95SgdAakFjJnr2EsjV4dXkzi",
  "key27": "3gcmPn2M1LjuWCWUsS7X2KDWZdWmC83o2hiuHdpFZRPHeGNtso77Nke5Nui3RKdkLCiY9FVHgwhPTaxZfnzFBDfa",
  "key28": "4dEZeMg4Ujqyv6B29sBsxfKYC2iwpaVfmBeoztJCfd9PTMP6qDijUpKGGejLXjKvi69euwUFZLgAvkMRmCFeVQ1Q",
  "key29": "4s9t83odzvkRZK6kezXxvYzvc2NgzLM4jrZMnHrWBAr2T44DYTsFip58o4JL8nVw1zQXJ3sEpjRL7grjXQg1Vpno",
  "key30": "25BB2F5syBBuR9pgcNHLUeH7UMcSGratTsUqomqPVcTrPyR7tZ92W8n4GLmS4QHdQY1t5E7cHMiUi1CNv9rVyUnr",
  "key31": "594zmQrteXkhDN5iSyQcB26wUeetAunxjne45n8hmyUhHQKzdKWnojq2moMfW7gnN9A3Fn3dNmFre3bmPuJcaoNc",
  "key32": "ELvoaTZFzwoNjwsqYgz72TPvBRWjBy2Xtk1UDTjCAnqcux8bYTw4w7kHpVMmJRD3vPXvXj7QUSFuQnUdmWCBo7m",
  "key33": "4nAW6AZMWkFK7uHR23DuG5dCwXFWHLAuiCM66U5UvjeHsUqba8d3dNrY8CH7HGMrrT3EgViAyBFiSrPDB52RNjPR",
  "key34": "29fPxTPXgQU3WHyKuiiVyASETtjT6s533aoeFpmVa2VBi4L8dPKVCLq1ALrcCFJZmafiWb1iv8TY1fsQ7fY2oZvK",
  "key35": "2GjepNhCXWFhe2V8BuAUNoG4Fe4zrbgLf285qruaQFNR83TD9XiS7KyfzJ6fQDJxoUnVB4VuwEhpxVWw1uRvahjo",
  "key36": "ky4v3ap7QBfEpChP9fzGc9bW8pvYEgVrX1bBxHFmWNADCXCrYE2fqgZ4RZ7TmTQioP54wrw3aNAiKcbsKmw2UAg",
  "key37": "4Up4rvtLefvpC8sAkt4vAcRrvuYUyMfWFUWdLt7dCWyDMFY8drZ5YjUKC8hCWq6YAcHYnbzTG1j1E2cD8n19EaaY",
  "key38": "5Ah8nyd8JsHRxdvuW9Mv4iuRDYjs84szLALmuUf6KbBucVZz31P6x16pJQpUPFTVKS8afncWXJEJ9vuDE7QHrRQj",
  "key39": "5teRqhbXyZA1je7L3aS4xuesp8ephBiWVn3Y2wCuqR2KZ44hAWTQ9skhJiAHxEsydKBuRMHEZmLPzvXTJ4G31Bqp"
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
