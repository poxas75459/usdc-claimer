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
    "3rpPmXVdgQcHKvnEzyW9ez69cA81MhwJoeZySLF2EkNWuNa91DknF11z6EXG7MEhd35BvdMSUkmBKG4ijvRa8PKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mRkTYmDwPokNAZqbKQz7pEdaSuR9CpEJufGHiw9wYnwFtga4kz1WKxv2rTFhSA48goBvUYEqJXgYvXJLtJKS1wh",
  "key1": "3o4QkqvbZ9Gw8B2DTmiW8SwrbG3PfJadMweC7EgBjSLiF2StsK3KGv4GmkiHvhCwLnfmMsKYSXjZhFCf2h23S58i",
  "key2": "38LFA9ieim3YpFn8BMcyeT2biQ3VSnJkjN5gXZRPNPqZHytGRhxg8F2aXVeQJdqGnBRcvReNBUvzy8u344suC5W2",
  "key3": "QRWTpszUCXEJacSCvvnYCEt9K8RUgmEUCoM4sBvLQuzVqTLR4Bssp1JDRPxs84dBaorQTs2Et7rg7oQUk7SPk91",
  "key4": "4iA7Ea7Gyk4v4wWxcasCmY2nVWCkvZ2jbjhnfH4zbdzSuVtqKJKAyc1qry67PrwiKgoRg4Ae2RHHXCkRQjpkH3xQ",
  "key5": "3Ac6KzrFjYTpnPc7CCL6SBYDWay6PbDZ8zgLtka9bfk7rBBtyxqhn5gL52KS9rin8mxLtLYzw7rrgPpQ21TtoxS9",
  "key6": "4mZc1AmTEme2o2gZs4XCrTJTEmrmXMntUTwczzoNa7kZ8a9j6yUXxvsE8d3PVSNqBCCwnJ1fCsf5TMXhk9ngMkZm",
  "key7": "3iuFpTqyifZG7SdHaD8SobomdN1moQJK66K5ACkKmET2ZwxsCn22fhEvwEkEBRDqQMgMdkKnuEvAJv9ztPcRGqV4",
  "key8": "5eV615mz2zJdqygSSf9VChKzjHu6UYAKwZVcXg9mUYMr3Jz4CyMpRzExUQFzFhKQacug1aDBoBVu1o7cUa3C8jGH",
  "key9": "2FL2wvPrmh4y3mCvFdCrWftzEZfYc4BrxU29ePTj6ZM6gmxPAEiPT5GZbmDmdQMiduHHWFBejmETcCv3U6RiYSsY",
  "key10": "4i2hGimpMSaoaLbnyuiii9GMSD4r1BbF2X8x37KKcxGVRhC6Y4WcyFE6VkWdcsqQBMN9jucjtZ9zfeEguEnJrTqJ",
  "key11": "5BHJtsygTrf7qxdsGdNfiYobmUritVQdd6A47MX9DBtoWEgRt8pFvFMdGHrDwuFg852XkGm3NUutac1fZcKccCYc",
  "key12": "vCFTWQL3EqAFaqAG6pByQfYWMPpwzhNU4DCzBCHrvntpdyzdmZkkQDKPGcfneBVBQA8HkmDmxnLfSbA5JsZYEKw",
  "key13": "4iF3pRVtZTAn17kTgTN7SVEaFWn2wi53G8SybDErkV3hrPG7nZy8XF3fnU3gGKMtFK9NUtAgAphHQjbGETEKNXXG",
  "key14": "qAbAiGk35PJmibdVELBPnapsM2RnjTJkxKXM5rPe91BeDPHYpBLXuCVDUU58irnTDEph8dRcyKtYjeTBAKy22ka",
  "key15": "N1bw92ZzzW1r6wh5ByAN9Eq2wC2y2CsPhYwxkiGmgH8kFCdYt3QgiAEWQ3Q8DGtHam4Rh51uCgherrBcvgEY3x9",
  "key16": "4Uy5KMHorNTEL23PAvkiQjD1WSrjPuuF8yjmhZ7Cu6hjxpBRibjnyepXe34BGBj8QPqCrvaaDhfFvRYkfypKskRe",
  "key17": "5wMivkNbSFt8dfFtNyaBxbh1NgpESL5x9p7VmkKudW9eQ3E729KmfQqEtStSv4gxzKzq1UAoRB9Pz5f5p8yPg9Lc",
  "key18": "PKPrtLjqJpUMuM396RCqheML3V8xwav8cBppukRZR5kgTURqU22g7WduaiVoy7zMJttLgj6u3DWYmYmSc9UMBM4",
  "key19": "2mnP9HSbk5mk8SSxnKR6t9TxMhK5QHNrbpQ411t15X5oqboUE6aJeCVmCfFmPNPHo57HB3habfSBBa8PzZcaZ4pT",
  "key20": "4wZPLGMJexbm9Ah57NUiwpd8HsoUuRXfJttYxaCLWWg6SQtSexNzThpWAonneozEB9DwFWa7dexiVFmTEVvesKEb",
  "key21": "4rbnytkC6g4RxqE3RyGPoYj6kfCKhcqHFJGeTjGW1SSZ1ogcJSc26XzveVLYzyGBGBBDVnuJARBukw89Wn2mKt7v",
  "key22": "3NdVPnaLuYjMqJGW6zAG5hpYsmefVLH5RzptbrHKXZRLGhGmRmna443pJQMfjqvyTiT8qwfU94f2ZY6ALqhcgjxY",
  "key23": "2YveS2nMpLzKiMNNhoCMUpomyqMoLLBweQbLGAqmvzsQootDq22rmahBLBjA4cnNvw9uibPWsD95ofiJxj8Xnt62",
  "key24": "hEDR7qqNGLxWaB56C8DQq1kRWV5ZkiDTyc4x2fC62pt5fGqqS6Zy4DFGpV9hXSr5bSDmUA2kJMLAE7c2QZAEfLU",
  "key25": "4dc2HgnYJ32hrtY8ACHQqubj7EHxR6erpCwTRkkp2MBqz7Y4kGBRAuE5pNWL6oLEaT26PTSCco9fXuBKtvoqjnLC",
  "key26": "4vmUwZsZdxxefd3sNvwKgupGzRCVHY9gxdXtxAr3bTtaub2TVRABeZJ9vMpcu8hTi7w5oC6QZaVC5ULMW7VGQU25",
  "key27": "4ziAecd4A7ewwKyaR46HaZ72RHzNU7Nwude4vAMrAg5b8ZsC4kDNkKiHqzpwjiYX9rXMC8mNeWXYrs4onBgGaLCR",
  "key28": "2HA3mfRFT82gamt6bhTib8Hf2uqEksRgYFKr1R165f24wXARbV16s8sGR5fjAY3S6pu13MGhX2Agfhyd14E6crL4",
  "key29": "3MsNFcyvU2H6qbuRhnaSpvWFsLzjWziGvSjokPNhBYfCxUibYgBqxBcF3QAQCY3rRpZP9Cbb7qXYA2A8A3YQ5seL",
  "key30": "S65LK7v5FZrfazh8cYb6SVqjzWkZtD3mamoFrXQYNLrXnKhhGfU6JWcWEtHaZixzV8UencEwJgg9WUtJhV69D5o",
  "key31": "4dB529KkPjbuuJy7QLB8rSgv7BV9ZyZGXP1sQw8m6JhUaCCR8zGVMbqkc5zL3MUfgLiCVy7wQMoaPxTs3gmgVpr5",
  "key32": "AKjbL4N5WUheu9XD5iTTGvEBUykHxPYqmoPiRgKWbZU2W53MEj87Zw62GfgFATiLR93yN82H2Ncn9N8h5m9Sgp6",
  "key33": "3wwitJBGvMPj3ZujGzJdXUZsnh1jYaMMGMvNDn3WettLm4Ee2oBRWKNvhFYJGAcFyLpQ5THsEKtAFbtW1n9Axunr",
  "key34": "2TUS8EURnK8hZRPF2fgex14oGDS9Pj2a4ztASgfR2iTzL3kbheF2bgKHBHykdqbYqx1ouzwgddqtr48WUxtgJqwg",
  "key35": "5yCunwkGtLsmDbsMWjiyuq49216xo7kVYNhntbZ1HuRYT77RJMxZrBA7XQaVbanNdKRpkRqLFxMVHYyFkr8ZHqy9",
  "key36": "CNSUXuwRBkyUquS4RgGM8J3rdnMpwAQfH1cqH48JD3vMJfreBHGARL18i2VzNsbc43DR4DqGLAM5BkY1CKjYTFF",
  "key37": "2ACfSxaGdoS5iiqEvY8jXp9gx6WJACGCaUMSUMa7ayGARpg5kCwKhXPJThrqjNmxa1WZkaVj8iAKfgm9QiHHgQR3",
  "key38": "57LQnDJFm8zGCvxDM5G6Jquox2Le5w1Jcsboy3wSmZjdT8BcyyfRSTNQLMvrg7ASx4QDmFohpgpdGk58oqKkBWFF",
  "key39": "3oC23ZAghCTKmJi5yQTiH1sBdqLLD8EMTUo8in3qVRgxRhRmJ7BVik4s8JWU2LMrkksFzuDMzjtNhpf9sAwPhnTF",
  "key40": "2FuLPmWnh2NZNBzSrDsajEHq1fNXbd9M5YxEHu6CbW3ntQDAz4oTjUze69W4ppYRWpMakvDSirr5T1Nsz6vrRVRv",
  "key41": "4VPcTjMxG2yrXBAtU9YN1nQr8sbwup7zMVMdPjhwwB1vveaiX5XmtRQ6YhLuGnVmAgaoRAhySvyQYVMrU2bp3Dfc",
  "key42": "2DGtE9LyGsnCN3kPytz8Wq2Xy1BrqX4Mz7zmFeeZsZWhgGE23VvaFt4BT1NjYFJH2Dsson3G2zbf3mewuPuL14WV",
  "key43": "2rtsU22gYmCfZLXnbxEifggGPvK8AT7n68ZzkPcRVjkmqcQMBKAs6iVuw4MVi8Lh33ZuYUehRAfEaem9AZ7ZV9J9"
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
