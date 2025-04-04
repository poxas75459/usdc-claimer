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
    "4Bd53kf5AvasagKBd1zHy8uRxHWDj2ewFejddGWdPuQsHqUXqYRrxacHuxev8v8CuiQWFeTrjqsZzPoDiwhhvbkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aG43xDeMwQfEYkE34mUhCqiWZjtwQXAC78JyqzNd7Xh5ivtYEDZEPowu9D3HLkBQF3tkzQqjqNkW8Ui5tEiFA2z",
  "key1": "bTZHiQUoWb3SSeo1Lcn68ikqmEjr1qfZ39G8JXdvP59b5jMVT29JhJiAh4fCSKhLABWaBtsBQPvAdBCjUYU3zyq",
  "key2": "2i8DKasmq5atq2TFFHW8pnH56whrd2ZYXBX7PmaTTT5eXaSD1cFQeLpYnub7imu5unLgjZLcbYkbwGC6BjdMf6a3",
  "key3": "5BcxHk1UJ7aarSai96rrbWzZ6L2Lnw9xAJRxHdSDSLbkEapxeMTwr9PGSKyAeeBjubXLQRXpK37TJW9NJSgTHzp9",
  "key4": "2m5xAzw7GfWGemqVRU3EEmY7WhF3swfrB9KCsxekK4NF5HUaZeZGip7NnJahdPEqUmgvYFKGcULFYaEkfFKRg1Ht",
  "key5": "5LBrRZ24U7qXQnuXixhrmxnQeA3djae3gWj4Xxt1KMQApRGPcBA7CsiR5zuFEvs1jmRciuXmm5hbR11j3XyHASda",
  "key6": "4y64pj7Qt56uGevcgAoaCb65KFQKkYXKVnWUcqaAhz2Gxe4Qo1SvCiuEaizrD71MFMSeVGqU3uJUdWeQSQtj72zP",
  "key7": "2PAYGFT6Kv4EU3rZU42MrrWT5zC9CTZB7cWMkfvM956Q2x8wrhgMYcFLWKtfJREUsyRq4omLUrKcsUZUwjUaJ2GQ",
  "key8": "4Bx7nNmnZBdmAhrAJb2KgMZ545yWwzR4kALCqopdtaSuS6VBeH43i1wgqSf4VFWXpeMWWMW6ESFNsmQhEukgd2VV",
  "key9": "4gypRM5mqbyUCCohByBioi9A8JZjvabPK3FAzDYrVGCBRgBP468aLhcUX8BorCttyHKkHuTiAecZsQb9yoLMdxXh",
  "key10": "gM59TfgUKaXgfeHcbmLmgCKGsJ5QHSr1HgpWht2NK7zkrtSp7XAE3mdFrqwePmin6fupncH7BNp3752Un5ASqfh",
  "key11": "z3RKxHf9ESoF6pbaKWf6LPXbn46u5yY9hUNEsWsWK2EuHdbCaS5RFXtycXdJu9PyZWma6tW4Tk2J6mSjKwUnmkW",
  "key12": "uz3Y8BohmkoTN7QYKFdn6Ky1KvVciTivWKCCjoCDYedW4T3e8fE1sig1hqaFUW4G3tXnpd4Xq8k61BfnrTRJzJK",
  "key13": "5a4Pa52L1PfZWD5P6K9N77EXwDfzxBgGAq8QzSm2mEX8wpMLMHgtSyK4HTuT5g6dVbNDb2vRyChVxN94hJtPhm6p",
  "key14": "5ZbASrrE3BEsuvvnxE7f6ACmLkX642A3hYk2nXMYfandtgiXqynRRoGAUtdShneeVhBP6KfC7y9Um1WToXZwurBc",
  "key15": "2R4ZE3XVVE6C44h2rDtDZuZ2hQyArVT1tgau1ZApb8KXi9fx7qXSC9wzoXVKsBNFmN1EpLDoqSXTZ9HJLU5GGzbg",
  "key16": "kekoSqAxbaiw4ysPg8TV7sceGjaXrKBnbHU6eWssoWCDCDumMmYyQKtmEo1KT7AFCLaTvm8YBZKpMjEQr4urYa4",
  "key17": "3fGQnSgKFt3S6jpjffhrR6jEkcCHp5sJKaAxNm3URyonS97g7s1wvS9b2AZrWatbE1HidFCwobyS6y5BWaWd8QwV",
  "key18": "3P2kfyUcVG8qcDxXxN9ccn31wfVnmJk5ToSCByYMqiCutHXZPBnwzLrdn6M6obY6tmVs1JYoTCWoQVeF6dSJVmsn",
  "key19": "jMJs2F28D3uztLCht5U41ZN7DisJZoq6KYTwjUnPitY4GvYSnck1RpHxFjP6BCrnx5htFKUpdGYSBoybqoTaQSU",
  "key20": "4yR67eCK1Kr3vqv59BuJPQ5U5yWpJtYTyC7aKzBxPJDDNGgMPJj6y9CfZ1MswryTVPLut4ToR2sdYeFhXwd5Yop",
  "key21": "563hVzaFSKLG58P8mNiEnhREkWxhY9xyDBdHXxMmhEGetLQXarXa18A43GUV3W4ZPRgAbMK8Y9ms1YKq4sZGgEs9",
  "key22": "5yrZsLofXAreyGyY6KLGw8kSEHDF5rCFZx1F3VR9tXdDVhgsi19uneJ5GbDWR881HPdZ3sv1r14TUPKHwRZzS4ha",
  "key23": "3r2i8ActD3gevqNFTrDuYBx74qgiMEYfeMjoXxaQZzSNJuVpqAAP3j465S33nPgRjZqMzbCok1z7GqioaUmWSU6c",
  "key24": "2rwFHZ1yWiMscsSCDg2ZRY63Aa7VmfPbBmGdE3D7m9sm4VJXdVM3N2GFtMEScEgE9arCTw8KHZaXiMHPtA6xZoZJ",
  "key25": "2coaFFdep2M1Vuxu2VR7Ec9m3Fuwi4kzc2ftydyum8L1WCCekYYyv4GByxKbhFuEEf8Ag8BxmChyx1yVECAiN2qt",
  "key26": "A7xztViRX9zQtimSv4it7pwA6R2kzvLqdgYqeDc1aH47ybZageKoJTW2ukpf5eK45LR96bu9ycHKaGZtqF3M8qJ",
  "key27": "4Jtagbsf8zjfxZCBiFqED7DE7F8FGXhLfLd4GKGhUBKDLoZUpviyNhk8WZUKFXqb9RKsZR23TSTrGb3E2yqfidqQ",
  "key28": "5VRStppeMMAc22xjMsS2P8rKPoWcbMsX9n9hqKyk8UVVuFnfk7px3FfckeuYzfUkezryndFmLxgTwmRvFJ8HyRME",
  "key29": "2QwTL1t83kWs24abcocjUcNNZxgtxdb5y37nNiq4Dzhipf2m2PQwBHcYgMz6JHCXwArmgr9BTwUkHNr1aiwgH7g1",
  "key30": "2dxKdbX85jV9G96rYMixiLsDhxfJY61ysvGrKkLp1FeUAzPrsunHzFtVsEi8qwSoMhK9DtrtYPQoFJyd4vBfsvUB",
  "key31": "2xgpRLTTJjnkLBZUUKkzWCZGypa3bKkVYDcngDgYPXYLP7qAnqRoMieVsJj25GgUg31pzxCa5jGDhvyWd8rnPvYU",
  "key32": "3E4eibcvaPYep4MsTe7RZ687UqM5kcYzR6J9Tu35Rso17V5FwgPdFqXe3tSK877PHTxwKj4MMsKwLR5jDtzfmvb1",
  "key33": "3QHCNouBznHysZQeArmwm5YyfFp9HdsDaDpQwoKREZcEmfRBeezJm7756i4cySUAffPuJ35sup3qcMy8bnFMbw4a"
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
