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
    "cJ8NWpt3jXd25srwsmZp9gMPBFeep7wub6KAngJMYNWAomcadFf9XPrVi5zrrybp22SiayV5aLJqq9MVTrSbz1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDnsve2vVirHdRWAoijhXz6zLu9hvdxFBudVxBvoGKsvTMQKeHkdnQQpWqgv9ue6SCZEjEnrZ19nD8fB3gELZSE",
  "key1": "52ghQPd63dfBjY744PqyF54s6iEU7AomxerQHRkZGdnfwFzksiUFpWpQsSsdvdh972uSohB5ffexJ2rJCDm3PSdk",
  "key2": "3bMWzikMPa8X4QL1vrAwVL15uaDNffFYkm7xFs9PM4bYgvq5cpKPbtp5DRnN5FhHRK4NaTxMByGuhWtYgtu6s3C1",
  "key3": "uL6kgcoLaCBgCm84kBg7bRxFse4gde5rwPR92kkCP3LgV2jzhP9BZnBiqczFNLwjAXi34GbgC4qngVvGdz3M2f8",
  "key4": "oUmh8e8UaXy7BRtVK9CivDXopy3odCz5gXjJhVKdfJhmrP6N1JYyBRfYd4DWUXMGNQCvkA6ACngNsoQjVg1KxHL",
  "key5": "d2Phti63xsCUFuW4tybg84vrzxK8YYVQiCvAAteFZz9SN2f4gCpQbnVAzYtaD8sKorjoG6gM11WmjuaXFbBCRYc",
  "key6": "45XLr5wJGEM6K1oFHpXDH6nzW3y7nF9aRz9Bv6w4AYeDXDJWr2WWMWFVAGz3cupggFeK49nqx3ZyGEgPcWCvr2Sm",
  "key7": "aZn6vxty29FdmjFtV9c7zzo5LPi8p3U6ZjkyorurjbDdpsPFz2Y8pbr7Yn5JHWTSzay1C8HoHxchmX6GWnV41Yu",
  "key8": "57spysAk5Q2VhGWqMR2mo8xn29rwX4m8BTRmMESnso7mzdZmQo1Maas8xH3rqNp2tVuE8LjrVhAYta6VSLkHFkTV",
  "key9": "2fhrYkeU5AALkueMcAaE4CErBCoTbp85F7pMvPtiRXkfsFCANmeSVgkvwLjB3Ev6SRxxVErERuqmRaWrutDNniPv",
  "key10": "4cW88f2AfgUxNF9qqMxUcga1hjTRyNXUp2mUPGrqSZ4WdGqnHKSKub44HrVZyWrSVCTt6iT92Qv7hFgcwt2otdHV",
  "key11": "4DDUBY9jYyKgqXEC3VQZNhon1zRZfB3LAGjd4wom1SFgUmKjfDdyZfwsKU4JBPFcyfqkWjJEcyP2FgCy24CdXZp8",
  "key12": "5yqjUhcwwUKiRSk6WVqMQL3FHe52niTLC3eewjPT8f3RyGA6zB7DJe8VqYEDxfuQkpbKaAf6mTxJ2wnNu14iSmeD",
  "key13": "4Pv5tHMSGqRHGvG12tjg9AAhTDrDinFzKhFjkUmRG1Pu7soNFWAsfWd35KzmgUJWmCqzLypjj9QBoFZsL6MahKTV",
  "key14": "3JLzHhKXBpTCTSmmkTyaJUCyB4CFJNRxyXbd8VJJD3fbUpsDAKz9YjAoNMSEPDMsHZczDDyC9gfceN1c12ZQYQ4S",
  "key15": "5yqxiWCiS8xCXPFdiEYwk8YkXBLakSzeT5jcH4WjGJNNggNP9KeA9REEqHmogJDHiCrmRZL3ZTaQoVUWxMDmZ5Q5",
  "key16": "3CEmgrNCZekoA1m7TyURF97GUPZvQrL4TGVpPJX387NSijWKPDLUfAGNUNVd3eWDFh9CZ1seEFvRexRAfJAzuJeH",
  "key17": "4JQXZNVn42Q8bgxcxNaz92EvLXEa8gs94oiuM95YUvJZhBoDLPEaah9WEPdpeHum8iZtbsMsSBWeRijKRim3rWwB",
  "key18": "2ZgJvrHXUp2q8Acu2EDxjfxgKzQe7oK2GfgNeFxAQom9g4jLsEg5oaqcB5Qezzvv9WCC1g9DnNkGneXVQYgqwJ3s",
  "key19": "5F3NYA1iW3zLVzU2XEmVd4uzMDN8o2cAxJ8WRygrKM6nmdMQJUQ3gVjm1zHHxRSzRQZ3Yfua6TvBCd6yzrkRyvnX",
  "key20": "xLminkMxhU1paDkyJfVyGPrRNYCusB39dW13cAKPLXMAjcjGuPQix8bfJgJUUJH52crihTekjG6Ngu31qKFm9ty",
  "key21": "5KuLBbqFcW56Wy6J79zWCRW9kFwk9t7dFmiBnZw1qBKQUW6tdFC3ofme5HVudscQHRgKjLr59mxtAxFNhoMdPnaa",
  "key22": "4rRmf1A4gnA8Xcms1JguZMXk5CU7hFUorocnQ8fmUh4uhic9XMhCR7bh4Rnm99zgZhCEB1W79pyJn3WqSk8VwNn3",
  "key23": "29CzRfw6ZxHJKSPsdunqtmVP7eyWwcnCMcD5tFsgLQxwSne7UwFALpcjCMeQ9srrGfjvRJAEtFTZhdtoLJCBhEvb",
  "key24": "21m4xpN58iAeVUJSjrAiS7WsJjkRmSHR9yBrz4H8uUp4DwchwXSkY5LH3NHrJtQKyELCZKNY8Ns1LvkCXFB4ppTi",
  "key25": "52k6rPzDdbSt5PjoQUSfxJz72JazVPf7BcWpYMGCqG2S685hW2VkpwATig4CLwNoLTmzd8cfk2Dcy27G6SLdwgn5",
  "key26": "67SDGCtxWshJTk5GYdn9srX68jjN6AVS5TQPwczCmTtB15h5M7FfrhaxRHgDg9zWAJwJ5knxuW8Lx8Lf3UpV1T1i",
  "key27": "5Bt44HXyfuoRL7gAPmQRhKXLKP4qxQY971dNG6bqnXyKxoizjx1rUp4W87mWbKYUP2jszvpFcD6FvtxBxgPoTAJP",
  "key28": "5qMaKMyLoZsG3wWrJzmcd1vZoL3XF1mvcZAixRLYcXNk8efqhN1c7v6StxHzVBJkRgS2TZxGFgNPK1TZwZKR6DpK",
  "key29": "KzeWocDKptWb8GkoLmAa4QHdSYxcQdXHQEtx1m1UreP1jqSeRUdRoPZXyynzFvupACWC694crRTc8RLKjxc9W7c",
  "key30": "3NCbpFR1x94ji5MPWFGRkMAhDv9NPZ5Tmug89Z1CvoufxRZG2ao1bru9z2eTP8iMX8N9iK7hn23rj2zq7NfCDBc7"
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
