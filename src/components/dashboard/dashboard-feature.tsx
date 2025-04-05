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
    "5hW9LD2CZxz7FiSA6qxWWPQWTKf5JpGosDdJcjSLxBygL73zbfLhkpL7gJzY49Tx5xAcpHEfHF6jHjozEvzJvyA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDyCYG4U6HeqXWM9VR2zMAycrftXWcAemJD1EgoLhV2xci8E3Af1ha5sHqWY8dHSqid2p8mjF1KuJG4qZts8x5E",
  "key1": "63v1nCNCxcGjU8E8EsdgcKcRk6EC5Xu9NjqnmYiYKVEhoheAkBoutbR7PAyFWXsuZPnsX1ZEKQVgENuBY8HcNaTM",
  "key2": "4KGEXYpXesemNLNg4qgEMikrQQjAvpmAabbSqzYNXsceskSZ3ZajxCJ6ksCEq86ud1EaoGspvTftDpj6g78x6px5",
  "key3": "4BtKEfYxoYZiykpzygHNaWLkdENRc3tGhPGKFrJH3FFvDffd1tq9Wx8e73pvD5yCEt3dwYexoiMKiSzSYptPFH83",
  "key4": "5DopgAhBJ8qTpzbojeYCm2GgeVwGd2DzuGnekNKReRi5tcffuVhxQ3QhjtzaF5EigpD3rrdVRSTQ99vMtBDuEVuw",
  "key5": "5Xs72SRbxqQQRFwS8Lu49DNfU8ratWMvh2bbNBbgqgaZ9kak1fAJ3kGx9FMXPGUmwsxcFLvmCxSaQ5dHjqJqaiAS",
  "key6": "4CJVeHAJNVyGUnbqwYHnBLVBfgQ1arkwHaoRzHwLXNFGASD4iDiv7PYPwdBCkUuETUfTDDEg388EoN47bxkacKtP",
  "key7": "DpwfAbtohVp995qQkcsog2pNzSiQX6CjdwfFBPiiGZzxEq8LzmdmQ56G2xH2FL4uvk18PTenmKtu87tTYCfpnnK",
  "key8": "4PqsgeagRoMnysCCv9nrFDCRpXu6ZkY7wA3FND2xDXBiN8jZzQnThAGG5bESgxqthie4BSKHvk8P8n86j9gFZyQo",
  "key9": "2pVCbpRiogTEXHsYexjd42bTXnqKY1wzf4BkoopQaxjygZVqAFb4PCnFHVjFUVoQPoPJoeV8KmDy8S6Ap7HSoKha",
  "key10": "5x7xyjwr2y1YfyaSAmoYJNFLmcq53oLM31ThTbGfAQ4eY5xGhGuEcbkYawhBqzj1B3szYpPmXn6kLYuhtXWUkayD",
  "key11": "5do2t5dLk99EgAjW9SkxDZjbKg2nNS9p2Ee46aGDxiJAND6zwgCVVEwSHqruGGmmogyhyB9fA7GSQKBPYaZLfTbk",
  "key12": "hzK1nQ3rGrn3X3Q9cFfcvqZ73pCp4vw4L5Bybda1xuVfmq9Z6jGSFyAwsH7hw6tuZHBSCU4R1yVATUCREDRVz6o",
  "key13": "XnSWNyXZPRw2QEn4frdyy5DhYQkZSCMopxc4tjbREUUNxnmf5MFFKmFqMdu79pkPkETgpFnxzHWGpDMJ63GwGTg",
  "key14": "5bm85fMH7DtheZhkVHWf19L8v3iDGeW3Fh3JXTvtHn5kf44xGg99NsrvKZjcsWArB9UY3NmPAWEb6urqpN77c89t",
  "key15": "23YeT82Lgoa8WubUd3GvxhTx47TYxcP4ETcfhNo3jXW44V9GQcDh89vDwDzJJLedPQEcLwGkXATxqPsKzVJ4vuxo",
  "key16": "ZqkHhJarks9x5TQKBbzD2zfwiaXMQwHMTtTQw5GXLLT5my1k8A15JaRNsyEmpRnDtZd9okFwnhvuNyLDzYqNmLW",
  "key17": "5KAhLvn7hDgrA82qG5P2EAvVuL2jmHom1dTzpUmN5MM7oHAxJiXvWUodTiTr9cNy3QBTKcxdbXTMu2TZREmhrtSp",
  "key18": "oQVCQBwuYQjuiFZovPrgVgS75dL78jPBkd8SEQSB3qnxAxUzTV5Ep12PQFwFnmRLjaRbybu6pvTxcxJjStpsT8Q",
  "key19": "2T1ESSMXqvWxVBn3cQyqcYDd5YetvVReny9aGbTEwYN2eUnkYGiTvpaoeG8C1YJVKUT2yLHX6xCsUdTvnFuFMJao",
  "key20": "2m8gApzqeaJuufndqBXMTVcWuVif64c47DBXbCP78Wx8fsYsMyyWnzxTP2VBc1QpFgX4UQ1jD8cysc2xXs3QHiRE",
  "key21": "2y7uHa8pQpaM1oagitXnvM3bQcksdQGGY9Drpxq8dapGDU3XmfDqKp3Efu8XcjMDmqUxR2LbgtdcpHkug1xDbTaT",
  "key22": "3aguR7Lite6fkAfzxGJaKo5PgsjF6UUT1TNunt6caPVr1NbQPXtSRyyiiqojtFpJoNrRDoXH2eoDJzHQDYSv5s3L",
  "key23": "2LQYzZ1z8QKLNqPH975GH1GRPxfSrJY59Hxmx6Vj6T7Ji1zEFCAL1fUJZmYsL1qaGg4nsmAMBk2F7LoDVgQjZP9r",
  "key24": "2QWH58dXX3fj42dsQRBZSjuRiadKRSkYbRQf8Hjsow4mEu1s5LtpBLP94Hzf5qNMwsmDNvRcDFQH1qiGssCNFj79",
  "key25": "pKPoPa76scwnmSVst4CF7suKAQNFDhDUCkwGXdz5S8vJkg1yKexiCoLuBbTLyDx8Ck5qq1VpMAkCDUFZjZpRUYg",
  "key26": "gJPPRxGyBLozR6TmLD72a5HqQBWD232PgfekVfzDWeQ95VYqjsEFAUcEf82VwHRR6QgsRJNXa6xBNgofYu1Kpnn",
  "key27": "5onaLGBA7TeEsiM1SbQNxjxsBCB5Afke5nVLfYRE8jJQBanGCEWqbiK7bhCNi4M4pyHdAA4iRUkKdETrvucuAoaK",
  "key28": "4JuRiBXiN67TXYamSLcbMnokx2Mu7P2E2Pwhur795MrmQwbc8qnUf19dz23ruRcxszAPWS2Lhw458K6zJJeNBjZ3",
  "key29": "2FjUds2dxDdmQ4DvyVRt9tJk3wHKw3hGMaKdEpuaUhemxwAXHoXxy9ScZTgFh1XyRAxLPFbCTmtFJgSb4xBRdhjJ",
  "key30": "4hG56E5ffiWxLnfgWimAXJ7nGrKgv3oGpP9nfKXgmcM8NKbqVuxCVpW62DmnHJrRAZSm7n9zTbRaQTaTWMzExFkY",
  "key31": "53GkP6yuigmKgHxpENbWrHWN8bMdKJw8fai1ofQmRbXVb29R9SA2tpQDHKjPW75PsFGAqMJ2aG68Y6N1vfTq5pMw",
  "key32": "KDB2dGHwVYDPgw5GhRQ4z7ZGeQMWbMPAecM6zGkGZo4rmhz3ajkyu7pY4G8EDJovZsJzs5YTc7R7zijyCm2YqKc",
  "key33": "4BwNZD8vWnZaM6YHUPuPyjSoG3ZD7u8W1zPuRFoiTkimBiWY9paXJajeF6ZNg1QRBPWtjc346cwG6ViWPKwPK3FD",
  "key34": "3MQcBTPHzdqVdNBdqJVJ2yJA6piebfYPhzG41u6rFMWauNwTfZzLth1YjXPkTK5gKR8dDnuGiBRTBFQqsFGpHe9G",
  "key35": "61qV9vMY4PjkJSHfKoMvZe3RB5J76JrhuYbQrVeeEGHd3EDbFQAJmRjszgE2eWrEtKbNieWBiK85E8mjKErfK1xy",
  "key36": "4n85Pz9iziuML1wCPtp67WxoUVbhe6DVmUVapmxtzxN2JwomGms3uWF8DJmBi1Yz4x5C98cSh8tzGHgBKWt5uF6C",
  "key37": "4GAYZnHn4xDWH6KFeFKzyJfrvLu6o6GPpqMyydtGi2GRsnwpwj7UzRocjLHZx2NM5zwZTG1d4zPSZ7kjUtSzzc5R",
  "key38": "2Wd1NLXWdHiEgMJeRx7MkZ13ds94i41Dy8QVYdHUytgkqFFjjzaMd1f2mUQi3b1DjfQ31f7kz4Ga6TKakv5stL2d",
  "key39": "2aoceSnJeQR4jf3JzPn3bqq3312YkmccT3jbXiBgY8FtpjQeQpBmsAoMW4M6U8c8zc3ufv427q5fBavDFXPTcmDp",
  "key40": "56dQB9GLwU9FAwtGafTodvFUWMZadqqXXwcac33BKjy6b3VTX7aUDLcpZvEf22zJNs43dDnrGpyQkktThHeZbjQQ",
  "key41": "39MmbG9YcktTDYne55UZagi1f94XDGd3j28j2UwwQtR1Lqq4SBhjU2NhSLgg8mr4wPXon3q5hk13VgTmjzq8VXAP",
  "key42": "2ERWLa2jPmQzPpdF2aHajoDP4bbAb3E1b82r5LKF7LuKiNfjRHCHdQRVQ5skHHaB9kqDtVHpiVzPyRCJLJnF65gx",
  "key43": "2qGZvpcBPa7bWhyvGjJuxMbyEx9CQWSxc8RmpZf8LS2SMxR9Gd1X69buKKau1bt6zEnx6WRsRiSKwA5zuc8XV3iH",
  "key44": "3dqrkB7rAGFizPw2eTqgUVTdVnuztgeShcnituzgwCoPgZgmfJ2ShctKWG8eXqRzd56a5gPVJyC8sYP6d8SuoQW",
  "key45": "2b22FW6EXMWGSqx9rgMZLZsZsRrrYVKZqkeBkj6ovc79spJyzE9c8VZiHwhymcyAqaj5KvCoM2tZGe2JHJHxXiGP",
  "key46": "4QatnU72svAkRMJkCSYMLqqPzAC555mqR2ybisXKwegJHTGzCFNmbMP5y7uxHbAVyGGHjLbT3PFWKpE7837dUvD1",
  "key47": "2gNSPCXNCWthSFX1fVLQimAyQxKbSCQeo3nxavpxBkfoi3UU1nghJT2r6e528Tz3182XoA8MeCb4uBj4Nq6GTUHd"
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
