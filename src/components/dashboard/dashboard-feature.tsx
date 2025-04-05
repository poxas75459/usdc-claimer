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
    "4dxH657mB1fTAwx7SdjJGTovHKyihDDV5xJNJHCgzsmWMSPRbjgFkChq6xwWyAo1yafAh9pnfc5TnNjxtE5cMASE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJsHsdJS9oQkhboHpwBHCcAcs9U5YCRAqzwSp3MaSj7BLjJFJ2fF32KWFhpwKumoP8cmp4YYQ1Y7se4aTonKFiH",
  "key1": "3Kzqb1jkXx6mNFghxmTLNgrEFmz8FHqbg4iVhcUHBysyYwcndW1RXsPzFMrC6JKMYQdDp5B7ejXzP6sep2SNxcw2",
  "key2": "4YKhfoYCAxag44BHvKRLsUo5P2FYNpiovmzn53zFCHZ5HYxQZxy9BJyxCfGepxsJTydgtgUKDRYp5zy8bMrTi7tH",
  "key3": "2mDNWoJp3XAatM5JgAjExvyHb33jKPkhVuqjir2QNtfaY2CT5e4b5fu3pGwoYLc6f83cfTNCLtjDWAmfZxdGh1Hj",
  "key4": "Rw12zqPusZsytDzT4XCuUuAq13KGBGfovj7yJh9edob6Qv5N5BwqYz6fjHKHCfNDXNESbSf1xa4LrqpVz9sgLMh",
  "key5": "Lv9ztPhynsXCwiV8pxCJZRHa9r6eCJ1kj7ye5bMwuLqhkX1N3EZJQ4aFDRioa8jsvDWsSDeGbc7j2rretFeW2pA",
  "key6": "3W3h6FMVe7MjvzpCLdy4WKeyyzAo3dGvgumkADPxaPAz6EZjsEtQJFTf852vhGikhPWmDa9QBnRDPJ5SvnmPye4m",
  "key7": "5gLRTQSuFcQaYEJChCdiw9cGmP9n5QAZoZvb2BKXoszRwxb7SwVVki2idDY2XuWqzU6cq8pLcJvoMxsqiwuqybDP",
  "key8": "5F49uKz7ieDhNLzshCUM25ViS4MZq9CpDzzT3aVrBgzuARPKNbAb4cfoEzdzYNzxZwQtuEQxGkVZxepRoi6obVwk",
  "key9": "4tEhcpPwrXyemtvjr4DbBADbFbFwWu6bxdy5jaynh6xYsrCVQdsRvz6AEUdUParMREA9muzEpTtrtxwkZ5ZRpX7L",
  "key10": "5ijDnzjpCbSqVX5WmqhVY8Y1WkWQRBPWopmuy3jt2sNvAwYtYkFaGSm8fM4G1GXVXj5xSVhHVS2rzgfvvrmy4QWd",
  "key11": "PPTgJFHJbEDdHx8xxvcQD2UAyRY1LauzPr1HrT6eoGoxJfbs3uh3RDizohDd2Wm4BMcJm8o6ciVwhdaT6yVKCZS",
  "key12": "3rsweJz2EWKNkGCXTY5phLc8wa45rxCZfDUbVdAZCubEFczHgAAqMcLoZ8XMr6kDcAZgU8F3MfcZquyj4riqWzBz",
  "key13": "41wXWguD7QmSjZ3ytJR2dM1T4fzr4dK5W46EMBVxnTKgANhnQ38o4z5njCQqYQy3ukvEQxdiUPHSTkm8g9a1tF32",
  "key14": "2RSNhWB2zz8Dz3dTVWbzxoCK2nsJfg2TfCnzN3TaHfuEuxyetCPcA7wzV4t6aAiggtncgDZCoGQtSfzpobYKQuze",
  "key15": "35RA87E39zmQKPpDJ1fC2dUJeWSbnfZtQvFtfh3fqjSbJHqXetL2dRDqyF16CETjHdtyUJYnWwRbVdvewz5pccXA",
  "key16": "2GqrDCnjoFw8j2xBWCPz5VfE1jeUTanUCHYqUMdtRdBxDCY5EkbJ3nqPs5cvCV8665Rngt64QbkcP97crRD5yoDp",
  "key17": "2UF5zsSRyrs3phw99GbhUNiwtdCjDkNZDV3Aktcvjh86q6hgvWDihLcDgRs9LFBatHfGPuQQJBMDHqKfKwnfDhG3",
  "key18": "2mEz7NCuyWF9UYjB5wSgC32psznDqcLtHzVNVTmqMYGKSvGxjJhWMbqVATkmAgVomf8xdATFuNzJpzVbwFw4H7KB",
  "key19": "8kJS7esfdgRSAZH9LyyP26kSxXku4cRmUXUQAeW2GJTWV43Dde4ncVMcgZUmA6reCskgXPWYQxv2vWw5ySnAQ8A",
  "key20": "4PwPX5PETBZiSbBH82hvgfcrtcmu6L1VnSQ9eLPhfSoAqNyCWMaBVUDAYeK2CECTJkzegQUY482kAGyy83thv2Gb",
  "key21": "4ynTJdms4VZ9jMQU1cCg6rpcfSUQzLw3xGZ4msPFLndW6zpbwn47vsYvfF2CK528iRq4vFxyBV3hzkFCE8Gv2ZhX",
  "key22": "4ojW2L7u7sxmx5LwJtF9C1dKVuA7GmEBNRMbAvQFoRZNcmziuxsGUYtWvoGu2pfYwn3tmQpzZdPcQYeD5EPM55ku",
  "key23": "BUziQiRZunFMjDZPMqyb3E413rhpZLFLeRe8vvxWNotpNcvVm1sa9peoACNLrsg1YcbXSSq9GCZq38w49SbbgmC",
  "key24": "31feYYhAZj29EvjSw3XPb9yf1mcvGcwXivDVwNDMb9V8s434N9iLWxRzG64Q4NFGs8fPW65pMSLTq8dpyNDY7q2Y",
  "key25": "4nVT85p78TRRrh1G8b2fxdUaJ35zyiUcv6pd1Ypz6HrdMPAeWpqiJxedhmtsYHj5RiiJhVCkFTkgbuaTpiQttFXg",
  "key26": "4K2ZS6swrdPYVB1ieeSTgW4cCMDxbz9KP8e8B3iJyFAhpwfeR3YaMEbPstFt5pontPg42HwMvPg12RbqGXeqiDHZ",
  "key27": "4uda4Uy63F6P7XmPsuhKGtJwpResjLJEgAPuk5Xz93TH8YFNA2fYkbm1HGsA9T52KkbXKxJDRLBxKKmaJr6D61tT",
  "key28": "2TEVWCjc2u8qaZbN3Rh19cKLBtHq1fgQnCMRETxSeE9eujRyBU9C8gCxiZTy8wArKFj6TATWr8kNexKMVaHKo8ZC",
  "key29": "f7r2degznLMrmFSX7opE64TVVQngB6P2MRTkpYADzS7pSXxXhUmi3aVEYE2nkxCfbVBqhUJKqLr8zRUFuNBMRKA",
  "key30": "5nZ6odccvQhq15d5EdxGHWB7gjKg7rq3gSMeLsvfYoD3av7ctaYozmeSrfcU4mygxRBMQSumPTRpPV2VMwdk9MyB",
  "key31": "3aJehF6Ad1xv1rzetavPdyMJd38iPNiucjL4KH3iKMLQbYrY7z84ni2jXTQegFgzWCxkRBRn2yg9UgNzKDBLkbxN",
  "key32": "55Bui7eLoopSvZrnY2c9CsL64kJA6PWCriNdNgT2e4czG1XTMeVf48uDWjpuLF7ji8W5qynpbUxAsRMvDYgeaeFS",
  "key33": "2iRLMv5KpEYhtcpHrGShQ3VnTXqBnjdG1JdhgjTzuWw2SUZxFrCdak9UKX6BwuTEDQjBAfVymrUU2T5D6wp9RiyC",
  "key34": "2hKauD2tZQDviYJaqsifZkY6Pig5jiqxp2YR8gyyxjQ9sziV2pUtD2YQdaqPRbrHioYvhBgYohQN1tMFYAHhxwtH",
  "key35": "2SUdV9aPmPrpaK9KgwCTzLgcAb9qubgB19dAaq5Pf1FQJa4YsTMDVAqupmVnviuLAcuMiP8dKHo9vPu2R2wQ4eJu",
  "key36": "42P82MPkUs817mT5Hb1nuZy1XZYb295z9LLZzcfhZGfHibvKFyFLhjzEXRU7nckfepYKbgtvjAHXFrTJpa3Wf5ps",
  "key37": "9EePZpWT6rgqrCHqCTJEiriH2yUv4dYzbMcccrfNUyS1Lup39vETGt9dmxGCy4ooFYWmDGKAoNoSyuKM2eFQzJX",
  "key38": "ESeR35Rkoi63ND5pVMHKPPu6y8hhEwv3gH3KsMFcmyjk4jit254ti4mFhse4eT147abTsTiCM5uXgrt8oUzyRfi",
  "key39": "bG3YNu8uaTYe8upzoHWrZ4HfRhexL3Ux3CxchG2c4vNUpHD14c3cTYrrHC6EViGnEjkrpvsqo57UFSL6HF51cnv",
  "key40": "5r4MveEWerYCLiWGLXMLVDiKQHSM7dd4jN3hKVuWUKju7j152DQ4uv79PjsAXBss5p763pWvwvg6KYFNUvehJ39F",
  "key41": "3L8zkoYfe95rxDHeCdVipA4LAf6sDGFcCYWXBpy1Ce7YMhqJfkkNRkFS36hwdZkUavHzuCd2fxEiSx8rEjCkp8L2",
  "key42": "2WJyxsyF8YFu6aiPhJbC4VNSbXetMzKmfLE8HgnvxACeeNt8Xa5k4zfvpwSu5iBgjGcWduhk9WMc129Phr4RrkD8",
  "key43": "zz7rxT8RiBriTBsSuXn6C7RdmX6Fxp7PsjCRKXBBqncBes16QaLUrJkGe8wrZ3uWec2NRGYpdHX2stFbUA4b92f",
  "key44": "3Q56ibYjQPWHC3LHuSYh8ikvCgdEgtNeN4wVQn8eUg2Cw33qf2Wk4vuiBK3mFrJ2iEby5YDVrh7Y3iGUVPFE44ui",
  "key45": "5Dasbj4zzpEZHwk5EEAMRgrGssyrVKJnVJHpYcNrTSJr78JpQxfT47dXhxCYkqdD2Uedw7d2Kns61qtn6s3en2Jp"
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
