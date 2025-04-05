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
    "42AcQ4yNcNvFSAHTtDRrWjA2cNJaKBBUnpzsCZLzA8zBnMUjU6YMd7EaRgq3iuCH3q4GpsSFnhq9LunnXY5SU1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fcQj7J2RPKrfohGUjh5ctwqjw6jLLJLZGbsiXdHWQzmRqzTu7u8BM54tQ2viArELMDUHeMqi1R4yBau3J8454td",
  "key1": "49s2NtDt3r9iX7yWv1CssiSE4Tncq2Zf7LgV74azGC9wyf7uTqzUUahDcFnpNdgKt1YPTw99mMqZHbfic8zNV6wS",
  "key2": "4DyTFzxJySxBwt5yN66RiSQFdEx9zm7spC5tGFWfSTJRLQGjiyEasguhrEcjbwxMR9v95pm4CBCrxE9G1Eyxvq62",
  "key3": "Aq39FHiaNnNuF1t7BRH2nhqwz8gmzF2ccjiUGrWS7ZNWyVoZouHEkag6hFNEccz8TdM15HeFFiXR3hVqzoxUNaf",
  "key4": "52WnYPMfHG39dRdGqMHWwQuxF5x2McX9o5pvuxbhbpCShzUQ5hsJeckvVWihbwFwMCmvcqWR7c43pZkvByZPsq4k",
  "key5": "2dJ8S3d1WKMnM33jusrZgsnp3AgqnTP9xHxcmbN1LgdwRboVuy6ieCb5ryb8WFNzLBJ4gBiH56XS6FnGGUHqK9J1",
  "key6": "4JnWe4g7vgc2p6uSvg1ZWag5ZiYHnUZGkjKYTLiijTt1nGm5nP7g8nUvV3jeng9p9VLQVWJNYgY9E4JnTE4mtsU8",
  "key7": "44YpovCnkvbLTRxJ7aqbcaxUoDnNG5AsjjXs55kZqeUAK69qjxhb6p6rn5mi1jSsPtep2XsnmJSYpvprm8f31zDZ",
  "key8": "2mdQYuHCRky45ZLkpc6hywKYSGBHdZiDKMHQobsi6Dua8aigveZou4qT1SPuWed42gKcW2FTbRdzD2i3vNPNwNox",
  "key9": "skWLXUX8tSStLw58FLUkk7t5d2DrouMLUW7xtQzkg7Cox42wmmUamUj4ZeBaRmsZBYE7iWdpy5AFp7bkhRfepdr",
  "key10": "4Ca1chtvQmDQF1fVGnKR4B413aeHNgimK5FBrUvMTbZyGkNY1UA96zLp8TuR3hoSnhoihtK39brPGPTg5Ra6foyF",
  "key11": "5KPw2EipE6UnKMJBP76k1nPNFZWWvgapgBAJZPBmPtk873FfczFEnkSZmU5k6RY162oQts8t8GmKvhhjSFYaFd24",
  "key12": "4wKKibunWj2jK8fJnyQ1eomiGhCknwH26p9po9au1uKmmj41yvUd9K9ffAWf3eW3TJkuWPu3pkGVcyRX5RYtoArU",
  "key13": "5BcNyDJeijafR2fpYNZyAjF7iTdM2S7gTxiysDewV7iojWZrXRC6YXZxdi7K8pKs32F7XiqFaXJFuYHVY6HjoJ15",
  "key14": "3DBNRecUNSiR1po7tWAm1qKe1hewPEYL4amqHcPJd9dW5ej5rhNBKY5REaYcYTJAyQhrXj4nFEfLahdoEEU6E87y",
  "key15": "2kSgdRenRXp4TG7gsCSRkLHcFKSxon7b4nsqhzTAregVTGoEdzThYv9aMiJ6ufb87WNT3NkbwfovecT9tuYn75ci",
  "key16": "CW7rboXErM31WpjuyxjWKnGSe67qiCRCKUaWTocUaZrdLTub9Twb8XYiCvyi3X2puteoMEZT8skmqAMhjXqS2XV",
  "key17": "2gvBnRYcDa6nMXbj7QYQmpsWc3r6SmrK1TwAR7ozGec5E5rmPjErQitQkV4ErZ2Uoha33jBoAnyenVVe1KsBL5AW",
  "key18": "3wxqAhuZWkatKFEb7MUaRLZG7cm94nGNnDEkjtYECNgcgdCeX1PHXNBJSdZfMV64p5uBrUAvzAqsytd1RjSC29oU",
  "key19": "3J2uhGzzYRdoFNRVTVYAXCZqpwMn9kTU2Bp3dbyXawRQrxZFxwjj6LZQdtHZbAq1GgcN8AgpiittBnFYMyicAe4o",
  "key20": "k459mbdHEVZARM3db7PzGpGrjePjW46sgu5iGLGJqkyWpKzXubbuki35rERYmvdGA7UPE2VbiFZsHU9MfmxmwGJ",
  "key21": "5vaKSaYMeT95FERvWp8wvX1GbzVnAzduatceSUonBNNGmkuGqg6eHttTD2iaCZuQYcpwQuySD2XxqQmLFA4Zggst",
  "key22": "4gf9Hx3HCLe4B2tkgD85YUgXkz1X2HZYiah8w6365H6bdjRRngQuj8buvT6PQW4ATEmtYMPtzwPgWnMBGSjMpP7C",
  "key23": "5SbeAWqJsS7t5SmzKMZNEAN5GtbFa3rKd3dZxuatPwXE8qMtnqpTghbEMzQDFFpQsw82BeeQaYVPeQLYQm4e6mJ5",
  "key24": "5um1teKjmiULAA2fZ2NKcmNEAzJ26udMqPtLD7GfzAAoHC1yvnvb6USz1KZ3n4hVcu1eVts4QwGJw1txWWRWGs3t",
  "key25": "FdbuzCfAU5esNtFHxgHQsMMHUsW5xqDPd5eMfTb6Y4LbrQ5QWhst9iEf1mwkmpjU69ahwA8wXoADgYM5xYWDqij",
  "key26": "3y3wVY1K2dhCnssJgSbLkeQtKHA7osvvwFat7maLkLd1NLf81fdFmk8eUZGWPjUEkbFGR98mBg12mqzF1fk3sHnt",
  "key27": "5xZxo3p8whhvcAbRH13mDWEaLDcG738rbua78fq5eUbGyjjpNcAZn68tTdDK2JQLYR5wB7fwqhB5PinR6CM3DidY"
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
