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
    "39jZuDqoDJp77ju474qtXxJ541Gb9Kv7g72xtTBbziMXoR2mYFmB1n6PAWV1pShSucjsd2XcuW2q3R8smjjbC3dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XYgcqKd5QfgYs1MWHVJg6xyEGj2f5HR6eeLgTtWSyVkMAYH9AjgPoCvMjVYhPeeNauku1LezpJ95ihLHQ92A7X",
  "key1": "2uQYmompgpbgNU3Z5NYm2Nwzd8f27w8v3CxToL87geHTbCEyvK845dhoi7VJc6ENDpXCaApYfqRtAp7QMKVEJGfN",
  "key2": "2aRT6EyRtanwaovnri1qe3SeMC6CTtu3opgw8vnKfJVEQ9bfYr31knxfaiNVe72KBD5UJ2777SaZBuedtVo2xGed",
  "key3": "3UR7hEcg6MwGLFveLtnyP7kd64pN3Zzf6uVd3zLrNpdbK51MzFjb71Gw143drrYpncftXT5W5XRriWbeFF2fbWoR",
  "key4": "3oMPVLxzGPrU9JSJYmH7ZVSsvLDmYP4ZY3PMNk1HkWq22T39KGnuNJRpYT2GxZLMB4JyEBdcRFcBXNu4JrPNTpvZ",
  "key5": "3WHdfYJb4qexcgPxVwWvzGoYdkwAiiMeKzuzUYkfJ3iPpN7AJ9yz4viTCEuyxJsCQo9Pd4Ck7jV1P9Vmne8Hm9UZ",
  "key6": "5QQtnAtBbcGJe6h82jaK4513Cm9x1gdpM78dBsk5mZ3NV5AVEAKgii5RRG9oimxky5GfUQwpF6rqwe514qbMYGhA",
  "key7": "5PW8cLV8bNw8ZwyMt6emAzX2sEJG7VB2eGSUpYNbuRMogQ8eArZUfBe8s5DbpXjAk6tYSDUFRcMRvzALPZ39J7nV",
  "key8": "2TuDRu3LKiEPiL5G3kTXWi6tuBntYMPhsy1Mupen8d1r22dnPc2A3eTAETmSb8M9fXq2mMnRhcLZz86SfyfkUyWq",
  "key9": "67g91ypQjmhyXRtmRpUDveGNdiWdLut5nuSJbxLeEz2danLEYSfrPipyjXjp43nnSMmRWXsPQ4KNJ9Ruj2eUZLLM",
  "key10": "3DyMbgdWECtcrztS8RSYXo3vXb1w1fV5XuMk7y5ga5Wix7wfxii2RRFRc95yBvVaroJ2DWLYf5igv6k6aZPRAV3U",
  "key11": "2H3aZEbWa725TEp2eWfdhsMyqgj9KK5C2u7e73EttVfwZDmgx3kf6sf5aoNmCB1HxgJu53qvVuqYfPjykwdQXzJd",
  "key12": "3e1HynLxa16LAiv7kHcfuUK9eD9tYrXN6ayVXdKtRzh3yrKLYg4Vbf1mV7RHk2tKYzoYHv5RMJBfu9Sych4wiUjg",
  "key13": "GqZ62Zyfr5HZn29YqV9QSqsS8VvX4r6aSJ5DZTMP2rXSHjVAMpPDaJbaipJRwudWznFZxW6b3XBsqi7KR7327rX",
  "key14": "2UmThRbQ2XxFBMB1YAGty7LpX1iggkxi6SX9hYocNxazbtLQ6LKjuL94d93e55FYZr44VbzjFwPSGgQvjyujQb63",
  "key15": "NwqXopzZgNc3PhkAXSGVXpTHNipR7KqjfZBHHVGK5ZZLS3Moi2xFaMprX2f86v5wXX57GeAdFhk3gTwdmfsHTLh",
  "key16": "3dqXUVEnZMLUpXQ8fHz8uj4Df5hTqBk9DQwuytXEYDptX4HQRPVvHoXcHHwcvMPyvGcQhnBExqV7UfvXiCERhEGE",
  "key17": "3s92ogAkSJmtZbAExktjZAnrq5DS9yNHgNRc2SH4xiUHGjU5teWKYPLjHKojsEUjphtJNcGoocVibPYY8koVHDdL",
  "key18": "2vTTPbq66WtMDN5KHGV3BvioXb82SHEw3iNr3zzzQvN5N933ZtjWf2dhuwsEj5HMJzyZmgu3KmeQmPrQ23Wokwbm",
  "key19": "5mzBpiwos38FYuCjigeV7XkHRU6LTasYfGovWmMUxrmYunbfPLecNSA6p9UkVE3AsxDeySoevdM4XXUr8BAJex9x",
  "key20": "5FKMHBDsU1g8sZ6WR7vwcEtgm4j5UQGyUesP13CZNXgE8AfHYoNrBQz1i3ZZPNR5zcHU4NgdHSx1q1AjYRDnBjFB",
  "key21": "3tF4Gzjh5kJwyRyJdgvWx5Lbe3PSyvJBvxFEjWpLfeNKc1aY93QeWWse3NGgE1LLigmDjJtj9mX92poYSwy2Qgc",
  "key22": "CfEEvW6LNBxFzhPwqksFPa9qyNMtHWFjJpV7nSb8imPgmZKx2fQjNW4Ksa15rRdyKYCRuqF2WHqHzug3d8mFFys",
  "key23": "2dKMs3tKfT6S7ELDabUuk95EoDQfZ4WZhp3ARpKitcJRcHqjZA3Hp9rJp6ZJ1QGgJgxNadNWxV98uw6jxijrbrut",
  "key24": "4fYtZp34bKEYozZVHVfqMzJzfPK7uagMWqiieramZ1S46A6jprPMxifbgf4Cy9dBZWsuuGu1uSkPhu8ycszjDihb",
  "key25": "64fKyXsKvPA7U1zS1KQArc9HdcaPgvXU86E8tS2JLyeNZNrxneJyPsFXJrcxZTHWBK9xTvRui9YxGN9jfRaKnBe9",
  "key26": "52FqbHQMhUSWaxnLZjPbATojHndSNJw56om1amdctcrL7UBrvHndeyCxV9EctMpeP2LzoivPshfVWyqgnW8sB4pG",
  "key27": "2CjFAYZJjWXE5c222XGKAcqSHUvTU7y1fEqq2jXkVyBUKVBnxPQv6eVPVueCyKBHqDDnvEiJbsWESAEgo8CkpPbz",
  "key28": "63HVqGSEkLQQAYmhSUfv4irD8GwYiivLi1aSrhk43cizDH7a4zRMsbLZkEmHyMMbLdBiDBg5iVXe1td5C6cTk8Py",
  "key29": "2VEnSmKQh9PvNKZfHidozTUR1kHK763kUyFvPZ4kxpDKzaKELYAFnXNXJuPtg2X6QVuMsLaJacY4mKLGvGQgZAUN",
  "key30": "4qhoTBbjasKYGcDqPTHRVqmvKEcxURCvP9ShtpmLmjYLCpRdUCnijaKbKT9GjL9yJZiYnb2d9dgMyjeYe2iwZeTN",
  "key31": "Gu877voJngLKesAfyfXNPRnPoj52CjdSM4d68SfmXsaYDMTuMd6qUwYXJyHosTQmwHzi2Cm4Y2bgxHhBuEuxLvu",
  "key32": "3MoRFH5BKp18C85QLtCcgWv5Z8LXLsMvug5HXbBsV2wwGDbpWqaeuC2yn39yGfKYqoyAMu9f6aYt96ueFnEDVWqn",
  "key33": "2vc7kcZXDivrKYaZzM3iZp2nN8tV7Wd7YUkkWUjygndcL7SQU2eXoR1V3R2FGSkCBvCKKdb9XsU4AGJS4agTvaNu",
  "key34": "3LtKeaDFdgPwDL6mne8AoGhVpeBQEeJuSZLgWH2AVkQ4wzx4GpncNgTci3E3ay9DQLoyqLt8zvj17wEFiAL7xN2L",
  "key35": "3z1z4zVQp6wZFVLFq7sQS3re3EskUxYNt6KWJMq6a3khnsvPmLm9AhuZYgPkrarmZS1kuKhugfpVXvunfQb8ziFH",
  "key36": "3dUjbrWR6nnfe2DhHaNcjhVvAHQUvhttm8cZtpBC7tqDmZxGkoLdLrQB642zuVEaS8E9qa7ewgM4bxgXvncptEKs",
  "key37": "iDnwySMXUeYw1dPUHmW9ndUu5ZA2vAH6zQwXFaPPZNiwRFcx5uZLAEvnUJtwGbZasHN7TGpG7t3U6vFUAPSWgfu",
  "key38": "4y89S5sPiS1vTymXPxJr7nJnoVXvy1iiKJeUxgcaGCc3WGsmhQncRUSXHpoUNquJR7xm7DcTN8Bow9ghpQ2QD34Y"
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
