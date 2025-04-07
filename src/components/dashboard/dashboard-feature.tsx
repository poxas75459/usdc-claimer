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
    "66csd4HNnCe8ye2FVqtMQrWUgi4bjKhf8CxpoLgGeDv7AcNBR4Tp65nxadkVBZMeictku9EnhepofFtvdQpGGkJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUt1E4ThR1MKQue4dw21gTrV22XeCb2vjLdm4M8TBvGiVkMDrFBACpUqPtorcaENnuLR3dpf6MhyRsu9yZEY2mm",
  "key1": "4QMhuMHv1mWqxKZxRR94SUREac6BEBBanUZYX244wZTWW5VZNTbtoUFv3QKJtjgk2vxNTNKgYvxsUnrhDHjwso9G",
  "key2": "4huSeUrhVGHTdXbMKXwi3L3GftqNj2Xw2EvnhQafXWAh8224Vzv2MLacCvB225KYdbMsX9WsKs7kqhHVhPmMPHmf",
  "key3": "2oYu6QYdFPoskENLLqL6atVBQLghbxGe3SRfGgUJWDhUHLqkfLQBS12rdYu8ayyEhtNHx16mBHJ2riEeBsp97N84",
  "key4": "4zZcGGTTtceEYueS8zaCMEoJADcqDSPF3ZCUHVB7xSRT9ECkpg7Gxs3Ga6TPBiGKkFJWsBbw1nzGFm3tkFqR4rbG",
  "key5": "5HyFJhrtdhL5hYbhkjvUf1LmDiY4edK5CWK7Z5uN7zt7KAnEQc2gsBrSTWkubXaBABrXWNqqZ6eQGsNqDzeVVneH",
  "key6": "5JCnw71eSuUwvLFDhbyEex3k8pwttw4KQjs2PL4AZMzcRF43odfWrMNL6xDnMLqhcwe8JM4oyjhfiXbTNA9W5dBP",
  "key7": "Y4NofSQJXZ8YLN95fHivdyakCu1n2fkqGV1RdL5PyAL3oyMfh7Tt7J1MAnkbJGXbFkUeiBHNF9RinYs2MpjVuBd",
  "key8": "oj6LPEroWjDATMiezcBmGwGBeQ69dAZ5tjXiJoU2HwPacqT1u1MELQbfSssK27Y9kCYJC8CggZism1DZV3fzGGL",
  "key9": "3kHpY9LFTWi5hTSzfqNYgXR6DWtJjuBxkKWSq3BkZY1vsEa8momyTbJXG2b945J39TU45th8DVZSpMtFbP6Zx5pV",
  "key10": "3ipYfG6f9Ven9ighxUTegfwZ7fneup9c57TsQabxi6auLVqY2xDR6pJzFXwqaU8imxweLRj69yzaJWqZyu51NVHS",
  "key11": "4orJ1yxyJmNoJz729H85LvLEZ4TrqXVAhPQh5LYbRkVoinwsHpoGbHqPkL4xmwRyLmaeLCx9aKjZVY5bi1MZ9tfr",
  "key12": "4kuLkafqTjmRi7MBRzJJBV189jEJTPm6yhteaMWqrDNV5ZrYifF6dhauZLENMgTyBM6o68hsNR8zvUajjpSRyXKt",
  "key13": "534TNKoBC44yrhZvhndRac4PtZEDwUfDJoER4pNto6MzYBdF78gpuGQcZgWVfZHFugsK58c8MK4KNhk6QmPmbdXj",
  "key14": "3kBDmqQvRPTbrQzYemEBrjFTMxFQdNdNtqPVhos15qdSiQTgKnfhSetM5uc3TsQJeG9pNyKLs2s4dJ9T8p99zxqD",
  "key15": "3BsT4NBamNFxEBRgdqRaHYcJdofWFZUTPhTCJqToVBgNf79i8EnB6pFemkNZefYq7mZBXgk1V9kF8hFgFUqR8Yhc",
  "key16": "2id9WdpSaTKd6je8H4GqXCiYjCUgcSmA2sxu4XiaCiA88cFH9NZTtUu6gutBmLHcHErM2cgMCRHtRXNdZRBCgkcq",
  "key17": "5WhSgjM4rQcyAFq4eVQ895nS3NRSR2mh7dT8BfZa9gcCZpf6gRqnsdh92sLacYu4E9YbT61Tqxhzapvo6YrMKmbq",
  "key18": "H15C88r2xMz1MkqSQfAKJhEMjFKLSF5RrnZR2qyMQ19ZhZGU4tvqBXc4C2XBt12TTfNFUdUiieqXYPD9jQn8VFW",
  "key19": "3YNLyv1yo3BMzTRynFE1iXQBTk3AaDJoh3w5T5aMnmf4g1DXodEgvzh7HgAifrYAocnA2v3mnGx3staGzTC6eyph",
  "key20": "awZmWE2ydYW3RMrWszvARSV9qzLcAZu9pNFiA9nndaAHUgzUWgLQKLgeDtoWH1yS9ZS1pgWnYVryBHtFrKgimCa",
  "key21": "2CmoxRj355x1FhcyP2UeMQ5QoYeQANPVSmGu4gejK7dAboL2PMSbucYTwJqo3JxAGj1byNz62UZNZnjfgbPpGBeH",
  "key22": "5SaBr3XaC4y1mPK6C4sc7qDG4YQTdLNftDbDtessEU6kggoUtdcmEg2g2GZ3E4zFoGuJcJTVHia9jrLHWTm1kiWi",
  "key23": "ihkRLYe8pggoArFnQPyjLwNazgEAgCC6RZG3QSoyMtDidre5aYpM2Wb9JamRvemqnu6ApB32Lhazw3V41sL7BKQ",
  "key24": "YjfBWGprEHWuLDQkBGUq22MG6pyjyiUfeQhYyCX7NS7fN1ySmPQGcaSnChH7o9jjbaZsMJkLeh3pbFCUk8mR26p",
  "key25": "2es2yiM1BAuBW2nuN3yGMMa7hdYiBVn6RWRtqScYALSv81VzShHxR8jYTWYYB8TqPdDdDmo7HUpyF3fes9a4t8xS",
  "key26": "38hdgwUtE4fPfT36HrjaFAgbpgcPod4mf8wUiwE4LWH8Scvk4DfhwdPmeLQvsQHk72g8pYk2CnRJkRSrgA9x4n7v",
  "key27": "3bcGwoRqNB57LKRv3oCirMQpBqEBsFTQJCNc4wzPaKN6uxE9TcUB6t8cbg7Una4LaYGbtRpCmqupXCfVtxi1SVVL",
  "key28": "493E563xmTBTa5NwszNiZxLu5N71J8NBe366KF1e1ThTcGN6BLjZM5boCTX2eUQ9ei8QVxZzRvJuSLxevaDAY84t",
  "key29": "3ceboGShnUNuTHBvSEqUdXifn9KoY5nD16vH3urLrFEbgC4tJEEGdVewGKMqa87vXS2dMfhXyNryRA29xUBFLPwv",
  "key30": "3H16838xWLzEsztzEbTWZiBsq1hqfhkg5NhJPY6yuttgUDiYVDoR1RzQ57SCrYG2dGbxysMjDAhcTeUoFvR1UeJh",
  "key31": "8sRUMHFbN3rEvJ6yH58pphidUUF4yq5qZ1nYbZzzUTcexr7ReSyU9dBQo9xco6Ds3UUzXPZfTBagwjMiYrSu85c",
  "key32": "4UZFzQKHx4AfEmoZURGNjg6NCyKvzJa3mKrnrR7zcQxuneDV6qkJsNP6s5HGu6cssACJPGHTHNGJCNTovjh3iYe9",
  "key33": "5HfnMANs1ns3XoJNbMLwrk8JmQrYYz9QinrduXSV8qpLKYpPu3eddFNwEHeGm2yzc1w6ZwsKBfbzcefxQdMViSUy",
  "key34": "3W1qFAsdtupk1yhAsqWNuFYeUa5PwoyghgK4MER56JXX9Tn8UgnZYPf64gaDgd5dqguPz99Snnj36rZM2LTANcea",
  "key35": "28jvbpoSTDXSsgkkiiGWHKPs4if35P3oHwGxZuvXnzc7VKz1QGyJwdBPQu5C7pyyDnsHNtgaoaanqZXojc1jn8xa",
  "key36": "4rQw8v1PBubAsnQD6JWuL6UgqS71p1imuEnAXojGnZRgSc3u1hNDbtHZHFUmouMPyPeX9exh1FnKjZT47dNWHrmF",
  "key37": "2AUx4bvFjtvXUojDvSoGVFWX4HfymxMQ17tEyVqjvDSxfh1fvF6JJrEkw2Z34PPtZAjr1Hk6YqSduQYJjDri5usS",
  "key38": "2DbUu4sW42QsPpuDzeohF9WGV5KJxPiHXZb9Kd3VFY8YjAUFUEKzPePryHS295xttVZ7ZuDvKgPRaYoch1EbTtTC",
  "key39": "57vffiisWAuZ5FysCnfhjP11shrhJau6pzHbAhVtBQzjEWikLfMvJb7ophQJ1noGvAriv1dhkK5UWReNuR6U3k4n",
  "key40": "3J5smXLHGoVXp3Yb2YyZ9QAVHdriL5XzqZrm8e3wXbpJdak1bYkhtQzEZbnDtgERSakq8vLtqnxD21y5ciPUAA9v",
  "key41": "5BgvBdJ8RYbJ1n1by9nTqueEaN2YnosQbKaihzfQsqehuNaXyN7fLy7JYgs8vWFUHe1UFz2XcuwV8q3bKCgrdE7L",
  "key42": "2b5UxwxYQB835hgadW3m9AriJaFt1xaRCKZMgj8ULtd1VdEXiTvcuAxet16CH97XJNFTYVhMx85pdmLojBQyxLSA",
  "key43": "CHPxCmtQfj35ge7URScFetJPZHFFg4v7T6iPbesx5bBLbwMn5DjVTYmTPhJZQgHxAjFvVFra8G7EyCrt495ct2L",
  "key44": "262UGSVVsDDuAta6CuLSpp3Jh9PQXxoXJudeGAhFL235CzbxW1TRWpbNrz5svAftmqCh8yavLjw5vKeaHQ8jasYE",
  "key45": "44hNpQUc5gDNMLF8tDkEe7kA2BPq3MEt3MFrRYAzpYk921LCei3X5Vyj7uTSWKwpdjTYMr1LTGzQBF5xnGSqr4jF",
  "key46": "4S4b3AibmtkXCJD1USCfN3QD1j8dqCM1bthUbQdz3N2mwmWCh6Xrz7mDThobg5eVysx8fNBAFrATwnuqRj1WA5BG",
  "key47": "4dKe6jBUdMccpjLeSGBc4QtVYTQw1YdSuybVWk4FoRVCt1uM1Ej2qQWNAtYEVG99NS12xJ3anqSZQfmNYSjfvVKa",
  "key48": "4T6Mvy9LBugQCCGfX8jd1r8pUEaYpJEmoi4HTmeUR7gCL4s2eieFrqusSUhiin6gpZ6t5QjrZp535rGQT2knityc"
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
