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
    "4spjpziCH1MtGwfeF98SMyKsLmVNR4a22xMqCRVHM1eyKawnNAkwkwwoKGgagwofcgyM5fxjRS2pQPhdMv8cH2d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzzvMhmqc3N3GuBmSXKHfSBYZihnqGJ8ErJBBqEgcJ6TFcE7LV4uQBzTHc1pFHRbfeLy5Cs1DPQt7A5EDq8KQfy",
  "key1": "2RJrVcpDP2KkGGHbFsCNBH82G6VMtvQ14VqnzzrakZ8TGqfjUUzsxB6LvgjtL3JfpKYUNd1UeNgCWffqmLbaBxQ",
  "key2": "5AJucYFJrbArZpuifx8U6dKfkwKHQudmmFUWeToSe73fpgpRa7cW1yTg4f6rrXWAze6Vsk3EhKVoSo4mkiCmsEEZ",
  "key3": "4APyUdvW5GvCk5F5Pibv5tmRfmdXrUdM7y67ChpaEQbgwGkdXbevHPXcHP8tuRSLNDM8LFioLa5JjS2YqMHxQzN7",
  "key4": "5E7dNqBJzF5kHacczmwpuSVMrsC6gnHTZTLDxMxZ3jMK17KZQHrenhzuoVjsvp961bv4ptMNVAdW1gLEYaTC24ha",
  "key5": "4vZhJGpLzN3auRfBsaz8i3fR9oqoprWijseBxuR6zr1MQNCKTsPPQKWwmnFEXyxk7br5v4zti7xHSWmVqvtSCuXE",
  "key6": "3SMCUZjC41k17TAFpVLUzkwteedEb4yq5ZgPNNqaGheADSywL3CRqfi2KXXBLR6VqxNcwkN6eZx2vmnBWGok1fY",
  "key7": "5jWmEoFP7BepuQRsdSiZZUEZvngPo3aKYNkvEvSUHr45ga7UviFHU6LKu2HBepcACDK7ojBmEo5XpZ37EGrGuvSJ",
  "key8": "3LcAQ8CapemNcrBFKzAKdgKfMRCbSaGAtVZz6QsARJE6GWdjpnjBg8remVFRpvQzUj63yTzxK6Sq4DqMrrB2CRDJ",
  "key9": "5H6LhwiQgwjHC1nMdbi4rPfuRxXAWd1wHT7aRAgiFznbuUBfHBrMPmDUGXGnLGy26TLb4CDwoaquzpKaPDA5yFV7",
  "key10": "ci6fKzfaA6tE1x8ojET3qwDUgjpTd1YYasnku3G9zWX3DyHhXQHTqBowTFPvp9r65czRiKtoFKDvTTtZqvT9zEE",
  "key11": "EzEywkwnasEgt4yZ3Uz2cGSwstA8Jzn1hF6RLxaPvUkYSo5UtZA34okP4JQkHti2i1KmwsQqPC2XWZwyoiFA2wC",
  "key12": "2ZKi3Pr4LRu3ZczQCzefaXaYmr5tvaZtaFUxfpa1yUfsgRBGwcdxa59PykcZM7gF7iRcDdXqSVvobYRzjEBUFk3",
  "key13": "3xbTAxQZLJRNmChBUWGBAvvm8ftvkdGThMEiZ5XNYq3t7H2cdKUp5xAv97hqgr1kLw1nNVmX2tmBDhZLzoFuZjD5",
  "key14": "5p3MybTKyWrWQrL3UuQc85sy7Trne4GXxeyGCnMggziSw2N7WBGQxdC7znsuA8oHCgJ7zt93aP6j4n4aywXfD5H8",
  "key15": "4EMurjLTvicmfxeuKkm7pLsNJyaqjdiujpSaHZbPzFWbgiHAAoViYMvypLGrvUrKPE8XNCj7d8pzT7X2pWKCWZ5G",
  "key16": "94t55dya2NctGSDPAAsnX2Lstf929ivdoTsZmW1EmnRujnmnFZY2P3v5E68UEJqKuVDf3uf4z51gnTfoqVHHDcY",
  "key17": "4Ya4PYSMm3WUpa5xnaN8QhLLbdXicvicg3zhQdfkykyou9DJgp5KxSYwBM4wrrccqEwUwi17UnS6SFw5vvAqQX1x",
  "key18": "2g2wDkjb38P5a4cjqmpYTAJ43sjupaVDsoscN4HXS35S3a817F731MHjhbBPHd88djmjeuQg8vE3Fe1Kqufx6SRZ",
  "key19": "4hZ7S3MrWeypNMsH7cse7LbwtKoHCtAuvY4QXpHUDhcAbXPEGqhpU5RWJGDF4rhXrdP9A8Aj5gV7qYmCugiAfMeB",
  "key20": "2LRj3tYgTofDpdNGEsdHf7ddSdCs5pnUWwLeVHsn7hqCfLZTYwUsgAznL6yZNTzRrper6WycGnSg3zFxNHCtn4dE",
  "key21": "5tW7XE7sAWnV9vSfxr9qdr3cRYWq2623qw14c5x2e6SipRFgdxZUinV7pTcnnsw6ThgBQZSK7PaE5TeJvwcz8Fdm",
  "key22": "2xCw1WKyM5uxGBqz6L8GiDLEMDw4737uxPyTF3r3HdPGYiAQ2gU2hQi3gjbjjUrtNKufv8nW5FgYuni4Bet4zqVi",
  "key23": "64JDYEyKLpdUjhFpbh1J4iwjXetbEG6y5psGd5mHCGCUkV9cWNREhD73ogH1VrCfLL8vUPQCLKEL1YwRqGbkPnEM",
  "key24": "5wQpqCdWc1oViGNnx9agjQGrvTW8tkkVHHD88mtoBduDUiPb6J5wq914yzK7V1cecNtPckbSHgiaPDAu6FQAwGHm",
  "key25": "3FqCdA8N8rxCcsau2Dk5EAw63XLq7G8jNvZqErA74Wrb4jxN9ibWNeb2Nc3WhoEvRxhKGCSU6zdeVXqD3UD1wH6K"
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
