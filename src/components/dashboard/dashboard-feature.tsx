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
    "62N2TghKXQSePXh6XYkBkRrp3KwGx75bnpQx3RUcxmPtJw7TdKfec8P6gWwd7LiEwu3osCNX3rxJfy1g4u7k6bL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDCh8TZHQJ5tPrZMujUGevUkngov4Q8RBdDSZ4dBoNv1fR21AGdj1Der5gDVv84UunDsdj1E1Yxuf7NKBWF2sqc",
  "key1": "2b2xGpfWSQx3y2MuTRU8fuoWzzZmDuzWSPbTG2B1uHfxPSHyTdbB9owhrdXbVzTrGTgxG97idgHMVaQyjvhQLL4g",
  "key2": "4gumaPMA6q8ooMXrb4hczxgzrq8iFXJCZBMkm4dhdocXJvvzfTxz8fE44nGiSSuSrvFSe8JnLtFkCB2HTGjSBas9",
  "key3": "2GNTC3twRZjYiqiNZ1gSqedHDYWR42pMNTu8A3cQYUW4khJCokTS7JnfhaKpv4WL2gnsfJXKGid4u6WZHzaDuae",
  "key4": "4ozV6JEUonvYSKxUcXy1VEUbHaJwyV4zWD4dv5nbTuJFJvhVYqhHMLX4JpW8rLsb2kPfNVWLuHH98gUvf88KkSdj",
  "key5": "4P52KHbq9TtXnJ6LT7dbXZkEfodw9Hvz3EkLEVdxJHmD8eXADfrr2G8eQfSvD3uVdqWAdm8GAEBBUVWGrNUx9pSx",
  "key6": "3f9KwwnrwrLLX9PKveLxS5udp17b1jrB24iXLNABuRw2THfxRjMXXdhHX6Z5EEBEANPGLkd7SrLkA6pU75vaTtSh",
  "key7": "4hMgbcDLXwgjU9rc8gqfodTtSdBfYTPXp9ZtzGKrZMosAz26guPyR93EDVQMuSvRDW1NJFByPGu4ZiZ5vrHfAxsq",
  "key8": "5tKgTJc6TTbQc6zZWA7Zxqcqz1nC9kzv9uqC3ngizA52GUEDBvDTY8EtxVfGTZiFC9yVPNsoL7o8m7CeaFvkz8nb",
  "key9": "5BxVL7wsMupoTF1iYhgeeKCtsDmm6iJr4Ei6UB955zgv9TQi3e7tmreLEtEuAHFJT9t8eyyhR1ixsNYdbVsqRgit",
  "key10": "34kBXgWBKM5sifGyHxPwf8JZRF6cugwb4tTyo4tGofuKgRDQt5g3E4Vk7bN6fmMDKGSuoba7sU6zqL5kF8APHpga",
  "key11": "65ZYwSgTKmvuV3mfVHdA8oW6Mmox5bHJM94JqNyJpxHbyvUVt7YRwb6DHs9jFXTpGWcoeEBWQkMaGe1oD3qW4PEW",
  "key12": "2FTe9iW3Cig1ka8fFV5EgpMY5o4QV3XHyK64Po9g7pSixYxN1vqpDnDRFHGpr8TDkZ1458fEYg9rp3iUyy8xnMK",
  "key13": "24dX9zS4JSrTfcTjsL2FQJ6qs8RNQ5wuBSCREW7h53JVkXtvpBzLcRzKK3WnJkJ4JdVkDUcna65oRMRsh5fYqhfU",
  "key14": "gp96UHaaGqKDsNMuUCpJ5KwF2TcrfCMDHGrjq2e8i4c5EwB6vKa37XTLChiqrtP9XABwgA4KBdPx2qVskFPigYX",
  "key15": "66YRvHbRr2qDtbmUqwvQ3frEqTSsdxhFehYdYrjghzqP5qWS73bJHUb6yW2BwM391xWqZSE4VtstAmLxYy3yWQXc",
  "key16": "5y5psCZ24syqiCcTEPg97EiPdu6vr6JT8ynN7AzQqAodY3phdPSBNbZbMnNQex3MRGuEhZfME43sbvo2f2vBNWQR",
  "key17": "33bf2ddSKg3PcSpm2MajEdX7vRbUbfAcKL1z7UJVz4ZNeEt3YiKLnffXMLbGhmxE53c7Yrkrawq4UR9sP1xww1jD",
  "key18": "4HupWxzHhP7gxrCQkjSeT4gGkqKYAiPPD3q2JFXybE9LWoqg5tTJx25tNuZ4bUZEpAyotvuheEtZQ82r7pjGvBkH",
  "key19": "3gPKMUDGeC9BgatBhDiw2zQrEYamJATkKTdn4oe7cq9YBoo6VCcp6t41KBTf9WitFShe7v3RZCvDyz12sngLMV2U",
  "key20": "2nWfALezPtkKZfUCS179GnApeieA1ctK7EVNERrEazUmKvS8f4FhmGZSqtrSxTGAXwQSCCYn8MQ8cYuvXtbvZPGm",
  "key21": "2vcVYNQVbhqAQks6meNg3iTnFXgMvupDStH7YDs5x1kgiA7ozjrJCBz2bVFwqbzhd2ANVcezs3TBWBEacGb2bx3L",
  "key22": "34aFjURQ1VFQPv5AHHaamx161xA3C2GpLR1AUtvBVq5ADjoiD2Rocuiufm2C9JgSmYht9GU2LFAKjBCCCoz5H4tF",
  "key23": "49nm3G4NYhGEMNCXPqPzwUMq2pikfMamNmvvB7T3vdAjzraKgHMprZ9P9CwcdFBNJvqwXqa1qr5fdY5Q1y8DF7zv",
  "key24": "4LSYNW1LaBLVJkfK3f1LxoTdD7t8ykzFPQ7TffgfvP2xgjjNqPju9NKw9VYDXHJJEetrx1PMqmDzQKHYytCCts1G",
  "key25": "2sQ9f3s1zzBJvRbaB7GwcocVJYTfGzZXLLHducnSc5idDNQKAYDr7G2SjYu3RDpeQf9qARXkjUpe1FGETkZL1Tov",
  "key26": "59D2k1ptUitPLHqpSAySPpNbTtAgt2BeEJq2GdXegBXH4orTRfeqKvw9UvzDT6bxqdEajAEGEPSoecn6VbyVEwQX",
  "key27": "646f4zNX31HtQ4uvWN42cDrixKm92WLLzaFBS7QfYEQkUiThzYf1gVdP3KFJudUUC84oJGemZma8g6GUbq92v79i",
  "key28": "fFAJPmKxfjwBK7x4GMea1UoHgZN3LdTJgcPQMVxs3VomQE3BSFnzwDwRrYBTb9SnYUCfJrhEcezAhhCrDd58b1q",
  "key29": "3UzdNL6aQ7tnB7tPviZNRTPWs5ordXENJmPdfrwr23EdcVCo57NhAMW13HRAoWUiDBw2FzR8tTwGuSCBZdHRv6Tj",
  "key30": "3EisNKJAxuGvVMxCB99qvYxnXJJxD1Ry8XaoXh799eVca4vTNJMqv46R7n929XbtiM4dznMoGeszKJFk3SSNjmn5",
  "key31": "34VeeEpBwJwQSWxBBeVAAYywQg7iAS8wEMYcPwU6SSSRQdrMbThKch8eajbFDAWBmSNpEJbVdV6zvXWWQARX4Jk7",
  "key32": "5xNyc4Wa8zBBWLZdMXsDJqLwq6LCvMrmcLFqVWhNeiD6irtjaNfWNczfurXrYNXA96uDUG1UhVsTBjR2jpsSmj9c",
  "key33": "2naeg8hGEbexbobH2sU8My2WnqpKQdmvfuUjLPRenUDHGPx2JHBU2DSAhmHcJeAHHjeEZeqdRC69DeZ5tacHe3q6",
  "key34": "Ek9bscXeAxZXYpK2B5kyaHVsdBru1hCNTU3CDeJjQ3MneVPK5EukrhJ6Xy5FXoUbidRByS3hEhPwbb3ivudHjyN",
  "key35": "5m4tnuyqqeEwQC1GiakezEymGy74Wn4WH48xgC66x7awQ3c1mCYttJL7GZVSQziW9fBAPr8bhTZAGPJkV7V2NDiX"
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
