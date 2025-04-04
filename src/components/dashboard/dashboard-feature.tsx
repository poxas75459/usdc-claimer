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
    "rL7JeWX6iMsxrC2LgTe346kPEjjhTxhYkWynCjrQ1P4jmhwsha1JHdgkMjUaHDEXbRHQoBdzCFYPmQTthSrw7dF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8ucE6RF9SwoDo4FdWo6hJFkXrrX4bds3cZAHWHZsahjC5LDXMbLVDUVsu4d5jegBrt78tJYa5uiXEYzmMjmkYM",
  "key1": "3aDRtyTbxRi3ff6DGQ22os559Fc4NVqLEzgkhCEbf2F5aKUB8UhmFbxYhCuHzyVvkHB7QphQKFPi828KKLogpRuN",
  "key2": "2Eqga4fTdwtAcubx8dETWk8hSBRBGF2MhcJGR2qSWeN4igjkFc2ewCxdaRudHUrX1amVeGWKR66HQaBf38MiHDyg",
  "key3": "3TXzAesV3j4o39iaSCgQuKKmXVAse8FvMRv9vxSc18XzgqpbjsgvnUqRp4TgueT2ZL6sqqfHNaGaixcc2Sc1c9FU",
  "key4": "5pnxsCY9R842LYXLLPdJ8o7kW5SPsqKtuaSME5VT818UesST5DZZ8GWHWmkrWnYrSeJGtF9uvZtmiKTFtzxFcywk",
  "key5": "2ZHNZuwQzvXCuCCN1aKdfV8CgXnPFxkUD544uwDRn76eKtmJgnNTPCjqJcSSAzMvEXBVc5z3AdkxTshxwyw53Lp5",
  "key6": "4FYXkGa64VPZNro1o221qWQ4mS9y7kvNXenKVMw81eCB9rZVVTTZvM7ZGaEuFunzVeRmwnTxs8oP6ECgcVaqsvDy",
  "key7": "31563VfSRBSNZLVic474PVp4f2sgfwfpEcuRhRqdAhSCkuNHnpToS9Vwbxn1nERkf1XXn2Bew2Cc2Rm2xfhfUZp7",
  "key8": "4ZMvr9jEY7HbzmA9CMYjtCn5TVjLXqeEntBD9WkDAagtvGCw8pWnaT7VJv7adL3Revj1orXisFa64AzjJNoPuAmi",
  "key9": "5HoSx5QwcTtNRr4WjMMaFNsmMb8TFiVmaQ2drhBWi4iK4K83hEFZwb8DFaPprGNe3ddfjJcv7yh9WVpCzwz8erGb",
  "key10": "3gXAP6SEh7hc8PgP4beXWJUk8dS4QtdXjcKFKc4ansRaMKZdJE3tFa7oLLboi1EoZmt1y6WySEuSVrcHqo3gCiU9",
  "key11": "51uNtCC3NM27U7Ef932xcwk9Duc9pQmtq3vpazxYUTAAsjH3KQmsHbEjmFK5kU1JCBjHHwLM947ydTKpF4fSJJQ4",
  "key12": "4raYFjiy3eCmA5ZjM1SCfmjMKCcaoCNcxmNyt5xXB2NyJt9R6ThKBg23ssPrUk2Tx8iPXUZoDznMux9F94BwDMzd",
  "key13": "23RjWMowMLQfUTacARVp8Azmz4kNrAAndJo5dRAeeXzrvLzD4Fun673VUWtJedUmGkiKdJ2hYprinm8tnkgm1Xgc",
  "key14": "5tpcEKMKjPiPY7peTtdCEqEsiqU6GZTEbv9hNurPV4zk36XiBxjoqtjahURQL5dLnqethmto6TvhLFfsttBVQcke",
  "key15": "5iGJgwZTZJmMwiTRezDXw42A2k4vsELHDEdwDkk7UPDX2RUf28L8ckxEubxHJVdp3jz9M46JL8kkvngoZNMefDe9",
  "key16": "3caUBADrurfcHfHk32E4strbb36FmeEwfoQkzJ1A3HwZ7XCwbGWwM6EBTDCjvtTPMcS1rEjiBVG4ozVS4j29VxXW",
  "key17": "4TpBaGG7NmhqyFc7jH24dyV8ZZifGgeAgXsKppTHN9L5B7MehzLXzkuyVwbr87jxAwk8FenzPsD1qmTQ3WAs9Ex2",
  "key18": "ENf9FHMdu6ZzBu6qJ4H4cF5G7G2QFcCCMVVWbfUPthhkLABhjyDuY6TQLpjxX9MUUNtbJ4L7zTPEynJJzfg1uWi",
  "key19": "2AyPSY7DHS8LWgYqCAqWiT9KeXNgXUNPh3CS9dJD18oMxfYcvkCafymGsayjSJEPpXqx99Ceuat32xHN1b8PG7Mf",
  "key20": "Uuu3ocuHkWzWX24f6khATvC4W9juXjDa7kBPp9DJ4XVictLq6xNxtYrZnwL4VqFCcU4g2KXkE8BzsvMHkBX68rt",
  "key21": "7cyTvbXybXQq1J3q76td82CaEGkXyvU13AEwGnyh7pk88TAeKtYDcAAVNLTCPcEfVwzgt1yoMum6vwM5Sq2jKSA",
  "key22": "36fJ94fzYabeBeh7FiMP9joEXBiiYmytHQQTXnokcQXcGaAKaAmdnDoVAmU1U3tcV2i987yRchZ6BxsKyh5dAnoy",
  "key23": "2GpvRoSA7e66dsFDywoqUFaUwCJ9NUDr3N3iBt4ibTgsENQ87Rv6v3fDNvpamVDq8K9ADWnZjVSrtTXvYmd7rTE4",
  "key24": "3MizeBunDMBc9DbY1exKsZZ68BXGKeRMrPrKNpirjb3e9Tw5ybDS69vhQbz1M5d7kB842XwdWGpLgocNQVnXGVau",
  "key25": "4PAL7xDtpa6idk2etwb9shuaVFKKVbmAP9xCB7KUrFBjBW7cwGmu9cKVB4M7ciCSME938S8RNu6KNAYePtKUzTvz",
  "key26": "297k9n457GbeTuRRzePrMzJz1diCQbty29LakHMMWqvM6DVRxFj7FtwnDfS4BRhue8A1tCmxjBWdeQxM9jzKZ15t",
  "key27": "2kprysRBsJu7kUveTXcTMGkJLertbjrpaFgqWP8AhZ267q9EWky5DZn4ss7zZA2YXx4jiuuMFkdrWVptdN43jT6C",
  "key28": "3gSo3WUYDT6yzb8fMYFqv3qFUw59DRoCmdrgC44dEY7Vviz1uYfVPPG7R8KpeC7zYD7VdUJ7mW7nMdTaCEUTfGSm",
  "key29": "31SptSe6Bp91xx2rXFXkNLHkbeePYTdzxE7fEpYLYDVmN6An5RkHfTyCUZ7Vray6drPxFDFgvFsPc846svnBURty",
  "key30": "8HdEM5JMb7bRRKV8BaTjqBZijgUJX1eKuAiCbDRf4ysqqPTMHK66aJ655r88EL7PaRk3DxiUgLv4D8HF1w5hnYh",
  "key31": "5tGikWxfjMQWvkRbJ8J3ZZfDCYVSPXYKVwnBqtJE5GJxrCeLPSccKuzaFRLqHGMcf6a6oUwGQbsD1Td1hEDiQf2",
  "key32": "mXoodW4P879Bg9oqt7JrY9mfJn4giXpEMSPx19RMgzgY1LWpTgdEZNihpNi4gZKF8i43gMTCcPPYo78yte8Gdfk",
  "key33": "5eyStCa42zqjFy25XvkdXCi3XeUuLNu2YLK9ouJwU7MKoRwRMHMYByYusv5HXCac2YUW7TDrCMmRyQW24tByodxA",
  "key34": "SUgtvAYRmhrLcJbBfWHnQ5QLwR3WGkGnRZfx1U1Eaaew4xUN6ensFoFmqEqiqqtJNRUXW1FBziXkrrJ7T9anrD1",
  "key35": "5bxq8F3XcYFk7HtMebWwf9ysz26HfTSvEvWSe8T2Uzmmm4d9TFjuz4vnVqeY3ZW6G2zqfVeu7pCnBVxFaSCX73oW",
  "key36": "s2D7X84Q31zV1XGzkmRNi5KeuqFfVyoG58fbuoatrNTNHEQAaHJ5ASCZ4YdYhnmBADfJpJUty1K4bZRbcF814GN",
  "key37": "vMRtTRLr5DMdwJcMHmLzenoeLstDuU5Ed7HU3SwPce2MWhpnYavbQWqREEkx45LnG2qhAQmRv7sUFdCGDAvpG1D"
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
