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
    "C6G57dy47voFmXbyNnjM4DaVPSmBf3qXuTKB8dfWqtDF2qadKn6o89mwXueEaySDFdVRe2QcJb9MgEHBZrjvY78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yvg1iW9xL8HeUVae4UBX4NxBKcnGorCEg3eYJz5RzxrKFDp8aj5qYdPqwgKaWqgMMAZ17eTumRHfPaaovnt8zAm",
  "key1": "4sPCEenE7ACG9JoWLum5YhN7jAWLHHZnvfuL8HX2pj8Gzo5gWnUQK7urx3fqq63v9i9t1r6XBpSk8xSKqG4jXRKD",
  "key2": "3V9GPxQQHaLqUowNVfb2VhjTqQY1b6tbnxp7gpMybs2jYfiBVHjii7tCQXtYiFj8tpxeL5zGzmP4fqHrHCX3EnYw",
  "key3": "4VdBHq4TLKsLZ42RKAhnzzzNkzqfaQj6feHZKxTEjV4KP1mnRHjsHxFTaRfoJecvDCr9VNkWFUsD1LptzSXVGj3T",
  "key4": "45reTa1iG3gMFiFrQ2621q5y96rT8ziAHQwrLrr7e2GEgiVG2KVzMRuSJxT5YeAVsRQ8jMyDs3SB6hPRZqpm3STM",
  "key5": "5g5iKikyGw7BArXuPYfYk4UJrCQeSqLchaEVH3DUiPncM6qqSWfjf15YPx8jwm5M85Q1uqi7156dNJfn8yiNdzNj",
  "key6": "5UdnApbLQT41HWwwjsjjXXjz8g8ajusjEdDp3Fu596iPeHS7jRknrtV6vb1MNWWJsJ9yTpodwkqSvdtfJ32Zg6GQ",
  "key7": "NhxK2RQdtY5AJAhcw9umpzcMg16HiLGAZ5iVcFT9jNFvrcU9hFEVURTmsLFSMmRyW8Cp9Ux1NGTWRygRumQ3UtR",
  "key8": "5MUoeXCCB3rpun2bnknCXp327ton4NHjZb8YrdbfcKx3jA1YtssskBTfsSgQzj9GFRecxX5Ktrq7tQft9YJZa4SG",
  "key9": "5BF5KFDtAfkVeUBMKJrVrPiRFck15Zh3bhMYC8mXxZrtNd6PmH8snrhoJwKyg1QAbXibdXB7Toww1tpY4bNAumRs",
  "key10": "3AFfE8KcSExW8byoqnoLAuccQUkjHkp9XDMswZH48KDrthdhPrp7vAGPHSWbmmJss21MKnXU61xGeUAAmWzrM4Gg",
  "key11": "5an5icwpXAQBd5eLJ6ehFrLfagVtJRvw4axAgo1BDo1Xz9r3YaZPBuaneHwKNJk9PuQi422CM4muQeAzSW7UfYNq",
  "key12": "4pMEY7rVDVG2fFWbL8UwFPGk85yTf6U45PJZuHpp3WHeQcejuqpFwgEh4Sm3rU67KpkSW6Y9Q37FQiVekUq1DsDp",
  "key13": "4xYHsKHADBsmDaKsdtpqyVLYSheV94Gn1dxdDTY3JXDerX24Wm3KiUthvrnHP91qk6kkqV888Lftn2XXyEG8cn4H",
  "key14": "3fTABW7DpqunXP3DupsgWbR4VNQUcn64APXTjUwxNrS5xTJeTUp4Bpdxit2Ts1nopd6xGLQsYTSfBjSpYsuc6jhR",
  "key15": "5dJDb3CuKjT4ykuHvn4ecB3BBuFFGoW8JxAhGuWGKWqoqm9kpMtr4BYBFEfwoom7CEcarfcWy3mEo7t8V4uNaYgg",
  "key16": "5CGPvVPqHfXBvCWLxLCorRuuQLpAZ7f1VjvbJsCtTwNcNgGQMNyVpocNU8jdpfj8YdPrfDMpEUQLL84G4EDfGDC1",
  "key17": "4bh1LLKNXcE3zNhRUtqwc9j3kKrhCnNSYnHZHPF7FYqBEMadhL9P5dwmDX4RjP6xeBxTno472jyS6iTwYv4Kcyub",
  "key18": "2yX7S5mhGQ2frWm5y5iA81NkHQWTkZZRaqdBzQkKAQ3Bpxmtf7qrKVYuVo1afTzceUV8PFNdhaShKJj4nEoh1wxX",
  "key19": "5YbcwjkK5mSfctoFRXxUxdbdS73YcB76qvaud59CFzMNcUcC6kCAExes5Hd1y6qg6HbCqqPVxhiP9CGXKGAQvrA6",
  "key20": "2yB864VotDVJzNrA5RZ93JYytqcJhafNNXLXyt5pP65S564jNrPawgAAnUjPehg1UAJXNcjyqQrAzZhAFvUYoxpQ",
  "key21": "5okBzwbz3z4qjEx8isEbhPXbbe8b7gTnki9Y2RLto9AU8oXxtUtHRsbwRgmmfBSFkTua61SbR2Fme7MYh5y1nEzH",
  "key22": "2EzyK4vudU2KiKBfV4BCpZSyk9cUgnvDUHzGZRdUMjV7pDJTH3BMVZf1owLgf6Ubt8pzRY7gZ4NK7k79TmZUrTRs",
  "key23": "2rxAcsLJDUSJuVEVfx7DH7aGWVnKcnUsMU6Vc8LNwVnWoCjAKRBSx1DHj3pzkAMfFC97Ya1h672jjvpsgKQbdVUj",
  "key24": "3KMzsgxuvuztJ9vite81Wc7wXboXzG9DznVactgCjudejidui6U4RMzFrY5rbaf8hm3zUs7VDQA5fQwxvatP6XsN",
  "key25": "5XT9tFroYkaZdGsFZU4LgNpS2H3Px5S3ADJchHoBitwTqYY2vhjki1PxeMhb6NPP9cbmWJMNRif1C1GcV3d27Gdv",
  "key26": "2zwmamphwc5SfStJNb2qirei7BPDo24n3HDWMWL72ZWNhij8XTPnvuMtZgv7WD81rkZ4GMJkwfpby6XMcJJ14SFc",
  "key27": "4gGbqTf6mwrBfKdwM6LSg7z4rByN8hVGvktBchu4yx5A8pRNcChLioYqystXWJcMfoZVpNNUgwBHyBgPYsU2gddr",
  "key28": "2rNSoj8vit2vp7upLnP98st9MU7TJVYxJW2cQVWrpRVi8K5f159MmtpEMySpFKd2TXCoMKGDbqeDcSDcJG7135PY",
  "key29": "3WatM49gv3VJ5KTwpDyF1vwNeRJZqs82sGpgZ258H2KrDyP8nyynRsJYXmmBBkMssDxH2kYtDTVENroHH9oiozt8",
  "key30": "6963JP1J7yXHJsV3ZkCvZtj3GTDeDf3NGRRT9upzYZDVvbKpNQP765MBYvuKhemEYhYoYwJ7rgmv9udHYnD8xsp",
  "key31": "2WsLVMHVFne1gUnFogXutfFjspWYYEwV3hdbaCD2oLDMKkRmCGYv7sZv1iLFjFRzhrWawhscBKSoYFaMbYQA3x7U",
  "key32": "3Q7x6meUbYQGD79Aw8wAXjpMwezhV15eJwJ7KE9kNfGeGiVw8rPCZ6BK1JjZqmFtt7MjJwPvQzNjuLDS94aM8xQU",
  "key33": "4stvztY8oHHTzNo4QbPrAT6XTVwiLCZZy382HGFQN1gjjgT3xdbPeN7aTJkdyhvoVGx6NFzASqrg2TUguNr1n9qk",
  "key34": "2QSVvstC1JzLtzkUmMYGeumjtBRUj7hUHeaUDt8Ztn9Vp8Sv1FjvpDKf733FjAqLDHx2Kt7uwegPSBgVyUwM2wYe"
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
