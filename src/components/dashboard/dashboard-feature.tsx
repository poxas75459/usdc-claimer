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
    "2p5YZ2wQtNShWhTJu5iyNs5iYBkQcENCukg5PhaxBzuL246CvmzVk6gTvWFLN139tJvbEjfDZjYzDhriUnwAMyNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dD4Yn8fZEUfBCtyopeEb5zeSH1ApYR2p1ogbXhhjwE3DnuY7FZCvrTCEzE1Vm1ZSBkrPJa3CyJ6wdGMu7FBmvTH",
  "key1": "45hbRkLbD3mpVC9WonnGvp6sMhseyfdENtykEvQoTmX5pAi6Z2UpWKdHc2bULaRya8hYiu8mgGMcEtkcEFSZXJPR",
  "key2": "5k5tvPmaxy5fyLWK2x6wM1sorAfGUcqzWy1W9W77vxcgo426gYpDssDjCbGqVQfL7uM8Nvqr6jyb2rTaMH39uJ3e",
  "key3": "5tav3z8DraUHFczJmEC9aHrFkdoocmA6qoBNjh8ZGDvzmfW2Xdo6MdKenmbATfW3DAiybectJcTohJUgABsjPLHw",
  "key4": "52buPrrYm85BrCRUcZeZss69faiXnvhZvvyZDqWGoc8pGbBfhrnKQduo4mZ8EoEPQL7KSsoyrPMSeuCfuyeSwUeT",
  "key5": "5C3FVsxouAMrnF3KPvM3d6fCkKMq87zsYRUBGHWcNkyxqkAAf6NLP5m4eHtQmkNDHtStM3SMTy2yTvrg9BHkMyiC",
  "key6": "yRSzwcfCwzqL7m2MMnwHn9guvjccsy1fb8sjjxyQVxjsy3JQAzNNrF3zuirbF9Wa1Gcu7UraJPdnnac4mjCJGY7",
  "key7": "2arYFYmRuXNyCxRDNwwg5XxeHpsMNK4MPr7D51MG94YJEh5uuJDoMyQy29r4G9ZBerf2hkxQXSSUpZPBWw68EYrr",
  "key8": "56epjiTpvVFJQzQvFGsbsc544SWGFFXCSEQjyDvvERVWC2QjhVxEcsyCaKzz1yPthp2Trmw4VTeW6my6sAqQE2y5",
  "key9": "28J9aQLJ4vxqjm8mBp3EcnYCV95GhUnRUaCYVWw24ZEaTHhvYBRt2YWFAMGvxifGZ5TEK3gS4eJiJsW9thkjbT8z",
  "key10": "3FjbR3Du5ehdEhzEXxjARbARweezF4WFTUBUcnL1EjMAwy5N1oa3rn2GjMQ5Ej5PVw77pmHTfQrtwkT1oKdHxorp",
  "key11": "3w3PcQfGV6jSBdNWtjLVtubWUV3LW9vUpAZuv7TEM9rTESSyaazoiZk7QyCd8T7WywyVN7R3hFGG5zyxwHwZZkKN",
  "key12": "231KT6afuBFSPRn9SwUkd6Yb7tRzg1hugCeArkzJ4kNMXZhCuVvWk6P8Fn5buhmk9g8PAPuGh11vXrMrXvUAmez5",
  "key13": "dTbun6E4RN9TJJWe897FcdZhgsDFL69NLFLP7ReHuMRby2c39XPzvTRZNkcNfHMC4QkEHWv8ALpZgueMqacJ6tw",
  "key14": "2NR7HhrSMFooj6ET4BVMCfNTxLYqALqmoXbki8VtauPwFdQwh4qFTo9WoySMbeyHfZF31WFYGQzwMePkM62CjPru",
  "key15": "4yR5SzBfm7VBHjXp1Mwkfbm7gvXJo4rRpNH9UFz2J9mJsC7ZNzM5iVHyQgTM5pbiAaMKmtkg9U4Fs5Vp6AihnJkS",
  "key16": "pxmYb7NwLZYZHZCtwqaLjXUFJc1BLpytXpnKCS4mWcTWrm6tnrGN37QdMDPXDiGxdR7QjqB4H3ttL9pXHPjE8ZJ",
  "key17": "R8VhGn8r1VNQSyYwGdFBWctRCerLgLSvAEMpRZoLU4ukP1rfEKnod6ytDtSteK8Wtyw6FoghVTeLXhtMqwUSAW8",
  "key18": "441DT99NYjsAroACJsudjmJBFKPtRRwWuwbDhZsQg4saKLfbM9TULfxCj3Mox5yHWpNvXebjdu2tzUVymRjiNj9s",
  "key19": "4GE9dfH3PMZRX7TJCucaEurcg5Ut8w64LnRSbCGKT6JCrwm8Mqkb1rZqnrTM5YPGz7ae8MAVCCfMpzDy7G9TPfue",
  "key20": "2bYBx8fYSN8zUVRkbsPGXgCMun68JXuzjjyzX3xVJux7DcUSWZnKj5NKvV6K5wAdR3RpfZQ6sCY1QKdzToLivjuN",
  "key21": "fhNLnp1yab6WAQ5KxiHagUZLE3kxmQ2gwP15HE5fs26VscQMw51YuZZTjSDV2ADQLCTDPpkLTzDc1WKKR7ZfF1K",
  "key22": "4QQNCCfJg1RZS27cDtUuNQYrozwZqzi2B9VLa67FG9AoB5LcGTUvTCXPw9Ctmw5YUYRGmU1UiP9kMz2to1439yK9",
  "key23": "nR3jSB9DZEERxdN8mM45Er3i8Gy8PsVsn3DdzNF88LfCPzjxCT2J9WSpNDktdZ5P3GXvGaHJrojDdcjT5EvhVGv",
  "key24": "41DNHXMDD7TkdvXeiG1saq1ja1oYt2tr6Cp5bpnuwdyjgRbYYj21ZUP4b9AKseLpp2oRzd5pBPy4YTc2kNp1PQYP",
  "key25": "273RM3ES9sJGb1TwThBZ8zZtvm1joQWwEZCatRyoDZha7di9VUXvwtDtxYNpaeqhRFWo3ANet8ofCLatxrSrMAnk",
  "key26": "3gbf5Mrbi7PameingdyS98Au6Ut7BV6y26ZsNhzwwcCdEkTEeF7SHnZfB2pHWLqRYPk2BxBjX76rXoxT1S4hdCGj",
  "key27": "3o6ZA7oohmRcfmUgsy4L3HWW9EEhHyg6b73tuUfRChBAbjbKe8PeraggTegBaNk1nqZCp6mjoEYu3KTDgWW7fzE6",
  "key28": "3NZMuBd6gdN18GbhWyfxWbtrJyjEkakBCw56LWYzguWgNb7vc33FhE2tqVEXLpBQ7bwxeKQGkiSS2vMUWDejqDcy",
  "key29": "4e635wjugA6MxRJyaGSia21aUsMp847NifEosQiDmeikazFoJMNN7vTFX4CBBuwX3W3z376yXCwbUrZQ4KgRy9Fc"
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
