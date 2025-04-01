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
    "2XcfsKCXDQHJyN1uEB7wc9MGYzNFEWmkYtgobiH9qzaPcgECtKrqnznP8b7266ZwGn218tLsfD9cLNoMA9LHmANF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPkvZeF9jAgp8sWv5dDoP7xfDF7Za6RfP9BdSpRe9prMVKj7WvgADYdGtM8pq67T1dd2j23jJUVpRH2Q6hPYidv",
  "key1": "2SJKGXsWdqfHqR9pNz69LJjXBLuE4c764mbQRUNGtMybGnLs4DAmnFkNuQsRYTv7ErkE811zshmnVtcAp86DbWTU",
  "key2": "2q1CtsK6DcG5wCCqkA5gBsEcrNDKD4h15HPRjmJdhPLQWrbX4fgDbSJ8x7FyR4GrJgCa6JPExLYfSvpESZw5UA1o",
  "key3": "4pEbtrJQsRR4c1W2mGCa5enmhnGeKGWCuY2yXjm6SDLdPRK6RjfNA9Vcugqhc8cqGFKgvxVmGxZX7QDZ45SJ3MfY",
  "key4": "XQJqjdGXukCumEZ2UAGGN8Gx1hxLudgDPXfUQEzVN476qURQtD9kD7Pb6AgGK8QMKRm6UMQaxGSeBa6jdUv36CE",
  "key5": "4QuqzuvTzY8Gnhw1abrPyHWCJPg45bT3qyKCBA4ELeKJpMKuYEwuhVzLpKhPkTZyPnP76fjvCi9xjMduvwV4ZHwv",
  "key6": "Ue3KZtBnXhR4ihQx85tuxgiMKa25qz3Gbj3iVs1R6E3tYwm2hpPG3Ghm1h1AxBmsfvcK5s4pDahcnd9vY3M6xfR",
  "key7": "5yQxWZkPuuDTUpi7o2v5mLnxkrD7cuYPBL5R1mNeonRrYWHoq2ucLPHeiSLBxWxd6PzLw2NDThmqH5UD2BTtURRf",
  "key8": "65vJEdKNNzZcKFkptybTWUaEWu8uT8jYJqtQzsKE1q7hPJWdckvt6RJi1cK248BjSDuz4D6VaXiiqxQdpP4rD9iN",
  "key9": "Xq91bDgUBxnAdiUWkt1mdVYnoen95dPrcJEjEq91Zg9UoSqT4VdmpfJhPu9A2YocPDJYT3nSNCmduUrD8HF7ujR",
  "key10": "2fa4QY36x5EEY7wzMDjcr1jcnwTJjEbPT2sNhBzHurbkcKkqMLocCnns76surYWucNVRY3o4FvjcdpTMUXYrGqEg",
  "key11": "WRchV9sh2k5TETm8JZMqXqhEwnS4pkYA35pcYWD7RDMwobukfghUfZgugLkB8jPLzEzcyXQsBigSmbkUoFhfFUM",
  "key12": "5aQT7Pw3JQAxJ6CSVkdnMaah3Zo4uBXEJMCGAoU6hyqbq4P3Rdy9T22QGd7Mh8jG2sksRS2qjFyYstuPH8WNLL3E",
  "key13": "3CjtREg5W2rqhryNzvBESn6NkMz9BTL5SSLS6io6tcG9j1DpuDoVwqZ4SV8EwyKU4nsNzSaACL6CJbuPePZoDHPV",
  "key14": "jAhTWMvRZM72TNuNoRzr1X5pcSEmV8iHuezGdksUDs4A9PDQfLrDATpnrqkccDNJF1t6rXWhWHz47zH9tgA6P1L",
  "key15": "5RMU167anEiFPN2G1uExTs4dwxv8V7L8oBcWWZYfE9CBR925XASGxXuySvf3gt8fXj6DTwEsvg5agLjjG6wQFQsu",
  "key16": "5ZyPmExFtCsftEhf5NqFg2XnWLtFteg68sfCBgcP8LK6auMauHq7TtF72gFekcazotwbm2T95wwK4M4g9qo2ceNZ",
  "key17": "2aXoUppZ1o5mmDBg8c4noXkbokr6FPBBBUiTEhe5AGSEnk6w8PnvcYh835WHSTjYDe6i3v4L8KYUZVq9LsHCisf2",
  "key18": "4jsELAsKP5HoAuRRyoePjmFaHrGrb95AT71YnALz1LqYrqhrxbooPCrAW1W2oHyN5QZ2MWJ6pTkuZDXGqHhT7WSC",
  "key19": "hrjzw9k5RWEJVxegrGYAXGYqv4XL8GmtUfvrxoXXkfRZN8H4i8XWYY52CvhJ9KBdZGyVvmcHtiHu8jKAMcQ1d4n",
  "key20": "2P3SJgXNuDCiHyEBYW3zPaJkKHtLquzUGEd61HM8rA67oTLJ14mNLGbaKEQdGXCwgTRf7Y6LXU8LjBDkKavsrVWS",
  "key21": "2sMmUFFHNqTwTuoWXHAkTDFFN73cjQzrF5NK7SmysbDTKem3xuwbWJnyp4uYZDLEdYsAf3USib4w8mVEnk42uhFy",
  "key22": "2BFvhQS6XSLPDpnjo7RHEpxRG7S5eoQUiTFbwhJBqC3fPNG3VgVPLpSpim9qy6DrU7vsGx51jUbMNPAUUrKCsJKr",
  "key23": "58dp9xYUvP7PsS9QkpiEmD9nBhfBBVgK8r9PnhJiEwyb7oKLtTGTBqBzAAWrkTSMiYWBPQ2QfUabAUPpyowYXB9n",
  "key24": "3HR4UDaL82Z9rkVcnpXkEgitzxtnpqeGVNhRNbdFc1UAuZFtHym934tL1EGmvVT7Wr5ucVHgRBArJneDHD2p6t3L"
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
