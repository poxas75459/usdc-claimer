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
    "5itvQNezcwSP4rjwgdAybupJw8QCW8H8cnJT5cD9CczDRrcge5asNor4sit4Ezm9n4cpyXrLjzxn9sTFquutjRL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3j4MCoAHvvUeKFcK7fRMwB9tS6Kpo9eyTCZZsT9gasDB2voohQGzQvND514cvV6iVmWRkkri33mQjKzkG8bS1h",
  "key1": "4Y95488VdCcSrtexevmzzG2WbjW3Yw91CcF4NuzZxrGpVFRkFk9Bb4NLekQsg8w3QktSvnujYWePgCtx54fVBcfL",
  "key2": "5kdyhU5KdXBAWA2cGNg3piYCKGwt68suLmuc4Pfo2ctArM6jjQoqREzCaTUJtBcujDSDZBbMGBz2txCd9EXXdqbY",
  "key3": "3YNA36V62GW1KSwAFMzLKLkMtZntS7VDV22NLbtswyRs63od63d8gRzTS8bhZaMivG78vTSsvDR4XcUrsE6C1RJd",
  "key4": "4ByX7hPNYqN2cWtbqHRNc5aMggBxgrgraSxGwGza3QcyWN42Jup6gU47QnP6jerZfacxXcpGSbEJivLShQdDuyhu",
  "key5": "3R94AJbbViZDUfh7ddZpu4bp4hsQbnqJHUEp5PdGjUFUaNinmZj8sMMjigctVi96aAXBYzWbowKLTAUxRH9G7iEP",
  "key6": "2sgp1TTVyx1i8wthdq61k7DFzjCwHBfbpcE9zCzxecmFF6yEPymcqLTDpB1D1uv28m5pm8F6NG3AvuSYf5jwMyjH",
  "key7": "2yUbhBzvgttEEUj4wxJm7PtW4PtpTwkRSrUWqEoC1MA2q2kTsggQbTvSMnm5A2THF73Df4WUA5qFzV9w1NcmrB3z",
  "key8": "5iJzXP5KjUpSBT2TUYwZEPTw6tX5LDJD58Pdf81ZATrL72iCxk96e4Mt8miPYvMzf4mGGFmjqfBteR1bDN6Jj8Q2",
  "key9": "3Up8aXYb2SLXm8mYiHGovMqQKBtLxcN1E1smNPNh89jfcnxGE7oaJeEtzwUmLNNE3TLbh65pzCkLAMjS8R7co5BJ",
  "key10": "xhaoSmvC6uGQ3eMEBw5TknqpaTwt2N7c2cvzBAUwk5KrRzyG9N8xBBukfV82v7NwiDdnmeuziQiKvTE4t1E321x",
  "key11": "5g7iXpkmWchCQFG4YvXBibjQiEN8DHcUD4dPKNUZSrSqAsympgyK3YWkrBttKJP8yBNRbcnrVVN5dnYdQbqqFxFt",
  "key12": "3YxuCsMQzSr2LTrHC73fiVwvRTnvueDo1s3E3pjpwWpP5n7H7bNfZiZJC2oaSV75uLiYyui9KuDG2i78UKcz9qtQ",
  "key13": "2fUpffkmwEW57uakGgHQg2jFbKnrydfocxogrxX1WXfnjJvXH2tQEXmWT2TcFEVZ8GJLFv4p6C4yzJSAvLDDyQVj",
  "key14": "WBMByYTWfv7sifW5owzNKtJFyKkfPuYAYSvhBLNGhW65LvqbxYFtu4CJhHLZrC55HZp2qQJZrfZ5EpC4zm4nBV8",
  "key15": "2C6q7hwcmnpqxZ4GbmRPqMhzF3mN1CqwArBwqLRpXzCRRrLJQLEuf54PahNPTq5ToP9aazKckaCZt4bvB8G8nnjj",
  "key16": "4TqRBy8fiaXgdsrreDTJGkX2eV2DJoC2xd2nRj6iMwoGbSg3bZfhScdNKG5mnffUdd3wUUHJSHkz22DMsWiTHAiV",
  "key17": "3a2UuqfiuNWd1HASmSmtKb1ubUaWSjg9D7E1CuBWTzP9tuAw5raSY2RDHBwwWQpbfPQgqTpKUu97fNHCJeot26FH",
  "key18": "5SUL3XRNMmqzDdbhbLsCH1Q9WJqVnwoBZJTrreqSPnvmQ4JbBaZpL1gdPXWWooUuMZGYaRhnBr4pFxio3EdMNSPd",
  "key19": "4HUrupAGRtGKam8vv3KWHq42ii61nAmLfHYAQijNByqgnyLHuLqZanfGrVf8LXtERYXhiCZEQHJHx8Ja6ZuRDZzH",
  "key20": "3x4h45FaQt5PNKobBFDSFDQj8a8BzAHpfrynrV54rt2sPrVbrFZ6wzHoFYDg6n1NK3qJjffjU1guKmjph5CZrhab",
  "key21": "58nJtVzGy1HE24m9iNzQNja3H3w4Wi3hTH9Lmbc8o4VrQpMYPU9Uh3KZYtswQGouRHXMSB6LjJgdNvtKfeMzhveZ",
  "key22": "38wz7K34uVUHQnKCKdm6KfYdV9qFBwsgkohJon7jk5ner9dP6hiJwg2NdVHpJMbE3KVvStVdTUh3UL6kmZzKQHH7",
  "key23": "51RadP6JPaBeCD8Gc3214Wuh3BrgbUxSHLL85w5dZuk6ssqqmYcHoXo4aEK4j9oyuuMh43SDSopgEYtKEe6cE8gX",
  "key24": "26XWDZDUMsDWGTBJ86X8SKpkcFNzJ1HR6STAW97W5ZMBbghxtA6XE4i51dTNgvKZSoGAs1sfaVBaFHdw6rRXfBfY",
  "key25": "5HGhMqE89eHPbL5NHroVLDn93KLyKiVhJHMeCsdphYRnBrhGPdetntQbFdeooYXLSQsMKHodpUDeW8WyCmY4TFMx",
  "key26": "5AmiKUYsuqXWqo58tULrmhv8iXbM8tMLqwKXoR79uF55EwPoJhqJPW3DAJctTHBB4DjaDEmJrU25FhTuU8g55kib",
  "key27": "3PLTe7ZZwYPgGx2RSMsnv34S85XEEpWPQbucF7b1ixDtYtUMSgQCdbDQzxWNoBSbsBbrHLYRn2GTgUXKbqNbaao5",
  "key28": "4zRV88kMs5RANk6KDFvstfG65zQDjj9gk54pEx9sdiZqFpMyDPjithCUBL2nB9uDf7TipKpBn7Fe6pCvDMekf4rK",
  "key29": "2Sztwagx1FT4DJnndgxMLh92ByEaUE3t6sPbpJ9Jx57gmAG52gMHpspwLPFFuPNbHvjadyAv5qz4S4hBbTpwFrp3",
  "key30": "2THKjRSi1Mn2s1Kd6qWHCBeLyqJ3RXN1b5GMdM88zSeTDf7YDkJd8mTC6VmSX95tT13wXkBRiorS7dDmS3FhNnRG",
  "key31": "3gRZLeHit228cFt1WULYYjhbrYbJQJM4x2o9M1T5ERsrXRuaeMXmd2M8yXb8qFBa7Jk8hrrvk9kbgUivyys1V4rE",
  "key32": "28ZM2ygP7PPhEjykKp5ek1u58xRJTqr34U6GUhcJjdPfvXGuHM5oEsxxg2dEKAuGPNfwfrmbm4vtRXPaGCf3mAWb",
  "key33": "u7iTgvzDhFqhjkC34Mw4Mtec9LRtVUvcsqxqqmM2khAwomjXJxbbWnfsDVae7pgbnjeMG4ijc5yvEQqRDwL5uM5",
  "key34": "27yq2HiMUwerjawMRa5vPikgp6Ndq4XwPjFy99SsE25aA23aCD9qi1UfFMZBF4i8xxtKDJavwCN1YqDSMWdoSNfD",
  "key35": "63JJyH1FtXABk61DjNTzrNUZExv9M471QcaDy8jnG9dnKBn3jjPKb57LFC5aVPwujsrT9RnvG1MmbeRVEzaCfgaw",
  "key36": "5jr9wLCPJ5WdK4pXv235yUp5kN953NF9RXqFVsVSoywEJ6zkjdoJNy7svQBn1N2uWAu8v3Lb3SCnW1L5RXRpmdMy",
  "key37": "3HbvPTTSQM9FLCh4R4ZEHKvFw8UtarKqCqS7Tv18Zt7kdMgSnsbEUK9eZ5mqdo8yYpmZsmXCcnf5Bc2niN6uB16z",
  "key38": "452F5QD8U3qdW1W98SN8gDjnRerjAkEYTMhHxEL1L97oXdat9MRcbYQHSEDzaP13UytzGkJbX5US6N6Eij6zfZN1",
  "key39": "4q5S3kC5iLiMpak8YSSVZzkACj8maJuy6PLqVYE7AQ7Rp5Gn262PDdtyCLdEmNA7zTkiawbQXY2NxWZ29bSrJLby",
  "key40": "5D1kyqK1SW4DPQqnyhnAVEJ46n4YXQrbUhP9XEMP5f8e2bNkZLUccYkd3aBu53bq3gNJLW2mUBzsHPJMvDysmJkr",
  "key41": "RnKSE2f8oFDRYJkjeZbWKzUhXKDA1VU4gcUAfvN2tJ5Qu66BpgtGex2G8wEJsvw9X3RsYFuZUcHjANYJwFu8CD6",
  "key42": "2UXPjWEP2N8ZDMvLwG3cHsx1xmgkv72yErBZwb2aGctqfcQmsrSkj9q7h25JnN8k7Wqymz5AkiCbuNNSxCYPVwAm"
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
