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
    "2fHX9k4FpWaqfm5Q29eqPvvr64dHahsDXmNT4KHWup7iMg55d8JEYhxrUF1t4RhcdCyGDMbqnrhQP8mLZhKWEf9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhVNJKXdvannJusEA5ZAV7diJjkJzwjbYrFZzBd7sTzLTXxTJ2fV77kANF4HyJKW22n2xPuC5qWmcJSQB4gpy3X",
  "key1": "3kvKmmW8Xe4mvM96XuqjZcHawy5byyzFTiS9zuZKWUV3bQVBBBcwgmDwvv5rskTm6H35dT5nhRAwwjgxJyqaxzgW",
  "key2": "ke1ye1gCyLWzFCNf7x8ASdApfMZSKU2swuqRxC5Ya4GWBiydYeRD47A2Vykeg1nG1taDQNQEbaum4BgX3Zvyf6d",
  "key3": "35XamFAQcA1W12tMKefVErgsfm1hsysJzLQdiTJ1XqY5dHjytSCWk3gxjTYzkfPVnaiGYCA6uy2g73X1N9RfRQi7",
  "key4": "3ympF978gg1qUiK9u6pUPxSsnraDAaApExofieZoRdvBwhrZeAVcUbqXoGQBwdHBdaWMZwr8vxDMhf1qtnzNQ5f9",
  "key5": "5M7UyHKbWgwBCxwwAJMF7aYBayEwoRP4iEC1Kq7PLUskemnCa8SiGt8Yx5zrGHHMLsMpC1QhgFXyjUkhDZkF6Zyn",
  "key6": "2SV2EGmcHLnEHDM5JmTMTCebdWdnLTAJrcUEozcbsDGdAyCZvzP9wxYY1yKDimUMGX3NrFf1euc687wzGCv1PMfd",
  "key7": "4qremhZRQBydrtmZB2JwdGzj36823q6sCRN7BcznRPKb1vsZ3SyRwUm5CMckcV2dNcGibBdTtDqiC7yTeutN5gbt",
  "key8": "4Hbh3K9zbyhhpWyr18eVzUQgxWamNspAyJaDi3hTUmNbis6qNmr1BJGDpFnHxyjgqZSupWbraREKSGvMx7Tnpyx9",
  "key9": "59gsSrwP1Hm4Pu8DREL9b5t7Jiwr8xgwAmBFgjNguFRYmMvLgCEYQBU9VSoZ8bTC4NX3Q6qhyDqfrc1baaLSHhAP",
  "key10": "3iXt2q6sn9QDd99eQJhkiwYDEs7RUYVmH8qweEvtqENDPhFoaXtzLqtZWGrvNiTK4SLP1W8rbzkXPuUWFonLXGHt",
  "key11": "54Ch3RCoQYygQBJm9QxJXWaVdPuNGzc5KKJye6j4kYfiL7XSp2fDgK5vKChjbQvSw5pigG4rzFsUZ6WoSC7bHSoS",
  "key12": "47sgLqGeXyhvWZKLx9BjRLxWRG7McCASqJLyoNkXPDX8H2HpbcG5yJn16cvfPAn45dFciZt8okUEmW7j7r8TK7aY",
  "key13": "5rNMrChAd3byQ6tWMnY4mQwbForcXkr11mohHBaHg8ZHGRZzgFvnKzKWe5J9MJ27AZt2na61az2VixnE4wCpa8n9",
  "key14": "62Z92wEQZEAYAnPiJQUbDiDgncLo9N2P1wwXKB8nFeUVxjmbCKSCeyAhctGkmohAiDbr3cNVAfej2pBjaxrhxi8L",
  "key15": "4wS97G4mPCCJNHAfWayM64z8qhQHkJvgumLheHckwLosbqkZHebKHwTLYNWJAap1tNpvqFP6xhJbvtAfwwLcn97j",
  "key16": "zD9ARtv7481CMLwy5MatKcWVZ6pkta79wJUfSibt14FfM1qB5NWXiGPz98qVox5QGaKpe8pAWdPiU71SPitAKSd",
  "key17": "4xSgWwWZDkPfWdwWMtrjrTEG6RLVVzYvGhTtvvFDQpYQ3rwa4Szri6bcmrS5yh6aejmHa8uwoU9CqeFrkv1XoE6A",
  "key18": "2pbmDwMHg9Ge8Bh1eAU1Aa71wixKeN41B2v1xKHQMm8etbN8sV4pBYBMUHpUyj7zHbg8cwBvTiz83h4rWicRGHDd",
  "key19": "3XvHqycu7uVQTauLtdQoNQWcAFrgxtUSnVcxH3XAJdaNeXfhX2Vv8LTYbZLHDKz9kG6sgKPq1TKKwrmvZXFUc2WT",
  "key20": "GG6GtBeK41GVJU51z1MGXcSCTsMUawDifqoDo7MpjrE6X6ScaKB27kRb8NEMnokgBGQC8MxHffdJLCg279UgdGn",
  "key21": "5w7B2vUr356vKpkDydpoePqoEhDsu2fYvnCub5qFxRK7EoojA4HLwWJ5iEw3hVm8HS8RwpZEYBUFHz7Fs2AXF3YW",
  "key22": "3T5UAAz8t3hdHCUHgY9mptq6g9EqW9ttrSdxrX1kBzAV38sxUtNFCZJWtQQRDp5AxNtsYRaFADhpBX5oz5RZXfQe",
  "key23": "2GjikYM5vdfcvL42zwHSWYyDzPL14RR87VTjoH2HFWca5pR1M4kgwP6mNygkDT1ZZ2Mq9WUHZBV9FEziTinmXd7v",
  "key24": "2EQxLBRLmypgD3HgGoFRDyNVNMLnATtxXsxdrA1TDLuPFwnvgENF5KatbXu4UA4Gvfqvy4mr7DWLRbyJmo4ozDMp",
  "key25": "9DRzxB3R1xr4SM1eaYYCRPUQkMLgkNGmSSZWeqNZJJiBsAFbbL19f6UeURTrxvnr6bpDik8TZ4165jERfV1E7VE",
  "key26": "3e7UWBDpom3Za3Ybe4aw5tZjRjBZVBaWsYhEpHQYwze6ynahizyZsXaK6JPZaTEea7e9ja31AwZwVDA5mUv8LWcb",
  "key27": "2otyFPRqaPTTxxyUd7GwFfYkL94dipimiknKVWUCeZoFPUyoGPMWS7p7PtjdLFqAV1QkzAan2KMwD1QmXiYDXpLD",
  "key28": "2QeWCfwgnwDAX2qGGeo4ZKEfrs4YcQKwKJoehRe1kBB5gP65FDDbcPdAXtP9M4pbo2UmSK79Z81K4zKshn759jgM",
  "key29": "4qzGjky1nXxgfrvKEE9Td9mfzjp77rNiMycZAtKzwX4G1BR2jFeea25RLtwjp9fn29bbFUxg9aaVMPq2exdiySo",
  "key30": "4rNF53DPCbb7PgFH8NNpA4rWKvdz6Xkqn2beQXA9jHhqju4MzowR2cgGYkQMApK43jmspgzzonLPj4scCdW7GXiw",
  "key31": "2Dr2uCFtxTjeyz5ompPQfoMzZKu3Mkdn2EKPtfrhshfiKpK83dAzB5aBGq8Zpz1eg3gviaXBrrosTTxS59qw2WaB",
  "key32": "3iM8YtucdS13oqPq7T4qBWCVSmZE4uMUAmpiekCWLu3AeJ3GujWPWC9PvHtKTYbenyRnWJxoq8GmR7D4vh3RuNmJ",
  "key33": "5DhiY8LnkEqiACZyHM4AXvRdPmst5paX3VCH3xpoxrd617NTu4XCayQfk1hU1SyuLu5BZN8fzjRskiYVNu4Tm1eq",
  "key34": "4bn8QtEd5rpZeTvNTT8ZRcQDZ5YYZ7Aa3yPtdNHU8qWiSXunKuiqG259B9C7FdaVq18tgJv9jtVDs2vuZfHFDiZk",
  "key35": "2av46HhBQSoW4qKoZ1RcRKSEPHRZNL2WVze974oHzB8kpaaxSQb2xqg3nDyEgAPVqBjJshtpqWc6ULmGeARGWYDf",
  "key36": "2JU7trnVQipg9eQE1qCHJAZNLV1aez4t1rMXaxGohz6EQjEAnuRBTtKBYfWDuYvLXeJTpqck6HFC9GyY5SZ3pAE7",
  "key37": "3mKofRux1ygM6ZBG1Kf2zNn1AA9UxTZ4Dscam5RPmyommbKNrczEe6svC7R9znX66fn9CyUJKchapvVzaiwwV3Y9",
  "key38": "4Fsr8yJzXjneJwobtSkG1q9Jv8Y9rRyAnRgTuaCGojTXmMdjBJMtV9aoh3nhZPeYYd53cu7pYrJM1XFwrFfQyp1C",
  "key39": "w3VzZ82o37Zk2tWBL34f7EiwJbgVCXnVydTa3o2V1DsCmbBPaJdVES1ptRXBrFvn82hmXDLLe4sZetJPxrbRcWC",
  "key40": "eY5S9D6qXvMJR7yjxczsemjywXuYZAe5BPYZws7q9bNoVFdRnT6U1eb4sBDQY5p7gD1h9nZsSMUy1qBDWTkW6Hy",
  "key41": "uZkWUjFbpkbisZF3q1w7bgmWJZ3mRjRXXUDpAHbTsFDbJ7C9BJFzMhs7yu9sS2ddX5Yypaz9ybazZvK9tdfaHx8",
  "key42": "5tb2qhX98pf7Wd4NWXykt6ik28q19HXMK2zegZwsSUGviGFCgax1iLuVT7JGUGxSLXApnS1c6zXVW5foLQQjuB6",
  "key43": "62j6tdzqgg1JWmFu7kF91JBWogjbqWEGahoPz8zXdAkgUmJgdURPhypZSLQvRRGahWFUR2Ktzbk43h5ydZhxcW23",
  "key44": "4Pb1uN2K5mF1MEFbDxKDdDwiLSEc5avRvtznNTkegRGd89myM7JFKv6EnMDbo3VAZaYhCBBydVZmVtLWgMbEBZLW",
  "key45": "udCqcNiMUiZ92Eut2wL96Y3jwc8394PAb1A6th1Us3g8XQszgjUANc6aRYQ4SnntDy9i9QFTHeoJHbgWqAqGkTq",
  "key46": "3hDN9UnW7dRB1brkAtWcycsEwjX36uSTGFvRQaBwGTpPc15XGRmLUQ7VaPaHFNX5MaTD42JgVUUFBw1dRFGYe73Z",
  "key47": "5p9HWqvx3xN2s99Z2qGS5UhdPgfjdi7Vb4GcC5oAdy1U81MDvyyWvhHvVBKKYzA62YoqAHughJmGStBqBi97uet5"
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
