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
    "3aPJHHWVWKvqvAJr23PXj7CFqF1BUBsQouUQMpEAK4JwGw44iNkXYNfQw8C8vjKgcwMyiA2KBzwhfzeuoZLiPf5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFmcGPLwLVmdSWZNwiyZcGVpJT8qqtuamfJLv1Bs16XhRu3D2zuFk4vTMd81WMSDvzNJaSn81gqgFsAQVo2AuJa",
  "key1": "3EBaKgMwjVpZDvwJkhTatvHiKszNRBdNeyTNRfECVq2A7DV6e77ykugqqEWafGzdFZu77fqbbsXJnJPu7y8SEJPJ",
  "key2": "2rRb3B8upvn4NqoY4VmGBG4kWEkwv11ZXjF8YSy7rC22gaczahkEaajnyirWhxcVwRfPXLSh9T5X4okL9b31SEP7",
  "key3": "2v99baYkLwn4cxe8CmNqNB7Z3wkz171tjAzFhMuFgwf3sMVDDuydY81qhtWLUSY4zN8tKgBMMsfYX68ZMebtxgHJ",
  "key4": "4t37XTMt86wpJLxhTc5ZW9YcDkTLqrwMsk7wBWtHiNFvgZRzuFEaxH4KvSQBBwvPyiL8ozKWqSoY7nbq6AnZEA2y",
  "key5": "D3yugA1TLoMLWfh1Z1H19yHxqvXCfueQViuQkBPpaWiCpAfoKJJ7bKE5VGGZaj6PVEtsoLVtterXH79Uv113sGM",
  "key6": "3XCW1srj4REXymVj5L9sgugFbAxBVi4jxUqtP6JPpwQ1GdnxG93WhVUHXvbLCNtdeXkVGvfBMNHeQg6T1KA9QHE2",
  "key7": "49rNkazDUQhd2WPmYEgBCdiHymfwCskmk59WLvtxotnsEFtqwidVaruXARaws3VHb7a9ZQQN38jKLspHGdZXzs5N",
  "key8": "3YQ9HNnB9DuCMANQEd8Q9ujuRdGvYt5vw99Biu2jEi1h3f3RPLmJgcwL9iC7eTsdkqX2toLF8TV93F35FyiqyjCr",
  "key9": "2VLApiAEmhvos6LyXGCRQd61J8PxJ3JHQz4iqmvD8z6X793pWc5WQpB4yPnEqqgC6ytsdXVmbbBzLDdz4bUsbUjz",
  "key10": "2HZpgTViSXEPhfLreTycMASeyMZ5HWa7kfCSUdk9vGZE5JHMjbXH9dHEwoehhQBAW9NE5G8EGJNB1ZUWX133gXGn",
  "key11": "5McS9aftT6JfFicj6gtD12Vm5SaoBLMFeGUWtFtiK2nBA4ib8k78LoeHy91g4ZqMbHAL25vJQdFLFovK2gnoazhd",
  "key12": "22yayM84S3mtgM5t3XCEostAFRcZVGYrXvRcSQghdYzdjEp1mD88tgeLnHM64HXe1x1LAgj1h9d3s4XVpy4ubFtD",
  "key13": "37M17QeHMK8x7YvbajPaQHnHqjGAPBbZqYFuMqvWdWsHcu1RR4P3ZmVUcN7xgfhzs7FWAia1m9wcPBTetoqHPkhF",
  "key14": "3KAHW4P1z71wc6UEve3bQJnVSWJS8ZEgGE9xdpUitPgPserUWdfBJsgbtAJ3r8DnVssKXBt3tN8aPdGRu8VqQJYa",
  "key15": "2yAR9PhWcB4LskpRx6fGxuduNnJ1h7pxUPTX5SM8YkePCVychXMpoQJfH9xxDpeVF2LjrsTPufLM8sRP81EAEt66",
  "key16": "5tu56A7poaRKMsDA3XfZFfAkxJHTPHjN5Jd2mDea3HnsGjyuM4EwifoUtbUQ3yG28U1m56QboqpBTwqmVvWveZZF",
  "key17": "2qQSC78nH46GhrQurxYYeL9cayqPztFmK1ZXq3keMzzzLewp2hj9dbGgQ1jYHQETfSJPjCtqEq3HjdZv5paFhE2q",
  "key18": "3nAZ2tC7MwtvuPKgpuGbL5k6iaMUgwjVsnFXg3cURfqh8cN7PMwgaMGuBLgxaniLW4t1cBssLs3pNSz5kzDNzcWG",
  "key19": "2CWkg4QA6rvfByZYLmmGmAJgTDqArWhRS6B6wuwaithoXwCrJKgCL8ew4ZC9o7YSU3v6axgxKCFiCyTqwQaPP8Wu",
  "key20": "BBnAvhS4n4WeGRcXC1hALxxSz1qpS6aHzYNWLtgiW452nDDcqedZWSKE1gkM2VyeDNbx7ZyZLbQrAz8VzMNQMFz",
  "key21": "67LKhxKxfhpz7pVMFhsXNH7Ljitg5AUgJBG8z11fuptPWJNta7g5pYNrAaZhYYujJFUnCAt4FEZNTTN7AZPYcfKm",
  "key22": "FPDowXdbigXU7EPQuSfawbDPkBoZx8qLf5kQF218W9CQWtpiZBWj5wzG8sebAQxG5x2KNcCwgCfvocpRA6vi6Er",
  "key23": "4mnAHzD7jXyfxcNetLHdtGQbegcqaPt6CFwxg1KrR2yoV59jvu1WwxaeRS4ZLb8cYGjBQZ3jN8zuewZcrQw2FC7C",
  "key24": "qLrZG21H7YEjNZZnPm6EmwhAXC6yjxKgv3h6p9yBQKALMEY778a6HjXSRTEbyPQxuzeqg5HRhQoqBS9axAb1FJ5",
  "key25": "4uieTzeFpLoMuAySCpUYwmnsghiTATrcKayeraUq7XTDsK82Z8yDxykZT98YYfLGMCRkqqpCXwHnpmhfxUdzHvn5",
  "key26": "5qBapz8Grd4EEFUKe366rJsMh3rRsLFrfwMgMLkW8gmsh1nVSHFB3R93HxhXYrtPjJmubMDJf53Bhs5mZtqaTeHq",
  "key27": "5L7pdexS33dNYFtQYEaLhrZ2dyLwaziAU55ioVvawyDH6SDQUo66oKCXNrwJGpJejQqUAtDECJZtf7qF9nDeEaTS",
  "key28": "2XUEgTgakirVj1yWCJh84JRLMgfmmu2T17aFrbgbS8Sugh3tWSVLgro4YN14kzH5FjNj17oPGbxzvWQZnf2s6VBc",
  "key29": "54MYqoMZxTgoUspmCYa29HD45ekxNNTXWnJhFuCAyv6tNSinn2oDhZzPkFdqfWvh7bpgjbeK5nZg7GXhrG53E9Wj",
  "key30": "msmR7qgke8SBbvZiiWjM4vbNkf8YuiZgq8vMGiretq3idk8wyH34R9161WvZ4VMRnNKmiCV1ukWECg2LNf1ufXa",
  "key31": "4ga1Db4JFovUdp3KUH5GgzjuKMrkVpTYseRDyMa2sWCnUwLKLwVBzUSgLbGVfRyDJrKs3uBBtHW7DJA8pevyWJgw",
  "key32": "CEjtDW2zLPAFqTsxZHGoNpKpU46GMKMygNchwbJ8QjftK7742JMs9gwAeHu4NwiGWWnKwfwE6TEhUF4QynmEQJq",
  "key33": "M6Mks7HWqdJ7HwFpvDAR12w7XEsNUKTh6v5tuaxQFP2hdavy3fymCdcVksf53r4zWi71QBaiKFvpBp9AFirBCTk",
  "key34": "4GxkTGADwZh2D13yELX1Zp9mFfPvvK9zjKGjeTxS7smHCp1JFzARqqnXSm2XFU3ArM8riggMwQCMXjeHChPYu7zq",
  "key35": "4XMUPhVM9bbSN5kh4fQPXAe1kA77xmy4tv9Xf7h9j3CsnnkkuVfRfk5iyRGYrFfR3EwEEz6fkE7QwQM8mHemjBtK",
  "key36": "pQjz3nm1VnHVVfXAN9waVtFrGzsxgJA7znoNEs58HrpVq16t3ak2vdNNnN3r5vkYy8meWd6WQbNpbQfiT9xz6kW",
  "key37": "V1LCcw5LQmbMwCaYmXLjUJgJnPR4yR4aySBnagadWwoJp94SswpFCALw9qeo26NQbx2W1axwFcykiexSGQbjJ2Y",
  "key38": "4Kbi2JzWKsT8tyB3usMiCPgghzMJ5pHy28QSPbJoxzsoM2paFm84mccewurSWt31fjvBwXyPGx3pcpTUUaYBMB5Y",
  "key39": "58HE1TgDMJmJHt1aRNmQ9B8ZHxnyErV9sqPrzLfLk1cpF415ioVf3EanNRTnZQMTbBqxPibT8xY9j1Pea8BoFL5X",
  "key40": "5P2kV4c58fnivTT7yc8WZVXPg8RcNUJTZrCbzPXDALnG1WgBv8YDMyyuA55bMHtu7xFap32CA5KKuKyMWicZjiRY",
  "key41": "4yNeMpPZELuRRuTdSLPbaHGeu85E1yN42pH2vmPHZLjcbrnKSGtZoW7BVLZNYbxxQRwipeDkP3qKUmccP8MHSCYE",
  "key42": "4zaVFssYxw2UiRrjo4vMjawnFs4wAPkQBne54Qj1cUApB2TW3fje8PaKZs5rV4TBiZRDUDNBFenrE9E9x48nXU13",
  "key43": "2Ppn46BA7ENeVSY6aovNyPPruvV887WgYAK2ShwbCC9SDMZS5NtmKK2gwgsduY9y2a8qVEE5piFzj4SjxJhUx49E"
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
