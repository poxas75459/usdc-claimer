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
    "5AKoXRzDi2Gib7ARuvc7ESVsMRxBFu5UmtjHSFUspLW57GX2d6UQdQsG8o13SaSdirwTm7E4o9u1S43nG8TPwgiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8M12akS5S3cbooj9RAdJ6rLgBVu6t4FHsNRd3LwFYxLs62aBxyjGf9Rr6TmQKkHJWDDFTN9Hk7KibtMGjxPyh4",
  "key1": "5N3gqs85RS63MtzLPNYYFngq7Uns4YbiqX3DRvbXUtoWnVQ3MWG31zBfJG1zsAku5zWSNYRovw1PXTb9hCMZQD8N",
  "key2": "5quPvSVC9UxNnKSF5ujkS2BC77C5YLCm6mWnK9gap3vDi7UFSADF94t41EwK2bEBiDwAMkvAq2Rb7jSiHBKtnJxq",
  "key3": "wjFLJJx2fokpWJ7Vk1qfz92hVoqiAA4ujX4psWpBxpyqU3tvffU7rWGEpfzVLWo6c3T2osNqv71mHAjQXy4Hs78",
  "key4": "5NqNFcrCt4ynU8Nkdryi29KuzkZzZUED2eKGFmYVDaYATRitgjzK5N4mkTEZsia9xqR4Tkx5TYSSiyiU3Rzkuk9W",
  "key5": "42smTNQu67uNysEPqAmvwrtbkieEZ2zKeFkCnyFoP8F8oYB1cSaDqp9L9Sd94GYjupEGpqoGcRAYm7hcP8EtrbHp",
  "key6": "2SKazbap2KzWxLWDUmKsJ3aEea41qxhKZmUqBbhHtghrj8jm8UGo85Y1yPwppPNxQNSu2neZipHp4GqUBkb8DUju",
  "key7": "5nWhEyr4ZskJSJQ1LgqZvujQmKdnHqD5T6sySi845LbiX8QUPUdw1bCMDWhkPgLziaWdnN1fHWLQpUBBxWXhD9pq",
  "key8": "5rrKgyucAVvWgi9nB4LhGCXH2AQ569P4pX5VvpkNLvwRTmdGvsu5KGyhe36ZayiGh25jwcAQSuhYCg6nF5Fhpcvs",
  "key9": "4rv7fFcaN9yij3VgpL2dtz4mopAzAbryERvTHr49EMjCoPPM3N7qSPc5ApGqADBXFnDC1VkLX2RjNzArSQGW5cue",
  "key10": "4seeLi6vSntn77PNfze6w46TjQ6govJGgADtC2fc6tYwfdiYgA1i4FZqPEZhfbpWx5uBFVGGJ51NZAeCSMidPvFH",
  "key11": "YKHodPgrAXe5tmPw7usXjqH7yqgkx1dGD5ppF9bwVKNzTd2Q2puY4YWfNJaPSvFwy5yJGXpx3t8EUjjhi6R9CCj",
  "key12": "3Fq6T9KJHyvoP3ZW2i8C3iKJC21utif2ebeGD5wK3qQkWwVC9nwMHnAo3rowtqoHQKWeCXQ8g4WtEPaifEFBdZQS",
  "key13": "1EYTmhJff3bG6tZX8xTYSp9xX9rDaUVVX6f4oWrQFz7RcyQVhfiqzm9NXG5yH8Wc7zakavSTTPChsSP4cYKAaDi",
  "key14": "5P2PTJr6erCyogACVi4KMEn6zyqj8JWdQbN41KAohmHZUERzKUjPT7xb2wdk6KGw9bv3uJY2JkoDYJ2bU8KTdssu",
  "key15": "4GUojSg7RWTaC7zuK9DubzbZb4SKt22VVTgLydMjzFi6ganXG5rnMPtFLKxkU7ydJaBdTS9HkMmE3AceptRS5Dnv",
  "key16": "xTXvBnwawdYaNBYWYVRUn8wxnL519LEU1LmXRuk2e9j41NeKKsmEtxe5cL5ZJmy57GvTNvrZEKaywyssT4eetcF",
  "key17": "3CjEp8K2NmpYLtqZ3ZGGaGArKh6RtY8QT1RiEq4dVK8zdWK8j34r8btJXpKT2r4N2JgXVQvQDYj9r7CwDeV8dRer",
  "key18": "2ytQJ6GSyShWtvjbuZAJVrg4263iqyaFvC13bnwNNd8U3DKA7r7E6B3k2YpsSHT543qiR2NVVWDcK4aYvPnEF2Bk",
  "key19": "kNwJM3ZjgQCQBUfRg1PY7Gbp1DMfdZmwMxKKX8dL76o7fsgEZ3NvJPAzMxc9HrbbW7H3gW5BtfiNg4521Ud64mw",
  "key20": "24sii3HCuMSHsK9K8ZFB59ZqCvVn9UVeHUr7K8g6tB2o6NHZFxBFXF6WTEPbPkVWHrKBmFKkWyV8CjDYDnHkagAr",
  "key21": "3gQsaKTH7xVokqTBU4DBUCfVzbQXL7F5qtEKYEphbvL5sciKmKKRmbik4rNCiPA5uX7qjUqLzzFHXHxg88VMXwwG",
  "key22": "2Y24ZDabrFw9vaK4KxMCabKguv4cgzte9gJNTw4qAAHxsgwaYCUzSAM6X3W85hRLyLWfJbmERFTe9iijCiJdSGmG",
  "key23": "F3Nba4qP76n69FFN3ng5ZNTHPFFg8K4wbFMocEqGfXHtv5o2373PBSi1ZWA4x8EkZX6vBHavQKimX5YVZZ9L7gW",
  "key24": "4XyoTqUDeSGbxxqMEqF8d3mY5Wiu5Hau4CSvh5PbA4WcaZp6ZrzGhTovwUNH242847TxzCTaqd9QqCLtkiJeYykM",
  "key25": "57TjQ97wKPzr5gVaxYmbk6N5KAiw9JZL98VhaGLuscNSQLmDbByHEaYe9yK5yVEGbESXiQitcfkPhPEnNtNdqfQ6",
  "key26": "Yp8epCnGn3Zdq97y6p3GwjLkSbLrc96pXHEARoRB5iNuxXdht7HT9M6rbGGLHJVm5r9pfk7azEzNsgMAMT7WpPV",
  "key27": "3HiPXf3eK6n9aE77F43y8wDdiwkoJLfkzJ3SNhSQXGrPjh4NkVnZ4UEQypSPgS4JMAVJu1Hrrhew21KpFaSJZeEh",
  "key28": "2dVir1ixTgtg15JSvKVga9kmHQEHbae4TryjUcKMyC63tn4rpXuJNnRDWg6SJq3TUN1aGDMAU7zobKspy1NiGak5",
  "key29": "5ATp1eUCHKZvw2gLmFWrHb7cdzDJJSxFhXXPDHQGgvuAAx3GZ4gsfgCRfPxEDJHsS24Yg26Pisiu9N1XGx1Zbm3",
  "key30": "4NyfyPMUV6bgsaGCC5WtUy2ph76h2fvUt4hZMuLDyJLoGJXaxtronqG9tfGg3wVpEc8zfkVfU89f46Kaz9u1oRcz",
  "key31": "3fs3NLuu1c1Yh8HB951wa74eibZZUSH9FiuZPM5PoVh6zPjy7qDtMey9YW2KaBwosRiR79ThZ2vyLqgn7PG8MtdH",
  "key32": "2Svxi7WLiAwi7M3rBCFypaEvgMFaGbQnhkSQdtvTDYWKNesEuDZ73hvdnKGcoDpjiFLeQdLDMkR43fqRAhv8xGa9",
  "key33": "335KaTFVsD9h1VGx9sga31kFwer2wQAruxmqSSxrcjjDPfovydo72secTbAaB74nALxGQuCdUZ5xnQgJN2ANaBCp",
  "key34": "jjE1fGo14ypED3hr8XvaXFh7i1tgcVywduHBeWSnNqCKvmmo4uQuCrwfWK4yAKSVq4SQX2bABQHEW3ZX4edw9F8",
  "key35": "5qqHan1BwLHpEXVPb7VmVWYLJ4dFZwM8zm4DZ1XYAWqiHQZPRTEcYGR3mQAEGdUfHfAx8JrKhBhn6VpVeq2dn6ex",
  "key36": "LkGyKopxtaE78GXgycJ8WqQe8FAkkoRh49nLrFE8sn3h7vhgeh5DUESBocoaFqgc16oXyJQVY8ReR1g6AS7cT6x"
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
