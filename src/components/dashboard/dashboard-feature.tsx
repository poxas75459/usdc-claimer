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
    "49Cq1xRxCSNAQYsYM2NLZbtAgBfTBpmhmiwX2zCxgbTpBrLRCkQsRfpXmrfQ26b7YLMDh423dj1Wop7NEoU2B55H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gu2epF9QajfvNKuBQeEYPLrFen1ZK9kqFXz5aCyhjfvoiX65TAMy2ywgSuyicToQRdtxNmeKLxV5t6JvNgsLK7w",
  "key1": "3eCu6w8fhaYBjqFd7bHTBgKe1tf5iKhYriWz7rYZ8F1nPeoWjcYGNNvU7j9VZwQj3DKt2TR6KZVJnGJAqZpTXgPg",
  "key2": "2Qy2mYUzd7KbgDchDg1db4UBS1jy9p42fmJVnnpHYAG9vdK3iu4jFWXaEhAWpbvHvDnXFtPLuXkTuiTXrtKN9usL",
  "key3": "3iXGNgjy7KBoZH5TRjgEwnix5MCzsFq1fVMCsC9khdRFbjPWM82K7faDPEZQTxuo4vUuKBNELTpo48gw8bjaUFiV",
  "key4": "51qCqhodqDJXUDCxuUAECgPyJpGKgSNAUJCdsPgk5k2CAgRt7cRTLVquW2wJK8kcLYZFnHh9hCkwuRifVwxTdvi1",
  "key5": "4P2wyvL58wg5vjN44TeUpo2op2PqgLn1xBdxoz411j3xMZkhaQ7hqNgRhH8M3gdUTruV5cR2Ra5WyQ6u6fhvuqSD",
  "key6": "TuP2j16nDDJLjGLbZpH3bBKSVa2KY2Dvkynys1MXGCwNbpAPjz4kQkqAU41Hk9XssNMngo635rrF1v6Zgr9nafS",
  "key7": "uDhYWRAoGzjcPssVvuY3q5eTU3RKL242uF4Lt4ggv6KD4DJz6SEvVCuShXNjn9FJwH7ayMv6K9dzXqTfHgCUAAd",
  "key8": "3gfHGkxjaPT9J1Rez4J4yj3TQtueruXhGu1hZCz7RQKw1TDtHQpYa6DhTRMf9J3gim1w715wZPhg5qZsGm8DR8z7",
  "key9": "2TXJcf1eKW8b9T8gBFYYNhrduWBC2vnL98ioo4p5mqtcV1EopfwmC6cZPwKbF58avURCQw34hJbcMtsvs3RNgPZ2",
  "key10": "2nz61HaYEspHDjDe6uo1Ts5tkA1Tz93E5o35Re9FxLXYTj9Jw4FC2jtV49XGhrAtf7Q4NrKoUdEBB5ACpuWo1fyn",
  "key11": "34ivZd9JQfrWwzEpArqfCgK4Kx67GkWt2w25YZnC7XoMy8LVbzLJC6fpTs972btbWvmufnACw2e8V2bZJKQf9xvv",
  "key12": "3CccXC6m1AS9Y74ujBvtkZHhTeAd45FRcJ6nzVUmijatme1MwZTgJt15yio6VpusLnwzypSajcwa1fQxrQNWsB8q",
  "key13": "5Dhv8Vb6nLBZvES8QunVbLsFDgo116vZ3bRAf3ja3RdpKv4DPnwRLMsAWUwwZbn934i7wR5UN8zaWgHBYcVG8MGJ",
  "key14": "3XV3yBnMuL6P1pPZCbCDuU4f5UPdbvAhnCucMuakteo3jAzwSc7yifa7Yof7XbRp4yeLWckLaX4oisvEPSKgfmK5",
  "key15": "2KV4A4558FbDmQEBWYyG1nJ7cGedb3NfgduRoz8ZS48kDYaxprXUGD9eWMLk191yRyGPNEJYrGVyLXV3qhMxXezy",
  "key16": "4XvYwzz2iAuj6KZJ3xpr1gYVtppdGkTmXoATWqQuyeVVt2zsmPdtVrNVXHiH5q9YCz7vw4uVhtYQwUQRT7vwz75m",
  "key17": "4xx8gsDiz9qnPpPHqc6VpRwTVPMGAWQHhFsN1mrm9V9GubmvprdBh59iWPdmzwQvvPW3L8WzXxQobhRn3Y5L7Kic",
  "key18": "4MXVnxe18zSFAYLdWb2QSU41af88W8Y8Xh9FaYR4fknqAp3tE1ehNm5NaRU3YRhFkNvuYYqz2KdE3RenYrGdgpQs",
  "key19": "29pFCahXGigGPmbTwfsADEyVCfCzh36SjRsmk1LxmBb6VtBCSg43kVQR1f6vxMsa9tsw91rTZM4vTqp1edTYQDPr",
  "key20": "2CvsWqj4T2BiCgsyYV9NUx8T5ELyi2RbYyrSnzx8FJCENFLY3yCQiQxdzK5WsLaXzUDVEKR5hwzcH9hAsz3cR4iv",
  "key21": "4QJh6vEsWRynTsbQ4dsZ6yb9JHWzUeUbbY1sTRpsPLydiygBHf1cBgPpqJDSdwQ4pqacGXm5117CXs7DYz2HPZNv",
  "key22": "5ES5acHj4ravXVWMLTmJdwKQcpxf7iGvHPANFrvvQfePJuLissVQTfavF9sqCZfz7e9apHRyy8oWy5Rm1SJ2ZpP3",
  "key23": "4Jnut5y8yyPTfJoHcKWBoZkD7xXMmUHgLV49QRnaGDzMF48bPChWHyWmmDzcz3cN3P9VFCt7PX6F6okAR1HhR67X",
  "key24": "5feRaRT5HPRvxHuj4XhSciQfkYyzWXiRDnx3taZRW4QWXJqWWNhx4AHS2aqW5adjpGbwGR7vZJbC4N3T5sri5LtN",
  "key25": "ZWFj7bXvMVW5hzMwB2qyhsKd5CRwEfiVhwyWXBvnF2e74pP1Ykd1BSepr3Esx99Hy6GtrpJbE2pBEkRCjgcyTWX",
  "key26": "3WBDzn6N4w7n39LexmdLQwtyLiGi18oZRccFXMvYkgc9p7sfkZMFCEHK7bnmbLUNWKQSkRNfjv3jQAsCKderBdNN",
  "key27": "26VkZaJabWBAJ5mVPipWx7WiNrkcc5KRSXuPFDBgDTSqDf7BLvdXjHxZN9658tEt4v5tFWSrXhPFG4dqjrhEqMPq",
  "key28": "5NvM8nKcf8vAozMeup7fhdsgRkhAq1n4Ho4jMHLZKVkbNhVgwdXzoYx9vZeNsvCnp9c1Sk2h2sQ2eruioV7RkHsr",
  "key29": "3MX8ZxovGNKgn5eq8r5nSpnK1TLJw3pnUzdYEaqNskQb7t9gv2qtjxkQo6nzpXkr2gnbnEeCrmKs4xaEPRp8zcAy",
  "key30": "2mNRjRB8k8saNHMx8xgBAmsVjWEzaiQKRS1mCvrvTcTXA3bMFx3YaPRRD1E7E94tDhhtk9ZGXv9owZmLzC1NPUKY",
  "key31": "fjdkJjNFGhdY8WEVaBeqBfhafX8VhdtXs8NUXVM8WEDUePwn4CNYm9BaajX3gRfzDYaFyHYSAwj528FF2VseVYz",
  "key32": "3VbmTEAqKJLVVajtLKmiXfhJaHBwgEVA9SHDFvwQim6ov89smdkRxYnEn3HHchHvJocAgjNRjA2XQNUj1PsVsS8S",
  "key33": "4GamtL86A46jwFeKEWAdtCq46dxiHpbTH4HPhRZWbBvia7w1gzy5wcBs7Zryu2HkmkwTcvuLkbJP2zwJVdZyZNf1",
  "key34": "3ePcqpyPnE4Faxk4pqAYS5HoY2yXXLjBT8rL9r4qaJ1HGiLQh4W2ksX8vJ3bJ6s7igpwpuLCmKobqD5LcG5T5qiv"
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
