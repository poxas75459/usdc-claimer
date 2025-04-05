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
    "3vojEPvSJoqMB83uHCs4bmnEMWyaowRKNgkg9RiuT3MzKh7HEPUw9GPTx1VrQMJpk9Sg5Hgt21daj7Kruqv7CkQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44AK1KuX1zrr7SGHs8ePLos5T3naLNPonCaG3Qfn7ehp969YX8NqUk7fYCQmWCbjfwGAMzdPUAGfqkPUvm4vB56Q",
  "key1": "5gSex7RgLBMh6Zg7nLxn45rw9bW4npKKbuExUV2vRiDHf8iVnLtVm7Qvu8XspiSNruRNbG7EASkB9T9M72uKwH27",
  "key2": "4GtUNRHhG3VAJ91U4kyGhRzyeHaJn2amCjo6vviF4ZUFBfo9S18PFk3iCU6GSPkpa1vakdoD9opf7LCFhYwGAswe",
  "key3": "2s8PFLk7yaSNbzMQwSSsRMCV2Ms5py8HQsVNLWdHtVyJ1XSvCiSGA4wqxN4kiZafASHyo9KcMhqQ2BUPfKHkj5Ts",
  "key4": "62zrBz46iVSMfe5dWYv8Tg1pyFc2Tn5RxynNSUSNM2CT9TFNT41zc6b3EKSsZs7fW5noik9REvpYzcTzXgvqpK6v",
  "key5": "5YK3c65E4oeQonECmm5UpzmdhvdNvCmSNedEz2mQakN7Kw3pk7JkHVufdPtiyFQ1MzeJFfxbAJKd3ZKAgLRPxu4p",
  "key6": "2hfETCV2ZM7p1S6aSGZpwScpLo5miMWefAXnXecGkbcfXdAAgh9n87h7eu9XbqHTnu8Ut4eZG2qDoTMps8zAbCFB",
  "key7": "5ghqstZrLEpDpcFVMVJSioKZeNmV3Thh2zseXaZUjg7Dp58v3akuL29hZd5XYRfqXF44WEwS5SyXzbfiSsRYDmBQ",
  "key8": "3zW4Dvaq1mUscyQKuugbhuW6PkHR2Sy58EwbuxECaPkzJG2JVTNRiTAAJozn3mu3Gp5QCAts1Az6hM7brLSvoJzT",
  "key9": "4Jj9QaF2HHAxJkxUrLRMcmLmZwA3dea7HHjrf97WdbzbbbsNFuaPukhpKWhMWfk3QPsQVHtW7tLTJir5F2KjQJvn",
  "key10": "55KPShtyqnuany67pP9GtDm14WmFB1hwyqggiNTN5d53vWkGnbv4W1dmCbkVXAZZ61FAHpGMVtnPpz8nJfotdGgC",
  "key11": "3p4yLbAXah15BD2AhzR6duYFJQES6gm6VwCwHJdWGNHVfGukRsbsHZsg1Ut9jVXC2u3pCtpgzyj3E4iFXvWQrXgo",
  "key12": "2B6XLhxdF7CtbTFMq1SrZ8a4XiZPJJC2mYzcr4adKPhJS5rkWGg8VQUqPg4s8VTYbb8Ucid9XoLopXKg9DwZCvYr",
  "key13": "eYVGknZ8PYvGG6vk35rmeyTFG4b1xhuXrEFkBbRxxVnxHCwX7prYnkiP2qnWNtydGFzyD7UNDcqFGxyGBg1SGVx",
  "key14": "5vf3UKLhJ1FnXRDkRha21eL6rNmTuf4ivjgec3uGWHBWV7n73e5AdBHNtgopzVbqsgXsWzPcJxqDNvWGv4WPYaCe",
  "key15": "g7P8WjaK36r522NNpRp2wQ3452qNfoQVFoeRstdWa96zcWWaXgvBBbyR1bgTpz1DLGUR7uo18Ad3MkD7SD6mr7j",
  "key16": "66ZLtnczkzsha6Ys92BiRDnrYSDfbCUzHLuDAA6HXAZoYTw2ZKK2uU89L89xK42mQKGu7i3mTcLt4EQt8tQHtHSK",
  "key17": "3vpBzyxWGCXpkq3ZG7icNBqEmQQ4amzMnNciUeyHx2BpGm19CDP7uiNeY2pSMXkjcG7qEWLDVKkdRLzCoqwsYrGT",
  "key18": "2GckWYRKPYKrGK9XVbfuE3bVFACBpzxxH8JYJuR4VqXTMPHHK7yJMS4yUVwCyzzCLAYThoUqm5q3vYURUy4f3fJ4",
  "key19": "3KmsWvdqwhFNXbsDitWye6gWXxVnT6GGLwjHdWcyCg57y3tzoBtSDLn6ZVnqU5p54mmb3mrgzHG7ioiSyhdvkRqy",
  "key20": "4NfHf6WxhUeUWKmRX94oGAmN1sYadyMVMFCCauACDGdz48BefPowYRE58xzKFJMhhiYoyg7GDshuMmcmJz85rw9G",
  "key21": "53TqXDrmFtKrAbctmZQ2Pg7pWZJbQwMhdEELPG5P9TC2UjuyZhnEiu2oRsP83JihSuboGGs8ktKZwBBmowDmqA6f",
  "key22": "5iDzNAhdpEGJntMmmenSju2BtVtBYWBSNUudmDNx8kuKttN7y9Ph3MKQXUyjvUYJGoZG5E1N7x1XF4DWynXK8vkB",
  "key23": "o3NziWf76ffZfCZ73SdmADBJqGg3eyEHPHRZ7D2guLJByhmUQUUd5aMw2tPeJwRhBUWA4T1p4j5CshcT1zpWAiD",
  "key24": "c8NzeHjQdVjovUb5Z5t1itQYh8t6h3m2CkBGnxvhDhnG7YYgGgY8My5HBtU42SRbnvgPo3tZJorMsKWw28MUTcR",
  "key25": "3bEXi8PcjHsLAoqhcLW3YDgCjkYp7FxEyRPsSedNKQQ8ez5vK2PefoWbRyu2VNj1Q6KKbwiHK39m9u2KFmmdJqEJ",
  "key26": "2AN7raU4yCHTy6Q3nxrnHMKhjnYoBDkrCTCXq2Tt4V9vZo99UMbFWk34UQg8BjPQCk9aRuSGozyVU1Ukk1CeUMVV",
  "key27": "4XWx9DFGSj278HNx6pgYriFqskYSANk98PTJdZNXfhj2h1XWaAnNxkV1Pw1SFxRHzcgBLdqJeKJFnTvfHQ5iMZoV",
  "key28": "34dtp3sh6jRC9DpR2sXvsaSsow1auyJ1jmmxwDRAYYDH4oxZxKUtuEkgguPfzzEU5bPEg2KqaUjsvw4rjUfippuH",
  "key29": "4fUFACLSoZwFRogLkXkGeaQ4g3whUf5aQSU9A3WnKCMKJuBHmkqpP98V2PmBgrBtzf4Mcbnpib8WVVqW3HSA4oRr",
  "key30": "3GJGaQXJSoLNhAuFwJU7MrC1BoZ6yMocNqWRqcfhWXHLnNn1MutkM7b3uDvdJXSobgre21Ci8ERzbs8aDdejcToJ"
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
