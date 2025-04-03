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
    "3NJCiSjn2A34sxAmbmETsPs5jFBPWhLMyovLBWEdBosuBpGwNrYAfgWzQZGMN3xW8gXvVdYC9M3joRyx4zusLZWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o3Y5XJ7ZmpF2mt9ZGWkeg8kdt76zX7Cw6qiewKbWMVgBXezY1r8VXnxdFdsGTpV3Qd1HeZ5kAvcer1EpWQWULbU",
  "key1": "2yjtd48B5WdFc6EatiEh49sQfiqPo2SPfGyXBtHF8VXmkMcE6yFVnF6NJrD6uH3ksMY3dRUDLvqf8txtKskKXf3J",
  "key2": "4XJT8X2LsZ92fQAvgabzq7k7okyPruXpWRiFe6nKJiRap4F5pQ23y77wW58XwFDykUaDrnhXXQTR9SfebUsFn1mw",
  "key3": "D2K1dkXBDiyfMJVfHygpvimPCVhuhSjSNApKxV1ueHZgs8y73Jr76F1qyT9mnmZLJVyYQWZZai3EmbKQfqDqitC",
  "key4": "rvW3pUS63h2zGFbHiTVxP5bC9QALdXzuPrZ7iUkkRECKDe9JDWMDDJme3RwRDkyPj4ZbvyTPEqv6SpeNxvhz5uG",
  "key5": "5AmB1WdSZabsgbtnrk7bNUu21rxuELLefyB2qjZKSHTE51eGuJAJ9U241bQ5br8PqweeizLFd8cEs9RCJjiZFAsJ",
  "key6": "XxP4RjPz1ZwU6B3Tgmgrv1GNXewT256XwVuEeUpmbidXqivnNfpbsUUXepqi8AaxZhzpnzZCfsXMPbQXsnQxHUC",
  "key7": "4nLWqFa2Y8fXUhrQw2eCbfvrHMtuCu1Y9RhiihhDRKgaEJJ7qVmXFbpwysSc3xZ29fjeQJfYXXFit1QAXXR4rJmh",
  "key8": "5fnti6PRoAcfiF3YNHjhJTDQTRgdMdRGQSyqRV3qdBoyCpKQVsEjKjSg4DFoYUy4VRbeULxDEGZccSMCSTHwzAmm",
  "key9": "4BSQe1H3XLSDwMxTEAXyxJcXyNJmEpUNQS8TnfLFU1fjpcZR7seascmahkHudmLDqRerzpNUcswC59uJQ4adKbLn",
  "key10": "3HpnYWCGGTauNU6B4c62C7uqov22hKMo6jKH1csuqtrVepB5zE6tEic9iPGJVH9CWTQEyy1HcprsHFLbxCCZQMyz",
  "key11": "2sHVoaL7g8TaCTML8ssbNXYEWMUAmHiXw2KSPUmr8MgPg1GdhJh8sq1E6N9HoPwWT3pS3BJ9Uxavc5QMGy7DJFGA",
  "key12": "anoJZmUu2vutsLQnMCJCZRG6TWgMj2jv1z7A9r7zv2EWC1JjjLDuvWMvEPJrAstbjUa394wisYvfGpp3Axp2rL4",
  "key13": "43d6J4PdDHt94NLiEjRcjussabh37nWbP84X6dNsBQvFeDMeeq5vbbrGzPzr8kPszxNJbzL7bEmsX7sTZ2tiWKca",
  "key14": "66DVaoqim34VT1QvNc5V6eF5brQq41c6F2oTuyAsYaUfW21KXoVX8SAvDg18fih9vqASh1xYREnPd9PR6tcunV17",
  "key15": "41Ww9sU9kaVWUA2yiW55of3euhddapYVqj2UgRMW5aM4M9iZTd2eoz1VhH4MuWYBFB9LqV6C2LexdAiWsUkfwvqQ",
  "key16": "22kZQ61jiBNqgav3Jqn3wNTckMxKi2EQ1RCnD1BKcDGKZWumSHtbLrHiFpkdpwyQL24KPCKggNxsdceVwCfGGZ3z",
  "key17": "5X6F358iNywCRkGEWnUSZmNbF4Gmbnf1f2rreKkWJ2TvRBX9qi4BtWpKgUs23Y7dHc2rPYBSK3SS9C8DrgqkfzG3",
  "key18": "cxyWCDBQhfKvdCoTRTbradUCmEqstGHrHRaNTVjbERa36pnJzELdVdtkRhcxoVmGmWmFiimJWfKfRMD9CCGzY8Y",
  "key19": "5vrfK2PDLsMb9fGavLLB7Xc1mab3HywT5F67nN5GtctTHUViZsJ1vTt5G7Anu2W94KjwY8Mqcy9nsJdWzrm2YXzw",
  "key20": "2u1rqMZ7BmFAswo34QHmbhL5pWRTFFFJJc6u98TaBvJS2fRfpxoYkx68sbb1eMvpMiYRv4md5bkXy2n7tKhnVSim",
  "key21": "3dNdAB195kNr1NCEWcK2hVnfDBtkCeMSs3fZZc7KmmjUkGQYTrF75Qk8dE9AvDyc9iUjndjbN3KsaxqyNAuSxJw",
  "key22": "5UZY3H1imeTzwcjJFZur42yj7nfiwBXc9ysaNZi6TiXjvS29idHKey22EDbfPCyHBsh5SWBD32LTStiU4SAWpiJQ",
  "key23": "qZL8dH9xypo3vXTaemUanBRKscgmVmD3K6HMVmqx1o75rM1kzxGzbVqcDXEu1p94Z4W9MtfRDASYYquwbyAKm9G",
  "key24": "3eE4USxhetFK6sQBq9VVXiFoNoip5TSSb7U4YnPQptDUGhcoeGwiZ2YuqxqbfLMMy3A2zteKKm7UumysVFcaarx1",
  "key25": "tuTXYd1QSMFH355TVg83DwrzvEGqyz1PhpjXdC8UJVBtBnSYvbob1SDKooo8hXqcxAtuSK6ej2UtfA6b47rwd8V",
  "key26": "4BfTMvguwtERsoM2Jw6hHtFxuvGkG4yeKJeLDVgxeabAc1USEyjjbL86LmT75obatAKJ3pB7da53qvpzHJPejTs5",
  "key27": "23rBVP36MiMDKGeEvLKrJMDvJpHDjthThLGEv72iznaLCWDATxBTJgbXL6RqmtoEupLgFfaPZh71T2cSKStbzi9F",
  "key28": "2HQT2i9mqPpLkgQBrh3jDUmAcFk92q9M4WjQGhft4aeSWw4iMvjyoT4XrXzfhCuwzrqHudDzLmGMPRwDRPJ83JXC",
  "key29": "4ycyiXm8eveVJwm75H2HwGrZzT9LNnuSGnwA8pqk7oN68PAM2KweQLu6WQQ8jNT5WzCnEmKyDsVLED9pxRmE4Atr",
  "key30": "5seG9TxKNsiRchStANSsyAuCuCrXft6puyeRshoydekaqzrEZEJmC8zXbMYz9tnkMbNw4ZFLxiYtSV99PDNX9cS6",
  "key31": "4Mw168oioGNqFLzWsLJ3Fof9p7THR16mC8gfzbB2a9H351hAaFqn2YUUZsGbz2W3smvBeTR3x4kgbucEGXsUwD39",
  "key32": "2VFZJpwQNkK6ewc1t7nfn2ZpNctAssK4yW7AmPRvYuVWxM8iXX114k5fB4Me5w9JrZ7RJHqezE3385bm2Fi5yUXH",
  "key33": "2ftzrfCnbotqRaVmwHTyzFchi7zUMBcEYUmDrQUHN5CJtWuuwTDPjusyawi5w8dvCqa3A8xbcJGtUxRWTLzGZNUx",
  "key34": "X46xS8pCnPHTdtAgiTMadrGBcaG4Nz9TmJNrnfXdKNHrnof45RvsEgxPQX9gG2yVhucZYn5rWEc31YS58WUb28h",
  "key35": "37RQ5QMzTMN92THpFpbTRgEPYcVvzSBQZ5qzDSYeroYBe8NPvKReEwfvrDpuebMix33PHyibW1XWyzM6GKQvyAJz",
  "key36": "4E6JD4hmAUFbyBKQ24UahUfB1KTuUs45c9ctZW1ke9PcqcDn7eKh4CDU297BGPVbdrFkqx1tRtCNnrMoJ9upDGth",
  "key37": "5QjRxawCjxAbd3PdUac9tpGUbZBmtakkN5eu6zZUk4GJ9A95BuCcn7PqqbjhuzF1awkcNEr1Zv7dg8Q3g2bn4u5S",
  "key38": "5FRocpaCXScvtu7fr6eaGG46nqQ1joQLQymWqScWPP56yhSNGwhR956wdjMQndwekCg375hs4nT2gykFrBbZUkZz",
  "key39": "Wq36owJDckBygap3UTK14Qw3NcmD2F3sf95SbzqSRM4wvpy3WnpjPhCrnnwLVQD3yVeMFbvP3QANGM6oYpFggS4",
  "key40": "4w2Ur5bPTQ5DZuVeSo1L1XnoBQLLD1immvRNyyPuhosTNvq6bQAzoq2LMAjMyZREiFkzfcgDztWg7DKtBqdK3fWC",
  "key41": "49Pqrhqf9afgpSucYSprZq9DwDEcNVfrazTnJSgDMcQfTJiWYNV87UF9nj9J3v4Z7WKxqNvughXKAiYszewzqFF5",
  "key42": "9dpMZjw5RaFToWTKCCwTX2EHBLBYeCnb4daUqkhDaQaC4oSCbVqCDxyT7EagheMkBpFkUWXtfVJeM8f9KHCoTh8"
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
