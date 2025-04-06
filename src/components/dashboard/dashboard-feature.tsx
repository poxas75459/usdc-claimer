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
    "56SJjewbNxK48uqKoj1C63AiSzV6WciBMB2Nk5LPCkobuDnMSsjnC2wtBVRVGCiiEpfyhhw21VWr6mE4jRM9o9JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDy271M2fdxgUkUJ8cmcomEFuVXgvEaN8vKDzqoq24dJEeUHzJBx1PQxFw2RR7prjpM1Hkc1W8rAZdX9DYgZ5f9",
  "key1": "BScn4b2HALWdCqogsKpf36HZum7gB2fzB1H3ynoTeNz9B9hAkNQ7WDqMni1szLh5ipwTm3e22eW8iyuQcdP4DHu",
  "key2": "5jch5R8vpDwujY3URyWqRFf7pHHQvwSTvDMNL51ehkt5mcg6pWbCoHogA7T5JBmZm6ZHo8C6oGH3Z4KiqoC8rtPK",
  "key3": "4nKsPkQ4AVVz8VN8TCyX935UYC4TvTDEs89biktDu5VCgMAMApMaN9o4za6abL4e13AvX96Sd2Ph9ncCPa2aEAmZ",
  "key4": "VdEYrGwfLEFEtPAvX4e25e5daim5a8MVppWMDq66oyfwGPVaBpAWbYiYEd1ZSoDEyFJNVHnU8eM6Vc4CFjNLaf5",
  "key5": "2QiLetU8xeurT5bYPDiP2o86pirwwHtwVTSYgB4wo1uazmbyboNQfgBH6XhRMLEXPgoBkttGWM9iv3bKASs5CMpt",
  "key6": "NqDhDvXufmkFDEd68CPaG4yuzLmSvc3VyzWSzXZdMreGrAEkfQV3wXhrtZktHXS9yTvBqNs8vuiPSXoDfFhcoAC",
  "key7": "3CnYiZ4mQY4XGVfdjjtNKSRbz7ARq111vzmhciiDmRm5Qp8mge5M7E6HDCkpT9ECYM7b76jTawHxUZQ5xmWD1sSm",
  "key8": "37HwXiF5qYPCrjD2Gjrh5RVtjmsnyzPC9vusD3EeigB2pLgs14yQqibVHHkF44MwkDhhQoENYzxUQ52qTM3SJvPi",
  "key9": "5CZPKWFp7hham4Dw8s9AXjQRNbbZcaEXq7SCm53rjQmeYhMmomT3VRz2yqesq22eYCz3tY46bzz34fWXfBqsLbR9",
  "key10": "UPShf4n8yxkmdYLwpShHHWGrZrxHcpsTZtLeYeFzbCv3NbU5kDH9xXgKuUzAfZwJWvnPpWarfnoRiEkHxwkWPg7",
  "key11": "2HxwL1nUca2a6WPcdoUCr3N94wq8HJ5ppyPFwTkV7q1SPMvB7hC2upjxhW1zfZaDvwfiGG21mYBZjmxbtwWh3mU2",
  "key12": "4QDt9xwZUDyvKTdescPEY54AXUbM5F3tfXCPCxL1geHmAK21xkHdTkRAhuCwVUMKJKSrdz7juN6JrywARnnKhwSd",
  "key13": "87jZnebTEDg4j1BKsysTDCU5zZ8jkngb45mQDzwBiE4WzxJwLSanZMZe1yWa8y5JqKaBbCb7ytDzRHzwxuUfzMv",
  "key14": "2N7b9ZCskbpDbmWPszcSpRs6xh7ZGsNBFzxD2UupEvfoawEbAWEKCyyuHmsTaGmCTZHyLVteNTEiZGcJj8HRgKhi",
  "key15": "3CG8bmfZ7n6JGeeRLWhpTJ7UWg8qjk8uVow8WkMbkxs76KW9nVFfJpuoUtNzYN6iKvVJA5rr2SseLddof1gmqEoF",
  "key16": "24csGyA7cTq8zdqgvkuRGKTsZHA2GEw2ZwgyY8BvCK4YfhKaNoMWDusmg1tSqpysk63xavSGoZJemn5Hft78qtmH",
  "key17": "57QNmZDcGFyxGJ2qXt5WzEVkHzJPotT7BgpmtEXsnkwj2vXLr5rfwz5KdTZvTPrrdrvrBvwvPmqPwGaV3jxa87LL",
  "key18": "38DZqHKZtR38pcDnm9oHBv8MUtDnw4xhCrzwHXHqA5mso9zpD2YmZA7PxrQgbQu1WEghTwLFkusyTND9R1USaF5U",
  "key19": "LizM88ewsLWZKqA9R3cwhPgP9sGdmYLKiY1duqTiDMGFzDcaPqkBBd8ycsUnECrfkEoXJa3Uueo35NdfS55H1WQ",
  "key20": "7QYVK9zvNh9ewiC2UcSdpbSa2mBDxJhZ19anyCSDkygDWU5dTqGroKSmUPYuWgZZCq2qyuhsJQ6AdRWofCHNWUj",
  "key21": "2BYV8eKViDUhpw3kQZkd2Kcu1DXLK4UGU3rvqTNMwD1kYzEkuaVMPF5CHvGq7CgusejXiqQ6W64TkRDpBfoYYDAb",
  "key22": "3G94TDaShxttS6w2PTGSQdY11YtE6mRGsADqUgG2GQovt5PaKCMUeNZn85AxNMERGBtj9V7PFMibJ5iNJfy3yMHV",
  "key23": "5mNxfjfJ5xLkkQveRzmq95SjhqspPYx46WGn3qmM55Xt9aVf6LCRtg7z4hf9yU1Mk9H5BTxVjbkHz4oUePFJpRKx",
  "key24": "2WwvAn8WfzR1YuJFcRk935hGAMwHq4pcTRsnkTyx1CH1tKqm3UYYYRpPoTfEG8syrEF89GGvimVMU69c5bA6bwpA",
  "key25": "47gQwg3ArEz61gzm9bxiCTeKBMQrCD9BJhaE6nvcGp4481mqb3m5A5vucBtWKbx2vMRYoK4qXrZER36jqEYVJBo1",
  "key26": "34vHJ63owWuTdYvczKHUhH6Nyw7sTDGQYrGvKdnGgTHh4EATdFp852WoTzDLw6PjKhz2jzDR3RkkyhEoB4NFoLe6"
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
