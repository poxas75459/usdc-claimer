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
    "24ZLjL3eG4f2j7tZB4S2gv6EndPWySsrzsp9WqVaPrwzUaTrojPpLoknLqfPmAAmW7J77Qu4DKVZgQQr5ZhftY12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MwZG3qgXENJwzZjzi41BB2X7cHuEgPJGKvBnyjq7E7JqmAxdkRpKCGnQECATTEA5TgdiVHrMMNP6BcJWvrkLq2",
  "key1": "5kr9oZJ9BzTW5Bq3VA8gj76h9HJLVgU92Hz6bgek8GfSGmMze6eDR4BnguHfNz1U2GgcwLmSsKniD5TB8j9GVUWB",
  "key2": "jPYCL7uq4kU1zF5eSP226kGEK5NABD9QtaG5z6qNETV4GZP6tv3NhDCAnN3QVinjagM2omgBs3oADTrjSu8aRLj",
  "key3": "4tbi2pqX293utfi5CVkdvPdAdoH3ms8LxouPHviH33RSnLZAcw1E8A9nCNnCwBrkmLht9HWqbBzmoJ67Du85bPun",
  "key4": "669nTVg5sBGw89eYF4Gh3AzpupSsDbud7zAp7sWd4Qu4gjESM2g4MSpCBh3WffGRdz2ac4BRRCeVuMmat1wPmSYY",
  "key5": "47QQtKBFeXwFSM9DhGUDj7x76NVMTbvhLSzhk6HbEPAgDKaDHmrK1CM8UAsfVthBNVBduKNqdB7CRPiztAiguyoo",
  "key6": "JdN4abS6kQdmVo9gZSgp7tg6pXYcET5CRzgGcVrmiwZbwWUvsQbeVnWuHkNWMAeJ4aJvfKVMAsvy5UhhiVH4RT6",
  "key7": "3aBxbiZBo4voTYvdpMMLFSGqWbPs3FjnbARTEf64JxEzuGV9ji4UEiaSw5HFPDG4Wn9YZBJw1de9K9goX7zLawR1",
  "key8": "4XBEFtJ3HACSwqm9KBUmVWkZQm4LnNEDnsULxsPLKUXJgdDSzuNLwAoqButsgSkA2atBewsTwcL44TsCJjf9k1VY",
  "key9": "2n9Q6P7erkZuzcBnP69RfS2u3958rg9KRidQkQppiCwB9Q2PVUmJq1S8653Xrm1KYJhFZ7NcBg4NndvtDShh96wP",
  "key10": "34qwSYnG7yWsqwj3JF9hZ3MwC62SJJfxepNq4KZkEUhdyXPtpiZZKYuwFxMbJiQVL7BzUHFEuf94aZiuCcbxxfh8",
  "key11": "25VVkcashsGNcAwGEteUY2M9PQghYvQsMeXJoxcNBUokhjZ6imEBRArLHYkPhieZ5d9AQr92NCG3U6P4AenzyVGS",
  "key12": "5bJtpp7coTNgkSLHUi85rL5xYVGJpfJmNeyV8ote9e5ko4sCYp8pwY29rgN49uFkLKJvL96UwLXoT2EBopV4UaD7",
  "key13": "4yHiGbMy6CLtsuincWW6xKGXHx7eLrsmnpAGLtrK9HSp1zyJ7hR1SEcRSKBwXoHxqYVBzJML7wLXRWognDtJemk5",
  "key14": "3pbkuL8eCYQMXpK6bfQ4beepmvro36TgF2ZZGL2KYUFhMr55Kc2CY3AUxRDc3bQTp8RvmgVR1XjhkJq5mLj5N1kW",
  "key15": "4boYDMMcSyueohFAZK6xhFmAd7a9eTFLzDfDzek6QV6PXPsZdWopdJUsA3nqHxycM6EwiPsi9wFLtwAhuv8UsHC9",
  "key16": "49mA1Gk6MoAqJnm2XR7cRmM3XCh5p4QtPVHFg5Bu7VW8tBvYU4aj7uvVS99JaYqsCKnXPKgbZLELMcJ4tvGzzHVT",
  "key17": "2TGB6beFRJs5pc4FKUw9wGVeGHK31L4EC23WboDo3FNtKP2NVZKUMMVdZtrbnaUqisR9FNRzXj6fFTwXxg8aBKDM",
  "key18": "5DE7XfwWsBVyDAWpHYgX9DcFzAiTNGPXhUim1N7gv7CLShdpD7KFRTdqZuRHKZYwztfrkh6g3UhhsAmUCnmFtqVk",
  "key19": "4qnmiERfw5n6x2oyaBa6mrTYqMGVbaLtsThPkRjQP1qhgoctCuhz1Me6cxcKJLX6DrKjriZacogiuL6ATWE7DKSf",
  "key20": "4FM3VeZkzgBapgaRcb9zeG517XLRvnAQ2R9TFXwaCYpcsXtpy2Lqubqzh5JoriVvaDXbTtsqFhsfsxYvhbgNXN4G",
  "key21": "3sne8SEygcsjFx9YgZ6MQoJf8SgMBmj4kdaDNZzgsXzEZsvS7ipP4abBAZRJoVgG5jAgdmnyDjzsdHXBKtKkLGDt",
  "key22": "2DHdQLLiQMnT59kUZoTdWp5nPxkPqnQRUdePfoP2V7KfL4eDybNWw8KWbCk21YxU1bNScJfgkJLoAoFjHAiqA9Mm",
  "key23": "3dbkNSUFhFGs9XhLxfymUPcYyASZhLHhN26FdLhJ5bbQovia7McnRqk9WUnMnywWWPFQ3GbQq17Wr6oUXkLExvkH",
  "key24": "66sjRQJGXjG7sr6dA9QWcrg9mv6qdgiKAeo78k6te9w3v4U74ez79TXp9iqP8sgNisvF2gwZnwskTkkkMky8HAGq",
  "key25": "ZdwTCD5wRc9hdTmZeZARD6sxPpRZQTY5r3VhLQTJAnSsCaLGx836aCUJu92Q5zBC1YSuSW1LBN2U9959x86Jcqd",
  "key26": "3fz6q3rhscypQDLXqJ9Fje9b4cC1HD2JLTcD1rrmFASDEsXuQxJXqsPUZ7NtRQHCHeCFnhowBMSNH9PKWsMBJJst",
  "key27": "4F8RRyjR4b4G9nt2Fos77PL5kxLVHDVUYbUUNn1HE2BYwp4TqmjQCsHmSnwc1TCorp4GaynLzjrUJcgHzQjQ1Ayx",
  "key28": "o4uYqn3VzYbij9MDDYTajhmqpovjiNc2uJKwYBVVbZDZkL2vaX94rHQqdvuViNnXEkSW1EVT7hKyyVEwauCuvMp",
  "key29": "4VwmfqMFotTth85uyG8CsP9nUCxcUg23qBeFztNkDrRq2pKeC71QhCVXnEaHV5o6HPqo1b5VqjaaU3vdv9DWCXs2",
  "key30": "4K15ysfe4NsB9CUkkw7xYPaZ2ds58axqkCbPe91t6MGZdoCkqEZF61KD9i9Br7PKxwAQBt8Ro4KrLNRcP2ZNBYA7",
  "key31": "3K6NgXW4FqQ6ndVhdhY6qf7njB59MK2fGsqw8danLAu2vkjKTfTHfyce5eokymHkUFzPm1fJn1c4ovUrQ9LZn7Fw",
  "key32": "Ce26PeR2jGz4buv86VLSYtDXhxjn7pmVk5jy5y4mcGLw4ZghWiiwndo3AGgzSpkk3q42upvVWbGBtKYwQP554Tg",
  "key33": "25QcQW7ujfbwnFG6MDoghAQryxriztLJ4vt6dLFYLEJ7LxbeyHZctMRMoLfhm3nvRKRQNNK3PZB4Qe5Q4h8VbzxN",
  "key34": "43RRG77yQfmoUbbxhheUpFsogFRDLRXMtSQmsn5ysnhJokdFhnXPrDYQNke6b4Qh1G5pHAZarW2WS4nHXb9TZSvc",
  "key35": "4GVbP3sn3ZCedvaG9VET8daDBXXu9ggmZHfzqZf2WFC9rLfmacdzNoaougCygZoTaVRbziHWXCxrW1qNSQJ9eRAi",
  "key36": "2xz4LEZmacZ1Y5iZBJTavhhyVFNHbFbm3x9xNRxzvi9RW9wRt5ek3LKVoodyHNFr2ReHQ6DHAkYBsdyxfJ2tzZxt",
  "key37": "K3GeKRdXDJ2ShUaUhsu1CgpfCcosfqFYoqna5acaiZUC5mEHjetGfXggiiGBPicDYNbWxmb9AHVx5Pkf3yFXPSx",
  "key38": "5bR7oeaHSUL5MJkVqd6aVbwKw27RPC1anx4K3axwGhCMzcGD6hEL6RxqW51oNRvSihPsQoVrc8ESpDMxX7ouwwdP",
  "key39": "48rxRdo2BXYSgWnX2VFHYmZJVeyABfY6rUCGiLvkW9u46NUj6dREDH5wKg2tDBG7SsxJM9VSzZeUCKxreaZCt1N5",
  "key40": "K9BiAvMrZnxTKHaBuKhxcuRgXqHs9Pyu4e1ZyaAK8k4PB5AMAuoGwFJBN2xybTnPStQD2RqwfsshxwLQyhMXNg6",
  "key41": "4sT9VG9PwJbn9TDSGT4h3LeMYMixATkJkw7gnFHorDEt43s29AqjhJB1hcvBpz8rNFTt497JXKBQ4jDaAKhcmWzJ"
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
