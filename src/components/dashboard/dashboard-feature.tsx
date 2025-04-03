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
    "5P97uFRoHaTPF5R4ZmZrMUC6uG4mFXm6uzeWNqA2w2Npiu3EmfEPoYx6TDbT3S1kNVvxdyLBA3fxY1w1NSstwyHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ra8H4QTmkeoR2KNeseujNGdiBgvAutyqJxeFGf46hJRYTuUsHPsFAGbSbCeo1FS3qMjT76XuJjStBHE3NUGGuDY",
  "key1": "3s6JHJLNC6pV2inCvxfqjWo6nm3Z1ujZDBaJPLY6CN3mM2JETE7jL5T6V2AeBPr7ZxuFWG4d6yWiCMFs97NugpET",
  "key2": "2tvN9Cyc9iYnceV3UPBcUQEdDCd7L997t7deBaZe5amAiF7HWc8789UqANAPwFfymrXH4XUxGSTQCdt6aUGt5cHT",
  "key3": "5GLXxFVX26xYLvDjXVjiWRdoyGCdZddVH1miudeMc1ttPzog5nSCESpisGCATTBZ7THTdZXL5bs3JDDTYjtzW8sx",
  "key4": "pzcB3WPpLprH5LCQdGR2FvRcrWHvz7NhkiCmegaDtisyqj5HnvqrDRBEKXarPkPbKFG4WG3XqREKMZ19DPSwiAd",
  "key5": "DPMsspQXcdfUUVwwFFRKBzziDtNnvVryqspNLY79icdNpmQLb8yBxpWeM2K1hMw493xMRFPXr9Nuz1iqQ9Ffb1i",
  "key6": "2eM8i9aVvLpfhKR2ASHPtVJMevXHfpRWtgTqDwNRNDb8UzLqs1QzQZcJvf5osTZpPyoZCY4C5m1faYF3HL36CXuK",
  "key7": "2XDCKzPvCP5rH1f5MDF49tkErWdK2C9EL9xzwrfR1GX4fDUnkBkJtziYw6qeUXMfadAHXWMRBo8DSeZ3qei9X18n",
  "key8": "5qXAFQLZSAj6Vk6RByynXw87t8kbpFoXCm8t1hxGoQDQY7nu4T8iZXnGbRfN3wnWqUsh1aEs3ahoLvYJ4dbDpwuk",
  "key9": "3iVy21WdFPiNYBmfPMzM2CMzEF6Xjf9kCUWtcfqYeo19B9jBvjwSgg4XCaVUCRG77E17LspVjia4Ji9nVzpZuRPx",
  "key10": "2a8pu9bFAnmMmHn4JLbpcTaQkV19MQBSPWZzGwygkpneK3iNTG5TNQjQCD7sMDPqBKRKvpiiHP5gQEGHY7emrMLp",
  "key11": "YtnLnxmkdrVyTDoAuTXqLxnCXNsDd7Vc9Jpn6KJopWbB45GPen7qAmmzvocZw54vX7sjixkZLayGNsa2VNSWmh3",
  "key12": "65DbmyXuRcqzGbcqGrLjM86ZkGKUCebKdQy8oFNoHh7g3JR4vntFsLxcBsnmpV5JAtQXb7WgPb1BuiaoFHV71M6A",
  "key13": "4CTmvbBeGQtgqdEPSx1D3K5mxdTRebo3yd49eV1L6s8eH5TVKLUBwp9zufMVACQpRLCwZPoWeo7VVmD15UuCNbeD",
  "key14": "3MmSchg9jhCvD9dguCF1HpaanVxJaS4vkXZKqteKGUtL9ajbmbLnaD3fGJ7sUx2NUSSvJ4SeYRgbpKr52QcQFBVk",
  "key15": "4qBWp1K552Jpnt8KzdaYVZgKxdsrsj388bwLkMoc6AqUaSfqSBz1yUDJy4JEPPU22vhkMDrX1oktrPMdgEQVDUUX",
  "key16": "3N5T28Be6jV9Qd83ePS9HFdHBHghfephpuAFPVVqzUb3uXp72dbQWip9aTYBYtVFKd8m4EzuzKrQ1AfpX1Vo9Ny3",
  "key17": "4hiKtRpM8zYm5bMUdWeXsxSfdiuMMe1zqmsUNmn2sei6xWSysTHXNtP1iYWeV46ZPnoL5wvkEhfC52bMTSsjFuvQ",
  "key18": "4W8AxY1hu8Lh95ZZ4UpTRjjihfnAHDVoMUGhBWC59GQhyroF4icpLAaJ7DqDDHvLNGpz9ZGATNPV1FUsaBVnBrnz",
  "key19": "4wMe2sMELLqPK2vhE14WoSjJiWmULn2ZVf7EwGreTcDZhXnNQksGSskMMugTkf5LGFnpKx6qMmuTcPE9j8qQaP1c",
  "key20": "oCvexe9h1ULhpH63xedWPYi2zXKDz3CfziqDyZem5pbeWnNuhrAi31zCD2oT3EqQfFtbZfX1hgwbWdgr5xSgkRF",
  "key21": "522XcYkMv6CDguRNr9qgjMdumzJ3y9AojktJToVKhTs64uvrDgJkScSWw8bSGDVefz6mUKJRd18E4PMXkXbsBjmo",
  "key22": "349p8iUD3f7VCF8FyFwwsBSjrU2smSCsN3QRjxGwzocfNXpTvJceN6adsPsXoXoDkYEjtwKavvXspzXpAx7tasrZ",
  "key23": "2AgPn8yT6UnBqLLyS737Z5dtiDNKc9L2gtvJBJcWoL4aPR3yWV5ujF9PnQYjaeGvUsdWfUV62ukxz48Pug2Ep4Z6",
  "key24": "3ZyLxjuXYu8SmijgsESaAH1nTCCF76qjQiZPCE2JyUnAZV3b9HakEK8gdeDVbiQ11KTbgjAkRwctun33Dw292i7D",
  "key25": "5X6y6juwTiqKZFyGb65s2hwatvsu39WFTRsJyDyFVxvJwkpp5r5nt3cuyB9j8vv2jb3ya9Ad6Xg4TrpiERQg1Fc9",
  "key26": "9pmo9f3v2FkCQL5FS39cVtouwp8WXexvqycwjtEgKHCL7CBSgNiUAW1gcdqvpYnvaZ4Z4K3ThZuwiMUR9iNjmhu",
  "key27": "2mEH7y4MSoUsrP9vaicVBAgu4ZYvMfLGBxUDZ1shHHBaMraKk4pTgdPsf8qwCKhkCxJsEwxCKrFAMTjDXUZvgruX",
  "key28": "4do4DcwZDgaWHpY5zKdhFDXcGnPfWZMxMBmfeVj166QNyT3hdBnCjNi4ehLNAqsXGWMb9vyKRi7cZSAk5wMALYNv",
  "key29": "32PYqEG4iayKySKxTnUcZ3L6VzZWS8ibh8t1h5c6o6Vwxr6EJUjBUQT9ZXcuC8TacYZMzhiqDEpzjuDdsAm9HLgM",
  "key30": "78j4TBzrqEpkKgN9HKMqsuxgGYdvGJPC1sZhQEJrRRUAtu1QbU3CaoX5PCivzFo1q1eu5BnMRaQMSKQrC2S6t1o",
  "key31": "3UoTv9dc3xnmxTreULHWACB5nQ918h9fwZnCxtn39CMPYAjbViBRijca1p4dU5VTF4hUMTs31zCWHL4jSm6d2Psy",
  "key32": "2hQxPUAYh7jK9NHSi6GDHjfgqjAJA833NwekeXacyhQFsdW7SyekfxKQac3wL9xEMfu1PP53wmnQrXuDyuRV5TmW",
  "key33": "3hM5VnWnP6vCiCvhjYUPa9EEoo1Htkbp7EwLteanLEB1WyPsHCGQeEobfyqAK2tsbVEnxTXt7UUGqeM1tX4kdUgF",
  "key34": "4HJYTPHGjTphRoqf544kVPmnQSWx36SMyyZ1h2eaSUvFqfsceLXHjnnJFHyKWsAU33BRSUpnGy7ZnVVvC72fzQME"
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
