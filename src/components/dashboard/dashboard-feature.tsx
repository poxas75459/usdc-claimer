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
    "JXgVLGZ7UTZTTZerNQEudQCXFubLfMf9tKy15XD39kXpo2yBVh9AvqgN8fc3tq9Ja7sboWQsryjDeC5fGjV9uVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zjj1VGqp1BDFK2uQRmMg1yswxi7apeL6Z1v4uQKrtiY4915UCn2L3Vw2vST2wKCvEQ4evASENV6WukBAhAWKHhZ",
  "key1": "3hF2ts6QjP1sqEMU9DWaat5mbsFrygZ9DBRHqPLdFSdqERTdouYJy5aFsQQz6HNwKT9XDbNn8egoHLERVmK1s4Jv",
  "key2": "2DQr9aTuUU4qyJG8UTQYgtBVxo1gznDb3Fpk52xHZXcFnKwXfGxobuUwQptiyFxroheTXxWNgqe29yzSQ4XkxLiK",
  "key3": "4Y4kbSYJT11ExH4or6ZnyKhgkGyeHwGk31Beycdd72ALS4Jqo8GZPVBsHaM83SH2g5vbT2U51isvk9BC1m85NghA",
  "key4": "5tSaLuUuduN2khEDU8f12pZXSBfs1D9dQfXSAaJGeye3fMxRNPbnLqSBqErhhTpXDfHvEWPg5d2tDsFGtUcU9hJ8",
  "key5": "4NQonzDCXvJC28jrRBciKZaGvns91tZXCuLQPKLnwGEYNHKs7gypunTLmXnBuTiy6mjNdDffpWCjfAPqAA3MXroA",
  "key6": "4awus7cUGt8McKJmr9uaatiEEwB1v5cQsFvEcpLmc5TxVWmtysXcJKMA4acTpeHMaWsikX6imLw3Q7FbMecrePTN",
  "key7": "n6BoG2BwpBDTENsMHL7F1P2tayc3GUsSfoZsAbUJjov8dFeKwzLWXqV79iqRufQmVjDhHSABXBqzSEDWG8agUyc",
  "key8": "3VLaXj4cbD2foonBPjEwUjQwcN8eWrFdt1vaBQfrWjoSffEgcoYYRS2rBP4Lw7zyDiHcRp4f14nRkXLe242uxvSy",
  "key9": "2m11b9DnqyxikrD3B8sDx1PwwYQPsxmbUEMtc4JCU7oABdwxdcnfxS8uh2XA4h3wHaoqpbPgfuBrwy7tN1g9u7Eo",
  "key10": "3Hs8nEpJ8py8jUTLSMRu4NPNuQm5Ze54xTmbso7qBQ5V6393BejF3XZbXbwR6sncnp5tikrq3FCXFk6PN81mkGct",
  "key11": "55iyzmEt9Grb2WdtyuXkebBK56aXoEstNiYKqbJYJuGGa6QpoAZA3pzRecstScWz5AZxdFgVGZLDeyxJgrhApEUA",
  "key12": "2g3kBuEPKHJnH58sMVydr7HhAfgutaLu1J8ULwjc2pG661t26d9K2X9cfEM3gWUpLMCC6BkCJTrrZ3btYmKKoTVD",
  "key13": "27hD1XmwGifxpBy1tHuFTewnMcL39oHK37D7FCZBnYEkDNTrkZvjTAJE5bNLSow8iGNQNnwewNmEoGhcuNqgbZ9q",
  "key14": "4jHaxs5sALcvpQoWBXcAEKT7N48ZCxo1KwL8XCgEHA4Z1mJoD1EQFACHSqjWy1BCP495tf2RFqrMk6vttcmzYeWx",
  "key15": "g5p9L9Doz7mB4rtQhHQv2fWSaeNXKAxc6cgD5ZVBT7E95pRnGE97Pd8xtdQtamz8Jsf9Hc58MsLU3XsME9BJQKC",
  "key16": "4UvSxuKVSmjK51QLHFLMMZdRCFpvg6gaVToXoMkt8peDBJgn8Y7Q26womWkNnFmNQeS8TjqA6wAPiAH3vADB8aWs",
  "key17": "4WZ5eVBHbRQukybrEcc9FMR5pC4LbhvDBSssC7TGUro4u2wvat8JvaGHAuSNVBKxkE4yX7WSCaj3rWVZ8wRXjQg4",
  "key18": "x3vG9fgu5MmcoZATRjmDSKthLaRDwaeG48deRKddZtdnsGQBnFxSGw49r7jnXJmYGu9SNsGZyv8pyUhcH8WFE9D",
  "key19": "3WUSRXxiqfaDY8xEnpumx2gNRQMZEp5YbonQsWxo64BJipd361N1iHUgwYeKuv3xdn5Y4WJZHh6TN9PEpkrVpGte",
  "key20": "4ratSpUHtuKXjNHzkByuBcGdK8aQhExun3Eij3TBaZM3WPupruPvf2TUtD5kt4EMaUgg6KUvLHeLSjW4iP53pUvW",
  "key21": "UjJygGgxEpnwCmnnLMKMJzSW2ye6LS7FH8ARPz2xWVAHsRfpNnrB3gRWuuoqdV3fQbFKpofN5ZgDJBLUqTJdBJj",
  "key22": "58ZmevJQzdei78D5LqMaMgLmZ1RvhzZp4YHtTWySkDGBUDZrnfNnWyvFMPKfcSJoKKLcksSL5HGCujyGL9us5Yee",
  "key23": "98v8f27qXWFNKXSTqukXS9bykbFc2sdNTAkWzTpdgHgtCb3UKiTtpbQ8c62Nu5YTB5FQ8HLw1dCXL3hTcWqrdfs",
  "key24": "4N29Ltr9FZ7gaMdM9oHpr2LEX7Xx5PwkNBHGG9f7eZ8NgkKZfRrmXk7FH1wqeLSbSA8nQN2AafS9J9fTNhyRJLwt",
  "key25": "5bEDDvcfg9LE57PvTYzuXdobeUquiKzYiHzdMP6PUQjJsDLuu6JaENzALx9eEEeX2qctCJKYJYa3Zj2QUXrBJt2W",
  "key26": "5ot6BNAn2nmDzHCwfrVXR6DYGj2J2gK57C7Hpa6NWdUfLgZjr66mknhVhcJ33E5iemr4jwAMpo1nDHdg6scLST9N",
  "key27": "EcmgWZtYi9ejvVg1vrcQUVGs24MA1SHXv2DdEjgMc8zcN4SKqsDiKD3Gz5iuLiTUxBrJgwSUNzd58De58EtMP7v",
  "key28": "5byKPZejfGVUxkVzS9FsieMB1Gd2T8BRCuQCCHCC4Y88g7a3MdcHVKvJcWa8cT9ffq7yqPW8TcssUkMMTp4MBfud",
  "key29": "TF4bdtwEAPUqDSryuw9H8P1ZRPp2sUzxnLeUJRfBXZYGHdmyMn5bc2FPLpVJzCoUUryPddegjv6V6JAEhjccALS"
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
