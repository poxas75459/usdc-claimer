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
    "9H5wk9smQPULVmSSFJmPgtjXxdR36tAFLspfhM8EKZfsgVds3fYY19uVbaZkoh9NtDrdQqnqedTdAStdSmsvVbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQeRdVDKGqiFd7zNE2mnbQNdp4J4CPykp8cAz1btKFhh4i3caoQp2ythBMzkFimJ2w86EYmK2ZyJSWrw3pagdF7",
  "key1": "2rMk8ZRB6RdLKzdwZuzXECM4Bqo1TWRxGrnmaCrKLBFgGyjmzN89FmiTUFXZkpWqbC4NBuvMi6CcCwcpYQcm68Dq",
  "key2": "4zg9SWfXsV1DaFKRdZQovYh8fMsDArDtwsgahAmZR6sU89mawnzAEeiPhsgPjS6PF4hcV7avzUjrK6oEWTFFFTXn",
  "key3": "4RD2JqSWD5i7pYNV726ZsmA8CZ64c6WojriNT2Cqq7UdoLhX4my8to5ti2Q23d6RGuJhfsQ71CvYe3qF4nz3dxcN",
  "key4": "37TGhGe47ePjx3Ngjzb45uptkYwQ3kructj7yowJu2JGcp6d6h7cjpg6Uynx8p7JEAYEoaHgQLLuHFCbW2GDdZ4q",
  "key5": "4urobabaGmu7oZjCuKgnc5ZUZrK34akEhSdQbHB3KkpWjzCHSGMi3DSK8nu6HnCGFQo7HzgcrMypQzUNfPAsHwnc",
  "key6": "5f8ciFend8emoPQsTnWjvgcV6yp66fEiLXMc2W7h3Y1QF3g2rUvm9KTHgAseiHwsXthiyvRWLhFvWujnYWnfFHZV",
  "key7": "2Y7oKczvcBsGCZX4r6CLAFco54q17mnoKHtqRaPbhuJZfHfJBUTKhSGDwURUb2pLvXN1i89YzHpRJX8DzmdRMBC9",
  "key8": "4dGpr8nPJGJ41zyJaipAmMbUHpLjtUZtdLd69LZEfgifikFQL7kGFozQYHyPGSbVVekFJNDoGW2RMhnLzU89GjqW",
  "key9": "2iCaPvR79j8iA4Z79LeN22juRnhPtABr7ZU1jFoKkEFLDYikjyUj6GHzvo9bL7wZo5mSZXAkRCLkp65sUWgWE4No",
  "key10": "3pcme6JtTPW9f7vpehUZTsucqPhUK2uJ467DmSuJ8mPXCQraYPRLL9fDHGiYGCaTRB6VReTJhzbiaFHG1TGAYr1p",
  "key11": "nwRWe6tb4GaxJAM9xHjv2phuEugqa3cxh1z6jA5RXUQx3NK9bMnYonYpCkm7hsPLSziGWmJXmwMhi7bW4AKwSih",
  "key12": "mLRfoNcbSPHFRxT3tcHtPyXjtgESDPzrLcDjkcHgJ4VQwrD7198bhaitEaB95Km2zYYzG4ekJWKemwgCjh9ecaZ",
  "key13": "5QQKxNnWUNLba29JrLHYbZArot5N4Zp6pVfrzh4y9P7UAigBGQiFPvs9LUXZTb3mvQ2nX1UVNr3wCQaHDaXYzmP",
  "key14": "2s6seyhULXtjKnBaYR313bnS6djz9TgUAMNEYTQfsMA444B1XHp4QgM34FypndKNaGvTDFemiVk1qJ74sP4sb5dH",
  "key15": "29A495CZK5LuEqCSYi1tkrHNy2Q8yomMGiwJp62n6DJbnsyZxRcc1dAQcwL3JCveU6BS7Jne7Y5iCbVZ9Juss4EW",
  "key16": "5ug4v7cdZCLknS7RpPJymMaRSfKWerMXKM5rE3YBQWNR9iURturiY4UnCJ1UDuoVfUmY3fN3q9hvh5t7J13USpub",
  "key17": "5mCuha97tPFWvJjd13zuuzmL3MzuWRr5ACikobP16dy6UrrbB367kMoGk8m8krdVktx3d8R5rz3VmW8wZ1Hm6MaE",
  "key18": "3fWf1qoZg4gpXXi652MVgMFNLZ8N72PuAYqD5tHzPjFZX4KsxcoF6m5HPvH2SvmA42UV8Yu6SHTSrHinTKUqLw7c",
  "key19": "58UCx3FJjxJZE74s5tBuC5p2VkdCbxdUYdqfpY1G7HDkvQ6TeGgG8FW8XxVo1R7igYhtQxDyPFJDJCtQZk3APdgL",
  "key20": "2KCkqZWhPyUBsfrR9SAoZHmcGEEA3gs3ChB3taNzcH2K5n7TV8mdPUJySZJ89UVrtfJjqQnvmgFUBSYy83JTsxdu",
  "key21": "TNvx4VaqFWqrXMgWydgeyzfZsbwWX4Ju7HRWUziksfbVDNDfzRunXtGyxZCXAYHUGJ6MKEd5mDHoEjPCn4qnQiv",
  "key22": "B1T6zbLxo2mX1g2gzfNYVJaLPYFvN5yAM6fZRGyDSJoedSzM81hpdeiSUtkfSsANRFQWrCfxTRF1dqWnLMUgRyn",
  "key23": "5bS2KBt281LdS4HMnZ6Rgc1JZHs3k6bcpYJAeDwV16qNP4NrNwSWMekLZn85wb2HWRtgeCEiVmBkBBMp6BRgiu2P",
  "key24": "47cCNPjw7MXWLSqn6RTTdP55BeVKqLpSjpFp21874SvSYA69rg3ZirdZychHdcvRabm6by5u5YDdeHqF2Dbetzm6",
  "key25": "4Z7pff6WLiquaFDqhN72rGLYRFFiaNmtviPTDUGJXcm3DiR8DBctbM8VmStDGxfoa5qWdfuTtdgkWttHjMBtsX9r",
  "key26": "4VpFAbZxxSRuZ24PYq2fLLTCLguDGCcPjxVkUaUq5cTYGRdvef3mXRdFFwid5hjuyHVhQCyzitLSU83ask7bVJh5",
  "key27": "naGL8ZcUVBaocyhLCKukg1dQHiJFW22mMKgzMimTDLozaCmAURp8GxDAkTFoL9DRoucJdKA4sySBZDVj9argE8W",
  "key28": "32mJmvBFG3gkULRzLYVCo55uPV92qYxdCMJDsXAqYP83Ka5yeT9w7z5oC1FjzjWXcoPBWM6z3UkLacwukXUzRHT1",
  "key29": "4DYvnvhDBHeqBGhqJZSfZ7pAJgc8D1MRYVFbnVnCmf6NPyLC6fCiNKozooGnTptYPSJ8CxjD8EF7FsREFRJuk36m",
  "key30": "4Px2D2XwPJ1vTTWJR4Xap62oiW8pvKAzTBGTPwajQDqY8Dgu935qvrXzmZtxY5zuQh2UHe65eGjtYYfhHMA4WSST",
  "key31": "2TQJm2s2AnL8vSXHUNH6t1wq25svzvCHWSoAx4sxr6fSnYpjQDdd8XNbyXfJFchjyFeaxLR77BTL915KDcFojjhp",
  "key32": "cebvXdkEWKnByoSiBEc11SNN4qdX5P1xHXU4bSRcvmQ9YEpkQLhedC9HD659auGbUXfuMNarhuaSX8scfHwZEEa",
  "key33": "23wcV9pC4L4cjWqQSyXBb315EBWbo99BrKPL1L1d3qLoUavEzhGhSSqZd3GZSoGkmRSc8izm3WDDBvQmR22GQwfk",
  "key34": "33DRwe1r1abWzavhW6iVc73oRqbTbCmAYhrgieXqAbmSHrpBy8EyinFAmNoWGbRtJR12AxKDFKtmxB4Jn8TKgXf8",
  "key35": "3nEiW7e1B7tbduCopJMuY48vrMVee9p6GkRMuz2kmgW5EsgDjJETEz5r7vztPNoxtDDKE15FPdEwLWMCgSSz29kZ",
  "key36": "YqxBjo5m1niQn6T6rCc6qY49PcERvN427MDLRP8xzS19W2hTMfFUVZnf5HP5UWD8cg5XGXFneEXCasst2HHqwxj",
  "key37": "4N2FZrnQdaXzahCAkWaAdAA7xCx4nyGDpTF4XJpmAmcV8PHvwgbF5ytqCXz2gKguBy7gnn6gHvz6YLC7zEL9AGUD",
  "key38": "3GCDHBDvSSeA3LEEmaJ7ab2XL2R8X32Q9G84vVhC6WBC4xwBgj2qQ8cnEXM7YiNn88ii95rsywWya5LuRgk9tng7",
  "key39": "4ZsDGsThF9hDkGou56TysHNbRMmpMtZQKC5hNg8i3ZoeeYGs51yqskv55ZFAfbWikhUNiBLKDnZyukFPkBZLCSuu",
  "key40": "2pFmRQsbNcmd9TjZdmvyUr1mcA47qHzZhSFWRef22yvj5LjX5ZRPDCFVtiG4BNSm4PaA5gwub3zQMfHuwhdVnBkh",
  "key41": "5XdeynK83sRhJxyqpfVW963oBUzN5FCE4LdBmBdvUsEQosbeRWEQNtSJjbbt4PHAcRiwfNwvtxCa5vRjygAWXwa5"
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
