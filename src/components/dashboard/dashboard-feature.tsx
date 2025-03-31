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
    "27Era7bZc9e8dAA8gDpuARRE6gHfYd1BFz37Kuya2dJiEyJ7q1bTAWvWZzQYibBSvoVxjM5PpN9mocEhpbvjnmhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKhganR9CDoDDaU5Ris57uycmiP4joBsRgkFw8wkaagWVxp8wzNu39mMnf5Mw9XF5v7uyyXkG9ohzmtVmJSTZNQ",
  "key1": "cVZQ6SfvQDHgV9X44XNfgbTRK8wp6J2RbWVdPZkjgtEYgEiHeauZrhmsN5LwTtBnQjs4h3Ye3qhcXihTRxgfcfq",
  "key2": "4j7XKBzWr755KtBj4b8JiY5Tw22nF7CQ7t256tM7tED8exR3KJAUER7b94tiP1arowaYiJUVPnLEdvyQeAwuudLj",
  "key3": "3xKj5tMhkymJA2JeGnVjHQYa3PbBrxmTuD4k8qM9pj414baKE1bJN1DT1Cnt8cSziqLqWy5vx7HiF4xfAjyVFzfg",
  "key4": "Ph6X5SYybHphL2KUcPA5mKUMViX2B1JqdZV5XpVZSr5N9xVvMjcKwvE8yrLbSDswqovw2svuXBgRowhH26cFbqL",
  "key5": "4MmJ9M5QcYn3YKcYmHxxGPf3wMi4gMSKThH83Kb6QAPKeC2x8Gf3hnKVSaiUCehC2BpEPG8RSLStozitizgLBP6W",
  "key6": "zyzrHgQ92aan8nxeeSN7qoyBhz1Zc2yr2H1n5fgTDFqRS53UaKD7uxZPbS2mNAdtzY7YWpK8ARYGfvcCKfPbKps",
  "key7": "5L5Mbd7XVqVM3A5Ts4jAWw4u67WP6JLLnwyzUhA23FFX3ChHtY1NyQE4VFL2Xp91jCMKBk2n3YyCbFBzgLPEjERi",
  "key8": "3FSE8K1r8wBkcqrTPoV7rf9AQks1y48bZFakGfYDuB4x4iHhBBGq621YHCCLHwJPKdDBKopRhf1CZtifHhoEmzU3",
  "key9": "3X51PqF7M7pTHzrpvN5pDYQXLVo6HrfWBzU1LeajSGxPn5qfBt4GThPEL8Cn3hGDiECqFKwxurGaYsRTGRg6u1V6",
  "key10": "21r8rGz2cSRnbkwN2Xqv1EtGxAswcthB2FE3HdJDfg9FZPJAt1dVBtNCxZDwfurGV5SEsEw563ZWgjusX4SJZFbD",
  "key11": "2g2MRpJbnS7Ckfnue75JmeaoCfRKMTjWxNrtGYLeyfkVdtuzp7miWRp9gi2icWDRPjZ688a59M5eHXKp34NESLyj",
  "key12": "3VpTtKCfnSMALb7nYqK6kzkxFhjc84r8eZghjf2XBaSt57nCoNDpP1LJFB1M2Srza6K3YHgVZEgV5SxZZMhdqNc5",
  "key13": "4NP3k2uS2wLhkxc4DosoPDTsb6gBzq3AwnXgexvXhu3sXgdHuLq4rabJeERYqLZGFBq8RiBgXAifHigp6AGMLr56",
  "key14": "T1EmCoFW3fxGGEbY28L4dWKqSQKG3FZFMKrwR3qArBTUkfnoC28gyNpUGjzETJdhREpvzKLJn1bFqUzYH4G8SPr",
  "key15": "4JYNBDdfjBFqRyYkfVtBZKEkKJiFEaKScvqiiCvTFpG9tqoKVsQ1MXgaXnDGxYJFu1hhxzrzTWLPJaotxTUoYXh6",
  "key16": "39C2NvY1vqhKN2GUaHtVttHMazNGcJP2XL5DbUAK7ZYUuVaEUY6aJyzjGHQeGm3orCuHegiFUqmmX2YGKn5hmdd4",
  "key17": "5TgYmB5XVcTEwjzGgvqnNUbDiEFe4Ss6Ja5mpKzHNt9DNwRPCfsfU6pjHWnKB1GzFwCPwSsfTeQSjs9gXfGcGBkV",
  "key18": "5NpmCj92KN6QJ66ARGhbtudHYB42FDoHtJQSsZntcTn28n4UMMwV69iRVmhoWj9bTiVw7vVk67oBfCzA2cYj3oS",
  "key19": "4TKdVsbHFDHcx5YCCPhCUbtsjiKimi4B228G7VhYziWnH1ZHEoba8rrsodKkAEJgfjPnB3N51QHP5fqDxAS75qq6",
  "key20": "X7Pks6Ec3BEEMiDqL5Y3Z9E66pP5yx2jKoNntBiMxuwjgYsSt32phKAvyccwpXjveUJrFytuNnnXFqkEkgD8yqQ",
  "key21": "2d7RGySfPqKEqa8SEceCBmDhxQi8WWdRLgujKwADchwwM63jcKr1RgU4LDC7zSucAJK1pza9qBhky5dFJtb35KXr",
  "key22": "2eDqupX91nTvpbcp4VKpqbdse9oSTYe6KF1tUn9RJ7myhmN63iKKsTiesCGvU6NoMQFMhATfGGk9R3nTxSpaXisf",
  "key23": "4KkS3GLDWsHT3xZimD7yrT22xRLgRq5uSeLrp1zGHSBEzuaujXKgwjqLVxPUB12s9wfaPW3EV4aAXzHaJkmdH38N",
  "key24": "2LZJ7B2bd9yERFTqcdFJTaTLVRMCAkbYULik7MVLB5j5jht6Q2qLbjePTiDf9cTQmPJUgKeWqQEY1eXeTEiZiDvi",
  "key25": "4inHtL8WY1qsTqMGbzJkWBw25RLGxKv8WGYZEVqj813eXm8Uhha2JzoumZhcBCKTgtB9ErvpDimCDzoWL8H6S2zy",
  "key26": "mfedZtdHjq2sfpoRLcHpYXJqkMVm6SufYTjxhs42EKZo5W57wejQ4qtt4fqWW7GkFu8YP4z6PJmw9MvX4p1LnxP",
  "key27": "tjrnwXqfdoXRDY3sUBHH7Gv8xamYtybCMh4E3m3CEnaGyF4tVjcB4Z6ovCVQ9fE8NQDHfYm3T6ZmRJPqoW7NBVT",
  "key28": "rsrXGpfj6hRHonNeGsutFVzxXTocjHnjU5BBTZqGQYRkU4A57KaWsVGLa94j3dtZDMRNUgrNCdYPNeMiH1PByaX",
  "key29": "5VKgAiF6rihGVB3ddcBmhbbQSSDXcGCMsgFasrMetoGCiXx6VH55kkmV6ZR7cATP7hN4A2QwukazmYQQLmr6qZAJ",
  "key30": "Ta8KVt2WAchYx9hM9cBx78VWJ57Z12vpszongvbPzgrFPxGBNr5gfS97jWyiogvQuFAy8MXXDHLT9mU42Wa1xPH",
  "key31": "4mTBtTsgnge9d9aqUrWcgkyVEF66sCP5dysDfMAcXEVwDHR49tfXV9RyHPWLvtxea5pKedMmhskcpHNEhy6eoUtk",
  "key32": "61mVVwK3i33dz7BJzT4SnmRkN7H2p73rvd5KdzcQET9RjHM93yLDKXHNXWbverSkhdwSMAjGwuoh9KSYFHGTshaw",
  "key33": "4hcD4Qovmayy319BEAfAqS4pQWBDkDoTzpyfCT3HV7THoKjNuezcyB2Es5iMwjhhjayHDGwJemzBbnwGBQgGAbXq",
  "key34": "5vxtx5u33vgsYiXkBdgFQvfct6Tup3dn8zAW2fwm44Xa77zetRGgqUuqUDsosw5TpruP3Dv32sMkZ66DgtAKsrSa",
  "key35": "UtAzMyXtfwMiyFTKV37vU8je7Z49ZPD5Nvh9iHRXGLnp1RM8so6SAEhXAmtRCECn6yyW9uDRYTE4X7ScRiEzrzT",
  "key36": "rKEapY5L1fYiAXLHnmSKG3fFt5UKR94PihuPt3S2fJPN8TipGKLnLXwPzEetWknwrJyeJHTygYziMqYDHnRn6nA",
  "key37": "5nLgBwi5mn7tGmAgCCaYCzaVYRwHU8FedivJbe1zndN5kQFMKJFqWZ2GDamxfzToGQpwAzBzY1hfmLEniLuTpyDU",
  "key38": "4nGavBRXP8dCjZWR9YhhCRf7FiJt9ykasp5ZyQ82fDVcxeog9sbftpvMPXbAGthRWr8GL8CxSFFqnHQGcQjMt2Z6",
  "key39": "34sxLKGtmgYKPQXcPwDwm7HAzyrqLx5ZSP5pWqVn3NMWnJxvgwcTeHKRcaG6mqNeDAZnpvwdgEfns6ngzmwBU5Dm",
  "key40": "TAWau9Kg3e7WiChBooCXWhxGpQSzw5mw8N9WhqQs19gkFC7zishAnsSuyMXX21MyJoVeDtnSEdcx9WponaAL4e4",
  "key41": "AyjXoWo5DMXiAdZvuaxf7mQFrWPDuRVVUnLe2Toq3pJoJMj5Qps8eNdEbn65s1QzhLT9uKVofxJq3TFmT4VQnvW",
  "key42": "nDvXv2Xk3td6SrZBs5EgYiygAAeFs3ME31Wd2PAjSJiFd7zv2eBnw8takJoBpb4Ci5XZ9sq9wdziPgpBQi81Ea8"
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
