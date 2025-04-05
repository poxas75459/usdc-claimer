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
    "mtEYtY2APdtq9THzKdJUriG673vG2tNadmMjBirRv9EfZaJYGPJWvB5MA2nK1TZDqQi91gze6nvh32wHFHGSDbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQKudCwBhHeve82GA9sW8KAwstCeEp9zxizSjHDrY9W5ejPUDA3yfzUJ6cUJDqQR6r1WVaSkG3mvtDwH8fvC7BM",
  "key1": "2B1XUibT1awx5GCzYmefr7rowAYLFHiLcMeYua1b8p4yd94vAkYo1q9nyuTFcY5otK8a3pyGyWeVy1JuwV7AoAik",
  "key2": "3M5CyuiuCNcZVU4ZP1MYCBmddcFHkjF2vcQoEx3V1QdVGFjsLcbpPoaPn85dmQv5JNNBCDdMQRc57SVF7sRL4UXA",
  "key3": "4TtsjoxSySgGp4CF3nGjvoug9gjQ7MDkiitnYjKhRNComWfySKBs46BH4nXtPiDjk6HgNQhLbyScEMnfXJdgUjr7",
  "key4": "p2Uq8XR44CruiXrj12UTP4o9vZ7ZoiZdW6DcBDpsTSiJMxxWDfTo5yQw75mnDqbfnWpdvhzJZ9BQt6EeFtzvDer",
  "key5": "tMhcW4dS5i4b4H5Urvq7BddDcxwhWKCcaYrPTfxbGc8JGD7b1nHdJPiSogSfDeexpTiMvwtb1ZGuFCKddAR4JMV",
  "key6": "5rs58b1RdZNHSfzXcZj9bq59kMhJUQcpG6Lykphe6rVGTjHJmLfYU46ahVoqv4eD7cGoJa6687J7XmRitLoeeQR6",
  "key7": "2MbzcYYzMhd6ZnhbYNuthLfMtEyF5PwCxwm4utvXfeBX3ZPzdPPK5N4zZ8y7oPYn54Fe7wcnD9DxGWVmYcR1padn",
  "key8": "4AuAyV9SsbgjgKVguzsWBs9jn49wcAXg6S5jV9Trw5PR3FBNpRj85FdHJNs3yVCDFHHCh1Av4yetRTaLUveDswH5",
  "key9": "3dteNvsvccUHpmkCKZrkX3L2frDMG8kVrvmBKQhC8sQNbuFTmrFapA6CueYT5497XEC4hgMDbdMfe1hnX2SyJB6K",
  "key10": "56B8QXsPKwtqXPE4qf2LvvkxK668pN41WzFgGaa4vxGj5zChXRewBEKCGF2cPtiUDNJjEn4UVxVJtKYrpXvF52UG",
  "key11": "3AiCuj9inyyWQwBoDyLZRYXuT9PgaZy3edxQkZkCmg4qnPQi98riy7iYLRdpK7ASda7i9cfhX5Ye4MzTSNFsEGAK",
  "key12": "4aWFmLyJRjJ4nFLQDDh1UzWzYpesK8huCrfiQSTB4YZL14RtvpQZaBeQDqrmZNZPFMrVjodUDASncBvb4VFPYX6v",
  "key13": "w1EshV3iz2wN7ds2wb2miT1SweeHESoKPK8ki7sqrwh5axtatsNNMCetMmqg1TEFnrMHHdn8f73h8bqvN2Avnor",
  "key14": "NHhDXtrFLV34D6V1C8aLdhwSaz4GhwpaDAGGk23Hsop9r8q5wYyXWadrjnsTvYcYRUkDUZkEYBvLDZ3Zd9eRixD",
  "key15": "2kzGV99996TPMYqtzdiZGSRXCV7LrYbyGMbPwFHpXLVV5VYHFomQbpHCWr4XrGXFDGVKdSCszTHhLkb293AabWjm",
  "key16": "2A96JhiCtnJD4Cj3fzH9TPxWAbHFDdN4KJeYTb1DyTTgEGaPMzZDeswyASVQ2iW6C31RvvXVT2DGa68XXbgghdxU",
  "key17": "2BARfy5UiFQXh1GoLyFkBEh47uyGugArWSLjvdfsPyzpvGjEkFUYcWSMTyNvpJ66bPLquDRZNsaDhE1uaT3NbhgR",
  "key18": "2uA2ESuqovYixXBXt4t5qpXLdeZBz61oLfQ59LBnyvVLQd5cGXas3pCYUHxm17qYHJMRe6HCeKfmErcZ7kRfm2k5",
  "key19": "4gMpLuH2JAtoLopnvNXWrn1sKA49rAqDsgSmr7KeomGDLAS8Tt7HFT9XPDib7aUZxvXM7gEj9YLxhpZuLZYCu8V6",
  "key20": "Nh6nJFEsMyh6Fej6Y4RAiybbHvAt3SCXNp9w8gtVWWPabyAxmj9Ki5tNjjajB2sLFVnvAZ4sTWU4Gu6o6VSomYZ",
  "key21": "5MowjJFuhCPKLVjgGxrMeAiaERvyucx8ShgZgt1dWqRrdKGb1H5be4u3frhJNF1mnb8t8bQfac8ugZxAVBrS1gL7",
  "key22": "SG58qGn2spt6hv1Zx2pAsk2ondTVGK416E1WrYiJxYjX5ut7roesUFNJt5oD9MpqBe9u81HUUMeApkADg35yTir",
  "key23": "47eTTdGWyRaZBo3uyNuV7s6AaNmqEQcxPji8EK6brT3GYPhSrxKATsztQdPBx1GFukYYAQ4A3qQuVLbz4F7z5bus",
  "key24": "2A12W51AtVEp3kV3Fmdm3mzaM5G5AwuU7A3R6P183KE1SYDQNLi8XDw63Pv2wfibBKDTg8aYxTVV88ZZ4ZZHeCFo",
  "key25": "2igNBaNvvCj19QRz3x4qX3YqMyi97DfYDiF98ce7q7Yes6jxsNLUyHAS4QHfhqWzogby7B3NoPeu5NVSLMSc1itF",
  "key26": "5xuzRX2ZQ4jxvR4VkGrkTVbhYqTbXp1PGZqc4i7jrJjEsBWoD5nNCdkQav2DYkxENHgkEW1ihWrTNdLe7QvXvkfn",
  "key27": "sd4zpqeHPgcML9R5CbcJNHbHhBVQaRtcao8cSj84mmGjbjnNHBqW6oP1e17RKqnvZvsT61XyrWjHvaKhxzV6he7",
  "key28": "4CE1yKdQGqRPj2iqMF1rVXpZdueCunBT9VbWE2eZA1riXtXrsdvTqGcAkSKwR5fFVc5g2quJQc6KAfTqXY5oa9rU",
  "key29": "5RCh3mXs6mMcin8yhSHj4snULp9dtysThA8jkLLkGsCzoquYfnZAhHmrnY8A5GtGyw6AZtZb8z9waE9Pto5rNGgZ",
  "key30": "3S8EncDt6vB2Kk46paMwMyun9eavcEJr3mPyqAYxnV7AQL49T7dPhz8hKCN8r67MRnBx8dv5dz2A5BSxtPDR5n7M",
  "key31": "46rft1PqfXLuuYW9SadRz2MtPagkTkMZEgqpqbqB5uQFB4voRDz3Z4NiBrQatq5fzWP5WN7KJ5dwjs2DRwzfwzBk",
  "key32": "5tV5z5FP3KsnmByyWygJTgpXQZo1Mz53Jz1R1jCB1RZwghNodWdPcYV2Dq96xNPLwu6YXSJ3bTzsth36G1qQepC5",
  "key33": "3hYy1KhZaA2TpVCdtbU3cVf9GBw5SGTSyeeZxRQgN2aPGW6esopXKqssZ5mWitGDZ7pLYwePLUJEYV64im1vReAN",
  "key34": "3pBPgdmPPf3Es1AwPHfpZvoA31TfjSRpZD9a6N1PBb54EpAKmXwvyf5iGcxkjGmru12czWczyysw6oAZRaET2p9W",
  "key35": "hejXSdRAgwZ1upEoQpJThkgVhmM1Mt83DB3nVZBn9FAknHwKcNZtCpZSzdbu5nauXZQZJUcpPgd8bmkRwcYoyYk"
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
