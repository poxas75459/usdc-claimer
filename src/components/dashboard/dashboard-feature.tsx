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
    "448TmbsQYZRNbq28Mq2TMEmHgZcstskQfZkd7yhNUQcE14fHAdMum5mQjNXSnRVSpfXbLdb9eCspP6KCqHNiF33V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Sd8uM8bUr7dgyyDgfS9iaFH9rSpc8xeSU9a5MsvBGXYzxtMhA8j2sHrZR2capA1t5H8KAU7v9Bb9FNnGcF8X3A",
  "key1": "2K24QT26b7aHWEo6fVWBGfpoDhbf2apLVnXTHwhSsw9ViAApx2NaKWL71KG2JtKpYP7YYbzyaSDLhzUDogArHp98",
  "key2": "2qCtJ5yXwvmq5feccYGb8GPBxmCu7dVLjdVsckKXR7kDWaZc1GxrC7MEhHrc1CQgtYXEwtrrEhcYcU2P6LZmtWW1",
  "key3": "5d4N3CXugypYrpb9eYnQWTPE2ZTvMfkJPxed7P9WrM6c1mk4duS6aotUUut3hiaFJeUDZTLpWey5LP2pZFMetpYG",
  "key4": "2GDPYZEdN1gNoSCv4nMErb2yfiTuZZRFsEhzLYCd4dCCtFLKouJafEZ1swekfkHGXDKpKRy2dR3mVYU8whYmgfiW",
  "key5": "53G5UoQANy2zfnbv8HsjU8XPXvkKaqxSEDsBVWW3uWUJW73KHHirHq8edLmRKaKdmGeyrQo8XbquVbYiX3UHLqCa",
  "key6": "M2htfukKSu4kpXU8giMnXuzSXkiZZvSfTdV75yBTJF4ajVYUJmDMe2THzBZ3WvX7siRpsLkv6juQt2wvNUMdmYk",
  "key7": "4PJMMbivwoVDxPennTzkDVC2NT3W2LTwh5qbeFgQmU1FaTudEj2JSndPcQCCWeZAU1nsN4AsfNVsnecn8jSNU48q",
  "key8": "5YqqH8gzYVhG65j7u5tz8VfdNEJLAGZMjdVc9JMtr8hxwvLnkasTyaXGd7ahhQNtf4ZNmfd7cehvCU4oV9kQm3eX",
  "key9": "4xv5MMMH5YBfEFcJcCUEpzXqf5XQAraJXJVsG7H1Z6gmzRFDFC2GbZfZxJXNqqcXxYokpYk6RQqTj97RUKqPCTWH",
  "key10": "2t2nsjr4xUUW93MMW2uG23x6zPTKkNN5GEobDNskQbNYoqXoukKDRjsYjvbUyTnDxLZYPbPtqtwzG1SS8wP2CkpB",
  "key11": "3MYmWEFtBYBfpurSWhr3PvGzzySrCPsNKQQW1q5h8wnwhvr4jhimDCb2m16Azi3zzEFRtZTG88JfHeqN2eFyDsiH",
  "key12": "M3Q34tdJYUpx1pH3psc81XxgHQ5aiioRmRwGABHrEg6bzSii8vTiN4mqqD6PwFPfMZ3x4mjND6hPXyFfs2hoahp",
  "key13": "5z1CNiNFpjFJphMqMqN3hFxvdbvcPPdzFzJLSA4j2a79ovkjHcJr3sMNRYosg31yjt52tK55pwWYYq8VZQvHRtCG",
  "key14": "JYts4WaYJqyknjmCs1XVcwe9XqxoSPfAaFTVA4FVtakib8UUZQ2osdKg9RNXQXgoJYzcZHZH4gM3WKjASEpzKK9",
  "key15": "5rz5UjZuBaRdpH6JoY482gTvYoCz628PfiEM3MTrDeJHmSnnmx7E26WaGLj6p9BWa9TwEuJPSma8uJnAG7fRnSiT",
  "key16": "UJm12dqGYQU2aZd7J2KJkNCZXPMMxZKHYeqrxSs8Xt2GP4dpN9HPkezUZTLGbyb1mXdYZMoLAfDSmkL4xZfAD1u",
  "key17": "4kB2bumPnCjumFR7q7kKBoYMH2jXYkiTRjPKuhaerNvx9kGTtpzA4iSfUeDgiivsV7eCfKbWCXPe9esq1rzBiCyJ",
  "key18": "QXUKxPka2ipDEdUqFCGwvzNNuWcwucdaAXrKxHpgJEAQ4Y1kicZAaDMC364xgm3kfKSzzYyiANBYw1xc2aXg86T",
  "key19": "KQTgiciBjgQ5trUf24CkxoYizUYuaCtSqSAdUCpNG1fTV9dY4FUPxBuNvyUAvQUd2YtgbX65pHHL8NcRfHyCx9N",
  "key20": "sRquZfsTp18pqadczh8GnviCmsMTj5HEv2v5JierUbCAr6hYyDDsNaAGCrgzPpUnyVsuTYiXPbBAMdaRYwek6sj",
  "key21": "5eWWQ9hT4HEUko64jMqCy2urHncCMrKcdMPXHrLTGEYt3qwR64PG2pQE8GpsDwBfbYd6NYHZSg9WRTiN5nEzuAYi",
  "key22": "ockVqmKJLgx7aHDhsoohRD8qBQ6nDnVz3KKGFxKgNJCesXacjsqkrVxKagQHp23HHjpkq9RY5TpoNAVhTzjeM3S",
  "key23": "4u3inykboMwntAejCTFVeAaUzyrRTwG6E4ZvRTYES9LC3MF39BzUaB2YFUYdXzYqvH1HuEM14EYgNyXRpPuFNBbk",
  "key24": "5X192o3MPtg53W4NLMv1QkoPXTCKHfq7YJS13LAGUUoANSZJn8hpbbKeFsFzWoeyAyh8J5JEhXmJ3spbd3sYetd3",
  "key25": "7Ptem1cbfgnGXDa4AFzQri6eFSR6r5NKZzNNenJCc3CquuZSfrjQQtJ6ohZLfGUsmSWF1rrnRyocRcLYxi2kQy3",
  "key26": "3J5Z31rPAksL2xoGK2eXMxuSF9Sb6QH4pYXxmy8dnr9KNkvnXcH2V1dkTWoV3jvfgu21T9f3CBN5nRyXVzgqNSqj",
  "key27": "63AS66cxs4eqhjcHyhgQ7FEcm9Hhbet3t9DJVQUts6GNiA7HLhYZdtxkg9EbCo17wUcu891qqhrywu2uNi3qzXgH",
  "key28": "3kbUWdunJ328xsJTXQrFNncR1meXY2uZZKSV1VmFb2mBoAw7UzcRuGvxHd5HpSnxqvTga4Vufqjx2shcvr5TS93E",
  "key29": "KYPuY5PcJj8s9D9JWjz4bVmdT9THwbt78NDeqkiMwuyZka9MatE1X8RrNHduDj4JsP4fepvPkNPrLWxneRRbL3X",
  "key30": "5iPVFbzH1eZf3iZaqYWiTJjPYGhdWyZNaDkuP4FUypCsafiGkUzp9Ji6SkMm7ytuxotjNdc8tFch58G5599GPZcN",
  "key31": "2gE1jDP71m9n9jfRv7iNNTquUSdqZkJ1go1go1YaSd2b9Geub82kshErgaNTpPa1tw3V3w3dapZaQCPRGvXnhy6D",
  "key32": "1kcs5iYssfnE2JLSKCx8VCWfAXNaJhjsmDR1dPHUf6Uc1CNZ34FdJrFgJsyRhwtrjYCbPdYADgtcULuVR4KMpBa",
  "key33": "5GMGPLFa4TWC6ETsCkGXzC8ozx4gx1Co5mixDt57pZsPDawgSynwrwScCaMpjJpz9ucctLVGxKBwENZzVSvX9mi",
  "key34": "4gRnCePs9TttK3MS65VhLsbYSEQK7dvHf1WiWoiUUpQmKsvoRyrJDb27JNFVrS5YoobthRWufW2gnLZ93qbGpnFs",
  "key35": "5VQ3ELkrUPrmgMdM7K4KvBDLcmsE27gQN4zue6wJfgQuhuG17Na9WQRepwikvbHAb3teWbizt4ktuPcD3KiroSZM",
  "key36": "5nxmEXzsH42YRah1Pvuv3soXFUTd6FzD584pdiPBwtjFuyggJ61z6VXv8Bmb7Q4AsCBCaem6C3yTfU2u3UbuBy4v",
  "key37": "32vwDrfSpNSkQHMdbaXmtnir7b952iCmmXYReiB46uYwsV8ZSUaBcdXzmDV8i4BeqHtgPpbsKHuBbjfkwAVxmoN2",
  "key38": "2W58Y2Y5QtusmRZeKhv6pNtUjuApPVJnYyKtAYgAeDaSRY6nvbRxKEQzcdXbfBvkwjziAW6mwnZ6Hw3EJrEr5BwR",
  "key39": "51Q7ZkYQVtfARxGHL8SpEGzcetvXxLdyVa6PGUpUXC5xzytdVnLsfKfQiRq2t3UV3VgHJMwmRnTwcuCUp2jW8G7c",
  "key40": "3kkFcZSS6AaGVjBRBcGfRDYhL8ysaP46u65mrpa3oDKh7QWApu8i8CqSTiUE3d1wuGnbT7TJxaiSiae5sa5BCXpa",
  "key41": "2cgPhtGVpjAWnXWxfgrMsz3HKBJpGsT57gPv8LGQj6st7UceSbVUXGcSmg93JCnPt9EVRHw9s3nC1mtNgS5NT2DD",
  "key42": "61pwkUS5BXHQVou9o2uHWB1cLMeTRzfcpGpifK6Hk8YgzzVfZZugrvxPjsWvXj2yLrRn4vbah95T3aALB6GNQjHw",
  "key43": "3WFt3NWKk2Q7S6TVXaqyBEhX4hRmc9wFk3KzxakxXKTGSV3CU9pzKHD4ocdWn127AGCQ5QZ2VEx6sGxAR5FjjQyK"
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
