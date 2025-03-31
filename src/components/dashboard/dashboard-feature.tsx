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
    "55N3uCEXTR7m4W9Q5DrGUX4nxygEJsYBJoyTxcazwPEEZoS1wcs4aFB34URvuDike1kJ5SR84psMZRqnssynZCuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VTLeY2gHcruDNnLi3RUrPiMtkgLoQHdMrtgSj2E3PcEDpagba5gTv6YK3o5GNpCRzFRhUKzBJ6Xbsm5PPdAeyZk",
  "key1": "3JYb8DnCT2rD2qSbcTbyey6NKbHAZ897FnAGKtQwMwa8jxnXk7wxVNdsTeq2BRxRA6DP13dP2kiZXbjxAnJQ8cfm",
  "key2": "4Hd2dbWMFDjg9f5DEJqoaXw51hE7DfbEHqwqrgmvQbSncqzcjQ3MaYR3pYDUp5bp2BjCnscdPzQZXR1ti2dyGP8G",
  "key3": "31R4ejPF5JKbVoEC7GMTtrLzauiNaLw9YFNFfCUDCKmJuH8jJkc3u1oSD1eQnuPmupA8MPsv9rRq1LqQuJTRqD9M",
  "key4": "361ybKsrZRUH6oTEa5Sn1r5jNsWqkjuvWveJ9YVHeqFQnNswTcx1LApA4dRtMp8tLWLrYJee6C3QEG7aDmfJWqEP",
  "key5": "3Ju1CnxhzYqBMLXLcmwsERgRXq4mVT6DR3R6efsjgTYLzPEFTvw2ndDHaZUVKWceCWjgHADHNj6ScWWqdoxFEP4i",
  "key6": "3T2cndyPCYseqwt2NxgxXtDziXaGRgj5h62B6RKCEb8FNSdwufuuQPxCVjMPooWsCKW2dfNmQRADGVjqtUCHLmXE",
  "key7": "344CgKHjSvXdUAU9pV3guXA6oECVs4wQKYH649FA1Tpp7QUFY28BhaBspbkAMJSMdiv3uBgjegjoV9i2EQJoYyem",
  "key8": "3YWfbGFTrcXZx9oWyGaLJqt417vzqoeg3NX3iUxAiL2gk64bKV6AVc4WukVFh1MnM2r5wmTvtTttdvxMt2pujUk5",
  "key9": "4LSXcS9H7WUFQW39dB5TBj2EvFBUQwK1xkaHV1dqxQs2U3AN8jyQLhajPfNDfnuMKXmvLoMoRXEZwFCTV7Q8RyNe",
  "key10": "pD1CF4LZFgQCyP1HAkSrgvL9MfpGkx87aGtzguVow3MrGjXFkCFPHpTtdmr9UcHenfM5uD97vXwriuEmFFJDUo4",
  "key11": "3oh4xkCC31qy5bf8dNVSwnyeoEf8wY7mt31WJ1qV152gsDisXXxqQBMpZLpFGnBdeEExsUTJUke27RCBCzrpAbcs",
  "key12": "5CBBLUw9er3KJv18q1QatfKgZhLfSWaCBgju3m72N2jRq8EZ23mNMQ3PbmBfSqenVbV8SMRvnrwZx8FEJXzDbhse",
  "key13": "3VPEjG2G6aHfqVNtLCgCLRky9c7YmvbJh62r1GEesRjCmjFF5dQrSDk8kjr6uef5mwnUUEtHvHweJECtYykBDvBs",
  "key14": "4sY1J7ze4MMCQiwuLTFRFCA3yAuaz9rgYoq1paaQYDqbTGys1YYrSVjKVerS4zJ2gSEagK55dPnBkuKjxexyRifc",
  "key15": "4aNcJ39htmddhqUpd2qKb4MZSJ94xA9Vv95yLxF6NDJxL4q5TQWrNeKV2LEfx93bPLTqid8DyGcyabHZaFh95guc",
  "key16": "486v6jGpdkXVUpw1GoMygoRZKnRVq2toz4XFCFwuNJtqeC66czsoLD8nVr5ELaBvyxJJjtSegcyeAfokR9SFn48b",
  "key17": "5MstgkCM6vF95UseDYsU5D7HB1tVk7SfZunBCcgk98M1b4QFFayy1FsfckZzz8X24L9mspyiw2Pmoo5Smig3srtB",
  "key18": "2SeNFw75ZbxLBAbqUtWA1ujbveiNUHkMLEtL9wEfaiS2xWj9obzmtKrFuDHK8HEMj1kJbpSHx8DCVXkWfSW7nSvf",
  "key19": "2C8FeVo8DEaUqCPA5JJasNMBzpveBNM2D7NHDHZUq9cB1DW1TFtQi1ELcZbLEYGqs9eqAHsk7Xb8fY936C4SgNhG",
  "key20": "VWAbETnvHEfBKsjhDvCXHZhsY33YHpLBzS9dh1qvm66awP2Trzkuqr7iCC4cjedrxd1TH6vrKX1TpjsHUinHfDL",
  "key21": "2kHMP9eYHfTwnVwfYuaaqvXxo5eyvKpvnyMqkDP3NZruMq8KiC1RQmJxTyVAYJNVqp7it474M7GBK2KoPUknybAZ",
  "key22": "5Wuqy8LTcjEV82eyGdbpSZVK5EoTgHoZDfH73XSj5LBbqhyimnFEpBXfZaJnixbsT13EFgaV2s2JoEqT9vAZo6by",
  "key23": "35yq973DrbHY4qmx1YjmicdhbANtQNsgVoCSrwEHNz4PRdxMzz8kiB7zES6avxEuZdCKirfwLb9UiY56DxGChXcp",
  "key24": "5KwCCeURPNekuu992ChhSJFuQZWBxsBUbsgWCh2K2b3XrprY6vKeVh7nKRLQfGiUJqJJLRLnJ6vaPQzhmN7KHn2i",
  "key25": "5As6PZeLpfqgvG8KiRs2Spk8g15MPdRWajHex5iMFpCt2L1ZxNAuxrcPD1Um3BJsHWXFRNkwRbshEjuXFwHUX41U",
  "key26": "2iViFnP5NSzPvnH7n6FjLGjNPQvnu5NM5fVRsG8G5ng8SgV3Vk7kEc6VRV41F8s1qufi71x571VwTUJPYK5VjyxA",
  "key27": "3YrgoGAbjDr8CguW3WXsvJ9hLTds2TbLymmENWNK8McjiEPVfC7h6kWQUJWq4uggwgVdLDTrstDAuw84unXXmav7",
  "key28": "vA8b5WKXewMQE3Fj1BswANUNyMLFvzQhgEDquNkyeUz3VKYcs2sEcbP4Sy6feP82EgzuutXNXiBCVwQsz1vQcjf",
  "key29": "br1LGKzhzwjmnv129h6Z9Fcr1cgyq8uyNhruUAhuA78BeVP8QSoyRkWLTgTapmtYwZ126avAJqdNmXibjkdew36",
  "key30": "2zu5e9vMam98T79giFPhYcqWJp2NQzBtzpGvYUfriuR2JmhdWD2Uo5kmnqQAVuX6gYVRUnFLkvGVv9McDq8KRVmf",
  "key31": "3upwbXVcwJGBhmVezFSD15JotAALKdQDw9F1DqDqTkNmBfiREKcUHBg1Aa6R8ykbePcBFqBqcNF5JKET4ZjfvbPn",
  "key32": "2PiXqCoBp8QRWzGPZEvXvMGD3beMVfx1SGc1uS2DCHzWmbYbTxD62EuDbzv646criMfVsfV4m2Ce49kEeqEbCGBW",
  "key33": "7fNLU2cYDvDZhHYaykX6CMy6rxQcs7ynR96LKAtcU4hpAFVQ7pu7FWTU2DuSfhpzB6CtBFiPqYK7hJfRBaiHFu4",
  "key34": "2EVZsjF6zCUXBWk96fZLv3sPrMMhwWVfgxeN5Hk2GLxTj8sXnd7PVw6cvtJ7zriT1RihYzozR2AKmgCgSJyHfvXw",
  "key35": "4fHnPo3SDBcp4y8hXbYCZnfuFmkRVpceiAGznjxkz1UjZe4GdoL7JRQCkr9vdeMSm7LyPhVjFRzfWtaDL4RQ42Sd",
  "key36": "3sSC79pGNhGy4MiqKs6Y3e39GRrNGpqDAUjU97xvgj4dqYRkScL65unXDcoB1zqbFtGjcznpfZthBbFs2AVE27o5",
  "key37": "19BBX5fwY1sQdL7Bur53nGnS5MaeMLQGCj7zFXj76LazYYMTxtMQBT1xbuk923jZ1LSPtTZxeRtKB8QGMNSyXC9",
  "key38": "219XzLxtBALQFhiaXMwf5EyubAKjafRgR1fdDYxct1eyf1tcrVgb3zdRpJh5pVosezcA3jrW5aDz7CS1CjVZJtXK",
  "key39": "5Hqu66LHXorbcDnffcrNYkeymDA4LDrHnBtFeShHJSCTPhXscAjnrhbqJb762HnP6Vj1y2FF9v8T2dHkSRef3nHF",
  "key40": "ujGVfs4m34HpAQkM8aGZdk7VxaH62btBqpg6PdcZbEqq9XhkEpSR6849xjC5RyXmZsVpKzyecVd1TF4xbRSXY6F",
  "key41": "2EpqE9sSpcSifzrYcr4aSxvrjbQrhmrbvqwbXrHQbBVAoTGEoAS42VQQyXMQkcPYnJ9fej9yBB7zBVyNxnoex5tt",
  "key42": "2wJYwUbQztLQE5atL3tpe7uTAGc2PyF6VF16oRYgzXq5aL9bWa7N2MMn87KS5f2yrpDwq5vusbJAGCCTaQFxyk83",
  "key43": "3HYZYr6SZcfaiCG7Kpj6wipfH1zc2PAnGBdJPSJL8AhioBKcS2V27R56fM91MRsnKTXxhNE496TRPgAeZDj1rDzc",
  "key44": "gYmz5sKTq1RUzdEtgaazvgb5o12u2V6dQWM4mzBYqUESwEUHnUgpKwZ5BzBWbtUbKf8VgaDQ1uqVrfEZHp3imSz",
  "key45": "vVyAf3gCxQkdKcMyb4rVYb8qCpNGCt5NXgDEdJfarC2Gd1d2FrW7cBCAr4yuTiWyVV7H4x13Zefx2svPCsMX3XL",
  "key46": "45nsFbLtFD8HPJu5rFMYSMBeSmBwvG5QviyhkPQ8jSrJg8PjtwYrNKPAx2gPXfGau8pWKAY5BCSk1RP9knamvEoE"
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
