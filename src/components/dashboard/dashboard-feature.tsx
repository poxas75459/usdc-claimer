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
    "5JJwdfnaAop71sQYBJ4FFCKsqT9KWJqWUFJNMzwxXyPa4gbDWfPcPVfaxSpPFX3YEhNirotDg2mibjTBtuevJRTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31CB1hopoBvUhpCzZCRLSPgWJbB5zqoaThbGT2KjZHwXbPEudKiajpjFhV7XpEyBBv8CSsVZsRoT8NF39y8DKVZ2",
  "key1": "3xbzqRVgbSZ5WNUzpKVtoqNeLuSfz5A4ZJ93Hi3rAf25xGZbYZynEJXyYk1aiojvD9L4GuhjrBHeSTJKgXqPCWek",
  "key2": "3aD4vQfwhucAraanRYSDWDSMq7LGc23zUnMp8xaQVwipN5h8qRG8Kzg3fDm4ZEit2CeX7jrUX1gLQ6EbpXFHgZWN",
  "key3": "33GbMzHnDhJdckxVFVr5VWR9sUTaWxDJjxMkUg25KPgME4ofkUWJNCVQSuq3TnUoywE62JDsR16FqRG3Ewq2th5R",
  "key4": "3kJpq2sGxDdr7yXg411xo1LkXFR3pAMwjXYHD9FXAjqfqPxJCXCpSnESfmTB1pPfEeQmVcEWjUiqrFVWZvLN4tsm",
  "key5": "29JMub6jcvR2GosisvuYpTSdqkWDPDaH4eK8tGQk88mmNaPCEMgmMQVbXP812zSHqCH9J83WRiu8oBjgxj65XjeJ",
  "key6": "346KccpAuCbyv7iW5cLW6fZJtCVToQEucdajPLqsWeWTvt7YPD3N7T6Z1TmbPgmDdiATfoNxiN8mpQairBUdif7F",
  "key7": "v5zu214P7GskLpcbz1mA45iyrFVyUSUPFdh8gDfmCJCpr9jhcS4RX5tGXwg5xVifYn2SmHR19xscKekNkEe4rny",
  "key8": "YpG9pwyX9Y1iw2aMK24kkSYuZWm3bwf3DbSvLyNiP3BPdKiLXsD1zMQigqwgUiYCrqzSegFS9xWtmc8xpUGe8p9",
  "key9": "4r2CMxBhxnpt7XgV6XV8k5UoNd3mYSmKzyYS35SLUQfNePTwas7SXBeTDcqCD969gdQGd83qDWsqQHkQTvKbA3p",
  "key10": "46DvGrsJfGwVowmtCFiGh3Qjp4dQfptXt1gUxqg5LtYX4qt6a7ihYf5hQvNVUD4QPHkBsgct6cyWC7rTpneRrkMN",
  "key11": "3ioyCjvQ9kbxjteVDrMCfMPAG3jcVpgxs8KgGBh9Aquax7NS6uXNz75tfQG14BxASQjUaLA6oBicu42pMuo15cKD",
  "key12": "6Za8S8VXeSFc3tRbYURYqxt1wE4ydFHnFzfnBdbXsVoosbrSxzG5tjvmchoWfrQgft181qSZU7byGAdiHVC34jA",
  "key13": "3dtVKZNL6q8pPz8PUiE8AfR44WcawDxL4nAW9bRXfqpGSaFmeQbV4XG6pxeAzFSkHmmEsK7RCf8g9g56cCBAzUxn",
  "key14": "2HWw5udxWdxqY8FmDHaATQ3iBtTmVfbn37TQhuMfqGYVTB7SJdGXDsTZ98LovSaMFmvMEAxjyjH9iy8JvjJmgXfz",
  "key15": "r3DchjiLSmZvJ1bmubabqedXpABYLtCBhVxe94LZ56FocsjZqwXhaDNGSrPN76CU7rw49VsFiprEYUVBSuq6TKb",
  "key16": "3ZDgBdedVZqYxYQvq298BAGrtaZWunYzBYxvmwAVqiM4xo2N9JHP3XaJQLAouwYaiHCbKkijj88aKTyv3jNNDoJY",
  "key17": "22LnGvA1bd56VCYHcY1CRpYvJdeaVumwpRfawXFSwcKiC3vQn9Sb2ufLxuBHtsfBDAgQJe9bP9QDaK6uFbsL8mPg",
  "key18": "5NFQpikWB3AdLcJ9LEyP5mmHW9KAnCy6mxsRLgNkgrhvJCZov2WiqLKNW1twPkdkAZXnS5Sgx6B98ixv92KKyxYL",
  "key19": "44n1jjS3xQDNMf9p6VeeVQbvGsrNLLz49Tm1aV9ycV5ssm6ESwXtwzAxWZy4mP6d7ExjCdsT7FdSDDdEwiYTrcVo",
  "key20": "36mQKFHX8i326r8EtK633M8V85Dnoh55F2xqqoJRhw7TqGQfXKhn59XAWTnMEqFznCktgXgU5Gh6Gggd2ZA376cc",
  "key21": "2fCBaS44qBF9HWTrZQYJFbf8SDCpamLRuSYDJD5u29QfUrirCSxnYjwDZj1Fs91iJRFudisVzGhRRz9hV8ppCrsY",
  "key22": "2175s6LpPCq4mYVhR1Pc1XkJwUQoU1hd46Xu6gpvQ7vbD13p3ic5BzcBneitLAjiTuEFTgsMWWg5cdzMeCm7KkKk",
  "key23": "ccc9JEnBV96uyxZpnjo6rPhqA8r44VTntq8BFkcZVNYz41iSHqTESq2MGvZbPEASHdHG2GLvBiwxPYSigJ5LYdA",
  "key24": "8szCNn4W8X1iEEGWW8woWz8YCCGkf3SceZh2vx6G9iARiHA4fnkdKdB2oE7ZceQKQjSRqLcn9tq8Uu3pXFULGC9",
  "key25": "z8yfu6Ce8bxJxwGmgWgHa5FJr5Q8ueZsZyySjJCaE3rWmt3yuAE7g6NzYvV1A9ULonAeUNj9Yw83fpcS7MhqgGk",
  "key26": "4hKoBH5FcuL17pBH8hUbzN6JTQ6tTEB7zhN999c5EDGZyytbtBAjW45GzDsWZ8GWqQsrAuWNCKeTeR7wGdWM1xd",
  "key27": "5mAYoGP3yiqVEyPVT9bmpRfmQsM85MC5idu3rKmgEvVWtqkcRBVZVfuRPNsZpD2JEvqxmeQFDH83UFVxAfphEXAw",
  "key28": "4UQR76Ub5g1dwZXT8EeVSj7zZgyt2wVW9y4xqJmJHvPQ6htb2A1cQ7nkiEpDkkNw3aVe8vWbYC2NYXRxJuXhzpBK",
  "key29": "ks7UXpYaLnegNJoA2BTtWC2yBaTL99a9tezfAdptVUhGFCgFSm79YstKyTASagWBKxEPfxcw5ohP2AXivQjLR9v",
  "key30": "4jvxn9jSqadn16LhEaDEz7Y9vPEMXPLCXG4buWGxWenMPvCq5GhfQCW2k4wpjSrWRwSX62qwQE12x3LMFZT7nX4h",
  "key31": "2RVZ47TqqUgRHUzFbDJ6Qw9Z3mZYP16ASxhXhKzXLVuK2nMxENGGCoFZRCPXStiEkHedKA4eepSrbShRU23KSBpQ",
  "key32": "2ZA8fBturJNButc833WZKQjsPqdrjRKohCXvdrrPTv7XMwqZHYpi9PdUoXaoUnGkWd3dVL4TjaYKDmUZh861UxQv",
  "key33": "6uYCpQCNvJZYihZ4ZebuXfFin6pXytPi2zpm5TUbZt7sHgPUBsRqfBUPCDt3KHKtgumt78YNXwhXYy5sh98G8xu",
  "key34": "2W36twKgYf1wdSXSsXC4nPjWoh4Lt4V4nvVirnsFp7RPQyiiPg5aiBbDYwyLdf63vnssE6PfUwhVgjb7N7Q4ppYD",
  "key35": "46YyJ7AtExQJTCVdyuqPpWn4yH7W1mvEMpGE68SFCCQcd4zcqMMkuZ1sNQQGB32NYqaseUwqu59eVQvdNK1mKZNw",
  "key36": "fVvEmeryqVvWw22THddP2zRvfUtfTUrcLu21vpN8cuPpcBvbUBsEiEyz29fkStTFj9bfjZ4bKAaouWz8KwexDRk",
  "key37": "3Dzj2qhfAsej6xxJ3DqoXo8KbfRSth3meny7sdHtEJN5Ta79FMoPaPnuQMorgDp5fH9ufSAna8VCb4wBsuUv3p4A",
  "key38": "42uUna9XPevWG8zCDPq8qzM2CtZezs2Dv52AyHCoYd1CoB4C8UQLzaYUPsonvpCXKx7AvbEe3ovA5xYdtHJnjJjk",
  "key39": "4wuWb3wN5SeYW337iKagVw7kVBaxBTvkg4fTGHUhqwppGKKB5mZJQhGctjjALLZkXYEG8vevwXbJctgmygHRGqZq",
  "key40": "4PrfX81vKHdnfRZPQQGY3raJavpj5Yh733GbZnTnNMRGNQsR16WLaZ2fdVHDFJbpvPb8CR3Cwh2FcJLVPpzNUEXg",
  "key41": "2bE6Fm4XXpoz1jaZ4YFcazLYq5psLVrdLugK1iVwcgYGGqEJ3XYpU5uyNrnVMieHQRT7bomQyT2j5y1HEdwpVUvL",
  "key42": "573p5FWkoZnyjarQCuVihjHZwJMxGcMfG2fJ2jyMpgUQXYw9zcjorjtGgn4V7CkSc5HZ6c4rCbrp1MG7b8vdkV3G",
  "key43": "3PgfRFgyRQsTxEPQpzXx2Ma8Ub7nW1rBhyDmg8PcQ6rMbgpF2VoqEg5J3YKLd2mY4nAqSMmVgGGBXaQm5YYEqoiz",
  "key44": "mcPSmUKeWdj1rJrE2nQVDueM68xTrYLpGFoPdK5y7d5SZ7jqM7WDrSXbt1TKCSPTXTMAzS9TgmPeaXSxGFy6HYF",
  "key45": "5xW5RUqATW1fVYM5PoT1P4AVsPbrwwZsmncDKyxBkov4B6DVb3oMyzkx6xA1R9u6KkUEouqKHdpc1c8mJuy8N3GR",
  "key46": "3vQD7xuJoCdrSTjE31g4VR6X89hipds1efSuN8MEXB6q8Vv7q54X3fULJtmrXBD37QXbD26LL2pdzfdFber6nBAj",
  "key47": "ra62ZCC9LERDJsJKfY5VEQqFyX8z117oXDVN4QYSE47NW3J1ZxpVufbgYdXsSSHf5g6wbprpEd3N8emDYJmsswA",
  "key48": "3Wz68GvSUuaauv2mbRX73VAm65i7z89G1ngn8D4f5vDFL8emiFUaUsK2QqGUFrgZ5eKAcverBJLN4WAnXcu5MSBF",
  "key49": "3vBKntGfnQUy9bbD1iEVzdhJonxuTXmkYCQx1pGxBQEm3mMJiFWDT1pnBRTuGxZNJwyzV3PC8fv2GnzjviMjt8Jy"
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
