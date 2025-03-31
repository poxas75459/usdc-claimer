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
    "KBsapGucH2wvE6LTdKjKf5tJVf7tSSbANXyWVn4w3Z6pkM28mpHzgwedVJGQ4eTgWNsWkEHYz6nxzoojmTPqjm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UUDGTtcyExXj1A77SPLF9hz9J9snxF75HDdEAB7YULnLc8i6XNr1fv8XTadfCKUHJi7FDZ2XKMLm6fPDgUeviJ1",
  "key1": "3Y8NXMpw4d5Ugk9Thw2X9o239XgxbLk5EUZ9RK52gs1szweinM4WN4Dgpa7HT2zNd6k7WVDxDK97EYNxLxbYN8AA",
  "key2": "2SUy218dxA4W8PR8iUmRup9fTxVcmkBWJonbbVoeNcA6bK49xCTDBunB9T8xhJUZKaqNThbgFkmxY7mZXPE3xeZs",
  "key3": "31Gswq5ZXUEBYKP36GbVS1dkcHK4jDzcQFhyTTBwWtrRLQ1dAu5Vjk9yc5QnRS69QfkTJ9yqsNTaXGrKPQyiQ92m",
  "key4": "2GzWnkYB7m7k6vvRhKBmigebopgMzPAmnGtjQ9v1fPJSdzCmdFzkY9mntei2hfoK5mBGua55fTF873WcfwsSUzu",
  "key5": "VyAQM1xAm4p98z3TNueDJMouyUfERVzoN4nTFU2mnJSQ4f2fMbEo2yeWaePGaPFLcHVZhoM4sFEaBQfCesNw6GD",
  "key6": "4YyKKdgSbdGPjpUoCHZPSENDv4weiKSVrWZD589Pef6HFkLRjt26kQSF2yGiVtY38DWevFwCzQMz4JQVUz6iEZ5a",
  "key7": "5HrPXrG4ZXP2URS72VvAVtKQiySEaS2skdTwpec53x4AmHkDLZtKnu8ZpFWkHfUAV66jkJ59YHsFoqGFdiSSp24C",
  "key8": "4rp7XypzYssVjUJnQWANAJC3oVX1bcmvD7Gf2jAr1wLMzLse8Sa7mc87RhLQ9MR3E7Kfi1YmSRDr6nF9nR5GTMGC",
  "key9": "5vDtmvE3dMg5rCuGADJByUHs9CeTSBgvEbbdFNP1AqKDEiihudjvCXdDX5vbEUy8feozwxXBQZysza3ZfHjopVC6",
  "key10": "4KGBk3Zxe4TU5aKv6GxxxzcA2DgZwYFpQzNLjr8aVLBqihJ6cB69p5cDMVxjguTgqsAofH6efbYBVzZxzt9Ps8vJ",
  "key11": "5DXbB9Hc9ii7XvpHrG1zVGbTf2Z1z3qTdsPPYAfdssVF2kCpokCi8ZXiVzm3XmEys2Jq4JVotiSgSNVyTm541ZLJ",
  "key12": "SWGNTruFkQxAkV7fUC3AZz2HTBE1ZMDsHUBFn1tUBdfkiaEyrEedDTD5y2WamXfEQbNMrsya46UhCzCqaWRwH9n",
  "key13": "4Zv1sxxj5KU7LDXkxXuZjGG5h5HbAwmtRX7Kyxs9YnavNQPdhKCsjAkwrvU2QApn7KenULfoz4NxhqZJCQ9yPS6B",
  "key14": "2uWUjPVmK6sRS3YABuwNXX3yRudruFwnR9Quvs4T731CiR2X6uazazsHPYmZXtTSeuUkiJJkxMWc4BJK14Z2XNtq",
  "key15": "4R4HvyxF9zyqTH8ZFJ4ibDH5yGcjpLN92Yb8r8xJi5VCicwzt4JD3CtrUW6ufmaruyW3mec2HoqAiPCFVtU6Ubmz",
  "key16": "4FuPxk8z7DL3Yxy2CXVorzaQFsqLFiU58yZPG2hcRcDdMEs26NQ7LavdsUHqcpS7LvW6YnVb6uhmp3tKX9eGKPrt",
  "key17": "4fW952ohg2AK7J1kmVuqxC1zZf7Kc8Tq8ehjXou7XYdMubTFWbFWM4tKLwUky34JQTQhKNHA2N69gjVA7eKZ1vJH",
  "key18": "4A6F27rCzTDWGCmUxP9Tm6QJfArqmQYdotFGLSzrzzowHpXphihdDood7qrXMHNNTL8RUxJ6XUt7kGDKrheNyvUW",
  "key19": "3iRZDgmVKT8H2X6G1cd2WxfEhhXteRBRHhnDL1yPHo2MpE4pV88Cj693TFaYrZw3V75adBfGF1DR9TUU2gaKdFvK",
  "key20": "38V2uTxJUD3tCmSGA1qhDuJK3bpDZP4LK3nBPyCBe7sfp7fYZAjHYNbpCskZHCBkSsPTdNRQD89zKT78Pxiiz6rU",
  "key21": "pTrfjwfbin8WwtrN9GWaGi2H3HpK9bsqG3AGRQdh51FtikJLwT9jdfZwGnr1XvVJdDvC1ATBtGcLDVRrPDYhiGy",
  "key22": "UZ3EpdT1mzPxTdGp4gTmpqi4qpjEsm8wfdgnni1snR65kXEnX6LP73fQgVrNqZ8hs9tAknkvKGkTBtvVmQPE4ht",
  "key23": "4UwTd18zKxTGKCPnutVdRFMdBCosrTWckWX1DzaUntAkPjKrnoJsEDJmDRxbS2vFNsV7aK96FFxvfms9ppcZmJVp",
  "key24": "4s2Rj7oZ5HZvDAPeiLp7fMyRzbDugUd3jBhYxmqedNtZ6LFGeWASC8J145qgTrbtLc2Wpww31c658Wx5w2Lr2KBX",
  "key25": "48RXAo5vRTZ6vgGVcMDhxf1FfpTj2KjZfD9XAYKneec49thzh3wV4tTKbRzQvwe1iyf2XwS2ZiLNGYoHDesehyV8",
  "key26": "3CdzTHLd3USXFFgpVXx5dTP3cUdS4GTBHhcU5DgMSwMWiUCMgc2xSEbh2TH5xb6stbeMu7AVTNKvCh7Qxu8SPRXB",
  "key27": "4GzUEF39Dv7ye9TLsiRS7ZaqFxwmjidDnwmUFyWBxs1sL5R4vhfXcv417NPyTNtd7sjjPMUKWwcoSmrcyCzxSk4h",
  "key28": "3JmyTbfDx8a84cAUDTqUieUo737yawps3SXqSrfnskKx3c9tf4YgNq199xgPK5UZy8r7zdXJKjka8m8pKoEnWPV7",
  "key29": "e79sRDczod2vwXQrEQq6VdEaR4WLPQddM2742h3EwmX1fqJLsxennEqfjHe2e3LZFcTnjnnTWSey1AcuEqiiCUu",
  "key30": "59xAH32vW7w1kHNyCT5HU6jqFvCMT8ViG5XPtf6xQcGFTAw1is1T5Q425nYapXd58ebWcbx222hR9rMh4Y344AYV",
  "key31": "KyMwZVPTK1snKqeL6pD9kW1jjLsfKznMe1uiNNerNBhBjE1bzqdUCskV4WsDXhEzT54sYg4iNXkLik3DyAWuvMQ",
  "key32": "5htCH52k26SqVr5rZ65iqjQYyd9yqdnftm6yu91HpzFaQF4PHWnEKEtjKS5nKyMjY1DAU4va5nYSx95uNHLFZNoX",
  "key33": "337kADh5uRBTps3LrN2AUB4vkZNwtWfAqPsczmc5jAeVpmGUrECn59XyoB9MZgXxrJs9CGd1sYveLqMnMqzDR1gb",
  "key34": "2UJE8uqM8qY6uRbuyW3zUH9L1wmAPX2sgMXZGfC3gLgDVHA2ZGUuBhEVt1hczeQvLJ995ipWnjvrcQnEFACbWy8t",
  "key35": "2XGKRmdaRZxXVicBjjQcak1AtnsuttWHJq4J6jTGUjsi3h4EDNobJwgmRoa45voxt1akxDgHXixKw4s2Af9gcHi2",
  "key36": "4CM344d1YzQsV7uVq3EfRGoWPEoduUXBRY8HYo79ZzJxMe1NjCJ3zu7buYcQLzhPyp7z72WhUcPFGpkFsrRUk1ms",
  "key37": "2kJzjen32X46De8tSbV3Ni9F2hc51qGzUeyrhVqWKTuWeam8xQcsnonT4Zq4xibFQ3yV3ViuBRNj83f5t6nP1NKQ",
  "key38": "JnL3vZVubWcgcNkLyHGKFUnKTLapKv3u4pSyRJfNrbVBoisnHqci6Tnzm73ejnBDz94sWcAkAn7JN6zTmN4WwNA",
  "key39": "2Jha6b9Mc38zAeuzvFfkp2dRgxgN99xTefE1tXWqiQBuRkV2suwBYuDd7SBBPxacb68TjkzLDQoGGB5dAG1d8kKn",
  "key40": "BkejRQ9tU7TbY9gNhXeG5gcCW6z9u99cELi2G3pKurXj8iTK8EQh47BmGRYfnYPryAEbvT2BCLPDZqeh88nK5bn",
  "key41": "2UZYzhM6Ec94Z18vpagPmGYZjy5bjFMAWCcL53rrM9H4XYzVstb4JMfqKy1y7BrxyeuPkvRWxuzzL9RCPYFwQa2m",
  "key42": "3rneSmmaVt86YT3tWe4TvheGEpAcfaSDpCHREKSNhBnbEaRuUKd6znhTnjQo4jEnCfW78cnWxqAFJyuKyMxpephg",
  "key43": "2Y9rrnHp9FaVMBC9ByP8R1tyPEZLJuKKBAWLfYqY34N6SmVG1mA5dPWRn3iEgwmqwbbbMGXwcqfm1f1hhJSUs3tJ"
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
