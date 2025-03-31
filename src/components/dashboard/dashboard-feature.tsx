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
    "3PbmHBTSKKjyZzE7rwshLWfprFuVVDFRdq4ciFy7JUCr1Va3whX5mDLJ8LG2G3SDonLUXUoMmEYhqjQgM187o6vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwqo4PYGyaCfymmdg9NvVUdnQmcR4Jxnfygp8Cv36P5QXzYWxLxNuPYBGuTZoTfsTkiT7rgZHfy2GEm2K2jPdhF",
  "key1": "5QuuCwRb5vuTs5fYJetrU4XrbCHHMMTMFDQYq7WoM7reAizaiCTL8yciPa1itG8yjoGXTBDccdtwBzhjPVpvqgYV",
  "key2": "aXbyBfG8VAFs2psubrxmWrjikWWhqcoUz7R7gxjESy1TihWR1rdXHwo17bp3ZM54X51Y8KHkuUaL2TKnUxDY1C4",
  "key3": "5zbzoHLqZ616vHnd7u9gf8GaZbGDnDJDXkrfk8no8bHF8i3DmrKtUCSKoidjM3zBkuSZ9naDrgZSPuD8M7d2e5Nb",
  "key4": "4abJyq8x6NfMpK93XQvv8nAQfyZmAMgx8Y8iaSiAHARLDMFPuBhvL6cyfpKjP8DAoYg4VFTUDoXCP8dr5Fr1aJQr",
  "key5": "3yEozF2XLRnt6XxLZ2YTntYyBmR6GCgnFQ7EQCd7yh2XEp4m9SgNRwkgVcftu6cfFmvwnDvgfrSLiVzbwKfDJioF",
  "key6": "5oT5mUXXeQFMz9LHPQ1u2B5adAmutMFnsK5uvwh8hSmTAFP752NxwBZVGS7qQaSuJUDg1vbCeLfcG8FNCjXFPHdw",
  "key7": "G4uWLMhqMXHG8Pzgs3EG3oPoH8pAzTyZfU5uYP1TKMpobff5Md4QQ2Zz1xLGkS4jgLtbD4czkyaffDRGaeaNtqi",
  "key8": "3UwBU7HGVtRKdswA6Vpu74Cksr1byDyotCbW8E6LBvKUKa7Ys1ZBhTF5ihHmy28fjYiBxYLxxBEn84iagbuGkuJ1",
  "key9": "4ic8ApRvbMXVLHpJ44odXzcSMz9Y1MaREuLgvdCnh7WQy6EqtspUToiL5xQBkLDxAxxZfgxPpEZWfpnHN92puVmP",
  "key10": "Pok4BRNqQ1Fqugrk81asafGJPmBGf3FHR4P8QSo1zVpafpWss9NkG22KMU8vajCDaz2TppeUfot4gUU274J3agk",
  "key11": "4gt861X7rp7Nbsx7M6eeZK7bi7PfKzLAHMxekvRzXu8m6ZSvekcFpXstg6L99rq14dSe6u8eqUQKCyYHXMhc9HHT",
  "key12": "4QHgLo46NzDRNFaaLp1Upb1NAxNZ6ZBkHs7BPXTHN5T9tNbwEPxvY8CSszymBo57zUKLuAs2etu1VHviZUHbk8zM",
  "key13": "2biLLV7wFzioWxu5wEv6Vpj6npSWP93i9abZqDjsuFPb98c9J121VUUKa3HK66DNg9MMWoceMXVxupiceE9PLE86",
  "key14": "3RNvbFYJuSjosAA6stfdCe2a99pSJVjqRar4wh5wc4Fq9MZDFvvjF289YMnptvoi91ZrKRs6gJdDnLDjyV1keDeJ",
  "key15": "5nK2VxiwD24dcrg7Yh5a2jhk5eTqtBp5XGQovEXwGbqAFtGUVZ2uHv7wbDjTR6EHKKTYMMFbE8hVWAQcYVsmvcKW",
  "key16": "4ks9iTjFEFVRtX3E6XcZRd5stVpUgpvJFjaHn4SeHFW4CtSq1vY1ZwY6cdrQu8hZ2cjsq2wvUgJQ3QDGp1yDk4cU",
  "key17": "32Gh85D43TqgXaUQrSZYWbJW5Uj2qsTENF4nk5Kt78zmyNrNSYMtLeeRqEBj2Sx6iudrimSEmPorCDTyUPkgJB5B",
  "key18": "5a6iGSPNPgt5J5zWTG3yzuTXv53XhPeY9zUaoFYzkyHH2n91pxx1fLXpPmtK2JEDSCUKhX3aq1GPRLSjZcTJdMjq",
  "key19": "62JDUQjZCdCcY1Vk1Uobjzd7LPbsuaJXofC5wSJYWkf1LSBmt77pVpQ6ah3zKv5gSZiA8ZGmTJETbNJm7XY6WoSg",
  "key20": "FpLU9Tj166HhnrbXsMNCAK6mmznGh6tZbpDC5iouHuVKyMtrJNoFFjYbHEo7WbD297JcRAYffVgTKxzfjRHPwZE",
  "key21": "3fArvLdqdESKiTmxyVhrNom3cwi1FKSuhRuBgbSLtJ2TNhCyqbf75CP9GcMzEwzivwPRcJeGwcizV4pgXqLVaFJX",
  "key22": "5hbS8urELTuhiZ9tSgypk6FBHNjfU56Pkm9ciyccTb3BacV9YmtWamvif1bPyisS35NGCkpaEXto69ZkYQ6f1Erp",
  "key23": "HdgoGSBSvu1eqvbVYaibYcHg2bG4LM4Arvvy9PiANywRtLRamiDBTEswBezmFNQFyPN27NjwAQhVYH2VM45E9BL",
  "key24": "5qUzQHJ2aeUcYzScT7MKCMWqTqypeazhYwUWVChVNMCB24Mm1C2fR2v8YstU6nzek16TADT3LCQH948dWeGngGc7",
  "key25": "3yarWa73EDuL6PWsuhFp8LpZpKkjbPYoTiSre4yWHe2gyzgDSEaLetD7SJP5vahC4RmwZ6rTM7Y3nqr9nkddpASP",
  "key26": "61XTQQerkmcdZkBnYEgXZkmFxc8ktZU3325vFscKhLHQHeUTk6E7mQ9dBTbh4sb1B91rpdJAL2omZK11jkwLJmr9",
  "key27": "36uSDT7aJafhEy684EPKYjY9CKT39WdsocVof3d3u5Csah6YbZNSwjSQ4cwCuAQW4sBgwqxDDgKjzAjmXsjRj5oy",
  "key28": "2eZU6sQQYCGSAVxdqj8HVeCRCkK5RXEPYBCJj9NpuuD3ksR1bmTe3A4FucAt7hmFjqB79VigaGDjt2hvhJeoF7Z7",
  "key29": "raD3wXk3bw6zSqxN5KKuxZYu2ruQW8yngoFHY5vWLRwqJJBKi1ZCmLVQuk6Dyv5MUETG3E37kJjcwcdZMP5hM5S",
  "key30": "31z3fKt9oqUsSWjtgCs82C3XHFa56V9x3H717kPNckbGjWfj1DTu9nexkHgra8bPgzZNwKbSgn6zsfpS5zUhse35",
  "key31": "44XeA2CN9bYSXvpav4Ai7wAw53tvJX4JEEcHB4cLb5LMdYddR3ch1eqxqzokKEoxSd47Honu1njeVccFwJR7zKUJ",
  "key32": "21JcmU8tk5M7R6qsmWvticmkX5dvKuzBrWsQhWCaoWzp9X91mDwK4oz1ZjSXmYTvRcRHwhzz6WtBWqR5ZPpFW6zA",
  "key33": "5Y4b8KKb9713qEN5V5WGTsozGM8TAk4uYdj1Vxz9H7cH4n3dZpG2F5AqaTatZnajVbmQHVnttUNRJnzebdap8pcv",
  "key34": "5HpNWfPmTBVmZfvGzbwVJeQts1dQxpxVSy3jGLsfpRTDdZSd9Myb8is5YSeDbXxZodc2ki6UQZyBZKtsm5DV8ScM",
  "key35": "452se23d55KESyrJLUHvR8Rsx2sZfTtocmQNo8DuRmwN14qGYTeo9zbogaK7Y8CC3gHSKM7YvDCbfD87znY9PYQ1",
  "key36": "5ihVgPx7QQxKyMGUKoaf2dEoNz2jff2Xp9nUKKsf9LhHyUPagGjhAx8VnPiSNJe3vTKMGapjWk3zDx3gQRLWSES5",
  "key37": "4u9cb3EJq5ne5N3aybxKMuNoM89atcmGHkmMHmkWZ75jW3FRdbxy8HRyhuWqH9MP4CR2wvxtaQfHkdX1uvpepi7D",
  "key38": "4XCmT9D5VBxLUp7am55iootBmzA4GkWXfqnhVwjKeRm6jm3KRsUeZVw7V24jsMgXevHCAUtdQZNnbvKSYXHWdC3j",
  "key39": "2BmMf4HwF259V4Krsy32W3cMouUPhg1xqSrJzFUBnwk8hKEM2cVAuisVv6JRqERmobhy8MkQMRu8RALJrArmmXqE",
  "key40": "4gBMrLVtXgy8b4RuyphgpaTMxn5b6y1BxozsspDWLQfkyFRkHT4qdMhgT3fRXRSD3QSm35hN79CDUjXbzzLiss78",
  "key41": "iiCCmMhaeELAi69mzJX1FiDF1mF8ckPQbaLrxbRM4WZgJ6n8KwBSjhybuuSPyQy5qKjMwQq5zV7JtK2d7iTfMNG",
  "key42": "NSBLqyXvTgzSP12pUAqTKpkExEc7omyMSPqxc5jSPgYZhoWyrwweicuN5wVjVKDf6uZm5hC8ZEzGY4GU7w4WYiw",
  "key43": "22simjggmMDtBqVuQB9r6hyp3bsswrDnWgGhnn9Nyh6X1LjB8BUBnfemsipULpVDWKAQA1P5YWGR1vyQG4ABqigo"
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
