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
    "3mXrZoEZ5UhLycFoy58QZLWwHji74CoEMYZEGrT8SsmsjHFvDB29tt7g7R8WWNqbgxq491iAmkr7HbU4QHeyZfaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3izFgZ7LEvdSJsBx77q72eXbFq2az6hkY4mKCvB6WtftZGHXwAGVGGgAPRfH6utb556z8gCKrC8XmChxrGxfadyD",
  "key1": "4eabe5KtxZYRPji5pA4BMNqeTo6iJKiuxawEN1wsnLvdc2aUcY2g7nVmu1WSwmuZtETqe3VcHXFiXGQ2r5GLswpf",
  "key2": "52rk3MqrEPDoNqTH5T5ShMik8EyHqN3hsTfjzDApVVAEEsTNXGFCiNQ3V3og5669s2J2nBewqAHkyoS7gGNuSAUf",
  "key3": "HCXDezh28YBJboARbuswg8EyamiMYwN7pwEg8Ptz1MFiThKtYm4EWCLnqYsSMQHCCk7ox6d7tP2XqTXjViLh3dh",
  "key4": "3sW9beibS7AuUBZZAEDymAae7X8Tp6RsS7dKp8q4PkdWYEKKGHZpVDC3xS41sJJd22EjwY2ikYYKx8GzKouP2MDw",
  "key5": "4qSojvCYgYwSGy9c9MBnqHXp5mn6FqsVmkFTHVYCZSiu6qZygAgx9XRbap7XvdXz3yJDNWVocuGfKB24dGUFJ538",
  "key6": "KYBEVDmBijmcNSdQvzRhrTbjZziQaVgMbknCDiudSJKHL4ey4KXhhgeWCsGceUpiHTEd6pK8aZUPcZ5gq5At4Ga",
  "key7": "4hFWW6hgwzmV5kwTVCdUhkyXkRxihxtdFZvo6ekq4Vav2ehzEevaeYYxXQVJzVNnep9sucWeQN97KqmHU8582pNR",
  "key8": "46MKHoFsxFyw6HXATMqJcHqFvyEueAgNCp42NveH8jwa4YMXBxZyuEmvFJxYnqDeKWwpt8iECZBA18k9jYXQEW9x",
  "key9": "5qKKXZgNreDyfD1EGngca3Mg3ggeAf1RrCQ3sUuergm5zw4fXtNKP4NtYqNFn3PxJrHf9V1bycdcLgzAbagasbFM",
  "key10": "25c9ebdNWo362dF9h267F3wjXPPoftPWykyvNqg6CqR3YMugZMRkMPK2vii9jVNvsTB5CYgkQN68xseLSAyLg7gA",
  "key11": "3u8dCZ7QLGuUfLrSku3unZoCdmoX6C3DF3SJFrhxK9kq2bZ3ZmYHLkvss5hU7GsBjDYCXCg2gQTc7rZvi6xt8ADy",
  "key12": "5XyvY7AHvwurqeoQV2SCduZmznCmsBSwZW8V52NBkaVoDqB7mBLf7Tvs4ahKQ58rhXP2VAK58me1Mqw5zKyXReNU",
  "key13": "2KYn5jPZfv9wKujGsoP2kRGFG1weRKqWVxgVgUCvBm3Y26Tc8MbiiQchPg9rMFqE34kXdMpwp33vtZAv6yrX8cRv",
  "key14": "3CUe34L7Kk8FuHdRUSgo258qGdBSsUC2XA5xtbjB8kjpy55SLYjL4w7dhEwBszjBSus6Pe9yWmZkfhirAETxKaP4",
  "key15": "4zBbyVV6up2kAbZSLwpPHHNUwyZz5aPrZcfw9Y9MBddprtKrcsTaNtbwyYgCA4JKAzEqjB9VUsGpnmYAervSMyVQ",
  "key16": "5ZqfYoqXWM9jvP5gbMMdiCVGQJmR9BZMLKnuyKqhcduiNcqzEDNA7b42Sj4D1A6uGq76UFZEQTPxThB6zGEpHiaa",
  "key17": "2pTxFUZMwMnYpibVy6LanjJwYLbskaEumGa3QcsZrN1Ja1XhvFKsZPqW8zjNYvJspV42wewirAE3jusZR9hFAi2B",
  "key18": "5p7gXsUf5cqdEuRe5RLBtFJsNb4hhkmtnFf46nZTGP2TMygtVRgwLaRhxubLrA6ST3JsQE3ZJKTdc28fGbxsxopX",
  "key19": "4F116ewznJinVMRzoXoaJTfPrJwysnSKViMCEM97BqGSyhu1sZcw4pm1NzffxGUesUoCfhbWWSk2Yd3YBrWF3ice",
  "key20": "2MNVYyoBXW9ed2oRaPescMZR8JwpufVrpRWvAGNutvx5rjX2FLxWwKqcvmMcwLqGMB91wkXTsotwNXaXUwFneqRn",
  "key21": "4TpvaeqvrQ3cbfhN5ogHNJBiN4zVWthwLof7Ww4d4xdnYq1u6shjXa9gJz7Ux7rJUqKB782BiRLxPgYTBi3uvKya",
  "key22": "542QnoSS1A4NGk8Mi7HDKMx6satLbBUzsE7z4jHArMNLhz3Nd2czV4j96RghJmwReVQDvQ2iiw5UoX33CZfa2Uuf",
  "key23": "3aK123atNty9DUXurKaMXcw8VUWesyn1kNRcvN1zW19mHLsAJ4bWg1azNsm95EdSYa3bhG6Wcioyj7nkKhVSymzP",
  "key24": "5s6kZW6pxCXTGYyeC6sKegKUSu1dnHYTKQt1GZN9djpfhGJUUXM9yuy5PfNmu9Z8gL21W36jddDxesYfhhTuxsD7",
  "key25": "3Qh9GfY5XuabruFat38UNpcKe4f7MH5aermXyhLjrrcFZK2ZHGpsEB5Z2wEVUSPQasgZyWqUCuLeL4VbwUkWeisH",
  "key26": "hHa3HFd3F42oGU7UZUjy7PCdmMoCkhXx2z6QWCQwqeT7QDfeJeLbxazQbqbbYyhvVe5dURT8mm2NX9UmNNF7bQg",
  "key27": "4mbBHQpXnGNKtH5aASYnRCT6Y3nX4R72vRSmDWRVTmRgCVB1Rpb3vJzj1TBfqS5rDRtgN7npcvSu9t2vPTYAxs3N",
  "key28": "4WnMKc44WTpt9voDkwv94XwBkV5ZzzAgt9BnanLz4myuycEbx8yVwn6PmnbkLMTepWohB7rcKD98fKbfPLA698yt",
  "key29": "qxaACthazZVpY73KdgsuCJBqgc5LV4JgotEizhnqK5Yp8LuZS7YaMF2i25onkc32C7ECSEKLQ3dSxZdNcbEZhSJ",
  "key30": "EwNHsu23gjVc1K77u7wsQ6yp4YNsc56bx3pSA8jRFbZZ2yH7ereHepAQv8m7q55KFguoVf1yREsG1P29Wguv4zo",
  "key31": "52BWypFTMpnfHEtqFdDZ2Epb6L7J2bVsAZBbpqq1QqDmxRhRa84wUrNkF7TjByGzovhdtYBNEfEYoi22eBY1mdh8"
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
