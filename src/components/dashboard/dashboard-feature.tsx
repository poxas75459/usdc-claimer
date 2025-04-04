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
    "57VQCu66TRYPMcHB46KLyxk7xVLiTSWgq97rt1NELnNoGckUctw8rpi9k74fgKGjFyX2Qitp3RV88TN1j9y5iz2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jn8deeGPP2rKTFACgrVbPwF9i77edcEsVpijkGjbWANkQaaM3BY7yZg1RGcA8o6ceiizVh8V8s8JpTgQD5QFARn",
  "key1": "3jbnwrx6pCDXBq2P2kEmUcMN6GN5wPiFuQLtMYfxudRS5h8kazSc2KFG3fi4o2kGpCpBK114s4o1oAEaMxHRiuq8",
  "key2": "3HBZkPCk34efaJJuBKjuCn5PJKdt7FFQNtr1U68FJcZGKcEWufgLYZ7CHRJ5Y6GLPPPuraRX6148F2isgxHUGvpK",
  "key3": "wdW4s8iDrnFEyYGVwKxFUjAQz1DqenZ8N64TBPZW2iM3XagzcRhaLmj2w9MsbX7GHicGopwwb3rAYWGrAGBfHpU",
  "key4": "2C2crfBXkrofazakvwLUBDzqfsejhzJs1NP69XbqaKSbK1yWDr7cFn5Bk2NuhF1cHMY1mEaGujCXTZXxVMrBeR4i",
  "key5": "4UbPe3xMV8nvGFXAHdXXNvkAXw2peV52q6Di981RgTAKbq9Ea3MPqsURTt3CyHWE6nB2LW6vo3pop62aXUu4h4BS",
  "key6": "5ihKEsmcwbrHBaiUFkLaiFt1E8W5e6M74yG9jsJjfA851rX5EyMBwqF5CR6URR7VW5yYaU3PeqDGtpWzfH22hggH",
  "key7": "49ZmA97ecFvpMyew1RACoAvkHi7EXy6Wt5YY3tGKdTkxzvgPW2oNr7AWFcy1rhpjvuocby1gvr2aRbQnCvcRMbsH",
  "key8": "2Sbo6LUvGfLA4WLYwWm3SzQ2YjRUqLuU3d8x5ZzrMcH2HdZkmSM4cJ69dowfzMmUZWErBwCd5322Nyc1rxFAdSHB",
  "key9": "2iTWqzRxMA695JuoN5jMhtApPMMkcUobWzEbT51ZazzxeQfx25EvrH7c4RQJKS4w82Bmd6BonRCMudvZdSVCrh2T",
  "key10": "56HEsBmhSZfGPqTEP4i4uU2m55oa6ojjwH17HMZ7AsRYANHUnEvS9mh4LRLv3rkDiP5EDF79CmXxXzJMQzQEpg7w",
  "key11": "2SPVna7kYe2ZsY6fJQvM2zNsnsFQf4UN1ov2zLzCJXjzRygg85ExY6DCuMEdj1k32nptYuZFWFSEA2GoPVTk9Khg",
  "key12": "5Z3q4iBDumYmzSuhs2M6WGxbzb5u8DhvDFMdWowZgTUAVZorkscZmugXLoceqU1txzuwEGxFf8y8pJ8sYYiBLud3",
  "key13": "LE1uUCVMrEGcdxqjjqMv8g6LhzmZXHuU5AYWLX2WucE68vZgDgYkNAbm3ucd8yJvqf8jmAc8jfNJ68Vwfj9Auxt",
  "key14": "zCu2KKFsfLCWMC6YwBjXPbVae8pSqrQBcXj4kwZsor3N53TUyLoY7gVwu9gmtX6Z31UkJEj4ouc2RvXzoJHrviX",
  "key15": "2cwdfpGZXDyjQfKRTjHnJp4oN2UrXY4opvEHwh43CDawxEXgMttW51y5sEaUQRaE3tZdzqtgCgNWfG95gYHdvLR4",
  "key16": "2br27VArkp1zYAYXqNbhNBba333SmGNbBkLSMGG1fbN1EszH1hzpoufqrWU4mUQRpDX8DPgFapELqajNP9PHpdog",
  "key17": "3JVqBYa54hQ5PPrtPjbXAaYfHgnaemthtCVt83SRwiV8jk8zgDwPyPdGbw7UobrjpuJSdX9x1CmV9KgUdBEYrcJ4",
  "key18": "J87JwPkJ7vsT4ExXu9VKjHLC53Sdj9SorMxPAhxhiS93pUGoh9FvJGz7qZx4QoUhABiwvDScikGydn8D2ttfDqg",
  "key19": "4CjkRySfWruCayP3NEHUXgaN5sGkTSWz96NYs8Yy6vzZ3N5d3BwyWuZQpSADbuNpSQDoNNBD1kw2mUyarhVZcFBD",
  "key20": "KHifVGUPTbBre5dkMj4LW2zQX36735tAdDkAtTpKwEucmBRUUrELhd3wKdCyk3FwC8ZJmYp494B1DqsJHBfxTzN",
  "key21": "EoEoxY3jHa5YzGmYsxTjgy37P5rKcpDvxAXo8mUF6ayisTBXPNcu7Mx7RqdRiQv5QWXwjUfEBgAa7pGE8B4xZYs",
  "key22": "51HANKtHzj53qkxjhwBm2Yphyu6kN97ku2dNuv7P7qs4QC4SLoZycKnMYdUbQ4WUrDPcXEXBRFWgquD3pUFhTK7A",
  "key23": "3JudoMKVYAQcH5DiE5gxzNfi4XGnrggbzHy9jht5vtpLXnaypDbpWEgz8Ms19w1X7BpfAj3DoT57ctKAQxXVv89P",
  "key24": "37R4RqcvgoT3d27gmeVAFjycSVa2L4TeVcRKUQPWffiKFvY8nkkubyhKhjVM3jqv39FpAXaE8dJWp2HFNxVMQdR4",
  "key25": "Afdr3QvNnqF1sgfnoGQHpgAKL2fyrTRtb5mLUqKki1BLHPgwvmUgStTq3RZnW36P3cdW3bYt1GZcNdN916udPxg",
  "key26": "Rp9jrtSXNfzf1VJ5SfZXFcx7JNy5vCRjFCUCQWMKFpsUrAr1iHP4PaM1bsYvYaANFxT6ASSZcTEipDmGkgevoeX",
  "key27": "2LK9Exo5ue68DDN3ZTpSFF7YfdgVjzXW2cpbRc4cVVE8dL9MoLR5pynU6VfETPEzFnYuXS8B41KeKcbkgXtD21f5",
  "key28": "26VHNSgk2CES2c3Fw7XtRqdq37JXyhwUvA1B9d9ZwcppwbDjLY8LrTwayD5r43zbtaiRjwqVhAw242D7S7osm1cR",
  "key29": "3bMTQ3q2e6Hj2g8UdUcExponNCDHwZb8rnygnfk8BihaCe4juKyLnsMhRXG6A3ZBcz8Wm6efX5YGAGpCDHaBnD3X",
  "key30": "5DwASaWeRycCuJhEterniG31Q2zYaV4tuZRhKvhPb2dpNUURAFv3fZJLHQojxEbN6WpHVG5evdo1mmCKes3LCqoc",
  "key31": "2fVx4LGHE4JvHrAwBfZJz72TzUfrt2CbaUuDgaA9z1CLJ7BZCKK35Rn2CPdBrb3MzKjrNtb8tCGuuBNbLqUudEMn"
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
