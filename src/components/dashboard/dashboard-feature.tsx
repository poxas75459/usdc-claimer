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
    "2kNGDmC6qR9Pj66oenMu5wmoJ7LCKbi4PBYm3nakxZKPbqvBKdar5QJYjRAxrK1sRRX5JyGVMzovysxcfPh3Zgnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQmjRkFhRjQEv9JncyuKfSisnGqRfTDA98xPHurVg2y6yYxcRaFD17rmhsYw8LFYmTCapxrgNW3xi3XGr6CQ4Qq",
  "key1": "R4HjarWqdGubwTmHkULZbmtDU3ozEN9NpC5ToGfissdELF71Uvr9rrhBKet5CNQE4Pjw5UNURKuUukfk2Lca4Ki",
  "key2": "2LSURxhVmq7tGvARVrDE7LdsxSQoqUuAbNxE7WQTC3M9s9QeybNoKf7Rx6qWdzGbvchHiZADJ2Y42vjHeJSzJaov",
  "key3": "bcrzVpe31Mm6yDhSfNeN3Hugwgi78ib9GeLN5gW4WZGZut3dxU5QC4AJ6tFYqmoXnCCneXHSKodgxuJDHSZZTFV",
  "key4": "jxXPXqgt9g85NyAJxS3HpytEwGt7xGkit6cW9dXa7GijKQN9iUDW6vZ7XRsFHycL5o51F4nCGLnp9DMNemcRYk7",
  "key5": "39U7E5CmEXcymd1ZnWUXoZLHPoicVzr91N4wBYa4oDweEYkv42FxZDez9M2fTRy42PUL4WeyVztXpR6dmjh8QAnD",
  "key6": "ua3A7LYpo1ZRdrpWpYApxP3Lsv797wvFtkNYKvCwdyMCVZ7vYo5duNjzAfnp3xcnRid5xxfozVwk6PcS25Lgy23",
  "key7": "2tsS3QNdjJBXd9FfrFu3xDEScJZUfENLgymgk4CqjCxgq9foqHkWwFGV6gttbkYi33acdtq7zmygabFkHttU7rD2",
  "key8": "55EqBdH8zwoCkLVPWC2jmNQo3ELoZc1QVQGwmA5g3qoEo131vWhukpM3Cr5ewfQBiBZuYZXv3yDTWG8MyepBSLpR",
  "key9": "3tzxaYst2G8jsGzcPo8i1GRJKMgz77sNrctUNG5Axayuk6yyFyad2uya8BFpx62L76oN1tPo8913NG6tFBkgHsJF",
  "key10": "3GKn79w6qLF4Mx97vWJGfcdmKNjEUYFYdAPHCnUP2qJ41PqKYjwkA2jYhaTxiqKpTVL57dTBD9nRXDcftJbUPUpd",
  "key11": "RRRe4sEnZ1Bh4FCXZjfX2vLPdMfydAy7wwffnJnxtdA4948NAD5ET38myLHWMxPdnqYG2XwZQeFnoJytmCfpvez",
  "key12": "24j1AVvZv3smY7sjf4gqKPV4uqsSryvYpfKi1NcRohG4KBS3FHSSoN2jQ6E7WpCftWYKA31qwyorBqyyoU5vD2gF",
  "key13": "3uZq6beSGnEygLrmjBZUvKF9mczgcCX3UT6j5uk7knGMCz21XugmjmbnGvH4WevpynhFV5Bjov9E13dJhCL78b54",
  "key14": "2iMMfgCzn9A8zmxnKyx8BiR6xr6AJ4LRE4pkHxLUDV8AzFV1LtTzbDEJrus7C626vHjeujJiRrYmagcCyMXoyZTN",
  "key15": "5W1WNmz7Mizk8FJJu2n4DjDAHR1ZH1zqRV4PhWrUzWGp1oPUFqRMD7cnRTZM9iGNrq1wz29gjU9g3knEMSjJ4oG3",
  "key16": "c8bDEJiPtgjsN5dYVukbS6vZu4ZSVgiF265NdBFRhw2cFQkQjQ19iXJkTTDRb5sNKADMvPum8Q95d5g1Uqrwe7s",
  "key17": "xDW9dM1WmG5r8x9KZMacef5oNpeoH1E29j3grs1MgJikCJoxL5ZrnJ4ytsQ16D1V9cbYGyTeRX13F8sLqWFfRY9",
  "key18": "5Rh34FXdsRhu3Gax82gycfC6QUsZLPFygkxWAwpqxqwV4tP3r147dvbdRvAEKtw1nBFDS3GExsXBamSzSFYpVpJc",
  "key19": "51Mf85XXEjWYDbUytSbteWaXJrkvwFhPDWknasDnRQuEDE55u8rY4ymGNuK9VswXV1auUTpzYMSdfP5sQwapvwJa",
  "key20": "4yHxPHkrrdq1dCkhP8bP5i9KnB8yiadcudHXGLmuF79wHwhdhnCwtaaoRQ1LprUDvEc8jSWN2SYrtbqhEdwijEYx",
  "key21": "5iKze1QZbMvqaRajrB4oY19hVtC5QDqaaqYnMjUPtCpayFCRDWHPvo8qVzn5cuMdQGvzJqpvaPnBEjZCGFrrk99C",
  "key22": "3991Tfkhy8ZbjezbjA4AB3sBdfRCK3QvbRDF9Tq3U322go8pUed2PZt8sKUNc2eMs4CnihURZMCQTDJk4ySeSYdQ",
  "key23": "9T2Yd6kSufULRCFs2ukktBYDAaPCBUpJJFtENmsrAaYxe8YR5vcyGeRVoDpMrHe9wuixhWyWwZNU5eZ2zm5FjDH",
  "key24": "3WGyFno1DkqDVtf7FnExmkHrNWQxQY6QfqBU2ue1DCuv6NQLAyKJN7p1VbfUFapPPQfMVth7o2BRiEwLHRtx3hXd",
  "key25": "5Ah5ch6V6Zk5aSdkNZyyGg7GCHTAyyHvEWeEAuCKV3SDE7VNsNLeyH57xSHVhLjyVkNXsEDdFvcP6rStr1tRuhqn",
  "key26": "2kLiJuV54Cf1m2KTLcxWExb8QDscAYEmy5XBeLo7DddWhp37rpF3zLkRcpZjz9BTW7HRgsEUoSVZoATY2X6LVwxp",
  "key27": "5DnLHU64Z4xPgfjrYWmBco887Yg9c71SagmxmaTk3JhcuY7kFzJ6F8BxLnYqQLiSRaRrcVEMPWtj6uVjrryf9qfo",
  "key28": "3fVYRSosvMcZFHuioeuBoi65MwKnDmqBhHyFigfeDp9Fixnkp9PdGTf2evbJeDiWL4UvC6wW9Jze5TmFP9xMtSP",
  "key29": "3GmY3iDWqAqTQ9cFxB7Dc9UmCM1BLPAmhc6K2WWe2Tv8zSxTdvXdAm6VvLzCjBsxymnQj6zhci6Ubqhrjs1A4u5y",
  "key30": "3vyeyg8fzEAq16QKTyhY8oHFjCmkZukRm4mMZrBTg4FRHWgQ2aSs81EhcRfQMLsfme8z2yuE7DMaqHqqVNfvG1RP",
  "key31": "2rHnoiND7bHUBkBbNGjRzHUmK9QkSuDkkjUekwSb5VBnqxUHQVbyv3vr1n1w1AjMGVDatLmKrBMrdn7X1vKFz6vS",
  "key32": "5kkmSzmSrA4KNAN5rshDWk7vrTuA2sXtg8Li5dyC63rxAqvTUVN7DL7U1Lj7PU6UAyx67xJoqxCsJP2PzfRmeKzj",
  "key33": "46w6zUSKrEceFfvwz3a4g6FfAmUQD39Zkwya8fWHGzKiV1nDUXBLg4c11fo9szmdPP2dYLPWc9ZqS5sYzw6xH3t2",
  "key34": "sfBJRdYkZUNEfRaz7Nuv7mmySueUoSzYTZtuyCtNyLX8NAYJuSerNE4XtQ327bajmUwoMnfHYp5ZG7ne7UkJ9WC",
  "key35": "4LSrLsUbB2PBiaHe8QtEj9fyEPrrKAMQ1Kej1JPuBiUhfyiPBJ3WHo9WjWURND14CkZ1wfmdiDumgyBkQCZYaAJz",
  "key36": "kXRnWKrrvFLxYDDvR4ZbUPzbNfeWJkTxA8itQ1o6vufXwfdR3xKKwiW891Q4mHPi5Xios8QtUqLLihokSzLkpQa",
  "key37": "3GAhDCzr4pHjzDMmEQ3488qY5cYJsm9s9xSYmEh4r1EcpsPAuDM8q3mZtgReKk7VyyXeZSMd92ppwRZZjZarWa3Y",
  "key38": "5bE1JGJCZtGX9pqLSahfWy6zVtFkbeaUiBhMLRarnvocjoY6WBzyA5nDk49fRRjy8gUSdJAyjrpBqvVV1NifBiVm"
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
