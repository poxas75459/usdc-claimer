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
    "5R2PRq3MwtNxBDFifS2X7mr8qUzLZY73Rwi3y3jp8TqYXjHdTZpHuiRsSUTFdRv1GvNsSDM8sKUVdr9BS9FRc45U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HkLSwXG8TuBeezBDoZKaPcPkuTqvAvFSur5FPLK2VqTAMmvYcPPwyHr6d6JZb4BQAHpk9NPvueKYxswczeyhke5",
  "key1": "51bXvDNk1BZYJvSiYkcV3np4fjsH7dgZGYWqWUjDpGMhSAJWrwoMAeBzNKX2fG65iAjeKZPLm9xZLAi9JomcLaDz",
  "key2": "4agrJKkKnUXTLNeY9kKuWwH9JmPCPTJYD7mEiHPhZidwHvgCv2HVUSKgYvSpyiqrY5fsCBcRgtwT11w1Fc3PCw1E",
  "key3": "4JbNrFY8XEvxLoHEpM5Y7MYHTyzzrhoJQxZu8PAE5mCWEB2CNj16zr4Yga933fbTvwer4qwBBHpHFZEX7n2TUCCV",
  "key4": "iKKm2ybtg2dzmZJGvSQNUp2dke8HhrHcr36fx5cuiuQ4BQSP29sg3rMsmwwMsmEcyz6gi5UFJKnATb9Fr92SM9r",
  "key5": "5tuWWfiLC2KqoN9J5PxfQjGV89ZEaNPmtDnzTsihWpL9fZinwhgiPcUq6V94vD1ApwJtH3Bq1zqm6ZEPu7eWEhWu",
  "key6": "5BUh7TNYtgZdkAvpmMeq6Jx4n8MM71o3PZppyfMfksBi9GXZ2KLZrwvVVptCiy78nyDapmCiKe6AW5Yq5afqooG",
  "key7": "47dH5p25cGqLRXTpvkhLhk1KjhLpFcivQj7wcwuUdPAFyXRTJqHwPD79prhRBTLt95N9kvZftgHovj69UZqPDNHs",
  "key8": "5peT2nohHuWao8LEgzg5eVc873CPyFFFH6mtBePNt9j6PMb6gYyrQYyEZvh9JsF3EZYLN2DZdxEwgyu36gyjRMNE",
  "key9": "61S8x2Sqwsb7yeMQXneJGyBirz3j75pmLMSQ7Yeu8ipLuXnZYKRvxot56kAEJPEsjUghfEwxdfjS5kX2a1qZyTKJ",
  "key10": "4pSWqdvrYaB8Djk6fwmzds3bdQYc9y4zDhMRkqS3CtBo3AdZSn6yhajdVzR2Q2Fdii4PvM8vnDotzS7F3HETbQz6",
  "key11": "5UjrgBhXmfPT2trBFkSSNTCVyw8i3aYeg8earZvTAFR4GxN6hN3ykZq9b95hqad2WCs57VnKuza4UMUNxsJcMXjT",
  "key12": "623zpgWGgrztYSPu6mNBbAouT9vNBf5d8B9iydYJR6pxJG58E15XfSwwaJfrUxH9cc72FxN9DxQviZdNqQNugUym",
  "key13": "4KG5FF6JjbNZbULLwFSD7my93UzGMiHKUS72jAWvghtzsQq8Efc2dCpXLktcY8PFvz31sErdr14WeU97w9Fz9YwQ",
  "key14": "46ECkCHUyYcGRAM7VyXqN2JDmMWjvqMtpPymARQ8FdiuQZF1m4dtuVouwbhSPEb3agU1nRLSqHdXBCHaxM4tXhML",
  "key15": "3HRjoZxrhBWb7h3JnQnmBt7hp8SHdRCARWBUCmGM78eCLBZHZgyTXmrcvbn9NzUu7S6EXarC2QTSctsmkpi4Kg59",
  "key16": "5gxnvZ87RFX1pYtR4owdZGFgq4PM9hgXamn5T3xctQZFCsRkCss2vbNnZ6ujKB57oMtdHinPpocNqZ88zJ2gswzx",
  "key17": "5GBaLqGy8M5eJimXJru3LEhE4Nqw7kmM4tCHM13o5tLp55qpCxdaSmsDYzhqRaG4SLtGHVmkGF4W2ijv57F6EzRC",
  "key18": "2Nh4n9EpbLMX9L2TpR1mmjwyxj1bW6x8oeixAo66wknK9h7smG2JA8XxtAMpwxaaLtsR7wk9BmZruftkPHNKLzfx",
  "key19": "5WivJKf4BHAe1wCzYGaUb7yrmnET3VJ5zATAnCbVa2jkDcFrz7dpCUW7X7gtjm82uCgSpgaimd3AqojrjitSxb1R",
  "key20": "3SEBnknjKoMwQP3DWGahGhF9gDHD2EMUkqn5R7PNtGdoeibjh2PAF9wd5Y4V2LXH89QSVkfCkzdnWeJHPq5HQsRJ",
  "key21": "5PyiiybRx7oNvt7DVWM3cvv5fFDJ8q7YE6ePfzrHSuQvaL4eT68DT6RXcBLiT62aeJXX2mts6pNsh3QmkFFVcGAn",
  "key22": "6rXjTEHgzNMHHAoD72oDneKRxeRrrA6R2Tq21TVUkAXVKT3BYGkLraXP7hkRG2FZ3Ron2KpE9JLUhHS8bqsMeUt",
  "key23": "26WbXkvtQiFTBg7BszPP8zQ7N68ptwW7ToKUdN3RaBLobi8FggbiDf3QSv78k7JLzaiEiCY5CgcLzRTaTUW7GXBt",
  "key24": "3e4DKrzPjAMcZoUECLPsHxDvNZ74fquS5JXEXx4bk4zdBseyPB8VDEq9KgDRbAaxifZd83Cs9rreL3nRNcHpvWJc",
  "key25": "4RqPuGVhGCVJnb1YjRpLFtyQ58B6pPGyin8MYcrmCB4RNpgL8RDDfvfSFoGYxoqaU8dVebQzcbVA3VARp13iFkw2",
  "key26": "5jqrNx18Y7K2zVzZGSq8NMMAJL4dAFFuYud8rzssGAsoFpxJCU2vDrJvCQky3a5to1VT3EGdJm5mKo1duwynW2Ci",
  "key27": "4SQzs1vCuodKXN63ADG1ibio6cy6xMyArWh5Lxv2E9KStWjphxLeHWEZkkyhuf1LRB6G5DNK1wevbqVPE7uVFf36",
  "key28": "5YxXpZWm5Vq3dhwnHDXbzh2W1mxzCGkSEATzQCa4Y1ND8tcRAkYZjL8L1HrdiXWxBYE7GDwJ5DR9jX6qfJrs4Bto",
  "key29": "5kaEJ1GXcTC1hhDBy2qgthpdHTJuz5TsWcNEcLe9mVMAXRm3C5v5jSKvuP24VU5NA4ZjF5uFzPNi5cYgrSbPgZ33",
  "key30": "2YSHtXYZcC8WBzyoZF9F6o5DChkrPE9LN8HTtDup2LfpABKXvua7ydhmsUpcZCPWm13Rrx9bWJEebTznU7RTDbeC",
  "key31": "RxhjgEWZvKz48TfsJnHSaWBG8GN6zWhdjcAD1YXJLZb3XCPfNybdbHr4fgcBLZsq7WabDZFfEaujMEyVEpVjgsZ",
  "key32": "4xxzyy14gwsRJZVXvA3oFERQjhXsG9q9AtDGjXcsnxdMt1wGLp1Rc8xGbuUW93XS5qVSNfpqsgk5BBKxdPBiFR4A",
  "key33": "2rSGA9hWKk8VX7MMHvVkcgwATEDfJSSVKnDqN9UQNeU1KD2qnPp7kxha51zqznWoQ62qNbCLRdgLWx4EAKxUnQ1u",
  "key34": "2Yqn5ytKeyrnCQciAFUSi3fXmJ2ErXkobAj7Q85BpzTMD4ewdetoprx4wap6UioymEVFEsRkZFLzqjJVNFk89fYG",
  "key35": "2pnH6iVZ1xPaPC8QE9xmrwQxGD5Jqz6BvR89WDfvHpJ6W2RWaf5S7eB2vvqSXZQdJGgveAZAoC59mJRYtQeRSosw",
  "key36": "5aTWegX4WeZsySBjEWygiXBC44mFtY9f14tuELeV9vkzXdjYgDfwTShLVxCymud25myWdy7SSLVRUa8GeEL6XCAd",
  "key37": "52HKU335d2ZZCcQobQvHJW8XjeBbQh7bLh1KASTTt8fFnxG8CfSM6BAX6V71uPg5E9TAUnnmEeyujvnDsTcT2g1K"
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
