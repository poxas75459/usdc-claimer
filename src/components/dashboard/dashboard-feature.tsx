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
    "uDTPz4kfnaw6PfjEuZhJMGLG3WQf1TZsRuH6h5qUWLTa7EbWmHcGTBAb4geshn8SbsKsEDPCWqBwGkVXFWKMFQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJFKA4RkiEg4BsxtyQi5oKkuiTB1nosnjNf8Z8eRqFN9MvUkYTRxcHLS6guJZj2RHtok3bFaNxDpR5DwXJJZsXR",
  "key1": "3TU1BMg9jLAPgDxagwHtXEDaBPgwTrKfEfLBERcNvurhBi2zR5xfZ7YUPfr18bD8sCH5jF473EBLWgf2u67fkDpn",
  "key2": "D7z4jf7s12JbopbpXWcGrAuBFDNxJsevS8A1XRp4NaWjYPoVxJVY3dzMXYtyHjtaDdbGLLouEueeUNcHwsYYxAy",
  "key3": "4U58eJsTNmSMqoacbs7SHqxGqhBssKCAsbjf1UQJGbAQwciesDV3g4euKEhoUgTYxjoUduP5jiVtyh2MJochmyy",
  "key4": "WPTkbRdqpEeVuG7QXhSFpX8TP11eAZ5qudHmKoUacoKVFG6JhQf8DvVB74zci9F6P9z4Q5UBfP55Kp6DxXhK3GN",
  "key5": "3VfyjxT63ykDcFUnAaucnyxUP3bLamaMcbiho6dHh4iYUHYVvuW335vQSBsq46TmS2j3597jm1yG93xGHcyRxhgQ",
  "key6": "3J8bMquM8bJRApTqeuRSBp9wvcta7S1t9eUS5GtUJkWhgjqj2buPHKfFAzC2yXNE2Zn2xbhwpDmZNkLoAZsU6TGa",
  "key7": "5dXzeiGHiRu1aptHcz3kfVwLnERUmDQCH4mgFo4M2wYfqnBJb7x9StjNwFf9Uw3vJaqN3wQco5XQndybeoYgECuh",
  "key8": "4hNBgsAW9FB6MV83mqif2YHCFGJBLYoinbk3nmszP7wkfJjWnppeE4nqsp7Nvie5z4Enq3ZVXw7mSeNCp7HWyu1J",
  "key9": "bLvzNQDoNxeZYF9ZwQxutgAmTFw5QD6wSKx1xzM3bUyFQgQRZCesBQ6jetWGkQWVJUcriGLk2Si76HvKv9Y2fux",
  "key10": "2G4F18U8YybzYG8hu4NXY8A1sT8GatL74tsFWghLeHvpHuc9GMiAfYBhkSg6hjF1vKuMHR3qbEW8ifss4HQPHjFK",
  "key11": "61cr4hVrZ96A5a12YNeWfTXxKyPodeFz6Yv687J4TZW7fkGi7FHDkCS6txcdyuU1cf8sAyhJwNT6QZh9tpxi2yW",
  "key12": "DLqZLfcnbBgU6CkDkJC774jQ7R7jTm9A9UVtibH6PhVniHkDWWi5eVJ3BP12P91719XaZvUMNU74i7AtECYpeKA",
  "key13": "XTvMv5aQiCRaRGwUxL1DfyJH2ttNgNDdjPsTb6Xfr66RFuyFmd9a46tbGxzL33SYUKfEmUFMbfNSpEWmGnc1vjX",
  "key14": "4u4xZ8h8WihjAqT621QqBSEjZtYfyEwEX6XdBUSfpoQDUvoPHWh9cA2bwyFdhCE63hzmGrJ3AVyYHbZZPH58E7zi",
  "key15": "4xKmhUoSuosi5wU2GQW3oR4Y4EDT8BnNcfKptnDmjzCcMw9vN8cmKWu81eKcsoPMXuK4uS5k4zJesTY5bJUHzJw",
  "key16": "3KXKZ8Tsx8f4xhC2BCx9zvtGFnGDZJs7r2ifw7fx6X3jvfFVfvQxdzZirFCDdo2upFin8q9V8qZAyp27q4SAPZ81",
  "key17": "4obe7yeR8s3KAxVJJD9qeggw5j2bGLNsc5wiGDdvSkFa2cNZhNzkVTFdFXgTfwFxMo1jyLUDjc9nX8yGKk2RDKfU",
  "key18": "4U2LDTZoLx5ybpoZnH3eJuAyJdgMMZPevh16eFAmBKfcNZiueti14xcQiEz9CUHdEBwMKeUTYKLpbY9jiCLStta8",
  "key19": "d6YuyFdQmquf5TKBkis8ZUaPG98VxQrmrbJQpnZKKM87FsbsKkj8Piq44ybFAT2sEizbKRVMNZpLeuqbE9HtBKu",
  "key20": "44HPLWM4UMy5ivoqzCrqA8VxCzAZYSYoDvEnvaqBGBeQfSj5JV9dAF6c8f5Hk1UZjZoKMser6NUsASCK2PKZdt8P",
  "key21": "5g9U9MqwaLrg13W8Dfz9WawRfhDajmjyiUBxR2xHtCwU2cvyeyXbYefxBumtzmSQsYURVaCz99P9aBc2wNJ8brvB",
  "key22": "3hWtY89hUDsE6pfMpasXAbbWcCuNfJ1e9x2Bt9RdCKW3hX5tiGZhB7Te2Tc78XYJw5kJz8pYdeAPzJo9dMkKuEoA",
  "key23": "rpAxKSFgz3MqJ9YsUVjfiEfZjNSStCqoWZFPmWxv7eLCXSzfWhpr2cMyfPvd7CtuyTqonFBc6mSyEoa6QuGdked",
  "key24": "5bDndUceTdQKteN9m8SM5VESdwznM8DooV86ZYSTqZSbzNwARLxX1HTKbeRF3eRp8EoGRsX2hr3u8VNCmqsZvexU",
  "key25": "65B5PrAoimPAFPSw5cyNXvM8RPG4BAgt4aJDLLUNPwyWHrYQTQZybGW54vspt6XJopkYEL2rnPm1ZSAcoVvrrSAZ",
  "key26": "5yPgzdvnXpogQGongTrcp1wjD7UPt3VDHPg1Y5iRmtH1QefNkUsunJG9uUxGFVAxmya65VC7H5ckMtx7bGXtU3HR",
  "key27": "4iQmckAD1edSXVh4wbngzoVuuZgVuf9yWeh4HX9iPtZgMkZ55Vjrgz6awCzug5ZMHYqSKzFAbMLFAMSFJQ4KbyoX",
  "key28": "3orkd5vokzvnP6zSywzqqr9TNGhpZ8n6GYBBaXp7ejhqtXk6NJkQAdgzYWhxmf1gsNhsKVR68URWCLUTUwBcf31v",
  "key29": "3oKSjziLSUfcQjsxY2ka3n667hTVFhG3vNoC186K9Fasd6qaeXntYBhruaEotbpN1C8JXLsYKJxDGBJcbGtHjdjq",
  "key30": "6k2CQE3LCbbBR1amkJ6SjLg63TU3osxxFiYDj3TA7nWhrsk6rBkKp18fhtgsXHD22m8hJGZnwetTReeAyQT9LzU",
  "key31": "2gNjG18s28DHLY244m552uqftr4QusiQPNB8PgAPRVhZXj5pqw9yHjgqmF2Z29UAjFPFg7AcWHiTdAongEeu5C1C",
  "key32": "5CtF9dGiDohTtCd8sCzgmrau2UbNdikLotdxvPsm5TNP55jT3Lwz6yyJvYi7HJisjYCCBgxXiZsawi5ds5DPNbxE",
  "key33": "314LmFMXKcswaEMNry26PhRDX8prs67F5bV6TDvrkRzh3yKYb38UF97SU7PFqmRZ3qDrvnbb4mMszo1ZGNhLUtHN",
  "key34": "3cjRy1ByvWxMSyFaDRS5c1P9ZUaUx4CrxVCdPQ3cDpxm3gwqMiHEsvHp59DygG3zgP9dfH86ksx8uFecTm2rcaU6",
  "key35": "osLdEDLf8czX8tAjtmGWYxKSmzBiVcUz6bvDLomhJuAbDmhY9TLUQaLxga2KXdVWXnZmNA3bdHkRuvzM1soV8H9"
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
