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
    "4LWkREe3yVhX1yasqPhC7zVAr7P5ZNSjeyi4mGaHf7ygsU2gafnwLpm7KsVqDrrEdiGy3VteWNeCvhkTvaRxf3G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4roYv1K7kkPqfe1gh123i7gE1sJLRhDdsSkZQLjK6KXXosXX3PGfsKzprGP8iL7JdtVeVcunBRv41C1FgZy68seT",
  "key1": "3zLqybPoNoFnnR7PtMEDMFBpZjPZNJKKUA91ZJR4ERS2pxqc5ENDSNjvtaLiZH17r1A1NRi3ytQzt3A4PYR8EF52",
  "key2": "thK1efp82KhcMd259ggRuafienTdbhcXfkSRdqm6Qu3jKTS7XXEkiUUr8AwW7BAaAhhZa5yhDyjYEQCFQWtmk2d",
  "key3": "2VeNHncVNVpuo7QNiaZ88Zs4D3cQydzjcMsD3rVvZWQWTfV7neLczCWMtfWbVq2Gq5MrF58bhi6uQaFbwn1ZM3X7",
  "key4": "j8qT1i7Cm3impyHDMNiaCfxxn8SqffCeYmk1pUNdJHaW6A3ZoafaRVGiNxiiTrw12qSCa6QypPE2QAyk8RanAVv",
  "key5": "4HtZy2YWhFWzW3xSDEzKXprADMJu6ww9j1mGJQud4qEUqyyUXevJzMocenibi18NWeJriD8j4girbpnL5XXZxPgc",
  "key6": "4r9vgzgMV2egmbjtRD48aB7cqkfCNkkVtt7L63rm8fowXRuxyxeqwn2v72uhm7D2k2QtvVeru9yp5FfwW1pZJ9zP",
  "key7": "3dB3wVsJ75ieNhgTpSetVBnMg63so7xZXBhzhGjWqWbLSqbDQNscGtxqvFQ4wjUy7wNGrr5MEVyzXiZ35QGRsDHq",
  "key8": "3yWRF2H1cEkru8Qf3K2Q45iLkxPATCHn81twLGcB6XeykrQuA67MKVBq9k7HtwJto7iefkZ8PaqiuhkVn7GQeF1h",
  "key9": "2jiFe7MP6fU5qH2ktuQFYhctG6vGTrHhc7eJa31mtsR97ZavAU6byyUHotDKUtrZdgysqqr9u2jDRtMC8uaT6FvN",
  "key10": "42xdBCXuAqVe2KHHxZpZ85bQH252ZrouUjTzr1p2imPRgWMcFy96XhDWtZdLyiFwLzYRBCyidrnDKEpvbHQ5674R",
  "key11": "5W71Z3j8e3ure843gURYpxS3AoGUrHKLgW5iLBX7eTdwwhfgaDycXAMG1QPMoH67HEd4FW437i5rK9yoYdUQb1uW",
  "key12": "2CS8mt5MiBR4bxqd1RrQg6qk7isz4xxz9AeRo31HtVJGUh3Tft9fhAVgU8oVnLumRSisrsrao1cqRsob4yHasmPh",
  "key13": "33Pz5QeAxYk5UCpccERFNxktk7pLMc5ppp2iZHeeQpgkwC4Ds2ogKwTgd8obdz8YS8PVnFnatu1KNfVbbeWUU3NX",
  "key14": "2AR5zsYvRBBRNhDTG3fQzSXK3j46C73ykmiRA8AMjzAiR7FYU5j32i42F9cpT6anRSCGdVmUUph2DwVhfYBqEirF",
  "key15": "hX1dEp8ghJevJq4LFEcRYPxMFYKSPFqDYEn5oyAGK9ukzv1RDMg2L4knBZmqVRYqZ595SeLhei3ZJ3JpBnEdL65",
  "key16": "2Vwj5WsWoWCtGAFJuCssGT8HZrRQiiGvhbyyCyaZAQrqi8ey42X8koP7rok33B1q4neoYq4879gkzAoQFhx7Ydzq",
  "key17": "64L85PQJ3nqDTGsnqoHuZjAuLepYMWqC7UxrQJbeuSyMQN6vaRa6fLihuGtHxizCk25fg7NgVXrjJkEDzn5gjsnm",
  "key18": "2U2dYNMh2BMWrFpT2zAqRiGHA7ZU2DmLqiSuUCfnHsMxfn1k9J8wtTDdvUZJ4iK859VMQaSBfjB67vtDQoYYarik",
  "key19": "4dSRDH8wyqz79jkdbdXt5nrHK7kw7avUGdoo7SZCJeAjyn2rrHnxdxrPdDLXqikMxXxetYRhBvydK6ZheDNSBTuT",
  "key20": "2W8PtCyYqaCQMDUEFFWvFfNuWPq3H4gNeweKSvYZA4QrCNuDaMp7yqkbtP1rQzLDN4QJU9oxjjvQEe9QVv1EJjwP",
  "key21": "4xunqVcvMAogLag2b2BhTsxBNF1L27KxdFAF24mPR1dqRRHb6CvyfQyCmiNePvg1Vq1nahV4ehXyHQcoAGe1ae9g",
  "key22": "HDcB5Wbmzz5gsea7pKPrjxBzQ4nnmZBB8SsqcxmvT5E8CYjdsqvCrfMDQikRNeZEbfht7WZpkVEES61BgGFv76A",
  "key23": "4ycmwFjbrJMVoQQ64JvLFZLeCWuVq3NmkZ7UydJFAC87NjTSXzMz8uaWX37mEJ52QmetjPogEnrdVdWoEmT5K6qb",
  "key24": "CBgkxP1G1ZmYE3dKmMt9CU17i9WHx7iWJXaChdiSkQGGttC9gS1ZP3YPznXfHEUUJydKQ87BRSHM4a1cmM9S7jF",
  "key25": "o7fCCUDhaLBbw6tAyYYDN6wRLbHVds5ag4zz6GPH1o55VehVEst3h3mNgs3De6Fy8mY8c2DJDcJJWF1JhGAigoS",
  "key26": "3PQwTMCJ93CeCcvbQQtF4vhag4KZUuQ134kHLUafFq5ifgjHmh8224BJbusbStXAKbCnKrJvENjzxH9nAP4CX532",
  "key27": "3mbMAy1azHCwZTZk2GeM3GHj8vASyWJGY9SYqjD3vP8qzSsMmpCX7yxmxDAXoqPFBWY3NAfV1jY2wEfhfy46LAcx",
  "key28": "2M7tWfRpFoQybmoZWwtQsyocKmZ9QPP4o3sPT2zrWmSitMEvqs5gDnTSFoHUgoGwDNMMxBMcVePkUdaNs4umnaPA",
  "key29": "4HGYp7b15adu1j48MbjyGkYrjqR88dfrx1c5JrSwMoa8uywJ7uoQ7N7ZqXTLuGC1axLh1MciupWBJM6SskRBNjzv",
  "key30": "5WSW73Az3YmsS2PctgVBNPGwMqzqCybmwcjevCZc7S9po6h6nkXJBj7cLf56caj916MWjx61iYBEFXPcQUwnni2Z",
  "key31": "5Thq8w6k7K6Hji9G1A77nUxkAeAxYRPGubrh8o7yQaA4Pc4Y572YrjiWorS6mpw69syyUw1qFq2aZrXdoEo5VWU9",
  "key32": "4GG3HhSZsDmeZ3G4sTHC7Up34DZV8wxipUZcvxtKYYz7iAHnaSM95BAPDdTYiN3zsES2f2HU68AWmvwkXec2J1n2",
  "key33": "3Ngo8kB4BL3ohXRgjzgKp5HQVkgnE5sF2Fzn4egroL3XXG5ZYiKHE1zJNAvpAk8nMw1iTugqoa4Crp5cAkpuPFhm",
  "key34": "CUPuaRfrhKBkGxTTUK6FKZsh6SpftoWstWx5DV6Y7NBBsx5Ttx6HFtuNwB9NvEqz7mGeC5k9vpnzHudyegj7YC6",
  "key35": "PzAHcFW4yLfk5KG2mnKKWNLxS1tVKhmZQQ1yYr4v7imKHLHFT7A7fb5AXWwonWzCAc1TZrpTyH8fMuGtcREdNG6",
  "key36": "2DwNCCDmUkHVijuABZektdH8drS3h1ptcukPimJtCbCpxGZj7WSwrwTnJ56xBWi7rZxrrYegLGvRTih3RK8LJFwh",
  "key37": "4oiSuJ7VgCfdfhGLzf9UcsVR7n3RRSy3PC1N6bjY1SHU6YFcbwf8pq7bB7KPFBbsYUhXb1ysNoVyBQiW39CjcyH9",
  "key38": "PhMP4bHq32mQiokF2gxuqCZctBwx24GwUVDu1F1WpTzosh9uWY74EBKfn7HRynKKP3Rxwrk8JcZX6WA4EHxtUYN",
  "key39": "4sos93JF2Wi78Me3v5tSUDas6itjqkKYh69LoJ5J73c95bAmE4i5vWL2Rpkr2MNymUqL8D4BrmjjUAF2qVSVWCAE",
  "key40": "64S6HpUEcBoy7SHShWoQgjEPgGqGTBpMP2uiPif4nT6mPTuWA9qw2gUEqqz3N1KyBr5WhFchNw5gM5kU9dGzaigN",
  "key41": "4CD2zDK2wnpXGCM7tTvqcSiQf4Q84r7MbxwdmoHHS9xigAFHm9sSNAHFioXWYdksGZzAvkFx8bCguhQgkE2YGYfM",
  "key42": "uJ8dMW3XZYnecXTGXA5eVy9jkAXZhuTNXBq9K3VM9hhqEXWLfKrxqqFUA5W4amDXRCUyuyjtDDBGvYQpi5wU9D5",
  "key43": "P88DifTbU2bK5d71Lekbk5kHWRLuvwA32rJSLpnsuigjDejYPGZ6qbeaZrfAQgKwNHsE5V9QYR6h7Hv3o4bWQ5f",
  "key44": "2z1W3VLEFBD7AgiSxQbYt1FK6NAFvGnD58iek6RRFeZmi2iJXdLwuQYLd5H46Cg3u5k4SeoRpCXayopuvvyCnMZN",
  "key45": "2tMhoKjjx4zdRzMs7Y2cyJutvtFEJhXB6wP3vgtPLmG6tU2oevAK9PySsUdh4M7svzupwaccSHibWuWRPeHxw3Yx",
  "key46": "hXnig3rrkdbgwWK1j9ieUCzHifVUHHa1vugbcCi97pc4o2wjdziCQDMau1i5RiYVfkSsmytKehC7dgKBCrZdTRw",
  "key47": "4ME9PjmDY94GnpGgCJyjeiVYFSy3FCtizDcw7xGna93JUPor4zwWj94priMyXmbou3nzLETMQTp5DYPeaN9D9DgN"
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
