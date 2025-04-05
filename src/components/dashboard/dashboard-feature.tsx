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
    "4eYcgq3vuewJfCmMFiGybvrsSHtaZUKfAsqwXUgMnkdW9hvSnsjbdy6ktYVPrcAAAehSGnD4BvJsbCMgiQkYsXDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKZ9VCE2zvus4H2JT5ew24fh8CUinXccLtwvQwbMcnqKz3a4xLE74m7v1oVaiToLvpzQ9cV2btJU5WJ3nHrKVBh",
  "key1": "5xqqV8KTnf6W1MiaHJwL4QyVttoxWLNzthhGUr21F6hK1Z1snbLhpgjVpxv3vWUJCx8hJSvHBF7Man9J9U6Qh4YL",
  "key2": "5ek9xZ8MoJ1XdGPaT7gc8pduU64fKKWUbxYPPr35U8JQRgozkD75SKDHR37rW5quTGEJxw2WyNJj4q2kfQZR5hub",
  "key3": "5FmWpCPnLfdRkBukMh4z6Az7QcwtSwxyabbF3C443X4HP9dtk9J2jfGip3meT2tXQFtDpWmCLCr8MsEBRf2SVTkF",
  "key4": "45smZW6XBoAPta9H1YtkzXNaWmbmDdi7BuS7j2VJS5GWYu6drFpDnH526Vov2MtYT6JaxQJNvjFH5cr998jh4B4p",
  "key5": "5eBWzc2Jmfwp35CAXyjGCYweyZZ5sgqHM9nqao58H1zLXDQFSURkLhydeWxcB86YhJE23hMJ4do19bnbD1GBXFZg",
  "key6": "4TkSUjfCUS7oWuixzfjJTpdnzmDz2dGfXDDE8MuM9maxUjDYAzRFgoPNTv6oXpF38hD3oMbNmniNs4fhMNB2GMfw",
  "key7": "vj1mszkKcVbcQTbzn26p1uLtk8sXbUJe3ZmjGwe7tBYpLK1npEWcjxqUHhkbGfpLDzdUNqu57ggCLQqBzMhVnni",
  "key8": "W2N1RDsiRctY1CgpqEMguyd5Jp3Een2RuSSCXXbLgGQY41LVK2EFRXJZ2wbW5CwveevNzdM2YiGVATLiN7PUjBu",
  "key9": "3UWXnuaAnTsjCAibNbfawG58EpMNX4X6CZGWbAXb9CuyG2oEXBMWRDd9C4SGK5bFb7sUeS8tY4Tg3wPY1tRWJnaG",
  "key10": "3eQ52dvjrsMyBnUC4f1AJkYbtQaBeX9fTYS6G9A2Biqx4Nf4dYCXDbdrc87dhjgfYzXf6mupkXdAK58kkQAYp8BZ",
  "key11": "5NBsxCfzLjnTcPrKXSfa7peFMj6BFW2g32iSb8jYYCDi2eJtsSG7e7E8g2y4DchnbsFVMXhC766MLUzt3KHC5zrE",
  "key12": "5SwRPcSjTiEnCJSJHKEgfG9rrrDdsERRYegumh1BwsfoTVvHfa6WFDmWA3CBX681HwdZwPZsYSNbFcrkmnicpgHz",
  "key13": "4MwYYEZ7UzpTFsqUB3y7wZp7fi3GxrdoeoivKgjpb4rHxNjWMGkdNsyRTiiRdSkHBJeHb1G7AE4iYVgns4tgRJFk",
  "key14": "63aLMrKuwJF81PwtVetRQrwxadS5hEtm6HD6jCsHok2uZ1oyXfAReNpq71w1TXLQBwGcf8UmzSgBJYVCWCWcMmQB",
  "key15": "5wEuo9BozhyJPoqPtFS9Kiwi9t2bWsMsB2N1FDfVfwaUbnZB94iRPbDxpNAF6xAYTp7WH6EGsMpVMNR22Y3MvQN8",
  "key16": "2XJe28uL7hejAXxuAJ5qiK8BTYuv5wkp92WW3fjXNyvVYv4tCWYgAFhtKusuiWpDn66DqZDXHhwVAkp21macPLxV",
  "key17": "5bu28iwRgYZfYxpqVaZoYbvw4BXg5c1nmCGqck2Tkqf8SeUPcNuVkADdp7vbHV7DHmgc3MHdGB5tFrFJpQQTi5x2",
  "key18": "3Wd2oEFUDQb6D7RaB1fWcajn15mmpNpWUbBb8xtkBnMj1mc7BwYhLb3EW8RvEURPARWLDPv4Wj5XtQjkb9z1FS8f",
  "key19": "2dRGVGTaA83XyTcqYveU3R93pu4eSyaAopv6s9riCkv7ZihZvvGV4d7PzJ1khEfye8wxLEPNAqtqC47Y5Q6UH8wt",
  "key20": "5HodKbeoA3rKuAV5LL4Q7TKNHi5gdpQaam3AbzPXaKDe925iZSNsFCMwj7UxQRkYUpJ5iredwLv5Y4qEnynUfewC",
  "key21": "2qorpGUgZoQLa58MmruoShG8G3Ta7s5w3mVtv572uMg31S7RA8awxJcgd4UivtcSczj9HVDJP3WU3qXsToreshU9",
  "key22": "3WwwKjjkyh4BrcS1a9BUiRfwyK1v3KYuvBj3tcea4Mt4XRniiiKWSpBtzRo3VL3TVkyNJEHNHRGCNiwfCKk56C7o",
  "key23": "gmhwYM2xD6oDhfA1p2e1frnGUgWs3ZPFqQMofdXNFHZ19HR9PbMAKgSTZStiBJ1R3KVSLxZQwHc37dyeG7Tzqcq",
  "key24": "5xfgso7FRmFHBQe5ukWdLFoU8jvZqwLTvYGycEdvyxbaK16H1eUA4MeYoMo3geXPuBDpYGrpMCj8CFDD6tRn8Hub",
  "key25": "yLjtwVeui58BBq4HPqqwVZK2yNav77zneZWme7fPfEEHf5erYsMgtT1u8vEVg3TdFN1Xy5XfRXVpmwVw11cLBcL",
  "key26": "3kmsszMJpF7wCn9GFFuMA9AwFHkKMkzee5FXQX3DtJsBsEyFUENjtZqdC9iuekSRarsYcwFvvBQb3pNCkVk53A4a",
  "key27": "34bFZVcTCSLpFYorCx6xunRMruVS5YirxaLLjy9jvzV3o3YeDGcerKpAWeTWniChCTWP5PknuA5i8c3ctR1uhTuz",
  "key28": "5Cef9shjSytAuBPnzG6PyZYZR6HBkx6dxJLLVSy3CSAsVQBnvvWDzyhZDoJ7q2z5rZ2a3EPBS45UGhUer8AbdrJV",
  "key29": "5KPXHGnkxnHGwTcG1o6AQbfXbCyAUKtY5Kz3LfUgU7VpYpERCNFePzv8utce1CpkeNCQQGLbaHANhTiFj6rgThWA",
  "key30": "wEUKa4A1e5FCKEFAvB682b2uQkAbwqsQpyfeA61E3GuKr46RHsUj8fNbgnFTAb5mRxcntqG4Eet91FtoXeaZkaG",
  "key31": "41uh5LnbNhFnD6mPcQNSgDfpCtbNCaXNjfuzJQEBTG8LGj9ofQrg9RVesFZ7TPyoM4zwQdwt4YzjmLNdfzggeLN",
  "key32": "53S1ziHo7VPe1RsAsQMSubEn25p4o5wWYj5Cyu3CDWgq7RUgc5UM25yTfb1Zk9xxAiRPur8PQjqhQ1cXniBfpBDW",
  "key33": "M7k4B7jWsBrRSbwiAdD59TJqXUhcwPVCx8nfgkC5s2yv617WrTJVTMvVA82AavtJufPY76nd1i6Tz2ne5YYKJdg"
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
