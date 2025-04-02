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
    "5xfNvLDbMYCH7T2gymCcaigdtCCum8cZvpjpjEsg451bsTtE8p45KQzkcafVhfZ6kxp4bsHaUiBcxV7akbWuNmSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3vSJ9zHJjUh6qrdJ9y5rj2xbZ1pFFhLZnF1Wd9FeXMyZjrYLZwApZkLongFZp2fC5mZXixauJg5QbxFsjq1n9j",
  "key1": "21z7geCFDZJr7NhBsxdy9ttHFaUZFPPuTw65upXrN4yi8sKYhZxSEjcvnbo8PTmFXDxuDXqVGKeUYwQFEjNzruH2",
  "key2": "25gf3AKwuuFFqRcPSeDpDkKwSTCBMwXQUMVHZR38yXaMzJAkpoN4cG54S321817yarWH4uZ3hK2RBuM78TyF5n4v",
  "key3": "65wA31jpjo3VdFaoEzj9cqnvfiVkUcgZiGGUWd9DJb2uHK9SY3BFkPhZHbQTEMQCY5wWAfH21x1dUav8E4sRtha8",
  "key4": "4qbjKGyKweJpdyPWE5meAk5qr5T5kwB9HtskTuw3DeD2gxrTjQrERATfuXA8a6i2ZYyyWzEPNoVkYB21CiSm7c6Z",
  "key5": "S8GnqyzbQuzHLKwtduFXu75mRjFe4BjCiWoHkzBA9XxhZX3x9JY4NudFQ4Ft5ywRUrRoVukkKqL3niQwjhj42Xg",
  "key6": "4peZCke5CfXSLeYnPqadWmcg3Z8QFg1hsfPwUubWxERFiXjRQ3PcFkXerzqe7mc6BYrRe68zrxxfJWBJdGKnbUs8",
  "key7": "3CWYCbeoCQq7nX7Dey8UTCkdTktEHaHZ6Q1p5wYTHu6vhSj1oXP7saxB3igbyywjSJYomTFox1jTkmdKseU5S7YP",
  "key8": "endwher3MzuNmBjXUexVbL9sbrZDyVTmnotWcnk6Y66a1r6gxqe8UjJdjE88p6ExmEs2SVQjbENKmxqua443RDg",
  "key9": "28A1LBFbJNsMwvcv6JPN1sbd2xEUdWesjs8pkBUXmKH5VTuKzzz7zK1f7qs8f49uRPuKvXy2dTVksa9xHWWrtNE7",
  "key10": "uxQViTJXTtAyacAntuoBvP5CQqpc63pJ32xTxp4MJoXFeEi8XMJEm1VUnSAsisEBCb7RBAmBPtuZ3Jv7iq2Kafo",
  "key11": "2BEuZXRi2ThfcjnCEBzBjsNvwEtUsoyoaxSgcfheAbnM4SuevJtUYsCQ1RXd32ysU6MXxpdouYNCWteBMLZeHyRH",
  "key12": "5a5s7z3dxWsE7cNbRL4vRtvt9UGxcscGFqsnCQCStu7X5fFzB7mSmVt9j7b534imJZ9RHtsEHBhTwtoCkh23azpP",
  "key13": "3f88Kd8gX52D83q3jZoT5hZiPgZGhZ2nACTTJispFEz4c1uWCdPtmhNcKKVVrpYWjvTUyYatpdQtnUUehiw6xXe8",
  "key14": "2cMowrBHdsHxZJ2HtiVaEZ5pbUNrcGXSvFUoo6q8jsEmtPxkw1iCf4jj3wAzieEofSCnruF7YW72eJBtNev73qaS",
  "key15": "2yBDKCNoeqBm93HhSCftU2zciCMgHC65erw5f6PVdR4kFhDmABwdNAtcSryuTCDg2yXTCYJrnpa53FY3Yh8GT2Sn",
  "key16": "2zbveNjqD2wpTn4jDh18jf6KCbtLTfrvQC1xCgr9D1MUPTFQAK7x5bmUS1vMfe2BUAca1pmcpka48nPKbhbMcxoN",
  "key17": "d5dDCDjT7ZgYjmJaG8ucyhMfoGJGFvAv7AG8ex2cmHb1Riwm7WUkRaxAtT83DADBNcjvf3doUQUdKa3wUCZFKrZ",
  "key18": "5SpyNnAoaw3pypipZCVx2Gh5dgxreLCjMmxtCPCssXZ3L8U8ZzG8TYoxCM2QDV1wU6KQhyJBhk7p2hEVq8Q1ET4T",
  "key19": "35RQw4G2vjEodCqDnGgnsdbF3Jmdbwd4tm2uG6tGwKcua3f8MYNJ39G57KG8xU1vVmxfUuAupFSQqqi2cAC549X3",
  "key20": "xMKrHzLFt7hQt3DFhwxXeyrfTzSkdBcAoD2yabdqYPQLpANhuborP7dbVmXM3zELKXaW7jKsSFcWLaKSVFCQG1o",
  "key21": "5tWpJ6HPw3akAN6JPXVd2vkC2N8v9HvKgHnr1jChpYHJsGJn6Ujs2udx8SZ6z7QJHcYdXRfxmRgijY4x1jzd8xxv",
  "key22": "FZhuzQv67BKPNh5ioDfujttu5r7ZMwV3EJRzhQa43EigjinJc1R5agZWAhKSpruP53dJrzXeKcAM37UzoHnyE8H",
  "key23": "2cyFBkqm1LN4qPvCzzbGFPBoE4riM1eYX45LufqLjenfHcncGNavTNKtiuzfYGPSATs1fUBRx6qPyDvf4tNGyTBX",
  "key24": "39spn3qQiTBRMRHMShCz42KDvZWozCrpfnBxDaJikfJFH7GzERwWbFxwHpHgkipnPw3VYikFsbaBABo5HoN68wQ1",
  "key25": "36QjSUVq5YjifphUDgpjjDcA1tayx9BWahGLh2xNcaDkvHyPQsUJCKZvsNwwVFyhH34Cb4w22YSi6XFCghXafZvP",
  "key26": "28WHqpaxCBRXRKq6pWpxoRF4cLRBCDbTbTa2KunVPvFtRkAyAeHvr63BpHMaJ1P8uhgvzEJBHou46rNJtWVZ9z7r",
  "key27": "5o1TDsaAA5CbKV96XtYVTieJTRF6JDCd3DU9iAYqasoqzfGidswAtgvwvBok27g4G68beA7LUvk3KjutgbLZ4YRV",
  "key28": "EUwhwGRABj5piwrjTWEkyeJ8CKpsyz6ZTkhbv6aRaFo1wg14YFR2CSU7f48m3YgWy5EEcCvcpEyZccV23Aymm8A",
  "key29": "39svfKEFEwqqDgJXWPvQd3866vG8Gz7mmVqCr5VHGajXqiLjgobAoeVDG64yexRYPTkmojsw4i5T1bpZ68wp2MeP",
  "key30": "2Rgmd149pfzVAjwyigng3wWZbpqE2YZeoQSPnb2RQ5N6GfiJbyzW2qKgPDcphc85xFZR7owCsdaq1sFWU7CWamac",
  "key31": "5SVxFXRK2vGPVusBaSExZX6Tt4uWWHk745thJGK93QkcqQteSyca47a9ozt38GE62DsjuYbHa5YvBjmFZ3hiV9q6",
  "key32": "2CYGJzjztMLxrtmnC7VE8HhRP6Np9z9ntnPS6tkHkFq1M8xaWmZhW86XqTC31oTVoM6y9wq88WUg7LjFT6awg4xc",
  "key33": "jEEf6CxaDKF2HyvAVdCNnDdwjJmQsA6qDHXBPRbrG1x9SDGGD4s9Ya4p5up8RrKivqWuR57QYpkdD4xtjekYFTG",
  "key34": "4jvuWiJVNz3yJN6yHafaeA6kU9wECbT3yxxHxfmQN5sDtHEcU6KnacwnMeLN8gZHayyJiQnuSoijZEqoC75p5YEy",
  "key35": "nEQ6YS3xx432yWXJVVZgxpxXGpj6GUTqZtBkxs5jMtc4DjyJMPr3QUtMCHaDexW3vEWT75j7Y46uTSBdH66bN8L",
  "key36": "5gN9kBbggyD18LamPoSh2ug8khCSkrWrjb6xbxo22UsGUm4NVxxyPhbZc5RUX8CSGrN6LfGJwsZw58PS47ht7GaY",
  "key37": "2yUuZmkksJjJVAN1p6Kskf8YpEuavSw2odNCn4RrtrHhxVgPduEUPy366y9TVKB1FoS9wL1Z3EmyVGwGrcm5v8pk",
  "key38": "5mBRBviBcbWziyu9zjfEuYJXdy7QqK1zxjUkji4Ngki98yDyHTze2VeULFk4QaP1BGS8odCPjiSr11XvNKBKJn4t",
  "key39": "2RLkJh7LzRLiMPBam9WCCZD96Hi5wqYTDbfMBjjkrU9yAebatyhfobc1pDfxsgZzhSzgwdEhffQQm4UtuCzsVhn3",
  "key40": "3d4nfVBRHiPRuZMEd79y1q8ZSbtxg5aFe8AqLW6NU1gvAQPynxj2CqMGDqdKFNTVLhVFNUDkQ8M17iDVURSv6vf2"
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
