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
    "5oSXyF8TBzHpXnoVWQDVe9ogx2WjEUShopD25X5GoHhzq1MQtEFgGh6z9ipSi2Ywe9UwLdBwGXAmo5nUnAmY53Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFtSR6AkhT27AgaQAStPWpJMKULcitrnbC7Xt3n2gfiZ1xiaRV5bziHGwRJWzwMdkLySKgGLDWvNvnxeZeL2UJM",
  "key1": "2eAh2W32Rkn4PoN8o72h7wJsFdydb1HMK8WKbK8Y4jn9KJiDgMEJqiBmnoB4UFkhst6h6Rb4oPBnCs8KWf7USHfF",
  "key2": "grapFtVbb9GBj6haaARhN1rfT4KBF5UVW1t6XH6U5aHT11hQSsJkp4ac9m2ygNbzhZQrYpy8N4pJZcWGp3xPqdS",
  "key3": "3MYL8qTP3tkkoyEnb52MsVbhX779bu8SHMcvX2vwtg1RtQdjVjpNY21kt3Mg6XrZv1Y5rwuoWsZine48S3i2VVAr",
  "key4": "4SXuDCWpkZw1ec247YbRPnJNaQCNY9zyzaSK4t9HZR8h6ZVqcNttFxNy1qG3smZ9iFDXSYmxPBEZSMxXrPdXMRdf",
  "key5": "3Rw9GEzN1dLarScZQRTKWqPnVK2n2x5NPJMKNGuQZR3XxgDBBXDTCTJAhBQWf52wX2xQsq63TB7EidxJkogbndYF",
  "key6": "VkAoanXXTh8rd3f5DsHpawZJVUQ6mfLFMb8DLFEC2PPSmDfsojsDeAXDdZKpUnLXBXerdy3kyw8bSXqYdchZ8WE",
  "key7": "4na3setCjXY8JuPKcUPsnLDhNcRocvj5bqAAX4vfF8tcwLLvRdMbFhR54hTxGSGK24G4NnnvyhipKjohEohgi4WW",
  "key8": "25VjMYMWmVvBNFdMvkJH7rpMvZdpZ5BDvvFikPUjRNsWpQ4kLccAex49VPtjVXDsxctzoMP8yKGxcBZc14fC3af2",
  "key9": "2wGoYDNf3XXYECnP1kZzARgtqjKy1baCy8rRNMFvKEncNSViihMQQLX8XrJm4CAVpAe1PEp8AfbrENabmboBDFbg",
  "key10": "4UqpobafNBiMtMSYfWEyX5BgvMtbFTHtLB2fYy5JdGPGJYfBJJqPxdxPcMJxbTPjXSb7hR4ahr8PHAFBoTgHUVfy",
  "key11": "35CFJHv2gUHBuaj9R5P4DjmGPPMEsPwuE62d9CGU1vuLRb5tYJL3PmqvJPKFSdyTpaKtxpAXJNnmWypgAwSLq2Fi",
  "key12": "2uxVxbJQciHHAh9jUtzvQg5khBzTFNmRssRVnfsz5hpbQsTaUmCxiZCLEcpUPvrGZtoH7yX2fx76TmZveYGs3sr8",
  "key13": "59jQwVA8LQhsXgCvS5ysPRK5F2RmeiuHMLJDaUqVX8rAjSt1geyZTgJwbxddpThYjRWyfdCpsSD8BtAdxNT9jLdM",
  "key14": "4DmM7MrhxtPgBrVh17HWay64Vcfekb5siQAvRFqLi38iKJdVqP3CnRmeSPNRPUUrsp6kpZHAMdzUaDLpNVFFZuF6",
  "key15": "34wadAcQuYD8PcUUywdx5wv7qwAbjrRWxhkrFqt13SCFpZDwbqyES8VET1AZTQD9PhUyNQPdBihU861cbZckG7Hn",
  "key16": "v5FbXhqBERB57P5UJH89m8SyQRPp6edpMz99QkyJH3QdiMs9FEzCcAbzWhgxNYFDvBdXwdamLS5Nmk1NKsJGbCG",
  "key17": "2tpksAb71gjhgzUh7D1TfkJcxxfYzZZEzt6VxRJgMJeba6EoGeW8Z3DsZRZC4xoLhpC3BRskicvLrSuJCkNcEmzZ",
  "key18": "3ywA7afXrRPY3KfBQnWxMfPehEqErVjST4P72arLsMPekUNPhiitcNWCbKxnwkvLhSv8qpeZF4YwnZkxG4qVMuD9",
  "key19": "2XBcLevi99Y5DVUWs2KcupgesWaZbDRgwWxJMvCWJxx1qRExqKKCjWprzf7cCC8Ngo4vKUCLgfRuxG8xfES8FS5a",
  "key20": "5Lo1v9MwYb8EZ1yYH8Hh3o7iJMvVeWwpBd3hHmeKbFr4qB4X1CDvH9NP5EQooRxW2i7nstzJ3pCqB1bEatqCwehq",
  "key21": "2WPZC11d2PXatYJLEg5C1gY9oVNUX8yCskj2HgWZuFZqwd9nVB7S65u7cZSo9c9KBrykV6ULAm8faFPNveoTQoJw",
  "key22": "4MsqumVwEZsQVNYMaD1w4x41S2xsgGa4EGi3UArk4N1sRMgtzPFYBZuQLDFe592gKHn1NFmTF5yyX1hKL4FK7Lv",
  "key23": "s9izRnKCCcdYxo6Zyv8H8TpZMF92d24K7z7AmRw8k1ozK81LBBtTaYm5Ajff1Bzi7Nd5jU3Vq6cvWSp43sbg8DB",
  "key24": "4JrWYn2CFAsy5GFPKrPvoJR3za37tb4DQtCpZQYiXwxeMKqTF4SaM6ufztAaAr5FFSxFg2q6yhPaUMFLaDvGJQLw",
  "key25": "3ghHHBskpdqZSbLFdakWhTg12KqENNDhtQN3NqFRb2faakFxhqLACUGp8UDeK8QkWVVDQy6vVAQAFQCDKLCvGDZx",
  "key26": "3YuatDAoaShomYxsfVP7d5HPxuc3pCdopRA2kDokxRrRtjh6oZPxCXQj5JWjVv67K5LezdpLxbKVVrKRzGzxiENG",
  "key27": "3XhqvfRtVmZuTM5YPBRNNdeMKZj2XUEtb7R5niMgbohrWK7iSPfi9NExPyZxVVhf9zvSceLh3g8eLHYFwmqQLvFw",
  "key28": "5sS1TfMvfJyxURZjzf37QFBCFGSMYBTBWnTVxiW6mZYiQiqYXd4s6zEXAwYYifUVidbQmz7VSEGjXn2Wev9U87fg"
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
