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
    "4YfQC8sxKGp3cZDoNzHT2L5ksqxFYeahGrK9xgcuHUr5pAv3jTEoDYbB9ykfgKXszpdFAFUr3cc4dQuoRD2brVFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53fErFs9pEBtZhgtzj4m132sCGo3SnQtvXySrtUFT18eAqvHV4NAhAMqu8dFykemZP5FgfBW5HAHCV1r6LjCnMbw",
  "key1": "2o432UeJctpeSkvcryP6ph9ZX6zt2uvDPS8vXTN34wmNkF73Xjw9rohK2WL7bGESnNPTY6hw1FM9BxGm1iQ22Ppf",
  "key2": "4LmKvQVc7sPVjE9L7LtEdcY2Kg8WjWaCw75R1twxKXyWqN4DQE9mYZP2pWUderjsesAeAYfyraqpg9GB6YaRXJt3",
  "key3": "4Q18riAivSarDPGzKPrMyPZ11bmkk2Dmg4aTL2DouBc8nZBz2gnBejm2wnQQMfwh2kmDPLYd2XJPoGkLepy3fZnZ",
  "key4": "WPVhZpY8gw23eypu5oUYu3M4gNs2EAmsDR7QgE9HQZ6tGN1X71k84M6VSMrYy2D28K5xSiPKHGHpHJLUUgs2XGy",
  "key5": "2ojnuwcqFKTuqEiHPBBsc2KftA3Mj7jCaVgkvcpVWob9vagNsD8fUdF8WDAvUpCgvxvUM2h6hKgvtUokpe42vVTe",
  "key6": "2SXggVrWwHybSMikZwxG3F9k1bYWKmLcSLw3vMHRyEZkeRYFKUb5MfzydEnG9vYbjXQEDpmvew1WfJdZSmHzSAjV",
  "key7": "4YfNmuwHdtuhGHC5obk68W3NsgPEHC8AwZtfMFcHS5Ung9zQ6vXVChmUqDVDTSyHJ4w1MnnsyJ1UfsjQxZCA5kwT",
  "key8": "3BRsTAx5YEgPTV8m69MyPqrMTKu1rKPM2uq5VsgmeyEdbtTJFMeS4K1mD3TBesEracaftJVb1HjLEhNuR1tP8ucX",
  "key9": "52YWS9QqQAuX4JuzbMoWPJjKs9YuViPJEfP3hefm7R9mf6B1yYAhxsnRwRUv5iiqkEW5r7oEue7dBDRGbjYJ7Hgg",
  "key10": "4KAJ6PrscC98gF2UZXMgdu4FqUjwPWHbi8oENyLSThUAbtrYdGErNfND87k4vmSx6X3mauVMzPupGqTCmU4253Pd",
  "key11": "4MKnA4eeQ5WZecXyBWUhEw4B9zf5kzyAxyjoDZ48ED4ngDU3SeoM2ugqh74GDB8joePmQU5LgBhR7V7XjoP9BfJ7",
  "key12": "3eGSTiZ3qXzgW2XH9h3BWzjGGp3GMAKPzbcRxw2JgjvPoNo9PGjRrHy6fR4CMksdciVjWiJChsV1EyGrKaThHKbk",
  "key13": "4fXNq32RnS7adtGHqHyGNEsnhsNeK82PDMhw1nJmVWWJ42dcYvThGwW2aDJpGiTCakQJ931CTti8Rz5X4PNThuHR",
  "key14": "5aRigjawhhTRCQ1uhgZ3pqvQgdh5iSRn64eHEdEBVpxbCRQrZ9A5c9DxZmW29HrAi7Uz4kQQtHcnyD9q3BJprECk",
  "key15": "5dnoP5Nr27DvSUF78LYtzQNC8avB5MSugheY4AUoihjMUq1dgHhwQnuL3VSUPKh9LEf2NX7McbV1dhkk9AV6wmMo",
  "key16": "41e4cLnNmGvRZbRHMyxmnECi1JVso48HHEWV9xYcXTQJfq27vRUPW9e49mq7a1DcfkkmMXZ7M79W4gVLbncU8GVC",
  "key17": "2n6iNqdwuRtzf2XqE3rhfLsNhpDZ4pSdYnvCPg2gXeu1nDQguPfVwTPdB39UKbKZ7eyxW1zAQoJno6UdbdbCo8Ka",
  "key18": "3kriatNqz2FYeih42yjzQj1nrwnkPavg1XxC29cK28pQxbZGbPTG7ouVgTruxwMHZgSCx82BD2UeZV5Gcr9xf5ym",
  "key19": "67aAG3vmqUSZc2mZaw3jPAqC7sKHD6zK5MHEK7hBLGhHQ2pFrUPGyYg3125C8hPWuigHNmxw6rGkZnirJ1wbXjDR",
  "key20": "38XpzBAWtFQhje99Qq7F6ZSKN7jGZJa3ApKyTk2dYpChcKxzT56ALCZPM2rXGKKU9UyVDYJhu5sDEH9TZHCzgQPY",
  "key21": "4t59PWKRMcD849SFgyuiVBmNZdDEYmPEHc1AVoBMCUP3w8ubAtQe27NBuv38VtCwGwq14CCRr4SsNWQKDXxkm1mo",
  "key22": "2HRwZjPCoavqqcVem2TPYX5gx276bg9yHzLMgAMKuNAKJF51G3YBtC9aFXdz9qVvHnQPy79N44MLwZ6coCDvjif1",
  "key23": "4Goug2p4USLxbAvH5CJiyiU7ThK7GJRBEGEMFP8yKVKm7c1io4RqAYkEFTAvEWVBJ8oesegJX91hDUou9mEj6EFX",
  "key24": "MyekeHY2zhnYsWL7Mqm4gk23u7pu4kFGDxkAVNHqupUdqbkUNrpKzrVcvbPSsF46AHszR6wtBR32KuQp5rPKCnn",
  "key25": "2KoeqiwaWAxw34h5dGAyTH7h3m58rxW4FACs2a6py5JsNBvHXCdHaUuMBSdr9KFyxK1gBJUSA5h3pBsgQHjz9yK9",
  "key26": "4RAQBzKi5uYb77EhoLtUmsQErhVHomWD3fcuUZyUazdaVFEASZHD8VAESJk6nSwpHyDaktZvv1D2JYmFwmM7aXjG",
  "key27": "3FjkQMwrmeEYQ2EVFnJWCGzSocVDJkrBdauy5FwR8B2shopFMCWYMKFTzmExoiPAvmE2yg1m2gRh5W9YJiQWoyVK",
  "key28": "3aV7tyLfm3LEbgnHfjTqXqAyftKxUe9B1CpxCsqxK7szK5F2aExcenvobjGMdK59yUEmPP9gHWF4iCH4Hf8WABMM",
  "key29": "5H7M3V6KxcR4GGkWpdtsqh1tuivso3ctP6jaCjVMkwUsc1piC1uXJxXfg3wFf1Ya4JfxjAQoM66om5mnVB9qaGez",
  "key30": "55iG5NJfrUCMb5QNNMpur9k1HCPzfbZEWNQQrnHks3EkJ67uXGaWSTMv5A21H2JicFS2qwBmXdEERoxT9kvqDXEy",
  "key31": "2zh5x2D7jkb7dYAy3vZq8955RoWp78MUEruGRSB6sm48Spyqr2BUDbNs4PGyzGaKQ3J1rruYJtFMZLy3Uh9SAWJG",
  "key32": "5dHbV1V9toL1CiQ38ERrx3GSGuog8eW3WP8mcY2J7CffeFQQhA8NeTebMuMo3npa49EQCuNGr5PfS8EuryJCsDxQ",
  "key33": "2CsC6ZZ6nsFhzLWh1Qmkda7tMekboBWPP1Ag2co6YrBVAo8gLyZW1UYaWu6ZsthZnBvjD1MjL7QiiQ22TrV87baA",
  "key34": "yUXp2YHqgDQBFDXBsxhieeJSS33yRTBeH1ZiSQRHiH9zdUZCC1Zw8F4XT27FrsR1wx6SKDHkYkJfFf1WNSzfCFH",
  "key35": "4q4TDvwTCSPxVWAqpHTPBEMbCp188EFM5F9WhZrcJVZwSEEbkZvG8N4KyvPj1mbMbCmfjfmJEM25o1SaVFMk3fA8"
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
