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
    "5PfDzcJNuiMHaRnR6VR7hnLrqGa93zoaqgVhhYGhmmTHCZvUeMJfYt6hPmaonYXNJank1darULhF4qMyUhB8adaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLmMoYzmmgGeA83pWx3bTU7Tv7pr4RqVzNs5uJS45WkLBoi7NXhyW15tqKmtuipWa73tyK5cQ9FiqY4mHa9pbP8",
  "key1": "26bHeYPG8NDfKcXx43WWofbFmUwt4ViBoYBKwDZkeWYvQQHrnTDE548x3a6e2V5zGLWoVAXVm2nfbZ2fck5nhX1R",
  "key2": "3FBGfhJBJZ5rPSfb9PJ4dsJhrZ3adto3KnpJTSJHaSqX1CVFhBSXXjh21HqyFEUvsQkDwL7yS3k9JzaD2pmLt5Wo",
  "key3": "3vZ26KcqZBz8vYaYX6RCAM6uC5opuGiRMuAaVuovH9NgJhXUJJGL1UFWxT3BqWT472UwR5iV9wY63Dw5zcdKf45L",
  "key4": "qAQ9QDRHr2tRXZa5g4GLtiqyRRMi5mYcH8t8GwuB9KdYEVRHFcTYy9DQFbBSVysQ5K2PFXa7mEJiisMZx6knAo2",
  "key5": "2fQafPhtgvig1XiWNxxxfgCkX3KYZ1Npa7YxYz5S5eePyexc9GrDeqtavs8WDzXrrTBsUF1okfCWYFCwVH2KSQCS",
  "key6": "4AuAuYA3qCkJDd9t1Q3LHPA7rmD74LesWHo4mcT25FPBEK3fTmSsdPfc3ApH2pByvpgpMKmccGDNwjoFbMMaYJyF",
  "key7": "3mSUh169HvE5AZLTavWsLR2dhJKAkps5ERSnP5bnxzPN9V7wCdEZWoAN25w5uPEvhHn4rLxG1Ewy8wZjwrwX8y5w",
  "key8": "5fsKHuk26aWka44qu1GzXMDwPSMKt3L1MvBgfvZnnZM3fg9U9bm2YV3rLJV4paos1hP3ytJUf6PsLpdkFkgjZzVW",
  "key9": "BERAksXr82wmAEvb9awVE3y6ZiXs4raKZg3ccSjZxLhbaaBP5FcPnvdzypywvRfQzGBXDUxUb8pWYFCh4xuy7eu",
  "key10": "42B336jVsRejUZ4F95PPpgE2mTtmcKNDp9DRzwXMkXnQebCe7LFpMAj31nAkJqNn4DXKFH1v7mEEKn9i8mmjzKbc",
  "key11": "4JcLdC8TgNpsCErX9BH2W3XGUUu3dPZpzU4zhkk7moubkEHTLQ9QCimuPnzNTsytD9pmPW9L6uyxkAcayWrQwQu6",
  "key12": "3kmmpZfYmRHXa6yoR8j2Ppdw93CDLws6MGGxDoaS2ufcES2hK8tHnfppN2tBoSHngTekvTvYudM3KCapFysFX6nU",
  "key13": "Cu7BErTi9qKnGgF5z9i7JrgPJmQxME5xT9mqEo3TaEuNP8acKPxZjmigPeYtmnsAqaDQ3weDLxEuco3GhqE94cZ",
  "key14": "4MNuNCes2Dne3znNqpcpAPfnAsKbi58ksrch5EFhGJS9CqamTvBbRUR1Ndb4aKmWoCLzHGcH3YwP6mPWPeJ9J7St",
  "key15": "5naDmf18uBZmdNJgmZdJbv3Ck3Hi83FwiJ4LPPS8RjBV6FHtNGn95YoLoUaUJMCY1fdwSmrQPEXtwidhL6qHTmi8",
  "key16": "3rWFgmeWoZXB3UtJp7wyd2FmSn729GnXBvyHpKeLfzqDQy7g6eKpb7ktntUQvuvEKNShSk1sd3CM9kMyQCxyKUdW",
  "key17": "4iGbcGb9XeSaFQTH73kt8tG72DcLDttQkvoqEuAmMY3rx2g15im7bjUMoi6ecQ5ArnzHDBiSjoD7ySyvtw8NWKPM",
  "key18": "5oDRGaJVKWBdX1f6aXP7rLeSaAc9NdRWQnj5CdXSDbEEmSuhoks7uCRyABXW73wivFBfBhgJdqnLVXSmd9NDzmu2",
  "key19": "4TWHisLos8E33MZVexUAeVCZhGD2jvphzX6a8UL3vnWu8DumKD1oVrp6jRRYAQsjVvCY3daKVdvTC48mniY4rQRq",
  "key20": "5dCHkM9Z2YeT1xxUpoaPkBrY95FauH4f2gL7GyTGWPZ44Hr4rKdH6keaE6UYNpeWveK9WWQDKcsbJQCLib83A6Rt",
  "key21": "RAdkMHiWzAWyBgEcRDB1ViSeL5npiVXJ7Md1sW34oS8Ay5aSsQiA5aDDbRmihWxEZBKWBnmjLPQMi6X74ZUavtQ",
  "key22": "rtpQ82X22JeGCAXHnAp8PCY6gDnMdwMmcMdejdzH5JTg1APHDB5R5v7A4f2vZs4H66k46AiohRgcrXckPMwNHSD",
  "key23": "5C4EFPbZQrNWTCbPTQKSzn8gQeJqbMhGzkgnBAkjqGdW3WVtFW6V5P4sDPsi8JxHaz5JRfqC4yHmhcWanEL4R46R",
  "key24": "38Fy8FEJQvn2WMwjz3vb5ym3TwHiW9pPtvKCoScHNVUv7K3Da9pt9CjKNrxXxtUDJZ63rMugfCUQU6zx7To5keqk",
  "key25": "62Z25n5F9d4JFTohffj2wPCGH11o91HX7KDCeuqBJ6maZbynKk2HRagu7624DqAEccUcNu5n4TSi2ReW3eD6uKCC",
  "key26": "3HPkdWMHCuFvWVJQGEusLsbqrdd2zmJaR2gLBPDdyPHjicdUiyN8aPTCHQszCNFeeym5GUVsa6hKPpw2gYa9KdNs",
  "key27": "3RAq2r2T7uTUz2EvfonAdXnWSPJFbwh475p7B8qBwn1eAbqqstHzXdzWzH93Y9TKMW8eeJ3xjJz2eDhfqHxAX32c",
  "key28": "3P5gKm5nFzovZWtNCqBG7LAT8Taa1ZWxunDXhs3L3xDfjamWLU6rfX7FusmQGsrhryeviSXDk5btksAiZZ8Dof1w",
  "key29": "nm7HAoh8BVEv2uMue42pLkqaz8oT76u62mQSrTHxEzfE3LEz3pSWveK6wquMFTQ8MWBczDDL4a525DyiN95Rf9G",
  "key30": "5KUS81XUngZHqTKSuY9qjFD2owxuHF6FVHQ9sHp5YxqRBXhJApDjd79JATTfkmR6Dpzo7WKeXRNAGtB2cFk2NquL",
  "key31": "5TeVaxBixw6Sww7ozBN7CsSWogp8sicTho2zQVujDfMAZCXBc1mdv4SUk1U6ryoFabpL4ntMVLQdTbGbT846EQJZ",
  "key32": "3Jna8i2Sgr5JjbjZLCct7R8P5L3TSxH7BMs2AwnmdL7R7h5GWktuJ8jKyb6PFbobCCV9pAearUVw7ssfyW9q12FA",
  "key33": "5oXGJhggYNHb6jspMm5BgKenWUtGkB3kZfFcNRpX9Hf9YqTgbUQ9MKyqfiQsnepcj9MSTcuwBfcrD2FC5sj9BkNc",
  "key34": "41ECRc6rRXQMuhxCu3GiHbMRTZzQbwGzxPsVgM76xDBAEbmnFsiDRhpaxBAT1JL2Z1JkYxY1AMLbhXFPJh8xX8z3",
  "key35": "4PFt7khoY6FJheNHiCYzXJHr4ooCTA78gtrBRUvua9me62tkyREroZJDFvNTahmB684rYxzMKag8TEHXTXpGwbn1",
  "key36": "FtSXKsEkkmSXPjrUMbiQUDypjP8Zdd4ZUVUpteycECJZN892ddH63TqnF6kmdPtothcW5u6DSVi7SPSwcj6K9Ph",
  "key37": "62VewjbZZzdcKKJzgHpHvGLamKeGFfYKi6WQUfkmgXwyUQ4mwqu3rE2w8NHmdbX4eQC7s6ceizPhEnB8kRuT6Tc9",
  "key38": "4hQ6YUH1qim44ca4usV2dzsdMowexkfmWqKB5xzHmcLetcKT3kKKc8nkD9CYh9WH11bK7ViXQcVetKwJmTeF3QbF",
  "key39": "4GbHPSCubAn5YuWuXBNhRbSdrCGbx6STHKahie2EiKnp8JnSopFH28uWCwwSE33f4BCbZXQM8nHKUcw7R7yjEvbc",
  "key40": "3YKStomY9cSkdEdWdmBXC8xdkBw7pyUU4hQR43pUj5hZkkgsMCXtC4zoTjaxpmw5goLutTHnxSgXiNt7mecNy2Je",
  "key41": "3K58m1JcUUVsr1WpJ1aW3TboiY8hv8pZmp8L7ebBQNuomoZRneKFjMAAT7BAJ6hAaczaQ2mv7vDUz3hjQBzmS3ge"
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
