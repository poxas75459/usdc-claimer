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
    "5sjUiDig2ohryu9B1tksrMhAyC6gTvG7ZCrV5uB3ainr6jAQqZWELwN1aV4f1g56FKAULNk3GLBCpMxWxeH2Lf5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3td91M2aYwcaZ2pM5Q9d6YgzaHxaM8JNCWtLC7JzxS9S7XCMSDXQdymqbrPWKfRbDtEcZbNhrjvuyZcHkg3NWqZS",
  "key1": "2TtKXVvyWS7F6ceLMukjJ64B8xn1TrZxkzuTrcPjHio1K9uJxdjhDeMtWwHTc5A2MqiVb7fN3HbkCFCkMgsp22CK",
  "key2": "3MNosZAGtSmSTbHjZiHTefB1NWsnxhe5D4qWkFGhbNiqhPVAk7NrwFfPcyzh2YKAX8DECAyVc5VnHcYxoejijic5",
  "key3": "3CsHpDxQShXufBP3iPeRBHgsMh87nRKQvtVuuYHSU2aYd4rXDd488K1v87Hycm8AzXzHxqLLNf5Jj5cQvcUmUXUd",
  "key4": "5WHgUX3VzWDCLyn79Y2P3rerRkvtWTHHAdKA3MfLFKutzpmX4A4nR6UTCcKpDeDArgfF9GSkZMbm1bpHCfMMxYkn",
  "key5": "CwgLgVsgKzRqcfanoXzE6hrHPhwBVhiuDVTGTgDVhFTF4LdNkobKeJY8c17622uDsiA2ZZgpLuXzoPL2z1nWcds",
  "key6": "3qb9qsY32YNz4bHjv3qBwepaswtyUTAp1zHoneL2TpWtZFqRVD6JdvE2xzopbLLhcbj5PJSkBn6EL24TEwmDVZCY",
  "key7": "BxDi1TYcE7RV5o4pgvwv6RXuVV9fzgq48kgYhapSu8Jn9Y42ESKTCWhv4LErTU2TuQhmQgt1MAoZ8NAdncXqaM9",
  "key8": "3MiA3ZdL4FekGqnBsPhJMRYcC7r6xydBxQsU1TVZ8eQbiaBRe67MrKYk9asaRvhp73E2cGnyujNPc8diizTamt7V",
  "key9": "5u3JQFgQ5tWtpP2jG8KrZ1AwJCj898vEjfiFEsSAG4UdaBUKixz7z8ZLC8ytkt3rgyU4eiJ7U1sLg8pTLSEjB4cn",
  "key10": "5FANokQDskCMXzHQGtUt5phFjigZxxKcsUBo17a2SY6RmcimnMze57TZPd8KFcYUXo4sCsL5aubehH2rnCyxeuCa",
  "key11": "5P6nNPTWfK8sWjryNJQ6RimrMDAnXeD16q91aLvuzt1owDMt6nAQ2y3GQgGNRvu3tH9WbtXHYJf1a9EZMsDDAhuU",
  "key12": "57KvTA6MJ23v3tzz8kZwLUPfhcPMQttCm2FMnHGpk1YzmpLACHbgSgtKZGg4BvSCaVTozTakbV1eS5K5h41eEiJA",
  "key13": "F89PCw6RzDnTQri2j8gisuH4nZM6eQdDQP7mBYq1zR44XrhN2TNKCwx4eMNwnogMFzxConAUcRqm2RjBS7bmCyF",
  "key14": "2P3uUt5DmbvLrSJ3CA8GXaAHk56u5AExxxavWDsNcDTyHc6kbyJhPeHo1zjstE73q3U8XzKbMNSwPkEXmfNghv5y",
  "key15": "MJejrRwBgMtajaHK7G1aCMKqKCM5MYhTfZ8RpRCBgrbYJH1q8iTG2isMmkD1DxTzonDuJZdEeDB13HzmPVxKAc6",
  "key16": "2MgkitxowkJWNP1nsheANaUGejh8GCUKhpNiKg3zWQJbSyqxyrjhzfu4vAu8YbbrQPUWbszGdiQG6aK9X6bfLFDe",
  "key17": "2m8K1PkEfHUvg5ijmH2XEadmuCvy4cgNbYm9Tr1UpSmiFTumP7d4H4A6ZePF6mAzpjLraVaiz5eva78DHBmXhKSb",
  "key18": "38Wzr1Wc1X4p42qwxmZdcU22rk8DjsCV5ugh44LuCrYozizHji3tU4c48FyMZH2dbrYQV7jH7p26hnHzsbEvANcS",
  "key19": "2fFFPkzfZrc1vn3Ebi2mpnmDVcJUFu55gqK7gFQNMUHXAmBtCSE5LkZfrWpupwi74vQYXyBqS9qqe9pnrg9ho2Pi",
  "key20": "2cqRyooeecqX9oxYJ1aN8gm8u4CTB7Va3FhADrY2MUChrH1N3NtSoCnJConYGKb5T7qfSkxerZ6X6PHZMVMHm3cL",
  "key21": "2t8YYDGJRYMTCAupPkxiD5p5LKxHyHqgoYt25YzdQxKjiN7V9sGVKtzzoQ6VX2U5xEkcxZWoMu9EU6smi4g5E8kb",
  "key22": "2xLc24kT39CpGQqMb3ZwgBfydwe7D3UqmvLZrzFEDYCbN4sMqqXZUgnAYevdeghnyCLmUqXN4Q7zjVBYwiDsNRki",
  "key23": "4KHaUeomakf7FwEeApM4pdKQpwn9uMzx4ZDfMhoa1T8K6ogMQwiyY3nFokhsEkAQM5gmCC4aXCtizwtU8BcR6UGH",
  "key24": "2HvyK7BkHi1sLXq3jkicK9vZfYzwfun6mejfrt85ivGAUGi9LUXEEB9MTWbjc6a1oHRceF8riUEdtG8rHE44yqQk"
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
