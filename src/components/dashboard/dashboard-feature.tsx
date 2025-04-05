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
    "4R6drvA35w66V13QidmfQhiAtkimZ99fV3ZYti7qgYP8Lb3QPCTUW2uYLpoGFZWnbun6xmFZ1DJPAmrKGMZgTrjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFdaDqSQ6akJqaig5eH25fyonYhMJi8guED87PvLcr6JPvTSt9UBvjELhFVjMZSmKaAPJJhEtGKur6nhUMEKWY7",
  "key1": "2LTynhWggkYhNxtoJU7EFBRPcwZSqJUdTz7o2Tsc1eoPS4y2qnk6BmDZtFydC9781gKEkWf3FGFjsx3rXofsSMaH",
  "key2": "29btToyQQmf691yg6x5C14S9Bmegks2sKJ8KXRgH3y4rgKLBMfjmVrM2SSj4hF4xc8fdxkw6ydYRa5AvnFEEBGSA",
  "key3": "4wmr3oWRjagrc8nTLrqRyM513riHSiU6y2TyKJVbDhEDeYZNbtUUTSLc5hcao9ivPchsbEf82wASRzNjXJSM8FoN",
  "key4": "4RDdNkkwPc1tawZbx3Gyo9ebCLfLZDNcCvvdyPS2esGALRRj9pyT4RuvtGCzCEU3YFq4JGfLG6WrEqgTEMXzdQVj",
  "key5": "5oAcWQtosgogiGrURNB8x75fS6rqTHJ4rp5dBHqezEmJ5yGyNwLnChzXBDgqc1gsBLJeBDwtiGk1a4Kq8q761sMC",
  "key6": "5iH23GZK6dyRsked7uzQ9ZJCSx8MaXikyaVMxob8efbsy9BCNmdm3QssA5vKMpEWXybvpMJRambTB5JtU9umdfCJ",
  "key7": "5XmqoTwCdt3tV5d2TTBK8oy5VZDNS2sn9vmAj3PFNLmH3jFviCHC2RdpMz7pAzGs8K6WyeXo2QaAhmkWwkH5Tyz6",
  "key8": "66zDYQxHKVQCxJ9uxiCHhmZktEG8Y7RG29TRdxU4nAXLYwpfAzxPnnULqV7jizgwD29vfZ2i43Bi5nrfDZkwN1nx",
  "key9": "4RtbtcyCACnG3KHN6BhFDYczTaryP7pZqsD6VDj4dGfkVU1a2FeTyEkjZ1JLNULHxiitED9RoY1w4bzzrk9GzHd4",
  "key10": "34UHva96xUCqbDDm1zxF9qfUtqhcm1ogSj8VKrAbA6R85WV1srUrScTvio2vfsjPtjZvgjTJ6kkwhfcihJkZSUgb",
  "key11": "Ep1Fhhv2LPfJ1LzL1uo84zh7ij67kcRcFLXuMM5iSdo58XQM88cva9nvc3nJsuPHe3DDBXQL6WRHHutFtfpzKMT",
  "key12": "5anHZrfp2zhV1tK3YdrTjp8bFXJs9kXyDa2uWKD7fuAzjrC6XU1pwiBoZV2Ayc3hUS7feczEEBX5zSAzZH2LfkMz",
  "key13": "38agassaPfUnHUcUhZjgHHGnf2qzozn7NgkXeucwrG8p7qNHZ9EfieF4fzP2VzWq6e9kvAABvLMRji3tkw7rbVdJ",
  "key14": "3NpuVBp8xNnFNNcCP27zUvFo8HDLTjgR6Rvg1q1zNRkKqN68ppj9Ak9krpkogR3y7mhHpdr2pibQVYW9cNFjgEq2",
  "key15": "THNwYCdaieLxcRCgmARpzR4vAALCLye8GeDtcGenztAXrEfpQxH1HTVHTBWJYSD6fq3ubMDxsArPWnWpcRVfPnX",
  "key16": "2pjrpfj1rRS4W1gNRoFhoRLBcjpqNGpSfVvzoknva74miL7zCdbGw3Bmm686kdsHodanoh3qNpMMKVFiyEjgEBcJ",
  "key17": "4qvZgFTZwM49ZWcaBNNjExbtT8RfN2Kjoed7fnJB3MLos8J47drmWmr4z7Z6MpmSpPKkGi27eMX3s6eU2hZtjnno",
  "key18": "4qC7hGX4KFF3uHFboD2sfFzFPzJRm7VFsSHPF7p2iSzgis3x7aQrcFD6hvLdgmjVuWCNko421PufWY4r13zwLRxt",
  "key19": "323WB5zhRN8KArepXnkMPvcg9MTdvsqmwBQRRZHQ5WnT3fJ9hwgHoukXQPZcTjd8qRoUHAi8YZ8XuxBTyvNXvk4C",
  "key20": "4o7EsQW3FwAuxWQ5iurjpZcTfhqBUuUEgUapsA4nwxW5DByeWdywfePkyJJWtyEtEpqHB8cFUojD8qQi9pAShiv8",
  "key21": "564S4d7qH2v6jfBN8ap6MJtqRtpzk9nc42LoCM7tgQsg5dF5uwoESyht8MRhyS6WiA7s52PNCF4gHFrmm5mhytE2",
  "key22": "2TJGDtfZnUeoEMHSQNLaA7zEcx1Qy4oxnQQoX1nM2zRduoVeo5xgearBYfVNsWjsaiWiBmJcKvGg4wFZyVhfzGWX",
  "key23": "2R4SoZGxUJx6u34T86PixfTg7whZMtfYBgDyDNGVjku7BbTdWaptPkszGKC2t8XJH8Y2pd8Y5shfeCXMsxP6mkMG",
  "key24": "2mY4s78fyT67EepYowUxWYnBbHWbXg8H6gG5zMXUbBZk6p1QXszjJAC4aoyrjMauSuZ7vBmSbn9RvwHNYDNHnKJM",
  "key25": "bsEqnPT9b3PdCf2tS62GFj66vDNQZf5o9Re84qaLTtJgx7dk5JccMefZX9YuhACo7q451hrS9AXnDW32QaP6GtD",
  "key26": "TC8Mu21S7v89FcuoGtX4kstJWXjPUPLetZPPXqvKCC33ZrNh2iVqpystMnfkCzWpaabN3DNH9FS9vC1VkXVH2gg",
  "key27": "5aGd2SZcYqjpKCvQbtBXH7jV2Lf1AVeutSrTk7ebpqhnGvZRAR7EDZ1b1gVznthQ2yFc3iJvb3eXiBRqwuqUTtHM",
  "key28": "5XbKD9reQygTUYx8KvUb9iAkikkhszsK7whAsRPSZQ2WnvYp3C1UXcfsrYNvQwtLcHQc3rn2B54r6ALcyz4DzEcX",
  "key29": "3p9ahMj82yeF26jvwb1dWhNRJHqmwnFWhJ4ks7qmcJUx3oxAaVGUMMRvSvVESN6zua9jsqNc8L5Xv3jp4qc9fgP2",
  "key30": "3GTKoVj5hFRVJekytSUdTTVgh4L5RDJp2ehbEqYpsjiCAgtwEMMjPM8CHwT2tr4cNAwSTksAiqSZZ2tnPDHwsqY8",
  "key31": "jzx9kNrR8C4YFMKnBFQ4YeMZniyeFgStToWzNQVKhAf4mSJeoEYxUXfgZohXaXUN6NUiadYGZDQ8e634mBUZ46s",
  "key32": "469XoaSGFFdi7BjpE6gtv1rXg4HaVM12RTn4J9yZCbMQchLe2PC2u6FVBKzeAcGiWAMSbpb42wJjQ4WaBXGVbMAq",
  "key33": "5dCa7ikDLa32DP8iU6nWpdVAn2t4bDXLy7R8UDXTCsEUxPo8inwuATmu56sCPqH32nYMh3MGnjgCw27oT2DnM54j",
  "key34": "2yT6ctJeDvLGSCxZ1RTxA8MtRrp4Pn23LqcMYo668Rq4zCUkoXvX1HQ3rH9tMwvT91da3tGbpmNxHBAW5qAkt7HX",
  "key35": "5mpmkKZGrMoeLdzLvhq7hJU4fJC6eUiXQt9aGH7wWRS3Bsi3UXhZMJDhxSK3GqknhsbDQ3H9CCJvxEPRymsobyGi",
  "key36": "2eakiLGXKG386QUbC62n1yNMU2bhYepK1EKaa7pq1by7AqXUAxkvKsfBR3HatdCP9NqnuBD1fC8H6WVrRvfTcao6",
  "key37": "4Rp71V7GRHZ4qekztbd5xHDk3D7bdXS8HLyjLvPD3X3Xx8DPLNM4L1KwqqAHd9zUAxFrnC5wSCkgezmee16U8Lpa",
  "key38": "2SphAHWVzz7bkAPLvqRzVaKbMBDXYxNCZmhiFY8jRGQZaW7e3aPDCdZFKhAFzmYbVBNpn7HYjHmuoeZBLcXx6MUB"
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
