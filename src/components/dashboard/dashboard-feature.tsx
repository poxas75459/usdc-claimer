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
    "2qWAuic18MqZcGGooeMPpTkrh2kwvHG2d1XCdowjJFyzkyqGBAPLM8t9Gj8kXVSZrEY159jSw6smgdX9QoVFcxkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gaCxwxbtC7p6XsFgmjUFfGXq76FBjEerjprRRYsR9m4PM9b8d6MPbD5UKNuPC7NFnsXr1x5NBTc6gLNePGbZTT",
  "key1": "2pPKUa9EPrzFhs1Bx7j4GZNoft4XWTKrN9SiG48yifCRzv93WRDccd89UwtkbyPwqXyitmEf2buSh6bDjSpFKCj1",
  "key2": "35DxdEQsUpL84afDgzsUsjKYFNzvHZZ2MdwdfR49A1MVB6oJ5bzxxsvBm5jViF6Ty5C62htRqUyBizJ77XWw2NbV",
  "key3": "w143bQGWovL6qjEpBRc7KWuwK8aLMA6zdYTnnnFR9PSDFUd7w6w59x8RJ7hJSapbAvm78wfZ5rZjxKovZt1aoAa",
  "key4": "4UTkwTe981tyDAp2V2P3ewvDW6GieumqqnXSNob2kdMx7gp3mGjgS3sH4o3qX5W7pMxcR1pSyFWGsQ1o3grjSSLg",
  "key5": "4rF8RrKHDGD47334cFrUXNk8TWjSmuHPb7FFzZM9R31beRDxdXZXQUgbPV7FqZJr8BktcUUMB5wXjouXHwkRnbhd",
  "key6": "66c6KcgPhfYDLNbsKWaM6ggXEbcaqJYUHBsRdzuTwPjRRXp8Vxz41GqkvmzBGD44cs7PMhWpFGGecmtHCpcvDYnc",
  "key7": "56uu2HwD6S5dHyGKPzE8cAprLrMCvm1h22rvcvqK8ueRt56xXKecZUVVz9AtmQtsD12kiZjHYaoZdjBQTTa83dY2",
  "key8": "3E6iWcMWSmK7C99TTfsCwksLMgc4qs5dCg3C5B2yjP4ciwES5erHV14PP2TK31cd3ZtExfuMRJosQPod3YELFseW",
  "key9": "3op6bzvoADXFxkMGjFJ2ZD4KeJqM9gcUcsXyBNTLxM9BKVL4nih5TTfhEXVZKU5J4HKmRFXsJPJAPUd6fkX3HvAu",
  "key10": "2CcEJFXaPct9wuGHktwcW6oYiJy3FmHEWvXXg9vNfV9LPAEMTXfS27fYx65iEvqRKDBWvpyzknSujzVZXCnvtMh4",
  "key11": "2LFjDCUTA6G917NmxMuk5MTm27bsFsbW1ebDREgz7BeyCvTLuPQX7jMf7xnFWcsq1szU6fa9j5A7LkpCSUSCXNX6",
  "key12": "rBSqThyPsG6ZBDTW8vyWAx4ZSET1WvkfcBvCwQCuUgwmJtxUR8bAjoAwftwgCYJHwCgRCVE37QA3CESNZnKwRHB",
  "key13": "2fbbaFk2uxCGJgnbHraYZnKcCbSADVqKvX8MZ6BCFvMFo5ReL1rh9K5WJd7QitPz2MH8zEpQ7Bjmg9GTP55XEXoe",
  "key14": "2D2ziaCcDyLzP4EkoyKMQ4yQJVMXK7rZoWvc1wAj7nr3nxfzzNaGRFNoYVsDvikt7tvpCWMn2ia2xUqRJD13v1t5",
  "key15": "4umWneuTuDaDyhBXznRSBGKYUEuhht1FxPBRc3msqfMg76qqL6vgw4w6jaMVtRS9kS7nQduSh2dL1vQMV59QTkka",
  "key16": "5TyDxxiG543cVcVHd6GBX3bXLyGekuzLN5DpqdRBj8mi2e42gezrx5osMdKxXrprfCNyGLQpS31huep4yDUdsfcV",
  "key17": "2s7NzmxK2svsxBFdPBcDBr5ZvrypoSBTUXJCY2rGw35wif6iNvj9KJn3ttiptN1hSGuURA5ywnkdgXKUJCeAk59c",
  "key18": "5K9c8k9wwucz6djEJbN1qR8yFYCBLYqZ18pS2Wz5VJjb31tAYmCzRrwDhN43a4wNRx3t5eZdpA6KYRbNdonHwNYf",
  "key19": "3bjMxDzKhAyZ7EHeDTG4SsTHrn93wLCmwEWq3VvsBmThtt67V3p5ZULvcADkdStDMzX1Qq5b5cmkwzgCxH7ToU44",
  "key20": "gkSvqDrc1T3xMNaDnhtji4npcizjFmioT5R5Ejb8QNP3PoQzEjSnM8VUXLWMR16Agkd3DxkzgL4YsDNX4KXx83K",
  "key21": "4bTaw7cYz8Cs8kR7wEzcqxtDNkGTGr8gSUHebYfMzHhvAMGJ4XhAhwgM9akejLvuboZ17uvkDy2dqoDp6MbeGnTH",
  "key22": "rYtiGGCp18GfksCrSRdafENwPEPKS7yc8yLd61iVJ17eoTcUKbn3cWbK8vpDwUDfj3mSsPnSZEXKwM1RL3Bu2tY",
  "key23": "6PrnibWURRJZMuDGNWHCzoj7d2TS5UA8kwSTMd9Au1k37CVNR3yqxfJGRx9JaxAkGRnY7sJVYnuQTpH19WovC3k",
  "key24": "5ospdqRLUiC96FKEfwZ19cA3Lh2cemMHo66bQcDNDrCjA8A4C9xbXZUUeNNQbS8FgRsdxyugopUkByXrfKUcM7ky",
  "key25": "2xHrJmwu98ANbbx2MpSRgQ1iGwAKmEXCs2UWqF8D67K4c1qTv2xTACcwTkYDLF8oJzdWdyrjkgmz2WB72Jv9oS21",
  "key26": "5g4gZnjE2zaptf6UVRofarMLH2AtkP3hL4DqZdm2jD5hzXEUFofpQePKBbyNNoaKpQmDBKQZnk5TbW3jP7WVWkF9"
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
