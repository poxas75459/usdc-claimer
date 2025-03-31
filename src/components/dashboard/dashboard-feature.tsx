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
    "iyCMDA1hsir2ak13XKaHXWSEQd2a5Udfh8g4HMmvJoo14jMHXNaA5RFa9WHhqNYwkGwnGm95FDdbsfxtVzux5o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgF93nXBkYwafUPVtYF5YQb6WCTtT6b9W4Hnn6NRpdihYg3NwZ5FKGyTU45JX4fpkKemhL57kuBLRVDkasvBxsx",
  "key1": "3HeifVJ8EWePGNQmSNnosaN25ELx8GGgPwgcRZCPjAKUtKs1xmJWs1wuWHX8TvSfcgsV9L42PToYnyZWAWqczmrr",
  "key2": "2Qos4tNeKphD5dM7UskLpqfnmsqRAVJptC6h3azmByQYcigo2GaTNDTCbv6KeBTLvXknVwLPqJVowk44RQv5GEez",
  "key3": "4cHr2m6TGjKWMqDKeuxjgsWv2kv7nVBhhKyMXfWzdPhYrxwzp8WQchZRKkzkqUckszfWdtKKTcqT3pWnC6AwdoM5",
  "key4": "66tTj4U5NTJmByShFyCEmMSJ3N69x7uYD5FMfyZx1QioDuR61TfZAn8wmnsU51F5RtwYBTZuJZ9ppEmpjVcmYRcq",
  "key5": "5oWSYHZkq47hCDPtBCMKtUAeP3MDqeVaBv4z4KdDon9bkc2eHDqkveNCFyZUZaNZD35kffJcLMTT93Je7cGyr1e1",
  "key6": "4tjZBK1imXM5y1YHYi85j2RqG3nw21byaBcpraqFy5WmvdvXAdndncscBx6Yoj3EYnDKsgAoGRzq4Qtz6SxFCE9H",
  "key7": "4CiyqugSXNHKnDyXfYRN4CF9ZoP1LvtmjoKFUoN8pzfZGkF7TYDztCgT9pYrGfA6r5m3SDLiJVcGzsuxu9JMh7xE",
  "key8": "5mgw5JTWPg6XZ7DLFYraZtHxULqrTjCmQfYYFTrSZZt1zoxTVB2LmWrjk16Bmk9Pyz2tMf6Apb3bJ5bpDkd4Eaz4",
  "key9": "3fMvyPAfYyLuCFrWLG4ZQFULJ9eNDoZJWuGfTxwxuLVULxbVxDAVDT1MEUBsnBMGnsQJsQ1e8jS7bY8QCQd4p99a",
  "key10": "5YArZzhKp4Kb2GZrkeRxF76e9bkDyxA2GGoUq88pSrWdZAowCGcGukDhdh5idZu1Va3HBZX4HduKLRL7kwpWk2Zi",
  "key11": "4vR2KPupSH3PyXzvcZfnB4KMbnsvSXFkbbpXyxrgfmnZ2KHwBgxYwkzZ58ZcGKEBiu5iyVrqiNGU3WqGMh7ViZ2K",
  "key12": "Yc9Ey2YdqifckM35edbnCPtVZD2VBCagBcs3ZgspVgZPqbRY6HhF4UvrZcHy4cJwNYSVGwVyYEE433HekENyiE3",
  "key13": "2B5YYs6W3p8h6QSFM2DVP6fBdX3KiGE58FkZZtqTgLhVvXYXvdAqop8QseyE2FB8HpKc139icFAxfr3NBFeEvFF",
  "key14": "3YnDCQu5uwXV24YPrtkAnTRqQD1C4umqCGr8rqktiatcdhoVXhCTJ8NB2jHuEQkiuV5H5GKnBm1UBJ5a6RRW1TRc",
  "key15": "46D9BQ67MhytpfNbDHEbZRAsWqgKhtq8AnMc3U7weA1LfeX5fdgUWSZd4ymE8cotebia1t3Q6KDNNjaUMgjWdkfs",
  "key16": "4bqWAv5YjHJE1HKcFtEDMyeFMT9YC8aPKKkQscXRTSnbzLLXs41HPy7UWeZrRppWrLmMigj8Fb6688wzyZQxZoca",
  "key17": "5Toeib4pKCLrUgCobo7rKGuNL9NnJCKYHcrM7uFT4k3j8vbPRo1KEWsnywFiCJnT4acLqmPMtHNCruoDuoat4Hfg",
  "key18": "2FbnrJPVBDjaJnCyvkg758QLZfRcTrXfiETqjd3714ZLut14xpMPvE37a8Hh5nfrZYadmFvSBuayZYK9cKuXu27r",
  "key19": "47nmu5f3VLjd2gLx3CUMUHejPVqe37EnQ7y6SC3YLUxVRnLiaN4McthdjQUvH4c3NUrgA1eVd8kWFyHKXdS6FnHe",
  "key20": "5n32xawPSt2YrZR7B1T5eTWRff6pedZSs2DQjvHDJ9mDy7msKUZFZrGYXAEXij82rvwWAaXHkYxfZj4Sp4HKJkFD",
  "key21": "4jVst5f3rrtUuNBZSsSNHDRhPT8sYC6LnDVRsynLwzkohCYJcDxSPqMg7NkmbJvh54B8M5FEqR1PdquszUEwJ77J",
  "key22": "WK5NApNerCmWJmnuJodUeL1yTv6WryHBoLaLocXgBTiZrVsmpEm4by6QitTirdW8mhupKy8pt9HLa3Xhya7wg7K",
  "key23": "2UQxvNfJXqSsd8LtyqPwU6G7qMRzbmVGU1NyHucupestqtV943w8WFceYXwL4dKZyBa5prGaP1q9jwGeyB1ezjmR",
  "key24": "4KDbfgtRAzmoEEdqLKTcYGGQGgVs2CxTE4jAReqkFxZqBR8D7AhFvHoYtpYhJFbaa5TnRL5Lfv8XYTpnYaFnMKYW",
  "key25": "39T1j6N7xpGFYzdV4pyUVN2uxvvfgmg3aCWdtHnzC59dDAvHHRPRFNrMMp3zw95tHyT4uX56HjdSpB4XLjTeC6BF",
  "key26": "3jdn74eeqczQYkoiQVwWQCAhM6S47WVzzRoEFueJCtaxAT8N3CttpXn3ksdNRFQeoqrVm4W4xuxykE5G2qu4CGgt",
  "key27": "56d2skVAA9CuSEbZWJgfCgo6HWKVXBL511Gs7pRbtxZW7MyD1S24EpnLbGYpt7T1AkFVhtqbGyy5TySMN82AEWSf",
  "key28": "4GVvLhRPpkEJatKHuNmJhTMBUFpDNdYQmKygk1FKwnwTmwk1nXdKNSBoUXPKcxf9AS8kKiFJUUBk5xYAj6S6USdN",
  "key29": "3vmCYNbXtmigVEF1uvJvTsSe59jnDs3Fb6B2yGNPdUxkbQmnVxHz4P5YFmATEwaoi4EUu64BNjPcHWxtte7D75bm",
  "key30": "3Yjfr9P4Yncf3qxwNSk5MS1bWhHPXnF1e84Tb3aWXQXthVYR2mKkZkXToyAeFM37uBAMCkvZrRdJBZFDTMVFGziK",
  "key31": "4sseTa2AeuWnTH8wFsiofNRSLfVdfPYLAaVMRV8swFD46beN3dqNZNFuUH24gZmbhZjTh3MjHstR6VFjdgGP8Qhk",
  "key32": "3DpAq4TcwYTqiiJb8PdKv5gazu5SVcXX9Bk6DaP5H9pkcT51SkQrSkc1DaXAWSEy274X61P6uuDCxcaNVaW7LjQJ",
  "key33": "3QSbCg7RSE8usoUExDeKdZQ6CJGH2J4iZuFb9mz961sYoQ17shA79JudS5wTUhwB2S4Qvm2p22t7fsuz3R5gv9yn",
  "key34": "XtFx4dYHoFXLuaYwamWNuexVzX3zPUqAX7C7jTrQkj51GW6PfDXpg3ARg2YHPhfXoJBb2VVc4o628P8z6W4GKno",
  "key35": "6KDsqZ83nqtv6wYzbyDsynqfZYsSCRR2geML2twGmXWxyskhpyexqj2nR9xmoS7FdMFVbCa6eL6Z8AGcmfjVspy",
  "key36": "54RPckQjEgvuL1DbY1zMLFW3kNaGia5VQGCVfvy9aTL4yqHbkK5teYeECHgNoawLgPEERKtuauByx5FGGzTTJoaD",
  "key37": "46rc1m9qWS7LDXyxBGahMbWYYtKr1vXk8XyTnMG5vyX1gZxAjJPZReqp339gPULA61g1AASJkPPjcDetsBRXK9zh",
  "key38": "4GuSUYaheMiCPmSYeAhyRoN6BF62wZ7gN3VbSrXm3p8vJtvA2Asa9LgakjtfkUKAQPKYMGZWFv8ZMeN88PTMRzk",
  "key39": "2vomjAChoYtb3fyMxwiwow35iSCoFRpu3RwCfQtPNd3bMHXMY2kjWmgp7BwGNNYSYYqQyC8CBP8puxG57J8gWfxY"
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
