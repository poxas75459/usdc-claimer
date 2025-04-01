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
    "kEU1Zs6Gdsej3YyAYEHceFTmfovdBELf4fV3asCN3kTcMJx3vqoAQ4dNQoYqeVsGNLdkEhAYJNC72KECRCs6xz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1o7G6PHveD53RkNvsJq3oTdqaT3VGKXndF19zFa5TUgtwNZEzNkvoFFeR472P8vGPNBZ6sVoav2ivNGH8GkrMg",
  "key1": "63JZXtbqpkGXJbf9T1EnRjwtDbU7UZ1r4iaUcH7tEdZ9Akgbk51mSazsUrbKUqd6xzTYPfqttzokUTYTzpUSSfMZ",
  "key2": "5b1o1UFPF8qwN7uNTQJk2RFyTg7jSyd6RvZBbCVL3GXUAowUUT1YFAMn2JTdBhdDK6BTuvxzvxDvMD52ttiXVEVC",
  "key3": "4EGisCFDkXm7UZPZjmw5mRuR87v8zs2u9v5NCBxHfZMT9Sf2LerjGx3KVet8xpcKct4k5jTZZzXKemUZr5otTecY",
  "key4": "57yYdufhBk5pkqNobzTLNKaVgqVjS2eKAMtHXgTTXSYHugbJTMt8GkjjidkhfH4nB6AR92Na4HzryFpowmCpdhcU",
  "key5": "5aDrVApo5sczdfpCZhSPudJMi1wQiyfswTYT8ikbKxdnvHvWAnHLx8LygkcH2pJfX6whGVv1hKaSD3g4DdRAv5bX",
  "key6": "5Yxxf9STvPGqpgn4XP25SXUwzoS5NkvchsjLdhhTvjiFRMYEuk2J7Zao35KMZUkxf41Be2yfQX4DaZcu2QcR83pE",
  "key7": "82Kk1Yk7nYPPfofeF27wvKPvP6CwsXBSNyVNWV27tPXFGaT1Hti7SUFbTx9rMjgZ8faobYg6e51bUpaWWpEMqod",
  "key8": "2WgwCK5HmxpBmeqRVirLttZamoY8ExZptqGJzMrvXXCCj8Y3FYornwBLkfMBqe6TLteLtdnXovHds8wcZ5HHApje",
  "key9": "5M5maAYxLuror2gmmY54M97yieuprcSCeEk19BJA4Xt56VYUmQwRnR1rWkAbVkyYjeCYmJRaAqscB44r61o1KYzY",
  "key10": "3ChJroWnsGBFDRTFxLd8o3dd9ihe4n1syLp49S6742ryoECpk8rffRvC7SxhneS6HHge4XgBTBMpFHQhXX3GVaiY",
  "key11": "512h9GwFhnHFk3FF92D7SGKTTMckWG5KoYYH3QunNBc8eDrXzLQWkQMRQ11bUg2JaaSkNPniwBUSeHNRJaiLuuEV",
  "key12": "4Ufuv7kTgDHLGZp9vQ3g4ZVTb2bu91uvjFp4sVVNXCU2ynP1bNvVmJvhtK8HF6xQeNG6hELeLjgpRgwHDriWQBqy",
  "key13": "4urrhVvBnmUZcuToPbEAsZBaXyTocVqC1Hes8eqaW6C2EBzVfVnf6beaSt6tD2AE15S9jf4emUttXsSA2AMjnBUo",
  "key14": "5eSLC5SASsnGhDXmT2bZmWntJMiNuRMY9SiXYR6nYiA1oyYHXYPfpMMYWCxtzenwYufGpPuFzdz1EW9Cc7xWX4V8",
  "key15": "3vmp1VnNfoMtZLt7bEbVzptb7duaGmcaqJHnGu5vCjzhScftEJCxLUbdb7Gw6FAwrUuEnpKZzZPqoYaoZqVxsrqy",
  "key16": "52xe6dpRRKt9f4hRt9trrFcEDUcuGpAZEVk31fnGcaCxRCKNDS9ayj3pE3V4X4ZtSTEPx7xrEqaphVBjvvuRhvzC",
  "key17": "4mXupXGBNndxRGxctY3eEkeYSCZ4rDXuCNJP3TR4t8VERRpC18ozem5eu16AZgzqsbM3HnLApNSsBYtptsWLAqex",
  "key18": "4ea9n3N39yHD5vYtc8eJFX2YrerCavArX1Ra5UGcGcLtezQBR5Nh9T8ubERuCiSFykwwW5v1hf942BRHQuswrR1s",
  "key19": "4xjwfE5ABorsxo86aUU3K1Ri1Gxoz6TmyPjqHZZHqjyjcbd9SbkkGaswfF9KBBYGHqADMDH7eBjeatKvwY9em42Y",
  "key20": "5DE8TyiNuwdCMFqkFwW3Tn9CnBFGgpDGzg43rJivigt9HJg9yM5G6mxVw3KBisZYjWoMve1HSJVSTceuUAjwUJCb",
  "key21": "iFHhq9URZPNpvGNBhdT6N2sMKEJBQmqMEF7XnF8J6JihRJFGmx9gXy9ejSYvbNhwxHshd4kgTg8qQvaUfY3ZvZL",
  "key22": "3uU2P7zNtBXCQzNCFpbsg6o5uWz15Rmw2JmdWqArJLaVccJVn1s1P7Akmi59QZACck2X1BHnUfdcFiXuzTbAuRxn",
  "key23": "2x7AKcFFr1WvhBKJCWV2AVbhAPzHqnYQHWWeXMSMwJZ1sJdVoWhk8KhZTnjhVdZJX4DbRKCnpineiktsg6h8rKDw",
  "key24": "4q24ZkSvqy8UdyDjErkSUuPegttDsKQUEpd43GWza2aeQjhKF1Kub9ec7rUXjBPjzoH1RrRgQSpL7jYHyDtBpVzd"
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
