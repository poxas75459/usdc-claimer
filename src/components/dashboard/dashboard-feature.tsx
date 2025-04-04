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
    "2J1MovzHEb5Hx34cuB2q2gCQuCvZyNHbSxWSFiJsi8xNf8REGgaz6wzr8FMPgNX3KgVASzGEWqMd3gA8DX97vGGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5C7W4d1fiKVZhM48prPaiB8rQVmwtkkJVkA9hQ1LfuFEWRYxotqp7r6fgCQfxCcuc2YgTcu5WwBtkaFQLiFWQu",
  "key1": "1pyXSEKBqcwTQzr1ixBkjpkA3uEtLFcG8jHpAMxn1MXbyPaWy5h231XAJmMzT35v5ZyeB9UxqcFcZ5D57ugDjo2",
  "key2": "8QhA18hHJMA1yz7oEBNn773XgZAW9CwzXptr96H9hJbn9wC5B5dWyGGK9VRHbRaS31FugLRYxybhabAeNjcqUEs",
  "key3": "4E8GLhWTovwMQgBg3MqW4hWquFZRC6JXoccNuLf1Cb1d35PJBEBe2jT76PibVf9QaSNuoE7tjZC23tNkvWX2tj11",
  "key4": "1x8UFWi6QimxtKtpZWWsjd8Jc1dnsYjrEQXgSaWhufhwCSGAcRpygyJGrftR1L6ZwGcb5oUAAcUvnZkU21NH8rG",
  "key5": "5MebWpJbxpuWQWbqxRHg6rVxh37euJgvLrwJtX4af9aYpM1sydLCaebF7kF9cXQDEAvRc5eshJbGjwqiFtYdvsP2",
  "key6": "5DUKj5TKN6aoGH5beivqkBZENDyfcT9P2dx4Fq9wVHHPoEfJo5b5UcxoagBQi2BH1cu7xpp1k88KU73R7iPvc12f",
  "key7": "2Vvnmx7SMQVA7Hb8VnYLwPpPhFBJkNioTqkXo5Lu8Rdhfg8Qeje3Tg51iA9vPX1Xk99RWAmFdLou63w1oqo7c9Zv",
  "key8": "5Hk61hjQovLuhAGawTsps2stecT284muDmbQ1LXHEEGkkmSskcPtSCgMsgav4GwpFZe4oh9d2PU5uaSJAFgzoYbb",
  "key9": "5PdKih3hENXF9HH2Tgq7kJCnbEpBdVDEvFdUnzStFcuSp4riWbTd54FoWSYZZ6EmbYDoqYQPMFMygnycryyJCXU1",
  "key10": "5Vev1M2nWfem4PpZttSUDLMDCbnY5yLcAqoFQSZ2z9Mq2nBTVJNVhNrL8wDjUVUeLNprtBxzgdaxVDNGrJvrJS8",
  "key11": "4CgDSrttVPaY5WQ4Ri8fnnG3y6aVWVEXj5V4ZNoEd3rk1QHqjks4x91sFEsML1v2RFTTkHpos3Ctrn9KQr8wqaxj",
  "key12": "5DHNVbjCqrr5tq2Z8ZyAV4gZubwWXhoaNq7J1CCriuM33EBMEeAvvJ3sqPnuszK6w8CWm9oD5EZVUCjTaRsSFQFo",
  "key13": "2yNFxNJVVAhp1f1iRB6jTxGxcApiVH1TjwcgqJrSxKFgjr1eq1hT6GwjPCWbLdfjB89Kqxf4dkHcPEEz9AmSEoYn",
  "key14": "g6kCmaeWzsz3mwRQ5d7HKBNgT9YtKo6W5WHeU5JKwXiDfZQepudN1JTfubfyBAYfGCXdbz8fqnWugZPVqWg9D2t",
  "key15": "36CC2e7tkd1bA7H8LL5FnKCHM8DVZeyZXVzCymcPDvDqLtXiM5eNGpeQNEGjVHe9GZNpdno5BdwBkGhbWPtVsLmM",
  "key16": "3PwHuND4ppFwdRDgVCCRLRPDS72GbFttoftrsxRwrJ4bd7yTE5tpwdoUpspLbpLdWpbSV5Mni9Dr6DT49s6xFvDc",
  "key17": "3zksGioSLSXgn7eFRFhZvdu9qF6SBtSpxGH9R95VwfYoMM1wTXZYjeb3n5BcXTSmbEwYVMefNVhsqMwGCjdeyXZH",
  "key18": "4QCyTM1PmDmapLT3QVJnZsP9TiApEYWH8nW7yhJE85KUJ5YYTDbpZrurGRCQRhp5ud9rgDHe7SdJHgxD6TeDj8Lx",
  "key19": "4HaGJigfKqSRURCiYtiUZEGgnoDR83QKDzzHkHs6jTk1szDwHE5tQ46hmyxYymMViZ75gkedWHBgZXY3PF2ezBUM",
  "key20": "4qjVf7W24sFKeA6mAKumyGjfVjXNoUWq4vqErF4jiT6nYNdA5b2JQbJdUYtiXJEXt5UFrSny9cFeNeUHh2yTtYLQ",
  "key21": "GxGjnAqt22YSgw5H8uyYooZTJJ96kzTTiUmXzULuginQBLQqEVm157dzctj3Vw1ddMhjNMjemyWRFcv2Ge8RGh6",
  "key22": "5m5U45oxj2Cu6L9oMFwn8SvfE2piB1MQe984D7NTmEgHRAPLM3GN4CN97px1zEjbyHmUviKBu7ScFbygvRABpto7",
  "key23": "2dsEetzcRSvzajMN2MRorjvQenWaCHEuUjXUouEm94TYDiGcaYhCMVUWAH5dokLib1Lwbzza24VMk8a8UNUQ6SQQ",
  "key24": "4dFVnmiorg8QxZ6L86DVTbxjktDGByxyHQ41QqfXgcMz9pGX3FbqJwQuS9yn1uXQLhoKVJVaoaYxxc5nB1Fnzcvs",
  "key25": "3pYp1Zq39B39Yoq7Ut13HiBfNpMYwSHbKq95c4AWJbvZcEpGaZJP9TNmSkTuEbNwK5MdtQqTUtbiaUy8txXQgiEJ"
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
