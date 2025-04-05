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
    "3V2TZHddmk8CcnSDQpcx5Q35iWyvgs8cXQ64QqKsA9FvXg7SWAEyfjSPerA3SJB51A98ceMwYpuYpNMb2mtVARVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnoxAED6gPiFxritY4ktvMcEfZKuspMRHNf8proKLTQXRrywboLMUNcWPZJCojDzr11PjAPZ12kQP9SqjtinRMc",
  "key1": "3HD9GMV2vxaW3gqvuW4c6pLg8SdDXT1mT4NMijqUJdNhzf7cjpSHLkuuhphpegGJGDVFikJHpzaY7UueNkV1XXg1",
  "key2": "2kN412qXMBh3wuvK41FGcwKfcgnkx8j2Yek7o7easZPKJeCqqzcq9H6RKgr8GdFQ3bGAcWSiPPwF5Dy5pVGoSgSy",
  "key3": "3iRrXBbzL7ankxxkyHiBwo8g9tqJmiKCy8PSNZK5EXq1RbxZVjEjH847C66pQRvbsEfSauuwcxsFAkK7j2u9Wfmn",
  "key4": "3Wp1SbtKsAJEFu94cxRiAizEVtuRyG19TRxcutPYLtTUkkoCwk6LEm8qpE3guARtRKwJ1GVH1wSz6p4Xuu2ew91b",
  "key5": "hM1ikapYyLvYbz433rWCTVFK6VAkJyBPTzyi7gUEeHvK46zn9ZxrwJ1M6fwnpC8viekP6cKSCUVm64oMQQMT2KC",
  "key6": "14s7f65GUms4xngGiojKj3KajREKLwc11eFViDzNxfrd191p3HmKmvTsB9Umhdqo28s8KX7S4fG6vQhAnRf5xJd",
  "key7": "5j1UUX5ebJBkgdMaex4yZ8wUryD3QKvheQETfC7mVj5PGfXRHBua9r2rD7DpPkXHupqo4HeSi2LDMYJfgm4xznak",
  "key8": "5yMHEAxQZTkbQyBapCaHLGFqGvYUQySUPRbdB3CeGqj9W4ysaoUP2UvrCjhHfcVHmg9RGqwZxmfuoKT9zPVunHHj",
  "key9": "2LMxtMRdvzrSaPVMV3YY6inJUn8TiS1UJGVqxwHcu9N7UPgLJQ14DDfVCqSrPxL14LpdU7FKYhh7T7ABHMgCDmzk",
  "key10": "4TwznakyzQuNouCozHoVJu1CngAckB8bqhde4P8b1FruQSNHiiRbp7U1a7BHtcaJxZNuy268mX3xL82TDZZYwHAT",
  "key11": "be4Yt94B2ErZNDWMkfikawv9F8TuTa4oWHzBTcoxq3bmHmbJXuASVNFo2Nfi66XfShP5oDTvSUZF4vuuSaMCesK",
  "key12": "23NR432UNwBNC8azwt9AEppKMpRyYrikbU5XLGAZ5utQtBg7HioZx27U6f7WwHG8NDkchYiq4ytbUj2LV9kcZYbX",
  "key13": "UqZ655ZtFqbQ41soe1DnoGmU7z8BpDM3424B7MuJ4rzJCLM48nmMz75c2YzCepaiP4uYY4RynNPfsuUZU2vJ8wa",
  "key14": "pwNL2v7sGCisK5ZEmuWSHoKtWjZ8P2qSnbnjVtRCbP5DQmFMBJwZHkkFbzuDd4iqTAgHWUeKnKibdLLb7NN3JLz",
  "key15": "49Ey11BaW1hovNWFaQGkgVMLCw89SyCZaHNvEyy5Tpnh27XpDrWLWrjYKjyhMKQC6RHWLaoyfhH8EYNxETxBDo1X",
  "key16": "4rS2D7V9Hp6jteFnTU5dSoBktfBAhYYanauWGAQESCYdTXWgwsrTrvAzsADsFQmruJuf4ZP21GmF4ZnxsiHWmbRg",
  "key17": "2wb6PNWcCngSXQNiMUuus8evJS71nxF6Ks4jvRaKUiGoFS2fd5J7sovfoJ5VRh9d7cgEHqdyhnXewtM8AvnUYzgh",
  "key18": "5TSk8XjAJrCAQS62xcopVXAnxnnb4HQ3V8zZkiDXPXz8AY4qay9xVp2xBveqbQg1bUn8gJZfsr2cq9fUZkDgJ6kC",
  "key19": "4AayPcZpoDRW33cyDKpzLCE6i8VCkfuaN5BV1H4NLn7B6kJLA4UupM9dkEenTRe4pgC5omz4yEb1ME1UceLpxkwH",
  "key20": "2pE8Mb1eKPY5tMK8QE9quUQCqNh8DV8SvsryRCSgTHozXgNLxnw2p68pxxVe6giM6WYFqbnJcchVkd1sD3iGyjWz",
  "key21": "4hBNrbSXJyhUjyMML2tNJdAP5W7vDUYDT7mA1jWDiYHevHdtv5k387AL1GZtJpNWhekCwRVoB5Q29t4BWwQso9NR",
  "key22": "z6Khi9gYooJDyh4LbFsH2o32252BfEznmNGpQg5uVM5wcZi39RWqbSTJ2BsKHidT4bFEmYwSfCpsdu58rKmZVZ1",
  "key23": "5i4kbdBp2nxEtzMm1pBxXPvxwtfM66wqtzBhDt37hzmZz5H4MATxbLZtmegSeNCuiDVePFT2eQC2TEH6R1QBgEVt",
  "key24": "2TpviKTA1HUAhQaCJoav7f2yYWKNFSxbShxtynTUi3EM5P95ebpHx9qg4JNfrZqk7SzKbi5ttnGFh4ieF9AdRMNV",
  "key25": "nKktNLY2Wfpt5Zxkc8sue9dLb1CRZ7gMmLmxfQLoyZ2aA2gvtf5tnnEnLSzGn1cRAGC1zNFU6U1YNDdZBjKtixM",
  "key26": "5wprH3VYmwMa92B1kVxBP38NXxXBuG7MhHjjhER2LfGKZpMjroqtrbcMQQWsp2Rn2UpwnqN3J1uwbVyoRg1J4bhp",
  "key27": "5Rd9tCjRyDUFG9vqf7oxvHA2dunE12QvpBqjCgrn71VXh2wHghntdYip99mkpRsD1vFannehjs9iKDr8ikpWagys",
  "key28": "5b7UmxmPYwFBMo5TMAYxUrKJ4bC7aPtR6umsPTncQJsJ7LfucT4VRCWBQyPnbogqVXZnF7fS6hNgKpjiBbwQTGZF",
  "key29": "2XmiVrTanb4hVtq4GiRweRobYaAr33wQiZWbHZWVZ4BZqwg92uyQ4jdSXUUTB6VcqmE5UdMWJNL5KKbi9ZDcLEdc",
  "key30": "32xBLbzUt5GAaHWAvyHB8WzwF1L5caW4hMPyB2yeaz6xQCXssphU3vFQhj9RFqygUxexTK6sF1HmShJTySPeyoo6",
  "key31": "38ajdk7UPXt8QzqrftcqNtBXxsVC8JgGwBaNzYq5iGF4xDk4Qbi4NFTUB2kWHUPPDS8DdzzkvkbX8PK5L3UYfdW8",
  "key32": "4dQQdKU5ccnhNAYPhSoFZfk4k32G9Ntbb54C9Kg3LSHh4ATeJ5TBvFJApD26TdpHNAYUT4BBDQGZf6T7A7ratiK3"
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
