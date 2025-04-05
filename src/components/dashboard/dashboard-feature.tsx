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
    "JxWPdB8f8SvAG6DLtwLhqgVpD43tiGbBhkDzA9BewycKQnz3KgpVFTUy1JYRWNk2BwaXc17D3t6acdApZ7E6657"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rgfnQzHVNCjEpd4FAt9pFcydg9WvWEzzBWKdA8EZnM8Stkw81Wro6P77mD2RSmzBfxbDQJSsev11aHNdoWKwvqA",
  "key1": "3ZraeQfhh5sPPz2UevpEE6tqnDmFUt88jcAQbEY1pWHuCWHAET2RCbBWMkKRcjzRBqL1myXZcdGw3NSpA3Ev47yG",
  "key2": "4B3jQkjsMZHv2iPcZdYn4pjG9wHypW4LtTeJphU9zmLQNmNagnYQxMzMnUqhZCjYPu1oHApqSNmWYKU3wrL3ETs7",
  "key3": "5cnMMcQDWtHMnXN48vh7QZWqn8tuBLBKnEko5erqW9PAug1LtuFqKhsWwvU6MJAopu2ZHcFNUDhcB7mxfUsDSzUz",
  "key4": "4dp8qdh7GrHrR3uqkwyyKiwFkTheH7X3Dbk1zjoSwzU1tvg1fq2wQqaTeaGXyGB2v4ZLvZgatjuKqZvxey3UcKji",
  "key5": "4iuYhTSGD53VWxqUun9em6uhMQ6VGzorW6jsFWiejau9NuYr9gQvo3SRzxxjEXZNBF4xkTFDtf5DKdTtK9E4sZ77",
  "key6": "4xiMzL8QL4FmaB8QNsqqEqjoJRwj524sybD1c5MegZLDKJJLLA69po31UBgLH9BspjqcMFpNfKtaP1JAWqHASAYC",
  "key7": "4VhXtUVbWA3AEocj9giLKkdbHKMCY4yi7ycE94okYkFbNEkroXpsduw6hUfB85zjQpRza7iBsKAfyg7Km2ks9L48",
  "key8": "XdZ65kVNyn9BcPKFX6EofHvnQrs1ywpqLNXf1PaJge7dfHxgWzJbfBdt4q4xToE6bqCaVnf9fFvHLFpEiXLifbr",
  "key9": "2SjQcaaT33RnETQySEGeVGYgAMH7nCS1XgV5Lma6SPWqZ33vsxNCFcfTFk4p3qXSQJ5vnHHdAqw1Xabv3an86Dq1",
  "key10": "2VJVk7GjFiX71aSTJ4xSDeY2YnFquxtPBZaeApzixwxoAPMTsHymnmD4xaKUFGLXsZ7pWhJv5XmQ6jwNQXqAmm9r",
  "key11": "2ffYjG76QVSeSrzBVcCKoL5EXTMxE3tBgE1YQ77r2c8ApcVDiFRtg42w8SmZr8iqRD6JcDU9g17ZSGv2WUvqqmZt",
  "key12": "5UyTAqXp6zAZ5evG416dbCdiVSxnnbJxGbzki1Y4UY8ZvNjJgJhU142CNRYTj1sGEzwS1wMdNjoMQcFrAvawpd4t",
  "key13": "5siVmfNRAizdyBBN4qbdMGS2rs7woY43EkR8hnXBH6duPphG6B1GnWE35uaoWMTNFt3tDabRZ2WRFQVYhtvY14sj",
  "key14": "4bGxmHUpCtYeFwVDhdcrv1Z3qVy2sJDMuGRx75RzynUPF7fDRovTKx133KZBXbAyCiStuK99ndnZx24sS5VoSmVB",
  "key15": "4MdVzi3fvQMJXk9VMdymgmDzsWYvqskQenkp55iNJZxP3VEWuZ65BT4yfX7h4PPs4ghu5M7oR1jqYJbtqTqRcnYf",
  "key16": "5eoMD6C8kuyg3kFg3F6kQz5UxhknbPGC8PBDm3yg5iY51ph5XSMSjHonDeTfE3K6xMaegGjz8pHz5KJio9zpRH4",
  "key17": "5Qtcaekj8F11yWNx6cvZxRSTkikVoN9QZEeTurnf2ir2y2mAPsbuonoeeamTqx1LN6a54NqZvDyKmMbY8BzHgxLB",
  "key18": "62S9YgZqFcGyQ9nArgARWR7DFaoAcHa4yXVGXyGuo9fwv2o1tztjKGHZnU7Ct6iNkhUmaLU4cahT9eqh3mKENdKc",
  "key19": "2f2EPKPUjSzP4mkYuz6wzkWzH2xt6fkbK2E4nppWRzxtvwqdFK8MeVMhVX6jCbz6tJ9UPpKbsaVrPuTL77Txeh3r",
  "key20": "2h5SHUeXfERopep2QgXYe1sypzSy7itdXkCGQYrTawWqQywRkvX5Uxq3fkXHdR8EjVycLzbgiK1JiaS1FkCQ4Xqc",
  "key21": "5C5A2WcUg8caSCXNW5bZKVvidKJdF3qLEnD7MgB4MGLhuUjwg96BHt1td4wNhhQyaN7LExC2AosZ9TcCJURA1enp",
  "key22": "3iXufUSaBXAZoA9zzwtZupzPERzR6e5JNWQFkCuvpMW6L1C8XnritCVXYWFd8gpSkGb6Yp9EFAjqA1kE2Zssz2u1",
  "key23": "66VUAAKQDF8hHwcGPcz8w6RrbwWe3HqUrroL3EN6Yaq5sVHD96A9G8Y7HXfFHQDYzKVWZYRNAzvN3yPdETqcnrND",
  "key24": "3s4FFALVvNnbxDjnzVj2XDHGFD4LD6nUqMXPfJ7YtgiLzM4MuRBDiYkoMpGNLXsDK7YC8Axp7ffNmxd5UDMQSEvD",
  "key25": "65vNdd7BCSJ5vo4aVX7DAam9Nxa1WAn5E4sJGRqXyaUx9RimcfYL4b6JVVtHxk17RZCbtejKeJHMoCfAHkF1UQve",
  "key26": "458P1sEv3C7ciV5onujDDxGFXmFU8rPw26zedQLRAS5iymRMVz1AeUQrL3qngPZqwb1DBeJ3dzQ9wtwNYeUYqZry",
  "key27": "Eo1fGqswECbDCUWykTymr7viP1M3MmnHKNvTjcETbdnBnNXdc2a1Vtea8tDAjQnL9xfCiYcVsB8s26ryhqifvMq",
  "key28": "4hEDFnmcc9dvWYcrSvTQn79QJV7SxBVBWUuYMokPXUu8J4WU1qkuyFYCYvCv5xKEzumKZmg17XQNDva3q6VQhkMm",
  "key29": "2sPhCw8J76LDiK5JKDaGjzB3V1LpmfbcLWqhQMgdSGZBwLRQ8RiSPBnzgHy2bVW6skyV5Gnqxt2SQqz2biSWpdbv"
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
