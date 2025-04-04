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
    "4NkJgRAfq8kqdJGS14ePUF8jrt9DNfeqSHRgkEDQqy3fRAPsTUae9V9JbAGJsWYAWQC6nAteDCYHkbv7WouAcF1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywJG4Bp8frASxSW4ksdzBhSKpXWxhaKhNhdLjnjWjfGGzV4JYQsTUHerjPNYyjm1nZEHk2V65gq3yeBncH4KmSv",
  "key1": "2QQrmCuBqzWkF5wtmBJqyVqfEbuo6abLFizDsj9TwaUKkjKB867fxQTx8fjGkr63XdUsh1HzKnvGdK7wF4dSvxTe",
  "key2": "jryCh9EjQZ8qv5AvDzadcMCzYEZW3NwJdbj2NqEXpdgptAmxknw9Vy4M6spfxUUaueLsKhai419Jp5fcC6XzuAp",
  "key3": "2ka7tacTk5xzfKqUp2n6Ss5SWpYZKkxtjoPVCq47qKFC84izCDaQQdxQ9LuVDVzFJvRjq6L2zrHwrMDFLYStb2BH",
  "key4": "4mv5iziuAZxDN7SyKji24jbc8WkHqTnfxkr2XmeWfvsDgVZ1h4vYXmmw4uV3dnJSRc92DBke12zUkfiSQteSNonm",
  "key5": "UCESZzMBKBWrt5EW1NpZaTYhJmnNtaaucLAV3Dkbmi9ef9AgT7TrrAcL6GYnGGLaKgpWbb4Wxxz9LXjdpd8pi1W",
  "key6": "3vFF6rDC2dGVPWpsxtXy1RkMWj7mywUATnjR5S4WBuGuC6u9fkKhDoCcpTitNK7F6XkQwykYrMensYordxqNshSC",
  "key7": "5JBuKnSKyhGFsb6xKgaL7UeGjuRXsKhrqqyMWJE5hWjsn3XQ8QfnvbP4MbG7u3fTbgFRhgdyr5NYYz8ueTFM7rrQ",
  "key8": "5KxphjuqNyNBrzp71bz5dNw9VJPbVsSKyBEuXEJaWJPxqWud158HFhGK72ebgriAxoM4fqDtcdryT122RCi7SEXX",
  "key9": "5Zx6bFx5xfHF6CBDwG45vjHapqirkJ9nEbjkuDYvoWDhkEhVokTeMwYDfUZLUefXZNZLut9PnM2gtDpfcNLbFYtD",
  "key10": "2F3jsXAJuLwTiqzHEs5mZr9Gf2TmX8eXRRtM5CvpNyVQDQgSYLuSc3VELBJ7HtxZksu2ws37Nfa53kLwhcAXZvKb",
  "key11": "2PEBGZvxSHS2dJnzr6fMLCmr1SuUdUknMyogiUF7WHCp4TcEvfJrYgxxSrQRSb6v2pcCpxZf4y1vWfEUzZzadAY3",
  "key12": "rZFX94DJJ7v2gyBevcEKF98Do1LV7mqdV12tJ4UuPpQeqg2QQYgjFsYBH2DaU3wP2U5YWmFuRdBvKts8gKu34hU",
  "key13": "4Q17PwfFgbfJjR9pRUCtgjvLp1ZcqHToeG9tFES1NpfecyHJboJvDWj4dMsbPFFzHEygVCj2QjwgSpgxLZ5foVqb",
  "key14": "66nMX4NUrZbapJosuRkaGwPuhzhRqji9T8ytkiT3Lryzxeef3nSGPTq8hoqYYav6Dk4Xe1e6Jwuj7Mvh7KmP6SqK",
  "key15": "5EapUPMLeC9mwfgqn1LB93nJ9JPPYnaHCS2GDanCKg6kJBLBBkoLJC4wbLnsMnRNUGWP2AksRDCxN64QQB14Fasp",
  "key16": "2HxW6FzVtZmsquPsPpC8i7Pg7F4WZjupyoYGwri2aGFGQQ1b4M9fVxfQAKYLhKgwyA1ShNipVbVtNaQ4jX4ns9QD",
  "key17": "56JA27dqjo9cgsV6kWTv5keYdfQhbka6mD7cWt1kupA2dSQiGTu2ngghtFmuXCn5KUhz6fgEPZRnnEEJ1AvdYrLn",
  "key18": "35qFyxiKBSpLEvmLriaKqVpyNSWs4Y6gjRhug6w9moqR9RkHvoPMAcBaFXLVnE6KaXa9ZfBW2bEtedZyVoyNE1mh",
  "key19": "4uzVESKJ6Za6thggo4iqbh7sRkZHyNS6G3ZejAUoR5BkeWreou1GqLFYpqngBSg4H8KQovQayQ9zea7t5tiPrfr6",
  "key20": "4rhYLKourCQYYdRZWtdFQvkLsY8AkeQpqbKGr6Gh4dp4L6mJLPRHQhwHE8kd6vDfAG2nMDnL8vkv3uAZXJW5koHB",
  "key21": "4QWgNxD1tFUe5sSgra3wpn5QF8kaS1t7WJfYBQehveayFntiHjLqq5fSvwEQPPXFN4QK9RCj1HzL5FQE9GTB74o2",
  "key22": "39oH9izQ9fm7U5CekT3mnrmQ772q3Dn4KLmEwJTsx5AZrLuD1sRD8TuXafSTBZa6vYGoWpPXczTLv9aFFtEqZGpw",
  "key23": "2qmZfH2SV1LtfphCkMQsnAyhVg48h72eQq6tvoMALfroGLSGgDhqj8jn3TuD8JWwvvMUAP81Sj4xSdA3j3iWGx8Q",
  "key24": "5zeJH1GH5u4nsoFYwcthCAAWwkeCLgXQUzFpij672gCcpYjY5eVBTCCDpwiYVjKQct76D1FeVMxPQ2VL1DYpHAnE",
  "key25": "471QzCqf9Um9G1ZoY3qhbozrzeaXJyRPe8BJszc6Nru1A2wArJHRH4q2EhDqt9Z3X7zKVVeay9xZNsJNFszsmtYe",
  "key26": "5vEFTZWRooYVsQ9CMDqocaQ31q1m4oCLzDrYBKzea8gHs8EkQqNpbvFFWXguQK1VYWwLCJeja3zsrKyiyJezjgdw",
  "key27": "4jp2XTEMzpd21J7bTtYPdqopXt5of5Pf5VAk9MpZkf9nQRgz4kmvzvmiyN5dBPhaoaa3UiLfwyD5b8sfShmr2n7P",
  "key28": "5r6he5RwRfz5mbJc2LcgpJrXHFBQ5MJjbqF53R1qD7LXqxdqKAJHVXUSC8VHNRdkKW2XpUPuaT2tHNcG4pbWshJj",
  "key29": "MTtP3yohvnANbckzzAuezmHJvn5jwL4YaM8yyyqUoBjhhoZ5pZ3TpTRHtekKkFVhfamT56jABu361KCFvdWMin6",
  "key30": "4MT4zSYV9TVxRwJ7XsAPg2H7TKsCnnXnYD6SqrxPGksQvvV6Z1bcE7HPYtqggXYGEY2VzyUvE5PbNmbWF8SqRCDV",
  "key31": "3dxpjkZ5KkJZeGvMZdipBjt6SMqV9eKRWrKp3b8ihcabzitop7142iQF4g7VR7CTqjN4QMnrLYADGTvXJy7zDHTG"
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
