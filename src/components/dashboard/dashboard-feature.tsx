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
    "5ejUqQvJEUv6HJWszYV6auEo5adx3Bbx75EqhmPPA6TMqSybaoAJyRK1TS3ChQqp3scptzWn7bfqj99sQj4WV51y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xs4Qf2gQNUwkrymJghrMDA5prdNR3XhK6yVejcGs7K4m5s3qfKtimjUvrDf7gCnEPu7f1bLnw1z7ZjpgKmcWPB8",
  "key1": "5tsvMauWq7KEFyyodkmoPAfTs9iYFatjcUmWrLwuuEeEzV2sxTkbcV11eqa7Apq1HR6iD3LWrWHGmf3muBiWHahi",
  "key2": "2i95TSn7JPU2ryv24A1iVn5rd2ZowUrto57yy57wPGW3XDQrmWvx8FhWKgFeiCeEpX6CDUZDxcByFwcbXZ9T1Nqe",
  "key3": "JFwaqjyguscCTzTB6PB9QY7aRU3FgnYswt4GE8x7VP8W5ukBWcPjUAXg84DtTXaGa9dk1YXtt5VLR3EsnEFpRiz",
  "key4": "3KKWFPQhFM1XqBhupGhjx6SJ1HYkWQ7VkpoepnBemjMRxJkEcxE68QPTjMLxLaYBzrLGH7Qrja1rFcfX4ad9brFx",
  "key5": "3oP38Kt3uAfEv69HDc1r48yiKif3o8i2fuZT8qenKfQPq7Lgods6SKhY7ARarKCynma8NnPVsBSyANhfkeLdtc5A",
  "key6": "4F7WVoRMPV23uopmQfvFTsr7DPhrhiaTK8XGHusKSTmbJcSwckh6MCrsSTe9y3zzhUZg3zJGQf4EENRJGn332BU",
  "key7": "3xTGQJCRquxG8fdmcXaxbzUbuBpQG1UzjWPtYHaWxhPSaXDSaj4oR1iZ2M5GXz2MbysGRZuebF1ywRVp4Sh6cmmF",
  "key8": "2BBs1rPveHxBNxr5aqyouzWksEnXbutKwCgfqC6NuxLKG1Sv68Uz5RrZ7RMCizkh64be26S6KLdnmeiC61kKomHC",
  "key9": "4saJcGmtr3tkCRDFEEAyiRTmh91nw6bosyQz7s9Gm2z8nakhDctPLXFcCKox57y5pEcaxCCgfDii8HQSSevsTFES",
  "key10": "4hZydjvBHmGooqTtj7BQh4pEQ6ZSFShZHn9ZJn5MYNnpNhRbAUwp9Dr86DN7oR6GybJZdn4rU2taebPJYszSj87v",
  "key11": "VhcE3TPsvAEVM6hM1xJuVJTAZpdENmyy3dfVEu7HD5hm8RozwjKe6edFYMNKN2kbRjvDZwr4eLc7kREL2xaK1b8",
  "key12": "44Z8D9eTsxsKv5LdQQPMYJQyEk78aGW9fFo66FeuUsCXPmi6LNZ237bQMDT2RdBPC4Raj5ewVXDzYpDPGsq3L7ju",
  "key13": "2pZLXqf5keHSQxv2gN8iShfHqWecwdf6uYdSgxyQFFcuQEXWv8RZxywgmsa4cCG2zwZLvYjMHyK3kDRMusj6toZT",
  "key14": "4inRqvqAnHRDJr3LNfw2wtgbDHbExhXde3rQ3bBgcyYZyhAhfAd6EgVVQfpJUnQBZzuvD8w6ePEicLGzTngAaaNc",
  "key15": "55JE6D2LoYrGbGMUDKsKcgByFXtxoftfPErZgi9NNgc942Xnfb2WK9LZXhv4Z36sLP29eQbNCLGV3BQ4k9TjT1K2",
  "key16": "tWjTqAEQhunZHVWCrQyEzACB46HKVoocWuPgCMwrPsbGXkpezrLi5mMrdiCXoTqNwu46DkWYqLu8JpGRnF6MwVM",
  "key17": "45uWSsom6HgqWBTSknhZDxowYrcg9ceRAU2mQk6QDv6Z7ufqVPoDDc98395fapfyi6SofM2DX6Rbx2LCPyxWbRfB",
  "key18": "8Pm9JuciqB34YzEx3exJVvn6VwigPaGyi5Ra23sw1vC8LudbFVCPUfbCY2Jamj4U8DDuVEodcmo9UaTnbrTGzBX",
  "key19": "17w1WohPE5HnyKC2faPA76b35H9G59uZoGeVULN6Lpik4BSd5urzBA1uLPDTF85ck9JixJcKdkxxdH66w2i2CYf",
  "key20": "53e8GdA2Nuq9HFFaqxpCTSE55DCpFq57Q5ZzEyoTDrpVYBNF3NjaTZyL2mQQN8uYoQddjbTUv3J36rRhN9uv7dB2",
  "key21": "641ZJVvW31UYu9ZCA8NnKTCNS7tMtEbUiV6rZ4VfQuPRzHfP1sLqHK8YGX4uQkBurE6F64qeUuR25GozjHTebDCK",
  "key22": "3V3sHTYgW8KPEvDfLkYeenNAXPkc7P9MAgH7sThrSNuJWhesaf24RweozhCws7iL2N34aMAYevaRjvpxiMtwiVV9",
  "key23": "46637EFXAJWzm7tVEPVSyLyHWX3QcMk7zg4SJA41YfpYLCAif459Kgp345yXJ2mk37fqmEhhKWBiRrybn2ZXCZ7i",
  "key24": "5R1WhqcqpHgxKDkvb4nL3oMUZiSSU4zdBN7c3FAJsi7PvFSBR1VSWgLzpqD7sM4deSfL1QsBJerSgTzS1oMibE25",
  "key25": "CrPuT8Y9NH8tjWH2Tty9CriV1DqCLsTNaBH3XX6BSm9p5xrXbsv2huDXyYuEBExYJt5hpJnFctZAs4NLWA5rrd2",
  "key26": "2ukeu4tvZEzYezh2dXxSmTcvwi5KmwMXz6CQW7WEdCEUwn1Stu3zSUTHSRkUvi3y3e4PVKy4ptMCPPVCZyMzkXaw",
  "key27": "3UoTM2cwHTC9cTyHMD3boDwqMZFoMzQNwZTKw5Z2abGdeEUGNfspjVVdrXeGdnKs5ELWWMVJCnjBGrRmmcrc2rhQ",
  "key28": "459VaF9s94ovE64zcwNTJZeYYjh47ViL51EPz9E2oEEuknRQNp77knDwiYeC7wR3PdKjq8mApoG6PFiUNL5kVU2F",
  "key29": "2KZtnNTms3qD9Uy3jh16zYCZn1BWLmmT1gUckUfqBkZzyoV35DJbyu4S5645CyLw2bBt6BJH8SyDniNUUiCDMJMd",
  "key30": "VK3qfEAzqcLr6LVbxDNwieXzJeW7dKeKyKWtVACLNZM3KjN3npS1kuLqyj9wuXde1RnvFnP8ZfrhCdZiikvrWse",
  "key31": "61a6ZrWX76w1JBhsuf3sJ7j5taZGA9NTixvuHnj91FuU9s6P4xDVmak5qPHwteyh5zsYEjRvXry89hC3xtmtqn4o",
  "key32": "3ahvPtdRbHMQ3mCbCiGuY1TYxHg6qenHHMXLWt22GNG3RotwVQorANZzpYm5oEoPL5seyqcsXWEo8u1NSLDzb53G",
  "key33": "2u2TxBNLzyP7bURJwEf1bZK1emkshixn5v68evhrUG3ozzW42eNuEEFRhB5dapCpm6jnLq5dxFRA6Eb6rdPCDqNt",
  "key34": "2FpVZdaRqg5e9DBZAPMtmyd8KRzG1UAbkPu5bvpUMJRHTJx3Lvz9edCgBtbbY4G8b1n3jHpapnwxVU49MC5VhrhX",
  "key35": "5T4KrwYrZux2eRHjYMDQLgMdxEB7NMGz2fyAKirJM8E1AAaNzGcmA9ZphP2j95L68BLoxoPgrVE86mgqd9VkxGBJ",
  "key36": "5DfEkKyY71VyqCDgBjYEJJqM8XJZqdgRu94w2LKNDEhmN1puvk3zT2e7H91nhRYr7gci3UXL7Sf7rodMkR36yVMt",
  "key37": "xv8F2FLAmskBGUWsBvFbVqHU35542wPquft9YYApK7K8a7DujnsLojqknj3xUp6h4wMweGmWW9zD4eWB1sGJyjn",
  "key38": "5K8qVLbMV9BqwgX5AtDZ9dUHYAZY1JgvfghPGRK73ukQPbJsCr8NGoE7GWh8AaaDvRu5NdY5yLrP1BkSMTbHs23g",
  "key39": "yyz2mhU9Cf6QZwfXU32S7SnkXHyGU7ufSuR7hisqBxYd9aT4docigor5TVZ2jMxvXDyqfFR6ESx1GL36dDaHuYP",
  "key40": "3LNc9tz64HuNkRCLHN2EzGgD1DuLEocsrbHghisWvHUSmGCwr4gN6WKwAHrsPSiPLLfJMsJpVAqZhGxZXT56Y7qS"
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
