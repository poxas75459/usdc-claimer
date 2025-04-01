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
    "4niXX2LFTUXcvPzkthJQWWikA6JaLjXrUiA2UpXpg3hmjaDBCxEdDs37b88H4xAdmrCLD8Ngy4cWt3W61X2AKMab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eH8CfGNe8ds8dnFNYpQLFrFBQMdLYY6qVcCHhp9UB2gBSYnMGeLQ3ga5FWEeNDLWUTF8XLnCHgBAHJU4L65gyDX",
  "key1": "4fcqXmajEB1FSKf9RU3nEesUHFTg965qARnSP2GFWnEXXTfdZBDWL5kNAp5vDh1VyJdPQCWBffRhMkCF71DuSHaF",
  "key2": "R6Yh5PArbQ72FbB1ZeRW4DzfVsyoyzFKr4iDjXy2U5mpXLbZngpbJfEAvDK9jwHePMYMHzuk4MS4cXVhNSe1u2U",
  "key3": "4ZorCfHL413JKW6BTEoS1CFdvdF6vJ66rBBu8CLEsq7E16sJ4gvgpDxTj8FqZ9jEZErhyEsaY1rDhnYwcE2rk1aX",
  "key4": "XgPRWYPwwfubRqWboeBXH6TQZPFG9RusxTuah9SnkrntL5TeTkL7vqYxgUYc5mEGCG33nqS8U9oRB8RCUEem6xK",
  "key5": "5wLsHmbiuc8h8r8MDiSNmEQVnWxisBaoRsR6xDDt1Mk7YvyfrgqzqHp3mSkNCv1pYwNdteR19nSBA7vRcUBbUYw",
  "key6": "CTSKe7DiPngmtS8CqB5X2zbLXrmgLtgr8yFKXbA7mJpTWTcuiHw7sd5Rzyvp2PkgiFQnasyHMJEnpZ3FEDhnfQ5",
  "key7": "T3Sj98tRcsRWQF6o98C9fsShqzwbvZwDgx4cm3deLJxk47D75GnfXWaXx3u4R9nDA6crXksWYF6PR8K9kshFcz8",
  "key8": "4fbBnymDoVGSZQyPEqACzfwYRAFRx6WJewo7ciDt5jnm8pCKkoLFRgTjmDQqAqcHY69NKj2GD3nPNj2Fs5iiHfez",
  "key9": "4W96AVTF5NVpUwcymzoXeY4NjZUTn8UnyDQZJhgJ7KNjqLxgsKzhqeTqezfx8v3Xc7P3ZCVFjQdmvyru6757ut9w",
  "key10": "488d5Srrim2PJoUsyur9s7djDeNUMddsfKwQtsKWPTcnbYQBmVatAYtS8zMmQPPuTisuRVJDFKrhLjZdRoUtEG3B",
  "key11": "L1TVwna8FL5WCjv2dkZPoafpjKyYmS6EtbqPaguLyWTVPYZx1zSc5JWSxpwhwKD8mPAGsXGnYjCjetfMiXycWVt",
  "key12": "5g684y24TLaLkYW7LgzL5wUAhR6HBMG2ibKvaTdYgA6yLQHrpzU8ZEiFbwXdpHbAP7KneqCezuY5vwJmj1Hy752k",
  "key13": "3pA2rGEvLfxMeKyW9SGzTSvfjqE3Jf9uhk2fRB2jE9Jy3FjYHWzNxzshm7nsZwc2Bz1En8JYCbH1cmLCJ92jY6DK",
  "key14": "4SKuNepgrHtCqfRwmqQ5xt7jLXqLM3R8eis2i3K7AaNCkVcBxa9xiradYHrpmBrE55YGhXwh5Er4m2fp3cUHq5ZG",
  "key15": "4FDM1eGuDm647PJye3LjtZbQnnWXrYjGX5Dayx75xrnQQqcyuThWnsGhUXSs8eCdyDa5kau1TfVAmwNWr1RSb9Cm",
  "key16": "66F7R3MacH43EZ29ezrignEN1vNZnWu9hoGU9xzEQpcRfsUZNCdBKQ9uRbx7eQCw4NwHvXeeUuvV26eZvfMcNfe3",
  "key17": "3XVU1VzF6y6V7hvA81yZzSZpH1LnLeRE9Tae8GrAfsUnatzCRgBnA7byntmMcmLTPTi4yfcjWWrRQ7fQHa4NtK8U",
  "key18": "3rmUV43aAx93JpU2e8Y4jYf8QGFgQe2MkX55s9jLZUpNkPvHDYyKHjsD1brF75L1CT4J9sgsNc569NCkekuS37KY",
  "key19": "4grtF5M1pxyhRMYs8Y4uxSEPDspBjSsxNHssCrmq99iRe1CQX3cshcvjfXuRsBaLqfXz2zPs9wuro1qYL9qmesYZ",
  "key20": "3pJ7HK9mwaVe4d4DZnh34oRVh9eR6X1EoiWPZLp1nGc5Gy8drA36WWdicyiFUGLCaTZ3X1BNmYmdwRB2JuEGveE9",
  "key21": "4XnWicyS64HpQc26b854PecMrx5GxmdHi68WLqeC26nuPmPpJz7HkL7eiRUS1ut8Bbo35UkVPY98NyLPBombdJYt",
  "key22": "235TAvUrbBjnc4vjaYTkzwmnK7CG8pVDUKz91UJ49vChpPtXxMcNVLsG8JTYe3xjvPkCeWjd2wjd1kiUQ9KCNjxW",
  "key23": "643FWGSeJLSXbFYFfoHzHo77QvDU2w1EAFde3praZyfBmKDCF75Lid6wmHhKk894VEdc2cNsAz6uC48cFKPfnghZ",
  "key24": "31vnXFx5oHtaGScaDLmHpToKaCmuiUweUUxAqig8GGZ7aXDVXGK3siMTb2TU8GeSaihetoSD1e5nSWML5f4XjrW4",
  "key25": "5JH1Wj6ZAgiUsLjYkYkezGoRhjSrngk1e9oA3JHXfakXEzQM5MJ6MnUAoTZCU6UgxqfCxmMSAWnC1fStgpviNhJW",
  "key26": "4FkL8sbB6nCQz623iUbXUNTN5skpmBrwiKtU3SW9gs2a8tDDGp75tbcNUsU7R13BN9LU27uUrLnzrNxXYEm4ehfy",
  "key27": "4HTY1admL2AWTXQvbpAkEoqjqBpFv6GRsBzUHJ4JtKqAMDPhE7NPreAyCSUP3jXVFeUEnxENnrMrSPZp748fX6do",
  "key28": "2QsJfdkwokA2rM4BSX2YxPoPTTrJAWUWFE3YpdtqqSjJ8tpVWdnUaAh3nxrwV7X5rLe7XtUDa9c8YwK83LHNBxLy",
  "key29": "3wQPiZcopz8ppigiAsg7nWN3JbYJyPVxdKhHoDEUwXg2TmAvP76h5AdEW49Q3nGvPrChEc7UW1JbUwRrTiQ7BPmp",
  "key30": "3t9HAJd66HxxiAiga7nGDtqQGfSaqzkXtqxWo51WyfNeRGBGtRFtUbgpt3MVZ7L13cpnMrR4WinptM6wWScmuqQZ"
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
