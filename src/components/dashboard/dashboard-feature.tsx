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
    "5pTbtRZ9gfxLWGKnhmmFMn7htJTKcm27r21jviVfwcAPw5ok2C2eeg9Eow8nXgJqhvXZ8N5TezNwt4X2dx4SAe55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7WaHBAw5v9A1CAhnTsdaGV6oUM3q4wpmQ7HbVRYgSFhF26G7BM45C9CLr2eYXZvQckjbYkZSkGHNixCWCtNfA8",
  "key1": "3yYzvKZr4VAbBZvzJFsSUtFPFV98sra1TXx4o8i4uM3tzWP7r6JUX46DMBFVrfJbQdKdjeieEYeCQVTwXGQnyJEe",
  "key2": "5tonRpFJdeMxQoekjoWL3WDfasthouVBi2fZVdgvc8oYgZrcCPrDVdqGbhxWYZqbzN1auu8n3JooeJU9DzS5cYLx",
  "key3": "4v8uV9SisZCQyGxcTuRJr7sBxKFL4A15asqtGZzLpp8iBcG2MxUqT6SpN9xRSHBEaFPCgKj65ac1zsvGBPb1goX2",
  "key4": "4MY1RvJiRGULKtGHhAFjk4MHjLXLjhe5waYYXVG5ieaUvCkuDrWyCRYi2aTzSo5S4X92XsLF1KAL3Fcd3DRbeBqu",
  "key5": "fzvrnj91qf3aU8hLioqUoeLZawNpcY6jupp1nBYsxExk2uoFFD7yuwcxSbtDAGvMgYjq6g7CsbNVhayTPHF1XiY",
  "key6": "339Zg4YmMzFZeBUQfsxVs6t8s3izLifjBEBZyTXKSokV8hk94Spok66qq4ETajbMFoK2tXXJPdyyRbje4HfQuPWY",
  "key7": "5HK14mcEMPzoKiKdz1rR7CZXiMHZpgB6E1mGGuMZZMXzBgMDHz2BL8xY1t7C6ybf253x7XTetjqTypaBD2ZsW5ee",
  "key8": "4vHjML3niXYKhrWD6RKLVvt6aqeo2pPyFguBNVpWN62P2s4UxdF6nf55HeFYCrgPBHDjqgGF4GQz8jJkUz6sHApM",
  "key9": "L4G3FDozxhaTjypvGKb5LGBKXzt6t5ixmR96mm1dgnty7K1uJS7ScM6dMNAx6pPNWgGd6NSxoRh3Y9z2SED62jT",
  "key10": "4AUFgwAYoKoLqW7HgBps3bHNEtFeSkYHAeRc8hw1AuC6A2MzXDMK1hRzNeYxeqUSN64o8rDJVHxoUFznRtYyAnjg",
  "key11": "2cUYTCCsTXPydVxmtwHEv147hbSF7x1VQJWQRnFKEoUczCHtwqNkuVK5bazgXBL1uGLir5NDHLN9yik7uAEksU3r",
  "key12": "2z8Lt33usoCvtFfrrbmSztjXxnLHmqGJx3SKkh2b1S6t2RG5mi6DxpioMk6x43Vg6wEe1XCyWLZVjb5AxKx8NHCr",
  "key13": "3Brv4N2AKajy68xW4euE3ErCKMj38XA5gGNKqafMBbhCgBPD9rXQMb2NLUt7sdUsYBn7WyqxJGKo7peWEBdLrgi5",
  "key14": "2yWihMEPkVxYP8ovCzz4DAp52BCXhzzfQJGETrgc9BU5H4ikoiMEyxCnP9cNtb1rpq9tfKZf5riVuYwqRiacYj6e",
  "key15": "xvzbVcNmCLKZTEF6h4DTFMcVjxH9jyPXZHodxRbND78DDGWPHWbw6GvY5fx3fjkBWUyemwTNxqWNyt18guWXbwF",
  "key16": "3oBKdLrsy1c5HxdGVMALW16UNfqbMFFk7nH8bWZ5pnrWHbndfb5NY3szNgFLCESjA1ZnTZqVdXfiSBkEzdebzFLc",
  "key17": "63D73eztpgXG79ELABeneqW7mXsUSk8Z73GL71Xvz8WFy3Cvv5W4yghS71hYT9h1ZhCKkQ82nUnJLTtBX3cV4CkN",
  "key18": "3MNzFsTKk1SvHyBgaMWUi8ei33qMMmE3MNpoiD4Nezv4USWAqLbSZs6KZ5bQWxaQ4AaS6Hun9baCi5xxoj6BNXQz",
  "key19": "ft1Hdj4hVJWRSUVDojJjGWeWuHM677WkPXmusqNhe1gj54QGK2AmwbrBaCbkyeMrgCgjkm18zJnMZLXLkGB294k",
  "key20": "5aPsDeHhVRbqSGhcG7YmNadR5zeaYYF1iwsy8mLiTqJLgyD6CGUnKbFG5Uob2yEWa1EyYxCYoFHpZtxEWytoz6Fo",
  "key21": "T22oDLVvBMf3NSKMqCodFS7dnTYjhTWehyv94NUZoHSQxc55nx9cMJjULd8fWRHGwsedaMSLs58DGMmx1GCYw5y",
  "key22": "5mwEBfQ6DdjDVw75RLUiWZCEsGzofsC3XWpfEbpt2CudMiCNJm2EVv5Es7tWLesB95HNiRwqY6Fy3sk8gbc6wKRf",
  "key23": "3Em5WZ2qui3tchp3BMnSVy9pyy99x1UTwT7MUPLkbADhdNXhYR1JkMhhgTCqLZqTSf81a6U77NUFoS1ckhsSXYuV",
  "key24": "2ALoDLoKCLwyy4WFVyy6Q5sp6WYf2Vf6iyVYaDo8AnHPZ1mhHHbgV8rvgv6U23SyEdFfrvpg9n7uDAQYQoeP2Bwj",
  "key25": "2J8D4HEjchQUKn4M551UEA4eMFC9idKvZR33ZTV5EMUtRtbtwbhrJiw9RZ76q8brpYio66Tn6ToLANhP2Hk22Xs1",
  "key26": "3Fz2HjUGXJfyXLm3Jc96bAPyBUYhz8ujqjzCdL3XjZ3YrdF9exEysTbDwTmfZfNPyzJ5jWgKPyZSHuV6yUNo4sa2",
  "key27": "2hpzhvrBDnVmXmYvuehSLvM4q81P42oQESaotEDHebJb18da4JFW1aw6zUWraT3gr5mVbk2yekicsStaq4ykCyhv",
  "key28": "5DrCddbmDuGmheXGVnrMPcqFahpUrKsCTJ2E8JpJFNeTqDPf9rbzdwTN9Q412Bh2feBWsUYY6oyZTZRXpiTEuozX",
  "key29": "5X4P5tUvyGAq9mFZgG5iHaoRcwXSx5PdyXeLz7GSnFWtZHRSAmRv1DAm5L1P7LQhfMws1zbT3j8RhBiFZJZtNRCp",
  "key30": "5zy2V3C1QBxTMZNstgQfJkQLy44xjuu2LfjKsSbJ5EQvTFUYX5ADgU7M1DqkgKjxgBU14kz43buTGwb11vYa36Zx"
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
