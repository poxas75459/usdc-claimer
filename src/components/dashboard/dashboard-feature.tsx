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
    "59rHL43P6zWwFfNAcJkFMhp54g4EWW5wAGRa1TYef7ujJTCNYyWoHRYJ5frzVjkwHXu4bxbrWM4u5ikAYTUpTBBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5rnQQWev1sFeMnx5rnJDLTQd1WKgrC2webyfN6vh3bT423h8QFCPhEN8SABgcogQ1UGP9GKMF66hu7mtwp4XTA",
  "key1": "4dpfCPz3XdZbbXznWQMqd8tQWWWKBdhuAwN2kmu9HviKUR62HEdKV1XMM65Mk1AhpStY6McmBHQScRhxE3Xjv1eL",
  "key2": "3WJYYUB5pA93Tn1nVbS6k6WyD3Nqbf3dCBHqkNihey55PutbEbD9xEThM8CSiNCBNC4J9RdiaZ8uu3FPvp9eF5mg",
  "key3": "2hFuysxvasmwedjBGKdf9ysgwZymHtdjQMtB1f9bmPhsEbD7yGr8VZACLgb5pnVJ2QimU1F4qJRdcB3XUPWZ5gxd",
  "key4": "2QjiHnxecHHfjtc4FvYNCaKpqRjKAnAdh1FpzeL9twasdbRnhYdsRFJtzL5XzUmfeaWVf4sSZeioCWFVj8dDao2J",
  "key5": "3QRWc9TBSfmKnfi6fssuVpwxpzdcNBXwErZ4vLSUH8xqvrtUzWqnm7BWenbmzoFk6toWe8SwQnwu7ZmeFzAgwyJV",
  "key6": "2B4qC5n5vjt8x9dzbqZ3T1oWj9CN32XdR2sAY7CZJTLn1jkDXBg9q6u323rrShves66iZW2wekzY43TJUTZW9ak9",
  "key7": "SqA13EMAaXn3zWgWwyc3Kf3uPfz4QKo2WFgn3Gh4rSfqdRECR4bb1ndRtsFsVuXpbPQS5iSfKcGRUuHN1m4cEiT",
  "key8": "391Euxieb2LyAqjEoiYTVjdhUMv8kNCuU8ASkQWvY9BR31m2G6j97Jj6wjXm7ytjDi4zeMSjQjEpNWBi6Nc3PPQa",
  "key9": "TsusdSJW9BHyxMZFymrRMBAKwswcLMsfBUK7TYePJxA8txodHTrBLaspLSBx9ZZn1bJqNpYGv8zAezWGRQvzY2K",
  "key10": "UHM8PSjxiz27mPFqiRKR5udemuf1xJSW3Vp7qgr2YBpkVPzbW8cATmFVtTW4dkrNYhv5ELLtcdSbRNTRMqtowac",
  "key11": "2to9kHPomFiBJMe5PuPo15urrZDZQdQrzZu4hxhF37DhdwfJXSHFQyyXdqjzCYQUnapMjbB4tprSb9RZ1ULjLz71",
  "key12": "4PitGbDtcxX2V1htZvcW4Z7mUEM8GQAVLAj26Ln8KToXTX9qr4nGFjj4LFvJ7pzuNboJ2yMG3Y5PMKUcvtpzBVsy",
  "key13": "XNA4yZzbtdjoRur5xNV2Bor8Bgo4JoYpZDS6LkyM15ebjCj5apYoAMsyhS8ve4oCvXUsrwhBpyvn6a6xFKRk68B",
  "key14": "2iAZEsiHfjRYYaqJw2hShNKZssFigjhGD9mitJXzyYW4e5EyxPL5QXpSCxCaDUeH3vjsY4mxW8jpHgDgndKeHUhk",
  "key15": "3jUeQVGDC3bBBFVCiyT2xGdNngjrL4i5WaPwDJvTm5BVsLpCcfVaJ9ZcVmiPS9m57nY3mhp8AWVZVNv3BgZTh8RS",
  "key16": "2RTeDC71GHVUdBcotPgcMLmsnTHd6JMdjMFSVrnh2S4F5D5RYCJAQ7YeYHrLw72sHPJjfBvz8ftjQXjZ1bufmG83",
  "key17": "2T7S7m4ZYDwcnYSHuA9fV5TNZoRBNzJNNjqpEvFCs4cq1kdeQR4aaLTogentzmM6yXvT6KL7RL7RaknejegBwRwg",
  "key18": "41EDMy4q7Cir1EopALxrkSJsVxdishhAXhjkLFB25gE5egd48pnEJerYy7MdVEuL6qSNiHoLzYUshwdHVGhJVLSz",
  "key19": "5XngZQszsjtykhkLFQgFwrPfrqC5V94pT1M2J6XTDeDZ27ZYEefTKWGXP7JPYQpJ8eLVsGQ3ACQQcSczrLiG1qDq",
  "key20": "5qtPeXSzQnVkPtA226LVmLVvu6NYr8sqfyww47r2GeUUooBJjEacrLuKYA6gzGzmHpi5zSm4TBEtFubnLgtV2NAu",
  "key21": "586kbaB7R4Lb59W4hZ271iox3fLrum1RcQopKa3Sr8GsbVYFQ9z4DZKFUWjve6kXgFiBa6c53xuPeoZm66cVC8gF",
  "key22": "5vYeHAbVydNXPvjLXTJRV7zpB6f9JoZeguxbVvyhxvYhXYpWG4qNdbtxw716uSBDbKf5Qe2E1Jos6ZeVM75xwGfB",
  "key23": "3My54T6jG5C1HYGnKWvG2ZERQSTnkyNpgyZU2b5iLJE3HocCmbnRbMmqXtyEmxGbuqi7GFR3GqvgTrezwsjLKQRa",
  "key24": "KxmZVXzo7UfCnzF9Q3vBpo3WhPdr8UTXRWynnGE4TRMHb3sBnqPeoNqRrzrLzCxAKPicnqfJA5rvZt83NpkWFkX",
  "key25": "2nuyyroKYxufZuhXfaxAxZZx5S7Jc7YSbDFTpaWDd56FPNpv2WvMg8PAsKFQENR85B3Sxnei1EuC94fadbiZwUEa",
  "key26": "Lacy2sqc6wpwZ3Js1HAbhExWktdDiNB6uRF9J7ykJvLMWDn1fkP4WovMcAxhUz26ccKX4cpGoGQ4xmQJsMQp9rG",
  "key27": "3drWWJ6SSxxR4h8t4j5sYAw2D8TJ3vu2H7GF1WiiSL8QW7aADfSyzRsRmf8xkNiGpd6rYWLHZfN1ppcsvZtWEPDt",
  "key28": "2sNg85dUMr3saz1eEmuPEeRTJSRRHuzMWG3BhSk2D8cEtRCbbYwZ8VqFdu6UazVzRxxFyc83VVdoukL3HcDvCuVD",
  "key29": "3cgZ6ua5sEyp3RS7nydL3Rp6kP4gbPy5BF2eWzAebchw1RByo4Af4yTrRdsdyXPw8xwEhXCx1TNoGS9bKpsWS2ea",
  "key30": "5wFfQaLF3Tdt92JQCREJ64gDHNfBkiFuvpHB7ipcGUAx8GwfZHrivrVDotdcc8W3Dtgm6wXNxNq5cRTRoFZ4HAjE",
  "key31": "2Azh4xUaH7EshZf9WREg55FiWTQLe6kJWHLd8Kw4GrGb2v1Xo9mHDHBYsWSkPPHxZTEeqMvqo914hRvmSgm9iQDw",
  "key32": "23ztsP1uW4gYbdPUbToAyHu8j37bK2NHU1hUzbDyViuj6rnxNLByueyVixZW2aikuo5iiDFWQp8z1PidWsfoauKg",
  "key33": "4vpTvSWBweHEFbFDFwHbfGNmNG5QT3rmTF8rCf8iNy1Z42vviuN1WqaWEyanF8vu3vbWPAgnLLnYXs2yjrot8thD",
  "key34": "FWg4gUZGsiHTzTX5LKxooQFSL7XM5Wz2CLUrBFJXuwNZwQtKquo1Qj3K74MRMGBzSUk5SsDGMT8gUZ4jtujTT2N",
  "key35": "3B8Eg2cW3SXkNgKjJqBNafX5Zovpb1NW5ks7oo9ZaXAHQtahNMHCjY81DxXVGhm7NzEhiEzansBANxTPiKSGpgdL",
  "key36": "2qaRstSorXRzrdBzQcqXP39u97zJNuE1PTVPTST8K6oxi4RGWczwBV7nbY55KsFywMxQVFdzoVn1Tbiur1GAZvE6",
  "key37": "4mQWWhtnfYSJgHgs48Yn3HV3XLWBTkD9wgGQ8F9QXVinJEtwbgJ84ALTGMtV6Umc9VEtX1Tr6NTfZJQAZriwjzD1"
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
