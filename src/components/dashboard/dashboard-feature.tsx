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
    "29QyLzUrYqeqZQFvcUTV5ytjrCiPjyCjyC5R1oMi8R7evjuNFsEb3Rd4qKcF13pucxKH7xcQLFEkZWu8P8BxeSiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUYEgWuSPFo1z62j3VwpuV8qHnBbkfLSxPNpZ2JW2becfDwVvYBS5uRbTvEL7BECdNG6FUfuUy61ubEC281JTDS",
  "key1": "3vxPy4sX9qdt1CRhctepBkEsAN8evSNBdM5G5FkPAZX4vDe7AqntTSVvUTTT8zavReAtLRdMKZxPM6CedcR9aUuc",
  "key2": "21VhDC7Pc62cqaJtaHhR1B7i7jjXnSVFcsDrPQ3MCbWsoachJkiBTPVcUMVeYnix9TbHKgiktBHZe2tst9DUVyK9",
  "key3": "5ArSEHhhWhVhM5G6PsfmWxrdRzRntRKZJTmhWUmGHqrZU93e2sP4AJSSdmZZzEAkPhNXp6G5Ppb2JLMS1H7ETbgX",
  "key4": "5A2eMgUbnQQTRtqT5hV1yRPCYzwgmxvt9MRKaaXgAZrDNS4gW8Bux2xJDpd1EXmsFcpfVh6PDYRgmfoJQHY7ttcT",
  "key5": "2Qe5G97aLS2xP8o3WNU5Fs7N4JAn14KLteqy8Jv7CArHJ8eynkp5D1Uhk9rqj34kjo4ZjRKqp4DgVRt7ewcZZ2Nk",
  "key6": "2n7PPm6KE62AYSEibz5gGs8EbM4HQX5STEya1x2WF56DAc9mjqnL2xrj5SFKKG8vX7C7hhqFHUqXJcak2aLfStQ8",
  "key7": "noXgpoDU78zgkozVxKAydCcgaAuvR3h6YC8W2pd4M1Z1C7Bs7vZkf19CP3kFkVoH2wgSnU2H9wiFQhqWXZntrfp",
  "key8": "4PSqzD5aFBsZ3JJNjq1zYacBV2wdBMWZSyaCHcMVcss9o5sXowPKgHneRhhgouWctXGpXQYku6szaSxxoM8bqzr4",
  "key9": "3QxFfwW3AQq6mzSxkSjDqGwPSMXTmczjqFREJGhn2FHziuuqdcUtzyU4YGxAjT4HeoUxiXyyLRc2N3Jxs5pGFzrJ",
  "key10": "CHi7L3pHTGGiY3FVJUMEscxyKUre3VJrBHuX5oNXo6NLjpXqxgW3FkeHCYcYEpy5m7aJBW5gP5P811tVmwQqWRa",
  "key11": "2nFQgzJL2DvRGEQVN1P9Y419MX3Ranf6pvQ4WHDDe9BLa4nCe2riYEB5qyfBSvNLmpqkkxPytWUBq3RYhbAY4Gns",
  "key12": "5184q2qkLTwHjUrVpej8NryaZn8SuxWmmrhXNnYWjX1RakNf3QWY4m78aLRdo1zFvUXxyJRSjN2RmssNA5gtMeNw",
  "key13": "2zfu1fyYjNytehPyFSPMSPByELtCfhCnr9gnSv4Nf9NxEBJa5YA6Pt1CWVK2uvK9h5QraWddbF4jauzasnvue1re",
  "key14": "4QxqqmiuvNuCGzjJPzz6jJaSWiWkxsj5T2L2HsWvjJogjQNkr2KNGYrCvmWEWMovxSNZ3xp1jUaQBtAnYqkuZ3AZ",
  "key15": "2PQPmsajzqPQjAmcNGottwHz1Gufzkfgw9Rx2h3rfHCQHGFHAbWp44FwiRJiuFxbSQqmm2CurgVBFNusEFycdmfw",
  "key16": "2UjHuJPMeKnFjYqz8p1G6mQKFfunUfbjBV18LXp2KqgbaAzc6A2cZRAKY8tbouPJ3Jwef6R8aS9tJMahK4Epqiye",
  "key17": "cZ4nmTWp6KUSMZ2Y6nhEWyt1UmaS2nodkChB3SZzi5zX3v2CnaX1SBqBK6Q9NgpuerCp2FEyNyioRHb2tS1WD5H",
  "key18": "4Ckjs8Myiv8Fh5VWqZzaAixrcGx2PNFEUwcfKq3PWGMHLyWWj21DdQHiVVnph7VLc6Tdipdoc5GHwa6wCP9XT41m",
  "key19": "3ifiHevCVFk77xBLdN1UepCAcGfTphpf8pyAbe7zb5AatGCFsKaUxDBdrXB9wxhSLX7LgHPcYrmr3J9isxzd96zJ",
  "key20": "2uT3wQy6FhtBPjWCYLz8a82J5q6KAAt6xLNM5jV7GrKZg3CGLAqJehZWxGpT9zxKrMWhvG4GaTXusZGJZWff3dM7",
  "key21": "5L6FEeFXryM5LQhPL6fJiie7hBmRKUjsxHiB6e6ggtS8JrDVAyXYpVQKEjJ8oxtsmdEqYcE7xXiqFuY69VfKEENX",
  "key22": "39E2Xvma6TmJT7R6a1wb5mzABSHnzDBGbDfgx2nQNvvBmd4inaXCWueUhbVuxnmNwEyfgeJ9kka1NzDD2rPyGcW",
  "key23": "xfwN4ZMCp2SG5LCarC9bs1dgccLK1UE5GexUgwMaZoJeYuqo8p1oQ8RoLrD2pvtixSi8YoeS168faaQQQ7YMzZ6",
  "key24": "3n3Z5hx7WCcwHH724eqpeuaWriAMPMUDJs7tPnHWeQjAE5xrxLcG11BMtvKXkewBoxX5PY6ZEzTtWoySubRJRsBy",
  "key25": "41uFRPCJb5LsB4DfRMrgcnHA121zX3NwVo5dns3rHbeSkbY5ijb3LyCRrZuLXGoyFWTB56uyr8Widb1DCV9Eyzhy",
  "key26": "2Fok7YTUWL1GRwFjpAdhj3XRnLDvNLVvWoDCNQhNkyj59kfsmV5oTfkxUmBU2BkgyfSLmVjWYPNUknhRYCUo1xo3",
  "key27": "36MsK1TWoGr76FPiQkpREUkhVzYNYketmGVazezYDH4CHePN3uR7wBgQQJ1gAbkSpbF9fsUt4bg3TyM3FLj18n8a"
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
