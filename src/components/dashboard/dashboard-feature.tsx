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
    "fTb8YuwvGA5TvnoZGDixYP91UgCJVuLvrUryQCoXjujMe48HrwLFHo2iUNAQjoDQRiT8L7xr1VHAZxf8hStZXp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dYCitoLFjtiRMyiEKmnoAx6SWcwh4u2T3MkkNTyCi3zrEmi3zQNn7aVQa3QGTEsuVGJbWY21K4TnNVPecee64vc",
  "key1": "3v8F8JY1Q6BrsEANhT91R1XHte8F59DmUud7qtEoLYzrgB6BMxrgUqu9xp1r7ZsdgwtoQ2ETwJJTd35E2xSiWmEc",
  "key2": "3JxPsjcfkQEXtWupkLnaECpvYvvdcuv56FJ2dFRp3sutkDy4C97rm1NwvHGRQvpf9ZSuzBP5KC2fwfDpJgifzDDr",
  "key3": "5fZRZ4VkpKBGkMTXKE9ihgtr3kfHuuUmBcTxJmJdYGAUzFreWdGJSgt5foyi76skk29GhzNKuqddZzaQ4xAMUwpQ",
  "key4": "3KPECJ4M7pMC3rNvM3nwzdZqruAmHZYBxRegJR1Ktj6wsEC9tU1FDbK3XpQ7As5dMrHAp8u4oevSoEqyexDvAQ4J",
  "key5": "5jnYjFAfuiATNLiYHKezTo7KqyczbcndkFKRVCQwNSBdorgu5Rwfb63fwRrTpmQFnUiveX38vWw2B6hpgawPnzb6",
  "key6": "2DtyEfjNnEYJzE6a3aft39cnpkFcHXukFNpDRc4tFynzZcnvhGs8Ug5sKNAhGVWszJ627338ewH2d2WrpTdX2nvY",
  "key7": "2v8qKa4VJ18uQA9aW4ExeF4b5WLQcn7GBGRhCzMGEfW5drR5RwTg4h9K63xuxRPPL1JV4kDhRJmG5eDNan72mqdN",
  "key8": "3Ku5JK4wvokw3pvneVRvQDNMSGJHYeru7qQkmNfFGey26bydkeVGQQ75kgEjJQn6Ha56bmbZ2Qsmmq1deAdFUpBE",
  "key9": "4GAa15uQbVtbarSGHMBU3NNS2eSkZznxvXaDs5xmmCzieJd6r4Xsp6CRuNt5xRAw1xhrPG4HtrWpamepK6eJv1yn",
  "key10": "2RKxfkc53TiGNDHdKQQ9gxeDJPWJDRybiMgt1KVZp9hFBZaR4zxnxDLXuKUAWeUAircsxDLG59w7Pk8ESmqmkUVs",
  "key11": "uRYJ51LpLoiUAFD1ihsmjmPggizpbWeoeNBSsyMoQZd8KnLzsRn1hWJfFG8LwE4zv3Hxv4MkWMneEeFYKtjnwhf",
  "key12": "62oRtzhkYvZmxxTWo2ZUiUcaL2rQEo6UFMXGSzBcSYdweyzshLVCa8CTiSCXXZE8yVwVJLygifeq8WYwQnKHuuXN",
  "key13": "5BUywAKSzy6pBssk455ekR6xpzApuvFYska2imnDztSdyZmxsZhX42CYociPZapA245YqknEuPFsDKRq6ZNDqCic",
  "key14": "2RhUHqjJ5Ry1w6Y7qYcGPYTBnUWtisegJhoUymTvky4TmHdU4ctjFaZqKpua6NHwSKHaXbNgqX3YkKY41BHgCUMs",
  "key15": "4jhqKsM111LWbR1SN7pgWvShws3maf8m7wdH3MtUej6PjYqg7pLgFatHdfzDsC6kzfEX8vi1LF2K8u9BNJAYCoyH",
  "key16": "VxT7yBU6r7E7dp4PzqeuDiCJbDnwDsWPQoegDhDiE1KmWhACjVV6VNjS5WGF7vE22emobssuPp7mGZJNkoKjzqo",
  "key17": "2qNxgxPRzExUrQUmceFezom1nCSVNEX21rnbJprjiHPTSZUxCEpKvJCpnq56HrumrsCMP4VxUXcQLBRFFprbgjjJ",
  "key18": "4KA29eJeiNExWnFkZrfQ3tiAy4cay5gW22gB5fKQPWFE423CrCbEp3t8aJEoSk3fX9qJZu1BRxn9ZvFyUWVSUDGL",
  "key19": "4Z4wTpSKJFfxF8Z1pnE1n2bgsoHFDxF7KiF4AtbdpHvpuhbGXHrZLY1zVYDQXkTmJMGZF4ZMbaamLPnpD96b714J",
  "key20": "3kqsvLv7dtQfJqkAkpiwTLkmnDL8c1qivwejkQjBXqyNusdzCZ894LMdNwN9yQabibBv6c9muvamoDPFJBUUcPTL",
  "key21": "3zcbyt8TTw6Aar7b4DTAp2BxFx3fNBYRg1AVwx265gBHTA4k3pZCbnxgB4u1DcmuoX1KcMu2yUdW8h5XFhJXMLVp",
  "key22": "5D4YAnQ13fBFjXL324bEQigFMt22sYhXnLe3E6oWkwPZxKG5Huq6yZiS7EH4k3R2H6d6Ay48aV54haLRSk5LD1vr",
  "key23": "2BUBp1pcWjWfdEACZdERPkaWTmVbJRxT3giXWqNDqeMyYy1Hwkc7fgA7k95vbfFRtVu5MxVNRxo7T5dQZh66Qob2",
  "key24": "22wHxxGxTAQga2PcJfTNLugtPQRt4zQC5DhH8WJt1iAMMYXL6aycL2SxuFyXUqnuCm1YGYxZgFdSwLTN9Ua6Habx",
  "key25": "5vHBv6PH6ie1kGw9Xg1vDrJ3vfJeC26FZGM5yW9mnjm5HuapZK1DVRfjbDETcGp4DVQ9poYnJ1YYzVe3CpxrXsuB",
  "key26": "5Ypfe3cm9VjvxXJab9HF4t5vhje1cym9Z2bMK2gyTM4AHVZQ8ZJ74As52Mvj6xUfRxbwnXVVN2Vo4Frk6UQc9GsG",
  "key27": "55B45RLPcksvCMfGhXaSRfoRi65cZc6UoLUxj21iJECwB14Vow49jstYMfP4W1EhhS7m5h14tjPzwSEe3MbvXTE3",
  "key28": "3JrRaNRbLNv9c4bUugVJ2oCWW9KqLuLtasJKxhwRy9fvNHyY9XmZeaXQa4Vrc1VCKpztoJGkGomTykPD79ZcAW7c",
  "key29": "67HocW1vFyAzScF9eJZgpxFYYow3y1Xh3mVSofyfM8ZNB37mAzUUZR6nb7d6yhCdPYzV8QLtLVqY6wZ4pPB5YCRU",
  "key30": "n2ZcAYxFPCDTvUNg9TVaY1xwCUX9gYp3tPrEn78dxyFHkha2LQLUvPQYu76k37YdXRJikAEtLMEAtepPczHPVeX",
  "key31": "38f1UxRbumiQuYuCW1Sn8qMWYQPUbRbCnCPC8fqPEKfcbyj5aG3oKfbvMGmWspDstgs1tr59Xoa82HGTQU5Ycryg"
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
