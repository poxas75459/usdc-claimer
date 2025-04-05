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
    "4N4dbfEuLdKCPRb7NJogfuo22ZiUZSp3x3oagG26cAH1HnmzsPUXS6Zgjue6WWKKwMjSj2kESJKmtgmBZi2WXKRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsfmfVuqvqGpEtBGTg6J1nokVu874YpborfVkHwg8EamMbcJ2ntfzJiLJsamiT7NcNtoxGzENforgFFKdbCmnyd",
  "key1": "3dqUUHDkD2eq1o63DDVXyySNGU9cyKHosU4sK5JRri4egBQEJwrFgvy8rTnMGwbBjyCoyi9q8q5ff6N9pt5FiQ7P",
  "key2": "5acHiKAnwD2PTnpFoE2tr6RHTMWtT64bJbHMh4wfjAc2pntL2ggZAHmC7YEMqEMuu3gb29qvt24wdEuwmhro4far",
  "key3": "3znibthPinQvXmij6EN94PzYi6QoRs9f88qrDKYayvmjE8Z21DnX6zS6WGmcDpg8GFzcKZM5yQ27dAmcCzZ8HspV",
  "key4": "3RAUegZHp6jhyxF86ti74sFhKZQde9G2SKuTupfAA3qW5wiQwJgeZJ63sWvsjJCuMQQVsiUzFwC1r69PTSHsVmFm",
  "key5": "CPgYnYj8hUHRM5Pg2LL4T8gATMuqgvztjdtEUe3DU2u3pE63CTbsid2rc7zsv7Eymnux1Y5BaQ2EGDJ1Hb7wKA9",
  "key6": "Bs892wFmW1vZJGErcgCdT99MXQz7RSzLtpquuPQVNrfGMhE5s2cZcY7oSDRUDyNWTFqkqGrduaPZG3fh8TEvQ7J",
  "key7": "MRSa7EaZantdf1vv6JUM1uDcq1zmac8gGVuiFLXD6S4ziRCoaJtUxeZEJwTAYFRqWjp8R5C4aoRRsq7WvptZeQA",
  "key8": "PEcCPeiK1qMbgdXH78LyyecGvhHZjEKYnhxSSMsWgxmMzxfLzbppCFnFGAPMri7eZrwJdyMVY2wDmr1jQ2QCKUJ",
  "key9": "sQmdwr19mqGonNTVKXriTmFsBeK6NNEpWUoQM79NivJR6PwFDorcVtD96W2nGiioR7SsFyxKyxi7UqT7vhxyg32",
  "key10": "52ktu9jYT8zYBtkXWyEGsh5fYx4f6BfSYWTT7JgtS3i6oqb9EL9gb6iuwpq7sQb6kmoe2PC2YuWRbCA6e7N9YAFP",
  "key11": "5P2fF3YXjro5CmEW8ULeKeu7Tsop8hm2Pvn3cRshhNYQiyp2XQY4nCNUT5w8xTBZ1Qhpp6xpPz5NNv8rYUH6qTvK",
  "key12": "65kwxsT683tz22nv4Ypa8Kf9q8vTAeBwJwLrYH493SopBnimUPnYVxbk8fgSsrNubL2azhZJ3wfbUSgiaVU7BF4d",
  "key13": "54DsnU8Chsbim4tvm4Ko4RRy3NNkSpfo6JoSrmRJUuaDbxMzLdn4X45X9NK8tcvVi3KoWktYupjxVa1phcXPUMQU",
  "key14": "58gfxoQ7KRfbzP8YtxywnTvbfasq3bYifE469CxY9yBLKvnMe8vjo6K9rpAmLfX15Tt5XTUU8bcBHVvaEkU8C2M4",
  "key15": "s5urRvkLBF4jZ7c32trdhTkbFB9MjKVzWWmEFgZFcP1iscWT66gWAU8AQyJBiM6339ZC8GrY5q1kcVAtcEjNars",
  "key16": "31YPeQbALiyPZ4NZXKrxAYQPXdMh8auCyviTXrFww4JY8ti4NgRKzZ7R2AKzxL83Y5vXtw3s7uTUQdXcs74VvAHw",
  "key17": "2daSmP5bQtxG6HqWauo36ZCtoTxWuiTZjkBFTiPd4KnEsSkZcVC6GUWbX2jkjKVgTLTx2xEoch2pZQERpeYxER56",
  "key18": "2W6YUsUyK8BHQ47rS3Em8jUv7SMLeiAP44exv3icSRZAaJ2kAPH5u7Ghx6mGTqJW6zDVE3xMYXh7ApAzTB7YPMtr",
  "key19": "4WkdgapHXxNiDPTz2v5o9eWQgcnLWQourXUjteSjJdPp5qEB3xbe6n1AgoyVuH85rRfWWH2N8QxoiiRxTLtkjKb8",
  "key20": "5RFWsjgwtvWNCZ85n2r2rJSBmnsmvF5y6wfvyZpSte1YzrSSYKdr9VNbaLGMmWw7b6sXispQGVTkHEiRwzXh4X7Q",
  "key21": "5j6qn99pnG6Zx7SRe3yACeUG3TcQxiDdTbVMhhxq4YEX8DmpXeH9Ez8TfgfN67EQ2SDTyc6aoDQxib9EcF3Xaozw",
  "key22": "4tXhNofSm919xRjDU9cty8aQ7sShHPTScqyC9rorfBgtWRWoYRfNLDFsnNBCSf2KUdBZV6tdNmBgRxjJJqVDbPt7",
  "key23": "3ihKZFpfihwLsbfXQGWowPzWNgdd5LYE8EJoQyBhzfEkDsBqRqerPN1n1aFtC4i8LEmdgHXmhtXTuHwNcAkvevQe",
  "key24": "KzmFnh52Qofiie4BjSMdgtCR4dfdD8hisvT8DgLDMG3oJinrmkX9pY34VK3mdbQNRU5tRB7LbS6RgFrsd7RLtC1",
  "key25": "5SzUTyPYjQbCsz8fqskHEwN9DQeiNW7Tre1dz5nKzF5kqUyG3CsVQAPYSbMCqsge3DZaGXrCLYHa3Hi4AmKceLtt",
  "key26": "4pjnwzCM8MsGaf5L5RwnaUfHcGwGAUh4MuPSFr2tHJY92sDiW7pHkdXEvXGERas5jvGNqC9EgeiFBAmyBEHGPHu8",
  "key27": "3u8NuxGD5YPDZJXp2wqzePUZwsRwaae5AWX7hDHjBdcPaWFZivaKDj7waiWpqH2g1rJdTgujsMmkWTomKWmV39mC",
  "key28": "KVwxiRUUiR37ci6ct4sDCYhKaxtymgAvbFJpM5jK3aLdchSgEJUX1xjzjxeFyScz6tnGes1GRUva6j5D4B2t8m4",
  "key29": "r6ETqh4JB5zwtm2TrjCpZLRLm7pZ431rL31GYftuEmP3GH5f1Uwei3jaffGtETAuRvoB2qXsmw1QcZnJC7fA1fW",
  "key30": "3B3VcMZYtaMktSfDrVyCsgYaZHJWKXS4wJF6tbbYDrDq77riufiZMJDYKLFKsfpcDBm3ZFNxNBusH1TBECEngDet",
  "key31": "5tZ1HoQorWkSAMcVYQq4zUu89PH4aeF8qNrAQ6H3sWaA9v9ZiH9qCFSHHiQbChpJHEiMzs2qPj6AfSnavvUP9PDw",
  "key32": "4xM2Ngy12Han8NesvWBbDnP2BWiQ2uwJrXYprieLhPcS5UPe6YhxCmYdd17y5jUnQXonTWaMAJxRykBshthQXhcS"
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
