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
    "4XnsvYc9SrZmCj33mL8nNNWzhTm17agE3GQhL1B6gJ2JJyt2UvWDUR2qDhgM4MQy1Kvv4jGtgcfkU438w8PxdVEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kX4HPShgTw72FZGq5SVqJAQz9DiU7NtA6WWKypE5bjtnfdNwSs7R4H7a1M912a6kTmvjh1KvAh5QRjTAPWXkKsn",
  "key1": "5ARw8mrvi73LSRtySaqRf19qqhPDLFjCyg2jwJ2bT6XRhW8doo1b8TWp2GJHAfajdj3rLsz5keSpCW9nkbkGRkEY",
  "key2": "3NZvahCtVVeVTSUjyPXSWH5up2JeoAYyhJa7FWGv6TURYgVm7tK3bdsn9SFeRBrzNhRznYdpscf6mLPKw4CmAZJ2",
  "key3": "2vxNXU8iyyjgzy8HA1Nyh5xm7GXgaN4FqyfvUy38DeTLV8fbd3GkSSPrGRfNMSENYRh4v6r9SWSEUCh1hcf4tAF1",
  "key4": "Q64dXUmDQxCobFyYJxj1AGTNsb7XK63pWgAgvaMJUh4qCv73kz2EJi4u8xmsgRvDxg4EswL2Ph8HFLTY2L3wSW3",
  "key5": "63W1PqrzSV5i7sPQvEyjLKFk6PP7GFxpvt8YhhhuPZBj7NXqg9jVJLqwwQHRSLV2KZ3rvj7F9n7MnrvC1aA1E3rT",
  "key6": "4uPgkhMWtWkwHmdyCnPMNaeFP8NiJjy5WqP8bV7WRLAuuPTHj784bfMP4rZFApqZs573ApjwzFAY6FvwgFWfE9vU",
  "key7": "4qfysBXTvzos54rtdv6tkyfLAmpgPj1yCEYg4wsUsbSRp1ywnMrW8ngAXDRUpUeR6SsojeecMfW7wPYpjXUCciWa",
  "key8": "28Ff4ChAyxKVPE8EJwsGuTTktu5FcgBM3ZNuf9tpYp8gsubvNALinhqPb4GgbhCq2cbfDWxnRV15JkvmQC7BJFmy",
  "key9": "4h3NqG9jSFuXFBA8jDtMGuNa8nWP1i5uGzzyW6k4exMmohwjm5kWSMXVpr33f6ETpftKzaoByUt6RtNtfRQVSoQq",
  "key10": "2oEiSSymRYoDPHyRVmGURgFhpWDFdMJNE5EcLLsL6afwZXv8xQ8jHHQ4QesyEfodVL6iWNV5BfzmLyqMmoYXs4fr",
  "key11": "2ZfAPST3eDkQ9BVLnxmDrnLbALJi83R8BUCyVx3um2hzyZpudgFdYpTcWcVwqeYFZgKmqgbKwtXqfyLF2fYFjCr3",
  "key12": "4zQdceyRaJjZw7KoKtiAFX2KR2aVFVSguTvvTrM8b6xC6GfgSp9YRj6Q4SBeJnkynydteHp5vKcLh2PSspKcpBp4",
  "key13": "3BrCZ5kRjWvwQLDH4g66nVG6h15KhVoF8XWhsTLGzmvuhxvtxLsdqzhScpzjp295LujsevHAAbMXMruuqedgz6XZ",
  "key14": "2cccjaBbamdhjFuE2JsENj1k2GbMRJNujfCAtkH3tvMTAgmGa4aMwSNgnirCwhgnm1afSS4keFU75YRYEU1LyQr5",
  "key15": "3f476DnEAGbpok4wBax1LrNa3YcdzZnz8KgmHq9JyTpmJhBMn1CXVsh9w3QsY3wRQn1S2dzPmvLnUxrgX3a1VXub",
  "key16": "3LEU8MwgU5KpHtnDfsTvA9TAgppFR3GuVDbewbmMoCwUrfGp6ddXTdpSPhh4cZ6MohFFCHjm2zQL4yA4BxzoDAMX",
  "key17": "VaQUfJqTCTALNjMFSLfQpsWQ4qZueVoacVPZ5TSCwoZ1UN311WLzd2LkHyYX7FhGEYGZxFZtZQdXh5mNvC6w1cy",
  "key18": "4sBhoa9HMTvYtWEouG7kGpesKAGjng1D4BWui6K2mdkBxdaAzrJkphdSvyRKK9Jko49BfcwSmZqNMbTjpUYVHyuk",
  "key19": "EqExHjC6z6Ctym4ZYJSX2Y4AWoS7PpCNPVcFZxVdRE1PhywMEWDY8YVU4iZMnpkAtKRFuaJ2b5pKUGj9BGUFhSR",
  "key20": "sy6Xv9aXrpaemx54ZdohQTaWqyTV6eTp2yc4MMMc4inwFcZWh3XR1XKbskXZdiwCawLxmKCwqSC5gH7f4YvgS4v",
  "key21": "3Nr3Y578sWuev5iYTxhVwNwFWgPe9FvFFoGBAKpGXoUEKKAutvEGPioX1Udp5DKtw2AUKC6EAsTV346ggeNpVr3q",
  "key22": "55Cw28UymXrTp4JB8hhaE8X7hERPGsg14gCTKkV2W64UKbtCnxeG65dJvZqd5ZCnirMA9DgpVMBXAsEFCrLaVDWa",
  "key23": "HQ3x8PbFpM6wB3aWapaMm8JW3XKcBVKeAMF5Ed64xkGjSNDBTQemndpX1J4bZNJ2Y8TN3Tbn4Tv2Fz7RugD3Rsg",
  "key24": "53fZFkoQmJMEfhqEmMZJ7JzYuXR1hdbvN5wtmFKUswdUgjMMkM5KQeVRANg8hkvEAKSFCr179j39CDQTHMvNNZC2",
  "key25": "2W2rdmuuvLzPRZQi7rQckkpqsWkdECBygwRgcVBcbg52MzWx2EUD1orpKcgabf5y9Ro5QJhHNx6aW8bBrahAccT6",
  "key26": "2FoTEonQcKzsXx2AjHN1jMM81d8VstbpCmVPS2WVYBfPNSyQK5Mp5xBfKv916iWPextnHH8ymbSTUHAYXnFNARMv",
  "key27": "36t1JmHn5cBdSiQAEUrqeMMxxjVupcjWMuhocRtdwdF5moe5evWN6gvrVJrzXx8Wy7zdZR78xdPe5bHdhiLrQQy",
  "key28": "2joDJuyFriJkrLT8ju5zacTk7yyMNARMswPptaxiGrDG43VfvmvuAbFfqqAuauetbFcgq3knGyvKADMRQFdtUsLN",
  "key29": "2J39yu59zpzxQr4cjX2Q7DQ3nuhXoux2dWp5TjkG2wb3eooPwvkCqKPrTUffGRrauzqD1fKLRW9rWQA6EkEz48sm"
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
