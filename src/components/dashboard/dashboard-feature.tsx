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
    "5TgEHSKY1dVxEDzAmkJg2Q3BDTQ1wafHwtWjyGfdBh1tk2GLYZ5U1T7kae1UmWyDtFxPxCCGCyTf8ssh2gfKK4x7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJcHaM9FHNkLUXSbJpZ8CmFMQX55qxHSeKfr5552iUuVpqFjYvXbeZCjCKsLoMKRV4n7NUvKHbPYBYUThgJuAwh",
  "key1": "xmTJdJynZpRxvWh4egPerVx3eyxLDHmD2RnnzpdQC8oZ243N9FWcBRXEwaWuRoN6pW2KPyVGAofvkoxJgtfFByD",
  "key2": "3gcv1u2yHTtiSiw4Joug2qdRMuvsiNES3WCSnMVsmt2tic2r7GWRkLrwxXnW8VyGfNGbNewvUYMAiyikasHFXgMJ",
  "key3": "58NiXk84psmauRn9MgDFMp4KpzPLb1VXAmCxVGjbBDzYYBnzyHankUQ42xgxRdncsfFm275xcwVPMScuZ4kCJKC5",
  "key4": "2SY9EiYcnGbGnoC6YGihvBKEDMTWmEu1u26CYdk7Fjeg2xSxrwYxm7wKAqbSBovVihtzC9uVYUK59cdGeLYSceb9",
  "key5": "C2r4hPrz4LpXkz3ND1PHL8ziL5MwPXAekrjdeBvogFVBg6CDYy9hMmGjd5sMP8rQwm76pcNTTVbEwLjoQ9brGLi",
  "key6": "42EWd65ttTFvys4yJWCoZQY5KGXniB1h2TD2xXj1QapTpJFxKBziAjsyhQ2cr6VAfR6N6ZpGvERvxqPYgCiXT6xF",
  "key7": "626LJBgK9BeL6bChqPB32BYyNJQVUjRjG5GyYha3vAdRxwiMJVscscMJdEdw2jjnYProe18TY56iaGn7brzBCiFP",
  "key8": "5z2x1PP8v7hBM3XaTRaZZtBAkDvkMejWhaxo6j2Ha29zJKhdi1iupQsbwovjhMwGfRKMsQoyGmurA9gSJzDvhPUy",
  "key9": "TgswxnKp35GnWLGQLYaQgnAin2oSbhNqT29JDJ4oyp8L72pkTmGKWXCFJUpytt85JR2FmeayVNAyi1j6V3bGaqf",
  "key10": "33oKa4HJMAqSJxYd4sG3pAhnCdVJvHtixo14kTAePXifi165vofbJDkS5UMZakNWGDgZWLbnKZtsBV84fCgJzL3K",
  "key11": "6gTgovudm3U988VkqUypqJWzyasgbLEMgzMQEDvyZpGQNnqc6QMozosax5NWrWEpaiRQxZQp4V9Tt1z9gzqjQoN",
  "key12": "ZL6CmeF1ow1okGZBKLUXYAZxyDLJDa2nhrJvQTCGo2nny4HRnCY9X2Eu5fJZR7TWa9fiit3xvRrn714D3PVB1iB",
  "key13": "568pUoLPwD6PqCHwcts7Rk6v1tBd7rskfSoEbNVizn8Ch462xKBkTLezMfh4cvoTskn6ZqrQKaTdfn6xnjroqnjS",
  "key14": "TEnu8sZjuqnAQ8b4v65TwJn97BGrddhHeX7LRysnxwnwwBMLVRMi2NXVqGZio1kBFBUU7wKQj5CvPvn86zk4BEr",
  "key15": "2c3X6yK155wdzdCkMTRe8k9i9C5yJMvDd9YNAK886gqUj9GApQT2ea9E412tCkja49wLZozEGZbohKShmAWZgmAj",
  "key16": "5uSNh4bxNUhT3NGZ15BNrJShreEa9PKxqVXGUqVqBY4LjgxyxWBr8tjZraWmnQKBSG4bdAsuPqjXc5RaZWxbZZLF",
  "key17": "3KrzohV7CKPSjk9NzxRU7DSCm5TY7sTBZ3vaJwEXUMqExdpwaAUmMcQq5qg6kGmpuAHjzqnv8ZQW6tb2ewcUGvjm",
  "key18": "3pWcTGMkAb2xj7jYFvwwBR1YZ8hjvMBE3qRwVxoKY5HR4qZTqxbiB2hrRUhbK5ArZQ6uBkjqotqQvHwn3z8RKW4x",
  "key19": "2fyaCUMHccj2UG7B8BTa2XrA83gH7R3jxH6WsPHU3fq9KENDwYJ8jjDxhNVycbjbbMccMN4mhUnAedP2vRNZhqYw",
  "key20": "3ub4qgY37gQWevEg5EtdZUMx4W2HKxbpvSk3wuumcjHyiNSQUwznrDAFwvp9mQAB4QSuQQmnTWUjqrpNqQWBKw52",
  "key21": "26JkXQpbQi3CnKDb1WGTT6SKXkDfgR4QagRytekWUBB4PFsUiKLnyMmntqj6kyxxYVKzdabfRsJHi4eS6FCQ9KqY",
  "key22": "3fa8DsMHg23h4MJydPkWLiTWq8cUrAjwm9qx4m83nz5aZkThU9LecXKrccQVMyddZPX4UdoafHm3PzSENcm6kLT3",
  "key23": "5NS44ocWb4mWUG9RuKsHCk3WabkgVXoKudMFn44u3qEn1iGorTG3q54g3gBjncwe6dagiXvKEFd7Wewg9HEGR3z",
  "key24": "2isiXE6JkufaC2n3t7vRH4yAYVqB1GFFxhY5KXUTLZ2JitnhgP2C1AfD7JdiF5FFCNHM9zj82LmtwAWPU32uKdmU",
  "key25": "53g4F4t9T9nLjzgCDsmY8rpgEky8E91TF8dDoQLtUuDkT5s9BTdHdYV4DYDJubguGsaYWyYSTWKPwP4j8bsH7wRT",
  "key26": "53AxU2sA7S6LfS8ULNjVaWGGS4JEuEkdFpHT1GKbUcdaTPaQbyYmENGRWYNzYVzvHpz8pxKWSd8pJA5MQuRpNQ6N",
  "key27": "Ttg4ERiNJ3LcsjkhBqBskCNLyRsLKHX5JWhqj1VaLU3JZkNRdPQKJzzmrL9mWMvrfc8PGvYX5UYSiwm3iTLfKid",
  "key28": "5DysoyD9haE1VTaUDQsxws1kgmtu6gjncKGUuGbXCQTnkLip9NDSKwyRCYw5wiSSK3PdrbsHubHyQ9xhEkbptTqS"
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
