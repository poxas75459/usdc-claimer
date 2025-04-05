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
    "4ssq3PYsYH8JPakGoYJrPnqvbua261WxzzuPnaK4yWp8HZF24QgkW59Kc6hN88jo34dZT6x2m8cnTbPdQoytLCHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xJVXB1EaXq89yo7dCyBDXMgQ3Z47buHDs7pBsEYKLbHnxGTZwUJjrMpf2r1DPHrgfMoyp5Pbdd6xnX5sC39eGyM",
  "key1": "9tVXiexRUatku6S6DXZRsAikdzDJA4YpbMpq1PgbQJeD13tLbWinFQ69R9yPM7M1GA5tRuxSWc9uKJCzqGsAxqK",
  "key2": "5XcD9kwV6etBboeSSfQrXbc7LZuTtFkLHwo5aMWN3XPDNsiYvSUKN2hfoNmm8UeWXtCFGamwQVMS5u9aQkjHwumj",
  "key3": "4hQC3cLkYzWKAqt7p1PSiwz7KRoBc35AK9HKG8XZorjJbetLQqpG7DEqxFDpHjzKwRQ5jpiWK6X7ucXF25X3puMT",
  "key4": "MuG81uPK2cnHsWwueZj2uUSmtdReLHcwVhd5fx7g9XFUL9eRWQjzmsDcCpioaGF8ah1Wq6FMS4wxSb4Ln1BXgp7",
  "key5": "2ZLqz95228bnsy9LWvjtuKrGHx5eVizirtuMDvorbPB9eyvEEFhscaptpZGUbY4KJLKBB8fzs6xbe4uBi6PFcfAo",
  "key6": "2ErBbBndxtM92za2g2gWN8FJkPfKwSiGPToLPyTSx7rjVyB7oPg6GmaEqtK9wKBxK8nf7tJFtdXuP9voJyu3Vrp6",
  "key7": "2dy2ubHCVxFyK5w8jfui4hTYq44QaPG5nR6k48KfXWMrKPMvWs3ob4HigjH1FBJeftweDsNjxUCxwybp3hc26Lj8",
  "key8": "5RPf5hTaizQZ9rp3ZKrkxpU2wwZ3eX2CZneQ29vpk7FZob2qXivRwr8nbLtFTApCTuC2mAyjtn6fKBVStvATVd7t",
  "key9": "2pfs2ZuGFhJgRKj7Xy7NQBRxxGQico2hnLxGjd3J2sxrbaaYBqVPhsQgPcb5wpmLmf17e8unqTLVXwG192rcnt1Z",
  "key10": "4wTb9XA7g1SqeAJgzM5Y25abDkvyJJCqSDJtUzdVVxMz8ak96f2hJJfk9pyUqs76cfA2MwdExF4Cry6csnkpovSz",
  "key11": "bpuA4fKcvcJq8TbkoaECros41KEw5avRWBWVyzFBsJHAtyugCuVCzPj2Tou1BrCJ36k6zqHr5czNfkYXGJTymG4",
  "key12": "3fC8q6g2AAT2ro9fStnXnJB1H5NNmL6VSwRMByoosKBv42SnfQ3K1HTZNB4RcgCB1KpoBJa341g9YLUZ8D9Gynhc",
  "key13": "3DUKLZ4egobkGdy7H22S1btoVAFSjJt6fz76mRKqciqxkML2BUBZxaQuzi6Tv2CJKnCWwAyC1pVftUN76UyrupMx",
  "key14": "3mi4CAr13fuVXV39JLmF4r4SGn5rKu2MehyNdcZP5AgAxL2jHc3NwqbDndnvpUrMXMuA5ViA7hfJ5GYkdnoyUgxU",
  "key15": "2Ezve7zS8BdFDCLS2JMcKnUPZk9oi87pTVxxxRwG7b6sV33wTbJCBJBMSppvuyRyUHUHnRmi75V57xPcF82NXosX",
  "key16": "4A6V8EpP7HoUofnveJtKtZzs56EcuPc5zSfM7z84k1H5AXCNWHnRdcDjcV8DkRWVgpy4NAYEXmRy2kz3BinkqDcz",
  "key17": "w4Br4Jb7b73a2cQqGsJJJFSrAAXS7AoP9otd7CfmSvssfMrD7dAz6hA5yTXYqBM3gVSv474GknQfU6jfjxx1fhf",
  "key18": "3gji3BSbeVMz8Zemdak2c5fegMcCfZivCbgfiaK76U1N15gtKAbthWsEin8hm3Sfy569DGW9XwCPNRnhg7ewSoeJ",
  "key19": "3CyGA5sqZSBuzEzfabrN748vdBp2zguoEK3gD936bAT5epSnZrXauyuhEqoXWoQDafmuR7dENUWnQDNtR54QTC3r",
  "key20": "35jhzq66azcsuQxJZAURYDAYsymmmZraQaznJuNizSWoGXZnhefX8CgQ6rK8gNxXJYzHeH9MwRUVjaHBCJFViDyp",
  "key21": "mpMxSh9j48Lo2iWDhWUvY9og8gVLYtjJhoP7bUL1Epan6sBepXXjG1sZxFY5WguVzU25W8FcByeJ8t74A9R6qFX",
  "key22": "46gXcBXn4UWuBraX8Y1caETShnjPPD3Dc1ppisUczHNJm3QGAMHFrSPmWQ6gpt222j8JkvskJKmNCeB22Zx32fiQ",
  "key23": "369TfLAsfBxRXDrLSyrhuLzjpUUTaWvGW3KieBcTCWrQ5xt68GxrKCTmWGHECGVkkXgY2jwPJkMh1pSjGuiQcqy2",
  "key24": "4KXXuejv89ew4i1QzhwPV6z9rJ9gazZrBTSkWvjfJAQ2RobxNKRc4gC237ykyet8Mg3E9WzCSGrc9M7CJAMQBjcp",
  "key25": "fvGKRkvhp6D94QRWKhRAAGjJhSQwMXCp9yWebK2ybRjtyFkbpQd5gZwf4uHUp2piocFtbYUZ9kt5zbBgvWk2Rfh",
  "key26": "mqazsyC6x6mLLHBnWYD81SHAbKPpNFqw8hMBtRTfwjgFq5yPpDLYNmjyEW4GAsK93jGjP644Yc5pcuTfZz6XnT4",
  "key27": "2951GCUjnihenBK4EnKnfRw2UCrcR5hNXTnVstfBTsWirgbGhSi6uD2EGxbA9j7YNiLUbWAzUpbyEtGTkQRGGahx",
  "key28": "5qB9AWWnrpQ8z77hAYnhr8DYvXeGYQiPDPs6uq6Tv4kR3gbtNrDTC4iS9NRR23rV6LrPVimBs4S814WEZduQZ2rk",
  "key29": "2NmHSSis3zNoJjxUJyGB7EhexfcQPKZX6i4QrwxRHK8yTY2AL8X4AtQwzNi8v3AT44vKJeYrYB5HQtH2RMWPtB83",
  "key30": "249bod3o1Wuu83dPQ3pR76yYtnSiyafzKhhEN5oGYSbmKwre6MfRJ9csRXLmUTiHzAhj3zBhgfP8RFuYNNVqadt3",
  "key31": "D6ZjxccGJeJdKy3vSZ9abqT9SGRZVCJmGzrnVkm5Jz7VmRghpvg8Xz97of7r8m4JyhLHAcJMib2SfjtiXKPWouV",
  "key32": "5ym3oCt4zFpTueRXoquyWXJHtbohfUtJZhb5ZLT7mgKRwvyXQW1SHh4oTA4MwaLGRhGxhDxysgevSyMybCT1WPx2",
  "key33": "5RMPY7bZQNJhV2vUcgB7Htvy3zZkgux23ioYYga8M1gFBLE487CEA2p6372CH1cPRu8UADxUP9cuBhEZELYtJKwR"
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
