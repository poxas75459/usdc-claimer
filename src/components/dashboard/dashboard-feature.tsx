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
    "3Gq9S2kJvcHHgZcDpfMbiELX43FbSYDJxbudoA3fTiUoJxU16zmKrEdMJgVFnVbt5h485cNGaWgHfDjxrjbjputf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43gGYWDuPaEDTe1CWdkMU3Q1hj3jTm2BGytLxpJh2VsfF4ADxwTCqQz5v1rBv41W4HtDyqDKEr3RMtqDz7vZwZz5",
  "key1": "2M7jvacVcZ2xtVbMdpduu3cW8TCCVGaZbZ9KKMFjcgowFkgyvyTmCyy1NyR97jR7eHAbMc15sMG8DNakgDgW2uph",
  "key2": "59LA3hWADZ8sW24vB73XwyQ3LPWTxMwTNmbYzTLNjgb8A8c4zHjAjRzkjhS4pmNvyJE2fEZk5wMnZD5TUxu1Rspu",
  "key3": "3Z3gbwq4Skn5iRWn1nWLNGf6bLEfczLP4FSYkpAUvjYSvffmYwuwf22uKqJaaJgX4FeSNNyQmfgrBBaNePZCV9UZ",
  "key4": "4GNcmY2NK3rAV2Hcqz2nJ3cy8mhVeT5AdXiS5u5woV42oJ4NHAvqUAZ1ighzbZSHBpBuWhU52rBN8sejTmEEo64r",
  "key5": "3a2fZi3gMntPqHPVN2Y1BcxHTfJ9LEHj6vWqQDxBMBjTJMWrjmCjZKxA2yCucRrTii1EPDWXRGQGrHyNzgafcDue",
  "key6": "66Gh6BMTYfzwArizYmCTMUZ7pFzm8VQVu1RZ7itij972j8ugNjDeaFKzSjkgfUn3Vi1P37Bh8LQtihQCw1h6y8NV",
  "key7": "whBGDi3odrhfi66rf1tjXd14Bds2eNBgMgVnk2Zb4Sj65gpehRFiUxa6TAUdxJoacjgtiGZvCDqYDpAxuCia4a7",
  "key8": "npLWTEYFBNfExvBNuGh1nFFkznAjgUwxfyuPCzTZV7NgZ5U63m6nBnzCkp7yVcSGCGQnxfDtDAxQnf6QGJMYrg1",
  "key9": "59ih4hbPdZnZ5hkpFM7peVS2d7vFosz3EvRDWr7Zr8WwakC5aJyHJL5EUtj1H47mzYFcHckcuy6eAT24c9zebBsx",
  "key10": "xtw936okRd1trmfnkMB8R5ukWtCMsdkP86tRq3LfJghPDxzTV1M8x3R3JVtehx9GjXbkf4MhA1ExAN3znBKprUg",
  "key11": "56jBhuMV8XonSURuM4ccrXtkFeFbSqp5BhAA3pdf3JYeP6tc8xE2wnhfWWMedZDsUJZj1Nxm93VFBjVVqPQcEyT6",
  "key12": "dDawtMkZfa9EMoJZGCT1RM1ZEPtdxWURmag1kcgVVydC5pts5yWWhobXdcj6iPwcnaA1rfLU3Bzgu3vGDt8PXSk",
  "key13": "23UB72kWqDYMsWY4uvcyBfrV7Mz2taukQ5zz1QsU8A8mEgW77FAAtNpdaqvBeAb5s4WxLPjWkWpd7BAs9mCor7wE",
  "key14": "4k15j6ZtQenUK1dQQhqXWgD6tkJZwZXMJVkrRa9w5kN8RB875Ecje3FBDUUUN9phJg1cFnnGkJDCULEsduryFNYY",
  "key15": "3aHP3i6vh4qVfusbyhNCpGc9agX9gG11ymhh7L6hHQU6USB73eEmoxiEq2sZgYV81aA9ufkgezCjokfWQSLS874x",
  "key16": "5XSkQhSwswj6Ywd7HGVmryTUMG1dGf5LbzBzSnnno2YdRUPMAn39yvGfn1f3CDhcGovUyYRPNrUAivc716K7jYXZ",
  "key17": "4jxXxqadarxo3JfyWGY9CRSYkXBro9Ss7BCNfKcpxjRqB6Avo87Q1rq9HzSfpAKK8N2Bx4AinyjWF4mUEhKFwu8W",
  "key18": "2tfVLnZhk6umfc3gvA2iVPVpE1RDGjajipsRZDhRB4NpwB2ihL7UvkMmF7rg9aLqHPmaE8NkHLuzpZsNn3wDn3Bj",
  "key19": "3LLhsmYLDc6THmSf7asTDDakhBS9gnGuSayKRG5GC75FXM2cNivtjAa6RpdjSuPYXdvA6deST7vtq1TqsLfqFpSN",
  "key20": "5uCoCMYgt3gNErWpbLNa3LNhrtgPpaMKBYPZ6xFXxmcuRQeP8y5jUmGgzRJEokgotHtP9x3BCsSu9bN4WcNaRJ24",
  "key21": "3jDm8YYaf9aLj3kBXQCXcAqbqTbJJ8kWugkPyvi4AzKvku7CAmfokobhNzkR6UJGbcvYWAUZDiGm6t6D6CkAHa5s",
  "key22": "5WK7G6Pzwvj1zDVoeU58Hnts44G7udJyPpaKyi1dQeBPaBBFWHTLgXnD43yYJrcqrBzT6xpDN4QynRUtGiEiDH2B",
  "key23": "2QF1Y6ZEd1L51qDggzNh56NAVqfwygQuBnpdhhXK9V1wwVbousLP4afFqD7wRMryEVepiXKATu5G948KVoffSZ2F",
  "key24": "3U5kDWxZpLywbK3LDyj6JzFHhmb3zG6QY7YJfp4h5QrEsZj2RqAEETfTdXT2YLVXv1VezwiQj9sKw7QMxn1QLjxZ",
  "key25": "26aikLkZLEoFcZhcELbgcfXjmRmM5n9adrevCQXnVdkBTWDcSi5wfYv1rqbB2r26CVubDwpgwahybaHrRp5XP7Fg",
  "key26": "47AMRy35C9UkvdA4LSnAPfAu1psMugXvs7x6DngJjUjWEeypEDzWwV4ZpDfioMu7SuyxBuvFLPELTVVwHv4XTydi",
  "key27": "2TgAnqxRyhUuJPAseehrT43jDvZyA5SmBpZhAkdLCu5BTBvzpVFNj7p6eJ8Hc5ky9pE7t1XBx3qRx22AzVjocQ78",
  "key28": "46tfYm1kdxWjXNCRKmEba8atuNH2tLasGv9cR9gmqheMc23h6vZryW42oB9vEcp4rmbeZDbX32DhM17tNGehCjhw",
  "key29": "679NBwjr5LGVTcGKZT6vV7d57QkHPepNC1Z6LDH9Rm2vGYpPKayW7u1wg7cajTeLKdRZG69s5XKbUT2rmf2fve4j",
  "key30": "43ccc1ZenNc89shLeq4B5SL8sZf7T5DcP2uNFLZW9XPfwGxL75rK4zcjNvpXYFT8VzYLefmot92GNujeqTQxo4v1",
  "key31": "2xXH5bmDaTY1srjxh9VBPtpUbDhwYxBU7PZmpYVpERaGZ9saPyTq3zeewJkRuUsh9iG8dtck7yjgxzxyLwrFXvc",
  "key32": "5sgWi7SSFEiGzKodcpTeJCHYsvJ2n9qHQABFR1j3nbukvShrhipyL6uKy6ErJCdYouMEYzBtV6V8FfoaE1scFr3S",
  "key33": "5ZLeQ2dtbwdEJpowNrxDVSuqFxJG6n5Pz96NowbiziXV5deufbUHyUG7PdV2Bywubo9Y2bdKfXFkjnnXL9WKX1Qq",
  "key34": "mybm1vGDwryjj52vE8gzJGeeAhXVgw5YjZ7ZCx9VoCnNE9RTZBjQ3udGZ5GdxZCDmxzenBnhhFANvAnv3VsUgvz",
  "key35": "441cfMXN2u5UXdLK8raLbdP8TQUuQn1Zv6cCbBXYLfNuzy87cMWX9btdzikxsMh6vtYXzVR5o99enumjpd1x3DbJ",
  "key36": "5C7PEXbBqs7JyYnvqoyqzChbLFUm3Jp171q5zYZpRhWtnu5VQDXBGDSvqvDMNpTKrX6JtuSZbeWkU5i1UyrGtHgS",
  "key37": "2RDcK4r4wChLJ9uqMuzkSYXuSmoXZSWWFeXjaQurxyhx28EYSpCvA2v6m4uHGegDruvcfkDmbwS7yXX7FiktetzX",
  "key38": "4AKjn3etYPNoKmgQpJ26LeUjH7nGJGPGcqKo8u7y8HLjqz3Y4hNEnC43yvvJTc5H84qmecxUEaBqrFPmS6CHDfAc",
  "key39": "24nmz2KYqwd52iEE43zdHxbJa4XhXARwSMcjHRDwBWoQQQFc2rpxqir5jSNf3F3fjkdCWUSmfjZZzUKASzUVbJks",
  "key40": "QpE2PqvEHhSzwHTm5XNW9pBKECswzwz8cr4yaP6f1EdWhazHNQJ1A1juqce4o7ioTVxgNNkyub9vhAhVWGiwCy4",
  "key41": "5nMrEABeqKyqB7dw5DUQYKaW4TWiG2jLWgnMXu93BjCmgeCBxfgPDniGBZ2vuZqMJiy3eeirBAbmLu7on9r3oySD",
  "key42": "epJYqf1hpQ8vrRBWvZFB5XZeEbeUVz52RwBM86reBKzxsbfu3WXaKBrSHL4UHqshNtEq2jQSTnuLNbd7E4X7RPE"
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
