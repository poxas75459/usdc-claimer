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
    "5iu4Qt62kBJwJFoR7wdY3hvVqWqtPNRTP3yNMzUJB17FMtYWAzcRp4NSC7egb94dGNcbYovtoi1sN4DZFWNjTzLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKcBQGTY4LJQnZo1uvaAFAo4pr9xYAX65LjABcHhigygtoDeAw5oqMwFSNxzvnzLd2yXRCFxw9T58BkFaKVEYgw",
  "key1": "62uRKTRhvkXGptf8mLcz2UyLZELqPNkKjnFXWziExWLqj6fn3Ebx9y2kUAZKhnmPhereAJwmaQngNB5Ehs2gRSt",
  "key2": "UeqviecKbqoAuoGYNkiBh59Snp2xT3sSNdoHUMhiBU2sgyEYXovk3wZ6mUurqNTqK8QCkpXam4vsFo82KFd2dgq",
  "key3": "KyY51yn2DJWwrbjYze9DBSGhG8kqVxjGEDztDuPoKXUcKdLhwARVnBkc5pH39KpFZh9eCykhsSbK6bLF19Tse62",
  "key4": "4GQw4ZHXhrtDCrVBryitk4JGB16pjrS56EuNDygdz45RJjxXLDXazVnFi7PMpXEPqCEgfqjRgKTs6NECNjjiPxYo",
  "key5": "3NxVCnPNPm1XxhBrbAYFWe4qkZvpyAkUPrTCe6uoL3NXLG6NWUmoFxPzA6SV8mBg8rmKAbzjQrBMn7QzsAvTv3E1",
  "key6": "4qxFDmExiaNupiyqAo8xHm7Ti1Yd5LNAm2v9AY5KRtuKszfxZDivYgwpyKAagmnPShrweMC9jQpkKe93GBgJoZzh",
  "key7": "X1qqdakmiivjYHa2ouNnypE6cadRt7PSU3z61sPRNp2Bexnyhz1f9RbL8x2vJoibJjU1C6haGYmtYUhtcAJVjP4",
  "key8": "5Efwc2uPo8MWsjNo1JRrmaBaBWzTn9j2kSLPTpn72JSTNh3hUMHnJMs1Duyhqa56P97nMpaccqL5EqsoT5fcvy1N",
  "key9": "4WHNMs8zkzpWkxm3WzHRrTPnV1nfxbiKbMS5v6MuAjvxk8j2zbbLs4cTAZZeKCFLPdLPRxcrCWfmK6oJWLpJHmQE",
  "key10": "5VWujSLt3rX7KvL1PuveeUAMuVJF1HV6kXFxnVjmhhz3GFZDMw4extF6HJkmrgVmkND3mYXKbT81334bW7MHa7gw",
  "key11": "631PVhxEtetkmFn9x5rPb8kPcPUoT9u8HNaMtLMMU1JtRhPNhVLKDeFVmEFaVtoe2PfZsnGiFUhiY9zUJgdvHJF7",
  "key12": "3BCXUKpwJUuzzdCZUU4JSiUncWU4wgmBJSMgm3un7zqF3A2YndKRDs8QJ8ZS1iAdRjEDMVXUNGz6KQdDWpUuqWSs",
  "key13": "2X8WaST4p12MQLwsg3yJL9H7FZPNBLMWyRWaLxkPZru8h8YgN9YJuGp9QAb4cmVhJKcyU3oEJRa6cQdLamQtbLwd",
  "key14": "3NobizRYiViHQKT8ndTxNFdjYKEaGRNXdWfZmippLt5bbt9YrpTSN6mo4E9giKqxeutjZ6YsfUH1V2Bb6Qooayt2",
  "key15": "4ypczgkuanAaMProUVynwjDocUasJXdnCP5nqR3DDzNxaErwtqpdqbfmV1RCesruNyy792kuXS666a6cA5ZHwjUH",
  "key16": "4cHaNixyqU1etDiqc4EMTraKnPX96HxxWHWqV8hgbS5XMxB9sr3SHaNtRAJdWpTdomRGEY8fijH2qYL6BzMqZed8",
  "key17": "4nT8a5LoUWXqEkLfxS4efBXK37K4wppm59KN9RUWH167g8iBfAhCehnkFTzqrJUjP3ZeLdRRwWUJWaGjgFVi6JwM",
  "key18": "4Nu9ybXCmSLkaSZAWxMAiUzkRxSvUJrREhH6iZGq5wXfDpiAkxacYnDWzjZqy9niGaYCxv5y42BqL4Msww9QjTSu",
  "key19": "ydZ43PHi6L1pGFuGgbQo8fwbDuASwVcZxwsir2oEQNK98qENoQ6CC4GQZNZjMXjWetz4vSUWWJ7NDXY9pq5LAt5",
  "key20": "LvFDq4Es9zTFdiRUQAn9Z5BcAZPKKeR1o6R4p2Fau3BWtKJHZSdzU3fD3f1icSVo2mppw7gBmV7Gnzz1cmYbQiD",
  "key21": "3gRHT1PMDSN1QSrCPKQhQUHd2QEEEw8pmz7kzpqHEzftNE6d4seB1y6npodxrkVrqkFqZEjSmEdgf8AwQBbs6wKS",
  "key22": "5i9hSQ6RwHiXT6mp4cw1Q9mZmiZqNEkvuVYHkNzfbtCTABN8DRbi3VDRj8GD6xcPC2V7pF9yBDQUHZxNqzCwmwUC",
  "key23": "32YfDS93tGpkCbSX5unBN3P92FhdXKotEqq1UzDPP7PpCFusEBqGcgfao3fnxd7Q1tYAaJmMz4oFcHgg5JPs4CPG",
  "key24": "2nScWREskJwxvxmMDpttbDwqzhTk5KUvyNKbytQicqASQPoEwv41ggk1C3rux4arYXhaYRJ7wAk2V4jK9XH5UgoM",
  "key25": "2SsjHmZoD8CYzYiqsmMXzawaT2mQfPYqdTsvjkHXxoaca8B5gBwLtmQ7QfrGLmgAAjjvsgHnFtKgnW1UKsuaJXgy",
  "key26": "9UwvuacifZu1F1TGC87ZV2vzxhNioXFmw7zSVWSUJ1mgE36zRNx9NYruwNkEB3zPkCSaZAFtdQnfdsJVKRwF8H6",
  "key27": "3cAN6Zsvo95Dak7vzLLdiNZJagjMHryQqSZoFULVsrzAkAu8iEpiq12Gpw2zGijisYUicUSLLkiAjnXP7GxD9dWt",
  "key28": "38XDSNvWRy76HFou4a8Qtj6g54WRZ8LVfo4qifPWjnT8GUvRcRsJfbbnZQWK1Yyr9r2pkhMH8X6tW7RAf3k2r4sS",
  "key29": "a9N6T3QrVDnufYkGCAnVqDMqG1EHjArvd8yzytBFnYRqRVq3tSLRudVr4i3ViUn7SQvsfXTDnnBKtobZqAjRk6Z",
  "key30": "5sBtkU94jjsqYTor34x2gbWnqbgdoxXjuuTtg8hGwXc2H1u5y9v4xAfRyzh1yZodE5xaHEqCYLps81LxJKUBdqsi",
  "key31": "2s7eYR72H4ybNRKSK3bNHSfbfhv7NTNh4ABz9VRhLWY3jmnedoDofoWZwQ1JB786g4142G4WrDVufjD4y5Nn8rgw",
  "key32": "6QykNfLLC3UgiTo6TJCmwSbEPuARSx1QCe2dhUZ4CoDdmfcQ2eAJ74QpzYGiH6V4KdLtbfRwYchvbo4cquXoThh",
  "key33": "2wo7YdLa5qmdRP4ZKqb7CTkuTbjTtxJ6BWXzzvG8TpBVX7yMHFgyJvbFzaSjygJ7r1Yp93YDxQidHTdTusqfvJ8z",
  "key34": "4ubkSGK5nKuWLFeK9Dt6gbQVayCPycv82A4m6m7Ykix6NfzxwsFqMvPZ8nVBDuC5DSfrYYQ27wAoowFzH2S9pfQZ",
  "key35": "3s6YnHYaJUjXzTvkq5d4B8npP3Xdg4xF9ePo9ZPqeyQoufJjMi37xhVJ53qPfeYQVKQgLVMoYFKFENSR4CPcwWrE",
  "key36": "5qt6YyA2APLiP9K9LewbEp2qDMyikgtk64Z9Vdy8twpU9MfbFD11i14sGgfZzHfGTuS2grwdigDvwL68stpb3B5C",
  "key37": "49FfRk5HJ2FHsLjmMYihj6R7cnvS9aPY3sGsTJ1fLan7ZCjbbmtGejm63CCdQST5zTMPSkhyPxM2D19dxRjbDp2d",
  "key38": "3XPTzPe4tkUmWUDA5TnWDyckkFKCNJAZK3TFPFcGDFRna7HwANcv5S3Gx47rznHyhRBWzJ38E9rREWYhiv7jMaAh",
  "key39": "Am7MYtgDmqw4yo12F9GNab1kSHUhubua5CBmnufNHQ6KQPAZPEC2GfQZ2mH8jfURX1dRQmTpRf17UjJcz1LfR22",
  "key40": "2FAs7GhM9HuTD1RcnrFf4MYJcCrspqTm36f2fpQEjyMfLUWjQ7okTdSTva4v4paa9RW1jmCR3BByUn22SXZ6qmmi",
  "key41": "5J5z83jyKLkwoYE3aeQgM7fxne5MogU9Qv3aDuEr336KAzCN3qhdAhhyzEopxgdDopbNGCrLfx5NHygZcZLvqSbn",
  "key42": "v23yqmXqeaxhsDXCj81wqA4sPx9s5Bzgpoq1Wym3jQSRWhwDgKKn65Eks6K2LNnNgNNSXtUPJBuRNN2QxL7mBb2",
  "key43": "3KS8wHrhNtQG8wZF8o3RUwJkTQysKJ4bX7Su6jhN3TLMhTr7PYzbPsTpNRedHJZVWvFTQyYSATEc8fEd4GYr2r6x"
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
