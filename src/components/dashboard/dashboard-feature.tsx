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
    "4QtoxM2na1cLQSNLCwcHebJGJRfQHRn9HzAQLr6gRzYCmvs5zWCppU5LLAn1dBATc9hNXeSVxQ9VEC3eswzD4nsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQAxE5JAyrmvZgJKyJryaRgWxWVsTjLDhX8AYGVjUihF6Nq9JSxvHvSttZi8RcGem8aN7syRshQRsbAxMRcT1QW",
  "key1": "5BhrDbRrz5d2PKP1Kw3FWU273PC8Qx7wk1RaFZ4Msrqj1njavxh9hxBhjhsDKXyvE2tEfH1P5Yf1WVmzg7b1QmXS",
  "key2": "2GTcC5pxPa6eSpM7BbSvoNRaKg52txZjnrNnCJHZxx8nEZoWTpBdfxkMbvKUEyJki3JC7wUDHnBmRngjYksEvKcC",
  "key3": "4YeWwqCCUt13HmSpaLagiw3QzC1qbrTUhBwJaYmQSbbYfGNAtn5Rhg2AUef5gPjMrguvnfDWpuwxcP24N6gPvVXj",
  "key4": "3g2MktZQTNptZx2aYU41KKUFXbPJccbVLkyATpgfCLp9omWFowAXvC5iXMRsvwHznKW27tmvLHy6EgQzYZ1pdHEW",
  "key5": "ojpUTVsSL2htarXN3CG4W8wberkJ6DwCHUyCbz87LvUMHzgTN4xsoxenCRjP9kCa4RyqeiGrMDFPCADEGD6orLH",
  "key6": "56HzU38PJxBfp8uVMBqTXEMdNQgbs7Nq4ypg8aawZE2newG83uCUrmCvWgQGg1YmxYHbG4rdUCwUZM1zgWtPBatD",
  "key7": "NfWBZJi2LTAQbPY4AwDDjMWYhCb8Qs4epTjxbd2Up9GoswngB8pbiarMRmDbPw5RtiFHfSiWm4AYm6hnbir43S5",
  "key8": "28mogUNjdb7EG8VN3UyXmKRBA14Jp1MoGvQtPcMdcicwtijne8KZEAJd89VJNvnwcZg2F53SszAuuDxaYrE6GfYx",
  "key9": "FnycrMWUJkFwvhb3r7KhyGUknta5DZwqxwq8Wgxfi3ZsZxkUSkEmFvD2ahpcTdeiEWP4MnU3nVv8j88arStv1md",
  "key10": "4ycxi3FxYdQ6FWhcc1N3r6tD2D69AgS1PxDJ5UpdKsDzeCvjP4EctxPBbBNpCMi9NL8Bp6MyegjMU88NkB6zL2Bt",
  "key11": "UYY1AivXk5wGFrbtxSYg3ZaBD49q7RYBDJz7k1PYuNeAsgh1tcEKco2YHiSH1xFXZh58F84TpwQ5G2qQsdnXFSb",
  "key12": "u1aj3CoDE5U9uKwKyUPwyghJRma49hbgTumqnYEzXq4hEJFEtrybxdhPgXxnSpbQkSGq3h1cGdvhnbh33eKt6Dc",
  "key13": "61kSNLQRj2QipSehYdKP3R2q2wNcnMiXeLqrKYt7SVrJM9HmqxWkXHJjjHjcsmywMgtg1R7vAGrHuZeusEWyLwjG",
  "key14": "674JWYSCzVL2oYYCq3w1UR74yPZWNW2Wa7CcxZhPPzX38sp72hZTSEbFPDri6VVFLScvNY3PSvXJjH7ryNowvUyG",
  "key15": "46EdkcaJ1txx8QSownTgAVPxaDMxKacQtoFcnMjwAFHF21TF7cDuiadytbumj9uhKiyC5yGmDpzPmjMzD1kaMP7c",
  "key16": "5EyrNc7Qdz4dGNHsv335AuDfc8MU3nrrfvbxR3Y16iwpUcUp53Y7pzcjfxqvyYNN5MNUUGhi51nkSmYchwwJUUgq",
  "key17": "4a1ukiMHYPqmYNtfHu12yWrigQURGohLsddj2bDjNrpP9VXkWUZ724p8BSr17KPKxMp4MeuNRbNY1wjFfzamu254",
  "key18": "3GTksxjYoPYgqofizWdtFmppdYv2ZbFq5EntJAfbmRGGx5Nrv6i1qBcqizRwqFPFEdBrHB2LX6VHgvhQDwM3Dnqi",
  "key19": "2bbCojxULne7iHjyPsmbwjtfFTe7yST94urHpS4TwjFpYsXgqWyEWQkTeKq2WczpjqThgh6LmL4guzmqEDZt3ujP",
  "key20": "65ush8LxQZM9RZrkx91wx7XsdFCxnT5qLfeuErsf3ButzGwS7GUHMhJYwKQnikDxXLGVKYh2rAb97feEXTcJhpeV",
  "key21": "2uGd4foGQTvKCNEdkrAxZdNn8mHKrWQgajTjcoSxjjJ9Qc7Zuir9ZuLSHKKsqscvSFYJMMtbZhKU3EwMCp8mxg2a",
  "key22": "3SgfKh4b3KWrWjQx49F5X7GgngqunpCXDtmHpYZbRpopTFpN18d8S5wkvC8qNjW2F5TQxzT8cgEH7nKSD62YFaka",
  "key23": "2gJ66GZy7pZkD2hQ1F36cHctxMsRbGoE9q6xeQtuWGbeEcnz8desCLdg1VBqgH5ko6qekMdcVhGKg1bTCGbDf6qt",
  "key24": "2mtCTW3sVGUdpVmHqN2j9t5CJyE9dedkoTaTpnAhEwpadr7bZmjxiT7x1fhY8QEipp6SUQfTvrzW6yv3FBXnMg7y",
  "key25": "4b8e4PpA97ZqLd3tt7zdnP1HPS198hhrXcRqnXNw3kY7qgHGfTaWc72KQVvsZK3sCeiSNZC8GzXSzskYSeTZ4nyd"
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
