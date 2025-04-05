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
    "2HouFe1WCt8E1dv5aGUJuGBaaeS6prMEtwFa3vytAwmzmmsRXtorAMRFm4pphtME2XLx6AgT9wq6rkYycsPV3qbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HcAkDHvg2RQRWQ547vtviwccrYQKLJKbupyaH12oh1xmtMBDfmdLkcbxexVeMpVSNG2q644fHjS73xe9r8kPxY",
  "key1": "5T3D96ASFxeZBwqxmfRnjRRaRYANtk9qFWfH2tUYQAkRMShYLiQwAuzycx4wwVJpQMkZtwHetbb7dzSsvzg9767Q",
  "key2": "2w52PpXbwBQnse6TZhkK9LDXm2jSrSwVUqXSDwaabzt3WGPUWnjX5qGDBPzDWsSeD4dZsmB11LVaDzMjApF792q6",
  "key3": "2kJ7kMBnMPUzYNjxtQPGSkKsnGJAH9UPix4i2z9fQtFDjtPMFULP1DK4SoqXfWCVcQmvhsQuUn9mGT66wLNqMCL",
  "key4": "4cjmXAsnyvkSXvDaP7tjCmUKA2CYj9tHn1CuBS5THEpFWCzS2P86vBB8Z5pLretkFwPaghukqPTumie5KT5PejVR",
  "key5": "3waJkbZ3cymX8FhtyoQwXKd9dRCzAh5fjMGcCeq1y5waBTPBDvykmYcbyeoPdiAfjCRjHHTrGudALjVSWShuP7d5",
  "key6": "4pGp5gTyqcdGa2CkgBToVosVY7CvaySN7pwQPgaUyhqY4RFZcM83nUkTFojWb7wTPH8UUryRzsqKpbKdRsQeiX63",
  "key7": "5xiQ7C4177TNbdoGSpVvTWzB7oAQ4gvhzgfQrdGfyV9bEDwJLpNHRAWKgJH9as7Wckbfk9oS89bfcdeAjQ8ztCak",
  "key8": "4zD629RdDrroBtPGWswgrRi7TeyJjXGZMHyf5dV8cN74bCKA34TM6FyNf24crdLYBrV4SjNYWXwMbS8iVNd1ECia",
  "key9": "2ULTv7QCPTPSDPxoFoTJ7bNMVv7MxGMdFnW62bCDqAp5jp3wu4d5QF5yKwjymAGpaHG5JkNra2NjyDoYXWwW545d",
  "key10": "28UPx6W1ngS7YK887wJB9sShr6RPpDMGnLosN95gtuV9jKVnbawna6kZQeVWRV9H8kWzRznM2grUhz3UfCVfAhmH",
  "key11": "4LJVMnEkjskcCYC3zqZwdT2E1DXE8vFhms4cRr8GeUPMerGmLNmVWj1bGaEFicZcTbEZsHzJyLnawEHBuRAAcZip",
  "key12": "2E4QXSD4o1oemdeQ8xAb61DjPiMX1YRMfTw4G4yX6RK6ZnxU4MGCZ1BEmeShkT1ceGMVmkumJPrb9GLJ6TBrQ8jp",
  "key13": "4DqWw22DDqr9y7mNhKBgJ2jN2AmmMM7Fzef7k22VBgGKtHawSPpVv6skM7kVW6x4JLnf891eyoPSxtx4EFDKZLyu",
  "key14": "wf8Bq7LYmXhgH6uCYwpAJd6WdV6naiYJdLgkCAuTfRwGeEhBHvtTuCATXGtg1ZYLqdQRAUW9gV3X9N8DBa7N6m6",
  "key15": "3Vd4xedMXGLstarUTxboHX5ZXyPQpnXA4tu1TcS6k4nEd1QdXDVqJ6hio1ofQH9eAfjU2iiX7zZ3uPWXuEuVCwzs",
  "key16": "3CrZMsdDRhJMKgsf7t9WjcbSmKBpyGYqfGABsTfnS5Eg5H1two6CXAmLogjYtnCDnFeGquv6f8SpagpxkzzvxjXr",
  "key17": "XXkiHxKDfuJ8sSdsBnronF3mya4jKGB5bMRfmBvfihwvhBwnvFqdUuo1RhVqgbhAvLxBXeS3syjK9er3fouhgAd",
  "key18": "3vRrQQyLEGYZEGAGSLsL4sVQdFCPwZunqpwQd2eh2BierN3mG5dVMhbJEgwgFE3uBmu5zPK83eTFFZ47xA3EGvdJ",
  "key19": "pgnMozyBqHRUCBhurJcpAtUVNEQLdx7oaT1FvaiPd8VW5yb6sG7fLE9phPr3zxt8uJHiUyXZGYggm2ztKtXAAqw",
  "key20": "4eftisvX2A5NgUqyzqeu9n4cNmu7MkoxWMLKyU13onxuQ66gKKpL5kiNVaJf6dEGc25z3JbvxT74XTTfF8TnviXX",
  "key21": "2p3sJX2M2b4vM7czmBgEnoqaXoVquPvE5KkT3dQ78FMsxVJueZ3CP2uUdNw2F1T5VnydBn4dCBVZwiQgLCRoFokZ",
  "key22": "ECudzBCR8Q2o3KikAGaTdenzgLCLgbjsNGEvzTZoyAgz48pcxZYiwn5vckdwEriTS7u3fGuQB5FcGG13VXoS4Ee",
  "key23": "3hsWptcAg9L2Yu4ijCcfkwqrmffKdcssQLWwCKMPWGwHUZcj776VSD4MVY7rZJ2gCp2bxregk1TGKX7tvuXuWDkM",
  "key24": "5ynFDjv9w6UtD5xRdNkiPukhg6UCdKkfzwywc3k8vpvJTmzzhruQAhaL6nX7uL4TGyVEmDzicQF7jQPv5152NqpH",
  "key25": "2kviMTYiqMD11gN4TQYmXKuAcKiLKguHtCUu4ngNNL687AdDp4u1mZ39wTCKQk8EtCxxcE5wqXhHPW1Yf1N56YYY",
  "key26": "3y9THqwuaD9prySAJayzTtba7j2caF1RSVCU84uun95rFYXzhogE7KsqRVnYJJ5akStkJTeK7qdfhta2VwN1n3vS",
  "key27": "5ddxHUKzC5R78bg92isfNBEKKn3d5zfBs9L7opudEZPvW8zYDHa9dvpYriFYK4sgBZ6QUoAhWdS4NjgKbNzTTmta",
  "key28": "51vYvGdvgpVZmi361JehE9xkts1C8DBdctm2t76qB69bSkDiwJgfE7wNcfRwEVeRNX1EfpjNfeCatMQrVGu6qbGD",
  "key29": "55n3nq5GowaizxWCXK8nm6mZaDgC1pz9pqGasMeTsxhGKo4g1U1k9G5zqXNUD1k2LbP48d83i6Qc4HqB4KryJTMX",
  "key30": "j1rkX73iibCiKtLPPBZTrGRnKxnsgcHPTgiCpkzTYcZtPkBM4jVPghgwN1Hh7Toc6VkdFLSc6uG9W1hYPZMCEiB",
  "key31": "aTLzHHsDSSs7zaCnYzuAAMd2yxhzmKgA4GvVffNfRxEPnt5nbmyg1d6oD7XHknV9UJWfGoNjZvZcLMJVpq4DKMA",
  "key32": "36jbmLbNzuewisV4Z7n35pKvDkZFKV5kNE3m4AfMZVewJwTdkNLXxkkfdB6ccS9TEB2GKnZAbw5BPwj62a58XH33",
  "key33": "2DxDJB1ejhfzAyskS9o6A7ZG8jmBpDoAULWb7827VN3dRuFYusAvWbq4spCec6gP1fraSWdUVnYRnUz6GFqAvvi2",
  "key34": "5Bd8qUCWP4b7NkKJPTr6TtYZPf4ecJ8Egv3vybR8iVNN5mi2uXBa8SbL6pN9DE3pGKtQtjPctJzmm2fMJPumNGWA",
  "key35": "5AYGE1YgY9JnnxLGSunvNASZFnYY38ruRJvRuufBqTQEYLsL7zushCwbkb6w765VwjVC9PebDeKP9rnFPH1QNbGW",
  "key36": "31tJbhKFdF8c62haprCnKg5WWzPR9GsnbQKvh9358Qkkuh4KUGNUnmSoEwMdroDHC9CbQPXaz5H1P4ob2iQNMb9Q",
  "key37": "5ypESKUTHbSEBkf9mvsbp3EpBs9J94KbRajo4yuHqYWLf3q4BjT5jdU19TXz3ug6mQDHyB9ZBpoJ4CxqVuKDmv9r",
  "key38": "TxRZgx1GPrip4bW87hktvC656qzQL8Ri5hrsDjbPdBDmxb8SAb1KEGNqTWAvAvBYcMu3xFUZWqFMW13L3q1gz6G",
  "key39": "2PWX6tfebQwByiKuJSEkggBRVmgF9GStoBP67EN616MPPD2p4HN7PEZ5rPqGSrFcbtAj1XQCoVqx5XmbehzV1gGF",
  "key40": "58P6eiedLCoZGDHx1jRCT6HpB6PGz3FmYFwmBVdXFVydzjptWZjgtTRTQLgDeQcWLyAXPYzFMPVdRrPfqznCm28d",
  "key41": "2M26eD3mmPGc2cmfw8Z93sSt8Eyq2gZm5urjvtRZNcwUbjexepz1ub1TkVjCA9APcT5mR91b3ppPF97gykT5cfRj",
  "key42": "3KB3yy5QB3nZaq39DSAfVaoaRKTs1LkwuDopAWG6LrituaMK1c6ERDwXaBVAhTeYNdW2VGGhQUF4JdmhCjHUamzX",
  "key43": "4Chm1A3Y324vi4TZ6FmX4LRQ95ZVivXEH86qYhNMh5oHCjdhuSoNegQ5WxQo27xMdq2hZzzF6n381fN6VGMWcXPn",
  "key44": "6788ane5aomwdW1ZmVCRAp93hoJBJPj2oVXPREV6LfSH4yP77qJQUgMBHJAib7aqQqz73f1fyCdGz73mouGSX6zr",
  "key45": "21uwGKLPGWMvdquSkLWG48YJ4caYTX2an5gHQMjmMSvAscHh4iVkj2yAUHr8Dfb5B7J3vdSgRChB1bTFi5ZP6zJx",
  "key46": "4XkAQiX2YoTnQYFU8XNc8FH9PJ8iioMae7jBem5uqbD88jbuVGHAAqAQMihbkPYY2oWcoVw5StHFJU1vB4KEH7iC",
  "key47": "3yjerTxSZAcezBX7dKrEQK3CEkghC1JqCx6w6aSJG1GFYqYHCfyx2DxxRXeMwKL5JbUw6W6WSyjUuUyQp5oRGx47",
  "key48": "pE3Vt9prgRMJJ7MWGTtMih9UnFKVCYRchUwVFWxxEERTgSqXsT5H46Uu8hCcC63mGpeBo7Qrv2Ti7jGRUbH658e"
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
