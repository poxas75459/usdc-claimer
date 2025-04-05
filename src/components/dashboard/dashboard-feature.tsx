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
    "9rMp5TDJwNt6nfuEirMxVi6qveLgKUqZomPoeUZMfihYF6bbdocUXfwVqDand5MCmUdnhV1zDSs5cgeKBzgKtDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PrzEUiDEQ3HcPXJXGXbptg7t2BDS72gwXoDVAfE3TG9atW7n6xTrT7UqAyMxkZXCLU3vv8dVgQAjbmCjx2V9ro",
  "key1": "2u5DwmgqY7XiM2yMQZhHm5zNnyUT3G5dCmb6Z2V7zXioLHwGHMzv4PQqH2kmun3q87Hw6BEoaPqjG43a8FB2qYSe",
  "key2": "3BFexXpgL2n2XHXa8ts4C4dtaDfVjauXpt9vs3PAyLch71gVnbnsUWMALG6ERUoWop9TznvxZ7F2dLSbtSkTUPk7",
  "key3": "5N7icpFvKAUztG6NjK9ALL6NdqqUDVyyKfTQinGh7K2nLJaMKCZV6gaKG4tXoSjaTnvyz4uCNaj4G763DQg4L43K",
  "key4": "61dV8AwPrs7Sa6cL7ZZxmw2z82LXT1VmC3sqADV8VGF33799AhTQGC639zYVsgPVrt1mHmH3XLU9dKE8T9jQkLmW",
  "key5": "3ui9woCH8o7LbcMhLNLtoQ4N8qFQdpn3PA4KgAP8WeM2sCNmwMyAHfLes7gMp3ksrmQXSQrEezddw1X9AR2Xf97V",
  "key6": "5xQXJpUVB6bHSmXeTgmemMb2qcVGNj6q83LrpCjBbc66H4Y2apXxJLUWxXQeUuVGohDqYUmjWKFKHBGx67MvhEoS",
  "key7": "2L2zi4U5xkCmY88PVVJYQYc5qn8BxbAjLBfgskfRJe5wGGcBFXausTU2DjC4irkjR332kuKr1cgJKLNdYJkW1m7e",
  "key8": "2DyZxjMMjgxQFgoCtySH5cLGQsTtFcN7FDM3w6kEggtQSUo6qXZe2GMtVWaRUBBgS8mmRWSZWjQ4RSRvFZMSvR6H",
  "key9": "7ASxewZbiGBBWD1jpoTyBJ8f2xcXCcBWCVkcv8wpw9iYUiDvu5r6vieSSGttJaLQZPEHi8cXuDuJ2VVBzC6rVHn",
  "key10": "4xqM52qesN1A8drkcsoAES3EGXEj9JSU8i6F5MoQEwiCHfXDAD95FAk7yYETTeinDBDpttoc4nTDu9GtWFUQndYr",
  "key11": "3byaGZGduuGUTKQhhCaZfbv6AMvENmmMd91tQnhxqT9NqkT1QDkuJk2Y1thgVYgyvYHtNtTpEcktgJjLDyEBTfRS",
  "key12": "2fEFSsXMGiGp4gBtvBzi7ShKyqnbFYYQBzCi1dnkKxuUn4vV9kQd2aUw5nxBLwPYkpdsF21P18LRGBeiQg5FxG48",
  "key13": "Ptvbnh3iPWReeAfPk3rHvagPfpzuiCSKXApDM8pk6WxvTBLwQbhngZ4yGWJBqJKqmHPkKu82pgJL39CoMLRwuoi",
  "key14": "728MzSt8S1iQkpPE39frhd2KAjiiHvKbxDYhqnGsd7J7jSqJjMYnsK4WAwgZekZaJqLdVKdvpLE7xTvQ9poS323",
  "key15": "5s1XfSUYp6hqhqtD9yid1WeF5gZYqt3w3tQEVPSTThc62jWN4mzMYs2FTCDr3wWAb6bJUHcHxWENkxCGTctM91MH",
  "key16": "4Gsomq76k15LJV53NMtgxPwchh9PoTRkT6EcjKozU5vEWmvoFHQPXgf7AVgr97KFLvVN1b7axfFbXJQQhxvGa7mB",
  "key17": "2Rc87xpGasQFkUaB3KPbGU28jafPdczrwpjRaoUfG5YcAxgcs3frVU7SnKQTLf9cuxkxRowTjhT1fg44JhjajM1b",
  "key18": "3brJw4TsTHZyL6YsWxZuMJ4Bj4rgdzMqbzcAn4Vrrena4UGmpGaLnvzDJ1Ld2CsUT1cFw1j4cuMZwgfmxgqEEwGJ",
  "key19": "c4Nuku7Uxav3wkKY1dTeFEyyPLaZJMYVYqNQZPANPYNXANCtgeqabCCmddFSAh7VLwazneBjgSnFPiB4RwajF7a",
  "key20": "4AmT7sTuCkoWzF2ZinjGWFanuJioNiJfYgvR3T7Y2iqfuFyPAEuM1hubX8Qv9Daw1wsCAGi6mqYGBxU8iDFDTX3K",
  "key21": "re7i52YcDRkR5kwmwfp22XhNmngFzsV6jRzM4zVsEaFTX5AdAKNDFHd2JEkbRQpjBwZdrBmZ9NqzFENzCvVvp3t",
  "key22": "53wrdXXRp9X3vRncagXr4ccBkYfWPQtxdoJdqqtRjdf1qbFLhzDfBSM929VAXyEo6dhx66SUdk6gvvqFi3imsmpS",
  "key23": "63us7Bee68npuVxFyWjR4cahLjVHrR2MzQ8bHhmyQjkyeKzdroLM6GLBPxT2fRp4T6ymv2CCsiQMhZjEARXs91Su",
  "key24": "2Vinxo5H7YNzaZPdZdpq4SDsX56Gx9cxnuXkrqNSuaTzRXejAc8JM4vdDisNZUpvXSooieiKW9zBCp1K3EkZpp1Q",
  "key25": "27qisMnL6CFqbQCVW9zNDv8YN9S55e4wUgq66kTehbqDarVfaKpeaQcBij48V484KWPykwRCp1vLMZhjvirNfp2v",
  "key26": "5vYrKbvTuEsDvY9vh6TZU6EJ33po49sfmAAih3aLRH6z2YSjVR6WpgTCFDsgtuiETv99kvowX6hEzd1o84KSUELo",
  "key27": "5cLoUBRC7PX5bH1qDRUuUqTf8eFzgtfucwSTr3kk6LuztxfVJ6dkdaCiq6xfzZ1hyPwoHcvHf1bqacjvEcHGFfqc",
  "key28": "3YyXPhaSB59F14iXZRVqpCKE9LRPU5P1amotduZ6tFEZhe4FnyKSyCsDjNWBXPaHKCQpeK74LPktBrt3gRhTEW5o",
  "key29": "5uQnwoo6LNd6gV1ZcDdUFn1GN9gL5mseNhWwPoY4YziD12BjC3bjrTLRw1f1qFVPTN2nPm7nSEzT6QgmFNZ23Zui",
  "key30": "3YMX1UyS4NsTqUo6GtoCsUZR77FY7fTREmGaHqgQ3XamDExaXhGzoDc4k5Tq9SzJ9b7dLsHox91sP152rkhzNRG6",
  "key31": "2eWYk5d4cpHN8CsGN8NJYHBGwxYDMQ3SasCH4ZxucLeYD3NepYWysnoYNrvyDxczDSDg72HQAkYUrSj3qP8aAE5U",
  "key32": "2WoCA6ndm8FyiXChMPXfyNkLqToo2YiLHZj32sH287Zm8uUaenqk5gutJKApy3yiFjNxvcQtBPSAdMLReG9GMX79",
  "key33": "67DFSWAaGdcGV6cgyTvmXPBp6M41bDkKUxy2G8TT3jvNBKQFQ2uZF7nZe8iLUQG5FmXPFzWCEEwCR7vLtAPVN2N6",
  "key34": "41E8iDMNkhaYE3aUU483YPisTdiG2emj5yEHn1j4uMsGAs1Tg5D5GbDiW8BEDELjAn7fDNuWERdKKYNsU5A5YedG",
  "key35": "2ZLBwQhHQFgoom5ZHeUwie486W7FhGm21FaKX3uotKc89DUQfg4MJuYiyow8Kp5bYNwaSnhfupegnKZQU2UEqR7U",
  "key36": "tjZVWngaGNxurBYibcyWGn9hGB9WBJ11K3YXDE2iJpWTTsQ5hxaXCehsKBs59fa23yPMrHHRG6t21RXrbaa96iv",
  "key37": "SrsXKeRKU2XrhE3B8FQAxsuf5hX6ZD5MCecZJCLNiYBH2LpkNxox3iXKVQiVQKcEQ3PvEUHYmsvd99o62y3wWhp",
  "key38": "3oaheoFQsz7n8Phbwm7e2pzDHZsRaj5UkVad4sqGwB9JPPpGmGxWFah2ekhfNFVeH7pu6Xs8fExpTw2KgdwhFqhU"
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
