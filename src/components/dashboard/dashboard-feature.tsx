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
    "2Zox4imKm4pjLUJiR5QpKyQneBceSxoDEgPqCoWn6rBL2rCkkxvxM2TW38SAq1Jfj14tJERZvsaCa4xKs9hDemsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqRwywxfi9pGN6LZGKofBkWSvTjVBu2tyxyJnZpXM2uFaWz2TrS385yhF4QLHBKBcLWnYofuqFffcyP7dXJ72EJ",
  "key1": "3XsaVVdgEFCvFjotnjaa8J4sLEoeKhdRcbLssKFowkYCTaDPLqY2wr1NFtQ1EctiwJ6q9BgseVEuq4pQStwGHjhQ",
  "key2": "2qNYKKcwjjBkgfAZm7A9v8ovos2PQ3xWBhM15JFHP8uPxQ7ntrBk2uCKZrMGX9CPX8MJUtJdW5gEFTX6WJpE8cR5",
  "key3": "4T5QGuFkde7EWDZreTx96BDjdRL8Yz94hajf6RFxUc7H7CZWJQkvjhhds425Gipq5uhZxaecXUzxhv1MxuGbhrKs",
  "key4": "2PkZGzV36J9ctzPmCgyZ51vL7T57QUuUe2z53v2brixwcpzbos1gkurp6At6kr6Z3MJeESkVXFGHKSXSxio5HANQ",
  "key5": "3fHGPkCWdthYJsUodtJUfPbPJPkTdYYtwWoUVBbGWB2ruMyJjSAWHzTyFy85SYVnqMxizt8zrmTJkhVS4Kncsqme",
  "key6": "zsmSha5m9QfuqzjuwVGdbjxDJf7ySFPmabq9rNyyhGeazy4dr1LHLX7FjUw9BvHT3njTiF6cNbmUpyCtSDV9VxV",
  "key7": "35WS9YtqpyFmwdB4bfcnNymUcESzVFqzeFXPvLGZoMGyQWW8KpEWx6DVnjHaKnhWSqTXmc9VzxTe3dwDxtKt1nEb",
  "key8": "3iqR8PXaDrMf2toWZntYTi45tpg91Y4rHa9GTr7qDEHgUfTtVYgnAVHpXzksdYHBTo6PS36fzo4kcgxgQ84PJEuB",
  "key9": "3GZ3Zbp4wr7dvwFyCsPspHHPwNsTG39M5vk7mMFf78EGmXqnez7ryYHPMdzG7WNbbu2wXZvNLPPSGMn7d61qXeJf",
  "key10": "5vqeKbwERUyUuQLQsAC8Hv7M4y21rNyJvjdw6AbezPTVxJazMWfmhsnpjaYwurE4UiLtGgNi1xA1hK57ApBPX947",
  "key11": "aR224cyZqRyz7MhKNGQFgfHW4rDqujMkZqA253aD1i1njMYPT7dDkuLYZJeCgzMshSAUoWA9h5V73oKuADsqU2g",
  "key12": "4dpk9vcEKjLXTLYBsRYFZi7baJ5ZyR2XmVYhpP2itJuNVTgxsn9oHX2d1vUX69gX34urmWnTnyNvgmyxR4qT6A3d",
  "key13": "rjPfqJZL6ekfjwMbhTLSMQXGRFVVLAPv89tkCit5DAX1iwxsAf7Z6YieTVScbyUHgXuisNvu6x3Xq7EbvjH3EN8",
  "key14": "4MAAaBbUHfy5q8Jt3t9cYcNK8AB5FcTvxzvX8senVdTzNsea7EMfYrC4oNjSkXjEN5HHE9oj6qAj4k6Zzwv7awt4",
  "key15": "2Cz1vqHTUR7Espj9wDJNXj1vXuNkSzhimCwckubThLse9VQ5dwDwfRh7fJks8dT7kYqrZt5cxfj4hNf2PZQ5F8eS",
  "key16": "31Vxbe25j1f5WbtoS6pnufjrR6SjLurHhFfLUEWxeseRN63xNVJzDym1QZLJjZXHtSgkLH7twjwcubSWiJLyMkqi",
  "key17": "5BmfJBfeB28vtoey26mYKZNhuLxdsVvWJ1WEd7eVLJz5CzFhgySxMrtkUVrnZgcHHzwFBkd3PaociSy19mTMt5WP",
  "key18": "5tc9cNGGpowh9mg2dre9gAx9whtbt2bYXTk8N3GHvX4qNDX2NRrU7tMzCnhgtyX73af88GY4z9wJHhtxpjJP9ErD",
  "key19": "5pxVuJCydedn6sedk5vKVxjXTUL2ZhfyCrHuGRBMx342MAoBZWdhrrQU8nKsZ3ZtfkPwmmhjP6SX15ZZgtZVcWYS",
  "key20": "5ESzVTP8UPiSyTVasbu3W7GUtZXsKYfStRsC4KqEHdsEyuQrSmX7RUXhuWkW6rWp4zeDJuwWuZEuG7rt2eP91Lp",
  "key21": "3YRncszUoh3uQWTuZKx3JjbSmztaUwgWtgQTe6ZLPPzaop92nKq3LaECXZSMjjE9kQncucBaedPQzHqebSAYRzFU",
  "key22": "5qUNL6xwqrwwH1DCRmHhDCcdQfe6rEiVb4GmLLVeqEoxLQdXAvXErdKYKDK96hSF53BLtgaaJo5mqHgXRVaPX9L7",
  "key23": "4YQ5bFZJzN4SWAdSbgdgk7vcqdRJCumujzC4yvrAQaQ8pdK3m6Yc8VEWguWpeG8QCyNb5r7BwN6Uqmj2ckoK1EEL",
  "key24": "FKxYKWw1Zof1NaDdEn49vP7FNgecSKiDJpxY6J334uMJuUVBbXvNGKZt6tGVE7TPBV5cG6zcMVfd1g4Qc3fVJW3",
  "key25": "WUDmbfUm62LUXbuXmzx5hC2wL8oYjKd6qMEwKicCEXqjsngN1yZmiWL4HhmaZu4RTNbboF3t6aZjeinfNM77pNF",
  "key26": "Gn28iCPTp2oa27vt1grdmrBfPjHrf3XaM4PXtf2wxxsKBgU8QLqrUB6YnMVKKTpUx8wKWAUtcn8tkVTfaXVveo7",
  "key27": "3QW7nhHxv1QwTeLGSZchuSFoCEpmsNcozEtYZRRS76zT8dv3AwDrDiwmMhVng9WLKEofRyDnaBzpvjCJ9oD74dgN"
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
