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
    "AYDhtSVADXbLp9g69yvuddyhh6cMhVb2b8bTjrQ2DP4QkPy14pexLQPuvsepBk9N8pjbZoaQVb5F4hGEe8Sc6Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvZZcrDuo8exLJ1rZMYZoMsZE92uT9s12So88Y85xQe2SHQsa778gXHnDH35uykYwAdVwrpR3Bo5sfUG2CvjEXx",
  "key1": "4ADTThd9sMAuG9MArcHjnTi4mTKunRpoQtxbZCzdPLEVYQdmSdUn1dUMBW3FuEJ5U2Sgv2ZfDj47DpHGdWUSpuur",
  "key2": "3hFnL6uLdSYdgdG551NmGwGa9NXoNtzqJqtLMvSrSJw5n43rHybWMAv6hdq4AnrBNPmQ7rVLKZcYSi5eFaJZbjjJ",
  "key3": "2wtyBiCXD89Z3vEBiirbfXWd5Dw632q4oYLzMkY25TbWZAWjxkqQP5i6szJS9ahd5pNmARSCs3ndSXj7BTd54MXz",
  "key4": "5iRewQUfPdA5s9HgnvMbxn3uHiwLBj16gx9r8DoyvRhUg8QqGT5MqJ6khwMVWSdiakZ38o2LQp4CdLEVHPjbkTUp",
  "key5": "54KX1ABdJb4G2TvQ6srBTDzJzyz2BhG14vaqBYdr6t5PacfvNnGkFtHMdo9Y1rsEpbRt9h81kzLR4R7224jSqeLu",
  "key6": "3xTjiHd5q8Pgzo3Do2jfG2VQAuLzW95ej8gcUS2Xzsv1nPsoeEHAR3BfhzuKQAWwrdJyCpiXXeMMJf7bcHrf1MZC",
  "key7": "2ddSjzRy8CferEAnwkTK3v3eoYkWRy9g9M3HHgvegmmLRnE8moDAzV23Xv9WWsXQY1L4UJJcWgXEwZdf8cxksyDk",
  "key8": "2bCQ2msAkUJ4YgJzNwLaxt3g1xd74fyJqpKjKjv9sMy1QrsZkyDSA4zHnQNYnoTT27skMByfLCkcDKhxSDTwsKca",
  "key9": "49Fg9xB7nTMVYPzy5Y5ibq1Z9TW7cofuXK4t6fhrkxB9Wjae3iLYgmwKEm8ixpKJwKBbCBFaS9tZr1ED5zVmmBy2",
  "key10": "2HhiXzrfXDGsuSa1WUGSXeF4kGrb72vkThMWRXURqKWFEjrZkmDkhe7jLisRDKfYUsMR1e95WGum2pSrZ8gPmTGH",
  "key11": "EgQyrcMY4hSfVZRfedA7qT6R8DBp6Sv5BSLMrYC3zcfezrsARNfyE3d45M2xoi8TpDCQ2d9GmCJqvoLDiFYafif",
  "key12": "2a3Py3BRsS9zxpUbWZMSBc3vwvhLqNxRzsziUYLPTX18JXMdG2ug1BfMxAhZ2GCft9UyfStm8e85HrNs3HfWXNao",
  "key13": "5xb4PjKzRgJfCTGLjcsx4itB5UfehrzdXzn8r63ZDw9paobNsVFgYKHgESqvcYCXtwSTuZLjaHb9bwYiMhpP3fPi",
  "key14": "3XVwQaAStK2bBYZwFgctfSR9rNyP5GiJK2oTEV6opTxSPrWp1i7UVP2RmcTv7R3umRtma2wHWDC9gcLRsRzZcxum",
  "key15": "3bby7XdxnTcoQ3zBnoev9W4BqcPx9cffXi45pt6VTRFiua2H67FVK5ecTUjfkYcnqCoHx6AzatpjEn5A6Y6ms63W",
  "key16": "38dyugkw9wTgBD59NfCrhHmRQ3mtvTmDK88DrvNWVaBDM3LjMN4hDJbp7ijo8LL3XSX2iKsYxUTDkqfcp8ATRaiQ",
  "key17": "3H82Nxq59Gd42kyzRC1E4KWMhFGu3ojSXbRXwrxef8Xk9UcCEvsVaxkpF8wfrE14pAuhxfBUBYDXPBF4NhVbD6ne",
  "key18": "4nd4XAR5uu6xFhuGFihjWwJbQG6Sso4Fvh5eCSo9bapXEwcMntPH6rvmwSzqXYy3wTKuT3eo5RkLejLgwkcJuPGY",
  "key19": "482u8Rgs8CyDqGhi2AZ8gM8Heo4Kw63ZcFWcHw7nJoNySWTrztHhiU1GMgSMfb4C6o6zorY4eCvjmQGeC8noYDqY",
  "key20": "4FmL6teMr3DvuvL3pmGKJUzsKptPUXCjEL1VMM6FuwU7xZ9jJ3VW42F4PyUWUfjNHbnmAFxkiGV9Pu3efyksJUmq",
  "key21": "3zf9AqdxqSzL57vfHJgzDQjo9MoeZ4UbDA3nZNN9dyyuPqc7rqKkdfZyuiBRnwRZHejWNG1L1Mjdt3pXuZi2p1rb",
  "key22": "4wPLiisq4cBTdbL1MMapAEJyXrnAh3b6nFSCvRheCfftYmGWiGPPn59BvtDoEZa4knCsnsE79prLkYeS1MzYVTKV",
  "key23": "KQYZztc3roDnH8Lj2L4CFBFbYF7qVJy1JGBMPx3hpk3GfdjnKGihHwjYw5brgRw3ctFaPU1pMj8GT8SksaicuC4",
  "key24": "5pE6AfcqTR7kM1Pgga9PAuih8AergDnsHKCNNSWjUjq1SwCDLujVBNg7NKiFXmCDC8CSb5739nWcTtAqGBnrEtbS",
  "key25": "5cdWBLEAG42NLkaX6vuLyLWDmikUpGU8fP9gKexpHzyoemYu1dkfjkQwm91esaBDdvwTghxhiNjRHaQybif8ZJhh",
  "key26": "42aEgXCfHEKf15dBcKJx6z8zDoVmVPVyaiQdX1Jf9zhre2sQYLHnpXtcNcun2Kby5ddvgTGxBVbo87wuAXmRpv5A",
  "key27": "2zvRS24tee3J6DFvosLh5qSN6MeEW5c1SQhgPjpUYd3UBJJ39Yy42nqqzxoMtP4wFDJBSzZAAasGhNLPJ2WEhABz",
  "key28": "4mVzrzEdp3zYG6Fdx8VNLSMK1hhBsCEGBzhk9uDyKQnhbi7VtkgDfgMUshASeUg5zKdNMYkcCcxaGMGieiUL8jwo",
  "key29": "3Q5XBPKDdNLefpZ4gdZbmuJ88YavwqRqy9RuPm71AqHA8WRd5cyY8XmztCAbbMzm3cfoUgh94F152Xxg3DcVbeBG"
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
