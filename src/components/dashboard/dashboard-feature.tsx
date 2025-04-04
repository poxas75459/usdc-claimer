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
    "2ebqsJSCxUrDmfAGkUFCYhF7cB4dAu585aRiGKZZU5jvYn62zqTDx9tz3cZF7RWBrDiJFreWNJdRvywAsLaeiLkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u7c6qC4gZ5tGtXWPCgpoeGCFitv5U42dPmx4ZEmAA1hggjMubCT5YHfC7RgYtCbF22XRspyQAUHzjPTLF6mrrcZ",
  "key1": "42ACsAe2f3zJYC1KZGpK4r4mQykWG4ZFSrwmx5edUDHEtSWzdPQ4kq7im9ME58vgNm8NCE848ExinQKcAti7rQF9",
  "key2": "gQUKnDZigchcbUcueHwb44UqtQgyNdbwfein5gygXrA9m5z9GmHccnEr281dKGrvmZYyj6yy6He6bSSKW372jm4",
  "key3": "38h8PVrtHNiLDMMDTWxdtmirbfGArTFyCDT5qiS4NU7zmnvfYHSr19ckHm86euLtxQ72AofMHaNdPtd1GLbTVYch",
  "key4": "3CR8UufyTHfRCnQjYLo1m7q3RYYAsJvPdGzeEvT7geTPpzTF4QWYVJ9zBf1Eru4pqC4QswoBAkeGsiyv7hqgGR4W",
  "key5": "4Y6NWgkJAMmBVKFrVctKgHM7acaS5jccc8JEbGvmwrFn9NakzqPgPfGcq9wzMwgyGTrMsPgxCkF3eDuQm9nBrmt8",
  "key6": "2MT7P8bu8bpwUds6pK55UNEDyZhrejkbH1ZHV8SbnkxCX4SzahmCy3oatMc5fvNdSehy3ESFJF7XASQz1ZBbRHAe",
  "key7": "2nq98aZi9VkUe3LMbQsZx6URYm2JXUERmgThHb1ef9fm6i5getRiqsQDytxkUvg6d89RY6bjcWSBNDxx6wzMsAFC",
  "key8": "51ojEwxtzcBUKZ96mrcsqcpmEQSStGxqssu9JrsopB8koKb5aRruAxsERS2NBsYMy6WkdFGZ7Jnk82A84WBChc8n",
  "key9": "2r46KCg6srBuND5UcnzqvJtjTCCoACn9hJJnE5ksQjBE4Bf1a115Td4pthWYWbxQTtj2pe9vv6RzL1F9gjB6MLh2",
  "key10": "58fm34PF4xWuADYurPwikgrwYQdZ23KbGjge2astw4SrXoqfPXf7juGrEcy3sJjHZwFoHnsrGugPRnG6ThQf75yk",
  "key11": "3VPu3KSeX5FYZoZ1TJ7amb2SooDVVAA2Qjhk5XJDGkmVD6xdJEejpUECsjPqBVsvAUUy1TxvJgocTNxkbas2R54x",
  "key12": "2p5fDvAuDvKGAYcsAk1tLjFd7RrSTNpZQR2eUGEr5ivu8t8iDa5xRHsteAmxuQo1fjpp1XrLkWbrbgvsTMDWuLUt",
  "key13": "3Sma4dkE5moo6DA9nmCRLvWDpUJ4zj775WeJDiPRBdgcMJTLesbYrzfAoFL5NoPUtF5PE5GRbeF9MGQ5QeNssnzQ",
  "key14": "5xcNq983bkYwFdWDb8E41AYNPa8jahG2esfnovY1qQdu95YJN3HdfEQ8JfcSe9dENb1QjNpRtBdy9R4e35ZAUDTX",
  "key15": "5Z8Lj8xEZKbyRV7tVBRE35wYpZF7v12bJ4cC2GDxHfox4vXyAGg9rPytR2xVhaTN1xzU2DxBWFGTP5LkvP8LndvS",
  "key16": "268fKFTjgSWnZhm9kGQ4aLj96VmbjosqXd5vWC9di6w15WckqXynHwTNDRhCGnTos12JTG4Vgy1AhuoQQcFkmVwy",
  "key17": "3gktFQQPLtuc9q5oXTgMt11o59cqefDwhq9aJL5RCoEo1iiptAVogQuyoB4AK4bJ7wnDbsjNkgAeRrcJXHDppasM",
  "key18": "2JnbytSc87mjC812MTH5B9KxWc14oZ9WYzwkpUicLn4dbVbki2MdUB7viAyhPjCWXsgXr3uqTBMdSNHFd2ViJ7hU",
  "key19": "xXhXCF7j7hRgnYTirCr7rDTN2Sx3gjkmQfq6LeQ8PsBBUVfPL763zr8ZMUbK2rNxLjZ4z1CRVbFaajsNzXy3HUE",
  "key20": "5iDqSsXz2Yg3Nm9vEbXZe7WF54yc7iYUkvSZmcakV6jg4hbD9AMr7X9r84eA4SbbrjEPWm1f9KRPPRKyf2Ryjy9j",
  "key21": "euMwr1VzymQdEYk3MwG9YCsYnJSg9cgk1qShDZWBW3Yp3nu8ZZ6PNp8XhjdF2TzLL3SPCDT2ZGZLCaw5P7bMs2s",
  "key22": "4MCVPXPwUCXECdjKZKVMMQxzUEsPWu2uMwojHbF7Vp5pvbNYEg3Am4LkHv9XP7Eu4Uf9v2to5Ku3UZnDx9KZQ5iH",
  "key23": "3bV9QvFoC4tkePUfHDD2ybfHJPqZg7SEVjLT9McH1zM6scDkSuMKAQGfT3VUnuZ7t9CcuZFyyNzovhDBuSNFtSE9",
  "key24": "3SbefmCuhku55i878w5b6fZjk9wr5LxfRn58ZpRchkj2rtyk477cSngiuj9p6iQ2DBn3gdZBovXtL3TMXiVYS9tM",
  "key25": "hhnVVxAkpQ1czpMpu6wnu2RiKyboSaKjjgkpEYHyqraGv82d5N5DFSkKqPwGY4ZGaYvh3Nuh3eEAaFjiWf1tFcP",
  "key26": "3DSwpGwtW88aagMZDF1NNRaB8vdvcqQHw4FmRTsmSU9XohtsWgHkGnFuftNWPykMqEo4xxDqpxro5LGekKD4Zdew",
  "key27": "2AmQAqofa4qtDDm68gh6t5dbGWdWie3nCzFKzv1k3AG6yDaUVAjYtPVApHZYpu24Tp1EiZnzfPqHkwp8QKf6m5Nf",
  "key28": "4katAMzPZnDzECWsmnLe8T3QUp9FcnKQGVAEoNdyvb3HEbskAUgHeNYKhA6e84QG5PuZKLxYS2ERnfd3jhnph7RR",
  "key29": "3KC16nJDdfcJExxofGaQmzt132u6rM9VENEnixzNhG95bu6BRbZ2f8Gim2CqJQPB3iu644ZLeJbv9TWpVnumLvXC",
  "key30": "27dxkppwiiZ8V1VQLijshqokHjEASKtCd1BKyYm8nNoC5kBmgu4Mt28qF4P5s1pEK89nFGCChhaH2zSk1MK3H48c",
  "key31": "3xjbc4TDGwnB8RTrDNREgfFxZtBDuZFd27xJpsH6Sbnrjx7ENUwXU3Ehg7AymoV8Gg6uVkrubi4H9QPBkU7KauNR"
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
