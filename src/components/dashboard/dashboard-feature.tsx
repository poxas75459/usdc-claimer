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
    "3cJVR7NZhLzX6R6JFuzGHw9dzoNffw8hpF5NJLoZ83fFHYSsCJm3uomdCqn9wSjMHMxXYpbABhzgjTF1zFfAnVnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkneujJuy46fJHFU5ptCXH8ghzcMTVHPCiXkmmLEbMVqJ8XjSeh2QVjaQJXHiNZ4ddcS85Xy5SWGZp57AJRPZV7",
  "key1": "2EkTT9GW7WVgU7yFF64CYN3ma9ogF2bpTFpqVekb2gUn6vhQSsjYZUdE1Ky7SKsxD8MbHd5byEL5GFrD27K1istR",
  "key2": "2jtKNB1ChwK5KHfBVVVpcfzWTDhFUKygi2pTgjjczsNyemNxNwXg4o7QSg72GVRdL3xheRE6zyQtzre6WU4ZoDQT",
  "key3": "57dBVFbqTN91SiHSUV7rDTUiiDd5eHVLSZ1g45dqXNGN2UKmmQdykKTzEm6eoxqpKoU5Nat8ApFsKtXfjmHU3fVu",
  "key4": "3k17DhonbyZ8VhAMHjck7suyS4DBbVAU5Ep4m8pUYApjbt6dFXv97xMUSL1JBDYA3L8e85LAN7C269HXyQ2LRFL9",
  "key5": "2GsQVXqLvbcDQUcE9afHCVXW3BepU2n8NRR6jPe423qxmzVM9mSHjNcEkYe96g4yamysmBgrvdqNa1hQUxTomDq8",
  "key6": "4dNvxZCmRqXAH92oVuXixAJgKWxx45p1sfcpc7nrYjjx3CNNhTLFQCBawcs8JARW4j3ShSvHvu277iCnA9qmU91J",
  "key7": "twwHX7w3E1Si8GH4LXcZcrTUf5YGiXpxbLfNsuDJ8oeG5dYspjUDbKvxnr1qNxn45rJgnUeShmotNN5jwPMrxeJ",
  "key8": "37YafTJ2CXTmuXcUYrmRi1fC5bo76W3S6ifbK2SK6isbBP8QHd8aGH9ZG7naAGp4cmB9vznWpmgDn4bzUsYyan2n",
  "key9": "4i3Yb4y4cFLRMxpdwqJb1z9Qi6PREZ7Yr16VDAZSDApLekL53Gue65MkTBB3gRdyD8UNvybSeKhziZRv9s7bVDJv",
  "key10": "3cQoP6euAcLo53DSsPVYAzPbKZGrowgZmKNAUQhH9QfLwkFENFXycnMzNGohtV2zccewe7ZQyhgrQ8vGowYRJs7M",
  "key11": "4EhouPa9CPWKKwWBF97kZgtLLZBLPnZh2f3LRHEedoCHWuSkzJqSu3LkFNG8AW4WEDSU87ruXu9MtNJWLG9VMfHo",
  "key12": "3wVkauTByD7vS4Wevw2yASiaqxLrTC2bSwRMy1jEQ3JidKvdXDmJCrDSchPYYjv5emHopWnoPUpfVxHMxywn4eNm",
  "key13": "4tLyuPsvnw24n24khDfpdUv9bXdzh5bZGc3DThV1KWc5A2rbpF9MZNVcc1p8dEzh9hu4ezGNjaZVMzGmCE3yGtmM",
  "key14": "Kd8nt3zjjEWsvtwMfdk7NdSsdJAzcMMrZu4L92HSDgHFDxNK7nWYg1EsTuBQyJktL72bjDxA7PcQ4JPXmys3Db5",
  "key15": "AMUtMmaTucy4SEk6vwebZHBUbpavXyKMw7HewmF5zEgzA8UKBw15aCHtK6U81top2jag57TcWTy6GXEsgDHHdtA",
  "key16": "561sMeaVzATxm7kCSKTmr6669EZ8VfQ776k3j7h27Uet55M3CDNM1ggdLCTYjr8PnKiLfy7LJrMYdyaittMUuxkf",
  "key17": "2mmJzTF4i74LNsqofrWpHHtD3efjRaLtWX6wSrKfwAjNAEPKcbR4LbrndR4BNrj6CW7uxv7Wc4ueHDBoKMzU5sAz",
  "key18": "2RAZGqmNitWqz7eggZqcxFGKCZNRoLpHayW6JMBnZxcJt6WjqBE3cpKRpLb9MfqqUQGv7u1mZCkUcKTkC67itkqv",
  "key19": "4UKNKRSCWZV9z1W7aVh9oDmrubS4Ay5BUx79nz8sjzwvz84pWG5i6yZMZXXyCP9wWPJmpXeGDdQUr5c8CAoEGJQm",
  "key20": "4TGYKMFkxks6RuDGXShSR8G6HySWvZ2ekW87TZdHsiiie5xUkCWyoLkW7gmEvkm8HxLSx71Ws7MXiy8svqz61NKS",
  "key21": "4STpNkcAVmH2KH2ad9VkM7Mkx7AWHXbryFsnTB1P3aW6yBAptFbQz3PGZKRVUsn6Le9W6sxdh33UvfhbFkKxXg65",
  "key22": "3eGAf7ChKn6CqAjwqe5M6JbBRbkUfTojFrFfM2eqToXcRGgnvrH9Q7KYJFZAjozpozqBeWVWbWRmkEKmdzLuMZQm",
  "key23": "Rwbodczjf8FZ8b5D6W3yVoifLaBSNkbrEww85SFME3Y1GJTWCh8ayHhCaxJVucrnb65hF4zUiSczjW6taNkCw2F",
  "key24": "2kXCALSdqF3YLpmQjuBRfxU6M5x7g4597UFNRVKCV6VwAyofqUkTS5k53xoNoKh9xugqY1oTWE1aoPrxtvGSA6g1",
  "key25": "2zp3SPEuf5VaQvNbggW5rhfjDHZvrzSKeC1fJ33oXgxbXyaEYbuSZo3AZ86cq6Z4dxLTkaSxzR2zDUyCsMM54k8y",
  "key26": "2Wa5e55LReWoAoyvH7tTBuQtLQPMcKaDkbW5YKFjCN9qpDMC7L5F9EqZzx2uA3ze2RVyzXiM3zyyLEhpNsFs65iR",
  "key27": "8FcnKxJK6Z4otVNWXCBXHUkKekUJPqPrytgjBXpzJwBk8qTA7CkzXq9TXwRKR6v6Qi1rkHyQUXwfXt1BSUSFQZU",
  "key28": "q7124Nb3Kj5NX8GWs2G5pBMcHAPR3nykKPgwaiSCpd15WyPh18jL5ZV2MThThxu36bfWX4EgUtMd62uyjNQenz9",
  "key29": "3KCkJzrr1ibTkQpsrQeiXV4V3XLdEL9iN76919HN4ksPyzKDJArwntyEsut5YFrStndbzbiZfdhHQZt7EmLVMp81",
  "key30": "5jycS6sxQeRErdNs6noYgpFKXUbjpRNrjG9viKXz8ugbboXWnt9xFcn2vZqzxbhw9BYxqUN7X8HnQPYa8u95UnZw",
  "key31": "5khYiEeLqQGKh1bbjWCq6L1DvfjSqBtAvsR1V1s73d77grcj7W11SXbAy1kjAosVTiJHkFDHX5E3tHtGYYCjBn4x"
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
