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
    "5aPBddQrKX5Y8mHApUqBAEYWe77929B4Z2Ybuek7fwpnisAG4RL25Nsv2wkBCL7FvytoPh3b4NLokF7hqY1TSUBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k81XkMUvkDaf8zcDFdHMLfMpkK7HcdHeZMQjzQpuwbb45emwbV2csAC2vdfUDdrqVPuReK3MviWsYceBMtFAAJ4",
  "key1": "466Wvfro9ESXkgPDVUgxES64RnbhLWNTfcNtgWk2jwsmELGZUuGuB3ZD8bowmdwRptmshmPs7PkRL6JRARcpfQKU",
  "key2": "tPruxJ3XzgXhZzR5vjE3hRsQcGHr368r9N6j71XQUmYhEBAgMvBjk6rCJWkiQrmxQYFU374U6ppRLbjAxzVXHKd",
  "key3": "2usGakX2yeoXrDstYDNxWpMcT1PuG5HwCDveRjg4B7A6yCLYVsM4aDkpYq9M63LaXSmJ8mb6f63BkT5E5YZxmezK",
  "key4": "2zKBNAFYgiLAyxB4cHGW9VHne7i3uAMQ8eJwKds2qCxCZeCiZH19YFthuvCieAFqJWdCWw8JDx5JdjcTmAqHc2UZ",
  "key5": "4zyc7ooMNepzADYE4SGMNrCbD5qRJs5f6MoHWr9pY5QrC4ZnNC7hP1JRTaUyCzuvUDgn4Pe6BXxfxpaVEJV2xwJd",
  "key6": "vvT1DAu5LBFUnLPt2XDJNWqFs6qaY9X3xuLN5r5dvPTdV2dXGVN2xHVETkrdzP83nKra3Pe1LLAwduCznjaosWB",
  "key7": "9uUBRCrG4LHJPd6ZNjmATP7GatbSzLiQVB1gFRnwC1LnvrMJAx5breaekeLPRWd17v9A58H5Pi1uBxboZ61rVK3",
  "key8": "4MSqbYbRwTGxsDmQTLZwrDAAM56FDpy9WYpfhHRpBFwGijnnT9mjhiUs7jns3Vyvf9R9uLtrmrjduCanuPVPngLe",
  "key9": "2Bmu1RXQNBubfH9Jhvhrzh3QB6VLqzSWiXSaWkRFsnLWyVvvAG23ihh5GgbBC4RLm7uYwAcmLKhsF3m1HcoyWZjp",
  "key10": "Qo1b2TSnCmUGoKudexiBZNtFmDgZX7XSJdMU1wZXKVZsANNksUwDFkKQR6Jq4aVUn7sYqc47pa3sm21u7TmwgRp",
  "key11": "3qqgLDy5joVvEGpuE18MBskvDunpfphnEbkysExFjZoHLpmgZA3CLkH4wRCEtkWW3gNDBR2rCK9JLiQZVsoMULJH",
  "key12": "4BaCtGWKCEnJ16d31PqC7Rw8316o1QfmFdbo1gZ1PzeADKrLWH33JUptFxpdxq9g1Nrvbqm5gqhF6JxmZuWPHBu9",
  "key13": "2XRjMpfpVdAunCrjsFMxQ3mLyUt6gxH8rJFycVz3ViZXNGyHQHeh88CArFbvv7DM6iWp4FXjbDGSoXzXrCQKN9HH",
  "key14": "4cCYbnpd5dokogL9NRqXn28LhUxSKFfwg2NJTvxhPRN4i3PdS69EyGu7cqaw9a6G5K4qgcKDu6H9Sydb7rQ3r9TA",
  "key15": "5h6hfVrFGCLD5751JAcCCcSB3m8LPHRUq3bmLkGKhEAGiUg55HuzV5HCgnmvgb9PGMjPwstC6hCYzWasgcdg72FY",
  "key16": "4bzW7TGyQpc686JqqUVDNhU58QU3YusRRaZk7cW1E3c6JetCyKGfZg2U3fMfoakoWtnRr4CwK7WyzEVddRPCrAwg",
  "key17": "39BtaZsVUk1e5hRUYiTp8YQCSfR1HT3aoJfc6MscjYrvYmaoPrEboVSuNmujXGGXQ2qNvdvUP5d8kbGeRdM7ZdXc",
  "key18": "P8szFi17As9jEDhLucxvv61Qa577N2ivB3Uysvx6eNjqr6NrvRe1ZUCeuT1NgTTLHEdWfXtHS5hL5wHX9bSEVb6",
  "key19": "3DeSvaf5qKoabN9vBfZdAvPE6EV1s2SqNhS81v9SfLUs5AUtotnZyEpsQ9FZySxpkJ6uv4xtz9qEtjFB7p5VkTWY",
  "key20": "nyG6wiWoyeXV2PeTyXAmKSEsYuy6kNQoA9qsH4Zz6cEp9CU7noEaEDFFDVi3VGkbvudrfbGndyHF5b2XXp4EGM2",
  "key21": "5hWwhbxGc42H3ousK8AAYMVbobCiwnpLvokHYzzTtfMbmKLTmLdZt2LsmV6meAPx3G4GpsR8nH7ZUVRTcpQVAoRd",
  "key22": "21KjyvFwFEuwfnqm4a2R2Vk3KqVejAzmwVgwDqi5ADau4YrZyueekw8vwv3V7gcgZ55jfq4bUWENUyCdPC5KKufq",
  "key23": "2rP1TJbk6jyz8ZwnNKAGUQ4cyazQSJVkTuxj6gwFPPt3aoPwjgHUBhzznhGzgBzmxM9LZ7BoiWBvD3zvhw5yfAJp",
  "key24": "2Ab9aJt9buB87Qv9G8E4jSSKCsC2za3EyxDnMFwfaqWGMw9CQMDG1fFAMTeKaeaEHWhsRc7iAGwUqcMEztNsLzEr",
  "key25": "4YbWZ2g7vizXQNmsYyQWJ73PszGFZiV3cD8j2knFuYDzkAF17juH5ER9nau17ECZMe9ceQB4JJAZgGnT6wfVtQN9",
  "key26": "8mSFAjv9xNmxpGw6HutRNzjR8QAbDrgvWk73JtHqUb9vb1wPgk99Xs6PGfU1UCmaTU1aCuxoU3sXXZqTsqrsZWV",
  "key27": "4d4N5DZXzJjy2mA4yKsn85rkMos7tQy8Nwy5GYcpefb5z9T4sWjzjanNxJK24UauSN7RZvho7U5L1BMECBje8Ltq",
  "key28": "RzJ8VyNNopVaxWD6oRG4PqMsZSnABWmZK9qLpVE8E1hQja3xXLcwXqkwPhB9Pm7tE4eZsKwTPN9jmRszaw4fijJ",
  "key29": "4GWYimqS1RM4yJW9dT7xkVeTeZfEyB2i5twA3CaEsW6pUNbYYCjVuMd3TfSKucrXVe4Nn77ya8esDGtPK1h9kEic",
  "key30": "2a2NWxCYXQsY3n65msrvhs2NmWJebQr4ppT2Byts8Km3WixZrCWydDoE7hgePK6MsEYhLpPep3oatHi7qJSVkYtm",
  "key31": "2HHQmSZXJsggbQcDYcTjiy6Y4drwDZiBQatYQU1E5K6K4Lry2rFNxcY5nmYpqpV5VvHVzd5FE2vSjyUAJzczffd5",
  "key32": "5cGXxvrbph946xFyjyu3coohzDuU8QGgxEekTqnKZqK1vPzmWtusv5rsH5wpAkCa23ei1VktE3HLGmq9VgkAKSrV"
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
