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
    "3pmDDJQ31UQzLdv1HZbHyxsu3CxKxBJGsy6K3GPmmwpG6J5yYoKTcFBZHTk5TyY5Rp1MX8nvuVDYqeViDEMF3Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ge4WLaPcN8JzpK73xSXZPqxsVjXMbsD1FwctQbwbXSAqEYQf6E72h41V7ctrimAptP83QC4J24rW3SUpvk7GHqb",
  "key1": "vAtokcdMUDzXNcpeUcHyUbRaqSJq9jD9U9MrbexLMdZXhS6Noy2vWahCTb9qS97FgZqeieHrUB8P6wErGhBvATN",
  "key2": "26a9KWeQgUsN49rtPBTwK6zdmG8SEPG6dT6SbDckvw2syYW1SGpyf6SpqNmuyjfevdKdeMzSzuyb4HXjx2Qj7QUp",
  "key3": "3sAbVwqx9cnbtY9soV7wP92WtnUur4wSuTaaQ5XiWTzcuNMntiphoJ1R3bXbsgCkT1mF6jBQphkqRWa5mbre8ksi",
  "key4": "2o99uqg2Ak4NzizuGb1GanMY1N51WTMSMccxm8PXZESfyoWwi2JktyyXQbUyzYbVjXMdZwvH6j4E1DNBJLfC6PEs",
  "key5": "e3wEEgkLoyrgsas8Ktaf19CEEimDovazkNSgLsqPLNHsM9R21XruREdSnoZUxG3k2415ZBLUenQn5abGM4zo9LM",
  "key6": "5cdeJ5148DygfPsTWxVMrgc8mQpwrDkRoquHXxZK1C5atQNXGPCiEe7jAoREJaLSYJqzXPBoYVah2bFEAiBiWU4n",
  "key7": "HcLt2aBStGzf3xj62ptjuQTUGvEiGmxmNg9j4313QLcgkc37JnaLebzfr7TpPz8b7tv11cwTDKqR557UYn8kbAp",
  "key8": "67r69BENCoFfEtUWix4dbWx3wemNGXszvoYR9sRyAFJWz86A1C2vUUcwCbMgt5WqZxAxCNXUXV3G5WXUNoQqtmyY",
  "key9": "VZd76kFrgCpG9WkQdjge456QbNZoxSUgjKsii1L9KbRVvLY7B1nBTjP1QxSJ3sGjUA8vZKgaJEknkMymNGCBHYH",
  "key10": "4mwzX5VddzK7ZzrLK6ZYvxqUrGoRYbDzpZisvTSdDx2yDQHXedW485uYwhwxYFdr4ezHDLCxKiTSefprM4PatTBw",
  "key11": "2Pg15RdKwk4xHb6VuaomsA2VmfTh6v2veZqjexvSymaFWtn3ip9p9PK3Vmr6UWEx6g9wH8p9uXhE5uQW6mDWQrQj",
  "key12": "2ZXe53k98rB8tgnSVYr6ZEn25s2MRjELEC3WtE8eyBhVDqbgfGw21dKyX7jtG9ZPe8h7QADf3AiM7BP4nVTFYj3k",
  "key13": "XRWSYaYQPKVaN2ptehXkSXaE7HkjQZpc7GdZYHptcjaCjwuCrMRe5HZAosX334WKi6u4q2qGbtpSwBA475dZTrD",
  "key14": "4keqgop1UxBhpER6SBdqKWX1Ugx9zYdBviwwCsPqzS83Tz2hHpQBg6bYjiivsDNxYgDTLUj6sjAi4tichP9SA1Bq",
  "key15": "sKUsTiqo7YqgaGdhJLdki1ntsD8wBsw8ntAEvjmwyGujMSbn2iDU2iPPRnsZPcXWvBeP31C7zGNg72YwrBmkzPJ",
  "key16": "7X2NgwwbBrKDxiQxaUQyFgqZomnN52se8wLcve6jmm8tidBnUDX42KkApvzyjYDicnALGpreAkzPSTQTkV1ibUy",
  "key17": "8XrkTdjJZtc6xcaPDGA8rqMwB23i5BoB4FDkCfsrmH1YXCoREcYu5YwahA6UVDJZDZcJFb5YEUU8o9K48MdkECy",
  "key18": "7tmSu8hgh2e28Nfb8YC2Ze4cY9psw98Pn9D1i4N4zb1WQjAQPWcQNj12FwN18jiFqa5tgUdCApyapzDPkDXzL5X",
  "key19": "32fYEt8z7rt3dNQTbpsh4aw7pTcLUpeeKgExMwsRLG3mXdZzWgKmzRvvLubMWprigE7qLXGHvoWNuxinTW9sWN4T",
  "key20": "3gTsnKk3QsRsgrvEykkLCXuhsFkZvCrSSycycTLjwYN9YYmckvM6oLXSgiwem2nxezvD73smfEdndkpjystBSqGR",
  "key21": "31QWQfg4H3GeK5DUV24oHSWxYwweqSesGbSzY1CFKxW44wweYoAjZGW6Cj4h5PUsBzSiCvLPszRqFiUhxjDA8rLA",
  "key22": "rvX866dyUKxPbS79X5xCcV5ddaeqnpSDVPRiGak43NurMyFW74Ly4vrTyvtmgvzDSHTm8nEieusSgVJJbZsV7bK",
  "key23": "5iRo2r9JBTXoaxDvAizsurM1zfeUJG8FLBCojakFopXEdK4iXUG2oULnfPLLmjnuPWLQ64twzrKgTU9JLWPsBC5v",
  "key24": "2y3UpvXnrkpqAZ6RJZLr5GAyfEMiR5YsFnUj4mscLJZ7U7YTYCHUVo1g8k7jf4xS7wudRKmF4J34nqsirL5vrPkT"
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
