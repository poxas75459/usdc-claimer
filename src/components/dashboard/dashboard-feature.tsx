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
    "3nAK3JZb4HBYi86ryiHPBURd2rBz65vVH1YdHigdpv8XpESPz41BGxX1xGA8E1fbNBoBQ7oPNUn66zcmz3223piF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjpRXf4dBzQdceNGWHLtKginC5qfXxa2Uf5poSJuhuUkBQauMyTfirvPfnn4GQQ3bcDPUfQkzMrmBbEKbjLL9YP",
  "key1": "3nSoabYRKepLpF2r9LPXSy6zzUcWwRKTaqdoeU3qSMFwm9L8ukuq7ipqRZNWVg7CigrhvbdBH7iZAYZG12gBz4UJ",
  "key2": "DAcnPaG91E4wBir1rXRMjomcFC2ap7bwJHSDvNNj1EEWspy4Qmc9XumZzhb52J3hs5XKG5jRa1sS4QjEgG7bUJQ",
  "key3": "LAHv8QhPRdJ47oZ9aVCdCRJXK8gQMD6wGGLtwHBGUvcCVrVZon9YfWJgX1H1neqU9rACeuiUe7CVYKWEuV7vZGN",
  "key4": "4dUvdFNKsAPmcvsTZbjgR2G1sZs9xnfMcomUaS8eu1tW7S1xUNiKeXQYTTDAiFmUkFx6F5SReMigvp1c9BdaNa74",
  "key5": "22u3HPmPWsFnn4XvA5tRJqNhAvz1zCZjtTx93krYKidxD9of5BhvePoGUqMBRKfFUmeVad6FsHKCNoqs9KtcbdoB",
  "key6": "2oFGpTbSq34deX9vmAZXdyxbdCRwKkEJUa8T5dWSfHgzCuXe8mzRPYnuJTfr3B9DYkJnzGq3SNQ93oYY1KAP1tHm",
  "key7": "296ffVqiDvAt35pNwgSMYkUuA8yScr1irEhK7XeyiqnLRerMqWVRRWEHx5ejP4yvh4cxpgB8gtmgR8pNZRfNBMMF",
  "key8": "cAmTkZtiDWHsEWZbgPRGPSjv1rV72tPZVXzmd67Qbt6qon54khfpsU3MtpPQw2b4bbbLD2As591GGGB4d264mLk",
  "key9": "36N4cDe6W5TGeCRHBnZnysrWh7WsXfUBBBwFnQ18sTNrgBBEPskuuZaWrJtE4tmpnVcoCdGVrxzAHYxKcU7r2dpY",
  "key10": "3WkmxL5QWGsZCeWLRgbzYY3fZdStSodZJ6SJuGk8WUvLv9ihzMuia4ec1Ue9x8shnm9vq5vbQhRSN8exUVYMx4b5",
  "key11": "3euErxHerRyaD8aDejBoc3zJRNSbHR2zC5kwG7v8C1zahrFrJtqkHVjKPWsJcWx5PRvQALaoBdG1tCJnKuffwaWC",
  "key12": "4XSsHCnsjwByMUWCTrcSy1JVFPdv5CKJ17bHxTSv5UKsiZdgaXMJWXCX6v9aV2HTjDViDWQfH7NR5DpBt2D4PJQ4",
  "key13": "2WGyxkYypMXaZHRN7evNMRsy3JbfHYevLsqa2EEBvUwFDHDoKhUc6174qz1uDeVdGa21yVoXBcXWS235T3TWED8e",
  "key14": "Gxx44RLCYSEQ27exTHNYGDpnyjpDgNj35yKrivmwmCP68Dmfvszs3gJGLLUEVeKaYaSQ2hFMUxrKtUmZthThhYJ",
  "key15": "2cYDg4qfcADNwo9ZewGbVD6gPLiKsTpX7syxv8tHXYgJeFh4okzeVVEZJrw4quFupS2sPtttGfo4KCvWHoHirhWc",
  "key16": "2CobQjCficQYmhvsjDcYiiUXH8cnT1tshF4aWDkmGrmP4boiAxbio9o5Koz6Hbbh4GRMZZTEzGg7SXuCQSZxSdoh",
  "key17": "3RZkKtFe1HJd9MZZxpusJp965LXN3N9X7bn94VX8TMSH3zB33Y3GP1pgBQy53RzqGoBWNEdH3KZocSjdDJCHYob2",
  "key18": "3sK2VKTwSxvQER5WZSen9fjV2gfGyxwnnNQJBGo5pkPrEhWFb7hunsuBehG6KbjccTrngsLjVvsLnPyLpwPBff1D",
  "key19": "55q64PwiezEEcHU5gfVdfPZhHGttBJbMR6TrqNF6grvYErCMYu9aaq1oL3afaViHQpGNgHDZhtACUfGgFctZfYPd",
  "key20": "ksnn3T7PStKsdHouA9J6SpwshXBKR2sXUuJBwb5VVVH3xf5BW8CorjhPrU5EpiHvVSbnzdn7ZrYGN8FgFVF9ovx",
  "key21": "jdfNZd8U69PruJgKrJHExU1yJERfSsmnVpbZWoAPWmZ6CQUkWaX7NSSzJBTSiUiDpZFmJXc89oAPiKYCzVa68kG",
  "key22": "2YNxFGbPaBn9BT78KUX8sKjiZuw7tqR8yreuiA9564JrYns7TiVjL1kEz8kHKPJR36pKfAbVBWYA988Q8rpFY7bh",
  "key23": "2dVhmNsjNiGSxnc1wRVrc87NSbN29LDPAWbXnBbyzqTYrKdNTAvvW3misNE7hyUJ6V1KAbs1x4hDiUBVQS8rPwCh",
  "key24": "aeQEyhKUBHHYiDFDDtpXuxuaPgukues25b6To54bo9e86281zwq8zaqWxAZsRbvY6wXJFJKLKikNxEWjUSTuZ8H",
  "key25": "2JD1btcHqfTGD2HQ8FF4g2FuMaHset5oEXR5nuATCXpA4APRBB2MhWAjDUpf5Hvpo9RB5im5cFCTDAL5KtRJ1dZG",
  "key26": "33YrX1ymkBvRQg4WAYi73Z3XPF79o33n3tnKquawQGAH87awiLQzPjstULGCpthnnPW1ofN3BpSD7NYddvyFKBW9",
  "key27": "5bsiB5X21e92m5LSSamd6jr6XEx1xBzDxn2BihstEFRwNEUNDVih5rGkEkqGsDnrmTmZ9P8Xx4D6sGpptuw4kjpU",
  "key28": "5inCNknq4Rk8DGMBphsReiUkuLeDh8CEdoRGLtRCjQkQi2d9VH1Sx9RJdY9RzAsmws3w65npL65hDZLyQfWG6q9F",
  "key29": "4Zxs2niHicSt1M3b4B2HtMAYoDbAsJoWTs2Bv2qaQ99QQwm9ysHz7qtDgD1MofU6QGUbeBhYJz2SscqQkfPFfThw",
  "key30": "4Bc3gageCd4BeYqGRxNR5U31czrWtPA6vqpQ3oA7MurQTdpxuBoiTSUZt129AhJyEgN93CTGTm4eavY6vT27A3Cm",
  "key31": "5QhfJbZWV4uffBgkTkY6xTwCVvvJ599kGZUnATwioBCaNutgRc6QM2v2ogjkQedqax7iGeA1dHEfssXujVtDsYEX",
  "key32": "339ifbN8iwDuoVnJog68yk8UuYm8AQuFMcnJ7mE98UsSkqPNvaSxE3zCMkC74A3cMJsxWJHsUBQLPL9WrdDd2grf"
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
