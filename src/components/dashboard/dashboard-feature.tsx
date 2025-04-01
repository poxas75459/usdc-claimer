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
    "3e5AtZ7DUxEw66DZb6mnvLQBRuZU3njLffLYvx6aroDwHPx8gYvoxdp2EMKCcqkpNbPhKBif3nAczSmmsBHoSL5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcT4AfyUjYDLoRx93E5TVNTEiQi9BDhqYF59QcSgtdJ3UnqXRUYUMz6pTb3Zpdn5TinntFbgvxsBH5dBoKXJQvL",
  "key1": "2PVXBELd1RkPJeookihkHuB5WMrN8vDhAS83BmrUiwq8ih7w9M9ubcax31tNGTqwefnqujmwNmByUXBT71bbKQzZ",
  "key2": "4EFHvk6aLjDJYkg3UF9WVixiwoCGDwQNW7DhGt2i5veQW3siXTcL87Q8qzUoyQrrv8s8HYCvHc7D2yNms3a7NySX",
  "key3": "4zEG5FT8N4WgmKWS1eJ6zPbUxxCtKHvJBF71owAnRbYH6yZHVGcdAjZLaSdSLMk1FxkFuRxi461yv4zkxPeLbgAF",
  "key4": "2ZxqYuVA2bajsvAVe7Rvw6SFzrJMSkzJawrk1byJb4BSXZG9UP9G2Xm8W64t92ZgCY9SdUACYeKij9HnDaFsa7aa",
  "key5": "4PHJxvFgAMkR9MGfCcnbBQ8YetFzkVNGJtwyzwmxqaRZKrcfbr6cMBygsh7ozShkVC9TRNQkuAkVeCBCYY2zcdh8",
  "key6": "5tawuxyXeypyfyTdwuWuZRcmebY37JKws3Dfo8FghsCPYue3rZqqaDSrQgUyio8xzkX74AyCQdqxQ21oLGs234cT",
  "key7": "2fntVK7HMzqAEfP4gRAEGkDoJRs5byvCEh9inVRDcyvzGChA5CrMX4oFLa2YtpK4nXk3iYwGmNmWxbRUsbw7AmSp",
  "key8": "3hYTtY6aytGsyazSRAuerdw87gVMNqSbktj674cqhL2ELEjkS2g2xDrAGkH71ZpATRmiwfFefAh2SNzrfb6qFoCp",
  "key9": "2aSa7GcGDmBy1M2G8VskeGzaVJj9Zw5Pn2oLW8wqXeRFbiT6RorjcDmEmyCQACahJiaG8Ymp6HCxZDv1fX74nPVw",
  "key10": "4nYaT1EAQJPisU2TCkRXxz4qNKKgefq6kRRMQNPNbSELaiYkMDkzprHqtNxahNJtjewT5ALz7X821HmgoeHQqyat",
  "key11": "3LbVY5Q9QTKhQqjXxAF44ekVTaU7gvDVxw4fyjLsAFvaQAaECdoHCVDvNqUm7xps2949DTN9zCnSZWpBmtSUsbTL",
  "key12": "5csEuPzpRibgD3JW2wQvmoxCRLWQgp7BtYW5EUrXvFMS65neQy9Yt9keHQ6ncpvpYc8hgLaAU8XmEqRGTomZryd",
  "key13": "4qVnfMdBGuwoxsfhWar7C4siFGxa6NPCYaMwTwFoSDrYyFA6kz2WvynLKT39rkUh5GdMkXMCAZ6DUouNc2A1WeQs",
  "key14": "4uF54c2pD4uTMXh6Bcyn28inWtPr2RJyGhg8ch1wRNMNDoP1qjDxUFwmugbeVbyMufYMZQa3Z39nkByk1eJBgetj",
  "key15": "3KqYXJwTeS1hzfTyWh5uMK7qza5b7brMFkpoNzkAQ5NN7nfZvKGPWe3MJPiX2XHLj8WmvoKekPXL8Hymp8HYz6j1",
  "key16": "4tkmpPQcFjqYithe83mxnzhz2Gzg5WxBqYKQivfg4cKfuQjgAwunTUrKhZsQDxYcFc6SZS4f3VBFAMtJzWDZQ4Xp",
  "key17": "5TQJXgFNrNWLrSyqwJL9sS18PmNYMVvZGkVpPiAubrrkds6WEg69AAPZQy768LejZeTQ28fceXJJCUMDrspRMM2M",
  "key18": "4ikd6d6SqQLJm5VZzompCnRfQV9JFS558FtHT1Viy6GT5PjBPx7h9f3fxA7rz9GfD62roRYP7xKuer6x8bYZxCFp",
  "key19": "3hJyWPMowh6bf728XYYWbUZ8wfSaVMqTdfakoiJifqun6z4BcAfaoDW7ZutgBTvTPxJJdJEjz3a5tupbZeEvmZNR",
  "key20": "4ZDWXg8hQ3QVjynwYjAjpFSMCvu7442G4zm5FE7t3sFqsBekZx3NEccx9gfYakmrNGHyVvYUr3kkZf85YoAXg7bR",
  "key21": "9Jv8z6ML8uVEo7S9Q6Wg4ANm28KncTU9VahHKLsrsrw1aAf5MC4Seg6CTvbW4u5hqvhqhRtaLRwXhPk3KGgYD2q",
  "key22": "z7Je3rZAkSD4Pt2fqt1m1eudgpvVCsVDXHt9FoGEkZsTp6XyPkFvVHga8anAhrc6EWn7SSkLixgZJ3vdqXgNmLo",
  "key23": "4cdxQvDq1QcquLL5xvqaaJkjUonRq5dsrwGfVyocYdRMgph61mRkftays2MNfuChbu3gLxxWkjkmJ3zCE5bdZ5Za",
  "key24": "umpMnXBFKJaeHbLh8sLcGuh5rwDYi8ecqEJSeDiyLRrcVhgMHEpUiXxNktVBHKsWca1DK2gv5e1AgGpR7ut5s98",
  "key25": "2n9gVt5TamoFHmrVGVnzZgS2z3v6FgmKoFYxgBt7MsFczEcmQKCnrYzH8Tu9fFasZefa8j4DG3gS9JjqagE52ptu",
  "key26": "3buRSTVW66QZsHjNxAA87LUTqCUzgjAdatAo29aSJEWXpHMhcYL1EFDD3s3twAg996Dm8rUHbvfWsw2WAXTtj7mB",
  "key27": "3uFKaeJFLR5swf8cGQC2fZJ5TvN1NUQWbs49HkgayTH9YNEzqq8nLusJxgttg96EKuyVA5XRVBZHrPrqH9Q8wQPi",
  "key28": "b8nViK88DurnVfyfqTa7K4vFLtwnCAu1MewBwLDRhA3F2smmTU2g7hFq3wdSKNPxfG51rp6nJLBGH5zgSwVoGDe",
  "key29": "jZv1csFL3dDrErn4SKWGtVBfQGtYvvE3fUAoYXaPQgq5cG82WG6UVEvm6vXovvPuDdYiDQYYJuuiZNDqk78gaDm",
  "key30": "5QezhFdaR2y8xNpd4ngS9SrQXdVE8zZu4qVKmeNBPyNw47cJAsFmWs9uvURx8nuwN64pByHBMuu5xRUuBvBPhdt",
  "key31": "66JRM66cn8DHvfdWpS6LFdEmHjjtGDEb7FpawZAWt99BHtZE9h6RdRYWhR5vBtSGkNFSnLnchVW7U16Z6QqCkxRP",
  "key32": "5yGTAFmmUSkv5HKSopYWCAiitfXq3ju3isKW3nAmWSsZ5n6TwduQ8w27Z7zAg14nVesrgAdxDXLfsttvGFSjnQZ8"
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
