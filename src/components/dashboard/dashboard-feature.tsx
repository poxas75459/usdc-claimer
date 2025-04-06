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
    "2hosJhjd32haEEhZ3btDYWYAVzbwzuoDdxfcTYCtWnnDt554BPvHvK7HQ85LssDMCRhFCu23XRqfiDhByjYrrQPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ir9Je9ZEnUavw7ZWGtuW7SghqhqWD68twydzasB6o6k7dhKMrmDEq5juaUv6qMJMdj1Hvg6T3hMziavktrXkFWz",
  "key1": "4Kt8f8Br6fGFaLyY4QnjoQVxgi148VGdVnUuyWWia3GsRCm6KDqa8JygPWR51DJU1HLrpjDBWsX3RRV8atbYL455",
  "key2": "641sHJZjneR4gKyFM1sDr2KX8A6WYaRay1nB21oVWdMXSVdV9EDqR2o4RWyHAoZu48YbkWCYPkbAe2HKya7aLNiy",
  "key3": "3jBnKqdw19csshwYc8whvnVZ4UbBdjuKJkCdkcnhjyYnndNV94TUpav3AS7PJZ2YFRnSzwaB523D846XpGt2kqNN",
  "key4": "SR5aiQYD8MUS8q5vLvckuey2BPckTQMZX7K6ThFVD7h6BMSje52f7pNi5UHcz8CMY4sRBrCvFcbf6BSUrfK2RxU",
  "key5": "4pqaJo3wjY4H1kQQoJdaQZXJbT2YNeMCt6EdL5EhuJ3h7nfhBDAJ8L68x2WkVe2uCEMLXDcvu4LMu6pPGF3kbvd3",
  "key6": "zHmQ5hs1anirWJHghjL4B6CHfmxvKmFyZEK2H1CTo25WViS3Wddnwnt8gXAYL4fFck57BD3UiqyFg79fZA4CRh1",
  "key7": "24FR4gYDR3xXNBt67ZLipALYvuCHYj55rNv2fMrh3cbiiewJCmiDqR15H7BaCSRBSXDkYnn1puQ998rAYaGUQFNk",
  "key8": "5pP8vgTZBhSWVuurHkXC4mp6uhk7iMm1o4aroB8zrwbZo7h192SrVmfxJx2bBa7FhyyLx6fZGsDd2ric1HHRG3h9",
  "key9": "4wfECQMm7fordq6sQaSXxey6ZMaBovWZng63ZcnVLfbX1kAxid2XvLhhwuqXGGGXcSTiwEQEtUdTUaDik3i3RKjf",
  "key10": "343EpbB4zB1ziiVvQ6qWZz1sy6g2YpDSTDSuVKhAmB9CKz8bb28wkvbhg4AfVENauHZ1NfukiwRf44oLutGhPKu4",
  "key11": "5GczZrVkrYpM2ZKzHXd6cs4fvfenoDhgiE2CXD6NeaH97a8p5HS9Ea9FiNeiTEs8TDWUdJKBoe17mtuLsdMocgo3",
  "key12": "27egYm75Zd9USiyeVv6guefVB8kga1H15jkHUY5WTjTMFQHsm4ByiQD2VfpoVqSxUJgwsAzagA7KEnvXnniscjJi",
  "key13": "31indR4cQcp5AhbZC8qbiiVBs5HVNq3QFjguPXVHyeMQQTdnqmnKNVGiWpuF1sS8p5Zd4BRhJrcaPV5TPKiySceQ",
  "key14": "rJjc6DRcbHX8Wv1uSpWgYZbShLpebkbarjSaPnwCLCmUAKkJmYEQHmjewBWrKSuGAgxezii69WAdTrejFjpaRjM",
  "key15": "54bSDqEwwkm49c2cktH7ocnNLTSoRw43CbHBZM41G6cn5ZjjbwB8i29cFEhLZQVgAGyiiVdaqHiFcqMy5QnBcDuF",
  "key16": "4ewsjd7TUYLHnhFe9CtuZRpwfgVsQVhhzXymdeHKUYj8NYrrvZaMek9Xa2TJk5ZMLSHr74yvgHc5YmVM1oNdnPVR",
  "key17": "2WQE9wrssL57LB5cPigkqGCswKq2MDkeXxqS1EhRKJ5JDFHgsRgCuaELB6wyHJWhEJmcAkm2ch64KNkDT5zALsjS",
  "key18": "5EbFUp4rEujsjReBy8mMN8YJQFrCmomLtcsCGAz3gSHGkSaJba38c9Z12pavMQePabxVM7fBN8ZFT4r3FLiyHBm1",
  "key19": "4Wrv3UGzFMUBLudVabDdYBWiEMkc13SeD8M3cjHU8ZLyLMzVbJBLxyy2RihbpeCpEVtm4Q4wNpBjuz1LynrfvsvX",
  "key20": "232vpkLnN6FHaiLaTo3KR7qkj488hZP5fQeBEe1kJYDUczH3z4cXvHKpaicRSsTaeUnrzfnLpj6tST1PpJDjagaP",
  "key21": "Z87cAgPrrCrRRBFcomXnCSmKC8DZ7AfA53YCdMbDae9AvhBxFNWyvHCDb3wHbBj5mWy9eUvLLTdjEXZKqhdNkwU",
  "key22": "5xjkYbvPCW9ZAjn2dV52Aq7uyW7RE7G3rKBcBpgW84PxpnUFhsJykCJXEdFfa8ryoZxD53Q1W6nVyYzuJSGCHsaa",
  "key23": "56X25iiUW3Qv1g9wc5EZ2Q3iBdxqJ9vtZ5uECxEtnBGTwQ252jWLUuJhDYGDsRwfD8Smtz8aLg1r2xXinFtkHUuL",
  "key24": "4qJq7NKDDagopyryaroJqPzcthpuzYwQgB2FTNP9g3y4ZtkbGGV29LWB5NdXGdSukawGiMxRRmyLPVxNxKUmuoW5",
  "key25": "4r5fRzZmZ6epQ5HmL5zD7rU2EmiKfSZcMW71vVFjVVUJ8Tsv6BAkqwauwHnJ9nF6LX1zqYNoJuUp1MoLrDF7QFW7",
  "key26": "36HziGDNKWjuoqQKW8eZL2ktSBMRpgWrtfYfvWyJjMdX9uNTxALBiYv31uJ1Jj3rmrzEhfnG7yRDa85jCv6wfJRM",
  "key27": "4EyiDMJcji5BChaUNzEqvm3A9tfBt4LiDjhrb918R3DgnvuCfknHkGvRR4WGvNdnkGpifbuz2b3Wra66NVRTsN32",
  "key28": "2Y6zn8SAAnJmMJ4mBMzTWeBJEC891BQ6By3XAoJM3NFCSHCQH3PuFWQxYsvKQ7raL668MKY1NQ81q18KoYiP9YFV",
  "key29": "34byi6hQRbLXE4RHYctzfVNn16VRqovVZSP8DuS7bcXrj1U76G7DmDzii8DvMYXtRGWmUthsT9jgmrmAfC4tdooE",
  "key30": "UgzssX64JCkbynWq7eHrUAfmWGw1xQZRC1TSMS5Xi4bzUS1tA6myqob6PseSAa1yZwNKwsUDx63BCeF3EQk3o9W",
  "key31": "4HwHhJXBTwJBqrfoK4CYbcKp88vrKd8gxHc8eaUYxyc2oTBYy1HJucPWeJDt5xYbbrPTatLMFmrDwcbGEnuCECsb",
  "key32": "5MAJizTrB7iZx8rhpwMctzPK7K5i4WHmHUiPCrQnJuA39yB85EFeJ36omsRjnoRo299gfugktLCGm5zZjYFDvUkM",
  "key33": "67fWQFs7usRJxvrwVKN13UDy23rq2YKjaByyjKTV6xFQ3JibiKogDnPkHeRsutNKeDJHwUPL26B5KE9fvHmyUbGW",
  "key34": "5RcpPd9Gvm1n1m4gHCNXHcQ1DCeCjrbhvS6ki7HngtUjwGFDbumaQkhUWcFSQsdB72vUivdXefQa8j8owyXvdo1B",
  "key35": "4oqNKxLHzrAHnT1KSxRQbdbzgJTNEVETNYFDcc7Yw9K83ZLs6Y5xykz5CeYHGyvtrLpSHf6TkZ1CdWXVGSc8rxj3",
  "key36": "3RT18whrizgvHs8sfLMuZNRWazkdsUKp76TC4dkbU5jkHiQKAYeMqL3t8jnYsgpPkGZZjX6Fo5PFNuny9uGmByuW",
  "key37": "3cyYkD57N8CsfBJRHTgj65teAmYvQYBbqkG8JhmBcLgj9BWchN7AKFs2oYgu2pFsp2FAjoE1YNtLGRRskYQyt1QH",
  "key38": "2WrnRSuccp9QAEvybLJ2i5V7Dny4B7HFq313KEoGYLtXcAPpAUL1eST5K6MbvuAfRcA4bN4zXszahunxhhKr2223",
  "key39": "34yEfkhP9ndefQae6KS8XeCz2dVF1oA5UwLXPX5XffaZbCsA7N464cC8kBWjxREhCBq5cLP9EEiKDNPVyoWDpKaS",
  "key40": "XF5ttXNr5hAPozcszpEnn9cU9g9ErwhCn3Skw9BGqmKY79JpkBTsRmkTvK6NRc5ZzLLKsZ47qZCz5NEMwdzeiaa",
  "key41": "3vH2F3kY3DZj7mj4ZkC2rQUL7dgFSmoEQdhJ8ZfkPYetzJabxNBfjLiuhauCGkdaMWNKMYSxPJoaXur6ipDiCXHG"
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
