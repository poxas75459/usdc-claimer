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
    "nZAUpTHGDTPZV5tf3NdsLKV5YBuYomxXDAYVtCnPZa33L2JNxx5ddryKo7zPR61HpLvSFUQ24HogYvwuPEGzj1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38PkBNfUFk6sa5bQ5mPNsErRQNXdg7jQ4rrxxwH7RzQKu3tnTDxdBNeKCMYjpzqv5YnVbNp1r52AZg6fVUVJQx8Y",
  "key1": "D3fcpdokJxr2uJ8NZYNZ8oStRpRZyPcYcKj6X852XADz4wTDZaCAiypGgkY2EeXBDZ6ahBaN2hr9N16hZ5FUatY",
  "key2": "4iu8wvA2RnrfymK28J9x8QGhgcmY9qGKUvDnZYCv4nT15i9PsDvtWbzoG7okdTSXEDFGN31uRLX2RJUJuqPm4Uob",
  "key3": "91RsjCUeExBwi2U7aF5CdxdH5eW8rd4LaHLJNKtEQh5rDRARjd6QY4JKMCNmCLz44JiQFRbRfh8wVRs74nqBM9R",
  "key4": "2zeVycYKBV7sAaPScDTdeWwGhKMRpYWYAbbp5y3SpbiypDQimk5uaM41E35ydT7vhty78v3phpG29N9MjrkKpMAN",
  "key5": "38JGjPzbMXSmuWDKyDEo382z3Yf9qZYjXtFeFdZ7Gkbt4NRfH5stJ32B7Hw5rqmqrfhuy9XjCPGMUrpsEsMKMYt8",
  "key6": "3aoax38Fap7xeE6i1r1vJgwpnKoQFBzX32iLkgfu1bv4L4xJZxyVhLDAWVAprhJ6421xCq6D9teKwvZWyuTJBhuX",
  "key7": "4ehYMrfRLj6AUXYU8zYpbQFqvtGDKZu2Pt89hrNSFnnHJKN2CZ6HcaxNfRKivYFNz64pm5Xw3UPzHNKuvkVe5oZx",
  "key8": "5ksv3EuGowd8FHNAicN2nVPwGjjm5CQSV7uPTEJLosbqrkDayKWGQBavCe85n8EyqtXsmG3YJkvA4qLmjSVzg6vH",
  "key9": "35HR29xuRRbmGLCrraXwmAB3DxH9oXvdANLKcds7E515YLZ3eyYXYrtAXSaWjE16pesFdzEXhJ8opur5XYvrDejW",
  "key10": "5bhKjXDBPw1psqZbsqs3FEQECSkZroDTsRmkmhwZBms8CW5M8YwVnnpaUHfWkwgc1MZf8KJNHKX3C1vb4r6iRLYQ",
  "key11": "kdk5sJ2km2NZFqWmxv8MedK63unm5pzGRrWcGbBzDwnyPJn5QscJRMDfm7812iztQpFu9aquNoFD7mtu4fva9mZ",
  "key12": "5CYgfjdrwEicx13pfMzn8Y7xLrnF6P7isWVEVYdAGxgdysdp3LBZvSpGFypX9aeW8ARDY6y8uzmxJsKTM2YPaPGp",
  "key13": "z3GhoqiHTRD6yGF6C77eVidoqAdm9gSTWdgZfipV8K3zCSSYZRrMZsKPrjunEkWjiizoctjY1yEQgBkEDPQ5FNV",
  "key14": "i7UHrokt9BWYBsn6tpYq72PVvUvjKbvNPoGVFTrc5NDk5QPaMee2qZTM1CtkFRCcpJLfAjSR5hgm3QgrnC1RmBh",
  "key15": "3nXEiRUheEfJtDoWc3wjBsHeGMnUQt5j7p9UR4GQvH12niUhPRJWHgRd5R99UKJP9oKXE8YRwojXocgP68pvJwor",
  "key16": "2Y3Lp7cW9V9Nsp1HA5J8EsGRNeXdgNZzwjmt8YqytiMAumyjgi5WMZtajS1ZovXypgSoox7VcJWuTXRqve61wxKD",
  "key17": "5ExswEFmEJLSuxFfQZVNRCCz8MKSrTKhTfvYhfdgkhLP14Ld7iJj5g7SGqm32omqBuvSiUUq9M94cf9pqjtC7jhN",
  "key18": "5Tb2kHedvRBMfWmc5jFpV8e6Ckst5Jczc9Lr4SrvRRNcGTQ5dokvZV2edbFuP1cogZxULKZPqiscZWUdwDRG4kQK",
  "key19": "2SPRdfRZ9o2mw5bYC7KcLeMNfQtUpAUVeBYMkKG84kb4KW385cj5AwMeNQ1YQs2Ym5v4SCLsMURjmch9DSia6nwX",
  "key20": "5f4DE5vPKEY2YHuQ3BKArAroiPN9vqJdi7f7wQuUw3KiciK1TxHRn2GiZDghh3p5q9JKXPu3kf6V2A9wU9NidNeQ",
  "key21": "3ust59yMX5QWM1kDyBEbdfk8CEjmgRvPjEfA19wX1qkvgHpohnVuCC1FFUk7qbcQdM1BGaHWNit8Hr8iPEjEQwdY",
  "key22": "25aWXp9A3R1SG9pR4xBehEJgit9EhKaWS8R5gBz6Cj2CikmREmtsMzDv3HoZieV9hm3Xaz7mrw2kRDuEhEeHZ3Qk",
  "key23": "44YEdw88FLfjCqV76qpyZ9uisMmQ5ia2fAJb7pg9PxzeMvV5uYKFxVuFprvGWYXZ3zrsgvcXnv3QkNVhuYRBtViD",
  "key24": "5GL9dbRnX3xpBX825EPQ412k5DXrZ9aWhsjWwJrYvQ4CA5vSvzndB2iddkMDevk6JYk7y384ipcHXREkH8RUeCtp",
  "key25": "2NtDKqCmmSJE1zjycEHLLRoMya4Mp7G4jXxwqtxSgMehWXbHCNLQc8dLqS6he3tc7WehU9QGRdJspUdBvR7i1wbb",
  "key26": "3RAvw7YZwXrLAh2LLFaniuSHxKRrMzxiojNpqbUTQhPcRQDhcXJA9ATPQWyRiUK7nN2j8Rrxdj431L3F1cEkEjdQ",
  "key27": "iq8ftijdXtxcdQ1BUVdyMWAgNR2WpdxStEb5T8rjomhrpJdmLecguEdQpoGLsiTp8t84mgWGhbKTTTUeoVih1Be",
  "key28": "5VAj4p8TZUd8RAtcU4ihD9Ubo15YGM61z3nZJPTrEYuxRVvbZN2DfLAUen6t2EZ6vCYLuCVuymcCktCBKAYGT9Dp",
  "key29": "5dy18viw3vujzvHPEkBjgg2WVZDVZ1pnJeTYwGZzV29q5QHYqwxW361iuG9FjRigyaS9Eir2diqWvPcnzTh2m8ea",
  "key30": "3LEzfgE3GQV6eLki6vxF9NsKFqVyYKFYQPZR2zk4d1H1jcZhiiwMW6SFvJG8SaGPMBnGQW3fshvjrmJgY19yBFb8"
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
