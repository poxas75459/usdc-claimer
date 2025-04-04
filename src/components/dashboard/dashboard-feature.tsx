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
    "2D37QptQZWjhd79vGPAasj5QQyJJrLXRoVETXvcsJ4MjgM2TZb9sBaRniE2o8aYZBaSRGRJG5183XKEz8TbHiL5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kdi9ijtALvt1ZSPeaf4H62uhokuagMzvoyMrZggmEVMkAk3zFwmgQY1LFg9N4ndwUVh7tU8YqCVJaFgZdw8nE3H",
  "key1": "5R357fpnUStDKttonCfv3SLaYYrvRH4eecEiZjZp7GdT4dgwEbWE2UknE3SJErzMGagpKu5kA3zTtijKnL4htzPS",
  "key2": "3tehsZni3ruQ7GfLLhq7c1j6x5RAfYu88WtRTpghq5FW7myaducJ1K2U6QeQ43ggdfUiWWuiAUYE9FoEU3KBGZ5h",
  "key3": "668kFUC2rCihv7o6qVxrNAZFnb1pC8QuoAWT7EaxYYUraEPwCBjKE4YMXJVv23aErAxVorij5eP1WYPDdzMXCHKS",
  "key4": "4aM53F9pAwbL6eNbFCiBfpYxXJwMyeXLFpg1eyvvySViDNvvtewazYrsmtfPp62yTTeZzM5mHiTyZ6qsSsHN6UJp",
  "key5": "EueGeyTBV5V6mu8cY6kgTou26PynvXtysy6pC5y59sdq3DtaTX1NjRTTSApFRAR2tUNYw4yPjt7QKASPwvjYQAP",
  "key6": "EoFKGRNe9F7PLbNNS4bNZZuVm9F5YBDBiRErbzQ8gz5QTWDuLEbtVsbnG5jkox3rqrBZrB8kXKkdAi1ioTAW5L3",
  "key7": "4q6hT1PnUoqGpaneSiaNFsuKXYGnNUGzyExYJQHNEeku2kJFEvq3rTwaac6z1RNporHCZD4KvkRo91ELUPStLD3o",
  "key8": "38dz5HBwE9ybJiFqvdKwVZDz6KZdcaPruLPCnavhCvJyKeRPUMyhSi5KAu8ikLn9az5yp1V9Avn9UbNocPkyRPBC",
  "key9": "55sML65ifobhPcoUQgi2yiGFKXoQmF4X89WuqNYPgGRf3w9vfS5sbC1M6nwZBcyGtcYoxESogMMWZ1jYHsBnLm6y",
  "key10": "3CD3mf7tsAhGYoKbjLsi9qiAVXKks3vm2iyRUQLZR2U6WRXD6Friiet2D1MXEReifMa9HnhmgjEjHERct9wxSeD7",
  "key11": "2Gshb3RPrWEqppKoeXZhU5fURzzqqbwkXkhcr5ghH5LevyRQXd4Nr87zRnWzPz7bEpc7xxwaCwmCMrt2QSFM1BPG",
  "key12": "5YHbAXmrfBV7qtfVbiNL6U2UBWtAEmpRiUrL7aPbbu7uN8gefzY6NrvxRTU8FesaMunKbkys21X9JLTXytV1ELaB",
  "key13": "5DFVAML93hoVrqEwbjzXUwEAcs7HTx6JbK7xhQ7P1RZm3D9wKBsxBiGGdHfqvTXgZGomW6Ad64xwMvsNUVKUkYmj",
  "key14": "53X8wShTjeaSDVBPxLpGY68BQYpKxZMQsvEHrjxErn9L3LFuiUwQXLTK5vUxGYcmfqiHcw71Q8RMVAkiDsBtrfoL",
  "key15": "2rEwWz3g1MdCxiFLS7sdnJunwE2nvxVv3CGtUqYh7Dk7TuQNnFwRTtDsQcfmwfjYhoTfWw1qQd1n2ZAYQiKfvXxX",
  "key16": "4NxZXas1gsdddk1BBUEM998yjvxdeRDctxpx2MzRapdKmxqgweK6WMeKf9xWt6JNydXeE9t5iSTXNvt2UdWsDGKb",
  "key17": "2tXU8XkwEoTLUEg9jcxz65AHBAZVApL8Htcj1UwdXuGHnkytCX6unH6He2k69TtLqoqXLZegFmdp1VD6UdyiTeec",
  "key18": "4JJzhPQ5DKnXQHCLXdR2wHoHcErNDNNLChNFMyxHkZiPy7RUb6tTQFEvRfGqRauHyhNGqTA4LsavQ5ChRyxdSTF",
  "key19": "5d53TzKzyCWdzRRNPK6rcGKZFxGMNn3hpBUXRPBro8ggNbZbJ7MT9c5oTFbtBAT4YTM58WvSaQz1SNiXZ5pAzs2N",
  "key20": "55xwjFUKjD3HVPcnHrWi4CXWhaAa9tAwhkmHnkm5MoVjpgrpGmdnryi6y3rkJWHXUYGdh21cR4kBZ1c4eC714bd2",
  "key21": "2VTRvm9GZjhh4p2L44jRPJPE9hByqrpi4LPY2V59M4vQPykEnheBGN4XgnRSMUZKY31EdyVFACHvUwfyZhGaZNdj",
  "key22": "FXSwBG1m12Tx2XSgCpcXsr3dPabM8NoPCTtZQjYU1mFvcAiBGfBPZLq7WanQx21AQbYa1MMJaq4gMMKSSgmo6wc",
  "key23": "5Ud3p1HAxKgjKVgusGgmMsGbZs8QN6AYNAampN81VCrtiUfmufpv8SGkDxYLU5ArVfsxeZSvGMJR3rxs5XiWM3Sx",
  "key24": "29nozfoNdM2ac2ZzGXaUhphM6QBZtmpUpjkvXotFvvyzehzAscGwJsHKWY65DxxCGmyhQnAPLjDijhoQdhbjtSsp",
  "key25": "EMtc3DLkgGxxxTDun5sDiSGKubw5XJTBQWKGVhNyEuLMCZGpZ6Bq7Uf19ibFNe8QKimsfP1xFJiSo995Sw4nogE",
  "key26": "2DkNJM4SDbuC78YcjRKEt1LDV4rCsBsaNDY9jN44KMYhrF1Jy4F7tyqkEuQYwZ4uc33rQJ2jALotrRS7AoP3XE6X",
  "key27": "2uWtdSjd81HjM7jDTX86uPVLFwyhysET2Hdqp1UdywZ9ujzHra3jKjhrnhWE5vn4VbkZsQUXm9jF2JATk8J4f6zY",
  "key28": "5U4aVMh8P5q4r5tV1a9xQoEEaY9cXuvSMSXREPeH42eEEvE9dqF2p9RHMB4pfTRBJDUfpAR9DHzohoSr2HvXLp8N",
  "key29": "2MTt6SWvf2gjv9KEW1aoYK9az5T9vtXyGCHwkDKhyEkvR8xw7SGRDsnKmgsRw4Ksj4rivVsMLPTh11jtmKPCvjaT",
  "key30": "2CXxk7zrP65dfiLWuwKMwSCzspox9MRopW3WH9zF9ZVwTd33SPWxM9sC843vaPDy2HHAWGxU8DkphwaJBoR5hJnt",
  "key31": "4gkQJTxFm4jiPkWeqeuFicQZiNSBPrXeZskpR3vxdB7yKqDp6Hp4L7VZML9nSPe13tRfEx1KfALjwmY7dBTkxTsy",
  "key32": "2LDKyxLdVpH76n6AJCiiBL86ciBeVu9vgGKygyTusiz5MLR3MXyviLBPAsCHxiSAAYGm5pQJ6QZ4dojsx9ubGq1P"
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
