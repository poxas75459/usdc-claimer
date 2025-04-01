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
    "JwwEo9afzxxNoN4V5DTJSo7p1JUVNkDcwMU141YSougZRZGC5NyE3AKeYGCnV6g32ZS24TFLLRE8VV7J2Msff4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "425H2rtcvkuWXjC4Yc93u5BcDKpkVeSKM4MGHRssLb5UcHK1sWkwgJXHj87Cru2znVeaCjg2UN72hoh6ireohbSX",
  "key1": "2o6qeEdThESmi5cVGdm25475nBRvavgeXtk7DW63J2ZxerNEHY8Dwech8WyvbLoNiGetscmyJb14Q1VkZnCVna5Z",
  "key2": "23iKwiAB2PhYyzi98twJgKgCbAowDHBURCaXZF9dyyMJLwDztaKfTHPSfmjp19MtB15yoaGXqm75YpiooVrGGVat",
  "key3": "38Xo7JyY2zHzFZmFFMMFYrkT2tehdUimDNVV2ma7u8bT5dG3PTPpYZQUshwJHshU4GsFPppf4ZGRdkTYowNmDcBr",
  "key4": "46mA2Ss6pM6ruPgxHjzu6T7v32TybYYDFTqdN77LyuVTudckaVssgVzcKGLSWfaJ1GqVJqzscLrbHEgbivBYkPiq",
  "key5": "2CgoKB9w8wrGL98XsiGrNjHZ8hezYTMGpHm82cPao2RnNAA7PjjAEa9k4WCBmbNKb2ssQSiY1FSSTTxN1MLfpBbU",
  "key6": "3EwjxcSv1RFXK1XaVNULAV1dGuniR9svMu4QiBizKTpQRrfmMEcnNwMxXVzf9cStoFk777sMZQzDmPeF5b4Zkqvs",
  "key7": "2xZNbQ9mRtfdknGEtiasNusr6uWwrT5EyDsAL1FqFR5uxDqX4hmuk4XKLuEPkUuufckKgTpFDnGodzZ6VF5eLdN1",
  "key8": "5VA4kiHpHk7keJaLqSeWZGUs7SHJHUqomrDh2texMBEtyJNzznmpbrxVaDz6WyEskuyoncLRKbnMHXfnf7eFg4WH",
  "key9": "4vTCCf4PPA8vmJ9g5r6s8GWRZeyo6YroLR1JgcBEnHCmJFnVrVAetBoM1fCQPCuQVPXvP1CTZYZssNnoAHDG5EiW",
  "key10": "3UwZLryu9KAR7bmV1LtdGq1vGpJ7vXWEicGtyjBP9oqyRFMrmzNoEFmVXXpNsHPqZHqfLwVAyUyCJiRyMFAz9qGo",
  "key11": "2hmjtPQWWHFYu1cjnhXSeccb4X5LFD8hBGrNLd1a29c4sx2qBF8jPeo77H1TAcENv9esnBwZ2prNdZwu7ajN8FAA",
  "key12": "2gtXDw5gGtU8Kju9LN46tysuKXDHTQpHYt66WyxGWkCvrWrNuMRL8wXQBNAw41W6acV7T1f3PMoY6joG5QRemcwa",
  "key13": "4Vi97pqbweSSrUfUsQnNcGi4TRH18YuGcouguyThFPcEJEbiJ8J4rE3kzm48NJhxmYVg66ibkMgNzqjAwQqU94vU",
  "key14": "2Ktx2omzdT5VbbxJLxHBj3FrsDtEGfpaZKYu8SAqVCquMrCMoZcTg4QdvkDjvujUcuKdDBinnzsRQpb1kjN7QiHw",
  "key15": "55ADnwvLfnc6M3oG3khaX6434eB5b3PddSUEVi4Zjy3HCnCRPDhyCmpv4dKcJH53n5wFJchtUtT8EjZWsZRChimX",
  "key16": "3ppFjN6VoD33N1RRDpUrCK78H22z9p2LPzLgj7udwtAEEQNC3UqTDF6tmxr4G6u9jXekdC1ekYKG2zmcjasbwC5D",
  "key17": "4gjMn5ZBQrBMNhAWFYjMECndvZNwXELt2avP6ex53VQew1Ne4JXp27iK16mdX7XUUMPVsFm3CVbSEwQW5ftqquVX",
  "key18": "5VfnbyvHyWxWiZ9wdb5VBvyVaYBTwjux8MGzg7BefXeu2fU3gxwMU3dPNDWMvKmWA7RY4HzEy11xYAkDWqkuybQA",
  "key19": "cbGun7PQTP8Wcp6LN2gvF8nCs79uPPsDk6bHck5uFyFZ2MEX3r1FWWHGuMaG6bZu3x8eQjbHvC4KrNNBchunxyW",
  "key20": "3cfaiYqC3kPGH5EehtbVEGpKQAKFrHKzszj2sN7JFATuo8H7ZeEBBsS9fW7XnTQtK721YR2mS5pjTL6AW7L1EMoP",
  "key21": "3ytpgyouQATJzPwHBouikwGpZc27LzbQTc2mPE5eYDiZS23mF2qBHspjRBZFRiBEbfvYRVaxM8XL5uSMXNocjbRj",
  "key22": "2HMXk4eUXrgtsp4uRvqnhMZGCMASbTHcWuDvZL91CATA7gu1CHrsnajh3Q8J8vXosE5FreoKk7qkjLAfE3Y8Qw21",
  "key23": "2PbvGVi3k9tuqpP3RbveRW4Z6DeVMHBY6GbJ52iA9XSNmqA3zBp48qixocdyov4d8haaPUGAdCFNtKYUxBK92KNo",
  "key24": "5dcwCtHTtxKsEupTj64oy3cehtn1BQc853jqmaxRekjFMLP6JE6jyw1jUHhf5K8c8kCQ824ZcNPn71heDKGKcjEH",
  "key25": "58iefeZ6baZ4D5SLoL9aaL4nv8UYtQE6tt1ZdFaytZ1GwTvxJQ626LnX2SCVYYuS6cFHnjZXfL2GuxqtkQtfa4qE",
  "key26": "eRYXJJVJM8DMKU11StH1SsFdjgvtYVvbNEauV4yvc71R7YqBR19ui6iQaYpdcmnEQXVAh4cFTMoQeFUQRBQz72V",
  "key27": "2tyJuwjaUUgzk3bLDT1LAwFoBHkFpGEvRM2HWPYPaBCJBVxS9pp6ygSq71DknQ1NynuhUyeaCTXis98v6vWn7LRX",
  "key28": "yv3e2o5ZjTzRr8GZRBjhHbW8EuRA9SXMd6769ugwDPowW5jUM2Cn54s9T3eaGdWJyPY6NAM8oGmXXotUDtKMa7k",
  "key29": "MKjMTJwcofzCMHf9Qs9kJMkFtQqcft9AteB3dDFoG98wFsubonjXNxH3iJTSJB9uK1eotuGg9zxcp9iBL2hz68B",
  "key30": "2u1jzHHfr1ZKanEnMwwqexDhVkxhJbm6qtGQ4opJuJLMWXVbFMvCaypTDoY5fr1Fgho7zAzJvtHhHeBhrpz92TwL",
  "key31": "3XGYfR2eUgXfwinewrg5jsktXrJccr9uTiGW9gWtKkgB63zJv6mEMmv2vXJi5WHBJHwLPfsGayrduFYxwqWwQ11w",
  "key32": "4ik7sn6AvxKqB9WhhwV9As8eC9X9vBZsn4GHKQDArB85YYU3NxhVBacehJBp5SEsamFrTDdVi6koxvdzc6h7N6cu",
  "key33": "3oGPz75SuMjpPnjZch4AhTs4BhBY5FUe1gdVGSGGXvZFBsWY7J1rNbPW9JUxpP6TKPk3BVR1pGckt2ivxq7zdf25",
  "key34": "4kx7TBdEuRZXpjuyBBDZqGsQ44Zw126qiyTp1j2PWPHgtnSLP6fAuZrr6M16NhkWEcgEMENvdhPHmrFjrLTxVc6P",
  "key35": "AoeUuhJxq79Xo7zFuEEKsg4czd4Giabd7exR4QsjowdNQm7Jh1rdYZqCwsdQx9FCtrrQNEUWFRN3JDyPVAyEZAv",
  "key36": "5z5oCjW2MzZimzLF3jBByW2GZ37egzY4546V36gzQbrrFsLCboEBwNgPMmb4ASYtp92m19Psdakyg4ubcXRCUxor",
  "key37": "yPgEcb84rauhauYFnrfP16bzVDzy8KXQe1txNQWzAc3KFECzvqksZKKe7dBaFA7mKHRtm3yN4RjWYg74hRZkhVN",
  "key38": "24KGBaSjkY9BWh5d27XodeBoxHe82o1FPy9gwjzb1YKZGuStZ3diKAx5zco64kf8ieFz1hVkt3SNXroyEmr8vF5E",
  "key39": "389oMEFExuMGMHmWUbRrBYETTbWbVego6EbFUU5WTEUbDX8cdtTsAs34mNrUVHTm3G42ETmbDgEDi7e1DnnezHHF",
  "key40": "3n7Gd4YL8LBLW5WcwBBz6HJUQ2qg7kmH92Uo5nGw5qqk3anXDvGYEH9vVZ9LHAVtm9VjHnggMFWNjHGnPucPwytV"
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
