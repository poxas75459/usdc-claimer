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
    "2t9LggBp8ptWT9q9Wh7qDndUumCXpvaDJ7gyt6NFkmjrZGeJcTz7CEiL6LB8sCUd6HsRJgeG4gUEUKPhbHcyVau7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uvinrgwFXR8pV767VmTsD6XwQsLNBHUWbotyKCxHzKhyFVrg8ipYG5h73dX67788tPdZuWRdwdtmdkmxcftR5kz",
  "key1": "9WQV1hZXEd9sSnAkQAgFAG6kyoGazhisvHp3JginPEjYho6bhUdv9vnbpv3KBYzVaK7WACE1G3fP5jHvjvDj4r4",
  "key2": "4KhNCnTa39XaDBKgdZzoWUYkHZhJyUH8iatJ77z9qk4AgqZeM2YuFiBZZ16RgTQxZG36LpURBZ4B5Y4FCau2Ea4y",
  "key3": "35HMASMJ7RasyMMivobo1FKanP54XciBVHcBEfsi7i6dB8doG99GnGMsbyatSuEWmokPaJXnHH8GPSLP9n7S9Tak",
  "key4": "2oTtDsNjbCpQRAph6sedCw5w5SsTthEJwVuv1i9sHHtTKzXNPk3RFd8Ybw9BQSyeyQCTSNHKgYB7KSvWot4cv4eM",
  "key5": "4RopwveoBuEQeC2BxsYk5WNSs42NXhznfd7kAK9gonbhAVcLVXF2UHLw3A4T1FdaPhWfs9eDWtkKgnmuNMa1s2pB",
  "key6": "5AQNK9qKRECiqv2RGNj9T5oR6VWJGTmCx4sYPbC52qsEGn69zzhziowVv2ZiSGmxEeARVkpLTEaL2s2ScmD2C3KJ",
  "key7": "2HTS2B4AiE76fG1c8tjfvpiqHj58diDimFzNGHX7xs3SarP3NZ1PTgf3Z1gx3MaHMCUM6bvJH1XdxxXHfuXVnCDL",
  "key8": "4Wq57dXJCUrTyYhkT9DEbir56mssEEeNuXJbfT5zVBoaBYaYCFJbET65eGYMfyDrej66pginsShfkUkviVPSXc3w",
  "key9": "4gm6siJsXWBFXp5hzdtEpRknyBiWgaZrBb53B3SqwuMKerPenfV2uHRDhuYZDvpKf132EaE4KwNqLDK4RPJWH3Ch",
  "key10": "2dHoqinMDYsAuuAqfkAbADseKAhPFqKHm5bfWB37YcUXsa26xNZVCJqW2xwzd1XimBKcaDGPA8riW5K4UKJHS3ca",
  "key11": "VYfYNjjgQ5Q4ZDoWfZRfBb85WQ82QF3tyeYJkuoxveX3oyz9ib74RNfD8aZXyJ93cBeCSsBLAapY5pu1ZvX1v1n",
  "key12": "3nuPka3Yr5ZQ4mzsjmqDgzpnF7j6VdGK5Edr5sXoRdH1r2fjxF7LQ3nxJV44bWxhcH1nRCC2dwhbcUbX5hRzguZv",
  "key13": "kB8X6WdRJiWBr2w7xYXDV2iEJ7SBnLKJHRXS8ESjv3xszwiKs1JBZrFT4oZNvRbfHeJppKctuJTzTfc7AUn42ar",
  "key14": "5DzQ9KcXSsi2zaBzy3fdVp7CWjEpvJLb2NDaFG8wiPenrPy1coKdVr3HT7o7VqHbMufP9byLkQDHdbUNZZLcmyiD",
  "key15": "56eLRxJTeKg1weKqLZN4QmLSHc3CxgB9U7KjZLvtpNkZrbgTttxnq5ct86vMTVmUd95v3PPxazrVYQdoGY5PXXbQ",
  "key16": "5srREhfqXGybBcWMxPQN4o2TfTLEFDWGNezgeEzfAcBAygdQPte7AH6SAP3TRAhgYBS2gLy8DGd3E61tqwiQJw8o",
  "key17": "5MzWEkWFeUanb6tAZ5dpApbsVruAHXAWwRpHrXArYaKf9irqFbvJbTLxZXDqhucnNbdpdAWw9sdrTcr1vmQxGxET",
  "key18": "3j5g6pX5Yq3ubPzM528khWeA5oTQDSR66n54wQgGZBRxSz3uguxRP5b3ArxBpif1YcrMWMFVDCZBhMYpjXJRLnXc",
  "key19": "EesHHC94Y33cQuoSdCTiu36gMS3ZQmhCpXbsL466Qr6wZs6wcH1LRRk8kvTnvqUuvojyDQB6ng7CSDv2bc8FHiy",
  "key20": "21DDbRphCUXP78mK5qkX8Jj1haVPzmV5rupbqJmVqp52VUowxJYkyP8WGy3DjMNmVGjUvCUaQMGaL57XHKkHoDjG",
  "key21": "4a5kUpigbK7qv5Ep1Eh8cJpv12NPLJLJ4QH5jhKQAdpAHTS8afSdaqXFCUENa6iuMtQQKR3PDKXLGoxf62BoVwjj",
  "key22": "d38UUwE8rmMndKWGdCkvvBPLjAbsdvXxDpV3PYXWzT1eXA48GmnWDDw8xMyUyjdfGAj1wFNQ6spYBZbFUr31avd",
  "key23": "4VthL92WHrSpyu933dqPrgDRMHfLQbJMXDhHadvHN3oR2FQrDDWNr4YS36DHQRDMveDZeMGMHqSXvjqh6TGznpUY",
  "key24": "3awfdxJtaUnv5nXnRCQZWQKCAftzwAXB8VZSBTfr5bXtfh4Y9Y55Q6do62k3Csr2qB3njweFG6nx8pDRwfh6j2Ac",
  "key25": "2s2d8Q8oTQfdNqrC7kHmeVCeCeLGdjs71eZiS1ojkLp9fJiTKEXZsn1zYCEPhQY3a4cmVzzHukUch4F6j69KHNTR",
  "key26": "3z5VU9w2giiHCczmvJiswfpEEJKV2LfD3rohnAzogFv956P8FCNGJ3G7UtBGuKSdkvHf9dSW4oabFP6eo2LaYUPX",
  "key27": "3UajAQb91PvDHesKps1aaLEF8B4qXxg3hXNDQkPk3cUaFicxWxZj3rnJzGETAvDduGybbH7cUCacnoxts4F11M8S",
  "key28": "3Ds43dPRqtrDCg6BJQnn36uPR6ZScCEnfkgXn1Fw2GC2E4QSE9Fyvh1vUFUXfPD7KtGyxRjFbhk9pWxgaDnKsV6i",
  "key29": "33uMP7WpbXSZ1erBrn8vGo6xhtMUa7oMfpjeRPTcLc52MVmFMgyRBD2ruzXc9VYR3H6Piv2xpoiwdt5KvwVp4Kzr"
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
