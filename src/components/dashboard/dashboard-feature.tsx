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
    "3QuXxn6peDsdAoA2Lxx2qM3yWiCUY7tLBiRCg8Rim8nFjE5bQ7ThXpR5H2vd9N5gm13HExbGtufHedCv7mXAn2c7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgL3n9VanaRT486kiQZzr2cgJBydPV2Q6tD3Kuf8mhrJ37RCimhdoAMy7CFJW9p8o6YBEz8cAjBoY9TNisXMRzt",
  "key1": "3HQ1UKuqnf34FCAkFPaLWdCoH5zw8iH4W69wAFjh5W5aWQVU6znSF4w5JiTTjSUiri96vz246yxoTRZbY3ir4KoN",
  "key2": "43Wgz4VzjtyzUZJriFpiCjw2tVkr9hkxVniD3UrDreNg5LzR4UXu8gAjm66d2mPGMKH9uzWTSL9eNKeNPw6u7yAQ",
  "key3": "2UBiq5yNyu6hNErP4NyGiEpVW3JqKwWRN8uVb7pBamLyVvbKsWT9VZx6EPBSenFo2r8tH3Msi1ehZgKLdEr1MmZA",
  "key4": "5TPH5kvdcfzN11M9eUPWgJwMg5TMV5koJtTJ9RMqUvV4r2XjJHJF3aXVPtneJ91UWBZQ8HtExhHhL69fcKdsULwj",
  "key5": "449tu6gEHTuj6mNCDEgHZC91hd7SHVpceX72WBqoBuWpGFtyn2JBLUMdt5fFjpenbwBHAgAPPa94tuVit3yhb9gC",
  "key6": "5iWe3NKAW5LDSxqTpWmamxGpAqR1R9Js89qHPgZ81mB44e5eiVT36ZmUb2gNrTtLUcAi86a8ooeEav7tpd3V2voG",
  "key7": "3xANfabduok1o1Nn7YrMc8TPXzbVztmQFPNeRjfndfMoPye9j5GTVfodJBUFbfFL1P2zme8jfQiwo62B38sAyehd",
  "key8": "28VA4EowC6FXtDSd3p7U1XaiLcoBaARoD42Kh3oXRwn61vnUSupekYgEuM3m5hgJXmbUcMApAN81qkuZzak1owav",
  "key9": "t69UBVXg9inZYMCyoB6LkxLoVrV6mpCsvhKkMo66uXHVTSTh6SPY47u3tQGT6aUPmzD2bSVqdHR7FVD3nU3TqQP",
  "key10": "37R3SmA1m3ZrKtVT4DPpiF4iYpsrjo6tWPYFspdTb1qBFJuwN59gQNbtfj3o1WdwUJnzse5HZHiyKwJLVf9qA3CD",
  "key11": "6RYXboXez9aFpuAkkcGwnGGvAE52xcHS8ZhwpNgtHBqXoMhrw9VzSrRBz6DmftwYUHjL3RXuFYckkdPmowVhiSK",
  "key12": "254sJLk7bv7W2bS6QhTbBQdtsR24aKN3SREazp38RBkn5ZN9FWKsS2g22uYjqwqVYkjWvxPz8p69k5gRXEGWxvNv",
  "key13": "2739GTUkRNnjfu33VNvcYmJuabAyMPD8SmEEZv7CbygcAVKTGW5T5LDXWENE52LZpNUQexC9NGxmvWfehSqgydGX",
  "key14": "4nSQdmeQNdDVL3WMPLLTsHcvstc1Rk5aJ9rg35zoGTJmeD1VHPLLS1iJzZx2wv5ebZY7YyXHR7w2r3ZaGfrE2EYd",
  "key15": "5JMBoXFxmoeLEETu25L8fxWgaVkhj93KdU5TqpA268h2tVvb5Mg5b1FstwFPQhvyD286rbG8cWXr1vbT7tfLKNhq",
  "key16": "YFJm2JSMoEkr2F9k3GbVfZ6gRj9PenMkbdTpUze9GV5hgRhznFREMdzxvLfZUW6JSRoMqwvb9paDpgFkrhZWnAq",
  "key17": "5iP341pSqRyddJvcLm1CZ5DgExoopVvZskVbydeNb5kJexhvwJ8wNcsGWxKfiA1TFdNpTCDrS7BSMuiEh1YTsCmn",
  "key18": "DmUNQXWApNeouK8dScXV6LTitiSqkTBoPyN5w4Z8Rm3YY4KCKmvXz6CQiecQ4fpGBoNjPiQSsmXsYNbSKwA1xb8",
  "key19": "323rFAMFf1zLUodqHhLiwge5QmEiR6PAeJpyywg5NHTmyUW5cebfDWbCMN1yspY84TiZuXZjKx8pwfucZTZYf2xE",
  "key20": "23Mn3wbddSEbq828dcSrkSniR6P7PaW1wXJMKWVAVoxBvspAy4vY7jwtzXxMrVgFBEwLsxZwK6y7dG5wzEvL6HZw",
  "key21": "2PtrvtyBfsF2N93fCqb5AJMbNQGbhsXz6ChJNQjEkdQ6XYrhPtdEBkFB6gqmdcURpoAhns9GMpBuMRMkXPfT3AvR",
  "key22": "3r3PQGNuNMRP4ACcdZWYg9kBE378WWVLgsLQb1z3RMK7fnZvRQ5UZzBi6gh9hMLRvBPSvHgYV9RKfkkDfkKwaKDu",
  "key23": "1enKz5FBBsSitmZkf9NLrpW3PTpFJU6GRDjDbbQ7GRUCRMdBvu6dJDTv11VKnkx1YxsJ6TQhSqdAcaBwkgyS8ss",
  "key24": "2xRhNPX4LJ53JGhqf2Cf771Q8GNgPtUovrmvq7yzpRJBUfs34YkNtvB5rE52W5zkNq3xc3dJtPu6g5GpJf1fWjPc",
  "key25": "3x7RSzUzzy53t9QnqgJmPwfBfCfaDVFu6xsgADyBf6D69HZAzAs6EBfqog7eNddAPYNtEtjNp4TzxsDrou6aGxsR",
  "key26": "TiCpnHeLRDihQY9nZkBd9QUFvYTDKwUoqp5HNi8FczuFHNi6DQrqjYZQt6oeR2eYTn2YhCdFYwRkunPauCm6FLU",
  "key27": "5fAU28LQPG15khBZ3AJnnR42gYetoCubAYyzjZfqhpyXjqQihgmV7qdeqGPejqKCVV7dB8BU7zJn9AgBgmwjTaEr",
  "key28": "27HqgDaVpdaF8xAjqhr5MayZkiECwLVtcn9FWMHzfQNhFiecJd7uGBjU1TiMjbnWUp8DyRJRm6jQ2JLQYrQBYvxF",
  "key29": "52Vt6h7Dq5Zo7cGiXvo7VUfXqWCoxR26wpcyprZScMSPgjcbgNBHsAZ1wLMwCBf7BikPDtpK5kTu9Y1WRMPjmBvj",
  "key30": "XdEj2DBG6LoTEBA6M9u8HoNiz4fiTqUeb5UyRMkk3GpZ72S5Z7EfVASGuA19iaPFBWzVBas8YUt8g76a5KGgRG6",
  "key31": "Svunt6q72DYzngKYbAR9y3M6gSGMtWcSTkRPw7woZTDgzNeqzYbZNKhUgETRjeBDhZNMAzHvRW2VUHH9PZ2uzZt",
  "key32": "chW5oCdP3x8mY8EHKPoRrCpCeL1r5UiuLsnQgs4Qc96bUH6G7meUvsbHocxBGpRjiXjM9CYMDbxkU7Ukn95j29j",
  "key33": "nfKBQDQmPpE5JtBoPDYjfmtdSQXMGn6FYDHxstGzwXycNhAwSjAbPyJ7F9GCm1ccJzx52D3U7c8JsrBmftDr2Ba",
  "key34": "Gy1YjYw7cvptzZBWEk2XMEuwefQtnL43CPPs2KtPhH2AEWaxHJS5JspWnaFo49ND2ccyK4G938PnWVYpvGPvwRq",
  "key35": "2fXkkCbLnxFkofYKCRHuy4KPjT4KW52nSpiu9fkJK2XebCr73XmnzXRZp1oHjRrP75CarPksKZK2MfoTAWKAWuRa"
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
