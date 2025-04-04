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
    "3fFgG4s2Jb1W9rADKAkRf2ihrJGiNUaSgnyxpzzL4NFwV6bjnVG7DV2dEvaFqJtreBbbyD3bEXwZ2PjPAhXPnc7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zL76NTuM2PaEsfRhyjrqsuNg9Vz5C3ECwt1NoB6b4GazgWYachm6rYCNmd4evhzqWrmfyoybPhaJC6uwx52KZAw",
  "key1": "5SBaQ1VD1jsfE21Rac4jx9UeZHsemrRwWYFZWinrAZ8JrZtRUH7L1Ptzq4bDrSJjoGcbJQDdXULExFArN63MvZTc",
  "key2": "2Hdm2zU7sWQi8gXZqXko6yDSACoMQj34Zd9FxLAKEPNfXAmYQRyra5yrDeTgqUonAZjfvKx365C1qJfahF5q42Ky",
  "key3": "3zFEgWg14aGciisSQeyDoXzBezRWFtg9BYELzj4PvKirsKXDfrbVen1UbrKASgHC5cS94AkeQv4AYvJ7QnJJVwjr",
  "key4": "bVgEpTXN6UUfm3aEEYonRc6ts7QUuZHUk41eMn66aXaG1STpuwUyqGviyDgJKmZyiXfxyFFoPP6sYZbueLhn1fP",
  "key5": "4pdRrwsSVCv644zH2NC4v2XoskGsZodTBJAmmvANDwZE63T6QWwv92Kd34uXihY21GdrCaSoqZcJsGqhKUU7zSr3",
  "key6": "4SruPPvQ2ndMHcPPfbXXwTmh6KPsguSGDbaBttmtuQDiiMW41tPjtf5RE7sZ8rk1o5eNVXsBsuxB5nvKV1pAwXuW",
  "key7": "2VLH1v18kTWG8PGqkYWUQdAra9caLR5kPcaL7Q787aT2nZmHBbarsuCcuNoRcZxUB57F2PadqTMmk8KudZfC94Sr",
  "key8": "e7t47HmB7FxdiShuehtfrJDuJhD5F5voPP3KHiUwo3YTrrB6vDzX81WMHKemUcXwvMfuUtAzUPgWApaSUMpQhUm",
  "key9": "3BRmA6tJFKEEu7SUJoq7SxRzLChcRXasUdtuPesAGBetCrwLuFGJYqa8siaxVx3huhhzkkCccrdC22MG8Gtw4b3B",
  "key10": "v1uy5J8CLYdat1B7nmFhgcLea3VrJNAjJp5j868CPfk7G71G7KHvNETtcjN7ywitrfZKYbRy5C5GZTZ8XRqE9Ye",
  "key11": "A7x2kAfVwQs9nXKa8SXuS8zHKTwkGY3qGV1toSoJBE57yZecemWp2MR4L1pSo9Tyh6Xenzyjj8pd7Tqqb8gqmBW",
  "key12": "3KRY5pqnnGvhEtqKD7Tny4XbpCobWUXGhjkqMZcfzPLjHbb52r3tb4CXBm1kC5wdQPEMZzceLSZyETEgUHiZzBCL",
  "key13": "491oTo4w59wTv2BuQ9UuWf94tQZjWMbcNWV9v2rbx9fYNZaDdqY7qaQEr8q9smGrsK9Gz6kQDRZW8v2wtJzLwF6E",
  "key14": "32MuNn57gDNHPs7nS2wzSkHckShjmSCqHxUuu2MtDGtTcrFREtn3hwdT94ZtgEDci2yWvooLDgcWU7c16iZxpYbT",
  "key15": "419zqRd2ZzSR6qbXnnvctrbWuRhcUSAZNWnYiWV2ieoJoiCe7Z8aGPuqVzzRwqttmzBowztXWCtwcahqzAs6Bg7F",
  "key16": "2u53p8WC8NAWZDQhDryjXHtkF1SdVJzgFu4eaKXgt5c6Di4KJb8SfXmSRGpudSwwXXHPs7972v9i7Z67d2RcYCpR",
  "key17": "xpqquX6VfJkYtxULGX3oPnqmeG32WG2oE9CiTkoCgrSnoSiWBx4A45H88BwVYciqyCjThK1MXigrMukGVx9YLeo",
  "key18": "3d8cJHYW5fNkQMXgcK8o7UZh9y7J56796MwHmokR3UUHsk3xQb2FUv1NoijYLJtf1dcGt1MQaUk6BKGr5KZ4cjRW",
  "key19": "4bUK3SJ1YC51gjF4JWco23wfUJhbFPyBBpP7fidDzjycp53h3JogNJr7AUAkBgifx31Tt7bBbsB2VFsWBfbpmikp",
  "key20": "54iKaUAaxfKkc1f5yqxmVodpHwYPpYdsETeiBq2k6rUnSFFaT8VFh52hv6FozRgsPvaxaJ3ihVnBpy4BT51DTGW1",
  "key21": "NzpTGSLoWhkTdyWVPStG8WX8hMS5bjVMiU2Pt9b3sGd1fbUqQPRdzpPekfuxmXuD4opFSzFdBuRbuGwEk2Ln46Y",
  "key22": "5VBGDkJ8Cq2vLfrypsbebXUoDbip4Qj6idmubmm7XiXRW4wRBCJpESRusgQzzbtqHrhp2nJvgJaLanUYEfBb8YfP",
  "key23": "U96bdYc3vNRdowKG5KVHdZy8fMYvTSKNe6yb7s1PSK3bUxWUC8qoABur7eAP3tk9zQEYwaqLNAddmJMCJmAw928",
  "key24": "5re7TPDZuszg35HKCeTN7mdsx2VBGQD9TdmoZGKW5cd5UvAU9NM461pgdX7niWBZDaNQws2ydQiDKRUK2g9Gg7oU",
  "key25": "2S4d6MztowUu4MWnHB3RpAhZFNhEBxBSFBoG9TcCFgGFWAeXcXWMjTFqtSr4NW7WzkU2ytBmKWUEXiSkVqFmm5z8",
  "key26": "4eXP2Ek6FABcf7f2xqsKiGdcNNnQ5eSCEtStJ94GH5grG9YPbmazMWEfPBMuMuMdpVK54Et8moGTQePi7ahvbRGg",
  "key27": "2qUZomk3uamtnYUTRrypZg3tnknsTUcXPJZmvT4UdntND5qVDHe7U4bMQahR5d3sU8qkAhyr6PyKMQM6GWCT6aYw",
  "key28": "2tcC7VY67Ek3mphETfHiN4cUmdGmhjiCtYCHWjrdqQ8r9fDPHizkPGq1puXSRihiV2NVa9neZcdMtSYwJ1hSsF5W",
  "key29": "2QiVbPQV4cJ22bN2os75Js5ZBrQSc6YZAsqucUxiPTDxz2e4bXgpd5NWbKrqk7ihwEH1fGUgeNXM732SneWxaasD",
  "key30": "5vCmwRxedGsxfoeJBq5fPLhJxbhCXXMR73HTpzbXb7YorrHKPKdTRdWpPp9yRTykJjvqt9VPgsCfjyBeEpuErndr",
  "key31": "264nQYApCVW5rM8VZVAjWuMhpSQyeLwwtxUuTDDJztzcvxjj6Us2nvPBRp9yNBaDAt63DzT7n1Dbdtn8D1gsNZi8",
  "key32": "5mF5FnMLHQEHTJBnhTi5bJxVCnmNG7rtAw2e9SnJap6mBcwpV6vgWjsJHA91u41emTuThZD88AAU52ZezLx3Heqf",
  "key33": "qPFNQ8KrdNQHabnYAicgtMjtDXY7YhKRPNfN44DEGLQiaMr8qcJrXhat8rn3CVjbSvX97VuxR7ti5kXv5AeBLvq",
  "key34": "55vhr16i32VeVo6xSXSs9hu3FnfF1bGHFqpvZj3ULkUbwqqCVrhS9k31CwyL4UwfiX1Y2BrGHykA35KVFNxNvZcD",
  "key35": "2ZjVqwwMNt5Utb2Y7WyjtffzDjjddNagxfYvt15mhV9XXi1stwCVNJyzUgoqyCbU3Npyp2WMnWXgG8vtAYnc4bNr",
  "key36": "3AiQDUcniQoZ3Y5vynHjmeN1Mv9bk3w9bpqvvpUwXjyhBik13hQKrHwYoo3GaDKjWQhKnaRxRtr5MaxTwShcshdF",
  "key37": "3osVpFevMU3H7tFZo5MMWrSetPud6XhFJ7F5VuqdDqRTf4FGrtayyHyhZAV6DfzYU7WnjTsbJtgi7PZ3tSdbQKiX",
  "key38": "2s5QDXAAwPs9Nxb9TV658Uopwvm3rkZSaXKzcYXRFoGoJdGir975dB6Pu9NVCjaXLEoSwGjmarr2KzyE4gsNg18a",
  "key39": "2DjwHXzFyS2gAjXHFdWmduXQmjJ3hcW1FXUzVcRq97EUZd8gFufan2t3uWfbyPutwHDkTH5YmsUwPBhLff9TYKJx",
  "key40": "43YW7CRrCLzHvtT17pkAWoEUYBFsn5cNQBvhCa23JiZLCoJZuEiBbVgFkMGbjCuAyDpKjffujH1tyuxqikhkb9PR",
  "key41": "5rEZB3NGmyNKcPhsvvfacyytd1nkhifGSDfLWDc5rQP5ZNan7gBHKdgp1aRZ1dFt5HZfjJjDmrzhgaETGGp8xN4e",
  "key42": "UDdJWS6QfkenygFMBMwA9mrx81MuwSH6wY1X678TK6XK8AH1BmmuDQkdw2ynbytK9LkFbmbURUZprHTdMgsZEWJ",
  "key43": "jDihChJUFSRQqnaMiNt4z5rtoUya8XAA1BGoptQTtwLLKpoHtXZvLX7bDZnUTZS5XeXGy94ZcUCxuXsmiBGiFuf",
  "key44": "4juhB4TnFhBqBdJaYfv8PsQThFSbU5cprSGviLwHCgAZfSFx3wt7TLyLqcGoawpKGHoa1CdbAFPaWihMNJCEGYJE",
  "key45": "5KpmG5pg3vfPe7VwFRk5KxwdEVP7urQYWqRZtzQ5XgiCBpGnFEfDioT6rTMAPfx4kroogQ215XmtUFp973Fajzz8"
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
