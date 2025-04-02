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
    "3SqkhuzojifS26GLP7uBGA3Eakp9XCvK68bo1BNMdfXFuyCjySD7BNUXv5J2jtEHaJTjt1emgtqCRWCZy9MhWBA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsrhjnDhxf35hHRqk7dAbfcGiALC3if6q13uw5wZDjjLj5zjH5VxfmZP4EjhdNErzt1e37G3Gmx8zD2eFXpmyv3",
  "key1": "2s9Tc78U84sKj6Bm4szgAH8i7FQxuuR52obF5JP6D5H4QQukaGQzRB7hfKixDpx1bA2jo9mSmS8vcYx2w3mRX8rZ",
  "key2": "2xcMycgSQgB5nYDjKQsZTsAHexenUiivS1pRTM6SSSUJDth3ZhcowFsr3P2QZ95QGxY2k6myNYhTBKy7WgioWqbD",
  "key3": "314yNUy8onzWNFsBnz4Z5QCzGexjzWumSebXjHQB5iNQBZKTWan48uVfAWUTEqK1Dv4Uyqau5J3LY8u5ou4nN5T8",
  "key4": "8g5ipRN6ynkz5vLS8wJNUNECNpsTwmPCDKT62A5jxYx1DVXt5eMuLu4GG5FDaaG9Ps3syyin1Nn68C5Z8tu2XyP",
  "key5": "3KWhGfGqtgp7ApK7GADNr2vEsBKxm3s1arZU7CGyg21UomDrAFns76Uk5KH81HE9bh5sBYUiSeofsChc3rQPUSG9",
  "key6": "4wH7dbH9NBwS6aCG2n58m4zg6xjeFLzv59M4pMvb3pwCey2J1RFWsVR3uQv8ucr1oBsVMp8NG6Hhfu5kki8ppMLz",
  "key7": "3fy48R1zpRsaFd8EEPtNAPVjmnHAZ79kYPAjiHVCoSxZqVjH4AV6uqWmNrZJt3LmSuKboUCcmcfSdZQ74AWmBQhG",
  "key8": "52fmahVXNHyVfBgGtCwAmzeDazJE75pRL6zEZCVcHe7JNBhA5h79NMRtZJb7g8JktaHKi4Zmjrqwgr4RFERKZp4o",
  "key9": "4yKpbemrWdACpE23ZVDDAX9dc2DJ2i49ARhA9SAwRm7NY4c62HCo3i9LW3wsvw9Gz31K4hGHikbuEanHNbFodiGA",
  "key10": "4gtr6kRUWedBTt2iwFTHaQAzwyU9mcXpPpRuJvFVhjpcwGvHhdunVn86MY24Ptzq2PH2tNoMBTFoG7FpkdpEHwe8",
  "key11": "62JrS8RSZoi5JtXsS1vghfA24BXeXbMjYw4q11ZDGas78ySLdkE6LFwWQgAJHPUaVqjdX5ht5D9fW9Cvjysf2Fyb",
  "key12": "4fAABMBdrtsHaeQK9PdHdkYFyZKHPxaB3XTe68SoM46JDTvzHkhHcY5vScY6dAfHaFW1SY5zMehMJH6F2uoGna2o",
  "key13": "4Ao83PedA1oL1PMCDpG8Mp5LWvJRMkq2VHUpbzSo9iZLnKuyuzhZD3fPXx2i74XgtATf2DGYgpw789KshZrWeTPg",
  "key14": "4xfdUf4Fo7Gf2CiEpbWBJdeCTyigJy5g4qB7S3EN8DMBPwUyAriktJEw1pjz7KNF6tMHz6h1U2cLD1fUyeifbFGo",
  "key15": "4ZHLK8NMJdRvLWq9SRSMf2E5tKNRJniiK4GXpsuNYAbk42jMMZwpkU9Epmik1MJaMfrd4FenKLnwaNazwrmnonAH",
  "key16": "2rprM1HB2Sv8YPBevUvgRMuPBnJBVMsqyGoevfqzDr91spBtrdQtKUd176hALGayAswVzMW3HjH8uukDZx9HBPjQ",
  "key17": "4iT7YvtxK2FgMmDdH5pR4fSZBhcGakBP1igw4CmtT2YjkWhqyHaBv8TgRejTHS28PfCnmTRvbuSxumbNnVfKFEJ4",
  "key18": "NTJYeCnxEbLDtz9ApQHVqJ1RSxUQ4efs8kbvbYcaxhg4vsoA4YbCAKdbLEnKzrKsmBAENAxAP8oLSJ8dSPdXVxY",
  "key19": "2eztyWQswkpGX7VkPUjXmsRg38aGnpY5bDjDHAnmSRfEb4YkNS4pa5JNYF4TKUY9f4asJtwy1crEZ3HHsebFDSzn",
  "key20": "2RwSJS7mNM97N2msBGRR7ahjf74KCzx1uSxhRWW5fxkebNzo8VBa7LHL3pWeUaWFu3FHhRkWJwTHdeck1BWdCHVL",
  "key21": "61rfepCkwsviTcGWtRENe1qK6HP2YEifkyT78wdTbCdji4PXJenH7RXiyYD3LMeSw6hMqCLAkUXC4fEghymeM74b",
  "key22": "2T6rKpWEAAKd6WvhFsSoehM2VqdZ6zi5Hbwtftf8gS7BPNYtTi8QTqJfFD4zPERuvFY5ecybx2smDBFqKHNFgBvZ",
  "key23": "3Ra69xKqDjMCNCz7jjQ5ororNVtvuqHknwFoYRHRgmdE68HsjCwg7Vuqc4QNDYR8F8iG3dQzRv2GC8D9K8MmnxrX",
  "key24": "4MKkS8WkfFs5ZR9VVWrXm9CQ23nTQndmcfkdgy1rr9ETMSwsZLQy6pR1mkweSyJCU4P6Fqu3wpBSLDbj4WNJLPZx"
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
