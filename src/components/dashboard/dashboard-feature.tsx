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
    "27SSTiymHp699oTp28GyvxD9kmGJPF259kRxb8tQWpeZeEBYRBEFVPeywFvRqNrEme9mFs8ffdPXrrZkgykqwZH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EWdoxfE4oAFpxArp9MziwgDjK3UJ1aL3PpwQi4bCn7uALtZYVMK9HqvXmzzZZDE6D6j2CKNk6VTeCJhLeA3cdkR",
  "key1": "2ukQoGZmbBorpg5FcPuvCPvndNsH4m6zTCrPiNjj3z3ND1ctUkLhsHqSgmfaxowt6h1KSHLKEQRehTQCwHNnR4di",
  "key2": "29dDNXC9sGui8P5Rh2dwBNzes741YK99SXr17rM5i8MjY4GBd2W2HZW6qNsVoaXUhaBqsECU1AmynNKqLB2BBNDV",
  "key3": "5xNjZjkY97R1cMsgBttMSej2Vj2HX8jj3Fu92f59d5uwuX7P4GYbkq6Hq3VJ8Zjpne9JnntPJMMbMTT5UB4DHqJM",
  "key4": "4zyAtihZqHtoxeQ19AUu3bbiYtSohmrFJ6PJu5NwQBvH4xS5xNxfnd5AWbNNqe6siRZPAJjsfgWjvYPFmpVrQ32S",
  "key5": "5H7PzFohix19jTggWp3KTXaWAy3GmxMJQRLXeUY3LgisYgdhNV2zEELpYxW5H2Jp4MW5zkrpmMu7mm48KsLeHQJo",
  "key6": "2WbnsCZvNhPQbxL2md1pZQGn9ybQifhSD9FoLme6ssXbP5L7KvU4xSnGshXT5PUG7B1Yt1yt9yH6MabMPRNyUFZ3",
  "key7": "5rLMtJrBUpWzjvZFhobemWzZcgrz9m9cPkbBNRitoHL1yqnyHGUKbpVAEHfjDmt5LeyCAqaQ7QhxrmMGNMDf1zNe",
  "key8": "4ggSbqoMzEkquiXkL3rBN3JueWrGqR6JuNW8L7S8JzXCGmXgdeDuCUyfNkF5FC5ce1W3SzJjw6C65F5LLX8MYAsh",
  "key9": "3JfwJnxvV9o52MNQ9fUxq7Bp6RLw6vZF7mnkp3q5LozXqBDUPgeQhCJesk22QmhWszmfJbXTi5GDVSXJd7XS8UG8",
  "key10": "39Wdwewu8z3jJbuc72JmqEZje6g5UgMDtREeGM45f6rfdQBz5vEynwZK4hKwMS9XGy5QizmeoAQkaBMjHC7qYaq3",
  "key11": "29vUkZzGA3JJtGR4HdtMkXLgCT1rJwaeWANnTfdheFkp6tWfks49joPKorryUKW88uTDVedjX7KqhpCMFLNhf17X",
  "key12": "64qG15iUUJ6YM4rw9Q26Lgv23tU8PmKbfbDggShPk9ev5Rjuy4p7ez9KRL9LD4UCYNoPW87RuxT1S3ThFMEokUrW",
  "key13": "57L3v2hfApjBAj9ytqarhkH1Bz7GCzaWRG1cktmSs2BumRqcus6KfE6AjnEC5NWtvZQSeNjaQ26ZPHJWmMxVxaPB",
  "key14": "5VvspEVnJ3HZhy9AgnHsT2bkkPnL5EBSB3raFtUHJDgwqRxxk5F6GB9nqT7abRAE6F5wrseBmZSqxeVMyyRpomo",
  "key15": "jUfVUfm3PXfoimn9Rb5zHDEkjjZ3mUhSeEZz2zrWFQzGLyFGmcTuX9bPMzXwRxyu11wYp3JYuwGiWqTFDY8yWVA",
  "key16": "4qXRxWhKYqkm3jo25nkepoXbR7oBGTyDQLJRBvVWPr12dNasJH8Y5ETwwPY6SkBjMXYtJps5UCp16dWo9aFTK1va",
  "key17": "39K923VJGB5Sf5XNehoVksMQXs6NTipiJpKpMDQ6CCGf7aC6h3wsRobzzTQcojotCaX6cfbTFDhHgc4MqXzYvtr4",
  "key18": "3esT1dmuz7g9ePw326o6W7y52HJ7ZEFQdNBQDKZPjsDRpLwEZjG2ivDX8mHkru4DjmLX58mGJ4PfCP2aznF8cFr1",
  "key19": "ojVV9DQQRA8SX5GT5V2jfTbgcctJFDqQwXTnai2QL4TGXWvzYEBk2ajmWZkemkh9qiMtSYF1tsDoiuPPBBwB7kh",
  "key20": "65TeEi6bLgWzzD6EeDXmpNRyuboWfEDfXbTxTks7ATJ55yz35C5g1HeocCddaZL8cdK8KFpbB61CUh3eyd5chj9q",
  "key21": "3ZXxMks8yvZ9FDG5MbsDqH5smt8uh8qrLr9GZeK7FwTdPCYHe2wBrLH3iS6QLNXQR9vgZMF68ShmvfTU1kXvBgXK",
  "key22": "2QxEpph9FvAe7ceKVwy4kcpwaUpS6XS92hsBw6MNY64McMqMq9WiURAiUCCCwiUtUx1xeathLvmfTg3VYDtTC7SK",
  "key23": "5UD3bwoJxmrM8CT1pZocrM3JnVfHo97k1cWnR74xvXKKVf2NjgKq45q8gBMAhfsLMkVBfJdm6NTEapDsUmF9KkJk",
  "key24": "3TpMSsBx91BTMw19rFq38CHgkmX72sVRrgTUJMWnRQBym58sXiC3fUd7XdUesBLHDBp8nhARjrtaXEAk8P5ker47",
  "key25": "4BtKmYkGPKT9KrFGpvKLq6RU3BbL4n1w8qaTDB9jCQKv4Nc5vXZnGDYrrDGHJgsLd9RYGXUhuRrWMigY6UKsqDXQ",
  "key26": "5ySFMNeHNGAJFywjXDp9rseZ7w2RJvbwwNmkENArUy66bqUd1CKdhARWBRmuGbHkyv65bPdoY9sJHHbqzYrxtpgc",
  "key27": "bnc1X1fe2T6q898VT6aytFzzbM1P5RqabKVcyuygdyq8xPCLuTsqLLs9yz4w88w7UAhVB1GzgQ1cGBf1piH1XsG",
  "key28": "5Fgxc2Pu2hieDgGd8gE9mG2hsfCA8rQMHoHbvKARRQarvCcndbW6KFNCJsCYUuc8L6X5QM46NGxJ1dxvLibTkrtd",
  "key29": "4bpP99m1tf1GDCWX2Dc2tMvq1hDm7HSC24xxdJgEVezFp2AZcmWM97DiQ6eMSAf3qwaGRvF3yZnigfk43JvehE5K",
  "key30": "5CnvThLWsadoLXBseZPAaZuuhavUQnMTdnB8j7SKPCqbmWGMXirsKfQkzJWJG6UZra7oCnxaUSz7fkFRZNvcQSC5",
  "key31": "65s24nSRsund1kFdtm6hT7XFN9KitbLcRoJLRXw81BCgPMSnVVhSJDpBxvCwJTejvDjwJQXSSmmfDWigbqBmvU7M",
  "key32": "66zoAaBdNGoohsc1ZxAAQ7KeP6iBeB2rDik1Vr3A8iGa1CheozPxxyzg4MH2yTetfNir1ynsafVvgf5CPro4X2rX",
  "key33": "4rTJWkFXJ9ptTU8xmP5WYkcbg1A9WquFrEq5G6yj4oLYfbqKRzcE7Np3ySzoKxoVPBuoVfJBA7isfiD81JNq2bCh",
  "key34": "5Cmfkj3gfw3a6nzRpPm6DXAQCBbycenZ3AgNtHCEDky7R8Ub8KQ92ZSkk7fEhRtyZMruCUixVWrMkhFJbw1pBkcf",
  "key35": "5AcpL2NMGVPRVuPwe9qE1xwULg9rHEeCPjNKebGHDWgTCz6bayGbfmqRozx1vi3KskKQAZx1e9rBskcz1atGC5Co",
  "key36": "4yNiCCDGqStH6zkmZNnyKfEnCd4bH2jdCU31VMd7SzYzYwV59pbchMvakPxfGF3znTJhkLCWY8c4kC2hooLn12c",
  "key37": "429d1tFbEbN1Ni1ttp2Wr8uy3usiDSy8fist2vQarNGM4oDWvrdMuEgAmuj2xsAd33k68jX9cpzxSXAR9WvRpoUA",
  "key38": "iGMwV4afRgYrfRPNBAbj4gCjCCSNvbvafHdvPh7wNyP6foRrNWQRaT11M6osqxqcHSeaXykFgJVMe8MFu9dZHZd",
  "key39": "3kJW4WHnRP75cSMDCZworhzWbE1DH8Bx2fwxJtg1dZHYpMBLUmS13x31qwPkxxm6jesKBPqw6Jdr6PhGV5cud5MV",
  "key40": "2CbSa54nPuvFQwriBKeucncVGsRsdZb3z4VFVfrb6xbfLqSwsXrFGmRtfXnPFHiXTVuwmv783th3XfxhoT1JY9Rg",
  "key41": "zftWdQ1QyqThmAqJmvLDsB13BxSnrFCtDsBSt391XAWdP7ACvkzppYZA3knpKs1yamozMNA2X9FFgBvBQsaan8W",
  "key42": "oD1UWFHiKVxj3L1XRorkazhd1guUWZWmZBHKVbqaf4k2cHvdWL9zmGde6gXkExFPDNaz2ZFXcVaYW5bYtP2GhMd",
  "key43": "2dVbR7xnHQgUcTdFWrevnMypJD7zUunApgeyB3rfbYgxCH5oQTVUdkneKbLdzwK9XZNMHBc6Gm4XXEdn4vJH6CD5",
  "key44": "28q9EjvG3CfFVzAmkGQvMku8m6UmG7sXZA18z5MMZ5xodDVNLUzG4xaKutiZrR4o8c1BVjuLZCWYPtnCMro2pAmx",
  "key45": "4kMkjtTXzMyWiHfjm9JU9dd4tSzSvsKbFHtKzafJzzszg2mC5JeQBG2CgpHZqVWSyhF7a3UhRWAuuKHiZxPZin3W",
  "key46": "51xeurfKgdDgx4Hbriz5BBoM9dYEQRTEVRKRZKYUKvvzzKExB7mJ4QxHpE89fK1cfQy8nFs4oFm8947LpB6B2UZk",
  "key47": "3yo9vkMXWwd4NZ5VNH6obPge5puV4Wx62pjty2XU1ieCHXfLe1Za1xDuNqbzNWwSKWeKsNTZTrwbPZjduBi8SzxL",
  "key48": "66toQTc72odhhMfjw4XnPVY4MJB4Kh9mM8aztgjgLv36A1SX51RMRmNVfyRWKvMgdtN8amzBtHgLBxosieDogcRg",
  "key49": "3wiAYoqtEYtT29Q8qT6oEZaqJ6j7AeU5enMZudt3s6wr7DBuPKUbvVrwGfWpMcbn9etyRSSFPqV7eRTESFsQBx7k"
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
