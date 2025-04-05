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
    "61eokEN5Ur6kHLcSxqdug3bbDy2sHWCpY3ka3EqXmrCcr1H4tmNJhzdvDepeZnfxU3sGYUqyVu9jVtmoJp2A6ADx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ececZeXc2fNFtiMherj1dC7MuFoSUCHVYPVrvXsHaXHnXof9qYnbdEvnAcVSiab5j1Hp1kV86vg1tjeR6a5aCsU",
  "key1": "Z7J9JL8qRvrCgLQGaNzKJXVqPvKS2miwKq8F6xQ6UFsk6tGuRKojbqXxcLkaqHhSM5MkGBYEEKw4GggizpMpxrB",
  "key2": "29fBAVDQWcPFammZ7G4GiXG9M67M2LNJwa5wbvrg1AM1nnqbQ2yk8U1xyT8Lz3HTzZakHQdWhL31KEjbgRJa7tYJ",
  "key3": "5qq585TAmDw3HjzUWP7xcUeozzVmw8ou2UiwjmwLHh9J2dX71zFrGMtqeLpuWGaiofATkFfoxKV1EAx5xdD4L1dg",
  "key4": "1257BVsY5gztY5AE4xep7URkPUbTx9ZD5Kf4rxwdhMwK2PRJdVzZQnMPydNNHmQ6YXcxB4uVpAG4kthYVXmYhtGk",
  "key5": "36xeqfkXkei8pn7uVKaKeWeEgECncvF6EVbE5xURNA6WVSWHcwjNWmoMvPH2S4wUv2pGJcx2orp1AZvVKiS89pH5",
  "key6": "34fP1zYwdhB7vrFA6GPF4wzYJxZPHc3XbmUNTCuzb9agESs7qwA5FN61ZbRaHKfC462QpNXVFaRZh83JFWSfBGkR",
  "key7": "3JxVXGjsMAHdc31isy2AYx9C4vwvq4YEnB4B8gRuWfNCiZhvgPJQPcPED7qT3qWpWRk4X7Aky7QsK85p5EBosha9",
  "key8": "3xxXDTHtSwqyty19yQ78aCDDUsmCjPK74pewmWSD5FvCMYDSa5QXfARHNSQwQ1xUADLzkJXA9WFpruxm8ngYsWxi",
  "key9": "2kqYiu9DFAxBiQU1ve1AybnDynKSKPdQxKHbu7VCtTKyiy3QdCzwQ7B1h6pN7sJfcykEXt6XSizC44NPiG8BU2Rb",
  "key10": "4wcxPmpXrWUV4WbC6MGqb4JveRxRugBsz5Vf2BKGmJeYJ65B4pUX3tN4hAapiEa8Wk8e8hjoDBXSAqDAFxq5EPsv",
  "key11": "3aZtpzNZvURETVjN64R4U6wpQwjykEi7qAodiCUMkJF6q5nWiietZyntKASPBLYFFD5bTkRN96TLgVUh1mF5En6y",
  "key12": "4SP5ebxFgFkt4Eix7Cbydp72zyQGFc8yMsW26avSSJsTQaxRab3n8NooKGNFaheH6tZftshQtnDnwf4XZC4dLxo5",
  "key13": "2xDGXXBo45cXzKG63CFFmHgsy7ndZcFazxdY7VrMSnqeoCaL3cv8WGhCn7GqzyL8rnkBv8hpoKY9Xv1sZp2VwGU6",
  "key14": "BxCSmPVanP3CdyvKW4ym1iNJjBttYecxXRGfYS4MKdCvFqHxiprbBfFkSVXv8dTSfKvNdy7jk58HiYo3hX4d2Dn",
  "key15": "CbcLW73Q7fpa1acMzFqRC2apo3VXumhC8rGJE24u21LxuRuSrQi9YT3fY2trCqwipDigDG66qmCjUjcUuPrtsWm",
  "key16": "5AEiic3nGraN6rrvCzRS81UkBA6csu2Nt61Mny6mmQqriotV4ecfcX5mo1BoSxSqEW1xnbftJNWpDcsMKccSBDn8",
  "key17": "XjNtA3TE2zd1mk2wQCjkEZdW4GdMbWxS7xBbe2hy1qvUoaWytWhVuEuSKaWPMNx4KtT556jzDq1ernttE6B42Yx",
  "key18": "5A4SFiEQMXqDKojPbHi2jJDerggFVSPLjvawqs56yLPQJ2RoVz34RGwJbuXNEnBrsmdQJfqWvbjiGFyM4iK2TiXC",
  "key19": "25JUsv5qvVZctinSVFpeX9yFDDDQ1rxKthBdXZQ6ymWZzbNbKanZSG8FuySwu63EPhsFCR8bRtCsfKvb6VeYX24Y",
  "key20": "4CnBZKYuZA1oPzAfrrvW4gtCMKa5UrAgJAxgrTzaENMeMzTgXuwsdDueYz7CApKcLpDRyXyDUdctRrFUAnEe6AY4",
  "key21": "2E8Rks4keY7cLP1nmxTS7fBWyVzC1TZxsLHYaQWuRKqqLHgDnTWm1PqSHb88uJ72oa31ZLxrM3dUrL3RAR4EmjoS",
  "key22": "4yVYoKPEwMwpCT8fEgANx7K754U6nisaWPjLnssnhy9d8Es6CYh8tHWAXKg9hKbLAeEmytYYtmkqE66TMT2uhr1o",
  "key23": "33d2SM3NagUVqg2KLZ7RDHbZjYC7k8BLsQcrxf3uZts7BFMLctop8sQntRUAaDZLKiTyN6dLx9yH9btkNVVWFmDT",
  "key24": "DN5TG3bS9FyM9HtYtzZSCF2ryRxv9h6CuXH1vwKbPbz4rve8Bt8PP2ZUGKK5xka9VfuEojdjAwShGd9cYWMJ5q2",
  "key25": "5eopTx6SzZRPKgcaUfwdCXJxqcZc9aGFhaWe3mGfXz3J8gSLfoDB93ZVpH1BFEiMkwuVHHYoJ4kHGgQWCMpdvdTW",
  "key26": "3me6a7AgsZpVCpyqP2ToZW3LgjxdErnGcxEwru9zePj7JRB27cQgoCb5khkYbyHnfxCLk1ezXh6LEJ6Z44YyCFhj",
  "key27": "3cyFvvGFJ2povJEXFUxuSAG4gE9ReUNWJ2Uz93iSgStdkpT4LsBbefY6EqeXpYujVyUs6Lk6oXno6f1EXBoAuiQQ",
  "key28": "87SqGKnEuBVNw545ydVkvDTpp82KiYdiwy4iak2Y7AsFt5dPK5vFWiEpAyewtrX95DjFL1xB7RDmcPfuLRX3mTF",
  "key29": "5gN2ZdnK9iseSM1eyYRRvqQxijrVqR5bvR1Gm2HoRVr49qUAYS8D7bWqJfMqKDYZVbArhc7qExGEvmmXxDDz99aM",
  "key30": "iF8kamCZ9E1mo5B7KMPXpWEDDJfLmWujg6dDvWvZmB7k8T6FZqRu1GrHPo9qGSMaVZyf2MZTag1hoNTgXBcoabR",
  "key31": "CoGmJ4G99GbDZJNJuDZqjGXfNHAxZvfjwn4TTTUQGxKkXU2Q9zzuKdmQFwT22psyJCbP9Kn192bztsyYb45g3AD",
  "key32": "59oHdyrQ9rPkWnSDW2EfCNMXXAnKENYUD5hMDRqt4bNVKAg8GZSwoU3yaLFyoLFjHjEXHmy5kPPcdiDUN5rsf3E5",
  "key33": "4E68UyjwtuRhDvUPHq44gaosWKLnhyEyHv4bhwxLv6y29v3bpCbGmkLk4t2LDwnc2S7mSDsfqyzNhz7iGafpznwq",
  "key34": "4SqCX9AB7xKt6CQ1ZmpcwhBmcVfpiiq4uKPJa5ZxJ9FQWm4bdjTsbaNohoxgAiiH8FYum4JMNS63f5xNjonn8svD"
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
