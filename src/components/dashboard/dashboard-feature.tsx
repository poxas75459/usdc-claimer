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
    "4DsHNUAjqJo98WYHtVzxu1ty9ovTpYo9CUjP2qDokPymcntKiKtjdgEzwZZfj6htfs5mBgBLB6xaXF1eEHhGfM9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9XY5gGTLDGKNDWvpn4PFjiposb3jBNby5LdUUA7FJweRUUqvFnZ9FwFjj2poghcrrbZCxpBfaby1keyzmMc5D",
  "key1": "jMTXzEWqxUYYihMcjNKyBDyXPUcS6YiRWyx8q1fdm4wexmU8JoqSoXqeR4X9Z93rNQjiWMQRUqgg9h5SPLeHauo",
  "key2": "fS7USMZ2YUbVH5pQCSgnmg5b1getyPA5L48c3d8Dbx9JeXRsXv3V4b4XGuxbkzg4UzP7dWxdoKC5wrDyfFYs4eB",
  "key3": "4SVuJJH3n6TQtWHCtsaCHUFVRCBszMWZXpicEDdZu5b93rTQN6BERerDFQ1igm4QmLoqVBthcfDBr6JNkX89YePg",
  "key4": "5UdY3syXLvibFvSWZAAoea1bqPRevamixMmfXztBv4WFcCrgLvPSUh3NkF8mtZ4EXPn63LB5z4Ts544Tr7rmAeqE",
  "key5": "25manJtQmBJCYhZ7mDRPYnfEdBkoZGiyfAYK4NGBHQZPrXBB17YzQhw8bWXUTHgLsQZ2C7vNZy5nbTHSbfous8vu",
  "key6": "we5CkseXvxSXmMbvHRfZ7Yb3aFYiotxzMEUubQtqa5F3EEUMt9Kv3ZnyAD5iByBDoHw84j5ar8ezzoicGug44zi",
  "key7": "2aKjgNk7XGCrtvsCp4VEWRWaDA4tbvRxYedhYCKjviTsCSz9MY42hgT7kkfpRpywnTtxDXfhFp3X4FfFprk8aXoM",
  "key8": "tvJG8MBUWm7enNYUMWmUxfxAjCmWT92pZogWadJC9gspXZQfbR7KD6CxTYfbSHTeCMKx4LMCZgGhByzCvdsQd8K",
  "key9": "z362Xjiz2PqNCopvw1F4SW7Lq1LU6Wga5MwhodbzoigX3Ysp16fGgHro8vpKXivWfNNTBiGfV3F6QwJkYyNPnQv",
  "key10": "2uDjpvMzp8T2kMJby9vXKSvAcFRmVRNCtHkuWGKhTzSuhnXupbRhxmQZEUgYAckSg7JRYjqDsuDaekX8WwrSmW1r",
  "key11": "4XTuhXSNMKEF8eFarvVAHnNASUfdUt3k7sMVN6jWDdFJS9hbvp5PSA96LAoifXt1NrrstSepdjqZZSjRjtEwWEVy",
  "key12": "2pkJ9RLnnHZgmNb4v6SioN3ikTPZb3nn3sz5pyXhEgFgNiz84d8yykFTsQV2qy2AjKz5ksvAguo3kgD2BWSjZhW2",
  "key13": "pa6fumdgoPo54aEEHE7Js3kd2U5PuoRwADigtXZbG4krRMQYRupo1F9pZNeWaZGizMZhJNTywGMrZcYskE5LdPW",
  "key14": "giL6EhvdzSVdrEMmgzeVv3rNaGD6PptHD7ikBoRCvL1FtvX9hfLqi3UepDDbqAhkXZvVEhiqaAQrqa5rVhTNnuX",
  "key15": "4PnZYe8eKBooqYdvHAHwWm6c9AtsVDxgFYGUkB8ZhJ9Fc9fU4Hbqe8oURsXfY3wbFU3u4hfUeodnaMbY73ddhgV2",
  "key16": "4YLZMh9UnkPQXetpLJnKatcn2KmtQwxmLkG3S2222yKsHPtRVqJw5cqCRmKfMo75mFeqg8WtQcpzvfH9HC6XNBGd",
  "key17": "3GYfy85JWkp1eqiAoqHsXpDjyWqjUkLt1Q34CwmC7jYeNru9VjPWHGADCmyee4oqtb2CJg45udNUTwLGv3vpXwTS",
  "key18": "5HYZB9WwGXSWwgDEPaouQYEyfmVfGGczjSbrKoWeTC9zGFbcgJ83wb1L1tKtJryg9VeLTbihUDvJLckZWyHbAWsL",
  "key19": "4m1Cxygi6tea3W6QSKTrQn2KYLUMhA8s4Ad4yu4PqhpNwyzQ168xw6kNvn4vuEtaJ4FkNn3etMYT5sqEHJ5VEfbN",
  "key20": "3nsayrcys3KQjdKMus3aYMNRydiKCdB7zsC4BwLXHwgCpieFczDN9ZCaqSX13JGku5VLtLr8xxno8mad9fpRCV2i",
  "key21": "2DBevm4sXEspBDNTPoBQnENHSJMMDFmcYo9aqnpPLzQYtxNcAr5YHBpPhnr78wr77ZqARd2QC4XHxcj3oCAk5FaP",
  "key22": "2x7VWaxVkEqMSod2qPYemRa891LThWMPBZ66MVXYCP8grje7pQ7B2nn4Fts3hckHYujFYj14bgc4zWqHuEqrUJKK",
  "key23": "61fCwGDK4A5w1DTMqXFGWEjo1b3M6euowDcpCMgLdiVAYtMFywNufuwMSqWfq5Z1q8kfTjVEYzLgDz9ETnKWhfhN",
  "key24": "4nUnFZDFCU5m43E4VLa7rsTVA8wkfyk7XVHdWhvuVs8oVoTF51B2DJ8rctgeYi5cf1vuV9GcgpdYZ1U9kduRzcBC",
  "key25": "3buAtEen7URgfVs4fFkEdnmsPaqFc1hRE8y92Y21QdhsCjCGYjwrpazDJEGmgvsHbhHi9oZ4KDcdXQjHTfDfYdEX",
  "key26": "3Xi3N7esvg78D7iD4fF3MDBBZKh54FxMWMeDYAH5pfEtkhpCR7CXZuuAtpd18K3AAW4TsCFMrSAifBzeomoozUV6",
  "key27": "qf3BZAAiaQyqnRF1VEvP3vLzgzec7j1VQVF61uKcjM39jiXGU2DJCoPFLnCiXorsAdu4gA2hdFy3YStApC8KEw8",
  "key28": "21ZXnCai7PPSz91Ds12Y1REX7f8UwuHXzChezdz4Nk8CaiodwEHn3YJxmyGWyia2oJqV3kDeJGZaL7c5fgE3EWcZ",
  "key29": "4EPjJdzLEUEuchUDtVS72cioksXPvjd1xVJDX8p7qqgYTA8AGbDNwEgiAz9yAdNA1w9LBRsJiCwJ6unm4fpkh7zC",
  "key30": "3aY7nKeEfWoZsjPDf6JvTUo42atpWty3fg5vsVjkc5v2dgFKxfNejr6P3SSPtTKEpJLzjDoMgGhu9Nkf6FFEeNRb"
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
