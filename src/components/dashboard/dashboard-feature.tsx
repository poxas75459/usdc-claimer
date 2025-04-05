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
    "RYjZ3r12f4xRFACDaczmv6AKbTFjFJs7LZsPh8ZrkyUWC9ysRRej6QrcyDVndUivdqNcj1pJtSppMGWTKrFA8uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Za2ZhJ3DX9Yyk6nGMdoY4jDNDcRcijMWLwtAUtfNSCV3WNX62E1dQX62vA7jXtd5Amz9YPNiA8Unv7iDAK91abn",
  "key1": "2fNJdXveSPz8YYxLVqJ3asWQyk4GjDs77KzAhakti8PdXjux7r2YvvbjXsAnRRtMBxDranyRE6JQcfmMwQn5Hs4B",
  "key2": "48iCEeah2WEVF4KaDEys2XbRYran1S8RCArNfBASAoYA7TjjuQib3X4JGmY73PVHrihWFqUP2Co9vqBMFfkjbKEo",
  "key3": "2TKyjvZB8LbybmpLRz1DVoc1vBs3EP3dd5AZyHJiHEqMJf2FWX6UYjmhoRnELBXVJVYFLg1GVtxdiQb8BSAadqcP",
  "key4": "4FncDNf1nhUKccMg86haWcV6ZQ3EsAXeDDBVbbLiT7r9j7feNn7FYEUJUe1t55qva4iuUaq1d3dNYegv6aYfwhgV",
  "key5": "4pjPbW5sGJQBJUSHDrQRFYLPxvUXQZmCWCBeyh5gUwpqHVQ19XzxoHQBRCk7yirZHbhVwD4rA9H2Jz874Rz5siC2",
  "key6": "2vhKTnnE3NUZHrg6qcj38n8uSKuMhs5uCSpmGMY1eZx4gf6GszScTaNhwsmiRrvbjx7VtmFBxHqFGiUxoyFeQ7NX",
  "key7": "2n5VUA3AkR7CkST84v9VgHYgon9585eDtfWVJBYuuRYejfyfxoguCoC4Yqq7qyfW26RGTVsVhKygpd69euga3x9U",
  "key8": "2E4XiAbuUGw3LiusC6bfgPoJpXBm5cM6ct9r3ybDZTGAQ559qjZobRVh8MVZYnhHbVV7WMgj12fdBDT7c2Grznb9",
  "key9": "3c1ShbPz6Kh8ELqZv7Etgx583q6QWgiEQCGrdDgiqy5YacDaHMrmyVpg7zN3wjvMFWX1kpSMPmPbbxRAixMUo6V4",
  "key10": "2byjnJFg1JW6RaUt7yboR5DKhDDUqMcn1FprP79Q6S65Uh95BWMNNj8CjWshrjvU4ZENT8HzZzskdrr9tfgRzu1q",
  "key11": "4Ww6UV67ceat6bXHAULMeS3MQ6JXh5tj4UaVfvbNfhF4q61jThDSh8BJQfBynuwpNtBZZYb3G2yoMGBkjDRpZavM",
  "key12": "3bUtLBxBEzUAUHiSAtbGAT6f9Ck3GLdsiYcFscE994sePtw9NzdKjeaTrQJQQv1PueQnakQYArqzBvmcgJvcsVPd",
  "key13": "WsLbuGGTaNq3EHPt9jch2mvrU3i6nQoZEZbiyvquxpjFVdCWqQ5nANo1WQ1PPAXsrwVz2Ty9b5Fub3wnR1L9rGx",
  "key14": "9c4MVS2kSPySPbpwi7yfAoLFFK1du9gcp2W8LQSPutTboD34T6S9KjyQwmpu6ZXWKCmjge4DDTpCh7BmrwoHSK3",
  "key15": "2y716138rEMBsZRhSLLsmbYsPKu2cCRR3sUYYNF1c5DXwTPqMabuaaGbsB259QtSmcPqListACH3CbsfoZkA9Vd6",
  "key16": "3D7XWL6yhywisWpSwqw4zStSKbqqM2xxUSzKPXXZa4UxGWrheric3meHTkXy12ieP62gaDFX99padNyAABf1KYRL",
  "key17": "4MnN27uAtGaQXxjq6vuoKNHkDKA5kFtZ2fnCQF8rHK6TTvTSYMS2iNhmXoLbdJHBf7AHZLyBmQE8dx1QQU5eJCbe",
  "key18": "5We4N4XBdXHLPoUewku1hsFAovinjdG7Y12h6apGbHgnwNGLzQMcBHqTEU1NaPdTAiXGcgL8cSekG6dhsBNMA66v",
  "key19": "4hHmQZawZ9AsKBGgJUdiMWxBYz8YCK6d5buGHjw13MLtgEGx3uyDCLPMWvyJ8A9KrvcmVxpggvS21CuCGiujzBYF",
  "key20": "yfAUqE6JPdq8LZpvcpH6oBN3G5Nt6Ptb8TcvHPHiZLArVvLZpCAmP56gzF2f4WR2N1wsLjDr6Xv2d28uDDHayXR",
  "key21": "122g5FvJHgesxqrVyMQEnvQr5e8hbibjZaTgX4uk8LR4fLrkhH4awQABjTpRnooBgyzJjHYeijxeLnrPRGPRER1j",
  "key22": "58ZdvCcPwoNQecQV972eUjviKZ8GScgLV5USvr6Ze9p1E7vZ5QV9oMqGAKzaQbCrndqmEAHr4qPmy3e8cHwKdEzc",
  "key23": "JWRwmyZgWnPJD1pDtA4TvSguQhzeCcvdUdgxWQ9ogCA5Y16E62xepr27PY11YQ3EqbQS93ER85phWirYNXrtdS5",
  "key24": "dcRGEtNwgsvxLF1zk3niEoxsw77MGJYeTsYSvCXL1tdL3M8gdMe8digxBe1PzNWrDyrmKs6KXF43XRddX8QZSwv",
  "key25": "22fRSJzsSELQUh74rwpyaRUb2yX5iJfseQxvdgw7a3EM8cx26zjxXQHE4HVBYiLW8WM5ApeiMBT686ZaY5KqUCwL",
  "key26": "2MyMafftZuT3KJUqaVFZ47rcaAUPM55L6PSUJ1nxHELzAnAetLNirjG3kNULtcxPGi6svxeqLKpRnJaGerfmhnPD",
  "key27": "3Fop1heWU4WSKhxi5YjRRzCjqrjQ1csviDUtEwyYoCC9v2E82ffxjuuYD9F9AFQ1EZm8aeBUmTh564g2PDpSwccx",
  "key28": "TbBmSwqbLCk2QS1cWygBxxwL3zDhoaY17U62k62iRdVRbFMMPLFHtDdJHbQ4X1Wgvq5R7LUsajH3nds94jpDLWd",
  "key29": "62c9UtcaaZNEKckeMLm2pbR8F9ZgYGHviYsaoxks82Hw6jv3qNz6S1GLfE1GAc6vtSGsfDq8whXnPmck32qB6BZa",
  "key30": "4zGs6NVitzu79nYzhGWCgVebzutQGFmRL47TjJYAFE8NQKTbYNqFpyf55qANr5gTiuLLhGYH8mhv98z3sw9JEQRt",
  "key31": "5xjsC3yUUNkN5ppqvbXHGo96QaEVXVp3VweLRKi819CBqm4czvs14hNhR7uFPKgjkJkbjiKVC4cgan8vqk3nj6wB",
  "key32": "3Fg1vize4JHrMXXWcxeigvzq9VKWJV94zx9r4mrcWoRsyZcWnV9GgD6XcXEBEupStYGg73L4344Bq7deqLaLuZQ6",
  "key33": "5EgSaTXG8bmRjodK1uv6mw31AAc2qLL9aoVxSNgHNQG9g7uKrtcATAy2mVQgn1JZiBJHWs2yocViGA941oAFYZnv",
  "key34": "4BndgUEfU2m9Q6QpeQ4GkEBeceFYRJH5vgLmB43zvpVKnj3BBjTadSMJf68ckA6stCKvMofocDEVY4aeZEMT3f9R",
  "key35": "5zrT2vZ5S5GQXVMpmgn8FcefYBLEk2siYGRtQ1dC3uJT1bjc2H4zZMcVXh8xPBr6nkyy788zzYcjgjxznLutmqj8",
  "key36": "2Y3tyguTZir3RzFgcuDiU6f22UstJNe3BVinHLV9zeJ42pEi6yJuySBQYqWC2LujxWsUWWBiKvcJrhnXk5UcrVuQ",
  "key37": "2t2qb1r76R4QC71X8uL61DaEhMPA3thLUKeEDA4WGxyrkDXyPsHka91PNC5PjBAa6pC3oqJFHTG5D4MF6YmzkbdD",
  "key38": "5Z5aX2dQXA7qFNfoKTJbVrvDFnce1V6a7E44Z5eXHTNTHJtYFXAyUotnhadztzSiy2j96YWETTmUSzEfLGESYX1L",
  "key39": "4qmkiWC8CuLGEPxc6KG6uJwqV1TMFzdxEjar37knjfzyfp7iducbrSaWxvQBc1YxEPHoeE5boSyeH4yWzk1vANCy",
  "key40": "3hmBQ9uGBymVpXWbXWGGZwzPxLr6j4ExSMeZSsCYHCwfBAxUAvSoQCiwuTThvp77hEVTU5A1JCGkTw22u9NYCGZ1",
  "key41": "4DgpwVrfrtZY5iZ41Sy4qojJLjF4jD3x9m9goHv6NbY6XkrwdpkkngGpBjZecep4HuTwgzq1JxmttSqZ4GpMuRdh",
  "key42": "gpVzUg4hCKtZ6N2kRa7WMfTAn3rgG5KJ7nV6SVRQzcGcu7vmsEEYh8YKg9sau9X46fuHY9h7qgQCxVERmxrDoUW",
  "key43": "4DNWFkGBozkjQ3zfUmavqTQsw7ZvBspdHitU197HSMWG684BTtP7z71Tzjt7SejkjHyposKa5Ew3Hh1bgAWgbEG7"
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
