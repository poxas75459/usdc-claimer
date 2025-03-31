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
    "3iuquXeMAcB5RZaucWPWkXkkEYjasGVshJJwSN8WYSPsCXbvjbbPbq54QrYrz2QX24sG18BZWc2RL7AovNPXFhgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KwgpXWQsXmsj3x1CsezRSZCF2yjdA9Aw8KHW5sW3q4X2kNSR3pDaacEpCj68q94xDw7PKyt97587AxpkyKVV5ZL",
  "key1": "2jw7F3ijcW8NLvWM5zoEQ9rJN8WWVypUgouAZbsbg1vcRogHGbDk9UXMwYM6w5g13fnFw2aajGLKQr4yNB1ESfy2",
  "key2": "3X3kmut4zSCQw9WpWXSSzsvrErwiFUHQwoLG3H563YEhsSsrD6wNqUgbEYdyz6htuyBQpG3KLcJHXf7AdmtdJt5w",
  "key3": "3f5w6iytFmAzPBkvAEwsCggUW3mERRBvRiHPszY9x7YE5TLsCY7SCAvuBrLFV39QYM1v3AS7aWTMRMrXzKLRtgTC",
  "key4": "5w46twuqF6rsphKZ6oCr44Yn8zfcpcc8m8udwhHeJU5BFka9h22xpjWXSBqCL8Qr9DDDha2yxUhfDVXDzEJFiL2R",
  "key5": "5q9qBRUrJw9kKixELeaoJc73b7FsvUk8Cq2v4WMLBJgixStz7RKoeYCs1NhzpszxiaYwetCsX6QTYAq1ApKHw9n9",
  "key6": "7cJunb5vggjZw3dqULEsWTvJ2AkzppxGVDKyBnRjgFQqxsiLRpTiupaBEs33HoiZagibrNBtds266tuRdfD28eF",
  "key7": "2s4nP5EnAVcvKeHu3ThmobB9or4o4N7anQsNZZXxkmsHCV4Y1tPXnKJqzk5Xe1D8AePbUXcm6C4R37MK1Wfqms1a",
  "key8": "5bwWNqZPvzX5tBFx1o7niKm47kPZ8awz8vACwmXKMhnMQK3pJ1v5eQiarwFHcAEcVnmkfSmWWw4idrEoiGvJRgLn",
  "key9": "3FaXqtR8ZyfAYmcEfMcPG75MV52d6hJhprPGXTcLPPXzRQcNjPHZd7AM2V5uFDD9y7Xe4tiTxXoyZq6eiMkLkxNh",
  "key10": "4cmMwpBexpnX5QJKNVMwPartp9qn9izvEhtEWo3zbNwKjHfmF6nRKHLXUhnGsB7u8StVag8CHjRPSvo7KuJRhxai",
  "key11": "9K7XuzvmQ2j4UDsubrSLZCGwQky5sEUBZgbyud1CtaPQemsPNcQ5zANkEg6yZEK1SefsJWy46k4up3cZfsMtrWC",
  "key12": "2EffZmHRsthYE82rC1V12qQKymG9SAxfnNNQxSczLFrXAYX1kveanb7VMoMbdtd6vgTa26rGwCxAc7vCGn9yNvPp",
  "key13": "v1KMNwMbcvwWyAtb37xNos3xJcTeqxxXcdgKKFSbCHuk8z5k2kHLp3mvasJfJHXyo9o7mmYtXWa8cNwFykrf1rF",
  "key14": "2SgqznMa9qo7p48sDD9sRPpUr9nuxUVR8ByegMLTKohRg6Asz9MU3MUKFYjsMCzeiffEh47c5mh8CQmvmH4g1gu2",
  "key15": "3fYKxgvPq5xQuqy57cKS2UTk5NykaFiQR1ey9Vs15V7yQrUNGPuKc4PXkFsqzDoE6GaYad14bGPixWAiFyEEQ5Gd",
  "key16": "5WzdLB9Y5vLJ9rsPJfeuYCHewmxPRkgZNxkdSrTKhAPKpY1KX6ejPwfTBjBih26PZhmt9cG2mpTSqh35E1iUs46C",
  "key17": "2Z8dj2smXFvw3phmnxca8AefLWryASMvjf9QoGDE9MRqh6Cgf2tqQhyuKvCYUjgFG6rPXkqQ5ZJgR2iDmvVk7yUx",
  "key18": "2hy7qhJH8Zoqqsp9HJpaJ8pvE7NQ8UhatQCZUe4bE4mYUiDQvwT5jLh1AJcnZPWJierHsjMj9HAE4cJtapuXRAkF",
  "key19": "5zp7hsWsGQYG5PMgJycSnEsAcjCfeQ1ysLZ2mm6BwknJF9vvXGWomNHtLjoSgDuKrkotVhM28Aywj3xV1dEdzvPt",
  "key20": "UJ7emCFxSunH8rxfxr5koHSWDnpzmLRHXrCZbtnua6gzDvGvkPnQhuv7YJYkjUUjvi3yum9mFGdvQE8g18uwqLr",
  "key21": "nCRrAwsbF46Rn65pKdLvDiaHGCzCd4C8o4X1CpeLayo9WEZYggiBsYgYUF1xyU9iVoGq2cHFHo1HF6Ug1rxzgEF",
  "key22": "kVJFQERhCTwFc9buo7HE6t23pRwyyv2MV1MTRsoyV2BcVLvrMcHqAki2Sa5xRdtZoL5nsnQAZTe2qs6ReiKr7aX",
  "key23": "G4bPU75TL6e3Mz3dz6QtNhGxXZRzFzXuhmoPRfDbkWDdcNHe3TqTXJvMrEZftqwCPuMdjZeH3SZj2noNha17pbQ",
  "key24": "4obL2sB6LKsjXQ5VyCij3sjbpC59AxHkGj41LV7UL9HFpW8hQUmyUb8WNytkK2TaonPFbcFyTDqRazyW1NfhKPCk",
  "key25": "5pwoLxxhbg1Z1Cue3YU7mfXJidMSbxrAPhEtmmzTMQAoq4mZdQibTPTMNG9RqAohg3Dgy7ziUZAu3kFwCtimCV6F",
  "key26": "2vRd8Z99opVNc1UEnkLpdSTgzLL6pENBd77JTjEqM8nk5v5knMzTAJ4ZyY8s4AZuPixcTCDAGqKRQ8U8WkEK35nT",
  "key27": "VKNV3hbexZN59qFdebAmMvrTnLRK2Tf97XY6ZQqKju389AuSAVQYSK3j8dpRVXkqdSxGqFzZ9GTgDTk7XrVSUJP"
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
