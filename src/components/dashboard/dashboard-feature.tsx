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
    "4qYPkqJwp9Ds7RSQeyjkrbNsmvzYbgbr1BFTBnboshMFsdue5Droe2CdYS7uyyjnh7xdKYvzZE15A37dYx2gNMT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzFvbf6MbzKifj3zzwDnQq9GEGQVx7GiC166prT4t45s3UpwizxxvTiRnUhAVBob4Bc1hruFTTAGheoz6HECCtH",
  "key1": "2P2CHmwPCSFQoHZPuyfp9F5uyzGnuFujC6a3yFSQPquXnWFdeCMhj9pfA8e9zaeqWtq6DNA6kvs48UUjfyjn31z7",
  "key2": "3oJuKJszgSWxryYMmCKSjTSYsCY6BGEirB56reBa8JsLdzEZRKb51cwZGkMNMXQC8oTGbFxUbrRP1WEUQUvJNBiS",
  "key3": "EM2cPgsE4cuV5eDtEPfcQ9bZiyjMwW7M72Y5CJ4LTgYrpQ1QtchZne8nyBctwVX5JSR4su3s5YYtEJ2p87qKNmq",
  "key4": "3anu56CPXyoTEurJej84ZjQBvyk7XbJyEK9fEsh64Mupe5N31fEsCn5xjZHu8eP7ipEH2PywS26HTpVCvBx12ij6",
  "key5": "2dkhRwdDmDeVBZxj6L7VQ5j7Fuc9uEfijrAkwM5QrDtyCrYQecHrnSoPwUesVBFGu864jjstzQC76c2xpwD7yUAs",
  "key6": "26Mx9iCSLkbECr82bDPiQLwnYhrPwbNGDrM6WCBJxhUXbJVYf7a7fSAJkWE7NZLBeSEbTEm4CysRP73ybLngRG29",
  "key7": "56QYzKj7mt4xiC9j2KJkoB6uzZHLjPvUM3BDc2DDEmcUSgoJoeQf3kKzY95QjRA4ZKcKvLFDn23itZVkpb13vgGt",
  "key8": "3tPcGjTaMTC44JeCc7wEzBmqLYGBdArUKS3XfdPcTixXoPENBKNtNCZnDTJdzDbKGKBbm7ByGvuuPciKMaYSdGVN",
  "key9": "4vWtBd19mEKKbd5y7gGkWhFfHvPn32UBSwZKhFFmdpFtu4E1g24fKSrxtbUcP1NmWAxQ3xkYhdm2xGrymx7edCbT",
  "key10": "4nj4RSNCdET1F5ACoN6yk5cyPADrD2s4p2EiKoxPY2uFrak7L3sshL6Yv3y1wZQzKCcWRvKSEMcPQJXVjzkmzunC",
  "key11": "QiNPhcyRQdyijorTuGrbPERcJZp1gqwtugQjCuXB612WJqB1Z4r1eoSgUbr7tLGfmGY3RXyKxRpbYH65QJgXpGw",
  "key12": "5ZpthRfJxmRZrwcxT5os5rqyA6VtzSE8KEnfoJ1zZsbBLogvDeoR9EPNVjpu5BpJS2K4wUpASTWzduzm1XN1XjtA",
  "key13": "3iK2jBFfG2MUHUGArJFfYaep36ae8CErdr2BVxjFhzkSr8Z47RrscHM44BsgcXwZwRJntJbzhrvYqB8NuFGU8QS6",
  "key14": "2QS6b4G1J4nk2dJjdGARTiT3p17zkf5qqAXUrNP1ZCj2UrnfHQyrhp9oN2AMectxWwrte1H487Q4YL9nTL2eZqhh",
  "key15": "5iuBBcaZSAtaA4tg7Ac7yFTSvqgSciUvFQdJNvUTMrb2Boo2RypiUowHUgEySixvVLUx79p9NQ4EBE9v2hmd7Up",
  "key16": "FnqT55sytVkUiLVeFCLHuj3R6HH5LWP6BqrbhALayRprZfPPAUFQPVTvE5EAKA443d3zFE57CZyntWxorxUbF4t",
  "key17": "5xYTUnGJQxNzEVvY6yeiUrmJ4HwDqwq5UH8KuqhjWzX1iEYJ5hEHVtnDydFtRfUWAnTLQd4F7xtrPy4S8XEqjapH",
  "key18": "38FWp3MffSCA6JQqY1AXRhkq7yPCKnYmNKhysHtJGTsBnWoWmhD7S2D2MhY1akuQxiZ68WSj212R85CBdtEVPu5p",
  "key19": "3bttkm3hvENY7kdEP6zYAhg81bV2n5ebfQjXExWrkabSgnB4B64PLocimumZmXWrS75YA9S2sF793KqWBRgG1x4t",
  "key20": "cQDFBHA53NCXRSXMr5g4i2ZzEBeMSUvSMyZka3vAzDKo13LXQ9Ni52WHxbFGndhAF4PqfB5Wg1s7hZAdhuoFzre",
  "key21": "4wHb5ah1Hry7KTu2MmdKwzoN7p6SJNjakEkAKr8UbJpC7jyYLtQoH2Kd658caksq9GVKXxAdqBRx1rG7JXvDQxbZ",
  "key22": "GvsHpmmFeZUn6XKwrAKxCk7ygCzcRsh8tx6oipkjxa9h4m6PyJpaWSkXnjq7sZngtt6DPWEjzmBtKzxX1nVQqFp",
  "key23": "4vcKN7qouUx3eT7GJEGydkpwKarsZjEWgnER54zfxrfWV8L1b6diAvAdMtTjRxUhAwxuXWxFyVLCJSZXg3KoMDpn",
  "key24": "4KUTPcPFKi6ChkG8EVXKGToFPVir6nwDsVvPFyd1ba5AyG5ko3Qk6aWJ86gcuKLNcJVoJ55UuNTemwUdyn5eZUKA",
  "key25": "58W3EmhgybzJBNvgTzW1JTvWhXAQjYw5kmvu9ehcXWMQDCznLKKgVsS5cLqYfZHRbGap6EQ1cGzsZx426vhkZSBE",
  "key26": "2yEvfgPXSwgYMAvEgMSoB9Z9A6Pkb25ai5cAKWEkkcQv31v2p2r7PW76LtorSMrbt3xbVuZw5abpjJ9RnrBA3KRw"
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
