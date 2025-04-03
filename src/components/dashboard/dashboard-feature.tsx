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
    "3U1gs9Fzu7X8vwUJysSH9SxMF15h8yBXL1zzPT7ZX36yXw4q5QUfhYBf4KvxFK4WeAtVJGYf52VkU48JVVgCNucu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C95ZTV5tqt4GcSzjPYofQ5p4cx35zZMneYrCPYfJC2B4vfLtEkAzduw1ExCEnYitMX4BDjdCutvwCFFaDWQxDPs",
  "key1": "3CoQwpnDQjj7RNH8HfyrNfUTs2gLy4NP8J7X7k1gL6Ccn2nTHqjoxfxQnBQjfro5u4KGfckqnpVCnsZCu5sYjajQ",
  "key2": "2Pe2kSwocM3mqgW11Chqpqg6WpTZggBtjpKy2vju5DL2hwx2ThMiwwGYjRTTusc2FBDq7JsxBJJL8KQVCNe3yYUf",
  "key3": "44hwc9fWCZVjU1D1KV2Rc7Bsy1XYbnMefjK8c4Av6o8TBDvgBAWM1KjEMd6DCyS9sw8dzcQsKQebh9b5jf9ZD2J7",
  "key4": "61RvP3L2sLe5vUk1uWjtEmVGUhmjZaA9iAH9Rwz9XKiUfJeSnC4rPx87xfofF723BfARTy1Rm4LuekYkCx4HT849",
  "key5": "98A4Ck5sFMZkza1qdZMG7sgUFXsuEZ6PNjSzyJQHb4sqWNxPTvCfukByKPQh6EugM4oamopD5JwbE7RrG99ZBeX",
  "key6": "5MwgNTWJdPrKW5Z2sJSouev7K9im1K6XWFxxaswoHfym3e46wb6MCKAbZxVL5vPJTvzDQ2pLuSG8BcHQcq4vizh",
  "key7": "4uKFnNu1rcXqWTTLD4wxK1Ziwg2QVnWYyAqWU3BdqEmyRRyeCMLvBkXdJnKTDS4GgzeNkfPfEQEoPXvsXKEPujtE",
  "key8": "PqfdWUv9LNVFSD2nGmncma6PAkZh6TFRiRuDQhagS4Q679oY4mpjK7kanboo6ohzKrn5WAY5eq6epTbConoztgu",
  "key9": "3AuXFVDLWaoh4JuTgnQrdVjZxrWPDx8qf6oF1FwENaRU5BMoZdGkPuW43js1SXMEkVzcngNBZ3MDJHYnStvwDcbq",
  "key10": "3BNJpZPnuXtB86kB7iuFDAikWkMvBXPEPNRHYDfRc8d1xp1aVMvf2iVSgj9Aek2GDvtREMUxSdnFz8TkNTvwDbHu",
  "key11": "2X7rmRmg9XEurEzyoj8vkTF3tRGkGasRAkLFeM2VgkrY5i9QgZJjH8rBW7D5Go2pY7dvKdzAWzo6x3sQnHBfxsXS",
  "key12": "3NAHxfgEgo2iNSuoXimeFvqvtsC6R4EdUecDUEdMECppzSJC2LDYBrs912PaHYHLvAKUXrfrewh466cSYJ5NkRJU",
  "key13": "3TnxDLsKERrp3upoHgPd6DA8zjZbWZEbusXiPCDd8Ztr5hUkgh4HDAKuCEJWbo7BN74H8gJ8rubezG9evtT2eTFE",
  "key14": "WQcpF6RbkpxenPrg9y9CFrRJ3VzkjcpUDZS84d1LqofhwGGEEDnBVVaNgWuovSBbntCf7suewYdSCoLr69G8BmP",
  "key15": "3pN35hp8ADozN2QuAA3aMY2eFGZnRRbTBUx4VFWrfh81qhKkUbxmRuNWGzonyEG1HwU6A6Webb9ATco6FT5Ueeue",
  "key16": "MHtRzRkyEUFnojd2BdzB3F7E8Txf7xtfUJs1nLbYtjj6dbgoKQgCY81uBzYoPBwTiSuMTbuMWU1MkmEbnpQvNjs",
  "key17": "3t7Ew6i2DWAR2Bh7hmatMEbMik1TeCWJFWMjLYPunooGsvxpsi3V2Aoo5P8sW3Dvsj7ZSgmkznrL4EeC2FE1jVA8",
  "key18": "4AAxeqxGTK8nESUtBVPtPhETZNGdNh5y4ZJF5U4hKvvcpbuscjqoMKTHLuWQhM853LovSGcCB3nYuih1zGTtPSrq",
  "key19": "2WY3oXwxLDHt3HfjH3Rn92g8kFRcJsrxzq2YtZ9tsnC2TVUZkvK34KxvZSXJuoZNNWHYiiT6VurxWjiNE3ce22ti",
  "key20": "25c6cHCK1AAxpg67HLvTkYBBFpd4Ti83C8dvvnPmHqCTvKACjn8uqMTbGMFuVDEdQ44pAUFgSupJUEJT8gsAEwUJ",
  "key21": "35kRepc3QpxJqarqGQ4MejvcMJbyq1MwqzfvbSTz8oAnDBt85xbWGSY8PkuDdNSHcS2Qcp54EEjyd4vaFJ9zBU8E",
  "key22": "SauFSVLyFNuy7UizpLEQZX9TUskuTCUtPUx6WWim2EBonGVxw53hTEfoUXtuD7HVzxd7wmLPUsJrEFFVsSUUANs",
  "key23": "JPcpXxHZT1HgtgF2C7CuJRjXwJksLg8zLw4NsovBbkweRoRqUWAKUbbRf6oEFTgZEi3bGzaybvPsxAgkzjtC1fb",
  "key24": "27T7yNQ5aLWpwB9Dg58zcaLW9819xnpWTjUyuwjN5ZHYbcM8qicWZaq5WvuLRqnd3X6h9kNdYq2hXMko8rV81sbQ",
  "key25": "baffM2rGYv4JExBC9gJ39fL4wpWhSLX2PG6azLPU97t86iU4jUN9PYnvpRySapX6ihNSzcufBj3cfiVKJHphU86",
  "key26": "3158CqKCmRGiKfqjdJyywyzJC56sQ1mKn68tLMeAfSQsrxr9x7tJqhYi8aKxiRUNCAdecGyLQBYvBkeDKE4yk6WN",
  "key27": "JyFWSTxoTG22tq5oZjeK3JPVzExEfuT4FxJKvvQGBPf2WNPiT5jPdSvyJ4jXJ9hqtb6GYY1XvAGifgmVMLAyG25",
  "key28": "3a8YeeymdJe3hVcbyMrHXkryA2sZJa1T9RWfNEuLwGdWU1VfLsdhj7K2c8HFmNEq11BySGbawGLM4n9JWLS3ekGd",
  "key29": "2QGb1ruM5FNjSHoR73Na96xqYZPBXkF4bgLJNJtPFigmEzBkbLHDcCKx7ayTFzXAvc6R4Pf9oN67txpv7tocKxSu",
  "key30": "xmZ4zFRmLAxHbgrEi7czvqPTQ72WtgiD45whWDP1x8sGVeWfKPP2bhSCPJKWfXpGKdFR9pv6UUxZjN6aLRmdhZZ",
  "key31": "2mbgmH8Rd9tHPxgwK6LbywfmoPbYoZg78CMTGBY6Stz3sbdp99JK1EEvYhCor4wb4NRVkXoHPY6HDmD5vp8xHVFn"
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
