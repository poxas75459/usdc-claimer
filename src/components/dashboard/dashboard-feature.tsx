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
    "6qnF8EpFhBvahKFrSsnQrEHPnqRnEikCVCo5KLKR2GWG4hygX3dBcHQaSNVbPytF7uoMj5b9GcperSjAy96BAPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6pVw7TBD6xzALbT1biszHfX1xDQqusQ1JswDNBNAuCkct7oXakNA133Cm3TbUzatiTcWHozpnoJ5zhrosik77Z",
  "key1": "3u3Y1np7HBQhNm88jiUR4mCBNXt8hZp9kcQ318bdd5aGY5CSuqmmsKmrhE4qvPXBbGgH6XsmK2bWUtFfHZyeTpJG",
  "key2": "2aSgLgqMTQoBan3ZJ7WsG26PEkrMoqXfjSYcMf6AexfYtTpNSTJuPpomTTH3XFuEaR57K51oRcp3HgfuFZhD7SEY",
  "key3": "5uHGKxVKQ8LQ3XJQybRvMABiqMnczpTy8kddaHZ7bpL1oHEse5zhAewgeoxdos7cQLsj16gkm8EwyjmqDvxnBn18",
  "key4": "5yfoa23HJHs2XV3q33maVEUDB23Fv7ENh7r6G9vZ3SrGrCYLan9sji7CZ3qCyf5y3PLa9JvEsThWkVWoRWDX5ggW",
  "key5": "61ZpZfKtBojeuSGM6XkktTP3vszrNHAb449PoYCHiT9s4rSktzoi3TpM6NRqA74SNhzLVKxJCsMfiLqGxQsHVgkX",
  "key6": "4zakdwBw16oKhjFpxWrAn3NTju5o7GpoVgykaxFcvLqWtooxunWJeuixiCgUJcKY3wqmKZvtbBu5eoJ1Pgcexetr",
  "key7": "5vDTF3npZ79pYGoqcX9JDf7MonkL4g8RKrqPwmzBDc8Vn7xm5zqZBQowk9C5kYZD4PXfLFNTSNTA3MpzszovShJn",
  "key8": "3zHq4nPtwmG9BbiodRv6LKHEjSBVF7aBKG4HQTz1bznosm6DBYQSzcFa4gDz4S2pzQ41tWAxS7fZukhgb5Z9snNS",
  "key9": "465u1TbJ57wJRcsw3aWmnDJJRywmAGHtxjaQ8AbA2W5hsnXSU796R8jb7XMyp3oWeXcy1nTqmZGHyCAmR64gFXCV",
  "key10": "4L82nRwTf4Qoa3nnBmeAZsEyB4m7XXL4KuGW3B7axigh5uKETRuLMRbvEntrzTkjzWbR6ELFwD4X7nFXRwcTSvc7",
  "key11": "5zeqM4phKBmkYiGy9dT49UPnEJDHy28YFeTx5K5E6vq6mMTxcsoeHAwQWmL4e1akXgQYU8zbLU7smDhF3e9KNGGx",
  "key12": "25P2MgcT9wXPTL591wnT1CyrvZzEAuKy3bPL6NC1CsYTJFFYkSN7ay1FN85JCVpPX6Jh1qHhFuKowrrEgDjEBoS3",
  "key13": "3qRTZF3gLGBumSZyjQDmGrzKj1spYLuPJMfBqf9eX4xk8KQ4KDKLuroGFycLEHKFe2bJraaZ9834fQ6q9EhMVBdx",
  "key14": "3mYSXjwg3VjzukycHiwvERX4aPUYkgSjPNK5V4Uc5fxhouHRsAfxpxPmfbYvpgxD3jpW1DYFLnkaVBESke6qZHuD",
  "key15": "2MbTVisYKDgS3otB3UKLnAQR5gvEyamAi2e2P7eBpN6zubBzfNnnM9M4YXTUKA9joRWCRUnWAL4BebckwZGphuai",
  "key16": "4xE5HLdr9PqpPXyit25NXGeCnNrmgpSAsLJTUXSGcaZqdgG7h37HvnhP99Sag3AbcZNTHMT2USdfUvGXatYb2mwm",
  "key17": "2MZP9pZpPwr3ApKvV9RL6EjPjChQqBYYpgtZPmc5vkuKtNHjvoBCCFr5PJYNETccTrwHgi96Ton12eP7DkQGEWFE",
  "key18": "5xiGjc2C7ut6R12rebvM7BuP7rFz23GofYwLaLV9dNSn8u2mz8F3cE3SqCMeg49XYzppT19LJs3mNsjuCvhoZXML",
  "key19": "3h1sPHpjt8t3b7t2iTpyZdNPc4dvw1cKm3gnzaorRbmNjcBR7BSARSRczr27XWoyqizVTZvKNyJ2R1LVCyDUyvLB",
  "key20": "31w6NSeNY5UugSqod91ovDknWRhXykVKAYtXvbCdaFkpdkEot4yU5rDv9GnRYCVAH2RCHgzcECQQHnQQqt5kkEnm",
  "key21": "nuUPLrGgwGx2yumPiDqAqPshBXGBQdK98GgLtSKh6RXtFwZXoF7D9PkSbSA9vwuYgqAtzYQ9GbbP2n9qPb1y1Ku",
  "key22": "21yxFWLhpYBtSe6Kp6p7ifAT112b6rkYTWxZqE96tTfcoBKjdMwYAAzXJMyPiVvivSHi2vtnduKgP94fkiSzockD",
  "key23": "3PzT3YZi79rHTzY84VioPedzioyZ5DDD6jw9skyYkaBg6wV5Bz3rTWJuqZwuzxTJKtitoZdcaqKEbvg9378Nkf7Y",
  "key24": "27uGSzeco5SFGxEceXPjDEXYi8NyYugHSo16T7vWNCz84guQnJ9bLj2bZQSG1hsCT99XysapNYiii88mAJ84Jzeh",
  "key25": "4K9sGtxEH6XcELSAsUu6Stz6VT2HRwEUrfAyxiLeCqbGgVyME2VoCDywPHHuTKCYwrDZ9UFYvHYhADSK1zxoSo8Z",
  "key26": "2riaAioDMTVgATWt7W3mPXVrSskXEGsw6K74i6P6r9iUdzDnMuoPKEYBVECE7kJUZ4oKE6GAf21KXDPz7rjcwT5i",
  "key27": "3tAroVP3j5qVNoLjURxNBwdSWXWJjbDtXNukbiEQ8h7CjTcpovm7yDmV16a5uRX68sHSK5KZkpvgWL5cvbM5Ujtw",
  "key28": "2C9XtErNuFxZNhWmeaHvdKbKHQeEehycXJtBAcuHzKdLPU62szrzMA6f9j6c1sg5uc8o3PdoRsGr2tJ8pJ8TaRet",
  "key29": "3vn4sKRyAkNFPvtvRVVddnvFugfLkZneDhEhDAN1G9HYToKXV7hpL2AQo97yF9qoYnyoRAbRdS6Yn2JzsQAKndZF",
  "key30": "4UGRbJmThtukNN4VHjBWxdEDUVPvcPTCcGTLbPE8JyhCrriPUGRevJAiy1zhuoi9qjMPqEBMmRxPTreZ2odXEceG",
  "key31": "LVXzcfmCNHWCLTiSpepFdSYTusdEw8GKk77wW4WQQSmP7yUGHiqMTCu4dwCZbU8AwNWY1ZVjRAPYphDR8zqQ3fw",
  "key32": "2Tn7EDDvbQqA34UTDZsR1pJGtX7mChbC7HUjoryJsmxGT2GKmK6RkYpJ91uSskwmDGS3Ua3EjPcY6u7Rf7tHYX4Z",
  "key33": "3aXkVTgaNcF8G7g3MuMvx1NZ8NStB992iRog22pXYu68My6xQCvGqu7aT1uNkpg3BowEiTD7ogZaLR3FiBoGehYc",
  "key34": "yv9t8XKYkmsKzWshdpjSp5yHQDTnMBda8TKNLd6aoVrjB7LHYhfeyxFmUrNx7tpoBkgp19kwNjq5meNNhFZFgyS",
  "key35": "2rHZQKRaBeonVxnXkr3AZWL85WTGdL5Mb7pBeRJmBLMKae8vnzyUXK2bBDiKDxM7a46o4y5PNdHwAMHu2fmJ4dN3",
  "key36": "5qcUpMHvXi3XdZ56mYLWHRKeLA1F95vdE8MTpd558GGSSRisdHbkEGdYuFbvNgEXAY5XV5R94pS1fSLCP4Lz3Z2S",
  "key37": "2qkaUJAWMNAeUodrwNxcbtv6a9rNgvLgWoZNnrS7Eff6hM8e1FqEnv576zAQYbmc8XMdiJXJe5KgU9voWpFEoeee",
  "key38": "4wKGTXwCLt1zvHacRJMVBgy3h3S4NDjZEC25qe2vo26NkjcTCns8Lobse6wQzYUSoqk5jRyS59KJ2Y7HCC81dbiZ",
  "key39": "uocZntu93QFpJESpsUAoXTgfnD3ST3gMQL3Kd4ozCQGRct9hWsMzRspXoyySXQgdUNce13ry1ukMWQMKUfA2go5",
  "key40": "2z2mHhTbuJ5cZaZXvNnw3i8n5g4qCZKQ9UhbiUF5JK8zVfSN3ZDXoWR8ibBPLW1BFtWPiNmgZbAiKpxEV38dvXRz",
  "key41": "2iMASjdNXAW6y1QUFdPfxHvJ99n75uVramMPjmASqfbrJRKwhuraRX8KsmQb5x4Hhh8MotjRBitZA2u5aikdsmeh",
  "key42": "5GW8r8qu52yMR66tt6qPY8Uxm6DuNUdiUKhmeAobDXPVWR2rWWhg6xeiEyLnPg7Y4izj71DeMQdogL2i4V96g8Ze",
  "key43": "3h7q4meJ4XSyS34HSTXC34dFaFobmVUdfTqRpRRXmfTxhgQcsKu59WnkdVeuWfbUhBNsT9vqNnyoTxgPaNJu3XwJ",
  "key44": "5T1FW7rGCukQeHFDLXQrDuzdneUEUxTpGmc4Hmnf9WiPjT7L53BiWfHWRzxqE9sEFAX5sic7pbdYYfVAP1hwbYUW",
  "key45": "ZcwFuVvxmztiepGpsGwpSZ37f53mbSthV5q2ky7RiwZEqo3ovuHHi5Buq3MUdUHDXrEZ6i3F5tf1Fcvde9q3qp8"
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
