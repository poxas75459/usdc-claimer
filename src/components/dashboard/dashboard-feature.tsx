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
    "42TMdn7zmEFA9EQKXgx1TkYBQZSViFyBm32Pzhb1gXQizA2WEMusoseZzjh3vdcUh1waWvFzwLr7z96zdfNujRka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35PJ1WxkkdUbj65J6naaofpKCqbfhkKhSfpzioBvQV4N7dtXz8EkuzJSvAHTgYhHYNqxEYq4K6hE5yhBcpQRLV4D",
  "key1": "2GmWxLFSTCTiDdEPpKoH2yVa6DievQ5E18KgYUijk4wasq3kKs3Nog17zqH8qG9ttoxHSvnhTTQA3X2HNe8CyYWS",
  "key2": "3kTFD1aoREnXX12mGJGBREANoLPe2ZhFLnmjDYRUPPZcgoa8ZfTVzgmRpDWxLrzPkysiUrYrNXDHfEhJpx9xVvz2",
  "key3": "4QNYXxqLrUp1km2SdzdviDWwCKA6M3TA8Sj68MoBGX7R1ZzquJwHvzECjWqzyshPNJsxyJeZzNXPF3mmERw3tdEE",
  "key4": "5wLJtxV7CzQ4BaQNGngAQH5VxSSTF85bXcmaWtdPe971iT2RjeByr6LiLDUdn1rH56sxzUBV487CJoUTejUjSuXE",
  "key5": "5YLZdsv6JFmxsEMYsoCwaAyMcrqxzavMkZJdExFwcTFs6Rmp9L4SxUdDfwxSSZ8mbcVPj3VUKWEPDTGztcQWH9FE",
  "key6": "53DyjxKimKv2jXN35743eZ1H51MLkdxcPfT6K8PXHJaxAzcYQD7FDaBnxH8imr9sYHYd9C2wY9oTcAwQwko94Bo5",
  "key7": "26tFfwrx1EX4Jj5REwbLcXpjo5cgfMBUuaoG3UbyAUU4XNZ2FT9QpEWAM8iJrqfUayVDjrpBSfzWvT2qoAW5t7xx",
  "key8": "2wMNXm4pDHL9b8LULQp15nSdjtYL5FF6SsyzePyNDvMpZbLwFVavrLdHjAnrzcuB56fxu2Car1XoJuPaw4RG4LEP",
  "key9": "2YXECLDdjq1oPuZMjPFS9eHgkcUX6jCvsgwsBGNnE5iLecX5Y8dvmaVfr3t4hMs4smWTZ9p6n33mBET64deWbUdJ",
  "key10": "3cqsV6PaMEEPBHpsa97jxNC93D7Yw4Y14amFZwUZJ61VG5DbevrvenuqPotaDUp4bXqChB5Kz1jWQ47n4Dn4A3eM",
  "key11": "3jeCiPpxMHAy81L2JMvTGp9iCyMVwAAMg7Z6hbDU75F8mbMpgERvXA3pwCnE34uNCrCUQXatuZcgHc2homwmujSg",
  "key12": "4e76RsXtAUHHaPEW8dhkW6ZZgwtu7Nq6UpjDLYYYUKeQY8Eu73rbj8xLE3hNN1vh9ayW8BYJfvqZooe687rPs4hz",
  "key13": "3LFbVjgqmiqtFrdBH5MsFNFZ4G7bZKNHziN3WfotxN1UU8M6tzxp67NfzNdACZDjWMiiqJ49pTjET6JfMTDupXA2",
  "key14": "4SA2WcF5X615uZC3cnKB2gmwxicPFVFW9vh3DZSfpa3NKuEqjUF6Hs9jDUJcdrLSWH19vGkNmYFmRe7yrCJtvTsD",
  "key15": "fcoXPxX9DgrkRHs6avU5SwPkWjmPzMeoGX3gPUjfuPFVQaKSJPsY2QduudUNsdChiuQGB6MTZXdRdXdaHpxF6Wy",
  "key16": "5c6uBeqJo8FYv4vxdqWfVKnZu49ntK82t9nwu8PBuPqideimPf7M1CNVqYbpFZz5ACoCgbgLj1i7kMTyu8XDDmB7",
  "key17": "5bamq4xfbsfDYNDVpf6mpVG1guoP6pHyhmkS6ax3JrBM7Gyrzd2EB81Vs4GwrXZNxwnNJgP1bJ4QMXzoYD8XmTc6",
  "key18": "fTUqHF1nAtw7EjardzqZpzWUtJVSHt6x221U5D1CJXzDpKuBCZvWfQiaoNYADfkr4YrVc2MvtCjnResqa2peozs",
  "key19": "4N9rajxdMD2XV7EuUNQieh92SxS9DsdJCQg3Y9vceMFEXKYLkpHAYhk7jQKjga7Xtj3u7g3vj5dPJcfDc7EZA7TS",
  "key20": "5pES2QumdX8qLuMP4uMuat8S1JvNL4iAHMq1uuCrJQoSmrzDETTKu3hvZ55ryRpGvSn1ENhfimvcm5Qh7j4EPH2o",
  "key21": "4hvRai53MyPG1QvQveEcoDDbf2sor7Mqwpw42wRKy1WtjzMq5PHJ6QLKf8EzxdZW9tB52CcHB9UjCaci4egzxdhf",
  "key22": "2UNgyHQd56b8y4HRHga9cHqMG3DRahs8H2sLWEX5MBz9N1Ffs8o9Q1qY11nhspnoR2hfcWX8fhiqy828NAi5F5vX",
  "key23": "65oPWNaomiS4yhdtfLMA38fhsh4LiaEkXXGxnA6PZrJuGhbdDau5SphQ9o5pUtZusLideDFvnfdc8cKBk7QLvENT",
  "key24": "4cJPQfUfM7EDyYThXMYfSxc72e4New1CQRoLmvukq6nVkJRQb48AfvPcDKJXtaNH7kqjbMuDUjjz1JtnZzp5Jcm4",
  "key25": "4tZ8YAttrKy1yZ1ykp5idKoVUkT12vuvhzmkRs9Z1ZUUCPtJic3ukHQrjnHGEzXPovwwFNihGSwdVVjgVie1Z3zF",
  "key26": "4pbUw84qjp459UfQ4mHNmgnzLrPyzfwj2c7eaxhh4v1mGaMStDPX6UAnr1u5egszwzGmLK1QJxBiz7VUnmo4BxBE",
  "key27": "2C5paokNc1z6RDUxGiD9pTgDTRvPxjfcesyPb2MJ1nQJqy5FJvU4aHy9jtycmVg5oK7pRBzS3bCHqhd3DtWQEMhx",
  "key28": "47FmrooWLdYgT3HrtC9nuupuYdAwTLr5xChaqx7fVrCjW88Jrzg98vbmpM8NEJKwnXr4Jyw6NNNYXZ418eT7YHnP",
  "key29": "5VcrdFFXY7JqX6kkoFCjS6qCrkd2NEUH8G37ZLGYpADS3j83bM734WCy2QZcPvsST8J4rsJ9zEkL88Fi3GMVokDz",
  "key30": "2tXkeVfTP3MjxRD8N7u7CcWKw8uoVGsNigPwjHf2yWYfRkRnNZRX5kJ7Ag1y9zecedqZBsS9PzjiwYNaC2RSmqEf",
  "key31": "5JtocFfyhRYB9LB8zbnWg8J7PTuMbH5BDBbANo5SmzGq2gAN1czLimrXTKmHn7H2zYaw9sdRPx8e1VLhiUcJum1A",
  "key32": "39Lb86tLZpJXXDHrM2AEVZcyJNrc2NMfyN89jZKtBiqXRQaqTuKJzvrmZdVt7TKYeNWQLcsDBYBGxpYUC6KAknXG",
  "key33": "5Pk7fXte88oywU4CqALViXwoswFY3FdwyHwT2sSTwyPR7LbnHKp9GLfYjrWytemu6LVHGt6r18wpV5kmgZmK2TpN",
  "key34": "3ZbhqLkT8Fc6NF65XxmTSnJxWQVwWLmnTveCtzj68JmgDePmn7F1mc4g6M4fL7p88bEJLL7tA5rz82gLJDKexXEE",
  "key35": "26ChKp3axrGKThPigEGK5tA92LrxAdAupU9jgy73RBUbqFubFmgvjKtKSoUPTAqTiKcx6GFWZ1suA9Hwjq5xunHr",
  "key36": "LM1BfViwsa5vgQtmRMn6th2HRn1Un4D9bMyrtGtWH1BSjkTEVgFhKSCsreH3sbweSKhLNYyZwVSKXUt7uoPkDnb",
  "key37": "5LkPtuMQQ9bGooof4rVE5PWV1FX15kbdzV1HTM2EnsDK3UH9AUCDasUyMu34GvgkwDerDiRuhFTJdMNnd6vbwHvp",
  "key38": "5isVaHperhR4Bd1a2XP4g5kcMXmGv1wBC586w7vAFDUTsEL7TMeAJvtBM4TGMUwwHKexzH1qPuMMuhz3gXRXNs2n",
  "key39": "yg2oijzVRADyCs6rzQfWtUW65aFk8crySb93j9VUwT6vrykk4ABJTc2rNdYi73rBoU9KiE6mBixX2mGzsMLg59g",
  "key40": "2jCXX6HhqXmyJa5ofwrEJE1cLXTBkWybcfyyCPFFNBtZfTn1pH7sBr2iKypkgZcKw5Xuh7r2X4e75EdkM1zagjvV",
  "key41": "3hMiqRjLhCEnCbEnEL8u99D6SHZJUZFDX1q6h9TeXXJd6JCnrhUKG9ufTxrZHKsKq9GcS6mirsoevJxhEtXXYEL5",
  "key42": "292gGdCam1P2Nkdy12FJHmMpRzLbRC5c22ZKRx3HUJUPqC8btEHPDPxPuUDweeDpMtMQP9S13425asTzZGmUjebt",
  "key43": "5jXn9a72ELfEp2SRYLvYHjqX1jAUNsn1KPVy2QtvAFjxttzxiJCBYgWzqBDnXMVYXmhyRmdNrxHuSiwsuKuVjusM",
  "key44": "3ZQNtXpjdtmuzGESZuM61mchKsVavriwmpgm42JqJcA2juLMUkkhDSR9pdSmgVMSuSwiaJpX2y3SQ9JHcGQzLKVx",
  "key45": "3qFyvvz9dnbyscEe3QvfZ2YjZcmx13ZwBQmG2zXstxu6zXHeDAyNk9pinibyghZ3ZDqtSt7RFo4EZHqxhcQQXJPR",
  "key46": "3LNaARk8x116PM1VyYp3ZEVCfJkBvBspkvVs7J2XgaDkVvf1t3kVWH99tFJdeRPeNnMnYBD3MHXm4fTWXP5uPXk"
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
