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
    "4JHepdkXwewUWWGBuaLUBrD4b6vxfjheT97uk9ghZNyrNvFWazE6gEJtWyA8fSj3LQcxW7peoDyNsut72BhNn6QJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4CtFXZ9mxp5c5TjPtFEDJ75VG5JF5KhS8chUuXfN6EDyNxqppaozHi9hxXpFVRoVENEhRhgu71DZ42NGc6QMBD",
  "key1": "4ioeSsuDhKjKJyBvfS7RqFYneku7aV7FXMhWjKonYViL1U7GWWgougXczQZojphqG6zFCkGPMbTZQWjjwMsu1kTL",
  "key2": "5c22uv96FPZVfHRYw2NnhFtFewoJC6RASDRhanixMnpG1zEuoEEedCUx3hkBmytbRVCjukoq25CbboNtcAzDJEm6",
  "key3": "4nwkh3Df38JPyY8mSw1wHyxWqWrdgREi99deJRqkb9XshGMwHLKiKRBGu1mTs6mcv88QCCq324uhNoBEydPZPsMi",
  "key4": "qz3rmjJRrUtuQqcHsDU4pWPjniQo2ZjfMsZLycjA18ceysGNHMxwT9a8pdEcmHJxTAiELepWXdSD75KexgrdMwj",
  "key5": "4mc92DwJfW5qQSABHgLrSb1RHLAw5SSckrQ3KFF9WXeCXT6CVMo2NjgtGYn8c3nGhYMReM95Su3dnjhkrCXnsbaW",
  "key6": "2zCNmwqeKCxzzWZSLptpCjQMnnrRupUYFzdsdZXd59a94RmWp9cEjaNM7s4nBbLSavREy2RyfPsf2E3LaPsD2hf3",
  "key7": "4bQ6YYpqcNGdez7vHv7YLh78utvTFiUqARRgvtPmAXqyk5WjS2LQZEeGWpu36mWe8nVAGgnoTXypWcb946JhPyeZ",
  "key8": "TvWqBLY4DmpKAb8BYwwwAPW3wgjSp8JZdrkzuHRKXdmvmnKHdQuooFLCkTvYpvmq6jjryDeezVyyFS85iik9Q8F",
  "key9": "3U2z6FWyxXbFw4KcWuy197JNLxz9J7jL9FLyvRvPswNHE4u5msvKP3BYyCfWCNwo94gyikNM3BCkwHhm16wU92tb",
  "key10": "3etrMk5W1ppaXvQKoWRdpdWwbhygXTndwwqpLnenrKbArs9vkihkin7RBEM8FxuncGmhGpFzioRwuPCdNFBMmNYd",
  "key11": "3kvKWzsbKgRJo8usMT2itqcu7yUTU7uvpUb5WXu6YYdG64q5SmS34XdjogwxD39dWnCc19SVVhGRzqX7ZNmHC4Ld",
  "key12": "5xF4PgVWwmPiiBj4r7iKTjUHZsVi6Jtn5k8N3tiDDUqz4WGXDpfYfMXXd2p5Bj2Z1DGc75qmjgYgrAQqy7YMimrs",
  "key13": "fyghFcnaH1Lim9NLhYsRHvuksL9Q6mNm6fPCb8bCfNyWefKQ2rUfov1wyshuurUUwp9n3VWQPuUpDJoDDLL9sMu",
  "key14": "4SPSE4AJ9LZXmsU7tzBdzYv7mTZ8bFAyL2aUxr8NxYLC5qFo9JhBnpNCYt85HAUpwD8KAXDxN8x7WwM13GZ8VaLx",
  "key15": "3iH15AfVCnYqBf12DSLYDr7RGWmoswcBaCrUQtVtfQMYXYMcQLiP3ABbrVDErquw6GPch37Q63qQBgTt44hY8MaR",
  "key16": "4KyTEim4WSedYC6ZRA9FgyJSCZRjRw9kNco214kaRQvgGfs5Asi7B8b46cUi4mbraYg27SK7ymGjKDNMREpaWTe6",
  "key17": "SjoNJyk5BKaZzHBakKvYVp27qrpGZWXCcQ1edNrotHD8yYujSuekwJEoigwhZoSSaHgBPJAH6XxGxV1duMe819v",
  "key18": "452rREE2EdcLjX6JzoLAzBfmfhy8mygjEbczuiLYe6m9tVDjLbM122VKCs9kBeLNn7LUGVPCS9tsKHXcskNvnXVx",
  "key19": "2Atv6KBGBjfyB3EqbbaSQuqArjhGp7GnbjLUoM3ZprZ2hwbgEa944Sd1RreEXdPjQVtLQNYUsewacwBovu9mUDL1",
  "key20": "4NFLymxDvTjQagacF4J6Rf3Y1ceCmTYXA86NAiRCfEkhRAYtfGevoT6xY6Q4DgjWQ8FXZbq78FjagWL7gzrRPUu7",
  "key21": "H83nzPwSWmVLDd8K6w38EFWUdC8FUoBF4HcfwAamL6zsvs3bDfNR5vvUnjRtp6z4PbYMB34D3BHEE8CyHUQDqfk",
  "key22": "GuKwvkrgFZYSodjKuP4Q5cJzUEYuJKpJ6SqnBaCEfbEXARKNYWQPKF1XYfPSNHq6tE7BxhtEtXd9MbDu1B9Q19B",
  "key23": "4gjBR6myvTxXCpahzoURktcL3FQMT625oTcnNwXzTwqCWeJ823ijfmQrDr9osKvemxSWGN7X8sMB9QAE2dtLPW9j",
  "key24": "3v6QbPRGNqvS8d5auBeShxuNZ94mps2u1ww8zYvxt5S5t35Azy9ryZV6h2MYJbVEJ6RCjGHBbMgMDQzwG5mBLcdp",
  "key25": "4jkEbjCPJ2rcXArHPaHrHJERMspZKGjUAT3BJh7rDGvV5Kp7qHjYTgF1bXZoDX7AmVi4RWAZZypiSBwL1cxAaA8a",
  "key26": "5w9tftdZRrwQGAatUh8uDDiZC3PmasSqZ71xZpHpajWgAVbf6huFG1vaDqdjnTzmsZMiYXvfw2AuqBLwBdaCKc84",
  "key27": "3Uz1qvV6c8YhEHR28JX5SFQ1UuBBvwS5riSuoRseEYLyoEC3AhmarkYM58Qg8KZPRs4ZiKisp9yCUBLuNKnHphxc",
  "key28": "dpuEBzgBeTsZNRpGGhfYZz2igy82eZ7xpVcYpHfUrY9QJ6Bs6Jz8gBuRb9mzKyn6qo82Zoj11R5bqbG68imn7TN",
  "key29": "3cHQ4h1ZGB3ZrN53ENuL1TYHjyuNc91PYxCfeAcmYCmanqtbbPaJUfedozwAP959wZQ98pyGRLn9bWeSp1jeDv9w",
  "key30": "2Mvo8HU58XgdZ3NkH4fBP2kszBZ34FzwaVX58S6f3DVLvwD6YeHqeu9ksiUF2TCXs1CrKb1aEMCsReCJnJpZuccc",
  "key31": "41EkrT316j4zcy4adEy4MWpHZdEVrgAcCauNLEqDogiDBCWsW87nXmCPpfmmqoXHc7oqF8iWsxrLVMWRXC4WT4Lo",
  "key32": "43oEC2zeA5JixG2n4ZXsaueoM4AhWjRqddipCH6DeYZf17puo88R2xgo91qkuGTUHxj9B9t6kVKs6HTdrHU4xYv5",
  "key33": "5uvhZALG3mJfusfghZ7nqpjRZot1motCrBC6XqfJ3k9nXaPq9tbKsCC3WFzWRTfoNwwUPDJPBanPm5F9K4x6KdLg",
  "key34": "2zsALCVKh9EbDvmCQReit6YZvnTX9H2wM9EQt1C437TAjosj86xSzfx6zESexuStwAZ1p4a5WnZhcEWCbQkVzTom",
  "key35": "5ziYdsiWEujZynsEiw7FyCdBk3VeiPd6zkjcJhyP9bGNoo4eopCDvz9rVZwFkBXdxGut2sgfuZbqnwNh43utm817",
  "key36": "2CCmgmW5Muj1EhpsjyHPe3uQGH5AcyeijHU3AATsuaCW54P25wmfqkvQQgY11WYmRyiywAMxHdNgCjdoQPX3QMnR",
  "key37": "49j7p7yVGQKacUJjxboNzdLzfamrRkUTPZ8QK4jjQcz9gC5ffC1gK9cBfJSYaZSDWAhtXR9RGqLn6FGFPCAmmCwc",
  "key38": "54i9reLk4ZFEXUXBQ8kRcnpXbzWytJom7yD8Ds6kSZStf93NdoZR84jxYgqQPsw5jELWNZ86RtQfuAzZrUPUiwAf",
  "key39": "pUL5KMnaB4dJeu9odVrsjNnUpoZK9X6fM8SX1VZvPXZHmDNhYSWd5hmVr2xEBNDiksDP4c6xeFnqBSfHkzhH2Q2",
  "key40": "4zs3ushEij3otqgQ1GNDcbUCVHcR4w3SJrnHFQ3PMsWyFexcL7J95Sj3SaDjY4MwiwSCfTar2mK2e4Err8yRmeup"
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
