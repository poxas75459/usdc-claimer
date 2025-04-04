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
    "4CUdtc8Saqr59hhgxxLaVYh7VNm2PwVndN2BWJ9tsUvKhn47ao4f487UCaxujeGwaGw4K8tcgtoBDc4fZTsLZLF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvmJXpHhUNoy2MqoLPYBVqwSEMqkDjL1sEzNHJxPR8pNEbFb7G8NxuCfPxjvZ8NirMhK98iQknNV2vfWLG8WBFQ",
  "key1": "NXt5rAbCrfh1NCPoWy1yJDiEfwyKwVU5sEvrAoQvsRvyVBuPmhFaPwLNbDVxfRp1QdK3iYkHcvoBWnDZduV5Uez",
  "key2": "eq9KznX8GcU4hCb62uMzb2ssLYrDDSrjghSbPyv5z9mPUgkFjSJ1KUtMUnvQDdSdD8mjVBftju85bQhjdHaMuiG",
  "key3": "4NQzqGq8AmbrdjmpqHCQ1mgV4m8XT1bvFuNFXXgbC4TgMn1SUUKCcgSbLQXdmTNTB8gQx9h2W8RzWKUBWBeoF8KY",
  "key4": "2iET38iA4WnMCSuQ2eL7oGV8xTd7UurneoDUTUQDEyg1GVUxAVVWWU9DYb69GgiP3oPNauzwHfuhQQR7QauJGpwK",
  "key5": "469nJpyBwFGSYe66Di3G7Jdeixoy6ChzpJ2yNRZG5ZqNjXFj5zbGfbHH5gKVhvFHZbP3r4o2fs1ZEJuoF5hXctWa",
  "key6": "2rGmUWBz8DVDE2fijmxrg5Xqy6onwDCVZpqq7CEshJZ7sGfdWDFnnhhvofDA1YnrcuDuPrvch5XvvnY1xUTCJxhe",
  "key7": "4AK9VdMRjCWkTuma73QifPrBQUg35nyfzYeqsZzybEbtJkVWYdGiRubRqUK3zKgw8uvuunpr9JHja8HBRZfABufw",
  "key8": "2gDW4rX6kmeLPxvrs6i68xZCKApXxrZUSZBDZX1ESkvCnvaGyPExCc1vtq495J9yaHJEC4JSAy5HBLqJYuJMzBJt",
  "key9": "5kW7ohyzomxdMgPAYHp9JyioFSXfxv2DoC5chE3nySwPdHJUAZ1mdC1LN6SeTpL2GCyar5xvRfGqM4Rg4wP5jwGH",
  "key10": "NqcgfsztYCN6xZ3652A4Vdq2DRK6Hq58aj4Watiw1uAohP1PpuXP5SvN9JHtNoX96F8BtgXCkaiDcvTHyicnLaW",
  "key11": "55qG1BFa9qFEEQyGkcywbn9LVMMCANz59Q9dEzyXXRPGMYKz9cYYAo8f3s9a2xRfF4jSmDAhTRj6DNPnoW9JLfEh",
  "key12": "66baUkU8cLHMkK5DAgfKB9i8EWCqb6YVsqjZd5jaGPdqwXF5xqKWxgkZQnqnynUbmPDkJwZcGzqZfGvCVo3iDED1",
  "key13": "vNLHLF84diW59APui5uiGCptaJNNWqPMoBMAYteM2dRSrJHT2yE55zg3peGX367W2FH52i7xocjQYvydJHDt8eo",
  "key14": "2uqgJQaByLjDkbEJXrG5xdjwMDuZXoriUy6p43Y7Gwoxfnh3u4wzLodasszE4A9AiLTDgXBYcKM2Kw1ukq5q8QZG",
  "key15": "5jg7TBgJ5qbZcwBhjnPaPZYh8JkDBRqc6oDMJLKDvzN5FegoLmwKEr8hh4jWjJyFnvZScnHhx2wMXHymepf32Ekb",
  "key16": "3vFBmTjfyTFnf9h4wYy2wbNbqVVgjDdCn8aG4tb8T1NTtkKUdY3SBWH4sArE2qW4N9AYK9cUr7NcKrhgLcYN9aEW",
  "key17": "3Av58CPcf611qusWPdN1P1jSBGT75w5WYYgnVTUQ5ehcdJ68x7urJrXSACdA4kPLH9VgVaVyKMxoiJRmfYsG6BFe",
  "key18": "3gVbJCPDixcpX66Dt943PKEi48tAKBwUFjS5Z9bwmXvRFXU1KBpZtKkvWvHWw9NodVpK1GG1SUtjjifyKuXcuUAh",
  "key19": "5qTukf858GG2fkuxVPXap6E52zCFDyVQqysHPMWiLk212b7CFb5xv4K7aDneUxkWmX6Vxs8f3VJy8WWzN1SDY5ye",
  "key20": "4enBZRCBFoNW8wUbj44SzcuFrs92UVEHx2GM4QmTBfSjHYK4YKiUNn9tkptNwZKmEr7ecSEq7xQngUwcyHp7r558",
  "key21": "2H6E7P4m3KtYrC8PkA38jGAx4qsqcKHUesZj6xEUosCpX8C5uVTzXJtwvRz98FMdoKkz3Fcc7SXCxdCrDAwnnXHU",
  "key22": "659FpNtmtmJxViBLuRNR79MaFyLCnNhkrWUQx5sgLeR1iQASuQ7MtwFgy1de8ayRzuUPYiA7HzHeGt8SxNPfnvB1",
  "key23": "3dSjyKcjeMoZKiSquDweph178WDSra8BYXUGXXFXQDqt8QDnFTpV832C4DgJwa2hkQB8uzAeoKxycECem75jbRN9",
  "key24": "FzZd9rqVAS6mg3ZJnyw7xL9w6d5mYZWzjKomuo1eQEi7pLejBkRJ85kq2R8ZNbVtfFRuMDiRZrN89zUtgUXYJW2",
  "key25": "5wwWRCjhWhn3omXNbMSAaH4Fn95mwKuJCcYodHTvFq4iEpRP39Q2XGF97HXUgHucy8jx4mbrPxqGPJeqfAxhMNqm",
  "key26": "JJkmixVUUMZc3rRcWXkmoBhmAAQqhotcV55cSXV4C8S1JxsKbhGnLvtpa4kFEVjLNPXcNfEwiuSQVC7yUkrxAJj",
  "key27": "66BwVBDmdxYRFXNBNXrs74Lrh6Z5r974e6ZpzNfZxwm4iB5evSBbdrrmg9bZFibhtzFeqWoe8pABMamkmkDbzWby",
  "key28": "4ybgZUTjYFxBP9kq2KYABRC6Fwgb1E29bLkUA3d5chp9TjNszLubcpnspC2PJSNkBRChMuKMtMLskSdVBJdRMfnJ",
  "key29": "4Phn3sNNMrSydXHTQRygRzE8yHAHKg2z3Gox7GUPGZqbfE47Rd7AC6FYjHpWnWYLJsRzqzAk6UJSEFhqHrzJTHKr",
  "key30": "4HsHGzLp1e9QEVSMb7aVaTAaPLpVEC7qmN5KTq8YGN5DRzJnWktuoV6yy9zwkAGSpxU6CWuemcyGn5dTRX7aiLTa",
  "key31": "3UwhVpkH9yXeugC43bfWWELhKbbGifQTVZha2hfYDAS4NEP5geej9GkGF7H1x6Lee8pFPJCivU15gmCiu949iaU5",
  "key32": "5SFgcgyXMH2zMXZUbsXKZ77sVJmYfah2ciNnWFyU71DbKt4JAy2kti3TMT1UdWGkM8m5pgTh7SErTda4F5sEsRmF",
  "key33": "4Qxiz2e2dqmkpBfsGEJncy3f42hwMTkGA39WWwJxvi4DTfkSkRrJH6cvCbvFyr7QFN8bhJLbh2wUWrUKYQzqX367",
  "key34": "22hjJMH3wYHSwvEk5PEzyneUWwZKXQymuGiYVLWrv76iyYAjoNVqqRR8sCuyPX7urrdacrmRsmpTKV7LzfMCRRu5",
  "key35": "3x8bPXCrK1jVDXNcPtt9i5B6GaurwtxXh71ZU2QgUJcuGg53HD33XVaHcLvRJhGZN4CYcfM75dquTKHpMeh9e3Wa",
  "key36": "2xmDqJSjhM6b4t5NrWDJLXTh41JsDQ3pyeZcbtLVw7oLWrCu77geWjWaJ7BGKuDjGsJfok16x7nizcrTW6FYz4ah",
  "key37": "UdqAy28VBi4cwFTpY4epkPBqza8Dgjzt5MNU8dsb6YmCvV12apiavd5CFPgiXVEQgTxtVbEGSRonFoah91qrjiJ",
  "key38": "5rZEz4tqkTuYEE2orViFvQpRVK8WriYrTLX87qf94ppfxFrHcUgXSbDAUw884tXVpkVHCyDnszXZz7ddKdfatEtJ",
  "key39": "3LNFhv4JkCp4i5iMqbCtREXV78odHorxZvdfW7hwuJ9Y8LLmG83bw4Sk1kHKrZfmGM9PxLrenyq8u1PsjenneSSw",
  "key40": "4sDVbhsRfxdnHd3KNf8ahv1r18pEiD1vSA1hNhMqAAiLj37PoX8bho119Bizf34neHaHFGEboPebvox59ApjmtTY",
  "key41": "48HDd4eXrZEuoDRnwq91rgt6QzmKa5tEEAFm7ZdTJfgDAiF9EB1bXVfZnNdxhkDDZAruKbG6ppxJimewmUTGcVTQ",
  "key42": "LVdFodSWE5ZwNrWaRGgiN4EqaVQotHMUA81dHQ6SPvXq7jBiVrkBz6zpKXnPMLdMt8NpW1946Y66kgpnPi2k6Pk",
  "key43": "5ZV9AMT1ZHVba5W19PgkChV4q66sagjayyYQTf88sfi2wYXu6dgvjrX6hcc5z9wNGiuWj6M74fLhXC5E6zReKHhC",
  "key44": "27Chk3wSt55KuSmPM9iUKAEQugbefEDae4bwWwiM2BDJpLjRb4NuYCH7mh2j4TDM2Gk31GPhj9gYX2XGX3B14SFr",
  "key45": "55GZy7gu3iNKtguaj7D9b9NLGxWopPBz7wdh3sL6VaHFX8kWrwVUVk8PbSGTbm1oA5z6eD2wLwGipHCN1bVb7BeE",
  "key46": "2bds7nHsYzDvaP7i8aru3NacnQuFEFfstKrui44QjocMn8WpjHTZcjXcM3JGhsktPLkFLewpYJcduBn2Fudqztwo",
  "key47": "33avoTmTPq14utRBrz5DmLUH6vLPEbYFuKtZrFaVsXPVEAVhcEDYDY8Z68E1dUr36tA6Z9X3Yb56pKi7GtgXPWhU",
  "key48": "5fjNpKBgDLQZ5Fvkc7mp3aQxFRUAG7wakyM1qEisxpVfhZgSsrEF3SLhxNZ9C93Sq4bYbDqjTUgcGGRFBZwuFCsf",
  "key49": "3GvTMFENXRxrqg22CCct4ja3upXABUrZiLHxnaGMD8NJmQYi3ezTDhS1oczP4KQB9j7xeczVgtF9yx61sFZPscry"
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
