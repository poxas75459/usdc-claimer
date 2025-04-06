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
    "4hqyFSF7nBuher2SVocUGEvh74LyEebdCW6MZLa9gQA6gbdVLNWBJ8YjWe8WUAPa5gU7GZAEMoS4TnU4SFa3yo63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5guRuYHhqmMEdyK4MKRfcJd2P9Z1733qk46SVFVdnY7LbXExuPDzF3tm6Yk2FftRN7uz9d59w9FeTq5kM7vMH5nV",
  "key1": "MikvKUUBCnWEQosGCVnZYPWKtJQ2bomLH8m4LVZKzeRgyNfYitgP37Pzqdw8ScK3ysfVCPdNHiLgGABrhNaa5fZ",
  "key2": "5eihNrGdsca9MaNxiBGfZcsqQdXwrPCQLmcLHur2n8z9EyQx12rwdBdxXohsykbSGKsZ11Dk14kn88fRf8iRbpQH",
  "key3": "MJ9yeNm8Ndrpwgz8Ark3JcXmW7n9C4EHFgJzgqmDZFsHH61zAKC7Hp37N5Y16DAyw8JdVEHVhEBwUhTxaFddiWo",
  "key4": "2WnHiN669qDN6L6RH57kkAdf94vYARyEFbPjvAEPXAy9vi2tdgRo5ivKzvMgUySBNzoSErgj62ho27aS6ywHwJZT",
  "key5": "3SscYYR6Hr44Upx5bZ1Z1Gc1RzLiiCXFi1rDrYibLtw79y6ogeVZWTP6gQMAMMg2PZf139K18AFm6ENXCE7ExWjW",
  "key6": "4UJJmmiD5upipQHTKCj3SMC9RipPVh145wRrtrXuLu6fiC3jvxvC5b8mWUCfNakNW7NavPwfXYsYvEgASWuNCHrj",
  "key7": "63v6D7HM8q4r5MdwjBwRya8DHqJsDtpDDoTNmZv9q8xkVibNMtaquVn96K9qdTTNifk3wdB3o1uZhHqEpcuT5z7Z",
  "key8": "61tGf3mgz2cnLXq9kE2SoGTBvnaau7qAKfwHWbbR86UjA8Y6N7rWXov1nTHzBpVtfEdyCtAWyb5cJW1sy47LYWtg",
  "key9": "3qw7T1YX5xZrkpfEB7rGBwVPijS5QYmg7oK3SpTr8eGSsnmCLUTXtpe53rDRReEszG7BBY95VmygYtyiSVzT9LQE",
  "key10": "yBgoBYb1erTBuV9kJBmRvee4z1NVcYDBNAp1nx6LQ5jLAQK6XbAeHbWdg33tWNZusqyVHAtKKArGQmLdNxGcAnv",
  "key11": "cLEsqrBxz6ZUKimEUuKncHqNX1Nuv4ckMFpLryLfsYLSnCWN9qaehd5PBxMg7ZALSMJ6Bh2CsfnZZyWMsA9jcCD",
  "key12": "5ArnLJZr7qbE9t8ZuMdegcxhqxFyBni94nHQjcR6KPqyC6zgUaq2cYpdq6K9gZBfVVHkZ3kSZnj9qqLgTUUcVUKh",
  "key13": "3LEzsAHdAFtkKfqDgcPYg4NH26x9TJ36ZBCQoG31eHrYeeJvH6kbpCazEhyCnLtriEK2fp7gmcBuzVe2HHfymNyz",
  "key14": "2VzCs2cbZcceE5GejMs8ydYb2abEQ9w7ePHxch2VzQWSgu8ewPGMUm92sVMEbzfBLRSEkzsRojvws96CwEVUh3F4",
  "key15": "TuonkoXVRPWiu3Vd2RniGVTnLhYRyE4Lb9DhiqpxDgiBcWR2r7Ki21ZZdMttQjjdzywViokjQbqTDwQoTnDBBLF",
  "key16": "2tCRFVE4DHg7FizohiZcU3kqeioe6pimW2AQqE42u7ceRuUoySyY6SfsNM7yV3ATjXBrCF92M4RSU5Db9AqAJzSm",
  "key17": "4phFQPLZitGyKvLFSGfF5XT85iUkGgrGxqJTxm8UfrrnS1cKuZhfVarrgjGhwBzK7FjCadL5hAZtTh3inYCd8gLv",
  "key18": "4Afj4nveZgU4Me6kS3xbKiVkK2YWxFaYE9ZViaXPt85p2eeV1QzVPAvazKSEeeShkpd2osUJr8ZCZkbJbPi2iny",
  "key19": "4ZsFgzRuJB6Rg1AgTXzwZB4m7Q4TYKWjEQsUYffF34Zvp8LrfyPL3cwmGhRytAtKE8zswspAbCUJLwtHSuZDExD8",
  "key20": "3fPhzMoWvbeXj4zKbjigpwu2LTyhvsWaYw6AWvqUtV1ShSpEV5MuGXdSScdUTQ4pQieaweiYE5STsAXjMGp1wtCB",
  "key21": "3ktodhU3kXHENioCqpcYfVDHVFKH3AL4usUpZrrdFDieFpqzxJCRktDxF8cX2FyQdJJ83Rb4wxetd4NEqZ3wLoiD",
  "key22": "Mbs9eCdbiHbrPRcrp7MffLj6xTnPdm5ThyDBHEsiQzNGQRMQtHxqcJ8e24bh9QRTQp73JQHtkkwbtLJ9MCV6PTo",
  "key23": "5gPiqNkU4WNKZGMXwvcCiVbke2wEqHXiCtSQk4JSj7Zh7vgwqZRjuAhtQCAoaWcVvAjES5s9LBFxTjTe4NJBXjMx",
  "key24": "4CuMZD7vyCT1N7CGubtVBVdYMUwpofb7fiWKJMxYVVVHqZcvCDqKPo6rAYd2FVw27Jm8AVvoxDneMrsptWQK5L3U",
  "key25": "5oWbDutQBwR1GjPe81KSTYauHDBsGw8ZArDbBxmM1823SNravs3yQFe82YSsVXdwV8VASr4xv8uRFLy91bissFUy",
  "key26": "4GgaX99MZ3bvQscjQ1hfCXMKondL2b2qUQpRebdbUzfmjh9M8vJY7ApEfL41XKoCnzsFtoSh6kxm3AXprZDP7dfG",
  "key27": "3sy5Xd4yVEEbBXZwDmuyfB6jWCQryAqXkVtjTbYGbwGcSNd4F2kH32sSuwEYCPGhx3gg2xLZq54jdg8aSzPQvJt3",
  "key28": "4d1SYxMZuJvFjEm5cGfQ64YdhsaL4nHNYxYF2gjbv1YCAhi9baRMe94ZfUQkarneNm6FZJ4imekuVtEzBoiiWhWK",
  "key29": "24rnBMSZnm3rL5oTcUCfQ79DbzxGU7hjXsbjwM53s19kQVFB2qE8Uf6Unsiu7UM7ZW3nECyL8GJewirrU59ebFwJ",
  "key30": "3jUGMo9Je2j3paexpgzgM2wyyxPMafYFBR5ihwsc39fnNAJSpoftG5cSwZ1P5o7pTpbUkBNCZjpPdUbrgeqy29Cm",
  "key31": "BiEB5aHVBnGUwkYgDr52d4WvbGonhexX1ieVpikpuDSSgFeMX2CHHbr4c4Uxr6ZHsctKEf2SsSctMBNqi4McGox",
  "key32": "gAMn7AUTCESjFGE2KnUvE1Ug1n8UoLBaHAu3MvKwnt5KWmdUNDiSzqjt2zuysZFhxVJ4WgVxrxGaz9APK5F47Ug",
  "key33": "5ubbzLRc9pHFiZcF88CorNZxTiepVEc8bN4v5CJAhyFJ2o8nuqkNcT2LHdq38rE1LzMrMeVvsTCNwJY6xyWQoRDA",
  "key34": "j1QkEDF8UizwDD8iG7P93ogBShEeLN9GSihGjjL9vZMzTE1nQbueohtSipKA3G7xpEz35au4RcpU8UcqSiHJQgb"
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
