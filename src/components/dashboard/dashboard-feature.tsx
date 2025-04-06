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
    "MK2AWK338E3LhqEqjPWZj6kRo5SLfqkSD1z2TgvPgKsfTzp3qHrunTeHpuczaLNaoFN5hu7vGh8YVVG9mLT1Kn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uWrudhrNw4YQSxKwu3KmUiMLfk28YB4HxADoKizRdmwpzoyWjFwGCruBSeNgoWP2NX4HtKFhmzA2iYXbazoK7qL",
  "key1": "iqeMWD95TjWE5GsHoxFxrP11RhyPM4jxzo9U2tGDtWo1gJyeHVHN1YfC3pgeDpGW5qeCMKax49x8NR6cVySXX8G",
  "key2": "3oNwzQxLPT2Y2qG5VCM786AsEy9bE2GxKgDYXzX3HtDVPmPPi75858Ba1FfxLeLQCFM5mx6aQB9fMrbwAfbChddX",
  "key3": "4Jv8cmyruK1J5sZKWetoBdquC13Y9B2Qi31BRAZKYo6XWUNGSnPfZnMeN4aPJPNxJBMXCL1e4hQiB5Uk9EnFGrxF",
  "key4": "5owrzbDKWi3TU1C5ABvnoAKxC4ZgEjiwPPdveg7GKAPUm4xLsv8PP3ZLpQK5cU9sYYdzwuXbr2RC2WwDjKDYfkuA",
  "key5": "3zPoA92RXoZFtuuBZQG6m19PAqVaTJRJnhwhyihccEFwGvKMvbcWcf73RRAcvj42jBegfYB8y7aeoGPBfrrkV1zf",
  "key6": "ajsMvHdPJZTmpQ775b7N5b6cksoj49nGeVqhUvYt4FZyFSd71Fdd2xkT1opWwSMVcmNcSAqgVgSN5nxx2hDxmNk",
  "key7": "4sn9D5AF5zopBsANgPw1juzKAWEFfUHSi8T36WVvcArC4Y6uJELCqkEJmmK7GoUu9KgsV5BBMoWAyc5x8yNADXJu",
  "key8": "33QCpatVhjY3isFbCXQohYcuLy9RYFXoxkZxvKogTAoMMWFsectLEHDscSdcukJpaSqjyhwhka8jM33u2kfiuDXQ",
  "key9": "4sBF4zRqTLFvajCJysyUDTnwxiSx7CDyN6CbP19BBdb9CSAFYGpD39uQDt3oUd9nxVzZfq6JfHFPst5R5caaLFxD",
  "key10": "58bfnrAqRZch2gYo2Ak7bxQ75SECv6dx1r2eEpc7PYn8ZgGfu5PVAyZv3ozfpbLYPBmzve8nfzGH9jU7ajJ348AM",
  "key11": "2Jw3oWzPaYCAHsAMhrVhUJ9TWeq84XzhbHDihq4eWiGdxs3cB1WWpaYaGK5ENG4tNyz4kJu7p3KPWT3iEmtM1CZe",
  "key12": "4i8AXCqQEBrpwnoPs9HGQb8pnDX5DWTMrqC2dQfjTsnVhDEZWSQhWEx6MyMUqsZXcDEz1q8nfzQNsd13s32HqKUN",
  "key13": "2VZwYtwAoBHAn3qfsV5z5ornQQXcXypsQGhfRZKRucpDFB46tELyznxnAsqmNfBeBzU5SEWMZqHALEFsJ6wZG68U",
  "key14": "83QFmszAtpdqK6xGHBKMhe6Tr5F4UmnbAvhxr9Yhc7dYwZsifoavdPtTjMsB3XJCYCSo4FiWGkrsfjtrrr1RTaC",
  "key15": "2a2Lqn5yuAHiDYa5wnHPZfCkkWxN1JpKM5rKsTrUxWoQSTMWNPh8T9WBwNUCUpF5cjTwCAHSNqG131rK1rb1Sewu",
  "key16": "2jmV9dJNQLjh5cWpmWpvJwmo6wdChgvZ8QwEpFGqjV4UEwW8yyKdUxd41cyNHgbfgPcmjhe4SLApzRAuxtpbLYi6",
  "key17": "29mphoFRsodSwuxpmfEqhuTWe9todeLpWSfPeVrFTVxAGGHBAYNKXtkjYQf39WKKXQkdrUYPzjEssjQDfCu5EnA5",
  "key18": "5QCFsyMehDsAfs16wRxzo86SSvX3BVsNFdude17GUj6JfodXKQJBXK87KSowkuVctDmgHtPibojduzxfDsXMQ26c",
  "key19": "akAEMTH2oMyC5YeR8XjvZB4qzhAiQeJrVamQjZWUZ4sGoHE1x2qCb7k4CsagtRr58MmXZKh5TMGaQGnpA8d9fAS",
  "key20": "4XPrjVNWNATT5LrpfvRgUyzHJrKPNCXLNnbd8vy7DBUB8FXvqviEJ7LPTCPPdLYyikgSUziLWEfFTYwiTF7mSasR",
  "key21": "5zcmEaswKSxTYhwM15HgYg7Lnf3NC2mTRrDxzGEnVL4miTj3uXcVEi1HkDQaAi29NTQt9riAtZH5BPwf2tcizGhA",
  "key22": "61F9YRgAtZfoBKsT2fGjSEqU89oPQH7WPbNhvWXioMYEY2p77KRgE7PnqYkRBF6q9HwtBV5qnj4vdVKyeN4G3tKF",
  "key23": "4Uh7XQRYiFHW7cXbM99fcRdELE3FMaL6UiZiaiBk6LuHZMi8Q7kn2U9jE7v4n4r9GUdJX3M16JTBowZ7aE2sxGYm",
  "key24": "3Z3oCg9Avw9Cpxd1NbZC4hj7erSn35Cc2VY7zENTRc9HSDJMmMUfZQzsd6K7PBkBh3hRNkctvT9D2Q2WoQZ4GZg5",
  "key25": "3ve6nYmjvTSYhQzBe5HeZVWPjwTQVmD5DN6Gm8AugwQQy6RujYYU7rr29ZCmv1bmjurrVFMpD5NhwjchCcDagYgf",
  "key26": "2y38GHFa5jg5nwZdBMoQrq9DEMZZ5fsuoFJSNZerkduXUiBhEy3xkRrX5PcqU5LESeA6AJfuMoGoDQ81D1pd81Rw",
  "key27": "21G985SEM6H8XUQV7FuUnra7NCbfJNuuGtQXn5yLfMPh9birRo7UJmNPCq9a2shCmNsGNyRGqqpQm4kfEci5eUFs",
  "key28": "3st2Q5ZBeqbbofek854hNC64oHQoLLjn5XqMqxQCSZ61dS9uC4VvPCyWfiaxo8DRq3gWt3itV2BLj69GmQZRNsJC",
  "key29": "2ZXDcDw9UpSuAfs6x87AVwht6ihwGtLswDVQsznmatuDAFFVDZJEX55Vs4bYt4jYNkwkMQDkSFAj4Pf1D3xqF1X4",
  "key30": "3pNq3MMvqY3H5tBbJj3kEASrARr3CMJK2ojDLVnbYTiC4Rr2cBdVaZfFPeUx3NJBab9kfQWgm1gAQ78o7NQJ3YAK",
  "key31": "2wWy21UP2Ksa8zDd32kwj8esLKMsnFMbXK2X1jT1jB91GHk8D5cF43LjpWSoNMMaWtEFnUGAPYWxQjgZnSZYx2Wa",
  "key32": "5qDyMuSbYLk4hDTjJM46SUATJ33rWo1vq9xqU9J1wvvvRvZZWekgN8orGnPPGEAqGZbr1bTgtRUPVF1zipttF2wh",
  "key33": "561Y2W1DKc3ikT645HBeDnxecKA6JMRetAM6hQD4ByTia7hCoqvxxoygp3gBHZudxxfawTM5UDDVjpFNaTy1peZ3",
  "key34": "5z4EQhtgJkB8ET5hfQksFwLabiG2iQYXLkZBphzb3JPw92GEuWtmtbMK8EFRrHsgGywxMHLdZzNez2GZ7fN4F1AX",
  "key35": "swXr391ymb7WDUNxjyxzGYciQBSpBU8qNGJcgUMnwDpXkS5LvsaYyRnWegqmtdxWBYH7Mn32ahwKLxMaeWtjqc5",
  "key36": "5GK49VTFM5RgntWnb6kdqwJXSYhdFuHe4kBiBRjECgjWtP7d6rEqdTQijFevc6Po89KQunpWhioqXqguyYJnNf7Z",
  "key37": "5VMvoXvUPFPuwNCyncjamrUjuYiJUXKwFCE6mbuPUmp781ReZAm7rjt98UHHPJoYmqzDWFcNxJmy1tkRnDo8rzQK",
  "key38": "2TJe7TdhEynUJcYpecdKPV4MpoiNBK5jGwuWpWCbJywtabbB7PXfSbtkykA7PeSpTqsfwQVvva2GLvF2pWZ76wbx",
  "key39": "48P8wQpmDwYjJsDD3iSJvxmSbCE2XzagbNFdCArFLtaitQRSNcQePrgrzH9r3PhN4FVD4WwC3Ra7hMUbQFSxn9Tg",
  "key40": "4smaVXQPD2tuzbjtVMpfmMPTWkmtsYghkx3pA7pcXd7T6zCEYUSYPeJyUqwEdF9A9EewVkSW3P5xzm2eU3L8k56S",
  "key41": "4L6DFzseZYxRd2fKENegw1QXJrCb9sPtXtXVnJ2z2UZgDse7Sq629UTbmGwYZmZcwksYVKBp5Dx6Baw45cx9HuNu",
  "key42": "52KV5HojMeVcBLF3k6XekfoFQLRQHjjyntZV1zryN4akgEbjDXM2ELtA2DeGgqU2u2zY1DYrC6HHFm4rXLswV7TY",
  "key43": "5wzxZrJaa8kz9DpwdZsrS92te2hZesjuEo8JZt4GTwi8XEvMN6baW2rgrghakZnkFxugwjkcoqrkF9KzBWor3wWx",
  "key44": "58oyuTUPJmDfZVnuUExGjTE8BBKAdVLuqdMLSnr9yXfhypqFyTYCnPRnudniRz8G4Rqj8oVNbtBGyq7ztjswiju7",
  "key45": "2KnQucNFatDqboGAaijoPe1hcoK3ExBjtQf2kFwiyYMJ7TDiS2wZhwiJxvrmSxa7tEYEeRtSH2zzsmMDAg4zCRE3",
  "key46": "4362mePF6sxSbzxJrbbicLY88cfmBXynwFmxqUJiVtgakAUxGdTUAVfcWFcwxvPTggqa4VEfhPpQzQ6bAYAyz8E"
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
