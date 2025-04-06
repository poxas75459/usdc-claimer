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
    "4bZKoPGnT22uKUimFdoSDmVLapki6m93aUmfMd1PWxtGuoRio2igagMCJp1QdzmuY6NvZyodgRK2vm4Qr4qKM1cV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFLVsxJrEY48YMoPEd8dgkqS6LHL1bpGqgCkfgYVRUnxxBx3NsLDjZgGLRqLCqPx35DpZPxvitPdqkRUzskN4KZ",
  "key1": "5mxXWCQgqxTyeUb1Ue7P8k3AQ9EtV8DWmQP8CmsGVLurrkiYzTcDGu9bG2EZoCPnPUA6m1CHWeH9PJCdTPvdHtRo",
  "key2": "5j5U1qK2kMWbg1PVMRTGXaJGA4pNzEs1UyA8yneCDY9pMCKbh5hCUkSn6gLzLfaeHAUBUWwRbMTnE8UFrnk2m6iK",
  "key3": "3Ts6dPCmzMCZYJqVYKQM527yE6zXb1f4caXC7R3oZWfjPJ5bpxc7wQifp3eMCVqwUofq4u2VwAFdjpkYbuQfW5zF",
  "key4": "41S4NZjpM9ZKenUDuBN7dquaGKH5Qcr6dfm3kMTMHZfPMG8adeiYkTuResxbm4Mh89TqrXGpSUt8eiNHhV7CLpKX",
  "key5": "5BfWRrkLHj4siAfXhqg2PkubkV53xjFgxcuDpXJv8PqAzffzDDcsSPRj7AsAoyBcKCwXfiMiY3udGsU5xaBujito",
  "key6": "63qgUBGZPFQZbnozBDGAA3vppxu9aXdUdTwF1RhNgGeKdh1XzKFs2kdrH8WncPNA51CufbV2Q2QCnPXAMpbZHQrs",
  "key7": "5zayipkRXKrU6kYS2BRwFKcwHfwNw8METcrKYBBf5jqATyXX5YNiygqSn5GYxCntHjg2owkr2rVs2PgQSeYi73bR",
  "key8": "581EZ6Ky5Z3uA6hz7W2verVNXsWyNyTdDCaGSJTFGBMU1cUq8kCGogiet7EXrFJXNTJiUQ5rzazTEAG5LXVwhAK3",
  "key9": "4E7PpXaSNeRQY3FUvPFkmiHCoQkoPWMzHH6VKmPsFX9vyvd8atJCWFP4yWsYHhMMiCRNxdkgTKYKQASo7CvZknRE",
  "key10": "3qEMZLVB8GFZooPUxpM3CbsMYmm88nYCXSiPPm8w8ZJnc8UJarenkjGA8Pe3tTkJMh5N1Lp27AKsMG12j85SgcrJ",
  "key11": "2VAfBMewC5EszdHxF5w3RpMsjbnnpX8G2saiUjGfr1bQK2ME2ukMgSSU7Mh2ddFhou8MJvrRRfXdWT8BXDpimJHX",
  "key12": "37YR7rtzbbNZwfFnwxn1Zg8uDWg3QHPyNqgw7unGZ4HqpmTsdmiwyRddz5HBkAsrmxkStTMaLtz63HKAKvC5GxBq",
  "key13": "5dBz8RAa378Y6D5maf6fDuVSwSQ2VX5WWVEDojX7MQypo48QstV9Z198UFT4jpXHesWwr5aZvNV6BSLFXgqAR7Ee",
  "key14": "3VUZh9Fh9Ydm3RRUx5cJFtyehr3YiANovXJDmkaay8cetZe7uxmciFCBkmc5dza1sJfHYW4bsoudWzL46NvLVLqc",
  "key15": "2Y6ugE8KMhHY6Vj5MPFrmRkzChXNreijYPhNZ6sYNrea5iikQEM8gGy3xmp88oEnEvVj961HJvuzHyssBRfFWHpG",
  "key16": "5YS6w3v7Ygks8QkcXAjtiUQcN6Xt4i1c4HQ2vqUBQgp9YsuDUN9oeZGDETwWWjDSng4uxDZAw2YBG2mynhm287U",
  "key17": "3o1kCSdPSPh34m4QP9oM6KNffMfo4zooJH5kP2zi216V5e1yU1KZinuu2WxYyVqf6j6DgnfczCNi5h6RLKSBEBhz",
  "key18": "5AAj6YwyUm8ES3B6R2RxSFGLBceQGdhfdqqT9ZHp2EzFP2TUW18pfSTQYGx2Gd8U748GkyjvmRYpp5jsTXMwRcwd",
  "key19": "nc9kBxwndZgdarLdTV7CtSnQrNjqY9tvN6L1MpwAfDncmBiPTNFryeS17r6YvDcM2nDwT9tHyiwf1DWU7PwioVc",
  "key20": "3k7jmkp14PGVB6enhn1hCFruC4cricfVsKSwcau9EZxBHes6AGz3LJYYLQtzLz5H4YgkLpiL5S1oc4ucPDmkkNUt",
  "key21": "4A5ukXXQzxfCdajxjQinLgJVhmJ4bUQsXnwqfyXyrvj8EhyMhvd6fTZnHGMNXBDzLmodG1dyENo6F727Wwu5tiW8",
  "key22": "622qx4penXMwEHAAynLomRmm4pL48E7cwkKaguAR1QPbu855wzaR9kRuBNekEQqyhkDuaEWinrMVskNenD2jfJMp",
  "key23": "2vsvZvDQ7LPrN1qx1zRgecxinAjMX8GTuvHgwhsxr1sdbHCDP7kR2XJryyZ7E1HFhZwDxAedeJTznuBfX4JVqMuc",
  "key24": "3K59PKVSfTUijsUwfb9SDatR7a2jUsvtnE8zcRUAXX3nadB6n27ptxPQYnbHvEfp3cvwpQ5Py7MwnAfag28MtKH8",
  "key25": "5T3mtVUkCLz5VPRRCCUhHKgeqCDVJ2C7ZixUfuLqR8yedd4dQcTNWcdNURVT9piC4dbGCVAKxZjN1uj3BZkkEhWY",
  "key26": "3FniXLZuaDx6cZaLoYu2ZrmxDPkfQemyFrnUpqrnKzS2nPz19ufuHWyDgQzPHn7NHpmRo4hU2Sade2GZujLedwcE",
  "key27": "4hNa96oPSLaWdoiwH3WD2tBeNMXm4rr7o7smK9gF6cEqVnsqCPj3f61SkkFwoaVW2ShPe2MSs1RLS5MgzBeuEn3c",
  "key28": "992ckc6Dix3TXd9ZVxZXcEC56s8MBrG8rH1aEk92YUZeQFLcMzZw3WNZpmNdZTPz7ZrdfaRTwxPi9KjWi55QjUM",
  "key29": "3eagJv6soxpczyb2gaGihm8b1GnEjA4cttLuXxdGrmcVqPMWiQjwNKC4sFQsDUfEbn9CLWRM2XKsh6go5gzHsx8C",
  "key30": "3jx1YbdDNHBwUppPuHk3QkxguaRD2se6vsFYHsXY2D5WjvZZkdYWwSTwddLnhgq3oKMtKc5wqR4cdsKyREVEMn8Y",
  "key31": "2QNpLr1MUp5zV1i2vj95fcKS3U6gnBdgHPuZUj69pJYXX5nsbSaBzfZJWv5HL8EDpzetQrLrYUgKfJ1Tgf1bzZsQ",
  "key32": "5JMe7HsiJ8CxhLQHTdYr6FrbZTBrEjrxTVArbiMp4f81JXnv5f3TZGhh6PzJZKjnj6BzcwZ9LdcxMmbkKPE5GTws"
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
