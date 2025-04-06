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
    "3eR6VuubMYtkKJpFKsWaMWrAVgVh32oK1rizoxyjLpZpDdVJer2u1mGaqGiQB5ipbyx3CkJjKQfHcskndK5W1qWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhJkRexV7wYpkztpZ7G3LGek14RN7UAdiwut9RbykWsuvWaJsHsWjQfnmbkuP8vvWU1vQ487NF4MwUNCuj5GAzH",
  "key1": "4gLgragYhXB7hio48X6h64grTAy73Mwron3dCdCZZf159ssgz1yiPb8RAc2y7PysGTs4iN1mEpscm7RKtgeGb9VL",
  "key2": "34gQ6XKQeKst5wcSyp6eQbQqmyytPQV92HErTP9ypVD5RBFi8tySRcy7yLUzCw2tH373fcnBFFGnsYs6R79Pp8Hb",
  "key3": "3Z6XyGznUZjMFfd2AkxATUrsuY3WfSQPG5PQe4aSc9KeNsoRb4mwPa3UBorgHrcHDsa9WN4fZQkf3YngXAiBHU8f",
  "key4": "3EsLpNYDXjVGiNQwifgpDsrTXXBzXqV8avotaDYRyWVya7sYah3EkuJJmkpNdkciyc6YQQbjxR2yq19CzcsucSS1",
  "key5": "5gmo6ojmEfYE5eBqE2YJkS9JiJ3Zbz32LzkH9TJxaKB9Uf5Sax2CtUewP3M61jGQ9etT2jFfHjbJTE8Sm3anPppr",
  "key6": "4A5FRN3SUefpFoSSBzJG1GSo7m3DTeGYCrx9WJMmoC78advx5CVSC7hqPXNkCc3QebwhFTKH6idGLagXKAZp7D8v",
  "key7": "MCvaYjhZXsfDFQDaXRRoYrn31vE6QqyyvSxKiGGwQFukA4C9FarAJ5HVRXAwsSwp6pkhSzequy6db2jPTeAzyzv",
  "key8": "2bvFTBabceZRg7azJgdFyDG8XnkQTdQVyedGSW6ZSLAvz1V4P2DUeZ6yKWnoqUeje74wEWG5BfvKKoZBWnj5y8J6",
  "key9": "3CMjV67oY6p8UTvhP7xcXn5becQ32pB4pzwJCJuowGjkyWq3Vf2Ld8dPvvd9cUsBAYD6LHZKCBi86kUXoHXpLpnk",
  "key10": "23VXZgbVroWXrSwQsEt3iLFXhyY8x5Q38ic3uECJGkVmoAcM5MRDQ8JNDKYhCuroGzjxnxj1DGXznQnDwAJZ9FnU",
  "key11": "4pAFQdLwL7f2Y3gewN6FzewvYLCWzyM8QJwthfiGtQzh2dcKhFXUKMibUP1f6AAaRRyG1CSYwZK2hbFy8XNptC7v",
  "key12": "5GMUirdk2dgy1z5yNKMcNuksbPDJKgY8zXUKkP4Zqh7nrsN9754jdVepHc1wkZ3YMGzK4GvmzG9Jfh7ko1QZG82G",
  "key13": "565YRTLuVELL6Vg9mwWuZhBWSnWERjuDEotVZ4wWq5zYqnKCTGjiU1aRdsezJ5oGWqu52yzUJ2tmHTLRW8U5R7sX",
  "key14": "P8UXY8iHUSH4ZDh3rSPzzeHBsji1o4eUa8LppkWykwpDHyPDry4wM5myF8KNyc5nMjUYFZqnVPGaqtUZsxRbdWg",
  "key15": "2vAWAJKWM3GmWwoWW3QxUAkZFGTGJ9XFWFNb8wXXyCJKqbxCZm2vqy2Wev8FH4sFFvynfnaNdHrD33Tu7cLF5CNA",
  "key16": "5zCpRBs48A8ji1GSN3KiinLdSENEKK1eTmKgXMv5fJ5kyxBQZA43rbaBBNwkMvuuyDDPbAmSjkg4P81JT2rZJCwL",
  "key17": "5DxvSCxKZzVWEEsxXJfxyL8hSGYbieyrNqhh4roQXu4qHPssWqQXFURTrJ7vuaLyZEv5PDBsrAFk7KDvvHEHc6Xn",
  "key18": "3Q1PoQFqd2obnWAx9k5dMb4k8onWPvk9gXXDJrFVrDavw68NgRKTcQYUJ1AseFm1y2ZkcxwnA6CWVWgJMN5KwyS6",
  "key19": "4ftSRVYnphb7aKNHQJs2XzuEi4dAfcseEVtvtYp56P1ndpL9D54VoWseeKitvZRLVJJ5n66RVuGEnKqxmTkUeTig",
  "key20": "3AxQRmCei3bHNQe5i8gZBkcLtpJfveDo2DUTEd6c4LQqaB3Lr2KK7maZnkwgzge8rSVeBxjiRPvWG2i3yu1W2xFR",
  "key21": "2Ep7pwjsXFsaMTXTgH4gYoETU68LFRMZmghCfk9NWcAwifGV8jeJB4mXvFH59NbCXJyyXdvCHRctEyXd23cxbwgr",
  "key22": "28YSAwRWKwnQGjf9L9psrFdpCSBc7SjJUKGTzvCt8wRkTqvGRSYSmABwpNBagXr28m8FGMZ3ay3HUXemSQZGfb34",
  "key23": "2GidpkzG12tudrQBuJVHZpkUeyBpkUHyuAEBhrLqhuH9hftqETb6LUSJFu3pwomZ2JSWw5pPp6q4fKvBuwmViLRX",
  "key24": "3FPZYnWgryn6ZxZ62c1KAMnoTqnyCeUDc5mLtwP8qb7Pyp1upgXTSvYvjgvYBcQS8YqJ27k9YxkdX9TiRqrFFCpH",
  "key25": "5PPy5XsvE3qUFcpEPuAQpntxFh7Srp2NounJsQpBvhPBFr5svS1AMqwAzqC4scMGCEgrGVWNUu4PZfTCNNYJZ5N2",
  "key26": "2TCHHdKDPiCUSqCS82iN1y5wM3F8dB1dNGDe4DhpGp2G2v6yokfEKe2F8MWnLLyEu7yL89CN8oe8HcQ7k9iGEjbC",
  "key27": "3oQYYYCeSiPAuPX9p2tgm2MY1BoTXqPMck7rcqA1F9WpBfAtm89wimZW1oCnSWyW2426rSQ5fT9HfU7nbyd8CQ1R",
  "key28": "4mf65DyzUW8HooXN2bq6jbRzQp1AfMGaowTxAzevCCtjPKnYaWfQP2en98CpHoDyxCj5YoxjJ9bZHkNRBsRuHEJK",
  "key29": "nb7ZfSEfDarYqUVDPcagFVSZ7cgXy96QxpRgemoXf9L1yiBa18J8SDPkMQRnyQGX6n4tuqpqm9FWKmvEczTqhhq",
  "key30": "67GsZ1dBCpUeMU3cTn1cDJH5oX8nh4rFqhKANecD5iRpCTNQvn1rSJdcV5zN9LU257HCgHt9FXdTkmK4QSSPWWEA"
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
