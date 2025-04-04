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
    "4pnLM9CPnvEgufcw3fMFioVMSQPqaYTjBy9cn2dYC933mYyupFZ3g8HBGxoU2pVCYFz1xsy8bMD17YWeKQoNBAAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAc853Z6pVLJhbiCQrSuPQRjTHGgmyJNuJ9C1cDzzwFJCvrrEiUvsemshQs5LLtLnhh9LRDTwNMgYQtAaMGNtfi",
  "key1": "TBK9FTcAXPPhp3Sdi2zXx4WgJKuJamK3CccE44iHyZWCxg6rKGX1gofhi11Nbj9bK5o6wGpZ5W73zRhiFDn44ML",
  "key2": "3aoSvtEVM99dZg9FMDYwHsEhXLdrhqhdDsAnkidAq4tWqTr4hpnQMEQfuqrqCkZrjx2QtLJvp9s9mDknduMU3cFN",
  "key3": "2iewmkirNxC4z2k5i9tzTwdwPQfAKBC8Fo2RUFok4GG6P3jvG8St9htW2tpNgk2SBbfkCvAGmGZgW173FMoPyZME",
  "key4": "43pDAsHEe1ebjzJtHbugdyHwYJvg6M48fbJuXXxjxfhcBHpzqnXUS7crL2gKurgQpRuEHD1tsFwmbTJJfvZqFrzS",
  "key5": "5HqCFBd3vsiRJJ9LJ79q3DX5kp8Kt7jZ6hcz84fAsfup8F1UCtb7Z15kFLST8E4cSDPCTKzt5Bw8ZHgLpEKyXWnd",
  "key6": "3RoDMM6sDhNXmm17DQuomBXkUmhwbmV2TVnBpg9H6YscCmk2XMUvE3hXPySAcSfN4y4GEWhA2HiGaBqpUuLYNt1m",
  "key7": "3pjuJtzz2V9EyHTMeyLKBvD7HizgC6so6n6Cpn26EVshyp1G5y3WvohqpYpfVGFfspvLcXNaLhG8G5maqcWuhDB",
  "key8": "uhr24JXQVbECz97u6yoKhxg9zMnss6yx1c19VcNaRsEWrCfKyurBiL9ouuHBbK4jhNnnLgPeCxJ6bJA633JSZ4Y",
  "key9": "5dDYfPSpwKCJ4PvLQjM2GFmyDRh9BjXePeXycw8GCeMJsShbwHnz23UNRtzvNUUQ9JFz6aafEDB123NmNRxusFPo",
  "key10": "5S6PBsqSXVXSqRxferWhJdrkADisaaf5M1BQtWKom3iAUGCh33XFMxwv9jgswDo7rWB7yDyF2am4HXJx5H7SGmVZ",
  "key11": "7Ez2pcYkBnSUMrVPqiXdki6gmtnL58teg1m4MHcE1oGtowSvoKqW7ahbLmoPeC11e54Rz4X78w6KK8uPJtjSqqe",
  "key12": "2hhk1WYJX5ZyeEJ6UPZhdM3XmYc3qXKngUVnL8R6EzEME3sGxCkEGGo3NCXbBXp9jxxxgbfL8nfcVPXz9LaHsT6f",
  "key13": "3j9cxYAmaQttFMb3LKHF4rr6BmYjEwoXuvHWeXp5gcoS5HKewuJd7nU7hTG5xs2tFnQkm3aHTJWpcTcZJFdKvz4h",
  "key14": "3SnwFfbyHFmujE2Fp9KsU7uN6szqnJgN8LWqY3uZ6ReksKrnLJGQuHRnZKnCSaSATcXh5pXakTYfk6kZqPv3GLMw",
  "key15": "2vBirUr3MdWHf2w5eBNPhBpT56Fhe3XLi85bwiQwB1Hnpk4m6MddF9NuGmpnKBPdpL5MCK5JbDEr1aSQcThefaek",
  "key16": "3di9ScwxHY4NPg2jhnhk1BBUjXhQqSFPHsD5NSQPFatPyFeZMsqvvdtbF3txvv3z2Y3EJ5qV5g4V9QKtRt1R7cot",
  "key17": "Vw6Hp5PHMQ3oBfV5dW8FVp5JZML9c8dA6FWB9nLAyK6f8rtFMfxKbw8wSBtnUniJkBdbnpYxzgKtV8YJ4bQK4mP",
  "key18": "4q16J2GZXteA1K9gjAQ4onKzSMPwkim6CJxjFEtUUq5ySTjf5fHsUgcu7Nc9EQCQL8psVTXcUvu5LQLgTWcGWjKD",
  "key19": "4EcAGvzXz85YXW1au8NVLPQxzvrPER8KC3uDQmUCXQ5bdYciBhFcXoywEYNYrAkQgENZSDjqAZoohLdnxygYWgze",
  "key20": "32eCLysqzj1SpZMgoxCF7BSKnPLLD7vkV9sux8DP8eryJJU4AZEifUk7sEHTcop2eyi6E4T6YHGzx3h1Bbw1HPUw",
  "key21": "nLwmzCWQByZqL8Q5JouYYuQBM7DYbfErHjrx6cUXdiBVKzxJNR6wptmy16P49MeZmj5x84vgoHHcJp6bHNMEqhw",
  "key22": "5a5aggfvpGZWWtYB1NHYqYBXpPzpRL4UkHfRAExNX5LB3xWnejDRDRgRy5NfVu7Vob44PJcX3VDrfdL7fj3QVa1s",
  "key23": "1tXLmFYoRiBncuH5TSYaWsiCfxkbbKCNSWM5uNoEiGDK9SaBruoF1rMQXLbjuLbEGB8w5dG7H5cRuYYUnK6Wv8d",
  "key24": "pRqHFAc3HPJ8BhnmdRpbUZVZB8bCvyxtwPcXhk8hngFyzH645qy3AkNHkMx7T2pySkAYzEyXuVYumXwqupMdooP",
  "key25": "2EZxe8QvAFiY9cPN2V8GeZGdj2QEKmpzs8YS1aaUH4DccEeB3TNpMkAYN2kG8xrigfDXPcdeopp985jpjY6zvdnx",
  "key26": "5y4haqA43U2spg3DUoe3u7dSGftvGXnnBi6XkvXBLypsSpPKnVsRctwnaTYeZsRvwM1ktXUsdVD7DGED5PpHH5zp",
  "key27": "5yvPwu8ca8UfU5J6joWrGssTNsprjPBFv2Bdu8Q9MppChxS9oLHNwMfx8ykaoKjM5rRC7DHSWNEdmC94hEau3Grg",
  "key28": "GdMeexQbv71zPhWr6y7emt5VF95WKkvg6gApkKQH5GwXQJDTP4V9Gwyr9UbCeoramtzZ3ndtBCVZB3nh424X1rg"
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
