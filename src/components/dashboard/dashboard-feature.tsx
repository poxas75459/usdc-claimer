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
    "5oYkjRsej5uF1NwBeSj7DjxZ1XTRUAQKSEUTPCGBBnhmduqLXsLKajvFqDbMyJVeUx4uk5BHBiZE6xPh3jvvU2jQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brvZJ2ug1aFDRHhwWvbmFdbEkEosdSVEATrp994y7dfcTFn1X9hvWuvcfCXJkehe2iNLByT8q2uh5kckQcujGzj",
  "key1": "2W41KKJM7DyVTBhcYQ6bZ3FoMxwGvB6aiHue2MZqU3GaJ9nVaPo3dTBZWChYXmfXjWnGA7sv3QfxYpzX3hAGKVFz",
  "key2": "2hzWdjuyGL6tLop44DnW3fgLR7TH7jjrAwUY3ZZR3shxRHQhLaQpS6PyEhSHNgfAf1vr9PQALPeJ8isnKfNJXnpU",
  "key3": "5X99gg2bd4SyXfnbJMYnLh8UGtDNAdBrwQjxYsV2GYb1VaaeaXBcbQ4Jx6fuHRrWqZrgQmFtxx9HNT1TM2Qikkot",
  "key4": "yE58QxHc6qMsp7iFSCgQrxtiqyqhzUj6UJc3ebFKKFDtpy6gfr4cPdTLZKnhRvwaT9mct7769XrEZVj9zD5oHve",
  "key5": "5eEkaJWxSWgtd5YizsHQxDmKVFRRhZtfmLmqzTm4MgmpUcwUPSUzm7yhqpN1ZoJT3Mh5NuchY4eEBiz1oxskFhDK",
  "key6": "47QvCNhQgc4bZrWfi9QzXdjrUeu2piuWseeY5fTZWWANNa2CJAP4iFQnFW86J2gtthMnku7FECFBvtmNiBTcWeWa",
  "key7": "5nVgfP5gfKpuZTwdhsQEWQazttT6L1Htv5Apw13Jf6tK3rYNLSqz6MWKhGqxywmuM7XsUNyVFNS646Gh1MZzF9Dh",
  "key8": "2389ewfKPPWN98yt37WeXR7KmkczVVKyqeXCDcjsVnzyKqux3jsdpFjBktzjvLSekcJVcRCf6e7HFE9hPbftMC8E",
  "key9": "5XXnKdN12SAH9y87kdzrepz8hPq2NiGtvDpbbhoX7MoVmThS8oEKcyPspr9AH8DvHiiobaVxzuPUxYVyj69YpQNM",
  "key10": "4GS3ufMVNtDHXGfLWfpGA6NjFUKFMgDgbumceZ8mpb6PCoNfyLToRVrDUuLreD4UVCKZnS8ay8DZusZvw7qy2SXS",
  "key11": "4LZM9AwJ1voFKZqWy5EWhbtgw2XYHJWH16xEPmpgvukj8NaJR9zjPGXzEze6FEEwX8rk2gFragGxaF8kYNY2TCup",
  "key12": "5eFhCxAMssDRc2wJx1zjpg1EXuyckJsF6My88eDsMMkkYQF4BH9FC2jHZjRK7G7wzc2JHXXczZpVusHqggYZkxeX",
  "key13": "r3ewD8AzFDMkDWvfyetqeRmUEzsHbnDoGsRaXf9TEwGrDEL3AXWtr4X4NGxELT2HJoeXmjURQacUSyMUVnsjEnz",
  "key14": "5ZBcMgk2dKoZPpd27FGuFL6fW1UgB1hzyE8c1iaQSH5G8TuQepMnNbUpiz7WiXrhzrDaTHj4fvKcuATGNkJhfDp9",
  "key15": "5NC4P42Pd2qjhBq3AdfiJV2t3T1ifVGHahtaPxJ9kqcDwVmQY4nd6ApuiuF8VGWtRrfeN9UFRggn1HkgbDtWagP9",
  "key16": "5SfwDBGi6tcvTLePxsxLF6dA7SA1qvreQH2ne3swuLiSGACMzAe2njwC8n9HMCa7yFE6FhZfTNVpZ24rSP7M7J49",
  "key17": "4Fwge9xpF6VZrw224dd8Y54BPaVfVsNMHzprFoRkwsQ7jNiMVujn37Qq4DJmivKrW5eedPSU7QSJeU2sFXyCD62s",
  "key18": "5Fi89ffwhTAUgjVyrvTnfz32XRgu4aMJWG7hNKtwJspxqzR5VkVdiL3bBk7QHgWJUniXQfWReQqakyFPLPMdKLpB",
  "key19": "2KJTmgV6B9T2Ejvrqd6ieFDdbUdmPZU83RSuemP5uq4VWbQNT7MRidjcNVKrA7vsMCZKHisnswtsWUaZHc1h2XKQ",
  "key20": "LnifgcGRRKFvkQj1EXEXBmZa6SH2DDVuP6kt3PmgeRJA6XWe6Mv9b1tATZPNKew7PcT9dsLL9giL7mTT6dwkcgx",
  "key21": "yS2jVA72C53WybsjqpdsLAU6eBYfRycyYs6kSwF7tTb3azKcCBm48n2PPGBaBVUTnFiBUeTxN4maSJg7seahhV8",
  "key22": "5eyUS7KzUbxGNV3xMHo7kLNBYh6ReG1p221JHPzoU24SA3Vzr4qaamyW3BBMBj5kqRUdaLNvZHpA9qjRR5JmJHVY",
  "key23": "46SFQrDUc1W28HUeNtakqxmbemU1wUjbJy9aybny6Dx5QaWSUvje6AwaaEWnHqewv5yYLb8DU7RwMedPUuNGzkfR",
  "key24": "66ZcgHUsi8axsudmhHwabLFmhPf2FgqT5iiymrGtrLcwHZtKCdARDPoCbCAYQ6ePHqSq1456B9f6a2nE9Y5zsk9b",
  "key25": "64SNVkQFSc12UcSGkCErmZXpvm67riKj3fVXTWbQkxegSAcDitArGnnUQ5mX3KBc9D2HHLz8GXyY2TMYNu8899kM",
  "key26": "4893Bno5EZPRGtjQ3CxTGpUvtRmtRyc3eh2gbnA737ZeLBR2NB5mbTFXWYt4thDcGKeGTfv86Abik3T4Ai24CKeT",
  "key27": "4RmKs1BdfdPPYre34GjB1PqfWJ7BJVTGuYKHZwfJ535rG1rUUmaGmLLfqyN6xKEk4ANTSW9dP1h4tACjLXDnpj4P",
  "key28": "2MbkbMi7mxizAnhBTgpMCAraQNqs3iUqUNadbYhQMgGFz3c24XpgR3udeKsUra1L2iuj1b6tSeKyTK7BJy7SgCqR"
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
