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
    "dmCbjj38uE3B4Y8UKhn8AaKvMkLnPMccqdwfjSa1U2io8JjmZjaPzH5vefdARmEjSRsoLf4d3HSsSyyWd8w8e53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFJ1BrTEiC8Y97fBozRsgFhgYZgQNFS9xfQftSFu4Ab1XXdRXoNQE8HYhE76rUpzQAYdU8SqdiHf8U69JQSGhFC",
  "key1": "gPmEX7Nd3QXUBzZ6S41SFcvX1CjCSjxqSf1FgGjmss3zrVLdtzC6EyzcjF1q8pfwXVFgL5dLAs1NMmCvTGSrvdb",
  "key2": "3HvFDhUun4nRL9vxwLscttAsLC3L9HB6dYuszmqjtpennfYKbjuezjfAgHLPEg3GjJ2gvz3yio7tZYnp9qEyKiA4",
  "key3": "4yR4Dcbw118Ef55rPuhSGoFiH7Kr1jbGTiftKV8AHp4px522qZx6hYpd22hksPgw4VXcsjYbyzdfbK8x6tf6qoSM",
  "key4": "45omrWAToViiaqPw9vS6dfm6jrNgDwn4uyy6NrDK1dpJ3RBLFzyc5FYxsWqWdBKvASQgPgxutc7m37RbLRsS71Ff",
  "key5": "3v2gUyxhThKtYDGQ1Pz57R7wxk2miWqRpLev5ERe3i7c1TijSPSTf5aJeifrcTemZemAUQ5m9aSdsZq6EvrSHUYE",
  "key6": "4sUvzTRVcnzxKm3yEXbf5kNw6YicqM1TZS6CUaTetPfY2YNUy6WTdUfUPSjmbwDA9vGioZeBiohWBY8e8eNcv7US",
  "key7": "qZQxMqDs2nEFx9YuimoPNsUNZDtd44ZA37GokejYZysogCGHqaiwN7GM2pBQ1iRC9BdmhrB3gUHttsjvTCkCcyM",
  "key8": "5AdW9U2Z2UVB8ZHmq1dWSn6UGCXPvtpT9tg14LzCDWbcPNzHxSja7rFijBinDGnEe43mvrrcodAitRyqYBkkthx5",
  "key9": "3B7CFQB1iAeLCy4Y46adhaFN56nRsyCpDAWuiNQPYVZu8fEpQWaieFPNvQpkcGWNC3cAb8EsC9jbMUDfz9TFcuBN",
  "key10": "2oJcu3DwN9i6YBU2EW6Lx6H7stvzSHwM8ff9a1bUkWZTJQVzAjiLhdb3TQBKxHPQa2Dku4kbbREgFwqPiHJLRmo5",
  "key11": "2hyvPPqBKjWHhbLVgpwC2mSMmXkryiwpBnMAuTuN3zbcmGGoJtAVUXJyYp7z8WXS9ghdfZp1AQegdPVqxvZ5ypwL",
  "key12": "qbsL7QqPdVs7ouMwbNsVdTnC7M7c2FFTA1kzqE1mVqwTFQj23X9MVt9gp1QdyeneE54EonemuH6k9848MbZhowD",
  "key13": "566atiBXUT1VfDqWScHhYijDWQfMqjJmbmQdYDJMBbLsHLovTRzWgs1Nure9V9SEu1qDJh573dXJvZqSJkcwXEtp",
  "key14": "3JErU5LM7u5Bpu68SoMd8WMHz4tJQSDkFMYRS94BkmSM6dPATEBWj7Kr6p5i8moZFj6v4yqFhpSeXKiPiQUAxyYj",
  "key15": "5dmaw9CzGVwZeZ67xKVVn7k6JJdkEydRYwqk39eQYXs1yoEvrnCqV4vjpMn1uMZ4dVXG2fZbzUrfJAAvqiUQhT8t",
  "key16": "3bUVngEsj7dpygmabCNfx6pTE7EtZAPAAa8ojDgtpwn64duji3vq8fyyB7nbofdaxC8FwwkDp7nsNSsjsT62E82F",
  "key17": "5NtLCFLWhNu3qF6sgE9jwRFjb1DwxGzf1B9cn7XuUN1tryz2amawkxqcUB64UzzpdXo4qLhDQpME71xkNgYXCxrJ",
  "key18": "HfGG5Ua2M1sLknadWQbbZYjbBbiHHJfkzkJhwj4FVvRzeUkVNKvsYDZMo6g6nkC5RAvPoYtjMfVNjt5Z3Ln8i5v",
  "key19": "5HsT8B8WwPcXVizcRpHc6G1yYRkjctJ2esPBWmuNKmHonVAak5QVAVCcRm5yQzp47c1VzQz5gfX3j3vtYwBEH3Rq",
  "key20": "4MeGKXuebhijZXbqkCdirYygGCUcTHJTUYyxJAk2bt8ef2MM9CzysxoGAbRN1vRwsEYGkTeFXBNGZxvEkSmGmEDB",
  "key21": "2GSFVyH3VTxUVTdy61JUjHZqAPfpBp9dC85BuVZe23vfFKx4y99DwttibgvHThsdivQCd7YEooXBamt9ygkijeNX",
  "key22": "5D9LbNY8LxJoGEre3SYoioim8KKjMt3XUTVtEo9UzhoUsAcSEYuSgNWBpQPtRpzqzXLagnTVTVMVGmaXTvWpq5YT",
  "key23": "5oLdzbC7FtRQ3Lrz5aQpajEZQVt6Nwpmjwf4XvrmMSYVgwwh7k3WPrgef6pEvdXHWKSAgrq4A1x7heyMFSZ68REY",
  "key24": "3iFuFM4DcFZSH2wbivo57TW41ui78HhFSMSj43gDSiv3BAu3x8T6z42qGHuPZNziu4GTDUYtTLrWCyTDHkhbYeWM",
  "key25": "4RrYSiPkwcXyo6h2MqfFzh7F4J6Mwu5UgkvsqjoyvnDBdZz1kPAoRXMrWAFnu5qKYF8wxEtJk6rffPhu1RGNSkgx",
  "key26": "5daXiyFaF7NjiXirPQ97NuSwFviA2YvDBhxXqM43e1Kfpt4oqiz4TUP9fNHZH3FeyBiQy6kEsQ7HsDTBWBH9sZzk",
  "key27": "5dgawZpgcovQSCQfrCLkmiLjMqWkqCR6KR7bUZScaVcwakpVuXRR4VTK6B3Q84hkjRZoiKsaMxakZJGcqXc7GoWE",
  "key28": "3Vus3djgdDqpg7WFJmJ6iJmdLLCXCMGiDTDVnaxWgGq3oEjdDjmuScQoi5PCT6AWQpfndoyx9MnYb8uMdMtR4CHD",
  "key29": "59Xw3GoKYiQwWgtcDDGLfZ4WuVCAjwsGxVZBPNmfmaiGeB8CfVx6bpBxWpfjADgmkCzEEqbzYTXCaVTpzuaC9aAW",
  "key30": "4ghXo1m1LRSHzMpeoQZQS3ckfNnJR6EKqTxdWT3Yu4hPpYRRTm8tFREXekKLbUAFpXC3UAvxBHX7J5u9TwN4CxKU",
  "key31": "4w8Dtq3JHwZickCVkiKzrmC92AmezQ3KPuX8JELwbLNLJcKNEUQrvp9z4vFQFyhZ9vde2qwr5N9twCdRA45dtjpx",
  "key32": "3y88t2GDJ5ywo6fsPJTUKJBoVtnCo38k75tZu3pSUrcptvnvYjoDKKnUd62QkTmAri5wnM1DvcxXdrrmWAJnsV9z"
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
