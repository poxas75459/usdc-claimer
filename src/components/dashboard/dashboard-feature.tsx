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
    "4JcJg9YWe2e41zKPvoX9Di3QLmCW5uTDzUMqt2S8nv2knsu285uAfvhN8LvZXuvZzxc9iiA35ATNyiygAnBpRz7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XsW9ggfZzRcBM9PXLTcQ6bj7dxQV19p819uQsT835B4FDgnmzyyqxpRsrttYL4A3hNNnAcHv7NQvf8SdzBpWGj5",
  "key1": "22YYeJPtTUtAgHULYBNtfcopK2kFzAvrNzHvSTRf4PgihYFhm3ESjghwWLEHAhuzefiJQcmiUVFTgfPcN3FAKcQQ",
  "key2": "sba4pbeDcukqpZZxNiznM2LkCgkpxNWAuWNjnATH2szmrvroCL12xMF4gs4s4SqizwPmtAAbk6X7Svpby9dARmi",
  "key3": "2WunXeyKStAiab6h5kQVjbypdyD8Ar26vdnLHRHsgxrC6jPoAthWet4BGVxDpLQ2ZNPgqqhiAqadUxyLFDBvBACT",
  "key4": "4pMvVffyedVXsX1f8GBHV6Qup38xDE6anmAb2y7Xuy3nMYkEiKyu3188op8AN1BJei73mNHXxHMVG6W542LbyupE",
  "key5": "66x4Fva1c73EvfLuKbYqZxCxSsaw8mRkBXfNqx5W7F3vhiCNcr94m1D4QAN46oKVdPG5TtD8BXHvPUXanuS2Xm3C",
  "key6": "3ipPFXb8ME5RbS3tbrsuNUMStfMmwpSgGZVW7jY8eeqoohmiKd9hihfnA4ikZCjucCpufddLfAsU7y5jAfjFhYVg",
  "key7": "3nBmfZwr8NNuvKszSpAMuBXoifeMePHgQX1T3oFgKbAQJVdBRdwn6GbMh7xL4myb2xAAxAXp3KKu79kWy9RZ1U4o",
  "key8": "2oqG2KWPLCSZ7efCEb1jBuba6VXAk6f7n9YNEGtpUQ5vGTth1fDqci1jPXNXTEeXJ1oyYgcawj1ewEDwpyPRRyvX",
  "key9": "2vJ6vMdoXswx5PXgn2pd6H55HoNj3Tg1ftF9f1xTdc1z4LiD2QQKgUWp81jvMhp7Kydcu58eCzLkEda118Rx79J6",
  "key10": "23qL8Lxbrx1k5ShZhn6MvRwHohVTtwu56V8kua7oDxU4ZvNHaHANqQ69hw1ggxm1BKkEh7zEdB9J26AXSsnkmcFG",
  "key11": "2F4zqsX6SPA84aiBL8snx7T7JEC6GUFi51bBQDMU5VSD5gxnzcNx64E9LbPnNGMvKC8wyXji9toBRr57A4TAu5xb",
  "key12": "2VogMhGTcZ788hiUMKsLaZosMS2zhEKe17Bkh8ycVebwCnkFskPy6GMbpvxUABFNeKd1hFPBv7hTWehLoAuQWL9H",
  "key13": "4NHayB9Tjzx5oeGYTybUtSV4DbU9eykLnbHcSztrdVWqY2ZQJQ45F3yHoZfWsk4qjUGM1aHPWzMx4AxEfcWoGGav",
  "key14": "45eFcoHCJHYpWU2iePnvuH1YrV6z93xwSi4ECCAbdVEwbGBoEtLbo92e5FcaXaLs6ePzsDbcUV4GDpbUW4nYLPXu",
  "key15": "2uF5sLUhueTDGSiL9CMfTSJ6r1rAsRVd5YZoN6hTpvWikUqRyTZyhMGeW6dPuFLThout7CoaeRepCgnWuNQW6Go3",
  "key16": "3GGwdcmbVsgquzvcbqXpGrnAVepcUD8oB8R6ovGh1Es3g2mJwPJUn3Xi8yPH56FYUfKGLFCWhjMSPMiiNh9QWK2U",
  "key17": "4mwdZoaSqGiAm4SYvV9ESwtn2RAm7eh6SgZ27Krk97LDiDf26Uf5LF1ozi9TXSSCyPXGMAoqPFGEufuCfHyx2z7b",
  "key18": "427XfCxx7Rvg3H6GVDbiapEoVvuCp9vLBD5dveUDzW4uSsozAWCaarMogf247Ard6hJbqj8XJk5yY7GupYSAyV7D",
  "key19": "2FT2fERotycvddd4FFRsTt1T69Ma4vvuSjZn3f98UDkZbRibuV23iixAUPxA9qaG2yCJVEZkri6aAJwkzpQqpQz3",
  "key20": "5VBwR1Y1xheMnDjL9oSxBV8p2E9RB3sx91JEky1e4TcNvvVYzpArPG58NZ58s6L2BrFmxNuAUL4AC9HpjqsDWfVz",
  "key21": "5Ly885kWY1UA5prW2buUFYWujTyNMcBARmLsoFyNujRFnTsVndEt8eLGtwuGU2AfVx7BQkG726UcE5P3HefT7GLK",
  "key22": "2GdEiuAse5uo2BiX1Pd8jCbaMU3fJ4tmhzZ252a7Feo9BJHR1UZFtPsfbcgJznCepPFpWvfjVnvHY55uom3Amvn",
  "key23": "5tK4NjQLq9BAL8JGYZzdmmZhwq2MBunxicXo8SWrAUD7pYSmmmWWBWxvftsKHpz2xFFbNPxFo9CmVQ2RzohkS3vP",
  "key24": "8sewx6Rxcw3XD8wLzm2VuAPx87BjEwsbnrAfHeBtE7jdQnS5v47zN9fvzjerhdZ5YaAqdj1AGLgd9BoQDybWyhp",
  "key25": "4QHjqymV3ZcgNmteL2qn6vAn2Fuof9jgWXrhvDvshjgroX61TLyQNDWDjy2SqGB1UckKBqTSNpeNw2ekjsMrpH43"
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
