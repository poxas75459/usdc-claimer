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
    "5Be7RD9x24kGkCotSUgjsxKJutvWoSDaB4T7peLkNATKDXQzmtw4dHD5D9rXc1AKqe55xpWx5Vph7yYqYDFGYnV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ToTxiPnP4oUnNHFCTFhmP2aLugNGaYs3oi9ufmZTyiGgrYL31UG81gcpwaeMiUwk5BRugZ9WqWqKdY7BSTVWZJs",
  "key1": "2wXhs4SRd2MG61ozG2RDE3ybKYV52AjG23ffyxahEoVdNohmXXncUjzt22CmxzFw7XbEn6DaXdxZB36LPqYWSc5h",
  "key2": "2LkKvqngjYjpHNBEHNE5QJUhUFB4LTaeN6XxMrSKtm5TMx2hVtHT1ud1v2n74gFZyAcD2ZHG2UW2JBxuWub3SSzn",
  "key3": "2xt2D3eD1cDBca8Ttds1D2RVYNq8w6j2k5K874JU5W2S2rZiNchEiKzaCzoMU6oMB4XnKwCaMy5FJJa8WUyV81qu",
  "key4": "2YNu9caK69gYY63p9uU2PJ5NPSp7dzNjHyU8BRa1W86xV3XRvGuS3rTJKLPcyPrgFrLZWqXaUVUni4C5nRJvDf55",
  "key5": "3kzHiTAJYQYbikYzLgXrqoCap8dVe2ARBGeunvRzABmQH7iVE3RtTqUPbwDu4feyCQTnVgWFniPi3U48BmfEDRzH",
  "key6": "2gzPbwU88mcUyR8pzLXaZzDiNrSqAxduWRAousCGFVYfvBAH1oGQL3c8vhwo8dNzFawrNZVSEMWrX4SpvCoFzMTn",
  "key7": "4u3SNiEwD5bSVzKp1bwjjmeTzS5fEVvihFoDGgj5nFAATNk7T7SxiSycRHvr2NUsFZxdAv1sDWzesAdh35xZoSyS",
  "key8": "21WybuRyJbVXC3u286MNP9nAuFHVGrkoJpLEUeWCE6Vq7D8ysJsEZrcs9tvMrRK74E3ctVSDsbpCpjGJhNHQdYCC",
  "key9": "2FXqg2gHrPMEJSzd3bLjsJUVbqo1in8P6KFK3k7H9SeWEnwtHe9v9ZcuEf98kKaJeAwgy8igP97PBHeAhqZkYaWq",
  "key10": "3iPAQPyQAEQGiJHo9Va3KipwtTddLQKnDVA5He7Y3SMa6NmSWz6ALT5NimX2jYDnRmZEv44Dc5P9rn7NUhiDPEKj",
  "key11": "2ka6CjQi9WL2u15L3VMdmgGDZVfKZtRFrPX6Meb41733C6iNcacn1ZdXswcT96Y4DKCMf6mw2oNgTJSq6juJgK2d",
  "key12": "5MjvhbtZNRo1CfHopU2g8N78QzuL2cDDkfoErKJkEdpqtEqyc65xjMjBVq7Bp1oyVhqSRgdSj7CDwuM5NFMjGiYh",
  "key13": "4RpTf6nJP1PTfkrK9zD1xTeATg7WxLyQKUo23PgPdN79BZjH5HFJTxUYvCnVLBApHi8wAYm98qMpa2ahThcrDbL",
  "key14": "572WNJQwbpH6AnUpsYLpHQu9mTLTkuf4UGeZ4QjuhjknmrnmVixuaYF2U2Cb8XgKaZBq8WxENRCroG76hr35vbeK",
  "key15": "5BMzBTz2tNgUPC895Fd277fjt3dy4g3VFJwAWo7uNk1Bkwga5X6dmCeYVNHXD7QjqH3KP2tXfnVCB8p9bYMP6bUn",
  "key16": "P1LZNFzCYBnnWETJUvhsuSEb4jGPjicygG8AScP6NByYqHvqPPFpHu29FjzVzAMUCpveaKgHo2RvfBbdZt55tij",
  "key17": "3MJWqDSRDyMSKSp92UkVBYugr5BtVjVRg1of2D9XbYpNWMcqMiudYdnZVia4nN6pr8uG8jaHWnhtj3SXhPde1HdL",
  "key18": "5pxZj8TAa4gKRzbEB4BFunw8wyFxgSsivDNxmxentJtdpn4KtiDtXMEXdd42xhYBCKAf1a66AsYwRDEwa6z29MGe",
  "key19": "4vZxwSxd8PmfPV3sna1LXSQNG6RhpaQyg4Vd6kLrPcDWu3Ln75jkeidkyp2BizXkc2P1DhrNppoKmTRaHfKtzUaT",
  "key20": "4JWfGaqcM6PVqTVn7sQALbgAQXe3LkMvHGf4EubJEH3f1b6pD9ULDHi5PERWLPk8wkrfFnjVUHVCAaXJULjd97qe",
  "key21": "5fzj7sipajQPFUu4kzWToFJhHJJkoQNHwwctkWkKtxJxgx6TCnB35mLRZwFEJ5hv26KSme5FJuNzbD53TLeCgdQ3",
  "key22": "3VReWJidSi4ifR6Pe7LYCwmRnPU61nDdDXzuA8AGyWyzHWxQMitNvXxp7Y4ppnkLEKNRS2jeo4J5YyCHEevsgVoG",
  "key23": "jj3Fh4u9osU5HqtgQVh5mW9Y1stgszSAqb6DSYSKgmqHUq4vU2AeK3bjtVcRCdNCHGQ9iJrKQiDtXMr7ta8ttPn",
  "key24": "29UNcFwfpCCuJsknyc8KbTnbQZN1ZnNkHNbyjpKTbZL6NjbBzV7VpcHz5bv65zRZfoTR2hbcA9sZfbjRfNK4ik4H",
  "key25": "C39fsPU3BmyugBNWWsMK332JWcMb3PPr6FBwjbyjRoHu8ARQxkcEAZv5ADzcB6TGrcUJepZqrDAyGy8QhKf4vTi",
  "key26": "2JNeprQ3PMVrXL3LMtZ8qpikAxvzgnCmyWRZ4kfe9Qsps1ocLBzUy8re3MPY85wY1iQhWNxMfkAxhsvHojccNjNE",
  "key27": "53G91m2nqYBqVqLYe6bDbf5MRB2N9wHC3ZQsnsXseSMPUMLvzHMivbvU5nELBYizQnroRVfAkmKzz2mEpebrir7c",
  "key28": "5JALSFfzMP5zJx9VSAdTHM1VJJC2uUaJWcvr3F8riSxeDtPenm5C5d7U63C1TcVH5FVapbuHm5kpRoWsjFdnLh71",
  "key29": "3aqabN1Qtr4xWVxK9XgXCdPdgA5YR9ifotLFnkjzUtHSjATFTzKaYmDNkmMc5MYtDFrbxJnCVWmqH5CZm4JUxXuK",
  "key30": "q2NC1HCiZpZ6VwXvTgd4K5yknQdNqYUTQEuqkGQo87nL6cM6DdaKVusCX9LKJEjyKYMtkCg3rYp94myuV98PpuW",
  "key31": "ACWHbqeRD7MfPE93ygt7GjzgbHMKK6UahC8HnuhwBAJHbVZRXLxLUNUVkVTsW1ygiJRyZHajPmKP7CXR7tw9YnG"
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
