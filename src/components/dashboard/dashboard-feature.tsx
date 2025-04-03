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
    "3n9hzx2L4zMWzSBcf6AW9rjR7WM54UHRsnia6Wk7fXSs157W3entGa47WRLiruDFwRzjPLtYnjcxJCPo8Vye2Lcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjRVf28A9wdTeEepmTGj2eaMjSnAut312zUzPkLNLoAdfqxNkJh5T8RE6h3iEASEAin4AgopmWjewAxGD2FJReF",
  "key1": "5xpV8kK9UMtrwawSCERNDf4nw6zFymTDvJh1YsoeTk3NXPZKBt27R8y1rmUTKeYncU7th6XQsMiLvXpPyr8e2CHc",
  "key2": "4BZ4XB66ETwNZr9Ly9LSgDXDgZosAybGbftHWvcMJDvHphBkBvsKcrCEhhLUU47s4ZwXDG1dCrLnih5wdLiR3Zt1",
  "key3": "36SYCZK9bkrRDEA8mpMbyU4EhKBUrtn6TaTf8oxmVNhr6hFHjCnEMwqpikDPmKQtesHGPaHDYE3TV1mxxc6WMWbR",
  "key4": "tfmbkkC9Bv33pVqbhAGdhG73x59CH2zwQ6pkTceBmNrzNQRjVk9rsH5eef3uGa8rNp6LYxCQ6XYr2eMqB2zvDxh",
  "key5": "3tjDqMDZHWsQWUPR85gLFyvYtX9E818KtdhNB3gewGF977MRhSt6Rn8ZSFm84CmGxErQ3iqiArnJa8yqwHTF3jMY",
  "key6": "5D34PFuFeiU3MojgsRLUMTcN8NphUASAJPbJuKSnr5w4EVmSSkBE16aEDZkedFSu7VmPxDG2DPBiy69RptpgNJYZ",
  "key7": "5dDmXKPpNpUa3jiUbaCRDShWHF4ui5VLtHPSRvyLNkYgckYQ56BLjHz3oWSJsnKAM83knv4RQt2hsFr6PhBjk9Dj",
  "key8": "XLi2TLADqQ17kF6tbyA275iz3oT8aBeBJjnRPZPRr6DAGA44HyQA9fTrwXEsWT3gAS1K6BxQmWNRgEXeqmqfDXG",
  "key9": "25QvSmipg51w5Qza8BoqxV4DEpJKXALYb5Kh1Xj6UUyJXgi7w7ePT6irXkwdejq4RtL44QVvmUm1eiMR5kfEzPiM",
  "key10": "QR6EuMaaUbHFF5rugsGK2i4C1WWzpQJWFYdXiyNJnkGaHNmK5p85Th5mdFCqVqLC5B26XLkRck5hgTv4LERS4Na",
  "key11": "2zZ8GUAohEv527w4b3YtNZwMb2oEREi5HExtpeU7bUQNymbg9dEh9JjD2QmrDrRAQDNsDPxXw11smC75mE8VvLsc",
  "key12": "VKaM6MBkTGEAF3imb1nh9NKUMy6BEidRL9oHReELmnLGsfdpkcpQgpauJU2LCyN89pDWoH81GybMRWv439muHLD",
  "key13": "VcG4YKgTkSGuqoeBYDRPcWsxbTpoDK1KyQ9fMZrZZk9pMQjPKsbc8vL1C2RynwPyaedAGsusr4RxCC5WL6VKkpQ",
  "key14": "3NPjcHA1UBcpm8dX9kApkBV1J7M8ADp5Li1qoVVihi1Hmn8WXV68Yuqm22TsNLoo2dUjfTgEHwE45ZC2MJNedDFn",
  "key15": "vPeFRs7hkxgGj929AhhDifPoGZNmzsYF7vV8SMcGSdjACYWjygWhXHLBB57eT58hRpKsPnzo3vRTBhU86NzXPGZ",
  "key16": "BaJAUN5TJw1Q2ZnBEZ1WDxbLwSBtHdThtACz9qtvsq7U4HjQvmwwgeQbmtKDXHjLbS2ewMG8e2ZY5Hse231cSGQ",
  "key17": "2bWjz2agxoXHXUHzGy9m4aJ8co2aGioft7U1JAFgsGM5GcWq5nmPk7wscb45NkMu4pVe3F88ToutyxA2jmTGdwvM",
  "key18": "3GbEbZKRPxEkdLRSi9SpGwFW7NH6QVw5KEgo6d8h6uNGr4d8eZ9DKgTjxiVusQ65vheZJLBjjUQepEbgSv2oxzSY",
  "key19": "4JoCraBs5ALWt4UCcQ6TTWSwe4vcsn3STRLbCF4wLHRrVnGsnwrCFbBRS33xybSvnH38VkvVJXBGvnvZVtUCHYwc",
  "key20": "jm3WCmEn7d6puTE3PJc6yYLNuuqNhsRAkwYgCiMU7EgNqxmtBh8xhjs6qZ7bLuopRvQa3ALrtZqBCgB3Xk86oEg",
  "key21": "3qv92NayzagEyUocKSV4gzoTeFYHK4Y4bQ4guVjiX64AaXLAqM7PwoiadcXxhmt8ZDykRgLehqJtrU6F6CAzBycn",
  "key22": "2RPF1yYq2mhnqwexefsgPk88xDznAeMvke3LgqiXf4ZkHgaMhnYYfWZKyQ72QJyfxA7657r78hb9f3gHQvsqcUVs",
  "key23": "4BnEDhAAhLFSUJ2Wk57Z13CgMddcyp7Amj6FriesrbpBPW9aoJf3E7hYG7tX35x6NYMv7axN3McbDg5p6ryU7Zxe",
  "key24": "4azPmiY1rVLdGogxS9X5JUPGmhDfkToZG7k1h1szpRkN8Cb6HFPd27Ea2Nbvv9wWzFpZQup4AQXZnCAj6V5PbkEy",
  "key25": "5DUo15wNdq3wM8QimdStHQvC7MzzvjAYwrfXcCSx59dn92dC2RQER1vRz7wdsbD8tgH8f2zxg6pkXG4XbjZdvgXi",
  "key26": "2NemrXM51zEQ6bjVpb98SnaGMTWUYTJqNUQcuLNPgKPWS2MZQesEHBXS2Yv6kB3zqREkawouJQWtSFEcj6KsE1Dc",
  "key27": "2jiyFdQqDpgiratkvj5tQ81itv6VbkyLD3zEkSBFdJ86f89LJ25wzyMogVP3HtLeenaPdBTDKGZky8b131ScjbST",
  "key28": "cJyh5mPL48jY5AHiQxTR23cDUUzxeNYZP4RCcjcxsHtcemvzypTp5DMjZ9FPDR6RGgf2jBKxi4XCcgoC8NK5nJx",
  "key29": "5fN2B7jtUnFMt94M85s4xKojbzdz87guFRCoSaAEFujKnag6eQZjjMJ7roqz2HYuas8E8bKpwcVji5QZrXSAccyp",
  "key30": "4vou6tZHYXEBTMubxu4Fg8gN3aESPzRGLhHnXC7Vo1z3N8MtiZbNsMkQZaro9Fu9Z6MXXq6bG2JnUvSmWj9ve3eW",
  "key31": "281PXwJhHtAQv1EqSRBh4dq75K1nPknKYwDbKSvNB4bwqgtehGws4yr3GZu2u4n8g1c1EFAvSYs7QZJeVrGuSkZq"
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
