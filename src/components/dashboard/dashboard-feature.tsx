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
    "5fQcjwSqTpTiG749SmV8uAoQ28YTpFwZh6J4ULFqv9cSRBrUbMSB4toHEtXjKEzwuBfYUZ896wm2mpSthSHVqxmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TdeFV81FveFD6TwaaYctUuyVK1piYi5yVZ8hNSsg1rKRp89rtRknREJDBUgDGaZBcPmUCYAbCnDh1KRLBgHGYBd",
  "key1": "UwFsNzokXTHNq1BtCSfPWuSNGHt3rPoH5NrrrGHCxhw7xAAWHG68D8pFRjc3bm5Pa2eoip1X6ua8Lywxk3U2AKE",
  "key2": "yVx7Cq6zKZNXk9wscZePaYCAe7BipKUmzgV6Z2GdkioYWQtPH1FfKfmgz46Z6YJsHrc8ZgT7JctrKQWAasvBQKC",
  "key3": "2QqJG2czwSzYm4BB62EqTmDUvtDM1qhpcLD8HmLJEoErEjFisvbMeeB91cHcwbynysproeQM99qDByBPdKmA1khD",
  "key4": "38eBVi7MoPfs3qyv5pfUdty8n1p5nFeei7sd9Y3SyYmazGLughZwzrQKbBPR8BAef2Ai1sVqDnneNh8fgWsQhcqn",
  "key5": "2YZ2sxgzVifeH7uowNSaPDkET6bZfNMLW8RwHub15FmbmEt6ddYJnXv6VpoZ8aXFTZGtPrdfTMc52M64SFiChnt8",
  "key6": "3WbpbjnsUCQ8pUwGeLRD3iSPPLj6tMGPNPsnpjBGz4bZ39SVAzF8ig6uYyE2a5oHQn3c8QL5TNeYpAFNS2HUAeqK",
  "key7": "WX4saw3KbfxcDVmTUebXKGqCUQiTHwMbPc54yySMot5uY6d7gzB8Zp3HmvyuQUSzetsRoxsabtar2fe1yRDs1Qp",
  "key8": "4neWGinDGnPYpfQD38mTfAWWMRFwBcneYiDdZ3Wa1MzwRWifQZWqPK6QijFitwJABBatUxowomYouXUg79HZSXUp",
  "key9": "3qvB4tQb1u1ypmE3EXh4m4LQH4km5m2Z5JVy7wuc5EhHx5o6vqHgYdZVQRHqnTFdoisTDUz2rMcDCLqR8VhKndDT",
  "key10": "55Ny7jESsRDAZDmuwoScmhauicfGujfw6ayLqsmbzht2oi7AQYy3xyW3K1VgcsYUaRWJSpxBXTzj5usrQRPmtq2E",
  "key11": "46yKfpHgDFQXzFANnqVoBZrJnLimuyqnhDwjMFCubKwMoYfFJdZEXoa79FsFjGkZBWjNrVyhgd6nKR9vcpJj53D8",
  "key12": "EDBqwa1jY8Y5nBsBtsSm9xPrRSHBi8K6zZ7ERqTWHEziLkQEK4tJta5EX2DtJqcNLyG4roxKSfQEUKZT1We4hXS",
  "key13": "4i13j8qDg11pnS7Lx1Bz6cf2U6PfYQTB29Y9cesAg4zSrMBPZ2SZA1cvEpErdemAYPvQF8Zs9ijFeaNGQPanvALn",
  "key14": "44TAx1UqJ714oXxiDtmNTKQR32B2Me3jKAzq9TeKo54dgGofNHDVLa1ZbcxiLfpTg8fwXGhJEzYzPGg1vSQ3NJ4k",
  "key15": "3VPsPgcNBYUihQVZsXtSNPXiyJS7fadgCKz7f1Y3tPPzpMr6vmq9VXPRKTuUs5NUCek1vsVF24Z5S5XVUGxDkiZC",
  "key16": "2xfusP8BkFZhStQ73vdJQhneZPhCuh6cygn7qWEi5eeU68qbcSG2Q8mdZA83D7aMsvQ3XjcnwTwKHzHmkrNoWum6",
  "key17": "2pW17qbjotYchYVH8xhDjcKrmYG1HMwW5pDxzxTBcEM7goB6AjQpV6BjWgj8e5KAwVn4Wffp4SkPSqQN5kSyq8yd",
  "key18": "4YrBjGkWrPheJGDWft9tgAVAjs5kyBKXJN1d1FsNUdhQcijfrC5EyxhT58VXvhrTLTeePqnii47Tc4EMGiMuKh2a",
  "key19": "3CQXRVY43KwArPBVoDnopYJrEzrXo5qhRK3fjA2wKEPdwFKBnP267XNZ7qF1vWuLUFnLBfnsBP1WuSSMZjDVExQX",
  "key20": "nHtZbZPM9rM5xURZnRCvX54P1U9RYag1WE7iUpkW9xyvRiqdh7P82FtGciKuePXsB6UoRW44bJFKAG4PTgG5jTE",
  "key21": "2DaUREejovcJgUKy8SGGsjeozn3v8L4ewAuZk1XbVeyrNJ74D9KdFko2pG3wWWoBgJEVi6Z4MWqrvxGdUuRbgm5",
  "key22": "28j3E2CbXzzwXa7cXBZUVtvv86WfyRGgqQbhP95b9TeXWtVDQpnur9Zja1sXxb7Abjsank36WyxGkSKJ6xDFVeEn",
  "key23": "4Hf1gZUTriyQuiEJScQix3kjxxXiAwzbEu9pdPWEC1zqZUrvkPTaRiKUpRN4HRA2McEPsSdfR37FmNuuaYQfgCdP",
  "key24": "3xUrrhWFpBzhX4XkfS5PtM3shu9xJsyJ8noHJm9G79JhAnhwTdVvLbAJGeuKtuEorvrdXEBJBzdsb9aX3vdRkTtS"
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
