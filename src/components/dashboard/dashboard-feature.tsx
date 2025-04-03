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
    "22r33BqWjFHJWkCQcQg9C6uCLwKpwaAXpmkRvV15acZYZZBxR2aE48G9cXKWs6aGBQpa9UMwfs99scoXhGm3Fmk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bppdHSCAWRU782dwJ3kPzffP8BXHWW2yrQqTwApd9cCq9x1hNkS2uYtehMFdcghiYDSG1CKGkKxzSk7d7RZ1n6P",
  "key1": "3t7DHke4S7SzjRYw25jow617rkg3ekrAeHqmbYv7vZw35D9sCyj6g2JsaBg89Vw153Bqkq6hbAJ4qgLxYi7qoj6y",
  "key2": "65AhWr9Bdit55PiGGJRaVJDiYoezdFR6rHzezpAutUK6JBJ5iUWvgyoSHXpceArNsk7weky3ajK3cSLNehnKUoW3",
  "key3": "4PsZTPusPPgFLRXbifG1PxvqydpV581qs2RrJw9A2zaEyFMaCXwps9TAF4vUPLju5Nq1jzEYncninJkcLH3K3Nce",
  "key4": "XZCUVXSWGYjG7ZU59z2kqQhjU41iVHFBpr4kVfV8Qsj1TjQ9kQpC6zXKFdURiy2Zkn7Bw8f1ZhZGuS2cpqr5moB",
  "key5": "bedGMXJJjciYCW8V6cfj2P2q8oZajaNQffzzVT6GGemysBKDncoTmhyfkTsq5e4ZpaPNDFwRjVAYkHXEJFn1MpQ",
  "key6": "4absHVAYecNexLJnLGEesZi8ur1tcP9B1CofEtgnw65PM4m5iyAM4JDkALMPGXQXoTNTsUKZ5dmjeHB77vbSNQxY",
  "key7": "33e4wj8RnT9z6y2CcmroS3h3mE4hX5kLSoNHnomLgJf3LgF6tDfQDeZBaMJ43nA79nK3Kv5QbhSb54Yppe4i3K7S",
  "key8": "dsjAkCjfJo56N6yBDi1yf83vnAm6EnTwDS4vjenhc28waDUi41koFo7U1dnN9mQtUiTJNCYFLy6q1cEttrbT7LS",
  "key9": "4h6k7netQBVD22CiYMBqJTVL6NGsRvn5HxiZuFmePkP9jif5CwLQ2Tvsdc8KCggQfe1pRaF1XXrJLD1WGDtTsiw1",
  "key10": "mdeQrCSyJSmNgYUfbwzKW8LJJsgBEYyV7YxQCS2PFcjSxMdzjrLjwgFzHmym1B4sBryBt1pJ8SGHLj3TzYxki5h",
  "key11": "VzCcszuXCY26dSkw33pqHVvcCr2uQkMHxDmubXdcQxsT1pKMXqqjwjqDRXNfuV88cCTET97GCdR8J1S8pmbpYFd",
  "key12": "3Z19YxQPJ1Q1ooAPAyXmVRqDjQGts15RAFU3yB9gUEdE5Ke9J3zVVqoxcn2hJP61CB2ztRwnchEZsaxjA7XYuqYo",
  "key13": "REwCx4Qpw65mY391pze1bkDdRuJV2q2p2KZJhpgVUn6kcNLANizitCtX9FGpJRfXzxtRzbhpwrqgTG4i6wQ9aQk",
  "key14": "312gVTvjpKgcYkcQFwhk8RbzdxYmZAso8SsC7CT5bkfHAVJ82jgRo1yYApGCjdmMJf4STbuFJzzow8iGeWAH2w9e",
  "key15": "3gEdWa8kx2Aifvm6RAGkrm2JQTpWMutoxvPiVx6d2fGewLfUdayWjh6qvVeQjCpovuW14oDQH3vciLPjA3Phx5bj",
  "key16": "3bnQQrtXL8KVg3iPMqgPnSt6kbNDPdgERJEA1eorKytRio4HnTWtenFA9wNCWdRbgbis3Aq3xQ94o1cNkGokfcZo",
  "key17": "4rRtA4ciKDZb2thRHPTzwDnhdQbwr4fxKoYLohuisVKVU5ZjHowmGKCbbbvJccd59vP4VMgrxVbSuQCqsvmXWvDz",
  "key18": "5LgqcJVVEYq3pttnrUVXi5Jq1tuRcdnFBf52cpYtotZuapuPHD7S5Y2BV9TvxEo6QhXJ8VB6U9fqJsUBic36KZ5Y",
  "key19": "5LM4bvmDvRipRGVrvcQgtWkMNTu466zB6Vud5i3CXYANZ4YNSEn1GRo9yStYD9dZXGmRexzvkc6kfq6oHFog5U4a",
  "key20": "2GP6zUtFWGw5QuQK2cEh3uWjMP71Fvu977EWzpe9huRMHRVkk2ezMLWgPK6N2448jfQ5gHttu9oEaLJyZ8ScwDnB",
  "key21": "3Ut5WG8W1ARSqHZjot8rzGGK6RycjLu6qaCQiHWC9PrsHEB4dnD7ibxyoVQtwo7JeeKgUvUjPFxp822HsgXRrr4A",
  "key22": "3oj9oT2V6vnGwn52nbAFkLz2TkTbXbumEe6cRAjZhJ8sFgJfrLxPy8und9mx6w6Qy1RFscLtFpDB5E4Gn6eoDKjW",
  "key23": "e8rvSDyb2tur41WsH7ARLdHhrE3daRnHj8UvYeAuPsPvwc82kaAinYdjHcLbkv7BtMMX2cNCuZu36TeoRhuYdKY",
  "key24": "TngS7RmafVdvtXUZKFpRx9QgPiWY2Ckg1jy5KQWzsBDkRYAhMzm2jkr29PxERtmv8QFVU726yTV9hYZFhKh5qqG",
  "key25": "3qRDysiBnK9HckvXot5JjnHAG26KTTKqTQ2YBnkkua7MehcUgyhGWcYej6JvbMosG1217pmsyJL5MEHYXs4LL8N2",
  "key26": "4t7EZLPWf6CPd7xBXCpugY6PRnYNcU5gXp7z6Xmc8ASohY3oGrQV1A2ZimeQUHUCWNEVSdJWYKxjxjM7n1ViNCzC",
  "key27": "5cSktgVk1QJ4WweBRFDaLa4wsuC7zy2XRBy6UTCf26UYHEmd6ZY9QwepuagejMwwEwXHLRGcEs1REz3RnEXNyCg7",
  "key28": "2bEC56v6zoBDjipo3CD6Vy6jdbwttveUfsQtJaxtECxeVLBADrkdMGNe39Jih4JxWzkytu6P3ebwPrMVwfmAMptV",
  "key29": "4JtRHQC66eD6T47wQPEW5UqEex9ZSAEWHTaatKqckQM8DCGazYgXL2b1mWVPXWojFyGxkEQPQXvbdq2got4sQ2dV",
  "key30": "451BLsuMt4or2e89UZJHshpo3MoAUjHv5kkYQWuXJo1soM5PuHWzNzfciwoVDuz1zG9hAaSKgcuhSP2iKKLon9eV",
  "key31": "23qTF3LzTugKDGpT6yfFbD642Rmt1V2vARhBN8mq9zqyoy9ebeWkuqatN4gDeUgQGgxqkmVQ3SwqTpA6XUdrxTiK",
  "key32": "2N73wVZSzz7G8vFCGt5cUUEVc56H3nup93tYxiANP2w3a6JNzWnnVqQmhsz77r7LvSyknMKKtCzkQDdZdfHoWJsG",
  "key33": "32249yVEHq4XZwn1oMBcLVFtST14YR8ciZdfSXNq55NHiLEijd8E6MWwUGdCVhg5cLtxi9QE6f9Yysqu5KGQdsNa",
  "key34": "2GB8es6QCLF53X54wzJ5GSVimBpLRqEwxJia2aPRaquv4qfG9UtkY1puc6ihguQHQJwgaMmdoAAvouEKKo8pZn2t",
  "key35": "5tGy8W754jsugHVbCWet9AWKGEYZMizad7WAnZfiHH3rugyKFqpisyuzzbapkGDPETLgGnG17PED9BdAEpD7XK6m",
  "key36": "UjbtvGXwXpxA1FyUhmd51Bha7YKbt7FufXnM9m9SZibN5g5U231AVicQmrNb5na4HPF94ifKG3R9MjUEMp3WA2t",
  "key37": "3YvVjz1nSj8AauzVbTAwGrT5egh2qchoWqWemggvq2Z9NFvW6SZLG5aRBA77SLY7DVWJwCrZS5d7CbkoKFYYr2tP",
  "key38": "3NXZqjwWkYtiURgiTLdqaV8pR2DqVzPQtXVAnEyvrkjL69j9heK6UAqY48CK7e9JnjmQJkkkeC946Axw8Q8tZT4c",
  "key39": "4S2JXwDToPHsF1BmkAjRjTcLR6FwoeKZfR19WgP2sRBMXa33Q1vdoEn5jj7Nyugq8xdKg2EPrZbCKnXrhTWXmGhj",
  "key40": "y8jyi3JFMtSxeKaWtFDHZenYF2TChS9BsxXqGGBiewACmbeeaPpkf5THaphkM2uZj8vfw8uVKhALnc3aFCjCaqJ",
  "key41": "3Za4pFJpxVvvWHwG8SJwpNuUJuJBU6ZcSFPSTAYG4vc5dT4W8GBcMhzmK348SQ6DPJsVfQWPLFmDveQH7RNnZ4ER",
  "key42": "Ckc3VJhfXfo76xHmUDfv54kmj4M1UQZgcnTHQ2CS7ote6U913aWPu7gJ8kAYLopjWVEj3zk7AfE8TE9TE2Ygz4n"
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
