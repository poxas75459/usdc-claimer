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
    "VsXvFg3mmYNSzJD5VSfvHVfRbqynSVBvVsuo9S7FXo4MycyMyjMvwA57oDM14CCnF34DouQFTNUDwh3HYm6tWH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTY5X7NvuxVSWw7vrovUjBfgTzbczTyjxwnfMdzjse581pjGCs5x2P54gNwqiCgLHrxiLQ7PwHMrxafTGZfDm8v",
  "key1": "24jiMDf6jEnh2hoUWBnF2dLSBFRVWNDPJyXBEe7sEAh3q6yBffFU9zVpPAAWAUSYXhQKpD9AYuGeoafjDrGMsmd4",
  "key2": "2oWwpvCpceQh8tJkut8TjH4PWZsqjiP1QNQq4nUpyx3gDhjKjQhRhhk6GtAvAAPNtgrh1svjnDZxY4CN1AuHCVBv",
  "key3": "5J53eBxaMDornUQiishDzKUjEjqdAf2a7uUgzUwZpkrsd6ywBJLBABkyofWLqA3YrXq6qRxQoK6JYyau5nL82UM9",
  "key4": "66BcRcF1HShXXuSEuRmWiyc53jh4v4zU7e9Vhj7DaZVWo8ed373YeeER5zwBCXWm5E3xhcwabLdJVBLgxqoBUL6M",
  "key5": "5MVb64XxbPMoA1EmDww2pgabBozsGC7reUBpSDkhgJZzpeLNzgyrqE8jnCVgtktkYSfqpw6MDnwNn8jdjFwEyFdh",
  "key6": "46Cvwi6oE1o4qKXKbJ1hW1Uy5vagCcxR1VxJg2hksT6ixzZ4Xe7wx686bi4oHp9n1qAp4a8yT63m7nhAbc5VzcTy",
  "key7": "2DmMpWe1rvkDM8cGM2pNuDTZeTsVUyhwpTHEGtaEKTS2HBzsjsd7yHi6LaKq6TonkZ1cfDNvutFBY8aB8fAvyne6",
  "key8": "63h3JueoAN9XRgMRqcuMVqWsQEY3csPjE7hnZ5XeKVk1Xozufv5nR3SgHJZZvmG339DnkSVvHTT3FdtLFL8EGhgD",
  "key9": "MGqGBU3m6vYoUgS3jvgrnvChUTq6ihCWMD13rAvqzvQfjr6Mh8GuihBKsaskiB1taedf2N1yTNLLSbWpuDx2jQs",
  "key10": "4fBx4VjftjKvZmJvF24D6647RYy7FMVWyMTevnbH3Whd21KXEsQnrkPEMpza6mqfcpGTb7wRUYM1pKu8N92cSNKo",
  "key11": "4JtdcSpQYkJiu9YtemfDhahjf3hSXzCRVdXxkpLsUqWftBVVpNhar2ZZcywN1iRcVxnwDaJG2fhkxgGM8emw22Mt",
  "key12": "65P54kUN3BVMt11xDb75B8bq16G3JeAnSaqyHsnw1VnGG3snryET15TJz3u896Xeam3eM9qyw9eZ1tauJfVcoEjh",
  "key13": "3EaEqp7yPjKuH6JPbj48eWfegQUTbEnXsMVphFJUqKyjSu2Yc2nYT4AFvNeXuCG7TNAoxkEytFAB2tNPAzvDLKMb",
  "key14": "4qfkpzxCsMsiU4cB9XMnuZgcChXvunsiDJVt8tM83NShuB3kYaxtaczoKbMQb5kBQcHjhUd5y3n6UFahD8zGoxSp",
  "key15": "4XPhMWfRjhPNGD1JsBDbKSNy8uRpn62tVkbR8WfeHgUnFiB5Hkw8pX6WgNq3NLHrh3rS1RzN2hEvgEVmCMz3qfoL",
  "key16": "5ep8C7wGPfwKFKUXdKKb9g2c8ne7ACD3RC77MuZqkyZwvPQBPE8uWBGRhUDPLQvD1nJtY9koRcdktbQEasZduTsn",
  "key17": "2xJW6vgqPWGREzV1TrYm6chCRhESsQWLPjVwKELEVPN1XrjTfzeN9vwBCLhRqB3cJWCULvrWvzjwZfi7S4btt36X",
  "key18": "3z73pHpDbhFCdAifGu2VwD8jUxaBbAN8HX3TLwp1284YTnZ9Zdkz3eCB6Lp5mr5jeGMWMPQs8885dJKeaUmwjcTN",
  "key19": "57WRjMPXkrQAs3Vbk5PrB73jkYYbsg1sEEPX2mmFnDUSKv1LPwEQjqdFkjxyKpsGkgi4qJfCVg8NhBaxtmHSrt35",
  "key20": "LHVBYQ3hfedQSXKQJV1gr2XEu9r6DfRmkn9xwQUMjma9uuVweV5fjtkDG4274bwDfhZLL9NG9ES85XiqPcnqLup",
  "key21": "oRaMWFCx8NzbToqXRNWaD36Msit9hGFD9TQvZGA1jqk4oyZgBBEkgJvHMgLzNB4Yups8z9PVnwT7VFieuumiXcg",
  "key22": "5VommDBueAxoTYZw2wPRKoVn6w5s6NFb55DbauQVUZTsfssEZEQPne5RJanSbijPHEd8AG5nn9PR1q6nNwBi7PHP",
  "key23": "UCdVKzbpop9k4zsaQR7ync4xxmMvCxrpfeMWGADdZwGZY7fp1awezczf9zD2cuPGBxvSKXbtjPize3zc491nUQT",
  "key24": "4JDtZ14wRQghAML2nYKbPJUWjnZFwkT8tHpn8gBVYP35pEVTqDuGAsqJT3892KqMvaCNoikKLNeB7Ya2hHa4NBY7",
  "key25": "2ZMJJSDbvDigxQsVJRhKgF4yiajDucKdafEzntPndnNkuZGnYndBZQ9dZgXUEs1ZW2KPYJrzDHoDP7gui3JZ79y4",
  "key26": "3Y8Km22vcnfoi5hAjiopiAMUTmuBPGpBneJ3yB4Yti66NQ2fgaBEgvoi6zWFgMDDv5zf6FCJG5VoBXknST3HfQFA",
  "key27": "43nviNZy43qkToetZLFQtcFyFknNE9Hqwr75xjRLFccnFHUmJzieZfpPA8Z5gfyzRPzijeY2PV12xLjwBsa2NtTG",
  "key28": "3DjPBUscvBobyLm3nUdvinZugvEUk898xs4Qpqp164CWyJwtDnJa9q3uKqLNmEe11z1KNZjtK5oAF18YpvgdL1uq",
  "key29": "2GSNfj8GWwfMvUUtsSZV8xCtTD4CcX7bhrWLrdRiCQricLo8V7EJWkJ99FgpbbLDUGMucPxp3LidPkGckeKPtBbL",
  "key30": "2Cvqp1Qt56fokXnra1RgdJjEeAuhTBMpmBgySPdhPnq6Z9PYjad8MHsLNHXwq7kT1WZBHaMJzWkC3YzjL2UTggKp",
  "key31": "3Zfa2VBXVGS8JNB677YqiLvVGstUJnoabXRMQZ49r7Xgayc9yD397jPfVUNjGh2VKhhCAqVesBu1HFCANQk64qgf",
  "key32": "53q2RvtJyUv6WBhbA92J567kKaJMBJZC2P6gxRCxGMVywks4Yp6zG9qi5xMu6mrrVSqBYGN2nDAN9sJVWVNLcfKc"
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
