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
    "5kjDLVzKRCjVAsKUwyeNrNf8tukLiMRNZezHafg5i86v6viM68fjb1UvBdi32k87cGZQaQYRdiuUokJ6YRfKYuHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmousPNUwKLQTo6aaC89L2AQerG2TgBpbEhgdu8x5UkbBeR5W92RoFot82Eaesiu3Yepb7ZHd2b1ZtKVEXBvrFw",
  "key1": "2BURVNSiAmeKav5qdvDT4a8YE6mBm5TD8g4dpzEXN96QCfSbCRWucmCaNrsaS6gTLt3aQYSMh11BrC5MKSVqbxm3",
  "key2": "1EDJ71yfsV1ecXVtCAcJj7ZrS8tJjUEANGPJSfkYeszrgTgVxXGbZuJmXcrAiwrqg78YNUcUMY2L9gviHqiJqu4",
  "key3": "4TiFzDsNyvZcsracfPn6TCL2CbBJCLapKY9oZ7YpCVpkZkYULfguSTmEkBSrUJBdNvqzjr5MT4F24KkNJP49CUJy",
  "key4": "2eCyve1jqBnH8kzASJHpinedYUNb3oA46ouPCzmTa528sCzzREZ9d2PhTyv2dCJnd1vRv4pDU6cparQjK4X67B7H",
  "key5": "122Luqv4rEQfDFLLqBtMbWsN13masvKZf3p8JJ7AfbPu4tuXwatGDWd1Y1c6AiAAu41736uMVkZyNagMV2fnSE3h",
  "key6": "4PNo1dDy4rPhyHTVACx3jjJeKqNKhXwGzka2TbXkaZW6fkPDnudmWKbCkTJV95wu5dywS7gHMNjqEYNe2Gdc7LdQ",
  "key7": "2hNkBSQMTnqHBHdbrwrF56Q5GYr8bRxA8ZKsFrp458uWAixQyWH3AEXtBiUzwrHVjU4PChe6e7s1RSS4chEESHdF",
  "key8": "4shkN7MLMoqnZ5E9kkeF4vLXAiRz8CNZeJWB1FQVtQX2Zj14my47nizJE37ATU3MRf6Q7ATnuusbhZGaTxLcMdPi",
  "key9": "kH4TDbCpS5qRFTq5mUWUpznLrT4FPMw95uqYVz8MoYdA3uo3s7ouBzPTGWgPfm7Dx3mQstxESU7en1UzU26fEi9",
  "key10": "42hTchrwkcG4FY8EYwQ1AgpqMN6bPnBnZY3gwrr16KPFeZXDkmJZjphvXp4b9XpUx5X9vZzA1G86FMqegMvqWJGm",
  "key11": "2phgwJoZgyksmtzApzJ8GpHhK3xKhXmmCwpJ9uQYnE2w7DBBZ4e7B2tMv8RKuqMnBLmFrzSqjsXBCYzkcLpeMEaw",
  "key12": "4DbKZk2ndNGC6ZBsBf4eZGzjYnRMJYz4MLMzp9pN87SXeJ15CSQiEYB7oUcLrimhqpywjmwnenn9gWdNFNFFUfdJ",
  "key13": "xbMVNtueabhjR4GKNfokbPUCKzfkw4Uiv7ssQKzk1Hqfa5VK2wk34wVBncWL7XBKnQtvXpNMPGJEcSqYNUdttVg",
  "key14": "vDSXz57kpbPVx9cm7WazQ3MRcsfFFbPDBBBHwyngkntV5bPNRP2RKhvCRzci8G8fAeZeJ4nSEeFexh6KLJhXhNZ",
  "key15": "4ss4EKn3zC6dUELqQWHFmwn11ZzJxh3TYaAqXvATgB1fG7CGUk14pbaQEUzg8rgRsFCsuE6TPxJPSuWBu2u26t7E",
  "key16": "4ZeeCz7rxFazf9hvkE1pEXL4YhPxgYPjuHqpJDHY5VQ9eUzDEe477CAeWTW4Uwy3171Gt9jVJeXp91fv9ZDubXDn",
  "key17": "5a1xQCNBe8ks8c1koSESE145CGiBvD8D26JCPenvKweEoAmQwSYzGDcuT3n1VGzvPUJLpqf9e9wFQTTYqXoDpJPv",
  "key18": "5B2ceiDr3Uv46r69EUnthVVNmEym6NvuomHPyRSaExwP7BFs8Yo1m21YazrWkqAMg3DeWvVPnJL4BBikeFu5DJBb",
  "key19": "xLjytiTsycov2J4cLQTo5NBZPTgWFCvvp5hc6vRvwUM5P4kpdqACxjQRP6oFQaKickeChwJHC3s9q4hLJDy3vk6",
  "key20": "34zcaz5bptYAJsm1kvc35ZEQZ97ptg5Acu7MoJD6QEHiDdYaVy7dn437Cus36biPX6pfwFtttDE87m7RJJb4Bi7C",
  "key21": "4UhUp3an8MyEK5T5PvhfzwNQcYJWC2dnjPq17SsSH3bpmF1dZww3M8MYGVrJU9LyoeWEweJjYTiGpwk45GamSSmJ",
  "key22": "3rWQgPUaK9XgWgfwEqRTHaT3bneXerHR1DvNhN553px3UqtczeDkZMPQw4MZzfHfDaKWphXbeTAXNQ9Rbxcp5cYK",
  "key23": "2t7v7mDACjpNmamyKV1vvU6ZtQEnoDZVw8CjMALkt7zirvZckvRLTEWREhfPiFjFbds6PdgvBDWM9YrJ2vhUZXh7",
  "key24": "4sJXe8idHivgNMz7YzSrA4J7fJgg8ZAYpZ5ZJ1Ybtr3mmDohP27buYHsoSikhjuC5JAYSkK6t7vnk3eXwhg4CMur",
  "key25": "4KaMPaDNjYVbKpAsNnuSVt6rvpidC8Aj7VsdprmVhFr3iTmxLod1LrXpL1271dtQC8roYmnjiBnNxCqF6B5UNTYy",
  "key26": "sJDPa9doTRsfTdeiSgEgQe6zng13KkrBQTuJLPRSuBaY8DEEbYYGbkL6J1CTzy8njwyMRjfWPb1berstgiD9aEw",
  "key27": "3jsE7BHadCs2MuBKy8jJn5Zec7EEgvFjx1mrdUUFaLMPYKne73U8SCGPouau5UghDo9z51R8A5zxAdfTuker5JqW",
  "key28": "pNsuKesCCGoj5mugkgmvnfDrQD4psUkjvbH5qYuwf9d3b6AhLtsGW9cL9j3ANN3EJm8gHhTT5g8P3YLBcNeo48k",
  "key29": "2GCyUuDKN5qoYz5HmV3H5aW8npjwpWurE5aTUo72ULAVMGAyEEXf6kcRZnrWVDTjaUaTmSHpYhm2dfPvthCwKBTz",
  "key30": "4iKAj6VCDYsNaSv57efJApRnzZCx1HzCsh9VTsuFcqAKEgwgeij5SttV9a5hoGBAQS8MbzLu5p35rkRk9NoigLYW",
  "key31": "4xutswb7ykp3pLDYMKxW7z9TZc4dNt6oUDf36evAaByydryTnBdo4HRUEUURDtgADNxEmbYfK5v2DYLY2p94DHyt",
  "key32": "4upwVQAkkuUC46YriaPzo3ctKYo7DeQGChiUxgTLwg7YyRtyCz8abh8kXrZCTcsiRPuqGgHEsdL2ymgorMDErrdq",
  "key33": "3bEda4kMbot4uCePAZnS1BkTVzxwk9UKp5x3dpCJEgEAzXj6SKDqGAmvwp7x1oumukhXi8YbnVuJ6ToHbc3yrcan",
  "key34": "4R22hoYceDFuJbRtcm3YvhJan3JX3oi3DLDZfizyZ8reqpZYwEQMGqmPrb4LUUAgfUPX3JPeKwh51Th3Egmsvmtf",
  "key35": "hTwqD9TYcau1bTfwuvEugMeFufnXxAgJ5Q56E2FrLdWELpCxGSQoDfQaN28UB7hi2zFTKdPcAnD9eh4XgWsiq9x",
  "key36": "UpkwejEjLPJpJHWeAR3AwuGkmDzbJ9RWc1vhNCLs1HCVGXpbzQbRV1hwRDkV1haaLaacXcxBPtCrVVSD4MCUpss",
  "key37": "Dt43q91g5aRgyNKSRnaDTQFJGXxusrs2HXWxPWkggGeUwCpTtNYYQg2ShT1K8ZuasJAqu4vW8AayP3Ezbw2DJA1",
  "key38": "cdwrsV3CGEF3YaXNcXPgTBsGP4k4Wiz9k1ZSqjHL4CgC3ujdVa4oVWbHVmSpee5UYnqAH3Chdv91GZhWVCDfscZ",
  "key39": "2gJ3Cnu5Nefw7HvEZkJDrwEU3vadcjdsdJRkYLXwfR5bW2ic4pATxKxfgvdUTDagBh52UwiTe7Jeq5AVghSmQ65X",
  "key40": "61zipw1FimcQmatcnmuz7qXMwRS8Md9tZKsP1qarZYL3NR2T9N3UJefNT3kVJND5F4xUDbQdDU4igEWqmwqoYZ7t",
  "key41": "66xBTUoPokH2W9sVocwfLoLDsSs23FnhKYwQvrNz5h7vrDbXMXhx5AXQXeKUwcu51JZfFCzXog8Ug1eePX6zQALd",
  "key42": "QU3TgL2ywdExE53SavK79MnJuYiDp7tDYiKcYWTRf74xjaimKR3kWusj1eLYCsZ3h6gNWCYSKVEjxT2PbgJfLqW",
  "key43": "mrttXLRAQd1H3jpBBTZsS3w2NBhomdvdP2yBK3aLQNnRRpsFtQF8VWr4YuYmayMF2RJcYXX7bEQEGUMzDmFdmkf",
  "key44": "4ZWGThDdDQ1cWBAEyXMWSyTb52BNmp5sJ6a75tBpMmAeg6VqUEkB4XVc5UHCPRJScrkLEkm5eStdba1eemwKHAsm"
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
