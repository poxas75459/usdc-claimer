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
    "EQh42kBtaPjSBturbTJbhxw67TfFbBcAhzNjbFiie98oaj5AcTTVPPeHQuE5usccb6ynDs8spNQFLfHi6J22yLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9Z2GTiDhJayVZxPwrJYsjvX3UQoqgt2kTMQUCEnKPUrLS3Z2ptSwSdZT2HAUChthBsWRSZ28GBbvJgL8SCuUYT",
  "key1": "4Qr6THy6zfpy9AcpemsiseWjjP8JRLThmHHdgvG33qBwmEqLKxRdPa1iWq35XuArefa5ssrjdz2czN2QAApDQHC4",
  "key2": "2yCTGfWgzGrxF5cs19rfB1PxhoLZP9Uvx1m17ezRTY5TJy5NRZnebggpVGs1iVnp8KFFZ4cVD1bMZKLo6rVZNN7n",
  "key3": "27UixdjMKqh6SM96Uo7Y8hx74Erw7bYvT77FPejCb5ao9LQTf98WPrtowBj5HEZCkqhPAT4dB5YiprTCh1912DzD",
  "key4": "42SvR4Tb7aG4u28oQUoScRghUiUPpF7WJvESkUNHytRnzXMxhUBXtq8D3J898BBJxEoauJ5qDWZ4xRSyywjVgCDU",
  "key5": "Q3FxDbgFj85FS2tH1ZFAxj9EGe7zbxVxnGXDBSkU69t8ZmLz7EzQPG3nCLYxWAe1kRYqFeMZSHF62m6roTPCRUL",
  "key6": "iRPPyzXoVperx39sDSSUJsh5TnwkYVuCJJ7tKtW4TGxYXCX8zYeuWPnRkDHvz6LET4BNJH5BthN91W2E4N1eD6b",
  "key7": "4L9TAcMojRc3C2TePoKUT4VchJZX53o2rZkp9nSHS7FaNaFdqoXYZeDaWruS7iS15skHySJUsohxUBZUcrqLLgC6",
  "key8": "54zCoD3KLLxVwy441zQZTEwC5kU53h2KtiDxUMeDBqifsHjZUxAeToFmR55mSoCYceURYaSy9NnNRNnFJnRCXK2f",
  "key9": "4UZSynfm3998qWWFdopH8VfdEMz7Sb3UoNLm5mSktv7iCB93Zpm2TVaNkExAwJSF7XHYGt2DfFAjYq2LZpPh6WaB",
  "key10": "4GpNUax18WJaVEtD1ngPDWmnGPXq1JbwkGCM8hWF4A23yyDkqMGid2rofBQ5q2kRF5xEGoTgsHwL6cCSbc63y2nS",
  "key11": "3RtJoUcw6HQAr5iMFAzDAt3BkMerdSpuzUx4W9pLEMmaGujY4rMXcfrjHk7m4Bpt6Ea6wEMqc4mecnwDCjE5fS1M",
  "key12": "2LhJba8hHMxwYLvHCbd7MKtBiJw1Cg1ocPn4XKd7CALUCJhSZ7FRRvbXR3xCvaLSAaCvHE4in4EhBWyyJ3s3deso",
  "key13": "2LXyAzj3L4qeqDNuhdL1awDKAPQp2Zggzjtjja2cdHFscUgaDJ2gPV8wGc6rmeoKqhwaozaZHHeiizSV8CmWZGKj",
  "key14": "44HVFh4nqXqN64GVePSpxT339VHjDhckFzN7PyAE1YCGtsnakygnaKF4vj6x4H4xU2upnFM8SUnQ3UNxhhV1fGej",
  "key15": "5P3Sfsd1bfrTDmY6orCEBeYSUjaR5JXGPSLqSjMZ95u8B9qZBPrxJjWqARVebHBQYTXbzTaBdoqAoTLZvAnkekXJ",
  "key16": "51c7aE497xrmiuKaHQYsWiW67d4MTr4M7tiWT2kxdPGTHdL9VWJ4ahV9M3JjAMQ75ZZmoAZcPFXwDh93nhozWgXN",
  "key17": "22DwtqiYQs2fJFYk4SLJFSdxHX7xgmvUysqeTTxbGNSJrpP8RFwbRYpcKDFCKgDQNXM3wyyz5TKaxFqFa52j8K4b",
  "key18": "2B4cremrvbAT5wT8o6sQzFpSPp9RLHQcstp2KfQaHYVa77bMTobnYmaQ4j1Wzb7D8ePG7CMHwXTzCtxsAmqBg7ah",
  "key19": "59UM8ZpU3RH4HpCaQH4YP6y7f3BotoghWA6yh4QvrL3LNhPNmdiJznKehzh4m938fbueRvmkmULfax4p8urub5oM",
  "key20": "4NU5A2XCpfaPPUV2Q2pzyMVkB7GPYcRc8kBzToer4448dhNkZee4ATHwWCWyMmsQbk1YCLeQXKieUS6qxbwRxVF5",
  "key21": "2vC4sSGeXwuf43i2Ek4uUUQUsjSKVa2SBKuymh3kRG1GHnvH3KCcMGaDj7k7MjGqrTNDfiCYqWqNXy6txjKzo1B3",
  "key22": "4TpthfQviCBcJYymBNDfXurkEonXy3SUqRecWQQFwxrSUUVrzd3dVTKU4WZ1BvPCQmT2maf87MVKjt7R6mBmff6S",
  "key23": "5XFwapz1UTr2RbGrbrKEEk4KEzuNYPfXBcrRiNbWeNXbRRmszxHLFdf4MzUGx7YQNp8AQJuZNtwaEvzKHjG3XjAX",
  "key24": "3U2MRXiGopkxvEnzcbH6xKvUiYjzxicZ9DNYD7EqCzAynsAongshw9gPgRz4uyJ8BwJykv9vaGs6yWgw8mNq47P2",
  "key25": "4UF9nzduY28PfMAXvqVU3M6jXvmSra3baFwUQ77T46LCXpyKAkX2ky6fkHxbzVRn7CoRMQoL1d51peq6Wi7mX1YE",
  "key26": "5c51EYRzCdT3XVrgdMfYHw3ZxbhRzPoWJ9LikbhVRe5XmtZU8RH1pBesvbtqBt38tWuYSGUECAMz23HvzmJ6BSF9",
  "key27": "3PZToSquQS2p1e2f3nY8Bv9LbxqJVELuW7jdVY7s8nFYNv9CMK4FRJAwDfjFqzuCkpStS5esJJbchbKKuTnErdiM",
  "key28": "4je3JXNYccnkBzq78ysg1bUGpiQLMuyCkJkdc8W1hkV48JC4oJmDFBF4dGQKn8Y3DV8optPsiVCLFcJBhnF5qebg",
  "key29": "HLKxtBR7tbpU3Pw9mm63KEJYLBZGRnj42xsZdsWTUyZcqPPMqhKbGuRMMSNKMpLiefArbkRu93VgZz7Z3fcjqwd",
  "key30": "4qXjHfsn6ocE412hENVy8wUmu9aZ6oYvhNfyZuad9gG1XoPFGAj6e9SdxmqyB2fzvxdaVDv5eNU3vPWGswtJoaC7",
  "key31": "aYEFNRAGfqn1VLqf5Bvw95rYWcdNqPRLLdyuZp9497wGgVm6Z2KKURhmNjhSwW7DqWM35YtsXtfxScodssPoFbf",
  "key32": "eimQiSYzvxiBzPuk9Y9NaQmFV76fSqph8PN39btjE6D6r1yjcjgQtB23jJUuERFuLyUhARTUVpj9XLXSFXmLvxd",
  "key33": "3GDnaX6xDLCD8YTo39TLBTSGf8a1z2bTFS1B44nAUGDApHoxy8zzrCjHGpXyfo9XwqF3SDxRDEwp8VH92jSTQuAe",
  "key34": "pW9ZjhNKFK9bVHu8vaFXLrmaCS7ecz7qjTnSqiEpfNUgJjdJzSgv9Hbu1HTJpcEXfDPrg6s2B6LiRMJtnXjwVMY",
  "key35": "4NCZbuVbgjJsDCGmcyYEYh9FQmKPY9qFv8nsCft6ZLSDeKeHzyMd8td2EK4thw3XxKsiS1T7gjtbVPAfixR9cp9f",
  "key36": "5jQXWPSR5sCKHZpZSB8oP5UQXykCYfXFsek7rFyUZyFjnVF8RB44PJcpH48zAVasS7gYjNxsbeXKFQzptqoqFxtB",
  "key37": "3aUYZLSmUFnZAQK86Rh8MUJWQsrQ6g7MKwCGsqgVQZexkr7soFUj7iiWwSEfWjvfi3RTiNmFkVniHHpAu81FtU3i"
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
