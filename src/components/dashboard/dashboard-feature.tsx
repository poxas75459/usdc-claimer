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
    "2MHxVcJqxMCn4a9eKPPJ8kYxMbhRZP3TcGxutsBJ5LNeYJsj9vbcjcQe6BYXjNSsg1zVHqodkRoPTfappSZPxVKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUjj63y7dyC6QSDTRWvGQSEeR5vEHbHdad5J649bACSvzoKaqG94uy5NGYnjcXEkD7Sqxu9DD1eS2tqj9EaWSqM",
  "key1": "TRK93PSDhGUjwAmqn8wbZ8L55UALCavBPLBghdNcM6D6P85xMXtG9VggVBtcDDDu8bt82GSRxYt8TG4QFvGXxYv",
  "key2": "5VQaM5u3vpLsfD5MpCF9pF5wMiQB43EgHFNLZARHphRi9orX3PaEEc86MFhxLRAvfFGqUziWnXvXoJ5wu65YciPY",
  "key3": "P5czk5mrjiBxDoKpkoMRCmdRURPoLCphozpaEXqi2Eqjk7hLNCS2HP84XdcU8Wueo68Ayv8XssEzKV8U67a1thi",
  "key4": "4ijVcZdjKjQQYLTqW77wvtUXVU7kWY83SdYWZTazgpFtTwFF96HDhEErJn5TUgs2pMgbtzxxLkHC6czdmS5nnLCH",
  "key5": "3NoFbZW4Jcku9PD6hUYzBW3i1oJMkj559TABhzXeKiHQRw6BzdU6QUzs6DVbFDXpfeCqTRw3sz2rJcoHwS4T8uvC",
  "key6": "4RAGShTLqcS5cb4zFMP4ExdQKzuvSSXHk5ythwCQARQ5GPK56GbWdfNwiHTN5yiarjUjHdTzCyTdqp1NSCeAdhqh",
  "key7": "3BkqMAicc3CZ7mTyZ5Khem5x1BtEUdhjsp2uiXBH8ov5AYoqSV6PamEUmid6h8Pcnz9yHqc8DfUYRWadzKjUJk6p",
  "key8": "2brmbS2R1EZMFBXKvFLXpkUmethNMfg4wyeQFuuemRvSd2qjUisGwsfiCiR5V6ctp55VQFkykjvUPkcbXYytMpbq",
  "key9": "3AqtKSNZM4fbN8gsUMuGQ83HsWaKZiX5LoYQBnAbYYDorXRSqji6YAKnwWVo9YFwNRYhuENEPaWrGJhc9n2dfMic",
  "key10": "2uAkSPrcCue6DLpo9gqX8c7RPxub6KQabPwDkKCVFUnxe37vUfud19nhv7X6r4sPnu7TuZHiGiBWAzrKi1yfHnAV",
  "key11": "4tqG48weQPtUC9rN2FyuLc9yPMutdNFVVcjCRby1H58Q1K4x4tML8n3Qas9eR9ZrVnMMABsbdougwhFyFSEc5asv",
  "key12": "2eRuSoDapYzkqKVpLZHbuHztQ6tiJCR53wzAGHJJoDNKtDL28V8y7qTQaEQ7xYtcNNTW6h1Db7MSLfmkDty4CU3s",
  "key13": "4yZpwmZQRS7SPH5vQAHhx5aN347mgNo4LJ61E5VB2StU4LmQ9oNz7m7gdXBDquJsJq1Vh9ymPVcZvnZmT282SHEv",
  "key14": "4U6T9JqVNc9TasPTpcTiEgYVBf4FCmbTugkFWKMSk5Fn2kdK5KPpnX5VaqfchzoNHRsUnSeBedzZZdtL92R8wzDy",
  "key15": "3jS4rwSL9H1khykrwsQoARiLWSsd4ek2hn2Eug3PEavG421RDHtuFZtUfmX1Z5e5DVwh5oSJZS1b6CXcr4DfZMLt",
  "key16": "3UwS59SFSAsvAcyvz4J39QLdakbVNaXnhBymzgqwLqKhcW5AxtsPQVw5LBimoikmaWWfs8zVkBWEYsYTK5XWpqVK",
  "key17": "Zxk4wamDfgvStELyfu8Z2FD2ZxPt3PMbVM6LFjNpEZwUjzUT4Rxw6VzUxEocfEsBnrg2uQuFd1xJXMjKCLqxaAz",
  "key18": "57pBsNmCAdo4yQwBNw2w1astjMYkVKuHE4HzpCrRvgAZc4h8DWcjvEQAyNPTHWSvLHPrncqJduZ8gDqcQgpTucWt",
  "key19": "4D71epQJiEuwNwd77ZUADfSAat3fHUBP6DqKCDviKevj7s9DVnEoz7hTSJ9xXT3jHHkPNLACeqDL6BZW4Pa9SS6V",
  "key20": "4ts1QvSAh3kXTyxYjWfPrXLCzzii8onjy2UJr4BHpZMrH1rJFA6wuvUVhEdp4r2WdScfisCSvJWGCuRwsHNgpzr",
  "key21": "4yUc62QYDkPREqe9juuTuS1VQaePQx1g8WDFUMoDuMWDkUsKcMDuS8UrNr55cLLACkZG8fKYXGxckgEuioLA5GVi",
  "key22": "4cVnSDZGM2oo6u7MXBqRUs76AcK3DKxwYuUC6qEgb5TYKN8vkL3Sf2uaeEk6y1x7rLqXaH2gStLVVrsTfEkyWJGW",
  "key23": "4Z8GpH8kSX3u54GquSuZtfNq41rjzcda47DYC7z5RGCeaLjxucLXuaH6aPdgEwKoARTuwdGpoSNvi5oYT8PrcfHr",
  "key24": "35NVnfaWLZ7Zpeq4AiKFtLFMHVKJBWajnBKvRksWWKeA7yv57gw35hTEY9QjdGMT2Y1TaxH83JMZuCHAK959GEkC",
  "key25": "4UsZXY5oh8aRX1bTjTHtRLKV1fhYypTBu2kL1EPSgkRkzXLoZVPFRmUMmW8Sa5yNmC1GCukR1M19Zd7D722PxaRb",
  "key26": "2BUSuUiKGKMucEQ9NH3TQfjAyY3h7zCzue2ikYvJmXTNoeaRYKHhT9KqQAgZBsRU7mffKhrbqeN7ZhujZuoYy2w8",
  "key27": "2eSHzyxn5PSKrz77FpVMQZc1VTgcVRW7mZg6ysWi6u2qdHh6PrqRq7pJtg4grkXi37PbsrbmW3pK51bxmYw2BdKP",
  "key28": "36nYoAAKghbEHrRuBZMNq1oiWfHXKDMKBSaYTHyBGm2FB1zu977TDck12ZshdKrFvxEzpefwgaNkBJShbw5wFtLr",
  "key29": "wHm3ewL7MJDB7niBzd8K6UZ439edHpA58uebTzZdDctLkAUv1WzdFLSsJrBMCnEXHxMot9yXS5eMRyMUfLgjQfJ",
  "key30": "PNAWpCgRgmkcQrcN6FUefGfs4vEVDezVfS3fD5JVrkWWURVjokkX4TNuJ4kd3DVk7RUYqths7mtVAxPFmVrU33e",
  "key31": "3ncXP8K83oQzYbstXyhjSRMntBD2VpVwML5Hc2Wxgis8EgYoaBK7VyzwQviC3igpXGTkTyK2LyWqtyGLDJRtGUgL",
  "key32": "366hvF3794NN8UF5wfgnPEaR7qAL2cQUKqMPZqWsFYKGwLEHyaaUgFx7aXSMdwxCUMjLS3pvmzLjhR4VwxwFbp1b",
  "key33": "3L7VWZHNQMS1CQhfKc9rPwR7NTBhLXPQ2K5sX6MCFLnCiTG9UAJSCLG6swvJMLL1iNZeBtbSRWJcTxgbNCyAmPaR",
  "key34": "4djrVQqXKT2wuVz8xoabYGDLZVDmF922gmDD1F6QWZH8pGLHRQSgntfpfGRKeGqri2m33ngVbzHvyyJRNWtqwk3a",
  "key35": "HY6MwP4tmVsB8oURJ6LPs1rDCFvdTWavz7FZ2xAFHW4S8zwgKLyx6dJu6bacv4u25ZvskBHWWZYgWUKmQ9WGubQ",
  "key36": "5LNUJvA6seyA1dxrAkbT6um4pec9WdoRztkUtBeZV9xKx8YsrnPKcV3FuM5N74XFiicUAsUAeXurPGf4iNXeQmrB",
  "key37": "8DX3azBqa17ZtLN6P18jJt6yPcr76w5ACuqeg2WskwPaKEcyZuPjHm5chZZXxJSRLHinJjstnfVHoRkpN8FM1ZC",
  "key38": "GB3urwNTFwPMQKgQDMqYE2aMVp9nsmH289k9FfHkfLxXbWbWuzxaJBugg2h9YyLZKybm44jFaB4sE8AqAUbxS2f",
  "key39": "4sunS7XEwFEYuDQhsbRxhcppDNxvafQXyxy2CRas879vgxVuw8nycuzq5y1Ej8Uwz1GYYxEzzqM5uasCF54ZSK97",
  "key40": "9ig5YDQGanaK8DH5yYeNAEMAEXFeDm8322wDWs7Qj8XoUmXzWrzaYsEv2qe8xUVGJXsGaYZScDkeoBVqv5wLG2v",
  "key41": "3U97q33e2numimfwgk3TsgHcmu9bbj9sX3YYAWB8CBN1iREa1sh4pG5uE3EgbrrBWZxLUHHrpJsG9ioNFzetRF2q",
  "key42": "5RyzyoFEKQ8BrkRWBHp147Hgr4FC4DtXgNKFgwXDgP74hcetShrPSKyNyizLeKpYg8CqKcgdvvcBmFrH9YWt2du3",
  "key43": "z6LdSHWW5zg7YWiSHhfZMoATdpNYhB3wcj2MP3RK3bkjiwCL4ENNjLcnJfjULVhGgytyQSVha31Jm8mgxqZRWHM",
  "key44": "27rYdLKM8LRYxYweXMgJqXKe8ocHuPN6D6d3v7K6197imTE2aPrdpsbdz1e1pMHuKcH4NsQawLD3SKVvSsqeLMJP"
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
