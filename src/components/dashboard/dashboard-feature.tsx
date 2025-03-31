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
    "4r6ySJsPxzN4E7vNpXtJgcug6WqeU5GeLBdU3idj1uYkkx3xBTkTiDvNS1Sp2Fpq5KvRZt8vsKL1awQnwy4T1VgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eabz9C6XE4aiVFLZfQfs5AM2vrvnsdHqhocxWEDQZh3DShyJdJX8V7aRf2ebCMxUdEv52xtwBjErNgoFwmTo4Ws",
  "key1": "d8sgazkkhA7y2RoHkAh4B3v8Qrfpe6Qvyjs43gLnhxeHKhvkdAvefAP8oFABHsvu27wWw4gVwhXP7tJqHv762L1",
  "key2": "KibutXy3mkcUJyF7RU5e99S1k2EMxxaDpweJH3bmBjJAdommVigd9dne6oK9Dgf9xXhTro5AEnC44stveBsTXtM",
  "key3": "4mKiX9yxR3HAdrdReGL4ark47BL9jeA9m9YMvQxK51JPyY36aNZUxE6VgCzdw2VGfP8jrwZdokeQFSbB1GRkgsq3",
  "key4": "644LDyAzGSaA4AQGeznky2T3GDeqyhPmwZj3ayWfjc2gRkUpdq67efLCJWhEKyaCMHBkVULZdFnxepTN2kfaPpTE",
  "key5": "4wMBpwCJy13puFtgFh7AA6rAce3dkCD6LNhu2MUubDDhCtCkdtPDy7mG4aYGsW2KAHoreREGr8UAk72JTB19KFBT",
  "key6": "22cxQzHhH45bGHzp2DkhRVPrWuNJTKh9RoKqvUyeuKFhnacT9kyHodXtwwtfJvY2wm5PqbSfmH22YZVAs3HsqiCZ",
  "key7": "4FB8t8YvkX3CcrXdZwhKeK2pQkQAyQ9Sci5NWsnXSJsTyEbLRWi9C3whEPu4paGjtQegPYAowL3uEYzc87Rm192k",
  "key8": "5M1LngFkrRhreimt6brUWkdn3WYYUDYyvPUygYJDry2UMczVQepEMYg8MrS9jnLUhi4R1JXVwGwngCrM9UeTcHA1",
  "key9": "uczP5mM2fh8Gx9K572MtFK4xcyrKM6r1kTWdForJcau2qNGTvnVMRhRXPKBik4vjo2Sc5YwUxgzNtirJykab1Yx",
  "key10": "3YzVNMGD2hfZxPj9w2nYcpnSnYqhNP7EMVE6sy1mj3RhUy1FSqzFa9QWNFLyd43vvxkW7GCrAwyiZNXQrc8nudfz",
  "key11": "k9MAt8VZnH9vBCj8TWj4Eue1aaHSeAUZubr1Fwqd8Vk5Fp9z5vaxgatL8wx7bADQ4VfwdFhgMa1pyVSFSx4gVAP",
  "key12": "4E43tdxdG44g2VrxcARgx9rmPkmS5zNDaFkXECvitDVM4ZHtM8HtUZKFLdnzY8uyG1UxiF787GNks7sfxAS6Wu6Y",
  "key13": "3x8xJU8zbSw2bBXBSxtjR5msbRPpijt5BjM9UcgHMbby9wRt2RyVJEf3dNehPoGsGLJdKxsx3JDRgnpVCq9HRKYp",
  "key14": "4aXW7GkVU71zBdj6YPibDaxm5C6aLksNxCpsqN7zCfjuXpmX8cJqFE9xxH4doYXeVExyBrcUysQZDvaX1LFFEgNb",
  "key15": "5Sabi193Yn5dhH8ndrCkL92o71aApX85UiGkbEcVjr5XVgHfHG6LV2rDLEf7ux7NQ8L523QPbY4RzgS2u68bpM2W",
  "key16": "2Hd2nXS9fsDksuqGDkkdmkD57SVxp6vaWKwmLGwJrSCJ7B7yWoQjBeNL4QVaYJgjwhn5NX8ZCQozTYGEAgz2ff9q",
  "key17": "5WHEuvnERnR2c6Htwt5g9EykwsjqzBv4sPXKtxTSMsLQxV7cqqLJfPFrqYEin2Geejs6xpZxSkKVD9t2r8kktPn",
  "key18": "UsWRpDkUdt6XnZNmVxYXqA9Zv8GMsSeRLSmSiJNEceLaTbUh1Pwjzkc2VCZzKAG2y4AS63czvR8fxwMS5pDWt9e",
  "key19": "59F8Wunz1FVGWSjgMpbsDZiudkeHLTMPrNF3D3jiSeaMoAgqwnu7hE8cstLPSu9h4RAYvBg2ZtFkjnA17ned2XSh",
  "key20": "5WQYG1YQpNRFFxDdxzKV4nXQXUWM8Rv9YFhmFAK3nGP55jyNa8j7AX17zHVrt68SdfS8Mv5Uwfyj37rzWJV7FDNc",
  "key21": "2vhmJ8jBktHZYzBXM53MYHoqsVtfw8LWdYpMiLXpp71NwUAoc2Ag3tr9tJp8AjDp66pfPiHunYMqFpqn7pBGBNA5",
  "key22": "4hvjKdiz2AWh2czBdUMyibfxRRCMRL5pu4ByvCJRCHMzEd8mhLi8yVmYUY99wRQRDngtCEDQ2N7DMaiXt4JLxsFW",
  "key23": "5d12pA59ZfcF9MLgMXvpYuXVcKVkbG7e6jFooQwfVbQ9VykDTYxTvtE8vs3P4wBjMVQi4Zn4MaHb4EfEnR2CMLUL",
  "key24": "vrgooAQE8YpAayLQGhmewc3on8D5fC5WuKchezKzyAYtnXs2A7j5AAsfCSvrWDaynzsQWwjAygNGDjXx1CEFNRC",
  "key25": "3DSjG6coX4uNiUhK5gV2bJpL2Wgxa848FTWbPCXmnaa8FQDWXvUbuzqazY4EUyhDZkRwJyJMfZTaAEUxEw1zkfAi",
  "key26": "2x4uW6yBXohgk127rtKQrfg4ZdaYGsjAshrTf5Jm8onZMszcdUJzNJSmBGx5a3u4mggR6Yi2ufGFgCoVTAH61rbx"
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
