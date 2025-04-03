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
    "5z9ymQ5y8U5V8n5CwUezMBQz9FGgaspwvwYqyiVVUUveo5F3VoYNXGC6mKG1SNzug7uVSQbnBhE3PzYzuwZqsy74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwrUYqKkii6WpUVW3DdN6iSrCPZMHMKmunEcTthPAWjK9ceSp2gchBpJgtvEYxFpE3ZzhTCP4BJmeoeYaPRBEdw",
  "key1": "5JLyuErrMM8ExCny6bLmUsTV9kDr7K4Qk9QFHGAGqut6T8CBKfw7BtENtW9zRibRHnnBssSXFouKo5BT55SBh6dG",
  "key2": "5moLTaqSmXU8s1QwJANecBYB1Gu4VBK24pNRqLTdLKMZLeLFscL4KpLUGmbo8bVoadgPPTm4TRGbTsXhyEZ2X8Yt",
  "key3": "56WahoWnZ1gMGVuPGY6mzXbwfdNb7QHCgGqpBZd3trTh464i6BCqDVDakAgFBuG8mN4uh6JMTi1ZACx2t12i2es3",
  "key4": "5BHqJH1Sp3ddufBEpWCu8bgmpjV2KL2MDyGyy3b4iD4m6dvUFkc4ah1imybjxwPNVZzqd4NEjxZgq78RZpYKAFso",
  "key5": "4E9b9pmHFHMtC2YDFzumrXFA3vv16XE6MApqAjizoUPtHoiU1pe89kx57zZtdL6c65VAyrzW9aPWVL9XWoqA1zZF",
  "key6": "2NGf5aRJbGvBj9Etv1hRaMrHuAtPdi3Y1392etdGTjp6kYHTDGCj2smc3Z1WfjMK4oaaFDvaUiNPHjv4piM66YfN",
  "key7": "5cBgn6BxuJKcceUKPPpAwR4i39csyAAcPous2vdcuY1U6nFY7Rv3nDtC4CjUH2VAsPM1PFnsXYabv3XeEhcCojih",
  "key8": "3Eyezqup1k7xnrU1vmEjKHaGeHc7Hxv3cecJJv7iyRD6QtKAgaFvuWodwDViA4pMPMHeKUCQzgKTpbfQqzvvL6H",
  "key9": "CKJq3Jw5MuGkqazw4o1WjzJKoXPrxMcU1oNToacnpGmmcpdtgpGfH2UPPkp7S7sqYboSigxRLK9CSp46qKtupVy",
  "key10": "2ygJDF7HofnwNoWhhUdRWcYqpGKqaFR8ESjRunBH4hFHoTMT4ngvhTsmTuG63ssr7xM646Zcf9FHS5qRyF76JdS",
  "key11": "3ThhALjTxg7gtnFKVhgHuGsWZbmjxfWVHaSGqUGWTCdugdP1dZ4sPnPToVh8xGsYKm1mZtUoZRUNSKUv3Vpw7dAb",
  "key12": "3yfQfvNVRefHQKzRBzaie4uBrgMp68uoSNqv1QK8YZTnbv5Bt39qX42JKsKvKkkatSWGhKTV2BTNUAhYKJ3ZDkG1",
  "key13": "4J4WX7yFYgJvM6v3ntJrqYFTVVqZqNB9tNhPb37gZqPrwpyr34SL8mkfNMfXs7m4sgifNJf81qsKsA6LCfLeuNaY",
  "key14": "5ed2TTsh4Vm7vVwrb1QocZDFhreYMowNtRFPVYbdq1G1ur7xnrfHhFSYHwmwTFBAxtRFRdZycd1W5xRQhU4B9byv",
  "key15": "LGLTVHdWv8fFEu2dvg3Zoz9Y7ACDxTWq8ZHR1EVPY8Eg7xdybmDzPaFBpkvTQDUK2BNMa5rHAP7gDzTL3kgv8QU",
  "key16": "4W6ZtMChsXnvQZrwbVnayuUbYGfwpNSSbNcS6NQyFpDDHCz9JLkdRP6ai4PiV2JdM1Lunx1CZjwVryCe4WyRcMX4",
  "key17": "5kXdgYzM7PWAnAPa6C2pjzjn4StLnRFmsSetQaiozRr3sY13h3ABeWS4fKC1JLBAqHD67HtzYdB66KcRwWGMv7DR",
  "key18": "3AVYdBCimFuFr75HavWn5ZPdmztdh4vE8GytsRhyaVTLB2YYatuebfyKNq5PvLpe3mcQXfmpVkQCwBCjGmRzBT3V",
  "key19": "RCFGNFeHofhQQR9fA17TvyUZc5cfKPvAG8AvUWMBHxTBLvvb2R7bZWduyxvxqfetzt3WyUqLVL3Q8xKAfDzqZMN",
  "key20": "qtbMRHtUnr5UtEvFtS2BMr7Y6FCgJK2CXKvjMdRZCmYjhp9GnoGboiTppkQTg3h4qsj3ZprvCkxe6MvLWf8Mkxg",
  "key21": "5H5phf6Badh3f2FRk7nGAoB7HVKmpTqYaZffzQeJcX19znYf1FSA7J7VDX5xQLnfKN3bZLaWi22MhqyKbNTK98Up",
  "key22": "5w5YZzPrY4SqEgZHrXB1FUKFeU6BLL5GodiDwiA5u8gWXdf33xXRiPX9Lpx1NFbvjZbd2Tn3mSQwCvnrzRjhFKbr",
  "key23": "3ntGovrAxE9sE6LMo1abXSodQ9gEnMHf8g2e1q4AnYmsYwbcMsK22UbqEK6Ki7uqbDQBwWbUWBgtNBAwHDcMhqyk",
  "key24": "xNQcns3G6njrLnTDpqSohgeyJeV6zK389Gp6ZPH9UzoKZL8LKm7BEj5HZwTadZkUa1SUZLh1gzDdSmHgiXg7Q7L",
  "key25": "44G7tiKmCN7ztn8jWULiqYo1RGvi6FMCt1DrEvtu3prYnq36YseVdPy8yD7qzeRPADpDeYaztDnG8LjhEmQx62cn",
  "key26": "5YBkeL5MKuerP7w8A1s5nmBaBUPsVnMc5PHTncUxHWhMH1LgECptvZtsp7tA7822moA4APp4CRRxA4P6jBbfxTyM",
  "key27": "4TAeBNAXGR9i9VrdJEhy9Z3tQTxTLjAT8S2AbbUxJDCdQPLgfUaiWPmVJS2FTQTGziRrksACYcvY84HRzQ8FFznL",
  "key28": "5BBLebUwkazJqN55DRSQoF9b5KDY2w36KPQpiajmVhq2PQ2XQYpncJwFitCnqK5rB26sHEDoW2rdZAt3B4KsGLdQ",
  "key29": "HPttkX3aXJpfwiCV95CGXHMRpM1fRjAJw7KCnmc9FNdQimL9UybbU1y8jbXqRspFVCpM6p4JndUeSBEmXuufz48",
  "key30": "4K3HXdQg6HUsWk5C1asTzTzzJBfEiSfmn9b8BR2kqp14ECgS4GRppQvgfY7JJiUKtn4aQT5eJRM5eJpCTAVH8iJD",
  "key31": "52z39bHiMed5UApjLz7zRpM889sEx5r9UBhaKt5b8LgNteXicQuAc3wAMcvpBRTSUCQAfrugmFEAiHHqR7L7KnnX",
  "key32": "SX5WDoQs8B43M9j5jZiseMFV48AjX89Y4NdTZ7scp4VyGy5CDaVFPHB83KGuKG4KDEAvEsxV9BgdL7cYo79aiDG"
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
