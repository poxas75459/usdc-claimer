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
    "5nQ5aUCacVgzYfTJniCLWMxju4wTMaeX3pjhbiUNmLyHY8E4riNiqDzvfg28e6JiCaZnh3c3RVz1XcPXs7rUJnUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ct9o7EwGAGvMfN3LVvZ5RVcxCXmyHUhCfnWNdqHq4nuKbZhuRjHMVme45LM3L4breRnaHMhgrxnjqdcvzNkLfRA",
  "key1": "jNTH1mW15n2ShbX1dHC7Xzy8o3x2iKCGLSFD3WnjVHxCaMarpq1tdbemrQmV6aAh3bGhKcwYNqocukp5PWLrtF1",
  "key2": "5svsum4tEGipAQwK1tmDxTACZk3Sg6tVG8j5oGvptg3bd6R7WPy1CgNbZXaL9Di7mZGPBLa6LK1kFmhMgCKVoMpQ",
  "key3": "5rywLKJhEeeCZtmYYHmsjad8CHw5HtfZRvjhfNNGWRUqP15Ci4Soo7qHNGE2VHkvAckUaRG8ruqESgEH2uTJtTJA",
  "key4": "5iTVAQj8pPJyhtmSDP22RbibpiAq3BBy8mm8PiBTvzBcTUh8YJaTrRdgLJNgqj6G4qCFBCUMUffCzwaZ1W81cESP",
  "key5": "4Ky8rcKcn3NNurViewcqVuSJcYYWUikTACbwPNr3wrnPe3LqpZBoy3DFyRZgV64CfdRynxqrq6vnkQfTWHBYCMPo",
  "key6": "gEvDcq3kgPMg2hAPcxvK7sBMhJP4WBjtS4BR4XYrZdLW7iFu281NkuNyDx1p6TFHh7XWjaSR4BHWwXzF1ENmpNo",
  "key7": "Rd2JYBaXJd1s9LvQ4DrK2ZA1M3KfdvrAc3kPng1aRVA1yzRZYZVekdiMLr9zQXP5T5BWcBYz8HQS424pqGUhFPX",
  "key8": "4jR2Me7NRcX46dZwL67tRrusdrWtmJKZs62RhVrXyTmPWwqEAaNAvGeEQkqQsZ5D3r2jXD2AM9ajwErQ4SJb68Bn",
  "key9": "23wZv9i5PyUppmz6b55LfwkhgwiKV2cYWhUjcBEuU6XiM4FrS1ycwqtG9grvEo62uGoK1eimAq32G3yD8DjQ9jpf",
  "key10": "4BwEsnzdv5xPSDKSvoHXbVPCvNUkjoSGTgRQ3Ahvj1bAtCbc4ZFYfPu5EMoGScWCgwuj1uiCVxmXAMszT33GTd4k",
  "key11": "4P94PcDSNgGSYDMewYx6CttKNkKpu5U7ziLimRSAnszcydTcASRro4nnjrMHEqMdXqNfGD7zWwXycf4gutmH41fb",
  "key12": "4rfZawiqk1FTXd4TPYnkUJ5yuyfXK3QyTBgXe89tya9b3fyorJAaSXWAATBQwhLj9cWxj5aZEQLFvUjRumnzKH8e",
  "key13": "38pUzRXP3xe8qBN6hSP6RfyCNzonWFgTVeYScSErPMhZexfDjX9DKpygSzuMoWbwAWzaxMPuzBbuQcvBgJiS67Ht",
  "key14": "Emq1uLR2yfMRMYJpexfptwoHtakujXaMQjE6Wk55qZZQKUWw8HkW8tFzEj1AD3eHTLc23Fj1oFazpCeeyHKew2d",
  "key15": "4kuJY6LXRj6jBpNbHpUaPRvrGp3gebFhXm9iaLp5R11DTVUpnzeqb6tgyQNxi4AqSfn1gEdtk2ZSr3AuTJabd8pa",
  "key16": "4NsBfGPatwukdfjyNFMdyQwwpFUTPWMa6eiwaYCfJhQPu7SGfAG5MZqDGWMoMCFvLBeEHnHpoJ5WooxjdUhFfFyy",
  "key17": "4pxXLLxxYnEq1okcAnMhpQxLrV1TTn212yjNJpvyjr7nNSPGQ1282g1uT2FkvKVWcmUgQimjEGAb5a64wj2wXbC1",
  "key18": "4JVYnB2uBNgsQvEzXEqTdGrZXGsKmcq5PBiLokCmXVYDjxqoEz3UrZBXuQUeP96K5zEJB9M7N6YYj5Z9sMTZBkqP",
  "key19": "2RCiK6tiD4y98oJYrJFGzp53VBV3Xdi8LcRDv1BV9z4smrJwKd5BHLEvtg66qnuvBcA232D6uVG8FCHYzFLDJ1ya",
  "key20": "2EBq7K1XtYfU5JpdCmHtDFg16gfeUshMtVjVqEtHh6WeZxspXgXqNRA3F9mKqQD6emfdUzyDGwxo17cSG4fCLhfX",
  "key21": "3KSjdg4s2cnX6qL2rruWNbWTe2B4dC2sySibJPmXn6JJ9rBj94Jy2h9L9o1MZR66meUHBEKdfs3KVrK1whJpAs7J",
  "key22": "4fuUvKpfGGw1KiiU46qbtoffmBvdG13YHPFSKEDiAyudHm6KC6oy3om6B2qEo7vSjvV1E8NX5WwtPJ7WEf31cCHe",
  "key23": "kz9nJEW2PT5zYGNq3od99htXNTPpCoTcX31BF4Xxzm3AqUnQ5YDVGt5pYmodBJundvqqu2tdG3FCyaBP2Uh2at9",
  "key24": "4FAKFNR48Kafrdn8b5xUAXnFfYzeoeJ5zs6FvqJwaEhMdxvqx5kqSzecXhuEW7uhc8fu4g4HgWeMXN8Lm76g9DUm",
  "key25": "5Ae3TEv5WNdcUM5VsyHdpriDdP5sqReDovndtC7PiCd6SoDUg8uAx6XXSPFPtVy4b4mmvioLPsUxe8QFP3MzuKYC",
  "key26": "xNrRC8L1eyferHeCWWrqnwXtjqahzLmbPkKLGT9oKXLHx35MzTKq6ayejWxkDKt6FndJQBbrpWBdA1VrksdeP7k",
  "key27": "2VUhJdDjULN4gVUdZukmusPSswpHPrK5hnzGN18WphgoeZQy7jfhYTyrvbEVaaqDST6ng5fSbjvfA7sSxTcSMsSe",
  "key28": "4pJWH8qL5MVrayURH8ydcZ4ssQ2DUKA2Fpm8FResiAiVgGJ5K4Ugj5ayE3g1ZRCpA9gmYquHiRkSpjTLgY1gKeCP",
  "key29": "THR44JfWXTcFkqz8gxZgRBL7PAdunQcCUn6Tmgipioun5GDphH5W7YdRFEaiwoVJMTHocqGP75kcVzzVjchF8AU",
  "key30": "XkLNyKusvKX7Sp4g89TE5HugVsCMoFBTzCfeMTwwm5KzNUbTNYK7ky3NUEuqtY1FRoi1nXBQRkxhM8NK7WrKQDV",
  "key31": "GAUxFugEKf37MAxymVqUDPnyYh32TnDEA2kxepRnLWRCCapmbUsHsSX5bymfizmosiUFzUoopYduaZzLAXBWF1c",
  "key32": "3mAY96xS4TML1Z57f3w8eREyDnnGwUcxUScvUyC3JXCb6Rr3tXZt8qqK8FmLF6wytqVHEMnfFXECJt5NoGwfz4qv",
  "key33": "2qtfjJWX5NNUR3GX1M1A7oB36beus7ouYoJquLp4douikxhvXhWhkEZxXabu1xYzyT156EgpzfX6H7FdUmyrtbn3",
  "key34": "4osPTrzUBkMgVZXU4sgLL7dbohxxaVMvEpAs2ar7wcP7eR4pXewDQn8ryDnVyszN2VwwWFFdMgzyPTmrTpFnXZux",
  "key35": "3QA1D266PjU5o9HAe8jdubUPWsGfhkKwjVpxVGB6TCQqxVRSvdoXdKRioV7o38ZKEKKdASkLP1x7y4uNGmfMtQLb",
  "key36": "3cbDfrnA3uiUBqx6hSrCtYsb4XBCbznCqstrHNaWDCmEEQN2SgdFhcvkmTmRs8HNaJwi9BgMc3UKBtK3ymCLVrut",
  "key37": "56iMhNVfXeVFkU8BPARNGTLXFYAUwcKQ8aR2iSKyTa4iwne6NHuB78y5m4HYg7XpxFGASKWxtaGkTiYCmwDoRp4R",
  "key38": "2SrATQdbRXLBoYWVoxU9Bdp6t84yZEQdwvfzC3pUjCFSFN7wmaXJLxJcwP9x8ahUyZKG7U9E9uTm613i7uqRVEDB"
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
