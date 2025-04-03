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
    "4n3N5Th2zuoqo9w8TQBUtgqp2iR1oT9VUfjPsCdN3H2oetdgajQDqYQvkiAG28rX4nzvaoydMXwCBouXet4RAM2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iS87HtxgZv23zKkkP2n7q9ht4bLTAfiin3XYFpmyhZGx7BsmYQuwFiBL8acGq1pMUZM3TPNMRfqrH8F15b4wHqt",
  "key1": "Jo868jSMvCA4x2pMDieLCziZdv6iYRks1m974duMyWPyHoGkmjZxTQWgEKgtr4JVZRjocuzm7UMNFo372sWACB6",
  "key2": "5XPQpfyg5TEDmvyxLRufv7CzQPpeqKsqMPuigXQeF59V5g99SQhDRsdo6xrGxqf5QVkv723ma1UDXWBnxqeZo3DS",
  "key3": "2gdQLAzuJ5bhZyiL2toe4j4ZVmgigyFz7LLr6XSre5w5B71neyPBMg6UxMTr7yQqdAsR4zT9UxVrDtc2h2eHtNFg",
  "key4": "ecfLQGHyqsa2PzJDQ9oE6HNZiuE959bYGhC2mbFtyhZmDr75zyXDbTzKRkPKUnFG1AGnkuEgrRHD45V6Tnd2sV2",
  "key5": "2tAZoyqYPtoSnLijBz4cAVYoY9XUcMLSjpAKgigekowfh1bJ39Rc1aKormnDSYqwosKJh1cCUWSoasDYemacycC7",
  "key6": "64ecBxww8xpdGefjKfubQKCCWuhpiUUbWNhtxswJq82HXDTx8mcKzqwSKRVewiL1yz94Aft14KCjhLDGECFDLRve",
  "key7": "5sTQdpUPkwF9yvfr5mo2Hkd2xTXg1aoV5gP2c8saNh7Y6eJkjL3if4VPRe5s4aUfGeVYJ4pZ6RRKFjbh9QB4id9c",
  "key8": "4X9jA6xRr1bzgT31Q5AoRWWdUtw2iwai2rfPvnVZLdmjPefiF7mtStLw1EXmGHAF9osBMcUdEVAT7kGUWYUhUkqi",
  "key9": "AkFsfqVBf3prm7CLGLiijoS4ckYBXMBa8iawqBdCTChuVjhyRe7YEvFyos831Xe1VD8ZVpbn2aeh1kAUgckqu7a",
  "key10": "4eiUCJV41KdRo7fSJCNtF3kdffQ4Cxz8i44mVj1W9Cw4RfSAc7fcgDq8kcb9BnJPrSTa8VMg2GqjFL27LepZLX4E",
  "key11": "nhtbpugz45ySHhJTmBPwEFB3Z1DFQa35HRvtf5JaFPbeMKMfF29Vpmi2mCqvGo2m9nuxTnMLivF4yB6yxis7HkV",
  "key12": "326oXgJACByR95aTp1HpzWcTBQL5s5gXzurRWp9TuYzAjgZtLjBU771Uzt8mjLd524u2k4newptzEci5DLE69sRk",
  "key13": "37y1Putko3V58hYGbHUu6dM3dnaYcaaiaCH8GySv5uWCguRX22fZPSKyGx4VAzLozBF1BGr67Kiseeyza4A3sauL",
  "key14": "sH2yjkYDTvPjs8ANSCtyQynS5LE3BWa1ZAC6dhJZQZHhJgs2YfJP72nJiYipHKg8gQuwFbiE4DcwvgEBjq3Kvgq",
  "key15": "3iZ4b8r2x4RpXEyktnKFwtRLjHUZdCbNsyEoJnWUJb9pGRQd1F8U4jFBKj7MbrDuJBvvCaSa6rW283UAuGLARott",
  "key16": "yGtWqWrWEbjhX1pHFVbgmuMMhdxM1478ZRpAV7GsUeBV66WKXhRmfsDbjumTAaiG6wiLnAWUXjTAB1jGY6QhJdR",
  "key17": "3vGvNvcdBxSaWrPXiFVYs1ky6iXbLGVCJLPe6ZKJgbQavsNgXhmiiDkKiEoT7zvhAzNoN2LCA6wZSb4zkQWRfnWF",
  "key18": "3ABA98TXFb5uv87H6mKiQ7xpf2ZVFnppmz47KTx6b8jgdaLhYZ7vQwTh3uLSdKEoWBRpLTyK3dR4kEaMig57e5te",
  "key19": "mFCjCbMxrfGiAZHi11gT6GWukgnsGyAztsRmzxqdfpJtj4CjHjZbaeaPELRu4QR8Ecmh8ihH5HykFDXv7CkBfM8",
  "key20": "4phDP2JEPwb6sgwK25PoyCydGgnAztVyGrXAJodiTAze48TDtXP5M1phP6A8yjDW8chrdVHMXN2kNuMh1YrQy4yT",
  "key21": "3EQjGAWENiNAuBrKMcPcJwjW2NC2tqS9XJ93THBBftxTBAS6ZWVNgPzKyRPw6mys1hsZ3tthvJUVw6e9AsutbHhy",
  "key22": "5Dn7F89dYZ5Z1XipNqhxi3RJ92vSVZsnTxaN2nGvX7Fz2HonpL3kNroSgRf81dfbaqRiViHDktB4ktzREmdbefv8",
  "key23": "4mYRrisH4SAHLyE5UxrkeMR42HurzYqeGDNPSN6A7b3QMkxKP7xcxYQMpDAcfBMnMiwvNqxsZooU98CXsETmuvNc",
  "key24": "4RSqcivJ2BgZHqShGrZguNE5n7nSDNeDpegSkcMBP5x4DRudrCUW7FSvvRjJkYVT3nRb1GExugwHGaeiDszSiWyR",
  "key25": "24LseXMEc3SJLdxjAwPidRFqywEbuv5d3Cyc7uv1fhsuieXGy5GwEXEDyw38Qzg3nPx62vrkZat1jwdb5w2bT2ci",
  "key26": "53eqUsUqP8aJLWHbhK5DZq9vnzQUaYVb4frbDjqNR8M6qhn8LboVJ8TcN2E3moDjrm2hxtrXFKyYNG8wF4jyX9JZ",
  "key27": "4opmbb1zA375VJrFquBM1j1gHBWewzZu3Bhd5wWrvqDZTfrNkA2KdvVz2McdsefMA9eecmD3b2aF9dWNrHmYqAEq",
  "key28": "31kvP6QA8tHCrde3SxDV3woawrwHy8cejhAQkWNUMmcBD34jLkyxNAYxnu4AhrZzhrRJCnemDHozdQnsqYKst7xQ",
  "key29": "5gG8D9U86XBjbFr5GdRmMWBAaStLfmo9JV4Bq7SBkrrKFu262GgFZn2Fk9JMsAsgqJiSXGtobtEeXVSeUdpWnm8m",
  "key30": "3CUJDB3NQQEAvu1uLP7EAiu8sH6DPx7N5FBAz3gp4w6S3bVojZuVW6YyBX68Y3c6Vzez7jUMwJjESU56YpMAqbB9",
  "key31": "3nsgkNcmUAZRm3L7LEx938JSX14N22oRDYs1qMEWX6UdeoyeQebLu5qZL9WeHAXYp6NoTCKmBDzonMr6PDLW7a8j",
  "key32": "51gN3S1pJku69ymBS4kwJLgA715xsrYbwn7NvV3CZLCfn125oUimd1QEsjFLKKeh32y4okmqTrrogYZkVtzbZZRb",
  "key33": "9goKzRnw42Yny7RwxkNEG3p8cSMdjGfzRCS9cJFk1bFB3dAa1fryuxLoS1wJ2v9qDG9rJTAQNGidJ9d1XAvxM3Y",
  "key34": "57c4qL5feXikQLJnoaJBkjRq3Cdkq4gNqrtiy57KCP9rmsuCeZxwjWu2oHL5ypq6VPa4rbFh7Vm2q8xvxQEYjwy4",
  "key35": "4EpLLzCiHDN5BdoBi13UH76bjZ3pMNbVR95Y3XBosPU6ymL6w1xWqvKh8F5DkbtJteWnzuV123DpzRTobn8c7LVi",
  "key36": "ydfha2pQ5DKzokVKgm4unWboNRWGHotgRFdVFXpMPynbRCVafeSo4k9cQfmBzMVSgD47fvRfnAZSZzjkDvRgPyC",
  "key37": "51S3HzrYUXssEoJnAeWNnomYNGXaXk2mKuxEL72kHKhJDv6FfSHMwEZyVofCz1VXFCeMQivvu9gFHpoJ9uSnZszV",
  "key38": "377Eas4NUNq7cRPj3T9PiTKrtQs38fJCNJZwgFj837HWHSxGZdVwxEiu4equG8DCwf1JMAiZy9ipsw6xipoEEgwe",
  "key39": "4TYFg5v5YY545TjjQ4nu5KBcX5QfkXh5XgS2TtX1Keg12wNEWctMAz6Uifc1cakv7vsh8enYaEHTiDrv6D1PYo2R",
  "key40": "2a9QqJoLavoXoeadFwW4XmJszVsbPYKwDTrgUL1shATQgmyxwrH2Cb33LDyrXfuYjC92qZE8Q38Ss1akNkxHJGmE",
  "key41": "fQ2qaH6ynfTL8Adb4SiyvsneHxGE8M7QatyVi6TCwdoFAGXAt8tDAyQTXKUqzeqE8mBreZPWgR24tu4CkpgppY8",
  "key42": "4Hxv9HFZpq2S5Vp2rdkBGdU6cTyRF3SwUJpmSfAeKStoxZTv1r1TdgdatXuP5kBqc6gYqRe8ZULyRMJdPFrj7WNn",
  "key43": "4FKQmRmkp7HdZ2pD9jvzE7XGn6uc3eMNQZzga3ZvztftTyeUvj3ug3pK7A49TLewU9TsD2K9UvDsHdHnQZnn1TUc",
  "key44": "2tfzQf6oyNvJFSpmncnJ7tiDqCKfU5AGuQ2BAenWroDyEAdECjEiUS9N99bPCb3wmwJDc2Uyq7YR8yirbwapnMQp",
  "key45": "EH4UTvZjvyGdHuy6cV93RcfAYmWMrB27Zo6JSvaNoLbm1FwXeHo2S8xFdq56kVAuKaYQj2usHVHmmZwr2qjqXvU"
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
