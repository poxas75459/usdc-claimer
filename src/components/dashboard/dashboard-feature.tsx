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
    "2hvgGZKjSKgUYuRNPXQTdC3bjLsaTEdeMWxukC8iSE4b7fkXdeRC8CPdkxV1otnMnNE21o9bmKrqhsC51AFSYo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TBhUvajUYRxHheasMxP3Q64bfZbjAqHdve3s9TFmQm2WLC3CZcPPHvH3HgrYTeE14PhdDvNuknxg77gRLPphLj8",
  "key1": "4nfWajwrxEdaPHNSTo1C4ZAQ3hvMzugKhWZoDHk32MRZnPoYgMmKk9NiNaEk5UE7PBxRhzSBrwSF3fQM7dyuubs8",
  "key2": "5GtzLKzBnmVN24S7BNjgK33bwdC9QQnVo8WhYpeNGQZX6Wa5FcF6BeosSax4duGSL8DWhsKoqHHGY5SeG45LzUWy",
  "key3": "3TFKDouBhhXCEPRK1JCkE6s6gQggLTTeuBy9xuKJEsmn1kbsHAqeoYpVbXZXm234wTfpGbmNUG87c5ig4ADk1wjS",
  "key4": "2V8iY1LGxb5LmSpj6NdXeLCtnBf76Pf6yz7mxMrCTZ7PSNqgBKwSRsg9MCuByCPPA6jP9HSJzZQsNHNVEkbTftY7",
  "key5": "45qRmpdcUvEAbSjHJX5yWM7BipCXHHZ6nHKgGBZembB1rXRD7qudiwAuwV8D1HB7GXWTbUR7mg6nY2d6jGeoLGCh",
  "key6": "4ojBMeGPWhXNYJd2ntQ1qkfgBjyMrupNyJBpAs8hC8qfuR69jfgz9YqKUf4Wo3BrJf143inkAxPanr6kimdZeh8d",
  "key7": "4RVVjNdLnhDkCrGJGybdUEQM1byk2ooQRzhV51r4XAZA9EYTsBvVd2Mi7nfN9MVxNy41MdtD3GsZWfx8XDfzHFBq",
  "key8": "63PkF176LW3YbKZwuLU65JeAMhvLm7AUBrQSfPFvRz4XsA7nE4JAQmRr4kh43BHkgMsCXCqkqCEL5Asv6wdjw18D",
  "key9": "2ELkr9TSsN73icvh1usngexPrb15LDAevu9by267e12tYgLBoAcH3dtf45aYVJpAab5z3FEnEKFducgpkW56i77w",
  "key10": "2Kswm3JPZJcyPWMEqP6y2CSHyze8Lki3jChVfXLE3zF7y4RRQ3MeoDbP32LMssZPXCmUsQbxYBWzvZ3aKCXssKGf",
  "key11": "29EPEWk41qRwDqgUDYXMHNdCmroU6SHYq8Da6eMaK2rvtUjo39Rku3SbcKwK9pDauRtB1CrhxdHRciZHTh1sc19z",
  "key12": "4aytWzzz9aX8Hj6EXaNyYj6dxVibiwmcE8Y58uQ6DfbnHb9owcqkjR84TKKE6aaRSiEtEiEwt3pCnEwpfgBGkxux",
  "key13": "4cRay8hiLgAFExKvSvg37H5ALxFsBsMWnAXVdau6tjkv1uVeXcmKz15hJqWxvHCUXG8cLvJhzGYust77mVHs5tXZ",
  "key14": "4rgs9KPNERn8vmeFWxngqYKYfZZzVYVUh9Bg5o3iB4RwC4ePAm3AJt1bEvMv8JQW2r3q6AN9QJdXiUFGdiAAiV8m",
  "key15": "5RbVoxkYmR4Ajua3ByB4rHCS1NsHQNHRrCrvBWDeM6GBZbJjC82vuViq8Ht8odVZJywwnd5ZtDttFtfMhCUeCYnh",
  "key16": "5eyZw3dvM6BKvckFRiLFapeBKiu2PnkAXm8FsEYyPbXKMRyjLQKjiqdcAuv4TqquHCzykeV8DpKjaciHC9UN51sS",
  "key17": "gc4Y2meswypXLgsQo5DxAy2UvANBBEdjCbVxex8rxFPPD5KEacjyRvvgD7dwxmR4eD4nJ4mhiB21y2jWuSJHxB9",
  "key18": "2wjnvuNnHe9SUcufuhKxfqFcvPsvNgpNS6kSGtakbFXZVaVQLNV4mmMmzqeQW8LSsMdEDoSsC77ceBv85dPB2Kyw",
  "key19": "5XNBxRX4EnmVTHpNVT2eaXsHYURzCZ53ZRnxwqnpDH2usw8qBqqUmfwbhHU8AKgJU1M36EZDEribajSP89f5aaHg",
  "key20": "3f3tFHN4fRZAWqweXvb34DmtHJMdD25ukCQmY5vZmRMicSnqzFSgb1sD412MVpeweAsbNBNWiRBVJDEskXg36VS9",
  "key21": "3dyjSFVqkbBpsKRCaWPzZ6VhNpypqcy5CospyvYoRjPmEeL3tceoJo98vq7Gpkoa1RCdhVwbnjZFUCE8MMFtiuPD",
  "key22": "5WSvMpZ1RtVLfbqfNxHoDTqLvTDgdjyKzeZiYK1YsHayMNnYe5vArk8svVNv6bWC5sg3xkrPBRTggGLA3r7vkQAw",
  "key23": "4oMaupjr4BK8ixziHFw2NgJW4MJtBc32BsbgE5dYemYVTkuCoEnKeCp5TiBZkTwmcmNNoqPZyK518ns6mHdywqnv",
  "key24": "4PEZ1CaCv42mzzJDyyrqYUDuqYs8qtDeEwPXDMxifSqjpSF2hmJnFSLE8AC3Bd31b9VN1gsNiACcfjYe6zhXhRdf",
  "key25": "5PZYTVimBTGUzmVfRqz38PB6F26oLBnxpv7wcJsqhNW53nmRsiBxcUN6dqS4wepZi7sKadXKppDg8ms9bxnHJXYk",
  "key26": "2WzQJmBLHuZDBon4n7s5HwisSCWkHZRNC5iU7TAUb4TF7VndAQoZWsFTfQxZXJrLKfXZ5FCNZLh4TnB2ajXD3gse",
  "key27": "2qV4qmKvMXBvPasuFqxU6iCpqxuvvZoppjyGw3KZskk8jtpPbygJ98piw9iyrsXBeJZZj55jF8f8S4mtFAnEfUGK",
  "key28": "5rTTvRzi4Ed44PZeMD2pNFsVJBQvzWy8WEtvN9B423ygk8FEwfcHDap3n45ePZ23SWd5Xs3cfbNC1HbdT9kYxF7m",
  "key29": "25FGF6R6vvgdJv7qHTPBckhbWu8FVdYMh9HjZrRw6q2wbpDpMdYga2XswpDtKiR3cfNiJeCx1K57pNseiVFcymbF",
  "key30": "5ugGFQJ4WXc8a5JiopgWa9X5ZJjuTMjuqJP1c6RWCAiE8VtroubTkJSX2hjNRQnd1TAvdz2jtEw2MsaYb4vBMwQD",
  "key31": "c68yxLkm6qxbP6KYX83od6NxPD6nLzbRKbRpHD9ZJwdq1trhj8APEapYXVDwZTF7H4cVkiCndux3y5L7uPnpeHz",
  "key32": "2xrez1RLDbjXrHSuLmzkHtWCB65GRK5EVPrYyFJUexqmK3Trs1TnC9rFuDyLa1VM7J8S2mT6buxP6Bshzc9DeK9K",
  "key33": "5KyguCujW5NsSsBu8GQDkk2p37GmQjewnMV32ofNsV3LiTRJ48Ejq9Cv7CFZpZ7izsqYqMR5GfRRpBdtwr9UZGHB",
  "key34": "3bLeMRMAfU2B2VjF1Sm2qhJHucsc1v5swsLVauo9zTAb5YUpMVJrfYuYmSDNBmh9tLt54rD1h1hpWGUZrro4vhJ5",
  "key35": "4HzkKYZmcFnJhwUVQbTU1QJK23efruJnwZTv3hUuRTMWa9iQm6oguuTD2SMXJ12Gued6yfpDU6vZoPsmbKYEFhxm",
  "key36": "8qDLgqsSi8mHv1e8pFS5emwymq3oXqXSqSjWa6inH5mERbbiobYLggcoeWyqwpBEQ3txVG3hVa7WtS8pDe7zbo6",
  "key37": "4pi3XCmb7y4jEajhPs2YP3vbjZtVDcZ6xKMHvA6hfmMjMWqgUYDnnNd59eYyME92QHWMWCzTbX3zNP1DdUdcopi5",
  "key38": "3NSXnQVLvq7bANiZSrHnR5antR9idg1rQSGKCmZ8EvwDHwYsVYFuB9BSL9AAAi1RHjcKU5Y9fdJFCgGZZ5SR81vq",
  "key39": "4mSP7EpvxSiumfWnRVp2eyhLLfyAiFBubFatZF3LL2vKHXEETbderJnpLzWD2aMDS1h6mexnu9czFUK5fcxRXJeQ",
  "key40": "ciDHHypgjq8mDnJpMr6sjz2hFEyXp9QsxFMcnHY6ck2gm8U6LwSFhT5yWZqSBWF2LJDGyRpgTdwrPBY6FGrbGgk",
  "key41": "wHYkpjcZixVfWDmEpBhJTGKzef4KB1ouHScR8ksajtFYisRX84ZGq3jxPjgTZhwkYS4gVSWEPkv2qGWzmW6Rh3R",
  "key42": "5Doj6KNFpx1UmR36ZCgREKycMvcMtuYiwxLL6ZxGtmNLHVeh4YsMkteVkCe9bYKYUPU7s4Tu4buo189T75JoLuZH",
  "key43": "bGdMUAFC7Kme3zBZw1u7NzBvhAHKCAyfHna2KC9PbxJdwy34A5T75PwGVcgnfKVeyNZKFzUHgWsdPNNmzSPF9EQ",
  "key44": "MFEeLaifutvHMR3o5ctFFsa2KA65cFreJ242qacKQ6j44nvXRwkS9epQy9ywD8HP7cdxVByKBp8jXVXedwZ3dBn",
  "key45": "2aktxkwM2thoocXoi2bDt1msKGP8usn2t5ebhAvbPzXK1K6QoVvpho5TXS5c4zzkQk5LZQg51fGnP3fGpdB2QYqD",
  "key46": "2v9QmzC2QkrwFLD9aH6cZ6EhxgoVnSTYcmkeTBynm3ZMa8Lx5doisBXABPnUAbrL3n8FnGxXKm9dgnjB6Ji718Xi",
  "key47": "4y5TGzrf8dpco9cJxnCoLpRZvdcmTLBbVSN6oknxE1bvmsHsDPcnJG4iCDNjLbLCsjyifzake3zVXLTkwcvgyuaY",
  "key48": "wPPsAnhNUpAw44qQDh8PxGju6wQRyC8rg5ndni6CERjB9wxFi51bjQ9tb2DLxYdMcnCkxp1gyysihAmJDu3tAik"
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
