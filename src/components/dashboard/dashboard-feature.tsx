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
    "4fNPa7T1UTaZLzHNtSywL3CVVdRMVDWw6i4sg99VmWxzZe6wyyU4P2GFuUtcTKisNPDAyQw8Ek8UmAJyGKPM1y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DYSeHAbBRyDAvkwVLMgvbZCyarPfCt8WYxt98uUAfyn3AMM3HowHmrEJp97oT7tTNToPLoeDU2hupvAPfY9u7sS",
  "key1": "5YWXpcs1hwKDn9fBJ1vth425pJuo5rfubELgm6HR6tx5dqWwmCQhir4V5MZc35UgrUqP2YA8it3rxpwT77H3f6hR",
  "key2": "5dWqorJgZbBoHRRfEyb4XwNgncT3sL1ePNcDfpZt1hWCez1pfbmqHDiTRTcM5oxpmjecn8gkPwMLBb4oKsR4zuFD",
  "key3": "Y5eq8YbKXmtcuzwnCubXR8MVH624S2tm85gZGMuYEjuQzx98d8emqpMhJLT5ZJXLLevwviEwT4aEaiAMgxdXZDS",
  "key4": "UZRH3emfiMS6GiHK4oPmVUCevTSdW8vj42RWL7MuzFeB9FnMvj1XevAEWNGfvGefx4Td3p91WLvDKXw6R79ASQ7",
  "key5": "F5zRe6HbucqYzw5PEejmZUS8pYL1xbAjNGXJx4JvRE4yzzejcQtbH5HgoAjNPESf658SPmnpPpBrCNcFHJbDeRL",
  "key6": "4Fm6uLqs1sYQ6daiR7kFgvGbY58y8A1pH9eYBetXYhdgZDcZZyhXGPQkcFMApxaJuxeeqhUBYTNMNY8c1pWnKf3m",
  "key7": "2v1M3bL5frcibiefnZxrw4iSMTETG2B7n7hcYbVYSLwCi17sa3Cgux3p1M6Gw6rABj67X1N5HQjccTYiEHm7ZUoS",
  "key8": "5N7oYHDwqveMDJuUsSBtQ38GT2YeGA2VfSN2dtPyS6pFv3E2ffsdqeXtBpMad8QJzKWHs2Bw67Yy1Cnjz8t6Ehah",
  "key9": "3MvLuG54jBah2yaNHV8BGDFGA8YCa7qX3qjngQnJREQWKtGbtr2ynpLt2XFh53QLBhareCWQYW5DmGJ5fsN3RNj9",
  "key10": "2cYochACs2HurPhWALJV8QRsSSzPk9WAp8dEQ7moPbX9xTgCYbn5Ro6APhh8g6UnMttYeEKLQSfLAdYot6oo1xM6",
  "key11": "4Uid23Tp56EJEaf9tLBAgthcv5Gew7so3Ui9u5KBu23cL1wYNC9NzXrJDg7m7bmqBjiMEFC3B18rJw61XzfJQHLT",
  "key12": "3RJPaSRePHrMGfLzMo2gJtjxpxgqrhrcxjdhBZwDAth1arMZtVAHaeo9Ns3evCE7t3ULSNhmpgimqWp84Rva7sCt",
  "key13": "4r2joCgEY7t89mASH8i6S8zPRc46VotihWLosDnNoD2QLQJ9ZEsPusoFBuAhpsA1HyDF8DUwJfzENrLwvqDAmM7z",
  "key14": "yq5hYaqUvKkmM2d45DMZAqSw4rNejno4WXiLTjCqzS5Ud5cZNuoxFjawPggFA6YhpvPh8aTyAjPw8D8SR1Ht4KN",
  "key15": "Z6KtNMK6pDVspnoNygAxSY7R1cr7Zf5VPNDpZqWDeb2uqDRUQkPSiYr4RPv52ALd57Yb3eLN3q9B1wmrnTLa9VT",
  "key16": "2F1noM5NS8CHDCuXWqpgtCLyU89TBvqB7UTLuJ9bXkm9FJuDUUukxDCdPbD2PQfFrzFP4UZw7wJnVgCfuZhGZ64b",
  "key17": "5aJRNVmJxSSDqpiJ9UdnTxvGPHRqMR1PSs3wztM5QcRgK2xv4dqNoFmRMPEftny8LE98GxVDuX5xRQJexHshgJbj",
  "key18": "3b4TZWgFod6WLVAy7PPX9wTXiZmb7SNqkobr61ruuHysm8LqKpebHriyeRtL6zseeWgS5wCunRGTwGn79GYjkMb4",
  "key19": "5q5sLpwFbuRw5CJzHLkL4oEyqyeSb3Xvzf3G3AeZT4BDia8zC12kqhFoPJFvheCKH1bFh9B3eW8RXLKNHfPNcogD",
  "key20": "41SuGMZ2Zf74dmLkBy3REnTRoMxXUfGB9RzvY7x8FYC7hDyVhskgknfp6tWgU1LynTpZMh6VbzkU36xVcqBhEMf1",
  "key21": "5eue5fYF8uT9zxCgZxYWLHi1r7p6zFZRtNVVAnkovoovACFu7M4hAdrdbznnywccqyj1jHYAWfWAjfF9sdATNKRU",
  "key22": "4TML4qC2rk1XKopsUs3MSTdFq6UdSWJc5XEBPsBpHp1ihnXz51SWyfvcmH4MeUGzoneW8GSLyDxodKwMjLg1Lk2J",
  "key23": "iNwhxYap6YrG5dZ6Yyx9hibkB517FTfyCsqo5tUZqYLv3hypB76jyaqt5XqDoU77cosPzyM6JCihRkXPSj2UKyq",
  "key24": "5pLuywchhcJdLcwnA9x3TAK4PNMqPkw3ZUAK7aweFSd1zSauHfWiLQeUXrtPgvEhoBTNkF2ybwA685Mwx6GPMLAC",
  "key25": "vtBH4JoTfPdRWfvcVMAAPjDmQjeMt5zyhB7htxCeiqynVxQeBXpNXNNTrXJMtQdYokW7Dehrt3TUsigHMTJfHLq",
  "key26": "5n2yZU5GQzbaP2WmABXW32XQ4o8pn8qdWPmSF7RjkiWFbArs5oAibgbnnYigKq3rbqe3z591YPkWovRR7NQBY2nd",
  "key27": "pJi1VRSE6bGfd4c48bZXJQgPU7suVyjaQJgGdAr2ZZLzWzdvzj4mjvjdYBuFBgRTzqsUZu1p7vEpTqoAT8G9YAV",
  "key28": "25JpcDPPTePd8zwPMq6kgYcP9kEvZdm1TsPSt6mxGPbdk12xgLic3kbfv5JtEc9RMA9nBokYkRHyFGzVYCDuG4q9",
  "key29": "3aKQL3UNfhrs6f9aTT79YYdCAbDbF92zP5nDGDaeuJ7RuBwVLecRa6T5HiQmE1jy5x1hPdbs5D5wj6SeebPXCZr7",
  "key30": "5tCBZpiFtQ39RnB2V6PrStRJvznnotuhy77XHbFHRE9aVh415QwNDYpXyfoYQfrjW1BxLDDEUfa2hxg5bvaxZ8yj",
  "key31": "3TNGK13qQsy77tyzwB6WBVmrrF9vjiytt3hV5ASuVY4wj8394rx4VxYpSdeKqREeQcXjnUUuci6KGAcxSwXSy4VL",
  "key32": "5LZpGYMCPagJYN3rxZ41bGDqJbt9TeF728WwiiJ76a8k6cwPve48QX5JcMZUPesLfSoGG4siW5be7j3YT1NB31np",
  "key33": "4rh3FTecMiQSoqaTib9Con9c1gn7JFvtnpDoTANYaUHhvviTGw49eqdtPKpg5awds37dYVFouQVS8SYw3BVWeUwD",
  "key34": "4wmwfX1UiY8CAxWdGRCXEiqjto55QF7o5cBKYEnjuKyB8JfoTF5SSzKnbVPukWyGsa7asqFiNCYFG2trY3zJqVha"
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
