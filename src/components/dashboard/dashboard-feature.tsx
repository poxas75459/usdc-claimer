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
    "3Kzt6bbZbuJkL7sa7g2uHpPiYwfr8Yb8EJzVNtcgWHPTQHwaDjjxsW4MPoGXxS7mKAWaqUekS6BotzADcqB7GShg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGRJM1SsS6xCv22r4Y3oR2bVMHuvAYa8avjJmw3qhi77ddVFs3ETLbUd3roauHYPQUqYRkA9mYwkSaB2uuJzJ4Q",
  "key1": "2GfKqtUwXT6szXFrR6JVtwydG21Fhq9JH4fVPMNT7W26XEyEGUTSfFMYL65CePLzD4aTdRxwcfjvQz29QAxeF4T4",
  "key2": "49PDuaaRyon9i2qM8UjsUwaxRFTE7tdENL5SmQ8wmKb9Y9A11B1NyAySnGknzbSsUVafDYFEz3Ea8qUL2xgg6t2o",
  "key3": "2amDFJ4hua1wLYFwCRfF88cNXvdvgUV5darco1X8kDiCvREj4MhnnqVTXZL7F2xNpbP6DBJDU9napqDRPaUw6z7z",
  "key4": "5NKYrpF3TXqrHWY8DYFVSxwpjBGSriyMbyvx7Sp5SkivbpvdzJDXAi5nrjWtELn9S5qUubXRCGYHJZaUhKesuhBk",
  "key5": "2G4S2mEMFh6HG2cPomTXDxqTVNfx3NTQWvU7L7uQm4pZN94wh2TAo37B1BSTPcLusDkAqaJTJHfPqdK3gG1SaEmE",
  "key6": "4buMvJVXL53YzqPKLEQKTVxptspu6BJqS9Jhbz8Pn5kVmb7LFNAnvQ5EfKojv3TqoH8Quya2ivfj5kmrFX8YkdMF",
  "key7": "KHeGB4Lsjgae2F9C4NcFJ3e5ysNjNM5y5FSPd2QvYwr6p5nNManeuPVJfmdzKBoTcHB7iJYtm3aRdPodFZEKMjM",
  "key8": "5kn3ymLc4jvuALUiLKMvDMvHydNtQjvaWWFTykBLAXb6ihfuH2cGksb9Pp3TxWg773UeP6EVnVC2E7cxyn4ikyHM",
  "key9": "5JPodR6eCadiBjBX3VPziAQn6hhGbqtZdFV3frMFLGpWr5TMZfGSJaCekiM2jDyZwiXTLkU8rQ8FRWmyQybDKvev",
  "key10": "51PQjwffsa9nHY8qvQeSL7EbLvZoixUUVejS9nht5FyKUdFj1ApEhNhiQLmQWggtRKiDUdHNMKH1uRs9vZEdTCP9",
  "key11": "43v46cWk7qBkXhbTK3ZwgtE5uR6Bgxvvnjs2HGqemeSHDKAEk37n8RnRj9YbTw2apCAF1JzG7U6q7NnRcqaFoKE4",
  "key12": "5oCS8GvkQyCEz9v2by4YgWxuBkMxY8krH2yCRyu6d6qfCTdJnW3dtzUa3MJ8AejnYzs6UedTPnocQHej4z2Z4FSd",
  "key13": "2RizXYXirEh8s7tnr6AeSSeft1FNBBkP3UX3k2kygfMmA39GRbZEps4jFL8gmrYRyrm6gKzPrYnDh1eb4iXZPyDU",
  "key14": "4DtyGd3QumMG4BKawNDZ1wFmPH5FFhiwSSEaLZseQm6GFj4w8rGd7eSkoHEDtro58tNM1K9QNuQg9wGjTdjgykfM",
  "key15": "wSzHeVCcxdFQK9QwJLKJiMbgtQc7XSBS6HLGD11s8AUSgavS7aVP39YCWpKv5xi8bstscbZCNyqXyQo74F2ddmz",
  "key16": "2jD4ntQhGcYzeyehbnfZpNX79bfaA9FU9mh2JGPNnJu6ciPiihs661uigEokrdt9S7QBtovt9QpMD7TcUmb28T4E",
  "key17": "3FEryjPy3nrUHwjwv1wdeEDM31wjzsfVnd1nGadr4STGzHHnWyvrTZFxcDaBYUfbG1KepueEnYdJBdEn4jKuGkmc",
  "key18": "2YvMqJCYqDKDDM3pAnBkrzwUaiNadmcu9r3te6tHdx7TXmatuVgiNiZhpirjCAwLMYKHPbWKSrKwsuULpj2aiLkz",
  "key19": "4CscejPaMgpYeijjsCGGumpD9MktdGxiFxa8gG71D194HT9yUReTmgvodR1hoLHucTEG5KGBZpwe28SchEYGtEaA",
  "key20": "2hZ87v1iXujkjYn8qNTNGNxSjaPSMfgVy89CKtEd5bYs3xifGMKzGzAYeVJhxLRkwGmPrkwLKEHATH1X7aufRrXe",
  "key21": "9hyZALuASTdRhbmuQytSCLEQ8Dz3SceaVMm9kFfxXrniSjsMj5enJc8MGZodXSsAeh3rTfjp3USVLE22B5AiSbA",
  "key22": "4ZueTiNjVjtCuyx79VpmZb1vCMnPS7XD7mG2dTSFkZrvBZUGBViNqUc1oFxKE73RCQhTvnJQJrTaWHd8v2AqqCFL",
  "key23": "4TG2tGeaNGTFMfLyXT3DvpvcxHjd5DB5dkFDzscMyqG1vg5DdQEmLB6FSgn4qU5jUHx89nzvgj5kSP4kbQFLok7J",
  "key24": "2aghoPFdDfERKod62YTCc5atvndGQxdnaBYZUXMJjPRukYqJuqmfE2b8bnTSejGrrvP2ycxkwNKcM3hcC1kVmnyV",
  "key25": "2SKhbfpjnYaxmjyzoVBz9tgQC4g9Mz73ghbcLMSAmfinZBdTYamnwFZHLztvrgY3TARzw5K5BaV8EAHEKMB4FPfD",
  "key26": "2LamsL5jN7ZyTNWZqEajMYgeuhAq6Vwyyb3SUPMs5ZBX9CWGaLeeDsVfYjmvCoECmfH8wDYV1qNJ8YsBi1giChfM",
  "key27": "3rmuYe8gZt1xFamBP34X6Q38cHYyBJMEfzzFLqTwgupUakTEPhaj84WkmYLnKHBBGiHbaqDu5wEwJwBaD8kJ9k3J",
  "key28": "55LiQtTfWy9ztE2gKB4EhngCHgx8sMpDn9UC4Rjf4if6rpgwpp4vaU23TAtxAyPKKjptjH4LDUhMon4rswDxoSSk",
  "key29": "bFrvVXv7PcdY14FWGZ7LiiKDGUf8cJj3cBV3hBniSnzvv85ykXRhRy7mpBiAoQW53iy8YbW1bEpjbXQGEJb7nWn",
  "key30": "aRETwAoe5f99tFomU3MoHwV9QeUFvNuU9bKELkSmWxb4ZGpFESPyDTqkjxXAFySjT6DW8vwr6Zg4FZLPZNv7oyb",
  "key31": "4YcRxRR4puhs1hZpSmGEwbtXuWYbLQkG8ppzTyT3gFZc6DaFrVgbSL96ijEBLn3PYENqMMfdHbDTkMKPP7ScNAbK",
  "key32": "2WncnyuYyciTi57FusNCibZafxGjw7vEVG37Mj5ReCmAXWDUU4ThrreZPuD15BSqLxQW7hUdN97iRNKmhPDtiByo",
  "key33": "3qWpBLCTcgNEuk7ugprw7pM1G1Ta1hzzXic6UaqhtA2r8XbVSLuKnBeuSdeem5YuVAykFcZPPawHQ2Caq5GWVd7m",
  "key34": "5jFFFRiKzqY9VjMDRtcTfDWDGCo9sSy9x4GR6C72Gekx7ogVP6eQ8nYHEEtMXy4taSWPXjzhqnwYgUZoR6moRGD8",
  "key35": "5Uywiq6wHLx5kQ6yHAb5BpeKnMqjv4ESZ1g2aoKeQbjmGck82ibCSp3jCqZyBgHycEr1mhkYsWh4zGGfQKwwBtjd",
  "key36": "4FW2r9eBfsm4v3REEa2QrfYzaKmP6kNJUvjJVg98rWCfeNcrHdFAy8GZYQTGXp47sooWTQZYnZ9xq9PFJ58HnqjW",
  "key37": "6A2PSbeXqM7RQmUVJWLtG74zfVnQrkpzmVYYFcT6diYqyyfcvFUBpdKaa7CbxxZB4UAdmb7qvUDHBXzXDeeeoQU",
  "key38": "Yf8Toz7XtYV6ShAWXcyYvDQGwzPPacYBPvRViLk3jMRPBE75ufLh7KENEA3VhGXch7bQyam1H76Mp1gVo45uiSF",
  "key39": "7MEpcygHoMihQjyaVv2LjS4fpFVDuUuinALJJf6yTbSqRWrMhydcYFj5Ung9yFCpZewc42Gr1rFPFnrHbTBgXCz",
  "key40": "3cfa3jhDP2wsEsMLdV1UK9yxV4FmHNftWeahkpM6fYwB1UMq3AgZAQNyzw1FnaVpjfTLWiPGuBGxfeR7753WEqBT",
  "key41": "57CeMQhKyZMfJhJNG5jmVktQGYWJsdgNvXFquFgEKFXVYPKybbi2GxgZ3e9LeADwBVi7XCVY6aVfdcw85HZPNSB9",
  "key42": "5jx6nL359TR3Uxp6NWt2eoCyL8BoMg2wpxbpdVCe2SRAf6sL4MZFNBUwwRbRMDP92rYxaZRTZYUnXfwaNdH8gWmt",
  "key43": "rea6nN6VKLJmMz7CikkiyKbqxuugdDmkGSeS79EET7EFpp5CgDTrKvZHSE8ini7txTuRznWdMixcGgPn1iDMM2u",
  "key44": "5giMLc4nNuRGktCjdrRP1m6y3ZDqbSvUwgUhFLyh8ybxvVZC1oa2uuUqAEYEHL66Nq1FYGLpMCryyPpNx4N6x5RG",
  "key45": "128G1DaxhXUNbRygC1sbGRqkqjTxvmNqBp96QCiKYPhWnFaipMVTqn26z7aYhhRzdMbsvNgMNRAeCpuxxFDrtQhg",
  "key46": "QLiUp8oGdKnkf8y4YPXBf3tq9x4bJwp9e1mC55ojJ7kxfgpdtWA6QQaB62WvmGjZwu5MQ751v1vQMyW2yUmJsjQ",
  "key47": "jiTFRXqjEq6J5Sg5wTVXkFoRgkqgHK7tBAuEuJgngxVZV3Tz8t3n8syXo5SyC7cHCJzLgLTaEPyYsTWLUwwzL21",
  "key48": "65fQDENseJPzPyBe3LKaLtC5ZtcUoMMDB2F5vciQsca6PUcqS37sYFuru15S6H5JWGzHwxjPnr8zEBnwZQQwTLSh",
  "key49": "52aGAAXDgp8uYgPgkw21ZKjCUvnxnQUqDbaSwew4pZdBU5A8HhwgAffE56LdGByEKLYeFn3shj1LTUszWJGeFH2J"
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
