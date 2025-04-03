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
    "3FAsiudR7AuBt2KQmD5BCEdebjPjJzanN6ZxJNioYipWyBepjvQgokEpd6exGfg2EPENPpLsDQLkWUYYuDjQbFNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQNyuc4oNfn5UffUkFD7t7zshfhByyqdT4KQzZdXbxeHweySjjpipKPmp12zdkVNSeXFEorHiX9GfaES82CDa5V",
  "key1": "3RVqsdYbBpUkHDBsUpterskk4M2ng12sQuz3kDpcrZhYSSfgNWWgLBedtvUruoZAb53UDG26q3JsM3Y3auH7ZFpJ",
  "key2": "3hko7ygtKhDPxBc4GVVJLv1HxPZCBBes63kaoyLNtTDVC1ZgGzpZ2Xs1gKpB6Ao5rrgc1Xmmvm1UVEYNoWWh78sy",
  "key3": "5vfgYZCDG2xy6PDnPCXCPmVF7Y4k9fDU39aEaoSXfLExj9Evow3ZEiYvqem1t3eo38ZGGEEGTQbC7xZyooZ8aGxS",
  "key4": "5HSodghJLtxLbboepfesNqrg8XPQ8CVAxc1jvYHwabtAhp9CyQVbGQZwop9Sw31whMJRinC7VF7UEGhrNEkSjN44",
  "key5": "5MeuYQraAd7TzJkX84QgFiEM3fTCEHCVbZMLxBuCn1on7Yv5paVdDnejypXUdZmm6x1ctwR6MeZ3MrMb27bhBFYN",
  "key6": "2DXuaQWTS5WxYpdVYhmMgbE45Be2z4Hqvb1d4fxo916wSdS2KzJeCGXKhgeV7H2Lsi2649dHAwCZB4k9YJPkYNDM",
  "key7": "C18hZ2Skm68qqrqTiLXLSyhUzLat3J78E2cqgPU7bHCQX9dP3jxpdexpJmuKx7UW5LGjfzVWtGMeoCxV4XQ9qxD",
  "key8": "FgjFzXs6dqS4izfnSzEvTGKSHsZ8T8h4RLjWgHukkxDYQw5xgfbXHG6esGaUhXUoFG1zSLR5ADk2QZDBinYw1zf",
  "key9": "2U53PPnWxJ88o3G4zwsFU1YBRUsmHYqof581z25U3EgHh7DvuHtWMH383URVnkNdK2Atgik6yVverz7amBioED9u",
  "key10": "4VcPj6LBAwwTvNzNoaSuUuszNSpF1xGszMLWHDPmgjdQPbud9TfZViDCPd86HiE3SNFENBLAGqww1ja8ev8uAdbk",
  "key11": "5bNq7JwyiQHdDYdAzKeN2yitd9HpnVfcaV7teuDi9JJiJAT6rCjNGxo7PNhYAY6tE1Kj2cA96ZFD6rz4n1iaD9r6",
  "key12": "5XjpbKJEihzU1BJRNCupfVJEkJBLbNtqVei53GmKpn5Vdk3yi14Pir2nLFrgV9wnBoa5UdSXHEoq5yCDTBU94bj2",
  "key13": "4eQZC5hrT7maxaRE7rHJHNbzPRWGuRyuumyfzj8dGnusH9no5XvKEAKHL4caXBjjRmfusKdnV3fBQ5DjYT8UU2Xc",
  "key14": "jdc4Nrr39WuqS4TaHndCL6yyU3THbZPUjPeQmutmwsoD2Laa2wh3A94a7ypHefPGaDjPdHuUKX2DFqj6J68nDXu",
  "key15": "2brXonXXUN2jkwKUk32t9FHeduk34RxCWRqoyDV2EnK1Q8FXEKbXYqL8hCp7KiVTHN49TTpG5VitFAXU4qrSGQFM",
  "key16": "3ovBmUBvVbh5FpbB8rpeqovdvVn6xUD7MUwnAAQ1dURjcvEbLxY4zDrKTWnNnB2B3NqwwhcrJSUaQhbja8HuTQKE",
  "key17": "3UHiiSkzedFDwyCi6ELNoddZEF6XwFmP1m3a1WkeJmd9symT8k1qcq16t1SZANbie5Ag47VxVZxFHhWxKM7a8m3a",
  "key18": "2iRe5RqNZ3DhDTkm88D266ytRoJn1Zz7q6DP8gbuextadH9SKizFCsKtVVQ4KXPPWkU4f5tn94kFkuXAhDdgEhjv",
  "key19": "5Mqi7r8HhtsvKsmE6KmodJ2LKvTymg3SWM8rUvDEi2eNbUr7ACvoTMXujrvEyrQnzQh7eDkg6nfrEKXEU1fK5HSR",
  "key20": "24attzS8SXRFEjcXSHwYKVZ5agG6SUZ8kpodMrRHajXgLhxdH38KaT2i2q8hLmGD3eMcpFUboPoeDVWvgtttmLWG",
  "key21": "2KSg7tsj3UES17Mw2xKvnyim7hbLteEyXfaF421utRxLLNoKBJioSBPnJjVDjPpY39162P2G84nefNL3Snif993u",
  "key22": "26TfTwARTeWSLiYTwcxcSkySpyQqCSoJ6EWYkajv6vNCjQxG5P3pnu1PT2kp7XVYddaqh9XX2mX9S2KuF16EhfLn",
  "key23": "4ycT3R9iJoc4arRnUPFP92d4FkAfgrVHZxWcjTWjV3JpBWiExyHxeJsKN1cbLVwAUVE61gyCtH1Dk6TC2shfrKJv",
  "key24": "3tAowiw5jFyTY32MgE7DNsqXnMpmDdesVYrnoDvRNYH2otP1F5jHo2Y3Y9bxRFW9zYNBtdXVZBPGMmAKXskdBTBu",
  "key25": "5bVsUip2m2tPKShuy6WCc3nxmcgHdwTXxrgtTrX22K9uZej1YYyUb7grkw8b4wXXFz2NRvWcuZ6juLHgY4qtaTYP",
  "key26": "67fwEhx574rmjwNeLpy6oqPZWKvhNavTFEppjWagos72zjcaKcsbDR6k4Fe6F2Cwor5vyETmghMD4dXnbDsevV17",
  "key27": "32Ahwd91mZCMRbPJXN2KtvTKBmBEpfFZmLxwazxpfsUMLDw4FyAAAhidHBUzBL9Wp9kyxwjhbCkv3axgWLyQXDG1",
  "key28": "CRDg117QP26RXDr1JHVekCSpd45XNHDTRK2z7nZ6g5LYjpfs3q8chbhEdN6DJa89Crge3n5FcRDToYHZmstofRa",
  "key29": "5HVLpsC6k528UoGZeVKRcw7ALTzQKXcEeKdAfjUbuqY7LDP1XaY4S5kyK1RZfxsCjmK5ZDGqis22vf4hHqQNtSm1",
  "key30": "3cNFHo4zV4MEz42b2YWhC6aCsh5p6FWoeFU7gFE5MnRQTRGk2TtMb3ddWZLw8o5RdmfSi4aobwnMaWUyLQfbWnwX",
  "key31": "4Xxjqd81Qh9RNyMtzrvaaBh6EfxVFV5cqFBiCQ8uiUFLvJUofgm4BeHDNZbUjpq2eVBzixWj3QNBBXhewo198cFw",
  "key32": "4AwJbmawMYGF5Xye75TbjHPmcgvAcsf8MS2ZT5XrtwfosHkXkKfaqqLGogvEfKtHLhN8tiXLkredyMCo8mCL1dvU"
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
