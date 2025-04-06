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
    "5wqeZXNVCNGTPXR3g2MUWtauuKT9VRteWQ4HQ3CAUEPJHtEHY3i8TFhxtE1RyenGPC5gEUP22Wf2ZMr4B3z6ZmKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sho9TZqrZXBLSqsy523hcju1Jx3AyGCTQPYL5xacdYz9VXDTFPrH6Bcy6Lati5N4tCAWQ7dicezqmPm3fqLE2bJ",
  "key1": "3TrYnJKpSp1NcT4RVss6NqFyQgrcU5N7aeEJS86yRGXHfiTCGv2jgeqH3XP7ggZFebBjf9BfDYFJSqUwpMVWYJn3",
  "key2": "3o8qzj5jymDRx8uwpEgmjvBBPLJWQUhADL6ah4pJShJ2eGHsPjMwFWN7brSUymRkKjUUL1aNcGXVMVS9vwaP7Dr9",
  "key3": "334SHKFgqwSi1LYnubGQPPYFKFrgSLEMDMb8JcJvxWoP4x7bUctF32W1cq3wACiYmoRgbhFTMnyoYdpCKfyFh3Am",
  "key4": "2ALn5JyuPfPtKVfHthaSHtg4A893gqigkCAGVdtekwFqznFus7mDJ9LUYngfbfnyYXjVWfkSbEPtxyr23sENQd2",
  "key5": "GGqYnvrK7fcqKWkiR7rHyLWK7B5nYLoMXKmu3RYwHX2vNuua11jVeRTGPXfjuiL1998zdApu2PVWgMdvJbEZjRE",
  "key6": "4Z9GbnTSoKHxU7uXijY9VqjP2RNWJyTFoggwUMbVpei5jUeLQ1GomLjEUo4DyE2Ta16yQ5vw5iN2zuaHmfEynkpd",
  "key7": "2BrQP5ACK7w8jsTmkuMc4shK17RmJMcZLkGDSRoVCoeCzfwHPxjJQ3z6bQsRp5PJTJJS8kv4X2MLs44Thim9cJm5",
  "key8": "5z5NV1Q6X9w6ANRnznktmKvxqihcFGg8PiEUaVtsvtXxUQv3DX8PsVpMJ3rKdxefujUWDCAEs7hbJHC8eLWMs15Z",
  "key9": "Y6aNqGvdg12Dxmnfebaa3JT6R39hwqZcmuLufoJHYtEtYeavCN9Dk1bEzWnizoqVuHZf8DRAXqLutp2vsr4EtZV",
  "key10": "fmvMeuMvu2e5Sd9pdV3DPKUBenSaxmcuxNkqLUjGNhptiS1RBq3aDWf3FrouGS8s7WE64YJqnu5tSh8iMcTdRXb",
  "key11": "5iJXpDybitDrqtfb4JpoWftbz1UMMmFmP8Ai2jGCnsXzgA8S5G7MhFyYsFhSRjxAUHkLDoKRhNtavgvhyrYGZDkV",
  "key12": "5NKJKfadqHLapaTZLMvfcemzKEx5qveZenU6To76mGrTmMo9cHbgzryR6FspvLtutdjE2koNL6rgocj1FCySZt65",
  "key13": "3Ucm4rVG5P6mnJjFdYkvpLmxYxnGAK2k9bEcv5yJFsCwhEmVFXKUAsXUcuXhAWSU2Y5pzczwYJCHsH5bVoeBMwEg",
  "key14": "2cZudpXWfDBY4WMR53navhXzBqQXvpBj5ZTZJcXkGyZ5kqn6YDJMUeFQDf96NQBSsWmbvJsC1j2ADYKXQURTbeKu",
  "key15": "5GheetLyU5heGW9HNYQ5qMpJnitQH8Lp2vC46nnEL4haNebe8ZXKBpb5aACrCCBfhvNBiNNhuVq8da5WzfCLMNJW",
  "key16": "3bts85JpxaPrCixVBuK1JBk96NhLaApDwZ7a6iepyEN8bK9fN9cUJcGc7qnFw4DHPE4ags5UNZbgav5CzAf3xT4S",
  "key17": "5jh9C5dmAFUqcWJZ5VKzwTPEHkavTHWjec7LHYkNiLxdBnShE8gUWz4FFizMKASMUifrBtksaNAC8B9KxS872UZD",
  "key18": "3zSY3RW7Ex9EMGkxtzp5Vnn8MBYaAGv1Lo8JGaogCQwDARLaorXAcnM4WU8scpz4KDiC1oeiKVwdt1t8Azu1DgRp",
  "key19": "b294TSFE69cjM77MYMc7w5bQgsoFyEWcsvWqmRg3jZAJZzQAudTJCFZYmrLLp4xmquDSDo55E1nD1QUYmEhataW",
  "key20": "3Y2ELuxu3SzqD7U7MXcyXJcfeK11Bo3NiJhDNfw1bCBrC8pvifez75nv3SFpFidhszRuGKXWwDWJA1SFXHMJmE2H",
  "key21": "67BFZeZ9PTJet7VJFpzpeG64AoWQ987fNwhpMtPYr1skQTiGD7rUfpRBzyeWq49dRwdQDeUaKAVv5LS19uUsg99C",
  "key22": "5ro83QjVrwHhdCNJkSP6Hn34iwv1VVZp3JjQT8tD6e4vHNyjXFPxpagYeFrECiiW3XjHYanxVgBJn4L3DkenS6az",
  "key23": "3qKitkWDkCruYCWsQqgAguDLn1559KEnRL573x9m4jzjHiaavpYQKDqcV2LVVjsAoEoMjUiaX2BX5YsawiMm3di5",
  "key24": "2AwKZdL5FeEemqasK1XoTjcvyEhGrsiXSiKhoBRR7qeWuCrf7x5suWW18rwHBoeNZcZZVAjhpepA98NrpguHbX4a",
  "key25": "4nsCsy8bmxRPxqj8tMnb6rewRU1bKPzboSZRYaK8CMXLMvVy7BvUDip1Yqd4iNaiW6E3msPjYfLz27gZCbLEVYYP",
  "key26": "5uLiZNeowA5t8oWAjaEzDrRAJeauh3yr1QEdT2XCcWcw7VocMnqRxTBRW1fVacDwapXqc86kboj1qa7t1ZCdagTR",
  "key27": "3HCjetwLRg3h9bkRuumysuh85qweSfTyi5tSLaR2nY3d759kEUKzcjv3eP5AdTqUjYSkRUGy6uwCAv5L2hd2wdS1",
  "key28": "5iPX8phnPyNVo9dhujtwAgvFnqN2XS5t4vJsUSZBJGsZm9QBf5nM1Bp9AeeiH5LmEGj7nJ12snudjFuFLW1QJ6mR",
  "key29": "2AoQXL6qaQE9fjKu36sngmsLrTTvvSPRkCSPWfs7PH88RrCwB2SEbmEYJRqXzd6oGPPNnYptao2cHxLrQZ4GDWfV",
  "key30": "NNGSoNnDzEHpDo9MAbxdxns2fEGo9QXyfxy8sdP7TfkhmPFHDmN2edGVLWsw6ZLm7UPVBoFiRTXaBWNj51eyHch",
  "key31": "2gQj4Jfn2yxMii1d5df5JFP39mk3TWXFwW3dshSFZwidsshz3jdiBRrc1h3JgL7YamcGgfjvNZmYDpTEQcxZcYyj",
  "key32": "4AM193M6kJMUaJhdZbsNdX6Ua8dnzYNfYgkZB5c6CeqgnnAB7DppEsYpDM3zyyesh34PzYh7JXo55XBjqPoMgGsJ",
  "key33": "DLCRn93HKnssMk2UpRr5r5wqsSEfnr4yhkqUKvXdCmBdVJ4ZBx7Hw8vxrC4LhPSBmuhSHoUiAYjM3m9ikroN418",
  "key34": "3FSuCJ1nYJutfPKkjW7rsRWGWapSgq7x441eX33dfovUJ38XD7vBtAtZkusSaL2zVYC98XbL63JLzWQ8yPpL125N",
  "key35": "5oUxXivvPF85NYhUYLKJGanjzDGX1p9tv6W5m4ngGcxMw1LUVsUfcsjUfbr12PmJshVyEFEkTYhxBR8CRroKrvKJ",
  "key36": "3XSGytn1o1rxcmFLL1PKoh6LJrs2UsxjzmEitrsojB781Uenm3g1bMi1v5GQffRzX7wtadAePsVHfUyB61d9tapk",
  "key37": "5JkNxNGyirLzdF3vohizVkKqRbNhobABpzfK56x6Syhq81PoA4pr8DQP8RbQUt79KW9MptuB7A7v6U92tTXUGedE",
  "key38": "45Qcq16SxZHRZPV5oDui2CzKh1o2kZf3Q5q3gKv3Rq9YWmaHNhvFoQrgMGbmsG3yMpocL69pLsawsm4qV78CgZ4Y",
  "key39": "4uZFgp5UMKxMVPRZfUDJWsw9AvQdAegF1ZerauKLpzJRXnEmf8n9UFH9FBX6e7N2Q5Uz2rAp5Feeu1tkM6n7fseU",
  "key40": "iWWcSgmtTmuZjfm2pnWnNwKn21vggSoJWwU41H2PeWqr6uwVy4BaFvTEtL3KPBzkT8Ankfyoyf1pvRTFK79jz3u",
  "key41": "5kHKxPM9BVizp2ayjGQgrYe5jFY8UfL1WNCo3wbq8nwW5EkFhBuNJPyFsYixfjGzVACtXRA8aZfS6AvN3HqpFrRy",
  "key42": "4CLdkFvgZVrPzaSSNDxuKJrij7zCcXWTxAEBtUYyR2S5STa68P1ZgrYHvCEbTfN5vxYSgE2HxnBkL1fvCqqBnZ9X"
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
