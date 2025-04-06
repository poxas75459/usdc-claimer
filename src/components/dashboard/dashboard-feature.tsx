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
    "g1A5Rv9QBYdZ2ssYcZBB32bf9KKtonvUhQj6qBvAV2ma7YEdyuKnhxuRCu3ksHSzMrch2wuGTjaL5fuuCKpHm66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgCPCp8pnoeNQbNGb1ZUTcR2mvwjNpGDGajExQqtzPxBxe1eeiKAmdANSnGmQd3TM4FZzCLLCbr9epcBUdABKnG",
  "key1": "3AXbNHar9SxS4UjHttHoiWqgopywxUhAhESWK32oTU87CJ2wMBuoLRY2ARRqURts4xTnzpVDsVvkEdtPgHB9Q1iB",
  "key2": "5SzRsACfQY4tQJsTKW8CNb9CpG6z3TbvVVpMmEpakc9HUpjiSikFptXxTFu7RoXTvBFXJra2hYskPwRooq4tAwPW",
  "key3": "5ftLxMLaowqMWuk46frTXswm9A9g3HWEpPKViYDGETYj5EAtUUFmbBHqrXDAaCQyL93ZBFKKfMSY8TjdP9cj8w6w",
  "key4": "38vHst5UuRbRxCpCh3nGzBa9dvU8ubh5YxZPskfD8yU4ZzysBvw9FWpMHkcmDBW2FUQyP9D77FnfrX4VjjzRnAUW",
  "key5": "3WuGKF3V4iBmec5bLE8D6ivxV3CPzMcE9xVCWKuJRoMBQb4szb81S6WZKCXEugsX4YFnjh53jbY8HbVq4QU3zAWs",
  "key6": "3SnEw9uVKnFrUzbPE4KoyPA1DVEbKKY8UUnRXm9dsWNjkjCxSH2Ryiq8TqZ84EzjJSCbQFgvWFSaV22zaiToEC8V",
  "key7": "5n4WCuRwM2yX2pARj7Xqc8q3LNVLudkJpmwe2q5kCMN1sQUnWaVdbhcqLk1Ganhg7ht9QfAHLM66B8C6Ri52ehFP",
  "key8": "2dkX71XrXvMLoBSWHUZ5fXZa3yQRQKN6HA95GwmdpjhzVRYoqVahAMn8PCj317dmNB1gZRFioM2jXYAV41NYaFBG",
  "key9": "5WSJqA7n5PGvYfA6rwdjBdKCakYhCurzsX3owamyTxEyjNYxWvBsfQs2qB5dN1e65asQrvassvpQfndvBYso4Ugj",
  "key10": "3cQZ4Qs2drMoMZmsUd8a3W2qDWyC3Hqh5fRxfsJWCNcoBPoZVm244ZZ6u23wjhS2yY9riguCySR76gbp3onxswk7",
  "key11": "3MDrthnKcbhcVFgrP1eg4YoBcc8dpsd17jKQ4z9FrMCurJEa1ZLc64aPEHes2juyHiifgPpRcfERArgovxwqfqn7",
  "key12": "r2Tk4G7QPGTmN214EpHSzeKYYVWPcrYVjGWtmqLHDYrAtrSwvk17csSRJUq43c5cwJ2q85oNUFLqFhM5DMGgn8k",
  "key13": "4BsmVe7gduh96tkzNYCuey8zLzh3UTPxuvhkMJ53kHFbbxBvqd2edCVhL6oa1MaXMKLvE8b33zY2Moo9oj2pDYGC",
  "key14": "5Wrbcob4pwe2mH4YXvZQVKCqs8ADb5ESx2g9vJq9881XfsB3he2RPZSu6FHWWM7eMZBm7cSMSC7UGVg5HwXdAPUP",
  "key15": "5vaqvF6Rn9V2U3A4oNFva34Xi1KyoraJhGiLHNHL8fAYM8dpYtUNwdbznLY4o4gn1v8A5rUca1iphbaoteAAMbGn",
  "key16": "5mGQmuFv4Mwb7ekMJpxjvpMNwFxk4YHvUCZEtjN4WYpseZHuYZR1bwg2csnLsfJWgus7f314jtdpUZvYsTcH7BVj",
  "key17": "5mM2KPQfAqJipwE2qiKmGsrprmGz5PBsQqJSDoHMC1gaZ3LyeNHmKJ5PtcwK35mesnmkvfdPaGXDgcLoEDNiV5SC",
  "key18": "3Goypj485cZM917ME2XytUD5BtEXcNMBVcMjBYpbug5HbxtwZWQ8Doe8VZK1srfkn54ZEN57TPhRx5dRLBqsdM6b",
  "key19": "3DbSuGgbdxysGezTMoFc9qwx2DRcNjtcyfQAmgmnAEiiQKbGXEH9ivixZZCeFwyKYWcigawHjsA3AmmggSttFLzf",
  "key20": "2URewZqvYFHSFFLhKDsfK324FGq8u8XLpJgMheUU9G6PHnoobGWp7G3YnbdUEqWmSSYx67wBArTSzCRZqFWbGtdK",
  "key21": "SibXiPM1XwUAUaDmxrFt33u898CVa8hE25tTSLEkez7Uwx9vLE1D6BHFZLJvZsoWzfViUWqwjNX5Ushqne5VGjU",
  "key22": "XZRqRnNnjA6RREyTwcokC8mJFrsr1y3VoW5a1fPhFPjKgxcDxzWVza6QKsAp8abayAzTfoXWkUUS79Vg62V1EM3",
  "key23": "5aQPTyNKckwKtDTey7Dk7gogPaJiiMD3GELG6TvSCU1R6942oU7nKbNxKdYwZT9vxknMGpbuCnin9rtK57hYmnth",
  "key24": "56wDnDikBAejF2EEf4s2vHTBVfQhaTzXJrKcbjEsCfVGVdLbg6sWnjfPtjkwFhkK7nTf3L36vbbzW8C62nsU8Tqi",
  "key25": "2MB6qepyiLgEFxvrg2Lca2dzhvAungVLc98UhpKYWQgNUEYYmf96xrxUcxupPhSSwhFFxzcuibmMP2xkU9stGFhu"
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
