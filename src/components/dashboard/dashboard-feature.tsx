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
    "2NXudzeegGfZQDG44HYfiSYXHBMGwGDaudeAAHSJb3XWuW75R9exs3dRA2rpxTGdcoyXrw1mpkMrWbvd3HL3Q5An"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3PouGo515Jo2T5Tdvat6eUkLECRcyJgJeb85Y7c6nhXptrmtA7YBMhKqKjfoAzAAtfvFNsUnyLmr3KJmvRcp5H",
  "key1": "2iTL4jQTGoCuvLkMstsX5PyoynZn4EVGKStUt41H5eeJd9QzR6QDL9h3MnztMDgmPnkoXw7v9FDMZev1NZBMMw39",
  "key2": "46LDf5d4KzoEpFjK3dL4GA3cTp3QCnUbpnA9C6XMHxUKuXtNnsoneAeG6n3M7kZfho38Rc6C9hgbTWzdNLyk1th5",
  "key3": "4kc6pYs9UmhcL7HY7VYUNnvvfayoA8r7xP7hjdRedA3TGHqzMrzzrx6ZceBZkFgWvZ7YQp1KyETfFiLjnF7zreRh",
  "key4": "4WL61QWPDucHNVAonFMQYc3rZT2ygkBw4fDTH2ohqUyCzHpfMDaN3L23qMYrLd2iEZDL19mruX7ahK3PmHR3hjch",
  "key5": "5KkPn3pdhZwSyeF8GLK66oWRCsi88jZCmX3PxsSsSkXkC43UQmgL4gJCimuuWw4jiic2No8EMJawbssHjQ1ocFuE",
  "key6": "3SscgX2kAt2tuPgWuDnLiScah3AJ6bwkrUmXsqN719hh1JeS1a7gwCtbyZaxLZiuhspM2XP536k33FWN1HyxqTv",
  "key7": "31GxS6Te1sMrfw8H7rX464186rNvcVUsipLboJKALGWHoob3bbehXNHY7rfVkXH58jCYUiudMwKoZnUbZXxernsL",
  "key8": "2gueKX8BsTPje1hKBrH9wK3Cm2jENmgwFUsoD8PhpU5B6hcCxk7XUt9WzReoSD3HnZSpr1Drq5WRF8denLvyPGYL",
  "key9": "31rDp2UvengKuqYjkrGrZ6TSP2eEhhk7QYTv4SPLuFBVNW4c7nkjGSGPKwBzvFdfZLEY52KTDDZKsQbMAwsAoJVs",
  "key10": "4ksamp2vdtWmT8tLdpe6VAzb7JpsApNWLnBaGSB22uP32rP7kdwf9JqW9XWYoJSNKQZDJg1SruGE7JXjQGhjAiua",
  "key11": "4ArExjB2rWjjZA2KYcfuH4XxAVbQbHQjoFNKLeANThZA2aUsNMmpa798rEjvoqCr8L3sWzdpwksuQeXYBNbatouk",
  "key12": "22S3ZivCrVQcXG5CKUkoz7RuBy7DsSjpbdJQvCqndt3Q5eajs7XtiexuLk7gQnECuyCQfACDjCLZf7SwxroXZoMS",
  "key13": "2NkctMQHTGuko9KwvdwwMTk3AG24ppr1TixWDLwSRY734E2RQB8KJb9x3NRJD8cL5sUwe5AkpgDRHqEzxP2fa6n2",
  "key14": "5adJFzggWMEtQZZpRNJVHupcz1fxvd48UgcvqkD2eYiPRJbCydCkT6Z1APdrc8pKpEQqyu2Bbb5TNzHc8BtXLciz",
  "key15": "65iT3QGNWhtBjT5pZNwsfabc7NsUBYwMtdgVJcL3eYWf9xFFYEa3fqSHEYiAvwBAatVxBYdxh4eXWnsJLemb1uAt",
  "key16": "5VaqtUq6AmmRQuzgSt33W668gDDQnaq8Jf5iCzpHtkRRwAcf5Po8ewrbvuxcLjv2UKSN8tSs4Lq39X5jQmKp61w",
  "key17": "fqadenjWudTvggedEUYzafqvpKUiUm8AWNKwDRfZfrhjSK1Nj65HYGTYdEXcwAnsLLo2rvzyPaamDvL8hKp7gaJ",
  "key18": "4MVJwezauZ7bBMCFr7HgfDYddqiArLZAJuCJCdqXnfgzos6jRkXxnx5YwnEbGzPYFFZX2YkVP9HPE9nkFnpLiAZT",
  "key19": "2CsaD4wDX5RAYoxpwm7CQGj77q5ZKBqMDEsFqxn53pUNHdRGfeyBpNKB8MGxmjrtWL32GgmofZcnpm5xAoMJQiLA",
  "key20": "3c4wco1y5bELZtpanG1FpFJXGyGNGzjqhP8V6weyYVnogscux31sPvDiAQoHkdxKQkUYc7dhUzrbf7XnMAC4VrKL",
  "key21": "5XVaCxFNCwTdGuPAxedDczKhxHFH4K4b36CsjX7ncc54hBDDxrj6QRJvmhXwH57jvxPD6FRgXjsWa4wx6iLE8Z13",
  "key22": "4sggzbJ6998gWf9k4uVZpsvsdNUUVue9C8mbH6qpJaaEo7Z8soSqs9XYJ9EDwtbvVBjCm2cQoa3yxz6woe4qTzyu",
  "key23": "4Vdcn7Dn2gYYpzSKgGRindyzJeiqzVumQFtqURKKXcRfE7q4PSAydJNKmCcVSKjbMR8MmU9YEmCVTHoWAC3G9YuY",
  "key24": "3r1BeEYaXpazHudYaFZvghVTSjE19utmTmgYmXgRMu6nVXiPnnNmaGebLyfxP8EMw1cFjpSbxiNRzJfH96UHSdCE",
  "key25": "2QSJcbrLwTqaWYrk1B76UEWRujQeyArRP4GckkVGx7W9dZxcr5wF7pDJJrvSHYKHta6sQjY4rKqY3P3J5Wh5DtqV",
  "key26": "wXk7zANdYRZeyas3XuzQPTDxhvaEv2jDGmjdhyNgheXV5GZjw1ksNvhSVtmuWuGYypmxxDsTQZU7kRrgHdyGMrJ",
  "key27": "k9hjFEwfkwnkPh9B742wFB9fmVi9b5TDibi5py8i9azzZvaL7b8vkzvpqu3v6iFM71k2rcDZBPwtWzWMgbgmrJh",
  "key28": "tNiC2quB7bysGGBmUow7HZSXcb1oUhTdxkCiR4U1oiWBbWT5PbRW8DNo8PuJ5wtXmtEyEAYhqWRufkvUXJmVupy",
  "key29": "55GNtUEhvjzJjAL1jumSCGgJLKfGuBwCenA3iibafxwGSukty5iaeHaf8pdwesbKtLQ6LzPbRa1NBZ1gNo9bGM8N",
  "key30": "3bGUNwLX5mRrWTjHYe9BskrQzdcJkF25VuvsjSHiSL3mwxEVugJFa3fTAgFEX42FdVqKSab2cyB1GrjqJTaCmiSi",
  "key31": "3q5zpL4mp5Enj5ft9KcyQ3LZft7ih7KCsbUdmPWiBaQ6rNvUoWvXa8cs98j5FymjAMn3RKMnt7SCemubv38mN1RC",
  "key32": "3pC31b4vnnu1KFpkaPGbKtq63WjzzHKrfVCiMJuXMtSu8tyVdvGS3r4LYKhHVUuHm5Dgx5Z36Bv6Ymy6WdMBFjwy",
  "key33": "2i8HnhE1JuAb3o5DYfg8pTyDTriAJChB2yVQYWmEHivu6SyoEfGwmM97KJmUrycQkPDbLf8sffTuE4edbxsPtyBi",
  "key34": "3toJif4oCfdr2R4zDgxNynh4gsN1xa2onr2D3dZrEZjW7pbHxntaVKnRZt7XDXGqeKYmaxT3qCbbN2DTBd3Lgqqy",
  "key35": "45oRrSvmmvqF2bNPfDJC9kL9xz76J6g59A4URZuAxx6uENFTkmNBGTBt9AfFNZj5nuPnb9hLG6i3v1tiS4eDBaMv"
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
