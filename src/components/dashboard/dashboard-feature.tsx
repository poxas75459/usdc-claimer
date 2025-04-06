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
    "2ZhxPBtFTVg4U9CXTavZvGd5XFxpz1znojKWQisA8NVJgzRECFqojY7X3Fj35wh93wgPrNLvfxFMpGf36mtzhSH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUncJvSgCmN1AceMVi66XMuKRd1QNVArGNarMUDxpBi4NAFToDEAxwXTgrGffcufFgLc1zKD6syZV8o8tzMBoqr",
  "key1": "3MfykEsfzeeBXyW4yH52J6HWzC3dMhQ3P6yXKtdi5WD7DH8P1TSMgr7LoRjVh5RkwwHonbzurEcgQGNWmGY7Loa5",
  "key2": "AD3XLGNqvvB1pNeBcaXwXLXon2drBggkXBw2cwwkXoNGqYxGSA6rxFZvCRywEjjXgyniWgDF4T2AnwQt3cJuARB",
  "key3": "5NnuJLAB4ybu3BhS5swXANP8iNHmu6vn5WMSDeTf1gEvcc39v976G7prEjpyG2JKzj62MNQPKmdw7BuPnDo3VtGU",
  "key4": "3dUaLbmzMMyiRYimhhwXppKQimCW6s5MLB2oQaz7bTNiabY6aUCuSnB5ivDr9XxSRLEpBSEQMXquGDrb7wStVB4a",
  "key5": "2VbCrTZvxKxgmqwdFWqvMxpmGVJMpETHRBXKDXizQ6498x112RYdTLuZahVNyUARPh4Wg7aQUuEcT1dTY1hgMcgG",
  "key6": "3fiKi2M96eb9DniFTtXrsnaHKCdt5hkih12AEu9UbWW4RwBpqCqWcGRenSBUDmhd4aFF5UUY2muRM7umFXAN7Med",
  "key7": "2tLpWXsLbdoK7Gtugz7huLHrHqyCWJ4SZ4NBxhvCX6bSSPHiCM6tesnpL9bwu3vZBarJKjQvqEZq3sofS6QJnpue",
  "key8": "47k7iqhzELv6Lpathj4k4JeGQYSuUJerPGrrxF2H25DN9dGAKiYpgFwza96jhCPen1rgTXMCyp8ms1dwvnTqRFTi",
  "key9": "4awnQDGoE2BQtkaxEMBW7CGMiizjm2hNnM9t6YT17uWAM7DTiH38hQBpC3bCFZzV4d3dJuxNcqu5XhgyKVsbRkCp",
  "key10": "Sez1xsNwLwWEUgW2LEHxxFej4yxnyRN31Y425odNFyGkLk8p5FRXRT6Hi3HUuP3f4NVbMCpkBPvLPb91Ze9XjQi",
  "key11": "3bU2ds7vtkLeE8c3Fhmo8f774MZp4BjJ4obWDhQvcCYCRh5EnSLBp6iSxAczuAWYG61gugXftZFQY1UdpqDoPJE5",
  "key12": "5H1DnrBk7Swd4hJbZBgrBxPtyyo1WC3osLryF2yirLsVeXtFXHtdvez9CFFhn3MQFX1FiUewMiXfxqmv9qpmbzby",
  "key13": "5ryKyAVeUErvkpPAZYJvJf5VdEHUBtjcdXAPrmohHpj4f8MKHKYAzAPqE5uRGTek52xMAiERuZyhnrNm79t7cXnf",
  "key14": "2iHRzXDRq3KAiCB9eoBM397UHjVgyUFTGZzBmsTe1GY43ATT2oYc8JuFtX93a5k42YTyfMLdhT5ygyDLuSnjNWqc",
  "key15": "2nytZrZBiJXV453txjwLpgtQVfVuS3aCV6gJfqoTr5NMwHsR146f6mtCFzpEYyQE4KJ8jGraHV22FkdVYgfBz9oc",
  "key16": "67f1m9dsBczfiUiid8gCognJbTkqx22MVf7iVUxQ4m7i3Zq74cfQg67CFnHXNJR8fe2z8Mo9RqEY3nBKvSeCNnta",
  "key17": "4XgiGLRUqsDbdJTDg7zEoRWdSXKYctL6hc7TxefLDhkKBB7f1ShA1GrZyedMrVUxzsWWMWvU13GMeEbvmkfcJQwH",
  "key18": "31kCNvSgwNg4D4ToXexspBFxv4HaEZWUSvUhPfemWzDF8WjqkUci8JKLkQS2aEBkEMJm3n8JyQfWZxbKrCKTa69H",
  "key19": "7UUWWeCsiPkRDfLEbWosXuDWY5A8XNhSB6DPQZhShegbZjVMjsnLHuUgc29rY34g52To2k9RgZMTfktCPucSgtf",
  "key20": "DZ2jFS2B7ChiH9jpm9eogFptDpvUc8voSZukSvyKceW8vuuWA9Z4SCQ3TYQK6s2rFxL9K4h6RspaMcwaYNZNs58",
  "key21": "4KuMntPYxscGCnRgTRLvT3o3ZeEAQ9PXXQD6PqVo6SaU8VWrtYLdaF7XhdstHR4z181iW7nVwSFaGTBacKMmJzWL",
  "key22": "inMmXU9ZBAHpEtBMnPZcJfgZMLrkfNoEEVkFZQ5dFw83B19nxiLQ91gSmHkPwY4mmG7DmaxcJnd9RstCrm23d6H",
  "key23": "4xB1ZWCjor7oziqduQUkfvv1DeJr1zxYkLkvMwwjKJ29DqXUjvdZiCicQDburTSC3ySKjinmh6Qdq8c8KuZAN3AJ",
  "key24": "35VV9bVvkTz9TtAGQdH84UMmCHvBqvSwg3he2QDwoisiyh3jWLPNT5dSDpNi8q6YxBqfNy2xvLHEvjMaRtLwS6bA",
  "key25": "fFNmTy7ehCNhusPT3WJi8vPxRFxzWWix4umpLzcSWHe3p7scwX5jBEpuf2TZdgNy3PPJhpj4JCT9wKdcUcSKbe2",
  "key26": "3arrsJWsJvgMoNQD8vpL4R7tV25FSP2jNSAQHzt6rcGmQy8TzARnWNmZ3PurZT8Saz4ARPZQfMYXWkNw57d4DMCh",
  "key27": "4ZEGYHG1vL5s7mRtja2kQE8t7ChpZsR3bVwpoMxBfjtf4aFD69e9CaGswUFGJgoGGW9WAASDhSJfHsP8cngKfJC4"
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
