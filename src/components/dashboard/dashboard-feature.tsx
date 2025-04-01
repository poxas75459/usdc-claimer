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
    "3sm2dm1FpjszQpe4HEiraTXPcRv96EYq2niXy1eswieoMF3zf43eS6HbM7TmFMMnYj6Yqy4KrVACQh4tWKTwesZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2voK9n6kgK5Q8L4tEn9xts4u5pkQdQ1UVffSKhEdWLLVkypnA9567wqEoQCc3Knv5wydUzzefJZMUBLGU9LTHJGj",
  "key1": "2MRSkPLDh5fgrMhoTH64s7v6JkrZP3wQc6xfKcfe9RyMjQA91rLKUN4wZRHibQYhjU8XaQrbsmWcLmKHvGS5U5YB",
  "key2": "65axXtkeHSSApy2sS5wqvoHV2NTpsRHyfUAd4RPbUkcrFfoCvgwLwgEaBWPipxWYWHpatTY6DE7FTuhitMoWK1zm",
  "key3": "4RJkE3n4FoVFWQWkGoNu9cD6tXJ2pcZLKjUnGn3kAJKEUvBrhc4jV9tDwA62Na8x6dvYGXVUXikzZZbE1bnsYWno",
  "key4": "41Zr6vtLsMgAeg5BRfhbvuAyfiSJMXQBVhh47NMi7ohQZseFoxvNbMbwAmdCGsKubHDhy6WeH3SYEVN4ECEwLVEe",
  "key5": "4ixuWSEkcUWBbVFtRFgrAdzmqSvBQhUc2beTaMvbVQEgj8jQU6sdzpv9y8NoxKTt8HkNfDmo9h7fkVxtBjLwejYZ",
  "key6": "3pitYkb7ngGPacbmeEUeHvJr4AhZTxgc9i7tdHFQinAYw1ofNBfYkf3C5kXcSRcLuA5x7is161au42YhtZqjRvWs",
  "key7": "92Fynv8kVRbR7dwvtmSmAhFeHZg2xtDv5idR8NF6PxD1ezPBsRdVCxhCZMhHeoPTXg6zVEB1DgHgvpNGGdA6C79",
  "key8": "rBmjNhrQCGykTQXaqe3RUjrPqnCKbUWXhBYL6ACG1TwBbxScHRuChGoTmZH6XDRFZ58fy2pTLn15ha4PH6mwFxU",
  "key9": "3o3g8v21V4CEAzACf3GCFahrcsKqWCex2nomYnYhfmzXv6bBRLbFLpeugiY8iAWStSMkCsQLoDLZcSa4bBHDSt8s",
  "key10": "3NRzhNBzhMS8hBxScz17y6J2i541k3opBRAqWj3yXWeH4LaD1FVY2VFd1xFzSCHkLwTPUy1iZsKRMHPK4vFXGpM",
  "key11": "2K3YuXYFQsxgxCwjRbjgPv2SSygeyyR3MjgV26itMzUTRELDGxkHgURBR3jgi2MWv5kyTcNGGn2f9xpGZhC4brkK",
  "key12": "2i1w7zS3jhnBmJhyWCsLYpqVnkocWYDqz6xRPVYPjkZhUpWfzQbcC1meASfSDiiW74RgAFB6r4r4ScwSDcDah2Au",
  "key13": "kaXLDt3XV5ry2PrxhSqXPvysDZFbaJdpjiQEQE1HJeY4hquJVHrpMizyBc4aZREev1ZS6NjhwkZ6vjDdAfsDZDr",
  "key14": "52FLoX6ykrHp4dSsXPxx9wP8hfhnTvzoKTGnyHr1um8Xd22SkR6Qs1Sfu4ragtV2jsad1HTPjywRGY6aZVpXdFDy",
  "key15": "FYhKFAb465e2W1kfjCsb1mYSCtr7Ea15KqBC13CbZS4vJNtppuQYZy8Z1rAc55c4vozxtSkB6uwzrecJoJk3Np1",
  "key16": "ZLDDtJZSbebmucoFPSmM7zWWqGeHAT5C131N2MkU7eSguewaHMt7LvMhHTuouL5MM81MD8Aoms354BRVK9jXeVN",
  "key17": "4FdgamMsm84pq77Nm2AGHUGoSc9TSv1n3aZmUXZPEUNuodbouRMcXtTk2sPAw6c81L6HRyj23qVN1djEDMDUmd98",
  "key18": "3JurmL9waD7eWCYJypVCJnQGSDRALYNiXL7ykgsXmhobfG3sPntXamEZpVaFFLwGVnfShQpQ1gtkd3VoEwtbsehZ",
  "key19": "4EujZShP2i6bZGczEk3rpEhjMPhtwmuricN7VRssNJW3S3uVNQ2BjzWsKbjZ9U7Zh4SX2wxZbeiyM9oZh3cj34iP",
  "key20": "4aHFgkQP4Xk4aqdVP4THT7UJwQrn5VT8kZnXJ6ruq7BUuugCwEskZjtpGS4RSi3oc65R93NNSa4dNKMcneXoV16Y",
  "key21": "5PRHjfKMuKAhYMCAzJY6BNUdoQbS1DXCLZNtGtNGtVrcWVTU5Gq3GSonAjWpaukkABsJs3HzPKw4xSBAvm54r21b",
  "key22": "39e5BdsHUW8gtzgFQVZppdqZwCWWoAWS5Lvzm38emWikkuqv8Y1RY2Bit7efiuwykE5UneXWoCyRWaGswUim4tSG",
  "key23": "4cuSxAjvC5ahGrdX7KA9gL7XkPwbgkvpVNPdpknUDqY7paAbYotwBkfBJ6PZR2Z81VZSzRBBq4K1AWsksXyJbaaD",
  "key24": "4496HmEY7gkFWm4qH6ErYNzCUwdxDFCGec39fx5y1RZx4BwCwcnCySvAvDmSydGj3BgLh5BcbdshN82CJqQKN5TS",
  "key25": "PcSgWC8L6iZmqx6M4E7b9ZTSPHErfyrjJb2zzjwNBfBqJxuJdYRszsDjPVeMVhWWBPT9BZ86KsX1uE9QSVE3wNs",
  "key26": "2QUPn7Te8Mp8aQq65b1sZB8p9qv1TPTxTWYvwSWXWzuYJhkEcWyphAG8hAhucPsHUx6ivZaEkmCscr2cfYYMSadv",
  "key27": "2kwPEqEPh3KwsWt2UyjrbGhLcSFpShi4zFQsDH5EAkVpCa3NmjD5Xr63EwcZroSPqZ47NzbBqQ82He1hre4naabV",
  "key28": "33gqUXM42zyvd7g6ojk7tjKC9Tta2rMhzA9G7DvMUBC3zLkxzYM18QVzWzQ4XqdCSRW73H3yoXzWTrb2hnnzceZz",
  "key29": "4LoVasGEF3EhePQL59G5XBm6tLadLrGfJWEFq4DVqCj6X9TZuXxMWUqrU4wYEuek3ykrPVAZFaQjZYhMrV4LpS4F",
  "key30": "2SVwFY5mZN7JHhgJPGDxGBLdR7nQpbwv6P26cEnvnY3M7gpXj5Si7efjyy9hyeoVY93yuutoh6BtvZhJm2hs1mZw"
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
