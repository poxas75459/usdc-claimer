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
    "2TTDwGg9FLCLPoKomXFiEHshkENXuwjQKVEnmiBMRzp6roKogRTrQaz6qVkSecf9VJ7H91SfATZuw5tXYVytqdSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQ78BU4Swhi5QUHd5rYtzKEvB4M7Lj91EnVrw8XTef3C4gp5NSsL2M3cFedGymM6ZAzws9a1ZeaKzzMc5wYyThL",
  "key1": "2Z35U96dF1nGZoxwrUMpwxuBohookwJ65W8EUor2JZkpeoZQN3ABruUpgp7TTLkTJuEEdqsUNrRsUSWQ5qEcUidK",
  "key2": "418uVs68bDMfhiqDxxWTUi9k3BPcxVu6V161WUzPGPX73GNFj6bi33zdcDeCoACd5LnmxFvQCXusGMTc694Qji7D",
  "key3": "XYN8d4gn3V7tZ6obPeHAk4yv84aZtHnbnp6g6cBSbQnY7BHk7d9NK3XEMhJpCgBDWZJbvA9v9BMrpfrZLuVnQva",
  "key4": "2rUvSvbzmKayjRFV4S3gTTQxSpdoVkPXv7WLAAZvSpNMjnZRuhLtZh4KYhZMcjmLmxL38bzMhXFgAtk9xMGcGEth",
  "key5": "MEjaD6n3bQcpfeuBPnnfXyQx9P6oMcDSVTne2rYWHTHPGjdRZMsEH2LcGfPA8idRkcxocBqatFFUNtXBrM8BdCB",
  "key6": "4aLrjqWoUfM9ttQzfmzBZEVWEisRAbGKZ7rYJioXfYDgggy1VyXd4Y9rDLTGGBuCRJyfYcjFggnFyoHuBNqLUKdp",
  "key7": "3eHvqrEawiu5J1A6AHRL9ogmtAPpiamr6jby3QAdTZKxdQgT54onDm1U2kUBwVYkqNNzeBzJBLGLhmaZgdsAaSvG",
  "key8": "2KBPXJCBRmdFokvmRbVurc17mA2ckmYHExrVjNSp9sbfV8A8st5ifci4uKZgxoy9LMpoqQb7CnBVSzRESVCKAwGk",
  "key9": "E8TXFeHYtyShmqUx4aaMJq74K7kxPCKYKXd1j8bTYmi4eXzuVVE7TjQrt9c3xducSHKbsrJZdUkCyauUJK2vmDm",
  "key10": "36ea9eJdV3Dd6xvUf27qSqCTJDLBPyqWjpKb4vLwqVbuJA7y9wSdjmHBTgkF8GKnJXmaTYJTaC463RDbURo2rRsG",
  "key11": "3G7irLc2inKqEyyghk6fRQRrTd7ZHNCRN4VZ4nCsBpyr2uJZrts1TLjJ1tJ9Hk5XinyQnW5neAuygxz8Z3YRsw9D",
  "key12": "EJawkmsZAtGXbtzSyitBqKRqVnnEhQt6BV6Uo3W32uU2st1qhWcY6PUuJ2V1PWZWDxmv4H3izyXNc5QobNTjFAb",
  "key13": "5w4p7MWS6wFUiw2ZeSSS34pWiY7k7yEFGdX7sVa2Rwiba6h4r589Lzojr8sYd52LZSin3frpGpMyvJycZxAiDFiQ",
  "key14": "5T5Ly5QyTqoNCNjmiv58FZ5nRVR9hFqPG3gU2JALe46KRKUBLMgkpUQuoJcq6ZrzpyLja8MX9WA34YU4NWLcEPvM",
  "key15": "4GrnAMwuRZCjfy7TY6hcLoDAHNZabazwZbNr1w9TiRhRtoXYKtZGrYcxcMLY7YSEFt32UoMQkkrojXmk9ivs8MKy",
  "key16": "67e6p1MSFWumqW7ZzGMCDt8tLQKLJDVBBPcMrXSySEqp7ujErCTMUxnFcmYsvvwvhKhJTCaKY3GV4tTFjN667win",
  "key17": "32CQ6DFNdbTMiQuNhHFY4eSEWUsWBneK3VvECnxfz7Mznk7Myn2D7d5vbp3GT1nWjd1Z7EJyN1NXey3cJLpMpzAk",
  "key18": "61DVSbsBMbFbWrUNP7QLKZdFDHmhCFJBEjp5P6jQwSfdZcXsaoioGj1FANMcycH7CDyUaJq4892SpmKzjEYiZVeg",
  "key19": "4NpHF24xqNZgxdAppGyuaeRYJFLDqB96SvzjC1nCz1eqNm8RgrPjkidJRsqfxSQQGoQ4m9nem2DzGMT43k36VmUL",
  "key20": "q6NUJKWYcQFZG6u8gBGSJuUaVdM8u8ARw1yijrmy8dTicb26xoWkHEUGfcr9bQ4hh8nNkL7UjjWJLY8AG3umgC7",
  "key21": "5G3WKUt4iafLqHA25yfVziXvnzmFyCVt6BacUKBjhNPHUbsFomXsdx1rkwoA47qnK413VuGJzNBXk3n8HKXhgvtG",
  "key22": "54mUJFaWLRn4jqZMfiQwrxZ8c9ukUDA6G8gMvw8fiG15bY731vDVYQJ41NQ8AXvsEb62izxsrATpf94TYrCzV1t3",
  "key23": "5onS43DnydmBaxavrcE4FZRtXGiCd8AQAoDGQTu1pXuHMhaMohm7X4robHyLuYoxQ7bU58qBvJHUukbsWje76VPc",
  "key24": "3SKvmP5YSnCdg6XeJLYoS3cshcyoNFSWp6SDaoYQop7ecqrfx9ZzieUKuozectX3BqxSKzcETezom7ffU3NwyNoQ",
  "key25": "2KnXQ4KyQqEqFQQHhs9Rk9vFinSscpr5D18p7AUBqJJ7qFZPJcXBc7mPqCA5rrrHQDM1sLC13ocXnZcqAcdNyU7Y",
  "key26": "2cesm1HRtZm2YDKcxeWZPn4bjPHuXCDoBr44KfzRxMTqyACAWfJi1usHmHPALxEjiyTB3BGFNWAxQCVMRCiFXw7i",
  "key27": "5zxm9RbN86sBzGmiLLmDBnJbCsfn3dkxKPM1Qh2KMhAhKFWCPYcf4CaPwEZkZSRr64JAUGMfsvsysmZ7cbE9ZSvd",
  "key28": "5w7BmuYb3Nvumi5hApnBnv1KgwgMMKL4ceDcJtXb5fd39iT4SNpAt2Ag1qwoVDF8T1LfSavqzquzwb2uRMT4Yzf4",
  "key29": "5HvXcF3DqKBUXRckLeTaBeEiJA2KVZWHSb1ZYih464okBCuhyX5y8AY9uh7tk1b19LLHXkTAbcC4qoQfGzQX4KJr",
  "key30": "4qCmnoTNEMDcMc9g4sWntgyJm8quqo46tiBHzuJQCUEFD6FW5dp9Sh2cb7Wwt4jFbemQuZHoE56sG31r57GMV4gq",
  "key31": "3je9KV2rmaKLr9mRcS8YNDrt2i6P3fySexCc12XLBWZkEYwJeqPrYEKHHKHr6fMjVCvnHA2b1nY2KqApwosu1bJa",
  "key32": "wCgAAYY3DJ32ENqAjG7oWNwBLoWRWcVqHf2qKMvVAEH8a38Bcx7pw9tfoMK56hN2hmW67uz4ABLrfAY6F99Le12",
  "key33": "2HbGihpTR1z49yEmcwKwdQBmohRHRzsX5EmHxaanbLm84rWrSowNZv3Jsz7BjLNzmS2c7cnZYBAGePEUWK9CiUeb",
  "key34": "2GB3geLzy7HTNbqxRv5qkLrzgfEYt9niVA2fFe3jTKdwXXVLJYqCiiF9LJLKazE6jbUxucvgyVwsbsQeTR9Qi68a"
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
