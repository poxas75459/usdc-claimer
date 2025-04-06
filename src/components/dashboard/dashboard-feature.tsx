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
    "fk2sRTxzJo4zUTYzV6oaMA7Vbji2rCJvV4mZu8n1mZ3MkbMK8RAGmtS8w9xdRoSgBUMPE7hKAWi7SgSjEa44JwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLgFHZqKnvQusfjGZoAn1NNyjsYNphX36swRLVotALGmGJTRnE6zjybW6NRGDusr9uNiMEpBL8FGx16gbVFjPJq",
  "key1": "2ghf6qMFFZtGicf8mtn54P6g3pBnJvrNK1t7veHEAQj1Ujpzos3BfUpWxR5hyfxoDh7trX1tq2sseG4oEWvBpbb8",
  "key2": "5YGS1xtAJrPooGrSreJ7s1QyTtgNsGEbdL7RixMvnAMx1YYCrhMoR4FbgkZVsHiPEkDg6h9ripHBrGPyv7wVQCpy",
  "key3": "5CxAJUjBnu5gZPHoiQpD89pf7JvJ9M1CWig1rzDKU97giFBYkrRzcB8TovMjk7dhAurQAf81JPRx2x5oXgYqG1hE",
  "key4": "2B2mFPPfyh79yoHDpurwZdZoFdDkeW8uJ8fSQUDyLDc8pxHEhsw7Nyb2dGDYVUF6UZVR8Fz2JxWRJ6N4PX4T4wpW",
  "key5": "22kP4sGMyxMpodcuM85aBnqsGdwhhC9DZ5KxbraM4P3GowHVZpvf7NXzpeGjMz2YvNPq57di3Bsa2MntKqX8DDfm",
  "key6": "5bRdFv4HCSmTV8xEqym65cqEyBcEo7qZxyZPtd3ft74s3FvoPj7KRziBJ84g2j3Y1W3qnTehJLqj191sRHbtJore",
  "key7": "4sMFzuXAXxqASTDNWPHJqB5BoXxf8UHocifyJe7uPdMkhyNNVVU65VaAbVW7Cj4X57hMgaq6BZbNYo5Qd2TuN7ft",
  "key8": "5NycReFVtP4aayUpCKStEHPG6u3ThrMEks6aGaxce5AwC1RyEm3RgTvE2cL4wmtLcEbgDc2UxWUGeWGZCzRkgqaS",
  "key9": "3H31oGxrYRgu8uiDvSq8B6bzfkyZYYryUEkeoVtr5Dopu5DL1HGpKPaoy68WQi4x968BSDzXpNr2A189eL61ifDx",
  "key10": "2ouJcidE2fXo9KNkVqueRprE7itHjww8qkcQnfUpHy7QeJfMUgP8WP67EsdKKMfWfrRo7LSvYExtwgb5K3BPanpb",
  "key11": "3scGDcRvX5s7EVrurcbieqepYqaCG6z9LgjckM4Zv5X5B2Z8RcCrzrTo9SGeiKWqi2xRmpVMxCSCFDnD2GFzfmJb",
  "key12": "2g2toTdTr4sRHUB9awUPYB9aBFHYXpZhv5HSRsoZySyDNZ9ArabyRuVQpJBCiuhMp1wsj8p4pkRPigbQYqCr4e1H",
  "key13": "54GmY1j2Xz8CB3SfcDj7o1u3iUSZ9ZawkwT1h28KoLWypgDVEF8rRG3T8LzVnDB2dDzbzzjHnDi1dknnQt7PMrfQ",
  "key14": "2ieZYTEu5ki78RDVA6t4E8L6sX26R9e8CFwsfMMj1aCt4cfY7qAVc13ntBE7KRidFDAWHwdHKrQfDTFSpDGNrM3M",
  "key15": "3ybLWFuAZ4yUQMPdcPGV3dZ5KcKtKtLRnxYvCPBFvqtvi21VXC9YpTuWGPf4HnpzT59hnMnCfNG5tsVhTTPiw6Sx",
  "key16": "Ydq1mbh3sVLUbUzxR2rA9AADYJShrPZQHyHvfeFnK8hi7we42m6Kdztaeof6MxSRnPpGvZYbDZLhUinMZ8Kiooi",
  "key17": "67Ef9vwLze1TxWsvXXdADM5E85YN4mV3q9kfQkTyG3db9Tz1JteARpJ2NDCG64nRPz6SrHLpfbyJTV865bAcydXj",
  "key18": "2Ek7rWxtskm1sCDSxr8FvpeRc5uJZ5762EmKz8J3G893q5AiskeFNsyn37fynZbcEwaNqZMVqiybkmaQu4zMDukP",
  "key19": "23wdGQMNCP5ZtkD2ENEkyshd7HEsKBZAGAgoSBKx2HC4Snsj54efvihrc3psxuVP3UdZQ9SLv3dbqf7HJURuPKke",
  "key20": "384pGYin5LTpCqYzG7Etza7xN46sny9ZtRuxh4XGYMRMmuCPCrC7xX4QXRka3XycuSW4k8peqw6ftTHDvVayRk9o",
  "key21": "RoqPzTZ3nJgU2dp8q3UA7Sa5JKqXC9zA7bZutce9zfHRXqumZSg95j3F9BfsAnHjT3w3mChLohH97wZTWB4S3kF",
  "key22": "HVdCZ4ecMRLSoVyhe3dY2kwEh82AWN7Frzh24CfGmiurJ52aKEcAuWDcPXdC8q2eU5CPZSC7UqY9VHNmjNwRBiY",
  "key23": "4dCDsB1AjvhmMaVd4xXzdnwBL1DR3696yPHoxR1rEctveo3k6LX2hQgHeqPcYHvANiHgM4ACghQfWescKGx5SLwS",
  "key24": "pxuqKSpVHHSjTB2AY6exg8XmxqCrGVV22QFbrzRShwNiSkkgeRdzYbobw1oJtGkYwUS7BRbHvfwxLj7eXk9nT5f",
  "key25": "2xBep54iwMSuAUUEzdmGrG4zoF3J94sXh1MWACYrYuvb7YAdNeqkaqcEuD6Qt6qU6gsKnAAofMquRRHsaWGYy9A2",
  "key26": "5zEPnKWFUJjLWVUJVK94zrQf5D8Gt6To1CZLMvSMQ68fEhFiPtuvCQVspJy7bzaZdgBrdBB9dmNusjHWXZ9RY531",
  "key27": "civHxU4nkiYDFZMxfFfEXUFX7SpjzT9jTKthFYmqas5aKcKtmYX9SHjjbi5Sj5weHMA72Xjo2cM5RYG3SjuMKMS",
  "key28": "2VZy1Bc2MhPhgPC7QWRVXS3wpsQX9RHe8WHmrtVMfzDnX4vo66ZMFgC56sg86AHfvFTZp1qFDi9oA8CsC5mZJzHv",
  "key29": "2bs1eQFE9o1Cy3EYnujgVPsAKxQxQm5VKssACboFUuWcF9mH8XsS87qoEhoudZja3YH4MhMMHSboTZGY8Lj1pTB5",
  "key30": "y97BpY2afZWPUaxMFeTJjbx4SwTaX4DaPx2XZ7TB9RtKF46PPeLF5RQYL4tLbM4uR9yujpixM3HxyWJhs2RJCZC",
  "key31": "52UfJUT5LE9FQu4pBhQDwJpGcCAATW8qPvbX5tYTNv4M5xy3q1oBLsmhQLxLneLkBbpPLgPneRrVVufqej5vzBuz",
  "key32": "3zuSeCjuJzxdUDCZYTYavCLS55em9nN3bdfeo6RE3MQuGuGDsU4B2LazwW4npuwhtb7Bq9uUcVVnzat8y7RZEJBw",
  "key33": "2Ax6vPMx7qzqPGN1p7JqxHAAsjXdSSVhpq4DduHAPjPtVHm6ecd4aHeHjSPGym4MUyT8s7eDYwrX33BZpXRTR5PK",
  "key34": "54dcxbS6kxv9wtveXUJJNcFfaHbJLYcG7PQ6A5HHpY2hsP73NdKa92UWvz3eV36aeg9JUsbyGp5vNYECo5geHdJf",
  "key35": "eGtqpUc3zRe3Ua339ymUxpd7MFrys3Y2LDzvKiE2vPtjLWxfFY8KJ9NRsaJZA7vEooAw9LDVKT8Pynnf7Zzs5rZ",
  "key36": "2TmCbmu7QZx94Enie2Kj3XPH5Qsd8xCG3yiqwvutLoH4eEgEuBcL8Q91MYKpZWDUtPBViWJPPPUsZxZuXX6JXuHw",
  "key37": "gKxuCDkfHg1HAKFKwgHug9U67KifY789xsMKrfrCNwfD8wW7bBnYokU9d1DvjdpWxBcZSEWLMhwUQkt98hHPunj",
  "key38": "4F4Rxs8Mjin1RunBUoR4f3JmfDeaYjprtPxiwRzgxci61VsQqYRXH3MqwbX8UhUXovyPfexnzYt18TEqKUe73g4J",
  "key39": "2fiYrnEzr21954cnaxgqd6tqbyNuqUuscuN2JkqfSfSXsAuwRXcvPECbE8SQuWtc9JowciZn8hzzsSbebAWixxRA",
  "key40": "3UEyiJTZy97jbkMxxGPYYeQeN392BJV37ofgEnDfJJYvSMzbHYh9yBZEVUdv6hTbnBfzNREVDw2UoSK5CjPV1uBi",
  "key41": "AmyD3pTCRauiygrfPXJKWkqvzUXJWZBJLgwZc7YFkT5UYaGM3CYihUE5NPQfr8KmeKg1xvqD3kMbQRtfDDvNY9a",
  "key42": "2PDAWUDSVFPwTF4AwTRU4GMyu2WPiDoeUX6bx1jvmepuJ97wRu3uzFyAhw3vCRgWDLXKoMGVZmuPMDtyaAM6x9Gj",
  "key43": "3w3GLUpmFaGgeqWXAgbfJJkPZ72NAHzdAntiJSMkG3Jtag7SEyGVW7xrTekwLY7vPiSWC9hvqq2YZ3TF67jPPQ6J",
  "key44": "36AhX3U4RnDw9PJk8yTwvkQjb7ihmAyAK13NErkeJf9QuyR2wqCJDxwQHDmX1VTSdcdwvUxWXCbJXM8bCMsiwNEj"
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
