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
    "2yYgbLyK9W25Cho1DauxQkfeGW7JWNicToFxhJydumkBjWN9DC6FpuZYUnjKyja87HALhFv4PSKY59rXMwm6iP4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K53J9QD8Mge23KDGJfTxteNPfodb6RhMiHhFY34EjekGYQ4e9F4LJCkZ4U55exc7hjrJouBpCGevZ1kgCBExrm7",
  "key1": "3jVM5mFXqgjfFHTbEpENcwg1qs6AjCMAizghEpTpAp5N6Kq2DZgDng1oCDhio5iLPWop8bpt2356pEUj6Zjd6f9q",
  "key2": "4aUwJr361WGZV4jiKGvBLhYJvCYngiVo3n59dpEUDbxkc1Nr9ghKMXBp6THR7BD4agpuik5nGX1A7ZHyqdD6NUPc",
  "key3": "3zP6opJHrcvPkwzaRr2SJLG9eJb2PVQGbSq455vgu8zR1i4QneiqymVnsSykpfyW18GMpRstCs8Ee6qg1emyGh7T",
  "key4": "2kvkStvhxwUbgvUjeZJGV9WWqFVRRLjNXoENhie9h1w5qAj4pKEtQgucdVSgYPhN2NLz8kNv5HfKKLoPMnQs54EA",
  "key5": "5vEs8Zpr7hTpyxqddYpEeVd69XLcxPQP7LvjLu4BDqskW5qLwT88vSSCZbM1fE1BvWdixY7Qs7LUaEF48z4Yh14U",
  "key6": "bQBwt2GTWWh2ezsZDfNXaboqyAPn1sHQWqnbu5yvybVJWQQWtr8MLFjMmnC7XvaagVFFSDnG4EBLSvdHDyaZtA6",
  "key7": "5w26ZZPYYdKajHGbKAdyag9F5gRCMZ1uXBdwV669vx94EZttbweSQFLKTAsxiUfvw74ixWK74tpijjZD7znogSuN",
  "key8": "5ABf2GgVavK2AFDGUUtouEkfhJsmLfs7wvsjEuA13PdWz62BEfLCAT19MZHyBv6vmZpTKYo1bjYgFEELhHV3wYid",
  "key9": "3norRzwagB73aXYe6szqHZNsnHr49vqFmDG2DXBsiBAWGanBhGHr8iTRMMmcKQGXvSk3mYkzD1oeqrc92obk2Rsk",
  "key10": "2wnCnTjy9cXtbsTzNrsR5b123D18RZoJfu23BUqeox7amApVfXDNz1fZDByuaKNbpMFhZjKBHWBMXD35akePCLyM",
  "key11": "4JeqTdaS2s6c7XxkhxUaT3MoE2nWUtbEFhhHwRwspimrefP9NSiCqdMTzA9b1i121mJDGHL5TgAZBSbVnEDuAcuJ",
  "key12": "4j6docfQjAK9bSN62priT3FEQR3yjPxZqkpmK1uiRh5e33GVZfgGVA9jbnfZGKwzA7gb59QsoxrYkbL4sm68phtr",
  "key13": "5REqkCCb8beUoS99VchPVZ9Y4Ca9bEEvvcaf7mLtxX7z5FijSN5HDtfqVucUbLFwHHhiVLsa588ypKBRiBqQsAzg",
  "key14": "4pH95N7zJQu9Xr4885KwzBy9xqgPPkcrjGypRff9Pv5JZEikv3XShcZJP4U8sYPSqccFMb38nfEpAWPA3mYs5J44",
  "key15": "5jw99ui5YCsAsVuQGKpeXK3Hfsg4cvNBMnjRigy7B1tu4TT3vwzhxYuHNBHYCXbuPwk85QTeRcG44iGuEpyZfw7h",
  "key16": "2UvoyB6KSZHDFiCySiZjxXigXSavp8JAG86UC2D3YVCtxUcoJ4biurJy4XBvT5jLHRXiPzWCDioHSXyTmQkNJyfF",
  "key17": "4Gp3N5nHPgg3HGcXizPN5FaNM4E7KWS8hc1tJvv7y7TFNNyMQkYAnSFXaBkZbH3S35Y26NsLYNqC99WPQMAZ6rxC",
  "key18": "y7ow6MvTCuxR8g1dh1PrDnf49Hd3yNL4tD8MJaXQrZ6CVkFTpALfeM8qUojgb8UwBSddNzwC6iC8qS2TaV3PYVs",
  "key19": "5tRhhy6VuvbvUHst5shEyFc55a76goc7opBRSRH5QNMgSgUnH2go62TNk9WLHkn6y7WZqCyGJaMUKpNVCvCkfXh7",
  "key20": "CGV99xwMDHjVZfqCh6irRcYYESzyLs2kCLVCxkcD3h2eBYyvpRrmJGYpY5MvAo66TKMEixLunpskA48X33RSKAC",
  "key21": "2MvXMj5EJyTGGR4KjmZmfFZSMLPa5dNyvUpWBaYazLLHzF3Z4cJR5NsaFQw1aBUSWYAKXMrWUG7cL69om8jyUaA7",
  "key22": "kXKc3H1vqHdzA1QvWskbo2D9VqjwFbbnnuoa8vUDUVypHC1HE3WZwH6TyQe3QtvYycHTkesr9udqBtZhoTdnTvF",
  "key23": "296jqjJdQXfj3wZVdZr8EhebnV4ETwbWGuPUbUfHFsh2fiB1gcSTK9DqPgU6sjFNGyK67YkYgHTfjC2tRbcaHR9c",
  "key24": "5PWGNy7NTkups8Mrp7Bschssh1LqzSgmSthaDDjpg3QEpGym2qaSKnPA28eoRnF1iGC3Mtmy9MD6RysUwrgHvnRx",
  "key25": "2byMkt6cJFZTmtKy3P1Rn9EsXsN7eHdyHw55cB38C3QJpsVYvopn9Av99o9tfUJEuXGptBL18weRnaAkhoQjF12k",
  "key26": "3fYLUQN89DiJ9hHtKDr896FAFs19HcoUctyC6LdMNFsbQAiAp5JYppFf32KZHnunxk2JJKAkkn7WAsw6puWbm3XP",
  "key27": "2u7vajWxV3iXqDjBmL81n27kaHNitzqeEkyB7vUEXupW1PCop1FeHKouJ5nu39vk9frS9K8HdkeSoEw18usWvHca",
  "key28": "2Fs143pBt4cF1GcusMaayh4TDvNxkv2upE2JMqcs15xvn6w7yfZJrM48UERSPAmkSJdbL96SzgsGnt8VjDK6JKsE",
  "key29": "aMmkhpULRsZEiwkV6a4UVNyzmJZsxthkm8QB224FZv2PArMnRKRRxxRkB85t9rrAtin6CgqiBQVaqdskyVhLfre"
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
