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
    "3dPobedhmbPDEWeUyXqacNPcBE3jRZRHJSQos6tcNcm84JWG9Xn86uzMqojw9NRHN1H6Z3RhFm8dJz7kkCHCUCgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iAfnEnNA9RLcWr6DNihJvhMrvhiekE4YH172hwzW6FzRtyaih3pyQLmCDjH2kRN5ev1yGRUK6c6pPLc3wqbb39h",
  "key1": "5jmYpVs2mJx5WEdEB3EhYRDD13L7r3JLnxwxYwBmprnpeSr6FBaLEkMqfGP3N2n9hLNQfPvjFhzPgxNKxzjP2TDb",
  "key2": "2upG2izh5p75VHBMcCvHGjKqBAVnfWPvHmUCxKK9EsuUM8ifP3L7Eq1WCqg7XPyCCQtpk8Rre63MmX7L7qcDRbVe",
  "key3": "5jP59MvzWmD5jaezRWtaTSfMUg8upuWx7kiZ9Yq5JzDTxdm6LPfEa6Q2G1mdb4WbvNRV21FsUCnVKbx4mTEn1PRh",
  "key4": "3uDz2NBTweUtu4im1dSHkA1RTjBnERmYJsEvp6HDKUXfjxy7cVUSzDXofPKEuWCRM1jtkaQcJutmoFN67yRi41mt",
  "key5": "4THJLLuzn8SDszXeML2Vby2fmaDfbWwrmgWJBo6vXB4Xzb2YCpTYNdxLLaavCGWNcHEdnH2YwCY5J56XeEX26CDW",
  "key6": "2YFi8U28CZB7Q2d5wASWaAWAE9NHzzCyc9aB4MGrD54RZzTz847kK3y75cMC39HFwMm29QTNo4zUorHgbPkbiGjS",
  "key7": "2SQvVt9EjUGXj5vbB1CwrqQtFfN1JEcgx3zbuLAsJaauXx5Yx7CDhWHuXAxYCEbov1PR9hoxhq8ptWFYQ9nKKG7Q",
  "key8": "24v48aKQrd9j7PQKGoxsSnKj63HdMTrbgyYGGYGuqZcay4RWrujVYSpFk7ckw6GhCt9ndajvnbzPTLBT9idfbWne",
  "key9": "4VLEFtX4eSMFGDhoC5hpcfYAGEWekJ8GwFBttaPV9CBzzbiMk7YjTnQQcm2JFCcNfHykko3hxA3JX3SXmuTP92RJ",
  "key10": "pptewXuX331jkQdyA2s4xDtnidrDJShg4EPdeyi2qbWCni8dECEQZW9jiJk96Tx3Mvja9t9qrE3om7a25RasRvK",
  "key11": "5ZSNuYfRjyH7MZupR9gXFAaEtbPfoUSSswMKCQFmr3pLDeGUSR2bn2BUgeGwPEJhJvkrnXRAHvwbeEYoAGsACJSE",
  "key12": "5TrBsdq11Wf8FaVK5uEixACShD5y6hSjKPMHrGKpsNvQZ3PSiX7d2gGxF3tQ6VjGqeJaYoLA8JNJNnu4YwAZUYkn",
  "key13": "3kJrVK3bfxjzyebKp5eXt5uyRFNEwmZxFmfsDsQ6MmzKyVyiV2RfKLLrhUx8VGCytj1D5jCja9LQgFjuMpfuFGu2",
  "key14": "5rNwVz4Mi2BhKgNCY5JLo3gWgMyfB2efUAiwaigXEx2q25jbgCees56rtRFCVgKVdnYGdRpVNsBcG7NRxBLPorZY",
  "key15": "4GZ9zpJCYw9Dk9N3btJprKRfqtR2zMwA9zmb8myn7oacG5dUZo31r31AxvvE4QYbWTMg38s14Pyntagw2NvJhkzH",
  "key16": "3wyhAudbAub3TMMHWV2KyCyVDDqgNA5tfi9M2PHWvP72p9uShxH88zHQxjeZKq5fphsKZM17xFxTyXFzJ2RrBDpw",
  "key17": "sLoTYrn2PCD1Pc1fCbupvUZ24ZUNkkmRjHBuUNbzF1HvWo2SaWo3f2bgHbDnRJNPTisya7AFuDJSSrX6qK3zy4q",
  "key18": "4CFSvScpun3ZUoM4jC2KDriRzjPy1zN8tqPuYEyPu9jGKRsmu4Mvn2cjZLt2B32W1dNxhuBsxhTL3qWMkcav6ACz",
  "key19": "5kTtWZPQxpSgTrnhDvSDYTavFFZcowEptHov1KaN7h4EKbDnxLcemvU14aUjTGhMekx6YktbvsWs5dsWopeerZoZ",
  "key20": "JhtiJS5B4mCeyDuCYVXm6a4TZmeVsuMgvpvJaWojQzyMoiVcFriFqtQLn2pkoaAo5kHPhfHosJvYsxAH2WMZTM9",
  "key21": "5FicWW6EZmYerQ1mQcPm6Qjb2xkNcJ9ZckM8VmDJqcY7ceHXYPSNYmifFy3381DEf7DCgZcQ7gacsdMpcn6Gnrdp",
  "key22": "2p1FG95A7CiWWDrutbAUdw29iHUpgwdhAN9BDZb2NW8SpjHhwQRHmJouZ9ZwJFHin52Sc66rjidZh7pFn77tQ1Y3",
  "key23": "5WjKkXhKnXbQ4e5LxVd3DRm1kizHB5d2tZkUJzmsnoQo4oJ1dTSZdwq1X8EgC5fvPYiPzEdupE4K3C2h5NmAbmcg",
  "key24": "4ih9qHbLXpz6mo25SC6aN9CGWazus8H2ftaiquhJ7aq1ZyJNwVdZnxEoSSsfzTt5pHTJHPATqhDDtNtZ8X8hCdCt",
  "key25": "3pPcjLGyxjgut8k3DeDASaKsHpbmDWa83D3Aunq4MmiDTSTSudXhV6LTJVG4dqTabwJJEypCrXk9Mp9hpfCKorN5",
  "key26": "5qokwhrVVrgoZsRB9Yngnqmao5U4BxoLHo6y7xF8eaU3D32yD1d7DqTwjYJpLmQuTThTqcb9QwrQj4VdGf9zU8u1",
  "key27": "3F3M5QXppZ8uix7YnFMR3NA1XrMt3oxSLmf7hsFgYJV4Go1oMsgoEnvaAB9e2Ww9qdHUaTrvk3Px35wnogXPBPhR",
  "key28": "2sU4AZQx76HqGUN5QeK8yHWJrGEsikjizVTMRij39zidtweGoZqyDJVu1ocexSgY4Knk2DpySYdZn6PDMFCmBbJs",
  "key29": "3rB5hsxZbKr5XQ6DrPLTYmbHxg67tGKHKA9xq7ryRf7m7HUYW1qDm5ubYnEcozQJTwXNrNBXAP5wsVhQd4p5edf5",
  "key30": "2AjwqX9QHzf8K6JngXegZYxWcJUSVTuJwzDSEddJJesLaFfq4yMC9Ht4uv4VZA1VvcyxGpTNWkJwGbSRkMDzDwSK",
  "key31": "ANm7bdLpW9n1e8t3pNKgUHHLHQgTt188Qg85xEyRathZwqZheqpsUZXj2NgrVp1DUyeJbnR6iXMackHdjF4Vv6H",
  "key32": "2yGzEci62JTLy44wBnqsn5zJN6ioXvHVLms2QeTDzSz6NtQa6W4WjhDbyyxDD7MKVodMsVEHggmFZtVQbPAyGfKp",
  "key33": "ELbEbaEEbr12rsaDoB3J6qbGjrub1pYk4q6SHXZbkM7CYWUofocaGmUJqSd37ipPxJGJCevj9HSS6LZPBR6zTVs",
  "key34": "4Hs9NQg3SVf5XyBFJ1C8fsSrHpC9ea18h8yw1RmSdJrW1E8uodz42D5Bgx7FH6Xfp6PTZUncSVDnC8YKKzUCG4DY",
  "key35": "2C9idPmwm951AC7d6d2i4BbUar3AQend6w2XeA2cabzP6mh49cgJ9RGSNY8MKjZKKhHnYz2uxkLXERPWSeEboq9Y",
  "key36": "2oFjyTnXBx7631gYRuijA21NSKQQx9VZ1Hjw7Dv5BAAmNbWM6TGuvpFnhxqt4pEUMsAD4qYagf7Sg8oBM2DHV3TN",
  "key37": "5W6dywqzM2XTed1Sfipr2FQP57Wbo7Xp3UAg1ySW9jyyC86nPBnFmpCFviaH2Ld9hzXSqcCzy3R84wQ6spMPu7ic",
  "key38": "4UnqEg2819NEJyEVe8HkgU19ZVEyfWp7K79qrPSajGxGcuyThgsQnnYKxg8D1tCfxURRUaeu1VNysf5xEgC1CMdA",
  "key39": "2WCUEMmESj5XH63tQzXG6A3Gc62SBNmTy7LzvWNmY5PyayCG6ChcrKJBYSTjhiZpPNy9NFRvUJzVYcvHm6QCcBPi",
  "key40": "2n6TpiBge3m6Rc5NqMErUw5sXj1Xkxt6ArDB5BJC2eY3hQQ2MejqMhgx9W38fb2mDbAsjQcpPUaXRFHbJbT8rZb8",
  "key41": "4UALdo5EhxPauKoRBCqhi4VYKh7U1UKSQ5QDrvnnCXHZVCcd5p2tP4PMEYp6NZWdfJrSbJzz7JBKaPAAGvP53T5k",
  "key42": "5cwsHWaEQ84cEy8RnVzwmLFmTcM73Xgnx1uEo9k2wJVYnj3Jwkwj7wTVE7xSis9UVQDAQWbqRk9aVfBckKaeioCJ",
  "key43": "5L4DbpfzyLYcWfBaL1ybLfT3E3Q8abtvP3S9d2Q84jR1RbJ8qEWHpqfo5y4vgutCsFBEa5G6rLuA7XxoFXexP3dr",
  "key44": "5HRy2wrtgyxYYhzfE9RUjTyHtUvzBtmtrmPhsanJvC4qpkpC1eyWE1bMa5dZ5wGhRHRRTkySXhUTu9dxATxLNu6J"
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
