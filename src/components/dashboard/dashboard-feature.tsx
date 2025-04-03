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
    "4mTsFQEt8KEi9rn2G1nJpDRutgbHh8AD1TiC5ou6rHHQws2SXUPyA5kYiXc6ejwuSga4aWXzNdMQK9SNQizQmTh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tco4X4uzN6vRwtfsBhd7H6KzuJmkFDtLrh5e1koR8PhZ4LoDwweKBjwAt5s1M2nem4R1sVk5v7dAcghXSbby1m2",
  "key1": "2FFPioeuAr7fVKUiYEb2eYoh5Tne1dv3oEdzdJttTTy15KiHxi1G4KhxZtTS6VMDv7nS9K63hgZoTiAUMumzEF1f",
  "key2": "3MFrbENox6N2JqgAQJzsPZH6UjFsFF1zf8ZiPuyH12BwCXsDGVAyMeja5vBo7yu4a6cVLSDbLf5khwVhRWaqJvxW",
  "key3": "4avSjBUTpqqqqeuYAi1Ck6Rg3pNVT7b4m4HQ3BELf3tXcpbNm66a1Ycnr1SwJTsBJNn8oCWNRdtNpaGWNp9TvePe",
  "key4": "2W9ZBPCCz4CN6QD1AgvDYvkzM9zN6g9uFLqFKegrAmVA4Z138A9owXFBB8dB1SiYFZyXCBkQf61BkxbzVb8bioMe",
  "key5": "3ZLzUjJSJgwemjTWWgWw9RWwBxpBFXCtHUAgLNqRwAMzg6PSF9fxKW7SLkrnm4gpYwsKUKwNVAw7oVDk2bbGe17C",
  "key6": "3jGPNjJxC926YqcUaafneLcHHdTxEBqNUrhJmiQ4i44RbjwwUJhaKdHVJNCM2HqgtU1cLE74eR1wgkHaM2BR7Hyu",
  "key7": "52bBZWyGTnSL4ikpoSdXYqBewVtjyCwmVbcrcee8ADosiUf2ztHhZmJND9WzReoDQDmLEV3Lmg7rugpmt82iw2qc",
  "key8": "3QAw2v8kSUPM96eoAneGFcCRc9tNpW4Rrt8vj7hd8XoH27psaARGeev2kJ49FjUE3wnm2F91cQ6T3M2FQy493CWf",
  "key9": "4oTzPmV9TgmSDCPAjuAyQXVWhr3AERLMmCUnj7aNVaiy2TwrdEFW1zvfzmKip2BEWboErqeFp3xNRqCh1wECPpMy",
  "key10": "4fJ584ZBe6shSG1JNUyXcUE5iW4scxYwAvu9gZwgt9SAQadCp7nNfogFYbArqum6HW5fhQy4H1BuQJ9Fd68zUn7m",
  "key11": "4Smk6YpRwZDezNWq38d3wwH3LfHoKJTrwNGGqYcgCqSLBhANaHPswFiNdhgHYjR46ropNZzBwzGNrnrTrauVypk8",
  "key12": "2mJqXFoQNrtAGy51tAWToxeBWZeSaHTfJk97ZZf31cNbApDaCms8h4h7JfNwQ8RxSntVc9YwqSb1T4UTDKfmHMVf",
  "key13": "24abuDX7LKcgBYVxaSiQcVUbyNfK8yNtsTmxnRVVbNQBBrwTJ9ktexmcNBUBL2tWjDYUcH1869MybNRr3gGTwVRe",
  "key14": "2n4LSUwAfzLXhWqGK7FdzVgtZgHnbpbx7CjcrbLMpXRHzTGTqo2udqVseXD8XnFePKh5neAk7bmsuNMMz3ML3yk3",
  "key15": "465pDYe4X4F9Zf2DA89iLBkwbP7pXNdwgNw2ZwEC4LGsV4T3nbAKLZ4u4A3CxLYrXJhCAuyfPXB5ruqBUm3Q4bFN",
  "key16": "2JbiUoimkfzbpp7LXpnVK85G4AQw5WNbQbdR49QiYNqE3D2ZtixjYzp7GoW2e9DRiT2dqNFr4KTY2SeNkNrEe4yb",
  "key17": "nGJ4inp6UZkeWP6CP6QaU7mCYhVTkZKma4bXZysycTVQSfG9A9JjUjAwrj9HzYyD4JNezvUiYBFra3YPGqEfGCQ",
  "key18": "4JdPA4DAhWhNr7Wt9NgSzRJzkQSzeYQSMqcqmF9s9rTM6UuWj7TEMCPkiRpNMEoqdTjtAUKm3YjL5kdwZj5qgb3T",
  "key19": "g75pJKM4SB4VgrmUqUspK7kiRDDeUnpRafn1Kx2cNCGt1AT6sHQSck1nHC9TWaH2Dgrknc2GSxsQMCAHEqo5vu7",
  "key20": "67hbeWZQp3kvukWhUjdfsTMQyA2Kap2k4hhN8ofWUkVanEQhWCMrRmfFb2gmEvVm4VjLqcCV6LhjdJavvvueDcxb",
  "key21": "2QG2HcDhEstvEPHsvthEXA7s46Q8sgqnb7S3GGjLnQ33bMWf9heACoK2jF5q3cTvjaN2hWvKwiwcxRHAmRyu1pGh",
  "key22": "2Y6u1AriUF8D1gs5r8Xut72cWoWkVbcMXyBiL1k9947oPLFwZ618mEm3GNiwE8ri4nhKf1Np9LCoj1qnkgEnsGfo",
  "key23": "3wTooaGHJz444Yo1Ugc7UgjkiXsELmABd4GmjoVXG1EHPJJZ7SxGSiCkytqRCtBVvpfBpcKrqJAJsFNPaBQ5NVir",
  "key24": "5HLs6rgE4cZHto6yveCAr28EzmfLsdVuVKKbv7NrfUYCXhgvTrAEENWU4UnPyLXhMN5cU9MmZkpKjmth1nDsXbPY",
  "key25": "MWhT2pyrSWQVZ9ekrkzgvV1xp2Jv3kdkKkZk7krqmsQUJvDHj2fZ8Q4uFkwdkKdpuGzkYemc71GScGKtoKVj9F6",
  "key26": "2ZR2bPUfVi6hhamFnZWy3DLmfsvKxK4GKJF6v31Hm4qNpqbTogFs8REgXQD8Sec8d348stXhrUXTNBp3MDxgt9Re",
  "key27": "9qJrSC51ZdooeTJi8ewrAW3LUtPvZymrD4cazLFmBtxfLXvtD6DavztRt5AZRovwryoqPbf8M3fQfoKpoqdh2JY",
  "key28": "4W8GeP7BhEbQsp7RG99ogb2mCG1v49vxUHc2E8PYTtdeWoepS2xyHEtegRMBALoMzXaN63UF6W8ZYSj19p8mBcg3",
  "key29": "2bnKzBdad7YoGG7BR7kqhVyNtcdcebGQzQgyuRmNd5XsxZGvGpowh7of9n1FfatkwSNTK8xdRCVKYdmrQx2gKHsd",
  "key30": "3SDEB4e7EffKXBjtYvBjwdBSDh96FAQEQXFRDNcVRDdpQ3iUYkx3iurUWXRvnWP4N94u38qn4epp7B3ovDrtzp84",
  "key31": "2FpDVV9wejAK2yJyNY49ioxkNB91MsM4u3qfBJNucTF7ThS9cGUtg5JxzF1Gp76scM5KyN9E3BPCsMvs69Ca9V4H",
  "key32": "WjUrecRBKCfrXtdnNxo1bUvMeot3XxpGYr1VFe4q4kr4L8wmSuouVNqtKTuWZUPxEs2vX8XDgAaoSqMjnUNfskd",
  "key33": "5bwG1j3MRphuxAuFLC4sb1CTkYJfMAqk4oNMmqbHuq1uyWA4A2jFsb2zhNbpVxGuZZCsS8XJH3KUgZuK1Cux5Zs9",
  "key34": "2swPcArZ1DXS249mLiRDU8eyALhzETLMyLRBXjg9xhahRdpEahsY9u5B1pUWd1HZRcbaDpTioWSKNEqxMVjwZQks",
  "key35": "4uibbQCq3Wb7VXvcgRhCSwb2NN7RfsDHD1AVBAwR78gQL2qQTCtVw3GGR8wkpTSbHEqaFEC5nsZFcd1JuVGYjFq3",
  "key36": "2DXC5jf1L1fr2ezNfUadoU58rVw8fLEwuziovQ1vsyv8o2tzmLLNYPP1VXHaLPGWMpQ75WrrRBiWDhU9jLLiQGYE",
  "key37": "4hqjvueJLqsEHGWYR45j8yMxCsrVLj2PjwRZH7qpWRvMStYpWXmNyLCC3WAmuPLx5cjuJsbMw4xiYgpYx9fL6gr5",
  "key38": "2aVf2EDAWiHXDoWQbD8m4eH9Kxu1vgX1cG7dstM9EEstxBGkyqTDppySSBGhv5rHFdyhpu7FUGUgjJuTFKJCy6ba",
  "key39": "4cK4ZYFAJdfxPGWK2bxVBKvgmHUt4JAqkDMinq4ybL3P5oKEwLzw7pJ9Z1McfvKFHWQUQ2kSsQce93x4WiDUMGA3",
  "key40": "4FRwxsCWi6wawZnyK1tKauCT9WXZJ2od36XyPLaDxqmyM665VyKdWQseXPWp5RYCp7G4DbrTcbqLfwusxqemd2k7"
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
