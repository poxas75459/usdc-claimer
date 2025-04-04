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
    "59hBLnfUbbryX2U6AkfiEhgTXB8NsFTHFn61jnqF8RzQZ3iSL7xFvkq7o4BjgRM5dZ4AAEXtYyBFsv2qou1tAeTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vY85Wief8hmvsmLTwNYpxzryBXjBh8mVf5aozUiAciJgTmYNGuf3N1yfBzmzheKS6dKa2NoGfqmxGHpzGxmbDUa",
  "key1": "5QUcWpa7uZYXD3noEExXgUV6Wxm51qcrmBEZPwfxLey6LaUEbzRETd1xzwiE32vFSUFMWEwFu4EXWgFvhgZMwnFw",
  "key2": "1achGRZ11aYVwK1BsTUB3ExVbZAhkrm2apn6gZ3bkF6BiAGRAcCyrS26jYs6L17Zc6pimXwhNsWJ1tmEtzvxKgv",
  "key3": "3wNE7LvkGNBQKA82pcJWJkY3ZAEu8YLJ84ujq5s4KJvgsLnsgPWpevPLi6eyMfXM64v3HtaFy8TuRxiFWJUmJ27e",
  "key4": "3shhFHX49qHEo4GmsK7KZXhXX1ZNqK4eDdNpS8cKrfkwqgo6qkKAeyFF1zU7wPd8BFHQcmFqB9qVpMc3WGbBo29T",
  "key5": "34Sd1QVU2bR6aJ2ZwuxPMMiMcHRbCbuVM1QBui6p7nhDS8ZHcJ8Pxw9GiZTasguqkWdxvVzAPjDC5RxQ6NC4EYhi",
  "key6": "4j45bj97MxJ8gZXQLdiLg9qSbxJTc64CsS4YW9n9atgMwGmfLuatSZwWVPnub8efJbyFh4KSccMZNXjT9eXhRwow",
  "key7": "fxS7bceZCuT1vMzgqbSvxTnekaUKyRU7z786DU1VV4DxnFTEX3ZtTar22G18ZuGLRFUjivmoQvGJ25aVeW6ihuR",
  "key8": "4yV6eDG6T8qnmA2cria8LkK3NuZdDcrT99USGkeR6A1ivmFYUHaPmNzahzo6FSYmrWBqNHDYdmyYT4ymqDhpWzA9",
  "key9": "42ZnDVm6dpA2yrUCLSGjTVnHswmTFyi7DczJwhxGNVfE4cqZnsm5vGHnu1CDa1jYeG2euic7wJoyUCU9Awxrrowo",
  "key10": "p9FW5aZEMeFf5kHoZu8AAsvDyLQVJWomuMyzDxGEptteJGKQ84bK2CyHLtYpHaqHo5SEntHZRoRkeBmM5MRVNwb",
  "key11": "3Gx666EbQK9SfD7GRTeL6vN5qJSFtrTJF2cpBwfoxrhKdnDozBaTUzRRkB9hxs5aKYjgGABSdrTxkU85zTQpzrxZ",
  "key12": "21Nn2sSZDWhq1adb8Yb9RNbu4X6jzb98iJnhGATDBPdXdYiqkR8qMdC2rhXM8W82BBKbwFHXZQCqGpbvNd8LyQwv",
  "key13": "zTtux98iySmnMfe5gnsQ5BnhGm6oeosD72cdeocSKe6R72g8wn7ZwyT6oVYFu2K89Gn3gm3ieszsZt5D9Fw2EvS",
  "key14": "ARdFdGjStpKbLsPmzY1SdkfjRg8sRMW6gna7V6jZYzfPs5v95BS1R7Mj3JcMpMJVTFB2hs9hmEQp9UMLc24Gqxc",
  "key15": "38cBJJfu5qdARNLPhkTgDGYiEaMRspWKgBjmS6d2RdJtLFkWRhjmwhgetvyGEGymPfG2dQwU4euCskLN3Rv6BjYC",
  "key16": "Y6yXt218HB9T9iqMpRbLMqaEbxS34DwTyZ3motp1YcPKneyptQgGSqPrt76auEsRcuxoNcKhUVdku3pydXoNecf",
  "key17": "4ce8xbQNvxBHdWxLvFdcQS4jeVgp9LqTtdLt9TewSTCRzSoH8c92iXmvna5zyY4xnMzfovuYCbicqvwRWYTF6aU5",
  "key18": "N4uSydrg6CKW493GnQXTAZpQuuGk288CXJyfCunu45q2mH3hPw5JHsE4xEEGiFrcJKwMzJ4CRWHqrmFz6q2cTWa",
  "key19": "5sWHQrFM5vSWBR6G3fTgF4Crf6cv2wQ6dB7mPBpLPMTWpXGeCFDfNM7kxooXhgZD4rNL9FD1uKRDW135mVrsSkKz",
  "key20": "5ug4EBDMhKUoVUCRHAdZF7M6DCovc2J4RYMUhALCarMqXaFUDkk9zupvP8wmSvWCaVoRdi6XEnbs5n1SJE24Aznq",
  "key21": "qiJbe4phqQbjsEHjc85gEMj6vvEqtdTYQq2UvazUFUubDue8fToFk5BvQCfLnALCoTZ9Dij77tx4ENbiQEycMsu",
  "key22": "Xpd9m54CbifTH8roxue5KjvCtmdPu7WGWU6h5VgLDybN1oCyS1LxLyDqoWUwdPJ4S67sTWMjX4UMMgzPzjajHEP",
  "key23": "3hwnyiToyPQSvMqwaAhp5GiymCKV1jzRzxgmVxbUigdZD6v4HY4vgav4u16g2SXpsEDYNNXbCDRZprQKTdHDoKzw",
  "key24": "5jqUixZkBZrHFpXRDf9bW12ATfoCV8JjJhXQMKGvysNaVfJQUxpSep2FgG3KBd4MycwYShYcrRsayFK53qna28jw",
  "key25": "N3Th16E7uw7yD5gxnjktX57KanpM4V88CuxJfd76Su4VcjcPUdatdyTEEbJEQh2LDB8fCZ3Y3fKtF2tnPuPcUS5",
  "key26": "4kTS6jYdFCaXN1yJ8KFrosZaXDgu4CEtTBFXmb3hPMt5i1JerQUPzoJALtLQi7npUCYKDmignZXPTVejHNw9HG75",
  "key27": "3tSiwQNtCNyoqbaudjexmBWxG5nshBfU4C5JKUdcwmmLgVnFBkkKefe7UGJhKGqkMv4eooFeA9umt6Ri8v8HidHp",
  "key28": "6779r7RgcmTLaQq3mPp53KwFZvXymxReRXhTWf1dsTeWK3SXi2WyygdEyzDwdHQ3jQcp2gYmj3MLNJmXiHoT1a1s",
  "key29": "35FxLT5eZwbz3qx7uDNnQDmuE6ca9f86hrSDbxS7dbGZtFD1nPtaYv8YMQCz6mfExuCZFifKuRsnpkpx2TkzpKfu",
  "key30": "4mqE5z2QQMtg66jnWAZS4Y6TYd4AUZ37uim3EjKpzQY97YzqfV4KCKj8rvyXq9uVbw3hW8amkA4RhG7UEJk1LQZu"
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
