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
    "5oHjaGaVxmqrYAC3QPthsgv1NPneuqiZ9ufNq8FBmAJjeVvXLPqUiYFXNTn1CaKw5JaB6wUfqq5TurMa2pNb8dMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqRCqhNyuxJ8jxPDX4hGx33QtjFzgRc7SBiQTtnnShyUkZyDA3cboJythq7tL2XoK5bZtENXPmZ2xQUM5jTuX1p",
  "key1": "4SmYdVyhGE25FQvvjH5cLc6VwWi9Dwg8rMqkH6KiahT2rvdtiN4XFvHMgpaJ9qBBTep4fQ85qYFseCGsgDRTWqmu",
  "key2": "4moQCtqVY2x72y8ZTfff4NKJH22Xkg4EV9DZ5gYdwJzcSSUDHsBe5Yy1khGSsmdf4cHzycWn3bND9kA3awKeKe6Q",
  "key3": "2AmAJgt3hiFSbvHuW8xjUhupsgR81DJcbo8yyKCya45vswiATQLkHs9pV1765zLMWLCAkTXL4zyWS5CfyUp6KcXk",
  "key4": "4BcKi5hZAZDRX85qoVZmbgooMBJvDSgM3ECZsFYyLvzFFEj2vHjGT6RpEX3Ut8csweHSeGqn7ZAx3e6Bge5ycboP",
  "key5": "21ikSjTHALDiBPJYC7oi6eYYvTD3EjVA1JX1zCUE7vma5BtrwWTPEgRFb9JvDGz2up1Ykf9Vn1hyfhN4YBjRqT7T",
  "key6": "4vAiyhavKtkrmZ5YQe5PaU18RHEc7KteZCcfA4tA6Z2cNPMeEGRYA1pQa9MPhY5kKPL61wwKW3pJBzR1VrSoqukY",
  "key7": "3MmdQmN6XbtDsrgy4aZ9Y3ggKHdyRg6CfLrsdGHmcKPsea9ivA1grR5fuy8khUjPoWR4cM5PX6wJgBz36wFnczY9",
  "key8": "5kBnv79PkKkM3d1WjBgfhrph4wxZ6GvVTCuwK4LSEK6LtB8nteeehPZTWjxWYEEf8ZE94T7mQMGTjtCusPu4Stna",
  "key9": "22n5Gj1S4sK5RKqghV6KFrpo4mmdNqao9f95pPW83MZqbFXUmkqbtrHFcvNNFhNE97bLrmiVT8feyTXqyjrm3LQ8",
  "key10": "2NCGYaeWKqSXLYFjuT7o4c1qXEjRaPzh8rqZbsQdYfg7TS7G66UqA9txHXD6VnMKYsh738gPKRuxNPwqYkJLtQMk",
  "key11": "28hqKwZ3smeKZJAiNNUpgVsSFf1xHRrJ4wFyZFouvBG7az5jYfpccnBxp8ycBd4H1eaapqmiJFm2AYW4VmxWnFA4",
  "key12": "5ySHmxFASkQiMq9oZQiXw86uNP7MJyz4tJSDi2CrB6YmFAKei7xFu1jnQY2MCQiyat2VRxExekxibLjuZ5Re2Pye",
  "key13": "5vpPF6KRvPiWL5g6JE29NgM5RPo9xfwwBZcGCxyfG1uw7vugtLXANXNAgTDKH7wwSGSc3iTWvo65PBwgDm65bMnB",
  "key14": "2Jnx8kD6VaeFZHwdgtYXdcbpvxtzsG6deqLBDeJpCspcSpY79iAYJBaKcCXeuk13nCACkBdUb95rBJwbiUuXLNvH",
  "key15": "5geUm7wVwfuGwcGTj98xQhtA48CEiDQU5fvBMSXSBm9nfV6fxJDQgNy1ZVdmfSUFhe3CpAsxSYcAMJqmnRcAdJNJ",
  "key16": "4a9hGjBseUTnQjWbX1sKPvqh6v9iJf49CaNZNxHGKwN3BLGnjfMZ9cjTE1mpa2vwF3ykeNmybMLsbP62pr19LQmE",
  "key17": "2rj5MdiyFLypMzQBVbvuBzRhWvu4yH1AuKEcRe1d9ZaAsEoxGv3CTEJ4tJdL5DuKTvtfgeXMxPP2Ugxthsa9ZSgS",
  "key18": "4xdFcYFPh3x7UxghjmFNwqzEQhP8th5tamMihe6oA5HZwJGFLDJ68kQkwuqbviadsnirjKeNTWWdySVsWJvaE3WM",
  "key19": "5dv8bGbNCBW2hYUJKXeCcTox8kVdHEeGfJFqhVh6BvA3Myk4N9mkSJbACrbmavjtHfVny4ZSFLgxnPaWEQ2apVHU",
  "key20": "4uXmVajurFqcRzUEtRKdWZCRu1rzYae4LJYvyFK9JCtDkid6D5nKzo3U7v7r9kN3PfDU2nJnWm2r2Y7FufCvvNUi",
  "key21": "5AEkK75EcSXYwCQ4xpotps87W15quA3ZWZXqsA4mJcD3rpBLsMW6MU4my6Q3PXYWiXy6bh3RWyWVLkFNKsJRCa5V",
  "key22": "3CYBioAHCspyMcKCvhiAqQVYQxQdCEJ5QGBQmDuNYfH2gP7ZRK3y7Zx8YwBZyPr6gcJrqj7qQV6SvjvZ2fGLpMFH",
  "key23": "5wTynEGRac64idwMEURMrchUMX56CSs8gJv71WBqVGgy2dBqbDEYbras28qHeHZcN3KD5ymsoGhtPARBHRpszFp7",
  "key24": "5vSfPFVKXmhRYYrqozzf991czoWGb8wUa6kjpPc5jnTnkCXmvattgrEYpZvzh248Vx4Apa6Jt9MejyXojSg2KBWS",
  "key25": "a7nqLJTNLwG63bVmNyvAMq7ojhoGzBNDPDoVPQWzNEuADgMuEnwMgRP6ue62S5M6TjsNRcPcJ3eKJL79gquGhnP",
  "key26": "24kLCDETKw4u3KUMP5dUCiEKWnZ4JrhovpKkD2GQpBJefV8XrK8ZisjVUyu2PcHMsueFDixZCMDNdmDqz9HqdJ3r",
  "key27": "5pQd8qc3KH7vYWri95SLmWuehBcUV8i2XkReEC7ULd1yq2PKPk85bGBhmKxoZjuRpSwMnktqvLJEtqTkMkfP6tAa",
  "key28": "XoVsrfKCoQevkNr7nVfxfdFTaJxFmuzMA9HXD3pLmFbYEyfxBKBcMeroG88NzTFPqrtYSWRfFo6Mpi3b4B8fYTU",
  "key29": "4gZ1xHiGwYVxyuW8CNMkU38e2qsoWVDm3B5PqSYAjUupWzcG17NCWBkemJQBEcfNPghSZy4gFnjgY1LPidRQnaaR",
  "key30": "5knqdMutyzwxxkP36q7yNpYGiNJArB3C1zTfB2EQg73Xjfr7AUYt4hLYqsyc8s4mPw4cjWsx78jk4JYFdAHMzG7s",
  "key31": "3s26qCBrUC48Ysn4izVRyKBaeok6Q5ywdq4tfvGbyJS4hPaTJFQKDW9Zm7sRdtsDmnXVpgtPe4NApU9Xu9NoMBSL",
  "key32": "38vrgVjXu1nnzj7UW9dywCtQFyQHzGP1dmJSfurXRubZMArujErjEjbzZYG6LYaVJPXJ21vizZhEqqb4cyMmoHko",
  "key33": "3LXNudVaS4XkDBrGC5V7uuf6p3DEPL7xKffnFPKkLjwkhriTx4wdpocwNuYqU9RFTD1r9mCbG2EQPHLgH1VpPsQe",
  "key34": "4AJcT2Xu55ynkFMbR9Ja89ej63V7iBYpJ4YaLgxBcd9GN5WN5somNBKm1sHh45YARDRyej7hfSCixZAjfkZfYDLj",
  "key35": "43dMVmPr4K8khX1g4UbPjXC9QMea5R9j2QzxoJB9CNEroZuhuu848pdaiF56etwfy4if3xkNC7v5VwBU6RsSWBqh",
  "key36": "5PGCd2gJiXMH8pwMt6Me6sZT5ZnHtVAdZtHhbu8hFQueh5Jb5hQL9CjhDLXBfiT6bNB1ArNmMHJp94oyiUU1FYnW",
  "key37": "2L8yWs3pi1m3sGSrWTP9W57S4LpJ2KwojvvVfL7izT9exH7xuVSfpXHUpgxvXMXZQ5gTynE7b5eo7tK5TgDfJN3a",
  "key38": "4PAFTGAPnp2W8jsWUxXR8nR1Tmm2MFD6xxkVfCZhhz2iMUVnuX7vCuP4BcC8WvwGgwdTx12ZzuDWjYR1tAhu388A",
  "key39": "4Rce4UtuoRew7mJqC9Li46W3guVTXgYcnkswggYRSKR5xamHEBUxwRNjepUzHtnFgk8LC1ckDpppisgtBpttuoR"
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
