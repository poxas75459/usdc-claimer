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
    "22BFAafWjp4LGpSQUmfkvL5hoXQZpbz6NzgoiZB9P35BCDKDRsCMqJAhTWCheXJXxBZe92choqNeR5P4Dj1sJkoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LGdvQHmusmgiCuqPoahvTfLCkia77vyo8547cZ8tKyVX7YRfYWWjvPLvXgidhFv8aRitzwM5ieZycXVei1npFs",
  "key1": "Jk54sQLit1Z71Ty6tRTp6kBcAMwQbTFdjVjY6pPJ4iCwu52CTLGUH9JdXMoTJFzSKK3wZRp1UpmcRnh9Vdjnxgw",
  "key2": "4T5HTNdw2Ks2trecxmg5Jxqpsv4JcDcdocgP5X9Vrm8s5p1wUmDLrmDzHiTVymENRG7h2x8mZhE2DYjPPyHuavk1",
  "key3": "536NshLX2g1CSRPHmfQuD4AsevqByooeXoDadQ3Hou9nvr5HYc89Y5MLJpdXNcDQoqoeZxSQNUbpQwusfzVJHXhM",
  "key4": "Pwkf9PGVN1GhmsAFwNDnJ5YwFocqCnCzdkWWtgcu4rB4Efs4Q2wGRgrrg4FtFFanyyfVm9XSyN4BxX1mMChAcVh",
  "key5": "4FHHEud2Xi3vVT7oYVhe3rRbLcXbqF8CmveN6NQxdkxbcdfZ4Eyf5Ccn9yZu6EKbqWZPrr5DYmXHsi6hEkpR4RMb",
  "key6": "4nRCNCd4FKx4gfxGY8Vyz3t2qEZmKpGNq5SPoZj3wgzL1vrnTXxRUfqpTyqyJW1mfN2Gq6p3cnf539C1UvyDYyaF",
  "key7": "5F1ZtCCoarWS8DkiaeLnubPuPtiHJaYC3pg3gyCxuEyuzTuVGbuq768c834GwCNzXsZXTAFCQWmQPwSnMPdwsC3s",
  "key8": "2DEbStVaH97QRkd2ayeaMUyE7ZYWZbD1b1bQcdBuRU8wZkhCyTHBDKahVtJqtZuf3xaTG7gqH8Mx6rPYxMPUqBTV",
  "key9": "3VtKe1H31NCmvxExihBRcEAY7ycj3S9Ne6bSF6rGpsbHYsCRV6xoPwxYD8PUoHTGg6y6BTNJP7dsvgfvGHb1AJF",
  "key10": "NiysCv2qxMHZYshEao2cnAoNcuNPSm1QJEivfsWuy6hhcZdb5jJJtWvv8AUAbGasjXmT4N2QE2aNcARy4ise716",
  "key11": "5atXDzhobB1sQF3GuqmKkpx8TqJxHGhQD2xWTKWymdcDP2dkKuFNYR2pavw6FJqSXSVDA7hDn5S33TqBb7Hgji9h",
  "key12": "3gLqzMi1siMU65Yg8anQ2Vf4b9r3Rh6J2mX1k9B1vAYxNoH8AaVzEfqpubop6tfQaDjZ2n8mYn1ByhMteuqbb1XF",
  "key13": "5pzmUNKL16wkpS2EyyMq6WkxxGZY8CWpD7YjZtUYWkTobG557bj9WrZLxzgLHyRoLLWf4xP6rQCJcANjTBQdsRnC",
  "key14": "h4Kk9ykX2JdWAD6a4WTcV4zbXAHaqeA8hL9Q28aYRgKCMTeeRgC2eGGWW47cPAGr9oJ7nbDRfxDTXeCHEjnMMjV",
  "key15": "4qZGjLLqq8heF5Kj42jHQUuuZUUun5zwx2Lvtg7n7teXEL3dr6N3bGSLBmQb53M28jAs576zvC7NTNoXqWGHrCR5",
  "key16": "4tzoVszGvu6re5ycpaB7RSx4npuy9eZgyRU3LpzjftBxywGD7UZ4ETW4JfykbGVBHfY1cTsgw5i2Y9JWGnxQv4uQ",
  "key17": "Ka5fdjjxasSPpczanT84RxM7raoqsdDbmZLkKKNyg1F2CZM4k2n49tZivgnznNqcRZqZSQPKUirbEZQLMpXw5CN",
  "key18": "3Jz6SjRe2hapnbgn2KpuLWbaVZJAuMHheovboNRQy4ZqNX5kmXncvaXwmmq6h7yBG2peWTwLoAgBwT8qmW7AgNmG",
  "key19": "28Dbhp6mt6mCQisZZudrSfqTTHPGKeorR4XkJKvQc2dQcb8A2PL5Nzh6KprR3FSyNMRmpRKeCRxZmZKdP8kof9oi",
  "key20": "4FdUwhhAV9P69CH9ZGVcusXdkRxSMgLV48mFsC7WGcT5qspFV1d5uGsD344aLCdXWCXjy8KX4GGJcUyu52dmXzXk",
  "key21": "3yzT4wyRX2tFLDFdxyjahAMjRTyPBvFWsyzcFEvuNUcVBXZNXmbu27Gki6hVdhq8zg3J1pELDbYDBSJBN8gpFmbk",
  "key22": "41tM3NZTag2NeHFYfGsWYefAKsmXq4ssAA9xQVgf8tvViYNTAof1w4PfzGh9UWHfjKGphGdxxo73K6mDvSBBmUme",
  "key23": "y31We2uiSQzm9cmrrqfSzqajj1bQ7bW9RLQgQB2P38JasgEzkAcfs3UqiM4FDpwraadPJM5crff5ZziMHk1Yuan",
  "key24": "2TGPJBFwgHf8yuDrPbBWzwDU7JqrSwM5Q8wEjy499J3mnHKYADP5qCSJrrPNqXMxPEKLzLVScLGmWrVvetnQce54",
  "key25": "47RyYhsB7nfpu7UxxMU9hPxtphMaWKZMTh6iD8ykf6zSqSPLJGUe6gLsdhuS8GtvhCphPumvBw384wyQMETDz8BF",
  "key26": "5n1Ycs393aDhVezAGxzxhhMqZZ6cmszFVsvjGbfjVnZtXrzuU4Xs8qA5xkXmUJW7p14tz9aBUragxiQwQ3sLB5K3",
  "key27": "5CZcNkE4bkiZ7Ft9zoeensArfmCjGH8jPSSoYTEYi8sHdtnm9CqXKuoAmQLmKcFLkh4eTiahf2PUyRmYJaCsfi6S",
  "key28": "4tRrdUGMuNAwFp56UJhKiW1Bw2aPwNCpJDnZRJSjxAoJnBYiJHmAZLXWLjF4qhqREwCCP4xR8QsytKwoQU2M93Am",
  "key29": "2k514o39y45ZUg5oMQkZtxUf8ZrY1iuA8xrQaTAox74NzJbVPtUkQnUPd9PmrZ6x3aBi1RW4WgSpP4vbQr3HD4m4"
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
