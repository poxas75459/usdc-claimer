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
    "3TmaV6txAhEmMxwryqM1WXQshjbsCDmavXFGdUUXmkpM23wp2uRGEgn6L5x6An8XPudSD7cWJUSWMuX12bp8t2zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJauyA5SGvrkLCt5wZdT7TG8EitXu1aeHzLo6BSMU2P3kuKWvf5HvRtU6PjWFCrkxR7BTjZCxRdNPKCXXPrs7CZ",
  "key1": "gEye5DEoMMja1bDU2exi967i9Cp1tjQCJhJ8dVTcXtHAuRpa3WKkVr4dm7SZHUWzg5ifimuUMJ1bxxJ4jsM7GDg",
  "key2": "3ntUhZzGSBPmCT288DPYkfj2YoUmUwotmY93WzMCSrmY7XqdVB4ULxggj1nXYDJBDBLJxHqc2ArPiWoHrk3UGVXA",
  "key3": "gvNBikmsJJZtnWqfq5524zfu2evuLwHZwS4EAkXe88GpV2P3vFAX1XSULfVgXJdK5LbEohHgDDdMXAn5GytJQG3",
  "key4": "3SbUSzXUjAeJQ4d9Myx842GwbDqPXLuoUFHSDwX5D56Ev3y5KtHL5UhghytBdQC3x4WNhuLaz7zBmuNVRsK9gJWW",
  "key5": "3KchrLns7PSoPR6zx6ovV6vckMBjqksnVBLKRRJSuVTvyZTrY2nrqqvHYT1WifgLxzGNQjqxUBhJDvNyCDhdnmm4",
  "key6": "3twg4QWevZoSAvg4m9Q2cKbB7mdoDyeNpL1m9vqYmXHPLFSah8qkCqsnTwrdKRP3ZqZkrTEK3d5PyAo6en17mCS6",
  "key7": "2oEvMDtJxud2BXj8oq8fMbwsJuWLNbCbPiZYaFJTQeRfttEHvRT8oJx39KoTWMAkm7xQXNZbBAVK237MFWjoM4ov",
  "key8": "4UXYkbWfsNYPKFfeGPTL58khPLtipPrusSGR4v6YWbes4vVbnFbw9afAK7kfi7qdMPdWjXSrbgmq1cznVgymF6Th",
  "key9": "4GKqp57GnAhm7weF4hkvnCexPbdcq3SM9BiYkQXP7GZcLL8H5s4PvsmCqiRw7gX8TfkdCHYMz8o8GqjUCBaEVKeB",
  "key10": "7s78359Z3irLa4vUkhAwGWxdyRfUmcPQT3i8M2svv9qPE3uWfMigyKkDX6X53LgjdQ3mT1uyEVdWhFn3jgDJGiC",
  "key11": "4kvRYCoCS8nfzZoGUKGinifU85f9TK47D9YAPZvoH7UJvdye5xrLQ8wodRsz9k84vy8RwfWAZE2E76Z7owFTS5CC",
  "key12": "2v2CWLd8RqjDRRArJcc7fytJy8BEK8WqNg3BAZfdbPw4Xhat3DNiSaJu6yTrTcjqWU9jqRGvcCnD3egWzSfsyg5t",
  "key13": "44AchhnMBaQEY9YL1vJ5Vco5ErmizjmZSABnGpaTmwYeYQMqE5dP4bJQid4D6W2CrUWr7AbWqW9LU7WFBosnYqBb",
  "key14": "4wz9TpL6AXdHbHfE4PamMXPkSUeTtsGiHgChVQHmyuAmgzdhkJXuv4R37sC3SJhL17vW8ewDmoycAkzrZcjmfBhz",
  "key15": "3ePhPUUVNgZqMaPAAz29rB8D8jcBrRxbY2zCZcejjXm3PzbqtMqsjKfUMeE8qmLzodK6A57MWvJoJBumCcCtU4fc",
  "key16": "5fsmr8AEGxr8VCJM2w3J1WRqvFnjYNNZ6WjWLzxDwTcPJCHUuUxydsm4nMfwzfz94wqn39dyrHkACTSSDwiSZgC",
  "key17": "5AiyvxV7jAD7mRY5Cegtxw2BcHbFt47Qdvpe9wqrEJnipTJCY9hQd8phn3WT4dPSKxneXP9SzUijdUES6aHyRHNv",
  "key18": "2C7cnZpBPCBQ93tzSScAEQgT3FnL3NjLPKU76SjmAUTBRUrqX3HfnRv8ShqybWUgPrD9hKquH9TWcs4XXuR4c2Ei",
  "key19": "YuRbgASQuz7TG3RBCZkbpJcYQ6FpB1JFnHiDdyL9rmXv6zYQ8Q6VD62Ly7J1dSYPYLmyaKWFqn8g5VM86m2FMPX",
  "key20": "5EzBEToYbzRsAsjSLtMYDVoQQLBvNRwrvSnrm5R86iHFhNcXCsyzZ5mkBn371YXVEuMRkZFTGRkHYQWexd8ZR1L1",
  "key21": "4qs2EP2g7qLBhdJgrD47YFTZzeX2L4HPtNSb1HTUwnLRxZTCapuJLYajRsCDzVdLBYnF9UGkeyvboXs7HSUeAuZd",
  "key22": "3pJnLizB42wQFvGonZYd489A7C6WmMTixJh9ffS2imKE5DLcCw5oqtTUcZvazErWM2KYtAn8PF6NG5a1LrQRw8DK",
  "key23": "42jQg5jzvH3XZGMANagohgPySe4primwubzXywu6uQFuE2H241dpYESJT5JCGZhL6aAA4EUBLrhfHbFe76UrKtp2",
  "key24": "43zYSCDPPaZNzyLfRuR3pi5kEzYCWj13jvvZxh5RB6gRC2U6aNn7f3MkCLQK88ztRspdcxWvQCMukjgbCovDgfX6",
  "key25": "5x2S3e9ZmPJpdJ74g4LEH5n2JQDiEE3oNevyFB46MwTMGxJdgYyRZn9jg8d46dCw8CeXi728S6B9soGh8X7gwrMV",
  "key26": "555ANYGuyt9Lu38cAeTKpRNZqv6o5j4KsvaFn4gsFrjhDQoUiKKJUsPvmsSURtUwKWwQbSPNZoU93EPj8Zq5ciU3",
  "key27": "4V9zaaKxNw6Ethg6kzNJrqMoroKKLnaKyP1tzdPYsQumHDnh6oK83hAum4paqWgjAczmmBh4c2zcvPovQ8rvJgCE",
  "key28": "3mj3rocdSH7WK3gtRcmP2vWTN89XZ6Gr3NZGZXp8T6K1v57EJJPjohQTXgmxWQabYXq3aGfKeHsML2rQj3cqtUVm",
  "key29": "2fybqWwb5ZUC2pHW2Nwmmc2TPErJdc5wzJjWEpHnefSFVEjLVYHPAkuGVCD1LdqdJuyPSVD11TsjiG5T788ZdXog",
  "key30": "4xMa4K2kiHfVNkFGvQTWPNQHGUbNa6AU7R9ZR2LojZAQBP87LMJBiM1AhbrHvX3QaJKbPiR4pdpRosjsojmV6R2E",
  "key31": "5YSFgohu9Yu2RoaAB6oiNxANKwop8j7UzbLzsiwGt3FyDDyNsCDVqigzUZ6uQBGwrCEsBg18yMnxzNkCf4eo4iNE",
  "key32": "3sDGrbccPd4k4h57WEJebufAuC73dH4KauXf4dhaKKJVJdUkiNgapyztPMHmsP88xJsdwbJCQ6xneLchQ2oJ9Jy8",
  "key33": "5r92XEHfjU9c4S3zJLRkP4WX1Jd31w9DjsZNBSgWqUEBrLsj15DvkPujiT1zg2N6pBGTgD3jvLzbna8CCz5sme5R",
  "key34": "1NbTiPpBLDY9q3cdTwyGMctz8sDvhE2USW2pWgNG9ypkX63yh2UVs5JJyQth56tYJVav8fJiJ6jkTdkEgGQEjUo",
  "key35": "3xrnJRpVD9oiUYjNLa4qtw47UjjiXyvw2oocXDoKJ9bKhDrtRzfZSid7NaDkrwNj57uJCSpqMps6Y53znZisDqgy",
  "key36": "H4Z7EUXvgfDyaiTzXHSpoANCbUzbRixXu6AJ976uvwzCTFhatXERcbYQngUgiKPuZkzsgtSMgCtkv6xJdciptKg",
  "key37": "3hbRzEHhUfFPCHcKQZxPrbg1UCYcZxWGw5TJ5NU8gYkv8rwmC3mo3oVq9Bnmtj5pkVcxrbNjvrKwvYAtR8N1pk6N",
  "key38": "8vcaTBMRNZUmGdYuvdUxmE7RKR5A46zUtxqgNHjcYcGpo7P6aw7E78opYf5H7qcN4i6WSJ7vKPtB4cuZoyUrLTp",
  "key39": "31VqfyTCD2rRZZ36m4QecT7Ha4qnsXup9uMWZuS9wCN8429mJGVJPcLqmuKHn5FUJMvF8CrDY9e5XLY69jNbToWb",
  "key40": "39bnEDMHrduF6iAvwu1D35i4zyiGLHk15RVVzPyhaPRZVqLLqRYvQcvtybeZ79zLAMu3LLC5t8hgeYgKpTRYweYJ",
  "key41": "2kHGTXNe7dXSJFhe5LasY4HQmswCdbhzhNfWmsVHdZzy81aoVs2SkF1vBZyh2wxxD9YbqrfyMcPT72BQQ61BcXU7"
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
