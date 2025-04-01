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
    "2TT6o2U18ruiFedKUVZcmouBRJyLk8uFa1rjyJndJrnzhMZyzbwWt6gYHC3MDieHeyrp4a6ekFUHx3GHYRsUWcdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9sGFYBbJXMGjLRu5XHaSeP99ub7jmoCj9pvZvnSKkjBwqV6FTo2JA2AG9zB7jf1Mi2u34JEkv6yK2zd4K21Rj2",
  "key1": "pwDmNNHg5r34QuANrQFbWxawArmCcfpu9WKEg5Xy5jGZbtVkUZA6Z4RaPVXvdNkTkSSBGGiCP7HtJUARaQV8Fjx",
  "key2": "3eXpeqBpebMppXW75VDDGNWRVCfGBsqnG1K2bkUjdcs8XbMvzUJeH6rwaMydc7Svc5kpKaY2r5wB7rVmsgaqarxs",
  "key3": "3RDma8QhpB9TagyunxHKB24BktnsDJzDYjoKbazdpDEdwq2Lb7VmfM1MQCsJnMrSrBme8FUqva3Q7W7UtGfHjeWe",
  "key4": "Pk8tkXvNxXK9nSCQqaN5UzuJz7WaFni66qS3H8R927rcTJQ9AVMnosvTAkdV2k2oEHC2W7oY93rLkCsUQjtzBiQ",
  "key5": "4tk5iHKyQf8HSw7VzhBkuMqoiU8gCCNwk8U9fuHEjDTXJnZVbt4MrwNDYErQgx4QqoeFpCiXzqU1Gp6BXwx1eo61",
  "key6": "weAv47FDVbjJYbEyLkF6bECAKQJWmUF7UoAzJSsDxDU4Eu8hUJNkYjmfTDkHaEr72ArGZdjb49AnMVE6L5jCxQ1",
  "key7": "qTqSKDS3otRUpwhsTXZHdfbFqDAzE3UsRentzXZSqxkMo59ycEVHp85xd5vwNawEJcBnnoR1CmSSHWi58EpVzLM",
  "key8": "5RAvkmtb3K1RoJgDsXKBG2MaqikvRrFw4GzTfzq8TyEpHcXfJvB2ya8AQyG1cT4H1KgqDci98C3yunX37bKtHFhf",
  "key9": "LDTeqxXtVAV8nQ3RVLSPwPiJp39GUJqWN6vwi1CzLihnknc28T9mA2Sm2p4e88i6sP5r8FgG4zb9ytNF3RUN4Ly",
  "key10": "xMRGjeEzUCU1wPK7aCddasZsD8K5fEShMMQg7MC6hzAKAgpGnGMsncsvqBfjLG8gRwbtaVh4nrWKA8hZGhoab4i",
  "key11": "3ras11CKhprK32xeJZWyVqqQQZx8KMG5Lo96Ybnz7UjHtm4PYoVWUZ1XHAbbD3BUwXJx7wQ3tAbG3q5gb8Nw6KDF",
  "key12": "3FjiyzBfMsWV4FqcQS8dijZVk9x9CzK1zfcGqGpNhDXX98UqcvpaH4UnC4C2JttaynhpuYGMvjg6MkG7zqZBzcnq",
  "key13": "2KZRYBhd2vEZei7amuGi8w2vtUwMJRErwmoChKMVaiXM8mxhVBvZRCMhXic54CPZMQ3MZhxQPHCYzPhKWLehvEXj",
  "key14": "5UxhB96evBWiwMKZGTC5EJ6sqH6yxgSLpD85LsF8PuZwXB14iBA6Ut6hKmhfQdDwp1LHejH26Wj7Vm4anwP6fkvj",
  "key15": "37NH69KxA6i2HPPhTkENLr3Kbu3pZ1q3o18oQW3U9AGubsLzbhz9k1Q9EQHAZkLRNtrMNg5u4coDTdxvfMcim8Ud",
  "key16": "66UasvLoCgkpbZ81jZyjHL44JjD7DrJdxk2kWnQG8bZD8zAeiN4KqAk3h7q68Ew6baFj5LLGhpMKT5tGDNgz9CBV",
  "key17": "2VzQPoUQt88MXiB6SU5i7qt8gSW6LaDfC8HPsEdG3BYmjYBFWDFL71MBenFTqSTiLmToHpZ5ExCLaJYi9zSqpP7i",
  "key18": "uk3LuKVPK4pebYxkXu1w7tx4uPfycF1ZyjQBSbQaW2X6UCNLUUnzqrVrCYP4oDjNZjYtkSrmKgS1E6pBjgtVRhJ",
  "key19": "5DtNgNj6n2LqhXMSzhJhZTBCm2UBcY918mpATfLo81HsMNRAcf4en5cA7bTDJZAoQSwfjxjj6f9DWu2rBBxUhT5E",
  "key20": "47VD2FPWi7okgqy6qP7jUmj7E9jYz92xjtErJML4io5eNDC77BBMRNcVz3oFU3f8o1DNHocoLrZEiF9w5rfHXfDp",
  "key21": "3PWCX37a1q7ifx6shetCzVRmurSFEPx7Fuvxd9ZsPjvqZPfdTRdLx4DiWb9Th6364F5SsBZWXL87QpFkpTBKMtV",
  "key22": "12dJUyNiPzfhqM5sy3LDKyx5DTexADXF814od4ABaysJHfzbyS1yG3oAc4qzmvjMT3aetqoFFvGbQ437ohxwyQr",
  "key23": "4zvtcm9RkjfXaoiJUjpGPZRu6uRWL2seFVBJtUFirBFtjGgintc6VgysbYA66KGjpyMD9izZ3yKRZFrJC97L6zCT",
  "key24": "3G2YYpq9UsDgbaDNjwUkeMuCLjzCedjW1Xdp8X7WWayAg8nkyBsnhjvxsQBDLS8rjTkmwqgRo6W2W1W6Au9ThuTc",
  "key25": "2Q67ewV4A128kQxGQcz5CVnoS4cf1BqimnzyuV6cSHxbx8o6grLTCG754hCEec9R5vSxaeRyDzwXGy7jpYBjjgvz",
  "key26": "2czSzJHJBsv4MVFYsQ2ubodgVcm3aboXTfqXf7yCARv4GG1YD2P69ueEMzpxcHuFp9jjrH2RZfYrH4A3AEb9baLZ",
  "key27": "3C3d7ZeTf8PUZ6tHfGhSDFG3CGWGqvCEzz841MsNFQXD3Cidp3o32DsQHTJ8zazVJeM765PPurc8Bx66fLmaXQ9C",
  "key28": "5WQW4T2gBEGdHwR9TyTmhtXAKpB9tKnwnH2CZtGQT14syUzwwvbrjar9qoGq8AqfyzHZ1T9rxGUi9Js8YHWfKdG6",
  "key29": "cHgCTU5gmqWfCnHrbiUFSeNbRZ8nUTvcre1zYcnyu5wMZj74D7no4eNXpg5BdCAUsXQAS1wypNnhjXDHq12DwBb",
  "key30": "4gxjf4GUQYT21UeoNuRWbb6wecjN3SA6KvpPruzEL1cgGoeJ3eGdwtgbS373z8Rc5EakzoE8UiP7cQ1QzchEPg4u",
  "key31": "QugKsJVCif7hZr1RV4AB2uz7zJe3fftJija3FA719MytRFu731AreHM8fsM6Ptrh6zpDRtFHJQ7HUa4g2W8xyVF",
  "key32": "39KkPranHGaJg7GKPbiApXQShBrVH2gxQx8qjVnpDGPvFNzJQg3YJnJme34QPjHoP3e31vjr2jXi4BJmN8eZSwbU",
  "key33": "pKbHFagBXeBhupjsFKm3oifXKL1JZBBEQNRFgNVjuk9i6wWWpqchZheoixFTNvojLtKB1AFSH4h1fmxuFsf7iBQ",
  "key34": "2bLsHbZHymubtfg8JaxjKpkdRxQB5Byk6c7Dzudx6zAU3UKiQCXWUuLJpRgTRuig6PnKL2PKsbMKfVqCo3f1juvT",
  "key35": "4u71nBKd66WZtr77XwEoQ4V6xfHvZmmTcZC6o5MqTkEinM7NssW86MnEN7aBtwFDnmCjPvkPRgvk84z9s9WLfmGS",
  "key36": "5n7kDqqf95jH3Bogy8L9eV6kxVaK8xyXQsCEaQdTESWyrnRxV7P4xw7X9MhtLmB1vEA74YPb3VBDZ325jCnZWao4"
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
