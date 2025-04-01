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
    "5ABBVXMjpMxnJuRcHA3bSN6ciUd3BmP3cug3iRWnncbybruV22ZEVsrdvc78Scv9QnsooWfuJyb8FmcQZYzWwDcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFjeGLYb9FZNCkwWgHZJqNmKd8B1174Wx4yr3ryXyVsQfrGfsFjkZhUjDc2Jh62mn5whfj6Y4Tijep6RQfSPj2c",
  "key1": "2rVaN5Fe1CKSjic7wqny2Y6gFg4okhw7VkJK1uAxGjZqSuCNpVM5T384bEvD8BmSULoqwr8TKdgGEp2dF23ugFRG",
  "key2": "3VUJeKBq7LzrhnGitgY6fkZoR2H8Jkpe95cFvhfnVzt6F8UvfYgT2tJiNu7SAvnU3dmwcZwzfR857uZPFCXzef2D",
  "key3": "wFdAQxoVdM7x1vabAkTWNTELAHzzGowambLvqcuMLVDyLFhBaGGztC99gB6u7pLuGTQwDnieTeveYvP92bSrnvM",
  "key4": "5wboNerjChozaC4hK9x2wfcHPPBgqjEcBH2aFEDPXcv1M2wytTG9fkBiZrZREoqibyWxwTEMmbyjXzVVVAhCrwgo",
  "key5": "4YdF1KgHGnS1431cYZxoCeqrBk4V5pCT1HEqCgrKdGqPdSpytoXDKihmaDPUtwbVDCXjaQtnKybANeEi36nWQkut",
  "key6": "2hgwHTetb6fCAW4p4Bprvk4yuQYr9nmP63tGSkbJw6xCwQddi4qXoQJHpoQxVM5jL2HPbkYyWtgZJG6bykpb1XrY",
  "key7": "dZJ5PcoyVpThVtsjojK72X2fR9otbbQKEAiPttz6WmodV7JH6MUGSbbQdGTSNVsfiVvPHs8keS4rav999o2Tv3R",
  "key8": "2Pg11qe55eJrsQXeVy5kc2VwEa7goU5FUjAwHJQnsaHuiJa55fk3jh6X7m8vGSpzsZBp4WiKfkf4XAwyCKt2t83s",
  "key9": "59WTxukNSss21Wu7cahrNcm82uuUJuPehBdSoHsDHJFzzckGAJBt3RoyrkP6hBETjvfYjtSwxSDPWJGmQZZoCNGB",
  "key10": "fPaskWoRQjn3eguYmjgFYre6mEww7PvsfDGKirzppGgarGxqgWU6XiuYFvEEKjt9p4pQBQQ1mZRuK3HTD67cCAx",
  "key11": "5hnEavWK3Kx3pZ9tRYKWwckF74vRovzXaXubUKfhpBJo6djW2vvTtn1KZwKRzBxfgc5TH7RUZAiFJ3QhWLDw8d8g",
  "key12": "2EXjqkmTjnz4SMhCpJHizv8ramiZEBHEgSYNyAWUYjrmSWPDJiiB6GSrkP9iU6tMK32pX1ShaF4P9kRrawe7d3QR",
  "key13": "5DNe5RhF3JSgwQ3mjwWp1jBAqEJMaPiujFp2J3rMXmwTiPRqfvEkokVWt2UYe3oSq7HsrQYoKSyKmU5628rzLdYG",
  "key14": "3vFZUkZmMx1sEBPJZRywQZ1DkQuBFEQfQZiujnoo9ZUL141tEWRKYnkgRuaVYw6CRCoacbPoLvuy3VFXAXrafaa",
  "key15": "yzri2u3eWp9HVRLCY6dF8suzBGw7ZpNJz8YeyUYXMBjuQyi9iCqEiNSvH4hh7DCznpr4HeR8o6515ZjYXKW7AuY",
  "key16": "3kHvvhrAuKcc5ZiWBG2qZsPfgoBeh6JwK3qCYbWkZwDwwtAKjDwrvie4RjrGn9qGBYkp5YWhs78yan6FrT7WRS1A",
  "key17": "4x5odp4Nb2FgWJQQ21idwuGyQz9c6KXZrtHLHCsfzbt9ioZZw39npSB5EUTpqHCjktjWdXob2N7JKJyZBbAW5qXV",
  "key18": "4duSxG8BwTHiKXUCxGFbLMmEugoKegGZtAPvBwzDwetX8ScK2xQD9jpuBPsKURuVPbFHYmX8vSro6EnyWwbHW4Xy",
  "key19": "61cNATqr96sRzFhuARtTFA2ZW66z2rpbUgDRW7z2gd3VaCfDFMsuFvpLcZrBwcsX2VEdUu19hfHAP33wqaN3UogK",
  "key20": "5VrDUm8fNvYaPjDahfG5yHfozUYNDLiDgsbzyESpiDWGoGimUZqDhPPuW4RYvqBDnyDrbhit3qJAjagJHzyGZBSc",
  "key21": "Hdcetx744qRZ2dVfX7GyVAMQXxyTmkrL3ezeSqZYUe5zee1qwHnVow73etSYRtxFqNTH6iv9EbSpekWMvVFMqmP",
  "key22": "4i3vY7HLSPjJmygxV5qZZYrA3eyN7rgLDcFtz6CadfKHjjePXkyBEN4VqDpS6v5BLNoF8Gy4qW9ZiHt3qg7VwGsp",
  "key23": "3BuRg4mE7wgaKRjUfcaqsPpRu6y4w251TYcDSqL9to5KYx5wkyQaQYCfmBn3xo6nYLNAgqZuqT3zCPfbdrRtjhrb",
  "key24": "2zvWtZC1Bgu7onNFM697jqbRyuDKmezjxGJwQxuhrZmAakQ8HQ4ZSAaSQKLHSqG6GacXJcQkkd4poG9yUcURyqMk",
  "key25": "5m6u79qarLmisquWJh8UNqCR8WznGgNcPrpT3NeLMwRfr2zAnFTFqBCkGKfcS3LfrK2kn7TherqjPDj9rCSr5UmG",
  "key26": "XN2SemkhoPzvd2yAEeVpnqSELyEGRTHZDrRUjS1ovSXYtBGaAwDUPadfSLH1vXz4TCRbc1SyD2HxzYZ65soYeG5",
  "key27": "SXmLSsjKSPGZDAeMmWua5PkrEJ9DLc7mFCa4eUcu39F657JN79apYdS4uY4ftpGNxrvxoCYkQC4cKAw12Kyj8P1",
  "key28": "5FvJZDHHLwGGJ6Mbor13w3JEVhWFfBT2nvVUfSYyqjSdLq9JYZnNA8dXbkckoYyTpBPrvL5QkmhfDdnUTQNAKRVM",
  "key29": "3BqJimWk7FYFDtHT3LxChQ3SxBtASDEJTG5boyotN5mSWyXQYT3VccbVsaPYXRat2SBrroBC3YYp1hCuoAzbvSu4",
  "key30": "3nhqcK6CpxDdmHr8bcdKuDz6PzTfqCyZAWxfVvCtqBDqmKQjh8ifbpHMSG9NxF9uhSRQFt4dUx9GVPXyxHPE3aHA",
  "key31": "3pBYA2TLEv9mX9hTCyyzCtHkLCRzHHyPKn1WJbe567ft2CgUjNm7FCmTyiTYKfwoSY1EnTRWp49zp1iuHupWnrCr",
  "key32": "28QFv21BMkZxz1UXpVffzBQxvfY7CFzLpvBAyUqkGTr16xACsXXuvCjxGXPRZoww6QskRJUgEch7onb23vtLwmrH",
  "key33": "4qceEzkCDpJuKHDdmMLWM5nhGBKLb4G5KtA9h22wwkLeXt4xWmcMmnbzvPJ2cpzqcE49s1utVKCPhwWnaKHwhkJs",
  "key34": "2Pya6kGXEMoqjvauMCH9tgVSGiVnUxqtTvvfFdWCW48FpLLwgLiETuy8GRQuHMMyPXx5SAUi2dy2ohuFoXkZQ5Ax",
  "key35": "4iRbpvQ7Tt8L3h55wc7hnxYvL587y85j1mntnc8KSt49owgpQhTHeKwYYMsSmjiTYvh21qhcMG4HYZv5uFxvDBEz",
  "key36": "yUhfPR8UUzZeAMJk7nxaoGCAgPTiQYfwLng1EwN5DzQvbVJ4s5FS8ztTrbPnXPkFnrpCCc1FPLMpYYtWqCcgF54",
  "key37": "58Jgr9irHtRvD2xWqjk258if1CgTZ9YXXjgW9enHyMwxgnpa8Nzdu31NMBW6BTEguebx6G4iLaL4kecvR1R6afg1",
  "key38": "cwfvbi5akUuRtU2uMoD75nHvmsSBfjRqWyJZr9cqbCemgLM2nP4a5bT7frMLTk8FABJ6Xo5FWs8UnSGoPK47p1e",
  "key39": "61ACkCkZZrush6Egi1U9kXA7FzEAoLkSbJYM2jN6v7gKmaMSVWgWXKSZ69HsawN7K5eNWnL4JietZFoe6PSyVSad",
  "key40": "3EZvq5ZqRDkEeZKXoSqJXAYmee9h7uR3dHmuzu1GEcLSRp4ZtVu2BudRCR8WyqiJRQnPZBknXJX6b49fRjvTx2ZJ",
  "key41": "2jBWBQ5nSWSMhZCtPZamNLe1AgPkRrjarG1CvkDLkGnBQVsaVPQ334ztirhhGTZSLMGP1zAxYuDC9hG4ztcSuDuG",
  "key42": "4tAoG96N3GfcwCTwqk54VCm6SEmwcfAyAsNdyKrEFVY89v5FyHtbchoiUvApwzQ3VC6YekzM7LsmtKGmR3XViyNc",
  "key43": "SsSsNEofs1n8ykVtem3ZadBKDAx64mGKVe8atAGkzUHZfseHvnVDpvvgovBCAE9H2MzvcnxVF2MwbVArMe11S3k",
  "key44": "5Z2mQA3vAje9ifiYxJJAqLxKGg2AFWerogf7tsQWE7QSruGDKRSGJRX2mtSPhMSXTv3uQw2YU3opuje47oZ3R8n4",
  "key45": "2ZssQHQJteySrfsogJNhLdEtfi5xAecBS5gnDk97TX7MfKWKcVToPyHLPSgca5qDJFYFT7XYHtrepKkXDcgRp17S",
  "key46": "2QWRHi1Fv4sRKxDQCCzLk3yyjtgk14Qw6K2k7cTkiAUoLHfpQcQmEaQc2Zm1CxLKfDNPnY2SjqT3qusNMNZoqvc6",
  "key47": "2io3zCu2oeDRde7ozZCRqEBQeaz9bMV3BhYtRm9SqXxyRLu2mrBuaQWjmx2SCgtyeyoKU42LsJ9wSRMHRpv1anSf",
  "key48": "2b8cvxiGfDFNHJX7BadKdkTaw7YtvGEpSm2cUQAZpsviXgMJD5oZ49HyMKc4dthBKGxznvGNkVegYGp1Xhp8GkxB",
  "key49": "4vXBmcqnayaizUYDJJnuYRJwC9QiS6pXxTwDMJKGNoLVkXjw4ccgCDbHxsoo8SHQ8u44XZ1kUxsiZYaah1YKVtdd"
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
