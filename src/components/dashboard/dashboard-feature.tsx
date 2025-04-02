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
    "3f34GzKnsz2G95YsGo3UcxzNz3Za4xqLsAvaSwLvQQWiLYwgMx2ajxsMfjCZVPB9j3ViFMFeF7dnusxvt3cjgvr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5RNRwbkCCD27qXiJuwLqtVezhbdUugcKYj6ZtbkwMcNF4GkCkmEkkKsby7oqjCUKo7SiFCeh96SvR4m7s4HtqV",
  "key1": "3htZvtB7titd1iuHV8YVGinH6NxHHUziQskbWUWjLzMSHhZEcppXHkXn4NxkyaakUKA7GYmMb5Dv7o9DxDzvjoZo",
  "key2": "gDjxuaBia3b1bzamErodLjMQVNZs98zhDkGQiFs6Ptc5jSgtX68JgQ3JfmZDhiVrij5U4Drj4wLmbJafPG2Rt4E",
  "key3": "2as4RCf7Hp7kzFsqYuqQroi3KfXo2PhZLB5pez1JyuSpzPJ2CuUbxRH1N5jymo8hdZ8G37XBgX1pjRkxGoSbWb9i",
  "key4": "naCyfUFfJ1KfVCPUytx1nNMcAKmP1eeEXB32RiVWCkpQVXsSQSr9aZqFJskGRDHMXzRHiLdXLoVKuAXjktLGmqw",
  "key5": "LgTRqajGWPobFhkh9AJwT9jQsLoccWfootEiqqJh7WVYYYs7AjpMr8rJtfiZegmxsaMBnNaK7bseWKWWeeuTR8V",
  "key6": "3C9KaCyatj7Y4o82AvXhMS68gpsnGj8gYriEvJmpDCBxPxGku7V29Jh6ujYDNNJbGrfWKqueC6jwXpjmMJrQTxEU",
  "key7": "5RkgqEbxXfxwjVht8VcYdVk5hvSMnPnXZ13YPwRGqR2ANPPwttR8nVXADuwu8MsmPv1cB1AEkrZHUqhpP4JXg1hZ",
  "key8": "3ENB4AGdUJK1yftVsCiY7E6qdRKTbgyAJoPnC5F3EwJotg7gP22LoKWKrXd3yyVTWPfo7CETdymc8HLVBKYgZAY7",
  "key9": "5BGsCb25WpoF7iRCxwrysKzsSxQmkBNo8PwoqiYCNxR2AQEDUwP4a8KmxuEvz5HFWdSiGwjXeLpnpKD1vDyJQ9JU",
  "key10": "4paDne7fD83ZFizzq1RfxppWviXLVQHA3D9CpFyh4mpBfSJZSp8JoYkSjj8yG95RTzDGC7yE5Ks9GzsizpJxVtjK",
  "key11": "4PcTxpiJUdcb9b6owxtFR1ML5rMBFc4fNfcQMKrGzoAc1YXkyi7crB8YyQCbjuKiHVBLWpYsNx9iZ1jRq6rJ9AMd",
  "key12": "5ngBhnbqcc1fUr1V3XPCikwvxNaWi6f5ZEyDbidyMMPEfUYgqY5CosrbCb7M7XvveGQ5oV3nBGF7bWdAkRi2oEZD",
  "key13": "45PkhrT33fLTc5xVLN36Q3dkNuNsHFdjtHiovDs7u8ybPSX8sWhH588fuj18F7sUkE8T28gg8dhfhs2EsFbjmYYv",
  "key14": "2tQkAymxR7NYKeuCXrrq8m6zjG8CF2GwmK2BHXqi4Udk4sssCXjC5oZLWJSzUTWYR4eC59vZWY4ujTn7FF44xxP1",
  "key15": "4ScCipq65Fg7tWfGujTqNec11g5k5AEicyizsuFaKvtjkmnTjzHAgHbDku1THSnHJrCFtFFgW2KTUq5Sjy9vfPpw",
  "key16": "ZZKwQbme8ZCPrmacJHtffFo2MN2KDJkZrNVAZVAoTr1nc8LcByvV3T2tWQ6aUDvb9d19kMBr9yuWXqDWFzYyDSg",
  "key17": "3NUJhgbroBeoPAxfWTxFrbD8egwX4qYPWiVz14nP1tGQv3GphV4dmdv5kNogSisSimcDKpFH3c4ptQuSrXSzPMv9",
  "key18": "2VeE1kpehwd7Ywze481DNCz3JT8KPzRkiaou2rzgshSKpxeArKVRwjA4nEGNoArQCwpgYt2pp6AK7kcSRbvrvnNk",
  "key19": "4nBUfL15pWFGygobygGki22aTDrEoYH37UVBHb8tkA9m6gW2qLMrVmLLxLeSoanjbxXYBoBmoTZZ4DPvNawMt2o3",
  "key20": "4nrN1M7qhsLDfR7T47JEwzou9aEyvLZQfaosgutHuf9jXyxjiDaqJHA3JTH7vFufEcSQcmXTJRbnuBJ6xr7YqyUe",
  "key21": "4d1cc9eMphYmztVjEnMnfbJSmS3zS47Rww5j9XdJ1k8Whknk4T6JtrzzGVcgAAoih4Gcgd4NcxauNJB9cXo7FvKZ",
  "key22": "Cy2BaQ8cJ2mgAHDjbGzKCbP8wiFu3tjJKaM5YqW8bsGCCqH2DxZPaDEYi72SBmx1fF3DnFschDww2CJ3WjtYrB1",
  "key23": "8UBiYPVpAqHQzw5un8XMscAJEXzFcmGKXs2wAkazjKkrcCwZFj66KtoFW2pNhFaNNb6k1MVjbfAF8bHX9K356gr",
  "key24": "4c6V7syBUwyHn2oPRmkaPaVxGLGLwA9LeDd8RniMQSipPJ3fTepNCrtZQg7rSPHvogRypAHfNfwHsn3jZ4w1ivNS",
  "key25": "Q282sXPhjFuaemAnfWcyPvLUJ9ji77HoKyyxZzciNVNc9GPJFSoiAoJKtBjgPWetN3q93cWK5y9N7Bt7i4gQdDn",
  "key26": "5ik6rvPqiD9Atu4m3mM6Tf5vtzPMfLzvBZYxVabMgUhTqT87mdPyCfQCG5boR38WJs8qkFSXqFLidfFsHuEB5stq",
  "key27": "4amNRVZxzWnc7z7paDGje8b1sYrLz2qE4zrb5rQrr2j227E7Et3syYhVsfwtFEpmN9op7p96wcNDoRFUguKK8meS",
  "key28": "Ls5Uhf2p5F75udRU3m27mMhACswPm8WCSBx5nJFE5XZAFs3BjSnXkUUZMpJWmYCAoNAjw9ng7RHe2fSaxjTFYX9",
  "key29": "3AnaAB7Fr7Koq187HEASRbnbEACPPg99YwmpFTbHnsS453SDQayGvs36p7T4TZKvPuRrX6R1TncFoDEmeJqf5qMF",
  "key30": "eLeXvgP9fUZUgc5hbn1PAWVx3x6QykcQrDrM5oaXvb5eo6z4ccM9dwi7C4YnASQPSswZ7tBom2xK3yhAcDMBaXS",
  "key31": "3FUdBdJvms17cWXQMtQ8BKYB7EJvtqcjjDWJygDEPHcyDcv6swwZiFJFDxFBis8ZctCCMwbk99ufatLMxEu4QhsN",
  "key32": "jBEJPAqdJAeBj5VEPsYaUAr8sZGPcyQTteZRmJY3r3H4H5HbQQdu1uj3DcvLAA3h121bpanfT1rUNY2M9W7GTLD",
  "key33": "5SHBhmDcY57ikiNvoqujXMWrbZENwotSaG1nWkDXyasADZ2HfLaKZSXHYwYj2yVn11BYxsy3ExSfCJ4vAa1YKNZG",
  "key34": "3Rb2i3kRRqr6UvhdHxDMXEsdo4igF5yBKzq12ShfeLN8AmBkXkaBtftjxmHEtJz7J6JKwPCYXKwDjnoB3BqU9y4B"
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
