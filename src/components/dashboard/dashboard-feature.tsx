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
    "5vaApiPDV4xhEiacG4zDYoLeo97MKsZqwYT29U5Z1G9xNoDGSwsxZByD3vkwswD4XRS1ArqUUE9WvLh6cf9ffp6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bxURvNLVTDBhtkzUDNn6p6NcmQRuxiWxfo2P19sisafwrEYAXaoLFQo3MH9eyPiD6RuT6LbZnJR8iYPhvp7RJm",
  "key1": "6bk5nsNXtzNnmtf15bP4Ut23mEiVJeQcQEPefWDsWb78jYXWSCya1LQJEgKmfLzMa28fQFU8TgfKgC3bbejRx1R",
  "key2": "2BiKBX52Y2Z9tVw2SY1mXwG8Fjf59yfhQsEWhepYBK6XHyGioGDbeKdxBsEntjG9dZmnVUJjgi3wbXPe9hNRM1kp",
  "key3": "dKbaqkgewpowNvwQyta9gK1PLJEK6PyfE5zdJS6xBj7jiiM2JhfpCtSqHD4ksHW4K3cVYGbqfHKVd5BYVhaBA5D",
  "key4": "4eirNgRszYoPiTTcvUrdLyP713QaSh4FpA6RWZPvbxnYb1tGtjCjrbS5cS5WXkKAuHKqxgFzQ8X7oV5g315JtDTw",
  "key5": "2ofPLsuhXPoJji7pZi6zz3u1egS4QPf81Q43v1FBnsVW3tRQ7Ninedofy4o216mdQQfWFXuZBXW8i5LBRjwKsN1Z",
  "key6": "4QopHXo2WLjdknhhKBE649xxoRipAwSwXfSXD7WrwbXtAfZn5uZiF5qVU77fC8Ydn7DyqTar6txVGqSwnfmGkQDg",
  "key7": "3JM3mtqutdxpnRKfoAWiv352fL65EP5JSkFA7HhW16kzbzsgk7We2fwD2yn2HZAoTsTNzECZKPCK3aukMmthp1aE",
  "key8": "3q6UqCxMuYk7YBhSnRJmZdW2SPd8jJ9UscVDhLMu3VAhNdrzN7NHC3WmqVY6VkZzinuDuD9tyT3ZX9UkhRVHedWL",
  "key9": "2YdUDVV2JWywoFh7C1R5CEdZsLBikK5qoAqKz7rUdBfqktu9j4WbVGznErbRrUjK7YoWAnJU3xRS1dBAUK2wmiex",
  "key10": "41bhUuMU4zRxwgDi2KPRtBccEnjGVsBUHPqM4ThjJs3x7bFH8DN6eYJvCxyuYmc4NRk8FMzHPm3mmFMR88yysGSQ",
  "key11": "2stypcGTxRShi1PRmShXWXSLoMPQJKs5pso63gE4oPrgLUFoTagtm7rjaoj81roGXXwsbwUMQNM1cYEGz3C9u392",
  "key12": "673nFbJXLvjfXTbefYmZT2NrKH5cunBpjgmKBmARXK7xpQx2uwL341LhU7tPPX4n6u4HXPnj1teBVJ9YjYYdjsoC",
  "key13": "2nN9raAawrVNbe3x9x5GFnsFiCR6djDTYbtCNmsXZPdY52ZeDtsqkpmRQ3B3CRWNaDxzNckVznH5YqzNCHpwp9PV",
  "key14": "5TAT5RTySSLqGWGez8nMyRH48dT1LsCKYf61ZsU7SWaVC6eytMdUb9ggmGCxLvWyp7oCX5qG7zkyepLC8VnrvWru",
  "key15": "FQ4MDCjBjKZmaDvn6H3McadYTy4YtA6qHQ93PaFJiDJhd9nHcKQCrQvbHtRMZUjV6yoovRuSxnbNAT1s2bSTKs5",
  "key16": "5zfbFN1XpPDjvBzdw1ngXwoiLeeLF88RVD2Sg36TGB5PL8B9fqYcG7xszQ1MhfEqDqYwC4P2meAKAmLpwHMRfvth",
  "key17": "4hhXqjXenoiahYL913928ADdPYZ83K5TcT8pdHNAyZtvExJjkpgLTztRyrRHU3c3iJxQhcAzH8QZAiD3dj21ww6y",
  "key18": "5ifoiToKB85snq42zoe5z8WT5qoC8KSfjgCJfruXzi8ZZWnSShcQuntgAS4SfzTrAAGELKmQxyyWH4GwNjNwNdDB",
  "key19": "xViU1uSijCYpsgT5Y4xjnzGfHZcReTjA7wY2nvu33MviJpuwdKUJJEHmgPyinqmygRZ1xH1yGeG4UBZLzM4UZUZ",
  "key20": "2B5drxGQziRqR3pVmHjRRyBzyVMwubopMvvieCfg5jkPDdhF9Ss6k6YDyK22FaoS4j1NYEvXfosNn3PUtVpLdwqv",
  "key21": "Rv2F1kDLTWBKm874V8hyHgQx7vmXoo12YrGrHA5dCGP7BS5G9Phuw8KASP5PqHhMUeD7TmAdi4mSZtPRosiGRJD",
  "key22": "3jJ1gHF753VbnvjYFkwr6knbSQVU7QYuVeNjeyDnkbCh6o9oFTT3qeHHzDM6MXy6iZe6MSnoiRQotdLheKbxTJK5",
  "key23": "3RPpbXwt4zTrW9z4TNyZCgbitrcn1JxcvepaxegjvtcqCUoDQnnw1uJSi86PvEfnPVvkD7yDUGf8YQ2e359vvXK5",
  "key24": "3RiRQFcEEeXF1Q9EaHhPCvF9yHsNiT4HNgRNUW4MCusAxJ5xdKN2bjzSy1x9kWgGgUnEbjBSBqsUCe1sAKevqvyb",
  "key25": "BvV78QEnbD9z7VwwANBtZJqwYfCYa7GbYfm9ZU2WqY8Bu95jZHJUtTG9iZZJUA47xb9D6URvyWC5od38aBxBjC2",
  "key26": "NACTXnPewqU2HiS61ZtwAKX9tJGjbwdSswjrxnrfzEDz8e923yPcjFELB8CtDQVf2AN3tL1v5HyiZeNDQ91zCWo",
  "key27": "3ZtWtQj32GSZRXD7c7swv8vei4KF6EoiPJaA2DKMVLEmta7eTqma6WB95U6GiayPAgSAUfvW4d8SihDZiYSoUL9W",
  "key28": "49e5XFEdbFWzkjq3myo6nAZi7UzKDVC3LT181KTfqoT4X214kjb9o6ezT1f7VFKBwd6EnGsG4KBxCCWWQFDU7nni",
  "key29": "3AmX6Fdwq8zn87SvaBff7yRSbckgsYt2q4nWCmdVJsYEFpD3wxCLbRss92VrYuNaWnUBsM2GPBYYAENyc4L5mn1u",
  "key30": "4FGGgURNL8sqBZgnVUFCRNgFNjPJ8T5PNZ1sRN5iGenztpWn3rC6kY5WovviuDCzgZzL9RgVYHd5z5ozszx7x5S9",
  "key31": "2msmKgRvqJRMJRFVbcDaAuBa36bzHWtf21ce56wVaxXWuwN1H3ZKKi1Dej3vKFzkE1ghUG6ErvhrpJXC84obpruv",
  "key32": "3FAEysdHvNVDkA7E9XXbxJ9SA3UQtxHGaaL9N3S2amFpdHwhSeW7uhQeQnmt4yUpa9PzdLXRLfYKzcZLD7MV5prb"
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
