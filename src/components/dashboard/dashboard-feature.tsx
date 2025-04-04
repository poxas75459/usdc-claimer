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
    "5pBx2GJRHySvLGdq8am6QyGUxv5aBdqrhg3GpzE3YwEaLvARbsumd7kFiH9Rcw4zQrJSk6DuxZrk3Wx57xWKsCYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNm6JA4BVVBbMCSz4TWYwGpyFv5noyc6ZY5qVZ2RQZa8SbrCkpFBrZufR8taW6XdFGMD1kicyBNG6AAdoBCwDpW",
  "key1": "ZKdevJt4jKQmRPRcJ5paVG1ckPraQpJDAu82UsKBFAmGF2ywEGRAKr2czkduu7PyP8CZiwxzqN1cA4bWdQ3riRV",
  "key2": "5S8CNqCBP79kGxTz6uUvRYq33jHxzyoT8Ei8ikY6XbqKcgGdorUUMThEpCHZ5TMbE5U91BwbeVWLdxrRbXHMc1Nj",
  "key3": "3Fq6c62PT8apUjTNCL6fhjVSxd1FLFg7Ehuwp5EtrNN3Z9Y1YpgbF2tjoRfhuw5aM8YQ8ZJVWqnkoKPhM5XiRuqi",
  "key4": "4pL8bDWoNMYMtyYjRgEbAmGtxK2sE8yK5ZjLCKwuaCGbSbnJoeUFhDVG6PHpmL32ZpZf37UUrwEtSFdayRk6Pv2A",
  "key5": "2vyzGKZjFYDhczCtjbzcPPN8B4KMzo4iDG5ePv9g2TjXzJZvJUhXcv1ZxLVMKC3yFPNysVmiEuLtM5XfFEFyzuSm",
  "key6": "26exre8NqAnNJfmgsUt4zEVfnshcmJvmaQPzYR6fbH43y8SWgwmC7GjkHbBJodNR8TAyLCAzmapuTmH7JoGBmHtU",
  "key7": "3QqaTaJBmTeNaSKLL1Q4RvZkoqa9UuNu489Ro53vYutMKZngqKmuYhkZ2X26ssDX4rnkkZ1vvVi2xcaziWRjyXZ8",
  "key8": "4GbuQZC4CjBiPPS89k9yu5hLV6in55MdG3tJ2vsrZr7jAjZCi3AiqNFkTdzAwKhAZs2iw3kR3QZajaaJMRZAVH18",
  "key9": "4XJDQV3MVzLD5fojTBFa7QYb5SmC4vxkMDVKubMcXwxi4xNUVvpPELdGfEmuttN2jRNnDpPiZKPswMjf8V8wXahe",
  "key10": "4EjgrC4YKTBZczjzeF1Q2m6Uz4WwCLbvuyJ4p6fkZHYmvu15L8oHL4eXnStK8tRApDDo45V5AcPGSSFkoksFc7gV",
  "key11": "3JpiZPbKVq8DsU9LidJEssmwVLqzpkEanfvCYGCCTiXMqaGnAtr6faotbdzV5FA14otfVntee6ZdZhovbwWD96F6",
  "key12": "2CgpRberLYtdR8fPqtbTQFYdnpcJqaSW3LENNoLRpPuYNnDmng8gAfoPyq93jgPrrcrjqNprN8v3mLFYXe325wfh",
  "key13": "4zG9JvqmojxHYz3rVrRH1C8QczBNSxtD4joQfoX2QgDtm3DZWdF8SSfAmfmbXgqq7jYCUXj1DiPMpnrTrqyuyYbU",
  "key14": "mvLWCsWCWmbNGnxovb8R6vgtCPeYbL69R5GGknFFMkjjQTBB5Ym2cVqndWEnvCMB7nzjxaRkpN2YRQrMftexKct",
  "key15": "5UCHW8RHPPTYVxjnP3M9vStG7v15Bs2mMV7C7dbB2bpMwVzBf6NVkymYimndEBh1ZYsDLvNBy7xNtabrZod9mvVt",
  "key16": "2wgAVSj6MjtXNUAbzY5Ue3mzdWVoqYvfKPUz9GkUEbmo6Rs3dptKTmLG9XRrKkgUqehwde1UXH5kZgnm81ad48Hr",
  "key17": "2YqrUqbKaKa9375NiKYb9yaUiBZGEpz2vtre4qi6WaJkFdJfSojBFb1e5sFZuc8Lvyb2VCsPKuz5LqJXEygs658w",
  "key18": "5pFszjRGrcASpR2AEHgMmnh3rX3cKeFE4Xv55FahjrWLg9igpv9Vx89BW4RjW1tJV5xvnmQN2P7jBsTYhr3TWr3h",
  "key19": "5F8sxtPZ9d6sWHHWV3JedB6P2fqAu6egDtcD7t1MurQgXds43ZK2RyoGH31zWocPBZyCXKd1SCNK4RArXsDwuytb",
  "key20": "vo4fVwG6hgcdiiVSuRzTaVnSbfwqy29Rnr3QX6ww4XYKdANyntW58RPkJrCm6rfXHb8gEYQkaYr7F2JEfk1muPC",
  "key21": "2Nmpe5yBoJZYfSrr76dvkeHgxJ6zrGWNALqugXKDRqraNVoYdfu71jqYMFcVCrQ12ejdiC41aexVoKMVnZ9W4nax",
  "key22": "4pm6vSV5t7oZ9DRwRYUgSRzdYnkV1JBehsWrb9czBNgdwkd79m2j1qkQVC1A7jAVMuxyGd1TCmQ4ySennZTybTaG",
  "key23": "4zVKjUxrA5WZYWnMCAUkbEQ8rqjwnktrNGXqSzQtvN61HLH18WZn6BEwmjc7ZdUo4KkBYih2YbQF9ZysUoaooxy5",
  "key24": "U9LKRo1J5ZY8Co89HmRA3p6rBDAh6TBqsjX8TvDdwKTUufJSMBUfq7126y6qA3GVxEqwXwfHqmKovErq71KQvuX",
  "key25": "2m58jwfwQmN7CQj4kpMy1afYkqXr65ZKDnT6HWo87S84iqkYSDHwb11ci6u8d3iSZjHqHyk6XuZx6YQqWALoLZvp",
  "key26": "NjETs3zkPpJNEAbwiWqPHwWmhFn4bvXv37r6C7dGLosj7iw7BxGRfxB9VVpZ4ARk2J5n2yfTfGQV4JqLqeTwZxr",
  "key27": "28gctxN6GMPba1rNhdBUyx9EVYhyoUB6SATHWx4PnExsv57VpFLDdEeWGie9rQbc7Jue2SDjY4vNTeisLPi3Jc8p",
  "key28": "5SsbBjZPYtgqLkHgDAY24hoBduTnaUfkvmwT8qwa9dgUZqekc1ionWvnUebtpbqvxFirUSJN4uYtWuvCKtx5RLzm",
  "key29": "jmRkUah5AWEYqUhj8dNKtmCiKv6dLZihAo49wg8kJQevdreeDmpV2oq853doe9k6DT8Vb9hH76pNRFjdZrFwT44",
  "key30": "nGayVztGw8VkeEKXVkja4tC6d4MxTnAHbZQ1wdU3yDyA6LqYzDGyAMPGgMMdJKGUsJ6Wwp6uTRoLgV2pFqvWpxK",
  "key31": "21pBEJXxcRzgKrkMLsDfstAADtYtNAmd6VJpmkCub2PDK8Dwk26H6wTqWVzp2abUbxkgCaHPqbBvkA6WkV5HQkhk",
  "key32": "4hZzkAGUGc4bqgWEcGFDrkH6vZehvwPHfaDp4DRRiQQk5bDp2AKwCJWoZpHdPcEAHJDg7dxMHn5Z8VTAzQCBXwLJ",
  "key33": "5CwYDeVJa1mPUdCK6iwCBXtdFU6WoMCwkedc26E4mwZwUBh1VJZANNuCANp8Ba9a2dxziinGzBQC2Fc6MAPyy5uh"
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
