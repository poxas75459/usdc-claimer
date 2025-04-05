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
    "3kftG3GgJXri8tX2bjA4GTqqXJ1gGdEFVM9dYWubrJCSegWcdUuLU4bcbEyPM5877ngZGc5npWgCGCrFrwqFsiTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DqcrYN1yEev7Zs7WDCtYFGio7VgCb3nFXa8ptfuzUpnKZATPEZBj5XrGaJUYgiQEEZJvo6RacgSDt21DhZGKznF",
  "key1": "2FM49Be9suhgQ5nyoApY2jfzmsNLn8xbmR1eVdtwMKJyd5vkfXSc1zRE5WEKn4QJW6jwBoRHcV3e8VRXJiuphW1E",
  "key2": "4eMDqGSbGBZrDdc4ViXRwk8rBLYn6uBWZXgib9ZTaqFSMDhty2aFU95GnNB71jZA7QhA2RgGXqY4HEqQ9gFAWt2b",
  "key3": "NRK5boT5f8aqgadWKZjkdKDfwNGWyXBQDqeQgomZa59Kx43bhPbpdbfEAj3fukJoS6DdPLEhVu5RFFJJz2dmZjt",
  "key4": "5qDNfe9tGAALrKn4KXMxwoFqBYKYTFXnrMhzuCwJ1BXvs3LdxRS1rXRv8RAHeQhCHR5umTPYMhuo45kstTz6ANrJ",
  "key5": "2WMqJpGwvVxrNMBKFfFzf7xPy4X6EXpbSx6QsVmrcPrcLnEJdqWB5MoHZRgb1cBayQvTyRcnjKJcoxrbu2CJv2xF",
  "key6": "35zmtswEPRyjrFWrsojCSgvy1LSWL2dHufo71uDBRhPThDzD1a77YxGfn6jkeFbyMaeipngqXvN1add9DVo7E8Eh",
  "key7": "3JN4QyMXom5Y3HXaYJT2EagcuSrLTNMXrzDoinUfjwipD8hqu4bPYoxXHAkXECpKcgHwhuRhq61X2Uvi1ZTNqrdE",
  "key8": "3tQhJiXDgZSjLMdx7bdNxVmNJxtkRAwWoUALJSnkaTZj2coWKkGdxyZdUhXSCeAPU1fwsbhbyJJz7iYgwyHGA9cL",
  "key9": "maS5GW1uw9JMmEWMJvR5UvsabBCDdJwky5GC5mUitzZXVFABDsnMuzV19oajTbtCRK5XGkF47934Pop8XmUkTrc",
  "key10": "4tJjfcRKdbbequ5Xaq8VJoX9uZ8waiDpZnheDjxVHEiAswfvXNxD8rDnMwaXALq1TJYXCvptr6Yz6fpiy2Zd7bF2",
  "key11": "4SDJkTyisBNJYBbfprUJsAhFg2FdNgabVipem88gf8Dk85JpE6VbLs9mCAWZjqSDZ8hGSiRZNz8dAA7BLQznUKrF",
  "key12": "2LR72cMDWFx9NSXS7pWsGCM9wANrrDJM29o6MF3wUaHhDen9D3jV7HWMPgw4HjXLKe6CwCagogqcr2hny61ApyDd",
  "key13": "3J5UrBWnegVjEkcHqtZtHkkntnFqGb7rcyqoCEC85xHgkDKckVCqcUxzsfd4Lugx8hfCKgNdQ1nafWypcd8BpvaX",
  "key14": "3xedY2PU34F7x1Gbr9cv7DH5oJ6CTS6NNij3A1cZtbb45Uj81v5X3ohq4uRGrFFCB6o5icg47KLC91mrEAjoboS6",
  "key15": "4C948owXPesdCanUicm1X9ctvENpMJwhTVHwE2YmwpfhzdNzQDmPuWC6AcMPAwCAr7pbijHXiZo29QQidtj74PXy",
  "key16": "5rECCADm8wb4rEFooWVL1mqJTE7iV997Br2aGyMa85SSCmbFgpxXqSNLxzAeHacSSvC9fvPNQep9eYbF59GYvz5M",
  "key17": "2XWEee9i6Z5QM9UDs22UpHCdEYdNkaAS3twNBSEjK61BdkkG8rc1LzMdHiakzCFyV5bpWqfjyUYasuM3aigRV4tx",
  "key18": "5UhC3BJdccuEfEnD7fxN2yiYYWx6mriFewiznf15QYzTnKNK6vdBVHch7vanzw7iBYddFXME88YXSDPKqovxQsCh",
  "key19": "2q1hDkMAVxey26dwW74oCWBXVDXwbE1QqYwwXP71cQZJjQ3Xp6H7MLmUGHHJcpXV5PtLHuiMkswFGidNjNWbFXmH",
  "key20": "2hCdVXcaL9R6id2qNQr6aTeYgpYyYXohy2eqdERPgF5B8JGPY22y1tGA3nJynUh4uLzuCrNrULtVsHbQ29A7kb1D",
  "key21": "2r96JkZ4axqpQtPgJWGHRNpxq8qEFACU71eTmQdqk8UvA6oPzsZ6inTRzNnsd5oMHDC7agAoo4DUDrHq4cNrxjNS",
  "key22": "2Dz63hS5MwJmofBmWavXq7K2QPxWL7hRmRfQgHm6Unc1wxFZvrnHUpd8TS6ATVK2M2LGxocjTj7XqcSJcQrF9fTw",
  "key23": "2RcxNScRdgZqrUjXhCs8GvvoUPVgMugs3DynQRHjnr7U2Jz1iSvNY8kG93vKbF4AcGra1mSFpY2oAzpX8vFWeHD1",
  "key24": "3CU77cEny4KCHej7SV3CKiszGqSp7VwSWXKJHRnmJKQYLxRjeqjHkaSWCbd9tA6Xdf2BZqcnGwoLFs1yaZu8rbFz"
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
