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
    "4cbCAgmfzWjeuR1eaUCY5sFqdH8tWmcLdoGjgS7E6FqPQD7bjmSAcRLPY1zFj7txYy5c79vqoGAC6H3r8PxiDDSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZG2wugzJga96HStjCrTMmaMXc9UYvyQVjpznYWBWFsUT8caJrBtooTskpdUVvqPn86vVKxFAQAoZKgRzr3UcuV",
  "key1": "2d4WbjGQj3NMcz8Z68JC7EnBNEr9dRiRiYWqm5xMWh5tDMBkJbWFKBsHcdX3TgjrdJoYQaBC5MYhCW3FT9dpuko2",
  "key2": "424yzQuhUeojsUksMpHbEes8DicAjZdd5ttNRGWvKBn5tk2MUKaohLGPpvoW2nXibxfCkDeiaSsveaX8194Bi2cQ",
  "key3": "4BkA6eoncd6S4hP3VFBg9pJmfhCTX6W3jJweHcv3RTrnvUM1S6WcWfSu4rY35QdrvKm2WcUYic69ZayS8keE15or",
  "key4": "2qdRiyHUzJixxALG6KZuu7t9jvuEuv8xceagK5beHc8ZtC4JzyZUqQBMQsK6FaXze2BHNFJFRBKLsB6dTo6Qk9A8",
  "key5": "4TN16jNwMcFBaaX6wUyvFUAKuxgGPT9dCe1V44fYtvdpwwRSZbSymz8PJksNhfXPqFUa8LkHh4gPbCkbmWFNAkN5",
  "key6": "5bdAkuj4z7d4f3xntNntERQW6u9joh2PGMJsAbPNgtnHBFMTeemJws7t6rbJ6hNP5uRkXrWttW3G73kpGLbQt94d",
  "key7": "3uoSknewboQdBQyFgApqTHkQuDjk9CdSuaSo81VbLDK75AhubNDRK5mpUwmKBpbkx6zNtRyGYC1yJPcGPAbT7qxw",
  "key8": "2qYwKhmkysV29qXmG8uaAYBAkZGChpVTqbBvvWhDfD3PFU8mtD1MgXhVtrg4C6zMo7PZ753y18WrE1ZoAXjfy3ZH",
  "key9": "3deTc5y2Y5qyAZEzMN3Brv6NfcSr9cYPuavCdw4KAtegYgGC2SRzyPzCtoy1jCeEBFSgmesgSNSFVu3zAMGnxWAP",
  "key10": "qmPfUqse24b7JUr66Q4geVLQrojQbhrh4dP1dzhueoTpEkmCx9FSmjWk5ZNRhcBSzHKiHfCtN2QYiWgbvZC6z8X",
  "key11": "ho1hhw9epb1ucmZ5kHKqJr9e5F9twxGUTH6qB6WN4FNiPCTnYD6e3L3iHqWWpbk2LofnHSK9FgDKXg1BReo8V6W",
  "key12": "3n37BZTcGNjJtYAaxCTuNmz5YDTgaePeXxnjDAieSehTGgzRDjsGJaF6N2wjDnGcxSVR4qd649ywnCXHp1aHUi5n",
  "key13": "T2eJ26mioRu4U91NHZZPPt9PJ2VRhiEJFp7Pdk6YXVPqDW2aSrZX144gkEXMcQ7eZfz17VqerqZdTNCrjF9PfPm",
  "key14": "2zWuUkd9DoWfADKuAK1S6iToQXRK2vbnESz6QR4qSRpsLbDsWBrYW4Mpc6vZZgMXAJ7QYK3HzMEpWdfXgyETgRzs",
  "key15": "uGoodyosKyaqWtLW51C4s9PWXTDpWA69BZbAEKQzdpeWCiMnTGWywJw1kWEvBtRMYDN377eeUcixCm6ee8PLpJ9",
  "key16": "5ivwqy2UoovVYMqhfRqPpmjsmSpNhRhrnRKNTNxiMQWomoGjiwsqeZTiKzVoapDEpSFSRgNfLYk7b5a8uZ1Sgnum",
  "key17": "2NQjtCa8RAJoH1UMwmXThrPRPXxyRhjFv4S83yoAoybpx8Wxnw5pqz2u2jGewjtf6nM95LnJcAHk7ukuRkEK5wTc",
  "key18": "4M5mkgviwz7RZyVvy3bFQUAKfqpts6Rh5kJiaF3XDnKVBB1mFAMxpM9gMvoL2rJZuaAyrnAXcBWUbpqvasg5wkK1",
  "key19": "4yJA9Rzn2DSPtNbfCSLUfeBitNgJCQrDm9DAKuQFGtG8aGhPBnXYEHFXW9vjRHD92EwfQUp1U2eLdZcATDwFyUDR",
  "key20": "2aeNHr599NefF7zCrrMuyjuZCAY193vi1rq8iummQnHJyygrtjSaSGM88xUKAu37uVXYGWAT9Lr5DCKJ1fMRKbEm",
  "key21": "t7kxMkiMkEuTksSiyetV5bHpixyAkrLgFM91suBn8U4x4e9a381rPBMvmoExmKxSGVvhTEe6vtvd6ymLgUDCkA6",
  "key22": "26pKMGbEQpEb9W7SPRTyTb7U1oc9d3VphgtiJz1ypjnF9kriUT7SuMr1DzAeSh8oX2TFXsx31BiCJavQhx9iCeKQ",
  "key23": "HNGoxyQkLJ7is8bh46ZJpvprWdmt6mYgfLT5c1oAjJ6X5CFt2hsJdFJG1BrMSATXUvY9GfmUa7rDkUJviFrHqwG",
  "key24": "2KefGkpz1TBr6u9Nt5HuuCiPwhodnePu5nwmD43YYMEew9SNpMvQvDjYiy39dYMfzmFXo9wF8RT7scjjPBNa3Qea",
  "key25": "3wvpX89SktVCbCyzEj2TQ5PAtsKnAqAuUjwDBrDyWaQBQexax7Chb9BHGmgEgHzJXGJozv2QBR15Mz4kBFQejcHU",
  "key26": "3WgBm7AuWtzVasZwexyZTvqzDoLHqotUWJZaxsU2rja3umF7YxKPRkg83UxKvxAiE3k5C2SPCRQPqwDrP6DnH8sL",
  "key27": "54g7RMNTH7iXbr3MBZDkToLRmFZcCHXKohnG5sjZYEDJNd3mcXL9k2i1xgecKnE4Gx7ayHvn6A1iq7X6QGSbq83A",
  "key28": "7YTjs2K2cFFvux6xyUctRoEnxqG4wX3SkvFyQgJkh1sMzZ57W89krabbYzB9HPXSeBBoKCimy9ECvt8SgAjWtyb",
  "key29": "2XG1CdbSyJ7Y8gFru3BNhjnB7ahWZqTeZS4veZqSoQQwY9946F42Mo934J4DJFLNFazaLQguQ8HA1kR8UtPsXkPG",
  "key30": "5cuNHcaxCy6hjPChXwNpnJdsBkowfShRxeMcYPCCCAwyeYqWnXRCDU7erxNww4Gy5JZekNoPAwHUFKqHHtnJxpzP",
  "key31": "69gJMobkG8hZbFAAVqTsEc5yxbeG2AGpwEHVWfniK3MAi2D6rtJXVvMdkWgTcGvRFqzC3y6eQ8fFdgoru6tjjxP",
  "key32": "4YBwCga8aiyAekRErC4YjHDVRy93Shm1JnNB4hHBhpaVb18it2HaEtUiUcVQR1DQ8EW7DjdmBu34EkWDA39tSy7P",
  "key33": "3eMGDRE7K3chCEEwwbQdBbP3euYTYRZwi7bTzXQRbj1fKqG2sfzSCQpbEHbCZhnUNFs6nt9Suh6E6oLFbfRf1b2v",
  "key34": "3Wm6PfLMU5GNtk8Yojby8FoGZyhtg5qVdJCywm95CPwJX5fKYbq1dRJyL32XSMFinnQjCNVPAKQKg6usz5R6ZnuH",
  "key35": "5a2SRVZMUeZ3KGXJFV77mrvrCzJ273kuH9hwFkZP3cKLpVkb4ofQdbCi2GXgwrkTxT6MsaGA2cUq8UUTKEdv9eDE",
  "key36": "qwUjUo6KxeAwi3bjApMjsPjod9GSv2huacRKZvCseYG93tBfqTdGzd5eB4GtaS4jhJXv2k9BTibtGB468zbuikN",
  "key37": "3qZW6jnuJW6iuhqxe3NBr7dBwJBRYK5Cp2StvHYyTctDacthqbS8EQnxLMgU43ysqeWVGgRpxhXVTTXFLXHDdH8",
  "key38": "5zwH5ynFAspgxzdR1TAye4nZGiRATyKkNH5YD6a3rPfzatyoxhSCx5xg9d2gLTowBnUfYP47LLsJMkMm3QsSGb2k",
  "key39": "3V1XG2f8c93xvgs2rMxdYJGGipFFRv6R1jURL96rTgLLau4jBM1DgFnmenVWesvsbaiqLPbZU1TxfTRLhZhD8WWm",
  "key40": "5PnTN5iBYfqQBbr5gQ75Y4EmsAoAT4U6kgbGQPodV1Uf1yRtPzXr8KFc6PLCPAM6V1F74burDM9vXSGbgNpdTxW9",
  "key41": "4P5YUxDGmGMpTyHrjQtF22x8UEjghaVv7pREqqiu9TuR6ZwYxLdcXRULpUrPXzBETaMoLCvWadsgYRMF3xxtEuj4"
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
