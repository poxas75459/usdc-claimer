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
    "2vwMWAsNDUgtUvuh5xHBvuyJHBDxpinovgG9APYXuJBcXe8g63HkG1jYQdKovsegSvBygNjpgEEc4hyEKrpwuAvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UemBqLPvopmewCEMJHKxXkwk4Yq6YhTs64VMVQkm1KXR86meEzf9UcA9M8879iLMsDixqkjFvu4JmPuss63AcZT",
  "key1": "657VhvTiDtu6UyzhpRVpxwcgwAbndk1k2XrpZt8DDeVSNGjWU6yCpbk4Cx9gfsGPQ52NV5e25KAE945PNJAksxyp",
  "key2": "5qmu5SbFUZdzsbV4Fxverw6CZgFGDvkuq5hdppy3iZNDcsYSAgamoH1MQFF6QXLUu4mFCEkc9iiV4Zt4ntAKMLt6",
  "key3": "3cjxTSX311PLdX8BfCJGCuDFLUwbhoieCWR79vwAS8GfThmm2zpjcWzhAFRULieUdctoSM9xx9qCwJZVCmGHaRBb",
  "key4": "58H1FikAkjDvYqBvx3PvRbTVagBQxxbLQxbfzAFue4ywABHr68qJwaEGXa4VmKPjL6XJLd2RAobFnDSvHeQ8aEjg",
  "key5": "4tb22iRfAcwgCo4XFBeJzTCirhiypSZdmwNaFCVEM48CMXXUdUrXiR8AnMgrpg6RkhfDVE17c4GHhvcQx8zPh8AK",
  "key6": "4y1sZ3cGfMg6KtVtaH7ofEpwdTuWzPDWrDnmJ9d24WCxYE5WhUhKZJXzBKjWSPoezQ8BQdwkmdqkUc1bLuRScat2",
  "key7": "4ubJMtkfBjf6eKpjhkQ7YkCJWTWUR8Knzfx5MQexXF31dJ3f3viHvcKFEfzLckr83Srh9edd32ALi2NHxqQkqxmU",
  "key8": "2T7gB9EpzViTSnJ9nZxFpnhao7ckuDbiT6bDxRs5akzo5bLK6gbzuNNgTqgA6eKc5e1pmBAd4Tk88WtfNvmq33rF",
  "key9": "8oJxVuGAc4wrcHXtvhxXddN77Y3GWgdg1tu8zM2r56BBm2u8znABXp4wCwjdLqf9ugxRBUWQbJXbumkSxvon4U7",
  "key10": "3jmcE2tjmKf1VwUduWbs8BqjMnYFHQt9zfsLKmkGRSMKoyGJ9q38ESBRGN2mK38MZ2vw9VGUe5Hpx9aGDNvwF1Gg",
  "key11": "4xG3KzAmkuo9VesUHqJL6AJam7YDoNuopERdZ451YJoStt8UTuF5EpWBjAUwWKQAXpbwfjbu2LypVYx7y5qgKFfY",
  "key12": "jbAzDSbMg97EeXhgfwfC1qQ21LV97yzYDYYgYW6pZfxFBeAXmoXnSFVcjjQrnj7GucQ939MizJAXz2sgb9wNGSd",
  "key13": "gBQcvbQ4qxifXtbNdzEWeLJ8BLy3TJzHi3ck8VfdB4PBUDvhKyJp1UC35PntiLh4Jjn9V6sq8SVMz9P6cFEFLCc",
  "key14": "2NJAvtAVXSywEX7VpLiknWPTbKWteau8uf6w4WcmbXSenALVqGYZpzJruHwkoskroXdsLgZ9RCTfekH3TmMvA4s3",
  "key15": "5AKV8qiQEJmUAaGcyuRdpzfqFKpJCnPECFXgF3rZYjEvXSZwUYvqmwihfYGGuzLdTkaEQAbNtw3NwFfRQitWqN8X",
  "key16": "5AyqNpZB6ytDdEaJH3pgnCW6thj9cdxQtGYx7m2XjBKGWNVuh2bzHLjBxu3BHvkDLQHxHduauWWyM7GdyP2UbRB8",
  "key17": "5o2sBsRZkGQQhEwb7efvtzKRVf8X17Ao9BKod5F11VmfLQgrVy2Nyv8qhcMzDPBKX7gu9hFfNMkVgCFrxsFajQwN",
  "key18": "5S1qR7ZFj6gXrebdv8oDHvsyUU1HxHGfavGntica4EEdHmMRbDhTs4DMmYXRaZNDjAf1eGjMyF96d8aYhstaFHtT",
  "key19": "17Q6fgHkthxpX73gHVKoihsgdGoWBoQ51KLd69A6dQbVnLenzdLsUFzs8fSU5L3qR2SaiNwYwN21iRmGpiieKSQ",
  "key20": "2aqvBHuQnQ2Eiq4EtrZKXEj59KDLdnSQmkPTwDKRhz9ZYZQDcPbXYzN3eSsj2iMzZZt4rbU1KTNDJ4EFWFnSb3nA",
  "key21": "5RqrUJTqkDtgh4LF5Q9bp1MtaQNrankvhnK4bbLCY5bXYJQsxmmhexdYydi5thdkdz8ScdR3xp7nyGUm3SYtCaM6",
  "key22": "5JbWYY12EE9PbDPxeeA7XXKesRP3W6h9tPDF3iYQobjRX1eJMbFpfKHf9SSawhMmNUhzZJp8429hdfAAH4qUzuf7",
  "key23": "63asUGzbPNBhL3br4oMVh8mCx2z16RudrinEGoLZHQX14aqgc3RuFvmR1fpyxX1NfhgT3Xk7qDZ1rhVTx8fipbiE",
  "key24": "413RMij3Ejv6cjsuihQscXfu5aRqJCY3zeaVLxNzrDUZScmKhhKEgQrncCbR6oGtcH3mX3c3h9zF5U12JMMMKEq6",
  "key25": "5JhUme1n1DSbZn84VcjT8BKhMf7iKptoWjHppHoNAUmHVKKTAqXxjGkNQGjUVKKYAxaK3DXiHj76GLEf7CEYotPZ",
  "key26": "4Nzx9JSXPhLrHp7TryZ3Sr4zUDFLqrxDt6VyZDbeZf35HZ5a1zsus7uRRHSx7TBhGxgMdAEeprTJy1wzrQJcNYzi",
  "key27": "45VHKZmVW74t4BryEvcLSeE62K5k2tSHV6Nh6D7NupJs1eDEQQRV5xr3cu3UU3ty81pJCTi2u9FXrLcNWXumuVrJ",
  "key28": "4avbKSVfjsSaeqrPteauGewTQpNkEcmBb8LCjBR1HuF7nXF4y4SSgHFawGTHuyvUZRSc9o8WfyenAUUDaaCtUG4g",
  "key29": "2x46KUgMUKBWjhHccTwSrxSwfT2fo9T2S5FWP62TPZhLHV5JcdazxL7R6N3BHsNoRcTPCsnxgfp6odkbxz56G9hn",
  "key30": "4esDYQT8grJjUGzEyHsXM6GxeBWZ1NDqKkFCe4LVggk3yenqzfU6duEhnffvJiffT5ZRJM6zeo63qumQpdpg6Nf7",
  "key31": "2Jw2bF9CQGgBzUes1rHenQSqPLuJjjiM4SSB2bUNLD6Uisf5YBLhXx6sX4D74mhB2JREssd5EQtTe229Pcb9vUzB",
  "key32": "yWnGs4bQu3dmDvE7BxeLKWD4ugz5H8bGJt9m1HnjguuPWXGU46ZBQjtro331JtiiC9raFUCammUexCWQHo6S5o5",
  "key33": "3tQ7tPnnkGo6tD1gJYvCdRtGDmYaERQaqdLbmpKpZ4iA1zdEexygtskDNoUgsbKXqmnnoshRe9DxfaCiay9DGYn9"
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
