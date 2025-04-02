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
    "4qm5dvaEyjNef5t75cyLWvizU1RkaxdtDwxZeCfNXwM3HWBiFRpuBjrZaGJTfKLEWj5xtibiv3n33uVF77jbnMK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TbXV2uDqTBwT3jYwJin7yCLh5wfy5hsh35DbjkAPraHCniBD2KijeHbGiXuBoGM98sVi17cEXMu3zCqJZsZtMH",
  "key1": "2Cnf2T7i4PR2XSUGjpn71VqCxtnVDPc1pEkprXRpgJKgPceJQN9mSQF1gFKp26cEDSmV78UwmwdKQoWBnCawpheu",
  "key2": "3vwEyvwm926BiL9mrgb3GwPQ4Zb5A1CaC81FeEw6xgFKtWXNLWv64e3mShFnw9Py2hiyx42V6WJn67xnn4Bm46E8",
  "key3": "3xA23EZY5xWiVVTYr4U4dcGzUkYKekQa8muMZnDgA9PDA1ofZzA7bebUnWfEezwxC9htD6CrBcruWGwZNuzMzy2M",
  "key4": "2B5HRJpz8YfzJH1siWt8YppKoKjGrWcnLkYD8zfdqDAwsnEeUEsZdmTzhUUwZMNAYyiqCdu17b8r3m1kQhu6yz6i",
  "key5": "354uB4C76LkcU89g5Bzd6oA32f8Sbk3A2Y13MgHU5Vj2wZUQRqhicPBDsnk9YWMBpNNRySuqirYNev39L1LL5Vwb",
  "key6": "GAfZ9Uue8BDdkzXagw8jHiC6TiK6baTg2kMXd5UX5f42pTFcMxCKUAEBmuY29YV7fYV5RSiNcYkKoz9JgtE6kFZ",
  "key7": "3wR2SyaAqBNFTtx9UuPaYzqEsvCJA7CvR7PNXPFFkRz619mVGfCdpWbjfyiakZ3dUKmY8aF6qrJpsYYt3NPqgDrt",
  "key8": "2Uxivt73tAaEBoUo7vP6Q16inDu1MdJTUxpyE95CGc7YPr3P3f6gru6Yi6Zc6WDJLgy6spMRrzZbTiPhKyxUmRfE",
  "key9": "3EsNqrKk4x21vZhTu6BqhLbhFe5fUByeM2svLzEDpF8p6j5hkwUvhmEGTzmLWqEn4h6pdLMJ9GxA39WcR3f3Ftap",
  "key10": "4bWBsRda4zZPUExcBZyGTE5xrZJjDUJwPCcEMFBozxcb7UkF5rjTUuhUVa96BWBQicW6HVP7t3R2cW8tYS3Ms4vC",
  "key11": "4eeFtdz7HCJNw4BHK4gtHuJ4FSrTDcoE94diEuT7e9fzgnCbaAyAgmoh2q6SX8sZZX4JSkBbaCxReag61nbQxbtS",
  "key12": "51mWLtZyD9pqP8Dt2GERNwHQXX5dLZV8BGGFw54HnGY1ZfmWpRTpyMUb8Ty7KYw5HES85d474224HfNCdqkt7kmk",
  "key13": "4fBgmm98UoJr8CGB7HMNuMmUwjVKTdURyuPZh3qVjXTBkSzzQAxmgpwMRmkhjGNgh3incfXzy5hiDkVb5r41jqAs",
  "key14": "53wfEed9Qu9MFqfV9W3AwoqcX2Lvk23MY7NL31EXmco5Chi9tSEvXmQtQyMK8SoAF1Lc3SeHvhkh3CoPwyhpUyGy",
  "key15": "2LLu3nFmKykBBaAfTqX5RZ9UHoW6kVxGfFQoB3HeTibFZPhQDeiVVtftoPvk4ozUPRmYFeUxiFtfNwUmZDvi6ffD",
  "key16": "yh23oYF3UQrn3h8jzCpx4DwRNRQusiCA2FUuPepsxDKQNqKcDe6S1QT9zUYWtnuryKfQDUFzb733RfbP5YyfrGo",
  "key17": "5TVcxww65jwgx49SHgDBW2QnjNZLhUBdEVT5iy6ZBoptzPQhG5gbEffE5URg6VjhCxz8FXrWDSJm6hYWdHu5X7EX",
  "key18": "3ym4oUjjuzeXcDVenmWhrXeo6AkSS3J8xW3jJhs3zMbU7wCGyQXevWFfsT8TgRqT7jxFcRhUeHYHmruAaYdDXHUz",
  "key19": "2DEYeixqhKmutSyJvQqZwb2v1DTdcxCiEZfxb7wGQytLrumeqvzSZHM3skEDGb8sDaMpwZj4v76HxXQD14feMVk1",
  "key20": "3uNUc7bEqBH11uh8fbf5izhcugFcdUPP7PMbWF1rF27C7hjMRvZLWDXEmn2i69XETnCSL2jxMnZRAhzqdX92NRiQ",
  "key21": "Hgse7c9Xdj9gnUeYARXfe3aYLKSknVg7qFcdPvas5qy5udFhTGJSJGyzFTvapKG6hXLRg4nAhE6b6z7EqfmbmeM",
  "key22": "34JRw6aBAd9U2QMH7hwZLL7SQ2uagCSFP6KWcthvsFs5vQPtPiYH9b7nHAZYYAjwCXWTUNS9ezT5sry1y5zcsDGT",
  "key23": "vAqEWyEKKA6JHoBAECcomZusxcdJ1f5EKwC4jbJLcy76sNtZ1hGtCgYHjeXxgqDgtXRgcfuPTYe5Eg4vgWU19cF",
  "key24": "EHZr2ge935ZkwGZrCNqXHsVowmbjHTXQrvCTLZKk4fjyJxFKdEEnE67XeBL6UxCudEYqRYHWz17ye7KpyfbeE68",
  "key25": "4FhEX3JY9c6cUh4rzRERx8voCR1yY7SSCRax3WTatTejebZf3T47gfgAyRf7uBPTEhAjCTrTKf7LBBoxpif33qGu",
  "key26": "5iesYT8sRimYF1BUKaQ88WCQdrSt9WyRhZC5Jd2rf6S6CxAGenKSqKroaEcnyiSo5RuUrJVMsAcP25MvygrFraVC",
  "key27": "Yf3yoPdLB7wPdcFdJUM3nM868eBDoYkfL6rr53ohDbU1rz5L5jcX3RSRQowUEPQAwn96bQZ39u2UX9kGDG8ssX3",
  "key28": "3pTTBD5yETD4ELtLXf2uf8TRemvbgtCrCCVaQDUyYA9JciVViGB5LJ4cawdqnrxAQae6DLmSAkB5fUbjamX65gt8",
  "key29": "2oWD94HAYT8FnbSUUwTzV6f5VAT2SSeKjdq87sZCQDwP8ejxCk8i4zimquf9u4W5j2ttELa1bTc4wcaLPn643ZM5",
  "key30": "5r1yucct3x4sp4qgp942NhSjJb6kinYKa8hbopRzK1c56FYhXHS2wfYwAqakajQytCyW6k7eVjvAd3AyebXSRYnz",
  "key31": "RXChDegxLxPfSGhARSYWA4KAAsPJcURPU2WWmU37CsGMHAhgiAyS6Qo8VHf3y5vCVE7x6Cd93usNxg9F5T3hoEj",
  "key32": "61gDdsXP1b1uEeP61fQ7Vh7hhyZLktfEhp7BcSZZk8mWo4FUaDuXX6Va5bJzKz2VFyqRjsFhhwmjLEphT9JqcWDj",
  "key33": "5sDo2qUFYDcfxDJP1oo6RSFa5WaMA3qUeWRdDYtC7uyiymn8vvegEsfxq68BF1gqpTNyhJNnXHVYtMEhSvZJaGZ1",
  "key34": "3qVtHYpBWSE8Jicc4xed6mb5u8yCw2c2Uykn72Gmtve4jUvC3Sp8zpdhUX9NHWsF9q9ySa9KzU4dDeLrWHReXjQ",
  "key35": "ktmDBwp5UxFRPY3BPrWNimP3GWPM8sU5UET5fSZQK2dJVN5tpUGyYKj7XswZvwY6i3DukUBLXs1bjJQnXSuuvWh",
  "key36": "4Zub9YhAkBfARRhx61JPacDzdCJkeAqwdzzxRx2d4Srjz8N73zSsrs55w7xDZkNXhTXbkQGs8biX9bfE4vYEyRD9",
  "key37": "6bSjg1uTj5gYeh544qvg337DnmLTMK8JpY4ViwEJUP2hQs8FtpZzKhXaHFnc5RkM7GuW2xV1rSDjZMJa9JJa1U9",
  "key38": "3dDhdRi1KqXYwPVwPv7YdCm9svjFLWKDMdGw5KrLjhNUBmyAUfz3sJYhJxdv1pBqp19XMasTR9vhKwaAqX3FHg3H",
  "key39": "2uNS5jqJqHkW9EmexYNXcytPTyYAVb1LqY6rcQgNSbQkurdRpGgwqWpvKSxGn4QqEWaCUrfdBKdP2RomDECARPkc",
  "key40": "m5SAwLMUa1Mv9i4EvLFrh4HV13xDzrFXP5qaUZe7qxuHRznEdMCCs9bLmjJcyNv4i6u1Q1ffLYno7qDy1hHxctC",
  "key41": "FVfUF6GLLNhSH4JE8b6qNDzKewctsPy4P4yJvru2kUgdYARiwki2aBq5Kbx3Uzny3XoMEVw9uu8DLDMqp43ghuS",
  "key42": "4awJWK9TYR3v9u2wL2iosFfS8Q4L276SaJMFdQLaYRC7vEHo2qPc586ji2ydyuzUk4vLQL6KWqNJJd4yqtiDZN97",
  "key43": "67akJRPjj6wQ5i1vzhF14rtDpt2PAj68fDEb5FnH1wuwXuyD4XLKsfJ4DXs7n6MR1uUJphkw4YyNYVgxTVaq9BSG",
  "key44": "3fho3wfrgdvop1gScAAksFjghMxLwyWRjcw4Renft3gNyNemsPp6qsmBZk2QDV3Arf1XPFAUzSraUWz3XQpy5MQS",
  "key45": "VnnGn8yVRGEkMRTvLyATDaaXRkAFYnZPBzbR54wnMLS6dFktBVbScSFT5nesurUWxATQYHsYiw37vftg55VRYNK",
  "key46": "4Mksa671jgtBKgPDM9D7NwBFrcdBv6a9fUSNZAFJCCYmYu6rFu58uA7fSag59jyW23fY27WdjbGab3hsKyStq1LM"
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
