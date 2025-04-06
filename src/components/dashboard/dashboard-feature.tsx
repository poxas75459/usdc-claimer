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
    "3HLSKYekiAUJRiePZzxjELp5z3yrzMwkXVt5uNWwWDh7quswY6dB1wgQ2mAPNEeyFwJqc6SJjHnSnAxuQvAM55Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwJWE7sygzC2hXyCL1CMoS6dDc2z35ZR1kwfL8VGJjEFYqxRzqzRswBZxxZkqhzXaqnAipP9QBG9MdGSecfdyoM",
  "key1": "4SMRg96226sH4Hj2qMynMV2AzBvb3VRbJ3WvsB1sTuXAEZn89EApxkYBkDijVtV1LtiN2RCadjsoPVd1gNBdYXht",
  "key2": "ENf7XhETcmYDxouMyyrKpeBSt6ESDxUkUhirr6VzoxTEDLkaVrqiTNuXHuBkqG7SGXyBCGfeKReUP2HujgeoBSa",
  "key3": "5oiTQy9ZoFzgprXDAJUH2A1eoyE3f5oSv8vgtV8b6uLxUKU6TqEKMafCEwW5fqdZ1N1sqEwNFHziMnDmJPiGtqUv",
  "key4": "pPMmaJynSG85SwLSWHwvCvyu4CRRz2bNYHfwm4jhaGs1fNUTm2zT8WY6eY6Ng8d6uSx4ZtxmgBsuWnJpoC68JXt",
  "key5": "4wsFHFiwnLvvfKp876mBoyvwPaSpRywKAXSxWqBtwd8BYuskXgSBdLSfyZeicCKJQjrffxoqPZZBtPHztCn8XCB3",
  "key6": "3Lhszw3uqbrZJZpHf6zcFSUucRW57ZjbVHsYS1eTsU9MH85ngs1uaDMvgvUJYmYnw83WUYj3rdFnrv8qm2vzV75H",
  "key7": "3NUPnPr1rWjTYc1SiNKbREh3EdGck5TQfehGN1r8Cuw1jWtk2u7d9iTgBmjupwhGWQ7xXNbeJShHrFHdURWQGzQt",
  "key8": "3fbVry35mQVUHgHXhWR1BrBhVvWxgjHxJEKz8znRCDmGTf3ju63vnH7JRz1MkQapLFdvute4iyAdADeYcKNU7QSg",
  "key9": "2NK1qJBTwf7Vt62aCoRVuD2BPfQ5g1gCGp1XhsFgvDgFiHx3uxjrMveJdVBNNtiaTTtjtA37AL35rab7gfWtdCLV",
  "key10": "3KuPAoqFPwxbJatdKmPjjU3Wi5TKgLqGUperoYz1Xrbo38NxSh38Zba4fYjKXCyeFiU9HZW75KhHNG3Bqg4xVpTL",
  "key11": "59PEB6XXC76stmjUo4SNaMYa3XmqaEUCtHVmN5qo5axbjRxfsrGJjP7DQFJWMK7eeGDUopK4pgmUmwiWSAnyromW",
  "key12": "2xnoP6MbJSqsxMjAd4WK4KpqQ4566TsqzjhFA9cSdTNxmjYPVtXHw6MeAKZny3No2DAutyaofQL2st2BrCmcVBfr",
  "key13": "464ajwkKoPLYs7WqNeFc3ZBK9LSK34za4cuaLp7i5tUYcfdfggAZD8vpq9c5UTNrovLbRkxv8DAEDPR3jTkLPPVe",
  "key14": "2Q9JuGMV4gNuHveM1ZPnLMNfbcv1PppXa2EvY9RPVUhjSJyPBKtif7kUBNjGtha5ykTDynV2uf2XRgTt2gqGBH1e",
  "key15": "JqS27K63w5ykiUL6f7nBzJHB5kwFq42z7Jo6sxcvvSmSZP2d2eQLc6Vpu8UozWy1Rjt89o6CndPH9Zs4NKik9t5",
  "key16": "5S79xgtGKjtA5ihRGiXYvNJBr9yc7qHchDfnQE7sXYxaf8qJN4N6Dksak5aG2GycmoU9onmpn9PfCpAgojFAakZg",
  "key17": "3DhFunUMtuw2FDePBYH1Kh1mxp283oAetN5dehJaum9YEWHNzPp1gKR7mXm9P6z76WBiwAAx82DK1i4DREeMQFWs",
  "key18": "2yoXEbSS4mS4kLY3wxvbFWzy9m5FY6PuFfiPSLK67Lvbi93EViQE31t18jFa3ac7KixfJ2SXQxvEvB2QNTGrJg4c",
  "key19": "4BiCenCcjBx8hja9HjVfEX9rnh3FL9PidL75akYhV4NtZibrm1sDYmJDy5fvztVUDaWfovb7fYzURfE3fbbgAP5P",
  "key20": "2PPXw7maW8iiFsuHS9KbTdkyxkb9rnPwPdrfWoqeCLPqNEfgqWxiqjBDa9L28Lc5Tv59RYThGQ6RhWeitcm6YYpy",
  "key21": "3WxFX2nHGqnM99iFzgkNCFJq2b6TABjzWzYsZ2U1qRHdci4iy1tShQdCqApSAjkudVG7vwYQ4FBDoy5C8VCdHbxq",
  "key22": "52JEMNLiyMDjkQdQLSSqNYbXFYTcDvfiMR3GwKByqzLs4NWi1CAaYHTFd6NjU4tDxTEy8uVauJjy3kQx2aAJ6gZA",
  "key23": "5sCG1QcQnnkJrZvPaX5wokUoEvYk4gYxKH6XmbUrgxhbSytL88XveBq21fy6MsSHBu8gXYobt9W14kz6kASPqQK4",
  "key24": "XwQg3WUviBvwLKCgBwAb6jDFLmFtLRHxPeBKQQaFeF3DxLpzFkdriYKRXpJFXZppGR24Rck1vDcWDN3kWSaf9Ze",
  "key25": "3NXRQUXknsTfnc9nco3i3UEYCmuHkciCvBCWzcTj6joA967tLW727FKc3hhhYdKX88duzLT2Jsg4zmwi4AgJFAtE",
  "key26": "51yFveDL2mf7b5x6rPwU9e9o3wTCd5ziuqkKuhgS7WdeNAdcfCfEtMALWd6mpz4eHkGa1TdPQwo3GsNTb2tMyRS1",
  "key27": "2Y6V2P6cr1FAKHaC3wso7wwrQM2C7NZTDCWXBexd38xW5cAP6qYmPG99nXT2Bj4jqjmaH1NUQVMQ3QymofrAyKw4",
  "key28": "5xLFsA2DmVU2UF3boUKcRa6fDL3Y4iez9iXEVQgG9BfAoKf2ReCksRw5wkPfxiQz5ePwVfmRZeSjedCF4zuoZnbL",
  "key29": "ACE5tWk7S4T9HPLaNYoRVqGPJshwiqqz3GvBU6VyUwQ1CFvgTnhXtUuQiH7zMyxo7oNhQmhuJmCs5ngGdkzoaNp",
  "key30": "4oRF4Qy5kRx19ED8KTEtpLkefVEsjS259tEdNftXqXv6bXs2YPDkjBQyfvxx1Y1psVEvsGuo2e8Le5i3USKKkiJU",
  "key31": "4FFgbfyutzjJ4LWoipHCDSjwNMvdCjj5AcrtRGHPTUBQs5hR7qhW4ZXXxyC5XoLzaiX9GZPygbiRSgnVgaMFfUWK"
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
