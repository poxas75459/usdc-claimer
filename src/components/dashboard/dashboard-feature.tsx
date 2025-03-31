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
    "5MxGREUz1zmjLohT3XJr7wCSkJL44iwtbTUD2hSdRZqcfWzWfsnS6ccDmctQzNRL2FMW64MWVxJXE8G63PyJryDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47A9zgGZA94BCujKQGU2jAR1XBP2vmVdk8m3y7Fa6piQ5rBzK8sEWVjVoiBw3UV7AAVp2e9VKM7x1ge8TDNbmzpz",
  "key1": "3B37wcbiJw6umywmrY3jQ9gAegsDacR3g99NbLczBYXB6aHBuaq6oo2mof5or4fS2EXYAp3duCNsaFDa8FGgxyvX",
  "key2": "63Yw5bfPHQmTHmdbeakt4V6t11RMPSNTMQFNe8YcLcF1W5LWqtH425tQPv4mdfM8712U4PZv89T2P7WiPAqqWBv7",
  "key3": "5qpCCKs6Y5evA56Q746YPiJG1XGM1LUdCPuioERSPNEkuCzuCUeNcC6Nv4Y4oeYto5t2EPhM7sVVhqNNweDov1KV",
  "key4": "4AJhxaJb6Ci3SyaJk81dfkAaBFqaduLDSX6sBR9QFLKJuTecveRvQtzskRnUsXUpGu4VdWAvLc4DR3Ac16UrcAd7",
  "key5": "2Ra9kSmeQSPRxwmU8BhJXpRdx5gEbXToEQzNKaTTpjJ3vMNUMcH7N54Z78Qt4GCgUFE38mahdDQ6XVwj2UubdA5U",
  "key6": "2N6XjXG8ga4h9ZRfNtwENjWtg41nrRkGetMzq7pwc7ww1oQg3HpFKpb8GM33SFSTUmjTRaoLKUdcjHdThA5S6zsH",
  "key7": "2i2GqVLF9yoADYqqDWEZyAEsG8cpqsiqyztismMdU2kSfH898ayKPZbLtS1M5GMkxiVo7YyuFHrrUA2uKcyeXwP3",
  "key8": "4vpNAQkFHbMfFbe4mEzhzTpMc6BKv6Y1JZEnULxeNNbYRuigdcotuzPDcyDxwoz5eefVcpCP7To5R9tKHMUYc4H1",
  "key9": "4HEYB61Tz8N8KCRFNo3TF7eWAQN7TZRyN3guuB9brGh7mkuFSqkxx51tAP6tDoS8PZq5eFFibrsveo83GbibDvVW",
  "key10": "5NjFqjjbZMA181RteweybqTE4CjghptcbARDpFezEeLTmHdNH6MA1sqjYLgVWhiNZFoJSd1g95ivxGfT8oEcW4bC",
  "key11": "Kx66MyY3Ytb24K3SApHUj9BDe2oFZdqoiM7GctB1YUtxo2i6xLFPGV3ThhMWN8K8czUBj3QwGX83r1VHxz3wj3s",
  "key12": "54qG6qJNB2pmaqQqb24yT9JPrcRU4W7xcQocqz2zMgjopWSbUiQfNJV5uZJZKnjwnHDhyJ8Sj5URZ33fTY2YGGf2",
  "key13": "FJmnBKjTzSqUzPh1YYTXoPtDVASFvskMrykrk7vRjbsfBYvF26TVe9Vh6UxnhRoGpxyzjBoyUQWzdKeiCqnBQDR",
  "key14": "3RYHZWRifbzJH3N7xnDZ1hrmf911hfwxH2cjqopB2RjsyPzUa9EXQRq1RTqPyqmBWjXVsT3M8b8cCdwMoGzdQXoY",
  "key15": "2TifG8XZWHJA2nGy7icXPgR4uoGWLd7WJiWc8w8jSgVVuBjF9yKvD3nbQMb5dAboHdCf8fzUt2jQBYn8knneEeHZ",
  "key16": "3WT5i1jspDHPs2RUxpQ37hSquDS8XX8RDr4vH5WkqrUyWLfBUvZzJwDkJgdG9tTFsQXfubsvCVLESyTeZb5jPqSb",
  "key17": "2spWmn23y2rWVMjbxBEaEe4Wm4sWnqZQR4bghT5QEq4eDQKGbvjHYrDFUbzrVun2JqTbebqUL6MTpuLsd8UCcTjL",
  "key18": "65yMgG2u2GE7AdJPJzceDX8Hu2K56Ez4eLu5SiHVMt1WcphrLWmFup12SB5WgEjAy1hGKEKQRi64gxU2breLgQ7R",
  "key19": "5svAb7mDBY1Bbwd3vfxScj3xeWWTmBhJQfSN1wVbUQW3SVAHSJpe9QpEZYuSuKeG23iMAGn93AsCqtJUfmMxiDZD",
  "key20": "5S7hR5ZGM7YhCmRkKzmzGo269k2LzpDpzbkLV8B8Eb21yqt6yRkfRRZFLHu7ytnGzZum8F8uzw1otbvB7LZjAhFC",
  "key21": "2r47QNQQ9yZkiD2wwSVLnZDEBQg1oohMdRAqUzPowQccgwGkN3XTE4EMB15bmsk6GN48Zt7Z9cpE2h3mRK4CCS5V",
  "key22": "3UJ2A8h9QDJfBXTSZoMUSE84LFKyDuZd6gbT4ceVFq29ahX5J37LqsN5sN5tQ225PdfQtVmvqnpoHjyX9jHsQKmu",
  "key23": "dgLgRwdELYFRktmEXGgJWRD3JKmzyEYzHAy2z4jHmYDJS2o5SERkY64xWtpsHsmX3FMnzxhqHRv11UuNuFK6Xs2",
  "key24": "3LhDdczPeePqdPPqoJGnyYsQkBV1WoiaUbhjpHok9XLckeipuNurewNT8Ki7Nwg9FinYVF278BScAxMJFoDhFQ9n",
  "key25": "2CxojPHB9b3LtExozVHD7zxveLE6vUAwrze2tKK34pvrgxmQxoBdBvAvr9yBUsZDKwr9bWbEXQZhf7ZHGrybtERd",
  "key26": "2EJBTVu5uwBrQ75UbSFSEuCaNTc4rt6dNra7fFNPvrRCPpCDDYPArzpu2WFWWnLbzPMPSou3BK4EQrh49RkhLYSd",
  "key27": "3vK3d9ZWedERF2NLZcty6wEQtBc1MkHNZXTwWYjLh74D18nVCcdqc7nY6HCDWbr3EBtumaeMymo6BbXxHQGiBuu9",
  "key28": "24a3CFQv554VN4Wq3R3F3W86fJVT83M8LUh64whRqGrEtZF2C6cTPtvDqvKq63Y6Zb4Eu6aJQH3yFqbXHSCQm4gE",
  "key29": "XvnGpdg6JzwQwmfEXAhd5LyDK9WtLuGNybALBJN7Ba7sm1j78GCSqG3RhypAVrJjopYM5ibGeoQM6NfVSdwambb",
  "key30": "1jHALnmN8x9FC4W1rjB3SuKSQoKexehRXCDpgQCYmQWMeVUr9k4BhKfLg3VYXUD98vDDTKLLXDtNQNJurpmdUsu",
  "key31": "59VTe3qiT1vfw1oSrc74KFoBzDJiSVqQoMMdWnnYJT3bv3kyd6wVTetRGcxjUzTYZ8DeVVbDeiYzcr8rt62zWPx",
  "key32": "5vTrWxaW7ynWUHEWYWDsRVKus6VqwbMRcx92AMZgVuSjXirhVqHyfLtqmAooRmV4tMMsHKnqWcfqLn93TcpvZcZE",
  "key33": "3jA5SiPgSHQYNCcyYJyjxKEbsfsHwfsaFiQP1rQ57afyHdQyR5kVX5k3WYEWvikXGixLnVqFdTRboRGS27gtWRhV",
  "key34": "4egz4Gcdk7R1Y2LtebbXaFUhdb8A6goXTMrdspFi4gRZX8Qoyb7bTVgMcvSk5YitbB5HVTroMMF4uP5YBzFF8KeZ",
  "key35": "2c4768eVXkacRqGWJ2X4kUpxvcfhSm8pkuSwH1TiS2xV7Ugu1KEtcnSMDceb68M3ZCrJyDEZxqjN6q7ZSggDP4M1",
  "key36": "2usVcJT76jPNko9bMiZ8Wi4dqB1VcnSRANkZnx4iLeRaT2u7aDjnhMRwQFbzDBjvxt8rNgqYH6sk8Ty16xeUkeo",
  "key37": "4d9RScCeX31MLDYKVEEREuYjZqVLNDB9eY34LSLVgJWwYDBA2FufQ74zRJAqtRAvMyvR6DqCzeBuXtEan9manbMq",
  "key38": "32NuCm4emx2TNi66iQAsSezkXpETui5pwL1otKUCVpkCGaTQjxvEK2ZYyY3JbgMoNpUoKxTUu3SHgHQN9V3weKVA",
  "key39": "5t6FxZNqMvWN2yXrfcsUgdCaAvubCRHRv9w3sABJ2DmP5JcDcHU8ktrF1FB6KZF94ioRfrF4Nh6f8cJwKsst2hNr"
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
