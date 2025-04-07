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
    "474bUW7rywNoewxUrniU5EqsYftMaQfSVFDT3SYXqmeJXbTAjZuLYEzpgw7TptDhRyzWzNeaYx5hVydLkb8LTNpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dgWDyBJFcEPjbJVBoPNb3ZGcYW4v98woJrAM8bKL9rCLJmNtt2fA4s6EJac13jgx6WddUZPxr11pSGa7SNQhDqg",
  "key1": "3hyyguhLzVfdkGmk6JCcmmJx4NrneCfdxZziH6csjiL8LPcBqFqrVJSVVGnSw2DXkPVhdLArWXtjiqd1Qvyds2zf",
  "key2": "3GopSXxdxZtwsXw1MvoGxcmunyKupiUQM4HZELmYxLS5WEiMGB7KsfH5LoaNSMLpQzT3sLkUFYHL7bVh7QG8ydCg",
  "key3": "3ufxGmy8qn5becezyYkj2g4Ujf6ZnqxtT2E85JKCkWF9UanLVmks4sVLKcCFJijpE2Uvrksw5orFhYGY7RAys2oH",
  "key4": "5nXhHpCaNd39s6D2Ay4mXwT3VHaNy62QT9JYbgQkar7Yqw8G5ySux2eHy83qUG1SF1qV8bie9qjhSoA8bQ9eS8aM",
  "key5": "5PzurK4dh8Rnuscuu6jet8tyohT1q51Fh63nbtVMua2KJknZApvN9LeeQwpQMgoqrJMHNRFYm6WAcAbB2bbkB5Zn",
  "key6": "3wmAxNCZkW8VkdW78FheYi4Z7SbVpq1vFTe7pnkZpoERYF3mwyZsU2DxS2dabC2kA4Kcwhr1XCkDpnZqCgzRZhBG",
  "key7": "m9qu7RXVHxsMEs68WPhv8xSyJmaJmEb9rSoMV9sLqGA6fU1zAMu18RSUS1MVWb3GrJrwVaoME9vzYKX4to3Xwr8",
  "key8": "7HBAwegjjM51B9MtGcgSjy7QjfBTKw5pJUTLiRBTkYYvNNQhJM4N9rpveoV5MhU5Koa8DY8HtQg2jpCc4bGtupQ",
  "key9": "4fbTeTycMVubqoCMwzMfNMtHNfeqXVqb6qUuTtfnqn93PDDsETreb1KMzcDSsCkB7mFev5k8ArpskKooHQxNfrnc",
  "key10": "4XFrQymM4j7XS7bokouTXGoxwpxd6z6Bt1MHH3tnfN9nw3Vxd1Jm45e9yqkdAwBvoxYkZ1QUrB7K9SvD2e5qzNUZ",
  "key11": "3ucjMku5Wv4mUgH8QopgTPDxvfbadaRJC9EgM8AmSeLjzGyA1ezF3aMavp71EAUL1UE9sdHccSffXpxaZtDAvQN7",
  "key12": "4eUrcbP5r3PY759B9793n6DCxhVnnmK7Eqeag4D1xBvVwBTLd3itY9UtMWjwBPrByYMSnjnEdNENTZJnffhAHf7h",
  "key13": "4BxDVNNHhaCP5DVx14Hz9mtGTveUzjPripphq8jnH5hSZq8q3ZTkgmVKarmrntF3XNGPpHzhzXPEtgNy2DrDnaNB",
  "key14": "5AqGw9Cmn4niHT43bS8HdcspwDuXMuyPLA8PzZRL64FkSjGddvQEyhrupx6Jm5nG4bb8jQdKRMA1vhTJBosKVkw4",
  "key15": "3tkQzxhVDNSgRuQWbuPQXuQ6sj6cgSiUrKpoFF6a5Muzt4FScdfgkYScYMzeKKX5WnuDCSykQBniP6BZwk3mYCbV",
  "key16": "2bHr8B5hk9o4q8s1XZJTvL99ULvNsXR7WwQFfxuq3XWJ1EZNQVuFo3CM6YVXZRrzjz2gugQ3Pqzck7KfSeT4XDi4",
  "key17": "2gRMmgX9yjhGUYUdbyH1Rp3xvN1eJRUZBt7Eifn8EU2cHLgBaDr5121hTdS7oTxA7yQLgUfzHKadVoB6SACGP2RV",
  "key18": "5RxaoCzpmELf8tB1rxjCPiWGEa9mtYhbSao4duSkFZYUjZbfJv5SbXbjrT5kZcu2Sdu2LgYA7DDTU11SSaqx2Ysn",
  "key19": "4jxTSEDResQRT9cVf21h2AdqSLVWRbPujHktcU5KLL7M9HBtvLfBtTHsGbCmQZ8YUpaHmcaTbAeuiC35egTAEGS6",
  "key20": "5AAmjkALqNixV4j5mgugxjRQtVTrcuPYDniakwQLdo2dqKGfztv3Gg976UdqBjGNrvSpLTqVuppykii1GAQboNpw",
  "key21": "3VbjVMfe71cQ8qF2Ao3VmMyFTs672qncp5WfztewLWbt2pLqYAyyCx5UADqbSrv7yLUKYGm1d4uvLKevpDeduEaJ",
  "key22": "qw4Ro7vmpNbDmxaU8tshnFhugryTsxpEGYNns6VrWFCYkTCQ7AF2hkkWykeBEX2rJ4yojPEXFSjpRDJEUyZdhB1",
  "key23": "3t8asRuNkpCasXZNGwbN8fSgaAXeoE2efqVwE1jQuq3mSjv11vMu1fxn6pSXRuVY6CXjHA3NWMTrtj5cquzX8iNK",
  "key24": "4TWNzta6hJJ3HquDpbs6xynSpuLNwcu3HR4CC4HbMHnrwwXPUKZKT5GYhMi6orDpmWgBaoc2SYiMEHkoNC7WV1hF",
  "key25": "5MzNcwqbujKi9ocwCPWWR7ifz71Jpt16m9XRFKKwjGANJe2emJKUbJSBVFTM9HqrPWvrAWrUccHyJQhRVT5F9ik1",
  "key26": "422dEYowcwya6PYS4bE1Zr2VaYqyR7hGinWxPem66a4tH66wYeTLkGrK4VFJMD29ebtZrnsL8DQQgFSX9x6zuGyW",
  "key27": "52ZL7VFpaLQRJQsT1J6r9CTQfRX2d8srGDUsjiZqkZ1oKwbC5bJnkjtWwHvsxVJkhmtumQopZbtoJBXsdH5qnk4m"
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
