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
    "tMMuj8gwr4zQx3bRzLmiER4QXkjqj2MCxyLP4DbtK17nVyb4Mvx7K7Xub4jehNiJjkQCXRUhaF5FRvQ7fqzayzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aD2dmmLdTTDzQRpHBphHjSFbj5NLP3NjEhpSVs3zHWiErVL7s2Pks1rUSpAQ7MTiKVqLomRp8Qv3jYrYtK5F4mD",
  "key1": "51SbXJHty1SwsAFnjXDk6HhvVMMvsu4Wxf9ifyyJ5Szdp7fmHUYJinzNCbmJRDpCN52U5eWg2WjJF3pNuEirmrRc",
  "key2": "FDN5qoposPGQsjKVaLQih7T35SxVhUPF62QKtzyohYotrD1wHe6GWDvzjKvXVrHjfwMT38fvKoqbHsYPciuPNuC",
  "key3": "56MozUF13tDx8zgNoAACm2rkSfH7fQRyiVFqpGDsYqPShXxrX3zQH9VxMpg8m2aziEvFwusa6LXPm7eviVQTKD8q",
  "key4": "55ihLuzu2DUSBMwVSrtdNBntkMpwXEhrSyP42HDxPhh3ekBCD9nULtJRwrZrPKyd32LpBjP15DvnD2JQdYutW6hc",
  "key5": "bk8tMi1iAFkXe3bdnX8cB3VQcJ1Fq9qBH66usA4Buyn5G3aHRzjMczxh3UWx1GwmNB84VMqS2jAutWM8LArD1sv",
  "key6": "5qFnckSCmXw78SZb3uPXJzqwxeZ67cCFq7gqwPMp1ZxG3qZe6FzyPzYwQTo1UJbEHBAXxGhhM78cJY12yn4knwFh",
  "key7": "4MGmAArkLrxvkyMxuuytrnQPkivHgL69YYBV4FtBAgXWokNsw9WyCMyD26qhV36hrQLA5SKoDz63d1N9jbHAbJbx",
  "key8": "JV8gZkboNJCxzLgSVNE1TqmzfUpovtuT9HXXJx4G32jZYKdC2ba5CR7KMbnnk6AyJzzBQYMwK5np4cRvbXUVd8i",
  "key9": "3QpCUeCfi7dLjHBxuPBshiHyUpxbuMWVQKHHyWAvC6eaceGfRQtZFRLnyMivBUSJx8iVHwyfz7A116uzfhEXSaxa",
  "key10": "3P4YHxB9AUkYbLLMAogJaf7y2yJsfD7zTv4ib7qmgvqaE8qhe3KAYKVibFyFfPwAUWgEgvRX3TjfLpk1nAusx6Cr",
  "key11": "5tqtWNWFersEWYUwCLUy9v73VRf826aCvQ4m8vNRDJVVJkDNPEcToRRJyz3cKMSAepWMnkgbQpp63bPty3eby9gX",
  "key12": "5eTdk6QQcFgd1xBugsf9zrdkdKiftieRncwz2nKumiuH1aUysd94jNnbGfUpjCwqU8YusCEGAY6n5xcdT85v52Cu",
  "key13": "47bxN7imGAA1mYR3NUeisK1KiRhKpAcDg5tcQ41xTo4scy1PvqQtF1yT5DdTTiNwW4LoJBUesQP4uauUuTJjjSUo",
  "key14": "5Av1Af8iEPC1G25rUVWAGRYQ2X3nUMvScKsrmHiFAe6d8oe8GR6n6CR7E69aiCzweFiScQqqxRHu6arstc4cTjiS",
  "key15": "4smKQ42X2YUbRR4aoUgSHov5GdEuDe2QHsTrLqHafvcBVP2C93HNx2CEkW7tEHbotqYAPGSxS2bMx1DS9AaYNUA3",
  "key16": "66yoaXCrVhFhU382cgV4cc3tMPCnJA498fE9mebHvFQkxqkk8vMr5KTMa8vxcABP4VatN2pcVuqzFvVQD9qKmEbq",
  "key17": "48vqn5fnfpZkZnnre1TwqL34Zx6fJdfooJ7xeukxfDh5LLH49tQ4PPsdcno9HHDmmAqk9CpJ3Pmaw27A22jApeLu",
  "key18": "2B8MU1pwUfXzWwtWTPExzCEve9r1SeofN69WrW33sAUsWYDNpBTtChDccmo5dHK5928L7Rd6WswFvCpBdbs1GZg8",
  "key19": "4W15LwDg7gDA3ursFZf3rSg5apJV1bCmyC7vca5uJedrdmrpUuzwFvTuriiaj4AKUMmGqDfcA2TRGKwaHF9Ad8H5",
  "key20": "4k5MME7dUpSNKnBnAtVb2tBxAuq58YJE63oxJZrRr974XXB2Ux3ttVYNEp2Py9TAwDVbDYxPqaEy1feJ3VAaGfNo",
  "key21": "4EUY9dYQNNYH5w8DYwS7RAuXMnXgddZFQ2Y8UnXmqxGUChXgditai69HNNeVQ5ZSVZZVqyLrGw6uKq9notgEHpbY",
  "key22": "3V52fw3Yi3oejDKHRLoxaa9HcqAUk7FjC3EUdv4KJuTvwWF4HCFPZQMuGFGdyjFyYJHSVHwhmgqcyxzmUsPSx1nq",
  "key23": "57M3TFzVUevmbCuT3wjS549y2CVAUaa5tXrda4TC3Exe6eMYiuqeSLeNab9Zs5VtRtaByCvXGE2fvWc2HuP2nD4T",
  "key24": "5sQdGCEB13WuFZdpb9t2hUrd1GMDfbMpBSz9kafdchH5i5JSjrCXscqMwugUF5J9rYTqcLNf4cCtRUeHvyfHMSE3",
  "key25": "B6whMn283DAFLegscMkdHQ34HsJuW2qBS1cZHVFtLA2c1hnz5iT1dXSGTwk7wY8dtSvBWSYvzTBaxR8kKF7BkHf",
  "key26": "4rHFfmot5K52AGdQFtRpFsGAEoQUUDre5JEqkkkgBckdQnr3XTSnnVHx7RjeyQdSjGcp4FB3sxkjGc98KSpMHbmw"
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
