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
    "5dawXiT7RzrmW1s7ZhriN2CRDkZ7aeFv91jpRMTpEdNqyUABB8fRVFSho6e2L181kqtRsNZfi5UJWazFE5PtAXsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23cxpUTgU7Y4truMoKwAtK89t8sFbcouJEtRVNckZVESkHj9fcXhGNv1HQ8aXSFemk5z7XNRVLmqHKqNMcmN4n27",
  "key1": "27qjAVaxTCcPUjtzwSLBQem274qP5TyYQT5ML83D18Ya3BqV7FNkjpEBBrDb6YmeoZ5i96Ne6s1Kwnr3gcKBMNZR",
  "key2": "3UDxmBWXme4iiw4Ubz7j5qe1WmtVBVHEBbz7fhA7RQcRPngw2TZXxKX5YAQe35a1Htrpkgp5wS7pVgvPPuTymcoF",
  "key3": "4oXp5KG6xAmYW1Hohd9ZMddhFfhLLgULqF5xJVDER67wzHThZbmhAviXNr7dWHXjo7msbtsmYGnaxLojFVGP1YPY",
  "key4": "Djgo4DJTa6MnDzooauWZkRCjUYQnwAF35YnvnnxQewTqbnUYMYdExcFV4VXA43RGW1xEVVzADzP96Kbx7yL721W",
  "key5": "pSmdayHc8VQhn6nZ2t87KiM1Gw9z7U3dDEvHDui2H56eHDgHicHxoxZTK94tnvgodUUoWoFWeVmBQdriUjmScFR",
  "key6": "3zGWHYDqxrZYBU3nSo8DHDwLrFVpQz1XaH1ezfiZzFXW5FEWbdjogdKeAmktmtzjNHq9kovhxN2rDBZDqMKiqcxY",
  "key7": "3ACmiXzyoNs66ZZnNYX2gi7QU7feropZu51DqSDZWyzvZN9sV4ALey62SBHRvTEFi52Qy2UdVz1i7oh2JeasTA7r",
  "key8": "2V9brRNS5vTzPp1in19V8GaQfGxYYeK1h17hunkGnsVKvdpk1iFDxRUGgaLHJicBaGwcHr7614Zbc2iSCUrd5NTe",
  "key9": "28vvMMn6bGDrBGHGRZyCpgyZnkMagJQrA7Ceh6iW7vgnjkiKFrRPasvM8Exogjikq93nCvqr8yoiY4h2taar6Md2",
  "key10": "4k6kPqGAhdMDWDsr5EnvdUHLt5TY6h1Hq9SLPAPXZ55BRK1EmffoNYdB5K7SsD5hQWriVnsmQSuNyDKkH8m94HxN",
  "key11": "uqqPHmUrGCcsWckiTrfDozctZqyiSDZ8PqBqimgHaQozYfsL6oYL2v2YbYR3TgHpPCKrUdf8NvJ822ePpEtAT4Q",
  "key12": "65Gj4Wk53cLzYMT8EnfB9YzR5edAkqEPZtRJu81JecoHupUMkaJbwEQFUU3HiJmRtmTLiwK4hHFCqQ5q5HT2Y93M",
  "key13": "4jyFwTYXbm9GCquukYHQUorXqCsJadXqbrTrRVjBg7NvUHV4rvUZsqgA46v728UEDbBes9pJAx5GDUvgSBZxJh6W",
  "key14": "2RpC9VQ4DzBwf48R5QqCkfbUwujPBXLHBUaMifTuSHWgXYTBgn91yezk2gwksNBX7Y5kZsuqkFWkrmfVXsL281tb",
  "key15": "4P9Gx75rQX2UkCHBykXr8mCAKfr1vxtd4sFuhJN4sfrEbD5zYqjVUjj7SoimiFmeGB6RZ9tVwDxJNRsFkj5QviG",
  "key16": "3fzC1nLmng7QF3Ui7DQAzodCGa6hcydj3nv6RpBFhieaZ1oWwNNWqe4gkyj3VVNbsCJWoYvPY8UuQCyjomQWj3Eb",
  "key17": "4JwPF92kfc5jtDYJYj6RgzwAu1GBY1qHYqMKcgrsTqZNppbXfFBwR9NXpD595vnMKE4AqE3cdBKm12sd1u875vB2",
  "key18": "HtC1xvhcTcsPAyFJUcDJ4qkh3W4KS1RsvFNVWFpQjeKybPc4xwPxWkk1mFF8cqwBsg8X9J1Cr2ZKFGNTtVg1ooF",
  "key19": "55YyKmXJYEk7oCSEXsEAT19WoMiArL7ZckQQsc23zaJJR2d1b9JVsykpnzfq29hRmtj51ZozuYRqEhuTxb684d1X",
  "key20": "33zhQBWTEKovNK7q4mLHXR9zQYTcyDDhk784Cu7rBUnBs2w6jYVwrzG89KteXa1HA989uzKtyeRNXhutpDkf43sh",
  "key21": "2C1bAZ57j1f3zNqp7a9pfGb5edVUaPgfM1hN9fYur1miPnwrKrEm9ddKPpgcpAzSsx41PBwENGQTBFKyCg5bsZhL",
  "key22": "2aHbxc3xkLUpD8Y4DgSXYNSu7tP229TVCDMmXxLxv4i7W1DUtYNgad47wz7SV1LVb4yhzMUipJ2NDVSKYMm8mv4f",
  "key23": "C6EeL2FXVnfjXjk9z8vRcAuKCfmR5xBQGmnMSS2hh6Jot7pQZk6eG7W6ibq5R83q2KykZEy7fj7edNcpsouDzxh",
  "key24": "ksaP1RYwNgfKKexakDpsfRgZsW5WtfpLJt43XFRUG5zWvzvK65qmxk3Ew7ZDRxCYydCdSUcApbNvBp3KQRDW1i5",
  "key25": "4ErX1qU5ZsV7e8n8y5Pt3rQjGSyRZRR3211zykyjY5PskyjhA3ka8w3aoFqC58z7dWx6c89aVqkuVD2gvJg3VcoB",
  "key26": "71HikSFnaio9JMWbJXojeZmQwwAJBNbcvxw7LeuBWuyUqrfCF12tVW6Ux5uCUS3HJQGzQ8Dp9JvSj9buMiGAyR4",
  "key27": "38KjmLmBL9dPU2b4Z9Xa9rwWDx7y3CXErvMPA5JArgw8UsxJvMLnkMjBHyMaVkXtkeDuSd32ki1BJoTSezSpZixw",
  "key28": "b4xAigTGeimnYV8ZXskMsg8ZXRA26wFY44BBe7z2B8uybkMmkbKZHwkX8KbwgsuXFULdXAdizp9VSi9QYJDcD3S"
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
