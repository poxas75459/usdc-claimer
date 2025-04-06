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
    "UrqjNCcGjjuTTxt1m8qYkaYUQhrF1LmMfpWU36gRvdbJ9YqxffQZb32fGxRGDk8rUZACRJajAwtZVowWZzHhvrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dz7D4q8a3FX8R5crNbDo8zfJRzNhrTBY69Wbx9cwR4KC53R3LuoYYZfTGzN23mzKT8w2a1GhSvxdLNvvcc9empW",
  "key1": "4PtY546LyzpVPSL3QQ4HeWWzoRQ1KK1yKtdYtvgkjHudE6Rv55xtLZQPoRxiykGXQ58Qnk5qoNBr9c7MqngMux3F",
  "key2": "4HuYD4yGs9FtCtCNgt9V6MqhSTmBRyuDZDnBJtzi4R2AuDuSagzBogqgn53naNHVhFXt4WhHQTUNscP1tuD8mjPF",
  "key3": "4meTK6ayzsYoLCqonG6WwiM23xKeJYQowv84bX3EYetsiiSq3HRUEVQvsQRj7G7W1Bx8UoEcJaJFMCLYgcFesqS4",
  "key4": "Db5MqZHYjWsmtYrXV24QWWMkSG2XQ9ry7pM4x5gqTwmK8rPGnXdBsbx1iWbetar9WnyCu2xy7iuueC8QRTLL6ja",
  "key5": "3F9WUerGuaSyhurY87Bs5rUny7FATyrgrhCaoa5T48t67iofJVvTz36QwfBZgfPAQKughN5CdvdoYxsJPrdqCzEe",
  "key6": "4rQCFxuuGQnx9z8UVbGUN7PgdoZ2pobxCEGUSA9qKKSJX3oCbkj52QmrPELRH3JPxYzWjrDxpDCHJHTnW2t1D9KC",
  "key7": "4HEHzNTWG6V339sZ23W1Zg6SAEByaghoNPrV5obmYZZ2yECoznd3AC1cFmcCPoKCo8fMzYm8t1ecvUW5QwhH9KWw",
  "key8": "3gX7iWqYq3h5uobBFvemRbkPRtnh47wx6MeQwyyjc8B6Jn1krxZ1qTzkM5AYsUkpnVLXYychQmRWdZ88S9QSxKCn",
  "key9": "RsJZgJaQs768Cot4N2N4Q8RFe9yJAayLF1YhTvEXB6tLokg6TTWt2CDrnXRuHyJHuSdHW39MFgBe2K7n3yrRbfc",
  "key10": "5jBed65R4GizwLsxDCRx19TXSf8XeoMqNLjbKW4LHK5GZM1cK9fRSH7Ct8vtW8eHSwY9dQaJMx6dDTMjsbYEs3B",
  "key11": "5q2b3CxUXeu5skXkMH3Fj4UzgxYA6bxqo7Aw7rcezmeNKSFiBbuVojf7ichuyi9SFdbHyCgHLNhfGiPKXXMQyA4k",
  "key12": "89NoZLJxLd4bghyUDwMcP2NHNQcauhCZKvr7wikwNZoTYWv5VS4yQUMzYrGCFEsdujNsZsPtSShDEwDzkTAa9js",
  "key13": "3chfprteQTXa2D4q8kdrnd91o5B3WBcV76GoDH9RDWudCfAtwMe1KwQNZBGCvVXCBwnCoaL6dF4VJi6WLBn4nYcC",
  "key14": "62pVWKeCxbWLneB1FHsUbe9dKetBXs5XdxQAB9s6mEFEYfQzVKMnqE4Gf5SdgxgCSCRRmhC1bgK1mGG3u5o2keVy",
  "key15": "4NqYyZq3VJevFR3qdeboHk7ge1wq3kWxD5Rc3gN56daYQ72V1BDEjohraBE7RoZruNpHiz6xJb8s3HRy8rG52ZGu",
  "key16": "5WKwh84foYHQ5wsbws4N35VqGWMYU94XfCT6kEUQQgyt1qC98T2rRvhJaqMqBq3mA94eqvht5rS3NKZYaRKJ2d5X",
  "key17": "3BuaBfYWJqeDc1khVRdYz9TjB8Q2BHjUaFeLxUPRzrz9hn83pwhuFGzUr45Ad5aVDUqMXFBMpZVAm2uJVehXaGMV",
  "key18": "2kSwSABUemEJrNgEztjKmLvuLJpyhtvTZKEyYg8DJ4Wr3GFwBXcXTLfkcVuBF6JBQ5qd25cWHehZ9ATNfaotezGz",
  "key19": "5XU8sCeUe2X9JZqrXrTCmBqLa5Q8Z6CdCipxHfyZRiTCQG99xjDWMZFkWPFDD8SqZJipfHFtmSGr2tzfPBML2qA3",
  "key20": "6qvTNXJGSRKqNN9K22QdUdJwouJCbCJXbMHjAywFLp85YzCGavopg9eAGKAL4FKpknB4STvq1fnCenCYWXNr5vW",
  "key21": "2iUs97i9CCPb4KBReBDfVGq5FLkF1DcpYnf9wbLG6S86h1pdoCephSemeag8QxyREnUPqxHGedZv6umcb2S7Ytnh",
  "key22": "6mDJhbmvBvFxtXymrXJUxDFfdaxXyXKth4VYQuD5jwuVkFstegedayNdp8gmtroRFj7VhEocYJg6x1bg9uZH3Zm",
  "key23": "53Jz4Uh5hNHfaFpp2Wc4riHHf9XXhVyCGftUMEFqTiGjodiJajfMxpTUPky5FVqpJj4GTgLJUH5zhpL11XUpwpCe",
  "key24": "4wCfYAvUMv69C6NGz2m1rUTC4pga9kXoEPcoLKoVoyCQVLti6gU6nd3rDX6NNVBE4MqGqT368DwLJkUyfn3kjXnC",
  "key25": "5T566MGFEBLjpgY3QkJLYss2TWmjLjjxqmc4v4QsFpwSc9bLNSLMYoQdMByseAReuV8jkCe4tHAsuZVVozak3HFQ"
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
