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
    "2c7bs1yg9UwZg2WcPXy5WeAPUmAcSMozRXT3DLfv7T1ZWjh2nGXATFcJ2rMrz4kfozU7be29YQRGNzJXgTCNWtN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6hRnDgJ5EmEvy3BMfSNbLo9S2LFtYrgfiGQtN1c4zA9LYtJhPJYsiGmrDVLUrEozcv8GgHGEF4rvqD8vhDMN9nw",
  "key1": "5LFaGjVAYBFBnc5o65dVGxbGiKb7JZkmuF2ry9V7ufKhk8gyigdY2UuCLvAwjRDcDEt9Vp5SkiiufTycFXy8gVeE",
  "key2": "jAgF4f5sMboyes62iQuFq9S5ZYGY8KTbm1K5HnWw4ZLTrL5uduDHG74yi1TRzCYTMVpkBqhjrbT8h2RQGWm4BmG",
  "key3": "44dcEPzqBjn8iYg8Rvhjj2wCAv8pGpHViiy8yGYP4ho37hiotCuqwheXWLLFYn62UMkibA4SAWpjLM5fDfDz6h5h",
  "key4": "2TMJHajQc5og8tQL2wK869ET1W3EFYkGUQ6KuVQ2zZ3DB7ucctNjVCYMNV5niPD4GRiEACmiWjXhW3Pi7u3cYGqZ",
  "key5": "631uvtkbvMTNx4cT56E2Gq9zCmCHDen5X4y6n9kXx9UzNhWEywPTJ2W3nXxJzVU6QuG4RjHU9eW9CDbEP4FFejMu",
  "key6": "4Qp6cvhDfE9zZtUpiypZc6MbJLUuyu9s8GPnos7TJ4mhGQuE19HxWQNqc5RS1Jg7TtDMY8tVBxVWwesdkbHWCm6D",
  "key7": "5r8btETffsqZQdcwNEDykrky122QhaTLVHbh3ZcbhnkQe9MpHnWpUeUevp8STXgNAatykMZkocczXWGTKKzVNqff",
  "key8": "2tkdkgN88shyMTcPgpFkiHwMZUPQEgAT8QFbLjveMMgq6exuh1S3gf9ZgYfRo3Pd5We2dwNndQhQSgAdC6Z3nDdQ",
  "key9": "M2kGTcTsT9irdKZ2vR3HgC5ssrd9RPGoxEQVJprEqiH5Rt4n3QY8UEoNmDD89H8zYFyqZaAqYEprVLxCjvTZ9a3",
  "key10": "5wzweq99prrftpmjbpaRBgQ5PA1cBMqVbjLsswibh8XpYyn2sfjDSmfsUa3Ee1uDnciNy5jwnQurU7ShD2nGBcif",
  "key11": "21btDyA9tpLbiC4yUTPYbaaV83swupkPYRFnuDuUgukbGHaAEJMsGTNfHuqTg8yRoYRG5NfzU7RzgRwa6RXfxFbg",
  "key12": "4h5pYZpoEVwv67fpCfn7Tje9CYS7KEzRujPmMy1LmnqaFNCvNJCKnW9uSE9C6uys57Xm2mNUguL8DBKiCGVA1K9H",
  "key13": "gHvBp5u85wcziLt4buFZ7kxkre5xfUPHFGCT7bpsaK7EsFotjBvWBzFRVfPZRi8M4mvDHzcoN6FLwAiRpSXCaFV",
  "key14": "3Ba86ReQ7gMAaitfe264FRgi5bt4KZGmRUkcN9FQhAZcG7WWHggV45aWep7nLK7rcNJDrTiqtJGYZ6L8RWzV8wKA",
  "key15": "5KTMmRFT92yxsdmUQx19stkeUqhQGjbQMSYo1yQK9PM65SQdZRUXuGQYiVyupCKvgK8aDD4FdZPuk3NksGxAqo9x",
  "key16": "37EJDbPL3Qb63HSWGKiBLbHTAX47aq91zR4VVopZHeDhQC8J5VCmLeiGZug31HQ9pba59YdiGdyyuGq2sF35Xz4Z",
  "key17": "yRRDx3XTD2gC7xde5Rp21S1f3MJwog5kD3p62a3n87FwXRMrefDK7u2BeEELf6uoSmy5oEhd1ZiYQ4PoHqrsWDH",
  "key18": "4MYYt3Tu6gqQvMiRtmifDVoM6HC4smr2gk7kpU7DxfVapvsKLRw38FfsR3GSKrcLMTsM3sK5H9eK4hs2GTXToN15",
  "key19": "3CLA4KeydWD2ivxPEJNgKY5ZTAgw7q7AWc4b3rEDZGNgySFth2o999yRH65wY6kn5VUfEGvCeQe2mxDoiF1TWzxK",
  "key20": "4mrhA4UxjH3wFGsETh9MikZnC59YG2CpUW5a9EsuAuz3j7rDqVMRKYUVTgMAbzzRAku9PbWEPVmADzAenAY2vu66",
  "key21": "3XLS9wARz9W6724Tt7Sjwc7pPNW3aSfhEXQ2txkRXA2qfmqPePmxhKwP5cGyRJNwXvsk63Kqzq5VwPfABzdYpjws",
  "key22": "5LSXuxWfKFAzsnbEWNcJm3eaeE9kERBJApccCkE4URDiTgHdSqt46ukVV6rLHuhrYRkqYg1oVhbohpsMPAMVcJBM",
  "key23": "4iEy9TeDKSqwwrqBxZkpsgWQ5Hk7ABdUDz9NQfJk2LQo31PB4debsMX6Wte2RXkKMP6gPHZxqQhxMxwrQfwLjJpf",
  "key24": "2uxPFBmqHaCFw5TKTGutEXGMqBTTzpFiQaSJhTDy9C8SFAGvPxKPFRz53JiMBXiwgEgL9Tu7shVae4ReYEGGtWh3",
  "key25": "2eGu44fCT1GXcQHdwgqfKBn8gvU6NhLsx2vyeLi1WBQYHPst1qowd4Tcn3pGYTh8n7KkEidjrLZUUvRLFJRpS3Z9",
  "key26": "5ZjoMpTMvvXbRRKkarr6BTrsRQFoP6dh1Y969qbLbfkqyisDwirjVTtnYsKABaaNWLD8hN3ZTiootDufWcD3tjFd",
  "key27": "2VhX4Ecj2wAkmHjUoN2LYTFrmRGeUTz3bXjBDRYRWFn2aHN4PVvhdPcdDKd9mhxtgKYVxE1HoLfvd1LDUw2kd3wK",
  "key28": "5Ey4p2tN87BWgQKZNkNrpqNkLzZ62qozqu9y75DYRBaAApRaR27MQBB22trSAZocQxkFCUePtAyL3JTJDPvkTXFZ",
  "key29": "3Tk52wc8XSxkb37r68W27y9CGdtaAf2zHTfo64s4didBpZStaYdnuHnBJRkYrosUfdXz2uVbE9cvenJqsjr1LRR6",
  "key30": "4cdkKD1T7Z9oyTYY2eCrszWC3cJ9fTZPgbDkCwcsakYi8xm1HkoQTx9mnQwBmEfNVU2yaokc5VjzySdjRCTAcB1E"
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
