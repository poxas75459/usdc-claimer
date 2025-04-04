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
    "3brRwk4RHdPPkuZunoMCRoYuiAHjxEbezQtT4MD4nXod8xCccbyLBPoA5jkeNTjA6chPB4niSaAT5894ZTMFnAwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QmU17GnrUSJvHCB4b1ef62Rnnfcomy5muGahS884eYaQmFWp3j9npmKj6JEqXytubRNfM3256eE6fBMSYisRezz",
  "key1": "5fibzabPtDAzqnGorQbrdFQSVDXF6SR6cFNwqwZdogWNSxTpHh2Fagu97LytYHgVypXLE5mHtiVpxHLpTbx64Etv",
  "key2": "3GKe5h274mArWGFjKkSytKxuYrtVJMg9NtDU44jaWCiHqAbEDK6T4fZWPRfyhWUPyHLkBUvmDF8aMAF1nCJXemmt",
  "key3": "2pE8L9zwPo1XHoUrphnLjN4c5Tz9QgYyNTSSYjqtJYiFYGtV2J2JM1Kptz4Tqh9ckjAuxs9iLdUKeQwhE2D4z8ED",
  "key4": "UBPANS1xR7RnnPz7dcRrqakv9EpKUe6a7tpbm6UwfaayYTDN7T6iicSPp8JkoJkvVhnHYgTmvi2ko9HNoBfRYUf",
  "key5": "qMnKsBzYkjKPGAckcKMPYXGYk1VjVxepM15ak893jJZ83KPExMN3gLfHSwVwnapsKYyTJtw12wZsF7QcZmuAcZm",
  "key6": "2kFjjNNr9LUncUSHEun8azc3D3vNAfAJ9v1cnUQShjGxCmkXRRzXk85DHjqMDG4vCA9gHxihEij7qdbUD2VWooHF",
  "key7": "2PPvVxFW6miWWN1XVc9UyZf1EN7yqybK9P7QA1Y6HKZFYfNVrcwwyiUBt33reMVezrfYZS5MQXUAH9AzGeCbBHJ4",
  "key8": "2RDuFErDARGcA78MTEZ6xwxH6ceNTDHq65HPp6hqN35GaGSo1bFKFGqX4FqidGYJ3XB5cWDQBhoqFcmXG68cwJyF",
  "key9": "2kfA91YEtVnksur1cxdxHpawbCqQksW53HBBtMfnfhJXDFwAZLynyuxN4XyjKCt62RLA1cJ6kr7zWnfBcGprwnT5",
  "key10": "4X2Ea78rs5Kpz62rstC3AbuBW9AgnupE9VGYsNupxuJ64pdFZY3ESeaN1RnJ338sWVDAHfbTDgyzf7JW9ddh8Z1a",
  "key11": "4og3ooryrmhzW5i7WGCaDxwadqWSEDNNnEMWiYSND7ttXYqMRcDAowZ1UaMHSUyjEsHZEQgdDV3xGhjUFxfnVvQP",
  "key12": "52ET6nQTH6wE2qcz8DRhZvJ5pPZGsm4ZM8qv6QMaDo5zsgvpdt3s33qk48ioqxJ4a5s8cyW5BYri9uxSLfkVQfUq",
  "key13": "4shue8WZPGocNwfgkRYLwuikhkTQPCNZyLZCbtKuRfZef2CJm28gDT7q3JwbgHaVnzmAXXpAivJvDuaMyzfjzy95",
  "key14": "48m46omyZ5LCWyGjXewqaP6LydHLKv2P4rGQk2kLNGYvcNXc8wi1tYzWCfwbq5MKfkGNfe4KiKet1K25x3xogHDu",
  "key15": "5pY2cF9EzKNnZajy69ZgqhMKGYjR4yCD1UUW5ZytCpTGupmBw4WUjab2kMvdsAq9M8Td9hdpFChs81NaqiUQtMdw",
  "key16": "2BPXwNMuYoipWvE3Dns3bf8238E7pXVgeee2eiKJ5dGGsqrTQ7Z6TBXRozBGwCYU2RCiYM2N6CDsgPrPdu2QDkjs",
  "key17": "4f5TQJj5VmsMC7ckA9MuVQXH6sNJH9kE716KwWu2G6u3XKteiNAdh8w4Xean3pqZpHdKM8Q6pFYhm39H3TSttzRV",
  "key18": "58RuqqmUYP9ULqc672TmGysUoP1CPifJY8QcQNirAzqBiGu5huAxibSyuZcT86TquJy7U7oKJK9EbLKVBbCU2ZNC",
  "key19": "3rPb7iNCfVy86oPxrxH54e9maXTbi1K5y1QY7E9HQ4Am8wx47p66JXqrhTofYNL5jNyz2o6ModnSKjH8kcn7UqAY",
  "key20": "3c1yxWRGTEnNgujTU2q8BYa7LAX87Vb7Fm8FxM7hgW2HekxBN2Fj1bPhozd6cExsKKFawpzEHoD9eChboUnoFeah",
  "key21": "5cXBx8VGcMB9CFGY2ts1CweXERqGkCnz8ZEPkJfZ26xvDB8ewfossCprMWC5Z7vFGBKSYjQmBPFMA2EdRmoa5voU",
  "key22": "41wr3hma3BGwVdWWWY7ptgvS8mq988z8TM2kinVDeLLxtoRuynV7LzivKcUJSyEWZ5sWb4sbu6GvmauZdniHhrVR",
  "key23": "3rvu6UX7ihKAqoxbPkSeWCfgys7q8VJp5CY2bRn42gtK6twafjjbPECfaJhvjwETfepk9fAQTAk3Aj9JoZovAZtH",
  "key24": "2sXY54kzKU2EVJXBzHyaknRSuyt3N4maE3xSFcT4dpioHvuvU731iCdmZ97Ckr8EgeaGTsbRVJKzkAx5sQsQdpes",
  "key25": "67VFBw7jhiTMpPu7ooZR8ynbDdCDf4BLkC38KySUcazBuXtNpML7hjpAcnbQXB1D3iamGMr9j1fyhrdFqZYJZbG9",
  "key26": "2PLyLcFURYUKJyqXkTPtif8RT4YbtXYirmVFRe55fegbQbiLdRDiJobgMnP7ZExcvT21kMinjHtk9GtVQTfYszXt",
  "key27": "5KQnY9iNr8awoK91td27BjsyMq7N9hPMcGGse7jTh2bz6u7RWHGctTkCeh3XTBzN6ewjX5yKCH38EAU6qCNqsPbQ"
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
