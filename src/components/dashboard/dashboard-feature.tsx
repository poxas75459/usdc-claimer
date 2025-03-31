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
    "4GTMeEHNyc8mK51KLdbm69Q6CEDqNB9k1vmdEduBQ7KFvNZi4UjHEWtJVjguG5kDoFk2Frgxxk9pbaxXmsDQuW9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRoZBkAtw6dPUxm6VFAyfxpNGNiP9UgV14SXwCaEUXEv7TkHURZcZHpeNnDUJJz988BYor7ikA4p6qZ8Rs825q2",
  "key1": "2Yc7j4SxcAmpEJssStPwstNCTWhniTrUZaT6RmhSQVdPTGFNymZDv9cb7e63ymia8RCVzXF1hBQorzuA6F8zyafZ",
  "key2": "2cvp9ZbKzsLyBqpfjF79R7bmkVZ4UsUSPqgMLSLgMBRQ3rmxo6UHQY15EeXg745nzhZr3LHbRwmY3Wbu9a6Fk8AM",
  "key3": "3pfPQhA2bXoFT6mNq6MN8LcbYMQE1otfXZUKRD76gE9XsnpXTeMHMERY6z8oQpJDHXzW8c5Gcm8T1L898EcKecBP",
  "key4": "5i9Nt2YmTBGy2TcsYUHZuQtBZwv6APePTRYsSJycZszc56N9jbWmLeBJmrhNKn1Rc4Y2fet4Cxu1axjFoLqsBinw",
  "key5": "4zxNDoQMPxxUQJpLeoN68oVQx7HFXiJCBXCcsN6idjSYgy77TJrMPmrmS8AeioqtkuimezxEWT1VYi56zostcXuU",
  "key6": "3ZKYbBuk9E6hQtkDcSmywMdejP63W1SaFUswackkCNMLRj7yVQZZsAsKefA2TuywxF1hv76ShCpwMv8JQh6StWvz",
  "key7": "5nnfvnWDGR3y2mRPBLDvrgNNoC2x96uddPoacz8HsVoUJGdd2hsTV69BhVvYgSjDtHZvNj5yAHRHbCLzpqwL7mj8",
  "key8": "3hwqTTyMFWehLbtA1YRAoeNVv3shVcCc72GqD9VLa4ME7VEeBuyhDN3PKEDZv87QNumAaT1wUAyZ4o3USmjoxDFw",
  "key9": "3SwxpTrKZdJ4rGJGz7gYA5zcVqqueo7FkjJW6npLh7Cxq3UTSPwHZvq6FFYsCeQ7SnYokuFBsZnUbpDiWtBDTR2A",
  "key10": "4h1CDrv47KdWv6gF6N4QE4iBk1qC854ZPBarxZC3bT5EyQV7sMHSnsNQQxeGJcrag1fTZgRJeavWPfqxuT2687J9",
  "key11": "AdaqXmx8kziEWQkCeR4aG5GjzTC8pqc7ZfHbQbrKAD79iVdX47FQdvJ2X3KwwFhCeizX3q2VXNpwjzuSuTM8KT2",
  "key12": "3vcbpsgcF5k4MpHXQgJ9ivEGbEbpYvBXfnGQDo84Af7AhYcqHEMya2wjbrs2dw1pD7bxBGYMHqrmQfsmdDef1rye",
  "key13": "2mGFt1bEDL498vmTK9UgDsD5uLVg8RTMR8zomNo4upGzBSjwhhTwGoAcQNCnwrewPTngkfntJM1RQ1N6rPJ2RjSg",
  "key14": "5tZ1SuNih54sxg1HBfF5hg7xJopjdz6AzXGZYUAANPS2mrfG86Pbnvguf5XqX3AKRzYsCAXDedoksDBPTTkXGqkg",
  "key15": "iifZFnmb5PBDbT6kjRtx4S5BKt9zWfoALbzBPGdTqQ6vR7k37JBC486GoQGw8naCQw6C4y1kFaTrWsaohkvtqRf",
  "key16": "5nY9MC2A8HxA39w4sMVfYV6xd7FR3SPQKnkavhVZfANpRgHdB3eeeFZXQFALxzedUVHBXQhV5XtmERseoVFPxLXM",
  "key17": "4Awkiu9WGcadYoFpqtcbRXzaLjGPp8Cf6ESvtH9rQaN1f3qz1QbkfsnL9bvEjXSUZHytJwJ9TrwY3yF3WjmqEfd5",
  "key18": "4XusMy9ud3WNZhWdzppQjm7yxoVVWwiuTVq9hdnnBqUwcDCWWCYZaafn4V87SeuFz1q5QL9nCytePoQkDZHpF9Sy",
  "key19": "4HkwoBmEC3tKWh3p4jgqwkCjUzDCt48unvp4RgsxonAaFK1mrczQ1mj5CbbyLaRVHFrmNWKPKezQBrRRWVSeZ9uW",
  "key20": "kfcuBPHingBixBrS4zvNQYDv6bRiMysKWknW7HhZtUp7UGQ9QHyke4uSmQNxzRymft9gXmhqRvgUS1ixJF6hShe",
  "key21": "2qPrm64x7rARS1xEYv3GxP3FfYxK1iRS9XkRstsa8DwLdQSo7aLvKwBYo5u343rm2kyCWPwGZmaP9x7WAsgjTWBD",
  "key22": "56kvxzh36nVhUnaCYEzwSA2CVd993QSKe5Z5X5i1NhqMPGVUPnB2oTKwYNM4adpbd3UpuQfQqnBZxTbYbHG8Hx3L",
  "key23": "2FxKzk6XCi9MkbYsDQDe558UNBPLUXQQhLhH6tu33fRthe7Qrxo5XiuDMTWcQ9vEdrU5bii24wUGDp4rwC2fdqgx",
  "key24": "vC43VBtZ9FHco8AiLkBcEK7vsyEYkxN3zZ59kxi66KRCz9XwJfkBbneGBWQMKc5rmQK4YZAChDFEMJQJ26NC29B",
  "key25": "2pVq9y15GznQ7CVtGnMMWyCctdrLt1wtvtnhRkRSKvBfSfRBsVprhWAv8P9FJLSgHXfZhAkmfSobGqtvL3B2QgnE",
  "key26": "4XKuLToWkARhWRtPyKcKmrGfqz8FD9h4P1ZttvhmJkgzixFhpzxf5KQfZY5xoX53BEfGWUMsvtRWNMzNcsy1Mw8s",
  "key27": "2SQyLaiqWfduuXPoiYyLyjR5VmVtsjR1GniiNaGmxvLkBB34zzpMeZUKbsw5AAPvWz8URXKegcgtniaKRofDaZp9",
  "key28": "4P3v2MR9rUDQucdTe7YDeeyMrBxBGKdtmhwBt15yMua66uVEYJ7QJyh7cFDuKQDiWiLgymT5CbTXHy1C3kcr87jk",
  "key29": "u3scFAgZCcd82M3PXfrjSwePBCkAu8HV38k3ZbKigmwHACk2HNYS28oWB4PEqH5tStoKsbcHVeoyJSJPejUKmAn",
  "key30": "3jxYFhpit2w2zGH7m6Uje5UgcZsDdgeotyXiTVD5S6dptXS1RhzcA4nSwQ38GuLMmmb1Gm2zKWemgfFSUwUyjvgV",
  "key31": "3NuGsh5u24cFN3xBLmwc4G8TE6RofYgu2SZaktrwngYQxUstsihrHEZjPJhnJxgeCACh2uaDDpdbyPVDSsCgscNf",
  "key32": "MaMj8kkesJJD7MdF1bxvzPxWiH6awqR7D9S7nf6wvVYMpKmZymSNYPen5fMsq3ukynkM3jUeiJ6DA8nRyjhV72b",
  "key33": "3axxZRAWXRxEQdzMoDG78uaxzqC4Mrw7YckDqqXvzQAmA9kE8fQuVzEy6Pw7R96GUkfxvYekCdgRmRhPzwiYajpe",
  "key34": "3RJtrcBcUgbhCGZV1DaAbuA4w2MHVPYPJRYGkpu9bpEgM7jgkzSe978e8HGizg9bCfjiZyxfgrmCgTJkAUherFnC",
  "key35": "46BBDULUsb6eu76A4AbXxEUNuUo9kuFmmnFuntsutviQCsKPKpLKULXUBEpfEpxHwr1zrSM4PY1TDDSvvwYggxVZ",
  "key36": "353dfpDXQjZfiLGJtTYqsdZA2vvn5A7DHL1XL45Y3viWeThmm8gbmy7cQZyrg3PiwwiQzwjgrjSiMKmqg1TbxMxP",
  "key37": "67SFuVtrmXDMS2oiWcMRHbkeCCZUZDYYj3dzy35Bc5MFUe48ynpazJVFYS5TS4CfTZpCm9xPTtawQ1U3M1FHUfYr",
  "key38": "F7V28k4A2A1wMN9ucuY21FyzXdGM7yHfnZG9w44uqRwNkPYUJXECyiszRkqkGzb8TJEL7ojqCBLsEwT127iBwro"
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
