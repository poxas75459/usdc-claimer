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
    "5HQCjbaeo2654xuPTs69kzCnp25UaparoJRtxbvMRf4aq45dpzX5DBBrkDD63Fbwky1M9ehrxWLaToQo6JjGTCHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Egx1YT6Litpowx1tNE3TSuYnehRBvQnsKjwwsRe5LRJkxtkEPhXKArAwLBhG9nXDxvHR7aBbSruTvWxe8pxa5hy",
  "key1": "3c7dShz7nFYTGP1iBpKrkvHDeFdBTdjR5rDBd9cKXYvukYvBvRF8Y4PRYvdqEKJ2N2Y42KdqgX3UdrrnTE7dKJCH",
  "key2": "61oyLwNBLmc53YqJrLsixhF37Ww667tkS8AzUp3FDWa4pU8BuRja2H5WUkSuWzbLSxfRcrsmmfNL9He45HE21xEe",
  "key3": "3uNwwo9iNKbGNmSrjyxrgbL3wkNiVnbGmNB7MGffd29sja5sqESLLHGzBnzg6amBrNjNXPKMRk88z7SXBNe5uwHL",
  "key4": "2W8x95JvcxYng3KtbjCWvHQrETrsErvmvd9MWyK27VA1nyysncjGbhRPxi7TJuKXWusY6CvG2ogF6CxinAcmGHj4",
  "key5": "5rfcbVNcLCCZA27PyKWt8WcPQ3viacqYYrTUHD4fjWarrjeXxcgVheJavsJPJfkAzrz9Z1m8zKNFE6C9oKB5L5Bp",
  "key6": "67Vfz4unututFaeRHDEGUax7caDgWdygZvbN6Za1sHgsHZ5gTempgkFT9i5bESYX6cX6B7p8r4MUcNU5g7SK7MsL",
  "key7": "2EXRcNBBPoU5u5cWupLE1RBurVWPmERKPFPbVRj8EMUinef9AAaMAgKgikUUQNA7U91YVvpNDutxjSQVpZhdVdpP",
  "key8": "2K6zsTVriMUWrivPAKHPLNx1PJYFxqPVg4vqpmjBKvk1wb2efDqe2B5A4Z74imRE9pxfYe2wygpK4bbh4gTxrpGp",
  "key9": "3bnSbQVsoGie8y4TCjQrKNH9613knKuPDt4dJ4QRgJfT7oiHJ11uF7WRVMPA7sYSRMNr6yhUTeqLFR5DtH5Et2bn",
  "key10": "4p5X5dYt5LZ3iR4v7QBTiCUNaQq5SP8BDEAGdy6JgWpgXFHLcA6WcLi1BrhEWV9A4AqLng4UYmpgUN3DB7rsLCqD",
  "key11": "67DnLH4S1ZYQ2ikCXuGc4Dg2GenqusYbTXNVP4AxF6ogvQkGv4zF5Tzdumm6LxSxX9HXkPLu5wjSzusZkzKvi3Bw",
  "key12": "5q3rq5Zm9MaarCjBoLVoEXhRRX1mPKr66jmoDm1wwLeRexFeyxPYxHF4tWUaBhFLEWXNMfsoksTF5jgw41K1Ffdg",
  "key13": "3RrPmY4G5omyMSK5p8aVDegwgLo2ZYHwwziiw5uN74PuNLhSupqRWdt9uxK6DM2ZxzQoh5kWxP4sAWP9qJLeNjPw",
  "key14": "tSWBEA4CBq36K3QfMJi89PXU8jrhQwVD2oCmJiWhJRCvyKhXwMnj4cc6NzpXaTfHLMXZTjJZLo2A922k43ZSU9u",
  "key15": "25Mc6MxuG6MHNwiWoWHrw7k9pNBPbXfm7yy2cdUjJ1HiLVJ83U86PGB4Wn1eu4zFUf51ZCGpuW3AhhW8eg7aNHCY",
  "key16": "4eGUwG442qB749h4VvgiCML8r5Ff2imzFvDqXUZiRtbyU7bCqsidntJir2mZb8tCAVhxm74i3AyyUjC2uToZpcjq",
  "key17": "5krt8GtLDKpmPbMqu4MRg5D1teaaAerBe8jypqJKe9Cyg1HMcrGorx1qvJs4P7giZSqVFB2dSMSvY5rmt8Hr2WD4",
  "key18": "2CVZtkcpDEgZ5tKZN13usN4vVmqbjgz7iucEtVgimwmrQKGewbGEeeWC8pvjpq3djp3FgwvTkFgU8wnVkLCTy6f1",
  "key19": "5mPDJ7Qh9rGRjZyKJn92SVE3gZPF71uBiMdsgPYxWJztdCxqy5exHCUo5iKQRW4MqXypdf84nXxr2pSq6LvbZ4m8",
  "key20": "5257zmwQ8LHBhX3kvY1zi6hvd7bfHW3EFSFmLHRVa87L85WHv7UAnvEjSvkoNNUkn55AUdwWgX3YJ8MkfLP1NdNm",
  "key21": "kbB7kRUqkJi8hVz1Wzwu21fp4sJj7Fqj9WxKD3UM3HmWQsav7dHwuW7PJaAuf7kvzzjRKHcCkHLiTpTeKLqgf3a",
  "key22": "KcMWZMcfXrYzdf6s7g9Zwfv3K5wYs6GxyeTa6e4aRa9SVmPiAaLceRUjMHikiTcctsTGPqGgNQRCpMLpfe1TMNn",
  "key23": "bjNuCVttxqCpMYf9oVGKRpvEF4FUjCVKP78nakcUQsmJSZQC9Q8pZoHGHYX6XVf5Wm6RCTPhjoqdWW3dwD8sFwG",
  "key24": "4sJytN3VZfHgA7Q5vqU3yr5fi3Q57YDTYyrLpZDqXbRq8bmhW3DRWXwhuP9UV3YRySoBYWjFBPwJpGZovbkWjs9x",
  "key25": "fsAa2aLR3QSMVH8ZstWKx95TKZnm3mA3bPbnaJGYJEFMHpB2iXSwhyTDWhe7vo5VZpHQLJgeys9fSs7U8MTehsF",
  "key26": "2xy4C9BNCcWAAc4AQWNUM8Jx8dDa2HFd5TeuzLDfNvagZBpnGz2Byg8v4QwhpuVPeuWMxBtMen71ihWh44jBkdvY",
  "key27": "3XwwdhYvbewgeDFnPVvYaoRuwk14ocgW7zDTdWshURmu4eem8j5Hs8aBQsJcdsADu8TqaKgkwo41wkgTktVbCYhJ",
  "key28": "3NRtkHNCAhv4AyrnMFji3ydiLD8NR8a3RThRehMe4Vfcs6Zx4MTRq7o3AnUicy6P5t46SZ5juhV9LeMz658dBfdU",
  "key29": "4jzDSquRHQfsSERorGQvaLyfRDWRmbhsCG4nxcvBdkbw8iCxxwavQ9Lw8VzCmMcgp3kurHkmDpj8QXkVzE3JPt7s",
  "key30": "zrEYKzZ2UMNYeLEEDYt5SojaiZPg5c5mfuo7jTFuUp6Ezu1Z7R8JfqYb2Lkaz9mZFAuB46X7AWeBMQPDcYaF2w9",
  "key31": "cxVoiBQ5dKKdG1ux4dUQ1oXZB7nGRh9wssZNQJXRkR81PA5rorHasjRgYExLYUzgBAZVzrmEpFTd9qQLAaTuZ3i",
  "key32": "2fcoT5SE4bKxEA9HHEphUP7h4KSFirA7NA1BoEXUwYfGopcccpoS2kSPMQBTHAMwQhWH6VQJZnFkTJYUM3SqdkVD",
  "key33": "5seopDxYX4QtyrwQiZiJjrKiyyVu8FfFZCqUy8NxMnSPpoBsreAaDFTBf1Ni2UJJpQJ2ftRXipvEHMRHDBTwJmPX",
  "key34": "57odsgijTqExd2na4hK3C3JDxbk3swtdRfR9UnV2SnkuErBLEWmyeSoTvP5MaoQzynjUq4fy4XFBEBarAAFNNjU8",
  "key35": "3dusoTL514bUrG74vGs4b7C3KKWAEMce4sTiGzgyuvPFwoCMYFihgmWiRiAD5WRY4hHDmFkAjjX2HsBsynW4KjGZ",
  "key36": "3xuUmvjq5wUYXcNBhmaVVABYGphvnAgNj1YmRRmpLBaMV4uUFbaG3m8Y8g6HEP93NgvQPVRQoRaaEDGai8unfkGR",
  "key37": "4qzQVHZrmRCMzvVrtgVaEHKy541VZsYL7ZaeCmHyFEk2QWdqAQ8mBTEGjtgn7fvGMD78kdAgTGnRGxjfcKonVZj6"
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
