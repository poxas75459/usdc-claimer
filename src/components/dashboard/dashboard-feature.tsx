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
    "5gPCf4RrnnGNt4fwzoSJB35v73fbLeD4Bej9BH1qMa3TmhuxbTJy7c2kXunjkcbzT7Dsc8xhByugAVD76QMMBHDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62excbxtoYLa43Jk68himABYMiGUNo24bRbsT45L5HYr2LFGah2vUv1RtYrLLs1k5X8SvSYmi9XBqcWP6eZnPxmk",
  "key1": "3bVEMQs4PyCRA6kRACLBDAdqdrW1L8VaYk2Wug9Wb32C4uY564QiHzLyupFob5WEiBtvi4aitVuZCHRqkktGw3ja",
  "key2": "2LzLdfAkTQgdzVV871TYrTJuqvM3ukdKndWyoQ7vVhSpfc9BBkhx6Q9NswzGhFBzeJqAqSmDa5mnZus1PoQTRq6b",
  "key3": "4v8ivfCCVKv2FwZw8CC7a5ZCPvMndWuP5jtH8v7LW9FmB2vcnbWScUZRVkyzBbu36VALvWqm3qgS7WwKdTbLB4Gz",
  "key4": "4BPSb7xyTvAErcUcZcQTGEZWnxYz7MVeWTHcmi35fuRcMur1a7PVMKa65bqdf7Rkw4poiY1b1LrYXPQZEeQPA1Rw",
  "key5": "nw31yPWyJEYvXcVNAhCSeucSgfWjL5P8YFbpskCnZaySd2fvFsdAVuk5gATq6QyFb3TP3n1f7rTo6c7yrQsDZZp",
  "key6": "3mBkgNUHtLxEF8J1bMAjtRwC1nUKku6ELnJNDtAyV37GAi75QFm2mF8K3kQFQYxDaT1F7UrNu4TzXQEQcbkfoJ7v",
  "key7": "66xqZMs6PjH2SRMWcUBm6jZ5sNhVkVbJgjQTAUGvfC6fGVQuT8tMpVfceNxidRTrrPMC4e8KdVSBYKEZv6954jWg",
  "key8": "3MwpRAxTBvKgxHEc6meCXxHwWw2oNgS1Djs1useULX759oTwkfq1dCYdjzXVQfrif1nuydQWk8LoJMj8KyoxKDjA",
  "key9": "Hkw3JP9dQAj9J5Ez9WgMtPJjR7iMo8BciRnDTdsuwjmFUnkfeYtxP6z8iQjK7SAgZopTxcNm98L4HQXg83FoZXC",
  "key10": "3KQ9X3yTiAeKLybFV4B9LxVt3mNoAUXxaNqzzk4o1Bq3ZNDCDooyC3L77PadNjcfxYzEaMF8WH3U3oRY4Rv89AQd",
  "key11": "3kcVkc6vEDk5gWgq2fKL24WDVDVMBwNNNYiqHCa3u2SN6ma2Ni1fBz3kGxsT7LsPZHAASC5C7QQgEeyn1WJz36tF",
  "key12": "3GqkSSXUJT7rw9ADhNG5q5d42LJ4JVPbcF7KtDgbos2T83UMU1UxfHYVbJ2Zju4BeE4u3LJJcnH8jhxt5VeK56SF",
  "key13": "3cnbYwrToariaNgAj7hj3mecBfER1RzCujBob7mD8iHftnVzoyyiXrvQQ7hzi4EXQbiT4pyfvWsMwENRdvHn9SHp",
  "key14": "2BQ5WuBfgrdxVsL5PaYVv3NMzeAwVAHYm9QTZ7y5duz1KkuEH56xEnynuLPBKgRAkVUKwDy2NoamFExTzbh3WxuH",
  "key15": "4HyQj6wvY2WsB69siuhMFB8du9ox7YkK3yKeoZVX9jsE15Zba3pc5G7pp2ACJgx1rHVaM1myJ9PMbVBsXxgXUcXU",
  "key16": "4Kf8YGr4RubvfZrRMKVBDHHDpg2xxvuGUHWezJCdj7odJHhxZbK9qg15SPToFUqG1KKsXEa4w9V8gBeCB9tDkNeY",
  "key17": "Fagavw4QBXTTUs4efoULoFyP4bR7zur6WWKCN1zhdaStEPiNHkUHo7oVNrLKLQYoq6rHCxDoigkzBWZqKv1Qquu",
  "key18": "5kq3rq46WHnGxGDSQFTNy8KgaHdd26ecpyvT3nnWCVda8xoLCbfnZkBxU7SZgnojfy6QVUH7qGhBkz5mx85wYUXv",
  "key19": "32VxcgbPBuadiRCWJ1hAUxzq35Up4D7D18b5uM77s4FSPiptCK8PEdizyBr6kEkQhacJJJbqSQUaL6uQ5CtWDhdV",
  "key20": "56d8E9BmWcS1w9ZzAg4GSoTcshAcbo6MVmVGjuHKENKWpPzagEZDfaGRerAo3BhHnnAtYNoAnWfHhdfFrvAuCEYz",
  "key21": "5L9Eo2XpTTFBWjv5T9CnmsmfYzo78KbdTq2tQTPoLPy2jGJGNGtH7xBSMvFgSuvHhBSMSyVctpreCwnamRq1PLAb",
  "key22": "qdyphuj59bgW5uWEiBFKT9TYYC3M937beeRXeeDc4V8V5SGkv4jAFtXCVZfnX7mZJ4VH7EMW7xhJ6zyJ7aFjY1H",
  "key23": "2LPnF3auZBhbBJF4cZomJt41GMu2uHZN2uWQrLRfkEfEmtwiv9bh5mvXf69ATW9Gpnou9E3VsAeGS58qR1MKSyZs",
  "key24": "2vwLZXV97XJqaq23vbkkdCmsLUAynhGsFUjQCNVc6LsfcyfSPL8FTZRNo33JVkNDA8ERRtnE2eCaP2273X4GoV9t",
  "key25": "49CaDFjiNfvZakzTNi2D6NrByLRHXp9RDHzRJ6cYkqycUxpMPjbPCS4KJpRzny9PZE2u5JaAdFNRsSDxrSJHDz99"
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
