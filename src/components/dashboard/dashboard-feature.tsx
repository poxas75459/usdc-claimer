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
    "4sHvvyJht8rT6o4mnPTW7WzhYDdu23cd1obVCeo28yvWm7ZmtTGMNHKp7pwh5wxuvLiXZdHuE9uqKah1YQKNMLJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZnXwPVfdWPE8p7xhQsPLyqLMfNSjYFpVwPjyZdQxCSDtFXG56oxwk1cD8G48S6XKJy9s6Zkjf1ZJvuQYiEagiC",
  "key1": "2xMWaxGs8fmhiWmS2AHvjVzanawfvAcBkZv3kKpxkdu4aWvGWB45eqJYTuWgegYM2Xfx8jzxiJfcZeVpazmSS24z",
  "key2": "5XjeZNDZDHQtYYCBsfkVW6aj8BLHH22jQkabkXa4yJFAVbP3wXEerKdZyXJZq8SF7rjGvwz7Zd719HEV8ishV9Gc",
  "key3": "4oQwTig8msbpXmy6MQLgBrocZLe5fhkc7whAecagtszf4niY3GTKWhMTokCp4TM8RNjyaMz2KU2NvKx6J1Vr4wSK",
  "key4": "2Fgm8BqaEuQgLDCWjdzGEV9grrfo5mELPmURfHZYLmG1khyPGiGvkAsJ72GDYvVY2YsukwARtqM4HanbnwgreEpP",
  "key5": "2SCCRT96keH43gFM69Hpc9sDyQz5Lz25atS857jkSDpYEje9QQwJi3ZuB45KvQFBBwdgBFayFc4CTykLjCQkTVR5",
  "key6": "SZXGaThVfZxycabLbVkEDyYgNowEEyhRv5z7XnFrCitD15YWEA8VmCMN4j2UTewXs39WQk72eu1p76ZmXeJmqi8",
  "key7": "JVvSoFSU7uC3uaxwrQgreCxLApAc3HLuwa9d3q1eodWswVtowF8JyTpFC8zrPq9A5nCtrqnvojPoLaSM93JxGAE",
  "key8": "2ohNX3gnNJGHCrkF4vxX4EE9YB6w6nXXEisS4LxASG2geDLXdDtNJXFbyGHHgtTtX6u3gtLAuK6xrhSxDuGrnBb1",
  "key9": "2RcQQcpKZHATNwJMRUNeZ26kG969nJPxVSb6aurpDQJQEn1fnCgDV5zigAqfRG7CxzeAJi5p3TG6yYkDCAbWvJHN",
  "key10": "2ZkNRHSLCbWAybxG9vvUrJ3wTnWvJT5aHsqzc3PDjgCA9cFxw9eHY8CV89KZEJ4MwVsnfqvDU7jtzcN4gscs4ySo",
  "key11": "SDpmbLPuBVdtE5pLXH9FfyagL5A3LQBjvrWQRkuNGjYH35XkYdqYV1wUv6XQoQFYjgh6MzNFbMSE5epNWCaJEjF",
  "key12": "gFRenLksvDWrBc98XXQBjxLd1JR4beDLSe1WwDnuGFqgmznw9B9aS8tESEDfQBk3bWK5HUAYVHyXytAVdsctLwB",
  "key13": "2AcjGuakDq5GskYg2uSFKCv4d8QViyWPuTdGnAdPPBiu9rg6SyQev7k9NnW6fyDwKGwoGprX7x6CDHSnV7dw9BCW",
  "key14": "WScZJb9JhW1SkB5yi6RiAFCcGSnnXTeqQcqRUwXsoYxzq9HP7Bvoq39DJ5eRoMHyKZ8D33N4fpAh7Cpos2hDFqo",
  "key15": "kwTxEzrHzMLYJWK4trSw7reH4TqaM1mpARq8rJPksekFNvUGULSmRPcEHgKitQFbsr9ZsvEoBAhLMyQC642GtaC",
  "key16": "4LM5rnbjxkhmmxtFhyV3pz8UVXU4k1Auc5DBtzzms434NUrvgzBfQUhSXYCznrQHt69ma9MjjGdT9U6yxLkuzVR2",
  "key17": "5zZPHB3zkEeVZz48AmVHmD6fCazXYXdicVkW9s7MmvZKbUxor2a5DEvJdruFvJG5CLRGaEy7rHTy4R3AsCkhPRQy",
  "key18": "3pyE8QSt2E8w3P2Yh2wuELZgHNiSmkPBuLiaJYSSo5DbnaFGTpzBJsMkvWkeDPGjzDqyNdEMw4tydgBNsNb242p2",
  "key19": "EUZupM7KgjYL1yUzGP55RhknPoUTFh1A9TYpJeWwHpjbGqMBCKrsuMSTT13j32q4ajHxttTHjetpRpqYnZw8Z4Q",
  "key20": "4mvcbontXVCWkRUcxCadwxfKPuujwRDcKk3ygkJL1HUnoHHRAKMk6roXsZ9KD9CREPjiHjNfYjc56zB3QPpwTiJw",
  "key21": "4CayjUgkhYA3GSh894RRonKt3QQUoAKn62qZUPwetRwvpnmKktDdtgC2HLXtaEnVjtgfuLoMXkNAjPvfkzhndV3o",
  "key22": "2GyXycqKBQfaZnb9CHVkPFZRbKkVRHupEfkeb1CJeyERAqjURDGvdcczDML2Btj1oGh5DjyfKHh6vxF8WxeKGsNU",
  "key23": "31Tamaw5epSjm7xGrvn8KHqivjG4yoqX133XPEh68FpfDWC2bwMZGTMCnfskoKvgCJb6qqrbjmax8ujL6VGgm6Hm",
  "key24": "tiDBBocupvgo1UZvzgJDgEGafGZ5TKxaNuNzFhLy5wRNBy8xQkuANT2vrLcj14UdBZqm2AchLD4a4aXXzX7rdkH",
  "key25": "17z2jYi64RUgVjEWytDB5JyMNxSuRb3otj8LRaE1zzZEPrcpAo3b7XjrrjctZDn3M4yZxyxt9jGztThGD2L9Mwn",
  "key26": "66Bddjt5thD28k2d8qDY9kV5saExtyK7ieA5ZwVvFE74vEqpNBHdXGceT8zGfyeAEmXAKXeAvnZRR5tDW13myB9V",
  "key27": "7aGeMZCuNAmMkqHn7UCjaDRRECLb55HPQ7yjgQyiqKeSq3MFYzgtgZhjZejY6D87BCpqG9e8MB1s1qJsspjo8JJ",
  "key28": "17EfKwSrfcRpixmXW4b4TcAcLo2dM418qpuedX3MSecZSdobfxrZcc2zHyU2fDLj8RPuzbDRSPjghNYxnofZYxi",
  "key29": "S9HDD9EetGp3uFydKSzWCat38cn4dJNgp6bEfCxRNdo6MT6zLYqmkYSYFRhuByftyYp33B6xeybT7wM2vXFm4EM",
  "key30": "5QjCYspJ9sJuS5mgFaBiadifHDgmYWwCack6sVznpWj9o2D5QJgQRLrx7MusdGHrSoSt9D9s5SmpR4forW9qdg4X",
  "key31": "5KQbrjvs3kibAZCmR12ZoDFLLjW1MZV5dam99dkHmZyJDqL2ziwXVwQKkjxqpDHyg8i3Bxp2o95bW95dNCLb8U1n",
  "key32": "6ob3kmNsZXW8JgwbuErTYA3xbyKQ6yQvoBoxbZrS2tUuCWfbRJXPNaypF6ZaPcpQqHcevBAKeJvMN7pL8En4QaW",
  "key33": "5QzDvBR1MgFArEsE1GTjJFki6fqfQhQZxg2YAGmuUmJb1cSErU27h38Lx9ANuBm9kEnVdfSsAC7VvmmDAgdj53aN",
  "key34": "67TgTSQJ8b5QjLEnBhyuWgoPxcck1Z3CNBMqWgL3E3gyfeKmjkJRhEP2YKR5pMrvgYkcFX1KVtmrcPdcPy172YSD",
  "key35": "4r6NdJbh1nZ9o6ABKFx6fVQSBfvgW6KKK2NgENoE5SCrCsAvX7pD4nEeMt7V8jqmXEZULpzW4DkCyWe8S2kafW8q",
  "key36": "3yz4ED7td5dHogaNL6GMHu6XvdmpAB4xHQmvaYqJgFtJ1eKaDqZKJvYWUVAdtHc7NjXJnAhaFDVcvA7SvaxbQ5vk",
  "key37": "38GUB1CQTvnypkSxFP32TZBpCkFa42GntCFJ8fSmDnqbv6DZd41n3HaesTYxXYojW7WyVeJ5kFWsAYXGpk6bfZep",
  "key38": "jyx4qM7cBxa9qaLURWtSpDnfsE2bVrq5f4X1aLGMezpfKVcBLYb3peaR6Ld5GXXjLfwBuHJAX33uhMNMoCNm5Hg",
  "key39": "47mJagxC34UhMCLeSz3MdGyAoJb4yhL8K4T3iUzXRpv8JmUJXhdzaTAg5RkB2Dbhc5UmU4JPmrMcT2L9y9Eto7BM",
  "key40": "5ZsjPgpGbsVaNiZku5P5geHM1SNTHfWo15QrqidtccLzeefCoK5dyFK1xso8CV6v4FJZjmW5kYq8HoVDacYofny7",
  "key41": "xjMAWV8NoyyBKiTbfsUehWyW98yMMbZcddXDpa2i9VRatFvV1HimKHtaqbr9hTE4JtuNtaebwZtRo6dg6Ka1b37",
  "key42": "4w8GyypL5aiV7YV5cD8mYUA8Bqmgqaj8wFZ636s5niFM4sMipA2G9efRHsi4pKKDgd35WzuxboQ6EAbgECQvq58C",
  "key43": "2kVfyApSo8ijs8PozfZmj3rweMGxwYtdYgVAkxnEzfgZij76e2Pz3ac9d2baRwPT3sokrSLRnZM7FT3G4gqce2zP",
  "key44": "oSdUUYskSbwtc2wm9b5f3xS9YY33VziBo7wLy86nqQKf46ZxsurdzcBDM9LnbmGbRmCNLzUQqCwunsBeNJDcYZN",
  "key45": "4ZrYWnuKZEaxJ6gXoGZUxjiBtQPe6XmtQDhQSBoWHh6MKdzfrBBRp6TLnipT2DETgsoN9ztr9JF88cmYpdBQYirP"
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
