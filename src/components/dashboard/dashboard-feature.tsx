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
    "2EqgjsZ7eE7vfk883V47vnunrLiEF2Wf61E5YZV59Aj8Pnq9x82Q6xiqzMYP57nPoDnXdGR5p9ujm4cocEmt5CiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2S1ZvQQiRaeEz51kggu2YRgmKXYnKaLJ2NvHS3zZU7W2w6jfMR1nz7E4NUs92V2KjvRuCsw9MvYb6vVfLkyjZT",
  "key1": "2EU3ZBCfD3KMbVRbfW6dkWBCi9pddesUCZATuLFLKmVgYjAhtfo2MKJaHgnw1NTsTFyLse1vTGBXzoEUw9zrVZ5R",
  "key2": "5cKGekNmsV94qoDWyzi38Wn77SPC98mocjzfjiHJTe4287Eck5vfDXzmKmDmUwwcrSFRNgafE6EHu62W6TPiFWrF",
  "key3": "27avo4hAauk7bXuWaD173mhr3f1F6AhbS7aAThbr2oaxSsvw8gkR1zqNk3hUkv25SNRUfKkm4Hg8YMnC3KKrcjgt",
  "key4": "EnaDDQhDAaxvd3t7tDHaDvaESF9WupGgMxaKbmpHFbT52wjQiGBFspbqtMzrpU7PpATduQCHRUbgHzcchzQo2EJ",
  "key5": "2LLRsh14dZ2qexUXiSjRHUV23VRDrhuQToXcPHawD2s5uYY4KydDnPTsZNYUoha7sguDLr8M6Tq96HdTAGY6AgP6",
  "key6": "3nZFw4DyyswEBZg1R6yMg9Z22Aby3smR7MdsdbtSrDLJw8GMfKCLKYDvZt3Vfw6Jv4t79Mn3rorTccXg1wM51uAZ",
  "key7": "2QksttQmptYrB1VQnrv426y2Az22gwbN9pVR7X1p4ef3MKC1e71UQ7wRZS2bJfCRbuWVbawqK2g5NUACfsfEdZiG",
  "key8": "52rjMw2CCqwbYUR3xFVoq2JZLd3aF6vigtxbcuxLpSHGikbtJVUBDApUxfEUtkN9DP4sCR3mBY1df5tovonjyFHv",
  "key9": "4TMYJdpqcvVkHp4pP85fSnsiF1T6tqr4WNpwnLaEQvsgWyHDW81tTandXfbonQKSBQ9MJyTed75fe9EPyiGVRSuQ",
  "key10": "5fUfPt6W7yyyR7HdekBM8Y949nUoWUXLw8CmFW8q2TtZaG7ppr7FGQXznzQU5qaQfkUByKHzSE3icKRGEpJ1hMi7",
  "key11": "Suh1kMtkAiGaTFuJafhbhLrhi7a1t19fapqt5pmuAcNDUc2hGmT5NLN6JmkXmEA68wa1dNtRAeZkYNz5AjrSUJd",
  "key12": "2Vo5mHxm4LCxzYnzitHJFvyUwKmNEsTMkSDRt9iAoQbTPWX5hN93rVNBb5k9idtMERgPaH3K5rg382mRtbQax5Dd",
  "key13": "4aD267pneEPrJpojDM3v1YZx1tNQeXpo915JohyE7p9EWk8ehSzVTMuCLoqv1xQkMUNnrr5dztsJ9w6vUmLhwgRK",
  "key14": "2E6odmYX22tZqYM9sJVnhce4AxJ6ekAcNWuU6r9gyf33Grqn8bKkTmGAgDbtXqst61jWVEjPpVF8GYKXUctDYmtv",
  "key15": "5dmyQcXX91wExEDWUBQRVFEXx329xecFFAfrQaBhgg4AfjpivcfzMttPz5Wo9J1e1ZMRo4XgPXxPuKFWtYSy12aC",
  "key16": "32rEgzmJzkZKXBm3FpJrWWcKo4QuDoVpuPJ55Qqr47vYq3KAi6Gwu4VcDTFGmZkMBwfJ3ikcYRuRzm7qWEDjmiwz",
  "key17": "3F1pgCoHait5D8B1EUzzcfAb4jTN6qdaxSLFYFckUZZU5qpUNMAAnJkhFHKy6SdDvGYLWWuJNjU31YZMsguygTyH",
  "key18": "2FEr9FWrTPaJthavWBsKBPasNimGndRrQY4RAfzH8D4JEv5a5doJeMqHY5ZfX99X3yPzsNkFmzvELPufASdUiXNy",
  "key19": "3yauERyvBnbzB7iK9MfRLYniTeXEzEnYsjh4iJR8fnTzCnJNbSHfM6YA8qBm9xSkwenSwZe5ZeKj1LHercDMQsgA",
  "key20": "2XbdbQJFZFFkjjVwU8fgLT4JK447MvBGs4aSXbximPaojDmw3zaGYib4yo8Lxcd1BKmrvqDU7qC79zwsy4aBXs3",
  "key21": "Kgu3apFCxewC4ppW3gbcdzgttDg9NHQ3j14mxPx6P6MxACtJ7HMTBEQ64TDWasVLmEGanuVFBy6X2P9w5hHSgDd",
  "key22": "3JCEKzsR8vzpjQy7hDUUGNBDQtovpFbu3Zwe4f6eGmM1UWi7gm7URXyVXDDj2zgvX3e1pdGQHvytRdsnTVfndEPy",
  "key23": "43CXoe4dSQ7bpK2as8pGKXNUUuCkv2YxdyXs8yjv6AiHWAd2RHuc4gyyMgbYvPsVbiBA1jkMzXvNCZkKru1f1jBK",
  "key24": "5NcUoAWs1fFh73q4A5qZ1eoT5HYsNJxc2scUBqKnWYec4HUffZqnxq3hb5hqrtms7Tr1YvkwVZWaSyzk1XxqnVoG",
  "key25": "enLA3NHUpszjPwzhFCmbmmHwbdXUTsA4kGxbbAGbojdtBjS1nojWCw52rxd5W28eME1Dfxhc6W4N667t44z7aA8",
  "key26": "5Gn7s2MD2i2q2oMN9fS4iDzYeXPFdxJ1hNcH84LVYo22SoXtkDAtFaeuiY6tjCNkXgqDF49KLyKkBLAJRLpqoabs",
  "key27": "5axxFswGzyyudPNV8sVd5wVNheBokn6ff3Hb97kch3QTGXtfFEa5fPUcGSxZjq7RSXh9rKgXikPiHwmXfC7A9JKF",
  "key28": "28Rnkf9S1bKSSgKotmwRn7jddD1XAxexJNcXAwHCk5u8EjyLkwYYF7DnEKUsGJXyHZa7ceyEpmh16vyEzPtf4VJB",
  "key29": "4UcqWTZLd3eajHLsA45FqH2Sasb6GmmjVmMNZVK75D67VNaoAUkAkwEypX2H37uPXQ77k7WQ9q2W4nrHoN2ThZLy",
  "key30": "5aHBWrk8xLu251JtfBnHa6rKabdLdho5SRsMtuwmLDBcrJBsBi76ag8cR2pqLMRAY4HfbrmQ63HjWHC5t1ExT7az",
  "key31": "5eJCpjrLASkCkWJfCxkXKhfSPiEzkffq4jA2qThTrMcx7s6c7XCymAYpBNHTSLb9AhmatfVcTML1j5jPCKnNyeMc",
  "key32": "2H1gUkFTNXvndGEuf8Qz7Cv4Le8CwfkHTHoUezeWiVmawFJygn8Ds7JM44v77bY3tiKcjLkbp1wM278zt1Vdc3Kn",
  "key33": "42McEYuANRtNfqVoK4HZnhuGfC7WqKnYEkaKoQEGTM22fiTasjGhzFgKdTLCsxNF1pQogjxXesqUaa39dRFDK7T6",
  "key34": "4hpdnVTYBtA1sgG8L8BkS3gwMubMCzSg6WBoh8Vx9aod1SFXgxSQP34aHQiMyZBpGageqi94LYRFfwsawVudHuUx",
  "key35": "5kv2xzkchiqcv2w7VeKKabJdctouDBAuVBh13KW7mj7fCqCiHj2fzhzyV7U6nHK4sjRdv84cenP1XTgv5GdvDsEK",
  "key36": "4Qegeg8s4fMTMyJUUt7KCGPzBwKm1g2UmyKKkdRgnd8Qzd7ma2Af4d4M8JHwR3BDhbY7qopYsF2NvecYf8uyoeXu",
  "key37": "ZsfEgtikcc9EaHn4qhoYctATtobLZpWt5u96C5ji5hsigB9rTMbviqUALhcmdY8RUtirbeGHCJtouALNGTb4TFb",
  "key38": "HqTdEFf4C319fiQXK44sHzTHHXa5AHyjm8keHfrD8Jz6xbSJrGvkYrbQdkoTKu4PJrSqPYZrDogBatjNPBgjs7K",
  "key39": "46rr589seAQYKr8akizpw6Lcm4GBAMHUFARpHWzgTG9JbgMVqkrL6sWFMLXQ563kW5sEW6eQdg1Wbey3x8h9a92C",
  "key40": "4buHrRxbAUCv1zMgpCgZW7ACfX9SkfHW182T8LuYA8B5WLjuLQcf5Ym6ySRYg86JKgfcFwJufD4WdGDWaVq9dtND",
  "key41": "4gEXvVNkR7p64xLmcmhaWUSs3UNiTdYuASUvhrpWgcYLb6gQWtwKw9qdXTNxhaDGBdL5j7ax6crDhZ9BKoNhn7iC",
  "key42": "61jSRzGX52ujVkqsHvVeZ4CeN3AqA49M2JsmhA5yRSqogjAcMSkgoUuMxbFgYPX7n5Ey7r17wJj4Rm4aKjBio8hh",
  "key43": "3HL2eHvKYHamkNCbbvoU2iPSFUFMDzgEYGiyKQm1K3kvESXTbJ7p4DoGLdAuhJXXi9GHGfjt7PKM2RjZucKMuU7y"
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
