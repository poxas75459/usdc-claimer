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
    "5qivAm8NdDFuo9kUmT3Fvqknhr3QqYX3VYPyyn2DgzJ7u54rJswBKN2S83AS4YtXy2tbzr3JfTV5JoWafPpub8r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vt6MWCPEaJqMgqZ6cUJxYdpXLbb9LkgXr9oPuAoQfcoH5MZW46ixAesiADPJL9apAevwpnJe1g1AKs8DBMNhNx8",
  "key1": "BRazjdjcCgJUtkjuFgU42cqe1XUoYyLid9VyXiDJmvp3tJkx4R8sA5K7gaNGSYhFmDr6pZZSLp4TqEyH1c4JifR",
  "key2": "3Fr8Wp9SPBUxF5RixbmYQFLRWq2ibRZRaKdhZDod2onjUXmFW8UfZS45RCBNJREJYuLgMox9Me7BdzACR1pRkVrV",
  "key3": "5j5RZkTpQrcPaWBfKvJKU8MCVy5zUJwbT9XfEicrtagDvd1URiR2Rq5W1iyhV9UqramHyNAzwYoHsQQyhuQwsGkQ",
  "key4": "3N9d9ns8HQFmXnpxKH2Lq19vgto8HWEEAacShVYfxowuMLp2XrshtYVewjanm6pZrbuuAmSo4htBCgvmgnFFLgsH",
  "key5": "5tkSvqQ1iSQUHPLmMKJmmT381NYiYc8g1aP6HSHJYcDom2xuJEUy2BFHWsHEiJd9N1vz9cVNnM4yF8gg3KfNeVKc",
  "key6": "5hGy2jDFoXLS2aoCt8pnUPrK9sZmdUmU39GRXkSfkbgNxLzdYvonsuWQTm2rHN54tPwXYJEPiY6gGcBSCWrJEfjp",
  "key7": "4d5Drkj365mna74atSounUF3n9fz5jqRZoR9xrFq4eiMHpUp8bVhuA7Zeeu9CcchQ4Sq9knVHqKA3gt4WrLNwbZ9",
  "key8": "21374fB619FnxzDAujbSkJ9BDQbLBRj52GRac7WCJPCHVWeXUYumLD8uZeJJESPiGxUUBS9AVSdREyNk5zaBPHFg",
  "key9": "2Ex2eHy2N67o4kzeLmzzM23EN3zLzDUodsJAx4pbF6QEujo3fmP3tbTMDbMTotq4agjA5KJcskJiGUA4fMhN3kyn",
  "key10": "wztbNQPcssvWiKFEeXE4ujU4iQVFfahCRtBhHzNRT7RxduUcJn18w5d1g5hm1ENLodZ2ZLt2HiJXFceZzp9Je6V",
  "key11": "2WWkkHG7CAJCxvp7ikH1zxzV8BZgghi5WFZsoxMEw2gMRaALbyecVkzn7R2otmbszFQ4t8VPNZaSp6TdASzF8fwZ",
  "key12": "kopKQHnai7oCFtmPCGd4NQSnnaNDr6oF7W7pGGSKAZRec9hbw2CoCRD5LF9AWpfLZz9FdRwGZ3819m8X9FuKRcd",
  "key13": "4xnGnLEZWMP7GTx3gD32XwCX5yrEfcGe7jR8hdEPv3UqP5m7CrBszzPwHgqEB2Hu6jesH4X5Jy2fTLaaoiH64MHG",
  "key14": "354vX1M3gUEaZ77qMZDCGiiAnBvns5GPRE4JivemHkBM56W4wWjfTWkbidtq9pAeRqESYF5VAgNmoaLDuUAgipCB",
  "key15": "5w5miNr6UUC5An9gQpwvQN1e7Jn7imrZR3ndUEKaBmwGjHxToMTAGJWmezJCgjRPoPTCGwqzLLyKKcUVFiPR8Yx6",
  "key16": "zYRtXtw9RkU9mMhd8njFSm1wdkQCq3TyK2bGJMNVyeV9YDiDUrAQAYkudsnNDChRFZYKDSZS1iko8BAZ2P9drTa",
  "key17": "Xbjxc2DR2dbLBezKs2WMUSFJ7K2a7j87RQpKiSEuZBVL2LYmWCmWR2M5Yk5it18waDqpefUm1GGkDfjuSaY8Vc1",
  "key18": "4G1ZGpbkPYnQNnZ8GAgUU4irvQyzrmG3PfLmEjnXEV7HX6ccs9TGwz9NnRZm6NrecqLnriXLpLgSEMv2JdwLoA1Z",
  "key19": "5quuxjrFGs1nddwBMNzjbde8JdVyb3oHfBWMFh2bqiEJWTiVzVAKTybGvEPPRyAuT7AtjnCVZ3nZK2WqH7uSZqmj",
  "key20": "298bRjohTXsjT6NzUkvYnZHTW58mWJ9Uqz8vpfPErGY1qx1DjxjwnwtA1dQecENaCC2F3rurns1zQkfAEcEEjkFn",
  "key21": "4rnaVyaCKU19ZBdEfYL5W96grnLpTSWq8e9yXHKvdFPJKg9ofzHevmXhcXu2r493db3xg7CKTXMfrAkb5hLMARbD",
  "key22": "21FCNnntcx4zzfR9kcVyduvTZbsL9KYh1ekLpyWAdVqTquUqQ1P5FMZde2iqnqbyViCqGAquPKPuKdBgP2tmXwZn",
  "key23": "3ALpvsh1W5X2yTniJFRsvTQvBrWYeyUyST6BuNL7BANiHUxF5Rv8ZjNGwAgXaLLhnJqS5neHdhtFJrbn3qzgUQNk",
  "key24": "45dc34fBfu6tgcqBU1SKxkht32KpSAgZnpK7HEzNH5EwVGdigky2qqVHKmoW92oNcHxvero9M7ZJRMov3JKFQbAv",
  "key25": "qRS1w3ebLj9YZ3PugybqW1PLQ7cKddTNbaUvJ9KxWwpfQ6nwRp1GUZPMmMMTV3BSpmefN3MdJthqngB5rbWmiQU",
  "key26": "wBdxsRv8em67qExrn6Np7LRoZYX4DTtfBoxE69JG5RooSG2xE1fuus3srVr67y4RLcqAsihNEwh5hGJostQbdyE"
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
