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
    "4Rqj9ZGB2nEhMFBcbjsWW8YPQmDmLmD6LHcMKPUGyeZTcMtqgdkwZWJybBMG3p55CaJnKCqKPfugtrGWY3nsPtkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvaD16ZprvEC8wPLB7jE4rrMUh8vrtwPmd8vfjtLJQCKzGBvDxSzZuumu1k3kg3utKAwaJMgTvT1zsut6X5uFZu",
  "key1": "31XQj5RnVC2bA71CrNHBJp5BYcPhrtB4tTcdZy3vdKS8CLEMut618DBTvEX7zKNYC1ScWg1qRezkBqJdMcs5h1RE",
  "key2": "UGBX1gK9btpNKUSoWVu14r3QkEmNbw3oRDv1ieCRvJxxZh9sUh2FWyRV8J5eQvW4MxJUNybV2UbnEZWuCrJ6Zos",
  "key3": "4FVP9TmSPPno4LLvEnnyUjy6roLU4Wh8tYcmcY3tWv4DQsJZe8stus4sB6Q3SnZST2cBMZFYxeypVL62fuvq2GiB",
  "key4": "4FTQe2Ewwzb6JhzHhJRXojgmh6MCxrGUkrqpctJuTa34ZEk4kAmapanDT4vMJupaKViXRQD8281Wq7KrmQSFRZY6",
  "key5": "C6zhRMVgJvveh3LgJHKWC4A7nczMFznAf5Aynk2B6zhnK7yTKuNwPDj99P8MDHH6LCWbNEWiBdhMZkSFG7C6cpN",
  "key6": "5nkzhQ6VXborP3mrX3JLjvhfDhcJFg2QBYUu9JKfa3aN3xEbPtvvmSKEJG6KomUPYeftCqoFJH4DesYw6izDzNwA",
  "key7": "4XX8uJ7FruSH6qQsNbkz8F4MnEEoeWh5B3hWMnwMeDQFXg9QhAacMdzvvKviABr1dH9LS4Eyuxh63p7sesgZ4L2X",
  "key8": "25diVP7AVd4nWLLNavVAR5AnjNvPngN8MzbWD3j3chN469w8NNGM9h6HZUMP6SmUYJH9aeuW4VxvKJ4N2d7u1xLi",
  "key9": "3PzRcV1sTTr6RR57m6FiUQYTKiQeXCtsqvHVRED6v5UW8rWRbnyuBEnHLkytn3fpRBcYRwGbByo5DirAPFivkwGy",
  "key10": "63WrquyuM6fF2v9gcFzovs5nuppVjEgBQeEDRipFLBWBVP2xLtj8pSVbxgMNSrLHBy1fFQxDdQ4EFhXGNFMeHta4",
  "key11": "2YGeBNjmCeWMh8RGqqHUXBJu9MFBLLSmJJmhGgSGeX2u8xRMadVMBRfvT9XAjkSvdPnT6CE4qbcZDR3XiMXQe6Wm",
  "key12": "4LDCWnbxneFqvLb32Na9YaRfGfABwoQerRvGpfAXqqpbTzMXAyb5rYk7Jj8APCA38S7RvV1GVaaRUJLPWQdBu8rc",
  "key13": "u3tacUBhocPMqRuqGP6F7QfhpoNM7WzfxUCUumsmfGUiJRxgWQeM6cKiouj6B7QYoeRMjKVVLaeEk6oHPDdECWe",
  "key14": "3GrSm4ueM2vXPRWGBZ3i55ZcEK7NSXiGydbnM7gB44TrG7rLYeNqe4qBjbbe6gVU1MKtGtGbzc24aurpwDze9YHB",
  "key15": "4e5YapTYfqwWr1kstYUZE6yRQwCG2KFz5SWzi52BXEzDmkvgLBwXyd5JKMmLYt112EwhheLeWyaopzC5pazXdyUg",
  "key16": "PnPhkFDwnJvQtTEY2nEQiKjVECWcC7KTXLGkHAWPHYbMXA6k48SV7D7qy9JvvAqV9drdxpxZk9arRMN5G32JhhS",
  "key17": "34WVQWwKEHwmw9fLcTKeLn2XYMn7kzs53MWsJNDdkqmquwK7GT4j98X5xjWgnDPb9PitGdeHs71HgSv4547WV4ch",
  "key18": "26gjbxDsjNx1m3ZmhyGDPiyiDLRHA5fovjxFrm3ow57NRCU7bQQiE4eMEcsdxksyPJN4pSUQKeC4d4MqMfhhBxbZ",
  "key19": "2ymW13y1hT5YBMqztVunPmcioppMJF6bWzewiWVXP3hvfojFRgfojhNEX26ipBA7yJ3x3ppBr2iYHYVrfGykM95E",
  "key20": "4QcSATQnLSX1AK7eDxs77QjSqU3HZYWtn9CKgWfKES7KRJ3Gb5thbrkV4DEHNiibwTYe9jPiv4me9EXZY1CymJPG",
  "key21": "4TaH9ddo8FkWMmmPnwS29KcUtn5mzVfEDt3UTSCBUSvXYiXT6w4jUn4oeg58ygjdWeGBDY2qfHrjMCYB7DWuVXsn",
  "key22": "3bkGAAHR3rJYjcbKKTJ8HY58xMKRvwjc7LQFC6YWK3arPByPbL93cP6GgPCU7aqgUXG3GBt6cbM5HBXpR8NNT3Y1",
  "key23": "ybEXyDkZaK6NDV2HgjXKdYELH2FpDRSprm3QrRZoUcysE77W6tUrMnHXJrSQgDfWbuWiKYECTqtw77ShW7XrK7X",
  "key24": "htKKJZMyaqRzyGWj4RfFBLFc5W4RgKXUAMjV3LwZZov4mxxkQZnakNMcUALPPnJnpvzo89KqSaFEq4FSMu4sqDi",
  "key25": "59fRajWfTn68vndPz5rrFRoSoHY6QJ86yzhqZ2abxLQ2faBYLFrEFxqbWvs53G453yeTC51J3jCgtE7Z8Zm9esoX",
  "key26": "2DoZS72PN9Y3NDpfxJezjU4vPp9gxmKwvk9sKmW4eAyNULkrijuLBDPVf5yKijSujLAfmcf9m2C7fa17Ef8xxLvc",
  "key27": "5bNV4xAjCp7sLD9tdGdfQbwjLAjWPe7374bFUiecGNPqCmC3MULMefHoptf4Zqpd8C9VNJiZNQBUudBxY7HLxgp2",
  "key28": "52BbBKbxZ75yMLkktu9HNTicu8AM8qzzdSENgewQe1W7tEYqeBE7xuWkYbDBwk4hHp4bthTbAjjjdwAxzHqCbBtv",
  "key29": "5DrPx5hBi5nTSNi6m9fx1GBkUEWpY7oYXwizPcGTsKth7hbQ2SDCM6LVSbSZ7wTxB1tJBpzbt3vanBHV7a2iK5B8",
  "key30": "5crZtTTU6yh4Qu9iRxaKTU9aAn9dSHH1oJCKLRDTKWg9SfvyQvN8g58hjUdeYXfgpiqJwZTVPMgs617eV1BRsD2Y",
  "key31": "3rZ2bfnNAbzGnVaNuCew6jatjSnjDMTnjEAtAdAtqs5whGAQf8GAco23ZxwomPFBA9PfKK5Ue37Vuy2K4dvr1zzL",
  "key32": "2PQE84fpvEPDn685TDGy9jM9LrZS1PgpPEy5xb87KCDyn8azxkLbxnzvGKaWEGFHZxDmNMz7s4RNGdzhWyGJqXn",
  "key33": "3rAKzpDWa6v1thUZY7eNzz3RTV8Ef7JQTHb1mDfM8s7NMWqUPH7GZdNDXadH3yZ5fptcgZCQ3BfVj8yheU7eNkea",
  "key34": "56qcVYUVhZD7uobYopTiKf2rNPKAkwYCEaFNatfAmEAZeV9okCodajEEQ5ruSpMmC9mdCYQT8rjsjP3fXoSshDjg",
  "key35": "45TvcAML4o5PdjLijHyPm8qNAoJoQ3mmDQfbZQ16tN9mA41YSJf5sRuEzLisHWVVyK727VpMojH3Rh9Homrub8Hy"
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
