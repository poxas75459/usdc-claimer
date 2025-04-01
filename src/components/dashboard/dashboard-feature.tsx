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
    "5Wmsb2YQsogQmmnRfRzRsz1w3ZTNjsnh4hcaK91TyrBNKjZqzB1t71RC1XCy545nzpnUd52MmDRug4X73tQvx4HB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZW8dWxLHUmuNCyMNM2PdyZRty8kvwaoYqyViEziJ5KouuHitPfDCCampgToBhqVxs33NgjxF1SEx53DmVQHAQ",
  "key1": "2J34L7k8CkkD9homXc713LoYX3TWLpWmXr41nys8bNfcv2Co1idtnJmd8DP1kvPd8ibm6a6B6o58gJ44cFXsHP18",
  "key2": "4GstgBkm12V4MwK8Vh9MLhAMbfJzY6hJjXkstaUeVRxXwYzbSuBGyQAtG9iFUhJgHMVFSQ7UbaDuzh4WqUiKAxtH",
  "key3": "2gCGmZT3jZRqFRCyjbz2FxQuRNjoS2MgAWXviELQWYxjWCzopq7Lg6g5ip7aapf2iTfFyuCpeTA8uUaPtgrFxar2",
  "key4": "CKxBT6rfz1iVxsNHaQJcxBvC3A4rZUDsT1XxfyMPikd66zFWvM5PcxHkzYG5Qxq94qBPjMDzPhLWxyWp6xpWXRG",
  "key5": "5YANAbo55kRsY3nvsRhAqAPjETPExRzYn7zJ9Knt1rgv6bs8tyZ3bVvSAbeyHcVCvdMQ4sgoDiYvjy5K1jJmMWcN",
  "key6": "5tUju7s96orkSwVcq7NocQhg1mVL7ywHQkEMMt6X4qJqYQdep1yt75jK5GkMdEDaUN4evdhDJC1bRHZhv8YHaSAk",
  "key7": "qJdrYa2KaWtP1X7c8dg2oyCftcDCms7WYjAVCMKvCreU58Usydsiq31UZzdca3hs3E8YzYYpGSHdiH1HymVuxuL",
  "key8": "3V1NVRzM7C7UChyMfjaxhSqpEC77ChKG9BtsSXfpXbdsPgUqk7fuuoyeZNJVEeRpb4A3QifQioNdDU83cmbCUFgH",
  "key9": "XfKQyxBfdWAfnvLxDBUF6sNrQ5eAT1f4vDWJxg7Fyrr1FWiVg9f1xGCDrgfHqnDyCkMtP8A4CTXrg3EMfFoFLoX",
  "key10": "5MgRMvK6ZyJ3eCYesdhQQNEbGK1yPi1QLTwFMRABKFnkKBbPLRQNSv4L34v67So5ckgx4RvezwsEoyfuhxyYvtBc",
  "key11": "5D27HvFwd6XcDMWW8V9fEnzMY8w3PcM1GUb2ehxNLz1r1AbEx7YTwAzgSNeTXHZmeSWUa97FT2kfpzErJ9hnT2Dm",
  "key12": "jNP7hT1uU6Tt3axY6wFdBZiEp2pAWWftthfexcZYJKANr8Be6GDBcoQcSsK1HUer7KsqTKZfAon3fPJX1jC6rfg",
  "key13": "48hoQWiHsUTA2XwEQaKYhKeY97oJX8bJmemdndyWThuKMWu7F9boayADZnNaY1L6kSNUjkD46DyrqpEr1QBkU7eG",
  "key14": "C5KxknRtb27ay9Qh1XWHWNMdoMX3x6sWF5eB43v18kJazZhWz7WxreU4CT6ntBAqu3tV3gYSKjKW68idP8PCgiD",
  "key15": "3V4sfhAKtzaybVs8tBJJsozGDUkUZD2F2pL1wJEKbDa6hMUoQN5pG9i6GJ5qUX5aJJ7RsamvwkzDRXys3XdzhoLj",
  "key16": "4VKxjN62A27JtKaddKETc4CJXx2vBzpbFVrfuqFcshNf2RSXDBzAFb6ianeVx9o99PCCjviiJSYzpEkGn312b9wq",
  "key17": "uz87pUd5gXVsQBTYxHSUYcN1YVFX7fwrp2awm48HD9MAuJ4jSwE9QEnFwnSaL5Lc5w63r2HJcaY3Npjd1HDFDDk",
  "key18": "ZpL1xasjRzmvX8ujERsUaLkaJDUY2Pq3o4RMBEqvjQSAAHbBqX2NchG2Ng4GBkEzJMp68KtJVy8VGYfccX7tDuo",
  "key19": "wieoz2S942KpD8VCCTKtewsDh9p2AUqoREYstKjrYeD1wJMZoi9FvGx5uLy4Esc5vNhxKSNxjnGsdrwZJY1nHmL",
  "key20": "4tTNhzDRy2nntQiycBM9vVy5jKjtSJsm1JRKyAwzwqJMHJiM6vwoR4MhDZhRzgoKb6LpTVruc4us3jgxX1Ar9mxU",
  "key21": "4DwbAgQLXFemTrGq8qsNJsANR4Xra2uvkooCGNzy2hoaehi5ViXq197LbCUtJmkw3EUrycWegKD5gTKt1qT97u1L",
  "key22": "3i5jhkxt89FXc1XQFhACmxjTUGbGF1rMyE87zwUupy5zbgFokq4MKuKNkCGV7n6KRXmseU1E65qCCBWsv4wbYNwm",
  "key23": "3uhgyv5tTqZH5e8HSmMmvrTGD6PRgApVJMjCVqbC8QTdTj34iCV5JQpe68NXorF91uVtmmLj6pDKhsogUqSASEeM",
  "key24": "4y5wF1pnJPfwnHAcsyudffLyQDUoeRNrptNjw31fiPPbWR4MUmsKXgHEahfgKBvPNrDBhZGaZZxyiSMMwNfFUAeU",
  "key25": "5KY3FisZcWqpNjfwf6TAz43uhB19AyeHoL7h5PYjLib7D7XyqzWULhHXkcuQYs4BTAfh2BqWSVox8BUfyJ99rR25",
  "key26": "3LMAdpneucS4VvgkzfQVBwo7xXC6iMknNCqDzt6gvGZwKVgqhFP4TPD9BELFncJzeeHMP6uuYZhTJQhXEeYn1B9Z",
  "key27": "5Xefi2aM5bCckPQetPPifAMTWdceNT2syyD8MJEFMYtiwDCiLMNCaDHB3ssSjqEW2FG4qaiUoHwivuxiogjS9gkx",
  "key28": "QyRqMcA6JJx8X5xbKUMgYvM9joKv75Vk5tE5a67n6hfKh8t8pZ5kuHNtxJDomhgSf5CxNCYVMgBcRFVuPTCHWZ1",
  "key29": "u5jh61ZzpqxveiyMTAGdR34CHpuEYt5g4gWedeMVyQX7PxegYron2fdmhn9zbyhP15DUem5ujjwLYrxzscpMcrd",
  "key30": "2SDeZpYwmTY8hk2x8Mt9c8a9NPpWzVaj2qsPpgG4GuxCZkGv2r512qyMCRe5Z7DgMRxs3LoqmYNvLbsnd6qwfaM9"
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
