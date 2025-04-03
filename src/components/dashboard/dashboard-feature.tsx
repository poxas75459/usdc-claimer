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
    "4UTCWByfL8nwkwynzs4dFajha2TtE84e9yK6cgTCKWf5UDzRmPmj3zyQrBFZwguFnLbR9CNasTvTsGtLybGu9CVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N2WuVfBcqv3gg7DiRjt2x2ain3jhtyGK7KzWL49xkKLER4ddfkg3c9cpJ1GEGQhXhS1ynb4hJctjSWXEonD7KLY",
  "key1": "3y5CkkQJK1nAyW4KMjet7jtbHff5p59q9wgzW9qwJ42HNFvUKZt481tir6NhMg9KcTd45ah5mweUJjCy2qFrsgY4",
  "key2": "6xt35xBSndYTsHeZBYVjpXRniYFs7xGdrTJCpQa34Laue7atgZV4Ad2kAoUgGP56DEVPmfkhfgLrpokGDrUbrFq",
  "key3": "4pSPgxYfv1DLqHmkYmcQnARXbuXbrqv1AJy1VXzPEixo8wK4W1ZrZYqE7q8oAhWPL53wpnVPfcQSudqrxPJYaKD4",
  "key4": "37ADTNjubSt3minLpvgwYYjKqdMrCBtm5YQkUZ5g8JVff8tyxahT68yJLkq7hAWyo49RFKbKrT88S8R69WAiiXMn",
  "key5": "4EeTkjNFWxbYBE6sFFxjynNWtBHNZF5EdtiHdaWZQdazBVzAiDQiswX7PqjmVDF6mANu8w4EpBTQvzmcaKtQ13cj",
  "key6": "3D8BgcXD7wwJCAPCGiRVNC8Whqg5fcz6biFSwRGNphVfBJ1EhNVMGCu6cwTnC2YZuJ2DrtaJba7HGeV9PkL8qM6T",
  "key7": "3nhCACypVo3ZtHeCN9LGbcRF3u5c9ymWxW9vyMQk5kBR9hst7NyA5C9nNjytQEYZFgEBUYU8zq5P1N1JidKmHduz",
  "key8": "XDMgjjVPbeSNcq9BHdXkZuYXYPidbrXZcfmCBtfPCjiPeEWhRbjp2xTBUpSArUHhyT8pfUZ2SfzqLsXNvy672k5",
  "key9": "3YzWTPDGrsPmrFz2GUkimH6JcZR4SpfKibGePvSZWjysfdtCm1g6JKetJsom6UkfBewm2Qa9BwYJ81xDtobSjiQA",
  "key10": "3XzFS7a9brDpHgWxSxrduc5RbqgPtnBR73iGv2vkPWurcKqmP4mhdN3XQ3hTSUM5PCbPUhwadvGrvG24Rtan8tqA",
  "key11": "4rG8ED3Rhaie3R8xUA4FFLwgXdiDfQTwYBisRHPHvy3MjX8CoQEig8GPdU2KJVuYpEmnxz6xk3tbc6hMPzUKZJnu",
  "key12": "4sLBdAgps1RV5JTbgqniQNYEQgGPaSqnBSaY8Y5V1jGNTzYuSDv3fDYWxFzuN2LikiayvJ7FfDor4zgQEAJBsXug",
  "key13": "3D4xDzxfbwG85amxGMbrH5mV2fPcC4Ft6uhEh4EeRQcqWqWFpmJeLSkDSRUKowDyTdAWG12hdZfrrY1UKNQ2MqYg",
  "key14": "p6pPdSyfC87MYk6tCDun1gAPDEgZeqr2j2je8mrL4LtWxzYxNnAc3DuKSDfFKzp2c5AN1VKFFj2Yck9vb4Si6LN",
  "key15": "3njYS5uperXWq1VAeAWsPcz8mYLfgqRXuXGT9gvFF6vGJQ1BCrqz9746wuvE4NgzuDLfC4ujSirEchU5jPM24eDA",
  "key16": "2aq2LFtwSWFPm6Ucz8P4EuVuvqdfC5tRfbCeaXc3VHGRuGddmHQZBztSNhfi6cGdgPp5b1B1fxPD8cXouZrMLLfr",
  "key17": "5c6sjMKZfSdWKZFuVq44xDq3Ti83yCEyoeGesBJPtqopPzmz8zt9f658vhxRokXopgJ4WggmSf7DMF8hKckycvZt",
  "key18": "5kVecvr83TFpJdS7fMGzSYyaCKr9ifS9eoW4cJZRwY5EjcDShrsF4nC15k58SAsyXxX5sYFiBCnCAEiu3jKxwLCz",
  "key19": "2ZsQrv3GCxWKxaV2kQXgyNuQjZTx6uKUGEWaHEwnJH47XjFpsvp8pMmjZUr8jMCNUeahLFYndHzWMkydCkfoecX9",
  "key20": "zUiR61V44ScsAiXVRL21cM9xgY9pCRmvrXSix11CwzMSSCYfrxmPjqzNqLp1Ae6KFDYAzrKEw2v5oVDnh7kqNqR",
  "key21": "21Peq3LW6iatFqXX9LyK8ct1eCh6M59PpY8hBJBMczU9byNU617bFYpR3JB8Hw84MzNianWnetwX1UpS6Wspodjw",
  "key22": "2vCU6DHJ6bgfVdf3TtjChZYhKqqD68KDeeSDTckMfpTqNNfsasAoKaMBnn1fvyjzqt6x7K12JR2htkuQQkZYKmJV",
  "key23": "wWqiGLmrmecf6zTFoUc9s2XCQCfm7fVbD5y227KuhQtjZWBNpght41Ac4fKPB8wv3P8ofNG5Yfj5ZwZbzgyZb95",
  "key24": "5qmksZAj825jUf2Vb3JctU2YkSeR5hNEKrCGCAddyy4qGSzTJ5KnKB2FKz4cGEjnp1CTCNmQnaNqXDqPsm3zGwMS",
  "key25": "2NtFKp8K2vK1wpRgiyQ2XTope4eZ13ti5ooA3CddkmcUStuVue1JDqGioqf8wKXaqRzuZEdehAV9uR4sNEAhoUuQ",
  "key26": "4M79wdctNmJj7b5Lpx9zyGrUYHg224SKHT3DxZsRmHkba8nf4c8QSBt4KSMoojXwGLkgotKwYppwrgkFWMGXJySo",
  "key27": "5i5swEEtvPqkBjFe5EWYDL6zRXSYF9rAnpfzJDK2RHZPHJgnn353pYfRvKjntuwxckTvSGp8ZKoLdvbAABqhue8p",
  "key28": "5FyyJC5sptpjqBw81cGVZBzjo8vkFc5CMahs9jJTpgmwbstvSu1ys3KwoJn2eBZQZy3p6tqVBJTEUR5GdtYcp96T",
  "key29": "2fY3DeAnnGFKhUQQxXumekhLByPGnEw51QHziEAY323P6qj4YAXQ1uwkEnHRMHyWgBbSDp9hpBi8uDSp4oHQH6yA",
  "key30": "uBQtzxWQveoESyWxmwc9v83qmAstxp82HAaYnq6hbCUvpDURU9ui3BXowRiTgurvY197AkgJWhiW1YFnb4x1nsg",
  "key31": "2ceGuR3uLsyaQqTTnztEQKLtgUMPWNbMTjBvKs4YHnhiXZWuXmABsQVRVJQPx3KTPR4CbdsGMUmJAT86LibZyDc9",
  "key32": "5RShfM2B99zz9hhv6EzNQDdKdPZYsmV4HvWsSg4jZ13HN77DJJ9cDZHkvequRf8qVPPm3Y11kUbWNDvmBfjSK9mc",
  "key33": "83oX1tg1sCTit5sy2Gnr9PKsPCk8EnK2bT1ieWqBbEHBaLhTcpBjiJbk2Eu7nETAz5Wv22tdpo7pQM5sjGfNcZo",
  "key34": "VWNdHWRHa8nMY2Vt1WixYHmVrPVwGE4bHcEKRDCJzzv33n1qA4zA2fSNLjDnxgHedNdCH5v5fdZqXx6qFDj9zEx",
  "key35": "axptYcEwwCRi1U5ApivuHqWtGKZKhEoYoT8kioNULFB4ooQLtBw2yfe5HNF8k8TRHaqeJqoMF62Btfn8HSkytXe",
  "key36": "beVvCnCJJq6hoVK8HMnWufdfQWQzKmTPw4iNVs15wNxSwYbnaFj5pFEqZHRhQqFWfQ8DcJ2FniWh6UhJxwAB8rt",
  "key37": "2KA9rqb76KQpL8AE7BS12nVL4p2gFeXRz6MfQuWePRK6zQbEUxPkqvyW4nSt4XWKrGmfoX3yCP7eyXxJEseCyUHq",
  "key38": "2SrBbZCZY1ZB8BGwWaSRminQ2A5FLK5FqWQHVhYzFkxqp6deZKsrCZZ66oTGPmcV5nZKViWWZ2SdLbwh6Jhi1ZLS",
  "key39": "3VWRyCMw9JzMStBrszw1pV12hfTRoKAdoqhPqAbi1XSNh7QEgtLKnMVNA9Mk4BWU4H52RTadR3z2kZ9NFu4KAM6d",
  "key40": "kwQaA9co5NRkr3H3PKxizfn1qcBHBSwpMpJKSBVptB3nFyB8SN9HKLhZVa3GA8iKWsrr2hdBJMXfUmQsXcWGhvn",
  "key41": "5YuUBQcK9j5XR2JpEu4sPUV8FJkeDWqtzaq28Zsh6k6SPJFm4TTkuoD2qaUbgSu57M2wZXKP2bjC1MBgM7zoCigd",
  "key42": "57vNmSi6cSshrfdx5nS8hacpFhYqHR7vVwW5Mo4kKX6XEPJWi1BX8nMij9D2guziyueWG8HBDMx8VnnCzcWUXzji",
  "key43": "3BC8eKoXaCVYLu79KPMkuwEBSqgb6cDqLnaq2H2QjQcQo1VtdU4MLNM4HKHa26zLsJpByVXfjyAViVbhfXGYmwxv",
  "key44": "3rmcmfJJX7uPJCGyB1JHPaWdp83XpjavcxhGNCnCLyq72RvRN1RAQF9GLFynisodAYC5F9bmCxWboPGYgnRwSQ1V"
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
