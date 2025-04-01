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
    "43nbUkURjrDnLM9WFCroZxGHA4f54yE8jne1n6YLs294EWpvF92ah5m8xrmotKobrtrWYe35roEw5KrVC1RWLiS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdNHoUYcUwrRnNdboAuMGoevXapDkHA7vD4scCs22gZrX3jt93JMn3xG46deqNLMRyA4ShZ87u5uNzEdieGHySB",
  "key1": "vY8V4UX8CaM8qCyeECwHwcUpqL2WFU9yT5JFmrYugnXFLNwnfM6z7vM8o7Mv1z4N9YNxZVvHqbn8PcVc2EJZTeS",
  "key2": "5Eu76kwtC6XsNQW8T4sr2oaHFAGx8yffLejCsELnbPBK45v8BdmVcALpPFsVnrzf25ccoXRSy6QEoCkRHKXgEvv8",
  "key3": "5hQZCkpuxyZcGMtdvea9Ntntgt3QdZuVGcekkePa7ui9B5EDDEXFnpoTf3pUqnPN4K44NWqEMpf6Y3ugH4pGGYWC",
  "key4": "z82kQn362u9iEGHzTwrxjEcGhDxDUxv1h2oAXu3eHayDYcM2F4G3sDVqF9gQYr1Fo5BZeb5oP2QRcjBPFqezC8F",
  "key5": "4puGyXAMxNjGFLjqnsSffmmLkiiwixAaF9XJiVMY7Exwg9cMUmN4EqRkeHWZWyckJJanHrM1XM1ucy3Jzvp8z8Gc",
  "key6": "4WLgTJF7RksYjYhbzPkRZCtMBMitapp9XSw72R6CzYB5TXkUggKjoF8vKRnpp5Hx97BWeq5yvQ9p66VBJuDr3Chy",
  "key7": "4YJuHGc799FuG8B3E59eUE4q9cWDVgDEjD6CJJdqCvtUMr9quXPgbJyXn48HactkHH5TVDVgRmWBdbSc4CfdYMX2",
  "key8": "4VPeciLH5sZZ9UtdeSXcZmHHemGLBPjqpVmqNHtSicnbMzEK8sQJ5rwM5PVPBxFJicmgTASV2kjDeMtT17RHTFZJ",
  "key9": "5CVuAxfjaFiAryDjzRodGWrLjcZ4UdyVmXkWQqV7TvTnuNzy4Y1Ea5oAkPjA97cXvP1tyci8fWsA857o5EBewCQW",
  "key10": "5CScXUaw4bBtVoBXFEC55QDvKKu9PEDNXpGdEZmm5ddQk6huVxt9NpDqiW4nurKSr7Mxmb9cxchKJpa6Ck2eHBkd",
  "key11": "4y2byyFu7MkZeEbSTHabj8sAVE2c4KmUCuWiUCH2ox3iH6DoYX9pCXQEeVTcFCgWLBMgrftQL5bgxGdjGuBefdsu",
  "key12": "jW1m3PDZUDqtZ4h6hiLPBu58wDn93pdeGft1Skd3HTxNyPBMaH4MGqFfuvTrMy1u6maWfL41nbxFPFHtwcHdJD8",
  "key13": "54xt2txhKgGw1fsjJxF47tL7FdRy5DsRMbJLFGhSoSUVaAW5NiRmFd7HBLoAa8VRRnVLTd5xFbAsxXdERyuaGxrK",
  "key14": "2TrVHmdFXh4AVLBfPDxuzUgULFjF5vG6aX1YsHfnVQurVQZaekzVeaivzX9oxjVxMSrs3r5gF8LegnMLX5CzDs2t",
  "key15": "24QHYoxwxPCiK6oFzXBWuzhZELNR8iDtgcqgmpnhjH4rVwRcsVf2Mo4Tz7Po7nVdNUMFUrHBh5gh59YwgCrvTp4D",
  "key16": "598Bnafo1eqkpTa9R4JqbnGFmpkkePGRJDWAMMnL5e53HRYoPQZd1udCB75NRn8RyHz8gSaiYhk9igyomMaD1PSG",
  "key17": "2ZS4VjhS2eUcPJtrYxoFowWgeR4okLdVfzaWeCnv93RDUC6Em38DUke8SqUTXHxnHr7tu9Nr92DBAKdtH9E2Uoi8",
  "key18": "5K3fGBiuehsFtn7iNz3ns9BYDSbqZMiCKrVXW6sP2ea3C7TrVXpeC3n6CNJAF25JaidRemYCwACPWJKTNDyGDQfL",
  "key19": "34sevPNwjKsVHMRwT3fhkkKNuQGJrQeszsMbZZUmjVHZQo9xeUYMYTr9AGFStKXrY6Mf98YyLPg387VDhmVduGRn",
  "key20": "26Eqi281m1WHMKicJLQSgqvVSK9yHdHGgLHy5oTEFuXbhbxgSfpkymKcLLjKkPkB4piv8iqJhHrBbY4F1feCdvrc",
  "key21": "2ZwSNxjFcc7eEo54mmarR6JtwGgPtLCVLx7cBMUkbUXDvc3s1kxYToSwvqhUnkDtchZTzz5ndpzNk8RMW68nfsDK",
  "key22": "4tmn8J7WKqSfb8XsQTqUaJiiBRGUjmrzTbscdH7QYsQQfhKf1nWscCkaTHgmK1JiibXah4FG2tF9uKPkMS4Gjhhr",
  "key23": "Cqd1pcyrv4mJfzWbpQANKfwgcr2niTDXu5Bu78PaDdfruBq2xnHfAS1HrN91Y22uPE2ghsBnegwV2ZeSo6Dho7K",
  "key24": "YEJKkxhPeWaJ8LhDtu1uWaUvoqVETi4tZvYLHS8gNSG7oVpWXsvVvaW4jKB6YhDbpqgK1UPtWCcAvrg8t44nhLa",
  "key25": "5aWLUGEwdCroy1CpvpzDURUY9P4egkzzQG5qnFF4ioZ8wYgi8y2yioNKrbMjFCKJ2yakddhbtJgKS9LfZ9XqA7dF",
  "key26": "4fqurTwLuPJApH7cghdsBeAeTfwJGspU8QtgRiXsWAixtXGJiD9W4KAUSQUNyvp6CtZP86GJ9XaaMbCXLAbvrNGQ",
  "key27": "3pjhC1XtGGQdF5ugSyctXE8egDKhckovMvz7cFi5RqycvK9AFKF6rUmbsnXX9vAkcHY37zJSiRT2busKXmmDCLJz",
  "key28": "5NxyNaePcbcMBZNUkXtCW7FGinpdLRMx21TSrDrMAr3w9uKQSBesrwy5pBa1CCDrkeawytRxNXcu2HTK2RMvZEeS",
  "key29": "3SVSVc5AJp8RwWEpLBVMTFCgf3jqhA8jeSJXyEuBZhKhY5bVsbpgEJTJY9RwMfqyBxcptL2YBvKhAzRwYdDYpd6m",
  "key30": "ZSX8cmV1Dv3rH2eua3R7J9iRTiWQNGF4sezTGWKW4ySCMo4hdCsJKmCwLfMQPN25RciVK14vQFfQAjPgdzHWMH9",
  "key31": "5xDT4nT9SfgmmZTV6HJPSb6KHZR4S2RkyVefoqzDdeF7oY434HEybyLm4ZrUwxJKVhQyf14qK3Z6ZwRHMJ1nffxn",
  "key32": "3fSrzZ3Fq5gj2TW3kFA6Kkd9mT5pxidTJXHTyBwAKP23eNWdzAXgKfyNMbHBcUQ9JPgeEimDcXQLceT1iEaVCQvU",
  "key33": "5ptZ9fNE5xQZCzQCnSwndEXYkGjodCAy5J363KxNDTFZi6dRw1vevtyMES3xLZgqJbd4bieNpm8f7XgKRw2XZfyd",
  "key34": "cJWavcELmFuDd8hAFnhUNTn3VRM4ZC4TcpUaagAGY3NNNMaXmAssaoc8tdTdTeGfoeJhDKvAbsYKnyyxyq9M9C5",
  "key35": "2CQqenpJzYNacX3uuYpu9QLBeKNBgQS3uhAbQ6pzbRftqy6fHjd1atsR38xbGFySj1DtZgrPGoN3QUHqShhtV5LR",
  "key36": "5vjmPiUomeqVjhGBWQ5biyA58ejNt21vAWQg9JKp7eQZ5Htj3o3ZUYeUs98iVh9r2ZrqVQxD6kTdoA4n5TXkzXu5",
  "key37": "4y95DEGzrm6fhWb9u3msKh82yp3F6XTHXt65SsJ7ZJWPsQyX5xb5hK4F8oAeNPYcJugz8YXjFwHdGog9b197jRFz",
  "key38": "RoqXBNiMTRrmCBhbFDR5Ki9F87kFrhFsNsZSwKGrgnyEdAmhoYkrWKnnmCLqwkGnBPLN7AYjY6wPLcpXwCbs53N",
  "key39": "Zj7NvgQ1CftSRjJziFxPKpVE8HLpYk2gZnhftptx7FAuL6WfcPM3JGdCC1HAvDAoEpu54vKBsSKfu8RxF7cu49k",
  "key40": "xoPs4J1sXgHMQgYqJVWMdGPNRAuYkRrHDDpJTE2yuvXKNRfQm2we4dEVJEtmXxeEkS8RBCFh1HdNn2S9bBgqKRB",
  "key41": "2xpN7a6FidQqWWRh4ZGkxh93v5chjWpxXMxuirJxnfTj6VVAGHwGaB6RMsBwSEmf1144FyCeJGDv2AUuLvVs7ioL",
  "key42": "8Xeyz5EokxQTkcJZbhpi5kFKr8NegcDKUnDrTkxxQRf9a1L7G1zdBUVY2uWbTCk31jKiTUSdbZAnL7LXSnYi2ku",
  "key43": "49r1vQ3EbwkwXzM9GH5cvHSeV5jm6xuHL6pBw21hKqEmbPTumdjYikhsAMXQwPLAvLsv8x12NMN2mtce7BJ1JG5H",
  "key44": "4FFTXRMf2C46G4AZGAT4e3Hpd5TRzBqwvLJXc5Chsj8d7uSr2QxHEoqUwwFYfWzaQhUnTX2udCHc2dmqf3z8N98j",
  "key45": "2JQK2VQm8pXov6HaZGiB6yTvV3uQLUGkNnRqMSXfNeM6x5FtwGLtSRsC1mwPiAyWfJ7GhCqU7RJ6QuAhRxZzbPyM",
  "key46": "2vg5hnQdF8P4EthBxnWPCgG3fc4gqip8J3fNwUJwQDUhVodn8VM2kD7uP7yCGNpTDPaDUqNgX12gyVkbcTf1tS1G",
  "key47": "5xZnHALvngUMhC9HrXDdV2ZqpU8fnteo6juwmGK2rAyaC1cMDjPue8ZERAtYfH9ZG8Lf8UdX49QCsn7fMLRvRTQ4"
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
