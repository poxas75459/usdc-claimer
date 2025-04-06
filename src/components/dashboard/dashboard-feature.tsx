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
    "261t55eguwKYSPbC9cvrPZY597PfC2djYPKjAzTuTtHZ2udw6QeFgNa5tmhJM5jGE4PeUZw1ymT3kfSQvjso7fo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCkELPyCHCA5kpjHu7c4BH3HMtJnmnK1jchjy8q51tsboNGB8AzDrDMpXwasM8EFqP9nuctzqsfYb2FjQfgwXi7",
  "key1": "2L8gvbgYGbNqTSJXYEVb4tndZRF5A8oVv5eTgoXrSGy1QUFCGtRLSJBuWbJvqJsBGJuutDWS8b5uJYWun9TT55B8",
  "key2": "5r3TeYh26DP6zBQDKxwPXfQmgXXBVyPYua12w9cK3yJAkkgpqp1xNY2JgbFe5EkzHkzc4PGmrh2xZbH1H8wGMsJr",
  "key3": "4gxBc1RFX4BuWz7CXnbzxWhjo8dA32c9ryceCcF1WmS7G2wVaGfupMSZdz4LVdqYkEKuZn1f8LBn73ZJo58ryBWN",
  "key4": "3mtDKn7xpaiyLTyEX4KgDikrHYWMxkrPLwhgSmnKopVk7awoWQYYPV4xmMajeHy6XehM5g4BBr6BJME5kTKskHmj",
  "key5": "3ekMhuiExB47fkepz5ktTPS2qG7XZiXsWLD2n1e6ztMjfrGnDYV3Mt49FjeikvuxSF5GHdvMbcEebg5HF57uxyne",
  "key6": "4bWW58kvzP3Szvf54tetAqStmXR8DbT8k6NsbKLkEg1jQy8xskDwLym6gnaanQB6dQZEAQMbxN6ifueHJNdcV85d",
  "key7": "3c8jmoRV7yxukQRE4c8qBDJJUQyPQMgXy6GC5yA59JLXNQBABdVGGyKHzdX4muRdSBC8CtwJoxUMRYqwCrXCAtY1",
  "key8": "63zt2XPHwc1Lut68adTKXYuwRYXTUzdPuW4k2atvmhAfbZsaJwAVjFFZW7DiHccJP7ePgZxkyTJ91nMqB8vjeBWZ",
  "key9": "2HM5ZUMZLvQG36hEyjwtYRUr7bRrLeBsSS84ZKWBz5HtAL2e7k8TAw7G6B2JQPkFE4PqPLgn3jx9ubJoyBoFwrph",
  "key10": "2W28kQtFtaTEZowThdRVQsBD5yLgSNc73KZa4Cdoq3C78TaxkMWJ9wbHTS3a1HxJpmQSsnKNdAmCDbDEctaD1cKZ",
  "key11": "a7GSmcF8rbNA6RTuJRpx8zgvAqDNx1DDt8YXkGMHZKSoNXu4sQ9KRnjYjzGQxZpW4FKQUjJvHi6ZGy5iyxBYmUW",
  "key12": "4Sq3Hugyu65YsmfkWqYr4JMqutcRLbvk2zmTeuuYbLgasNJQH2dr7mPaLwzzvoMKcDjDS5CS8nEbUPMyW4NCxY1Y",
  "key13": "dB5SWABrJLp7BTAfPYmFdgqiNAn4hEEM81aRWejMB6J6rYohtYq8Te5dmDW22HoitL812TYeuVA8CtyRhYkGdSB",
  "key14": "2RKEuEbkkBWfDS1VqcPwt9X6vpBCCbiHzQiYNXL8d7okQZ1wh7t1Qo2v6Fcke9wRJD38i8mUsVo6dQtBujXv552Z",
  "key15": "5wGfbnYhmBkjoSAZS3rGkZugQcu2efmujNWTTURz35dA6nweh7dR5zip54FEgcyWrA3SxP1K1FQqbXLpTZWkUCzm",
  "key16": "2WYpyKYN4UjAK6vKXm4R9Mqta7nCsYML4HnhK6aFSZ62jfHBGNUcp1AxdFHJveTxa98dh43FbJZeZQ3VoQ1wJfT7",
  "key17": "vcZ45sD1tnMPbd9DxJW22zprVGEtmyUnB2KTLaq5e99GyaurezBvYT9eFnCUgh643TTyL9LZ4QUU8J36BZGsuX3",
  "key18": "5T78uqZJ3e2gDZTRjViCRVGeo5uwEjAmvkxVsvpUbdrwU97BKDtjUaWVY1NZMC7j3Jy56Zoej1qJHkXog3vmHUFZ",
  "key19": "Ec7C96dk4WapLzf3xPpBwSKcwmCYz3U4Bap6DnDz72EFsBxUv7KsZieFwacep7rgjwLqajkVzFu6TbHUbn8iyST",
  "key20": "4ffWqJWsPWQFhHYGykXPiELTJtGtxun9va8Hm4n9vpE75tav4o8Z3g9avq7kUjx4d7N3n1Kxi1gcUjQdrjYhAzeo",
  "key21": "2ac13bibz7cuaXPugP3nSgdbdzqawzFNvDxrUQiCL7tzV893k8PhGs4LiHSk8bdaCvr9Vkbpdch8DKaSJ7td129b",
  "key22": "3Emy9bWsPsMPct97i1vK7dhHRn1AyjeytQfX3MnKsUx6QrigMsFigW6m8GFtDytxUXV9mpRfZkrTY92Q83BaLXLG",
  "key23": "5gS7kMLbNsHL7M2XB8W1mJXaMrUQCii97gsaJKSpquzwvq8CCHKdEvSdHJ6jrbpj7TV3USuGCaXRmrbaSpmSomMc",
  "key24": "63VPgJH8F5eD381Eyk6g5BPgSgw5nLVMBLz1wnwSMkCN3jhYQGMfLzgXC23Y39gXE8zzNm9XscKWxdKXLyFteQCD",
  "key25": "43om8WcMgsZwuu7wde3BUZsN7jXryziCVM8dT2Z5seou65BNkkbuipkHNmW3trz5tTmytyNa1CRJWgQKd8zppZV8",
  "key26": "3RnZvWHGXzUAw2ibGVdTnex3r3C1fprhHLRvGk3ddsqjLh8wsxjN4L3gMe2Hzh4maiQmx3PDFYSNUhYHBQhUaLqb",
  "key27": "utCaX8fn51eYeVpV32i9Qsht4VFfLtAXF8xQY6qWZzucmApPvTPJQrgHB93rWY7MnX9CqLr81DyVG349sRBkxBG",
  "key28": "2AWULUnEihkGbU8TUZHGMmeQeCvXuNCGaF7JEwNqi8WkqyWVVXsLrvq3Aok1XfJAVpGThqqGhaQTpwFr6zTRc5s1",
  "key29": "5NEn8MJoiwx46Nar7QraHLefMkhQ5tAy5XNwDF9HKthyxsXp3c9RcwpirTS9h7jvx24ffeDMA7QTLy4Xhwf6kGbF",
  "key30": "36wE9PUE6pU9ibYNJoEi8QGFFG6pXoBcZgGDrR47aPxiYD9c4pmJPigCHJYNr8UMfdvdKgpeY2RdmC1X72j5M3XV",
  "key31": "4rxHbeczJ6mitJrCJJ7hJ3pxRa3temH7xofnjsiyFMdywRSyKV9jrNVmspoFnCNAPpvqw5PY2XfVaWXJs7Aodvnn",
  "key32": "4VwDuxGwQA8bZCfVwtucrLALVg3EVCYBhQY41uXCrnZefnmJ8tvYnEJeyUiBeghLLF6rxMx7EasYmUb4vDTwD5Qi",
  "key33": "44NY6NYhshaE7qZPJzSFJM8EbrdrJNtWXAxTq2YzJ9AB9a9grATM5wH35krLQn3GWiEmgyc8QRqHpkafsnYH5Qbn",
  "key34": "3UeJchCfU7BCWdsBuo3tZf3C2PNV4PYBncCXPQQaEgJu39CQhov4bfFijuJnc196KvFFFNgLqqPMDfMwkhbgcxe7",
  "key35": "3JNJw35hDDVknJQ7dcPH8qemrf81nepNDBeaHv6Vjeyvp6JUEYnsVxF8MqkVmG9k322qQWgpNjHtA3eSgAj51VFS",
  "key36": "GbkD6X69M7gfjQZEDZwAuupFNbAiKW9XVZZZZwe4ES3TzEWwPGnXQZLKC7r9RSchcLHDJimp4zcTBgeNA1XdQwN",
  "key37": "2xqGcWvsRJmxoLfYaJv7EsshZFVbexmMUvuHPZimnwLB5KNa1JUMyyM5mgyWzZXX1nCeuNWdPsxLa5pd2TWTBpNZ",
  "key38": "3Nx4EoKwLdhWyNTm4zNE2xspRx5XqtTu1tE1hjgcbKhYcHzFRMdqAdQ5beGjJNmKgAwdFcPpyR4v7TX5UqXPs5kz",
  "key39": "49ht4uoztnEuny248ETA2LuAQX1rABA99Cw2Svr5nBLpBDz3Ynp3NCQGE4qmBBCKZvgvKJMkFkbN7SnFXAdGaPX5"
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
