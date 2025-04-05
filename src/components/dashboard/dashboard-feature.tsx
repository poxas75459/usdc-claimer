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
    "2J6J8af9YWL6HSprj4ToumSjH8EeAPhCaNnMw47PaDFudhQDNKCQHYftjCWyg8nFHc5AidpKCjCiRT3yZ45KQqnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo4gqcXBPEy4Ydwq729nT8tRYpXyvQsbWcKCjkkVWnPguqHTAEfUJtUUtoVrpBLKR9FmckRDwNkaqykJ5GhY2La",
  "key1": "MJGJ1csZinbr5kYEcq9YbHLrZd7YPHr3NNZ1pefWcguVZCNMBmAoyyL2Pa7SGsXtUC2SyLwmK2AhW4yaA65zbVv",
  "key2": "5UjHRxTazcfPmyeuZMMMndQk6E2SJrA1Gth33HRfNbxF8ecn5e6pLkFSRwVdZr9RkyeecQjTVs396K5SJiT7f5Lo",
  "key3": "3BUPZxGc2Ysmesf3DMvND47sHFtoQfTgeXWD19fYW6RihX4tivGQeGewmLsimkzjAfx4N6QxdpWUHo3R3svZ9dRu",
  "key4": "37Q8MSofY8PMXhV52APFLE5C7XSZm2yP9G3BXt8B4ubr55oyuPnx87j36dU7aHMgRXho9EgrZpJ8GKMkfkwbUoxb",
  "key5": "2v6TjBg81Mvt2bqzwSyrJTYR44vx1TDJ84bYTwA4tJkT9bmGjmrpedGYRRkVvroWSTAsvtZ6fieCqv81t8gx8TAW",
  "key6": "5DE2Yxc3UR9hjW2yF7mQTDGEyDYdym7VgeL9wRtgwkhYb4xekX2PYC4Agihc7kbNUD15peMNu8XPx7GkHEX3MNS3",
  "key7": "evWWBptTtkpACfrSSwf3CUZrtAD5oAQkMGytRYjyrmckqDm313684qmfsqpE7oi8acP8QsgwXwhyLwjyo92xbk6",
  "key8": "6fEX9jnkc8uoPSgEX4oNuSZJk8m7iYwdAYUPcxgMmchTTs8KQ1uitLzquCP5udbsbjAZnbNMd6CXvn8aoyW29fg",
  "key9": "3b4gRuN6o8Sd5rsdNrx69dK6sTGunKVXvkJAC4THHeDZt8NwUBipZvy1pYUUw5t6bLZSBgTr1QbL55StHKnHP2KG",
  "key10": "31TtZZuVPHNH8jnNQiqKDNc6NeqP3x23YhpsZyKB7xWsjYGCUo8NfY3pdEvGk1me7WDf2MPhxKH4z2fbx2Lw4nuT",
  "key11": "2cGs2wcEEU2x3gwUB2bHc41YaZmxpdARX3ySdYP8zQWteDmmQAqm7wdyYA747eGtvv3ZLaS9KPe52TVDCUoDXmX6",
  "key12": "3gS3RsrrLGMudLcBN4f2ckqFTGrwbtMxEA1seUjgZpDv6ssFdGdBi7mue6bYnPyWcSz15ijmC1shrzYzkSgKgQP4",
  "key13": "2FhaLLtTu9G8vujcDrYZZv2MWLGmJGh2be4k6aWantuCGfSrDAkXzoNbdmypEUrcsh1zuuNMJT8dz3cptRZgtFLS",
  "key14": "2PE7ppkumZxcQRT8pSTejpa5iKodpz7MxUUUEr3GJwmfjX4to2cRCLG6zAay4VqAiUayM3f9L2P9LKkj84NQv62U",
  "key15": "32icsUXrwxMTQQaKPDwi7vrFNcc8o78UvTHi1SV6dPNT9Ef7TnBTjoncmQfwEqjkDRzzGiJrbRdGaczifGzo4X8s",
  "key16": "2gCYimrJki2Rk8ViYBcTLsyLcHQST3dAA8sYXsVXKWsN8KbvLHKgEE8SFpnNrUjidW9nEoP8t8eHMDcmYVk2vBrS",
  "key17": "5qWawocjCPTsEEokaDDf3KaNATZoy6SVF54cVW6cSxuWAsLiZPfKe2rGvfj53QZuoWRJizdLJSUfpqWyLFoqAzQk",
  "key18": "5RgfuGFYTtJiRXKej1JYqbqXZnkSMfYMnhykzAnWZwDNoq3GCxF7bKuVRLExCTHB4ZCFX8XwrQJM8NFiMyxpfFvi",
  "key19": "5sfrRRtzAEBpNY1JivBa76Ke7ZALJWT8BsuGXknpQWoWmjZJDNVcx2NjpAt9eZvF2sAkqiAhCjAzQaSsDNdrgvqT",
  "key20": "4UYRaZvrmNjss3EeqRX9tSkCqNSx8N7ptNPai4Q86nfhPJgbx66eeXuBEYog13RvwjPhBNYjd2W4irxY6AvRxdhn",
  "key21": "557BzdfKN2iEvqCocfqmv1o5WaweGorGJ1uCdNjZWKyN1XWo2cfGbfcVtb9hKgzFxGYu79iyCm2RpeqmBjTSRjvx",
  "key22": "3hUyPUJffdXW8vL2eG81Y7FNAoeqzB8rCttDtGvGjeoeMHmiMMd1BCbeV2xBvRNdk1TqSgxbJFM4Daes5rXRjpZb",
  "key23": "G9F6rhqaffR9dgGPqygDUjm7EsS9qzTr3YJALrXAFwKcU8E1935Lr1hVqE9FoF8wR9T52HPcGBJxUn238SCmMKK",
  "key24": "28yBf9m5VKxX9Qhmo8T3BjSPrWrGtpdthuGv7vi6FzYCrxP8dkHGT41N2tQNcQSmCgWTRv7whRBDnSUK2WDmmz5n",
  "key25": "5whttGpLESq5k6omd7JrZB2yReWhoypvMnVskXLWYux3PnuoYBrGFWWmhh4N3zQCE6gNzXT9jTUdeQFAgXe1NLSK",
  "key26": "5eTsjtSJPLvPHaUdACc32tRe8FGF9HFX5JCXUPeFWm6PP6Ww2nMWw7fw7azCrp7WPWtZFeKz1fbgSkrBahxAgPtm",
  "key27": "5g9XDZEAQpVHtrxuw7D9WsvqrMd5xpTm85LBbUqGjQDZHN7nR997nHZeJWHVWA3qisVbK3c4xA6KVH4aAZV8MfR9",
  "key28": "BsvvCQAYQ5N7wB5JuyAi1teXTzUE7iKFisK7rfCEBVFQpk7LWnqqSWzL8TX8UwwD9yoRnt38pd1SjF8nyZaUeBe",
  "key29": "5okePruN67CTSyFQLNEnbg9ejd3VpiXzURZ6Yvcht8zkT2bMoR5hRRCr8uoEBoJRvqVHVQiAqy5SirWxfc9HuSRc",
  "key30": "2E2hVHoDNJECtXjGVdvd8nQaeF6HesMwtg2gkqpmuWye9JmpkCtvxm1JbShxRkNyQJxCy1qxTmr3hwgiSV4ni2G1",
  "key31": "55J6Jvwrzjo5TjrUnPxu3x5Bffx7rQHBr1X8LEM1xqjNhk7DyqwFTPsAJnWqgxuLNoTMN2BPyxtS549kZ9mwKNiM",
  "key32": "4dco7pcBz3NXz9hRVRuaAyTBVZbgd9e13ZQ7fbLrzucxDRvF3pEwNkeXLeqYeiSnwcDXcnfcMPr84cUdw8664qQm",
  "key33": "5DQiyJfQSzMcFtww3VgABxSdtjN3E6eSYnUTY3PkeD6RvmbFbs7HbNaKSVZSB88AqyT228JajB2L8THJ2D96jiLm",
  "key34": "3DnEdrZGPWAiXX4GcBzjdf6JN6Gg9jHbRzyEpC73ZDeECrzwC5FtwBY2SZW1V5TaR94tvhyiWkxUZqRvQ8mpEc3x",
  "key35": "f7NQPEh2Ym4Won5nVsWUDSBwdR13z5gXFGui4216B8GC4bQLRYBj83LfSWTkwJQd2MezAc8HGmrZnKeZRW5c7Vb",
  "key36": "5598DRn9gApMS83sWsrYbmvjePukYfmCFS4LTARZJ2SgyVnLnbE4QabPz3A4QpUR16aD6ADj4zmaAMsBS8tURkmX",
  "key37": "39YYXMgrum74UponkkvKAdXF4y5pxwpHW7rjWumHUtAEhePKHN7wepfhccXzCLHfU1bRfZR5LfozuyzJ2xSA2Ly2",
  "key38": "3V8G475D6qmGkRmksA7jHWF3dmoMuiTfwPRFw3VYjrAUCcSEAfGhoWDCSkneKaDUx3StnicDkEcBcFN5DZqLffNC",
  "key39": "9K3wzrU83uKmakz6ocyS9AZNfVGEVCfFkE99EWfhDuEvLTYz79ed6cTkpKTfhUQfXQd55VqatbVkxFrEuaPmruN",
  "key40": "3LYuPrhk3NnXGaLFvzhtzTixSss1xwvSmKi8eavsT3R177kbvfuBLkcFVu25NoabFRBzMWFzLbvtN4RBWcGz3Gdq",
  "key41": "3nCGQNFm5UGUq5SFPVwHdL46x2sbWV6bsgCZPipfXa9Mmk8p6yWBsR1NKNwef7fvj1fhtpspduvPFDXy3APQVyLh",
  "key42": "51QGB7smZKknD3efcuakYoXJ6mrcw1NAjUv8eMt8kNiZJ1GJyi7qRb3FHbzqY7g4xz7hz4moEiHJRtfhx57rReJ3",
  "key43": "2wPAcJ3Xja3UNdo6WSFmXgqGWgZywZyvnFQGfF3HtMdXzjHxoxTitMCEvbNyVA6cGiKaXozdmLrG3r3Q5aH34RZA",
  "key44": "2n8NxHbvCSpN8p6YtVar3as5TaXR38rMgNxVn8q4K36iLRv7SVxYQ3xTsscpRyTu5sRSQMLNxwhAfKk9WWCXccnh",
  "key45": "333GAA6TkgfT7KCBgeoBbMEfqf4BtJKjmda4s8BiRrZKRGtfcejaX7hsKhLAHDrkVZFhXEZNB73xeMvywkrs5Srt",
  "key46": "3pP3PmcLxf6KNJJdo1BxU93LKY9oMWLQFxrQP78BZNSD7wikBr1ZvY2dtBTGxY2nLbpjeF9kRsMJcAeDCB7udiF7",
  "key47": "5C5ebWwnLaLknaRh8YtKNv1xrPxHHMYqaFFRuVuGa3GXYdaST3aWeJ45Vv5GzFHUFQy9avv8axCeBaeysguCGNiF"
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
