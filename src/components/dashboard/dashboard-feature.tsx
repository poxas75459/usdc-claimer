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
    "5EbYTpVu2TJ2nXUSwYPE8SZ8RXTpqN7QrFvCCbeGr761DWaS4CHXDqSq5guUcXGpzJrNRrNSRudtqNCEF4iNtJj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSXQq6c4ohb4cVi2ZGwfxWrDyz1MjDB6owCVaZq5QZUgP2M9sLscKTYthrA5d6ZymwMGwnHx6aMrRZDWKnKfXo4",
  "key1": "2YbuJpVtvitc91tdCDAV7R6Hx3jWke9gp6ws6nAiYZjAUbwypfWUiBCAK1rcPdxVj3e8hguY2gcbnXXjEgd2jCBv",
  "key2": "4BtahzyQBd4V4nczXW6MU5a9xXoyndUAiLCnAuFXqLYGet46jmRakEqaZvNHNdhu8fVtzELd6DnDYVrh5ZEWTqqE",
  "key3": "2yrkWb6ytBGjhaMX9twtXhGbiuDa8o9rvuZTUJ7pLAgsaiMM5okxKu3MdY7vzHjjgbykETxWYrz46EcZo4cHRpWa",
  "key4": "4vjvCHKjyN7DeqjezgFqzUv1pjYjB3ex7EVsvytxR84ajZ2Z1KbniQUtkYnLLJYtqHH7DFo9NJBcJgtrhGdHxSzw",
  "key5": "4e3iCD9N1Ca4pmgAdSwFSUhbRVDex7iS9qBmwTVaMQ7uFBt5AhZG36nSsV6dDrGGgSNiq8zdV1QzDHG4fPFNiJ4y",
  "key6": "62CJchAmaEU2g5J4d1tmou4y2nnM9H75eHJvh9yuUQ4r8NgfdBqvWudj87cPufbbM9ZGzHhytCDqfdJVznNgtjSU",
  "key7": "3gvBfvGxJdEKruuWJmzpFwwDSseDBuA9GPxFtNCzVs2L1DhtYSVK6hQpL6TavFWsNauWXAcWqmXRnifxuFGhhpY4",
  "key8": "2Q6ZzbCuCbseFuzWixXNnqkGUyfdzhpuSakCGopRt8WTWYCRt2HB1gUEUXhPeWNpaTEkWmHRuuhCmWAuRnhJnELi",
  "key9": "4GEJ6Rqghjb6rpDyNbcMFW1cDiCtnTpMTGgEyRxm1UtPRqZaVWZF1xjCyHBR3MJZaercehioNwLNQ2JGbpgjAJP3",
  "key10": "4qjZRarrjQZrfUT9YoQrVczWstxLcYcLFR47QHkTYAzcTcixeJwW3HYptSAdVhEFGTAvuDUkQXcSPUtfKtfsh5jg",
  "key11": "3cCDEj7TBoShWDLW6NmDnaYRxSporEop6Yu9qMSg4YJ4UkyJUSFC16h6GpxHnBa5vVTRXSg5dUkFtbJJesFzwuiz",
  "key12": "2SSof6wf8FzhGaAQdvS5yGq52EwEzrmzSKwJHFUuFcpv5RVc8uhjCz41d2Xsta5qoaXNsTMJJNxA4Zk8mphnEvWm",
  "key13": "4GoGKGUqy9ZVYchXDMciEQbwf2oyjJ5XrRedvPZQfCQKGh2kk9sZRR5b9tygjExPrvaUbXRWicKkG3aUFRDRdyNg",
  "key14": "k5PaRqUsco2VBz79cmdiyQ3WBwngXVAceBH2UbVHZWV2YGKyDc8WRdv3st1qhPTDGNGGDnhYWEPypCJ5UaEy1qm",
  "key15": "4JNCMAYJTsahSHWDqe1pYW7vbdPhXzMzcgiz2xDH1ytFj9QiX7diAeyNyFk8smgRiu7fgRGukwddPv5oYXdYhna3",
  "key16": "4y6CxtBq79EHCPshZFP9Pqv2AsRaAexiSoh31s8Mkn3etTgpghbywuu9DBmCZ9c5ZRpWCcFPTF5qEXVvJHB3u29z",
  "key17": "5qd4dUbzkrpoJRvVn2iYrTpffuB296KJmx6mkqq2HCVDLB3wbtsfaDNzprMHKVjN2ZEsx1mST52L7doyj2wAUwqi",
  "key18": "4CMDWHL9hPwYw6jX3z9NzELknJ4pgBoTt1WKP9aokKthZptVkisvQNLuHvy9h8saaauU1DXeTf25DTwbYgLmenaP",
  "key19": "4K7MwMkMNaJ4qbwEV6WHgzaQ57pYPwhfaRajHkqFKnLAbdz4cSfeu2QNojU1QrB6vKjTVjoNfaRuiBD3bozWbgy2",
  "key20": "6DMu921bg7sYZdGnct3UaThuTSaYush4jThX8PhrPJMYE7vMsCaUFoQbgcSsdrGXj2WvQ3dH6AiZQQVBfCuXBqV",
  "key21": "3US9ECb7mNkGc66DiSxQXUyEfAs4kF6insPcMhBQoQxgQSFL1G3m6fpvv9i6qMpDZgwwmosCq3xXAPw8Ue1ovpkw",
  "key22": "3J9qv82kb6ABFPfj9jTZqrWAzQ3AeeDnQAtHTxKmVHAg4ScmebnLRr6NzJMQ9gCttMy8vDhTMdz9ifYH3ztZaLFF",
  "key23": "g5LjEPgMzYSGdeJp6TS7ZbWRyk9P3Pahdu93HxVqbWYzuenQ2LsNgGYAppmw9U6vUA9dGHMCUFWQCXzq5w7WrbK",
  "key24": "4DzVGxWpvXLUBUjzdfSNdhhqWsPPkCNbzMuch42p7TpnP8AWL31tJvnSnrrGCB2D1FRxJyWFroaDE4yXFED63997",
  "key25": "338EgL5Fw1TaLyz3dB64w37nyUah7vjwK9tFQhYh1kYNTmp68ezqukZwGv7ntbDpb3bi9bsTArX7E8TquCYfKZwR",
  "key26": "5qFttdhgQFbzC36Jq9VwWFCJNzKhVbaGfxZEM3i8HzYQKfCayWDcAsPfhMUjse7bDmyttBuYnjbswFbLVXcc27eM",
  "key27": "4zxTCYZsLkaoe33SpNbDvT4HGCNi74aeNKceXaBfqZuMtF5t2tDEMFJ72gLg5wD8r7ihoXcgSNqzBUqZN8BBa4R",
  "key28": "3GsFrZsfNAN9CBtq7uTA45xUhAC4hX4ehAsNdTdSC7mzaUA83aocWyh5FibXhrE6KaPwaptzKrBmXF7xBtGvzoVC",
  "key29": "5kYw5myXC57W4LgU4TLchUcweLbPLuzfN4zL1yPnaJd7zDusXVL2Zx2RqZXifF7ovTwYfng4wSMErs6XRKSeyZhb",
  "key30": "4zz8kNw1J4dNUu6K6AHw4y5UWBTAsgNQcHBwyJzVieJXDjwNTwZmYNRqB7z3bMAEiPA56TMHoRzyRSM4idDPPa4q",
  "key31": "72hdgGHhLdiYSGd8cpzL2UAaHL82Fn8iNCCWw1VF5FpZG4b2pEBH7cNFnxyg71u5F67yF5A8bUr6PAp9paCYz7A",
  "key32": "4ZzeYA8WSqg1bCjZtxbNEfMRCn5J2rci79AHTbatp1CnzSfjBohawi5ovNLkCuuKH23UPzApBKgBEx2BPM11bHxq",
  "key33": "5KYyH6GQGfNnFgTdvEcRWdEBpu1rek8hHoPhwwXSuc624YJTaBL52Y36qt2QzkhhSQhdvB5QjZbbcoKHrHXrgaoW",
  "key34": "4CLWYs5oc4HxMcFdrjm8vXNYK6zkBwo8zsAVZQrT149CKmMQLSzjnZtCipr85h6LpYwNKQcwKAkTG761AdamvYHu",
  "key35": "5xaXUa9NYq5X57NSywS8npGBwBWSR1pxQnYTnjGgVN1HU21MQ4MoQ9UMoboMCtPAJPNfbHFiBWA5mfkZHuHU39oi",
  "key36": "4kryKNK522oPhUHoEkiCeK6M9w91YX99H89ypN7TiaetgCbc7EWou5yQFqj5rFo7TEhKsve9j6Ng1iUBRQRzXbnD",
  "key37": "QY4mZpyHhdBmD5Z1xjb9mG7gj2MUt2cZzeoPsFrPVRenEgAyKBSpmfh5HFrF2uX7sooswHU9g8NJNACXPMcUouC",
  "key38": "mrUPkaJuMNUkc9reTD9bXT276G8iLazaVNisw2GsVh1KH4KEqCzSwhReoKqnbfEKodx2nu11BqksSKLY7vDJEcC",
  "key39": "4C1LEs96mHNzQFEgWdxAMbve8qxjK232rG1FnECS4pk2zE7VhoowNpRcHCfpTBnVCWvYyvWMkwqrznmPpxW7iKFn",
  "key40": "5FPWv1hkzAnjQzbk4QNLgy9RKzaE4DTzczS7rQXzgMLmPXQC8G8SECBe9L9qrFy8ASjbFDxypqq8Hgk7CA86GbCo",
  "key41": "4G6dR3ZCU1pWgVGKZeSceHRQB7SCct61w2wrNnueWqVRCB4CbBt86ikgmtn2pP1eS3XqEQi35u7mDJseZvhNPyYY",
  "key42": "2Eny2JxjZiwMbsdr3RNXJSDZap6udYj35Aw49uA8QSVpNrp7jeX2Ux2PXEuUCz8cQ8KdJN8eFWUoeQKsevuU6HpV",
  "key43": "4xWDdZEwraGNHMrnzMHpBGabcPyVdMaKnncbXh28Q2Li9X4qJhVjoJwpY6W1HsrrkJ81JjYghPk7SRkTUWfm8vvA",
  "key44": "3bzH2HxTcDsbJwdX9HcU1XodeJLdLric2TpBX6HrHPziN7hV4wVf51gFw7hZisjc6dBr875JHjyHzucBEdqDNq8W"
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
