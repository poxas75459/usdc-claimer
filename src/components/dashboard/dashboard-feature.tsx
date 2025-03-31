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
    "dUAd5KMXjrfkvoQSpXZuL5mc59WgSfZ7qUpnGQYo6YN2qCmMWdBgs3TPixzc2PoQ7fFfr8q3dd571PNBxAQT955"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGcr44KMCJjNbbpU2a5izug6NBhBVghT2GAgbpqJmoEACeBb81zCH89QLstRJ1cvwMXVBJz9CWb7ZYFE6MMfhqp",
  "key1": "3n44xsZaJpPEtD7xu8o4iiaHXpHtsabBd8w4As6odanoQ4kdAH8VZtVgvmfuvB3pmfu9AxckEmiEnvnMR6uaMSog",
  "key2": "CoFvajNSaUAiLZv7iKocfSCcoLgd6YCn6DzqJiS1UeWc5AxcKeCEzqaczHCz6nudQtPU43XDt6GRMPmi9Xp8Nzz",
  "key3": "2wkS875JZr7s6mc6ZzBXsAcXbVMidJZdKQfAMEZ8rcs8pkW87totLgfT8wQJZwz35CSrbfYjkt5KeHoadvxpn9vc",
  "key4": "59YTLDV6uAtmpfWdiU2FQiA6GtScw3ZbKJxhGwHSzcpgzEtxS9GoqvyBsrkKPVFukopw2zkWUCNJ1USma4o6bFHx",
  "key5": "66rYv3FSWV7PFAoTHi13AJ86GX41h32UsXp8jJ6nBnHYg98raUDQjMWPKz8qj1W6oFm89zJ9jLpN4tSW1Narehn",
  "key6": "2pCE3FRaryPNu2QTyEvURHQrAg9W7CJBXWtk62cu1GCHT7vNhe8zUR5HafPMx4ysVFnqpWaHrwEiGnE99g4LuJwX",
  "key7": "4PFACfmkXhyVcwCKRCynaKdCWmP61x9WgY25hm3rNXYRXaqSvA18HZWwAsQAbBupdw6vtDrz1qcaQoa3SYm9TJ6D",
  "key8": "2MxrSJbu6FMpqevmPbJ3xPvdKawP5rSDPcE5z2e9Pj2dRViDwArsoheTwNg21A2nm83JEUF7t6BzT4gvYBFsKU84",
  "key9": "4whd8AsNQsFAz2F8wSzN6gzbjmQ4qSv37gnjYzazB1H7mwW6PwauQ19ufdh3naNFPiRhTbhphPzWmGCtq1mKMuN6",
  "key10": "4t27N6fJ7xQEoEgRAvQSoXW5FFCwF8CBb1BP4XukhWgQmR5XH8reBCS1Tn4EQNdZJWAvNstMoqoGm5NhmaudEYXb",
  "key11": "ZB6oNhnroD8GUSEAE5EN4xmn3p8AvwGoXX5mmP61FadWnHrCxP8Pp6qz2idtNTYUXqpVYC84KbzP7WgfdfH2Skb",
  "key12": "5NX9X44h3T7hqPjnu5iCNT2GiXZNR4YSYBx11MSdpSeqFZ9VCtJxe3C8eKmd1GZhNtkvZMzDDWSp7YnbyTmxiY3i",
  "key13": "xtuZ77e9mg3qPdvaxGeGoagJSRf6yrFoHAp8Bj5TEwACCxpDjhobcyM8gsRNsksXJxtYQu95EanUM8aPUi6vb7c",
  "key14": "5vfSqyshzmUMnB25V5ZGaSTnVCub4mows6xEDzNq2W5phs1LDmVc7GVJhyZ4J4fyLx5Kj2FAL48ggMSRnRmVACPV",
  "key15": "5iD4mEB9QS6gzfH5kwLGAHe8VGYM4FcCwMEBbTMQcqskcVTT6WG8w5JVRKzPxCWC1vY1CCwLfWdgHb79EHxohFvL",
  "key16": "4aFFhAMcHDfDuSQbbAvycJjyE6BpH57D84UnvVps8FgwmewyNT7UHaYGSs8YnnbWsBeQpHeMNYpfmrPixt85Hck5",
  "key17": "2Yx1QgRbLAHDQBJDkY15fDHD6jAbxTQQziMwpC1UARtVopqeKbGHtCQ12m58uXxy5g3cdzS6h1AVVGtTdTZ1Gufy",
  "key18": "3XHJqKVb9ivKmgDx5vwXm7kk4r2pht191MPnXG3sDcXFWtBiq6oYxkLdqDEEbqhZ7w6gELWgjuaNkSqVR1d6oPDL",
  "key19": "4chh3FpcWjxzBgoe3fN7xkDU5xc4kNVd6EstPHzPA3nnKvWxaK2FqvGJF9pcW21ur2f8JvaatGHUctdWwWNfvdDA",
  "key20": "25zvYs2ux9LosgxQq7zGzNBwR7reQL5Gax4tP1a66juCGFWsA5ZFut8v8QnePu9nemoXwDHXByjye1jEMAYe8m2d",
  "key21": "A3yCgQPZcs8b137o8Vm1pUN2sBXs8ednf5KienJxyzkqd39YFdKAog3CfnV98kF8L4XgKrXMfCpyifgydzC9ax7",
  "key22": "2N8Xbxx8LLt624jGuDrkzKnAdtDd89JFQ2ceho8T85kgcoJqSFSYTfZ2sgZ88jfQvmJbG4wogc9J7uQ53ZhyhNt1",
  "key23": "4MQ5s8SuqPhEoTmRJRVXehiTKdrDdputyX8dtRfHSyvLQZ9S7FjZTfMShtWuCcURZ2ELwoK43pCT7VBSU323Wpc3",
  "key24": "3n1rMrfYCxHHsop5TMHjb5zi2YLRrAiPcfo9NyjSuY9zgCzFukavxYbcVbgXjrXx55X19K9aqSUx5cjhjKxkonTR",
  "key25": "3yvQnCPrUmAj6ggoEWXHPZyJQgJphkitmrytBubwF1VLX36cj73ddMEn9FCBkMtYQtKnCF2ETiaAwanX9Ucncv9X",
  "key26": "5V1Zsf21eDaQgumnPEcvyXqWJWcSu2smDmqF9Eod4BZVfohcJL9LrCMVJhvN4MrNmKYy9uryNssZfzyWLGWXrhQ3",
  "key27": "3P1zdcnKjLa4bByy4N5cQot6xjUc2nwLzVWV3qPWDs7cDciQK8yoEKFSA7CZGWDULZxGAtGuavnEKhc75u5572Md",
  "key28": "34Hc7iV5eDbtTwvQVFkQBB7ahbECcSg4Qt6Uc8aC1zHRhqQweSuuGGczqj57vP18YuKyjJUksoviRrpoHeSNRVpe"
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
