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
    "2xr5C364GL78LmNfdecEoPfSiZy8LYuAyj3xUjHAbRuP4KR1xHaN1oNEWbxEFaUiKRPDymyjubUAo1AwAoVY9JaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tb8xeqmKMhRqMtyE5YhNPS539NZAxKhyxy1U5h1QDMtLsdachoxARwCfYPZWZGBTfP8swsYfXxfWJZeUJy6s5B5",
  "key1": "2QpkwNqN2NyJWLERQU6CHk1z7TqBTyJZFAPPamYuoHqDrupFt5xgbjdsp7qoHfUSo6EZakFm9N49hRVygeTp5WhW",
  "key2": "5PWQtGRz5SmD1DzD5UitF1qnKfgMfbXm7wDSRk5QZZeSipvdJNc8dC1P4tTwsUVkax9D9z2AR2BnByDmSJf7vabe",
  "key3": "4LLm7wAKaxSSYTM1uuhLjNXkJZ1CCkbqtq5r9D2uVWN4YSuHW6SUJkuTGAgYP9VQbm74SuKmJCQCYYWNKRDnxeNj",
  "key4": "4xbN7ZGbMbSH43cnWJBnixaTbrrCaXzsofaD9Sr5E9pukDCT8iwYVsnUuF4o3ArooxaWkoMtvm5BSARpmEf8ttMZ",
  "key5": "5vvWRsuiYXeryHRcSC8BcXdjheGHDd6uzCv5EXgTYsabZTVWKBEevrtAbrHW9VwSNvvapb97kJYgCzN13RfmtgAi",
  "key6": "5JoYcbqr1Zp44SDbhQM2U1mAdrmnBU6B5PokUWJJLGqsUXAzMbfEtMkLvpYAUNeQDsMUwCb1b5pDt6DiEVRqe3Hi",
  "key7": "P43uX78SqbD7cyFK89kmhBAUMAvsuu1uHnWQsJBuveoTFUmekwxG5fNY3M6t6aKNbi7BgBqHaEqbf3mT9cny4B4",
  "key8": "2rytzXjgmPvL1npR8LWrt65LoQrq3k6WJQ5UsvSyqNxi86v18hwjBD4vjytENkBq8mDhMSrGNAN2zacx893sTieo",
  "key9": "3wGYHSXgE48dHhzQGopANBZxinJL1F28NBEcYuf7GQ1QDrt4ShoYmXYkMct7Wb1sLoeneuQD9EkA8AmUzso8iK4F",
  "key10": "64f84oZNDz5bk19Wa3nuqqGqx281Jb8dggBuRMavW6bWc2YjgCkFMthu2fFQLJSFWAhtuudBjmziBbFfd2TnCYf5",
  "key11": "2jQP5HhRDToxqSju7yZrWyXZxJPGv6CuSPCTRcJnArHnb9qgA2FKyK3EtUpxMvBDruiLfdnWUKvykDYKtqjBv5iM",
  "key12": "5SKrBRYCZb3ArDa6QvFZyRQTyPYsKxgMMBVi2uVkLjNoTEirnKhDXYsvK4K1GVcq5d43aLJEeDiCnBieHxGxng49",
  "key13": "dWccDZGTGoEyoKoPVNAgnwZZbLiC9qomBiS6iQ9AeeJm9qX5v2eF5jLuLXsrHg9tyx3yhm5rubDHFQJbCBwCRWV",
  "key14": "2Tgg45gabMreZR6kELgcKRT8aeem7jMUD2g3MYZQToW1JBqNxHorWRmzFpJFqmqAqUk2wTU5QU3UNHK8as4JaWz1",
  "key15": "5qa8iFRKAEK8YuiTtc7PTFUdrLpySUSP1D5Mpv3g4kDeX7yR9mVgkKjSW6TQqcKztztESszrexCnguECQ6pUkhem",
  "key16": "4TsbDiuknRQJzxfz8ZS5LufS7e9Chb1AB6yQTYWgTQGcYNFTVuqCzm4Q3JV7A8RC1EPSa1ifGDF6L8Ekt3mE36KY",
  "key17": "4yUAqesagb7Enh7X8FHH2suUA7qr9r54ZJ9n1diVBidEtitDxGSCuHup3JcpqLQ8v6y6vBxUw3M5FhbJSi2yR4cZ",
  "key18": "23z5zuNKC9qsoH5nTHwyKqY2KsDzXVfdo37Bdx5kh6aUqM1MrYc8JaoVfgoeuaTwynBXdtpZAX1rZ52QuxQBq2Rt",
  "key19": "35vYREyYLBsLmghFgpZzvy6NmG69vzs7mXuFT7dN6Z6gPM8mAKbVUqR8ThZnywP1Tr3mXD77Czn7KbPWntW2sUDR",
  "key20": "54Pwt4GCMB2mXPMeZL72mNGJj3HB1uUM2vHyFhjj67N6j2GrXueW6261tXEQimWra7o3ao3mbECLM5bRgnBuQdEc",
  "key21": "3QxLSumGaZMytxZdy9wt39GiFToUwLWM9jjrQ2FRY2sCJrjXVHC12LdiFuoTcVGynP7dGMwsQpPXNz41XbQpv99n",
  "key22": "4TpCp4eyTGJq13FYFQRasvFANc6Sj47i6JYQPzEX3MUh8E9kkuVCc3kD7hqaXumVxLQnfz7JMujE1TfTbGz4nL8w",
  "key23": "3sqm9BuZdKw5vV85LvswCebvF6fMHqmx4FAtjJknQ3LVzoLsnecefcAqoNPsHoVgsnAhT4aTUrzWWhtvX85z6MEg",
  "key24": "2WjC4XfkR1VqwrdLLqqQci8TPbjNv1oWLgQDBi88g6nhVwEHJ6XhbYmooMBB6Uivv6o53c583UjCKYhfcCELurNd",
  "key25": "XET9nrptS652N2WsdnY6VeEHZNqooajZDvPadXKPbWwTy2ffVMwGACr1NBnpVEpAFtVAHZMHkRJUfCTxCoYsJoc",
  "key26": "2vaCbktoqWHo39ueQ8Dgid2QpgSCciAgi73qJ9RBFqFVmi3Fu7CmmyeEJrwi9GczY9uM83n7tJyq8DAu5G2uTKYq",
  "key27": "5oSZ6e6nKtehCCwnGTsFUMDJWXohR1RXc85xYmDD4wuQiYVyjGkkKXAhj2dH84tUpiB9PzBoWFqWAkJWhfkpSyaC",
  "key28": "3qWvbHb66wRYqSKLAR7oLooQrQ6JpcxPR5YSp63QpJ1a8GoNYPGeimnoqYnj5mau7ychYu3bWT826rHzpRkAu4w4",
  "key29": "B3RTSeyJaMZvYGeACGueG288gsx1szGyJn3Xht7FRzpCaMVbW3URfuxF4s8gf91Waq7EiDQ7iGZbpFZBpVMjGhN",
  "key30": "5D27KRkPecoYwW3QcopcUT6Gu9K1BQV4U6x94ZapjDe17m9cWHt6vC4QNCVYSUYqpP7rhpF77Jvtg7CU9vfuNtiP",
  "key31": "iJxUdAkqdP5AvrUc2NFtFyCtBsgpERSJmLCTvfgbWqE7Zo4g4bcMrSusKarcsVVpfZ4ARRvobyga5PZgeyWguee"
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
