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
    "642UpXDE2dSXjzgx5biEQsxbWngftycdBZ4Y2Be55GnWTTNBi35LpUaSEsiv3rHgqpsB9DWhpF6xyBXdZJM9gUv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFS2uFMTmnLBP8xJjQ4K14vrezjLqLNboce29sXyNZD13VqSGu1k4NnRiEFnGk1695LS13ckekmhZGbciUNt7KH",
  "key1": "3BYSD3ka1a7BJvqyCmVwFTESPiBDYBCS8pGw19u3RHJbaBYJkqtQVN2Mf81Yq6eJVPRMDhqBJ513Xnw11Sq2FrZY",
  "key2": "2fgB7P63UhdZb9YXP9naXt2eYQEytJVk3wgcLUMZUPm8R5c1c7LfNEA7YNvsG79hREeEJGAgeGJL7mwGjBtPDjTU",
  "key3": "5SbK85S9UqJKpnVRUWsTqFQX71Gtt6CEhxBdeE4gWwzyLa61WD4EbbExxarmP4n6UZUywxLVh4EmoYdXQnrSuWAJ",
  "key4": "31C3xCuaUt8oWJQw1Z9GsfDkGG6MFXtXNYUttU5jszDPm6rdgmmpZZ4H6YtD8nAJxw3aXkyB7vH39dP5BknBzjf8",
  "key5": "2qFaqh5rxo3ZNhUv7L7tjSkqKbvTPMyfgKinVKkXahh9ZDQotL5XE6ZQsaPzeBksh6acwo7hhEASiC22LPBZE258",
  "key6": "4jiE38ApUDPqfkqbsmj4D4H3Ee9BoSPWvdt87C5wTBAFuX5zAfxY8cvv5sZCqncrhkiAK6AFFhxAtHrPYnvrtSTt",
  "key7": "5WNWRikkHuQ1Mq2bj3ooucdY8Kb12Av9KsFSAtYy87CEKk3qdPoBoCRaczKhqSTZ4QDbSW8ALWMRLm6EKzdnwj2a",
  "key8": "ynLpXysbk9wa2huehrDs78ySBq2DgwrkbFETAiMpXgnXQJKHheoM2AHEbevZ1rj5YAnttorxXJGcwR8CF3jj2Tb",
  "key9": "5nh2YDABZCWet4LoxihFCJ8ErkLq2M6Jv1h7MKGWYRQkZXiG9j3qE6w1G896tk2GkSGFMcmymirBPSWzzr2tHANZ",
  "key10": "29hJiNaENd7iZQdCxFSiZhxWZfio3UXPuRMZsY97vFEkFVEGaUxz9GqRVNWFV5QyFPJo1H6rqB1LJAoayxNdRogW",
  "key11": "4WmhFhRBqjiZiTCJehYVFv3Xd5G9cd8pio2dFYTXuTNjTJHrTt8s8i9bHrny3PDp3Vy9Ax4EDpuhY4ck1GiKKwaq",
  "key12": "5U6kpPjHoiZgqTosQX9k4e5WVEN9ZQBKco9NJWRWD8W6hwMydm1NHRjwyEdiyoS9vW6uGGWmXCJjmF7PvnVkN9YN",
  "key13": "5rwHPGuoEBM1X1dY3P8PsiFstKyFbrx8KexroaTy7V9MiE7HNQG1UJiw9dsicoeL6zk2kgxcJsaRT84rfrc9kntK",
  "key14": "2q6jskRuZXBVzX9z5Qaa8n7k5xdkxvptJ968mSJjS2zY9jFTTMH872ykcjMbpS8UG5YE4dpFdL15RCaKCjj81n88",
  "key15": "43CN36JytTR3bEuCs7bTRQrAx9SUkbcDp7XPJxZDVhN52qCBYiy2WbHJMfophWbwyv2aEjDWKyjJio4F7ApFgEB1",
  "key16": "2bQ6P13sp56NQynK9rhT8hSw3GKFSutZR62yS5ZYKR1RcKnYU4CAFRdwqViKsaM1juGnrApegPz6DVRV4T5Eun8v",
  "key17": "2dVX5vNsZ7wwgh8oVy3XZXjxYVGsTLyQoFnc5JRbpbYPqJao99zSEC4wCqWFSbAwug6akgFgYCU2qG3m8njx83XM",
  "key18": "4t1yLCPKX6w16Hkx8DRM3BiCApHF6hthY6LFzH2s51BXzNDui9FSEywpoGY6yMW72rvx24PXBaiKKD9HHUiE2LuD",
  "key19": "4o3dppfvURQYurjXg7tzt85BL2bDn14Fj56fdu5kwq4FGy9dNMtb8LzPsBiG4TfLSRiXzF8pfhWynzXhBzwzTbug",
  "key20": "6gL1tXCDYMbGLVR2EXfGo9JjNit3tGpF7AibwnvNG9arWrz9QizpPXkVzM2KjM8u1pRwzVAu2mwcnbkYFe5yRX2",
  "key21": "c3T2PhM4viBuw95SyMJRGB6UWXXYZKfihn93WoRtqRzG6Sd8npPDCjpG8Hs47M5pud8G61dpc1TYzsHg1nFUrSR",
  "key22": "43TesHNaqK7EvbxL7h48iaynaSqHTH3Nx488cFbj3EXakN97NJGKroN1ryZszbwMi5zPH8VFmoPazQuoqBUFXkqp",
  "key23": "5VpqjNtmYXTjgBzbzEZd93eFo8H9Grr7LEAEVyArScTzv3koPBycN9yCdxSCcWNLcvAmgWMiy2GZDRVtVkuZB6xq",
  "key24": "3PBUtdU6Nfmua5in239LYvXTyC3TQhQ6HKmDXa8eBv6NErP4EWQnUA8PFh2PNYdEQHRkUySrMsrHuHezRer7xiqR",
  "key25": "wKrH7aFvnRR119Y3JZDif638Ur27piq81sM5TZWHkCUQh5AkRGVeu4EegS4EaL63u2xzdkyS9ew5ohAmuEDMJrG",
  "key26": "5KsWLFRsEX44PYE4rDH5ZbgKvvCABcHwbmypWh6sQpy1NPkB7ymPzMUWEtqkQyyQLuWrwEkWT1hdisjxFRbHoKND",
  "key27": "3mWPWCSuAVp6YvgHYXKpBevy361AztiRA2pLy1Z9YZ3tQaCbbmyL7RzoRWwKEG4f1Gs8f1srWaWNHUK3ibDKfm5C",
  "key28": "4R6Z8W3mxuuEnca1NhVVuGp5au1t3e9SSHi4q15GR4h8gQcGUJRktjNeGmj9G2J3PzEY7WdXcSbpMvkF8y3JgbHd"
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
