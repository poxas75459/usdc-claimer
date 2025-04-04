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
    "46YZkaVsEgnfP3b7JNuM4XzG8h4XKhD5utpNbiZxgykrwevgWMhW4wiyvzaxDU9Wwjr9eTgf2JkSVeQPvABpK9RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TzADooH68T9pJTy7WXe8XNUFDMQGd3FsnKTHjT9YpE91efYePQPJVG8BnjGQUWoPvkjWCVziD2p6HjqC1L5WcvZ",
  "key1": "5kQxF6JsicYZcv65qv8bAjjB9zovVJAoqUhcCwaCif5rZzja5r626bpf8zt3VMZPJQVPx9Q419b4o4cQaemMvPUs",
  "key2": "27ksFr9C45xVcQPu1iBU6xtW3ba9agCBj4mwsZW44DiVCdHbb9XJWFGnWBjnY9X1vZ6qM6Bg5Hff4hfNRHef8UXg",
  "key3": "22Ws6cvmhXWxHKoasDjdhmNM9hVS3tmP8UX4TNDn3CZ5KgWyryHxQutLx3LbM4qzfdyaScGudByJXph9DSsdeedk",
  "key4": "2jbzAsB5WDbdpk1n2eWjtnjDSvspkWrPAWSc7GYL5o7Fe8ExXKNN9j9K9kAYtcbZy9Y3ZLxT8fLZ9SrYGYt3jnu9",
  "key5": "3xm5oGEGDQM7s4FsNcrhSYeFEMk9TPpBMkU7MCbQyZnXoXZ83ESpfxXnjcS9kHJUyeyscFsQKhFntmi3ysbg3Frg",
  "key6": "bpsp5Qrf7QY8s53mDMKYRMkyVKYLcpnntZ9e1bM3iLNytho7YZ1iBUH49gxEfQGD5KFbTudtcUt8WKfx5D5h79R",
  "key7": "4YQgUgjDGhb2tMSEJHTPxqFEmYWM76PmijniDaGG2jQHsE2p4dNjTktusrFocKEHv5sYNiquhYarRMQ814J1ucNH",
  "key8": "4KUknWowqi3zVGZvKfV7CJh81pmXtoGHA5HxiZZnVLxaupEgs9EktSjqioeCy1vutGUkm97kbJvcTFD3QESyTno8",
  "key9": "2bF9v475CWDQUgcnf24MhEeXCL8ejYPY8gm6wVeCCitPoBsWMFwRhetaSBTbPuUDRG7hdVCFKvBnayt1ocNRjVcE",
  "key10": "iG2HkfjKod5o4BmNZHfrQXoQpGEFM2aDToUgZx321A9yL4kXmBCPar5Htn3Zno9GvTyozaduekBCwxN4gGsk6pu",
  "key11": "5bRSyW2QM89GcckTuXvP2wABTFJiHYcHDJnpC9HgkNrZKMHnmtWSDw2gNK5JwyXjGE19xNgH84HDr7x8up13mZkm",
  "key12": "2tKzhj9hoC4cYMYJ7YJDyRLTNkdFwecVrXSQspex9HsCQvSntSLi4eWBW5AxdkSspQRYb1Z4wk1qfGyb7EeE5FVy",
  "key13": "4oZoQu7WBiFheADNVgNuPnn1vJZe2dYmb3QxxmxzR7Tt5auo5Lhzizh6QKwW9Q4ju5ruDW1uod1i24V1EkHHmrSx",
  "key14": "K2wAo7S5NzzdHPMW1QTvyvY4fwxDp35dG4uSVE1zc9M88jqh88893wRMAKp1VA3KDpKA8Biyx6C1p14JRDyiAmW",
  "key15": "3YAFbUfjECg462ZSmpTEhLum57HT7P8dSsseb2PKFgeQe9a5xRfhbpE7wUnHqAbKY91qJDJFtTWpjzhHxvuobGYz",
  "key16": "xPAW7kBXR5Gw4EUFBvGvcwKERLngJYKXhf22UbUY7ircQWu34sEZKXxAmxxJ795tTk72Ak3JyX8cH6TaSACBEbQ",
  "key17": "5mdHBKHx2RcnCrY7SVwnZimGG7jrm9TiHTK6MbxFZC9RM7wagR4jhH3ZoM8FPnuFTMAmsNwrGypzfcgF8YYZiusj",
  "key18": "66PHR948VnhH4Cy32iEkYegkoF8WGtVcyRGdvCPFUDWuX1RehvwNNLzPy79uPpLHgNZUndD82og4tnnc6ed5bjMS",
  "key19": "2grVnw9XeCWqnQnjNN7sx6zzKMQ3PSdyPK16MXGDFBzVF5eTMJkeBvvt8WWFjQVhaQqMv48Ki3q9S13hfKWS1NL1",
  "key20": "4W2eyjMs61VCuvXVHCWJzyT2ureUeAfTJYJb8dtJrKZoSzMZgK8Fn5YBmLyMEMR4UgAhCZDBmKFAwkiCutKQx2X7",
  "key21": "38UezSdJZnaxmXkN2sgEQUKjUBm3vwJDgPzzBPYBWjfBUGdDY4m19bNfXjxipBDx1w6fuUDndWAp2F8AE8PgwJv3",
  "key22": "3Fug4eJoeqyF6SToSsvcnW4XtgEjYG7Qkk2Pp4jNBPf8FmJrBXCxXuvUuJdwnqkk5frD9Rw3XGUTpqa3MLtEhPvw",
  "key23": "2XRvQAaW1HMJheptBqKe1pvSFDKGL3UKRmA8cB1MZxaoXyoooskZ9HZxoDL1aM72XjjXoVMvjDtyy8tazwfjQEX8",
  "key24": "3MepeVhXLaMeAz8VJkFZAbqGgMoyo9ZaKV28UWLEb3h4UpGpnzMf7cmo1M5CLkNVYdpboeLzwAQN9xCH4JQ5m2eb",
  "key25": "2EGjDtDKo3tdCxPGfFRZE8fx5uvvMJYmJdUzjcu4j1BxuCfvZLGRwBkS2yaW6fzj1NpccEfiQfCPp8L3ShdoL2Gw",
  "key26": "36cQxFvxvHw32F95VrpbDoCRVXGgSj1EZdHG2odgFaYwbWmxPZ7oJgYhbxVrE2GDLPHQH1sYq7dzXt9eqyCM7sRf",
  "key27": "3wen2kYBNZkkAtSaSpkjzCoc5y93y5Ed7MeSMWtAPPjg4JKE4CrmSJRG7KxBxk9XHT5MLtUhreFdjiDGo9ze158c",
  "key28": "2DKLyuf2FBMiu8mgXBMQ1Ngu1jyAFcrLGdmfCc1fTiXywXZGGn1WPcuxftkVv5n2nutVEaJHf4cGvH9VSCMQriv1",
  "key29": "3yzkw19FURWB2Jn3ZjU6wkYmvar9R8UyK7Gc1eDjmR9Wn5iM42dsPsUKpHKCWUMoNnRiXMmWCV9hBYcDEer9VfMH",
  "key30": "3dLTUVFzzyW4cZBcV7f1SMnGM3bRKruNWkkuGs5xD7HiT2RKETYtCB97jMGkyLbQdK7hxcbYUic7oto3PYy34vcX",
  "key31": "2b8XZTyfjL9pQPX5gPVTLom2BSufCP5mmZHZFteFrSXvPfQEjBocTnmdAGX2mCVxqnCAiLR5nsMAavzr4a8XCdVc",
  "key32": "44H4RJVzq3Y6TXisS2ySx6XPtEyS2Cy63xwdMFQDS6SbEx3sSMQdnKfG7UboiBfs4Usd81KtGss1sSKAtymtD8or",
  "key33": "3pBwHt4AgR8q7bxAyk39gteiaZ8FPc9Gbd9dqXxh8CDG7BJU3pVx9LQ8TZ8jfy4n1wnmNdKuSjgN48jxNtppdNqL",
  "key34": "2wzWbxFLgux5uRZb7m8JSGgTGqJXNYb1uE8nSTRX9hKHSwWwhR3yXLjE69bh38qX3kb133fLaSBB7ammvogx8Lxf"
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
