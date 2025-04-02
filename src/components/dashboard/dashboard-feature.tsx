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
    "CFb3EyYQvTCFTuj5Spt67dubL2Gt3v6C4UJjxCDWYyoQ2HBSQ43c7p1RWZ8rgjKuReuY3c5QPXQsmWeVMpE4a7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u92kyzH3krxYinmV2hAu1eZoLRi4Mij7yRZWbjobEHGEinbHC4VKeSNq39m6NEMT5uoBVGNccpBXiMtv54gkBs1",
  "key1": "3XJZPmETQhJPEs7zYm3jPmmHcXLQJFdYycZuCFhHKBpyij375C6UcBsz4TKn6YeYdrRorV9uy4dHsYZf6ad5kPf7",
  "key2": "4nMowXF8kwnakZjtCGp25LMuJs5u8zP4qhZGRuLN51j8cGhdsmyFHvYaaYjbtK16BmCp9u6JB36VMX9Lxnvb7cW5",
  "key3": "3ZoYEyXnVNgBwZSxjBBc7JLRQ42YoGUVcHimoin6t1K6SFCd3NCZC4RDpwtKG9AbmXZF2eYu3UQZ9bfY8wz32CYe",
  "key4": "3brz5ujQWYKarVAksx2ctxmGu35s1UpwvBRZ6uhK274MsE3b2KnuCmT61NheXb8v1VTqkYiVJYMRJTvjP8ntrsCd",
  "key5": "3Ar69GnFYSMHNFpYorFqAdzWLf6bXRbVd6UFzhibM2yw1kQNGjecDSwYkyembBPreJFBb1W6opURseqnwoNwquGd",
  "key6": "3uPuR46n1aEJEMe38kTq5SVK4hBgVebnDRjrNwbckT5enG58RuiziyDqAVUzfTK7toay6vjivWUPS4um2iNF4JZJ",
  "key7": "T9bJ5eVeFHUWAKvAJkEJq5MmPnqrY69a56yzsKMnqzvzJi1xZiMZQDN3iw3T4TZNGz3PyyGFeqQ8fDoNSp3KxU5",
  "key8": "5TUueiSyJBFGh5oT6ZPMsdDf452g1YkLPvQW2qXZasSwr7ZUCHoUPW8wv1ME2fma6sLep84Czph2foTPm3AQ7Xz",
  "key9": "3NpiXYJEqK9CSPp3abVCDrwuwRZYi46umUuD8r3vkZbs9BC12jfwBjCvVm5YQ74oBJHQsvQYmc4bXMx5k6FJUbMj",
  "key10": "Dk2bo9jWqwLVqP8PwpUJZTm5yzLwmhKpE6px7ToMbmWCbCVQvTD5cKHmDofVvaa5CqHKtWiRTemWqCm1Rrt31bQ",
  "key11": "4eY8xotU49wBXMqWQJHWjhCvaAyEKjbReTa3aZvFCpxi2k5bdUyqAebfSnxD9aPq8gKnT1vTQrqXSu35HKyhWF1a",
  "key12": "3Dt9zrRhZB64kCnAmb11KfVRU7gvNAdYHhFusWPN7F4DrGFm9driWqFVoXxPPmVtT46FLzDG6Lwb8gfSQ3R4VSRQ",
  "key13": "54A6BbrJw3kYw3muJiHHkGxXtoWWJHRxP5kPhK8Bkc53pagSs8bMqvLM8CtzNRxXkzN2TDqwtWrJdDa7UXTXZ5Gt",
  "key14": "2yg5rqSUxV1DsKuq2YTrT3rpUz4qJd1wP4UPYvBAeBfRaWv3U19bsS4P9bZ1rAWwcoETjF8gTwueUx5iFWnZ5fQ8",
  "key15": "2hnaoiyfcxG8UmvmDbSc8Zig8iZKBNEnsW3yADfvwp1ybd8LhtDF5RK6n4LegnF44KY2tTsUMjEW313e3LQDoZLv",
  "key16": "3FAFcQZGNhXbgfLHndpi6f1KQQTvbwVJeyfhjkjCZBCnLwUh2JX4HgKN6SEyxPVRs8nCFdveA53bczrve8BjDBds",
  "key17": "4C9GXEvnuMjitRurB9xBFKj43bZXJCXxPAfUX2m8pNNf3hT7NQcYzBT1bU3LmiAHNw9AVag9SSyaFohHAstNsZVi",
  "key18": "4FXXHgRJ9PW1jorJLKrADUPfpTbjmd8mdqpu4Smq8z1BF9HytxVCjgQtwaVJkPtB5ycnCFWqnXC7LrXZbbSaHm87",
  "key19": "zHUnuHmWptkLNd5m6G55h3zSp8Pru6ytv5RGNi2geRESRx2d5c1MEEumMNGcaiqv1aymipa7LBtbhgviUwNaLuA",
  "key20": "3crQiuMMcvgc2pw4qNVrURfbeB5C8ZfN4tepEFeXFxABBP2ge4agnFnommYMt7JQYpZ9dsiKSHk5hHVuyWWCsWk6",
  "key21": "5mHzYg8yfAipvJCZoQLGsicbT9EWEoPpBkaiDM83xTGRqm5mSnnpLCJC9ttaqBEUy4SWPkWBLdCvJw654h3RQDtf",
  "key22": "4Ctb8fRHVq5WADX8GXH34ukrJFTDQeVUxyt17ofuknUb3Zu7ijFHpmWpWuo56m3wQRtSfV8k2dXyhjX3PRbgi6Ut",
  "key23": "35M28W6HPuq4YwxtuGHbmygK6KVADxc4rPYG7sX3en5b3iXz8u2rphSQwbCcYzycB495KJykvmiePRzxhxNm5fGE",
  "key24": "5ziQVf6Bzn94FEMWQhv3uh1CpTz2gmTFMsizdzDyWYNXRayNUFyiFypdB5H1k3cKUN3mtYajqMSVxg4wL1nEbnLX"
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
