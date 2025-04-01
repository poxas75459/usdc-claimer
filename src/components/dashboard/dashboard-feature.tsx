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
    "2pB7P58uNAxvyqH5ip95skzHVmHd2u44L52AC8KQxxLGpw6766oauAbmCiX68YmMVdnMzVcUFcP3FyLBBAGsQVTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p74TuUwH8uL6xqJWg7A1tSjAosmt9Dx34xVgpSvVMWYB8qcuDyrWSJbi8oyzddcAjQA9Gm75bZM726oB5RZ27g6",
  "key1": "2DvgEjXZwHLBGG1s5LAXUjdEeTUoyuVD6TZhiSigoyBQcuC5yK6curF8UhbJzmbmQ9sPoGktcwMcT7ehNSRy6Wj2",
  "key2": "4GZC3YCqzXBHX3hhY2z4sr6s2BkLZKhczeUPECddeTUDYvWhKfGjQFotztYNTEztbmttAHNL74qtm7dJAUj2T17H",
  "key3": "3gpRKAw3RRk9827Xa4kowb5Z6u8pSPrMxenTwpnzyy1Lt9u235Z7ryrYkmBNyiayuRk8eGuki5m8m2iJ8E6ZWS5G",
  "key4": "5oy29AxZnVAUoUGHRRhGzqwx9wdMaQNTvefGSmsTb7ACzxVtgz6JPZc1EJTV3AfpKCiZsKuVi3hjh3NcAQNg4vSi",
  "key5": "4z6DYLv8ykXKRWDTsgkC1JoysJkr7ThViUoKtzfQkQ2kzCB3Wkj9rpsL6VEACKS9eoQtfxNznj5A2xN8Hnz1CpXd",
  "key6": "24mx7JpBvivn9FXUGsSPWoKdsTMoY29JxZDSndW7PkMqLNzqeZFT6zVy8yGqP71Rtv7C9LdeNmfwUyVAuMJpGLZt",
  "key7": "257kaDU7Xm3GRAjjAh1FecijWPdPHb2NELxZzxScoJf7K6Erzak9cgSp7dUig1SWXHhX9pAWuB9TwD7iDRuqcJQG",
  "key8": "3YeH4R62Y98VSs5L1kuVttL9ev29pPhp9zhbsXp9Wpk2EobYRYeVDfi2qFdcd62VzQGamBRnyAoYdw4cbdJUhpTT",
  "key9": "5zDqsGnxeuccyVT2cvFDyZAf7kP13zVfRRYVZjXCooWKRwUge2vNSqdLVMD36hierei8gmJX6RQsQL5BXwaLhMiy",
  "key10": "2LYudQ4goPxsc5riJM43xU2Cs2T6BA5CLcvEbGsmJc9TVCDj9PmobR5zXJY49nKGFwHD1CCaHmByQHoArSyntZv4",
  "key11": "4fgGNHmFZCoox9K6ZFNVeXN1a4hzW439qq2XJuy41Hqw5j4RndXA1kXKyyf8gCbg3hnf6XZqAJRjzYJ51rmUr87R",
  "key12": "4ZQ5tRn38yviHXUtY3gn6wBXDsPtQHXdzTTyLNDw9H5vXjCUDXFBRW7JHapyCX8YEcW3AnrdSTQerVy2p2bgUDwf",
  "key13": "bzBjF87PZt5SFbFkDmHgGCz9ZxtkB4K6edxv6LWpPoREbKEe63aRV1iUXZyd4FC9reXFzYxqzt2xqXs1rvikjdi",
  "key14": "54kECLeyG74E6GUKySacvZtACSwhAGrySMjXkN6JycpW5XGtmWRXHbotfmo4L7BgRAaT7GQCyFyL9YpWuKN83puq",
  "key15": "3vt64KibsyDHsWiJpBZUte9JSAB34HHjEx8CgvF1dm99q3uPcQRKD2CE4umWQ1YmrR5bvGieGH9TLYRCKt4UqqLa",
  "key16": "5Bab5PAJs3RPRJegnAYvLWRr7FPZcQg1bC8V91gHGUteD2Huz4h7LqMHh6wQbXcqdoomrFr372k3RMqfW9NnTfp8",
  "key17": "4UCrjRaPtAAHsiCwkLjJFTFqc1cXKM4mt9RnDqLN2mi9NjWKS4Qq1Y7aCvnbvH92dQsVQwEUPQfT2gqPoi1mpxnD",
  "key18": "5pqprt7Bh2RgfHnA5Cba8mRfAzrWuzzJmEdeE9FL99uLhUVy15nd5vzwDAjsmhZzmmykZWB49hnjE29zvXmgzSwE",
  "key19": "4SBaPX4ESRJhNTFTj6T2KkwQsxYLqKmUWqZepPUtrAgjwe7wfgrA82Cmy3PwveeDYkFi6Ek88RbrrWMc3CnDb9j8",
  "key20": "RmKuKKtfhBUmXEtoabfgZBKsqGSCRE9mo6CTreYfxnn4cL9oFeZRLGVor2FmZ9gxDYRoptCqMqoLcd8mkbWUnXp",
  "key21": "65hzRJG95LPejS4qHsHibhJM4xsy7QhbXzcvHtjUiNEZyxpVCa9U2qW8CGDD1QWgxCGrzsaFAYUuvNuCfxYVUDUA",
  "key22": "479MH81bKuYv7zjrV7CQ6jtXjus8ZhTbkZWEgBGdv2Ce4YFTqD3BPbd6UAbHPDfyzeBhNFGZx5cthZ3AtivCDZ4M",
  "key23": "5PkAvgQtVUtG6YDFRPVE1fKzWKVRQT4x7bSQBDqewG7sF6TCh54k7UAgGRRZnAmJxFcsCi19GifDePMzhvo7eZY9",
  "key24": "31R5xUo9AT1ZRouzM5vhdZQJ3KE24wLX7LHpxmRCWQY83jv6NmWUt7EbhHuWoxdr4e8Z9tCzucgzxFyCyuYQKXU5",
  "key25": "3DmE7TndEoXCpZ7Vg6Nf5WpukHKuLvuwfXuz23Es35AoaxgYMwWwta5m3rtPAgYp5S3GcXNztfJMy7asU2uzH6Wp",
  "key26": "5HbyLYWD1qxLiSbFe4AMy7f9maHPoQT3gDccVmD4nyZM76zzgtbRUucFFL188FdmNnmQWgrzbcCnkmu1YRyGJymj"
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
