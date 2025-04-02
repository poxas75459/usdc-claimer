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
    "2acYzZp18ssMhF2gBEvSTS96ne6zKeDCWuyG4uu7cBrFoo1vHUijP46W7BQjisGLEPAztMTkHENv9jPN6Uva4ADQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibhTPcwU4n2ZguwwoD2kFdWnEZb6TzkDeWW4SDwZG6ER9enXRwkpL6i7xbTQhQo3hMgs4jxmrZHpnNPViiCW6hs",
  "key1": "3x6X9GhLAV4ACxTorD3xERCxztKWHm7d8pvJSBbNq3F1HnTs3WWzvUYNB2NSBzLkSdvVENkmzBS2EfCR23vU64BB",
  "key2": "4uCRX4JELeNt6qHwSAao1fdPHehW15CEyzetCfwUXWa4gWjjneAcvyk5atg5eDZNkZK5qi3BnJQJGKw95qHDGrDc",
  "key3": "teJhyGnQHWgWRzBjBcmWUkzZzJfNQGEBZwzNA4udy9gGcTo9JCJRiREufTbephNpzVMoKtHXGDCG1yxVCxCU11q",
  "key4": "3sdS4gSJPrx6jLxxtEs8WZprjd5Yk5BbDXYC1k8EzrQtZLEU6PPop1iyiExLdodGHgNb2kAgGJgJ8WpeQ3JwsSBk",
  "key5": "xi4vyrnjdCFuEd4q9p8kvaPDnt3EznKegua19nic6YaWjomREuXWeNZoFen3n9xn2qqPnASoAxnJg6UpoZ3U3rd",
  "key6": "5WGuV9Ldc3kYcsfpeyF2q57e3pd49zcWULKEdtdSxehaHV9Y6gA8JMN5WMC4WXdiQVrtozKMj3CiwzeWJSxiq6b6",
  "key7": "5ofsx8je9cg3615TFpqY3QjKzs1tBbJMMG8EcEppozKw6Xg4sisaWJ8Y8P1GRF1Jm8uMRgd7gT6tdxFSrSWZ87zV",
  "key8": "5QiGQhwbGh8RUcuBUCB8n2crRzAjEJGfw1mFAukTNsjPFmWfkP5NyDTugLrYjLYimunPcar9tsPM4bCeyGZtMVSH",
  "key9": "2NXxbFgSe8DMJDmbQdAShB1EcVfa1JejGGC4wmXPHCKKQotqcSiMZuF3zncTT3NDpKdCQJmbvLLvybBkBe6aDVnB",
  "key10": "FEwQ2gNukzdXWVSyunpmqD7SdMZF2AoN9L91JGvwUL8VTJSuZfZnjCrpf4W7NBFKjU2u83eVTyEgWMBb8NbZEMd",
  "key11": "4U6xX9eS3YvRGTEXcHaAanGNxuPU4nQTNf7nxQ7tNowNvB49fGTyaKfyAECcedHvuPkTB7nJfQ8DpkuPnuTbV7kg",
  "key12": "4qoWxFe2Rv9WqA5JvT3dokL6zbgz74FMKYrfMLfnHP366D4PWva2gkFQfgJSyNfnZhFrGy9nqVEumv7n2ddfKKhi",
  "key13": "2bkiqwkWN7XRaYGfAKGCt2q1Em5JBTBFVXP7ohN59hfs9yzVgmKWoYV5QDGxroZsLR7Z5xYJAqkEewjbgUXH2Hpb",
  "key14": "3LfANzKB9EifmoNZaYYBaXCcY6NdokcZqR2FYXygDMECnbh1kRGGM9saaqGgv8BqZ9kEYf5bRCXgc9dSkAwBL4RJ",
  "key15": "2sCoSN3TU8TFKDRV5CBq6pZNdp5Ck6ZKwn8ofYjJ8XFp36xmZNnbp7KXducp2vrgc1D8Qbwh3r1aD4u5EBPpyCin",
  "key16": "4K6nzefdvrDsngHVrVY7LBphpNZBBgyeEieWfPK7DKbFRoHBpPgcrW3yCYqveNX1cPU2aHuERfwaX4Dh46eMWR1v",
  "key17": "4tKAdGB6vuNBpfvoGkNDpNz5F4hdc5nB48tgeNUNpzSuwAmQrF6w1RocEiQh5gzvZAMoCW3L7zkz2xxUR3dTMCZW",
  "key18": "4Y6v5dsToL1CNxHEHEX4qCSkHA2ZuTvjHDY1cA8DKef7HXmyzf3na8GZRKZJiL5F5m7jS7XLsB7ikht3eEq7MNRE",
  "key19": "54MmTCiSTXijsjPtQ566wWxQXwydUjCt2urkznQiwhMNgNCXsBpYBMru11cy6dGud34CLPTiWe52h3746XCu54K1",
  "key20": "2gpk7Y1Ti5qcgFwNUHDA1ZvUpfYUUPks6EEMYZ8UPMnmTSbjRhqbey8xfDy4npBGGuLj2Uu5UcMuyQt55APkpF1L",
  "key21": "3ZTdDAcbp7149xLgDnXjTt8LgT8jcGtTWSiVvrCA7qGxEz8yDbGWTSEHqhw3keyNWHHavR6jsLf1pDNQ3ZxyhLKA",
  "key22": "35GqPcF5Sust29LsEz3oq6LCveaX4YoLp8Kecg7vHsKYWMrFriWcYc3YgSPK5nTgFogFz9Z5hs3EppWfK8VjPCsa",
  "key23": "4FMUXn8cTsRqHCGscNTGFwjFQ7zfLM59QGHhSKML7fuXpF7rFUqd31oP4aVFG8m37BB23LXFoHvxif5dSuC1YAuT",
  "key24": "2WZjh1AHALtcC93qh3dPA4Ud8X8wNGZ6rNyAxYMV6sYgsbvxKV3TMHCyvUrYqN3Er4eyHDnTEfzNEfDM9ZKd2xu8",
  "key25": "3xoUXcFEytHzvDiZzotBEUMt4h9HMLvy71Msq1LCUxCUXb6sayiCUNdPhL1iotLhn4SBZnDT3vfNqT7fa6EoRWi9",
  "key26": "3YG5yeJqfQZHS3C4XuP24mqKE2kFoPQBEPmEWdtBw3rXLpwATXtV2P8zgzQQP9ybn1YfvHeWZNazuaanFxYxkPFQ",
  "key27": "qXNTUGmrorKP3s8EhxfyX93AmQLEjVouwQf875iArQDRZ8yoRMVLHXdYvBL4TAhmP6jWtcBZgzyFsLWLBN9KgdZ",
  "key28": "3CwC33jRvu9GYb48M3YSwWdiBemjg1Lpj9AEoEkgmLJAEBX6y1Bqj2TxLesCsEmvChT2NBPNQYG736cQKeYmYi6o",
  "key29": "652HBP3n2wMEK7tjbMm1oWkc8tLtNF2ELNvZwmNAjScoHF8omRibmjrdgsd3mGoTDPwE173Vb97n9LzU7oixmFnp",
  "key30": "2cqkEH1CseacNEJHgxA55SDQBZb8JVyx6kVjjJuGmp64EBmes6Lw415RHs3fgYz2p31AcrkRpBm3syUeUotkdApL",
  "key31": "4PqRJVttJLBe9veF7n42UDTVvBFB1HMdjHfghFrQcZXfp6C6tmgjFYWBpMDu7CRKWi3Qd6hswu5CGTqT64fBBYN6",
  "key32": "44TGiVe7JBaFD42B2fZZTe7SzpsmvvhCsck6JJmwe1R2745KxonpwDvMHLFKxXZU4LgNa4YPxx15zueMsRjHTydP",
  "key33": "5zPFbahgGD7cSFJSTjeF6j1Y8FQVTzY2Ezo6fK9yBCM3XTx7CQ7rcYy61vqXGNFcGkX6WbeCQsgJjbhSsD7K2exx",
  "key34": "AGYmYQ4GEbMaDPdUMjRKvpoDT42Wm9muQtHPdjTgTmbaqQBh4cBUieyeWbFarBPx7nLi7odi9RJRcpP1SJ2hTx2",
  "key35": "2wx5wxP1CeU8PYJsqa2JKcJwvrFQ7eKS6VnPzf4R1nLfiyBvhBcL7qwk8ijbMUYMNQobnMa4opGC3XmS35HvnLAu"
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
