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
    "33hAeHNoDwSTXkzH7QW8n5n2rCSQNgE4wnN8BEikPPHCeZWye9phbqip2UbjsedhNVY1itwqqfnUw8oDncr5CHJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPftMW98AtJZFzr6sLhuRQ8w77LobeCedma6vLuFLuYu9MK1M9SPbpwKSmMCSUNqDesmHP9jjmcxqWetf37rpxZ",
  "key1": "5XxNZcpx8xeJgGq3uounaDLJjPQsTBJguEey249wtv6PaPY59QJfC9gx3iQVhDhEN1HFVo2yGpt2nx8jtEHGLZFt",
  "key2": "3Si8vY99fGVnSy4hWuUMtsX697u41t9fEJEfVaqvSDPp7VHHVtmud7NXcQE374SEDVW7Y8EoFWrj9yY4WDW2umnv",
  "key3": "4zG3LYexXAVy3wmEPuX3smRuSh4oUYanWSBQvn1LHBRT8psq7DB8LQaStWD6Wr8djzBZZsXxtgHcNSLUYfGnpGb9",
  "key4": "3QLMYmUdMvvjZqWYdxU3bRDbg2tU5vDPQbtXfEen5uZ5QEztsNM2bdRxVV5RMEoUfxpWRMbrwVrfR8JiidJ8fTPn",
  "key5": "2xzNHySmzLE3yDr2UL2wR76Ma5hxS3VwNa7dqVzRc23YPjdwjxyzeWFaPmPNjECHbvQKQtv6b69HcpQEkqSJV4Eu",
  "key6": "7RYm1zJVEM9DUfzXVpyA9mPas8eouGXKU37bZnYdqz2uXAguxZLUa1umVAHWc3HzvFkaEb1d3q1p6uYhxTAkkyA",
  "key7": "232Js6Wh6JLxUkBMKo99N8Fynjg5NruGGS1uEZx8FYF5pSRWXanwdcpiJW5ushuLo1H6YL1PKz8S9Az8iqf2r4os",
  "key8": "4DWgDhRHHiSrXTunQuLfvm4D2yZb59nfTc8sDobTftMXoM4sQCH471jM5DmHkLji7FjwaguvR91FvemBzcRs7fFn",
  "key9": "47noHXDaxjw3UmiVfEnEx6q2sZ6u4fP4NccCkVrUiL2ZeVjnzs6DKiCtBVKUJqKYxYBDdCzhZpKtXGM53ouoBgfG",
  "key10": "4DCrAZNcHMcagKVkZJFArSqMBRn7odsR1j1K3TrWVYQrEw5mr1J41wLTWoLmVUooKVnp8dhBGVnnPRomYdwUypAd",
  "key11": "4ttxnb1TRyuyUfX6kRAubFEBFfJLmnnA7TgDeoPnwLGnDCQykC49XsE2vKjWLLe5zronzBa7Z4ir1qZUHgKs9Hq7",
  "key12": "vsRW5MWYA9Fe3muhRhEbTLGY48PJsmCZvQmctXkYodz7rwxtBUfgrS6soysV7pVpe1Tb9aafL1aaBapQj7JrqaY",
  "key13": "5Ee1mShqVWTyCDrbpKupqDc2VHWSEp4Bp5piGM9PJBVSBkdRecT8LqBkQMhZXmymiFXADP1nJdixbFvhY2cEFbtV",
  "key14": "5TSh2NFiViwiWCY52rKbMizhwo9no8roKnTYwuXqteWszQNqMX8Npod4ZEFSKatf9yM3o3RjRv6AikRtgP61bcCw",
  "key15": "43hV6AMdDtVQqfiifXMA3xNiUhPGLsVupW4az9416UkX1LeGEtN9ZcTfBamrgj5Hem2FVcnarukxXnFknZSLHRpH",
  "key16": "2CnaXtikvMt9GzU886gfeVYQhMGFanmDhPi8GpxpotmaTqNcNijaMGvtvhoCrf8KTgT4wRQCDsfmUepXo3gU2sjg",
  "key17": "3dGiubiB5zgmn9xKRvwudhJ8ZANk3GfgZyWVjTvxjGyXo929m9UNaTknpCgjm8oQq3pLStTeLrH52dmfjkJy6yvX",
  "key18": "2A94E9TrE1BJZWfQFUURadJFqiNL28R97nihfSwijYZA2opRFiZYVg3ni9ubJyTCytjnVNig8rfSjo8Au1kSBx8P",
  "key19": "MKSeoxAk6jGktkPFRuGudVMF2qb2qHMExTHXJhvaAY3nvQUv3PfpP86Z1yveWuPgEaahasDssVwHZ8wiJgnSnsJ",
  "key20": "5LFQ3wgNLUFnbJkzrWcSxwrSnVxS7BX4A75CFp4ZNgbA2nZ8i5sNAEVAdqYg1tiJoX8wWgC3f154ucTLA48Pkcid",
  "key21": "26PwaoAf9MRDnZUrUGq2S73TX9rZy5RdMi3C46rd59CqpMfYwfJ7GJk98SbcG5srGguPX7aL14rUgCthwo3cVzJ3",
  "key22": "h8FokETGMtws9xBWEtBS9Gt7kTZNSFTaeh1jGv8KYQsemrBmiBCtesNjjCdjJ4Uo7N2aeuCk8nzPAaqB7Q3Zng4",
  "key23": "3ebjY6vbxKHVNqYCi7d7g4jmKz2Leoo1jk4pUXfe2MVSDycAesPWKQTqrtWZDJNbvZZkKoaeyXr5t8bQ6USGVXPw",
  "key24": "4oQv3Ba56288qL4PEWwSuMYUJJqe644XxjA9F4wiBd1UownHW4tVPTkpgrG1p83dg5YGLpGbCiBXLue9Too16E6b",
  "key25": "3wWPTqJkHFxZY5MRiCpp7u3eGfyt38wENnKTdWJQDPRCovW3NUPNbiehdW2KsbfMkXbBE9jFyYKWz5ptrbHwaLvV",
  "key26": "38Nb9jLQGEtAMP7uTk68eu1fnQj5EdzS7fkGtzvXpzfBWXHy1c6Jts7ivUvCeMSYj3qxQWDTpWxqG4UPdqaGUox1",
  "key27": "2BdRiB4JS2zk78sdoRdBSXbSveVRs7vbJDbPj4jX88RtJxAeeC9ndub3yZkxUi6gz4LoEKrbQwz1aMa8n4yV3r3R",
  "key28": "5BJTXsuMueRWJngUbfPAjQSHdjLTHh2upCjXBRvp5t6emC4g23yogufoeQYoYixMf7QXbUqwb4YrNuDwStiKRPJS",
  "key29": "5PbDMYERWZ9he5pcbGtbRKZkhMmHji7DCfZ4eR7rxNccx4ZoZ2Snz6auks9teTQHzeA8ds2bXsSLPpZE7xL2Ne2B",
  "key30": "d16Ctef7iiBjFYFN1a9rxsj5h5XDAfWwKbZVT981ccMmQf6pN4nCakxXqapKLrCW31AFjppUNwSjpHcVP8xNebW",
  "key31": "3b5ofmKGK9aV9TFWwBpmqtyoaj1fLeRjTMBfNJxZBw5hvuaN83KumMQ4zrt9CpjZHieCYagK6JnM2c5d6T2qqD59",
  "key32": "5Di5Pwa9wkhxEEuxAKJKDtcUGcDK4Tc7WHWuJxB4DD7byfyNndQcjbhR3pPiG6kEpgpww7ksCzfHJiCwRdFtPNE7",
  "key33": "67Mn5hv3fUC2SpWEzRyLC1kKK5yLBF1cx4w2BmL7Fv38iQ29cpQrJHeKDxx7oCxb8bV4XvZKQt4L3Y9qfY9df6eA",
  "key34": "5Mv5CuD7utureZ8jsFEK6iGxoRCLcbG1JWn57CqkNk8Et1oEXm3V5k3nbRripE927hDzsinZZeU12qntQJXzxUWA",
  "key35": "55Ng2eTrksZW5W4EdRE3MDNSu4Bg5Srftve2Re9BCs9oKd58FrZZfv6BZ2wxAGYHLTdviow4feBZU8MXoaGWHyiU",
  "key36": "43TKGbu2PmEBcDWjraraibYu7nzRD5irvp4JRtQX6QnJJpsQp6zVUVTyruFWda1gNfeER6DEBYWKhWj8jcLEEd3k",
  "key37": "27UMLEVcSnmL5AZfTipnN7RsQ8ersPfNfYsCUvKYUKR5e1PtJDddh1GdQqbkWFNqcZeqh748Un8hwkD993R1TYaS",
  "key38": "4tDHJ91rN1Av25CLoJTNK83s8eSFwxWarBwNR3NMo9VsDT5JkKtKwYDgJnUJDNoztegnK1ScjCR5TBnbBP4PEML3",
  "key39": "3ou4ZABai3rNhZPz2PoNAtjGqEZHrq8HcceKmusiRJh57uL61SJf9v88fTYosWkFA1y3QsfmSSuoKdWfV8yHczh7",
  "key40": "5VduM6tXXugJ8PF9Zuo7cywMEUcCUwrp6nbYxZQbtChNXdbZVWSaZBN84XnNnCepUYvXraK71SWLsAwjtrrQPhH8",
  "key41": "226J5yF8SLQWbZnvZhPGgN22sTbMJ5pKDVeTq6jAxof7yQK5Z919J5gAQbgPoKHFxcqHnBwMuwUoJg2GCFLdC3vZ",
  "key42": "4iTKsvqMJLEF6xsoJNwTuT1TcxhAiV8w6HBhkTjvMsCDQpqqBCCSgHnySxBzH3eA1L248JuTdRsKby9TMaFwZcmK",
  "key43": "4osjYcKdNNBNpMgk1JYjJbM8z2ojTxXwTFQiYcsLqZSauDFE8jCgimrGCykuvq5EASFX9rkVZdKxKDYJAkXe6TaP",
  "key44": "657yeSaiBStQkARPRZoz6zKQeAuJSMVLo5MjwwjEBvJTXhpjLntdoqYbgeYpSVtAheA8PWBt5L8FQR75FP3YfPM5",
  "key45": "rYGXpEUntm1MRNEuKJwx32n3jRfxWug8JE4pdUZfgMCTj9XKMz77nC6F4RWwv2zgfiuKFG5hjZNdgx46xEbCRN5",
  "key46": "qd8c9T8E7E1r6ENtAnHJPz9uSWdNrisp6SVvGHmJmqvGQLjcuSNNdkrQ273p9dYWXohUjTe75RrHoGH2uaqvDL8",
  "key47": "nspKqrwy7wCkB63Vqh3JAgEuWYMfZiPewTgj6bcGDVqubHjGikD1v32QVsewVDAsdZn4La6y2VhpMq9Cg4QHyap",
  "key48": "2Uki2ju1c7G7eq4F4hhJZtbFFBRWczkF1nUiAybVKCVp2js6kdkxUS2NHrPgKyE8ktZv8TxxvMXmVfcEfqKdaWK3"
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
