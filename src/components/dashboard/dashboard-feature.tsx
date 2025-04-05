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
    "5wyBXxANYSNCyJbYiXTeJqkCMRztnjWcr67SkdG3VuKwxLphVcHZmEgqoYmgrJ9ugBa5WohA3QrF44tPvqvZQ5Lt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yz5d9PffLz52jwy7Zj8T2yJovy1tfFQeLCV5rgtjAKGqvwap1wPPYdcyeg58MyQKG4PEN3vo61PdWiTfydtCyaS",
  "key1": "2woR8UAUATnv1ekKZUfUkN21iLmJ7Ke72ejhw4AzzWYTkZCN8Km72Kxgfgr9VTd3rXxo65AjRxp4bbJ39EihCcKo",
  "key2": "4f7M9uVkSLk2cBBRLPwwuwnB6T2Ek6UQkmeeVjGpoDieDguQTam79c6WDsoagTt6j7MmRoQCawUzhcfKUSg1E5KG",
  "key3": "Kzu8A6LtuJpQ6AwRpN9PG15kGPkXucCf4JxVYBf1MuSR9x4PeNNof2Kt7bMFvWU17QrGxrDzbSJ897QzLaPvYPy",
  "key4": "5nphfwizS8fY2SQaDGERJWU1Y8ZLe7DhkHa3KRxRqixJ8yuD8EaTqeFWE4RksG7TBXHiMryrPPEQbo37yGapHnmE",
  "key5": "2y3GTbPPDjhyJj8A7WZ2pqp7jANyVzLGCoQu9KHAhcskRDJZk8MaZQMn5YM4Mi7UVbnvkzRTGoVtGfvCZeKwiRZP",
  "key6": "5fc8jsAjXsydDiVQnJ58oqkHGivshjURgxb61cawvHVsyqzvXizb1n5MszzwwDaGXGaBG8APoFRgpDccpqyo3nua",
  "key7": "4p8MC2bpMsmzRUkZPbppTwdhs8TaR94SmpQF4R3EB72JgF4aJYYhUX2Mr5YgJcefacCG38CJAj3j6k9YLmxBJjyK",
  "key8": "2GDV4Hb5D6JXKsopwvcHBAvfxkFA6nDAhj88V68NNYieSYufimc3TY8VAFbrZ4sPys2mvpUZq5KEYtYsmqbUiQzd",
  "key9": "4acUPj8MnLQur6W79coSM5qAvCq5j7UGwMkcCDD6MepZZtMEBbcQPpk6nuryixuK5tLW2ZwHuaJvXPo7aSenPtpy",
  "key10": "TsceYVoF8Z6iAhuM7GVxU8n2FCG9dwsWXgd5ywNJANGhh6GvZ5oGing1ZnvFqEeJgUDkFZ9Fs1FdYX9LPh4HTre",
  "key11": "4xNLPqSTebn45zQ2Te5RqmqFjfxN6Bfv2MZScPvvvWN9fjVAAkBB7GYx67oUJ89muRX1VibtcVyKajcM1Pr66UPe",
  "key12": "4TusYao17BPaFcp2y5Lc2xSpPnveER2WNt8v1R8Yw22dtCmsrWJpYQ9KFBKEubadp5NjD8vxPuU4byeTyxVvxmRs",
  "key13": "41rG73jgRcr8KCMYUJvtUarJNuYWHzfQJPro8P9ajgCrberCEpGRAdfL72vqVGYqAfGdVLxZNbJNFsa5qzWaJ9Fw",
  "key14": "5NDtaZdRoWxYJ4c2opi6Jh7wVhzHgo6oGGEFpw9cqsZgDvNBGBE2L7TpUMTWJD6LR1Jcy6bb17AEgGPr6EbFsgyN",
  "key15": "3UVNv4rn2YzHtGKxYEPcfFQLMZ5PkKhY9ydk3v3Z6BfhAdZY3UUN4idyikSEFCF7TkZ4VuAVJHiFiFRzrgAxuUzK",
  "key16": "36Jv8xiKhs9uXK3RiECd2ZfnRJh91Ss7N9uEnaC9mgRzndH9FzsXndmz72FXb2mYSVvchJsGw499X3ubzhZRsT6K",
  "key17": "2SomxZZoHp5VeWKhy5gFbHKvjWM1cecCTAvnRDAnxdUFRAE4Y3BRd8w3okjFvr6RdZMGi4LSUJoRgafSjUzgPSVK",
  "key18": "4gdBRnKNio84BgReG31wbMdU2cGphYvKvrLsEi92y8NM7noX7mo8kxNRYy1rfzmmB4fQzaeN73zD113Pxa1TkAaV",
  "key19": "2pfwkCeHDXwauCv9aoRHNXTBuRd2iPsfBznPhZ7QfhCkftzzSoyxGQwzsBJb7hyeDDHzsTxEda6xoomvKW7SpTgv",
  "key20": "pKC5rnnabRZjPJqrW9WqUExAMkba1s3Pf79oqxQcGK1TjtLVLFt5bNQ6RzDAjJnndRnNamqAfLmHzuX135uMFVV",
  "key21": "4txAKKcxJXZAssWiroYnj5kD8U36iCCNzcrRhvh3cofhyRuyuPQYQ146vj4PPf8Y3Ue9e2ZzdiNbGHYNHCdRW25k",
  "key22": "3MpoPSePMNmEVGSaYiCYDzmqtzDgNbye1fsdgXmpWZF4snL91YeCy2XVLvwp8MyRKYfH7aLzj1EZDbTpJuotAQZ8",
  "key23": "2aMhQvMHfQ8qXCE13iSsoDwyrXd3NP1h2Zpu53Xhz15duJMMfxV3CNQedXRhzR8SxmxSkxGCXHPLQ5BnMAD3LJim",
  "key24": "AUkr1edc1E3SB8AMPwgtVwtrXqA61y8n2jjrmbgC8XW6H5DefnXbLNF8CHqXu3omxX35esU26GPC36cTfNJAwR1",
  "key25": "zuqrXDqQ5U9ARzhqGgMAwHVqJCpFFqDKHiX6E92zaeXRV8KMM1krDhTKTfrPscw8LkxS9cfJJLQsgfP8SGvYumi",
  "key26": "2fJmW75Qcqj14hkZo4RBry9Bgm1GGqbPLgp6r8JDbzS9hNB5YYCfYpUxpMevfGhaZvcpjPrLUehTcXaAQq5NLZXt",
  "key27": "5LQNv3atTTz8fSMkFxtjjPDDw4bANQmEWrcqWQMv3hhjqCDrEGssD1GrcbaLgwZq62jpPHBMhcYeXnzUmSBcbg9d",
  "key28": "ErV4crb1wRYt6N6vV4ZjYf47tPS3eyrhJgHWEsfSBEfR89vAASgPXmidvta472Awuo5dbJcJdhRFVsN4fhgLZL8",
  "key29": "66h4v2i6vYQ6ckpUuuQRtPVnEZ3csSDvg7nWD7KgzCKX12Ai7sYPvNPKGsPk45fpstWjCxwEVcQjFxu1QGYr7yeZ",
  "key30": "spM1T82SkxWVxM2WB9jX3aaqFuCiiz5jEmnfsFWvb5wvTSvcKpxUjYweTu95i3ShekQUHMjZjrjEfVBgfquB5vt",
  "key31": "4nRHYk4vPZE8yBFdgnsmbhx5rrfeRSmYF1kiZBwrDLwnUPrFKk2e2ACKZc24PaR896E1T5rzFMMpTCzTpQv7o9xc",
  "key32": "2Ggwqt79JcDJaDuG7p5AUMyUchBx6EqXbBzGUQAXhSQ7UboveTRB53FS3jTFL4SQFfFpEDNbNsc3Mb7KYJTHhpV6",
  "key33": "2njTajnpzRxeDMDxKr9DduNAuq9GTsY6XPd2Pb2wAvJ1971ap41aBHN79F2WsSqq3mCsb87iJamH6b4eRT31pkXd",
  "key34": "2mYQEWUnqw34o1Az8DuN7qgx2p2iq8gMQbbRLNjtLHXstxkC4JA7RxZL42Jk9p9EHvv98UXyqNmWroYCquQ9Yaon",
  "key35": "4ygWgAzSPihABAjRkc54a113JKcFTedr4nWTLY282pF73WhNXp9RtNsGyAqP53oUgXpXRhjv3UpWm1yyBbGZ4qKr",
  "key36": "2gCwWJChb67gAMmxAbETjrSkNB6JCoMEAH1ocq4uYtv95t2TQUYsymsgKw4TCLTzZo6KquxA3hyURfjm5jdJoFtZ",
  "key37": "3UdeD2iZzhS7xJfruBqB3n2T8V6mueTc1cDxcdJg1HvUrHUyysZb1d4yx6GZcKMNWKAxaaoR3AECjcqopdsUQ5Bz",
  "key38": "2r9mZwaJDNGgSQbpboEazR31A3WsehNuZL5HHGwo9NB2iX7AUyrjqEeSVVVpaH5rHsJfKXMdmxkhbz1ZeVEeXAR8",
  "key39": "41u4MqARWJtNskUCHBTe9oS3XLR9BDYpq5L3wEQwN21ZDrsmU39ZTa1Qam48uaABjoLUsDuqDQkYPY8e3o12dYye",
  "key40": "5A33MPtBXf94Ti3Co9K2n3XyiXfbzuw9aAFeFWFyDJDBJKcd2embymS613dKcfqgjAyyPPzLJubfdbrhxajG9DoR",
  "key41": "jBmvG1Ns8fS4p2WrxThv1JtLrGotPJTHHHUvamDM65B6dJPUrdGUPLgD5m97K4K3Rk2hjosU6qESnz3Qv8NLyXy",
  "key42": "4WbKCy5JvbhWoBMDPd6iXiBybFovjm24unZt1ybFEhGgvwCCtXPwCvUD2GenLggDADuCcyfCWX2YFUh5p239aEbe",
  "key43": "2bHpFSH5UFwjsJBjLDVftCCFKYhgFzZ3juPUgwbs58ef2wk4477kTcc8osmuDq4KCdpzEEfUpiYeSWWUjCNd9zuQ",
  "key44": "3X2QgNTuF88VTBGgWiAzp9FcbPALZfXCxqPwtMtfJ31Kun7QEb49wddV9kHTh6NjkiC7KfKmq5bbjQgZHP6iB2Ad",
  "key45": "4QZ8aKEapnEcMDim4rPirFrMYk6Uie51Rqru5QUXfsrwpNMbTc93rHM9dEMibujagq8upsTLLvGrWbnRQmvrMVtr"
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
