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
    "4TuZ5phL5Fg8n1QbzXUpccAx5d3dvkDA3RcwYS16kZeo6tAcrNdjdQDtp9JpBpJoXFckMjCCzuF8ZzoEBG4pHeQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BAsuE6HfYpTeU1jkrLbNjj7AWprBeQ7zsWkiakWPRyP96hEmeFrhSDf7gkN6FumbQs52Ng8Mu4GC6r4YW2GMxCJ",
  "key1": "2pW8azLxHvmcdTRnJ9eWJ5zLYeR2qXzifC4WWzyzoWQF5AHbUBjTZVCsdDndxsVBg1CpZc3ynhtmm8K1jpZdniaD",
  "key2": "3Ftw9wx3hYGnytvkRdtnSDaWMqNHq2B4JEC6gYfViroaKj7eW7sqfi9tpywZSzHbFydytdPksDoiMHiuFXe6gDak",
  "key3": "3sZg1MVgNedKbxrEazkozNQeP4f8L88QMUX1diWEDExhB3HDcGrg5o5MyKrA6pxsvqjFLSi2TVMHgFKBTGL4R67t",
  "key4": "25FM5UQaG5WTWMGANA9uHkCmYFafCDQfRoMUqtd9rJ8dSxEKCjFKK5JferuWyndXVmEP12c9yuGHxheHv6Xaatsv",
  "key5": "4P72y22iEtm1rMXiEF3vvsAvhhJm6K18xtxNXrk1xvMnpSYR6C4zXC1WY3wrFhmQFrpmo4Hb9Hq2oYUewFGaF3n8",
  "key6": "d6jfPQV3h2EDwrfC1qt5j94WdpLwBXpbzfeZBanNv59aUHrbxszK7UaxFmqquYPCe55HvpR6BN63K8tLbEaC6sr",
  "key7": "PwtHqPTMhZ1QfPeguyvchXF8voWy2UkBJcfvPF3ATZ43yXoKFKKb6e8TtEiEFk41MKXB4ksn5y38X8onYZPaZ1T",
  "key8": "5QzrSRTEg15jhN2YbZtYv4bgsH42fwRrsSoBjmYYzZL3F4sumqDpRiPoQpJDnqLnWDZhoBsUS4BW5CB3CjK7Vtq2",
  "key9": "36o9WZdYgScCfVr7snm3WtHqxkzMU43Diirm2U5Zfty82HyvE126PBG3TpqdPhbiq2JgNef9C9sSQ7LgYJkDUn3d",
  "key10": "MwaTJDDcBWBaynfb9jjZWjPFk3JaUwefoXSXeXMbLWYSJPi8WEWxD8N99UDjLK5Lk3pMTA2BfG9nFB557Ex7jPF",
  "key11": "4zWBjLiMmDw6DMzmeXtvUavvTnDjrapKJ46mHXeEeuvn1tqPW6BpU6eF1z91apX26SMxREbAHRx7PVuncodaT6vD",
  "key12": "5q6K8r8qgvx5fc7C6fHb5VNyu4iaX8SZCwySm8axK2rBQr7aj1GvRRW2ikbuCM4RsZAX3brDWevDvWeeTQTKajXW",
  "key13": "4rvVXorBrhr83aXimT7rciLTdeAKjBKzy22LkHGyv3ncdkaoTUd3qrgRXFT9xG3o7vc1U8UsKHnNvtTho2uZtLdd",
  "key14": "4w3MnqjxLd3L5se5vHxnt59wC3Sk7SxTn3ukBQTn8nsiYtEk1u5oRD6w7L8V8eUWZe5Kf9RniuaWWdXvVEK9EXyi",
  "key15": "4b8WtmvVPuSSZfpuBasneyhdNyGSV1WXtv6zBtJWu1SHiuRcpuEft9zQtTJMQ6LLP8DyxGvjM4eBufqe7jSHBovf",
  "key16": "3LECFKaZZm2cU5D55X6PZvkm6W4YEaWWs2zzEaccjMs7FRkhBbmQo1t1wuWf8B3oH6PYuAC3cSDzKQVuyvpBfofu",
  "key17": "dg9LL6qLBHLS7rr9Zkg27irNu8Sys3FFSYezTayXiq83mkJE9vwXFnEjhDzUrxcyc4KBnfH4n8HFJZDhtybsN8f",
  "key18": "4TVC26FU3XnSUzmLJkbhnXekE9s15G9gw9rGTkWFx7SGNHEAUwkoVWSCqsgcGCfkAf6DYCQT6wejw649RZVWU9VH",
  "key19": "4me7pTRKvrTffhkyToFJTsBekkHgt8oZiQid6Z5oGuRoiMQhiWhBAyVDJFFkD4tCaRMMCdC9okPrgGV7MVHVDW3u",
  "key20": "3bE2NgyGXEEWUooV5xEFRCTHy7xUUzobZazHCpVUp9b1PEnYU9byPwNaFnD1XqrPeF3bKRRUVEkNd3dLDVEXaeHi",
  "key21": "2fcyGM9RXqE5iDEdaMRDs6kJ6FgXNKtQiexkNRKBAgdofKjXRgJpUpB5ckDi3SnCsrxLasGFP9SjYuaTqvBsJyMS",
  "key22": "26EeMErt295H6pLam5R9YYJYGjojxN2nGWhGGkD5NsoXGCcNvYeEE7YT6FbFQWCxpZw2nFHat5zxRgXRiWP2XP9h",
  "key23": "2UvMkpouq4eYrhnn3w6wpGBM1yAUmiCX8x8fx41AzJtfPmX46uiKAy4ikkLmyAYqqgXC8oLbDgn1NZSMjM2sURVv",
  "key24": "5vvxytPKXaQiYHWRYPDe7BWn1wcPdCuhJJNN7DN3tbpRMYTgoEMh1AqA6dUneywSaiqtmvz3mbuiPuDyyEk9zrNU",
  "key25": "3ez62z1RqdYZJorf8GXngABkLcXBJvnDUg5UHRWQMeTd99mkPc4Mnk46XBGpDvwYnLTTnTR7QymwZ7ZxsvHguX1r",
  "key26": "2pBhiB9wr68M8CkFeR5PduCLwKTeJM1KyhNrtUBmx9A4fwsP2XLxomCx751KGGmaYV9zPHrk1sgf1BqvDrptewqH",
  "key27": "5rJgAWMdRJNtu2orkBWUP4srBJ2aT6U1GVR8gQC2qGvpR4ZSx7j7SSyrqkD8ran9H9CmnwFRzueXwWpr96myzyqF",
  "key28": "2kdi92uSiEjNpbyfcfLYhedFFz1HhWwD8mHnHjKSxPDjsFCAYBS3YbW22WQ1fjcW9QjVrUrnF53qPraf1j1EH8Ti",
  "key29": "26vhUkYKo3UqeqCgp1FT9VFfC4m3tVmvPPKnEynY9CbjjQhzZghP3T3KpcHGm2a13kGFKiktJqd43aeWxaPBYH9x"
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
