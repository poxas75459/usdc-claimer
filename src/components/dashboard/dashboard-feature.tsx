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
    "2JyjfJYfeczJeXGjeCVeQnf2oo7TpEiM9BNKS5n6uesAX9Nn1KPPoTRyzRTSiCq8otMqmBz5MhZfm2ypz9m5JzeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ighPSQGJxHWUPZfQKgMkZRqMpA3u3YNUGMhRCh5UCp9FHYBUFHesUsbGLvYT7cy6NngX9e9nrpUmLAPCkiKvm8M",
  "key1": "M5QGCvbp7koGr1VUALUopDZkh38grCwX7Xoeux6JmbbMGTdQD5sFX6FyQVZZZTYVUbM5hDmH56ZKSDgCUhKbiW8",
  "key2": "veQCRBQU8f6VfNRsNhvJ15YkxWjwJupGgcMDNDHX5pvaG3niHcvjaC4aCAbie59becCaASfRv1GnFnaJQ7DChjE",
  "key3": "4AeRwpLQ2KrwLrAG5jke8sqdcUti4KUCmdU2ry2CVGnDK3hWP73arxDoKpQy3o2hRME6HkxGRwQaNZsd3CaaFUJ4",
  "key4": "3zasFxWVoaZoVMNCPBhwySRaPSUZn2Tt6XSiDR4A2qif5GqGR8GHRgTabdkWRoyoVFNTGQTtprXXofF8FY8LFsqE",
  "key5": "5KPgrQCV3C6epdNV1uVtcYL1wV3rbirnXCKv9aekCAbEJZvuqGchhUNc7NU3nRZgrRMW8D1ViFJgr3aTEYdE5RTS",
  "key6": "2T9Yg1dkfbEyz3h9BbpfCfTrdfiRSAoppFaEJ16QGFBAsAapPtwB7LiLR2noRvzzohx32Mq8suXRHQpTWXQtaL8j",
  "key7": "3dH9DNMdCAUQ8Y2zRVda6tXDxTSjKh8crSyA388jZu865iTYgEiMPr2z68Wxytnx1wfysDjb2Y3yWDa258GoL9Ng",
  "key8": "3GXTXSbos3DDnmDzxctB2RfmFMKffc6wxSFijVdn6yhYNRjfwAXSaBF3xqWN9h41heqrWE5d3tr63q7A221gkZkN",
  "key9": "2t1QquTVeE9nJXnQhWMZqhhpVWCeYY9TgzEq1pA4qq6y3haf833D57pWGm9W1Jx9BoqjauDo2oq6e7F3KYgNFL4w",
  "key10": "3GYrwAWVXq38HpKXGJvbPNdo8GYAnaTSspZuokr5EjSu24M6odRrUu4FkNpe6yDi3LLafKA3UfSgRLAkUixzfad9",
  "key11": "4DRR7Hwiy55EG5dSfPkRTPfjw3tcCyD98hhjodguuBFTHXeg5xt5UuDoPigF66UyLDH234xYQW2YaYAoLKkb6Dqx",
  "key12": "5MxHnGDzwoCyW2ggwFX7mfr2id74bfejeSvBnwePw6jBseiYwWeFv47RqDDFEw3g1cPtt33vg5ALT9RdmuAez16d",
  "key13": "2EE9v6WRP7YhKPPWtWyf3cS4NPT7mfCF88jWdgspHCTy7pCz2T1cA8vMtujczUaiynv7SaTsDa8ZdjyqDMruYawY",
  "key14": "6GHLWFyYoKZDJxbJhVAbPcLUgRnxosn6sZ1cfMUXJdpFc5LZTQaoEkPhvjyQfTGJHrU1nUBhWMevPHw1fmLwtqt",
  "key15": "4Vg1B9ZkvddxSpVwo6g1YhdY5k7hGrhoZ1GB5MLxvw3ofECmnUSu9Dqe6n1vyfYBhECyaJzDKqc6STMJzYSzxWEZ",
  "key16": "5s3YQ65vZysdipTjRRRnSWfx1BRmYfg98JM4hZVBoETNTkmEQdH4o6HFtheNCvpUBfpfFbthc4VeFgWK7icFzs1E",
  "key17": "2HQxaPxcaQ7dBW7u37H7YKio4TtsRzs4B54Zc4fzUVX6nFziYxVT8ob4b5KbXaHpeAAr4D3E8hgusk3ms7ziUgyw",
  "key18": "VxVRNuyvwcmkKHCT7Sjr5exQ3wGceFLECtZfbULeXx1drZHjRRQ8nKMA1in4y5jA6kHb2mzEtUEpVgzkh6E6p3x",
  "key19": "5C62tQDsBY2Q5be6LqWmrhv7r1GRX5zHhVXW2TFgEJScLK69N1urfD49rcnY24NWbuShv6XAbXXGWRA6iatYW42E",
  "key20": "YzwYkuB5bnExJTXiXEBikHtmxU8qkQ4QfQncXAE91pAMAjz6FwHbitSKr8aScDgatFjTbxFSPAWoB3E1p9kr2tf",
  "key21": "5ijpqWkMD93CaCHkZQJHbm5P9G36FPBabi7RayQ5TD8WYiGNSUHos738dgWw2NeqswadrkR41K1HxqzWJYLEHdDJ",
  "key22": "5trTr6K1E5Dfvg68bCYaxG2ptS7uAg2ZM8fHTzUHJLDbFKK4ttxfJ7KHi2niRKu5f7jrb3yka7wVU9cK9ZewuEbk",
  "key23": "2wqrCDYYayf8y8bhCcZiKYTa7zRAaJXQaisnGR5bKDfpHNythvBc882uQm6H8gPYYYLYdfmcZR2CyaeMkviB33Ys",
  "key24": "4zN7mXvJARzrNiY3niPfEz5uuwhbmUQM7uEzAym9yTfm7DciRt6G5abHKaTF9woy7zim3Ys4A3G2beggr3aD3Syj",
  "key25": "4wiasTLZ14RusypkQBHahp3wwgAqRrGTt69r5gvFcoXErPDb9TikFy6FvGmhH7ahJzs7LGr4mujetjZUKf8i6LwL",
  "key26": "dhBdxqmkHwzDrXtpEGW6yYyxFm3TRzZxxLn5C7WGAz4tCsfC58AXdZs7dEAVmzezn9BQyKAycY2NBXrxPHwKKxD",
  "key27": "3t93rbthoy5dQGA6kiGoUb1ZGQCP6HbWnTH8yc5a7TpxkTotXwiHe19a8YzVhX1p6CGUKcMqv1z8n1ogCidreNoc",
  "key28": "5UpZFtTGgkz1PyYn2Zc5gnArhUV8RsnrLmgMxThafuvHBDPB2UHGYvQvZxqnUZhFYmht8tpP4cuFty3UbfuHySN",
  "key29": "2sdhpKrpSasUZn82b595CZLvWuxdnB9NsQTVW85MSsn6yFpCHr7PSkWUe99D5wHP9VZ6o6qPAUezbXoQSvpDgSHT",
  "key30": "53VMBUUKKHVQeRtGKJEbGoaxtSY5DpRfwTHjd86bdRvcQqd28zMcPKkYynp88ndWbLXzm9bBJ748VFYQ1JRasWDh",
  "key31": "4e6W5mbcuGu36cukQgBv4PTT6XCYqF1qxU5pwCbqPoAaUWTH6VtdTKBsPbhEiZVt3AGAb3EKGE6AFWaCdn3UKKjB",
  "key32": "B7rvY4zw1e2hCgJNZkARe6qbkU5oBCw3XvbTzv9WyYfweumhvCH5W2LAnrubEqc4dfgxEFZQPWZcAQs1LeCezKh",
  "key33": "5eFKqhnVMkY89ZJvnDgubNPzo4WgSDUz1r1u51j2XPnWj7LVHY8ARDaBJJzdGuWgEto4Yg8aGLEuMGJ2SfehgfcU"
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
