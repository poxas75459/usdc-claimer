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
    "3WBtWMzZ1R2QCSGhuamGq5SiKaVueWg33hUZpm3mRwAvoQqUWMM1gETRJJd7bUr1sEapASTwAKHWgbSP357W4tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Za2xiubGYE2iFAvn5eGQywwaoWhKpDEtLPxQGYaCWQwsEqnN5p6Uir9eBJ44sxNKapWGn2H6Sz2w8TFU4tuSEGH",
  "key1": "2AvVQ2LuHvXx8e2fL7JKvWPSeK6851eJTQxf7ibba5CesZ518bvUnGJCws43U1T8Q9BV6dAGDk8AujnW5N9EWXpW",
  "key2": "rhZTprngpjNVpeByPmnJReCtdFFKnW2jJfsS9oyDVbQRGXa4AB877BUhxpw3P45zQ3JJdUtJGKTvbTqDnwzX4WV",
  "key3": "4PdyDvzK8fb6Mqi22bPBn7zGcqbXS36wK7LSHVLRcV6wmJMETs2sD1Zo3tkjZtUHQweEewDzXU7CBdwfy84j4tKV",
  "key4": "4nixWEKb8h7bLrNeAa8mLhD1u4Skx1sJWXK1dXqN9SUmfsSHNQLksa7daY5ciLtL1sNXEtPEs8i2bjzZWzxR4ofg",
  "key5": "31AYb5ma4Msk3u5bHkz4a513ZfEwme1a3E7NsHW7k1uNszQuxvNWSpa7iddd5YxaxPJLZAZMQ7qCQm1Gy61jUjcg",
  "key6": "5RygQ2xgjjJ3GG6UJFecMpd1YhJcwC1r1obkufWgTvznG9KoE6An9bK7RneGTfeDJGCy8Mc3wcadFBH22PApHRU5",
  "key7": "4tQv3YgpNhfCpHWTRBmSouV4S95VByEB6an3BkAWkEMkVqMUwY53fPQozZ9dyeb3mb1JgR6Vcg19u2SiSX7oSBc5",
  "key8": "3y3vA2WZQnR3frpKD8FweaYivweCvWBtY4eHspvDTN2nPJYwpmvhLVCRuT2935Jb2nE8VQSzpbXWJEDKDfdJQDSh",
  "key9": "4MhJ7tdqYCzQRdA9nFjPXM8XTwYwtYT6fGtb1NT4qJRQXce1czUjZzYon1iPHhNPbm1cp7y7Cs8oX3wnHmAdBoQx",
  "key10": "SLEBfK9jPijNLZyNMY1qJ2pbNK4pjCtFPrMvbQGq7oF19mW2bdJLyRiUuDokGmW8gfYYKtLstipzLoJU5UvVdp9",
  "key11": "2NTDZAoGDUXxPmnhRPe66iiEVErcVNWKuyxbvsod2H1NkQkhq3AKd81ajQ8xAKDVu6GDXYxpUMMpbXQ5EDBiVaRy",
  "key12": "5uPq187wrXPkJo4GQVUSYkZxRGAy9b84NQWzVKoTjhs9tY8Qsa4Yic7crWS26r91PQQggtSnazz6eF7c41HPFnmf",
  "key13": "34V9qQrggtF4wG5cJGjQfLEVBc1XWy1r2bQkSxMon5S4Z1C49Td7K96gVaFLyPXinfy2QT7mHaK7PKwixmFXpUC7",
  "key14": "5z9Wg7mY8feiuDiyGaF9re3B4muaDxh8s6pB1gvZBeP9WdJ235HBmmeHmDATTHiugPsyaby7FN4zmZAu71KSZtwn",
  "key15": "3QdofUTDkdfb2PEZqQJyq5NvZjGahY8d4GLTNaUMpkeGQT86fpczCYTZ8LNLANGrVFkrWAJAFWfArsgmu542uHEz",
  "key16": "3JZTaanLcXxvGWiTzxFdEJRtY1EMdNnFC253m6M2z19XBFm72rtfBjHjgybVyJ2BeTvmu7XPoAeAHKWieJPV8jTu",
  "key17": "5mjKW5BtgdX9Z2EbtXKtQKdbqcrK8uJoykjXuWhJjPbDdcKrVrKBHyjdfiTraZ5QeJtrY3vWEY3xSxYrFK3MwA66",
  "key18": "Yrw6pv75ZV766vkEmoJLioy7MyjZTZ4kC6r2Auh5Cmgz7aT6HcWejv5oEzo2Ju2drP6hHRt3swbrxDDdGSnr9dR",
  "key19": "4yb4sXxzmaNYew3ENZ4LtzUWbsZNJYdAsMtmcp9F7vPN5AehZVaJfbaBCS2Y6EwCCeutPuH1LQC4v4ahfZaD4wb",
  "key20": "2serBsWEvgBcdPu1qHBAnrFc1HSzFBYCXeLKNaB3Jn52KziAvGTWgTcvBiuSdT2Q1jaFvV1CSo4AEgSdtefyMmVu",
  "key21": "3CX44iuSXXthQkPrL6QDu5PNiV6kn3gcU29eYAVuJtVwxP8LRJcnNxcH4eAZJ5oZexds3SVmVtnrR34qYLt5dmMg",
  "key22": "t2yFLrPYe86JjFJHWAtETTcL3mGjYXkoKVaSHKeWU7W9wVuanJ3iHd4ct1kq1Dpm8jsrJK4qee2bPiNAwza1dAq",
  "key23": "3PuGyZsMPi7K44CfpWG7X8vDuh6TzqThHwv9q44ojtVMDp5ax43jDiThpQcSHJPaQ1ZHSsWhWqyCwszsianrwvZ5",
  "key24": "5f8hpRo56GGCdUVKx8QajAroJJen14TwKPSiSDHPAzZBMmLvXGWqfbkYifG2ULvrzU9J9t2meYZUrS2LrFGHX1LA",
  "key25": "rkDDxWWMLvVccGzDyV7mdZunesB2RLN2NdkCntUG4baFwDgbQbJRAtHuHy4N2TUjXfLu5aJv76UFyASKgD6XQWM",
  "key26": "XgMqPzmkzDpP6VjPRck3pKYg32Evo6nCdtfYwGZ9B18dN4Gsd4u6LDneeeJFsty5J6Q4GTZ5tvLmyNowxjQUVyw",
  "key27": "4PghPsZzN8aosP9c6HRravmnokz4duGWYWwuXzC9FbMmdgzq3YWa3mYEoA7NXF19QQffmAzvKNZBtUMYNbdS6jUt",
  "key28": "KtMMMzyAgNmj2S7BrgUUpTRibzzGdVhTcin7o8D1iZf661hrsd4dcpRPBA52wBZLVcspc4XTsHHVvUR1jBXktVz",
  "key29": "25abxi5TEKZEBSPNDxpZddesfVaNBtNFzeEAaGdgSU3ex7zsS2XuJCCd2Wra1gaqU6iCFzWACV9MGuWrnbpde5U5",
  "key30": "5DdKw11ryHpmkcVYS6Q9XdJCspZCtN4fEUJFHBMWQsSxqYiM36TPd8x5LVez5xwAT4Brvdztfbt96VCjN68srtpU",
  "key31": "3fkkZYLFrZAsqtbtf54pvHQhr8C4sQzrPxPQcf3QaKbewYofFTKqEvYiFr2vkHP7v3p42r9YksKFJAoMTXyABFGN",
  "key32": "284kmgvQZRC6FcCNHogn2DEupXcmgpMXzJqXsD159Hb3dFjwz3s9Vqrw5WeoiHZQt9BDMVC3sCSxL8Xw5X1p4X4Q",
  "key33": "5GANTdrRgVV7hHsG2qSa3VQayUEUzN85xKvMyytTWCPBweqTSgXMa2Eu67mPigcx3RvKw4XJhcpNkPZ26bXt8PpM",
  "key34": "4DpvwPsbEdUJ7jXNCPuFTVHd64eTo9S1TpQb2P9QEoTUbaxSQaBPZMMhobtV9RuXfyH2EkxBwcSp1ENGqhJwcFyp",
  "key35": "3zpNunVQoLiPTCxCzouAHK1HSCfkvHSUQeSKceH7FMN7YiyzzLVGNHXk9pJ2Epk6rjeo9U3AxAfCSWaRPDANrKpP",
  "key36": "43ekBvY63jPdLDBpUzrqN86wtAwfJ6eSs5CicWRS82qhksA5mEGfRefJFTe72duZ1YbAznLgiw86WA1GmXA9Uxh",
  "key37": "5epJuuxhLkm4ZRLdUqwC4F9vq75WPVUWVnB3K1dmvrTqDkuQPMSpbEB3c6mwu8Qg3FNQnmQ6crFJD6SowdBtGMpP",
  "key38": "5QrsDPenvci3xiRVyqbfuwinGcgbUtHURpVUM512tN5L3LP1g1cGh28UeCswnXyL1wK7BGmtGXMbB4Fzvomc5LuD",
  "key39": "5rhXU2zXR5wx1Tm85ZvEVBeTdVA3qsrKo6idFsqT91EFTCmWqmkqo8LxrysXNZYwULcFB2C5M6NfYTDkyxS69SBv",
  "key40": "4rcyouqcgscnefDK4RosKMzvxyLytffWo1c8uBcJHDcsEzKrwDcxSqv59aYp3Ggegq2sL8Me9LdTeS5HcWHQKjCa",
  "key41": "4b1TozdP96xHkwazBSwqb3ckGxdzA4NXKbMvaFVwcnLJuwDCLumk6P5KsxyRCh8wRyfkpdfVXEdM4Jf8erXrqkZa"
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
