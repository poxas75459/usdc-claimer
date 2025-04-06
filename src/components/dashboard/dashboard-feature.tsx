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
    "3f6BaKdHgYTE28geviqv4cT1pV6TfnpDBMAk72WExMbN5NcGFytddMBsg9FXzyFtbc4rCvnCvnQrEkLcH5y7csjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49EmqoVbnLWEuvgyCXh6Gwb8YqmuJ8qx5zahCuNkWJkgVw9SEewx4dGWXoC2V45Zbue5MU7cxPFGm2eeA3MGJLdQ",
  "key1": "5weYxXR4PLCFbcqzN8bav2hdYGj682wzs4Gy1cTTh4gYPehcidMchDDgayby4e7qWSPXdU4KmcheJZwdxXBLjfY5",
  "key2": "pnpH7gJBD7vEW8wqjSjLPwVBxyk9czaQnhh5Sv24FDJVouaq7UhvrSu5GATdYhPrxh6iKjumW8x5AQmFgDsvxh1",
  "key3": "3mDz9pRRK8iQDKEdtDQaWRnzDHpahEDrCHnGwUqiwDHE7eEWgUKmx6tNWoDPnVbm9BSsabSMeBdti1oCMsCsD1jM",
  "key4": "5oLLXtGWhxK66CLcaZfrW95KxXzLryhzR1UehZovuzHw6dm59yN8vGZmubMrY2Fd79stnWNRREb5w41e6nBpe28R",
  "key5": "2HrfxwBMm7iErZfYFyrY2Sdk9rydBkR18YPqpXCcuzBxw8y7NZMmkWdyNgcMy1Y5NZWaNdLbGqzoWAR5LvrBhMQi",
  "key6": "HYQBpfFW7r1jHMGAndbZ5J4paaLLdhMSoMRV3i5tPTAAzKWymASdnt53qvyAgoNu4XSPt2DiCvgHiGsM5Y4NZ4x",
  "key7": "2FhwnjXfDS2PznkxkuJBHkkxoieouJ3KMC6VakjoFbs9gg6zhTV4CTyyqvg5StuC2g15q3G9SbhFVusJkWS9V8eo",
  "key8": "5MC4r2pC5o2QHEAgxo2ucN1pm6c61K3upwK6o8cxG2LhpoJRvKmT2JzYqbDazQNETSZKEeE9Xmdkq8PnjRHabxhQ",
  "key9": "37u3Dnm3T4zf5q3KNXbWGXTfuZAk7iK5CJafi7ZQ5D6RNVrWsXma9VkaVCY54ewmBrpi3kDba7bwbqALfkUxAdus",
  "key10": "zZUDvv3XTi7YVx4q1wKugcn5MPGGZp6mpDz9dat4qP5mgb15VwHFMYRJdQYbLLm243a7vowPspftxopHA7cgHkW",
  "key11": "4Crxjd4yaRVXHLcwDxWr9KwoTR8kM6wFrpxpWVfQnqRPwDeLJaFLxb7mhG8RXMWfc5sLXNjqQxivHQTMsE539EEg",
  "key12": "1xKd35mWrf8PPGgBxu3F9PdJyW5Gug24XH6nJCpn3sqTg2ipASPk6kURih5S6NdJjamTVdTaqn9DZftfw9iamna",
  "key13": "4HDY3a8SPNFwE23T7jEERsVBE4TsF94ADJYj4cfyDvdjxpvL9XvVXTrfQGst2vhYMFyLQZQE6KRM55NqVLajNaWY",
  "key14": "9bPnuFHCNf3yVweUZBVZxeS8Cxqw1LkoJL13Z7ykcshU7ndv25QnShb1dCVTqXC4Zsu3cxdTdbZMUQ3DBKr2EQr",
  "key15": "6tbKLLrW3Zo2AVUKA4X2g4FBP25mRLUECdKrbUXFd5T116X3FNwpdqRVELZksscBYi6uLUuPcyqipdg3mCKsoF5",
  "key16": "27b9sWbjGwdykzm7gJsCSTc8SQNpzW2r5WUCZLf5VitumXrwFX8KxKzg2EiE7UgwxeMfxoTiJuswbjxmdxSm5TYj",
  "key17": "5U9fCtqTE3gCjda9AkgF2Yy4GLxy14vq4LjX3wkFyERZZHF6vxKLr6N6RKvQSip5kKaBRciTiZ9JHdjsHPSBFZPq",
  "key18": "58nABvKTTuNPuzAhAwYacCyRXwq18VMBghBb37gWMnHoNmHJjJT9wb6ndZwCannQkN3VXJZRjj6SPjo1U9GtAz9Q",
  "key19": "2JWL4eDA4baiTK8Lrr3bwYF4t14MhvMUNvDRAjmfFSzjAks7iThRRNDtpwwebpRv7AeX7niCg7EkRykqww9d2YGS",
  "key20": "PQXdReb2KL6tH9quBWMjYV5gcS1Dkju76593bYf5N2PNQwXQcg99ppSBEJLK2urC8mtSfpkEDRBKKVPbqJWph2P",
  "key21": "3deDciNbXCfWA6AzrR8GKcAx8V3mTaA4iCTTezSoDxGWshxEp9iZndxERsDmJHmxWwxZYjkiTvQcKiEJDs7mNEEf",
  "key22": "3FdrE5AabdrQvmup6YcYmFAaWPZD8pTwQquXTNZ2z2io6pt2GPDwqo2f6R78kBFkfwdhX1rwymtH7QHmfAbn5vJL",
  "key23": "KHGdXBxL3XeEAxNEAU2KFhk3uVhYvAHcJKpCBjo7qo8yXZBnJidnNdtrLgsbNpSQwgNCq8fA5JmRnG5j6nticB6",
  "key24": "4NdtjMDimboEMorHCLzMwfdMf2gBkzc61umrhPbAUb1yZXqjCBBcqWJz8kSuS9SvewXovZkgZtMtYWQGwHZijTuH",
  "key25": "36gMsiuCaaDKUyrdxYg6gcYNt7DmcynGiiPS1DMU2uLNXfN5jFbf17g1f1X8eqoqcRrvg1Dy36DKxf8kML9rNiah",
  "key26": "2RJtGQ7y5AqRJge1tMFERWiPyKS5kjdgEgwf86ctK8M1uBg7TFv1WuHTxACsUage76BaRa7iozt2xBytEv2BSon",
  "key27": "31WU83zaSBL7ZKmRAapxS5NRmoMq6fcuQCq6dRGtVfLxbmdQVjdbskBcrgzSvNXCywCNbVUnNSySHKKJAGrKj6PC",
  "key28": "5nYW2gXPEtzHhPki84YAbJNBLYwh3iPuvUgchTSTfuXt44S7G2TJadGNpMu7r1RURZy7MakAZ7SccNgQmteovhTy",
  "key29": "55biU7Bk4AXytDnunRhf9CW2RdFF8Wy7vq48Ax76xQhpY5LM3vBDij3LsFMayAyP2fcW4is6jx3UbqWHqim8vjfd",
  "key30": "n2NB9UKw465EKTgFPRjFBm34TWYdbsg9jF9rmiH4CeBevbDmt4gAkUQJaLvSDNzsAcJoBE55w7yjkahUcK6KEDd",
  "key31": "R3kQkzfwAw4hzN3rw8JJ5H7Fwje41UiT5YEZSp1cVNuwZK6caguKKmCbijM1HcEK8gJ7YiSWwhLXnnW77h2nhS4",
  "key32": "4RHP9WYNjbiihy5NByDpjjh3Wi3e2Cp6qFgdfHZpfASF1NA6bCq8XxnvpncYmHnNpWhrrGGD6Z7LtcGGcxLxZ5Fq",
  "key33": "4Koc27SKkR1tJhchwUTkWMkix4tmtnAew7fdLCAsAHLkBG7KGnsMLFJgckdv4RWJaLErMcmfm9LdrXrHYe6SqZyb",
  "key34": "3i28PvTdi7fHAWbXubYQiw3wFFmREfyw3a22ioGY8yPsVWSGQDJYi6kurcRFxrbwHtLHVY2WuTh1xKpCNQNFy7ZF",
  "key35": "3TRgawxSGkyMSsnn9f7nUtshUfpvJZ7u5241Y5bUtY3ahysUgDmkBvzJidxRv3h9aM96ZntTq72wnTnQW5H6HaHy",
  "key36": "3d8b5frUeCSxcpqeFCaTWCg8aBu7jLhuTiQTAjUPxWma5Za4NbFoG3LZqbHKuLeuTWEGwPxaCGuqa5xy66JicnB7"
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
