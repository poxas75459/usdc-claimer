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
    "3sVRFTuqtjhimk4mHZcUudVnZhqoNxHCfDGn9AGDXhmEusAJ77koP71VjYXrrUQkdHtKmnYgtG4DHwDFCzDLtWzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKVVa7cg9LaEbconhfLRffE7Nr9x7HHx1VaTGeAhYjCjdC9CmLbdHry9xpHMhbpYgS6Kut5HfjKixFwPSuN61bm",
  "key1": "zTwDFwnmnUaZMKSa39KyxZahehrB8uzUST8PkaHDEiforZRPYDXGcHJLSbAKvhDzpBHR9nde5njpVjzqUQb9Yig",
  "key2": "49Aay1krsJcrReC6LcXY9MgwYkJyZ5jFZjRWPv7pghvLujNNArsdb4ASJni52j7Kr69apytaCSrd2J7c5iQdgDdb",
  "key3": "24uFHW8oipQTY8XPw48FCt4cW5YFZP2ArpuQTFVq82nmg7zkQkwJqMjVPuiwg2xo51c6PKGzcdxaMteyRk3shudm",
  "key4": "4CcihBHBm5x7nReTDr5WpDBqRWj2qsSRBDtatNBYWWyP6Ya8qq9TUrZ8gQD4hbWxnq7v2tUMrUWCirHjhp8BGYAH",
  "key5": "2hEwMrsKKzY6WKmn4MXmWyk2MjiQ1Edv1cV81Wp8w4gYuYt5WBY5bEdQkbtWEYRvTtfShqPdzRQjnCHFHvESzPh5",
  "key6": "AD6LexakoSnDomCEYE3kZZGYVYDUYJYaKWRwJEujYaJFSbU63MU7WYNP5pqm6CZ6H4QHSqtAUFZYQcEEws9h3bA",
  "key7": "4BXv62cHWsVxdYPfd5ayaBrqWQYBDboh7mT9KYj26XK5YDosEnPzcDtQYenSxEdQUygScLXapfTJeqQGCpWQmUpg",
  "key8": "5UuJzkm6QiPRNqeWBwfStbFhXjNsjz1CgPhnCZ7vHUkrt2eaWsKKncxkdwV34wraN5q3AfnM6WGJ8XSXYt9viVrK",
  "key9": "3VEdrbk9AwpGQ8k5DakcLTNynFNNsdv9Hkw4oHjiMJxW4Ebe96KN1nUJXvAQ7s75mmhvZrywHLbzuJ74fup5XVf6",
  "key10": "3EtpCkRhxT3jA9H5TVs24vyfoPu3qxZEQHwVoAcsCB4Nu1RmwaWZMdY62W6MBAbSx9MpTJwNjibiyf73UNp4frjj",
  "key11": "5NGagi8YV2oqeswUqsaNs37Vf848dgqUKJRBtSeUZGD4VC5xTkAuRqZPZctG6HaK1JXoF9VUDLx7M8G1MYt3Wb8g",
  "key12": "LXtmRwm4QVDodVRHd4nn158DSKoDadAiCLFPGasN81EZCfRsBYmeRGRTS4iruQZTqFbTV9F5kYF6NmbbotMqxSu",
  "key13": "ASuzmCwRFaKdMuWmE3zWkNpqrNG1HUpmr39kCQht26D5Qk1cEGXTrpqdrTJQrQLVpx4QYKAfJbKdohat2xnBmFZ",
  "key14": "2vzWBYWgC9Lf2mDvQLuRLTMis3ShDdsJkSbPzRxGMS6T2PcipdbX7ySNbCdX5UWmWhDNqvoVMN15L1HxVrZQdba9",
  "key15": "4ypZUtiP1J7pfKeNyRCgTMET1bQeDAQrmVrKmW9ZpAwjN9PE6yxXiD7g4ziCHVbKZ8ECVmFEzV5UPZvSLXa9B8hv",
  "key16": "2za9GidQDEiqMdj42Pg7eDZjSjbo1CExxJQMUtu3KEkVBBxW3m1Wg4j6uW1cyoRPzmMTMXD75kANpN589rcr3uYJ",
  "key17": "GL32MjA1oNjkNbUB47JJ2MaPWKhJFTRzJmo3szoYWK39ZC7xsb7MZF5BYqCSHSeAauDg1woSfA3dEj5GQk4zspV",
  "key18": "2w5q3PZyNmp3dVUvNLt2khf5RMKzbNgN6bfT4FgaRXuUH9Lb6jMstcAAMZwGnQgPFgePgNaxb9tZbxB8m48mw2ik",
  "key19": "2i4UBbznM1ii4aoCHQoZnKXLL7fDZHMEguzY1Cu9u4c3skpK26EBUtTgCJXK2dExgVcE4mdMFQLqsgoxwVMKyiyU",
  "key20": "SoiphwUtLE4BkKDp4KWFQtzDMYfKBDqkGyuYNjusJRAarFVzs4EdgnVsCS4jeMFt1yJF7G438abHDyxkTnCC71Q",
  "key21": "ZcEr9Vvv3iU394oYkjRxrTM6k2M9uBh6U7tqSaPgTiSiHBW2mNqJzrsQLXGgtU4yZgebgwMB6dRz5uUW19gqHKr",
  "key22": "4oxEZNuSVW94ZNtFyCZ6YJekUG7bXA97dxLrDfrwHW77ubZDYTwaoCfSPtMrH8pME5vNpGppFcUa9XsA7GcoGKL7",
  "key23": "3UHJN1B89Ck1d5gBf56nV7B8uQwqg9JdmQZrdS2iN4UFDCas99wTudmidUZafwRVWHYR4m2VgSNa6xhHSFNi2ezP",
  "key24": "5upyaTETtLfotdW14saZ1iN9Bc5DBjEx8aAArUGHvvan6nLWtZP6PAmb1MthLxjvCCE7M7UMAxVRAufEMboPEEnx",
  "key25": "WJ8YnAYBy8CqXgyPf5j9xBgWvqoH9zNdLZPrEdqKvrUCQ3rANTzexLqGo224tLNHJmGobaSzGSNjsqC1SzQ24QX",
  "key26": "5zgnejckQPH4qpPp9ycgfZT5AHcRWSRYQGA7LvbLk3QZwEHDJa4X2CLpJYHSdjvt7rSxhv6TyRDKXuNCJCuFxQeT",
  "key27": "3wqdYGW3FB3U3UeJefzgwZ3wWsJMy49GRCop7vEH2wjNP2b9WZScEH8HXixct5HdUsi6dcm9N1L7b2KycxiFnKgW",
  "key28": "4UZ6W18xfzyNqDxeKtwBYvCU3AaQVG4QZAP6N79UcMc5EmPRZVo7hyjjtGJts9XHePGXW1x7MtYRz2yR4bTaEX9G",
  "key29": "3tGxDdoMRhs1a3LsFR2EDb7kyA31KuaKUJv2T7jy4bcXnRXPm5rjjFJQyPfXB5s6MNYQexTMrdKwa7cHWxxQkgdT",
  "key30": "xZTMaZDvXX7HrGULZzbcXbcrT2pjXVN9mvyNrp2H3WEBTFcg3ryXaPtzYmHAi8rRr6jFY6VTyj7Gn6hHukH1Jsg",
  "key31": "4q8Hm6BtEfbiAHyhoiVtcBwE1C2yfMmiHuKJRV52UdZRC7PveMWzLbkMNfKxnFFCD15KFbuRVhF4vDu4MXA9M5nw",
  "key32": "25DgoZRSMYSLJoz7XHTYumxuhhEXYE3iWuGJz5Aas4yqKyx5kQ5FcZkhwZfUVGLh5k7c8dV3SF3eBCDyGNVbxoDd"
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
