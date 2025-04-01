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
    "5pP8NeS1fxn5rdU6TV68Zqomhgd2E5Z5hdS4Ky1ph1VRqEku1Cj4GSPDfb9bsaekHeUw7GdC4NmXdf7oPz4Zpp5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiPts6BEnd1hJ7n5KotSQcNhpZJjiquurLt77A3qY4w6vivAP3TzAkvmGJKf4GVQv73fpufeA9Jg37rdtQsqFm",
  "key1": "37X7FMcQy3xwhDAwoJaCTXs6jK9qcev96yTGR5kfn2iLqgWmDyQSZmfCE1eW3vmMJtZPU1xtrHSLHuwzg2H3U8gt",
  "key2": "5HBLVvmL8iJWEvLF3GhD6U1WfkrDyyac1QUVnhUiZr3TBuhPU1r28m9Lyhq3ULaWUvMBqK1tisJukRjkqcFyEuUv",
  "key3": "4vCnFX4JcujGRq8jLTCpZKF2dU161vHHKKxfsdd19GbbNjrJNjpiwp5UYBWGxkgqNpJJYWtkABriN6iQEAy6SDui",
  "key4": "1X9u5PaAaEsU2H3Z65hJyD2D2TWujezYmq7PJTCVG6GxvYtwtXWMsPmmRx83KghqD7efA7Qcu2zuC6h5mNVtqjD",
  "key5": "5fa7hE6CrfBTotSjQMbYZhV49kBPt8Go1MCG7aqrt9rwWT67XPmJqiypcXjduqWCD4YCgJYu6dhcm9XGa7fgiW5b",
  "key6": "3VPKNFbrc9LFmLZbx3taQnkAduxaQuua1D7Ni2sU59ansYX5tyUiaovYQQ4KCGeaMhrhsjBHfvVxx9tPwHiGB8Cm",
  "key7": "2LhZXyB4oBnSt72hy9UFUimD6Gx897nmmn8jXaX22dFD6RoskVNyEA7tBgZi4gchuwQ5y3S64vpiNxTZGAJUkNTP",
  "key8": "5pzAaxZCDht2NLhjXUyMH4pUrsnMH2cLg4YVCPQtSUG6QqH7N4CMbkJ3h12ASTP4yCaJ4ZV6j83NQvtERF1edJMc",
  "key9": "r59huzBagoQzZx1ykajzFF2D6v17xRSemQzxea3eeZocy8tSkZkWUT75TUZyD4Lzhn6w1NcfVhbnbbwNqh8z5n8",
  "key10": "3wGrHMUyEaAQB9RXj6cNVH3aVqq6g1DELRQcYLHwnU9kQAssuT917UYoJa2SbXKWLzRs6sHxTASTx35RCkNKsbgG",
  "key11": "2h1jKercYewysHFam9Adc4F5RcFUVktA6RPXFjpbATf7MpEfaVCeZ2p8BxrzJ4WRW1z8o11D3DpM2J7kC3SwhxD4",
  "key12": "3dYau6iD9kvfhV7t6UimW14n8xNp69V9ZuBy3Boagnng6k9yf5KupGHjRcK68navSj2Nj25kopRWvCHzooGsxHgp",
  "key13": "22vwJQY4HFA6Net9evVP9sv1DWWWn8zRnKfQRpSkQ5n7UGun7CzB1LudgWxGaFfcUs5tdxXjRKLFYX6j1zD4FLjW",
  "key14": "34mZsAqfkKCMSaV6pZva6tgEAffY27ZPGeLfVqDsdXTk9pQD2yvQqHTApeyCT3Y8sPY1ChmBGpEsLgk47XsW7PSc",
  "key15": "5cjugjcvQEes6Wze7YqGGyyb5zt8svSSma7Mt4SpM9gUEeEhAzhr6JNp6jaRQ7vJbWYUVZnTatVx58MdDdgdyQ8n",
  "key16": "2Fq5S1ZCEr4MYgzJTYfgyvwmoMtZWHZ7DW1zmb6FZ4FWh211dFyhjTDUcXu97KkbVDoLKsBarpsK3yYZqaErUhnS",
  "key17": "Cf3ghbbC8WUMPmAMxXMHDuHC65KTJBYZHpvjdyL44WkPB3NHtadsYhmnPDefztmvUUTFQgouLoKZHZRtgET7uh4",
  "key18": "5oq2cUhixK3LtuRdEE8n7JbozmtQ1BGiU4nRmzH5Ce7oHLdzpqe34VNznhdQibk535FC2H1mu8K2xJrBPwAGgRzJ",
  "key19": "4BNkJc8Dr1BsPECLHvhX9Cjje39UzgPoUUnpGKcYZdHXRtfEQPmtacCanYVbU67vVq4KXxWyJFApAXZU9KLfQ7pw",
  "key20": "2Wv6V14skxkcFnV5RosXqYKuZHrhXBapRGEJpsuoKMsjNWupPnXCRuP16nCd2NbtPb4RKtyjugtgRgMUeuLRU6Ks",
  "key21": "irsMqYTj5iHgQhUU7Ek3GXGRm4HUb6Y6A6bfu2yY7CodosCFLZkL8BBq6JXzvKrs3aHgC7R4BVVH5QxSexqs8N5",
  "key22": "qaBik7QMJ7BaCrFVkP2rEE4XZuCBAvWyEmp62Fpg2ACEnZinjU6ZDWrJruNPo4d6Z6biTzPPhngj9pnr9jYt2CS",
  "key23": "445wb4qzqtSm3x6SEphkRtbTUGWtD6BQVpfKEeJ8GUU8gbTbEXtcQAhVVvNR96eujzAnj5wrLP2FRQZJST3JFWHv",
  "key24": "qSryTywzEgH9dBBBpicxxX7PD1mKybVL4iAY6TyKYRdmZz7ZaUF9PWpe2h5inGEddyjCuGELZYe9Fenr8rSyr2V",
  "key25": "3tP4VfFkmKHgfWwUn7zKDDRAXTREtNijbs5bo1xRXMYCp7EquR18Bcq5wpbijCQwFdJCgfaTtiqhx1dHeiGo5aLX",
  "key26": "3qQxg1pP9DHTbCQfUz7mR9kpmQLQeWze2LGLJVNYJdPzNJwazownYFhwo9Cu34Rk6kW5U4Ap3NvPaQCLWbUYWZot",
  "key27": "38hMHxNwZf92eqEHsG6jeX8bbqFM83HajSc6QNxMc1Nf57HNhMbZHwrhcVQ4dZqruVhMERYG4CfMPeJ9s33YKw2U",
  "key28": "PN3J7hnNx5qtDGek5FwPb6GRHiCMzDPhBbHsnMj7RGFRF2Rv1ytC54uP9y7kPkS11N7uvPaHiAeqGVnw4E3S8Fz",
  "key29": "312resWLnWK3Uy13jvuEWMM8H9DzScR9CiQUWsVmYwzK1CXShFdvbqS5N3mTYjq4FpGCfnqU5ryDH84euwf1ds2n",
  "key30": "c5AubxynMNGetXDgd8TVhMzs3Gm5UB9fhxa9wV8xa2SXQgPnsLPppMfaCTNjUqTPPV61ypkpCmRimJgREoH4VgS",
  "key31": "4zcd6m8tpfuxC2rVZweiPb7s2JLqPgGJj3vZbftZYHVCZ1owbcHunrjp89cDG67q45WUMkhpbm75n2EeDAMroRk2",
  "key32": "4cLQVpdVwAG7Vnn1yQMu6AqBD8sR2VFqgekXeGrtgXQ7AqeJM4QDMY3evDFmznJ18R5W45JQ4UcrHo7bjkaEUmzq",
  "key33": "2cCw1uZA1ouAFKKTXrmr3cX5ZdbrbqDdqV3bWxGzSjyWAtwNesxQYJWvychewJJ59g1KXh8aV7dFsu7XW1HtbhBA",
  "key34": "oaV6ffwwqu14xdSKW1PepebRruThyDmWESszKgRka2QwTV7AiboHboTb7XfBr5xFbQ3gGYG3NuzDMwRRiagdNGT",
  "key35": "rLWF8vz6mDdRjiRoPRRFVGgtUDTo8ZmwLx9xyce8stwxFijgCLw8XB1dDZDEJcgZiR21rkzwzMfu96VGQ27uLD8",
  "key36": "WQAqaSr392aSX7CYse4KtCTrA4S96sq1QbNKXgjSrm9fRed6sLkHwWqVLguNiwwPewcbL8KB6T4hjBTCPzrwpG6",
  "key37": "3DQrpvU2pYnTMLXkXzgS57RviiFLbJM2NwafiZ46tma4edD1yiEy8CuhRmqqsGtJvU6UtitSoxsXDzKL9WBVEsQT",
  "key38": "2M5cvpFAEbP1fAMa5o6nhCgGv57k7DJqDcqDFgfNwhPMgVJyaWHygUxhCmwHB3uu761gR6o1fHmavhfHGFvwRM3g",
  "key39": "esDFURpuDD4dqb6Mcd9BipqczrQrcB2T862kosNwsDjzo52SpX6KAQTMJ8Csbg7hyqwqbZKdNjGy19FKCtpWw4d",
  "key40": "AdXkar88d3L6NdbuedYNwHpksGJgmtRPeE3zs8Kwh5UdyVZyYh2RUjHNhskSn2Lu7wuMj3zxmqaZqFcokvcRj65",
  "key41": "22D1SUMZTyKjRLmEPAPU5kJu9iza118NvK33Kg6EVYrJZcfehXsaypuzcAG4SGmf4WSCYtiHWB6VmM6ipo7mX716",
  "key42": "2YA1CgH4HPaMKcj8ZfKMquKzajb5mcNsD3ymtUsgF58bQmD43X9pcxoxjXrFpoAzA9YzN9H9x8qkp4eXF65NYKoY",
  "key43": "3coZra3TD7bgUUn9zomfP1M5AGT2nUzxqMSxGbVU8fn81y2NQqALsdH2BZqdTh4ATgpT4S7bZp6g7y2Y4pdzX1Tn",
  "key44": "3yy61bgoT3Lr1gwUdmrNfMuKrhSv1ZBuWAixSX5g4go388or7jVW4DrYdtqSPrukLxtnySkGYNiMe7Decdukco8e",
  "key45": "3pg8nQYTtrUhMHpDknvE13R7rrysygdqVNCns1mBXYedguAPMruYYz4PJa1fFvew9jvHqTybweMfCC95ucPgrLVG",
  "key46": "RZLvS921fRewdJ6WJkiszyhSZ7fsnjv8NH4gH79gGTWcnsthD93iPsS7uZDgtLKkgWmB35VmQpkUxnwrtL2Fo4R"
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
