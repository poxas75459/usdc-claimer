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
    "3hqBjuE3zgv2JYaYCo7LLVA5ZueKKjLRqBnoYg7yxA8ymnqZ7wdbFsQL8Gm2xxrjzSr5hkufxKqRiyHhg8hBX5NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QmoSkRz7ihE6AkjvfMKrsvExbgkvmjm45YBPQ9ErxwUQ6ZMYKRX3jrS7ZyF7d12S8bHTksU6kCCPjBqPyWM86MF",
  "key1": "5U7ivgMWVzf7GiULL6bGbfs8cjngqw5FCHMnurb2fAqoJV876cMQ2v2hbFtJ1HK2rdbu5QvPXUD6T7WcyPqzzsDg",
  "key2": "3Sd8ZxfY7NUAneEzgNFLfUCDw11CRFTmJbAP91S6ABzDNPL9y9Zmr5Z1cxKBJHu2ayPq9vHtFJrqbuF2RHzLfrbs",
  "key3": "2mvFM9rYqECbfnpRKEtNT5UZ9fRstVs6DkWVR9NJVTH6Rah5nfBLwZ1D9gPwLx6mkVGu781Tkp8JzhUKNZPd1sxG",
  "key4": "4rdy9z6WqKwS5hmbxFapjAeLar7WLMnYNxkuJgtqeXZkKFic6r19bZkvbbKcKEHqoD2u3gAnuVrbE3qqXTa2fS7u",
  "key5": "5DqZ9Uq2MZG9Jnyg4hTzJJeSoZcHkWXyZpnD9xfybPAUd71Jmv4wdaqiDy7VamXoNv12nERLXmmvZC23S3BzNn8C",
  "key6": "4Ww5eq9NxhVJTh3z6k5jAkrBmbHbGyJuHPLuidwPAUf5XKy2J2SuyNo3hYivQ2SZFPPAhtBmKb67Zbz51e97SkHg",
  "key7": "5pghP1qqFf8swqXoATZwNnRMiSn3dTpovEx5LEUMDCCEYTC7GLwBjwCEDzeVRpQ8zXnUedPxiZSjrwTbgzHCYqtA",
  "key8": "3cie3Xykmt4FSg8JMFSYrSrPQz9nsCnNgMyjwAkdjA1L5k28NsuuM1HAPeoouRxBskpEM4AUcKHw1iJHHUmES7zm",
  "key9": "3bHXQnhdEb2BbQmBVDRGsXQBr9rRZdTf8ts6YppgTq3SuuogBRKtfjLfGuAkoc3qy142xBXF3HQpj8ekstPyUfUM",
  "key10": "58NAr9R8BBX4nPYvk86AHvV36CXYzZ2C7sPerMktxx5SGJfxBS5mZ8UzNnwLoQ4Ao4Q94SRXnXEzPFugQVLM5mVz",
  "key11": "gA89xS4D6wVEggDiqrt1rv5HoHuuXvvV9QLooS6aajHApwi8Cxj5HtRy1XuiAQdYEttchVZKdL5DLMcaiwsaPE1",
  "key12": "4ipEtu94KVPTd1kEhghusn5G395LHEZ4jw7NmL4e5kRTvcj5pZkWCZq4zTTjwBz594QpF5rxqUyF1Xe7PSpxNmwy",
  "key13": "5phDdsArjDBBttiX8D9bUsiTBQafKyttdEBUUfPGWqu5sv6YMjQW9BkyWzQ6P7JciqpDx6EqPezFEdRe28qhFNxW",
  "key14": "32CxAn3AkjyJjpxy4rdxs6Z7oY2dmCNa9qLNJGbb8uTb6K1rdDu1Age8rF3eSvSW2n74SVeAqaecqMh817Rt73ae",
  "key15": "29DZqjw8D3KnRDS1qntb9AjQfmcL9yhEX13TCQazp99Kgx7D6VEixXrxMSoj2Hpck4XimdxLGbohh9NpWy6TUC7i",
  "key16": "3HvvCqM4Eq891AZCMgscKxND22giaF3hFqkybJ9bPNwWyrARWc8eXwTqDjfhmu3VZGTAMFvz7L7LUyaBQZkRC1PC",
  "key17": "bSKD7AE9pMe4sjKLEyh4aXLW17asGNpvqvLL3B9ozB9hhHpGUmbJ1frjJjF3abAd8dXUfxXgfnuCEayGLnPCsBs",
  "key18": "DS3efyea92ggn84cbJe1ahQE82uaKQwVHHnFFKxkV34DyovgT2szxqSJNs3W8XZ35Vwiqt1gz9b2tKs8gK7rB4R",
  "key19": "4sHEwhNGu3LATqkHjq5nudMyVHQBhMjMeSQkA7aTZcp4K15fVGHD841rzgnnTfGxfPYnCNYxFRqsqVuvKjNTRzDE",
  "key20": "5G7JwzmWKhq6onMAQARDJ3V3erGD6bv31F2WAK5Uuic2iUzVVA9jNpaKTpN5Gb5NTnDTbzYGZembzMjVCdvnTZhF",
  "key21": "2TR2aNcSz2MvXB2EEBAMHKYB47QBfTCAZruP6zUDe2rwHg3F722t41T8Hc3xiqyGqDkpccLgqJL2XGYG3KD8SygL",
  "key22": "516o6YriUnp7rRRwVZtmmxpHcvUNCmKpEBVBYetMi7h5d6gRqWbzLhvQHqkY4Vzqobe8LQXX5vc4E85PkY5Vb7Ri",
  "key23": "3omiUdkipJUezUoc19QaQrAg5pC8zziZ1VdNgPgUAZEZNhVZbRrcFvmiJUFEaXq1o9B4ZY4iw2P2oj1o5mxXCpDo",
  "key24": "ZCCAMCQfXWucQ8pzHeuD4acVyQoGYqs6ci2WXrtn2b94uwVvDGezRbc25jbybB3oafTGtr7jSekKhzcDK6forwQ",
  "key25": "4Utx48k5jfpUWwXgggeWFGjz2EtTv6MM6hDpJvqmrF7YrYvWQsassN22aMAS6spAjwQ8T2BYvStvNGLDgPCRncY9",
  "key26": "2Y8Xs7rGXHbGbnA6SEV2V6GrxW37BiA4LeAC2eu9gDdd27RAPQbbiZdAUQPz69eXjKNKenPGkHcp4HGDyaD2FAj3",
  "key27": "5QY75Gu4aqRh3fFUbsnTkMj9ZQp1YraYuQLoa6uLf5mFcUqf1cwHr4rZFrova65hxefXgKWb9Tq6VmEeW5igVyfF",
  "key28": "hoijauKemhqYoiqpoezzeMgSLgAuTEyprcwGbKicS9hg2fK5NbekzpgbEUkAwyGikDmb7FnBbyueQTJ7C4Tkh8i",
  "key29": "4FvK5CiHMe6Mqof3hrSmvhZwxgdpsnkBdN3NtywXAU8ZFmrbz4rWmAzx7jDV52H88azaBZ6fs7BzAWAmV4NHvZj7",
  "key30": "3ZU9E1ffaNLFaDJtKSLDzD8xZLvaxL2wxfKTVffverYEShgyBqC1FhhsPTrrW3KkD8kW8qtt34WsyLRAdW1tdt2a",
  "key31": "4YaBeQvv5k1PwJSSj9eFgsLXEBJz8CD6uBjbRUDhHwfTSuttkXdFhRbmPkXfWUMewrE4eLkpKcyuERhN17Fxa3DA",
  "key32": "3pbpC4dBHSytRhhqf795rKU9ZvCuKxLKVhvatvL62D7Cktkd8WydnvTDncKX6GNcaCG7NpDfMQq1oMYuFeA88MTv",
  "key33": "33Pk8c4nsYFPWPb7sVe3hUnyAeiSNGrYg1ofqdBs1i9cHJTULxGuo3ZoDYa7fnttK5ac77zWBa2zHhhy3B9N6TLj",
  "key34": "2UBQsHE6ssnHM1jAw3mh2RruWpPcwdPpQMWHQhAxsUNnheuRRH4c2tqLSZKjRnok6Hge1HpEXKRN7atvGs75iyy9",
  "key35": "5mnfLwVwXz45KwfVn9nKkAxPaLF8G2RbmFeAvt5jY7j7foFKuTMUhZBsSe1dZR3DAKdtq1eRWKwMY1hmQttrJMZU",
  "key36": "4vxm1kmAey4Y6uJGB26uXtN9orxZjbapcbUmquHQG5eoaJeksfPNEcoxHyoVMG7haAdMcfLzq1SmwPUDVhACA6xj",
  "key37": "4FKWSkXXKdL8t9kUqTy4euNCv24NZsw6scsqMwFXXx1AHURTEa3Jgu6pb2mh5F1vUDXgkAe6aF21BDD4HmryrkUg",
  "key38": "5DL9zDH8eqWcYn8AWGbN9kLumnBk5rbo88TGjcnRD3yhTwVaKRCRUn2MbiajPKEWYtn2x9mcDthuCE1PTQjx8v8U",
  "key39": "5fPXybAA1UA6hcoCzAiPVX3yQqQwjUJveEvWTgJoZKCVMRB2mqyerJQSowVhTzVBLS3CAff2MWyCpBVncCAXYfe8",
  "key40": "51SQAGGqBbRxBFDnok1pu4mJy5LznRGxs7qnEVTAtEWCwK9YDmkvWmzogYpvHJ2ghDe5R8krq9MiQVy91BCepoxa",
  "key41": "5ebk33grdGe1tqvLW6dxfXbFRTQj3YMu4Ez9JUYWgvfCwoGghaZQSCircMJTT8iRRQQ2zN1VmD2LpQFHTkYnybuZ",
  "key42": "2G4NHpSaczcv7GduK1K7tGfcM95aY2gfxtkqmYRJXiCvzMbo5RrG948BNb1ZYZZJxiJ3vLcom4c9vTHPtvwLLgRC",
  "key43": "5HYuXQDaPPYGuK6MBYnfac4D9nGGpu5mP7yvJAwUcewA7kvs1DTcqLFYGY1WCaeowKukueDLoLgpGRvUpixzHyYn",
  "key44": "46vo78GA8S5W1TvjpJx4N34Cr46ZB7vBTQkbdvfRtrgVMgN4AXBbAHUFpwdLVPM6qn2Ev3XirPMqyx43k7CefRbQ",
  "key45": "runrwhQYFdhpuyH4wohgnLb3RN5MYi3c8iQjtKEUhLsncVVLngTxezCFBBuT7oqyKX51ZLkgZ2VKkkKNrLRW2Ye",
  "key46": "2iGGfGQvNE4SW23v9FZdHnZypqZs9MJ9sV1v97WAaSQwy3NCuCH11Un378xWPgytfcW56V7ZgdbEoJY3hybG4cvh"
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
