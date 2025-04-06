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
    "2Gw894ZGuy4Rbb61Asj4VUZ5GYHqTgfHvsbxGhzRooTQPjQLdn2ZTtrPTyCoeWskA8W5Bd2tkPNaXagqAucG8zXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMFqkNN2gp9ToZTMEtxy1qDQ9GPVKukseXf7fciuVKLTMamSvgeinT6yKSAR3L46e84ab7Ec5aA1sv5pnX6VGns",
  "key1": "3ZW1bnpuzgrpcmkqsPdEVuu5oZPQcGkL2otrJ28kqG2RJYeLbFBmbkp6hgwspNBoYAyPiWfqXfCjmkAVBxpuTbmi",
  "key2": "4HvzgTQZBNiKZYvXVWZpF76WA5sU1NAbgEXAQrdd1MEca4zuc5hA6h6vEfAS748WWAfQjWssPjdvxy6KVys1qLvk",
  "key3": "5pUdopHXZfg5BKSQmA6tS3Y6gBARZBvex5r37SzibsiKgnGNF5t9RbACbFNgdqo52v1oeXqE6KzkvUHMmxKLVh5R",
  "key4": "xXeEkiTXuJDnensQANdnX5fNKipZjQ6U9aY8ukjLvDTg798wBs1j452H8rs95v9y5UXfR8XwRjRxymmhm1zj94c",
  "key5": "3Dpc2VbRvTCH6SK4zkddiXD7zfYUbeo9gJYkPumRCRdaBECAw8u1BY51Yk27hqvS6SP5qSBwBiFJu6uZYAybET18",
  "key6": "2NPAwr6ADRhBZczaJZP6LG7ME9exXSd694ACsA1yjmgLsaEQtWAWTWswBfnyEaZXAj1PgVouN6GykYNVcwX7ZuGR",
  "key7": "3Vk4Y7PiyfA1hDPTf1dvvtreJjMXBNQo4JgKM34cM9PuMd5AbdpDZKCNn9qCdshjeokghEqiuTv6uyJtnGNM35ro",
  "key8": "2XFscUM6KQPoZvqmg3vnPcxpv2xVcaHLkSuZY2RJCw26WooEXcHVxn9dQ9xseNz4dTRkJMph1ALFMb5bmXoW6yEB",
  "key9": "ounaiEAHcifuvbEQApKPofTJ3n9mwAqm38BBw2RC7wouj5yAvJT6boG3EHpZx76HsYdMkP66jv4pnXt7sFR5Ubh",
  "key10": "2zfY4FYK4HJLPTZRdCHw8Ag6xt53oNqVtxbVsBkDqbNL5P5UermpyvD2R4BDPMMgUC5EAsPbSdBD9iBqKSQVTihr",
  "key11": "4Euzeg4nue3o1N2aJwVrMEgS52GdGYHmaW8qWyEXtEZYWGGrWURxcjRjHhnnAVEPS6F8T6NeGpaAa8FgH8c2asTT",
  "key12": "3KjxZJn87RFwKdxo45UUEXZveFEqy7TWttMuJ1Rzc2NiFVyDHWRFYeVhWs5fJWzSchaiii4hgPBJqejpkGdqNheg",
  "key13": "4FyjKfpvmEW3QgDwKnePZK9NN3qtLQrpvnddypjEGaYqZWBcg655r5wtyEvZMBvU5okZBHspU7BEnaNTr2VGfwBH",
  "key14": "3hBV86x6aut3DuYarxAMYsqJcqQ27jYPwh7dy8g31iE76FgvQTfTps1oDugWY3g3i7AbweHSP7g1rh4GyWJvBEMf",
  "key15": "2m5YR4BqB1PBirMA95VzCB7Vji6AmTDK9uv8b23epbtv1AqWmPWUuuDPVraqaWgqahy3paWV8YZM6vRWGb25hcv5",
  "key16": "5HcUoQ38pCxLjnv8RE1apy9TQjd4KMeZeuw3BtCTaiaMKp4th6r66eVh16HKVG3SwkcnRaVPjibwq7QswXGCsdqR",
  "key17": "2DChNJkgFpXLA7By7Seh2Fu9KREw5nxTf1sreH95H8AfMcZSkA3h3j7uMRLnVvSJCk7ZMkAxcnCMFQ61tRUbMas1",
  "key18": "5WgCRCJE6VsuLL8VhDouq98beQEHN1eikGtBDtGpQpfddArzd6M8Y6Ar4bvhngFZhBLQLJM8q8tW2d2Y22wmh9Pj",
  "key19": "64cWmddibBkjBbvybyY8JqHWTKtmYgnSKPYLomt8JdkGZuCCpnJWr3inANCmT9tVehWUnzj9z2BadV3uvGMd8he4",
  "key20": "3smXVL83dCrwknSCYg8PqAKGYHrxLqbDd5dHE1bZh42VGvw1hi7kj1uxoZ4xyB8LMMB9DrcYP97CPAzupvf7PfaV",
  "key21": "41xEhSk134z677DaFdoAKuhVCYmiqqcP6K7WEKpVhJC8XjsbyKoWS9dGHZTyTiuMh4bj4mk7ssi1F5d79m3sU5fS",
  "key22": "2b2XzkN4UHHkRsqWxviSug5VXjYjEqFrHBHPCJQs2u9mRMANdE9JXRyxcDdapLsok6AXW1yDZM83bx32k5Hxn8vE",
  "key23": "2ueox3raWLGFZQciuGKsYQeFVEJKKvaANJPJs34UXPZyWRTFKdeTBx2mTaJaxUcwez8NvKXVr7csBpfLPgc9fctD",
  "key24": "57bR4cbhNCf2NpBWnLxFZxrCnd3nZ9CNzkqrchr8qma3hJbus4yZFYxjyBTMFDuR2bkKVdFEdhodktV6wUqg9AYe",
  "key25": "F7MsVLg997atzmgYksfavRaJSmA7KSXkoR6FxrRzdfXwTTc1Kc18h6A8XebTTXocyr4L2mRXoCJMcdvu6FidqJx",
  "key26": "5f5mC4iEgZVnT7L39BRxTswcABzQRJHQ5RoBSVTi8d12wvRHjMuUYVNmJUCDgBX6L1R5hBgJY1XDswTJnv6ZWjch",
  "key27": "4n7shhwYVJxAuJYbJrfQbGMyVmHrgVXjLHi7Cdv2VzYmyJ9MgoDdDzHkW1CjTZbWDZkJWB6NM1NSanN8nHdkX2En",
  "key28": "4xnRjLDJEbb73zTX4PsRbYrxBwv6iNRTH4d2y25bfic3HmLFaDJSEyw6KhKbmg3d8EcskPcmF8vc2tMQa9qikiET",
  "key29": "Y7DbwtjFvHVjYAWihay48kA7Ugy8LRUNrRsU6fJJt8reWxCMVUiF8xqapwYoAGPMJLYGKYVMFAz7ES9C79pEz4r",
  "key30": "34vnR8E5K9ZujQFyUazA1yzH3B6ZQFpS4LHupGqyoBfjzCzAFj915ejaZ5dwUyvmzT9oL6ujn4CLCEvZiec1viwk",
  "key31": "n5fNYPGTYhvircjomYF36kKq6chT6i1QizZPpL1rc4V9k59Lw2YVcWrNMQksP6dcY9M55F4mg5dFiCGB17qPXe2",
  "key32": "234V4t7SCRHfCZqiftD2x9hz14a3cUeqdS3UvGVdmAvJ5u3ubVQ56nmpY9ab4PGLYQpWzR6PkqEVau3TYZYQLJua",
  "key33": "82DbUaUZXwP4YW1foQcJq7hpk38Sf9P9oCYuCzd9mAkPhNQUtna59frXmX3Hym2TcTRiAYBmZSBxHJ7osL9E4nh"
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
