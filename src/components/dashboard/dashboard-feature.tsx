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
    "4Mcc9cztbLkTgm7AZzcjZGKWyoUXrEoH6PpNkza9Ro9EZRCSX4Zzx5eTyTfcRKDyH7SN9MK4QtNMbK3NJPjFKiTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MGLtTMSt8mfv6UWyArqLWCETFZNgCwSrhEikPurwRZuXgbu1MRQiG24NHxUHss1BJGXyRi84Jd6R9JmTc9C7Xy",
  "key1": "4okb4VKZQeLoM9EVojApGoejac6K79GhtJw8uB4Pe9e3xGUwmRZa6c74zo6td77qi9Cp2XX6X7ra3kpiju3fKPjX",
  "key2": "57b5U2tb2Vbfr2ewvsuWczoyrXo7Z22UFesRXp4yS1J9ThVWeV8YP58CTp6NGevSCzdxhTTWx4Tax3Q6tw3V7z4j",
  "key3": "52HjScdEBwwA59fDL1CwT2uMgXNaH5Dtj7YJWm64dhVFTcBMV2TkB662678LD7eVL3X75u5Esm1ufvAsuyLEm8ro",
  "key4": "3x3zxsJtF9WZNsZ5sp7RmpWT5x5H255eJYFgd7EUBB5Rr46SNKYJftp9LtiVwyxaEiyUeDCwqL5HE8dAYVrfUNLT",
  "key5": "mf17N5VtswFeKxHFvoS611t7oXguqgVZjrE6rXoQJDnUqEwVTxWPnhynfSZXuwt64t4B2CE2ozQELPpddGqoPEn",
  "key6": "4hxXeeMX6i5Qvmhb9UbZhfgWEjLMGgnJrdYT469TcDLfxUksPHuzHNjnzu6fCb9bHQSEypjjCsCcUu4TtyUpCaPo",
  "key7": "53gCxz8bRjFUXuNo4e7M83zEM85VPFN729bngd33PCSFT4TL2738XFMrj1AJjahEtJc8ory1sf3hBcT5AfCBoseN",
  "key8": "5hjM7N1WaUhPeDAVuTy7P3Qc7y9y7JL8BE9wyuq8LDScKAeh4SLGo83Ha26mTRjDPsFDMpBh2bsserjSh3DXKxEn",
  "key9": "38GrfpDwB4BJL3mV5fprHCkqyeazA5G85B2kEL7JnRNDeHXdFkKp7KnrmHDCMu1oMW5eiBFw8ZzvgXrcoZ3EwteQ",
  "key10": "2aeHr6YhTTayvJ8Mqt4tBpqpmSzyJFgEuPf62w89gPcFndJLsrPqB2QudvRAbWbHXKfJ4ZGQ3gAWu7Pnvw7yML74",
  "key11": "FpeU7dxLvvmyZKDzRRrg2Gjotah4iCg4a3KF9cjmrkNMCtjAQrbL9BCD6eSVZVsztbbpfRZ2JS1tZ89FxvE57D1",
  "key12": "KxZdutD2vpogfHKzNM3MnKpdxSFmEer7995c9snFrcgBnvaVPDWJAdJiQxQT9qfGUhvmkMcdUn8aFdC7TE4Q6mb",
  "key13": "2Nk39NY7TXpcDmYkgkjmRC9xUa8jRbT7mJM46anD9YosgNhpGJJPsMbUThPLEwrnys85BeNVt9NNRbhcPNwZLodo",
  "key14": "4jG86tcehG1zeJwpZqDauseijbaHEnv1mw5jLxM2CYNVLSyEPnR1sHxNgug2JKk3oH4NYhCAskyRSYWNXooD7pe5",
  "key15": "5H9DBjjo8TiykaCnz3oQnDuyQNAESR64sE8mKCDib1kueywH9ThjEa14q2idn2b7PR5yisQKQE5TKGMUuzAMyEkP",
  "key16": "iqWWSnEtRs6enFv5JTzRmd8BQDkNrJMEicXHFahN1y6N7tETpLitowtSJzAa7Ke2xdwLuYbSZGkrK1UzmC5LTcA",
  "key17": "4qVimwyNHd7d3HuTqA87AcXeTPm7URUTgcesLSjATErd2Nn8gEXGmwLRLnLhbgbXxWVpD9P8utgSrhX5hiP4sRct",
  "key18": "2uJFTqU9qgcWEEWuSTqYDginJ4a4enocFPPQTRzfwwDAv5y5TVTQf9bQWPbT1Bgchu9uSkwmJWeoSbxALJoLkezy",
  "key19": "2jqAS4QntMyMS3CM7nNzbw5EjsVzVaFWnQKA9QmoyokNg5x1nerwsnTM8k5YFvABzoxn6BHp3gyrRn6JX7C2ZvZW",
  "key20": "2CTY4Fztzhnuyj1W4Hnj1RvhZ77u5Ne6f2qYfiLQPykazCtJEJf8mx41FnDWrQenAXjZWDrB3yAaBEQ5L2MWngGg",
  "key21": "4mi5Snq5nN9FS7STgnH5hPceAAFrAhdpCnJYWhnuksMEk3pWue4ciAkEoUYJzGGGcXBKqRCsUGDugRnaiL68ffX9",
  "key22": "5jeWX3gRJVTbK88BkDv7kC4MAUw8vDsHGSaTZupSCULCy6fFp9yHuxFGGUgvNssWjaGfVo8Ub4SAk7eLhYi5r2rk",
  "key23": "67fJZz2MNm67HFg6Fobv9YBLD8J6tjx3F4maCvECCQKTLzKw69vY6u8ghAygmp3RGQeTsF4vaNKRV7sguiXonftj",
  "key24": "3DkF73ca12eN8CUH6VbLonDm2UGzxQJk9So2e114b51V6jHj2c2LYcQsEUCW6ojrrrLxjoqeKffgi2qGoSCvDR6Z",
  "key25": "nNMpxp9NwUaSz8yYKGBTyVhEUANmzXWG3WKVBptMnbPP5cXxtsNt39UdqUTFJvFAB6qvb2hnTRVpMjtWBQqLzES",
  "key26": "5wP7XZbwwBZbPycWPwMbRspAr2NeNaHbhvTCjRsVj4AvuDSPux4zqQKeNXGgkbXe1T7MCFqKUyo1Y8G7ykpLy4wW",
  "key27": "3iaZc8E9QDDZhEfwxveeswVthWx2P2KRj6JvE4epqHnJDkTrc8MdgpBqh8GmytENA4ZSh9TsDa1vPXk53EWHcpUC",
  "key28": "zAEuUGLGWCKp4STVn8C6nYZ3RUcwTwFAfZnUGPPbzBcDrozBB324BHqgFFzevz9U3v8gL4BXSHCj59FfkCkxygD",
  "key29": "58Q14nHHQCFuoo7Te6M7aYfSzQ7fuugruLeHWghPY1pxa5VYMmuCSCWyePQLXjGTGMGXyDvbentb1mjdcEQHCxkK",
  "key30": "4YfpaPS15Bo2Jv7HK4icbjwiK2q4ioN37dNHqbnFUhgovdMhQPrP2jR7GppHxbj9s29DNVSypm2ApnbKfDB2bMnt",
  "key31": "62xpsoXyePCPgcRjijbtNNkkWtb5HXnvKYF5nvkBebhr46LrkzC3bRmCU1ZxNEdC2d86FnWBFRmzwfzexF9WBaTj",
  "key32": "3K4fyvairP3DrrrSjA8Fz7XRyYGfa7Kj2WLr6khYp9pJPoKkB4Fyg9UZgKBrsNYou63LWShxnEbqBAL8Ep3UR9mu",
  "key33": "kxEKcdZJpBXaoB1pc8DLAYMFU8QR5KhwvRFVNMAdkaPEa9mNpXT1H1Xq3zCjR1gPeB5Z38EhupAhs49Y4BvKrnD",
  "key34": "TzeVwXcgq4AEYxES4VzzxbCpqbtcyCxQFPV44777FSLhZ9gN1dc8M8oVRFfrLtQY9v8Y1cnxLAJFjqYCFh7a323",
  "key35": "39rPmBkti6QfMCyyXTpTb8bY9hrBn3QacPDS9ALUsgKKhXwNbQ2nX3VpMNVtQNtX7ghWvrukv3wuMFRAsfgirZYx",
  "key36": "85EAP1E5ZUZTQV9RAJ43suj54kQgCq5chvbFSTkPWMpdew9Ertryt5TRvDs4AM9Pch7QmYWfbDQZFrpXVBH7P54",
  "key37": "35C5iMvNujixxde2DCCc7WH74GZpjb4KB1HGot43eFBtKVzm9693yLcPHxPRWuyZTD1YLzdqidTQTi1Rs64wknMt",
  "key38": "4MrbPfuVgA743hjHkdDe7qKynj9p7j68NXmjH9ZDXghdzMbGdi7fmRG9HwfLn6SUYGHWw6ot1QCm8KzPofvCJH5u",
  "key39": "9xwuD8tR4EmmJYTudv7rsV17VypPRUNC1oZjqskyR4MkpLrwMrg2JuhVQxSEchks22bUjxM3k2TQHQxqQTduVgA"
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
