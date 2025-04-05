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
    "5ufxHAzybwpt4mNef8ui83cFGjPbu3h8dGENNAvouFsWMCCY8HXxBLaqToCHvUwpyLkdT8pUmTB7oo4EkQNMe9xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "354TvNLfSMMoNiLCdqf5CkkhD3D9DDCHVEgx6QSyXqhJeA6v2uEfpLLQNxCktk8ieUwbV4FXa6Ldg4mdkKy4qfbN",
  "key1": "2KX7aDtLvkQPpP8YX44LRotfoXa355iU78k5KPH4q7TvojgZCKzZEWi85VCbMxHTRvNGXXRDKNYaK5ZBDxa4yuc8",
  "key2": "126hHDDozSiyCkTYxLT8z1ab7NADWhcYeqMKbzDiiVSuXpxZWk3dSGR9kaPfv8Sp5cVNYNegRFrWJJaURc5ifTtG",
  "key3": "2AL8shxsBXgUB27wg71GBg4oYpRZN8eSJ1TS7rcMsJb4QmcbjeywrwEKgAEBzmvGmmCC7bDMnddo2C6SY3isJYnP",
  "key4": "5vqwHg8cBZYBc5YSPVnUvC81KRFwiy4rCJvHG7vsWqJp7SbJjh3P3RbPhADrRNNTowdhBNVvsXKm65URYK7zBfZK",
  "key5": "zNyFicJLQAWv5AScXLk96g9cd1Sbc6khs2XRfAWVfJL9HTQapkWs4yq2k8qmr3Jp5PkDiQXGQ5FZLQbBtWfZwZ1",
  "key6": "3DCk25BAfXZ6aiznaoeTAWjvRFEdfsmn9KAM4Xx1K4a4CEXH2VAN7xhxUV8StRHtJXJ3J6MzMNNJ1f1ckT2yniec",
  "key7": "G6oPWd9dCzTTkdpaXZ1yeoP8yyMYXAfvQNcuBfYxwuMNoQW63pbW94t3cK5hMr8vQdjJvh54FXggyi9VnrGmdRM",
  "key8": "67TPADdWuHFA4h3w1hfUcSbWcLdsZ9G4tHhHp1mnYGxsrUMze3MVWMH7aBGgVS3Jn5DfYE67VLa2bBaV5ukH5pjR",
  "key9": "5d8FgqX6PtWkEtiSBLJHsRimDRMTjm9nH7LNvVgnBcSDUXjtYE8CzXphmbBWVXd27rEKyhCW7qEbgAzxnriprRbh",
  "key10": "5Ee8sFswS2HE4yErFpVU1cn3AErn2feRta7tRUDiC5y5D72RM55shspXsD5YarfaJ7kXfBceJvFFM44Swgetnabh",
  "key11": "4NTbsJUaSgAJLPpsGw9DCbKFKpc9S1GDjYuFmKy6rgGPG5xKeEUy2QsKR1vG1rPYmqasxKnR2p9MvyXX4jYykSMT",
  "key12": "61kYGCcScy3LkoGjxbQv1MJtzKbkKXYVADriY35ecGoKTe3Gz94Tasq5vCxSayYr4bKVsUUYirsqou9efX8f3kFQ",
  "key13": "3RpkVkkirDgiRC4M2JmXPRyCa51ATpKLdaZmwzuSWZvXFsngJpBro5k6nQeSHbkz6EVcwvvxTi3PKpGN1G7boEn9",
  "key14": "4rbkVFZ6aVdfwy94JL4zp3RASwNyMqbFfq89fe5v8jzqiNT8upxL9cXG7wwRQb9fBarKEwJ3w6ge35CXQ4Aagrt6",
  "key15": "2o4VJkD3ECdQCKL4FDC4Jd9MB6GZD9hWtqqBnLwSicTMk3c8aSjqJR4sh8YMj5XJBRJeNq4m5dgqJdEgjpFy4XsR",
  "key16": "27HRMH7Wx8U71EQZqVJ6yYPRW9ZPczCroJ2rZWuacVeUzuQyKcrfXnmNU7s2G8HsvhnnoBxvejwct1nHb6WYc496",
  "key17": "3AQCc6EYQbfDrDbWdGjGziCmW5w5yo3mgGcTkb8bUUeJrNXoMtdtWtPMesBDmpi4FZTZ7r46qCk4JkCjuusbwgXB",
  "key18": "xwz4Sw6bHP1xj1oQM3dwbv954yGjA7oWvofsySgQNuAgbXU1FaFY24aPuW7LKqSm5QyRvve1Jp6jAkQE5VRVLM7",
  "key19": "zwwJCiDjTiPFkpD4U2SpDJnsLbHCQyJ5iKh1YXJmmMEsAUMxrCPM1TuVKqfFN9WvM9QewpZ7PPUfkJxMomtUU8C",
  "key20": "MZbpuxx8wojgEWbiBYDEjhyuSBzhotViM4jU6ma3VhuuhJRfxge9WoJnxbaHnrhT2Lrpnj8dBbd3T2k7GVNcznj",
  "key21": "5pcVhLDYF1SWaaj1Nud7kyZdqoxLvfpcBBE6eufLUHt9aoq7tGtvX9dYYfg466hM2sRY5sBP2VYgRURtriPTqhqJ",
  "key22": "36wpBXJjQ9CC4LgBN9Tt26eDg3Zs849jXDbkbfmJYM7a7zHi6ActdPqEKLnJfXYT3tpYQU2TH1EYUNirAquec3wF",
  "key23": "2He16YEKKRRNARWxtFQCXRo884S4RF8YeHPPKuKWxZBhV4CNiEPsRtPt4h55Br5WEjtsWvt8t6u77nYJVB21Fgyp",
  "key24": "3vJL6nrh8C4MXj7FUfecMTrQ241iEkG5mkk1YtxebogTAn2shyhheAjfXqRZCPzYFEYXLrMrsaeTdVQ9wkRWYC3A",
  "key25": "tzUZMfpJgZkNy8pE7oS3UqALaquNWfrVWRFmC9XGDRyBJ1oPm5AvQXUtG6cA7R6Mwu9Jv9KvFnVrbWtkmEnb5vP",
  "key26": "p6eQHJAZdrdoiJeq5dZVkP9L7AtGBRdUHGKVSRuU5QGMmhBVuzvJAuoKXS22JR6mPT5gqdxPUruv6Hs6yyHA1aL",
  "key27": "pdqWxU3CEozRjSpXagUx2k8yfffHwRWmGy3a6bDAiuMEjibiD5Jf77XYSb6uAVoo2NSrJ1dWFXkaYFe8ebMe37h",
  "key28": "2JCK3tMtNaw1CiBXhZ6rKeTjx4YAU8tJxQQWQVNyJUvbNtzJBYkiiaqHcZF1bisWkWDxJHRnbshjRPUjHFu9WT4C",
  "key29": "3FnuoHobZMb7FueZj8NwVFBkqaEvn35MAyaNKSSSEEvZHeKT4LxCTcYiRxEsUipHhcLsJ6gcPF3DyBUfKV9tkCYg",
  "key30": "4qNaMX3WQEfYeTmmXzjwYgtLrk6r8dZrs8wQusnDWWuxCr2jB2Z74pr4YP88qdkWtKj7GuouDoTANUkaN8okvR9E",
  "key31": "22jbsKFcb7W1TjHUxy1hFrB8tCtndBfg8o5odXqto6BHrAx4p2Ydm9XmDDSgRvg3xyYnphE5x1LqrQwsk2wzJdBK",
  "key32": "4YMfD4MrFbCrSUfwXgoy7PpoUjnqh1MkbHVDr4r7agwwXWB6EoQfhPh8wDiXYv6AepgQ4wcZx5BTdPRVPkMS6rnL",
  "key33": "LpKfHoJvxVFcF3Cy5YuUSKnoZZQeUfwx7NN2ZxKH6GzMQerESyxR2e4GVDGSj7VWEBwfjVP4xotRbDGNwPFV42E",
  "key34": "4uyJXZa2CDofeGQnhhcZ76m6fC52JSj3t8HCPJc4YNk1XLygJL7u3ekLr86sEHWGCwcWsoNeXrt5Rv5zTKLHBSzo",
  "key35": "kVX5dePJm1PH9D2XfFENnfsa568jx1RAg3Ha3ckoNZd8NdWT1Q3PZgsZi5GuoPaBo6comEgc5RLy2jAJ8taVwe9",
  "key36": "rFBp9tgUkXEbDvgb2CBPBGNw2Fxn2fPAv4nWeftsSWjt1eFyJhfdjkYnrxDR4TMGFUPQQVfvybrM43qRqeq9qGP",
  "key37": "2Tko7fohd5xcGBigenoVFWyJyaHEJW7HCti6aQcStrUmxVZ5xvWzA62b2JVS5KVevTHRW4DnJeWpe6VSPX5d9wNz",
  "key38": "384QXgpEW9idFeQFwCWAUiGCfXNVZC64zitWRS2DBVGo4JxvJ6HpLHxUY9UTBW8ddwtoYL9jmsDsDdRqEZgUQKYM",
  "key39": "65dsPgNy3Bt1awPKZ4e3Jv9dcre6pksGHWU1dqd8xKbLeBSTBK4zB3kGWX8tcRukJiMavsy8EZtG4trznhEeqW43",
  "key40": "4p5NsG3PaFByfDrkg81j3irBmqK11qiHHzaU37N77jWFvkUrqJMa1g8gXWeFpL7pAVfo3yJxEsuW1irDorFLhGyZ",
  "key41": "ys4Wo5gfVmU4DBBQ2wqnyBizaA56XKiqoQKWCTAZWUGLy3y1oQ8HpfWB1atFxA5vEhK9g46Q6v8VdCPBTd6P6yq",
  "key42": "64NaSp7oXawAYrcyZT6XjdfyUetAU31FXd6hJZjHH7v3iwUJiohMqLVQJmLQ2MeFeAM7HRmsYCjhv19HT59czq9x",
  "key43": "3Y7RicB7m8hoEHnuJaiu16EkMa1YeY642T4w68ZdsExjVu4Pb5ek7pDXWMu32TBq5ZxdAH7iJJ8KgYV1fdu68YVc",
  "key44": "vkLFgrbrngRHLbLtHF81NzGe5v2tp4NFRKbYdDjjHGV9mr8Hvxx1r31grRLZaLN57Y4R1RVwvX9ac9xFegXUrbh",
  "key45": "3ShZQ7KahGbZ73BLnJSYr5ruhqAvwgCDZyRBZ9evqfTTgSLKBvWJmHDACPiXKJtVXdH9mDNt5Tv13i7JgMf2NRGB",
  "key46": "2njRM3pUKikGSp2HpVs18NVqS5akLjtVhTqwHeg1ZF1MYGtX25F6LQ4pWVJapL4Ta3juf6wh7iKVRvXgEkAMY7hA"
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
