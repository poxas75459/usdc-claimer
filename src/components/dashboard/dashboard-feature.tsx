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
    "31cUhYgDpJttH3SWYWRrtaGfb8ih4VNaYfN8woAoE51gAG65mGFfe1rWoobV5tkL2EEN49ka5rRCCph3dLNmRogZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HjVP86erHiCxC1BEPAGujBAV5GfVJVnSpnewtU1H6hJxZWd1Sq3jersUhNYi1eZ3TKyTPXBYzsmujPf9SVDmMKu",
  "key1": "2FsbeQpPvmEdNXeBbZbx25h2JeCvLR45X93U3XVAhqaSYNeqHaLPApDbYFLAKrrB1ohgpapYgrdLpT37ZV1C4waR",
  "key2": "5yHubANXrYoRPogxLDCzJyD2T6fy1yLuBUUdLzneyqgADbXMPLP18GKSb5VkQ8EL7DKB3t8HeMynMbztwHHpF4md",
  "key3": "5avSrLizQFcTN9dZFHdLPuQbAf28HCHNExg7JpGy5nAVteh3zYvGuG3qVHyeBSbVq17hfoqfLeEgtgVBhARoFtfD",
  "key4": "5kvz7xvCYMT2WXyLUvFiZBrWnD1fvx5inhUCBUNEmS7os41bqi3pvdCQ36BSrL9E7dFbJ3f7JMrPPfBebTG2cB4Y",
  "key5": "3etqTxC79JHPy6VVqCEuxMMoqJ5B6Dxd4TWPQZaU7xEiRhjzxMjzXtFQKRFzc6S6g84RKFQYc2Qee6jJW1MH9GDw",
  "key6": "2MyUeQgXaJLcwShZahhebkdaZsfSjq5vAvj6r5e3ZJ5TWMQa2fjdVpMLQRyaQnzrjE8yW2dBYpVNRbmqRyTcrZew",
  "key7": "4Y1hHmStYSAAfyfp1RLQ4Wrnv2QkB5zNiquzAg5G8zGced79KBEF1Ph2cjTPpeDjfN4KYvQtTCt5DPyGg5xzTfTT",
  "key8": "4SZNbbrKE7xgrUVryFofHuao11dzEbhVj9HHGZ8tEdMRaRSzi1Kv9aRSANgCHuKe3JU9Y9uwUnZ4UyX6UUhmFv3w",
  "key9": "3AvCyrdeo2nd6DujWqhoCxvK6TDbufpVZ6UBSJhhfW1jrRMSX4yhRF4wheFm6ugJrHkZj7DrRsoLe8XwCpJRXqz9",
  "key10": "3qv4RCvHsDk2BmAkRVWnYigFoohaqYWqbwRCBhQiA5RRRE4MK3QaTpHJScpGD7Ktb531cwrEKUVRkd6D88sp3CCz",
  "key11": "3xiwvFU8NSnMQSdXWsKMVhhoFYd5cSqYg3SheuChqHshYDP9W7n9PosKXidYd7U5892hqsRAGYYxy3fcK22gGaRL",
  "key12": "pfZSGQPrqVwWhFF3QsnAeUrff2skcAwyMHyzaB53QaNgZx2FMUYoa7kUcgDcnykdAvVLJT7D7boKAcHVpeVGZBW",
  "key13": "5reTx1g3efzWxaj9zZtGybQNJ1q8AUfNcxpcr5FNfZE7goERhKwtoMgMSwGmvn3Qm24iNaMFQmJDjzeyNhjBvWbu",
  "key14": "5Bb6vVyjJs3bA7qUHwyvhCryxbqiud2aHzBh5hNdmj91Gw2NWKjQaz3RkSm3w37QJRCr518rSSsNxJrnZ54vuXQ1",
  "key15": "5pLStVbMY63igZQxwGufgRdqdRWQJDtfpDKr1BeAqpDfvB5fqxPro8acMi8WHwGXghQpFC4ZmwRvB17L7bP5jjVe",
  "key16": "35WxuES3xVnm1zmJvLZBATKN9Koo5oMJxo6K3dyY2Q1SEjiUFzL94pykRzeirebG1jnKPufkXWSbCMwzU2597YwC",
  "key17": "5CYoZAEkwQfcuXjFXbxtCjMeoQEf26LDmUG2N9bupShHvdKfBvuYavfAiT4SfmNNphMXyAPsXgZBHuBYMgFjpQMQ",
  "key18": "4NAWZiB6xsm7b8w8NBTAYVXExTpeSgrytNcjdrWvNr115jvp61xnXKz8FTJAiR2y9J9bqgepEUfVaqs8WJXmJSZ5",
  "key19": "3P6rC9rJHuGhH8qhCfHFdU3W4vkqM4P8eRfFP8mw12Li5Vo9FpMsoEMx4hhJKGVcDbeoXLgRZN13mrsshgWDhyAv",
  "key20": "25VK9GChvhkswoTALEDn3c9WExu4XwdZkZ9RgQHoRLyhBZQiBVvV5rUKhdTRKVoyuUSyEwoswXFLyTLUkeBmW3U5",
  "key21": "uvM3DEG2mCHxckY5nhMYEwPfoUgKoxac5cNg9SoCT8CXV67RMWFppKxsqWxBrBqyX1gtY9iiu2ZFk8zHzbkEGmr",
  "key22": "287RQowkkEHJgGg3HGmpUULe9jmvufnx4owNQgKagdintQHyPDhHCTiDetNdgr56P9N1y1rUP17GVSozSy6RKqAS",
  "key23": "SvWF6CYwKRYLq7ChyTjUqTd4QvSibqzZ39Jn4paYtd9MFMtqqiWvJAW182WTEY8TyRFfKiP15D3eFzejdshyS2E",
  "key24": "3wVq8A53wyGzYWn32FKdZM5JpRjFg6c1ocyxbyv8UMrMrkcMGAULUjidGgw52L58v7vwzWew5cv2rKuJieP39b6X",
  "key25": "5yReXxkVmodvLcqeGAJFoMLBcYJjDa5u1QxdcHhssdZE9oqi3XWYTqnQgWMpuMyd6ePDXSyESFsi8iQgpsZuP8U6",
  "key26": "qJnRonRu9YmmqFzoAfTq7TW8SBd7wiPhzRNGDuZLGcGBCrtZ1b9V42SBngN73RWZmQYfrZrsK7cUJc6vM3C8XdX",
  "key27": "2L2qW8C45eL1BWuXc7UgS5rtbsPL8Mp4SRu7hpMs4CRktCTKKn5PJrCLLgMe34a8kLuBQQsJnYYzcyQRGihLG5rj",
  "key28": "39NACtXxfjP8NjREDXJhYjE6w4PxHa8PotuuXpgMEa749N2b5EVTgWdCg8b2XB55josaNiQjHUb1apzaH1AwjLKi",
  "key29": "3mxG1ptGifrNbLz4M5jLuMRsfiq15JofPB6gexFoTWMqR1yfh3gZN8yRkkkgZuLz7QoSqpna75VnCzEYgfaRfDRW",
  "key30": "2yAHpgJUdFYn3TLAzyXT9EptgemHDR4nsVsJi1fj8kU33hnSGc3KBkg1MpRXpSb5DtgfS8Wp4oQvqd1RssYkZBRi"
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
