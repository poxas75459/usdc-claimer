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
    "iXXnDMfm3TVtsXvWcdNFDweFJhMn7ufYCM6uMpaprRSyH9Dg31q68icNwFpoeybpVZMMuzzaPLr8gY6eZg9pAhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usJih8ztjt7X4sJjQzAY75gw6tFzYBLWbMrfPsepsXqsQaDtMjjzo6rrYDXgBM72iatB2QLQvCkXCfALSNjArDg",
  "key1": "32gRQpQK6qNc3Srhv3rE9QYceiQgNYfEyzDZMX6ezdqmtWNjb7p6CLWvVp6ymrmcyzAK6ePfrAq9iv8UFMhTGA9y",
  "key2": "5kFEHZ2VrxdT4MYRRDVFVHwwdiqSFhf6DpJcdx7NgV8w8werSgnx39g1Zrn1cDHRMosKsXDe5EzDA6s5tgAFwWtj",
  "key3": "5eXrNMBwihGrAz72tqgMvJNvsHAeJrj6mPUhsAq4VBd9vkrw7B3bdheoohuxc1PLY5wmhREMKCiPFYUDxL8vt9qE",
  "key4": "2g4Vgq1SHUqswdVBDvkxbckuoSCaQQkn4crvzigaGnAh5otQZDhAE9LtivTFE1DCdyH9ogZic7anioVv955PAHiS",
  "key5": "4meWuRqrcexY6dgBKpLMUf2185KK6zhttg3PgqJt5rdTAVMjqhPqhQVxQ2mmPYeNcrTca9mKBHmVXgzw8HncwpdD",
  "key6": "BZkCptxg8iBwKBqmNcaitqSgkVrqKBDD86J2Aqdc1V61efNu9FBsScZabMcgw9tuzBhRKKCkhpEvzaoenFMxjAd",
  "key7": "5779zfBKw9BEieREsipva38U1ufr1Xn1BmPnUzkJF3uPBVKvPsdZJ46KsfjYbz7zWP2Vy1o4np2ALjQ1zuryHiMN",
  "key8": "5jHF96KRUjREDb8mB3E2zvo1PdhBMMusNiNLv4CfsCmhyLXutW8Mu2fMPkjtchHtrZUT9RiGtEFynytgdkTfZ4ar",
  "key9": "4tCxkz6U1MFvpoz3Hk2WPo7iJgo3gxGyaKWLuqahCq83VM15mfQPZBATDDoMgkr2kFJWgjTaVouM1cJc1s8QkSWo",
  "key10": "TAk7UhzEaUfSto5mnpajy6PZi5DkLDGHHHXgjjZMLbxaZZi7UgXSweDnTy7xWgM1dBjJ62oWmALJ1fceBBeUFjZ",
  "key11": "vS6L7sLZKSdtQRfTmURaU8bhvYBYEdxAgmmZnbZSYPWNMcxuUsaxrpvQoa1dEtLfmtbD9uvsSe3qJcFURk57mXg",
  "key12": "4oQnDEUkSDfnyddZUrkdMpd6sR5QZjL1awHvyMgDp4NRrUcPausKpooJ8YgwzQb7C6YEGCVJkBWcrhuRZojxoPrj",
  "key13": "4LAyQY3Fjq4pzNvRrpjm6cB1eEaSqXRnXzKMQvhvRCdMvT4nyXBWPTeKfMNRoJiXgJ7Br1WqLYfRpFoVX8tQFSHT",
  "key14": "2gnQcRb1gcu5XjEMnL1ieXUT73X3Z1Dsou1bNYz9RuNMUSouvHszJ4oQpRm3oAvEsRxNLEySYFE2Quhw527K4Tct",
  "key15": "D2ceYTv9gmXRKAqGwNKoNU3yrdHdkLsRnsXBPPVMQKrqpa4mATnv1Jubpb6so8sf5GvXsC5Yj79MhSidGZok2r3",
  "key16": "3fPTSxdst8QYtjCJxoai6225CFkZyPVnCLDitY5Dp3DHe96fXQynoJ96ZNvn5Q7vhwunRmqxeEJQLLozWSNu2kP8",
  "key17": "2nbAvQJ8kajSSXwH9TQhwbBekwHh4i2SsQDjquawtdayA1HnyM942bqvjZ6vXsWCxzUx5ibsbhofGSFmFiMV7FEz",
  "key18": "5dudDCeMpUnGDtTYLQ2E15fFvYdZbwRX4xzdZc77fGRc5EcZkptykdoFaVNH76gH49xQRdZHQmvVXjZtMFmLxbHG",
  "key19": "5So9pkWgoN2D2AzQPVpvJ1kgvYdynMPEoFiCFm83cfUtpWeht1Uf87SfpPTCTotVrR4TujhTn5YyskcETsdt6rfg",
  "key20": "4JTcDbRVmcGDPX2Rv2h9uhRCyJFeMGqEHpcVw3ey5CkptuAKYHAaetra6zTe8G3djjPYyEct5pxeEbNh3gV3Ch83",
  "key21": "4Fa6Lur1UM3oPU41xwTe72jRhYzY8hShkrpahgKZhqVQ1z22WAEwrUECKXxh7JyXVvpAKwqqncuiaN2SNSKmiVpG",
  "key22": "3uM1wybmtmokRmJgLbi32HVUSrZBtDLRUNNf5EPHMNBBjBFvLGJn94ExiAVGnA6ZzVQa2GwtAAtSjVzhvHWPjxF1",
  "key23": "597Rmb3AjEw6Sy9Q4cXcmyJheL8JRe3cTotXxh2zocBQu141n4Go34ULcYgRyFU6kXreUbZFg87ChteYgbZejWQp",
  "key24": "6xxzdWy4LmRjVC2bQ5HdPnABPXU7bPWheh5Hwn4FUPJpEGxWGZTAKPzNxixC3hwUK9JQ39goUA1bxaqAWzJHWTP",
  "key25": "w9aDG3KGdUtAnZNyd3RxoLyfGttoa7UHRJU3BzaJY5zJNhF3bkhjVgybXoyCVjCZBtrF9cYZwMqNCivEv75WY1R",
  "key26": "2SnHdxZCEfYEHco27qoyDHhkfQH7Xr2pALBJQE5eofctWdhBsoY9BALjfhgyFbqn3asYj2bgmmPrFAX4MR84veh3",
  "key27": "2C8A6nWLGUkiZk7KuqPgPv7qwxVGGCDNdnFqRQ53MjdJTFQpjLaTokmJoHo6UyBSZN3vmAdbiPLQxNDneMEboW7g",
  "key28": "32SAxbHTfKEKwCgt8oHwDyvUNmu3WEH7b5H1ZCUdymk7KFs56us9EjRUtahQFKxEjkm2r4kPGbVk1H1dePTWoGz1",
  "key29": "25Aro23CwEUQojHp6MgTFr1mYoSqnrFdT3384DhdPTakPchgTLRo296hubtb2aXxbxRk1uXYnLW5GfmnZV8UwoRd",
  "key30": "52XooFXWhAQNiSAHUwFn51hxEcbzD3MCaehYw67uwyQvCPxn9v9vg13QbzGzSEBguGdAMj8371tMk9kALC6Ud9mW",
  "key31": "4JmGYVsXp4BnrcYYqTcvQo5GgobLT23oEFZBZAGfGrFLpytyvVxapFD737NHamSUo3FeWwr2N5mqjq8Q9QTDPqCC",
  "key32": "im81WCEMnhrAnUQCqqytjgQXkPDTr7rk1nRaeKUubTmwUj84zs6qRaJUrvuzY9GrNmjViaLEA1Fsmu2VypqJCGM",
  "key33": "4x3usXrcZpzXM53LVCZ8fk3qf14Hapb8qvXmoMTRizxzx1QvcUc6cVdjWdKcydpEzj1UPjrZnjwqcH6wNUXCA8Q8"
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
