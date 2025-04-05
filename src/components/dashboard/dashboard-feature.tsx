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
    "3xa7kL3mEegBYvJW2E6HGRL5EjrqufTZK2eXosrmCH3kPvrGMG3TLXhqByPJLYBkahCM13eFfwdMrvTNnPuDZfS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmCaNe5uKBMy6TXh54YrStFvGRmjjjFVP4Q5vwasvTU5ZrLVDLakLzWMvrtiEPRkhoMFtQu2PiZGd3YQaAzrQgL",
  "key1": "4L2rF2Yzp8g2PJVgp8QfKo26jTv9g7d1wcXcSHUimd7CTiMAzS6nHjbEw814rb78fuB2XrXzJcfgEjxfsLge2TPk",
  "key2": "5Akwt8KC7hKkoV8PiZapaCgLb1uyvkSkzq1BRWwGz2ke7FnuaZt6gNyBXdQmqa28w9exwdpCwTDZYnAQ8EQAfPXV",
  "key3": "4ijR4LkBgMpJGTjsYhsvcJAocQpwFQbKeKf8LBg6vAcadaFAZ3N92jKcULdTsbGYMY44PP6RgvwdgaMrsJj9VDzZ",
  "key4": "4JGXzTcFfp5bQijqGEoH6Sy91QvVH6yFXhBgM7MP61xXPvoZsu3CYqdd4RCoSBNpnkmYWxfyH3NBziTuPjqGgYci",
  "key5": "3iWxWYUVQA3Biro4ih41h55ifDsi6U7DGSZVyDHFB5dGt4aM4i9qbhfVVG2vdRfi18zaKWuaDfjd2JimrkAZGNnu",
  "key6": "3MTQdmSethqFNWezwHL5vF1RVwJQ2EqCZ5CeY5vb3AQFU11134moyKeGnbaiNBcTrWQkx4x1LnBLirQbhUedzdZL",
  "key7": "4eSLmjk8nvNpeU3kFLEAs7wri5z2ML4sSwDVSpqwAiU8mhbVL86YiZr54dW6qQzk7gtxAYRqZXsGnKssqomKaPrm",
  "key8": "35V4H74ry3vdhMCKgyij7Le1oDZEZwTUh2usysb2Sxa89kyibfdJLR99Pqhssj3WbR4XzHJQLKpaEF1PRWV3gNFe",
  "key9": "4Ho3m69RPTT5c4Yihq9H9GtVxwnc79E754D7LjPVnnztYM6SyQMgRpfoV4KCm6prZCJdScs3p5Bf1s4pZJeukkDr",
  "key10": "DsXasgvyRvAoTLqaHcupRC7LsiKaQH9s7umeTCCuRLhCGsNYWPqjXo1vyjBMrrij9y4hz6UJwPDo8wjJYEHkhyE",
  "key11": "4VqGvnmjxjgwqd7gWQUe3JASwSTXFaJTTUZemLPnu1KYGHmDYdcSSP5HiZYxcZYd3xXcu1iS22zLUAs3WkeYqB3d",
  "key12": "2iBMqmRgmQWC7uygu9KKQw6EissSfA1AeVCs1vEZ7i9U7oB7dZ6DK1bF7u9B9pviGbUZiZRieLEVQsSDzugUxdEK",
  "key13": "5JvadJXM2apK8V7BWby2mrfKCcYnuh6V7WpdeT3ahseJRu2zba6eCwkxrpfBiKjE7GFoza5P5iY4K8YnmuBjN2Yn",
  "key14": "2mttEduewz9JRziieYM4jYRB6QPivqxYhiSjEnR81q9XHtaaNak95sykPp9yyGXzw674JkNpNfXFLznfZG2UDinF",
  "key15": "3udJxT9ragaABPfjfGTp5rfHHTnnho8ULticUjQn9egNke5HAUupDRrAFVyHoQ61LsE9F4YZD1PpQFmrBwXkjtCF",
  "key16": "61b4GvRWhzC936zwSH8c3WhwWEXiWTi6Ch7XJAE4CUJ4KxtasganWaEuUhfuDTTBccpfbVUez3fZHuWtkuQudpED",
  "key17": "5yUj1xUjZmFofwPbuPjg6VzmT1nhFbvFcyyridXz3qE1jngFgYU2MAWDMQrJsUnBTVu3rsyxmdKaxVeP1PsyPgrF",
  "key18": "4eTHSfLsLVQDmZg5eNHEZNyuBnZF5mfSodaWDdVmTFd9GFRqXN7qB8ER8KPPGa1DhUzXWhWGn6mA7XbPHicWo5dm",
  "key19": "2LtbnjKJtDgZ67cgGJpBhaWWHWzMqY2Sz8Ly33MpxpPm4ynKBjkZ1zBGBmCTGmqQ5rBrMTGQ5m59aVngMd8nDrXt",
  "key20": "M3K26eLFSvnLdCovgdyBtaTBHfYrgJiD5mwn6BdZFXxsQ4R3FGopr4HVFYSb7Riw8YpNRR4x89ZqHRq9gSZQpMu",
  "key21": "5WmBSLtgvQA72zw4CLoj2QAY6iSsVAnFa4GyHHrziPUNYpyYrTiHX318UVW2dKZ4qTUNE9yD63HmEYtKBs2GgikQ",
  "key22": "3WYyme6CPhvxBKDVQ7GfBDsrccbww7tNMEciLNzTsJq2hixENMieTsGvfp1BBbuxX4ZXUBmt3GMvwV8TgEbr3Ffa",
  "key23": "4DR72rQJ8Af7DNEoARLxUREvrNJx2oCgoeHiPwQ82dZW14utjGuGRP7oX3LQ6i28hXWYhr4cX8zj7zjxQ8B9D8JY",
  "key24": "3stGyvWkjWDC9hgugiM8TExthjucPAvbArcpsWRkRshqeZtQEpQf6xRq2TtBgoNN8ZVRYrfG72MJQLumA1CLJs9Z",
  "key25": "53cZNBzymJM2i7z1y4TpHz69EC8C6EPqK1HAdzngZ3oanoCNFeoKrdUpMbaHW4DaessyEk5r3srjNeqPjWxVFXqt",
  "key26": "5uhTGZeUeAXaq5Po4vLTz4JKqiMAxdfnYLhK79dgBFm4Bxn5SbXvPyGj43J1N7nw2ZUFo6UXAemHzwUuqR8R1M2V"
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
