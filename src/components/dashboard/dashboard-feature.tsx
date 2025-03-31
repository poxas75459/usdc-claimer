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
    "5vzwe93WGdbyGMtFmbd6FENHjixBgNYnBTvMs5Xa5ny8SDgYydYhAq9rZDkhRZguLKRs2Bs4nwsMbG5BfrJBeaZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAXvX1V7prD1KcivvvqhDGL5Wmq5Bg4tY4T9JVwy1GUdvnvyqTxSeLYSwRAyFxHJgzLWhQSYrHLznhzyUAp5Wgv",
  "key1": "3roZmaGaeZf3TEsPhUjDPQG74MnvtvuTwLNUe4rWXrvFi25kZyh3LAYdK3wTjuaipXLbuXJcJpy3iF7f3kC5NkCB",
  "key2": "9nSPAZmnSN7HrT8Ha63htCVLJgpp6d8GzHirNntUYhfZkV6hvUQpGF4oZ6oZWEM2LKL5PZXDdBzczqjPDjH6W1X",
  "key3": "4Ui8omccakpQvLekYp7qcuHBggogA8ZVsNZbQQ7z8jG13Lt9ZWjBbBfZ7m36gK6EvMbPcNc8tTZjy7v2i69mkmav",
  "key4": "4iRzkXjuqLBX1YVANrp2js3dLb3uSyEZfTKtmXTr2rPcYJDs6rbkpEm1bkHfoSRAtnFXYESTAZroVCjx4gd9DYxn",
  "key5": "4GtCyDWRWn1C3sdxNPwLcRxVCzoJopB9o6fo8qEV7LQS9e2LfCjWpBM52R32TLEBpNDosZafpfHy6yRBoz6Vpp15",
  "key6": "4WTXAMoicQ5FG9PgZhU1k2c6221anSPLBej3nkQFMezs4JULFnQKPH9ZXNTkptLDPyRK2oTK6pdoZkowsh3FA8Xs",
  "key7": "2zFrNEysFSEQyXi6cmzGJPWxctupt35AgzTgxZgxtgitVRPNVZtCT8ZrgERdQqaqFeogJTA1Es1hS5WtYgKboZRd",
  "key8": "4xwM1meeKSDcxWvtmpRfqvWB5YEoQtmjuau6XZ1VpWuG97qdq2kRof2awbrxKn2361G86KXjjmxkNfvKPELcJhsg",
  "key9": "2MjmejHMnPNHs1xzWz7EjnGP5XPLsjWmvYSrRnxnFKvVLHQa4cCU61376ChAH4DCVjkYzERpFwvdzi8cSqcjgcnL",
  "key10": "4miJMHpWzRb9aSphvXEqi6SgJLqcJAKhJL11B7h8oY1cvwfkPNwegiJ8S9JzWwSwY2QWTBA5vLEVSq12Kg6bqtzg",
  "key11": "2QtKxk1xoT9gfVN1k1MbK7fQPAvPKWYoVGayNohwNwFB2dhAjKhraxZWekJkomguZaG3PpQx3nWUinvNHnRrcsbd",
  "key12": "bHD9L2oYkzd2uP2GVjYfzB2cbAVXRWALnXdWRmQBJMV6CGXzH1MhxsVbV9b1MYDsQCrdJkULLqHmFCpwddrNdk7",
  "key13": "2peBCZ7aK6dd5JWsfQug3wUEjKUgMQVCNtVAwtoBYa8MaEqybBUkfj9sGX6t7MmPLALroreo5Mx9s8chrq1hhrcr",
  "key14": "p5XSBYYyt8UofxrNYPuUtGw4xp1hJ6wkbpzBRK8GGQaHsHJxZCHA4w3swYjX47wUPmr35LYbsVNYxWw8v5s5Zrc",
  "key15": "4Jc28cir8E2SuCcY8MyhCGQnW5eqw9y7mKuAFgiqA3Bs5Hn4kQsdRHXpXQFGG2je1itsKkuae4eRYtfEt5r1Uc7v",
  "key16": "2e6KbjiwvBWganpFCHR1JCzfq3dKjwkpm7ZvSQZc75tn8aU8pYHtwsbafpTkpWA1yaqNwohutxJMSZrh3MJhAjWd",
  "key17": "2UVwkzXXQiDUPAB9uHGfbQDZJNxaQomSYp27b6xKNhyLhwvwMr4rjtPNmgoqx5vNyg7k27CJxxr1Y6VNjVesZ5tk",
  "key18": "4NBnCS1whVh9YfzynTpvJrYZiSa3r63V5v4ihJPxrtqszBHwGLHfFieNymn7aWvX16Ze1cZxLpKEivBujCz81vgn",
  "key19": "5WWN7REA7tEaNtDoB4v9GiNk8iHWvJB3ey5ysLLaVFjRMajZggbRnpBZEvMt8XnU7pGq4c5zfhrHBBEJ9bSZbTjB",
  "key20": "27THJH7cViRPgeRzGcfwdQJ7RNkKSxcWkEwy7qMHUdwvVvbjpu8md14YpD7ZLooFYB1LZPa5UsUtvL92bGcpd2rt",
  "key21": "2gM2b5Zd157b29tjTrt7ySbcqmYTxT7niMS3sE8deXJsjHpMqvT6cXmXbtP6kHBUeoKjKPBLsWHDrnhMg8sBYKTQ",
  "key22": "4CEiowyMkdqCVNgHNhQ8pPPMXLsX1CKy9nM1ndXmj31LVXXwmM3nEq84tTQtVd3wtRmWDF4TTpC7ooWxXEpbSWwS",
  "key23": "2xwfSAyZ519fCzxbgfimb8nnaQBQ9pJ4oVpxcVSrxHN6KnDy5iP8wiNBC2PbTM86Ya3XVGAX6Mvs1Mv7usCgfmj",
  "key24": "2UC6vYZJD5WwLik8m228yfLreiNwBMHG3MmEm8czmB4NPsVMT4fzeM1vS5gT4KiuUUaAKcAQYZhYodUPjHbG5ySs",
  "key25": "2t7AFLucRbUo8WLsEepU2aeGnDAYwPDEn5rYzcCC872obTp7aMiKHY7zqFBZVL49DLDXCYtdrRCqD961QhKD8Kuz"
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
